let myFunc = () => {
    return [true, false, true];
}

let [x1, x2, x3] = myFunc();

console.log(`x1 = ${x1}, x2 = ${x2}, x3 = ${x3}`);
// x1 = true, x2 = false, x3 = true

// we can skip some values:
let [y1, , y3] = myFunc();
console.log(`y1 = ${y1}, y3 = ${y3}`);
// y1 = true, y3 = true
