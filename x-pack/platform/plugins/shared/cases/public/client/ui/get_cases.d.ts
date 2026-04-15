import React from 'react';
import type { CasesProps } from '../../components/app';
import type { CasesContextProps } from '../../components/cases_context';
type GetCasesPropsInternal = CasesProps & CasesContextProps;
export type GetCasesProps = Omit<GetCasesPropsInternal, 'externalReferenceAttachmentTypeRegistry' | 'persistableStateAttachmentTypeRegistry' | 'unifiedAttachmentTypeRegistry' | 'getFilesClient'>;
export declare const getCasesLazy: ({ externalReferenceAttachmentTypeRegistry, persistableStateAttachmentTypeRegistry, unifiedAttachmentTypeRegistry, getFilesClient, owner, permissions, basePath, actionsNavigation, ruleDetailsNavigation, showAlertDetails, useFetchAlertData, onAlertsTableLoaded, refreshRef, timelineIntegration, features, releasePhase, renderAlertsTable, }: GetCasesPropsInternal) => React.JSX.Element;
export {};
