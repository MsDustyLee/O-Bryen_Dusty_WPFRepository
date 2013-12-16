/*
Dusty O'Bryen
 Expressions Worksheet
 12/05/13
 */


/* Dog Years
*/

//Calculate Sparky's age in dog years

var sparkyAge = 5;
const dog = 7;

//multiply sparkyAge by dog and assign to dogYears variable
var dogYears = sparkyAge * dog;

//Concatenate strings and variables together and assign to answer variable
var answer = "Answer 1 is: " + "Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years.";

//print out the output of the variable answer
console.log(answer); //35




/*Slice of Pie part 1
*/

//Calculate how many pieces of pizza each person gets.
const slices = 12;
var partyGoer = 15;
var pizzaOrdered = 6;

//multiply slices with pizzaOrdered and divide by partyGoer
//assign to variable slicesPP
var slicesPP = slices * pizzaOrdered / partyGoer;

//Concatenate strings and variables together and assign to answer2 variable
var answer2 = "Answer 2 is: " + "Each person ate " + slicesPP + " slices of pizza at the party.";

//print out the output of the variable answer2
console.log(answer2); //4.8



/* Slice of Pie part II
    */

//Use variables from Slice of Pie 1 to figure out the amount of pizza Sparky gets to eat

/*Use the same expression as slicesPP, but use the modulo operator
in place of division operator in order to figure out remaining amount.
*/
remainder = slices * pizzaOrdered % partyGoer;

//Concatenate strings and variables together and assign to answer3 variable
var answer3 = "Answer 3 is: " + "Sparky got " + remainder + " slices of pizza.";

//print out the output of the variable answer3
console.log(answer3);

/* To test my answer I changed the expression around:
Based on answer2's results, we know that there is at least
4 whole slices of pizza for each person.  We need to figure the
total amount of slices of pizza, then divide by the whole number 4.
That gives us the answer for the amount of people the pizza would feed
if everyone only had 4 slices each.  Then we subtract the amount of people
that are actually there.  We take that that number and turn it back into
 the amount of pizza slices are left.  If that number is higher than the
 amount of people at the party, then we know we got our whole number wrong.
 If that amount is less than the number of people there, then we know there
 wasn't enough left to be split up between all the people evenly, so that
 remaining amount was given to Sparky.

 Here's how I tested it:
 */

var totalPizza = slices * pizzaOrdered;
var each = 4;
var enoughFor = totalPizza / each;
console.log("Enough for " + enoughFor + " people, but we only have " + partyGoer + " people attending."); //Enough for 18 people

remainder = (enoughFor - partyGoer) * each;
answer3 = "Answer 3 is: " + "Sparky got " + remainder + " slices of pizza.";
console.log(answer3);