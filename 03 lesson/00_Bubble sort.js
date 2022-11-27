// מיון בועות - bubble sort
var arr = [2, 8, 5, 0, 3, 4, 7, 9, 1];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
