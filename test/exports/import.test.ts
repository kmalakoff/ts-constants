import assert from 'assert';
import tsConstants from 'ts-constants';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof tsConstants, 'object');
  });
});
