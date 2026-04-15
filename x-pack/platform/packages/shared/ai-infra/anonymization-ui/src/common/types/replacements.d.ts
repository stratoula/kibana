export interface InlineDeanonymizationEntity {
    mask: string;
    value: string;
}
export interface InlineDeanonymizationEntry {
    entity: InlineDeanonymizationEntity;
}
export type TokenToOriginalMap = Record<string, string>;
