import React from 'react';
import { EuiSuperSelect } from '@elastic/eui';
import type { RuleTypeSolution } from '@kbn/alerting-types';
export interface AlertsSolutionSelectorProps {
    availableSolutions?: RuleTypeSolution[];
    isLoading?: boolean;
    isError?: boolean;
    solution?: RuleTypeSolution;
    onSolutionChange: (newSolution: RuleTypeSolution) => void;
}
export declare const AlertsSolutionSelector: React.ForwardRefExoticComponent<AlertsSolutionSelectorProps & React.RefAttributes<EuiSuperSelect<RuleTypeSolution>>>;
