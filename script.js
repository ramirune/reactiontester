const shape = document.getElementById('shape');
const time = document.getElementById('time');

let start = new Date().getTime();

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function makeShapeAppear() {
	let top = Math.random() * 400;
	let left = Math.random() * 400;
	let width = Math.random() * 200 + 100;

	if (Math.random() > 0.5) {
		shape.style.borderRadius = '50%';
	} else {
		shape.style.borderRadius = '0';
	}

	shape.style.top = top + 'px';
	shape.style.left = left + 'px';
	shape.style.width = width + 'px';
	shape.style.height = width + 'px';
	shape.style.backgroundColor = getRandomColor();

	shape.style.display = 'block';
	start = new Date().getTime();
	time.innerHTML = '';
}

function appearAfterDelay() {
	setTimeout(makeShapeAppear, Math.random() + 2000);
}

appearAfterDelay();

shape.onclick = () => {
	let end = new Date().getTime();
	let timeTaken = (end - start) / 2000;
	shape.style.display = 'none';

	time.innerHTML = timeTaken + 's';

	appearAfterDelay();
};
