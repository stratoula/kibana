import { Agent } from 'undici';
export declare function getFetchAgent(url: string): Agent | undefined;
export declare function getEsClientTlsSettings(url: string, insecure?: boolean): {
    rejectUnauthorized: boolean;
    ca?: undefined;
} | {
    ca: NonSharedBuffer;
    rejectUnauthorized: boolean;
} | undefined;
