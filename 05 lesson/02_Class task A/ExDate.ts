class ExDate{

    // Day:
    private _day: number;
    public get Day(){
        return this._day;
    }
    public set Day(day:number){
        if(day >= 1 && day <= 31)
            this._day = day;
    }

    // Month:
    private _month: number;
    public get Month(){
        return this._month;
    }
    public set Month(month:number){
        if(month >= 1 && month <= 12)
            this._month = month;
    }

    // Year:
    private _year: number;
    public get Year(){
        return this._year;
    }
    public set Year(year:number){
        if(year >= 2000 && year <= 2100)
            this._year = year;
    }

    // ctor:
    public constructor(year:number, month:number, day?:number){
        this.Day = day;
        this.Month = month;
        this.Year = year;
    }

    // toString()
    toString():string{
        // 1/4/2020
        return `${this.Day}/${this.Month}/${this.Year}`;
    }

}