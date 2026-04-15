import type { EuiSuperSelectOption } from '@elastic/eui';
import type { PromptResponse } from '@kbn/elastic-assistant-common';
interface GetOptionFromPromptProps extends PromptResponse {
    content: string;
    id: string;
    name: string;
}
export declare const getOptionFromPrompt: ({ content, id, name, }: GetOptionFromPromptProps) => EuiSuperSelectOption<string>;
export declare const getOptions: (prompts: PromptResponse[] | undefined) => Array<EuiSuperSelectOption<string>>;
export {};
