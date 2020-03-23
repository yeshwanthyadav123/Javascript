function printError(elementId, hintMsg) {
    document.getElementById(elementId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var Firstname = document.contactForm.firstname.value;
    var Lastname = document.contactForm.lastname.value;
    var Username = document.contactForm.username.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var zipcode = document.contactForm.postalcode.value;
    
	// Defining error variables with a default value
    var fnameerror= lnameerror = unameerror = emailErr = mobileErr = ziperror = true;
    
    // Validate firstname
    if(Firstname == "") {
        printError("fnameerror", "Please enter your firstname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(Firstname) === false) {
            printError("fnameerror", "Please enter a valid Firstname without numbers and special characters");
        } else {
            printError("fnameerror", "");
            fnameerror = false;
        }
    }
    
    // validate lastname
    if(Lastname == "") {
        printError("lnameerror", "Please enter your lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(Lastname) === false) {
            printError("lnameerror", "Please enter a valid Lastname without numbers and special characters");
        } else {
            printError("lnameerror", "");
            lnameerror = false;
        }
    }
    
    //validate username
    if(Username == "") {
        printError("unameerror", "Please enter your username");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;                
        if(regex.test(Username) === false) {
            printError("unameerror", "Please enter a valid username");
        } else {
            printError("unameerror", "");
            unameerror = false;
        }
    }
    
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
     
    // Validate mobile number
    if(zipcode == "") {
        printError("ziperror", "Please enter your postal code");
    } else {
        var regex = /^[1-9]{6}$/;
        if(regex.test(zipcode) === false) {
            printError("ziperror", "Please enter a valid 6 digit postal code");
        } else{
            printError("ziperror", "");
            ziperror = false;
        }
    }
    
    
    // Prevent the form from being submitted if there are any errors
    if((fnameerror || lnameerror || unameerror || emailErr || mobileErr || ziperror) == true) {
       return false;
    } 
};