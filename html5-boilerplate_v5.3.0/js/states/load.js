var loadState = function (game) {
	
};

loadState.prototype = {

	// preloads all the assets that will be used throughout the game
	
	preload: function () {
		this.game.load.image('salmon', 'DWR_Game/assets/salmon.png');
		this.game.load.spritesheet('button', 'DWR_Game/assets/testsprite.png', 296, 300);
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.scale.refresh();
		this.game.load.image('barrier', 'DWR_Game/assets/barrier.png');
		this.game.load.image('smolt', 'DWR_Game/assets/smolt.gif');
		this.game.load.image('barrierOpen', 'DWR_Game/assets/barrier_open_changed.jpg');
		this.game.load.image('barrierClose', 'DWR_Game/assets/barrier_close.jpg');
		this.game.load.image('fullBarrier', 'DWR_Game/assets/Full_barrier.jpg');
		this.game.load.image('rotatedSmolt', 'DWR_Game/assets/smolt2.jpg');
		this.game.load.image('boat', 'DWR_Game/assets/boat.png');
		this.game.load.image('fullDelta', 'DWR_Game/assets/full_nonbarrier.jpg');
		this.game.load.image('blank', 'DWR_Game/assets/blank.png');
		this.game.load.image('titlescreen', 'DWR_Game/assets/titlescreen.png');
		this.game.load.image('player', 'DWR_Game/assets/playerInputBar.png');
		this.game.load.image('border', 'DWR_Game/assets/borders.gif');
		this.game.load.image('background', 'DWR_Game/assets/delta_flows.gif');
		this.game.load.image('happy', 'DWR_Game/assets/happy.gif');
		this.game.load.image('neutral', 'DWR_Game/assets/neutral.gif');
		this.game.load.image('angry', 'DWR_Game/assets/angry.gif');
		this.game.load.image('0', 'DWR_Game/assets/0.gif');
		this.game.load.image('1', 'DWR_Game/assets/1.gif');
		this.game.load.image('2', 'DWR_Game/assets/2.gif');
		this.game.load.image('3', 'DWR_Game/assets/3.gif');
		this.game.load.audio('warning', 'DWR_Game/assets/bleep.mp3');
		this.game.load.audio('river', 'DWR_Game/assets/river.mp3');
		this.game.load.image('sBorder', 'DWR_Game/assets/scoreB.gif');
		this.game.load.image('pBorder', 'DWR_Game/assets/playB.gif');
		this.game.load.image('H', 'DWR_Game/assets/high.gif');
		this.game.load.image('M', 'DWR_Game/assets/med.gif');
		this.game.load.image('L', 'DWR_Game/assets/low.gif');
		this.game.load.image('N', 'DWR_Game/assets/none.gif');
		this.game.load.image('dam', 'DWR_Game/assets/folsom_dam.png');
	},
	
	create: function() {
		
		//starts next state of game
	
		this.game.state.start('menu');
	
	}
}