export declare const DEFAULT_SERVICE_GRAPH: {
    edges: ({
        source: string;
        target: string;
        protocol: "http";
    } | {
        source: string;
        target: string;
        protocol: "grpc";
    } | {
        source: string;
        target: string;
        protocol: "kafka";
    })[];
    services: ({
        readonly name: "claim-intake";
        readonly runtime: "node";
        readonly infraDeps: ["kafka", "postgres"];
        readonly version: "1.0.0";
        readonly deployment: {
            readonly k8s: {
                readonly namespace: "claims";
            };
            readonly os: {
                readonly type: "linux";
                readonly name: "Debian GNU/Linux";
                readonly version: "12 (bookworm)";
            };
        };
        readonly serviceLogs: {
            readonly success: ["Claim intake successful", "Claim intake completed"];
            readonly error: ["Failed to persist claim to database: connection timeout", "Claim validation failed: missing required field \"policy_id\"", "Unhandled error in claim pipeline: request processing aborted"];
        };
    } | {
        readonly name: "policy-lookup";
        readonly runtime: "java";
        readonly infraDeps: ["postgres", "redis"];
        readonly version: "1.0.0";
        readonly deployment: {
            readonly k8s: {
                readonly namespace: "claims";
            };
            readonly os?: undefined;
        };
        readonly serviceLogs?: undefined;
    } | {
        readonly name: "fraud-check";
        readonly runtime: "python";
        readonly infraDeps: ["elasticsearch", "mongodb"];
        readonly version: "1.0.0";
        readonly deployment: {
            readonly k8s: {
                readonly namespace: "claims";
            };
            readonly os?: undefined;
        };
        readonly serviceLogs: {
            readonly success: ["Fraud check passed", "No fraud detected", "Risk score evaluated: insufficient transaction history, defaulting to manual review"];
            readonly error: ["Fraud detection model timeout: upstream scoring service unavailable", "Fraud check failed: scoring pipeline returned unexpected error"];
        };
    } | {
        readonly name: "payment-processor";
        readonly runtime: "go";
        readonly infraDeps: ["kafka", "postgres"];
        readonly version: "1.0.0";
        readonly deployment: {
            readonly k8s: {
                readonly namespace: "payments";
            };
            readonly os?: undefined;
        };
        readonly serviceLogs: {
            readonly success: ["Payment processed successfully", "Payment completed"];
            readonly error: ["Payment gateway rejected transaction: insufficient funds", "Duplicate payment detected: idempotency key already used", "Payment processing failed: downstream acquirer timeout after 30s", "Payment persistence failed: database transaction rolled back after timeout", "Event publish failed: unable to reach Kafka broker after 3 retries"];
        };
    } | {
        readonly name: "notification-dispatch";
        readonly runtime: "node";
        readonly infraDeps: ["kafka", "redis"];
        readonly version: "1.0.0";
        readonly deployment: {
            readonly k8s: {
                readonly namespace: "notifications";
            };
            readonly os?: undefined;
        };
        readonly serviceLogs?: undefined;
    })[];
};
