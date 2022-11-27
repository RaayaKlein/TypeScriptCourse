class Address{

    // country:
    private country: string;
    public set Country(country:string){
        this.country = country;
    }
    public get Country(){
        return this.country;
    }


    // city:
    private city: string;
    public set City(city:string){
        this.city = city;
    }
    public get City(){
        return this.city;
    }

    // houseNum:
    private houseNum: number;
    public set HouseNum(houseNum:number){
        if(houseNum > 0)
            this.houseNum = houseNum;
    }
    public get HouseNum(){
        return this.houseNum;
    }

    constructor(country:string, city: string, houseNum: number){
        this.Country = country;
        this.City = city;
        this.HouseNum = houseNum;
    }

    toString():string{
        return `Address: ${this.Country} - ${this.City}, num: ${this.HouseNum}`
    }
}