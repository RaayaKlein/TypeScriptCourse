class Human extends Mammal{

    public FullName:string
    public Id:string;
    public IsMale:boolean;
    public Country:string;

    public constructor(age:number, numOfLegs:number, hairColor:string, babyWeight:string, FullName:string, Id:string, IsMale:boolean, Country:string){
        super(age, numOfLegs, hairColor, babyWeight);
        this.FullName = FullName;
        this.Id = Id;
        this.IsMale = IsMale;
        this.Country = Country;
    }

    public toString():string{
        return super.toString() + ` FullName: ${this.FullName}, Id: ${this.Id}, 
        IsMale: ${this.IsMale}, Country: ${this.Country}  `;
    }
}