/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { KibanaRequest } from '@kbn/core/server';
import type { KibanaExecutionContext } from '@kbn/core/public';

import { Adapters, RequestAdapter } from '@kbn/inspector-plugin/common';
import { ExecutionContextSearch } from '@kbn/es-query';
import { Datatable, ExpressionType } from '../expression_types';
import { TablesAdapter } from '../util/tables_adapter';
import { ExpressionsInspectorAdapter } from '../util';

/**
 * `ExecutionContext` is an object available to all functions during a single execution;
 * it provides various methods to perform side-effects.
 */
export interface ExecutionContext<InspectorAdapters extends Adapters = Adapters> {
  /**
   * Get search context of the expression.
   */
  getSearchContext: () => ExecutionContextSearch;

  /**
   * Context variables that can be consumed using `var` and `var_set` functions.
   */
  variables: Record<string, unknown>;

  /**
   * A map of available expression types.
   */
  types: Record<string, ExpressionType>;

  /**
   * Adds ability to abort current execution.
   */
  abortSignal: AbortSignal;

  /**
   * Adapters for `inspector` plugin.
   */
  inspectorAdapters: InspectorAdapters;

  /**
   * Search context in which expression should operate.
   */
  getSearchSessionId: () => string | undefined;

  /**
   * Getter to retrieve the `KibanaRequest` object inside an expression function.
   * Useful for functions which are running on the server and need to perform
   * operations that are scoped to a specific user.
   */
  getKibanaRequest?: () => KibanaRequest;

  /**
   * Returns the state (true|false) of the sync colors across panels switch.
   */
  isSyncColorsEnabled?: () => boolean;

  /**
   * Returns the state (true|false) of the sync cursor across panels switch.
   */
  isSyncCursorEnabled?: () => boolean;

  /**
   * Returns the state (true|false) of the sync tooltips across panels switch.
   */
  isSyncTooltipsEnabled?: () => boolean;

  /**
   * Returns whether or not to use the size transition veil when resizing visualizations.
   */
  shouldUseSizeTransitionVeil?: () => boolean;

  /**
   * Contains the meta-data about the source of the expression.
   */
  getExecutionContext: () => KibanaExecutionContext | undefined;

  /**
   * Logs datatable.
   */
  logDatatable?(name: string, datatable: Datatable): void;
}

/**
 * Default inspector adapters created if inspector adapters are not set explicitly.
 */
export interface DefaultInspectorAdapters {
  requests: RequestAdapter;
  tables: TablesAdapter;
  expression: ExpressionsInspectorAdapter;
}
