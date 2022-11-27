class Student extends Person{

    // year:
    private year: number;
    public set Year(year:number){
        this.year = year;
    }
    public get Year(){
        return this.year;
    }

    // avgGrades:
    private avgGrades: number;
    public set AvgGrades(avgGrades:number){
        if(avgGrades >= 0 && avgGrades <= 100)
            this.avgGrades = avgGrades;
    }
    public get AvgGrades(){
        return this.avgGrades;
    }

    // myCourses:
    private myCourses: Course[];
    public set MyCourses(myCourses:Course[]){
            this.myCourses = myCourses;
    }
    public get MyCourses(){
        return this.myCourses;
    }


    constructor(name:string, age:number, id:string, addr:Address,
        year: number, avgGrades: number, myCourses: Course[]){
        super(name, age, id, addr);
        this.Year = year;
        this.AvgGrades = avgGrades;
        this.MyCourses = myCourses;
    }

    toString():string{
        return super.toString() + ` year: ${this.Year}, avgGrades: ${this.avgGrades}, courses: ${this.MyCourses}`
    }
    
}