/**
 * Code owner area names
 */
export declare const CODE_OWNER_AREAS: readonly ["platform", "search", "observability", "security", "workplaceai"];
export type CodeOwnerArea = (typeof CODE_OWNER_AREAS)[number];
/**
 * Area mappings for code owners
 */
export declare const CODE_OWNER_AREA_MAPPINGS: {
    [area in CodeOwnerArea]: string[];
};
/**
 * Find what area a code owner belongs to
 *
 * @param owner Owner to find an area name
 * @returns The code owner area if a match for the given owner is found
 */
export declare function findAreaForCodeOwner(owner: string): CodeOwnerArea | undefined;
