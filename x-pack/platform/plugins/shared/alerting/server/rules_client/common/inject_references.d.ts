import type { SavedObjectReference, SavedObjectAttributes } from '@kbn/core/server';
import type { UntypedNormalizedRuleType } from '../../rule_type_registry';
import type { RawRule, RuleTypeParams } from '../../types';
import type { RuleDomain } from '../../application/rule/types';
export declare function injectReferencesIntoActions(alertId: string, actions: RawRule['actions'], references: SavedObjectReference[]): {
    id: string;
    group?: string | undefined;
    uuid: string;
    params: {
        [x: string]: any;
    };
    frequency?: Readonly<{} & {
        summary: boolean;
        notifyWhen: "onActionGroupChange" | "onActiveAlert" | "onThrottleInterval";
        throttle: string | null;
    }> | undefined;
    actionTypeId: string;
    alertsFilter?: Readonly<{
        query?: Readonly<{} & {
            filters: Readonly<{
                query?: Record<string, any> | undefined;
                $state?: Readonly<{} & {
                    store: import("@kbn/es-query-constants").FilterStateStore;
                }> | undefined;
            } & {
                meta: Readonly<{
                    type?: string | undefined;
                    field?: string | undefined;
                    index?: string | undefined;
                    key?: string | undefined;
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                    group?: string | undefined;
                    alias?: string | null | undefined;
                    negate?: boolean | undefined;
                    controlledBy?: string | undefined;
                    params?: any;
                    relation?: "AND" | "OR" | undefined;
                    isMultiIndex?: boolean | undefined;
                } & {}>;
            }>[];
            kql: string;
            dsl: string;
        }> | undefined;
        timeframe?: Readonly<{} & {
            days: (1 | 3 | 2 | 5 | 4 | 6 | 7)[];
            hours: Readonly<{} & {
                end: string;
                start: string;
            }>;
            timezone: string;
        }> | undefined;
    } & {}> | undefined;
    useAlertDataForTemplate?: boolean | undefined;
}[];
export declare function injectReferencesIntoParams<Params extends RuleTypeParams, ExtractedParams extends RuleTypeParams>(ruleId: string, ruleType: UntypedNormalizedRuleType, ruleParams: SavedObjectAttributes | undefined, references: SavedObjectReference[]): Params;
export declare function injectReferencesIntoArtifacts(ruleId: string, artifacts?: RawRule['artifacts'], references?: SavedObjectReference[]): Required<RuleDomain['artifacts']>;
