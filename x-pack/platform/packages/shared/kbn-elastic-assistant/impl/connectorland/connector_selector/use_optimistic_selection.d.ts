/**
 * Custom hook for managing optimistic updates with automatic reversion
 *
 * @param actualValue - The actual value from the server/parent component
 * @param timeoutMs - Timeout in milliseconds before reverting optimistic value (default: 5000)
 * @returns Object containing the effective value and setter function
 */
export declare const useOptimisticSelection: <T>(actualValue: T, timeoutMs?: number) => {
    effectiveValue: T;
    setOptimisticValue: (value: T) => void;
};
