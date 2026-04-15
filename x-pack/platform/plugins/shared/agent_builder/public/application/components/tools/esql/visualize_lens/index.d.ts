import type { DataViewsServicePublic } from '@kbn/data-views-plugin/public/types';
import type { LensPublicStart } from '@kbn/lens-plugin/public';
import type { TimeRange } from '@kbn/es-query';
import React from 'react';
import type { UiActionsStart } from '@kbn/ui-actions-plugin/public';
export declare function VisualizeLens({ lens, dataViews, uiActions, lensConfig, timeRange, }: {
    lens: LensPublicStart;
    dataViews: DataViewsServicePublic;
    uiActions: UiActionsStart;
    lensConfig: any;
    timeRange?: TimeRange;
}): React.JSX.Element;
