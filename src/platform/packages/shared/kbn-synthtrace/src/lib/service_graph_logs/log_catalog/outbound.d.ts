import type { Protocols, Runtime } from '../constants';
export type OutboundErrorCategory = 'timeout' | 'unavailable';
export interface OutboundPool {
    success: Record<Runtime, string>;
    error: {
        failed: Record<Runtime, string>;
    } & Partial<Record<OutboundErrorCategory, Record<Runtime, string>>>;
}
export declare const OUTBOUND: Record<Protocols, OutboundPool>;
