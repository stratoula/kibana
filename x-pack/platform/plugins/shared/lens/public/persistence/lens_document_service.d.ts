import type { HttpStart } from '@kbn/core/public';
import type { LensDocument, ILensDocumentService, CheckDuplicateTitleOptions } from '@kbn/lens-common';
import type { LensSearchRequestQuery } from '../../server';
interface LensSaveResult {
    savedObjectId: string;
}
export declare class LensDocumentService implements ILensDocumentService {
    private client;
    constructor(http: HttpStart);
    save: (vis: LensDocument) => Promise<LensSaveResult>;
    load(savedObjectId: string): Promise<import("./lens_client").LensItemResponse<Readonly<{
        originId?: string | undefined;
        managed?: boolean | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        aliasTargetId?: string | undefined;
        aliasPurpose?: "savedObjectConversion" | "savedObjectImport" | undefined;
    } & {
        type: string;
        outcome: "exactMatch" | "aliasMatch" | "conflict";
    }>>>;
    search(options: LensSearchRequestQuery): Promise<Readonly<{
        version?: 2 | undefined;
        description?: string | undefined;
        state?: any;
    } & {
        id: string;
        references: Readonly<{
            id: string;
            type: string;
            name: string;
        }>[];
        title: string;
        visualizationType: string;
    }>[]>;
    /**
     * check for an existing saved object with the same title in ES
     * returns Promise<true> when it's no duplicate, or the modal displaying the warning
     * that's there's a duplicate is confirmed, else it returns a rejected Promise<ErrorMsg>
     */
    checkForDuplicateTitle({ id, title, isTitleDuplicateConfirmed, lastSavedTitle, copyOnSave, }: CheckDuplicateTitleOptions, onTitleDuplicate: () => void): Promise<boolean>;
}
export {};
