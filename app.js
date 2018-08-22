// Email Function
function emailValid() {
    var email = document.getElementById('email').value;
    if (email === "") {
        document.getElementById('errEmail').innerHTML = "Pelase Do not leave Empty";
    }
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        document.getElementById('errEmail').innerHTML = "Not a valid e-mail address";
        return false;
    }
}

//  USERNAME FUNCTION
function userNameValid() {
    var username = document.getElementById("username").value;
    var regexExp = /^[a-zA-Z0-9]{5,}/g;
    // if (username === "") {
    //     document.getElementById('errusername').innerHTML = "Please Do not Leave Blank";
    // }
    var valid = username.match(regexExp);
    if (valid == null) {
        document.getElementById('errusername').innerHTML = "Special Symbols are not allowed";
    }
    if(username.length > 8 || username.length < 5) {
        document.getElementById('errusername').innerHTML = "max length is 8 letters and min length is 5 letters";
    }
}

// PASSWORD FUNCTION
function passwordValid() {
    var password = document.getElementById('password').value;
    var validation = /^[A-Z]{1}[a-zA-Z0-9]{7,}/g;
    var valid = password.match(validation);
    if(valid == null) {
        document.getElementById('errpassword').innerHTML = "First letter Should be Uppercase, no Special symbols are Allowed";
    }
    if(password.length > 12 || password.length < 8) {
        document.getElementById('errpassword').innerHTML = "max length is 12 letters";
    }
}

// CONFIRM PASSWORD FUNCTION
function passwordValid1() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password1').value;
    if(confirmPassword !== password) {
        document.getElementById('errpassword1').innerHTML = "Password does not Match";
    }
}

function allClear(eId) { 
    document.getElementById(eId).innerHTML = "";
}

// SIGN UP FUNCTION
function signUp() {
    // swal({
    //     type: 'error',
    //     title: 'Oops...',
    //     text: 'The email address is already in use by another account!',
    //     showConfirmButton: false,
    //     timer: 2500
    // })
    document.getElementById('signupSuccess').className += " aabbcc";
    document.getElementById('signupSuccess').innerHTML = "<strong>Signup Successfully!</strong> Congratulation Your account have been Created.";
}