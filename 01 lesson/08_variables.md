# Variables:

```ts
// variables:

// 1. if we add the value in the initializion line - this is the type.
let x1 = 5;
// x1 = 'hello'; -> Type 'string' is not assignable to type 'number'.
x1 = 6;

// 2. no value in initializion line
let x3: string;
x3 = "hello";
// x3 = 5;  -> Error!

// 3. Any empty.
let x2: any;
x2 = 5;
x2 = "hello";
```


