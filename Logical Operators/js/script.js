/* Logical Operators -
Used to compare two true or false values into one true or false

Is only used in between boolean variables, or in between comparisons.

Logical Operators are:
&&   And - Both comparisons must be true
||  Or
^  Exclusiver Or (XOR)
!  Not

&& - Both comparisons must be true
EX) true && true = true
    true && false = false
    false && true = false
    false && false = false

    var budget = 300;
    var iPhonePrice = 199.99;
    var payCheck = 200;

    if(iPhonePrice < budget && payCheck > 300){
    console.log("You can buy the phone.");

    }else{
    console.log ("Sorry, no phone for you!");
    }


Or Operator - means the entire expression is true, as long as at least
one of the conditions is true.
EX) true || true = true
    true || false = true
    false || true = true
    false || false = false

 var budget = 300;
 var iPhonePrice = 199.99;
 var wonLottery = true;

 if(iPhonePrice < budget || wonLottery === true){
 console.log("You can buy the phone.");

 }else{
 console.log ("Sorry, no phone for you!");
 }


 Exlusive Or - means that only one of the conditions can be true
 EX) true ^ true = false
     true ^ false = true
     false ^ true = true
     false ^ false = false



 Not Operator - flips a value (true becomes false, false becomes true)
 Is not used for comparing.

 EX) a ! = b is the same as ! (a === b)
    a < b is the same as ! (a < b)
 */



/* COMMON MISCONCEPTIONS:

How do we see if a, b, and c all have the same values?

The wrong way to write the code would be:
a === b === c
it would look at a === b as true

the correct way would be:
a === b && b === c

RELATIONAL OPERATORS ALWAYS GO IN BETWEEN PAIRS OF OBJECTS.
LOGICAL OPERATORS GO IN BETWEEN RELATIONAL EXPRESSIONS OR BOOLEAN VALUES.
ALWAYS WORK IN PAIRS, SO IF YOU HAVE 3 OBJECTS TO COMPARE, IT HAS TO BE BROKEN TO PAIRS.
 */