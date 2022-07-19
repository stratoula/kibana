/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { AggregateQuery, Query } from '@kbn/es-query';
import { UnifiedSearchPublicPluginStart } from '@kbn/unified-search-plugin/public';
import { TopNavMenuProps, TopNavMenuExtensionsRegistrySetup } from './top_nav_menu';

export interface NavigationPublicPluginSetup {
  registerMenuItem: TopNavMenuExtensionsRegistrySetup['register'];
}

type GenericTopNavMenu = <QT extends AggregateQuery | Query = Query>(
  props: TopNavMenuProps<QT>
) => React.ReactElement;

export interface NavigationPublicPluginStart {
  ui: {
    TopNavMenu: GenericTopNavMenu;
  };
}

export interface NavigationPluginStartDependencies {
  unifiedSearch: UnifiedSearchPublicPluginStart;
}
