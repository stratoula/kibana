/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useCallback, useMemo } from 'react';
import { EuiText, EuiLink, EuiTitle, EuiSpacer } from '@elastic/eui';
import { RedirectAppLinks } from '@kbn/shared-ux-link-redirect-app';

import { useServices } from '../services';
import type { UserContentCommonSchema, Props as TableListViewProps } from '../table_list_view';

type InheritedProps<T extends UserContentCommonSchema> = Pick<
  TableListViewProps<T>,
  'onClickTitle' | 'getDetailViewLink' | 'id'
>;
interface Props<T extends UserContentCommonSchema> extends InheritedProps<T> {
  item: T;
  searchTerm?: string;
}

/**
 * Copied from https://stackoverflow.com/a/9310752
 */
// const escapeRegExp = (text: string) => {
//   return text.replace(/[-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// };

export function ItemDetails<T extends UserContentCommonSchema>({
  id,
  item,
  searchTerm = '',
  getDetailViewLink,
  onClickTitle,
}: Props<T>) {
  const {
    references,
    attributes: { title, description },
  } = item;
  const { navigateToUrl, currentAppId$, TagList, itemHasTags } = useServices();

  const redirectAppLinksCoreStart = useMemo(
    () => ({
      application: {
        navigateToUrl,
        currentAppId$,
      },
    }),
    [currentAppId$, navigateToUrl]
  );

  const onClickTitleHandler = useMemo(() => {
    if (!onClickTitle) {
      return undefined;
    }

    return ((e) => {
      e.preventDefault();
      onClickTitle(item);
    }) as React.MouseEventHandler<HTMLAnchorElement>;
  }, [item, onClickTitle]);

  const renderTitle = useCallback(() => {
    const href = getDetailViewLink ? getDetailViewLink(item) : undefined;

    if (!href && !onClickTitle) {
      // This item is not clickable
      return <span>{title}</span>;
    }

    return (
      <RedirectAppLinks coreStart={redirectAppLinksCoreStart}>
        {/* eslint-disable-next-line  @elastic/eui/href-or-on-click */}
        <EuiLink
          href={getDetailViewLink ? getDetailViewLink(item) : undefined}
          onClick={onClickTitleHandler}
          data-test-subj={`${id}ListingTitleLink-${item.attributes.title.split(' ').join('-')}`}
        >
          {title}
        </EuiLink>
      </RedirectAppLinks>
    );
  }, [
    getDetailViewLink,
    id,
    item,
    onClickTitle,
    onClickTitleHandler,
    redirectAppLinksCoreStart,
    title,
  ]);

  const hasTags = itemHasTags(references);

  return (
    <div>
      <EuiTitle size="xs">{renderTitle()}</EuiTitle>
      {Boolean(description) && (
        <EuiText size="s">
          <p>{description!}</p>
        </EuiText>
      )}
      {hasTags && (
        <>
          <EuiSpacer size="s" />
          <TagList references={references} />
        </>
      )}
    </div>
  );
}
