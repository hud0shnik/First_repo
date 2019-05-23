const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	let card = cards[i];
	card.addEventListener('mousemove', startRotate );
	card.addEventListener('mouseout', stopRotate );
}

function startRotate(event) {
let cardItem =  this.querySelector('.card-item');
let halfH = cardItem.offsetHeight / 2;
let halfW = cardItem.offsetWidth / 2;
cardItem.style.transform = 'rotateX('+ - (event.offsetY - halfH) / 5 +'deg) rotateY(' + (event.offsetX - halfW) / 6 + 'deg)'
}
function stopRotate(event) {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';
}

 











 