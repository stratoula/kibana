import React from 'react';
import type { TimeRange } from '@kbn/es-query';
import type { Simplify } from '@kbn/chart-expressions-common';
import type { OnSaveProps } from '@kbn/saved-objects-plugin/public';
import type { LensAppProps } from './types';
export type SaveProps = Simplify<Omit<OnSaveProps, 'onTitleDuplicate' | 'newDescription'> & {
    returnToOrigin: boolean;
    dashboardId?: string | null;
    onTitleDuplicate: OnSaveProps['onTitleDuplicate'];
    newDescription?: string;
    newTags?: string[];
    panelTimeRange?: TimeRange;
}>;
export declare function App({ history, onAppLeave, redirectTo, editorFrame, initialInput, incomingState, redirectToOrigin, setHeaderActionMenu, contextOriginatingApp, topNavMenuEntryGenerators, initialContext, coreStart, }: LensAppProps): React.JSX.Element;
