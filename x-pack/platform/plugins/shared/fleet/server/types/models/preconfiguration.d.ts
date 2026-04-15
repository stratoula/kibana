export declare const PreconfiguredPackagesSchema: import("@kbn/config-schema").Type<Readonly<{
    prerelease?: boolean | undefined;
    skipDataStreamRollover?: boolean | undefined;
} & {
    name: string;
    version: string;
}>[]>;
export declare const PreconfiguredOutputsSchema: import("@kbn/config-schema").Type<(Readonly<{
    config?: Readonly<{} & {}> | undefined;
    secrets?: Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{
                hash?: string | undefined;
            } & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
    ssl?: Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined;
    is_preconfigured?: boolean | undefined;
    ca_sha256?: string | null | undefined;
    otel_exporter_config_yaml?: string | null | undefined;
    is_internal?: boolean | undefined;
    ca_trusted_fingerprint?: string | null | undefined;
    proxy_id?: string | null | undefined;
    shipper?: Readonly<{} & {
        compression_level: number | null;
        disk_queue_enabled: boolean | null;
        disk_queue_path: string | null;
        disk_queue_max_size: number | null;
        disk_queue_encryption_enabled: boolean | null;
        disk_queue_compression_enabled: boolean | null;
        loadbalance: boolean | null;
        mem_queue_events: number | null;
        queue_flush_timeout: number | null;
        max_batch_bytes: number | null;
    }> | null | undefined;
    allow_edit?: string[] | undefined;
    preset?: "scale" | "custom" | "balanced" | "throughput" | "latency" | undefined;
    write_to_logs_streams?: boolean | null | undefined;
} & {
    type: "elasticsearch";
    name: string;
    id: string;
    hosts: string[];
    is_default: boolean;
    is_default_monitoring: boolean;
    config_yaml: never;
}> | Readonly<{
    config?: Readonly<{} & {}> | undefined;
    secrets?: Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{
                hash?: string | undefined;
            } & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
    ssl?: Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined;
    is_preconfigured?: boolean | undefined;
    ca_sha256?: string | null | undefined;
    otel_exporter_config_yaml?: string | null | undefined;
    is_internal?: boolean | undefined;
    ca_trusted_fingerprint?: string | null | undefined;
    proxy_id?: string | null | undefined;
    shipper?: Readonly<{} & {
        compression_level: number | null;
        disk_queue_enabled: boolean | null;
        disk_queue_path: string | null;
        disk_queue_max_size: number | null;
        disk_queue_encryption_enabled: boolean | null;
        disk_queue_compression_enabled: boolean | null;
        loadbalance: boolean | null;
        mem_queue_events: number | null;
        queue_flush_timeout: number | null;
        max_batch_bytes: number | null;
    }> | null | undefined;
    allow_edit?: string[] | undefined;
} & {
    type: "logstash";
    name: string;
    id: string;
    hosts: string[];
    is_default: boolean;
    is_default_monitoring: boolean;
    config_yaml: never;
}> | Readonly<{
    version?: string | undefined;
    key?: string | undefined;
    headers?: Readonly<{} & {
        value: string;
        key: string;
    }>[] | undefined;
    partition?: "hash" | "random" | "round_robin" | undefined;
    username?: string | null | undefined;
    config?: Readonly<{} & {}> | undefined;
    secrets?: Readonly<{
        password?: string | Readonly<{
            hash?: string | undefined;
        } & {
            id: string;
        }> | undefined;
        ssl?: Readonly<{} & {
            key: string | Readonly<{
                hash?: string | undefined;
            } & {
                id: string;
            }>;
        }> | undefined;
    } & {}> | undefined;
    timeout?: number | undefined;
    password?: string | null | undefined;
    hash?: Readonly<{
        hash?: string | undefined;
        random?: boolean | undefined;
    } & {}> | undefined;
    ssl?: Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined;
    random?: Readonly<{
        group_events?: number | undefined;
    } & {}> | undefined;
    round_robin?: Readonly<{
        group_events?: number | undefined;
    } & {}> | undefined;
    is_preconfigured?: boolean | undefined;
    ca_sha256?: string | null | undefined;
    otel_exporter_config_yaml?: string | null | undefined;
    is_internal?: boolean | undefined;
    ca_trusted_fingerprint?: string | null | undefined;
    proxy_id?: string | null | undefined;
    shipper?: Readonly<{} & {
        compression_level: number | null;
        disk_queue_enabled: boolean | null;
        disk_queue_path: string | null;
        disk_queue_max_size: number | null;
        disk_queue_encryption_enabled: boolean | null;
        disk_queue_compression_enabled: boolean | null;
        loadbalance: boolean | null;
        mem_queue_events: number | null;
        queue_flush_timeout: number | null;
        max_batch_bytes: number | null;
    }> | null | undefined;
    allow_edit?: string[] | undefined;
    client_id?: string | undefined;
    compression?: "none" | "snappy" | "lz4" | "gzip" | undefined;
    compression_level?: number | undefined;
    connection_type?: "plaintext" | "encryption" | undefined;
    sasl?: Readonly<{
        mechanism?: "PLAIN" | "SCRAM-SHA-256" | "SCRAM-SHA-512" | undefined;
    } & {}> | null | undefined;
    topic?: string | undefined;
    broker_timeout?: number | undefined;
    required_acks?: 0 | 1 | -1 | undefined;
} & {
    type: "kafka";
    name: string;
    id: string;
    hosts: string[];
    is_default: boolean;
    is_default_monitoring: boolean;
    config_yaml: never;
    auth_type: "none" | "user_pass" | "ssl" | "kerberos";
}> | Readonly<{
    config?: Readonly<{} & {}> | undefined;
    secrets?: Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{
                hash?: string | undefined;
            } & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
        service_token?: string | Readonly<{
            hash?: string | undefined;
        } & {
            id: string;
        }> | undefined;
    } & {}> | undefined;
    ssl?: Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined;
    service_token?: string | null | undefined;
    is_preconfigured?: boolean | undefined;
    ca_sha256?: string | null | undefined;
    otel_exporter_config_yaml?: string | null | undefined;
    is_internal?: boolean | undefined;
    ca_trusted_fingerprint?: string | null | undefined;
    proxy_id?: string | null | undefined;
    shipper?: Readonly<{} & {
        compression_level: number | null;
        disk_queue_enabled: boolean | null;
        disk_queue_path: string | null;
        disk_queue_max_size: number | null;
        disk_queue_encryption_enabled: boolean | null;
        disk_queue_compression_enabled: boolean | null;
        loadbalance: boolean | null;
        mem_queue_events: number | null;
        queue_flush_timeout: number | null;
        max_batch_bytes: number | null;
    }> | null | undefined;
    allow_edit?: string[] | undefined;
    preset?: "scale" | "custom" | "balanced" | "throughput" | "latency" | undefined;
    write_to_logs_streams?: boolean | null | undefined;
    sync_integrations?: boolean | undefined;
    kibana_url?: string | null | undefined;
    kibana_api_key?: string | null | undefined;
    sync_uninstalled_integrations?: boolean | undefined;
} & {
    type: "remote_elasticsearch";
    name: string;
    id: string;
    hosts: string[];
    is_default: boolean;
    is_default_monitoring: boolean;
    config_yaml: never;
}>)[]>;
export declare const PreconfiguredFleetServerHostsSchema: import("@kbn/config-schema").Type<Readonly<{
    secrets?: Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
            es_key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
            agent_key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
    ssl?: Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        es_key?: string | undefined;
        agent_key?: string | undefined;
        es_certificate_authorities?: string[] | undefined;
        es_certificate?: string | undefined;
        agent_certificate_authorities?: string[] | undefined;
        agent_certificate?: string | undefined;
        client_auth?: "none" | "required" | "optional" | undefined;
    } & {}> | null | undefined;
    is_internal?: boolean | undefined;
} & {
    name: string;
    id: string;
    is_default: boolean;
    proxy_id: string | null;
    host_urls: string[];
}>[]>;
export declare const PreconfiguredFleetProxiesSchema: import("@kbn/config-schema").Type<Readonly<{
    certificate?: string | undefined;
    proxy_headers?: Record<string, string | number | boolean> | undefined;
    certificate_authorities?: string | undefined;
    certificate_key?: string | undefined;
} & {
    name: string;
    id: string;
    url: string;
}>[]>;
export declare const PreconfiguredAgentPoliciesSchema: import("@kbn/config-schema").Type<Readonly<{
    id?: string | number | undefined;
    namespace?: string | undefined;
    description?: string | undefined;
    overrides?: Record<string, any> | null | undefined;
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
    data_output_id?: string | undefined;
    monitoring_output_id?: string | undefined;
    download_source_id?: string | null | undefined;
    fleet_server_host_id?: string | null | undefined;
    agent_features?: Readonly<{} & {
        name: string;
        enabled: boolean;
    }>[] | undefined;
    is_protected?: boolean | undefined;
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
    package_policies?: (Readonly<{
        id?: string | number | undefined;
        namespace?: string | undefined;
        description?: string | undefined;
        inputs?: Readonly<{
            streams?: Readonly<{
                enabled?: boolean | undefined;
                vars?: Readonly<{
                    type?: string | undefined;
                    value?: any;
                    frozen?: boolean | undefined;
                } & {
                    name: string;
                }>[] | undefined;
                keep_enabled?: boolean | undefined;
            } & {
                data_stream: Readonly<{
                    type?: string | undefined;
                } & {
                    dataset: string;
                }>;
            }>[] | undefined;
            enabled?: boolean | undefined;
            vars?: Readonly<{
                type?: string | undefined;
                value?: any;
                frozen?: boolean | undefined;
            } & {
                name: string;
            }>[] | undefined;
            keep_enabled?: boolean | undefined;
        } & {
            type: string;
        }>[] | undefined;
        output_id?: string | null | undefined;
    } & {
        name: string;
        package: Readonly<{} & {
            name: string;
        }>;
    }> | Readonly<{
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
        output_id?: string | null | undefined;
        supports_agentless?: boolean | null | undefined;
        additional_datastreams_permissions?: string[] | null | undefined;
    } & {
        name: string;
        id: string;
        package: Readonly<{} & {
            name: string;
        }>;
    }>)[] | undefined;
    space_id?: string | undefined;
} & {
    name: string;
    inactivity_timeout: number;
}>[]>;
export declare const PreconfiguredSpaceSettingsSchema: import("@kbn/config-schema").Type<Readonly<{} & {
    space_id: string;
    allowed_namespace_prefixes: string[] | null;
}>[]>;
