console.log("This is an External Method")

// - singleline comment

/* 
Multiline Comment 
*/

/*
1) Primitive Datatype
number 
string 
boolean 
null 
undefined

2) Non - Primitive Datatype
Array
Object

*/

let num = 10;  // number
let str="Hello"; //String
let isTrue = true; //Boolean
let emptyValues = null //Null
let notDefined; //Undefined

 
let arr = [1, 2, 3, 4, 5]; //Arrays

let person = {
    name: null, age: 25
}

console.log(num, str, isTrue,emptyValues,notDefined,arr,person)

function message () {
    console.log("this is a function")
}
message()

// control Structures:

// Control Strcutures allow decision Making  in javascript

/*
1) if - else - executes code based on condition
2) switch - selects code blocksbased on different values 
3) Loops
*/

let age =17;

if(age >=18){
    console.log("you are an adult")
} else{
    console.log("you are a minor")
}

let day = "Tuesday";
switch(day){
    case "Monday":
        console.log("Starting of the Week")
    
    case "Tuesday":
        console.log("Still Long way to the weekend")
    
    case "Wednesday":
        console.log("Still Long way to the weekend")

    case "Thursday":
        console.log("Still Long way to the weekend")

    default:
        console.log("Dont know")
    }