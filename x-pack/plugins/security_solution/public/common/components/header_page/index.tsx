/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiBadge,
  EuiProgress,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiSpacer,
} from '@elastic/eui';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { LinkIcon, LinkIconProps } from '../link_icon';
import { Subtitle, SubtitleProps } from '../subtitle';
import { Title } from './title';
import { DraggableArguments, BadgeOptions, TitleProp } from './types';
import { useFormatUrl } from '../link_to';
import { SecurityPageName } from '../../../app/types';
import { Sourcerer } from '../sourcerer';
import { SourcererScopeName } from '../../store/sourcerer/model';

interface HeaderProps {
  border?: boolean;
  isLoading?: boolean;
}

const Header = styled.header.attrs({
  className: 'securitySolutionHeaderPage',
})<HeaderProps>`
  ${({ border, theme }) => css`
    margin-bottom: ${theme.eui.euiSizeL};
  `}
`;
Header.displayName = 'Header';

const LinkBack = styled.div.attrs({
  className: 'securitySolutionHeaderPage__linkBack',
})`
  ${({ theme }) => css`
    font-size: ${theme.eui.euiFontSizeXS};
    line-height: ${theme.eui.euiLineHeight};
    margin-bottom: ${theme.eui.euiSizeS};
  `}
`;
LinkBack.displayName = 'LinkBack';

const Badge = (styled(EuiBadge)`
  letter-spacing: 0;
` as unknown) as typeof EuiBadge;
Badge.displayName = 'Badge';

interface BackOptions {
  href: LinkIconProps['href'];
  text: LinkIconProps['children'];
  dataTestSubj?: string;
  pageId: SecurityPageName;
}

export interface HeaderPageProps extends HeaderProps {
  backOptions?: BackOptions;
  /** A component to be displayed as the back button. Used only if `backOption` is not defined */
  backComponent?: React.ReactNode;
  badgeOptions?: BadgeOptions;
  children?: React.ReactNode;
  draggableArguments?: DraggableArguments;
  hideSourcerer?: boolean;
  subtitle?: SubtitleProps['items'];
  subtitle2?: SubtitleProps['items'];
  title: TitleProp;
  titleNode?: React.ReactElement;
}

const HeaderPageComponent: React.FC<HeaderPageProps> = ({
  backOptions,
  backComponent,
  badgeOptions,
  border,
  children,
  draggableArguments,
  hideSourcerer = false,
  isLoading,
  subtitle,
  subtitle2,
  title,
  titleNode,
  ...rest
}) => {
  const history = useHistory();
  const { formatUrl } = useFormatUrl(backOptions?.pageId ?? SecurityPageName.overview);
  const goTo = useCallback(
    (ev) => {
      ev.preventDefault();
      if (backOptions) {
        history.push(backOptions.href ?? '');
      }
    },
    [backOptions, history]
  );
  return (
    <>
      <EuiPageHeader alignItems="center" bottomBorder={border}>
        <EuiPageHeaderSection>
          {backOptions && (
            <LinkBack>
              <LinkIcon
                dataTestSubj={backOptions.dataTestSubj ?? 'link-back'}
                onClick={goTo}
                href={formatUrl(backOptions.href ?? '')}
                iconType="arrowLeft"
              >
                {backOptions.text}
              </LinkIcon>
            </LinkBack>
          )}

          {!backOptions && backComponent && <>{backComponent}</>}

          {titleNode || (
            <Title
              draggableArguments={draggableArguments}
              title={title}
              badgeOptions={badgeOptions}
            />
          )}

          {subtitle && <Subtitle data-test-subj="header-page-subtitle" items={subtitle} />}
          {subtitle2 && <Subtitle data-test-subj="header-page-subtitle-2" items={subtitle2} />}
          {border && isLoading && <EuiProgress size="xs" color="accent" />}
        </EuiPageHeaderSection>

        {children && (
          <EuiPageHeaderSection data-test-subj="header-page-supplements">
            {children}
          </EuiPageHeaderSection>
        )}
        {!hideSourcerer && <Sourcerer scope={SourcererScopeName.default} />}
      </EuiPageHeader>
      {/* Manually add a 'padding-bottom' to header */}
      <EuiSpacer size="l" />
    </>
  );
};

export const HeaderPage = React.memo(HeaderPageComponent);
