import { type TypeOf } from '@kbn/config-schema';
export declare const CreateAgentlessPolicyRequestSchema: {
    query: import("@kbn/config-schema").ObjectType<{
        format: import("@kbn/config-schema").Type<"simplified" | "legacy">;
    }>;
    body: import("@kbn/config-schema").ObjectType<Omit<Omit<{
        id: import("@kbn/config-schema").Type<string | undefined>;
        name: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string | undefined>;
        namespace: import("@kbn/config-schema").Type<string | undefined>;
        output_id: import("@kbn/config-schema").Type<string | null | undefined>;
        vars: import("@kbn/config-schema").Type<Record<string, string | number | boolean | string[] | number[] | Readonly<{} & {
            id: string;
            isSecretRef: boolean;
        }> | null> | undefined>;
        var_group_selections: import("@kbn/config-schema").Type<Record<string, string> | undefined>;
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
        } & {}>> | undefined>;
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        additional_datastreams_permissions: import("@kbn/config-schema").Type<string[] | null | undefined>;
    }, "package" | "policy_id" | "policy_ids" | "supports_agentless" | "force"> & {
        package: import("@kbn/config-schema").ObjectType<{
            name: import("@kbn/config-schema").Type<string>;
            title: import("@kbn/config-schema").Type<string | undefined>;
            version: import("@kbn/config-schema").Type<string>;
            experimental_data_stream_features: import("@kbn/config-schema").Type<Readonly<{} & {
                features: Readonly<{
                    synthetic_source?: boolean | undefined;
                    tsdb?: boolean | undefined;
                    doc_value_only_numeric?: boolean | undefined;
                    doc_value_only_other?: boolean | undefined;
                } & {}>;
                data_stream: string;
            }>[] | undefined>;
            requires_root: import("@kbn/config-schema").Type<boolean | undefined>;
            fips_compatible: import("@kbn/config-schema").Type<boolean | undefined>;
        }>;
        policy_id: import("@kbn/config-schema").Type<string | null | undefined>;
        policy_ids: import("@kbn/config-schema").Type<string[] | undefined>;
        supports_agentless: import("@kbn/config-schema").Type<boolean | null | undefined>;
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "policy_template" | "policy_id" | "policy_ids" | "output_id" | "supports_agentless" | "cloud_connector"> & {
        policy_template: import("@kbn/config-schema").Type<string | undefined>;
        cloud_connector: import("@kbn/config-schema").Type<Readonly<{
            name?: string | undefined;
            cloud_connector_id?: string | undefined;
            target_csp?: "azure" | "aws" | "gcp" | undefined;
        } & {
            enabled: boolean;
        }> | undefined>;
    }>;
};
export declare const DeleteAgentlessPolicyRequestSchema: {
    query: import("@kbn/config-schema").ObjectType<{
        force: import("@kbn/config-schema").Type<boolean | undefined>;
    }>;
    params: import("@kbn/config-schema").ObjectType<{
        policyId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const DeleteAgentlessPolicyResponseSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
}>;
export declare const CreateAgentlessPolicyResponseSchema: import("@kbn/config-schema").ObjectType<{
    item: import("@kbn/config-schema").ObjectType<Omit<Omit<{
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
    }, never> & {}>;
}>;
export type CreateAgentlessPolicyResponse = TypeOf<typeof CreateAgentlessPolicyResponseSchema>;
export interface CreateAgentlessPolicyRequest {
    body: TypeOf<typeof CreateAgentlessPolicyRequestSchema.body>;
    query: TypeOf<typeof CreateAgentlessPolicyRequestSchema.query>;
}
export type DeleteAgentlessPolicyResponse = TypeOf<typeof DeleteAgentlessPolicyResponseSchema>;
export interface DeleteAgentlessPolicyRequest {
    params: TypeOf<typeof DeleteAgentlessPolicyRequestSchema.params>;
    query: TypeOf<typeof DeleteAgentlessPolicyRequestSchema.query>;
}
