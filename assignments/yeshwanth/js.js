function fnamevalidity(f1) {
    var fnamereturn = false;
    var firstname = document.getElementById("firstname");
    if (firstname.value == null || firstname.value == "") {
        firstname.style.borderColor = "red";
        document.getElementById("fname").innerHTML = "Firstname cannot be empty";
    }
    var x=f1.which || f1.keyCode || window.f1;
    if ((x > 64 && x < 91) || (x > 96 && x < 123) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
        if (firstname.value.length <= 5) {
            firstname.style.borderColor = "green";
            document.getElementById("fname").innerHTML = "";
            fnameReturn = true;
            return fnamereturn;
        }else if (fnameEl.value.length > 5) {
            firstname.style.borderColor = "red";
            document.getElementById("fname").innerHTML = "firstname should be less than 6 characters";
            fnameReturn = true;
            return fnamereturn;
        } else {
            firstname.style.borderColor = "red";
            document.getElementById("fname").innerHTML = "firstname should be alphabets";
            fnamereturn = false;
            return fnamereturn;
        }
    } else {
        fnamereturn = false;
        return fnamereturn;
    }
}
function lnamevalidity(f2) {
    var lnamereturn = false;
    var lastname = document.getElementById("lastname");
    var charCheck=f2.which||f2.keyCode;
    if (lastname.value === null || lastname.value === "") {
        lastname.style.borderColor = "red";
        document.getElementById("lname").innerHTML = "Lastname should not be empty";
    } if ((charCheck > 64 && charCheck < 91) || (charCheck > 96 && charCheck < 123) || charCheck == 8 || (charCheck >= 35 && charCheck <= 40) || charCheck == 46) {
        if (lastname.value.length < 2 || lastname.value.length > 8) {
            lastname.style.borderColor = "red";
            document.getElementById("lname").innerHTML = "lastname should be in betweeen two or six character";
            lnamereturn=true;
            return lnamereturn;
        } else if(lastname.value.length>=2 || lastname.value.length <= 8){
            lnamereturn = true;
            lnameEl.style.borderColor = "green";
            document.getElementById("lname").innerHTML = "";
            return lnamereturn;
        } else{
        lnameEl.style.borderColor = "red";
        document.getElementById("lname").innerHTML = "last should not contain digits";
        lnamereturn=false;
        return lnamereturn;
       }
    } else {
        lnamereturn = false;
        return lnamereturn;
    }
}
function unamevalidity() {
    var unamereturn = false;
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
    var username = document.getElementById("username");
    if (username.value == null || username.value == "") {
        username.style.borderColor = "red";
        document.getElementById("uname").innerHTML = "Username cant be empty";
    } else if (username.value.length > 16 || username.value.length < 8) {
        username.style.borderColor = "red";
        document.getElementById("uname").innerHTML = "usernaem shpuld be minimumm of 8 to 16 characters";
    } else if (!regex.test(username.value)) {
        username.style.borderColor = "red";
        document.getElementById("uname").innerHTML = "usrer name should consisits of atleast one character ,one digit ,one uppercase and also special character";
    } else {
        username.style.borderColor = "green";
        document.getElementById("uname").innerHTML = "";
        unamereturn = true;
    }
    return unamereturn;
}
function emailInValid() {
    var emailreturn = false;
    var emailreg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var email = document.getElementById("email");
    if (email.value == null || email.value == "") {
        email.style.borderColor = "red";
        document.getElementById("Email").innerHTML = "email cant be empty";
    } else if (!emailreg.test(email.value)) {
        email.style.borderColor = "red";
        document.getElementById("Email").innerHTML = "please enter valid emial id";
    } else {
        email.style.borderColor = "green";
        emailreturn = true;
        document.getElementById("Email").innerHTML = "";
    }
    return emailreturn;
}
function numberValidity(f3) {
    var numreturn = false;
    var eventCheck = f3.which || f3.keycode;
    var number = document.getElementById("mobile");
    if (number.value == null || number.value == "") {
        number.style.borderColor = "red";
        document.getElementById("mobile").innerHTML = "mobile number cant be empty";
    } if ((eventCheck >= 48 && eventCheck <= 57) || eventCheck == 8 || (eventCheck >= 35 && eventCheck <= 40) || eventCheck == 46) {
        if (number.value.length != 9) {
            number.style.borderColor = "red";
            document.getElementById("mobile").innerHTML = "please enter valid mobile number";
            numreturn = true;
            return numreturn;
        }
        else if (number.value.length == 9) {
            number.style.borderColor = "green";
            document.getElementById("mobile").innerHTML = "";
            numreturn = true;
            return numreturn;
        }
        else {
            number.style.borderColor = "red";
            document.getElementById("mobile").innerHTML = "Enter digits only";
            numReturn = false;
            return numreturn;
        }
    }
    else {
        numreturn = false;
        return numreturn;
    }
}
function pcodeValidity(f4) {
    var pcodereturn = false;
    var pcode = document.getElementById("pcode");
    var f4Check =  f4.keyCode || f4.which;
    if (pcode.value == null || pcode.value == "") {
        pcode.style.borderColor = "red";
        document.getElementById("pcode").innerHTML = "postal code cant be empty";
    } if ((f4Check >= 48 && f4Check <= 57) || f4Check == 8 || (f4Check >= 35 && f4Check <= 40) || f4Check == 46) {
        if (pcode.value.length != 7) {
            pcode.style.borderColor = "red";
            document.getElementById("pcode").innerHTML = "please  enter pcode of 8 digits";
            pcodereturn = true;
            return pcodereturn;
        } else if (pcode.value.length == 7) {
            pcode.style.borderColor = "green";
            document.getElementById("pcode").innerHTML = "";
            pcodereturn = true;
            return pcodereturn;
        } else {
            pcodereturn = false;
            return pcodereturn;
        }
    } else {
        pcodereturn = false;
        return pcodereturn;
    }
}
function Submit(event) {

    if ((fnamevalidity(event) || lnamevalidity(event) || unamevalidity() || emailInValid() || numberValidity(event) || pcodeValidity(event)) == false) {
        event.preventDefault();
    }
    else {
        alert("Validation Done");
    }
}