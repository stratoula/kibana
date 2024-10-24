/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { BrowserFields, ConfigKeys } from '../types';
import {
  Normalizer,
  commonNormalizers,
  getNormalizer,
  getJsonToJavascriptNormalizer,
} from '../common/normalizers';

import { defaultBrowserSimpleFields, defaultBrowserAdvancedFields } from '../contexts';
import { tlsJsonToObjectNormalizer, tlsStringToObjectNormalizer } from '../tls/normalizers';

export type BrowserNormalizerMap = Record<keyof BrowserFields, Normalizer>;

const defaultBrowserFields = {
  ...defaultBrowserSimpleFields,
  ...defaultBrowserAdvancedFields,
};

export const getBrowserNormalizer = (key: ConfigKeys) => {
  return getNormalizer(key, defaultBrowserFields);
};

export const getBrowserJsonToJavascriptNormalizer = (key: ConfigKeys) => {
  return getJsonToJavascriptNormalizer(key, defaultBrowserFields);
};

export const browserNormalizers: BrowserNormalizerMap = {
  [ConfigKeys.METADATA]: getBrowserJsonToJavascriptNormalizer(ConfigKeys.METADATA),
  [ConfigKeys.SOURCE_ZIP_URL]: getBrowserNormalizer(ConfigKeys.SOURCE_ZIP_URL),
  [ConfigKeys.SOURCE_ZIP_USERNAME]: getBrowserNormalizer(ConfigKeys.SOURCE_ZIP_USERNAME),
  [ConfigKeys.SOURCE_ZIP_PASSWORD]: getBrowserNormalizer(ConfigKeys.SOURCE_ZIP_PASSWORD),
  [ConfigKeys.SOURCE_ZIP_FOLDER]: getBrowserNormalizer(ConfigKeys.SOURCE_ZIP_FOLDER),
  [ConfigKeys.SOURCE_INLINE]: getBrowserJsonToJavascriptNormalizer(ConfigKeys.SOURCE_INLINE),
  [ConfigKeys.SOURCE_ZIP_PROXY_URL]: getBrowserNormalizer(ConfigKeys.SOURCE_ZIP_PROXY_URL),
  [ConfigKeys.PARAMS]: getBrowserNormalizer(ConfigKeys.PARAMS),
  [ConfigKeys.SCREENSHOTS]: getBrowserNormalizer(ConfigKeys.SCREENSHOTS),
  [ConfigKeys.SYNTHETICS_ARGS]: getBrowserJsonToJavascriptNormalizer(ConfigKeys.SYNTHETICS_ARGS),
  [ConfigKeys.ZIP_URL_TLS_CERTIFICATE_AUTHORITIES]: (fields) =>
    tlsJsonToObjectNormalizer(
      fields?.[ConfigKeys.ZIP_URL_TLS_CERTIFICATE_AUTHORITIES]?.value,
      ConfigKeys.TLS_CERTIFICATE_AUTHORITIES
    ),
  [ConfigKeys.ZIP_URL_TLS_CERTIFICATE]: (fields) =>
    tlsJsonToObjectNormalizer(
      fields?.[ConfigKeys.ZIP_URL_TLS_CERTIFICATE]?.value,
      ConfigKeys.TLS_CERTIFICATE
    ),
  [ConfigKeys.ZIP_URL_TLS_KEY]: (fields) =>
    tlsJsonToObjectNormalizer(fields?.[ConfigKeys.ZIP_URL_TLS_KEY]?.value, ConfigKeys.TLS_KEY),
  [ConfigKeys.ZIP_URL_TLS_KEY_PASSPHRASE]: (fields) =>
    tlsStringToObjectNormalizer(
      fields?.[ConfigKeys.ZIP_URL_TLS_KEY_PASSPHRASE]?.value,
      ConfigKeys.TLS_KEY_PASSPHRASE
    ),
  [ConfigKeys.ZIP_URL_TLS_VERIFICATION_MODE]: (fields) =>
    tlsStringToObjectNormalizer(
      fields?.[ConfigKeys.ZIP_URL_TLS_VERIFICATION_MODE]?.value,
      ConfigKeys.TLS_VERIFICATION_MODE
    ),
  [ConfigKeys.ZIP_URL_TLS_VERSION]: (fields) =>
    tlsJsonToObjectNormalizer(
      fields?.[ConfigKeys.ZIP_URL_TLS_VERSION]?.value,
      ConfigKeys.TLS_VERSION
    ),
  [ConfigKeys.JOURNEY_FILTERS_MATCH]: getBrowserJsonToJavascriptNormalizer(
    ConfigKeys.JOURNEY_FILTERS_MATCH
  ),
  [ConfigKeys.JOURNEY_FILTERS_TAGS]: getBrowserJsonToJavascriptNormalizer(
    ConfigKeys.JOURNEY_FILTERS_TAGS
  ),
  [ConfigKeys.IGNORE_HTTPS_ERRORS]: getBrowserNormalizer(ConfigKeys.IGNORE_HTTPS_ERRORS),
  ...commonNormalizers,
};
