abstract class Person{

    // name:
    private name: string;
    public set Name(n:string){
        this.name = n;
    }
    public get Name(){
        return this.name;
    }

    // age:
    private age: number;
    public set Age(age:number){
        if(age >=0 && age <= 120)
            this.age = age;
    }
    public get Age(){
        return this.age;
    }

     // id:
    private id: string;
    public set Id(id:string){
    if(id.length == 9)
        this.id = id;
    }
    public get Id(){
        return this.id;
    }

    // addr:
    private addr: Address;
    public set Addr(addr:Address){
        this.addr = addr;
    }
    public get Addr(){
        return this.addr;
    }

    constructor(name:string, age:number, id:string, addr:Address){
        this.Name = name;
        this.Age = age;
        this.Id = id;
        this.Addr = addr;
    }

    toString():string{
        return `Person: ${this.Name}, is ${this.Age} years old, id: ${this.Id}, 
        Address: ${this.Addr.toString()}`
    }
    
}