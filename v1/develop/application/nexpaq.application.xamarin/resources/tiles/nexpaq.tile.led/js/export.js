// title: Turn LED white
function NP_white_LED () {
	window.nexpaqAPI.LED.setColorRGB(255, 255, 255);
}
// title: Turn LED red
function NP_red_LED () {
	window.nexpaqAPI.LED.setColorRGB(255, 0, 0);
}
// title: Turn LED green
function NP_green_LED () {
	window.nexpaqAPI.LED.setColorRGB(0, 255, 0);
}
// title: Turn LED blue
function NP_blue_LED () {
	window.nexpaqAPI.LED.setColorRGB(0, 0, 255);
}
// title: Flash LED red and blue
function NP_flash_red_and_blue_LED () {
	window.nexpaqAPI.LED.flashRedAndBlue();
}
// title: Turn LED off
function NP_turn_off_LED () {
	window.nexpaqAPI.LED.turnOff();
}

if(typeof JSON === "undefined") {
	@@include('../vendor/json3.min.js')
}
@@include('../js/lib/nexpaqAPI.js')

window.nexpaqAPI.emulateMode = window.EmulateModule = false;
window.nexpaqAPI.setCurrentModule("LED");
