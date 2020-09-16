/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import _ from 'lodash';
import React from 'react';
import { Feature } from 'geojson';
import { AbstractStyleProperty, IStyleProperty } from './style_property';
import { DEFAULT_SIGMA } from '../vector_style_defaults';
import {
  FIELD_ORIGIN,
  MB_LOOKUP_FUNCTION,
  SOURCE_META_DATA_REQUEST_ID,
  STYLE_TYPE,
  VECTOR_STYLES,
  RawValue,
  FieldFormatter,
} from '../../../../../common/constants';
import { OrdinalFieldMetaPopover } from '../components/field_meta/ordinal_field_meta_popover';
import { CategoricalFieldMetaPopover } from '../components/field_meta/categorical_field_meta_popover';
import {
  CategoryFieldMeta,
  FieldMetaOptions,
  RangeFieldMeta,
  StyleMetaData,
} from '../../../../../common/descriptor_types';
import { IField } from '../../../fields/field';
import { IVectorLayer } from '../../../layers/vector_layer/vector_layer';
import { IJoin } from '../../../joins/join';
import { IVectorStyle } from '../vector_style';
import { getComputedFieldName } from '../style_util';

export interface IDynamicStyleProperty<T> extends IStyleProperty<T> {
  getFieldMetaOptions(): FieldMetaOptions;
  getField(): IField | null;
  getFieldName(): string;
  getFieldOrigin(): FIELD_ORIGIN | null;
  getRangeFieldMeta(): RangeFieldMeta | null;
  getCategoryFieldMeta(): CategoryFieldMeta | null;
  getNumberOfCategories(): number;
  isFieldMetaEnabled(): boolean;
  isOrdinal(): boolean;
  supportsFieldMeta(): boolean;
  getFieldMetaRequest(): Promise<unknown>;
  supportsMbFeatureState(): boolean;
  getMbLookupFunction(): MB_LOOKUP_FUNCTION;
  pluckOrdinalStyleMetaFromFeatures(features: Feature[]): RangeFieldMeta | null;
  pluckCategoricalStyleMetaFromFeatures(features: Feature[]): CategoryFieldMeta | null;
  getValueSuggestions(query: string): Promise<string[]>;

  // Returns the name that should be used for accessing the data from the mb-style rule
  // Depending on
  // - whether the field is used for labeling, icon-orientation, or other properties (color, size, ...), `feature-state` and or `get` is used
  // - whether the field was run through a field-formatter, a new dynamic field is created with the formatted-value
  // The combination of both will inform what field-name (e.g. the "raw" field name from the properties, the "computed field-name" for an on-the-fly created property (e.g. for feature-state or field-formatting).
  // todo: There is an existing limitation to .mvt backed sources, where the field-formatters are not applied. Here, the raw-data needs to be accessed.
  getMbPropertyName(): string;
  getMbPropertyValue(value: RawValue): RawValue;
}

export class DynamicStyleProperty<T>
  extends AbstractStyleProperty<T>
  implements IDynamicStyleProperty<T> {
  static type = STYLE_TYPE.DYNAMIC;

  protected readonly _field: IField | null;
  protected readonly _layer: IVectorLayer;
  protected readonly _getFieldFormatter: (fieldName: string) => null | FieldFormatter;

  constructor(
    options: T,
    styleName: VECTOR_STYLES,
    field: IField | null,
    vectorLayer: IVectorLayer,
    getFieldFormatter: (fieldName: string) => null | FieldFormatter
  ) {
    super(options, styleName);
    this._field = field;
    this._layer = vectorLayer;
    this._getFieldFormatter = getFieldFormatter;
  }

  getValueSuggestions = async (query: string) => {
    return this._field === null
      ? []
      : await this._field.getSource().getValueSuggestions(this._field, query);
  };

  _getStyleMetaDataRequestId(fieldName: string) {
    if (this.getFieldOrigin() === FIELD_ORIGIN.SOURCE) {
      return SOURCE_META_DATA_REQUEST_ID;
    }

    const join = this._layer.getValidJoins().find((validJoin: IJoin) => {
      return validJoin.getRightJoinSource().hasMatchingMetricField(fieldName);
    });
    return join ? join.getSourceMetaDataRequestId() : null;
  }

  getRangeFieldMeta() {
    const style = this._layer.getStyle() as IVectorStyle;
    const styleMeta = style.getStyleMeta();
    const fieldName = this.getFieldName();
    const rangeFieldMetaFromLocalFeatures = styleMeta.getRangeFieldMetaDescriptor(fieldName);

    if (!this.isFieldMetaEnabled()) {
      return rangeFieldMetaFromLocalFeatures;
    }

    const dataRequestId = this._getStyleMetaDataRequestId(fieldName);
    if (!dataRequestId) {
      return rangeFieldMetaFromLocalFeatures;
    }

    const styleMetaDataRequest = this._layer.getDataRequest(dataRequestId);
    if (!styleMetaDataRequest || !styleMetaDataRequest.hasData()) {
      return rangeFieldMetaFromLocalFeatures;
    }

    const data = styleMetaDataRequest.getData() as StyleMetaData;
    const rangeFieldMeta = this._pluckOrdinalStyleMetaFromFieldMetaData(data);
    return rangeFieldMeta ? rangeFieldMeta : rangeFieldMetaFromLocalFeatures;
  }

  getCategoryFieldMeta() {
    const style = this._layer.getStyle() as IVectorStyle;
    const styleMeta = style.getStyleMeta();
    const fieldName = this.getFieldName();
    const categoryFieldMetaFromLocalFeatures = styleMeta.getCategoryFieldMetaDescriptor(fieldName);

    if (!this.isFieldMetaEnabled()) {
      return categoryFieldMetaFromLocalFeatures;
    }

    const dataRequestId = this._getStyleMetaDataRequestId(fieldName);
    if (!dataRequestId) {
      return categoryFieldMetaFromLocalFeatures;
    }

    const styleMetaDataRequest = this._layer.getDataRequest(dataRequestId);
    if (!styleMetaDataRequest || !styleMetaDataRequest.hasData()) {
      return categoryFieldMetaFromLocalFeatures;
    }

    const data = styleMetaDataRequest.getData() as StyleMetaData;
    const rangeFieldMeta = this._pluckCategoricalStyleMetaFromFieldMetaData(data);
    return rangeFieldMeta ? rangeFieldMeta : categoryFieldMetaFromLocalFeatures;
  }

  getField() {
    return this._field;
  }

  getFieldName() {
    return this._field ? this._field.getName() : '';
  }

  isDynamic() {
    return true;
  }

  isOrdinal() {
    return true;
  }

  isCategorical() {
    return false;
  }

  getNumberOfCategories() {
    return 0;
  }

  isComplete() {
    return !!this._field;
  }

  getFieldOrigin() {
    return this._field ? this._field.getOrigin() : null;
  }

  isFieldMetaEnabled() {
    const fieldMetaOptions = this.getFieldMetaOptions();
    return this.supportsFieldMeta() && _.get(fieldMetaOptions, 'isEnabled', true);
  }

  supportsFieldMeta() {
    return this.isComplete() && !!this._field && this._field.supportsFieldMeta();
  }

  async getFieldMetaRequest() {
    if (!this._field) {
      return null;
    }

    if (this.isOrdinal()) {
      return this._field.getOrdinalFieldMetaRequest();
    } else if (this.isCategorical()) {
      const numberOfCategories = this.getNumberOfCategories();
      return this._field.getCategoricalFieldMetaRequest(numberOfCategories);
    } else {
      return null;
    }
  }

  supportsMbFeatureState() {
    return !!this._field && this._field.canReadFromGeoJson();
  }

  getMbLookupFunction(): MB_LOOKUP_FUNCTION {
    return this.supportsMbFeatureState()
      ? MB_LOOKUP_FUNCTION.FEATURE_STATE
      : MB_LOOKUP_FUNCTION.GET;
  }

  getFieldMetaOptions() {
    return _.get(this.getOptions(), 'fieldMetaOptions', { isEnabled: true });
  }

  pluckOrdinalStyleMetaFromFeatures(features: Feature[]) {
    if (!this.isOrdinal()) {
      return null;
    }

    const name = this.getFieldName();
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      const newValue = parseFloat(feature.properties ? feature.properties[name] : null);
      if (!isNaN(newValue)) {
        min = Math.min(min, newValue);
        max = Math.max(max, newValue);
      }
    }

    return min === Infinity || max === -Infinity
      ? null
      : ({
          min,
          max,
          delta: max - min,
        } as RangeFieldMeta);
  }

  pluckCategoricalStyleMetaFromFeatures(features: Feature[]) {
    const size = this.getNumberOfCategories();
    if (!this.isCategorical() || size <= 0) {
      return null;
    }

    const counts = new Map();
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      const term = feature.properties ? feature.properties[this.getFieldName()] : undefined;
      // properties object may be sparse, so need to check if the field is effectively present
      if (typeof term !== undefined) {
        if (counts.has(term)) {
          counts.set(term, counts.get(term) + 1);
        } else {
          counts.set(term, 1);
        }
      }
    }

    const ordered = [];
    for (const [key, value] of counts) {
      ordered.push({ key, count: value });
    }

    ordered.sort((a, b) => {
      return b.count - a.count;
    });
    const truncated = ordered.slice(0, size);
    return {
      categories: truncated,
    } as CategoryFieldMeta;
  }

  _pluckOrdinalStyleMetaFromFieldMetaData(styleMetaData: StyleMetaData) {
    if (!this.isOrdinal() || !this._field) {
      return null;
    }

    const stats = styleMetaData[this._field.getRootName()];
    if (!stats || !('avg' in stats)) {
      return null;
    }

    const sigma = _.get(this.getFieldMetaOptions(), 'sigma', DEFAULT_SIGMA);
    const stdLowerBounds = stats.avg - stats.std_deviation * sigma;
    const stdUpperBounds = stats.avg + stats.std_deviation * sigma;
    const min = Math.max(stats.min, stdLowerBounds);
    const max = Math.min(stats.max, stdUpperBounds);
    return {
      min,
      max,
      delta: max - min,
      isMinOutsideStdRange: stats.min < stdLowerBounds,
      isMaxOutsideStdRange: stats.max > stdUpperBounds,
    };
  }

  _pluckCategoricalStyleMetaFromFieldMetaData(styleMetaData: StyleMetaData) {
    if (!this.isCategorical() || !this._field) {
      return null;
    }

    const fieldMeta = styleMetaData[this._field.getRootName()];
    if (!fieldMeta || !('buckets' in fieldMeta)) {
      return null;
    }

    return {
      categories: fieldMeta.buckets.map((bucket) => {
        return {
          key: bucket.key,
          count: bucket.doc_count,
        };
      }),
    };
  }

  formatField(value: RawValue): string | number {
    if (this.getField()) {
      const fieldName = this.getFieldName();
      const fieldFormatter = this._getFieldFormatter(fieldName);
      return fieldFormatter ? fieldFormatter(value) : super.formatField(value);
    } else {
      return super.formatField(value);
    }
  }

  renderFieldMetaPopover(onFieldMetaOptionsChange: (fieldMetaOptions: FieldMetaOptions) => void) {
    if (!this.supportsFieldMeta()) {
      return null;
    }

    const switchDisabled = !!this._field && !this._field.canReadFromGeoJson();

    return this.isCategorical() ? (
      <CategoricalFieldMetaPopover
        fieldMetaOptions={this.getFieldMetaOptions()}
        onChange={onFieldMetaOptionsChange}
        switchDisabled={switchDisabled}
      />
    ) : (
      <OrdinalFieldMetaPopover
        fieldMetaOptions={this.getFieldMetaOptions()}
        styleName={this.getStyleName()}
        onChange={onFieldMetaOptionsChange}
        switchDisabled={switchDisabled}
      />
    );
  }

  getMbPropertyName() {
    if (!this._field) {
      return '';
    }

    let targetName;
    if (this.supportsMbFeatureState()) {
      // Base case for any properties that can support feature-state (e.g. color, size, ...)
      // They just re-use the original property-name
      targetName = this._field.getName();
    } else {
      if (this._field.canReadFromGeoJson() && this._field.supportsAutoDomain()) {
        // Geojson-sources can support rewrite
        // e.g. field-formatters will create duplicate field
        targetName = getComputedFieldName(this.getStyleName(), this._field.getName());
      } else {
        // Non-geojson sources (e.g. 3rd party mvt or ES-source as mvt)
        targetName = this._field.getName();
      }
    }
    return targetName;
  }

  getMbPropertyValue(rawValue: RawValue): RawValue {
    // Maps only uses feature-state for numerical values.
    // `supportsMbFeatureState` will only return true when the mb-style rule does a feature-state lookup on a numerical value
    // Calling `isOrdinal` would be equivalent.
    return this.supportsMbFeatureState() ? getNumericalMbFeatureStateValue(rawValue) : rawValue;
  }
}

export function getNumericalMbFeatureStateValue(value: RawValue) {
  if (typeof value !== 'string') {
    return value;
  }

  const valueAsFloat = parseFloat(value);
  return isNaN(valueAsFloat) ? null : valueAsFloat;
}
