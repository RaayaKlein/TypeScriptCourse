class Snake extends Reptile{

    public Name:string
    public Length:number
    public PopularInCountry:string

    public constructor(age:number, numOfLegs:number, HasSkales:boolean, NumOfEggsPerYear:number, 
        Name:string, Length:number, PopularInCountry:string){
        super(age, numOfLegs, HasSkales, NumOfEggsPerYear);
        this.Name = Name;
        this.Length = Length;
        this.PopularInCountry = PopularInCountry;
    }

    public toString():string{
        return super.toString() + `Name: ${this.Name}, Length: ${this.Length}, PopularIn: ${this.PopularInCountry} `;
    }
}