export type FieldDefaultValue = string | number | string[];
/**
 * Updates or adds `metadata.default` for a specific field in the YAML definition.
 * Uses the `yaml` library's parseDocument to preserve comments and formatting.
 */
export declare const updateYamlFieldDefault: (yaml: string, fieldName: string, newValue: FieldDefaultValue) => string;
/**
 * Removes `metadata.default` for a specific field in the YAML definition.
 * Uses the `yaml` library's parseDocument to preserve comments and formatting.
 */
export declare const removeYamlFieldDefault: (yaml: string, fieldName: string) => string;
/**
 * Checks if a field has metadata.default defined in the YAML.
 *
 * @param yaml - The current YAML string
 * @param fieldName - The name of the field to check
 * @returns true if the field has metadata.default, false otherwise
 */
export declare const hasFieldDefault: (yaml: string, fieldName: string) => boolean;
