// overloading - העמסה
// we can create more than 1 function with the same name. 
// how do we know the diffrence?
// 1. Parameters type, 2. Number of parameters. 
class Calculator{

    // add(x:number, y:number){}
    // add(x:string, y:string){}
    // add(x:boolean, y:boolean){}
    // add(x:number, y:number, z:number){}

    // Create overloading option, using optional parameter: 
    public Add1(x:number, y:number, z?:number){
        (z == undefined) ? console.log(`${x} + ${y} = ${x + y}`)
        : console.log(`${x} + ${y} + ${z} = ${x + y + z}`)
    }

    public Add2(x:(number | string), y:(number | string)){
        if(typeof x == 'number' && typeof y == 'number')
            console.log(`${x} + ${y} = ${x + y}`)
        else console.log(`${x} ${y}`)
    }
}
let calc = new Calculator();

// overloading by number of parameters:
calc.Add1(1, 2);
calc.Add1(1, 2, 3);

// overloading by parameters type:
calc.Add2(1, 2);
calc.Add2('hello', 'world');
calc.Add2('hello', 10);
