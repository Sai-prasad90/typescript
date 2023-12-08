//===============================
class Myclass {
    public myProperty: string;

    constructor() {
        this.myProperty = "hello";
    }
}

let r = new Myclass();
console.log(r.myProperty);

//=============================
class myClass2 {
    private myPrivateProperty: string;

    constructor() {
        this.myPrivateProperty = "hello from sai";
    }

    // Access the private field in a public method
    public getValue(): string {
        return this.myPrivateProperty;
    }
}

let b = new myClass2();
// console.log(b.myPrivateProperty); // Not accessible
console.log(b.getValue());


//============================
class myClass3 {
    protected age: number;

    constructor(ag: number) {
        this.age = ag;
    }

    private displayBalance(): number {
        return 10000;
    }

    public displayAge(): number {
        this.displayBalance();
        return this.age;
    }
}

class myClass4 extends myClass3 {
    public displayAge2(): number {
        // Private methods and properties are not accessible outside the class
        // Protected methods and properties are accessible within the inherited class
        return this.age;
    }
}

//==========================
// Complete abstraction using an interface
interface Bank {
    loan(): number;
    save(): number;
    displayCountryName(): string;
}

// Partially hide using an abstract class
abstract class WorldBank implements Bank {
    displayCountryName(): string {
        return "India";
    }

    // Abstract methods must be implemented by the derived class
    abstract loan(): number;
    abstract save(): number;
}

class SBIeee extends WorldBank {
    loan(): number {
        console.log('I am a loan from SBI');
        return 10;
    }

    save(): number {
        console.log('I am savings from SBI');
        return 20;
    }

    branchName(): string {
        return "Nagpur";
    }
}

// We cannot have an instance of an abstract class
let sbiA: WorldBank = new SBIeee();
console.log(sbiA.branchName());
console.log(sbiA.loan());
console.log(sbiA.save());
console.log(sbiA.displayCountryName());

