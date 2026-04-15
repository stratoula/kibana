import type { Conversation } from '../../../assistant_context/types';
export type ConversationTableItem = Conversation & {
    connectorTypeTitle?: string | null;
    systemPromptTitle?: string | null;
};
export type HandlePageChecked = (params: {
    conversationOptions: ConversationTableItem[];
    totalItemCount: number;
}) => void;
export type HandlePageUnchecked = (params: {
    conversationOptionsIds: string[];
    totalItemCount: number;
}) => void;
export type HandleRowChecked = (params: {
    selectedItem: ConversationTableItem;
    totalItemCount: number;
}) => void;
export type HandleRowUnChecked = (params: {
    selectedItem: ConversationTableItem;
    totalItemCount: number;
}) => void;
