export declare const CheckPermissionsRequestSchema: {
    query: import("@kbn/config-schema").ObjectType<{
        fleetServerSetup: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
};
export declare const CheckPermissionsResponseSchema: import("@kbn/config-schema").ObjectType<{
    success: import("@kbn/config-schema").Type<boolean>;
    error: import("@kbn/config-schema").Type<"MISSING_SECURITY" | "MISSING_PRIVILEGES" | "MISSING_FLEET_SERVER_SETUP_PRIVILEGES" | undefined>;
}>;
