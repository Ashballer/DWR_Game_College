var game = new Phaser.Game (1111, 800, Phaser.AUTO, 'game');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level1', level1);

game.state.start('boot');