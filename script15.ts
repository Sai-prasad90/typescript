// ==================

// Public
class Pet {
    // Public property 
    public name: string;

    
    constructor() {
        this.name = "throttle";
    }
}


let myPet = new Pet();

// public property 
console.log(myPet.name);

// =====================

// Private
class Book {
    // Private property title 
    private title: string;

    
    constructor() {
        this.title = "Beauty of freaking word";
    }

    // Public method 
    public read(): string {
        return this.title;
    }
}


let myBook = new Book();

// Attempting to access the private property directly will result in an error
// Uncommenting the line below will cause a compilation error


// Call the public method to check private property
myBook.read();

// =====================

// Protected
class Parent {
    // Protected property age
    protected age: number;

    
    constructor(age: number) {
        this.age = age;
    }

    // Private method 
    private pocketm(): number {
        return 50;
    }

    // Public method to display the protected property that age wala
    public displayAge(): number {
        // to private method "pocketm" within the class
        this.pocketm();
        return this.age;
    }
}

// Child class inherits from Parent
class Child extends Parent {
    // Public method in the Child class accessing protected properties and private method from the Parent class
    public displayAgeAndPocketm(): number {
        // Protected properties and private methods are accessible within the inherited class
        return this.age + this.pocketm();
    }
}


let myChild = new Child();

// result of the public method in the Child class
console.log(myChild.displayAgeAndPocketm());

// =====================

// Interface ---- Complete abstraction
// Partially hide -- Abstract class
abstract class Device {
    // Abstract method that must be implemented by subclasses to turn on the device
    abstract turnOn(): void;

  
    abstract switchOff(): void;

    ice
    displayBrand(): string {
        return "Samsung";
    }

    
    }

// SmartPhone class extends Device
class SmartPhone extends Device {
    // Implementation of the abstract method to turn on the device
    turnOn(): void {
        console.log('Turn on the phone');
    }

    // Implementation of the abstract method to switch off the device
    switchOff(): void {
        console.log('Turn off the phone');
    }

    // Additional method specific to SmartPhone
    calling(): void {
        console.log('Receiving and dialing');
    }
}

// We cannot have an instance of an abstract class, but we can use it as a type
let myPhone: Device = new SmartPhone();

(myPhone as SmartPhone).calling();
myPhone.turnOn();
myPhone.switchOff();
myPhone.displayBrand();
