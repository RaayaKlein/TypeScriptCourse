// In objects - we do not use the order, but the key names. 
let x, y, others;

({x, y} = { z: 3, x: 1, y: 2 });

console.log(`x = ${x}, y = ${y}`); // x = 1, y = 2

// in react native example: { countryId } = route

({x, y, ...others} = { x: 1, y: 2, z:3, k:4, m:5 });

console.log(others) // { z: 3, k: 4, m: 5 }


