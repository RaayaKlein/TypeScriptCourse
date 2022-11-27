// The problem - the variable `num` is not defined
try{
    console.log(`num  = ${num}`);
} catch(e){
    console.log(e.message); // num is not defined
    console.log(e instanceof ReferenceError); // true
    console.log(e.name); // ReferenceError
}
