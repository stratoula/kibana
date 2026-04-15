export type { CodeOwnersEntry } from './src/code_owners';
export * as cli from './src/cli';
export { getCodeOwnersEntries, findCodeOwnersEntryForPath, getOwningTeamsForPath, } from './src/code_owners';
export { type CodeOwnerArea, CODE_OWNER_AREAS, CODE_OWNER_AREA_MAPPINGS, findAreaForCodeOwner, } from './src/code_owner_areas';
