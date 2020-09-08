/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n/react';
import { orderBy } from 'lodash';
import React, { ChangeEvent } from 'react';

import {
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiScreenReaderOnly,
  EuiSpacer,
  EuiIcon,
  EuiCard,
  EuiLink,
} from '@elastic/eui';

import { memoizeLast } from '../../legacy/memoize';
import { VisTypeAlias } from '../../vis_types/vis_type_alias_registry';
import { VisType, TypesStart } from '../../vis_types';

export interface VisTypeListEntry extends VisType {
  highlighted: boolean;
}

export interface VisTypeAliasListEntry extends VisTypeAlias {
  highlighted: boolean;
}

interface TypeSelectionProps {
  addBasePath: (path: string) => string;
  onVisTypeSelected: (visType: VisType | VisTypeAlias) => void;
  visTypesRegistry: TypesStart;
  showExperimental: boolean;
  goBack: () => void;
}
interface TypeSelectionState {
  query: string;
}

class TypeSelection extends React.Component<TypeSelectionProps, TypeSelectionState> {
  public state: TypeSelectionState = {
    query: '',
  };

  private readonly getFilteredVisTypes = memoizeLast(this.filteredVisTypes);

  public render() {
    const { query } = this.state;
    const visTypes = this.getFilteredVisTypes(this.props.visTypesRegistry, query);
    return (
      <React.Fragment>
        <EuiLink onClick={() => this.props.goBack()}>
          <EuiIcon type="arrowLeft" /> Go back
        </EuiLink>
        <EuiSpacer />
        <EuiFieldSearch
          placeholder="Filter"
          value={query}
          onChange={this.onQueryChange}
          fullWidth
          data-test-subj="filterVisType"
          aria-label={i18n.translate('visualizations.newVisWizard.filterVisTypeAriaLabel', {
            defaultMessage: 'Filter for a visualization type',
          })}
        />
        <EuiSpacer />
        <EuiScreenReaderOnly>
          <span aria-live="polite">
            {query && (
              <FormattedMessage
                id="visualizations.newVisWizard.resultsFound"
                defaultMessage="{resultCount} {resultCount, plural,
                            one {type}
                            other {types}
                          } found"
                values={{
                  resultCount: visTypes.filter((type) => type.highlighted).length,
                }}
              />
            )}
          </span>
        </EuiScreenReaderOnly>
        <EuiFlexGroup data-test-subj="visNewDialogTypes" wrap>
          {visTypes.map(this.renderVisType)}
        </EuiFlexGroup>
      </React.Fragment>
    );
  }

  private filteredVisTypes(
    visTypes: TypesStart,
    query: string
  ): Array<VisTypeListEntry | VisTypeAliasListEntry> {
    const types = visTypes.getByGroup('aggbased').filter((type) => {
      // Filter out all lab visualizations if lab mode is not enabled
      if (!this.props.showExperimental && type.stage === 'experimental') {
        return false;
      }

      // Filter out hidden visualizations and visualizations that are only aggregations based
      if (type.hidden) {
        return false;
      }

      return true;
    });

    let entries: Array<VisTypeListEntry | VisTypeAliasListEntry>;
    if (!query) {
      entries = types.map((type) => ({ ...type, highlighted: false }));
    } else {
      const q = query.toLowerCase();
      entries = types.map((type) => {
        const matchesQuery =
          type.name.toLowerCase().includes(q) ||
          type.title.toLowerCase().includes(q) ||
          (typeof type.description === 'string' && type.description.toLowerCase().includes(q));
        return { ...type, highlighted: matchesQuery };
      });
    }

    return orderBy(entries, ['highlighted', 'promotion', 'title'], ['desc', 'asc', 'asc']);
  }

  private renderVisType = (visType: VisTypeListEntry | VisTypeAliasListEntry) => {
    let stage = {};
    if (!('aliasPath' in visType) && visType.stage === 'experimental') {
      stage = {
        betaBadgeLabel: i18n.translate('visualizations.newVisWizard.experimentalTitle', {
          defaultMessage: 'Experimental',
        }),
        betaBadgeTooltipContent: i18n.translate('visualizations.newVisWizard.experimentalTooltip', {
          defaultMessage:
            'This visualization might be changed or removed in a future release and is not subject to the support SLA.',
        }),
      };
    } else if ('aliasPath' in visType && visType.stage === 'beta') {
      const aliasDescription = i18n.translate('visualizations.newVisWizard.betaDescription', {
        defaultMessage:
          'This visualization is in beta and is subject to change. The design and code is less mature than official GA features and is being provided as-is with no warranties. Beta features are not subject to the support SLA of official GA features',
      });
      stage = {
        betaBadgeLabel: i18n.translate('visualizations.newVisWizard.betaTitle', {
          defaultMessage: 'Beta',
        }),
        betaBadgeTooltipContent: aliasDescription,
      };
    }

    const isDisabled = this.state.query !== '' && !visType.highlighted;
    const onClick = () => this.props.onVisTypeSelected(visType);

    return (
      <EuiFlexItem key={visType.name}>
        <EuiCard
          className="visNewVisDialog__card"
          titleSize="xs"
          title={<span data-test-subj="visTypeTitle">{visType.title}</span>}
          onClick={onClick}
          data-test-subj={`visType-${visType.name}`}
          data-vis-stage={!('aliasPath' in visType) ? visType.stage : 'alias'}
          aria-describedby={`visTypeDescription-${visType.name}`}
          description={visType.description || ''}
          layout="horizontal"
          isDisabled={isDisabled}
          icon={<EuiIcon type={visType.icon || 'empty'} size="l" color="secondary" />}
          {...stage}
        />
      </EuiFlexItem>
    );
  };

  private onQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: ev.target.value,
    });
  };
}

export { TypeSelection };
