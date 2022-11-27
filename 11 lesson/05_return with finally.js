// JS is asyncronous and one-threaded. 
// Notice that finally will run before try & catch here.
// Happen because try and catch use `return`. 
const getData = num => {
    console.log('start program...');

    try{
        return num.toString();
    } catch(e){
        return e.message; 
    } finally{
        console.log("In finally");
    }
    // Unreachable code detected -> This code will never run
    console.log('end program...');
}

console.log(getData(12));
console.log(getData(null));
/*
start program...
In finally
12
start program...
In finally
Cannot read property 'toString' of null
*/