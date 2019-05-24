function Stars(game, key, scale) {
    
    Phaser.Sprite.call(this, game, game.rnd.integerInRange(380, 990),game.rnd.integerInRange(220, 820), key);
    
    
    // set physics
    //this.enableBody = true;
	//this.physicsBodyType = Phaser.Physics.P2JS;
    this.anchor.set(0.5);
    // scale image
    this.scale.x = 0.7;
    this.scale.y = 0.7;


    //
    game.physics.p2.enable(this, false);
    this.animations.add('blink', [0,1], 3, true);
    this.animations.play('blink');

    this.name = 'star';
    this.body.setCircle(13.5, 1.6, 4.2);

}

Stars.prototype = Object.create(Phaser.Sprite.prototype);
Stars.prototype.constructor = Stars;

Stars.prototype.update = function() {
    
    // make stars fade and re-generate as going out the moon
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(468, 2)) {
        this.alpha = 0.6;
    } 
    if(Math.pow(680-this.x, 2) + Math.pow(535-this.y, 2) > Math.pow(485, 2)) {
        this.kill();
        this.reset(game.rnd.integerInRange(380, 990),game.rnd.integerInRange(220, 820))
    }
}
