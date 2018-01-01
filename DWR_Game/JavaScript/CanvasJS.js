var canvas = document.getElementById("gameBox");
canvas.width = (window.innerWidth * 0.9);
canvas.height = (window.innerHeight * 0.9);
var canvas2 = document.getElementById("cv2");
canvas2.width = (window.innerWidth * 0.9);
canvas2.height = (window.innerHeight * 0.9);

var x = canvas.width / 2;
var y = canvas.height;
var rad = 150; 
var rectWidth = 556;
var rectHeight = 719
var dRW = 1;
var dRH = 1;
var num;
var tx = 450;
var ty = 850;
var rightPressed = false;
var leftPressed = false;
var score = 0;

	document.addEventListener("keydown", onKeyDown, false);
	document.addEventListener("keyup", onKeyUp, false);


	function onKeyDown(e) {
		if(e.keyCode == 39) {
			rightPressed = true;
		}
		else if(e.keyCode == 37) {
			leftPressed = true;
		}
	}
	
	function onKeyUp(e) {
		if(e.keyCode == 39) {
			rightPressed = false;
		}
		else if(e.keyCode == 37) {
			leftPressed = false;
		}
	}
	
	function onceAgain() {
		window.location.reload();
	}
	
	
window.onload = function() {
	var c = canvas.getContext("2d");
	var img1 = document.getElementById("portray");
	c.drawImage(img1, 10, 10);
	/*var bgImage = document.getElementById("background");
	bgImage.width = (window.innerWidth * 0.9);
	bgImage.height = (window.innerHeight * 0.9);*/
	var startAng = Math.PI;
	var endAng = 0; 
	
		
	function drawSemi () { 
		c.beginPath();
		c.arc(x, y, rad, startAng, endAng, false); // x, y, startAngle, endAngle, counterclockwise? 
		c.closePath();
		c.lineWidth = 5;
		c.fillStyle = "white";
		c.fill();
		c.globalAlpha = 0.8;
		c.strokeStyle = "black";
		c.stroke();	
	}
	
	function drawRect() {
		c.beginPath();
		c.rect(rectWidth, rectHeight, 35, 105);
		c.closePath();
		c.fillStyle = 'turquoise';
		c.fill();
		c.lineWidth = 4;
		c.strokeStyle = 'black';
		c.stroke();
	}
	
	function drawText() {
		c.beginPath()
		c.font = "22px arial";
		c.fillStyle = "black"; 
		c.fillText("OFF", 370, 750);
		c.fillText("ON", 730, 750);
		c.closePath();
	}
	
	function drawScore() {
		c.beginPath();
		c.font = "26px arial";
		c.fillStyle = "#0066cc";
		c.fillText("Score: " + score, 8, 20);
	}
	function animate() {
		c.clearRect(0, 0, innerWidth, innerHeight);
		drawSemi();
		drawRect();
		drawText();
		drawScore();
		/*if (rectWidth + 90 > x + rad || rectWidth - 60 < x - rad) {
				dRW = - dRW;
		} 
		rectWidth += dRW;*/
		
		if(rightPressed && rectWidth < canvas.width / 2 + 45) {
			rectWidth += 15;
			score++;
		}
		else if(leftPressed && rectWidth > canvas.width / 2 - 82) {
			rectWidth -= 15;
			score++;
		}
	}
	setInterval(animate, 10);
		
}

	