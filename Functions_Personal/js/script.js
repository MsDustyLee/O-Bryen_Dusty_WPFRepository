/*
 Dusty O'Bryen
 December 19, 2013
 Functions - Personal
 */


/*

 Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.

 Each of the following requirements must exist in at least one of the 3 subprojects:
 A ternary
 An else if
 An anonymous function
 A normal "named" function
 An expression with two arithmetic operators
 A function with three parameters.
 At least one logical operator

 */

/*
 My son was assigned the weekly snack for his entire class.
 I need to find out how many students are in the class.  And I
 need to decide what snacks to get; and calculate how much it
 is going to cost to purchase them.
 */


/*
 weeklySnack(studentCount, allergy);

 function weeklySnack(studentCount, allergy){
 var studentCount = prompt("How many students are in your classroom?");
 return studentCount;
 var allergy = prompt("Do any of your students have any dairy allergies? \n YES or NO");

 if(allergy = yes){snack1;
 }else{snack2;
 }
 return allergy;

 }

 console.log(weeklySnack);


 var snack1 = "Crackers, Cheese & Sausage Packs";
 var snack1Cost = 2.49 * studentCount;
 var yes = "yes" || "YES";
 yes = true;
 var a = "Yes" == yes;
 console.log("I will be sending along " + snack1 + ".  I hope your students enjoy it.");
 alert("I will be sending along " + snack1 + ".  I hope your students enjoy it.");



 var snack2 = "Still trying to decide.";
 var snack2Cost = 1.25 + studentCount;
 var no = "no" || "NO";
 no = false;
 var b = "No" == no;

 */


//Dusty, the solution provided has a few issues. Here is how I would address the problem.
//GENERAL COMMENTS WILL BE PLACED TO PROVIDE INFORMATION ABOUT THE CODE.
//[ SQUARE BRACKETS WILL BE USED TO PROVIDE COMMENTARY FOR YOU]

//Purpose: I am going to build a cost calculator for assessing the cost of bringing snacks to a class.
//I will be passing in an array 2 dimensional containing the names of the students and their diet concerns. [I AM USING AN ARRAY BECAUSE IT WILL ALLOW FOR STUDENT ROSTERS TO BE ASSEMBLED (AND IT IS A LITTLE MORE COMPLEX SO YOU CAN SEE HOW TO DO IT)]
//I will loop through the array and calculate the cost of feeding the class each snack each day.



function classCalculator(classArray){
var finalValueOfClass=0;    //this is where the final value will be stored, but to start we need it set to ZERO.

//[to collect the values from the array studentList I need to look at each value and decide what to do with them.  ]
//[so I have to loop through the array and i do that with a for loop]
    for(i=0;i<classArray.length;i++){
    if(classArray[i][1]==true){     //[This line says to check the second second value (the true/false value) to see if it is true. Remember arrays start at 0 so 1 is the second value
        finalValueOfClass+=2.49; //add the value of a full price snack to the running total;

    } else {
        finalValueOfClass+=1.25;  //add the discounted value to the running total.
    }
}
  return finalValueOfClass;   //once the values have been added I have to return the values.
 }


//array studentList[NAME][DIET CONSTRAINT]
var studentList =[];
studentList[0]=['george',true];
studentList[1]=['verna',false];
studentList[2]=['mary',true];
studentList[3]=['robert',false];
studentList[4]=['alice',true];
studentList[5]=['martin',false];
//Here is my array with values


console.log(classCalculator(studentList));









