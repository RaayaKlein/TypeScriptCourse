// In a class - we do not use const/var/let. 

class Bag{

    // A class member cannot have the 'const' keyword.
    // const NumOfPackets;

    // readonly can be 
    public readonly x:number;
}

// We can declare consts here: (outside the class):
const fName = 'john';

// Cannot assign to 'fName' because it is a constant.
// fName = 5;

// 'const' declarations must be initialized.
// const myNumber:number;