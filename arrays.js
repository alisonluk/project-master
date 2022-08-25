//arrays are variables that hold mroe than one value in one time
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