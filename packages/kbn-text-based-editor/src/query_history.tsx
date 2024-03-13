/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { i18n } from '@kbn/i18n';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  useEuiTheme,
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiTableSortingType,
  EuiButtonEmpty,
  Criteria,
  EuiButtonIcon,
  CustomItemAction,
  EuiCopy,
  EuiToolTip,
  euiScrollBarStyles,
} from '@elastic/eui';
import { css, Interpolation, Theme } from '@emotion/react';
import { type QueryHistoryItem, getHistoryItems } from './history_localStorage';

const CONTAINER_MAX_HEIGHT = 190;

export function QueryHistoryAction({
  toggleHistory,
  isHistoryOpen,
  isSpaceReduced,
}: {
  toggleHistory: () => void;
  isHistoryOpen: boolean;
  isSpaceReduced?: boolean;
}) {
  const { euiTheme } = useEuiTheme();
  // get history items from local storage
  const items: QueryHistoryItem[] = getHistoryItems('desc');
  if (!items.length) return null;
  return (
    <>
      {isSpaceReduced && (
        <EuiFlexItem grow={false}>
          <EuiIcon
            type="clock"
            color="primary"
            size="m"
            onClick={toggleHistory}
            css={css`
              margin-right: ${euiTheme.size.s};
            `}
          />
        </EuiFlexItem>
      )}
      {!isSpaceReduced && (
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty
            size="xs"
            color="primary"
            onClick={toggleHistory}
            css={css`
              padding-inline: 0;
              margin-right: ${euiTheme.size.s};
            `}
            iconType="clock"
          >
            {isHistoryOpen
              ? i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.hideQueriesLabel', {
                  defaultMessage: 'Hide recent queries',
                })
              : i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.showQueriesLabel', {
                  defaultMessage: 'Show recent queries',
                })}
          </EuiButtonEmpty>
        </EuiFlexItem>
      )}
    </>
  );
}

export const getTableColumns = (
  width: number,
  actions: Array<CustomItemAction<QueryHistoryItem>>
): Array<EuiBasicTableColumn<QueryHistoryItem>> => {
  const shouldHideOptions = width < 560;
  return [
    {
      field: 'status',
      name: '',
      sortable: false,
      render: (status: QueryHistoryItem['status']) => {
        switch (status) {
          case 'success':
          default:
            return <EuiIcon type="checkInCircleFilled" color="success" size="s" />;
          case 'error':
            return <EuiIcon type="error" color="danger" size="s" />;
        }
      },
      width: '40px',
    },
    {
      field: 'queryString',
      name: i18n.translate(
        'textBasedEditor.query.textBasedLanguagesEditor.recentQueriesColumnLabel',
        {
          defaultMessage: 'Recent queries',
        }
      ),
      render: (queryString: QueryHistoryItem['queryString']) => (
        <QueryColumn queryString={queryString} containerWidth={width} />
      ),
      truncateText: false,
      sortable: false,
    },
    ...(!shouldHideOptions
      ? [
          {
            field: 'timeRun',
            name: i18n.translate(
              'textBasedEditor.query.textBasedLanguagesEditor.timeRunColumnLabel',
              {
                defaultMessage: 'Time run',
              }
            ),
            sortable: true,
            render: (timeRun: QueryHistoryItem['timeRun']) => timeRun,
            width: '240px',
          },
        ]
      : []),
    ...(!shouldHideOptions
      ? [
          {
            field: 'duration',
            name: i18n.translate(
              'textBasedEditor.query.textBasedLanguagesEditor.lastDurationColumnLabel',
              {
                defaultMessage: 'Last duration',
              }
            ),
            sortable: false,
            width: '120px',
          },
        ]
      : []),
    {
      name: '',
      actions,
      width: '40px',
    },
  ];
};

export function QueryHistory({
  containerCSS,
  containerWidth,
  onUpdateAndSubmit,
}: {
  containerCSS: Interpolation<Theme>;
  containerWidth: number;
  onUpdateAndSubmit: (qs: string) => void;
}) {
  const theme = useEuiTheme();
  const scrollBarStyles = euiScrollBarStyles(theme);

  const actions: Array<CustomItemAction<QueryHistoryItem>> = useMemo(() => {
    return [
      {
        render: (item: QueryHistoryItem) => {
          return (
            <EuiFlexGroup gutterSize="xs" responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiToolTip
                  position="top"
                  content={i18n.translate(
                    'textBasedEditor.query.textBasedLanguagesEditor.querieshistoryRun',
                    {
                      defaultMessage: 'Run query',
                    }
                  )}
                >
                  <EuiIcon
                    type="playFilled"
                    size="m"
                    onClick={() => onUpdateAndSubmit(item.queryString)}
                    css={css`
                      cursor: pointer;
                    `}
                  />
                </EuiToolTip>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiCopy
                  textToCopy={item.queryString}
                  content={i18n.translate(
                    'textBasedEditor.query.textBasedLanguagesEditor.querieshistoryCopy',
                    {
                      defaultMessage: 'Copy query to clipboard',
                    }
                  )}
                >
                  {(copy) => (
                    <EuiIcon
                      type="copy"
                      size="m"
                      onClick={copy}
                      css={css`
                        cursor: pointer;
                      `}
                    />
                  )}
                </EuiCopy>
              </EuiFlexItem>
            </EuiFlexGroup>
          );
        },
      },
    ];
  }, [onUpdateAndSubmit]);
  const columns = useMemo(() => {
    return getTableColumns(containerWidth, actions);
  }, [actions, containerWidth]);

  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const onTableChange = ({ page, sort }: Criteria<QueryHistoryItem>) => {
    if (sort) {
      const { direction } = sort;
      setSortDirection(direction);
    }
  };

  const sorting: EuiTableSortingType<QueryHistoryItem> = {
    sort: {
      field: 'timeRun',
      direction: sortDirection,
    },
    enableAllColumns: false,
    readOnly: false,
  };
  const { euiTheme } = theme;
  // get history items from local storage
  const items: QueryHistoryItem[] = getHistoryItems(sortDirection);
  return (
    <EuiFlexGroup
      gutterSize="none"
      data-test-subj="TextBasedLangEditor-queryHistory"
      css={containerCSS}
      responsive={false}
    >
      <EuiBasicTable
        tableCaption={i18n.translate(
          'textBasedEditor.query.textBasedLanguagesEditor.querieshistoryTable',
          {
            defaultMessage: 'Queries history table',
          }
        )}
        responsive={false}
        items={items}
        columns={columns}
        sorting={sorting}
        onChange={onTableChange}
        css={css`
          width: ${containerWidth}px;
          max-height: ${CONTAINER_MAX_HEIGHT}px;
          overflow-y: auto;
          ${scrollBarStyles}
          .euiTable {
            background-color: ${euiTheme.colors.lightestShade};
          }
          .euiTable tbody tr:nth-child(odd) {
            background-color: ${euiTheme.colors.emptyShade};
          }
        `}
        tableLayout="fixed"
      />
    </EuiFlexGroup>
  );
}

export function QueryColumn({
  queryString,
  containerWidth,
}: {
  containerWidth: number;
  queryString: string;
}) {
  const { euiTheme } = useEuiTheme();
  const containerRef = useRef<HTMLElement>(null);

  const [isExpandable, setIsExpandable] = useState(false);
  const [isRowExpanded, setIsRowExpanded] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const textIsOverlapping = containerRef.current.offsetWidth < containerRef.current.scrollWidth;
      setIsExpandable(textIsOverlapping);
    }
  }, [containerWidth]);

  return (
    <>
      {isExpandable && (
        <EuiButtonIcon
          onClick={() => {
            setIsRowExpanded(!isRowExpanded);
          }}
          aria-label={
            isRowExpanded
              ? i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.collapseLabel', {
                  defaultMessage: 'Collapse',
                })
              : i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.expandLabel', {
                  defaultMessage: 'Expand',
                })
          }
          iconType={isRowExpanded ? 'arrowDown' : 'arrowRight'}
          size="xs"
        />
      )}
      <span
        css={css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: ${isRowExpanded ? 'pre-wrap' : 'nowrap'};
          padding-left: ${isExpandable ? euiTheme.size.s : euiTheme.size.xl};
        `}
        ref={containerRef}
      >
        {queryString}
      </span>
    </>
  );
}
