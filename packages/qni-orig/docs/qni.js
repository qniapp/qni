!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Qni={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}function i(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}const n=new WeakSet;function o(t){a(t),s(t)}const r=new WeakMap;function s(t=document){if(r.has(t))return r.get(t);let e=!1;const i=new MutationObserver((t=>{for(const e of t)if("attributes"===e.type&&e.target instanceof Element)d(e.target);else if("childList"===e.type&&e.addedNodes.length)for(const t of e.addedNodes)t instanceof Element&&a(t)}));i.observe(t,{childList:!0,subtree:!0,attributeFilter:["data-action"]});const n={get closed(){return e},unsubscribe(){e=!0,r.delete(t),i.disconnect()}};return r.set(t,n),n}function a(t){for(const e of t.querySelectorAll("[data-action]"))d(e);t instanceof Element&&t.hasAttribute("data-action")&&d(t)}function c(t){const e=t.currentTarget;for(const i of l(e))if(t.type===i.type){const o=e.closest(i.tag);n.has(o)&&"function"==typeof o[i.method]&&o[i.method](t);const r=e.getRootNode();if(r instanceof ShadowRoot&&n.has(r.host)&&r.host.matches(i.tag)){const e=r.host;"function"==typeof e[i.method]&&e[i.method](t)}}}function*l(t){for(const e of(t.getAttribute("data-action")||"").trim().split(/\s+/)){const t=e.lastIndexOf(":"),i=e.lastIndexOf("#");yield{type:e.slice(0,t),tag:e.slice(t+1,i),method:e.slice(i+1)}}}function d(t){for(const e of l(t))t.addEventListener(e.type,c)}function u(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){const i=t.tagName.toLowerCase();if(t.shadowRoot)for(const n of t.shadowRoot.querySelectorAll(`[data-target~="${i}.${e}"]`))if(!n.closest(i))return n;for(const n of t.querySelectorAll(`[data-target~="${i}.${e}"]`))if(n.closest(i)===t)return n}(this,e)}})}function p(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){const i=t.tagName.toLowerCase(),n=[];if(t.shadowRoot)for(const o of t.shadowRoot.querySelectorAll(`[data-targets~="${i}.${e}"]`))o.closest(i)||n.push(o);for(const o of t.querySelectorAll(`[data-targets~="${i}.${e}"]`))o.closest(i)===t&&n.push(o);return n}(this,e)}})}const h=new WeakMap;function f(t,e){h.has(t)||h.set(t,[]),h.get(t).push(e)}function m(t){const e=new Set;let i=t;for(;i&&i!==HTMLElement;){const t=h.get(i)||[];for(const i of t)e.add(i);i=Object.getPrototypeOf(i)}return e}function g(t){return`data-${t.replace(/([A-Z]($|[a-z]))/g,"-$1")}`.replace(/--/g,"-").toLowerCase()}function b(t){const e=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){this.toggleAttribute("data-catalyst",!0),function(t){for(const e of t.querySelectorAll("template[data-shadowroot]"))e.parentElement===t&&t.attachShadow({mode:"closed"===e.getAttribute("data-shadowroot")?"closed":"open"}).append(e.content.cloneNode(!0))}(this),function(t,e){e||(e=m(Object.getPrototypeOf(t)));for(const i of e){const e=t[i],n=g(i);let o={get(){return this.getAttribute(n)||""},set(t){this.setAttribute(n,t||"")}};"number"==typeof e?o={get(){return Number(this.getAttribute(n)||0)},set(t){this.setAttribute(n,t)}}:"boolean"==typeof e&&(o={get(){return this.hasAttribute(n)},set(t){this.toggleAttribute(n,t)}}),Object.defineProperty(t,i,o),i in t&&!t.hasAttribute(n)&&o.set.call(t,e)}}(this),function(t){n.add(t),t.shadowRoot&&o(t.shadowRoot),a(t),s(t.ownerDocument)}(this),e&&e.call(this),this.shadowRoot&&o(this.shadowRoot)},function(t){let e=t.observedAttributes||[];Object.defineProperty(t,"observedAttributes",{get:()=>[...m(t.prototype)].map(g).concat(e),set(t){e=t}})}(t),function(t){const e=t.name.replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/(^-|-Element$)/g,"").toLowerCase();window.customElements.get(e)||(window[t.name]=t,window.customElements.define(e,t))}(t)}const v=[{character:"½",ref:"½",expanded:"1/2",value:.5},{character:"¼",ref:"¼",expanded:"1/4",value:1/4},{character:"¾",ref:"¾",expanded:"3/4",value:3/4},{character:"⅓",ref:"⅓",expanded:"1/3",value:1/3},{character:"⅔",ref:"⅔",expanded:"2/3",value:2/3},{character:"⅕",ref:"⅕",expanded:"1/5",value:.2},{character:"⅖",ref:"⅖",expanded:"2/5",value:.4},{character:"⅗",ref:"⅗",expanded:"3/5",value:.6},{character:"⅘",ref:"⅘",expanded:"4/5",value:.8},{character:"⅙",ref:"⅙",expanded:"1/6",value:1/6},{character:"⅚",ref:"⅚",expanded:"5/6",value:5/6},{character:"⅐",ref:"⅐",expanded:"1/7",value:1/7},{character:"⅛",ref:"⅛",expanded:"1/8",value:1/8},{character:"⅜",ref:"⅜",expanded:"3/8",value:3/8},{character:"⅝",ref:"⅝",expanded:"5/8",value:5/8},{character:"⅞",ref:"⅞",expanded:"7/8",value:7/8},{character:"⅑",ref:"⅑",expanded:"1/9",value:1/9},{character:"⅒",ref:"⅒",expanded:"1/10",value:.1}];class w{constructor(t,e,i,n){this.allowAbbreviation=t,this.maxAbbreviationError=e,this.fixedDigits=i,this.itemSeparator=n}static parseFloat(t){if(0===t.length)throw new Error(`Not a number: '${t}'`);if("-"===t[0])return-w.parseFloat(t.substr(1));if("√"===t[0])return Math.sqrt(w.parseFloat(t.substr(1)));const e=w.matchUnicodeFraction((e=>e.character===t));if(void 0!==e)return e.value;const i=parseFloat(t);if(isNaN(i))throw new Error(`Not a number: '${t}'`);return i}static simplifyByRounding(t,e){if(t<0)return-w.simplifyByRounding(-t,e);const i=t%1;if(i<=e||1-i<=e)return Math.round(t);const n=w.matchUnicodeFraction((i=>Math.abs(i.value-t)<=e));if(void 0!==n)return n.value;const o=w.matchUnicodeFraction((i=>Math.abs(Math.sqrt(i.value)-t)<=e));return void 0!==o?Math.sqrt(o.value):t}static matchUnicodeFraction(t){for(const e of v)if(t(e))return e}formatFloat(t){return this.allowAbbreviation?this.abbreviateFloat(t,this.maxAbbreviationError,this.fixedDigits):void 0!==this.fixedDigits?t.toFixed(this.fixedDigits):String(t)}abbreviateFloat(t,e=0,i){if(Math.abs(t)<e)return"0";if(t<0)return`-${this.abbreviateFloat(-t,e,i)}`;const n=w.matchUnicodeFraction((i=>Math.abs(i.value-t)<=e));if(void 0!==n)return n.character;const o=w.matchUnicodeFraction((i=>Math.abs(Math.sqrt(i.value)-t)<=e));return void 0!==o?`√${o.character}`:t%1!=0&&void 0!==i?t.toFixed(i):t.toString()}}w.CONSISTENT=new w(!1,0,2,", "),w.EXACT=new w(!0,0,void 0,", "),w.MINIFIED=new w(!0,0,void 0,","),w.SIMPLIFIED=new w(!0,5e-4,3,", ");const y=1e3,x=Object.prototype.toString.call({}),E="!recursion-limit!";function S(t,e=10){return function(t){return null===t?"null":void 0===t?"undefined":"string"==typeof t?`"${t}"`:"number"==typeof t?String(t):void 0}(t)||function(t,e){if(0===e)return E;if(t instanceof Map)return function(t,e){const i=[];for(const[n,o]of t.entries()){if(i.length>y){i.push("[...]");break}const t=S(n,e-1),r=S(o,e-1);i.push(`${t}: ${r}`)}return`Map{${i.join(", ")}}`}(t,e);if(t instanceof Set)return function(t,e){const i=[];for(const n of t){if(i.length>y){i.push("[...]");break}i.push(S(n,e-1))}return`Set{${i.join(", ")}}`}(t,e);return(t=>{if(t[Symbol.iterator]!==undefined){return true}return false})(t)?function(t,e){const i=[];for(const n of t){if(i.length>y){i.push("[...]");break}i.push(S(n,e-1))}return`${Array.isArray(t)?"":t.constructor.name}[${i.join(", ")}]`}(t,e):void 0}(t,e)||function(t,e){const i=String(t);return i!==x?i:function(t,e){const i=[];for(const n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;if(i.length>y){i.push("[...]");break}const o=t[n],r=S(n,e-1),s=S(o,e-1);i.push(`${r}: ${s}`)}const n=t.constructor.name;return`${n==={}.constructor.name?"":`(Type: ${n})`}{${i.join(", ")}}`}(t,e)}(t,e)}let C=0;class z extends Error{constructor(t,e){super(t),this.detailsObj=e,this.name="Error",this.message=t,this.stack=(new Error).stack,void 0!==this.stack&&(this.stack=this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /,"\n    ")),C++;try{this.details=1===C?S(this.detailsObj):"(failed to describe detailsObj due to possibly re-entrancy)"}catch(t){console.error(t),this.details="(failed to describe detailsObj, see the console for details)"}finally{C--}}}class q{static need(t,e,i){if(!0!==t){const t=void 0===i?"(not provided)":`[${Array.prototype.slice.call(i).join(", ")}]`;throw new Error(`Precondition failed\n\nMessage: ${void 0===e?"(not provided)":e}\n\nArgs: ${t}`)}}static notNull(t){q.need(null!=t,"notNull")}static round(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}static snappedCosSin(t){const e=Math.PI/4,i=Math.round(t/e);if(i*e===t){const t=Math.sqrt(.5);return[[1,0],[t,t],[0,1],[-t,t],[-1,0],[-t,-t],[0,-1],[t,-t]][7&i]}return[Math.cos(t),Math.sin(t)]}static updateUrlJson(t){history.pushState("","",encodeURIComponent(t))}static get urlJson(){const t=window.location.href.toString().split(window.location.host)[1].slice(1);return decodeURIComponent(t)}}const D={if_same_instance_as_this_then_throw:!0},M={not_a_normal_value:!0};class A{constructor(t,e=!1){let i,n;if(t instanceof A)i=t._iterable,n=t[Symbol.iterator];else if(e)i={[Symbol.iterator]:t},n=t;else{if(!this.isIterable(t))throw new Error(`Not iterable: ${S(t)}`);i=t,n=t[Symbol.iterator].bind(t)}this._iterable=i,this[Symbol.iterator]=n}isIterable(t){return"string"==typeof t||"object"==typeof t&&null!==t&&Symbol.iterator in t}static fromGenerator(t){return new A(t,!0)}toArray(){return Array.from(this._iterable)}join(t){return this.toArray().join(t)}toString(){return`Seq[${this.join(", ")}]`}static range(t){if(!Number.isInteger(t)||t<0)throw new z("bad count",{count:t});return A.fromGenerator((function*(){for(let e=0;e<t;e++)yield e}))}map(t){const e=this._iterable;return A.fromGenerator((function*(){for(const i of e)yield t(i)}))}flatMap(t){const e=this._iterable;return A.fromGenerator((function*(){for(const i of e)yield*t(i)}))}filter(t){const e=this._iterable;return A.fromGenerator((function*(){for(const i of e)t(i)&&(yield i)}))}maxBy(t,e=D,i=((t,e)=>t<e)){let n=M,o=M;for(const e of this._iterable){if(n===M){n=e;continue}o===M&&(o=t(n));const r=t(e);i(o,r)&&(n=e,o=r)}return function(t,e,i){if(t!==M)return t;if(e===D)throw new Error(i);return e}(n,e,"Can't maxBy an empty sequence.")}any(t){for(const e of this._iterable)if(t(e))return!0;return!1}every(t){return!this.any((e=>!t(e)))}distinctBy(t){const e=this;return A.fromGenerator((function(){const i=new Set;return e.filter((e=>{const n=t(e);return!i.has(n)&&(i.add(n),!0)}))[Symbol.iterator]()}))}distinct(){return this.distinctBy((t=>t))}segmentBy(t){const e=this;return A.fromGenerator((function*(){let i,n=[];for(const o of e){const e=t(o);n.length>0&&e!==i&&(yield n,n=[]),n.push(o),i=e}n.length>0&&(yield n)}))}single(t=D){const e=this[Symbol.iterator](),i=e.next();if(!i.done&&e.next().done)return i.value;if(t===D)throw i.done?new Error("Empty sequence doesn't contain a single item."):new Error("Sequence contains more than a single item.");return t}sortedBy(t){return _(this.toArray().sort(((e,i)=>{const n=t(e),o=t(i);return n<o?-1:n>o?1:0})))}}function _(t){return new A(t)}function O(t,e){let i=function(t){return function(t){for(let e=(t=[...t]).indexOf("e",1);-1!==e;e=t.indexOf("e",e+1)){const i=e-1;let n=e+1;/[0-9]/.exec(t[i])&&(/[+-]/.exec(`${t[n]}`)&&(n+=1),/[0-9]/.exec(`${t[n]}`)&&(n+=1,t.splice(i,n-i,t.slice(i,n).join("")),e-=1))}return t}(_(t.toLowerCase().split(/\s/)).flatMap((t=>_(t).segmentBy((t=>""===t.trim()?" ":/[.0-9]/.exec(t)?"#":/[_a-z]/.exec(t)?"a":NaN)).map((t=>t.join(""))))).filter((t=>""!==t.trim())).toArray())}(t).map((t=>function(t,e){if(/[0-9]+(\.[0-9]+)?/.exec(t))return parseFloat(t);if(e.has(t))return e.get(t);throw new z("Unrecognized token",{token:t})}(t,e)));i.length>0&&void 0!==i[i.length-1].priority&&(i=i.slice(0,i.length-1));const n=[],o=[],r=t=>"("!==t&&void 0===t.priority,s=e=>{if("("===e)throw new z("Bad expression: unmatched '('",{text:t});if(o.length<2)throw new z("Bad expression: operated on nothing",{text:t});const i=o.pop(),n=o.pop();o.push(e.f(n,i))},a=()=>{for(;;){if(0===n.length)throw new z("Bad expression: unmatched ')'",{text:t});const e=n.pop();if("("===e)break;s(e)}},c=t=>{for(;n.length>0&&o.length>=2&&void 0!==o[o.length-1];){const e=n[n.length-1];if(void 0===e.w||e.w<t)break;s(n.pop())}},l=(i,r)=>{const s=e.get("*");if(i&&void 0===r.binary_action&&")"!==r&&(c(s.priority),n.push({f:s.binary_action,w:s.priority})),i&&void 0!==r.binary_action)c(r.priority),n.push({f:r.binary_action,w:r.priority});else if(void 0!==r.unary_action)c(r.priority),o.push(void 0),n.push({f:(t,e)=>r.unary_action(e),w:1/0});else if(void 0!==r.binary_action)throw new z("Bad expression: binary op in bad spot",{text:t})};let d=!1;for(const t of i)l(d,t),d=r(t),"("===t?n.push("("):")"===t?a():d&&o.push(t);if(c(-1/0),1!==o.length||0!==n.length)throw new z("Incomplete expression",{text:t});return o[0]}class k{constructor(t,e){this.real=t,this.imag=e}static from(t){if(t instanceof k)return t;if("number"==typeof t)return new k(t,0);throw new z("Unrecognized value type.",{v:t})}static parse(t){return k.from(O(t,$))}static polar(t,e){const[i,n]=q.snappedCosSin(e);return new k(t*i,t*n)}static realPartOf(t){if(t instanceof k)return t.real;if("number"==typeof t)return t;throw new z("Unrecognized value type.",{v:t})}static imagPartOf(t){if(t instanceof k)return t.imag;if("number"==typeof t)return 0;throw new z("Unrecognized value type.",{v:t})}static rootsOfQuadratic(t,e,i){if(t=k.from(t),e=k.from(e),i=k.from(i),t.isEqualTo(0)){if(!e.isEqualTo(0))return[i.times(-1).dividedBy(e)];if(!i.isEqualTo(0))return[];throw Error("Degenerate")}const n=e.times(e).minus(t.times(i).times(4)).sqrts(),o=e.times(-1),r=t.times(2);return n.map((t=>o.minus(t).dividedBy(r)))}isEqualTo(t){return t instanceof k?this.real===t.real&&this.imag===t.imag:"number"==typeof t&&(this.real===t&&0===this.imag)}isApproximatelyEqualTo(t,e){if(t instanceof k||"number"==typeof t){const i=this.minus(k.from(t));return Math.abs(i.real)<=e&&Math.abs(i.imag)<=e&&i.abs()<=e}return!1}norm2(){return this.real*this.real+this.imag*this.imag}abs(){return Math.sqrt(this.norm2())}unit(){const t=this.norm2();return t<1e-5?k.polar(1,this.phase()):this.dividedBy(Math.sqrt(t))}plus(t){const e=k.from(t);return new k(this.real+e.real,this.imag+e.imag)}minus(t){const e=k.from(t);return new k(this.real-e.real,this.imag-e.imag)}times(t){const e=k.from(t);return new k(this.real*e.real-this.imag*e.imag,this.real*e.imag+this.imag*e.real)}dividedBy(t){const e=k.from(t),i=e.norm2();if(0===i)throw new Error("Division by Zero");const n=this.times(e.conjugate());return new k(n.real/i,n.imag/i)}sqrts(){const[t,e]=[this.real,this.imag],i=Math.sqrt(Math.sqrt(t*t+e*e));if(0===i)return[k.ZERO];if(0===e&&t<0)return[new k(0,i),new k(0,-i)];const n=this.phase()/2,o=k.polar(i,n);return[o,o.times(-1)]}conjugate(){return new k(this.real,-this.imag)}toString(t){return(t=t||w.EXACT).allowAbbreviation?this.toStringAllowSingleValue(t):this.toStringBothValues(t)}neg(){return new k(-this.real,-this.imag)}raisedTo(t){return.5===t&&0===this.imag&&this.real>=0?new k(Math.sqrt(this.real),0):k.ZERO.isEqualTo(t)?k.ONE:this.isEqualTo(k.ZERO)?k.ZERO:this.ln().times(k.from(t)).exp()}exp(){return k.polar(Math.exp(this.real),this.imag)}cos(){const t=this.times(k.I);return t.exp().plus(t.neg().exp()).times(.5)}sin(){const t=this.times(k.I);return t.exp().minus(t.neg().exp()).dividedBy(new k(0,2))}tan(){return this.sin().dividedBy(this.cos())}ln(){return new k(Math.log(this.abs()),this.phase())}phase(){return Math.atan2(this.imag,this.real)}toStringAllowSingleValue(t){return Math.abs(this.imag)<=t.maxAbbreviationError?t.formatFloat(this.real):Math.abs(this.real)<=t.maxAbbreviationError?Math.abs(this.imag-1)<=t.maxAbbreviationError?"i":Math.abs(this.imag+1)<=t.maxAbbreviationError?"-i":`${t.formatFloat(this.imag)}i`:this.toStringBothValues(t)}toStringBothValues(t){const e=this.imag>=0?"+":"-",i=t.allowAbbreviation&&Math.abs(Math.abs(this.imag)-1)<=t.maxAbbreviationError?"":t.formatFloat(Math.abs(this.imag));return`${(t.allowAbbreviation||void 0===t.fixedDigits||this.real<0?"":"+")+t.formatFloat(this.real)+e+i}i`}}k.ZERO=new k(0,0),k.ONE=new k(1,0),k.I=new k(0,1);const T=new Map,P=new Map,$=new Map;T.set("i",k.I),T.set("e",k.from(Math.E)),T.set("pi",k.from(Math.PI)),T.set("(","("),T.set(")",")");for(const{character:t,value:e}of v)T.set(t,e);T.set("sqrt",{unary_action:t=>k.from(t).raisedTo(.5),priority:4}),T.set("exp",{unary_action:t=>k.from(t).exp(),priority:4}),T.set("ln",{unary_action:t=>k.from(t).ln(),priority:4}),T.set("^",{binary_action:(t,e)=>k.from(t).raisedTo(e),priority:3}),T.set("*",{binary_action:(t,e)=>k.from(t).times(e),priority:2}),T.set("/",{binary_action:(t,e)=>k.from(t).dividedBy(e),priority:2}),T.set("-",{unary_action:t=>k.from(t).neg(),binary_action:(t,e)=>k.from(t).minus(e),priority:1}),T.set("+",{unary_action:t=>t,binary_action:(t,e)=>k.from(t).plus(e),priority:1}),T.set("√",T.get("sqrt")),$.set("cos",{unary_action:t=>new k(Math.PI/180,0).times(t).cos(),priority:4}),$.set("sin",{unary_action:t=>new k(Math.PI/180,0).times(t).sin(),priority:4}),$.set("asin",{unary_action:t=>{if(0!==k.imagPartOf(t))throw new z("asin input out of range",{e:t});return k.from(180*Math.asin(k.realPartOf(t))/Math.PI)},priority:4}),$.set("acos",{unary_action:t=>{if(0!==k.imagPartOf(t))throw new z("acos input out of range",{e:t});return k.from(180*Math.acos(k.realPartOf(t))/Math.PI)},priority:4}),$.set("arccos",$.get("acos")),$.set("arcsin",$.get("asin")),P.set("cos",{unary_action:t=>k.from(t).cos(),priority:4}),P.set("sin",{unary_action:t=>k.from(t).sin(),priority:4}),P.set("tan",{unary_action:t=>k.from(t).tan(),priority:4}),P.set("asin",{unary_action:t=>{if(0!==k.imagPartOf(t))throw new z("asin input out of range",{e:t});return k.from(Math.asin(k.realPartOf(t)))},priority:4}),P.set("acos",{unary_action:t=>{if(0!==k.imagPartOf(t))throw new z("acos input out of range",{e:t});return k.from(Math.acos(k.realPartOf(t)))},priority:4}),P.set("atan",{unary_action:t=>{if(0!==k.imagPartOf(t))throw new z("atan input out of range",{e:t});return k.from(Math.atan(k.realPartOf(t)))},priority:4});for(const[t,e]of T.entries())$.set(t,e),P.set(t,e);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function L(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function N(t,e){return t(e={exports:{}},e.exports),e.exports}var R=N((function(t,e){!function(t){function e(t){return i(t)&&"function"==typeof t.from}function i(t){return"object"==typeof t&&"function"==typeof t.to}function n(t){t.parentElement.removeChild(t)}function o(t){return null!=t}function r(t){t.preventDefault()}function s(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function a(t,e){return Math.round(t/e)*e}function c(t,e){var i=t.getBoundingClientRect(),n=t.ownerDocument,o=n.documentElement,r=b(n);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(r.x=0),e?i.top+r.y-o.clientTop:i.left+r.x-o.clientLeft}function l(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function d(t,e,i){i>0&&(f(t,e),setTimeout((function(){m(t,e)}),i))}function u(t){return Math.max(Math.min(t,100),0)}function p(t){return Array.isArray(t)?t:[t]}function h(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function f(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function m(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function g(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function b(t){var e=void 0!==window.pageXOffset,i="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:i?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:i?t.documentElement.scrollTop:t.body.scrollTop}}function v(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function w(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}function y(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(t,e){return 100/(e-t)}function E(t,e,i){return 100*e/(t[i+1]-t[i])}function S(t,e){return E(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function C(t,e){return e*(t[1]-t[0])/100+t[0]}function z(t,e){for(var i=1;t>=e[i];)i+=1;return i}function q(t,e,i){if(i>=t.slice(-1)[0])return 100;var n=z(i,t),o=t[n-1],r=t[n],s=e[n-1],a=e[n];return s+S([o,r],i)/x(s,a)}function D(t,e,i){if(i>=100)return t.slice(-1)[0];var n=z(i,e),o=t[n-1],r=t[n],s=e[n-1];return C([o,r],(i-s)*x(s,e[n]))}function M(t,e,i,n){if(100===n)return n;var o=z(n,t),r=t[o-1],s=t[o];return i?n-r>(s-r)/2?s:r:e[o-1]?t[o-1]+a(n-t[o-1],e[o-1]):n}var A,_;t.PipsMode=void 0,(_=t.PipsMode||(t.PipsMode={})).Range="range",_.Steps="steps",_.Positions="positions",_.Count="count",_.Values="values",t.PipsType=void 0,(A=t.PipsType||(t.PipsType={}))[A.None=-1]="None",A[A.NoValue=0]="NoValue",A[A.LargeValue=1]="LargeValue",A[A.SmallValue=2]="SmallValue";var O=function(){function t(t,e,i){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=e;var o=[];for(Object.keys(t).forEach((function(e){o.push([p(t[e]),e])})),o.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<o.length;n++)this.handleEntryPoint(o[n][1],o[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){var e,i=[];for(e=0;e<this.xNumSteps.length-1;e++){var n=this.xNumSteps[e];if(n&&t/n%1!=0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");i[e]=E(this.xVal,t,e)}return i},t.prototype.getAbsoluteDistance=function(t,e,i){var n,o=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[o+1];)o++;else t===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);i||t!==this.xPct[o+1]||o++,null===e&&(e=[]);var r=1,s=e[o],a=0,c=0,l=0,d=0;for(n=i?(t-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):(this.xPct[o+1]-t)/(this.xPct[o+1]-this.xPct[o]);s>0;)a=this.xPct[o+1+d]-this.xPct[o+d],e[o+d]*r+100-100*n>100?(c=a*n,r=(s-100*n)/e[o+d],n=1):(c=e[o+d]*a/100*r,r=0),i?(l-=c,this.xPct.length+d>=1&&d--):(l+=c,this.xPct.length-d>=1&&d++),s=e[o+d]*r;return t+l},t.prototype.toStepping=function(t){return t=q(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return D(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=M(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,i){var n=z(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/i},t.prototype.getNearbySteps=function(t){var e=z(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(h);return Math.max.apply(null,t)},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var i;if(!l(i="min"===t?0:"max"===t?100:parseFloat(t))||!l(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(e[0]);var n=Number(e[1]);i?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=E([this.xVal[t],this.xVal[t+1]],e,0)/x(this.xPct[t],this.xPct[t+1]);var i=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(i.toFixed(3))-1),o=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=o}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),k={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},T={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},P={tooltips:".__tooltips",aria:".__aria"};function $(t,e){if(!l(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function L(t,e){if(!l(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function N(t,e){if(!l(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function R(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");t.spectrum=new O(e,t.snap||!1,t.singleStep)}function I(t,e){if(e=p(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function j(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function G(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function B(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function F(t,e){var i,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(i=1;i<t.handles;i++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function U(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function H(t,e){if(!l(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function V(t,e){if(!l(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function W(t,e){var i;if(!l(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!l(e[0])&&!l(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],i=0;i<t.spectrum.xNumSteps.length-1;i++)if(t.padding[0][i]<0||t.padding[1][i]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],o=t.spectrum.xVal[0];if(n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-o)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function X(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Q(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var i=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,o=e.indexOf("fixed")>=0,r=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0;if(o){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");H(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:i||r,drag:n,fixed:o,snap:r,hover:s,unconstrained:a}}function Y(t,e){if(!1!==e)if(!0===e||i(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if((e=p(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!i(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function J(t,e){if(!i(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function Z(t,i){if(!e(i))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=i}function K(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function tt(t,e){t.documentElement=e}function et(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function it(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(i){t.cssClasses[i]=t.cssPrefix+e[i]}))):t.cssClasses=e}function nt(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:k,format:k},i={step:{r:!1,t:$},keyboardPageMultiplier:{r:!1,t:L},keyboardDefaultStep:{r:!1,t:N},start:{r:!0,t:I},connect:{r:!0,t:F},direction:{r:!0,t:X},snap:{r:!1,t:j},animate:{r:!1,t:G},animationDuration:{r:!1,t:B},range:{r:!0,t:R},orientation:{r:!1,t:U},margin:{r:!1,t:H},limit:{r:!1,t:V},padding:{r:!1,t:W},behaviour:{r:!0,t:Q},ariaFormat:{r:!1,t:J},format:{r:!1,t:Z},tooltips:{r:!1,t:Y},keyboardSupport:{r:!0,t:K},documentElement:{r:!1,t:tt},cssPrefix:{r:!0,t:et},cssClasses:{r:!0,t:it}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:T,keyboardPageMultiplier:5,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(i).forEach((function(r){if(o(t[r])||void 0!==n[r])i[r].t(e,o(t[r])?t[r]:n[r]);else if(i[r].r)throw new Error("noUiSlider: '"+r+"' is required.")})),e.pips=t.pips;var r=document.createElement("div"),s=void 0!==r.style.msTransform,a=void 0!==r.style.transform;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";var c=[["left","top"],["right","bottom"]];return e.style=c[e.dir][e.ort],e}function ot(e,i,a){var l,h,x,E,S,C=v(),z=y()&&w(),q=e,D=i.spectrum,M=[],A=[],_=[],O=0,k={},T=e.ownerDocument,$=i.documentElement||T.documentElement,L=T.body,N="rtl"===T.dir||1===i.ort?0:100;function R(t,e){var i=T.createElement("div");return e&&f(i,e),t.appendChild(i),i}function I(t,e){var n=R(t,i.cssClasses.origin),o=R(n,i.cssClasses.handle);return R(o,i.cssClasses.touchArea),o.setAttribute("data-handle",String(e)),i.keyboardSupport&&(o.setAttribute("tabindex","0"),o.addEventListener("keydown",(function(t){return ht(t,e)}))),o.setAttribute("role","slider"),o.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===e?f(o,i.cssClasses.handleLower):e===i.handles-1&&f(o,i.cssClasses.handleUpper),n}function j(t,e){return!!e&&R(t,i.cssClasses.connect)}function G(t,e){var n=R(e,i.cssClasses.connects);h=[],(x=[]).push(j(n,t[0]));for(var o=0;o<i.handles;o++)h.push(I(e,o)),_[o]=o,x.push(j(n,t[o+1]))}function B(t){return f(t,i.cssClasses.target),0===i.dir?f(t,i.cssClasses.ltr):f(t,i.cssClasses.rtl),0===i.ort?f(t,i.cssClasses.horizontal):f(t,i.cssClasses.vertical),f(t,"rtl"===getComputedStyle(t).direction?i.cssClasses.textDirectionRtl:i.cssClasses.textDirectionLtr),R(t,i.cssClasses.base)}function F(t,e){return!(!i.tooltips||!i.tooltips[e])&&R(t.firstChild,i.cssClasses.tooltip)}function U(){return q.hasAttribute("disabled")}function H(t){return h[t].hasAttribute("disabled")}function V(){S&&(bt("update"+P.tooltips),S.forEach((function(t){t&&n(t)})),S=null)}function W(){V(),S=h.map(F),mt("update"+P.tooltips,(function(t,e,n){if(S&&i.tooltips&&!1!==S[e]){var o=t[e];!0!==i.tooltips[e]&&(o=i.tooltips[e].to(n[e])),S[e].innerHTML=o}}))}function X(){bt("update"+P.aria),mt("update"+P.aria,(function(t,e,n,o,r){_.forEach((function(t){var e=h[t],o=wt(A,t,0,!0,!0,!0),s=wt(A,t,100,!0,!0,!0),a=r[t],c=String(i.ariaFormat.to(n[t]));o=D.fromStepping(o).toFixed(1),s=D.fromStepping(s).toFixed(1),a=D.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",o),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",c)}))}))}function Q(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return D.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=e.values-1,n=100/i,o=[];i--;)o[i]=i*n;return o.push(100),Y(o,e.stepped)}return e.mode===t.PipsMode.Positions?Y(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return D.fromStepping(D.getStep(D.toStepping(t)))})):e.values:[]}function Y(t,e){return t.map((function(t){return D.fromStepping(e?D.getStep(t):t)}))}function J(e){function i(t,e){return Number((t+e).toFixed(7))}var n=Q(e),o={},r=D.xVal[0],a=D.xVal[D.xVal.length-1],c=!1,l=!1,d=0;return(n=s(n.slice().sort((function(t,e){return t-e}))))[0]!==r&&(n.unshift(r),c=!0),n[n.length-1]!==a&&(n.push(a),l=!0),n.forEach((function(r,s){var a,u,p,h,f,m,g,b,v,w,y=r,x=n[s+1],E=e.mode===t.PipsMode.Steps;for(E&&(a=D.xNumSteps[s]),a||(a=x-y),void 0===x&&(x=y),a=Math.max(a,1e-7),u=y;u<=x;u=i(u,a)){for(b=(f=(h=D.toStepping(u))-d)/(e.density||1),w=f/(v=Math.round(b)),p=1;p<=v;p+=1)o[(m=d+p*w).toFixed(5)]=[D.fromStepping(m),0];g=n.indexOf(u)>-1?t.PipsType.LargeValue:E?t.PipsType.SmallValue:t.PipsType.NoValue,!s&&c&&u!==x&&(g=0),u===x&&l||(o[h.toFixed(5)]=[u,g]),d=h}})),o}function Z(e,n,o){var r,s,a=T.createElement("div"),c=((r={})[t.PipsType.None]="",r[t.PipsType.NoValue]=i.cssClasses.valueNormal,r[t.PipsType.LargeValue]=i.cssClasses.valueLarge,r[t.PipsType.SmallValue]=i.cssClasses.valueSub,r),l=((s={})[t.PipsType.None]="",s[t.PipsType.NoValue]=i.cssClasses.markerNormal,s[t.PipsType.LargeValue]=i.cssClasses.markerLarge,s[t.PipsType.SmallValue]=i.cssClasses.markerSub,s),d=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],u=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function p(t,e){var n=e===i.cssClasses.value,o=n?c:l;return e+" "+(n?d:u)[i.ort]+" "+o[t]}function h(e,r,s){if((s=n?n(r,s):s)!==t.PipsType.None){var c=R(a,!1);c.className=p(s,i.cssClasses.marker),c.style[i.style]=e+"%",s>t.PipsType.NoValue&&((c=R(a,!1)).className=p(s,i.cssClasses.value),c.setAttribute("data-value",String(r)),c.style[i.style]=e+"%",c.innerHTML=String(o.to(r)))}}return f(a,i.cssClasses.pips),f(a,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(e).forEach((function(t){h(t,e[t][0],e[t][1])})),a}function K(){E&&(n(E),E=null)}function tt(t){K();var e=J(t),i=t.filter,n=t.format||{to:function(t){return String(Math.round(t))}};return E=q.appendChild(Z(e,i,n))}function et(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||l[e]:t.height||l[e]}function it(t,e,n,o){var r=function(r){var s=ot(r,o.pageOffset,o.target||e);return!!s&&!(U()&&!o.doNotReject)&&!(g(q,i.cssClasses.tap)&&!o.doNotReject)&&!(t===C.start&&void 0!==s.buttons&&s.buttons>1)&&(!o.hover||!s.buttons)&&(z||s.preventDefault(),s.calcPoint=s.points[i.ort],void n(s,o))},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,r,!!z&&{passive:!0}),s.push([t,r])})),s}function ot(t,e,i){var n=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),r=0===t.type.indexOf("pointer"),s=0,a=0;if(0===t.type.indexOf("MSPointer")&&(r=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var c=function(e){var n=e.target;return n===i||i.contains(n)||t.composed&&t.composedPath().shift()===i};if("touchstart"===t.type){var l=Array.prototype.filter.call(t.touches,c);if(l.length>1)return!1;s=l[0].pageX,a=l[0].pageY}else{var d=Array.prototype.find.call(t.changedTouches,c);if(!d)return!1;s=d.pageX,a=d.pageY}}return e=e||b(T),(o||r)&&(s=t.clientX+e.x,a=t.clientY+e.y),t.pageOffset=e,t.points=[s,a],t.cursor=o||r,t}function rt(t){var e=100*(t-c(l,i.ort))/et();return e=u(e),i.dir?100-e:e}function st(t){var e=100,i=!1;return h.forEach((function(n,o){if(!H(o)){var r=A[o],s=Math.abs(r-t);(s<e||s<=e&&t>r||100===s&&100===e)&&(i=o,e=s)}})),i}function at(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&lt(t,e)}function ct(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return lt(t,e);var n=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);xt(n>0,100*n/e.baseSize,e.locations,e.handleNumbers,e.connect)}function lt(t,e){e.handle&&(m(e.handle,i.cssClasses.active),O-=1),e.listeners.forEach((function(t){$.removeEventListener(t[0],t[1])})),0===O&&(m(q,i.cssClasses.drag),Ct(),t.cursor&&(L.style.cursor="",L.removeEventListener("selectstart",r))),e.handleNumbers.forEach((function(t){vt("change",t),vt("set",t),vt("end",t)}))}function dt(t,e){if(!e.handleNumbers.some(H)){var n;1===e.handleNumbers.length&&(n=h[e.handleNumbers[0]].children[0],O+=1,f(n,i.cssClasses.active)),t.stopPropagation();var o=[],s=it(C.move,$,ct,{target:t.target,handle:n,connect:e.connect,listeners:o,startCalcPoint:t.calcPoint,baseSize:et(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:A.slice()}),a=it(C.end,$,lt,{target:t.target,handle:n,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers}),c=it("mouseout",$,at,{target:t.target,handle:n,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers});o.push.apply(o,s.concat(a,c)),t.cursor&&(L.style.cursor=getComputedStyle(t.target).cursor,h.length>1&&f(q,i.cssClasses.drag),L.addEventListener("selectstart",r,!1)),e.handleNumbers.forEach((function(t){vt("start",t)}))}}function ut(t){t.stopPropagation();var e=rt(t.calcPoint),n=st(e);!1!==n&&(i.events.snap||d(q,i.cssClasses.tap,i.animationDuration),zt(n,e,!0,!0),Ct(),vt("slide",n,!0),vt("update",n,!0),vt("change",n,!0),vt("set",n,!0),i.events.snap&&dt(t,{handleNumbers:[n]}))}function pt(t){var e=rt(t.calcPoint),i=D.getStep(e),n=D.fromStepping(i);Object.keys(k).forEach((function(t){"hover"===t.split(".")[0]&&k[t].forEach((function(t){t.call(Nt,n)}))}))}function ht(t,e){if(U()||H(e))return!1;var n=["Left","Right"],o=["Down","Up"],r=["PageDown","PageUp"],s=["Home","End"];i.dir&&!i.ort?n.reverse():i.ort&&!i.dir&&(o.reverse(),r.reverse());var a,c=t.key.replace("Arrow",""),l=c===r[0],d=c===r[1],u=c===o[0]||c===n[0]||l,p=c===o[1]||c===n[1]||d,h=c===s[0],f=c===s[1];if(!(u||p||h||f))return!0;if(t.preventDefault(),p||u){var m=i.keyboardPageMultiplier,g=u?0:1,b=Tt(e)[g];if(null===b)return!1;!1===b&&(b=D.getDefaultStep(A[e],u,i.keyboardDefaultStep)),(d||l)&&(b*=m),b=Math.max(b,1e-7),b*=u?-1:1,a=M[e]+b}else a=f?i.spectrum.xVal[i.spectrum.xVal.length-1]:i.spectrum.xVal[0];return zt(e,D.toStepping(a),!0,!0),vt("slide",e),vt("update",e),vt("change",e),vt("set",e),!1}function ft(t){t.fixed||h.forEach((function(t,e){it(C.start,t.children[0],dt,{handleNumbers:[e]})})),t.tap&&it(C.start,l,ut,{}),t.hover&&it(C.move,l,pt,{hover:!0}),t.drag&&x.forEach((function(e,n){if(!1!==e&&0!==n&&n!==x.length-1){var o=h[n-1],r=h[n],s=[e];f(e,i.cssClasses.draggable),t.fixed&&(s.push(o.children[0]),s.push(r.children[0])),s.forEach((function(t){it(C.start,t,dt,{handles:[o,r],handleNumbers:[n-1,n],connect:e})}))}}))}function mt(t,e){k[t]=k[t]||[],k[t].push(e),"update"===t.split(".")[0]&&h.forEach((function(t,e){vt("update",e)}))}function gt(t){return t===P.aria||t===P.tooltips}function bt(t){var e=t&&t.split(".")[0],i=e?t.substring(e.length):t;Object.keys(k).forEach((function(t){var n=t.split(".")[0],o=t.substring(n.length);e&&e!==n||i&&i!==o||gt(o)&&i!==o||delete k[t]}))}function vt(t,e,n){Object.keys(k).forEach((function(o){var r=o.split(".")[0];t===r&&k[o].forEach((function(t){t.call(Nt,M.map(i.format.to),e,M.slice(),n||!1,A.slice(),Nt)}))}))}function wt(t,e,n,o,r,s){var a;return h.length>1&&!i.events.unconstrained&&(o&&e>0&&(a=D.getAbsoluteDistance(t[e-1],i.margin,!1),n=Math.max(n,a)),r&&e<h.length-1&&(a=D.getAbsoluteDistance(t[e+1],i.margin,!0),n=Math.min(n,a))),h.length>1&&i.limit&&(o&&e>0&&(a=D.getAbsoluteDistance(t[e-1],i.limit,!1),n=Math.min(n,a)),r&&e<h.length-1&&(a=D.getAbsoluteDistance(t[e+1],i.limit,!0),n=Math.max(n,a))),i.padding&&(0===e&&(a=D.getAbsoluteDistance(0,i.padding[0],!1),n=Math.max(n,a)),e===h.length-1&&(a=D.getAbsoluteDistance(100,i.padding[1],!0),n=Math.min(n,a))),!((n=u(n=D.getStep(n)))===t[e]&&!s)&&n}function yt(t,e){var n=i.ort;return(n?e:t)+", "+(n?t:e)}function xt(t,e,i,n,o){var r=i.slice(),s=n[0],a=[!t,t],c=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,i){var n=wt(r,t,r[t]+e,a[i],c[i],!1);!1===n?e=0:(e=n-r[t],r[t]=n)})):a=c=[!0];var l=!1;n.forEach((function(t,n){l=zt(t,i[t]+e,a[n],c[n])||l})),l&&(n.forEach((function(t){vt("update",t),vt("slide",t)})),null!=o&&vt("drag",s))}function Et(t,e){return i.dir?100-t-e:t}function St(t,e){A[t]=e,M[t]=D.fromStepping(e);var n="translate("+yt(10*(Et(e,0)-N)+"%","0")+")";h[t].style[i.transformRule]=n,qt(t),qt(t+1)}function Ct(){_.forEach((function(t){var e=A[t]>50?-1:1,i=3+(h.length+e*t);h[t].style.zIndex=String(i)}))}function zt(t,e,i,n,o){return o||(e=wt(A,t,e,i,n,!1)),!1!==e&&(St(t,e),!0)}function qt(t){if(x[t]){var e=0,n=100;0!==t&&(e=A[t-1]),t!==x.length-1&&(n=A[t]);var o=n-e,r="translate("+yt(Et(e,o)+"%","0")+")",s="scale("+yt(o/100,"1")+")";x[t].style[i.transformRule]=r+" "+s}}function Dt(t,e){return null===t||!1===t||void 0===t?A[e]:("number"==typeof t&&(t=String(t)),!1!==(t=i.format.from(t))&&(t=D.toStepping(t)),!1===t||isNaN(t)?A[e]:t)}function Mt(t,e,n){var o=p(t),r=void 0===A[0];e=void 0===e||e,i.animate&&!r&&d(q,i.cssClasses.tap,i.animationDuration),_.forEach((function(t){zt(t,Dt(o[t],t),!0,!1,n)}));for(var s=1===_.length?0:1;s<_.length;++s)_.forEach((function(t){zt(t,A[t],!0,!0,n)}));Ct(),_.forEach((function(t){vt("update",t),null!==o[t]&&e&&vt("set",t)}))}function At(t){Mt(i.start,t)}function _t(t,e,i,n){if(!((t=Number(t))>=0&&t<_.length))throw new Error("noUiSlider: invalid handle number, got: "+t);zt(t,Dt(e,t),!0,!0,n),vt("update",t),i&&vt("set",t)}function Ot(t){if(void 0===t&&(t=!1),t)return 1===M.length?M[0]:M.slice(0);var e=M.map(i.format.to);return 1===e.length?e[0]:e}function kt(){for(bt(P.aria),bt(P.tooltips),Object.keys(i.cssClasses).forEach((function(t){m(q,i.cssClasses[t])}));q.firstChild;)q.removeChild(q.firstChild);delete q.noUiSlider}function Tt(t){var e=A[t],n=D.getNearbySteps(e),o=M[t],r=n.thisStep.step,s=null;if(i.snap)return[o-n.stepBefore.startValue||null,n.stepAfter.startValue-o||null];!1!==r&&o+r>n.stepAfter.startValue&&(r=n.stepAfter.startValue-o),s=o>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&o-n.stepBefore.highestStep,100===e?r=null:0===e&&(s=null);var a=D.countStepDecimals();return null!==r&&!1!==r&&(r=Number(r.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,r]}function Pt(){return _.map(Tt)}function $t(t,e){var n=Ot(),r=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];r.forEach((function(e){void 0!==t[e]&&(a[e]=t[e])}));var s=nt(a);r.forEach((function(e){void 0!==t[e]&&(i[e]=s[e])})),D=s.spectrum,i.margin=s.margin,i.limit=s.limit,i.padding=s.padding,i.pips?tt(i.pips):K(),i.tooltips?W():V(),A=[],Mt(o(t.start)?t.start:n,e)}function Lt(){l=B(q),G(i.connect,l),ft(i.events),Mt(i.start),i.pips&&tt(i.pips),i.tooltips&&W(),X()}Lt();var Nt={destroy:kt,steps:Pt,on:mt,off:bt,get:Ot,set:Mt,setHandle:_t,reset:At,__moveHandles:function(t,e,i){xt(t,e,A,i)},options:a,updateOptions:$t,target:q,removePips:K,removeTooltips:V,getTooltips:function(){return S},getOrigins:function(){return h},pips:tt};return Nt}function rt(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var i=ot(t,nt(e),e);return t.noUiSlider=i,i}var st={__spectrum:O,cssClasses:T,create:rt};t.create=rt,t.cssClasses=T,t.default=st,Object.defineProperty(t,"__esModule",{value:!0})}(e)})),I=L(R),j=R.PipsMode,G="top",B="bottom",F="right",U="left",H="auto",V=[G,B,F,U],W="start",X="end",Q="viewport",Y="popper",J=V.reduce((function(t,e){return t.concat([e+"-"+W,e+"-"+X])}),[]),Z=[].concat(V,[H]).reduce((function(t,e){return t.concat([e,e+"-"+W,e+"-"+X])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function tt(t){return t?(t.nodeName||"").toLowerCase():null}function et(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function it(t){return t instanceof et(t).Element||t instanceof Element}function nt(t){return t instanceof et(t).HTMLElement||t instanceof HTMLElement}function ot(t){return"undefined"!=typeof ShadowRoot&&(t instanceof et(t).ShadowRoot||t instanceof ShadowRoot)}var rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},o=e.elements[t];nt(o)&&tt(o)&&(Object.assign(o.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],o=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});nt(n)&&tt(n)&&(Object.assign(n.style,r),Object.keys(o).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function st(t){return t.split("-")[0]}function at(t,e){var i=t.getBoundingClientRect();return{width:i.width/1,height:i.height/1,top:i.top/1,right:i.right/1,bottom:i.bottom/1,left:i.left/1,x:i.left/1,y:i.top/1}}function ct(t){var e=at(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function lt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ot(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function dt(t){return et(t).getComputedStyle(t)}function ut(t){return["table","td","th"].indexOf(tt(t))>=0}function pt(t){return((it(t)?t.ownerDocument:t.document)||window.document).documentElement}function ht(t){return"html"===tt(t)?t:t.assignedSlot||t.parentNode||(ot(t)?t.host:null)||pt(t)}function ft(t){return nt(t)&&"fixed"!==dt(t).position?t.offsetParent:null}function mt(t){for(var e=et(t),i=ft(t);i&&ut(i)&&"static"===dt(i).position;)i=ft(i);return i&&("html"===tt(i)||"body"===tt(i)&&"static"===dt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&nt(t)&&"fixed"===dt(t).position)return null;for(var i=ht(t);nt(i)&&["html","body"].indexOf(tt(i))<0;){var n=dt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function gt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var bt=Math.max,vt=Math.min,wt=Math.round;function yt(t,e,i){return bt(t,vt(e,i))}function xt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Et(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var St={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,o=t.options,r=i.elements.arrow,s=i.modifiersData.popperOffsets,a=st(i.placement),c=gt(a),l=[U,F].indexOf(a)>=0?"height":"width";if(r&&s){var d=function(t,e){return xt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Et(t,V))}(o.padding,i),u=ct(r),p="y"===c?G:U,h="y"===c?B:F,f=i.rects.reference[l]+i.rects.reference[c]-s[c]-i.rects.popper[l],m=s[c]-i.rects.reference[c],g=mt(r),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,v=f/2-m/2,w=d[p],y=b-u[l]-d[h],x=b/2-u[l]/2+v,E=yt(w,x,y),S=c;i.modifiersData[n]=((e={})[S]=E,e.centerOffset=E-x,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&lt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ct(t){return t.split("-")[1]}var zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qt(t){var e,i=t.popper,n=t.popperRect,o=t.placement,r=t.variation,s=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,d=t.roundOffsets,u=!0===d?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:wt(wt(e*n)/n)||0,y:wt(wt(i*n)/n)||0}}(s):"function"==typeof d?d(s):s,p=u.x,h=void 0===p?0:p,f=u.y,m=void 0===f?0:f,g=s.hasOwnProperty("x"),b=s.hasOwnProperty("y"),v=U,w=G,y=window;if(l){var x=mt(i),E="clientHeight",S="clientWidth";x===et(i)&&"static"!==dt(x=pt(i)).position&&"absolute"===a&&(E="scrollHeight",S="scrollWidth"),x=x,o!==G&&(o!==U&&o!==F||r!==X)||(w=B,m-=x[E]-n.height,m*=c?1:-1),o!==U&&(o!==G&&o!==B||r!==X)||(v=F,h-=x[S]-n.width,h*=c?1:-1)}var C,z=Object.assign({position:a},l&&zt);return c?Object.assign({},z,((C={})[w]=b?"0":"",C[v]=g?"0":"",C.transform=(y.devicePixelRatio||1)<=1?"translate("+h+"px, "+m+"px)":"translate3d("+h+"px, "+m+"px, 0)",C)):Object.assign({},z,((e={})[w]=b?m+"px":"",e[v]=g?h+"px":"",e.transform="",e))}var Dt={passive:!0};var Mt={left:"right",right:"left",bottom:"top",top:"bottom"};function At(t){return t.replace(/left|right|bottom|top/g,(function(t){return Mt[t]}))}var _t={start:"end",end:"start"};function Ot(t){return t.replace(/start|end/g,(function(t){return _t[t]}))}function kt(t){var e=et(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Tt(t){return at(pt(t)).left+kt(t).scrollLeft}function Pt(t){var e=dt(t),i=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+o+n)}function $t(t){return["html","body","#document"].indexOf(tt(t))>=0?t.ownerDocument.body:nt(t)&&Pt(t)?t:$t(ht(t))}function Lt(t,e){var i;void 0===e&&(e=[]);var n=$t(t),o=n===(null==(i=t.ownerDocument)?void 0:i.body),r=et(n),s=o?[r].concat(r.visualViewport||[],Pt(n)?n:[]):n,a=e.concat(s);return o?a:a.concat(Lt(ht(s)))}function Nt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Rt(t,e){return e===Q?Nt(function(t){var e=et(t),i=pt(t),n=e.visualViewport,o=i.clientWidth,r=i.clientHeight,s=0,a=0;return n&&(o=n.width,r=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,a=n.offsetTop)),{width:o,height:r,x:s+Tt(t),y:a}}(t)):nt(e)?function(t){var e=at(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Nt(function(t){var e,i=pt(t),n=kt(t),o=null==(e=t.ownerDocument)?void 0:e.body,r=bt(i.scrollWidth,i.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=bt(i.scrollHeight,i.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+Tt(t),c=-n.scrollTop;return"rtl"===dt(o||i).direction&&(a+=bt(i.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(pt(t)))}function It(t,e,i){var n="clippingParents"===e?function(t){var e=Lt(ht(t)),i=["absolute","fixed"].indexOf(dt(t).position)>=0&&nt(t)?mt(t):t;return it(i)?e.filter((function(t){return it(t)&&lt(t,i)&&"body"!==tt(t)})):[]}(t):[].concat(e),o=[].concat(n,[i]),r=o[0],s=o.reduce((function(e,i){var n=Rt(t,i);return e.top=bt(n.top,e.top),e.right=vt(n.right,e.right),e.bottom=vt(n.bottom,e.bottom),e.left=bt(n.left,e.left),e}),Rt(t,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function jt(t){var e,i=t.reference,n=t.element,o=t.placement,r=o?st(o):null,s=o?Ct(o):null,a=i.x+i.width/2-n.width/2,c=i.y+i.height/2-n.height/2;switch(r){case G:e={x:a,y:i.y-n.height};break;case B:e={x:a,y:i.y+i.height};break;case F:e={x:i.x+i.width,y:c};break;case U:e={x:i.x-n.width,y:c};break;default:e={x:i.x,y:i.y}}var l=r?gt(r):null;if(null!=l){var d="y"===l?"height":"width";switch(s){case W:e[l]=e[l]-(i[d]/2-n[d]/2);break;case X:e[l]=e[l]+(i[d]/2-n[d]/2)}}return e}function Gt(t,e){void 0===e&&(e={});var i=e,n=i.placement,o=void 0===n?t.placement:n,r=i.boundary,s=void 0===r?"clippingParents":r,a=i.rootBoundary,c=void 0===a?Q:a,l=i.elementContext,d=void 0===l?Y:l,u=i.altBoundary,p=void 0!==u&&u,h=i.padding,f=void 0===h?0:h,m=xt("number"!=typeof f?f:Et(f,V)),g=d===Y?"reference":Y,b=t.rects.popper,v=t.elements[p?g:d],w=It(it(v)?v:v.contextElement||pt(t.elements.popper),s,c),y=at(t.elements.reference),x=jt({reference:y,element:b,strategy:"absolute",placement:o}),E=Nt(Object.assign({},b,x)),S=d===Y?E:y,C={top:w.top-S.top+m.top,bottom:S.bottom-w.bottom+m.bottom,left:w.left-S.left+m.left,right:S.right-w.right+m.right},z=t.modifiersData.offset;if(d===Y&&z){var q=z[o];Object.keys(C).forEach((function(t){var e=[F,B].indexOf(t)>=0?1:-1,i=[G,B].indexOf(t)>=0?"y":"x";C[t]+=q[i]*e}))}return C}function Bt(t,e){void 0===e&&(e={});var i=e,n=i.placement,o=i.boundary,r=i.rootBoundary,s=i.padding,a=i.flipVariations,c=i.allowedAutoPlacements,l=void 0===c?Z:c,d=Ct(n),u=d?a?J:J.filter((function(t){return Ct(t)===d})):V,p=u.filter((function(t){return l.indexOf(t)>=0}));0===p.length&&(p=u);var h=p.reduce((function(e,i){return e[i]=Gt(t,{placement:i,boundary:o,rootBoundary:r,padding:s})[st(i)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}var Ft={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=i.mainAxis,r=void 0===o||o,s=i.altAxis,a=void 0===s||s,c=i.fallbackPlacements,l=i.padding,d=i.boundary,u=i.rootBoundary,p=i.altBoundary,h=i.flipVariations,f=void 0===h||h,m=i.allowedAutoPlacements,g=e.options.placement,b=st(g),v=c||(b===g||!f?[At(g)]:function(t){if(st(t)===H)return[];var e=At(t);return[Ot(t),e,Ot(e)]}(g)),w=[g].concat(v).reduce((function(t,i){return t.concat(st(i)===H?Bt(e,{placement:i,boundary:d,rootBoundary:u,padding:l,flipVariations:f,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,x=e.rects.popper,E=new Map,S=!0,C=w[0],z=0;z<w.length;z++){var q=w[z],D=st(q),M=Ct(q)===W,A=[G,B].indexOf(D)>=0,_=A?"width":"height",O=Gt(e,{placement:q,boundary:d,rootBoundary:u,altBoundary:p,padding:l}),k=A?M?F:U:M?B:G;y[_]>x[_]&&(k=At(k));var T=At(k),P=[];if(r&&P.push(O[D]<=0),a&&P.push(O[k]<=0,O[T]<=0),P.every((function(t){return t}))){C=q,S=!1;break}E.set(q,P)}if(S)for(var $=function(t){var e=w.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return C=e,"break"},L=f?3:1;L>0;L--){if("break"===$(L))break}e.placement!==C&&(e.modifiersData[n]._skip=!0,e.placement=C,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ut(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ht(t){return[G,F,B,U].some((function(e){return t[e]>=0}))}var Vt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,o=i.offset,r=void 0===o?[0,0]:o,s=Z.reduce((function(t,i){return t[i]=function(t,e,i){var n=st(t),o=[U,G].indexOf(n)>=0?-1:1,r="function"==typeof i?i(Object.assign({},e,{placement:t})):i,s=r[0],a=r[1];return s=s||0,a=(a||0)*o,[U,F].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}(i,e.rects,r),t}),{}),a=s[e.placement],c=a.x,l=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[n]=s}};var Wt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,o=i.mainAxis,r=void 0===o||o,s=i.altAxis,a=void 0!==s&&s,c=i.boundary,l=i.rootBoundary,d=i.altBoundary,u=i.padding,p=i.tether,h=void 0===p||p,f=i.tetherOffset,m=void 0===f?0:f,g=Gt(e,{boundary:c,rootBoundary:l,padding:u,altBoundary:d}),b=st(e.placement),v=Ct(e.placement),w=!v,y=gt(b),x="x"===y?"y":"x",E=e.modifiersData.popperOffsets,S=e.rects.reference,C=e.rects.popper,z="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,q={x:0,y:0};if(E){if(r||a){var D="y"===y?G:U,M="y"===y?B:F,A="y"===y?"height":"width",_=E[y],O=E[y]+g[D],k=E[y]-g[M],T=h?-C[A]/2:0,P=v===W?S[A]:C[A],$=v===W?-C[A]:-S[A],L=e.elements.arrow,N=h&&L?ct(L):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},I=R[D],j=R[M],H=yt(0,S[A],N[A]),V=w?S[A]/2-T-H-I-z:P-H-I-z,X=w?-S[A]/2+T+H+j+z:$+H+j+z,Q=e.elements.arrow&&mt(e.elements.arrow),Y=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,J=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,Z=E[y]+V-J-Y,K=E[y]+X-J;if(r){var tt=yt(h?vt(O,Z):O,_,h?bt(k,K):k);E[y]=tt,q[y]=tt-_}if(a){var et="x"===y?G:U,it="x"===y?B:F,nt=E[x],ot=nt+g[et],rt=nt-g[it],at=yt(h?vt(ot,Z):ot,nt,h?bt(rt,K):rt);E[x]=at,q[x]=at-nt}}e.modifiersData[n]=q}},requiresIfExists:["offset"]};function Xt(t,e,i){void 0===i&&(i=!1);var n=nt(e);nt(e)&&function(t){var e=t.getBoundingClientRect(),i=e.width/t.offsetWidth||1,n=e.height/t.offsetHeight||1}(e);var o,r=pt(e),s=at(t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!i)&&(("body"!==tt(e)||Pt(r))&&(a=(o=e)!==et(o)&&nt(o)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(o):kt(o)),nt(e)?((c=at(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Tt(r))),{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Qt(t){var e=new Map,i=new Set,n=[];function o(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&o(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||o(t)})),n}var Yt={placement:"bottom",modifiers:[],strategy:"absolute"};function Jt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Zt(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,o=e.defaultOptions,r=void 0===o?Yt:o;return function(t,e,i){void 0===i&&(i=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Yt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],l=!1,d={state:a,setOptions:function(i){var o="function"==typeof i?i(a.options):i;u(),a.options=Object.assign({},r,a.options,o),a.scrollParents={reference:it(t)?Lt(t):t.contextElement?Lt(t.contextElement):[],popper:Lt(e)};var s=function(t){var e=Qt(t);return K.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}(function(t){var e=t.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(n,a.options.modifiers)));return a.orderedModifiers=s.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,o=t.effect;if("function"==typeof o){var r=o({state:a,name:e,instance:d,options:n}),s=function(){};c.push(r||s)}})),d.update()},forceUpdate:function(){if(!l){var t=a.elements,e=t.reference,i=t.popper;if(Jt(e,i)){a.rects={reference:Xt(e,mt(i),"fixed"===a.options.strategy),popper:ct(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var o=a.orderedModifiers[n],r=o.fn,s=o.options,c=void 0===s?{}:s,u=o.name;"function"==typeof r&&(a=r({state:a,options:c,name:u,instance:d})||a)}else a.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(o())}))}))),s}),destroy:function(){u(),l=!0}};if(!Jt(t,e))return d;function u(){c.forEach((function(t){return t()})),c=[]}return d.setOptions(i).then((function(t){!l&&i.onFirstUpdate&&i.onFirstUpdate(t)})),d}}var Kt=Zt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,o=n.scroll,r=void 0===o||o,s=n.resize,a=void 0===s||s,c=et(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach((function(t){t.addEventListener("scroll",i.update,Dt)})),a&&c.addEventListener("resize",i.update,Dt),function(){r&&l.forEach((function(t){t.removeEventListener("scroll",i.update,Dt)})),a&&c.removeEventListener("resize",i.update,Dt)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=jt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,o=void 0===n||n,r=i.adaptive,s=void 0===r||r,a=i.roundOffsets,c=void 0===a||a,l={placement:st(e.placement),variation:Ct(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,qt(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,qt(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},rt,Vt,Ft,Wt,St,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,s=Gt(e,{elementContext:"reference"}),a=Gt(e,{altBoundary:!0}),c=Ut(s,n),l=Ut(a,o,r),d=Ht(c),u=Ht(l);e.modifiersData[i]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":u})}}]}),te='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',ee="tippy-content",ie="tippy-arrow",ne="tippy-svg-arrow",oe={passive:!0,capture:!0},re=function(){return document.body};function se(t,e,i){if(Array.isArray(t)){var n=t[e];return null==n?Array.isArray(i)?i[e]:i:n}return t}function ae(t,e){var i={}.toString.call(t);return 0===i.indexOf("[object")&&i.indexOf(e+"]")>-1}function ce(t,e){return"function"==typeof t?t.apply(void 0,e):t}function le(t,e){return 0===e?t:function(n){clearTimeout(i),i=setTimeout((function(){t(n)}),e)};var i}function de(t){return[].concat(t)}function ue(t,e){-1===t.indexOf(e)&&t.push(e)}function pe(t){return[].slice.call(t)}function he(){return document.createElement("div")}function fe(t){return["Element","Fragment"].some((function(e){return ae(t,e)}))}function me(t){return fe(t)?[t]:function(t){return ae(t,"NodeList")}(t)?pe(t):Array.isArray(t)?t:pe(document.querySelectorAll(t))}function ge(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function be(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function ve(t,e,i){var n=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[n](e,i)}))}function we(t,e){for(var i=e;i;){var n;if(t.contains(i))return!0;i=null==(n=null==i.getRootNode?void 0:i.getRootNode())?void 0:n.host}return!1}var ye={isTouch:!1},xe=0;function Ee(){ye.isTouch||(ye.isTouch=!0,window.performance&&document.addEventListener("mousemove",Se))}function Se(){var t=performance.now();t-xe<20&&(ye.isTouch=!1,document.removeEventListener("mousemove",Se)),xe=t}function Ce(){var t,e=document.activeElement;if((t=e)&&t._tippy&&t._tippy.reference===t){var i=e._tippy;e.blur&&!i.state.isVisible&&e.blur()}}var ze=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,qe=Object.assign({appendTo:re,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),De=Object.keys(qe);function Me(t){var e=(t.plugins||[]).reduce((function(e,i){var n,o=i.name,r=i.defaultValue;o&&(e[o]=void 0!==t[o]?t[o]:null!=(n=qe[o])?n:r);return e}),{});return Object.assign({},t,{},e)}function Ae(t,e){var i=Object.assign({},e,{content:ce(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(Me(Object.assign({},qe,{plugins:e}))):De).reduce((function(e,i){var n=(t.getAttribute("data-tippy-"+i)||"").trim();if(!n)return e;if("content"===i)e[i]=n;else try{e[i]=JSON.parse(n)}catch(t){e[i]=n}return e}),{})}(t,e.plugins));return i.aria=Object.assign({},qe.aria,{},i.aria),i.aria={expanded:"auto"===i.aria.expanded?e.interactive:i.aria.expanded,content:"auto"===i.aria.content?e.interactive?null:"describedby":i.aria.content},i}function _e(t,e){t.innerHTML=e}function Oe(t){var e=he();return!0===t?e.className=ie:(e.className=ne,fe(t)?e.appendChild(t):_e(e,t)),e}function ke(t,e){fe(e.content)?(_e(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?_e(t,e.content):t.textContent=e.content)}function Te(t){var e=t.firstElementChild,i=pe(e.children);return{box:e,content:i.find((function(t){return t.classList.contains(ee)})),arrow:i.find((function(t){return t.classList.contains(ie)||t.classList.contains(ne)})),backdrop:i.find((function(t){return t.classList.contains("tippy-backdrop")}))}}function Pe(t){var e=he(),i=he();i.className="tippy-box",i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var n=he();function o(i,n){var o=Te(e),r=o.box,s=o.content,a=o.arrow;n.theme?r.setAttribute("data-theme",n.theme):r.removeAttribute("data-theme"),"string"==typeof n.animation?r.setAttribute("data-animation",n.animation):r.removeAttribute("data-animation"),n.inertia?r.setAttribute("data-inertia",""):r.removeAttribute("data-inertia"),r.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?r.setAttribute("role",n.role):r.removeAttribute("role"),i.content===n.content&&i.allowHTML===n.allowHTML||ke(s,t.props),n.arrow?a?i.arrow!==n.arrow&&(r.removeChild(a),r.appendChild(Oe(n.arrow))):r.appendChild(Oe(n.arrow)):a&&r.removeChild(a)}return n.className=ee,n.setAttribute("data-state","hidden"),ke(n,t.props),e.appendChild(i),i.appendChild(n),o(t.props,t.props),{popper:e,onUpdate:o}}Pe.$$tippy=!0;var $e=1,Le=[],Ne=[];function Re(t,e){var i,n,o,r,s,a,c,l,d,u=Ae(t,Object.assign({},qe,{},Me((i=e,Object.keys(i).reduce((function(t,e){return void 0!==i[e]&&(t[e]=i[e]),t}),{}))))),p=!1,h=!1,f=!1,m=!1,g=[],b=le(X,u.interactiveDebounce),v=$e++,w=(d=u.plugins).filter((function(t,e){return d.indexOf(t)===e})),y={id:v,reference:t,popper:he(),popperInstance:null,props:u,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:w,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(o),cancelAnimationFrame(r)},setProps:function(e){if(y.state.isDestroyed)return;P("onBeforeUpdate",[y,e]),V();var i=y.props,n=Ae(t,Object.assign({},y.props,{},e,{ignoreAttributes:!0}));y.props=n,H(),i.interactiveDebounce!==n.interactiveDebounce&&(N(),b=le(X,n.interactiveDebounce));i.triggerTarget&&!n.triggerTarget?de(i.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):n.triggerTarget&&t.removeAttribute("aria-expanded");L(),T(),S&&S(i,n);y.popperInstance&&(Z(),tt().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));P("onAfterUpdate",[y,e])},setContent:function(t){y.setProps({content:t})},show:function(){var t=y.state.isVisible,e=y.state.isDestroyed,i=!y.state.isEnabled,n=ye.isTouch&&!y.props.touch,o=se(y.props.duration,0,qe.duration);if(t||e||i||n)return;if(A().hasAttribute("disabled"))return;if(P("onShow",[y],!1),!1===y.props.onShow(y))return;y.state.isVisible=!0,M()&&(E.style.visibility="visible");T(),G(),y.state.isMounted||(E.style.transition="none");if(M()){var r=O(),s=r.box,a=r.content;ge([s,a],0)}c=function(){var t;if(y.state.isVisible&&!m){if(m=!0,E.offsetHeight,E.style.transition=y.props.moveTransition,M()&&y.props.animation){var e=O(),i=e.box,n=e.content;ge([i,n],o),be([i,n],"visible")}$(),L(),ue(Ne,y),null==(t=y.popperInstance)||t.forceUpdate(),y.state.isMounted=!0,P("onMount",[y]),y.props.animation&&M()&&function(t,e){F(t,e)}(o,(function(){y.state.isShown=!0,P("onShown",[y])}))}},function(){var t,e=y.props.appendTo,i=A();t=y.props.interactive&&e===re||"parent"===e?i.parentNode:ce(e,[i]);t.contains(E)||t.appendChild(E);Z()}()},hide:function(){var t=!y.state.isVisible,e=y.state.isDestroyed,i=!y.state.isEnabled,n=se(y.props.duration,1,qe.duration);if(t||e||i)return;if(P("onHide",[y],!1),!1===y.props.onHide(y))return;y.state.isVisible=!1,y.state.isShown=!1,m=!1,p=!1,M()&&(E.style.visibility="hidden");if(N(),B(),T(),M()){var o=O(),r=o.box,s=o.content;y.props.animation&&(ge([r,s],n),be([r,s],"hidden"))}$(),L(),y.props.animation?M()&&function(t,e){F(t,(function(){!y.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&e()}))}(n,y.unmount):y.unmount()},hideWithInteractivity:function(t){_().addEventListener("mousemove",b),ue(Le,b),b(t)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide();if(!y.state.isMounted)return;K(),tt().forEach((function(t){t._tippy.unmount()})),E.parentNode&&E.parentNode.removeChild(E);Ne=Ne.filter((function(t){return t!==y})),y.state.isMounted=!1,P("onHidden",[y])},destroy:function(){if(y.state.isDestroyed)return;y.clearDelayTimeouts(),y.unmount(),V(),delete t._tippy,y.state.isDestroyed=!0,P("onDestroy",[y])}};if(!u.render)return y;var x=u.render(y),E=x.popper,S=x.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+y.id,y.popper=E,t._tippy=y,E._tippy=y;var C=w.map((function(t){return t.fn(y)})),z=t.hasAttribute("aria-expanded");return H(),L(),T(),P("onCreate",[y]),u.showOnCreate&&et(),E.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),E.addEventListener("mouseleave",(function(t){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&(_().addEventListener("mousemove",b),b(t))})),y;function q(){var t=y.props.touch;return Array.isArray(t)?t:[t,0]}function D(){return"hold"===q()[0]}function M(){var t;return!!(null==(t=y.props.render)?void 0:t.$$tippy)}function A(){return l||t}function _(){var t=A().parentNode;return t?function(t){var e,i=de(t)[0];return(null==i||null==(e=i.ownerDocument)?void 0:e.body)?i.ownerDocument:document}(t):document}function O(){return Te(E)}function k(t){return y.state.isMounted&&!y.state.isVisible||ye.isTouch||s&&"focus"===s.type?0:se(y.props.delay,t?0:1,qe.delay)}function T(){E.style.pointerEvents=y.props.interactive&&y.state.isVisible?"":"none",E.style.zIndex=""+y.props.zIndex}function P(t,e,i){var n;(void 0===i&&(i=!0),C.forEach((function(i){i[t]&&i[t].apply(void 0,e)})),i)&&(n=y.props)[t].apply(n,e)}function $(){var e=y.props.aria;if(e.content){var i="aria-"+e.content,n=E.id;de(y.props.triggerTarget||t).forEach((function(t){var e=t.getAttribute(i);if(y.state.isVisible)t.setAttribute(i,e?e+" "+n:n);else{var o=e&&e.replace(n,"").trim();o?t.setAttribute(i,o):t.removeAttribute(i)}}))}}function L(){!z&&y.props.aria.expanded&&de(y.props.triggerTarget||t).forEach((function(t){y.props.interactive?t.setAttribute("aria-expanded",y.state.isVisible&&t===A()?"true":"false"):t.removeAttribute("aria-expanded")}))}function N(){_().removeEventListener("mousemove",b),Le=Le.filter((function(t){return t!==b}))}function R(t){if(!ye.isTouch||!f&&"mousedown"!==t.type){var e=t.composedPath&&t.composedPath()[0]||t.target;if(!y.props.interactive||!we(E,e)){if(we(A(),e)){if(ye.isTouch)return;if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[y,t]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),h=!0,setTimeout((function(){h=!1})),y.state.isMounted||B())}}}function I(){f=!0}function j(){f=!1}function G(){var t=_();t.addEventListener("mousedown",R,!0),t.addEventListener("touchend",R,oe),t.addEventListener("touchstart",j,oe),t.addEventListener("touchmove",I,oe)}function B(){var t=_();t.removeEventListener("mousedown",R,!0),t.removeEventListener("touchend",R,oe),t.removeEventListener("touchstart",j,oe),t.removeEventListener("touchmove",I,oe)}function F(t,e){var i=O().box;function n(t){t.target===i&&(ve(i,"remove",n),e())}if(0===t)return e();ve(i,"remove",a),ve(i,"add",n),a=n}function U(e,i,n){void 0===n&&(n=!1),de(y.props.triggerTarget||t).forEach((function(t){t.addEventListener(e,i,n),g.push({node:t,eventType:e,handler:i,options:n})}))}function H(){var t;D()&&(U("touchstart",W,{passive:!0}),U("touchend",Q,{passive:!0})),(t=y.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(U(t,W),t){case"mouseenter":U("mouseleave",Q);break;case"focus":U(ze?"focusout":"blur",Y);break;case"focusin":U("focusout",Y)}}))}function V(){g.forEach((function(t){var e=t.node,i=t.eventType,n=t.handler,o=t.options;e.removeEventListener(i,n,o)})),g=[]}function W(t){var e,i=!1;if(y.state.isEnabled&&!J(t)&&!h){var n="focus"===(null==(e=s)?void 0:e.type);s=t,l=t.currentTarget,L(),!y.state.isVisible&&ae(t,"MouseEvent")&&Le.forEach((function(e){return e(t)})),"click"===t.type&&(y.props.trigger.indexOf("mouseenter")<0||p)&&!1!==y.props.hideOnClick&&y.state.isVisible?i=!0:et(t),"click"===t.type&&(p=!i),i&&!n&&it(t)}}function X(t){var e=t.target,i=A().contains(e)||E.contains(e);if("mousemove"!==t.type||!i){var n=tt().concat(E).map((function(t){var e,i=null==(e=t._tippy.popperInstance)?void 0:e.state;return i?{popperRect:t.getBoundingClientRect(),popperState:i,props:u}:null})).filter(Boolean);(function(t,e){var i=e.clientX,n=e.clientY;return t.every((function(t){var e=t.popperRect,o=t.popperState,r=t.props.interactiveBorder,s=o.placement.split("-")[0],a=o.modifiersData.offset;if(!a)return!0;var c="bottom"===s?a.top.y:0,l="top"===s?a.bottom.y:0,d="right"===s?a.left.x:0,u="left"===s?a.right.x:0,p=e.top-n+c>r,h=n-e.bottom-l>r,f=e.left-i+d>r,m=i-e.right-u>r;return p||h||f||m}))})(n,t)&&(N(),it(t))}}function Q(t){J(t)||y.props.trigger.indexOf("click")>=0&&p||(y.props.interactive?y.hideWithInteractivity(t):it(t))}function Y(t){y.props.trigger.indexOf("focusin")<0&&t.target!==A()||y.props.interactive&&t.relatedTarget&&E.contains(t.relatedTarget)||it(t)}function J(t){return!!ye.isTouch&&D()!==t.type.indexOf("touch")>=0}function Z(){K();var e=y.props,i=e.popperOptions,n=e.placement,o=e.offset,r=e.getReferenceClientRect,s=e.moveTransition,a=M()?Te(E).arrow:null,l=r?{getBoundingClientRect:r,contextElement:r.contextElement||A()}:t,d={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(M()){var i=O().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?i.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?i.setAttribute("data-"+t,""):i.removeAttribute("data-"+t)})),e.attributes.popper={}}}},u=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},d];M()&&a&&u.push({name:"arrow",options:{element:a,padding:3}}),u.push.apply(u,(null==i?void 0:i.modifiers)||[]),y.popperInstance=Kt(l,E,Object.assign({},i,{placement:n,onFirstUpdate:c,modifiers:u}))}function K(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function tt(){return pe(E.querySelectorAll("[data-tippy-root]"))}function et(t){y.clearDelayTimeouts(),t&&P("onTrigger",[y,t]),G();var e=k(!0),i=q(),o=i[0],r=i[1];ye.isTouch&&"hold"===o&&r&&(e=r),e?n=setTimeout((function(){y.show()}),e):y.show()}function it(t){if(y.clearDelayTimeouts(),P("onUntrigger",[y,t]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&p)){var e=k(!1);e?o=setTimeout((function(){y.state.isVisible&&y.hide()}),e):r=requestAnimationFrame((function(){y.hide()}))}}else B()}}function Ie(t,e){void 0===e&&(e={});var i=qe.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",Ee,oe),window.addEventListener("blur",Ce);var n=Object.assign({},e,{plugins:i}),o=me(t).reduce((function(t,e){var i=e&&Re(e,n);return i&&t.push(i),t}),[]);return fe(t)?o[0]:o}Ie.defaultProps=qe,Ie.setDefaultProps=function(t){Object.keys(t).forEach((function(e){qe[e]=t[e]}))},Ie.currentInput=ye;var je=Object.assign({},rt,{effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow)}}),Ge=function(t,e){var i;void 0===e&&(e={});var n,o=t,r=[],s=e.overrides,a=[],c=!1;function l(){r=o.map((function(t){return t.reference}))}function d(t){o.forEach((function(e){t?e.enable():e.disable()}))}function u(t){return o.map((function(e){var i=e.setProps;return e.setProps=function(o){i(o),e.reference===n&&t.setProps(o)},function(){e.setProps=i}}))}function p(t,e){var i=r.indexOf(e);if(e!==n){n=e;var a=(s||[]).concat("content").reduce((function(t,e){return t[e]=o[i].props[e],t}),{});t.setProps(Object.assign({},a,{getReferenceClientRect:"function"==typeof a.getReferenceClientRect?a.getReferenceClientRect:function(){return e.getBoundingClientRect()}}))}}d(!1),l();var h={fn:function(){return{onDestroy:function(){d(!0)},onHidden:function(){n=null},onClickOutside:function(t){t.props.showOnCreate&&!c&&(c=!0,n=null)},onShow:function(t){t.props.showOnCreate&&!c&&(c=!0,p(t,r[0]))},onTrigger:function(t,e){p(t,e.currentTarget)}}}},f=Ie(he(),Object.assign({},function(t,e){var i=Object.assign({},t);return e.forEach((function(t){delete i[t]})),i}(e,["overrides"]),{plugins:[h].concat(e.plugins||[]),triggerTarget:r,popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((null==(i=e.popperOptions)?void 0:i.modifiers)||[],[je])})})),m=f.show;f.show=function(t){if(m(),!n&&null==t)return p(f,r[0]);if(!n||null!=t){if("number"==typeof t)return r[t]&&p(f,r[t]);if(o.indexOf(t)>=0){var e=t.reference;return p(f,e)}return r.indexOf(t)>=0?p(f,t):void 0}},f.showNext=function(){var t=r[0];if(!n)return f.show(0);var e=r.indexOf(n);f.show(r[e+1]||t)},f.showPrevious=function(){var t=r[r.length-1];if(!n)return f.show(t);var e=r.indexOf(n),i=r[e-1]||t;f.show(i)};var g=f.setProps;return f.setProps=function(t){s=t.overrides||s,g(t)},f.setInstances=function(t){d(!0),a.forEach((function(t){return t()})),o=t,d(!1),l(),u(f),f.setProps({triggerTarget:r})},a=u(f),f};Ie.setDefaultProps({render:Pe});class Be{static isMobile(){return!window.matchMedia("(min-width: 460px)").matches}}const Fe="X^½",Ue="Rx",He="Ry",Ve="Rz",We="Swap",Xe="Bloch",Qe="Measure";var Ye=N((function(t,e){
/**
     * @license Fraction.js v4.1.1 23/05/2021
     * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
     *
     * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
!function(e){var i={s:1,n:0,d:1};function n(t){function e(){var e=Error.apply(this,arguments);e.name=this.name=t,this.stack=e.stack,this.message=e.message}function i(){}return i.prototype=Error.prototype,e.prototype=new i,e}var o=u.DivisionByZero=n("DivisionByZero"),r=u.InvalidParameter=n("InvalidParameter");function s(t,e){return isNaN(t=parseInt(t,10))&&a(),t*e}function a(){throw new r}function c(t){for(var e={},i=t,n=2,o=4;o<=i;){for(;i%n==0;)i/=n,e[n]=(e[n]||0)+1;o+=1+2*n++}return i!==t?i>1&&(e[i]=(e[i]||0)+1):e[t]=(e[t]||0)+1,e}var l=function(t,e){var n,r=0,c=1,l=1,d=0,u=0,p=0,h=1,f=1,m=0,g=1,b=1,v=1,w=1e7;if(null==t);else if(void 0!==e)l=(r=t)*(c=e);else switch(typeof t){case"object":"d"in t&&"n"in t?(r=t.n,c=t.d,"s"in t&&(r*=t.s)):0 in t?(r=t[0],1 in t&&(c=t[1])):a(),l=r*c;break;case"number":if(t<0&&(l=t,t=-t),t%1==0)r=t;else if(t>0){for(t>=1&&(t/=f=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)));g<=w&&v<=w;){if(t===(n=(m+b)/(g+v))){g+v<=w?(r=m+b,c=g+v):v>g?(r=b,c=v):(r=m,c=g);break}t>n?(m+=b,g+=v):(b+=m,v+=g),g>w?(r=b,c=v):(r=m,c=g)}r*=f}else(isNaN(t)||isNaN(e))&&(c=r=NaN);break;case"string":if(null===(g=t.match(/\d+|./g))&&a(),"-"===g[m]?(l=-1,m++):"+"===g[m]&&m++,g.length===m+1?u=s(g[m++],l):"."===g[m+1]||"."===g[m]?("."!==g[m]&&(d=s(g[m++],l)),(++m+1===g.length||"("===g[m+1]&&")"===g[m+3]||"'"===g[m+1]&&"'"===g[m+3])&&(u=s(g[m],l),h=Math.pow(10,g[m].length),m++),("("===g[m]&&")"===g[m+2]||"'"===g[m]&&"'"===g[m+2])&&(p=s(g[m+1],l),f=Math.pow(10,g[m+1].length)-1,m+=3)):"/"===g[m+1]||":"===g[m+1]?(u=s(g[m],l),h=s(g[m+2],1),m+=3):"/"===g[m+3]&&" "===g[m+1]&&(d=s(g[m],l),u=s(g[m+2],l),h=s(g[m+4],1),m+=5),g.length<=m){l=r=p+(c=h*f)*d+f*u;break}default:a()}if(0===c)throw new o;i.s=l<0?-1:1,i.n=Math.abs(r),i.d=Math.abs(c)};function d(t,e){if(!t)return e;if(!e)return t;for(;;){if(!(t%=e))return e;if(!(e%=t))return t}}function u(t,e){if(!(this instanceof u))return new u(t,e);l(t,e),t=u.REDUCE?d(i.d,i.n):1,this.s=i.s,this.n=i.n/t,this.d=i.d/t}u.REDUCE=1,u.prototype={s:1,n:0,d:1,abs:function(){return new u(this.n,this.d)},neg:function(){return new u(-this.s*this.n,this.d)},add:function(t,e){return l(t,e),new u(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(t,e){return l(t,e),new u(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(t,e){return l(t,e),new u(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(t,e){return l(t,e),new u(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return new u(this)},mod:function(t,e){return isNaN(this.n)||isNaN(this.d)?new u(NaN):void 0===t?new u(this.s*this.n%this.d,1):(l(t,e),0===i.n&&0===this.d&&u(0,0),new u(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d))},gcd:function(t,e){return l(t,e),new u(d(i.n,this.n)*d(i.d,this.d),i.d*this.d)},lcm:function(t,e){return l(t,e),0===i.n&&0===this.n?new u:new u(i.n*this.n,d(i.n,this.n)*d(i.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new u(NaN):new u(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new u(NaN):new u(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new u(NaN):new u(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return new u(this.s*this.d,this.n)},pow:function(t,e){if(l(t,e),1===i.d)return i.s<0?new u(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):new u(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var n=c(this.n),o=c(this.d),r=1,s=1;for(var a in n)if("1"!==a){if("0"===a){r=0;break}if(n[a]*=i.n,n[a]%i.d!=0)return null;n[a]/=i.d,r*=Math.pow(a,n[a])}for(var a in o)if("1"!==a){if(o[a]*=i.n,o[a]%i.d!=0)return null;o[a]/=i.d,s*=Math.pow(a,o[a])}return i.s<0?new u(s,r):new u(r,s)},equals:function(t,e){return l(t,e),this.s*this.n*i.d==i.s*i.n*this.d},compare:function(t,e){l(t,e);var n=this.s*this.n*i.d-i.s*i.n*this.d;return(0<n)-(n<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;var e=this.abs().toContinued();function i(t){return 1===t.length?new u(t[0]):i(t.slice(1)).inverse().add(t[0])}t=t||.001;for(var n=0;n<e.length;n++){var o=i(e.slice(0,n+1));if(o.sub(this.abs()).abs().valueOf()<t)return o.mul(this.s)}return this},divisible:function(t,e){return l(t,e),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var e,i="",n=this.n,o=this.d;return this.s<0&&(i+="-"),1===o?i+=n:(t&&(e=Math.floor(n/o))>0&&(i+=e,i+=" ",n%=o),i+=n,i+="/",i+=o),i},toLatex:function(t){var e,i="",n=this.n,o=this.d;return this.s<0&&(i+="-"),1===o?i+=n:(t&&(e=Math.floor(n/o))>0&&(i+=e,n%=o),i+="\\frac{",i+=n,i+="}{",i+=o,i+="}"),i},toContinued:function(){var t,e=this.n,i=this.d,n=[];if(isNaN(e)||isNaN(i))return n;do{n.push(Math.floor(e/i)),t=e%i,e=i,i=t}while(1!==e);return n},toString:function(t){var e,i=this.n,n=this.d;if(isNaN(i)||isNaN(n))return"NaN";u.REDUCE||(i/=e=d(i,n),n/=e),t=t||15;var o=function(t,e){for(;e%2==0;e/=2);for(;e%5==0;e/=5);if(1===e)return 0;for(var i=10%e,n=1;1!==i;n++)if(i=10*i%e,n>2e3)return 0;return n}(0,n),r=function(t,e,i){for(var n=1,o=function(t,e,i){for(var n=1;e>0;t=t*t%i,e>>=1)1&e&&(n=n*t%i);return n}(10,i,e),r=0;r<300;r++){if(n===o)return r;n=10*n%e,o=10*o%e}return 0}(0,n,o),s=-1===this.s?"-":"";if(s+=i/n|0,i%=n,(i*=10)&&(s+="."),o){for(var a=r;a--;)s+=i/n|0,i%=n,i*=10;s+="(";for(a=o;a--;)s+=i/n|0,i%=n,i*=10;s+=")"}else for(a=t;i&&a--;)s+=i/n|0,i%=n,i*=10;return s}},Object.defineProperty(u,"__esModule",{value:!0}),u.default=u,u.Fraction=u,t.exports=u}()})),Je=L(Ye);Ye.Fraction;class Ze{constructor(t,e,i){if(t*e*2!==i.length)throw new z("width*height*2 !== buffer.length",{width:t,height:e,len:i.length});this.width=t,this.height=e,this.buffer=i}static PHASE(t){const e=new Je(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).valueOf()*Math.PI;const i=k.from(Math.E);return Ze.square(1,0,0,i.raisedTo(k.I.times(e)))}static get RNOT(){const t=k.I,e=t.neg();return Ze.square(t.plus(1),e.plus(1),e.plus(1),t.plus(1)).times(.5)}static RX(t){const e=O(t,P),i=k.I.neg(),n=Math.cos(e/2),o=Math.sin(e/2);return Ze.square(n,i.times(o),i.times(o),n)}static RY(t){const e=O(t,P),i=Math.cos(e/2),n=Math.sin(e/2);return Ze.square(i,-n,n,i)}static RZ(t){const e=O(t,P),i=k.from(Math.E),n=k.I;return Ze.square(i.raisedTo(n.neg().times(e/2)),0,0,i.raisedTo(n.times(e/2)))}static fromRows(t){q.need(t.length>0,"non-zero height",t);const e=_(t),i=t.length,n=e.map((t=>t.length)).distinct().single(null);if(null===n)throw new z("Inconsistent row widths.",{rows:t});const o=new Float64Array(n*i*2);let r=0;for(const e of t)for(const t of e)o[r]=k.realPartOf(t),o[r+1]=k.imagPartOf(t),r+=2;return new Ze(n,i,o)}static generate(t,e,i){const n=new Float64Array(t*e*2);for(let o=0;o<e;o++)for(let e=0;e<t;e++){const r=2*(o*t+e),s=i(o,e);n[r]=k.realPartOf(s),n[r+1]=k.imagPartOf(s)}return new Ze(t,e,n)}static solo(t){return new Ze(1,1,new Float64Array([k.realPartOf(t),k.imagPartOf(t)]))}static square(...t){q.need(Array.isArray(t),"Array.isArray(coefs)",t);const e=Math.round(Math.sqrt(t.length));return q.need(e*e===t.length,"Matrix.square: non-square number of arguments"),Ze.generate(e,e,((i,n)=>t[i*e+n]))}static col(...t){return q.need(Array.isArray(t),"Array.isArray(coefs)",t),Ze.generate(1,t.length,(e=>t[e]))}static row(...t){return q.need(Array.isArray(t),"Array.isArray(coefs)",t),Ze.generate(t.length,1,((e,i)=>t[i]))}static identity(t){if(!Number.isInteger(t)||t<=0)throw new z("Bad size",{size:t});const e=new Float64Array(t*t*2);for(let i=0;i<t;i++)e[i*(t+1)*2]=1;return new Ze(t,t,e)}static generateDiagonal(t,e){const i=new Float64Array(t*t*2);for(let n=0;n<t;n++){const o=n*(t+1)*2,r=e(n);i[o]=k.realPartOf(r),i[o+1]=k.imagPartOf(r)}return new Ze(t,t,i)}static zero(t,e){return new Ze(t,e,new Float64Array(t*e*2))}getColumn(t){q.need(t>=0&&t<=this.width,"colIndex >= 0 && colIndex <= this.width");const e=[];for(let i=0;i<this.height;i++)e.push(this.cell(t,i));return e}isUnitary(t){const e=this.width;return this.height===e&&this.times(this.adjoint()).isApproximatelyEqualTo(Ze.identity(e),t)}adjoint(){const t=this.height,e=this.width,i=new Float64Array(t*e*2);for(let n=0;n<e;n++)for(let e=0;e<t;e++){const o=2*(e*this.width+n),r=2*(n*t+e);i[r]=this.buffer[o],i[r+1]=-this.buffer[o+1]}return new Ze(t,e,i)}times(t){return t instanceof Ze?this.timesMatrix(t):this.timesScalar(t)}timesMatrix(t){if(this.width!==t.height)throw new z("Incompatible sizes.",{this:this,other:t});const e=t.width,i=this.height,n=this.width,o=new Float64Array(e*i*2);for(let r=0;r<i;r++)for(let i=0;i<e;i++){const s=2*(r*e+i);for(let a=0;a<n;a++){const c=2*(r*n+a),l=2*(a*e+i),d=this.buffer[c],u=this.buffer[c+1],p=t.buffer[l],h=t.buffer[l+1],f=d*p-u*h,m=d*h+p*u;o[s]+=f,o[s+1]+=m}}return new Ze(e,i,o)}timesScalar(t){const e=new Float64Array(this.buffer.length),i=k.realPartOf(t),n=k.imagPartOf(t);for(let t=0;t<e.length;t+=2){const o=this.buffer[t],r=this.buffer[t+1];e[t]=o*i-r*n,e[t+1]=o*n+r*i}return new Ze(this.width,this.height,e)}static rotation(t){const e=Math.cos(t),i=Math.sin(t);return Ze.square(e,-i,i,e)}isEqualTo(t){if(this===t)return!0;if(!(t instanceof Ze))return!1;const e=t;return this.width===e.width&&this.height===e.height&&A.range(this.buffer.length).every((t=>this.buffer[t]===e.buffer[t]))}isApproximatelyEqualTo(t,e){return t instanceof Ze&&this.width===t.width&&this.height===t.height&&Math.sqrt(this.minus(t).norm2())<=e}minus(t){const{width:e,height:i,buffer:n}=this,o=t.buffer;q.need(t.width===e&&t.height===i,"Matrix.minus: compatible sizes");const r=new Float64Array(this.buffer.length);for(let t=0;t<r.length;t++)r[t]=n[t]-o[t];return new Ze(e,i,r)}norm2(){let t=0;for(const e of this.buffer)t+=e*e;return t}toString(t=w.EXACT){return`{{${this.rows().map((e=>e.map((e=>e.toString(t))).join(t.itemSeparator))).join(`}${t.itemSeparator}{`)}}}`}rows(){return A.range(this.height).map((t=>A.range(this.width).map((e=>this.cell(e,t))).toArray())).toArray()}cell(t,e){if(t<0||e<0||t>=this.width||e>=this.height)throw new z("Cell out of range",{col:t,row:e,width:this.width,height:this.height});const i=2*(this.width*e+t);return new k(this.buffer[i],this.buffer[i+1])}set(t,e,i){if(t<0||e<0||t>=this.width||e>=this.height)throw new z("Cell out of range",{col:t,row:e,width:this.width,height:this.height});const n=2*(this.width*e+t);this.buffer[n]=i.real,this.buffer[n+1]=i.imag}isApproximatelyHermitian(t){if(this.width!==this.height)return!1;for(let e=0;e<this.width;e++)for(let i=0;i<this.height;i++){const n=2*(this.width*i+e),o=2*(this.width*e+i);if(Math.abs(this.buffer[n]-this.buffer[o])>t)return!1;if(Math.abs(this.buffer[n+1]+this.buffer[o+1])>t)return!1}return!0}plus(t){const{width:e,height:i,buffer:n}=this,o=t.buffer;q.need(t.width===e&&t.height===i,"Matrix.plus: compatible sizes");const r=new Float64Array(this.buffer.length);for(let t=0;t<r.length;t++)r[t]=n[t]+o[t];return new Ze(e,i,r)}tensorProduct(t){const e=this.width,i=this.height,n=t.width,o=t.height,r=e*n,s=i*o,a=new Float64Array(r*s*2);for(let s=0;s<i;s++)for(let i=0;i<o;i++)for(let c=0;c<e;c++)for(let l=0;l<n;l++){const d=2*(s*e+c),u=2*(i*n+l),p=2*((s*o+i)*r+(c*n+l)),h=this.buffer[d],f=this.buffer[d+1],m=t.buffer[u],g=t.buffer[u+1],b=h*m-f*g,v=h*g+f*m;a[p]=b,a[p+1]=v}return new Ze(r,s,a)}timesQubitOperation(t,e,i,n){q.need(0==(i&1<<e),"Matrix.timesQubitOperation: self-controlled"),q.need(2===t.width&&2===t.height,"Matrix.timesQubitOperation: not 2x2");const{width:o,height:r,buffer:s}=this,[a,c,l,d,u,p,h,f]=t.buffer;q.need(r>=2<<e,"Matrix.timesQubitOperation: qubit index out of range");const m=new Float64Array(s);let g=0;for(let t=0;t<r;t++){const r=0!=(i&t^n),s=0!=(t&1<<e);for(let t=0;t<o;t++){if(!r&&!s){const t=g+2*(1<<e)*o,i=m[g],n=m[g+1],r=m[t],s=m[t+1];m[g]=i*a-n*c+r*l-s*d,m[g+1]=i*c+n*a+r*d+s*l,m[t]=i*u-n*p+r*h-s*f,m[t+1]=i*p+n*u+r*f+s*h}g+=2}}return new Ze(o,r,m)}singularValueDecomposition(t=0,e=100){if(this.width!==this.height)throw new z("Expected a square matrix.",this);let{U:i,S:n,V:o}=2===this.width?this._unordered_singularValueDecomposition_2x2():this._unordered_singularValueDecomposition_iterative(t,e);const r=A.range(this.width).sortedBy((t=>-n.cell(t,t).norm2())).toArray();for(let t=0;t<n.width;t++){const e=r.indexOf(t);if(t!==e){i._inline_colMix_postMultiply(t,e,Ze.PAULI_X),o._inline_rowMix_preMultiply(t,e,Ze.PAULI_X);const s=t*(n.width+1)*2,a=e*(n.width+1)*2;[n.buffer[s],n.buffer[a]]=[n.buffer[a],n.buffer[s]],[n.buffer[s+1],n.buffer[a+1]]=[n.buffer[a+1],n.buffer[s+1]],[r[e],r[t]]=[r[t],r[e]]}}for(let t=0;t<n.width;t++)i._inline_colScale_postMultiply(t,n.cell(t,t).unit());return n=Ze.generateDiagonal(n.width,(t=>n.cell(t,t).abs())),{U:i,S:n,V:o}}_unordered_singularValueDecomposition_2x2(){const t=Ze.identity(2);let{L:e,Q:i}=this.lqDecomposition();const n=e.cell(0,0).unit(),o=e.cell(0,1).unit();t._inline_colScale_postMultiply(0,n),t._inline_colScale_postMultiply(1,o),e._inline_rowScale_preMultiply(0,n.conjugate()),e._inline_rowScale_preMultiply(1,o.conjugate());const r=e.cell(1,1).unit();e._inline_colScale_postMultiply(1,r.conjugate()),i._inline_rowScale_preMultiply(1,r);const[s,,a,,c,,l]=e.buffer,d=s+l,u=a+c,p=a-c,h=s-l,f=Math.atan2(u,d)/2,m=Math.atan2(p,h)/2,g=Math.sqrt(d*d+u*u)/2,b=Math.sqrt(h*h+p*p)/2;return t._inline_colMix_postMultiply(0,1,Ze.rotation(f-m)),i._inline_rowMix_preMultiply(0,1,Ze.rotation(f+m)),e=Ze.square(g+b,0,0,g-b),{U:t,S:e,V:i}}_unordered_singularValueDecomposition_iterative(t=0,e=100){let i=Ze.identity(this.width),n=this._clone(),o=Ze.identity(this.width),r=0;for(;!n.isDiagonal(t)&&r++<e;){const{Q:t,R:e}=n.qrDecomposition(),{L:r,Q:s}=e.lqDecomposition();i=i.times(t),n=r,o=s.times(o)}return{U:i,S:n,V:o}}_inline_colMix_postMultiply(t,e,i){const[n,o,r,s]=i._2x2Breakdown();for(let i=0;i<this.width;i++){const a=this.cell(t,i),c=this.cell(e,i),l=a.times(n).plus(c.times(r)),d=a.times(o).plus(c.times(s)),u=2*(i*this.width+t),p=2*(i*this.width+e);this.buffer[u]=l.real,this.buffer[u+1]=l.imag,this.buffer[p]=d.real,this.buffer[p+1]=d.imag}}_2x2Breakdown(){return[new k(this.buffer[0],this.buffer[1]),new k(this.buffer[2],this.buffer[3]),new k(this.buffer[4],this.buffer[5]),new k(this.buffer[6],this.buffer[7])]}_inline_rowMix_preMultiply(t,e,i){const[n,o,r,s]=i._2x2Breakdown();for(let i=0;i<this.width;i++){const a=this.cell(i,t),c=this.cell(i,e),l=a.times(n).plus(c.times(o)),d=a.times(r).plus(c.times(s)),u=2*(t*this.width+i),p=2*(e*this.width+i);this.buffer[u]=l.real,this.buffer[u+1]=l.imag,this.buffer[p]=d.real,this.buffer[p+1]=d.imag}}_inline_colScale_postMultiply(t,e){for(let i=0;i<this.height;i++){const n=this.cell(t,i).times(e),o=2*(i*this.width+t);this.buffer[o]=n.real,this.buffer[o+1]=n.imag}}lqDecomposition(){const{Q:t,R:e}=this.adjoint().qrDecomposition();return{L:e.adjoint(),Q:t.adjoint()}}qrDecomposition(){if(this.width!==this.height)throw new z("Expected a square matrix.",this);const t=Ze.identity(this.width),e=this._clone();for(let i=0;i<this.height;i++){for(let n=0;n<i&&n<this.width;n++){const o=e.cell(n,i),r=e.cell(n,n),s=r.abs(),a=o.abs();if(0===a)continue;const c=-Math.atan2(a,s),l=Math.cos(c),d=Math.sin(c),u=r.unit().conjugate(),p=o.unit().conjugate(),h=Ze.square(u.times(l),p.times(-d),u.times(d),p.times(l));e._inline_rowMix_preMultiply(n,i,h),t._inline_colMix_postMultiply(n,i,h.adjoint())}const n=e.cell(i,i).unit();e._inline_rowScale_preMultiply(i,n.conjugate()),t._inline_colScale_postMultiply(i,n)}return{Q:t,R:e}}_clone(){return new Ze(this.width,this.height,this.buffer.slice())}_inline_rowScale_preMultiply(t,e){for(let i=0;i<this.width;i++){const n=this.cell(i,t).times(e),o=2*(t*this.width+i);this.buffer[o]=n.real,this.buffer[o+1]=n.imag}}isDiagonal(t=0){for(let e=0;e<this.width;e++)for(let i=0;i<this.height;i++){if(i===e)continue;const n=2*(this.width*i+e),o=Math.abs(this.buffer[n]),r=Math.abs(this.buffer[n+1]),s=Math.max(o,r);if(isNaN(s)||s>t)return!1}return this.width===this.height}trace(){let t=0,e=0;const i=2*this.width+2;for(let n=0;n<this.buffer.length;n+=i)t+=this.buffer[n],e+=this.buffer[n+1];return new k(t,e)}qubitDensityMatrixToBlochVector(){if(2!==this.width||2!==this.height)throw new z("Need a 2x2 density matrix.",this);if(!this.isApproximatelyHermitian(.01))throw new z("Density matrix should be Hermitian.",this);if(!this.trace().isApproximatelyEqualTo(1,.01))throw new z("Density matrix should have unit trace.",this);const[t,e,i,n,o,r,s,a]=this.buffer;return[o+i,r-n,t-s]}qubitDensityMatrix(t){const e=[...Array(Math.log2(this.height)).keys()].filter((e=>e!==t)),i=(t,e)=>e.sort().reverse().reduce(((t,e)=>{let i=t>>e+1;i<<=e;return i|(1<<e)-1&t}),t);let n=Ze.zero(2,2);for(let t=0;t<this.height;t++)for(let o=0;o<this.height;o++){if(!e.every((e=>(t>>e&1)==(o>>e&1))))continue;const r=this.cell(0,o).times(this.cell(0,t).conjugate());if(r.isEqualTo(0))continue;const s=0===i(o,e)?Ze.col(1,0):Ze.col(0,1),a=0===i(t,e)?Ze.row(1,0):Ze.row(0,1),c=s.times(a);n=n.plus(c.times(r))}return n}static fromAngleAxisPhaseRotation(t,e,i){const[n,o,r]=e;q.need(Math.abs(n*n+o*o+r*r-1)<1e-6,"Not a unit axis.");const s=Ze.PAULI_X.times(n).plus(Ze.PAULI_Y.times(o)).plus(Ze.PAULI_Z.times(r)),[a,c]=q.snappedCosSin(-t/2);return Ze.identity(2).times(a).plus(s.times(new k(0,c))).times(k.polar(1,i))}qubitOperationToAngleAxisRotation(){q.need(2===this.width&&2===this.height,"Need a 2x2 matrix."),q.need(this.isUnitary(.01),"Need a unitary matrix.");const[t,e,i,n]=this._2x2Breakdown(),o=t.plus(n),r=e.plus(i).dividedBy(k.I),s=e.minus(i),a=t.minus(n).dividedBy(k.I);let c=_([o,r,s,a]).maxBy((t=>t.abs())).unit().times(2);const l=Math.min(1,Math.max(-1,o.dividedBy(c).real));let d=r.dividedBy(c).real,u=s.dividedBy(c).real,p=a.dividedBy(c).real,h=-2*Math.acos(l);const f=Math.sqrt(d*d+u*u+p*p);return f<1e-7?{axis:[1,0,0],angle:0,phase:c.phase()}:(d/=f,u/=f,p/=f,h<=-Math.PI&&(h+=2*Math.PI,c=c.times(-1)),d+u+p<0&&(d=-d,u=-u,p=-p,h=-h),{axis:[d,u,p],angle:h,phase:c.phase()})}isUpperTriangular(t=0){for(let e=0;e<this.height;e++)for(let i=0;i<e&&i<this.width;i++){const n=2*(e*this.width+i),o=this.buffer[n],r=this.buffer[n+1];if(isNaN(o)||isNaN(r)||o*o+r*r>t*t)return!1}return!0}isLowerTriangular(t=0){for(let e=0;e<this.height;e++)for(let i=e+1;i<this.width;i++){const n=2*(e*this.width+i),o=this.buffer[n],r=this.buffer[n+1];if(isNaN(o)||isNaN(r)||o*o+r*r>t*t)return!1}return!0}}Ze.H=Ze.square(1,1,1,-1).times(Math.sqrt(.5)),Ze.PAULI_X=Ze.square(0,1,1,0),Ze.PAULI_Y=Ze.square(0,new k(0,-1),k.I,0),Ze.PAULI_Z=Ze.square(1,0,0,-1);const Ke=t=>"object"==typeof t&&null!==t&&"PHASE-GATE"===t.tagName,ti=t=>"object"==typeof t&&null!==t&&("RX-GATE"===t.tagName||"RY-GATE"===t.tagName||"RZ-GATE"===t.tagName),ei=t=>"object"==typeof t&&null!==t&&("H-GATE"===t.tagName||"X-GATE"===t.tagName||"RNOT-GATE"===t.tagName),ii=t=>"object"==typeof t&&null!==t&&"MEASUREMENT-GATE"===t.tagName;class ni{show(t){if(Be.isMobile())return;const e=this;this.popup=Ie(t,{allowHTML:!0,animation:!1,appendTo:document.body,arrow:te+te,content:this.popupHtml(t),delay:0,hideOnClick:!1,interactive:!0,theme:"qni",onShow(t){let i;const n=t.reference;if(ii(n))e.input.value=n.flag;else if(ei(n))e.input.value=n.if;else if(Ke(n)||ti(n)){Ke(n)?i=n.phi:ti(n)&&(i=n.theta),e.input.value=i.replace(/π/g,"pi");const t=k.from(O(i.replace(/π/g,"pi"),P)).real;e.currentAngleDenominator=e.angleDenominator(i),e.currentAngle=e.snappedAngle(t),e.createAngleSlider(n)}e.input.addEventListener("keydown",e.inputKeydown.bind(e))},onHide(){if(e.isAngleSliderActive())return!1},onHidden(t){const i=t.reference;(Ke(i)||ti(i))&&(e.reduceInstructionAngle(i),e.destroyAngleSlider()),i.dispatchEvent(new Event("operation.update",{bubbles:!0})),t.destroy()}}),this.popup.show()}updateInstructionAngle(t,e){const i=e.replace(/pi/g,"π");this.input.value=e,Ke(t)?t.phi=i:t.theta=i}reduceInstructionAngle(t){if(Ke(t)){const e=this.beautifyFraction(t.phi.replace(/π/g,"pi"),!0);t.phi=e.replace(/pi/g,"π")}else{const e=this.beautifyFraction(t.theta.replace(/π/g,"pi"),!0);t.theta=e.replace(/pi/g,"π")}}snappedAngle(t){q.notNull(this.currentAngleDenominator);const e=Math.PI/this.currentAngleDenominator,i=Math.round(t/e);return this.beautifyFraction(`${i}pi/${this.currentAngleDenominator}`)}beautifyFraction(t,e=!1){let i;Je.REDUCE=e;const n=new Je(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")),o=n.valueOf(),r=n.d;if(0===o)i="0";else if(o>2)i=1===r?"2pi":`${2*r}pi/${r}`;else if(o<-2)i=1===r?"-2pi":`-${2*r}pi/${r}`;else{const t=n.n,e=-1===n.s?"-":"",o=1===t?`${e}pi`:`${e}${t}pi`;i=1===r?`${o}`:`${o}/${r}`}return i}popupHtml(t){let e=null;ii(t)?e="flag":Ke(t)?e="phi":ti(t)?e="theta":ei(t)&&(e="if"),q.notNull(e);const i=document.getElementById(`gate-popup--${e}`);return q.notNull(i),i.innerHTML}get input(){q.notNull(this.popup);const t=this.popup.popper.getElementsByTagName("input").item(0);return q.notNull(t),t}inputKeydown(t){var e;if("Enter"===t.key){q.notNull(this.popup),this.popup.popper.classList.remove("gate-popup--error");const t=this.input.value;try{const i=this.popupReferenceEl;if(ii(i))this.flag=t;else if(ei(i))this.if=t;else{q.notNull(this.currentAngle),q.notNull(this.currentAngleDenominator);let n=t;if(this.angleNumerator(this.currentAngle)===this.angleNumerator(t)&&this.currentAngleDenominator!==this.angleDenominator(t)){const e=this.angleDenominator(t)/this.currentAngleDenominator;n=`${Math.round(e*this.angleNumerator(this.currentAngle))}pi/${this.angleDenominator(t)}`}this.currentAngleDenominator=this.angleDenominator(t),null===(e=this.angleSliderEl.noUiSlider)||void 0===e||e.set(this.radian(n)),Ke(i)?i.phi=this.beautifyFraction(n,!1).replace(/pi/g,"π"):ti(i)&&(i.theta=this.beautifyFraction(n,!1).replace(/pi/g,"π"))}this.runCircuit()}catch(t){q.notNull(this.popup),this.popup.popper.classList.add("gate-popup--error")}}}set flag(t){const e=this.popupReferenceEl;t&&0!==t.trim().length?e.flag=t:e.flag=""}set if(t){const e=this.popupReferenceEl;t&&0!==t.trim().length?ei(e)&&(e.if=t):ei(e)&&(e.if="",e.disabled=!1)}runCircuit(){this.popupReferenceEl.dispatchEvent(new Event("operation.popup.change",{bubbles:!0}))}get popupReferenceEl(){return q.notNull(this.popup),this.popup.reference}get editorElement(){const t=this.popupReferenceEl.closest(".editor");return q.notNull(t),t}get angleSliderEl(){var t;const e=null===(t=this.popup)||void 0===t?void 0:t.popper.getElementsByClassName("angle-slider").item(0);return q.notNull(e),e}createAngleSlider(t){const e=this.angleSliderEl;let i;i=Ke(t)?t.phi:t.theta;const n=k.from(O(i.replace(/π/g,"pi"),P)).real;I.create(e,{range:{min:-2*Math.PI,max:2*Math.PI},start:n,pips:{mode:j.Positions,values:[0,25,50,75,100],filter:t=>0===t?1:t%Math.PI?-1:1,format:{to:t=>{const e=t/Math.PI;return 0===e?"0":-1===e?"-π":1===e?"π":`${e}π`}}},cssPrefix:"angle-slider-"}),e.classList.remove("hidden");e.noUiSlider.on("update",(e=>{const i=this.snappedAngle(e[0]);this.currentAngle!==i&&(this.currentAngle=i,this.updateInstructionAngle(t,i),t.dispatchEvent(new Event("operation.popup.change",{bubbles:!0})))}))}destroyAngleSlider(){var t;null===(t=this.angleSliderEl.noUiSlider)||void 0===t||t.destroy()}isAngleSliderActive(){var t;return null!==(null===(t=this.popup)||void 0===t?void 0:t.popper.getElementsByClassName("angle-slider-active").item(0))}radian(t){return new Je(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).valueOf()*Math.PI}angleNumerator(t){Je.REDUCE=!1;const e=new Je(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1"));return e.s*e.n}angleDenominator(t){Je.REDUCE=!1;return new Je(t.replace(/π/g,"pi").replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).d}}function oi(t){return class extends t{showRightClickPopup(t){if(2!==t.button&&!t.ctrlKey)return;(new ni).show(this)}}}function ri(t){return class extends t{set controls(t){this.setAttribute("data-controls",t.sort().join())}get controls(){const t=this.getAttribute("data-controls");return null===t||""===t?[]:t.split(",").map((t=>parseInt(t))).sort()}}}function*si(t){let e="",i=0,n=!1;for(let o=0;o<t.length;o+=1)"{"!==t[o]||"{"!==t[o+1]||"\\"===t[o-1]||n?"}"===t[o]&&"}"===t[o+1]&&"\\"!==t[o-1]&&n&&(n=!1,yield{type:"part",start:i,end:o+2,value:e.slice(2).trim()},e="",o+=2,i=o):(n=!0,e&&(yield{type:"string",start:i,end:o,value:e}),e="{{",i=o,o+=2),e+=t[o]||"";e&&(yield{type:"string",start:i,end:t.length,value:e})}var ai,ci,li=window&&window.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},di=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class ui{constructor(t,e){this.expression=e,ai.set(this,void 0),ci.set(this,""),li(this,ai,t),di(this,ai).updateParent("")}get attributeName(){return di(this,ai).attr.name}get attributeNamespace(){return di(this,ai).attr.namespaceURI}get value(){return di(this,ci)}set value(t){li(this,ci,t||""),di(this,ai).updateParent(t)}get element(){return di(this,ai).element}get booleanValue(){return di(this,ai).booleanValue}set booleanValue(t){di(this,ai).booleanValue=t}}ai=new WeakMap,ci=new WeakMap;class pi{constructor(t,e){this.element=t,this.attr=e,this.partList=[]}get booleanValue(){return this.element.hasAttributeNS(this.attr.namespaceURI,this.attr.name)}set booleanValue(t){if(1!==this.partList.length)throw new DOMException("Operation not supported","NotSupportedError");this.partList[0].value=t?"":null}append(t){this.partList.push(t)}updateParent(t){if(1===this.partList.length&&null===t)this.element.removeAttributeNS(this.attr.namespaceURI,this.attr.name);else{const t=this.partList.map((t=>"string"==typeof t?t:t.value)).join("");this.element.setAttributeNS(this.attr.namespaceURI,this.attr.name,t)}}}var hi,fi=window&&window.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},mi=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class gi{constructor(t,e){this.expression=e,hi.set(this,void 0),fi(this,hi,[t]),t.textContent=""}get value(){return mi(this,hi).map((t=>t.textContent)).join("")}set value(t){this.replace(t)}get previousSibling(){return mi(this,hi)[0].previousSibling}get nextSibling(){return mi(this,hi)[mi(this,hi).length-1].nextSibling}replace(...t){const e=t.map((t=>"string"==typeof t?new Text(t):t));e.length||e.push(new Text("")),mi(this,hi)[0].before(...e);for(const t of mi(this,hi))t.remove();fi(this,hi,e)}}function bi(t){return{createCallback(t,e,i){this.processCallback(t,e,i)},processCallback(e,i,n){var o;if("object"==typeof n&&n)for(const e of i)if(e.expression in n){const i=null!==(o=n[e.expression])&&void 0!==o?o:"";t(e,i)}}}}function vi(t,e){t.value=String(e)}hi=new WeakMap;const wi=bi(vi);var yi,xi,Ei=window&&window.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},Si=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class Ci extends DocumentFragment{constructor(t,e,i=wi){var n,o;super(),yi.set(this,void 0),xi.set(this,void 0),Object.getPrototypeOf(this!==Ci.prototype)&&Object.setPrototypeOf(this,Ci.prototype),this.appendChild(t.content.cloneNode(!0)),Ei(this,xi,Array.from(function*(t){const e=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let i;for(;i=e.nextNode();)if(i instanceof Element&&i.hasAttributes())for(let t=0;t<i.attributes.length;t+=1){const e=i.attributes.item(t);if(e&&e.value.includes("{{")){const t=new pi(i,e);for(const i of si(e.value))if("string"===i.type)t.append(i.value);else{const e=new ui(t,i.value);t.append(e),yield e}}}else if(i instanceof Text&&i.textContent&&i.textContent.includes("{{"))for(const t of si(i.textContent)){t.end<i.textContent.length&&i.splitText(t.end),"part"===t.type&&(yield new gi(i,t.value));break}}(this))),Ei(this,yi,i),null===(o=(n=Si(this,yi)).createCallback)||void 0===o||o.call(n,this,Si(this,xi),e)}update(t){Si(this,yi).processCallback(this,Si(this,xi),t)}}yi=new WeakMap,xi=new WeakMap;const zi=new WeakSet;function qi(t,e){return i=e,!!zi.has(i)&&(e(t),!0);var i}const Di=new WeakMap;class Mi{constructor(t,e){this.element=t,this.type=e,this.element.addEventListener(this.type,this),Di.get(this.element).set(this.type,this)}set(t){"function"==typeof t?this.handleEvent=t.bind(this.element):"object"==typeof t&&"function"==typeof t.handleEvent?this.handleEvent=t.handleEvent.bind(t):(this.element.removeEventListener(this.type,this),Di.get(this.element).delete(this.type))}static for(t){Di.has(t.element)||Di.set(t.element,new Map);const e=t.attributeName.slice(2),i=Di.get(t.element);return i.has(e)?i.get(e):new Mi(t.element,e)}}function Ai(t,e){if(!function(t){return"object"==typeof t&&Symbol.iterator in t}(e))return!1;if(t instanceof gi){const i=[];for(const t of e)if(t instanceof Ti){const e=document.createDocumentFragment();t.renderInto(e),i.push(...e.childNodes)}else t instanceof DocumentFragment?i.push(...t.childNodes):i.push(String(t));return i.length&&t.replace(...i),!0}return t.value=Array.from(e).join(" "),!0}const _i=new WeakMap,Oi=new WeakMap,ki=new WeakMap;class Ti{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i}get template(){if(_i.has(this.strings))return _i.get(this.strings);{const t=document.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce(((t,i,n)=>t+i+(n<e?`{{ ${n} }}`:"")),""),_i.set(this.strings,t),t}}renderInto(t){const e=this.template;if(Oi.get(t)!==e){Oi.set(t,e);const i=new Ci(e,this.values,this.processor);return ki.set(t,i),void(t instanceof gi?t.replace(...i.children):t.appendChild(i))}ki.get(t).update(this.values)}}const Pi=bi((function(t,e){qi(t,e)||function(t,e){return"boolean"==typeof e&&t instanceof ui&&"boolean"==typeof t.element[t.attributeName]&&(t.booleanValue=e,!0)}(t,e)||function(t,e){return!!(t instanceof ui&&t.attributeName.startsWith("on"))&&(Mi.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0)}(t,e)||function(t,e){return e instanceof Ti&&t instanceof gi&&(e.renderInto(t),!0)}(t,e)||function(t,e){return e instanceof DocumentFragment&&t instanceof gi&&(e.childNodes.length&&t.replace(...e.childNodes),!0)}(t,e)||Ai(t,e)||vi(t,e)}));function $i(t,...e){return new Ti(t,e,Pi)}function Li(t,e){t.renderInto(e)}function Ni(t){class n extends t{constructor(){super(...arguments),this.disabled=!1,this.iconType=""}disable(){this.disabled=!0}enable(){this.disabled=!1}get enabled(){return!this.disabled}get disabledStyle(){return $i`<style>
        :host([data-disabled]) #icon {
          background-color: var(--colors-eel, #4b4b4b);
        }
      </style>`}}return e([f,i("design:type",Object)],n.prototype,"disabled",void 0),e([f,i("design:type",Object)],n.prototype,"iconType",void 0),n}const Ri={init:function(t){const e=t;Ri.document=e.document,Ri.DocumentFragment=e.DocumentFragment||Ii,Ri.SVGElement=e.SVGElement||Ii,Ri.SVGSVGElement=e.SVGSVGElement||Ii,Ri.SVGElementInstance=e.SVGElementInstance||Ii,Ri.Element=e.Element||Ii,Ri.HTMLElement=e.HTMLElement||Ri.Element,Ri.Event=e.Event,Ri.Touch=e.Touch||Ii,Ri.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Ii(){}var ji=Ri;var Gi=t=>!(!t||!t.Window)&&t instanceof t.Window;let Bi,Fi;function Ui(t){Bi=t;const e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),Fi=t}function Hi(t){if(Gi(t))return t;return(t.ownerDocument||t).defaultView||Fi.window}"undefined"!=typeof window&&window&&Ui(window);const Vi=t=>!!t&&"object"==typeof t,Wi=t=>"function"==typeof t;var Xi={window:t=>t===Fi||Gi(t),docFrag:t=>Vi(t)&&11===t.nodeType,object:Vi,func:Wi,number:t=>"number"==typeof t,bool:t=>"boolean"==typeof t,string:t=>"string"==typeof t,element:t=>{if(!t||"object"!=typeof t)return!1;const e=Hi(t)||Fi;return/object|function/.test(typeof e.Element)?t instanceof e.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:t=>Vi(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString()),array:t=>Vi(t)&&void 0!==t.length&&Wi(t.splice)};const Qi={init:function(t){const e=ji.Element,i=t.navigator||{};Qi.supportsTouch="ontouchstart"in t||Xi.func(t.DocumentTouch)&&ji.document instanceof t.DocumentTouch,Qi.supportsPointerEvent=!1!==i.pointerEnabled&&!!ji.PointerEvent,Qi.isIOS=/iP(hone|od|ad)/.test(i.platform),Qi.isIOS7=/iP(hone|od|ad)/.test(i.platform)&&/OS 7[^\d]/.test(i.appVersion),Qi.isIe9=/MSIE 9/.test(i.userAgent),Qi.isOperaMobile="Opera"===i.appName&&Qi.supportsTouch&&/Presto/.test(i.userAgent),Qi.prefixedMatchesSelector="matches"in e.prototype?"matches":"webkitMatchesSelector"in e.prototype?"webkitMatchesSelector":"mozMatchesSelector"in e.prototype?"mozMatchesSelector":"oMatchesSelector"in e.prototype?"oMatchesSelector":"msMatchesSelector",Qi.pEventTypes=Qi.supportsPointerEvent?ji.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,Qi.wheelEvent=ji.document&&"onmousewheel"in ji.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var Yi=Qi;const Ji=(t,e)=>{for(const i of e)t.push(i);return t},Zi=t=>Ji([],t),Ki=(t,e)=>{for(let i=0;i<t.length;i++)if(e(t[i],i,t))return i;return-1},tn=(t,e)=>t[Ki(t,e)];function en(t){const e={};for(const i in t){const n=t[i];Xi.plainObject(n)?e[i]=en(n):Xi.array(n)?e[i]=Zi(n):e[i]=n}return e}function nn(t,e){for(const i in e)t[i]=e[i];return t}let on,rn,sn=0;var an={request:t=>on(t),cancel:t=>rn(t),init:function(t){if(on=t.requestAnimationFrame,rn=t.cancelAnimationFrame,!on){const e=["ms","moz","webkit","o"];for(const i of e)on=t[`${i}RequestAnimationFrame`],rn=t[`${i}CancelAnimationFrame`]||t[`${i}CancelRequestAnimationFrame`]}on=on&&on.bind(t),rn=rn&&rn.bind(t),on||(on=e=>{const i=Date.now(),n=Math.max(0,16-(i-sn)),o=t.setTimeout((()=>{e(i+n)}),n);return sn=i+n,o},rn=t=>clearTimeout(t))}};function cn(t,e,i){if(i=i||{},Xi.string(t)&&-1!==t.search(" ")&&(t=ln(t)),Xi.array(t))return t.reduce(((t,n)=>nn(t,cn(n,e,i))),i);if(Xi.object(t)&&(e=t,t=""),Xi.func(e))i[t]=i[t]||[],i[t].push(e);else if(Xi.array(e))for(const n of e)cn(t,n,i);else if(Xi.object(e))for(const n in e){cn(ln(n).map((e=>`${t}${e}`)),e[n],i)}return i}function ln(t){return t.trim().split(/ +/)}function dn(t,e){for(const i of e){if(t.immediatePropagationStopped)break;i(t)}}class un{constructor(t){this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=nn({},t||{})}fire(t){let e;const i=this.global;(e=this.types[t.type])&&dn(t,e),!t.propagationStopped&&i&&(e=i[t.type])&&dn(t,e)}on(t,e){const i=cn(t,e);for(t in i)this.types[t]=Ji(this.types[t]||[],i[t])}off(t,e){const i=cn(t,e);for(t in i){const e=this.types[t];if(e&&e.length)for(const n of i[t]){const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}}getRect(t){return null}}function pn(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function hn(t,e){for(;Xi.element(t);){if(mn(t,e))return t;t=fn(t)}return null}function fn(t){let e=t.parentNode;if(Xi.docFrag(e)){for(;(e=e.host)&&Xi.docFrag(e););return e}return e}function mn(t,e){return Fi!==Bi&&(e=e.replace(/\/deep\//g," ")),t[Yi.prefixedMatchesSelector](e)}const gn=t=>t.parentNode||t.host;function bn(t,e){const i=[];let n,o=t;for(;(n=gn(o))&&o!==e&&n!==o.ownerDocument;)i.unshift(o),o=n;return i}function vn(t,e){return(parseInt(Hi(t).getComputedStyle(t).zIndex,10)||0)>=(parseInt(Hi(e).getComputedStyle(e).zIndex,10)||0)}function wn(t,e,i){for(;Xi.element(t);){if(mn(t,e))return!0;if((t=fn(t))===i)return mn(t,e)}return!1}function yn(t){return t.correspondingUseElement||t}function xn(t){const e=t instanceof ji.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}function En(t){const e=xn(t);if(!Yi.isIOS7&&e){const n={x:(i=(i=Hi(t))||Fi).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};e.left+=n.x,e.right+=n.x,e.top+=n.y,e.bottom+=n.y}var i;return e}function Sn(t){return!!Xi.string(t)&&(ji.document.querySelector(t),!0)}function Cn(t,e,i,n){let o=t;return Xi.string(o)?o=function(t,e,i){return"parent"===t?fn(i):"self"===t?e.getRect(i):hn(i,t)}(o,e,i):Xi.func(o)&&(o=o(...n)),Xi.element(o)&&(o=En(o)),o}function zn(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}}function qn(t){return!t||"x"in t&&"y"in t||((t=nn({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y),t}function Dn(t,e,i){t.left&&(e.left+=i.x),t.right&&(e.right+=i.x),t.top&&(e.top+=i.y),t.bottom&&(e.bottom+=i.y),e.width=e.right-e.left,e.height=e.bottom-e.top}function Mn(t,e,i){const n=t.options[i];return zn(Cn(n&&n.origin||t.options.origin,t,e,[t&&e]))||{x:0,y:0}}var An=(t,e)=>Math.sqrt(t*t+e*e);class _n{constructor(t){this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=t}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}Object.defineProperty(_n.prototype,"interaction",{get(){return this._interaction._proxy},set(){}});const On={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};class kn extends _n{constructor(t,e,i,n,o,r,s){super(t),this.target=void 0,this.currentTarget=void 0,this.relatedTarget=null,this.screenX=void 0,this.screenY=void 0,this.button=void 0,this.buttons=void 0,this.ctrlKey=void 0,this.shiftKey=void 0,this.altKey=void 0,this.metaKey=void 0,this.page=void 0,this.client=void 0,this.delta=void 0,this.rect=void 0,this.x0=void 0,this.y0=void 0,this.t0=void 0,this.dt=void 0,this.duration=void 0,this.clientX0=void 0,this.clientY0=void 0,this.velocity=void 0,this.speed=void 0,this.swipe=void 0,this.timeStamp=void 0,this.axes=void 0,this.preEnd=void 0,o=o||t.element;const a=t.interactable,c=(a&&a.options||On).deltaSource,l=Mn(a,o,i),d="start"===n,u="end"===n,p=d?this:t.prevEvent,h=d?t.coords.start:u?{page:p.page,client:p.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;this.page=nn({},h.page),this.client=nn({},h.client),this.rect=nn({},t.rect),this.timeStamp=h.timeStamp,u||(this.page.x-=l.x,this.page.y-=l.y,this.client.x-=l.x,this.client.y-=l.y),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.button=e.button,this.buttons=e.buttons,this.target=o,this.currentTarget=o,this.preEnd=r,this.type=s||i+(n||""),this.interactable=a,this.t0=d?t.pointers[t.pointers.length-1].downTime:p.t0,this.x0=t.coords.start.page.x-l.x,this.y0=t.coords.start.page.y-l.y,this.clientX0=t.coords.start.client.x-l.x,this.clientY0=t.coords.start.client.y-l.y,this.delta=d||u?{x:0,y:0}:{x:this[c].x-p[c].x,y:this[c].y-p[c].y},this.dt=t.coords.delta.timeStamp,this.duration=this.timeStamp-this.t0,this.velocity=nn({},t.coords.velocity[c]),this.speed=An(this.velocity.x,this.velocity.y),this.swipe=u||"inertiastart"===n?this.getSwipe():null}getSwipe(){const t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;let e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);const i=112.5<=e&&e<247.5,n=202.5<=e&&e<337.5;return{up:n,down:!n&&22.5<=e&&e<157.5,left:i,right:!i&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}preventDefault(){}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}stopPropagation(){this.propagationStopped=!0}}function Tn(t,e){let i=!1;return function(){return i||(Fi.console.warn(e),i=!0),t.apply(this,arguments)}}function Pn(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t}function $n(t,e){for(const i in e){const n=$n.prefixedPropREs;let o=!1;for(const t in n)if(0===i.indexOf(t)&&n[t].test(i)){o=!0;break}o||"function"==typeof e[i]||(t[i]=e[i])}return t}function Ln(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp}function Nn(t){return t instanceof ji.Event||t instanceof ji.Touch}function Rn(t,e,i){return t=t||"page",(i=i||{}).x=e[t+"X"],i.y=e[t+"Y"],i}function In(t,e){return e=e||{x:0,y:0},Yi.isOperaMobile&&Nn(t)?(Rn("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):Rn("page",t,e),e}function jn(t){return Xi.number(t.pointerId)?t.pointerId:t.identifier}function Gn(t,e,i){const n=e.length>1?Fn(e):e[0];In(n,t.page),function(t,e){e=e||{},Yi.isOperaMobile&&Nn(t)?Rn("screen",t,e):Rn("client",t,e)}(n,t.client),t.timeStamp=i}function Bn(t){const e=[];return Xi.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function Fn(t){const e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0};for(const i of t)for(const t in e)e[t]+=i[t];for(const i in e)e[i]/=t.length;return e}function Un(t){if(!t.length)return null;const e=Bn(t),i=Math.min(e[0].pageX,e[1].pageX),n=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),r=Math.max(e[0].pageY,e[1].pageY);return{x:i,y:n,left:i,top:n,right:o,bottom:r,width:o-i,height:r-n}}function Hn(t,e){const i=e+"X",n=e+"Y",o=Bn(t),r=o[0][i]-o[1][i],s=o[0][n]-o[1][n];return An(r,s)}function Vn(t,e){const i=e+"X",n=e+"Y",o=Bn(t),r=o[1][i]-o[0][i],s=o[1][n]-o[0][n];return 180*Math.atan2(s,r)/Math.PI}function Wn(t){const e=Xi.func(t.composedPath)?t.composedPath():t.path;return[yn(e?e[0]:t.target),yn(t.currentTarget)]}function Xn(t,e){if(e.phaselessTypes[t])return!0;for(const i in e.map)if(0===t.indexOf(i)&&t.substr(i.length)in e.phases)return!0;return!1}Object.defineProperties(kn.prototype,{pageX:{get(){return this.page.x},set(t){this.page.x=t}},pageY:{get(){return this.page.y},set(t){this.page.y=t}},clientX:{get(){return this.client.x},set(t){this.client.x=t}},clientY:{get(){return this.client.y},set(t){this.client.y=t}},dx:{get(){return this.delta.x},set(t){this.delta.x=t}},dy:{get(){return this.delta.y},set(t){this.delta.y=t}},velocityX:{get(){return this.velocity.x},set(t){this.velocity.x=t}},velocityY:{get(){return this.velocity.y},set(t){this.velocity.y=t}}}),$n.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};class Qn{constructor(t){this.list=[],this.selectorMap={},this.scope=void 0,this.scope=t,t.addListeners({"interactable:unset":({interactable:t})=>{const{target:e,_context:i}=t,n=Xi.string(e)?this.selectorMap[e]:e[this.scope.id],o=Ki(n,(t=>t.context===i));n[o]&&(n[o].context=null,n[o].interactable=null),n.splice(o,1)}})}new(t,e){e=nn(e||{},{actions:this.scope.actions});const i=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),n={context:i._context,interactable:i};return this.scope.addDocument(i._doc),this.list.push(i),Xi.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(n)):(i.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(n)),this.scope.fire("interactable:new",{target:t,options:e,interactable:i,win:this.scope._win}),i}get(t,e){const i=e&&e.context||this.scope.document,n=Xi.string(t),o=n?this.selectorMap[t]:t[this.scope.id];if(!o)return null;const r=tn(o,(e=>e.context===i&&(n||e.interactable.inContext(t))));return r&&r.interactable}forEachMatch(t,e){for(const i of this.list){let n;if((Xi.string(i.target)?Xi.element(t)&&mn(t,i.target):t===i.target)&&i.inContext(t)&&(n=e(i)),void 0!==n)return n}}}class Yn{constructor(t){this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=t,$n(this,t)}preventOriginalDefault(){this.originalEvent.preventDefault()}stopPropagation(){this.originalEvent.stopPropagation()}stopImmediatePropagation(){this.originalEvent.stopImmediatePropagation()}}function Jn(t){if(!Xi.object(t))return{capture:!!t,passive:!1};const e=nn({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var Zn={id:"events",install:function(t){var e;const i=[],n={},o=[],r={add:s,remove:a,addDelegate:function(t,e,i,r,a){const d=Jn(a);if(!n[i]){n[i]=[];for(const t of o)s(t,i,c),s(t,i,l,!0)}const u=n[i];let p=tn(u,(i=>i.selector===t&&i.context===e));p||(p={selector:t,context:e,listeners:[]},u.push(p));p.listeners.push([r,d])},removeDelegate:function(t,e,i,o,r){const s=Jn(r),d=n[i];let u,p=!1;if(!d)return;for(u=d.length-1;u>=0;u--){const n=d[u];if(n.selector===t&&n.context===e){const{listeners:t}=n;for(let n=t.length-1;n>=0;n--){const[r,{capture:h,passive:f}]=t[n];if(r===o&&h===s.capture&&f===s.passive){t.splice(n,1),t.length||(d.splice(u,1),a(e,i,c),a(e,i,l,!0)),p=!0;break}}if(p)break}}},delegateListener:c,delegateUseCapture:l,delegatedEvents:n,documents:o,targets:i,supportsOptions:!1,supportsPassive:!1};function s(t,e,n,o){const s=Jn(o);let a=tn(i,(e=>e.eventTarget===t));a||(a={eventTarget:t,events:{}},i.push(a)),a.events[e]||(a.events[e]=[]),t.addEventListener&&!((t,e)=>-1!==t.indexOf(e))(a.events[e],n)&&(t.addEventListener(e,n,r.supportsOptions?s:s.capture),a.events[e].push(n))}function a(t,e,n,o){const s=Jn(o),c=Ki(i,(e=>e.eventTarget===t)),l=i[c];if(!l||!l.events)return;if("all"===e){for(e in l.events)l.events.hasOwnProperty(e)&&a(t,e,"all");return}let d=!1;const u=l.events[e];if(u){if("all"===n){for(let i=u.length-1;i>=0;i--)a(t,e,u[i],s);return}for(let i=0;i<u.length;i++)if(u[i]===n){t.removeEventListener(e,n,r.supportsOptions?s:s.capture),u.splice(i,1),0===u.length&&(delete l.events[e],d=!0);break}}d&&!Object.keys(l.events).length&&i.splice(c,1)}function c(t,e){const i=Jn(e),o=new Yn(t),r=n[t.type],[s]=Wn(t);let a=s;for(;Xi.element(a);){for(let t=0;t<r.length;t++){const e=r[t],{selector:n,context:c}=e;if(mn(a,n)&&pn(c,s)&&pn(c,a)){const{listeners:t}=e;o.currentTarget=a;for(const[e,{capture:n,passive:r}]of t)n===i.capture&&r===i.passive&&e(o)}}a=fn(a)}}function l(t){return c.call(this,t,!0)}return null==(e=t.document)||e.createElement("div").addEventListener("test",null,{get capture(){return r.supportsOptions=!0},get passive(){return r.supportsPassive=!0}}),t.events=r,r}};class Kn{constructor(t,e,i,n,o){this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=t,this.pointer=e,this.event=i,this.downTime=n,this.downTarget=o}}let to,eo;!function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(to||(to={})),function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(eo||(eo={}));let io=0;var no=class{get pointerMoveTolerance(){return 1}constructor({pointerType:t,scopeFire:e}){this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=Tn((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=io++,this._scopeFire=e,this.pointerType=t;const i=this;this._proxy={};for(const t in to)Object.defineProperty(this._proxy,t,{get:()=>i[t]});for(const t in eo)Object.defineProperty(this._proxy,t,{value:(...e)=>i[t](...e)});this._scopeFire("interactions:new",{interaction:this})}pointerDown(t,e,i){const n=this.updatePointer(t,e,i,!0),o=this.pointers[n];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:i,pointerIndex:n,pointerInfo:o,type:"down",interaction:this})}start(t,e,i){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&(Pn(this.prepared,t),this.interactable=e,this.element=i,this.rect=e.getRect(i),this.edges=this.prepared.edges?nn({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}pointerMove(t,e,i){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,i,!1);const n=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;let o,r;this.pointerIsDown&&!this.pointerWasMoved&&(o=this.coords.cur.client.x-this.coords.start.client.x,r=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=An(o,r)>this.pointerMoveTolerance);const s=this.getPointerIndex(t),a={pointer:t,pointerIndex:s,pointerInfo:this.pointers[s],event:e,type:"move",eventTarget:i,dx:o,dy:r,duplicate:n,interaction:this};n||function(t,e){const i=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/i,t.page.y=e.page.y/i,t.client.x=e.client.x/i,t.client.y=e.client.y/i,t.timeStamp=i}(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",a),n||this.simulation||(this.interacting()&&(a.type=null,this.move(a)),this.pointerWasMoved&&Ln(this.coords.prev,this.coords.cur))}move(t){var e;t&&t.event||((e=this.coords.delta).page.x=0,e.page.y=0,e.client.x=0,e.client.y=0),(t=nn({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}pointerUp(t,e,i,n){let o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,i,!1));const r=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire(`interactions:${r}`,{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:i,type:r,curEventTarget:n,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}documentBlur(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}end(t){let e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}currentAction(){return this._interacting?this.prepared.name:null}interacting(){return this._interacting}stop(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}getPointerIndex(t){const e=jn(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:Ki(this.pointers,(t=>t.id===e))}getPointerInfo(t){return this.pointers[this.getPointerIndex(t)]}updatePointer(t,e,i,n){const o=jn(t);let r=this.getPointerIndex(t),s=this.pointers[r];var a,c,l;return n=!1!==n&&(n||/(down|start)$/i.test(e.type)),s?s.pointer=t:(s=new Kn(o,t,e,null,null),r=this.pointers.length,this.pointers.push(s)),Gn(this.coords.cur,this.pointers.map((t=>t.pointer)),this._now()),a=this.coords.delta,c=this.coords.prev,l=this.coords.cur,a.page.x=l.page.x-c.page.x,a.page.y=l.page.y-c.page.y,a.client.x=l.client.x-c.client.x,a.client.y=l.client.y-c.client.y,a.timeStamp=l.timeStamp-c.timeStamp,n&&(this.pointerIsDown=!0,s.downTime=this.coords.cur.timeStamp,s.downTarget=i,$n(this.downPointer,t),this.interacting()||(Ln(this.coords.start,this.coords.cur),Ln(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,i),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:i,down:n,pointerInfo:s,pointerIndex:r,interaction:this}),r}removePointer(t,e){const i=this.getPointerIndex(t);if(-1===i)return;const n=this.pointers[i];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:i,pointerInfo:n,interaction:this}),this.pointers.splice(i,1),this.pointerIsDown=!1}_updateLatestPointer(t,e,i){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=i}destroy(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}_createPreparedEvent(t,e,i,n){return new kn(this,t,this.prepared.name,e,this.element,i,n)}_fireEvent(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}_doPhase(t){const{event:e,phase:i,preEnd:n,type:o}=t,{rect:r}=this;r&&"move"===i&&(Dn(this.edges,r,this.coords.delta[this.interactable.options.deltaSource]),r.width=r.right-r.left,r.height=r.bottom-r.top);if(!1===this._scopeFire(`interactions:before-action-${i}`,t))return!1;const s=t.iEvent=this._createPreparedEvent(e,i,n,o);return this._scopeFire(`interactions:action-${i}`,t),"start"===i&&(this.prevEvent=s),this._fireEvent(s),this._scopeFire(`interactions:after-action-${i}`,t),!0}_now(){return Date.now()}};function oo(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):Xi.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function ro({interaction:t,event:e}){t.interactable&&t.interactable.checkAndPreventDefault(e)}var so={id:"core/interactablePreventDefault",install:function(t){const{Interactable:e}=t;e.prototype.preventDefault=oo,e.prototype.checkAndPreventDefault=function(e){return function(t,e,i){const n=t.options.preventDefault;if("never"!==n)if("always"!==n){if(e.events.supportsPassive&&/^touch(start|move)$/.test(i.type)){const t=Hi(i.target).document,n=e.getDocOptions(t);if(!n||!n.events||!1!==n.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(i.type)||Xi.element(i.target)&&mn(i.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||i.preventDefault()}else i.preventDefault()}(this,t,e)},t.interactions.docEvents.push({type:"dragstart",listener(e){for(const i of t.interactions.list)if(i.element&&(i.element===e.target||pn(i.element,e.target)))return void i.interactable.checkAndPreventDefault(e)}})},listeners:["down","move","up","cancel"].reduce(((t,e)=>(t[`interactions:${e}`]=ro,t)),{})};const ao={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search(t){for(const e of ao.methodOrder){const i=ao[e](t);if(i)return i}return null},simulationResume({pointerType:t,eventType:e,eventTarget:i,scope:n}){if(!/down|start/i.test(e))return null;for(const e of n.interactions.list){let n=i;if(e.simulation&&e.simulation.allowResume&&e.pointerType===t)for(;n;){if(n===e.element)return e;n=fn(n)}}return null},mouseOrPen({pointerId:t,pointerType:e,eventType:i,scope:n}){if("mouse"!==e&&"pen"!==e)return null;let o;for(const i of n.interactions.list)if(i.pointerType===e){if(i.simulation&&!co(i,t))continue;if(i.interacting())return i;o||(o=i)}if(o)return o;for(const t of n.interactions.list)if(!(t.pointerType!==e||/down/i.test(i)&&t.simulation))return t;return null},hasPointer({pointerId:t,scope:e}){for(const i of e.interactions.list)if(co(i,t))return i;return null},idle({pointerType:t,scope:e}){for(const i of e.interactions.list){if(1===i.pointers.length){const t=i.interactable;if(t&&(!t.options.gesture||!t.options.gesture.enabled))continue}else if(i.pointers.length>=2)continue;if(!i.interacting()&&t===i.pointerType)return i}return null}};function co(t,e){return t.pointers.some((({id:t})=>t===e))}var lo=ao;const uo=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function po(t,e){return function(i){const n=e.interactions.list,o=(r=i,Xi.string(r.pointerType)?r.pointerType:Xi.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof ji.Touch?"touch":"mouse");var r;const[s,a]=Wn(i),c=[];if(/^touch/.test(i.type)){e.prevTouchTime=e.now();for(const t of i.changedTouches){const n={pointer:t,pointerId:jn(t),pointerType:o,eventType:i.type,eventTarget:s,curEventTarget:a,scope:e},r=ho(n);c.push([n.pointer,n.eventTarget,n.curEventTarget,r])}}else{let t=!1;if(!Yi.supportsPointerEvent&&/mouse/.test(i.type)){for(let e=0;e<n.length&&!t;e++)t="mouse"!==n[e].pointerType&&n[e].pointerIsDown;t=t||e.now()-e.prevTouchTime<500||0===i.timeStamp}if(!t){const t={pointer:i,pointerId:jn(i),pointerType:o,eventType:i.type,curEventTarget:a,eventTarget:s,scope:e},n=ho(t);c.push([t.pointer,t.eventTarget,t.curEventTarget,n])}}for(const[e,n,o,r]of c)r[t](e,i,n,o)}}function ho(t){const{pointerType:e,scope:i}=t,n={interaction:lo.search(t),searchDetails:t};return i.fire("interactions:find",n),n.interaction||i.interactions.new({pointerType:e})}function fo({doc:t,scope:e,options:i},n){const{interactions:{docEvents:o},events:r}=e,s=r[n];e.browser.isIOS&&!i.events&&(i.events={passive:!1});for(const e in r.delegatedEvents)s(t,e,r.delegateListener),s(t,e,r.delegateUseCapture,!0);const a=i&&i.events;for(const{type:e,listener:i}of o)s(t,e,i,a)}const mo={id:"core/interactions",install:function(t){const e={};for(const i of uo)e[i]=po(i,t);const i=Yi.pEventTypes;let n;function o(){for(const e of t.interactions.list)if(e.pointerIsDown&&"touch"===e.pointerType&&!e._interacting)for(const i of e.pointers)t.documents.some((({doc:t})=>pn(t,i.downTarget)))||e.removePointer(i.pointer,i.event)}n=ji.PointerEvent?[{type:i.down,listener:o},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:o},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}],n.push({type:"blur",listener(e){for(const i of t.interactions.list)i.documentBlur(e)}}),t.prevTouchTime=0,t.Interaction=class extends no{get pointerMoveTolerance(){return t.interactions.pointerMoveTolerance}set pointerMoveTolerance(e){t.interactions.pointerMoveTolerance=e}_now(){return t.now()}},t.interactions={list:[],new(e){e.scopeFire=(e,i)=>t.fire(e,i);const i=new t.Interaction(e);return t.interactions.list.push(i),i},listeners:e,docEvents:n,pointerMoveTolerance:1},t.usePlugin(so)},listeners:{"scope:add-document":t=>fo(t,"add"),"scope:remove-document":t=>fo(t,"remove"),"interactable:unset":({interactable:t},e)=>{for(let i=e.interactions.list.length-1;i>=0;i--){const n=e.interactions.list[i];n.interactable===t&&(n.stop(),e.fire("interactions:destroy",{interaction:n}),n.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(i,1))}}},onDocSignal:fo,doOnInteractions:po,methodNames:uo};var go=mo;function bo(t){return t&&t.replace(/\/.*$/,"")}const vo=new class{constructor(){this.id=`__interact_scope_${Math.floor(100*Math.random())}`,this.isInitialized=!1,this.listenerMaps=[],this.browser=Yi,this.defaults=en(On),this.Eventable=un,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=function(t){const e=(i,n)=>{let o=t.interactables.get(i,n);return o||(o=t.interactables.new(i,n),o.events.global=e.globalEvents),o};return e.getPointerAverage=Fn,e.getTouchBBox=Un,e.getTouchDistance=Hn,e.getTouchAngle=Vn,e.getElementRect=En,e.getElementClientRect=xn,e.matchesSelector=mn,e.closest=hn,e.globalEvents={},e.version="1.10.11",e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=Tn((function(t,e,i){if(Xi.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),Xi.array(t)){for(const n of t)this.on(n,e,i);return this}if(Xi.object(t)){for(const i in t)this.on(i,t[i],e);return this}return Xn(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:i}),this}),"The interact.on() method is being deprecated"),e.off=Tn((function(t,e,i){if(Xi.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),Xi.array(t)){for(const n of t)this.off(n,e,i);return this}if(Xi.object(t)){for(const i in t)this.off(i,t[i],e);return this}if(Xn(t,this.scope.actions)){let i;t in this.globalEvents&&-1!==(i=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(i,1)}else this.scope.events.remove(this.scope.document,t,e,i);return this}),"The interact.off() method is being deprecated"),e.debug=function(){return this.scope},e.supportsTouch=function(){return Yi.supportsTouch},e.supportsPointerEvent=function(){return Yi.supportsPointerEvent},e.stop=function(){for(const t of this.scope.interactions.list)t.stop();return this},e.pointerMoveTolerance=function(t){return Xi.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e}(this),this.InteractEvent=kn,this.Interactable=void 0,this.interactables=new Qn(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=t=>this.removeDocument(t.target);const t=this;this.Interactable=class extends class{get _defaults(){return{base:{},perAction:{},actions:{}}}constructor(t,e,i,n){this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new un,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=e.actions,this.target=t,this._context=e.context||i,this._win=Hi(Sn(t)?this._context:t),this._doc=this._win.document,this._scopeEvents=n,this.set(e)}setOnEvents(t,e){return Xi.func(e.onstart)&&this.on(`${t}start`,e.onstart),Xi.func(e.onmove)&&this.on(`${t}move`,e.onmove),Xi.func(e.onend)&&this.on(`${t}end`,e.onend),Xi.func(e.oninertiastart)&&this.on(`${t}inertiastart`,e.oninertiastart),this}updatePerActionListeners(t,e,i){(Xi.array(e)||Xi.object(e))&&this.off(t,e),(Xi.array(i)||Xi.object(i))&&this.on(t,i)}setPerAction(t,e){const i=this._defaults;for(const n in e){const o=n,r=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,r.listeners,s),Xi.array(s)?r[o]=Zi(s):Xi.plainObject(s)?(r[o]=nn(r[o]||{},en(s)),Xi.object(i.perAction[o])&&"enabled"in i.perAction[o]&&(r[o].enabled=!1!==s.enabled)):Xi.bool(s)&&Xi.object(i.perAction[o])?r[o].enabled=s:r[o]=s}}getRect(t){return t=t||(Xi.element(this.target)?this.target:null),Xi.string(this.target)&&(t=t||this._context.querySelector(this.target)),En(t)}rectChecker(t){return Xi.func(t)?(this._rectChecker=t,this.getRect=t=>{const e=nn({},this._rectChecker(t));return"width"in e||(e.width=e.right-e.left,e.height=e.bottom-e.top),e},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}_backCompatOption(t,e){if(Sn(e)||Xi.object(e)){this.options[t]=e;for(const i in this._actions.map)this.options[i][t]=e;return this}return this.options[t]}origin(t){return this._backCompatOption("origin",t)}deltaSource(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}context(){return this._context}inContext(t){return this._context===t.ownerDocument||pn(this._context,t)}testIgnoreAllow(t,e,i){return!this.testIgnore(t.ignoreFrom,e,i)&&this.testAllow(t.allowFrom,e,i)}testAllow(t,e,i){return!t||!!Xi.element(i)&&(Xi.string(t)?wn(i,t,e):!!Xi.element(t)&&pn(t,i))}testIgnore(t,e,i){return!(!t||!Xi.element(i))&&(Xi.string(t)?wn(i,t,e):!!Xi.element(t)&&pn(t,i))}fire(t){return this.events.fire(t),this}_onOff(t,e,i,n){Xi.object(e)&&!Xi.array(e)&&(n=i,i=null);const o="on"===t?"add":"remove",r=cn(e,i);for(let e in r){"wheel"===e&&(e=Yi.wheelEvent);for(const i of r[e])Xn(e,this._actions)?this.events[t](e,i):Xi.string(this.target)?this._scopeEvents[`${o}Delegate`](this.target,this._context,e,i,n):this._scopeEvents[o](this.target,e,i,n)}return this}on(t,e,i){return this._onOff("on",t,e,i)}off(t,e,i){return this._onOff("off",t,e,i)}set(t){const e=this._defaults;Xi.object(t)||(t={}),this.options=en(e.base);for(const i in this._actions.methodDict){const n=i,o=this._actions.methodDict[n];this.options[n]={},this.setPerAction(n,nn(nn({},e.perAction),e.actions[n])),this[o](t[n])}for(const e in t)Xi.func(this[e])&&this[e](t[e]);return this}unset(){if(Xi.string(this.target))for(const t in this._scopeEvents.delegatedEvents){const e=this._scopeEvents.delegatedEvents[t];for(let i=e.length-1;i>=0;i--){const{selector:n,context:o,listeners:r}=e[i];n===this.target&&o===this._context&&e.splice(i,1);for(let e=r.length-1;e>=0;e--)this._scopeEvents.removeDelegate(this.target,this._context,t,r[e][0],r[e][1])}}else this._scopeEvents.remove(this.target,"all")}}{get _defaults(){return t.defaults}set(e){return super.set(e),t.fire("interactable:set",{options:e,interactable:this}),this}unset(){super.unset(),t.interactables.list.splice(t.interactables.list.indexOf(this),1),t.fire("interactable:unset",{interactable:this})}}}addListeners(t,e){this.listenerMaps.push({id:e,map:t})}fire(t,e){for(const{map:{[t]:i}}of this.listenerMaps)if(i&&!1===i(e,this,t))return!1}init(t){return this.isInitialized?this:function(t,e){t.isInitialized=!0,Xi.window(e)&&Ui(e);return ji.init(e),Yi.init(e),an.init(e),t.window=e,t.document=e.document,t.usePlugin(go),t.usePlugin(Zn),t}(this,t)}pluginIsInstalled(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}usePlugin(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){let e=0;const i=this.listenerMaps.length,n=t.before.reduce(((t,e)=>(t[e]=!0,t[bo(e)]=!0,t)),{});for(;e<i;e++){const t=this.listenerMaps[e].id;if(n[t]||n[bo(t)])break}this.listenerMaps.splice(e,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}addDocument(t,e){if(-1!==this.getDocIndex(t))return!1;const i=Hi(t);e=e?nn({},e):{},this.documents.push({doc:t,options:e}),this.events.documents.push(t),t!==this.document&&this.events.add(i,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:i,scope:this,options:e})}removeDocument(t){const e=this.getDocIndex(t),i=Hi(t),n=this.documents[e].options;this.events.remove(i,"unload",this.onWindowUnload),this.documents.splice(e,1),this.events.documents.splice(e,1),this.fire("scope:remove-document",{doc:t,window:i,scope:this,options:n})}getDocIndex(t){for(let e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}getDocOptions(t){const e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}now(){return(this.window.Date||Date).now()}};var wo=vo.interactStatic;const yo="undefined"!=typeof globalThis?globalThis:window;function xo({interaction:t}){if("drag"!==t.prepared.name)return;const e=t.prepared.axis;"x"===e?(t.coords.cur.page.y=t.coords.start.page.y,t.coords.cur.client.y=t.coords.start.client.y,t.coords.velocity.client.y=0,t.coords.velocity.page.y=0):"y"===e&&(t.coords.cur.page.x=t.coords.start.page.x,t.coords.cur.client.x=t.coords.start.client.x,t.coords.velocity.client.x=0,t.coords.velocity.page.x=0)}function Eo({iEvent:t,interaction:e}){if("drag"!==e.prepared.name)return;const i=e.prepared.axis;if("x"===i||"y"===i){const n="x"===i?"y":"x";t.page[n]=e.coords.start.page[n],t.client[n]=e.coords.start.client[n],t.delta[n]=0}}vo.init(yo);const So={id:"actions/drag",install:function(t){const{actions:e,Interactable:i,defaults:n}=t;i.prototype.draggable=So.draggable,e.map.drag=So,e.methodDict.drag="draggable",n.actions.drag=So.defaults},listeners:{"interactions:before-action-move":xo,"interactions:action-resume":xo,"interactions:action-move":Eo,"auto-start:check":t=>{const{interaction:e,interactable:i,buttons:n}=t,o=i.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(n&i.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return Xi.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):Xi.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:xo,move:Eo,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:()=>"move"};var Co=So;wo.use(Co);class zo extends _n{constructor(t,e,i){super(e._interaction),this.target=void 0,this.dropzone=void 0,this.dragEvent=void 0,this.relatedTarget=void 0,this.draggable=void 0,this.timeStamp=void 0,this.propagationStopped=!1,this.immediatePropagationStopped=!1;const{element:n,dropzone:o}="dragleave"===i?t.prev:t.cur;this.type=i,this.target=n,this.currentTarget=n,this.dropzone=o,this.dragEvent=e,this.relatedTarget=e.target,this.draggable=e.interactable,this.timeStamp=e.timeStamp}reject(){const{dropState:t}=this._interaction;if("dropactivate"===this.type||this.dropzone&&t.cur.dropzone===this.dropzone&&t.cur.element===this.target)if(t.prev.dropzone=this.dropzone,t.prev.element=this.target,t.rejected=!0,t.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){const e=t.activeDrops,i=Ki(e,(({dropzone:t,element:e})=>t===this.dropzone&&e===this.target));t.activeDrops.splice(i,1);const n=new zo(t,this.dragEvent,"dropdeactivate");n.dropzone=this.dropzone,n.target=this.target,this.dropzone.fire(n)}else this.dropzone.fire(new zo(t,this.dragEvent,"dragleave"))}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}function qo(t,e){for(const{dropzone:i,element:n}of t.slice())e.dropzone=i,e.target=n,i.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}function Do(t,e){const i=function({interactables:t},e){const i=[];for(const n of t.list){if(!n.options.drop.enabled)continue;const t=n.options.drop.accept;if(Xi.element(t)&&t!==e||Xi.string(t)&&!mn(e,t)||Xi.func(t)&&!t({dropzone:n,draggableElement:e}))continue;const o=Xi.string(n.target)?n._context.querySelectorAll(n.target):Xi.array(n.target)?n.target:[n.target];for(const t of o)t!==e&&i.push({dropzone:n,element:t,rect:n.getRect(t)})}return i}(t,e);for(const t of i)t.rect=t.dropzone.getRect(t.element);return i}function Mo({dropState:t,interactable:e,element:i},n,o){const r=[];for(const{dropzone:s,element:a,rect:c}of t.activeDrops)r.push(s.dropCheck(n,o,e,i,a,c)?a:null);const s=function(t){let e,i=[];for(let n=0;n<t.length;n++){const o=t[n],r=t[e];if(!o||n===e)continue;if(!r){e=n;continue}const s=gn(o),a=gn(r);if(s===o.ownerDocument)continue;if(a===o.ownerDocument){e=n;continue}if(s===a){vn(o,r)&&(e=n);continue}let c;if(i=i.length?i:bn(r),r instanceof ji.HTMLElement&&o instanceof ji.SVGElement&&!(o instanceof ji.SVGSVGElement)){if(o===a)continue;c=o.ownerSVGElement}else c=o;const l=bn(c,r.ownerDocument);let d=0;for(;l[d]&&l[d]===i[d];)d++;const u=[l[d-1],l[d],i[d]];if(u[0]){let t=u[0].lastChild;for(;t;){if(t===u[1]){e=n,i=l;break}if(t===u[2])break;t=t.previousSibling}}}return e}(r);return t.activeDrops[s]||null}function Ao(t,e,i){const{dropState:n}=t,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===i.type&&(o.activate=new zo(n,i,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===i.type&&(o.deactivate=new zo(n,i,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),n.rejected||(n.cur.element!==n.prev.element&&(n.prev.dropzone&&(o.leave=new zo(n,i,"dragleave"),i.dragLeave=o.leave.target=n.prev.element,i.prevDropzone=o.leave.dropzone=n.prev.dropzone),n.cur.dropzone&&(o.enter=new zo(n,i,"dragenter"),i.dragEnter=n.cur.element,i.dropzone=n.cur.dropzone)),"dragend"===i.type&&n.cur.dropzone&&(o.drop=new zo(n,i,"drop"),i.dropzone=n.cur.dropzone,i.relatedTarget=n.cur.element),"dragmove"===i.type&&n.cur.dropzone&&(o.move=new zo(n,i,"dropmove"),o.move.dragmove=i,i.dropzone=n.cur.dropzone)),o}function _o(t,e){const{dropState:i}=t,{activeDrops:n,cur:o,prev:r}=i;e.leave&&r.dropzone.fire(e.leave),e.enter&&o.dropzone.fire(e.enter),e.move&&o.dropzone.fire(e.move),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&qo(n,e.deactivate),i.prev.dropzone=o.dropzone,i.prev.element=o.element}function Oo({interaction:t,iEvent:e,event:i},n){if("dragmove"!==e.type&&"dragend"!==e.type)return;const{dropState:o}=t;n.dynamicDrop&&(o.activeDrops=Do(n,t.element));const r=e,s=Mo(t,r,i);o.rejected=o.rejected&&!!s&&s.dropzone===o.cur.dropzone&&s.element===o.cur.element,o.cur.dropzone=s&&s.dropzone,o.cur.element=s&&s.element,o.events=Ao(t,0,r)}const ko={id:"actions/drop",install:function(t){const{actions:e,interactStatic:i,Interactable:n,defaults:o}=t;t.usePlugin(Co),n.prototype.dropzone=function(t){return function(t,e){if(Xi.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){const i=cn(e.listeners),n=Object.keys(i).reduce(((t,e)=>(t[/^(enter|leave)/.test(e)?`drag${e}`:/^(activate|deactivate|move)/.test(e)?`drop${e}`:e]=i[e],t)),{});t.off(t.options.drop.listeners),t.on(n),t.options.drop.listeners=n}return Xi.func(e.ondrop)&&t.on("drop",e.ondrop),Xi.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),Xi.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),Xi.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),Xi.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),Xi.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:Xi.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(Xi.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},n.prototype.dropCheck=function(t,e,i,n,o,r){return function(t,e,i,n,o,r,s){let a=!1;if(!(s=s||t.getRect(r)))return!!t.options.drop.checker&&t.options.drop.checker(e,i,a,t,r,n,o);const c=t.options.drop.overlap;if("pointer"===c){const t=Mn(n,o,"drag"),i=In(e);i.x+=t.x,i.y+=t.y;const r=i.x>s.left&&i.x<s.right,c=i.y>s.top&&i.y<s.bottom;a=r&&c}const l=n.getRect(o);if(l&&"center"===c){const t=l.left+l.width/2,e=l.top+l.height/2;a=t>=s.left&&t<=s.right&&e>=s.top&&e<=s.bottom}if(l&&Xi.number(c)){a=Math.max(0,Math.min(s.right,l.right)-Math.max(s.left,l.left))*Math.max(0,Math.min(s.bottom,l.bottom)-Math.max(s.top,l.top))/(l.width*l.height)>=c}t.options.drop.checker&&(a=t.options.drop.checker(e,i,a,t,r,n,o));return a}(this,t,e,i,n,o,r)},i.dynamicDrop=function(e){return Xi.bool(e)?(t.dynamicDrop=e,i):t.dynamicDrop},nn(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=ko.defaults},listeners:{"interactions:before-action-start":({interaction:t})=>{"drag"===t.prepared.name&&(t.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":({interaction:t,event:e,iEvent:i},n)=>{if("drag"!==t.prepared.name)return;const{dropState:o}=t;o.activeDrops=null,o.events=null,o.activeDrops=Do(n,t.element),o.events=Ao(t,0,i),o.events.activate&&(qo(o.activeDrops,o.events.activate),n.fire("actions/drop:start",{interaction:t,dragEvent:i}))},"interactions:action-move":Oo,"interactions:after-action-move":({interaction:t,iEvent:e},i)=>{"drag"===t.prepared.name&&(_o(t,t.dropState.events),i.fire("actions/drop:move",{interaction:t,dragEvent:e}),t.dropState.events={})},"interactions:action-end":(t,e)=>{if("drag"!==t.interaction.prepared.name)return;const{interaction:i,iEvent:n}=t;Oo(t,e),_o(i,i.dropState.events),e.fire("actions/drop:end",{interaction:i,dragEvent:n})},"interactions:stop":({interaction:t})=>{if("drag"!==t.prepared.name)return;const{dropState:e}=t;e&&(e.activeDrops=null,e.events=null,e.cur.dropzone=null,e.cur.element=null,e.prev.dropzone=null,e.prev.element=null,e.rejected=!1)}},getActiveDrops:Do,getDrop:Mo,getDropEvents:Ao,fireDropEvents:_o,defaults:{enabled:!1,accept:null,overlap:"pointer"}};var To=ko;function Po(t){return Xi.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function $o(t){return Xi.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}wo.use(To);var Lo={id:"auto-start/interactableMethods",install:function(t){const{Interactable:e}=t;e.prototype.getAction=function(e,i,n,o){const r=function(t,e,i,n,o){const r=t.getRect(n),s=e.buttons||{0:1,1:4,3:8,4:16}[e.button],a={action:null,interactable:t,interaction:i,element:n,rect:r,buttons:s};return o.fire("auto-start:check",a),a.action}(this,i,n,o,t);return this.options.actionChecker?this.options.actionChecker(e,i,r,this,o,n):r},e.prototype.ignoreFrom=Tn((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=Tn((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=$o,e.prototype.styleCursor=Po}};function No(t,e,i,n,o){return e.testIgnoreAllow(e.options[t.name],i,n)&&e.options[t.name].enabled&&Go(e,i,t,o)?t:null}function Ro(t,e,i,n,o,r,s){for(let a=0,c=n.length;a<c;a++){const c=n[a],l=o[a],d=c.getAction(e,i,t,l);if(!d)continue;const u=No(d,c,l,r,s);if(u)return{action:u,interactable:c,element:l}}return{action:null,interactable:null,element:null}}function Io(t,e,i,n,o){let r=[],s=[],a=n;function c(t){r.push(t),s.push(a)}for(;Xi.element(a);){r=[],s=[],o.interactables.forEachMatch(a,c);const l=Ro(t,e,i,r,s,n,o);if(l.action&&!l.interactable.options[l.action.name].manualStart)return l;a=fn(a)}return{action:null,interactable:null,element:null}}function jo(t,{action:e,interactable:i,element:n},o){e=e||{name:null},t.interactable=i,t.element=n,Pn(t.prepared,e),t.rect=i&&e.name?i.getRect(n):null,Uo(t,o),o.fire("autoStart:prepared",{interaction:t})}function Go(t,e,i,n){const o=t.options,r=o[i.name].max,s=o[i.name].maxPerElement,a=n.autoStart.maxInteractions;let c=0,l=0,d=0;if(!(r&&s&&a))return!1;for(const o of n.interactions.list){const n=o.prepared.name;if(o.interacting()){if(c++,c>=a)return!1;if(o.interactable===t){if(l+=n===i.name?1:0,l>=r)return!1;if(o.element===e&&(d++,n===i.name&&d>=s))return!1}}}return a>0}function Bo(t,e){return Xi.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Fo(t,e,i){const{cursorElement:n}=i.autoStart;n&&n!==t&&(n.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,i.autoStart.cursorElement=e?t:null}function Uo(t,e){const{interactable:i,element:n,prepared:o}=t;if("mouse"!==t.pointerType||!i||!i.options.styleCursor)return void(e.autoStart.cursorElement&&Fo(e.autoStart.cursorElement,"",e));let r="";if(o.name){const s=i.options[o.name].cursorChecker;r=Xi.func(s)?s(o,i,n,t._interacting):e.actions.map[o.name].getCursor(o)}Fo(t.element,r||"",e)}const Ho={id:"auto-start/base",before:["actions"],install:function(t){const{interactStatic:e,defaults:i}=t;t.usePlugin(Lo),i.base.actionChecker=null,i.base.styleCursor=!0,nn(i.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=e=>Bo(e,t),t.autoStart={maxInteractions:1/0,withinInteractionLimit:Go,cursorElement:null}},listeners:{"interactions:down":function({interaction:t,pointer:e,event:i,eventTarget:n},o){if(t.interacting())return;jo(t,Io(t,e,i,n,o),o)},"interactions:move":(t,e)=>{!function({interaction:t,pointer:e,event:i,eventTarget:n},o){if("mouse"!==t.pointerType||t.pointerIsDown||t.interacting())return;jo(t,Io(t,e,i,n,o),o)}(t,e),function(t,e){const{interaction:i}=t;if(!i.pointerIsDown||i.interacting()||!i.pointerWasMoved||!i.prepared.name)return;e.fire("autoStart:before-start",t);const{interactable:n}=i,o=i.prepared.name;o&&n&&(n.options[o].manualStart||!Go(n,i.element,i.prepared,e)?i.stop():(i.start(i.prepared,n,i.element),Uo(i,e)))}(t,e)},"interactions:stop":function({interaction:t},e){const{interactable:i}=t;i&&i.options.styleCursor&&Fo(t.element,"",e)}},maxInteractions:Bo,withinInteractionLimit:Go,validateAction:No};var Vo=Ho;var Wo={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function({interaction:t,eventTarget:e,dx:i,dy:n},o){if("drag"!==t.prepared.name)return;const r=Math.abs(i),s=Math.abs(n),a=t.interactable.options.drag,c=a.startAxis,l=r>s?"x":r<s?"y":"xy";if(t.prepared.axis="start"===a.lockAxis?l[0]:a.lockAxis,"xy"!==l&&"xy"!==c&&c!==l){t.prepared.name=null;let i=e;const n=function(n){if(n===t.interactable)return;const r=t.interactable.options.drag;if(!r.manualStart&&n.testIgnoreAllow(r,i,e)){const r=n.getAction(t.downPointer,t.downEvent,t,i);if(r&&"drag"===r.name&&function(t,e){if(!e)return!1;const i=e.options.drag.startAxis;return"xy"===t||"xy"===i||i===t}(l,n)&&Vo.validateAction(r,n,i,e,o))return n}};for(;Xi.element(i);){const e=o.interactables.forEachMatch(i,n);if(e){t.prepared.name="drag",t.interactable=e,t.element=i;break}i=fn(i)}}}}};function Xo(t){const e=t.prepared&&t.prepared.name;if(!e)return null;const i=t.interactable.options;return i[e].hold||i[e].delay}const Qo={id:"auto-start/hold",install:function(t){const{defaults:e}=t;t.usePlugin(Vo),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":({interaction:t})=>{t.autoStartHoldTimer=null},"autoStart:prepared":({interaction:t})=>{const e=Xo(t);e>0&&(t.autoStartHoldTimer=setTimeout((()=>{t.start(t.prepared,t.interactable,t.element)}),e))},"interactions:move":({interaction:t,duplicate:e})=>{t.autoStartHoldTimer&&t.pointerWasMoved&&!e&&(clearTimeout(t.autoStartHoldTimer),t.autoStartHoldTimer=null)},"autoStart:before-start":({interaction:t})=>{Xo(t)>0&&(t.prepared.name=null)}},getHoldDuration:Xo};var Yo=Qo,Jo={id:"auto-start",install(t){t.usePlugin(Vo),t.usePlugin(Yo),t.usePlugin(Wo)}};wo.use(Jo);var Zo,Ko={};!function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(Zo||(Zo={}));const tr="[interact.js] ",er={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};const ir=[{name:Zo.touchAction,perform:({element:t})=>!function(t,e,i){let n=t;for(;Xi.element(n);){if(nr(n,e,i))return!0;n=fn(n)}return!1}(t,"touchAction",/pan-|pinch|none/),getInfo:({element:t})=>[t,er.touchAction],text:'Consider adding CSS "touch-action: none" to this element\n'},{name:Zo.boxSizing,perform(t){const{element:e}=t;return"resize"===t.prepared.name&&e instanceof ji.HTMLElement&&!nr(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:({element:t})=>[t,er.boxSizing]},{name:Zo.noListeners,perform(t){const e=t.prepared.name;return!(t.interactable.events.types[`${e}move`]||[]).length},getInfo:t=>[t.prepared.name,t.interactable],text:"There are no listeners set for this action"}];function nr(t,e,i){const n=t.style[e]||Fi.getComputedStyle(t)[e];return i.test((n||"").toString())}const or="dev-tools",rr={id:or,install:function(t,{logger:e}={}){const{Interactable:i,defaults:n}=t;t.logger=e||console,n.base.devTools={ignore:{}},i.prototype.devTools=function(t){return t?(nn(this.options.devTools,t),this):this.options.devTools},t.usePlugin(Ko)},listeners:{"interactions:action-start":({interaction:t},e)=>{for(const i of ir){const n=t.interactable&&t.interactable.options;n&&n.devTools&&n.devTools.ignore[i.name]||!i.perform(t)||e.logger.warn(tr+i.text,...i.getInfo(t))}}},checks:ir,CheckName:Zo,links:er,prefix:tr};var sr=rr;wo.use(sr);var ar=Object.freeze({__proto__:null,edgeTarget:()=>{},elements:()=>{},grid:t=>{const e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((([e,i])=>e in t||i in t)),i=(i,n)=>{const{range:o,limits:r={left:-1/0,right:1/0,top:-1/0,bottom:1/0},offset:s={x:0,y:0}}=t,a={range:o,grid:t,x:null,y:null};for(const[o,c]of e){const e=Math.round((i-s.x)/t[o]),l=Math.round((n-s.y)/t[c]);a[o]=Math.max(r.left,Math.min(r.right,e*t[o]+s.x)),a[c]=Math.max(r.top,Math.min(r.bottom,l*t[c]+s.y))}return a};return i.grid=t,i.coordFields=e,i}});const cr={id:"snappers",install(t){const{interactStatic:e}=t;e.snappers=nn(e.snappers||{},ar),e.createSnapGrid=e.snappers.grid}};var lr=cr;class dr{constructor(t){this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=t,this.result=ur()}start({phase:t},e){const{interaction:i}=this,n=function(t){const e=t.interactable.options[t.prepared.name],i=e.modifiers;if(i&&i.length)return i;return["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((t=>{const i=e[t];return i&&i.enabled&&{options:i,methods:i._methods}})).filter((t=>!!t))}(i);var o,r;this.prepareStates(n),this.edges=nn({},i.edges),this.startOffset=(o=i.rect,r=e,o?{left:r.x-o.left,top:r.y-o.top,right:o.right-r.x,bottom:o.bottom-r.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};const s=this.fillArg({phase:t,pageCoords:e,preEnd:!1});this.result=ur(),this.startAll(s);return this.result=this.setAll(s)}fillArg(t){const{interaction:e}=this;return t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset,t}startAll(t){for(const e of this.states)e.methods.start&&(t.state=e,e.methods.start(t))}setAll(t){const{phase:e,preEnd:i,skipModifiers:n,rect:o}=t;t.coords=nn({},t.pageCoords),t.rect=nn({},o);const r=n?this.states.slice(n):this.states,s=ur(t.coords,t.rect);for(const n of r){var a;const{options:o}=n,r=nn({},t.coords);let c=null;null!=(a=n.methods)&&a.set&&this.shouldDo(o,i,e)&&(t.state=n,c=n.methods.set(t),Dn(this.interaction.edges,t.rect,{x:t.coords.x-r.x,y:t.coords.y-r.y})),s.eventProps.push(c)}s.delta.x=t.coords.x-t.pageCoords.x,s.delta.y=t.coords.y-t.pageCoords.y,s.rectDelta.left=t.rect.left-o.left,s.rectDelta.right=t.rect.right-o.right,s.rectDelta.top=t.rect.top-o.top,s.rectDelta.bottom=t.rect.bottom-o.bottom;const c=this.result.coords,l=this.result.rect;if(c&&l){const t=s.rect.left!==l.left||s.rect.right!==l.right||s.rect.top!==l.top||s.rect.bottom!==l.bottom;s.changed=t||c.x!==s.coords.x||c.y!==s.coords.y}return s}applyToInteraction(t){const{interaction:e}=this,{phase:i}=t,n=e.coords.cur,o=e.coords.start,{result:r,startDelta:s}=this,a=r.delta;"start"===i&&nn(this.startDelta,r.delta);for(const[t,e]of[[o,s],[n,a]])t.page.x+=e.x,t.page.y+=e.y,t.client.x+=e.x,t.client.y+=e.y;const{rectDelta:c}=this.result,l=t.rect||e.rect;l.left+=c.left,l.right+=c.right,l.top+=c.top,l.bottom+=c.bottom,l.width=l.right-l.left,l.height=l.bottom-l.top}setAndApply(t){const{interaction:e}=this,{phase:i,preEnd:n,skipModifiers:o}=t,r=this.setAll(this.fillArg({preEnd:n,phase:i,pageCoords:t.modifiedCoords||e.coords.cur.page}));if(this.result=r,!r.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){const{page:i}=e.coords.cur,n={x:t.modifiedCoords.x-i.x,y:t.modifiedCoords.y-i.y};r.coords.x+=n.x,r.coords.y+=n.y,r.delta.x+=n.x,r.delta.y+=n.y}this.applyToInteraction(t)}beforeEnd(t){const{interaction:e,event:i}=t,n=this.states;if(!n||!n.length)return;let o=!1;for(const e of n){t.state=e;const{options:i,methods:n}=e,r=n.beforeEnd&&n.beforeEnd(t);if(r)return this.endResult=r,!1;o=o||!o&&this.shouldDo(i,!0,t.phase,!0)}o&&e.move({event:i,preEnd:!0})}stop(t){const{interaction:e}=t;if(!this.states||!this.states.length)return;const i=nn({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(i);for(const t of this.states)i.state=t,t.methods.stop&&t.methods.stop(i);this.states=null,this.endResult=null}prepareStates(t){this.states=[];for(let e=0;e<t.length;e++){const{options:i,methods:n,name:o}=t[e];this.states.push({options:i,methods:n,index:e,name:o})}return this.states}restoreInteractionCoords({interaction:{coords:t,rect:e,modification:i}}){if(!i.result)return;const{startDelta:n}=i,{delta:o,rectDelta:r}=i.result,s=[[t.start,n],[t.cur,o]];for(const[t,e]of s)t.page.x-=e.x,t.page.y-=e.y,t.client.x-=e.x,t.client.y-=e.y;e.left-=r.left,e.right-=r.right,e.top-=r.top,e.bottom-=r.bottom}shouldDo(t,e,i,n){return!(!t||!1===t.enabled||n&&!t.endOnly||t.endOnly&&!e||"start"===i&&!t.setStart)}copyFrom(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((t=>en(t))),this.result=ur(nn({},t.result.coords),nn({},t.result.rect))}destroy(){for(const t in this)this[t]=null}}function ur(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function pr(t,e){const{defaults:i}=t,n={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=t=>{const o=t||{};o.enabled=!1!==o.enabled;for(const t in i)t in o||(o[t]=i[t]);const r={options:o,methods:n,name:e,enable:()=>(o.enabled=!0,r),disable:()=>(o.enabled=!1,r)};return r};return e&&"string"==typeof e&&(o._defaults=i,o._methods=n),o}function hr({iEvent:t,interaction:e}){const i=e.modification.result;i&&(t.modifiers=i.eventProps)}const fr={id:"modifiers/base",before:["actions"],install:t=>{t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":({interaction:t})=>{t.modification=new dr(t)},"interactions:before-action-start":t=>{const e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":t=>t.interaction.modification.setAndApply(t),"interactions:before-action-end":t=>t.interaction.modification.beforeEnd(t),"interactions:action-start":hr,"interactions:action-move":hr,"interactions:action-end":hr,"interactions:after-action-start":t=>t.interaction.modification.restoreInteractionCoords(t),"interactions:after-action-move":t=>t.interaction.modification.restoreInteractionCoords(t),"interactions:stop":t=>t.interaction.modification.stop(t)}};var mr=fr;const gr={start(t){const{state:e,rect:i,edges:n,pageCoords:o}=t;let{ratio:r}=e.options;const{equalDelta:s,modifiers:a}=e.options;"preserve"===r&&(r=i.width/i.height),e.startCoords=nn({},o),e.startRect=nn({},i),e.ratio=r,e.equalDelta=s;const c=e.linkedEdges={top:n.top||n.left&&!n.bottom,left:n.left||n.top&&!n.right,bottom:n.bottom||n.right&&!n.top,right:n.right||n.bottom&&!n.left};if(e.xIsPrimaryAxis=!(!n.left&&!n.right),e.equalDelta)e.edgeSign=(c.left?1:-1)*(c.top?1:-1);else{const t=e.xIsPrimaryAxis?c.top:c.left;e.edgeSign=t?-1:1}if(nn(t.edges,c),!a||!a.length)return;const l=new dr(t.interaction);l.copyFrom(t.interaction.modification),l.prepareStates(a),e.subModification=l,l.startAll({...t})},set(t){const{state:e,rect:i,coords:n}=t,o=nn({},n),r=e.equalDelta?br:vr;if(r(e,e.xIsPrimaryAxis,n,i),!e.subModification)return null;const s=nn({},i);Dn(e.linkedEdges,s,{x:n.x-o.x,y:n.y-o.y});const a=e.subModification.setAll({...t,rect:s,edges:e.linkedEdges,pageCoords:n,prevCoords:n,prevRect:s}),{delta:c}=a;if(a.changed){r(e,Math.abs(c.x)>Math.abs(c.y),a.coords,a.rect),nn(n,a.coords)}return a.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function br({startCoords:t,edgeSign:e},i,n){i?n.y=t.y+(n.x-t.x)*e:n.x=t.x+(n.y-t.y)*e}function vr({startRect:t,startCoords:e,ratio:i,edgeSign:n},o,r,s){if(o){const o=s.width/i;r.y=e.y+(o-t.height)*n}else{const o=s.height*i;r.x=e.x+(o-t.width)*n}}var wr=pr(gr,"aspectRatio");const yr=()=>{};yr._defaults={};var xr=yr;function Er(t,e,i){return Xi.func(t)?Cn(t,e.interactable,e.element,[i.x,i.y,e]):Cn(t,e.interactable,e.element)}const Sr={start:function({rect:t,startOffset:e,state:i,interaction:n,pageCoords:o}){const{options:r}=i,{elementRect:s}=r,a=nn({left:0,top:0,right:0,bottom:0},r.offset||{});if(t&&s){const i=Er(r.restriction,n,o);if(i){const e=i.right-i.left-t.width,n=i.bottom-i.top-t.height;e<0&&(a.left+=e,a.right+=e),n<0&&(a.top+=n,a.bottom+=n)}a.left+=e.left-t.width*s.left,a.top+=e.top-t.height*s.top,a.right+=e.right-t.width*(1-s.right),a.bottom+=e.bottom-t.height*(1-s.bottom)}i.offset=a},set:function({coords:t,interaction:e,state:i}){const{options:n,offset:o}=i,r=Er(n.restriction,e,t);if(!r)return;const s=function(t){return!t||"left"in t&&"top"in t||((t=nn({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height),t}(r);t.x=Math.max(Math.min(s.right-o.right,t.x),s.left+o.left),t.y=Math.max(Math.min(s.bottom-o.bottom,t.y),s.top+o.top)},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};var Cr=pr(Sr,"restrict");const zr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},qr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Dr(t,e){for(const i of["top","left","bottom","right"])i in t||(t[i]=e[i]);return t}const Mr={noInner:zr,noOuter:qr,start:function({interaction:t,startOffset:e,state:i}){const{options:n}=i;let o;if(n){o=zn(Er(n.offset,t,t.coords.start.page))}o=o||{x:0,y:0},i.offset={top:o.y+e.top,left:o.x+e.left,bottom:o.y-e.bottom,right:o.x-e.right}},set:function({coords:t,edges:e,interaction:i,state:n}){const{offset:o,options:r}=n;if(!e)return;const s=nn({},t),a=Er(r.inner,i,s)||{},c=Er(r.outer,i,s)||{};Dr(a,zr),Dr(c,qr),e.top?t.y=Math.min(Math.max(c.top+o.top,s.y),a.top+o.top):e.bottom&&(t.y=Math.max(Math.min(c.bottom+o.bottom,s.y),a.bottom+o.bottom)),e.left?t.x=Math.min(Math.max(c.left+o.left,s.x),a.left+o.left):e.right&&(t.x=Math.max(Math.min(c.right+o.right,s.x),a.right+o.right))},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};var Ar=pr(Mr,"restrictEdges");const _r=nn({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Sr.defaults);var Or=pr({start:Sr.start,set:Sr.set,defaults:_r},"restrictRect");const kr={width:-1/0,height:-1/0},Tr={width:1/0,height:1/0};var Pr=pr({start:function(t){return Mr.start(t)},set:function(t){const{interaction:e,state:i,rect:n,edges:o}=t,{options:r}=i;if(!o)return;const s=qn(Er(r.min,e,t.coords))||kr,a=qn(Er(r.max,e,t.coords))||Tr;i.options={endOnly:r.endOnly,inner:nn({},Mr.noInner),outer:nn({},Mr.noOuter)},o.top?(i.options.inner.top=n.bottom-s.height,i.options.outer.top=n.bottom-a.height):o.bottom&&(i.options.inner.bottom=n.top+s.height,i.options.outer.bottom=n.top+a.height),o.left?(i.options.inner.left=n.right-s.width,i.options.outer.left=n.right-a.width):o.right&&(i.options.inner.right=n.left+s.width,i.options.outer.right=n.left+a.width),Mr.set(t),i.options=r},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize");const $r={start:function(t){const{interaction:e,interactable:i,element:n,rect:o,state:r,startOffset:s}=t,{options:a}=r,c=a.offsetWithOrigin?function(t){const{element:e}=t.interaction,i=zn(Cn(t.state.options.origin,null,null,[e]));return i||Mn(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};let l;if("startCoords"===a.offset)l={x:e.coords.start.page.x,y:e.coords.start.page.y};else{const t=Cn(a.offset,i,n,[e]);l=zn(t)||{x:0,y:0},l.x+=c.x,l.y+=c.y}const{relativePoints:d}=a;r.offsets=o&&d&&d.length?d.map(((t,e)=>({index:e,relativePoint:t,x:s.left-o.width*t.x+l.x,y:s.top-o.height*t.y+l.y}))):[{index:0,relativePoint:null,x:l.x,y:l.y}]},set:function(t){const{interaction:e,coords:i,state:n}=t,{options:o,offsets:r}=n,s=Mn(e.interactable,e.element,e.prepared.name),a=nn({},i),c=[];o.offsetWithOrigin||(a.x-=s.x,a.y-=s.y);for(const t of r){const i=a.x-t.x,n=a.y-t.y;for(let r=0,s=o.targets.length;r<s;r++){const s=o.targets[r];let a;a=Xi.func(s)?s(i,n,e._proxy,t,r):s,a&&c.push({x:(Xi.number(a.x)?a.x:i)+t.x,y:(Xi.number(a.y)?a.y:n)+t.y,range:Xi.number(a.range)?a.range:o.range,source:s,index:r,offset:t})}}const l={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}};for(const t of c){const e=t.range,i=t.x-a.x,n=t.y-a.y,o=An(i,n);let r=o<=e;e===1/0&&l.inRange&&l.range!==1/0&&(r=!1),l.target&&!(r?l.inRange&&e!==1/0?o/e<l.distance/l.range:e===1/0&&l.range!==1/0||o<l.distance:!l.inRange&&o<l.distance)||(l.target=t,l.distance=o,l.range=e,l.inRange=r,l.delta.x=i,l.delta.y=n)}return l.inRange&&(i.x=l.target.x,i.y=l.target.y),n.closest=l,l},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};var Lr=pr($r,"snap");const Nr={start:function(t){const{state:e,edges:i}=t,{options:n}=e;if(!i)return null;t.state={options:{targets:null,relativePoints:[{x:i.left?0:1,y:i.top?0:1}],offset:n.offset||"self",origin:{x:0,y:0},range:n.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],$r.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){const{interaction:e,state:i,coords:n}=t,{options:o,offsets:r}=i,s={x:n.x-r[0].x,y:n.y-r[0].y};i.options=nn({},o),i.options.targets=[];for(const t of o.targets||[]){let n;if(n=Xi.func(t)?t(s.x,s.y,e):t,n){for(const[t,e]of i.targetFields)if(t in n||e in n){n.x=n[t],n.y=n[e];break}i.options.targets.push(n)}}const a=$r.set(t);return i.options=o,a},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};var Rr=pr(Nr,"snapSize");var Ir={aspectRatio:wr,restrictEdges:Ar,restrict:Cr,restrictRect:Or,restrictSize:Pr,snapEdges:pr({start:function(t){const{edges:e}=t;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],Nr.start(t)):null},set:Nr.set,defaults:nn(en(Nr.defaults),{targets:null,range:null,offset:{x:0,y:0}})},"snapEdges"),snap:Lr,snapSize:Rr,spring:xr,avoid:xr,transform:xr,rubberband:xr};const jr={id:"modifiers",install(t){const{interactStatic:e}=t;t.usePlugin(mr),t.usePlugin(lr),e.modifiers=Ir;for(const e in Ir){const{_defaults:i,_methods:n}=Ir[e];i._methods=n,t.defaults.perAction[e]=i}}};var Gr=jr;wo.use(Gr);class Br{}function Fr(t){class n extends t{constructor(){super(...arguments),this.size=""}get sizeableStyle(){return $i`<style>
        :host {
          position: relative;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }
        :host([data-size="xs"]) {
          height: ${Br.size.xs}rem;
          width: ${Br.size.xs}rem;
        }
        :host([data-size="sm"]) {
          height: ${Br.size.sm}rem;
          width: ${Br.size.sm}rem;
        }
        :host,
        :host([data-size="base"]) {
          height: ${Br.size.base}rem;
          width: ${Br.size.base}rem;
        }
        :host([data-size="lg"]) {
          height: ${Br.size.lg}rem;
          width: ${Br.size.lg}rem;
        }
        :host([data-size="xl"]) {
          height: ${Br.size.xl}rem;
          width: ${Br.size.xl}rem;
        }
        :host([data-wire-count="1"]),
        :host([data-wire-count="2"]) {
          height: ${Br.size.xl}rem;
          width: ${Br.size.xl}rem;
        }
        :host([data-wire-count="3"]) {
          height: ${Br.size.lg}rem;
          width: ${Br.size.lg}rem;
        }
        :host([data-wire-count="4"]) {
          height: ${Br.size.base}rem;
          width: ${Br.size.base}rem;
        }
        :host([data-wire-count="5"]),
        :host([data-wire-count="6"]) {
          height: ${Br.size.sm}rem;
          width: ${Br.size.sm}rem;
        }
        :host([data-wire-count="7"]),
        :host([data-wire-count="8"]),
        :host([data-wire-count="9"]),
        :host([data-wire-count="10"]) {
          height: ${Br.size.xs}rem;
          width: ${Br.size.xs}rem;
        }
        @media (min-width: 768px) {
          :host,
          :host([data-wire-count="1"]),
          :host([data-wire-count="2"]),
          :host([data-wire-count="3"]),
          :host([data-wire-count="4"]),
          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]),
          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${Br.size.base}rem;
            width: ${Br.size.base}rem;
          }
        }
      </style>`}}return e([f,i("design:type",Object)],n.prototype,"size",void 0),n}Br.size={xs:1,sm:1.5,base:2,lg:2.5,xl:3};class Ur{serialize(){return{type:"1"}}toJson(){return"1"}}const Hr=$i`<svg
  id="wires"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <line
    id="wire-input"
    x1="0"
    y1="50"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-output"
    x1="50"
    y1="50"
    x2="100"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-top"
    x1="50"
    y1="0"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-bottom"
    x1="50"
    y1="100"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>`;t.CircuitDropzoneElement=class CircuitDropzoneElement extends HTMLElement{constructor(){super(...arguments),this.size="",this.inputWireQuantum=!1,this.outputWireQuantum=!1,this.wireTop=!1,this.wireBottom=!1,this.occupied=!1,this.draggableTagName="",this.shadow=!1,this.childrenLoaded=!0,this.wireCount=0}get draggableElement(){const t=this.children[0];return void 0===t?null:t.snapped?t:null}get circuitStep(){const t=this.parentElement;return null!==t&&"CIRCUIT-STEP"===t.nodeName?t:null}set wireQuantum(t){this.inputWireQuantum=t,this.outputWireQuantum=t}get snapTarget(){const t=this.getBoundingClientRect();return{x:window.pageXOffset+t.left+this.clientWidth/2,y:window.pageYOffset+t.top+this.clientHeight/2}}index(){const t=this.closest("circuit-step");return null===t?null:t.dropzoneIndex(this)}prev(){const t=this.index();if(null===t)return null;if(null===this.circuitStep)return null;const e=this.circuitStep.prev();return null===e?null:e.dropzone(t)}next(){const t=this.index();if(null===t)return null;if(null===this.circuitStep)return null;const e=this.circuitStep.next();return null===e?null:e.dropzone(t)}assign(t){this.append(t),this.occupied=!0}toJson(){const t=this.draggableElement;return null==t?"1":t.toJson()}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.slotEl.addEventListener("slotchange",this.handleSlotChange.bind(this)),this.initDropzone(),this.addEventListener("dragAndDroppable.grab",this.enableDrop),this.addEventListener("dragAndDroppable.grab",this.dispatchDropzoneGrabEvent),this.addEventListener("dragAndDroppable.enddragging",this.dispatchDropzoneDroppedEvent),this.addEventListener("dragAndDroppable.snap",this.snapDraggable),this.addEventListener("dragAndDroppable.unsnap",this.unsnapDraggable),this.addEventListener("dragAndDroppable.trash",this.clear)}clear(t){const e=t.detail.element;this.removeChild(e)}dispatchDropzoneDroppedEvent(){this.dispatchEvent(new CustomEvent("dropzone.drop",{detail:{element:this},bubbles:!0}))}attributeChangedCallback(t,e,i){if(e!==i&&0!==this.childElementCount&&"data-wire-count"===t&&null!==i){this.children[0].setAttribute("data-wire-count",i)}}update(){if(Li($i`<style>
          :host([data-size="xs"]) {
            height: 1.5rem;
            width: 1rem;
          }
          :host([data-size="sm"]) {
            height: 2.25rem;
            width: 1.5rem;
          }
          :host,
          :host([data-size="base"]) {
            height: 3rem;
            width: 2rem;
          }
          :host([data-size="lg"]) {
            height: 3.75rem;
            width: 2.5rem;
          }
          :host([data-size="xl"]) {
            height: 4.5rem;
            width: 3rem;
          }
          @media (min-width: 768px) {
            :host([data-size="xs"]) {
              height: 1rem;
              width: 1.5rem;
            }
            :host([data-size="sm"]) {
              height: 1.5rem;
              width: 2.25rem;
            }
            :host,
            :host([data-size="base"]) {
              height: 2rem;
              width: 3rem;
            }
            :host([data-size="lg"]) {
              height: 2.5rem;
              width: 3.75rem;
            }
            :host([data-size="xl"]) {
              height: 3rem;
              width: 4.5rem;
            }
          }
          :host([data-wire-count="1"]),
          :host([data-wire-count="2"]) {
            height: ${1.5*Br.size.xl}rem;
            width: ${Br.size.xl}rem;
          }
          :host([data-wire-count="3"]) {
            height: ${1.5*Br.size.lg}rem;
            width: ${Br.size.lg}rem;
          }
          :host([data-wire-count="4"]) {
            height: ${1.5*Br.size.base}rem;
            width: ${Br.size.base}rem;
          }
          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]) {
            height: ${1.5*Br.size.sm}rem;
            width: ${Br.size.sm}rem;
          }
          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${1.5*Br.size.xs}rem;
            width: ${Br.size.xs}rem;
          }
          @media (min-width: 768px) {
            :host([data-wire-count="1"]),
            :host([data-wire-count="2"]),
            :host([data-wire-count="3"]),
            :host([data-wire-count="4"]),
            :host([data-wire-count="5"]),
            :host([data-wire-count="6"]),
            :host([data-wire-count="7"]),
            :host([data-wire-count="8"]),
            :host([data-wire-count="9"]),
            :host([data-wire-count="10"]) {
              height: ${Br.size.base}rem;
              width: ${1.5*Br.size.base}rem;
            }
          }
          :host([data-wire-top]) #wire-top {
            display: block;
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }
          :host([data-wire-bottom]) #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }
          #wires {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            height: calc(100%);
            width: calc(100%);
            overflow: visible;
            transform: rotate(90deg);
            transform-origin: center;
          }
          :host([data-shadow]) #wires {
            display: none;
          }
          @media (min-width: 768px) {
            #wires {
              transform: rotate(0);
            }
          }
          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
          #wire-input,
          #wire-output {
            color: var(--colors-wolf, #777777);
          }
          :host(:not([data-input-wire-quantum])) #wire-input,
          :host([data-input-wire-quantum="false"]) #wire-input {
            color: var(--colors-swan, #e5e5e5);
          }
          :host(:not([data-output-wire-quantum])) #wire-output,
          :host([data-output-wire-quantum="false"]) #wire-output {
            color: var(--colors-swan, #e5e5e5);
          }
          #wire-input {
            transform: translateX(-25%) scaleX(1.5);
            transform-origin: left;
          }
          #wire-output {
            transform: translateX(25%) scaleX(1.5);
            transform-origin: right;
          }
          @media (min-width: 768px) {
            #wire-input,
            #wire-output {
              transform: none;
            }
          }
          :host([data-draggable-tag-name="write-gate"][data-occupied])
            #wires
            > #wire-input,
          :host([data-draggable-tag-name="measurement-gate"][data-occupied])
            #wires
            > #wire-input {
            transform: scaleX(0.75) translateX(-33.3%);
          }
          @media (min-width: 768px) {
            :host([data-draggable-tag-name="write-gate"][data-occupied])
              #wires
              > #wire-input,
            :host([data-draggable-tag-name="measurement-gate"][data-occupied])
              #wires
              > #wire-input {
              transform: scaleX(0.33) translateX(0);
            }
          }
          :host([data-draggable-tag-name="write-gate"][data-occupied])
            #wires
            > #wire-output,
          :host([data-draggable-tag-name="measurement-gate"][data-occupied])
            #wires
            > #wire-output {
            transform: scaleX(0.75) translateX(33.3%);
          }
          @media (min-width: 768px) {
            :host([data-draggable-tag-name="write-gate"][data-occupied])
              #wires
              > #wire-output,
            :host([data-draggable-tag-name="measurement-gate"][data-occupied])
              #wires
              > #wire-output {
              transform: scaleX(0.33) translateX(0);
            }
          }
          #wire-top,
          #wire-bottom {
            color: var(--colors-gate, #43c000);
            stroke-width: 4;
            display: none;
          }
        </style>

        <div id="body" data-target="circuit-dropzone.body">
          <slot data-target="circuit-dropzone.slotEl"></slot>
          ${Hr}
        </div>`,this.shadowRoot),1===this.childElementCount){const t=this.children[0];this.childrenLoaded=!1,this.occupied=!0,this.draggableTagName=t.tagName.toLowerCase()}else if(this.childElementCount>1)throw new Error("A dropzone cannot hold multiple operations.")}handleSlotChange(){if(this.childElementCount>1)throw new Error("A dropzone cannot hold multiple operations.");if(0===this.childElementCount)return this.draggableTagName="",this.occupied=!1,void this.enableDrop();const t=this.children[0],e=t.nodeName;t.setAttribute("data-wire-count",this.wireCount.toString()),""!==this.size&&t.setAttribute("data-size",this.size),this.draggableTagName=e.toLowerCase(),this.occupied=!0,this.disableDrop(),this.childrenLoaded?this.dispatchEvent(new CustomEvent("dropzone.snap",{detail:{element:this},bubbles:!0})):this.childrenLoaded=!0}dispatchDropzoneGrabEvent(){this.dispatchEvent(new CustomEvent("dropzone.grab",{detail:{element:this},bubbles:!0}))}initDropzone(){wo(this).dropzone({accept:"[data-drag-and-drop]",overlap:"center"})}enableDrop(){wo(this).dropzone(!0)}disableDrop(){wo(this).dropzone(!1)}snapDraggable(t){const e=t.detail.element;this.append(e),e.moveTo(0,0)}unsnapDraggable(){this.draggableTagName="",this.occupied=!1,this.dispatchEvent(new CustomEvent("dropzone.unsnap",{detail:{element:this},bubbles:!0}))}updateWires(){const t=this.draggableTagName,e=this.prev();"write-gate"===t?(this.inputWireQuantum=null!==e&&e.outputWireQuantum,this.outputWireQuantum=!0):"measurement-gate"===t?(this.inputWireQuantum=null!==e&&e.outputWireQuantum,this.outputWireQuantum=!1):null===e?(this.inputWireQuantum=!1,this.outputWireQuantum=!1):(this.inputWireQuantum=e.outputWireQuantum,this.outputWireQuantum=e.outputWireQuantum)}remove(){var t;null===(t=this.parentElement)||void 0===t||t.removeChild(this)}serialize(){return null===this.draggableElement?(new Ur).serialize():this.draggableElement.serialize()}},e([u,i("design:type",HTMLSlotElement)],t.CircuitDropzoneElement.prototype,"slotEl",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"size",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"inputWireQuantum",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"outputWireQuantum",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"wireTop",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"wireBottom",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"occupied",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"draggableTagName",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"shadow",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"childrenLoaded",void 0),e([f,i("design:type",Object)],t.CircuitDropzoneElement.prototype,"wireCount",void 0),t.CircuitDropzoneElement=e([b],t.CircuitDropzoneElement),t.PaletteDropzoneElement=class PaletteDropzoneElement extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.addEventListener("dragAndDroppable.trash",this.removeOperation)}update(){Li($i`<style>
          :host {
            position: relative;
            height: ${Br.size.base}rem;
            width: ${Br.size.base}rem;
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="dragAndDroppable.grab:palette-dropzone#newOperation">
          <slot></slot>
        </div>`,this.shadowRoot)}newOperation(t){const e=t.target,i=e.cloneNode(!0);e.disableHelp(),i.removeAttribute("data-grabbed"),this.prepend(i)}removeOperation(t){const e=t.detail.element;q.notNull(e),this.removeChild(e),t.stopPropagation()}},t.PaletteDropzoneElement=e([b],t.PaletteDropzoneElement);const Vr=$i`<style>
  :host([data-drag-and-drop]) {
    touch-action: none;
  }

  :host([data-grabbed]) {
    z-index: 50 !important;
  }

  :host([data-grabbed]) #body {
    background-color: var(--colors-snow, #ffffff);
  }

  :host(:not([data-snapped])[data-grabbed]) #wires {
    display: none;
  }

  #body {
    height: 100%;
    width: 100%;
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    :host([data-drag-and-drop]) #body::after {
      position: absolute;
      height: 100%;
      width: 100%;
      border-color: var(--colors-cardinal, #ff4b4b);
      border-radius: 0.25rem;
      border-style: solid;
      border-width: 2px;
      box-sizing: border-box;
      opacity: 0;
      content: "";
    }

    :host([data-drag-and-drop][data-hoverable]) #body:hover::after,
    :host([data-drag-and-drop][data-grabbed]) #body::after {
      opacity: 100;
    }
  }
</style>`,Wr=e=>e instanceof t.PaletteDropzoneElement,Xr=e=>e instanceof t.CircuitDropzoneElement;function Qr(t){class n extends t{constructor(){super(...arguments),this.dragAndDrop=!1,this.grabbed=!1,this.dragging=!1,this.snapped=!0,this.positionX=0,this.positionY=0,this.hoverable=!0}get dropzone(){return this.parentElement}get dragAndDroppableStyle(){return Vr}initDragAndDrop(){this.isPaletteDraggable&&(this.dragAndDrop=!0,this.snapped=!1),this.snappedDropzone=this.dropzone,this.dragAndDrop&&(wo.isSet(this)||(wo(this).styleCursor(!1),wo(this).draggable({onstart:this.startDragging.bind(this),onmove:this.dragMove.bind(this),onend:this.endDragging.bind(this)}),this.addEventListener("mouseenter",this.dispatchMouseenterEvent),this.addEventListener("mouseleave",this.dispatchMouseleaveEvent),this.addEventListener("mousedown",this.grab),this.addEventListener("mouseup",this.unGrab)))}dispatchMouseenterEvent(){this.dispatchEvent(new CustomEvent("dragAndDroppable.mouseenter",{detail:{element:this},bubbles:!0}))}dispatchMouseleaveEvent(){this.dispatchEvent(new CustomEvent("dragAndDroppable.mouseleave",{detail:{element:this},bubbles:!0}))}startDragging(){Be.isMobile()||(this.dragging=!0)}dragMove(t){Be.isMobile()||this.move(t.dx,t.dy)}endDragging(t){if(!Be.isMobile()){if(!this.snapped){const e=this.dropzone;return q.notNull(e),this.trash(),void e.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:t.clientX,y:t.clientY},bubbles:!0}))}this.dragging=!1,this.grabbed=!1,this.moveTo(0,0),this.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:t.clientX,y:t.clientY},bubbles:!0}))}}trash(){wo(this).unset(),this.dispatchEvent(new CustomEvent("dragAndDroppable.trash",{detail:{element:this},bubbles:!0}))}grab(t){Be.isMobile()||(this.grabbed=!0,this.dispatchEvent(new CustomEvent("dragAndDroppable.grab",{detail:{element:this},bubbles:!0})),Wr(this.dropzone)&&this.moveToGrabbedPosition(t.offsetX,t.offsetY))}unGrab(t){Be.isMobile()||(this.snapped?(this.grabbed=!1,this.moveTo(0,0),this.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab",{detail:{element:this,x:t.clientX,y:t.clientY},bubbles:!0}))):this.trash())}setSnapTargets(t,e){const i=this.dropzone,n=t.filter((t=>!t.occupied)),o=[];this.snapTargetInfo={},q.notNull(i),Xr(i)&&n.push(i);for(const[n,r]of Object.entries(t)){const t=r.snapTarget,s=t.x,a=t.y,c=s-.75*this.snapRange(),l=s+.75*this.snapRange(),d=parseInt(n)%e;parseInt(n)<e&&(o.push({x:c,y:a}),void 0===this.snapTargetInfo[c]&&(this.snapTargetInfo[c]={}),void 0===this.snapTargetInfo[c][a]&&(this.snapTargetInfo[c][a]={dropzone:null,stepIndex:-1,wireIndex:d})),o.push({x:l,y:a}),void 0===this.snapTargetInfo[l]&&(this.snapTargetInfo[l]={}),void 0===this.snapTargetInfo[l][a]&&(this.snapTargetInfo[l][a]={dropzone:null,stepIndex:Math.floor(parseInt(n)/e),wireIndex:d}),r.occupied&&r!==i||o.push(t),void 0===this.snapTargetInfo[s]&&(this.snapTargetInfo[s]={}),void 0===this.snapTargetInfo[s][a]&&(this.snapTargetInfo[s][a]={dropzone:r,stepIndex:null,wireIndex:d})}wo(this).draggable({modifiers:[wo.modifiers.snap({targets:o,range:this.snapRange(),relativePoints:[{x:.5,y:.5}]})],listeners:{move:this.moveEventListener.bind(this)}})}updateSnapTargetInfo(t){const e=t[0].snapTarget.x;for(const[t,i]of Object.entries(this.snapTargetInfo))if(!(parseInt(t)<=e))for(const[t,e]of Object.entries(i))null!==e.stepIndex&&(e.stepIndex+=1);for(const[e,i]of Object.entries(t)){const t=i.snapTarget,n=t.x,o=t.y;this.snapTargetInfo[n][o]={dropzone:i,stepIndex:null,wireIndex:parseInt(e)}}}moveEventListener(t){const e=t.modifiers[0];if(e.inRange){const t=e.target.source;let i=this.snapTargetInfo[t.x][t.y].dropzone;if(this.snappedDropzone&&(this.snapped=!1,this.snappedDropzone.dispatchEvent(new Event("dragAndDroppable.unsnap",{bubbles:!0}))),null===i){const e=this.snapTargetInfo[t.x][t.y];this.dispatchEvent(new CustomEvent("dragAndDroppable.snapToNewDropzone",{detail:{element:this,stepIndex:e.stepIndex,wireIndex:e.wireIndex},bubbles:!0})),q.notNull(this.dropzone),i=this.dropzone}this.snappedDropzone=i,this.snapped=!0,i.dispatchEvent(new CustomEvent("dragAndDroppable.snap",{detail:{element:this},bubbles:!0}))}else this.isLeavingCircuit&&(this.snapped=!1,this.dispatchEvent(new Event("dragAndDroppable.unsnap",{bubbles:!0})),this.dispatchEvent(new Event("dragAndDroppable.leave",{bubbles:!0}))),this.snapped=!1}get isLeavingCircuit(){return this.snapped&&Xr(this.parentElement)}get isPaletteDraggable(){return Wr(this.dropzone)}snapRange(){return this.clientWidth}moveToGrabbedPosition(t,e){const i=t-this.clientWidth/2,n=e-this.clientHeight/2;this.move(i,n)}move(t,e){const i=this.positionX+t,n=this.positionY+e;this.moveTo(i,n)}moveTo(t,e){this.positionX=t,this.positionY=e,this.style.transform=`translate(${t}px, ${e}px)`}}return e([f,i("design:type",Object)],n.prototype,"dragAndDrop",void 0),e([f,i("design:type",Object)],n.prototype,"grabbed",void 0),e([f,i("design:type",Object)],n.prototype,"dragging",void 0),e([f,i("design:type",Object)],n.prototype,"snapped",void 0),e([f,i("design:type",Object)],n.prototype,"positionX",void 0),e([f,i("design:type",Object)],n.prototype,"positionY",void 0),e([f,i("design:type",Object)],n.prototype,"hoverable",void 0),n}function Yr(t){class n extends t{constructor(){super(...arguments),this.help=!0}showHelp(){if(!this.help)return;if(this._tippy)return;const t=this.innerHTML.trim();if(""===t)return;Ie(this,{allowHTML:!0,animation:!1,arrow:te+te,delay:0,placement:"right",theme:"qni",onShow(e){e.setContent(t)}}).show()}disableHelp(){const t=this._tippy;this.help=!1,null==t||t.destroy(),this.innerHTML=""}}return e([f,i("design:type",Object)],n.prototype,"help",void 0),n}function Jr(t){class n extends t{constructor(){super(...arguments),this.iconType=""}get iconSvg(){throw new Error("Not implemented yet")}get iconStyle(){const t=$i`<style>
        #icon {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
          stroke: currentColor;
        }
      </style>`;let e;if("square"===this.iconType)e="0.25rem";else{if("circle"!==this.iconType){if("transparent"===this.iconType)return $i`${t}

          <style>
            #icon {
              color: var(--colors-gate, #43c000);
            }

            :host([data-disabled]) #icon {
              color: var(--colors-eel, #4b4b4b);
            }
          </style>`;throw new Error("iconType not set")}e="9999px"}return $i`${t}

        <style>
          #icon {
            border-radius: ${e};
            color: var(--colors-snow, #ffffff);
            background-color: var(--colors-gate, #43c000);
          }

          :host([data-disabled]) #icon {
            background-color: var(--colors-eel, #4b4b4b);
          }
        </style>`}}return e([f,i("design:type",Object)],n.prototype,"iconType",void 0),n}function Zr(t){class n extends t{constructor(){super(...arguments),this.if=""}}return e([f,i("design:type",Object)],n.prototype,"if",void 0),n}function Kr(t){return class extends t{toJson(){throw new Error("Not implemented yet")}}}function ts(t){return class extends t{get labelStyle(){return $i`<style>
        :host::before {
          display: none;
          position: absolute;
          color: var(--colors-wolf, #777777);
          background-color: transparent;
          letter-spacing: -0.05em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          white-space: nowrap;
          z-index: 10;
          writing-mode: vertical-lr;
        }
        :host([data-snapped])::before {
          display: block;
        }
        /* Font size */
        :host::before {
          font-size: 0.75rem;
          line-height: 0.75rem;
        }
        :host([data-wire-count="1"])::before,
        :host([data-wire-count="2"])::before {
          font-size: 0.875rem;
          line-height: 0.875rem;
        }
        :host([data-wire-count="7"])::before,
        :host([data-wire-count="8"])::before,
        :host([data-wire-count="9"])::before,
        :host([data-wire-count="10"])::before {
          font-size: 0.5rem;
          line-height: 0.5rem;
        }
        @media (min-width: 768px) {
          :host::before {
            font-size: 0.75rem !important;
            line-height: 0.75rem !important;
          }
        }
        /* Ifable */
        :host([data-if]:not([data-if=""]))::before {
          content: "if " attr(data-if);
        }
        @media (min-width: 768px) {
          :host([data-if]:not([data-if=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        /* Phase gate */
        :host([data-phi]:not([data-phi=""]))::before {
          content: attr(data-phi) "";
        }
        :host([data-phi][data-if]:not([data-phi=""]):not([data-if=""]))::before {
          content: attr(data-phi) " if " attr(data-if);
        }
        @media (min-width: 768px) {
          :host([data-phi]:not([data-phi=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        /* Rx, Ry, and Rz gate */
        :host([data-theta]:not([data-theta=""]))::before {
          content: attr(data-theta) "";
        }
        :host([data-theta][data-if]:not([data-theta=""]):not([data-if=""]))::before {
          content: attr(data-theta) " if " attr(data-if);
        }
        @media (min-width: 768px) {
          :host([data-theta]:not([data-theta=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        /* Measurement gate */
        :host([data-flag]:not([data-flag=""]))::before {
          content: attr(data-flag) "";
        }
        @media (min-width: 768px) {
          :host([data-flag]:not([data-flag=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        :host(:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host(:not([data-wire-top]))::before,
        :host(:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host(:not([data-wire-top-disabled]))::before {
          left: 0px;
        }
        @media (min-width: 768px) {
          :host(:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host(:not([data-wire-top]))::before,
          :host(:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host(:not([data-wire-top-disabled]))::before {
            bottom: 0px;
            left: unset;
          }
        }
        :host([data-size="xs"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="xs"]:not([data-wire-top]))::before,
        :host([data-size="xs"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="xs"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 1.125rem;
        }
        :host([data-size="sm"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="sm"]:not([data-wire-top]))::before,
        :host([data-size="sm"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="sm"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 1.625rem;
        }
        :host(:not([data-wire-top]))::before,
        :host([data-size="base"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="base"]:not([data-wire-top]))::before,
        :host(:not([data-wire-top-disabled]))::before,
        :host([data-size="base"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="base"]:not([data-wire-top-disabled]))::before {
          margin-left: 2.125rem;
        }
        @media (min-width: 768px) {
          :host(:not([data-wire-top]))::before,
          :host([data-size="base"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-size="base"]:not([data-wire-top]))::before,
          :host(:not([data-wire-top-disabled]))::before,
          :host([data-size="base"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-size="base"]:not([data-wire-top-disabled]))::before {
            margin-bottom: 2.125rem;
            margin-left: 0;
          }
        }
        :host([data-size="lg"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="lg"]:not([data-wire-top]))::before,
        :host([data-size="lg"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="lg"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 2.625rem;
        }
        :host([data-size="xl"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="xl"]:not([data-wire-top]))::before,
        :host([data-size="xl"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="xl"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 3.125rem;
        }
        :host([data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          right: 0px;
          left: unset;
        }
        @media (min-width: 768px) {
          :host([data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            top: 0px;
            right: unset;
          }
        }
        :host([data-size="xs"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="xs"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 1.125rem;
        }
        :host([data-size="sm"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="sm"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 1.625rem;
        }
        :host([data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="base"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-size="base"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 2.125rem;
        }
        @media (min-width: 768px) {
          :host([data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-size="base"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-size="base"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            margin-top: 2.125rem;
            margin-right: 0;
          }
        }
        :host([data-size="lg"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="lg"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 2.625rem;
        }
        :host([data-size="xl"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="xl"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 3.125rem;
        }
        :host([data-wire-top][data-wire-bottom])::before,
        :host([data-wire-top-disabled][data-wire-bottom-disabled])::before {
          text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
            1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
            1px 0 0 #fff;
          left: 0px;
        }
        @media (min-width: 768px) {
          :host([data-wire-top][data-wire-bottom])::before,
          :host([data-wire-top-disabled][data-wire-bottom-disabled])::before {
            text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
              1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
              1px 0 0 #fff;
            bottom: 0px;
            left: unset;
          }
        }
        :host([data-size="xs"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="xs"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 1.125rem;
        }
        :host([data-size="sm"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="sm"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 1.625rem;
        }
        :host([data-wire-top][data-wire-bottom])::before,
        :host([data-size="base"][data-wire-top][data-wire-bottom])::before,
        :host([data-wire-top-disabled][data-wire-bottom-disabled])::before,
        :host([data-size="base"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-left: 2.125rem;
        }
        @media (min-width: 768px) {
          :host([data-wire-top][data-wire-bottom])::before,
          :host([data-size="base"][data-wire-top][data-wire-bottom])::before,
          :host([data-wire-top-disabled][data-wire-bottom-disabled])::before,
          :host([data-size="base"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
            margin-bottom: 2.125rem;
            margin-left: 0;
          }
        }
        :host([data-size="lg"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="lg"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 2.625rem;
        }
        :host([data-size="xl"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="xl"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 3.125rem;
        }
        /* data-wire-count */
        :host([data-wire-count="1"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="1"]:not([data-wire-top]))::before,
        :host([data-wire-count="1"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="1"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="2"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="2"]:not([data-wire-top]))::before,
        :host([data-wire-count="2"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="2"]:not([data-wire-top-disabled]))::before {
          margin-left: 3.125rem;
        }
        :host([data-wire-count="3"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="3"]:not([data-wire-top]))::before,
        :host([data-wire-count="3"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="3"]:not([data-wire-top-disabled]))::before {
          margin-left: 2.625rem;
        }
        :host([data-wire-count="5"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="5"]:not([data-wire-top]))::before,
        :host([data-wire-count="5"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="5"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="6"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="6"]:not([data-wire-top]))::before,
        :host([data-wire-count="6"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="6"]:not([data-wire-top-disabled]))::before {
          margin-left: 1.625rem;
        }
        :host([data-wire-count="7"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="7"]:not([data-wire-top]))::before,
        :host([data-wire-count="7"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="7"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="8"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="8"]:not([data-wire-top]))::before,
        :host([data-wire-count="8"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="8"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="9"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="9"]:not([data-wire-top]))::before,
        :host([data-wire-count="9"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="9"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="10"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="10"]:not([data-wire-top]))::before,
        :host([data-wire-count="10"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="10"]:not([data-wire-top-disabled]))::before {
          margin-left: 1.125rem;
        }
        :host([data-wire-count="2"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="2"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 3.125rem;
          margin-left: 0;
        }
        :host([data-wire-count="3"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="3"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 2.625rem;
          margin-left: 0;
        }
        :host([data-wire-count="5"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="5"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="6"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="6"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 1.625rem;
          margin-left: 0;
        }
        :host([data-wire-count="7"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="7"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="8"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="8"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="9"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="9"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="10"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="10"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 1.125rem;
          margin-left: 0;
        }
        @media (min-width: 768px) {
          :host([data-wire-count="1"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-wire-count="1"]:not([data-wire-top]))::before,
          :host([data-wire-count="1"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="1"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="2"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-wire-count="2"]:not([data-wire-top]))::before,
          :host([data-wire-count="2"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="2"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="3"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-wire-count="3"]:not([data-wire-top]))::before,
          :host([data-wire-count="3"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="3"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="5"]:not([data-wire-top]))::before,
          :host([data-wire-count="5"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="5"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="6"]:not([data-wire-top]))::before,
          :host([data-wire-count="6"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="6"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="7"]:not([data-wire-top]))::before,
          :host([data-wire-count="7"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="7"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="8"]:not([data-wire-top]))::before,
          :host([data-wire-count="8"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="8"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="9"]:not([data-wire-top]))::before,
          :host([data-wire-count="9"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="9"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="10"]:not([data-wire-top]))::before,
          :host([data-wire-count="10"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="10"]:not([data-wire-top-disabled]))::before {
            margin-left: 0;
          }
          :host([data-wire-count="2"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="2"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="3"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="3"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="5"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="5"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="6"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="6"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="7"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="7"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="8"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="8"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="9"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="9"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="10"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="10"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            margin-right: 0;
          }
        }
        /* nqubit = 2 */
      </style>`}}}function es(t){return class extends t{set targets(t){this.setAttribute("data-targets",t.sort().join())}get targets(){const t=this.getAttribute("data-targets");return null===t||""===t?[]:t.split(",").map((t=>parseInt(t))).sort()}}}function is(t){class n extends t{constructor(){super(...arguments),this.wireTop=!1,this.wireTopDisabled=!1,this.wireBottom=!1,this.wireBottomDisabled=!1}disconnectFromAll(){this.wireTop=!1,this.wireBottom=!1}get wiresStyle(){return $i`<style>
        #wires {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
          overflow: visible;
          transform: rotate(90deg);
          transform-origin: center;
        }
        @media (min-width: 768px) {
          #wires {
            transform: rotate(0);
          }
        }
        #wire-top,
        #wire-bottom {
          display: none;
          stroke-width: 4;
        }
        :host([data-wire-top]) #wire-top {
          display: block;
          color: var(--colors-gate, #43c000);
          transform-origin: top;
          transform: translateY(-25%) scaleY(1.5);
        }
        :host([data-wire-top-disabled]) #wire-top {
          display: block;
          color: var(--colors-eel, #4b4b4b);
          transform-origin: top;
          transform: translateY(-25%) scaleY(1.5);
        }
        :host([data-wire-bottom]) #wire-bottom {
          display: block;
          color: var(--colors-gate, #43c000);
          transform-origin: bottom;
          transform: translateY(25%) scaleY(1.5);
        }
        :host([data-wire-bottom-disabled]) #wire-bottom {
          display: block;
          color: var(--colors-eel, #4b4b4b);
          transform-origin: bottom;
          transform: translateY(25%) scaleY(1.5);
        }
      </style>`}get wiresSvg(){return $i`<svg
        id="wires"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          id="wire-top"
          x1="50"
          y1="0"
          x2="50"
          y2="50"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></line>
        <line
          id="wire-bottom"
          x1="50"
          y1="100"
          x2="50"
          y2="50"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></line>
      </svg>`}}return e([f,i("design:type",Object)],n.prototype,"wireTop",void 0),e([f,i("design:type",Object)],n.prototype,"wireTopDisabled",void 0),e([f,i("design:type",Object)],n.prototype,"wireBottom",void 0),e([f,i("design:type",Object)],n.prototype,"wireBottomDisabled",void 0),n}var ns,os,rs,ss,as,cs,ls,ds,us,ps,hs,fs,ms,gs;t.MeasurementGateElement=ns=class MeasurementGateElement extends(oi(Qr(Jr(Yr(ts(Fr(Kr(HTMLElement)))))))){constructor(){super(...arguments),this.iconType="transparent",this.value=-1,this.flag=""}static create({dragAndDrop:t=!1,flag:e=""}={}){const i=new ns;return i.dragAndDrop=t,i.flag=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}
        ${this.labelStyle}

        <style>
          #icon {
            color: var(--colors-superposition, #ce82ff);
            transform: rotate(90deg);
          }
          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }
          :host([data-snapped][data-value="0"]) #icon,
          :host([data-snapped][data-value="1"]) #icon {
            color: var(--colors-swan, #e5e5e5);
          }
          #value {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            writing-mode: vertical-lr;
          }
          @media (min-width: 768px) {
            #value {
              writing-mode: horizontal-tb;
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
          }
          :host([data-snapped]) #value {
            display: block;
          }
          #value::after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          :host([data-wire-count="1"]) #value,
          :host([data-wire-count="2"]) #value,
          :host([data-wire-count="3"]) #value {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          :host([data-wire-count="4"]) #value,
          :host([data-wire-count="5"]) #value,
          :host([data-wire-count="6"]) #value {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-wire-count="7"]) #value,
          :host([data-wire-count="8"]) #value,
          :host([data-wire-count="9"]) #value,
          :host([data-wire-count="10"]) #value {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-value="0"]) #value {
            color: var(--colors-cardinal, #ff4b4b);
          }
          :host([data-value="0"]) #value::after {
            content: "0";
          }
          :host([data-value="1"]) #value {
            color: var(--colors-magnitude, #1cb0f6);
          }
          :host([data-value="1"]) #value::after {
            content: "1";
          }
        </style>

        <div id="body">
          ${this.iconSvg}
          <div id="value"></div>
        </div>`,this.shadowRoot)}toJson(){return""===this.flag?'"Measure"':`"Measure>${this.flag}"`}serialize(){return{type:Qe,flag:this.flag}}get iconSvg(){return $i`
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 35A16 16 0 0 1 40 35" fill="none" />
        <path d="M24.5 33L35 15" />
        <circle
          cx="24.5"
          cy="33"
          r="1.5"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    `}},e([f,i("design:type",Object)],t.MeasurementGateElement.prototype,"iconType",void 0),e([f,i("design:type",Object)],t.MeasurementGateElement.prototype,"value",void 0),e([f,i("design:type",Object)],t.MeasurementGateElement.prototype,"flag",void 0),t.MeasurementGateElement=ns=e([b],t.MeasurementGateElement),t.QuantumSimulatorElement=class QuantumSimulatorElement extends HTMLElement{constructor(){super(...arguments),this.serviceWorker="/serviceworker.js"}clearCircuit(){var t;null===(t=this.quantumCircuit)||void 0===t||t.clear()}connectedCallback(){this.circleNotation=null,this.visibleQubitCircleKets=[],this.addEventListener("circuit.load",this.registerQuantumCircuit),this.addEventListener("circuit.load",this.updateJsonUrl),this.addEventListener("dragAndDroppable.mouseenter",this.setDragAndDroppableStyleCursorGrab),this.addEventListener("dragAndDroppable.grab",this.setDragAndDroppableStyleCursorGrabbing),this.addEventListener("dragAndDroppable.grab",this.setStyleCursorGrabbing),this.addEventListener("dragAndDroppable.grab",this.prepareDraggableDrop),this.addEventListener("dragAndDroppable.ungrab",this.removeDragAndDroppableCursorStyle),this.addEventListener("dragAndDroppable.ungrab",this.setStyleCursorAuto),this.addEventListener("dragAndDroppable.ungrab",this.proxyDraggableUngrabEvent),this.addEventListener("dragAndDroppable.ungrab",this.updateJsonUrl),this.addEventListener("dragAndDroppable.enddragging",this.setStyleCursorAuto),this.addEventListener("dragAndDroppable.enddragging",this.finishEditing),this.addEventListener("dragAndDroppable.trash",this.setStyleCursorAuto),this.addEventListener("dragAndDroppable.trash",this.resizeCircuit),this.addEventListener("dragAndDroppable.trash",this.updateJsonUrl),this.addEventListener("dragAndDroppable.leave",this.run),this.addEventListener("dragAndDroppable.snapToNewDropzone",this.addNewStep),this.addEventListener("step.drop",this.resizeCircuit),this.addEventListener("step.drop",this.run),this.addEventListener("step.mouseenter",this.setStyleCursorPointerUnlessEditing),this.addEventListener("step.mouseenter",this.activateHoveredStep),this.addEventListener("step.mouseenter",this.runUnlessEditing),this.addEventListener("step.mouseleave",this.setStyleCursorAutoUnlessEditing),this.addEventListener("step.click",this.setBreakpoint),this.addEventListener("step.click",this.run),this.addEventListener("step.snap",this.run),this.addEventListener("circuit.mouseleave",this.run),this.addEventListener("circle-notation.load",this.registerCircleNotation),this.addEventListener("circle-notation.visibilityChanged",this.updateVisibleQubitCircleKets),this.addEventListener("circle-notation.visibilityChanged",this.run),this.addEventListener("run-circuit-button.load",this.registerRunCircuitButton),this.addEventListener("run-circuit-button.click",this.run),this.addEventListener("operation.popup.change",this.run),this.addEventListener("operation.update",this.updateJsonUrl),this.worker=new Worker(this.serviceWorker),this.worker.addEventListener("message",(e=>{var i,n;q.notNull(this.quantumCircuit);const o=this.quantumCircuit.activeStep,r=this.quantumCircuit.breakpoint,s=o||r;q.notNull(s);const a=this.fetchStepIndex(s),c=e.data;if("step"===c.type){const e=this.quantumCircuit.steps[c.step];for(const t in c.blochVectors){const i=e.dropzones[t].draggableElement;if(i){const e=c.blochVectors[t];i.x=e[0],i.y=e[1],i.z=e[2]}}if(c.measuredBits){const i=c.measuredBits,n=e.dropzones;for(const e in i){const o=n[e].draggableElement;o instanceof t.MeasurementGateElement&&(o.value=i[e])}}for(const t of e.ifableGates)""!==t.if&&(t.disabled=!c.flags[t.if]);if(a===c.step){const t={};for(const e in c.amplitudes){const i=c.amplitudes[e];t[e]=new k(i[0],i[1])}null===(i=this.circleNotation)||void 0===i||i.setAmplitudes(t)}}else"finish"===c.type&&(null===(n=this.runCircuitButton)||void 0===n||n.enable())}))}registerQuantumCircuit(t){this.quantumCircuit=t.target}registerCircleNotation(t){this.circleNotation=t.target}registerRunCircuitButton(t){this.runCircuitButton=t.target}updateVisibleQubitCircleKets(t){const e=t.detail;q.notNull(e),this.visibleQubitCircleKets=e}runUnlessEditing(){q.notNull(this.quantumCircuit),this.quantumCircuit.editing||this.run()}run(){if(null===this.circleNotation)return;q.notNull(this.quantumCircuit);const t=this.quantumCircuit.activeStep,e=this.quantumCircuit.breakpoint,i=t||e;q.notNull(i);const n=this.fetchStepIndex(i),o=this.quantumCircuit.serializedSteps;q.need(o.length>0,"non-zero step length");const r=this.quantumCircuit.qubitCount;this.circleNotation.qubitCount=r,this.worker.postMessage({json:this.quantumCircuit.toJson(),qubitCount:r,stepIndex:n,steps:this.quantumCircuit.serializedSteps,targets:this.visibleQubitCircleKets})}setBreakpoint(t){const e=t.detail.element;for(const t of this.quantumCircuit.steps)t.breakpoint=!1;e.breakpoint=!0}activateHoveredStep(t){if(q.notNull(this.quantumCircuit),this.quantumCircuit.editing)return;const e=t.detail.element;for(const t of this.quantumCircuit.steps)t.active=!1;e.active=!0}resizeCircuit(){this.quantumCircuit.resize()}fetchStepIndex(t){const e=this.quantumCircuit.steps.indexOf(t);if(-1===e)throw new Error("CircuitStep not found");return e}setDragAndDroppableStyleCursorGrab(t){var e;const i=t.detail.element;(null===(e=this.quantumCircuit)||void 0===e?void 0:e.editing)?i.style.cursor="grabbing":i.style.cursor="grab"}setDragAndDroppableStyleCursorGrabbing(t){t.detail.element.style.cursor="grabbing"}setStyleCursorGrabbing(){document.documentElement.style.cursor="grabbing"}removeDragAndDroppableCursorStyle(t){t.detail.element.style.cursor=""}setStyleCursorAuto(){document.documentElement.style.cursor="auto"}setStyleCursorAutoUnlessEditing(){q.notNull(this.quantumCircuit),this.quantumCircuit.editing||(document.documentElement.style.cursor="auto")}setStyleCursorPointerUnlessEditing(){q.notNull(this.quantumCircuit),this.quantumCircuit.editing||(document.documentElement.style.cursor="pointer")}prepareDraggableDrop(t){t.stopPropagation();const e=t.detail.element;q.notNull(e),q.notNull(this.quantumCircuit),this.quantumCircuit.prepareDraggableDrop(),e.setSnapTargets(this.quantumCircuit.dropzones,this.quantumCircuit.wireCount)}proxyDraggableUngrabEvent(t){var e;const i=t.detail;q.notNull(i),q.notNull(i.x),q.notNull(i.y),null===(e=this.quantumCircuit)||void 0===e||e.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab",{detail:{x:i.x,y:i.y},bubbles:!1}))}finishEditing(t){var e;const i=t.detail;q.notNull(i),q.notNull(i.x),q.notNull(i.y),null===(e=this.quantumCircuit)||void 0===e||e.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:i.x,y:i.y},bubbles:!1}))}updateJsonUrl(){q.notNull(this.quantumCircuit),q.updateUrlJson(this.quantumCircuit.toJson())}addNewStep(t){const e=t,i=e.detail.element,n=e.detail.element,o=e.detail.stepIndex,r=e.detail.wireIndex;q.notNull(this.quantumCircuit);const s=this.quantumCircuit.appendCircuitStepAfter(o);s.dropzones[r].assign(i),n.updateSnapTargetInfo(s.dropzones)}},e([f,i("design:type",Object)],t.QuantumSimulatorElement.prototype,"serviceWorker",void 0),t.QuantumSimulatorElement=e([b],t.QuantumSimulatorElement),t.BlochDisplayElement=os=class BlochDisplayElement extends(Qr(Yr(Fr(Kr(HTMLElement))))){constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}static create({dragAndDrop:t=!1}={}){const e=new os;return e.dragAndDrop=t,e}showPopup(){this.isCircuitDraggable()?this.showInspector():this.showHelp()}showInspector(){if(this.grabbed)return;if(this._tippy)return;const t=this.blochInspectorPopupContent();Ie(this,{allowHTML:!0,animation:!1,arrow:te+te,delay:0,placement:"auto",theme:"qni",onShow(e){e.setContent(t)}}).show()}blochInspectorPopupContent(){const t=document.createDocumentFragment();return Li($i`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d"
              >${this.forceSigned(this.d)}</span
            >, ϕ:
            <span class="bloch-display__inspector-phi"
              >${this.forceSigned(this.phi,2)}</span
            >, θ:
            <span class="bloch-display__inspector-theta"
              >${this.forceSigned(this.theta,2)}</span
            >
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x"
              >${this.forceSigned(this.x)}</span
            >, y:
            <span class="bloch-display__inspector-y"
              >${this.forceSigned(this.y)}</span
            >, z:
            <span class="bloch-display__inspector-z"
              >${this.forceSigned(this.z)}</span
            >
          </section>
        </div>
      `,t),t}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.updateBlochVector(),this.initDragAndDrop())}disconnectedCallback(){const t=this._tippy;null==t||t.destroy()}attributeChangedCallback(t,e,i){this.body&&e!==i&&("data-draggable-source"!==t?"data-draggable-shadow"!==t?null!==i&&("data-x"===t&&(this.x=parseFloat(i)),"data-y"===t&&(this.y=parseFloat(i)),"data-z"===t&&(this.z=parseFloat(i)),this.d=this.vectorLength(),this.phi=this.calculatePhi(),this.theta=this.calculateTheta(),this.updateBlochVector()):this.body.classList.toggle("draggable-shadow"):this.body.classList.toggle("draggable-source"))}update(){this.d=this.vectorLength(),this.phi=this.calculatePhi(),this.theta=this.calculateTheta();const t=t=>$i`<div
        class="vector-line-rect"
        style="transform: rotateY(${t}deg)"
      ></div>`,e=(t,e)=>$i`<div
        class="vector-end-circle"
        style="transform: rotate${e}(${t}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`;Li($i`${this.sizeableStyle} ${this.dragAndDroppableStyle}

        <style>
          #body.draggable-source::after {
            opacity: 100;
            border-color: var(--colors-fox, #ff9600);
          }

          #body.draggable-shadow::after {
            opacity: 100;
            border-color: var(--colors-superposition, #ce82ff);
          }

          #background {
            border-radius: 9999px;
            background-color: var(--colors-snow, #ffffff);
          }

          #sphere-border {
            box-sizing: border-box;
            border-style: solid;
            border-radius: 9999px;
            border-width: 2px;
            border-color: var(--colors-hare, #afafaf);
            background-color: rgba(67, 192, 0, 0.1);
          }

          #sphere-lines {
            width: 100%;
            height: 100%;
            stroke: currentColor;
            color: var(--colors-hare, #afafaf);
          }

          #perspective {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            perspective-origin: top right;
          }

          :host([data-size="xs"]) #perspective {
            perspective: 2rem;
          }

          :host([data-size="sm"]) #perspective {
            perspective: 3rem;
          }

          :host #perspective,
          :host([data-size="base"]) #perspective {
            perspective: 4rem;
          }

          :host([data-size="lg"]) #perspective {
            perspective: 5rem;
          }

          :host([data-size="xl"]) #perspective {
            perspective: 6rem;
          }

          #vector {
            position: relative;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
          }

          #vector-line {
            position: absolute;
            width: 100%;
            height: 0;
            bottom: 50%;
            transform-style: preserve-3d;
          }

          .vector-line-rect {
            position: absolute;
            left: 0px;
            right: 0px;
            background-color: var(--colors-eel, #4b4b4b);
            margin-left: auto;
            margin-right: auto;
            transform-origin: bottom;
            height: 100%;
            width: 2px;
            transform-style: preserve-3d;
          }

          #vector-end {
            position: absolute;
            width: 100%;
            transform-style: preserve-3d;
          }

          .vector-end-circle {
            position: absolute;
            left: 0px;
            right: 0px;
            background-color: var(--colors-cardinal, #ff4b4b);
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
            height: 6px;
            width: 6px;
          }

          :host([data-size="xs"]) .vector-end-circle {
            height: 4px;
            width: 4px;
          }

          :host([data-size="lg"]) .vector-end-circle,
          :host([data-size="xl"]) .vector-end-circle {
            height: 8px;
            width: 8px;
          }

          #body[data-d="0"] .vector-end-circle {
            background-color: var(--colors-magnitude, #1cb0f6);
          }

          .absolute {
            position: absolute;
          }

          .inset-0 {
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
          }
        </style>

        <div
          id="body"
          data-target="bloch-display.body"
          data-d="${this.d}"
          data-action="mouseenter:bloch-display#showPopup mouseup:bloch-display#showPopup"
        >
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" class="absolute inset-0">
            <svg
              id="sphere-lines"
              class="absolute inset-0"
              viewBox="0 0 48 48"
              fill="none"
              stroke-width="1"
            >
              <line x1="0%" y1="50%" x2="100%" y2="50%" />
              <line x1="50%" y1="0%" x2="50%" y2="100%" />
              <line x1="35%" y1="65%" x2="65%" y2="35%" />
              <ellipse cx="50%" cy="50%" rx="18%" ry="50%" />
              <ellipse cx="50%" cy="50%" rx="50%" ry="18%" />
            </svg>
            <div id="perspective">
              <div id="vector" data-target="bloch-display.vector">
                <div id="vector-line" data-target="bloch-display.vectorLine">
                  ${t(0)} ${t(20)}
                  ${t(40)} ${t(60)}
                  ${t(80)} ${t(100)}
                  ${t(120)} ${t(140)}
                  ${t(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${e(0,"Y")} ${e(20,"Y")}
                  ${e(40,"Y")} ${e(60,"Y")}
                  ${e(80,"Y")} ${e(100,"Y")}
                  ${e(120,"Y")} ${e(140,"Y")}
                  ${e(160,"Y")} ${e(90,"X")}
                </div>
              </div>
            </div>
          </div>
        </div>`,this.shadowRoot)}toJson(){return'"Bloch"'}serialize(){return{type:Xe}}updateBlochVector(){const t=this.vectorEndCircles[0].offsetWidth;this.vectorLine.style.height=`calc(${100*this.d/2}% - ${t/2}px)`,this.vectorEnd.style.bottom=`calc(50% + ${100*this.d/2}% + ${t/2}px)`,0!==this.d&&(this.vector.style.transform=`rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`)}get d(){const t=this.getAttribute("data-d");if(null===t)throw new Error("data-d not set");return parseFloat(t)}set d(t){var e;this.setAttribute("data-d",t.toString()),null===(e=this.body)||void 0===e||e.setAttribute("data-d",t.toString())}vectorLength(){return parseFloat(Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z).toFixed(4))}set phi(t){this.setAttribute("data-phi",t.toString())}get phi(){const t=this.getAttribute("data-phi");if(null===t)throw new Error("data-phi not set");return parseFloat(t)}calculatePhi(){return 180*Math.atan2(this.y,this.x)/Math.PI}set theta(t){this.setAttribute("data-theta",t.toString())}get theta(){const t=this.getAttribute("data-theta");if(null===t)throw new Error("data-theta not set");return parseFloat(t)}calculateTheta(){return 180*Math.max(0,Math.PI/2-Math.atan2(this.z,Math.sqrt(this.y*this.y+this.x*this.x)))/Math.PI}forceSigned(t,e=4){return(t>=0?"+":"")+t.toFixed(e)}isCircuitDraggable(){return null!==this.parentElement&&"CIRCUIT-DROPZONE"===this.parentElement.tagName}},e([u,i("design:type",HTMLElement)],t.BlochDisplayElement.prototype,"body",void 0),e([u,i("design:type",HTMLElement)],t.BlochDisplayElement.prototype,"vectorLine",void 0),e([u,i("design:type",HTMLElement)],t.BlochDisplayElement.prototype,"vectorEnd",void 0),e([u,i("design:type",HTMLElement)],t.BlochDisplayElement.prototype,"vector",void 0),e([p,i("design:type",Array)],t.BlochDisplayElement.prototype,"vectorEndCircles",void 0),e([f,i("design:type",Object)],t.BlochDisplayElement.prototype,"x",void 0),e([f,i("design:type",Object)],t.BlochDisplayElement.prototype,"y",void 0),e([f,i("design:type",Object)],t.BlochDisplayElement.prototype,"z",void 0),t.BlochDisplayElement=os=e([b],t.BlochDisplayElement),t.CircuitBlockElement=class CircuitBlockElement extends HTMLElement{constructor(){super(...arguments),this.comment="",this.finalized=!1}finalize(){this.finalized=!0}connectedCallback(){this.attachShadow({mode:"open"}),this.update()}update(){Li($i`<style>
          :host {
            position: relative;
          }
          :host::before,
          :host::after {
            position: absolute;
            display: flex;
            justify-content: center;
            color: var(--colors-magnitude, #1cb0f6);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            white-space: nowrap;
            content: attr(data-comment) "";
            writing-mode: vertical-lr;
          }
          :host::before {
            top: 0;
            right: 0;
            bottom: 0;
            left: unset;
          }
          :host::after {
            top: 0;
            left: 0;
            bottom: 0;
            right: unset;
          }
          @media (min-width: 768px) {
            :host::before,
            :host::after {
              writing-mode: horizontal-tb;
              left: 0;
              right: 0;
            }
            :host::before {
              top: 0;
              bottom: unset;
            }
            :host::after {
              bottom: 0;
              top: unset;
            }
          }
          #body {
            display: flex;
            border-style: solid;
            border-color: var(--colors-magnitude, #1cb0f6);
            background-color: rgba(229, 229, 229, 0.3);
            flex-direction: column;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top-width: 0;
            border-right-width: 2px;
            border-bottom-width: 0;
            border-left-width: 2px;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: row;
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
              margin-left: 0;
              margin-right: 0;
              padding: 2rem 0;
              border-top-width: 2px;
              border-right-width: 0;
              border-bottom-width: 2px;
              border-left-width: 0;
            }
          }
        </style>

        <div id="body">
          <slot></slot>
        </div>`,this.shadowRoot)}},e([f,i("design:type",Object)],t.CircuitBlockElement.prototype,"comment",void 0),e([f,i("design:type",Object)],t.CircuitBlockElement.prototype,"finalized",void 0),t.CircuitBlockElement=e([b],t.CircuitBlockElement),t.CircuitStepElement=class CircuitStepElement extends HTMLElement{constructor(){super(...arguments),this.active=!1,this.snap=!1,this.breakpoint=!1,this.keep=!1,this.shadow=!1}get isInBlock(){return null!==this.closest("circuit-block")}get block(){return this.closest("circuit-block")}get wireCount(){return this.dropzones.length}get qubitCount(){let t=this.wireCount;const e=this.dropzones;for(let i=t-1;i>=0&&!e[i].occupied;i--)t--;return t}get dropzones(){return this.elements("circuit-dropzone")}get lastDropzone(){return this.dropzones[this.wireCount-1]}get isEmpty(){return!this.keep&&this.dropzones.every((t=>!t.occupied))}dropzone(t){const e=this.dropzones[t];if(void 0===e)throw new Error("Dropzone not found");return e}dropzoneIndex(t){const e=this.dropzones.indexOf(t);return-1===e?null:e}bit(t){const e=t.parentElement;if(null===e)throw new Error("Dropzone not found");return this.dropzones.indexOf(e)}get index(){const t=this.quantumCircuitElement();if(null===t)return null;const e=t.steps.indexOf(this);if(-1===e)throw new Error("circuitStep not found");return e}prev(){const t=this.index;if(null===t||0===t)return null;const e=this.quantumCircuitElement();if(null===e)return null;return e.steps[t-1]||null}next(){const t=this.index;if(null===t)return null;const e=this.quantumCircuitElement();if(null===e)return null;return e.steps[t+1]||null}activate(){this.dispatchEvent(new CustomEvent("step.click",{detail:{element:this},bubbles:!0}))}appendDropzone(){const e=new t.CircuitDropzoneElement;return this.append(e),e}appendOperation(e){const i=new t.CircuitDropzoneElement;i.append(e),i.occupied=!0,this.append(i)}remove(){var t;null===(t=this.parentElement)||void 0===t||t.removeChild(this)}quantumCircuitElement(){return this.closest("quantum-circuit")}serialize(){return this.dropzones.map((t=>t.serialize()))}toJson(){const t=this.dropzones.map((t=>t.toJson()));for(;t.length>0&&"1"===t[t.length-1];)t.pop();return 0===t.length?"[1]":`[${t.join(",")}]`}attributeChangedCallback(t,e,i){if(e!==i&&"data-shadow"===t&&null===i)for(const t of this.dropzones)t.shadow=!1}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.slotEl.addEventListener("slotchange",this.handleSlotChange.bind(this)),this.updateConnections(),this.updateWires(),this.dispatchStepLoadEvent(),this.addEventListener("mouseenter",this.dispatchStepMouseenterEvent),this.addEventListener("mouseleave",this.dispatchStepMouseleaveEvent),this.addEventListener("dropzone.snap",this.dispatchStepMouseenterEvent),this.addEventListener("dropzone.snap",this.dispatchStepSnapEvent),this.addEventListener("dropzone.unsnap",this.dispatchStepUnsnapEvent),this.addEventListener("dropzone.grab",this.dispatchStepSnapEvent),this.addEventListener("dropzone.drop",this.dispatchStepDropEvent),this.addEventListener("dragAndDroppable.enddragging",this.unsnap),this.addEventListener("click",this.activate)}dispatchStepLoadEvent(){this.dispatchEvent(new CustomEvent("step.load",{detail:{element:this},bubbles:!0}))}dispatchStepMouseenterEvent(){this.dispatchEvent(new CustomEvent("step.mouseenter",{detail:{element:this},bubbles:!0}))}dispatchStepMouseleaveEvent(){this.dispatchEvent(new CustomEvent("step.mouseleave",{detail:{element:this},bubbles:!0}))}dispatchStepSnapEvent(t){const e=t.detail.element;this.dispatchEvent(new CustomEvent("step.snap",{detail:{step:this,dropzone:e},bubbles:!0}))}dispatchStepUnsnapEvent(t){const e=t.detail.element;this.unsnap(),this.dispatchEvent(new CustomEvent("step.unsnap",{detail:{step:this,dropzone:e},bubbles:!0}))}dispatchStepDropEvent(){this.dispatchEvent(new CustomEvent("step.drop",{detail:{element:this},bubbles:!0}))}unsnap(){this.snap=!1}update(){Li($i`<style>
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          @media (min-width: 768px) {
            :host {
              flex-direction: row;
            }
          }
          :host([data-shadow]) {
            height: 0px;
          }
          @media (min-width: 768px) {
            :host([data-shadow]) {
              height: auto;
              width: 0px;
            }
          }
          #body {
            display: flex;
            flex-direction: row-reverse;
          }
          ::slotted(circuit-dropzone[data-wire-count="1"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="2"]:nth-of-type(n + 2)) {
            margin-right: ${Br.size.xl/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="3"]:nth-of-type(n + 2)) {
            margin-right: ${Br.size.lg/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="4"]:nth-of-type(n + 2)) {
            margin-right: ${Br.size.base/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="5"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="6"]:nth-of-type(n + 2)) {
            margin-right: ${Br.size.sm/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="7"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="8"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="9"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="10"]:nth-of-type(n + 2)) {
            margin-right: ${Br.size.xs/2}rem;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: column;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: ${Br.size.base/2}rem !important;
              margin-right: 0 !important;
            }
          }
          #breakpoint {
            position: relative;
            min-height: 0px;
            min-width: 100%;
          }
          @media (min-width: 768px) {
            #breakpoint {
              min-height: 100%;
              min-width: 0px;
            }
          }
          #breakpoint-line {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            z-index: 20;
            padding: 2px;
            margin-top: -2px;
            background-color: var(--colors-cardinal, #ff4b4b);
            opacity: 0;
          }
          @media (min-width: 768px) {
            #breakpoint-line {
              margin-top: 0;
              margin-left: -2px;
            }
          }
          :host([data-active]:not([data-breakpoint])) #breakpoint-line {
            opacity: 0.3;
          }
          :host([data-breakpoint]) #breakpoint-line {
            opacity: 0.8;
          }
        </style>

        <div id="body">
          <slot data-target="circuit-step.slotEl"></slot>
        </div>
        <div id="breakpoint">
          <div id="breakpoint-line"></div>
        </div>`,this.shadowRoot)}handleSlotChange(){if(this.shadow)for(const t of this.dropzones)t.shadow=!0;this.updateConnections(),this.updateWires();for(const t of this.dropzones)t.wireCount=this.wireCount}updateConnections(){for(const e of this.dropzones){e.wireTop=!1,e.wireBottom=!1;const i=e.draggableElement;"object"==typeof(t=i)&&null!==t&&"boolean"==typeof t.wireTop&&"boolean"==typeof t.wireBottom&&i.disconnectFromAll()}var t;if(2!==this.swapGates.length)for(const t of this.swapGates)t.disable();else{const t=this.swapGates,e=t.map((t=>this.bit(t)));for(const i of t)i.enable(),i.targets=e,i.wireTop=t.some((t=>this.bit(t)<this.bit(i))),i.wireBottom=t.some((t=>this.bit(t)>this.bit(i)));for(const t of this.dropzones){if(t.draggable)continue;const i=Math.min(...e),n=Math.max(...e);i<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<n&&(t.wireTop=!0,t.wireBottom=!0)}}for(const t of this.phaseGates){if(""===t.phi)continue;const e=this.phaseGates.filter((e=>e.phi===t.phi));for(const t of e)t.targets=e.map((t=>this.bit(t))),t.wireTop=e.some((e=>this.bit(e)<this.bit(t))),t.wireBottom=e.some((e=>this.bit(e)>this.bit(t)));for(const t of this.dropzones){if(t.draggable)continue;const i=e.map((t=>this.bit(t))),n=Math.min(...i),o=Math.max(...i);n<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<o&&(t.wireTop=!0,t.wireBottom=!0)}}if(0!==this.controlGates.length){if(1===this.controlGates.length&&0===this.controllableGates.length){const t=this.controlGates[0];return t.disable(),void(t.targets=[])}if(0===this.controllableGates.length)for(const t of this.controlGates)t.enable(),t.targets=this.controlBits,t.wireTop=this.controlGates.some((e=>this.bit(t)>this.bit(e))),t.wireBottom=this.controlGates.some((e=>this.bit(t)<this.bit(e)));else{for(const t of this.controllableGates)t.controls=this.controlBits,t.wireTop=this.controlGates.some((e=>this.bit(e)<this.bit(t)))||this.controllableGates.some((e=>this.bit(e)<this.bit(t))),t.wireBottom=this.controlGates.some((e=>this.bit(e)>this.bit(t)))||this.controllableGates.some((e=>this.bit(e)>this.bit(t)));for(const t of this.controlGates)t.enable(),t.targets=this.controllableBits,t.wireTop=this.controllableGates.some((e=>this.bit(t)>this.bit(e)))||this.controlGates.some((e=>this.bit(t)>this.bit(e))),t.wireBottom=this.controllableGates.some((e=>this.bit(t)<this.bit(e)))||this.controlGates.some((e=>this.bit(t)<this.bit(e)))}for(const t of this.dropzones){if(t.draggable)continue;const e=this.controlGates.map((t=>this.bit(t))).concat(this.controllableGates.map((t=>this.bit(t)))),i=e.sort()[0],n=e.sort().slice(-1)[0];i<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<n&&(t.wireTop=!0,t.wireBottom=!0)}}else for(const t of this.controllableGates)t.controls=[]}updateWireOfDropzone(t){const e=this.dropzones[t];q.notNull(e),e.updateWires()}updateWires(){for(const t of this.dropzones)t.updateWires()}get controlGates(){return this.snappedDraggables("control-gate")}get controlBits(){return this.controlGates.map((t=>this.bit(t)))}get controllableGates(){return this.snappedDraggables("h-gate,x-gate,y-gate,z-gate,phase-gate,rnot-gate,rx-gate,ry-gate,rz-gate,swap-gate")}get ifableGates(){return this.snappedDraggables("h-gate,x-gate,rnot-gate")}get controllableBits(){return this.controllableGates.map((t=>this.bit(t)))}get phaseGates(){return this.snappedDraggables("phase-gate")}get swapGates(){return this.snappedDraggables("swap-gate")}elements(t){return Array.from(this.querySelectorAll(t))}snappedDraggables(t){return this.elements(t).filter((t=>t.snapped))}},e([f,i("design:type",Object)],t.CircuitStepElement.prototype,"active",void 0),e([f,i("design:type",Object)],t.CircuitStepElement.prototype,"snap",void 0),e([f,i("design:type",Object)],t.CircuitStepElement.prototype,"breakpoint",void 0),e([f,i("design:type",Object)],t.CircuitStepElement.prototype,"keep",void 0),e([f,i("design:type",Object)],t.CircuitStepElement.prototype,"shadow",void 0),e([u,i("design:type",HTMLSlotElement)],t.CircuitStepElement.prototype,"slotEl",void 0),t.CircuitStepElement=e([b],t.CircuitStepElement),t.ControlGateElement=rs=class ControlGateElement extends(Qr(es(is(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))){constructor(){super(...arguments),this.iconType="transparent"}static create({dragAndDrop:t=!1}={}){const e=new rs;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"•"'}serialize(){return{type:"•",targets:this.targets}}get iconSvg(){return $i`
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      >
        <circle cx="24" cy="24" r="8" fill="currentColor" />
      </svg>
    `}},e([f,i("design:type",Object)],t.ControlGateElement.prototype,"iconType",void 0),t.ControlGateElement=rs=e([b],t.ControlGateElement),t.HGateElement=ss=class HGateElement extends(oi(Qr(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const i=new ss;return i.dragAndDrop=t,i.if=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"H<${this.if}"`:'"H"'}serialize(){return{type:"H",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L17 35M17 24L31 24M31 13L31 35" />
    </svg>`}},e([f,i("design:type",Object)],t.HGateElement.prototype,"iconType",void 0),t.HGateElement=ss=e([b],t.HGateElement),t.PhaseGateElement=as=class PhaseGateElement extends(oi(Qr(es(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="circle",this.phi=""}static create({phi:t="π/2",dragAndDrop:e=!1}={}){const i=new as;return i.phi=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.phi?'"P"':`"P(${this.phi.replace("/","_")})"`}serialize(){return{type:"P",phi:this.phi.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
    </svg>`}},e([f,i("design:type",Object)],t.PhaseGateElement.prototype,"iconType",void 0),e([f,i("design:type",Object)],t.PhaseGateElement.prototype,"phi",void 0),t.PhaseGateElement=as=e([b],t.PhaseGateElement),t.RnotGateElement=cs=class RnotGateElement extends(oi(Qr(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const i=new cs;return i.dragAndDrop=t,i.if=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"X^½<${this.if}"`:'"X^½"'}serialize(){return{type:Fe,controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
      <path d="M24 32L34 18M34 32L24 18" />
    </svg>`}},e([f,i("design:type",Object)],t.RnotGateElement.prototype,"iconType",void 0),t.RnotGateElement=cs=e([b],t.RnotGateElement),t.RxGateElement=ls=class RxGateElement extends(oi(Qr(es(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const i=new ls;return i.theta=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Rx"':`"Rx(${this.theta.replace("/","_")})"`}serialize(){return{type:Ue,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998L34.609 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}},e([f,i("design:type",Object)],t.RxGateElement.prototype,"iconType",void 0),e([f,i("design:type",Object)],t.RxGateElement.prototype,"theta",void 0),t.RxGateElement=ls=e([b],t.RxGateElement),t.RyGateElement=ds=class RyGateElement extends(oi(Qr(es(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const i=new ds;return i.theta=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Ry"':`"Ry(${this.theta.replace("/","_")})"`}serialize(){return{type:He,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002l-4.967 10.927M25.03 13.002l4.613 10.927m0 0L29.676 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}},e([f,i("design:type",Object)],t.RyGateElement.prototype,"iconType",void 0),e([f,i("design:type",Object)],t.RyGateElement.prototype,"theta",void 0),t.RyGateElement=ds=e([b],t.RyGateElement),t.RzGateElement=us=class RzGateElement extends(oi(Qr(es(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const i=new us;return i.theta=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Rz"':`"Rz(${this.theta.replace("/","_")})"`}serialize(){return{type:Ve,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:this.if}}get iconSvg(){return $i`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}},e([f,i("design:type",Object)],t.RzGateElement.prototype,"iconType",void 0),e([f,i("design:type",Object)],t.RzGateElement.prototype,"theta",void 0),t.RzGateElement=us=e([b],t.RzGateElement),t.SwapGateElement=ps=class SwapGateElement extends(Qr(es(ri(is(Ni(Jr(Yr(Fr(Kr(HTMLElement)))))))))){constructor(){super(...arguments),this.iconType="transparent"}static create({dragAndDrop:t=!1}={}){const e=new ps;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:swap-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Swap"'}serialize(){const t=this.targets;if(2!==t.length&&0!==t.length)throw new Error(`Invalid swap targets: ${this.targets.toString()}`);return{type:We,controls:this.controls,targets:t}}get iconSvg(){return $i`<svg
      id="icon"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>`}},e([f,i("design:type",Object)],t.SwapGateElement.prototype,"iconType",void 0),t.SwapGateElement=ps=e([b],t.SwapGateElement),t.WriteGateElement=hs=class WriteGateElement extends(Qr(Jr(Yr(Fr(Kr(HTMLElement)))))){constructor(){super(...arguments),this.iconType="transparent",this.value="0"}static create(t,{dragAndDrop:e=!1}={}){const i=new hs;return i.value=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){Li($i`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}

        <style>
          #icon {
            color: var(--colors-eel, #4b4b4b);
            transform: rotate(90deg);
          }
          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }
          #ket-label {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            writing-mode: vertical-lr;
          }
          #ket-label::after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          @media (min-width: 768px) {
            #ket-label {
              writing-mode: horizontal-tb;
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
          }
          :host([data-size="xs"]) #ket-label {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-size="sm"]) #ket-label {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          :host #ket-label,
          :host([data-size="base"]) #ket-label {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-size="lg"]) #ket-label {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          :host([data-size="xl"]) #ket-label {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          :host([data-wire-count="1"]) #ket-label,
          :host([data-wire-count="2"]) #ket-label,
          :host([data-wire-count="3"]) #ket-label {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          :host([data-wire-count="4"]) #ket-label,
          :host([data-wire-count="5"]) #ket-label,
          :host([data-wire-count="6"]) #ket-label {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-wire-count="7"]) #ket-label,
          :host([data-wire-count="8"]) #ket-label,
          :host([data-wire-count="9"]) #ket-label,
          :host([data-wire-count="10"]) #ket-label {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-value="0"]) #ket-label {
            color: var(--colors-cardinal, #ff4b4b);
          }
          :host([data-value="0"]) #ket-label::after {
            content: "0";
          }
          :host([data-value="1"]) #ket-label {
            color: var(--colors-magnitude, #1cb0f6);
          }
          :host([data-value="1"]) #ket-label::after {
            content: "1";
          }
        </style>

        <div id="body" data-action="mouseenter:write-gate#showHelp">
          ${this.iconSvg}
          <div id="ket-label"></div>
        </div>`,this.shadowRoot)}toJson(){return`"|${this.value}>"`}serialize(){if("0"!==this.value&&"1"!==this.value)throw new Error(`Invalid write value: ${this.value}`);return{type:"Write",value:parseInt(this.value)}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 10L9 40M34 10L40 24L34 40" />
    </svg>`}},e([f,i("design:type",Object)],t.WriteGateElement.prototype,"iconType",void 0),e([f,i("design:type",Object)],t.WriteGateElement.prototype,"value",void 0),t.WriteGateElement=hs=e([b],t.WriteGateElement),t.XGateElement=fs=class XGateElement extends(oi(Qr(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="circle"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const i=new fs;return i.dragAndDrop=t,i.if=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"X<${this.if}"`:'"X"'}serialize(){return{type:"X",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <line x1="50%" y1="28%" x2="50%" y2="72%" />
      <line x1="28%" y1="50%" x2="72%" y2="50%" />
    </svg>`}},e([f,i("design:type",Object)],t.XGateElement.prototype,"iconType",void 0),t.XGateElement=fs=e([b],t.XGateElement),t.YGateElement=ms=class YGateElement extends(Qr(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1}={}){const e=new ms;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:y-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Y"'}serialize(){return{type:"Y",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L24 24L31 13M24 24L24 35" />
    </svg>`}},e([f,i("design:type",Object)],t.YGateElement.prototype,"iconType",void 0),t.YGateElement=ms=e([b],t.YGateElement),t.ZGateElement=gs=class ZGateElement extends(Qr(ri(is(ts(Zr(Ni(Jr(Yr(Fr(Kr(HTMLElement))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1}={}){const e=new gs;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){Li($i`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:z-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Z"'}serialize(){return{type:"Z",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return $i`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L31 13L17 35L31 35" />
    </svg>`}},e([f,i("design:type",Object)],t.ZGateElement.prototype,"iconType",void 0),t.ZGateElement=gs=e([b],t.ZGateElement),t.QuantumCircuitElement=class QuantumCircuitElement extends HTMLElement{constructor(){super(...arguments),this.json="",this.updateUrl=!1,this.minWireCount=1,this.maxWireCount=10,this.wireCount=1,this.minStepCount=1,this.interactive=!1,this.editing=!1,this.qubitCount=1,this.circuitTitle="",this.breakpointStepIndex=0}get steps(){return Array.from(this.querySelectorAll("circuit-step"))}get breakpoint(){for(const t of this.steps)if(t.breakpoint)return t;return this.setBreakpoint(this.breakpointStepIndex),this.steps[this.breakpointStepIndex]}get activeStep(){for(const t of this.steps)if(t.active)return t;return null}get snappedStep(){for(const t of this.steps)if(t.snap)return t;return null}get serializedSteps(){const t=this.qubitCount;return this.steps.map((e=>e.serialize().slice(0,t)))}get emptySteps(){return this.steps.filter((t=>t.isEmpty))}get nonEmptySteps(){return this.steps.filter((t=>!t.isEmpty))}get largestStep(){let t=null,e=0;for(const i of this.steps)i.wireCount>0&&i.wireCount>e&&(t=i,e=i.wireCount);return t}get dropzones(){return Array.from(this.querySelectorAll("circuit-dropzone"))}get freeDropzones(){return this.dropzones.filter((t=>!t.occupied))}step(t){const e=this.steps[t];if(void 0===e)throw new Error(`step ${t} does not exist.`);return e}appendStep(){const e=new t.CircuitStepElement,i=this.blocks.slice(-1)[0]||null;return null===i||i.finalized?this.append(e):i.append(e),e}i(){return this.appendStep().keep=!0,this.resize(),this}h(...e){return this.applyOperation(new t.HGateElement,...e),this.resize(),this}x(...e){return this.applyOperation(new t.XGateElement,...e),this.resize(),this}y(...e){return this.applyOperation(new t.YGateElement,...e),this.resize(),this}z(...e){return this.applyOperation(new t.ZGateElement,...e),this.resize(),this}phase(e,...i){return this.applyOperation(t.PhaseGateElement.create({phi:e.toString()}),...i),this.resize(),this}rnot(...e){return this.applyOperation(new t.RnotGateElement,...e),this.resize(),this}rx(e,...i){return this.applyOperation(t.RxGateElement.create({theta:e.toString()}),...i),this.resize(),this}ry(e,...i){return this.applyOperation(t.RyGateElement.create({theta:e.toString()}),...i),this.resize(),this}rz(e,...i){return this.applyOperation(t.RzGateElement.create({theta:e.toString()}),...i),this.resize(),this}control(...e){return this.applyOperation(new t.ControlGateElement,...e),this.resize(),this}cnot(e,i){this.validateQubits(e,i);const n=this.appendStep(),o=Math.max(e,i)+1;for(let t=0;t<o;t++)n.appendDropzone();return n.dropzones[e].assign(new t.ControlGateElement),n.dropzones[i].assign(new t.XGateElement),this.resize(),this}ccnot(e,i,n){this.validateQubits(e,i,n);const o=this.appendStep(),r=Math.max(e,i,n)+1;for(let t=0;t<r;t++)o.appendDropzone();return o.dropzones[e].assign(new t.ControlGateElement),o.dropzones[i].assign(new t.ControlGateElement),o.dropzones[n].assign(new t.XGateElement),this.resize(),this}swap(e,i){return this.applyOperation(new t.SwapGateElement,e,i),this.resize(),this}bloch(...e){return this.applyOperation(new t.BlochDisplayElement,...e),this.resize(),this}write(e,...i){return this.applyOperation(t.WriteGateElement.create(e),...i),this.resize(),this}measure(...e){return this.applyOperation(new t.MeasurementGateElement,...e),this.resize(),this}block(e,i){const n=new t.CircuitBlockElement;return n.comment=e,n.setAttribute("data-targets","quantum-circuit.blocks"),this.append(n),i(this),n.finalize(),this}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.loadFromJson(),this.updateAllSteps(),this.updateQubitCount(),this.updateWireCount(),this.addEventListener("dragAndDroppable.ungrab",(()=>{this.editing=!1})),this.addEventListener("dragAndDroppable.ungrab",this.resize),this.addEventListener("dragAndDroppable.ungrab",this.enableDraggablesHover),this.addEventListener("dragAndDroppable.ungrab",this.dispatchStepMouseenterEvent),this.addEventListener("dragAndDroppable.enddragging",(()=>{this.editing=!1})),this.addEventListener("dragAndDroppable.enddragging",this.resize),this.addEventListener("dragAndDroppable.enddragging",this.enableDraggablesHover),this.addEventListener("dragAndDroppable.enddragging",this.dispatchStepMouseenterEvent),this.addEventListener("dragAndDroppable.trash",(()=>{this.editing=!1})),this.addEventListener("step.snap",this.snapStep),this.addEventListener("step.snap",this.updateStepConnections),this.addEventListener("step.snap",this.updateWires),this.addEventListener("step.snap",this.updateQubitCount),this.addEventListener("step.unsnap",this.unsnapStep),this.addEventListener("step.unsnap",this.updateStepConnections),this.addEventListener("step.unsnap",this.updateWires),this.addEventListener("step.unsnap",this.updateQubitCount),this.addEventListener("mouseleave",this.dispatchCircuitMouseLeaveEvent),this.dispatchEvent(new Event("circuit.load",{bubbles:!0}))}updateQubitCount(){const t=this.steps;if(0===t.length)return void(this.qubitCount=1);const e=Math.max(...t.map((t=>t.qubitCount)));this.qubitCount=0!==e?e:1}updateWireCount(){const t=this.steps;if(0===t.length)return void(this.wireCount=this.minWireCount);if(0===Math.max(...t.map((t=>t.qubitCount))))return void(this.wireCount=this.minWireCount);const e=t[0];q.notNull(e);const i=e.wireCount;this.wireCount=i>this.minWireCount?i:this.minWireCount}dispatchStepMouseenterEvent(t){const e=t.detail.x,i=t.detail.y,n=document.elementFromPoint(e,i),o=null==n?void 0:n.closest("circuit-step");null==o||o.dispatchStepMouseenterEvent()}dispatchCircuitMouseLeaveEvent(){for(const t of this.steps)t.active=!1;this.dispatchEvent(new Event("circuit.mouseleave",{bubbles:!0}))}setBreakpoint(t){const e=this.steps[t];this.breakpointStepIndex=t;for(const t of this.steps)t.breakpoint=!1;e.breakpoint=!0}snapStep(t){if(!this.interactive)return;const e=t.detail.step;for(const t of this.steps)this.editing&&(t.active=!1),t.snap=!1;this.editing&&(e.active=!0),e.snap=!0}unsnapStep(t){if(!this.interactive)return;const e=t.detail.step;this.editing&&(e.active=!1),e.snap=!1}update(){Li($i`<style>
          #body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: row;
            }
          }
        </style>

        <div id="body">
          <slot></slot>
        </div>`,this.shadowRoot)}applyOperation(e,...i){this.validateQubits(...i);const n=this.appendStep(),o=Math.max(...i)+1;for(let t=0;t<o;t++)n.appendDropzone();for(const o of i){const i=e.cloneNode();i instanceof t.PhaseGateElement&&(i.phi=e.phi),i instanceof t.RxGateElement&&(i.theta=e.theta),i instanceof t.RyGateElement&&(i.theta=e.theta),i instanceof t.RzGateElement&&(i.theta=e.theta),i instanceof t.WriteGateElement&&(i.value=e.value),n.dropzones[o].assign(i)}}validateQubits(...t){if(t.some((t=>t<0)))throw new Error("The index of the qubit must be greater than or equal to 0.")}loadFromJson(){let e,i=null;if(e=this.updateUrl?q.urlJson:this.json,""===e||"new"===e)return void(this.updateUrl&&this.resize());const n=JSON.parse(e);this.circuitTitle=(n.title||"").trim();for(const e of n.cols){const n=this.appendStep();for(const o of e){switch(!0){case/^\|0>$/.test(o):n.appendOperation(t.WriteGateElement.create("0",{dragAndDrop:this.updateUrl}));break;case/^\|1>$/.test(o):n.appendOperation(t.WriteGateElement.create("1",{dragAndDrop:this.updateUrl}));break;case/^H$/.test(o):n.appendOperation(t.HGateElement.create({dragAndDrop:this.updateUrl}));break;case/^H<(.+)$/.test(o):n.appendOperation(t.HGateElement.create({dragAndDrop:this.updateUrl,ifVar:RegExp.$1.trim()}));break;case/^X$/.test(o):n.appendOperation(t.XGateElement.create({dragAndDrop:this.updateUrl}));break;case/^X<(.+)$/.test(o):n.appendOperation(t.XGateElement.create({dragAndDrop:this.updateUrl,ifVar:RegExp.$1.trim()}));break;case/^Y$/.test(o):n.appendOperation(t.YGateElement.create({dragAndDrop:this.updateUrl}));break;case/^Z$/.test(o):n.appendOperation(t.ZGateElement.create({dragAndDrop:this.updateUrl}));break;case/^P$/.test(o):n.appendOperation(t.PhaseGateElement.create({dragAndDrop:this.updateUrl}));break;case/^P\((.+)\)$/.test(o):n.appendOperation(t.PhaseGateElement.create({phi:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^X\^½$/.test(o):{const e=new t.RnotGateElement;e.dragAndDrop=this.updateUrl,n.appendOperation(e);break}case/^X\^½<(.+)$/.test(o):{const e=new t.RnotGateElement;e.dragAndDrop=this.updateUrl,e.if=RegExp.$1.trim(),n.appendOperation(e);break}case/^Rx$/.test(o):n.appendOperation(t.RxGateElement.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Rx\((.+)\)$/.test(o):n.appendOperation(t.RxGateElement.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Ry$/.test(o):n.appendOperation(t.RyGateElement.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Ry\((.+)\)$/.test(o):n.appendOperation(t.RyGateElement.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Rz$/.test(o):n.appendOperation(t.RzGateElement.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Rz\((.+)\)$/.test(o):n.appendOperation(t.RzGateElement.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Swap$/.test(o):n.appendOperation(t.SwapGateElement.create({dragAndDrop:this.updateUrl}));break;case/^•$/.test(o):n.appendOperation(t.ControlGateElement.create({dragAndDrop:this.updateUrl}));break;case/^Bloch$/.test(o):n.appendOperation(t.BlochDisplayElement.create({dragAndDrop:this.updateUrl}));break;case/^Measure$/.test(o):n.appendOperation(t.MeasurementGateElement.create({dragAndDrop:this.updateUrl}));break;case/^Measure>(.+)$/.test(o):n.appendOperation(t.MeasurementGateElement.create({dragAndDrop:this.updateUrl,flag:RegExp.$1.trim()}));break;case/^[[{](.+)$/.test(o):{const e=RegExp.$1;n.remove(),i=new t.CircuitBlockElement,i.comment=e,i.setAttribute("data-targets","quantum-circuit.blocks"),this.append(i);break}case/^[\]}]$/.test(o):n.remove(),i.finalize();break;default:if(1!==o)throw new Error(`Unknown instruction: ${o}`);0===n.qubitCount?n.keep=!0:n.keep=!1,n.appendDropzone()}n.updateConnections()}}this.resize()}updateStepConnections(t){t.detail.step.updateConnections()}updateWires(t){const e=t.detail.dropzone.index();q.notNull(e);let i=!1;for(const t of this.steps){const n=t.dropzones[e];q.notNull(n),n.inputWireQuantum=i,"write-gate"===n.draggableTagName?(n.inputWireQuantum=i,n.outputWireQuantum=!0,i=!0):"measurement-gate"===n.draggableTagName?(n.inputWireQuantum=i,n.outputWireQuantum=!1,i=!1):(n.inputWireQuantum=i,n.outputWireQuantum=i)}}updateAllSteps(){for(const t of this.steps)t.updateWires(),t.updateConnections()}prepareDraggableDrop(){this.interactive=!0,this.editing=!0,this.disableDraggablesOnCircuitHover(),this.appendWire()}disableDraggablesOnCircuitHover(){for(const t of this.draggablesOnCircuit)t.hoverable=!1}enableDraggablesHover(){for(const t of this.draggables)t.hoverable=!0}get draggables(){return Array.from(this.querySelectorAll("[data-drag-and-drop]"))}get draggablesOnCircuit(){return Array.from(this.querySelectorAll("[data-drag-and-drop]:not([data-grabbed])"))}appendWire(){if(!(this.qubitCount>=this.maxWireCount)){this.wireCount+=1;for(const t of this.steps)t.appendDropzone()}}appendCircuitStepAfter(e){const i=new t.CircuitStepElement;i.shadow=!0;for(let t=0;t<this.wireCount;t++)i.appendDropzone();if(-1===e)this.prepend(i);else{const t=this.steps[e],n=t.parentElement;q.notNull(n),n.insertBefore(i,t.nextSibling)}return i}resize(){this.removeEmptySteps(),this.appendMinimumSteps(),this.removeLastEmptyWires()}removeEmptySteps(){for(const t of this.emptySteps)t.remove();for(const t of this.steps)t.shadow=!1}appendMinimumSteps(){const t=this.minStepCount-this.steps.length;for(let e=0;e<t;e++)this.appendStep();const e=this.largestStep&&this.largestStep.wireCount>this.minWireCount?this.largestStep.wireCount:this.minWireCount;for(const t of this.steps){const i=e-t.wireCount;for(let e=0;e<i;e++)t.appendDropzone()}}removeLastEmptyWires(){for(;this.steps.every((t=>t.wireCount>this.minWireCount&&!t.lastDropzone.occupied));)for(const t of this.steps)t.lastDropzone.remove();const t=this.steps[0];q.notNull(t),this.wireCount=t.wireCount}clear(){q.updateUrlJson('{"cols":[]}'),location.reload()}toJson(){let t=!1;const e=[];for(const i of this.nonEmptySteps){if(i.isInBlock){if(!t){const n=i.block;e.push(`["[${n.comment}"]`),t=!0}}else t&&(e.push('["]"]'),t=!1);e.push(i.toJson())}return t&&e.push('["]"]'),""!==this.circuitTitle?`{"cols":[${e.join(",")}],"title":"${this.circuitTitle}"}`:`{"cols":[${e.join(",")}]}`}},e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"json",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"updateUrl",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"minWireCount",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"maxWireCount",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"wireCount",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"minStepCount",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"interactive",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"editing",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"qubitCount",void 0),e([f,i("design:type",Object)],t.QuantumCircuitElement.prototype,"circuitTitle",void 0),e([p,i("design:type",Array)],t.QuantumCircuitElement.prototype,"blocks",void 0),t.QuantumCircuitElement=e([b],t.QuantumCircuitElement),t.CircleNotationElement=class CircleNotationElement extends HTMLElement{constructor(){super(...arguments),this.qubitCount=1,this.size="",this.magnitudes="1.0",this.phases="",this.multiQubits=!1,this.showKets=!1}setAmplitudes(t){const e=this.qubitCircles;for(const[i,n]of Object.entries(t)){const t=e[parseInt(i)];t.setAttribute("data-amplitude-real",n.real.toString()),t.setAttribute("data-amplitude-imag",n.imag.toString());const o=n.abs();if(this.setRoundedMagnitude(t,o),0===o)continue;const r=n.phase()/Math.PI*180;this.setRoundedPhase(t,r)}}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initQubitCirclePopup(this.qubitCircles),this.multiQubits&&(this.startQubitCircleVisibilityObserver(),this.dispatchLoadEvent()))}dispatchLoadEvent(){this.dispatchEvent(new Event("circle-notation.load",{bubbles:!0}))}attributeChangedCallback(t,e,i){null!==this.shadowRoot&&e!==i&&"data-qubit-count"===t&&this.dispatchVisibilityChangedEvent()}startQubitCircleVisibilityObserver(){const t=new IntersectionObserver((t=>{for(const e of t){const t=e.target;e.intersectionRatio>=.2?(t.setAttribute("data-targets","circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"),this.dispatchVisibilityChangedEvent()):0===e.intersectionRatio&&t.setAttribute("data-targets","circle-notation.qubitCircleGroups")}}),{root:this,threshold:[0,.2]});for(const e of this.qubitCircleGroups)t.observe(e)}dispatchVisibilityChangedEvent(){this.dispatchEvent(new CustomEvent("circle-notation.visibilityChanged",{detail:this.visibleQubitCircleKets,bubbles:!0}))}get visibleQubitCircleKets(){const t=Math.pow(2,this.qubitCount);return this.visibleQubitCircles.map((t=>parseInt(t.getAttribute("data-ket")))).filter((e=>e<t))}get visibleQubitCircles(){const t=this.visibleQubitCircleGroups.map((t=>Array.from(t.querySelectorAll(".qubit-circle"))));return[].concat(...t)}update(){Li($i`<style>
          @media (min-width: 768px) {
            :host([data-qubit-count="8"]),
            :host([data-qubit-count="9"]),
            :host([data-qubit-count="10"]) {
              height: 10rem !important;
            }
          }

          .qubit-circle-group--size4 {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle-group--size8 {
            display: flex;
            flex-direction: row;
          }

          :host([data-qubit-count="3"]) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="3"]) .qubit-circle-group--size8 {
              flex-direction: row;
            }
          }

          .qubit-circle-group--size16 {
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count="4"]) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-qubit-count="4"])
            .qubit-circle-group--size16
            .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-qubit-count="5"]) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count="5"])
            .qubit-circle-group--size16
            .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"])
              .qubit-circle-group--size16
              .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="6"]) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-qubit-count="7"]) .qubit-circle-group--size32,
            :host([data-qubit-count="8"]) .qubit-circle-group--size32,
            :host([data-qubit-count="9"]) .qubit-circle-group--size32,
            :host([data-qubit-count="10"]) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="6"]) .qubit-circle-group--size64,
            :host([data-qubit-count="7"]) .qubit-circle-group--size64,
            :host([data-qubit-count="8"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count="9"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count="10"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-qubit-count="1"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count="1"]) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count="2"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count="2"]) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-qubit-count="3"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count="4"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count="5"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="5"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="5"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="5"])
            .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count="6"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="6"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="6"])
            .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-qubit-count="7"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="7"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="7"])
            .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count="8"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="8"])
            .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count="9"])
            .qubit-circle-group--size256:nth-of-type(n + 3) {
            display: none;
          }

          #body {
            display: flex;
            flex-direction: row;
          }

          :host([data-multi-qubits]) #body {
            display: inline-block;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media (min-width: 768px) {
            :host([data-multi-qubits]) #body {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1.25rem;
            }
          }

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          :host([data-size="xs"]) .qubit-circle {
            height: 17px !important;
            width: 17px !important;
          }

          :host([data-size="sm"]) .qubit-circle {
            height: 25px !important;
            width: 25px !important;
          }

          :host([data-size="base"]) .qubit-circle {
            height: 32px !important;
            width: 32px !important;
          }

          :host([data-size="lg"]) .qubit-circle {
            height: 48px !important;
            width: 48px !important;
          }

          :host([data-size="xl"]) .qubit-circle {
            height: 64px !important;
            width: 64px !important;
          }

          :host([data-qubit-count="1"]:not([data-multi-qubits])) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-count="1"]) .qubit-circle,
          :host([data-qubit-count="2"]) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-count="3"]) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="3"]) .qubit-circle {
              height: 64px;
              width: 64px;
            }
          }

          :host([data-qubit-count="4"]) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="4"]) .qubit-circle {
              height: 48px;
              width: 48px;
            }
          }

          :host([data-qubit-count="5"]) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle {
              height: 32px;
              width: 32px;
            }
          }

          :host([data-qubit-count="6"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="6"]) .qubit-circle {
              height: 25px;
              width: 25px;
            }
          }

          :host([data-qubit-count="7"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="7"]) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-qubit-count="8"]) .qubit-circle,
          :host([data-qubit-count="9"]) .qubit-circle,
          :host([data-qubit-count="10"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="8"]) .qubit-circle,
            :host([data-qubit-count="9"]) .qubit-circle,
            :host([data-qubit-count="10"]) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-show-kets]) .qubit-circle::before {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            white-space: nowrap;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            font-size: 0.75rem;
            color: var(--colors-wolf, #777777);
            margin-bottom: -18px;
            content: "|" attr(data-ket) "⟩";
          }

          .qubit-circle__magnitude {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #e5e5e5;
            border-style: solid;
          }

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size="xs"]) .qubit-circle__magnitude,
          :host([data-size="sm"]) .qubit-circle__magnitude {
            border-width: 1px;
          }
          :host([data-size="base"]) .qubit-circle__magnitude,
          :host([data-size="lg"]) .qubit-circle__magnitude,
          :host([data-size="xl"]) .qubit-circle__magnitude {
            border-width: 2px;
          }

          :host([data-qubit-count="5"]) .qubit-circle__magnitude,
          :host([data-qubit-count="6"]) .qubit-circle__magnitude,
          :host([data-qubit-count="7"]) .qubit-circle__magnitude,
          :host([data-qubit-count="8"]) .qubit-circle__magnitude,
          :host([data-qubit-count="9"]) .qubit-circle__magnitude,
          :host([data-qubit-count="10"]) .qubit-circle__magnitude {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle__magnitude {
              border-width: 2px;
            }
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            content: "";
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-fox, #ff9600);
          }

          .qubit-circle[data-rounded-magnitude="0.1"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude="0.2"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude="0.3"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude="0.4"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude="0.5"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude="0.6"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude="0.7"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude="0.8"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude="0.9"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude="1"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          .qubit-circle__phase {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #777777;
            border-style: solid;
            transform: rotate(0deg);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size="xs"]) .qubit-circle__phase,
          :host([data-size="sm"]) .qubit-circle__phase {
            border-width: 1px;
          }
          :host([data-size="base"]) .qubit-circle__phase,
          :host([data-size="lg"]) .qubit-circle__phase,
          :host([data-size="xl"]) .qubit-circle__phase {
            border-width: 2px;
          }

          :host([data-qubit-count="5"]) .qubit-circle__phase,
          :host([data-qubit-count="6"]) .qubit-circle__phase,
          :host([data-qubit-count="7"]) .qubit-circle__phase,
          :host([data-qubit-count="8"]) .qubit-circle__phase,
          :host([data-qubit-count="9"]) .qubit-circle__phase,
          :host([data-qubit-count="10"]) .qubit-circle__phase {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle__phase {
              border-width: 2px;
            }
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude="0"] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase="10"] > .qubit-circle__phase {
            transform: rotate(-10deg);
          }

          .qubit-circle[data-rounded-phase="20"] > .qubit-circle__phase {
            transform: rotate(-20deg);
          }

          .qubit-circle[data-rounded-phase="30"] > .qubit-circle__phase {
            transform: rotate(-30deg);
          }

          .qubit-circle[data-rounded-phase="40"] > .qubit-circle__phase {
            transform: rotate(-40deg);
          }

          .qubit-circle[data-rounded-phase="50"] > .qubit-circle__phase {
            transform: rotate(-50deg);
          }

          .qubit-circle[data-rounded-phase="60"] > .qubit-circle__phase {
            transform: rotate(-60deg);
          }

          .qubit-circle[data-rounded-phase="70"] > .qubit-circle__phase {
            transform: rotate(-70deg);
          }

          .qubit-circle[data-rounded-phase="80"] > .qubit-circle__phase {
            transform: rotate(-80deg);
          }

          .qubit-circle[data-rounded-phase="90"] > .qubit-circle__phase {
            transform: rotate(-90deg);
          }

          .qubit-circle[data-rounded-phase="100"] > .qubit-circle__phase {
            transform: rotate(-100deg);
          }

          .qubit-circle[data-rounded-phase="110"] > .qubit-circle__phase {
            transform: rotate(-110deg);
          }

          .qubit-circle[data-rounded-phase="120"] > .qubit-circle__phase {
            transform: rotate(-120deg);
          }

          .qubit-circle[data-rounded-phase="130"] > .qubit-circle__phase {
            transform: rotate(-130deg);
          }

          .qubit-circle[data-rounded-phase="140"] > .qubit-circle__phase {
            transform: rotate(-140deg);
          }

          .qubit-circle[data-rounded-phase="150"] > .qubit-circle__phase {
            transform: rotate(-150deg);
          }

          .qubit-circle[data-rounded-phase="160"] > .qubit-circle__phase {
            transform: rotate(-160deg);
          }

          .qubit-circle[data-rounded-phase="170"] > .qubit-circle__phase {
            transform: rotate(-170deg);
          }

          .qubit-circle[data-rounded-phase="180"] > .qubit-circle__phase {
            transform: rotate(-180deg);
          }

          .qubit-circle[data-rounded-phase="190"] > .qubit-circle__phase {
            transform: rotate(-190deg);
          }

          .qubit-circle[data-rounded-phase="200"] > .qubit-circle__phase {
            transform: rotate(-200deg);
          }

          .qubit-circle[data-rounded-phase="210"] > .qubit-circle__phase {
            transform: rotate(-210deg);
          }

          .qubit-circle[data-rounded-phase="220"] > .qubit-circle__phase {
            transform: rotate(-220deg);
          }

          .qubit-circle[data-rounded-phase="230"] > .qubit-circle__phase {
            transform: rotate(-230deg);
          }

          .qubit-circle[data-rounded-phase="240"] > .qubit-circle__phase {
            transform: rotate(-240deg);
          }

          .qubit-circle[data-rounded-phase="250"] > .qubit-circle__phase {
            transform: rotate(-250deg);
          }

          .qubit-circle[data-rounded-phase="260"] > .qubit-circle__phase {
            transform: rotate(-260deg);
          }

          .qubit-circle[data-rounded-phase="270"] > .qubit-circle__phase {
            transform: rotate(-270deg);
          }

          .qubit-circle[data-rounded-phase="280"] > .qubit-circle__phase {
            transform: rotate(-280deg);
          }

          .qubit-circle[data-rounded-phase="290"] > .qubit-circle__phase {
            transform: rotate(-290deg);
          }

          .qubit-circle[data-rounded-phase="300"] > .qubit-circle__phase {
            transform: rotate(-300deg);
          }

          .qubit-circle[data-rounded-phase="310"] > .qubit-circle__phase {
            transform: rotate(-310deg);
          }

          .qubit-circle[data-rounded-phase="320"] > .qubit-circle__phase {
            transform: rotate(-320deg);
          }

          .qubit-circle[data-rounded-phase="330"] > .qubit-circle__phase {
            transform: rotate(-330deg);
          }

          .qubit-circle[data-rounded-phase="340"] > .qubit-circle__phase {
            transform: rotate(-340deg);
          }

          .qubit-circle[data-rounded-phase="350"] > .qubit-circle__phase {
            transform: rotate(-350deg);
          }

          .qubit-circle[data-rounded-phase="360"] > .qubit-circle__phase {
            transform: rotate(-360deg);
          }

          .qubit-circle__phase::after {
            width: 2px;
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: #4b4b4b;
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            content: "";
          }

          :host([data-qubit-count="5"]) .qubit-circle__phase::after,
          :host([data-qubit-count="6"]) .qubit-circle__phase::after,
          :host([data-qubit-count="7"]) .qubit-circle__phase::after,
          :host([data-qubit-count="8"]) .qubit-circle__phase::after,
          :host([data-qubit-count="9"]) .qubit-circle__phase::after,
          :host([data-qubit-count="10"]) .qubit-circle__phase::after {
            width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle__phase::after {
              width: 2px;
            }
          }

          :host([data-size="xs"]) .qubit-circle__phase::after,
          :host([data-size="sm"]) .qubit-circle__phase::after {
            width: 1px;
          }
          :host([data-size="base"]) .qubit-circle__phase::after,
          :host([data-size="lg"]) .qubit-circle__phase::after,
          :host([data-size="xl"]) .qubit-circle__phase::after {
            width: 2px;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`,this.shadowRoot);for(const[t,e]of this.magnitudes.split(",").entries())this.setRoundedMagnitude(this.qubitCircles[t],parseFloat(e));for(const[t,e]of this.phases.split(",").entries()){const i=this.qubitCircles[t],n=e?parseFloat(e):0;this.setRoundedPhase(i,n);i.querySelector(".qubit-circle__phase").style.transform=`rotate(${-n}deg)`}}setRoundedMagnitude(t,e){if(null===t)return;if(void 0===t)return;let i=Math.round(100*e);i=i<10?0===i?0:10:10*Math.round(i/10),i/=100,t.setAttribute("data-magnitude",e.toString()),t.setAttribute("data-rounded-magnitude",i.toString())}setRoundedPhase(t,e){if(null===t)return;if(void 0===t)return;let i=10*Math.round(e/10);i<0&&(i=360+i),t.setAttribute("data-phase",e.toString()),t.setAttribute("data-rounded-phase",i.toString())}get qubitCirclesHtml(){return this.multiQubits?this.stateVectorHtml(10):$i`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`}qubitCircleHtml(t){return $i`<div
      class="qubit-circle"
      data-ket="${t}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`}stateVectorHtml(t){let e=$i``;const i=this.qubitCircleGroup([...Array(Math.pow(2,t)).keys()],(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t)))))))))))),256);for(const t of i)e=$i`${e} ${t}`;return e}qubitCircleGroup(t,e,i=t.length/2){return((t,e=1)=>t.reduce(((i,n,o)=>o%e?i:[...i,t.slice(o,o+e)]),[]))(t,i).map((t=>{let n=$i``;if(e)for(const i of e(t))n=$i`${n} ${i}`;else for(const e of t)n=$i`${n} ${this.qubitCircleHtml(e)}`;return 64===i?$i`<div
          class="qubit-circle-group--size${i}"
          data-targets="circle-notation.qubitCircleGroups"
        >
          ${n}
        </div>`:$i`<div class="qubit-circle-group--size${i}">${n}</div>`}))}initQubitCirclePopup(t){const e=Ie(t);Ge(e,{allowHTML:!0,animation:!1,arrow:te+te,delay:0,theme:"qni"})}setPopupContent(t){if(null===this.popupEl)return;const e=t.target,i=this.ketDecimal(e),n=e.getAttribute("data-amplitude-real"),o=e.getAttribute("data-amplitude-imag"),r=e.getAttribute("data-magnitude"),s=e.getAttribute("data-phase");let a,c;a=null===n||null===o?k.ZERO:new k(parseFloat(n),parseFloat(o)),c=r&&0===parseFloat(r)?0:s?parseFloat(s):0,this.setQubitCirclePopupContent(this.popupEl.content,e,i,a,r?parseFloat(r):0,c,this.qubitCount)}setQubitCirclePopupContent(t,e,i,n,o,r,s){e._tippy.setContent(this.popupContent(t,i,n,o,r,s))}popupContent(t,e,i,n,o,r){const s=t.querySelector(".circle-notation-popup__ket-binary"),a=t.querySelector(".circle-notation-popup__ket-decimal"),c=t.querySelector(".circle-notation-popup__amplitude-real"),l=t.querySelector(".circle-notation-popup__amplitude-imag"),d=t.querySelector(".circle-notation-popup__probability"),u=t.querySelector(".circle-notation-popup__phase");s&&(s.textContent=e.toString(2).padStart(r,"0")),a&&(a.textContent=e.toString()),c&&(c.textContent=this.forceSigned(i.real,5)),l&&(l.textContent=`${this.forceSigned(i.imag,5)}i`),d&&(d.textContent=`${this.forceSigned(n*n*100,4)}%`),u&&(u.textContent=`${this.forceSigned(o,2)}°`);const p=document.createElement("div");return p.appendChild(t.cloneNode(!0)),p.innerHTML}get popupEl(){return document.getElementById("circle-notation-popup")}forceSigned(t,e){return(t>=0?"+":"")+t.toFixed(e)}ketDecimal(t){const e=t.getAttribute("data-ket");return parseInt(e)}},e([f,i("design:type",Object)],t.CircleNotationElement.prototype,"qubitCount",void 0),e([f,i("design:type",Object)],t.CircleNotationElement.prototype,"size",void 0),e([f,i("design:type",Object)],t.CircleNotationElement.prototype,"magnitudes",void 0),e([f,i("design:type",Object)],t.CircleNotationElement.prototype,"phases",void 0),e([f,i("design:type",Object)],t.CircleNotationElement.prototype,"multiQubits",void 0),e([f,i("design:type",Object)],t.CircleNotationElement.prototype,"showKets",void 0),e([p,i("design:type",Array)],t.CircleNotationElement.prototype,"qubitCircles",void 0),e([p,i("design:type",Array)],t.CircleNotationElement.prototype,"qubitCircleGroups",void 0),e([p,i("design:type",Array)],t.CircleNotationElement.prototype,"visibleQubitCircleGroups",void 0),t.CircleNotationElement=e([b],t.CircleNotationElement);const bs=$i`<style>
    .reload-icon {
      fill: currentColor;
      color: rgb(255, 255, 255);
      height: 60%;
      width: 60%;
    }

    #button:disabled > .reload-icon {
      display: none;
    }
  </style>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    class="reload-icon"
  >
    <path
      d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"
    />
  </svg>`,vs=$i`<style>
    .oval-loader-icon {
      display: none;
      height: 60%;
      width: 60%;
    }

    #button:disabled > .oval-loader-icon {
      stroke: currentColor;
      color: rgb(255, 255, 255);
      display: block;
    }
  </style>

  <svg
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    class="oval-loader-icon"
  >
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>`;t.RunCircuitButtonElement=class RunCircuitButtonElement extends HTMLElement{runSimulator(){this.disable(),this.dispatchEvent(new Event("run-circuit-button.click",{bubbles:!0}))}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.dispatchEvent(new Event("run-circuit-button.load",{bubbles:!0}))}update(){Li($i`<style>
          #button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(206, 130, 255);
            border-radius: 9999px;
            border-width: 0px;
            cursor: pointer;
            width: 4rem;
            height: 4rem;
            box-shadow: 0 0 #0000, 0 0 #0000,
              0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          #button:disabled {
            cursor: wait;
          }

          #button:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
        </style>

        <button
          id="button"
          type="button"
          data-action="click:run-circuit-button#runSimulator"
          data-target="run-circuit-button.button"
          aria-label="Run circuit"
        >
          ${bs} ${vs}
        </button>`,this.shadowRoot)}},e([u,i("design:type",HTMLInputElement)],t.RunCircuitButtonElement.prototype,"button",void 0),t.RunCircuitButtonElement=e([b],t.RunCircuitButtonElement),Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=qni.js.map
