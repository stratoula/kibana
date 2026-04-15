import type { Conversation, ConversationRound, ConversationRoundStep } from '@kbn/agent-builder-common';
import type { Attachment } from '@kbn/agent-builder-common/attachments';
export declare const newConversationId = "new";
export declare const createNewConversation: () => Conversation;
export declare const pendingRoundId = "__pending__";
export declare const createNewRound: ({ userMessage, attachments, roundId, steps, }: {
    userMessage: string;
    attachments?: Attachment[];
    roundId?: string;
    steps?: ConversationRoundStep[];
}) => ConversationRound;
