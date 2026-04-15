import type { AggregateQuery, Query } from '@kbn/es-query';
import { type PresentationContainer } from '@kbn/presentation-publishing';
export declare function getEsqlControls(presentationContainer: PresentationContainer, query: AggregateQuery | Query | undefined): {
    [x: string]: string | number | boolean | import("@kbn/utility-types").SerializableRecord | import("@kbn/utility-types/src/serializable").SerializableArray | {
        title?: string | undefined;
        display_settings?: Readonly<{
            placeholder?: string | undefined;
            hide_action_bar?: boolean | undefined;
            hide_exclude?: boolean | undefined;
            hide_exists?: boolean | undefined;
            hide_sort?: boolean | undefined;
        }> | undefined;
        control_type: "STATIC_VALUES";
        available_options: string[];
        selected_options: string[];
        single_select: boolean;
        variable_name: string;
        variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
        type: string;
    } | {
        title?: string | undefined;
        display_settings?: Readonly<{
            placeholder?: string | undefined;
            hide_action_bar?: boolean | undefined;
            hide_exclude?: boolean | undefined;
            hide_exists?: boolean | undefined;
            hide_sort?: boolean | undefined;
        }> | undefined;
        control_type: "VALUES_FROM_QUERY";
        selected_options: string[];
        single_select: boolean;
        variable_name: string;
        variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
        esql_query: string;
        type: string;
    } | null | undefined;
} | undefined;
