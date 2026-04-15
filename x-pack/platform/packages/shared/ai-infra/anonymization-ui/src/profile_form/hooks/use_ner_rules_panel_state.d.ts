import { type NerEntityClass, type NerRule } from '@kbn/anonymization-common';
import type { TrustedNerModelOption } from '../../contracts';
interface UseNerRulesPanelStateParams {
    nerRules: NerRule[];
    onNerRulesChange: (rules: NerRule[]) => void;
    isManageMode: boolean;
    isSubmitting: boolean;
    listTrustedNerModels?: () => Promise<TrustedNerModelOption[]>;
    nerRulesError?: string;
}
export declare const useNerRulesPanelState: ({ nerRules, onNerRulesChange, isManageMode, isSubmitting, listTrustedNerModels, nerRulesError, }: UseNerRulesPanelStateParams) => {
    nerDraft: {
        modelId: string;
        allowedEntityClasses: ("PER" | "ORG" | "LOC" | "MISC")[];
    };
    trustedNerModelOptions: {
        value: string;
        text: string;
    }[];
    singleTrustedNerModel: {
        value: string;
        text: string;
    } | undefined;
    trustedNerModelsError: string | undefined;
    isTrustedNerModelsLoading: boolean;
    usesTrustedNerModelProvider: boolean;
    hasSingleTrustedNerModel: boolean;
    hasTrustedNerModel: boolean;
    isNerInputDisabled: boolean;
    showValidationErrors: boolean;
    addNerRule: () => void;
    removeNerRuleById: (ruleId: string) => void;
    setNerDraftModelId: (modelId: string) => void;
    setNerDraftAllowedEntities: (allowedEntityClasses: NerEntityClass[]) => void;
    updateRuleModelId: (ruleId: string, modelId: string) => void;
    updateRuleAllowedEntityClasses: (ruleId: string, allowedEntityClasses: NerEntityClass[]) => void;
    updateRuleEnabled: (ruleId: string, enabled: boolean) => void;
    getModelOptionsForRule: (modelId: string) => {
        value: string;
        text: string;
    }[];
    canAddRule: boolean;
};
export {};
