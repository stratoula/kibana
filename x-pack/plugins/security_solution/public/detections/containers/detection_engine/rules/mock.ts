/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { GetAggregateRuleExecutionEventsResponse } from '../../../../../common/detection_engine/schemas/response';
import { FetchRulesResponse, Rule } from './types';

export const savedRuleMock: Rule = {
  author: [],
  actions: [],
  created_at: 'mm/dd/yyyyTHH:MM:sssz',
  created_by: 'mockUser',
  description: 'some desc',
  enabled: true,
  false_positives: [],
  filters: [],
  from: 'now-360s',
  id: '12345678987654321',
  index: [
    'apm-*-transaction*',
    'traces-apm*',
    'auditbeat-*',
    'endgame-*',
    'filebeat-*',
    'packetbeat-*',
    'winlogbeat-*',
  ],
  interval: '5m',
  immutable: false,
  rule_id: 'bbd3106e-b4b5-4d7c-a1a2-47531d6a2baf',
  language: 'kuery',
  risk_score: 75,
  risk_score_mapping: [],
  name: 'Test rule',
  max_signals: 100,
  query: "user.email: 'root@elastic.co'",
  references: [],
  related_integrations: [],
  required_fields: [],
  setup: '',
  severity: 'high',
  severity_mapping: [],
  tags: ['APM'],
  to: 'now',
  type: 'query',
  threat: [],
  throttle: null,
  updated_at: 'mm/dd/yyyyTHH:MM:sssz',
  updated_by: 'mockUser',
};

export const rulesMock: FetchRulesResponse = {
  page: 1,
  perPage: 2,
  total: 2,
  data: [
    {
      actions: [],
      author: [],
      created_at: '2020-02-14T19:49:28.178Z',
      updated_at: '2020-02-14T19:49:28.320Z',
      created_by: 'elastic',
      description:
        'Elastic Endpoint detected Credential Dumping. Click the Elastic Endpoint icon in the event.module column or the link in the rule.reference column in the External Alerts tab of the SIEM Detections page for additional information.',
      enabled: false,
      false_positives: [],
      from: 'now-660s',
      id: '80c59768-8e1f-400e-908e-7b25c4ce29c3',
      immutable: true,
      index: ['endgame-*'],
      interval: '10m',
      rule_id: '571afc56-5ed9-465d-a2a9-045f099f6e7e',
      language: 'kuery',
      output_index: '.siem-signals-default',
      max_signals: 100,
      risk_score: 73,
      risk_score_mapping: [],
      name: 'Credential Dumping - Detected - Elastic Endpoint',
      query:
        'event.kind:alert and event.module:endgame and event.action:cred_theft_event and endgame.metadata.type:detection',
      filters: [],
      references: [],
      related_integrations: [],
      required_fields: [],
      setup: '',
      severity: 'high',
      severity_mapping: [],
      updated_by: 'elastic',
      tags: ['Elastic', 'Endpoint'],
      to: 'now',
      type: 'query',
      threat: [],
      throttle: null,
      version: 1,
    },
    {
      actions: [],
      author: [],
      created_at: '2020-02-14T19:49:28.189Z',
      updated_at: '2020-02-14T19:49:28.326Z',
      created_by: 'elastic',
      description:
        'Elastic Endpoint detected an Adversary Behavior. Click the Elastic Endpoint icon in the event.module column or the link in the rule.reference column in the External Alerts tab of the SIEM Detections page for additional information.',
      enabled: false,
      false_positives: [],
      from: 'now-660s',
      id: '2e846086-bd64-4dbc-9c56-42b46b5b2c8c',
      immutable: true,
      index: ['endgame-*'],
      interval: '10m',
      rule_id: '77a3c3df-8ec4-4da4-b758-878f551dee69',
      language: 'kuery',
      output_index: '.siem-signals-default',
      max_signals: 100,
      risk_score: 47,
      risk_score_mapping: [],
      name: 'Adversary Behavior - Detected - Elastic Endpoint',
      query: 'event.kind:alert and event.module:endgame and event.action:rules_engine_event',
      filters: [],
      references: [],
      related_integrations: [],
      required_fields: [],
      setup: '',
      severity: 'medium',
      severity_mapping: [],
      updated_by: 'elastic',
      tags: ['Elastic', 'Endpoint'],
      to: 'now',
      type: 'query',
      threat: [],
      throttle: null,
      version: 1,
    },
  ],
};

export const ruleExecutionEventsMock: GetAggregateRuleExecutionEventsResponse = {
  events: [
    {
      execution_uuid: 'dc45a63c-4872-4964-a2d0-bddd8b2e634d',
      timestamp: '2022-04-28T21:19:08.047Z',
      duration_ms: 3,
      status: 'failure',
      message: 'siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: execution failed',
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 0,
      schedule_delay_ms: 2169,
      timed_out: false,
      indexing_duration_ms: 0,
      search_duration_ms: 0,
      gap_duration_s: 0,
      security_status: 'failed',
      security_message: 'Rule failed to execute because rule ran after it was disabled.',
    },
    {
      execution_uuid: '0fde9271-05d0-4bfb-8ff8-815756d28350',
      timestamp: '2022-04-28T21:19:04.973Z',
      duration_ms: 1446,
      status: 'success',
      message:
        "rule executed: siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: 'Click here for hot fresh alerts!'",
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 0,
      schedule_delay_ms: 2089,
      timed_out: false,
      indexing_duration_ms: 0,
      search_duration_ms: 2,
      gap_duration_s: 0,
      security_status: 'succeeded',
      security_message: 'succeeded',
    },
    {
      execution_uuid: '5daaa259-ded8-4a52-853e-1e7652d325d5',
      timestamp: '2022-04-28T21:19:01.976Z',
      duration_ms: 1395,
      status: 'success',
      message:
        "rule executed: siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: 'Click here for hot fresh alerts!'",
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 1,
      schedule_delay_ms: 2637,
      timed_out: false,
      indexing_duration_ms: 0,
      search_duration_ms: 3,
      gap_duration_s: 0,
      security_status: 'succeeded',
      security_message: 'succeeded',
    },
    {
      execution_uuid: 'c7223e1c-4264-4a27-8697-0d720243fafc',
      timestamp: '2022-04-28T21:18:58.431Z',
      duration_ms: 1815,
      status: 'success',
      message:
        "rule executed: siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: 'Click here for hot fresh alerts!'",
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 1,
      schedule_delay_ms: -255429,
      timed_out: false,
      indexing_duration_ms: 0,
      search_duration_ms: 3,
      gap_duration_s: 0,
      security_status: 'succeeded',
      security_message: 'succeeded',
    },
    {
      execution_uuid: '1f6ba0c1-cc36-4f45-b919-7790b8a8d670',
      timestamp: '2022-04-28T21:18:13.954Z',
      duration_ms: 2055,
      status: 'success',
      message:
        "rule executed: siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: 'Click here for hot fresh alerts!'",
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 0,
      schedule_delay_ms: 2027,
      timed_out: false,
      indexing_duration_ms: 0,
      search_duration_ms: 0,
      gap_duration_s: 0,
      security_status: 'partial failure',
      security_message:
        'Check privileges failed to execute ResponseError: index_not_found_exception: [index_not_found_exception] Reason: no such index [yup] name: "Click here for hot fresh alerts!" id: "a6e61cf0-c737-11ec-9e32-e14913ffdd2d" rule id: "34946b12-88d1-49ef-82b7-9cad45972030" execution id: "1f6ba0c1-cc36-4f45-b919-7790b8a8d670" space ID: "default"',
    },
    {
      execution_uuid: 'b0f65d64-b229-432b-9d39-f4385a7f9368',
      timestamp: '2022-04-28T21:15:43.086Z',
      duration_ms: 1205,
      status: 'success',
      message:
        "rule executed: siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: 'Click here for hot fresh alerts!'",
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 672,
      schedule_delay_ms: 3086,
      timed_out: false,
      indexing_duration_ms: 140,
      search_duration_ms: 684,
      gap_duration_s: 0,
      security_status: 'succeeded',
      security_message: 'succeeded',
    },
    {
      execution_uuid: '7bfd25b9-c0d8-44b1-982c-485169466a8e',
      timestamp: '2022-04-28T21:10:40.135Z',
      duration_ms: 6321,
      status: 'success',
      message:
        "rule executed: siem.queryRule:a6e61cf0-c737-11ec-9e32-e14913ffdd2d: 'Click here for hot fresh alerts!'",
      num_active_alerts: 0,
      num_new_alerts: 0,
      num_recovered_alerts: 0,
      num_triggered_actions: 0,
      num_succeeded_actions: 0,
      num_errored_actions: 0,
      total_search_duration_ms: 0,
      es_search_duration_ms: 930,
      schedule_delay_ms: 1222,
      timed_out: false,
      indexing_duration_ms: 2103,
      search_duration_ms: 946,
      gap_duration_s: 0,
      security_status: 'succeeded',
      security_message: 'succeeded',
    },
  ],
  total: 7,
};
