
function fnamevalidity(e1) {
    var fnameReturn = false;
    var fnameEl = document.getElementById("fname");
    if (fnameEl.value == null || fnameEl.value == "") {
        fnameEl.style.borderColor = "red";
        document.getElementById("fnameMessage").innerHTML = "First Name can\'t be empty";
    }
    var x=e1.which || e1.keyCode || window.e1;
    if ((x > 64 && x < 91) || (x > 96 && x < 123) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
        if (fnameEl.value.length <= 5) {
            fnameEl.style.borderColor = "green";
            document.getElementById("fnameMessage").innerHTML = "";
            fnameReturn = true;
            return fnameReturn;
        }else if (fnameEl.value.length > 5) {
            fnameEl.style.borderColor = "red";
            document.getElementById("fnameMessage").innerHTML = "Should be less than or equal to 6 characters";
            fnameReturn = true;
            return fnameReturn;
        } else {
            fnameEl.style.borderColor = "red";
            document.getElementById("fnameMessage").innerHTML = "Enter Alphabets Only";
            fnameReturn = false;
            return fnameReturn;
        }
    } else {
        fnameReturn = false;
        return fnameReturn;
    }
}
function lnamevalidity(e2) {
    var lnameReturn = false;
    var lnameEl = document.getElementById("lname");
    var charCheck=e2.which||e2.keyCode;
    if (lnameEl.value === null || lnameEl.value === "") {
        lnameEl.style.borderColor = "red";
        document.getElementById("lnameMessage").innerHTML = "Last Name can\'t be empty";
    } if ((charCheck > 64 && charCheck < 91) || (charCheck > 96 && charCheck < 123) || charCheck == 8 || (charCheck >= 35 && charCheck <= 40) || charCheck == 46) {
        if (lnameEl.value.length < 2 || lnameEl.value.length > 8) {
            lnameEl.style.borderColor = "red";
            document.getElementById("lnameMessage").innerHTML = "Should be minimum of 2 or maximum of 8 characters";
            lnameReturn=true;
            return lnameReturn;
        } else if(lnameEl.value.length>=2 || lnameEl.value.length <= 8){
            lnameReturn = true;
            lnameEl.style.borderColor = "green";
            document.getElementById("lnameMessage").innerHTML = "";
            return lnameReturn;
        } else{
        lnameEl.style.borderColor = "red";
        document.getElementById("lnameMessage").innerHTML = "Enter Alphabets Only";
        lnameReturn=false;
        return lnameReturn;
       }
    } else {
        lnameReturn = false;
        return lnameReturn;
    }
}
function unamevalidity() {
    var unameReturn = false;
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
    var unameEl = document.getElementById("uname");
    if (unameEl.value == null || unameEl.value == "") {
        unameEl.style.borderColor = "red";
        document.getElementById("unameMessage").innerHTML = "Username Can\'t be Empty";
    } else if (unameEl.value.length > 16 || unameEl.value.length < 8) {
        unameEl.style.borderColor = "red";
        document.getElementById("unameMessage").innerHTML = "Should be minimum 8 characters and maximum of 16 characters";
    } else if (!regex.test(unameEl.value)) {
        unameEl.style.borderColor = "red";
        document.getElementById("unameMessage").innerHTML = "Should contain Atleast 1 uppercase letter,\n Atleast 1 lower case letter, Atleast 1 Number,\n Atleast 1 special char acter from the list(!@#$%^&*_<>?|), Minimum 8 characters length";
    } else {
        unameEl.style.borderColor = "green";
        document.getElementById("unameMessage").innerHTML = "";
        unameReturn = true;
    }
    return unameReturn;
}
function emailInValid() {
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
function numberValidity(e3) {
    var numReturn = false;
    var eventCheck = e3.which || e3.keycode;
    var numberEl = document.getElementById("mobile");
    if (numberEl.value == null || numberEl.value == "") {
        numberEl.style.borderColor = "red";
        document.getElementById("MNumberMessage").innerHTML = "Mobile Number Can\'t be Empty";
    } if ((eventCheck >= 48 && eventCheck <= 57) || eventCheck == 8 || (eventCheck >= 35 && eventCheck <= 40) || eventCheck == 46) {
        if (numberEl.value.length != 9) {
            numberEl.style.borderColor = "red";
            document.getElementById("MNumberMessage").innerHTML = "Enter Mobile Number of exact 10 numerical digits only";
            numReturn = true;
            return numReturn;
        }
        else if (numberEl.value.length == 9) {
            numberEl.style.borderColor = "green";
            document.getElementById("MNumberMessage").innerHTML = "";
            numReturn = true;
            return numReturn;
        }
        else {
            numberEl.style.borderColor = "red";
            document.getElementById("MNumberMessage").innerHTML = "Enter Numerical digits only";
            numReturn = false;
            return numReturn;
        }
    }
    else {
        numReturn = false;
        return numReturn;
    }
}
function pcodeValidity(e4) {
    var PcodeReturn = false;
    var pcodeEl = document.getElementById("pcode");
    var e4Check =  e4.keyCode || e4.which;
    if (pcodeEl.value == null || pcodeEl.value == "") {
        pcodeEl.style.borderColor = "red";
        document.getElementById("PcodeMessage").innerHTML = "Postal Code Can\'t be Empty";
    } if ((e4Check >= 48 && e4Check <= 57) || e4Check == 8 || (e4Check >= 35 && e4Check <= 40) || e4Check == 46) {
        if (pcodeEl.value.length != 7) {
            pcodeEl.style.borderColor = "red";
            document.getElementById("PcodeMessage").innerHTML = "Enter Postal Code of exact 8 Numerical digits only";
            PcodeReturn = true;
            return PcodeReturn;
        } else if (pcodeEl.value.length == 7) {
            pcodeEl.style.borderColor = "green";
            document.getElementById("PcodeMessage").innerHTML = "";
            PcodeReturn = true;
            return PcodeReturn;
        } else {
            PcodeReturn = false;
            return PcodeReturn;
        }
    } else {
        PcodeReturn = false;
        return PcodeReturn;
    }
}
function Submitvalidate(event) {

    if ((fnamevalidity(event) || lnamevalidity(event) || unamevalidity() || emailInValid() || numberValidity(event) || pcodeValidity(event)) == false) {
        event.preventDefault();
    }
    else {
        alert("Validation Done");
    }
}
