let BubbleSort = () => {// מיון בועות - bubble sort
    let arr:number[] = [2, 8, 5, 0];
    console.log(arr);

    // First loop - goes over the array - each item in the array
    for (let i = 0; i < arr.length; i++) {
        // second loop: will check each item with all the other items
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log(arr); // 0-9
}

BubbleSort();

// arr = [2, 8, 5, 0]. i = 0, j = 0. arr[0] > arr[1]: 2 > 8?
                    // i = 0, j = 1. arr[1] > arr[2]: 8 > 5?
// arr = [2, 5, 8, 0]. i = 0, j = 2. arr[2] > arr[3]: 8 > 0?
// arr = [2, 5, 0, 8]. After first round - we put the largest number in the end!


