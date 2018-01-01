
var menuState = function (game){

};

menuState.prototype = {

	create: function() {
		var title = this.add.sprite(game.world.centerX, game.world.centerY, 'titlescreen');
		title.anchor.setTo(0.5, 0.5);
		
		var startLabel = this.game.add.text(game.world.centerX - 200, game.world.centerY + 300, 'press the "Spacebar" key to begin', {font: '32px Arial', fill: '#000000'});
		
		var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		spaceKey.onDown.addOnce(this.start, this);
		
		//var yLabel = this.game.add.text(game.world.centerX - 200, game.world.centerY + 200, 'press the "Y key" key to learn how to play', {font: '32px Arial', fill: '#000000'});
		
		//var yKey = this.game.input.keyboard.addKey(Phaser.Keyboard.Y);
		
		//yKey.onDown.addOnce(this.video, this);
	},

	start: function() {
		this.game.state.start('level1')
	},
	
	/*video: function() {
		window.open("https://youtu.be/JUNtmBsXJIk");
	}*/
}
