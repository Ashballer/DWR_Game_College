//initializing the game with the Phaser engine

var game = new Phaser.Game (1111, 860, Phaser.AUTO, '', { preload: preload, create: create, update: update });


//preloading all assets 

function preload() {
	game.load.image('salmon', 'DWR_Game/assets/salmon.png');
	game.load.spritesheet('button', 'DWR_Game/assets/testsprite.png', 296, 300);
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.refresh();
	game.load.image('barrier', 'DWR_Game/assets/barrier.png');
	game.load.image('smolt', 'DWR_Game/assets/smolt.png');
	game.load.image('barrierOpen', 'DWR_Game/assets/barrier_open.jpg');
	game.load.image('barrierClose', 'DWR_Game/assets/barrier_close.jpg');
	game.load.image('fullBarrier', 'DWR_Game/assets/Full_barrier.jpg');
	game.load.image('rotatedSmolt', 'DWR_Game/assets/smolt2.jpg');
	game.load.image('boat', 'DWR_Game/assets/boat.png');
	game.load.image('fullDelta', 'DWR_Game/assets/full_nonbarrier.jpg');
	game.load.image('blank', 'DWR_Game/assets/blank.png');
	game.load.image('bassBoat', 'DWR_Game/assets/bassBoatA.png');
	game.load.audio('crash', 'DWR_Game/assets/crash.mp3');
	game.load.audio('river', 'DWR_Game/assets/river.mp3');
}

//declaring and initializing global variables

var score = 0;
var scoreText; 
var button;
var truth;
var object;
var fishy;
var fishyUpdate;
var rand = game.rnd.realInRange(0.09, 0.12);
var platform; 
var platformB;
var present = false;
var bar; 
var barra;
var boat;
var boatUpdate;
var objectLy;
var life = 15;
var empty;
var on;
var off;
var crash;
var river;

 
function create() {
	
	//calling Phaser Physics system

	game.stage.disableVisibilityChange = true;
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.setBoundsToWorld(true, true, false, false, false);

	//setting background
	
	var background = game.add.sprite(0, 0, 'fullDelta');
	background.scale.setTo(1.07, 1.07);
	object = game.add.group();
	object.enableBody = true;
	object.physicsBodyType = Phaser.Physics.ARCADE;
	
	//initializing the two assets for the barrier 
	
	platform = game.add.group();
	platform.enableBody = true;
	platform.physicsBodyType = Phaser.Physics.ARCADE;
	
	platformB = game.add.group();
	platformB.enableBody = true;
	
	objectLy = game.add.group();
	objectLy.enableBody = true;

	emptyPlat = game.add.group();
	emptyPlat.enableBody = true;

	//creating 5 sprites at the beginning of game
	
	for (var i = 0; i < 5; i++)
    {
		var x = game.world.centerX;
		var y = game.world.centerY;
		//placing sprites at random x/y locations
        
		fishy = object.create((Math.random() * 80) + 965, (Math.random() * 70), 'smolt');
		fishy.anchor.setTo(0.5, 0.5);
		fishy.angle = -45;
        
		//setting the scale of the sprite to the random value
        
		fishy.scale.setTo(rand, rand);
		
		//setting boundaries for the random velocities of the fish
		
		fishy.body.velocity.x = (Math.random() * 10) - 25;
		fishy.body.velocity.y = (Math.random() * 10) + 120;
        
		//setting the boundaries for the fish on the screen 
		
		fishy.checkWorldBounds = true;
		fishy.events.onOutOfBounds.add(fishOut, this);
		
    }
	
	//adding user input variable
	
	button = game.add.button(game.world.centerX - 50, game.world.centerY + 250, 'button', actionOnClick, this, '', '', 1, 0);
	button.scale.setTo(0.5, 0.5);
	
	//adding some accessory features to the game like directions, descriptive text
	game.add.text(740, 800, 'Georgiana Slough', {fontSize: '20px', fill: '#F0FF33'});
	game.add.text(game.world.centerX - 300, game.world.centerY + 200, 'Sacramento River', {fontSize: '20px', fill: '#F0FF33'});
	scoreText = game.add.text(240, 60, 'score: 0', {fontSize: '32px', fill: '#000000'});
	lifeText = game.add.text(320, 30, 'LIVES: ' + life, {fontSize: '32px', fill: '#000000'});	
	lifeText.anchor.setTo(0.5, 0.5);
	game.add.text(20, 120, 'HOW TO PLAY:', {fontSize: '32px', fill: '#FFD500'});
	game.add.text(20, 160, '- Click the button to turn the barrier on/off', {fontSize: '32px', fill: '#FFD500', fontWeight: 'bold'});
	game.add.text(20, 200, "- Don't let the fish go into the Georgiana Slough", {fontSize: '32px', fill: '#FFD500', fontWeight: 'bold'});
	game.add.text(20, 240, "- Don't block the boats' path", {fontSize: '32px', fill: '#FFD500', fontWeight: 'bold'});
	game.add.text(20, 280, "- Score 1000 points to win!", {fontSize: '32px', fill: '#FFD500', fontWeight: 'bold'});

	//assigning start values to variables that will be used later
	openBarrier();
	truth = true;
	empty = game.add.sprite(-60, 700, 'blank');
	empty.scale.setTo(0.1, 2);
	emptyPlat.add(empty);	
	on = game.add.text(game.world.centerX, game.world.centerY + 320, 'On', {fontSize: '32px', fill: '#000000'});
	
	//adding audio assets to the game 
	
	crash = game.add.audio('crash');
	river = game.add.audio('river');
	river.play();
	river.loopFull();
}

//called when player clicks ON button

function openBarrier () {
	bar = game.add.sprite(game.world.centerX + 420, 330, 'barrierOpen');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	platform.add(bar);
	bar.body.setSize(60, 240, -25, 110);
	bar.body.immovable = true;
	bar.body.checkCollision.up = false; 
	bar.scale.setTo(1.3, 1.6);
	bar.anchor.setTo(0.5, 0.5);
	bar.angle = 42;
}

//called when player clicks OFF button

function closeBarrier () {
	bar.body.setSize(100, 100, 100, 90)
	bar.scale.setTo(1.2, 1.1);
	bar.x = game.world.centerX +490;
	bar.angle = 20; 	
}

//called when player clicks on button
//if barrier is on, it destroys ON barrier and calls closeBarrier
//if barrier is off, it destroys OFF barrier and calls openBarrier

function actionOnClick() {
	var c = Phaser.Color.getRandomColor();
	game.stage.backgroundColor = c;
	//openBarrier();
	if (truth) {
		on.destroy();
		closeBarrier();
		truth = false;
		off = game.add.text(game.world.centerX, game.world.centerY + 320, 'Off', {fontSize: '32px', fill: '#000000'});
		
	} else { 
		bar.kill();
		off.destroy();
		openBarrier();	
		truth = true;
		on = game.add.text(game.world.centerX, game.world.centerY + 320, 'On', {fontSize: '32px', fill: '#000000'});
	}
}	

//creates fish sprites randomly with randomized velocities

function drawFish() {
	fishyUpdate = object.create((Math.random() * 50) + 990, Math.random() * 100, 'smolt');
	fishyUpdate.scale.setTo(rand, rand);
	fishyUpdate.anchor.setTo(0.5, 0.5);
	fishyUpdate.angle = -45;
	fishyUpdate.body.velocity.x = (Math.random() * 5) + -30;
	fishyUpdate.body.velocity.y = (Math.random() * 5) + 83;
	fishyUpdate.checkWorldBounds = true;
	fishyUpdate.events.onOutOfBounds.add(fishOut, this);
}

//creates boat sprites that can cause havoc 

function drawBoat() {
	boatUpdate = objectLy.create((Math.random() * 80) + 975, Math.random() * 100, 'bassBoat');
	boatUpdate.scale.setTo(0.35, 0.35);
	boatUpdate.anchor.setTo(0.5, 0.5);
	boatUpdate.angle = -170; 
	boatUpdate.body.velocity.x = -30;
	boatUpdate.body.velocity.y = 120; 
}

//drawing fish sprite

function animateFish() {
	drawFish();													
}

//drawing boat sprite

function animateBoat() {
	drawBoat();
}

//call animateFish at random times within a 1-3 second boundary

setInterval(animateFish, (Math.random() * 2000) + 1000);

//call animateBoat at random times within a 10 second boundary

setInterval(animateBoat, 10000);

//reduces one life point if fish move past boundary

function fishOut() {
	life -= 1;
}

//adds score when fish collide with barrier

function collisionHandler (object) {
	object.body.velocity.x = -80;
	object.body.velocity.y = 40;
	score += 1;
}

//decreases score when boats collide with barrier

function collisionKill (objectLy) {
	objectLy.kill();
	score -= 100;
	crash.play();
}

//destroys fish sprite once it exits the screen

function fishBlank(object) {
	object.kill();
	console.log('pushed');
}

//closes window once game is over

 function closeWindow(){ 
        window.open('','_self',''); 
        window.close(); 
 }
 
function update() {

	//adds features to the game continuously to allow smooth operation 
	
	game.world.bringToTop(object);
	game.physics.arcade.overlap(object, platform, collisionHandler, null, this);
	game.physics.arcade.overlap(objectLy, platform, collisionKill, null, this);	
	game.physics.arcade.overlap(object, emptyPlat, fishBlank, null, this);


	//updates score and life text
	
	scoreText.text = 'score: ' + score;
	lifeText.text = 'LIVES: ' + life;
	
	//check for game ending condition 
	//life <= 0 is a loss
	//score >= 0 is a win
	
	if (life <= 0) {
		if (confirm("Good try, let's play again?")) {
			window.location.reload();
		} else {
			window.close();
		}
	}
	
	if (score >= 1000) 
	{	
		if (confirm('Good Job, you won! Would you like to play again?') == true) {
			window.location.reload();
		} else {
			window.close();
		}
	}		
}



