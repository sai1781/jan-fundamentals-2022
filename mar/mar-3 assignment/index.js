

function swap(){
    var a = prompt("enter the first number");
    var b = prompt("enter the second number");
    a = parseInt(a);
    b = parseInt(b);
    while(isNaN(a) || isNaN(b)){
        alert("Please enter the valid number");
        var a = prompt("enter the first number");
        var b = prompt("enter the second number");
    }
    document.write("original value of A:" + a +"   ");
    document.write();
    
    document.write("Original value of B:" + b);
    document.write("<br / >");
    document.write("<br / >");


    [a,b] = [b,a] ;
    document.write("After swap value of A:" + a);
    console.log(a);
    document.write("   ");
    document.write("After swap value of B:" + b);
    console.log(b)

}

var output = swap();
document.write(output);