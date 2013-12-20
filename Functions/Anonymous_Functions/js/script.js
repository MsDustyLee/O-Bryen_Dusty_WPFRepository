//ANONYMOUS FUNCTIONS - also called "closures", and are created as the code is run.



/*

function = functionName(){

}

var functionName = function(){
    //code the function runs
}

functionName(); //function call

    */

//start with:
function calcArea(width, height){
    var area = width * height;
    return area;
}



//to make it anonymous:

var calcArea = function(width, height){  //define first
    var area = width * height;
    return area;
}

var a = calcArea(20, 30);  //invoking
console.log(a);

//anonymous functions have to be declared before being called