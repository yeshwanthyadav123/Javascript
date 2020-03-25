
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

function Usernamevalidity() {
   var x1= document.getElementById("psw").pattern;
    if(psw.value.match(x1))
      {
      document.getElementById("psw").style.borderColor = "blue";
      }
      else
      {
	  //alert("lname ");
      document.getElementById("psw").style.borderColor = "black";
      }


}
function fnamevalidity() {
   var aa= document.getElementById("fname").pattern;
    if(fname.value.match(aa))
      {
      document.getElementById("fname").style.borderColor = "blue";
      }
      else
      {
	  //alert("lname ");
      document.getElementById("fname").style.borderColor = "black";
      }


}
function lnamevalidity() {

	var y = document.getElementById("lname").pattern;
    if(lname.value.match(y))
      {
      document.getElementById("lname").style.borderColor = "blue";
      }
      else
      {
	  //alert("lname ");
      document.getElementById("lname").style.borderColor = "black";
      }


}
function phonevalidity() {
   var x2= document.getElementById("phone").pattern;
    if(phone.value.match(x2))
      {
      document.getElementById("phone").style.borderColor = "blue";
      }
      else
      {
	  //alert("lname ");
      document.getElementById("phone").style.borderColor = "black";
      }


}
function postalcodevalidity() {

	var y = document.getElementById("phone1").pattern;
    if(phone1.value.match(y))
      {
      document.getElementById("phone1").style.borderColor = "blue";
      }
      else
      {
	  //alert("lname ");
      document.getElementById("phone1").style.borderColor = "black";
      }


}

function myFunction() {
  var x = document.getElementById("myText1").value;
  if (x.match(/^([a-z]{5,7})$/)) 
{
 document.getElementById("demo1").innerHTML = x;
   
}
else
{
alert("enter last name valid value min 5 max 7");
}
	
 
}
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {

  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
