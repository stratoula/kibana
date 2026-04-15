export declare const SCOUT_OUTPUT_ROOT: string;
export declare const SCOUT_SERVERS_ROOT: string;
export declare const SCOUT_REPORT_OUTPUT_ROOT: string;
export declare const SCOUT_TEST_CONFIG_STATS_PATH: string;
export declare const SCOUT_PLAYWRIGHT_CONFIGS_PATH: string;
export declare const PLATFORM_AND_SOLUTION_SCOUT_ROOT_PATH_GLOB = "{src/platform,src/core,x-pack/**}/{plugins,packages}/**/test/scout{_*,}";
export declare const EXAMPLE_PLUGIN_SCOUT_ROOT_PATH_GLOB = "{examples,x-pack/examples}/**/test/scout{_*,}";
export declare const TESTABLE_COMPONENT_SCOUT_ROOT_PATH_GLOB: string;
export declare const TESTABLE_COMPONENT_SCOUT_ROOT_PATH_REGEX: RegExp;
export declare const SCOUT_TEST_CATEGORIES: string[];
export declare const SCOUT_CONFIG_PATH_GLOB: string;
export declare const SCOUT_CONFIG_PATH_REGEX: RegExp;
export declare const SCOUT_CONFIG_MANIFEST_PATH_GLOB: string;
/**
 * Playwright configs under top-level `examples/` and `x-pack/examples/` (developer example plugins).
 * `module.name` for these paths is resolved from `plugin.id` in kibana.jsonc (see test_config.fromPath).
 */
export declare const SCOUT_EXAMPLES_PLAYWRIGHT_CONFIG_REGEX: RegExp;
/**
 * Unified regex matching both platform/solution and example plugin Playwright config paths.
 * Uses named capture groups so callers can branch on `examplesRoot` to decide how to
 * resolve module metadata (kibana.jsonc vs directory-derived).
 */
export declare const SCOUT_UNIFIED_CONFIG_PATH_REGEX: RegExp;
export declare const SCOUT_CI_CONFIG_PATH: string;
