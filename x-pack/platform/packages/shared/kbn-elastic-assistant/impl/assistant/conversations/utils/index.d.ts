import type { Conversation } from '../../../..';
export declare const conversationContainsContentReferences: (conversation?: Conversation) => boolean;
/** Checks if the conversations has replacements, not if the replacements are actually used */
export declare const conversationContainsAnonymizedValues: (conversation?: Conversation) => boolean;
