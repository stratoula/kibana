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
import { mountWithIntl } from 'test_utils/enzyme_helpers';
import { TypesStart, VisType } from '../../vis_types';
import { AggBasedSelection } from './agg_based_selection';

describe('AggBasedSelection', () => {
  const defaultVisTypeParams = {
    hidden: false,
    visualization: class Controller {
      public render = jest.fn();
      public destroy = jest.fn();
    },
    requiresSearch: false,
    requestHandler: 'none',
    responseHandler: 'none',
  };
  const _visTypes = [
    {
      name: 'vis1',
      title: 'Vis Type 1',
      stage: 'production',
      group: 'other',
      ...defaultVisTypeParams,
    },
    {
      name: 'visExp',
      title: 'Experimental Vis',
      group: 'aggbased',
      stage: 'experimental',
      ...defaultVisTypeParams,
    },
    {
      name: 'vis2',
      title: 'Vis Type 2',
      group: 'aggbased',
      stage: 'production',
      ...defaultVisTypeParams,
    },
    {
      name: 'visWithAliasUrl',
      title: 'Vis with alias Url',
      stage: 'production',
      group: 'aggbased',
      aliasApp: 'otherApp',
      aliasPath: '#/aliasUrl',
    },
    {
      name: 'visWithSearch',
      title: 'Vis with search',
      group: 'aggbased',
      stage: 'production',
      ...defaultVisTypeParams,
    },
  ] as VisType[];

  const visTypes: TypesStart = {
    get: (id: string) => {
      return _visTypes.find((vis) => vis.name === id) as VisType;
    },
    all: () => {
      return _visTypes as VisType[];
    },
    getAliases: () => [],
    getByGroup: (group: string) => {
      return _visTypes.filter((type) => {
        return type.group === group;
      }) as VisType[];
    },
  };

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        assign: jest.fn(),
      },
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call the toggleGroups if the user clicks the goBack link', () => {
    const toggleGroups = jest.fn();
    const wrapper = mountWithIntl(
      <AggBasedSelection
        showExperimental={true}
        visTypesRegistry={visTypes}
        toggleGroups={toggleGroups}
        onVisTypeSelected={jest.fn()}
      />
    );
    const aggBasedGroupCard = wrapper.find('[data-test-subj="goBackLink"]').at(0);
    aggBasedGroupCard.simulate('click');
    expect(toggleGroups).toHaveBeenCalled();
  });

  describe('filter for visualization types', () => {
    it('should render as expected', () => {
      const wrapper = mountWithIntl(
        <AggBasedSelection
          showExperimental={true}
          visTypesRegistry={visTypes}
          toggleGroups={jest.fn()}
          onVisTypeSelected={jest.fn()}
        />
      );
      const searchBox = wrapper.find('input[data-test-subj="filterVisType"]');
      searchBox.simulate('change', { target: { value: 'with' } });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('experimental visualizations', () => {
    it('should not show experimental visualizations if showExperimentalis false', () => {
      const wrapper = mountWithIntl(
        <AggBasedSelection
          showExperimental={false}
          visTypesRegistry={visTypes}
          toggleGroups={jest.fn()}
          onVisTypeSelected={jest.fn()}
        />
      );
      expect(wrapper.find('[data-test-subj="visType-visExp"]').exists()).toBe(false);
    });

    it('should show experimental visualizations if showExperimental is true', () => {
      const wrapper = mountWithIntl(
        <AggBasedSelection
          showExperimental={true}
          visTypesRegistry={visTypes}
          toggleGroups={jest.fn()}
          onVisTypeSelected={jest.fn()}
        />
      );
      expect(wrapper.find('[data-test-subj="visType-visExp"]').exists()).toBe(true);
    });
  });
});
