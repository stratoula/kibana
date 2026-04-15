import type { ContentManagementPublicStart } from '@kbn/content-management-plugin/public';
export declare const checkForDuplicateTitle: ({ title, isTitleDuplicateConfirmed, onTitleDuplicate, contentManagement, }: {
    title: string | undefined;
    isTitleDuplicateConfirmed: boolean | undefined;
    onTitleDuplicate: (() => void) | undefined;
    contentManagement: ContentManagementPublicStart["client"];
}) => Promise<undefined>;
