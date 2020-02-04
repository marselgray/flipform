
// flipping
const btn = document.querySelector('.front--btn');
const flip = document.querySelector('.cont--flip');

btn.addEventListener('click', () => {
	flip.classList.add('flipped');
});


// validation
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs(){
	console.log('i was checked')
}