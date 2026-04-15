import React from 'react';
import type { InlineEditLensEmbeddableContext, TypedLensByValueInput } from '@kbn/lens-plugin/public';
import type { UiActionsStart } from '@kbn/ui-actions-plugin/public';
export declare const editButtonLabel: string;
export declare const saveButtonLabel: string;
export declare const dashboardWriteControlsDisabledReason: string;
interface Props {
    uiActions: UiActionsStart;
    lensInput: TypedLensByValueInput | undefined;
    lensLoadEvent: InlineEditLensEmbeddableContext['lensEvent'] | null;
    onAttributesChange: (a: TypedLensByValueInput['attributes']) => void;
    onApply: () => void;
    canWriteDashboards: boolean;
}
export declare function EditVisualizationButton({ uiActions, lensInput, lensLoadEvent, onAttributesChange, onApply, canWriteDashboards, }: Props): React.JSX.Element;
export {};
