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
		background = game.add.sprite(-295, -5, 'bkmoon');
		background.scale.x = 1.05;
		background.scale.y = 1.1;

		button = game.add.button(730, 400, 'credit', actionOnClick3, this);
		button.scale.setTo(1.7);
		button.animations.add('c1', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
		button.animations.play('c1');
		//EndWords = game.add.text(18, 16, 'Press Space To Restart', { fontSize: '36px', fill: '#fff' });
		pop = game.add.audio('pop');
	},
	update: function() {
		// GameOver logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('MainMenu');
		}
	}
}

function actionOnClick3() {
	pop.play('', 0, 0.6, false);
    game.state.start('Credit');
}