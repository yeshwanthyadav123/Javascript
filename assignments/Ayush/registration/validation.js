function firstnamevalidation(e1) {
    var firstnameReturn = false;
    var firstnameEl = document.getElementById("firstname");
    if (firstnameEl.value == null || firstnameEl.value == "") {
        firstnameEl.style.borderColor = "red";
        document.getElementById("firstnameMessage").innerHTML = "First Name can\'t be empty";
    }
    var x=e1.which || e1.keyCode || window.e1;
    if ((x > 64 && x < 91) || (x > 96 && x < 123) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
        if (firstnameEl.value.length <= 5) {
            firstnameEl.style.borderColor = "green";
            document.getElementById("firstnameMessage").innerHTML = "";
            firstnameReturn = true;
            return firstnameReturn;
        }else if (firstnameEl.value.length > 5) {
            firstnameEl.style.borderColor = "red";
            document.getElementById("firstnameMessage").innerHTML = "Should be less than or equal to 6 characters";
            firstnameReturn = true;
            return firstnameReturn;
        } else {
            firstnameEl.style.borderColor = "red";
            document.getElementById("firstnameMessage").innerHTML = "Enter Alphabets Only";
            firstnameReturn = false;
            return firstnameReturn;
        }
    } else {
        firstnameReturn = false;
        return firstnameReturn;
    }
}
function lastnamevalidation(e2) {
    var lastnameReturn = false;
    var lastnameEl = document.getElementById("lastname");
    var charCheck=e2.which||e2.keyCode;
    if (lastnameEl.value === null || lastnameEl.value === "") {
        lastnameEl.style.borderColor = "red";
        document.getElementById("lastnameMessage").innerHTML = "Last Name can\'t be empty";
    } if ((charCheck > 64 && charCheck < 91) || (charCheck > 96 && charCheck < 123) || charCheck == 8 || (charCheck >= 35 && charCheck <= 40) || charCheck == 46) {
        if (lastnameEl.value.length < 2 || lastnameEl.value.length > 8) {
            lastnameEl.style.borderColor = "red";
            document.getElementById("lastnameMessage").innerHTML = "Should be minimum of 2 or maximum of 8 characters";
            lastnameReturn=true;
            return lastnameReturn;
        } else if(lastnameEl.value.length>=2 || lastnameEl.value.length <= 8){
            lastnameReturn = true;
            lastnameEl.style.borderColor = "green";
            document.getElementById("lastnameMessage").innerHTML = "";
            return lastnameReturn;
        } else{
        lastnameEl.style.borderColor = "red";
        document.getElementById("lastnameMessage").innerHTML = "Enter Alphabets Only";
        lastnameReturn=false;
        return lastnameReturn;
       }
    } else {
        lastnameReturn = false;
        return lastnameReturn;
    }
}
function usernamevalidation() {
    var usernameReturn = false;
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
    var usernameEl = document.getElementById("username");
    if (usernameEl.value == null || usernameEl.value == "") {
        usernameEl.style.borderColor = "red";
        document.getElementById("usernameMessage").innerHTML = "Username Can\'t be Empty";
    } else if (usernameEl.value.length > 16 || usernameEl.value.length < 8) {
        usernameEl.style.borderColor = "red";
        document.getElementById("usernameMessage").innerHTML = "Should be minimum 8 characters and maximum of 16 characters";
    } else if (!regex.test(usernameEl.value)) {
        usernameEl.style.borderColor = "red";
        document.getElementById("usernameMessage").innerHTML = "Should contain Atleast 1 uppercase letter,\n Atleast 1 lower case letter, Atleast 1 Number,\n Atleast 1 special char acter from the list(!@#$%^&*_<>?|), Minimum 8 characters length";
    } else {
        usernameEl.style.borderColor = "green";
        document.getElementById("usernameMessage").innerHTML = "";
        usernameReturn = true;
    }
    return usernameReturn;
}
function emailInValidation() {
    var emailreturn = false;
    var emailreg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var emailEl = document.getElementById("email");
    if (emailEl.value == null || emailEl.value == "") {
        emailEl.style.borderColor = "red";
        document.getElementById("EmailMessage").innerHTML = "Email Can\'t be Empty";
    } else if (!emailreg.test(emailEl.value)) {
        emailEl.style.borderColor = "red";
        document.getElementById("EmailMessage").innerHTML = "Enter Valid Mail ID";
    } else {
        emailEl.style.borderColor = "green";
        emailreturn = true;
        document.getElementById("EmailMessage").innerHTML = "";
    }
    return emailreturn;
}
function mobilenumberValidation(e3) {
    var numReturn = false;
    var eventCheck = e3.which || e3.keycode;
    var mobilenumberEl = document.getElementById("mobilenumber");
    if (mobilenumberEl.value == null || mobilenumberEl.value == "") {
       mobilenumberEl.style.borderColor = "red";
        document.getElementById("mobilenumberMessage").innerHTML = "Mobile Number Can\'t be Empty";
    } if ((eventCheck >= 48 && eventCheck <= 57) || eventCheck == 8 || (eventCheck >= 35 && eventCheck <= 40) || eventCheck == 46) {
        if (mobilenumberEl.value.length != 9) {
            mobilenumberEl.style.borderColor = "red";
            document.getElementById("mobilenumberMessage").innerHTML = "Enter Mobile Number of exact 10 numerical digits only";
            numReturn = true;
            return numReturn;
        }
        else if (mobilenumberEl.value.length == 9) {
            mobilenumberEl.style.borderColor = "green";
            document.getElementById("mobilenumberMessage").innerHTML = "";
            numReturn = true;
            return numReturn;
        }
        else {
            mobilenumberEl.style.borderColor = "red";
            document.getElementById("mobilenumberMessage").innerHTML = "Enter Numerical digits only";
            numReturn = false;
            return numReturn;
        }
    }
    else {
        numReturn = false;
        return numReturn;
    }
}
function postalcodeValidation(e4) {
    var postalcodeReturn = false;
    var postalcodeEl = document.getElementById("postalcode");
    var e4Check =  e4.keyCode || e4.which;
    if (postalcodeEl.value == null || postalcodeEl.value == "") {
        postalcodeEl.style.borderColor = "red";
        document.getElementById("PostalcodeMessage").innerHTML = "Postal Code Can\'t be Empty";
    } if ((e4Check >= 48 && e4Check <= 57) || e4Check == 8 || (e4Check >= 35 && e4Check <= 40) || e4Check == 46) {
        if (postalcodeEl.value.length != 7) {
            postalcodeEl.style.borderColor = "red";
            document.getElementById("postalcodeMessage").innerHTML = "Enter Postal Code of exact 8 Numerical digits only";
            PostalcodeReturn = true;
            return PostalcodeReturn;
        } else if (postalcodeEl.value.length == 7) {
            postalcodeEl.style.borderColor = "green";
            document.getElementById("PostalcodeMessage").innerHTML = "";
            PostalcodeReturn = true;
            return PostalcodeReturn;
        } else {
            PostalcodeReturn = false;
            return PostalcodeReturn;
        }
    } else {
        PostalcodeReturn = false;
        return PostalcodeReturn;
    }
}
function Submitvalidation(event) {

    if ((firstnamevalidation(event) || lastnamevalidation(event) || usernamevalidation() || emailInValidation() || mobilenumberValidation(event) || postalcodeValidation(event)) == false) {
        event.preventDefault();
    }
    else {
        alert("Validation Done");
    }
}