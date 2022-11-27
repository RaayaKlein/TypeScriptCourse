# Functions

```ts
// basic:

// 1. function func1(): void
function func1() {}

// 2. function func2(x: any): void
function func2(x) {
  console.log(`x = ${x}`);
}

// 3. function func3(): boolean
function func3() {
  return true;
}

// 4. function func4(num: any): any
function func4(num) {
  return num;
}

// add types:

// 1. parameters: function func5(x: number): void
function func5(x: number) {
  console.log(`x = ${x}`);
}

// 2. returned value:
function func6(): string {
  return "hello";
}

// 3. full example:
function MyDetails(name: string, age: number): string {
  let str: string = `my name is: ${name}, and I am ${age} years old`;
  return str;
}
```
