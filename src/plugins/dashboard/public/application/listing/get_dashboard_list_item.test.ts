/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import { getDashboardListItem } from './get_dashboard_list_item_link';
import { ApplicationStart } from 'kibana/public';
import { DataPublicPluginStart } from '../../../../data/public';

const DASHBOARD_ID = '13823000-99b9-11ea-9eb6-d9e8adceb647';

const application = ({
  getUrlForApp: jest.fn((appId: string, options?: { path?: string; absolute?: boolean }) => {
    return `/app/${appId}${options?.path}`;
  }),
} as unknown) as ApplicationStart;

const getQueryService = (timeFilter: { from: string; to: string }) => {
  return ({
    timefilter: {
      timefilter: {
        getTime: jest.fn(() => timeFilter),
      },
    },
  } as unknown) as DataPublicPluginStart['query'];
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('listing item link', () => {
  test('creates a link to a dashboard without the timerange query if time is saved on the dashboard', async () => {
    const url = getDashboardListItem(
      application,
      getQueryService({ from: 'now-7d', to: 'now' }),
      false,
      DASHBOARD_ID,
      true
    );
    expect(url).toMatchInlineSnapshot(`"/app/dashboards/#/view/${DASHBOARD_ID}"`);
  });

  test('creates a link to a dashboard with the timerange query if time is not saved on the dashboard', async () => {
    const url = getDashboardListItem(
      application,
      getQueryService({ from: 'now-7d', to: 'now' }),
      false,
      DASHBOARD_ID,
      false
    );
    expect(url).toMatchInlineSnapshot(
      `"/app/dashboards/#/view/${DASHBOARD_ID}?_g=(time:(from:now-7d,to:now))"`
    );
  });

  test('propagates the correct time on the query', async () => {
    const url = getDashboardListItem(
      application,
      getQueryService({
        from: '2021-01-05T11:45:53.375Z',
        to: '2021-01-21T11:46:00.990Z',
      }),
      false,
      DASHBOARD_ID,
      false
    );
    expect(url).toMatchInlineSnapshot(
      `"/app/dashboards/#/view/${DASHBOARD_ID}?_g=(time:(from:'2021-01-05T11:45:53.375Z',to:'2021-01-21T11:46:00.990Z'))"`
    );
  });
});
