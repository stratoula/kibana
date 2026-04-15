import type { HttpSetup } from '@kbn/core-http-browser';
import type { SmlSearchHttpResponse } from '../../../common/http_api/sml';
/** Browser client for Agent Builder internal SML search (`/internal/agent_builder/sml/_search`). */
export declare class SmlService {
    private readonly http;
    constructor({ http }: {
        http: HttpSetup;
    });
    search(params: {
        query: string;
        size: number;
        skipContent?: boolean;
    }): Promise<SmlSearchHttpResponse>;
}
