import type { DocLinks } from '@kbn/doc-links';
export declare class DocLinksService {
    readonly agentBuilder: string;
    readonly getStarted: string;
    readonly models: string;
    readonly chat: string;
    readonly agentBuilderAgents: string;
    readonly tools: string;
    readonly programmaticAccess: string;
    readonly kibanaApi: string;
    readonly mcpServer: string;
    readonly a2aServer: string;
    readonly limitationsKnownIssues: string;
    readonly limitationsKnownIssuesConversationLengthExceeded: string;
    constructor(docLinks: DocLinks);
}
