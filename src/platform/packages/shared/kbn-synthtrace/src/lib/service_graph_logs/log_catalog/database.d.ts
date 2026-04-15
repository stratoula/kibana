import type { InfraDatabase } from '../constants';
import type { AppPool, InfraPool, TechPool } from '../types';
export declare const DATABASE: Record<InfraDatabase, TechPool<InfraPool<'db_timeout'>, AppPool<'db_timeout'>>>;
