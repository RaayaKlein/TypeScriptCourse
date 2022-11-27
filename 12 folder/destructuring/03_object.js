const myPerson = {
    name: 'John', 
    age: 30,
    courses: ['Java', 'TypeScript', 'React-native']
}

// We can assign to new variables data from the object (by the keys)
const { name, age } = myPerson;

console.log(`name = ${name}, age = ${age}`);
// name = John, age = 30