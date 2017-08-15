var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
	// ganti warna
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	// change colorDisplay sesuai picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "Ganti warna"

	messageDisplay.textContent = "";
	// change square colors
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// adding initial colors
	squares[i].style.backgroundColor = colors[i];

	// adding click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab and compare antara square yang di klik dengan color yang di pilih
		var clickedColor = this.style.backgroundColor;
//		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Wiih, bener..bener..bener. Lulus!"
			resetButton.textContent = "Yuk, coba lagi!"
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Eta terangkanlah... Salah!"
		}
	});
}

function changeColors(color) {
	// looping ke semua square
	for(var i = 0; i < squares.length; i++) {
		// ganti warnanya sesuai dengan pilihan yang benar
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// random number between 0 and 1 lalu di multiply sebanyak index length
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
}

function generateRandomColors(num) {
	// create array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++) {
		// menambahkan random colors ke array
		arr.push(randomColor())
	}

	return arr;
}

function randomColor() {
	// pick "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);

	// pick "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);

	// pick "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; // <- spasi after comma, aarrgh why oh why it works :(

}

