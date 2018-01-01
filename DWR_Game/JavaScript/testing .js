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
window.onload = function() {
	var c = canvas.getContext("2d");
	var img1 = document.getElementById("portray");
	c.drawImage(img1, 10, 10);
	/*var bgImage = document.getElementById("background");
	bgImage.width = (window.innerWidth * 0.9);
	bgImage.height = (window.innerHeight * 0.9);*/
	var startAng = Math.PI;
	var endAng = 0; 
	c.beginPath();
		c.arc(x, y, rad, startAng, endAng, false); // x, y, startAngle, endAngle, counterclockwise? 
		c.closePath();
		c.lineWidth = 5;
		c.fillStyle = "white";
		c.fill();
		c.globalAlpha = 0.8;
		c.strokeStyle = "black";
		c.stroke();	
	function drawNumbers() {
		var ang; 
		var num; 
		c.font = rad * 0.12 + "px arial";
		c.textBaseline = "middle";
		c.textAlign = "center";
		for (num = 0; num < 11; num++) {
			ang = num  * Math.PI / 5; 
			c.rotate(ang);
			c.translate(0, -rad * 0.85);
			c.rotate(-ang);
			c.fillText(num.toString(), 0, 0);
			c.rotate(ang);
			c.translate(0, rad * 0.85);
			c.rotate(-ang);
		}
	}
	
	function animate() {
		c.clearRect(0, 0, innerWidth, innerHeight);
		
		c.beginPath();
		c.rect(rectWidth, rectHeight, 35, 105);
		c.fillStyle = 'turquoise';
		c.fill();
		c.lineWidth = 4;
		c.strokeStyle = 'black';
		c.stroke();
		rectWidth += 1 

	}
	setInterval(animate, 3000);
}


	