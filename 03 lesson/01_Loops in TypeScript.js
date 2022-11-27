// We have 6 loops in TS:
var letters = ["Aa", "Bb", "Cc", "Dd"];
// 1. while
console.log("While loop");
var counter = 0;
while (counter < letters.length)
    console.log(letters[counter++]);
// 2. do - while
console.log("Do-While loop");
counter = 0;
do {
    console.log(letters[counter++]);
} while (counter < letters.length);
// 3. for
console.log("For loop");
for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
// 4. for-in - go over index
console.log("For-in loop");
for (var item in letters) {
    console.log(item);
}
// 5. for-of - go over value
console.log("For-of loop");
for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
    var item = letters_1[_i];
    console.log(item);
}
// 6. forEach
letters.forEach(function (item) { return console.log(item); });
