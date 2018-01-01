var game = new Phaser.Game (1111, 860, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	game.load.image('salmon', 'DWR_Game/assets/salmon.png');
	game.load.spritesheet('button', 'DWR_Game/assets/testsprite.png', 296, 300);
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.refresh();
	game.load.image('barrier', 'DWR_Game/assets/barrier.png');
	game.load.image('smolt', 'DWR_Game/assets/smolt.gif');
	game.load.image('barrierOpen', 'DWR_Game/assets/barrier_open_changed.jpg');
	game.load.image('barrierClose', 'DWR_Game/assets/barrier_close.jpg');
	game.load.image('fullBarrier', 'DWR_Game/assets/Full_barrier.jpg');
	game.load.image('rotatedSmolt', 'DWR_Game/assets/smolt2.jpg');
	game.load.image('boat', 'DWR_Game/assets/boat.png');
	game.load.image('fullDelta', 'DWR_Game/assets/full_nonbarrier.jpg');
<<<<<<< HEAD
=======
	
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
}

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
<<<<<<< HEAD
var boatUpdate;
=======
var boat;
var boatUpdate;
var objectLy;
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
function create() {
	
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
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
	for (var i = 0; i < 5; i++)
    {
		var x = game.world.centerX;
		var y = game.world.centerY;
		//  Create 15 sprites at random x/y locations
<<<<<<< HEAD
        fishy = object.create((Math.random() * 100) + 1000, (Math.random() * 70), 'smolt');
		fishy.anchor.setTo(0.5, 0.5);
		fishy.angle = -40;
        //  Set the scale of the sprite to the random value
        fishy.scale.setTo(rand, rand);
		
=======
        fishy = object.create((Math.random() * 80) + 965, (Math.random() * 70), 'smolt');
		fishy.anchor.setTo(0.5, 0.5);
		fishy.angle = -45;
        //  Set the scale of the sprite to the random value
        fishy.scale.setTo(rand, rand);
		fishy.body.velocity.x = -20;
		fishy.body.velocity.y = 120;
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
        //  You can also scale sprites like this:
        //  sprite.scale.x = value;
        //  sprite.scale.y = value;	
		
		
    }
	button = game.add.button(game.world.centerX - 50, game.world.centerY + 200, 'button', actionOnClick, this, '', '', 1, 0);
	/*button.onInputOver.add(over, this);

	button.onInputOut.add(out, this);*/

	button.scale.setTo(0.5, 0.5);
	
<<<<<<< HEAD
	scoreText = game.add.text(16, 800, 'score: 0', {fontSize: '32px', fill: '#000000'});
	
	
=======
	scoreText = game.add.text(16, 750, 'score: 0', {fontSize: '32px', fill: '#000000'});
	openBarrier();
	boat = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'boat');
	boat.body.velocity.x = -10;
	boat.body.velocity.y = 60;
	boat.scale.setTo(0.3, 0.3);
	boat.anchor.setTo(0.5, 0.5);
	boat.angle = 40; 
	truth = true;
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
}


/*function over() {																					
    console.log('button over');
}

function out() {
	console.log('button out');
} */

function openBarrier () {
	bar = game.add.sprite(game.world.centerX + 420, 330, 'barrierOpen');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	platform.add(bar);
	bar.body.immovable = true;
	bar.body.checkCollision.up = false; 
	bar.scale.setTo(1.5, 1.2);
	bar.anchor.setTo(0.5, 0.5);
	bar.angle = -45;
}
<<<<<<< HEAD
                                                                                
function closeBarrier () {
=======

function closeBarrier () {
	bar.body.setSize(100, 100, 90, 60);
	bar.scale.setTo(1.2, 0.9);
	bar.x = game.world.centerX +490;
	bar.angle = -60; 	
}
                                                                                
/*function closeBarrier () {
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
	var barra = game.add.sprite(game.world.centerX - 60, 60, 'barrierClose');
	platformB.add(barra);
	barra.body.immovable = true;
	barra.scale.setTo(1.5, 1.5);
<<<<<<< HEAD
}
=======
}*/
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb

/*function destroyOpenBarrier() {
	bar.kill();
}

function destroyClosedBarrier() {
	barra.kill();
} */

function actionOnClick() {
	var c = Phaser.Color.getRandomColor();
	game.stage.backgroundColor = c;
<<<<<<< HEAD
	score += 10
	scoreText.text = 'score: ' + score;
	openBarrier();
	/*if (present) {
		
		closeBarrier();
		present = false;
	} else {
		
		openBarrier();
		present = true;;
	}
	console.log(present);*/
}	

function drawFish() {
	fishyUpdate = object.create((Math.random() * 100) + 1000, Math.random() * 100, 'smolt');
	fishyUpdate.scale.setTo(rand, rand);
	fishyUpdate.anchor.setTo(0.5, 0.5);
	fishyUpdate.angle = -40;
}

function drawBoat() {
	boatUpdate = object.create((Math.random() * 100) + 1000, Math.random() * 100, 'boat');
	boatUpdate.scale.setTo(0.3, 0.3);
	boatUpdate.anchor.setTo(0.5, 0.5);
	boatUpdate.angle = 40; 
=======
	//openBarrier();
	if (truth) {
		closeBarrier();
		truth = false;
		
	} else { 
		bar.kill();
		openBarrier();	
		truth = true;
	}
}	


function drawFish() {
	fishyUpdate = object.create((Math.random() * 80) + 975, Math.random() * 100, 'smolt');
	fishyUpdate.scale.setTo(rand, rand);
	fishyUpdate.anchor.setTo(0.5, 0.5);
	fishyUpdate.angle = -45;
	fishyUpdate.body.velocity.x = -20;
	fishyUpdate.body.velocity.y = 80;
	
}

function drawBoat() {
	boatUpdate = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'boat');
	boatUpdate.scale.setTo(0.3, 0.3);
	boatUpdate.anchor.setTo(0.5, 0.5);
	boatUpdate.angle = 40; 
	boatUpdate.body.velocity.x = -20;
	boatUpdate.body.velocity.y = 80; 
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
}
function animateFish() {
	drawFish();													
}

function animateBoat() {
	drawBoat();
}

setInterval(animateFish, 5000);
setInterval(animateBoat, 10000);

<<<<<<< HEAD
function update() {
	var check = game.physics.arcade.collide(platform, object, '', null, this);
	
=======

function collisionHandler (object) {
	object.body.velocity.x = -80;
	object.body.velocity.y = 40;
	score += 1;
}

function collisionKill (objectLy) {
	objectLy.kill();
	score -= 500;
}
function update() {

	game.world.bringToTop(object);
	game.physics.arcade.overlap(object, platform, collisionHandler, null, this);
	game.physics.arcade.overlap(objectLy, platform, collisionKill, null, this);	
	/*var check = game.physics.arcade.collide(platform, object, '', null, this);
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
	
	//var check = bar.body.checkCollision.up;
	if (check = false) {	
		object.setAll('body.velocity.x', -20);
		object.setAll('body.velocity.y', 80);
		console.log("jhappy");
	
<<<<<<< HEAD
	} else {
		object.setAll('body.velocity.x', -20);
		object.setAll('body.velocity.y', 50);
		console.log("tired");
	}
=======
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
>>>>>>> 1c4bf9b660e984c59f2e6531c392b145ebdee0fb
}

function restart() {
	window.location.reload();
}
