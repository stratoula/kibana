import type { AppMenuPopoverItem } from '@kbn/core-chrome-app-menu-components';
import type { DashboardApi } from '../../../dashboard_api/types';
interface Props {
    dashboardApi: DashboardApi;
}
export declare const useDashboardAddItems: ({ dashboardApi }: Props) => AppMenuPopoverItem[];
export {};
