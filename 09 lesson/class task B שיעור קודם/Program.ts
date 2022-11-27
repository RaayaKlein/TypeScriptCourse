// prgoram: main

let arr:Animal[] = [
    new Human(5, 2, 'brown', '3kg', 'John cohen', '5435465', true, 'USA'),
    new Human(5, 2, 'brown', '3kg', 'John cohen', '5435465', true, 'USA'),
    new Dolphin(3, 0, 'none', '100kg', 'blue-gray', 'eeee', 'The red sea'),
    new Dolphin(3, 0, 'none', '100kg', 'blue-gray', 'eeee', 'The red sea'),
    new Snake(1, 0, true, 5, 'Python', 3, 'Australia'),
    new Snake(1, 0, true, 5, 'Python', 3, 'Australia'),
    new Turtle(3, 4, false, 3, true, 'dotted',['x', 'y','z'] )
]

for (const animal of arr) {
    console.log(animal.toString());
}