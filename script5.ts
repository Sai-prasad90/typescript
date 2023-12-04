
enum Direction {
    EAST = "EAST",
    SOUTH = "SOUTH",
    WEST = "WEST",
    NORTH = "NORTH"
}

if (Direction.NORTH) {
    console.log("Ladakh");
    console.log(Direction.NORTH);
}
if (Direction.EAST) {
    console.log("Manipur");
}
if (Direction.WEST) {
    console.log("Mumbai");
}
if (Direction.SOUTH) {
    console.log("Indira point");
}


enum StatusCode {
    NotFound = 404,
    Success = 200,
    Created = 201,
    TimeOut = 503
}

console.log(StatusCode.TimeOut);

interface Student {
    firstName: string;
    lastName: string;
    age: number;
}

let sai: Student = {
    firstName: "sai",
    lastName: "wate",
    age: 25 , 
};
console.log(sai)

