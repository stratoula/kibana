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

import { FormattedMessage } from '@kbn/i18n/react';
import React from 'react';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiModalHeader,
  EuiModalBody,
  EuiModalHeaderTitle,
  EuiLink,
  EuiTitle,
  EuiListGroup,
  EuiListGroupItem,
  EuiText,
} from '@elastic/eui';

import { VisTypeAlias } from '../../vis_types/vis_type_alias_registry';
import { VisType, TypesStart } from '../../vis_types';

interface GroupSelectionProps {
  addBasePath: (path: string) => string;
  onVisTypeSelected: (visType: VisType | VisTypeAlias) => void;
  visTypesRegistry: TypesStart;
  showExperimental: boolean;
}

class GroupSelection extends React.Component<GroupSelectionProps> {
  public render() {
    return (
      <React.Fragment>
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <FormattedMessage
              id="visualizations.newVisWizard.title"
              defaultMessage="New Visualization"
            />
          </EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
          <EuiFlexGroup gutterSize="l">
            {this.props.visTypesRegistry.getAliases().map(this.renderVisType)}
          </EuiFlexGroup>
          <EuiFlexGroup gutterSize="l">
            {this.props.visTypesRegistry.getByGroup('other').map(this.renderVisType)}
          </EuiFlexGroup>
          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem>
              <EuiCard
                layout="horizontal"
                title={<span data-test-subj="visGroupAggBased">Aggregation Based</span>}
                data-test-subj="visGroupAggBased"
                aria-describedby="visGroupAggBased"
                description="A set of frequently used visualizations that allows you to plot aggregated data to find trends, spikes and dips you need to know about"
                icon={<EuiIcon type="snowflake" size="xl" color="secondary" />}
              >
                <EuiLink href="http://google.com">Explore options</EuiLink>
              </EuiCard>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFlexGroup direction="column" gutterSize="none">
                <EuiTitle size="s">
                  <h3>Tools</h3>
                </EuiTitle>
                {this.props.visTypesRegistry.getByGroup('tools').map(this.renderToolsVis)}
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiModalBody>
      </React.Fragment>
    );
  }

  private renderVisType = (visType: VisType | VisTypeAlias) => {
    const onClick = () => this.props.onVisTypeSelected(visType);

    return (
      <EuiFlexItem key={visType.name}>
        <EuiCard
          title={<span data-test-subj="visTypeTitle">{visType.title}</span>}
          onClick={onClick}
          data-test-subj={`visType-${visType.name}`}
          data-vis-stage={!('aliasPath' in visType) ? visType.stage : 'alias'}
          aria-describedby={`visTypeDescription-${visType.name}`}
          description={visType.description || ''}
          layout="horizontal"
          icon={<EuiIcon type={visType.icon || 'empty'} size="xl" color="secondary" />}
        />
      </EuiFlexItem>
    );
  };

  private renderToolsVis = (visType: VisType) => {
    const onClick = () => this.props.onVisTypeSelected(visType);

    return (
      <EuiFlexGroup key={visType.name} alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiIcon type={visType.icon || 'empty'} size="l" />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiLink onClick={onClick}>{visType.title}</EuiLink>
          <EuiText color="subdued">{visType.description}</EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  };
}

export { GroupSelection };
