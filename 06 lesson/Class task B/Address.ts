class Address{

    // _houseNum:
    private _houseNum:number;
    public set HouseNum(houseNum:number){
        if(houseNum >= 0) 
            this._houseNum = houseNum;
    }
    public get HouseNum(){
        return this._houseNum;
    }

    // _street:
    private _street:string;
    public set Street(street:string){
        this._street = street;
    }
    public get Street(){
        return this._street;
    }

     // _city:
     private _city:string;
     public set City(city:string){
         this._city = city;
     }
     public get City(){
         return this._city;
     }

     // _country:
     private _country:string;
     public set Country(country:string){
         if(country == 'Israel' || country == 'France' || country == 'Italy')
            this._country = country;
     }
     public get Country(){
         return this._country;
     }

     // ctor:
     public constructor(houseNum:number, street:string, city:string, country:string){
        this.HouseNum = houseNum;
        this.Street = street;
        this.City = city;
        this.Country = country;
    }

    toString():string{
        return `House num: ${this.HouseNum}, in ${this.Country} - ${this.City}, street: ${this.Street}`;
    }
}