class Person{

    // Properties:
    public Name:string;
    public Age:number;

    // Multiple constructor implementations are not allowed.
    // public constructor(){}

    // We can create a ctor 
    // constructor Person(name?: string, age?: number): Person
    public constructor(name?:string, age:number = 0){
        this.Name = name;
        this.Age = age;
        this.Hello();
    }

    Hello(){
        console.log("Hello new person");
    }
}

// Create 4 instances in diffrent ways - using the ctor:
let p1 = new Person();
let p2 = new Person("Alex");
let p3 = new Person("Alex", 45);
let p4 = new Person(undefined, 45);
