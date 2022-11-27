// When we have static readonly property - 
// it cannot get value in the ctor. 

class Mouse{

    // readonly property:
    public static readonly Company = 'Dell';
    public static numOfObjects = 0;
    public readonly Price = 0;

    public constructor(p:number){
        // Cannot assign to 'Company' because it is a read-only property.
        // Mouse.Company = 'Apple';
        // this.Price = p;
        Mouse.numOfObjects++;
    }

}

let m = new Mouse(45);
// m.Price = 40;
// Mouse.Company = 'gf';

console.log(m.Price);