// The first way we can get readonly property - 
// 1. Make private property. 
// 2. Do not add `set` method. 

class Cup{

    // private property:
    private _price: number = 5;

    // get - get the property outside the class:
    public get Price():number{
        return this._price;
    }
}

let c = new Cup();
// Cannot assign to 'Price' because it is a read-only property.
// c.Price = 3.6;
