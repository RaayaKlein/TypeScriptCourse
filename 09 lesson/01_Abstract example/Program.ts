// Cannot create an instance of an abstract class.
// let s1 = new Sport();

// We can create array of abstract class - 
// but the objects will be from sub-classes. 
let mySport:Sport[] = [
    new Swimming(false, true, true),
    new Soccer(false, 'Barcelona')
]

for (const sport of mySport) {
    console.log(sport.toString());
    console.log(`Num of awards: ` + sport.numOfAwards());
}