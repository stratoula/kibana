interface UseResumeRoundMutationProps {
    connectorId?: string;
}
export declare const useResumeRoundMutation: ({ connectorId }?: UseResumeRoundMutationProps) => {
    resumeRound: import("@kbn/react-query").UseMutateFunction<void, unknown, {
        prompts: Record<string, {
            allow: boolean;
        }>;
    }, void>;
    isResuming: boolean;
    agentReasoning: string | null;
};
export {};
