/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export interface BaseSettings {
  has_seen_add_data_notice?: boolean;
  fleet_server_hosts?: string[];
  prerelease_integrations_enabled: boolean;
}

export interface Settings extends BaseSettings {
  id: string;
  preconfigured_fields?: Array<'fleet_server_hosts'>;
}
