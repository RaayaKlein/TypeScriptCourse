// We have 6 loops in TS:

let letters:string[] = ["Aa", "Bb","Cc","Dd"];

// 1. while
console.log("While loop");
let counter = 0;
while(counter < letters.length)
    console.log(letters[counter++]);

// 2. do - while
console.log("Do-While loop");
counter = 0;
do{
    console.log(letters[counter++]);
}while(counter < letters.length)

// 3. for
console.log("For loop");
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
// 4. for-in - go over index
console.log("For-in loop");
for (const item in letters) {
    console.log(item);
}
// 5. for-of - go over value
console.log("For-of loop");
for (const item of letters) {
    console.log(item);
}
// 6. forEach
console.log("For-each loop");
letters.forEach(item=>console.log(item));

/*
While loop
Aa
Bb
Cc
Dd
Do-While loop
Aa
Bb
Cc
Dd
For loop
Aa
Bb
Cc
Dd
For-in loop
0
1
2
3
For-of loop
Aa
Bb
Cc
Dd
For-each loop
Aa
Bb
Cc
Dd
*/
