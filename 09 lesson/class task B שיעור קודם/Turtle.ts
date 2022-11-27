class Turtle extends Reptile{

    public IsSeaTurtle:boolean
    public BackPattern:string
    public MainFood:string[]

    public constructor(age:number, numOfLegs:number, HasSkales:boolean, NumOfEggsPerYear:number, 
        IsSeaTurtle:boolean, backPattern:string, MainFood:string[]){
        super(age, numOfLegs, HasSkales, NumOfEggsPerYear);
        this.IsSeaTurtle = IsSeaTurtle;
        this.BackPattern = backPattern;
        this.MainFood = MainFood;
    }

    public toString():string{
        return super.toString() + `IsSeaTurtle: ${this.IsSeaTurtle}, BackPattern: ${this.BackPattern}, 
        MainFood: ${this.MainFood} `;
    }
}