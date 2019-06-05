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

		/*button = game.add.button(200, 380, 'i', actionOnClick2, this);
		button.scale.setTo(1);
		button.animations.add('s2', [0,1,2], 3, true);
		button.animations.play('s2');*/
		Inst = game.add.sprite(220, 100, 'i');
		Inst.scale.set(0.7);
		Inst.animations.add('s2', [0,1,2], 20, true);
		Inst.animations.play('s2');

		cnd = game.add.sprite(65, 220, 'c');
		cnd.scale.set(1.05);
		cnd.animations.add('s3', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
		cnd.animations.play('s3');

		PressS = game.add.sprite(65, 320, 's');
		PressS.scale.set(1.35);
		PressS.animations.add('s4', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
		PressS.animations.play('s4');

		PressD = game.add.sprite(65, 420, 'd');
		PressD.scale.set(1.1);
		PressD.animations.add('s6', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
		PressD.animations.play('s6');

		PressQ = game.add.sprite(65, 520, 'q');
		PressQ.scale.set(1.11);
		PressQ.animations.add('s7', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
		PressQ.animations.play('s7');

		ctb = game.add.sprite(150, 650, 'ib');
		ctb.scale.set(0.8);
		ctb.animations.add('s7', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
		ctb.animations.play('s7');


		button = game.add.button(950, 560, 'moon2', actionOnClick2, this);
		button.anchor.set(0.5);
		button.scale.setTo(0.225);
		button.animations.add('s5', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 20, true);
		button.animations.play('s5');

		video = game.add.video('v');

		v = video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 1.4, 1.5);
		//v.visible = false;
    	//  true = loop
    	video.play(false);
	},
	update: function() {
		// main menu logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Play1');
		}
		if(!video.playing) {
			v.destroy();
		}
	}
}

function actionOnClick2() {
    game.state.start('Play1');
}