function password(){
    var password1 = document.getElementById("pass1");
    var password2 = document.getElementById("pass2");
    if( password1.value == password2.value){
        alert("successfully completed")

    }else{
        alert("password doesn't match")
    }

}


