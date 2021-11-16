/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import expect from '@kbn/expect';
import { formatESMsg } from './format_es_msg';

describe('formatESMsg', () => {
  test('should return undefined if passed a basic error', () => {
    const err = new Error('This is a normal error');

    const actual = formatESMsg(err);

    expect(actual).to.be(undefined);
  });

  test('should return undefined if passed a string', () => {
    const err = 'This is a error string';

    const actual = formatESMsg(err);

    expect(actual).to.be(undefined);
  });

  test('should return the root_cause if passed an extended elasticsearch', () => {
    const err = new Error('This is an elasticsearch error');
    err.resp = {
      error: {
        root_cause: [
          {
            reason: 'I am the detailed message',
          },
        ],
      },
    };

    const actual = formatESMsg(err);

    expect(actual).to.equal('I am the detailed message');
  });

  test('should combine the reason messages if more than one is returned.', () => {
    const err = new Error('This is an elasticsearch error');
    err.resp = {
      error: {
        root_cause: [
          {
            reason: 'I am the detailed message 1',
          },
          {
            reason: 'I am the detailed message 2',
          },
        ],
      },
    };

    const actual = formatESMsg(err);

    expect(actual).to.equal('I am the detailed message 1\nI am the detailed message 2');
  });
});
