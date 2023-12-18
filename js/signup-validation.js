var errorLine = document.getElementById("error-line");
errorLine.innerHTML = "";

function formValidation(e){
    e.preventDefault();
    var form = document.getElementById("signupForm");
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;

    var hasUppercase = false;
    var hasLowercase = false;
    var hasNumber = false;

    for(let i = 0; i < password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z'){
            hasUppercase = true;
        } else if(password[i] >= 'a' && password[i] <= 'z'){
            hasLowercase = true;
        } else if(password[i] >= '0' && password[i] <= '9'){
            hasNumber = true;
        }
    }

    var emailArr = email.split('@');
    var domain = emailArr[1];

    var inputDate = new Date(dob);
    var today = new Date();

    if(username === ""){
        errorLine.innerHTML= "Username must not be empty!";
    } else if(email === ""){
        errorLine.innerHTML= "Email must not be empty!";
    } else if(password === ""){
        errorLine.innerHTML= "Password must not be empty!";
    } else if(confirmPassword === ""){
        errorLine.innerHTML= "Confirm Password must not be empty!";
    } else if(dob === ""){
        errorLine.innerHTML= "Date of Birth must not be empty!";
    } else if(!hasUppercase){
        errorLine.innerHTML= "Password must include at least 1 uppercase letter!";
    } else if(!hasLowercase){
        errorLine.innerHTML= "Password must include at least 1 lowercase letter!";
    } else if(!hasNumber){
        errorLine.innerHTML= "Password must include at least 1 number!";
    } else if(password.length < 8){
        errorLine.innerHTML= "Password must have at least 8 characters!";
    } else if(inputDate > today){
        errorLine.innerHTML= "Date of Birth is invalid!";
    } else if(domain !== "gmail.com"){
        errorLine.innerHTML= "Domain email must use gmail.com!";
    } else if(password !== confirmPassword){
        errorLine.innerHTML= "Passwords do not match!";
    } else{
        alert("Successful Register");
        errorLine.innerHTML = "";
        form.reset();
        window.location.href = "../pages/home.html";
    }
}
