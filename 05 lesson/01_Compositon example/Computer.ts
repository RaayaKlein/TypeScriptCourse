// Computer has a CPU - composition:

class Computer{

    // Proeprties:
    public Company: string;
    public Price: number;

    // This property type is from another class we created.
    public Cpu: CPU; // composition

    // Print all the data to the user:
    toString():string{
        return `Computer from ${this.Company}, costs: ${this.Price}, 
        and it's CPU: ${this.Cpu}`;
    }
}

let c1 = new Computer();
c1.Company = "Del";
c1.Price = 2500;
c1.Cpu = new CPU(43565475, 8, "Intel", 800);
console.log(c1.toString());
