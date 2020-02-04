
const btn = document.querySelector('.front--btn');
const flip = document.querySelector('.cont--flip');

btn.addEventListener('click', function(){
	flip.classList.add('flipped');
})