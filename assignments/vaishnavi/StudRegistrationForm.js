<script type="text/javascript">
function printError(elemId, hintMsg) {

    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var fname = document.contactForm.fname.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var pcode = document.contactForm.pcode.value;
    var uname = document.contactForm.uname.value;

    
    var fnameErr =lnameErr= emailErr = mobileErr = unameErr = pcodeErr = true;
    
    // Validate name
    if(fname == "") {
        printError("fnameErr", "Please enter your first name");
    } else {
        var regex = /[a-zA-Z]+$/;                
        if(regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid name,donot use Numbers");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }
    if(lname == "") {
        printError("lnameErr", "Please enter your last name");
    } else {
        var regex = /[a-zA-Z]+$/;                
        if(regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid name,donot use Numbers");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }

    // Validate uname

     if(uname == "") {
        printError("unameErr", "Please enter your UserName ");
    } else {
        var regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
        if(regex.test(uname) === false) {
            printError("unameErr", "Please enter a valid User name");
        } else {
            printError("unameErr", "");
            unameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
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
            printError("mobileErr", "Please enter a valid 10 digit mobile number,donot use Alphabets");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
    
        }
    }
    // Validate postalcode
    if(pcode == "") {
        printError("pcodeErr", "Please enter your postalcode");
    } else {
        var regex = /[0-9]{8}$/;

        if(regex.test(pcode) === false) {
            printError("pcodeErr", "Please enter a valid 8 digit postalcode");
        } else{
            printError("pcodeErr", "");
            pcodeErr = false;
        }
    }
   
    
    // Prevent the form from being submitted if there are any errors
    if((fnameErr || lnameErr ||unameErr|| emailErr || mobileErr || pcodeErr) == true) {
       return false;
    } else {
                var dataPreview = "You've entered the following details: \n" +
                          "First Name: " + fname + "\n" +
                          "Last Name: " + lname + "\n" +
                          "User Name:" +uname+"\n"+
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Postal Code: " + pcode + "\n" 

          }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    
};
</script>