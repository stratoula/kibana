import type { OperatorFunction } from 'rxjs';
import type { ChatEvent } from '@kbn/agent-builder-common';
import type { EventsService } from '../events';
export declare function propagateEvents({ eventsService, }: {
    eventsService: EventsService;
}): OperatorFunction<ChatEvent, ChatEvent>;
