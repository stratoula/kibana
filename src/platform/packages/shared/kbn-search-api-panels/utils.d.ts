import type { LanguageDefinition, LanguageDefinitionSnippetArguments } from './types';
export declare const getLanguageDefinitionCodeSnippet: (language: Partial<LanguageDefinition>, key: keyof LanguageDefinition, args: LanguageDefinitionSnippetArguments) => string;
export declare const getConsoleRequest: (code: keyof LanguageDefinition, args?: LanguageDefinitionSnippetArguments) => string | undefined;
