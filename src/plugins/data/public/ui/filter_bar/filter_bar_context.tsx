/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { SavedQueryService } from '../..';
import { SavedQueryMeta } from '../saved_query_form';

export interface IFilterBarContext {
  savedQueryService: SavedQueryService;
  onFilterSave: (savedQueryMeta: SavedQueryMeta, saveAsNew?: boolean) => Promise<void>;
}

const defaultContext = {} as unknown as IFilterBarContext;

export const FilterBarContext = React.createContext<IFilterBarContext>(defaultContext);
