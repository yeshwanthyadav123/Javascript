
  function fnamevalidation () {
    var f1=false;
    var fnamel = document.getElementById("fname");
    if (fnamel.value == null || fnamel.value == "") {
        fnamel.style.backgroundColor="red";
        fnamel.setCustomValidity('First Name Should Not Be Null!');
    } else if (!/^[a-zA-Z]*$/g.test(fnamel.value)){
        fnamel.style.backgroundColor="red";
        fnamel.setCustomValidity('Enter Alphabets Only!');
    } else if (fnamel.value.length > 6) {
        fnamel.style.backgroundColor="red";
        fnamel.setCustomValidity('First Name Should Not Contain More Than 6 Characters!');
    } else {
        fnamel.style.backgroundColor="green";
        fnamel.setCustomValidity('');
        f1=true;
    }
    return f1;
}
function lnamevalidation () {
    var f2 = false;
    var lnamel = document.getElementById("lname");
    if (lnamel.value === null || lnamel.value === "") {
        lnamel.style.backgroundColor="red";
        lnamel.setCustomValidity('Last Name Should Not Be Null!');
    } else if (!/^[a-zA-Z]*$/g.test(lnamel.value)){
        lnamel.style.backgroundColor="red";
        lnamel.setCustomValidity('Enter Alphabets Only!');
    } else if (lnamel.value.length < 2 || lnamel.value.length > 8) {
        lnamel.style.backgroundColor="red";
        lnamel.setCustomValidity('Last Name Should Be Range Between 2-8 Characters Only!');
    } else {
        f2 = true;
        lnamel.style.backgroundColor="green";
        lnamel.setCustomValidity('');
    }
    return f2;
}
function unamevalidation() {
    var f3=false;
    var regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}/;
    var unamel = document.getElementById("uname");
    if(unamel.value==null || unamel.value==""){
        unamel.style.backgroundColor="red";
        unamel.setCustomValidity('User Name Should Not Be Null!');
    }  else if (unamel.value.length > 20 || unamel.value.length < 8) {
        unamel.style.backgroundColor="red";
        unamel.setCustomValidity('User Name Should Be Range Between 8-20 Characters Only!');
    }else if(!regex.test(unamel.value)){
        unamel.style.backgroundColor="red";
        unamel.setCustomValidity('User Name Should Contain 1 Capital letter,1 Small letter,1 Special Character,1 Number and Minimum length is 8!');
    } else {
        unamel.style.backgroundColor="green";
        unamel.setCustomValidity('');
        f3=true;
    }
    return f3;
}
function emailvalidation(){
    var f4=false;
    var emailreg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
    var emaill = document.getElementById("emailid");
    if(emaill.value==null || emaill.value==""){
        emaill.style.backgroundColor="red";
        emaill.setCustomValidity('Email Should Not Be Empty!');
    }else if(!emailreg.test(emaill.value)){
        emaill.style.backgroundColor="red";
        emaill.setCustomValidity('Enter a Valid Emailid!');
    }else{
        emaill.style.backgroundColor="green";
        f4=true;
        emaill.setCustomValidity('');
    }
    return f4;
}
function numbervalidation() {
    var f5=false;
    var numReg= /^\d{10}$/;
    var numberl=document.getElementById("mobile");
    if(numberl.value==null || numberl.value==""){
        numberl.style.backgroundColor="red";
        numberl.setCustomValidity('Mobile Number Should Not Be Null!');
    } else if((!numReg.test(numberl.value)) || numberl.value.length!=10){
        numberl.style.backgroundColor="red";
        numberl.setCustomValidity('Mobile Number Should Be Exact Of 10 Digits Only!');
    } else{
        numberl.style.backgroundColor="green";
        numberl.setCustomValidity('');
        f5=true;
    }
    return f5;
}
function postalvalidation() {
    var f6=false;
    var numRe= /^\d{6}$/;
    var postall=document.getElementById("postal");
    if(postall.value==null || postall.value==""){
        postall.style.backgroundColor="red";
        posatll.setCustomValidity('Postal Code Should Not Be Null!');
    } else if((!numRe.test(postall.value)) || postall.value.length!=6){
        postall.style.backgroundColor="red";
        postall.setCustomValidity('Postal Code Should Be Exact Of 6 Digits Only!');
    } else{
        postall.style.backgroundColor="green";
        postall.setCustomValidity('');
        f5=true;
    }
    return f5;
}
function Submitvalidation(){
    if (fnamevalidation () && lnamevalidation() && unamevalidation() && emailvalidation() && numbervalidation() && postalvalidation()){
        alert("Correct Format the Data is Valid!");
    }
    else{
       alert("Data is Not Valid");
    }
}
