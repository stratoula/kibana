import type { InferenceEndpointUiCommonPluginStartDependencies } from '../types/types';
declare const useTypedKibana: () => import("@kbn/kibana-react-plugin/public").KibanaReactContextValue<Partial<import("@kbn/core/public").CoreStart> & InferenceEndpointUiCommonPluginStartDependencies>;
export { useTypedKibana as useKibana };
