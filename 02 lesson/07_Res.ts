// Q2: - index is even / odd:

let a1:number[] = new Array<number>(2, 7, 5, 6, 5, 4, 3, 7, 9, 8);
let odd:number[] = new Array<number>(5);
let even:number[] = new Array<number>(5);

let j=0, k=0; 

for (let i = 0; i < a1.length; i++) 
    (i % 2 == 0) ? even[j++] = a1[i]:odd[k++] = a1[i];

console.log(odd);
console.log(even);

/*
[ 7, 6, 4, 7, 8 ]
[ 2, 5, 5, 3, 9 ]
*/