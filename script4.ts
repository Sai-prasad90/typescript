let x:number = 10


// program 1
function multi(x:number , y:number){
    return x * y
}
let a = multi(5,3)

// program 2

function addition(x:number , y:number):number{
    return x + y
}
let q2 = addition(8,2)

// program 3

function sub(x:number , y:number):void{
    console.log( x - y)
}
sub(5,2)

// program 4 
function additionD(x:number,y:number,avail:boolean,msg:string){
    if(avail){
        console.log(`${msg} ${x+y} `)
    }
}
additionD(12,3,true,"The addition of two numbers")


// program 5
let numbers:number [] = [11,22,33,44,55]
let names :string[] = ["sai","wate","b.tech"]
let info1 :[string,number,number] = ["sai",26,9011212430] 
let info2:[string , number , boolean] = ["sai",80,false]

// program 6

let info6 = {
    firsName:"sai",
    lastName:"wate"
}

let info7:{firstName:string,lastName:string,age:number};
info7 = {
    firstName:"sai",
    lastName:"wate",
    age:25
}

// 

// Manager , manager , MaNager

enum Roles {
    admin,
    customer,
    support,
    manager0
}
9

if(Roles.admin){
    console.log("I am admin ")
}
else if (Roles.manager){
    console.log("I am manager")
}
else if (Roles.customer){
    console.log('I am customer')
}
else if(Roles.support) {
    console.log("I am at support")
}