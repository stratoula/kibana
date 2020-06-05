/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { IndexPatternsContract } from '../../../../../../../../../src/plugins/data/public';
import { mlJobService } from '../../../../services/job_service';
import { loadIndexPatterns, getIndexPatternIdFromName } from '../../../../util/index_utils';
import { CombinedJob } from '../../../../../../common/types/anomaly_detection_jobs';
import { CREATED_BY_LABEL, JOB_TYPE } from '../../../../../../common/constants/new_job';

export async function preConfiguredJobRedirect(indexPatterns: IndexPatternsContract) {
  const { job } = mlJobService.tempJobCloningObjects;
  if (job) {
    try {
      await loadIndexPatterns(indexPatterns);
      const redirectUrl = getWizardUrlFromCloningJob(job);
      window.location.href = `#/${redirectUrl}`;
      return Promise.reject();
    } catch (error) {
      return Promise.resolve();
    }
  } else {
    // no job to clone
    // don't redirect
    return Promise.resolve();
  }
}

function getWizardUrlFromCloningJob(job: CombinedJob) {
  const created = job?.custom_settings?.created_by;
  let page = '';

  switch (created) {
    case CREATED_BY_LABEL.SINGLE_METRIC:
      page = JOB_TYPE.SINGLE_METRIC;
      break;
    case CREATED_BY_LABEL.MULTI_METRIC:
      page = JOB_TYPE.MULTI_METRIC;
      break;
    case CREATED_BY_LABEL.POPULATION:
      page = JOB_TYPE.POPULATION;
      break;
    case CREATED_BY_LABEL.CATEGORIZATION:
      page = JOB_TYPE.CATEGORIZATION;
      break;
    default:
      page = JOB_TYPE.ADVANCED;
      break;
  }

  const indexPatternId = getIndexPatternIdFromName(job.datafeed_config.indices.join());

  return `jobs/new_job/${page}?index=${indexPatternId}&_g=()`;
}
