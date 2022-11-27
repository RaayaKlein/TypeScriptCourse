if(true){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;
}

console.log(`myVar = ${myVar}`); // myVar = 10
console.log(`myLet = ${myLet}`); // ReferenceError: myLet is not defined
console.log(`myConst = ${myConst}`); // ReferenceError: myConst is not defined

