/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiFormRow, EuiFieldNumberProps, EuiFieldNumber } from '@elastic/eui';
import React, { useCallback } from 'react';
import { i18n } from '@kbn/i18n';
import { AggFunctionsMapping } from '@kbn/data-plugin/public';
import { buildExpressionFunction } from '@kbn/expressions-plugin/public';
import { OperationDefinition } from '.';
import {
  getFormatFromPreviousColumn,
  getInvalidFieldMessage,
  getSafeName,
  isValidNumber,
  getFilter,
  isColumnOfType,
  combineErrorMessages,
} from './helpers';
import { FieldBasedIndexPatternColumnMultipleValues } from './column_types';
import { adjustTimeScaleLabelSuffix } from '../time_scale_utils';
import { useDebouncedValue } from '../../../shared_components';
import { getDisallowedPreviousShiftMessage } from '../../time_shift_utils';

export interface PercentileRanksIndexPatternColumn
  extends FieldBasedIndexPatternColumnMultipleValues {
  operationType: 'percentile_ranks';
}

function ofName(name: string, value: number, timeShift: string | undefined) {
  return adjustTimeScaleLabelSuffix(
    i18n.translate('xpack.lens.indexPattern.percentileRanksOf', {
      defaultMessage: 'Percentile rank ({value}) of {name}',
      values: { name, value },
    }),
    undefined,
    undefined,
    undefined,
    timeShift
  );
}

const DEFAULT_PERCENTILE_RANKS_VALUE = 0;

const supportedFieldTypes = ['number', 'histogram'];

export const percentileRanksOperation: OperationDefinition<
  PercentileRanksIndexPatternColumn,
  'field',
  { value: number }
> = {
  type: 'percentile_ranks',
  displayName: i18n.translate('xpack.lens.indexPattern.percentileRanks', {
    defaultMessage: 'Percentile ranks',
  }),
  input: 'field',
  operationParams: [
    {
      name: 'value',
      type: 'number',
      required: false,
      defaultValue: DEFAULT_PERCENTILE_RANKS_VALUE,
    },
  ],
  filterable: true,
  shiftable: true,
  getPossibleOperationForField: ({ aggregationRestrictions, aggregatable, type: fieldType }) => {
    if (supportedFieldTypes.includes(fieldType) && aggregatable && !aggregationRestrictions) {
      return {
        dataType: 'number',
        isBucketed: false,
        isMultiValuesAggregation: true,
        scale: 'ratio',
      };
    }
  },
  isTransferable: (column, newIndexPattern) => {
    const newField = newIndexPattern.getFieldByName(column.sourceField);

    return Boolean(
      newField &&
        supportedFieldTypes.includes(newField.type) &&
        newField.aggregatable &&
        !newField.aggregationRestrictions
    );
  },
  getDefaultLabel: (column, indexPattern, columns) =>
    ofName(getSafeName(column.sourceField, indexPattern), column.params.value, column.timeShift),
  buildColumn: ({ field, previousColumn, indexPattern }, columnParams) => {
    const existingPercentileRanksParam =
      previousColumn &&
      isColumnOfType<PercentileRanksIndexPatternColumn>('percentile_ranks', previousColumn) &&
      previousColumn.params.value;
    const newPercentileRanksParam =
      columnParams?.value ?? (existingPercentileRanksParam || DEFAULT_PERCENTILE_RANKS_VALUE);
    return {
      label: ofName(
        getSafeName(field.name, indexPattern),
        newPercentileRanksParam,
        previousColumn?.timeShift
      ),
      dataType: 'number',
      operationType: 'percentile_ranks',
      isMultiValuesAggregation: true,
      sourceField: field.name,
      isBucketed: false,
      scale: 'ratio',
      filter: getFilter(previousColumn, columnParams),
      timeShift: columnParams?.shift || previousColumn?.timeShift,
      params: {
        value: newPercentileRanksParam,
        ...getFormatFromPreviousColumn(previousColumn),
      },
    };
  },
  onFieldChange: (oldColumn, field) => {
    return {
      ...oldColumn,
      label: ofName(field.displayName, oldColumn.params.value, oldColumn.timeShift),
      sourceField: field.name,
    };
  },
  toEsAggsFn: (column, columnId, _indexPattern) => {
    return buildExpressionFunction<AggFunctionsMapping['aggPercentileRanks']>(
      'aggPercentileRanks',
      {
        id: columnId,
        enabled: true,
        schema: 'metric',
        field: column.sourceField,
        values: [column.params.value],
        // time shift is added to wrapping aggFilteredMetric if filter is set
        timeShift: column.filter ? undefined : column.timeShift,
      }
    ).toAst();
  },
  getErrorMessage: (layer, columnId, indexPattern) =>
    combineErrorMessages([
      getInvalidFieldMessage(
        layer.columns[columnId] as FieldBasedIndexPatternColumnMultipleValues,
        indexPattern
      ),
      getDisallowedPreviousShiftMessage(layer, columnId),
    ]),
  paramEditor: function PercentileParamEditor({
    layer,
    updateLayer,
    currentColumn,
    columnId,
    indexPattern,
  }) {
    const onChange = useCallback(
      (value) => {
        if (!isValidNumber(value) || Number(value) === currentColumn.params.value) {
          return;
        }
        updateLayer({
          ...layer,
          columns: {
            ...layer.columns,
            [columnId]: {
              ...currentColumn,
              label: currentColumn.customLabel
                ? currentColumn.label
                : ofName(
                    indexPattern.getFieldByName(currentColumn.sourceField)?.displayName ||
                      currentColumn.sourceField,
                    Number(value),
                    currentColumn.timeShift
                  ),
              params: {
                ...currentColumn.params,
                value: Number(value),
              },
            } as PercentileRanksIndexPatternColumn,
          },
        });
      },
      [updateLayer, layer, columnId, currentColumn, indexPattern]
    );
    const { inputValue, handleInputChange: handleInputChangeWithoutValidation } = useDebouncedValue<
      string | undefined
    >(
      {
        onChange,
        value: String(currentColumn.params.value),
      },
      { allowFalsyValue: true }
    );
    const inputValueIsValid = isValidNumber(inputValue);

    const handleInputChange: EuiFieldNumberProps['onChange'] = useCallback(
      (e) => {
        handleInputChangeWithoutValidation(e.currentTarget.value);
      },
      [handleInputChangeWithoutValidation]
    );

    return (
      <EuiFormRow
        label={i18n.translate('xpack.lens.indexPattern.percentile.percentileRanksValue', {
          defaultMessage: 'Percentile ranks value',
        })}
        data-test-subj="lns-indexPattern-percentile_ranks-form"
        display="rowCompressed"
        fullWidth
        isInvalid={!inputValueIsValid}
        error={
          !inputValueIsValid &&
          i18n.translate('xpack.lens.indexPattern.percentileRanks.errorMessage', {
            defaultMessage: 'Percentile ranks value must be a number',
          })
        }
      >
        <EuiFieldNumber
          data-test-subj="lns-indexPattern-percentile_ranks-input"
          compressed
          value={inputValue ?? ''}
          onChange={handleInputChange}
          step="any"
          aria-label={i18n.translate('xpack.lens.indexPattern.percentile.percentileRanksValue', {
            defaultMessage: 'Percentile ranks value',
          })}
        />
      </EuiFormRow>
    );
  },
  documentation: {
    section: 'elasticsearch',
    signature: i18n.translate('xpack.lens.indexPattern.percentileRanks.signature', {
      defaultMessage: 'field: string, [value]: number',
    }),
    description: i18n.translate('xpack.lens.indexPattern.percentileRanks.documentation.markdown', {
      defaultMessage: `
Returns the percentage of values which are below a certain value. For example, if a value is greater than or equal to 95% of the observed values it is said to be at the 95th percentile rank

Example: Get the percentage of values which are below of 100:
\`percentile_ranks(bytes, value=100)\`
      `,
    }),
  },
};
