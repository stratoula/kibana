/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  SavedObjectAttributes,
  SavedObjectsClientContract,
  SavedObjectReference,
  ResolvedSimpleSavedObject,
} from 'kibana/public';
import { Query } from '../../../../../src/plugins/data/public';
import { DOC_TYPE, PersistableFilter, VISUALIZE_EDITOR_DOC_TYPE } from '../../common';
import { LensSavedObjectAttributes } from '../async_services';

export interface Document {
  savedObjectId?: string;
  type?: string;
  visualizationType: string | null;
  title: string;
  description?: string;
  state: {
    datasourceStates: Record<string, unknown>;
    visualization: unknown;
    query: Query;
    globalPalette?: {
      activePaletteId: string;
      state?: unknown;
    };
    filters: PersistableFilter[];
  };
  references: SavedObjectReference[];
}

export interface DocumentSaver {
  save: (vis: Document) => Promise<{ savedObjectId: string }>;
}

export interface DocumentLoader {
  load: (savedObjectId: string) => Promise<ResolvedSimpleSavedObject>;
}

export type SavedObjectStore = DocumentLoader & DocumentSaver;

export class SavedObjectIndexStore implements SavedObjectStore {
  private client: SavedObjectsClientContract;

  constructor(client: SavedObjectsClientContract) {
    this.client = client;
  }

  save = async (vis: Document) => {
    const { savedObjectId, type, references, ...rest } = vis;
    // TODO: SavedObjectAttributes should support this kind of object,
    // remove this workaround when SavedObjectAttributes is updated.
    const attributes = rest as unknown as SavedObjectAttributes;
    if (savedObjectId) {
      // check if an existing visualization type saved object exists, if yes delete it
      const existingVisualizationDoc = await this.loadExistingVisualizationDoc(savedObjectId);
      if (existingVisualizationDoc) {
        const existingVisualizationDocAttrs = existingVisualizationDoc.saved_object
          .attributes as SavedObjectAttributes;
        attributes.title = existingVisualizationDocAttrs.title;
        attributes.description = existingVisualizationDocAttrs.description;
        await this.client.delete(VISUALIZE_EDITOR_DOC_TYPE, savedObjectId);
      }
    }

    const result = await this.client.create(
      DOC_TYPE,
      attributes,
      savedObjectId
        ? {
            references,
            overwrite: true,
            id: savedObjectId,
          }
        : {
            references,
          }
    );

    return { ...vis, savedObjectId: result.id };
  };

  loadExistingVisualizationDoc = async (savedObjectId: string) => {
    const resolveResult = await this.client.resolve(VISUALIZE_EDITOR_DOC_TYPE, savedObjectId);

    if (resolveResult?.saved_object?.error) {
      return;
    }

    return resolveResult;
  };

  async load(savedObjectId: string): Promise<ResolvedSimpleSavedObject<LensSavedObjectAttributes>> {
    const resolveResult = await this.client.resolve<LensSavedObjectAttributes>(
      DOC_TYPE,
      savedObjectId
    );

    if (resolveResult.saved_object.error) {
      throw resolveResult.saved_object.error;
    }

    return resolveResult;
  }
}
