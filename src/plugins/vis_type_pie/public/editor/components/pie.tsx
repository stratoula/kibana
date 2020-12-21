/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';

import { EuiPanel, EuiTitle, EuiSpacer } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n/react';

import { VisOptionsProps } from 'src/plugins/vis_default_editor/public';
import { TruncateLabelsOption } from './truncate_labels';
import { PalettePicker } from './palette_picker';
import {
  BasicOptions,
  SwitchOption,
  SelectOption,
  PaletteRegistry,
} from '../../../../charts/public';
import { PieVisParams, LabelPositions, ValueFormats } from '../../types';
import { getLabelPositions, getValuesFormats } from '../collections';

interface PieOptionsProps extends VisOptionsProps<PieVisParams> {
  palettes: PaletteRegistry | undefined;
  showElasticChartsOptions: boolean;
}

const PieOptions = (props: PieOptionsProps) => {
  const { stateParams, setValue } = props;
  const setLabels = <T extends keyof PieVisParams['labels']>(
    paramName: T,
    value: PieVisParams['labels'][T]
  ) => setValue('labels', { ...stateParams.labels, [paramName]: value });

  return (
    <>
      <EuiPanel paddingSize="s">
        <EuiTitle size="xs">
          <h3>
            <FormattedMessage
              id="visTypePie.editors.pie.pieSettingsTitle"
              defaultMessage="Pie settings"
            />
          </h3>
        </EuiTitle>
        <EuiSpacer size="s" />
        <SwitchOption
          label={i18n.translate('visTypePie.editors.pie.donutLabel', {
            defaultMessage: 'Donut',
          })}
          paramName="isDonut"
          value={stateParams.isDonut}
          setValue={setValue}
        />
        <BasicOptions {...props} />
        {props.showElasticChartsOptions && (
          <SwitchOption
            label={i18n.translate('visTypePie.editors.pie.nestedLegendLabel', {
              defaultMessage: 'Nested legend',
            })}
            paramName="nestedLegend"
            value={stateParams.nestedLegend}
            setValue={setValue}
          />
        )}
        {props.showElasticChartsOptions && props.palettes && (
          <PalettePicker
            palettes={props.palettes}
            activePalette={stateParams.palette}
            paramName="palette"
            setPalette={setValue}
          />
        )}
      </EuiPanel>

      <EuiSpacer size="s" />

      <EuiPanel paddingSize="s">
        <EuiTitle size="xs">
          <h3>
            <FormattedMessage
              id="visTypePie.editors.pie.labelsSettingsTitle"
              defaultMessage="Labels settings"
            />
          </h3>
        </EuiTitle>
        <EuiSpacer size="s" />
        <SwitchOption
          label={i18n.translate('visTypePie.editors.pie.showLabelsLabel', {
            defaultMessage: 'Show labels',
          })}
          paramName="show"
          value={stateParams.labels.show}
          setValue={setLabels}
        />
        {props.showElasticChartsOptions && (
          <SelectOption
            label={i18n.translate('visTypePie.editors.pie.labelPositionLabel', {
              defaultMessage: 'Label position',
            })}
            disabled={!stateParams.labels.show}
            options={getLabelPositions()}
            paramName="position"
            value={stateParams.labels.position || LabelPositions.DEFAULT}
            setValue={setLabels}
          />
        )}
        {!props.showElasticChartsOptions && (
          <SwitchOption
            label={i18n.translate('visTypePie.editors.pie.showTopLevelOnlyLabel', {
              defaultMessage: 'Show top level only',
            })}
            paramName="last_level"
            value={stateParams.labels.last_level}
            setValue={setLabels}
          />
        )}
        <SwitchOption
          label={i18n.translate('visTypePie.editors.pie.showValuesLabel', {
            defaultMessage: 'Show values',
          })}
          paramName="values"
          value={stateParams.labels.values}
          setValue={setLabels}
        />
        {props.showElasticChartsOptions && (
          <SelectOption
            label={i18n.translate('visTypePie.editors.pie.valueFormatsLabel', {
              defaultMessage: 'Values',
            })}
            disabled={!stateParams.labels.values}
            options={getValuesFormats()}
            paramName="valuesFormat"
            value={stateParams.labels.valuesFormat || ValueFormats.PERCENT}
            setValue={setLabels}
          />
        )}
        <TruncateLabelsOption value={stateParams.labels.truncate} setValue={setLabels} />
      </EuiPanel>
    </>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { PieOptions as default };
