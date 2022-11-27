let num = null;

console.log('start program...');

// error.message - will show only the basic info about the error
try{
    console.log(num.toString());
} catch(e){
    console.log(e.message); 
}

// notice that the program will continue running
console.log('end program...');

/*
start program...
Cannot read property 'toString' of null
end program...
*/