var background;
var Time = 0;
var count;
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
var choiseLabel;
var point;
var pointer;
var mousedown;
var broomsweep;
var Loading;
var MainMenu;
var Play;
var GameOver;
var menu;

// define game
var game = new Phaser.Game(1200, 1050, Phaser.AUTO);

// add states to StateManager and start MainMenu
game.state.add('Loading', Loading);
game.state.add('MainMenu', MainMenu);
game.state.add('Play1', Play1);
game.state.add('GameOver', GameOver);
game.state.start('Loading');


