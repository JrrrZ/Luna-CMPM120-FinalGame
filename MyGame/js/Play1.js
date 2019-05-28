// define GamePlay state and methods
Play1 = function(game) {};
Play1.prototype = {
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
		game.physics.p2.defaultRestitution = 0.1;

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
		SStar = game.add.group();
    	SStar.enableBody = true;
    	SStar.physicsBodyType = Phaser.Physics.P2JS;
		for(var i = 0; i < 600; i++) {
			this.stars = new Stars(game, 'star', 1);
			game.add.existing(this.stars);
			//game.physics.p2.setPostBroadphaseCallback(checkStar, this);
			SStar.add(this.stars);
		}

		// set up broomstick
		broomstick = game.add.sprite(300, 300, 'broomstick');
		broomstick.scale.set(0.7);
		game.physics.p2.enable(broomstick, false);
		broomstick.body.clearShapes();
		broomstick.body.setCircle(24, -15, 58);
		broomstick.body.kinematic = true;
		broomstick.smoothed = false;
		broomsweep = broomstick.animations.add('sweep', [0,1,2,3,4,5], 10, true);

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
		sweeping = game.add.audio('sweeping');
		lm.play('', 0, 0.6, true);	

		// set up in-game menu
		menu = game.add.text(40, 40, 'Pause', { font: '24px Arial', fill: '#fff' });
		menu.inputEnabled = true;
		menu.events.onInputUp.add(function () {
			// When the paus button is pressed, we pause the game
			game.paused = true;
			// Then add the menu
			
			// And a label to illustrate which menu item was chosen. (This is not necessary)
			choiseLabel = game.add.text(600, 700, 'Click outside menu to continue', { font: '30px Arial', fill: '#000' });
			choiseLabel.anchor.setTo(0.5, 0.5);
		});
		game.input.onDown.add(unpause, self);
	},

	
	update: function() {
		// GamePlay logic

		// Make mouse work
		if(broomstick.input.isDragged) {      //BODY => follow pointer   
			broomstick.animations.play('sweep');
			if(broomstick.frame === 2) {
				sweeping.play('', 0, 0.02, false);	
			}
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
		
		if(point > 10) {
			if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
				game.physics.p2.setPostBroadphaseCallback(checkStar, this);
				point -= 10;
			}
		}
		
		//if (broomstick.anis.isPlaying() = true) {
		//	console.log('Player is walking')
		 // }
		/*if(broomsweep.isPlaying) {
			sweeping.play('', 0, 1, true);
		}
		else {
			sweeping.destroy();
		}*/

		// win condition
		if(Math.pow(680-SStar.x, 2) + Math.pow(535-SStar.y, 2) < Math.pow(455, 2)) {
			game.time.events.loop(Phaser.Timer.SECOND, updateTime, this);
		} 

		if(Time > 10){
			button = game.add.button(100, 300, 'button', Win, this);
			button.scale.setTo(0.08);
		}
	},
}

function checkStar(body1, body2) {
    if ((body1.sprite.name === 'star' && body2.sprite.name === 'star') || (body2.sprite.name === 'star' && body1.sprite.name === 'star')) {
		return false;
	}
	return true;
}

// And finally the method that handels the pause menu
function unpause(event){

	var w = 1200;
	var h = 1050;

	// Only act if paused
	if(game.paused){
			// Calculate the corners of the menu
			var x1 = w/2 - 270/2, x2 = w/2 + 270/2,
					y1 = h/2 - 180/2, y2 = h/2 + 180/2;

			// Check if the click was inside the menu
			if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
					
					// Display the choice
					choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
			}
			else{
					// Remove the menu and the labe
					choiseLabel.destroy();

					// Unpause the game
					game.paused = false;
			}
	}
}

// time function
function updateTime() {
	Time++;
}

function Win() {
	game.state.start('MainMenu')
}