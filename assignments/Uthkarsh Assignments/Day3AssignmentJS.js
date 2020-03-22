function fnamevalidity () {
    var r1=false;
    var fnameEl = document.getElementById("fname");
    if (fnameEl.value == null || fnameEl.value == "") {
        fnameEl.style.borderColor="red";
        fnameEl.setCustomValidity('First Name can\'t be empty');
    } else if (!/^[a-zA-Z]*$/g.test(fnameEl.value)){
        fnameEl.style.borderColor="red";
        fnameEl.setCustomValidity('Enter Alphabets Only');
    } else if (fnameEl.value.length > 6) {
        fnameEl.style.borderColor="red";
        fnameEl.setCustomValidity('Should be less than or equal to 6 characters');
    } else {
        fnameEl.style.borderColor="green";
        fnameEl.setCustomValidity('');
        r1=true;
    }
    return r1;
}
function lnamevalidity () {
    var ret = false;
    var lnameEl = document.getElementById("lname");
    if (lnameEl.value === null || lnameEl.value === "") {
        lnameEl.style.borderColor="red";
        lnameEl.setCustomValidity('Last Name can\'t be empty');
    } else if (!/^[a-zA-Z]*$/g.test(lnameEl.value)){
        lnameEl.style.borderColor="red";
        lnameEl.setCustomValidity('Enter Alphabets Only');
    } else if (lnameEl.value.length < 2 || lnameEl.value.length > 8) {
        lnameEl.style.borderColor="red";
        lnameEl.setCustomValidity('Should be minimum of 2 or maximum of 8 characters');
    } else {
        ret = true;
        lnameEl.style.borderColor="green";
        lnameEl.setCustomValidity('');
    }
    return ret;
}
function unamevalidity() {
    var r3=false;
    var regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
    var unameEl = document.getElementById("uname");
    if(unameEl.value==null || unameEl.value==""){
        unameEl.style.borderColor="red";
        unameEl.setCustomValidity('Username Can\'t be Empty');
    }  else if (unameEl.value.length > 16 || unameEl.value.length < 8) {
        unameEl.style.borderColor="red";
        unameEl.setCustomValidity('Should be minimum 8 characters and maximum of 16 characters');
    }else if(!regex.test(unameEl.value)){
        unameEl.style.borderColor="red";
        unameEl.setCustomValidity('Should contain Atleast 1 uppercase letter, Atleast 1 lower case letter, Atleast 1 Number, Atleast 1 special character from the list(!@#$%^&*_<>?|), Minimum 8 characters length');
    } else {
        unameEl.style.borderColor="green";
        unameEl.setCustomValidity('');
        r3=true;
    }
    return r3;
}
function emailInValid(){
    var b=false;
    var emailreg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
    var emailEl = document.getElementById("email");
    if(emailEl.value==null || emailEl.value==""){
        emailEl.style.borderColor="red";
        emailEl.setCustomValidity('Email Can\'t be Empty');
    }else if(!emailreg.test(emailEl.value)){
        emailEl.style.borderColor="red";
        emailEl.setCustomValidity('Enter Valid Mail ID');
    }else{
        emailEl.style.borderColor="green";
        b=true;
        emailEl.setCustomValidity('');
    }
    return b;
}
function numberValidity() {
    var r4=false;
    var numReg= /^\d{10}$/;
    var numberEl=document.getElementById("mobile");
    if(numberEl.value==null || numberEl.value==""){
        numberEl.style.borderColor="red";
        numberEl.setCustomValidity('Mobile Number Can\'t be Empty');
    } else if((!numReg.test(numberEl.value)) || numberEl.value.length!=10){
        numberEl.style.borderColor="red";
        numberEl.setCustomValidity('Enter Mobile Number of exact 10 numerical digits only');
    } else{
        numberEl.style.borderColor="green";
        numberEl.setCustomValidity('');
        r4=true;
    }
    return r4;
}
function pcodeValidity() {
    var r5=false;
    var codeReg= /^\d{6}$/;
    var pcodeEl=document.getElementById("pcode");
    if(pcodeEl.value==null || pcodeEl.value==""){
        pcodeEl.style.borderColor="red";
        pcodeEl.setCustomValidity('POstal Code Can\'t be Empty');
    } else if((!codeReg.test(pcodeEl.value)) || pcodeEl.value.length!=6){
        pcodeEl.style.borderColor="red";
        pcodeEl.setCustomValidity('Enter Postal Code of exact 6 Numerical digits only');
    } else{
        pcodeEl.style.borderColor="green";
        pcodeEl.setCustomValidity('');
        r5=true;
    }
    return r5;
}
function Submitvalidate(e){
    if (fnamevalidity () && lnamevalidity() && unamevalidity() && emailInValid() && numberValidity() && pcodeValidity()){
        alert("Sucessfull Validation")
    }
    else{
       // document.getElementById("header").innerHTML="Error!";
        e.preventDefault();
    }
}
