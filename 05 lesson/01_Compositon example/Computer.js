// Computer has a CPU - composition:
var Computer = /** @class */ (function () {
    function Computer() {
    }
    // Print all the data to the user:
    Computer.prototype.toString = function () {
        return "Computer from " + this.Company + ", costs: " + this.Price + ", \n        and it's CPU: " + this.Cpu;
    };
    return Computer;
}());
var c1 = new Computer();
c1.Company = "Del";
c1.Price = 2500;
c1.Cpu = new CPU(43565475, 8, "Intel", 800);
console.log(c1.toString());
