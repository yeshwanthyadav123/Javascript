function printError(elementId, hintMsg) {

    document.getElementById(elementId).innerHTML = hintMsg;
}

function validation() {
    var firstname = document.Register Form.firstname.value;
    var lastname = document.Register Form.lastname.value;
	var username = document.Register Form.username.value;
    var email = document.Register Form.email.value;
    var mobilenumber = document.Register Form.mobilenumber.value;
    var postalcodecode = document.Register Form.postalcode.value;
    
    var firstnameError =lastnameError= emailError = mobilenumberError = usernameError = postalcodeError = true;
    
    // Validate  firstname
    if(firstname == "") {
        printError("firstnameError", "Please enter your first name");
    } else {
        var regex = /[a-zA-Z]+$/;                
        if(regex.test(firstname) === false) {
            printError("firstnameError", "Please enter a valid first name,do not use Numbers ");
        } else {
            printError("firstnameError", "");
            firstnameError = false;
        }
    }
    if(lastname == "") {
        printError("lastnameError", "Please enter your last name");
    } else {
        var regex = /[a-zA-Z]+$/;                
        if(regex.test(lastname) === false) {
            printError("lastnameError", "Please enter a valid last  name,donot use Numbers");
        } else {
            printError("lastnameError", "");
            lastnameError = false;
        }
    }

    // Validate uname

     if(username == "") {
        printError("usernameError", "Please enter your UserName which consists of atleast one uppercase,lowercase letter,one number,one special symbol ");
    } else {
        var regex=/(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*(),.?":{}|<>]).{8,16}/;
        if(regex.test(username) === false) {
            printError("usernameError", "Please enter a valid User name");
        } else {
            printError("usernameError", "");
            usernameError = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailError", "Please enter your correct email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
        } else{
            printError("emailError", "");
            emailError = false;
        }
    }
    
    // Validate mobile number
    if(mobilenumber == "") {
        printError("mobileError", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobilenumber) === false) {
            printError("mobilenumberError", "Please enter a valid 10 digit mobile number,donot use any characters");
        } else{
            printError("mobilenumberError", "");
            mobilenumberError = false;
    
        }
    }
    // Validate postalcode
    if(postalcode == "") {
        printError("postalcodeError", "Please enter your postalcode");
    } else {
        var regex = /[0-9]{8}$/;

        if(regex.test(postalcode) === false) {
            printError("postalcodeError", "Please enter a valid 8 digit postalcode,dont use any characters");
        } else{
            printError("postalcodeError", "");
            postalcodeError = false;
        }
    }
  if((firstnameError || lastnameError ||usernameError|| emailError || mobilenumberError || postalcodeError) == true) {
       return false;
    } else {
                var data = "You entered the following details: \n" +
                          "First Name: " + firstname + "\n" +
                          "Last Name: " + lastname + "\n" +
                          "User Name:" +username+"\n"+
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobilenumber + "\n" +
                          "Postal Code: " + postalcode + "\n" 

          }
        
        alert(dataPreview);
    
};