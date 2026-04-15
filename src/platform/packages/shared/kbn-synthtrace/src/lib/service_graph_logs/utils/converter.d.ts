import type { LogDocument } from '@kbn/synthtrace-client';
import { log } from '@kbn/synthtrace-client';
/**
 * Converts simulator tick output (partial log documents) into synthtrace log entries.
 * Shared by sigevents_onboarding and sigevents_incident scenarios.
 */
export declare function toLogEntries(partials: Array<Partial<LogDocument>>, timestamp: number): Array<ReturnType<typeof log.create>>;
