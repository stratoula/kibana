/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React, { useCallback, useMemo } from 'react';
import { i18n } from '@kbn/i18n';
import {
  EuiFieldText,
  EuiColorPicker,
  EuiFlexItem,
  EuiFlexGroup,
  EuiButtonEmpty,
  EuiSpacer,
  htmlIdGenerator,
} from '@elastic/eui';
import { DEFAULT_COLOR } from './constants';
import { isValidColor } from './utils';
import { TooltipWrapper, useDebouncedValue } from '../index';
import type { CustomPaletteParamsConfig } from '../../../common';

export interface ColorTerm {
  color: string;
  term: string;
}

const idGeneratorFn = htmlIdGenerator();
function areColorsValid(colorTerms: Array<{ color: string; term: string }>) {
  return colorTerms.every(({ color }) => isValidColor(color));
}

export interface ColorTermsProps {
  colorTerms: ColorTerm[];
  onChange: (colorTerms: ColorTerm[]) => void;
  paletteConfiguration: CustomPaletteParamsConfig | undefined;
  'data-test-prefix': string;
}
export const ColorTerms = ({
  onChange,
  paletteConfiguration,
  colorTerms,
  ['data-test-prefix']: dataTestPrefix,
}: ColorTermsProps) => {
  const onChangeWithValidation = useCallback(
    (newColorTerms: Array<{ color: string; term: string }>) => {
      if (areColorsValid(newColorTerms)) {
        onChange(newColorTerms);
      }
    },
    [onChange]
  );

  const memoizedValues = useMemo(() => {
    return colorTerms.map(({ color, term }, i) => ({
      color,
      term,
      id: idGeneratorFn(),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paletteConfiguration?.name, paletteConfiguration?.reverse]);

  const { inputValue: localColorTerms, handleInputChange: setLocalColorTerms } = useDebouncedValue({
    onChange: onChangeWithValidation,
    value: memoizedValues,
  });
  const shouldDisableAdd = Boolean(
    paletteConfiguration?.maxSteps && localColorTerms.length >= paletteConfiguration?.maxSteps
  );

  return (
    <>
      <EuiFlexGroup
        data-test-subj={`${dataTestPrefix}_dynamicColoring_color_terms`}
        direction="column"
        gutterSize="s"
      >
        {localColorTerms.map(({ color, term, id }, index) => {
          return (
            <EuiFlexItem
              key={id}
              data-test-subj={`${dataTestPrefix}_dynamicColoring_term_row_${index}`}
            >
              <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                <EuiFlexItem>
                  <EuiFieldText
                    compressed
                    data-test-subj={`${dataTestPrefix}_dynamicColoring_term_value_${index}`}
                    value={term}
                    onChange={({ target }) => {
                      const newTermString = target.value;
                      const newColorTerms = [...localColorTerms];
                      newColorTerms[index] = {
                        color,
                        term: newTermString,
                        id,
                      };
                      setLocalColorTerms(newColorTerms);
                    }}
                    aria-label={i18n.translate(
                      'xpack.lens.dynamicColoring.customPalette.termAriaLabel',
                      {
                        defaultMessage: 'Term {index}',
                        values: {
                          index: index + 1,
                        },
                      }
                    )}
                  />
                </EuiFlexItem>

                <EuiFlexItem
                  data-test-subj={`${dataTestPrefix}_dynamicColoring_term_color_${index}`}
                >
                  <EuiColorPicker
                    key={term}
                    onChange={(newColor) => {
                      const newColorTerms = [...localColorTerms];
                      newColorTerms[index] = { color: newColor, term, id };
                      setLocalColorTerms(newColorTerms);
                    }}
                    secondaryInputDisplay="top"
                    color={color}
                    isInvalid={!isValidColor(color)}
                    showAlpha
                    compressed
                    onBlur={() => {
                      if (color === '') {
                        const newColorTerms = [...localColorTerms];
                        newColorTerms[index] = { color: colorTerms[index].color, term, id };
                        setLocalColorTerms(newColorTerms);
                      }
                    }}
                    placeholder=" "
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          );
        })}
      </EuiFlexGroup>

      <EuiSpacer size="s" />

      <TooltipWrapper
        tooltipContent={i18n.translate(
          'xpack.lens.dynamicColoring.customPalette.maximumStepsApplied',
          {
            defaultMessage: `You've applied the maximum number of steps`,
          }
        )}
        condition={shouldDisableAdd}
        position="top"
        delay="regular"
      >
        <EuiButtonEmpty
          data-test-subj={`${dataTestPrefix}_dynamicColoring_addStop`}
          iconType="plusInCircle"
          color="primary"
          aria-label={i18n.translate('xpack.lens.dynamicColoring.customPalette.addColorTerm', {
            defaultMessage: 'Add color term',
          })}
          size="xs"
          isDisabled={shouldDisableAdd}
          flush="left"
          onClick={() => {
            const newColorTerms = [...localColorTerms];
            const length = newColorTerms.length;
            const prevColor = localColorTerms[length - 1].color || DEFAULT_COLOR;
            const newTerm = '';
            newColorTerms.push({
              color: prevColor,
              term: newTerm,
              id: idGeneratorFn(),
            });
            setLocalColorTerms(newColorTerms);
          }}
        >
          {i18n.translate('xpack.lens.dynamicColoring.customPalette.addColorStop', {
            defaultMessage: 'Add color term',
          })}
        </EuiButtonEmpty>
      </TooltipWrapper>
    </>
  );
};
