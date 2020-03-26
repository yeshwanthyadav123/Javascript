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

    
    var fnamedemo =lnamedemo= emaildemo = mobiledemo= unamedemo = pcodedemo = true;
    var regex;
    
    if(fname1 == "")
		{
        printError("fnamedemo", "Please enter your first name");
        document.contactForm.fname.style.borderColor="red";
    }
	
	else
		
		{
        regex = /[a-zA-Z]+$/;                
        if(regex.test(fname1) === false) {
            printError("fnamedemo", "Please enter a valid name,donot use Numbers");
            document.contactForm.fname.style.borderColor="red";

        }
		else
			{
            printError("fnamedemo", "");
            fnameError = false;
            document.contactForm.fname.style.borderColor="green";

        }
    }
    if(lname == "")
		{
        printError("lnamedemo", "Please enter your Last name with minimum of 2 characters");
        document.contactForm.lname.style.borderColor="red";

            }
            else
			{
        regex = /[a-zA-Z]+$/;                
        if(regex.test(lname) === false) {
            printError("lnamedemo", "Please enter a valid name,donot use Numbers");
            document.contactForm.lname.style.borderColor="red";

        } 
		else 
		{
            printError("lnamedemo", "");
            lnameError = false;
            document.contactForm.lname.style.borderColor="green";

        }
        }
    

    

     if(uname == "")
		 {
        printError("unamedemo", "Please enter your UserName ");
        document.contactForm.uname.style.borderColor="red";

    }
    else
		{
        regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
        if(regex.test(uname) === false) {
            printError("unamedemo", "Please enter atleast one upper,lower,numeric and symbol with minimum 8 characters");
            document.contactForm.uname.style.borderColor="red";

        } 
		else
			{
            printError("unamedemo", "");
            unameError = false;
            document.contactForm.uname.style.borderColor="green";

        }
    }
    
    
    if(email == "")
		{
        printError("emaildemo", "Please enter your email address");
        document.contactForm.email.style.borderColor="red";

    }
	else
		{
        regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emaildemo", "Please enter a valid email address");
            document.contactForm.email.style.borderColor="red";

        }
		else
		{
            printError("emaildemo", "");
            emailError = false;
            document.contactForm.email.style.borderColor="green";

        }
    }
    
    
    if(mobile == "") {
        printError("mobiledemo", "Please enter your mobile number");
        document.contactForm.mobile.style.borderColor="red";

    }
	else
		{
        regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobiledemo", "Please enter a valid 10 digit mobile number,donot use Alphabets");
            document.contactForm.mobile.style.borderColor="red";

        } 
		els
		{
            printError("mobiledemo", "");
            mobileError = false;
            document.contactForm.mobile.style.borderColor="green";

        }
    }
    if(pcode == "") 
	{
        printError("pcodedemo", "Please enter your postalcode");
        document.contactForm.pcode.style.borderColor="red";

    } else
		{
        regex = /[0-9]{8}$/;

        if(regex.test(pcode) === false) {
            printError("pcodedemo", "Please enter a valid 8 digit postalcode");
            document.contactForm.pcode.style.borderColor="red";

        } else{
            printError("pcodedemo", "");
            pcodeError = false;
            document.contactForm.pcode.style.borderColor="green";

        }
    }
   
    
    if((fnamedemo || lnamedemo ||unamedemo|| emaildemo|| mobiledemo || pcodedemo) == true) {
       return false;

    } 
    
};