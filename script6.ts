 // program 1
enum Direction {
    Up = 5,
    Down,
    Left,
    Right
}

let myDirection:Direction = Direction.Up
console.log(myDirection)
console.log(Direction.Down) // 2
console.log(Direction.Left) // 3
console.log(Direction.Right) // 4


// program 2 

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
let myColor:Color = Color.Blue
console.log(Color.Red)
console.log(Color.Green)
console.log(Color.Blue)

// program 3 

// Hetrogeneous Enums 

enum  Status {
    Success = 200,
    NotFound = "Not_Found",
    Error = "Error"

}
let myStatus:Status = Status.Success
console.log(Status.Success)

// program 4 
// enum with function
enum LogLevel {
    Info = 1 ,
    warning = 2 ,
    Error  = 3
}

function logMessage(message:string , a:LogLevel){
    console.log(`${message} ${a}`) //1
   // console.log(LogLevel[a])
}

logMessage("this is info message",LogLevel.Info)
logMessage("this is info warning",LogLevel.warning)
logMessage("this is info message",LogLevel.Error)