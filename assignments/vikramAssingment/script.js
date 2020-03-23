
    function formValidation()
        {
            var fname=document.registration.firstname;
            var lname=document.registration.lasttname;
            var uname=document.registration.username;
            var uemail=document.registration.email;
            var mnumber=document.registration.mobilenumber;
            var postalcode=document.registraton.code;
            
            if(allLetter1(fname))
                {
                    if(allLetter2(lname))
                        {
                            if(allLetter3(uname))
                                {
                                    if(ValidateEmail(uemail))
                                {
                                    if(phonenumber(mnumber))
                                    {
                                         if(zipvalid(postalcode))
                                         {
                                            
                                        }
                                    }
                                       
                                }
                        }
                }
        }
            return false;
        }
        function allLetter1(fname)
        {
            var letters = /^[A-Za-z]+$/;
            if(fname.value.match(letters))
                {
                    return true;
                }
            else{
                alert('FirstName must have a only alphabets & maximum 6 characters only');
                fname.focus();
                return false;
            }
        }
        function allletter2(lname)
        {
            var letters=/^[A-Za-z]+$/;
            if(lname.value.match(letters))
                {
                    return true;
                }
            else{
                alert('LastName must have a only alphabets & maximum 6 characters only');
                lname.focus();
                return false;
            }
        }
        function allletter3(uname)
        {
            var letters=/^[A-Za-z]+$/;
            var letters = /^[A-Za-z]+$/;
           if(uname.value.match(letters))
           {
             return true;
           }
    else
       {
          alert('Username must have alphabet characters only');
          uname.focus();
           return false;
      } 
 }       
        function zipvalid(postalcode)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
postalcode.focus();
return false;
}
}
       
        function phonenumber(mnumber)
{
var phoneno = /^\d{10}$/;
if(inputtxt.value.match(phoneno))
{
return true;
}
else
{
alert("Enter a valid mobile number");
mnumber.focus();
return false;
}
}   
     function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
}