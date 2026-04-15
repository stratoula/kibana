import type { Package } from '@kbn/repo-packages';
export declare function readFile(filePath: string): string;
export declare function readJsonWithComments(filePath: string): any;
export declare function sortObjectByKeyPriority(obj: any, keyOrder?: string[]): void;
export declare function resolveFirstExisting(dir: string, files: string[]): string | undefined;
export declare function filterPackages(allPackages: Package[], filter: string[]): Package[];
export declare function writeYaml(filePath: string, obj: any, preamble?: string | null): boolean;
export declare function compactFilePathsToGlobs(filePaths: string[]): string[];
