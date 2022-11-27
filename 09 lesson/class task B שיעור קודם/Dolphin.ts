class Dolphin extends Mammal{

    public BodyColor:string
    public MainVowel:String
    public SeaName:string

    public constructor(age:number, numOfLegs:number, hairColor:string, babyWeight:string,
        BodyColor:string, MainVowel:String, SeaName:string){
        super(age, numOfLegs, hairColor, babyWeight);
        this.BodyColor = BodyColor;
        this.MainVowel = MainVowel;
        this.SeaName = SeaName;
    }

    public toString():string{
        return super.toString() + ` BodyColor: ${this.BodyColor}, MainVowel: ${this.MainVowel}, SeaName: ${this.SeaName} `;
    }
}