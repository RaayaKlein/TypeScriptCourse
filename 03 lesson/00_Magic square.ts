/*
A magic square is a matrix when sum of variables in every row, column and the 2 diagonals is equal.
Write a function to get a matrix and return whether the matrix is magic / not.

- for example - this is a magic square: (all return sum of 15)

```ts
8 | 1 | 6;
3 | 5 | 7;
4 | 9 | 2;
```
*/

// This function only checks for rows!
let MagicSquare = (mat:number[][]):boolean => {
    // Check rows:
    let sum:number = 0, MainRes:number = 0, flag:boolean = false;
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) 
            sum += mat[row][col];
        // Check first row:
        if(flag != true){
            MainRes = sum;
            flag = true;
        }
        // If one of the rows diffrent than MainRes - return false
        if(MainRes != sum) return false; 
        sum = 0;
    }
    return true;

}
console.log(MagicSquare([[8, 1, 6], [3, 5, 7], [4, 9, 2]]));