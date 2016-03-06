var Bolt = (function() {
	'use strict';
	
	/**
	 * Create a new Bolt instance.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	function Bolt(x, y, width, height) {
		Collectible.apply(this, arguments);

		this._spriteSheet = Bolt.SPRITE_SHEET;
	}
	
	Bolt.SPRITE_SHEET = 'sprite_sheets/nut.png';
	Bolt.SIZE = 1;
	
	Bolt.prototype = Object.create(Collectible.prototype);
	
	/**
	 * Draw the bolt to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 * @override
	 */
	Bolt.prototype.draw = function (ctx, scaleFactor, screenScroll) {
		if (this.collected) {
			return;
		}
		ctx.save();
		ctx.fillStyle = ("black");
		ctx.fillRect((this.x + screenScroll) * scaleFactor, this.y * scaleFactor, Bolt.SIZE * scaleFactor, Bolt.SIZE * scaleFactor);
		ctx.restore();
	};
	
	return Bolt;
})();
