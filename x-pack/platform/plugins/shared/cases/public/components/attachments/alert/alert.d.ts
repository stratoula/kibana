import type { AlertAttachment } from '../../../../common/types/domain';
import type { UserActionBuilder, UserActionBuilderArgs } from '../../user_actions/types';
import type { SnakeToCamelCase } from '../../../../common/types';
type BuilderArgs = Pick<UserActionBuilderArgs, 'userAction' | 'alertData' | 'getRuleDetailsHref' | 'onRuleDetailsClick' | 'loadingAlertData' | 'onShowAlertDetails' | 'userProfiles' | 'handleDeleteComment' | 'loadingCommentIds'> & {
    attachment: SnakeToCamelCase<AlertAttachment>;
};
export declare const createAlertAttachmentUserActionBuilder: (params: BuilderArgs) => ReturnType<UserActionBuilder>;
export declare const getRuleId: (attachment: BuilderArgs["attachment"], alertData?: unknown) => string | null;
export declare const getRuleName: (attachment: BuilderArgs["attachment"], alertData?: unknown) => string | null;
export declare function getRuleInfo(attachment: BuilderArgs['attachment'], alertData: BuilderArgs['alertData']): {
    ruleId: string | null;
    ruleName: string | null;
};
export {};
