let num = null;

console.log('start program...');

// this is a problematic code:
try{
    console.log(num.toString());
} catch(error){
    console.log(error); // TypeError: Cannot read property 'toString' of null
}

console.log('end program...');

/*
start program...
end program...
*/