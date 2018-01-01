<<<<<<< HEAD
var level1 = function(game) {
	var speed = 0; // main calculator for how fast exporting 
	//var graphics;
	var reduce;
	var x;
	var boss;
	var spriteForPlayer;
	var month; 
	var increase;
	var decrease;
	var storageLevel;
	var storageText;
	var d;
	var id;
	var m; 
	var waterQuality;
	var waterLevel;
	var seasonText; 
	
};


	
level1.prototype = {
	
	create: function () { 
		id = 0; 
		m;
		month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer'];
		spriteForPlayer = this.game.add.sprite(game.world.centerX - 150, 700, 'player');
		spriteForPlayer.tint = 0xffff00;
		spriteForPlayer.width = 320;
		spriteForPlayer.height = 50;
		this.game.stage.backgroundColor = '#ffffff';
		/* var graphics = this.game.add.graphics(325, 600);
		graphics.enabled = true;
		graphics.beginFill(0x0FFFFF);
		graphics.lineStyle(2, 0xFFFFFF, 1);
		graphics.drawRect(100, 100, 300, 50);
		graphics.endFill();	
		reduce = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		reduce.onDown.add(this.reduceFlow, this);*/
		//decrease = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Decreasing Rate', {fontSize: '32px', fill: '#000000'});
		//var increase;
		storageLevel = 1000;
		storageText = this.game.add.text(600, 60, 'water level: ' + storageLevel, {fontSize: '32px', fill: '#000000'});
		waterLevel = this.game.add.text(400, 200, '', {fontSize: '24px', fill: '#4DFA90'});
		seasonText = this.game.add.text(500, 150, 'season: ' + month[m], {fontSize: '32px', fill: '#000000'});		
		d = new Date();
		if (d.getMinutes() < 20) { 
			alert("It's a wet year! Make sure you don't overfill your reservoirs!");
			id = 1;
		} else if (d.getMinutes() >= 20 && d.getMinutes() < 40)  {
			alert("It's a dry year! Make sure you conserve your water.");
			id = 2;
		} else {
			alert("It's a normal year! Make sure you plan ahead.");
			id = 3;
		}
	},
	
	
	
	update: function () {
		x = 20;
		id;
		waterLevel;
		

		if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && spriteForPlayer.width >= 30) {
			//decrease.destroy();
			spriteForPlayer.width -= x;

			//increase = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Increasing Rate', {fontSize: '32px', fill: '#000000'});
		};
		
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && spriteForPlayer.width <= 310) {
			//increase.destroy(); 
			spriteForPlayer.width += x;
			//decrease = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Decreasing Rate', {fontSize: '32px', fill: '#000000'});
		};
		
		
		if (spriteForPlayer.width <= 200 && spriteForPlayer.width >= 100) {
			spriteForPlayer.tint = 0xFABE4D;
		}
		
		if (spriteForPlayer.width <= 100) {
			spriteForPlayer.tint = 0xFF5468;
		}
		
		if (spriteForPlayer.width >= 200) {
			spriteForPlayer.tint = 0xFFFF00;
		}
		
		if (id = 1 && m != 2 && m!= 3 && m != 6 && m!= 7) {
			storageLevel += 4;
		}
		if (id = 2 && m != 2 && m!= 3 && m != 6 && m!= 7) {
			storageLevel += 1;
		}
		if (id = 3 && m != 2 && m!= 3 && m != 6 && m!= 7) {
			storageLevel += 2;
		}
		
		/*if (m = 2 || m = 3 || m = 6 || m = 7) {
			storageLevel += 0;
		}*/
		
		if (spriteForPlayer.width <= 100 && spriteForPlayer.width > 35) { 
			storageLevel -= 5;
		}
		
		if (spriteForPlayer.width <= 200 && spriteForPlayer.width > 100) { 
			storageLevel -= 6;
		}
		
		if (spriteForPlayer.width <= 250 && spriteForPlayer.width > 200) { 
			storageLevel -= 9;
		}
		
		if (spriteForPlayer.width > 250) {
			storageLevel -= 10;
		}
		
		if (spriteForPlayer.width <= 35) {
			storageLevel -= 0;
		}
		storageText.text = "water level: " + storageLevel;
		console.log(m);
		
		seasonText.text = "season: " + month[m]; 
		if (storageLevel < 500) {
			waterLevel.text = "Careful!";
			waterLevel.fill = "#FABE4D";
		}
	
		if (storageLevel < 200) {
			waterLevel.text = "STOP!";
			waterLevel.fill = '#FF5468';
		}
		
	
			
		if (storageLevel <= 0) {
			if (confirm("GAME OVER! Play again?")) {
				window.location.reload(); 
			}
		}
		
		if (storageLevel >= 2500) {
			if (confirm("GAME OVER! Play again?")) {
				window.location.reload(); 
			}
		}
	},
	
	
}

var m = 0;
function tellTime() { 
		
		//month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer' ];
		//alert(month[m]);
		m += 1;
		if (m > 7 && confirm("Would you like to play again?")) {
			window.location.reload();
		}
}

setInterval(tellTime, 15000);
=======
var level1 = function(game) {
	var speed = 0; // main calculator for how fast exporting 
	//var graphics;
	var reduce;
	var x;
	var boss;
	var spriteForPlayer;
	var month; 
	var increase;
	var decrease;
	var storageLevel;
	var d;
};


	
level1.prototype = {
	
	create: function () { 
		spriteForPlayer = this.game.add.sprite(game.world.centerX - 150, 700, 'player');
		spriteForPlayer.width = 320;
		spriteForPlayer.height = 50;
		this.game.stage.backgroundColor = '#ffffff';
		/* var graphics = this.game.add.graphics(325, 600);
		graphics.enabled = true;
		graphics.beginFill(0x0FFFFF);
		graphics.lineStyle(2, 0xFFFFFF, 1);
		graphics.drawRect(100, 100, 300, 50);
		graphics.endFill();	
		reduce = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		reduce.onDown.add(this.reduceFlow, this);*/
		//decrease = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Decreasing Rate', {fontSize: '32px', fill: '#000000'});
		//var increase;
		d = new Date();
		if (d.getMinutes() < 30) { 
			alert("It's a wet year! Make sure you don't overfill your reservoirs!");
		} else {
			alert("It's a dry year! Make sure you conserve your water.");
		}
	},
	
	
	
	update: function () {
		x = 20;


		if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && spriteForPlayer.width >= 30) {
			//decrease.destroy();
			spriteForPlayer.width -= x;
			//increase = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Increasing Rate', {fontSize: '32px', fill: '#000000'});
		};
		
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && spriteForPlayer.width <= 310) {
			//increase.destroy(); 
			spriteForPlayer.width += x;
			//decrease = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Decreasing Rate', {fontSize: '32px', fill: '#000000'});
		};
	},
	
	
}

var m = 0;
function tellTime() { 
		
		month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer' ];
		alert(month[m]);
		m += 1;
		if (m > 7 && confirm("Would you like to play again?")) {
			window.location.reload();
		}
}

setInterval(tellTime, 15000);
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
