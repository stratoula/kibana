/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import {
  EuiPopover,
  EuiHorizontalRule,
  EuiSelectableProps,
  EuiButton,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  useEuiTheme,
  useGeneratedHtmlId,
  EuiIcon,
  EuiLink,
  EuiText,
  EuiTourStep,
} from '@elastic/eui';
import type { DataViewListItem } from 'src/plugins/data_views/public';
import { IDataPluginServices } from '../../';
import { useKibana } from '../../../../kibana_react/public';
import type { ChangeDataViewTriggerProps } from './index';
import { DataViewsList } from './dataview_list';

const POPOVER_CONTENT_WIDTH = 280;
const NEW_DATA_VIEW_MENU_STORAGE_KEY = 'data.newDataViewMenu';

export function ChangeDataView({
  isMissingCurrent,
  currentDataViewId,
  onChangeDataView,
  onAddField,
  onDataViewCreated,
  trigger,
  selectableProps,
}: {
  trigger: ChangeDataViewTriggerProps;
  isMissingCurrent?: boolean;
  onChangeDataView: (newId: string) => void;
  onAddField?: () => void;
  onDataViewCreated?: () => void;
  currentDataViewId?: string;
  selectableProps?: EuiSelectableProps;
}) {
  const { euiTheme } = useEuiTheme();
  const [isPopoverOpen, setPopoverIsOpen] = useState(false);
  const [dataViewsList, setDataViewsList] = useState<DataViewListItem[]>([]);
  const kibana = useKibana<IDataPluginServices>();
  const { application, data, storage } = kibana.services;

  const [isTourDismissed, setIsTourDismissed] = useState(() =>
    Boolean(storage.get(NEW_DATA_VIEW_MENU_STORAGE_KEY))
  );
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    if (!isTourDismissed) {
      setIsTourOpen(true);
    }
  }, [isTourDismissed, setIsTourOpen]);

  const onTourDismiss = () => {
    storage.set(NEW_DATA_VIEW_MENU_STORAGE_KEY, true);
    setIsTourDismissed(true);
    setIsTourOpen(false);
  };

  // Create a reusable id to ensure search input is the first focused item in the popover even though it's not the first item
  const searchListInputId = useGeneratedHtmlId({ prefix: 'dataviewPickerListSearchInput' });

  useEffect(() => {
    const fetchDataViews = async () => {
      const dataViewsRefs = await data.dataViews.getIdsWithTitle();
      setDataViewsList(dataViewsRefs);
    };
    fetchDataViews();
  }, [data, currentDataViewId]);

  const createTrigger = function () {
    const { label, title, 'data-test-subj': dataTestSubj, ...rest } = trigger;
    return (
      <EuiButton
        css={css`
          max-width: ${POPOVER_CONTENT_WIDTH}px;
        `}
        data-test-subj={dataTestSubj}
        onClick={() => {
          setPopoverIsOpen(!isPopoverOpen);
          setIsTourOpen(false);
          // onTourDismiss(); TODO: Decide if opening the menu should also dismiss the tour
        }}
        color={isMissingCurrent ? 'danger' : 'primary'}
        iconSide="right"
        iconType="arrowDown"
        title={title}
        {...rest}
      >
        {label}
      </EuiButton>
    );
  };

  return (
    <EuiTourStep
      content={
        <EuiText style={{ maxWidth: 320 }}>
          <p>
            The data view selector has moved! You&apos;ll find all related data view options in this
            new menu.
          </p>
        </EuiText>
      }
      isStepOpen={isTourOpen}
      onFinish={onTourDismiss}
      step={1}
      stepsTotal={1}
      title={
        <>
          <EuiIcon type="bell" size="s" /> &nbsp; Hey there!
        </>
      }
      footerAction={<EuiLink onClick={onTourDismiss}>Got it!</EuiLink>}
      repositionOnScroll
    >
      <EuiPopover
        panelClassName="changeDataViewPopover"
        button={createTrigger()}
        panelProps={{
          ['data-test-subj']: 'changeDataViewPopover',
        }}
        isOpen={isPopoverOpen}
        closePopover={() => setPopoverIsOpen(false)}
        panelPaddingSize="none"
        initialFocus={`#${searchListInputId}`}
        buffer={8}
      >
        <div style={{ width: POPOVER_CONTENT_WIDTH }}>
          {onAddField && (
            <>
              <EuiContextMenuPanel
                size="s"
                items={[
                  <EuiContextMenuItem
                    key="add"
                    icon="indexOpen"
                    data-test-subj="indexPattern-add-field"
                    onClick={() => {
                      setPopoverIsOpen(false);
                      onAddField();
                    }}
                  >
                    {i18n.translate('data.query.queryBar.indexPattern.addFieldButton', {
                      defaultMessage: 'Add a field to this data view...',
                    })}
                  </EuiContextMenuItem>,
                  <EuiContextMenuItem
                    key="manage"
                    icon="indexSettings"
                    data-test-subj="indexPattern-manage-field"
                    onClick={() => {
                      setPopoverIsOpen(false);
                      application.navigateToApp('management', {
                        path: `/kibana/indexPatterns/patterns/${currentDataViewId}`,
                      });
                    }}
                  >
                    {i18n.translate('data.query.queryBar.indexPattern.manageFieldButton', {
                      defaultMessage: 'Manage this data view...',
                    })}
                  </EuiContextMenuItem>,
                ]}
              />
              <EuiHorizontalRule margin="none" />
            </>
          )}
          <DataViewsList
            dataViewsList={dataViewsList}
            onChangeDataView={(newId) => {
              onChangeDataView(newId);
              setPopoverIsOpen(false);
            }}
            currentDataViewId={currentDataViewId}
            selectableProps={selectableProps}
            searchListInputId={searchListInputId}
          />
          {onDataViewCreated && (
            <>
              <EuiHorizontalRule margin="none" />
              <EuiContextMenuItem
                css={css`
                  color: ${euiTheme.colors.primaryText};
                `}
                data-test-subj="dataview-create-new"
                icon="plusInCircleFilled"
                onClick={() => {
                  setPopoverIsOpen(false);
                  onDataViewCreated();
                }}
              >
                {i18n.translate('data.query.queryBar.indexPattern.addNewDataView', {
                  defaultMessage: 'New data view...',
                })}
              </EuiContextMenuItem>
            </>
          )}
        </div>
      </EuiPopover>
    </EuiTourStep>
  );
}
