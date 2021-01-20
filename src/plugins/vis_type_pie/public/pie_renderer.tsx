/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import React, { lazy } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { I18nProvider } from '@kbn/i18n/react';
import { ExpressionRenderDefinition } from '../../expressions/public';
import { VisualizationContainer } from '../../visualizations/public';
import type { PersistedState } from '../../visualizations/public';
import { VisTypePieDependencies } from './plugin';
import { SplitChartWarning } from './components/split_chart_warning';

import { RenderValue, vislibPieName } from './pie_fn';

const PieComponent = lazy(() => import('./pie_component'));

function shouldShowNoResultsMessage(visData: any): boolean {
  const rows: object[] | undefined = visData?.rows;
  const isZeroHits = visData?.hits === 0 || (rows && !rows.length);

  return Boolean(isZeroHits);
}

export const getPieVisRenderer: (
  deps: VisTypePieDependencies
) => ExpressionRenderDefinition<RenderValue> = ({ theme, palettes, getStartDeps }) => ({
  name: vislibPieName,
  displayName: 'Pie visualization',
  reuseDomNode: true,
  render: async (domNode, { visConfig, visData, syncColors }, handlers) => {
    const showNoResult = shouldShowNoResultsMessage(visData);
    const isSplitChart = Boolean(visConfig.dimensions.splitRow);

    handlers.onDestroy(() => {
      unmountComponentAtNode(domNode);
    });

    const services = await getStartDeps();

    render(
      <I18nProvider>
        <>
          {isSplitChart && <SplitChartWarning docLinks={services.docLinks} />}
          <VisualizationContainer handlers={handlers} showNoResult={showNoResult || isSplitChart}>
            <PieComponent
              chartsThemeService={theme}
              palettes={palettes}
              visParams={visConfig}
              visData={visData}
              renderComplete={handlers.done}
              fireEvent={handlers.event}
              uiState={handlers.uiState as PersistedState}
              services={services.data}
              syncColors={syncColors}
            />
          </VisualizationContainer>
        </>
      </I18nProvider>,
      domNode
    );
  },
});
