/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useMemo } from 'react';
import { transparentize } from '@elastic/eui';
import { CSSObject } from '@emotion/react';
import { useEuiTheme } from '../../hooks';

interface StylesDeps {
  depth: number;
  hasAlerts: boolean;
  hasInvestigatedAlert: boolean;
  isSelected: boolean;
  isSessionLeader: boolean;
}

export const useStyles = ({
  depth,
  hasAlerts,
  hasInvestigatedAlert,
  isSelected,
  isSessionLeader,
}: StylesDeps) => {
  const { euiTheme, euiVars } = useEuiTheme();

  const cached = useMemo(() => {
    const { colors, border, size, font } = euiTheme;

    const TREE_INDENT = `calc(${size.l} + ${size.xxs})`;
    const PROCESS_TREE_LEFT_PADDING = size.s;

    const darkText: CSSObject = {
      color: colors.text,
      fontFamily: font.familyCode,
      paddingLeft: size.xxs,
      paddingRight: size.xs,
    };

    const children: CSSObject = {
      position: 'relative',
      color: colors.ghost,
      marginLeft: size.base,
      paddingLeft: size.s,
      borderLeft: border.editable,
    };

    const icon: CSSObject = {
      color: euiVars.euiColorDarkShade,
    };

    /**
     * gets border, bg and hover colors for a process
     */
    const getHighlightColors = () => {
      let bgColor = 'none';
      let hoverColor = transparentize(colors.primary, 0.04);
      let borderColor = 'transparent';
      let searchResColor = transparentize(colors.warning, 0.32);

      if (hasAlerts) {
        borderColor = colors.danger;
      }

      if (isSelected) {
        searchResColor = colors.warning;
        bgColor = transparentize(colors.primary, 0.08);
        hoverColor = transparentize(colors.primary, 0.12);
      }

      if (hasInvestigatedAlert) {
        bgColor = transparentize(colors.danger, 0.04);
        hoverColor = transparentize(colors.danger, 0.12);
        if (isSelected) {
          bgColor = transparentize(colors.danger, 0.08);
        }
      }

      return { bgColor, borderColor, hoverColor, searchResColor };
    };

    const { bgColor, borderColor, hoverColor, searchResColor } = getHighlightColors();

    const processNode: CSSObject = {
      display: 'block',
      cursor: 'pointer',
      position: 'relative',
      padding: `${size.xs} 0px`,
      marginBottom: isSessionLeader ? size.s : '0px',
      '&:hover:before': {
        backgroundColor: hoverColor,
        transform: `translateY(-${size.xs})`,
      },
      '&:before': {
        position: 'absolute',
        height: '100%',
        pointerEvents: 'none',
        content: `''`,
        marginLeft: `calc(-${depth} * ${TREE_INDENT} - ${PROCESS_TREE_LEFT_PADDING})`,
        borderLeft: `${size.xs} solid ${borderColor}`,
        backgroundColor: bgColor,
        width: `calc(100% + ${depth} * ${TREE_INDENT} + ${PROCESS_TREE_LEFT_PADDING})`,
        transform: `translateY(-${size.xs})`,
      },
    };

    const searchHighlight = `
      color: ${colors.fullShade};
      border-radius: '0px';
      background-color: ${searchResColor};
    `;

    const wrapper: CSSObject = {
      paddingLeft: size.s,
      position: 'relative',
      verticalAlign: 'middle',
      color: euiVars.euiTextSubduedColor,
      wordBreak: 'break-all',
      minHeight: `calc(${size.l} - ${size.xxs})`,
      lineHeight: `calc(${size.l} - ${size.xxs})`,
    };

    const workingDir: CSSObject = {
      color: colors.successText,
      fontFamily: font.familyCode,
      fontWeight: font.weight.regular,
      paddingLeft: size.s,
      paddingRight: size.xxs,
    };

    const timeStamp: CSSObject = {
      float: 'right',
      fontFamily: font.familyCode,
      fontSize: size.m,
      fontWeight: font.weight.regular,
      paddingRight: size.base,
      paddingLeft: size.xxl,
      position: 'relative',
    };

    const alertDetails: CSSObject = {
      padding: size.s,
      border: border.editable,
      borderRadius: border.radius.medium,
    };

    return {
      darkText,
      searchHighlight,
      children,
      processNode,
      wrapper,
      workingDir,
      timeStamp,
      alertDetails,
      icon,
    };
  }, [depth, euiTheme, hasAlerts, hasInvestigatedAlert, isSelected, euiVars, isSessionLeader]);

  return cached;
};
