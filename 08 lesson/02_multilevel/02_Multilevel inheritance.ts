// A1 - parent class. B1 - child class. C1 - grandson A1, child class B1
// inheritance - הורשה

class A1{
    public fName:string = 'A1';
}

class B1 extends A1{
    public lName:string = 'Cohen';
}

class C1 extends B1{
   public lName:string = 'Levi';
}

let c1 = new C1();
console.log(c1.fName + ' ' + c1.lName); // A1 Levi