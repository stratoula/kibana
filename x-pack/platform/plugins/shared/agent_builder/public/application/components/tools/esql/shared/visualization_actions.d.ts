import React from 'react';
import type { InlineEditLensEmbeddableContext, TypedLensByValueInput } from '@kbn/lens-plugin/public';
import type { UiActionsStart } from '@kbn/ui-actions-plugin/public';
interface Props {
    onSave: () => void;
    uiActions: UiActionsStart;
    lensInput: TypedLensByValueInput | undefined;
    lensLoadEvent: InlineEditLensEmbeddableContext['lensEvent'] | null;
    setLensInput: (input: TypedLensByValueInput) => void;
}
export declare function VisualizationActions({ onSave, uiActions, lensInput, lensLoadEvent, setLensInput, }: Props): React.JSX.Element | null;
export {};
