import type { Observable } from 'rxjs';
import type { BrowserChatEvent } from './events';
/**
 * Public-facing contract for AgentBuilder's events service.
 */
export interface EventsServiceStartContract {
    /**
     * (hot) observable of all chat events.
     */
    chat$: Observable<BrowserChatEvent>;
}
