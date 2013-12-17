/**
 * Created by msdustylee on 12/16/13.
 */
/*PROMPT AND ALERTS

prompt("Enter your year of birth.");
at this point the value entered cannot be held

to hold the value entered in the prompt we need to create a variable to hold it.*/

var userInput = prompt("Enter your year of birth:");
//the value entered in by the user will be stored in the userInput variable

//to view the user's input, print to console
console.log(userInput);  //at this point we can see the input, but user cannot



//Expression Example:
var width = prompt("We are calculating the area of a rectangle.  \nPlease enter the width."); // \n creates a new line
var height = prompt("Please enter the height.");

var area = width * height; //calculates with that information provided by the user
console.log(area); //print it out to console


//Alerts are a way to show the information to the user

alert("The area of your rectangle is: " + area);