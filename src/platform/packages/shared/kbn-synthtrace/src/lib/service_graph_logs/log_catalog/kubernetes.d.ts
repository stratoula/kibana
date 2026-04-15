import type { InfraLogType } from '../constants';
import type { InfraPool, RuntimeMessagePool, TechPool } from '../types';
type KubeConditions = Exclude<InfraLogType['kubernetes'], 'healthy'>;
type AppKubelet = Record<'k8s_oom' | 'k8s_crash_loop_backoff', RuntimeMessagePool>;
export declare const KUBERNETES: Record<string, TechPool<InfraPool<KubeConditions>, AppKubelet>>;
export {};
