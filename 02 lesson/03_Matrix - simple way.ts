// matrix - 2 dimentional array - works like a table

// 1. empty matrix:
let mat1:number[][]; 
console.log(mat1); // undefined

// Matrix with size:
let mat:number[][] = new Array<Array<number>>(10);

// 2. matrix with values:
let mat2:boolean[][] = [
    [true, true],
    [false, false]
];

let fruits:string[][] = [
    ['Apple', 'Peach', 'Almond'],
    ['Banana', 'Watermelon']
];

console.log(fruits); // [ [ 'Apple', 'Peach', 'Almond' ], [ 'Banana', 'Watermelon' ] ]
console.log(fruits[0]); // [ 'Apple', 'Peach', 'Almond' ]
console.log(fruits[0][2]); // Almond
console.log(fruits[1][0]); // Banana
console.table(fruits);

/*

Jagged array - מערך משונן  - 
Not all the rows in the matrix have the same size
┌─────────┬──────────┬──────────────┬──────────┐
│ (index) │    0     │      1       │    2     │
├─────────┼──────────┼──────────────┼──────────┤
│    0    │ 'Apple'  │   'Peach'    │ 'Almond' │
│    1    │ 'Banana' │ 'Watermelon' │          │
└─────────┴──────────┴──────────────┴──────────┘
*/
