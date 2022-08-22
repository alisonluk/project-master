 //statement is a piece of code where an action is needed to be carried out determined by ; anything between '' is a string
//prints into inspect -> console

//Variables , creating a container to store  a value e.g. x = 1 x+1 = 2 . uses var , let  and const
let  name = 'Alison';  //string literal
console.log(name);
//cannot be a reserved keyword e.g. let , if , else , var and should be meaningful
let firstName = 'Alison'; //currently a string but can change in the future! >dynamic language
console.log(firstName);
//let = when you want to reassign variable
//constant = when you dont need to reassign a variable
const interestRate = 3.5;
console.log(interestRate);
// primitives/value types :string, number, boolean,undefined..null
let age = 30; //number literal
let isApproveed = true; //boolean literal
let lastName = undefined;
let middleName = null; // clear value of variable
let selectedColour = 'red'; // set to null when no colour selected  
//typeof in console can determine value type
//reference types :object, array, function
//object are like properties
let person = {
    name: 'Alison', //properties of a person object
    age: 27
}; //{} = object literal
console.log(person);
//dot notation
person.name = 'John';
console.log(person.name);
//bracket notation

person['name'] = 'Mary';
console.log(person.name);
// dynamic 
let selection = 'name';
person[selection] = 'Sam'

console.log(person.name);
//array is  a data structure used to represent a list of items ( is an object when using typeOf) 
let selectedColours =['red','blue']; //declare variable and set array 
selectedColours[2] ='green'; //dynamic meaning it can change 
console.log(selectedColours);

let selectedName = ['James' , 'Jim'];
console.log(selectedName[1]);

console.log(selectedColours.length);
//functions are set of statements that performs a task/calculate
function greet() {
    console.log('hey world');
}//curly  = body of function for defining the logic 
greet();
//parameters in a function
function hey(name){  //parameter = name a function can have multiple paramenters
    console.log( 'hello '+ name);
}
hey('Kyle'); // an argument of the function is a supply of parameter
hey('Katie');

//multiple  , performing a task
function wasup(name, lastName) {
    console.log('greetings ' + name +' '+lastName);
}
wasup('Jim', 'Bob');
// calculates a value 
function square(number){
    return number*number;
}

let number = square(2);
console.log(number);
console.log(square(2));

//console 
console.error();
console.table