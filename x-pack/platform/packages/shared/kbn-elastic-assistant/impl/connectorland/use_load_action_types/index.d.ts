import type { UseQueryResult } from '@kbn/react-query';
import type { IHttpFetchError, HttpSetup } from '@kbn/core-http-browser';
import type { ActionType } from '@kbn/actions-plugin/common';
import type { IToasts } from '@kbn/core-notifications-browser';
export declare const QUERY_KEY: string[];
export interface Props {
    http: HttpSetup;
    toasts?: IToasts;
}
export declare const useLoadActionTypes: ({ http, toasts, }: Props) => UseQueryResult<ActionType[], IHttpFetchError>;
