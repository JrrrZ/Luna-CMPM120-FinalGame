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
		game.load.image('luna2', 'assets/img/luna2.png');
		game.load.image('load', 'assets/img/loading.png');
		game.load.image('load1', 'assets/img/loading1.png');
		game.load.spritesheet('star', 'assets/img/starsshine.png', 328, 389);
		game.load.image('flowstar', 'assets/img/flowstar.png');
		game.load.image('button', 'assets/img/boy.png');
		game.load.spritesheet('broomstick', 'assets/img/broomstick.png', 190, 310);
		game.load.image('button', 'assets/img/snow.png');
		game.load.image('moon', 'assets/img/moon.png')
		game.load.image('moon2', 'assets/img/moon2.png')
		game.load.spritesheet('m', 'assets/img/menuspreadsheet.png', 168, 66);
		game.load.spritesheet('cm', 'assets/img/clickoutsidemenu.png', 453, 42);
		game.load.spritesheet('ms', 'assets/img/clickmenushape.png', 956, 52);
		game.load.spritesheet('p', 'assets/img/playspreadsheet.png', 234, 138);
		game.load.spritesheet('i', 'assets/img/instructionspread.png', 460, 70);
		game.load.spritesheet('c', 'assets/img/clickand drag soreadsheet.png', 650, 49);
		game.load.spritesheet('s', 'assets/img/PressS.png', 455, 39);
		game.load.spritesheet('d', 'assets/img/PressD.png', 636, 46);
		game.load.spritesheet('q', 'assets/img/PressQ.png', 652, 48);
		game.load.spritesheet('ib', 'assets/img/clicktoBEGIN.png', 614, 107);
		game.load.spritesheet('b', 'assets/img/moonspin2.png', 60, 60);
		game.load.video('v', 'assets/img/video.mp4');
		// not work
		game.load.physics('moon_physics', 'assets/img/moon.json', null, Phaser.Physics.LIME_CORONA_JSON);
		// load audio
		game.load.audio('lm', 'assets/audio/jr.mp3');
		game.load.audio('sweeping', 'assets/audio/sweeping.mp3');

	},
	create: function() {
		console.log('Loading: create');
		background = game.add.sprite(0, 0, 'load1');
		background.scale.x = 0.95;
		background.scale.y = 1.1;

		// create a button to go to the next state
		button = game.add.button(760, 380, 'p', actionOnClick1, this);
		button.scale.setTo(1);
		button.animations.add('s1', [0,1,2], 20, true);
    	button.animations.play('s1');

		//StartWords = game.add.text(18, 16, 'Press The Snow Button', { fontSize: '36px', fill: '#000' });
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

function actionOnClick1() {
    game.state.start('MainMenu');
}