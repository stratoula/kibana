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
import React, { useState } from 'react';
import { orderBy } from 'lodash';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiModalHeader,
  EuiModalBody,
  EuiModalHeaderTitle,
  EuiLink,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';
import { DocLinksStart } from '../../../../../core/public';
import { VisTypeAlias } from '../../vis_types/vis_type_alias_registry';
import { VisType, TypesStart } from '../../vis_types';
import { AggBasedSelection } from './agg_based_selection';

interface GroupSelectionProps {
  addBasePath: (path: string) => string;
  onVisTypeSelected: (visType: VisType | VisTypeAlias) => void;
  visTypesRegistry: TypesStart;
  showExperimental: boolean;
  docLinks: DocLinksStart;
}

interface VisCardProps {
  onVisTypeSelected: (visType: VisType | VisTypeAlias) => void;
  visType: VisType | VisTypeAlias;
}

function GroupSelection(props: GroupSelectionProps) {
  const [showGroups, setShowGroups] = useState(true);
  const visualizeGuideLink = props.docLinks.links.dashboard.guide;
  return (
    <>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <FormattedMessage
            id="visualizations.newVisWizard.title"
            defaultMessage="New Visualization"
          />
        </EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        {showGroups && (
          <>
            <EuiFlexGroup gutterSize="l">
              {orderBy(props.visTypesRegistry.getAliases(), ['title', ['asc']]).map((visType) => (
                <VisGroup
                  visType={visType}
                  key={visType.name}
                  onVisTypeSelected={props.onVisTypeSelected}
                />
              ))}
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiFlexGroup gutterSize="l">
              {orderBy(props.visTypesRegistry.getByGroup('other'), ['title', ['asc']]).map(
                (visType) => (
                  <VisGroup
                    visType={visType}
                    key={visType.name}
                    onVisTypeSelected={props.onVisTypeSelected}
                  />
                )
              )}
            </EuiFlexGroup>
            <EuiSpacer size="xxl" />
            <EuiFlexGroup gutterSize="l">
              <EuiFlexItem>
                <EuiCard
                  titleSize="xs"
                  layout="horizontal"
                  title={<span data-test-subj="visGroupAggBased">Aggregation Based</span>}
                  data-test-subj="visGroupAggBased"
                  aria-describedby="visGroupAggBased"
                  description="A set of frequently used visualizations that allows you to plot aggregated data to find trends, spikes and dips you need to know about"
                  icon={<EuiIcon type="snowflake" size="xl" color="secondary" />}
                >
                  <EuiLink onClick={() => setShowGroups(false)}>
                    Explore options <EuiIcon type="arrowRight" />
                  </EuiLink>
                </EuiCard>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  titleSize="xs"
                  title={<span data-test-subj="visGroupAggBased">Tools</span>}
                  display="plain"
                  layout="horizontal"
                  description=""
                  className="visNewVisDialog__toolsCard"
                >
                  {props.visTypesRegistry.getByGroup('tools').map((visType) => (
                    <ToolsGroup
                      visType={visType}
                      key={visType.name}
                      onVisTypeSelected={props.onVisTypeSelected}
                    />
                  ))}
                </EuiCard>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
            <EuiFlexGroup gutterSize="s" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiText>Want to learn more? </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href={visualizeGuideLink} target="_blank" external>
                  Read documentation
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </>
        )}
        {!showGroups && (
          <AggBasedSelection
            showExperimental={props.showExperimental}
            onVisTypeSelected={props.onVisTypeSelected}
            visTypesRegistry={props.visTypesRegistry}
            addBasePath={props.addBasePath}
            goBack={() => setShowGroups(true)}
          />
        )}
      </EuiModalBody>
    </>
  );
}

const VisGroup = ({ visType, onVisTypeSelected }: VisCardProps) => {
  const onClick = () => onVisTypeSelected(visType);
  return (
    <EuiFlexItem>
      <EuiCard
        titleSize="xs"
        title={<span data-test-subj="visTypeTitle">{visType.title}</span>}
        onClick={onClick}
        data-test-subj={`visType-${visType.name}`}
        data-vis-stage={!('aliasPath' in visType) ? visType.stage : 'alias'}
        aria-describedby={`visTypeDescription-${visType.name}`}
        description={visType.groupDescription || ''}
        layout="horizontal"
        icon={<EuiIcon type={visType.icon || 'empty'} size="xl" color="secondary" />}
      />
    </EuiFlexItem>
  );
};

const ToolsGroup = ({ visType, onVisTypeSelected }: VisCardProps) => {
  const onClick = () => onVisTypeSelected(visType);
  return (
    <EuiFlexGroup alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiIcon type={visType.icon || 'empty'} size="l" />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiLink onClick={onClick}>{visType.title}</EuiLink>
        <EuiText color="subdued" size="s">
          {visType.description}
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export { GroupSelection };
