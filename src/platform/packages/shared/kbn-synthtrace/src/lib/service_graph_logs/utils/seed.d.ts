export declare function resolveEffectiveSeed(seed: number | undefined, index: number, timestamp?: number): number;
/**
 * Derives a deterministic sub-stream seed from a base seed and an arbitrary name.
 */
export declare function deriveSeed(baseSeed: number, name: string): number;
/**
 * Converts a fractional weight into a whole-number doc count deterministically.
 * The integer part is always emitted; the fractional remainder is resolved to a
 * probabilistic +1 using one draw from the provided RNG.
 *
 * e.g. weight=2.3 → always 2, +1 with 30% probability per tick.
 */
export declare const probabilisticCount: (weight: number, rng: () => number) => number;
