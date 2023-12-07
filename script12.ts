// Program 1

// Define a class representing a Car
class Car {
    brand: string;

    // Constructor to initialize the brand property
    constructor(b: string) {
        this.brand = b;
    }

    // Method to start the car and log the brand
    start(): void {
        console.log(this.brand);
    }
}

// Create an instance of the Car class with the brand "Toyota"
let myCar = new Car("Toyota");

// Access the brand property and call the start method
console.log(myCar.brand); // Output: Toyota
myCar.start(); // Output: Toyota


// Program 2

// Define a class representing a MobilePhone
class MobilePhone {
    model: string;

    // Constructor to initialize the model property
    constructor(m: string) {
        this.model = m;
    }

    // Method to make a call and log the model
    makeCall(): void {
        console.log(this.model);
    }
}

// Create a class representing a SmartPhone that extends MobilePhone
class SmartPhone extends MobilePhone {
    // Method to browse the internet and log the model
    browseInternet(): void {
        console.log(this.model);
    }
}

// Create an instance of the SmartPhone class with the model "iPhone"
let myPhone = new SmartPhone("iPhone");

// Access the model property and call methods from both MobilePhone and SmartPhone classes
console.log(myPhone.model); // Output: iPhone
myPhone.makeCall(); // Output: iPhone
myPhone.browseInternet(); // Output: iPhone


// Program 3

// Define a class representing a Shape
class Shape {
    type: string;

    // Constructor to initialize the type property
    constructor(t: string) {
        this.type = t;
    }

    // Method to display the type of the shape
    displayType(): void {
        console.log(this.type);
    }
}

// Create a class representing a Circle that extends Shape
class Circle extends Shape {
    radius: number;

    // Constructor to initialize the radius property and call the superclass constructor
    constructor(t: string, r: number) {
        super(t);
        this.radius = r;
    }

    // Method to calculate and display the area of the circle, logging the type
    calculateArea(): void {
        console.log(this.type);
    }
}

// Create an instance of the Circle class with the type "circle" and radius 5
let myCircle = new Circle("circle", 5);

// Access the type property and call methods from both Shape and Circle classes
console.log(myCircle.type); 
myCircle.displayType(); 
myCircle.calculateArea(); 
