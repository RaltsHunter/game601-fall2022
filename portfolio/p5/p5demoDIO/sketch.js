let magic = [];


function preload() {
	dio = loadImage("DIO.JPG");
	menacing = loadImage("Menacing.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	menacing.resize(100, 100);

	for (let i = 0; i < 80; i = i + 1) {
		let x = random(width/2-550, width/2+550);
		let y = random(0, height);
		magic[i] = menace(x, y);
	}

}

function draw() {
	fill(0, 0, 0);
	rect(0, 0, width, height);
	imageMode(CENTER);
	image(dio, width / 2, height / 2);
	for (let i = 0; i < 80; i = i + 1) {
		makeMagic(magic[i]);
	}
}

function menace(x, y) {
	let symbol = {};
	symbol.x = x;
	symbol.y = y;
	symbol.velY = random(-2.5, 2.5);
	symbol.size = random(40, 80);
	return symbol;
}

function makeMagic(m) {
	m.y = m.y + m.velY;
	if (m.y > height || m.y < 0) {
		m.velY = m.velY * -1.1;
		m.size = m.size * 1.1;
	}
	image(menacing, m.x, m.y, m.size, m.size);
}