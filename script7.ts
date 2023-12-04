// program 1

let myVariable:number|string ;                    //union
myVariable = 10
myVariable = "chinmay"


//program 2

function displayData(data:string | number):void{                 //union             
    console.log(data)
}
displayData(13)
displayData("chinmay")

// program 3 

function displayDataThree(data:string|number|boolean):void{
    console.log(data)
}
displayDataThree("hello")
displayDataThree(23)
displayDataThree(true)

// program 4 

let info9:{firstName:string , lastName:string , age:number| string} = {
    firstName:"sai",
    lastName:"wate",
    age:'85'

}

// program 5

let info10:(string|number) [] = ["sai","wate",75] 
// intersection
type Persone = {
    namee:string;
    age:number
}

type Employee = {
    employeeId:string,
    position:string
}

type EmployeePerson =  Persone & Employee                   //& intersection
let info11:EmployeePerson = {
    namee:"shreya",
    age:88,
    employeeId:"Int251",
    position:"Designer"

}
