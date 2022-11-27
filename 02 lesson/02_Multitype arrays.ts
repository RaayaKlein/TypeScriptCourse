// In js we can declare multitype arrays:
// let myarr1 = ['hello', 5365756, true];

// In typeScript we must declare the type: 
// let myarr2:number[] = ['hello', 5365756, true]; -> Error


// 1. Solution - use `any` type
let myarr2:any[] = ['hello', 5365756, true];

// 2. Solution - use or gate - | to add multitypes:
let myCar1:(number | string )[] = ['Toyota', 5866756];
let myCar2:Array<number | string> = ['Toyota', 5866756];

// note: we can add more use for `or gate`. 



