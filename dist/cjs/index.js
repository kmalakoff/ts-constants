"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var ScriptTarget = {
    0: 'ES3',
    1: 'ES5',
    2: 'ES2015',
    3: 'ES2016',
    4: 'ES2017',
    5: 'ES2018',
    6: 'ES2019',
    7: 'ES2020',
    8: 'ES2021',
    9: 'ES2022',
    99: 'Latest',
    100: 'JSON',
    ES3: 0,
    ES5: 1,
    ES2015: 2,
    ES2016: 3,
    ES2017: 4,
    ES2018: 5,
    ES2019: 6,
    ES2020: 7,
    ES2021: 8,
    ES2022: 9,
    ESNext: 99,
    JSON: 100,
    Latest: 99
};
var ModuleKind = {
    0: 'None',
    1: 'CommonJS',
    2: 'AMD',
    3: 'UMD',
    4: 'System',
    5: 'ES2015',
    6: 'ES2020',
    7: 'ES2022',
    99: 'ESNext',
    100: 'Node16',
    199: 'NodeNext',
    None: 0,
    CommonJS: 1,
    AMD: 2,
    UMD: 3,
    System: 4,
    ES2015: 5,
    ES2020: 6,
    ES2022: 7,
    ESNext: 99,
    Node16: 100,
    NodeNext: 199
};
var JsxEmit = {
    0: 'None',
    1: 'Preserve',
    2: 'React',
    3: 'ReactNative',
    4: 'ReactJSX',
    5: 'ReactJSXDev',
    None: 0,
    Preserve: 1,
    React: 2,
    ReactNative: 3,
    ReactJSX: 4,
    ReactJSXDev: 5
};
var _default = {
    ScriptTarget: ScriptTarget,
    ModuleKind: ModuleKind,
    JsxEmit: JsxEmit
};
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }