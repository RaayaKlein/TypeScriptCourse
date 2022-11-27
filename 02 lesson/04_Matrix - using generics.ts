// Empty matrix:

let matrix1:Array<Array<string>>;
let matrix3:Array<Array<string | boolean>>;

// give size: - 5 is the number of rows: [[], [], [], [], []]
let matrix2:Array<Array<string>> = new Array<Array<string>>(5);
matrix2[0] = Array<string>(2);
matrix2[1] = Array<string>('x','y','z');

console.log(matrix2);
// [ [ <2 empty items> ], [ 'x', 'y', 'z' ], <3 empty items> ]
console.log(matrix2[0]); // [ <2 empty items> ]
console.log(matrix2[1]); // [ 'x', 'y', 'z' ]
console.log(matrix2[1][1]); // y
console.log(matrix2[0][1]); // undefined
console.table(matrix2);

/*
┌─────────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │
├─────────┼─────┼─────┼─────┤
│    0    │     │     │     │
│    1    │ 'x' │ 'y' │ 'z' │
└─────────┴─────┴─────┴─────┘
*/