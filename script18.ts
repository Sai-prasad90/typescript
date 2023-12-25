// Unions 
// example 1

let variable: number | string;
variable = "hello";
variable = 10;

// example 2
function displayResult(value: number | string): void {
    if (typeof value === 'number') {
        console.log("The value is of number type");
    } else {
        console.log('The value is of string type');
    }
}
displayResult(12);
displayResult("hello");

// example 3

type carrrrrrr = {
        brand: string;
        model: string;
};

type Electriccarrrrrrr = {
    batteryType: string;
};

type HybridType = carrrrrrr & Electriccarrrrrrr;
type HybridTypeB = carrrrrrr | Electriccarrrrrrr;

const carrrrrrrB: HybridType = {
    brand: "polo",
    model: "q4",
    batteryType: "al",
};

let carrrrrrrC: HybridTypeB = {
    batteryType: "al2",
};
let carrrrD: HybridTypeB = {
    brand: "q6",
    model: "a4",
};

// example 4
type Logger = {
    log: (message: string) => void;
};

type Formatter = {
    format: (input: string) => string;
};

type LogFormatter = Logger & Formatter;
let logD: LogFormatter = {
    log: function (message) {
        console.log("Hello");
    },
    format: function (input) {
        console.log(input);
        return input;
    },
};

// example 5
type Age = number;
let userAge: Age = 53;

type Person = {
    name: string;
    age: number;
    email?: string;
};

let personA: Person = {
    name: "sai",
    age: 26,
};
