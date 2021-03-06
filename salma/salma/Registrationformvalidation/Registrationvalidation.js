
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const username1=document.getElementById('username1');
const email = document.getElementById('email');
const number=document.getElementById('number');
const postalcode = document.getElementById('postalcode');

//firstname function
function firstfunc(e,t)
{
	/*var bool=true;*/
	var firstnameValue = firstname.value.trim();
	if(firstnameValue === '' || firstnameValue === null) {
		setErrorFor(firstname, 'firstname cannot be blank');
	} 
	else if(firstnameValue.length> 6 )
	{
	setErrorFor(firstname, 'enter firstname with max  6 characters');
		
		
	}
	else if(firstnameValue.match(/^[A-Za-z]+$/)){
	setSuccessFor(firstname);
	
	}
	else{
	setErrorFor(firstname, 'firstname should only have alphabets');
	
				}
	
                if (window.event)
					{
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
				{
				
                    return true;
				}
				 
                else {
					
				return false;
				
				}        
	
}
//lastname function
function lasttnamefunc(e,t)
{
	var lastnameValue=lastname.value.trim();
	if(lastnameValue === '' || lastnameValue === null) {
		setErrorFor(lastname, 'lastname cannot be blank');
	} else if(lastnameValue.length> 8  )
	{
	setErrorFor(lastname, 'lastname should have maximum 8 chars ');
		
	}
	else if(lastnameValue.length <6)
	{
		setErrorFor(lastname, 'lastname should have minimum 6 chars ');
	}
	else if(lastnameValue.match(/^[A-Za-z]+$/)){
	setSuccessFor(lastname);
	
	}
	
	else{
	setErrorFor(lastname, 'lastname should only have alphabets');
	}
	
	if (window.event)
					{
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
				{
		
                    return true;
				}
                else {
				return false;
				
				}   
}
//username function
function usernamefunc()
{
	var username1Value=username1.value.trim();
	if(username1Value === '' ) {
		setErrorFor(username1, 'Username cannot be blank');
	} 
	else if(username1Value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){

	
	setSuccessFor(username1);
	
	}
	
	else{
	setErrorFor(username1, 'must one alphabet,numeric,special chars');
	}
    
}

//email function
function emailfunc()
{
	var emailValue = email.value.trim();
if(emailValue === ''|| emailValue == null) {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
	    
		setErrorFor(email, 'Not a valid email');
		
	} else {
		setSuccessFor(email);
	
	}
		
	
}
//phone number function
function numberfunc(evt)
{
	var numberValue=number.value.trim();
	if(numberValue.match(/^\d{10}$/)){
	
	setSuccessFor(number);
	
	}
	
	else{
	setErrorFor(number, 'enter only numbers');
	
	}
	evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
	
	
}
//postal code function
function postalcodefunc(evt)
{
	var postalcodeValue = postalcode.value.trim();
	if(postalcodeValue.match(/^\d{8}$/)){
	setSuccessFor(postalcode);
	
	}
	
	else{
	setErrorFor(postalcode, 'invalid postalcode');
	
	}
	evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
//checkinput button function
function checkInputs() {
	// trim to remove the whitespaces
	var firstnameValue = firstname.value.trim();
	var lastnameValue=lastname.value.trim();
	var username1Value=username1.value.trim();
	var emailValue = email.value.trim();
	var numberValue=number.value.trim();
	var postalcodeValue = postalcode.value.trim();
	
	if(firstnameValue === '' || firstnameValue === null) {
		setErrorFor(firstname, 'firstname cannot be blank');
	} else if(firstnameValue.length> 6 )
	{
	setErrorFor(firstname, 'enter firstname with max  6 characters');
		
		
	}
	else if(firstnameValue.match(/^[A-Za-z]+$/)){
	
	setSuccessFor(firstname);
	
	}
	
	else{
	setErrorFor(firstname, 'firstname should only have alphabets');
	
	}
	
	//last name
	if(lastnameValue === '' || lastnameValue === null) {
		setErrorFor(lastname, 'lastname cannot be blank');
	} else if(lastnameValue.length> 8  )
	{
	setErrorFor(lastname, 'lastname should have maximum 8 characters ');
		
		
	}
	else if( lastnameValue.length< 6)
	{
	setErrorFor(lastname, 'lastname should have minimum 6 characters ');	
	}
	else if(lastnameValue.match(/^[A-Za-z]+$/)){
	
	setSuccessFor(lastname);
	
	}
	
	else{
	setErrorFor(lastname, 'lastname should only have alphabets');
	
	}
	
	
	//User name
 var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}/;
	if(username1Value === '' ) {
		setErrorFor(username1, 'Username cannot be blank');
	} 
	
	
	
	
	
	
	if(emailValue === ''|| emailValue === null) {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
	   
		setErrorFor(email, 'Not a valid email');
		
	} else {
		setSuccessFor(email);
		
	}
	
	
	
	 if(numberValue.match(/^\d{10}$/)){

	setSuccessFor(number);
	
	}
	
	else{
	setErrorFor(number, 'Username should only have alphabets');
	
	}
	
	//postal code
	if(postalcodeValue === ''|| postalcodeValue === null) {
		setErrorFor(postalcode, 'enter valid postalcode');
	}
	else if(postalcodeValue.match(/^\d{10}$/)){
	setSuccessFor(postalcode);
	
	}
	
	else{
	
	setSuccessFor(username);
	}
	
	
}


function setErrorFor(input, message) {
	// selects <html> element
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^\S+@\S+\.\S+$/.test(email);

}

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
