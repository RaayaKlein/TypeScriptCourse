abstract class Sport{

    public IsGroup:boolean;
    public IsIndoor:boolean;

    private addr: Address;

    public set Addr(addr:Address){
        this.addr = addr;
    }

    public get Addr(){
        return this.addr;
    }


    constructor(isGroup:boolean, isIndoor:boolean, x:Address){
        this.IsGroup = isGroup;
        this.IsIndoor = isIndoor;

        this.Addr = x;
    }

    toString():string{
        return `Sport: isgroup: ${this.IsGroup}, isIndoor: ${this.IsIndoor}, Addr: ${this.Addr.toString()}`
    }

    // חתימה של פונקציה מופשטת
    // חתימה - מה פונקציה מקבלת, ומה היא מחזירה
    public abstract numOfAwards():number;


    
}