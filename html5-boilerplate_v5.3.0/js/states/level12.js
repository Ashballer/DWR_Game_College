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
	var border;
	var exportRate; 
	var face2;
	var face3;
	var zero;
	var one;
	var two;
	var three;
};


	
level1.prototype = {
	
	create: function () { 
		id = 0; 
		m;
		exportRate = 500;
		waterQuality = 250; 
		month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer'];
		spriteForPlayer = this.game.add.sprite(game.world.centerX + 375, game.world.centerY + 165, 'player');
		spriteForPlayer.tint = 0xffff00;
		spriteForPlayer.width = 50;
		spriteForPlayer.height = 320;
		spriteForPlayer.anchor.setTo(0.5, 1);
		border = this.game.add.sprite(game.world.centerX + 280, game.world.centerY - 200, 'border');
		border.scale.setTo(0.6, 0.95);
		this.game.stage.backgroundColor = '#ffffff';
		var background = this.game.add.sprite(0, 0, 'background');
		face2 = this.game.add.sprite('neutral');
		face3 = this.game.add.sprite('angry');
		face1 = this.game.add.sprite('happy');
		zero = this.game.add.sprite('0');
		one = this.game.add.sprite('1');
		two = this.game.add.sprite('2');
		three = this.game.add.sprite('3');
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
		storageText = this.game.add.text(800, 60, 'storage level: ' + storageLevel, {fontSize: '32px', fill: '#000000'});
		waterLevel = this.game.add.text(450, 100, '', {fontSize: '30px', fill: '#4DFA90'});
		seasonText = this.game.add.text(420, 60, 'season: ' + month[m], {fontSize: '32px', fill: '#000000'});		
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
		
		this.game.world.bringToTop(spriteForPlayer);
		this.game.world.bringToTop(border);

		if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && spriteForPlayer.height >= 30) {
			//decrease.destroy();
			spriteForPlayer.height -= x;

			//increase = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Increasing Rate', {fontSize: '32px', fill: '#000000'});
		};
		
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && spriteForPlayer.height <= 310) {
			//increase.destroy(); 
			spriteForPlayer.height += x;
			//decrease = this.game.add.text(game.world.centerX, game.world.centerY + 200, 'Decreasing Rate', {fontSize: '32px', fill: '#000000'});
		};
		
		
		if (spriteForPlayer.height <= 200 && spriteForPlayer.height >= 100) {
			spriteForPlayer.tint = 0xFABE4D;
			exportRate += 1;
		}
				
		if (spriteForPlayer.height <= 100) {
			spriteForPlayer.tint = 0xFF5468;
			exportRate -= 1;
		}
		
		if (spriteForPlayer.height >= 200) {
			spriteForPlayer.tint = 0xFFFF00;
			exportRate += 2;
		}
		
		if (exportRate >= 500) {
			face2.visible = false;
			face1.visible = false;;
			face1 = this.game.add.sprite(game.world.centerX - 50, 600, 'happy');
			face1.scale.setTo(0.7, 0.7);
		}
		
		if (exportRate >= 200 && exportRate <= 500) {
			face1.visible = false;
			face3.visible = false;
			face2.visible = false; 
			face2 = this.game.add.sprite(game.world.centerX - 50, 600, 'neutral');
			face2.scale.setTo(0.7, 0.7);
		}
		
		if (exportRate <= 200) {
			face2.visible = false;
			face3.visible = false; 
			face3 = this.game.add.sprite(game.world.centerX - 50, 600, 'angry');
			face3.scale.setTo(0.7, 0.7);
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
		
		if (spriteForPlayer.height <= 100 && spriteForPlayer.height > 35) { 
			storageLevel -= 5;
		}
		
		if (spriteForPlayer.height <= 200 && spriteForPlayer.height > 100) { 
			storageLevel -= 6;
		}
		
		if (spriteForPlayer.height <= 250 && spriteForPlayer.height > 200) { 
			storageLevel -= 9;
		}
		
		if (spriteForPlayer.height > 250) {
			storageLevel -= 10;
		}
		
		if (spriteForPlayer.height <= 35) {
			storageLevel -= 0;
		}
		storageText.text = "water level: " + storageLevel;
		//console.log(m);
		
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
		
		if (exportRate <= 0) {
			if (confirm("GAME OVER! Play again?")) {
				window.location.reload();
			}
		}
		
		if (storageLevel >= 10000) {
			if (confirm("GAME OVER! Play again?")) {
				window.location.reload(); 
			}
		}
		console.log(exportRate);
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
