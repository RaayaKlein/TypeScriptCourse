class Soccer extends Sport{

    public readonly NumOfPlayers:number = 11;
    public TeamName:string;

    constructor(isIndoor:boolean, TeamName:string){
       super(true, isIndoor);
       this.TeamName = TeamName;
    }

    public numOfAwards():number{
        return 5;
    }

    toString():string{
        return super.toString() + ` TeamName: ${this.TeamName}, numOfPlayers: ${this.NumOfPlayers} `
    }

}

// Sport: 
// 1. Swimming
// 2. Soccer
