// A - parent class. B & C - child class
class A{
    public Try():void{
        console.log("Try A");
    }
}

class B extends A{
    public Try():void{
        console.log("Try B");
    }
}

class C extends A{
    public Try():void{
        console.log("Try C");
    }
}

let x1 = new A();
let x2 = new B();
let x3 = new C();

x1.Try(); // Try A
x2.Try(); // Try B
x3.Try(); // Try C

