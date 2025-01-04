const assert = require('assert');
const ts = require('ts-constants');

describe('ts-constants', () => {
  it('has ScriptTarget', () => {
    assert.ok(!!ts.ScriptTarget);
  });
  it('has ModuleKind', () => {
    assert.ok(!!ts.ModuleKind);
  });
  it('has const JsxEmit', () => {
    assert.ok(!!ts.JsxEmit);
  });
});
