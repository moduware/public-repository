(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{42:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(5);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r extends i.a{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}},44:function(e,t){e.exports=function(e){var t=e[0],n=e[1]/100,i=e[2]/100;return 0===i?[0,0,0]:[t,100*(2*(n*=(i*=2)<=1?i:2-i)/(i+n)),100*((i+n)/2)]}},45:function(e,t){e.exports=function(e){var t,n,i=e[0],r=e[1]/100,a=e[2]/100;return t=r*a,[i,100*(t=(t/=(n=(2-r)*a)<=1?n:2-n)||0),100*(n/=2)]}},46:function(e,t,n){var i=n(47);function r(e){var t=Math.round(i(e,0,255)).toString(16);return 1==t.length?"0"+t:t}e.exports=function(e){var t=4===e.length?r(255*e[3]):"";return"#"+r(e[0])+r(e[1])+r(e[2])+t}},47:function(e,t){e.exports=function(e,t,n){return Math.min(Math.max(e,t),n)}},48:function(e,t){e.exports=function(e){4!==e.length&&5!==e.length||(e=function(e){for(var t="#",n=1;n<e.length;n++){var i=e.charAt(n);t+=i+i}return t}(e));var t=[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)];if(9===e.length){var n=parseFloat((parseInt(e.substring(7,9),16)/255).toFixed(2));t.push(n)}return t}},53:function(e,t,n){"use strict";n.r(t);var i=n(5),r=n(42),a=n(3),s=n(16),o=n(21),h=n(22),l=(n(24),n(32),n(11)),c=n(23),d=(n(43),n(4),n(0)),p=n(2),u=n.n(p),g=n(44),v=n.n(g),f=n(45),m=n.n(f);function b(e){var t=e[0],n=e[1],i=e[2],r=Math.max(t,n,i),a=r-Math.min(t,n,i),s=a&&60*(r===t?(n-i)/a%6:r===n?(i-t)/a+2:(t-n)/a+4);return[s<0?s+360:s,r&&100*a/r,100*r/255]}function _(e){var t=e[0]/60,n=e[1]/100,i=e[2]/100,r=i*n,a=i-r,s=255*(r*(1-Math.abs(t%2-1))+a)+.5|0,o=255*(r+a)+.5|0,h=255*a+.5|0,l=0|t;return 1===l?[s,o,h]:2===l?[h,o,s]:3===l?[h,s,o]:4===l?[s,h,o]:5===l?[o,h,s]:[o,s,h]}var w=n(46),S=n.n(w),y=n(48),x=n.n(y);function C(e,t){return e?[j(e[0])?E(e[0]):t[0],j(e[1])?D(e[1]):t[1],j(e[2])?D(e[2]):t[2]]:t}function k(e){return[E(e[0]),D(e[1]),D(e[2])]}function E(e){var t=Math.round(e%360*10)/10;return t<0?t+360:t}function D(e){return e<0?0:e>100?100:(10*e+.5|0)/10}function j(e){return"number"==typeof e&&isFinite(e)}var M="undefined"!=typeof globalThis?globalThis:self,H="PointerEvent"in M?function(e,t,n){e.addEventListener("pointerdown",(function(e){0===e.button&&!1!==t(e)&&this.setPointerCapture(e.pointerId)})),e.addEventListener("pointermove",(function(e){this.hasPointerCapture(e.pointerId)&&n(e)}))}:"ontouchend"in M?function(e,t,n){var i=!1;e.addEventListener("touchstart",(function(e){1===e.touches.length&&!1!==t(e.touches[0])&&(i=!0,e.preventDefault())})),e.addEventListener("touchmove",(function(e){i&&1===e.touches.length&&(e.preventDefault(),n(e.touches[0]))}))}:function(e,t,n){var i=function(e){n(e)},r=function(){removeEventListener("mouseup",r),removeEventListener("mousemove",i)};e.addEventListener("mousedown",(function(e){0===e.button&&!1!==t(e)&&(addEventListener("mousemove",i),addEventListener("mouseup",r))}))},O={hsv:[0,100,100],hsl:[0,100,50],wheelDiameter:200,wheelThickness:20,handleDiameter:16,wheelReflectsSaturation:!0,onChange:function(){}},$=M.DOMMatrix||M.WebKitCSSMatrix||M.MSCSSMatrix,B=function(e,t){return e===t||e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},R=function(){function e(t){var n=this;this.options=t,this.wheelDiameter=this.options.wheelDiameter||O.wheelDiameter,this.wheelThickness=this.options.wheelThickness||O.wheelThickness,this.handleDiameter=this.options.handleDiameter||O.handleDiameter,this.onChange=this.options.onChange||O.onChange,this.wheelReflectsSaturation=void 0!==this.options.wheelReflectsSaturation?this.options.wheelReflectsSaturation:O.wheelReflectsSaturation,this.rootElement=this.options.appendTo.appendChild(T("div","reinvented-color-wheel")),this.hueWheelElement=this.rootElement.appendChild(T("canvas","reinvented-color-wheel--hue-wheel")),this.hueWheelContext=this.hueWheelElement.getContext("2d"),this.hueHandleElement=this.rootElement.appendChild(T("div","reinvented-color-wheel--hue-handle")),this.svSpaceElement=this.rootElement.appendChild(T("canvas","reinvented-color-wheel--sv-space")),this.svSpaceContext=this.svSpaceElement.getContext("2d"),this.svHandleElement=this.rootElement.appendChild(T("div","reinvented-color-wheel--sv-handle")),this._redrawHueWheel=function(){n._redrawHueWheelRequested=!1;var e=n.wheelDiameter,t=e/2,i=t-n.wheelThickness/2,r=Math.PI/180,a=n.wheelReflectsSaturation?","+n._hsl[1]+"%,"+n._hsl[2]+"%)":",100%,50%)",s=n.hueWheelContext;s.clearRect(0,0,e,e),s.lineWidth=n.wheelThickness;for(var o=0;o<360;o++)s.beginPath(),s.arc(t,t,i,(o-90.7)*r,(o-89.3)*r),s.strokeStyle="hsl("+o+a,s.stroke()},this.hueWheelContext.imageSmoothingEnabled=!1,this.svSpaceContext.imageSmoothingEnabled=!1,this._hsv=C(t.hsv?t.hsv:t.hsl?e.hsl2hsv(t.hsl):t.rgb?e.rgb2hsv(t.rgb):t.hex?e.rgb2hsv(e.hex2rgb(t.hex)):void 0,O.hsv),this._hsl=k(e.hsv2hsl(this._hsv)),this._rgb=e.hsv2rgb(this._hsv),this._hex=e.rgb2hex(this._rgb);var i=function(e,t){var i=n._inverseTransform.multiply(new $("matrix(1,0,0,1,"+e+","+t+")"));return{x:i.e,y:i.f}},r=function(e){n._inverseTransform=function(e){for(var t=[e];e=e.parentElement;)t.push(e);for(var n=new $,i=t.length-1;i>=0;i--){var r=getComputedStyle(t[i]),a=r.transform;if(a&&"none"!==a){var s=r.transformOrigin.split(" ").map(parseFloat);n=n.translate(s[0],s[1]).multiply(new $(a)).translate(-s[0],-s[1])}}return n.inverse()}(e);var t=e.getBoundingClientRect();n._center=i(t.left+t.width/2,t.top+t.height/2)},a=function(e){var t=i(e.clientX,e.clientY),r=t.x-n._center.x,a=t.y-n._center.y,s=Math.atan2(a,r);n.hsv=[180*s/Math.PI+90,n.hsv[1],n.hsv[2]]},s=function(e){var t=i(e.clientX,e.clientY),r=100/n.svSpaceElement.width,a=(t.x-n._center.x)*r+50,s=(n._center.y-t.y)*r+50;n.hsv=[n._hsv[0],a,s]},o=function(e){r(n.svSpaceElement),s(e)};H(this.hueWheelElement,(function(e){r(n.hueWheelElement);var t=i(e.clientX,e.clientY),s=t.x-n._center.x,o=t.y-n._center.y,h=n.wheelDiameter/2-n.wheelThickness;if(s*s+o*o<h*h)return!1;a(e)}),a),H(this.svSpaceElement,o,s),H(this.svHandleElement,o,s),this.redraw()}return Object.defineProperty(e.prototype,"hsv",{get:function(){return this._hsv},set:function(e){B(this._hsv,e)||this._setHSV(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hsl",{get:function(){return this._hsl},set:function(t){B(this._hsl,t)||this._setHSV(e.hsl2hsv(t))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return this._rgb},set:function(t){B(this._rgb,t)||this._setHSV(e.rgb2hsv(t))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hex",{get:function(){return this._hex},set:function(t){this._hex!==t&&(this.rgb=e.hex2rgb(t))},enumerable:!1,configurable:!0}),e.prototype.setHSV=function(){this.hsv=arguments},e.prototype.setHSL=function(){this.hsl=arguments},e.prototype.redraw=function(){this.hueWheelElement.width=this.hueWheelElement.height=this.wheelDiameter,this.svSpaceElement.width=this.svSpaceElement.height=(this.wheelDiameter-2*this.wheelThickness)*Math.SQRT1_2;var e=this.hueHandleElement.style,t=this.svHandleElement.style;e.width=e.height=t.width=t.height=this.handleDiameter+"px",e.marginLeft=e.marginTop=t.marginLeft=t.marginTop=-this.handleDiameter/2+"px",this._redrawHueWheel(),this._redrawHueHandle(),this._redrawSvSpace(),this._redrawSvHandle()},e.prototype._setHSV=function(t){var n=this._hsv,i=this._hsv=C(t,n),r=n[0]-i[0],a=n[1]-i[1]||n[2]-i[2];r&&(this._hsl=[i[0],this._hsl[1],this._hsl[2]],this._redrawHueHandle(),this._updateSvBackground()),a&&(this._hsl=k(e.hsv2hsl(i)),this._redrawSvHandle(),this.wheelReflectsSaturation&&!this._redrawHueWheelRequested&&(requestAnimationFrame(this._redrawHueWheel),this._redrawHueWheelRequested=!0)),(r||a)&&(this._rgb=e.hsv2rgb(i),this._hex=e.rgb2hex(this._rgb),this.onChange(this))},e.prototype._redrawSvSpace=function(){this._updateSvBackground();var e=this.svSpaceElement.width,t=this.svSpaceContext,n=t.createLinearGradient(0,0,e,0),i=t.createLinearGradient(0,0,0,e);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=n,t.fillRect(0,0,e,e),t.fillStyle=i,t.fillRect(0,0,e,e)},e.prototype._updateSvBackground=function(){this.svSpaceElement.style.backgroundColor="hsl("+this._hsv[0]+",100%,50%)"},e.prototype._redrawHueHandle=function(){var e=this.wheelDiameter/2,t=e-this.wheelThickness/2,n=(this._hsv[0]-90)*Math.PI/180,i=this.hueHandleElement.style;i.left=t*Math.cos(n)+e+"px",i.top=t*Math.sin(n)+e+"px"},e.prototype._redrawSvHandle=function(){var e=this.svSpaceElement.width,t=this.svHandleElement.style,n=(this.wheelDiameter-e)/2,i=this._hsv;t.left=n+e*i[1]/100+"px",t.top=n+e*(1-i[2]/100)+"px"},e.default=e,e.defaultOptions=O,e.hsv2hsl=m.a,e.hsl2hsv=v.a,e.hsv2rgb=_,e.rgb2hsv=b,e.rgb2hex=S.a,e.hex2rgb=x.a,e}();function T(e,t){var n=document.createElement(e);return n.className=t,n}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class W extends(Object(o.a)(s.a)(r.a)){render(){return i.c`
			<div class="content">
				<header class="app-header">
					<div class="back">
						<a href="javascript:;" @click="${()=>s.a.dispatch(Object(a.v)())}">
							<img src="icons/back.svg" />
						</a>
					</div>
					<h4 class="title">${this._headerTitle}</h4>
					<div class="right-link">
						<a href="javascript:;"  @click="${()=>this._editMode?this._disableEditMode():this._enableEditMode()}">
							<span>${this._editMode?Object(l.a)("wheel-page.done"):Object(l.a)("wheel-page.edit")}</span>
						</a>
					</div>
				</header>

				<div class="wrapper">
					<div class="color-wheel-container">
						<div class="button-wrapper">
							<img src="${this._mainLightState===d.a.On?"icons/power-btn-active.svg":"icons/power-btn.svg"}" @click="${()=>this._powerButtonClickHandler()}">
						</div>
						<div class="wheel" id="colorWheel"></div>
					</div>
					<div class="range-container">
						<img src="icons/minus.svg" />
						<input type="range" id="nxprange" class="brightness-slider"  min="-1" max="1" step="0.01"  value="${this._lightness}" @input="${e=>this._lightnessChangeHandler(e)}">
						<img src="icons/plus.svg" />
					</div>
				</div>

				<div class="palette-container">
					<h6 class="dark-red">${Object(l.a)("wheel-page.palette")}</h6>
					<div class="items-containers">
						<a href="javascript:;" @click="${()=>this._addCurrentColor()}">+</a>

						${this._savedColors.filter(e=>null!==e&&!1===this._editMode).map(e=>i.c`
							<a href="javascript:;" style="background-color: rgb(${e.color[0]}, ${e.color[1]}, ${e.color[2]});" @click="${()=>{s.a.dispatch(Object(a.t)(u.a.rgb(e.color[0],e.color[1],e.color[2]))),this._colorWheel.rgb=[e.color[0],e.color[1],e.color[2]]}}"></a>
						`)}

						${this._savedColors.filter(e=>null!==e&&!0===this._editMode).map(e=>i.c`
							<a href="javascript:;" style="background-color: rgb(${e.color[0]}, ${e.color[1]}, ${e.color[2]});" @click="${()=>s.a.dispatch(Object(a.z)(e))}">
								<span class="delete"><img src="icons/delete.svg" ></span>
							</a>
						`)}
					</div>
				</div>

				<footer class="app-footer">
					<div class="container">
						<a href="javascript:;" @click="${()=>s.a.dispatch(Object(a.y)("/pallet-page"))}">
							<img src="${"pallet-page"===this._page?"icons/flashlight-active.svg":"icons/flashlight.svg"}" />
						</a>
						<a href="javascript:;" @click="${()=>s.a.dispatch(Object(a.y)("/themes-page"))}">
							<img src="${"themes-page"===this._page?"icons/themes-active.svg":"icons/themes.svg"}" />
						</a>
						<a href="javascript:;" @click="${()=>s.a.dispatch(Object(a.y)("/wheel-page"))}">
							<img src="${"wheel-page"===this._page?"icons/palette-active.svg":"icons/palette.svg"}" />
						</a>
						<a href="javascript:;" @click="${()=>s.a.dispatch(Object(a.y)("/settings-page"))}">
							<img src="${"settings-page"===this._page?"icons/settings-active.svg":"icons/settings-page.svg"}" />
						</a>
					</div>
				</footer>
			</div>
		`}static get properties(){return{platform:{type:String,reflect:!0},_page:{type:String},_language:{type:String},_currentUiColor:{type:String},_currentUiColorName:{type:String},_mainLightState:{type:Boolean},_lockState:{type:Boolean},_rightFlashState:{type:Boolean},_leftFlashState:{type:Boolean},_lightness:{type:Number},_headerTitle:{type:String},_savedColors:{type:Array},_editMode:{type:Boolean},_currentColor:{type:Object},_colorWheel:{type:Object},_doUpdate:{type:Boolean}}}constructor(){super(),this._editMode=!1,this._colorWheel={}}static get styles(){return[h.a,i.b`
		.reinvented-color-wheel,
		.reinvented-color-wheel--hue-handle,
		.reinvented-color-wheel--hue-wheel,
		.reinvented-color-wheel--sv-handle,
		.reinvented-color-wheel--sv-space {
			touch-action: manipulation;
			touch-action: none;
			-webkit-touch-callout: none;
			-webkit-tap-highlight-color: transparent;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
		.reinvented-color-wheel {
			position: relative;
			display: inline-block;
			line-height: 0;
			border-radius: 50%;
		}
		.reinvented-color-wheel--hue-wheel {
			border-radius: 50%;
		}
		.reinvented-color-wheel--sv-space {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}
		.reinvented-color-wheel--hue-handle,
		.reinvented-color-wheel--sv-handle {
			position: absolute;
			box-sizing: border-box;
			border-radius: 50%;
			border: 2px solid #fff;
			box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
			background-color: rgb(255, 0, 0);
		}
		.reinvented-color-wheel--hue-handle {
			pointer-events: none;
		}
		.reinvented-color-wheel--sv-handle,
		.reinvented-color-wheel--sv-space {
			display: none !important;
		}
		.range-container {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 40px;
			position: relative;
			padding: 0 24px;
		}
		.brightness-slider {
			background: linear-gradient(to right, #6F7B83 0%, #6F7B83 50%, #D3D4D6 50%, #D3D4D6 100%);
			border-radius: 8px;
			-webkit-appearance: none;
			appearance: none;
			height: 6px;
			width: 100%;
			margin: 0 8px;
		}
		.brightness-slider::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			width: 16px;
			height: 16px;
			background-color: #6F7B83;
			border-radius: 50%;
			cursor: pointer;
		}
		`]}updated(e){if(e.has("_language")&&Object(l.c)(this._language),"wheel-page"===this._page&&!0===this._doUpdate){s.a.dispatch(Object(a.r)(!1));const e=this.shadowRoot.getElementById("nxprange");e.value=0;const t=(0-e.min)/(e.max-e.min)*100;e.style.background=`linear-gradient(to right, #6F7B83 0%, #6F7B83 ${t}%, #D3D4D6 ${t}%, #D3D4D6 100%)`,s.a.dispatch(Object(a.s)(Number(0)))}}async connectedCallback(){Object(l.b)({loader:e=>Promise.resolve(c[e])}),super.connectedCallback()}firstUpdated(){super.firstUpdated(),this._colorWheel=new R({appendTo:this.shadowRoot.getElementById("colorWheel"),rgb:[255,0,0],wheelDiameter:260,wheelThickness:16,handleDiameter:40,wheelReflectsSaturation:!1,onChange:e=>{console.log("color",e),this.shadowRoot.querySelector(".reinvented-color-wheel--hue-handle").style.backgroundColor=e.hex,s.a.dispatch(Object(a.t)(u.a.rgb(e.rgb[0],e.rgb[1],e.rgb[2])))}})}_disableEditMode(){this._editMode=!1,console.log("_disableEditMode",this._editMode)}_enableEditMode(){this._editMode=!0,console.log("_enableEditMode",this._editMode)}_addCurrentColor(){this._savedColors.length<3&&s.a.dispatch(Object(a.A)())}_renderBrightnessRange(e){}_lightnessChangeHandler(e){const t=(e.target.value-e.target.min)/(e.target.max-e.target.min)*100;e.target.style.background=`linear-gradient(to right, #6F7B83 0%, #6F7B83 ${t}%, #D3D4D6 ${t}%, #D3D4D6 100%)`,s.a.dispatch(Object(a.s)(Number(this.shadowRoot.getElementById("nxprange").value)))}_powerButtonClickHandler(){this._lockState===d.a.On&&s.a.dispatch(Object(a.D)())}_powerButtonPressedHandler(e){this._lockState===d.a.Off&&s.a.dispatch(Object(a.C)())}_powerButtonReleasedHandler(e){this._lockState===d.a.Off&&s.a.dispatch(Object(a.B)())}stateChanged(e){this.platform=e.app.platform,this._page=e.app.page,this._language=e.app.language,this._currentUiColor=e.app.currentUiColor,this._currentUiColorName=e.app.currentUiColorName,this._mainLightState=e.app.ledsState,this._lockState=e.app.lockState,this._leftFlashState=e.app.flashLedLeftState,this._rightFlashState=e.app.flashLedRightState,this._lightness=e.app.lightness,this._headerTitle=e.app.headerTitle,this._savedColors=e.app.savedColors,this._currentColor=e.app.currentColor,this._doUpdate=e.app.doUpdate}}window.customElements.define("wheel-page",W)}}]);