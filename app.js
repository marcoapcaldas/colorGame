var numberOfColors = 6
var arrColors = generateRandomColors(numberOfColors);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetGame();	

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numberOfColors = 6;
	resetGame();
})

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numberOfColors = 3;
	resetGame();
})

resetButton.addEventListener("click", function(){
	resetGame();
});


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = arrColors[i];

	squares[i].addEventListener("click", function(){
		clickedColor = this.style.backgroundColor;
		if (clickedColor == pickedColor){
			messageDisplay.textContent = "Correct"
			changeColors();
			resetButton.textContent = "Play Again";

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}

function pickColor(){
	var random = Math.floor(Math.random() * arrColors.length);
	return arrColors[random];
}

function generateRandomColors(numberOfColors){
	let arrColors = [];
	for (var i = 0; i < numberOfColors; i++) {
		arrColors.push(randomColor());
	}
	return arrColors;
}

function randomColor(){
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetGame(){
	arrColors = generateRandomColors(numberOfColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = arrColors[i];
	}

	if (numberOfColors == 6) {
		for (var i = 3; i < squares.length; i++) {
			squares[i].style.display = "block";
		}
	}
	if (numberOfColors == 3) {
		for (var i = 3; i < squares.length; i++) {
		 squares[i].style.display = "none";
		}
	}
}