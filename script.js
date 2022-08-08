console.log("Hello World")
// Dont need to specify type, compiler does it for you.

// string is anything written in quotes, a series of characters (specific letter).
let string="string"

// number can be written with or without decimals.
let num1=3.3
let num=10
let age=25

// Combining multiple text, string concatination into the log.
console.log("Hi I'm Rylan I'm "+ age +" years old"+ string)

// Takes line 9 and simplifies it using ${} and ` instead of quotes.
// Use this method (Template string).
console.log(`Hi I'm Rylan I'm ${age}`)

// Objects are written with {}. obeject properties are written as
// name: value pairs that are seperated by commas.
let car={color:"Blue",make:"Toyota"}

// Call properties in console log.
console.log("I drive a " + car.color + " " + car.make)

// ++ is an incriment, adds 1 everytime.
let x=5
x++;
console.log(x)

// -- is decrementing, subtracts 1 everytime.
let y=5
y--;
console.log(y)

// ** exponentiation, to the power of.
console.log("**: ",x**2)
// Math.pow is the power of...
console.log(Math.pow(x,2))

// block scope, only specific to that block of code, let & const give errors inside IF statement.
// Which is good, dont want the global to change due to a block variable.
var z=37
if(z=37){
    let b=2
    console.log("block b: ",b)
}
console.log("global b: ",b)

// = asigns the value to the variable.
var number=10;
// const is a variable that can not be changed from its original value.
// var is a variable that can always change.
// let is a variable that can not be redeclared (cant be declared twice)
// but it can be reasigned.
let num2=5
// 10+10/ += takes the value of the variable and adds X to it 
// then reasigns the variable.
number+=10;
console.log(number)

// -= Takes the value of the variable and subtracts X to it
// then reasigns the variable.
number-=5
console.log(number)

// *= Takes the value of the variable and multiplies it by X
// then reasigns the variable.
number*=2
console.log(number)

// /= Takes the value of the variable and divides it by X
// then reasigns the variable
number/=3
console.log(number)

// %= Takes the remainder of the value to the modulus of X
// then reasigns the variable
number%=2
console.log(number)

// "....: " Allows you to type and display it.
num2=10
console.log("num2: ",num2)

// var text="Im learning Javascript"
// console.log(text)
// text="Im learning Python"
// console.log(text)

// This is a comment

/*
Hi
This is a multi-line comment
Bye
*/ 

