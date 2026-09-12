import assert from 'assert';
import tsConstants from 'ts-constants';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof tsConstants, 'object');
  });
});
