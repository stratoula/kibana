/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useMemo, useState } from 'react';
import {
  EuiPopover,
  EuiButtonIcon,
  EuiContextMenuPanel,
  type EuiContextMenuPanelProps,
  EuiContextMenuItem,
  EuiHorizontalRule,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';

interface ESQLMenuPopoverProps {
  onDataViewSwitch: () => void;
}

export const ESQLMenuPopover = ({ onDataViewSwitch }: ESQLMenuPopoverProps) => {
  const [isESQLMenuPopoverOpen, setIsESQLMenuPopoverOpen] = useState(false);
  const esqlPanelItems = useMemo(() => {
    const panelItems: EuiContextMenuPanelProps['items'] = [];
    panelItems.push(
      <EuiContextMenuItem
        key="open-docs"
        icon="documentation"
        data-test-subj="esql-open-docs"
        onClick={() => {
          // open the docs
        }}
      >
        {i18n.translate('unifiedSearch.query.queryBar.esqlMenu.openDocs', {
          defaultMessage: 'Open docs',
        })}
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="about"
        icon="iInCircle"
        data-test-subj="esql-about"
        onClick={() => {
          // go to docs
        }}
      >
        {i18n.translate('unifiedSearch.query.queryBar.esqlMenu.aboutESQL', {
          defaultMessage: 'About ES|QL',
        })}
      </EuiContextMenuItem>,
      <EuiHorizontalRule margin="none" key="dataviewActions-divider" />,
      <EuiContextMenuItem
        key="switch"
        icon="editorRedo"
        data-test-subj="switch-to-dataviews"
        onClick={() => {
          onDataViewSwitch();
          setIsESQLMenuPopoverOpen(false);
        }}
      >
        {i18n.translate('unifiedSearch.query.queryBar.esqlMenu.switchToDataviews', {
          defaultMessage: 'Switch to data views',
        })}
      </EuiContextMenuItem>
    );
    return panelItems;
  }, [onDataViewSwitch]);

  return (
    <EuiPopover
      button={
        <EuiButtonIcon
          iconType={isESQLMenuPopoverOpen ? 'cross' : 'arrowRight'}
          color="text"
          onClick={() => setIsESQLMenuPopoverOpen(!isESQLMenuPopoverOpen)}
        />
      }
      panelProps={{
        ['data-test-subj']: 'esqlMenuPopover',
      }}
      isOpen={isESQLMenuPopoverOpen}
      closePopover={() => setIsESQLMenuPopoverOpen(false)}
      panelPaddingSize="none"
      display="block"
    >
      <EuiContextMenuPanel size="s" items={esqlPanelItems} />
    </EuiPopover>
  );
};
