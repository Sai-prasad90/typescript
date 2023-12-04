interface Person {
    firstName: string,
    lastName: string,
    age: number
}

let personR: Person = {
    firstName: "sai",
    lastName: "prasad",
    age: 54
}

interface Car {
    brand: string,
    model: string,
    year?: number
}

let merce: Car = {
    brand: "mercedes",
    model: "amg",
    year: 23
}

interface Point {
    readonly x: number,
    readonly y: number
}

let points: Point = {
    x: 12,
    y: 2
}

interface Calculator {
    add(x: number, y: number): number;
    sub(x: number, y: number): number;
}

let calculator: Calculator = {
    add: (x, y) => {
        return x + y
    },
    sub: (x, y) => {
        return x - y
    }
}
calculator.add(12, 4)
calculator.add(12, 3)

interface WorldBank {
    save(rate: number): number;
    loan(rate: number): number;
}

let SBI: WorldBank = {
    save(rate) {
        return 10
    },
    loan(rate) {
        return 10
    }
}
