(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{42:function(e,i,c){"use strict";c.d(i,"a",(function(){return l}));var s=c(5);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class l extends s.a{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}},51:function(e,i,c){"use strict";c.r(i);var s=c(5),l=c(42),t=c(3),o=c(25),a=c(16),h=c(21),r=c(22),d=c(9),n=(c(32),c(11)),p=c(23);(new o.a).start();class g extends(Object(h.a)(a.a)(l.a)){constructor(){super(),this._showPage=null,this._themePicker=null,this._colorPicker=null,this._cycle={Cycle1:"",Cycle2:"",Cycle3:""},this._doubleClick=""}_handleBackButton(){this._showPage?this._showPage=null:a.a.dispatch(Object(t.v)())}_handleChooseTheme(e){if("DoubleClick"===this._themePicker)this._doubleClick=e;else{const i={...this._cycle};i[this._themePicker]=e,this._cycle=i}}_handleChooseColor(e){if("DoubleClick"===this._colorPicker)this._doubleClick=e;else{const i={...this._cycle};i[this._colorPicker]=e,this._cycle=i}}_handleChooseFlashlight(e){const i={...this._cycle};i[e]="Flashlight",this._cycle=i}_getName(e){return"redlight"===e?"Red Light":e}_isATheme(e){return["sunrise","police","disco","candle","candle","rainbow","strobe","redlight"].includes(e)}_isAColor(e){return["blue","lime","violet","red","orange","yellow","purple","pink","cyan"].includes(e)}_isThemeActive(e){return"DoubleClick"===this._themePicker?this._doubleClick===e:this._cycle[this._themePicker]===e}_isColorActive(e){return"DoubleClick"===this._colorPicker?this._doubleClick===e:this._cycle[this._colorPicker]===e}_handleSave(){const e=[];this._cycle.Cycle1&&e.push({click:1,index:0,event:Object(d.d)(this._cycle.Cycle1)}),this._cycle.Cycle2&&e.push({click:1,index:1,event:Object(d.d)(this._cycle.Cycle2)}),this._cycle.Cycle3&&e.push({click:1,index:2,event:Object(d.d)(this._cycle.Cycle3)}),this._doubleClick&&e.push({click:3,index:0,event:Object(d.d)(this._doubleClick)}),console.log("arr",e);const i=JSON.stringify(e);Object(d.c)(i),alert("Settings have been saved successfully.")}render(){return s.c`
		<header class="app-header">
			<div class="back">
				<a href="javascript:;" @click="${this._handleBackButton}">
					<img src="icons/back.svg" />
				</a>
      </div>
      <h4 class="title">${this._showPage||this._headerTitle}</h4>
			${this._showPage?null:s.c`<a class="save-header" @click="${this._handleSave}">Save</a>`}
    </header>
		
		<div class="wrapper">
			<div class="main-page" style="display: ${this._showPage?"none":"block"}">
				<div class="title-container">
					<h6 class="dark-red">${Object(n.a)("hotkey.title")}</h6>
				</div>
				<div class="content-wrapper">
					<div class="option" @click="${()=>this._showPage="Cycle"}">
						<img class="icon" src="icons/settings-cycle.svg" />
						<p>Cycle</p>
						<img src="icons/arrow-right.svg" />
					</div>
					<div class="option"  @click="${()=>this._showPage="Double Click"}">
						<img class="icon" src="icons/double-click.svg" />
						<p>Double Click</p>
						<img src="icons/arrow-right.svg" />
					</div>
				</div>
			</div>

			<div class="cycle-page" style="display: ${"Cycle"===this._showPage?"block":"none"}">
				<div class="title-container">
					<h6 class="dark-red">Click 1</h6>
				</div>
				<div class="content-wrapper">
					<div class="option" @click="${()=>this._themePicker="Cycle1"}">
						${this._isATheme(this._cycle.Cycle1)?s.c`<div class="theme bg ${this._cycle.Cycle1}"></div>`:null}
						<div class="wrapper">
							<p>Theme</p>
							${this._isATheme(this._cycle.Cycle1)?s.c`<p class="theme-text">${this._getName(this._cycle.Cycle1)}</p>`:null}
						</div>
						${this._isATheme(this._cycle.Cycle1)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._colorPicker="Cycle1"}">
						${this._isAColor(this._cycle.Cycle1)?s.c`<div class="theme bg ${this._cycle.Cycle1}"></div>`:null}
						<div class="wrapper">
							<p>Color</p>
							${this._isAColor(this._cycle.Cycle1)?s.c`<p class="theme-text">${this._getName(this._cycle.Cycle1)}</p>`:null}
						</div>
						${this._isAColor(this._cycle.Cycle1)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._handleChooseFlashlight("Cycle1")}">
						<div class="wrapper">
							<p>Flashlight</p>
						</div>
						${"Flashlight"===this._cycle.Cycle1?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
				</div>

				<div class="title-container">
					<h6 class="dark-red">Click 2</h6>
				</div>
				<div class="content-wrapper">
					<div class="option" @click="${()=>this._themePicker="Cycle2"}">
						${this._isATheme(this._cycle.Cycle2)?s.c`<div class="theme bg ${this._cycle.Cycle2}"></div>`:null}
						<div class="wrapper">
							<p>Theme</p>
							${this._isATheme(this._cycle.Cycle2)?s.c`<p class="theme-text">${this._getName(this._cycle.Cycle2)}</p>`:null}
						</div>
						${this._isATheme(this._cycle.Cycle2)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._colorPicker="Cycle2"}">
						${this._isAColor(this._cycle.Cycle2)?s.c`<div class="theme bg ${this._cycle.Cycle2}"></div>`:null}
						<div class="wrapper">
							<p>Color</p>
							${this._isAColor(this._cycle.Cycle2)?s.c`<p class="theme-text">${this._getName(this._cycle.Cycle2)}</p>`:null}
						</div>
						${this._isAColor(this._cycle.Cycle2)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._handleChooseFlashlight("Cycle2")}">
						<div class="wrapper">
							<p>Flashlight</p>
						</div>
						${"Flashlight"===this._cycle.Cycle2?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
				</div>

				<div class="title-container">
					<h6 class="dark-red">Click 3</h6>
				</div>
				<div class="content-wrapper">
					<div class="option" @click="${()=>this._themePicker="Cycle3"}">
						${this._isATheme(this._cycle.Cycle3)?s.c`<div class="theme bg ${this._cycle.Cycle3}"></div>`:null}
						<div class="wrapper">
							<p>Theme</p>
							${this._isATheme(this._cycle.Cycle3)?s.c`<p class="theme-text">${this._getName(this._cycle.Cycle3)}</p>`:null}
						</div>
						${this._isATheme(this._cycle.Cycle3)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._colorPicker="Cycle3"}">
						${this._isAColor(this._cycle.Cycle3)?s.c`<div class="theme bg ${this._cycle.Cycle3}"></div>`:null}
						<div class="wrapper">
							<p>Color</p>
							${this._isAColor(this._cycle.Cycle3)?s.c`<p class="theme-text">${this._getName(this._cycle.Cycle3)}</p>`:null}
						</div>
						${this._isAColor(this._cycle.Cycle3)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._handleChooseFlashlight("Cycle3")}">
						<div class="wrapper">
							<p>Flashlight</p>
						</div>
						${"Flashlight"===this._cycle.Cycle3?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
				</div>
			</div>

			<div class="double-click-page" style="display: ${"Double Click"===this._showPage?"block":"none"}">
				<div class="title-container">
					<h6 class="dark-red">Settings</h6>
				</div>
				<div class="content-wrapper">
					<div class="option" @click="${()=>this._themePicker="DoubleClick"}">
						${this._isATheme(this._doubleClick)?s.c`<div class="theme bg ${this._doubleClick}"></div>`:null}
						<div class="wrapper">
							<p>Theme</p>
							${this._isATheme(this._doubleClick)?s.c`<p class="theme-text">${this._getName(this._doubleClick)}</p>`:null}
						</div>
						${this._isATheme(this._doubleClick)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._colorPicker="DoubleClick"}">
						${this._isAColor(this._doubleClick)?s.c`<div class="theme bg ${this._doubleClick}"></div>`:null}
						<div class="wrapper">
							<p>Color</p>
							${this._isAColor(this._doubleClick)?s.c`<p class="theme-text">${this._getName(this._doubleClick)}</p>`:null}
						</div>
						${this._isAColor(this._doubleClick)?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
					<div class="option" @click="${()=>this._doubleClick="Flashlight"}">
						<div class="wrapper">
							<p>Flashlight</p>
						</div>
						${"Flashlight"===this._doubleClick?s.c`<img src="icons/check-red.svg" />`:null}
					</div>
				</div>
			</div>

			<div class="picker-popup" style="display: ${null!=this._themePicker?"flex":"none"}">
				<div class="content">
					<div class="header">
						<p>Pick a theme</p>
						<a @click="${()=>this._themePicker=null}"><img src="icons/close.svg" /></a>
					</div>
					<div class="items">
						<div class="item">
							<div class="bg sunrise ${this._isThemeActive("sunrise")?"active":""}" @click="${()=>this._handleChooseTheme("sunrise")}"></div>
							<p>Sunrise</p>
						</div>
						<div class="item">
							<div class="bg police ${this._isThemeActive("police")?"active":""}" @click="${()=>this._handleChooseTheme("police")}"></div>
							<p>Police</p>
						</div>
						<div class="item">
							<div class="bg disco ${this._isThemeActive("disco")?"active":""}" @click="${()=>this._handleChooseTheme("disco")}"></div>
							<p>Disco</p>
						</div>
						<div class="item">
							<div class="bg candle ${this._isThemeActive("candle")?"active":""}" @click="${()=>this._handleChooseTheme("candle")}"></div>
							<p>Candle</p>
						</div>
						<div class="item">
							<div class="bg rainbow ${this._isThemeActive("rainbow")?"active":""}" @click="${()=>this._handleChooseTheme("rainbow")}"></div>
							<p>Rainbow</p>
						</div>
						<div class="item">
							<div class="bg strobe ${this._isThemeActive("strobe")?"active":""}" @click="${()=>this._handleChooseTheme("strobe")}"></div>
							<p>Strobe</p>
						</div>
						<div class="item">
							<div class="bg redlight ${this._isThemeActive("redlight")?"active":""}" @click="${()=>this._handleChooseTheme("redlight")}"></div>
							<p>Red Light</p>
						</div>
					</div>
				</div>
			</div>

			<div class="picker-popup" style="display: ${null!=this._colorPicker?"flex":"none"}">
				<div class="content">
					<div class="header">
						<p>Pick a color</p>
						<a @click="${()=>this._colorPicker=null}"><img src="icons/close.svg" /></a>
					</div>
					<div class="items">
						<div class="item">
							<div class="bg blue ${this._isColorActive("blue")?"active":""}" @click="${()=>this._handleChooseColor("blue")}"></div>
							<p>Blue</p>
						</div>
						<div class="item">
							<div class="bg lime ${this._isColorActive("lime")?"active":""}" @click="${()=>this._handleChooseColor("lime")}"></div>
							<p>Lime</p>
						</div>
						<div class="item">
							<div class="bg violet ${this._isColorActive("violet")?"active":""}" @click="${()=>this._handleChooseColor("violet")}"></div>
							<p>Violet</p>
						</div>
						<div class="item">
							<div class="bg red ${this._isColorActive("red")?"active":""}" @click="${()=>this._handleChooseColor("red")}"></div>
							<p>Red</p>
						</div>
						<div class="item">
							<div class="bg orange ${this._isColorActive("orange")?"active":""}" @click="${()=>this._handleChooseColor("orange")}"></div>
							<p>Orange</p>
						</div>
						<div class="item">
							<div class="bg yellow ${this._isColorActive("yellow")?"active":""}" @click="${()=>this._handleChooseColor("yellow")}"></div>
							<p>Yellow</p>
						</div>
						<div class="item">
							<div class="bg purple ${this._isColorActive("purple")?"active":""}" @click="${()=>this._handleChooseColor("purple")}"></div>
							<p>Purple</p>
						</div>
						<div class="item">
							<div class="bg pink ${this._isColorActive("pink")?"active":""}" @click="${()=>this._handleChooseColor("pink")}"></div>
							<p>Pink</p>
						</div>
						<div class="item">
							<div class="bg cyan ${this._isColorActive("cyan")?"active":""}" @click="${()=>this._handleChooseColor("cyan")}"></div>
							<p>Cyan</p>
						</div>
					</div>
				</div>
			</div>
    </div>

    <footer class="app-footer" style="display: ${this._showPage?"none":"block"};">
      <div class="container">
        <a href="javascript:;" @click="${()=>a.a.dispatch(Object(t.y)("/pallet-page"))}">
          <img src="${"pallet-page"===this._page?"icons/flashlight-active.svg":"icons/flashlight.svg"}" />
        </a>
        <a href="javascript:;" @click="${()=>a.a.dispatch(Object(t.y)("/themes-page"))}">
          <img src="${"themes-page"===this._page?"icons/themes-active.svg":"icons/themes.svg"}" />
        </a>
        <a href="javascript:;" @click="${()=>a.a.dispatch(Object(t.y)("/wheel-page"))}">
          <img src="${"wheel-page"===this._page?"icons/palette-active.svg":"icons/palette.svg"}" />
        </a>
				<a href="javascript:;" @click="${()=>a.a.dispatch(Object(t.y)("/settings-page"))}">
          <img src="${"settings-page"===this._page?"icons/settings-active.svg":"icons/settings-page.svg"}" />
        </a>
      </div>
    </footer>
    `}static get properties(){return{_headerTitle:{type:String},_page:{type:String},_language:{type:String},_showPage:{type:String},_themePicker:{type:String},_colorPicker:{type:String},_cycle:{type:Object},_doubleClick:{type:String}}}static get styles(){return[r.a,s.b`
			.wrapper {
				height: calc(100% - 70px);
				overflow: auto;
			}

			.save-header {
				font-family: Roboto;
				font-style: normal;
				font-weight: normal;
				font-size: 17px;
				line-height: 24px;
				letter-spacing: -0.408px;
				color: #283945;
				display: block;
				position: absolute;
				right: 16px;
			}

			.title-container {
				padding: 12px 20px;
			}

			.content-wrapper {
				padding: 0 8px;
				margin-bottom: 16px;
			}

			.content-wrapper .option {
				margin-bottom: 2px;
				padding: 14px 22px;
				background-color: white;
				display: flex;
				align-items: center;
				cursor: pointer;
			}

			.content-wrapper .option .wrapper {
				flex-grow: 1;
			}

			.content-wrapper .option p {
				flex-grow: 1;
				font-family: Roboto;
				font-weight: normal;
				font-size: 17px;
				line-height: 22px;
				color: #112331;
			}

			.content-wrapper .option .icon {
				width: 20px;
				margin-right: 8px;
			}

			.content-wrapper .option .theme.bg {
				width: 40px;
				height: 40px;
				border-radius: 8px;
				margin-right: 16px;
			}

			.content-wrapper .option .theme-text {
				text-transform: capitalize;
				color: #6F7B83;
				margin-top: 4px;
			}

			.picker-popup {
				position: fixed;
				z-index: 100;
				background-color: rgba(0, 0, 0, 0.5);
				width: 100%;
				height: 100%;
				inset: 0;
				display: flex;
			}

			.picker-popup .content {
				// height: 300px;
				background-color: white;
				margin-top: auto;
				border-radius: 16px;
				padding: 16px 16px 32px;
			}

			.picker-popup .content .header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 32px;
			}

			.picker-popup .content .header p {
				font-family: Roboto;
				font-weight: bold;
				font-size: 17px;
				line-height: 22px;
				letter-spacing: 0.1px;
				color: #283945;
			}

			.items {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				row-gap: 16px;
				column-gap: 12px;
			}

			.items .item.disabled {
				opacity: 0.3;
			}

			.items .item.disabled .bg {
				pointer-events: none;
			}

			.items .item .bg {
				width: 100%;
				max-width: 106px;
				height: 106px;
				border-radius: 8px;
				margin: 0 auto 8px auto;
				cursor: pointer;
			}

			.items .item .bg.active {
				border: 2px solid #D7A8AE;
				padding: 4px;
				position: relative;
			}

			.items .item .bg.active:before {
				background: none;
				border: 4px solid #fff;
				content: "";
				display: block;
				position: absolute;
				top: 0px;
				left: 0px;
				right: 0px;
				bottom: 0px;
				border-radius: 8px;
				pointer-events: none;
			}

			.items .item p {
				text-align: center;
				font-family: Roboto;
				font-weight: normal;
				font-size: 17px;
				line-height: 24px;
				letter-spacing: -0.408px;
				color: #112331;
			}

			.bg.sunrise {
				background: linear-gradient(135deg, #FFF850 0%, #73C4FF 100%);
			}

			.bg.police {
				background: linear-gradient(135deg, #FF0000 0%, #FF7D7D 55.42%, #246EFF 55.43%);
			}

			.bg.disco {
				background: linear-gradient(135deg, #F47BFF 0%, #203085 100%);
			}

			.bg.candle {
				background: linear-gradient(132.95deg, #FF8856 3.77%, #F0FF48 91.38%);
			}

			.bg.rainbow {
				background: linear-gradient(135deg, #FF0000 0%, #FFA800 13.25%, #FFF500 23.14%, #2BF53F 38.77%, #39F6EA 56.48%, #415EF6 66.89%, #9A4BE9 78.35%, #DD7BC8 89.29%, #F75C5C 100%);
			}

			.bg.strobe {
				background: linear-gradient(135deg, #404040 0%, rgba(87, 87, 87, 0.825871) 55.42%, #F5F5F5 55.43%);
			}

			.bg.redlight {
				background: linear-gradient(132.95deg, #DE4444 3.77%, #FF5C29 91.38%);
			}

			.bg.blue {
				background: linear-gradient(135deg, #50D5FF 0%, #73C4FF 100%);
			}

			.bg.lime {
				background: #C4FF47;
			}

			.bg.violet {
				background: #DC5BE8;
			}

			.bg.red {
				background: #F95C5C;
			}

			.bg.orange {
				background: #FE9D43;
			}

			.bg.yellow {
				background: #FFF500;
			}

			.bg.purple {
				background: #7A58FF;
			}

			.bg.pink {
				background: #FF69C3;
			}

			.bg.cyan {
				background: #72FFE6;
			}

			.bg.custom {
				background: #B2BEC3 !important;
			}
		`]}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(){super.firstUpdated()}updated(e){e.has("_language")&&Object(n.c)(this._language)}async connectedCallback(){Object(n.b)({loader:e=>Promise.resolve(p[e])}),super.connectedCallback()}stateChanged(e){this._headerTitle=e.app.headerTitle,this._page=e.app.page,this._language=e.app.language}}window.customElements.define("settings-page",g)}}]);