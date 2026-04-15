import type { DatatableColumn } from '@kbn/expressions-plugin/common';
import type { ExpressionValueVisDimension } from '@kbn/chart-expressions-common';
export declare const getFormat: (columns: DatatableColumn[], accessor: string | ExpressionValueVisDimension) => import("../../../../field_formats/common").SerializedFieldFormat | undefined;
