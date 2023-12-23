//generics

// program 1

function identity(arg: any): any {     //it can be any data type 
    return arg
}

function identity2(a: number): number {    //by genericswe can fix it with one data typo
    return a
}


// program 2
// 1. Define a generic function named identityGenerics.
//    It takes a type parameter T and a parameter arg of type T.
function identityGenerics<T>(arg: T): T {      //indentitygenerics isha generic function

    return arg;
}

let a11 = identityGenerics<number>(156);
let b11 = identityGenerics<string>('84');

// program 3
class Box<T,U>{
    private content: T
    private content2:U
    constructor(x: T,y:U) {
        this.content = x
        this.content2 = y
    }

    getContent(): T {
        return this.content
    }

    getContent2(): U {
        return this.content2
    }


}
let numberStringBox = new Box<number,string>(123,"hello")
let numberStringBoxE = new Box<number,number>(123,235)

let abc1 = numberStringBox.getContent()
let abc2 = numberStringBox.getContent2()

let abc = spend(data:support):for data10
let acj = deta(gigabytes) for set of all c