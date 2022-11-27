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
var MagicSquare = function (mat) {
    // Check rows:
    var sum = 0, MainRes = 0, flag = false;
    for (var row = 0; row < mat.length; row++) {
        for (var col = 0; col < mat[row].length; col++)
            sum += mat[row][col];
        // Check first row:
        if (flag != true) {
            MainRes = sum;
            flag = true;
        }
        // If one of the rows diffrent than MainRes - return false
        if (MainRes != sum)
            return false;
        sum = 0;
    }
    return true;
};
console.log(MagicSquare([[5, 1, 6], [3, 5, 7], [4, 9, 2]]));
