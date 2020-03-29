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
             document.getElementById("mnumber").style.borderColor = "yellowgreen";
             document.getElementById("mobdisplay").innerHTML="Mobile No: " +mob;
      
     
  } else
  {
       text = "please enter a valid 10 digit phone number";
       document.getElementById("demo").innerHTML = text;
       document.getElementById("mnumber").style.borderColor = "red";
     
  }
         
        
  if(mail.match(document.getElementById("eemail").pattern))
  {
            text=" "
            document.getElementById("eeemail").innerHTML=text;
       document.getElementById("uname").style.borderColor = "yellowgreen";
            document.getElementById("mdisplay").innerHTML="Email Id: " +mail;
     
  } else 
  {
    text = "please enter valid email address ";
       document.getElementById("eeemail").innerHTML = text;
       document.getElementById("eemail").style.borderColor = "red";
     
  }
  
 if(user.match(document.getElementById("uname").pattern))
 {
     text=" "
     document.getElementById("username").innerHTML=text;
      document.getElementById("uname").style.borderColor = "yellowgreen";
     document.getElementById("udisplay").innerHTML="User Id: " +user;
            
}else
{
    text="please enter one upper,lower,numeric and symbol with min 8 characters";
    document.getElementById("username").innerHTML=text;
     document.getElementById("uname").style.borderColor = "red";
}
         

//if(last.match(document.getElementById("lname").pattern)){
if(lname.value.match(y) && last.length<=8)
{
     text=" "
     document.getElementById("lastname").innerHTML=text;
     document.getElementById("lname").style.borderColor = "yellowgreen";
     document.getElementById("gdisplay").innerHTML="Generating Id Card..";
     //document.getElementById("ldisplay").innerHTML="Last Name: " +last;
     setTimeout(() => {  document.getElementById("ldisplay").innerHTML="Full Name: " +first +" " +last; }, 2000);
} else
{
     text="should atleast contain minimum(2-8) letters..";
     document.getElementById("lastname").innerHTML=text;
     document.getElementById("lname").style.borderColor = "red";
}
        
        
// if(first.match(document.getElementById("fname").pattern) && (first.length>8) ){
if(fname.value.match(x) && first.length==6)
{
      text=" "
      document.getElementById("firstname").innerHTML=text;
        document.getElementById("fname").style.borderColor = "yellowgreen";
    
    
} else
{
       text="should exactly contain 6 letters..";
       document.getElementById("firstname").innerHTML=text;
        document.getElementById("fname").style.borderColor = "red";
}
            
             
             
//if(pin.match(document.getElementById("pinnumber").pattern)) {
if(pinnumber.value.match(p) && pin.length==6)
{
            text=" "
             document.getElementById("pin").innerHTML=text;
            document.getElementById("pdisplay").innerHTML="Pin Number: " +pin;
             document.getElementById("pinnumber").style.borderColor = "yellowgreen";
            setTimeout(() => {  document.getElementById("sdisplay").innerHTML="Join The Club..! " ; }, 2000);
            //document.getElementById("sdisplay").innerHTML="Join The Club..! " ;
            setTimeout(() => {  document.getElementById("waitdisplay").innerHTML="............................. " ; }, 10000);
} else 
{
       text = "please enter 6 digits ";
       document.getElementById("pin").innerHTML = text;
         document.getElementById("pinnumber").style.borderColor = "red";
        
}
         
         
}
            
            
             
     
         
         
         
        
     
 
        

       
     
   
        
         
 
                 

