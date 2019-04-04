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

import { AggParam } from '../../../agg_types';
import { AggConfig } from '../../agg_config';
import { AggParamEditorProps } from './agg_param_editor_props';

interface AggParamReactWrapperProps<T> {
  agg: AggConfig;
  aggParam: AggParam;
  paramEditor: React.FunctionComponent<AggParamEditorProps<T>>;
  value: T;
  isInvalid: boolean;
  onChange(value: T): void;
  setValidity(isValid: boolean): void;
}

function AggParamReactWrapper<T>(props: AggParamReactWrapperProps<T>) {
  const {
    agg,
    aggParam,
    paramEditor: ParamEditor,
    onChange,
    value,
    isInvalid,
    setValidity,
  } = props;
  return (
    <ParamEditor
      value={value}
      setValue={onChange}
      aggParam={aggParam}
      agg={agg}
      isInvalid={isInvalid}
      setValidity={setValidity}
    />
  );
}

export { AggParamReactWrapper };
