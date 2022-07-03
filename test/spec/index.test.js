var assert = require('assert');
var ts = require('../..');

describe('ts-constants', function() {
  it('has ScriptTarget', function(){
    assert.ok(!!ts.ScriptTarget)
  })
  it('has ModuleKind', function(){
    assert.ok(!!ts.ModuleKind)    
  })
  it('has const JsxEmit', function(){
    assert.ok(!!ts.JsxEmit)
  })
})