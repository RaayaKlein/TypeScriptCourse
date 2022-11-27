# Overloading - העמסה

- Overloading in an OOP method.

We can have more than 1 function with the same name in one class.
The difference between the metohds will be:

1. Number of parameters
2. Type of parameters

#### In TypeScript we don't have the ability to create more than 1 function with the same name.

We have better solution:

We can create 1 function that will get all the options.

1. Using default(x:number=0) / optional paramters(x?:number).
2. Type of parameters (x:(number | boolean))

> Note: This happen in constructors too. (we can create only in constructor, and add default & optional parameters).
