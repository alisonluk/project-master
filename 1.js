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
//let age = 30; //number literal
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
//conditions
var age = 12;
 if (age>=18)
    {
        document.write("you can vote!");
    }
    else
    {
        document.write("You can't vote!");
    }

var courseName = "Alison"
    if (courseName == "Alison")
    {
        document.write("You are the best!");
    }

    /* Joined to make compound statements
        == Equivalency
        === Equivalent in value and type
        1 =="1" true
        1 === "1" false
        > Greater than
        < Less than
        >= Gt or = 
        <= LT or =
        != Not equal to
        && and
        || or

    */
//switch statements tests a number of statements and see if they are true
var letterGrade = "a";

switch (letterGrade)
{
    case "A":
    case "a":
        document.write ("A is an execellent grade!");
        break;
    case "B":
    case "b":
        document.write ("B is a good grade!");
        break;
    case "C":
    case "c":
        document.write ("C is an average grade");
        break;
}
//dialog boxes
/*var message ="have a nice day"
alert(message);*/

//confirmation boxes
var confirmation = confirm("are you sure you want to exit?");
//document.write(confirmation);
if(confirmation)
{
    document.write("existing app");
} else {
    document.write("cancel exit");
}

//prompt boxes
var yourAge = prompt("what is your age?");
document.write("Your age is " + age + " years old");
if (yourAge > 18)
{
    document.write("You can vote!");
}

//while loops , loop while a certain condition is true
var x = 0; //loop that counts to 10
while(x < 11)
{
    document.write (x + "<br/>");
    x++;
}

document.write("-------------");
//do loop  iterates once do what ever is in brackets while condition is true
//while loop iterates only when condition is true
var y=0;
do {
    document.write(y+ "<br/>");
    y++; //increment
}while( y < 15);

//for loop
// i=0 initialisation, decalre the count
// i< 101 = continunationcondition , continues  iterating until condition is false
// i++ counter, how we counting the loop
for (var i=0; i < 101; i++) // count backwards five then set coutner i = i-5
{
    document.write(i + " <br/>");
}
