//Storing the values of form elements
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const username=document.getElementById('username');
const email = document.getElementById('email');
const mobilenumber=document.getElementById('mobilenumber');
const postalcode = document.getElementById('postalcode');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});
//defining a function to check the input values
function checkInputs() {
	
	var firstnameValue = firstname.value.trim();
	var lastnameValue=lastname.value.trim();
	var usernameValue=username.value.trim();
	var emailValue = email.value.trim();
	var mobilenumberValue=mobilenumber.value.trim();
	var postalcodeValue = postalcode.value.trim();
    
    //first name validation
	
	if(firstnameValue === '' || firstnameValue == null) {
		setErrorFor(firstname, 'First Name cannot be empty');
	} else if(firstnameValue.length> 6 )
	{
	setErrorFor(firstname, 'Do not enter more than 6 characters');
	}
	else if(firstnameValue.match(/^[A-Za-z]+$/)){
	setSuccessFor(firstname);
	}
	else{
	setErrorFor(firstname, 'Enter only characters');
	}
	
    //last name validation
    
	if(lastnameValue === '' || lastnameValue == null) {
		setErrorFor(lastname, 'LastName cannot be empty');
	} else if(lastnameValue.length> 6 )
	{
	setErrorFor(lastname, 'Do not enter more than 6 characters');
	}
	else if(lastnameValue.match(/^[A-Za-z]+$/)){
	setSuccessFor(lastname);
	}
	else{
	setErrorFor(lastname, 'Enter only characters');
	}
	
	//User name validation
	
	if(usernameValue === '' ) {
		setErrorFor(username, 'Username cannot be empty');
	} 
	else if(usernameValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/))
	{
	setSuccessFor(username);
	}
	else{
	setErrorFor(username, 'It must contain one alphabet,numeric,special chars');
    }
	
	//email  validation

	if(emailValue === ''|| emailValue === null) {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
	    setErrorFor(email, 'It is not a valid email');
		
	} else {
		setSuccessFor(email);
	}
	
	//mobile number validation

    if(mobilenumberValue === '' || mobilenumberValue == null) 
    {
        setErrorFor(mobilenumber, 'Mobile Number cannot be empty');
    }
	 else if(mobilenumberValue.match(/^\d{10}$/)){
	setSuccessFor(mobilenumber);
	}
	else{
	setErrorFor(mobilenumber, 'It is Not a valid Number');
    }
    
	//postal code validation
	
    if(postalcodeValue === '' || postalcodeValue == null) 
    {
        setErrorFor(postalcode, 'postal code cannot be empty');
    }
	else if(postalcodeValue.match(/^\d{8}$/)){
	setSuccessFor(postalcode);
	}
	else{
	setErrorFor(postalcode, 'Enter only 8 digits');
	}
	
	
}

//to print the error messages

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// This function is called in email validation
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


