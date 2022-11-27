
function func(num){
    if( num > 10 || num < -10)
        throw new RangeError('Number must be between -10 to 10');
}

try {
    func(-20);
} catch (e) {
    // instanceof - is a function tha checks if an object is 
    // type of a class
    if(e instanceof RangeError) console.log(e.message);
}

// Number must be between -10 to 10


// Example of instanceof
class A{}
let a1 = new A()
console.log(a1 instanceof A); // true

