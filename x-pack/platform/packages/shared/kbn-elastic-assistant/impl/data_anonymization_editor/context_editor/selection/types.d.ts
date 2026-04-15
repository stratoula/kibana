import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common';
export type HandlePageChecked = () => void;
export type HandlePageUnchecked = () => void;
export type HandleRowChecked = (selectedField: string) => void;
export type HandleRowUnChecked = (selectedField: string) => void;
export type FindAnonymizationFieldsClientResponse = Omit<FindAnonymizationFieldsResponse, 'aggregations' | 'all'>;
