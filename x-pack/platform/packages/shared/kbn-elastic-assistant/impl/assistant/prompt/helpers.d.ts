import type { Replacements, User } from '@kbn/elastic-assistant-common';
import type { ClientMessage } from '../../assistant_context/types';
import type { SelectedPromptContext } from '../prompt_context/types';
interface ClientMessageWithReplacements extends ClientMessage {
    replacements: Replacements;
}
export declare function getCombinedMessage({ currentReplacements, getAnonymizedValue, promptText, selectedPromptContexts, user, }: {
    currentReplacements: Replacements | undefined;
    getAnonymizedValue?: ({ currentReplacements, rawValue, }: {
        currentReplacements: Replacements | undefined;
        rawValue: string;
    }) => string;
    promptText: string;
    selectedPromptContexts: Record<string, SelectedPromptContext>;
    user?: User;
}): ClientMessageWithReplacements;
export {};
