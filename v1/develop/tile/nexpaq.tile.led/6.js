(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{42:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i(5);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class a extends s.a{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}},50:function(e,t,i){"use strict";i.r(t);var s=i(5),a=i(42),c=i(3),r=i(16),n=i(21),p=i(22),h=(i(24),i(32),i(11)),d=i(23);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class o extends(Object(n.a)(r.a)(a.a)){static get properties(){return{_page:{type:String},_language:{type:String},_currentTheme:{type:String},_headerTitle:{type:String}}}static get styles(){return[p.a,s.b`
			.themes-page {
				height: 100%;
				display: flex;
				flex-direction: column;
			}

			.themes-page .app-header {
				flex-shrink: 0;
			}

			.themes-page .wrapper {
				flex-grow: 1;
				overflow: auto;
			}

			.themes-page .app-footer {
				position: unset;
			}

			.themes-items-container img {
				width: 103px;
				height: 133px;
				box-sizing: content-box;
			}

			.themes-items-container .bg-red {
				width: 103px;
				height: 133px;
				box-sizing: content-box;
				padding: 5px;
				border: 2px solid transparent;
				border-radius: 13px;
				cursor: pointer;
				background: linear-gradient(132.95deg, #DE4444 3.77%, #FF5C29 91.38%);
			}
		`]}updated(e){e.has("_language")&&Object(h.c)(this._language)}async connectedCallback(){Object(h.b)({loader:e=>Promise.resolve(d[e])}),super.connectedCallback()}render(){return s.c`
		<div class="content themes-page">

		<header class="app-header">
		  <div class="back">
			<a href="javascript:;" @click="${()=>r.a.dispatch(Object(c.v)())}">
			  <img src="icons/back.svg" />
			</a>
		  </div>
		  <h4 class="title">${this._headerTitle}</h4>
		</header>
  
		<div class="wrapper">
		  <h6 class="dark-red m-20">${Object(h.a)("themes.title")}</h6>
  
		  <div class="themes-container">
			<div class="themes-items-container">
				<div  class="item ${"Meditation"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("Meditation"))}">
				  <img src="icons/sunrise.svg">
				  <p>${Object(h.a)("themes.sunrise")}</p>
				</div>
				<div class="item ${"Police"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("Police"))}">
				  <img src="icons/police.svg">
				  <p>${Object(h.a)("themes.police")}</p>
				</div>
				<div class="item ${"Disco"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("Disco"))}">
				  <img src="icons/disco.svg">
				  <p>${Object(h.a)("themes.disco")}</p>
				</div>
			</div>
		  </div>
		  <div class="themes-container">
			<div class="themes-items-container">
				<div class="item ${"CandleFlicker"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("CandleFlicker"))}">
				  <img src="icons/candle.svg">
				  <p>${Object(h.a)("themes.candle")}</p>
				</div>
				<div class="item ${"Romance"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("Romance"))}">
				  <img src="icons/rainbow.svg">
				  <p>${Object(h.a)("themes.rainbow")}</p>
				</div>
				<div class="item ${"Strobe"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("Strobe"))}">
				  <img src="icons/strobe.svg">
				  <p>${Object(h.a)("themes.strobe")}</p>
				</div>
			</div>
		  </div>
			<div class="themes-container">
			<div class="themes-items-container">
				<div class="item ${"RedLight"===this._currentTheme?"active":""}" @click="${()=>r.a.dispatch(Object(c.E)("RedLight"))}">
					<img src="icons/red.svg">
				  <p>${Object(h.a)("themes.red")}</p>
				</div>
		  </div>
		</div>
	  </div>
  
	  <footer class="app-footer">
      <div class="container">
        <a href="javascript:;" @click="${()=>r.a.dispatch(Object(c.y)("/pallet-page"))}">
          <img src="${"pallet-page"===this._page?"icons/flashlight-active.svg":"icons/flashlight.svg"}" />
        </a>
        <a href="javascript:;" @click="${()=>r.a.dispatch(Object(c.y)("/themes-page"))}">
          <img src="${"themes-page"===this._page?"icons/themes-active.svg":"icons/themes.svg"}" />
        </a>
        <a href="javascript:;" @click="${()=>r.a.dispatch(Object(c.y)("/wheel-page"))}">
          <img src="${"wheel-page"===this._page?"icons/palette-active.svg":"icons/palette.svg"}" />
        </a>
				<a href="javascript:;" @click="${()=>r.a.dispatch(Object(c.y)("/settings-page"))}">
          <img src="${"settings-page"===this._page?"icons/settings-active.svg":"icons/settings-page.svg"}" />
        </a>
      </div>
    </footer>
    `}stateChanged(e){this._page=e.app.page,this._language=e.app.language,this._currentTheme=e.app.currentTheme,this._headerTitle=e.app.headerTitle}}window.customElements.define("themes-page",o)}}]);