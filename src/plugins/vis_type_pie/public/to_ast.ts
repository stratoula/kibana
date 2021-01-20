/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import { getVisSchemas, VisToExpressionAst } from '../../visualizations/public';
import { buildExpression, buildExpressionFunction } from '../../expressions/public';

import { PieVisParams } from './types';
import { vislibPieName, VisTypePieExpressionFunctionDefinition } from './pie_fn';
import { getEsaggsFn } from './to_ast_esaggs';

export const toExpressionAst: VisToExpressionAst<PieVisParams> = async (vis, params) => {
  const schemas = getVisSchemas(vis, params);
  const visConfig = {
    ...vis.params,
    dimensions: {
      metric: schemas.metric[0],
      buckets: schemas.segment,
      splitRow: schemas.split_row,
      splitColumn: schemas.split_column,
    },
  };

  const configStr = JSON.stringify(visConfig).replace(/\\/g, `\\\\`).replace(/'/g, `\\'`);
  const visTypePie = buildExpressionFunction<VisTypePieExpressionFunctionDefinition>(
    vislibPieName,
    {
      visConfig: configStr,
    }
  );

  const ast = buildExpression([getEsaggsFn(vis), visTypePie]);

  return ast.toAst();
};
