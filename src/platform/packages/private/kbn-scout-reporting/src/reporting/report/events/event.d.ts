import type { ScoutTestRunConfigCategory } from '@kbn/scout-info';
import type { BuildkiteMetadata, HostMetadata } from '../../../datasources';
/**
 * Scout reporter event type
 */
export declare enum ScoutReportEventAction {
    RUN_BEGIN = "run-begin",
    RUN_END = "run-end",
    TEST_BEGIN = "test-begin",
    TEST_END = "test-end",
    TEST_STEP_BEGIN = "test-step-begin",
    TEST_STEP_END = "test-step-end",
    ERROR = "error"
}
/**
 * Scout report event info
 */
export interface ScoutReportEventInfo {
    action: ScoutReportEventAction;
    outcome?: 'failure' | 'success' | 'unknown';
    error?: {
        message?: string;
        id?: string;
        code?: string;
        stack_trace?: string;
        type?: string;
    };
}
/**
 * Scout reporter info
 */
export interface ScoutReporterInfo {
    name: string;
    type: 'jest' | 'ftr' | 'playwright' | 'cypress';
}
/**
 * Scout file info
 */
export interface ScoutFileInfo {
    path: string;
    owner: string | string[];
    area: string | string[];
}
/**
 * Scout test run info
 */
export interface ScoutTestRunInfo {
    id: string;
    target: {
        type: string;
        mode: string;
    };
    fully_parallel?: boolean;
    config?: {
        file?: ScoutFileInfo;
        category?: ScoutTestRunConfigCategory;
    };
    status?: string;
    duration?: number;
    tests?: {
        passes?: number;
        pending?: number;
        failures?: number;
        total?: number;
    };
}
/**
 * Scout suite info
 */
export interface ScoutSuiteInfo {
    title: string;
    type: string;
}
/**
 * Scout test info
 */
export interface ScoutTestInfo {
    id: string;
    title: string;
    tags: string[];
    annotations?: Array<{
        type: string;
        description?: string;
    }>;
    expected_status?: string;
    duration?: number;
    status?: string;
    step?: {
        title: string;
        category?: string;
        duration?: number;
    };
    file?: ScoutFileInfo;
}
/**
 * Document that records an event to be logged by the Scout reporter
 */
export interface ScoutReportEvent {
    '@timestamp'?: Date;
    buildkite?: BuildkiteMetadata;
    host?: HostMetadata;
    event: ScoutReportEventInfo;
    labels?: {
        [id: string]: string;
    };
    reporter: ScoutReporterInfo;
    test_run: ScoutTestRunInfo;
    suite?: ScoutSuiteInfo;
    test?: ScoutTestInfo;
    process?: {
        uptime?: number;
    };
}
