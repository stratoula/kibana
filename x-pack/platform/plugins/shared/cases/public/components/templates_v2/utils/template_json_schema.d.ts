import { z } from '@kbn/zod/v4';
/**
 * URI identifier for the template JSON Schema.
 * This is an arbitrary unique identifier used by monaco-yaml to associate
 * the schema with YAML files in the editor.
 */
export declare const TEMPLATE_SCHEMA_URI = "file:///cases-template-schema.json";
/**
 * Dynamically generates a JSON Schema from the Zod ParsedTemplateDefinitionSchema.
 * This keeps the Monaco editor validation in sync with the Zod schema automatically.
 *
 * Based on the pattern from workflows' get_workflow_json_schema.ts
 */
export declare function getTemplateDefinitionJsonSchema(): z.core.JSONSchema.JSONSchema | null;
