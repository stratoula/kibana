import type { ApplicationStart, IUiSettingsClient } from '@kbn/core/public';
export declare enum Languages {
    JAVA = "java",
    JAVASCRIPT = "javascript",
    RUBY = "ruby",
    GO = "go",
    DOTNET = "dotnet",
    PHP = "php",
    PERL = "perl",
    PYTHON = "python",
    RUST = "rust",
    CURL = "curl"
}
export interface LanguageDefinitionSnippetArguments {
    url: string;
    apiKey: string;
    indexName?: string;
    cloudId?: string;
    ingestPipeline?: string;
    extraIngestDocumentValues?: Record<string, boolean>;
}
type CodeSnippet = string | ((args: LanguageDefinitionSnippetArguments) => string);
export interface LanguageDefinition {
    name: string;
    id: Languages;
    iconType: string;
    docLink?: string;
    configureClient?: CodeSnippet;
    ingestData?: CodeSnippet;
    ingestDataIndex?: CodeSnippet;
    installClient?: string;
    buildSearchQuery?: CodeSnippet;
    testConnection?: CodeSnippet;
    advancedConfig?: string;
    apiReference?: string;
    basicConfig?: string;
    github?: {
        link: string;
        label: string;
    };
    languageStyling?: string;
}
export interface SearchApiPanelsServicesContext {
    application: ApplicationStart;
    uiSettings: IUiSettingsClient;
}
export {};
