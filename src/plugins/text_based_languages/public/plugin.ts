/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Plugin } from '@kbn/core/public';
import { Editor } from './components';
import type { TextBasedLanguagesPluginStart } from './types';

export class TextBasedLanguagesPlugin implements Plugin<{}, TextBasedLanguagesPluginStart> {
  public setup() {
    return {};
  }

  public start(): TextBasedLanguagesPluginStart {
    return {
      Editor,
    };
  }

  public stop() {}
}
