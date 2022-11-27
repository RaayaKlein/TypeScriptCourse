
// recursive functions have limited rounds.. 
// we do not want to cause `stack overflow`. 13,000 max.. 
function myFunc(num){
    if (num > 12000) return;
    myFunc(num + 1);
}

// RangeError: Maximum call stack size exceeded
console.log(myFunc(0));
