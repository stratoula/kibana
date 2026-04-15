import type { SelectedConversation } from '../../assistant_context';
export interface LastConversation {
    id: string;
    title?: string;
}
export declare const useAssistantLastConversation: ({ nameSpace, spaceId, }: {
    nameSpace?: string;
    spaceId: string;
}) => {
    getLastConversation: (selectedConversation?: SelectedConversation) => LastConversation;
    setLastConversation: (lastConversation: LastConversation) => void;
};
