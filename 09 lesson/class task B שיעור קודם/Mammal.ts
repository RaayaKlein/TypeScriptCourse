class Mammal extends Animal{

    public static readonly WarmBlooded:boolean = true;
    public HairColor:string;
    public BabyWeight:string; // kg : 3kg

    public constructor(age:number, numOfLegs:number, HairColor:string, babyWeight:string){
        super(age, numOfLegs);
        this.HairColor = HairColor;
        this.BabyWeight = babyWeight;
    }

    public toString():string{
        return super.toString() + ` HairColor: ${this.HairColor}, BabyWeight: ${this.BabyWeight} `;
    }
}