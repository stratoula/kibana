import type { ChatEvent } from '@kbn/agent-builder-common';
import { type Observable } from 'rxjs';
import type { BrowserToolExecutor } from '../../services/browser_tool_executor';
export declare const useSubscribeToChatEvents: ({ setAgentReasoning, setIsResponseLoading, isAborted, browserToolExecutor, }: {
    setAgentReasoning: (agentReasoning: string) => void;
    setIsResponseLoading: (isResponseLoading: boolean) => void;
    isAborted: () => boolean;
    browserToolExecutor?: BrowserToolExecutor;
}) => {
    subscribeToChatEvents: (events$: Observable<ChatEvent>) => Promise<void>;
    unsubscribeFromChatEvents: () => void;
};
