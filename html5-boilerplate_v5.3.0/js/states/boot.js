// this is the initial state of the game 
var bootState = function (game){

};

bootState.prototype = {
	// the create function creates anything that needs to be used throughout the game 
	create: function() {
	
		//loads the Phaser Arcade system into the game 
		
		this.game.physics.startSystem(Phaser.Physics.Arcade);
		
		//starts the next state of the game
		
		this.game.state.start('load');
	
	}
};