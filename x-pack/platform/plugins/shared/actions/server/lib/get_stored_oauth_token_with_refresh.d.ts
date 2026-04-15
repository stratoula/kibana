import type { Logger } from '@kbn/core/server';
import type { OAuthTokenResponse } from './request_oauth_token';
import type { ConnectorTokenClientContract } from '../types';
export interface GetStoredTokenWithRefreshOpts {
    connectorId: string;
    logger: Logger;
    connectorTokenClient: ConnectorTokenClientContract;
    /**
     * When true, skip the expiration check and force a token refresh.
     * Use this when you've received a 401 and know the token is invalid
     * even if it hasn't "expired" according to the stored timestamp.
     */
    forceRefresh?: boolean;
    isPerUser?: boolean;
    /** Required when `isPerUser` is true to look up the per-user stored token. */
    profileUid?: string;
    /** Used in log messages to identify the auth mode (e.g. 'per-user'). */
    authMode?: string;
    /**
     * Called when a refresh is needed. Receives the stored refresh token
     * and must return a new token response from the auth server.
     */
    refreshFn: (refreshToken: string) => Promise<OAuthTokenResponse>;
}
/**
 * Retrieves a stored OAuth access token, refreshing it automatically when expired.
 *
 * Handles the common lifecycle shared by all per-user OAuth flows:
 * - Fetching the stored token from the connector token client
 * - Validating expiry (access token and refresh token)
 * - Calling the provided `doRefresh` to obtain a new token from the auth server
 * - Persisting the refreshed token back to storage
 *
 * Concurrent refresh requests for the same connector are serialized via a
 * per-connector mutex to avoid redundant token requests.
 */
export declare const getStoredTokenWithRefresh: ({ connectorId, logger, connectorTokenClient, forceRefresh, isPerUser, profileUid, authMode, refreshFn, }: GetStoredTokenWithRefreshOpts) => Promise<string | null>;
