function popup() {

    var a = document.getElementById("popup");
    
    
    console.log(a.classList);
    if(a.classList.contains("initial")){
        a.classList.remove("initial");
        a.classList.add("d-none");
    }else{
        a.classList.remove("d-none");
        a.classList.add("initial");
    }
}
function close_popup() {
    var b = document.getElementById("popup");
    b.classList.remove("initial");
    b.classList.remove("d-none");

}