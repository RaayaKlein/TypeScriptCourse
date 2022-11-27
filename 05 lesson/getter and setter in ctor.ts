class Apple{

    // property:
    private _numOfLeaves: number;
    public set NumOfLeaves(n:number){
        if(n > 5)
            this._numOfLeaves = n;
    }
    public get NumOfLeaves(){
        return this._numOfLeaves;
    }

    public constructor(numOfLeaves:number){
        // Access the public property - access the set method:
        this.NumOfLeaves = numOfLeaves;
    }

}

let a1 = new Apple(3);
console.log(a1.NumOfLeaves); // undefined