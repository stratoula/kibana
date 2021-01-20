/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import React from 'react';
import { mountWithIntl } from '@kbn/test/jest';
import { ReactWrapper } from 'enzyme';
import PieOptions, { PieOptionsProps } from './pie';
import { chartPluginMock } from '../../../../charts/public/mocks';
import { findTestSubject } from '@elastic/eui/lib/test';
import { act } from 'react-dom/test-utils';

jest.mock('../collections', () => ({
  getLabelPositions: jest.fn(() => []),
  getValuesFormats: jest.fn(() => []),
}));

describe('PalettePicker', function () {
  let props: PieOptionsProps;
  let component: ReactWrapper<PieOptionsProps>;

  beforeAll(() => {
    props = ({
      palettes: chartPluginMock.createSetupContract().palettes,
      showElasticChartsOptions: true,
      vis: {
        type: {
          editorConfig: {
            collections: {
              legendPositions: [
                {
                  text: 'Top',
                  value: 'top',
                },
                {
                  text: 'Left',
                  value: 'left',
                },
                {
                  text: 'Right',
                  value: 'right',
                },
                {
                  text: 'Bottom',
                  value: 'bottom',
                },
              ],
            },
          },
        },
      },
      stateParams: {
        isDonut: true,
        legendPosition: 'left',
        labels: {
          show: true,
        },
      },
    } as unknown) as PieOptionsProps;
  });

  it('renders the nested legend switch for the elastic charts implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieNestedLegendSwitch').length).toBe(1);
    });
  });

  it('not renders the nested legend switch for the vislib implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} showElasticChartsOptions={false} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieNestedLegendSwitch').length).toBe(0);
    });
  });

  it('renders the label position dropdown for the elastic charts implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieLabelPositionSelect').length).toBe(1);
    });
  });

  it('not renders the label position dropdown for the vislib implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} showElasticChartsOptions={false} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieLabelPositionSelect').length).toBe(0);
    });
  });

  it('not renders the top level switch for the elastic charts implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieTopLevelSwitch').length).toBe(0);
    });
  });

  it('renders the top level switch for the vislib implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} showElasticChartsOptions={false} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieTopLevelSwitch').length).toBe(1);
    });
  });

  it('renders the value format dropdown for the elastic charts implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieValueFormatsSelect').length).toBe(1);
    });
  });

  it('not renders the value format dropdown for the vislib implementation', async () => {
    component = mountWithIntl(<PieOptions {...props} showElasticChartsOptions={false} />);
    await act(async () => {
      expect(findTestSubject(component, 'visTypePieValueFormatsSelect').length).toBe(0);
    });
  });
});
