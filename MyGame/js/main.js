var background;
var Time = 0;
var count = 0;
var timer;
var text = null;
var broomstick;
var stars;
var CheckPlay1 = [];
var CheckPlay2 = [];
var CheckPlay3 = [];
var CheckPlay4 = [];
var win = false;
var sweeping;
var lm;
var PressD;
var PressS;
var PressQ;
var Inst;
var cnd;
var ctb;
var flowstars;
var StartWords;
var EnterWords;
var EndWords;
var SStar;
var choiseLabel;
var point = 0;
var pointer;
var mousedown;
var broomsweep;
var Loading;
var MainMenu;
var Play1;
var Play2;
var Play3;
var Play4;
var Next1;
var Next2;
var Next3;
var Next4;
var GameOver;
var Credit;
var menu;
var video;
var v;
var test;
var cm;
var ms;
var credit;
var zhb;
var n;
var df;
var ec;
var pop;
var reward;
var sad;
var debug = false;

// define game
var game = new Phaser.Game(1200, 1050, Phaser.AUTO);

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

			}
			else{
					// Remove the menu and the labe
					cm.destroy();

					// Unpause the game
					game.paused = false;
			}
	}
}

// time function
function updateTime() {
	Time++;
}
function updateCounter() {
	count++;
}

// add states to StateManager and start MainMenu
game.state.add('Loading', Loading);
game.state.add('MainMenu', MainMenu);
game.state.add('Credit', Credit);
game.state.add('Play1', Play1);
game.state.add('Play2', Play2);
game.state.add('Play3', Play3);
game.state.add('Play4', Play4);
game.state.add('N1', N1);
game.state.add('N2', N2);
game.state.add('N3', N3);
game.state.add('N4', N4);
game.state.add('GameOver', GameOver);
game.state.start('Loading');


