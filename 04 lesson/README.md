# OOP - Object Oriented Programming

OOP is about creating objects that contain both data & functions.

> The main goal of OOP - is to simulate the real world objects

### Why use OOP?

- OOP is faster and easier to execute.
- OOP provides a clear structure for the program
- OOP helps with `DRY`(Don't repeat yourself) - write once -> use anywhere.

### Class

we use classes to create a template (תבנית) for objects.

- Class does not take place in memory.
- An `object` - is an instance of a class
- When object is created - it inherits all the properties & the methods of the class.

### Constrcutor

```ts
public constructor(){

}
```

- The constructor can initialize properties when object is created(in the same line - inside `()`).
- Every time we create an object - it's first action will be to call the constructor.
- When we create a constructor - it overrides the default constructor
- Constructor can get parameters - properties from the outside.

> In TypeScript: We can create only 1 constructor. To make it dynamic(so each time it will get diffrent amount of parameters) - we can use default & optional parameter syntax.
> For example:

```ts
// name is optional, age is default 0
 public constructor(name?:string, age:number = 0){
        this.Name = name;
        this.Age = age;
        this.Hello();
    }
```

### Encapsulation

The meaning of `Encapsulation` is to make the sure that sensitive data is hidden from users. To achieve this:

1. Declare properties as **private**
2. Provide **public** **get** and **set** functions - to access and to update the value of the private property.

- **set** method - will insert from outside the class value to the private property.
- **get** method - will get from outside the class value to the private property, and show it.

#### Access modifiers - הרשאות גישה

- **private** - the code will be accessible only within the same class.
  Private properties will start with lowercase, and usually with `_` - underscore
- **public** - the code will be accessible to all classes.
  Public properties will start with uppercase

#### Why use encapsulation?

- Better control of class members
- Fields can be made **read-only** (use of `get` method only) or **write-only** (use of `set` method only)
- Security - inscreased. Users can access only what we allow them to.
- Validation check - before we insert data to a property - we can check it, in the **set** method.

##### Terms - מונחים

- Object Oriented Programming - תכנות מונחה עצמים
- Class - מחלקה
- Instance - מופע של מחלקה - אובייקט
- Properties - מאפיינים
- Methods - פעולות - פונקציות בתוך המחלקה
- Constructor - בנאי
- Encapsulation - כימוס

### If code doenst run for getter and setter:

```
tsc -t es5 nameOfFile
```
