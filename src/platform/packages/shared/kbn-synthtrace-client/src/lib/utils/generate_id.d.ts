type IdGeneratorStrategyType = 'random' | 'sequential';
export declare function generateShortId(): string;
export declare function generateLongId(): string;
export declare function generateLongIdWithSeed(seed: string): string;
export declare const setIdGeneratorStrategy: (strategy: IdGeneratorStrategyType) => void;
export declare const resetSequentialGenerator: () => void;
export {};
