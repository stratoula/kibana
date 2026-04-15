export declare function randHex(rng: () => number, len: number): string;
export declare function pick<T>(arr: T[], rng: () => number): T;
/**
 * FNV-1a 32-bit hash — converts a string to a stable uint32.
 * Use it to derive a per-name seed offset so the same base seed always
 * maps to the same output for a given service name, regardless of traversal order.
 */
export declare function hashStr(s: string): number;
export declare function mulberry32(seed: number): () => number;
