export declare const GetOneOutputRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        outputId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const DeleteOutputRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        outputId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const DeleteOutputResponseSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
}>;
export declare const GenerateLogstashApiKeyResponseSchema: import("@kbn/config-schema").ObjectType<{
    api_key: import("@kbn/config-schema").Type<string>;
}>;
export declare const GetOutputsRequestSchema: {};
export declare const GetOutputsResponseSchema: import("@kbn/config-schema").ObjectType<{
    items: import("@kbn/config-schema").Type<any[]>;
    total: import("@kbn/config-schema").Type<number>;
    page: import("@kbn/config-schema").Type<number>;
    perPage: import("@kbn/config-schema").Type<number>;
}>;
export declare const PostOutputRequestSchema: {
    body: import("@kbn/config-schema").Type<Readonly<{
        id?: string | undefined;
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
        config_yaml?: string | null | undefined;
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
        hosts: string[];
        is_default: boolean;
        is_default_monitoring: boolean;
    }> | Readonly<{
        id?: string | undefined;
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
        config_yaml?: string | null | undefined;
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
        hosts: string[];
        is_default: boolean;
        is_default_monitoring: boolean;
    }> | Readonly<{
        id?: string | undefined;
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
        config_yaml?: string | null | undefined;
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
        hosts: string[];
        is_default: boolean;
        is_default_monitoring: boolean;
    }> | Readonly<{
        version?: string | undefined;
        id?: string | undefined;
        key?: string | undefined;
        headers?: Readonly<{} & {
            value: string;
            key: string;
        }>[] | undefined;
        partition?: "hash" | "random" | "round_robin" | undefined;
        username?: string | null | undefined;
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
        config_yaml?: string | null | undefined;
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
        hosts: string[];
        is_default: boolean;
        is_default_monitoring: boolean;
        auth_type: "none" | "user_pass" | "ssl" | "kerberos";
    }>>;
};
export declare const PutOutputRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        outputId: import("@kbn/config-schema").Type<string>;
    }>;
    body: import("@kbn/config-schema").Type<Readonly<{
        type?: "elasticsearch" | undefined;
        name?: string | undefined;
        id?: string | undefined;
        hosts?: string[] | undefined;
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
        is_default?: boolean | undefined;
        is_preconfigured?: boolean | undefined;
        ca_sha256?: string | null | undefined;
        otel_exporter_config_yaml?: string | null | undefined;
        is_default_monitoring?: boolean | undefined;
        is_internal?: boolean | undefined;
        ca_trusted_fingerprint?: string | null | undefined;
        config_yaml?: string | null | undefined;
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
    } & {}> | Readonly<{
        type?: "remote_elasticsearch" | undefined;
        name?: string | undefined;
        id?: string | undefined;
        hosts?: string[] | undefined;
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
        is_default?: boolean | undefined;
        is_preconfigured?: boolean | undefined;
        ca_sha256?: string | null | undefined;
        otel_exporter_config_yaml?: string | null | undefined;
        is_default_monitoring?: boolean | undefined;
        is_internal?: boolean | undefined;
        ca_trusted_fingerprint?: string | null | undefined;
        config_yaml?: string | null | undefined;
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
    } & {}> | Readonly<{
        type?: "logstash" | undefined;
        name?: string | undefined;
        id?: string | undefined;
        hosts?: string[] | undefined;
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
        is_default?: boolean | undefined;
        is_preconfigured?: boolean | undefined;
        ca_sha256?: string | null | undefined;
        otel_exporter_config_yaml?: string | null | undefined;
        is_default_monitoring?: boolean | undefined;
        is_internal?: boolean | undefined;
        ca_trusted_fingerprint?: string | null | undefined;
        config_yaml?: string | null | undefined;
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
    } & {}> | Readonly<{
        type?: "kafka" | undefined;
        version?: string | undefined;
        id?: string | undefined;
        key?: string | undefined;
        headers?: Readonly<{} & {
            value: string;
            key: string;
        }>[] | undefined;
        partition?: "hash" | "random" | "round_robin" | undefined;
        username?: string | null | undefined;
        hosts?: string[] | undefined;
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
        config_yaml?: string | null | undefined;
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
        auth_type?: "none" | "user_pass" | "ssl" | "kerberos" | undefined;
        connection_type?: "plaintext" | "encryption" | undefined;
        sasl?: Readonly<{
            mechanism?: "PLAIN" | "SCRAM-SHA-256" | "SCRAM-SHA-512" | undefined;
        } & {}> | null | undefined;
        topic?: string | undefined;
        broker_timeout?: number | undefined;
        required_acks?: 0 | 1 | -1 | undefined;
    } & {
        name: string;
        is_default: boolean;
        is_default_monitoring: boolean;
    }>>;
};
export declare const GetLatestOutputHealthRequestSchema: {
    params: import("@kbn/config-schema").ObjectType<{
        outputId: import("@kbn/config-schema").Type<string>;
    }>;
};
export declare const GetLatestOutputHealthResponseSchema: import("@kbn/config-schema").ObjectType<{
    state: import("@kbn/config-schema").Type<string>;
    message: import("@kbn/config-schema").Type<string>;
    timestamp: import("@kbn/config-schema").Type<string>;
}>;
