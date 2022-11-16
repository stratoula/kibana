/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { buildDataTableRecord } from '../../../../utils/build_data_record';
import { esHits } from '../../../../__mocks__/es_hits';
import { act, renderHook } from '@testing-library/react-hooks';
import { BehaviorSubject } from 'rxjs';
import { FetchStatus } from '../../../types';
import {
  AvailableFields$,
  DataDocuments$,
  DataMain$,
  DataTotalHits$,
  RecordRawType,
} from '../../hooks/use_saved_search';
import type { GetStateReturn } from '../../services/discover_state';
import { savedSearchMock } from '../../../../__mocks__/saved_search';
import type { Storage } from '@kbn/kibana-utils-plugin/public';
import { LocalStorageMock } from '../../../../__mocks__/local_storage_mock';
import { dataPluginMock } from '@kbn/data-plugin/public/mocks';
import { dataViewWithTimefieldMock } from '../../../../__mocks__/data_view_with_timefield';
import {
  CHART_HIDDEN_KEY,
  HISTOGRAM_HEIGHT_KEY,
  useDiscoverHistogram,
} from './use_discover_histogram';
import { setTimeout } from 'timers/promises';
import { calculateBounds } from '@kbn/data-plugin/public';
import { createSearchSessionMock } from '../../../../__mocks__/search_session';
import { RequestAdapter } from '@kbn/inspector-plugin/public';
import { getSessionServiceMock } from '@kbn/data-plugin/public/search/session/mocks';

const mockData = dataPluginMock.createStartContract();

mockData.query.timefilter.timefilter.getTime = () => {
  return { from: '1991-03-29T08:04:00.694Z', to: '2021-03-29T07:04:00.695Z' };
};
mockData.query.timefilter.timefilter.calculateBounds = (timeRange) => {
  return calculateBounds(timeRange);
};

let mockStorage = new LocalStorageMock({}) as unknown as Storage;
let mockCanVisualize = true;

jest.mock('../../../../hooks/use_discover_services', () => {
  const originalModule = jest.requireActual('../../../../hooks/use_discover_services');
  return {
    ...originalModule,
    useDiscoverServices: () => ({ storage: mockStorage, data: mockData }),
  };
});

jest.mock('@kbn/unified-field-list-plugin/public', () => {
  const originalModule = jest.requireActual('@kbn/unified-field-list-plugin/public');
  return {
    ...originalModule,
    getVisualizeInformation: jest.fn(() => Promise.resolve(mockCanVisualize)),
  };
});

describe('useDiscoverHistogram', () => {
  const renderUseDiscoverHistogram = async ({
    isPlainRecord = false,
    isTimeBased = true,
    canVisualize = true,
    storage = new LocalStorageMock({}) as unknown as Storage,
    stateContainer = {},
    searchSessionId = '123',
  }: {
    isPlainRecord?: boolean;
    isTimeBased?: boolean;
    canVisualize?: boolean;
    storage?: Storage;
    stateContainer?: unknown;
    searchSessionId?: string | null;
  } = {}) => {
    mockStorage = storage;
    mockCanVisualize = canVisualize;

    const main$ = new BehaviorSubject({
      fetchStatus: FetchStatus.COMPLETE,
      recordRawType: isPlainRecord ? RecordRawType.PLAIN : RecordRawType.DOCUMENT,
      foundDocuments: true,
    }) as DataMain$;

    const documents$ = new BehaviorSubject({
      fetchStatus: FetchStatus.COMPLETE,
      result: esHits.map((esHit) => buildDataTableRecord(esHit, dataViewWithTimefieldMock)),
    }) as DataDocuments$;

    const availableFields$ = new BehaviorSubject({
      fetchStatus: FetchStatus.COMPLETE,
      fields: [] as string[],
    }) as AvailableFields$;

    const totalHits$ = new BehaviorSubject({
      fetchStatus: FetchStatus.COMPLETE,
      result: Number(esHits.length),
    }) as DataTotalHits$;

    const savedSearchData$ = {
      main$,
      documents$,
      totalHits$,
      availableFields$,
    };

    const searchSessionService = {
      ...getSessionServiceMock(),
      getSession$: () => new BehaviorSubject(searchSessionId ?? undefined),
    };

    const hook = renderHook(() => {
      return useDiscoverHistogram({
        stateContainer: stateContainer as GetStateReturn,
        state: { interval: 'auto', hideChart: false },
        savedSearchData$,
        dataView: dataViewWithTimefieldMock,
        savedSearch: savedSearchMock,
        isTimeBased,
        isPlainRecord,
        inspectorAdapters: { requests: new RequestAdapter() },
        searchSessionManager: createSearchSessionMock(searchSessionService).searchSessionManager,
      });
    });

    await act(() => setTimeout(0));

    return hook;
  };

  it('should return undefined if there is no search session', async () => {
    const { result } = await renderUseDiscoverHistogram({ searchSessionId: null });
    expect(result.current).toBeUndefined();
  });

  describe('contexts', () => {
    it('should output the correct hits context', async () => {
      const { result } = await renderUseDiscoverHistogram();
      expect(result.current?.hits?.status).toBe(FetchStatus.COMPLETE);
      expect(result.current?.hits?.total).toEqual(esHits.length);
    });

    it('should output the correct chart context', async () => {
      const { result } = await renderUseDiscoverHistogram();
      expect(result.current?.chart?.hidden).toBe(false);
      expect(result.current?.chart?.timeInterval).toBe('auto');
    });

    it('should output undefined for hits and chart if isPlainRecord is true', async () => {
      const { result } = await renderUseDiscoverHistogram({ isPlainRecord: true });
      expect(result.current?.hits).toBeUndefined();
      expect(result.current?.chart).toBeUndefined();
    });

    it('should output undefined for chart if isTimeBased is false', async () => {
      const { result } = await renderUseDiscoverHistogram({ isTimeBased: false });
      expect(result.current?.hits).not.toBeUndefined();
      expect(result.current?.chart).toBeUndefined();
    });
  });

  describe('onEditVisualization', () => {
    it('returns a callback for onEditVisualization when the data view can be visualized', async () => {
      const { result } = await renderUseDiscoverHistogram();
      expect(result.current?.onEditVisualization).toBeDefined();
    });

    it('returns undefined for onEditVisualization when the data view cannot be visualized', async () => {
      const { result } = await renderUseDiscoverHistogram({ canVisualize: false });
      expect(result.current?.onEditVisualization).toBeUndefined();
    });
  });

  describe('topPanelHeight', () => {
    it('should try to get the topPanelHeight from storage', async () => {
      const storage = new LocalStorageMock({}) as unknown as Storage;
      storage.get = jest.fn(() => 100);
      const { result } = await renderUseDiscoverHistogram({ storage });
      expect(storage.get).toHaveBeenCalledWith(HISTOGRAM_HEIGHT_KEY);
      expect(result.current?.topPanelHeight).toBe(100);
    });

    it('should update topPanelHeight when onTopPanelHeightChange is called', async () => {
      const storage = new LocalStorageMock({}) as unknown as Storage;
      storage.get = jest.fn(() => 100);
      storage.set = jest.fn();
      const { result } = await renderUseDiscoverHistogram({ storage });
      expect(result.current?.topPanelHeight).toBe(100);
      act(() => {
        result.current?.onTopPanelHeightChange(200);
      });
      expect(storage.set).toHaveBeenCalledWith(HISTOGRAM_HEIGHT_KEY, 200);
      expect(result.current?.topPanelHeight).toBe(200);
    });
  });

  describe('callbacks', () => {
    it('should update chartHidden when onChartHiddenChange is called', async () => {
      const storage = new LocalStorageMock({}) as unknown as Storage;
      storage.set = jest.fn();
      const stateContainer = {
        setAppState: jest.fn(),
      };
      const { result } = await renderUseDiscoverHistogram({
        storage,
        stateContainer,
      });
      act(() => {
        result.current?.onChartHiddenChange(true);
      });
      expect(storage.set).toHaveBeenCalledWith(CHART_HIDDEN_KEY, true);
      expect(stateContainer.setAppState).toHaveBeenCalledWith({ hideChart: true });
    });

    it('should update interval when onTimeIntervalChange is called', async () => {
      const stateContainer = {
        setAppState: jest.fn(),
      };
      const { result } = await renderUseDiscoverHistogram({
        stateContainer,
      });
      act(() => {
        result.current?.onTimeIntervalChange('auto');
      });
      expect(stateContainer.setAppState).toHaveBeenCalledWith({ interval: 'auto' });
    });
  });
});
