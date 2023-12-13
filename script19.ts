//type assertion

//program 1
//1
let variableee:any= "Hello typescript" ;//any means it cn hold any value strng num

let lenght:number = (variableee as string).length
//here we jabardasti said its a string so we can lenght prope

//2
let variable5:any = "hello ts" ;
let lenght2:number = (<string>variable5).length