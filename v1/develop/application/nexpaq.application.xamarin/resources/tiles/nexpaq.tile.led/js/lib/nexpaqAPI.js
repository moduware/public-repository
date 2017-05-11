var nexpaqAPI = {
	version: "0.9.12",
	availableModules: [],//["LED", "TFCard", "Backup", "USBStick", "Speaker", "Laser", "Alcohol", "AirQ", "Battery", "HaT", "Hotkey"],
	currentModule: null,
	emulateMode: false,
	xamarinApiIsReady: false,
	outputReceived: true,
	_functionsLine: [],

	isApiAvailable: function() {
		return (typeof nxpXamarin !== "undefined" || typeof nxpAPI !== "undefined");// || typeof webkit !== "undefined");
	},
	/**
	 * Adds new module type
	 * @param  {string} name module name
	 * @return {void}
	 */
	addModuleType: function(name) {
		if(typeof name !== "string") {
			throw "Module type must be a string";
		}
		this.availableModules.push(name);
	},
	addModuleTypes: function(array_of_names) {
		for(var i=0; i<array_of_names.length; i++) {
			this.addModuleType(array_of_names[i]);
		}
	},
	/**
	 * Checks if module available to be set and controlled
	 * @param  {string} name type of module
	 * @return {bool}      check result
	 */
	hasModuleType: function(name) {
		if(typeof name !== "string") {
			throw "Module type must be a string";
		}
		return this.availableModules.contains("name");
	},
	/**
	 * Sets the current module API is working with, this is required to be done before using htee API
	 * @param {string} name module name
	 * @return {void}
	 */
	setCurrentModule: function (name) {
		if(!this.availableModules.contains(name)) {
			throw "Unknown module type";
		}
		this.currentModule = name;
		if(typeof document !== "undefined") {
			document.addEventListener("DOMContentLoaded", function(event) {
				nexpaqAPI.header.show();
			});
		}

		this._showLibraryInfo();
	},
	enableMultiModuleMode: function() {
		nexpaqAPI.global.gateways = [];
		nexpaqAPI.global.modules = [];
		nexpaqAPI.util.callNativeFunction('enableMultiMod');
	},
	detectCurrentPlatform : function() {
		var platform = (function getMobileOperatingSystem() {
  		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // Windows Phone must come first because its UA also contains "Android"
   	  if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    	}

   	  if (/android/i.test(userAgent)) {
        return "Android";
   	  }

    	// iOS detection from: http://stackoverflow.com/a/9039885/177710
    	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    	}

   		return "unknown";
		})();
		document.body.classList.add('platform-' + platform.toLowerCase());
		console.log("platform is: " + platform);
	},
	/**
	 * Outputing library info to console, private
	 * @return {void}
	 */
	_showLibraryInfo: function() {
		console.log("nexpaqAPI: version " + this.version);
		console.log("nexpaqAPI: module " + this.currentModule);
		console.log("tip: you can disable output of recieved data with this command - \"nexpaqAPI.outputReceived = false;\"");
		if(this.emulateMode) {
			console.log("nexpaqAPI: emulating mode");
		}
	},
	/**
	 * Receives data from native application and delivers it to the current module
	 * @param  {array} data array of integers
	 * @return {void}
	 */
	_receiveData: function (data) {
		if(this.outputReceived) console.log(data);
		if(nexpaqAPI.currentModule === null) {
			throw "Current module is not set";
		}

		var decodedData = JSON.parse(data);
		nexpaqAPI[nexpaqAPI.currentModule].receive(decodedData);
	},
	/**
	 * Receives events defined in app, and functions defined in all apps
	 * @param  {json string} data [object with functions and events]
	 * @return {void}
	 */
	_receiveEvents: function (data) {
		var decodedData = JSON.parse(data),
				functions_list = [],
				i;

		nexpaqAPI.global.functions=[];

		for(var i=0; i < decodedData.functions.length; i++) {
			functions_list.push(decodedData.functions[i].name);
			// may be it will be better to make a tree by device property? :-\, not sure
			nexpaqAPI.global.functions.push({
				'title' : (typeof decodedData.functions[i].title === 'undefined') ? decodedData.functions[i].name : decodedData.functions[i].title,
				'name' : decodedData.functions[i].name,
				'device' : decodedData.functions[i].UUID
			});
		}

		if(decodedData.events === "") decodedData.events = [];

		for(var i=0; i < decodedData.events.length; i++) {
			// we need provide event title functionality somehow
			var event_object={
				'title' : decodedData.events[i].event,
				'name' : decodedData.events[i].event
			};
			if(functions_list.contains(decodedData.events[i].function)) {
				event_object.function = decodedData.events[i].function;
				event_object.devices = decodedData.events[i].UUID;
			}
			nexpaqAPI[nexpaqAPI.currentModule].events[event_object.name] = event_object;
		}

		for(var i=0; i < nexpaqAPI.global.onEventsReceived.length; i++) {
			nexpaqAPI.global.onEventsReceived[i](nexpaqAPI[nexpaqAPI.currentModule].events);
		}
	},
	/**
	 * Sends events to native
	 * @return {void}
	 */
	_updateEvents: function() {
		var events = [],
				module = nexpaqAPI.currentModule;

		for(var i in nexpaqAPI[module].events) {
			events.push({
				'event' : nexpaqAPI[module].events[i].name,
				'function' : nexpaqAPI[module].events[i].function,
				'UUID' : nexpaqAPI[module].events[i].devices
			});
		}
		var events_json = JSON.stringify(events);
		nexpaqAPI.util.callNativeFunction('ConfigEvents', events_json);
	},
	/**
	 * Informs JS API that page is ready
	 * @return {void}
	 */
	_pageReady: function() {
		nexpaqAPI.util.callNativeFunction('pageReady');
	},
	_xamarinApiReadyActions: function() {
		if(nexpaqAPI.xamarinApiIsReady) return;
		if(typeof Native !== 'undefined' && Native !== null && (typeof Xamarin !== 'undefined' || typeof window.webkit.messageHandlers.native.postMessage !== undefined)) {
			clearInterval(nexpaqAPI.api_check_interval);

			nexpaqAPI.xamarinApiIsReady = true;
			nexpaqAPI._executeFunctionsLine();

			nexpaqAPI.util.triggerEvent("global", "onApiReady");
		}
	},

	/**
	 * Perform actions when xamarin api is ready
	 * @return {void}
	 */
	_xamarinApiReady: function() {
		// don't trust the app! let's do our own check..
		nexpaqAPI.api_check_interval = setInterval(nexpaqAPI._xamarinApiReadyActions, 200);
		nexpaqAPI._xamarinApiReadyActions();

	},

	/**
	 * Execute functions that was save to que, because api wasn't ready
	 * @return {void}
	 */
	_executeFunctionsLine: function() {
		var functions = nexpaqAPI._functionsLine.slice();
		nexpaqAPI._functionsLine = [];

		for(var i=0; i<functions.length; i++) {
			nexpaqAPI.util.callNativeFunction(functions[i][0], functions[i][1]);
		}
	},
	/**
	 * Informs code running in background that module was connected
	 * @param {string} type_id [id of the module]
	 * @param {string} uuid [uuid of the connected module]
	 * @return {void}
	 */
	_moduleConnected: function(type_id, uuid) {
		// TODO: idealy must be delivered to target module, but now we will deliver message to currentModule
		nexpaqAPI[nexpaqAPI.currentModule].triggerEvent('onModuleConnected', uuid);
	},
	/**
	 * Informs code running in background that module was disconnected
	 * @param {string} type_id [id of the module]
	 * @param {string} uuid [uuid of the disconnected module]
	 * @return {void}
	 */
	_moduleDisconnected: function(type_id, uuid) {
		// TODO: idealy must be delivered to target module, but now we will deliver message to currentModule
		nexpaqAPI[nexpaqAPI.currentModule].triggerEvent('onModuleDisconnected', uuid);
	},
	/**
	 * Informs code running in background that it need perform interval specific actions
	 * @param {string} name [intrval name]
	 * @return {void}
	 */
	_intervalCalled: function(name) {
		nexpaqAPI[nexpaqAPI.currentModule].triggerEvent('onIntervalCalled', name);
	},
	/**
	 * Object to control universal header
	 */
	header: {
		root: (typeof document != 'undefined' && typeof document.body != 'undefined') ? document.body : null,
		node: null,
		title: '',
		_titleArray: [],

		/**
		 * Show header
		 * @param {string} title [title to be shown in header]
		 * @return {void}
		 */
		show: function(title) {
			if(this.root == null) {
				if(typeof document != 'undefined' && typeof document.body != 'undefined') {
					this.root = document.body;
				} else {
					return;
				}
			}
			if(title == null) title = nexpaqAPI.currentModule;
			if(document.getElementById('nexpaq-header') == null) {
				nexpaqAPI.header.node = document.createElement('div');
				nexpaqAPI.header.node.id = 'nexpaq-header';
				nexpaqAPI.header.node.innerHTML = nxp_header_html;
				nexpaqAPI.header.title = title;
				nexpaqAPI.header.node.children[0].textContent = title;
				nexpaqAPI.header.node.children[1].addEventListener('click', clickBack);
				this.root.insertBefore(nexpaqAPI.header.node, null);

				var header_style = document.createElement('style');
				header_style.appendChild(document.createTextNode(""));
				header_style.textContent = nxp_header_css;
				document.head.appendChild(header_style);
			}
			nexpaqAPI.header.node.classList.remove('nxp-hidden');
		},
		/**
		 * Hide header
		 * @return {void}
		 */
		hide: function() {
			if(nexpaqAPI.header.node !== null) nexpaqAPI.header.node.classList.add('nxp-hidden');
		},
		/**
		 * Completely reset header
		 * @return {void}
		 */
		reset: function() {
			if(nexpaqAPI.header.node !== null) {
				nexpaqAPI.header.node.parentNode.removeChild(nexpaqAPI.header.node);
			}
			nexpaqAPI.header.show(nexpaqAPI.header.title);
		},
		/**
		 * Change title of header
		 * @param {string} title [title to be shown in header]
		 * @return {void}
		 */
		setTitle: function(title) {
			if(typeof title === "object") {
				this.titleArray = title.items;
				this.title = this.titleArray[title.current];
				nexpaqAPI.header.node.classList.add('multi-title');
				$nxp_header_titles = document.getElementById('nxp-header-titles');
				$nxp_header_titles.innerHTML = '';
				for(var i=0; i< this.titleArray.length; i++) {
					var new_title = document.createElement('li');
					new_title.textContent = this.titleArray[i];
					new_title.addEventListener('click', nexpaqAPI.header._titleItemClickHandler);
					$nxp_header_titles.insertBefore(new_title, null);
				}
			} else {
				nexpaqAPI.header.node.classList.remove('multi-title');
				nexpaqAPI.header.title = title;
				nexpaqAPI.header.node.children[0].removeEventListener('click', nexpaqAPI.header._titleClickHandler);
			}
			nexpaqAPI.header.node.children[0].addEventListener('click', nexpaqAPI.header._titleClickHandler);
			if(nexpaqAPI.header.node !== null) nexpaqAPI.header.node.children[0].innerHTML = this.title;
		},
		_titleClickHandler: function(e) {
			if(nexpaqAPI.header.node.classList.contains('multi-title')) nexpaqAPI.header.node.classList.toggle('title-selecting');
			nexpaqAPI.global.triggerEvent('onHeaderTitleClicked');
		},
		_titleItemClickHandler: function(e) {
			nexpaqAPI.header.title = this.textContent;
			nexpaqAPI.header.node.children[0].textContent = this.textContent;
			nexpaqAPI.header.node.classList.remove('title-selecting');
			nexpaqAPI.util.triggerEvent('global', 'onHeaderTitleChanged', [this.textContent]);
		},
		/**
		 * Show title of header
		 * @return {void}
		 */
		showTitle: function() {
			if(nexpaqAPI.header.node !== null) nexpaqAPI.header.node.children[0].classList.remove('nxp-hidden');
		},
		/**
		 * Hide title of header
		 * @return {void}
		 */
		hideTitle: function() {
			if(nexpaqAPI.header.node !== null) nexpaqAPI.header.node.children[0].classList.add('nxp-hidden');
		},
		/**
		 * Show shadow of header
		 * @return {void}
		 */
		showShadow: function() {
			if(nexpaqAPI.header.node !== null) nexpaqAPI.header.node.classList.remove('nxp-no-shadow');
		},
		/**
		 * Hide shadow of header
		 * @return {void}
		 */
		hideShadow: function() {
			if(nexpaqAPI.header.node !== null) nexpaqAPI.header.node.classList.add('nxp-no-shadow');
		},
		/**
		 * Make buttons of header untappable
		 * @return {void}
		 */
		disableButtons: function() {
			if(nexpaqAPI.header.node !== null) document.getElementById('nxp-buttons-container').classList.add('nxp-buttons-container--disabled');
		},
		/**
		 * Enable buttons of header back and make them tappable
		 * @return {void}
		 */
		enableButtons: function() {
			if(nexpaqAPI.header.node !== null) document.getElementById('nxp-buttons-container').classList.remove('nxp-buttons-container--disabled');
		},
		/**
		 * Remeve all buttons from header
		 * @return {void}
		 */
		cleanButtons: function() {
			if(nexpaqAPI.header.node !== null) document.getElementById('nxp-buttons-container').innerHTML = '';
		},
		/**
		 * Add new button to header
		 * @param {string} settings [can be a simple url to icon image]
		 * @param {object} settings [or an object with optional fields title and image]
		 * @param {function} handler [js function to handle button tap event]
		 * @return {void}
		 */
		addButton: function(settings, handler) {
			if(nexpaqAPI.header.node == null) return;
			if(typeof settings === "object") {
				if(typeof settings.title !== "undefined") var text = settings.title;
				if(typeof settings.image !== "undefined") {
					var icon = settings.image;
				} else {
					var icon = null;
				}
			} else {
				var icon = settings;
			}

			var button_node = document.createElement('button'),
					img_node = document.createElement('img');
			if(icon != null) img_node.src = icon;
			if(typeof settings === 'object') {
				if(settings.width != null) img_node.width = settings.width;
				if(settings.height != null) img_node.height = settings.height;
				if(settings.id != null) button_node.id = settings.id;
			}
			if(typeof text != "undefined") {
				button_node.textContent = text;
			}
			if(typeof settings === 'object' && settings.number != null) {
				var div = document.createElement('div');
				div.classList.add('nxp-button-number');
				var number = parseInt(settings.number);
				div.textContent = number == 0 ? '' : number;
				button_node.insertBefore(div, null);
			}
			button_node.addEventListener('click', handler);
			if(icon != null) button_node.insertBefore(img_node, null);
			document.getElementById('nxp-buttons-container').insertBefore(button_node, null);
		},
		/**
		 * Add new button to header
		 * @param {string} id [id of button, can be set during button creation]
		 * @param {int} number [number to show for button, 0 is hidden]
		 * @return {void}
		 */
		setButtonNumber: function(id, number) {
			var number = parseInt(number);
			number = number == 0 ? '' : number;
			document.getElementById(id).children[0].textContent = number;
		},
		/**
		 * Make back button invisible
		 * @return {void}
		 */
		hideBackButton: function() {
			if(nexpaqAPI.header.node == null) return;
			nexpaqAPI.header.node.classList.add('nxp-back-button-hidden');
			document.getElementById('nxp-button-back').classList.add('nxp-hidden');
		},
		/**
		 * Make back button visible
		 * @return {void}
		 */
		showBackButton: function() {
			if(nexpaqAPI.header.node == null) return;
			nexpaqAPI.header.node.classList.remove('nxp-back-button-hidden');
			document.getElementById('nxp-button-back').classList.remove('nxp-hidden');
		},
		/**
		 * Set custom icon for back button
		 * @param {string} icon [url of icon to be used instead of default icon]
		 * @return {void}
		 */
		setBackButtonIcon: function(icon) {
			if(nexpaqAPI.header.node == null) return;
			var $back_button = document.getElementById('nxp-button-back'),
					img_node = document.createElement('img');
			img_node.src = icon;

			$back_button.innerHTML = '';
			$back_button.insertBefore(img_node, null);
		},
		/**
		* @param {object} {
			color: {string},
			backgroundColor: {string},
			opacity: {number} (0.0-1.0),
			borderBottom(box-shadow): {string},
			iconColor: {string}
		}
		*/
		customize: function(data) {
			if(nexpaqAPI.header.node == null) return;
			if(typeof data !== "object") {
				throw "Data must be an object";
			} else {
				if(data.hasOwnProperty('color')) {
					if(typeof data.color !== "string") {throw "Color has to be string."}
					document.getElementById('nexpaq-header').style.color = data.color;
				}
				if(data.hasOwnProperty('backgroundColor')) {
					if(typeof data.backgroundColor !== "string") {throw "Background color has to be string."}
					document.getElementById('nexpaq-header').style.backgroundColor = data.backgroundColor;
				}
				if(data.hasOwnProperty('opacity')) {
					if(typeof data.opacity !== "number" || data.opacity < 0.0 || data.opacity > 1.0) {throw "Opacity has to be number and needs to be between 0.0 - 1.0"};
					document.getElementById('nexpaq-header').style.opacity = data.opacity;
				}
				if(data.hasOwnProperty('borderBottom')) {
					if(typeof data.borderBottom !== "string") {throw "Border-bottom has to be string."}
					document.querySelector("#nexpaq-header:not(.nxp-no-shadow)").style.boxShadow = data.borderBottom;
				}
				if(data.hasOwnProperty('iconColor')) {
					if(typeof data.iconColor !== "string") {throw "Icon color has to be string."}
					if (document.getElementsByTagName('body')[0].classList.contains("platform-android")) {
						document.querySelector('.nxp-svg-shape').setAttribute("fill",data.iconColor);
					}
					if (document.getElementsByTagName('body')[0].classList.contains("platform-ios")) {
						document.getElementById("Combined-Shape").setAttribute("fill",data.iconColor);
					}
				}
			}
		}
	},

	util: {
		/**
		 * Calls native function from available API
		 * @param {string} func [name of function]
		 * @param {string} func [json stringified argument for function]
		 * @param {object} func [object with arguments for function]
		 * @return {void}
		 */
		callNativeFunction: function (func, content) {
			if(typeof func !== "string") throw "Function must be a string";
			if( content == null ) content = "";
			// For simple one string arguments
			if(typeof content !== "string") {
				var data = JSON.stringify(content);
			} else {
				var data = content;
			}

			// Xamarin JS API has delay before it start working
			if(!nexpaqAPI.isApiAvailable() || (typeof nxpXamarin !=="undefined" && !nexpaqAPI.xamarinApiIsReady)) {
				nexpaqAPI._functionsLine.push([func, content]);
				return;
			} else {
				nexpaqAPI._executeFunctionsLine();
			}

			try {
				// Xamarin
				if(typeof Native !== 'undefined') {
					Native(func, data);
				// iOS
				} else if(typeof window.webkit !== "undefined") {
					// iOS use other name for onControl
					if(func == "onControl") {
						window.webkit.messageHandlers.AppModel.postMessage({body: data});
					} else {
						window.webkit.messageHandlers[func].postMessage(data);
					}
				// Android
				} else if(typeof nxpAPI !== "undefined") {
					nxpAPI[func]( data );
				// Rhino JS Engine
				} else if(typeof java !== "undefined") {
					var rhinoAPI = java.lang.Class.forName("com.nexpack.nexpaq.HomeFragment", true, javaLoader),
							rhinoFunc = rhinoAPI.getMethod(func, [java.lang.String]);
					rhinoFunc.invoke(null , data);
				// WTF ?!
				} else {
					throw "Unknow JS API type";
				}
			} catch(e) {
				if( typeof onNxpAppError !== "undefined" ) onNxpAppError(e, "nexpaqAPI.js", "", "", "");
			}
		},
		/**
		 * Sends a command to native application
		 * @param  {string} command command name
		 * @param  {array} options array of integers
		 */
		sendCommand: function (command, options) {
			if(typeof command !== "string") {
				throw "Command must be a string";
			}
			if(!Array.isArray(options)) {
				throw "Options must be an array";
			}
			nexpaqAPI.util.callNativeFunction('onControl', {Name: command, Param: options});
		},
		/**
		 * Sends a command to native application for specific module
		 * @param  {string} uuid target module uuid
		 * @param  {string} command command name
		 * @param  {array} options array of integers
		 */
		sendCommandToModule: function (uuid, command, options) {
			if(typeof uuid !== "string") {
				throw "UUID must be a string";
			}
			if(typeof command !== "string") {
				throw "Command must be a string";
			}
			if(!Array.isArray(options)) {
				throw "Options must be an array";
			}
			nexpaqAPI.util.callNativeFunction('sendCommandToModule', {
				uuid: uuid,
				command: {Name: command, Param: options}
			});
		},
		saveDataset : function (name,params,callback,error) {
			var endpoint = "/dataset/" + name;
			this.cloudRequest(endpoint, "POST",params,callback,error);
		},
		getDataset : function (name,callback,error) {
			var endpoint = "/dataset/" + name;
			this.cloudRequest(endpoint, "GET",null,callback,error);
		},
		cloudRequest: function (endpoint, method, params, callback, error) {
			if(typeof endpoint === 'undefined') {
				throw "endpoint and method must be defined";
			}
			var url = 'http://api.nexpaq.com' + endpoint;

			this.networkRequest(url, method, params, callback, error);
		},
		repositoryRequest: function(path, callback, error) {
			if(typeof path === 'undefined') {
				throw "path must be defined";
			}
			var url = 'http://repository.nexpaq.com' + path;

			this.networkRequest(url, 'GET', null, function(json) {
				var data = JSON.parse(json);
				callback(data);
			}, error);
		},
		networkRequest: function (url, method, params, callback, error) {
			if(typeof url === 'undefined') {
				throw "url and method must be defined";
			}
			if(typeof method === 'undefined') method = 'GET';
			params = params || {};

			var http = new XMLHttpRequest();
			params = this._encodeQueryData(params);

			http.open(method.toUpperCase(), url, true);

			//Send the proper header information along with the request
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			http.onreadystatechange = function() {//Call a function when the state changes.
			    if(http.readyState == 4) {
						if(http.status == 200) {
							console.log('Network response: ', http.responseText);
							if(callback != null) callback(http.responseText);
						} else {
							console.log('Network error: ', http.responseText);
							if(error != null) error(http.responseText);
						}
					}
			}
			http.send(params);
		},
		_encodeQueryData: function(data) {
		   var ret = [];
		   for (var d in data)
		     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
		   return ret.join('&');
		},

		saveData: function (name, value, time, location, tags) {
			throw "this function was removed";
		},
		sendDataQuery: function(name, options) {
			throw "this function was removed";
		},
		sendGlobalDataQuery: function(name, options) {
			throw "this function was removed";
		},

		/**
		 * Save string of data to Native app
		 * @param  {string} id    id for that data string
		 * @param  {string} data	data to be saved
		 * @return {void}
		 */
		saveDataString: function(id, data) {
			if(typeof id === "undefined") throw "id must be defined";
			if(typeof data === "undefined") throw "data must be defined";

			var data = [
				{
					"id": id,
					"data": data
				}
			];

			nexpaqAPI.util.callNativeFunction('saveDataStrings', data);
		},

		/**
		 * Save string of data to Native app
		 * @param  {string} data	data to be saved
		 * @return {void}
		 */
		saveDataStrings: function(data) {
			nexpaqAPI.util.callNativeFunction('saveDataStrings', data);
		},

		/**
		 * Request data strings from Native app
		 * @param  {array} ids	array of data id to retrieve
		 * @return {void}
		 */
		requestDataStrings: function(ids) {
			nexpaqAPI.util.callNativeFunction('requestDataStrings', ids);
		},

		/**
		 * Request device location from user device
		 * @return {void}
		 */
		sendLocationRequest: function() {
			nexpaqAPI.util.callNativeFunction('requestCurrentLocation');
		},

		/**
		 * Adding event handler to module
		 * @param {string} module     module to set event on
		 * @param {string} event_name event name
		 * @param {string} func       function name to call on event
		 */
		addEventListener: function (module, event_name, func) {
			if(typeof nexpaqAPI[module] === "undefined") {
				throw "Module object does not exists";
			}
			if(typeof nexpaqAPI[module][event_name] === "undefined") {
				throw "Unknown event";
			}

			nexpaqAPI[module][event_name].push(func);
		},
		/**
		 * Triggers library event
		 * @param  {string} module     module to trigger event on
		 * @param  {string} event_name event name
		 * @param  {array} args       array of arguments to pass to the event handlers
		 * @return {void}
		 */
 		triggerEvent: function (module, event_name, args) {
			for(i in nexpaqAPI[module][event_name]) {
				nexpaqAPI[module][event_name][i].apply(nexpaqAPI[module], args);
			}
		},

		/**
		 * Defines new event inside module, can not be used to redefine event
		 * @param {string} module      module to add event
		 * @param {string} event_title title of event
		 * @param {string} event_name  name of event
		 */
		addNativeEvent: function (module, event_title, event_name) {
			if(typeof nexpaqAPI[module] === "undefined") {
				throw "Module object does not exists";
			}
			if(typeof nexpaqAPI[module].events[event_name] !== "undefined") {
				throw "Native event already defined";
			}
			nexpaqAPI[module].events[event_name] = {
				'title' : event_title,
				'name' : event_name
			};
		},

		/**
		 * Bind function of one or more devices to some event
		 * @param {string} module        module we are working with
		 * @param {string} event_name    name of event
		 * @param {string} function_name name of function
		 * @param {array of strings} devices       UUIDs if devices
		 */
		addNativeEventListener: function (module, event_name, function_name, devices) {
			if(typeof nexpaqAPI[module] === "undefined") {
				throw "Module object does not exists";
			}
			if(typeof nexpaqAPI[module].events[event_name] === "undefined") {
				throw "Native event does not exists";
			}

			nexpaqAPI[module].events[event_name].function = function_name;
			nexpaqAPI[module].events[event_name].devices = devices;

			nexpaqAPI._updateEvents();
		},


		/**
		 * Calling event from native app, if some function binded to it, this function will be executed
		 * @param  {string} event_name [name of event to call]
		 */
		triggerNativeEvent: function (event_name) {
			if(nexpaqAPI.emulateMode) return;
			nexpaqAPI.util.callNativeFunction('callNativeEvent', event_name);
		},

		/**
		 * Share some data with or without image
		 * @param  {string} text text to share
		 * @param  {string} image base64 encoded image
		 */
		shareData: function (text, image) {
			if(text == null) throw "text must be a string";

			var json = {text: text};
			if(image !== null) json['image'] = image;
			nexpaqAPI.util.callNativeFunction('requestDataSharing', json);
		},

		/**
		 * Share some data for tile update
		 * @param  {object} data [for tile update]
		 */
		updateTile: function(data) {
			if(data == null) throw "data must be defined";

			nexpaqAPI.util.callNativeFunction('updateTile', data);
		},

		/**
		 * Creates interval to execute code in background
		 * @param  {string} name [name for interval]
		 * @param  {int} interval [time in miliseconds]
		 * @param  {bool} once [run this interval only once]
		 */
		setInterval: function(name, interval, once) {
			if(name == null) throw "name must be defined";
			if(interval == null) throw "interval must be defined";
			if(once == null) once = false;

			var settings = {
				name: name,
				interval: interval,
				once: once
			};
			nexpaqAPI.util.callNativeFunction('setInterval', settings);
		},
		/**
		 * Stop execution of interval
		 * @param  {string} name [name of interval]
		 */
		clearInterval: function(name) {
			if(name == null) throw "name must be defined";

			nexpaqAPI.util.callNativeFunction('clearInterval', name);
		},
		/**
		 * Send user a native alert
		 * @param  {string} title [title for the alert]
		 * @param  {string} message [message of the alert]
		 * @param  {string} button [button text for the alert]
		 */
		alert: function(title, message, button) {
			if(title == null || message == null) {
				throw "title and message must be defined";
			}
			if(button == null) button = "Ok";

			var data = {
				title: title,
				message: message,
				first_button: button
			};
			nexpaqAPI.util.callNativeFunction('alertUser', data);
		},
		/**
		 * Send user a native confirmation dialog
		 * @param  {string} title [title for the alert]
		 * @param  {string} message [message of the alert]
		 * @param  {string} first_button [button text for the first button]
		 * @param  {string} second_button [button text for the second button]
		 */
		confirm: function(title, message, first_button, second_button) {
			if(title == null || message == null) {
				throw "title and message must be defined";
			}
			if(first_button == null) first_button = "Ok";
			if(second_button == null) second_button = "Cancel";

			var data = {
				title: title,
				message: message,
				first_button: first_button,
				second_button: second_button
			};
			nexpaqAPI.util.callNativeFunction('alertUser', data);
		},
		/**
		 * Request picture from user
		 * @param  {string} key [key to recognise picture when it will be received from user]
		 */
		requestPicture: function(key) {
			if(key == null) throw 'key must be defined!';
			nexpaqAPI.util.callNativeFunction('requestPicture', key);
		},
		/**
		 * Send notification to user (will be shown in notifications screen of app)
		 * @param  {string} name [name of notification]
		 * @param  {string} content [content of notification]
		 * @param  {string} icon [icon url of notification]
		 * @param  {bool} checkOnClick [need to be clicked to be marked as checked]
		 * @param  {string} action [type of action to be execute on click, update-module\update-tile\etc]
		 * @param  {object} actionArguments [object with arguments for onclick action]
		 */
		sendNotification: function(name, content, icon, checkOnClick, action, actionArguments) {
			if(name == null) throw "name must be defined";
			var json = {
				name: name
			}
			if(content !== null) json.content = content;
			if(icon !== null) json.icon = icon;
			if(action !== null) json.action = action;
			if(actionArguments !== null) {
				if(!Array.isArray(action)) throw 'actionArguments must be an array!';
				json.actionArguments = actionArguments;
			}
			if(checkOnClick !== null) json.checkOnClick = checkOnClick;
			nexpaqAPI.util.callNativeFunction('sendNotification', json);
		},
		/**
		 * Closing current application
		 */
		closeApplication: function () {
			nexpaqAPI.util.sendCommand('close', []);
		}
	}
};

nexpaqAPI.module = {};


/**
 * Basic control class
 *
 * * Functions:
 * addEventListener : setup software event listener
 * addNativeEvent : defines new native event
 * addNativeEventListener : binds native event with event listener
 */
nexpaqAPI.module.basic = function() {
	// constructor
};
nexpaqAPI.module.basic.prototype = {
	events: {},
	onModuleConnected: [],
	onModuleDisconnected: [],
	onIntervalCalled: [],

	/**
	 * We are not handling any received data in basic class
	 * @param  {object} data [data received from module]
	 */
	receive: function (data) {},
	/**
	 * Adding event listener to some event defined in out module control object
	 * @param  {string} event_name [name of event to add listener to]
	 * @param  {function} func [listener function]
	 */
	addEventListener: function(event_name, func) {
		nexpaqAPI.util.addEventListener(nexpaqAPI.currentModule, event_name, func);
	},
	/**
	 * Fire one of defined events
	 * @param  {string} event_name [name of event to trigger]
	 */
	triggerEvent: function(event_name) {
		var args = Array.from(arguments);
		args.shift();
		nexpaqAPI.util.triggerEvent(nexpaqAPI.currentModule, event_name, args);
	},
	/**
	 * Trigger one of defined native events
	 * @param  {string} event_name [name of native event to trigger]
	 */
	triggerNativeEvent: function(event_name) {
		nexpaqAPI.util.triggerNativeEvent(event_name);
	},
	/**
	 * Create new native event
	 * @param  {string} event_title [title of event, will be shown in interface]
	 * @param  {string} event_name [name of event]
	 */
	addNativeEvent: function(event_title, event_name) {
		nexpaqAPI.util.addNativeEvent(nexpaqAPI.currentModule, event_title, event_name);
	},
	/**
	 * Set listener for native event
	 * @param  {string} event_name [name of event]
	 * @param  {string} function_name [name of exported function to listed for event]
	 * @param  {array} devices [array of uuids that export the function to be called]
	 */
	addNativeEventListener: function(event_name, function_name, devices) {
		nexpaqAPI.util.addNativeEventListener(nexpaqAPI.currentModule, event_name, function_name, devices);
	}
};

/* Object.assign polyfill */
if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}
/* End of Object.assign polyfill */

/**
 * Global controls object
 *
 * * Events:
 * onChargeValueUpdated() : when charge value in percentages updates
 * onBackButtonClicked() : when back button clicked
 * onSocialButtonClicked() : when social button clicked
 */
nexpaqAPI.module.global = function() {
	nexpaqAPI.module.basic.call(this);
};
nexpaqAPI.module.global.prototype = Object.assign({}, nexpaqAPI.module.basic.prototype, {
	chargeValue: null,
	functions: [],
	gateways: [],
	modules: [],

	onChargeValueUpdated: [],
	onBackButtonClicked: [],
	onSocialButtonClicked: [],
	onEventsReceived: [],
	onDataLoaded: [],
	onDataStringsReceived: [],
	onLocationReceived: [],
	onApiReady: [],
	onUserAlertResultReceived: [],
	// TODO: this must be in header object inhereted from basic class
	onHeaderTitleChanged: [],
	onHeaderTitleClicked: [],
	onPictureUploaded: [],

	onGatewayConnected: [],
	onModuleConnected: [],

	/* override */
	addEventListener: function(event_name, func) {
		nexpaqAPI.util.addEventListener('global', event_name, func);
	},
	triggerEvent: function(event_name) {
		var args = Array.from(arguments);
		args.shift();
		nexpaqAPI.util.triggerEvent('global', event_name, args);
	},

	_updateCharge: function (value) {
		if(value !== this.chargeValue) {
			this.chargeValue = value;
		}
		this.triggerEvent("onChargeValueUpdated", this.chargeValue);
	},
	_clickBackButton: function() {
		if(nexpaqAPI.global.onBackButtonClicked.length > 0) {
			this.triggerEvent("onBackButtonClicked");
		} else {
			nexpaqAPI.util.closeApplication();
		}
	},
	_clickSocialButton: function() {
		this.triggerEvent("onSocialButtonClicked");
	},
	_dataLoaded: function(json) {
		var data = JSON.parse(json);

		this.triggerEvent("onDataLoaded", data);
	},
	_dataStringsReceived: function(json) {
		var data = JSON.parse(json);

		this.triggerEvent("onDataStringsReceived", data);
	},
	_locationReceived: function(json) {
		var data = JSON.parse(json);

		this.triggerEvent("onLocationReceived", data);
	},
	_userAlertResultReceived: function(result) {
		this.triggerEvent("onUserAlertResultReceived", result);
	},
	_pictureUploaded: function (json) {
		var picture = JSON.parse(json);
		this.triggerEvent('onPictureUploaded', picture);
	},
	_gatewayConnected: function (json) {
		var gateway = JSON.parse(json);
		var gatewayIndex = -1;
		for(var i=0; i<this.gateways.length; i++) {
			if(this.gateways[i].uuid == gateway.uuid) {
				gatewayIndex = i;
				break;
			}
		}
		if(gatewayIndex == -1) {
			this.gateways.push(gateway);
			this.triggerEvent('onGatewayConnected', gateway);
		}
	},
	_moduleConnected: function (json) {
		var module = JSON.parse(json);
		var moduleIndex = -1;
		for(var i=0; i<this.modules.length; i++) {
			if(this.modules[i].productUUID == module.productUUID) {
				moduleIndex = i;
				break;
			}
		}
		if(moduleIndex == -1) {
			this.modules.push(module);
			this.triggerEvent('onModuleConnected', module);
		}
	}
});
nexpaqAPI.module.global.prototype.constructor = nexpaqAPI.module.global;
nexpaqAPI.global = new nexpaqAPI.module.global();


/* =========== LOW LEVEL FUNCTIONS */
function receiveFromNative(content) {
	nexpaqAPI._receiveData(content);
}
function receiveDataFromCloud(json) {
	nexpaqAPI.global._dataLoaded(json);
}
function nxp_DataStringReceived(json) {
	nexpaqAPI.global._dataStringsReceived(json);
}
function receiveLocationData(json) {
	nexpaqAPI.global._locationReceived(json);
}
function nxp_receiveEventsTableFromNative(table) {
	nexpaqAPI._receiveEvents(table);
}
function nxp_moduleConnected(type_id, uuid) {
	nexpaqAPI._moduleConnected(type_id, uuid);
}
function nxp_moduleDisconnected(type_id, uuid) {
	nexpaqAPI._moduleDisconnected(type_id, uuid);
}
function nxp_intervalCalled(name) {
	nexpaqAPI._intervalCalled(name);
}
function nxp_APIisReady() {
	// We cannot rely on it, must be removed from specification
	//nexpaqAPI._apiReady();
}
function nxp_userAlertResult(result) {
	nexpaqAPI.global._userAlertResultReceived(result);
}
function nxp_XamarinApiReady() {
	nexpaqAPI._xamarinApiReady();
}
function nxp_pictureUploaded(json) {
	nexpaqAPI.global._pictureUploaded(json);
}
function clickBack() {
	nexpaqAPI.global._clickBackButton();
}
function clickSocial() {
	nexpaqAPI.global._clickSocialButton();
	if(nexpaqAPI.emulateMode) onNxpAppError("social button clicked", "", "", "", "");
}
function chargeValue(num) {
	nexpaqAPI.global._updateCharge(num);
	if(nexpaqAPI.emulateMode) onNxpAppError("phone charge "+num, "", "", "", "");
}
function nxp_MM_gatewayConnected(json) {
	nexpaqAPI.global._gatewayConnected(json);
}
function nxp_MM_moduleConnected(json) {
	nexpaqAPI.global._moduleConnected(json);
}


/* =========== LOW LEVEL INITIAL COMMANDS */
if(typeof window.addEventListener !== "undefined") {
	window.addEventListener("load", function(event) {
		nexpaqAPI._pageReady();
	});
}
if(typeof document !== "undefined") {
	document.addEventListener("DOMContentLoaded", function(event) {
		nexpaqAPI.detectCurrentPlatform();
	});
}




































/* JS functions Extensions & Polyfills*/
/**
 * Array.prototype.[method name] allows you to define/overwrite an objects method
 * needle is the item you are searching for
 * this is a special variable that refers to "this" instance of an Array.
 * returns true if needle is in the array, and false otherwise
 */
Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] === needle) return true;
   }
   return false;
}
/* isArray polyfill */
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

// =========== nexpaq built-in resources ====
var nxp_header_html = '<h1>Title</h1> <button class=nxp-btn-back id=nxp-button-back> <svg width=12px height=15px viewBox="8 35 12 15" class=nxp-button-back-ios> <path d="M10.0158703,41.9904883 C9.9622537,41.6002828 10.0847659,41.1909469 10.3798254,40.8958873 L15.8958873,35.3798254 C16.4016182,34.8740945 17.2192549,34.8717794 17.7300286,35.3825531 C18.2372659,35.8897904 18.2323789,36.7170716 17.7327562,37.2166943 L12.9476424,42.0018082 L17.7327562,46.786922 C18.2384871,47.2926529 18.2408023,48.1102896 17.7300286,48.6210633 C17.2227913,49.1283006 16.39551,49.1234135 15.8958873,48.6237909 L10.3798254,43.107729 C10.0754324,42.8033359 9.95341094,42.3859492 10.0158703,41.9904883 Z" id=Combined-Shape stroke=none fill=#EE3696 fill-rule=evenodd></path> </svg> <svg width=16px height=16px viewBox="0 0 16 16" class=nxp-button-back-android> <polygon class=nxp-svg-shape transform=translate(-4,-4) fill-rule=evenodd fill=#EE3696 points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13"></polygon> </svg> </button> <div class=nxp-buttons-container id=nxp-buttons-container></div> <ul class=nxp-header-titles id=nxp-header-titles></ul> ';
var nxp_header_css = '#nexpaq-header{z-index:10000;position:fixed;top:0;left:0;width:100vw;height:40px;padding:0 2.1875vw;font-size:16px;font-weight:normal;line-height:40px;color:#ee3696;font-family:Roboto,"Roboto Regular",Tahoma,sans-serif;text-align:right;background-color:white}#nexpaq-header:not(.nxp-no-shadow){box-shadow:0 2px 4px rgba(0,0,0,0.05)}body.platform-android #nexpaq-header{height:55px;line-height:55px;color:#606060;font-size:15px;font-weight:300}body.platform-android #nexpaq-header:not(.nxp-no-shadow){box-shadow:0 2px 4px rgba(0,0,0,0.12)}#nexpaq-header svg{width:auto}#nexpaq-header,#nexpaq-header *,#nexpaq-header * *{box-sizing:border-box}#nexpaq-header.nxp-hidden,#nexpaq-header .nxp-hidden{display:none}#nexpaq-header button{padding:0;margin:0;background:0;border:0;outline:0}#nexpaq-header>h1{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;text-align:center;font-size:17px;line-height:inherit;text-transform:inherit;color:inherit;background-color:transparent}body.platform-android #nexpaq-header>h1{text-align:left;font-size:20px;padding-left:50px;font-weight:300}body.platform-android #nexpaq-header.nxp-back-button-hidden>h1{padding-left:16px}#nexpaq-header .nxp-btn-back{padding:0 2.1875vw !important;line-height:inherit}body:not(.platform-android) #nexpaq-header .nxp-button-back-android,body.platform-android #nexpaq-header .nxp-button-back-ios{display:none}body.platform-android #nexpaq-header .nxp-btn-back svg{margin-top:-4px}#nexpaq-header .nxp-buttons-container{display:inline-block}#nexpaq-header .nxp-buttons-container.nxp-buttons-container--disabled{opacity:.3;pointer-events:none}#nexpaq-header .nxp-buttons-container>button{line-height:inherit;padding:0 4vw !important;position:relative}#nexpaq-header .nxp-buttons-container>button .nxp-button-number{position:absolute;top:50%;left:50%;transform:translateX(15%) translateY(-85%);padding-right:1px;display:flex;justify-content:center;align-items:center;height:18px;min-width:18px;border:2px solid white;border-radius:9px;background-color:#01cf9f;font-size:10px;color:white;line-height:1em}#nexpaq-header .nxp-buttons-container>button .nxp-button-number:empty{display:none}#nexpaq-header .nxp-buttons-container>button:last-child{padding-right:2.1875vw !important}#nexpaq-header .nxp-btn-back svg,#nexpaq-header .nxp-btn-back img,#nexpaq-header .nxp-buttons-container>button>svg,#nexpaq-header .nxp-buttons-container>button>img{vertical-align:middle}#nexpaq-header .nxp-btn-back{float:left;max-width:40px}#nexpaq-header.multi-title>h1::after{display:inline-block;content:\'\';width:0;height:0;margin-left:10px;border:4px solid transparent;border-width:5px 4px 0;border-top-color:currentColor}#nexpaq-header.multi-title.title-selecting>h1::after{border-top:0;border-bottom:5px solid #ee3696}#nexpaq-header .nxp-header-titles{position:absolute;margin:0;font-size:17px;text-align:left;color:#606060;background-color:white;list-style:none;padding:0 0 10px 0;width:100vw;height:calc(100vh - 40px);margin-left:-2.1875vw}#nexpaq-header .nxp-header-titles li{line-height:45px;padding:0 2.1875vw;border-bottom:1px solid #e4e4e4}#nexpaq-header .title-selecting{border-bottom:1px solid #e4e4e4}#nexpaq-header:not(.title-selecting) .nxp-header-titles{display:none}';
