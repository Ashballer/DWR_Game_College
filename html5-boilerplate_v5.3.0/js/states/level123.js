var level1 = function(game) {
	//declaring variables used in main state 
	
	var speed = 0;  
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
		//assigning values to integer variables and an array that are used later for comparisons
		
		id = 0; 
		m;
		exportRate = 500;
		waterQuality = 250; 
		month = ['Fall', 'Winter', 'Spring', 'Summer','Fall', 'Winter', 'Spring', 'Summer'];
		
		//creating sprite that player will control 
		
		spriteForPlayer = this.game.add.sprite(game.world.centerX + 375, game.world.centerY + 165, 'player');
		spriteForPlayer.tint = 0xffff00;
		spriteForPlayer.width = 50;
		spriteForPlayer.height = 320;
		spriteForPlayer.anchor.setTo(0.5, 1);
		
		//creating the border for spriteForPlayer
		
		border = this.game.add.sprite(game.world.centerX + 280, game.world.centerY - 200, 'border');
		border.scale.setTo(0.6, 0.95);
		
		//creating the background with a preloaded asset
		
		this.game.stage.backgroundColor = '#ffffff';
		var background = this.game.add.sprite(0, 0, 'background');
		
		//sprites for displaying public's reaction
		
		face2 = this.game.add.sprite('neutral');
		face3 = this.game.add.sprite('angry');
		face1 = this.game.add.sprite('happy');
		
		//sprite for controlling amount of water leaving the supply
		
		zero = this.game.add.sprite('0');
		one = this.game.add.sprite('1');
		two = this.game.add.sprite('2');
		three = this.game.add.sprite('3');
		
		//assigning values to assist with water supply portion of the game
		
		storageLevel = 1000;
		storageText = this.game.add.text(800, 60, 'storage level: ' + storageLevel, {fontSize: '32px', fill: '#000000'});
		waterLevel = this.game.add.text(450, 100, '', {fontSize: '30px', fill: '#4DFA90'});
		seasonText = this.game.add.text(420, 60, 'season: ' + month[m], {fontSize: '32px', fill: '#000000'});		
		
		//randomizes the type of year based off real time to determine what type of year 
		//wet = more water supply, dry = less water supply, norm = normal water supply 
		
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
		//assigning and declaring key comparing variables
		
		x = 20;
		id;
		waterLevel;
		
		//bringing water supply sprites to front of the page 
		
		this.game.world.bringToTop(spriteForPlayer);
		this.game.world.bringToTop(border);

		
		//Displaying different colors indicating different amounts of water supply
		//Depending on color, the export rate used for later comparisons increases or decreases 
		
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
		
		
		
		//comparing exportRate to set values to determine reaction of public
		
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
		
		
		
		//changes water supply depending on type of year and season
		//wet = more water supply, dry = less water supply, norm = normal water supply
		//fall + winter = water supply increase, spring + summer = no water supply increase
		
		if (id = 1 && m != 2 && m!= 3 && m != 6 && m!= 7) {
			storageLevel += 4;
		}
		if (id = 2 && m != 2 && m!= 3 && m != 6 && m!= 7) {
			storageLevel += 1;
		}
		if (id = 3 && m != 2 && m!= 3 && m != 6 && m!= 7) {
			storageLevel += 2;
		}
		
		
		//increasing storage level based on how much water supply is available
		
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
		
		//displaying text for available water supply and season 
		
		storageText.text = "water level: " + storageLevel;
		seasonText.text = "season: " + month[m]; 
		
		//compares storageLevel to set values to notify viewers of danger levels
		//storageLevel dropping to 0 or exceeding above a large amount are game ending conditions
		
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
		
		if (storageLevel >= 10000) {
			if (confirm("GAME OVER! Play again?")) {
				window.location.reload(); 
			}
		}
		
		//exportRate dropping below 0 is another game ending condition
		
		if (exportRate <= 0) {
			if (confirm("GAME OVER! Play again?")) {
				window.location.reload();
			}
		}
		console.log(exportRate);
	},
		
}

//assigns initial month 

var m = 0;

//season changes each time function runs 
//after 2 seasons pass, the player wins the game and can replay 

function tellTime() { 
		

		m += 1;
		if (m > 7 && confirm("Would you like to play again?")) {
			window.location.reload();
		}
}

//runs through the tellTime function every 15 seconds

setInterval(tellTime, 15000);
