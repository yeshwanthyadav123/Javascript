	function validation()
            {
            
            var first=document.getElementById('first').value;
             var last=document.getElementById('last').value;
                        
			var user = document.getElementById('user').value;
			var usernamepattern=/^[a-z]{3,10}$/;
			
			
		
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;
            var postal = document.getElementById('postal').value;
			var postalnamepattern=/^[0-9]{5}(?:-[0-9]{4})?$/;



            
            if(first == "")
                {
                    document.getElementById('firstname').innerHTML="Please fill the first name";
                    return false;
                }
            if((first.lenght>6))
                {
                    document.getElementById('firstname').innerHTML =" firstname should be less than 6 character ";
				return false;	
			}
			
		
			if(postalnamepattern.test(postal))
			{
			 document.getElementById('postalcode').innerHTML =" ";
			 }
			 else{
			 document.getElementById('postalcode').innerHTML =" ** please enter valid postal code which consits of only 6 numbers";
                    return false;
					}
                
            
            
        	if((last.length < 2) || (last.length > 8)) 
                {
				document.getElementById('lastname').innerHTML ="lastname le must be between 2 and 8";
				return false;	
                }
            
            
            if(!isNaN(last))
            {
				document.getElementById('lastname').innerHTML =" only characters are allowed";
				return false;
			}



	
			if(usernamepattern.test(user))
			{
			  document.getElementById('username').innerHTML =" ";
			}
			else{
			  document.getElementById('username').innerHTML =" ** please enter valid username that consists atleast one digit,one lowercase and one uppercase and also special character";
                    return false;
			   }
			




			if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
				return false;
			}
			if(isNaN(mobileNumber)){
				document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
				return false;
			}
			if(mobileNumber.length!=10){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
				return false;
			}



			if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
				return false;
			}
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Invalid Position";
				return false;
			}
		
		}
