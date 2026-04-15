import type { HttpSetup, IToasts } from '@kbn/core/public';
import type { PerformAnonymizationFieldsBulkActionRequestBody } from '@kbn/elastic-assistant-common/impl/schemas';
export declare const bulkUpdateAnonymizationFields: (http: HttpSetup, anonymizationFieldsActions: PerformAnonymizationFieldsBulkActionRequestBody, toasts?: IToasts) => Promise<{
    attributes: {
        results: {
            updated: {
                id: string;
                field: string;
                timestamp?: string | undefined;
                allowed?: boolean | undefined;
                anonymized?: boolean | undefined;
                updatedAt?: string | undefined;
                updatedBy?: string | undefined;
                createdAt?: string | undefined;
                createdBy?: string | undefined;
                namespace?: string | undefined;
            }[];
            created: {
                id: string;
                field: string;
                timestamp?: string | undefined;
                allowed?: boolean | undefined;
                anonymized?: boolean | undefined;
                updatedAt?: string | undefined;
                updatedBy?: string | undefined;
                createdAt?: string | undefined;
                createdBy?: string | undefined;
                namespace?: string | undefined;
            }[];
            deleted: string[];
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
        };
        summary: {
            failed: number;
            skipped: number;
            succeeded: number;
            total: number;
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    status_code?: number | undefined;
    message?: string | undefined;
    anonymization_fields_count?: number | undefined;
} | undefined>;
