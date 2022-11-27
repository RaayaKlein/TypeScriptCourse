// When we use built-in get and set -
// 1. The functions have the same name - property 
// 2. there is no need to call the functions - but to the property. 

class Movie{

    // private property:
    private _lengthMinutes:number; // undefined

    // setter - built in: with validation
    public set LengthMinutes(l:number){
        if(l > 40 && l < 180)
            this._lengthMinutes = l;
    }

    // getter - built in
    public get LengthMinutes():number{
        return this._lengthMinutes;
    }
}

let m1 = new Movie();

m1.LengthMinutes = 60; // go to the setter function
console.log(m1.LengthMinutes); // go to the getter function