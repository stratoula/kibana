/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { EuiBadge, EuiIcon } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { constant } from 'lodash';
import { StringifyOptions } from 'node:querystring';
import React, { FC, useState, useRef, useEffect } from 'react';
import type { SavedQuery } from '../../query';

interface CaretPosition {
  start: number | null;
  end: number | null;
}

interface Props {
  placeholder: string;
  value: string;
  selectedSavedQueries?: SavedQuery[];
  inputRef?: (input: HTMLDivElement | null) => void;
  onClick?: (savedQuery: SavedQuery) => void;
  onInputChange?: (value: string) => void;
  setCaretPosition?: (pos: CaretPosition) => void;
}

export const SavedSearchesReferences: FC<Props> = ({
  selectedSavedQueries,
  onClick,
  onInputChange,
  placeholder,
  value,
  inputRef,
  setCaretPosition,
}: Props) => {
  //   const inputEl = useRef<HTMLInputElement>(null);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(
    !value && selectedSavedQueries?.length === 0
  );
  const [inputEl, setInputEl] = useState<HTMLDivElement | null>(null);
  const initialCursorPosition = {
    start: 0,
    end: 0,
  };

  useEffect(() => {
    if (!inputEl || !value) return;
    if (value !== inputEl.textContent) {
      inputEl.textContent = value;
    }
  }, [inputEl, value]);

  const tempRef = (el: HTMLDivElement | null) => {
    setInputEl(el);
    inputRef?.(el);
  };

  const computeCaretPosition = (containerEl: HTMLInputElement) => {
    const range = window?.getSelection()?.getRangeAt(0);
    if (!range) return initialCursorPosition;
    const preSelectionRange = range?.cloneRange();
    preSelectionRange?.selectNodeContents(containerEl);
    preSelectionRange?.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange?.toString().length;

    return {
      start,
      end: start + range?.toString().length,
    };
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textContext = event.currentTarget.textContent ?? '';
    if (!textContext) return;
    const caretPosition = computeCaretPosition(event.currentTarget);
    setCaretPosition?.(caretPosition);
    setIsPlaceholderVisible(!Boolean(textContext.length));
    inputRef?.(inputEl);
    onInputChange?.(textContext);
  };
  return (
    <div
      contentEditable={true}
      className="queryStringCustomTextArea"
      onInput={onInput}
      onKeyDown={() => setIsPlaceholderVisible(false)}
      //   ref={inputEl}
      ref={(el) => {
        tempRef(el);
      }}
    >
      {selectedSavedQueries?.map((savedQuery, idx) => {
        const onClickHandler = () => {
          if (onClick) {
            onClick(savedQuery);
          }
        };
        return (
          <div
            key={savedQuery.id}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            className="queryStringCustomTextArea__savedReference"
          >
            #{savedQuery.attributes.title}
            {idx !== selectedSavedQueries.length - 1 ? (
              <span className="queryStringCustomTextArea__savedReferenceConnector"> AND </span>
            ) : (
              ''
            )}
          </div>
        );
      })}
      {isPlaceholderVisible && (
        <div className="queryStringCustomTextArea__placeholder" contentEditable={false}>
          {placeholder}
        </div>
      )}
    </div>
  );
};
