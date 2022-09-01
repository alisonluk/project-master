//string objects
var phrase = "blablatoto";
document.write(phrase + "</br>");
document.write("Length:" + phrase.length + "<br/>");
//charAt() the character at a specified position in the string 
for(var i = 0; i < phrase.length; i++)
{
    document.write(i + ":" + phrase.charAt(i));
    document.write(" | " + phrase.charCodeAt(i)); //unicode values
    document.write("<br/>");
}

//indexof
    document.write("Index of l:" + phrase.indexOf('l'));
// replace
    document.write("<br/> Replace b with f : " + phrase.replace("bla", "flo"));
    document.write("<br/");
    document.write(phrase);
    document.write("<br/");

//split take an object and split into specific array
    var names ="Mark,Bob,Tom,Jerry,Mary,Charles"; //take string and split
    var moreNames = names.split(',');
    document.write("<br/");

    for(var x = 0; x < moreNames.length; x++)
    {
        document.write(moreNames[x]);
        document.write("<br/>");
    }

    var names="Mark,Bob,Tom,Brett,Mary,Lester,Charles";
    var moreNames = names.split(',');
    document.write("<br/>");
    for(var x = 0; x < moreNames.length; x++)
    {
        document.write(moreNames[x]);
        document.write("<br/>");
    }

    function stringToArray(input){
        splitInput = input.split(' ');
        return splitInput;
      }
      
