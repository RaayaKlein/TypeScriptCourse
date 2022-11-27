class Child{

    // private property:
    private _age:number;

    // setter function:
    // We can add to setter function validation check:
    public setAge(age:number):void{
        if(age >=0 && age <= 120)
            this._age = age;
    }

    // getter function:
    public getAge():number{
        return this._age;
    }
}

let child1 = new Child();
// Property '_age' is private and only accessible within class 'Child'.
// child1._age = 1; -> Error
child1.setAge(1);
console.log(child1.getAge()); // 1
