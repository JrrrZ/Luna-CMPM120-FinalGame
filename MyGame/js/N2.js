// define N2 state and methods
N2 = function(game) {};
N2.prototype = {
	// set Time in all states
	init: function(Time) {
		this.Time = Time;
	},
	preload: function() {
		console.log('N2: preload');
	},
	create: function() {
		background = game.add.sprite(-200, 0, 'boytalk');
		background.scale.x = 0.7;
		background.scale.y = 0.7;
        
        if(point >= 20) {
            reward = game.add.sprite(150, 280, 'reward');
		    reward.scale.set(1);
		    reward.animations.add('r1', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
            reward.animations.play('r1');
        } else {
            sad = game.add.sprite(70, 280, 'sad');
		    sad.scale.set(0.95);
		    sad.animations.add('r2', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
            sad.animations.play('r2');
        }
        //EndWords = game.add.text(18, 16, 'Press Space To Restart', { fontSize: '36px', fill: '#fff' });
        game.input.onDown.add(cc2, self);
	},
	update: function() {
		// N2 logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Play3')
		}
		
	}
}

function cc2(event) {
    if(event.x > 0 && event.x < 1200 && event.y > 0 && event.y < 1050 ){
        // Display the choice
        game.state.start('Play3')
    }
}