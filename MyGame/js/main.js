var background;
var Time = 0;
var text = null;
var broomstick;
var stars;
var lm;
var flowstars;
var StartWords;
var EnterWords;
var EndWords;

// define game
var game = new Phaser.Game(1200, 1050, Phaser.AUTO);


// define Loading state and methods
var Loading = function(game) {};
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
	
	}
}

function actionOnClick () {
    game.state.start('MainMenu')
}

// define MainMenu state and methods
var MainMenu = function(game) {};
MainMenu.prototype = {
	init: function(Time) {
		this.Time = Time;
	},
	create: function() {
		console.log('MainMenu: create');
		background = game.add.sprite(0, 0, 'luna');
		background.scale.x = 2.7;
		background.scale.y = 1.85;

		EnterWords = game.add.text(18, 16, 'Press Space To Begin\nPress Space To End', { fontSize: '36px', fill: '#fff' });
	},
	update: function() {
		// main menu logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Play');
		}
	}
}

// define GamePlay state and methods
var Play = function(game) {};
Play.prototype = {
	init: function(Time) {
		this.Time = Time;
	},
	create: function() {
		console.log('Play: create');
		background = game.add.sprite(0, 0, 'luna');
		background.scale.x = 2.7;
		background.scale.y = 1.85;

		// set physics
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.defaultRestitution = 0.8;

		// set up moon
		moon = game.add.sprite(660, 480, 'moon');
		moon.scale.setTo(0.5);
		game.physics.p2.enable(moon, false);
		moon.body.clearShapes();
		moon.body.setCircle(468, 20, 55);
		//moon.body.loadPolygon('moon_physics', 'moon', 0.43);
		moon.body.data.shapes[0].sensor = true;
		//moon.body.kinematic = true;
	
		// set up shiny star
		for(var i = 0; i < 250; i++) {
			this.stars = new Stars(game, 'star', 1);
			game.add.existing(this.stars);
		}

		// set up broomstick
		broomstick = game.add.sprite(300, 300, 'broomstick');
		broomstick.scale.set(0.7);
		game.physics.p2.enable(broomstick, false);
		broomstick.body.clearShapes();
		broomstick.body.setCircle(24, -15, 58);
		broomstick.body.kinematic = true;
		broomstick.smoothed = false;
		broomstick.animations.add('sweep', [0,1,2,3,4,5], 10, true);

		//  Input Enable the sprites
		broomstick.inputEnabled = true;
		//  Allow dragging - the 'true' parameter will make the sprite snap to the center
		broomstick.input.enableDrag(true);

		//game.physics.p2.setPostBroadphaseCallback(checkVeg, this);

		// flowstars
		for(var j = 0; j < 50; j++) {
			this.flowstars = new Flowstar(game, 'flowstar', 0.1);
			game.add.existing(this.flowstars);
		}

		// looping music
		lm = game.add.audio('lm');
		lm.play('', 0, 0.6, true);	
		
	},
	
	update: function() {
		// GamePlay logic

		// Make mouse work
		if(broomstick.input.isDragged) {      //BODY => follow pointer   
			broomstick.animations.play('sweep');
			if(broomstick.body != null) {	
				broomstick.body.x = game.input.activePointer.worldX;	
				broomstick.body.y = game.input.activePointer.worldY;
			}
		} else {
			broomstick.body.setZeroVelocity();
			broomstick.animations.stop();
		}

		// go to next state
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			lm.destroy();
			game.state.start('GameOver');
		}

		//game.physics.p2.setPostBroadphaseCallback(checkVegS, this);
	},
}

/*function checkVeg(body1, body2) {
    if ((body1.sprite.name === 'star' && body2.sprite.name === 'moon') || (body2.sprite.name === 'star' && body1.sprite.name === 'moon')) {
        return false;
    } else if ((body1.sprite.name === 'broomstick' && body2.sprite.name === 'moon') || (body2.sprite.name === 'broomstick' && body1.sprite.name === 'moon')) {
		return false;
	}
	return true;
}*/

// define GameOver state and methods
var GameOver = function(game) {};
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
			game.state.start('Play');
		}
	}
}


// add states to StateManager and start MainMenu
game.state.add('Loading', Loading);
game.state.add('MainMenu', MainMenu);
game.state.add('Play', Play);
game.state.add('GameOver', GameOver);
game.state.start('Loading');

