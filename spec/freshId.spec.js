/* global describe, it, expect */
/* eslint prefer-arrow-callback:0, func-names:0 */
/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

const freshId = require('../lib/freshId').default;

describe('freshId', function () {
  it('should create correct ids', function () {
    expect(freshId(10)).toMatch(/^[a-zA-Z0-9]{10}$/);
    expect(freshId(100)).toMatch(/^[a-zA-Z0-9]{100}$/);

    expect(freshId()).toMatch(/^[a-zA-Z0-9]{15}$/);
  });

  it('should not create empty ids', function () {
    expect(() => freshId(0)).toThrow(new Error('Ids must be at least one character long'));
  });
});
