export declare function validateLogstashHost(val: string): "Host address must begin with a domain name or IP address" | "Invalid host" | "Invalid Logstash host" | undefined;
export declare const validateKafkaHost: (input: string) => string | undefined;
/**
 * Elasticsearch schemas
 */
export declare const ElasticSearchSchema: {
    type: import("@kbn/config-schema").Type<"elasticsearch">;
    hosts: import("@kbn/config-schema").Type<string[]>;
    preset: import("@kbn/config-schema").Type<"scale" | "custom" | "balanced" | "throughput" | "latency" | undefined>;
    write_to_logs_streams: import("@kbn/config-schema").Type<boolean | null | undefined>;
    id: import("@kbn/config-schema").Type<string | undefined>;
    name: import("@kbn/config-schema").Type<string>;
    is_default: import("@kbn/config-schema").Type<boolean>;
    is_default_monitoring: import("@kbn/config-schema").Type<boolean>;
    is_internal: import("@kbn/config-schema").Type<boolean | undefined>;
    is_preconfigured: import("@kbn/config-schema").Type<boolean | undefined>;
    ca_sha256: import("@kbn/config-schema").Type<string | null | undefined>;
    ca_trusted_fingerprint: import("@kbn/config-schema").Type<string | null | undefined>;
    config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    otel_exporter_config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    ssl: import("@kbn/config-schema").Type<Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined>;
    proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
    shipper: import("@kbn/config-schema").Type<Readonly<{} & {
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
    }> | null | undefined>;
    allow_edit: import("@kbn/config-schema").Type<string[] | undefined>;
    secrets: import("@kbn/config-schema").Type<Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{
                hash?: string | undefined;
            } & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
};
/**
 * Remote Elasticsearch schemas
 */
export declare const RemoteElasticSearchSchema: {
    type: import("@kbn/config-schema").Type<"remote_elasticsearch">;
    service_token: import("@kbn/config-schema").Type<string | null | undefined>;
    secrets: import("@kbn/config-schema").Type<Readonly<{
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
    } & {}> | undefined>;
    sync_integrations: import("@kbn/config-schema").Type<boolean | undefined>;
    kibana_url: import("@kbn/config-schema").Type<string | null | undefined>;
    kibana_api_key: import("@kbn/config-schema").Type<string | null | undefined>;
    sync_uninstalled_integrations: import("@kbn/config-schema").Type<boolean | undefined>;
    hosts: import("@kbn/config-schema").Type<string[]>;
    preset: import("@kbn/config-schema").Type<"scale" | "custom" | "balanced" | "throughput" | "latency" | undefined>;
    write_to_logs_streams: import("@kbn/config-schema").Type<boolean | null | undefined>;
    id: import("@kbn/config-schema").Type<string | undefined>;
    name: import("@kbn/config-schema").Type<string>;
    is_default: import("@kbn/config-schema").Type<boolean>;
    is_default_monitoring: import("@kbn/config-schema").Type<boolean>;
    is_internal: import("@kbn/config-schema").Type<boolean | undefined>;
    is_preconfigured: import("@kbn/config-schema").Type<boolean | undefined>;
    ca_sha256: import("@kbn/config-schema").Type<string | null | undefined>;
    ca_trusted_fingerprint: import("@kbn/config-schema").Type<string | null | undefined>;
    config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    otel_exporter_config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    ssl: import("@kbn/config-schema").Type<Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined>;
    proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
    shipper: import("@kbn/config-schema").Type<Readonly<{} & {
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
    }> | null | undefined>;
    allow_edit: import("@kbn/config-schema").Type<string[] | undefined>;
};
/**
 * Logstash schemas
 */
export declare const LogstashSchema: {
    type: import("@kbn/config-schema").Type<"logstash">;
    hosts: import("@kbn/config-schema").Type<string[]>;
    id: import("@kbn/config-schema").Type<string | undefined>;
    name: import("@kbn/config-schema").Type<string>;
    is_default: import("@kbn/config-schema").Type<boolean>;
    is_default_monitoring: import("@kbn/config-schema").Type<boolean>;
    is_internal: import("@kbn/config-schema").Type<boolean | undefined>;
    is_preconfigured: import("@kbn/config-schema").Type<boolean | undefined>;
    ca_sha256: import("@kbn/config-schema").Type<string | null | undefined>;
    ca_trusted_fingerprint: import("@kbn/config-schema").Type<string | null | undefined>;
    config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    otel_exporter_config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    ssl: import("@kbn/config-schema").Type<Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined>;
    proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
    shipper: import("@kbn/config-schema").Type<Readonly<{} & {
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
    }> | null | undefined>;
    allow_edit: import("@kbn/config-schema").Type<string[] | undefined>;
    secrets: import("@kbn/config-schema").Type<Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{
                hash?: string | undefined;
            } & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
};
export declare const KafkaSchema: {
    type: import("@kbn/config-schema").Type<"kafka">;
    hosts: import("@kbn/config-schema").Type<string[]>;
    version: import("@kbn/config-schema").Type<string | undefined>;
    key: import("@kbn/config-schema").Type<string | undefined>;
    compression: import("@kbn/config-schema").Type<"none" | "snappy" | "lz4" | "gzip" | undefined>;
    compression_level: import("@kbn/config-schema").Type<number | undefined>;
    client_id: import("@kbn/config-schema").Type<string | undefined>;
    auth_type: import("@kbn/config-schema").Type<"none" | "user_pass" | "ssl" | "kerberos">;
    connection_type: import("@kbn/config-schema").Type<"plaintext" | "encryption" | undefined>;
    username: import("@kbn/config-schema").Type<string | null | undefined>;
    password: import("@kbn/config-schema").Type<string | null | undefined>;
    sasl: import("@kbn/config-schema").Type<Readonly<{
        mechanism?: "PLAIN" | "SCRAM-SHA-256" | "SCRAM-SHA-512" | undefined;
    } & {}> | null | undefined>;
    partition: import("@kbn/config-schema").Type<"hash" | "random" | "round_robin" | undefined>;
    random: import("@kbn/config-schema").Type<Readonly<{
        group_events?: number | undefined;
    } & {}> | undefined>;
    round_robin: import("@kbn/config-schema").Type<Readonly<{
        group_events?: number | undefined;
    } & {}> | undefined>;
    hash: import("@kbn/config-schema").Type<Readonly<{
        hash?: string | undefined;
        random?: boolean | undefined;
    } & {}> | undefined>;
    topic: import("@kbn/config-schema").Type<string | undefined>;
    headers: import("@kbn/config-schema").Type<Readonly<{} & {
        value: string;
        key: string;
    }>[] | undefined>;
    timeout: import("@kbn/config-schema").Type<number | undefined>;
    broker_timeout: import("@kbn/config-schema").Type<number | undefined>;
    required_acks: import("@kbn/config-schema").Type<0 | 1 | -1 | undefined>;
    secrets: import("@kbn/config-schema").Type<Readonly<{
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
    } & {}> | undefined>;
    id: import("@kbn/config-schema").Type<string | undefined>;
    name: import("@kbn/config-schema").Type<string>;
    is_default: import("@kbn/config-schema").Type<boolean>;
    is_default_monitoring: import("@kbn/config-schema").Type<boolean>;
    is_internal: import("@kbn/config-schema").Type<boolean | undefined>;
    is_preconfigured: import("@kbn/config-schema").Type<boolean | undefined>;
    ca_sha256: import("@kbn/config-schema").Type<string | null | undefined>;
    ca_trusted_fingerprint: import("@kbn/config-schema").Type<string | null | undefined>;
    config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    otel_exporter_config_yaml: import("@kbn/config-schema").Type<string | null | undefined>;
    ssl: import("@kbn/config-schema").Type<Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
        verification_mode?: "none" | "full" | "strict" | "certificate" | undefined;
    } & {}> | null | undefined>;
    proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
    shipper: import("@kbn/config-schema").Type<Readonly<{} & {
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
    }> | null | undefined>;
    allow_edit: import("@kbn/config-schema").Type<string[] | undefined>;
};
export declare const OutputSchema: import("@kbn/config-schema").Type<Readonly<{
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
export declare const NewOutputSchema: import("@kbn/config-schema").Type<Readonly<{
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
export declare const OutputResponseSchema: import("@kbn/config-schema").ObjectType<{
    item: import("@kbn/config-schema").Type<Readonly<{
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
}>;
export declare const UpdateOutputSchema: import("@kbn/config-schema").Type<Readonly<{
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
