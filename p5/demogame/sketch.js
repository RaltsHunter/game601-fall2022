let color;
let posX = 200;
let posY = 250;
let velX = 6;
let velY = -5;
let grav = .5;
let notClicked = true;
let clicked = false;
let intro = 'Click to release your brain';
let introCon = 'And send it on a psychedelic trip!';

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	colorMode(HSB);
	color = random(0, 255);
}

function mouseClicked() {
	notClicked = false;
	clicked = true;
	return false;
}

function draw() {

	//Start backdrop

	color = color + 1;
	if (color > 360) {
		color = 0;
	}

	background(0, 0, 0);

	//Intro Text

	fill(0, 0, 100);
	textSize(50);
	text(intro, 300, 300);
	text(introCon, 300, 360);

	//Stationary Ball at start, and rainbow backdrop

	if (notClicked == true) {
		fill(25, 19, 85);
		ellipse(200, 250, 150, 150);
	} else {
		background(color, 100, 90);
	}

	if (clicked == true) {
		velY = velY + grav;
		posX = posX + velX;
		posY = posY + velY;

		//Stop the ball from going out of bounds

		if (posX > width) {
			velX = velX * -1;
		}

		if (posX < 0) {
			velX = velX * -1;
		}

		if (posY > height) {
			velY = velY * -1;
		}

		if (posY < 0) {
			velY = velY * -1;
		}

		//Ball motion

		fill(25, 19, 85);
		ellipse(posX + velX, posY + velY, 150, 150);
	}

}