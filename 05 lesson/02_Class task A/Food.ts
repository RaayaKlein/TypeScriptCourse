class Food{

    // FoodName:
    private _foodName: string;
    public get FoodName(){
        return this._foodName;
    }
    public set FoodName(foodName:string){
        this._foodName = foodName;
    }

    // Expiration date - composition:
    private _lastDate: ExDate;
    public get LastDate(){
        return this._lastDate;
    }
    public set LastDate(lastDate:ExDate){
        this._lastDate = lastDate;
    }

    // ctor:
    public constructor(foodName: string, lastDate: ExDate){
        this.FoodName = foodName;
        this.LastDate = lastDate;
    }

    // toString:
    toString():string{
        return `Food: ${this.FoodName}, exDate: ${this.LastDate}`;
    }

}