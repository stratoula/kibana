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
import { mountWithIntl } from '@kbn/test/jest';
import { ReactWrapper } from 'enzyme';
import { TruncateLabelsOption, TruncateLabelsOptionProps } from './truncate_labels';
import { findTestSubject } from '@elastic/eui/lib/test';

describe('TruncateLabelsOption', function () {
  let props: TruncateLabelsOptionProps;
  let component: ReactWrapper<TruncateLabelsOptionProps>;

  beforeAll(() => {
    props = {
      disabled: false,
      value: 20,
      setValue: jest.fn(),
    };
  });

  it('renders an input type number', () => {
    component = mountWithIntl(<TruncateLabelsOption {...props} />);
    expect(findTestSubject(component, 'pieLabelTruncateInput').length).toBe(1);
  });

  it('renders the value on the input number', function () {
    component = mountWithIntl(<TruncateLabelsOption {...props} />);
    const input = findTestSubject(component, 'pieLabelTruncateInput');
    expect(input.props().value).toBe(20);
  });

  it('disables the input if disabled prop is given', function () {
    const newProps = { ...props, disabled: true };
    component = mountWithIntl(<TruncateLabelsOption {...newProps} />);
    const input = findTestSubject(component, 'pieLabelTruncateInput');
    expect(input.props().disabled).toBe(true);
  });

  it('should set the new value', function () {
    component = mountWithIntl(<TruncateLabelsOption {...props} />);
    const input = findTestSubject(component, 'pieLabelTruncateInput');
    input.simulate('change', { target: { value: 100 } });
    expect(props.setValue).toHaveBeenCalled();
  });
});
