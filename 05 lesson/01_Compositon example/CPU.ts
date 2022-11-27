class CPU{

    // Properties:
    public SerialNumber: number;
    public NumOfCores: number;
    public Company: string;
    public Price: number;

    // Function to print all the data for each object:
    toString():string{
        return `CPU num: ${this.SerialNumber} from ${this.Company}, 
        has ${this.NumOfCores} cores, and costs: ${this.Price}`;
    }

    // This constructor takes all the properties of the class:
    public constructor(SerialNumber: number, NumOfCores: number, Company: string, Price: number){
        this.SerialNumber = SerialNumber;
        this.NumOfCores = NumOfCores;
        this.Company = Company;
        this.Price = Price;
    }

}