/*
ARGUMENTS AND PARAMETERS - Getting stuff into a function.

Not all functions have to have arguments or parameters.

funcName (argument1, argument2); //function call.  Sends in the information

function funcName (parameter1, parameter2){  //the information is then stored in the parameters
    // code the function runs
}

*/

//EXAMPLE:

calcArea(30, 20);  //inside the parenthesis of the function name are the arguments

function calcArea(w, h){ //inside the function are the parameters, they are the storage bins
    var area = w * h; // w = 30, h = 20
    console.log(area);
}






function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}

var age1 = 4;
dogYears(age1);
dogYears(5);