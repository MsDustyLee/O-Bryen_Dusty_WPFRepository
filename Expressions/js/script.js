/**
 * Created by msdustylee on 12/14/13.
 */
//EXPRESSIONS

/* var a = 2;
console.log (a);  meant to check a's value in the console, to test it
it worked
now try to add
a + 3
this will not equal 5 bc there is no storage container to change a's new value to 5
below is the correct format to hold the value of 5 */

var a = 2;
a = a + 3; //this changed the value of a from 2 to a new value of 5

console.log (a);

//or

var a = 2;
var b = a + 3;
console.log (b); //this makes the value of b 5
console.log (a); //the value of a will still be 2

//Example Expressions:

//age example:
var yearBorn = 1974; //declare value of yearBorn
var age = 2013 - yearBorn; //this is the actual expression
console.log (age); //to test and store the value of age