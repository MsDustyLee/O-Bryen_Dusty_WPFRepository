//Condition with Expressions -
// Else and If: Choosing between three or more blocks of code



var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the roller coaster!");
}else if(kidHeight > wParentHeight){
    //code performed if a parent is present
    console.log("You can ride, but only with a parent present.");
}else{
    //code performed if condition is false
    console.log("Sorry, you've got some growing to do!");
}

//else if should always have a condition attached to it

//else should never have a condtion

/*
Order:
if
else if
else

The execution of the code stops when one of the expressions is true
 */

