// Program 1
// Define a function identity that takes a number as an argument and returns the same number.
function identity(arg: number) {
    return arg;
}
// Call the function with the argument 34 and assign the result to the variable q.
let q = identity(34);

// Program 2
// Define a function identity2 that takes any type as an argument and returns the same type.
function identity2(arg: any) {
    return arg;
}
// Call the function with the argument 23.
identity2(23);

// Program 3
// Define a generic function identity3 that takes a type parameter T and returns the same type.
function identity3<T>(arg: T): T {
    return arg;
}
// Call the function with a number and a string, specifying the types explicitly.
let q1 = identity3<number>(12);
let q2 = identity3<String>("hello");

// Program 4
// Define a generic function identity4 that takes two arguments of the same type and performs addition or concatenation based on the type.
function identity4<T>(arg1: T, arg2: T) {
    if (typeof arg1 == 'number' && typeof arg2 == "number") {
        return arg1 + arg2;
    } else if (typeof arg1 == "string" && typeof arg2 == "string") {
        return arg1 + arg2;
    }
}
// Call the function with number and string arguments.
let a = identity4<number>(13, 4);
let ab = identity4<string>("hello", "hello");

// Program 5
// Define an interface LengthWise with a length property.
interface LengthWise {
    length: number;
}
// Define a generic function identity5 that takes an argument of a type extending LengthWise and returns the same type.
function identity5<T extends LengthWise>(arg: T): T {
    arg.length; // Access the length property.
    return arg;
}
// Call the function with a string argument.
identity5<string>("hello");

// Program 6
// Define a generic class Boxe with a private variable varA and a method displayVarA.
class Boxe<T> {
    private varA: T;
    constructor(a: T) {
        this.varA = a;
    }
    // Method to display the value of varA.
    displayVarA(): T {
        return this.varA;
    }
}
// Create instances of the class with string and number types.
let obj = new Boxe<string>("hello");
let obj2 = new Boxe<number>(1);
// Retrieve the values using the displayVarA method.
let q11 = obj.displayVarA();
let q12 = obj2.displayVarA();
// Program 1
// Define a function identity that takes a number as an argument and returns the same number.
function identity(arg: number) {
    return arg;
}
// Call the function with the argument 34 and assign the result to the variable q.
let q = identity(34);

// Program 2
// Define a function identity2 that takes any type as an argument and returns the same type.
function identity2(arg: any) {
    return arg;
}
// Call the function with the argument 23.
identity2(23);

// Program 3
// Define a generic function identity3 that takes a type parameter T and returns the same type.
function identity3<T>(arg: T): T {
    return arg;
}
// Call the function with a number and a string, specifying the types explicitly.
let q1 = identity3<number>(12);
let q2 = identity3<String>("hello");

// Program 4
// Define a generic function identity4 that takes two arguments of the same type and performs addition or concatenation based on the type.
function identity4<T>(arg1: T, arg2: T) {
    if (typeof arg1 == 'number' && typeof arg2 == "number") {
        return arg1 + arg2;
    } else if (typeof arg1 == "string" && typeof arg2 == "string") {
        return arg1 + arg2;
    }
}
// Call the function with number and string arguments.
let a = identity4<number>(13, 4);
let ab = identity4<string>("hello", "hello");

// Program 5
// Define an interface LengthWise with a length property.
interface LengthWise {
    length: number;
}
// Define a generic function identity5 that takes an argument of a type extending LengthWise and returns the same type.
function identity5<T extends LengthWise>(arg: T): T {
    arg.length; // Access the length property.
    return arg;
}
// Call the function with a string argument.
identity5<string>("hello");

// Program 6
// Define a generic class Boxe with a private variable varA and a method displayVarA.
class Boxe<T> {
    private varA: T;
    constructor(a: T) {
        this.varA = a;
    }
    // Method to display the value of varA.
    displayVarA(): T {
        return this.varA;
    }
}
// Create instances of the class with string and number types.
let obj = new Boxe<string>("hello");
let obj2 = new Boxe<number>(1);
// Retrieve the values using the displayVarA method.
let q11 = obj.displayVarA();
let q12 = obj2.displayVarA();
// Program 1
// Define a function identity that takes a number as an argument and returns the same number.
function identity(arg: number) {
    return arg;
}
// Call the function with the argument 34 and assign the result to the variable q.
let q = identity(34);

// Program 2
// Define a function identity2 that takes any type as an argument and returns the same type.
function identity2(arg: any) {
    return arg;
}
// Call the function with the argument 23.
identity2(23);

// Program 3
// Define a generic function identity3 that takes a type parameter T and returns the same type.
function identity3<T>(arg: T): T {
    return arg;
}
// Call the function with a number and a string, specifying the types explicitly.
let q1 = identity3<number>(12);
let q2 = identity3<String>("hello");

// Program 4
// Define a generic function identity4 that takes two arguments of the same type and performs addition or concatenation based on the type.
function identity4<T>(arg1: T, arg2: T) {
    if (typeof arg1 == 'number' && typeof arg2 == "number") {
        return arg1 + arg2;
    } else if (typeof arg1 == "string" && typeof arg2 == "string") {
        return arg1 + arg2;
    }
}
// Call the function with number and string arguments.
let a = identity4<number>(13, 4);
let ab = identity4<string>("hello", "hello");

// Program 5
// Define an interface LengthWise with a length property.
interface LengthWise {
    length: number;
}
// Define a generic function identity5 that takes an argument of a type extending LengthWise and returns the same type.
function identity5<T extends LengthWise>(arg: T): T {
    arg.length; // Access the length property.
    return arg;
}
// Call the function with a string argument.
identity5<string>("hello");

// Program 6
// Define a generic class Boxe with a private variable varA and a method displayVarA.
class Boxe<T> {
    private varA: T;
    constructor(a: T) {
        this.varA = a;
    }
    // Method to display the value of varA.
    displayVarA(): T {
        return this.varA;
    }
}
// Create instances of the class with string and number types.
let obj = new Boxe<string>("hello");
let obj2 = new Boxe<number>(1);
// Retrieve the values using the displayVarA method.
let q11 = obj.displayVarA();
let q12 = obj2.displayVarA();
