import type { ThunkAction } from 'redux-thunk';
import type { BreadcrumbService } from '../../breadcrumbs';
export declare const setBreadcrumb: (section: "dashboard" | "upload") => ThunkAction<any, any, {
    breadcrumbService: BreadcrumbService;
}, any>;
