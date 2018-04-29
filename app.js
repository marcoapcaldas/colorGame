var squares = document.querySelectorAll("td");

function randomRGB(){
	let arrayRGB = [];
	for (let i = 0; i < 3; i++){
		arrayRGB.push(Math.floor(Math.random() * 256));
	}
	return arrayRGB;
};

function newColors(){
	tempRGB = randomRGB();
	let displaynRed = document.getElementById("nRed");
	let displaynGreen = document.getElementById("nGreen");
	let	displaynBlue = document.getElementById("nBlue");
	displaynRed.innerHTML = tempRGB[0];
	displaynGreen.innerHTML = tempRGB[1];
	displaynBlue.innerHTML = tempRGB[2];

	let correctSquare = Math.floor(Math.random() * 6);
	squares[correctSquare].bgColor = "rgb("+tempRGB[0]+", "+tempRGB[1]+", "+tempRGB[2]+")"; 

	for (let i = 0; i < 6; i++){
		tempRGB = randomRGB();
		if (i != correctSquare){
			squares[i].bgColor =  "rgb("+tempRGB[0]+", "+tempRGB[1]+", "+tempRGB[2]+")";
		} 
	}
};

for (let i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		choose = this.bgColor.match(/\d+/g);
		choose[0] = parseInt(choose[0]);
		choose[1] = parseInt(choose[1]);
		choose[2] = parseInt(choose[2]);
		console.log(choose);
		console.log(tempRGB);
		if (choose.toString() == tempRGB.toString()){
			console.log("Ganhou");
		}
	});
};

newColors();