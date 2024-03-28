let x=1;
let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = ()  => {
    navbar.classList.toggle('active'); 
}
let darkmode= document.querySelector('#darkmode');

darkmode.onclick= () =>{
    if(darkmode.classList.contains('fa-moon'))
    {
        darkmode.classList.replace('fa-moon','fa-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('fa-sun','fa-moon');
        document.body.classList.remove('active');
    }
}

function validateForm() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var mobile = document.getElementById("mobile").value;

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var mobileError = document.getElementById("mobileError");


var isValid = true;

        if (name.trim() === "") {
          nameError.innerHTML = "Name is required";
          isValid = false;
        }

        if (email.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
          } else if (!isValidEmail(email)) {
            emailError.textContent = "Invalid email address";
            isValid = false;
          }
          if (mobile.trim() === "") {
            mobileError.textContent = "Mobile number is required";
            isValid = false;
          } else if (!isValidMobile(mobile)) {
            mobileError.textContent = "Invalid mobile number";
            isValid = false;
          }  
          return isValid;
}
function isValidEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  function isValidMobile(mobile) {
    var re = /^[1-9][0-9]{9}$/;
    return re.test(mobile);
  }