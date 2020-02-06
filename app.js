
// flipping
const btn = document.querySelector('.front--btn');
const flip = document.querySelector('.cont--flip');

btn.addEventListener('click', () => {
	flip.classList.add('flipped');
});


// validation
const form = document.querySelector('.form');
const input = document.getElementsByClassName('form--box__required');
const badges = document.getElementsByClassName('form--box__badge');


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs(){
	checkFirstName();
	checkLastName();
	checkPhone();
	checkEmail();
}

// use to validate names / text options
function alphanumeric(data) { 
	let letters = /^[0-9a-zA-Z]+$/;
	if (letters.test(data)) {
		return true;
	} else{
		return false;
	}
}

function checkFirstName(){
	let first = document.getElementById('firstname');
	if (first.value === ''){
		error(first, 'Enter a First Name');
	} else{
		alphanumeric(first.value);
	}
}

function checkLastName(){
	let last = document.getElementById('lastname');
	if (last.value === ''){
		error(last, 'Enter a Last Name');
	} else{
		alphanumeric(last.value);
	}
}

function checkPhone(){
	let tel = document.getElementById('tel');
	let testData = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
	if (tel.value === ''){
		error(tel, 'Enter a Phone Number');
	} else{
		if(testData.test(tel.value)) {
			return true;
		} else{
			return false;
		}
	}
}

function checkEmail(){
	let email = document.getElementById('email');
	let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value === ''){
		error(email, 'Enter an Email Address');
	} else{
		if(testData.test(email.value)) {
			return true;
		} else{
			return false;
		}
	}
}



// returns the error for that element and changes the placeholder text
function error(element, text){
	element.nextElementSibling.style.visibility = 'visible';
	element.placeholder = text;
}