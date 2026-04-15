import type { Fields } from '@kbn/synthtrace-client';
import type { Logger } from '../../lib/utils/create_logger';
import type { Scenario } from '../scenario';
export declare function getScenario({ file, logger }: {
    file: string;
    logger: Logger;
}): Promise<Scenario<Fields>>;
