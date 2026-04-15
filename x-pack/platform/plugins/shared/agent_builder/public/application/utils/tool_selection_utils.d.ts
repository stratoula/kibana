import type { ToolDefinition, ToolSelection, ToolSelectionRelevantFields } from '@kbn/agent-builder-common';
import type { AgentEditState } from '../hooks/agents/use_agent_edit';
/**
 * Check if a specific tool is selected based on the current tool selections.
 * This uses existing agent-builder-common utilities for consistent logic.
 */
export declare const isToolSelected: (tool: ToolSelectionRelevantFields, selectedTools: ToolSelection[]) => boolean;
/**
 * Toggle selection for a specific tool.
 */
export declare const toggleToolSelection: (toolId: string, allAvailableTools: ToolSelectionRelevantFields[], selectedTools: ToolSelection[]) => ToolSelection[];
/**
 * Returns the list of active tools for an agent, combining explicitly selected tools
 * with default tools when elastic capabilities are enabled. Default tools that are
 * already explicitly selected are not duplicated.
 */
export declare const getActiveTools: <T extends ToolSelectionRelevantFields>(allTools: T[], agentToolSelections: ToolSelection[], enableElasticCapabilities: boolean, defaultToolIds: Set<string>) => T[];
/**
 * Removes invalid tool references from the agent configuration.
 * Filters out tool IDs that don't exist in the available tools list,
 * while preserving wildcard selections and removing empty selections.
 */
export declare function cleanInvalidToolReferences(data: AgentEditState, availableTools: ToolDefinition[]): AgentEditState;
