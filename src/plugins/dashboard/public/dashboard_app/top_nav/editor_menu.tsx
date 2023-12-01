/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  EuiBadge,
  EuiContextMenu,
  EuiContextMenuItemIcon,
  EuiContextMenuPanelItemDescriptor,
  EuiFlexGroup,
  EuiFlexItem,
  useEuiTheme,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { ToolbarPopover } from '@kbn/shared-ux-button-toolbar';
import type { Action } from '@kbn/ui-actions-plugin/public';
import { type BaseVisType, VisGroups, type VisTypeAlias } from '@kbn/visualizations-plugin/public';
import type { EmbeddableFactory } from '@kbn/embeddable-plugin/public';
import { pluginServices } from '../../services/plugin_services';
import { DASHBOARD_APP_ID } from '../../dashboard_constants';
import { ADD_PANEL_TRIGGER } from '../../triggers';
import { getAddPanelActionMenuItems } from './add_panel_action_menu_items';

interface Props {
  isDisabled?: boolean;
  /** Handler for creating new visualization of a specified type */
  createNewVisType: (visType: BaseVisType | VisTypeAlias) => () => void;
  /** Handler for creating a new embeddable of a specified type */
  createNewEmbeddable: (embeddableFactory: EmbeddableFactory) => void;
  /** Handler for deleting an embeddable */
  deleteEmbeddable: (embeddableId: string) => void;
}

interface FactoryGroup {
  id: string;
  appName: string;
  icon: EuiContextMenuItemIcon;
  panelId: number;
  factories: EmbeddableFactory[];
}

interface UnwrappedEmbeddableFactory {
  factory: EmbeddableFactory;
  isEditable: boolean;
}

export const EditorMenu = ({
  createNewVisType,
  createNewEmbeddable,
  deleteEmbeddable,
  isDisabled,
}: Props) => {
  const {
    embeddable,
    visualizations: {
      getAliases: getVisTypeAliases,
      getByGroup: getVisTypesByGroup,
      showNewVisModal,
    },
    uiActions,
  } = pluginServices.getServices();

  const { euiTheme } = useEuiTheme();

  const embeddableFactories = useMemo(
    () => Array.from(embeddable.getEmbeddableFactories()),
    [embeddable]
  );
  const [unwrappedEmbeddableFactories, setUnwrappedEmbeddableFactories] = useState<
    UnwrappedEmbeddableFactory[]
  >([]);

  const [addPanelActions, setAddPanelActions] = useState<Array<Action<object>> | undefined>(
    undefined
  );

  useEffect(() => {
    Promise.all(
      embeddableFactories.map<Promise<UnwrappedEmbeddableFactory>>(async (factory) => ({
        factory,
        isEditable: await factory.isEditable(),
      }))
    ).then((factories) => {
      setUnwrappedEmbeddableFactories(factories);
    });
  }, [embeddableFactories]);

  const createNewAggsBasedVis = useCallback(
    (visType?: BaseVisType) => () =>
      showNewVisModal({
        originatingApp: DASHBOARD_APP_ID,
        outsideVisualizeApp: true,
        showAggsSelection: true,
        selectedVisType: visType,
      }),
    [showNewVisModal]
  );

  const getSortedVisTypesByGroup = (group: VisGroups) =>
    getVisTypesByGroup(group)
      .sort((a: BaseVisType | VisTypeAlias, b: BaseVisType | VisTypeAlias) => {
        const labelA = 'titleInWizard' in a ? a.titleInWizard || a.title : a.title;
        const labelB = 'titleInWizard' in b ? b.titleInWizard || a.title : a.title;
        if (labelA < labelB) {
          return -1;
        }
        if (labelA > labelB) {
          return 1;
        }
        return 0;
      })
      .filter(({ disableCreate }: BaseVisType) => !disableCreate);

  const promotedVisTypes = getSortedVisTypesByGroup(VisGroups.PROMOTED);
  const aggsBasedVisTypes = getSortedVisTypesByGroup(VisGroups.AGGBASED);
  const toolVisTypes = getSortedVisTypesByGroup(VisGroups.TOOLS);
  const visTypeAliases = getVisTypeAliases()
    .sort(({ promotion: a = false }: VisTypeAlias, { promotion: b = false }: VisTypeAlias) =>
      a === b ? 0 : a ? -1 : 1
    )
    .filter(({ disableCreate }: VisTypeAlias) => !disableCreate);

  const factories = unwrappedEmbeddableFactories.filter(
    ({ isEditable, factory: { type, canCreateNew, isContainerType } }) =>
      isEditable && !isContainerType && canCreateNew() && type !== 'visualization'
  );

  const factoryGroupMap: Record<string, FactoryGroup> = {};
  const ungroupedFactories: EmbeddableFactory[] = [];
  const aggBasedPanelID = 1;

  let panelCount = 1 + aggBasedPanelID;

  // Retrieve ADD_PANEL_TRIGGER actions
  useEffect(() => {
    async function loadPanelActions() {
      const registeredActions = await uiActions?.getTriggerCompatibleActions?.(
        ADD_PANEL_TRIGGER,
        {}
      );
      setAddPanelActions(registeredActions);
    }
    loadPanelActions();
  }, [uiActions]);

  factories.forEach(({ factory }) => {
    const { grouping } = factory;

    if (grouping) {
      grouping.forEach((group) => {
        if (factoryGroupMap[group.id]) {
          factoryGroupMap[group.id].factories.push(factory);
        } else {
          factoryGroupMap[group.id] = {
            id: group.id,
            appName: group.getDisplayName ? group.getDisplayName({ embeddable }) : group.id,
            icon: (group.getIconType
              ? group.getIconType({ embeddable })
              : 'empty') as EuiContextMenuItemIcon,
            factories: [factory],
            panelId: panelCount,
          };

          panelCount++;
        }
      });
    } else {
      ungroupedFactories.push(factory);
    }
  });

  const getVisTypeMenuItem = (visType: BaseVisType): EuiContextMenuPanelItemDescriptor => {
    const {
      name,
      title,
      titleInWizard,
      description,
      icon = 'empty',
      group,
      isDeprecated,
    } = visType;
    return {
      name: !isDeprecated ? (
        titleInWizard || title
      ) : (
        <EuiFlexGroup wrap responsive={false} gutterSize="s">
          <EuiFlexItem grow={false}>{titleInWizard || title}</EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiBadge color="warning">
              {i18n.translate('dashboard.editorMenu.deprecatedTag', {
                defaultMessage: 'Deprecated',
              })}
            </EuiBadge>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
      icon: icon as string,
      onClick:
        // not all the agg-based visualizations need to be created via the wizard
        group === VisGroups.AGGBASED && visType.options.showIndexSelection
          ? createNewAggsBasedVis(visType)
          : createNewVisType(visType),
      'data-test-subj': `visType-${name}`,
      toolTipContent: description,
    };
  };

  const getVisTypeAliasMenuItem = (
    visTypeAlias: VisTypeAlias
  ): EuiContextMenuPanelItemDescriptor => {
    const { name, title, description, icon = 'empty' } = visTypeAlias;

    return {
      name: title,
      icon,
      onClick: createNewVisType(visTypeAlias),
      'data-test-subj': `visType-${name}`,
      toolTipContent: description,
    };
  };

  const getEmbeddableFactoryMenuItem = (
    factory: EmbeddableFactory,
    closePopover: () => void
  ): EuiContextMenuPanelItemDescriptor => {
    const icon = factory?.getIconType ? factory.getIconType() : 'empty';

    const toolTipContent = factory?.getDescription ? factory.getDescription() : undefined;

    return {
      name: factory.getDisplayName(),
      icon,
      toolTipContent,
      onClick: async () => {
        closePopover();
        createNewEmbeddable(factory);
      },
      'data-test-subj': `createNew-${factory.type}`,
    };
  };

  const aggsPanelTitle = i18n.translate('dashboard.editorMenu.aggBasedGroupTitle', {
    defaultMessage: 'Aggregation based',
  });

  const getEditorMenuPanels = (closePopover: () => void) => {
    const initialPanelItems = [
      ...visTypeAliases.map(getVisTypeAliasMenuItem),
      ...toolVisTypes.map(getVisTypeMenuItem),
      ...ungroupedFactories.map((factory) => {
        return getEmbeddableFactoryMenuItem(factory, closePopover);
      }),
      ...Object.values(factoryGroupMap).map(({ id, appName, icon, panelId }) => ({
        name: appName,
        icon,
        panel: panelId,
        'data-test-subj': `dashboardEditorMenu-${id}Group`,
      })),

      ...promotedVisTypes.map(getVisTypeMenuItem),
      ...getAddPanelActionMenuItems(
        addPanelActions,
        createNewEmbeddable,
        deleteEmbeddable,
        closePopover
      ),
    ];
    if (aggsBasedVisTypes.length > 0) {
      initialPanelItems.push({
        name: aggsPanelTitle,
        icon: 'visualizeApp',
        panel: aggBasedPanelID,
        'data-test-subj': `dashboardEditorAggBasedMenuItem`,
      });
    }

    return [
      {
        id: 0,
        items: initialPanelItems,
      },
      {
        id: aggBasedPanelID,
        title: aggsPanelTitle,
        items: aggsBasedVisTypes.map(getVisTypeMenuItem),
      },
      ...Object.values(factoryGroupMap).map(
        ({ appName, panelId, factories: groupFactories }: FactoryGroup) => ({
          id: panelId,
          title: appName,
          items: groupFactories.map((factory) => {
            return getEmbeddableFactoryMenuItem(factory, closePopover);
          }),
        })
      ),
    ];
  };
  return (
    <ToolbarPopover
      zIndex={Number(euiTheme.levels.header) - 1}
      repositionOnScroll
      ownFocus
      label={i18n.translate('dashboard.solutionToolbar.editorMenuButtonLabel', {
        defaultMessage: 'Add panel',
      })}
      isDisabled={isDisabled}
      size="s"
      iconType="plusInCircle"
      panelPaddingSize="none"
      data-test-subj="dashboardEditorMenuButton"
    >
      {({ closePopover }: { closePopover: () => void }) => (
        <EuiContextMenu
          initialPanelId={0}
          panels={getEditorMenuPanels(closePopover)}
          className={`dshSolutionToolbar__editorContextMenu`}
          data-test-subj="dashboardEditorContextMenu"
        />
      )}
    </ToolbarPopover>
  );
};
