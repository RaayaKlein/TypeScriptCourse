// we want to have 1 place that contains all the students list. 
class UniversityInfo1{
    public VisitorsList: string[] = [];
}

console.log("A student enters the university...");

let st1 = new UniversityInfo1();
st1.VisitorsList.push('student1');

console.log("Another student wants to enter...");
let st2 = new UniversityInfo1();
st2.VisitorsList.push('student2');

// There is a problem here: 
// we can create more than 1 time an object of class `UniversityInfo`. 
// there are duplicated values.. 

// ['student1']   , ['student2']