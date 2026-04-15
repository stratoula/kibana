import type { InferenceConnector } from '@kbn/inference-common';
/**
 * Turns the internal inference-connectors API payload into the ordered list the UI consumes.
 *
 * When `soEntryFound` is true, `connectors` are admin-configured SO overrides and take
 * precedence — they are returned as-is.
 *
 * When `soEntryFound` is false and `connectors` is non-empty, those are recommended
 * endpoints. They are listed first; remaining entries from `allConnectors` follow
 * without duplicates.
 *
 * When `soEntryFound` is false and `connectors` is empty, the full catalog is returned
 * with the platform default chat-completion endpoint moved to the front.
 */
export declare const mergeConnectorsFromApiResponse: (connectors: InferenceConnector[], allConnectors: InferenceConnector[], soEntryFound: boolean) => InferenceConnector[];
