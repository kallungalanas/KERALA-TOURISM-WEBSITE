let phone=document.getElementById("phone");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let err=document.getElementById("err");
function validate(){

            let regexp=/^([0-9a-zA-Z]+){8,}$/;
        
        if(isNaN(phone.value)){
            error.innerHTML="enter number only";
            error.style.color="red";
            return false;
        }
        else if(phone.value.length!=10){
            error.innerHTML="enter 10 digit number";
            error.style.color="red";
            return false;
        }
        else if(regexp.test(pwd.value)){
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