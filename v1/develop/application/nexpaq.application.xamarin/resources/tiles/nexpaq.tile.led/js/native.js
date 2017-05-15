var led_color = [255, 255, 255],
		frequency = 1,
		duration_of_blink = 500,
		blinking_timeout;

/** ================ Handlers == */
function backButtonClickHandler(e) {
	Nexpaq.API.Exit();
}

function turnLEDon(r, g, b) {
	if(!window.EmulateModule) window.nexpaqAPI.LED.setColorRGB(r, g, b);
}
function turnLEDoff() {
	if(!window.EmulateModule) window.nexpaqAPI.LED.turnOff();
}
function turnFlashOn (left,right) {
  if(!window.EmulateModule) nexpaqAPI.LED.turnFlashTorch(left,right);
}
function startBlinking() {
	if(frequency === 0) return false;

	blinkLED(led_color[0], led_color[1], led_color[2]);
	blinking_timeout = setTimeout(startBlinking, frequency*1000);
}
function stopBlinking() {
	clearTimeout(blinking_timeout);
}
function blinkLED(r, g, b) {
	$main_button.classList.add('blink');
	if(!window.EmulateModule) window.nexpaqAPI.LED.setColorRGB(r, g, b);
	setTimeout(function () {
		$main_button.classList.remove('blink');
		if(!window.EmulateModule) turnLEDoff();
	}, duration_of_blink);
}
