class Animal{

    public Age:number;
    public NumOfLegs:number;

    public CanWalk():string{
        if(this.NumOfLegs > 1) return `the animal can walk on land`
        else return `the animal cannot walk on land`
    }

    public constructor(age:number, numOfLegs:number){
        this.Age = age;
        this.NumOfLegs = numOfLegs;
    }

    public toString():string{
        return `Age: ${this.Age}, numOfLegs: ${this.NumOfLegs}`;
    }
}