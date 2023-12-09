// UNION AND INTERSECTION

// Program 1
// Defining a type 'Result' that can be either a string or a number
type Result = string | number;

// Declaring a variable 'value' of type 'Result'
let value: Result;

// Assigning a string to 'value'
value = 'hello';

// Reassigning a number to 'value'
value = 10;

// Program 2
// Intersection type: Combining properties of 'Person' and 'Employee'
type Person = {
    name: string;
    age: number;
};

type Employee = {
    jobTitle: string;
    salary: number;
};

// Creating a type 'EmployeePerson' by combining 'Person' and 'Employee' using '&'
type EmployeePerson = Person & Employee;

// Declaring a variable 'chinmayK' of type 'EmployeePerson'
let chinmayK: EmployeePerson;

// Assigning values to 'chinmayK' with properties from both 'Person' and 'Employee'
chinmayK = {
    name: "Chinmaye",
    age: 34,
    jobTitle: "Manager",
    salary: 12300
};

// Program 3
// Intersection and Union of shape types
type Shape = { color: string };
type Circle = Shape & { radius: number }; // Intersection of 'Shape' and 'Circle'
type Square = Shape & { sideLength: number }; // Intersection of 'Shape' and 'Square'
type ShapeUnion = Circle | Square; // Union of 'Circle' and 'Square'
type ShapeIntersection = Circle & Square; // Intersection of 'Circle' and 'Square'

// Declaring variables of different types
let r1: Shape;
let r2: Circle;
let r3: Square;
let r4: ShapeUnion;
let r5: ShapeIntersection;

// Assigning values to variables
r4 = {
    color: "red",
    radius: 34
};

r4 = {
    color: "green",
    sideLength: 23
};

r5 = {
    color: "blue",
    radius: 34,
    sideLength: 34
};

// Program 4
// Combining and Union of vehicle types
type Car = { color: string };
type Truck = Car & { container: string }; // Intersection of 'Car' and 'Truck'
type Bus = Car & { passenger: number }; // Intersection of 'Car' and 'Bus'
type CTB = Car & Truck & Bus; // Intersection of 'Car', 'Truck', and 'Bus'
type CTBU = Car | Truck | Bus; // Union of 'Car', 'Truck', and 'Bus'

// Declaring variables of different types
let k: CTB;
let k1: CTBU;
let k2: CTBU;
let k3: CTBU;

// Assigning values to variables
k = {
    color: "red",
    container: "big",
    passenger: 3
};

k1 = {
    color: "red"
};

k2 = {
    color: "red",
    container: "big"
};

k3 = {
    color: "blue",
    passenger: 3
};
