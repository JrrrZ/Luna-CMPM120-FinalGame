// define MainMenu state and methods
MainMenu = function(game) {};
MainMenu.prototype = {
	init: function(Time) {
		this.Time = Time;
	},
	create: function() {
		console.log('MainMenu: create');
		background = game.add.sprite(-200, -80, 'luna2');
		background.scale.x = 1.9;
		background.scale.y = 1.9;

		button = game.add.button(200, 380, 'i', actionOnClick2, this);
		button.scale.setTo(1);
		button.animations.add('s2', [0,1,2], 3, true);
    	button.animations.play('s2');

		EnterWords = game.add.text(18, 16, 'Press Space To Begin', { fontSize: '36px', fill: '#fff' });
	},
	update: function() {
		// main menu logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Play1');
		}
	}
}

function actionOnClick2() {
    game.state.start('Play1');
}