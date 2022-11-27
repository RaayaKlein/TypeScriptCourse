// 1. Empty array:

let arr1:number[] = [];
// Generic type 'Array<T>' . Array is an interface
let arr2:Array<string> = [];

// The `new` keyword - will allow us to define size for the array!
let arr3:number[] = new Array<number>();
let arr4:Array<string> = new Array<string>();

// 2. Define array size:
let arr5:number[] = new Array<number>(4); // [undefined, undefined, undefined, undefined]
let arr6:Array<string> = new Array<string>(2);

console.log(arr1, arr2, arr3, arr4); // [] [] [] []
console.log(arr5); // [ <4 empty items> ]
console.log(arr6); // [ <2 empty items> ]
console.log(arr5[0]); // undefined

// 3. Array with initialized values:
let arr7:number[] = [1, 2, 4];
let arr8:Array<string> = ['a','b','c'];
let arr9:number[] = new Array<number>(2, 7, 5);
let arr10:Array<string> = new Array<string>('a','b','c');

console.log(arr8); // [ 'a', 'b', 'c' ]  
console.log(arr8[2]); // c - index always starts from 0
console.log(arr8.length); // 3
console.table(arr8);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  'a'   │
│    1    │  'b'   │
│    2    │  'c'   │
└─────────┴────────┘
*/