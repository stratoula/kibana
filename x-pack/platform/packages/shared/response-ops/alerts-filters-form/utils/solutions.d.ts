import type { RuleTypeSolution } from '@kbn/alerting-types';
import type { InternalRuleType } from '@kbn/response-ops-rules-apis/apis/get_internal_rule_types';
/**
 * Filters rule types by solution and returns their ids.
 * Stack rules are included under Observability.
 */
export declare const getRuleTypeIdsForSolution: (ruleTypes: InternalRuleType[], solution: RuleTypeSolution) => string[];
/**
 * Computes the available solutions based on the rule types,
 * grouping stack under observability
 */
export declare const getAvailableSolutions: (ruleTypes: InternalRuleType[]) => RuleTypeSolution[];
