var AttachedTiles = {
	Events: {
		ModuleAttachedTileChanged: new NexpaqEvent('ModuleAttachedTileChanged')
	},


	addEventListener: function(eventName, callback) {
		this.Events[eventName].registerCallback(callback);
	},

	removeEventListener: function(eventName, callback) {
		this.Events[eventName].removeCallback(callback);
	},

	dispatchEvent: function(eventName, eventArgs) {
		this.Events[eventName].callbacks.forEach(function(callback){
			callback(eventArgs);
		});
	},

	setModuleTile: function(module_id, tile_id) {
		localStorage['tile-for-' + module_id] = tile_id;
		this.dispatchEvent('ModuleAttachedTileChanged', {
			module_id: module_id,
			tile_id: tile_id
		});
	},

	getModuleTile: function(module_id, default_tile) {
		default_tile = default_tile || null;
		if(typeof(localStorage['tile-for-' + module_id]) != 'undefined') {
			return localStorage['tile-for-' + module_id];
		} else {
			return default_tile;
		}
	},

	removeModuleTile: function(module_id, tile_id) {
		if(typeof(localStorage['tile-for-' + module_id]) != 'undefined') {
			localStorage.removeItem('tile-for-' + module_id);

			this.dispatchEvent('ModuleAttachedTileChanged', {
				module_id: module_id,
				tile_id: null
			});
		}
	}
}