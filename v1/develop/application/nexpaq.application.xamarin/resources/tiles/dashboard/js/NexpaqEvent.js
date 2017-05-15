/* Event system */
if(typeof NexpaqEvent == "undefined") {
	// Event with name and callbacks
	window.NexpaqEvent = function(name) {
		this.name = name;
		this.callbacks = [];
	};

	// We can register callbacks for our event
	NexpaqEvent.prototype.registerCallback = function(callback){
		this.callbacks.push(callback);
	};

	// We can remove callbacks for our event
	NexpaqEvent.prototype.removeCallback = function(callback){
		var index = this.callbacks.indexOf(callback);
		if(index >= 0) {
			this.callbacks.splice(index, 1);
		}
	};
}