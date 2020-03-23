
        function formValidation()
{
var fname=document.registration.firstname;
var lname = document.registration.lastname;
var uname = document.registration.username;
    var uemail = document.registration.email;
    var mnumber=document.registration.mobilenumber;
var uzip = document.registration.zip;

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
if(zipvalid(uzip))
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
else
{
alert('Firstname must have a only alphabets and maximum of 6 chars only');
uname.focus();
return false;
}
}
        
        
        function allLetter2(lname)
{ 
var letters = /^[A-Za-z]+$/;
if(lname.value.match(letters))
{
return true;
}
else
{
alert('Lastname must have alphabet characters only');
uname.focus();
return false;
}
}
        
        
        function allLetter3(uname)
{ 
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
        
        
        
        function zipvalid(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
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
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
  