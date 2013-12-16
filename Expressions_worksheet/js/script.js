/**
Dusty O'Bryen
 Expressions Worksheet
 12/05/13
 */


/*
 Dog Years:

 Dogs age 7 times faster than humans
 so a dog that is 1 year old in human years is 7 years old in “dog years.”
 Calculate how old Sparky the pit bull is in dog years based on his actual age.

 Givens:
 Sparky’s age.

 Result Varable:
 Sparky’s age in dog years.

 Result to Print:
 “Sparky is X human years old which is X in dog years.
 */

//Calculate Sparky's age in dog years
var sparkyAge = 5;
const dog = 7;

//multiply sparkyAge by dog and assign to dogYears variable
var dogYears = sparkyAge * dog;

//Concatenate strings and variables together and assign to answer variable
var answer = "Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years.";

//print out the output of the variable answer
console.log(answer);