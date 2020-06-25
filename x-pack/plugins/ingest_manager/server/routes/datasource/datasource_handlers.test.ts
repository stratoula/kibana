/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { httpServerMock, httpServiceMock } from 'src/core/server/mocks';
import { IRouter, KibanaRequest, Logger, RequestHandler, RouteConfig } from 'kibana/server';
import { registerRoutes } from './index';
import { DATASOURCE_API_ROUTES } from '../../../common/constants';
import { xpackMocks } from '../../../../../mocks';
import { appContextService } from '../../services';
import { createAppContextStartContractMock } from '../../mocks';
import { DatasourceServiceInterface, ExternalCallback } from '../..';
import { CreateDatasourceRequestSchema } from '../../types/rest_spec';
import { datasourceService } from '../../services';

const datasourceServiceMock = datasourceService as jest.Mocked<DatasourceServiceInterface>;

jest.mock('../../services/datasource', (): {
  datasourceService: jest.Mocked<DatasourceServiceInterface>;
} => {
  return {
    datasourceService: {
      assignPackageStream: jest.fn((packageInfo, dataInputs) => Promise.resolve(dataInputs)),
      buildDatasourceFromPackage: jest.fn(),
      bulkCreate: jest.fn(),
      create: jest.fn((soClient, newData) =>
        Promise.resolve({
          ...newData,
          id: '1',
          revision: 1,
          updated_at: new Date().toISOString(),
          updated_by: 'elastic',
          created_at: new Date().toISOString(),
          created_by: 'elastic',
        })
      ),
      delete: jest.fn(),
      get: jest.fn(),
      getByIDs: jest.fn(),
      list: jest.fn(),
      update: jest.fn(),
    },
  };
});

jest.mock('../../services/epm/packages', () => {
  return {
    ensureInstalledPackage: jest.fn(() => Promise.resolve()),
    getPackageInfo: jest.fn(() => Promise.resolve()),
  };
});

describe('When calling datasource', () => {
  let routerMock: jest.Mocked<IRouter>;
  let routeHandler: RequestHandler<any, any, any>;
  let routeConfig: RouteConfig<any, any, any, any>;
  let context: ReturnType<typeof xpackMocks.createRequestHandlerContext>;
  let response: ReturnType<typeof httpServerMock.createResponseFactory>;

  beforeAll(() => {
    routerMock = httpServiceMock.createRouter();
    registerRoutes(routerMock);
  });

  beforeEach(() => {
    appContextService.start(createAppContextStartContractMock());
    context = xpackMocks.createRequestHandlerContext();
    response = httpServerMock.createResponseFactory();
  });

  afterEach(() => {
    jest.clearAllMocks();
    appContextService.stop();
  });

  describe('create api handler', () => {
    const getCreateKibanaRequest = (
      newData?: typeof CreateDatasourceRequestSchema.body
    ): KibanaRequest<undefined, undefined, typeof CreateDatasourceRequestSchema.body> => {
      return httpServerMock.createKibanaRequest<
        undefined,
        undefined,
        typeof CreateDatasourceRequestSchema.body
      >({
        path: routeConfig.path,
        method: 'post',
        body: newData || {
          name: 'endpoint-1',
          description: '',
          config_id: 'a5ca00c0-b30c-11ea-9732-1bb05811278c',
          enabled: true,
          output_id: '',
          inputs: [],
          namespace: 'default',
          package: { name: 'endpoint', title: 'Elastic Endpoint', version: '0.5.0' },
        },
      });
    };

    // Set the routeConfig and routeHandler to the Create API
    beforeAll(() => {
      [routeConfig, routeHandler] = routerMock.post.mock.calls.find(([{ path }]) =>
        path.startsWith(DATASOURCE_API_ROUTES.CREATE_PATTERN)
      )!;
    });

    describe('and external callbacks are registered', () => {
      const callbackCallingOrder: string[] = [];

      // Callback one adds an input that includes a `config` property
      const callbackOne: ExternalCallback[1] = jest.fn(async (ds) => {
        callbackCallingOrder.push('one');
        const newDs = {
          ...ds,
          inputs: [
            {
              type: 'endpoint',
              enabled: true,
              streams: [],
              config: {
                one: {
                  value: 'inserted by callbackOne',
                },
              },
            },
          ],
        };
        return newDs;
      });

      // Callback two adds an additional `input[0].config` property
      const callbackTwo: ExternalCallback[1] = jest.fn(async (ds) => {
        callbackCallingOrder.push('two');
        const newDs = {
          ...ds,
          inputs: [
            {
              ...ds.inputs[0],
              config: {
                ...ds.inputs[0].config,
                two: {
                  value: 'inserted by callbackTwo',
                },
              },
            },
          ],
        };
        return newDs;
      });

      beforeEach(() => {
        appContextService.addExternalCallback('datasourceCreate', callbackOne);
        appContextService.addExternalCallback('datasourceCreate', callbackTwo);
      });

      afterEach(() => (callbackCallingOrder.length = 0));

      it('should call external callbacks in expected order', async () => {
        const request = getCreateKibanaRequest();
        await routeHandler(context, request, response);
        expect(response.ok).toHaveBeenCalled();
        expect(callbackCallingOrder).toEqual(['one', 'two']);
      });

      it('should feed datasource returned by last callback', async () => {
        const request = getCreateKibanaRequest();
        await routeHandler(context, request, response);
        expect(response.ok).toHaveBeenCalled();
        expect(callbackOne).toHaveBeenCalledWith({
          config_id: 'a5ca00c0-b30c-11ea-9732-1bb05811278c',
          description: '',
          enabled: true,
          inputs: [],
          name: 'endpoint-1',
          namespace: 'default',
          output_id: '',
          package: {
            name: 'endpoint',
            title: 'Elastic Endpoint',
            version: '0.5.0',
          },
        });
        expect(callbackTwo).toHaveBeenCalledWith({
          config_id: 'a5ca00c0-b30c-11ea-9732-1bb05811278c',
          description: '',
          enabled: true,
          inputs: [
            {
              type: 'endpoint',
              enabled: true,
              streams: [],
              config: {
                one: {
                  value: 'inserted by callbackOne',
                },
              },
            },
          ],
          name: 'endpoint-1',
          namespace: 'default',
          output_id: '',
          package: {
            name: 'endpoint',
            title: 'Elastic Endpoint',
            version: '0.5.0',
          },
        });
      });

      it('should create with data from callback', async () => {
        const request = getCreateKibanaRequest();
        await routeHandler(context, request, response);
        expect(response.ok).toHaveBeenCalled();
        expect(datasourceServiceMock.create.mock.calls[0][1]).toEqual({
          config_id: 'a5ca00c0-b30c-11ea-9732-1bb05811278c',
          description: '',
          enabled: true,
          inputs: [
            {
              config: {
                one: {
                  value: 'inserted by callbackOne',
                },
                two: {
                  value: 'inserted by callbackTwo',
                },
              },
              enabled: true,
              streams: [],
              type: 'endpoint',
            },
          ],
          name: 'endpoint-1',
          namespace: 'default',
          output_id: '',
          package: {
            name: 'endpoint',
            title: 'Elastic Endpoint',
            version: '0.5.0',
          },
        });
      });

      describe('and a callback throws an exception', () => {
        const callbackThree: ExternalCallback[1] = jest.fn(async (ds) => {
          callbackCallingOrder.push('three');
          throw new Error('callbackThree threw error on purpose');
        });

        const callbackFour: ExternalCallback[1] = jest.fn(async (ds) => {
          callbackCallingOrder.push('four');
          return {
            ...ds,
            inputs: [
              {
                ...ds.inputs[0],
                config: {
                  ...ds.inputs[0].config,
                  four: {
                    value: 'inserted by callbackFour',
                  },
                },
              },
            ],
          };
        });

        beforeEach(() => {
          appContextService.addExternalCallback('datasourceCreate', callbackThree);
          appContextService.addExternalCallback('datasourceCreate', callbackFour);
        });

        it('should skip over callback exceptions and still execute other callbacks', async () => {
          const request = getCreateKibanaRequest();
          await routeHandler(context, request, response);
          expect(response.ok).toHaveBeenCalled();
          expect(callbackCallingOrder).toEqual(['one', 'two', 'three', 'four']);
        });

        it('should log errors', async () => {
          const errorLogger = (appContextService.getLogger() as jest.Mocked<Logger>).error;
          const request = getCreateKibanaRequest();
          await routeHandler(context, request, response);
          expect(response.ok).toHaveBeenCalled();
          expect(errorLogger.mock.calls).toEqual([
            ['An external registered [datasourceCreate] callback failed when executed'],
            [new Error('callbackThree threw error on purpose')],
          ]);
        });

        it('should create datasource with last successful returned datasource', async () => {
          const request = getCreateKibanaRequest();
          await routeHandler(context, request, response);
          expect(response.ok).toHaveBeenCalled();
          expect(datasourceServiceMock.create.mock.calls[0][1]).toEqual({
            config_id: 'a5ca00c0-b30c-11ea-9732-1bb05811278c',
            description: '',
            enabled: true,
            inputs: [
              {
                config: {
                  one: {
                    value: 'inserted by callbackOne',
                  },
                  two: {
                    value: 'inserted by callbackTwo',
                  },
                  four: {
                    value: 'inserted by callbackFour',
                  },
                },
                enabled: true,
                streams: [],
                type: 'endpoint',
              },
            ],
            name: 'endpoint-1',
            namespace: 'default',
            output_id: '',
            package: {
              name: 'endpoint',
              title: 'Elastic Endpoint',
              version: '0.5.0',
            },
          });
        });
      });
    });
  });
});
