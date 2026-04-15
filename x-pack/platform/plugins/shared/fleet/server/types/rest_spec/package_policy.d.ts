export declare const GetPackagePoliciesRequestSchema: {
    query: import("@kbn/config-schema").ObjectType<{
        page: import("@kbn/config-schema").Type<number | undefined>;
        perPage: import("@kbn/config-schema").Type<number | undefined>;
        sortField: import("@kbn/config-schema").Type<string | undefined>;
        sortOrder: import("@kbn/config-schema").Type<"desc" | "asc" | undefined>;
        showUpgradeable: import("@kbn/config-schema").Type<boolean | undefined>;
        kuery: import("@kbn/config-schema").Type<string | undefined>;
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
        withAgentCount: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
};
export declare const BulkGetPackagePoliciesRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        ids: import("@kbn/config-schema").Type<string[]>;
        ignoreMissing: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const BulkGetPackagePoliciesResponseBodySchema: import("@kbn/config-schema").ObjectType<{
    items: import("@kbn/config-schema").Type<Readonly<{
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
    }>[]>;
}>;
export declare const GetOnePackagePolicyRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        packagePolicyId: import("@kbn/config-schema").Type<string>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const CreatePackagePolicyRequestSchema: {
    body: import("@kbn/config-schema").Type<Readonly<{
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
    }>>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
};
export declare const CreatePackagePolicyResponseSchema: import("@kbn/config-schema").ObjectType<{
    item: import("@kbn/config-schema").ObjectType<Omit<{
        id: import("@kbn/config-schema").Type<string>;
        version: import("@kbn/config-schema").Type<string | undefined>;
        revision: import("@kbn/config-schema").Type<number>;
        updated_at: import("@kbn/config-schema").Type<string>;
        updated_by: import("@kbn/config-schema").Type<string>;
        created_at: import("@kbn/config-schema").Type<string>;
        created_by: import("@kbn/config-schema").Type<string>;
        elasticsearch: import("@kbn/config-schema").Type<Readonly<{
            privileges?: Readonly<{
                cluster?: string[] | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
        inputs: import("@kbn/config-schema").Type<Readonly<{
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
        }>[]>;
        secret_references: import("@kbn/config-schema").Type<Readonly<{} & {
            id: string;
        }>[] | undefined>;
        name: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string | undefined>;
        namespace: import("@kbn/config-schema").Type<string | undefined>;
        policy_id: import("@kbn/config-schema").Type<string | null | undefined>;
        policy_ids: import("@kbn/config-schema").Type<string[] | undefined>;
        output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        cloud_connector_id: import("@kbn/config-schema").Type<string | null | undefined>;
        cloud_connector_name: import("@kbn/config-schema").Type<string | null | undefined>;
        enabled: import("@kbn/config-schema").Type<boolean>;
        is_managed: import("@kbn/config-schema").Type<boolean | undefined>;
        package: import("@kbn/config-schema").Type<Readonly<{
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
        }> | undefined>;
        vars: import("@kbn/config-schema").Type<Record<string, Readonly<{
            type?: string | undefined;
            value?: any;
            frozen?: boolean | undefined;
        } & {}>> | undefined>;
        var_group_selections: import("@kbn/config-schema").Type<Record<string, string> | undefined>;
        overrides: import("@kbn/config-schema").Type<Readonly<{
            inputs?: Record<string, any> | undefined;
        } & {}> | null | undefined>;
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        supports_cloud_connector: import("@kbn/config-schema").Type<boolean | null | undefined>;
        additional_datastreams_permissions: import("@kbn/config-schema").Type<string[] | null | undefined>;
        package_agent_version_condition: import("@kbn/config-schema").Type<string | undefined>;
    }, "agents" | "vars" | "inputs" | "spaceIds"> & {
        agents: import("@kbn/config-schema").Type<number | undefined>;
        vars: import("@kbn/config-schema").Type<Record<string, Readonly<{
            type?: string | undefined;
            value?: any;
            frozen?: boolean | undefined;
        } & {}>> | Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
            id: string;
            isSecretRef: boolean;
        }> | null> | undefined>;
        inputs: import("@kbn/config-schema").Type<Record<string, Readonly<{
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
        }>[] | undefined>;
        spaceIds: import("@kbn/config-schema").Type<string[] | undefined>;
    }>;
}>;
export declare const UpdatePackagePolicyRequestSchema: {
    body: import("@kbn/config-schema").Type<Readonly<{
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
    }> | Readonly<{
        name?: string | undefined;
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
        enabled?: boolean | undefined;
        overrides?: Readonly<{
            inputs?: Record<string, any> | undefined;
        } & {}> | null | undefined;
        vars?: Record<string, Readonly<{
            type?: string | undefined;
            value?: any;
            frozen?: boolean | undefined;
        } & {}>> | undefined;
        inputs?: Readonly<{
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
        force?: boolean | undefined;
    } & {}>>;
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy" | undefined>;
    }>;
    params: import("@kbn/config-schema").ObjectType<{
        packagePolicyId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const DeletePackagePoliciesRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        packagePolicyIds: import("@kbn/config-schema").Type<string[]>;
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
};
export declare const DeletePackagePoliciesResponseBodySchema: import("@kbn/config-schema").Type<Readonly<{
    name?: string | undefined;
    body?: Readonly<{} & {
        message: string;
    }> | undefined;
    policy_id?: string | null | undefined;
    output_id?: string | null | undefined;
    statusCode?: number | undefined;
} & {
    id: string;
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
    success: boolean;
    policy_ids: string[];
}>[]>;
export declare const DeleteOnePackagePolicyRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        packagePolicyId: import("@kbn/config-schema").Type<string>;
    }>;
    query: import("@kbn/config-schema").ObjectType<{
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
};
export declare const DeleteOnePackagePolicyResponseSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
}>;
export declare const UpgradePackagePoliciesRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        packagePolicyIds: import("@kbn/config-schema").Type<string[]>;
    }>;
};
export declare const UpgradePackagePoliciesResponseBodySchema: import("@kbn/config-schema").Type<Readonly<{
    name?: string | undefined;
    body?: Readonly<{} & {
        message: string;
    }> | undefined;
    statusCode?: number | undefined;
} & {
    id: string;
    success: boolean;
}>[]>;
export declare const DryRunPackagePoliciesRequestSchema: {
    body: import("@kbn/config-schema").ObjectType<{
        packagePolicyIds: import("@kbn/config-schema").Type<string[]>;
        packageVersion: import("@kbn/config-schema").Type<string | undefined>;
    }>;
};
export declare const DryRunPackagePoliciesResponseBodySchema: import("@kbn/config-schema").Type<Readonly<{
    name?: string | undefined;
    body?: Readonly<{} & {
        message: string;
    }> | undefined;
    diff?: (Readonly<{
        version?: string | undefined;
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
        revision?: number | undefined;
        created_by?: string | undefined;
        updated_by?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        errors?: Readonly<{
            key?: string | undefined;
        } & {
            message: string;
        }>[] | undefined;
        overrides?: Readonly<{
            inputs?: Record<string, any> | undefined;
        } & {}> | null | undefined;
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
        package_agent_version_condition?: string | undefined;
        force?: boolean | undefined;
        missingVars?: string[] | undefined;
    } & {
        name: string;
        enabled: boolean;
        inputs: Readonly<{
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
        }>[];
    }> | Readonly<{
        version?: string | undefined;
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
        enabled: boolean;
        revision: number;
        created_by: string;
        updated_by: string;
        created_at: string;
        updated_at: string;
    }>)[] | undefined;
    statusCode?: number | undefined;
    agent_diff?: Readonly<{
        streams?: Readonly<{
            id?: string | undefined;
        } & {
            data_stream: Readonly<{
                type?: string | undefined;
            } & {
                dataset: string;
            }>;
        }>[] | undefined;
        meta?: Readonly<{} & {
            package: Readonly<{} & {
                name: string;
                version: string;
            }>;
        }> | undefined;
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
    }>[][] | undefined;
} & {
    hasErrors: boolean;
}>[]>;
