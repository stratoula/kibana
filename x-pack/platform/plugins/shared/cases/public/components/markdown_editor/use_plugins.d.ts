export declare const usePlugins: (disabledPlugins?: string[]) => {
    uiPlugins: import("@elastic/eui/src/components/markdown_editor/plugins/markdown_default_plugins/ui_plugins").DefaultEuiMarkdownUiPlugins;
    parsingPlugins: import("@elastic/eui/src/components/markdown_editor/plugins/markdown_default_plugins/parsing_plugins").DefaultEuiMarkdownParsingPlugins;
    processingPlugins: [[import("unified").Plugin, import("mdast-util-to-hast").Options], [typeof import("rehype-react"), import("@elastic/eui/src/components/markdown_editor/plugins/markdown_default_plugins/processing_plugins").Rehype2ReactOptions], ...import("unified").Pluggable<any[], import("unified").Settings>[]];
};
