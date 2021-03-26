// : number is our type annotation. 
// const apples: number = true ; //this line wont work since apples are number
let apples: number = 5;

let speed: string = 'fast';

//if we give speed another value it would give us an error
// speed  = true;

let nothingAtAll : null = null;

let undefinedVar : undefined = undefined;

//built in objects

let now: Date = new Date();

//Arrays

let colors: string[] = ['red', 'green', 'blue'];

//Array of numbers

let myNumbers : number[] = [1,2,3];

let truths: boolean [] = [true, true, false];


//classes 

class Car {

}

let car: Car = new Car();


//Object Literal
let point : {x: number; y: number} = {
    x: 10,
    y: 10
}

// function 
//: (i: number) => void ----this is all annotation.
const logNumber : (i: number) => void  = (i : number) => {
    console.log(i);
}

