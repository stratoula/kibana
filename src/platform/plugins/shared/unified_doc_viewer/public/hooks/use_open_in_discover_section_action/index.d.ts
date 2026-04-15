import type { Action } from '../../components/content_framework/section/section_actions';
interface UseOpenInDiscoverSectionActionParams {
    tabLabel: string;
    dataTestSubj: string;
    href?: string;
    esql?: string;
}
export declare function useOpenInDiscoverSectionAction(params: UseOpenInDiscoverSectionActionParams): Action | undefined;
export {};
