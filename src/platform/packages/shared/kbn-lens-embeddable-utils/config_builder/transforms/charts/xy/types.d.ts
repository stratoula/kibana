import type { XYState } from '../../../schema';
type Legend = NonNullable<XYState['legend']>;
type StripLegendInternals<T> = Omit<T, 'visibility' | 'statistics'>;
type OutsideLegend = Extract<Legend, {
    placement?: 'outside';
}>;
type InsideLegend = Extract<Legend, {
    placement: 'inside';
}>;
export type InsidePosition = InsideLegend['position'];
export type InsideLayoutLegend = Omit<NonNullable<InsideLegend>, 'visibility' | 'statistics'>;
type OutsideGridLegend = Extract<Required<Legend>, {
    placement: 'outside';
    layout: {
        type: 'grid';
    };
}>;
type OutsideLegendByPosition<P> = StripLegendInternals<Extract<OutsideLegend, {
    position?: P;
}>>;
export type HorizontalOutsideLayoutLegend = OutsideLegendByPosition<'top' | 'bottom'>;
export type VerticalOutsideLayoutLegend = OutsideLegendByPosition<'left' | 'right'>;
export type LegendStatistic = OutsideGridLegend['statistics'][number];
export type LegendSize = OutsideGridLegend['size'];
export type LegendSizeObject = Pick<OutsideGridLegend, 'size'>;
export {};
