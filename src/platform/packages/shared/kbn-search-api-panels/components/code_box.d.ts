import React from 'react';
import type { ApplicationStart } from '@kbn/core-application-browser';
import type { ConsolePluginStart } from '@kbn/console-plugin/public';
import type { SharePluginStart } from '@kbn/share-plugin/public';
import type { LanguageDefinition } from '../types';
interface CodeBoxProps {
    languages?: LanguageDefinition[];
    codeSnippet: string;
    languageType?: string;
    selectedLanguage?: LanguageDefinition;
    setSelectedLanguage?: (language: LanguageDefinition) => void;
    assetBasePath?: string;
    application?: ApplicationStart;
    consolePlugin?: ConsolePluginStart;
    sharePlugin?: SharePluginStart;
    consoleRequest?: string;
    showTopBar?: boolean;
    consoleTitle?: string;
}
export declare const CodeBox: React.FC<CodeBoxProps>;
export {};
