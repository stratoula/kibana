import { Entity } from '../entity';
import { Span } from './span';
import { Transaction } from './transaction';
import { Event } from './event';
import type { ApmApplicationMetricFields, ApmFields, GeoLocation, SpanParams } from './apm_fields';
import { Metricset } from './metricset';
import { ApmError } from './apm_error';
export interface DeviceInfo {
    manufacturer: string;
    modelIdentifier: string;
    modelName?: string;
}
export interface OSInfo {
    osType: 'ios' | 'android';
    osVersion: string;
    osFull?: string;
    runtimeVersion?: string;
}
export interface NetworkConnectionInfo {
    type: 'unavailable' | 'wifi' | 'wired' | 'cell' | 'unknown';
    subType?: string;
    carrierName?: string;
    carrierMCC?: string;
    carrierMNC?: string;
    carrierICC?: string;
}
export interface GeoInfo {
    clientIp: string;
    cityName?: string;
    continentName?: string;
    countryIsoCode?: string;
    countryName?: string;
    regionName?: string;
    regionIsoCode?: string;
    location?: GeoLocation;
}
export declare class MobileDevice extends Entity<ApmFields> {
    readonly fields: ApmFields;
    networkConnection: NetworkConnectionInfo;
    constructor(fields: ApmFields);
    deviceInfo(...options: [DeviceInfo] | [string, string] | [string, string, string]): this;
    osInfo(...options: [OSInfo] | [string, string] | [string, string, string] | [string, string, string, string]): this;
    startNewSession(): this;
    setNetworkConnection(networkInfo: NetworkConnectionInfo): this;
    setGeoInfo(geoInfo: GeoInfo): this;
    event(): Event;
    transaction(...options: [{
        transactionName: string;
        frameworkName?: string;
        frameworkVersion?: string;
    }] | [string] | [string, string] | [string, string, string]): Transaction;
    span(...options: [string, string] | [string, string, string] | [SpanParams]): Span;
    httpSpan(...options: [{
        spanName: string;
        httpMethod: string;
        httpUrl: string;
    }] | [string, string, string]): Span;
    appMetrics(metrics: ApmApplicationMetricFields): Metricset<ApmFields>;
    crash({ message, groupingName }: {
        message: string;
        groupingName?: string;
    }): ApmError;
}
