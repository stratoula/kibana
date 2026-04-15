import type { UseQueryResult } from '@kbn/react-query';
import type { ParsedTemplate } from '../../../../common/types/domain/template/v1';
export declare const useGetTemplate: (templateId?: string, version?: number) => UseQueryResult<ParsedTemplate>;
