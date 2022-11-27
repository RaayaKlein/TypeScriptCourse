let num = 5;

console.log('start program...');

try{
    console.log(num.toString());
} catch(e){
    console.log(e.message); 
} finally{
    console.log("Finally will always run!!");
}
hgfjfgf
console.log('end program...');

/*
---------- case of error:
start program...
Cannot read property 'toString' of null
Finally will always run!!
end program...

---------- case of success:
start program...
5
Finally will always run!!
end program...
*/