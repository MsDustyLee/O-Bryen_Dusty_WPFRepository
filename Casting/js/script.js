/**
 * Created by msdustylee on 12/15/13.
 */
//Casting
//Treating Strings like numbers and vice versa

/*

var stringVar = "6";
var result = 7 + stringVar;
console.log(result);

shows as 67, bc the 6 is not considered a value, it's a character in this case
*/

//However, if we code it as the following, it will turn stringVar into a value.

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);
//now the result shows as 13

/* Another option to turn the strings into values:

var areaCode = 407
var firstPart = 203
var secPart = 4529

var phoneNo = String(areaCode) + String(firstPart) + String(secPart);
console.log(phoneNo);

rather than adding the values together to get a sum the String() function
treats it as a string, turning it into characters rather than values

to format it:

 var areaCode = 407
 var firstPart = 203
 var secPart = 4529

 var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
 console.log(phoneNo);

 */