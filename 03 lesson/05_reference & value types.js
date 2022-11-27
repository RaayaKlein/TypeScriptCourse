// value types - number, string, boolean
var x = 5, y;
y = x;
console.log("x = " + x + ", y = " + y); // 5, 5
x = 10;
console.log("x = " + x + ", y = " + y); // 10, 5
// reference types - array, object
var arr = [1, 2, 3], copy;
copy = arr; // copy = -> pointer to the address of arr[0]
console.log("arr = " + arr + ", copy = " + copy); // [1, 2, 3],[1, 2, 3]
arr[1] = 100;
console.log("arr = " + arr + ", copy = " + copy); // [1, 100, 3],[1, 100, 3]
copy[2] = 50;
console.log("arr = " + arr + ", copy = " + copy); // [1, 100, 3],[1, 100, 3]
