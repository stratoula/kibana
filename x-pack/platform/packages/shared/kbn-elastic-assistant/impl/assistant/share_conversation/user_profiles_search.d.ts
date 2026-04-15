import React from 'react';
import type { UserProfile } from '@kbn/core-user-profile-common';
interface Props {
    forbiddenUsers: string[];
    onUsersSelect: (users: UserProfile[]) => void;
    selectedUsers: UserProfile[];
}
export declare const UserProfilesSearch: React.NamedExoticComponent<Props>;
export {};
