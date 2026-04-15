import type { LensPublicStart } from '@kbn/lens-plugin/public';
import React from 'react';
import type { UiActionsStart } from '@kbn/ui-actions-plugin/public';
import type { TypedLensByValueInput } from '@kbn/lens-plugin/public';
interface BaseVisualizationProps {
    lens: LensPublicStart;
    uiActions: UiActionsStart;
    lensInput: TypedLensByValueInput | undefined;
    setLensInput: (input: TypedLensByValueInput) => void;
    isLoading: boolean;
}
export declare function BaseVisualization({ lens, uiActions, lensInput, setLensInput, isLoading, }: BaseVisualizationProps): React.JSX.Element;
export {};
