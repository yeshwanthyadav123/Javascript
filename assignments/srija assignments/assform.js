function fnamevalidity()
{
  var x = document.getElementById("fname").pattern;
  var z= document.getElementById("fname");
    if(fname.value.match(x))
    {
     z.style.borderColor = "green";
    }
    else
    {
     z.style.borderColor = "red";
    }
}
function lnamevalidity()
{
  var y = document.getElementById("lname").pattern;
  var z= document.getElementById("lname");
  if(lname.value.match(y))
  {
    z.style.borderColor = "green";
  }
  else
  {
    z.style.borderColor = "red";
  }
}
function unamevalidity()
{
  var p = document.getElementById("uname").pattern;
  var z= document.getElementById("uname");
  if(uname.value.match(p))
    {
      z.style.borderColor = "green";
    }
    else
    {
      z.style.borderColor = "red";
    }
}
function mailvalidity()
{
  var a= document.getElementById("mail").pattern;
  var z= document.getElementById("mail");
  if(mail.value.match(a))
    {
      z.style.borderColor = "green";
    }
    else
    {
     z.style.borderColor = "red";
   }
}

function phonenovalidity()
{
  var b = document.getElementById("phoneno").pattern;
  var z= document.getElementById("phoneno");
  if(phoneno.value.match(b))
  {
    z.style.borderColor = "green";
  }
   else
  {
    z.style.borderColor = "red";
  }
}
function postalvalidity()
{
 var c = document.getElementById("postal").pattern;
 var z= document.getElementById("postal");
  if(postal.value.match(c))
   {
    z.style.borderColor = "green";
   }
  else
  {
   z.style.borderColor = "red";
  }
}

function submitval(e)
{
  if(fnamevalidity()&&lnamevalidity()&&unamevalidity()&&mailvalidity()&&phonenovalidity()&&
  postalvalidity())
  {
    alert("sucessfull");
  }
  else 
  {
    e.preventDefault();
  }
}
