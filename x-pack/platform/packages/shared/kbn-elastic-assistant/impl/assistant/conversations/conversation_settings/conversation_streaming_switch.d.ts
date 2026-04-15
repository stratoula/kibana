import React from 'react';
interface Props {
    assistantStreamingEnabled: boolean;
    setAssistantStreamingEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    compressed?: boolean;
}
export declare const ConversationStreamingSwitch: React.NamedExoticComponent<Props>;
export {};
