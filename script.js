console.log("Hello World")
// Dont need to specify type, compiler does it for you.
// Function and Methods are the same thing.

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
// console.log("global b: ",b)

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
// Math.random() creates a random number and assigns it to the variable.
// This IF statement makes a into a new number since it is greater than d.
// Math.ceil rounds up to the nearest integer. Math.floor rounds down to the nearest integer.
// Math.sqrt is the square root of the variable.
let a=4
let d=3
if(a>d){
    a=Math.random()
    a=Math.ceil(a)
    a=Math.floor(a)
    console.log("a: ",a)
    //    Math.abs takes the absolute value of the variable.
} else if (d>a) {
    console.log("abs: ",Math.abs(a-d))
    // == compares a to d. vs = is just assinging
} else if (a==d) {
     let z=Math.PI*Math.pow(a,2)
     // Math.trunc returns to the integer part of the number.
     z=Math.trunc(z)
     console.log("z: ",z)
     // a===d compares the values and the type of the variables
} else if (a===d){
    console.log("a===d: ",a===d)
} else{
    d=Math.sqrt(d)
    console.log("d: ",d)
}
 switch(a){
    case 1:
        console.log("switch a:", a)
    break;
    case 2:
        console.log("Line 120 is false:", a)
    break;
    case 3:
        console.log("Line 120 is true:", a)
    break;
    default:
        console.log("Default:", )
    break;
 }
 // A switch statment will run each block until a statement can be excuted, if none can be then it will run to the default block.
 const Football="Browns"
switch(Football){
    case "Browns":
    case "Bengals":
    case "Saints":
        console.log("This is a football team:", Football)
    break;
    case "Clippers":
    case "Cavaliers":
    case "Blue Jackets":
        console.log("This is not a football team:", Football)
    break;
    default:
        console.log("Try a different team:", )
    break;
// boolean is true or false.
}
let isClicked=true
if(isClicked==true){
    isClicked=false
    console.log(isClicked)
} else{
  isClicked=true
  console.log(isClicked)  
}
// word.length gives you the length of the string variable. if(bird) creates a boolean statement, if there are characters in the string = true, none= false.
var word="bananas"
let bird=word.length
if(bird){
    console.log("string length:", bird) 
} else{
    console.log(word)
}
// /n new line. /t tab over. /v vertical tabular. 
// .slice (x,y) is the start and end of your string. this example is (7,13), 7 over from beginning is your start & 13 is your end.
// .slice (7) creates the start of the string 7 characters over from the original beginning.
// .slice (-7) starts from the end of the string and goes over 7 characters, the last 7 characters of the original string.
let Ipsum="Apple, Banana, Kiwi"
// let temp=Ipsum.slice(-7)
// console.log(temp,temp.length)
// .substring(7,13) keeps the characters between those parameters.
// .replace replaces the characters in the string with what you want. Has to be identical.
let temp1=Ipsum.replace("Banana", "Strawberry")
// console.log(temp1,temp1.length)
// .concat adds another variable or element.
// .toLowerCase make the string all lowercase. .toUpperCase makes the string all uppercase
let temp2=temp1.concat(", ", word)
let password=temp2.toLowerCase()
console.log(password)
// .trim trims the excess spaces in the string.
let temp3=Ipsum.trim()
console.log(temp3)
// .toString converts the type to a string type.
let number1=5
console.log(number1)
let text=number1.toString()
console.log(text)
