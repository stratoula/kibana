import type { DashboardState } from './types';
export declare function stripUnmappedKeys(dashboardState: Partial<DashboardState>): {
    data: DashboardState;
    warnings: Readonly<{
        panel_references?: Readonly<{} & {
            id: string;
            name: string;
            type: string;
        }>[] | undefined;
    } & {
        message: string;
        type: "dropped_panel";
        panel_type: string;
        panel_config: Readonly<{} & {}>;
    }>[];
};
