var loginForm = document.getElementsByClassName("login_form");
var userNameElement = document.getElementsByName("username");
var passwordElement = document.getElementsByName("password");

loginForm.onSubmit = function(){
    alert('event1');
}