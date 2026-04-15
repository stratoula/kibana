import { KibanaClient } from '../../lib/shared/base_kibana_client';
import type { Logger } from '../../lib/utils/create_logger';
export declare function getKibanaClient({ target, username, password, apiKey, logger, }: {
    target: string;
    username?: string;
    password?: string;
    apiKey?: string;
    logger: Logger;
}): KibanaClient;
