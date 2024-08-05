document.addEventListener("DOMContentLoaded", function(){
    console.log("Hi");

    let password = document.querySelector("#password").value;
    console.log(password);
    let confirmPassword = document.querySelector("#confirm_password").value;
    console.log(confirmPassword);
    let error = document.querySelector("#error");

    if(password === confirmPassword){
        error.innerHTML = "";
    } else {
        error.innerHTML = "Passwords do not match";
    }
})