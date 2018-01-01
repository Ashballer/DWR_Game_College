<<<<<<< HEAD
var twoState = {
	
	create: function () {
		var score = 0;
		var scoreText; 
		var button;
		var truth;
		var object;
		var fishy;
		var fishyUpdate;
		var rand = game.rnd.realInRange(0.1, 0.15);
		var platform; 
		var platformB;
		var present = false;
		var bar; 
		var barra;
		var boat;
		var boatUpdate;
		var objectLy;
		var life = 15;;
		var empty;
		game.stage.disableVisibilityChange = true;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.setBoundsToWorld(true, true, false, false, false);

		var background = game.add.sprite(0, 0, 'fullDelta');
		background.scale.setTo(1.07, 1.07);
		object = game.add.group();
		object.enableBody = true;
		object.physicsBodyType = Phaser.Physics.ARCADE;
		
		
		platform = game.add.group();
		platform.enableBody = true;
		platform.physicsBodyType = Phaser.Physics.ARCADE;
		
		platformB = game.add.group();
		platformB.enableBody = true;
		
		objectLy = game.add.group();
		objectLy.enableBody = true;

		emptyPlat = game.add.group();
		emptyPlat.enableBody = true;

		for (var i = 0; i < 5; i++)
		{
			var x = game.world.centerX;
			var y = game.world.centerY;
			//  Create 15 sprites at random x/y locations
			fishy = object.create((Math.random() * 80) + 965, (Math.random() * 70), 'smolt');
			fishy.anchor.setTo(0.5, 0.5);
			fishy.angle = -45;
			//  Set the scale of the sprite to the random value
			fishy.scale.setTo(rand, rand);
			fishy.body.velocity.x = (Math.random() * 10) - 25;
			fishy.body.velocity.y = (Math.random() * 10) + 120;
			//  You can also scale sprites like this:
			//  sprite.scale.x = value;
			//  sprite.scale.y = value;	
			
			//fishy.body.collideWorldBounds = true;
			//fishy.body.checkCollision.up = false;
			//fishy.body.checkCollision.down = false;
			
			
			
		
		
			fishy.checkWorldBounds = true;
			fishy.events.onOutOfBounds.add(fishOut, this);
			
		}
		button = game.add.button(game.world.centerX - 50, game.world.centerY + 200, 'button', actionOnClick, this, '', '', 1, 0);
		/*button.onInputOver.add(over, this);

		button.onInputOut.add(out, this);*/

		button.scale.setTo(0.5, 0.5);
		game.add.text(740, 800, 'Georgiana Slough', {fontSize: '20px', fill: '#F0FF33'});
		game.add.text(game.world.centerX - 300, game.world.centerY + 200, 'Sacramento River', {fontSize: '20px', fill: '#F0FF33'});
		scoreText = game.add.text(240, 60, 'score: 0', {fontSize: '32px', fill: '#000000'});
		lifeText = game.add.text(320, 30, 'LIVES: ' + life, {fontSize: '32px', fill: '#000000'});	
		lifeText.anchor.setTo(0.5, 0.5);
		openBarrier();
		boat = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'boat');
		boat.body.velocity.x = -10;
		boat.body.velocity.y = 60;
		boat.scale.setTo(0.3, 0.3);
		boat.anchor.setTo(0.5, 0.5);
		boat.angle = 40; 
		truth = true;
		empty = game.add.sprite(-60, 700, 'blank');
		empty.scale.setTo(0.1, 2);
		emptyPlat.add(empty);	
	},


	/*function over() {																					
		console.log('button over');
	}

	function out() {
		console.log('button out');
	} */

	openBarrier: function () {
		bar = game.add.sprite(game.world.centerX + 420, 330, 'barrierOpen');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		platform.add(bar);
		bar.body.immovable = true;
		bar.body.checkCollision.up = false; 
		bar.scale.setTo(1.5, 1.2);
		bar.anchor.setTo(0.5, 0.5);
		bar.angle = -45;
	},

	closeBarrier: function () {
		bar.body.setSize(100, 100, 100, 90)
		bar.scale.setTo(1.2, 0.9);
		bar.x = game.world.centerX +490;
		bar.angle = -60; 	
	},
																					
	/*function closeBarrier () {
		var barra = game.add.sprite(game.world.centerX - 60, 60, 'barrierClose');
		platformB.add(barra);
		barra.body.immovable = true;
		barra.scale.setTo(1.5, 1.5);
	}*/

	/*function destroyOpenBarrier() {
		bar.kill();
	}

	function destroyClosedBarrier() {
		barra.kill();
	} */

	actionOnClick: function () {
		var c = Phaser.Color.getRandomColor();
		game.stage.backgroundColor = c;
		//openBarrier();
		if (truth) {
			closeBarrier();
			truth = false;
			
		} else { 
			bar.kill();
			openBarrier();	
			truth = true;
		}
	},	


	drawFish: function () {
		fishyUpdate = object.create((Math.random() * 80) + 975, Math.random() * 100, 'smolt');
		fishyUpdate.scale.setTo(rand, rand);
		fishyUpdate.anchor.setTo(0.5, 0.5);
		fishyUpdate.angle = -45;
		fishyUpdate.body.velocity.x = (Math.random() * 10) + -25;
		fishyUpdate.body.velocity.y = (Math.random() * 10) + 80;
		//fishyUpdate.body.collideWorldBounds = true;
		//fishyUpdate.body.checkCollision.up = false;
		//fishyUpdate.body.checkCollision.down = false;

		
		
		fishyUpdate.checkWorldBounds = true;
		fishyUpdate.events.onOutOfBounds.add(fishOut, this);
	},

	drawBoat: function () {
		boatUpdate = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'boat');
		boatUpdate.scale.setTo(0.3, 0.3);
		boatUpdate.anchor.setTo(0.5, 0.5);
		boatUpdate.angle = 40; 
		boatUpdate.body.velocity.x = -20;
		boatUpdate.body.velocity.y = 80; 
	},

	animateFish: function () {
		drawFish();													
	},

	animateBoat: function () {
		drawBoat();
	},

	setInterval(animateFish, 5000);
	setInterval(animateBoat, 10000);

	fishOut: function () {
		life -= 1;
	},
	collisionHandler: function (object) {
		object.body.velocity.x = -80;
		object.body.velocity.y = 40;
		score += 1;
	},

	collisionKill: function (objectLy) {
		objectLy.kill();
		score -= 500;
	},

	fishBlank: function (object) {
		object.kill();
		console.log('pushed');
	},

	update: function () {

		game.world.bringToTop(object);
		game.physics.arcade.overlap(object, platform, collisionHandler, null, this);
		game.physics.arcade.overlap(objectLy, platform, collisionKill, null, this);	
		game.physics.arcade.overlap(object, emptyPlat, fishBlank, null, this);
		/*var check = game.physics.arcade.collide(platform, object, '', null, this);
		
		
		//var check = bar.body.checkCollision.up;
		if (check = false) {	
			object.setAll('body.velocity.x', -20);
			object.setAll('body.velocity.y', 120);
			console.log("jhappy");
		
		} else {
			object.setAll('body.velocity.x', -20);
			object.setAll('body.velocity.y', 70);
			console.log("tired");
		}*/
		

		
		
		scoreText.text = 'score: ' + score;
		lifeText.text = 'LIVES: ' + life;
		
		if (life <= 0) {
			window.location.reload();
		}
		
		if (score >= 500) {
			if (confirm('Start Level 2?') == true) {
				game.state.start('level2');
			} 
		} else {
			window.location.reload();
		}
		
	},

	restart: function() {
		window.location.reload();
	}
=======
var twoState = {
	
	create: function () {
		var score = 0;
		var scoreText; 
		var button;
		var truth;
		var object;
		var fishy;
		var fishyUpdate;
		var rand = game.rnd.realInRange(0.1, 0.15);
		var platform; 
		var platformB;
		var present = false;
		var bar; 
		var barra;
		var boat;
		var boatUpdate;
		var objectLy;
		var life = 15;;
		var empty;
		game.stage.disableVisibilityChange = true;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.setBoundsToWorld(true, true, false, false, false);

		var background = game.add.sprite(0, 0, 'fullDelta');
		background.scale.setTo(1.07, 1.07);
		object = game.add.group();
		object.enableBody = true;
		object.physicsBodyType = Phaser.Physics.ARCADE;
		
		
		platform = game.add.group();
		platform.enableBody = true;
		platform.physicsBodyType = Phaser.Physics.ARCADE;
		
		platformB = game.add.group();
		platformB.enableBody = true;
		
		objectLy = game.add.group();
		objectLy.enableBody = true;

		emptyPlat = game.add.group();
		emptyPlat.enableBody = true;

		for (var i = 0; i < 5; i++)
		{
			var x = game.world.centerX;
			var y = game.world.centerY;
			//  Create 15 sprites at random x/y locations
			fishy = object.create((Math.random() * 80) + 965, (Math.random() * 70), 'smolt');
			fishy.anchor.setTo(0.5, 0.5);
			fishy.angle = -45;
			//  Set the scale of the sprite to the random value
			fishy.scale.setTo(rand, rand);
			fishy.body.velocity.x = (Math.random() * 10) - 25;
			fishy.body.velocity.y = (Math.random() * 10) + 120;
			//  You can also scale sprites like this:
			//  sprite.scale.x = value;
			//  sprite.scale.y = value;	
			
			//fishy.body.collideWorldBounds = true;
			//fishy.body.checkCollision.up = false;
			//fishy.body.checkCollision.down = false;
			
			
			
		
		
			fishy.checkWorldBounds = true;
			fishy.events.onOutOfBounds.add(fishOut, this);
			
		}
		button = game.add.button(game.world.centerX - 50, game.world.centerY + 200, 'button', actionOnClick, this, '', '', 1, 0);
		/*button.onInputOver.add(over, this);

		button.onInputOut.add(out, this);*/

		button.scale.setTo(0.5, 0.5);
		game.add.text(740, 800, 'Georgiana Slough', {fontSize: '20px', fill: '#F0FF33'});
		game.add.text(game.world.centerX - 300, game.world.centerY + 200, 'Sacramento River', {fontSize: '20px', fill: '#F0FF33'});
		scoreText = game.add.text(240, 60, 'score: 0', {fontSize: '32px', fill: '#000000'});
		lifeText = game.add.text(320, 30, 'LIVES: ' + life, {fontSize: '32px', fill: '#000000'});	
		lifeText.anchor.setTo(0.5, 0.5);
		openBarrier();
		boat = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'boat');
		boat.body.velocity.x = -10;
		boat.body.velocity.y = 60;
		boat.scale.setTo(0.3, 0.3);
		boat.anchor.setTo(0.5, 0.5);
		boat.angle = 40; 
		truth = true;
		empty = game.add.sprite(-60, 700, 'blank');
		empty.scale.setTo(0.1, 2);
		emptyPlat.add(empty);	
	},


	/*function over() {																					
		console.log('button over');
	}

	function out() {
		console.log('button out');
	} */

	openBarrier: function () {
		bar = game.add.sprite(game.world.centerX + 420, 330, 'barrierOpen');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		platform.add(bar);
		bar.body.immovable = true;
		bar.body.checkCollision.up = false; 
		bar.scale.setTo(1.5, 1.2);
		bar.anchor.setTo(0.5, 0.5);
		bar.angle = -45;
	},

	closeBarrier: function () {
		bar.body.setSize(100, 100, 100, 90)
		bar.scale.setTo(1.2, 0.9);
		bar.x = game.world.centerX +490;
		bar.angle = -60; 	
	},
																					
	/*function closeBarrier () {
		var barra = game.add.sprite(game.world.centerX - 60, 60, 'barrierClose');
		platformB.add(barra);
		barra.body.immovable = true;
		barra.scale.setTo(1.5, 1.5);
	}*/

	/*function destroyOpenBarrier() {
		bar.kill();
	}

	function destroyClosedBarrier() {
		barra.kill();
	} */

	actionOnClick: function () {
		var c = Phaser.Color.getRandomColor();
		game.stage.backgroundColor = c;
		//openBarrier();
		if (truth) {
			closeBarrier();
			truth = false;
			
		} else { 
			bar.kill();
			openBarrier();	
			truth = true;
		}
	},	


	drawFish: function () {
		fishyUpdate = object.create((Math.random() * 80) + 975, Math.random() * 100, 'smolt');
		fishyUpdate.scale.setTo(rand, rand);
		fishyUpdate.anchor.setTo(0.5, 0.5);
		fishyUpdate.angle = -45;
		fishyUpdate.body.velocity.x = (Math.random() * 10) + -25;
		fishyUpdate.body.velocity.y = (Math.random() * 10) + 80;
		//fishyUpdate.body.collideWorldBounds = true;
		//fishyUpdate.body.checkCollision.up = false;
		//fishyUpdate.body.checkCollision.down = false;

		
		
		fishyUpdate.checkWorldBounds = true;
		fishyUpdate.events.onOutOfBounds.add(fishOut, this);
	},

	drawBoat: function () {
		boatUpdate = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'boat');
		boatUpdate.scale.setTo(0.3, 0.3);
		boatUpdate.anchor.setTo(0.5, 0.5);
		boatUpdate.angle = 40; 
		boatUpdate.body.velocity.x = -20;
		boatUpdate.body.velocity.y = 80; 
	},

	animateFish: function () {
		drawFish();													
	},

	animateBoat: function () {
		drawBoat();
	},

	setInterval(animateFish, 5000);
	setInterval(animateBoat, 10000);

	fishOut: function () {
		life -= 1;
	},
	collisionHandler: function (object) {
		object.body.velocity.x = -80;
		object.body.velocity.y = 40;
		score += 1;
	},

	collisionKill: function (objectLy) {
		objectLy.kill();
		score -= 500;
	},

	fishBlank: function (object) {
		object.kill();
		console.log('pushed');
	},

	update: function () {

		game.world.bringToTop(object);
		game.physics.arcade.overlap(object, platform, collisionHandler, null, this);
		game.physics.arcade.overlap(objectLy, platform, collisionKill, null, this);	
		game.physics.arcade.overlap(object, emptyPlat, fishBlank, null, this);
		/*var check = game.physics.arcade.collide(platform, object, '', null, this);
		
		
		//var check = bar.body.checkCollision.up;
		if (check = false) {	
			object.setAll('body.velocity.x', -20);
			object.setAll('body.velocity.y', 120);
			console.log("jhappy");
		
		} else {
			object.setAll('body.velocity.x', -20);
			object.setAll('body.velocity.y', 70);
			console.log("tired");
		}*/
		

		
		
		scoreText.text = 'score: ' + score;
		lifeText.text = 'LIVES: ' + life;
		
		if (life <= 0) {
			window.location.reload();
		}
		
		if (score >= 500) {
			if (confirm('Start Level 2?') == true) {
				game.state.start('level2');
			} 
		} else {
			window.location.reload();
		}
		
	},

	restart: function() {
		window.location.reload();
	}
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
}