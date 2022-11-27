class Book{

    // private property:
    private _numOfpages:number; // undefined

    // write-only:
    public set NumOfPages(n:number){
        if(n>0 && n<2000)
            this._numOfpages = n;
    }

     // private property:
     private _author:string = "Jhon B"; 

     // read-only:
     public get Author(){
         return this._author;
     }
}

let b1 = new Book();
b1.NumOfPages = 100;
// Cannot access the property - it has no getter:
// console.log(b1.NumOfPages); // undefined

// Cannot assign to 'Author' because it is a read-only property.
// b1.Author = 'Alex';
console.log(b1.Author);
