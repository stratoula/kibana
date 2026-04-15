import type { OnAppLeave } from '../context/app_leave_context';
interface UseNavigationAbortParams {
    onAppLeave: OnAppLeave;
    isResponseLoading: boolean;
}
/**
 * Hook that handles navigation abort confirmation when user tries to navigate away
 * while a chat request is in progress.
 *
 * When user confirms navigation, the request is aborted and the round is marked as aborted.
 * When user cancels, they stay on the page and the request continues.
 */
export declare const useNavigationAbort: ({ onAppLeave, isResponseLoading }: UseNavigationAbortParams) => void;
export {};
