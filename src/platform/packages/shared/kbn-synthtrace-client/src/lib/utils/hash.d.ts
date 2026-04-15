import type { Fields } from '../entity';
export declare function hashKeysOf<T extends Fields>(source: T, keys: Array<keyof T>): string;
export declare function fnv1a32(str: string): number;
export declare function appendHash(hash: string, value: string): string;
