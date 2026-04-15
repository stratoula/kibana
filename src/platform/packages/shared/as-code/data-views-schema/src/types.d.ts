import type { TypeOf } from '@kbn/config-schema';
import type { dataViewReferenceSchema, dataViewSchema, dataViewSpecSchema } from './schema_data_view';
import type { esqlDataSourceSchema } from './schema_esql_data_source';
import type { runtimeFieldSchema } from './schema_runtime_field';
export type AsCodeRuntimeField = TypeOf<typeof runtimeFieldSchema>;
export type AsCodeDataViewReference = TypeOf<typeof dataViewReferenceSchema>;
export type AsCodeDataViewSpec = TypeOf<typeof dataViewSpecSchema>;
export type AsCodeDataView = TypeOf<typeof dataViewSchema>;
export type AsCodeEsqlDataSource = TypeOf<typeof esqlDataSourceSchema>;
