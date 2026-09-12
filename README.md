# ts-constants

TypeScript compiler constants without importing the TypeScript compiler.

```bash
npm install ts-constants
```

```typescript
import ts from 'ts-constants';

ts.ScriptTarget.ES2022; // 9
ts.ModuleKind.NodeNext; // 199
ts.JsxEmit.ReactJSX; // 4
```

The default export contains the `ScriptTarget`, `ModuleKind`, and `JsxEmit` bidirectional maps used by TypeScript compiler options.
