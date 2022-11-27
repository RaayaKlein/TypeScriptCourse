// Create a template:
class Tiger{

    // Properties: מאפיינים
    public Age:number;

    // Methods:
    Run(km:number):string{
        return `This tiger runs: ${km} km per day`;
    }

}

// Create an instance (מופע) of class Tiger:
let t1:Tiger = new Tiger();
t1.Age = 3;

let t2:Tiger = new Tiger();
t2.Age = 10;

// Access properties of the objects:
console.log(t1.Age); // 3
console.log(t2.Age); // 10

// Access methods:
console.log(t1.Run(10));
console.log(t2.Run(20));