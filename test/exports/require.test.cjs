const assert = require('assert');
const tsConstants = require('ts-constants');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof tsConstants, 'object');
  });
});
