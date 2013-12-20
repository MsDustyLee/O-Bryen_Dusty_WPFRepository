//RETURNING VALUES - GETTING VALUES BACK FROM A FUNCTION

var total = calcArea(30, 20);
//the value of area is returned to the function name and stored in the variable total

function calcArea(w, h){
    var area = w * h;
    return area; //function is spitting the information out to the function name
}

console.log(total);