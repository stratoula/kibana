import type { InfraMessageQueue } from '../constants';
import type { AppPool, InfraPool, TechPool } from '../types';
export declare const MESSAGE_QUEUE: Record<InfraMessageQueue, TechPool<InfraPool<'broker_down'>, AppPool>>;
