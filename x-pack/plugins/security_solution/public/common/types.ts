/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ResponseErrorAttributes } from 'kibana/server';
export interface ServerApiError {
  statusCode: number;
  error: string;
  message: string;
  attributes?: ResponseErrorAttributes | undefined;
}

export interface SecuritySolutionUiConfigType {
  enableExperimental: string[];
}
