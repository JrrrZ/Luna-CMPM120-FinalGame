// define Loading state and methods
Loading = function(game) {};
Loading.prototype = {
	init: function(Time) {
		this.Time = Time;
	},
	preload: function() {
		console.log('Loading: preload');
		// load img
		game.load.image('luna', 'assets/img/luna.png');
		game.load.image('load', 'assets/img/loading.png');
		game.load.spritesheet('star', 'assets/img/star.png', 96, 96);
		game.load.image('flowstar', 'assets/img/flowstar.png');
		game.load.image('button', 'assets/img/snow.png');
		game.load.spritesheet('broomstick', 'assets/img/broomstick.png', 190, 310);
		game.load.image('button', 'assets/img/snow.png');
		game.load.image('moon', 'assets/img/moon.png')
		// not work
		game.load.physics('moon_physics', 'assets/img/moon.json', null, Phaser.Physics.LIME_CORONA_JSON);
		// load audio
		game.load.audio('lm', 'assets/audio/jr.mp3');
		game.load.audio('sweeping', 'assets/audio/sweeping.mp3');

	},
	create: function() {
		console.log('Loading: create');
		background = game.add.sprite(0, 0, 'load');
		background.scale.setTo(0.75)

		// create a button to go to the next state
		button = game.add.button(100, 200, 'button', actionOnClick, this);
		button.scale.setTo(0.08);

		StartWords = game.add.text(18, 16, 'Press The Snow Button', { fontSize: '36px', fill: '#000' });
	},
	update: function() {
		// main menu logic
		//let the game scale for the webpage
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
	
	}
}

function actionOnClick () {
    game.state.start('MainMenu')
}