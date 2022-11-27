# Types in JavaScript

We have 6 types in JS: undefined, number, string, object, boolean, function

```js
// 1. undefined
let x;
console.log(`x = ${x}, type: ${typeof x}`); // x = undefined, type: undefined

// 2. number: int, float, NaN..
x = 5;
console.log(`x = ${x}, type: ${typeof x}`); // x = 5, type: number

x = 4.7;
console.log(`x = ${x}, type: ${typeof x}`); // x = 4.7, type: number

x = NaN; // NaN - Not a Number
console.log(`x = ${x}, type: ${typeof x}`); // x = NaN, type: number

// 3. strings:

x = "hello";
console.log(`x = ${x}, type: ${typeof x}`); // x = hello, type: string

// 4. boolean
x = false;
console.log(`x = ${x}, type: ${typeof x}`); // x = false, type: boolean

// 5. object
x = { city: "Jerusalem", country: "Israel" };
console.log(`x = ${x}, type: ${typeof x}`); // x = [object Object], type: object

// 6. function
x = () => console.log("I am a function");
console.log(`x = ${x}, type: ${typeof x}`); // x = () => console.log('I am a function'), type: function
```

# String interpolation

```js
// string interpolation - הזרקת קוד לתוך מחרוזת

// str1 and str2 are exacly the same!
// str3 - allow us to use string interpolation
let str1 = "this is lesson 1";
let str2 = 'this is lesson 1';
let str3 = `this is lesson 1`;

let num = 1;
str1 = "this is lesson " + num;
str2 = "this is lesson " + num;
str3 = `this is lesson ${num}`;
```
