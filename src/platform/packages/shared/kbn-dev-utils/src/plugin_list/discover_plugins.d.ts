export interface Plugin {
    id: string;
    relativeDir: string;
    relativeReadmePath?: string;
    readmeSnippet?: string;
    readmeAsciidocAnchor?: string;
}
export type Plugins = Plugin[];
export declare const discoverPlugins: (pluginDir: string) => Plugins;
