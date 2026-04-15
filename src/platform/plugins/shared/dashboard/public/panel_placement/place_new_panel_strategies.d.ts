import { PanelPlacementStrategy } from '@kbn/presentation-util-plugin/public';
import type { PanelPlacementProps, PanelPlacementReturn } from './types';
export declare const runPanelPlacementStrategy: (strategy: PanelPlacementStrategy, { width, height, currentPanels, sectionId, beside }: PanelPlacementProps) => PanelPlacementReturn;
