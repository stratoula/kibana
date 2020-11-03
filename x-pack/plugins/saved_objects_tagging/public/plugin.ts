/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { i18n } from '@kbn/i18n';
import { CoreSetup, CoreStart, PluginInitializerContext, Plugin } from 'src/core/public';
import { ManagementSetup } from '../../../../src/plugins/management/public';
import { SavedObjectTaggingOssPluginSetup } from '../../../../src/plugins/saved_objects_tagging_oss/public';
import { tagManagementSectionId } from '../common/constants';
import { getTagsCapabilities } from '../common/capabilities';
import { SavedObjectTaggingPluginStart } from './types';
import { TagsClient, TagsCache } from './tags';
import { getUiApi } from './ui_api';
import { SavedObjectsTaggingClientConfig, SavedObjectsTaggingClientConfigRawType } from './config';

interface SetupDeps {
  management: ManagementSetup;
  savedObjectsTaggingOss: SavedObjectTaggingOssPluginSetup;
}

export class SavedObjectTaggingPlugin
  implements Plugin<{}, SavedObjectTaggingPluginStart, SetupDeps, {}> {
  private tagClient?: TagsClient;
  private tagCache?: TagsCache;
  private readonly config: SavedObjectsTaggingClientConfig;

  constructor(context: PluginInitializerContext) {
    this.config = new SavedObjectsTaggingClientConfig(
      context.config.get<SavedObjectsTaggingClientConfigRawType>()
    );
  }

  public setup(
    core: CoreSetup<{}, SavedObjectTaggingPluginStart>,
    { management, savedObjectsTaggingOss }: SetupDeps
  ) {
    const kibanaSection = management.sections.section.kibana;
    kibanaSection.registerApp({
      id: tagManagementSectionId,
      title: i18n.translate('xpack.savedObjectsTagging.management.sectionLabel', {
        defaultMessage: 'Tags',
      }),
      order: 2,
      mount: async (mountParams) => {
        const { mountSection } = await import('./management');
        return mountSection({
          tagClient: this.tagClient!,
          core,
          mountParams,
        });
      },
    });

    savedObjectsTaggingOss.registerTaggingApi(
      core.getStartServices().then(([_core, _deps, startContract]) => startContract)
    );

    return {};
  }

  public start({ http, application, overlays }: CoreStart) {
    this.tagCache = new TagsCache({
      refreshHandler: () => this.tagClient!.getAll(),
      refreshInterval: this.config.cacheRefreshInterval,
    });
    this.tagClient = new TagsClient({ http, changeListener: this.tagCache });

    // do not fetch tags on anonymous page
    if (!http.anonymousPaths.isAnonymous(window.location.pathname)) {
      // we don't need to wait for this to resolve.
      this.tagCache.initialize().catch(() => {
        // cache is resilient to initial load failure. We just need to catch to avoid unhandled promise rejection
      });
    }

    return {
      client: this.tagClient,
      ui: getUiApi({
        cache: this.tagCache,
        client: this.tagClient,
        capabilities: getTagsCapabilities(application.capabilities),
        overlays,
      }),
    };
  }

  public stop() {
    if (this.tagCache) {
      this.tagCache.stop();
    }
  }
}
