export declare const TASK_MANAGER_INDEX = ".kibana_task_manager";
export declare const CONCURRENCY_ALLOW_LIST_BY_TASK_TYPE: string[];
export declare const EVENT_LOG_PROVIDER = "taskManager";
export declare const EVENT_LOG_ACTIONS: {
    taskRun: string;
    taskCancel: string;
};
export declare enum EventLogOutcomes {
    success = "success",
    failure = "failure"
}
