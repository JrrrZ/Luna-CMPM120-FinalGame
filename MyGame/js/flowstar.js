function Flowstar(game, key, scale) {
    Phaser.Sprite.call(this, game, game.rnd.integerInRange(64,game.width-64),game.rnd.integerInRange(64,game.height-64), key);
    //make sure Flowstarflakes will rotation at their center
    this.anchor.set(0.5);
    //scale image
    this.scale.x = 0.08;
    this.scale.y = 0.08;

    //give movements
    game.physics.enable(this);
    this.body.velocity.x = game.rnd.integerInRange(5, 300);
    this.body.velocity.y = game.rnd.integerInRange(5, 300);
    //set rotation
    this.body.angularVelocity = game.rnd.integerInRange(5, 100);
    //make transparent
    this.alpha = 0.8;
}

Flowstar.prototype = Object.create(Phaser.Sprite.prototype);
Flowstar.prototype.constructor = Flowstar;

Flowstar.prototype.update = function() {
    cursors = game.input.keyboard.createCursorKeys();
    // change direction of Flowstarflakes
    if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {
        this.body.velocity.x = -this.body.velocity.x;
    }
    checkEdgeBounds(this);
}

function checkEdgeBounds (flowstars) {
	// cleanly wrap objects around screen edges
	if(flowstars.x > game.width + flowstars.width) flowstars.x = 0 - flowstars.width;
	if(flowstars.x < 0 - flowstars.width) flowstars.x = game.width + flowstars.width;
	if(flowstars.y > game.height + flowstars.height) flowstars.y = 0 - flowstars.height;
	if(flowstars.y < 0 - flowstars.height) flowstars.y = game.height + flowstars.height;
}
