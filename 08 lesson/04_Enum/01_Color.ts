enum Color{
    RED,
    BLUE,
    GREEN
}

// 3 ways to access enum variables:
console.log(Color[0]); // RED

console.log(Color.GREEN); // 2

// Color[1] = Blue
console.log(Color[Color.BLUE]); // BLUE


// Create variable from enum type:
// When we create variable from `Color`: number / Enum - color
let co1:Color = 2;
console.log(co1); // 2
console.log(Color[co1]); // GREEN

let co2:Color = Color.RED;
console.log(co2); // 0
console.log(Color[co2]); // RED
