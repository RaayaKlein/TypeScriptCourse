class Teacher extends Person{

    // IdEmp:
    private idEmp: number;
    public set IdEmp(idEmp:number){
        this.idEmp = idEmp;
    }
    public get IdEmp(){
        return this.idEmp;
    }

    // salary:
    private salary: number;
    public set Salary(salary:number){
        if(salary >= 0 && salary <= 100000)
            this.salary = salary;
    }
    public get Salary(){
        return this.salary;
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
        idEmp: number, salary: number, myCourses: Course[]){
        super(name, age, id, addr);
        this.IdEmp = idEmp;
        this.Salary = salary;
        this.MyCourses = myCourses;
    }

    toString():string{
        return super.toString() 
        + `idEmp: ${this.IdEmp}, salary: ${this.Salary}, myCourses: ${this.MyCourses}`
    }
    
}