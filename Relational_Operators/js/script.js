//Relational Operators - Comparing two variables or values

/*
Greater than >
Less than <
Greater than or equal to >=
Less than or equal to <=

Used for comaparing ONLY 2 values or variables
 */

/*
EQUALITY OPERATORS:

Equality == (2 equals signs)
Strict Equality === (3 equals signs), same value or same type
Inequality !=
 */



//Examples:
5 < 8 = true;

var a = 12;
a > 20 = false;

5 < 5 = false;
5 <= 5 = true;

a > b = b < a;



/*equality = means "the same as";

a == b //translation: is a "the same as" b.
// Equality == compares two values

a = b //translation: a stores the value of b (b overrides a.
// Assignment = stores values


/*strict equality: means the same TYPE

  notice below is
  6 number
 "6" string

  6 == "6" - would read as true because in this case 6 is the SAME AS "6"

  6 === "6" - would read as false because one is a number, one is a string,
  therefor not the same TYPE.
  USING STRICT EQUALITY IS PREFERRED OVER EQUALITY - MACHINE READS IT FASTER


inequality: means "is not the same as"
 a != b
 We would use this operator only when we want to tell the machine to
 "do b, if a" - this would read as true because
 number 6 is not the same as string "6"

