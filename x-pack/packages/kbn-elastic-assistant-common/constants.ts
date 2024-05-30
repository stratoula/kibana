/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const ELASTIC_AI_ASSISTANT_INTERNAL_API_VERSION = '1';

export const ELASTIC_AI_ASSISTANT_URL = '/api/elastic_assistant';
export const ELASTIC_AI_ASSISTANT_INTERNAL_URL = '/internal/elastic_assistant';

export const ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL = `${ELASTIC_AI_ASSISTANT_INTERNAL_URL}/current_user/conversations`;
export const ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL_BY_ID = `${ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL}/{id}`;
export const ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL_BY_ID_MESSAGES = `${ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL_BY_ID}/messages`;

export const ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL_BULK_ACTION = `${ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL}/_bulk_action`;
export const ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL_FIND = `${ELASTIC_AI_ASSISTANT_CONVERSATIONS_URL}/_find`;

export const ELASTIC_AI_ASSISTANT_PROMPTS_URL = `${ELASTIC_AI_ASSISTANT_INTERNAL_URL}/prompts`;
export const ELASTIC_AI_ASSISTANT_PROMPTS_URL_BULK_ACTION = `${ELASTIC_AI_ASSISTANT_PROMPTS_URL}/_bulk_action`;
export const ELASTIC_AI_ASSISTANT_PROMPTS_URL_FIND = `${ELASTIC_AI_ASSISTANT_PROMPTS_URL}/_find`;

export const ELASTIC_AI_ASSISTANT_ANONYMIZATION_FIELDS_URL = `${ELASTIC_AI_ASSISTANT_INTERNAL_URL}/anonymization_fields`;
export const ELASTIC_AI_ASSISTANT_ANONYMIZATION_FIELDS_URL_BULK_ACTION = `${ELASTIC_AI_ASSISTANT_ANONYMIZATION_FIELDS_URL}/_bulk_action`;
export const ELASTIC_AI_ASSISTANT_ANONYMIZATION_FIELDS_URL_FIND = `${ELASTIC_AI_ASSISTANT_ANONYMIZATION_FIELDS_URL}/_find`;

// TODO: Update existing 'status' endpoint to take resource as query param as to not conflict with 'entries'
export const ELASTIC_AI_ASSISTANT_KNOWLEDGE_BASE_URL = `${ELASTIC_AI_ASSISTANT_INTERNAL_URL}/knowledge_base/{resource?}`;
export const ELASTIC_AI_ASSISTANT_KNOWLEDGE_BASE_ENTRIES_URL = `${ELASTIC_AI_ASSISTANT_URL}/knowledge_base/entries`;
export const ELASTIC_AI_ASSISTANT_KNOWLEDGE_BASE_ENTRIES_URL_BULK_ACTION = `${ELASTIC_AI_ASSISTANT_URL}/knowledge_base/_bulk_action`;
