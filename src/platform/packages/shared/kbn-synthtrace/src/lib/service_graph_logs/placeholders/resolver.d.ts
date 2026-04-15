export interface FillPlaceholdersOptions {
    serviceName?: string | undefined;
    overrides?: Record<string, string>;
}
export declare function fillPlaceholders(template: string, seed: number, options?: FillPlaceholdersOptions): string;
