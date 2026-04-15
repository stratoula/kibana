import type { ChatEvent } from '@kbn/agent-builder-common';
export declare class EventsService {
    private readonly events$;
    readonly obs$: import("rxjs").Observable<ChatEvent>;
    constructor();
    propagateChatEvent(event: ChatEvent): void;
}
