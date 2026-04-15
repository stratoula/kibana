/**
 * SCENARIO: Cascading Failure — Database Connection Pool Exhaustion
 *
 * Story: A missing database index causes full table scans in inventory-service,
 * exhausting its connection pool. This cascades to checkout-service (timeouts
 * calling inventory) and api-gateway (502 errors on checkout endpoints).
 *
 * Timeline (relative to the time range):
 *   0–50%  Normal operation. Steady noise + healthy application logs.
 *   50–60% inventory-service emits connection pool utilization warnings.
 *   60–80% inventory-service errors + checkout-service timeouts.
 *   80–100% api-gateway 502/504 errors join the cascade.
 *
 * Noise layers (present throughout):
 *   - Health checks from all services (high volume)
 *   - Load balancer access logs (high volume)
 *   - fluent-bit metadata merges (moderate)
 *   - Cron / scheduled task logs (low)
 *
 * Red herring:
 *   - notification-service WARN about email delivery delays (unrelated)
 *
 * The agent should:
 *   1. See ~15K+ logs and a visible spike in the incident window
 *   2. Use run_log_rate_analysis — the spike is partial (inventory/checkout
 *      spike while other services stay flat) so LRA can correlate
 *      service.name=inventory-service with the change
 *   3. Use get_log_groups — "Connection pool exhausted" should surface as a
 *      rare pattern among common health-check / access-log noise
 *   4. Funnel with NOT clauses to strip health checks, load balancer, fluent-bit
 *   5. Identify the root cause: missing DB index → full table scans →
 *      pool exhaustion → checkout timeouts → gateway 502s
 *
 * Services:
 *   - api-gateway (production): routes all traffic, emits 502s in cascade phase
 *   - checkout-service (production): order processing, timeout errors
 *   - inventory-service (production): the root-cause service
 *   - payment-service (production): normal throughout (background)
 *   - notification-service (production): normal + unrelated warning (red herring)
 *   - fluent-bit (kube-system): log collector noise
 *   - task-scheduler (kube-system): cron noise
 *
 * Validate via get_logs tool:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_logs",
 *   "tool_params": { "start": "now-1h", "end": "now" }
 * }
 * ```
 *
 * Validate via Observability agent (with log search skill):
 *
 * ```
 * POST kbn:///api/agent_builder/converse
 * {
 *   "agent_id": "observability.agent",
 *   "input": "Something is wrong with checkout. Can you investigate the logs?"
 * }
 * ```
 *
 * Test prompts:
 *   1. Vague:    "Something is wrong with checkout. Can you investigate the logs?"
 *   2. Spike:    "There's been a spike in errors in the last 20 minutes. What's causing it?"
 *   3. Scoped:   "The inventory service seems to be having issues. What's going on?"
 */
import type { LogDocument, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
export declare function generateCascadingFailureData({ range, logsEsClient, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
}): ScenarioReturnType<LogDocument>[];
declare const _default: import("../../../../cli/scenario").Scenario<LogDocument>;
export default _default;
