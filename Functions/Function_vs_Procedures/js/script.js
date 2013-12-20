//Funtion vs Procedures

//Functions return values, procedures do not.






// THIS IS A FUNCTION:

function calcAreaF(width, height){
    var area = width * height;
    return area;
}



// THIS IS A PROCEDURE:

function calcAreaP(width, height){
    var area = width * height;
    console.log(area);  //no return
}
