function addition() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var number1 = a.value ;
    number1 = parseInt(number1);
    var number2 = b.value ;
    number2 = parseInt(number2);
    var output = number1 + number2 ;
    document.write(output);
    console.log(output);
}

