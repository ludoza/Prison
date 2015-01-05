'use strict';

var TwodSprite = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'twodSprite', frame);

  // initialize your prefab here
  
};

TwodSprite.prototype = Object.create(Phaser.Sprite.prototype);
TwodSprite.prototype.constructor = TwodSprite;

TwodSprite.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = TwodSprite;
