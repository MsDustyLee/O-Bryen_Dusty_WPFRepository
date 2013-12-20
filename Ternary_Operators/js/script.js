/*
TERNARY OPERATORS: Decision making on one line.
Shortens the if/else function.


EX) This code:

if(condition){do if true;

}else{do if false;

}

    Gets turned into this code:

    (condition) ? do if true : do if false;

    */

//Does a student have a high enough GPA to graduate?

var gpa = 48;

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low.");

//If a student is under 10, they get Green Eggs and Ham, otherwise they get the time machine.

var age = 10;
var book;

if(age < 10){book = "Green Eggs and Ham";
}else{book = "The Time Machine";
}
    console.log(book);

//Converts to:

var age = 10;
var book;

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);