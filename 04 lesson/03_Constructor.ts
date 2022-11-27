// Every time we create an object - the ctor will run!

class X{

    // ctor:
    public constructor(){
        console.log("New object was created!");
    }
}

let x1 = new X(); // New object was created!
let x2 = new X(); // New object was created!
