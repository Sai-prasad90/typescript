// Class representing a Cat
class Cat {
    // Properties
    breed: string;

    // Constructor to initialize the breed property
    constructor(breed: string) {
        this.breed = breed;
    }

    // Method to make the cat meow
    meow(): void {
        console.log("Meow ..!");
    }
}

// Create an instance of the Cat class
let myCat = new Cat("Siamese");

// Log the breed of the cat
console.log(myCat.breed);

// Make the cat meow
myCat.meow();

//==============
// Class representing an Animal
class Animal {
    // Property
    type: string;

    // Constructor to initialize the type property
    constructor(ty: string) {
        this.type = ty;
    }

    // Method to make a generic sound
    makeSound(): void {
        console.log("Some generic sound ..");
    }
}

// Class representing a Tiger, inheriting from Animal
class Tiger extends Animal {
    age: number;

    // Constructor to initialize type and age properties
    constructor(ty: string, ag: number) {
        // Call the constructor of the base class (Animal)
        super(ty);
        this.age = ag;
    }

    // Override the makeSound method to make a specific sound for a tiger
    makeSound(): void {
        console.log("Roar ..");
    }
}

// Create an instance of the Tiger class
let myTiger = new Tiger("Bengal Tiger", 5);

// Log the age and type of the tiger
console.log(myTiger.age);
console.log(myTiger.type);

// Make the tiger make a sound
myTiger.makeSound();

// Program 3
// Class representing a BankAccount
class BankAccount {
    // Properties
    private balance: number = 0;
    private accountHolder: string;

    // Constructor to initialize the accountHolder property
    constructor(accH: string) {
        this.accountHolder = accH;
    }

    // Method to deposit money into the account
    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }

    // Method to withdraw money from the account
    withDrawl(amount: number): void {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
        } else {
            console.log('Insufficient funds');
        }
    }

    // Method to get the current balance
    getBal(): number {
        return this.balance;
    }
}

// Create an instance of the BankAccount class for a different account holder
let HDFC = new BankAccount("John Doe");

// Log the initial balance of the account
HDFC.getBal();
