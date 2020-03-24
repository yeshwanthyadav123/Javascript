function validate(){
  var firstname = document.getElementById("firstname").value;
  var lastname= document.getElementById("lastname").value;
    var username=document.getElementById("username").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var postalcode = document.getElementById("postalcode").value;
  var error_message = document.getElementById("error_message");
    
    
    var usernamepattern=/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,10}$/;
    
  var emailpattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
      var postalcodepattern= /[0-9]{6}|[0-9]{3}\s[0-9]{3}/;
      
      
  error_message.style.padding = "10px";
  
  var text;
    
  if(firstname== ""){
    text = "Please Entery valid Name cant be empty";
    error_message.innerHTML = text;
    return false;
  }
    if(firstname.length<6){
       text = "Name should not be less than 6 characters";
    error_message.innerHTML = text;
    return false;
  }
    
    if(!isNaN(firstname))
      {
          text = "Name should not be digits";
    error_message.innerHTML = text;
    return false;
      }
    
    

     if(lastname=="")
        {
            text = "lastname should not empty";
    error_message.innerHTML = text;
    return false;
        }
    
     if(lastname.length<2){
       text = "Name should not be less than 2 characters";
    error_message.innerHTML = text;
    return false;
     }
     if(lastname.length>8){
       text = "Name should not be greater than 6 characters";
    error_message.innerHTML = text;
    return false;
     }
    
    
    if(!usernamepattern.test(username))
        {
             text = "username should consits of atleast one special character,one number,one upppercase and lowercase";
    error_message.innerHTML = text;
    return false
        }
    
    
    
    
      if(phone=="")
        {
             text = "number cannot be empty";
    error_message.innerHTML = text;
    return false;
        }
    
   if(isNaN(phone)) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
   }
       if(phone.length>10)
           {
                text = "Number should consists of 10 digits";
    error_message.innerHTML = text;
    return false;
           }
    
    
    
     
    if(email=="")
        {
            text = "Email not empty";
    error_message.innerHTML = text;
    return false;
        }
    if(!emailpattern.test(email))
        {
            text = "Email should is not valid";
    error_message.innerHTML = text;
    return false;
        }
    
    
   
     if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
    
    if(!postalcodepattern.test(postalcode))
    {
         text = "postalcode is invalid";
    error_message.innerHTML = text;
    return false;
        
    }
   
    
    
    
  }
    
    
    
    
    
    
    
    
    
    