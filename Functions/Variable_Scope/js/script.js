//VARIABLE SCOPE - Inside and outside of functions

var width = 5;  //declared outside the scope

function calcArea(){
    var width = 20; //declared inside the scope, and inside takes precedence.
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();

//a new console.log(width); outside of the funtion will run the width of 5.

