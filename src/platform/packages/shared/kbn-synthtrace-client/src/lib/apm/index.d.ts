import { service, otelService } from './service';
import { mobileApp } from './mobile_app';
import { browser } from './browser';
import { serverlessFunction } from './serverless_function';
import { getChromeUserAgentDefaults } from './defaults/get_chrome_user_agent_defaults';
import type { ApmException, APMStacktrace } from './apm_fields';
export declare const apm: {
    service: typeof service;
    otelService: typeof otelService;
    mobileApp: typeof mobileApp;
    browser: typeof browser;
    getChromeUserAgentDefaults: typeof getChromeUserAgentDefaults;
    serverlessFunction: typeof serverlessFunction;
};
export declare const apmOtel: {
    service: typeof otelService;
};
export type { ApmException, APMStacktrace };
