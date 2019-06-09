// define Credit state and methods
Credit = function(game) {};
Credit.prototype = {
	// set Time in all states
	init: function(Time) {
		this.Time = Time;
	},
	preload: function() {
		console.log('Credit: preload');
	},
	create: function() {
		background = game.add.sprite(-160, 0, 'creditbk');
		background.scale.x = 0.6;
		background.scale.y = 0.65;

		button = game.add.button(640, 160, 'restart', actionOnClick4, this);
        button.scale.setTo(1.5);
        button.anchor.setTo(0.5);
        button.animations.add('c4', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
        button.animations.play('c4');
        
        ec = game.add.sprite(40, 940, 'ec');
		ec.animations.add('z1', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
        ec.animations.play('z1');
        ec.scale.setTo(0.55);

        df = game.add.sprite(235, 940, 'df');
		df.animations.add('z1', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
        df.animations.play('z1');
        df.scale.setTo(0.55);

        zhb = game.add.sprite(500, 940, 'zhb');
		zhb.animations.add('z1', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
        zhb.animations.play('z1');
        zhb.scale.setTo(1);

        n = game.add.sprite(780, 945, 'n');
		n.animations.add('z1', [0,1,2], 20, true);
        n.animations.play('z1');
        n.scale.setTo(0.75);
        
        //EndWords = game.add.text(18, 16, 'Press Space To Restart', { fontSize: '36px', fill: '#fff' });
        pop = game.add.audio('pop');
	},
	update: function() {
		// Credit logic
		
	}
}

function actionOnClick4() {
    pop.play('', 0, 0.6, false);
    game.state.start('MainMenu');
    lm.destroy();
}