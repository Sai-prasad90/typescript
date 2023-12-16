// Type assertion

// Program 1
let variable3: any = "Hello habibi";
// Using 'as' keyword for type assertion
let length1: number = (variable3 as string).length;

// Program 2
let variable4: any = "Hello Es 6";
// Using angle bracket syntax for type assertion
let length5: number = (<string>variable4).length;

// Program 3
type Person4 = { name: string, age: number };
let variable8: any = { name: "sai", age: 25 };
// Type assertion to define variable6 with type Person4
let variable10: Person4 = variable8 as Person4;

// Program 4
let arr: any[] = ["SAIPRASAD", "01SAIPRASAD@GMAIL.COM", 9011212430];
// Using 'as' keyword to assert the type and converting to lowercase
let lastName = (arr[1] as string).toLowerCase().length;

// Program 5
type Employee3 = { id: number; nameL: string; salary: number };
let data10: any = { id: 1, nameL: "shreya", salary: 1000 };

let variable6: Employee3 = data10 as Employee3;


//program 6 - html file create
let aa = document.querySelector('input') as HTMLInputElement
//After HTMLInputElement it will show all properties
aa.value