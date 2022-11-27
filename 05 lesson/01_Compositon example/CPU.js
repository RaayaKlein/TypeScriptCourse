var CPU = /** @class */ (function () {
    // This constructor takes all the properties of the class:
    function CPU(SerialNumber, NumOfCores, Company, Price) {
        this.SerialNumber = SerialNumber;
        this.NumOfCores = NumOfCores;
        this.Company = Company;
        this.Price = Price;
    }
    // Function to print all the data for each object:
    CPU.prototype.toString = function () {
        return "CPU num: " + this.SerialNumber + " from " + this.Company + ", \n        has " + this.NumOfCores + " cores, and costs: " + this.Price;
    };
    return CPU;
}());
