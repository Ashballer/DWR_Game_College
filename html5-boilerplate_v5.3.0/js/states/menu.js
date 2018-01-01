
var menuState = function (game){

};

menuState.prototype = {

	create: function() {
		//uses preloaded images from the load state
		var title = this.add.sprite(game.world.centerX, game.world.centerY, 'titlescreen');
		title.anchor.setTo(0.5, 0.5);
		
		var startLabel = this.game.add.text(game.world.centerX - 200, game.world.centerY + 300, 'press the "Spacebar" key to begin', {font: '32px Arial', fill: '#000000'});
		
		//sets start button of the game to spacebar

		var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.addOnce(this.start, this);
		
	},

	//starts the level1 state 
	start: function() {
		this.game.state.start('level1')
	},
	
}
