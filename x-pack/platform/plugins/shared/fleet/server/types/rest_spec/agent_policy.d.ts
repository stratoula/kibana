export declare const GetAgentPoliciesRequestSchema: {
    query: import("@kbn/config-schema").ObjectType<{
        page: import("@kbn/config-schema").Type<number | undefined>;
        perPage: import("@kbn/config-schema").Type<number | undefined>;
        sortField: import("@kbn/config-schema").Type<string | undefined>;
        sortOrder: import("@kbn/config-schema").Type<"desc" | "asc" | undefined>;
        showUpgradeable: import("@kbn/config-schema").Type<boolean | undefined>;
        kuery: import("@kbn/config-schema").Type<string | undefined>;
        noAgentCount: import("@kbn/config-schema").Type<boolean | undefined>;
        withAgentCount: import("@kbn/config-schema").Type<boolean | undefined>;
        full: import("@kbn/config-schema").Type<boolean | undefined>;
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const BulkGetAgentPoliciesRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<Omit<{
        ids: import("@kbn/config-schema").Type<string[]>;
        ignoreMissing: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "full"> & {
        full: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const BulkGetAgentPoliciesResponseSchema: import("@kbn/config-schema").ObjectType<{
    items: import("@kbn/config-schema").Type<Readonly<{
        version?: string | undefined;
        description?: string | undefined;
        created_at?: string | undefined;
        overrides?: Record<string, any> | null | undefined;
        agents?: number | undefined;
        agentless?: Readonly<{
            cloud_connectors?: Readonly<{
                target_csp?: "azure" | "aws" | "gcp" | undefined;
            } & {
                enabled: boolean;
            }> | undefined;
            resources?: Readonly<{
                requests?: Readonly<{
                    cpu?: string | undefined;
                    memory?: string | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
        } & {}> | undefined;
        is_managed?: boolean | undefined;
        supports_agentless?: boolean | null | undefined;
        space_ids?: string[] | undefined;
        is_default?: boolean | undefined;
        is_default_fleet_server?: boolean | undefined;
        has_fleet_server?: boolean | undefined;
        monitoring_enabled?: ("logs" | "metrics" | "traces")[] | undefined;
        unenroll_timeout?: number | undefined;
        is_preconfigured?: boolean | undefined;
        data_output_id?: string | null | undefined;
        monitoring_output_id?: string | null | undefined;
        download_source_id?: string | null | undefined;
        fleet_server_host_id?: string | null | undefined;
        schema_version?: string | undefined;
        agent_features?: Readonly<{} & {
            name: string;
            enabled: boolean;
        }>[] | undefined;
        keep_monitoring_alive?: boolean | null | undefined;
        global_data_tags?: Readonly<{} & {
            name: string;
            value: string | number;
        }>[] | undefined;
        monitoring_pprof_enabled?: boolean | undefined;
        monitoring_http?: Readonly<{
            host?: string | undefined;
            enabled?: boolean | undefined;
            buffer?: Readonly<{} & {
                enabled: boolean;
            }> | undefined;
            port?: number | undefined;
        } & {}> | undefined;
        monitoring_diagnostics?: Readonly<{
            limit?: Readonly<{
                interval?: string | undefined;
                burst?: number | undefined;
            } & {}> | undefined;
            uploader?: Readonly<{
                max_retries?: number | undefined;
                init_dur?: string | undefined;
                max_dur?: string | undefined;
            } & {}> | undefined;
        } & {}> | undefined;
        required_versions?: Readonly<{} & {
            version: string;
            percentage: number;
        }>[] | null | undefined;
        has_agent_version_conditions?: boolean | undefined;
        is_verifier?: boolean | undefined;
        package_policies?: string[] | Readonly<{
            version?: string | undefined;
            namespace?: string | undefined;
            package?: Readonly<{
                title?: string | undefined;
                fips_compatible?: boolean | undefined;
                experimental_data_stream_features?: Readonly<{} & {
                    features: Readonly<{
                        synthetic_source?: boolean | undefined;
                        tsdb?: boolean | undefined;
                        doc_value_only_numeric?: boolean | undefined;
                        doc_value_only_other?: boolean | undefined;
                    } & {}>;
                    data_stream: string;
                }>[] | undefined;
                requires_root?: boolean | undefined;
            } & {
                name: string;
                version: string;
            }> | undefined;
            description?: string | undefined;
            overrides?: Readonly<{
                inputs?: Record<string, any> | undefined;
            } & {}> | null | undefined;
            agents?: number | undefined;
            elasticsearch?: Readonly<{
                privileges?: Readonly<{
                    cluster?: string[] | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
            secret_references?: Readonly<{} & {
                id: string;
            }>[] | undefined;
            vars?: Record<string, Readonly<{
                type?: string | undefined;
                value?: any;
                frozen?: boolean | undefined;
            } & {}>> | Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
                id: string;
                isSecretRef: boolean;
            }> | null> | undefined;
            inputs?: Record<string, Readonly<{
                streams?: Record<string, Readonly<{
                    enabled?: boolean | undefined;
                    vars?: Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
                        id: string;
                        isSecretRef: boolean;
                    }> | null> | undefined;
                    deprecated?: Readonly<{
                        since?: string | undefined;
                        replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                    } & {
                        description: string;
                    }> | undefined;
                    var_group_selections?: Record<string, string> | undefined;
                } & {}>> | undefined;
                enabled?: boolean | undefined;
                vars?: Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
                    id: string;
                    isSecretRef: boolean;
                }> | null> | undefined;
                deprecated?: Readonly<{
                    since?: string | undefined;
                    replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                } & {
                    description: string;
                }> | undefined;
            } & {}>> | Readonly<{
                name?: string | undefined;
                id?: string | undefined;
                config?: Record<string, Readonly<{
                    type?: string | undefined;
                    value?: any;
                    frozen?: boolean | undefined;
                } & {}>> | undefined;
                vars?: Record<string, Readonly<{
                    type?: string | undefined;
                    value?: any;
                    frozen?: boolean | undefined;
                } & {}>> | undefined;
                deprecated?: Readonly<{
                    since?: string | undefined;
                    replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                } & {
                    description: string;
                }> | undefined;
                migrate_from?: string | undefined;
                policy_template?: string | undefined;
                keep_enabled?: boolean | undefined;
                var_group_selections?: Record<string, string> | undefined;
                compiled_input?: any;
            } & {
                type: string;
                streams: Readonly<{
                    id?: string | undefined;
                    config?: Record<string, Readonly<{
                        type?: string | undefined;
                        value?: any;
                        frozen?: boolean | undefined;
                    } & {}>> | undefined;
                    vars?: Record<string, Readonly<{
                        type?: string | undefined;
                        value?: any;
                        frozen?: boolean | undefined;
                    } & {}>> | undefined;
                    release?: "beta" | "experimental" | "ga" | undefined;
                    deprecated?: Readonly<{
                        since?: string | undefined;
                        replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                    } & {
                        description: string;
                    }> | undefined;
                    migrate_from?: string | undefined;
                    keep_enabled?: boolean | undefined;
                    var_group_selections?: Record<string, string> | undefined;
                    compiled_stream?: any;
                } & {
                    enabled: boolean;
                    data_stream: Readonly<{
                        type?: string | undefined;
                        elasticsearch?: Readonly<{
                            privileges?: Readonly<{
                                indices?: string[] | undefined;
                            } & {}> | undefined;
                            dynamic_dataset?: boolean | undefined;
                            dynamic_namespace?: boolean | undefined;
                        } & {}> | undefined;
                    } & {
                        dataset: string;
                    }>;
                }>[];
                enabled: boolean;
            }>[] | undefined;
            var_group_selections?: Record<string, string> | undefined;
            is_managed?: boolean | undefined;
            policy_id?: string | null | undefined;
            policy_ids?: string[] | undefined;
            output_id?: string | null | undefined;
            cloud_connector_id?: string | null | undefined;
            cloud_connector_name?: string | null | undefined;
            supports_agentless?: boolean | null | undefined;
            supports_cloud_connector?: boolean | null | undefined;
            additional_datastreams_permissions?: string[] | null | undefined;
            spaceIds?: string[] | undefined;
            package_agent_version_condition?: string | undefined;
        } & {
            name: string;
            id: string;
            enabled: boolean;
            revision: number;
            created_by: string;
            updated_by: string;
            created_at: string;
            updated_at: string;
        }>[] | undefined;
        unprivileged_agents?: number | undefined;
        fips_agents?: number | undefined;
        agents_per_version?: Readonly<{} & {
            version: string;
            count: number;
        }>[] | undefined;
        min_agent_version?: string | null | undefined;
        package_agent_version_conditions?: Readonly<{} & {
            title: string;
            name: string;
            version_condition: string;
        }>[] | null | undefined;
    } & {
        name: string;
        id: string;
        status: "active" | "inactive";
        namespace: string;
        revision: number;
        updated_by: string;
        updated_at: string;
        inactivity_timeout: number;
        is_protected: boolean;
    }>[]>;
}>;
export declare const GetOneAgentPolicyRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const GetAutoUpgradeAgentsStatusRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const CreateAgentPolicyRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<Omit<Omit<{
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        global_data_tags: import("@kbn/config-schema").Type<Readonly<{} & {
            name: string;
            value: string | number;
        }>[] | undefined>;
        agentless: import("@kbn/config-schema").Type<Readonly<{
            cloud_connectors?: Readonly<{
                target_csp?: "azure" | "aws" | "gcp" | undefined;
            } & {
                enabled: boolean;
            }> | undefined;
            resources?: Readonly<{
                requests?: Readonly<{
                    cpu?: string | undefined;
                    memory?: string | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        monitoring_pprof_enabled: import("@kbn/config-schema").Type<boolean | undefined>;
        monitoring_http: import("@kbn/config-schema").Type<Readonly<{
            host?: string | undefined;
            enabled?: boolean | undefined;
            buffer?: Readonly<{} & {
                enabled: boolean;
            }> | undefined;
            port?: number | undefined;
        } & {}> | undefined>;
        monitoring_diagnostics: import("@kbn/config-schema").Type<Readonly<{
            limit?: Readonly<{
                interval?: string | undefined;
                burst?: number | undefined;
            } & {}> | undefined;
            uploader?: Readonly<{
                max_retries?: number | undefined;
                init_dur?: string | undefined;
                max_dur?: string | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        required_versions: import("@kbn/config-schema").Type<Readonly<{} & {
            version: string;
            percentage: number;
        }>[] | null | undefined>;
        is_verifier: import("@kbn/config-schema").Type<boolean | undefined>;
        id: import("@kbn/config-schema").Type<string | undefined>;
        space_ids: import("@kbn/config-schema").Type<string[] | undefined>;
        name: import("@kbn/config-schema").Type<string>;
        namespace: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string | undefined>;
        is_managed: import("@kbn/config-schema").Type<boolean | undefined>;
        has_fleet_server: import("@kbn/config-schema").Type<boolean | undefined>;
        is_default: import("@kbn/config-schema").Type<boolean | undefined>;
        is_default_fleet_server: import("@kbn/config-schema").Type<boolean | undefined>;
        unenroll_timeout: import("@kbn/config-schema").Type<number | undefined>;
        inactivity_timeout: import("@kbn/config-schema").Type<number>;
        monitoring_enabled: import("@kbn/config-schema").Type<("logs" | "metrics" | "traces")[] | undefined>;
        keep_monitoring_alive: import("@kbn/config-schema").Type<boolean | null | undefined>;
        data_output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        monitoring_output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        download_source_id: import("@kbn/config-schema").Type<string | null | undefined>;
        fleet_server_host_id: import("@kbn/config-schema").Type<string | null | undefined>;
        agent_features: import("@kbn/config-schema").Type<Readonly<{} & {
            name: string;
            enabled: boolean;
        }>[] | undefined>;
        is_protected: import("@kbn/config-schema").Type<boolean | undefined>;
        overrides: import("@kbn/config-schema").Type<Record<string, any> | null | undefined>;
    }, "has_agent_version_conditions"> & {
        has_agent_version_conditions: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "supports_agentless" | "force"> & {
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        sys_monitoring: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
};
export declare const CreateAgentAndPackagePolicyRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<{
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        global_data_tags: import("@kbn/config-schema").Type<Readonly<{} & {
            name: string;
            value: string | number;
        }>[] | undefined>;
        agentless: import("@kbn/config-schema").Type<Readonly<{
            cloud_connectors?: Readonly<{
                target_csp?: "azure" | "aws" | "gcp" | undefined;
            } & {
                enabled: boolean;
            }> | undefined;
            resources?: Readonly<{
                requests?: Readonly<{
                    cpu?: string | undefined;
                    memory?: string | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        monitoring_pprof_enabled: import("@kbn/config-schema").Type<boolean | undefined>;
        monitoring_http: import("@kbn/config-schema").Type<Readonly<{
            host?: string | undefined;
            enabled?: boolean | undefined;
            buffer?: Readonly<{} & {
                enabled: boolean;
            }> | undefined;
            port?: number | undefined;
        } & {}> | undefined>;
        monitoring_diagnostics: import("@kbn/config-schema").Type<Readonly<{
            limit?: Readonly<{
                interval?: string | undefined;
                burst?: number | undefined;
            } & {}> | undefined;
            uploader?: Readonly<{
                max_retries?: number | undefined;
                init_dur?: string | undefined;
                max_dur?: string | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        required_versions: import("@kbn/config-schema").Type<Readonly<{} & {
            version: string;
            percentage: number;
        }>[] | null | undefined>;
        is_verifier: import("@kbn/config-schema").Type<boolean | undefined>;
        id: import("@kbn/config-schema").Type<string | undefined>;
        space_ids: import("@kbn/config-schema").Type<string[] | undefined>;
        name: import("@kbn/config-schema").Type<string>;
        namespace: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string | undefined>;
        is_managed: import("@kbn/config-schema").Type<boolean | undefined>;
        has_fleet_server: import("@kbn/config-schema").Type<boolean | undefined>;
        is_default: import("@kbn/config-schema").Type<boolean | undefined>;
        is_default_fleet_server: import("@kbn/config-schema").Type<boolean | undefined>;
        unenroll_timeout: import("@kbn/config-schema").Type<number | undefined>;
        inactivity_timeout: import("@kbn/config-schema").Type<number>;
        monitoring_enabled: import("@kbn/config-schema").Type<("logs" | "metrics" | "traces")[] | undefined>;
        keep_monitoring_alive: import("@kbn/config-schema").Type<boolean | null | undefined>;
        data_output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        monitoring_output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        download_source_id: import("@kbn/config-schema").Type<string | null | undefined>;
        fleet_server_host_id: import("@kbn/config-schema").Type<string | null | undefined>;
        agent_features: import("@kbn/config-schema").Type<Readonly<{} & {
            name: string;
            enabled: boolean;
        }>[] | undefined>;
        is_protected: import("@kbn/config-schema").Type<boolean | undefined>;
        overrides: import("@kbn/config-schema").Type<Record<string, any> | null | undefined>;
    }, "has_agent_version_conditions"> & {
        has_agent_version_conditions: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "supports_agentless" | "force"> & {
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "package_policies"> & {
        package_policies: import("@kbn/config-schema").Type<(Readonly<{
            id?: string | undefined;
            namespace?: string | undefined;
            package?: Readonly<{
                title?: string | undefined;
                fips_compatible?: boolean | undefined;
                experimental_data_stream_features?: Readonly<{} & {
                    features: Readonly<{
                        synthetic_source?: boolean | undefined;
                        tsdb?: boolean | undefined;
                        doc_value_only_numeric?: boolean | undefined;
                        doc_value_only_other?: boolean | undefined;
                    } & {}>;
                    data_stream: string;
                }>[] | undefined;
                requires_root?: boolean | undefined;
            } & {
                name: string;
                version: string;
            }> | undefined;
            description?: string | undefined;
            enabled?: boolean | undefined;
            overrides?: Readonly<{
                inputs?: Record<string, any> | undefined;
            } & {}> | null | undefined;
            vars?: Record<string, Readonly<{
                type?: string | undefined;
                value?: any;
                frozen?: boolean | undefined;
            } & {}>> | undefined;
            var_group_selections?: Record<string, string> | undefined;
            is_managed?: boolean | undefined;
            policy_id?: string | null | undefined;
            policy_ids?: string[] | undefined;
            output_id?: string | null | undefined;
            cloud_connector_id?: string | null | undefined;
            cloud_connector_name?: string | null | undefined;
            supports_agentless?: boolean | null | undefined;
            supports_cloud_connector?: boolean | null | undefined;
            additional_datastreams_permissions?: string[] | null | undefined;
            spaceIds?: string[] | undefined;
            package_agent_version_condition?: string | undefined;
            force?: boolean | undefined;
        } & {
            name: string;
            inputs: Readonly<{
                name?: string | undefined;
                id?: string | undefined;
                streams?: Readonly<{
                    id?: string | undefined;
                    config?: Record<string, Readonly<{
                        type?: string | undefined;
                        value?: any;
                        frozen?: boolean | undefined;
                    } & {}>> | undefined;
                    vars?: Record<string, Readonly<{
                        type?: string | undefined;
                        value?: any;
                        frozen?: boolean | undefined;
                    } & {}>> | undefined;
                    release?: "beta" | "experimental" | "ga" | undefined;
                    deprecated?: Readonly<{
                        since?: string | undefined;
                        replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                    } & {
                        description: string;
                    }> | undefined;
                    migrate_from?: string | undefined;
                    keep_enabled?: boolean | undefined;
                    var_group_selections?: Record<string, string> | undefined;
                    compiled_stream?: any;
                } & {
                    enabled: boolean;
                    data_stream: Readonly<{
                        type?: string | undefined;
                        elasticsearch?: Readonly<{
                            privileges?: Readonly<{
                                indices?: string[] | undefined;
                            } & {}> | undefined;
                            dynamic_dataset?: boolean | undefined;
                            dynamic_namespace?: boolean | undefined;
                        } & {}> | undefined;
                    } & {
                        dataset: string;
                    }>;
                }>[] | undefined;
                config?: Record<string, Readonly<{
                    type?: string | undefined;
                    value?: any;
                    frozen?: boolean | undefined;
                } & {}>> | undefined;
                vars?: Record<string, Readonly<{
                    type?: string | undefined;
                    value?: any;
                    frozen?: boolean | undefined;
                } & {}>> | undefined;
                deprecated?: Readonly<{
                    since?: string | undefined;
                    replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                } & {
                    description: string;
                }> | undefined;
                migrate_from?: string | undefined;
                policy_template?: string | undefined;
                keep_enabled?: boolean | undefined;
                var_group_selections?: Record<string, string> | undefined;
            } & {
                type: string;
                enabled: boolean;
            }>[];
        }> | Readonly<{
            id?: string | undefined;
            namespace?: string | undefined;
            description?: string | undefined;
            vars?: Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
                id: string;
                isSecretRef: boolean;
            }> | null> | undefined;
            inputs?: Record<string, Readonly<{
                streams?: Record<string, Readonly<{
                    enabled?: boolean | undefined;
                    vars?: Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
                        id: string;
                        isSecretRef: boolean;
                    }> | null> | undefined;
                    deprecated?: Readonly<{
                        since?: string | undefined;
                        replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                    } & {
                        description: string;
                    }> | undefined;
                    var_group_selections?: Record<string, string> | undefined;
                } & {}>> | undefined;
                enabled?: boolean | undefined;
                vars?: Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
                    id: string;
                    isSecretRef: boolean;
                }> | null> | undefined;
                deprecated?: Readonly<{
                    since?: string | undefined;
                    replaced_by?: Record<"package" | "input" | "policyTemplate" | "dataStream" | "variable", string> | undefined;
                } & {
                    description: string;
                }> | undefined;
            } & {}>> | undefined;
            var_group_selections?: Record<string, string> | undefined;
            policy_id?: string | null | undefined;
            policy_ids?: string[] | undefined;
            output_id?: string | null | undefined;
            supports_agentless?: boolean | null | undefined;
            additional_datastreams_permissions?: string[] | null | undefined;
            force?: boolean | undefined;
        } & {
            name: string;
            package: Readonly<{
                title?: string | undefined;
                fips_compatible?: boolean | undefined;
                experimental_data_stream_features?: Readonly<{} & {
                    features: Readonly<{
                        synthetic_source?: boolean | undefined;
                        tsdb?: boolean | undefined;
                        doc_value_only_numeric?: boolean | undefined;
                        doc_value_only_other?: boolean | undefined;
                    } & {}>;
                    data_stream: string;
                }>[] | undefined;
                requires_root?: boolean | undefined;
            } & {
                name: string;
                version: string;
            }>;
        }>)[]>;
    }>;
    query: import("@kbn/config-schema").Type<Readonly<{
        format?: "simplified" | "legacy" | undefined;
        sys_monitoring?: boolean | undefined;
    } & {}>>;
};
export declare const UpdateAgentPolicyRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<{
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        global_data_tags: import("@kbn/config-schema").Type<Readonly<{} & {
            name: string;
            value: string | number;
        }>[] | undefined>;
        agentless: import("@kbn/config-schema").Type<Readonly<{
            cloud_connectors?: Readonly<{
                target_csp?: "azure" | "aws" | "gcp" | undefined;
            } & {
                enabled: boolean;
            }> | undefined;
            resources?: Readonly<{
                requests?: Readonly<{
                    cpu?: string | undefined;
                    memory?: string | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        monitoring_pprof_enabled: import("@kbn/config-schema").Type<boolean | undefined>;
        monitoring_http: import("@kbn/config-schema").Type<Readonly<{
            host?: string | undefined;
            enabled?: boolean | undefined;
            buffer?: Readonly<{} & {
                enabled: boolean;
            }> | undefined;
            port?: number | undefined;
        } & {}> | undefined>;
        monitoring_diagnostics: import("@kbn/config-schema").Type<Readonly<{
            limit?: Readonly<{
                interval?: string | undefined;
                burst?: number | undefined;
            } & {}> | undefined;
            uploader?: Readonly<{
                max_retries?: number | undefined;
                init_dur?: string | undefined;
                max_dur?: string | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        required_versions: import("@kbn/config-schema").Type<Readonly<{} & {
            version: string;
            percentage: number;
        }>[] | null | undefined>;
        is_verifier: import("@kbn/config-schema").Type<boolean | undefined>;
        id: import("@kbn/config-schema").Type<string | undefined>;
        space_ids: import("@kbn/config-schema").Type<string[] | undefined>;
        name: import("@kbn/config-schema").Type<string>;
        namespace: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string | undefined>;
        is_managed: import("@kbn/config-schema").Type<boolean | undefined>;
        has_fleet_server: import("@kbn/config-schema").Type<boolean | undefined>;
        is_default: import("@kbn/config-schema").Type<boolean | undefined>;
        is_default_fleet_server: import("@kbn/config-schema").Type<boolean | undefined>;
        unenroll_timeout: import("@kbn/config-schema").Type<number | undefined>;
        inactivity_timeout: import("@kbn/config-schema").Type<number>;
        monitoring_enabled: import("@kbn/config-schema").Type<("logs" | "metrics" | "traces")[] | undefined>;
        keep_monitoring_alive: import("@kbn/config-schema").Type<boolean | null | undefined>;
        data_output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        monitoring_output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        download_source_id: import("@kbn/config-schema").Type<string | null | undefined>;
        fleet_server_host_id: import("@kbn/config-schema").Type<string | null | undefined>;
        agent_features: import("@kbn/config-schema").Type<Readonly<{} & {
            name: string;
            enabled: boolean;
        }>[] | undefined>;
        is_protected: import("@kbn/config-schema").Type<boolean | undefined>;
        overrides: import("@kbn/config-schema").Type<Record<string, any> | null | undefined>;
    }, "has_agent_version_conditions"> & {
        has_agent_version_conditions: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "supports_agentless" | "force"> & {
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "force" | "bumpRevision"> & {
        force: import("@kbn/config-schema").Type<boolean | undefined>;
        bumpRevision: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
    params: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const CopyAgentPolicyRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        name: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string | undefined>;
    }>;
    params: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const DeleteAgentPolicyRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
};
export declare const DeleteAgentPolicyResponseSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
    name: import("@kbn/config-schema").Type<string>;
}>;
export declare const GetFullAgentPolicyRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        download: import("@kbn/config-schema").Type<boolean | undefined>;
        standalone: import("@kbn/config-schema").Type<boolean | undefined>;
        kubernetes: import("@kbn/config-schema").Type<boolean | undefined>;
        revision: import("@kbn/config-schema").Type<number | undefined>;
    }>;
};
export declare const GetFullAgentPolicyResponseSchema: import("@kbn/config-schema").ObjectType<{
    item: import("@kbn/config-schema").Type<string | Readonly<{
        service?: Readonly<{
            pipelines?: Record<string, Readonly<{
                processors?: string[] | undefined;
                receivers?: string[] | undefined;
                exporters?: string[] | undefined;
            } & {}> | undefined> | undefined;
            extensions?: string[] | undefined;
        } & {}> | undefined;
        fleet?: Readonly<{
            secrets?: Readonly<{
                ssl?: Readonly<{} & {
                    key: Readonly<{
                        id?: string | undefined;
                    } & {}>;
                }> | undefined;
            } & {}> | undefined;
            ssl?: Readonly<{
                key?: string | undefined;
                certificate?: string | undefined;
                certificate_authorities?: string[] | undefined;
                verification_mode?: string | undefined;
                renegotiation?: string | undefined;
            } & {}> | undefined;
            proxy_url?: string | undefined;
            proxy_headers?: Record<string, string | number | boolean> | null | undefined;
        } & {
            hosts: string[];
        }> | Readonly<{} & {
            kibana: Readonly<{
                path?: string | undefined;
            } & {
                hosts: string[];
                protocol: string;
            }>;
        }> | undefined;
        namespaces?: string[] | undefined;
        revision?: number | undefined;
        connectors?: Record<string, any> | undefined;
        signed?: Readonly<{} & {
            data: string;
            signature: string;
        }> | undefined;
        secret_references?: Readonly<{} & {
            id: string;
        }>[] | undefined;
        agent?: Readonly<{
            internal?: any;
            protection?: Readonly<{} & {
                enabled: boolean;
                uninstall_token_hash: string;
                signing_key: string;
            }> | undefined;
            logging?: Readonly<{
                metrics?: Readonly<{
                    period?: string | undefined;
                } & {}> | undefined;
                level?: string | undefined;
                to_files?: boolean | undefined;
                files?: Readonly<{
                    interval?: string | undefined;
                    rotateeverybytes?: number | undefined;
                    keepfiles?: number | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
            limits?: Readonly<{
                go_max_procs?: number | undefined;
            } & {}> | undefined;
        } & {
            monitoring: Readonly<{
                apm?: any;
                namespace?: string | undefined;
                http?: Readonly<{
                    host?: string | undefined;
                    enabled?: boolean | undefined;
                    port?: number | undefined;
                } & {}> | undefined;
                use_output?: string | undefined;
                _runtime_experimental?: string | undefined;
                pprof?: Readonly<{} & {
                    enabled: boolean;
                }> | undefined;
                diagnostics?: Readonly<{
                    limit?: Readonly<{
                        interval?: string | undefined;
                        burst?: number | undefined;
                    } & {}> | undefined;
                    uploader?: Readonly<{
                        max_retries?: number | undefined;
                        init_dur?: string | undefined;
                        max_dur?: string | undefined;
                    } & {}> | undefined;
                } & {}> | undefined;
            } & {
                logs: boolean;
                metrics: boolean;
                enabled: boolean;
                traces: boolean;
            }>;
            download: Readonly<{
                secrets?: Readonly<{
                    ssl?: Readonly<{} & {
                        key: Readonly<{
                            id?: string | undefined;
                        } & {}>;
                    }> | undefined;
                } & {}> | undefined;
                timeout?: string | undefined;
                ssl?: Readonly<{
                    key?: string | undefined;
                    certificate?: string | undefined;
                    certificate_authorities?: string[] | undefined;
                    verification_mode?: string | undefined;
                    renegotiation?: string | undefined;
                } & {}> | undefined;
                proxy_url?: string | undefined;
                proxy_headers?: Record<string, string | number | boolean> | null | undefined;
                auth?: Readonly<{
                    headers?: Readonly<{} & {
                        value: string;
                        key: string;
                    }>[] | undefined;
                    username?: string | undefined;
                    password?: string | undefined;
                    api_key?: string | undefined;
                } & {}> | undefined;
                target_directory?: string | undefined;
            } & {
                sourceURI: string;
            }>;
            features: Record<string, Readonly<{} & {
                enabled: boolean;
            }>>;
        }> | undefined;
        processors?: Record<string, any> | undefined;
        output_permissions?: Record<string, Record<string, any>> | undefined;
        receivers?: Record<string, any> | undefined;
        exporters?: Record<string, any> | undefined;
        extensions?: Record<string, any> | undefined;
    } & {
        id: string;
        inputs: Readonly<{
            streams?: Readonly<{} & {
                id: string;
                data_stream: Readonly<{
                    type?: string | undefined;
                } & {
                    dataset: string;
                }>;
            }>[] | undefined;
            meta?: Readonly<{
                package?: Readonly<{} & {
                    name: string;
                    version: string;
                }> | undefined;
            } & {}> | undefined;
            processors?: Readonly<{} & {
                add_fields: Readonly<{} & {
                    fields: Record<string, string | number>;
                    target: string;
                }>;
            }>[] | undefined;
        } & {
            type: string;
            name: string;
            id: string;
            revision: number;
            data_stream: Readonly<{} & {
                namespace: string;
            }>;
            use_output: string;
            package_policy_id: string;
        }>[];
        outputs: Record<string, Readonly<{
            hosts?: string[] | undefined;
            ca_sha256?: string | null | undefined;
            proxy_url?: string | undefined;
            proxy_headers?: Record<string, string | number | boolean> | null | undefined;
        } & {
            type: string;
        }>>;
    }>>;
}>;
export declare const DownloadFullAgentPolicyResponseSchema: import("@kbn/config-schema").Type<string>;
export declare const GetK8sManifestRequestSchema: {
    query: import("@kbn/config-schema").ObjectType<{
        download: import("@kbn/config-schema").Type<boolean | undefined>;
        fleetServer: import("@kbn/config-schema").Type<string | undefined>;
        enrolToken: import("@kbn/config-schema").Type<string | undefined>;
    }>;
};
export declare const GetK8sManifestResponseScheme: import("@kbn/config-schema").ObjectType<{
    item: import("@kbn/config-schema").Type<string>;
}>;
export declare const GetAgentPolicyOutputsRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        agentPolicyId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const GetListAgentPolicyOutputsRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        ids: import("@kbn/config-schema").Type<string[]>;
    }>;
};
export declare const RunAgentPolicyRevisionsCleanupTaskRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        maxRevisions: import("@kbn/config-schema").Type<number | undefined>;
        maxPolicies: import("@kbn/config-schema").Type<number | undefined>;
    }>;
};
export declare const RunAgentPolicyRevisionsCleanupTaskResponseSchema: import("@kbn/config-schema").ObjectType<{
    success: import("@kbn/config-schema").Type<boolean>;
    totalDeletedRevisions: import("@kbn/config-schema").Type<number>;
}>;
