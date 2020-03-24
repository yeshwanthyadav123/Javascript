function printError(elementId, Message) {
    document.getElementById(elementId).innerHTML = Message;
}

  function firstNameValidation () {
    var f1=false;
    var firstNameError=true;
    var fnamel = document.getElementById("fname");
   
    if (fnamel.value == null || fnamel.value == "") {
        fnamel.style.borderColor="red";
        printError("firstNameError","First Name Should Not Be Null!");
        
    } else if (!/^[a-zA-Z]*$/g.test(fnamel.value)){
        fnamel.style.borderColor="red";
        printError("firstNameError","Enter Alphabets Only!");
       
    } else if (fnamel.value.length > 6) {
        fnamel.style.borderColor="red";
        printError("firstNameError","First Name Should Not Contain More Than 6 Characters!");
    } else {
        fnamel.style.borderColor="green";
        printError("firstNameError"," ");
        firstNameError=false;
        f1=false;
    }
    return f1;
}
function lastNameValidation () {
    var f2 = false;
    var lastNameError=true;
    var lnamel = document.getElementById("lname");
    if (lnamel.value === null || lnamel.value === "") {
        lnamel.style.borderColor="red";
        printError("lastNameError","Last Name Should Not Be Null!");
    } else if (!/^[a-zA-Z]*$/g.test(lnamel.value)){
        lnamel.style.borderColor="red";
       printError("lastNameError","Enter Alphabets Only!")
    } else if (lnamel.value.length < 2 || lnamel.value.length > 8) {
        lnamel.style.borderColor="red";
      printError("lastNameError","Last Name Should Be Range Between 2-8 Characters Only!")
    } else {
        
        lnamel.style.borderColor="green";
        printError("lastNameError"," ");
        lastNameError=false;
        f2 = true;
    }
    return f2;
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
function phoneNumberValidation() {
    var f5=false;
    var phoneNumberError=true;
    var numReg= /^\d{10}$/;
    var numberl=document.getElementById("phoneNumber");
    if(numberl.value==null || numberl.value==""){
        numberl.style.borderColor="red";
        printError("phoneNumberError","Phone Number Should Not Be Null!");
    } else if((!numReg.test(numberl.value)) || numberl.value.length!=10){
        numberl.style.borderColor="red";
        printError("phoneNumberError","Phone Number Should Be Exact Of 10 Digits Only!");
    } else{
        numberl.style.borderColor="green";
        printError("phoneNumberError"," ");
        phoneNumberError=false;
        f5=true;
    }
    return f5;
}
function postalValidation() {
    var f6=false;
    var postalError=true;
    var numRe= /^\d{6}$/;
    var numberl=document.getElementById("postalCode");
    if(numberl.value==null || numberl.value==""){
        numberl.style.borderColor="red";
        printError("postalError","Postal Code Should Not Be Null!");
    } else if((!numRe.test(numberl.value)) || numberl.value.length!=6){
        numberl.style.borderColor="red";
        printError("postalError","Postal Code Should Be Exact Of 6 Digits Only!");
    } else{
        numberl.style.borderColor="green";
        printError("postalError"," ");
        postalError=false;
        f6=true;
    }
    return f6;
}
function submitValidation(){
    if((firstNameValidation() || lastNameValidation() || userNameValidation() || emailValidation() || phoneNumberValidation() || postalValidation()) ) {
        alert("data is  valid");
    }else{
        printError("submitError","There is invalid data present please check once!")
        alert(" not valid data");
    }
    
}
        
        
        


