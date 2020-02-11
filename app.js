
// flipping
const btn = document.querySelector('.front--btn');
const flip = document.querySelector('.cont--flip');
const close = document.querySelector('.back--close');

btn.addEventListener('click', () => {
	flip.classList.add('flipped');
});

close.addEventListener('click', () => {
	flip.classList.remove('flipped');
});


// validation
const form = document.querySelector('.form');
const submit = document.querySelector('.btn--flex');

submit.addEventListener('click', e => {
	let hidden = document.getElementById('hidden');

	// checks if a bot is filling out form and prevents submission
	if (hidden.value != ''){
		alert('YOU ARE A BOT!');
	} else{
		e.preventDefault();
		validateInputs();
		if ( checkFirstName() && checkLastName() && checkPhone() && checkEmail() && checkMessage() ){
			form.submit();
		}
	}
});

// runs input functions
function validateInputs(){
	checkFirstName();
	checkLastName();
	checkPhone();
	checkEmail();
	checkMessage();
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
		return true;
	}
}

function checkLastName(){
	let last = document.getElementById('lastname');
	if (last.value === ''){
		error(last, 'Enter a Last Name');
	} else{
		alphanumeric(last.value);
		return true;
	}
}

function checkPhone(){
	let tel = document.getElementById('tel');
	let testData = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
	if (tel.value === ''){
		error(tel, 'Enter Your Number');
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
		error(email, 'Enter an Email');
	} else{
		if(testData.test(email.value)) {
			return true;
		} else{
			return false;
		}
	}
}

function checkMessage(){
	let message = document.getElementById('message');
	if (message.value === ''){
		message.classList.add('red');
		message.placeholder = `Why Don't You Want to Write Me A Message?`;
	} else{
		return true;
	}

}

// returns the error for that element and changes the placeholder text
function error(element, text){
	element.nextElementSibling.style.visibility = 'visible';
	element.placeholder = text;
	element.classList.add('red');
}
