export interface UseAgentBuilderOptInParams {
    /**
     * When true, confirming the opt-in will first navigate to the
     * Observability home page before opening the Agent Builder flyout.
     * This is used when the CTA is rendered inside the full conversations app.
     */
    navigateFromConversationApp?: boolean;
}
export interface UseAgentBuilderOptInResult {
    /**
     * Whether the CTA should be shown to the current user.
     * This requires:
     * - Agent Builder capability (RBAC) enabled
     * - Chat experience not already set to Agent
     * - Advanced settings edit privilege
     * - Agent Builder selection service available
     */
    showAgentBuilderOptInCta: boolean;
    /**
     * Whether the confirmation modal is currently open.
     */
    isAgentBuilderConfirmationModalOpen: boolean;
    /**
     * Open the confirmation modal.
     */
    openAgentBuilderConfirmationModal: () => void;
    /**
     * Close the confirmation modal.
     */
    closeAgentBuilderConfirmationModal: () => void;
    /**
     * Confirm switching to the Agent Builder:
     * - Updates preferred chat experience to Agent
     * - Optionally navigates to Observability home (when enabled)
     * - Opens the Agent Builder flyout
     */
    confirmAgentBuilderOptIn: () => Promise<void>;
}
export declare const useAgentBuilderOptIn: ({ navigateFromConversationApp, }?: UseAgentBuilderOptInParams) => UseAgentBuilderOptInResult;
