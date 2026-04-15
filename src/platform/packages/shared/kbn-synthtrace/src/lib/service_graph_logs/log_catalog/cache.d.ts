import type { InfraCache } from '../constants';
import type { AppPool, InfraPool, TechPool } from '../types';
export declare const CACHE: Record<InfraCache, TechPool<InfraPool<'eviction'>, AppPool>>;
