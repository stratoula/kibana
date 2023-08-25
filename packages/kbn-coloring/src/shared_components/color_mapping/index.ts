/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

export { CategoricalColorMapping } from './categorical_color_mapping';
export type { ColorMappingInputData } from './categorical_color_mapping';
export type { ColorMapping } from './config';
export * from './palettes/default_palettes';
export * from './color/color_handling';
export { SPECIAL_RULE_MATCHES } from './color/rule_matching';
export { DEFAULT_COLOR_MAPPING_CONFIG, getPaletteColors } from './config/default_color_mapping';
