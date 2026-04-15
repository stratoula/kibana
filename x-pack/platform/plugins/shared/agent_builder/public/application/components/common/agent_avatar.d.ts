import React from 'react';
import type { EuiAvatarProps } from '@elastic/eui';
import { type AgentDefinition } from '@kbn/agent-builder-common';
interface BaseAgentAvatarProps {
    size: EuiAvatarProps['size'];
    shape?: 'circle' | 'square';
}
interface AgentAvatarWithAgentProps extends BaseAgentAvatarProps {
    agent: AgentDefinition;
    name?: never;
    symbol?: never;
    color?: 'subdued' | AgentDefinition['avatar_color'];
}
interface AgentAvatarCustomProps extends BaseAgentAvatarProps {
    agent?: never;
    agentId?: string;
    name: AgentDefinition['name'];
    symbol: AgentDefinition['avatar_symbol'];
    color: 'subdued' | AgentDefinition['avatar_color'];
}
type AgentAvatarProps = AgentAvatarWithAgentProps | AgentAvatarCustomProps;
export declare const AgentAvatar: React.FC<AgentAvatarProps>;
export {};
