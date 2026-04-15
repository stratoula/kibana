import type { FindPromptsResponse, PromptResponse } from '@kbn/elastic-assistant-common';
import type { HttpSetup } from '@kbn/core-http-browser';
import type { EuiSetColorMethod } from '@elastic/eui/src/services/color_picker/color_picker';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { PromptContextTemplate } from '../../../..';
interface Params {
    allPrompts: FindPromptsResponse;
    currentAppId: string;
    http: HttpSetup;
    promptsLoaded: boolean;
    toasts?: IToasts;
}
interface QuickPromptUpdater {
    onPromptContentChange: (newValue: string) => void;
    onQuickPromptColorChange: EuiSetColorMethod;
    onQuickPromptContextChange: (promptContexts: PromptContextTemplate[]) => void;
    onQuickPromptDelete: (id: string) => void;
    onQuickPromptSelect: (quickPrompt?: PromptResponse | string) => void;
    quickPromptSettings: PromptResponse[];
    resetQuickPromptSettings: () => void;
    saveQuickPromptSettings: () => Promise<boolean>;
    selectedQuickPrompt?: PromptResponse;
}
export declare const useQuickPromptUpdater: ({ allPrompts, currentAppId, http, promptsLoaded, toasts, }: Params) => QuickPromptUpdater;
export {};
