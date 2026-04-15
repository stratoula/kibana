import type { PersistableStateAttachment } from '../../../../common/types/domain';
import type { UserActionBuilder, UserActionBuilderArgs } from '../types';
import type { SnakeToCamelCase } from '../../../../common/types';
type BuilderArgs = Pick<UserActionBuilderArgs, 'userAction' | 'persistableStateAttachmentTypeRegistry' | 'caseData' | 'handleDeleteComment' | 'userProfiles'> & {
    attachment: SnakeToCamelCase<PersistableStateAttachment>;
    isLoading: boolean;
};
export declare const createPersistableStateAttachmentUserActionBuilder: ({ userAction, userProfiles, attachment, persistableStateAttachmentTypeRegistry, caseData, isLoading, handleDeleteComment, }: BuilderArgs) => ReturnType<UserActionBuilder>;
export {};
