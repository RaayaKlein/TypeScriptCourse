
// throw new Error() - we can create our own Errors.
// throw will reach the catch

function validateAge(age){
    if (age >= 0 && age <= 120) console.log(`Age = ${age}`);
    else throw new Error('Age must be betwwen 0 to 120');
}

console.log("Start program");
try{
    validateAge(-4);
} catch(e){
    console.log(e.message);
}

console.log("End program");