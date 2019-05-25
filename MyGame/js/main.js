var background;
var Time = 0;
var text = null;
var broomstick;
var stars;
var sweeping;
var lm;
var flowstars;
var StartWords;
var EnterWords;
var EndWords;
var SStar;
var broomsweep;
var Loading;
var MainMenu;
var Play;
var GameOver;

// define game
var game = new Phaser.Game(1200, 1050, Phaser.AUTO);

// add states to StateManager and start MainMenu
game.state.add('Loading', Loading);
game.state.add('MainMenu', MainMenu);
game.state.add('Play', Play);
game.state.add('GameOver', GameOver);
this.game.state.start('Loading');


