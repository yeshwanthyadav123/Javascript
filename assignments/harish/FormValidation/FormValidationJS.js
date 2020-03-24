

function printError(elemId, hintMsg) {

    document.getElementById(elemId).innerHTML = hintMsg;

}

function validateForm() {
    var fname1 =document.contactForm.fname.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var pcode = document.contactForm.pcode.value;
    var uname = document.contactForm.uname.value;

    
    var fnameError =lnameError= emailError = mobileError = unameError = pcodeError = true;
    var regex;
    // Validate name
    if(fname1 == "") {
        printError("fnameError", "Please enter your first name");
        document.contactForm.fname.style.borderColor="red";
    } else {
        regex = /[a-zA-Z]+$/;                
        if(regex.test(fname1) === false) {
            printError("fnameError", "Please enter a valid name,donot use Numbers");
            document.contactForm.fname.style.borderColor="red";

        } else {
            printError("fnameError", "");
            fnameError = false;
            document.contactForm.fname.style.borderColor="green";

        }
    }
    if(lname == "") {
        printError("lnameError", "Please enter your Last name with minimum of 2 characters");
        document.contactForm.lname.style.borderColor="red";

            }
            else{
        regex = /[a-zA-Z]+$/;                
        if(regex.test(lname) === false) {
            printError("lnameError", "Please enter a valid name,donot use Numbers");
            document.contactForm.lname.style.borderColor="red";

        } else {
            printError("lnameError", "");
            lnameError = false;
            document.contactForm.lname.style.borderColor="green";

        }
        }
    

    // Validate uname

     if(uname == "") {
        printError("unameError", "Please enter your UserName ");
        document.contactForm.uname.style.borderColor="red";

    }
    else {
        regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
        if(regex.test(uname) === false) {
            printError("unameError", "Please enter atleast one upper,lower,numeric and symbol with minimum 8 characters");
            document.contactForm.uname.style.borderColor="red";

        } else {
            printError("unameError", "");
            unameError = false;
            document.contactForm.uname.style.borderColor="green";

        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailError", "Please enter your email address");
        document.contactForm.email.style.borderColor="red";

    } else {
        regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
            document.contactForm.email.style.borderColor="red";

        } else{
            printError("emailError", "");
            emailError = false;
            document.contactForm.email.style.borderColor="green";

        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileError", "Please enter your mobile number");
        document.contactForm.mobile.style.borderColor="red";

    } else {
        regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileError", "Please enter a valid 10 digit mobile number,donot use Alphabets");
            document.contactForm.mobile.style.borderColor="red";

        } else{
            printError("mobileError", "");
            mobileError = false;
            document.contactForm.mobile.style.borderColor="green";

        }
    }
    // Validate postalcode
    if(pcode == "") {
        printError("pcodeError", "Please enter your postalcode");
        document.contactForm.pcode.style.borderColor="red";

    } else {
        regex = /[0-9]{8}$/;

        if(regex.test(pcode) === false) {
            printError("pcodeError", "Please enter a valid 8 digit postalcode");
            document.contactForm.pcode.style.borderColor="red";

        } else{
            printError("pcodeError", "");
            pcodeError = false;
            document.contactForm.pcode.style.borderColor="green";

        }
    }
   
    
    // Prevent the form from being submitted if there are any errors
    if((fnameError || lnameError ||unameError|| emailError || mobileError || pcodeError) == true) {
       return false;

    } 
    
};
