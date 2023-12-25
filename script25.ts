// program 1
// Define a function named 'greet' that takes a parameter 'par' of any type and returns it.
function greet(par: any): any {
    return par;
}

// Call 'greet' function with different types of arguments.
let o = greet(1);        // 'o' is of type number
let p = greet(true);     // 'p' is of type boolean
let q = greet("sai");    // 'q' is of type string

// Define another function named 'greet2' that takes a parameter 'nme' of type string and returns it.
function greet2(nme: string) {
    return nme;
}

// Call 'greet2' function with a string argument.
let r = greet2("hello"); // 'r' is of type string

// program 2
// generic functio 'arg' of type T and returns it
function greet3<T>(arg: T): T {
    return arg;
}

//
let q1 = greet3<string>("hello");  // 'q1' is of type string
let q2 = greet3<number>(2);        // 'q2' is of type number

// program 3
// generic function  'addEE' that with tow parameters sobat of type T and performs a conditional operation
function addEE<T>(p1: T, p: T) {
    if (typeof p1 == 'number' && typeof p == 'string') {
        console.log(p + p1); // Log the result of concatenating string and number.
        return p + p1;       // Return the concate wala is string and number.
    } else if (typeof p1 == 'string' && typeof p == 'string') {
        return p + p1;       // Return the concatenated strings.
    }
}

// Call 'addEE' function with specific types for the generic parameter.
let q11e = addEE<number>(4, "sai");          // 'q11e' is of type string
let q11e1 = addEE<string>("hello", "world"); // 'q11e1' is of type string

let q11f = addEE<string>("hello", "world");

// program  3
// Define a generic class 'Box' with a private property 'content' of type T
class Box<T> {
    private content: T;

    // Constructor that initializes the 'content' property with the provided parameter
    constructor(co: T) {
        this.content = co;
    }

    // Getter method to retrieve the 'content' property
    getConten(): T {
        return this.content;
    }
}

// Create instances of 'Box' with specific types for the generic parameter.
let boxNumber = new Box<number>(42);     // is an instance of Box with  type number
let boxString = new Box<string>("hello"); //n instance of Box with  type string
