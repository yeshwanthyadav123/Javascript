    function formValidation()
        {
            var fname=document.registration.firstname;
            var lname=document.registration.lasttname;
            var uname=document.registration.username;
            var uemail=document.registration.email;
            var mnumber=document.registration.mobilenumber;
            var postalcode=document.registraton.code;
    
        var name = /^[a-zA-Z]*$/;                
        if(fname.value.match(name) {
  
        } else {
             printError( "Please enter a valid name,donot use Numbers");
        }
    
        var lnamee = /[a-zA-Z]+$/;                
        if(lname.value.match(lnamee){
          
        } else {
           printError( "Please enter a valid User name");
        }
    
        var username=/(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*(),.?":{}|<>]).{8,16}/;
          if(uname.value.match(username) {
         
        } else {
          printError( "Please enter a valid User name");
        }
    
        var usermail = /^\S+@\S+\.\S+$/;
          if(umail.value.match(usermail) {
           
        } else{
            printError("emailErr", "Please enter a valid email address");
        }

        var number = /^[1-9]\d{9}$/;
          if(mnumber.value.match(number) {
            
        } else{
          printError("mobileErr", "Please enter a valid 10 digit mobile number,donot use Alphabets");
        }
		
        var code = /[0-9]{8}$/;
       if(postalcode.value.match(code) {
         
        } else{
              printError("pcodeErr", "Please enter a valid 8 digit postalcode");
        }
		
                var dataPreview = "You've entered the following details: \n" +
                          "First Name: " + fname + "\n" +
                          "Last Name: " + lname + "\n" +
                          "User Name:" +uname+"\n"+
                          "Email Address: " + uemail + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Postal Code: " + postalcode + "\n" 

          }
        alert(dataPreview);
    
};