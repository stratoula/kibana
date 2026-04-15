export interface StepDeprecationInfo {
    replacementStepType?: string;
    message?: string;
}
export declare const DEPRECATED_STEP_METADATA: Record<string, StepDeprecationInfo>;
export declare function getStepDeprecationInfo(stepType: string): StepDeprecationInfo | undefined;
export declare function isDeprecatedStepType(stepType: string): boolean;
export declare function getDeprecatedStepMessage(stepType: string, deprecation: StepDeprecationInfo): string;
