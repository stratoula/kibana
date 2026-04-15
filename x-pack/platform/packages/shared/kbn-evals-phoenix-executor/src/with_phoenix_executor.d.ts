/**
 * Wraps a Playwright test base (from `@kbn/evals`) to override the `executorClient`
 * fixture with a Phoenix-backed executor when `KBN_EVALS_EXECUTOR=phoenix` is set.
 *
 * When active, the override replaces the base `executorClient` entirely, so it
 * replicates the teardown that the base fixture normally performs: exporting
 * evaluation results to Elasticsearch and printing the terminal report.
 *
 * When `KBN_EVALS_EXECUTOR` is not `phoenix`, the base is returned unchanged.
 *
 * Usage:
 * ```ts
 * import { evaluate as evalsBase } from '@kbn/evals';
 * import { withPhoenixExecutor } from '@kbn/evals-phoenix-executor';
 *
 * const base = withPhoenixExecutor(evalsBase);
 * export const evaluate = base.extend({ ...suite-specific fixtures... });
 * ```
 */
export declare function withPhoenixExecutor<T extends {
    extend: (...args: any[]) => any;
}>(base: T): T;
