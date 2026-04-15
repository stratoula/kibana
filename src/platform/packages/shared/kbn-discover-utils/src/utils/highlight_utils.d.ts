/**
 * Escapes HTML in a string while preserving field-format highlight <mark> tags.
 * Used for values already processed by formatFieldValue / getHighlightHtml (e.g. resource badges).
 */
export declare function escapeAndPreserveHighlightTags(value: string): string;
/**
 * Merges ES highlight snippets into a field value, producing safe HTML with <mark> tags.
 * Replicates the logic of getHighlightHtml from @kbn/field-formats-plugin, which packages
 * cannot import directly.
 *
 * Each snippet in the highlights array is the full field value with ES highlight tags
 * around matched terms. The function iterates over all snippets (handling multi-valued
 * fields), strips the ES tags to find the matching text, and replaces those occurrences
 * in the escaped field value with properly tagged <mark> elements.
 */
export declare function getHighlightedFieldValue(fieldValue: string, highlights: string[] | undefined): string;
