import type { FleetAuthzRouter } from '../../services/security';
export declare const ListDataStreamsResponseSchema: import("@kbn/config-schema").ObjectType<{
    data_streams: import("@kbn/config-schema").Type<Readonly<{} & {
        type: string;
        index: string;
        namespace: string;
        package: string;
        dashboards: Readonly<{} & {
            title: string;
            id: string;
        }>[];
        dataset: string;
        package_version: string;
        last_activity_ms: number;
        size_in_bytes: number;
        size_in_bytes_formatted: string | number;
        serviceDetails: Readonly<{} & {
            environment: string;
            serviceName: string;
        }> | null;
    }>[]>;
}>;
export declare const registerRoutes: (router: FleetAuthzRouter) => void;
