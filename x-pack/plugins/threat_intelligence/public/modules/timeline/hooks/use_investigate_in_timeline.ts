/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useContext } from 'react';
import moment from 'moment';
import { DataProvider } from '@kbn/timelines-plugin/common';
import { generateDataProvider } from '../utils';
import { SecuritySolutionContext } from '../../../containers/security_solution_context';
import {
  fieldAndValueValid,
  getIndicatorFieldAndValue,
  Indicator,
  IndicatorFieldEventEnrichmentMap,
  RawIndicatorFieldId,
  unwrapValue,
} from '../../indicators';

export interface UseInvestigateInTimelineParam {
  /**
   * Indicator used to retrieve the field and value then passed to the Investigate in Timeline logic
   */
  indicator: Indicator;
}

export interface UseInvestigateInTimelineValue {
  /**
   * Investigate in Timeline function to run on click event.
   */
  investigateInTimelineFn: (() => Promise<void>) | undefined;
}

/**
 * Custom hook that gets an {@link Indicator}, retrieves the field (from the RawIndicatorFieldId.Name)
 * and value, then creates DataProviders used to do the Investigate in Timeline logic
 * (see /kibana/x-pack/plugins/security_solution/public/threat_intelligence/use_investigate_in_timeline.ts)
 */
export const useInvestigateInTimeline = ({
  indicator,
}: UseInvestigateInTimelineParam): UseInvestigateInTimelineValue => {
  const securitySolutionContext = useContext(SecuritySolutionContext);

  const { key, value } = getIndicatorFieldAndValue(indicator, RawIndicatorFieldId.Name);
  if (!fieldAndValueValid(key, value)) {
    return {} as unknown as UseInvestigateInTimelineValue;
  }

  const dataProviders: DataProvider[] = [...IndicatorFieldEventEnrichmentMap[key], key].map(
    (e: string) => generateDataProvider(e, value as string)
  );

  const to = unwrapValue(indicator, RawIndicatorFieldId.TimeStamp) as string;
  const from = moment(to).subtract(10, 'm').toISOString();

  const investigateInTimelineFn = securitySolutionContext?.getUseInvestigateInTimeline({
    dataProviders,
    from,
    to,
  });

  return {
    investigateInTimelineFn,
  };
};
