import { type TracksOverlays } from '@kbn/presentation-util';
import type { HasAppContext } from '@kbn/presentation-publishing';
import type { MenuItemGroup } from './types';
export declare function getMenuItemGroups(api: HasAppContext & TracksOverlays): Promise<MenuItemGroup[]>;
