interface PendingMessageState {
    pendingMessage?: string;
}
export declare const usePendingMessageState: ({ conversationId }: {
    conversationId?: string;
}) => {
    pendingMessageState: PendingMessageState;
    setPendingMessage: (pendingMessage: string) => void;
    removePendingMessage: () => void;
};
export {};
