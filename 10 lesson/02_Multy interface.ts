// Interface with both property & method

// we use the speed property - in the method
interface IRun{
    speed:number;
    startRunning(speed:number):string; 
}
// we use favFood as regular property, and method with 2 values. 
interface IEat{
    favFood:string;
    startEating(food:string, minutes:number):string;
}
// interface with only method
interface ISleep{
    startSleeping(hours:number):string;
}
// Interface that implements other interfaces - 
// will use `extends`
interface IAction extends IEat, ISleep{}

// A class can implelement more than 1 interface:
class Person implements IAction, IRun{
    // implement IAction:
    public favFood: string;
    startEating(food: string, minutes: number): string {
        return `Person eats: ${food}, in ${minutes} minutes`;
    }
    startSleeping(hours: number): string {
        return `Person sleeps: ${hours} hours`;
    }

    public constructor(favFood:string, speed:number){
        this.favFood = favFood;
        this.speed = speed;
    }
    // implement IRun:
    public speed: number;
    startRunning(speed: number = this.speed): string {
        return `Person runs in speed: ${speed} km per hour`;
    }
}

let p1 = new Person('Pizza', 20); // favFood = Pizza, speed = 20
console.log(p1.startEating(p1.favFood, 30)); // startEating('falafel' , 30);
console.log(p1.startSleeping(3.5));

// we can call the method with no params - because it has default parameter
console.log(p1.startRunning());
console.log(p1.startRunning(10));