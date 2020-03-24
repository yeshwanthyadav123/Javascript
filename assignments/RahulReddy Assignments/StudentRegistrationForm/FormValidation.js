
    // Validate firstname
   function firstnamevalidity(e1) {
    var firstnameReturn = false;
    var firstnameEl = document.getElementById("firstname");
    if (firstnameEl.value == null || firstnameEl.value == "") {
        firstnameEl.style.borderColor = "red";
        document.getElementById("fnameerror").innerHTML = "First Name cannot be empty";
    }
    var x=e1.which || e1.keyCode || window.e1;
    if ((x > 64 && x < 91) || (x > 96 && x < 123) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
        if (firstnameEl.value.length <= 5) {
            firstnameEl.style.borderColor = "green";
            document.getElementById("fnameerror").innerHTML = "";
            firstnameReturn = true;
            return firstnameReturn;
        }else if (firstnameEl.value.length > 5) {
            firstnameEl.style.borderColor = "red";
            document.getElementById("fnameerror").innerHTML = "Enter less than or equal to 6 characters";
            firstnameReturn = true;
            return firstnameReturn;
        } else {
            firstnameEl.style.borderColor = "red";
            document.getElementById("fnameerror").innerHTML = "Please enter only alphabets, numbers are not allowed";
            firstnameReturn = false;
            return firstnameReturn;
        }
    } else {
        firstnameReturn = false;
        return firstnameReturn;
    }
}
    
    // validate lastname
    function lastnamevalidity(e2) {
    var lastnameReturn = false;
    var lastnameEl = document.getElementById("lastname");
    var charCheck=e2.which||e2.keyCode;
    if (lastnameEl.value === null || lastnameEl.value === "") {
        lastnameEl.style.borderColor = "red";
        document.getElementById("lnameerror").innerHTML = "Last Name cannot be empty";
    } if ((charCheck > 64 && charCheck < 91) || (charCheck > 96 && charCheck < 123) || charCheck == 8 || (charCheck >= 35 && charCheck <= 40) || charCheck == 46) {
        if (lastnameEl.value.length < 2 || lastnameEl.value.length > 8) {
            lastnameEl.style.borderColor = "red";
            document.getElementById("lnameerror").innerHTML = "Enter less than or equal to 8 characters";
            lastnameReturn=true;
            return lastnameReturn;
        } else if(lastnameEl.value.length>=2 || lastnameEl.value.length <= 8){
            lnameReturn = true;
            lastnameEl.style.borderColor = "green";
            document.getElementById("lnameerror").innerHTML = "";
            return lastnameReturn;
        } else{
        lastnameEl.style.borderColor = "red";
        document.getElementById("lnameerror").innerHTML = "Please enter only alphabets, numbers are not allowed";
        lastnameReturn=false;
        return lastnameReturn;
       }
    } else {
        lastnameReturn = false;
        return lastnameReturn;
    }
}
    
    //validate username
    function usernamevalidity() {
    var usernameReturn = false;
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
    var usernameEl = document.getElementById("username");
    if (usernameEl.value == null || usernameEl.value == "") {
        usernameEl.style.borderColor = "red";
        document.getElementById("unameerror").innerHTML = "username Cannot be Empty";
    } else if (usernameEl.value.length > 16 || usernameEl.value.length < 8) {
        usernameEl.style.borderColor = "red";
        document.getElementById("unameerror").innerHTML = "Enter minimum of 8 characters and maximum of 16 characters";
    } else if (!regex.test(usernameEl.value)) {
        usernameEl.style.borderColor = "red";
        document.getElementById("unameerror").innerHTML = "enter atleast (1 uppercase letter, 1 lower case letter, 1 Number,1 special character from the list(!@#$%^&*_<>?|)) and a minimum of 8 characters";
    } else {
        usernameEl.style.borderColor = "green";
        document.getElementById("unameerror").innerHTML = "";
        usernameReturn = true;
    }
    return usernameReturn;
}
    
    
    // Validate email address
    function ifEmailInValid() {
    var emailreturn = false;
    var emailregex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var emailEl = document.getElementById("email");
    if (emailEl.value == null || emailEl.value == "") {
        emailEl.style.borderColor = "red";
        document.getElementById("emailerror").innerHTML = "Email cannot be Empty";
    } else if (!emailregex.test(emailEl.value)) {
        emailEl.style.borderColor = "red";
        document.getElementById("emailerror").innerHTML = "Enter a valid Mail ID with a proper name followed by gmail.com";
    } else {
        emailEl.style.borderColor = "green";
        emailreturn = true;
        document.getElementById("emailerror").innerHTML = "";
    }
    return emailreturn;
}
    
    // Validate mobile number
    function numberValidity(e3) {
    var numberReturn = false;
    var eventCheck = e3.which || e3.keycode;
    var numberEl = document.getElementById("mobile");
    if (numberEl.value == null || numberEl.value == "") {
        numberEl.style.borderColor = "red";
        document.getElementById("mobileerror").innerHTML = "Mobile Number cannot be empty";
    } if ((eventCheck >= 48 && eventCheck <= 57) || eventCheck == 8 || (eventCheck >= 35 && eventCheck <= 40) || eventCheck == 46) {
        if (numberEl.value.length != 9) {
            numberEl.style.borderColor = "red";
            document.getElementById("mobileerror").innerHTML = "Please enter a valid 10 digit mobile number";
            numberReturn = true;
            return numberReturn;
        }
        else if (numberEl.value.length == 9) {
            numberEl.style.borderColor = "green";
            document.getElementById("mobileerror").innerHTML = "";
            numberReturn = true;
            return numberReturn;
        }
        else {
            numberEl.style.borderColor = "red";
            document.getElementById("mobileerror").innerHTML = "Enter in numbers only";
            numberReturn = false;
            return numberReturn;
        }
    }
    else {
        numberReturn = false;
        return numberReturn;
    }
}
     
    // Validate mobile number
    function postalcodeValidity(e4) {
    var PostalcodeReturn = false;
    var postalcodeEl = document.getElementById("postalcode");
    var e4Check =  e4.keyCode || e4.which;
    if (postalcodeEl.value == null || postalcodeEl.value == "") {
        postalcodeEl.style.borderColor = "red";
        document.getElementById("ziperror").innerHTML = "Postal Code cannot be Empty";
    } if ((e4Check >= 48 && e4Check <= 57) || e4Check == 8 || (e4Check >= 35 && e4Check <= 40) || e4Check == 46) {
        if (postalcodeEl.value.length != 7) {
            postalcodeEl.style.borderColor = "red";
            document.getElementById("ziperror").innerHTML = "Enter a valid 8 digit postal code";
            PostalcodeReturn = true;
            return PostalcodeReturn;
        } else if (postalcodeEl.value.length == 7) {
            postalcodeEl.style.borderColor = "green";
            document.getElementById("ziperror").innerHTML = "";
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
    
    
    function validsubmit(event) {

    if ((firstnamevalidity(event) || lastnamevalidity(event) || usernamevalidity() || ifEmailInValid() || numberValidity(event) || postalcodeValidity(event)) == false) {
        event.preventDefault();
    }
    else {
        alert("Validation Done");
    }
}