import type { VersionedAttachment } from '@kbn/agent-builder-common/attachments';
import type { AttachmentsService } from '../../services/attachments/attachements_service';
interface UseAttachmentLifecycleParams {
    attachments: VersionedAttachment[] | undefined;
    conversationId: string | undefined;
    attachmentsService: AttachmentsService;
    invalidateConversation: () => void;
}
/**
 * Manages attachment lifecycle at the conversation level.
 * Tracks which attachments are present and calls onAttachmentMount/cleanup
 * when attachments are added to or removed from the conversation.
 */
export declare const useAttachmentLifecycle: ({ attachments, conversationId, attachmentsService, invalidateConversation, }: UseAttachmentLifecycleParams) => void;
export {};
