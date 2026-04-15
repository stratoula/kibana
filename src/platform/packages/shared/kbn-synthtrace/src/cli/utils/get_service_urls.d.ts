import type { Logger } from '../../lib/utils/create_logger';
import type { RunOptions } from './parse_run_cli_flags';
export declare function getServiceUrls({ logger, target, kibana, apiKey, }: RunOptions & {
    logger: Logger;
}): Promise<{
    kibanaUrl: string;
    esUrl: string;
    kibanaHeaders: {
        Authorization: string;
    } | {
        Authorization: string;
    } | {
        Authorization?: undefined;
    } | undefined;
    esHeaders: {
        Authorization: string;
    } | undefined;
    username: string | undefined;
    password: string | undefined;
    apiKey: string | undefined;
}>;
