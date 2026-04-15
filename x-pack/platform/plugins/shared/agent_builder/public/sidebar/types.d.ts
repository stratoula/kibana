import type { EmbeddableConversationProps } from '../embeddable/types';
export interface OpenConversationSidebarOptions extends EmbeddableConversationProps {
    onClose?: () => void;
}
