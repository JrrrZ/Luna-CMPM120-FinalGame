function Stars(game, key, scale) {
    
    Phaser.Sprite.call(this, game, game.rnd.integerInRange(450, 930),game.rnd.integerInRange(240, 660), key);
    
    // set physics
    this.enableBody = true;
	this.physicsBodyType = Phaser.Physics.P2JS;
    this.anchor.set(0.5);
    // scale image
    this.scale.x = 0.7;
    this.scale.y = 0.7;

    //
    game.physics.p2.enable(this, false);
    this.animations.add('blink', [0,1], 5, true);
    this.animations.play('blink');
    this.body.setCircle(13.5, 1.6, 4.2);
}

Stars.prototype = Object.create(Phaser.Sprite.prototype);
Stars.prototype.constructor = Stars;

Stars.prototype.update = function() {
    
    // make stars fade and re-generate as going out the moon
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(468, 2)) {
        this.alpha = 0.4;
    } 
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(485, 2)) {
        this.kill();
        this.reset(game.rnd.integerInRange(450, 930),game.rnd.integerInRange(240, 660))
        this.alpha = 1;
    }

    // not work
    game.physics.p2.setPostBroadphaseCallback(checkVegS, this);
}

// try to delete the collision between stars
function checkVegS(body1, body2) {
    if ((body1.sprite.name === 'stars' && body2.sprite.name === 'stars') || (body2.sprite.name === 'stars' && body1.sprite.name === 'stars')) {
        return false;
    }
    return true;
}