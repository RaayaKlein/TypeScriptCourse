class Course{

    // name:
    private name: string;
    public set Name(n:string){
        this.name = n;
    }
    public get Name(){
        return this.name;
    }

    // semester:
    private semester: string;
    public set Semester(semester:string){
        if(semester == 'a' || semester == 'b' || semester == 'summer')
            this.semester = semester;
    }
    public get Semester(){
        return this.semester;
    }

    // classNum:
    private classNum: string;
    public set ClassNum(classNum:string){
        this.classNum = classNum;
    }
    public get ClassNum(){
        return this.classNum;
    }

    // numOfStudents:
    private numOfStudents: number;
    public set NumOfStudents(numOfStudents:number){
        if(numOfStudents > 0)
            this.numOfStudents = numOfStudents;
    }
    public get NumOfStudents(){
        return this.numOfStudents;
    }

    constructor(name: string, semester: string, classNum: string, numOfStudents: number){
        this.Name = name;
        this.Semester = semester;
        this.ClassNum = classNum;
        this.NumOfStudents = numOfStudents;
    }

    toString():string{
        return `Course: ${this.Name}, semester: ${this.Semester}, class: ${this.ClassNum}, 
        Students: ${this.NumOfStudents}`
    }
}