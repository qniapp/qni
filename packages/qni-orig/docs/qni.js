!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";
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
    ***************************************************************************** */function t(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}const i=new WeakSet;function o(t){s(t),r(t)}const n=new WeakMap;function r(t=document){if(n.has(t))return n.get(t);let e=!1;const i=new MutationObserver((t=>{for(const e of t)if("attributes"===e.type&&e.target instanceof Element)l(e.target);else if("childList"===e.type&&e.addedNodes.length)for(const t of e.addedNodes)t instanceof Element&&s(t)}));i.observe(t,{childList:!0,subtree:!0,attributeFilter:["data-action"]});const o={get closed(){return e},unsubscribe(){e=!0,n.delete(t),i.disconnect()}};return n.set(t,o),o}function s(t){for(const e of t.querySelectorAll("[data-action]"))l(e);t instanceof Element&&t.hasAttribute("data-action")&&l(t)}function a(t){const e=t.currentTarget;for(const o of c(e))if(t.type===o.type){const n=e.closest(o.tag);i.has(n)&&"function"==typeof n[o.method]&&n[o.method](t);const r=e.getRootNode();if(r instanceof ShadowRoot&&i.has(r.host)&&r.host.matches(o.tag)){const e=r.host;"function"==typeof e[o.method]&&e[o.method](t)}}}function*c(t){for(const e of(t.getAttribute("data-action")||"").trim().split(/\s+/)){const t=e.lastIndexOf(":"),i=e.lastIndexOf("#");yield{type:e.slice(0,t),tag:e.slice(t+1,i),method:e.slice(i+1)}}}function l(t){for(const e of c(t))t.addEventListener(e.type,a)}function d(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){const i=t.tagName.toLowerCase();if(t.shadowRoot)for(const o of t.shadowRoot.querySelectorAll(`[data-target~="${i}.${e}"]`))if(!o.closest(i))return o;for(const o of t.querySelectorAll(`[data-target~="${i}.${e}"]`))if(o.closest(i)===t)return o}(this,e)}})}function p(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){const i=t.tagName.toLowerCase(),o=[];if(t.shadowRoot)for(const n of t.shadowRoot.querySelectorAll(`[data-targets~="${i}.${e}"]`))n.closest(i)||o.push(n);for(const n of t.querySelectorAll(`[data-targets~="${i}.${e}"]`))n.closest(i)===t&&o.push(n);return o}(this,e)}})}const u=new WeakMap;function h(t,e){u.has(t)||u.set(t,[]),u.get(t).push(e)}function f(t){const e=new Set;let i=t;for(;i&&i!==HTMLElement;){const t=u.get(i)||[];for(const i of t)e.add(i);i=Object.getPrototypeOf(i)}return e}function g(t){return`data-${t.replace(/([A-Z]($|[a-z]))/g,"-$1")}`.replace(/--/g,"-").toLowerCase()}function m(t){const e=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){this.toggleAttribute("data-catalyst",!0),function(t){for(const e of t.querySelectorAll("template[data-shadowroot]"))e.parentElement===t&&t.attachShadow({mode:"closed"===e.getAttribute("data-shadowroot")?"closed":"open"}).append(e.content.cloneNode(!0))}(this),function(t,e){e||(e=f(Object.getPrototypeOf(t)));for(const i of e){const e=t[i],o=g(i);let n={get(){return this.getAttribute(o)||""},set(t){this.setAttribute(o,t||"")}};"number"==typeof e?n={get(){return Number(this.getAttribute(o)||0)},set(t){this.setAttribute(o,t)}}:"boolean"==typeof e&&(n={get(){return this.hasAttribute(o)},set(t){this.toggleAttribute(o,t)}}),Object.defineProperty(t,i,n),i in t&&!t.hasAttribute(o)&&n.set.call(t,e)}}(this),function(t){i.add(t),t.shadowRoot&&o(t.shadowRoot),s(t),r(t.ownerDocument)}(this),e&&e.call(this),this.shadowRoot&&o(this.shadowRoot)},function(t){let e=t.observedAttributes||[];Object.defineProperty(t,"observedAttributes",{get:()=>[...f(t.prototype)].map(g).concat(e),set(t){e=t}})}(t),function(t){const e=t.name.replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/(^-|-Element$)/g,"").toLowerCase();window.customElements.get(e)||(window[t.name]=t,window.customElements.define(e,t))}(t)}const b=[{character:"½",ref:"½",expanded:"1/2",value:.5},{character:"¼",ref:"¼",expanded:"1/4",value:1/4},{character:"¾",ref:"¾",expanded:"3/4",value:3/4},{character:"⅓",ref:"⅓",expanded:"1/3",value:1/3},{character:"⅔",ref:"⅔",expanded:"2/3",value:2/3},{character:"⅕",ref:"⅕",expanded:"1/5",value:.2},{character:"⅖",ref:"⅖",expanded:"2/5",value:.4},{character:"⅗",ref:"⅗",expanded:"3/5",value:.6},{character:"⅘",ref:"⅘",expanded:"4/5",value:.8},{character:"⅙",ref:"⅙",expanded:"1/6",value:1/6},{character:"⅚",ref:"⅚",expanded:"5/6",value:5/6},{character:"⅐",ref:"⅐",expanded:"1/7",value:1/7},{character:"⅛",ref:"⅛",expanded:"1/8",value:1/8},{character:"⅜",ref:"⅜",expanded:"3/8",value:3/8},{character:"⅝",ref:"⅝",expanded:"5/8",value:5/8},{character:"⅞",ref:"⅞",expanded:"7/8",value:7/8},{character:"⅑",ref:"⅑",expanded:"1/9",value:1/9},{character:"⅒",ref:"⅒",expanded:"1/10",value:.1}];class v{constructor(t,e,i,o){this.allowAbbreviation=t,this.maxAbbreviationError=e,this.fixedDigits=i,this.itemSeparator=o}static parseFloat(t){if(0===t.length)throw new Error(`Not a number: '${t}'`);if("-"===t[0])return-v.parseFloat(t.substr(1));if("√"===t[0])return Math.sqrt(v.parseFloat(t.substr(1)));const e=v.matchUnicodeFraction((e=>e.character===t));if(void 0!==e)return e.value;const i=parseFloat(t);if(isNaN(i))throw new Error(`Not a number: '${t}'`);return i}static simplifyByRounding(t,e){if(t<0)return-v.simplifyByRounding(-t,e);const i=t%1;if(i<=e||1-i<=e)return Math.round(t);const o=v.matchUnicodeFraction((i=>Math.abs(i.value-t)<=e));if(void 0!==o)return o.value;const n=v.matchUnicodeFraction((i=>Math.abs(Math.sqrt(i.value)-t)<=e));return void 0!==n?Math.sqrt(n.value):t}static matchUnicodeFraction(t){for(const e of b)if(t(e))return e}formatFloat(t){return this.allowAbbreviation?this.abbreviateFloat(t,this.maxAbbreviationError,this.fixedDigits):void 0!==this.fixedDigits?t.toFixed(this.fixedDigits):String(t)}abbreviateFloat(t,e=0,i){if(Math.abs(t)<e)return"0";if(t<0)return`-${this.abbreviateFloat(-t,e,i)}`;const o=v.matchUnicodeFraction((i=>Math.abs(i.value-t)<=e));if(void 0!==o)return o.character;const n=v.matchUnicodeFraction((i=>Math.abs(Math.sqrt(i.value)-t)<=e));return void 0!==n?`√${n.character}`:t%1!=0&&void 0!==i?t.toFixed(i):t.toString()}}v.CONSISTENT=new v(!1,0,2,", "),v.EXACT=new v(!0,0,void 0,", "),v.MINIFIED=new v(!0,0,void 0,","),v.SIMPLIFIED=new v(!0,5e-4,3,", ");const w=1e3,y=Object.prototype.toString.call({}),x="!recursion-limit!";function E(t,e=10){return function(t){return null===t?"null":void 0===t?"undefined":"string"==typeof t?`"${t}"`:"number"==typeof t?String(t):void 0}(t)||function(t,e){if(0===e)return x;if(t instanceof Map)return function(t,e){const i=[];for(const[o,n]of t.entries()){if(i.length>w){i.push("[...]");break}const t=E(o,e-1),r=E(n,e-1);i.push(`${t}: ${r}`)}return`Map{${i.join(", ")}}`}(t,e);if(t instanceof Set)return function(t,e){const i=[];for(const o of t){if(i.length>w){i.push("[...]");break}i.push(E(o,e-1))}return`Set{${i.join(", ")}}`}(t,e);return(t=>{if(t[Symbol.iterator]!==undefined){return true}return false})(t)?function(t,e){const i=[];for(const o of t){if(i.length>w){i.push("[...]");break}i.push(E(o,e-1))}return`${Array.isArray(t)?"":t.constructor.name}[${i.join(", ")}]`}(t,e):void 0}(t,e)||function(t,e){const i=String(t);return i!==y?i:function(t,e){const i=[];for(const o in t){if(!Object.prototype.hasOwnProperty.call(t,o))continue;if(i.length>w){i.push("[...]");break}const n=t[o],r=E(o,e-1),s=E(n,e-1);i.push(`${r}: ${s}`)}const o=t.constructor.name;return`${o==={}.constructor.name?"":`(Type: ${o})`}{${i.join(", ")}}`}(t,e)}(t,e)}let S=0;class z extends Error{constructor(t,e){super(t),this.detailsObj=e,this.name="Error",this.message=t,this.stack=(new Error).stack,void 0!==this.stack&&(this.stack=this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /,"\n    ")),S++;try{this.details=1===S?E(this.detailsObj):"(failed to describe detailsObj due to possibly re-entrancy)"}catch(t){console.error(t),this.details="(failed to describe detailsObj, see the console for details)"}finally{S--}}}class C{static need(t,e,i){if(!0!==t){const t=void 0===i?"(not provided)":`[${Array.prototype.slice.call(i).join(", ")}]`;throw new Error(`Precondition failed\n\nMessage: ${void 0===e?"(not provided)":e}\n\nArgs: ${t}`)}}static notNull(t){C.need(null!=t,"notNull")}static round(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}static snappedCosSin(t){const e=Math.PI/4,i=Math.round(t/e);if(i*e===t){const t=Math.sqrt(.5);return[[1,0],[t,t],[0,1],[-t,t],[-1,0],[-t,-t],[0,-1],[t,-t]][7&i]}return[Math.cos(t),Math.sin(t)]}static updateUrlJson(t){history.pushState("","",encodeURIComponent(t))}static get urlJson(){const t=window.location.href.toString().split(window.location.host)[1].slice(1);return decodeURIComponent(t)}}const q={if_same_instance_as_this_then_throw:!0},A={not_a_normal_value:!0};class _{constructor(t,e=!1){let i,o;if(t instanceof _)i=t._iterable,o=t[Symbol.iterator];else if(e)i={[Symbol.iterator]:t},o=t;else{if(!this.isIterable(t))throw new Error(`Not iterable: ${E(t)}`);i=t,o=t[Symbol.iterator].bind(t)}this._iterable=i,this[Symbol.iterator]=o}isIterable(t){return"string"==typeof t||"object"==typeof t&&null!==t&&Symbol.iterator in t}static fromGenerator(t){return new _(t,!0)}toArray(){return Array.from(this._iterable)}join(t){return this.toArray().join(t)}toString(){return`Seq[${this.join(", ")}]`}static range(t){if(!Number.isInteger(t)||t<0)throw new z("bad count",{count:t});return _.fromGenerator((function*(){for(let e=0;e<t;e++)yield e}))}map(t){const e=this._iterable;return _.fromGenerator((function*(){for(const i of e)yield t(i)}))}flatMap(t){const e=this._iterable;return _.fromGenerator((function*(){for(const i of e)yield*t(i)}))}filter(t){const e=this._iterable;return _.fromGenerator((function*(){for(const i of e)t(i)&&(yield i)}))}maxBy(t,e=q,i=((t,e)=>t<e)){let o=A,n=A;for(const e of this._iterable){if(o===A){o=e;continue}n===A&&(n=t(o));const r=t(e);i(n,r)&&(o=e,n=r)}return function(t,e,i){if(t!==A)return t;if(e===q)throw new Error(i);return e}(o,e,"Can't maxBy an empty sequence.")}any(t){for(const e of this._iterable)if(t(e))return!0;return!1}every(t){return!this.any((e=>!t(e)))}distinctBy(t){const e=this;return _.fromGenerator((function(){const i=new Set;return e.filter((e=>{const o=t(e);return!i.has(o)&&(i.add(o),!0)}))[Symbol.iterator]()}))}distinct(){return this.distinctBy((t=>t))}segmentBy(t){const e=this;return _.fromGenerator((function*(){let i,o=[];for(const n of e){const e=t(n);o.length>0&&e!==i&&(yield o,o=[]),o.push(n),i=e}o.length>0&&(yield o)}))}single(t=q){const e=this[Symbol.iterator](),i=e.next();if(!i.done&&e.next().done)return i.value;if(t===q)throw i.done?new Error("Empty sequence doesn't contain a single item."):new Error("Sequence contains more than a single item.");return t}sortedBy(t){return M(this.toArray().sort(((e,i)=>{const o=t(e),n=t(i);return o<n?-1:o>n?1:0})))}}function M(t){return new _(t)}function D(t,e){let i=function(t){return function(t){for(let e=(t=[...t]).indexOf("e",1);-1!==e;e=t.indexOf("e",e+1)){const i=e-1;let o=e+1;/[0-9]/.exec(t[i])&&(/[+-]/.exec(`${t[o]}`)&&(o+=1),/[0-9]/.exec(`${t[o]}`)&&(o+=1,t.splice(i,o-i,t.slice(i,o).join("")),e-=1))}return t}(M(t.toLowerCase().split(/\s/)).flatMap((t=>M(t).segmentBy((t=>""===t.trim()?" ":/[.0-9]/.exec(t)?"#":/[_a-z]/.exec(t)?"a":NaN)).map((t=>t.join(""))))).filter((t=>""!==t.trim())).toArray())}(t).map((t=>function(t,e){if(/[0-9]+(\.[0-9]+)?/.exec(t))return parseFloat(t);if(e.has(t))return e.get(t);throw new z("Unrecognized token",{token:t})}(t,e)));i.length>0&&void 0!==i[i.length-1].priority&&(i=i.slice(0,i.length-1));const o=[],n=[],r=t=>"("!==t&&void 0===t.priority,s=e=>{if("("===e)throw new z("Bad expression: unmatched '('",{text:t});if(n.length<2)throw new z("Bad expression: operated on nothing",{text:t});const i=n.pop(),o=n.pop();n.push(e.f(o,i))},a=()=>{for(;;){if(0===o.length)throw new z("Bad expression: unmatched ')'",{text:t});const e=o.pop();if("("===e)break;s(e)}},c=t=>{for(;o.length>0&&n.length>=2&&void 0!==n[n.length-1];){const e=o[o.length-1];if(void 0===e.w||e.w<t)break;s(o.pop())}},l=(i,r)=>{const s=e.get("*");if(i&&void 0===r.binary_action&&")"!==r&&(c(s.priority),o.push({f:s.binary_action,w:s.priority})),i&&void 0!==r.binary_action)c(r.priority),o.push({f:r.binary_action,w:r.priority});else if(void 0!==r.unary_action)c(r.priority),n.push(void 0),o.push({f:(t,e)=>r.unary_action(e),w:1/0});else if(void 0!==r.binary_action)throw new z("Bad expression: binary op in bad spot",{text:t})};let d=!1;for(const t of i)l(d,t),d=r(t),"("===t?o.push("("):")"===t?a():d&&n.push(t);if(c(-1/0),1!==n.length||0!==o.length)throw new z("Incomplete expression",{text:t});return n[0]}class O{constructor(t,e){this.real=t,this.imag=e}static from(t){if(t instanceof O)return t;if("number"==typeof t)return new O(t,0);throw new z("Unrecognized value type.",{v:t})}static parse(t){return O.from(D(t,P))}static polar(t,e){const[i,o]=C.snappedCosSin(e);return new O(t*i,t*o)}static realPartOf(t){if(t instanceof O)return t.real;if("number"==typeof t)return t;throw new z("Unrecognized value type.",{v:t})}static imagPartOf(t){if(t instanceof O)return t.imag;if("number"==typeof t)return 0;throw new z("Unrecognized value type.",{v:t})}static rootsOfQuadratic(t,e,i){if(t=O.from(t),e=O.from(e),i=O.from(i),t.isEqualTo(0)){if(!e.isEqualTo(0))return[i.times(-1).dividedBy(e)];if(!i.isEqualTo(0))return[];throw Error("Degenerate")}const o=e.times(e).minus(t.times(i).times(4)).sqrts(),n=e.times(-1),r=t.times(2);return o.map((t=>n.minus(t).dividedBy(r)))}isEqualTo(t){return t instanceof O?this.real===t.real&&this.imag===t.imag:"number"==typeof t&&(this.real===t&&0===this.imag)}isApproximatelyEqualTo(t,e){if(t instanceof O||"number"==typeof t){const i=this.minus(O.from(t));return Math.abs(i.real)<=e&&Math.abs(i.imag)<=e&&i.abs()<=e}return!1}norm2(){return this.real*this.real+this.imag*this.imag}abs(){return Math.sqrt(this.norm2())}unit(){const t=this.norm2();return t<1e-5?O.polar(1,this.phase()):this.dividedBy(Math.sqrt(t))}plus(t){const e=O.from(t);return new O(this.real+e.real,this.imag+e.imag)}minus(t){const e=O.from(t);return new O(this.real-e.real,this.imag-e.imag)}times(t){const e=O.from(t);return new O(this.real*e.real-this.imag*e.imag,this.real*e.imag+this.imag*e.real)}dividedBy(t){const e=O.from(t),i=e.norm2();if(0===i)throw new Error("Division by Zero");const o=this.times(e.conjugate());return new O(o.real/i,o.imag/i)}sqrts(){const[t,e]=[this.real,this.imag],i=Math.sqrt(Math.sqrt(t*t+e*e));if(0===i)return[O.ZERO];if(0===e&&t<0)return[new O(0,i),new O(0,-i)];const o=this.phase()/2,n=O.polar(i,o);return[n,n.times(-1)]}conjugate(){return new O(this.real,-this.imag)}toString(t){return(t=t||v.EXACT).allowAbbreviation?this.toStringAllowSingleValue(t):this.toStringBothValues(t)}neg(){return new O(-this.real,-this.imag)}raisedTo(t){return.5===t&&0===this.imag&&this.real>=0?new O(Math.sqrt(this.real),0):O.ZERO.isEqualTo(t)?O.ONE:this.isEqualTo(O.ZERO)?O.ZERO:this.ln().times(O.from(t)).exp()}exp(){return O.polar(Math.exp(this.real),this.imag)}cos(){const t=this.times(O.I);return t.exp().plus(t.neg().exp()).times(.5)}sin(){const t=this.times(O.I);return t.exp().minus(t.neg().exp()).dividedBy(new O(0,2))}tan(){return this.sin().dividedBy(this.cos())}ln(){return new O(Math.log(this.abs()),this.phase())}phase(){return Math.atan2(this.imag,this.real)}toStringAllowSingleValue(t){return Math.abs(this.imag)<=t.maxAbbreviationError?t.formatFloat(this.real):Math.abs(this.real)<=t.maxAbbreviationError?Math.abs(this.imag-1)<=t.maxAbbreviationError?"i":Math.abs(this.imag+1)<=t.maxAbbreviationError?"-i":`${t.formatFloat(this.imag)}i`:this.toStringBothValues(t)}toStringBothValues(t){const e=this.imag>=0?"+":"-",i=t.allowAbbreviation&&Math.abs(Math.abs(this.imag)-1)<=t.maxAbbreviationError?"":t.formatFloat(Math.abs(this.imag));return`${(t.allowAbbreviation||void 0===t.fixedDigits||this.real<0?"":"+")+t.formatFloat(this.real)+e+i}i`}}O.ZERO=new O(0,0),O.ONE=new O(1,0),O.I=new O(0,1);const k=new Map,T=new Map,P=new Map;k.set("i",O.I),k.set("e",O.from(Math.E)),k.set("pi",O.from(Math.PI)),k.set("(","("),k.set(")",")");for(const{character:t,value:e}of b)k.set(t,e);k.set("sqrt",{unary_action:t=>O.from(t).raisedTo(.5),priority:4}),k.set("exp",{unary_action:t=>O.from(t).exp(),priority:4}),k.set("ln",{unary_action:t=>O.from(t).ln(),priority:4}),k.set("^",{binary_action:(t,e)=>O.from(t).raisedTo(e),priority:3}),k.set("*",{binary_action:(t,e)=>O.from(t).times(e),priority:2}),k.set("/",{binary_action:(t,e)=>O.from(t).dividedBy(e),priority:2}),k.set("-",{unary_action:t=>O.from(t).neg(),binary_action:(t,e)=>O.from(t).minus(e),priority:1}),k.set("+",{unary_action:t=>t,binary_action:(t,e)=>O.from(t).plus(e),priority:1}),k.set("√",k.get("sqrt")),P.set("cos",{unary_action:t=>new O(Math.PI/180,0).times(t).cos(),priority:4}),P.set("sin",{unary_action:t=>new O(Math.PI/180,0).times(t).sin(),priority:4}),P.set("asin",{unary_action:t=>{if(0!==O.imagPartOf(t))throw new z("asin input out of range",{e:t});return O.from(180*Math.asin(O.realPartOf(t))/Math.PI)},priority:4}),P.set("acos",{unary_action:t=>{if(0!==O.imagPartOf(t))throw new z("acos input out of range",{e:t});return O.from(180*Math.acos(O.realPartOf(t))/Math.PI)},priority:4}),P.set("arccos",P.get("acos")),P.set("arcsin",P.get("asin")),T.set("cos",{unary_action:t=>O.from(t).cos(),priority:4}),T.set("sin",{unary_action:t=>O.from(t).sin(),priority:4}),T.set("tan",{unary_action:t=>O.from(t).tan(),priority:4}),T.set("asin",{unary_action:t=>{if(0!==O.imagPartOf(t))throw new z("asin input out of range",{e:t});return O.from(Math.asin(O.realPartOf(t)))},priority:4}),T.set("acos",{unary_action:t=>{if(0!==O.imagPartOf(t))throw new z("acos input out of range",{e:t});return O.from(Math.acos(O.realPartOf(t)))},priority:4}),T.set("atan",{unary_action:t=>{if(0!==O.imagPartOf(t))throw new z("atan input out of range",{e:t});return O.from(Math.atan(O.realPartOf(t)))},priority:4});for(const[t,e]of k.entries())P.set(t,e),T.set(t,e);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function $(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function L(t,e){return t(e={exports:{}},e.exports),e.exports}var N=L((function(t,e){!function(t){function e(t){return i(t)&&"function"==typeof t.from}function i(t){return"object"==typeof t&&"function"==typeof t.to}function o(t){t.parentElement.removeChild(t)}function n(t){return null!=t}function r(t){t.preventDefault()}function s(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function a(t,e){return Math.round(t/e)*e}function c(t,e){var i=t.getBoundingClientRect(),o=t.ownerDocument,n=o.documentElement,r=b(o);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(r.x=0),e?i.top+r.y-n.clientTop:i.left+r.x-n.clientLeft}function l(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function d(t,e,i){i>0&&(f(t,e),setTimeout((function(){g(t,e)}),i))}function p(t){return Math.max(Math.min(t,100),0)}function u(t){return Array.isArray(t)?t:[t]}function h(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function f(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function g(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function m(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function b(t){var e=void 0!==window.pageXOffset,i="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:i?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:i?t.documentElement.scrollTop:t.body.scrollTop}}function v(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function w(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}function y(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(t,e){return 100/(e-t)}function E(t,e,i){return 100*e/(t[i+1]-t[i])}function S(t,e){return E(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function z(t,e){return e*(t[1]-t[0])/100+t[0]}function C(t,e){for(var i=1;t>=e[i];)i+=1;return i}function q(t,e,i){if(i>=t.slice(-1)[0])return 100;var o=C(i,t),n=t[o-1],r=t[o],s=e[o-1],a=e[o];return s+S([n,r],i)/x(s,a)}function A(t,e,i){if(i>=100)return t.slice(-1)[0];var o=C(i,e),n=t[o-1],r=t[o],s=e[o-1];return z([n,r],(i-s)*x(s,e[o]))}function _(t,e,i,o){if(100===o)return o;var n=C(o,t),r=t[n-1],s=t[n];return i?o-r>(s-r)/2?s:r:e[n-1]?t[n-1]+a(o-t[n-1],e[n-1]):o}var M,D;t.PipsMode=void 0,(D=t.PipsMode||(t.PipsMode={})).Range="range",D.Steps="steps",D.Positions="positions",D.Count="count",D.Values="values",t.PipsType=void 0,(M=t.PipsType||(t.PipsType={}))[M.None=-1]="None",M[M.NoValue=0]="NoValue",M[M.LargeValue=1]="LargeValue",M[M.SmallValue=2]="SmallValue";var O=function(){function t(t,e,i){var o;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=e;var n=[];for(Object.keys(t).forEach((function(e){n.push([u(t[e]),e])})),n.sort((function(t,e){return t[0][0]-e[0][0]})),o=0;o<n.length;o++)this.handleEntryPoint(n[o][1],n[o][0]);for(this.xNumSteps=this.xSteps.slice(0),o=0;o<this.xNumSteps.length;o++)this.handleStepPoint(o,this.xNumSteps[o])}return t.prototype.getDistance=function(t){var e,i=[];for(e=0;e<this.xNumSteps.length-1;e++){var o=this.xNumSteps[e];if(o&&t/o%1!=0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");i[e]=E(this.xVal,t,e)}return i},t.prototype.getAbsoluteDistance=function(t,e,i){var o,n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);i||t!==this.xPct[n+1]||n++,null===e&&(e=[]);var r=1,s=e[n],a=0,c=0,l=0,d=0;for(o=i?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);s>0;)a=this.xPct[n+1+d]-this.xPct[n+d],e[n+d]*r+100-100*o>100?(c=a*o,r=(s-100*o)/e[n+d],o=1):(c=e[n+d]*a/100*r,r=0),i?(l-=c,this.xPct.length+d>=1&&d--):(l+=c,this.xPct.length-d>=1&&d++),s=e[n+d]*r;return t+l},t.prototype.toStepping=function(t){return t=q(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return A(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=_(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,i){var o=C(t,this.xPct);return(100===t||e&&t===this.xPct[o-1])&&(o=Math.max(o-1,1)),(this.xVal[o]-this.xVal[o-1])/i},t.prototype.getNearbySteps=function(t){var e=C(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(h);return Math.max.apply(null,t)},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var i;if(!l(i="min"===t?0:"max"===t?100:parseFloat(t))||!l(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(e[0]);var o=Number(e[1]);i?this.xSteps.push(!isNaN(o)&&o):isNaN(o)||(this.xSteps[0]=o),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=E([this.xVal[t],this.xVal[t+1]],e,0)/x(this.xPct[t],this.xPct[t+1]);var i=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],o=Math.ceil(Number(i.toFixed(3))-1),n=this.xVal[t]+this.xNumSteps[t]*o;this.xHighestCompleteStep[t]=n}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),k={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},T={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},P={tooltips:".__tooltips",aria:".__aria"};function $(t,e){if(!l(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function L(t,e){if(!l(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function N(t,e){if(!l(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function I(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");t.spectrum=new O(e,t.snap||!1,t.singleStep)}function j(t,e){if(e=u(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function R(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function F(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function U(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function H(t,e){var i,o=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(i=1;i<t.handles;i++)o.push(e);o.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");o=e}t.connect=o}function V(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function B(t,e){if(!l(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function W(t,e){if(!l(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function G(t,e){var i;if(!l(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!l(e[0])&&!l(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],i=0;i<t.spectrum.xNumSteps.length-1;i++)if(t.padding[0][i]<0||t.padding[1][i]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var o=e[0]+e[1],n=t.spectrum.xVal[0];if(o/(t.spectrum.xVal[t.spectrum.xVal.length-1]-n)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function X(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Y(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var i=e.indexOf("tap")>=0,o=e.indexOf("drag")>=0,n=e.indexOf("fixed")>=0,r=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0;if(n){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");B(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:i||r,drag:o,fixed:n,snap:r,hover:s,unconstrained:a}}function Q(t,e){if(!1!==e)if(!0===e||i(e)){t.tooltips=[];for(var o=0;o<t.handles;o++)t.tooltips.push(e)}else{if((e=u(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!i(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function J(t,e){if(!i(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function K(t,i){if(!e(i))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=i}function Z(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function tt(t,e){t.documentElement=e}function et(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function it(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(i){t.cssClasses[i]=t.cssPrefix+e[i]}))):t.cssClasses=e}function ot(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:k,format:k},i={step:{r:!1,t:$},keyboardPageMultiplier:{r:!1,t:L},keyboardDefaultStep:{r:!1,t:N},start:{r:!0,t:j},connect:{r:!0,t:H},direction:{r:!0,t:X},snap:{r:!1,t:R},animate:{r:!1,t:F},animationDuration:{r:!1,t:U},range:{r:!0,t:I},orientation:{r:!1,t:V},margin:{r:!1,t:B},limit:{r:!1,t:W},padding:{r:!1,t:G},behaviour:{r:!0,t:Y},ariaFormat:{r:!1,t:J},format:{r:!1,t:K},tooltips:{r:!1,t:Q},keyboardSupport:{r:!0,t:Z},documentElement:{r:!1,t:tt},cssPrefix:{r:!0,t:et},cssClasses:{r:!0,t:it}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:T,keyboardPageMultiplier:5,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(i).forEach((function(r){if(n(t[r])||void 0!==o[r])i[r].t(e,n(t[r])?t[r]:o[r]);else if(i[r].r)throw new Error("noUiSlider: '"+r+"' is required.")})),e.pips=t.pips;var r=document.createElement("div"),s=void 0!==r.style.msTransform,a=void 0!==r.style.transform;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";var c=[["left","top"],["right","bottom"]];return e.style=c[e.dir][e.ort],e}function nt(e,i,a){var l,h,x,E,S,z=v(),C=y()&&w(),q=e,A=i.spectrum,_=[],M=[],D=[],O=0,k={},T=e.ownerDocument,$=i.documentElement||T.documentElement,L=T.body,N="rtl"===T.dir||1===i.ort?0:100;function I(t,e){var i=T.createElement("div");return e&&f(i,e),t.appendChild(i),i}function j(t,e){var o=I(t,i.cssClasses.origin),n=I(o,i.cssClasses.handle);return I(n,i.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),i.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(t){return ht(t,e)}))),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===e?f(n,i.cssClasses.handleLower):e===i.handles-1&&f(n,i.cssClasses.handleUpper),o}function R(t,e){return!!e&&I(t,i.cssClasses.connect)}function F(t,e){var o=I(e,i.cssClasses.connects);h=[],(x=[]).push(R(o,t[0]));for(var n=0;n<i.handles;n++)h.push(j(e,n)),D[n]=n,x.push(R(o,t[n+1]))}function U(t){return f(t,i.cssClasses.target),0===i.dir?f(t,i.cssClasses.ltr):f(t,i.cssClasses.rtl),0===i.ort?f(t,i.cssClasses.horizontal):f(t,i.cssClasses.vertical),f(t,"rtl"===getComputedStyle(t).direction?i.cssClasses.textDirectionRtl:i.cssClasses.textDirectionLtr),I(t,i.cssClasses.base)}function H(t,e){return!(!i.tooltips||!i.tooltips[e])&&I(t.firstChild,i.cssClasses.tooltip)}function V(){return q.hasAttribute("disabled")}function B(t){return h[t].hasAttribute("disabled")}function W(){S&&(bt("update"+P.tooltips),S.forEach((function(t){t&&o(t)})),S=null)}function G(){W(),S=h.map(H),gt("update"+P.tooltips,(function(t,e,o){if(S&&i.tooltips&&!1!==S[e]){var n=t[e];!0!==i.tooltips[e]&&(n=i.tooltips[e].to(o[e])),S[e].innerHTML=n}}))}function X(){bt("update"+P.aria),gt("update"+P.aria,(function(t,e,o,n,r){D.forEach((function(t){var e=h[t],n=wt(M,t,0,!0,!0,!0),s=wt(M,t,100,!0,!0,!0),a=r[t],c=String(i.ariaFormat.to(o[t]));n=A.fromStepping(n).toFixed(1),s=A.fromStepping(s).toFixed(1),a=A.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",n),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",c)}))}))}function Y(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return A.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=e.values-1,o=100/i,n=[];i--;)n[i]=i*o;return n.push(100),Q(n,e.stepped)}return e.mode===t.PipsMode.Positions?Q(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return A.fromStepping(A.getStep(A.toStepping(t)))})):e.values:[]}function Q(t,e){return t.map((function(t){return A.fromStepping(e?A.getStep(t):t)}))}function J(e){function i(t,e){return Number((t+e).toFixed(7))}var o=Y(e),n={},r=A.xVal[0],a=A.xVal[A.xVal.length-1],c=!1,l=!1,d=0;return(o=s(o.slice().sort((function(t,e){return t-e}))))[0]!==r&&(o.unshift(r),c=!0),o[o.length-1]!==a&&(o.push(a),l=!0),o.forEach((function(r,s){var a,p,u,h,f,g,m,b,v,w,y=r,x=o[s+1],E=e.mode===t.PipsMode.Steps;for(E&&(a=A.xNumSteps[s]),a||(a=x-y),void 0===x&&(x=y),a=Math.max(a,1e-7),p=y;p<=x;p=i(p,a)){for(b=(f=(h=A.toStepping(p))-d)/(e.density||1),w=f/(v=Math.round(b)),u=1;u<=v;u+=1)n[(g=d+u*w).toFixed(5)]=[A.fromStepping(g),0];m=o.indexOf(p)>-1?t.PipsType.LargeValue:E?t.PipsType.SmallValue:t.PipsType.NoValue,!s&&c&&p!==x&&(m=0),p===x&&l||(n[h.toFixed(5)]=[p,m]),d=h}})),n}function K(e,o,n){var r,s,a=T.createElement("div"),c=((r={})[t.PipsType.None]="",r[t.PipsType.NoValue]=i.cssClasses.valueNormal,r[t.PipsType.LargeValue]=i.cssClasses.valueLarge,r[t.PipsType.SmallValue]=i.cssClasses.valueSub,r),l=((s={})[t.PipsType.None]="",s[t.PipsType.NoValue]=i.cssClasses.markerNormal,s[t.PipsType.LargeValue]=i.cssClasses.markerLarge,s[t.PipsType.SmallValue]=i.cssClasses.markerSub,s),d=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],p=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function u(t,e){var o=e===i.cssClasses.value,n=o?c:l;return e+" "+(o?d:p)[i.ort]+" "+n[t]}function h(e,r,s){if((s=o?o(r,s):s)!==t.PipsType.None){var c=I(a,!1);c.className=u(s,i.cssClasses.marker),c.style[i.style]=e+"%",s>t.PipsType.NoValue&&((c=I(a,!1)).className=u(s,i.cssClasses.value),c.setAttribute("data-value",String(r)),c.style[i.style]=e+"%",c.innerHTML=String(n.to(r)))}}return f(a,i.cssClasses.pips),f(a,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(e).forEach((function(t){h(t,e[t][0],e[t][1])})),a}function Z(){E&&(o(E),E=null)}function tt(t){Z();var e=J(t),i=t.filter,o=t.format||{to:function(t){return String(Math.round(t))}};return E=q.appendChild(K(e,i,o))}function et(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||l[e]:t.height||l[e]}function it(t,e,o,n){var r=function(r){var s=nt(r,n.pageOffset,n.target||e);return!!s&&!(V()&&!n.doNotReject)&&!(m(q,i.cssClasses.tap)&&!n.doNotReject)&&!(t===z.start&&void 0!==s.buttons&&s.buttons>1)&&(!n.hover||!s.buttons)&&(C||s.preventDefault(),s.calcPoint=s.points[i.ort],void o(s,n))},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,r,!!C&&{passive:!0}),s.push([t,r])})),s}function nt(t,e,i){var o=0===t.type.indexOf("touch"),n=0===t.type.indexOf("mouse"),r=0===t.type.indexOf("pointer"),s=0,a=0;if(0===t.type.indexOf("MSPointer")&&(r=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(o){var c=function(e){var o=e.target;return o===i||i.contains(o)||t.composed&&t.composedPath().shift()===i};if("touchstart"===t.type){var l=Array.prototype.filter.call(t.touches,c);if(l.length>1)return!1;s=l[0].pageX,a=l[0].pageY}else{var d=Array.prototype.find.call(t.changedTouches,c);if(!d)return!1;s=d.pageX,a=d.pageY}}return e=e||b(T),(n||r)&&(s=t.clientX+e.x,a=t.clientY+e.y),t.pageOffset=e,t.points=[s,a],t.cursor=n||r,t}function rt(t){var e=100*(t-c(l,i.ort))/et();return e=p(e),i.dir?100-e:e}function st(t){var e=100,i=!1;return h.forEach((function(o,n){if(!B(n)){var r=M[n],s=Math.abs(r-t);(s<e||s<=e&&t>r||100===s&&100===e)&&(i=n,e=s)}})),i}function at(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&lt(t,e)}function ct(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return lt(t,e);var o=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);xt(o>0,100*o/e.baseSize,e.locations,e.handleNumbers,e.connect)}function lt(t,e){e.handle&&(g(e.handle,i.cssClasses.active),O-=1),e.listeners.forEach((function(t){$.removeEventListener(t[0],t[1])})),0===O&&(g(q,i.cssClasses.drag),zt(),t.cursor&&(L.style.cursor="",L.removeEventListener("selectstart",r))),e.handleNumbers.forEach((function(t){vt("change",t),vt("set",t),vt("end",t)}))}function dt(t,e){if(!e.handleNumbers.some(B)){var o;1===e.handleNumbers.length&&(o=h[e.handleNumbers[0]].children[0],O+=1,f(o,i.cssClasses.active)),t.stopPropagation();var n=[],s=it(z.move,$,ct,{target:t.target,handle:o,connect:e.connect,listeners:n,startCalcPoint:t.calcPoint,baseSize:et(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:M.slice()}),a=it(z.end,$,lt,{target:t.target,handle:o,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),c=it("mouseout",$,at,{target:t.target,handle:o,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,s.concat(a,c)),t.cursor&&(L.style.cursor=getComputedStyle(t.target).cursor,h.length>1&&f(q,i.cssClasses.drag),L.addEventListener("selectstart",r,!1)),e.handleNumbers.forEach((function(t){vt("start",t)}))}}function pt(t){t.stopPropagation();var e=rt(t.calcPoint),o=st(e);!1!==o&&(i.events.snap||d(q,i.cssClasses.tap,i.animationDuration),Ct(o,e,!0,!0),zt(),vt("slide",o,!0),vt("update",o,!0),vt("change",o,!0),vt("set",o,!0),i.events.snap&&dt(t,{handleNumbers:[o]}))}function ut(t){var e=rt(t.calcPoint),i=A.getStep(e),o=A.fromStepping(i);Object.keys(k).forEach((function(t){"hover"===t.split(".")[0]&&k[t].forEach((function(t){t.call(Nt,o)}))}))}function ht(t,e){if(V()||B(e))return!1;var o=["Left","Right"],n=["Down","Up"],r=["PageDown","PageUp"],s=["Home","End"];i.dir&&!i.ort?o.reverse():i.ort&&!i.dir&&(n.reverse(),r.reverse());var a,c=t.key.replace("Arrow",""),l=c===r[0],d=c===r[1],p=c===n[0]||c===o[0]||l,u=c===n[1]||c===o[1]||d,h=c===s[0],f=c===s[1];if(!(p||u||h||f))return!0;if(t.preventDefault(),u||p){var g=i.keyboardPageMultiplier,m=p?0:1,b=Tt(e)[m];if(null===b)return!1;!1===b&&(b=A.getDefaultStep(M[e],p,i.keyboardDefaultStep)),(d||l)&&(b*=g),b=Math.max(b,1e-7),b*=p?-1:1,a=_[e]+b}else a=f?i.spectrum.xVal[i.spectrum.xVal.length-1]:i.spectrum.xVal[0];return Ct(e,A.toStepping(a),!0,!0),vt("slide",e),vt("update",e),vt("change",e),vt("set",e),!1}function ft(t){t.fixed||h.forEach((function(t,e){it(z.start,t.children[0],dt,{handleNumbers:[e]})})),t.tap&&it(z.start,l,pt,{}),t.hover&&it(z.move,l,ut,{hover:!0}),t.drag&&x.forEach((function(e,o){if(!1!==e&&0!==o&&o!==x.length-1){var n=h[o-1],r=h[o],s=[e];f(e,i.cssClasses.draggable),t.fixed&&(s.push(n.children[0]),s.push(r.children[0])),s.forEach((function(t){it(z.start,t,dt,{handles:[n,r],handleNumbers:[o-1,o],connect:e})}))}}))}function gt(t,e){k[t]=k[t]||[],k[t].push(e),"update"===t.split(".")[0]&&h.forEach((function(t,e){vt("update",e)}))}function mt(t){return t===P.aria||t===P.tooltips}function bt(t){var e=t&&t.split(".")[0],i=e?t.substring(e.length):t;Object.keys(k).forEach((function(t){var o=t.split(".")[0],n=t.substring(o.length);e&&e!==o||i&&i!==n||mt(n)&&i!==n||delete k[t]}))}function vt(t,e,o){Object.keys(k).forEach((function(n){var r=n.split(".")[0];t===r&&k[n].forEach((function(t){t.call(Nt,_.map(i.format.to),e,_.slice(),o||!1,M.slice(),Nt)}))}))}function wt(t,e,o,n,r,s){var a;return h.length>1&&!i.events.unconstrained&&(n&&e>0&&(a=A.getAbsoluteDistance(t[e-1],i.margin,!1),o=Math.max(o,a)),r&&e<h.length-1&&(a=A.getAbsoluteDistance(t[e+1],i.margin,!0),o=Math.min(o,a))),h.length>1&&i.limit&&(n&&e>0&&(a=A.getAbsoluteDistance(t[e-1],i.limit,!1),o=Math.min(o,a)),r&&e<h.length-1&&(a=A.getAbsoluteDistance(t[e+1],i.limit,!0),o=Math.max(o,a))),i.padding&&(0===e&&(a=A.getAbsoluteDistance(0,i.padding[0],!1),o=Math.max(o,a)),e===h.length-1&&(a=A.getAbsoluteDistance(100,i.padding[1],!0),o=Math.min(o,a))),!((o=p(o=A.getStep(o)))===t[e]&&!s)&&o}function yt(t,e){var o=i.ort;return(o?e:t)+", "+(o?t:e)}function xt(t,e,i,o,n){var r=i.slice(),s=o[0],a=[!t,t],c=[t,!t];o=o.slice(),t&&o.reverse(),o.length>1?o.forEach((function(t,i){var o=wt(r,t,r[t]+e,a[i],c[i],!1);!1===o?e=0:(e=o-r[t],r[t]=o)})):a=c=[!0];var l=!1;o.forEach((function(t,o){l=Ct(t,i[t]+e,a[o],c[o])||l})),l&&(o.forEach((function(t){vt("update",t),vt("slide",t)})),null!=n&&vt("drag",s))}function Et(t,e){return i.dir?100-t-e:t}function St(t,e){M[t]=e,_[t]=A.fromStepping(e);var o="translate("+yt(10*(Et(e,0)-N)+"%","0")+")";h[t].style[i.transformRule]=o,qt(t),qt(t+1)}function zt(){D.forEach((function(t){var e=M[t]>50?-1:1,i=3+(h.length+e*t);h[t].style.zIndex=String(i)}))}function Ct(t,e,i,o,n){return n||(e=wt(M,t,e,i,o,!1)),!1!==e&&(St(t,e),!0)}function qt(t){if(x[t]){var e=0,o=100;0!==t&&(e=M[t-1]),t!==x.length-1&&(o=M[t]);var n=o-e,r="translate("+yt(Et(e,n)+"%","0")+")",s="scale("+yt(n/100,"1")+")";x[t].style[i.transformRule]=r+" "+s}}function At(t,e){return null===t||!1===t||void 0===t?M[e]:("number"==typeof t&&(t=String(t)),!1!==(t=i.format.from(t))&&(t=A.toStepping(t)),!1===t||isNaN(t)?M[e]:t)}function _t(t,e,o){var n=u(t),r=void 0===M[0];e=void 0===e||e,i.animate&&!r&&d(q,i.cssClasses.tap,i.animationDuration),D.forEach((function(t){Ct(t,At(n[t],t),!0,!1,o)}));for(var s=1===D.length?0:1;s<D.length;++s)D.forEach((function(t){Ct(t,M[t],!0,!0,o)}));zt(),D.forEach((function(t){vt("update",t),null!==n[t]&&e&&vt("set",t)}))}function Mt(t){_t(i.start,t)}function Dt(t,e,i,o){if(!((t=Number(t))>=0&&t<D.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Ct(t,At(e,t),!0,!0,o),vt("update",t),i&&vt("set",t)}function Ot(t){if(void 0===t&&(t=!1),t)return 1===_.length?_[0]:_.slice(0);var e=_.map(i.format.to);return 1===e.length?e[0]:e}function kt(){for(bt(P.aria),bt(P.tooltips),Object.keys(i.cssClasses).forEach((function(t){g(q,i.cssClasses[t])}));q.firstChild;)q.removeChild(q.firstChild);delete q.noUiSlider}function Tt(t){var e=M[t],o=A.getNearbySteps(e),n=_[t],r=o.thisStep.step,s=null;if(i.snap)return[n-o.stepBefore.startValue||null,o.stepAfter.startValue-n||null];!1!==r&&n+r>o.stepAfter.startValue&&(r=o.stepAfter.startValue-n),s=n>o.thisStep.startValue?o.thisStep.step:!1!==o.stepBefore.step&&n-o.stepBefore.highestStep,100===e?r=null:0===e&&(s=null);var a=A.countStepDecimals();return null!==r&&!1!==r&&(r=Number(r.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,r]}function Pt(){return D.map(Tt)}function $t(t,e){var o=Ot(),r=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];r.forEach((function(e){void 0!==t[e]&&(a[e]=t[e])}));var s=ot(a);r.forEach((function(e){void 0!==t[e]&&(i[e]=s[e])})),A=s.spectrum,i.margin=s.margin,i.limit=s.limit,i.padding=s.padding,i.pips?tt(i.pips):Z(),i.tooltips?G():W(),M=[],_t(n(t.start)?t.start:o,e)}function Lt(){l=U(q),F(i.connect,l),ft(i.events),_t(i.start),i.pips&&tt(i.pips),i.tooltips&&G(),X()}Lt();var Nt={destroy:kt,steps:Pt,on:gt,off:bt,get:Ot,set:_t,setHandle:Dt,reset:Mt,__moveHandles:function(t,e,i){xt(t,e,M,i)},options:a,updateOptions:$t,target:q,removePips:Z,removeTooltips:W,getTooltips:function(){return S},getOrigins:function(){return h},pips:tt};return Nt}function rt(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var i=nt(t,ot(e),e);return t.noUiSlider=i,i}var st={__spectrum:O,cssClasses:T,create:rt};t.create=rt,t.cssClasses=T,t.default=st,Object.defineProperty(t,"__esModule",{value:!0})}(e)})),I=$(N),j=N.PipsMode,R="top",F="bottom",U="right",H="left",V="auto",B=[R,F,U,H],W="start",G="end",X="viewport",Y="popper",Q=B.reduce((function(t,e){return t.concat([e+"-"+W,e+"-"+G])}),[]),J=[].concat(B,[V]).reduce((function(t,e){return t.concat([e,e+"-"+W,e+"-"+G])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Z(t){return t?(t.nodeName||"").toLowerCase():null}function tt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function et(t){return t instanceof tt(t).Element||t instanceof Element}function it(t){return t instanceof tt(t).HTMLElement||t instanceof HTMLElement}function ot(t){return"undefined"!=typeof ShadowRoot&&(t instanceof tt(t).ShadowRoot||t instanceof ShadowRoot)}var nt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},o=e.attributes[t]||{},n=e.elements[t];it(n)&&Z(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(t){var e=o[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],n=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});it(o)&&Z(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]};function rt(t){return t.split("-")[0]}function st(t,e){var i=t.getBoundingClientRect();return{width:i.width/1,height:i.height/1,top:i.top/1,right:i.right/1,bottom:i.bottom/1,left:i.left/1,x:i.left/1,y:i.top/1}}function at(t){var e=st(t),i=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:o}}function ct(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ot(i)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function lt(t){return tt(t).getComputedStyle(t)}function dt(t){return["table","td","th"].indexOf(Z(t))>=0}function pt(t){return((et(t)?t.ownerDocument:t.document)||window.document).documentElement}function ut(t){return"html"===Z(t)?t:t.assignedSlot||t.parentNode||(ot(t)?t.host:null)||pt(t)}function ht(t){return it(t)&&"fixed"!==lt(t).position?t.offsetParent:null}function ft(t){for(var e=tt(t),i=ht(t);i&&dt(i)&&"static"===lt(i).position;)i=ht(i);return i&&("html"===Z(i)||"body"===Z(i)&&"static"===lt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&it(t)&&"fixed"===lt(t).position)return null;for(var i=ut(t);it(i)&&["html","body"].indexOf(Z(i))<0;){var o=lt(i);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return i;i=i.parentNode}return null}(t)||e}function gt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var mt=Math.max,bt=Math.min,vt=Math.round;function wt(t,e,i){return mt(t,bt(e,i))}function yt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function xt(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Et={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,o=t.name,n=t.options,r=i.elements.arrow,s=i.modifiersData.popperOffsets,a=rt(i.placement),c=gt(a),l=[H,U].indexOf(a)>=0?"height":"width";if(r&&s){var d=function(t,e){return yt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:xt(t,B))}(n.padding,i),p=at(r),u="y"===c?R:H,h="y"===c?F:U,f=i.rects.reference[l]+i.rects.reference[c]-s[c]-i.rects.popper[l],g=s[c]-i.rects.reference[c],m=ft(r),b=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,v=f/2-g/2,w=d[u],y=b-p[l]-d[h],x=b/2-p[l]/2+v,E=wt(w,x,y),S=c;i.modifiersData[o]=((e={})[S]=E,e.centerOffset=E-x,e)}},effect:function(t){var e=t.state,i=t.options.element,o=void 0===i?"[data-popper-arrow]":i;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&ct(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function St(t){return t.split("-")[1]}var zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ct(t){var e,i=t.popper,o=t.popperRect,n=t.placement,r=t.variation,s=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,d=t.roundOffsets,p=!0===d?function(t){var e=t.x,i=t.y,o=window.devicePixelRatio||1;return{x:vt(vt(e*o)/o)||0,y:vt(vt(i*o)/o)||0}}(s):"function"==typeof d?d(s):s,u=p.x,h=void 0===u?0:u,f=p.y,g=void 0===f?0:f,m=s.hasOwnProperty("x"),b=s.hasOwnProperty("y"),v=H,w=R,y=window;if(l){var x=ft(i),E="clientHeight",S="clientWidth";x===tt(i)&&"static"!==lt(x=pt(i)).position&&"absolute"===a&&(E="scrollHeight",S="scrollWidth"),x=x,n!==R&&(n!==H&&n!==U||r!==G)||(w=F,g-=x[E]-o.height,g*=c?1:-1),n!==H&&(n!==R&&n!==F||r!==G)||(v=U,h-=x[S]-o.width,h*=c?1:-1)}var z,C=Object.assign({position:a},l&&zt);return c?Object.assign({},C,((z={})[w]=b?"0":"",z[v]=m?"0":"",z.transform=(y.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",z)):Object.assign({},C,((e={})[w]=b?g+"px":"",e[v]=m?h+"px":"",e.transform="",e))}var qt={passive:!0};var At={left:"right",right:"left",bottom:"top",top:"bottom"};function _t(t){return t.replace(/left|right|bottom|top/g,(function(t){return At[t]}))}var Mt={start:"end",end:"start"};function Dt(t){return t.replace(/start|end/g,(function(t){return Mt[t]}))}function Ot(t){var e=tt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function kt(t){return st(pt(t)).left+Ot(t).scrollLeft}function Tt(t){var e=lt(t),i=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+n+o)}function Pt(t){return["html","body","#document"].indexOf(Z(t))>=0?t.ownerDocument.body:it(t)&&Tt(t)?t:Pt(ut(t))}function $t(t,e){var i;void 0===e&&(e=[]);var o=Pt(t),n=o===(null==(i=t.ownerDocument)?void 0:i.body),r=tt(o),s=n?[r].concat(r.visualViewport||[],Tt(o)?o:[]):o,a=e.concat(s);return n?a:a.concat($t(ut(s)))}function Lt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Nt(t,e){return e===X?Lt(function(t){var e=tt(t),i=pt(t),o=e.visualViewport,n=i.clientWidth,r=i.clientHeight,s=0,a=0;return o&&(n=o.width,r=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,a=o.offsetTop)),{width:n,height:r,x:s+kt(t),y:a}}(t)):it(e)?function(t){var e=st(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Lt(function(t){var e,i=pt(t),o=Ot(t),n=null==(e=t.ownerDocument)?void 0:e.body,r=mt(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=mt(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-o.scrollLeft+kt(t),c=-o.scrollTop;return"rtl"===lt(n||i).direction&&(a+=mt(i.clientWidth,n?n.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(pt(t)))}function It(t,e,i){var o="clippingParents"===e?function(t){var e=$t(ut(t)),i=["absolute","fixed"].indexOf(lt(t).position)>=0&&it(t)?ft(t):t;return et(i)?e.filter((function(t){return et(t)&&ct(t,i)&&"body"!==Z(t)})):[]}(t):[].concat(e),n=[].concat(o,[i]),r=n[0],s=n.reduce((function(e,i){var o=Nt(t,i);return e.top=mt(o.top,e.top),e.right=bt(o.right,e.right),e.bottom=bt(o.bottom,e.bottom),e.left=mt(o.left,e.left),e}),Nt(t,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function jt(t){var e,i=t.reference,o=t.element,n=t.placement,r=n?rt(n):null,s=n?St(n):null,a=i.x+i.width/2-o.width/2,c=i.y+i.height/2-o.height/2;switch(r){case R:e={x:a,y:i.y-o.height};break;case F:e={x:a,y:i.y+i.height};break;case U:e={x:i.x+i.width,y:c};break;case H:e={x:i.x-o.width,y:c};break;default:e={x:i.x,y:i.y}}var l=r?gt(r):null;if(null!=l){var d="y"===l?"height":"width";switch(s){case W:e[l]=e[l]-(i[d]/2-o[d]/2);break;case G:e[l]=e[l]+(i[d]/2-o[d]/2)}}return e}function Rt(t,e){void 0===e&&(e={});var i=e,o=i.placement,n=void 0===o?t.placement:o,r=i.boundary,s=void 0===r?"clippingParents":r,a=i.rootBoundary,c=void 0===a?X:a,l=i.elementContext,d=void 0===l?Y:l,p=i.altBoundary,u=void 0!==p&&p,h=i.padding,f=void 0===h?0:h,g=yt("number"!=typeof f?f:xt(f,B)),m=d===Y?"reference":Y,b=t.rects.popper,v=t.elements[u?m:d],w=It(et(v)?v:v.contextElement||pt(t.elements.popper),s,c),y=st(t.elements.reference),x=jt({reference:y,element:b,strategy:"absolute",placement:n}),E=Lt(Object.assign({},b,x)),S=d===Y?E:y,z={top:w.top-S.top+g.top,bottom:S.bottom-w.bottom+g.bottom,left:w.left-S.left+g.left,right:S.right-w.right+g.right},C=t.modifiersData.offset;if(d===Y&&C){var q=C[n];Object.keys(z).forEach((function(t){var e=[U,F].indexOf(t)>=0?1:-1,i=[R,F].indexOf(t)>=0?"y":"x";z[t]+=q[i]*e}))}return z}function Ft(t,e){void 0===e&&(e={});var i=e,o=i.placement,n=i.boundary,r=i.rootBoundary,s=i.padding,a=i.flipVariations,c=i.allowedAutoPlacements,l=void 0===c?J:c,d=St(o),p=d?a?Q:Q.filter((function(t){return St(t)===d})):B,u=p.filter((function(t){return l.indexOf(t)>=0}));0===u.length&&(u=p);var h=u.reduce((function(e,i){return e[i]=Rt(t,{placement:i,boundary:n,rootBoundary:r,padding:s})[rt(i)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}var Ut={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=i.mainAxis,r=void 0===n||n,s=i.altAxis,a=void 0===s||s,c=i.fallbackPlacements,l=i.padding,d=i.boundary,p=i.rootBoundary,u=i.altBoundary,h=i.flipVariations,f=void 0===h||h,g=i.allowedAutoPlacements,m=e.options.placement,b=rt(m),v=c||(b===m||!f?[_t(m)]:function(t){if(rt(t)===V)return[];var e=_t(t);return[Dt(t),e,Dt(e)]}(m)),w=[m].concat(v).reduce((function(t,i){return t.concat(rt(i)===V?Ft(e,{placement:i,boundary:d,rootBoundary:p,padding:l,flipVariations:f,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,x=e.rects.popper,E=new Map,S=!0,z=w[0],C=0;C<w.length;C++){var q=w[C],A=rt(q),_=St(q)===W,M=[R,F].indexOf(A)>=0,D=M?"width":"height",O=Rt(e,{placement:q,boundary:d,rootBoundary:p,altBoundary:u,padding:l}),k=M?_?U:H:_?F:R;y[D]>x[D]&&(k=_t(k));var T=_t(k),P=[];if(r&&P.push(O[A]<=0),a&&P.push(O[k]<=0,O[T]<=0),P.every((function(t){return t}))){z=q,S=!1;break}E.set(q,P)}if(S)for(var $=function(t){var e=w.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return z=e,"break"},L=f?3:1;L>0;L--){if("break"===$(L))break}e.placement!==z&&(e.modifiersData[o]._skip=!0,e.placement=z,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ht(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Vt(t){return[R,U,F,H].some((function(e){return t[e]>=0}))}var Bt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,o=t.name,n=i.offset,r=void 0===n?[0,0]:n,s=J.reduce((function(t,i){return t[i]=function(t,e,i){var o=rt(t),n=[H,R].indexOf(o)>=0?-1:1,r="function"==typeof i?i(Object.assign({},e,{placement:t})):i,s=r[0],a=r[1];return s=s||0,a=(a||0)*n,[H,U].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(i,e.rects,r),t}),{}),a=s[e.placement],c=a.x,l=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[o]=s}};var Wt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,o=t.name,n=i.mainAxis,r=void 0===n||n,s=i.altAxis,a=void 0!==s&&s,c=i.boundary,l=i.rootBoundary,d=i.altBoundary,p=i.padding,u=i.tether,h=void 0===u||u,f=i.tetherOffset,g=void 0===f?0:f,m=Rt(e,{boundary:c,rootBoundary:l,padding:p,altBoundary:d}),b=rt(e.placement),v=St(e.placement),w=!v,y=gt(b),x="x"===y?"y":"x",E=e.modifiersData.popperOffsets,S=e.rects.reference,z=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,q={x:0,y:0};if(E){if(r||a){var A="y"===y?R:H,_="y"===y?F:U,M="y"===y?"height":"width",D=E[y],O=E[y]+m[A],k=E[y]-m[_],T=h?-z[M]/2:0,P=v===W?S[M]:z[M],$=v===W?-z[M]:-S[M],L=e.elements.arrow,N=h&&L?at(L):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},j=I[A],V=I[_],B=wt(0,S[M],N[M]),G=w?S[M]/2-T-B-j-C:P-B-j-C,X=w?-S[M]/2+T+B+V+C:$+B+V+C,Y=e.elements.arrow&&ft(e.elements.arrow),Q=Y?"y"===y?Y.clientTop||0:Y.clientLeft||0:0,J=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+G-J-Q,Z=E[y]+X-J;if(r){var tt=wt(h?bt(O,K):O,D,h?mt(k,Z):k);E[y]=tt,q[y]=tt-D}if(a){var et="x"===y?R:H,it="x"===y?F:U,ot=E[x],nt=ot+m[et],st=ot-m[it],ct=wt(h?bt(nt,K):nt,ot,h?mt(st,Z):st);E[x]=ct,q[x]=ct-ot}}e.modifiersData[o]=q}},requiresIfExists:["offset"]};function Gt(t,e,i){void 0===i&&(i=!1);var o=it(e);it(e)&&function(t){var e=t.getBoundingClientRect(),i=e.width/t.offsetWidth||1,o=e.height/t.offsetHeight||1}(e);var n,r=pt(e),s=st(t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(o||!o&&!i)&&(("body"!==Z(e)||Tt(r))&&(a=(n=e)!==tt(n)&&it(n)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(n):Ot(n)),it(e)?((c=st(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=kt(r))),{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Xt(t){var e=new Map,i=new Set,o=[];function n(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var o=e.get(t);o&&n(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||n(t)})),o}var Yt={placement:"bottom",modifiers:[],strategy:"absolute"};function Qt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Jt(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,o=void 0===i?[]:i,n=e.defaultOptions,r=void 0===n?Yt:n;return function(t,e,i){void 0===i&&(i=r);var n,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Yt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],l=!1,d={state:a,setOptions:function(i){var n="function"==typeof i?i(a.options):i;p(),a.options=Object.assign({},r,a.options,n),a.scrollParents={reference:et(t)?$t(t):t.contextElement?$t(t.contextElement):[],popper:$t(e)};var s=function(t){var e=Xt(t);return K.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}(function(t){var e=t.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(o,a.options.modifiers)));return a.orderedModifiers=s.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,o=void 0===i?{}:i,n=t.effect;if("function"==typeof n){var r=n({state:a,name:e,instance:d,options:o}),s=function(){};c.push(r||s)}})),d.update()},forceUpdate:function(){if(!l){var t=a.elements,e=t.reference,i=t.popper;if(Qt(e,i)){a.rects={reference:Gt(e,ft(i),"fixed"===a.options.strategy),popper:at(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var n=a.orderedModifiers[o],r=n.fn,s=n.options,c=void 0===s?{}:s,p=n.name;"function"==typeof r&&(a=r({state:a,options:c,name:p,instance:d})||a)}else a.reset=!1,o=-1}}},update:(n=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(n())}))}))),s}),destroy:function(){p(),l=!0}};if(!Qt(t,e))return d;function p(){c.forEach((function(t){return t()})),c=[]}return d.setOptions(i).then((function(t){!l&&i.onFirstUpdate&&i.onFirstUpdate(t)})),d}}var Kt=Jt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,o=t.options,n=o.scroll,r=void 0===n||n,s=o.resize,a=void 0===s||s,c=tt(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach((function(t){t.addEventListener("scroll",i.update,qt)})),a&&c.addEventListener("resize",i.update,qt),function(){r&&l.forEach((function(t){t.removeEventListener("scroll",i.update,qt)})),a&&c.removeEventListener("resize",i.update,qt)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=jt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,o=i.gpuAcceleration,n=void 0===o||o,r=i.adaptive,s=void 0===r||r,a=i.roundOffsets,c=void 0===a||a,l={placement:rt(e.placement),variation:St(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Ct(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ct(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},nt,Bt,Ut,Wt,Et,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,o=e.rects.reference,n=e.rects.popper,r=e.modifiersData.preventOverflow,s=Rt(e,{elementContext:"reference"}),a=Rt(e,{altBoundary:!0}),c=Ht(s,o),l=Ht(a,n,r),d=Vt(c),p=Vt(l);e.modifiersData[i]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}}]}),Zt='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',te="tippy-content",ee="tippy-arrow",ie="tippy-svg-arrow",oe={passive:!0,capture:!0},ne=function(){return document.body};function re(t,e,i){if(Array.isArray(t)){var o=t[e];return null==o?Array.isArray(i)?i[e]:i:o}return t}function se(t,e){var i={}.toString.call(t);return 0===i.indexOf("[object")&&i.indexOf(e+"]")>-1}function ae(t,e){return"function"==typeof t?t.apply(void 0,e):t}function ce(t,e){return 0===e?t:function(o){clearTimeout(i),i=setTimeout((function(){t(o)}),e)};var i}function le(t){return[].concat(t)}function de(t,e){-1===t.indexOf(e)&&t.push(e)}function pe(t){return[].slice.call(t)}function ue(){return document.createElement("div")}function he(t){return["Element","Fragment"].some((function(e){return se(t,e)}))}function fe(t){return he(t)?[t]:function(t){return se(t,"NodeList")}(t)?pe(t):Array.isArray(t)?t:pe(document.querySelectorAll(t))}function ge(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function me(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function be(t,e,i){var o=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[o](e,i)}))}function ve(t,e){for(var i=e;i;){var o;if(t.contains(i))return!0;i=null==(o=null==i.getRootNode?void 0:i.getRootNode())?void 0:o.host}return!1}var we={isTouch:!1},ye=0;function xe(){we.isTouch||(we.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ee))}function Ee(){var t=performance.now();t-ye<20&&(we.isTouch=!1,document.removeEventListener("mousemove",Ee)),ye=t}function Se(){var t,e=document.activeElement;if((t=e)&&t._tippy&&t._tippy.reference===t){var i=e._tippy;e.blur&&!i.state.isVisible&&e.blur()}}var ze=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,Ce=Object.assign({appendTo:ne,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),qe=Object.keys(Ce);function Ae(t){var e=(t.plugins||[]).reduce((function(e,i){var o,n=i.name,r=i.defaultValue;n&&(e[n]=void 0!==t[n]?t[n]:null!=(o=Ce[n])?o:r);return e}),{});return Object.assign({},t,{},e)}function _e(t,e){var i=Object.assign({},e,{content:ae(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(Ae(Object.assign({},Ce,{plugins:e}))):qe).reduce((function(e,i){var o=(t.getAttribute("data-tippy-"+i)||"").trim();if(!o)return e;if("content"===i)e[i]=o;else try{e[i]=JSON.parse(o)}catch(t){e[i]=o}return e}),{})}(t,e.plugins));return i.aria=Object.assign({},Ce.aria,{},i.aria),i.aria={expanded:"auto"===i.aria.expanded?e.interactive:i.aria.expanded,content:"auto"===i.aria.content?e.interactive?null:"describedby":i.aria.content},i}function Me(t,e){t.innerHTML=e}function De(t){var e=ue();return!0===t?e.className=ee:(e.className=ie,he(t)?e.appendChild(t):Me(e,t)),e}function Oe(t,e){he(e.content)?(Me(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?Me(t,e.content):t.textContent=e.content)}function ke(t){var e=t.firstElementChild,i=pe(e.children);return{box:e,content:i.find((function(t){return t.classList.contains(te)})),arrow:i.find((function(t){return t.classList.contains(ee)||t.classList.contains(ie)})),backdrop:i.find((function(t){return t.classList.contains("tippy-backdrop")}))}}function Te(t){var e=ue(),i=ue();i.className="tippy-box",i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var o=ue();function n(i,o){var n=ke(e),r=n.box,s=n.content,a=n.arrow;o.theme?r.setAttribute("data-theme",o.theme):r.removeAttribute("data-theme"),"string"==typeof o.animation?r.setAttribute("data-animation",o.animation):r.removeAttribute("data-animation"),o.inertia?r.setAttribute("data-inertia",""):r.removeAttribute("data-inertia"),r.style.maxWidth="number"==typeof o.maxWidth?o.maxWidth+"px":o.maxWidth,o.role?r.setAttribute("role",o.role):r.removeAttribute("role"),i.content===o.content&&i.allowHTML===o.allowHTML||Oe(s,t.props),o.arrow?a?i.arrow!==o.arrow&&(r.removeChild(a),r.appendChild(De(o.arrow))):r.appendChild(De(o.arrow)):a&&r.removeChild(a)}return o.className=te,o.setAttribute("data-state","hidden"),Oe(o,t.props),e.appendChild(i),i.appendChild(o),n(t.props,t.props),{popper:e,onUpdate:n}}Te.$$tippy=!0;var Pe=1,$e=[],Le=[];function Ne(t,e){var i,o,n,r,s,a,c,l,d,p=_e(t,Object.assign({},Ce,{},Ae((i=e,Object.keys(i).reduce((function(t,e){return void 0!==i[e]&&(t[e]=i[e]),t}),{}))))),u=!1,h=!1,f=!1,g=!1,m=[],b=ce(X,p.interactiveDebounce),v=Pe++,w=(d=p.plugins).filter((function(t,e){return d.indexOf(t)===e})),y={id:v,reference:t,popper:ue(),popperInstance:null,props:p,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:w,clearDelayTimeouts:function(){clearTimeout(o),clearTimeout(n),cancelAnimationFrame(r)},setProps:function(e){if(y.state.isDestroyed)return;P("onBeforeUpdate",[y,e]),W();var i=y.props,o=_e(t,Object.assign({},y.props,{},e,{ignoreAttributes:!0}));y.props=o,B(),i.interactiveDebounce!==o.interactiveDebounce&&(N(),b=ce(X,o.interactiveDebounce));i.triggerTarget&&!o.triggerTarget?le(i.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):o.triggerTarget&&t.removeAttribute("aria-expanded");L(),T(),S&&S(i,o);y.popperInstance&&(K(),tt().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));P("onAfterUpdate",[y,e])},setContent:function(t){y.setProps({content:t})},show:function(){var t=y.state.isVisible,e=y.state.isDestroyed,i=!y.state.isEnabled,o=we.isTouch&&!y.props.touch,n=re(y.props.duration,0,Ce.duration);if(t||e||i||o)return;if(M().hasAttribute("disabled"))return;if(P("onShow",[y],!1),!1===y.props.onShow(y))return;y.state.isVisible=!0,_()&&(E.style.visibility="visible");T(),F(),y.state.isMounted||(E.style.transition="none");if(_()){var r=O(),s=r.box,a=r.content;ge([s,a],0)}c=function(){var t;if(y.state.isVisible&&!g){if(g=!0,E.offsetHeight,E.style.transition=y.props.moveTransition,_()&&y.props.animation){var e=O(),i=e.box,o=e.content;ge([i,o],n),me([i,o],"visible")}$(),L(),de(Le,y),null==(t=y.popperInstance)||t.forceUpdate(),y.state.isMounted=!0,P("onMount",[y]),y.props.animation&&_()&&function(t,e){H(t,e)}(n,(function(){y.state.isShown=!0,P("onShown",[y])}))}},function(){var t,e=y.props.appendTo,i=M();t=y.props.interactive&&e===ne||"parent"===e?i.parentNode:ae(e,[i]);t.contains(E)||t.appendChild(E);K()}()},hide:function(){var t=!y.state.isVisible,e=y.state.isDestroyed,i=!y.state.isEnabled,o=re(y.props.duration,1,Ce.duration);if(t||e||i)return;if(P("onHide",[y],!1),!1===y.props.onHide(y))return;y.state.isVisible=!1,y.state.isShown=!1,g=!1,u=!1,_()&&(E.style.visibility="hidden");if(N(),U(),T(),_()){var n=O(),r=n.box,s=n.content;y.props.animation&&(ge([r,s],o),me([r,s],"hidden"))}$(),L(),y.props.animation?_()&&function(t,e){H(t,(function(){!y.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&e()}))}(o,y.unmount):y.unmount()},hideWithInteractivity:function(t){D().addEventListener("mousemove",b),de($e,b),b(t)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide();if(!y.state.isMounted)return;Z(),tt().forEach((function(t){t._tippy.unmount()})),E.parentNode&&E.parentNode.removeChild(E);Le=Le.filter((function(t){return t!==y})),y.state.isMounted=!1,P("onHidden",[y])},destroy:function(){if(y.state.isDestroyed)return;y.clearDelayTimeouts(),y.unmount(),W(),delete t._tippy,y.state.isDestroyed=!0,P("onDestroy",[y])}};if(!p.render)return y;var x=p.render(y),E=x.popper,S=x.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+y.id,y.popper=E,t._tippy=y,E._tippy=y;var z=w.map((function(t){return t.fn(y)})),C=t.hasAttribute("aria-expanded");return B(),L(),T(),P("onCreate",[y]),p.showOnCreate&&et(),E.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),E.addEventListener("mouseleave",(function(t){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&(D().addEventListener("mousemove",b),b(t))})),y;function q(){var t=y.props.touch;return Array.isArray(t)?t:[t,0]}function A(){return"hold"===q()[0]}function _(){var t;return!!(null==(t=y.props.render)?void 0:t.$$tippy)}function M(){return l||t}function D(){var t=M().parentNode;return t?function(t){var e,i=le(t)[0];return(null==i||null==(e=i.ownerDocument)?void 0:e.body)?i.ownerDocument:document}(t):document}function O(){return ke(E)}function k(t){return y.state.isMounted&&!y.state.isVisible||we.isTouch||s&&"focus"===s.type?0:re(y.props.delay,t?0:1,Ce.delay)}function T(){E.style.pointerEvents=y.props.interactive&&y.state.isVisible?"":"none",E.style.zIndex=""+y.props.zIndex}function P(t,e,i){var o;(void 0===i&&(i=!0),z.forEach((function(i){i[t]&&i[t].apply(void 0,e)})),i)&&(o=y.props)[t].apply(o,e)}function $(){var e=y.props.aria;if(e.content){var i="aria-"+e.content,o=E.id;le(y.props.triggerTarget||t).forEach((function(t){var e=t.getAttribute(i);if(y.state.isVisible)t.setAttribute(i,e?e+" "+o:o);else{var n=e&&e.replace(o,"").trim();n?t.setAttribute(i,n):t.removeAttribute(i)}}))}}function L(){!C&&y.props.aria.expanded&&le(y.props.triggerTarget||t).forEach((function(t){y.props.interactive?t.setAttribute("aria-expanded",y.state.isVisible&&t===M()?"true":"false"):t.removeAttribute("aria-expanded")}))}function N(){D().removeEventListener("mousemove",b),$e=$e.filter((function(t){return t!==b}))}function I(t){if(!we.isTouch||!f&&"mousedown"!==t.type){var e=t.composedPath&&t.composedPath()[0]||t.target;if(!y.props.interactive||!ve(E,e)){if(ve(M(),e)){if(we.isTouch)return;if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[y,t]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),h=!0,setTimeout((function(){h=!1})),y.state.isMounted||U())}}}function j(){f=!0}function R(){f=!1}function F(){var t=D();t.addEventListener("mousedown",I,!0),t.addEventListener("touchend",I,oe),t.addEventListener("touchstart",R,oe),t.addEventListener("touchmove",j,oe)}function U(){var t=D();t.removeEventListener("mousedown",I,!0),t.removeEventListener("touchend",I,oe),t.removeEventListener("touchstart",R,oe),t.removeEventListener("touchmove",j,oe)}function H(t,e){var i=O().box;function o(t){t.target===i&&(be(i,"remove",o),e())}if(0===t)return e();be(i,"remove",a),be(i,"add",o),a=o}function V(e,i,o){void 0===o&&(o=!1),le(y.props.triggerTarget||t).forEach((function(t){t.addEventListener(e,i,o),m.push({node:t,eventType:e,handler:i,options:o})}))}function B(){var t;A()&&(V("touchstart",G,{passive:!0}),V("touchend",Y,{passive:!0})),(t=y.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(V(t,G),t){case"mouseenter":V("mouseleave",Y);break;case"focus":V(ze?"focusout":"blur",Q);break;case"focusin":V("focusout",Q)}}))}function W(){m.forEach((function(t){var e=t.node,i=t.eventType,o=t.handler,n=t.options;e.removeEventListener(i,o,n)})),m=[]}function G(t){var e,i=!1;if(y.state.isEnabled&&!J(t)&&!h){var o="focus"===(null==(e=s)?void 0:e.type);s=t,l=t.currentTarget,L(),!y.state.isVisible&&se(t,"MouseEvent")&&$e.forEach((function(e){return e(t)})),"click"===t.type&&(y.props.trigger.indexOf("mouseenter")<0||u)&&!1!==y.props.hideOnClick&&y.state.isVisible?i=!0:et(t),"click"===t.type&&(u=!i),i&&!o&&it(t)}}function X(t){var e=t.target,i=M().contains(e)||E.contains(e);if("mousemove"!==t.type||!i){var o=tt().concat(E).map((function(t){var e,i=null==(e=t._tippy.popperInstance)?void 0:e.state;return i?{popperRect:t.getBoundingClientRect(),popperState:i,props:p}:null})).filter(Boolean);(function(t,e){var i=e.clientX,o=e.clientY;return t.every((function(t){var e=t.popperRect,n=t.popperState,r=t.props.interactiveBorder,s=n.placement.split("-")[0],a=n.modifiersData.offset;if(!a)return!0;var c="bottom"===s?a.top.y:0,l="top"===s?a.bottom.y:0,d="right"===s?a.left.x:0,p="left"===s?a.right.x:0,u=e.top-o+c>r,h=o-e.bottom-l>r,f=e.left-i+d>r,g=i-e.right-p>r;return u||h||f||g}))})(o,t)&&(N(),it(t))}}function Y(t){J(t)||y.props.trigger.indexOf("click")>=0&&u||(y.props.interactive?y.hideWithInteractivity(t):it(t))}function Q(t){y.props.trigger.indexOf("focusin")<0&&t.target!==M()||y.props.interactive&&t.relatedTarget&&E.contains(t.relatedTarget)||it(t)}function J(t){return!!we.isTouch&&A()!==t.type.indexOf("touch")>=0}function K(){Z();var e=y.props,i=e.popperOptions,o=e.placement,n=e.offset,r=e.getReferenceClientRect,s=e.moveTransition,a=_()?ke(E).arrow:null,l=r?{getBoundingClientRect:r,contextElement:r.contextElement||M()}:t,d={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(_()){var i=O().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?i.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?i.setAttribute("data-"+t,""):i.removeAttribute("data-"+t)})),e.attributes.popper={}}}},p=[{name:"offset",options:{offset:n}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},d];_()&&a&&p.push({name:"arrow",options:{element:a,padding:3}}),p.push.apply(p,(null==i?void 0:i.modifiers)||[]),y.popperInstance=Kt(l,E,Object.assign({},i,{placement:o,onFirstUpdate:c,modifiers:p}))}function Z(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function tt(){return pe(E.querySelectorAll("[data-tippy-root]"))}function et(t){y.clearDelayTimeouts(),t&&P("onTrigger",[y,t]),F();var e=k(!0),i=q(),n=i[0],r=i[1];we.isTouch&&"hold"===n&&r&&(e=r),e?o=setTimeout((function(){y.show()}),e):y.show()}function it(t){if(y.clearDelayTimeouts(),P("onUntrigger",[y,t]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&u)){var e=k(!1);e?n=setTimeout((function(){y.state.isVisible&&y.hide()}),e):r=requestAnimationFrame((function(){y.hide()}))}}else U()}}function Ie(t,e){void 0===e&&(e={});var i=Ce.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",xe,oe),window.addEventListener("blur",Se);var o=Object.assign({},e,{plugins:i}),n=fe(t).reduce((function(t,e){var i=e&&Ne(e,o);return i&&t.push(i),t}),[]);return he(t)?n[0]:n}Ie.defaultProps=Ce,Ie.setDefaultProps=function(t){Object.keys(t).forEach((function(e){Ce[e]=t[e]}))},Ie.currentInput=we;var je=Object.assign({},nt,{effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow)}}),Re=function(t,e){var i;void 0===e&&(e={});var o,n=t,r=[],s=e.overrides,a=[],c=!1;function l(){r=n.map((function(t){return t.reference}))}function d(t){n.forEach((function(e){t?e.enable():e.disable()}))}function p(t){return n.map((function(e){var i=e.setProps;return e.setProps=function(n){i(n),e.reference===o&&t.setProps(n)},function(){e.setProps=i}}))}function u(t,e){var i=r.indexOf(e);if(e!==o){o=e;var a=(s||[]).concat("content").reduce((function(t,e){return t[e]=n[i].props[e],t}),{});t.setProps(Object.assign({},a,{getReferenceClientRect:"function"==typeof a.getReferenceClientRect?a.getReferenceClientRect:function(){return e.getBoundingClientRect()}}))}}d(!1),l();var h={fn:function(){return{onDestroy:function(){d(!0)},onHidden:function(){o=null},onClickOutside:function(t){t.props.showOnCreate&&!c&&(c=!0,o=null)},onShow:function(t){t.props.showOnCreate&&!c&&(c=!0,u(t,r[0]))},onTrigger:function(t,e){u(t,e.currentTarget)}}}},f=Ie(ue(),Object.assign({},function(t,e){var i=Object.assign({},t);return e.forEach((function(t){delete i[t]})),i}(e,["overrides"]),{plugins:[h].concat(e.plugins||[]),triggerTarget:r,popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((null==(i=e.popperOptions)?void 0:i.modifiers)||[],[je])})})),g=f.show;f.show=function(t){if(g(),!o&&null==t)return u(f,r[0]);if(!o||null!=t){if("number"==typeof t)return r[t]&&u(f,r[t]);if(n.indexOf(t)>=0){var e=t.reference;return u(f,e)}return r.indexOf(t)>=0?u(f,t):void 0}},f.showNext=function(){var t=r[0];if(!o)return f.show(0);var e=r.indexOf(o);f.show(r[e+1]||t)},f.showPrevious=function(){var t=r[r.length-1];if(!o)return f.show(t);var e=r.indexOf(o),i=r[e-1]||t;f.show(i)};var m=f.setProps;return f.setProps=function(t){s=t.overrides||s,m(t)},f.setInstances=function(t){d(!0),a.forEach((function(t){return t()})),n=t,d(!1),l(),p(f),f.setProps({triggerTarget:r})},a=p(f),f};Ie.setDefaultProps({render:Te});class Fe{static isMobile(){return!window.matchMedia("(min-width: 460px)").matches}}const Ue="X^½",He="Rx",Ve="Ry",Be="Rz",We="Swap",Ge="Bloch",Xe="Measure";var Ye=L((function(t,e){
/**
     * @license Fraction.js v4.1.1 23/05/2021
     * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
     *
     * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
!function(e){var i={s:1,n:0,d:1};function o(t){function e(){var e=Error.apply(this,arguments);e.name=this.name=t,this.stack=e.stack,this.message=e.message}function i(){}return i.prototype=Error.prototype,e.prototype=new i,e}var n=p.DivisionByZero=o("DivisionByZero"),r=p.InvalidParameter=o("InvalidParameter");function s(t,e){return isNaN(t=parseInt(t,10))&&a(),t*e}function a(){throw new r}function c(t){for(var e={},i=t,o=2,n=4;n<=i;){for(;i%o==0;)i/=o,e[o]=(e[o]||0)+1;n+=1+2*o++}return i!==t?i>1&&(e[i]=(e[i]||0)+1):e[t]=(e[t]||0)+1,e}var l=function(t,e){var o,r=0,c=1,l=1,d=0,p=0,u=0,h=1,f=1,g=0,m=1,b=1,v=1,w=1e7;if(null==t);else if(void 0!==e)l=(r=t)*(c=e);else switch(typeof t){case"object":"d"in t&&"n"in t?(r=t.n,c=t.d,"s"in t&&(r*=t.s)):0 in t?(r=t[0],1 in t&&(c=t[1])):a(),l=r*c;break;case"number":if(t<0&&(l=t,t=-t),t%1==0)r=t;else if(t>0){for(t>=1&&(t/=f=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)));m<=w&&v<=w;){if(t===(o=(g+b)/(m+v))){m+v<=w?(r=g+b,c=m+v):v>m?(r=b,c=v):(r=g,c=m);break}t>o?(g+=b,m+=v):(b+=g,v+=m),m>w?(r=b,c=v):(r=g,c=m)}r*=f}else(isNaN(t)||isNaN(e))&&(c=r=NaN);break;case"string":if(null===(m=t.match(/\d+|./g))&&a(),"-"===m[g]?(l=-1,g++):"+"===m[g]&&g++,m.length===g+1?p=s(m[g++],l):"."===m[g+1]||"."===m[g]?("."!==m[g]&&(d=s(m[g++],l)),(++g+1===m.length||"("===m[g+1]&&")"===m[g+3]||"'"===m[g+1]&&"'"===m[g+3])&&(p=s(m[g],l),h=Math.pow(10,m[g].length),g++),("("===m[g]&&")"===m[g+2]||"'"===m[g]&&"'"===m[g+2])&&(u=s(m[g+1],l),f=Math.pow(10,m[g+1].length)-1,g+=3)):"/"===m[g+1]||":"===m[g+1]?(p=s(m[g],l),h=s(m[g+2],1),g+=3):"/"===m[g+3]&&" "===m[g+1]&&(d=s(m[g],l),p=s(m[g+2],l),h=s(m[g+4],1),g+=5),m.length<=g){l=r=u+(c=h*f)*d+f*p;break}default:a()}if(0===c)throw new n;i.s=l<0?-1:1,i.n=Math.abs(r),i.d=Math.abs(c)};function d(t,e){if(!t)return e;if(!e)return t;for(;;){if(!(t%=e))return e;if(!(e%=t))return t}}function p(t,e){if(!(this instanceof p))return new p(t,e);l(t,e),t=p.REDUCE?d(i.d,i.n):1,this.s=i.s,this.n=i.n/t,this.d=i.d/t}p.REDUCE=1,p.prototype={s:1,n:0,d:1,abs:function(){return new p(this.n,this.d)},neg:function(){return new p(-this.s*this.n,this.d)},add:function(t,e){return l(t,e),new p(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(t,e){return l(t,e),new p(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(t,e){return l(t,e),new p(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(t,e){return l(t,e),new p(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return new p(this)},mod:function(t,e){return isNaN(this.n)||isNaN(this.d)?new p(NaN):void 0===t?new p(this.s*this.n%this.d,1):(l(t,e),0===i.n&&0===this.d&&p(0,0),new p(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d))},gcd:function(t,e){return l(t,e),new p(d(i.n,this.n)*d(i.d,this.d),i.d*this.d)},lcm:function(t,e){return l(t,e),0===i.n&&0===this.n?new p:new p(i.n*this.n,d(i.n,this.n)*d(i.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):new p(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):new p(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):new p(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return new p(this.s*this.d,this.n)},pow:function(t,e){if(l(t,e),1===i.d)return i.s<0?new p(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):new p(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var o=c(this.n),n=c(this.d),r=1,s=1;for(var a in o)if("1"!==a){if("0"===a){r=0;break}if(o[a]*=i.n,o[a]%i.d!=0)return null;o[a]/=i.d,r*=Math.pow(a,o[a])}for(var a in n)if("1"!==a){if(n[a]*=i.n,n[a]%i.d!=0)return null;n[a]/=i.d,s*=Math.pow(a,n[a])}return i.s<0?new p(s,r):new p(r,s)},equals:function(t,e){return l(t,e),this.s*this.n*i.d==i.s*i.n*this.d},compare:function(t,e){l(t,e);var o=this.s*this.n*i.d-i.s*i.n*this.d;return(0<o)-(o<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;var e=this.abs().toContinued();function i(t){return 1===t.length?new p(t[0]):i(t.slice(1)).inverse().add(t[0])}t=t||.001;for(var o=0;o<e.length;o++){var n=i(e.slice(0,o+1));if(n.sub(this.abs()).abs().valueOf()<t)return n.mul(this.s)}return this},divisible:function(t,e){return l(t,e),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var e,i="",o=this.n,n=this.d;return this.s<0&&(i+="-"),1===n?i+=o:(t&&(e=Math.floor(o/n))>0&&(i+=e,i+=" ",o%=n),i+=o,i+="/",i+=n),i},toLatex:function(t){var e,i="",o=this.n,n=this.d;return this.s<0&&(i+="-"),1===n?i+=o:(t&&(e=Math.floor(o/n))>0&&(i+=e,o%=n),i+="\\frac{",i+=o,i+="}{",i+=n,i+="}"),i},toContinued:function(){var t,e=this.n,i=this.d,o=[];if(isNaN(e)||isNaN(i))return o;do{o.push(Math.floor(e/i)),t=e%i,e=i,i=t}while(1!==e);return o},toString:function(t){var e,i=this.n,o=this.d;if(isNaN(i)||isNaN(o))return"NaN";p.REDUCE||(i/=e=d(i,o),o/=e),t=t||15;var n=function(t,e){for(;e%2==0;e/=2);for(;e%5==0;e/=5);if(1===e)return 0;for(var i=10%e,o=1;1!==i;o++)if(i=10*i%e,o>2e3)return 0;return o}(0,o),r=function(t,e,i){for(var o=1,n=function(t,e,i){for(var o=1;e>0;t=t*t%i,e>>=1)1&e&&(o=o*t%i);return o}(10,i,e),r=0;r<300;r++){if(o===n)return r;o=10*o%e,n=10*n%e}return 0}(0,o,n),s=-1===this.s?"-":"";if(s+=i/o|0,i%=o,(i*=10)&&(s+="."),n){for(var a=r;a--;)s+=i/o|0,i%=o,i*=10;s+="(";for(a=n;a--;)s+=i/o|0,i%=o,i*=10;s+=")"}else for(a=t;i&&a--;)s+=i/o|0,i%=o,i*=10;return s}},Object.defineProperty(p,"__esModule",{value:!0}),p.default=p,p.Fraction=p,t.exports=p}()})),Qe=$(Ye);Ye.Fraction;class Je{constructor(t,e,i){if(t*e*2!==i.length)throw new z("width*height*2 !== buffer.length",{width:t,height:e,len:i.length});this.width=t,this.height=e,this.buffer=i}static PHASE(t){const e=new Qe(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).valueOf()*Math.PI;const i=O.from(Math.E);return Je.square(1,0,0,i.raisedTo(O.I.times(e)))}static get RNOT(){const t=O.I,e=t.neg();return Je.square(t.plus(1),e.plus(1),e.plus(1),t.plus(1)).times(.5)}static RX(t){const e=D(t,T),i=O.I.neg(),o=Math.cos(e/2),n=Math.sin(e/2);return Je.square(o,i.times(n),i.times(n),o)}static RY(t){const e=D(t,T),i=Math.cos(e/2),o=Math.sin(e/2);return Je.square(i,-o,o,i)}static RZ(t){const e=D(t,T),i=O.from(Math.E),o=O.I;return Je.square(i.raisedTo(o.neg().times(e/2)),0,0,i.raisedTo(o.times(e/2)))}static fromRows(t){C.need(t.length>0,"non-zero height",t);const e=M(t),i=t.length,o=e.map((t=>t.length)).distinct().single(null);if(null===o)throw new z("Inconsistent row widths.",{rows:t});const n=new Float64Array(o*i*2);let r=0;for(const e of t)for(const t of e)n[r]=O.realPartOf(t),n[r+1]=O.imagPartOf(t),r+=2;return new Je(o,i,n)}static generate(t,e,i){const o=new Float64Array(t*e*2);for(let n=0;n<e;n++)for(let e=0;e<t;e++){const r=2*(n*t+e),s=i(n,e);o[r]=O.realPartOf(s),o[r+1]=O.imagPartOf(s)}return new Je(t,e,o)}static solo(t){return new Je(1,1,new Float64Array([O.realPartOf(t),O.imagPartOf(t)]))}static square(...t){C.need(Array.isArray(t),"Array.isArray(coefs)",t);const e=Math.round(Math.sqrt(t.length));return C.need(e*e===t.length,"Matrix.square: non-square number of arguments"),Je.generate(e,e,((i,o)=>t[i*e+o]))}static col(...t){return C.need(Array.isArray(t),"Array.isArray(coefs)",t),Je.generate(1,t.length,(e=>t[e]))}static row(...t){return C.need(Array.isArray(t),"Array.isArray(coefs)",t),Je.generate(t.length,1,((e,i)=>t[i]))}static identity(t){if(!Number.isInteger(t)||t<=0)throw new z("Bad size",{size:t});const e=new Float64Array(t*t*2);for(let i=0;i<t;i++)e[i*(t+1)*2]=1;return new Je(t,t,e)}static generateDiagonal(t,e){const i=new Float64Array(t*t*2);for(let o=0;o<t;o++){const n=o*(t+1)*2,r=e(o);i[n]=O.realPartOf(r),i[n+1]=O.imagPartOf(r)}return new Je(t,t,i)}static zero(t,e){return new Je(t,e,new Float64Array(t*e*2))}getColumn(t){C.need(t>=0&&t<=this.width,"colIndex >= 0 && colIndex <= this.width");const e=[];for(let i=0;i<this.height;i++)e.push(this.cell(t,i));return e}isUnitary(t){const e=this.width;return this.height===e&&this.times(this.adjoint()).isApproximatelyEqualTo(Je.identity(e),t)}adjoint(){const t=this.height,e=this.width,i=new Float64Array(t*e*2);for(let o=0;o<e;o++)for(let e=0;e<t;e++){const n=2*(e*this.width+o),r=2*(o*t+e);i[r]=this.buffer[n],i[r+1]=-this.buffer[n+1]}return new Je(t,e,i)}times(t){return t instanceof Je?this.timesMatrix(t):this.timesScalar(t)}timesMatrix(t){if(this.width!==t.height)throw new z("Incompatible sizes.",{this:this,other:t});const e=t.width,i=this.height,o=this.width,n=new Float64Array(e*i*2);for(let r=0;r<i;r++)for(let i=0;i<e;i++){const s=2*(r*e+i);for(let a=0;a<o;a++){const c=2*(r*o+a),l=2*(a*e+i),d=this.buffer[c],p=this.buffer[c+1],u=t.buffer[l],h=t.buffer[l+1],f=d*u-p*h,g=d*h+u*p;n[s]+=f,n[s+1]+=g}}return new Je(e,i,n)}timesScalar(t){const e=new Float64Array(this.buffer.length),i=O.realPartOf(t),o=O.imagPartOf(t);for(let t=0;t<e.length;t+=2){const n=this.buffer[t],r=this.buffer[t+1];e[t]=n*i-r*o,e[t+1]=n*o+r*i}return new Je(this.width,this.height,e)}static rotation(t){const e=Math.cos(t),i=Math.sin(t);return Je.square(e,-i,i,e)}isEqualTo(t){if(this===t)return!0;if(!(t instanceof Je))return!1;const e=t;return this.width===e.width&&this.height===e.height&&_.range(this.buffer.length).every((t=>this.buffer[t]===e.buffer[t]))}isApproximatelyEqualTo(t,e){return t instanceof Je&&this.width===t.width&&this.height===t.height&&Math.sqrt(this.minus(t).norm2())<=e}minus(t){const{width:e,height:i,buffer:o}=this,n=t.buffer;C.need(t.width===e&&t.height===i,"Matrix.minus: compatible sizes");const r=new Float64Array(this.buffer.length);for(let t=0;t<r.length;t++)r[t]=o[t]-n[t];return new Je(e,i,r)}norm2(){let t=0;for(const e of this.buffer)t+=e*e;return t}toString(t=v.EXACT){return`{{${this.rows().map((e=>e.map((e=>e.toString(t))).join(t.itemSeparator))).join(`}${t.itemSeparator}{`)}}}`}rows(){return _.range(this.height).map((t=>_.range(this.width).map((e=>this.cell(e,t))).toArray())).toArray()}cell(t,e){if(t<0||e<0||t>=this.width||e>=this.height)throw new z("Cell out of range",{col:t,row:e,width:this.width,height:this.height});const i=2*(this.width*e+t);return new O(this.buffer[i],this.buffer[i+1])}set(t,e,i){if(t<0||e<0||t>=this.width||e>=this.height)throw new z("Cell out of range",{col:t,row:e,width:this.width,height:this.height});const o=2*(this.width*e+t);this.buffer[o]=i.real,this.buffer[o+1]=i.imag}isApproximatelyHermitian(t){if(this.width!==this.height)return!1;for(let e=0;e<this.width;e++)for(let i=0;i<this.height;i++){const o=2*(this.width*i+e),n=2*(this.width*e+i);if(Math.abs(this.buffer[o]-this.buffer[n])>t)return!1;if(Math.abs(this.buffer[o+1]+this.buffer[n+1])>t)return!1}return!0}plus(t){const{width:e,height:i,buffer:o}=this,n=t.buffer;C.need(t.width===e&&t.height===i,"Matrix.plus: compatible sizes");const r=new Float64Array(this.buffer.length);for(let t=0;t<r.length;t++)r[t]=o[t]+n[t];return new Je(e,i,r)}tensorProduct(t){const e=this.width,i=this.height,o=t.width,n=t.height,r=e*o,s=i*n,a=new Float64Array(r*s*2);for(let s=0;s<i;s++)for(let i=0;i<n;i++)for(let c=0;c<e;c++)for(let l=0;l<o;l++){const d=2*(s*e+c),p=2*(i*o+l),u=2*((s*n+i)*r+(c*o+l)),h=this.buffer[d],f=this.buffer[d+1],g=t.buffer[p],m=t.buffer[p+1],b=h*g-f*m,v=h*m+f*g;a[u]=b,a[u+1]=v}return new Je(r,s,a)}timesQubitOperation(t,e,i,o){C.need(0==(i&1<<e),"Matrix.timesQubitOperation: self-controlled"),C.need(2===t.width&&2===t.height,"Matrix.timesQubitOperation: not 2x2");const{width:n,height:r,buffer:s}=this,[a,c,l,d,p,u,h,f]=t.buffer;C.need(r>=2<<e,"Matrix.timesQubitOperation: qubit index out of range");const g=new Float64Array(s);let m=0;for(let t=0;t<r;t++){const r=0!=(i&t^o),s=0!=(t&1<<e);for(let t=0;t<n;t++){if(!r&&!s){const t=m+2*(1<<e)*n,i=g[m],o=g[m+1],r=g[t],s=g[t+1];g[m]=i*a-o*c+r*l-s*d,g[m+1]=i*c+o*a+r*d+s*l,g[t]=i*p-o*u+r*h-s*f,g[t+1]=i*u+o*p+r*f+s*h}m+=2}}return new Je(n,r,g)}singularValueDecomposition(t=0,e=100){if(this.width!==this.height)throw new z("Expected a square matrix.",this);let{U:i,S:o,V:n}=2===this.width?this._unordered_singularValueDecomposition_2x2():this._unordered_singularValueDecomposition_iterative(t,e);const r=_.range(this.width).sortedBy((t=>-o.cell(t,t).norm2())).toArray();for(let t=0;t<o.width;t++){const e=r.indexOf(t);if(t!==e){i._inline_colMix_postMultiply(t,e,Je.PAULI_X),n._inline_rowMix_preMultiply(t,e,Je.PAULI_X);const s=t*(o.width+1)*2,a=e*(o.width+1)*2;[o.buffer[s],o.buffer[a]]=[o.buffer[a],o.buffer[s]],[o.buffer[s+1],o.buffer[a+1]]=[o.buffer[a+1],o.buffer[s+1]],[r[e],r[t]]=[r[t],r[e]]}}for(let t=0;t<o.width;t++)i._inline_colScale_postMultiply(t,o.cell(t,t).unit());return o=Je.generateDiagonal(o.width,(t=>o.cell(t,t).abs())),{U:i,S:o,V:n}}_unordered_singularValueDecomposition_2x2(){const t=Je.identity(2);let{L:e,Q:i}=this.lqDecomposition();const o=e.cell(0,0).unit(),n=e.cell(0,1).unit();t._inline_colScale_postMultiply(0,o),t._inline_colScale_postMultiply(1,n),e._inline_rowScale_preMultiply(0,o.conjugate()),e._inline_rowScale_preMultiply(1,n.conjugate());const r=e.cell(1,1).unit();e._inline_colScale_postMultiply(1,r.conjugate()),i._inline_rowScale_preMultiply(1,r);const[s,,a,,c,,l]=e.buffer,d=s+l,p=a+c,u=a-c,h=s-l,f=Math.atan2(p,d)/2,g=Math.atan2(u,h)/2,m=Math.sqrt(d*d+p*p)/2,b=Math.sqrt(h*h+u*u)/2;return t._inline_colMix_postMultiply(0,1,Je.rotation(f-g)),i._inline_rowMix_preMultiply(0,1,Je.rotation(f+g)),e=Je.square(m+b,0,0,m-b),{U:t,S:e,V:i}}_unordered_singularValueDecomposition_iterative(t=0,e=100){let i=Je.identity(this.width),o=this._clone(),n=Je.identity(this.width),r=0;for(;!o.isDiagonal(t)&&r++<e;){const{Q:t,R:e}=o.qrDecomposition(),{L:r,Q:s}=e.lqDecomposition();i=i.times(t),o=r,n=s.times(n)}return{U:i,S:o,V:n}}_inline_colMix_postMultiply(t,e,i){const[o,n,r,s]=i._2x2Breakdown();for(let i=0;i<this.width;i++){const a=this.cell(t,i),c=this.cell(e,i),l=a.times(o).plus(c.times(r)),d=a.times(n).plus(c.times(s)),p=2*(i*this.width+t),u=2*(i*this.width+e);this.buffer[p]=l.real,this.buffer[p+1]=l.imag,this.buffer[u]=d.real,this.buffer[u+1]=d.imag}}_2x2Breakdown(){return[new O(this.buffer[0],this.buffer[1]),new O(this.buffer[2],this.buffer[3]),new O(this.buffer[4],this.buffer[5]),new O(this.buffer[6],this.buffer[7])]}_inline_rowMix_preMultiply(t,e,i){const[o,n,r,s]=i._2x2Breakdown();for(let i=0;i<this.width;i++){const a=this.cell(i,t),c=this.cell(i,e),l=a.times(o).plus(c.times(n)),d=a.times(r).plus(c.times(s)),p=2*(t*this.width+i),u=2*(e*this.width+i);this.buffer[p]=l.real,this.buffer[p+1]=l.imag,this.buffer[u]=d.real,this.buffer[u+1]=d.imag}}_inline_colScale_postMultiply(t,e){for(let i=0;i<this.height;i++){const o=this.cell(t,i).times(e),n=2*(i*this.width+t);this.buffer[n]=o.real,this.buffer[n+1]=o.imag}}lqDecomposition(){const{Q:t,R:e}=this.adjoint().qrDecomposition();return{L:e.adjoint(),Q:t.adjoint()}}qrDecomposition(){if(this.width!==this.height)throw new z("Expected a square matrix.",this);const t=Je.identity(this.width),e=this._clone();for(let i=0;i<this.height;i++){for(let o=0;o<i&&o<this.width;o++){const n=e.cell(o,i),r=e.cell(o,o),s=r.abs(),a=n.abs();if(0===a)continue;const c=-Math.atan2(a,s),l=Math.cos(c),d=Math.sin(c),p=r.unit().conjugate(),u=n.unit().conjugate(),h=Je.square(p.times(l),u.times(-d),p.times(d),u.times(l));e._inline_rowMix_preMultiply(o,i,h),t._inline_colMix_postMultiply(o,i,h.adjoint())}const o=e.cell(i,i).unit();e._inline_rowScale_preMultiply(i,o.conjugate()),t._inline_colScale_postMultiply(i,o)}return{Q:t,R:e}}_clone(){return new Je(this.width,this.height,this.buffer.slice())}_inline_rowScale_preMultiply(t,e){for(let i=0;i<this.width;i++){const o=this.cell(i,t).times(e),n=2*(t*this.width+i);this.buffer[n]=o.real,this.buffer[n+1]=o.imag}}isDiagonal(t=0){for(let e=0;e<this.width;e++)for(let i=0;i<this.height;i++){if(i===e)continue;const o=2*(this.width*i+e),n=Math.abs(this.buffer[o]),r=Math.abs(this.buffer[o+1]),s=Math.max(n,r);if(isNaN(s)||s>t)return!1}return this.width===this.height}trace(){let t=0,e=0;const i=2*this.width+2;for(let o=0;o<this.buffer.length;o+=i)t+=this.buffer[o],e+=this.buffer[o+1];return new O(t,e)}qubitDensityMatrixToBlochVector(){if(2!==this.width||2!==this.height)throw new z("Need a 2x2 density matrix.",this);if(!this.isApproximatelyHermitian(.01))throw new z("Density matrix should be Hermitian.",this);if(!this.trace().isApproximatelyEqualTo(1,.01))throw new z("Density matrix should have unit trace.",this);const[t,e,i,o,n,r,s,a]=this.buffer;return[n+i,r-o,t-s]}qubitDensityMatrix(t){const e=[...Array(Math.log2(this.height)).keys()].filter((e=>e!==t)),i=(t,e)=>e.sort().reverse().reduce(((t,e)=>{let i=t>>e+1;i<<=e;return i|(1<<e)-1&t}),t);let o=Je.zero(2,2);for(let t=0;t<this.height;t++)for(let n=0;n<this.height;n++){if(!e.every((e=>(t>>e&1)==(n>>e&1))))continue;const r=this.cell(0,n).times(this.cell(0,t).conjugate());if(r.isEqualTo(0))continue;const s=0===i(n,e)?Je.col(1,0):Je.col(0,1),a=0===i(t,e)?Je.row(1,0):Je.row(0,1),c=s.times(a);o=o.plus(c.times(r))}return o}static fromAngleAxisPhaseRotation(t,e,i){const[o,n,r]=e;C.need(Math.abs(o*o+n*n+r*r-1)<1e-6,"Not a unit axis.");const s=Je.PAULI_X.times(o).plus(Je.PAULI_Y.times(n)).plus(Je.PAULI_Z.times(r)),[a,c]=C.snappedCosSin(-t/2);return Je.identity(2).times(a).plus(s.times(new O(0,c))).times(O.polar(1,i))}qubitOperationToAngleAxisRotation(){C.need(2===this.width&&2===this.height,"Need a 2x2 matrix."),C.need(this.isUnitary(.01),"Need a unitary matrix.");const[t,e,i,o]=this._2x2Breakdown(),n=t.plus(o),r=e.plus(i).dividedBy(O.I),s=e.minus(i),a=t.minus(o).dividedBy(O.I);let c=M([n,r,s,a]).maxBy((t=>t.abs())).unit().times(2);const l=Math.min(1,Math.max(-1,n.dividedBy(c).real));let d=r.dividedBy(c).real,p=s.dividedBy(c).real,u=a.dividedBy(c).real,h=-2*Math.acos(l);const f=Math.sqrt(d*d+p*p+u*u);return f<1e-7?{axis:[1,0,0],angle:0,phase:c.phase()}:(d/=f,p/=f,u/=f,h<=-Math.PI&&(h+=2*Math.PI,c=c.times(-1)),d+p+u<0&&(d=-d,p=-p,u=-u,h=-h),{axis:[d,p,u],angle:h,phase:c.phase()})}isUpperTriangular(t=0){for(let e=0;e<this.height;e++)for(let i=0;i<e&&i<this.width;i++){const o=2*(e*this.width+i),n=this.buffer[o],r=this.buffer[o+1];if(isNaN(n)||isNaN(r)||n*n+r*r>t*t)return!1}return!0}isLowerTriangular(t=0){for(let e=0;e<this.height;e++)for(let i=e+1;i<this.width;i++){const o=2*(e*this.width+i),n=this.buffer[o],r=this.buffer[o+1];if(isNaN(n)||isNaN(r)||n*n+r*r>t*t)return!1}return!0}}Je.H=Je.square(1,1,1,-1).times(Math.sqrt(.5)),Je.PAULI_X=Je.square(0,1,1,0),Je.PAULI_Y=Je.square(0,new O(0,-1),O.I,0),Je.PAULI_Z=Je.square(1,0,0,-1);const Ke=t=>"object"==typeof t&&null!==t&&"PHASE-GATE"===t.tagName,Ze=t=>"object"==typeof t&&null!==t&&("RX-GATE"===t.tagName||"RY-GATE"===t.tagName||"RZ-GATE"===t.tagName),ti=t=>"object"==typeof t&&null!==t&&("H-GATE"===t.tagName||"X-GATE"===t.tagName||"RNOT-GATE"===t.tagName),ei=t=>"object"==typeof t&&null!==t&&"MEASUREMENT-GATE"===t.tagName;class ii{show(t){if(Fe.isMobile())return;const e=this;this.popup=Ie(t,{allowHTML:!0,animation:!1,appendTo:document.body,arrow:Zt+Zt,content:this.popupHtml(t),delay:0,hideOnClick:!1,interactive:!0,theme:"qni",onShow(t){let i;const o=t.reference;if(ei(o))e.input.value=o.flag;else if(ti(o))e.input.value=o.if;else if(Ke(o)||Ze(o)){Ke(o)?i=o.phi:Ze(o)&&(i=o.theta),e.input.value=i.replace(/π/g,"pi");const t=O.from(D(i.replace(/π/g,"pi"),T)).real;e.currentAngleDenominator=e.angleDenominator(i),e.currentAngle=e.snappedAngle(t),e.createAngleSlider(o)}e.input.addEventListener("keydown",e.inputKeydown.bind(e))},onHide(){if(e.isAngleSliderActive())return!1},onHidden(t){const i=t.reference;(Ke(i)||Ze(i))&&(e.reduceInstructionAngle(i),e.destroyAngleSlider()),i.dispatchEvent(new Event("operation.update",{bubbles:!0})),t.destroy()}}),this.popup.show()}updateInstructionAngle(t,e){const i=e.replace(/pi/g,"π");this.input.value=e,Ke(t)?t.phi=i:t.theta=i}reduceInstructionAngle(t){if(Ke(t)){const e=this.beautifyFraction(t.phi.replace(/π/g,"pi"),!0);t.phi=e.replace(/pi/g,"π")}else{const e=this.beautifyFraction(t.theta.replace(/π/g,"pi"),!0);t.theta=e.replace(/pi/g,"π")}}snappedAngle(t){C.notNull(this.currentAngleDenominator);const e=Math.PI/this.currentAngleDenominator,i=Math.round(t/e);return this.beautifyFraction(`${i}pi/${this.currentAngleDenominator}`)}beautifyFraction(t,e=!1){let i;Qe.REDUCE=e;const o=new Qe(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")),n=o.valueOf(),r=o.d;if(0===n)i="0";else if(n>2)i=1===r?"2pi":`${2*r}pi/${r}`;else if(n<-2)i=1===r?"-2pi":`-${2*r}pi/${r}`;else{const t=o.n,e=-1===o.s?"-":"",n=1===t?`${e}pi`:`${e}${t}pi`;i=1===r?`${n}`:`${n}/${r}`}return i}popupHtml(t){let e=null;ei(t)?e="flag":Ke(t)?e="phi":Ze(t)?e="theta":ti(t)&&(e="if"),C.notNull(e);const i=document.getElementById(`gate-popup--${e}`);return C.notNull(i),i.innerHTML}get input(){C.notNull(this.popup);const t=this.popup.popper.getElementsByTagName("input").item(0);return C.notNull(t),t}inputKeydown(t){var e;if("Enter"===t.key){C.notNull(this.popup),this.popup.popper.classList.remove("gate-popup--error");const t=this.input.value;try{const i=this.popupReferenceEl;if(ei(i))this.flag=t;else if(ti(i))this.if=t;else{C.notNull(this.currentAngle),C.notNull(this.currentAngleDenominator);let o=t;if(this.angleNumerator(this.currentAngle)===this.angleNumerator(t)&&this.currentAngleDenominator!==this.angleDenominator(t)){const e=this.angleDenominator(t)/this.currentAngleDenominator;o=`${Math.round(e*this.angleNumerator(this.currentAngle))}pi/${this.angleDenominator(t)}`}this.currentAngleDenominator=this.angleDenominator(t),null===(e=this.angleSliderEl.noUiSlider)||void 0===e||e.set(this.radian(o)),Ke(i)?i.phi=this.beautifyFraction(o,!1).replace(/pi/g,"π"):Ze(i)&&(i.theta=this.beautifyFraction(o,!1).replace(/pi/g,"π"))}this.runCircuit()}catch(t){C.notNull(this.popup),this.popup.popper.classList.add("gate-popup--error")}}}set flag(t){const e=this.popupReferenceEl;t&&0!==t.trim().length?e.flag=t:e.flag=""}set if(t){const e=this.popupReferenceEl;t&&0!==t.trim().length?ti(e)&&(e.if=t):ti(e)&&(e.if="",e.disabled=!1)}runCircuit(){this.popupReferenceEl.dispatchEvent(new Event("operation.popup.change",{bubbles:!0}))}get popupReferenceEl(){return C.notNull(this.popup),this.popup.reference}get editorElement(){const t=this.popupReferenceEl.closest(".editor");return C.notNull(t),t}get angleSliderEl(){var t;const e=null===(t=this.popup)||void 0===t?void 0:t.popper.getElementsByClassName("angle-slider").item(0);return C.notNull(e),e}createAngleSlider(t){const e=this.angleSliderEl;let i;i=Ke(t)?t.phi:t.theta;const o=O.from(D(i.replace(/π/g,"pi"),T)).real;I.create(e,{range:{min:-2*Math.PI,max:2*Math.PI},start:o,pips:{mode:j.Positions,values:[0,25,50,75,100],filter:t=>0===t?1:t%Math.PI?-1:1,format:{to:t=>{const e=t/Math.PI;return 0===e?"0":-1===e?"-π":1===e?"π":`${e}π`}}},cssPrefix:"angle-slider-"}),e.classList.remove("hidden");e.noUiSlider.on("update",(e=>{const i=this.snappedAngle(e[0]);this.currentAngle!==i&&(this.currentAngle=i,this.updateInstructionAngle(t,i),t.dispatchEvent(new Event("operation.popup.change",{bubbles:!0})))}))}destroyAngleSlider(){var t;null===(t=this.angleSliderEl.noUiSlider)||void 0===t||t.destroy()}isAngleSliderActive(){var t;return null!==(null===(t=this.popup)||void 0===t?void 0:t.popper.getElementsByClassName("angle-slider-active").item(0))}radian(t){return new Qe(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).valueOf()*Math.PI}angleNumerator(t){Qe.REDUCE=!1;const e=new Qe(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1"));return e.s*e.n}angleDenominator(t){Qe.REDUCE=!1;return new Qe(t.replace(/π/g,"pi").replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).d}}function oi(t){return class extends t{showRightClickPopup(t){if(2!==t.button&&!t.ctrlKey)return;(new ii).show(this)}}}function ni(t){return class extends t{set controls(t){this.setAttribute("data-controls",t.sort().join())}get controls(){const t=this.getAttribute("data-controls");return null===t||""===t?[]:t.split(",").map((t=>parseInt(t))).sort()}}}function*ri(t){let e="",i=0,o=!1;for(let n=0;n<t.length;n+=1)"{"!==t[n]||"{"!==t[n+1]||"\\"===t[n-1]||o?"}"===t[n]&&"}"===t[n+1]&&"\\"!==t[n-1]&&o&&(o=!1,yield{type:"part",start:i,end:n+2,value:e.slice(2).trim()},e="",n+=2,i=n):(o=!0,e&&(yield{type:"string",start:i,end:n,value:e}),e="{{",i=n,n+=2),e+=t[n]||"";e&&(yield{type:"string",start:i,end:t.length,value:e})}var si,ai,ci=window&&window.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},li=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class di{constructor(t,e){this.expression=e,si.set(this,void 0),ai.set(this,""),ci(this,si,t),li(this,si).updateParent("")}get attributeName(){return li(this,si).attr.name}get attributeNamespace(){return li(this,si).attr.namespaceURI}get value(){return li(this,ai)}set value(t){ci(this,ai,t||""),li(this,si).updateParent(t)}get element(){return li(this,si).element}get booleanValue(){return li(this,si).booleanValue}set booleanValue(t){li(this,si).booleanValue=t}}si=new WeakMap,ai=new WeakMap;class pi{constructor(t,e){this.element=t,this.attr=e,this.partList=[]}get booleanValue(){return this.element.hasAttributeNS(this.attr.namespaceURI,this.attr.name)}set booleanValue(t){if(1!==this.partList.length)throw new DOMException("Operation not supported","NotSupportedError");this.partList[0].value=t?"":null}append(t){this.partList.push(t)}updateParent(t){if(1===this.partList.length&&null===t)this.element.removeAttributeNS(this.attr.namespaceURI,this.attr.name);else{const t=this.partList.map((t=>"string"==typeof t?t:t.value)).join("");this.element.setAttributeNS(this.attr.namespaceURI,this.attr.name,t)}}}var ui,hi=window&&window.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},fi=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class gi{constructor(t,e){this.expression=e,ui.set(this,void 0),hi(this,ui,[t]),t.textContent=""}get value(){return fi(this,ui).map((t=>t.textContent)).join("")}set value(t){this.replace(t)}get previousSibling(){return fi(this,ui)[0].previousSibling}get nextSibling(){return fi(this,ui)[fi(this,ui).length-1].nextSibling}replace(...t){const e=t.map((t=>"string"==typeof t?new Text(t):t));e.length||e.push(new Text("")),fi(this,ui)[0].before(...e);for(const t of fi(this,ui))t.remove();hi(this,ui,e)}}function mi(t){return{createCallback(t,e,i){this.processCallback(t,e,i)},processCallback(e,i,o){var n;if("object"==typeof o&&o)for(const e of i)if(e.expression in o){const i=null!==(n=o[e.expression])&&void 0!==n?n:"";t(e,i)}}}}function bi(t,e){t.value=String(e)}ui=new WeakMap;const vi=mi(bi);var wi,yi,xi=window&&window.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},Ei=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class Si extends DocumentFragment{constructor(t,e,i=vi){var o,n;super(),wi.set(this,void 0),yi.set(this,void 0),Object.getPrototypeOf(this!==Si.prototype)&&Object.setPrototypeOf(this,Si.prototype),this.appendChild(t.content.cloneNode(!0)),xi(this,yi,Array.from(function*(t){const e=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let i;for(;i=e.nextNode();)if(i instanceof Element&&i.hasAttributes())for(let t=0;t<i.attributes.length;t+=1){const e=i.attributes.item(t);if(e&&e.value.includes("{{")){const t=new pi(i,e);for(const i of ri(e.value))if("string"===i.type)t.append(i.value);else{const e=new di(t,i.value);t.append(e),yield e}}}else if(i instanceof Text&&i.textContent&&i.textContent.includes("{{"))for(const t of ri(i.textContent)){t.end<i.textContent.length&&i.splitText(t.end),"part"===t.type&&(yield new gi(i,t.value));break}}(this))),xi(this,wi,i),null===(n=(o=Ei(this,wi)).createCallback)||void 0===n||n.call(o,this,Ei(this,yi),e)}update(t){Ei(this,wi).processCallback(this,Ei(this,yi),t)}}wi=new WeakMap,yi=new WeakMap;const zi=new WeakSet;function Ci(t,e){return i=e,!!zi.has(i)&&(e(t),!0);var i}const qi=new WeakMap;class Ai{constructor(t,e){this.element=t,this.type=e,this.element.addEventListener(this.type,this),qi.get(this.element).set(this.type,this)}set(t){"function"==typeof t?this.handleEvent=t.bind(this.element):"object"==typeof t&&"function"==typeof t.handleEvent?this.handleEvent=t.handleEvent.bind(t):(this.element.removeEventListener(this.type,this),qi.get(this.element).delete(this.type))}static for(t){qi.has(t.element)||qi.set(t.element,new Map);const e=t.attributeName.slice(2),i=qi.get(t.element);return i.has(e)?i.get(e):new Ai(t.element,e)}}function _i(t,e){if(!function(t){return"object"==typeof t&&Symbol.iterator in t}(e))return!1;if(t instanceof gi){const i=[];for(const t of e)if(t instanceof ki){const e=document.createDocumentFragment();t.renderInto(e),i.push(...e.childNodes)}else t instanceof DocumentFragment?i.push(...t.childNodes):i.push(String(t));return i.length&&t.replace(...i),!0}return t.value=Array.from(e).join(" "),!0}const Mi=new WeakMap,Di=new WeakMap,Oi=new WeakMap;class ki{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i}get template(){if(Mi.has(this.strings))return Mi.get(this.strings);{const t=document.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce(((t,i,o)=>t+i+(o<e?`{{ ${o} }}`:"")),""),Mi.set(this.strings,t),t}}renderInto(t){const e=this.template;if(Di.get(t)!==e){Di.set(t,e);const i=new Si(e,this.values,this.processor);return Oi.set(t,i),void(t instanceof gi?t.replace(...i.children):t.appendChild(i))}Oi.get(t).update(this.values)}}const Ti=mi((function(t,e){Ci(t,e)||function(t,e){return"boolean"==typeof e&&t instanceof di&&"boolean"==typeof t.element[t.attributeName]&&(t.booleanValue=e,!0)}(t,e)||function(t,e){return!!(t instanceof di&&t.attributeName.startsWith("on"))&&(Ai.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0)}(t,e)||function(t,e){return e instanceof ki&&t instanceof gi&&(e.renderInto(t),!0)}(t,e)||function(t,e){return e instanceof DocumentFragment&&t instanceof gi&&(e.childNodes.length&&t.replace(...e.childNodes),!0)}(t,e)||_i(t,e)||bi(t,e)}));function Pi(t,...e){return new ki(t,e,Ti)}function $i(t,e){t.renderInto(e)}function Li(i){class o extends i{constructor(){super(...arguments),this.disabled=!1,this.iconType=""}disable(){this.disabled=!0}enable(){this.disabled=!1}get enabled(){return!this.disabled}get disabledStyle(){return Pi`<style>
        :host([data-disabled]) #icon {
          background-color: var(--colors-eel, #4b4b4b);
        }
      </style>`}}return t([h,e("design:type",Object)],o.prototype,"disabled",void 0),t([h,e("design:type",Object)],o.prototype,"iconType",void 0),o}const Ni={init:function(t){const e=t;Ni.document=e.document,Ni.DocumentFragment=e.DocumentFragment||Ii,Ni.SVGElement=e.SVGElement||Ii,Ni.SVGSVGElement=e.SVGSVGElement||Ii,Ni.SVGElementInstance=e.SVGElementInstance||Ii,Ni.Element=e.Element||Ii,Ni.HTMLElement=e.HTMLElement||Ni.Element,Ni.Event=e.Event,Ni.Touch=e.Touch||Ii,Ni.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Ii(){}var ji=Ni;var Ri=t=>!(!t||!t.Window)&&t instanceof t.Window;let Fi,Ui;function Hi(t){Fi=t;const e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),Ui=t}function Vi(t){if(Ri(t))return t;return(t.ownerDocument||t).defaultView||Ui.window}"undefined"!=typeof window&&window&&Hi(window);const Bi=t=>!!t&&"object"==typeof t,Wi=t=>"function"==typeof t;var Gi={window:t=>t===Ui||Ri(t),docFrag:t=>Bi(t)&&11===t.nodeType,object:Bi,func:Wi,number:t=>"number"==typeof t,bool:t=>"boolean"==typeof t,string:t=>"string"==typeof t,element:t=>{if(!t||"object"!=typeof t)return!1;const e=Vi(t)||Ui;return/object|function/.test(typeof e.Element)?t instanceof e.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:t=>Bi(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString()),array:t=>Bi(t)&&void 0!==t.length&&Wi(t.splice)};const Xi={init:function(t){const e=ji.Element,i=t.navigator||{};Xi.supportsTouch="ontouchstart"in t||Gi.func(t.DocumentTouch)&&ji.document instanceof t.DocumentTouch,Xi.supportsPointerEvent=!1!==i.pointerEnabled&&!!ji.PointerEvent,Xi.isIOS=/iP(hone|od|ad)/.test(i.platform),Xi.isIOS7=/iP(hone|od|ad)/.test(i.platform)&&/OS 7[^\d]/.test(i.appVersion),Xi.isIe9=/MSIE 9/.test(i.userAgent),Xi.isOperaMobile="Opera"===i.appName&&Xi.supportsTouch&&/Presto/.test(i.userAgent),Xi.prefixedMatchesSelector="matches"in e.prototype?"matches":"webkitMatchesSelector"in e.prototype?"webkitMatchesSelector":"mozMatchesSelector"in e.prototype?"mozMatchesSelector":"oMatchesSelector"in e.prototype?"oMatchesSelector":"msMatchesSelector",Xi.pEventTypes=Xi.supportsPointerEvent?ji.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,Xi.wheelEvent=ji.document&&"onmousewheel"in ji.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var Yi=Xi;const Qi=(t,e)=>{for(const i of e)t.push(i);return t},Ji=t=>Qi([],t),Ki=(t,e)=>{for(let i=0;i<t.length;i++)if(e(t[i],i,t))return i;return-1},Zi=(t,e)=>t[Ki(t,e)];function to(t){const e={};for(const i in t){const o=t[i];Gi.plainObject(o)?e[i]=to(o):Gi.array(o)?e[i]=Ji(o):e[i]=o}return e}function eo(t,e){for(const i in e)t[i]=e[i];return t}let io,oo,no=0;var ro={request:t=>io(t),cancel:t=>oo(t),init:function(t){if(io=t.requestAnimationFrame,oo=t.cancelAnimationFrame,!io){const e=["ms","moz","webkit","o"];for(const i of e)io=t[`${i}RequestAnimationFrame`],oo=t[`${i}CancelAnimationFrame`]||t[`${i}CancelRequestAnimationFrame`]}io=io&&io.bind(t),oo=oo&&oo.bind(t),io||(io=e=>{const i=Date.now(),o=Math.max(0,16-(i-no)),n=t.setTimeout((()=>{e(i+o)}),o);return no=i+o,n},oo=t=>clearTimeout(t))}};function so(t,e,i){if(i=i||{},Gi.string(t)&&-1!==t.search(" ")&&(t=ao(t)),Gi.array(t))return t.reduce(((t,o)=>eo(t,so(o,e,i))),i);if(Gi.object(t)&&(e=t,t=""),Gi.func(e))i[t]=i[t]||[],i[t].push(e);else if(Gi.array(e))for(const o of e)so(t,o,i);else if(Gi.object(e))for(const o in e){so(ao(o).map((e=>`${t}${e}`)),e[o],i)}return i}function ao(t){return t.trim().split(/ +/)}function co(t,e){for(const i of e){if(t.immediatePropagationStopped)break;i(t)}}class lo{constructor(t){this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=eo({},t||{})}fire(t){let e;const i=this.global;(e=this.types[t.type])&&co(t,e),!t.propagationStopped&&i&&(e=i[t.type])&&co(t,e)}on(t,e){const i=so(t,e);for(t in i)this.types[t]=Qi(this.types[t]||[],i[t])}off(t,e){const i=so(t,e);for(t in i){const e=this.types[t];if(e&&e.length)for(const o of i[t]){const t=e.indexOf(o);-1!==t&&e.splice(t,1)}}}getRect(t){return null}}function po(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function uo(t,e){for(;Gi.element(t);){if(fo(t,e))return t;t=ho(t)}return null}function ho(t){let e=t.parentNode;if(Gi.docFrag(e)){for(;(e=e.host)&&Gi.docFrag(e););return e}return e}function fo(t,e){return Ui!==Fi&&(e=e.replace(/\/deep\//g," ")),t[Yi.prefixedMatchesSelector](e)}const go=t=>t.parentNode||t.host;function mo(t,e){const i=[];let o,n=t;for(;(o=go(n))&&n!==e&&o!==n.ownerDocument;)i.unshift(n),n=o;return i}function bo(t,e){return(parseInt(Vi(t).getComputedStyle(t).zIndex,10)||0)>=(parseInt(Vi(e).getComputedStyle(e).zIndex,10)||0)}function vo(t,e,i){for(;Gi.element(t);){if(fo(t,e))return!0;if((t=ho(t))===i)return fo(t,e)}return!1}function wo(t){return t.correspondingUseElement||t}function yo(t){const e=t instanceof ji.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}function xo(t){const e=yo(t);if(!Yi.isIOS7&&e){const o={x:(i=(i=Vi(t))||Ui).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};e.left+=o.x,e.right+=o.x,e.top+=o.y,e.bottom+=o.y}var i;return e}function Eo(t){return!!Gi.string(t)&&(ji.document.querySelector(t),!0)}function So(t,e,i,o){let n=t;return Gi.string(n)?n=function(t,e,i){return"parent"===t?ho(i):"self"===t?e.getRect(i):uo(i,t)}(n,e,i):Gi.func(n)&&(n=n(...o)),Gi.element(n)&&(n=xo(n)),n}function zo(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}}function Co(t){return!t||"x"in t&&"y"in t||((t=eo({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y),t}function qo(t,e,i){t.left&&(e.left+=i.x),t.right&&(e.right+=i.x),t.top&&(e.top+=i.y),t.bottom&&(e.bottom+=i.y),e.width=e.right-e.left,e.height=e.bottom-e.top}function Ao(t,e,i){const o=t.options[i];return zo(So(o&&o.origin||t.options.origin,t,e,[t&&e]))||{x:0,y:0}}var _o=(t,e)=>Math.sqrt(t*t+e*e);class Mo{constructor(t){this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=t}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}Object.defineProperty(Mo.prototype,"interaction",{get(){return this._interaction._proxy},set(){}});const Do={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};class Oo extends Mo{constructor(t,e,i,o,n,r,s){super(t),this.target=void 0,this.currentTarget=void 0,this.relatedTarget=null,this.screenX=void 0,this.screenY=void 0,this.button=void 0,this.buttons=void 0,this.ctrlKey=void 0,this.shiftKey=void 0,this.altKey=void 0,this.metaKey=void 0,this.page=void 0,this.client=void 0,this.delta=void 0,this.rect=void 0,this.x0=void 0,this.y0=void 0,this.t0=void 0,this.dt=void 0,this.duration=void 0,this.clientX0=void 0,this.clientY0=void 0,this.velocity=void 0,this.speed=void 0,this.swipe=void 0,this.timeStamp=void 0,this.axes=void 0,this.preEnd=void 0,n=n||t.element;const a=t.interactable,c=(a&&a.options||Do).deltaSource,l=Ao(a,n,i),d="start"===o,p="end"===o,u=d?this:t.prevEvent,h=d?t.coords.start:p?{page:u.page,client:u.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;this.page=eo({},h.page),this.client=eo({},h.client),this.rect=eo({},t.rect),this.timeStamp=h.timeStamp,p||(this.page.x-=l.x,this.page.y-=l.y,this.client.x-=l.x,this.client.y-=l.y),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.button=e.button,this.buttons=e.buttons,this.target=n,this.currentTarget=n,this.preEnd=r,this.type=s||i+(o||""),this.interactable=a,this.t0=d?t.pointers[t.pointers.length-1].downTime:u.t0,this.x0=t.coords.start.page.x-l.x,this.y0=t.coords.start.page.y-l.y,this.clientX0=t.coords.start.client.x-l.x,this.clientY0=t.coords.start.client.y-l.y,this.delta=d||p?{x:0,y:0}:{x:this[c].x-u[c].x,y:this[c].y-u[c].y},this.dt=t.coords.delta.timeStamp,this.duration=this.timeStamp-this.t0,this.velocity=eo({},t.coords.velocity[c]),this.speed=_o(this.velocity.x,this.velocity.y),this.swipe=p||"inertiastart"===o?this.getSwipe():null}getSwipe(){const t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;let e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);const i=112.5<=e&&e<247.5,o=202.5<=e&&e<337.5;return{up:o,down:!o&&22.5<=e&&e<157.5,left:i,right:!i&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}preventDefault(){}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}stopPropagation(){this.propagationStopped=!0}}function ko(t,e){let i=!1;return function(){return i||(Ui.console.warn(e),i=!0),t.apply(this,arguments)}}function To(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t}function Po(t,e){for(const i in e){const o=Po.prefixedPropREs;let n=!1;for(const t in o)if(0===i.indexOf(t)&&o[t].test(i)){n=!0;break}n||"function"==typeof e[i]||(t[i]=e[i])}return t}function $o(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp}function Lo(t){return t instanceof ji.Event||t instanceof ji.Touch}function No(t,e,i){return t=t||"page",(i=i||{}).x=e[t+"X"],i.y=e[t+"Y"],i}function Io(t,e){return e=e||{x:0,y:0},Yi.isOperaMobile&&Lo(t)?(No("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):No("page",t,e),e}function jo(t){return Gi.number(t.pointerId)?t.pointerId:t.identifier}function Ro(t,e,i){const o=e.length>1?Uo(e):e[0];Io(o,t.page),function(t,e){e=e||{},Yi.isOperaMobile&&Lo(t)?No("screen",t,e):No("client",t,e)}(o,t.client),t.timeStamp=i}function Fo(t){const e=[];return Gi.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function Uo(t){const e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0};for(const i of t)for(const t in e)e[t]+=i[t];for(const i in e)e[i]/=t.length;return e}function Ho(t){if(!t.length)return null;const e=Fo(t),i=Math.min(e[0].pageX,e[1].pageX),o=Math.min(e[0].pageY,e[1].pageY),n=Math.max(e[0].pageX,e[1].pageX),r=Math.max(e[0].pageY,e[1].pageY);return{x:i,y:o,left:i,top:o,right:n,bottom:r,width:n-i,height:r-o}}function Vo(t,e){const i=e+"X",o=e+"Y",n=Fo(t),r=n[0][i]-n[1][i],s=n[0][o]-n[1][o];return _o(r,s)}function Bo(t,e){const i=e+"X",o=e+"Y",n=Fo(t),r=n[1][i]-n[0][i],s=n[1][o]-n[0][o];return 180*Math.atan2(s,r)/Math.PI}function Wo(t){const e=Gi.func(t.composedPath)?t.composedPath():t.path;return[wo(e?e[0]:t.target),wo(t.currentTarget)]}function Go(t,e){if(e.phaselessTypes[t])return!0;for(const i in e.map)if(0===t.indexOf(i)&&t.substr(i.length)in e.phases)return!0;return!1}Object.defineProperties(Oo.prototype,{pageX:{get(){return this.page.x},set(t){this.page.x=t}},pageY:{get(){return this.page.y},set(t){this.page.y=t}},clientX:{get(){return this.client.x},set(t){this.client.x=t}},clientY:{get(){return this.client.y},set(t){this.client.y=t}},dx:{get(){return this.delta.x},set(t){this.delta.x=t}},dy:{get(){return this.delta.y},set(t){this.delta.y=t}},velocityX:{get(){return this.velocity.x},set(t){this.velocity.x=t}},velocityY:{get(){return this.velocity.y},set(t){this.velocity.y=t}}}),Po.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};class Xo{constructor(t){this.list=[],this.selectorMap={},this.scope=void 0,this.scope=t,t.addListeners({"interactable:unset":({interactable:t})=>{const{target:e,_context:i}=t,o=Gi.string(e)?this.selectorMap[e]:e[this.scope.id],n=Ki(o,(t=>t.context===i));o[n]&&(o[n].context=null,o[n].interactable=null),o.splice(n,1)}})}new(t,e){e=eo(e||{},{actions:this.scope.actions});const i=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),o={context:i._context,interactable:i};return this.scope.addDocument(i._doc),this.list.push(i),Gi.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(o)):(i.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(o)),this.scope.fire("interactable:new",{target:t,options:e,interactable:i,win:this.scope._win}),i}get(t,e){const i=e&&e.context||this.scope.document,o=Gi.string(t),n=o?this.selectorMap[t]:t[this.scope.id];if(!n)return null;const r=Zi(n,(e=>e.context===i&&(o||e.interactable.inContext(t))));return r&&r.interactable}forEachMatch(t,e){for(const i of this.list){let o;if((Gi.string(i.target)?Gi.element(t)&&fo(t,i.target):t===i.target)&&i.inContext(t)&&(o=e(i)),void 0!==o)return o}}}class Yo{constructor(t){this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=t,Po(this,t)}preventOriginalDefault(){this.originalEvent.preventDefault()}stopPropagation(){this.originalEvent.stopPropagation()}stopImmediatePropagation(){this.originalEvent.stopImmediatePropagation()}}function Qo(t){if(!Gi.object(t))return{capture:!!t,passive:!1};const e=eo({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var Jo={id:"events",install:function(t){var e;const i=[],o={},n=[],r={add:s,remove:a,addDelegate:function(t,e,i,r,a){const d=Qo(a);if(!o[i]){o[i]=[];for(const t of n)s(t,i,c),s(t,i,l,!0)}const p=o[i];let u=Zi(p,(i=>i.selector===t&&i.context===e));u||(u={selector:t,context:e,listeners:[]},p.push(u));u.listeners.push([r,d])},removeDelegate:function(t,e,i,n,r){const s=Qo(r),d=o[i];let p,u=!1;if(!d)return;for(p=d.length-1;p>=0;p--){const o=d[p];if(o.selector===t&&o.context===e){const{listeners:t}=o;for(let o=t.length-1;o>=0;o--){const[r,{capture:h,passive:f}]=t[o];if(r===n&&h===s.capture&&f===s.passive){t.splice(o,1),t.length||(d.splice(p,1),a(e,i,c),a(e,i,l,!0)),u=!0;break}}if(u)break}}},delegateListener:c,delegateUseCapture:l,delegatedEvents:o,documents:n,targets:i,supportsOptions:!1,supportsPassive:!1};function s(t,e,o,n){const s=Qo(n);let a=Zi(i,(e=>e.eventTarget===t));a||(a={eventTarget:t,events:{}},i.push(a)),a.events[e]||(a.events[e]=[]),t.addEventListener&&!((t,e)=>-1!==t.indexOf(e))(a.events[e],o)&&(t.addEventListener(e,o,r.supportsOptions?s:s.capture),a.events[e].push(o))}function a(t,e,o,n){const s=Qo(n),c=Ki(i,(e=>e.eventTarget===t)),l=i[c];if(!l||!l.events)return;if("all"===e){for(e in l.events)l.events.hasOwnProperty(e)&&a(t,e,"all");return}let d=!1;const p=l.events[e];if(p){if("all"===o){for(let i=p.length-1;i>=0;i--)a(t,e,p[i],s);return}for(let i=0;i<p.length;i++)if(p[i]===o){t.removeEventListener(e,o,r.supportsOptions?s:s.capture),p.splice(i,1),0===p.length&&(delete l.events[e],d=!0);break}}d&&!Object.keys(l.events).length&&i.splice(c,1)}function c(t,e){const i=Qo(e),n=new Yo(t),r=o[t.type],[s]=Wo(t);let a=s;for(;Gi.element(a);){for(let t=0;t<r.length;t++){const e=r[t],{selector:o,context:c}=e;if(fo(a,o)&&po(c,s)&&po(c,a)){const{listeners:t}=e;n.currentTarget=a;for(const[e,{capture:o,passive:r}]of t)o===i.capture&&r===i.passive&&e(n)}}a=ho(a)}}function l(t){return c.call(this,t,!0)}return null==(e=t.document)||e.createElement("div").addEventListener("test",null,{get capture(){return r.supportsOptions=!0},get passive(){return r.supportsPassive=!0}}),t.events=r,r}};class Ko{constructor(t,e,i,o,n){this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=t,this.pointer=e,this.event=i,this.downTime=o,this.downTarget=n}}let Zo,tn;!function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Zo||(Zo={})),function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(tn||(tn={}));let en=0;var on=class{get pointerMoveTolerance(){return 1}constructor({pointerType:t,scopeFire:e}){this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=ko((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=en++,this._scopeFire=e,this.pointerType=t;const i=this;this._proxy={};for(const t in Zo)Object.defineProperty(this._proxy,t,{get:()=>i[t]});for(const t in tn)Object.defineProperty(this._proxy,t,{value:(...e)=>i[t](...e)});this._scopeFire("interactions:new",{interaction:this})}pointerDown(t,e,i){const o=this.updatePointer(t,e,i,!0),n=this.pointers[o];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:i,pointerIndex:o,pointerInfo:n,type:"down",interaction:this})}start(t,e,i){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&(To(this.prepared,t),this.interactable=e,this.element=i,this.rect=e.getRect(i),this.edges=this.prepared.edges?eo({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}pointerMove(t,e,i){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,i,!1);const o=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;let n,r;this.pointerIsDown&&!this.pointerWasMoved&&(n=this.coords.cur.client.x-this.coords.start.client.x,r=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=_o(n,r)>this.pointerMoveTolerance);const s=this.getPointerIndex(t),a={pointer:t,pointerIndex:s,pointerInfo:this.pointers[s],event:e,type:"move",eventTarget:i,dx:n,dy:r,duplicate:o,interaction:this};o||function(t,e){const i=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/i,t.page.y=e.page.y/i,t.client.x=e.client.x/i,t.client.y=e.client.y/i,t.timeStamp=i}(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",a),o||this.simulation||(this.interacting()&&(a.type=null,this.move(a)),this.pointerWasMoved&&$o(this.coords.prev,this.coords.cur))}move(t){var e;t&&t.event||((e=this.coords.delta).page.x=0,e.page.y=0,e.client.x=0,e.client.y=0),(t=eo({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}pointerUp(t,e,i,o){let n=this.getPointerIndex(t);-1===n&&(n=this.updatePointer(t,e,i,!1));const r=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire(`interactions:${r}`,{pointer:t,pointerIndex:n,pointerInfo:this.pointers[n],event:e,eventTarget:i,type:r,curEventTarget:o,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}documentBlur(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}end(t){let e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}currentAction(){return this._interacting?this.prepared.name:null}interacting(){return this._interacting}stop(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}getPointerIndex(t){const e=jo(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:Ki(this.pointers,(t=>t.id===e))}getPointerInfo(t){return this.pointers[this.getPointerIndex(t)]}updatePointer(t,e,i,o){const n=jo(t);let r=this.getPointerIndex(t),s=this.pointers[r];var a,c,l;return o=!1!==o&&(o||/(down|start)$/i.test(e.type)),s?s.pointer=t:(s=new Ko(n,t,e,null,null),r=this.pointers.length,this.pointers.push(s)),Ro(this.coords.cur,this.pointers.map((t=>t.pointer)),this._now()),a=this.coords.delta,c=this.coords.prev,l=this.coords.cur,a.page.x=l.page.x-c.page.x,a.page.y=l.page.y-c.page.y,a.client.x=l.client.x-c.client.x,a.client.y=l.client.y-c.client.y,a.timeStamp=l.timeStamp-c.timeStamp,o&&(this.pointerIsDown=!0,s.downTime=this.coords.cur.timeStamp,s.downTarget=i,Po(this.downPointer,t),this.interacting()||($o(this.coords.start,this.coords.cur),$o(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,i),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:i,down:o,pointerInfo:s,pointerIndex:r,interaction:this}),r}removePointer(t,e){const i=this.getPointerIndex(t);if(-1===i)return;const o=this.pointers[i];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:i,pointerInfo:o,interaction:this}),this.pointers.splice(i,1),this.pointerIsDown=!1}_updateLatestPointer(t,e,i){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=i}destroy(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}_createPreparedEvent(t,e,i,o){return new Oo(this,t,this.prepared.name,e,this.element,i,o)}_fireEvent(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}_doPhase(t){const{event:e,phase:i,preEnd:o,type:n}=t,{rect:r}=this;r&&"move"===i&&(qo(this.edges,r,this.coords.delta[this.interactable.options.deltaSource]),r.width=r.right-r.left,r.height=r.bottom-r.top);if(!1===this._scopeFire(`interactions:before-action-${i}`,t))return!1;const s=t.iEvent=this._createPreparedEvent(e,i,o,n);return this._scopeFire(`interactions:action-${i}`,t),"start"===i&&(this.prevEvent=s),this._fireEvent(s),this._scopeFire(`interactions:after-action-${i}`,t),!0}_now(){return Date.now()}};function nn(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):Gi.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function rn({interaction:t,event:e}){t.interactable&&t.interactable.checkAndPreventDefault(e)}var sn={id:"core/interactablePreventDefault",install:function(t){const{Interactable:e}=t;e.prototype.preventDefault=nn,e.prototype.checkAndPreventDefault=function(e){return function(t,e,i){const o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(e.events.supportsPassive&&/^touch(start|move)$/.test(i.type)){const t=Vi(i.target).document,o=e.getDocOptions(t);if(!o||!o.events||!1!==o.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(i.type)||Gi.element(i.target)&&fo(i.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||i.preventDefault()}else i.preventDefault()}(this,t,e)},t.interactions.docEvents.push({type:"dragstart",listener(e){for(const i of t.interactions.list)if(i.element&&(i.element===e.target||po(i.element,e.target)))return void i.interactable.checkAndPreventDefault(e)}})},listeners:["down","move","up","cancel"].reduce(((t,e)=>(t[`interactions:${e}`]=rn,t)),{})};const an={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search(t){for(const e of an.methodOrder){const i=an[e](t);if(i)return i}return null},simulationResume({pointerType:t,eventType:e,eventTarget:i,scope:o}){if(!/down|start/i.test(e))return null;for(const e of o.interactions.list){let o=i;if(e.simulation&&e.simulation.allowResume&&e.pointerType===t)for(;o;){if(o===e.element)return e;o=ho(o)}}return null},mouseOrPen({pointerId:t,pointerType:e,eventType:i,scope:o}){if("mouse"!==e&&"pen"!==e)return null;let n;for(const i of o.interactions.list)if(i.pointerType===e){if(i.simulation&&!cn(i,t))continue;if(i.interacting())return i;n||(n=i)}if(n)return n;for(const t of o.interactions.list)if(!(t.pointerType!==e||/down/i.test(i)&&t.simulation))return t;return null},hasPointer({pointerId:t,scope:e}){for(const i of e.interactions.list)if(cn(i,t))return i;return null},idle({pointerType:t,scope:e}){for(const i of e.interactions.list){if(1===i.pointers.length){const t=i.interactable;if(t&&(!t.options.gesture||!t.options.gesture.enabled))continue}else if(i.pointers.length>=2)continue;if(!i.interacting()&&t===i.pointerType)return i}return null}};function cn(t,e){return t.pointers.some((({id:t})=>t===e))}var ln=an;const dn=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function pn(t,e){return function(i){const o=e.interactions.list,n=(r=i,Gi.string(r.pointerType)?r.pointerType:Gi.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof ji.Touch?"touch":"mouse");var r;const[s,a]=Wo(i),c=[];if(/^touch/.test(i.type)){e.prevTouchTime=e.now();for(const t of i.changedTouches){const o={pointer:t,pointerId:jo(t),pointerType:n,eventType:i.type,eventTarget:s,curEventTarget:a,scope:e},r=un(o);c.push([o.pointer,o.eventTarget,o.curEventTarget,r])}}else{let t=!1;if(!Yi.supportsPointerEvent&&/mouse/.test(i.type)){for(let e=0;e<o.length&&!t;e++)t="mouse"!==o[e].pointerType&&o[e].pointerIsDown;t=t||e.now()-e.prevTouchTime<500||0===i.timeStamp}if(!t){const t={pointer:i,pointerId:jo(i),pointerType:n,eventType:i.type,curEventTarget:a,eventTarget:s,scope:e},o=un(t);c.push([t.pointer,t.eventTarget,t.curEventTarget,o])}}for(const[e,o,n,r]of c)r[t](e,i,o,n)}}function un(t){const{pointerType:e,scope:i}=t,o={interaction:ln.search(t),searchDetails:t};return i.fire("interactions:find",o),o.interaction||i.interactions.new({pointerType:e})}function hn({doc:t,scope:e,options:i},o){const{interactions:{docEvents:n},events:r}=e,s=r[o];e.browser.isIOS&&!i.events&&(i.events={passive:!1});for(const e in r.delegatedEvents)s(t,e,r.delegateListener),s(t,e,r.delegateUseCapture,!0);const a=i&&i.events;for(const{type:e,listener:i}of n)s(t,e,i,a)}const fn={id:"core/interactions",install:function(t){const e={};for(const i of dn)e[i]=pn(i,t);const i=Yi.pEventTypes;let o;function n(){for(const e of t.interactions.list)if(e.pointerIsDown&&"touch"===e.pointerType&&!e._interacting)for(const i of e.pointers)t.documents.some((({doc:t})=>po(t,i.downTarget)))||e.removePointer(i.pointer,i.event)}o=ji.PointerEvent?[{type:i.down,listener:n},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:n},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}],o.push({type:"blur",listener(e){for(const i of t.interactions.list)i.documentBlur(e)}}),t.prevTouchTime=0,t.Interaction=class extends on{get pointerMoveTolerance(){return t.interactions.pointerMoveTolerance}set pointerMoveTolerance(e){t.interactions.pointerMoveTolerance=e}_now(){return t.now()}},t.interactions={list:[],new(e){e.scopeFire=(e,i)=>t.fire(e,i);const i=new t.Interaction(e);return t.interactions.list.push(i),i},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(sn)},listeners:{"scope:add-document":t=>hn(t,"add"),"scope:remove-document":t=>hn(t,"remove"),"interactable:unset":({interactable:t},e)=>{for(let i=e.interactions.list.length-1;i>=0;i--){const o=e.interactions.list[i];o.interactable===t&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(i,1))}}},onDocSignal:hn,doOnInteractions:pn,methodNames:dn};var gn=fn;function mn(t){return t&&t.replace(/\/.*$/,"")}const bn=new class{constructor(){this.id=`__interact_scope_${Math.floor(100*Math.random())}`,this.isInitialized=!1,this.listenerMaps=[],this.browser=Yi,this.defaults=to(Do),this.Eventable=lo,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=function(t){const e=(i,o)=>{let n=t.interactables.get(i,o);return n||(n=t.interactables.new(i,o),n.events.global=e.globalEvents),n};return e.getPointerAverage=Uo,e.getTouchBBox=Ho,e.getTouchDistance=Vo,e.getTouchAngle=Bo,e.getElementRect=xo,e.getElementClientRect=yo,e.matchesSelector=fo,e.closest=uo,e.globalEvents={},e.version="1.10.11",e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=ko((function(t,e,i){if(Gi.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),Gi.array(t)){for(const o of t)this.on(o,e,i);return this}if(Gi.object(t)){for(const i in t)this.on(i,t[i],e);return this}return Go(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:i}),this}),"The interact.on() method is being deprecated"),e.off=ko((function(t,e,i){if(Gi.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),Gi.array(t)){for(const o of t)this.off(o,e,i);return this}if(Gi.object(t)){for(const i in t)this.off(i,t[i],e);return this}if(Go(t,this.scope.actions)){let i;t in this.globalEvents&&-1!==(i=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(i,1)}else this.scope.events.remove(this.scope.document,t,e,i);return this}),"The interact.off() method is being deprecated"),e.debug=function(){return this.scope},e.supportsTouch=function(){return Yi.supportsTouch},e.supportsPointerEvent=function(){return Yi.supportsPointerEvent},e.stop=function(){for(const t of this.scope.interactions.list)t.stop();return this},e.pointerMoveTolerance=function(t){return Gi.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e}(this),this.InteractEvent=Oo,this.Interactable=void 0,this.interactables=new Xo(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=t=>this.removeDocument(t.target);const t=this;this.Interactable=class extends class{get _defaults(){return{base:{},perAction:{},actions:{}}}constructor(t,e,i,o){this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new lo,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=e.actions,this.target=t,this._context=e.context||i,this._win=Vi(Eo(t)?this._context:t),this._doc=this._win.document,this._scopeEvents=o,this.set(e)}setOnEvents(t,e){return Gi.func(e.onstart)&&this.on(`${t}start`,e.onstart),Gi.func(e.onmove)&&this.on(`${t}move`,e.onmove),Gi.func(e.onend)&&this.on(`${t}end`,e.onend),Gi.func(e.oninertiastart)&&this.on(`${t}inertiastart`,e.oninertiastart),this}updatePerActionListeners(t,e,i){(Gi.array(e)||Gi.object(e))&&this.off(t,e),(Gi.array(i)||Gi.object(i))&&this.on(t,i)}setPerAction(t,e){const i=this._defaults;for(const o in e){const n=o,r=this.options[t],s=e[n];"listeners"===n&&this.updatePerActionListeners(t,r.listeners,s),Gi.array(s)?r[n]=Ji(s):Gi.plainObject(s)?(r[n]=eo(r[n]||{},to(s)),Gi.object(i.perAction[n])&&"enabled"in i.perAction[n]&&(r[n].enabled=!1!==s.enabled)):Gi.bool(s)&&Gi.object(i.perAction[n])?r[n].enabled=s:r[n]=s}}getRect(t){return t=t||(Gi.element(this.target)?this.target:null),Gi.string(this.target)&&(t=t||this._context.querySelector(this.target)),xo(t)}rectChecker(t){return Gi.func(t)?(this._rectChecker=t,this.getRect=t=>{const e=eo({},this._rectChecker(t));return"width"in e||(e.width=e.right-e.left,e.height=e.bottom-e.top),e},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}_backCompatOption(t,e){if(Eo(e)||Gi.object(e)){this.options[t]=e;for(const i in this._actions.map)this.options[i][t]=e;return this}return this.options[t]}origin(t){return this._backCompatOption("origin",t)}deltaSource(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}context(){return this._context}inContext(t){return this._context===t.ownerDocument||po(this._context,t)}testIgnoreAllow(t,e,i){return!this.testIgnore(t.ignoreFrom,e,i)&&this.testAllow(t.allowFrom,e,i)}testAllow(t,e,i){return!t||!!Gi.element(i)&&(Gi.string(t)?vo(i,t,e):!!Gi.element(t)&&po(t,i))}testIgnore(t,e,i){return!(!t||!Gi.element(i))&&(Gi.string(t)?vo(i,t,e):!!Gi.element(t)&&po(t,i))}fire(t){return this.events.fire(t),this}_onOff(t,e,i,o){Gi.object(e)&&!Gi.array(e)&&(o=i,i=null);const n="on"===t?"add":"remove",r=so(e,i);for(let e in r){"wheel"===e&&(e=Yi.wheelEvent);for(const i of r[e])Go(e,this._actions)?this.events[t](e,i):Gi.string(this.target)?this._scopeEvents[`${n}Delegate`](this.target,this._context,e,i,o):this._scopeEvents[n](this.target,e,i,o)}return this}on(t,e,i){return this._onOff("on",t,e,i)}off(t,e,i){return this._onOff("off",t,e,i)}set(t){const e=this._defaults;Gi.object(t)||(t={}),this.options=to(e.base);for(const i in this._actions.methodDict){const o=i,n=this._actions.methodDict[o];this.options[o]={},this.setPerAction(o,eo(eo({},e.perAction),e.actions[o])),this[n](t[o])}for(const e in t)Gi.func(this[e])&&this[e](t[e]);return this}unset(){if(Gi.string(this.target))for(const t in this._scopeEvents.delegatedEvents){const e=this._scopeEvents.delegatedEvents[t];for(let i=e.length-1;i>=0;i--){const{selector:o,context:n,listeners:r}=e[i];o===this.target&&n===this._context&&e.splice(i,1);for(let e=r.length-1;e>=0;e--)this._scopeEvents.removeDelegate(this.target,this._context,t,r[e][0],r[e][1])}}else this._scopeEvents.remove(this.target,"all")}}{get _defaults(){return t.defaults}set(e){return super.set(e),t.fire("interactable:set",{options:e,interactable:this}),this}unset(){super.unset(),t.interactables.list.splice(t.interactables.list.indexOf(this),1),t.fire("interactable:unset",{interactable:this})}}}addListeners(t,e){this.listenerMaps.push({id:e,map:t})}fire(t,e){for(const{map:{[t]:i}}of this.listenerMaps)if(i&&!1===i(e,this,t))return!1}init(t){return this.isInitialized?this:function(t,e){t.isInitialized=!0,Gi.window(e)&&Hi(e);return ji.init(e),Yi.init(e),ro.init(e),t.window=e,t.document=e.document,t.usePlugin(gn),t.usePlugin(Jo),t}(this,t)}pluginIsInstalled(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}usePlugin(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){let e=0;const i=this.listenerMaps.length,o=t.before.reduce(((t,e)=>(t[e]=!0,t[mn(e)]=!0,t)),{});for(;e<i;e++){const t=this.listenerMaps[e].id;if(o[t]||o[mn(t)])break}this.listenerMaps.splice(e,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}addDocument(t,e){if(-1!==this.getDocIndex(t))return!1;const i=Vi(t);e=e?eo({},e):{},this.documents.push({doc:t,options:e}),this.events.documents.push(t),t!==this.document&&this.events.add(i,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:i,scope:this,options:e})}removeDocument(t){const e=this.getDocIndex(t),i=Vi(t),o=this.documents[e].options;this.events.remove(i,"unload",this.onWindowUnload),this.documents.splice(e,1),this.events.documents.splice(e,1),this.fire("scope:remove-document",{doc:t,window:i,scope:this,options:o})}getDocIndex(t){for(let e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}getDocOptions(t){const e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}now(){return(this.window.Date||Date).now()}};var vn=bn.interactStatic;const wn="undefined"!=typeof globalThis?globalThis:window;function yn({interaction:t}){if("drag"!==t.prepared.name)return;const e=t.prepared.axis;"x"===e?(t.coords.cur.page.y=t.coords.start.page.y,t.coords.cur.client.y=t.coords.start.client.y,t.coords.velocity.client.y=0,t.coords.velocity.page.y=0):"y"===e&&(t.coords.cur.page.x=t.coords.start.page.x,t.coords.cur.client.x=t.coords.start.client.x,t.coords.velocity.client.x=0,t.coords.velocity.page.x=0)}function xn({iEvent:t,interaction:e}){if("drag"!==e.prepared.name)return;const i=e.prepared.axis;if("x"===i||"y"===i){const o="x"===i?"y":"x";t.page[o]=e.coords.start.page[o],t.client[o]=e.coords.start.client[o],t.delta[o]=0}}bn.init(wn);const En={id:"actions/drag",install:function(t){const{actions:e,Interactable:i,defaults:o}=t;i.prototype.draggable=En.draggable,e.map.drag=En,e.methodDict.drag="draggable",o.actions.drag=En.defaults},listeners:{"interactions:before-action-move":yn,"interactions:action-resume":yn,"interactions:action-move":xn,"auto-start:check":t=>{const{interaction:e,interactable:i,buttons:o}=t,n=i.options.drag;if(n&&n.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(o&i.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===n.lockAxis?n.startAxis:n.lockAxis},!1}},draggable:function(t){return Gi.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):Gi.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:yn,move:xn,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:()=>"move"};var Sn=En;vn.use(Sn);class zn extends Mo{constructor(t,e,i){super(e._interaction),this.target=void 0,this.dropzone=void 0,this.dragEvent=void 0,this.relatedTarget=void 0,this.draggable=void 0,this.timeStamp=void 0,this.propagationStopped=!1,this.immediatePropagationStopped=!1;const{element:o,dropzone:n}="dragleave"===i?t.prev:t.cur;this.type=i,this.target=o,this.currentTarget=o,this.dropzone=n,this.dragEvent=e,this.relatedTarget=e.target,this.draggable=e.interactable,this.timeStamp=e.timeStamp}reject(){const{dropState:t}=this._interaction;if("dropactivate"===this.type||this.dropzone&&t.cur.dropzone===this.dropzone&&t.cur.element===this.target)if(t.prev.dropzone=this.dropzone,t.prev.element=this.target,t.rejected=!0,t.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){const e=t.activeDrops,i=Ki(e,(({dropzone:t,element:e})=>t===this.dropzone&&e===this.target));t.activeDrops.splice(i,1);const o=new zn(t,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new zn(t,this.dragEvent,"dragleave"))}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}function Cn(t,e){for(const{dropzone:i,element:o}of t.slice())e.dropzone=i,e.target=o,i.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}function qn(t,e){const i=function({interactables:t},e){const i=[];for(const o of t.list){if(!o.options.drop.enabled)continue;const t=o.options.drop.accept;if(Gi.element(t)&&t!==e||Gi.string(t)&&!fo(e,t)||Gi.func(t)&&!t({dropzone:o,draggableElement:e}))continue;const n=Gi.string(o.target)?o._context.querySelectorAll(o.target):Gi.array(o.target)?o.target:[o.target];for(const t of n)t!==e&&i.push({dropzone:o,element:t,rect:o.getRect(t)})}return i}(t,e);for(const t of i)t.rect=t.dropzone.getRect(t.element);return i}function An({dropState:t,interactable:e,element:i},o,n){const r=[];for(const{dropzone:s,element:a,rect:c}of t.activeDrops)r.push(s.dropCheck(o,n,e,i,a,c)?a:null);const s=function(t){let e,i=[];for(let o=0;o<t.length;o++){const n=t[o],r=t[e];if(!n||o===e)continue;if(!r){e=o;continue}const s=go(n),a=go(r);if(s===n.ownerDocument)continue;if(a===n.ownerDocument){e=o;continue}if(s===a){bo(n,r)&&(e=o);continue}let c;if(i=i.length?i:mo(r),r instanceof ji.HTMLElement&&n instanceof ji.SVGElement&&!(n instanceof ji.SVGSVGElement)){if(n===a)continue;c=n.ownerSVGElement}else c=n;const l=mo(c,r.ownerDocument);let d=0;for(;l[d]&&l[d]===i[d];)d++;const p=[l[d-1],l[d],i[d]];if(p[0]){let t=p[0].lastChild;for(;t;){if(t===p[1]){e=o,i=l;break}if(t===p[2])break;t=t.previousSibling}}}return e}(r);return t.activeDrops[s]||null}function _n(t,e,i){const{dropState:o}=t,n={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===i.type&&(n.activate=new zn(o,i,"dropactivate"),n.activate.target=null,n.activate.dropzone=null),"dragend"===i.type&&(n.deactivate=new zn(o,i,"dropdeactivate"),n.deactivate.target=null,n.deactivate.dropzone=null),o.rejected||(o.cur.element!==o.prev.element&&(o.prev.dropzone&&(n.leave=new zn(o,i,"dragleave"),i.dragLeave=n.leave.target=o.prev.element,i.prevDropzone=n.leave.dropzone=o.prev.dropzone),o.cur.dropzone&&(n.enter=new zn(o,i,"dragenter"),i.dragEnter=o.cur.element,i.dropzone=o.cur.dropzone)),"dragend"===i.type&&o.cur.dropzone&&(n.drop=new zn(o,i,"drop"),i.dropzone=o.cur.dropzone,i.relatedTarget=o.cur.element),"dragmove"===i.type&&o.cur.dropzone&&(n.move=new zn(o,i,"dropmove"),n.move.dragmove=i,i.dropzone=o.cur.dropzone)),n}function Mn(t,e){const{dropState:i}=t,{activeDrops:o,cur:n,prev:r}=i;e.leave&&r.dropzone.fire(e.leave),e.enter&&n.dropzone.fire(e.enter),e.move&&n.dropzone.fire(e.move),e.drop&&n.dropzone.fire(e.drop),e.deactivate&&Cn(o,e.deactivate),i.prev.dropzone=n.dropzone,i.prev.element=n.element}function Dn({interaction:t,iEvent:e,event:i},o){if("dragmove"!==e.type&&"dragend"!==e.type)return;const{dropState:n}=t;o.dynamicDrop&&(n.activeDrops=qn(o,t.element));const r=e,s=An(t,r,i);n.rejected=n.rejected&&!!s&&s.dropzone===n.cur.dropzone&&s.element===n.cur.element,n.cur.dropzone=s&&s.dropzone,n.cur.element=s&&s.element,n.events=_n(t,0,r)}const On={id:"actions/drop",install:function(t){const{actions:e,interactStatic:i,Interactable:o,defaults:n}=t;t.usePlugin(Sn),o.prototype.dropzone=function(t){return function(t,e){if(Gi.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){const i=so(e.listeners),o=Object.keys(i).reduce(((t,e)=>(t[/^(enter|leave)/.test(e)?`drag${e}`:/^(activate|deactivate|move)/.test(e)?`drop${e}`:e]=i[e],t)),{});t.off(t.options.drop.listeners),t.on(o),t.options.drop.listeners=o}return Gi.func(e.ondrop)&&t.on("drop",e.ondrop),Gi.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),Gi.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),Gi.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),Gi.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),Gi.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:Gi.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(Gi.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},o.prototype.dropCheck=function(t,e,i,o,n,r){return function(t,e,i,o,n,r,s){let a=!1;if(!(s=s||t.getRect(r)))return!!t.options.drop.checker&&t.options.drop.checker(e,i,a,t,r,o,n);const c=t.options.drop.overlap;if("pointer"===c){const t=Ao(o,n,"drag"),i=Io(e);i.x+=t.x,i.y+=t.y;const r=i.x>s.left&&i.x<s.right,c=i.y>s.top&&i.y<s.bottom;a=r&&c}const l=o.getRect(n);if(l&&"center"===c){const t=l.left+l.width/2,e=l.top+l.height/2;a=t>=s.left&&t<=s.right&&e>=s.top&&e<=s.bottom}if(l&&Gi.number(c)){a=Math.max(0,Math.min(s.right,l.right)-Math.max(s.left,l.left))*Math.max(0,Math.min(s.bottom,l.bottom)-Math.max(s.top,l.top))/(l.width*l.height)>=c}t.options.drop.checker&&(a=t.options.drop.checker(e,i,a,t,r,o,n));return a}(this,t,e,i,o,n,r)},i.dynamicDrop=function(e){return Gi.bool(e)?(t.dynamicDrop=e,i):t.dynamicDrop},eo(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,n.actions.drop=On.defaults},listeners:{"interactions:before-action-start":({interaction:t})=>{"drag"===t.prepared.name&&(t.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":({interaction:t,event:e,iEvent:i},o)=>{if("drag"!==t.prepared.name)return;const{dropState:n}=t;n.activeDrops=null,n.events=null,n.activeDrops=qn(o,t.element),n.events=_n(t,0,i),n.events.activate&&(Cn(n.activeDrops,n.events.activate),o.fire("actions/drop:start",{interaction:t,dragEvent:i}))},"interactions:action-move":Dn,"interactions:after-action-move":({interaction:t,iEvent:e},i)=>{"drag"===t.prepared.name&&(Mn(t,t.dropState.events),i.fire("actions/drop:move",{interaction:t,dragEvent:e}),t.dropState.events={})},"interactions:action-end":(t,e)=>{if("drag"!==t.interaction.prepared.name)return;const{interaction:i,iEvent:o}=t;Dn(t,e),Mn(i,i.dropState.events),e.fire("actions/drop:end",{interaction:i,dragEvent:o})},"interactions:stop":({interaction:t})=>{if("drag"!==t.prepared.name)return;const{dropState:e}=t;e&&(e.activeDrops=null,e.events=null,e.cur.dropzone=null,e.cur.element=null,e.prev.dropzone=null,e.prev.element=null,e.rejected=!1)}},getActiveDrops:qn,getDrop:An,getDropEvents:_n,fireDropEvents:Mn,defaults:{enabled:!1,accept:null,overlap:"pointer"}};var kn=On;function Tn(t){return Gi.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Pn(t){return Gi.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}vn.use(kn);var $n={id:"auto-start/interactableMethods",install:function(t){const{Interactable:e}=t;e.prototype.getAction=function(e,i,o,n){const r=function(t,e,i,o,n){const r=t.getRect(o),s=e.buttons||{0:1,1:4,3:8,4:16}[e.button],a={action:null,interactable:t,interaction:i,element:o,rect:r,buttons:s};return n.fire("auto-start:check",a),a.action}(this,i,o,n,t);return this.options.actionChecker?this.options.actionChecker(e,i,r,this,n,o):r},e.prototype.ignoreFrom=ko((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=ko((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Pn,e.prototype.styleCursor=Tn}};function Ln(t,e,i,o,n){return e.testIgnoreAllow(e.options[t.name],i,o)&&e.options[t.name].enabled&&Rn(e,i,t,n)?t:null}function Nn(t,e,i,o,n,r,s){for(let a=0,c=o.length;a<c;a++){const c=o[a],l=n[a],d=c.getAction(e,i,t,l);if(!d)continue;const p=Ln(d,c,l,r,s);if(p)return{action:p,interactable:c,element:l}}return{action:null,interactable:null,element:null}}function In(t,e,i,o,n){let r=[],s=[],a=o;function c(t){r.push(t),s.push(a)}for(;Gi.element(a);){r=[],s=[],n.interactables.forEachMatch(a,c);const l=Nn(t,e,i,r,s,o,n);if(l.action&&!l.interactable.options[l.action.name].manualStart)return l;a=ho(a)}return{action:null,interactable:null,element:null}}function jn(t,{action:e,interactable:i,element:o},n){e=e||{name:null},t.interactable=i,t.element=o,To(t.prepared,e),t.rect=i&&e.name?i.getRect(o):null,Hn(t,n),n.fire("autoStart:prepared",{interaction:t})}function Rn(t,e,i,o){const n=t.options,r=n[i.name].max,s=n[i.name].maxPerElement,a=o.autoStart.maxInteractions;let c=0,l=0,d=0;if(!(r&&s&&a))return!1;for(const n of o.interactions.list){const o=n.prepared.name;if(n.interacting()){if(c++,c>=a)return!1;if(n.interactable===t){if(l+=o===i.name?1:0,l>=r)return!1;if(n.element===e&&(d++,o===i.name&&d>=s))return!1}}}return a>0}function Fn(t,e){return Gi.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Un(t,e,i){const{cursorElement:o}=i.autoStart;o&&o!==t&&(o.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,i.autoStart.cursorElement=e?t:null}function Hn(t,e){const{interactable:i,element:o,prepared:n}=t;if("mouse"!==t.pointerType||!i||!i.options.styleCursor)return void(e.autoStart.cursorElement&&Un(e.autoStart.cursorElement,"",e));let r="";if(n.name){const s=i.options[n.name].cursorChecker;r=Gi.func(s)?s(n,i,o,t._interacting):e.actions.map[n.name].getCursor(n)}Un(t.element,r||"",e)}const Vn={id:"auto-start/base",before:["actions"],install:function(t){const{interactStatic:e,defaults:i}=t;t.usePlugin($n),i.base.actionChecker=null,i.base.styleCursor=!0,eo(i.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=e=>Fn(e,t),t.autoStart={maxInteractions:1/0,withinInteractionLimit:Rn,cursorElement:null}},listeners:{"interactions:down":function({interaction:t,pointer:e,event:i,eventTarget:o},n){if(t.interacting())return;jn(t,In(t,e,i,o,n),n)},"interactions:move":(t,e)=>{!function({interaction:t,pointer:e,event:i,eventTarget:o},n){if("mouse"!==t.pointerType||t.pointerIsDown||t.interacting())return;jn(t,In(t,e,i,o,n),n)}(t,e),function(t,e){const{interaction:i}=t;if(!i.pointerIsDown||i.interacting()||!i.pointerWasMoved||!i.prepared.name)return;e.fire("autoStart:before-start",t);const{interactable:o}=i,n=i.prepared.name;n&&o&&(o.options[n].manualStart||!Rn(o,i.element,i.prepared,e)?i.stop():(i.start(i.prepared,o,i.element),Hn(i,e)))}(t,e)},"interactions:stop":function({interaction:t},e){const{interactable:i}=t;i&&i.options.styleCursor&&Un(t.element,"",e)}},maxInteractions:Fn,withinInteractionLimit:Rn,validateAction:Ln};var Bn=Vn;var Wn={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function({interaction:t,eventTarget:e,dx:i,dy:o},n){if("drag"!==t.prepared.name)return;const r=Math.abs(i),s=Math.abs(o),a=t.interactable.options.drag,c=a.startAxis,l=r>s?"x":r<s?"y":"xy";if(t.prepared.axis="start"===a.lockAxis?l[0]:a.lockAxis,"xy"!==l&&"xy"!==c&&c!==l){t.prepared.name=null;let i=e;const o=function(o){if(o===t.interactable)return;const r=t.interactable.options.drag;if(!r.manualStart&&o.testIgnoreAllow(r,i,e)){const r=o.getAction(t.downPointer,t.downEvent,t,i);if(r&&"drag"===r.name&&function(t,e){if(!e)return!1;const i=e.options.drag.startAxis;return"xy"===t||"xy"===i||i===t}(l,o)&&Bn.validateAction(r,o,i,e,n))return o}};for(;Gi.element(i);){const e=n.interactables.forEachMatch(i,o);if(e){t.prepared.name="drag",t.interactable=e,t.element=i;break}i=ho(i)}}}}};function Gn(t){const e=t.prepared&&t.prepared.name;if(!e)return null;const i=t.interactable.options;return i[e].hold||i[e].delay}const Xn={id:"auto-start/hold",install:function(t){const{defaults:e}=t;t.usePlugin(Bn),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":({interaction:t})=>{t.autoStartHoldTimer=null},"autoStart:prepared":({interaction:t})=>{const e=Gn(t);e>0&&(t.autoStartHoldTimer=setTimeout((()=>{t.start(t.prepared,t.interactable,t.element)}),e))},"interactions:move":({interaction:t,duplicate:e})=>{t.autoStartHoldTimer&&t.pointerWasMoved&&!e&&(clearTimeout(t.autoStartHoldTimer),t.autoStartHoldTimer=null)},"autoStart:before-start":({interaction:t})=>{Gn(t)>0&&(t.prepared.name=null)}},getHoldDuration:Gn};var Yn=Xn,Qn={id:"auto-start",install(t){t.usePlugin(Bn),t.usePlugin(Yn),t.usePlugin(Wn)}};vn.use(Qn);var Jn,Kn={};!function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(Jn||(Jn={}));const Zn="[interact.js] ",tr={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};const er=[{name:Jn.touchAction,perform:({element:t})=>!function(t,e,i){let o=t;for(;Gi.element(o);){if(ir(o,e,i))return!0;o=ho(o)}return!1}(t,"touchAction",/pan-|pinch|none/),getInfo:({element:t})=>[t,tr.touchAction],text:'Consider adding CSS "touch-action: none" to this element\n'},{name:Jn.boxSizing,perform(t){const{element:e}=t;return"resize"===t.prepared.name&&e instanceof ji.HTMLElement&&!ir(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:({element:t})=>[t,tr.boxSizing]},{name:Jn.noListeners,perform(t){const e=t.prepared.name;return!(t.interactable.events.types[`${e}move`]||[]).length},getInfo:t=>[t.prepared.name,t.interactable],text:"There are no listeners set for this action"}];function ir(t,e,i){const o=t.style[e]||Ui.getComputedStyle(t)[e];return i.test((o||"").toString())}const or="dev-tools",nr={id:or,install:function(t,{logger:e}={}){const{Interactable:i,defaults:o}=t;t.logger=e||console,o.base.devTools={ignore:{}},i.prototype.devTools=function(t){return t?(eo(this.options.devTools,t),this):this.options.devTools},t.usePlugin(Kn)},listeners:{"interactions:action-start":({interaction:t},e)=>{for(const i of er){const o=t.interactable&&t.interactable.options;o&&o.devTools&&o.devTools.ignore[i.name]||!i.perform(t)||e.logger.warn(Zn+i.text,...i.getInfo(t))}}},checks:er,CheckName:Jn,links:tr,prefix:Zn};var rr=nr;vn.use(rr);var sr=Object.freeze({__proto__:null,edgeTarget:()=>{},elements:()=>{},grid:t=>{const e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((([e,i])=>e in t||i in t)),i=(i,o)=>{const{range:n,limits:r={left:-1/0,right:1/0,top:-1/0,bottom:1/0},offset:s={x:0,y:0}}=t,a={range:n,grid:t,x:null,y:null};for(const[n,c]of e){const e=Math.round((i-s.x)/t[n]),l=Math.round((o-s.y)/t[c]);a[n]=Math.max(r.left,Math.min(r.right,e*t[n]+s.x)),a[c]=Math.max(r.top,Math.min(r.bottom,l*t[c]+s.y))}return a};return i.grid=t,i.coordFields=e,i}});const ar={id:"snappers",install(t){const{interactStatic:e}=t;e.snappers=eo(e.snappers||{},sr),e.createSnapGrid=e.snappers.grid}};var cr=ar;class lr{constructor(t){this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=t,this.result=dr()}start({phase:t},e){const{interaction:i}=this,o=function(t){const e=t.interactable.options[t.prepared.name],i=e.modifiers;if(i&&i.length)return i;return["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((t=>{const i=e[t];return i&&i.enabled&&{options:i,methods:i._methods}})).filter((t=>!!t))}(i);var n,r;this.prepareStates(o),this.edges=eo({},i.edges),this.startOffset=(n=i.rect,r=e,n?{left:r.x-n.left,top:r.y-n.top,right:n.right-r.x,bottom:n.bottom-r.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};const s=this.fillArg({phase:t,pageCoords:e,preEnd:!1});this.result=dr(),this.startAll(s);return this.result=this.setAll(s)}fillArg(t){const{interaction:e}=this;return t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset,t}startAll(t){for(const e of this.states)e.methods.start&&(t.state=e,e.methods.start(t))}setAll(t){const{phase:e,preEnd:i,skipModifiers:o,rect:n}=t;t.coords=eo({},t.pageCoords),t.rect=eo({},n);const r=o?this.states.slice(o):this.states,s=dr(t.coords,t.rect);for(const o of r){var a;const{options:n}=o,r=eo({},t.coords);let c=null;null!=(a=o.methods)&&a.set&&this.shouldDo(n,i,e)&&(t.state=o,c=o.methods.set(t),qo(this.interaction.edges,t.rect,{x:t.coords.x-r.x,y:t.coords.y-r.y})),s.eventProps.push(c)}s.delta.x=t.coords.x-t.pageCoords.x,s.delta.y=t.coords.y-t.pageCoords.y,s.rectDelta.left=t.rect.left-n.left,s.rectDelta.right=t.rect.right-n.right,s.rectDelta.top=t.rect.top-n.top,s.rectDelta.bottom=t.rect.bottom-n.bottom;const c=this.result.coords,l=this.result.rect;if(c&&l){const t=s.rect.left!==l.left||s.rect.right!==l.right||s.rect.top!==l.top||s.rect.bottom!==l.bottom;s.changed=t||c.x!==s.coords.x||c.y!==s.coords.y}return s}applyToInteraction(t){const{interaction:e}=this,{phase:i}=t,o=e.coords.cur,n=e.coords.start,{result:r,startDelta:s}=this,a=r.delta;"start"===i&&eo(this.startDelta,r.delta);for(const[t,e]of[[n,s],[o,a]])t.page.x+=e.x,t.page.y+=e.y,t.client.x+=e.x,t.client.y+=e.y;const{rectDelta:c}=this.result,l=t.rect||e.rect;l.left+=c.left,l.right+=c.right,l.top+=c.top,l.bottom+=c.bottom,l.width=l.right-l.left,l.height=l.bottom-l.top}setAndApply(t){const{interaction:e}=this,{phase:i,preEnd:o,skipModifiers:n}=t,r=this.setAll(this.fillArg({preEnd:o,phase:i,pageCoords:t.modifiedCoords||e.coords.cur.page}));if(this.result=r,!r.changed&&(!n||n<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){const{page:i}=e.coords.cur,o={x:t.modifiedCoords.x-i.x,y:t.modifiedCoords.y-i.y};r.coords.x+=o.x,r.coords.y+=o.y,r.delta.x+=o.x,r.delta.y+=o.y}this.applyToInteraction(t)}beforeEnd(t){const{interaction:e,event:i}=t,o=this.states;if(!o||!o.length)return;let n=!1;for(const e of o){t.state=e;const{options:i,methods:o}=e,r=o.beforeEnd&&o.beforeEnd(t);if(r)return this.endResult=r,!1;n=n||!n&&this.shouldDo(i,!0,t.phase,!0)}n&&e.move({event:i,preEnd:!0})}stop(t){const{interaction:e}=t;if(!this.states||!this.states.length)return;const i=eo({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(i);for(const t of this.states)i.state=t,t.methods.stop&&t.methods.stop(i);this.states=null,this.endResult=null}prepareStates(t){this.states=[];for(let e=0;e<t.length;e++){const{options:i,methods:o,name:n}=t[e];this.states.push({options:i,methods:o,index:e,name:n})}return this.states}restoreInteractionCoords({interaction:{coords:t,rect:e,modification:i}}){if(!i.result)return;const{startDelta:o}=i,{delta:n,rectDelta:r}=i.result,s=[[t.start,o],[t.cur,n]];for(const[t,e]of s)t.page.x-=e.x,t.page.y-=e.y,t.client.x-=e.x,t.client.y-=e.y;e.left-=r.left,e.right-=r.right,e.top-=r.top,e.bottom-=r.bottom}shouldDo(t,e,i,o){return!(!t||!1===t.enabled||o&&!t.endOnly||t.endOnly&&!e||"start"===i&&!t.setStart)}copyFrom(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((t=>to(t))),this.result=dr(eo({},t.result.coords),eo({},t.result.rect))}destroy(){for(const t in this)this[t]=null}}function dr(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function pr(t,e){const{defaults:i}=t,o={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},n=t=>{const n=t||{};n.enabled=!1!==n.enabled;for(const t in i)t in n||(n[t]=i[t]);const r={options:n,methods:o,name:e,enable:()=>(n.enabled=!0,r),disable:()=>(n.enabled=!1,r)};return r};return e&&"string"==typeof e&&(n._defaults=i,n._methods=o),n}function ur({iEvent:t,interaction:e}){const i=e.modification.result;i&&(t.modifiers=i.eventProps)}const hr={id:"modifiers/base",before:["actions"],install:t=>{t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":({interaction:t})=>{t.modification=new lr(t)},"interactions:before-action-start":t=>{const e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":t=>t.interaction.modification.setAndApply(t),"interactions:before-action-end":t=>t.interaction.modification.beforeEnd(t),"interactions:action-start":ur,"interactions:action-move":ur,"interactions:action-end":ur,"interactions:after-action-start":t=>t.interaction.modification.restoreInteractionCoords(t),"interactions:after-action-move":t=>t.interaction.modification.restoreInteractionCoords(t),"interactions:stop":t=>t.interaction.modification.stop(t)}};var fr=hr;const gr={start(t){const{state:e,rect:i,edges:o,pageCoords:n}=t;let{ratio:r}=e.options;const{equalDelta:s,modifiers:a}=e.options;"preserve"===r&&(r=i.width/i.height),e.startCoords=eo({},n),e.startRect=eo({},i),e.ratio=r,e.equalDelta=s;const c=e.linkedEdges={top:o.top||o.left&&!o.bottom,left:o.left||o.top&&!o.right,bottom:o.bottom||o.right&&!o.top,right:o.right||o.bottom&&!o.left};if(e.xIsPrimaryAxis=!(!o.left&&!o.right),e.equalDelta)e.edgeSign=(c.left?1:-1)*(c.top?1:-1);else{const t=e.xIsPrimaryAxis?c.top:c.left;e.edgeSign=t?-1:1}if(eo(t.edges,c),!a||!a.length)return;const l=new lr(t.interaction);l.copyFrom(t.interaction.modification),l.prepareStates(a),e.subModification=l,l.startAll({...t})},set(t){const{state:e,rect:i,coords:o}=t,n=eo({},o),r=e.equalDelta?mr:br;if(r(e,e.xIsPrimaryAxis,o,i),!e.subModification)return null;const s=eo({},i);qo(e.linkedEdges,s,{x:o.x-n.x,y:o.y-n.y});const a=e.subModification.setAll({...t,rect:s,edges:e.linkedEdges,pageCoords:o,prevCoords:o,prevRect:s}),{delta:c}=a;if(a.changed){r(e,Math.abs(c.x)>Math.abs(c.y),a.coords,a.rect),eo(o,a.coords)}return a.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function mr({startCoords:t,edgeSign:e},i,o){i?o.y=t.y+(o.x-t.x)*e:o.x=t.x+(o.y-t.y)*e}function br({startRect:t,startCoords:e,ratio:i,edgeSign:o},n,r,s){if(n){const n=s.width/i;r.y=e.y+(n-t.height)*o}else{const n=s.height*i;r.x=e.x+(n-t.width)*o}}var vr=pr(gr,"aspectRatio");const wr=()=>{};wr._defaults={};var yr=wr;function xr(t,e,i){return Gi.func(t)?So(t,e.interactable,e.element,[i.x,i.y,e]):So(t,e.interactable,e.element)}const Er={start:function({rect:t,startOffset:e,state:i,interaction:o,pageCoords:n}){const{options:r}=i,{elementRect:s}=r,a=eo({left:0,top:0,right:0,bottom:0},r.offset||{});if(t&&s){const i=xr(r.restriction,o,n);if(i){const e=i.right-i.left-t.width,o=i.bottom-i.top-t.height;e<0&&(a.left+=e,a.right+=e),o<0&&(a.top+=o,a.bottom+=o)}a.left+=e.left-t.width*s.left,a.top+=e.top-t.height*s.top,a.right+=e.right-t.width*(1-s.right),a.bottom+=e.bottom-t.height*(1-s.bottom)}i.offset=a},set:function({coords:t,interaction:e,state:i}){const{options:o,offset:n}=i,r=xr(o.restriction,e,t);if(!r)return;const s=function(t){return!t||"left"in t&&"top"in t||((t=eo({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height),t}(r);t.x=Math.max(Math.min(s.right-n.right,t.x),s.left+n.left),t.y=Math.max(Math.min(s.bottom-n.bottom,t.y),s.top+n.top)},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};var Sr=pr(Er,"restrict");const zr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Cr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function qr(t,e){for(const i of["top","left","bottom","right"])i in t||(t[i]=e[i]);return t}const Ar={noInner:zr,noOuter:Cr,start:function({interaction:t,startOffset:e,state:i}){const{options:o}=i;let n;if(o){n=zo(xr(o.offset,t,t.coords.start.page))}n=n||{x:0,y:0},i.offset={top:n.y+e.top,left:n.x+e.left,bottom:n.y-e.bottom,right:n.x-e.right}},set:function({coords:t,edges:e,interaction:i,state:o}){const{offset:n,options:r}=o;if(!e)return;const s=eo({},t),a=xr(r.inner,i,s)||{},c=xr(r.outer,i,s)||{};qr(a,zr),qr(c,Cr),e.top?t.y=Math.min(Math.max(c.top+n.top,s.y),a.top+n.top):e.bottom&&(t.y=Math.max(Math.min(c.bottom+n.bottom,s.y),a.bottom+n.bottom)),e.left?t.x=Math.min(Math.max(c.left+n.left,s.x),a.left+n.left):e.right&&(t.x=Math.max(Math.min(c.right+n.right,s.x),a.right+n.right))},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};var _r=pr(Ar,"restrictEdges");const Mr=eo({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Er.defaults);var Dr=pr({start:Er.start,set:Er.set,defaults:Mr},"restrictRect");const Or={width:-1/0,height:-1/0},kr={width:1/0,height:1/0};var Tr=pr({start:function(t){return Ar.start(t)},set:function(t){const{interaction:e,state:i,rect:o,edges:n}=t,{options:r}=i;if(!n)return;const s=Co(xr(r.min,e,t.coords))||Or,a=Co(xr(r.max,e,t.coords))||kr;i.options={endOnly:r.endOnly,inner:eo({},Ar.noInner),outer:eo({},Ar.noOuter)},n.top?(i.options.inner.top=o.bottom-s.height,i.options.outer.top=o.bottom-a.height):n.bottom&&(i.options.inner.bottom=o.top+s.height,i.options.outer.bottom=o.top+a.height),n.left?(i.options.inner.left=o.right-s.width,i.options.outer.left=o.right-a.width):n.right&&(i.options.inner.right=o.left+s.width,i.options.outer.right=o.left+a.width),Ar.set(t),i.options=r},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize");const Pr={start:function(t){const{interaction:e,interactable:i,element:o,rect:n,state:r,startOffset:s}=t,{options:a}=r,c=a.offsetWithOrigin?function(t){const{element:e}=t.interaction,i=zo(So(t.state.options.origin,null,null,[e]));return i||Ao(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};let l;if("startCoords"===a.offset)l={x:e.coords.start.page.x,y:e.coords.start.page.y};else{const t=So(a.offset,i,o,[e]);l=zo(t)||{x:0,y:0},l.x+=c.x,l.y+=c.y}const{relativePoints:d}=a;r.offsets=n&&d&&d.length?d.map(((t,e)=>({index:e,relativePoint:t,x:s.left-n.width*t.x+l.x,y:s.top-n.height*t.y+l.y}))):[{index:0,relativePoint:null,x:l.x,y:l.y}]},set:function(t){const{interaction:e,coords:i,state:o}=t,{options:n,offsets:r}=o,s=Ao(e.interactable,e.element,e.prepared.name),a=eo({},i),c=[];n.offsetWithOrigin||(a.x-=s.x,a.y-=s.y);for(const t of r){const i=a.x-t.x,o=a.y-t.y;for(let r=0,s=n.targets.length;r<s;r++){const s=n.targets[r];let a;a=Gi.func(s)?s(i,o,e._proxy,t,r):s,a&&c.push({x:(Gi.number(a.x)?a.x:i)+t.x,y:(Gi.number(a.y)?a.y:o)+t.y,range:Gi.number(a.range)?a.range:n.range,source:s,index:r,offset:t})}}const l={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}};for(const t of c){const e=t.range,i=t.x-a.x,o=t.y-a.y,n=_o(i,o);let r=n<=e;e===1/0&&l.inRange&&l.range!==1/0&&(r=!1),l.target&&!(r?l.inRange&&e!==1/0?n/e<l.distance/l.range:e===1/0&&l.range!==1/0||n<l.distance:!l.inRange&&n<l.distance)||(l.target=t,l.distance=n,l.range=e,l.inRange=r,l.delta.x=i,l.delta.y=o)}return l.inRange&&(i.x=l.target.x,i.y=l.target.y),o.closest=l,l},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};var $r=pr(Pr,"snap");const Lr={start:function(t){const{state:e,edges:i}=t,{options:o}=e;if(!i)return null;t.state={options:{targets:null,relativePoints:[{x:i.left?0:1,y:i.top?0:1}],offset:o.offset||"self",origin:{x:0,y:0},range:o.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],Pr.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){const{interaction:e,state:i,coords:o}=t,{options:n,offsets:r}=i,s={x:o.x-r[0].x,y:o.y-r[0].y};i.options=eo({},n),i.options.targets=[];for(const t of n.targets||[]){let o;if(o=Gi.func(t)?t(s.x,s.y,e):t,o){for(const[t,e]of i.targetFields)if(t in o||e in o){o.x=o[t],o.y=o[e];break}i.options.targets.push(o)}}const a=Pr.set(t);return i.options=n,a},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};var Nr=pr(Lr,"snapSize");var Ir={aspectRatio:vr,restrictEdges:_r,restrict:Sr,restrictRect:Dr,restrictSize:Tr,snapEdges:pr({start:function(t){const{edges:e}=t;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],Lr.start(t)):null},set:Lr.set,defaults:eo(to(Lr.defaults),{targets:null,range:null,offset:{x:0,y:0}})},"snapEdges"),snap:$r,snapSize:Nr,spring:yr,avoid:yr,transform:yr,rubberband:yr};const jr={id:"modifiers",install(t){const{interactStatic:e}=t;t.usePlugin(fr),t.usePlugin(cr),e.modifiers=Ir;for(const e in Ir){const{_defaults:i,_methods:o}=Ir[e];i._methods=o,t.defaults.perAction[e]=i}}};var Rr=jr;vn.use(Rr);class Fr{}function Ur(i){class o extends i{constructor(){super(...arguments),this.size=""}get sizeableStyle(){return Pi`<style>
        :host {
          position: relative;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }
        :host([data-size="xs"]) {
          height: ${Fr.size.xs}rem;
          width: ${Fr.size.xs}rem;
        }
        :host([data-size="sm"]) {
          height: ${Fr.size.sm}rem;
          width: ${Fr.size.sm}rem;
        }
        :host,
        :host([data-size="base"]) {
          height: ${Fr.size.base}rem;
          width: ${Fr.size.base}rem;
        }
        :host([data-size="lg"]) {
          height: ${Fr.size.lg}rem;
          width: ${Fr.size.lg}rem;
        }
        :host([data-size="xl"]) {
          height: ${Fr.size.xl}rem;
          width: ${Fr.size.xl}rem;
        }
        :host([data-wire-count="1"]),
        :host([data-wire-count="2"]) {
          height: ${Fr.size.xl}rem;
          width: ${Fr.size.xl}rem;
        }
        :host([data-wire-count="3"]) {
          height: ${Fr.size.lg}rem;
          width: ${Fr.size.lg}rem;
        }
        :host([data-wire-count="4"]) {
          height: ${Fr.size.base}rem;
          width: ${Fr.size.base}rem;
        }
        :host([data-wire-count="5"]),
        :host([data-wire-count="6"]) {
          height: ${Fr.size.sm}rem;
          width: ${Fr.size.sm}rem;
        }
        :host([data-wire-count="7"]),
        :host([data-wire-count="8"]),
        :host([data-wire-count="9"]),
        :host([data-wire-count="10"]) {
          height: ${Fr.size.xs}rem;
          width: ${Fr.size.xs}rem;
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
            height: ${Fr.size.base}rem;
            width: ${Fr.size.base}rem;
          }
        }
      </style>`}}return t([h,e("design:type",Object)],o.prototype,"size",void 0),o}Fr.size={xs:1,sm:1.5,base:2,lg:2.5,xl:3};class Hr{serialize(){return{type:"1"}}toJson(){return"1"}}const Vr=Pi`<svg
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
</svg>`;let Br=class CircuitDropzoneElement extends HTMLElement{constructor(){super(...arguments),this.size="",this.inputWireQuantum=!1,this.outputWireQuantum=!1,this.wireTop=!1,this.wireBottom=!1,this.occupied=!1,this.draggableTagName="",this.shadow=!1,this.childrenLoaded=!0,this.wireCount=0}get draggableElement(){const t=this.children[0];return void 0===t?null:t.snapped?t:null}get circuitStep(){const t=this.parentElement;return null!==t&&"CIRCUIT-STEP"===t.nodeName?t:null}set wireQuantum(t){this.inputWireQuantum=t,this.outputWireQuantum=t}get snapTarget(){const t=this.getBoundingClientRect();return{x:window.pageXOffset+t.left+this.clientWidth/2,y:window.pageYOffset+t.top+this.clientHeight/2}}index(){const t=this.closest("circuit-step");return null===t?null:t.dropzoneIndex(this)}prev(){const t=this.index();if(null===t)return null;if(null===this.circuitStep)return null;const e=this.circuitStep.prev();return null===e?null:e.dropzone(t)}next(){const t=this.index();if(null===t)return null;if(null===this.circuitStep)return null;const e=this.circuitStep.next();return null===e?null:e.dropzone(t)}assign(t){this.append(t),this.occupied=!0}toJson(){const t=this.draggableElement;return null==t?"1":t.toJson()}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.slotEl.addEventListener("slotchange",this.handleSlotChange.bind(this)),this.initDropzone(),this.addEventListener("dragAndDroppable.grab",this.enableDrop),this.addEventListener("dragAndDroppable.grab",this.dispatchDropzoneGrabEvent),this.addEventListener("dragAndDroppable.enddragging",this.dispatchDropzoneDroppedEvent),this.addEventListener("dragAndDroppable.snap",this.snapDraggable),this.addEventListener("dragAndDroppable.unsnap",this.unsnapDraggable),this.addEventListener("dragAndDroppable.trash",this.clear)}clear(t){const e=t.detail.element;this.removeChild(e)}dispatchDropzoneDroppedEvent(){this.dispatchEvent(new CustomEvent("dropzone.drop",{detail:{element:this},bubbles:!0}))}attributeChangedCallback(t,e,i){if(e!==i&&0!==this.childElementCount&&"data-wire-count"===t&&null!==i){this.children[0].setAttribute("data-wire-count",i)}}update(){if($i(Pi`<style>
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
            height: ${1.5*Fr.size.xl}rem;
            width: ${Fr.size.xl}rem;
          }
          :host([data-wire-count="3"]) {
            height: ${1.5*Fr.size.lg}rem;
            width: ${Fr.size.lg}rem;
          }
          :host([data-wire-count="4"]) {
            height: ${1.5*Fr.size.base}rem;
            width: ${Fr.size.base}rem;
          }
          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]) {
            height: ${1.5*Fr.size.sm}rem;
            width: ${Fr.size.sm}rem;
          }
          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${1.5*Fr.size.xs}rem;
            width: ${Fr.size.xs}rem;
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
              height: ${Fr.size.base}rem;
              width: ${1.5*Fr.size.base}rem;
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
          ${Vr}
        </div>`,this.shadowRoot),1===this.childElementCount){const t=this.children[0];this.childrenLoaded=!1,this.occupied=!0,this.draggableTagName=t.tagName.toLowerCase()}else if(this.childElementCount>1)throw new Error("A dropzone cannot hold multiple operations.")}handleSlotChange(){if(this.childElementCount>1)throw new Error("A dropzone cannot hold multiple operations.");if(0===this.childElementCount)return this.draggableTagName="",this.occupied=!1,void this.enableDrop();const t=this.children[0],e=t.nodeName;t.setAttribute("data-wire-count",this.wireCount.toString()),""!==this.size&&t.setAttribute("data-size",this.size),this.draggableTagName=e.toLowerCase(),this.occupied=!0,this.disableDrop(),this.childrenLoaded?this.dispatchEvent(new CustomEvent("dropzone.snap",{detail:{element:this},bubbles:!0})):this.childrenLoaded=!0}dispatchDropzoneGrabEvent(){this.dispatchEvent(new CustomEvent("dropzone.grab",{detail:{element:this},bubbles:!0}))}initDropzone(){vn(this).dropzone({accept:"[data-drag-and-drop]",overlap:"center"})}enableDrop(){vn(this).dropzone(!0)}disableDrop(){vn(this).dropzone(!1)}snapDraggable(t){const e=t.detail.element;this.append(e),e.moveTo(0,0)}unsnapDraggable(){this.draggableTagName="",this.occupied=!1,this.dispatchEvent(new CustomEvent("dropzone.unsnap",{detail:{element:this},bubbles:!0}))}updateWires(){const t=this.draggableTagName,e=this.prev();"write-gate"===t?(this.inputWireQuantum=null!==e&&e.outputWireQuantum,this.outputWireQuantum=!0):"measurement-gate"===t?(this.inputWireQuantum=null!==e&&e.outputWireQuantum,this.outputWireQuantum=!1):null===e?(this.inputWireQuantum=!1,this.outputWireQuantum=!1):(this.inputWireQuantum=e.outputWireQuantum,this.outputWireQuantum=e.outputWireQuantum)}remove(){var t;null===(t=this.parentElement)||void 0===t||t.removeChild(this)}serialize(){return null===this.draggableElement?(new Hr).serialize():this.draggableElement.serialize()}};t([d,e("design:type",HTMLSlotElement)],Br.prototype,"slotEl",void 0),t([h,e("design:type",Object)],Br.prototype,"size",void 0),t([h,e("design:type",Object)],Br.prototype,"inputWireQuantum",void 0),t([h,e("design:type",Object)],Br.prototype,"outputWireQuantum",void 0),t([h,e("design:type",Object)],Br.prototype,"wireTop",void 0),t([h,e("design:type",Object)],Br.prototype,"wireBottom",void 0),t([h,e("design:type",Object)],Br.prototype,"occupied",void 0),t([h,e("design:type",Object)],Br.prototype,"draggableTagName",void 0),t([h,e("design:type",Object)],Br.prototype,"shadow",void 0),t([h,e("design:type",Object)],Br.prototype,"childrenLoaded",void 0),t([h,e("design:type",Object)],Br.prototype,"wireCount",void 0),Br=t([m],Br);let Wr=class PaletteDropzoneElement extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.addEventListener("dragAndDroppable.trash",this.removeOperation)}update(){$i(Pi`<style>
          :host {
            position: relative;
            height: ${Fr.size.base}rem;
            width: ${Fr.size.base}rem;
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="dragAndDroppable.grab:palette-dropzone#newOperation">
          <slot></slot>
        </div>`,this.shadowRoot)}newOperation(t){const e=t.target,i=e.cloneNode(!0);e.disableHelp(),i.removeAttribute("data-grabbed"),this.prepend(i)}removeOperation(t){const e=t.detail.element;C.notNull(e),this.removeChild(e),t.stopPropagation()}};Wr=t([m],Wr);const Gr=Pi`<style>
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
</style>`,Xr=t=>t instanceof Wr,Yr=t=>t instanceof Br;function Qr(i){class o extends i{constructor(){super(...arguments),this.dragAndDrop=!1,this.grabbed=!1,this.dragging=!1,this.snapped=!0,this.positionX=0,this.positionY=0,this.hoverable=!0}get dropzone(){return this.parentElement}get dragAndDroppableStyle(){return Gr}initDragAndDrop(){this.isPaletteDraggable&&(this.dragAndDrop=!0,this.snapped=!1),this.snappedDropzone=this.dropzone,this.dragAndDrop&&(vn.isSet(this)||(vn(this).styleCursor(!1),vn(this).draggable({onstart:this.startDragging.bind(this),onmove:this.dragMove.bind(this),onend:this.endDragging.bind(this)}),this.addEventListener("mouseenter",this.dispatchMouseenterEvent),this.addEventListener("mouseleave",this.dispatchMouseleaveEvent),this.addEventListener("mousedown",this.grab),this.addEventListener("mouseup",this.unGrab)))}dispatchMouseenterEvent(){this.dispatchEvent(new CustomEvent("dragAndDroppable.mouseenter",{detail:{element:this},bubbles:!0}))}dispatchMouseleaveEvent(){this.dispatchEvent(new CustomEvent("dragAndDroppable.mouseleave",{detail:{element:this},bubbles:!0}))}startDragging(){Fe.isMobile()||(this.dragging=!0)}dragMove(t){Fe.isMobile()||this.move(t.dx,t.dy)}endDragging(t){if(!Fe.isMobile()){if(!this.snapped){const e=this.dropzone;return C.notNull(e),this.trash(),void e.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:t.clientX,y:t.clientY},bubbles:!0}))}this.dragging=!1,this.grabbed=!1,this.moveTo(0,0),this.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:t.clientX,y:t.clientY},bubbles:!0}))}}trash(){vn(this).unset(),this.dispatchEvent(new CustomEvent("dragAndDroppable.trash",{detail:{element:this},bubbles:!0}))}grab(t){Fe.isMobile()||(this.grabbed=!0,this.dispatchEvent(new CustomEvent("dragAndDroppable.grab",{detail:{element:this},bubbles:!0})),Xr(this.dropzone)&&this.moveToGrabbedPosition(t.offsetX,t.offsetY))}unGrab(t){Fe.isMobile()||(this.snapped?(this.grabbed=!1,this.moveTo(0,0),this.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab",{detail:{element:this,x:t.clientX,y:t.clientY},bubbles:!0}))):this.trash())}setSnapTargets(t,e){const i=this.dropzone,o=t.filter((t=>!t.occupied)),n=[];this.snapTargetInfo={},C.notNull(i),Yr(i)&&o.push(i);for(const[o,r]of Object.entries(t)){const t=r.snapTarget,s=t.x,a=t.y,c=s-.75*this.snapRange(),l=s+.75*this.snapRange(),d=parseInt(o)%e;parseInt(o)<e&&(n.push({x:c,y:a}),void 0===this.snapTargetInfo[c]&&(this.snapTargetInfo[c]={}),void 0===this.snapTargetInfo[c][a]&&(this.snapTargetInfo[c][a]={dropzone:null,stepIndex:-1,wireIndex:d})),n.push({x:l,y:a}),void 0===this.snapTargetInfo[l]&&(this.snapTargetInfo[l]={}),void 0===this.snapTargetInfo[l][a]&&(this.snapTargetInfo[l][a]={dropzone:null,stepIndex:Math.floor(parseInt(o)/e),wireIndex:d}),r.occupied&&r!==i||n.push(t),void 0===this.snapTargetInfo[s]&&(this.snapTargetInfo[s]={}),void 0===this.snapTargetInfo[s][a]&&(this.snapTargetInfo[s][a]={dropzone:r,stepIndex:null,wireIndex:d})}vn(this).draggable({modifiers:[vn.modifiers.snap({targets:n,range:this.snapRange(),relativePoints:[{x:.5,y:.5}]})],listeners:{move:this.moveEventListener.bind(this)}})}updateSnapTargetInfo(t){const e=t[0].snapTarget.x;for(const[t,i]of Object.entries(this.snapTargetInfo))if(!(parseInt(t)<=e))for(const[t,e]of Object.entries(i))null!==e.stepIndex&&(e.stepIndex+=1);for(const[e,i]of Object.entries(t)){const t=i.snapTarget,o=t.x,n=t.y;this.snapTargetInfo[o][n]={dropzone:i,stepIndex:null,wireIndex:parseInt(e)}}}moveEventListener(t){const e=t.modifiers[0];if(e.inRange){const t=e.target.source;let i=this.snapTargetInfo[t.x][t.y].dropzone;if(this.snappedDropzone&&(this.snapped=!1,this.snappedDropzone.dispatchEvent(new Event("dragAndDroppable.unsnap",{bubbles:!0}))),null===i){const e=this.snapTargetInfo[t.x][t.y];this.dispatchEvent(new CustomEvent("dragAndDroppable.snapToNewDropzone",{detail:{element:this,stepIndex:e.stepIndex,wireIndex:e.wireIndex},bubbles:!0})),C.notNull(this.dropzone),i=this.dropzone}this.snappedDropzone=i,this.snapped=!0,i.dispatchEvent(new CustomEvent("dragAndDroppable.snap",{detail:{element:this},bubbles:!0}))}else this.isLeavingCircuit&&(this.snapped=!1,this.dispatchEvent(new Event("dragAndDroppable.unsnap",{bubbles:!0})),this.dispatchEvent(new Event("dragAndDroppable.leave",{bubbles:!0}))),this.snapped=!1}get isLeavingCircuit(){return this.snapped&&Yr(this.parentElement)}get isPaletteDraggable(){return Xr(this.dropzone)}snapRange(){return this.clientWidth}moveToGrabbedPosition(t,e){const i=t-this.clientWidth/2,o=e-this.clientHeight/2;this.move(i,o)}move(t,e){const i=this.positionX+t,o=this.positionY+e;this.moveTo(i,o)}moveTo(t,e){this.positionX=t,this.positionY=e,this.style.transform=`translate(${t}px, ${e}px)`}}return t([h,e("design:type",Object)],o.prototype,"dragAndDrop",void 0),t([h,e("design:type",Object)],o.prototype,"grabbed",void 0),t([h,e("design:type",Object)],o.prototype,"dragging",void 0),t([h,e("design:type",Object)],o.prototype,"snapped",void 0),t([h,e("design:type",Object)],o.prototype,"positionX",void 0),t([h,e("design:type",Object)],o.prototype,"positionY",void 0),t([h,e("design:type",Object)],o.prototype,"hoverable",void 0),o}function Jr(i){class o extends i{constructor(){super(...arguments),this.help=!0}showHelp(){if(!this.help)return;if(this._tippy)return;const t=this.innerHTML.trim();if(""===t)return;Ie(this,{allowHTML:!0,animation:!1,arrow:Zt+Zt,delay:0,placement:"right",theme:"qni",onShow(e){e.setContent(t)}}).show()}disableHelp(){const t=this._tippy;this.help=!1,null==t||t.destroy(),this.innerHTML=""}}return t([h,e("design:type",Object)],o.prototype,"help",void 0),o}function Kr(i){class o extends i{constructor(){super(...arguments),this.iconType=""}get iconSvg(){throw new Error("Not implemented yet")}get iconStyle(){const t=Pi`<style>
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
      </style>`;let e;if("square"===this.iconType)e="0.25rem";else{if("circle"!==this.iconType){if("transparent"===this.iconType)return Pi`${t}

          <style>
            #icon {
              color: var(--colors-gate, #43c000);
            }

            :host([data-disabled]) #icon {
              color: var(--colors-eel, #4b4b4b);
            }
          </style>`;throw new Error("iconType not set")}e="9999px"}return Pi`${t}

        <style>
          #icon {
            border-radius: ${e};
            color: var(--colors-snow, #ffffff);
            background-color: var(--colors-gate, #43c000);
          }

          :host([data-disabled]) #icon {
            background-color: var(--colors-eel, #4b4b4b);
          }
        </style>`}}return t([h,e("design:type",Object)],o.prototype,"iconType",void 0),o}function Zr(i){class o extends i{constructor(){super(...arguments),this.if=""}}return t([h,e("design:type",Object)],o.prototype,"if",void 0),o}function ts(t){return class extends t{toJson(){throw new Error("Not implemented yet")}}}function es(t){return class extends t{get labelStyle(){return Pi`<style>
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
      </style>`}}}function is(t){return class extends t{set targets(t){this.setAttribute("data-targets",t.sort().join())}get targets(){const t=this.getAttribute("data-targets");return null===t||""===t?[]:t.split(",").map((t=>parseInt(t))).sort()}}}function os(i){class o extends i{constructor(){super(...arguments),this.wireTop=!1,this.wireTopDisabled=!1,this.wireBottom=!1,this.wireBottomDisabled=!1}disconnectFromAll(){this.wireTop=!1,this.wireBottom=!1}get wiresStyle(){return Pi`<style>
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
      </style>`}get wiresSvg(){return Pi`<svg
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
      </svg>`}}return t([h,e("design:type",Object)],o.prototype,"wireTop",void 0),t([h,e("design:type",Object)],o.prototype,"wireTopDisabled",void 0),t([h,e("design:type",Object)],o.prototype,"wireBottom",void 0),t([h,e("design:type",Object)],o.prototype,"wireBottomDisabled",void 0),o}var ns;let rs=ns=class MeasurementGateElement extends(oi(Qr(Kr(Jr(es(Ur(ts(HTMLElement)))))))){constructor(){super(...arguments),this.iconType="transparent",this.value=-1,this.flag=""}static create({dragAndDrop:t=!1,flag:e=""}={}){const i=new ns;return i.dragAndDrop=t,i.flag=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}
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
        </div>`,this.shadowRoot)}toJson(){return""===this.flag?'"Measure"':`"Measure>${this.flag}"`}serialize(){return{type:Xe,flag:this.flag}}get iconSvg(){return Pi`
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
    `}};t([h,e("design:type",Object)],rs.prototype,"iconType",void 0),t([h,e("design:type",Object)],rs.prototype,"value",void 0),t([h,e("design:type",Object)],rs.prototype,"flag",void 0),rs=ns=t([m],rs);let ss=class QuantumSimulatorElement extends HTMLElement{constructor(){super(...arguments),this.serviceWorker="/serviceworker.js"}clearCircuit(){var t;null===(t=this.quantumCircuit)||void 0===t||t.clear()}connectedCallback(){this.circleNotation=null,this.visibleQubitCircleKets=[],this.addEventListener("circuit.load",this.registerQuantumCircuit),this.addEventListener("circuit.load",this.updateJsonUrl),this.addEventListener("dragAndDroppable.mouseenter",this.setDragAndDroppableStyleCursorGrab),this.addEventListener("dragAndDroppable.grab",this.setDragAndDroppableStyleCursorGrabbing),this.addEventListener("dragAndDroppable.grab",this.setStyleCursorGrabbing),this.addEventListener("dragAndDroppable.grab",this.prepareDraggableDrop),this.addEventListener("dragAndDroppable.ungrab",this.removeDragAndDroppableCursorStyle),this.addEventListener("dragAndDroppable.ungrab",this.setStyleCursorAuto),this.addEventListener("dragAndDroppable.ungrab",this.proxyDraggableUngrabEvent),this.addEventListener("dragAndDroppable.ungrab",this.updateJsonUrl),this.addEventListener("dragAndDroppable.enddragging",this.setStyleCursorAuto),this.addEventListener("dragAndDroppable.enddragging",this.finishEditing),this.addEventListener("dragAndDroppable.trash",this.setStyleCursorAuto),this.addEventListener("dragAndDroppable.trash",this.resizeCircuit),this.addEventListener("dragAndDroppable.trash",this.updateJsonUrl),this.addEventListener("dragAndDroppable.leave",this.run),this.addEventListener("dragAndDroppable.snapToNewDropzone",this.addNewStep),this.addEventListener("step.drop",this.resizeCircuit),this.addEventListener("step.drop",this.run),this.addEventListener("step.mouseenter",this.setStyleCursorPointerUnlessEditing),this.addEventListener("step.mouseenter",this.activateHoveredStep),this.addEventListener("step.mouseenter",this.runUnlessEditing),this.addEventListener("step.mouseleave",this.setStyleCursorAutoUnlessEditing),this.addEventListener("step.click",this.setBreakpoint),this.addEventListener("step.click",this.run),this.addEventListener("step.snap",this.run),this.addEventListener("circuit.mouseleave",this.run),this.addEventListener("circle-notation.load",this.registerCircleNotation),this.addEventListener("circle-notation.visibilityChanged",this.updateVisibleQubitCircleKets),this.addEventListener("circle-notation.visibilityChanged",this.run),this.addEventListener("run-circuit-button.load",this.registerRunCircuitButton),this.addEventListener("run-circuit-button.click",this.run),this.addEventListener("operation.popup.change",this.run),this.addEventListener("operation.update",this.updateJsonUrl),this.worker=new Worker(this.serviceWorker),this.worker.addEventListener("message",(t=>{var e,i;C.notNull(this.quantumCircuit);const o=this.quantumCircuit.activeStep,n=this.quantumCircuit.breakpoint,r=o||n;C.notNull(r);const s=this.fetchStepIndex(r),a=t.data;if("step"===a.type){const t=this.quantumCircuit.steps[a.step];for(const e in a.blochVectors){const i=t.dropzones[e].draggableElement;if(i){const t=a.blochVectors[e];i.x=t[0],i.y=t[1],i.z=t[2]}}if(a.measuredBits){const e=a.measuredBits,i=t.dropzones;for(const t in e){const o=i[t].draggableElement;o instanceof rs&&(o.value=e[t])}}for(const e of t.ifableGates)""!==e.if&&(e.disabled=!a.flags[e.if]);if(s===a.step){const t={};for(const e in a.amplitudes){const i=a.amplitudes[e];t[e]=new O(i[0],i[1])}null===(e=this.circleNotation)||void 0===e||e.setAmplitudes(t)}}else"finish"===a.type&&(null===(i=this.runCircuitButton)||void 0===i||i.enable())}))}registerQuantumCircuit(t){this.quantumCircuit=t.target}registerCircleNotation(t){this.circleNotation=t.target}registerRunCircuitButton(t){this.runCircuitButton=t.target}updateVisibleQubitCircleKets(t){const e=t.detail;C.notNull(e),this.visibleQubitCircleKets=e}runUnlessEditing(){C.notNull(this.quantumCircuit),this.quantumCircuit.editing||this.run()}run(){if(null===this.circleNotation)return;C.notNull(this.quantumCircuit);const t=this.quantumCircuit.activeStep,e=this.quantumCircuit.breakpoint,i=t||e;C.notNull(i);const o=this.fetchStepIndex(i),n=this.quantumCircuit.serializedSteps;C.need(n.length>0,"non-zero step length");const r=this.quantumCircuit.qubitCount;this.circleNotation.qubitCount=r,this.worker.postMessage({json:this.quantumCircuit.toJson(),qubitCount:r,stepIndex:o,steps:this.quantumCircuit.serializedSteps,targets:this.visibleQubitCircleKets})}setBreakpoint(t){const e=t.detail.element;for(const t of this.quantumCircuit.steps)t.breakpoint=!1;e.breakpoint=!0}activateHoveredStep(t){if(C.notNull(this.quantumCircuit),this.quantumCircuit.editing)return;const e=t.detail.element;for(const t of this.quantumCircuit.steps)t.active=!1;e.active=!0}resizeCircuit(){this.quantumCircuit.resize()}fetchStepIndex(t){const e=this.quantumCircuit.steps.indexOf(t);if(-1===e)throw new Error("CircuitStep not found");return e}setDragAndDroppableStyleCursorGrab(t){var e;const i=t.detail.element;(null===(e=this.quantumCircuit)||void 0===e?void 0:e.editing)?i.style.cursor="grabbing":i.style.cursor="grab"}setDragAndDroppableStyleCursorGrabbing(t){t.detail.element.style.cursor="grabbing"}setStyleCursorGrabbing(){document.documentElement.style.cursor="grabbing"}removeDragAndDroppableCursorStyle(t){t.detail.element.style.cursor=""}setStyleCursorAuto(){document.documentElement.style.cursor="auto"}setStyleCursorAutoUnlessEditing(){C.notNull(this.quantumCircuit),this.quantumCircuit.editing||(document.documentElement.style.cursor="auto")}setStyleCursorPointerUnlessEditing(){C.notNull(this.quantumCircuit),this.quantumCircuit.editing||(document.documentElement.style.cursor="pointer")}prepareDraggableDrop(t){t.stopPropagation();const e=t.detail.element;C.notNull(e),C.notNull(this.quantumCircuit),this.quantumCircuit.prepareDraggableDrop(),e.setSnapTargets(this.quantumCircuit.dropzones,this.quantumCircuit.wireCount)}proxyDraggableUngrabEvent(t){var e;const i=t.detail;C.notNull(i),C.notNull(i.x),C.notNull(i.y),null===(e=this.quantumCircuit)||void 0===e||e.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab",{detail:{x:i.x,y:i.y},bubbles:!1}))}finishEditing(t){var e;const i=t.detail;C.notNull(i),C.notNull(i.x),C.notNull(i.y),null===(e=this.quantumCircuit)||void 0===e||e.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:i.x,y:i.y},bubbles:!1}))}updateJsonUrl(){C.notNull(this.quantumCircuit),C.updateUrlJson(this.quantumCircuit.toJson())}addNewStep(t){const e=t,i=e.detail.element,o=e.detail.element,n=e.detail.stepIndex,r=e.detail.wireIndex;C.notNull(this.quantumCircuit);const s=this.quantumCircuit.appendCircuitStepAfter(n);s.dropzones[r].assign(i),o.updateSnapTargetInfo(s.dropzones)}};var as;t([h,e("design:type",Object)],ss.prototype,"serviceWorker",void 0),ss=t([m],ss);let cs=as=class BlochDisplayElement extends(Qr(Jr(Ur(ts(HTMLElement))))){constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}static create({dragAndDrop:t=!1}={}){const e=new as;return e.dragAndDrop=t,e}showPopup(){this.isCircuitDraggable()?this.showInspector():this.showHelp()}showInspector(){if(this.grabbed)return;if(this._tippy)return;const t=this.blochInspectorPopupContent();Ie(this,{allowHTML:!0,animation:!1,arrow:Zt+Zt,delay:0,placement:"auto",theme:"qni",onShow(e){e.setContent(t)}}).show()}blochInspectorPopupContent(){const t=document.createDocumentFragment();return $i(Pi`
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
      `,t),t}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.updateBlochVector(),this.initDragAndDrop())}disconnectedCallback(){const t=this._tippy;null==t||t.destroy()}attributeChangedCallback(t,e,i){this.body&&e!==i&&("data-draggable-source"!==t?"data-draggable-shadow"!==t?null!==i&&("data-x"===t&&(this.x=parseFloat(i)),"data-y"===t&&(this.y=parseFloat(i)),"data-z"===t&&(this.z=parseFloat(i)),this.d=this.vectorLength(),this.phi=this.calculatePhi(),this.theta=this.calculateTheta(),this.updateBlochVector()):this.body.classList.toggle("draggable-shadow"):this.body.classList.toggle("draggable-source"))}update(){this.d=this.vectorLength(),this.phi=this.calculatePhi(),this.theta=this.calculateTheta();const t=t=>Pi`<div
        class="vector-line-rect"
        style="transform: rotateY(${t}deg)"
      ></div>`,e=(t,e)=>Pi`<div
        class="vector-end-circle"
        style="transform: rotate${e}(${t}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`;$i(Pi`${this.sizeableStyle} ${this.dragAndDroppableStyle}

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
        </div>`,this.shadowRoot)}toJson(){return'"Bloch"'}serialize(){return{type:Ge}}updateBlochVector(){const t=this.vectorEndCircles[0].offsetWidth;this.vectorLine.style.height=`calc(${100*this.d/2}% - ${t/2}px)`,this.vectorEnd.style.bottom=`calc(50% + ${100*this.d/2}% + ${t/2}px)`,0!==this.d&&(this.vector.style.transform=`rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`)}get d(){const t=this.getAttribute("data-d");if(null===t)throw new Error("data-d not set");return parseFloat(t)}set d(t){var e;this.setAttribute("data-d",t.toString()),null===(e=this.body)||void 0===e||e.setAttribute("data-d",t.toString())}vectorLength(){return parseFloat(Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z).toFixed(4))}set phi(t){this.setAttribute("data-phi",t.toString())}get phi(){const t=this.getAttribute("data-phi");if(null===t)throw new Error("data-phi not set");return parseFloat(t)}calculatePhi(){return 180*Math.atan2(this.y,this.x)/Math.PI}set theta(t){this.setAttribute("data-theta",t.toString())}get theta(){const t=this.getAttribute("data-theta");if(null===t)throw new Error("data-theta not set");return parseFloat(t)}calculateTheta(){return 180*Math.max(0,Math.PI/2-Math.atan2(this.z,Math.sqrt(this.y*this.y+this.x*this.x)))/Math.PI}forceSigned(t,e=4){return(t>=0?"+":"")+t.toFixed(e)}isCircuitDraggable(){return null!==this.parentElement&&"CIRCUIT-DROPZONE"===this.parentElement.tagName}};t([d,e("design:type",HTMLElement)],cs.prototype,"body",void 0),t([d,e("design:type",HTMLElement)],cs.prototype,"vectorLine",void 0),t([d,e("design:type",HTMLElement)],cs.prototype,"vectorEnd",void 0),t([d,e("design:type",HTMLElement)],cs.prototype,"vector",void 0),t([p,e("design:type",Array)],cs.prototype,"vectorEndCircles",void 0),t([h,e("design:type",Object)],cs.prototype,"x",void 0),t([h,e("design:type",Object)],cs.prototype,"y",void 0),t([h,e("design:type",Object)],cs.prototype,"z",void 0),cs=as=t([m],cs);let ls=class CircuitBlockElement extends HTMLElement{constructor(){super(...arguments),this.comment="",this.finalized=!1}finalize(){this.finalized=!0}connectedCallback(){this.attachShadow({mode:"open"}),this.update()}update(){$i(Pi`<style>
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
        </div>`,this.shadowRoot)}};t([h,e("design:type",Object)],ls.prototype,"comment",void 0),t([h,e("design:type",Object)],ls.prototype,"finalized",void 0),ls=t([m],ls);let ds=class CircuitStepElement extends HTMLElement{constructor(){super(...arguments),this.active=!1,this.snap=!1,this.breakpoint=!1,this.keep=!1,this.shadow=!1}get isInBlock(){return null!==this.closest("circuit-block")}get block(){return this.closest("circuit-block")}get wireCount(){return this.dropzones.length}get qubitCount(){let t=this.wireCount;const e=this.dropzones;for(let i=t-1;i>=0&&!e[i].occupied;i--)t--;return t}get dropzones(){return this.elements("circuit-dropzone")}get lastDropzone(){return this.dropzones[this.wireCount-1]}get isEmpty(){return!this.keep&&this.dropzones.every((t=>!t.occupied))}dropzone(t){const e=this.dropzones[t];if(void 0===e)throw new Error("Dropzone not found");return e}dropzoneIndex(t){const e=this.dropzones.indexOf(t);return-1===e?null:e}bit(t){const e=t.parentElement;if(null===e)throw new Error("Dropzone not found");return this.dropzones.indexOf(e)}get index(){const t=this.quantumCircuitElement();if(null===t)return null;const e=t.steps.indexOf(this);if(-1===e)throw new Error("circuitStep not found");return e}prev(){const t=this.index;if(null===t||0===t)return null;const e=this.quantumCircuitElement();if(null===e)return null;return e.steps[t-1]||null}next(){const t=this.index;if(null===t)return null;const e=this.quantumCircuitElement();if(null===e)return null;return e.steps[t+1]||null}activate(){this.dispatchEvent(new CustomEvent("step.click",{detail:{element:this},bubbles:!0}))}appendDropzone(){const t=document.createElement("circuit-dropzone");return this.append(t),t}appendOperation(t){const e=document.createElement("circuit-dropzone");e.append(t),e.occupied=!0,this.append(e)}remove(){var t;null===(t=this.parentElement)||void 0===t||t.removeChild(this)}quantumCircuitElement(){return this.closest("quantum-circuit")}serialize(){return this.dropzones.map((t=>t.serialize()))}toJson(){const t=this.dropzones.map((t=>t.toJson()));for(;t.length>0&&"1"===t[t.length-1];)t.pop();return 0===t.length?"[1]":`[${t.join(",")}]`}attributeChangedCallback(t,e,i){if(e!==i&&"data-shadow"===t&&null===i)for(const t of this.dropzones)t.shadow=!1}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.slotEl.addEventListener("slotchange",this.handleSlotChange.bind(this)),this.updateConnections(),this.updateWires(),this.dispatchStepLoadEvent(),this.addEventListener("mouseenter",this.dispatchStepMouseenterEvent),this.addEventListener("mouseleave",this.dispatchStepMouseleaveEvent),this.addEventListener("dropzone.snap",this.dispatchStepMouseenterEvent),this.addEventListener("dropzone.snap",this.dispatchStepSnapEvent),this.addEventListener("dropzone.unsnap",this.dispatchStepUnsnapEvent),this.addEventListener("dropzone.grab",this.dispatchStepSnapEvent),this.addEventListener("dropzone.drop",this.dispatchStepDropEvent),this.addEventListener("dragAndDroppable.enddragging",this.unsnap),this.addEventListener("click",this.activate)}dispatchStepLoadEvent(){this.dispatchEvent(new CustomEvent("step.load",{detail:{element:this},bubbles:!0}))}dispatchStepMouseenterEvent(){this.dispatchEvent(new CustomEvent("step.mouseenter",{detail:{element:this},bubbles:!0}))}dispatchStepMouseleaveEvent(){this.dispatchEvent(new CustomEvent("step.mouseleave",{detail:{element:this},bubbles:!0}))}dispatchStepSnapEvent(t){const e=t.detail.element;this.dispatchEvent(new CustomEvent("step.snap",{detail:{step:this,dropzone:e},bubbles:!0}))}dispatchStepUnsnapEvent(t){const e=t.detail.element;this.unsnap(),this.dispatchEvent(new CustomEvent("step.unsnap",{detail:{step:this,dropzone:e},bubbles:!0}))}dispatchStepDropEvent(){this.dispatchEvent(new CustomEvent("step.drop",{detail:{element:this},bubbles:!0}))}unsnap(){this.snap=!1}update(){$i(Pi`<style>
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
            margin-right: ${Fr.size.xl/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="3"]:nth-of-type(n + 2)) {
            margin-right: ${Fr.size.lg/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="4"]:nth-of-type(n + 2)) {
            margin-right: ${Fr.size.base/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="5"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="6"]:nth-of-type(n + 2)) {
            margin-right: ${Fr.size.sm/2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="7"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="8"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="9"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="10"]:nth-of-type(n + 2)) {
            margin-right: ${Fr.size.xs/2}rem;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: column;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: ${Fr.size.base/2}rem !important;
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
        </div>`,this.shadowRoot)}handleSlotChange(){if(this.shadow)for(const t of this.dropzones)t.shadow=!0;this.updateConnections(),this.updateWires();for(const t of this.dropzones)t.wireCount=this.wireCount}updateConnections(){for(const e of this.dropzones){e.wireTop=!1,e.wireBottom=!1;const i=e.draggableElement;"object"==typeof(t=i)&&null!==t&&"boolean"==typeof t.wireTop&&"boolean"==typeof t.wireBottom&&i.disconnectFromAll()}var t;if(2!==this.swapGates.length)for(const t of this.swapGates)t.disable();else{const t=this.swapGates,e=t.map((t=>this.bit(t)));for(const i of t)i.enable(),i.targets=e,i.wireTop=t.some((t=>this.bit(t)<this.bit(i))),i.wireBottom=t.some((t=>this.bit(t)>this.bit(i)));for(const t of this.dropzones){if(t.draggable)continue;const i=Math.min(...e),o=Math.max(...e);i<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<o&&(t.wireTop=!0,t.wireBottom=!0)}}for(const t of this.phaseGates){if(""===t.phi)continue;const e=this.phaseGates.filter((e=>e.phi===t.phi));for(const t of e)t.targets=e.map((t=>this.bit(t))),t.wireTop=e.some((e=>this.bit(e)<this.bit(t))),t.wireBottom=e.some((e=>this.bit(e)>this.bit(t)));for(const t of this.dropzones){if(t.draggable)continue;const i=e.map((t=>this.bit(t))),o=Math.min(...i),n=Math.max(...i);o<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<n&&(t.wireTop=!0,t.wireBottom=!0)}}if(0!==this.controlGates.length){if(1===this.controlGates.length&&0===this.controllableGates.length){const t=this.controlGates[0];return t.disable(),void(t.targets=[])}if(0===this.controllableGates.length)for(const t of this.controlGates)t.enable(),t.targets=this.controlBits,t.wireTop=this.controlGates.some((e=>this.bit(t)>this.bit(e))),t.wireBottom=this.controlGates.some((e=>this.bit(t)<this.bit(e)));else{for(const t of this.controllableGates)t.controls=this.controlBits,t.wireTop=this.controlGates.some((e=>this.bit(e)<this.bit(t)))||this.controllableGates.some((e=>this.bit(e)<this.bit(t))),t.wireBottom=this.controlGates.some((e=>this.bit(e)>this.bit(t)))||this.controllableGates.some((e=>this.bit(e)>this.bit(t)));for(const t of this.controlGates)t.enable(),t.targets=this.controllableBits,t.wireTop=this.controllableGates.some((e=>this.bit(t)>this.bit(e)))||this.controlGates.some((e=>this.bit(t)>this.bit(e))),t.wireBottom=this.controllableGates.some((e=>this.bit(t)<this.bit(e)))||this.controlGates.some((e=>this.bit(t)<this.bit(e)))}for(const t of this.dropzones){if(t.draggable)continue;const e=this.controlGates.map((t=>this.bit(t))).concat(this.controllableGates.map((t=>this.bit(t)))),i=e.sort()[0],o=e.sort().slice(-1)[0];i<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<o&&(t.wireTop=!0,t.wireBottom=!0)}}else for(const t of this.controllableGates)t.controls=[]}updateWireOfDropzone(t){const e=this.dropzones[t];C.notNull(e),e.updateWires()}updateWires(){for(const t of this.dropzones)t.updateWires()}get controlGates(){return this.snappedDraggables("control-gate")}get controlBits(){return this.controlGates.map((t=>this.bit(t)))}get controllableGates(){return this.snappedDraggables("h-gate,x-gate,y-gate,z-gate,phase-gate,rnot-gate,rx-gate,ry-gate,rz-gate,swap-gate")}get ifableGates(){return this.snappedDraggables("h-gate,x-gate,rnot-gate")}get controllableBits(){return this.controllableGates.map((t=>this.bit(t)))}get phaseGates(){return this.snappedDraggables("phase-gate")}get swapGates(){return this.snappedDraggables("swap-gate")}elements(t){return Array.from(this.querySelectorAll(t))}snappedDraggables(t){return this.elements(t).filter((t=>t.snapped))}};var ps;t([h,e("design:type",Object)],ds.prototype,"active",void 0),t([h,e("design:type",Object)],ds.prototype,"snap",void 0),t([h,e("design:type",Object)],ds.prototype,"breakpoint",void 0),t([h,e("design:type",Object)],ds.prototype,"keep",void 0),t([h,e("design:type",Object)],ds.prototype,"shadow",void 0),t([d,e("design:type",HTMLSlotElement)],ds.prototype,"slotEl",void 0),ds=t([m],ds);let us=ps=class ControlGateElement extends(Qr(is(os(Li(Kr(Jr(Ur(ts(HTMLElement))))))))){constructor(){super(...arguments),this.iconType="transparent"}static create({dragAndDrop:t=!1}={}){const e=new ps;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"•"'}serialize(){return{type:"•",targets:this.targets}}get iconSvg(){return Pi`
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
    `}};var hs;t([h,e("design:type",Object)],us.prototype,"iconType",void 0),us=ps=t([m],us);let fs=hs=class HGateElement extends(oi(Qr(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const i=new hs;return i.dragAndDrop=t,i.if=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"H<${this.if}"`:'"H"'}serialize(){return{type:"H",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L17 35M17 24L31 24M31 13L31 35" />
    </svg>`}};var gs;t([h,e("design:type",Object)],fs.prototype,"iconType",void 0),fs=hs=t([m],fs);let ms=gs=class PhaseGateElement extends(oi(Qr(is(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="circle",this.phi=""}static create({phi:t="π/2",dragAndDrop:e=!1}={}){const i=new gs;return i.phi=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.phi?'"P"':`"P(${this.phi.replace("/","_")})"`}serialize(){return{type:"P",phi:this.phi.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
    </svg>`}};var bs;t([h,e("design:type",Object)],ms.prototype,"iconType",void 0),t([h,e("design:type",Object)],ms.prototype,"phi",void 0),ms=gs=t([m],ms);let vs=bs=class RnotGateElement extends(oi(Qr(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const i=new bs;return i.dragAndDrop=t,i.if=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"X^½<${this.if}"`:'"X^½"'}serialize(){return{type:Ue,controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg
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
    </svg>`}};var ws;t([h,e("design:type",Object)],vs.prototype,"iconType",void 0),vs=bs=t([m],vs);let ys=ws=class RxGateElement extends(oi(Qr(is(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const i=new ws;return i.theta=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Rx"':`"Rx(${this.theta.replace("/","_")})"`}serialize(){return{type:He,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998L34.609 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}};var xs;t([h,e("design:type",Object)],ys.prototype,"iconType",void 0),t([h,e("design:type",Object)],ys.prototype,"theta",void 0),ys=ws=t([m],ys);let Es=xs=class RyGateElement extends(oi(Qr(is(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const i=new xs;return i.theta=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Ry"':`"Ry(${this.theta.replace("/","_")})"`}serialize(){return{type:Ve,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002l-4.967 10.927M25.03 13.002l4.613 10.927m0 0L29.676 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}};var Ss;t([h,e("design:type",Object)],Es.prototype,"iconType",void 0),t([h,e("design:type",Object)],Es.prototype,"theta",void 0),Es=xs=t([m],Es);let zs=Ss=class RzGateElement extends(oi(Qr(is(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const i=new Ss;return i.theta=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Rz"':`"Rz(${this.theta.replace("/","_")})"`}serialize(){return{type:Be,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:this.if}}get iconSvg(){return Pi`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}};var Cs;t([h,e("design:type",Object)],zs.prototype,"iconType",void 0),t([h,e("design:type",Object)],zs.prototype,"theta",void 0),zs=Ss=t([m],zs);let qs=Cs=class SwapGateElement extends(Qr(is(ni(os(Li(Kr(Jr(Ur(ts(HTMLElement)))))))))){constructor(){super(...arguments),this.iconType="transparent"}static create({dragAndDrop:t=!1}={}){const e=new Cs;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:swap-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Swap"'}serialize(){const t=this.targets;if(2!==t.length&&0!==t.length)throw new Error(`Invalid swap targets: ${this.targets.toString()}`);return{type:We,controls:this.controls,targets:t}}get iconSvg(){return Pi`<svg
      id="icon"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>`}};var As;t([h,e("design:type",Object)],qs.prototype,"iconType",void 0),qs=Cs=t([m],qs);let _s=As=class WriteGateElement extends(Qr(Kr(Jr(Ur(ts(HTMLElement)))))){constructor(){super(...arguments),this.iconType="transparent",this.value="0"}static create(t,{dragAndDrop:e=!1}={}){const i=new As;return i.value=t,i.dragAndDrop=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$i(Pi`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}

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
        </div>`,this.shadowRoot)}toJson(){return`"|${this.value}>"`}serialize(){if("0"!==this.value&&"1"!==this.value)throw new Error(`Invalid write value: ${this.value}`);return{type:"Write",value:parseInt(this.value)}}get iconSvg(){return Pi`<svg
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
    </svg>`}};var Ms;t([h,e("design:type",Object)],_s.prototype,"iconType",void 0),t([h,e("design:type",Object)],_s.prototype,"value",void 0),_s=As=t([m],_s);let Ds=Ms=class XGateElement extends(oi(Qr(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="circle"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const i=new Ms;return i.dragAndDrop=t,i.if=e,i}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"X<${this.if}"`:'"X"'}serialize(){return{type:"X",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg
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
    </svg>`}};var Os;t([h,e("design:type",Object)],Ds.prototype,"iconType",void 0),Ds=Ms=t([m],Ds);let ks=Os=class YGateElement extends(Qr(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1}={}){const e=new Os;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:y-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Y"'}serialize(){return{type:"Y",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L24 24L31 13M24 24L24 35" />
    </svg>`}};var Ts;t([h,e("design:type",Object)],ks.prototype,"iconType",void 0),ks=Os=t([m],ks);let Ps=Ts=class ZGateElement extends(Qr(ni(os(es(Zr(Li(Kr(Jr(Ur(ts(HTMLElement))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1}={}){const e=new Ts;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$i(Pi`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:z-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Z"'}serialize(){return{type:"Z",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Pi`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L31 13L17 35L31 35" />
    </svg>`}};t([h,e("design:type",Object)],Ps.prototype,"iconType",void 0),Ps=Ts=t([m],Ps);let $s=class QuantumCircuitElement extends HTMLElement{constructor(){super(...arguments),this.json="",this.updateUrl=!1,this.minWireCount=1,this.maxWireCount=10,this.wireCount=1,this.minStepCount=1,this.interactive=!1,this.editing=!1,this.qubitCount=1,this.title="",this.breakpointStepIndex=0}get steps(){return Array.from(this.querySelectorAll("circuit-step"))}get breakpoint(){for(const t of this.steps)if(t.breakpoint)return t;return this.setBreakpoint(this.breakpointStepIndex),this.steps[this.breakpointStepIndex]}get activeStep(){for(const t of this.steps)if(t.active)return t;return null}get snappedStep(){for(const t of this.steps)if(t.snap)return t;return null}get serializedSteps(){const t=this.qubitCount;return this.steps.map((e=>e.serialize().slice(0,t)))}get emptySteps(){return this.steps.filter((t=>t.isEmpty))}get nonEmptySteps(){return this.steps.filter((t=>!t.isEmpty))}get largestStep(){let t=null,e=0;for(const i of this.steps)i.wireCount>0&&i.wireCount>e&&(t=i,e=i.wireCount);return t}get dropzones(){return Array.from(this.querySelectorAll("circuit-dropzone"))}get freeDropzones(){return this.dropzones.filter((t=>!t.occupied))}step(t){const e=this.steps[t];if(void 0===e)throw new Error(`step ${t} does not exist.`);return e}appendStep(){const t=new ds,e=this.blocks.slice(-1)[0]||null;return null===e||e.finalized?this.append(t):e.append(t),t}i(){return this.appendStep().keep=!0,this.resize(),this}h(...t){return this.applyOperation(new fs,...t),this.resize(),this}x(...t){return this.applyOperation(new Ds,...t),this.resize(),this}y(...t){return this.applyOperation(new ks,...t),this.resize(),this}z(...t){return this.applyOperation(new Ps,...t),this.resize(),this}phase(t,...e){return this.applyOperation(ms.create({phi:t.toString()}),...e),this.resize(),this}rnot(...t){return this.applyOperation(new vs,...t),this.resize(),this}rx(t,...e){return this.applyOperation(ys.create({theta:t.toString()}),...e),this.resize(),this}ry(t,...e){return this.applyOperation(Es.create({theta:t.toString()}),...e),this.resize(),this}rz(t,...e){return this.applyOperation(zs.create({theta:t.toString()}),...e),this.resize(),this}control(...t){return this.applyOperation(new us,...t),this.resize(),this}cnot(t,e){this.validateQubits(t,e);const i=this.appendStep(),o=Math.max(t,e)+1;for(let t=0;t<o;t++)i.appendDropzone();return i.dropzones[t].assign(new us),i.dropzones[e].assign(new Ds),this.resize(),this}ccnot(t,e,i){this.validateQubits(t,e,i);const o=this.appendStep(),n=Math.max(t,e,i)+1;for(let t=0;t<n;t++)o.appendDropzone();return o.dropzones[t].assign(new us),o.dropzones[e].assign(new us),o.dropzones[i].assign(new Ds),this.resize(),this}swap(t,e){return this.applyOperation(new qs,t,e),this.resize(),this}bloch(...t){return this.applyOperation(new cs,...t),this.resize(),this}write(t,...e){return this.applyOperation(_s.create(t),...e),this.resize(),this}measure(...t){return this.applyOperation(new rs,...t),this.resize(),this}block(t,e){const i=new ls;return i.comment=t,i.setAttribute("data-targets","quantum-circuit.blocks"),this.append(i),e(this),i.finalize(),this}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.loadFromJson(),this.updateAllSteps(),this.updateQubitCount(),this.updateWireCount(),this.addEventListener("dragAndDroppable.ungrab",(()=>{this.editing=!1})),this.addEventListener("dragAndDroppable.ungrab",this.resize),this.addEventListener("dragAndDroppable.ungrab",this.enableDraggablesHover),this.addEventListener("dragAndDroppable.ungrab",this.dispatchStepMouseenterEvent),this.addEventListener("dragAndDroppable.enddragging",(()=>{this.editing=!1})),this.addEventListener("dragAndDroppable.enddragging",this.resize),this.addEventListener("dragAndDroppable.enddragging",this.enableDraggablesHover),this.addEventListener("dragAndDroppable.enddragging",this.dispatchStepMouseenterEvent),this.addEventListener("dragAndDroppable.trash",(()=>{this.editing=!1})),this.addEventListener("step.snap",this.snapStep),this.addEventListener("step.snap",this.updateStepConnections),this.addEventListener("step.snap",this.updateWires),this.addEventListener("step.snap",this.updateQubitCount),this.addEventListener("step.unsnap",this.unsnapStep),this.addEventListener("step.unsnap",this.updateStepConnections),this.addEventListener("step.unsnap",this.updateWires),this.addEventListener("step.unsnap",this.updateQubitCount),this.addEventListener("mouseleave",this.dispatchCircuitMouseLeaveEvent),this.dispatchEvent(new Event("circuit.load",{bubbles:!0}))}updateQubitCount(){const t=this.steps;if(0===t.length)return void(this.qubitCount=1);const e=Math.max(...t.map((t=>t.qubitCount)));this.qubitCount=0!==e?e:1}updateWireCount(){const t=this.steps;if(0===t.length)return void(this.wireCount=this.minWireCount);if(0===Math.max(...t.map((t=>t.qubitCount))))return void(this.wireCount=this.minWireCount);const e=t[0];C.notNull(e);const i=e.wireCount;this.wireCount=i>this.minWireCount?i:this.minWireCount}dispatchStepMouseenterEvent(t){const e=t.detail.x,i=t.detail.y,o=document.elementFromPoint(e,i),n=null==o?void 0:o.closest("circuit-step");null==n||n.dispatchStepMouseenterEvent()}dispatchCircuitMouseLeaveEvent(){for(const t of this.steps)t.active=!1;this.dispatchEvent(new Event("circuit.mouseleave",{bubbles:!0}))}setBreakpoint(t){const e=this.steps[t];this.breakpointStepIndex=t;for(const t of this.steps)t.breakpoint=!1;e.breakpoint=!0}snapStep(t){if(!this.interactive)return;const e=t.detail.step;for(const t of this.steps)this.editing&&(t.active=!1),t.snap=!1;this.editing&&(e.active=!0),e.snap=!0}unsnapStep(t){if(!this.interactive)return;const e=t.detail.step;this.editing&&(e.active=!1),e.snap=!1}update(){$i(Pi`<style>
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
          <slot data-target="quantum-circuit.slotEl"></slot>
        </div>`,this.shadowRoot)}applyOperation(t,...e){this.validateQubits(...e);const i=this.appendStep(),o=Math.max(...e)+1;for(let t=0;t<o;t++)i.appendDropzone();for(const o of e){const e=t.cloneNode();e instanceof ms&&(e.phi=t.phi),e instanceof ys&&(e.theta=t.theta),e instanceof Es&&(e.theta=t.theta),e instanceof zs&&(e.theta=t.theta),e instanceof _s&&(e.value=t.value),i.dropzones[o].assign(e)}}validateQubits(...t){if(t.some((t=>t<0)))throw new Error("The index of the qubit must be greater than or equal to 0.")}loadFromJson(){let t,e=null;if(t=this.updateUrl?C.urlJson:this.json,""===t||"new"===t)return void(this.updateUrl&&this.resize());const i=JSON.parse(t);this.title=(i.title||"").trim();for(const t of i.cols){const i=this.appendStep();for(const o of t){switch(!0){case/^\|0>$/.test(o):i.appendOperation(_s.create("0",{dragAndDrop:this.updateUrl}));break;case/^\|1>$/.test(o):i.appendOperation(_s.create("1",{dragAndDrop:this.updateUrl}));break;case/^H$/.test(o):i.appendOperation(fs.create({dragAndDrop:this.updateUrl}));break;case/^H<(.+)$/.test(o):i.appendOperation(fs.create({dragAndDrop:this.updateUrl,ifVar:RegExp.$1.trim()}));break;case/^X$/.test(o):i.appendOperation(Ds.create({dragAndDrop:this.updateUrl}));break;case/^X<(.+)$/.test(o):i.appendOperation(Ds.create({dragAndDrop:this.updateUrl,ifVar:RegExp.$1.trim()}));break;case/^Y$/.test(o):i.appendOperation(ks.create({dragAndDrop:this.updateUrl}));break;case/^Z$/.test(o):i.appendOperation(Ps.create({dragAndDrop:this.updateUrl}));break;case/^P$/.test(o):i.appendOperation(ms.create({dragAndDrop:this.updateUrl}));break;case/^P\((.+)\)$/.test(o):i.appendOperation(ms.create({phi:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^X\^½$/.test(o):{const t=new vs;t.dragAndDrop=this.updateUrl,i.appendOperation(t);break}case/^X\^½<(.+)$/.test(o):{const t=new vs;t.dragAndDrop=this.updateUrl,t.if=RegExp.$1.trim(),i.appendOperation(t);break}case/^Rx$/.test(o):i.appendOperation(ys.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Rx\((.+)\)$/.test(o):i.appendOperation(ys.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Ry$/.test(o):i.appendOperation(Es.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Ry\((.+)\)$/.test(o):i.appendOperation(Es.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Rz$/.test(o):i.appendOperation(zs.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Rz\((.+)\)$/.test(o):i.appendOperation(zs.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Swap$/.test(o):i.appendOperation(qs.create({dragAndDrop:this.updateUrl}));break;case/^•$/.test(o):i.appendOperation(us.create({dragAndDrop:this.updateUrl}));break;case/^Bloch$/.test(o):i.appendOperation(cs.create({dragAndDrop:this.updateUrl}));break;case/^Measure$/.test(o):i.appendOperation(rs.create({dragAndDrop:this.updateUrl}));break;case/^Measure>(.+)$/.test(o):i.appendOperation(rs.create({dragAndDrop:this.updateUrl,flag:RegExp.$1.trim()}));break;case/^[[{](.+)$/.test(o):{const t=RegExp.$1;i.remove(),e=new ls,e.comment=t,e.setAttribute("data-targets","quantum-circuit.blocks"),this.append(e);break}case/^[\]}]$/.test(o):i.remove(),e.finalize();break;default:if(1!==o)throw new Error(`Unknown instruction: ${o}`);0===i.qubitCount?i.keep=!0:i.keep=!1,i.appendDropzone()}i.updateConnections()}}this.resize()}updateStepConnections(t){t.detail.step.updateConnections()}updateWires(t){const e=t.detail.dropzone.index();C.notNull(e);let i=!1;for(const t of this.steps){const o=t.dropzones[e];C.notNull(o),o.inputWireQuantum=i,"write-gate"===o.draggableTagName?(o.inputWireQuantum=i,o.outputWireQuantum=!0,i=!0):"measurement-gate"===o.draggableTagName?(o.inputWireQuantum=i,o.outputWireQuantum=!1,i=!1):(o.inputWireQuantum=i,o.outputWireQuantum=i)}}updateAllSteps(){for(const t of this.steps)t.updateWires(),t.updateConnections()}prepareDraggableDrop(){this.interactive=!0,this.editing=!0,this.disableDraggablesOnCircuitHover(),this.appendWire()}disableDraggablesOnCircuitHover(){for(const t of this.draggablesOnCircuit)t.hoverable=!1}enableDraggablesHover(){for(const t of this.draggables)t.hoverable=!0}get draggables(){return Array.from(this.querySelectorAll("[data-drag-and-drop]"))}get draggablesOnCircuit(){return Array.from(this.querySelectorAll("[data-drag-and-drop]:not([data-grabbed])"))}appendWire(){if(!(this.qubitCount>=this.maxWireCount)){this.wireCount+=1;for(const t of this.steps)t.appendDropzone()}}appendCircuitStepAfter(t){const e=new ds;e.shadow=!0;for(let t=0;t<this.wireCount;t++)e.appendDropzone();if(-1===t)this.prepend(e);else{const i=this.steps[t],o=i.parentElement;C.notNull(o),o.insertBefore(e,i.nextSibling)}return e}resize(){this.removeEmptySteps(),this.appendMinimumSteps(),this.removeLastEmptyWires()}removeEmptySteps(){for(const t of this.emptySteps)t.remove();for(const t of this.steps)t.shadow=!1}appendMinimumSteps(){const t=this.minStepCount-this.steps.length;for(let e=0;e<t;e++)this.appendStep();const e=this.largestStep&&this.largestStep.wireCount>this.minWireCount?this.largestStep.wireCount:this.minWireCount;for(const t of this.steps){const i=e-t.wireCount;for(let e=0;e<i;e++)t.appendDropzone()}}removeLastEmptyWires(){for(;this.steps.every((t=>t.wireCount>this.minWireCount&&!t.lastDropzone.occupied));)for(const t of this.steps)t.lastDropzone.remove();const t=this.steps[0];C.notNull(t),this.wireCount=t.wireCount}clear(){C.updateUrlJson('{"cols":[]}'),location.reload()}toJson(){let t=!1;const e=[];for(const i of this.nonEmptySteps){if(i.isInBlock){if(!t){const o=i.block;e.push(`["[${o.comment}"]`),t=!0}}else t&&(e.push('["]"]'),t=!1);e.push(i.toJson())}return t&&e.push('["]"]'),""!==this.title?`{"cols":[${e.join(",")}],"title":"${this.title}"}`:`{"cols":[${e.join(",")}]}`}};t([h,e("design:type",Object)],$s.prototype,"json",void 0),t([h,e("design:type",Object)],$s.prototype,"updateUrl",void 0),t([h,e("design:type",Object)],$s.prototype,"minWireCount",void 0),t([h,e("design:type",Object)],$s.prototype,"maxWireCount",void 0),t([h,e("design:type",Object)],$s.prototype,"wireCount",void 0),t([h,e("design:type",Object)],$s.prototype,"minStepCount",void 0),t([h,e("design:type",Object)],$s.prototype,"interactive",void 0),t([h,e("design:type",Object)],$s.prototype,"editing",void 0),t([h,e("design:type",Object)],$s.prototype,"qubitCount",void 0),t([h,e("design:type",Object)],$s.prototype,"title",void 0),t([d,e("design:type",HTMLSlotElement)],$s.prototype,"slotEl",void 0),t([p,e("design:type",Array)],$s.prototype,"blocks",void 0),$s=t([m],$s);let Ls=class CircleNotationElement extends HTMLElement{constructor(){super(...arguments),this.qubitCount=1,this.size="",this.magnitudes="1.0",this.phases="",this.multiQubits=!1,this.showKets=!1}setAmplitudes(t){const e=this.qubitCircles;for(const[i,o]of Object.entries(t)){const t=e[parseInt(i)];t.setAttribute("data-amplitude-real",o.real.toString()),t.setAttribute("data-amplitude-imag",o.imag.toString());const n=o.abs();if(this.setRoundedMagnitude(t,n),0===n)continue;const r=o.phase()/Math.PI*180;this.setRoundedPhase(t,r)}}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initQubitCirclePopup(this.qubitCircles),this.multiQubits&&(this.startQubitCircleVisibilityObserver(),this.dispatchLoadEvent()))}dispatchLoadEvent(){this.dispatchEvent(new Event("circle-notation.load",{bubbles:!0}))}attributeChangedCallback(t,e,i){null!==this.shadowRoot&&e!==i&&"data-qubit-count"===t&&this.dispatchVisibilityChangedEvent()}startQubitCircleVisibilityObserver(){const t=new IntersectionObserver((t=>{for(const e of t){const t=e.target;e.intersectionRatio>=.2?(t.setAttribute("data-targets","circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"),this.dispatchVisibilityChangedEvent()):0===e.intersectionRatio&&t.setAttribute("data-targets","circle-notation.qubitCircleGroups")}}),{root:this,threshold:[0,.2]});for(const e of this.qubitCircleGroups)t.observe(e)}dispatchVisibilityChangedEvent(){this.dispatchEvent(new CustomEvent("circle-notation.visibilityChanged",{detail:this.visibleQubitCircleKets,bubbles:!0}))}get visibleQubitCircleKets(){const t=Math.pow(2,this.qubitCount);return this.visibleQubitCircles.map((t=>parseInt(t.getAttribute("data-ket")))).filter((e=>e<t))}get visibleQubitCircles(){const t=this.visibleQubitCircleGroups.map((t=>Array.from(t.querySelectorAll(".qubit-circle"))));return[].concat(...t)}update(){$i(Pi`<style>
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

        <div id="body">${this.qubitCirclesHtml}</div>`,this.shadowRoot);for(const[t,e]of this.magnitudes.split(",").entries())this.setRoundedMagnitude(this.qubitCircles[t],parseFloat(e));for(const[t,e]of this.phases.split(",").entries()){const i=this.qubitCircles[t],o=e?parseFloat(e):0;this.setRoundedPhase(i,o);i.querySelector(".qubit-circle__phase").style.transform=`rotate(${-o}deg)`}}setRoundedMagnitude(t,e){if(null===t)return;if(void 0===t)return;let i=Math.round(100*e);i=i<10?0===i?0:10:10*Math.round(i/10),i/=100,t.setAttribute("data-magnitude",e.toString()),t.setAttribute("data-rounded-magnitude",i.toString())}setRoundedPhase(t,e){if(null===t)return;if(void 0===t)return;let i=10*Math.round(e/10);i<0&&(i=360+i),t.setAttribute("data-phase",e.toString()),t.setAttribute("data-rounded-phase",i.toString())}get qubitCirclesHtml(){return this.multiQubits?this.stateVectorHtml(10):Pi`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`}qubitCircleHtml(t){return Pi`<div
      class="qubit-circle"
      data-ket="${t}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`}stateVectorHtml(t){let e=Pi``;const i=this.qubitCircleGroup([...Array(Math.pow(2,t)).keys()],(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t)))))))))))),256);for(const t of i)e=Pi`${e} ${t}`;return e}qubitCircleGroup(t,e,i=t.length/2){return((t,e=1)=>t.reduce(((i,o,n)=>n%e?i:[...i,t.slice(n,n+e)]),[]))(t,i).map((t=>{let o=Pi``;if(e)for(const i of e(t))o=Pi`${o} ${i}`;else for(const e of t)o=Pi`${o} ${this.qubitCircleHtml(e)}`;return 64===i?Pi`<div
          class="qubit-circle-group--size${i}"
          data-targets="circle-notation.qubitCircleGroups"
        >
          ${o}
        </div>`:Pi`<div class="qubit-circle-group--size${i}">${o}</div>`}))}initQubitCirclePopup(t){const e=Ie(t);Re(e,{allowHTML:!0,animation:!1,arrow:Zt+Zt,delay:0,theme:"qni"})}setPopupContent(t){if(null===this.popupEl)return;const e=t.target,i=this.ketDecimal(e),o=e.getAttribute("data-amplitude-real"),n=e.getAttribute("data-amplitude-imag"),r=e.getAttribute("data-magnitude"),s=e.getAttribute("data-phase");let a,c;a=null===o||null===n?O.ZERO:new O(parseFloat(o),parseFloat(n)),c=r&&0===parseFloat(r)?0:s?parseFloat(s):0,this.setQubitCirclePopupContent(this.popupEl.content,e,i,a,r?parseFloat(r):0,c,this.qubitCount)}setQubitCirclePopupContent(t,e,i,o,n,r,s){e._tippy.setContent(this.popupContent(t,i,o,n,r,s))}popupContent(t,e,i,o,n,r){const s=t.querySelector(".circle-notation-popup__ket-binary"),a=t.querySelector(".circle-notation-popup__ket-decimal"),c=t.querySelector(".circle-notation-popup__amplitude-real"),l=t.querySelector(".circle-notation-popup__amplitude-imag"),d=t.querySelector(".circle-notation-popup__probability"),p=t.querySelector(".circle-notation-popup__phase");s&&(s.textContent=e.toString(2).padStart(r,"0")),a&&(a.textContent=e.toString()),c&&(c.textContent=this.forceSigned(i.real,5)),l&&(l.textContent=`${this.forceSigned(i.imag,5)}i`),d&&(d.textContent=`${this.forceSigned(o*o*100,4)}%`),p&&(p.textContent=`${this.forceSigned(n,2)}°`);const u=document.createElement("div");return u.appendChild(t.cloneNode(!0)),u.innerHTML}get popupEl(){return document.getElementById("circle-notation-popup")}forceSigned(t,e){return(t>=0?"+":"")+t.toFixed(e)}ketDecimal(t){const e=t.getAttribute("data-ket");return parseInt(e)}};t([h,e("design:type",Object)],Ls.prototype,"qubitCount",void 0),t([h,e("design:type",Object)],Ls.prototype,"size",void 0),t([h,e("design:type",Object)],Ls.prototype,"magnitudes",void 0),t([h,e("design:type",Object)],Ls.prototype,"phases",void 0),t([h,e("design:type",Object)],Ls.prototype,"multiQubits",void 0),t([h,e("design:type",Object)],Ls.prototype,"showKets",void 0),t([p,e("design:type",Array)],Ls.prototype,"qubitCircles",void 0),t([p,e("design:type",Array)],Ls.prototype,"qubitCircleGroups",void 0),t([p,e("design:type",Array)],Ls.prototype,"visibleQubitCircleGroups",void 0),Ls=t([m],Ls);const Ns=Pi`<style>
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
  </svg>`,Is=Pi`<style>
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
  </svg>`;let js=class RunCircuitButtonElement extends HTMLElement{runSimulator(){this.disable(),this.dispatchEvent(new Event("run-circuit-button.click",{bubbles:!0}))}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.dispatchEvent(new Event("run-circuit-button.load",{bubbles:!0}))}update(){$i(Pi`<style>
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
          ${Ns} ${Is}
        </button>`,this.shadowRoot)}};t([d,e("design:type",HTMLInputElement)],js.prototype,"button",void 0),js=t([m],js)}));
//# sourceMappingURL=qni.js.map
