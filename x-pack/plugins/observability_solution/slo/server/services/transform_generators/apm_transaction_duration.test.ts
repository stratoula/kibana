/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ALL_VALUE } from '@kbn/slo-schema';
import { twoMinute } from '../fixtures/duration';
import {
  createAPMTransactionDurationIndicator,
  createSLO,
  createSLOWithTimeslicesBudgetingMethod,
} from '../fixtures/slo';
import { ApmTransactionDurationTransformGenerator } from './apm_transaction_duration';

const generator = new ApmTransactionDurationTransformGenerator();

describe('APM Transaction Duration Transform Generator', () => {
  it('returns the expected transform params with every specified indicator params', () => {
    const slo = createSLO({ id: 'irrelevant', indicator: createAPMTransactionDurationIndicator() });
    const transform = generator.getTransformParams(slo);

    expect(transform).toMatchSnapshot();
  });

  it('returns the expected transform params for timeslices slo', () => {
    const slo = createSLOWithTimeslicesBudgetingMethod({
      id: 'irrelevant',
      indicator: createAPMTransactionDurationIndicator(),
    });
    const transform = generator.getTransformParams(slo);

    expect(transform).toMatchSnapshot();
  });

  it('returns the expected transform params for timeslices slo using a timesliceTarget = 0', () => {
    const slo = createSLOWithTimeslicesBudgetingMethod({
      id: 'irrelevant',
      indicator: createAPMTransactionDurationIndicator(),
      objective: {
        target: 0.98,
        timesliceTarget: 0,
        timesliceWindow: twoMinute(),
      },
    });
    const transform = generator.getTransformParams(slo);

    expect(transform).toMatchSnapshot();
  });

  it("does not include the query filter when params are '*'", () => {
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        environment: ALL_VALUE,
        service: ALL_VALUE,
        transactionName: ALL_VALUE,
        transactionType: ALL_VALUE,
      }),
    });
    const transform = generator.getTransformParams(slo);

    expect(transform.source.query).toMatchSnapshot();
  });

  it('uses the provided index params as source index', () => {
    const index = 'my-custom-apm-index*';
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        index,
      }),
    });
    const transform = generator.getTransformParams(slo);

    expect(transform.source.index).toEqual(index);
  });

  it('adds the custom kql filter to the query', () => {
    const filter = `"my.field" : "value" and ("foo" >= 12 or "bar" <= 100)`;
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        filter,
      }),
    });
    const transform = generator.getTransformParams(slo);

    expect(transform.source.query).toMatchSnapshot();
  });

  it("groups by the 'service.name'", () => {
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        service: 'my-service',
        environment: ALL_VALUE,
        transactionName: ALL_VALUE,
        transactionType: ALL_VALUE,
      }),
    });

    const transform = generator.getTransformParams(slo);

    expect(transform.source.query).toMatchSnapshot();
    expect(transform.pivot?.group_by).toMatchSnapshot();
  });

  it("groups by the 'service.environment'", () => {
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        service: ALL_VALUE,
        environment: 'production',
        transactionName: ALL_VALUE,
        transactionType: ALL_VALUE,
      }),
    });

    const transform = generator.getTransformParams(slo);

    expect(transform.source.query).toMatchSnapshot();
    expect(transform.pivot?.group_by).toMatchSnapshot();
  });

  it("groups by the 'transaction.name'", () => {
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        service: ALL_VALUE,
        environment: ALL_VALUE,
        transactionName: 'GET /foo',
        transactionType: ALL_VALUE,
      }),
    });

    const transform = generator.getTransformParams(slo);

    expect(transform.source.query).toMatchSnapshot();
    expect(transform.pivot?.group_by).toMatchSnapshot();
  });

  it("groups by the 'transaction.type'", () => {
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator({
        service: ALL_VALUE,
        environment: ALL_VALUE,
        transactionName: ALL_VALUE,
        transactionType: 'request',
      }),
    });

    const transform = generator.getTransformParams(slo);

    expect(transform.source.query).toMatchSnapshot();
    expect(transform.pivot?.group_by).toMatchSnapshot();
  });

  it("overrides the range filter when 'preventInitialBackfill' is true", () => {
    const slo = createSLO({
      indicator: createAPMTransactionDurationIndicator(),
      settings: {
        frequency: twoMinute(),
        syncDelay: twoMinute(),
        preventInitialBackfill: true,
      },
    });

    const transform = generator.getTransformParams(slo);

    // @ts-ignore
    const rangeFilter = transform.source.query.bool.filter.find((f) => 'range' in f);

    expect(rangeFilter).toEqual({
      range: {
        '@timestamp': {
          gte: 'now-300s/m', // 2m + 2m + 60s
        },
      },
    });
  });
});
