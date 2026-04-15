import type { ActionTypeRegistryContract } from '@kbn/triggers-actions-ui-plugin/public';
import type { EuiBasicTableColumn } from '@elastic/eui';
import type { PromptResponse, User } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../../assistant_context/types';
import type { AIConnector } from '../../../connectorland/connector_selector';
import type { ConversationTableItem, HandlePageChecked, HandlePageUnchecked, HandleRowChecked, HandleRowUnChecked } from './types';
export interface GetConversationsListParams {
    allSystemPrompts: PromptResponse[];
    actionTypeRegistry: ActionTypeRegistryContract;
    connectors: AIConnector[] | undefined;
    conversations: Record<string, Conversation>;
    defaultConnector?: AIConnector;
}
interface GetColumnsParams {
    conversationOptions: ConversationTableItem[];
    deletedConversationsIds: string[];
    excludedIds: string[];
    handlePageChecked: HandlePageChecked;
    handlePageUnchecked: HandlePageUnchecked;
    handleRowChecked: HandleRowChecked;
    handleRowUnChecked: HandleRowUnChecked;
    isDeleteEnabled: (conversation: ConversationTableItem) => boolean;
    isEditEnabled: (conversation: ConversationTableItem) => boolean;
    isExcludedMode: boolean;
    onDeleteActionClicked: (conversation: ConversationTableItem) => void;
    onEditActionClicked: (conversation: ConversationTableItem) => void;
    totalItemCount: number;
}
export declare const useConversationsTable: (currentUser?: User) => {
    getColumns: ({ conversationOptions, deletedConversationsIds, excludedIds, handlePageChecked, handlePageUnchecked, handleRowChecked, handleRowUnChecked, isDeleteEnabled, isEditEnabled, isExcludedMode, onDeleteActionClicked, onEditActionClicked, totalItemCount, }: GetColumnsParams) => Array<EuiBasicTableColumn<ConversationTableItem>>;
    getConversationsList: ({ allSystemPrompts, actionTypeRegistry, connectors, conversations, defaultConnector, }: GetConversationsListParams) => ConversationTableItem[];
};
export {};
