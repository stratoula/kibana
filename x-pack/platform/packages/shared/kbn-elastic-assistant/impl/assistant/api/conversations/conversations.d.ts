import type { HttpSetup, IToasts } from '@kbn/core/public';
import type { ApiConfig, Replacements, User } from '@kbn/elastic-assistant-common';
import type { Conversation, ClientMessage } from '../../../assistant_context/types';
export interface GetConversationByIdParams {
    http: HttpSetup;
    id: string;
    toasts?: IToasts;
    signal?: AbortSignal | undefined;
}
/**
 * API call for getting conversation by id.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {string} options.id - Conversation id.
 * @param {IToasts} [options.toasts] - IToasts
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<Conversation>}
 */
export declare const getConversationById: ({ http, id, signal, toasts, }: GetConversationByIdParams) => Promise<Conversation | undefined>;
/**
 * API call for determining whether any user conversations exist
 *
 * @param {HttpSetup} options.http - HttpSetup
 * @param {IToasts} [options.toasts] - IToasts
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<boolean>}
 */
export declare const getUserConversationsExist: ({ http, signal, toasts, }: {
    http: HttpSetup;
    toasts?: IToasts;
    signal?: AbortSignal | undefined;
}) => Promise<boolean>;
export interface PostConversationParams {
    http: HttpSetup;
    conversation: Partial<Conversation>;
    toasts?: IToasts;
    signal?: AbortSignal | undefined;
}
/**
 * API call for setting up the Conversation.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {Conversation} [options.conversation] - Conversation to be added
 * @param {AbortSignal} [options.signal] - AbortSignal
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {Promise<PostConversationResponse>}
 */
export declare const createConversation: ({ http, conversation, signal, toasts, }: PostConversationParams) => Promise<Conversation>;
export interface DeleteConversationParams {
    http: HttpSetup;
    id: string;
    toasts?: IToasts;
    signal?: AbortSignal | undefined;
}
/**
 * API call for deleting the Conversation. Provide a id to delete that specific resource.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {string} [options.title] - Conversation title to be deleted
 * @param {AbortSignal} [options.signal] - AbortSignal
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {Promise<boolean>}
 */
export declare const deleteConversation: ({ http, id, signal, toasts, }: DeleteConversationParams) => Promise<boolean>;
export interface PutConversationMessageParams {
    http: HttpSetup;
    toasts?: IToasts;
    conversationId: string;
    title?: string;
    users?: User[];
    messages?: ClientMessage[];
    apiConfig?: ApiConfig;
    replacements?: Replacements;
    excludeFromLastConversationStorage?: boolean;
    signal?: AbortSignal | undefined;
}
/**
 * API call for updating conversation.
 *
 * @param {PutConversationMessageParams} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {string} [options.title] - Conversation title
 * @param {boolean} [options.excludeFromLastConversationStorage] - Conversation excludeFromLastConversationStorage
 * @param {ApiConfig} [options.apiConfig] - Conversation apiConfig
 * @param {Message[]} [options.messages] - Conversation messages
 * @param {IToasts} [options.toasts] - IToasts
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<Conversation>}
 */
export declare const updateConversation: ({ http, toasts, title, users, conversationId, messages, apiConfig, replacements, excludeFromLastConversationStorage, signal, }: PutConversationMessageParams) => Promise<Conversation>;
