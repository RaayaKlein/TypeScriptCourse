# Types in TypeScript

typeScript has 4 basic types:

1. number
2. string
3. boolean
4. any

```ts
// number:
let n1: number = 3;
let n2: number = 3.6;
let n3: number = NaN;
let n4: number = Number("4.5"); // 4.5
let n5: number = parseInt("4.5"); // 4
let n6: number = parseFloat("4.5"); // 4.5

// string:
let s1: string = "hello";
let s2: string = "hello";
let s3: string = `hello`;
let s4: string = n1.toString();
let s5: string = n1 + "";
let s6: string = `n1 = ${n1}`;
let s7: string = "";
s7 += n1;

// boolean:
let b1: boolean = true;
let b2: boolean = false;
let b3: boolean = 3 > 8;

// any:
let a; // any implicitly. בצורה מרומזת
let a1: any = 1;
a1 = "gfjfg";
a1 = true;
```
