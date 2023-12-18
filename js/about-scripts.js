function redirectToSignUp(){
    window.location.href = "../pages/signup.html";
}

document.getElementById('btn_click').addEventListener('click', function(){
    redirectToSignUp()
})