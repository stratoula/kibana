/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useState } from 'react';
import { i18n } from '@kbn/i18n';
import {
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPopover,
  EuiPopoverTitle,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiBadge,
} from '@elastic/eui';
import { css, Interpolation, Theme } from '@emotion/react';
import { css as classNameCss } from '@emotion/css';
import type { MonacoMessage } from './helpers';

export const getConstsByType = (type: 'error' | 'warning', count: number) => {
  if (type === 'error') {
    return {
      color: 'danger',
      message: i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.errorCount', {
        defaultMessage: '{count} {count, plural, one {error} other {errors}}',
        values: { count },
      }),
      label: i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.errorsTitle', {
        defaultMessage: 'Errors',
      }),
    };
  } else {
    return {
      color: 'warning',
      message: i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.warningCount', {
        defaultMessage: '{count} {count, plural, one {warning} other {warnings}}',
        values: { count },
      }),
      label: i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.warningsTitle', {
        defaultMessage: 'Warnings',
      }),
    };
  }
};

export function ErrorsWarningsContent({
  items,
  type,
  onErrorClick,
}: {
  items: MonacoMessage[];
  type: 'error' | 'warning';
  onErrorClick: (error: MonacoMessage) => void;
}) {
  const strings = getConstsByType(type, items.length);
  return (
    <div style={{ width: 500 }}>
      <EuiPopoverTitle paddingSize="s">{strings.label}</EuiPopoverTitle>
      <EuiDescriptionList>
        {items.map((item, index) => {
          return (
            <EuiDescriptionListDescription
              key={index}
              className={classNameCss`
                                &:hover {
                                  cursor: pointer;
                                }
                              `}
              onClick={() => onErrorClick(item)}
            >
              <EuiFlexGroup gutterSize="xl" alignItems="flexStart">
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup gutterSize="s" alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiIcon type={type} color={strings.color} size="s" />
                    </EuiFlexItem>
                    <EuiFlexItem style={{ whiteSpace: 'nowrap' }}>
                      {i18n.translate('textBasedEditor.query.textBasedLanguagesEditor.lineNumber', {
                        defaultMessage: 'Line {lineNumber}',
                        values: { lineNumber: item.startLineNumber },
                      })}
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem grow={false} className="TextBasedLangEditor_errorMessage">
                  {item.message}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiDescriptionListDescription>
          );
        })}
      </EuiDescriptionList>
    </div>
  );
}

export function ErrorsWarningsCompactViewPopover({
  items,
  type,
  onErrorClick,
  popoverCSS,
}: {
  items: MonacoMessage[];
  type: 'error' | 'warning';
  onErrorClick: (error: MonacoMessage) => void;
  popoverCSS: Interpolation<Theme>;
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const strings = getConstsByType(type, items.length);
  return (
    <EuiPopover
      button={
        <EuiBadge
          color={strings.color}
          onClick={() => setIsPopoverOpen(true)}
          onClickAriaLabel={strings.message}
          iconType={type}
          iconSide="left"
          data-test-subj={`TextBasedLangEditor-inline-${type}-badge`}
          title={strings.message}
        >
          {items.length}
        </EuiBadge>
      }
      css={popoverCSS}
      ownFocus={false}
      isOpen={isPopoverOpen}
      closePopover={() => setIsPopoverOpen(false)}
      data-test-subj={`TextBasedLangEditor-inline-${type}-popover`}
    >
      <ErrorsWarningsContent items={items} type={type} onErrorClick={onErrorClick} />
    </EuiPopover>
  );
}

export function ErrorsWarningsFooterPopover({
  isPopoverOpen,
  items,
  type,
  setIsPopoverOpen,
  onErrorClick,
  isSpaceReduced,
}: {
  isPopoverOpen: boolean;
  items: MonacoMessage[];
  type: 'error' | 'warning';
  setIsPopoverOpen: (flag: boolean) => void;
  onErrorClick: (error: MonacoMessage) => void;
  isSpaceReduced?: boolean;
}) {
  const strings = getConstsByType(type, items.length);
  return (
    <EuiFlexItem grow={false}>
      <EuiFlexGroup gutterSize="xs" responsive={false} alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiIcon
            type={type}
            color={strings.color}
            size="s"
            onClick={() => {
              setIsPopoverOpen(!isPopoverOpen);
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiPopover
            button={
              <EuiText
                size="xs"
                color={strings.color}
                css={css`
                  &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                  }
                `}
                onClick={() => {
                  setIsPopoverOpen(!isPopoverOpen);
                }}
              >
                <p>{isSpaceReduced ? items.length : strings.message}</p>
              </EuiText>
            }
            ownFocus={false}
            isOpen={isPopoverOpen}
            closePopover={() => setIsPopoverOpen(false)}
          >
            <ErrorsWarningsContent items={items} type={type} onErrorClick={onErrorClick} />
          </EuiPopover>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlexItem>
  );
}
