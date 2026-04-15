import type { ExternalReferenceAttachmentPayload, FileAttachmentMetadata } from '../../../../common/types/domain';
export declare const isImage: (file: {
    mimeType?: string;
}) => boolean | undefined;
export declare const parseMimeType: (mimeType: string | undefined) => string;
export declare const isValidFileExternalReferenceMetadata: (externalReferenceMetadata: ExternalReferenceAttachmentPayload["externalReferenceMetadata"]) => externalReferenceMetadata is FileAttachmentMetadata;
export declare const getFileFromReferenceMetadata: ({ fileId, externalReferenceMetadata, }: {
    fileId: string;
    externalReferenceMetadata: FileAttachmentMetadata;
}) => {
    name: string;
    extension: string;
    mimeType: string;
    created: string;
    id: string;
};
