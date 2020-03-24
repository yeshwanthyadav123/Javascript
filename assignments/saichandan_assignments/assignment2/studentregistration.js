//firstname validation
function studentRegistration()
{
    var text;
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var postalcode = document.getElementById('postalcode').value;
    //firstname validation
    if(firstname==" ")
        {
            text="firstname should not be empty";
        document.getElementById("firstnameerr").innerHTML=text;
            
        }
    else{
        var regex = /[a-zA-Z]+$/;                
        if(regex.test(firstname) === false) {
            text="firstname should not contain number";
            document.getElementById("firstnameerr").innerHTML=text;
        } else {
             document.getElementById("firstnameerr").innerHTML="";
           
        }
    }
    //lastname validation
    if(lastname == "") {
        document.getElementById("lastnameerr").innerHTML="lastname should not be empty";
    } else {
        var regex = /[a-zA-Z]+$/;                
        if(regex.test(lastname) === false) {
            document.getElementById("lastnameerr").innerHTML="lastname should not contain number";
        } else {
            document.getElementById("lastnameerr").innerHTML="";
        }
    }
    //username validation
    if(username == "") {
        document.getElementById("usernameerr").innerHTML="username should not be empty";
    } else {
        var regex=/(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*(),.?":{}|<>]).{8,16}/;
        if(regex.test(username) === false) {
             document.getElementById("usernameerr").innerHTML="please enter one upper, lower and numeric and symbol with min 8 characters";
        } else {
            document.getElementById("usernameerr").innerHTML="";
        }
    }
    //email validation
    if(email == "") {
                   document.getElementById("emailerr").innerHTML="enter email id";
    } else {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email) === false) {
                        document.getElementById("emailerr").innerHTML="enter valid email id";
        } else{
                        document.getElementById("emailerr").innerHTML="";
        }
    }
    //phone number validation
     if(phonenumber == "") {
        document.getElementById("phonenumbererr").innerHTML="Enter Mobile Number of exact 10 numerical digits only";
    } else {
        var regex = /^[0-9]{10}$/;
        if(regex.test(phonenumber) === false) {
           document.getElementById("phonenumbererr").innerHTML="Enter Mobile Number of exact 10 numerical digits only";
        } else{
           document.getElementById("phonenumbererr").innerHTML="";
    
        }
    }
    //postalcode
    
     if(postalcode == "") {
       document.getElementById("postalcodeerr").innerHTML="Enter Postal Code ";      
    } else {
        var regex = /[0-9]{6}$/;

        if(regex.test(postalcode) === false) {
            document.getElementById("postalcodeerr").innerHTML="Enter Postal Code of exact 6 Numerical digits only";      
        } else{
           document.getElementById("postalcodeerr").innerHTML="";      
        }
    }
   
    
    
}
function restrictAlphabets(e){
				var x=e.which||e.keycode;
				if((x>=48 && x<=57) || x==8 ||
					(x>=35 && x<=40)|| x==46)
					return true;
				else
					return false;
			}

/*function FirstName() {

    var ret=false;
    var firstnamereg=/^[0-9]+$/;
 
   if(firstname.value.match(firstnamereg))
    {

         document.getElementById("firstnamerr").innerHTML="username should not contain number";
        firstname.style.borderColor="red";
        ret=false;
        
    }
    else{
        firstname.style.borderColor="green";
        document.getElementById("firstnamerr").innerHTML=" ";
        ret= true;
    }
    return ret;
}
//lastname validation
function LastName(){
    
     var ret1=false;
  if(lastname.value.match(/^[0-9]+$/))
    {      
        document.getElementById("lastnameerr").innerHTML="lastname should not contain number";
       lastname.style.borderColor="red";
        ret1=false;
        
    }
    else{
       lastname.style.borderColor="green";
        document.getElementById("lastnameerr").innerHTML=" ";
        ret1= true;
    }
    return ret1;
    
    
}
//username validation
    function UserName(){
 
        var regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
        var ret2=false;
        if(regex.test(username.value===true)){
        username.style.borderColor="red";
            document.getElementById("usernameerr").innerHTML="please enter one upper and lower and numeric and symbol with min 8 charecters";
            ret2=false;
    }else{
        username.style.borderColor="green";
        document.getElementById("usernameerr").innerHTML="  ";
        ret2=true
    }
        return ret2;
        
        
    }
//phonenumber vaidation
    function PhoneNumber()
    {
        
         var numReg= /^[a-zA-z]+$/;
        var ret3=false;
        if(phonenumber.value.test(numReg)==false || phonenumber.value.length!=10){
     phonenumber.style.borderColor="red";
            document.getElementById("phonenumbererr").innerHTML="Enter Mobile Number of exact 10 numerical digits only";
    } else{
      phonenumber.style.borderColor="green";
document.getElementById("phonenumbererr").innerHTML="  ";
        ret3=true;
    }
    return ret3;
    }
//email validation
    function Email()
    {
     
       var ret4=false;
         var emailreg =  /^\S+@\S+\.\S+$/; 
        if(emailreg.test(email.value===true)){
       email.style.borderColor="red";
            document.getElementById("emailerr").innerHTML="enter valid email id";
           
            ret4=false;
        }
        else{
            email.style.borderColor="green";
            ret4=true;
        }

        return ret4;
    }
//postalcode validaation
    function PostalCode()
    {
       
     var ret5=false;
        var codeReg= /^\d{6}$/;
        if((!codeReg.test(postalcode)) || postalcode.value.length!=6){
        postalcode.style.borderColor="red";
        document.getElementById("postalcodeerr").innerHTML="Enter Postal Code of exact 6 Numerical digits only";      
    } else{
       postalcode.style.borderColor="green";
 document.getElementById("postalcodeerr").innerHTML=" ";   
        ret5=true;
    }
    return ret5;
    }
//submit
function Submit()
{
    
    if(UserName() && FirstName() && LastName() && PostalCode() && PhoneNumber() && Email())
        {
            alert("form validated successfully");
        }
    else{
        alert("there is still some errors");
    }
}*/