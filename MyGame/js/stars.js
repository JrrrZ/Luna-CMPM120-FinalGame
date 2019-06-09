function Stars(game, key, scale) {
    
    Phaser.Sprite.call(this, game, game.rnd.integerInRange(370, 1000),game.rnd.integerInRange(210, 830), key);
    
    
    // set physics
    //this.enableBody = true;
	//this.physicsBodyType = Phaser.Physics.P2JS;
    this.anchor.set(0.5);
    // scale image
    this.scale.x = 0.13;
    this.scale.y = 0.13;

    //
    game.physics.p2.enable(this, false);
    this.animations.add('blink', [0,1], game.rnd.integerInRange(3, 6), true);
    this.animations.play('blink');

    this.name = 'star';
    this.body.setCircle(13.5, 1.6, 4.2);
    this.count = 1;
    this.StarinPlay1 = false;

    game.time.events.loop(Phaser.Timer.SECOND*3, updateCount, this);

}

Stars.prototype = Object.create(Phaser.Sprite.prototype);
Stars.prototype.constructor = Stars;


Stars.prototype.update = function() {

    cursors = game.input.keyboard.createCursorKeys(); //set the input as keyboard

    if(Time > 5) {
        if(this.count > 0) {
            if(game.input.keyboard.justPressed(Phaser.Keyboard.S)) {            
                this.body.setZeroVelocity();
                console.log(this.count);
                this.count -= 1;
            }
        }
    }

    // make stars fade and re-generate as going out the moon
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(468, 2)) {
        this.alpha = 0.6;
    } 
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(495, 2)) {
        this.kill();
        this.alpha = 1;
        this.reset(game.rnd.integerInRange(380, 990),game.rnd.integerInRange(220, 820))
    }

    // Play1
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(450, 2)) {
        this.StarinPlay1 = false;
    } else {
        this.StarinPlay1 = true;
    }

    // Play2
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) < Math.pow(480, 2) && Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(400, 2)) {
        this.StarinPlay2 = true;
    } else {
        this.StarinPlay2 = false;
    }

    // Play3
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) < Math.pow(480, 2) && Math.pow(768-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(380, 2)) {
        this.StarinPlay3 = true;
    } else {
        this.StarinPlay3 = false;
    }




}

function updateCount() {
	this.count++;
}
