/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIconTip,
  EuiLink,
  EuiText,
  EuiSpacer,
  EuiTitle,
  EuiButton,
  EuiLoadingSpinner,
  EuiCallOut,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';
import moment from 'moment';
import React, { useState, useMemo } from 'react';
import { EuiSelect } from '@elastic/eui';
import { uniqBy } from 'lodash';
import { usePluginContext } from '../../../../hooks/use_plugin_context';
import { FETCH_STATUS, useFetcher } from '../../../../hooks/use_fetcher';
import { getObservabilityAlerts } from '../../../../services/get_observability_alerts';
import { paths } from '../../../../config';

const ALL_TYPES = 'ALL_TYPES';
const allTypes = {
  value: ALL_TYPES,
  text: i18n.translate('xpack.observability.overview.alert.allTypes', {
    defaultMessage: 'All types',
  }),
};

export function AlertsSection() {
  const { config, core } = usePluginContext();
  const [filter, setFilter] = useState(ALL_TYPES);
  const manageLink = config.unsafe.alertingExperience.enabled
    ? core.http.basePath.prepend(paths.observability.alerts)
    : core.http.basePath.prepend(paths.management.rules);

  const { data, status } = useFetcher(() => {
    return getObservabilityAlerts({ core });
  }, [core]);

  const alerts = useMemo(() => data ?? [], [data]);

  const filterOptions = useMemo(() => {
    if (!alerts) {
      return [];
    }
    return uniqBy(alerts, (alert) => alert.consumer).map(({ consumer }) => ({
      value: consumer,
      text: consumer,
    }));
  }, [alerts]);

  const isError = status === FETCH_STATUS.FAILURE;
  const isLoading = status !== FETCH_STATUS.SUCCESS && !isError;

  if (isLoading) {
    return (
      <EuiFlexGroup alignItems="center" justifyContent="center" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiLoadingSpinner size="xl" />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  if (isError) {
    return (
      <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" responsive={false}>
        <EuiFlexItem>
          <EuiCallOut
            title={i18n.translate('xpack.observability.overview.alert.errorTitle', {
              defaultMessage: "We couldn't load the alert data",
            })}
            color="danger"
            iconType="alert"
          >
            <p>
              <FormattedMessage
                id="xpack.observability.overview.alert.errorMessage"
                defaultMessage="There was an error loading the alert data. Try again later."
              />
            </p>
          </EuiCallOut>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  return (
    <div>
      <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiTitle size="xs">
            <h4>
              {i18n.translate('xpack.observability.overview.alerts.title', {
                defaultMessage: 'Alerts',
              })}
            </h4>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton size="s" href={manageLink}>
            {i18n.translate('xpack.observability.overview.alert.appLink', {
              defaultMessage: 'Manage alerts',
            })}
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <>
        <EuiFlexItem grow={false}>
          <EuiSpacer />
          <EuiSelect
            compressed
            fullWidth={true}
            id="filterAlerts"
            options={[allTypes, ...filterOptions]}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <EuiSpacer />
        </EuiFlexItem>
        {alerts
          .filter((alert) => filter === ALL_TYPES || alert.consumer === filter)
          .map((alert, index) => {
            const isLastElement = index === alerts.length - 1;
            return (
              <EuiFlexGroup direction="column" gutterSize="s" key={alert.id}>
                <EuiFlexItem grow={false}>
                  <EuiLink
                    href={core.http.basePath.prepend(paths.management.alertDetails(alert.id))}
                  >
                    <EuiText size="s">{alert.name}</EuiText>
                  </EuiLink>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup gutterSize="xs">
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="hollow">{alert.alertTypeId}</EuiBadge>
                    </EuiFlexItem>
                    {alert.tags.map((tag, idx) => {
                      return (
                        <EuiFlexItem key={idx} grow={false}>
                          <EuiBadge color="default">{tag}</EuiBadge>
                        </EuiFlexItem>
                      );
                    })}
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup gutterSize="s">
                    <EuiFlexItem grow={false}>
                      <EuiText color="subdued" size="xs">
                        Updated {moment.duration(moment().diff(alert.updatedAt)).humanize()} ago
                      </EuiText>
                    </EuiFlexItem>
                    {alert.muteAll && (
                      <EuiFlexItem grow={false}>
                        <EuiIconTip
                          type="minusInCircle"
                          content={i18n.translate('xpack.observability.overview.alerts.muted', {
                            defaultMessage: 'Muted',
                          })}
                        />
                      </EuiFlexItem>
                    )}
                  </EuiFlexGroup>
                </EuiFlexItem>
                {!isLastElement && <EuiHorizontalRule margin="xs" />}
              </EuiFlexGroup>
            );
          })}
      </>
    </div>
  );
}
