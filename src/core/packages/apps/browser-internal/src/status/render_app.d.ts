import type { InternalHttpSetup } from '@kbn/core-http-browser-internal';
import type { NotificationsSetup } from '@kbn/core-notifications-browser';
import type { AppMountParameters } from '@kbn/core-application-browser';
interface Deps {
    http: InternalHttpSetup;
    notifications: NotificationsSetup;
}
export declare const renderApp: ({ element, theme$ }: AppMountParameters, { http, notifications }: Deps) => () => void;
export {};
