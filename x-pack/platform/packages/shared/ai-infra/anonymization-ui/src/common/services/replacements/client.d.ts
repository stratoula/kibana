import type { HttpSetup } from '@kbn/core/public';
import { type DeanonymizeWithReplacementsRequestBody, type DeanonymizeWithReplacementsResponse as DeanonymizeWithReplacementsResponseType, type GetAnonymizationReplacementsResponse as GetAnonymizationReplacementsResponseType } from '@kbn/anonymization-common';
import type { TokenToOriginalMap } from '../../types/replacements';
interface AnonymizationReplacementsHttpService {
    fetch: HttpSetup['fetch'];
}
export interface AnonymizationReplacementsClient {
    getReplacements: (id: string) => Promise<GetAnonymizationReplacementsResponseType>;
    deanonymizeText: (input: DeanonymizeWithReplacementsRequestBody) => Promise<DeanonymizeWithReplacementsResponseType>;
    getTokenToOriginalMap: (id: string) => Promise<TokenToOriginalMap>;
}
export declare const createAnonymizationReplacementsClient: (http: AnonymizationReplacementsHttpService) => AnonymizationReplacementsClient;
export {};
