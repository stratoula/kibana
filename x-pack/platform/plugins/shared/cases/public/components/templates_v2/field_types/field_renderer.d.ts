import type { FC } from 'react';
import type { z } from '@kbn/zod/v4';
import type { FormHook } from '@kbn/es-ui-shared-plugin/static/forms/hook_form_lib';
import type { ParsedTemplateDefinitionSchema } from '../../../../common/types/domain/template/latest';
type ParsedTemplateDefinition = z.infer<typeof ParsedTemplateDefinitionSchema>;
export interface TemplateFieldRendererProps {
    parsedTemplate: ParsedTemplateDefinition;
    onFieldDefaultChange?: (fieldName: string, value: string, control: string) => void;
}
export declare const FieldsRenderer: FC<{
    parsedTemplate: ParsedTemplateDefinition;
    form: FormHook<{}>;
}>;
/**
 * WARN: this component uses shared-form renderer for Case form compatiblity.
 * Dont change this until we migrate everything to react hook form.
 */
export declare const TemplateFieldRenderer: FC<TemplateFieldRendererProps>;
export {};
