// define GameOver state and methods
GameOver = function(game) {};
GameOver.prototype = {
	// set Time in all states
	init: function(Time) {
		this.Time = Time;
	},
	preload: function() {
		console.log('GameOver: preload');
	},
	create: function() {
		background = game.add.sprite(0, 0, 'luna');
		background.scale.x = 2.7;
		background.scale.y = 1.85;

		EndWords = game.add.text(18, 16, 'Press Space To Restart', { fontSize: '36px', fill: '#fff' });
	},
	update: function() {
		// GameOver logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('MainMenu');
		}
	}
}