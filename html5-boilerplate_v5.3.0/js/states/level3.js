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
	var idForExport; 
	var inflow
	var score; 
	var scoreText;
	var happiness;
	var warning;
	var delta;
	var high;
	var med;
	var low;
	var none;
	var contact;
	var dam;
	var timer;
};


	
level1.prototype = {
	
	create: function () { 
		id = 0; 
		m;
		exportRate = 500;
		waterQuality = 250;
		happiness = 100;
		idForExport = 0;
		score = 0;
		month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer'];
		inflow = this.game.add.sprite(game.world.centerX + 375, game.world.centerY + 165, 'player');
		inflow.tint = 0xffff00;
		inflow.width = 50;
		inflow.height = 160;
		inflow.anchor.setTo(0.5, 1);
		border = this.game.add.sprite(game.world.centerX + 275, game.world.centerY - 198, 'border');
		border.scale.setTo(0.625, 0.95);
		scoreBorder = this.game.add.sprite(-90, -25, 'sBorder');
		scoreBorder.scale.setTo(0.5, 0.5);
		seasonBorder = this.game.add.sprite(0, -25, 'sBorder');
		seasonBorder.scale.setTo(0.8, 0.5);
		playBorder = this.game.add.sprite(740, 560, 'pBorder');
		playBorder.scale.setTo(0.5, 0.5);
		dam = this.game.add.sprite(740, 50, 'dam');
		this.game.stage.backgroundColor = '#ffffff';
		var background = this.game.add.sprite(0, 0, 'background');
		face2 = this.game.add.sprite('neutral');
		face3 = this.game.add.sprite('angry');
		face1 = this.game.add.sprite('happy');
		zero = this.game.add.sprite('0');
		one = this.game.add.sprite('1');
		two = this.game.add.sprite('2');
		three = this.game.add.sprite('3');
		high = this.game.add.sprite('H');
		med = this.game.add.sprite('M');
		low = this.game.add.sprite('L');
		none = this.game.add.sprite('N');
		
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
		//inflow = 1000;
		timer = 0;
		storageText = this.game.add.text(game.world.centerX + 360, game.world.centerY + 150, 'Reservoir level', {fontSize: '32px', fill: '#000000'});
		storageText.angle = -90;
		waterLevel = this.game.add.text(game.world.centerX + 215, 400, '', {fontSize: '30px', fill: '#4DFA90'});
		seasonText = this.game.add.text(240, 60, 'season: ' + month[m], {fontSize: '32px', fill: '#000000'});
		contact = this.game.add.text(65, 520, '', {fontSize: '26px', fill: '#000000'});
        contact.inputEnabled = true;
        contact.events.onInputDown.add(down, this);		
		//scoreText = this.game.add.text(50, 60, 'score: ' + score, {fontSize: '32px', fill: '#000000'});
		d = Math.random() * 3;
		if (d < 1) {
			alert("It's a wet year! Make sure you don't overfill your reservoirs!");
			id = 1;
		} else if (d < 2 && d > 1)  {
			alert("It's a dry year! Make sure you conserve your water.");
			id = 2;
		} else {
			alert("It's a normal year! Make sure you plan ahead.");
			id = 3;
		}
		
		if (id = 2) {
			inflow.height = 120; 
		}
		
		if (id = 3) {
			inflow.height = 140;
		}
		river = game.add.audio('river');
		river.play();
		river.loopFull();
	},
	
	
	
	update: function () {
		x = 20;
		id;
		waterLevel;
		//this.game.world.bringToTop(playBorder);
		
		this.game.world.bringToTop(dam);
		this.game.world.bringToTop(seasonBorder);
		this.game.world.bringToTop(border);
		this.game.world.bringToTop(inflow);
		this.game.world.bringToTop(storageText);
		
		timer += this.game.time.elapsed;
		exportRate -= 0.5;
		high.visible = false;
		med.visible = false;
		low.visible = false;
		none.visible = false; 	
		none = this.game.add.sprite(game.world.centerX + 150, game.world.centerY + 225, 'N');
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.ONE)) {
			//decrease.destroy();
				high.visible = false;
				med.visible = false;
				none.visible = false;
				low.visible = false;
				low = this.game.add.sprite(game.world.centerX + 150, game.world.centerY + 225, 'L');
				exportRate -= 0.1;
				inflow.height -= 0.1;
				happiness += 1;
		}
		
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.TWO)) {
			//decrease.destroy();
				low.visible = false;
				high.visible = false;
				none.visible = false;
				med.visible = false;
				med = this.game.add.sprite(game.world.centerX + 150, game.world.centerY + 225, 'M');
				exportRate += 1;
				inflow.height -= 0.45;
		}
		
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.THREE)) {
			//decrease.destroy();
				low.visible = false;
				med.visible = false;
				none.visible = false;
				high.visible = false;
				high = this.game.add.sprite(game.world.centerX + 190, game.world.centerY + 225, 'H');
				exportRate += 2;
				inflow.height -= 0.95;
		}
			

	
		
		if (inflow.height <= 220 && inflow.height >= 100) {
			inflow.tint = 0xFABE4D;
		}
				
		if (inflow.height < 100) {
			inflow.tint = 0xFF5468;
		}
		
	
		if (inflow.height > 220) {
			inflow.tint = 0xFFFF00;
		} 
		
		if (exportRate >= 600) {
			face2.visible = false;
			face1.visible = false;;
			face1 = this.game.add.sprite(game.world.centerX - 50, 615, 'happy');
			face1.scale.setTo(0.7, 0.7);
			happiness += 2;
			waterQuality -= 0.7;
		}
		
		if (exportRate >= 100 && exportRate <= 600) {
			face1.visible = false;
			face3.visible = false;
			face2.visible = false; 
			face2 = this.game.add.sprite(game.world.centerX - 50, 615, 'neutral');
			face2.scale.setTo(0.7, 0.7);
			happiness += 0;
			waterQuality += 0.5;
		}
		
		if (exportRate <= 100) {
			face2.visible = false;
			face3.visible = false; 
			face3 = this.game.add.sprite(game.world.centerX - 50, 615, 'angry');
			face3.scale.setTo(0.7, 0.7);
			happiness -= 0.5;
			waterQuality += 2; 
			
		}
		
		if (inflow.height < 20) {
            face1.visible = false;
			face2.visible = false;
            face3.visible = false; 
            face3 = this.game.add.sprite(game.world.centerX - 50, 615, 'angry');
            face3.scale.setTo(0.7, 0.7);
        }
        
		if (inflow.height > 299) {
            face1.visible = false;
			face2.visible = false;
            face3.visible = false; 
            face3 = this.game.add.sprite(game.world.centerX - 50, 615, 'angry');
            face3.scale.setTo(0.7, 0.7);
		}
		
		
		if (id = 1 && m != 0 && m!= 3 && m != 4 && m!= 7) {
			inflow.height += 0.15;
			exportRate -= 0.1;
		}
		if (id = 2 && m != 0 && m!= 3 && m != 4 && m!= 7) {
			inflow.height += 0.055;
			exportRate -= 0.1;
		}
		if (id = 3 && m != 0 && m!= 3 && m != 4 && m!= 7) {
			inflow.height += 0.08;
			exportRate -= 0.1;
		}
		
		
		/* if (spriteForPlayer.height <= 100 && spriteForPlayer.height > 35) { 
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
		} */
		
		//console.log(m);
		
		//score = Math.round(waterQuality + happiness);
		
		seasonText.text = "season: " + month[m]; 
		//scoreText.text = "score: " + score;
		
		if (inflow.height < 100 && inflow.height > 30 && timer >= 200) {
			waterLevel.text = "Careful!";
			waterLevel.fill = "#000000";
			timer = 0;
			waterLevel.visible = false;
		}
	
		if (inflow.height < 30 && timer >= 200) {
			waterLevel.visible = true;
			waterLevel.text = "STOP!";
			waterLevel.fill = '#FF5468';
			waterLevel.visible = false;
			
		}
		
		
		
		if (waterQuality <= 0 && m != 1 && m != 2 && m != 5 && m != 6) {
			if (confirm("The water quality dropped below an acceptable amount, and the people have no more fresh water to drink. Play Again?")) {
				window.location.reload();
			}
		}
		
		if (waterQuality < 176 && waterQuality > 120 && m != 1 && m != 2 && m != 5 && m != 6) {
			warning = this.game.add.audio('warning');
			warning.play();
			contact.text = "Click me to fix the water quality!";
		}
		
			
		if (inflow.height <= 0) {
			if (confirm("There is no more water in the reservoirs! Play again?")) {
				window.location.reload(); 
			}
		}
		
		if (exportRate <= 0) {
			if (confirm("Water has stopped being delivered to the people, and they are extremely angry! Play again?")) {
				window.location.reload();
			}
		}
		
		if (inflow.height > 320) {
			if (confirm ("The reservoirs have overfilled and the threat of a flood is high! Play again?")) {
				window.location.reload(); 
			}
		}
		console.log(exportRate);
	},
		
}

var m = 0;

function down() {
        waterQuality = 500;
        console.log(waterQuality);
        contact.text = '';
}

		
function tellTime() { 
		
		//month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer' ];
		//alert(month[m]);
		m += 1;
		if (m == 4) {
            alert("It's a wet year! Make sure you don't overfill your reservoirs!");
            id = 1;
        }
		if (m > 7 && confirm("You have successfully managed the water levels. Great Job! Would you like to play again?")) {
            window.location.reload();
        }
}

setInterval(tellTime, 8000);
