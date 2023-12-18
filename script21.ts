// // program 1
// // Output:
// // Down

// // Stepwise explanation:
// // 1. An enum named 'Direction' is defined with four numeric values: Up, Down, Left, and Right.
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// // 2. A variable 'movement' is declared of type 'Direction' and assigned the value 'Direction.Down'.
// let movement: Direction = Direction.Down;
// // 3. The current value of 'movement' is then printed to the console using console.log().
// console.log(movement);

// // // program 2
// // Output:
// // RED

// // Stepwise explanation:
// // 1. An enum named 'Color' is defined with three string values: Red, Green, and Blue, each assigned a corresponding string.
// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }
// // 2. A variable 'myFv' is declared of type 'Color' and assigned the value 'Color.Red'.
// let myFv: Color = Color.Red;
// // 3. The current value of 'myFv' is then printed to the console using console.log().
// console.log(myFv);

// // // program 3
// // Output:
// // 1

// // Stepwise explanation:
// // 1. An enum named 'Status' is defined with three numeric values: Active (1), Inactive (0), and Pending (2).
// enum Status {
//     Active = 1,
//     Inactive = 0,
//     Pending = 2
// }
// // 2. A variable 'currentStatus' is declared of type 'Status' and assigned the value 'Status.Active'.
// let currentStatus: Status = Status.Active;
// // 3. The current value of 'currentStatus' is then printed to the console using console.log().
// console.log(currentStatus);

// // // program 4


enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(WeekDay[new Date().getDay()]) //saturday


const abc: string = (() => WeekDay[new Date().getDay()])()
console.log(abc)   //saturday


//variable a is declared of type WeekDay

let a: WeekDay = WeekDay[new Date().getDay()]  //saturday
console.log(a)


