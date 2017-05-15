/**
 * LED control class
 *
 * * Events:
 *
 * * Functions:
 * turnOff : turn LED off
 * setColorRed : red color of LED
 * setColorGreen : green color of LED
 * setColorBlue : blue color of LED
 * setColorWhite : white color of LED
 * flashRedAndBlue : flash LED with red and blue colors
 * setColorRGB : set color of LED in RGB
 * setColorHSL : set color of LED in number betwee 0 and 359
 */
window.nexpaqAPI.module.LED = function() {
	window.nexpaqAPI.module.basic.call(this);
};
window.nexpaqAPI.module.LED.prototype = Object.assign({}, window.nexpaqAPI.module.basic.prototype, {
	/* BASIC */
	turnOff: function () {
		window.nexpaqAPI.util.sendCommand("basic", [0]);
	},

	setColorRed: function () {
		window.nexpaqAPI.util.sendCommand("basic", [2]);
	},
	setColorGreen: function () {
		window.nexpaqAPI.util.sendCommand("basic", [3]);
	},
	setColorBlue: function () {
		window.nexpaqAPI.util.sendCommand("basic", [4]);
	},
	setColorWhite: function () {
		window.nexpaqAPI.util.sendCommand("basic", [5]);
	},

	flashRedAndBlue: function () {
		window.nexpaqAPI.util.sendCommand("basic", [6]);
	},

	/* RGB */
	setColorRGB: function (R, G, B) {
		if(R < 0 || G < 0 || B < 0) return false;
		if(R > 255 || G > 255 || B > 255) return false;

		window.nexpaqAPI.util.sendCommand("rgb", [R, G, B]);
		return true;
	},

	/* HSL */
	setColorHSL: function (value) {
		if(value < 0 || value > 359) return false;
		var Z = value,
				t = Z % 256,
				max = 359,
				maxY = max - 256,
				result = [0, 0];

		if( Z <= maxY ) {
			result = [0, Z];
		} else if( Z <= 256 ) {
			result = [Z / 256, 0];
		} else {
			result = [(Z - t) / 256, t];
		}

		window.nexpaqAPI.util.sendCommand("hsl", result);
	},
	turnFlashOff: function () {
    	nexpaqAPI.util.sendCommand("flash", [0]);
	},

	turnFlashTorch: function(led1, led2) {
	    led1 = parseInt(led1);
	    led2 = parseInt(led2);
	    if(led1 < 0 || led2 < 0) return;
	    if(led1 > 9000 || led2 > 9000) return;
	    var bytes = [
	        1, // our indicator of torch command
	        (led1 >> 8) & 0xFF, // lower part
	        led1 & 0xFF, // upper part
	        (led2 >> 8) & 0xFF,
	        led2 & 0xFF
	    ];
	    nexpaqAPI.util.sendCommand("flash", bytes);
	},

	makeFlash: function(power, delay) {
	    power = parseInt(power);
	    delay = parseInt(delay);
	    if(power < 0 || power > 15) return;
	    if(delay < 0 || delay > 1280) return;
	    var bytes = [
	        2, // our indicator of flash mode
	        power, // our power is a byte value
	        (delay >> 8) & 0xFF, // lower part
	        delay & 0xFF // upper part
	    ];
	    nexpaqAPI.util.sendCommand("flash", bytes);
	}
});
window.nexpaqAPI.module.LED.prototype.constructor = window.nexpaqAPI.module.LED;
nexpaqAPI.LED = new nexpaqAPI.module.LED();
nexpaqAPI.addModuleType('LED');
