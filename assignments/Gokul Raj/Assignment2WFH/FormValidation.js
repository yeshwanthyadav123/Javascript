    function validation() {
           var mob, text;
       mob = document.getElementById("mnumber").value;
       var pin = document.getElementById("pinnumber").value;
       var mail = document.getElementById("eemail").value;
       var user = document.getElementById("uname").value;
       var last=  document.getElementById("lname").value;
       var first =document.getElementById("fname").value;
       var x = document.getElementById("fname").pattern;
       var y = document.getElementById("lname").pattern;
       var p = document.getElementById("pinnumber").pattern;


 
  
  if(mob.match(document.getElementById("mnumber").pattern)) 
  {
             text=" "
             document.getElementById("demo").innerHTML=text;
             document.getElementById("mobdisplay").innerHTML="Mobile No: " +mob;
      
     
  } else
  {
       text = "please enter a valid 10 digit phone number";
       document.getElementById("demo").innerHTML = text;
     
  }
         
        
  if(mail.match(document.getElementById("eemail").pattern))
  {
            text=" "
            document.getElementById("eeemail").innerHTML=text;
            document.getElementById("mdisplay").innerHTML="Email Id: " +mail;
     
  } else 
  {
    text = "please enter valid email address ";
       document.getElementById("eeemail").innerHTML = text;
     
  }
  
 if(user.match(document.getElementById("uname").pattern))
 {
     text=" "
     document.getElementById("username").innerHTML=text;
     document.getElementById("udisplay").innerHTML="User Id: " +user;
            
}else
{
    text="please enter one upper,lower,numeric and symbol with min 8 characters";
    document.getElementById("username").innerHTML=text;
}
         

//if(last.match(document.getElementById("lname").pattern)){
if(lname.value.match(y) && last.length<=8)
{
     text=" "
     document.getElementById("lastname").innerHTML=text;
     document.getElementById("gdisplay").innerHTML="Generating Id Card..";
     //document.getElementById("ldisplay").innerHTML="Last Name: " +last;
     setTimeout(() => {  document.getElementById("ldisplay").innerHTML="Full Name: " +first +" " +last; }, 2000);
} else
{
     text="should atleast contain minimum(2-8) letters..";
     document.getElementById("lastname").innerHTML=text;
}
        
        
// if(first.match(document.getElementById("fname").pattern) && (first.length>8) ){
if(fname.value.match(x) && first.length==6)
{
      text=" "
      document.getElementById("firstname").innerHTML=text;
} else
{
       text="should exactly contain 6 letters..";
       document.getElementById("firstname").innerHTML=text;
}
            
             
             
//if(pin.match(document.getElementById("pinnumber").pattern)) {
if(pinnumber.value.match(p) && pin.length==6)
{
            text=" "
             document.getElementById("pin").innerHTML=text;
            document.getElementById("pdisplay").innerHTML="Pin Number: " +pin;
            setTimeout(() => {  document.getElementById("sdisplay").innerHTML="Join The Club..! " ; }, 2000);
            //document.getElementById("sdisplay").innerHTML="Join The Club..! " ;
            setTimeout(() => {  document.getElementById("waitdisplay").innerHTML="............................. " ; }, 10000);
} else 
{
       text = "please enter 6 digits ";
       document.getElementById("pin").innerHTML = text;
        
}
         
         
}
            
            
             
     
         
         
         
        
     
 
        

       
     
   
        
         
 
                 

