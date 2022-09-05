//arrays are variables that  are used to hold more than one value in one time
//e.g. grades a class have achieved, names of ppl on a team
//Standard array
var firstNames = new Array(); //instanstiation of an Array() object
firstNames[0] ="Mark";
firstNames[1]="Andrew";
firstNames[2]="Sam";
firstNames[3]="John";
//Condensed method
var animals = new Array("dog", "cat","fish","cow");
//Literal array
var companies = ["Apple", "Google","Udemy","GE"];

//Index the arrays
document.write(firstNames[3]);
document.write(animals[0]);
document.write(companies[2]);
document.write("</br>")


//access all arrays
for(var i = 0; i < firstNames.length; i++)
{
    document.write(firstNames[i]);
    document.write("</br>")
}
//changing array value
firstNames[0]= "Hubert";
for(var i = 0; i < firstNames.length; i++)
{
    document.write(firstNames[i]);
    document.write("</br>")
}

//manipulating arrays
var grades = [93,84,38,38,94,38,95,97,12];
//document.write(grades[8]);
//arrays are objects and have methods and properties
//arrays have objects which have properties and methods.
for(x in grades)
{
    document.write("Iteration:" + x);
    document.write("</br>"+ grades[x]); //no need to know the length
}

//Look at w3schools for more array examples
var numbers = [99,23,43,56,32,12,54,23];
numbers.sort();
for(var y = 0 ; y < numbers.length; y++)
{
    document.write(numbers[y ]+  "</br>");
}
document.write ("</br>");
//for loops 
var arrays = [10,20,30,40,50,60,70];
    for(a = 0; a <= 10; a++){
     
     document.write(arrays[a] + "</br>");
    }
document.write("<br>");
//modify and delete arrays
var a = ["joe", 50, "den"];
document.write(a  + "</br>");
a[0] = "say";
document.write (a +"</br>");
delete a[1];
document.write (a +"</br>");
document.write (a[1] +"</br>");

//sort and reverse
var a  = ["Mon" , "Tue", "Wed"];
document.write(a + "</br>");
a.sort();
document.write(a + "</br>");
a.reverse();
document.write(a + "</br>");

//pop and push last vlue
var x = ["Ben", "Tom", "Jerry"];
document.write(x + "</br>");
x.pop();
document.write(x + "</br>");
x.push("Dan");
document.write(x + "</br>");

//shift and unshift first value 
var y = [2,3,4,5,6];
document.write(y + "</br>");
y.shift();
document.write(y + "</br>");
y.unshift(13);
document.write(y + "</br>");

//concat and join method  join objects together
var a = ["Jess", "Zara"];
var b = [ 20,23];
var c = a.concat(b);
document.write(c+ "</br>");
var d = c.join (" ");
document.write(d + "<br>");

//slice and splice centre value
var a = ["dan", "joe" ,"liam", "ryan"];
document.write(a + "<br>");
var b = a.slice(3);  // 3 , -3 
document.write(b + "<br>");
a.splice (2,0 ,"maya" , "jay") ;
document.write(a + "<br>");

//thisArray method returns true if an object is an array

var a = [3,4,5];
var b = Array.isArray(a);
document.write(b + "<br>");

var c = 20;
var d = Array.isArray(c);
document.write(d +"<br>");

var f = 20; //var f = [20,09,21,23];
if(Array.isArray(f)){
   document.write("this is an array" + "<br>"); 
} else {
    document.write("this is not an array" + "<br>");
}

//indexOf and lastIndexOf searches for an element in an array 
var a = ["dan", "joe" ,"liam", "ryan"];
var b = a.indexOf("ryan");
document.write("index of ryan is "+ b + "<br>");

//forEach method is used to execute a function on each item in an array
var Name = ["dan", "joe" ,"liam", "ryan"];
Name.forEach(loop);
function loop (value, index) {
    document.write(index + " " +value + "<br>");
}

//toString() changing array to string for info purposes only
var a = [20,10,40,50,30];
document.write(a + "</br>");
a.toString();
document.write(a + "<br>");

//fill()
var a = [20,10,40,50,30];
a.fill(30);
document.write(a + "<br>");

//includes()
var a = [20,10,40,50,30];
var b = a.includes(30);
document.write("Array includes 30? " + b + "<br>");

//some check values inside these array
var a = [20,10,13,50,30];
document.write(a + "<br>");
var b = a.some(checkValue);
document.write(b + "<br>");

function checkValue(age) {
    return age >= 30;//checks the array to see if there are any values great than or equal 30
} //returning as true as 50,30 is >=30.

//every
var a = [20,10,13,50,30];
document.write(a + "<br>");
var b = a.every(checkValue);
document.write(b + "<br>");

function checkValue(age) {
    return age >= 30;//checks the array to see if there are any values great than or equal 30
}

//find 
var a = [20,10,13,50,30];
document.write(a + "<br>");
var b = a.find(checkValue);
document.write(b + "<br>");

function checkValue(age) {
    return age >= 30;//checks the array to see if there are any values great than or equal 30
}
//findIndex
var a = [20,10,13,50,30];
document.write(a + "<br>");
var b = a.findIndex(checkValue); //displays index value
document.write(b + "<br>");

function checkValue(age) {
    return age >= 30;//checks the array to see if there are any values great than or equal 30
}

//filter
var a = [20,10,13,50,30];
document.write(a + "<br>");
var b = a.filter(checkValue); //filters everything that fufills check
document.write(b + "<br>");

function checkValue(age) {
    return age >= 30;//checks the array to see if there are any values great than or equal 30
}