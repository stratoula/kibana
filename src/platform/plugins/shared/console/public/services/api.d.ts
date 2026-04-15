import type { EditorRequest } from '../application/containers/editor/types';
export declare function convertRequestToLanguage({ requests, language, esHost, kibanaHost, }: {
    language: string;
    esHost: string;
    kibanaHost: string;
    requests: EditorRequest[];
}): Promise<import("../shared_imports").SendRequestResponse<any, import("../shared_imports").Error>>;
