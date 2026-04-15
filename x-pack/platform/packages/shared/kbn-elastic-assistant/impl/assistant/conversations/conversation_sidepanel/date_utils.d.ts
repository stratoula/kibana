import datemath from '@kbn/datemath';
export declare const getAbsoluteTime: (range: string, opts?: Parameters<typeof datemath.parse>[1]) => number | undefined;
export declare const isValidDateMath: (value: string) => boolean;
