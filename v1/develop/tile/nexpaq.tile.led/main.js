!function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);c.length;)c.shift()()}var r={},n={1:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({}[e]||e)+".js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}n[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;o(o.s=41)}([function(e,t,r){"use strict";const n=Object.freeze({On:!0,Off:!1});t.a=n},function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"e",(function(){return h}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,i=new RegExp(`${n}|${o}`),a="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const r=[],o=[],s=document.createTreeWalker(t.content,133,null,!1);let c=0,d=-1,p=0;const{strings:f,values:{length:g}}=e;for(;p<g;){const e=s.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)l(t[e].name,a)&&n++;for(;n-- >0;){const t=f[p],r=h.exec(t)[2],n=r.toLowerCase()+a,o=e.getAttribute(n);e.removeAttribute(n);const s=o.split(i);this.parts.push({type:"attribute",index:d,name:r,strings:s}),p+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,o=t.split(i),s=o.length-1;for(let t=0;t<s;t++){let r,i=o[t];if(""===i)r=u();else{const e=h.exec(i);null!==e&&l(e[2],a)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),r=document.createTextNode(i)}n.insertBefore(r,e),this.parts.push({type:"node",index:++d})}""===o[s]?(n.insertBefore(u(),e),r.push(e)):e.data=o[s],p+=s}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&d!==c||(d++,t.insertBefore(u(),e)),c=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(r.push(e),d--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),p++}}else s.currentNode=o.pop()}for(const e of r)e.parentNode.removeChild(e)}}const l=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},c=e=>-1!==e.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,r){"use strict";var n=r(35),o=r(38),i=[].slice,a=["keyword","gray","hex"],s={};Object.keys(o).forEach((function(e){s[i.call(o[e].labels).sort().join("")]=e}));var l={};function c(e,t){if(!(this instanceof c))return new c(e,t);if(t&&t in a&&(t=null),t&&!(t in o))throw new Error("Unknown model: "+t);var r,u;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof c)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){var h=n.get(e);if(null===h)throw new Error("Unable to parse color from string: "+e);this.model=h.model,u=o[this.model].channels,this.color=h.value.slice(0,u),this.valpha="number"==typeof h.value[u]?h.value[u]:1}else if(e.length){this.model=t||"rgb",u=o[this.model].channels;var d=i.call(e,0,u);this.color=p(d,u),this.valpha="number"==typeof e[u]?e[u]:1}else if("number"==typeof e)e&=16777215,this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;var f=Object.keys(e);"alpha"in e&&(f.splice(f.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);var g=f.sort().join("");if(!(g in s))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=s[g];var m=o[this.model].labels,b=[];for(r=0;r<m.length;r++)b.push(e[m[r]]);this.color=p(b)}if(l[this.model])for(u=o[this.model].channels,r=0;r<u;r++){var v=l[this.model][r];v&&(this.color[r]=v(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function u(e,t,r){return(e=Array.isArray(e)?e:[e]).forEach((function(e){(l[e]||(l[e]=[]))[t]=r})),e=e[0],function(n){var o;return arguments.length?(r&&(n=r(n)),(o=this[e]()).color[t]=n,o):(o=this[e]().color[t],r&&(o=r(o)),o)}}function h(e){return function(t){return Math.max(0,Math.min(e,t))}}function d(e){return Array.isArray(e)?e:[e]}function p(e,t){for(var r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}c.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(e){var t=this.model in n.to?this:this.rgb(),r=1===(t=t.round("number"==typeof e?e:1)).valpha?t.color:t.color.concat(this.valpha);return n.to[t.model](r)},percentString:function(e){var t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:t.color.concat(this.valpha);return n.to.rgb.percent(r)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var e={},t=o[this.model].channels,r=o[this.model].labels,n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray:function(){var e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject:function(){var e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round:function(e){return e=Math.max(e||0,0),new c(this.color.map(function(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}(e)).concat(this.valpha),this.model)},alpha:function(e){return arguments.length?new c(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:u("rgb",0,h(255)),green:u("rgb",1,h(255)),blue:u("rgb",2,h(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,(function(e){return(e%360+360)%360})),saturationl:u("hsl",1,h(100)),lightness:u("hsl",2,h(100)),saturationv:u("hsv",1,h(100)),value:u("hsv",2,h(100)),chroma:u("hcg",1,h(100)),gray:u("hcg",2,h(100)),white:u("hwb",1,h(100)),wblack:u("hwb",2,h(100)),cyan:u("cmyk",0,h(100)),magenta:u("cmyk",1,h(100)),yellow:u("cmyk",2,h(100)),black:u("cmyk",3,h(100)),x:u("xyz",0,h(100)),y:u("xyz",1,h(100)),z:u("xyz",2,h(100)),l:u("lab",0,h(100)),a:u("lab",1),b:u("lab",2),keyword:function(e){return arguments.length?new c(e):o[this.model].keyword(this.color)},hex:function(e){return arguments.length?new c(e):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity:function(){for(var e=this.rgb().color,t=[],r=0;r<e.length;r++){var n=e[r]/255;t[r]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(e){var t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level:function(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var e=this.rgb().color;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var e=this.rgb(),t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten:function(e){var t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken:function(e){var t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate:function(e){var t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate:function(e){var t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten:function(e){var t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken:function(e){var t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale:function(){var e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return c.rgb(t,t,t)},fade:function(e){return this.alpha(this.valpha-this.valpha*e)},opaquer:function(e){return this.alpha(this.valpha+this.valpha*e)},rotate:function(e){var t=this.hsl(),r=t.color[0];return r=(r=(r+e)%360)<0?360+r:r,t.color[0]=r,t},mix:function(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);var r=e.rgb(),n=this.rgb(),o=void 0===t?.5:t,i=2*o-1,a=r.alpha()-n.alpha(),s=((i*a==-1?i:(i+a)/(1+i*a))+1)/2,l=1-s;return c.rgb(s*r.red()+l*n.red(),s*r.green()+l*n.green(),s*r.blue()+l*n.blue(),r.alpha()*o+n.alpha()*(1-o))}},Object.keys(o).forEach((function(e){if(-1===a.indexOf(e)){var t=o[e].channels;c.prototype[e]=function(){if(this.model===e)return new c(this);if(arguments.length)return new c(arguments,e);var r="number"==typeof arguments[t]?t:this.valpha;return new c(d(o[this.model][e].raw(this.color)).concat(r),e)},c[e]=function(r){return"number"==typeof r&&(r=p(i.call(arguments),t)),new c(r,e)}}})),e.exports=c},function(e,t,r){"use strict";var n=r(18);var o=Object.freeze({Brightness:"brightness",Accuracy:"accuracy"});class i{constructor(){this.active=!1,this.period=100,this.colorPriority=o.Accuracy}start(){this.active||(this.active=!0,this._loop())}stop(){this.active=!1}update(){}async _loop(){for(;this.active;)await this.update(),await this._sleep(this.period)}_sleep(e){return new Promise((t,r)=>{setTimeout(()=>t(),e)})}}var a=r(9);var s=r(2),l=r.n(s);var c=r(25);var u=r(0),h=r(11),d=r(4);r.d(t,"e",(function(){return C})),r.d(t,"q",(function(){return k})),r.d(t,"k",(function(){return M})),r.d(t,"h",(function(){return E})),r.d(t,"o",(function(){return O})),r.d(t,"b",(function(){return A})),r.d(t,"a",(function(){return P})),r.d(t,"j",(function(){return T})),r.d(t,"i",(function(){return j})),r.d(t,"d",(function(){return N})),r.d(t,"g",(function(){return R})),r.d(t,"p",(function(){return L})),r.d(t,"f",(function(){return z})),r.d(t,"n",(function(){return I})),r.d(t,"l",(function(){return D})),r.d(t,"m",(function(){return F})),r.d(t,"c",(function(){return B})),r.d(t,"w",(function(){return U})),r.d(t,"u",(function(){return V})),r.d(t,"y",(function(){return q})),r.d(t,"v",(function(){return Y})),r.d(t,"E",(function(){return K})),r.d(t,"D",(function(){return Z})),r.d(t,"C",(function(){return ee})),r.d(t,"B",(function(){return te})),r.d(t,"t",(function(){return re})),r.d(t,"s",(function(){return ne})),r.d(t,"F",(function(){return oe})),r.d(t,"A",(function(){return ie})),r.d(t,"z",(function(){return ae})),r.d(t,"x",(function(){return se})),r.d(t,"r",(function(){return le}));
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const p=new c.a;p.start();const f=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this._commandBufferFilter=e,this._color=[100,90,0]}stop(){super.stop(),Object(a.i)(this._commandBufferFilter,0,0,0),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){const e=this._getRandomArbitrary(.7,1.2),t=this._color.map(t=>t*e);await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",t)}_getRandomArbitrary(e,t){return Math.random()*(t-e)+e}}(p),g=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this.colorPriority=o.Brightness,this._commandBufferFilter=e,this._period=0,this._redColor=[255,0,0],this._blueColor=[0,0,255],this._colorDuration=400}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){this.active&&(await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",this._redColor),await this._sleep(128)),this.active&&(await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",this._blueColor),await this._sleep(128))}}(p),m=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this._commandBufferFilter=e}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[255,255,255]),await this._sleep(100),await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0])}}(p),b=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this._commandBufferFilter=e,this.period=1e3}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"SetFlashes",[0,0]))}async update(){await this._flash(200),await this._flash(200),await this._flash(200),await this._flash(500),await this._flash(500),await this._flash(500),await this._flash(200),await this._flash(200),await this._flash(200)}async _flash(e){this.active&&(await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"SetFlashes",[8e3,8e3]),await this._sleep(e),await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"SetFlashes",[0,0]),await this._sleep(e))}}(p),v=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this._commandBufferFilter=e,this._color=l()("red")}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){this._color=this._color.rotate(2);const[e,t,r]=[this._color.red(),this._color.green(),this._color.blue()];await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[e,t,r])}}(p),w=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this.colorPriority=o.Brightness,this._commandBufferFilter=e,this.period=100,this._position=0,this._sequence=this._discoSequence()}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){const e=this._sequence[this._position];this._position++,this._position>=this._sequence.length&&(this._position=0),this.period=e.duration;const[t,r,n]=[e.r,e.g,e.b];await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[t,r,n])}_discoSequence(){return[{r:255,g:50,b:0,duration:100},{r:255,g:0,b:255,duration:100},{r:0,g:250,b:0,duration:1e3},{r:0,g:0,b:0,duration:100},{r:255,g:50,b:0,duration:100},{r:139,g:0,b:0,duration:100},{r:0,g:250,b:0,duration:100},{r:0,g:0,b:0,duration:100},{r:255,g:108,b:180,duration:1e3},{r:139,g:0,b:0,duration:100},{r:20,g:0,b:0,duration:100},{r:0,g:0,b:0,duration:100},{r:50,g:50,b:100,duration:100},{r:10,g:0,b:0,duration:100},{r:150,g:0,b:250,duration:100},{r:0,g:0,b:0,duration:100},{r:0,g:250,b:50,duration:100},{r:1,g:250,b:250,duration:100},{r:100,g:20,b:200,duration:1e3},{r:139,g:250,b:250,duration:100},{r:20,g:0,b:250,duration:1e3},{r:0,g:0,b:0,duration:100},{r:150,g:0,b:250,duration:100},{r:0,g:0,b:0,duration:100},{r:20,g:250,b:20,duration:100},{r:50,g:150,b:250,duration:100},{r:100,g:50,b:200,duration:1e3}]}}(p),y=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this.colorPriority=o.Brightness,this._commandBufferFilter=e,this._color=l.a.rgb(254,1,5),this._hueRange={left:25,right:310},this._lightnessRange={min:40,max:60},this._direction=1,this._speed=.5}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){this._color=this._color.rotate(this._speed*this._direction);const e=this._color.hue();e>this._hueRange.left&&e<this._hueRange.right&&(this._direction*=-1);const t=this._getRandomArbitrary(-.5,.5);let r=this._color.lightness();r+=t,r>this._lightnessRange.max&&(r=this._lightnessRange.max),r<this._lightnessRange.min&&(r=this._lightnessRange.min),this._color=this._color.lightness(r);const[n,o,i]=[this._color.red(),this._color.green(),this._color.blue()];await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[n,o,i])}_getRandomArbitrary(e,t){return Math.random()*(t-e)+e}}(p),x=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this._commandBufferFilter=e,this._color=l.a.rgb(1,239,239),this._hueRange={left:35,right:290},this._lightnessRange={min:40,max:60},this._direction=1,this._speed=.5}stop(){super.stop(),Object(a.i)(this._commandBufferFilter,0,0,0)}async update(){this._color=this._color.rotate(this._speed*this._direction);const e=this._color.hue();(e<this._hueRange.left||e>this._hueRange.right)&&(this._direction*=-1);const t=this._getRandomArbitrary(-.5,.5);let r=this._color.lightness();r+=t,r>this._lightnessRange.max&&(r=this._lightnessRange.max),r<this._lightnessRange.min&&(r=this._lightnessRange.min),this._color=this._color.lightness(r);const[n,o,i]=[this._color.red(),this._color.green(),this._color.blue()];Object(a.i)(this._commandBufferFilter,n,o,i)}_getRandomArbitrary(e,t){return Math.random()*(t-e)+e}}(p),_=new class extends i{constructor(e){if(super(),null==e)throw new Exception("Command buffer required for the theme");this.colorPriority=o.Brightness,this._commandBufferFilter=e,this._redColor=[255,0,0]}stop(){super.stop(),this._commandBufferFilter.setCommand(()=>Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",[0,0,0]))}async update(){await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid,"StreamRGB",this._redColor)}}(p),S=new class{constructor(){this.themes={},this._currentTheme=null}addTheme(e,t){this.themes[e]=t}play(e){if(void 0===this.themes[e])throw new Exception("Unknown theme name");null!=this._currentTheme&&this._currentTheme.stop(),this._currentTheme=this.themes[e],this._currentTheme.colorPriority==o.Brightness?Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"PrioritizeColorBrightness",[]):this._currentTheme.colorPriority==o.Accuracy&&Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"PrioritizeColorAccuracy",[]),this._currentTheme.start()}stop(){null!=this._currentTheme&&(this._currentTheme.stop(),this._currentTheme=null)}};S.addTheme("CandleFlicker",f),S.addTheme("Police",g),S.addTheme("Strobe",m),S.addTheme("SOS",b),S.addTheme("Meditation",v),S.addTheme("Disco",w),S.addTheme("Romance",y),S.addTheme("Study",x),S.addTheme("RedLight",_);const C="GET_PLATFORM",k="UPDATE_PAGE",M="MODUWARE_API_READY",E="LOAD_LANGUAGE_TRANSLATION",O="THEME_TOGGLED",A="CURRENT_UI_COLOR_CHANGED",P="CURRENT_COLOR_CHANGED",T="MAIN_LIGHT_STATE_CHANGED",j="LOCK_TOGGLED",N="FLASH_TOGGLED",R="LIGHTNESS_CHANGED",L="UPDATE_HEADER_TITLE",z="LED_STATE_RECEIVED",I="SAVE_COLOR",D="REMOVE_COLOR",F="SAVED_COLORS_CHANGED",B="DO_UPDATE_CHANGED",U=()=>async e=>{let t=new Promise((e,t)=>{"undefined"==typeof Moduware?document.addEventListener("WebViewApiReady",e):e()});await t,e(H())},V=()=>{var e=Object(n.a)();return{type:C,platform:e}},H=()=>async(e,t)=>{e({type:M}),e($()),Moduware.API.addEventListener("HardwareBackButtonPressed",()=>{e(X())}),Moduware.v1.Module.addEventListener("MessageReceived",async r=>{if(r.ModuleUuid===Moduware.Arguments.uuid&&"RequestStatusResponse"===r.Message.dataSource&&!1===t().app.ledStateReceived){var n=l.a.rgb(parseFloat(r.Message.variables.led0ColorR),parseFloat(r.Message.variables.led0ColorG),parseFloat(r.Message.variables.led0ColorB));n.color[0]===d.a.red.moduleColor.color[0]&&n.color[1]===d.a.red.moduleColor.color[1]&&n.color[2]===d.a.red.moduleColor.color[2]?e(Q(d.a.red)):n.color[0]===d.a.green.moduleColor.color[0]&&n.color[1]===d.a.green.moduleColor.color[1]&&n.color[2]===d.a.green.moduleColor.color[2]?e(Q(d.a.green)):n.color[0]===d.a.blue.moduleColor.color[0]&&n.color[1]===d.a.blue.moduleColor.color[1]&&n.color[2]===d.a.blue.moduleColor.color[2]?e(Q(d.a.blue)):n.color[0]===d.a.yellow.moduleColor.color[0]&&n.color[1]===d.a.yellow.moduleColor.color[1]&&n.color[2]===d.a.yellow.moduleColor.color[2]?e(Q(d.a.yellow)):n.color[0]===d.a.white.moduleColor.color[0]&&n.color[1]===d.a.white.moduleColor.color[1]&&n.color[2]===d.a.white.moduleColor.color[2]&&e(Q(d.a.white)),e({type:z,flashLedLeftState:"0"===r.Message.variables.flash1OnOff?u.a.Off:u.a.On,flashLedRightState:"0"===r.Message.variables.flash2OnOff?u.a.Off:u.a.On,ledsState:"0"===r.Message.variables.led0State?u.a.Off:u.a.On})}}),Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"RequestStatus",[])},q=e=>t=>{const r="/"===e?"pallet-page":e.slice(1);t(G()),t(W(r))},G=()=>e=>{e(le(!0)),e(K("")),Object(a.i)(p,0,0,0),Object(a.g)(p,0),Object(a.j)(p,0),e(ne(0)),e(te()),e({type:O,currentTheme:null})},$=()=>async e=>{e({type:E,language:Moduware.Arguments.language})},W=e=>t=>{switch(e){case"pallet-page":Promise.all([r.e(0),r.e(4)]).then(r.bind(null,49)).then(()=>{t(oe(Object(h.a)("pallet-page.title")))});break;case"wheel-page":Promise.all([r.e(0),r.e(2)]).then(r.bind(null,53)).then(()=>{t(oe(Object(h.a)("wheel-page.title")))});break;case"themes-page":r.e(6).then(r.bind(null,50)).then(()=>{t(oe(Object(h.a)("themes-page.title")))});break;case"settings-page":r.e(5).then(r.bind(null,51)).then(()=>{t(oe(Object(h.a)("settings-page.title")))});break;default:e="error-page",r.e(3).then(r.bind(null,52)).then(()=>{t(oe("error"))})}t(J(e))},J=e=>({type:k,page:e}),Y=()=>(e,t)=>{"pallet-page"===t().app.page?Moduware.API.Exit():"wheel-page"===t().app.page?e(q("/themes-page")):"themes-page"===t().app.page?e(q("/pallet-page")):"settings-page"===t().app.page?e(q("/pallet-page")):t().app.apiReady&&Moduware.API.Exit()},X=()=>(e,t)=>{Moduware&&("pallet-page"===t().app.page?Moduware.API.Exit():"wheel-page"===t().app.page?e(q("/themes-page")):"themes-page"===t().app.page?e(q("/pallet-page")):t().app.apiReady&&Moduware.API.Exit())},K=e=>(t,r)=>{""===e?(S.stop(),t({type:O,currentTheme:null})):null===r().app.currentTheme?(r().app.ledsState===u.a.On&&t(te()),S.play(e),t({type:O,currentTheme:e})):r().app.currentTheme===e?(S.stop(),t({type:O,currentTheme:null})):r().app.currentTheme!==e&&(r().app.ledsState===u.a.On&&t(te()),S.play(e),t({type:O,currentTheme:e}))},Z=()=>(e,t)=>{t().app.ledsState===u.a.On?e(te()):e(ee())},Q=e=>(t,r)=>{t({type:A,color:e}),t({type:P,color:e.moduleColor}),r().app.ledsState===u.a.On&&t(ee())},ee=()=>(e,t)=>{"pallet-page"===t().app.page&&e({type:P,color:l()(t().app.currentUiColorName)}),null!==t().app.currentTheme&&e(K(""));let r=Object(a.e)(t().app.currentColor,t().app.lightness);const[n,o,i]=[r.red(),r.green(),r.blue()];Object(a.i)(p,n,o,i),e({type:T,state:u.a.On})},te=()=>e=>{Object(a.i)(p,0,0,0),e({type:T,state:u.a.Off})},re=e=>(t,r)=>{t({type:P,color:e}),r().app.ledsState===u.a.On&&t(ee())},ne=e=>(t,r)=>{t({type:R,lightness:e}),r().app.ledsState===u.a.On&&t(ee())},oe=e=>({type:L,headerTitle:e}),ie=()=>(e,t)=>{e({type:I,color:t().app.currentColor}),localStorage.setItem("items-key",JSON.stringify(t().app.savedColors))},ae=e=>(t,r)=>{t({type:D,color:e}),localStorage.setItem("items-key",JSON.stringify(r().app.savedColors))},se=()=>e=>{var t=localStorage.getItem("items-key");if(null!=t){var r=JSON.parse(t);e({type:F,savedColors:r})}},le=e=>t=>{t({type:B,value:e})}},function(e,t,r){"use strict";var n=r(2),o=r.n(n);const i={red:{uiColor:o.a.rgb(238,54,54),moduleColor:o()("red"),uiColorString:"rgb(238, 54, 54)",uiColorName:"red"},green:{uiColor:o.a.rgb(1,207,88),moduleColor:o()("green"),uiColorString:"rgb(1, 207, 88)",uiColorName:"green"},blue:{uiColor:o.a.rgb(17,169,255),moduleColor:o()("blue"),uiColorString:"rgb(17, 169, 255)",uiColorName:"blue"},yellow:{uiColor:o.a.rgb(252,187,64),moduleColor:o()("yellow"),uiColorString:"rgb(252, 187, 64)",uiColorName:"yellow"},white:{uiColor:o.a.rgb(255,255,255),moduleColor:o()("white"),uiColorString:"rgb(255, 255, 255)",uiColorName:"white"}};t.a=i},function(e,t,r){"use strict";var n=r(8),o=r(10),i=r(1);function a(e,t){const{element:{content:r},parts:n}=e,o=document.createTreeWalker(r,133,null,!1);let i=l(n),a=n[i],s=-1,c=0;const u=[];let h=null;for(;o.nextNode();){s++;const e=o.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(u.push(e),null===h&&(h=e)),null!==h&&c++;void 0!==a&&a.index===s;)a.index=null!==h?-1:a.index-c,i=l(n,i),a=n[i]}u.forEach(e=>e.parentNode.removeChild(e))}const s=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},l=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(Object(i.d)(t))return r}return-1};var c=r(14),u=r(12),h=r(17);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=e=>t=>{const r=d(t.type,e);let n=u.a.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},u.a.set(r,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(i.f);if(o=n.keyString.get(a),void 0===o){const r=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(r,e),o=new i.a(t,r),n.keyString.set(a,o)}return n.stringsArray.set(t.strings,o),o},g=["html","svg"],m=new Set,b=(e,t,r)=>{m.add(e);const n=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,e);const c=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),c.textContent+=t.textContent}(e=>{g.forEach(t=>{const r=u.a.get(d(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),a(e,r)})})})(e);const h=n.content;r?function(e,t,r=null){const{element:{content:n},parts:o}=e;if(null==r)return void n.appendChild(t);const i=document.createTreeWalker(n,133,null,!1);let a=l(o),c=0,u=-1;for(;i.nextNode();){for(u++,i.currentNode===r&&(c=s(t),r.parentNode.insertBefore(t,r));-1!==a&&o[a].index===u;){if(c>0){for(;-1!==a;)o[a].index+=c,a=l(o,a);return}a=l(o,a)}}}(r,c,h.firstChild):h.insertBefore(c,h.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const p=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(r){h.insertBefore(c,h.firstChild);const e=new Set;e.add(c),a(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},w=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:w},x=Promise.resolve(!0);class _ extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=x,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=y){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=w){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||v,o="function"==typeof n?n:n.fromAttribute;return o?o(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||v.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=y){const n=this.constructor,o=n._attributeNameForProperty(e,r);if(void 0!==o){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r._classProperties.get(n)||y;this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,o=n._classProperties.get(e)||y;n._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}_.finalized=!0;const S="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol();class k{constructor(e,t){if(t!==C)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(S?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const M=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof k)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new k(r,C)};r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return n.e})),r.d(t,"b",(function(){return M})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const E=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let n=0,o=t.length;n<o;n++){const o=t[n];Array.isArray(o)?e(o,r):r.push(o)}return r}(e);class O extends _{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){E(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?S?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof n.c&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}O.finalized=!0,O.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,i=c.a.has(t),a=p&&11===t.nodeType&&!!t.host,s=a&&!m.has(n),l=s?document.createDocumentFragment():t;if(Object(c.b)(e,l,Object.assign({templateFactory:f(n)},r)),s){const e=c.a.get(l);c.a.delete(l);const r=e.value instanceof h.a?e.value.template:void 0;b(n,l,r),Object(o.b)(t,t.firstChild),t.appendChild(l),c.a.set(t,e)}!i&&a&&window.ShadyCSS.styleElement(t.host)}},function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"f",(function(){return g})),r.d(t,"d",(function(){return v}));var n=r(13),o=r(10),i=r(7),a=r(17),s=r(15),l=r(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const c=e=>null===e||!("object"==typeof e||"function"==typeof e),u=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class h{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(c(e)||!u(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i.a||c(e)&&e===this.value||(this.value=e,Object(n.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const e=this.value;this.value=i.a,e(this)}this.value!==i.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(l.c)()),e.__insert(this.endNode=Object(l.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;Object(n.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.a,e(this)}const e=this.__pendingValue;e!==i.a&&(c(e)?e!==this.value&&this.__commitText(e):e instanceof s.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):u(e)?this.__commitIterable(e):e===i.b?(this.value=i.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof a.a&&this.value.template===t)this.value.update(e.values);else{const r=new a.a(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const o of e)r=t[n],void 0===r&&(r=new p(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(o),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){Object(o.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;Object(n.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.a,e(this)}if(this.__pendingValue===i.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.a}}class g extends h{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let b=!1;try{const e={get capture(){return b=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class v{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(n.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.a,e(this)}if(this.__pendingValue===i.a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=w(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const w=e=>e&&(b?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},o={}},function(e,t,r){"use strict";var n=r(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const o=new class{handleAttributeExpressions(e,t,r,o){const i=t[0];if("."===i){return new n.f(e,t.slice(1),r).parts}return"@"===i?[new n.d(e,t.slice(1),o.eventContext)]:"?"===i?[new n.c(e,t.slice(1),r)]:new n.a(e,t,r).parts}handleTextExpression(e){return new n.e(e)}};var i=r(15),a=r(13);r(10),r(7),r(14),r(12),r(17),r(1);r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return a.a})),r.d(t,"a",(function(){return n.b})),r.d(t,"b",(function(){return n.e})),r.d(t,"c",(function(){return i.b})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const s=(e,...t)=>new i.b(e,t,"html",o)},function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"i",(function(){return s})),r.d(t,"g",(function(){return l})),r.d(t,"j",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"h",(function(){return h})),r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return p})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return g}));var n=r(2),o=r.n(n);let i=!1;function a(e,t){if(null==e)throw new Exception("Color must be defined.");if("number"!=typeof t)throw new Exception("Adjustment must be a number.");if(t<-1||t>1)throw new Exception("Adjustment value must be between -1 and 1.");let r=e;if(t>0){const e=t;r=r.lighten(e)}else{const e=-1*t;r=r.darken(e)}return r}function s(e,t,r,n){o.a.rgb(t,r,n).lightness()>70?0==i&&(i=!0,console.log("turn on temperature protection"),Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"TurnOnRgbLedTemperatureProtection",[300])):1==i&&(i=!1,console.log("turn off temperature protection"),Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"TurnOffRgbLedTemperatureProtection",[])),null!=e?e.setCommand(()=>Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"StreamRGB",[t,r,n])):Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"StreamRGB",[t,r,n])}function l(e,t,r=[],n=0){try{const e=t>0?4e3:0,[o,i,a]=r;Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"StreamRGB",[o,i,a]),0===e?setTimeout(()=>{Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"TurnOffFlashs",[])},100):e>0&&0===n&&Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"SetFlashes",[e,e])}catch(e){console.log(e)}}function c(e,t){const r=t>0?1:0,n=t>0?100:0;null!=e?e.setCommand(()=>Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"ControlUV",[r,n])):Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"ControlUV",[r,n])}function u(e,t=100){let r;return(...n)=>{clearTimeout(r),r=setTimeout(()=>{e.apply(this,n)},t)}}const h=u(l),d=e=>{Moduware.v1.Module.FlashFile(Moduware.Arguments.uuid,e)},p=(e,t,r,n,o)=>{Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid,"ControlApplet",[e,t,r,n,o])},f=e=>{switch(e){case"sunrise":return"Theme-sunrise.hex";case"police":return"Theme-police.hex";case"disco":return"Theme-disco.hex";case"candle":return"Theme-candle.hex";case"rainbow":return"Theme-rainbow.hex";case"strobe":return"Theme-strobe.hex";case"redlight":return"Theme-redlight.hex";case"blue":return"Color-blue.hex";case"lime":return"Color-lime.hex";case"violet":return"Color-violet.hex";case"red":return"Color-red.hex";case"orange":return"Color-orange.hex";case"yellow":return"Color-yellow.hex";case"purple":return"Color-purple.hex";case"pink":return"Color-pink.hex";case"cyan":return"Color-cyan.hex";case"Flashlight":default:return"Flash-100_.hex"}},g=e=>{Moduware.v1.Module.BandClickEvent(Moduware.Arguments.uuid,e)}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,r=null,n=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,n),t=r}},i=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}}},function(e,t,r){"use strict";function n(e,t,r){return Object.entries(i(t||{})).reduce((e,[t,r])=>e.replace(new RegExp(`{{[  ]*${t}[  ]*}}`),String(i(r))),e)}function o(e,t){const r=e.split(".");let n=t.strings;for(;null!=n&&r.length>0;)n=n[r.shift()];return null!=n?n.toString():null}function i(e){return"function"==typeof e?e():e}let a={loader:()=>Promise.resolve({}),empty:e=>`[${e}]`,lookup:o,interpolate:n,translationCache:{}};function s(e){return a=Object.assign(Object.assign({},a),e)}function l(e,t,r=a){var n;n={previousStrings:r.strings,previousLang:r.lang,lang:r.lang=e,strings:r.strings=t},window.dispatchEvent(new CustomEvent("langChanged",{detail:n}))}async function c(e,t=a){const r=await async function(e,t=a){return await t.loader(e,t)}(e,t);t.translationCache={},l(e,r,t)}function u(e,t,r=a){let n=r.translationCache[e]||(r.translationCache[e]=r.lookup(e,r)||r.empty(e,r));return null!=(t=null!=t?i(t):null)?r.interpolate(n,t,r):n}var h=r(8);function d(e){return e instanceof h.b?e.startNode.isConnected:e instanceof h.a?e.committer.element.isConnected:e.element.isConnected}const p=new Map;var f;function g(e,t,r){const n=t(r);e.value!==n&&(e.setValue(n),e.commit())}!function(e,t){const r=t=>e(t.detail);window.addEventListener("langChanged",r,t)}(e=>{for(const[t,r]of p)d(t)&&g(t,r,e)}),f=p,setInterval(()=>{return e=()=>function(e){for(const[t]of e)d(t)||e.delete(t)}(f),void("requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e));var e},6e4);Object(h.d)(e=>t=>{p.set(t,e),g(t,e)});r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return u}))},function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function o(e){let t=i.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},i.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(n.f);return r=t.keyString.get(o),void 0===r&&(r=new n.a(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}const i=new Map},function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,o=e=>(...t)=>{const r=e(...t);return n.set(r,!0),r},i=e=>"function"==typeof e&&n.has(e)},function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var n=r(10),o=r(6),i=r(12);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,s=(e,t,r)=>{let s=a.get(t);void 0===s&&(Object(n.b)(t,t.firstChild),a.set(t,s=new o.e(Object.assign({templateFactory:i.b},r))),s.appendInto(t)),s.setValue(e),s.commit()}},function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var n=r(10),o=r(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=` ${o.f} `;class a{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],a=e.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===e.indexOf("--\x3e",a+1);const s=o.e.exec(e);t+=null===s?e+(r?i:o.g):e.substr(0,s.index)+s[1]+s[2]+o.b+s[3]+o.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class s extends a{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),Object(n.c)(t,r.firstChild),e}}},function(e,t,r){"use strict";var n=r(19),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function d(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var p=d();p.withExtraArgument=d;var f=p;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var g=r(24);const m=(e,t)=>{return r="0",n=t-e.toString().length,new Array(n+1).join(r)+e;var r,n},b="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date;var v=r(30);const w={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}};function y(e,t,r,n){const o=Object(v.a)(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(e=>{const{kind:t}=e,n=function(e){const{kind:t,path:r,lhs:n,rhs:o,index:i,item:a}=e;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[`${r.join(".")}[${i}]`,a];default:return[]}}(e);r.log(`%c ${w[t].text}`,function(e){return`color: ${w[e].color}; font-weight: bold`}(t),...n)}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function x(e,t,r,n){switch(typeof e){case"object":return"function"==typeof e[n]?e[n](...r):e[n];case"function":return e(t);default:return e}}function _(e){const{timestamp:t,duration:r}=e;return(e,n,o)=>{const i=["action"];return i.push(`%c${String(e.type)}`),t&&i.push(`%c@ ${n}`),r&&i.push(`%c(in ${o.toFixed(2)} ms)`),i.join(" ")}}var S=function(e,t){const{logger:r,actionTransformer:n,titleFormatter:o=_(t),collapsed:i,colors:a,level:s,diff:l}=t,c=void 0===t.titleFormatter;e.forEach((u,h)=>{const{started:d,startedTime:p,action:f,prevState:g,error:b}=u;let{took:v,nextState:w}=u;const _=e[h+1];_&&(w=_.prevState,v=_.started-d);const S=n(f),C="function"==typeof i?i(()=>w,f,u):i,k=`${m((M=p).getHours(),2)}:${m(M.getMinutes(),2)}:${m(M.getSeconds(),2)}.${m(M.getMilliseconds(),3)}`;var M;const E=a.title?`color: ${a.title(S)};`:"",O=["color: gray; font-weight: lighter;"];O.push(E),t.timestamp&&O.push("color: gray; font-weight: lighter;"),t.duration&&O.push("color: gray; font-weight: lighter;");const A=o(S,k,v);try{C?a.title&&c?r.groupCollapsed(`%c ${A}`,...O):r.groupCollapsed(A):a.title&&c?r.group(`%c ${A}`,...O):r.group(A)}catch(e){r.log(A)}const P=x(s,S,[g],"prevState"),T=x(s,S,[S],"action"),j=x(s,S,[b,g],"error"),N=x(s,S,[w],"nextState");if(P)if(a.prevState){const e=`color: ${a.prevState(g)}; font-weight: bold`;r[P]("%c prev state",e,g)}else r[P]("prev state",g);if(T)if(a.action){const e=`color: ${a.action(S)}; font-weight: bold`;r[T]("%c action    ",e,S)}else r[T]("action    ",S);if(b&&j)if(a.error){const e=`color: ${a.error(b,g)}; font-weight: bold;`;r[j]("%c error     ",e,b)}else r[j]("error     ",b);if(N)if(a.nextState){const e=`color: ${a.nextState(w)}; font-weight: bold`;r[N]("%c next state",e,w)}else r[N]("next state",w);l&&y(g,w,r,C);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})},C={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:e=>e,actionTransformer:e=>e,errorTransformer:e=>e,colors:{title:()=>"inherit",prevState:()=>"#9E9E9E",action:()=>"#03A9F4",nextState:()=>"#4CAF50",error:()=>"#F20404"},diff:!1,diffPredicate:void 0,transformer:void 0};function k(e={}){const t=Object.assign({},C,e),{logger:r,stateTransformer:n,errorTransformer:o,predicate:i,logErrors:a,diffPredicate:s}=t;if(void 0===r)return()=>e=>t=>e(t);if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),()=>e=>t=>e(t);const l=[];return({getState:e})=>r=>c=>{if("function"==typeof i&&!i(e,c))return r(c);const u={};let h;if(l.push(u),u.started=b.now(),u.startedTime=new Date,u.prevState=n(e()),u.action=c,a)try{h=r(c)}catch(e){u.error=o(e)}else h=r(c);u.took=b.now()-u.started,u.nextState=n(e());const d=t.diff&&"function"==typeof s?s(e,c):t.diff;if(S(l,Object.assign({},t,{diff:d})),l.length=0,u.error)throw u.error;return h}}r.d(t,"a",(function(){return E}));
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const M=k({collapsed:!0,diff:!0}),E=function e(t,r,o){var s;if("function"==typeof r&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===o&&(o=r,r=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(e)(t,r)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var l=t,c=r,u=[],h=u,d=!1;function p(){h===u&&(h=u.slice())}function f(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),h.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var r=h.indexOf(e);h.splice(r,1),u=null}}}function m(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,c=l(c,e)}finally{d=!1}for(var t=u=h,r=0;r<t.length;r++){(0,t[r])()}return e}function b(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,m({type:i.REPLACE})}function v(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(f())}return r(),{unsubscribe:t(r)}}})[n.a]=function(){return this},e}return m({type:i.INIT}),(s={dispatch:m,subscribe:g,getState:f,replaceReducer:b})[n.a]=v,s}(e=>e,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h)((e=>t=>(r,n)=>{let o={};const i=t(r,n);return Object.assign({},i,{addReducers(t){const r=Object.assign({},o,t);this.replaceReducer(e(o=r))}})})((function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var a,l=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var n=!1,o={},i=0;i<l.length;i++){var c=l[i],u=r[c],h=e[c],d=u(h,t);if(void 0===d){var p=s(c,t);throw new Error(p)}o[c]=d,n=n||d!==h}return(n=n||l.length!==Object.keys(e).length)?o:e}})),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return u({},r,{dispatch:n=h.apply(void 0,i)(r.dispatch)})}}}(f,M)));E.addReducers({app:g.a})},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(10),o=r(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class i{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let a,s=0,l=0,c=i.nextNode();for(;s<r.length;)if(a=r[s],Object(o.d)(a)){for(;l<a.index;)l++,"TEMPLATE"===c.nodeName&&(t.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=t.pop(),c=i.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return n.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=function(){let e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"windows-phone":/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"ios":"unknown"}},function(e,t,r){"use strict";(function(e,n){var o,i=r(31);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var a=Object(i.a)(o);t.a=a}).call(this,r(28),r(40)(e))},function(e,t,r){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=e=>t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=r(5).b`

:root {
    --primary-color: #112331;
    --secondary-color: #b51f36;
  }
  
  html,
  body {
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none !important;
    -webkit-text-size-adjust: none !important;
    -webkit-user-select: none !important;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #f9f9fb;
    color: #112331;
    font-weight: 400;
    font-size: 17px;
  }
  h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }
  
    .dark-red {
      color: #b51f36;
    }
  
    a {
      text-decoration: none;
      color: #112331;
    }
  .wrapper {
      position: relative;
  }
    .content {
      flex-grow: 1;
    }
  
    .container {
      margin: 0 auto;
      padding: 10px;
    }
  
    .title {
      font-size: 17px;
      font-weight: 700;
      margin: 0;
    }
  
    .app-header {
      position: relative;
      background: #fff;
      display: flex;
      align-items: center;
      height: 70px;
      box-shadow: 0px 0.5px 0px #ECEDEF;
      z-index: 100;
    }
    .app-header.right-link {
      box-shadow: none;
    }
  
    .app-header h4 {
      margin: auto;
      text-align: center;
    }
  
  
    .app-header .right-link {
      position: absolute;
      right: 10px;
    }
    .app-header .back {
      position: absolute;
      left: 10px;
    }
    .app-header .right-link a, .app-header .back a {
      padding: 10px 10px;
    }
    .app-header .close a, .app-header .filter a {
      padding: 8px 10px;
    }
  
    .navigation::-webkit-scrollbar-thumb:hover {
      background: #333;
    }
  
    .hide {
      display: none !important;
      visibility: hidden !important;
    }
  
    .app-footer {
      background: #fff;
      margin-top: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  
    .app-footer .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }
  
    .app-footer a {
      text-align: center;
      flex-grow: 1;
      padding: 11px 0;
    }
    .m-20 {
        margin: 20px;
    }
    .mr-20 {
      margin-right: 20px;
    }
    .mb-24 {
      margin-bottom: 24px !important;
    }
    h6 {
      font-size: 13px;
      text-transform: uppercase;
    }
    .container {
      margin: 0 auto;
      padding: 10px 15px;
    }
  
    .color-wheel-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15%;
    }
  .palette-container {
      position: fixed;
      bottom: 75px;
      width: 100%;
      padding: 0 16px;
  }
  .palette-container h6 {
      margin-bottom: 20px;
  }
  .palette-container .items-containers {
      display: flex;
      align-items: center;
  }
  .palette-container .items-containers a {
      width: 55px;
      height: 55px;
      margin-right: 16px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .palette-container .items-containers a:last-child {
      margin-right: 0px;
  }
  .palette-container .items-containers a:first-child {
      border: 1px solid #D3D4D6;
  }
  .palette-container .items-containers span {
      display: none;
  }
  .palette-container .items-containers .delete {
      background-color: rgba(255, 255, 255, 0.70);
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
  }
  .button-wrapper {
      position: absolute;
      cursor: pointer;
      z-index: 10;
  }
  .button-wrapper img {
	box-shadow: 0px 3px 4px rgba(10, 35, 50, 0.1);
	width: 160px;
	height: 160px;
	border-radius: 50%;
}
.range-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	position: relative;
}
  
  .themes-container {
      padding: 0 5px;
      margin-bottom: 20px;
  }
  .themes-items-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .themes-items-container p {
      text-align: center;
      margin-top: 0;
      color: #112331;
  }
  .themes-items-container img {
      padding: 5px;
      border: 2px solid transparent;
      border-radius: 13px;
      transition: transform 0.25s ease-in-out, border 0.700ms ease-in;
      cursor: pointer;
      width: 100%;
  }

  
  .themes-items-container .item.active img {
      transform: scale(0.85,0.84);
  }
  .themes-items-container .active p {
      color: #A42F3A;
  }
  .themes-items-container .active img {
      border: 2px solid #D7A8AE;
  }
  
  .flashlight-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 370px;
      position: relative;
      margin-top: 80px;
  }
  .flashlight-container .value {
      position: absolute;
      bottom: -45px;
      margin: auto;
      left: 0;
      right: 0;
      text-align: center;
      color:  #283945;
      font-size: 17px;
      font-weight: 700;
  }
  
  

/*Flash Button Range slider*/

.flash-light-range{
    -webkit-appearance: none;
    width: 330px;
    height: 88px;
    outline: none !important;
    appearance:none;
    border:none;
    border-radius:88px;
    background: #ecedef;
  }

  .flash-light-range-border {
    border: 12px solid rgb(236, 237, 239);
    border-radius: 88px;
    background: rgb(236, 237, 239);
    position: absolute;
}

  
.flash-light-range::-moz-focus-outer {
      border: 0;
  }
.flash-light-range:hover {
    outline:none;
  }
  /* Chrome */
.flash-light-range::-webkit-slider-thumb {
    width: 95px;
    height: 95px;
    background: url('icons/power-btn.svg') no-repeat;
    background-size: cover;
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    transform:rotate(90deg); 
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    border-radius:50%;
    outline:none;
    border:none;
    box-shadow: 0px 3px 4px rgba(10, 35, 50, 0.1);
    /*transform: translateX(-12px) rotate(90deg);*/
  }
  /* Moz */
.flash-light-range::-moz-range-thumb {
    width: 95px;
    height: 95px;
    background: url('icons/power-btn.svg') no-repeat;
    background-size: cover;
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    transform:rotate(90deg); 
    cursor: pointer;
    border-radius:50%;
    border:none;
    outline:none;
    box-shadow: 0px 3px 4px rgba(10, 35, 50, 0.1);
    /*transform: translateX(-12px) rotate(90deg);*/
  }
.flash-light-range::-moz-range-progress {
    background-color: red;
    height: 88px;
    border-radius:88px;
    border:none;
  }
.flash-light-range::-moz-range-track {  
    background-color: #ecedef;
    border-radius:88px;
    border:none;
      height: 88px;
  }
  /* IE*/
.flash-light-range::-ms-fill-lower {
    background-color: #fff;
      height: 88px;
    border-radius:88px;
    border:none;
  }
.flash-light-range::-ms-fill-upper {  
    background-color: #ccc;
    border-radius:88px;
    border:none;
      height: 88px;
  }

  .vertical {
    -webkit-transform:rotate(270deg);
    -moz-transform:rotate(270deg);
    -o-transform:rotate(270deg);
    -ms-transform:rotate(270deg);
    transform:rotate(270deg); 
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CED3D6;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #32E588;
}

input:focus + .slider {
  box-shadow: 0 0 1px #32E588;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

@media (max-width: 320px) {
    .themes-items-container img {
        width: 103px;
    }
}
`},function(e,t,r){"use strict";r.r(t);const n={"home-page":{title:"LED",modes:"Modes"},"pallet-page":{title:"LED",description:"5 simple colors to chose",hold:"Hold",doNot:"Do Not",lookWarning:"look directly into the light",hoverWarning:"hover the light over your skin",switchWarning:"Before turning on the UV, check the status of safety switch."},"wheel-page":{title:"Color wheel",description:"Pick your own color",palette:"Palette",edit:"Edit",done:"Done"},"themes-page":{title:"Themes",description:"Preset light moods"},"settings-page":{title:"Settings"},brightness:{darker:"Darker",lighter:"Lighter"},themes:{title:"Themes",candle:"Candle flicker",romance:"Romance",meditation:"Meditation",sos:"SOS",study:"Study",disco:"Disco",strobe:"Strobe",police:"Police",sunrise:"Sunrise",rainbow:"Rainbow",red:"Red Light"},hotkey:{title:"HOTKEY",flashlight:"Flashlight",theme:"Theme"}},o={"home-page":{title:"LED灯",modes:"模式"},"pallet-page":{title:"LED",description:"5种颜色可供选择",hold:"长按",doNot:"请勿",lookWarning:"直视光源",hoverWarning:"将光源指向皮肤",switchWarning:"开启紫外杀菌灯前，请确认安全锁状态。"},"wheel-page":{title:"色轮",description:"选择你自己的颜色",palette:"调色板",edit:"编辑",done:"确定"},"themes-page":{title:"主题",description:"预设氛围灯"},brightness:{darker:"更暗",lighter:"更亮"},themes:{title:"主题",candle:"烛光闪烁",romance:"浪漫",meditation:"冥想",sos:"紧急求救",study:"学习",disco:"迪斯科",strobe:"频闪",police:"警灯",sunrise:"日出",rainbow:"彩虹",red:"红色"},hotkey:{title:"热键",flashlight:"手电筒",theme:"主题"}};r.d(t,"en",(function(){return n})),r.d(t,"zh",(function(){return o}))},function(e,t,r){"use strict";var n=r(0),o=r(2),i=r.n(o),a=(r(4),r(3));
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={page:"",apiReady:!1,language:"en",ledsState:n.a.Off,flashLedLeftState:n.a.Off,flashLedRightState:n.a.Off,lockState:n.a.On,currentColor:i.a.rgb(255,0,0),currentUiColor:"rgb(255, 255, 255)",currentUiColorName:"white",currentTheme:null,lightness:-1,rgbTemperatureProtection:!1,headerTitle:"",platform:"",ledStateReceived:!1,savedColors:[],doUpdate:!1};t.a=(e=s,t)=>{switch(t.type){case a.k:return{...e,apiReady:!0};case a.f:return{...e,ledStateReceived:!0,flashLedLeftState:t.flashLedLeftState,flashLedRightState:t.flashLedRightState,ledsState:t.ledsState};case a.e:return{...e,platform:t.platform};case a.q:return{...e,page:t.page};case a.h:return{...e,language:t.language};case a.o:return{...e,currentTheme:t.currentTheme};case a.b:return{...e,currentUiColor:t.color.uiColorString,currentUiColorName:t.color.uiColorName};case a.a:return{...e,currentColor:t.color};case a.j:return{...e,ledsState:t.state};case a.i:return{...e,lockState:t.state};case a.d:return{...e,flashLedLeftState:t.leftState,flashLedRightState:t.rightState};case a.g:return{...e,lightness:t.lightness};case a.p:return{...e,headerTitle:t.headerTitle};case a.n:return{...e,savedColors:[...e.savedColors,t.color]};case a.l:return{...e,savedColors:e.savedColors.filter(e=>null!==e).filter(e=>e.color[0]!==t.color.color[0]||e.color[1]!==t.color.color[1]||e.color[2]!==t.color.color[2])};case a.m:return{...e,savedColors:t.savedColors};case a.c:return{...e,doUpdate:t.value};default:return e}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));class n{constructor(){this.commandSendInterval=100,this.active=!1,this._commandToSend=null}start(){if(this.active)throw new Exception("CommandBufferFilter already running");this.active=!0,this._loop()}stop(){this.active=!1}setCommand(e){this._commandToSend=e}_sleep(e){return new Promise((t,r)=>{setTimeout(()=>t(),e)})}_flush(){if(null==this._commandToSend)return;const e=this._commandToSend;this._commandToSend=null;try{e()}catch(e){console.error(e)}}async _loop(){for(;this.active;)this._flush(),await this._sleep(this.commandSendInterval)}}},function(e,t,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,r){var n=r(26),o={};for(var i in n)n.hasOwnProperty(i)&&(o[n[i]]=i);var a=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var s in a)if(a.hasOwnProperty(s)){if(!("channels"in a[s]))throw new Error("missing channels property: "+s);if(!("labels"in a[s]))throw new Error("missing channel labels property: "+s);if(a[s].labels.length!==a[s].channels)throw new Error("channel and label counts mismatch: "+s);var l=a[s].channels,c=a[s].labels;delete a[s].channels,delete a[s].labels,Object.defineProperty(a[s],"channels",{value:l}),Object.defineProperty(a[s],"labels",{value:c})}a.rgb.hsl=function(e){var t,r,n=e[0]/255,o=e[1]/255,i=e[2]/255,a=Math.min(n,o,i),s=Math.max(n,o,i),l=s-a;return s===a?t=0:n===s?t=(o-i)/l:o===s?t=2+(i-n)/l:i===s&&(t=4+(n-o)/l),(t=Math.min(60*t,360))<0&&(t+=360),r=(a+s)/2,[t,100*(s===a?0:r<=.5?l/(s+a):l/(2-s-a)),100*r]},a.rgb.hsv=function(e){var t,r,n,o,i,a=e[0]/255,s=e[1]/255,l=e[2]/255,c=Math.max(a,s,l),u=c-Math.min(a,s,l),h=function(e){return(c-e)/6/u+.5};return 0===u?o=i=0:(i=u/c,t=h(a),r=h(s),n=h(l),a===c?o=n-r:s===c?o=1/3+t-n:l===c&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*i,100*c]},a.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2];return[a.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(r,n))),100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},a.rgb.cmyk=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-o)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-o-t)/(1-t)||0),100*t]},a.rgb.keyword=function(e){var t=o[e];if(t)return t;var r,i,a,s=1/0;for(var l in n)if(n.hasOwnProperty(l)){var c=n[l],u=(i=e,a=c,Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)+Math.pow(i[2]-a[2],2));u<s&&(s=u,r=l)}return r},a.keyword.rgb=function(e){return n[e]},a.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},a.rgb.lab=function(e){var t=a.rgb.xyz(e),r=t[0],n=t[1],o=t[2];return n/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},a.hsl.rgb=function(e){var t,r,n,o,i,a=e[0]/360,s=e[1]/100,l=e[2]/100;if(0===s)return[i=255*l,i,i];t=2*l-(r=l<.5?l*(1+s):l+s-l*s),o=[0,0,0];for(var c=0;c<3;c++)(n=a+1/3*-(c-1))<0&&n++,n>1&&n--,i=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,o[c]=255*i;return o},a.hsl.hsv=function(e){var t=e[0],r=e[1]/100,n=e[2]/100,o=r,i=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,o*=i<=1?i:2-i,[t,100*(0===n?2*o/(i+o):2*r/(n+r)),100*((n+r)/2)]},a.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,i=t-Math.floor(t),a=255*n*(1-r),s=255*n*(1-r*i),l=255*n*(1-r*(1-i));switch(n*=255,o){case 0:return[n,l,a];case 1:return[s,n,a];case 2:return[a,n,l];case 3:return[a,s,n];case 4:return[l,a,n];case 5:return[n,a,s]}},a.hsv.hsl=function(e){var t,r,n,o=e[0],i=e[1]/100,a=e[2]/100,s=Math.max(a,.01);return n=(2-i)*a,r=i*s,[o,100*(r=(r/=(t=(2-i)*s)<=1?t:2-t)||0),100*(n/=2)]},a.hwb.rgb=function(e){var t,r,n,o,i,a,s,l=e[0]/360,c=e[1]/100,u=e[2]/100,h=c+u;switch(h>1&&(c/=h,u/=h),n=6*l-(t=Math.floor(6*l)),0!=(1&t)&&(n=1-n),o=c+n*((r=1-u)-c),t){default:case 6:case 0:i=r,a=o,s=c;break;case 1:i=o,a=r,s=c;break;case 2:i=c,a=r,s=o;break;case 3:i=c,a=o,s=r;break;case 4:i=o,a=c,s=r;break;case 5:i=r,a=c,s=o}return[255*i,255*a,255*s]},a.cmyk.rgb=function(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},a.xyz.rgb=function(e){var t,r,n,o=e[0]/100,i=e[1]/100,a=e[2]/100;return r=-.9689*o+1.8758*i+.0415*a,n=.0557*o+-.204*i+1.057*a,t=(t=3.2406*o+-1.5372*i+-.4986*a)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},a.xyz.lab=function(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},a.lab.xyz=function(e){var t,r,n,o=e[0];t=e[1]/500+(r=(o+16)/116),n=r-e[2]/200;var i=Math.pow(r,3),a=Math.pow(t,3),s=Math.pow(n,3);return r=i>.008856?i:(r-16/116)/7.787,t=a>.008856?a:(t-16/116)/7.787,n=s>.008856?s:(n-16/116)/7.787,[t*=95.047,r*=100,n*=108.883]},a.lab.lch=function(e){var t,r=e[0],n=e[1],o=e[2];return(t=360*Math.atan2(o,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+o*o),t]},a.lch.lab=function(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]},a.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],o=1 in arguments?arguments[1]:a.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var i=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===o&&(i+=60),i},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},a.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},a.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},a.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},a.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map((function(e){return e+e})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},a.rgb.hcg=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255,i=Math.max(Math.max(r,n),o),a=Math.min(Math.min(r,n),o),s=i-a;return t=s<=0?0:i===r?(n-o)/s%6:i===n?2+(o-r)/s:4+(r-n)/s+4,t/=6,[360*(t%=1),100*s,100*(s<1?a/(1-s):0)]},a.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,o=0;return(n=r<.5?2*t*r:2*t*(1-r))<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},a.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},a.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var o,i=[0,0,0],a=t%1*6,s=a%1,l=1-s;switch(Math.floor(a)){case 0:i[0]=1,i[1]=s,i[2]=0;break;case 1:i[0]=l,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=s;break;case 3:i[0]=0,i[1]=l,i[2]=1;break;case 4:i[0]=s,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=l}return o=(1-r)*n,[255*(r*i[0]+o),255*(r*i[1]+o),255*(r*i[2]+o)]},a.hcg.hsv=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},a.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},a.hcg.hwb=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},a.hwb.hcg=function(e){var t=e[1]/100,r=1-e[2]/100,n=r-t,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},a.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},a.gray.hsl=a.gray.hsv=function(e){return[0,0,e[0]]},a.gray.hwb=function(e){return[0,100,e[0]]},a.gray.cmyk=function(e){return[0,0,0,e[0]]},a.gray.lab=function(e){return[e[0],0,0]},a.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},a.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r(20);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;(n=document.baseURI||window.location.href).substring(0,n.lastIndexOf("/")+1);var n;window.Polymer&&window.Polymer.sanitizeDOMValue;let o=!1;const i=function(e){o=e};let a=!0},function(e,t,r){"use strict";(function(e){var r,n,o=[];function i(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function a(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function s(e,t,r){s.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function l(e,t){l.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function c(e,t){c.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,r){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function h(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function d(e){var t=typeof e;return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function p(e,t,r,n,o,i,a){a=a||[];var f=(o=o||[]).slice(0);if(void 0!==i){if(n){if("function"==typeof n&&n(f,i))return;if("object"==typeof n){if(n.prefilter&&n.prefilter(f,i))return;if(n.normalize){var g=n.normalize(f,i,e,t);g&&(e=g[0],t=g[1])}}}f.push(i)}"regexp"===d(e)&&"regexp"===d(t)&&(e=e.toString(),t=t.toString());var m=typeof e,b=typeof t,v="undefined"!==m||a&&a[a.length-1].lhs&&a[a.length-1].lhs.hasOwnProperty(i),w="undefined"!==b||a&&a[a.length-1].rhs&&a[a.length-1].rhs.hasOwnProperty(i);if(!v&&w)r(new l(f,t));else if(!w&&v)r(new c(f,e));else if(d(e)!==d(t))r(new s(f,e,t));else if("date"===d(e)&&e-t!=0)r(new s(f,e,t));else if("object"===m&&null!==e&&null!==t)if(a.filter((function(t){return t.lhs===e})).length)e!==t&&r(new s(f,e,t));else{if(a.push({lhs:e,rhs:t}),Array.isArray(e)){var y;e.length;for(y=0;y<e.length;y++)y>=t.length?r(new u(f,y,new c(void 0,e[y]))):p(e[y],t[y],r,n,f,y,a);for(;y<t.length;)r(new u(f,y,new l(void 0,t[y++])))}else{var x=Object.keys(e),_=Object.keys(t);x.forEach((function(o,i){var s=_.indexOf(o);s>=0?(p(e[o],t[o],r,n,f,o,a),_=h(_,s)):p(e[o],void 0,r,n,f,o,a)})),_.forEach((function(e){p(void 0,t[e],r,n,f,e,a)}))}a.length=a.length-1}else e!==t&&("number"===m&&isNaN(e)&&isNaN(t)||r(new s(f,e,t)))}function f(e,t,r,n){return n=n||[],p(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function g(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=h(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}r="object"==typeof e&&e?e:"undefined"!=typeof window?window:{},(n=r.DeepDiff)&&o.push((function(){void 0!==n&&r.DeepDiff===f&&(r.DeepDiff=n,n=void 0)})),i(s,a),i(l,a),i(c,a),i(u,a),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:p,enumerable:!0},applyDiff:{value:function(e,t,r){if(e&&t){p(e,t,(function(n){r&&!r(e,t,n)||g(e,t,n)}))}},enumerable:!0},applyChange:{value:g,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=h(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==n},enumerable:!0},noConflict:{value:function(){return o&&(o.forEach((function(e){e()})),o=null),f},enumerable:!0}}),t.a=f}).call(this,r(28))},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return n}))},function(e,t,r){"use strict";var n=r(5);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path id="cart-path" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`},function(e,t){!function(t){"use strict";var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"==typeof e,c=t.regeneratorRuntime;if(c)l&&(e.exports=c);else{(c=t.regeneratorRuntime=l?e.exports:{}).wrap=g;var u={},h={};h[i]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(M([])));p&&p!==r&&n.call(p,i)&&(h=p);var f=w.prototype=b.prototype=Object.create(h);v.prototype=f.constructor=w,w.constructor=v,w[s]=v.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(f),e},c.awrap=function(e){return{__await:e}},y(x.prototype),x.prototype[a]=function(){return this},c.AsyncIterator=x,c.async=function(e,t,r,n){var o=new x(g(e,t,r,n));return c.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(f),f[s]="Generator",f[i]=function(){return this},f.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=M,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:M(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}}}function g(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=m(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function b(){}function v(){}function w(){}function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e){var t;this._invoke=function(r,o){function i(){return new Promise((function(t,i){!function t(r,o,i,a){var s=m(e[r],e,o);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(c).then((function(e){l.value=e,i(l)}),a)}a(s.arg)}(r,o,t,i)}))}return t=t?t.then(i,i):i()}}function _(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=m(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function M(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t){
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
!function(){"use strict";!function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const e=HTMLElement;window.HTMLElement={HTMLElement:function(){return Reflect.construct(e,[],this.constructor)}}.HTMLElement,HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}()}()},function(e,t,r){var n=r(26),o=r(36),i={};for(var a in n)n.hasOwnProperty(a)&&(i[n[a]]=a);var s=e.exports={to:{},get:{}};function l(e,t,r){return Math.min(Math.max(t,e),r)}function c(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}s.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=s.get.hsl(e),r="hsl";break;case"hwb":t=s.get.hwb(e),r="hwb";break;default:t=s.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},s.get.rgb=function(e){if(!e)return null;var t,r,o,i=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(o=t[2],t=t[1],r=0;r<3;r++){var a=2*r;i[r]=parseInt(t.slice(a,a+2),16)}o&&(i[3]=Math.round(parseInt(o,16)/255*100)/100)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(o=(t=t[1])[3],r=0;r<3;r++)i[r]=parseInt(t[r]+t[r],16);o&&(i[3]=Math.round(parseInt(o+o,16)/255*100)/100)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<3;r++)i[r]=parseInt(t[r+1],0);t[4]&&(i[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(t=e.match(/(\D+)/))?"transparent"===t[1]?[0,0,0,0]:(i=n[t[1]])?(i[3]=1,i):null:null;for(r=0;r<3;r++)i[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(i[3]=parseFloat(t[4]))}for(r=0;r<3;r++)i[r]=l(i[r],0,255);return i[3]=l(i[3],0,1),i},s.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,l(parseFloat(t[2]),0,100),l(parseFloat(t[3]),0,100),l(isNaN(r)?1:r,0,1)]}return null},s.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,l(parseFloat(t[2]),0,100),l(parseFloat(t[3]),0,100),l(isNaN(r)?1:r,0,1)]}return null},s.to.hex=function(){var e=o(arguments);return"#"+c(e[0])+c(e[1])+c(e[2])+(e[3]<1?c(Math.round(255*e[3])):"")},s.to.rgb=function(){var e=o(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},s.to.rgb.percent=function(){var e=o(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},s.to.hsl=function(){var e=o(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},s.to.hwb=function(){var e=o(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},s.to.keyword=function(e){return i[e.slice(0,3)]}},function(e,t,r){"use strict";var n=r(37),o=Array.prototype.concat,i=Array.prototype.slice,a=e.exports=function(e){for(var t=[],r=0,a=e.length;r<a;r++){var s=e[r];n(s)?t=o.call(t,i.call(s)):t.push(s)}return t};a.wrap=function(e){return function(){return e(a(arguments))}}},function(e,t){e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},function(e,t,r){var n=r(27),o=r(39),i={};Object.keys(n).forEach((function(e){i[e]={},Object.defineProperty(i[e],"channels",{value:n[e].channels}),Object.defineProperty(i[e],"labels",{value:n[e].labels});var t=o(e);Object.keys(t).forEach((function(r){var n=t[r];i[e][r]=function(e){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"==typeof r)for(var n=r.length,o=0;o<n;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(n),i[e][r].raw=function(e){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=i},function(e,t,r){var n=r(27);function o(e){var t=function(){for(var e={},t=Object.keys(n),r=t.length,o=0;o<r;o++)e[t[o]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;)for(var o=r.pop(),i=Object.keys(n[o]),a=i.length,s=0;s<a;s++){var l=i[s],c=t[l];-1===c.distance&&(c.distance=t[o].distance+1,c.parent=o,r.unshift(l))}return t}function i(e,t){return function(r){return t(e(r))}}function a(e,t){for(var r=[t[e].parent,e],o=n[t[e].parent][e],a=t[e].parent;t[a].parent;)r.unshift(t[a].parent),o=i(n[t[a].parent][a],o),a=t[a].parent;return o.conversion=r,o}e.exports=function(e){for(var t=o(e),r={},n=Object.keys(t),i=n.length,s=0;s<i;s++){var l=n[s];null!==t[l].parent&&(r[l]=a(l,t))}return r}},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";r.r(t);r(33),r(34);var n=r(5),o=r(29),i=r(21),a=r(16),s=r(3),l=(r(32),r(18));class c extends n.a{static get is(){return"moduware-header"}static get properties(){return{title:{type:String},backButtonIcon:{type:String},platform:{type:String,reflect:!0}}}constructor(){super(),this.title="Tile",this.platform=Object(l.a)(),this.backButtonIcon=""}static get styles(){return[n.b`
        :host([hidden]) {
          display: none;
        }

        :host,
        *,
        * * {
          box-sizing: border-box;
        }

        svg {
          width: auto;
        }

        :host {
          --style-font-family: Roboto, 'Roboto Regular', Helvetica, Tahoma, sans-serif;
          --style-font-size: 16px;
          --style-background-color: white;

          --ios-header-height: 44px;
          --android-header-height: 55px;
          --header-side-padding: 3vw;

          --font-size-android: 15px;
          --title-selection-line-height: 45px;

          --brand-color: #D02E3D;
          --gray-color: #606060;
          --title-selecting-border-color: #E4E4E4;
          --back-button-color: #D02E3D;

          --text-color: var(--gray-color);
          --secondary-text-color: var(--gray-color);
          --style-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          --style-shadow-android: 0 2px 4px rgba(0, 0, 0, 0.12);
        }

        :host {
          z-index: var(--header-z-index, 1);
          position: fixed;
          top: 0;
          left: 0;

          width: 100vw;
          height: var(--ios-header-height);
          padding: 0;

          font-size: var(--style-font-size);
          font-weight: normal;
          line-height: var(--ios-header-height);
          color: var(--text-color);
          font-family: var(--style-font-family);
          text-align: right;

          background-color: var(--style-background-color);
          -webkit-user-select: none;
          user-select: none;
        }

        :host([platform="ios"]:not(.nxp-no-shadow)) {
          border-color: #C8C7CC;
          border-style: solid;
          border-width: 0 0 0.5px 0;
        }

        :host([platform="ios"]) {
          color: var(--text-color)
        }

        :host([platform="android"]) {
          height: var(--android-header-height);
          padding: 0 var(--header-side-padding);
          line-height: var(--android-header-height);
          color: var(--text-color);

          font-size: var(--font-size-android);
          font-weight: 300;
        }

        :host([platform="android"]:not(.nxp-no-shadow)) {
          box-shadow: var(--style-shadow-android);
        }

        button {
          padding: 0;
          margin: 0;
          background: none;
          border: 0;
          outline: none;
        }

        .title {
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;
          margin: 0;

          text-align: center;
          font-size: calc(var(--style-font-size) + 1px);
          line-height: inherit;
          text-transform: inherit;
          color: inherit;
          font-weight: 400;

          background-color: transparent;
        }

        :host([platform="android"])>h1 {
          text-align: left;
          font-size: calc(var(--font-size-android) + 5px);
          padding-left: 70px;
        }

        :host([platform="android"].nxp-back-button-hidden)>h1 {
          padding-left: 16px;
        }

        .back-button {
          padding: 0 var(--header-side-padding) !important;
          line-height: inherit;
        }

        :host(:not([platform="android"])) .nxp-button-back-android,
        :host([platform="android"]) .nxp-button-back-ios {
          display: none;
        }

        :host([platform="android"]) .back-button svg {
          margin-top: -4px;
        }

        .back-button-icon {
          display: inline-block;
        }

        .nxp-custom-back-button .nxp-button-back-android,
        .nxp-custom-back-button .nxp-button-back-ios {
          display: none;
        }

        .nxp-buttons-container {
          display: inline-block;
        }

        .nxp-buttons-container.nxp-buttons-container--disabled {
          opacity: 0.3;
          pointer-events: none;
        }

        .nxp-buttons-container>button {
          line-height: inherit;
          padding: 0 4vw !important;
          position: relative;
        }

        :host([platform="ios"]) .nxp-buttons-container>button {
          color: #D02E3D;
          font-size: 17px;
        }

        .nxp-buttons-container>button .nxp-button-number {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(15%) translateY(-85%);
          padding-right: 1px;

          display: flex;
          justify-content: center;
          align-items: center;

          height: 18px;
          min-width: 18px;
          border: 2px solid white;
          border-radius: 9px;

          background-color: #01CF9F;
          font-size: 10px;
          color: white;
          line-height: 1em;
        }

        .nxp-buttons-container>button .nxp-button-number:empty {
          display: none;
        }

        .nxp-buttons-container>button:last-child {
          padding-right: var(--header-side-padding) !important;
        }

        .back-button svg,
        .back-button img,
        .nxp-buttons-container>button>svg,
        .nxp-buttons-container>button>img {
          vertical-align: middle;
        }

        .back-button {
          float: left;
          max-width: var(--ios-header-height);
        }

        :host ::slotted([slot='right-placeholder']) {
          vertical-align: middle;
          display: inline-flex;
          color: #d12f3d;
        }

        :host([platform='ios']) ::slotted([slot='right-placeholder']) {
          padding-right: var(--header-side-padding);
        }

      .back-button svg #back-arrow {
        fill: var(--back-button-color);
      }
      `]}render(){return n.c`
      <h1 class="title">${this.title}</h1>
      <button class="back-button" @click="${this.backButtonTapHandler}">
        ${""==this.backButtonIcon?this.getBackButtonIcon():n.c`<img src="${this.backButtonIcon}" class="back-button-icon">`}
      </button>
      <div class="nxp-buttons-container" id="nxp-buttons-container"></div>
      <slot name="right-placeholder"></slot>
    `}getBackButtonIcon(){return"ios"==this.platform?n.c`
            <svg width="12px" height="15px" viewBox="8 35 12 15" class="back-button-icon nxp-button-back-ios">
              <path d="M10.0158703,41.9904883 C9.9622537,41.6002828 10.0847659,41.1909469 10.3798254,40.8958873 L15.8958873,35.3798254 C16.4016182,34.8740945 17.2192549,34.8717794 17.7300286,35.3825531 C18.2372659,35.8897904 18.2323789,36.7170716 17.7327562,37.2166943 L12.9476424,42.0018082 L17.7327562,46.786922 C18.2384871,47.2926529 18.2408023,48.1102896 17.7300286,48.6210633 C17.2227913,49.1283006 16.39551,49.1234135 15.8958873,48.6237909 L10.3798254,43.107729 C10.0754324,42.8033359 9.95341094,42.3859492 10.0158703,41.9904883 Z"
                id="back-arrow" stroke="none" fill="#D02E3D" fill-rule="evenodd"></path>
            </svg>
          `:n.c`
        <svg width="16px" height="16px" viewBox="0 0 16 16" class="back-button-icon nxp-button-back-android">
          <polygon id="back-arrow" class="nxp-svg-shape" transform="translate(-4,-4)" fill-rule="evenodd" fill="#D02E3D" points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13"></polygon>
        </svg>
      `}backButtonTapHandler(e){this.dispatchEvent(new CustomEvent("back-button-click",{}))}}window.customElements.define(c.is,c);var u=r(11),h=r(23),d=r(22);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class p extends(Object(i.a)(a.a)(n.a)){static get properties(){return{platform:{type:String,reflect:!0},appTitle:{type:String},_headerTitle:{type:String},_page:{type:String},_language:{type:String},_currentUiColorName:{type:String}}}static get styles(){return[d.a,n.b`
        main {
          display: block;
        }

        .main-content {
          height: 100%;
          display: flex;
          flex-grow: 1;
        }

        .page {
          display: none;
          flex-grow: 1;
          position: relative;
        }

        .page[active] {
          display: block;
        }
      }
      `]}render(){return n.c`
			<main role="main" class="main-content">
					<pallet-page class="page" ?active="${"pallet-page"===this._page}"></pallet-page>
					<wheel-page class="page" ?active="${"wheel-page"===this._page}"></wheel-page>
					<themes-page class="page" ?active="${"themes-page"===this._page}"></themes-page>
          <settings-page class="page" ?active="${"settings-page"===this._page}"></settings-page>
					<error-page class="page" ?active="${"error-page"===this._page}"></error-page>
			</main>
    `}constructor(){super(),a.a.dispatch(Object(s.u)()),Object(o.c)(!0)}async connectedCallback(){Object(u.b)({loader:e=>Promise.resolve(h[e])}),super.connectedCallback()}firstUpdated(){a.a.dispatch(Object(s.y)("/pallet-page")),a.a.dispatch(Object(s.w)()),a.a.dispatch(Object(s.F)(Object(u.a)("pallet-page.title"))),a.a.dispatch(Object(s.x)())}updated(e){e.has("_page"),e.has("_language")&&Object(u.c)(this._language)}stateChanged(e){this.platform=e.app.platform,this._page=e.app.page,this._language=e.app.language,this._headerTitle=e.app.headerTitle,this._currentUiColorName=e.app.currentUiColorName}}window.customElements.define("my-app",p)}]);