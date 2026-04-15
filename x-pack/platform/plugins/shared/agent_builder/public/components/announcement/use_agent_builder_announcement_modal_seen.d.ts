import type { UserProfileServiceStart } from '@kbn/core-user-profile-browser';
/**
 * Returns whether the announcement was dismissed for this space in the current user's profile.
 * When user profiles are disabled, returns true so the modal is not shown (dismissal cannot persist).
 */
export declare function getAnnouncementModalSeenForSpace(userProfile: UserProfileServiceStart, spaceId: string): Promise<boolean>;
/**
 * Persists dismissal for the current space in user profile data.
 * No-ops when user profiles are disabled.
 */
export declare function setAnnouncementModalSeenForSpace(userProfile: UserProfileServiceStart, spaceId: string): Promise<void>;
export interface UseAgentBuilderAnnouncementModalSeenStateResult {
    isSeen: boolean;
    isReady: boolean;
    markSeen: () => Promise<void>;
}
export declare function useAgentBuilderAnnouncementModalSeenState(userProfile: UserProfileServiceStart, spaceId: string | undefined): UseAgentBuilderAnnouncementModalSeenStateResult;
