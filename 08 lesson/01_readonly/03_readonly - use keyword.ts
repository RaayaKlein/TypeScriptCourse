// The second way we can get readonly property - 
// use the keyword - readonly. 

// we can init in 2 places: 
// 1. in init line
// 2. in ctor

class Keyboard{

    // readonly property:
    public readonly Company;
    // public readonly Company = 'Dell';

    public constructor(){
        this.Company = 'Apple';
    }

}

let k = new Keyboard();
// Cannot assign to 'Price' because it is a read-only property.
// k.Company = 'Apple';
console.log(k.Company);

