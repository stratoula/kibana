import type { MappingProperty, SearchHit } from '@elastic/elasticsearch/lib/api/types';
import type { IconType } from '@elastic/eui';
export interface ResultFieldProps {
    fieldName: string;
    fieldType: string;
    fieldValue: string;
    iconType?: IconType;
    isExpanded?: boolean;
}
export interface MetaDataProps {
    id: string;
    onDocumentDelete?: Function;
    title?: string;
    score?: SearchHit['_score'];
    showScore?: boolean;
    hasDeleteDocumentsPrivilege?: boolean;
}
export interface FieldProps {
    fieldName: string;
    fieldType: Exclude<MappingProperty['type'], undefined>;
    fieldValue: string;
}
