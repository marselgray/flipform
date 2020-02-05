
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
	console.log('check inputs');
	checkFirstName();
}

function checkFirstName(){
	let first = document.getElementById('firstname');
	console.log(first.value)
	if (first.value === ''){
		console.log('empty')

	} else{
		console.log('not empty')

	}
}


