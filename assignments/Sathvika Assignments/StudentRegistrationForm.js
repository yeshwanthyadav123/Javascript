function printError(elementId, Message) {
    document.getElementById(elementId).innerHTML = Message;
}

function firstNameValidation(event1) {
    var first1 = false;
    var fnamel = document.getElementById("fname");
    if (fnamel.value == null || fnamel.value == "") {
        fnamel.style.borderColor = "red";
        printError("firstNameError","First Name Should Not Be Null!");
    }
    var x=event1.which || event1.keyCode || window.event1;
    if ((x > 64 && x < 91) || (x > 96 && x < 123) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
        if (fnamel.value.length <= 6) {
            fnamel.style.borderColor = "green";
            printError("firstNameError"," ");
           
            first1 = true;
            return first1;
        }else if (fnamel.value.length > 5) {
            fnamel.style.borderColor = "red";
            printError("firstNameError","First Name Should Be of 6 Characters Only!");
            first1 = true;
            return first1;
        } else {
            fnamel.style.borderColor = "red";
            printError("firstNameError","Enter Alphabets Only!");
            first1 = false;
            return first1;
        }
    } else {
        first1 = false;
        return first1;
    }
}
function lastNameValidation (event2) {
    var last = false;
    var lnamel = document.getElementById("lname");
    
    if (lnamel.value === null || lnamel.value === "") {
        lnamel.style.borderColor="red";
        printError("lastNameError","Last Name Should Not Be Null!");
    } var y=event2.which || event2.keyCode || window.event2;
    if (( y> 64 && y < 91) || (y > 96 && y < 123) || y == 8 || (y >= 35 && y <= 40) || y == 46) {
        if (lnamel.value.length < 1 || lnamel.value.length > 7) {
            lnamel.style.borderColor = "red";
            printError("lastNameError","Last Name Should Be Range Between 2-6 Characters!");
            last=true;
            return last;
        } else if(lnamel.value.length>=1 || lnamel.value.length <= 7){
            lnamel.style.borderColor = "green";
            printError("lastNameError"," ");
            lastNameError=false;
            last = true;
            return last;
        } else{
        lnamel.style.borderColor = "red";
        printError("lastNameError","Enter Alphabets Only!");
        last=false;
        return last;
       }
    } else {
        last = false;
        return last;
    }
}
function userNameValidation() {
    var f3=false;
    var userNameError=true;
    var regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}/;
    var unamel = document.getElementById("uname");
    if(unamel.value==null || unamel.value==""){
        unamel.style.borderColor="red";
        printError("userNameError","User Name Should Not Be Null!");
    }  else if (unamel.value.length < 8 || unamel.value.length >20) {
        unamel.style.borderColor="red";
        printError("userNameError","User Name Should Be Range Between 8-20 Characters Only!");
    }else if(!regex.test(unamel.value)){
        unamel.style.borderColor="red";
       printError("userNameError","User Name Should Contain 1 Capital letter,1 Small letter,1 Special Character,1 Number and Minimum length is 8!");
    } else {
        unamel.style.borderColor="green";
        printError("userNameError"," ");
        userNameError=false;
        f3=true;
    }
    return f3;
}
function emailValidation(){
    var f4=false;
    var emailError=true;
    var emailreg = /^\S+@\S+\.\S+$/; 
    var emaill = document.getElementById("emailid");
    if(emaill.value==null || emaill.value==""){
        emaill.style.borderColor="red";
        printError("emailError","Email Should Not Be Empty!");
    }else if(!emailreg.test(emaill.value)){
        emaill.style.borderColor="red";
        printError("emailError","Enter a Valid Emailid! (For Example:abc@gmail.com)");
    }else{
        emaill.style.borderColor="green";
        printError("emailError"," ");
        emailError=false;
        f4=true;
      
    }
    return f4;
}
function phoneNumberValidation(event3) {
    var phone = false;
    
    var numberl = document.getElementById("phoneNumber");
    if (numberl.value == null || numberl.value == "") {
        numberl.style.borderColor = "red";
       printError("phoneNumberError","Phone Number Cannot Be Null!");
    } var z = event3.which || event3.keycode;
    if ((z >= 48 && z <= 57) || z == 8 || (z >= 35 && z <= 40) || z == 46) {
        if (numberl.value.length != 9) {
            numberl.style.borderColor = "red";
            printError("phoneNumberError","Phone Number Should Be Of Exact 10 Digits!");
            phone = true;
            return phone;
        }
        else if (numberl.value.length == 9) {
            numberl.style.borderColor = "green";
            printError("phoneNumberError"," ");
            phoneNumberError=false;
            phone = true;
            return phone;
        }
        else {
            numberl.style.borderColor = "red";
            printError("phoneNumberError","Enter Only Digits!")
            phone = false;
            return phone;
        }
    }
    else {
        phone = false;
        return phone;
    }
}
function postalValidation(event4) {
    var postal=false;
    //var postalError=true;
    //var numRe= /^\d{6}$/;
    var postalcode=document.getElementById("postalCode");
    if (postalcode.value == null || postalcode.value == "") {
        postalcode.style.borderColor = "red";
       printError("postalError","Postal Code Should Not Be Null!")
    } var v = event4.which || event4.keycode;
    if ((v >= 48 && v <= 57) || v == 8 || (v >= 35 && v <= 40) || v == 46) {
        if (postalcode.value.length != 5) {
            postalcode.style.borderColor = "red";
            printError("postalError","Postal Code Should Be Of Exact 6 Digits!")
            postal = true;
            return postal;
        } else if (postalcode.value.length == 6) {
            postalcode.style.borderColor = "green";
            printError("postalError"," ")
            postal = true;
            postalError=false;
            return postal;
        } else {
            postalcode.style.borderColor = "red";
            printError("postalError","Enter Only Digits!")
            postal = false;
            return postal;
        }
    } else {
        postal = false;
        return postal;
    }
}
function submitValidation(event){
    if((firstNameValidation(event) || lastNameValidation(event) || userNameValidation() || emailValidation() || phoneNumberValidation(event) || postalValidation(event))==false ) {
        printError("submitError","The Data Entered Is Not Valid Please Check!")
         event.preventDefault();
    }else{
        
        alert(" Data is Valid");
    }
}
        
        


