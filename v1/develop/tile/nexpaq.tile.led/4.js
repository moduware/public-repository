(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{42:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i(5);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class s extends a.a{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}},49:function(e,t,i){"use strict";i.r(t);var a=i(5),s=i(42),o=i(3),n=i(25),r=i(16),l=i(21),c=i(22),d=(i(24),i(32),i(11)),h=i(23),p=(i(43),i(4),i(0)),g=i(9),b=i(2),u=i.n(b);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const v=new n.a;v.start();class m extends(Object(l.a)(r.a)(s.a)){constructor(){super(),this._lightDegree=0,this._showWarning=!1,this._showSettings=!1,this._holdValue=0,this._isUVActive=!1,this._startInterval=()=>{},this._stopInterval=()=>{},this._changeLightDegreeValue=Object(g.f)(this._changeLightDegreeValue.bind(this),150),this._currentMode=null}render(){return a.c`
		<header class="app-header">
			<div class="back">
				${this._showSettings?a.c`
				<a href="javascript:;" @click="${()=>this._toggleSettings()}">
					<p>Close</p>
        </a>`:a.c`
				<a href="javascript:;" @click="${()=>r.a.dispatch(Object(o.v)())}">
					<img src="icons/back.svg" />
        </a>
				`}
      </div>
      <h4 class="title">${this._showSettings?"SETTINGS":this._headerTitle}</h4>
			<!-- <div class="settings-icon" @click="${()=>this._toggleSettings()}" style="display: ${this._showSettings?"none":"block"};">
				<img src="icons/settings.svg" />
			</div> -->
    </header>
		
		<div class="wrapper" style="display: ${this._showSettings?"none":"flex"};">
			<div class="torch-container">
				<div class="torch-background"></div>
				<input class="torch-slider" id="pallet-range" type="range" min="0" max="100" step="20" value="${this._lightDegree}" @input="${e=>this._lightDegreeChangeHandler(e)}" />
				<div class="switch-warning-container" style="display: ${this._showWarning?"flex":"none"}">
					<img src="icons/tile.svg" />
					<p class="switch-warning">${Object(d.a)("pallet-page.switchWarning")}</p>
				</div>
				<div class="hold-warning-container" style="display: ${this._holdValue>0&&this._holdValue<100?"flex":"none"}">
					<h1 class="title">${Object(d.a)("pallet-page.hold")}</h1>
					<div class="hold-warning">
						<img src="icons/red-info.svg" />
						<p><span class="dark-red">${Object(d.a)("pallet-page.doNot")}</span> ${Object(d.a)("pallet-page.lookWarning")}.</p>
						<p><span class="dark-red">${Object(d.a)("pallet-page.doNot")}</span> ${Object(d.a)("pallet-page.hoverWarning")}.</p>
					</div>
				</div>
			</div>
			<!-- <p id="percentage" class="percentage"></p> -->
			<div class="uv-button-container">
				<div class="info-button" @click="${()=>this._toggleWarning()}">
					<img src="icons/${this._showWarning?"close-button":"red-info"}.svg" />
				</div>
				<div class="uv-button" id="uv-button">
					<img src="icons/uv.svg" />
					<svg viewBox="0 0 36 36" class="circle-container">
						<path class="circle" style="stroke: ${0===this._holdValue?"transparent":"#C171FF"}" stroke-dasharray="${this._holdValue}, 100" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
          </svg>
				</div>
			</div>
    </div>

    <footer class="app-footer" style="display: ${this._showSettings?"none":"block"};">
      <div class="container">
        <a href="javascript:;" @click="${()=>r.a.dispatch(Object(o.y)("/pallet-page"))}">
          <img src="${"pallet-page"===this._page?"icons/flashlight-active.svg":"icons/flashlight.svg"}" />
        </a>
        <a href="javascript:;" @click="${()=>r.a.dispatch(Object(o.y)("/themes-page"))}">
          <img src="${"themes-page"===this._page?"icons/themes-active.svg":"icons/themes.svg"}" />
        </a>
        <a href="javascript:;" @click="${()=>r.a.dispatch(Object(o.y)("/wheel-page"))}">
          <img src="${"wheel-page"===this._page?"icons/palette-active.svg":"icons/palette.svg"}" />
        </a>
				<a href="javascript:;" @click="${()=>r.a.dispatch(Object(o.y)("/settings-page"))}">
          <img src="${"settings-page"===this._page?"icons/settings-active.svg":"icons/settings-page.svg"}" />
        </a>
      </div>
    </footer>

		<div class="settings" style="display: ${this._showSettings?"block":"none"};">
			<div class="settings-content">
		  	<h6 class="dark-red">${Object(d.a)("hotkey.title")}</h6>
				<div class="section">
					<p>Mode 1</p>
					<label class="switch" for="mode1">
						<input id="mode1" type="checkbox" .checked=${"mode1"===this._currentMode} @change=${()=>this._toggleMode("mode1")}>
						<span class="slider"></span>
					</label>
				</div>
				<div class="section">
					<p>Mode 2</p>
					<label class="switch" for="mode2">
						<input id="mode2" type="checkbox" .checked=${"mode2"===this._currentMode} @change=${()=>this._toggleMode("mode2")}>
						<span class="slider"></span>
					</label>
				</div>
				<div class="section">
					<p>Mode 3</p>
					<label class="switch" for="mode3">
						<input id="mode3" type="checkbox" .checked=${"mode3"===this._currentMode} @change=${()=>this._toggleMode("mode3")}>
						<span class="slider"></span>
					</label>
				</div>
				<!--
				<div class="section">
					<p>${Object(d.a)("hotkey.flashlight")}</p>
					<label class="switch">
						<input type="checkbox">
						<span class="slider"></span>
					</label>
				</div>
				<div class="section">
					<p>${Object(d.a)("hotkey.theme")}</p>
					<label class="switch">
						<input type="checkbox">
						<span class="slider"></span>
					</label>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.sunrise")}</p>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.police")}</p>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.disco")}</p>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.candle")}</p>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.rainbow")}</p>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.strobe")}</p>
				</div>
				<div class="section">
					<p>${Object(d.a)("themes.red")}</p>
				</div> -->
			</div>
		</div>

		<img src="icons/power-btn-active.svg" class="preload-image" />
    `}static get properties(){return{_headerTitle:{type:String},_page:{type:String},_language:{type:String},_currentUiColor:{type:String},_currentUiColorName:{type:String},_mainLightState:{type:Boolean},_lockState:{type:Boolean},_rightFlashState:{type:Boolean},_leftFlashState:{type:Boolean},_lightness:{type:Number},_lightDegree:{type:Number},_showWarning:{type:Boolean},_showSettings:{type:Boolean},_holdValue:{type:Number},_startInterval:{type:Function},_stopInterval:{type:Function},_doUpdate:{type:Boolean},_isUVActive:{type:Boolean}}}static get styles(){return[c.a,a.b`

		.customrange {
			cursor:pointer;
			opacity:0;
		  }
		  .rangeslider,
		  .rangeslider__fill {
			display: block;
			-moz-border-radius: 90px;
			-webkit-border-radius: 90px;
			border-radius: 90px;
		  }
		  
		  .rangeslider {
			background: #ecedef;
			position: relative;
		  }
		  
		  .rangeslider--horizontal {
			height: 20px;
			width: 100%;
		  }
		  
		  .rangeslider--vertical {
			width: 113px;
			min-height: 330px;
			max-height: 100%;
			border-top: 15px solid #ecedef;
			border-bottom: 15px solid #ecedef;
			border-right: 15px solid #ecedef;
			border-left: 15px solid #ecedef;
		  }
		  .rangeslider--vertical::before {
			  width: 113px;
			  height: 150px;
			  background-color: #ecedef;
			  content: "";
			  display: block;
			  position: relative;
			  top: -46px;
			  z-index: -1;
			  border-radius: 90px;
			  left: -15px;
		  }
		  
		  .rangeslider--disabled {
			filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
			opacity: 0.4;
		  }
		  
		  .rangeslider__fill {
			background: #6f7b83;
			position: absolute;
		  }
		  .rangeslider--horizontal .rangeslider__fill {
			top: 0;
			height: 100%;
		  }
		  .rangeslider--vertical .rangeslider__fill {
			  bottom: 5px;
			  width: calc(100%);
			  right: 0;
			  margin: auto;
			  text-align: center;
			  left: 0;
			  border-radius: 0 0 90px 90px;
		  }
		  
		  .rangeslider__handle {
			  cursor: pointer;
			  display: inline-block;
			  width: 85px;
			  height: 85px;
			  position: absolute;
			  background-image: url('icons/power-btn.svg');
			  box-shadow: 0px 3px 4px rgba(10, 35, 50, 0.1);
			  background-repeat: no-repeat;
			  -moz-border-radius: 50%;
			  -webkit-border-radius: 50%;
			  border-radius: 50%;
			  background-color: #fff;
			  background-position: center;
			  background-size: 95px;
		  }
		  
		  .rangeslider__handle:active, .rangeslider--active .rangeslider__handle {
			background-image: url('icons/power-btn-active.svg');
		  }
		  
		  
		  .rangeslider--horizontal .rangeslider__handle {
			top: -10px;
			touch-action: pan-y;
			-ms-touch-action: pan-y;
		  }
		  .rangeslider--vertical .rangeslider__handle {
			left: -1px;
			touch-action: pan-x;
			-ms-touch-action: pan-x;
		  }
		  
		  input[type="range"]:focus + .rangeslider .rangeslider__handle {
			-moz-box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);
			-webkit-box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);
			box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);
		  }

			.torch-container {
				display: flex;
				justify-content: center;
				align-items: center;
				min-height: 370px;
				position: relative;
				margin-bottom: 20px;
				flex-shrink: 0;
			}

			.torch-background {
				background-color: #ECEDEF;
				border-radius: 100px;
				width: 324px;
				height: 100%;
				max-height: 112px;
				position: absolute;
				transform: rotate(-90deg);
			}

			.torch-slider {
				--background: url('icons/flashlight.svg');
				transform: rotate(-90deg);
				display: block;
				background: linear-gradient(to right, #6F7B83 0%, #6F7B83 0%, #ECEDEF 0%, #ECEDEF 0%);
				appearance: none;
				-webkit-appearance: none;
				width: 300px;
				height: 88px;
				border-radius: 100px;
				position: relative;
				z-index: 5;
			}

			.torch-slider::-webkit-slider-thumb {
				width: 88px;
				height: 88px;
				background-color: white;
				background-image: var(--background);
				background-repeat: no-repeat;
    		background-size: 12px;
				background-position: center;
				-webkit-appearance: none;
				appearance: none;
				cursor: pointer;
				transform: rotate(90deg);
				box-shadow: 0px 3px 4px rgba(10, 35, 50, 0.1);
				border-radius: 50%;
			}

			.percentage {
				color: #283945;
				text-align: center;
				font-weight: bold;
				height: 20px;
			}

			.switch-warning-container,
			.hold-warning-container {
				width: 100%;
				height: 100%;
				background-color: #f9f9fb;
				position: absolute;
				z-index: 99;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			}

			.switch-warning-container img {
				margin-bottom: 40px;
			}

			.switch-warning {
				width: 190px;
				text-align: center;
				color: #6F7B83;
			}

			.hold-warning-container .title {
				color: #C171FF;
				font-size: 32px;
				margin-bottom: 80px;
			}

			.hold-warning-container .hold-warning {
				padding: 18px 16px;
				border: 2px solid #E8404E;
				border-radius: 8px;
			}

			.hold-warning-container .hold-warning img {
				margin-bottom: 10px;
			}

			.hold-warning-container .hold-warning p {
				margin-bottom: 10px;
			}

			.uv-button-container {
				border-radius: 50%;
				padding: 12px;
				background-color: rgb(236, 237, 239);
				width: 112px;
				height: 112px;
				margin: 0 auto 25px auto;
				flex-shrink: 0;
				position: relative;
			}

			.info-button {
				position: absolute;
				right: -12px;
				top: -12px;
				cursor: pointer;
			}

			.uv-button {
				width: 100%;
				height: 100%;
				background-image: var(--background);
				background-repeat: no-repeat;
    		background-size: cover;
				-webkit-appearance: none;
				appearance: none;
				cursor: pointer;
				box-shadow: 0px 0px 4px rgba(10, 35, 50, 0.1);
				border-radius: 50%;
				background-color: white;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
			}

			.uv-button img {
				user-select: none;
			}

			.uv-button .circle-container {
				position: absolute;
				z-index: 4;
				width: 102px;
				height: 102px;
			}

			.uv-button .circle {
				fill: transparent;
				stroke-width: 0.85;
				stroke-linecap: round;
				stroke: #C171FF;
				transition: 0.1s ease;
			}

			.preload-image {
				visibility: hidden;
				width: 0;
				height: 0;
				position: absolute;
				z-index: -1;
			}

			.wrapper {
				height: calc(100% - 70px - 50px);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.settings-icon {
				position: absolute;
				right: 20px;
				cursor: pointer;
			}

			.settings {
				flex-grow: 1;
				width: 100%;
				display: none;
			}

			.settings-content {
				background-color: white;
			}

			.settings-content > h6 {
				margin-bottom: 15px;
				padding-left: 20px;
				padding-top: 20px;
			}

			.settings-content .title {
				color: #B51F36;
				font-size: 13px;
			}

			.settings-content .section {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 20px 0 25px;
				height: 44px;
				border-bottom: 1px solid rgba(230, 233, 234, 0.4);
			}

			.settings-content .section:last-child {
				border-bottom: 0;
			}

			.settings-content .section p {
				color: #0A2332;
			}
		`]}_lightDegreeChangeHandler(e){let t,i=Number(this.shadowRoot.getElementById("pallet-range").value);switch(r.a.dispatch(Object(o.E)("")),i){case 0:e.target.style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 0%, #ECEDEF 0%, #ECEDEF 100%)";break;case 20:e.target.style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 26%, #ECEDEF 26%, #ECEDEF 100%)";break;case 40:e.target.style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 42%, #ECEDEF 42%, #ECEDEF 100%)";break;case 60:e.target.style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 58%, #ECEDEF 58%, #ECEDEF 100%)";break;case 80:e.target.style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 72%, #ECEDEF 72%, #ECEDEF 100%)";break;case 100:e.target.style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 90%, #ECEDEF 90%, #ECEDEF 100%)"}if(this._isUVActive)return;0===i?t=Object(g.e)(u()("white"),-1):20===i?t=Object(g.e)(u()("white"),-.8):40===i?t=Object(g.e)(u()("white"),-.6):60===i?t=Object(g.e)(u()("white"),-.4):80===i?t=Object(g.e)(u()("white"),-.2):100===i&&(t=Object(g.e)(u()("white"),0));const a=[t.red(),t.green(),t.blue()];Object(g.h)(v,i,a,this._lightDegree),this._changeLightDegreeValue(i)}_changeLightDegreeValue(e){console.log("val",e),this._lightDegree=e}disconnectedCallback(){super.disconnectedCallback(),console.log("disconnect")}firstUpdated(){super.firstUpdated(),Object(g.i)(v,0,0,0);const e="ontouchstart"in document.documentElement,t=this.shadowRoot.getElementById("uv-button"),i=e?"touchstart":"mousedown",a=e?"touchend":"mouseup";t.addEventListener(i,e=>this._handlePressDown(e)),t.addEventListener(a,()=>this._handlePressUp())}updated(e){e.has("_language")&&Object(d.c)(this._language),"pallet-page"===this._page&&!0===this._doUpdate&&(r.a.dispatch(Object(o.r)(!1)),this.shadowRoot.getElementById("pallet-range").value=0,this.shadowRoot.getElementById("pallet-range").style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 0%, #ECEDEF 0%, #ECEDEF 100%)")}async connectedCallback(){Object(d.b)({loader:e=>Promise.resolve(h[e])}),super.connectedCallback()}_powerButtonClickHandler(){this._lockState===p.a.On&&r.a.dispatch(Object(o.D)())}_powerButtonPressedHandler(e){this._lockState===p.a.Off&&r.a.dispatch(Object(o.C)())}_powerButtonReleasedHandler(e){this._lockState===p.a.Off&&r.a.dispatch(Object(o.B)())}_toggleWarning(){this._showWarning=!this._showWarning}_toggleSettings(){this._showSettings=!this._showSettings}_handlePressDown(e){e.preventDefault(),clearInterval(this._stopInterval);let t=this._holdValue;this._startInterval=setInterval(()=>{t++,this._holdValue++,100===t&&(clearInterval(this._startInterval),this.shadowRoot.getElementById("pallet-range").value=0,this.shadowRoot.getElementById("pallet-range").style.background="linear-gradient(to right, #6F7B83 0%, #6F7B83 0%, #ECEDEF 0%, #ECEDEF 100%)",Object(g.g)(v,0),setTimeout(()=>{Object(g.j)(v,100)},150))},40)}_handlePressUp(){if(clearInterval(this._startInterval),this._isUVActive&&(this._holdValue=0,this._isUVActive=!1,Object(g.j)(v,0),setTimeout(()=>{const e={target:this.shadowRoot.getElementById("pallet-range")};this._lightDegreeChangeHandler(e)},150)),this._holdValue>0&&this._holdValue<100){let e=this._holdValue;this._stopInterval=setInterval(()=>{e--,this._holdValue--,0===e&&clearInterval(this._stopInterval)},30)}else 100===this._holdValue&&(this._isUVActive=!0)}_closeApplet(e){"mode1"===e?setTimeout(()=>Object(g.a)(1,0,0,230,2),100):"mode1"===e?setTimeout(()=>Object(g.a)(1,0,0,234,234),100):"mode1"===e&&setTimeout(()=>Object(g.a)(1,0,0,146,100),100)}_toggleMode(e){this._currentMode===e?(this._currentMode=null,this.shadowRoot.getElementById("mode1").checked=!1,this._closeApplet(e)):(this._closeApplet(this._currentMode),"mode1"===e?(this.shadowRoot.getElementById("mode2").checked=!1,this.shadowRoot.getElementById("mode3").checked=!1,setTimeout(()=>Object(g.b)("0.hex"),500),setTimeout(()=>Object(g.a)(1,1,0,230,2),1e3)):"mode2"===e?(this.shadowRoot.getElementById("mode1").checked=!1,this.shadowRoot.getElementById("mode3").checked=!1,setTimeout(()=>Object(g.b)("1.hex"),500),setTimeout(()=>Object(g.a)(1,1,0,234,234),1e3)):"mode3"===e&&(this.shadowRoot.getElementById("mode1").checked=!1,this.shadowRoot.getElementById("mode2").checked=!1,setTimeout(()=>Object(g.b)("2.hex"),500),setTimeout(()=>Object(g.a)(1,1,0,146,100),1e3)),this._currentMode=e)}stateChanged(e){this._headerTitle=e.app.headerTitle,this._page=e.app.page,this._language=e.app.language,this._currentUiColor=e.app.currentUiColor,this._currentUiColorName=e.app.currentUiColorName,this._mainLightState=e.app.ledsState,this._lockState=e.app.lockState,this._leftFlashState=e.app.flashLedLeftState,this._rightFlashState=e.app.flashLedRightState,this._lightness=e.app.lightness,this._doUpdate=e.app.doUpdate}}window.customElements.define("pallet-page",m)}}]);