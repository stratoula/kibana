/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { CoreSetup, CoreStart } from 'src/core/public';
import { VisualizationsSetup } from '../../visualizations/public';
import { Plugin as ExpressionsPublicPlugin } from '../../expressions/public';
import { ChartsPluginSetup, PaletteRegistry } from '../../charts/public';
import { DataPublicPluginStart } from '../../data/public';
import { LEGACY_CHARTS_LIBRARY } from '../common';
import { createPieVisFn } from './pie_fn';
import { getPieVisRenderer } from './pie_renderer';
import { pieVisType } from './vis_type';

/** @internal */
export interface VisTypePieSetupDependencies {
  visualizations: VisualizationsSetup;
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  charts: ChartsPluginSetup;
}

/** @internal */
export interface VisTypePiePluginStartDependencies {
  data: DataPublicPluginStart;
}

/** @internal */
export interface VisTypePieDependencies {
  theme: ChartsPluginSetup['theme'];
  palettes: PaletteRegistry;
  getStartDeps: () => Promise<DataPublicPluginStart>;
}

export class VisTypePiePlugin {
  setup(
    core: CoreSetup<VisTypePiePluginStartDependencies>,
    { expressions, visualizations, charts }: VisTypePieSetupDependencies
  ) {
    if (!core.uiSettings.get(LEGACY_CHARTS_LIBRARY, true)) {
      const getStartDeps = async () => {
        const [, deps] = await core.getStartServices();
        return deps.data;
      };

      [createPieVisFn].forEach(expressions.registerFunction);
      charts.palettes.getPalettes().then((palettes) => {
        expressions.registerRenderer(
          getPieVisRenderer({ theme: charts.theme, palettes, getStartDeps })
        );
        visualizations.createBaseVisualization(pieVisType(true, palettes));
      });
    }
    return {};
  }

  start(core: CoreStart, { data }: VisTypePiePluginStartDependencies) {}
}
