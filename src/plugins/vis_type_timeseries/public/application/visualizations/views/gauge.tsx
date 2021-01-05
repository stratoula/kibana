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
import { Chart, Goal, BandFillColorAccessorInput } from '@elastic/charts';
// @ts-ignore
import { getLastValue } from '../../../../common/get_last_value';
// @ts-ignore
import { getValueBy } from '../lib/get_value_by';

interface GaugeProps {
  gaugeLine: string | number;
  innerColor: string;
  innerLine: string;
  max: string | number;
  metric: any;
  backgroundColor: string;
  type: string;
  valueColor: string;
  additionalLabel: string;
  tickFormatter: any;
}

export const Gauge = (props: GaugeProps) => {
  const { metric, type } = props;
  const metricValue = (metric && getLastValue(metric.data)) || 0;
  const max = (metric && getValueBy('max', metric.data)) || 1;
  const formatter =
    (metric && (metric.tickFormatter || metric.formatter)) ||
    props.tickFormatter ||
    ((v: any) => v);
  const title = (metric && metric.label) || '';

  //   const gaugeProps = {
  //     value,
  //     reversed: isBackgroundDark(this.props.backgroundColor),
  //     gaugeLine: this.props.gaugeLine,
  //     innerLine: this.props.innerLine,
  //     innerColor: this.props.innerColor,
  //     max: this.props.max || max,
  //     color: (metric && metric.color) || '#8ac336',
  //     type,
  //   };

  const config =
    type === 'circle'
      ? { angleStart: Math.PI + Math.PI / 2, angleEnd: -Math.PI / 2 }
      : { angleStart: Math.PI, angleEnd: 0 };

  const colorMap = {
    [metricValue]: (metric && metric.color) || '#8ac336',
    [props.max || max]: 'lightGrey',
  };

  const bandFillColor = (x: number) => colorMap[x];

  return (
    <Chart>
      <Goal
        id="spec_1"
        subtype="goal"
        base={0}
        target={props.max || max}
        actual={metricValue}
        // target={0}
        // actual={0}
        bands={[metricValue, props.max || max]}
        ticks={[]}
        bandFillColor={({ value }: BandFillColorAccessorInput) => bandFillColor(value)}
        labelMajor={props.additionalLabel || ''}
        labelMinor=""
        centralMajor={formatter(metricValue)}
        centralMinor={title}
        config={config}
      />
    </Chart>
  );
};
