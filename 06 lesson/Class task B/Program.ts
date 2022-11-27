let myPeople: Person[] = [
    new Person("Alex", new Address(1, "x", "Ariel", "Israel"), 
        new Profession("Teacher", 40, 10000), new Birthday(2, 5, 1990)),
    new Person("Bracha", new Address(1, "x", "Ariel", "Israel"), 
        new Profession("Programmer", 40, 15000), new Birthday(8, 3, 1994))
]

for (const person of myPeople) {
    console.log(person.toString());
}