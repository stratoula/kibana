/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { BehaviorSubject } from 'rxjs';
import { i18n } from '@kbn/i18n';
import type { TimeRange } from '@kbn/es-query';
import { EmbeddableRenderer } from '@kbn/embeddable-plugin/public';
import { CUSTOM_CONTENT_EMBEDDABLE_TYPE } from '@kbn/custom-content-common';
import {
  ActionButtonType,
  type ActionButton,
  type InlineRenderCallbacks,
} from '@kbn/agent-builder-browser/attachments';
import {
  SavedObjectSaveModalDashboard,
  type SaveModalDashboardProps,
} from '@kbn/presentation-util-plugin/public';
import type { VisualizationServices } from '../services';
import {
  visualizationWrapperStyles,
  visualizationEmbeddableStyles,
  visualizationHeaderStyles,
  visualizationTimePickerContainerClassName,
} from '../shared/styles';
import { DEFAULT_VISUALIZATION_HEIGHT } from '../shared/get_visualization_dimensions';
import { FallbackVisualizationActions } from '../shared/visualization_actions';
import { useVisPreviewUnifiedSearch } from '../shared/use_vis_preview_unified_search';

const saveButtonLabel = i18n.translate(
  'xpack.agentBuilder.visualization.customContent.saveToDashboard',
  { defaultMessage: 'Save to dashboard' }
);

const dashboardWriteControlsDisabledReason = i18n.translate(
  'xpack.agentBuilder.visualization.customContent.dashboardWriteControlsDisabledReason',
  {
    defaultMessage: 'You need dashboard write permissions to save custom content to a dashboard.',
  }
);

const saveModalObjectType = i18n.translate(
  'xpack.agentBuilder.visualization.customContent.objectType',
  { defaultMessage: 'Custom content' }
);

/**
 * Render a generated custom-content HTML template inline as a by-value
 * custom_content embeddable — the same renderer used for custom content panels
 * on dashboards (Liquid template filled with ES|QL results, displayed in a
 * sandboxed iframe). Nothing is persisted until the user explicitly saves the
 * panel to a dashboard.
 */
export function VisualizeCustomContent({
  services,
  visualization,
  esql,
  timeRange,
  registerActionButtons,
}: {
  services: VisualizationServices;
  /** Visualization payload; the HTML template lives at `template`. */
  visualization: Record<string, unknown>;
  /** ES|QL query backing the template; empty/absent for static content. */
  esql?: string;
  timeRange?: TimeRange;
  registerActionButtons?: InlineRenderCallbacks['registerActionButtons'];
}) {
  const template = typeof visualization.template === 'string' ? visualization.template : '';
  const esqlQuery = esql || undefined;
  const { application, unifiedSearch, embeddable } = services;
  const SearchBar = unifiedSearch.ui.SearchBar;
  const canWriteDashboards = application?.capabilities.dashboard_v2?.showWriteControls === true;

  const { searchBarProps, effectiveTimeRange } = useVisPreviewUnifiedSearch({ timeRange });

  const timeRange$ = useMemo(
    () => new BehaviorSubject<TimeRange | undefined>(effectiveTimeRange),
    // Created once; subsequent picker changes are pushed via the effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    timeRange$.next(effectiveTimeRange);
  }, [effectiveTimeRange, timeRange$]);

  // Complete the subject on unmount so it does not retain subscribers.
  useEffect(() => () => timeRange$.complete(), [timeRange$]);

  const getParentApi = useCallback(
    () => ({
      timeRange$,
      getSerializedStateForChild: () => ({ esqlQuery, template }),
    }),
    [esqlQuery, template, timeRange$]
  );

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const openSaveModal = useCallback(() => {
    if (canWriteDashboards) {
      setIsSaveModalOpen(true);
    }
  }, [canWriteDashboards]);
  const closeSaveModal = useCallback(() => setIsSaveModalOpen(false), []);

  const onSaveToDashboard = useCallback<SaveModalDashboardProps['onSave']>(
    async ({ dashboardId, newTitle, newDescription }) => {
      setIsSaveModalOpen(false);
      const serializedState = {
        esqlQuery,
        template,
        title: newTitle,
        description: newDescription,
      };

      await embeddable.getStateTransfer().navigateToWithEmbeddablePackages('dashboards', {
        state: [{ type: CUSTOM_CONTENT_EMBEDDABLE_TYPE, serializedState }],
        path: dashboardId && dashboardId !== 'new' ? `#/view/${dashboardId}` : '#/create',
      });
    },
    [esqlQuery, template, embeddable]
  );

  // The tool-result / markdown surface has no attachment header to host buttons,
  // so fall back to rendering them locally (matching the Lens renderer).
  const [localActionButtons, setLocalActionButtons] = useState<ActionButton[]>([]);
  const registerLocalActionButtons = useCallback(
    (buttons: ActionButton[]) => setLocalActionButtons(buttons),
    []
  );
  const register = registerActionButtons ?? registerLocalActionButtons;
  const shouldRenderLocalActionButtons = !registerActionButtons && localActionButtons.length > 0;

  const actionButtons = useMemo<ActionButton[]>(
    () => [
      {
        label: saveButtonLabel,
        icon: 'save',
        type: ActionButtonType.PRIMARY,
        disabled: !canWriteDashboards,
        disabledReason: canWriteDashboards ? undefined : dashboardWriteControlsDisabledReason,
        handler: openSaveModal,
      },
    ],
    [canWriteDashboards, openSaveModal]
  );

  useEffect(() => {
    register(actionButtons);
    return () => register([]);
  }, [actionButtons, register]);

  return (
    <div data-test-subj="agentBuilderCustomContentVisualization" css={visualizationWrapperStyles}>
      {shouldRenderLocalActionButtons && (
        <FallbackVisualizationActions buttons={localActionButtons} />
      )}
      {esqlQuery && (
        <div css={visualizationHeaderStyles} className={visualizationTimePickerContainerClassName}>
          <SearchBar {...searchBarProps} />
        </div>
      )}

      <div
        css={[visualizationEmbeddableStyles(DEFAULT_VISUALIZATION_HEIGHT), css({ width: '100%' })]}
      >
        <EmbeddableRenderer
          type={CUSTOM_CONTENT_EMBEDDABLE_TYPE}
          getParentApi={getParentApi}
          hidePanelChrome
        />
      </div>

      {isSaveModalOpen && (
        <SavedObjectSaveModalDashboard
          objectType={saveModalObjectType}
          documentInfo={{ title: '' }}
          canSaveByReference={false}
          onClose={closeSaveModal}
          onSave={onSaveToDashboard}
        />
      )}
    </div>
  );
}
