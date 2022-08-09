/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React, { useCallback } from 'react';
import { i18n } from '@kbn/i18n';
import { EuiFieldNumber, EuiFormRow } from '@elastic/eui';
import { OperationDefinition } from '.';
import {
  ReferenceBasedIndexPatternColumn,
  GenericIndexPatternColumn,
  ValueFormatConfig,
} from './column_types';
import type { IndexPattern } from '../../types';
import { useDebouncedValue } from '../../../shared_components';
import { getFormatFromPreviousColumn, isValidNumber } from './helpers';
import { getColumnOrder } from '../layer_helpers';

const defaultLabel = i18n.translate('xpack.lens.indexPattern.staticValueLabelDefault', {
  defaultMessage: 'Static value',
});

const defaultValue = 100;

function isEmptyValue(value: number | string | undefined) {
  return value == null || value === '';
}

function ofName(value: number | string | undefined) {
  if (isEmptyValue(value)) {
    return defaultLabel;
  }
  return i18n.translate('xpack.lens.indexPattern.staticValueLabelWithValue', {
    defaultMessage: 'Static value: {value}',
    values: { value },
  });
}

export interface StaticValueIndexPatternColumn extends ReferenceBasedIndexPatternColumn {
  operationType: 'static_value';
  params: {
    value?: string;
    format?: ValueFormatConfig;
  };
}

function isStaticValueColumnLike(
  col: GenericIndexPatternColumn
): col is StaticValueIndexPatternColumn {
  return Boolean('params' in col && col.params && 'value' in col.params);
}

export const staticValueOperation: OperationDefinition<
  StaticValueIndexPatternColumn,
  'managedReference'
> = {
  type: 'static_value',
  displayName: defaultLabel,
  getDefaultLabel: (column) => ofName(column.params.value),
  input: 'managedReference',
  hidden: true,
  getDisabledStatus(indexPattern: IndexPattern) {
    return undefined;
  },
  getErrorMessage(layer, columnId) {
    const column = layer.columns[columnId] as StaticValueIndexPatternColumn;

    return column.params.value != null && !isValidNumber(column.params.value)
      ? [
          i18n.translate('xpack.lens.indexPattern.staticValueError', {
            defaultMessage: 'The static value of {value} is not a valid number',
            values: { value: column.params.value },
          }),
        ]
      : undefined;
  },
  getPossibleOperation() {
    return {
      dataType: 'number',
      isBucketed: false,
      scale: 'ratio',
      isStaticValue: true,
    };
  },
  toExpression: (layer, columnId) => {
    const currentColumn = layer.columns[columnId] as StaticValueIndexPatternColumn;
    const params = currentColumn.params;
    // TODO: improve this logic
    const useDisplayLabel = currentColumn.label !== defaultLabel;
    const label = isValidNumber(params.value)
      ? useDisplayLabel
        ? currentColumn.label
        : params?.value ?? defaultLabel
      : defaultLabel;

    return [
      {
        type: 'function',
        function: isValidNumber(params.value) ? 'mathColumn' : 'mapColumn',
        arguments: {
          id: [columnId],
          name: [label || defaultLabel],
          expression: [String(isValidNumber(params.value) ? params.value! : defaultValue)],
        },
      },
    ];
  },
  buildColumn({ previousColumn, layer, indexPattern }, columnParams, operationDefinitionMap) {
    const existingStaticValue =
      previousColumn &&
      isStaticValueColumnLike(previousColumn) &&
      isValidNumber(previousColumn.params.value)
        ? previousColumn.params.value
        : undefined;
    const previousParams: StaticValueIndexPatternColumn['params'] = {
      ...{ value: existingStaticValue },
      ...getFormatFromPreviousColumn(previousColumn),
      ...columnParams,
    };
    return {
      label: ofName(previousParams.value),
      dataType: 'number',
      operationType: 'static_value',
      isStaticValue: true,
      isBucketed: false,
      scale: 'ratio',
      params: { ...previousParams, value: String(previousParams.value ?? defaultValue) },
      references: [],
    };
  },
  isTransferable: (column) => {
    return true;
  },
  createCopy(layers, source, target) {
    const currentColumn = layers[source.layerId].columns[
      source.columnId
    ] as StaticValueIndexPatternColumn;
    const targetLayer = layers[target.layerId];
    const columns = {
      ...targetLayer.columns,
      [target.columnId]: { ...currentColumn },
    };
    return {
      ...layers,
      [target.layerId]: {
        ...targetLayer,
        columns,
        columnOrder: getColumnOrder({ ...targetLayer, columns }),
      },
    };
  },

  paramEditor: function StaticValueEditor({
    paramEditorUpdater,
    currentColumn,
    columnId,
    activeData,
    layerId,
    paramEditorCustomProps,
  }) {
    const onChange = useCallback(
      (newValue) => {
        // even if debounced it's triggering for empty string with the previous valid value
        if (!currentColumn || currentColumn.params.value === newValue) {
          return;
        }
        // Because of upstream specific UX flows, we need fresh layer state here
        // so need to use the updater pattern
        paramEditorUpdater((newLayer) => {
          const newColumn = newLayer.columns[columnId] as StaticValueIndexPatternColumn;
          return {
            ...newLayer,
            columns: {
              ...newLayer.columns,
              [columnId]: {
                ...newColumn,
                label: newColumn?.customLabel ? newColumn.label : ofName(newValue),
                params: {
                  ...newColumn.params,
                  value: newValue,
                },
              },
            },
          };
        });
      },
      [columnId, paramEditorUpdater, currentColumn]
    );

    // Pick the data from the current activeData (to be used when the current operation is not static_value)
    const activeDataValue =
      activeData?.[layerId]?.rows?.length === 1 && activeData[layerId].rows[0][columnId];

    const fallbackValue =
      currentColumn?.operationType !== 'static_value' && activeDataValue != null
        ? activeDataValue
        : String(defaultValue);

    const { inputValue, handleInputChange } = useDebouncedValue<string | undefined>(
      {
        value: currentColumn?.params?.value || fallbackValue,
        onChange,
      },
      { allowFalsyValue: true }
    );

    const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        handleInputChange(isValidNumber(value) ? value : undefined);
      },
      [handleInputChange]
    );

    return (
      <EuiFormRow label={paramEditorCustomProps?.labels?.[0] || defaultLabel} fullWidth>
        <EuiFieldNumber
          fullWidth
          data-test-subj="lns-indexPattern-static_value-input"
          compressed
          value={inputValue ?? ''}
          onChange={onChangeHandler}
          step="any"
        />
      </EuiFormRow>
    );
  },
};
