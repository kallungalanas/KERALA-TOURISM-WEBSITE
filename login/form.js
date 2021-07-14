let pwd=document.getElementById("pwd");
let err=document.getElementById("err");
function validate(){

    let regexp=/^([0-9a-zA-Z]+){8,}$/;
    if(regexp.test(pwd.value)){
        err.innerHTML="valid";
        err.style.color="green";
        return true;

    }
    else{
        err.innerHTML="not valid";
        err.style.color="red";
        return false;
        }
}