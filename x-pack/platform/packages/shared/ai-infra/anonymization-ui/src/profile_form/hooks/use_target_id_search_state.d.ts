interface UseTargetIdSearchStateParams {
    targetId: string;
}
export declare const useTargetIdSearchState: ({ targetId }: UseTargetIdSearchStateParams) => {
    targetIdSearchValue: string;
    debouncedTargetSearchValue: string;
    setTargetIdSearchValue: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export {};
