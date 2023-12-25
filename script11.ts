//program 1
// Define a class named Dog
class Dog {
    breed: string;

    // Constructor takes a parameter 'bd' and initializes the 'breed' property
    constructor(bd: string) {
        this.breed = bd;
    }

    // Method 'bark' prints "woof" to the console
    bark(): void {
        console.log("woof");
    }
}

// Create an instance of Dog with the breed "GR"
let gr = new Dog("GR");

// Access and print the 'breed' property of the Dog instance
console.log(gr.breed);

// Call the 'bark' method of the Dog instance, which prints "woof" to the console
gr.bark();


// Program 2

// Define a class named Animal
class Animal {
    type: string;

    // Constructor takes a parameter 'ty' and initializes the 'type' property
    constructor(ty: string) {
        this.type = ty;
    }

    // Method 'makeSound' prints "Make some sound.." to the console
    makeSound(): void {
        console.log("Make some sound..");
    }
}

// Define a class named DogA that extends Animal
class DogA extends Animal {}

// Create an instance of DogA with the type "gr2"
let gr2_1 = new DogA("gr2");

// Call the 'makeSound' method of the DogA instance, which prints "Make some sound.." to the console
gr2_1.makeSound();

// Access and print the 'type' property of the DogA instance
console.log(gr2_1.type);


// Program 3

// Define a class named JungleeAnimal
class JungleeAnimal extends Animal {
    legs: number;

    // Constructor takes parameters 'ty' and 'lg', initializes 'legs' and calls the parent constructor using 'super'
    constructor(ty: string, lg: number) {
        super(ty);
        this.legs = lg;
    }

    // Method 'makeSound2' prints "Bow Bow" to the console
    makeSound2(): void {
        console.log("Bow Bow");
    }

    // Override the 'makeSound' method from the parent class
    makeSound(): void {
        console.log("Make some sound..but from child");
    }
}

// Create an instance of JungleeAnimal with the type "gr2" and legs 2
let gr2_2 = new JungleeAnimal("gr2", 2);

// Call the overridden 'makeSound' method of the JungleeAnimal instance
gr2_2.makeSound();

// Access and print the 'type' property of the JungleeAnimal instance
console.log(gr2_2.type);

// Call the 'makeSound2' method of the JungleeAnimal instance, which prints "Bow Bow" to the console
gr2_2.makeSound2();
//program 4
// Define a class named BankAccount
class BankAccounts {
    private balance: number = 0;
    private accHolder: number;
    protected accName: string;
    public IFSCode: number = 123;

    // Constructor takes parameters 'accH' and 'accN' and initializes properties
    constructor(accH: number, accN: string) {
        this.accHolder = accH;
        this.accName = accN;
    }
}

// Create an instance of BankAccount with account holder 123 and account name "Saiorasad"
let SBIee = new BankAccount(321, "saiprasad");

// Access and print various properties of the BankAccount instance
console.log(SBIee.balance); // Private property, cannot be accessed
console.log(SBIee.accHolder);
console.log(SBIee.accName);
con
.2o
\//4rl
e.log(SBIee.IFSCode);
?>, 