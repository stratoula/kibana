/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import { DataViewField } from '@kbn/data-views-plugin/public';

export interface TimestampOption {
  label: string;
  value?: string;
}

export function extractTimeFields(fields: DataViewField[]): TimestampOption[] {
  const dateFields = fields.filter((field) => field.type === 'date');

  if (dateFields.length === 0) {
    return [];
  }

  const noTimeFieldLabel = i18n.translate(
    'indexPatternEditor.createIndexPattern.stepTime.noTimeFieldOptionLabel',
    {
      defaultMessage: "--- I don't want to use the time filter ---",
    }
  );
  const noTimeFieldOption = {
    label: noTimeFieldLabel,
    value: '',
  };

  const timeFields = dateFields.map((field) => ({
    label: field.name,
    value: field.name,
  }));

  timeFields.push(noTimeFieldOption);

  return timeFields;
}
