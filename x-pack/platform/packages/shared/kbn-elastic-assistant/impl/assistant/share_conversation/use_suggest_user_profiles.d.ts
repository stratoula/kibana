import type { HttpStart, IHttpFetchError, ResponseErrorBody } from '@kbn/core-http-browser';
type Props = Omit<SuggestUserProfilesArgs, 'signal' | 'http'> & {
    onDebounce?: () => void;
    forbiddenUsers?: string[];
};
export declare const useSuggestUserProfiles: ({ forbiddenUsers, searchTerm, size, onDebounce, }: Props) => import("@kbn/react-query").UseQueryResult<{
    uid: string;
    enabled: boolean;
    data: {
        [x: string]: unknown;
    };
    user: {
        username: string;
        full_name?: string | undefined;
        email?: string | undefined;
    };
}[], IHttpFetchError<ResponseErrorBody>>;
export interface SuggestUserProfilesArgs {
    http: HttpStart;
    searchTerm: string;
    signal?: AbortSignal;
    size?: number;
}
export {};
