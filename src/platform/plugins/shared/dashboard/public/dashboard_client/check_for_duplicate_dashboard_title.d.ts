export interface DashboardDuplicateTitleCheckProps {
    title: string;
    copyOnSave: boolean;
    lastSavedTitle: string;
    /**
     * invokes the onTitleDuplicate function if provided with a speculative title that should be collision free
     */
    onTitleDuplicate?: (speculativeSuggestion: string) => void;
    isTitleDuplicateConfirmed: boolean;
}
/**
 * check for an existing dashboard with the same title in ES
 * returns Promise<true> when there is no duplicate, or runs the provided onTitleDuplicate
 * function when the title already exists
 */
export declare function checkForDuplicateDashboardTitle({ title, copyOnSave, lastSavedTitle, onTitleDuplicate, isTitleDuplicateConfirmed, }: DashboardDuplicateTitleCheckProps): Promise<boolean>;
