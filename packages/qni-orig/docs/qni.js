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
    ***************************************************************************** */function t(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}const n=new WeakSet;function i(t){a(t),r(t)}const o=new WeakMap;function r(t=document){if(o.has(t))return o.get(t);let e=!1;const n=new MutationObserver((t=>{for(const e of t)if("attributes"===e.type&&e.target instanceof Element)l(e.target);else if("childList"===e.type&&e.addedNodes.length)for(const t of e.addedNodes)t instanceof Element&&a(t)}));n.observe(t,{childList:!0,subtree:!0,attributeFilter:["data-action"]});const i={get closed(){return e},unsubscribe(){e=!0,o.delete(t),n.disconnect()}};return o.set(t,i),i}function a(t){for(const e of t.querySelectorAll("[data-action]"))l(e);t instanceof Element&&t.hasAttribute("data-action")&&l(t)}function s(t){const e=t.currentTarget;for(const i of c(e))if(t.type===i.type){const o=e.closest(i.tag);n.has(o)&&"function"==typeof o[i.method]&&o[i.method](t);const r=e.getRootNode();if(r instanceof ShadowRoot&&n.has(r.host)&&r.host.matches(i.tag)){const e=r.host;"function"==typeof e[i.method]&&e[i.method](t)}}}function*c(t){for(const e of(t.getAttribute("data-action")||"").trim().split(/\s+/)){const t=e.lastIndexOf(":"),n=e.lastIndexOf("#");yield{type:e.slice(0,t),tag:e.slice(t+1,n),method:e.slice(n+1)}}}function l(t){for(const e of c(t))t.addEventListener(e.type,s)}function u(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){const n=t.tagName.toLowerCase();if(t.shadowRoot)for(const i of t.shadowRoot.querySelectorAll(`[data-target~="${n}.${e}"]`))if(!i.closest(n))return i;for(const i of t.querySelectorAll(`[data-target~="${n}.${e}"]`))if(i.closest(n)===t)return i}(this,e)}})}function d(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){const n=t.tagName.toLowerCase(),i=[];if(t.shadowRoot)for(const o of t.shadowRoot.querySelectorAll(`[data-targets~="${n}.${e}"]`))o.closest(n)||i.push(o);for(const o of t.querySelectorAll(`[data-targets~="${n}.${e}"]`))o.closest(n)===t&&i.push(o);return i}(this,e)}})}const p=new WeakMap;function h(t,e){p.has(t)||p.set(t,[]),p.get(t).push(e)}function f(t){const e=new Set;let n=t;for(;n&&n!==HTMLElement;){const t=p.get(n)||[];for(const n of t)e.add(n);n=Object.getPrototypeOf(n)}return e}function g(t){return`data-${t.replace(/([A-Z]($|[a-z]))/g,"-$1")}`.replace(/--/g,"-").toLowerCase()}function m(t){const e=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){this.toggleAttribute("data-catalyst",!0),function(t){for(const e of t.querySelectorAll("template[data-shadowroot]"))e.parentElement===t&&t.attachShadow({mode:"closed"===e.getAttribute("data-shadowroot")?"closed":"open"}).append(e.content.cloneNode(!0))}(this),function(t,e){e||(e=f(Object.getPrototypeOf(t)));for(const n of e){const e=t[n],i=g(n);let o={get(){return this.getAttribute(i)||""},set(t){this.setAttribute(i,t||"")}};"number"==typeof e?o={get(){return Number(this.getAttribute(i)||0)},set(t){this.setAttribute(i,t)}}:"boolean"==typeof e&&(o={get(){return this.hasAttribute(i)},set(t){this.toggleAttribute(i,t)}}),Object.defineProperty(t,n,o),n in t&&!t.hasAttribute(i)&&o.set.call(t,e)}}(this),function(t){n.add(t),t.shadowRoot&&i(t.shadowRoot),a(t),r(t.ownerDocument)}(this),e&&e.call(this),this.shadowRoot&&i(this.shadowRoot)},function(t){let e=t.observedAttributes||[];Object.defineProperty(t,"observedAttributes",{get:()=>[...f(t.prototype)].map(g).concat(e),set(t){e=t}})}(t),function(t){const e=t.name.replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/(^-|-Element$)/g,"").toLowerCase();window.customElements.get(e)||(window[t.name]=t,window.customElements.define(e,t))}(t)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function b(t,e){return t(e={exports:{}},e.exports),e.exports}var y=b((function(t,e){
/**
     * @license Fraction.js v4.1.1 23/05/2021
     * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
     *
     * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
!function(e){var n={s:1,n:0,d:1};function i(t){function e(){var e=Error.apply(this,arguments);e.name=this.name=t,this.stack=e.stack,this.message=e.message}function n(){}return n.prototype=Error.prototype,e.prototype=new n,e}var o=d.DivisionByZero=i("DivisionByZero"),r=d.InvalidParameter=i("InvalidParameter");function a(t,e){return isNaN(t=parseInt(t,10))&&s(),t*e}function s(){throw new r}function c(t){for(var e={},n=t,i=2,o=4;o<=n;){for(;n%i==0;)n/=i,e[i]=(e[i]||0)+1;o+=1+2*i++}return n!==t?n>1&&(e[n]=(e[n]||0)+1):e[t]=(e[t]||0)+1,e}var l=function(t,e){var i,r=0,c=1,l=1,u=0,d=0,p=0,h=1,f=1,g=0,m=1,v=1,b=1,y=1e7;if(null==t);else if(void 0!==e)l=(r=t)*(c=e);else switch(typeof t){case"object":"d"in t&&"n"in t?(r=t.n,c=t.d,"s"in t&&(r*=t.s)):0 in t?(r=t[0],1 in t&&(c=t[1])):s(),l=r*c;break;case"number":if(t<0&&(l=t,t=-t),t%1==0)r=t;else if(t>0){for(t>=1&&(t/=f=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)));m<=y&&b<=y;){if(t===(i=(g+v)/(m+b))){m+b<=y?(r=g+v,c=m+b):b>m?(r=v,c=b):(r=g,c=m);break}t>i?(g+=v,m+=b):(v+=g,b+=m),m>y?(r=v,c=b):(r=g,c=m)}r*=f}else(isNaN(t)||isNaN(e))&&(c=r=NaN);break;case"string":if(null===(m=t.match(/\d+|./g))&&s(),"-"===m[g]?(l=-1,g++):"+"===m[g]&&g++,m.length===g+1?d=a(m[g++],l):"."===m[g+1]||"."===m[g]?("."!==m[g]&&(u=a(m[g++],l)),(++g+1===m.length||"("===m[g+1]&&")"===m[g+3]||"'"===m[g+1]&&"'"===m[g+3])&&(d=a(m[g],l),h=Math.pow(10,m[g].length),g++),("("===m[g]&&")"===m[g+2]||"'"===m[g]&&"'"===m[g+2])&&(p=a(m[g+1],l),f=Math.pow(10,m[g+1].length)-1,g+=3)):"/"===m[g+1]||":"===m[g+1]?(d=a(m[g],l),h=a(m[g+2],1),g+=3):"/"===m[g+3]&&" "===m[g+1]&&(u=a(m[g],l),d=a(m[g+2],l),h=a(m[g+4],1),g+=5),m.length<=g){l=r=p+(c=h*f)*u+f*d;break}default:s()}if(0===c)throw new o;n.s=l<0?-1:1,n.n=Math.abs(r),n.d=Math.abs(c)};function u(t,e){if(!t)return e;if(!e)return t;for(;;){if(!(t%=e))return e;if(!(e%=t))return t}}function d(t,e){if(!(this instanceof d))return new d(t,e);l(t,e),t=d.REDUCE?u(n.d,n.n):1,this.s=n.s,this.n=n.n/t,this.d=n.d/t}d.REDUCE=1,d.prototype={s:1,n:0,d:1,abs:function(){return new d(this.n,this.d)},neg:function(){return new d(-this.s*this.n,this.d)},add:function(t,e){return l(t,e),new d(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(t,e){return l(t,e),new d(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(t,e){return l(t,e),new d(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(t,e){return l(t,e),new d(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return new d(this)},mod:function(t,e){return isNaN(this.n)||isNaN(this.d)?new d(NaN):void 0===t?new d(this.s*this.n%this.d,1):(l(t,e),0===n.n&&0===this.d&&d(0,0),new d(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d))},gcd:function(t,e){return l(t,e),new d(u(n.n,this.n)*u(n.d,this.d),n.d*this.d)},lcm:function(t,e){return l(t,e),0===n.n&&0===this.n?new d:new d(n.n*this.n,u(n.n,this.n)*u(n.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new d(NaN):new d(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new d(NaN):new d(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new d(NaN):new d(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return new d(this.s*this.d,this.n)},pow:function(t,e){if(l(t,e),1===n.d)return n.s<0?new d(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):new d(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var i=c(this.n),o=c(this.d),r=1,a=1;for(var s in i)if("1"!==s){if("0"===s){r=0;break}if(i[s]*=n.n,i[s]%n.d!=0)return null;i[s]/=n.d,r*=Math.pow(s,i[s])}for(var s in o)if("1"!==s){if(o[s]*=n.n,o[s]%n.d!=0)return null;o[s]/=n.d,a*=Math.pow(s,o[s])}return n.s<0?new d(a,r):new d(r,a)},equals:function(t,e){return l(t,e),this.s*this.n*n.d==n.s*n.n*this.d},compare:function(t,e){l(t,e);var i=this.s*this.n*n.d-n.s*n.n*this.d;return(0<i)-(i<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;var e=this.abs().toContinued();function n(t){return 1===t.length?new d(t[0]):n(t.slice(1)).inverse().add(t[0])}t=t||.001;for(var i=0;i<e.length;i++){var o=n(e.slice(0,i+1));if(o.sub(this.abs()).abs().valueOf()<t)return o.mul(this.s)}return this},divisible:function(t,e){return l(t,e),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var e,n="",i=this.n,o=this.d;return this.s<0&&(n+="-"),1===o?n+=i:(t&&(e=Math.floor(i/o))>0&&(n+=e,n+=" ",i%=o),n+=i,n+="/",n+=o),n},toLatex:function(t){var e,n="",i=this.n,o=this.d;return this.s<0&&(n+="-"),1===o?n+=i:(t&&(e=Math.floor(i/o))>0&&(n+=e,i%=o),n+="\\frac{",n+=i,n+="}{",n+=o,n+="}"),n},toContinued:function(){var t,e=this.n,n=this.d,i=[];if(isNaN(e)||isNaN(n))return i;do{i.push(Math.floor(e/n)),t=e%n,e=n,n=t}while(1!==e);return i},toString:function(t){var e,n=this.n,i=this.d;if(isNaN(n)||isNaN(i))return"NaN";d.REDUCE||(n/=e=u(n,i),i/=e),t=t||15;var o=function(t,e){for(;e%2==0;e/=2);for(;e%5==0;e/=5);if(1===e)return 0;for(var n=10%e,i=1;1!==n;i++)if(n=10*n%e,i>2e3)return 0;return i}(0,i),r=function(t,e,n){for(var i=1,o=function(t,e,n){for(var i=1;e>0;t=t*t%n,e>>=1)1&e&&(i=i*t%n);return i}(10,n,e),r=0;r<300;r++){if(i===o)return r;i=10*i%e,o=10*o%e}return 0}(0,i,o),a=-1===this.s?"-":"";if(a+=n/i|0,n%=i,(n*=10)&&(a+="."),o){for(var s=r;s--;)a+=n/i|0,n%=i,n*=10;a+="(";for(s=o;s--;)a+=n/i|0,n%=i,n*=10;a+=")"}else for(s=t;n&&s--;)a+=n/i|0,n%=i,n*=10;return a}},Object.defineProperty(d,"__esModule",{value:!0}),d.default=d,d.Fraction=d,t.exports=d}()})),w=v(y);y.Fraction;const x=1e3,S=Object.prototype.toString.call({}),E="!recursion-limit!";function _(t,e=10){return function(t){return null===t?"null":void 0===t?"undefined":"string"==typeof t?`"${t}"`:"number"==typeof t?String(t):void 0}(t)||function(t,e){if(0===e)return E;if(t instanceof Map)return function(t,e){const n=[];for(const[i,o]of t.entries()){if(n.length>x){n.push("[...]");break}const t=_(i,e-1),r=_(o,e-1);n.push(`${t}: ${r}`)}return`Map{${n.join(", ")}}`}(t,e);if(t instanceof Set)return function(t,e){const n=[];for(const i of t){if(n.length>x){n.push("[...]");break}n.push(_(i,e-1))}return`Set{${n.join(", ")}}`}(t,e);const n=t=>void 0!==t[Symbol.iterator];return n(t)?function(t,e){const n=[];for(const i of t){if(n.length>x){n.push("[...]");break}n.push(_(i,e-1))}return`${Array.isArray(t)?"":t.constructor.name}[${n.join(", ")}]`}(t,e):void 0}(t,e)||function(t,e){const n=String(t);return n!==S?n:function(t,e){const n=[];for(const i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;if(n.length>x){n.push("[...]");break}const o=t[i],r=_(i,e-1),a=_(o,e-1);n.push(`${r}: ${a}`)}const i=t.constructor.name;return`${i==={}.constructor.name?"":`(Type: ${i})`}{${n.join(", ")}}`}(t,e)}(t,e)}let O=0;class M extends Error{constructor(t,e){super(t),this.detailsObj=e,this.name="Error",this.message=t,this.stack=(new Error).stack,void 0!==this.stack&&(this.stack=this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /,"\n    ")),O++;try{this.details=1===O?_(this.detailsObj):"(failed to describe detailsObj due to possibly re-entrancy)"}catch(t){console.error(t),this.details="(failed to describe detailsObj, see the console for details)"}finally{O--}}}const P=[{character:"½",ref:"½",expanded:"1/2",value:.5},{character:"¼",ref:"¼",expanded:"1/4",value:1/4},{character:"¾",ref:"¾",expanded:"3/4",value:3/4},{character:"⅓",ref:"⅓",expanded:"1/3",value:1/3},{character:"⅔",ref:"⅔",expanded:"2/3",value:2/3},{character:"⅕",ref:"⅕",expanded:"1/5",value:.2},{character:"⅖",ref:"⅖",expanded:"2/5",value:.4},{character:"⅗",ref:"⅗",expanded:"3/5",value:.6},{character:"⅘",ref:"⅘",expanded:"4/5",value:.8},{character:"⅙",ref:"⅙",expanded:"1/6",value:1/6},{character:"⅚",ref:"⅚",expanded:"5/6",value:5/6},{character:"⅐",ref:"⅐",expanded:"1/7",value:1/7},{character:"⅛",ref:"⅛",expanded:"1/8",value:1/8},{character:"⅜",ref:"⅜",expanded:"3/8",value:3/8},{character:"⅝",ref:"⅝",expanded:"5/8",value:5/8},{character:"⅞",ref:"⅞",expanded:"7/8",value:7/8},{character:"⅑",ref:"⅑",expanded:"1/9",value:1/9},{character:"⅒",ref:"⅒",expanded:"1/10",value:.1}];class z{constructor(t,e,n,i){this.allowAbbreviation=t,this.maxAbbreviationError=e,this.fixedDigits=n,this.itemSeparator=i}static parseFloat(t){if(0===t.length)throw new Error("Not a number: '"+t+"'");if("-"===t[0])return-z.parseFloat(t.substr(1));if("√"===t[0])return Math.sqrt(z.parseFloat(t.substr(1)));const e=z.matchUnicodeFraction((e=>e.character===t));if(void 0!==e)return e.value;const n=parseFloat(t);if(isNaN(n))throw new Error("Not a number: '"+t+"'");return n}static simplifyByRounding(t,e){if(t<0)return-z.simplifyByRounding(-t,e);const n=t%1;if(n<=e||1-n<=e)return Math.round(t);const i=z.matchUnicodeFraction((n=>Math.abs(n.value-t)<=e));if(void 0!==i)return i.value;const o=z.matchUnicodeFraction((n=>Math.abs(Math.sqrt(n.value)-t)<=e));return void 0!==o?Math.sqrt(o.value):t}static matchUnicodeFraction(t){for(const e of P)if(t(e))return e}formatFloat(t){return this.allowAbbreviation?this.abbreviateFloat(t,this.maxAbbreviationError,this.fixedDigits):void 0!==this.fixedDigits?t.toFixed(this.fixedDigits):String(t)}abbreviateFloat(t,e=0,n){if(Math.abs(t)<e)return"0";if(t<0)return"-"+this.abbreviateFloat(-t,e,n);const i=z.matchUnicodeFraction((n=>Math.abs(n.value-t)<=e));if(void 0!==i)return i.character;const o=z.matchUnicodeFraction((n=>Math.abs(Math.sqrt(n.value)-t)<=e));return void 0!==o?"√"+o.character:t%1!=0&&void 0!==n?t.toFixed(n):t.toString()}}z.CONSISTENT=new z(!1,0,2,", "),z.EXACT=new z(!0,0,void 0,", "),z.MINIFIED=new z(!0,0,void 0,","),z.SIMPLIFIED=new z(!0,5e-4,3,", ");const k={classes:{gate:"gate","gate:write":"write-gate","gate:hadamard":"hadamard-gate","gate:not":"not-gate","gate:y":"y-gate","gate:z":"z-gate","gate:phase":"phase-gate","gate:control":"control-gate","gate:swap":"swap-gate","gate:rootNot":"rnot-gate","gate:rx":"rx-gate","gate:ry":"ry-gate","gate:rz":"rz-gate","gate:measure":"measure-gate","display:bloch":"bloch-display","display:qubitLabel":"qubit-label","qubitLabel:value":"qubit-label__value",connectable:"connectable","connectable:lowerBit":"connectable--lower-bit","connectable:upperBit":"connectable--upper-bit",circuitBlock:"circuit-block",circuitStep:"circuit-step","circuitStep:body":"circuit-step__body","circuitStep:state:done":"circuit-step--done","circuitStep:type:shadow":"circuit-step--shadow","circuitStep:type:shadowSource":"circuit-step--shadow-source",circuitBreakpoint:"circuit-breakpoint","circuitBreakpoint:state:active":"circuit-breakpoint--active",draggable:"draggable","draggable:state:dragging":"draggable--dragging","draggable:state:dropped":"draggable--dropped","draggable:type:circuit":"draggable--circuit","draggable:type:palette":"draggable--palette",dropzone:"dropzone","dropzone:state:active":"dropzone--active","dropzone:state:occupied":"dropzone--occupied","dropzone:type:circuit":"dropzone--circuit","dropzone:type:palette":"dropzone--palette","dropzone:type:trash":"dropzone--trash","gate:mixin:ifable":"gate--ifable","gate:mixin:phiable":"gate--phiable","gate:mixin:thetable":"gate--thetable","gate:state:disabled":"gate--disabled","wireable:inactive":"wireable--inactive","wireable:inputInactive":"wireable--input-inactive","wireable:outputInactive":"wireable--output-inactive",angleSlider:"angle-slider","angleSlider:state:active":"angle-slider-active"},attributes:{"draggable:x":"data-draggable-x","draggable:y":"data-draggable-y","instruction:controls":"data-controls","instruction:if":"data-if","instruction:theta":"data-theta","instruction:phi":"data-phi","instruction:flag":"data-flag","instruction:valueable:value":"data-value"}};function T(t){const e=k.classes[t];if(!e)throw new Error(`className for ${t} not found`);return e}const A={if_same_instance_as_this_then_throw:!0},C={not_a_normal_value:!0};class D{constructor(t,e=!1){let n,i;if(t instanceof D)n=t._iterable,i=t[Symbol.iterator];else if(e)n={[Symbol.iterator]:t},i=t;else{if(!this.isIterable(t))throw new Error(`Not iterable: ${_(t)}`);n=t,i=t[Symbol.iterator].bind(t)}this._iterable=n,this[Symbol.iterator]=i}isIterable(t){return"string"==typeof t||"object"==typeof t&&null!==t&&Symbol.iterator in t}static fromGenerator(t){return new D(t,!0)}toArray(){return Array.from(this._iterable)}join(t){return this.toArray().join(t)}toString(){return`Seq[${this.join(", ")}]`}static range(t){if(!Number.isInteger(t)||t<0)throw new M("bad count",{count:t});return D.fromGenerator((function*(){for(let e=0;e<t;e++)yield e}))}map(t){const e=this._iterable;return D.fromGenerator((function*(){for(const n of e)yield t(n)}))}flatMap(t){const e=this._iterable;return D.fromGenerator((function*(){for(const n of e)yield*t(n)}))}filter(t){const e=this._iterable;return D.fromGenerator((function*(){for(const n of e)t(n)&&(yield n)}))}maxBy(t,e=A,n=((t,e)=>t<e)){let i=C,o=C;for(const e of this._iterable){if(i===C){i=e;continue}o===C&&(o=t(i));const r=t(e);n(o,r)&&(i=e,o=r)}return function(t,e,n){if(t!==C)return t;if(e===A)throw new Error(n);return e}(i,e,"Can't maxBy an empty sequence.")}any(t){for(const e of this._iterable)if(t(e))return!0;return!1}every(t){return!this.any((e=>!t(e)))}distinctBy(t){const e=this;return D.fromGenerator((function(){const n=new Set;return e.filter((e=>{const i=t(e);return!n.has(i)&&(n.add(i),!0)}))[Symbol.iterator]()}))}distinct(){return this.distinctBy((t=>t))}segmentBy(t){const e=this;return D.fromGenerator((function*(){let n,i=[];for(const o of e){const e=t(o);i.length>0&&e!==n&&(yield i,i=[]),i.push(o),n=e}i.length>0&&(yield i)}))}single(t=A){const e=this[Symbol.iterator](),n=e.next();if(!n.done&&e.next().done)return n.value;if(t===A)throw n.done?new Error("Empty sequence doesn't contain a single item."):new Error("Sequence contains more than a single item.");return t}sortedBy(t){return q(this.toArray().sort(((e,n)=>{const i=t(e),o=t(n);return i<o?-1:i>o?1:0})))}}function q(t){return new D(t)}class j{static need(t,e,n){if(!0!==t){const t=void 0===n?"(not provided)":`[${Array.prototype.slice.call(n).join(", ")}]`;throw new Error(`Precondition failed\n\nMessage: ${void 0===e?"(not provided)":e}\n\nArgs: ${t}`)}}static notNull(t){j.need(null!=t,"notNull")}static round(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}static snappedCosSin(t){const e=Math.PI/4,n=Math.round(t/e);if(n*e===t){const t=Math.sqrt(.5);return[[1,0],[t,t],[0,1],[-t,t],[-1,0],[-t,-t],[0,-1],[t,-t]][7&n]}return[Math.cos(t),Math.sin(t)]}}function I(t,e){let n=function(t){return function(t){for(let e=(t=[...t]).indexOf("e",1);-1!==e;e=t.indexOf("e",e+1)){const n=e-1;let i=e+1;/[0-9]/.exec(t[n])&&(/[+-]/.exec(`${t[i]}`)&&(i+=1),/[0-9]/.exec(`${t[i]}`)&&(i+=1,t.splice(n,i-n,t.slice(n,i).join("")),e-=1))}return t}(q(t.toLowerCase().split(/\s/)).flatMap((t=>q(t).segmentBy((t=>""===t.trim()?" ":/[.0-9]/.exec(t)?"#":/[_a-z]/.exec(t)?"a":NaN)).map((t=>t.join(""))))).filter((t=>""!==t.trim())).toArray())}(t).map((t=>function(t,e){if(/[0-9]+(\.[0-9]+)?/.exec(t))return parseFloat(t);if(e.has(t))return e.get(t);throw new M("Unrecognized token",{token:t})}(t,e)));n.length>0&&void 0!==n[n.length-1].priority&&(n=n.slice(0,n.length-1));const i=[],o=[],r=t=>"("!==t&&void 0===t.priority,a=e=>{if("("===e)throw new M("Bad expression: unmatched '('",{text:t});if(o.length<2)throw new M("Bad expression: operated on nothing",{text:t});const n=o.pop(),i=o.pop();o.push(e.f(i,n))},s=()=>{for(;;){if(0===i.length)throw new M("Bad expression: unmatched ')'",{text:t});const e=i.pop();if("("===e)break;a(e)}},c=t=>{for(;i.length>0&&o.length>=2&&void 0!==o[o.length-1];){const e=i[i.length-1];if(void 0===e.w||e.w<t)break;a(i.pop())}},l=(n,r)=>{const a=e.get("*");if(n&&void 0===r.binary_action&&")"!==r&&(c(a.priority),i.push({f:a.binary_action,w:a.priority})),n&&void 0!==r.binary_action)c(r.priority),i.push({f:r.binary_action,w:r.priority});else if(void 0!==r.unary_action)c(r.priority),o.push(void 0),i.push({f:(t,e)=>r.unary_action(e),w:1/0});else if(void 0!==r.binary_action)throw new M("Bad expression: binary op in bad spot",{text:t})};let u=!1;for(const t of n)l(u,t),u=r(t),"("===t?i.push("("):")"===t?s():u&&o.push(t);if(c(-1/0),1!==o.length||0!==i.length)throw new M("Incomplete expression",{text:t});return o[0]}const R=new Map,$=new Map,L=new Map;class N{constructor(t,e){this.real=t,this.imag=e}isApproximatelyEqualTo(t,e){if(t instanceof N||"number"==typeof t){const n=this.minus(N.from(t));return Math.abs(n.real)<=e&&Math.abs(n.imag)<=e&&n.abs()<=e}return!1}norm2(){return this.real*this.real+this.imag*this.imag}abs(){return Math.sqrt(this.norm2())}static from(t){if(t instanceof N)return t;if("number"==typeof t)return new N(t,0);throw new M("Unrecognized value type.",{v:t})}static parse(t){return N.from(I(t,L))}static polar(t,e){const[n,i]=j.snappedCosSin(e);return new N(t*n,t*i)}static realPartOf(t){if(t instanceof N)return t.real;if("number"==typeof t)return t;throw new M("Unrecognized value type.",{v:t})}static imagPartOf(t){if(t instanceof N)return t.imag;if("number"==typeof t)return 0;throw new M("Unrecognized value type.",{v:t})}isEqualTo(t){return t instanceof N?this.real===t.real&&this.imag===t.imag:"number"==typeof t&&(this.real===t&&0===this.imag)}unit(){const t=this.norm2();return t<1e-5?N.polar(1,this.phase()):this.dividedBy(Math.sqrt(t))}plus(t){const e=N.from(t);return new N(this.real+e.real,this.imag+e.imag)}minus(t){const e=N.from(t);return new N(this.real-e.real,this.imag-e.imag)}times(t){const e=N.from(t);return new N(this.real*e.real-this.imag*e.imag,this.real*e.imag+this.imag*e.real)}dividedBy(t){const e=N.from(t),n=e.norm2();if(0===n)throw new Error("Division by Zero");const i=this.times(e.conjugate());return new N(i.real/n,i.imag/n)}sqrts(){const[t,e]=[this.real,this.imag],n=Math.sqrt(Math.sqrt(t*t+e*e));if(0===n)return[N.ZERO];if(0===e&&t<0)return[new N(0,n),new N(0,-n)];const i=this.phase()/2,o=N.polar(n,i);return[o,o.times(-1)]}conjugate(){return new N(this.real,-this.imag)}static rootsOfQuadratic(t,e,n){if(t=N.from(t),e=N.from(e),n=N.from(n),t.isEqualTo(0)){if(!e.isEqualTo(0))return[n.times(-1).dividedBy(e)];if(!n.isEqualTo(0))return[];throw Error("Degenerate")}const i=e.times(e).minus(t.times(n).times(4)).sqrts(),o=e.times(-1),r=t.times(2);return i.map((t=>o.minus(t).dividedBy(r)))}toString(t){return(t=t||z.EXACT).allowAbbreviation?this.toStringAllowSingleValue(t):this.toStringBothValues(t)}neg(){return new N(-this.real,-this.imag)}raisedTo(t){return.5===t&&0===this.imag&&this.real>=0?new N(Math.sqrt(this.real),0):N.ZERO.isEqualTo(t)?N.ONE:this.isEqualTo(N.ZERO)?N.ZERO:this.ln().times(N.from(t)).exp()}exp(){return N.polar(Math.exp(this.real),this.imag)}cos(){const t=this.times(N.I);return t.exp().plus(t.neg().exp()).times(.5)}sin(){const t=this.times(N.I);return t.exp().minus(t.neg().exp()).dividedBy(new N(0,2))}tan(){return this.sin().dividedBy(this.cos())}ln(){return new N(Math.log(this.abs()),this.phase())}phase(){return Math.atan2(this.imag,this.real)}toStringAllowSingleValue(t){return Math.abs(this.imag)<=t.maxAbbreviationError?t.formatFloat(this.real):Math.abs(this.real)<=t.maxAbbreviationError?Math.abs(this.imag-1)<=t.maxAbbreviationError?"i":Math.abs(this.imag+1)<=t.maxAbbreviationError?"-i":t.formatFloat(this.imag)+"i":this.toStringBothValues(t)}toStringBothValues(t){const e=this.imag>=0?"+":"-",n=t.allowAbbreviation&&Math.abs(Math.abs(this.imag)-1)<=t.maxAbbreviationError?"":t.formatFloat(Math.abs(this.imag));return(t.allowAbbreviation||void 0===t.fixedDigits||this.real<0?"":"+")+t.formatFloat(this.real)+e+n+"i"}}N.ZERO=new N(0,0),N.ONE=new N(1,0),N.I=new N(0,1),R.set("i",N.I),R.set("e",N.from(Math.E)),R.set("pi",N.from(Math.PI)),R.set("(","("),R.set(")",")");for(const{character:t,value:e}of P)R.set(t,e);R.set("sqrt",{unary_action:t=>N.from(t).raisedTo(.5),priority:4}),R.set("exp",{unary_action:t=>N.from(t).exp(),priority:4}),R.set("ln",{unary_action:t=>N.from(t).ln(),priority:4}),R.set("^",{binary_action:(t,e)=>N.from(t).raisedTo(e),priority:3}),R.set("*",{binary_action:(t,e)=>N.from(t).times(e),priority:2}),R.set("/",{binary_action:(t,e)=>N.from(t).dividedBy(e),priority:2}),R.set("-",{unary_action:t=>N.from(t).neg(),binary_action:(t,e)=>N.from(t).minus(e),priority:1}),R.set("+",{unary_action:t=>t,binary_action:(t,e)=>N.from(t).plus(e),priority:1}),R.set("√",R.get("sqrt")),L.set("cos",{unary_action:t=>new N(Math.PI/180,0).times(t).cos(),priority:4}),L.set("sin",{unary_action:t=>new N(Math.PI/180,0).times(t).sin(),priority:4}),L.set("asin",{unary_action:t=>{if(0!==N.imagPartOf(t))throw new M("asin input out of range",{e:t});return N.from(180*Math.asin(N.realPartOf(t))/Math.PI)},priority:4}),L.set("acos",{unary_action:t=>{if(0!==N.imagPartOf(t))throw new M("acos input out of range",{e:t});return N.from(180*Math.acos(N.realPartOf(t))/Math.PI)},priority:4}),L.set("arccos",L.get("acos")),L.set("arcsin",L.get("asin")),$.set("cos",{unary_action:t=>N.from(t).cos(),priority:4}),$.set("sin",{unary_action:t=>N.from(t).sin(),priority:4}),$.set("tan",{unary_action:t=>N.from(t).tan(),priority:4}),$.set("asin",{unary_action:t=>{if(0!==N.imagPartOf(t))throw new M("asin input out of range",{e:t});return N.from(Math.asin(N.realPartOf(t)))},priority:4}),$.set("acos",{unary_action:t=>{if(0!==N.imagPartOf(t))throw new M("acos input out of range",{e:t});return N.from(Math.acos(N.realPartOf(t)))},priority:4}),$.set("atan",{unary_action:t=>{if(0!==N.imagPartOf(t))throw new M("atan input out of range",{e:t});return N.from(Math.atan(N.realPartOf(t)))},priority:4});for(const[t,e]of R.entries())L.set(t,e),$.set(t,e);class F{constructor(t,e,n){if(t*e*2!==n.length)throw new M("width*height*2 !== buffer.length",{width:t,height:e,len:n.length});this.width=t,this.height=e,this.buffer=n}static PHASE(t){const e=new w(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).valueOf()*Math.PI;const n=N.from(Math.E);return F.square(1,0,0,n.raisedTo(N.I.times(e)))}static get RNOT(){const t=N.I,e=t.neg();return F.square(t.plus(1),e.plus(1),e.plus(1),t.plus(1)).times(.5)}static RX(t){const e=I(t,$),n=N.I.neg(),i=Math.cos(e/2),o=Math.sin(e/2);return F.square(i,n.times(o),n.times(o),i)}static RY(t){const e=I(t,$),n=Math.cos(e/2),i=Math.sin(e/2);return F.square(n,-i,i,n)}static RZ(t){const e=I(t,$),n=N.from(Math.E),i=N.I;return F.square(n.raisedTo(i.neg().times(e/2)),0,0,n.raisedTo(i.times(e/2)))}static fromRows(t){j.need(t.length>0,"non-zero height",t);const e=q(t),n=t.length,i=e.map((t=>t.length)).distinct().single(null);if(null===i)throw new M("Inconsistent row widths.",{rows:t});const o=new Float64Array(i*n*2);let r=0;for(const e of t)for(const t of e)o[r]=N.realPartOf(t),o[r+1]=N.imagPartOf(t),r+=2;return new F(i,n,o)}static generate(t,e,n){const i=new Float64Array(t*e*2);for(let o=0;o<e;o++)for(let e=0;e<t;e++){const r=2*(o*t+e),a=n(o,e);i[r]=N.realPartOf(a),i[r+1]=N.imagPartOf(a)}return new F(t,e,i)}static solo(t){return new F(1,1,new Float64Array([N.realPartOf(t),N.imagPartOf(t)]))}static square(...t){j.need(Array.isArray(t),"Array.isArray(coefs)",t);const e=Math.round(Math.sqrt(t.length));return j.need(e*e===t.length,"Matrix.square: non-square number of arguments"),F.generate(e,e,((n,i)=>t[n*e+i]))}static col(...t){return j.need(Array.isArray(t),"Array.isArray(coefs)",t),F.generate(1,t.length,(e=>t[e]))}static row(...t){return j.need(Array.isArray(t),"Array.isArray(coefs)",t),F.generate(t.length,1,((e,n)=>t[n]))}static identity(t){if(!Number.isInteger(t)||t<=0)throw new M("Bad size",{size:t});const e=new Float64Array(t*t*2);for(let n=0;n<t;n++)e[n*(t+1)*2]=1;return new F(t,t,e)}static generateDiagonal(t,e){const n=new Float64Array(t*t*2);for(let i=0;i<t;i++){const o=i*(t+1)*2,r=e(i);n[o]=N.realPartOf(r),n[o+1]=N.imagPartOf(r)}return new F(t,t,n)}static zero(t,e){return new F(t,e,new Float64Array(t*e*2))}getColumn(t){j.need(t>=0&&t<=this.width,"colIndex >= 0 && colIndex <= this.width");const e=[];for(let n=0;n<this.height;n++)e.push(this.cell(t,n));return e}isUnitary(t){const e=this.width;return this.height===e&&this.times(this.adjoint()).isApproximatelyEqualTo(F.identity(e),t)}adjoint(){const t=this.height,e=this.width,n=new Float64Array(t*e*2);for(let i=0;i<e;i++)for(let e=0;e<t;e++){const o=2*(e*this.width+i),r=2*(i*t+e);n[r]=this.buffer[o],n[r+1]=-this.buffer[o+1]}return new F(t,e,n)}times(t){return t instanceof F?this.timesMatrix(t):this.timesScalar(t)}timesMatrix(t){if(this.width!==t.height)throw new M("Incompatible sizes.",{this:this,other:t});const e=t.width,n=this.height,i=this.width,o=new Float64Array(e*n*2);for(let r=0;r<n;r++)for(let n=0;n<e;n++){const a=2*(r*e+n);for(let s=0;s<i;s++){const c=2*(r*i+s),l=2*(s*e+n),u=this.buffer[c],d=this.buffer[c+1],p=t.buffer[l],h=t.buffer[l+1],f=u*p-d*h,g=u*h+p*d;o[a]+=f,o[a+1]+=g}}return new F(e,n,o)}timesScalar(t){const e=new Float64Array(this.buffer.length),n=N.realPartOf(t),i=N.imagPartOf(t);for(let t=0;t<e.length;t+=2){const o=this.buffer[t],r=this.buffer[t+1];e[t]=o*n-r*i,e[t+1]=o*i+r*n}return new F(this.width,this.height,e)}static rotation(t){const e=Math.cos(t),n=Math.sin(t);return F.square(e,-n,n,e)}isEqualTo(t){if(this===t)return!0;if(!(t instanceof F))return!1;const e=t;return this.width===e.width&&this.height===e.height&&D.range(this.buffer.length).every((t=>this.buffer[t]===e.buffer[t]))}isApproximatelyEqualTo(t,e){return t instanceof F&&this.width===t.width&&this.height===t.height&&Math.sqrt(this.minus(t).norm2())<=e}minus(t){const{width:e,height:n,buffer:i}=this,o=t.buffer;j.need(t.width===e&&t.height===n,"Matrix.minus: compatible sizes");const r=new Float64Array(this.buffer.length);for(let t=0;t<r.length;t++)r[t]=i[t]-o[t];return new F(e,n,r)}norm2(){let t=0;for(const e of this.buffer)t+=e*e;return t}toString(t=z.EXACT){return`{{${this.rows().map((e=>e.map((e=>e.toString(t))).join(t.itemSeparator))).join(`}${t.itemSeparator}{`)}}}`}rows(){return D.range(this.height).map((t=>D.range(this.width).map((e=>this.cell(e,t))).toArray())).toArray()}cell(t,e){if(t<0||e<0||t>=this.width||e>=this.height)throw new M("Cell out of range",{col:t,row:e,width:this.width,height:this.height});const n=2*(this.width*e+t);return new N(this.buffer[n],this.buffer[n+1])}set(t,e,n){if(t<0||e<0||t>=this.width||e>=this.height)throw new M("Cell out of range",{col:t,row:e,width:this.width,height:this.height});const i=2*(this.width*e+t);this.buffer[i]=n.real,this.buffer[i+1]=n.imag}isApproximatelyHermitian(t){if(this.width!==this.height)return!1;for(let e=0;e<this.width;e++)for(let n=0;n<this.height;n++){const i=2*(this.width*n+e),o=2*(this.width*e+n);if(Math.abs(this.buffer[i]-this.buffer[o])>t)return!1;if(Math.abs(this.buffer[i+1]+this.buffer[o+1])>t)return!1}return!0}plus(t){const{width:e,height:n,buffer:i}=this,o=t.buffer;j.need(t.width===e&&t.height===n,"Matrix.plus: compatible sizes");const r=new Float64Array(this.buffer.length);for(let t=0;t<r.length;t++)r[t]=i[t]+o[t];return new F(e,n,r)}tensorProduct(t){const e=this.width,n=this.height,i=t.width,o=t.height,r=e*i,a=n*o,s=new Float64Array(r*a*2);for(let a=0;a<n;a++)for(let n=0;n<o;n++)for(let c=0;c<e;c++)for(let l=0;l<i;l++){const u=2*(a*e+c),d=2*(n*i+l),p=2*((a*o+n)*r+(c*i+l)),h=this.buffer[u],f=this.buffer[u+1],g=t.buffer[d],m=t.buffer[d+1],v=h*g-f*m,b=h*m+f*g;s[p]=v,s[p+1]=b}return new F(r,a,s)}timesQubitOperation(t,e,n,i){j.need(0==(n&1<<e),"Matrix.timesQubitOperation: self-controlled"),j.need(2===t.width&&2===t.height,"Matrix.timesQubitOperation: not 2x2");const{width:o,height:r,buffer:a}=this,[s,c,l,u,d,p,h,f]=t.buffer;j.need(r>=2<<e,"Matrix.timesQubitOperation: qubit index out of range");const g=new Float64Array(a);let m=0;for(let t=0;t<r;t++){const r=0!=(n&t^i),a=0!=(t&1<<e);for(let t=0;t<o;t++){if(!r&&!a){const t=m+2*(1<<e)*o,n=g[m],i=g[m+1],r=g[t],a=g[t+1];g[m]=n*s-i*c+r*l-a*u,g[m+1]=n*c+i*s+r*u+a*l,g[t]=n*d-i*p+r*h-a*f,g[t+1]=n*p+i*d+r*f+a*h}m+=2}}return new F(o,r,g)}singularValueDecomposition(t=0,e=100){if(this.width!==this.height)throw new M("Expected a square matrix.",this);let{U:n,S:i,V:o}=2===this.width?this._unordered_singularValueDecomposition_2x2():this._unordered_singularValueDecomposition_iterative(t,e);const r=D.range(this.width).sortedBy((t=>-i.cell(t,t).norm2())).toArray();for(let t=0;t<i.width;t++){const e=r.indexOf(t);if(t!==e){n._inline_colMix_postMultiply(t,e,F.PAULI_X),o._inline_rowMix_preMultiply(t,e,F.PAULI_X);const a=t*(i.width+1)*2,s=e*(i.width+1)*2;[i.buffer[a],i.buffer[s]]=[i.buffer[s],i.buffer[a]],[i.buffer[a+1],i.buffer[s+1]]=[i.buffer[s+1],i.buffer[a+1]],[r[e],r[t]]=[r[t],r[e]]}}for(let t=0;t<i.width;t++)n._inline_colScale_postMultiply(t,i.cell(t,t).unit());return i=F.generateDiagonal(i.width,(t=>i.cell(t,t).abs())),{U:n,S:i,V:o}}_unordered_singularValueDecomposition_2x2(){const t=F.identity(2);let{L:e,Q:n}=this.lqDecomposition();const i=e.cell(0,0).unit(),o=e.cell(0,1).unit();t._inline_colScale_postMultiply(0,i),t._inline_colScale_postMultiply(1,o),e._inline_rowScale_preMultiply(0,i.conjugate()),e._inline_rowScale_preMultiply(1,o.conjugate());const r=e.cell(1,1).unit();e._inline_colScale_postMultiply(1,r.conjugate()),n._inline_rowScale_preMultiply(1,r);const[a,,s,,c,,l]=e.buffer,u=a+l,d=s+c,p=s-c,h=a-l,f=Math.atan2(d,u)/2,g=Math.atan2(p,h)/2,m=Math.sqrt(u*u+d*d)/2,v=Math.sqrt(h*h+p*p)/2;return t._inline_colMix_postMultiply(0,1,F.rotation(f-g)),n._inline_rowMix_preMultiply(0,1,F.rotation(f+g)),e=F.square(m+v,0,0,m-v),{U:t,S:e,V:n}}_unordered_singularValueDecomposition_iterative(t=0,e=100){let n=F.identity(this.width),i=this._clone(),o=F.identity(this.width),r=0;for(;!i.isDiagonal(t)&&r++<e;){const{Q:t,R:e}=i.qrDecomposition(),{L:r,Q:a}=e.lqDecomposition();n=n.times(t),i=r,o=a.times(o)}return{U:n,S:i,V:o}}_inline_colMix_postMultiply(t,e,n){const[i,o,r,a]=n._2x2Breakdown();for(let n=0;n<this.width;n++){const s=this.cell(t,n),c=this.cell(e,n),l=s.times(i).plus(c.times(r)),u=s.times(o).plus(c.times(a)),d=2*(n*this.width+t),p=2*(n*this.width+e);this.buffer[d]=l.real,this.buffer[d+1]=l.imag,this.buffer[p]=u.real,this.buffer[p+1]=u.imag}}_2x2Breakdown(){return[new N(this.buffer[0],this.buffer[1]),new N(this.buffer[2],this.buffer[3]),new N(this.buffer[4],this.buffer[5]),new N(this.buffer[6],this.buffer[7])]}_inline_rowMix_preMultiply(t,e,n){const[i,o,r,a]=n._2x2Breakdown();for(let n=0;n<this.width;n++){const s=this.cell(n,t),c=this.cell(n,e),l=s.times(i).plus(c.times(o)),u=s.times(r).plus(c.times(a)),d=2*(t*this.width+n),p=2*(e*this.width+n);this.buffer[d]=l.real,this.buffer[d+1]=l.imag,this.buffer[p]=u.real,this.buffer[p+1]=u.imag}}_inline_colScale_postMultiply(t,e){for(let n=0;n<this.height;n++){const i=this.cell(t,n).times(e),o=2*(n*this.width+t);this.buffer[o]=i.real,this.buffer[o+1]=i.imag}}lqDecomposition(){const{Q:t,R:e}=this.adjoint().qrDecomposition();return{L:e.adjoint(),Q:t.adjoint()}}qrDecomposition(){if(this.width!==this.height)throw new M("Expected a square matrix.",this);const t=F.identity(this.width),e=this._clone();for(let n=0;n<this.height;n++){for(let i=0;i<n&&i<this.width;i++){const o=e.cell(i,n),r=e.cell(i,i),a=r.abs(),s=o.abs();if(0===s)continue;const c=-Math.atan2(s,a),l=Math.cos(c),u=Math.sin(c),d=r.unit().conjugate(),p=o.unit().conjugate(),h=F.square(d.times(l),p.times(-u),d.times(u),p.times(l));e._inline_rowMix_preMultiply(i,n,h),t._inline_colMix_postMultiply(i,n,h.adjoint())}const i=e.cell(n,n).unit();e._inline_rowScale_preMultiply(n,i.conjugate()),t._inline_colScale_postMultiply(n,i)}return{Q:t,R:e}}_clone(){return new F(this.width,this.height,this.buffer.slice())}_inline_rowScale_preMultiply(t,e){for(let n=0;n<this.width;n++){const i=this.cell(n,t).times(e),o=2*(t*this.width+n);this.buffer[o]=i.real,this.buffer[o+1]=i.imag}}isDiagonal(t=0){for(let e=0;e<this.width;e++)for(let n=0;n<this.height;n++){if(n===e)continue;const i=2*(this.width*n+e),o=Math.abs(this.buffer[i]),r=Math.abs(this.buffer[i+1]),a=Math.max(o,r);if(isNaN(a)||a>t)return!1}return this.width===this.height}trace(){let t=0,e=0;const n=2*this.width+2;for(let i=0;i<this.buffer.length;i+=n)t+=this.buffer[i],e+=this.buffer[i+1];return new N(t,e)}qubitDensityMatrixToBlochVector(){if(2!==this.width||2!==this.height)throw new M("Need a 2x2 density matrix.",this);if(!this.isApproximatelyHermitian(.01))throw new M("Density matrix should be Hermitian.",this);if(!this.trace().isApproximatelyEqualTo(1,.01))throw new M("Density matrix should have unit trace.",this);const[t,e,n,i,o,r,a,s]=this.buffer;return[o+n,r-i,t-a]}qubitDensityMatrix(t){const e=[...Array(Math.log2(this.height)).keys()].filter((e=>e!==t)),n=(t,e)=>e.sort().reverse().reduce(((t,e)=>{let n=t>>e+1;n<<=e;return n|(1<<e)-1&t}),t);let i=F.zero(2,2);for(let t=0;t<this.height;t++)for(let o=0;o<this.height;o++){if(!e.every((e=>(t>>e&1)==(o>>e&1))))continue;const r=this.cell(0,o).times(this.cell(0,t).conjugate());if(r.isEqualTo(0))continue;const a=0===n(o,e)?F.col(1,0):F.col(0,1),s=0===n(t,e)?F.row(1,0):F.row(0,1),c=a.times(s);i=i.plus(c.times(r))}return i}static fromAngleAxisPhaseRotation(t,e,n){const[i,o,r]=e;j.need(Math.abs(i*i+o*o+r*r-1)<1e-6,"Not a unit axis.");const a=F.PAULI_X.times(i).plus(F.PAULI_Y.times(o)).plus(F.PAULI_Z.times(r)),[s,c]=j.snappedCosSin(-t/2);return F.identity(2).times(s).plus(a.times(new N(0,c))).times(N.polar(1,n))}qubitOperationToAngleAxisRotation(){j.need(2===this.width&&2===this.height,"Need a 2x2 matrix."),j.need(this.isUnitary(.01),"Need a unitary matrix.");const[t,e,n,i]=this._2x2Breakdown(),o=t.plus(i),r=e.plus(n).dividedBy(N.I),a=e.minus(n),s=t.minus(i).dividedBy(N.I);let c=q([o,r,a,s]).maxBy((t=>t.abs())).unit().times(2);const l=Math.min(1,Math.max(-1,o.dividedBy(c).real));let u=r.dividedBy(c).real,d=a.dividedBy(c).real,p=s.dividedBy(c).real,h=-2*Math.acos(l);const f=Math.sqrt(u*u+d*d+p*p);return f<1e-7?{axis:[1,0,0],angle:0,phase:c.phase()}:(u/=f,d/=f,p/=f,h<=-Math.PI&&(h+=2*Math.PI,c=c.times(-1)),u+d+p<0&&(u=-u,d=-d,p=-p,h=-h),{axis:[u,d,p],angle:h,phase:c.phase()})}isUpperTriangular(t=0){for(let e=0;e<this.height;e++)for(let n=0;n<e&&n<this.width;n++){const i=2*(e*this.width+n),o=this.buffer[i],r=this.buffer[i+1];if(isNaN(o)||isNaN(r)||o*o+r*r>t*t)return!1}return!0}isLowerTriangular(t=0){for(let e=0;e<this.height;e++)for(let n=e+1;n<this.width;n++){const i=2*(e*this.width+n),o=this.buffer[i],r=this.buffer[i+1];if(isNaN(o)||isNaN(r)||o*o+r*r>t*t)return!1}return!0}}F.H=F.square(1,1,1,-1).times(Math.sqrt(.5)),F.PAULI_X=F.square(0,1,1,0),F.PAULI_Y=F.square(0,new N(0,-1),N.I,0),F.PAULI_Z=F.square(1,0,0,-1);var B=b((function(t,e){!function(t){function e(t){return n(t)&&"function"==typeof t.from}function n(t){return"object"==typeof t&&"function"==typeof t.to}function i(t){t.parentElement.removeChild(t)}function o(t){return null!=t}function r(t){t.preventDefault()}function a(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function s(t,e){return Math.round(t/e)*e}function c(t,e){var n=t.getBoundingClientRect(),i=t.ownerDocument,o=i.documentElement,r=v(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(r.x=0),e?n.top+r.y-o.clientTop:n.left+r.x-o.clientLeft}function l(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function u(t,e,n){n>0&&(f(t,e),setTimeout((function(){g(t,e)}),n))}function d(t){return Math.max(Math.min(t,100),0)}function p(t){return Array.isArray(t)?t:[t]}function h(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function f(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function g(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function m(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function v(t){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop}}function b(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function y(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}function w(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(t,e){return 100/(e-t)}function S(t,e,n){return 100*e/(t[n+1]-t[n])}function E(t,e){return S(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function _(t,e){return e*(t[1]-t[0])/100+t[0]}function O(t,e){for(var n=1;t>=e[n];)n+=1;return n}function M(t,e,n){if(n>=t.slice(-1)[0])return 100;var i=O(n,t),o=t[i-1],r=t[i],a=e[i-1],s=e[i];return a+E([o,r],n)/x(a,s)}function P(t,e,n){if(n>=100)return t.slice(-1)[0];var i=O(n,e),o=t[i-1],r=t[i],a=e[i-1];return _([o,r],(n-a)*x(a,e[i]))}function z(t,e,n,i){if(100===i)return i;var o=O(i,t),r=t[o-1],a=t[o];return n?i-r>(a-r)/2?a:r:e[o-1]?t[o-1]+s(i-t[o-1],e[o-1]):i}var k,T;t.PipsMode=void 0,(T=t.PipsMode||(t.PipsMode={})).Range="range",T.Steps="steps",T.Positions="positions",T.Count="count",T.Values="values",t.PipsType=void 0,(k=t.PipsType||(t.PipsType={}))[k.None=-1]="None",k[k.NoValue=0]="NoValue",k[k.LargeValue=1]="LargeValue",k[k.SmallValue=2]="SmallValue";var A=function(){function t(t,e,n){var i;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=e;var o=[];for(Object.keys(t).forEach((function(e){o.push([p(t[e]),e])})),o.sort((function(t,e){return t[0][0]-e[0][0]})),i=0;i<o.length;i++)this.handleEntryPoint(o[i][1],o[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return t.prototype.getDistance=function(t){var e,n=[];for(e=0;e<this.xNumSteps.length-1;e++){var i=this.xNumSteps[e];if(i&&t/i%1!=0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");n[e]=S(this.xVal,t,e)}return n},t.prototype.getAbsoluteDistance=function(t,e,n){var i,o=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[o+1];)o++;else t===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);n||t!==this.xPct[o+1]||o++,null===e&&(e=[]);var r=1,a=e[o],s=0,c=0,l=0,u=0;for(i=n?(t-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):(this.xPct[o+1]-t)/(this.xPct[o+1]-this.xPct[o]);a>0;)s=this.xPct[o+1+u]-this.xPct[o+u],e[o+u]*r+100-100*i>100?(c=s*i,r=(a-100*i)/e[o+u],i=1):(c=e[o+u]*s/100*r,r=0),n?(l-=c,this.xPct.length+u>=1&&u--):(l+=c,this.xPct.length-u>=1&&u++),a=e[o+u]*r;return t+l},t.prototype.toStepping=function(t){return t=M(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return P(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=z(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,n){var i=O(t,this.xPct);return(100===t||e&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/n},t.prototype.getNearbySteps=function(t){var e=O(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(h);return Math.max.apply(null,t)},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var n;if(!l(n="min"===t?0:"max"===t?100:parseFloat(t))||!l(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(e[0]);var i=Number(e[1]);n?this.xSteps.push(!isNaN(i)&&i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=S([this.xVal[t],this.xVal[t+1]],e,0)/x(this.xPct[t],this.xPct[t+1]);var n=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=this.xVal[t]+this.xNumSteps[t]*i;this.xHighestCompleteStep[t]=o}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),C={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},D={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},q={tooltips:".__tooltips",aria:".__aria"};function j(t,e){if(!l(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function I(t,e){if(!l(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function R(t,e){if(!l(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function $(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");t.spectrum=new A(e,t.snap||!1,t.singleStep)}function L(t,e){if(e=p(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function N(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function F(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function B(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function V(t,e){var n,i=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)i.push(e);i.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=e}t.connect=i}function U(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function H(t,e){if(!l(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function W(t,e){if(!l(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function X(t,e){var n;if(!l(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!l(e[0])&&!l(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],o=t.spectrum.xVal[0];if(i/(t.spectrum.xVal[t.spectrum.xVal.length-1]-o)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Y(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function G(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,o=e.indexOf("fixed")>=0,r=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,s=e.indexOf("unconstrained")>=0;if(o){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");H(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||r,drag:i,fixed:o,snap:r,hover:a,unconstrained:s}}function Q(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var i=0;i<t.handles;i++)t.tooltips.push(e)}else{if((e=p(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function J(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function K(t,n){if(!e(n))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=n}function Z(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function tt(t,e){t.documentElement=e}function et(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function nt(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(n){t.cssClasses[n]=t.cssPrefix+e[n]}))):t.cssClasses=e}function it(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:C,format:C},n={step:{r:!1,t:j},keyboardPageMultiplier:{r:!1,t:I},keyboardDefaultStep:{r:!1,t:R},start:{r:!0,t:L},connect:{r:!0,t:V},direction:{r:!0,t:Y},snap:{r:!1,t:N},animate:{r:!1,t:F},animationDuration:{r:!1,t:B},range:{r:!0,t:$},orientation:{r:!1,t:U},margin:{r:!1,t:H},limit:{r:!1,t:W},padding:{r:!1,t:X},behaviour:{r:!0,t:G},ariaFormat:{r:!1,t:J},format:{r:!1,t:K},tooltips:{r:!1,t:Q},keyboardSupport:{r:!0,t:Z},documentElement:{r:!1,t:tt},cssPrefix:{r:!0,t:et},cssClasses:{r:!0,t:nt}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:D,keyboardPageMultiplier:5,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach((function(r){if(o(t[r])||void 0!==i[r])n[r].t(e,o(t[r])?t[r]:i[r]);else if(n[r].r)throw new Error("noUiSlider: '"+r+"' is required.")})),e.pips=t.pips;var r=document.createElement("div"),a=void 0!==r.style.msTransform,s=void 0!==r.style.transform;e.transformRule=s?"transform":a?"msTransform":"webkitTransform";var c=[["left","top"],["right","bottom"]];return e.style=c[e.dir][e.ort],e}function ot(e,n,s){var l,h,x,S,E,_=b(),O=w()&&y(),M=e,P=n.spectrum,z=[],k=[],T=[],A=0,C={},D=e.ownerDocument,j=n.documentElement||D.documentElement,I=D.body,R="rtl"===D.dir||1===n.ort?0:100;function $(t,e){var n=D.createElement("div");return e&&f(n,e),t.appendChild(n),n}function L(t,e){var i=$(t,n.cssClasses.origin),o=$(i,n.cssClasses.handle);return $(o,n.cssClasses.touchArea),o.setAttribute("data-handle",String(e)),n.keyboardSupport&&(o.setAttribute("tabindex","0"),o.addEventListener("keydown",(function(t){return ht(t,e)}))),o.setAttribute("role","slider"),o.setAttribute("aria-orientation",n.ort?"vertical":"horizontal"),0===e?f(o,n.cssClasses.handleLower):e===n.handles-1&&f(o,n.cssClasses.handleUpper),i}function N(t,e){return!!e&&$(t,n.cssClasses.connect)}function F(t,e){var i=$(e,n.cssClasses.connects);h=[],(x=[]).push(N(i,t[0]));for(var o=0;o<n.handles;o++)h.push(L(e,o)),T[o]=o,x.push(N(i,t[o+1]))}function B(t){return f(t,n.cssClasses.target),0===n.dir?f(t,n.cssClasses.ltr):f(t,n.cssClasses.rtl),0===n.ort?f(t,n.cssClasses.horizontal):f(t,n.cssClasses.vertical),f(t,"rtl"===getComputedStyle(t).direction?n.cssClasses.textDirectionRtl:n.cssClasses.textDirectionLtr),$(t,n.cssClasses.base)}function V(t,e){return!(!n.tooltips||!n.tooltips[e])&&$(t.firstChild,n.cssClasses.tooltip)}function U(){return M.hasAttribute("disabled")}function H(t){return h[t].hasAttribute("disabled")}function W(){E&&(vt("update"+q.tooltips),E.forEach((function(t){t&&i(t)})),E=null)}function X(){W(),E=h.map(V),gt("update"+q.tooltips,(function(t,e,i){if(E&&n.tooltips&&!1!==E[e]){var o=t[e];!0!==n.tooltips[e]&&(o=n.tooltips[e].to(i[e])),E[e].innerHTML=o}}))}function Y(){vt("update"+q.aria),gt("update"+q.aria,(function(t,e,i,o,r){T.forEach((function(t){var e=h[t],o=yt(k,t,0,!0,!0,!0),a=yt(k,t,100,!0,!0,!0),s=r[t],c=String(n.ariaFormat.to(i[t]));o=P.fromStepping(o).toFixed(1),a=P.fromStepping(a).toFixed(1),s=P.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",o),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",c)}))}))}function G(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return P.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var n=e.values-1,i=100/n,o=[];n--;)o[n]=n*i;return o.push(100),Q(o,e.stepped)}return e.mode===t.PipsMode.Positions?Q(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return P.fromStepping(P.getStep(P.toStepping(t)))})):e.values:[]}function Q(t,e){return t.map((function(t){return P.fromStepping(e?P.getStep(t):t)}))}function J(e){function n(t,e){return Number((t+e).toFixed(7))}var i=G(e),o={},r=P.xVal[0],s=P.xVal[P.xVal.length-1],c=!1,l=!1,u=0;return(i=a(i.slice().sort((function(t,e){return t-e}))))[0]!==r&&(i.unshift(r),c=!0),i[i.length-1]!==s&&(i.push(s),l=!0),i.forEach((function(r,a){var s,d,p,h,f,g,m,v,b,y,w=r,x=i[a+1],S=e.mode===t.PipsMode.Steps;for(S&&(s=P.xNumSteps[a]),s||(s=x-w),void 0===x&&(x=w),s=Math.max(s,1e-7),d=w;d<=x;d=n(d,s)){for(v=(f=(h=P.toStepping(d))-u)/(e.density||1),y=f/(b=Math.round(v)),p=1;p<=b;p+=1)o[(g=u+p*y).toFixed(5)]=[P.fromStepping(g),0];m=i.indexOf(d)>-1?t.PipsType.LargeValue:S?t.PipsType.SmallValue:t.PipsType.NoValue,!a&&c&&d!==x&&(m=0),d===x&&l||(o[h.toFixed(5)]=[d,m]),u=h}})),o}function K(e,i,o){var r,a,s=D.createElement("div"),c=((r={})[t.PipsType.None]="",r[t.PipsType.NoValue]=n.cssClasses.valueNormal,r[t.PipsType.LargeValue]=n.cssClasses.valueLarge,r[t.PipsType.SmallValue]=n.cssClasses.valueSub,r),l=((a={})[t.PipsType.None]="",a[t.PipsType.NoValue]=n.cssClasses.markerNormal,a[t.PipsType.LargeValue]=n.cssClasses.markerLarge,a[t.PipsType.SmallValue]=n.cssClasses.markerSub,a),u=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical],d=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];function p(t,e){var i=e===n.cssClasses.value,o=i?c:l;return e+" "+(i?u:d)[n.ort]+" "+o[t]}function h(e,r,a){if((a=i?i(r,a):a)!==t.PipsType.None){var c=$(s,!1);c.className=p(a,n.cssClasses.marker),c.style[n.style]=e+"%",a>t.PipsType.NoValue&&((c=$(s,!1)).className=p(a,n.cssClasses.value),c.setAttribute("data-value",String(r)),c.style[n.style]=e+"%",c.innerHTML=String(o.to(r)))}}return f(s,n.cssClasses.pips),f(s,0===n.ort?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical),Object.keys(e).forEach((function(t){h(t,e[t][0],e[t][1])})),s}function Z(){S&&(i(S),S=null)}function tt(t){Z();var e=J(t),n=t.filter,i=t.format||{to:function(t){return String(Math.round(t))}};return S=M.appendChild(K(e,n,i))}function et(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][n.ort];return 0===n.ort?t.width||l[e]:t.height||l[e]}function nt(t,e,i,o){var r=function(r){var a=ot(r,o.pageOffset,o.target||e);return!!a&&!(U()&&!o.doNotReject)&&!(m(M,n.cssClasses.tap)&&!o.doNotReject)&&!(t===_.start&&void 0!==a.buttons&&a.buttons>1)&&(!o.hover||!a.buttons)&&(O||a.preventDefault(),a.calcPoint=a.points[n.ort],void i(a,o))},a=[];return t.split(" ").forEach((function(t){e.addEventListener(t,r,!!O&&{passive:!0}),a.push([t,r])})),a}function ot(t,e,n){var i=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),r=0===t.type.indexOf("pointer"),a=0,s=0;if(0===t.type.indexOf("MSPointer")&&(r=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(i){var c=function(e){var i=e.target;return i===n||n.contains(i)||t.composed&&t.composedPath().shift()===n};if("touchstart"===t.type){var l=Array.prototype.filter.call(t.touches,c);if(l.length>1)return!1;a=l[0].pageX,s=l[0].pageY}else{var u=Array.prototype.find.call(t.changedTouches,c);if(!u)return!1;a=u.pageX,s=u.pageY}}return e=e||v(D),(o||r)&&(a=t.clientX+e.x,s=t.clientY+e.y),t.pageOffset=e,t.points=[a,s],t.cursor=o||r,t}function rt(t){var e=100*(t-c(l,n.ort))/et();return e=d(e),n.dir?100-e:e}function at(t){var e=100,n=!1;return h.forEach((function(i,o){if(!H(o)){var r=k[o],a=Math.abs(r-t);(a<e||a<=e&&t>r||100===a&&100===e)&&(n=o,e=a)}})),n}function st(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&lt(t,e)}function ct(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return lt(t,e);var i=(n.dir?-1:1)*(t.calcPoint-e.startCalcPoint);xt(i>0,100*i/e.baseSize,e.locations,e.handleNumbers,e.connect)}function lt(t,e){e.handle&&(g(e.handle,n.cssClasses.active),A-=1),e.listeners.forEach((function(t){j.removeEventListener(t[0],t[1])})),0===A&&(g(M,n.cssClasses.drag),_t(),t.cursor&&(I.style.cursor="",I.removeEventListener("selectstart",r))),e.handleNumbers.forEach((function(t){bt("change",t),bt("set",t),bt("end",t)}))}function ut(t,e){if(!e.handleNumbers.some(H)){var i;1===e.handleNumbers.length&&(i=h[e.handleNumbers[0]].children[0],A+=1,f(i,n.cssClasses.active)),t.stopPropagation();var o=[],a=nt(_.move,j,ct,{target:t.target,handle:i,connect:e.connect,listeners:o,startCalcPoint:t.calcPoint,baseSize:et(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:k.slice()}),s=nt(_.end,j,lt,{target:t.target,handle:i,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers}),c=nt("mouseout",j,st,{target:t.target,handle:i,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers});o.push.apply(o,a.concat(s,c)),t.cursor&&(I.style.cursor=getComputedStyle(t.target).cursor,h.length>1&&f(M,n.cssClasses.drag),I.addEventListener("selectstart",r,!1)),e.handleNumbers.forEach((function(t){bt("start",t)}))}}function dt(t){t.stopPropagation();var e=rt(t.calcPoint),i=at(e);!1!==i&&(n.events.snap||u(M,n.cssClasses.tap,n.animationDuration),Ot(i,e,!0,!0),_t(),bt("slide",i,!0),bt("update",i,!0),bt("change",i,!0),bt("set",i,!0),n.events.snap&&ut(t,{handleNumbers:[i]}))}function pt(t){var e=rt(t.calcPoint),n=P.getStep(e),i=P.fromStepping(n);Object.keys(C).forEach((function(t){"hover"===t.split(".")[0]&&C[t].forEach((function(t){t.call(Rt,i)}))}))}function ht(t,e){if(U()||H(e))return!1;var i=["Left","Right"],o=["Down","Up"],r=["PageDown","PageUp"],a=["Home","End"];n.dir&&!n.ort?i.reverse():n.ort&&!n.dir&&(o.reverse(),r.reverse());var s,c=t.key.replace("Arrow",""),l=c===r[0],u=c===r[1],d=c===o[0]||c===i[0]||l,p=c===o[1]||c===i[1]||u,h=c===a[0],f=c===a[1];if(!(d||p||h||f))return!0;if(t.preventDefault(),p||d){var g=n.keyboardPageMultiplier,m=d?0:1,v=Dt(e)[m];if(null===v)return!1;!1===v&&(v=P.getDefaultStep(k[e],d,n.keyboardDefaultStep)),(u||l)&&(v*=g),v=Math.max(v,1e-7),v*=d?-1:1,s=z[e]+v}else s=f?n.spectrum.xVal[n.spectrum.xVal.length-1]:n.spectrum.xVal[0];return Ot(e,P.toStepping(s),!0,!0),bt("slide",e),bt("update",e),bt("change",e),bt("set",e),!1}function ft(t){t.fixed||h.forEach((function(t,e){nt(_.start,t.children[0],ut,{handleNumbers:[e]})})),t.tap&&nt(_.start,l,dt,{}),t.hover&&nt(_.move,l,pt,{hover:!0}),t.drag&&x.forEach((function(e,i){if(!1!==e&&0!==i&&i!==x.length-1){var o=h[i-1],r=h[i],a=[e];f(e,n.cssClasses.draggable),t.fixed&&(a.push(o.children[0]),a.push(r.children[0])),a.forEach((function(t){nt(_.start,t,ut,{handles:[o,r],handleNumbers:[i-1,i],connect:e})}))}}))}function gt(t,e){C[t]=C[t]||[],C[t].push(e),"update"===t.split(".")[0]&&h.forEach((function(t,e){bt("update",e)}))}function mt(t){return t===q.aria||t===q.tooltips}function vt(t){var e=t&&t.split(".")[0],n=e?t.substring(e.length):t;Object.keys(C).forEach((function(t){var i=t.split(".")[0],o=t.substring(i.length);e&&e!==i||n&&n!==o||mt(o)&&n!==o||delete C[t]}))}function bt(t,e,i){Object.keys(C).forEach((function(o){var r=o.split(".")[0];t===r&&C[o].forEach((function(t){t.call(Rt,z.map(n.format.to),e,z.slice(),i||!1,k.slice(),Rt)}))}))}function yt(t,e,i,o,r,a){var s;return h.length>1&&!n.events.unconstrained&&(o&&e>0&&(s=P.getAbsoluteDistance(t[e-1],n.margin,!1),i=Math.max(i,s)),r&&e<h.length-1&&(s=P.getAbsoluteDistance(t[e+1],n.margin,!0),i=Math.min(i,s))),h.length>1&&n.limit&&(o&&e>0&&(s=P.getAbsoluteDistance(t[e-1],n.limit,!1),i=Math.min(i,s)),r&&e<h.length-1&&(s=P.getAbsoluteDistance(t[e+1],n.limit,!0),i=Math.max(i,s))),n.padding&&(0===e&&(s=P.getAbsoluteDistance(0,n.padding[0],!1),i=Math.max(i,s)),e===h.length-1&&(s=P.getAbsoluteDistance(100,n.padding[1],!0),i=Math.min(i,s))),!((i=d(i=P.getStep(i)))===t[e]&&!a)&&i}function wt(t,e){var i=n.ort;return(i?e:t)+", "+(i?t:e)}function xt(t,e,n,i,o){var r=n.slice(),a=i[0],s=[!t,t],c=[t,!t];i=i.slice(),t&&i.reverse(),i.length>1?i.forEach((function(t,n){var i=yt(r,t,r[t]+e,s[n],c[n],!1);!1===i?e=0:(e=i-r[t],r[t]=i)})):s=c=[!0];var l=!1;i.forEach((function(t,i){l=Ot(t,n[t]+e,s[i],c[i])||l})),l&&(i.forEach((function(t){bt("update",t),bt("slide",t)})),null!=o&&bt("drag",a))}function St(t,e){return n.dir?100-t-e:t}function Et(t,e){k[t]=e,z[t]=P.fromStepping(e);var i="translate("+wt(10*(St(e,0)-R)+"%","0")+")";h[t].style[n.transformRule]=i,Mt(t),Mt(t+1)}function _t(){T.forEach((function(t){var e=k[t]>50?-1:1,n=3+(h.length+e*t);h[t].style.zIndex=String(n)}))}function Ot(t,e,n,i,o){return o||(e=yt(k,t,e,n,i,!1)),!1!==e&&(Et(t,e),!0)}function Mt(t){if(x[t]){var e=0,i=100;0!==t&&(e=k[t-1]),t!==x.length-1&&(i=k[t]);var o=i-e,r="translate("+wt(St(e,o)+"%","0")+")",a="scale("+wt(o/100,"1")+")";x[t].style[n.transformRule]=r+" "+a}}function Pt(t,e){return null===t||!1===t||void 0===t?k[e]:("number"==typeof t&&(t=String(t)),!1!==(t=n.format.from(t))&&(t=P.toStepping(t)),!1===t||isNaN(t)?k[e]:t)}function zt(t,e,i){var o=p(t),r=void 0===k[0];e=void 0===e||e,n.animate&&!r&&u(M,n.cssClasses.tap,n.animationDuration),T.forEach((function(t){Ot(t,Pt(o[t],t),!0,!1,i)}));for(var a=1===T.length?0:1;a<T.length;++a)T.forEach((function(t){Ot(t,k[t],!0,!0,i)}));_t(),T.forEach((function(t){bt("update",t),null!==o[t]&&e&&bt("set",t)}))}function kt(t){zt(n.start,t)}function Tt(t,e,n,i){if(!((t=Number(t))>=0&&t<T.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Ot(t,Pt(e,t),!0,!0,i),bt("update",t),n&&bt("set",t)}function At(t){if(void 0===t&&(t=!1),t)return 1===z.length?z[0]:z.slice(0);var e=z.map(n.format.to);return 1===e.length?e[0]:e}function Ct(){for(vt(q.aria),vt(q.tooltips),Object.keys(n.cssClasses).forEach((function(t){g(M,n.cssClasses[t])}));M.firstChild;)M.removeChild(M.firstChild);delete M.noUiSlider}function Dt(t){var e=k[t],i=P.getNearbySteps(e),o=z[t],r=i.thisStep.step,a=null;if(n.snap)return[o-i.stepBefore.startValue||null,i.stepAfter.startValue-o||null];!1!==r&&o+r>i.stepAfter.startValue&&(r=i.stepAfter.startValue-o),a=o>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&o-i.stepBefore.highestStep,100===e?r=null:0===e&&(a=null);var s=P.countStepDecimals();return null!==r&&!1!==r&&(r=Number(r.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,r]}function qt(){return T.map(Dt)}function jt(t,e){var i=At(),r=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];r.forEach((function(e){void 0!==t[e]&&(s[e]=t[e])}));var a=it(s);r.forEach((function(e){void 0!==t[e]&&(n[e]=a[e])})),P=a.spectrum,n.margin=a.margin,n.limit=a.limit,n.padding=a.padding,n.pips?tt(n.pips):Z(),n.tooltips?X():W(),k=[],zt(o(t.start)?t.start:i,e)}function It(){l=B(M),F(n.connect,l),ft(n.events),zt(n.start),n.pips&&tt(n.pips),n.tooltips&&X(),Y()}It();var Rt={destroy:Ct,steps:qt,on:gt,off:vt,get:At,set:zt,setHandle:Tt,reset:kt,__moveHandles:function(t,e,n){xt(t,e,k,n)},options:s,updateOptions:jt,target:M,removePips:Z,removeTooltips:W,getTooltips:function(){return E},getOrigins:function(){return h},pips:tt};return Rt}function rt(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=ot(t,it(e),e);return t.noUiSlider=n,n}var at={__spectrum:A,cssClasses:D,create:rt};t.create=rt,t.cssClasses=D,t.default=at,Object.defineProperty(t,"__esModule",{value:!0})}(e)})),V=v(B),U=B.PipsMode,H="top",W="bottom",X="right",Y="left",G="auto",Q=[H,W,X,Y],J="start",K="end",Z="viewport",tt="popper",et=Q.reduce((function(t,e){return t.concat([e+"-"+J,e+"-"+K])}),[]),nt=[].concat(Q,[G]).reduce((function(t,e){return t.concat([e,e+"-"+J,e+"-"+K])}),[]),it=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ot(t){return t?(t.nodeName||"").toLowerCase():null}function rt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function at(t){return t instanceof rt(t).Element||t instanceof Element}function st(t){return t instanceof rt(t).HTMLElement||t instanceof HTMLElement}function ct(t){return"undefined"!=typeof ShadowRoot&&(t instanceof rt(t).ShadowRoot||t instanceof ShadowRoot)}var lt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},o=e.elements[t];st(o)&&ot(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],o=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});st(i)&&ot(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(t){i.removeAttribute(t)})))}))}},requires:["computeStyles"]};function ut(t){return t.split("-")[0]}function dt(t,e){var n=t.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function pt(t){var e=dt(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function ht(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&ct(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ft(t){return rt(t).getComputedStyle(t)}function gt(t){return["table","td","th"].indexOf(ot(t))>=0}function mt(t){return((at(t)?t.ownerDocument:t.document)||window.document).documentElement}function vt(t){return"html"===ot(t)?t:t.assignedSlot||t.parentNode||(ct(t)?t.host:null)||mt(t)}function bt(t){return st(t)&&"fixed"!==ft(t).position?t.offsetParent:null}function yt(t){for(var e=rt(t),n=bt(t);n&&gt(n)&&"static"===ft(n).position;)n=bt(n);return n&&("html"===ot(n)||"body"===ot(n)&&"static"===ft(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&st(t)&&"fixed"===ft(t).position)return null;for(var n=vt(t);st(n)&&["html","body"].indexOf(ot(n))<0;){var i=ft(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||e&&"filter"===i.willChange||e&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(t)||e}function wt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var xt=Math.max,St=Math.min,Et=Math.round;function _t(t,e,n){return xt(t,St(e,n))}function Ot(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Mt(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var Pt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,o=t.options,r=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ut(n.placement),c=wt(s),l=[Y,X].indexOf(s)>=0?"height":"width";if(r&&a){var u=function(t,e){return Ot("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Mt(t,Q))}(o.padding,n),d=pt(r),p="y"===c?H:Y,h="y"===c?W:X,f=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],g=a[c]-n.rects.reference[c],m=yt(r),v=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,b=f/2-g/2,y=u[p],w=v-d[l]-u[h],x=v/2-d[l]/2+b,S=_t(y,x,w),E=c;n.modifiersData[i]=((e={})[E]=S,e.centerOffset=S-x,e)}},effect:function(t){var e=t.state,n=t.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&ht(e.elements.popper,i)&&(e.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function zt(t){return t.split("-")[1]}var kt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Tt(t){var e,n=t.popper,i=t.popperRect,o=t.placement,r=t.variation,a=t.offsets,s=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,d=!0===u?function(t){var e=t.x,n=t.y,i=window.devicePixelRatio||1;return{x:Et(Et(e*i)/i)||0,y:Et(Et(n*i)/i)||0}}(a):"function"==typeof u?u(a):a,p=d.x,h=void 0===p?0:p,f=d.y,g=void 0===f?0:f,m=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),b=Y,y=H,w=window;if(l){var x=yt(n),S="clientHeight",E="clientWidth";x===rt(n)&&"static"!==ft(x=mt(n)).position&&"absolute"===s&&(S="scrollHeight",E="scrollWidth"),x=x,o!==H&&(o!==Y&&o!==X||r!==K)||(y=W,g-=x[S]-i.height,g*=c?1:-1),o!==Y&&(o!==H&&o!==W||r!==K)||(b=X,h-=x[E]-i.width,h*=c?1:-1)}var _,O=Object.assign({position:s},l&&kt);return c?Object.assign({},O,((_={})[y]=v?"0":"",_[b]=m?"0":"",_.transform=(w.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",_)):Object.assign({},O,((e={})[y]=v?g+"px":"",e[b]=m?h+"px":"",e.transform="",e))}var At={passive:!0};var Ct={left:"right",right:"left",bottom:"top",top:"bottom"};function Dt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Ct[t]}))}var qt={start:"end",end:"start"};function jt(t){return t.replace(/start|end/g,(function(t){return qt[t]}))}function It(t){var e=rt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Rt(t){return dt(mt(t)).left+It(t).scrollLeft}function $t(t){var e=ft(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function Lt(t){return["html","body","#document"].indexOf(ot(t))>=0?t.ownerDocument.body:st(t)&&$t(t)?t:Lt(vt(t))}function Nt(t,e){var n;void 0===e&&(e=[]);var i=Lt(t),o=i===(null==(n=t.ownerDocument)?void 0:n.body),r=rt(i),a=o?[r].concat(r.visualViewport||[],$t(i)?i:[]):i,s=e.concat(a);return o?s:s.concat(Nt(vt(a)))}function Ft(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Bt(t,e){return e===Z?Ft(function(t){var e=rt(t),n=mt(t),i=e.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,s=0;return i&&(o=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=i.offsetLeft,s=i.offsetTop)),{width:o,height:r,x:a+Rt(t),y:s}}(t)):st(e)?function(t){var e=dt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ft(function(t){var e,n=mt(t),i=It(t),o=null==(e=t.ownerDocument)?void 0:e.body,r=xt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=xt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+Rt(t),c=-i.scrollTop;return"rtl"===ft(o||n).direction&&(s+=xt(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:a,x:s,y:c}}(mt(t)))}function Vt(t,e,n){var i="clippingParents"===e?function(t){var e=Nt(vt(t)),n=["absolute","fixed"].indexOf(ft(t).position)>=0&&st(t)?yt(t):t;return at(n)?e.filter((function(t){return at(t)&&ht(t,n)&&"body"!==ot(t)})):[]}(t):[].concat(e),o=[].concat(i,[n]),r=o[0],a=o.reduce((function(e,n){var i=Bt(t,n);return e.top=xt(i.top,e.top),e.right=St(i.right,e.right),e.bottom=St(i.bottom,e.bottom),e.left=xt(i.left,e.left),e}),Bt(t,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ut(t){var e,n=t.reference,i=t.element,o=t.placement,r=o?ut(o):null,a=o?zt(o):null,s=n.x+n.width/2-i.width/2,c=n.y+n.height/2-i.height/2;switch(r){case H:e={x:s,y:n.y-i.height};break;case W:e={x:s,y:n.y+n.height};break;case X:e={x:n.x+n.width,y:c};break;case Y:e={x:n.x-i.width,y:c};break;default:e={x:n.x,y:n.y}}var l=r?wt(r):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case J:e[l]=e[l]-(n[u]/2-i[u]/2);break;case K:e[l]=e[l]+(n[u]/2-i[u]/2)}}return e}function Ht(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=void 0===i?t.placement:i,r=n.boundary,a=void 0===r?"clippingParents":r,s=n.rootBoundary,c=void 0===s?Z:s,l=n.elementContext,u=void 0===l?tt:l,d=n.altBoundary,p=void 0!==d&&d,h=n.padding,f=void 0===h?0:h,g=Ot("number"!=typeof f?f:Mt(f,Q)),m=u===tt?"reference":tt,v=t.rects.popper,b=t.elements[p?m:u],y=Vt(at(b)?b:b.contextElement||mt(t.elements.popper),a,c),w=dt(t.elements.reference),x=Ut({reference:w,element:v,strategy:"absolute",placement:o}),S=Ft(Object.assign({},v,x)),E=u===tt?S:w,_={top:y.top-E.top+g.top,bottom:E.bottom-y.bottom+g.bottom,left:y.left-E.left+g.left,right:E.right-y.right+g.right},O=t.modifiersData.offset;if(u===tt&&O){var M=O[o];Object.keys(_).forEach((function(t){var e=[X,W].indexOf(t)>=0?1:-1,n=[H,W].indexOf(t)>=0?"y":"x";_[t]+=M[n]*e}))}return _}function Wt(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=n.boundary,r=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?nt:c,u=zt(i),d=u?s?et:et.filter((function(t){return zt(t)===u})):Q,p=d.filter((function(t){return l.indexOf(t)>=0}));0===p.length&&(p=d);var h=p.reduce((function(e,n){return e[n]=Ht(t,{placement:n,boundary:o,rootBoundary:r,padding:a})[ut(n)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}var Xt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var o=n.mainAxis,r=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,p=n.altBoundary,h=n.flipVariations,f=void 0===h||h,g=n.allowedAutoPlacements,m=e.options.placement,v=ut(m),b=c||(v===m||!f?[Dt(m)]:function(t){if(ut(t)===G)return[];var e=Dt(t);return[jt(t),e,jt(e)]}(m)),y=[m].concat(b).reduce((function(t,n){return t.concat(ut(n)===G?Wt(e,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:f,allowedAutoPlacements:g}):n)}),[]),w=e.rects.reference,x=e.rects.popper,S=new Map,E=!0,_=y[0],O=0;O<y.length;O++){var M=y[O],P=ut(M),z=zt(M)===J,k=[H,W].indexOf(P)>=0,T=k?"width":"height",A=Ht(e,{placement:M,boundary:u,rootBoundary:d,altBoundary:p,padding:l}),C=k?z?X:Y:z?W:H;w[T]>x[T]&&(C=Dt(C));var D=Dt(C),q=[];if(r&&q.push(A[P]<=0),s&&q.push(A[C]<=0,A[D]<=0),q.every((function(t){return t}))){_=M,E=!1;break}S.set(M,q)}if(E)for(var j=function(t){var e=y.find((function(e){var n=S.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return _=e,"break"},I=f?3:1;I>0;I--){if("break"===j(I))break}e.placement!==_&&(e.modifiersData[i]._skip=!0,e.placement=_,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Yt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Gt(t){return[H,X,W,Y].some((function(e){return t[e]>=0}))}var Qt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,o=n.offset,r=void 0===o?[0,0]:o,a=nt.reduce((function(t,n){return t[n]=function(t,e,n){var i=ut(t),o=[Y,H].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},e,{placement:t})):n,a=r[0],s=r[1];return a=a||0,s=(s||0)*o,[Y,X].indexOf(i)>=0?{x:s,y:a}:{x:a,y:s}}(n,e.rects,r),t}),{}),s=a[e.placement],c=s.x,l=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[i]=a}};var Jt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,i=t.name,o=n.mainAxis,r=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,p=n.tether,h=void 0===p||p,f=n.tetherOffset,g=void 0===f?0:f,m=Ht(e,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),v=ut(e.placement),b=zt(e.placement),y=!b,w=wt(v),x="x"===w?"y":"x",S=e.modifiersData.popperOffsets,E=e.rects.reference,_=e.rects.popper,O="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,M={x:0,y:0};if(S){if(r||s){var P="y"===w?H:Y,z="y"===w?W:X,k="y"===w?"height":"width",T=S[w],A=S[w]+m[P],C=S[w]-m[z],D=h?-_[k]/2:0,q=b===J?E[k]:_[k],j=b===J?-_[k]:-E[k],I=e.elements.arrow,R=h&&I?pt(I):{width:0,height:0},$=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},L=$[P],N=$[z],F=_t(0,E[k],R[k]),B=y?E[k]/2-D-F-L-O:q-F-L-O,V=y?-E[k]/2+D+F+N+O:j+F+N+O,U=e.elements.arrow&&yt(e.elements.arrow),G=U?"y"===w?U.clientTop||0:U.clientLeft||0:0,Q=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,K=S[w]+B-Q-G,Z=S[w]+V-Q;if(r){var tt=_t(h?St(A,K):A,T,h?xt(C,Z):C);S[w]=tt,M[w]=tt-T}if(s){var et="x"===w?H:Y,nt="x"===w?W:X,it=S[x],ot=it+m[et],rt=it-m[nt],at=_t(h?St(ot,K):ot,it,h?xt(rt,Z):rt);S[x]=at,M[x]=at-it}}e.modifiersData[i]=M}},requiresIfExists:["offset"]};function Kt(t,e,n){void 0===n&&(n=!1);var i=st(e);st(e)&&function(t){var e=t.getBoundingClientRect(),n=e.width/t.offsetWidth||1,i=e.height/t.offsetHeight||1}(e);var o,r=mt(e),a=dt(t),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==ot(e)||$t(r))&&(s=(o=e)!==rt(o)&&st(o)?function(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}(o):It(o)),st(e)?((c=dt(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Rt(r))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Zt(t){var e=new Map,n=new Set,i=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var i=e.get(t);i&&o(i)}})),i.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),i}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ee(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ne(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,o=e.defaultOptions,r=void 0===o?te:o;return function(t,e,n){void 0===n&&(n=r);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;d(),s.options=Object.assign({},r,s.options,o),s.scrollParents={reference:at(t)?Nt(t):t.contextElement?Nt(t.contextElement):[],popper:Nt(e)};var a=function(t){var e=Zt(t);return it.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(i,s.options.modifiers)));return s.orderedModifiers=a.filter((function(t){return t.enabled})),s.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var r=o({state:s,name:e,instance:u,options:i}),a=function(){};c.push(r||a)}})),u.update()},forceUpdate:function(){if(!l){var t=s.elements,e=t.reference,n=t.popper;if(ee(e,n)){s.rects={reference:Kt(e,yt(n),"fixed"===s.options.strategy),popper:pt(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(t){return s.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<s.orderedModifiers.length;i++)if(!0!==s.reset){var o=s.orderedModifiers[i],r=o.fn,a=o.options,c=void 0===a?{}:a,d=o.name;"function"==typeof r&&(s=r({state:s,options:c,name:d,instance:u})||s)}else s.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(t){u.forceUpdate(),t(s)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(o())}))}))),a}),destroy:function(){d(),l=!0}};if(!ee(t,e))return u;function d(){c.forEach((function(t){return t()})),c=[]}return u.setOptions(n).then((function(t){!l&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}var ie=ne({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,o=i.scroll,r=void 0===o||o,a=i.resize,s=void 0===a||a,c=rt(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach((function(t){t.addEventListener("scroll",n.update,At)})),s&&c.addEventListener("resize",n.update,At),function(){r&&l.forEach((function(t){t.removeEventListener("scroll",n.update,At)})),s&&c.removeEventListener("resize",n.update,At)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=Ut({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,a=void 0===r||r,s=n.roundOffsets,c=void 0===s||s,l={placement:ut(e.placement),variation:zt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Tt(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Tt(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},lt,Qt,Xt,Jt,Pt,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,i=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,a=Ht(e,{elementContext:"reference"}),s=Ht(e,{altBoundary:!0}),c=Yt(a,i),l=Yt(s,o,r),u=Gt(c),d=Gt(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}}]}),oe='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',re="tippy-content",ae="tippy-arrow",se="tippy-svg-arrow",ce={passive:!0,capture:!0},le=function(){return document.body};function ue(t,e,n){if(Array.isArray(t)){var i=t[e];return null==i?Array.isArray(n)?n[e]:n:i}return t}function de(t,e){var n={}.toString.call(t);return 0===n.indexOf("[object")&&n.indexOf(e+"]")>-1}function pe(t,e){return"function"==typeof t?t.apply(void 0,e):t}function he(t,e){return 0===e?t:function(i){clearTimeout(n),n=setTimeout((function(){t(i)}),e)};var n}function fe(t){return[].concat(t)}function ge(t,e){-1===t.indexOf(e)&&t.push(e)}function me(t){return[].slice.call(t)}function ve(){return document.createElement("div")}function be(t){return["Element","Fragment"].some((function(e){return de(t,e)}))}function ye(t){return be(t)?[t]:function(t){return de(t,"NodeList")}(t)?me(t):Array.isArray(t)?t:me(document.querySelectorAll(t))}function we(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function xe(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function Se(t,e,n){var i=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[i](e,n)}))}function Ee(t,e){for(var n=e;n;){var i;if(t.contains(n))return!0;n=null==(i=null==n.getRootNode?void 0:n.getRootNode())?void 0:i.host}return!1}var _e={isTouch:!1},Oe=0;function Me(){_e.isTouch||(_e.isTouch=!0,window.performance&&document.addEventListener("mousemove",Pe))}function Pe(){var t=performance.now();t-Oe<20&&(_e.isTouch=!1,document.removeEventListener("mousemove",Pe)),Oe=t}function ze(){var t,e=document.activeElement;if((t=e)&&t._tippy&&t._tippy.reference===t){var n=e._tippy;e.blur&&!n.state.isVisible&&e.blur()}}var ke=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,Te=Object.assign({appendTo:le,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Ae=Object.keys(Te);function Ce(t){var e=(t.plugins||[]).reduce((function(e,n){var i,o=n.name,r=n.defaultValue;o&&(e[o]=void 0!==t[o]?t[o]:null!=(i=Te[o])?i:r);return e}),{});return Object.assign({},t,{},e)}function De(t,e){var n=Object.assign({},e,{content:pe(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(Ce(Object.assign({},Te,{plugins:e}))):Ae).reduce((function(e,n){var i=(t.getAttribute("data-tippy-"+n)||"").trim();if(!i)return e;if("content"===n)e[n]=i;else try{e[n]=JSON.parse(i)}catch(t){e[n]=i}return e}),{})}(t,e.plugins));return n.aria=Object.assign({},Te.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?e.interactive:n.aria.expanded,content:"auto"===n.aria.content?e.interactive?null:"describedby":n.aria.content},n}function qe(t,e){t.innerHTML=e}function je(t){var e=ve();return!0===t?e.className=ae:(e.className=se,be(t)?e.appendChild(t):qe(e,t)),e}function Ie(t,e){be(e.content)?(qe(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?qe(t,e.content):t.textContent=e.content)}function Re(t){var e=t.firstElementChild,n=me(e.children);return{box:e,content:n.find((function(t){return t.classList.contains(re)})),arrow:n.find((function(t){return t.classList.contains(ae)||t.classList.contains(se)})),backdrop:n.find((function(t){return t.classList.contains("tippy-backdrop")}))}}function $e(t){var e=ve(),n=ve();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var i=ve();function o(n,i){var o=Re(e),r=o.box,a=o.content,s=o.arrow;i.theme?r.setAttribute("data-theme",i.theme):r.removeAttribute("data-theme"),"string"==typeof i.animation?r.setAttribute("data-animation",i.animation):r.removeAttribute("data-animation"),i.inertia?r.setAttribute("data-inertia",""):r.removeAttribute("data-inertia"),r.style.maxWidth="number"==typeof i.maxWidth?i.maxWidth+"px":i.maxWidth,i.role?r.setAttribute("role",i.role):r.removeAttribute("role"),n.content===i.content&&n.allowHTML===i.allowHTML||Ie(a,t.props),i.arrow?s?n.arrow!==i.arrow&&(r.removeChild(s),r.appendChild(je(i.arrow))):r.appendChild(je(i.arrow)):s&&r.removeChild(s)}return i.className=re,i.setAttribute("data-state","hidden"),Ie(i,t.props),e.appendChild(n),n.appendChild(i),o(t.props,t.props),{popper:e,onUpdate:o}}$e.$$tippy=!0;var Le=1,Ne=[],Fe=[];function Be(t,e){var n,i,o,r,a,s,c,l,u,d=De(t,Object.assign({},Te,{},Ce((n=e,Object.keys(n).reduce((function(t,e){return void 0!==n[e]&&(t[e]=n[e]),t}),{}))))),p=!1,h=!1,f=!1,g=!1,m=[],v=he(Y,d.interactiveDebounce),b=Le++,y=(u=d.plugins).filter((function(t,e){return u.indexOf(t)===e})),w={id:b,reference:t,popper:ve(),popperInstance:null,props:d,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(i),clearTimeout(o),cancelAnimationFrame(r)},setProps:function(e){if(w.state.isDestroyed)return;q("onBeforeUpdate",[w,e]),W();var n=w.props,i=De(t,Object.assign({},w.props,{},e,{ignoreAttributes:!0}));w.props=i,H(),n.interactiveDebounce!==i.interactiveDebounce&&(R(),v=he(Y,i.interactiveDebounce));n.triggerTarget&&!i.triggerTarget?fe(n.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):i.triggerTarget&&t.removeAttribute("aria-expanded");I(),D(),E&&E(n,i);w.popperInstance&&(K(),tt().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));q("onAfterUpdate",[w,e])},setContent:function(t){w.setProps({content:t})},show:function(){var t=w.state.isVisible,e=w.state.isDestroyed,n=!w.state.isEnabled,i=_e.isTouch&&!w.props.touch,o=ue(w.props.duration,0,Te.duration);if(t||e||n||i)return;if(k().hasAttribute("disabled"))return;if(q("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,z()&&(S.style.visibility="visible");D(),F(),w.state.isMounted||(S.style.transition="none");if(z()){var r=A(),a=r.box,s=r.content;we([a,s],0)}c=function(){var t;if(w.state.isVisible&&!g){if(g=!0,S.offsetHeight,S.style.transition=w.props.moveTransition,z()&&w.props.animation){var e=A(),n=e.box,i=e.content;we([n,i],o),xe([n,i],"visible")}j(),I(),ge(Fe,w),null==(t=w.popperInstance)||t.forceUpdate(),w.state.isMounted=!0,q("onMount",[w]),w.props.animation&&z()&&function(t,e){V(t,e)}(o,(function(){w.state.isShown=!0,q("onShown",[w])}))}},function(){var t,e=w.props.appendTo,n=k();t=w.props.interactive&&e===le||"parent"===e?n.parentNode:pe(e,[n]);t.contains(S)||t.appendChild(S);K()}()},hide:function(){var t=!w.state.isVisible,e=w.state.isDestroyed,n=!w.state.isEnabled,i=ue(w.props.duration,1,Te.duration);if(t||e||n)return;if(q("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,g=!1,p=!1,z()&&(S.style.visibility="hidden");if(R(),B(),D(),z()){var o=A(),r=o.box,a=o.content;w.props.animation&&(we([r,a],i),xe([r,a],"hidden"))}j(),I(),w.props.animation?z()&&function(t,e){V(t,(function(){!w.state.isVisible&&S.parentNode&&S.parentNode.contains(S)&&e()}))}(i,w.unmount):w.unmount()},hideWithInteractivity:function(t){T().addEventListener("mousemove",v),ge(Ne,v),v(t)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Z(),tt().forEach((function(t){t._tippy.unmount()})),S.parentNode&&S.parentNode.removeChild(S);Fe=Fe.filter((function(t){return t!==w})),w.state.isMounted=!1,q("onHidden",[w])},destroy:function(){if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),W(),delete t._tippy,w.state.isDestroyed=!0,q("onDestroy",[w])}};if(!d.render)return w;var x=d.render(w),S=x.popper,E=x.onUpdate;S.setAttribute("data-tippy-root",""),S.id="tippy-"+w.id,w.popper=S,t._tippy=w,S._tippy=w;var _=y.map((function(t){return t.fn(w)})),O=t.hasAttribute("aria-expanded");return H(),I(),D(),q("onCreate",[w]),d.showOnCreate&&et(),S.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),S.addEventListener("mouseleave",(function(t){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(T().addEventListener("mousemove",v),v(t))})),w;function M(){var t=w.props.touch;return Array.isArray(t)?t:[t,0]}function P(){return"hold"===M()[0]}function z(){var t;return!!(null==(t=w.props.render)?void 0:t.$$tippy)}function k(){return l||t}function T(){var t=k().parentNode;return t?function(t){var e,n=fe(t)[0];return(null==n||null==(e=n.ownerDocument)?void 0:e.body)?n.ownerDocument:document}(t):document}function A(){return Re(S)}function C(t){return w.state.isMounted&&!w.state.isVisible||_e.isTouch||a&&"focus"===a.type?0:ue(w.props.delay,t?0:1,Te.delay)}function D(){S.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",S.style.zIndex=""+w.props.zIndex}function q(t,e,n){var i;(void 0===n&&(n=!0),_.forEach((function(n){n[t]&&n[t].apply(void 0,e)})),n)&&(i=w.props)[t].apply(i,e)}function j(){var e=w.props.aria;if(e.content){var n="aria-"+e.content,i=S.id;fe(w.props.triggerTarget||t).forEach((function(t){var e=t.getAttribute(n);if(w.state.isVisible)t.setAttribute(n,e?e+" "+i:i);else{var o=e&&e.replace(i,"").trim();o?t.setAttribute(n,o):t.removeAttribute(n)}}))}}function I(){!O&&w.props.aria.expanded&&fe(w.props.triggerTarget||t).forEach((function(t){w.props.interactive?t.setAttribute("aria-expanded",w.state.isVisible&&t===k()?"true":"false"):t.removeAttribute("aria-expanded")}))}function R(){T().removeEventListener("mousemove",v),Ne=Ne.filter((function(t){return t!==v}))}function $(t){if(!_e.isTouch||!f&&"mousedown"!==t.type){var e=t.composedPath&&t.composedPath()[0]||t.target;if(!w.props.interactive||!Ee(S,e)){if(Ee(k(),e)){if(_e.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else q("onClickOutside",[w,t]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),h=!0,setTimeout((function(){h=!1})),w.state.isMounted||B())}}}function L(){f=!0}function N(){f=!1}function F(){var t=T();t.addEventListener("mousedown",$,!0),t.addEventListener("touchend",$,ce),t.addEventListener("touchstart",N,ce),t.addEventListener("touchmove",L,ce)}function B(){var t=T();t.removeEventListener("mousedown",$,!0),t.removeEventListener("touchend",$,ce),t.removeEventListener("touchstart",N,ce),t.removeEventListener("touchmove",L,ce)}function V(t,e){var n=A().box;function i(t){t.target===n&&(Se(n,"remove",i),e())}if(0===t)return e();Se(n,"remove",s),Se(n,"add",i),s=i}function U(e,n,i){void 0===i&&(i=!1),fe(w.props.triggerTarget||t).forEach((function(t){t.addEventListener(e,n,i),m.push({node:t,eventType:e,handler:n,options:i})}))}function H(){var t;P()&&(U("touchstart",X,{passive:!0}),U("touchend",G,{passive:!0})),(t=w.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(U(t,X),t){case"mouseenter":U("mouseleave",G);break;case"focus":U(ke?"focusout":"blur",Q);break;case"focusin":U("focusout",Q)}}))}function W(){m.forEach((function(t){var e=t.node,n=t.eventType,i=t.handler,o=t.options;e.removeEventListener(n,i,o)})),m=[]}function X(t){var e,n=!1;if(w.state.isEnabled&&!J(t)&&!h){var i="focus"===(null==(e=a)?void 0:e.type);a=t,l=t.currentTarget,I(),!w.state.isVisible&&de(t,"MouseEvent")&&Ne.forEach((function(e){return e(t)})),"click"===t.type&&(w.props.trigger.indexOf("mouseenter")<0||p)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:et(t),"click"===t.type&&(p=!n),n&&!i&&nt(t)}}function Y(t){var e=t.target,n=k().contains(e)||S.contains(e);if("mousemove"!==t.type||!n){var i=tt().concat(S).map((function(t){var e,n=null==(e=t._tippy.popperInstance)?void 0:e.state;return n?{popperRect:t.getBoundingClientRect(),popperState:n,props:d}:null})).filter(Boolean);(function(t,e){var n=e.clientX,i=e.clientY;return t.every((function(t){var e=t.popperRect,o=t.popperState,r=t.props.interactiveBorder,a=o.placement.split("-")[0],s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,l="top"===a?s.bottom.y:0,u="right"===a?s.left.x:0,d="left"===a?s.right.x:0,p=e.top-i+c>r,h=i-e.bottom-l>r,f=e.left-n+u>r,g=n-e.right-d>r;return p||h||f||g}))})(i,t)&&(R(),nt(t))}}function G(t){J(t)||w.props.trigger.indexOf("click")>=0&&p||(w.props.interactive?w.hideWithInteractivity(t):nt(t))}function Q(t){w.props.trigger.indexOf("focusin")<0&&t.target!==k()||w.props.interactive&&t.relatedTarget&&S.contains(t.relatedTarget)||nt(t)}function J(t){return!!_e.isTouch&&P()!==t.type.indexOf("touch")>=0}function K(){Z();var e=w.props,n=e.popperOptions,i=e.placement,o=e.offset,r=e.getReferenceClientRect,a=e.moveTransition,s=z()?Re(S).arrow:null,l=r?{getBoundingClientRect:r,contextElement:r.contextElement||k()}:t,u={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(z()){var n=A().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?n.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?n.setAttribute("data-"+t,""):n.removeAttribute("data-"+t)})),e.attributes.popper={}}}},d=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},u];z()&&s&&d.push({name:"arrow",options:{element:s,padding:3}}),d.push.apply(d,(null==n?void 0:n.modifiers)||[]),w.popperInstance=ie(l,S,Object.assign({},n,{placement:i,onFirstUpdate:c,modifiers:d}))}function Z(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function tt(){return me(S.querySelectorAll("[data-tippy-root]"))}function et(t){w.clearDelayTimeouts(),t&&q("onTrigger",[w,t]),F();var e=C(!0),n=M(),o=n[0],r=n[1];_e.isTouch&&"hold"===o&&r&&(e=r),e?i=setTimeout((function(){w.show()}),e):w.show()}function nt(t){if(w.clearDelayTimeouts(),q("onUntrigger",[w,t]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&p)){var e=C(!1);e?o=setTimeout((function(){w.state.isVisible&&w.hide()}),e):r=requestAnimationFrame((function(){w.hide()}))}}else B()}}function Ve(t,e){void 0===e&&(e={});var n=Te.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",Me,ce),window.addEventListener("blur",ze);var i=Object.assign({},e,{plugins:n}),o=ye(t).reduce((function(t,e){var n=e&&Be(e,i);return n&&t.push(n),t}),[]);return be(t)?o[0]:o}Ve.defaultProps=Te,Ve.setDefaultProps=function(t){Object.keys(t).forEach((function(e){Te[e]=t[e]}))},Ve.currentInput=_e;var Ue=Object.assign({},lt,{effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow)}}),He=function(t,e){var n;void 0===e&&(e={});var i,o=t,r=[],a=e.overrides,s=[],c=!1;function l(){r=o.map((function(t){return t.reference}))}function u(t){o.forEach((function(e){t?e.enable():e.disable()}))}function d(t){return o.map((function(e){var n=e.setProps;return e.setProps=function(o){n(o),e.reference===i&&t.setProps(o)},function(){e.setProps=n}}))}function p(t,e){var n=r.indexOf(e);if(e!==i){i=e;var s=(a||[]).concat("content").reduce((function(t,e){return t[e]=o[n].props[e],t}),{});t.setProps(Object.assign({},s,{getReferenceClientRect:"function"==typeof s.getReferenceClientRect?s.getReferenceClientRect:function(){return e.getBoundingClientRect()}}))}}u(!1),l();var h={fn:function(){return{onDestroy:function(){u(!0)},onHidden:function(){i=null},onClickOutside:function(t){t.props.showOnCreate&&!c&&(c=!0,i=null)},onShow:function(t){t.props.showOnCreate&&!c&&(c=!0,p(t,r[0]))},onTrigger:function(t,e){p(t,e.currentTarget)}}}},f=Ve(ve(),Object.assign({},function(t,e){var n=Object.assign({},t);return e.forEach((function(t){delete n[t]})),n}(e,["overrides"]),{plugins:[h].concat(e.plugins||[]),triggerTarget:r,popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],[Ue])})})),g=f.show;f.show=function(t){if(g(),!i&&null==t)return p(f,r[0]);if(!i||null!=t){if("number"==typeof t)return r[t]&&p(f,r[t]);if(o.indexOf(t)>=0){var e=t.reference;return p(f,e)}return r.indexOf(t)>=0?p(f,t):void 0}},f.showNext=function(){var t=r[0];if(!i)return f.show(0);var e=r.indexOf(i);f.show(r[e+1]||t)},f.showPrevious=function(){var t=r[r.length-1];if(!i)return f.show(t);var e=r.indexOf(i),n=r[e-1]||t;f.show(n)};var m=f.setProps;return f.setProps=function(t){a=t.overrides||a,m(t)},f.setInstances=function(t){u(!0),s.forEach((function(t){return t()})),o=t,u(!1),l(),d(f),f.setProps({triggerTarget:r})},s=d(f),f};Ve.setDefaultProps({render:$e});class We{static isMobile(){return!window.matchMedia("(min-width: 460px)").matches}}const Xe="X^½",Ye="Rx",Ge="Ry",Qe="Rz",Je="Swap",Ke="Bloch",Ze="Measure",tn=t=>"object"==typeof t&&null!==t&&"PHASE-GATE"===t.tagName,en=t=>"object"==typeof t&&null!==t&&("RX-GATE"===t.tagName||"RY-GATE"===t.tagName||"RZ-GATE"===t.tagName),nn=t=>"object"==typeof t&&null!==t&&("H-GATE"===t.tagName||"X-GATE"===t.tagName||"RNOT-GATE"===t.tagName),on=t=>"object"==typeof t&&null!==t&&"MEASUREMENT-GATE"===t.tagName;class rn{show(t){if(We.isMobile())return;const e=this;this.popup=Ve(t,{allowHTML:!0,animation:!1,appendTo:document.body,arrow:oe+oe,content:this.popupHtml(t),delay:0,hideOnClick:!1,interactive:!0,theme:"qni",onShow(t){let n;const i=t.reference;if(on(i))e.input.value=i.flag;else if(nn(i))e.input.value=i.if;else if(tn(i)||en(i)){tn(i)?n=i.phi:en(i)&&(n=i.theta),e.input.value=n.replace(/π/g,"pi");const t=N.from(I(n.replace(/π/g,"pi"),$)).real;e.currentAngleDenominator=e.angleDenominator(n),e.currentAngle=e.snappedAngle(t),e.createAngleSlider(i)}e.input.addEventListener("keydown",e.inputKeydown.bind(e))},onHide(){if(e.isAngleSliderActive())return!1},onHidden(t){const n=t.reference;(tn(n)||en(n))&&(e.reduceInstructionAngle(n),e.destroyAngleSlider()),n.dispatchEvent(new Event("operation.update",{bubbles:!0})),t.destroy()}}),this.popup.show()}updateInstructionAngle(t,e){const n=e.replace(/pi/g,"π");this.input.value=e,tn(t)?t.phi=n:t.theta=n}reduceInstructionAngle(t){if(tn(t)){const e=this.beautifyFraction(t.phi.replace(/π/g,"pi"),!0);t.phi=e.replace(/pi/g,"π")}else{const e=this.beautifyFraction(t.theta.replace(/π/g,"pi"),!0);t.theta=e.replace(/pi/g,"π")}}snappedAngle(t){j.notNull(this.currentAngleDenominator);const e=Math.PI/this.currentAngleDenominator,n=Math.round(t/e);return this.beautifyFraction(`${n}pi/${this.currentAngleDenominator}`)}beautifyFraction(t,e=!1){let n;w.REDUCE=e;const i=new w(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")),o=i.valueOf(),r=i.d;if(0===o)n="0";else if(o>2)n=1===r?"2pi":`${2*r}pi/${r}`;else if(o<-2)n=1===r?"-2pi":`-${2*r}pi/${r}`;else{const t=i.n,e=-1===i.s?"-":"",o=1===t?`${e}pi`:`${e}${t}pi`;n=1===r?`${o}`:`${o}/${r}`}return n}popupHtml(t){let e=null;on(t)?e="flag":tn(t)?e="phi":en(t)?e="theta":nn(t)&&(e="if"),j.notNull(e);const n=document.getElementById(`gate-popup--${e}`);return j.notNull(n),n.innerHTML}get input(){j.notNull(this.popup);const t=this.popup.popper.getElementsByTagName("input").item(0);return j.notNull(t),t}inputKeydown(t){var e;if("Enter"===t.key){j.notNull(this.popup),this.popup.popper.classList.remove("gate-popup--error");const t=this.input.value;try{const n=this.popupReferenceEl;if(on(n))this.flag=t;else if(nn(n))this.if=t;else{j.notNull(this.currentAngle),j.notNull(this.currentAngleDenominator);let i=t;if(this.angleNumerator(this.currentAngle)===this.angleNumerator(t)&&this.currentAngleDenominator!==this.angleDenominator(t)){const e=this.angleDenominator(t)/this.currentAngleDenominator;i=`${Math.round(e*this.angleNumerator(this.currentAngle))}pi/${this.angleDenominator(t)}`}this.currentAngleDenominator=this.angleDenominator(t),null===(e=this.angleSliderEl.noUiSlider)||void 0===e||e.set(this.radian(i)),tn(n)?n.phi=this.beautifyFraction(i,!1).replace(/pi/g,"π"):en(n)&&(n.theta=this.beautifyFraction(i,!1).replace(/pi/g,"π"))}this.runCircuit()}catch(t){j.notNull(this.popup),this.popup.popper.classList.add("gate-popup--error")}}}set flag(t){const e=this.popupReferenceEl;t&&0!==t.trim().length?e.flag=t:e.flag=""}set if(t){const e=this.popupReferenceEl;t&&0!==t.trim().length?nn(e)&&(e.if=t):nn(e)&&(e.if="",e.disabled=!1)}runCircuit(){this.popupReferenceEl.dispatchEvent(new Event("operation.change",{bubbles:!0}))}get popupReferenceEl(){return j.notNull(this.popup),this.popup.reference}get editorElement(){const t=this.popupReferenceEl.closest(".editor");return j.notNull(t),t}get angleSliderEl(){var t;const e=null===(t=this.popup)||void 0===t?void 0:t.popper.getElementsByClassName(T("angleSlider")).item(0);return j.notNull(e),e}createAngleSlider(t){const e=this.angleSliderEl;let n;n=tn(t)?t.phi:t.theta;const i=N.from(I(n.replace(/π/g,"pi"),$)).real;V.create(e,{range:{min:-2*Math.PI,max:2*Math.PI},start:i,pips:{mode:U.Positions,values:[0,25,50,75,100],filter:t=>0===t?1:t%Math.PI?-1:1,format:{to:t=>{const e=t/Math.PI;return 0===e?"0":-1===e?"-π":1===e?"π":`${e}π`}}},cssPrefix:`${T("angleSlider")}-`}),e.classList.remove("hidden");e.noUiSlider.on("update",(e=>{const n=this.snappedAngle(e[0]);this.currentAngle!==n&&(this.currentAngle=n,this.updateInstructionAngle(t,n),t.dispatchEvent(new Event("operation.change",{bubbles:!0})))}))}destroyAngleSlider(){var t;null===(t=this.angleSliderEl.noUiSlider)||void 0===t||t.destroy()}isAngleSliderActive(){var t;return null!==(null===(t=this.popup)||void 0===t?void 0:t.popper.getElementsByClassName(T("angleSlider:state:active")).item(0))}radian(t){return new w(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).valueOf()*Math.PI}angleNumerator(t){w.REDUCE=!1;const e=new w(t.replace(/(\d+)pi/g,"$1").replace(/pi/g,"1"));return e.s*e.n}angleDenominator(t){w.REDUCE=!1;return new w(t.replace(/π/g,"pi").replace(/(\d+)pi/g,"$1").replace(/pi/g,"1")).d}}function an(t){return class extends t{showRightClickPopup(t){if(2!==t.button&&!t.ctrlKey)return;(new rn).show(this)}}}function sn(t){return class extends t{set controls(t){this.setAttribute("data-controls",t.sort().join())}get controls(){const t=this.getAttribute("data-controls");return null===t||""===t?[]:t.split(",").map((t=>parseInt(t))).sort()}}}function*cn(t){let e="",n=0,i=!1;for(let o=0;o<t.length;o+=1)"{"!==t[o]||"{"!==t[o+1]||"\\"===t[o-1]||i?"}"===t[o]&&"}"===t[o+1]&&"\\"!==t[o-1]&&i&&(i=!1,yield{type:"part",start:n,end:o+2,value:e.slice(2).trim()},e="",o+=2,n=o):(i=!0,e&&(yield{type:"string",start:n,end:o,value:e}),e="{{",n=o,o+=2),e+=t[o]||"";e&&(yield{type:"string",start:n,end:t.length,value:e})}var ln,un,dn=window&&window.__classPrivateFieldSet||function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},pn=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class hn{constructor(t,e){this.expression=e,ln.set(this,void 0),un.set(this,""),dn(this,ln,t),pn(this,ln).updateParent("")}get attributeName(){return pn(this,ln).attr.name}get attributeNamespace(){return pn(this,ln).attr.namespaceURI}get value(){return pn(this,un)}set value(t){dn(this,un,t||""),pn(this,ln).updateParent(t)}get element(){return pn(this,ln).element}get booleanValue(){return pn(this,ln).booleanValue}set booleanValue(t){pn(this,ln).booleanValue=t}}ln=new WeakMap,un=new WeakMap;class fn{constructor(t,e){this.element=t,this.attr=e,this.partList=[]}get booleanValue(){return this.element.hasAttributeNS(this.attr.namespaceURI,this.attr.name)}set booleanValue(t){if(1!==this.partList.length)throw new DOMException("Operation not supported","NotSupportedError");this.partList[0].value=t?"":null}append(t){this.partList.push(t)}updateParent(t){if(1===this.partList.length&&null===t)this.element.removeAttributeNS(this.attr.namespaceURI,this.attr.name);else{const t=this.partList.map((t=>"string"==typeof t?t:t.value)).join("");this.element.setAttributeNS(this.attr.namespaceURI,this.attr.name,t)}}}var gn,mn=window&&window.__classPrivateFieldSet||function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},vn=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class bn{constructor(t,e){this.expression=e,gn.set(this,void 0),mn(this,gn,[t]),t.textContent=""}get value(){return vn(this,gn).map((t=>t.textContent)).join("")}set value(t){this.replace(t)}get previousSibling(){return vn(this,gn)[0].previousSibling}get nextSibling(){return vn(this,gn)[vn(this,gn).length-1].nextSibling}replace(...t){const e=t.map((t=>"string"==typeof t?new Text(t):t));e.length||e.push(new Text("")),vn(this,gn)[0].before(...e);for(const t of vn(this,gn))t.remove();mn(this,gn,e)}}function yn(t){return{createCallback(t,e,n){this.processCallback(t,e,n)},processCallback(e,n,i){var o;if("object"==typeof i&&i)for(const e of n)if(e.expression in i){const n=null!==(o=i[e.expression])&&void 0!==o?o:"";t(e,n)}}}}function wn(t,e){t.value=String(e)}gn=new WeakMap;const xn=yn(wn);var Sn,En,_n=window&&window.__classPrivateFieldSet||function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},On=window&&window.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class Mn extends DocumentFragment{constructor(t,e,n=xn){var i,o;super(),Sn.set(this,void 0),En.set(this,void 0),Object.getPrototypeOf(this!==Mn.prototype)&&Object.setPrototypeOf(this,Mn.prototype),this.appendChild(t.content.cloneNode(!0)),_n(this,En,Array.from(function*(t){const e=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let n;for(;n=e.nextNode();)if(n instanceof Element&&n.hasAttributes())for(let t=0;t<n.attributes.length;t+=1){const e=n.attributes.item(t);if(e&&e.value.includes("{{")){const t=new fn(n,e);for(const n of cn(e.value))if("string"===n.type)t.append(n.value);else{const e=new hn(t,n.value);t.append(e),yield e}}}else if(n instanceof Text&&n.textContent&&n.textContent.includes("{{"))for(const t of cn(n.textContent)){t.end<n.textContent.length&&n.splitText(t.end),"part"===t.type&&(yield new bn(n,t.value));break}}(this))),_n(this,Sn,n),null===(o=(i=On(this,Sn)).createCallback)||void 0===o||o.call(i,this,On(this,En),e)}update(t){On(this,Sn).processCallback(this,On(this,En),t)}}Sn=new WeakMap,En=new WeakMap;const Pn=new WeakSet;function zn(t,e){return n=e,!!Pn.has(n)&&(e(t),!0);var n}const kn=new WeakMap;class Tn{constructor(t,e){this.element=t,this.type=e,this.element.addEventListener(this.type,this),kn.get(this.element).set(this.type,this)}set(t){"function"==typeof t?this.handleEvent=t.bind(this.element):"object"==typeof t&&"function"==typeof t.handleEvent?this.handleEvent=t.handleEvent.bind(t):(this.element.removeEventListener(this.type,this),kn.get(this.element).delete(this.type))}static for(t){kn.has(t.element)||kn.set(t.element,new Map);const e=t.attributeName.slice(2),n=kn.get(t.element);return n.has(e)?n.get(e):new Tn(t.element,e)}}function An(t,e){if(!function(t){return"object"==typeof t&&Symbol.iterator in t}(e))return!1;if(t instanceof bn){const n=[];for(const t of e)if(t instanceof jn){const e=document.createDocumentFragment();t.renderInto(e),n.push(...e.childNodes)}else t instanceof DocumentFragment?n.push(...t.childNodes):n.push(String(t));return n.length&&t.replace(...n),!0}return t.value=Array.from(e).join(" "),!0}const Cn=new WeakMap,Dn=new WeakMap,qn=new WeakMap;class jn{constructor(t,e,n){this.strings=t,this.values=e,this.processor=n}get template(){if(Cn.has(this.strings))return Cn.get(this.strings);{const t=document.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce(((t,n,i)=>t+n+(i<e?`{{ ${i} }}`:"")),""),Cn.set(this.strings,t),t}}renderInto(t){const e=this.template;if(Dn.get(t)!==e){Dn.set(t,e);const n=new Mn(e,this.values,this.processor);return qn.set(t,n),void(t instanceof bn?t.replace(...n.children):t.appendChild(n))}qn.get(t).update(this.values)}}const In=yn((function(t,e){zn(t,e)||function(t,e){return"boolean"==typeof e&&t instanceof hn&&"boolean"==typeof t.element[t.attributeName]&&(t.booleanValue=e,!0)}(t,e)||function(t,e){return!!(t instanceof hn&&t.attributeName.startsWith("on"))&&(Tn.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0)}(t,e)||function(t,e){return e instanceof jn&&t instanceof bn&&(e.renderInto(t),!0)}(t,e)||function(t,e){return e instanceof DocumentFragment&&t instanceof bn&&(e.childNodes.length&&t.replace(...e.childNodes),!0)}(t,e)||An(t,e)||wn(t,e)}));function Rn(t,...e){return new jn(t,e,In)}function $n(t,e){t.renderInto(e)}function Ln(n){class i extends n{constructor(){super(...arguments),this.disabled=!1,this.iconType=""}disable(){this.disabled=!0}enable(){this.disabled=!1}get enabled(){return!this.disabled}get disabledStyle(){return Rn`<style>
        :host([data-disabled]) #icon {
          background-color: var(--colors-eel, #4b4b4b);
        }
      </style>`}}return t([h,e("design:type",Object)],i.prototype,"disabled",void 0),t([h,e("design:type",Object)],i.prototype,"iconType",void 0),i}const Nn={init:function(t){const e=t;Nn.document=e.document,Nn.DocumentFragment=e.DocumentFragment||Fn,Nn.SVGElement=e.SVGElement||Fn,Nn.SVGSVGElement=e.SVGSVGElement||Fn,Nn.SVGElementInstance=e.SVGElementInstance||Fn,Nn.Element=e.Element||Fn,Nn.HTMLElement=e.HTMLElement||Nn.Element,Nn.Event=e.Event,Nn.Touch=e.Touch||Fn,Nn.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Fn(){}var Bn=Nn;var Vn=t=>!(!t||!t.Window)&&t instanceof t.Window;let Un,Hn;function Wn(t){Un=t;const e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),Hn=t}function Xn(t){if(Vn(t))return t;return(t.ownerDocument||t).defaultView||Hn.window}"undefined"!=typeof window&&window&&Wn(window);const Yn=t=>!!t&&"object"==typeof t,Gn=t=>"function"==typeof t;var Qn={window:t=>t===Hn||Vn(t),docFrag:t=>Yn(t)&&11===t.nodeType,object:Yn,func:Gn,number:t=>"number"==typeof t,bool:t=>"boolean"==typeof t,string:t=>"string"==typeof t,element:t=>{if(!t||"object"!=typeof t)return!1;const e=Xn(t)||Hn;return/object|function/.test(typeof e.Element)?t instanceof e.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:t=>Yn(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString()),array:t=>Yn(t)&&void 0!==t.length&&Gn(t.splice)};const Jn={init:function(t){const e=Bn.Element,n=t.navigator||{};Jn.supportsTouch="ontouchstart"in t||Qn.func(t.DocumentTouch)&&Bn.document instanceof t.DocumentTouch,Jn.supportsPointerEvent=!1!==n.pointerEnabled&&!!Bn.PointerEvent,Jn.isIOS=/iP(hone|od|ad)/.test(n.platform),Jn.isIOS7=/iP(hone|od|ad)/.test(n.platform)&&/OS 7[^\d]/.test(n.appVersion),Jn.isIe9=/MSIE 9/.test(n.userAgent),Jn.isOperaMobile="Opera"===n.appName&&Jn.supportsTouch&&/Presto/.test(n.userAgent),Jn.prefixedMatchesSelector="matches"in e.prototype?"matches":"webkitMatchesSelector"in e.prototype?"webkitMatchesSelector":"mozMatchesSelector"in e.prototype?"mozMatchesSelector":"oMatchesSelector"in e.prototype?"oMatchesSelector":"msMatchesSelector",Jn.pEventTypes=Jn.supportsPointerEvent?Bn.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,Jn.wheelEvent=Bn.document&&"onmousewheel"in Bn.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var Kn=Jn;const Zn=(t,e)=>{for(const n of e)t.push(n);return t},ti=t=>Zn([],t),ei=(t,e)=>{for(let n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1},ni=(t,e)=>t[ei(t,e)];function ii(t){const e={};for(const n in t){const i=t[n];Qn.plainObject(i)?e[n]=ii(i):Qn.array(i)?e[n]=ti(i):e[n]=i}return e}function oi(t,e){for(const n in e)t[n]=e[n];return t}let ri,ai,si=0;var ci={request:t=>ri(t),cancel:t=>ai(t),init:function(t){if(ri=t.requestAnimationFrame,ai=t.cancelAnimationFrame,!ri){const e=["ms","moz","webkit","o"];for(const n of e)ri=t[`${n}RequestAnimationFrame`],ai=t[`${n}CancelAnimationFrame`]||t[`${n}CancelRequestAnimationFrame`]}ri=ri&&ri.bind(t),ai=ai&&ai.bind(t),ri||(ri=e=>{const n=Date.now(),i=Math.max(0,16-(n-si)),o=t.setTimeout((()=>{e(n+i)}),i);return si=n+i,o},ai=t=>clearTimeout(t))}};function li(t,e,n){if(n=n||{},Qn.string(t)&&-1!==t.search(" ")&&(t=ui(t)),Qn.array(t))return t.reduce(((t,i)=>oi(t,li(i,e,n))),n);if(Qn.object(t)&&(e=t,t=""),Qn.func(e))n[t]=n[t]||[],n[t].push(e);else if(Qn.array(e))for(const i of e)li(t,i,n);else if(Qn.object(e))for(const i in e){li(ui(i).map((e=>`${t}${e}`)),e[i],n)}return n}function ui(t){return t.trim().split(/ +/)}function di(t,e){for(const n of e){if(t.immediatePropagationStopped)break;n(t)}}class pi{constructor(t){this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=oi({},t||{})}fire(t){let e;const n=this.global;(e=this.types[t.type])&&di(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&di(t,e)}on(t,e){const n=li(t,e);for(t in n)this.types[t]=Zn(this.types[t]||[],n[t])}off(t,e){const n=li(t,e);for(t in n){const e=this.types[t];if(e&&e.length)for(const i of n[t]){const t=e.indexOf(i);-1!==t&&e.splice(t,1)}}}getRect(t){return null}}function hi(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function fi(t,e){for(;Qn.element(t);){if(mi(t,e))return t;t=gi(t)}return null}function gi(t){let e=t.parentNode;if(Qn.docFrag(e)){for(;(e=e.host)&&Qn.docFrag(e););return e}return e}function mi(t,e){return Hn!==Un&&(e=e.replace(/\/deep\//g," ")),t[Kn.prefixedMatchesSelector](e)}const vi=t=>t.parentNode||t.host;function bi(t,e){const n=[];let i,o=t;for(;(i=vi(o))&&o!==e&&i!==o.ownerDocument;)n.unshift(o),o=i;return n}function yi(t,e){return(parseInt(Xn(t).getComputedStyle(t).zIndex,10)||0)>=(parseInt(Xn(e).getComputedStyle(e).zIndex,10)||0)}function wi(t,e,n){for(;Qn.element(t);){if(mi(t,e))return!0;if((t=gi(t))===n)return mi(t,e)}return!1}function xi(t){return t.correspondingUseElement||t}function Si(t){const e=t instanceof Bn.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}function Ei(t){const e=Si(t);if(!Kn.isIOS7&&e){const i={x:(n=(n=Xn(t))||Hn).scrollX||n.document.documentElement.scrollLeft,y:n.scrollY||n.document.documentElement.scrollTop};e.left+=i.x,e.right+=i.x,e.top+=i.y,e.bottom+=i.y}var n;return e}function _i(t){return!!Qn.string(t)&&(Bn.document.querySelector(t),!0)}function Oi(t,e,n,i){let o=t;return Qn.string(o)?o=function(t,e,n){return"parent"===t?gi(n):"self"===t?e.getRect(n):fi(n,t)}(o,e,n):Qn.func(o)&&(o=o(...i)),Qn.element(o)&&(o=Ei(o)),o}function Mi(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}}function Pi(t){return!t||"x"in t&&"y"in t||((t=oi({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y),t}function zi(t,e,n){t.left&&(e.left+=n.x),t.right&&(e.right+=n.x),t.top&&(e.top+=n.y),t.bottom&&(e.bottom+=n.y),e.width=e.right-e.left,e.height=e.bottom-e.top}function ki(t,e,n){const i=t.options[n];return Mi(Oi(i&&i.origin||t.options.origin,t,e,[t&&e]))||{x:0,y:0}}var Ti=(t,e)=>Math.sqrt(t*t+e*e);class Ai{constructor(t){this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=t}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}Object.defineProperty(Ai.prototype,"interaction",{get(){return this._interaction._proxy},set(){}});const Ci={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};class Di extends Ai{constructor(t,e,n,i,o,r,a){super(t),this.target=void 0,this.currentTarget=void 0,this.relatedTarget=null,this.screenX=void 0,this.screenY=void 0,this.button=void 0,this.buttons=void 0,this.ctrlKey=void 0,this.shiftKey=void 0,this.altKey=void 0,this.metaKey=void 0,this.page=void 0,this.client=void 0,this.delta=void 0,this.rect=void 0,this.x0=void 0,this.y0=void 0,this.t0=void 0,this.dt=void 0,this.duration=void 0,this.clientX0=void 0,this.clientY0=void 0,this.velocity=void 0,this.speed=void 0,this.swipe=void 0,this.timeStamp=void 0,this.axes=void 0,this.preEnd=void 0,o=o||t.element;const s=t.interactable,c=(s&&s.options||Ci).deltaSource,l=ki(s,o,n),u="start"===i,d="end"===i,p=u?this:t.prevEvent,h=u?t.coords.start:d?{page:p.page,client:p.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;this.page=oi({},h.page),this.client=oi({},h.client),this.rect=oi({},t.rect),this.timeStamp=h.timeStamp,d||(this.page.x-=l.x,this.page.y-=l.y,this.client.x-=l.x,this.client.y-=l.y),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.button=e.button,this.buttons=e.buttons,this.target=o,this.currentTarget=o,this.preEnd=r,this.type=a||n+(i||""),this.interactable=s,this.t0=u?t.pointers[t.pointers.length-1].downTime:p.t0,this.x0=t.coords.start.page.x-l.x,this.y0=t.coords.start.page.y-l.y,this.clientX0=t.coords.start.client.x-l.x,this.clientY0=t.coords.start.client.y-l.y,this.delta=u||d?{x:0,y:0}:{x:this[c].x-p[c].x,y:this[c].y-p[c].y},this.dt=t.coords.delta.timeStamp,this.duration=this.timeStamp-this.t0,this.velocity=oi({},t.coords.velocity[c]),this.speed=Ti(this.velocity.x,this.velocity.y),this.swipe=d||"inertiastart"===i?this.getSwipe():null}getSwipe(){const t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;let e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);const n=112.5<=e&&e<247.5,i=202.5<=e&&e<337.5;return{up:i,down:!i&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}preventDefault(){}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}stopPropagation(){this.propagationStopped=!0}}function qi(t,e){let n=!1;return function(){return n||(Hn.console.warn(e),n=!0),t.apply(this,arguments)}}function ji(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t}function Ii(t,e){for(const n in e){const i=Ii.prefixedPropREs;let o=!1;for(const t in i)if(0===n.indexOf(t)&&i[t].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}function Ri(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp}function $i(t){return t instanceof Bn.Event||t instanceof Bn.Touch}function Li(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function Ni(t,e){return e=e||{x:0,y:0},Kn.isOperaMobile&&$i(t)?(Li("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):Li("page",t,e),e}function Fi(t){return Qn.number(t.pointerId)?t.pointerId:t.identifier}function Bi(t,e,n){const i=e.length>1?Ui(e):e[0];Ni(i,t.page),function(t,e){e=e||{},Kn.isOperaMobile&&$i(t)?Li("screen",t,e):Li("client",t,e)}(i,t.client),t.timeStamp=n}function Vi(t){const e=[];return Qn.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function Ui(t){const e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0};for(const n of t)for(const t in e)e[t]+=n[t];for(const n in e)e[n]/=t.length;return e}function Hi(t){if(!t.length)return null;const e=Vi(t),n=Math.min(e[0].pageX,e[1].pageX),i=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),r=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:i,left:n,top:i,right:o,bottom:r,width:o-n,height:r-i}}function Wi(t,e){const n=e+"X",i=e+"Y",o=Vi(t),r=o[0][n]-o[1][n],a=o[0][i]-o[1][i];return Ti(r,a)}function Xi(t,e){const n=e+"X",i=e+"Y",o=Vi(t),r=o[1][n]-o[0][n],a=o[1][i]-o[0][i];return 180*Math.atan2(a,r)/Math.PI}function Yi(t){const e=Qn.func(t.composedPath)?t.composedPath():t.path;return[xi(e?e[0]:t.target),xi(t.currentTarget)]}function Gi(t,e){if(e.phaselessTypes[t])return!0;for(const n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1}Object.defineProperties(Di.prototype,{pageX:{get(){return this.page.x},set(t){this.page.x=t}},pageY:{get(){return this.page.y},set(t){this.page.y=t}},clientX:{get(){return this.client.x},set(t){this.client.x=t}},clientY:{get(){return this.client.y},set(t){this.client.y=t}},dx:{get(){return this.delta.x},set(t){this.delta.x=t}},dy:{get(){return this.delta.y},set(t){this.delta.y=t}},velocityX:{get(){return this.velocity.x},set(t){this.velocity.x=t}},velocityY:{get(){return this.velocity.y},set(t){this.velocity.y=t}}}),Ii.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};class Qi{constructor(t){this.list=[],this.selectorMap={},this.scope=void 0,this.scope=t,t.addListeners({"interactable:unset":({interactable:t})=>{const{target:e,_context:n}=t,i=Qn.string(e)?this.selectorMap[e]:e[this.scope.id],o=ei(i,(t=>t.context===n));i[o]&&(i[o].context=null,i[o].interactable=null),i.splice(o,1)}})}new(t,e){e=oi(e||{},{actions:this.scope.actions});const n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),i={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),Qn.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(i)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(i)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}get(t,e){const n=e&&e.context||this.scope.document,i=Qn.string(t),o=i?this.selectorMap[t]:t[this.scope.id];if(!o)return null;const r=ni(o,(e=>e.context===n&&(i||e.interactable.inContext(t))));return r&&r.interactable}forEachMatch(t,e){for(const n of this.list){let i;if((Qn.string(n.target)?Qn.element(t)&&mi(t,n.target):t===n.target)&&n.inContext(t)&&(i=e(n)),void 0!==i)return i}}}class Ji{constructor(t){this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=t,Ii(this,t)}preventOriginalDefault(){this.originalEvent.preventDefault()}stopPropagation(){this.originalEvent.stopPropagation()}stopImmediatePropagation(){this.originalEvent.stopImmediatePropagation()}}function Ki(t){if(!Qn.object(t))return{capture:!!t,passive:!1};const e=oi({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var Zi={id:"events",install:function(t){var e;const n=[],i={},o=[],r={add:a,remove:s,addDelegate:function(t,e,n,r,s){const u=Ki(s);if(!i[n]){i[n]=[];for(const t of o)a(t,n,c),a(t,n,l,!0)}const d=i[n];let p=ni(d,(n=>n.selector===t&&n.context===e));p||(p={selector:t,context:e,listeners:[]},d.push(p));p.listeners.push([r,u])},removeDelegate:function(t,e,n,o,r){const a=Ki(r),u=i[n];let d,p=!1;if(!u)return;for(d=u.length-1;d>=0;d--){const i=u[d];if(i.selector===t&&i.context===e){const{listeners:t}=i;for(let i=t.length-1;i>=0;i--){const[r,{capture:h,passive:f}]=t[i];if(r===o&&h===a.capture&&f===a.passive){t.splice(i,1),t.length||(u.splice(d,1),s(e,n,c),s(e,n,l,!0)),p=!0;break}}if(p)break}}},delegateListener:c,delegateUseCapture:l,delegatedEvents:i,documents:o,targets:n,supportsOptions:!1,supportsPassive:!1};function a(t,e,i,o){const a=Ki(o);let s=ni(n,(e=>e.eventTarget===t));s||(s={eventTarget:t,events:{}},n.push(s)),s.events[e]||(s.events[e]=[]),t.addEventListener&&!((t,e)=>-1!==t.indexOf(e))(s.events[e],i)&&(t.addEventListener(e,i,r.supportsOptions?a:a.capture),s.events[e].push(i))}function s(t,e,i,o){const a=Ki(o),c=ei(n,(e=>e.eventTarget===t)),l=n[c];if(!l||!l.events)return;if("all"===e){for(e in l.events)l.events.hasOwnProperty(e)&&s(t,e,"all");return}let u=!1;const d=l.events[e];if(d){if("all"===i){for(let n=d.length-1;n>=0;n--)s(t,e,d[n],a);return}for(let n=0;n<d.length;n++)if(d[n]===i){t.removeEventListener(e,i,r.supportsOptions?a:a.capture),d.splice(n,1),0===d.length&&(delete l.events[e],u=!0);break}}u&&!Object.keys(l.events).length&&n.splice(c,1)}function c(t,e){const n=Ki(e),o=new Ji(t),r=i[t.type],[a]=Yi(t);let s=a;for(;Qn.element(s);){for(let t=0;t<r.length;t++){const e=r[t],{selector:i,context:c}=e;if(mi(s,i)&&hi(c,a)&&hi(c,s)){const{listeners:t}=e;o.currentTarget=s;for(const[e,{capture:i,passive:r}]of t)i===n.capture&&r===n.passive&&e(o)}}s=gi(s)}}function l(t){return c.call(this,t,!0)}return null==(e=t.document)||e.createElement("div").addEventListener("test",null,{get capture(){return r.supportsOptions=!0},get passive(){return r.supportsPassive=!0}}),t.events=r,r}};class to{constructor(t,e,n,i,o){this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=t,this.pointer=e,this.event=n,this.downTime=i,this.downTarget=o}}let eo,no;!function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(eo||(eo={})),function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(no||(no={}));let io=0;var oo=class{get pointerMoveTolerance(){return 1}constructor({pointerType:t,scopeFire:e}){this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=qi((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=io++,this._scopeFire=e,this.pointerType=t;const n=this;this._proxy={};for(const t in eo)Object.defineProperty(this._proxy,t,{get:()=>n[t]});for(const t in no)Object.defineProperty(this._proxy,t,{value:(...e)=>n[t](...e)});this._scopeFire("interactions:new",{interaction:this})}pointerDown(t,e,n){const i=this.updatePointer(t,e,n,!0),o=this.pointers[i];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:i,pointerInfo:o,type:"down",interaction:this})}start(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&(ji(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?oi({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}pointerMove(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);const i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;let o,r;this.pointerIsDown&&!this.pointerWasMoved&&(o=this.coords.cur.client.x-this.coords.start.client.x,r=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=Ti(o,r)>this.pointerMoveTolerance);const a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:o,dy:r,duplicate:i,interaction:this};i||function(t,e){const n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n}(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),i||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&Ri(this.coords.prev,this.coords.cur))}move(t){var e;t&&t.event||((e=this.coords.delta).page.x=0,e.page.y=0,e.client.x=0,e.client.y=0),(t=oi({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}pointerUp(t,e,n,i){let o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));const r=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire(`interactions:${r}`,{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:r,curEventTarget:i,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}documentBlur(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}end(t){let e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}currentAction(){return this._interacting?this.prepared.name:null}interacting(){return this._interacting}stop(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}getPointerIndex(t){const e=Fi(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:ei(this.pointers,(t=>t.id===e))}getPointerInfo(t){return this.pointers[this.getPointerIndex(t)]}updatePointer(t,e,n,i){const o=Fi(t);let r=this.getPointerIndex(t),a=this.pointers[r];var s,c,l;return i=!1!==i&&(i||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new to(o,t,e,null,null),r=this.pointers.length,this.pointers.push(a)),Bi(this.coords.cur,this.pointers.map((t=>t.pointer)),this._now()),s=this.coords.delta,c=this.coords.prev,l=this.coords.cur,s.page.x=l.page.x-c.page.x,s.page.y=l.page.y-c.page.y,s.client.x=l.client.x-c.client.x,s.client.y=l.client.y-c.client.y,s.timeStamp=l.timeStamp-c.timeStamp,i&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,Ii(this.downPointer,t),this.interacting()||(Ri(this.coords.start,this.coords.cur),Ri(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:i,pointerInfo:a,pointerIndex:r,interaction:this}),r}removePointer(t,e){const n=this.getPointerIndex(t);if(-1===n)return;const i=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:i,interaction:this}),this.pointers.splice(n,1),this.pointerIsDown=!1}_updateLatestPointer(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}destroy(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}_createPreparedEvent(t,e,n,i){return new Di(this,t,this.prepared.name,e,this.element,n,i)}_fireEvent(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}_doPhase(t){const{event:e,phase:n,preEnd:i,type:o}=t,{rect:r}=this;r&&"move"===n&&(zi(this.edges,r,this.coords.delta[this.interactable.options.deltaSource]),r.width=r.right-r.left,r.height=r.bottom-r.top);if(!1===this._scopeFire(`interactions:before-action-${n}`,t))return!1;const a=t.iEvent=this._createPreparedEvent(e,n,i,o);return this._scopeFire(`interactions:action-${n}`,t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire(`interactions:after-action-${n}`,t),!0}_now(){return Date.now()}};function ro(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):Qn.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function ao({interaction:t,event:e}){t.interactable&&t.interactable.checkAndPreventDefault(e)}var so={id:"core/interactablePreventDefault",install:function(t){const{Interactable:e}=t;e.prototype.preventDefault=ro,e.prototype.checkAndPreventDefault=function(e){return function(t,e,n){const i=t.options.preventDefault;if("never"!==i)if("always"!==i){if(e.events.supportsPassive&&/^touch(start|move)$/.test(n.type)){const t=Xn(n.target).document,i=e.getDocOptions(t);if(!i||!i.events||!1!==i.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(n.type)||Qn.element(n.target)&&mi(n.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||n.preventDefault()}else n.preventDefault()}(this,t,e)},t.interactions.docEvents.push({type:"dragstart",listener(e){for(const n of t.interactions.list)if(n.element&&(n.element===e.target||hi(n.element,e.target)))return void n.interactable.checkAndPreventDefault(e)}})},listeners:["down","move","up","cancel"].reduce(((t,e)=>(t[`interactions:${e}`]=ao,t)),{})};const co={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search(t){for(const e of co.methodOrder){const n=co[e](t);if(n)return n}return null},simulationResume({pointerType:t,eventType:e,eventTarget:n,scope:i}){if(!/down|start/i.test(e))return null;for(const e of i.interactions.list){let i=n;if(e.simulation&&e.simulation.allowResume&&e.pointerType===t)for(;i;){if(i===e.element)return e;i=gi(i)}}return null},mouseOrPen({pointerId:t,pointerType:e,eventType:n,scope:i}){if("mouse"!==e&&"pen"!==e)return null;let o;for(const n of i.interactions.list)if(n.pointerType===e){if(n.simulation&&!lo(n,t))continue;if(n.interacting())return n;o||(o=n)}if(o)return o;for(const t of i.interactions.list)if(!(t.pointerType!==e||/down/i.test(n)&&t.simulation))return t;return null},hasPointer({pointerId:t,scope:e}){for(const n of e.interactions.list)if(lo(n,t))return n;return null},idle({pointerType:t,scope:e}){for(const n of e.interactions.list){if(1===n.pointers.length){const t=n.interactable;if(t&&(!t.options.gesture||!t.options.gesture.enabled))continue}else if(n.pointers.length>=2)continue;if(!n.interacting()&&t===n.pointerType)return n}return null}};function lo(t,e){return t.pointers.some((({id:t})=>t===e))}var uo=co;const po=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function ho(t,e){return function(n){const i=e.interactions.list,o=(r=n,Qn.string(r.pointerType)?r.pointerType:Qn.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof Bn.Touch?"touch":"mouse");var r;const[a,s]=Yi(n),c=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(const t of n.changedTouches){const i={pointer:t,pointerId:Fi(t),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},r=fo(i);c.push([i.pointer,i.eventTarget,i.curEventTarget,r])}}else{let t=!1;if(!Kn.supportsPointerEvent&&/mouse/.test(n.type)){for(let e=0;e<i.length&&!t;e++)t="mouse"!==i[e].pointerType&&i[e].pointerIsDown;t=t||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!t){const t={pointer:n,pointerId:Fi(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},i=fo(t);c.push([t.pointer,t.eventTarget,t.curEventTarget,i])}}for(const[e,i,o,r]of c)r[t](e,n,i,o)}}function fo(t){const{pointerType:e,scope:n}=t,i={interaction:uo.search(t),searchDetails:t};return n.fire("interactions:find",i),i.interaction||n.interactions.new({pointerType:e})}function go({doc:t,scope:e,options:n},i){const{interactions:{docEvents:o},events:r}=e,a=r[i];e.browser.isIOS&&!n.events&&(n.events={passive:!1});for(const e in r.delegatedEvents)a(t,e,r.delegateListener),a(t,e,r.delegateUseCapture,!0);const s=n&&n.events;for(const{type:e,listener:n}of o)a(t,e,n,s)}const mo={id:"core/interactions",install:function(t){const e={};for(const n of po)e[n]=ho(n,t);const n=Kn.pEventTypes;let i;function o(){for(const e of t.interactions.list)if(e.pointerIsDown&&"touch"===e.pointerType&&!e._interacting)for(const n of e.pointers)t.documents.some((({doc:t})=>hi(t,n.downTarget)))||e.removePointer(n.pointer,n.event)}i=Bn.PointerEvent?[{type:n.down,listener:o},{type:n.down,listener:e.pointerDown},{type:n.move,listener:e.pointerMove},{type:n.up,listener:e.pointerUp},{type:n.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:o},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}],i.push({type:"blur",listener(e){for(const n of t.interactions.list)n.documentBlur(e)}}),t.prevTouchTime=0,t.Interaction=class extends oo{get pointerMoveTolerance(){return t.interactions.pointerMoveTolerance}set pointerMoveTolerance(e){t.interactions.pointerMoveTolerance=e}_now(){return t.now()}},t.interactions={list:[],new(e){e.scopeFire=(e,n)=>t.fire(e,n);const n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:i,pointerMoveTolerance:1},t.usePlugin(so)},listeners:{"scope:add-document":t=>go(t,"add"),"scope:remove-document":t=>go(t,"remove"),"interactable:unset":({interactable:t},e)=>{for(let n=e.interactions.list.length-1;n>=0;n--){const i=e.interactions.list[n];i.interactable===t&&(i.stop(),e.fire("interactions:destroy",{interaction:i}),i.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(n,1))}}},onDocSignal:go,doOnInteractions:ho,methodNames:po};var vo=mo;function bo(t){return t&&t.replace(/\/.*$/,"")}const yo=new class{constructor(){this.id=`__interact_scope_${Math.floor(100*Math.random())}`,this.isInitialized=!1,this.listenerMaps=[],this.browser=Kn,this.defaults=ii(Ci),this.Eventable=pi,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=function(t){const e=(n,i)=>{let o=t.interactables.get(n,i);return o||(o=t.interactables.new(n,i),o.events.global=e.globalEvents),o};return e.getPointerAverage=Ui,e.getTouchBBox=Hi,e.getTouchDistance=Wi,e.getTouchAngle=Xi,e.getElementRect=Ei,e.getElementClientRect=Si,e.matchesSelector=mi,e.closest=fi,e.globalEvents={},e.version="1.10.11",e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=qi((function(t,e,n){if(Qn.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),Qn.array(t)){for(const i of t)this.on(i,e,n);return this}if(Qn.object(t)){for(const n in t)this.on(n,t[n],e);return this}return Gi(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this}),"The interact.on() method is being deprecated"),e.off=qi((function(t,e,n){if(Qn.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),Qn.array(t)){for(const i of t)this.off(i,e,n);return this}if(Qn.object(t)){for(const n in t)this.off(n,t[n],e);return this}if(Gi(t,this.scope.actions)){let n;t in this.globalEvents&&-1!==(n=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(n,1)}else this.scope.events.remove(this.scope.document,t,e,n);return this}),"The interact.off() method is being deprecated"),e.debug=function(){return this.scope},e.supportsTouch=function(){return Kn.supportsTouch},e.supportsPointerEvent=function(){return Kn.supportsPointerEvent},e.stop=function(){for(const t of this.scope.interactions.list)t.stop();return this},e.pointerMoveTolerance=function(t){return Qn.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e}(this),this.InteractEvent=Di,this.Interactable=void 0,this.interactables=new Qi(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=t=>this.removeDocument(t.target);const t=this;this.Interactable=class extends class{get _defaults(){return{base:{},perAction:{},actions:{}}}constructor(t,e,n,i){this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new pi,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=e.actions,this.target=t,this._context=e.context||n,this._win=Xn(_i(t)?this._context:t),this._doc=this._win.document,this._scopeEvents=i,this.set(e)}setOnEvents(t,e){return Qn.func(e.onstart)&&this.on(`${t}start`,e.onstart),Qn.func(e.onmove)&&this.on(`${t}move`,e.onmove),Qn.func(e.onend)&&this.on(`${t}end`,e.onend),Qn.func(e.oninertiastart)&&this.on(`${t}inertiastart`,e.oninertiastart),this}updatePerActionListeners(t,e,n){(Qn.array(e)||Qn.object(e))&&this.off(t,e),(Qn.array(n)||Qn.object(n))&&this.on(t,n)}setPerAction(t,e){const n=this._defaults;for(const i in e){const o=i,r=this.options[t],a=e[o];"listeners"===o&&this.updatePerActionListeners(t,r.listeners,a),Qn.array(a)?r[o]=ti(a):Qn.plainObject(a)?(r[o]=oi(r[o]||{},ii(a)),Qn.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(r[o].enabled=!1!==a.enabled)):Qn.bool(a)&&Qn.object(n.perAction[o])?r[o].enabled=a:r[o]=a}}getRect(t){return t=t||(Qn.element(this.target)?this.target:null),Qn.string(this.target)&&(t=t||this._context.querySelector(this.target)),Ei(t)}rectChecker(t){return Qn.func(t)?(this._rectChecker=t,this.getRect=t=>{const e=oi({},this._rectChecker(t));return"width"in e||(e.width=e.right-e.left,e.height=e.bottom-e.top),e},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}_backCompatOption(t,e){if(_i(e)||Qn.object(e)){this.options[t]=e;for(const n in this._actions.map)this.options[n][t]=e;return this}return this.options[t]}origin(t){return this._backCompatOption("origin",t)}deltaSource(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}context(){return this._context}inContext(t){return this._context===t.ownerDocument||hi(this._context,t)}testIgnoreAllow(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}testAllow(t,e,n){return!t||!!Qn.element(n)&&(Qn.string(t)?wi(n,t,e):!!Qn.element(t)&&hi(t,n))}testIgnore(t,e,n){return!(!t||!Qn.element(n))&&(Qn.string(t)?wi(n,t,e):!!Qn.element(t)&&hi(t,n))}fire(t){return this.events.fire(t),this}_onOff(t,e,n,i){Qn.object(e)&&!Qn.array(e)&&(i=n,n=null);const o="on"===t?"add":"remove",r=li(e,n);for(let e in r){"wheel"===e&&(e=Kn.wheelEvent);for(const n of r[e])Gi(e,this._actions)?this.events[t](e,n):Qn.string(this.target)?this._scopeEvents[`${o}Delegate`](this.target,this._context,e,n,i):this._scopeEvents[o](this.target,e,n,i)}return this}on(t,e,n){return this._onOff("on",t,e,n)}off(t,e,n){return this._onOff("off",t,e,n)}set(t){const e=this._defaults;Qn.object(t)||(t={}),this.options=ii(e.base);for(const n in this._actions.methodDict){const i=n,o=this._actions.methodDict[i];this.options[i]={},this.setPerAction(i,oi(oi({},e.perAction),e.actions[i])),this[o](t[i])}for(const e in t)Qn.func(this[e])&&this[e](t[e]);return this}unset(){if(Qn.string(this.target))for(const t in this._scopeEvents.delegatedEvents){const e=this._scopeEvents.delegatedEvents[t];for(let n=e.length-1;n>=0;n--){const{selector:i,context:o,listeners:r}=e[n];i===this.target&&o===this._context&&e.splice(n,1);for(let e=r.length-1;e>=0;e--)this._scopeEvents.removeDelegate(this.target,this._context,t,r[e][0],r[e][1])}}else this._scopeEvents.remove(this.target,"all")}}{get _defaults(){return t.defaults}set(e){return super.set(e),t.fire("interactable:set",{options:e,interactable:this}),this}unset(){super.unset(),t.interactables.list.splice(t.interactables.list.indexOf(this),1),t.fire("interactable:unset",{interactable:this})}}}addListeners(t,e){this.listenerMaps.push({id:e,map:t})}fire(t,e){for(const{map:{[t]:n}}of this.listenerMaps)if(n&&!1===n(e,this,t))return!1}init(t){return this.isInitialized?this:function(t,e){t.isInitialized=!0,Qn.window(e)&&Wn(e);return Bn.init(e),Kn.init(e),ci.init(e),t.window=e,t.document=e.document,t.usePlugin(vo),t.usePlugin(Zi),t}(this,t)}pluginIsInstalled(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}usePlugin(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){let e=0;const n=this.listenerMaps.length,i=t.before.reduce(((t,e)=>(t[e]=!0,t[bo(e)]=!0,t)),{});for(;e<n;e++){const t=this.listenerMaps[e].id;if(i[t]||i[bo(t)])break}this.listenerMaps.splice(e,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}addDocument(t,e){if(-1!==this.getDocIndex(t))return!1;const n=Xn(t);e=e?oi({},e):{},this.documents.push({doc:t,options:e}),this.events.documents.push(t),t!==this.document&&this.events.add(n,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:n,scope:this,options:e})}removeDocument(t){const e=this.getDocIndex(t),n=Xn(t),i=this.documents[e].options;this.events.remove(n,"unload",this.onWindowUnload),this.documents.splice(e,1),this.events.documents.splice(e,1),this.fire("scope:remove-document",{doc:t,window:n,scope:this,options:i})}getDocIndex(t){for(let e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}getDocOptions(t){const e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}now(){return(this.window.Date||Date).now()}};var wo=yo.interactStatic;const xo="undefined"!=typeof globalThis?globalThis:window;function So({interaction:t}){if("drag"!==t.prepared.name)return;const e=t.prepared.axis;"x"===e?(t.coords.cur.page.y=t.coords.start.page.y,t.coords.cur.client.y=t.coords.start.client.y,t.coords.velocity.client.y=0,t.coords.velocity.page.y=0):"y"===e&&(t.coords.cur.page.x=t.coords.start.page.x,t.coords.cur.client.x=t.coords.start.client.x,t.coords.velocity.client.x=0,t.coords.velocity.page.x=0)}function Eo({iEvent:t,interaction:e}){if("drag"!==e.prepared.name)return;const n=e.prepared.axis;if("x"===n||"y"===n){const i="x"===n?"y":"x";t.page[i]=e.coords.start.page[i],t.client[i]=e.coords.start.client[i],t.delta[i]=0}}yo.init(xo);const _o={id:"actions/drag",install:function(t){const{actions:e,Interactable:n,defaults:i}=t;n.prototype.draggable=_o.draggable,e.map.drag=_o,e.methodDict.drag="draggable",i.actions.drag=_o.defaults},listeners:{"interactions:before-action-move":So,"interactions:action-resume":So,"interactions:action-move":Eo,"auto-start:check":t=>{const{interaction:e,interactable:n,buttons:i}=t,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(i&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return Qn.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):Qn.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:So,move:Eo,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:()=>"move"};var Oo=_o;wo.use(Oo);class Mo extends Ai{constructor(t,e,n){super(e._interaction),this.target=void 0,this.dropzone=void 0,this.dragEvent=void 0,this.relatedTarget=void 0,this.draggable=void 0,this.timeStamp=void 0,this.propagationStopped=!1,this.immediatePropagationStopped=!1;const{element:i,dropzone:o}="dragleave"===n?t.prev:t.cur;this.type=n,this.target=i,this.currentTarget=i,this.dropzone=o,this.dragEvent=e,this.relatedTarget=e.target,this.draggable=e.interactable,this.timeStamp=e.timeStamp}reject(){const{dropState:t}=this._interaction;if("dropactivate"===this.type||this.dropzone&&t.cur.dropzone===this.dropzone&&t.cur.element===this.target)if(t.prev.dropzone=this.dropzone,t.prev.element=this.target,t.rejected=!0,t.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){const e=t.activeDrops,n=ei(e,(({dropzone:t,element:e})=>t===this.dropzone&&e===this.target));t.activeDrops.splice(n,1);const i=new Mo(t,this.dragEvent,"dropdeactivate");i.dropzone=this.dropzone,i.target=this.target,this.dropzone.fire(i)}else this.dropzone.fire(new Mo(t,this.dragEvent,"dragleave"))}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}function Po(t,e){for(const{dropzone:n,element:i}of t.slice())e.dropzone=n,e.target=i,n.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}function zo(t,e){const n=function({interactables:t},e){const n=[];for(const i of t.list){if(!i.options.drop.enabled)continue;const t=i.options.drop.accept;if(Qn.element(t)&&t!==e||Qn.string(t)&&!mi(e,t)||Qn.func(t)&&!t({dropzone:i,draggableElement:e}))continue;const o=Qn.string(i.target)?i._context.querySelectorAll(i.target):Qn.array(i.target)?i.target:[i.target];for(const t of o)t!==e&&n.push({dropzone:i,element:t,rect:i.getRect(t)})}return n}(t,e);for(const t of n)t.rect=t.dropzone.getRect(t.element);return n}function ko({dropState:t,interactable:e,element:n},i,o){const r=[];for(const{dropzone:a,element:s,rect:c}of t.activeDrops)r.push(a.dropCheck(i,o,e,n,s,c)?s:null);const a=function(t){let e,n=[];for(let i=0;i<t.length;i++){const o=t[i],r=t[e];if(!o||i===e)continue;if(!r){e=i;continue}const a=vi(o),s=vi(r);if(a===o.ownerDocument)continue;if(s===o.ownerDocument){e=i;continue}if(a===s){yi(o,r)&&(e=i);continue}let c;if(n=n.length?n:bi(r),r instanceof Bn.HTMLElement&&o instanceof Bn.SVGElement&&!(o instanceof Bn.SVGSVGElement)){if(o===s)continue;c=o.ownerSVGElement}else c=o;const l=bi(c,r.ownerDocument);let u=0;for(;l[u]&&l[u]===n[u];)u++;const d=[l[u-1],l[u],n[u]];if(d[0]){let t=d[0].lastChild;for(;t;){if(t===d[1]){e=i,n=l;break}if(t===d[2])break;t=t.previousSibling}}}return e}(r);return t.activeDrops[a]||null}function To(t,e,n){const{dropState:i}=t,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new Mo(i,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new Mo(i,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),i.rejected||(i.cur.element!==i.prev.element&&(i.prev.dropzone&&(o.leave=new Mo(i,n,"dragleave"),n.dragLeave=o.leave.target=i.prev.element,n.prevDropzone=o.leave.dropzone=i.prev.dropzone),i.cur.dropzone&&(o.enter=new Mo(i,n,"dragenter"),n.dragEnter=i.cur.element,n.dropzone=i.cur.dropzone)),"dragend"===n.type&&i.cur.dropzone&&(o.drop=new Mo(i,n,"drop"),n.dropzone=i.cur.dropzone,n.relatedTarget=i.cur.element),"dragmove"===n.type&&i.cur.dropzone&&(o.move=new Mo(i,n,"dropmove"),o.move.dragmove=n,n.dropzone=i.cur.dropzone)),o}function Ao(t,e){const{dropState:n}=t,{activeDrops:i,cur:o,prev:r}=n;e.leave&&r.dropzone.fire(e.leave),e.enter&&o.dropzone.fire(e.enter),e.move&&o.dropzone.fire(e.move),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&Po(i,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function Co({interaction:t,iEvent:e,event:n},i){if("dragmove"!==e.type&&"dragend"!==e.type)return;const{dropState:o}=t;i.dynamicDrop&&(o.activeDrops=zo(i,t.element));const r=e,a=ko(t,r,n);o.rejected=o.rejected&&!!a&&a.dropzone===o.cur.dropzone&&a.element===o.cur.element,o.cur.dropzone=a&&a.dropzone,o.cur.element=a&&a.element,o.events=To(t,0,r)}const Do={id:"actions/drop",install:function(t){const{actions:e,interactStatic:n,Interactable:i,defaults:o}=t;t.usePlugin(Oo),i.prototype.dropzone=function(t){return function(t,e){if(Qn.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){const n=li(e.listeners),i=Object.keys(n).reduce(((t,e)=>(t[/^(enter|leave)/.test(e)?`drag${e}`:/^(activate|deactivate|move)/.test(e)?`drop${e}`:e]=n[e],t)),{});t.off(t.options.drop.listeners),t.on(i),t.options.drop.listeners=i}return Qn.func(e.ondrop)&&t.on("drop",e.ondrop),Qn.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),Qn.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),Qn.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),Qn.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),Qn.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:Qn.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(Qn.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},i.prototype.dropCheck=function(t,e,n,i,o,r){return function(t,e,n,i,o,r,a){let s=!1;if(!(a=a||t.getRect(r)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,s,t,r,i,o);const c=t.options.drop.overlap;if("pointer"===c){const t=ki(i,o,"drag"),n=Ni(e);n.x+=t.x,n.y+=t.y;const r=n.x>a.left&&n.x<a.right,c=n.y>a.top&&n.y<a.bottom;s=r&&c}const l=i.getRect(o);if(l&&"center"===c){const t=l.left+l.width/2,e=l.top+l.height/2;s=t>=a.left&&t<=a.right&&e>=a.top&&e<=a.bottom}if(l&&Qn.number(c)){s=Math.max(0,Math.min(a.right,l.right)-Math.max(a.left,l.left))*Math.max(0,Math.min(a.bottom,l.bottom)-Math.max(a.top,l.top))/(l.width*l.height)>=c}t.options.drop.checker&&(s=t.options.drop.checker(e,n,s,t,r,i,o));return s}(this,t,e,n,i,o,r)},n.dynamicDrop=function(e){return Qn.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},oi(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=Do.defaults},listeners:{"interactions:before-action-start":({interaction:t})=>{"drag"===t.prepared.name&&(t.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":({interaction:t,event:e,iEvent:n},i)=>{if("drag"!==t.prepared.name)return;const{dropState:o}=t;o.activeDrops=null,o.events=null,o.activeDrops=zo(i,t.element),o.events=To(t,0,n),o.events.activate&&(Po(o.activeDrops,o.events.activate),i.fire("actions/drop:start",{interaction:t,dragEvent:n}))},"interactions:action-move":Co,"interactions:after-action-move":({interaction:t,iEvent:e},n)=>{"drag"===t.prepared.name&&(Ao(t,t.dropState.events),n.fire("actions/drop:move",{interaction:t,dragEvent:e}),t.dropState.events={})},"interactions:action-end":(t,e)=>{if("drag"!==t.interaction.prepared.name)return;const{interaction:n,iEvent:i}=t;Co(t,e),Ao(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:i})},"interactions:stop":({interaction:t})=>{if("drag"!==t.prepared.name)return;const{dropState:e}=t;e&&(e.activeDrops=null,e.events=null,e.cur.dropzone=null,e.cur.element=null,e.prev.dropzone=null,e.prev.element=null,e.rejected=!1)}},getActiveDrops:zo,getDrop:ko,getDropEvents:To,fireDropEvents:Ao,defaults:{enabled:!1,accept:null,overlap:"pointer"}};var qo=Do;function jo(t){return Qn.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Io(t){return Qn.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}wo.use(qo);var Ro={id:"auto-start/interactableMethods",install:function(t){const{Interactable:e}=t;e.prototype.getAction=function(e,n,i,o){const r=function(t,e,n,i,o){const r=t.getRect(i),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:i,rect:r,buttons:a};return o.fire("auto-start:check",s),s.action}(this,n,i,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,r,this,o,i):r},e.prototype.ignoreFrom=qi((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=qi((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Io,e.prototype.styleCursor=jo}};function $o(t,e,n,i,o){return e.testIgnoreAllow(e.options[t.name],n,i)&&e.options[t.name].enabled&&Bo(e,n,t,o)?t:null}function Lo(t,e,n,i,o,r,a){for(let s=0,c=i.length;s<c;s++){const c=i[s],l=o[s],u=c.getAction(e,n,t,l);if(!u)continue;const d=$o(u,c,l,r,a);if(d)return{action:d,interactable:c,element:l}}return{action:null,interactable:null,element:null}}function No(t,e,n,i,o){let r=[],a=[],s=i;function c(t){r.push(t),a.push(s)}for(;Qn.element(s);){r=[],a=[],o.interactables.forEachMatch(s,c);const l=Lo(t,e,n,r,a,i,o);if(l.action&&!l.interactable.options[l.action.name].manualStart)return l;s=gi(s)}return{action:null,interactable:null,element:null}}function Fo(t,{action:e,interactable:n,element:i},o){e=e||{name:null},t.interactable=n,t.element=i,ji(t.prepared,e),t.rect=n&&e.name?n.getRect(i):null,Ho(t,o),o.fire("autoStart:prepared",{interaction:t})}function Bo(t,e,n,i){const o=t.options,r=o[n.name].max,a=o[n.name].maxPerElement,s=i.autoStart.maxInteractions;let c=0,l=0,u=0;if(!(r&&a&&s))return!1;for(const o of i.interactions.list){const i=o.prepared.name;if(o.interacting()){if(c++,c>=s)return!1;if(o.interactable===t){if(l+=i===n.name?1:0,l>=r)return!1;if(o.element===e&&(u++,i===n.name&&u>=a))return!1}}}return s>0}function Vo(t,e){return Qn.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Uo(t,e,n){const{cursorElement:i}=n.autoStart;i&&i!==t&&(i.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Ho(t,e){const{interactable:n,element:i,prepared:o}=t;if("mouse"!==t.pointerType||!n||!n.options.styleCursor)return void(e.autoStart.cursorElement&&Uo(e.autoStart.cursorElement,"",e));let r="";if(o.name){const a=n.options[o.name].cursorChecker;r=Qn.func(a)?a(o,n,i,t._interacting):e.actions.map[o.name].getCursor(o)}Uo(t.element,r||"",e)}const Wo={id:"auto-start/base",before:["actions"],install:function(t){const{interactStatic:e,defaults:n}=t;t.usePlugin(Ro),n.base.actionChecker=null,n.base.styleCursor=!0,oi(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=e=>Vo(e,t),t.autoStart={maxInteractions:1/0,withinInteractionLimit:Bo,cursorElement:null}},listeners:{"interactions:down":function({interaction:t,pointer:e,event:n,eventTarget:i},o){if(t.interacting())return;Fo(t,No(t,e,n,i,o),o)},"interactions:move":(t,e)=>{!function({interaction:t,pointer:e,event:n,eventTarget:i},o){if("mouse"!==t.pointerType||t.pointerIsDown||t.interacting())return;Fo(t,No(t,e,n,i,o),o)}(t,e),function(t,e){const{interaction:n}=t;if(!n.pointerIsDown||n.interacting()||!n.pointerWasMoved||!n.prepared.name)return;e.fire("autoStart:before-start",t);const{interactable:i}=n,o=n.prepared.name;o&&i&&(i.options[o].manualStart||!Bo(i,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,i,n.element),Ho(n,e)))}(t,e)},"interactions:stop":function({interaction:t},e){const{interactable:n}=t;n&&n.options.styleCursor&&Uo(t.element,"",e)}},maxInteractions:Vo,withinInteractionLimit:Bo,validateAction:$o};var Xo=Wo;var Yo={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function({interaction:t,eventTarget:e,dx:n,dy:i},o){if("drag"!==t.prepared.name)return;const r=Math.abs(n),a=Math.abs(i),s=t.interactable.options.drag,c=s.startAxis,l=r>a?"x":r<a?"y":"xy";if(t.prepared.axis="start"===s.lockAxis?l[0]:s.lockAxis,"xy"!==l&&"xy"!==c&&c!==l){t.prepared.name=null;let n=e;const i=function(i){if(i===t.interactable)return;const r=t.interactable.options.drag;if(!r.manualStart&&i.testIgnoreAllow(r,n,e)){const r=i.getAction(t.downPointer,t.downEvent,t,n);if(r&&"drag"===r.name&&function(t,e){if(!e)return!1;const n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(l,i)&&Xo.validateAction(r,i,n,e,o))return i}};for(;Qn.element(n);){const e=o.interactables.forEachMatch(n,i);if(e){t.prepared.name="drag",t.interactable=e,t.element=n;break}n=gi(n)}}}}};function Go(t){const e=t.prepared&&t.prepared.name;if(!e)return null;const n=t.interactable.options;return n[e].hold||n[e].delay}const Qo={id:"auto-start/hold",install:function(t){const{defaults:e}=t;t.usePlugin(Xo),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":({interaction:t})=>{t.autoStartHoldTimer=null},"autoStart:prepared":({interaction:t})=>{const e=Go(t);e>0&&(t.autoStartHoldTimer=setTimeout((()=>{t.start(t.prepared,t.interactable,t.element)}),e))},"interactions:move":({interaction:t,duplicate:e})=>{t.autoStartHoldTimer&&t.pointerWasMoved&&!e&&(clearTimeout(t.autoStartHoldTimer),t.autoStartHoldTimer=null)},"autoStart:before-start":({interaction:t})=>{Go(t)>0&&(t.prepared.name=null)}},getHoldDuration:Go};var Jo=Qo,Ko={id:"auto-start",install(t){t.usePlugin(Xo),t.usePlugin(Jo),t.usePlugin(Yo)}};wo.use(Ko);var Zo,tr={};!function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(Zo||(Zo={}));const er="[interact.js] ",nr={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};const ir=[{name:Zo.touchAction,perform:({element:t})=>!function(t,e,n){let i=t;for(;Qn.element(i);){if(or(i,e,n))return!0;i=gi(i)}return!1}(t,"touchAction",/pan-|pinch|none/),getInfo:({element:t})=>[t,nr.touchAction],text:'Consider adding CSS "touch-action: none" to this element\n'},{name:Zo.boxSizing,perform(t){const{element:e}=t;return"resize"===t.prepared.name&&e instanceof Bn.HTMLElement&&!or(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:({element:t})=>[t,nr.boxSizing]},{name:Zo.noListeners,perform(t){const e=t.prepared.name;return!(t.interactable.events.types[`${e}move`]||[]).length},getInfo:t=>[t.prepared.name,t.interactable],text:"There are no listeners set for this action"}];function or(t,e,n){const i=t.style[e]||Hn.getComputedStyle(t)[e];return n.test((i||"").toString())}const rr="dev-tools",ar={id:rr,install:function(t,{logger:e}={}){const{Interactable:n,defaults:i}=t;t.logger=e||console,i.base.devTools={ignore:{}},n.prototype.devTools=function(t){return t?(oi(this.options.devTools,t),this):this.options.devTools},t.usePlugin(tr)},listeners:{"interactions:action-start":({interaction:t},e)=>{for(const n of ir){const i=t.interactable&&t.interactable.options;i&&i.devTools&&i.devTools.ignore[n.name]||!n.perform(t)||e.logger.warn(er+n.text,...n.getInfo(t))}}},checks:ir,CheckName:Zo,links:nr,prefix:er};var sr=ar;wo.use(sr);var cr=Object.freeze({__proto__:null,edgeTarget:()=>{},elements:()=>{},grid:t=>{const e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((([e,n])=>e in t||n in t)),n=(n,i)=>{const{range:o,limits:r={left:-1/0,right:1/0,top:-1/0,bottom:1/0},offset:a={x:0,y:0}}=t,s={range:o,grid:t,x:null,y:null};for(const[o,c]of e){const e=Math.round((n-a.x)/t[o]),l=Math.round((i-a.y)/t[c]);s[o]=Math.max(r.left,Math.min(r.right,e*t[o]+a.x)),s[c]=Math.max(r.top,Math.min(r.bottom,l*t[c]+a.y))}return s};return n.grid=t,n.coordFields=e,n}});const lr={id:"snappers",install(t){const{interactStatic:e}=t;e.snappers=oi(e.snappers||{},cr),e.createSnapGrid=e.snappers.grid}};var ur=lr;class dr{constructor(t){this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=t,this.result=pr()}start({phase:t},e){const{interaction:n}=this,i=function(t){const e=t.interactable.options[t.prepared.name],n=e.modifiers;if(n&&n.length)return n;return["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((t=>{const n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((t=>!!t))}(n);var o,r;this.prepareStates(i),this.edges=oi({},n.edges),this.startOffset=(o=n.rect,r=e,o?{left:r.x-o.left,top:r.y-o.top,right:o.right-r.x,bottom:o.bottom-r.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};const a=this.fillArg({phase:t,pageCoords:e,preEnd:!1});this.result=pr(),this.startAll(a);return this.result=this.setAll(a)}fillArg(t){const{interaction:e}=this;return t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset,t}startAll(t){for(const e of this.states)e.methods.start&&(t.state=e,e.methods.start(t))}setAll(t){const{phase:e,preEnd:n,skipModifiers:i,rect:o}=t;t.coords=oi({},t.pageCoords),t.rect=oi({},o);const r=i?this.states.slice(i):this.states,a=pr(t.coords,t.rect);for(const i of r){var s;const{options:o}=i,r=oi({},t.coords);let c=null;null!=(s=i.methods)&&s.set&&this.shouldDo(o,n,e)&&(t.state=i,c=i.methods.set(t),zi(this.interaction.edges,t.rect,{x:t.coords.x-r.x,y:t.coords.y-r.y})),a.eventProps.push(c)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;const c=this.result.coords,l=this.result.rect;if(c&&l){const t=a.rect.left!==l.left||a.rect.right!==l.right||a.rect.top!==l.top||a.rect.bottom!==l.bottom;a.changed=t||c.x!==a.coords.x||c.y!==a.coords.y}return a}applyToInteraction(t){const{interaction:e}=this,{phase:n}=t,i=e.coords.cur,o=e.coords.start,{result:r,startDelta:a}=this,s=r.delta;"start"===n&&oi(this.startDelta,r.delta);for(const[t,e]of[[o,a],[i,s]])t.page.x+=e.x,t.page.y+=e.y,t.client.x+=e.x,t.client.y+=e.y;const{rectDelta:c}=this.result,l=t.rect||e.rect;l.left+=c.left,l.right+=c.right,l.top+=c.top,l.bottom+=c.bottom,l.width=l.right-l.left,l.height=l.bottom-l.top}setAndApply(t){const{interaction:e}=this,{phase:n,preEnd:i,skipModifiers:o}=t,r=this.setAll(this.fillArg({preEnd:i,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page}));if(this.result=r,!r.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){const{page:n}=e.coords.cur,i={x:t.modifiedCoords.x-n.x,y:t.modifiedCoords.y-n.y};r.coords.x+=i.x,r.coords.y+=i.y,r.delta.x+=i.x,r.delta.y+=i.y}this.applyToInteraction(t)}beforeEnd(t){const{interaction:e,event:n}=t,i=this.states;if(!i||!i.length)return;let o=!1;for(const e of i){t.state=e;const{options:n,methods:i}=e,r=i.beforeEnd&&i.beforeEnd(t);if(r)return this.endResult=r,!1;o=o||!o&&this.shouldDo(n,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}stop(t){const{interaction:e}=t;if(!this.states||!this.states.length)return;const n=oi({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(const t of this.states)n.state=t,t.methods.stop&&t.methods.stop(n);this.states=null,this.endResult=null}prepareStates(t){this.states=[];for(let e=0;e<t.length;e++){const{options:n,methods:i,name:o}=t[e];this.states.push({options:n,methods:i,index:e,name:o})}return this.states}restoreInteractionCoords({interaction:{coords:t,rect:e,modification:n}}){if(!n.result)return;const{startDelta:i}=n,{delta:o,rectDelta:r}=n.result,a=[[t.start,i],[t.cur,o]];for(const[t,e]of a)t.page.x-=e.x,t.page.y-=e.y,t.client.x-=e.x,t.client.y-=e.y;e.left-=r.left,e.right-=r.right,e.top-=r.top,e.bottom-=r.bottom}shouldDo(t,e,n,i){return!(!t||!1===t.enabled||i&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}copyFrom(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((t=>ii(t))),this.result=pr(oi({},t.result.coords),oi({},t.result.rect))}destroy(){for(const t in this)this[t]=null}}function pr(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function hr(t,e){const{defaults:n}=t,i={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=t=>{const o=t||{};o.enabled=!1!==o.enabled;for(const t in n)t in o||(o[t]=n[t]);const r={options:o,methods:i,name:e,enable:()=>(o.enabled=!0,r),disable:()=>(o.enabled=!1,r)};return r};return e&&"string"==typeof e&&(o._defaults=n,o._methods=i),o}function fr({iEvent:t,interaction:e}){const n=e.modification.result;n&&(t.modifiers=n.eventProps)}const gr={id:"modifiers/base",before:["actions"],install:t=>{t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":({interaction:t})=>{t.modification=new dr(t)},"interactions:before-action-start":t=>{const e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":t=>t.interaction.modification.setAndApply(t),"interactions:before-action-end":t=>t.interaction.modification.beforeEnd(t),"interactions:action-start":fr,"interactions:action-move":fr,"interactions:action-end":fr,"interactions:after-action-start":t=>t.interaction.modification.restoreInteractionCoords(t),"interactions:after-action-move":t=>t.interaction.modification.restoreInteractionCoords(t),"interactions:stop":t=>t.interaction.modification.stop(t)}};var mr=gr;const vr={start(t){const{state:e,rect:n,edges:i,pageCoords:o}=t;let{ratio:r}=e.options;const{equalDelta:a,modifiers:s}=e.options;"preserve"===r&&(r=n.width/n.height),e.startCoords=oi({},o),e.startRect=oi({},n),e.ratio=r,e.equalDelta=a;const c=e.linkedEdges={top:i.top||i.left&&!i.bottom,left:i.left||i.top&&!i.right,bottom:i.bottom||i.right&&!i.top,right:i.right||i.bottom&&!i.left};if(e.xIsPrimaryAxis=!(!i.left&&!i.right),e.equalDelta)e.edgeSign=(c.left?1:-1)*(c.top?1:-1);else{const t=e.xIsPrimaryAxis?c.top:c.left;e.edgeSign=t?-1:1}if(oi(t.edges,c),!s||!s.length)return;const l=new dr(t.interaction);l.copyFrom(t.interaction.modification),l.prepareStates(s),e.subModification=l,l.startAll({...t})},set(t){const{state:e,rect:n,coords:i}=t,o=oi({},i),r=e.equalDelta?br:yr;if(r(e,e.xIsPrimaryAxis,i,n),!e.subModification)return null;const a=oi({},n);zi(e.linkedEdges,a,{x:i.x-o.x,y:i.y-o.y});const s=e.subModification.setAll({...t,rect:a,edges:e.linkedEdges,pageCoords:i,prevCoords:i,prevRect:a}),{delta:c}=s;if(s.changed){r(e,Math.abs(c.x)>Math.abs(c.y),s.coords,s.rect),oi(i,s.coords)}return s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function br({startCoords:t,edgeSign:e},n,i){n?i.y=t.y+(i.x-t.x)*e:i.x=t.x+(i.y-t.y)*e}function yr({startRect:t,startCoords:e,ratio:n,edgeSign:i},o,r,a){if(o){const o=a.width/n;r.y=e.y+(o-t.height)*i}else{const o=a.height*n;r.x=e.x+(o-t.width)*i}}var wr=hr(vr,"aspectRatio");const xr=()=>{};xr._defaults={};var Sr=xr;function Er(t,e,n){return Qn.func(t)?Oi(t,e.interactable,e.element,[n.x,n.y,e]):Oi(t,e.interactable,e.element)}const _r={start:function({rect:t,startOffset:e,state:n,interaction:i,pageCoords:o}){const{options:r}=n,{elementRect:a}=r,s=oi({left:0,top:0,right:0,bottom:0},r.offset||{});if(t&&a){const n=Er(r.restriction,i,o);if(n){const e=n.right-n.left-t.width,i=n.bottom-n.top-t.height;e<0&&(s.left+=e,s.right+=e),i<0&&(s.top+=i,s.bottom+=i)}s.left+=e.left-t.width*a.left,s.top+=e.top-t.height*a.top,s.right+=e.right-t.width*(1-a.right),s.bottom+=e.bottom-t.height*(1-a.bottom)}n.offset=s},set:function({coords:t,interaction:e,state:n}){const{options:i,offset:o}=n,r=Er(i.restriction,e,t);if(!r)return;const a=function(t){return!t||"left"in t&&"top"in t||((t=oi({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height),t}(r);t.x=Math.max(Math.min(a.right-o.right,t.x),a.left+o.left),t.y=Math.max(Math.min(a.bottom-o.bottom,t.y),a.top+o.top)},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};var Or=hr(_r,"restrict");const Mr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Pr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function zr(t,e){for(const n of["top","left","bottom","right"])n in t||(t[n]=e[n]);return t}const kr={noInner:Mr,noOuter:Pr,start:function({interaction:t,startOffset:e,state:n}){const{options:i}=n;let o;if(i){o=Mi(Er(i.offset,t,t.coords.start.page))}o=o||{x:0,y:0},n.offset={top:o.y+e.top,left:o.x+e.left,bottom:o.y-e.bottom,right:o.x-e.right}},set:function({coords:t,edges:e,interaction:n,state:i}){const{offset:o,options:r}=i;if(!e)return;const a=oi({},t),s=Er(r.inner,n,a)||{},c=Er(r.outer,n,a)||{};zr(s,Mr),zr(c,Pr),e.top?t.y=Math.min(Math.max(c.top+o.top,a.y),s.top+o.top):e.bottom&&(t.y=Math.max(Math.min(c.bottom+o.bottom,a.y),s.bottom+o.bottom)),e.left?t.x=Math.min(Math.max(c.left+o.left,a.x),s.left+o.left):e.right&&(t.x=Math.max(Math.min(c.right+o.right,a.x),s.right+o.right))},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};var Tr=hr(kr,"restrictEdges");const Ar=oi({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},_r.defaults);var Cr=hr({start:_r.start,set:_r.set,defaults:Ar},"restrictRect");const Dr={width:-1/0,height:-1/0},qr={width:1/0,height:1/0};var jr=hr({start:function(t){return kr.start(t)},set:function(t){const{interaction:e,state:n,rect:i,edges:o}=t,{options:r}=n;if(!o)return;const a=Pi(Er(r.min,e,t.coords))||Dr,s=Pi(Er(r.max,e,t.coords))||qr;n.options={endOnly:r.endOnly,inner:oi({},kr.noInner),outer:oi({},kr.noOuter)},o.top?(n.options.inner.top=i.bottom-a.height,n.options.outer.top=i.bottom-s.height):o.bottom&&(n.options.inner.bottom=i.top+a.height,n.options.outer.bottom=i.top+s.height),o.left?(n.options.inner.left=i.right-a.width,n.options.outer.left=i.right-s.width):o.right&&(n.options.inner.right=i.left+a.width,n.options.outer.right=i.left+s.width),kr.set(t),n.options=r},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize");const Ir={start:function(t){const{interaction:e,interactable:n,element:i,rect:o,state:r,startOffset:a}=t,{options:s}=r,c=s.offsetWithOrigin?function(t){const{element:e}=t.interaction,n=Mi(Oi(t.state.options.origin,null,null,[e]));return n||ki(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};let l;if("startCoords"===s.offset)l={x:e.coords.start.page.x,y:e.coords.start.page.y};else{const t=Oi(s.offset,n,i,[e]);l=Mi(t)||{x:0,y:0},l.x+=c.x,l.y+=c.y}const{relativePoints:u}=s;r.offsets=o&&u&&u.length?u.map(((t,e)=>({index:e,relativePoint:t,x:a.left-o.width*t.x+l.x,y:a.top-o.height*t.y+l.y}))):[{index:0,relativePoint:null,x:l.x,y:l.y}]},set:function(t){const{interaction:e,coords:n,state:i}=t,{options:o,offsets:r}=i,a=ki(e.interactable,e.element,e.prepared.name),s=oi({},n),c=[];o.offsetWithOrigin||(s.x-=a.x,s.y-=a.y);for(const t of r){const n=s.x-t.x,i=s.y-t.y;for(let r=0,a=o.targets.length;r<a;r++){const a=o.targets[r];let s;s=Qn.func(a)?a(n,i,e._proxy,t,r):a,s&&c.push({x:(Qn.number(s.x)?s.x:n)+t.x,y:(Qn.number(s.y)?s.y:i)+t.y,range:Qn.number(s.range)?s.range:o.range,source:a,index:r,offset:t})}}const l={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}};for(const t of c){const e=t.range,n=t.x-s.x,i=t.y-s.y,o=Ti(n,i);let r=o<=e;e===1/0&&l.inRange&&l.range!==1/0&&(r=!1),l.target&&!(r?l.inRange&&e!==1/0?o/e<l.distance/l.range:e===1/0&&l.range!==1/0||o<l.distance:!l.inRange&&o<l.distance)||(l.target=t,l.distance=o,l.range=e,l.inRange=r,l.delta.x=n,l.delta.y=i)}return l.inRange&&(n.x=l.target.x,n.y=l.target.y),i.closest=l,l},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};var Rr=hr(Ir,"snap");const $r={start:function(t){const{state:e,edges:n}=t,{options:i}=e;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:i.offset||"self",origin:{x:0,y:0},range:i.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],Ir.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){const{interaction:e,state:n,coords:i}=t,{options:o,offsets:r}=n,a={x:i.x-r[0].x,y:i.y-r[0].y};n.options=oi({},o),n.options.targets=[];for(const t of o.targets||[]){let i;if(i=Qn.func(t)?t(a.x,a.y,e):t,i){for(const[t,e]of n.targetFields)if(t in i||e in i){i.x=i[t],i.y=i[e];break}n.options.targets.push(i)}}const s=Ir.set(t);return n.options=o,s},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};var Lr=hr($r,"snapSize");var Nr={aspectRatio:wr,restrictEdges:Tr,restrict:Or,restrictRect:Cr,restrictSize:jr,snapEdges:hr({start:function(t){const{edges:e}=t;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],$r.start(t)):null},set:$r.set,defaults:oi(ii($r.defaults),{targets:null,range:null,offset:{x:0,y:0}})},"snapEdges"),snap:Rr,snapSize:Lr,spring:Sr,avoid:Sr,transform:Sr,rubberband:Sr};const Fr={id:"modifiers",install(t){const{interactStatic:e}=t;t.usePlugin(mr),t.usePlugin(ur),e.modifiers=Nr;for(const e in Nr){const{_defaults:n,_methods:i}=Nr[e];n._methods=i,t.defaults.perAction[e]=n}}};var Br=Fr;wo.use(Br);class Vr{}function Ur(n){class i extends n{constructor(){super(...arguments),this.size=""}get sizeableStyle(){return Rn`<style>
        :host {
          position: relative;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }

        :host([data-size="xs"]) {
          height: ${Vr.size.xs}rem;
          width: ${Vr.size.xs}rem;
        }

        :host([data-size="sm"]) {
          height: ${Vr.size.sm}rem;
          width: ${Vr.size.sm}rem;
        }

        :host,
        :host([data-size="base"]) {
          height: ${Vr.size.base}rem;
          width: ${Vr.size.base}rem;
        }

        :host([data-size="lg"]) {
          height: ${Vr.size.lg}rem;
          width: ${Vr.size.lg}rem;
        }

        :host([data-size="xl"]) {
          height: ${Vr.size.xl}rem;
          width: ${Vr.size.xl}rem;
        }

        :host([data-wire-count="1"]),
        :host([data-wire-count="2"]) {
          height: ${Vr.size.xl}rem;
          width: ${Vr.size.xl}rem;
        }

        :host([data-wire-count="3"]) {
          height: ${Vr.size.lg}rem;
          width: ${Vr.size.lg}rem;
        }

        :host([data-wire-count="4"]) {
          height: ${Vr.size.base}rem;
          width: ${Vr.size.base}rem;
        }

        :host([data-wire-count="5"]),
        :host([data-wire-count="6"]) {
          height: ${Vr.size.sm}rem;
          width: ${Vr.size.sm}rem;
        }

        :host([data-wire-count="7"]),
        :host([data-wire-count="8"]),
        :host([data-wire-count="9"]),
        :host([data-wire-count="10"]) {
          height: ${Vr.size.xs}rem;
          width: ${Vr.size.xs}rem;
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
            height: ${Vr.size.base}rem;
            width: ${Vr.size.base}rem;
          }
        }
      </style>`}}return t([h,e("design:type",Object)],i.prototype,"size",void 0),i}Vr.size={xs:1,sm:1.5,base:2,lg:2.5,xl:3};var Hr=b((function(t,e){t.exports=function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=o,e.getWindow=function(e){return(0,t.default)(e)?e:(e.ownerDocument||e).defaultView||i.window},e.window=e.realWindow=void 0;var n=void 0;e.realWindow=n;var i=void 0;function o(t){e.realWindow=n=t;var o=t.document.createTextNode("");o.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(o)===o&&(t=t.wrap(t)),e.window=i=t}e.window=i,"undefined"!=typeof window&&window&&o(window);var r={};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=function(t){return!!t&&"object"===a(t)},c=function(t){return"function"==typeof t},l={window:function(n){return n===e.window||(0,t.default)(n)},docFrag:function(t){return s(t)&&11===t.nodeType},object:s,func:c,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==a(t))return!1;var n=e.getWindow(t)||e.window;return/object|function/.test(a(n.Element))?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return s(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return s(t)&&void 0!==t.length&&c(t.splice)}};r.default=l;var u={};function d(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function p(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var i=n.prepared.axis;if("x"===i||"y"===i){var o="x"===i?"y":"x";e.page[o]=n.coords.start.page[o],e.client[o]=n.coords.start.client[o],e.delta[o]=0}}}Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var h={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,i=t.defaults;n.prototype.draggable=h.draggable,e.map.drag=h,e.methodDict.drag="draggable",i.actions.drag=h.defaults},listeners:{"interactions:before-action-move":d,"interactions:action-resume":d,"interactions:action-move":p,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,i=t.buttons,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(i&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return r.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):r.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:d,move:p,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},f=h;u.default=f;var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var m={init:function(t){var e=t;m.document=e.document,m.DocumentFragment=e.DocumentFragment||v,m.SVGElement=e.SVGElement||v,m.SVGSVGElement=e.SVGSVGElement||v,m.SVGElementInstance=e.SVGElementInstance||v,m.Element=e.Element||v,m.HTMLElement=e.HTMLElement||m.Element,m.Event=e.Event,m.Touch=e.Touch||v,m.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function v(){}var b=m;g.default=b;var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var w={init:function(t){var e=g.default.Element,n=t.navigator||{};w.supportsTouch="ontouchstart"in t||r.default.func(t.DocumentTouch)&&g.default.document instanceof t.DocumentTouch,w.supportsPointerEvent=!1!==n.pointerEnabled&&!!g.default.PointerEvent,w.isIOS=/iP(hone|od|ad)/.test(n.platform),w.isIOS7=/iP(hone|od|ad)/.test(n.platform)&&/OS 7[^\d]/.test(n.appVersion),w.isIe9=/MSIE 9/.test(n.userAgent),w.isOperaMobile="Opera"===n.appName&&w.supportsTouch&&/Presto/.test(n.userAgent),w.prefixedMatchesSelector="matches"in e.prototype?"matches":"webkitMatchesSelector"in e.prototype?"webkitMatchesSelector":"mozMatchesSelector"in e.prototype?"mozMatchesSelector":"oMatchesSelector"in e.prototype?"oMatchesSelector":"msMatchesSelector",w.pEventTypes=w.supportsPointerEvent?g.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,w.wheelEvent=g.default.document&&"onmousewheel"in g.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},x=w;y.default=x;var S={};function E(t){var e=t.parentNode;if(r.default.docFrag(e)){for(;(e=e.host)&&r.default.docFrag(e););return e}return e}function _(t,n){return e.window!==e.realWindow&&(n=n.replace(/\/deep\//g," ")),t[y.default.prefixedMatchesSelector](n)}Object.defineProperty(S,"__esModule",{value:!0}),S.nodeContains=function(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1},S.closest=function(t,e){for(;r.default.element(t);){if(_(t,e))return t;t=E(t)}return null},S.parentNode=E,S.matchesSelector=_,S.indexOfDeepestElement=function(t){for(var n,i=[],o=0;o<t.length;o++){var r=t[o],a=t[n];if(r&&o!==n)if(a){var s=O(r),c=O(a);if(s!==r.ownerDocument)if(c!==r.ownerDocument)if(s!==c){i=i.length?i:M(a);var l=void 0;if(a instanceof g.default.HTMLElement&&r instanceof g.default.SVGElement&&!(r instanceof g.default.SVGSVGElement)){if(r===c)continue;l=r.ownerSVGElement}else l=r;for(var u=M(l,a.ownerDocument),d=0;u[d]&&u[d]===i[d];)d++;var p=[u[d-1],u[d],i[d]];if(p[0])for(var h=p[0].lastChild;h;){if(h===p[1]){n=o,i=u;break}if(h===p[2])break;h=h.previousSibling}}else f=r,m=a,(parseInt(e.getWindow(f).getComputedStyle(f).zIndex,10)||0)>=(parseInt(e.getWindow(m).getComputedStyle(m).zIndex,10)||0)&&(n=o);else n=o}else n=o}var f,m;return n},S.matchesUpTo=function(t,e,n){for(;r.default.element(t);){if(_(t,e))return!0;if((t=E(t))===n)return _(t,e)}return!1},S.getActualElement=function(t){return t.correspondingUseElement||t},S.getScrollXY=P,S.getElementClientRect=z,S.getElementRect=function(t){var n=z(t);if(!y.default.isIOS7&&n){var i=P(e.getWindow(t));n.left+=i.x,n.right+=i.x,n.top+=i.y,n.bottom+=i.y}return n},S.getPath=function(t){for(var e=[];t;)e.push(t),t=E(t);return e},S.trySelector=function(t){return!!r.default.string(t)&&(g.default.document.querySelector(t),!0)};var O=function(t){return t.parentNode||t.host};function M(t,e){for(var n,i=[],o=t;(n=O(o))&&o!==e&&n!==o.ownerDocument;)i.unshift(o),o=n;return i}function P(t){return{x:(t=t||e.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function z(t){var e=t instanceof g.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(t,e){for(var n in e)t[n]=e[n];return t};var T={};function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function C(t,e,n){return"parent"===t?(0,S.parentNode)(n):"self"===t?e.getRect(n):(0,S.closest)(n,t)}Object.defineProperty(T,"__esModule",{value:!0}),T.getStringOptionResult=C,T.resolveRectLike=function(t,e,n,i){var o,a=t;return r.default.string(a)?a=C(a,e,n):r.default.func(a)&&(a=a.apply(void 0,function(t){if(Array.isArray(t))return A(t)}(o=i)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(o)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),r.default.element(a)&&(a=(0,S.getElementRect)(a)),a},T.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},T.xywhToTlbr=function(t){return!t||"left"in t&&"top"in t||((t=(0,k.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height),t},T.tlbrToXywh=function(t){return!t||"x"in t&&"y"in t||((t=(0,k.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y),t},T.addEdges=function(t,e,n){t.left&&(e.left+=n.x),t.right&&(e.right+=n.x),t.top&&(e.top+=n.y),t.bottom&&(e.bottom+=n.y),e.width=e.right-e.left,e.height=e.bottom-e.top};var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(t,e,n){var i=t.options[n],o=i&&i.origin||t.options.origin,r=(0,T.resolveRectLike)(o,t,e,[t&&e]);return(0,T.rectToXY)(r)||{x:0,y:0}};var q={};function j(t){return t.trim().split(/ +/)}Object.defineProperty(q,"__esModule",{value:!0}),q.default=function t(e,n,i){if(i=i||{},r.default.string(e)&&-1!==e.search(" ")&&(e=j(e)),r.default.array(e))return e.reduce((function(e,o){return(0,k.default)(e,t(o,n,i))}),i);if(r.default.object(e)&&(n=e,e=""),r.default.func(n))i[e]=i[e]||[],i[e].push(n);else if(r.default.array(n))for(var o=0;o<n.length;o++){var a;a=n[o],t(e,a,i)}else if(r.default.object(n))for(var s in n){var c=j(s).map((function(t){return"".concat(e).concat(t)}));t(c,n[s],i)}return i};var I={};Object.defineProperty(I,"__esModule",{value:!0}),I.default=void 0,I.default=function(t,e){return Math.sqrt(t*t+e*e)};var R={};function $(t,e){for(var n in e){var i=$.prefixedPropREs,o=!1;for(var r in i)if(0===n.indexOf(r)&&i[r].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0,$.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var L=$;R.default=L;var N={};function F(t){return t instanceof g.default.Event||t instanceof g.default.Touch}function B(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function V(t,e){return e=e||{x:0,y:0},y.default.isOperaMobile&&F(t)?(B("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):B("page",t,e),e}function U(t,e){return e=e||{},y.default.isOperaMobile&&F(t)?B("screen",t,e):B("client",t,e),e}function H(t){var e=[];return r.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function W(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var i=t[n];for(var o in e)e[o]+=i[o]}for(var r in e)e[r]/=t.length;return e}Object.defineProperty(N,"__esModule",{value:!0}),N.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},N.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},N.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},N.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},N.isNativePointer=F,N.getXY=B,N.getPageXY=V,N.getClientXY=U,N.getPointerId=function(t){return r.default.number(t.pointerId)?t.pointerId:t.identifier},N.setCoords=function(t,e,n){var i=e.length>1?W(e):e[0];V(i,t.page),U(i,t.client),t.timeStamp=n},N.getTouchPair=H,N.pointerAverage=W,N.touchBBox=function(t){if(!t.length)return null;var e=H(t),n=Math.min(e[0].pageX,e[1].pageX),i=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),r=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:i,left:n,top:i,right:o,bottom:r,width:o-n,height:r-i}},N.touchDistance=function(t,e){var n=e+"X",i=e+"Y",o=H(t),r=o[0][n]-o[1][n],a=o[0][i]-o[1][i];return(0,I.default)(r,a)},N.touchAngle=function(t,e){var n=e+"X",i=e+"Y",o=H(t),r=o[1][n]-o[0][n],a=o[1][i]-o[0][i];return 180*Math.atan2(a,r)/Math.PI},N.getPointerType=function(t){return r.default.string(t.pointerType)?t.pointerType:r.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type||"")||t instanceof g.default.Touch?"touch":"mouse"},N.getEventTargets=function(t){var e=r.default.func(t.composedPath)?t.composedPath():t.path;return[S.getActualElement(e?e[0]:t.target),S.getActualElement(t.currentTarget)]},N.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},N.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(N,"pointerExtend",{enumerable:!0,get:function(){return R.default}});var X={};function Y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(X,"__esModule",{value:!0}),X.BaseEvent=void 0;var Q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,"type",void 0),G(this,"target",void 0),G(this,"currentTarget",void 0),G(this,"interactable",void 0),G(this,"_interaction",void 0),G(this,"timeStamp",void 0),G(this,"immediatePropagationStopped",!1),G(this,"propagationStopped",!1),this._interaction=e}var e;return(e=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Y(t.prototype,e),t}();X.BaseEvent=Q,Object.defineProperty(Q.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.find=J.findIndex=J.from=J.merge=J.remove=J.contains=void 0,J.contains=function(t,e){return-1!==t.indexOf(e)},J.remove=function(t,e){return t.splice(t.indexOf(e),1)};var K=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];t.push(i)}return t};J.merge=K,J.from=function(t){return K([],t)};var Z=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};J.findIndex=Z,J.find=function(t,e){return t[Z(t,e)]};var tt={};function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ot(t,e){return!e||"object"!==et(e)&&"function"!=typeof e?rt(t):e}function rt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(tt,"__esModule",{value:!0}),tt.DropEvent=void 0;var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(r,t);var e,n,i,o=(n=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=at(n);if(i){var o=at(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return ot(this,t)});function r(t,e,n){var i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),st(rt(i=o.call(this,e._interaction)),"target",void 0),st(rt(i),"dropzone",void 0),st(rt(i),"dragEvent",void 0),st(rt(i),"relatedTarget",void 0),st(rt(i),"draggable",void 0),st(rt(i),"timeStamp",void 0),st(rt(i),"propagationStopped",!1),st(rt(i),"immediatePropagationStopped",!1);var a="dragleave"===n?t.prev:t.cur,s=a.element,c=a.dropzone;return i.type=n,i.target=s,i.currentTarget=s,i.dropzone=c,i.dragEvent=e,i.relatedTarget=e.target,i.draggable=e.interactable,i.timeStamp=e.timeStamp,i}return(e=[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,i=J.findIndex(n,(function(e){var n=e.dropzone,i=e.element;return n===t.dropzone&&i===t.target}));e.activeDrops.splice(i,1);var o=new r(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new r(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&nt(r.prototype,e),r}(X.BaseEvent);tt.DropEvent=ct;var lt={};function ut(t,e){for(var n=0;n<t.slice().length;n++){var i=t.slice()[n],o=i.dropzone,r=i.element;e.dropzone=o,e.target=r,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function dt(t,e){for(var n=function(t,e){for(var n=t.interactables,i=[],o=0;o<n.list.length;o++){var a=n.list[o];if(a.options.drop.enabled){var s=a.options.drop.accept;if(!(r.default.element(s)&&s!==e||r.default.string(s)&&!S.matchesSelector(e,s)||r.default.func(s)&&!s({dropzone:a,draggableElement:e})))for(var c=r.default.string(a.target)?a._context.querySelectorAll(a.target):r.default.array(a.target)?a.target:[a.target],l=0;l<c.length;l++){var u=c[l];u!==e&&i.push({dropzone:a,element:u,rect:a.getRect(u)})}}}return i}(t,e),i=0;i<n.length;i++){var o=n[i];o.rect=o.dropzone.getRect(o.element)}return n}function pt(t,e,n){for(var i=t.dropState,o=t.interactable,r=t.element,a=[],s=0;s<i.activeDrops.length;s++){var c=i.activeDrops[s],l=c.dropzone,u=c.element,d=c.rect;a.push(l.dropCheck(e,n,o,r,u,d)?u:null)}var p=S.indexOfDeepestElement(a);return i.activeDrops[p]||null}function ht(t,e,n){var i=t.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new tt.DropEvent(i,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new tt.DropEvent(i,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),i.rejected||(i.cur.element!==i.prev.element&&(i.prev.dropzone&&(o.leave=new tt.DropEvent(i,n,"dragleave"),n.dragLeave=o.leave.target=i.prev.element,n.prevDropzone=o.leave.dropzone=i.prev.dropzone),i.cur.dropzone&&(o.enter=new tt.DropEvent(i,n,"dragenter"),n.dragEnter=i.cur.element,n.dropzone=i.cur.dropzone)),"dragend"===n.type&&i.cur.dropzone&&(o.drop=new tt.DropEvent(i,n,"drop"),n.dropzone=i.cur.dropzone,n.relatedTarget=i.cur.element),"dragmove"===n.type&&i.cur.dropzone&&(o.move=new tt.DropEvent(i,n,"dropmove"),o.move.dragmove=n,n.dropzone=i.cur.dropzone)),o}function ft(t,e){var n=t.dropState,i=n.activeDrops,o=n.cur,r=n.prev;e.leave&&r.dropzone.fire(e.leave),e.enter&&o.dropzone.fire(e.enter),e.move&&o.dropzone.fire(e.move),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&ut(i,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function gt(t,e){var n=t.interaction,i=t.iEvent,o=t.event;if("dragmove"===i.type||"dragend"===i.type){var r=n.dropState;e.dynamicDrop&&(r.activeDrops=dt(e,n.element));var a=i,s=pt(n,a,o);r.rejected=r.rejected&&!!s&&s.dropzone===r.cur.dropzone&&s.element===r.cur.element,r.cur.dropzone=s&&s.dropzone,r.cur.element=s&&s.element,r.events=ht(n,0,a)}}Object.defineProperty(lt,"__esModule",{value:!0}),lt.default=void 0;var mt={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,i=t.Interactable,o=t.defaults;t.usePlugin(u.default),i.prototype.dropzone=function(t){return function(t,e){if(r.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,q.default)(e.listeners),i=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(i),t.options.drop.listeners=i}return r.default.func(e.ondrop)&&t.on("drop",e.ondrop),r.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),r.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),r.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),r.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),r.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:r.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}return r.default.bool(e)?(t.options.drop.enabled=e,t):t.options.drop}(this,t)},i.prototype.dropCheck=function(t,e,n,i,o,a){return function(t,e,n,i,o,a,s){var c=!1;if(!(s=s||t.getRect(a)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,c,t,a,i,o);var l=t.options.drop.overlap;if("pointer"===l){var u=(0,D.default)(i,o,"drag"),d=N.getPageXY(e);d.x+=u.x,d.y+=u.y;var p=d.x>s.left&&d.x<s.right,h=d.y>s.top&&d.y<s.bottom;c=p&&h}var f=i.getRect(o);if(f&&"center"===l){var g=f.left+f.width/2,m=f.top+f.height/2;c=g>=s.left&&g<=s.right&&m>=s.top&&m<=s.bottom}return f&&r.default.number(l)&&(c=Math.max(0,Math.min(s.right,f.right)-Math.max(s.left,f.left))*Math.max(0,Math.min(s.bottom,f.bottom)-Math.max(s.top,f.top))/(f.width*f.height)>=l),t.options.drop.checker&&(c=t.options.drop.checker(e,n,c,t,a,i,o)),c}(this,t,e,n,i,o,a)},n.dynamicDrop=function(e){return r.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,k.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=mt.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,i=(t.event,t.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=dt(e,n.element),o.events=ht(n,0,i),o.events.activate&&(ut(o.activeDrops,o.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:i}))}},"interactions:action-move":gt,"interactions:after-action-move":function(t,e){var n=t.interaction,i=t.iEvent;"drag"===n.prepared.name&&(ft(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:i}),n.dropState.events={})},"interactions:action-end":function(t,e){if("drag"===t.interaction.prepared.name){var n=t.interaction,i=t.iEvent;gt(t,e),ft(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:i})}},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:dt,getDrop:pt,getDropEvents:ht,fireDropEvents:ft,defaults:{enabled:!1,accept:null,overlap:"pointer"}},vt=mt;lt.default=vt;var bt={};function yt(t){var e=t.interaction,n=t.iEvent,i=t.phase;if("gesture"===e.prepared.name){var o=e.pointers.map((function(t){return t.pointer})),a="start"===i,s="end"===i,c=e.interactable.options.deltaSource;if(n.touches=[o[0],o[1]],a)n.distance=N.touchDistance(o,c),n.box=N.touchBBox(o),n.scale=1,n.ds=0,n.angle=N.touchAngle(o,c),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var l=e.prevEvent;n.distance=l.distance,n.box=l.box,n.scale=l.scale,n.ds=0,n.angle=l.angle,n.da=0}else n.distance=N.touchDistance(o,c),n.box=N.touchBBox(o),n.scale=n.distance/e.gesture.startDistance,n.angle=N.touchAngle(o,c),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,r.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(bt,"__esModule",{value:!0}),bt.default=void 0;var wt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,i=t.defaults;n.prototype.gesturable=function(t){return r.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):r.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=wt,e.methodDict.gesture="gesturable",i.actions.gesture=wt.defaults},listeners:{"interactions:action-start":yt,"interactions:action-move":yt,"interactions:action-end":yt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},xt=wt;bt.default=xt;var St={};function Et(t,e,n,i,o,a,s){if(!e)return!1;if(!0===e){var c=r.default.number(a.width)?a.width:a.right-a.left,l=r.default.number(a.height)?a.height:a.bottom-a.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?c:l)/2)),c<0&&("left"===t?t="right":"right"===t&&(t="left")),l<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(c>=0?a.left:a.right)+s;if("top"===t)return n.y<(l>=0?a.top:a.bottom)+s;if("right"===t)return n.x>(c>=0?a.right:a.left)-s;if("bottom"===t)return n.y>(l>=0?a.bottom:a.top)-s}return!!r.default.element(i)&&(r.default.element(e)?e===i:S.matchesUpTo(i,e,o))}function _t(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var i=e;n.interactable.options.resize.square?("y"===n.resizeAxes?i.delta.x=i.delta.y:i.delta.y=i.delta.x,i.axes="xy"):(i.axes=n.resizeAxes,"x"===n.resizeAxes?i.delta.y=0:"y"===n.resizeAxes&&(i.delta.x=0))}}Object.defineProperty(St,"__esModule",{value:!0}),St.default=void 0;var Ot={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,i=t.Interactable,o=t.defaults;Ot.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),Ot.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,i.prototype.resizable=function(e){return function(t,e,n){return r.default.object(e)?(t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),r.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),r.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:r.default.bool(e.square)&&(t.options.resize.square=e.square),t):r.default.bool(e)?(t.options.resize.enabled=e,t):t.options.resize}(this,e,t)},e.map.resize=Ot,e.methodDict.resize="resizable",o.actions.resize=Ot.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var i=e,o=n.rect;n._rects={start:(0,k.default)({},o),corrected:(0,k.default)({},o),previous:(0,k.default)({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},i.edges=n.prepared.edges,i.rect=n._rects.corrected,i.deltaRect=n._rects.delta}}(t),_t(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var i=e,o=n.interactable.options.resize.invert,r="reposition"===o||"negate"===o,a=n.rect,s=n._rects,c=s.start,l=s.corrected,u=s.delta,d=s.previous;if((0,k.default)(d,l),r){if((0,k.default)(l,a),"reposition"===o){if(l.top>l.bottom){var p=l.top;l.top=l.bottom,l.bottom=p}if(l.left>l.right){var h=l.left;l.left=l.right,l.right=h}}}else l.top=Math.min(a.top,c.bottom),l.bottom=Math.max(a.bottom,c.top),l.left=Math.min(a.left,c.right),l.right=Math.max(a.right,c.left);for(var f in l.width=l.right-l.left,l.height=l.bottom-l.top,l)u[f]=l[f]-d[f];i.edges=n.prepared.edges,i.rect=l,i.deltaRect=u}}(t),_t(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var i=e;i.edges=n.prepared.edges,i.rect=n._rects.corrected,i.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,i=t.element,o=t.rect,a=t.buttons;if(o){var s=(0,k.default)({},e.coords.cur.page),c=n.options.resize;if(c&&c.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(a&c.mouseButtons))){if(r.default.object(c.edges)){var l={left:!1,right:!1,top:!1,bottom:!1};for(var u in l)l[u]=Et(u,c.edges[u],s,e._latestPointer.eventTarget,i,o,c.margin||Ot.defaultMargin);l.left=l.left&&!l.right,l.top=l.top&&!l.bottom,(l.left||l.right||l.top||l.bottom)&&(t.action={name:"resize",edges:l})}else{var d="y"!==c.axis&&s.x>o.right-Ot.defaultMargin,p="x"!==c.axis&&s.y>o.bottom-Ot.defaultMargin;(d||p)&&(t.action={name:"resize",axes:(d?"x":"")+(p?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,i=t.name,o=Ot.cursors,r=null;if(n)r=o[i+n];else if(e){for(var a="",s=["top","bottom","left","right"],c=0;c<s.length;c++){var l=s[c];e[l]&&(a+=l)}r=o[a]}return r},defaultMargin:null},Mt=Ot;St.default=Mt;var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.default=void 0;var zt={id:"actions",install:function(t){t.usePlugin(bt.default),t.usePlugin(St.default),t.usePlugin(u.default),t.usePlugin(lt.default)}};Pt.default=zt;var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.default=void 0;var Tt,At,Ct=0,Dt={request:function(t){return Tt(t)},cancel:function(t){return At(t)},init:function(t){if(Tt=t.requestAnimationFrame,At=t.cancelAnimationFrame,!Tt)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var i=e[n];Tt=t["".concat(i,"RequestAnimationFrame")],At=t["".concat(i,"CancelAnimationFrame")]||t["".concat(i,"CancelRequestAnimationFrame")]}Tt=Tt&&Tt.bind(t),At=At&&At.bind(t),Tt||(Tt=function(e){var n=Date.now(),i=Math.max(0,16-(n-Ct)),o=t.setTimeout((function(){e(n+i)}),i);return Ct=n+i,o},At=function(t){return clearTimeout(t)})}};kt.default=Dt;var qt={};Object.defineProperty(qt,"__esModule",{value:!0}),qt.getContainer=It,qt.getScroll=Rt,qt.getScrollSize=function(t){return r.default.window(t)&&(t=window.document.body),{x:t.scrollWidth,y:t.scrollHeight}},qt.getScrollSizeDelta=function(t,e){var n=t.interaction,i=t.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return e(),{x:0,y:0};var r=It(o.container,n.interactable,i),a=Rt(r);e();var s=Rt(r);return{x:s.x-a.x,y:s.y-a.y}},qt.default=void 0;var jt={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){jt.isScrolling=!0,kt.default.cancel(jt.i),t.autoScroll=jt,jt.interaction=t,jt.prevTime=jt.now(),jt.i=kt.default.request(jt.scroll)},stop:function(){jt.isScrolling=!1,jt.interaction&&(jt.interaction.autoScroll=null),kt.default.cancel(jt.i)},scroll:function(){var t=jt.interaction,e=t.interactable,n=t.element,i=t.prepared.name,o=e.options[i].autoScroll,a=It(o.container,e,n),s=jt.now(),c=(s-jt.prevTime)/1e3,l=o.speed*c;if(l>=1){var u={x:jt.x*l,y:jt.y*l};if(u.x||u.y){var d=Rt(a);r.default.window(a)?a.scrollBy(u.x,u.y):a&&(a.scrollLeft+=u.x,a.scrollTop+=u.y);var p=Rt(a),h={x:p.x-d.x,y:p.y-d.y};(h.x||h.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:h,interaction:t,container:a})}jt.prevTime=s}jt.isScrolling&&(kt.default.cancel(jt.i),jt.i=kt.default.request(jt.scroll))},check:function(t,e){var n;return null==(n=t.options[e].autoScroll)?void 0:n.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&jt.check(e.interactable,e.prepared.name))if(e.simulation)jt.x=jt.y=0;else{var i,o,a,s,c=e.interactable,l=e.element,u=e.prepared.name,d=c.options[u].autoScroll,p=It(d.container,c,l);if(r.default.window(p))s=n.clientX<jt.margin,i=n.clientY<jt.margin,o=n.clientX>p.innerWidth-jt.margin,a=n.clientY>p.innerHeight-jt.margin;else{var h=S.getElementClientRect(p);s=n.clientX<h.left+jt.margin,i=n.clientY<h.top+jt.margin,o=n.clientX>h.right-jt.margin,a=n.clientY>h.bottom-jt.margin}jt.x=o?1:s?-1:0,jt.y=a?1:i?-1:0,jt.isScrolling||(jt.margin=d.margin,jt.speed=d.speed,jt.start(e))}}};function It(t,n,i){return(r.default.string(t)?(0,T.getStringOptionResult)(t,n,i):t)||(0,e.getWindow)(i)}function Rt(t){return r.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var $t={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=jt,jt.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=jt.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,jt.stop(),jt.interaction&&(jt.interaction=null)},"interactions:stop":jt.stop,"interactions:action-move":function(t){return jt.onInteractionMove(t)}}};qt.default=$t;var Lt={};Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.warnOnce=function(t,n){var i=!1;return function(){return i||(e.window.console.warn(n),i=!0),t.apply(this,arguments)}},Lt.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t},Lt.sign=void 0,Lt.sign=function(t){return t>=0?1:-1};var Nt={};function Ft(t){return r.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Bt(t){return r.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.default=void 0;var Vt={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,i,o){var r=function(t,e,n,i,o){var r=t.getRect(i),a={action:null,interactable:t,interaction:n,element:i,rect:r,buttons:e.buttons||{0:1,1:4,3:8,4:16}[e.button]};return o.fire("auto-start:check",a),a.action}(this,n,i,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,r,this,o,i):r},e.prototype.ignoreFrom=(0,Lt.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,Lt.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Bt,e.prototype.styleCursor=Ft}};Nt.default=Vt;var Ut={};function Ht(t,e,n,i,o){return e.testIgnoreAllow(e.options[t.name],n,i)&&e.options[t.name].enabled&&Gt(e,n,t,o)?t:null}function Wt(t,e,n,i,o,r,a){for(var s=0,c=i.length;s<c;s++){var l=i[s],u=o[s],d=l.getAction(e,n,t,u);if(d){var p=Ht(d,l,u,r,a);if(p)return{action:p,interactable:l,element:u}}}return{action:null,interactable:null,element:null}}function Xt(t,e,n,i,o){var a=[],s=[],c=i;function l(t){a.push(t),s.push(c)}for(;r.default.element(c);){a=[],s=[],o.interactables.forEachMatch(c,l);var u=Wt(t,e,n,a,s,i,o);if(u.action&&!u.interactable.options[u.action.name].manualStart)return u;c=S.parentNode(c)}return{action:null,interactable:null,element:null}}function Yt(t,e,n){var i=e.action,o=e.interactable,r=e.element;i=i||{name:null},t.interactable=o,t.element=r,(0,Lt.copyAction)(t.prepared,i),t.rect=o&&i.name?o.getRect(r):null,Kt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Gt(t,e,n,i){var o=t.options,r=o[n.name].max,a=o[n.name].maxPerElement,s=i.autoStart.maxInteractions,c=0,l=0,u=0;if(!(r&&a&&s))return!1;for(var d=0;d<i.interactions.list.length;d++){var p=i.interactions.list[d],h=p.prepared.name;if(p.interacting()){if(++c>=s)return!1;if(p.interactable===t){if((l+=h===n.name?1:0)>=r)return!1;if(p.element===e&&(u++,h===n.name&&u>=a))return!1}}}return s>0}function Qt(t,e){return r.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Jt(t,e,n){var i=n.autoStart.cursorElement;i&&i!==t&&(i.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Kt(t,e){var n=t.interactable,i=t.element,o=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var a="";if(o.name){var s=n.options[o.name].cursorChecker;a=r.default.func(s)?s(o,n,i,t._interacting):e.actions.map[o.name].getCursor(o)}Jt(t.element,a||"",e)}else e.autoStart.cursorElement&&Jt(e.autoStart.cursorElement,"",e)}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var Zt={id:"auto-start/base",before:["actions"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Nt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,k.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Qt(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Gt,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget;n.interacting()||Yt(n,Xt(n,i,o,r,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||Yt(n,Xt(n,i,o,r,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var i=n.interactable,o=n.prepared.name;o&&i&&(i.options[o].manualStart||!Gt(i,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,i,n.element),Kt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,i=n.interactable;i&&i.options.styleCursor&&Jt(n.element,"",e)}},maxInteractions:Qt,withinInteractionLimit:Gt,validateAction:Ht};Ut.default=Zt;var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.default=void 0;var ee={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,i=t.eventTarget,o=t.dx,a=t.dy;if("drag"===n.prepared.name){var s=Math.abs(o),c=Math.abs(a),l=n.interactable.options.drag,u=l.startAxis,d=s>c?"x":s<c?"y":"xy";if(n.prepared.axis="start"===l.lockAxis?d[0]:l.lockAxis,"xy"!==d&&"xy"!==u&&u!==d){n.prepared.name=null;for(var p=i,h=function(t){if(t!==n.interactable){var o=n.interactable.options.drag;if(!o.manualStart&&t.testIgnoreAllow(o,p,i)){var r=t.getAction(n.downPointer,n.downEvent,n,p);if(r&&"drag"===r.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(d,t)&&Ut.default.validateAction(r,t,p,i,e))return t}}};r.default.element(p);){var f=e.interactables.forEachMatch(p,h);if(f){n.prepared.name="drag",n.interactable=f,n.element=p;break}p=(0,S.parentNode)(p)}}}}}};te.default=ee;var ne={};function ie(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=void 0;var oe={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(Ut.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=ie(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.autoStartHoldTimer&&e.pointerWasMoved&&!n&&(clearTimeout(e.autoStartHoldTimer),e.autoStartHoldTimer=null)},"autoStart:before-start":function(t){var e=t.interaction;ie(e)>0&&(e.prepared.name=null)}},getHoldDuration:ie};ne.default=oe;var re={};Object.defineProperty(re,"__esModule",{value:!0}),re.default=void 0;var ae={id:"auto-start",install:function(t){t.usePlugin(Ut.default),t.usePlugin(ne.default),t.usePlugin(te.default)}};re.default=ae;var se={};function ce(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):r.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function le(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function ue(t){var n=t.Interactable;n.prototype.preventDefault=ce,n.prototype.checkAndPreventDefault=function(n){return function(t,n,i){var o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(n.events.supportsPassive&&/^touch(start|move)$/.test(i.type)){var a=(0,e.getWindow)(i.target).document,s=n.getDocOptions(a);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(i.type)||r.default.element(i.target)&&(0,S.matchesSelector)(i.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||i.preventDefault()}else i.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var i=t.interactions.list[n];if(i.element&&(i.element===e.target||(0,S.nodeContains)(i.element,e.target)))return void i.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(se,"__esModule",{value:!0}),se.install=ue,se.default=void 0;var de={id:"core/interactablePreventDefault",install:ue,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=le,t}),{})};se.default=de;var pe={};Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=void 0,pe.default={};var he,fe={};Object.defineProperty(fe,"__esModule",{value:!0}),fe.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(he||(he={})),he.touchAction,he.boxSizing,he.noListeners;var ge={id:"dev-tools",install:function(){}};fe.default=ge;var me={};Object.defineProperty(me,"__esModule",{value:!0}),me.default=function t(e){var n={};for(var i in e){var o=e[i];r.default.plainObject(o)?n[i]=t(o):r.default.array(o)?n[i]=J.from(o):n[i]=o}return n};var ve={};function be(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return ye(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ye(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function we(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(ve,"__esModule",{value:!0}),ve.getRectOffset=_e,ve.default=void 0;var Se=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),xe(this,"states",[]),xe(this,"startOffset",{left:0,right:0,top:0,bottom:0}),xe(this,"startDelta",void 0),xe(this,"result",void 0),xe(this,"endResult",void 0),xe(this,"edges",void 0),xe(this,"interaction",void 0),this.interaction=e,this.result=Ee()}var e;return(e=[{key:"start",value:function(t,e){var n=t.phase,i=this.interaction,o=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(i);this.prepareStates(o),this.edges=(0,k.default)({},i.edges),this.startOffset=_e(i.rect,e),this.startDelta={x:0,y:0};var r=this.fillArg({phase:n,pageCoords:e,preEnd:!1});return this.result=Ee(),this.startAll(r),this.result=this.setAll(r)}},{key:"fillArg",value:function(t){var e=this.interaction;return t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset,t}},{key:"startAll",value:function(t){for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}}},{key:"setAll",value:function(t){var e=t.phase,n=t.preEnd,i=t.skipModifiers,o=t.rect;t.coords=(0,k.default)({},t.pageCoords),t.rect=(0,k.default)({},o);for(var r=i?this.states.slice(i):this.states,a=Ee(t.coords,t.rect),s=0;s<r.length;s++){var c,l=r[s],u=l.options,d=(0,k.default)({},t.coords),p=null;null!=(c=l.methods)&&c.set&&this.shouldDo(u,n,e)&&(t.state=l,p=l.methods.set(t),T.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-d.x,y:t.coords.y-d.y})),a.eventProps.push(p)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;var h=this.result.coords,f=this.result.rect;if(h&&f){var g=a.rect.left!==f.left||a.rect.right!==f.right||a.rect.top!==f.top||a.rect.bottom!==f.bottom;a.changed=g||h.x!==a.coords.x||h.y!==a.coords.y}return a}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,i=e.coords.cur,o=e.coords.start,r=this.result,a=this.startDelta,s=r.delta;"start"===n&&(0,k.default)(this.startDelta,r.delta);for(var c=0;c<[[o,a],[i,s]].length;c++){var l=be([[o,a],[i,s]][c],2),u=l[0],d=l[1];u.page.x+=d.x,u.page.y+=d.y,u.client.x+=d.x,u.client.y+=d.y}var p=this.result.rectDelta,h=t.rect||e.rect;h.left+=p.left,h.right+=p.right,h.top+=p.top,h.bottom+=p.bottom,h.width=h.right-h.left,h.height=h.bottom-h.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,i=t.preEnd,o=t.skipModifiers,r=this.setAll(this.fillArg({preEnd:i,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page}));if(this.result=r,!r.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};r.coords.x+=s.x,r.coords.y+=s.y,r.delta.x+=s.x,r.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,i=this.states;if(i&&i.length){for(var o=!1,r=0;r<i.length;r++){var a=i[r];t.state=a;var s=a.options,c=a.methods,l=c.beforeEnd&&c.beforeEnd(t);if(l)return this.endResult=l,!1;o=o||!o&&this.shouldDo(s,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,k.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var i=0;i<this.states.length;i++){var o=this.states[i];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],i=n.options,o=n.methods,r=n.name;this.states.push({options:i,methods:o,index:e,name:r})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,i=e.rect,o=e.modification;if(o.result){for(var r=o.startDelta,a=o.result,s=a.delta,c=a.rectDelta,l=[[n.start,r],[n.cur,s]],u=0;u<l.length;u++){var d=be(l[u],2),p=d[0],h=d[1];p.page.x-=h.x,p.page.y-=h.y,p.client.x-=h.x,p.client.y-=h.y}i.left-=c.left,i.right-=c.right,i.top-=c.top,i.bottom-=c.bottom}}},{key:"shouldDo",value:function(t,e,n,i){return!(!t||!1===t.enabled||i&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,me.default)(t)})),this.result=Ee((0,k.default)({},t.result.coords),(0,k.default)({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}])&&we(t.prototype,e),t}();function Ee(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function _e(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}ve.default=Se;var Oe={};function Me(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.makeModifier=function(t,e){var n=t.defaults,i={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=function(t){var o=t||{};for(var r in o.enabled=!1!==o.enabled,n)r in o||(o[r]=n[r]);var a={options:o,methods:i,name:e,enable:function(){return o.enabled=!0,a},disable:function(){return o.enabled=!1,a}};return a};return e&&"string"==typeof e&&(o._defaults=n,o._methods=i),o},Oe.addEventModifiers=Me,Oe.default=void 0;var Pe={id:"modifiers/base",before:["actions"],install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new ve.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":Me,"interactions:action-move":Me,"interactions:action-end":Me,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}}};Oe.default=Pe;var ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.defaults=void 0,ze.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var ke={};function Te(t){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ae(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ce(t,e){return(Ce=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function De(t,e){return!e||"object"!==Te(e)&&"function"!=typeof e?qe(t):e}function qe(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function je(t){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(ke,"__esModule",{value:!0}),ke.InteractEvent=void 0;var Re=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ce(t,e)}(r,t);var e,n,i,o=(n=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=je(n);if(i){var o=je(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return De(this,t)});function r(t,e,n,i,a,s,c){var l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),Ie(qe(l=o.call(this,t)),"target",void 0),Ie(qe(l),"currentTarget",void 0),Ie(qe(l),"relatedTarget",null),Ie(qe(l),"screenX",void 0),Ie(qe(l),"screenY",void 0),Ie(qe(l),"button",void 0),Ie(qe(l),"buttons",void 0),Ie(qe(l),"ctrlKey",void 0),Ie(qe(l),"shiftKey",void 0),Ie(qe(l),"altKey",void 0),Ie(qe(l),"metaKey",void 0),Ie(qe(l),"page",void 0),Ie(qe(l),"client",void 0),Ie(qe(l),"delta",void 0),Ie(qe(l),"rect",void 0),Ie(qe(l),"x0",void 0),Ie(qe(l),"y0",void 0),Ie(qe(l),"t0",void 0),Ie(qe(l),"dt",void 0),Ie(qe(l),"duration",void 0),Ie(qe(l),"clientX0",void 0),Ie(qe(l),"clientY0",void 0),Ie(qe(l),"velocity",void 0),Ie(qe(l),"speed",void 0),Ie(qe(l),"swipe",void 0),Ie(qe(l),"timeStamp",void 0),Ie(qe(l),"axes",void 0),Ie(qe(l),"preEnd",void 0),a=a||t.element;var u=t.interactable,d=(u&&u.options||ze.defaults).deltaSource,p=(0,D.default)(u,a,n),h="start"===i,f="end"===i,g=h?qe(l):t.prevEvent,m=h?t.coords.start:f?{page:g.page,client:g.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return l.page=(0,k.default)({},m.page),l.client=(0,k.default)({},m.client),l.rect=(0,k.default)({},t.rect),l.timeStamp=m.timeStamp,f||(l.page.x-=p.x,l.page.y-=p.y,l.client.x-=p.x,l.client.y-=p.y),l.ctrlKey=e.ctrlKey,l.altKey=e.altKey,l.shiftKey=e.shiftKey,l.metaKey=e.metaKey,l.button=e.button,l.buttons=e.buttons,l.target=a,l.currentTarget=a,l.preEnd=s,l.type=c||n+(i||""),l.interactable=u,l.t0=h?t.pointers[t.pointers.length-1].downTime:g.t0,l.x0=t.coords.start.page.x-p.x,l.y0=t.coords.start.page.y-p.y,l.clientX0=t.coords.start.client.x-p.x,l.clientY0=t.coords.start.client.y-p.y,l.delta=h||f?{x:0,y:0}:{x:l[d].x-g[d].x,y:l[d].y-g[d].y},l.dt=t.coords.delta.timeStamp,l.duration=l.timeStamp-l.t0,l.velocity=(0,k.default)({},t.coords.velocity[d]),l.speed=(0,I.default)(l.velocity.x,l.velocity.y),l.swipe=f||"inertiastart"===i?l.getSwipe():null,l}return(e=[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,i=202.5<=e&&e<337.5;return{up:i,down:!i&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Ae(r.prototype,e),r}(X.BaseEvent);ke.InteractEvent=Re,Object.defineProperties(Re.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var $e={};function Le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty($e,"__esModule",{value:!0}),$e.PointerInfo=void 0,$e.PointerInfo=function t(e,n,i,o,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Le(this,"id",void 0),Le(this,"pointer",void 0),Le(this,"event",void 0),Le(this,"downTime",void 0),Le(this,"downTarget",void 0),this.id=e,this.pointer=n,this.event=i,this.downTime=o,this.downTarget=r};var Ne,Fe,Be={};function Ve(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Be,"__esModule",{value:!0}),Object.defineProperty(Be,"PointerInfo",{enumerable:!0,get:function(){return $e.PointerInfo}}),Be.default=Be.Interaction=Be._ProxyMethods=Be._ProxyValues=void 0,Be._ProxyValues=Ne,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Ne||(Be._ProxyValues=Ne={})),Be._ProxyMethods=Fe,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(Fe||(Be._ProxyMethods=Fe={}));var He=0,We=function(){function t(e){var n=this,i=e.pointerType,o=e.scopeFire;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Ue(this,"interactable",null),Ue(this,"element",null),Ue(this,"rect",void 0),Ue(this,"_rects",void 0),Ue(this,"edges",void 0),Ue(this,"_scopeFire",void 0),Ue(this,"prepared",{name:null,axis:null,edges:null}),Ue(this,"pointerType",void 0),Ue(this,"pointers",[]),Ue(this,"downEvent",null),Ue(this,"downPointer",{}),Ue(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Ue(this,"prevEvent",null),Ue(this,"pointerIsDown",!1),Ue(this,"pointerWasMoved",!1),Ue(this,"_interacting",!1),Ue(this,"_ending",!1),Ue(this,"_stopped",!0),Ue(this,"_proxy",null),Ue(this,"simulation",null),Ue(this,"doMove",(0,Lt.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()")),Ue(this,"coords",{start:N.newCoords(),prev:N.newCoords(),cur:N.newCoords(),delta:N.newCoords(),velocity:N.newCoords()}),Ue(this,"_id",He++),this._scopeFire=o,this.pointerType=i;var r=this;this._proxy={};var a=function(t){Object.defineProperty(n._proxy,t,{get:function(){return r[t]}})};for(var s in Ne)a(s);var c=function(t){Object.defineProperty(n._proxy,t,{value:function(){return r[t].apply(r,arguments)}})};for(var l in Fe)c(l);this._scopeFire("interactions:new",{interaction:this})}var e;return(e=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(t,e,n){var i=this.updatePointer(t,e,n,!0),o=this.pointers[i];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:i,pointerInfo:o,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,Lt.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,k.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var i,o,r=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(i=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,I.default)(i,o)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:i,dy:o,duplicate:r,interaction:this};r||N.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),r||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&N.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||N.setZeroCoords(this.coords.delta),(t=(0,k.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,i){var o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));var r=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(r),{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:r,curEventTarget:i,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=N.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:J.findIndex(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,i){var o=N.getPointerId(t),r=this.getPointerIndex(t),a=this.pointers[r];return i=!1!==i&&(i||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new $e.PointerInfo(o,t,e,null,null),r=this.pointers.length,this.pointers.push(a)),N.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),N.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),i&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,N.pointerExtend(this.downPointer,t),this.interacting()||(N.copyCoords(this.coords.start,this.coords.cur),N.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:i,pointerInfo:a,pointerIndex:r,interaction:this}),r}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var i=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:i,interaction:this}),this.pointers.splice(n,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,i){return new ke.InteractEvent(this,t,this.prepared.name,e,this.element,n,i)}},{key:"_fireEvent",value:function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,i=t.preEnd,o=t.type,r=this.rect;if(r&&"move"===n&&(T.addEdges(this.edges,r,this.coords.delta[this.interactable.options.deltaSource]),r.width=r.right-r.left,r.height=r.bottom-r.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,i,o);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}])&&Ve(t.prototype,e),t}();Be.Interaction=We;var Xe=We;Be.default=Xe;var Ye={};function Ge(t){t.pointerIsDown&&(Ze(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function Qe(t){Je(t.interaction)}function Je(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return Ze(t.coords.cur,e),Ze(t.coords.delta,e),T.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function Ke(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function Ze(t,e){var n=t.page,i=t.client,o=e.x,r=e.y;n.x+=o,n.y+=r,i.x+=o,i.y+=r}Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.addTotal=Ge,Ye.applyPending=Je,Ye.default=void 0,Be._ProxyMethods.offsetBy="";var tn={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(t){t.Interaction.prototype.offsetBy=Ke},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return Ge(t.interaction)},"interactions:before-action-start":Qe,"interactions:before-action-move":Qe,"interactions:before-action-end":function(t){var e=t.interaction;if(Je(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};Ye.default=tn;var en={};function nn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function on(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(en,"__esModule",{value:!0}),en.default=en.InertiaState=void 0;var rn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),on(this,"active",!1),on(this,"isModified",!1),on(this,"smoothEnd",!1),on(this,"allowResume",!1),on(this,"modification",void 0),on(this,"modifierCount",0),on(this,"modifierArg",void 0),on(this,"startCoords",void 0),on(this,"t0",0),on(this,"v0",0),on(this,"te",0),on(this,"targetOffset",void 0),on(this,"modifiedOffset",void 0),on(this,"currentOffset",void 0),on(this,"lambda_v0",0),on(this,"one_ve_v0",0),on(this,"timeout",void 0),on(this,"interaction",void 0),this.interaction=e}var e;return(e=[{key:"start",value:function(t){var e=this.interaction,n=an(e);if(!n||!n.enabled)return!1;var i=e.coords.velocity.client,o=(0,I.default)(i.x,i.y),r=this.modification||(this.modification=new ve.default(e));if(r.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=o,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg=r.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-e.coords.cur.timeStamp<50&&o>n.minSpeed&&o>n.endSpeed)this.startInertia();else{if(r.result=r.setAll(this.modifierArg),!r.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=an(this.interaction),i=n.resistance,o=-Math.log(n.endSpeed/this.v0)/i;this.targetOffset={x:(e.x-o)/i,y:(e.y-o)/i},this.te=o,this.lambda_v0=i/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var r=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},r.result=r.setAll(a),r.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+r.result.delta.x,y:this.targetOffset.y+r.result.delta.y}),this.onNextFrame((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return t.smoothEndTick()}))}},{key:"onNextFrame",value:function(t){var e=this;this.timeout=kt.default.request((function(){e.active&&t()}))}},{key:"inertiaTick",value:function(){var t,e,n,i,o,r=this,a=this.interaction,s=an(a).resistance,c=(a._now()-this.t0)/1e3;if(c<this.te){var l,u=1-(Math.exp(-s*c)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=this.targetOffset.x,e=this.targetOffset.y,n=this.modifiedOffset.x,i=this.modifiedOffset.y,l={x:sn(o=u,0,t,n),y:sn(o,0,e,i)}):l={x:this.targetOffset.x*u,y:this.targetOffset.y*u};var d={x:l.x-this.currentOffset.x,y:l.y-this.currentOffset.y};this.currentOffset.x+=d.x,this.currentOffset.y+=d.y,a.offsetBy(d),a.move(),this.onNextFrame((function(){return r.inertiaTick()}))}else a.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,i=an(e).smoothEndDuration;if(n<i){var o={x:cn(n,0,this.targetOffset.x,i),y:cn(n,0,this.targetOffset.y,i)},r={x:o.x-this.currentOffset.x,y:o.y-this.currentOffset.y};this.currentOffset.x+=r.x,this.currentOffset.y+=r.y,e.offsetBy(r),e.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,i=t.eventTarget,o=this.interaction;o.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),o.updatePointer(e,n,i,!0),o._doPhase({interaction:o,event:n,phase:"resume"}),(0,N.copyCoords)(o.coords.prev,o.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,kt.default.cancel(this.timeout)}}])&&nn(t.prototype,e),t}();function an(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function sn(t,e,n,i){var o=1-t;return o*o*e+2*o*t*n+t*t*i}function cn(t,e,n,i){return-n*(t/=i)*(t-2)+e}en.InertiaState=rn;var ln={id:"inertia",before:["modifiers","actions"],install:function(t){var e=t.defaults;t.usePlugin(Ye.default),t.usePlugin(Oe.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new rn(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,i=e.inertia;if(i.active)for(var o=n;r.default.element(o);){if(o===e.element){i.resume(t);break}o=S.parentNode(o)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":Oe.addEventModifiers,"interactions:action-inertiastart":Oe.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};en.default=ln;var un={};function dn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function pn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hn(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(t.immediatePropagationStopped)break;i(t)}}Object.defineProperty(un,"__esModule",{value:!0}),un.Eventable=void 0;var fn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),pn(this,"options",void 0),pn(this,"types",{}),pn(this,"propagationStopped",!1),pn(this,"immediatePropagationStopped",!1),pn(this,"global",void 0),this.options=(0,k.default)({},e||{})}var e;return(e=[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&hn(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&hn(t,e)}},{key:"on",value:function(t,e){var n=(0,q.default)(t,e);for(t in n)this.types[t]=J.merge(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=(0,q.default)(t,e);for(t in n){var i=this.types[t];if(i&&i.length)for(var o=0;o<n[t].length;o++){var r=n[t][o],a=i.indexOf(r);-1!==a&&i.splice(a,1)}}}},{key:"getRect",value:function(t){return null}}])&&dn(t.prototype,e),t}();un.Eventable=fn;var gn={};Object.defineProperty(gn,"__esModule",{value:!0}),gn.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var mn={};Object.defineProperty(mn,"__esModule",{value:!0}),mn.createInteractStatic=function(t){var e=function e(n,i){var o=t.interactables.get(n,i);return o||((o=t.interactables.new(n,i)).events.global=e.globalEvents),o};return e.getPointerAverage=N.pointerAverage,e.getTouchBBox=N.touchBBox,e.getTouchDistance=N.touchDistance,e.getTouchAngle=N.touchAngle,e.getElementRect=S.getElementRect,e.getElementClientRect=S.getElementClientRect,e.matchesSelector=S.matchesSelector,e.closest=S.closest,e.globalEvents={},e.version="1.10.11",e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=(0,Lt.warnOnce)((function(t,e,n){if(r.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),r.default.array(t)){for(var i=0;i<t.length;i++){var o=t[i];this.on(o,e,n)}return this}if(r.default.object(t)){for(var a in t)this.on(a,t[a],e);return this}return(0,gn.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this}),"The interact.on() method is being deprecated"),e.off=(0,Lt.warnOnce)((function(t,e,n){if(r.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),r.default.array(t)){for(var i=0;i<t.length;i++){var o=t[i];this.off(o,e,n)}return this}if(r.default.object(t)){for(var a in t)this.off(a,t[a],e);return this}var s;return(0,gn.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n),this}),"The interact.off() method is being deprecated"),e.debug=function(){return this.scope},e.supportsTouch=function(){return y.default.supportsTouch},e.supportsPointerEvent=function(){return y.default.supportsPointerEvent},e.stop=function(){for(var t=0;t<this.scope.interactions.list.length;t++)this.scope.interactions.list[t].stop();return this},e.pointerMoveTolerance=function(t){return r.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e};var vn={};function bn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(vn,"__esModule",{value:!0}),vn.Interactable=void 0;var wn=function(){function t(n,i,o,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),yn(this,"options",void 0),yn(this,"_actions",void 0),yn(this,"target",void 0),yn(this,"events",new un.Eventable),yn(this,"_context",void 0),yn(this,"_win",void 0),yn(this,"_doc",void 0),yn(this,"_scopeEvents",void 0),yn(this,"_rectChecker",void 0),this._actions=i.actions,this.target=n,this._context=i.context||o,this._win=(0,e.getWindow)((0,S.trySelector)(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=r,this.set(i)}var n;return(n=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(t,e){return r.default.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),r.default.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),r.default.func(e.onend)&&this.on("".concat(t,"end"),e.onend),r.default.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){(r.default.array(e)||r.default.object(e))&&this.off(t,e),(r.default.array(n)||r.default.object(n))&&this.on(t,n)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var i in e){var o=i,a=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,a.listeners,s),r.default.array(s)?a[o]=J.from(s):r.default.plainObject(s)?(a[o]=(0,k.default)(a[o]||{},(0,me.default)(s)),r.default.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(a[o].enabled=!1!==s.enabled)):r.default.bool(s)&&r.default.object(n.perAction[o])?a[o].enabled=s:a[o]=s}}},{key:"getRect",value:function(t){return t=t||(r.default.element(this.target)?this.target:null),r.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,S.getElementRect)(t)}},{key:"rectChecker",value:function(t){var e=this;return r.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,k.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if((0,S.trySelector)(e)||r.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||(0,S.nodeContains)(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!r.default.element(n)&&(r.default.string(t)?(0,S.matchesUpTo)(n,t,e):!!r.default.element(t)&&(0,S.nodeContains)(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!r.default.element(n))&&(r.default.string(t)?(0,S.matchesUpTo)(n,t,e):!!r.default.element(t)&&(0,S.nodeContains)(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,i){r.default.object(e)&&!r.default.array(e)&&(i=n,n=null);var o="on"===t?"add":"remove",a=(0,q.default)(e,n);for(var s in a){"wheel"===s&&(s=y.default.wheelEvent);for(var c=0;c<a[s].length;c++){var l=a[s][c];(0,gn.default)(s,this._actions)?this.events[t](s,l):r.default.string(this.target)?this._scopeEvents["".concat(o,"Delegate")](this.target,this._context,s,l,i):this._scopeEvents[o](this.target,s,l,i)}}return this}},{key:"on",value:function(t,e,n){return this._onOff("on",t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff("off",t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in r.default.object(t)||(t={}),this.options=(0,me.default)(e.base),this._actions.methodDict){var i=n,o=this._actions.methodDict[i];this.options[i]={},this.setPerAction(i,(0,k.default)((0,k.default)({},e.perAction),e.actions[i])),this[o](t[i])}for(var a in t)r.default.func(this[a])&&this[a](t[a]);return this}},{key:"unset",value:function(){if(r.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var i=e[n],o=i.selector,a=i.context,s=i.listeners;o===this.target&&a===this._context&&e.splice(n,1);for(var c=s.length-1;c>=0;c--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[c][0],s[c][1])}else this._scopeEvents.remove(this.target,"all")}}])&&bn(t.prototype,n),t}();vn.Interactable=wn;var xn={};function Sn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function En(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(xn,"__esModule",{value:!0}),xn.InteractableSet=void 0;var _n=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),En(this,"list",[]),En(this,"selectorMap",{}),En(this,"scope",void 0),this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,i=e.target,o=e._context,a=r.default.string(i)?n.selectorMap[i]:i[n.scope.id],s=J.findIndex(a,(function(t){return t.context===o}));a[s]&&(a[s].context=null,a[s].interactable=null),a.splice(s,1)}})}var e;return(e=[{key:"new",value:function(t,e){e=(0,k.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),i={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),r.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(i)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(i)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,i=r.default.string(t),o=i?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var a=J.find(o,(function(e){return e.context===n&&(i||e.interactable.inContext(t))}));return a&&a.interactable}},{key:"forEachMatch",value:function(t,e){for(var n=0;n<this.list.length;n++){var i=this.list[n],o=void 0;if((r.default.string(i.target)?r.default.element(t)&&S.matchesSelector(t,i.target):t===i.target)&&i.inContext(t)&&(o=e(i)),void 0!==o)return o}}}])&&Sn(t.prototype,e),t}();xn.InteractableSet=_n;var On={};function Mn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Pn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return kn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kn(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0;var Tn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Pn(this,"currentTarget",void 0),Pn(this,"originalEvent",void 0),Pn(this,"type",void 0),this.originalEvent=e,(0,R.default)(this,e)}var e;return(e=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Mn(t.prototype,e),t}();function An(t){if(!r.default.object(t))return{capture:!!t,passive:!1};var e=(0,k.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var Cn={id:"events",install:function(t){var e,n=[],i={},o=[],a={add:s,remove:c,addDelegate:function(t,e,n,r,a){var c=An(a);if(!i[n]){i[n]=[];for(var d=0;d<o.length;d++){var p=o[d];s(p,n,l),s(p,n,u,!0)}}var h=i[n],f=J.find(h,(function(n){return n.selector===t&&n.context===e}));f||(f={selector:t,context:e,listeners:[]},h.push(f)),f.listeners.push([r,c])},removeDelegate:function(t,e,n,o,r){var a,s=An(r),d=i[n],p=!1;if(d)for(a=d.length-1;a>=0;a--){var h=d[a];if(h.selector===t&&h.context===e){for(var f=h.listeners,g=f.length-1;g>=0;g--){var m=zn(f[g],2),v=m[0],b=m[1],y=b.capture,w=b.passive;if(v===o&&y===s.capture&&w===s.passive){f.splice(g,1),f.length||(d.splice(a,1),c(e,n,l),c(e,n,u,!0)),p=!0;break}}if(p)break}}},delegateListener:l,delegateUseCapture:u,delegatedEvents:i,documents:o,targets:n,supportsOptions:!1,supportsPassive:!1};function s(t,e,i,o){var r=An(o),s=J.find(n,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},n.push(s)),s.events[e]||(s.events[e]=[]),t.addEventListener&&!J.contains(s.events[e],i)&&(t.addEventListener(e,i,a.supportsOptions?r:r.capture),s.events[e].push(i))}function c(t,e,i,o){var r=An(o),s=J.findIndex(n,(function(e){return e.eventTarget===t})),l=n[s];if(l&&l.events)if("all"!==e){var u=!1,d=l.events[e];if(d){if("all"===i){for(var p=d.length-1;p>=0;p--)c(t,e,d[p],r);return}for(var h=0;h<d.length;h++)if(d[h]===i){t.removeEventListener(e,i,a.supportsOptions?r:r.capture),d.splice(h,1),0===d.length&&(delete l.events[e],u=!0);break}}u&&!Object.keys(l.events).length&&n.splice(s,1)}else for(e in l.events)l.events.hasOwnProperty(e)&&c(t,e,"all")}function l(t,e){for(var n=An(e),o=new Tn(t),a=i[t.type],s=zn(N.getEventTargets(t),1)[0],c=s;r.default.element(c);){for(var l=0;l<a.length;l++){var u=a[l],d=u.selector,p=u.context;if(S.matchesSelector(c,d)&&S.nodeContains(p,s)&&S.nodeContains(p,c)){var h=u.listeners;o.currentTarget=c;for(var f=0;f<h.length;f++){var g=zn(h[f],2),m=g[0],v=g[1],b=v.capture,y=v.passive;b===n.capture&&y===n.passive&&m(o)}}}c=S.parentNode(c)}}function u(t){return l(t,!0)}return null==(e=t.document)||e.createElement("div").addEventListener("test",null,{get capture(){return a.supportsOptions=!0},get passive(){return a.supportsPassive=!0}}),t.events=a,a}};On.default=Cn;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.default=void 0;var qn={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<qn.methodOrder.length;e++){var n;n=qn.methodOrder[e];var i=qn[n](t);if(i)return i}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,i=t.eventTarget,o=t.scope;if(!/down|start/i.test(n))return null;for(var r=0;r<o.interactions.list.length;r++){var a=o.interactions.list[r],s=i;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=S.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,i=t.pointerType,o=t.eventType,r=t.scope;if("mouse"!==i&&"pen"!==i)return null;for(var a=0;a<r.interactions.list.length;a++){var s=r.interactions.list[a];if(s.pointerType===i){if(s.simulation&&!jn(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var c=0;c<r.interactions.list.length;c++){var l=r.interactions.list[c];if(!(l.pointerType!==i||/down/i.test(o)&&l.simulation))return l}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,i=0;i<n.interactions.list.length;i++){var o=n.interactions.list[i];if(jn(o,e))return o}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,i=0;i<n.interactions.list.length;i++){var o=n.interactions.list[i];if(1===o.pointers.length){var r=o.interactable;if(r&&(!r.options.gesture||!r.options.gesture.enabled))continue}else if(o.pointers.length>=2)continue;if(!o.interacting()&&e===o.pointerType)return o}return null}};function jn(t,e){return t.pointers.some((function(t){return t.id===e}))}var In=qn;Dn.default=In;var Rn={};function $n(t){return($n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ln(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Nn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Nn(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Nn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function Fn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Vn(t,e){return(Vn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Un(t,e){return!e||"object"!==$n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Hn(t){return(Hn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Rn,"__esModule",{value:!0}),Rn.default=void 0;var Wn=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Xn(t,e){return function(n){var i=e.interactions.list,o=N.getPointerType(n),r=Ln(N.getEventTargets(n),2),a=r[0],s=r[1],c=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var l=0;l<n.changedTouches.length;l++){var u=n.changedTouches[l],d={pointer:u,pointerId:N.getPointerId(u),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},p=Yn(d);c.push([d.pointer,d.eventTarget,d.curEventTarget,p])}}else{var h=!1;if(!y.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var f=0;f<i.length&&!h;f++)h="mouse"!==i[f].pointerType&&i[f].pointerIsDown;h=h||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!h){var g={pointer:n,pointerId:N.getPointerId(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},m=Yn(g);c.push([g.pointer,g.eventTarget,g.curEventTarget,m])}}for(var v=0;v<c.length;v++){var b=Ln(c[v],4),w=b[0],x=b[1],S=b[2];b[3][t](w,n,x,S)}}}function Yn(t){var e=t.pointerType,n=t.scope,i={interaction:Dn.default.search(t),searchDetails:t};return n.fire("interactions:find",i),i.interaction||n.interactions.new({pointerType:e})}function Gn(t,e){var n=t.doc,i=t.scope,o=t.options,r=i.interactions.docEvents,a=i.events,s=a[e];for(var c in i.browser.isIOS&&!o.events&&(o.events={passive:!1}),a.delegatedEvents)s(n,c,a.delegateListener),s(n,c,a.delegateUseCapture,!0);for(var l=o&&o.events,u=0;u<r.length;u++){var d=r[u];s(n,d.type,d.listener,l)}}var Qn={id:"core/interactions",install:function(t){for(var e={},n=0;n<Wn.length;n++){var i=Wn[n];e[i]=Xn(i,t)}var o,r=y.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var i=function(){var e=n.pointers[o];t.documents.some((function(t){var n=t.doc;return(0,S.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},o=0;o<n.pointers.length;o++)i()}}(o=g.default.PointerEvent?[{type:r.down,listener:a},{type:r.down,listener:e.pointerDown},{type:r.move,listener:e.pointerMove},{type:r.up,listener:e.pointerUp},{type:r.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++)t.interactions.list[n].documentBlur(e)}}),t.prevTouchTime=0,t.Interaction=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Vn(t,e)}(a,e);var n,i,o,r=(i=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Hn(i);if(o){var n=Hn(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Un(this,t)});function a(){return Fn(this,a),r.apply(this,arguments)}return(n=[{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}},{key:"_now",value:function(){return t.now()}}])&&Bn(a.prototype,n),a}(Be.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(se.default)},listeners:{"scope:add-document":function(t){return Gn(t,"add")},"scope:remove-document":function(t){return Gn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,i=e.interactions.list.length-1;i>=0;i--){var o=e.interactions.list[i];o.interactable===n&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(i,1))}}},onDocSignal:Gn,doOnInteractions:Xn,methodNames:Wn};Rn.default=Qn;var Jn={};function Kn(t){return(Kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Zn(t,e,n){return(Zn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ni(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function ti(t,e){return(ti=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ei(t,e){return!e||"object"!==Kn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ni(t){return(ni=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ii(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oi(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ri(t,e,n){return e&&oi(t.prototype,e),n&&oi(t,n),t}function ai(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.initScope=ci,Jn.Scope=void 0;var si=function(){function t(){var e=this;ii(this,t),ai(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),ai(this,"isInitialized",!1),ai(this,"listenerMaps",[]),ai(this,"browser",y.default),ai(this,"defaults",(0,me.default)(ze.defaults)),ai(this,"Eventable",un.Eventable),ai(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),ai(this,"interactStatic",(0,mn.createInteractStatic)(this)),ai(this,"InteractEvent",ke.InteractEvent),ai(this,"Interactable",void 0),ai(this,"interactables",new xn.InteractableSet(this)),ai(this,"_win",void 0),ai(this,"document",void 0),ai(this,"window",void 0),ai(this,"documents",[]),ai(this,"_plugins",{list:[],map:{}}),ai(this,"onWindowUnload",(function(t){return e.removeDocument(t.target)}));var n=this;this.Interactable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ti(t,e)}(r,t);var e,i,o=(e=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=ni(e);if(i){var o=ni(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return ei(this,t)});function r(){return ii(this,r),o.apply(this,arguments)}return ri(r,[{key:"_defaults",get:function(){return n.defaults}},{key:"set",value:function(t){return Zn(ni(r.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){Zn(ni(r.prototype),"unset",this).call(this),n.interactables.list.splice(n.interactables.list.indexOf(this),1),n.fire("interactable:unset",{interactable:this})}}]),r}(vn.Interactable)}return ri(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var i=this.listenerMaps[n].map[t];if(i&&!1===i(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:ci(this,t)}},{key:"pluginIsInstalled",value:function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,i=this.listenerMaps.length,o=t.before.reduce((function(t,e){return t[e]=!0,t[li(e)]=!0,t}),{});n<i;n++){var r=this.listenerMaps[n].id;if(o[r]||o[li(r)])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,n){if(-1!==this.getDocIndex(t))return!1;var i=e.getWindow(t);n=n?(0,k.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(i,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:i,scope:this,options:n})}},{key:"removeDocument",value:function(t){var n=this.getDocIndex(t),i=e.getWindow(t),o=this.documents[n].options;this.events.remove(i,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:i,scope:this,options:o})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function ci(t,n){return t.isInitialized=!0,r.default.window(n)&&e.init(n),g.default.init(n),y.default.init(n),kt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(Rn.default),t.usePlugin(On.default),t}function li(t){return t&&t.replace(/\/.*$/,"")}Jn.Scope=si;var ui={};Object.defineProperty(ui,"__esModule",{value:!0}),ui.default=void 0;var di=new Jn.Scope,pi=di.interactStatic;ui.default=pi;var hi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0;di.init(hi);var fi={};Object.defineProperty(fi,"__esModule",{value:!0}),fi.default=void 0,fi.default=function(){};var gi={};Object.defineProperty(gi,"__esModule",{value:!0}),gi.default=void 0,gi.default=function(){};var mi={};function vi(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return bi(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?bi(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bi(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(mi,"__esModule",{value:!0}),mi.default=void 0,mi.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=vi(e,2),i=n[0],o=n[1];return i in t||o in t})),n=function(n,i){for(var o=t.range,r=t.limits,a=void 0===r?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:r,s=t.offset,c=void 0===s?{x:0,y:0}:s,l={range:o,grid:t,x:null,y:null},u=0;u<e.length;u++){var d=vi(e[u],2),p=d[0],h=d[1],f=Math.round((n-c.x)/t[p]),g=Math.round((i-c.y)/t[h]);l[p]=Math.max(a.left,Math.min(a.right,f*t[p]+c.x)),l[h]=Math.max(a.top,Math.min(a.bottom,g*t[h]+c.y))}return l};return n.grid=t,n.coordFields=e,n};var yi={};Object.defineProperty(yi,"__esModule",{value:!0}),Object.defineProperty(yi,"edgeTarget",{enumerable:!0,get:function(){return fi.default}}),Object.defineProperty(yi,"elements",{enumerable:!0,get:function(){return gi.default}}),Object.defineProperty(yi,"grid",{enumerable:!0,get:function(){return mi.default}});var wi={};Object.defineProperty(wi,"__esModule",{value:!0}),wi.default=void 0;var xi={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,k.default)(e.snappers||{},yi),e.createSnapGrid=e.snappers.grid}};wi.default=xi;var Si={};function Ei(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ei(Object(n),!0).forEach((function(e){Oi(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Oi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Si,"__esModule",{value:!0}),Si.aspectRatio=Si.default=void 0;var Mi={start:function(t){var e=t.state,n=t.rect,i=t.edges,o=t.pageCoords,r=e.options.ratio,a=e.options,s=a.equalDelta,c=a.modifiers;"preserve"===r&&(r=n.width/n.height),e.startCoords=(0,k.default)({},o),e.startRect=(0,k.default)({},n),e.ratio=r,e.equalDelta=s;var l=e.linkedEdges={top:i.top||i.left&&!i.bottom,left:i.left||i.top&&!i.right,bottom:i.bottom||i.right&&!i.top,right:i.right||i.bottom&&!i.left};if(e.xIsPrimaryAxis=!(!i.left&&!i.right),e.equalDelta)e.edgeSign=(l.left?1:-1)*(l.top?1:-1);else{var u=e.xIsPrimaryAxis?l.top:l.left;e.edgeSign=u?-1:1}if((0,k.default)(t.edges,l),c&&c.length){var d=new ve.default(t.interaction);d.copyFrom(t.interaction.modification),d.prepareStates(c),e.subModification=d,d.startAll(_i({},t))}},set:function(t){var e=t.state,n=t.rect,i=t.coords,o=(0,k.default)({},i),r=e.equalDelta?Pi:zi;if(r(e,e.xIsPrimaryAxis,i,n),!e.subModification)return null;var a=(0,k.default)({},n);(0,T.addEdges)(e.linkedEdges,a,{x:i.x-o.x,y:i.y-o.y});var s=e.subModification.setAll(_i(_i({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:i,prevCoords:i,prevRect:a})),c=s.delta;return s.changed&&(r(e,Math.abs(c.x)>Math.abs(c.y),s.coords,s.rect),(0,k.default)(i,s.coords)),s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Pi(t,e,n){var i=t.startCoords,o=t.edgeSign;e?n.y=i.y+(n.x-i.x)*o:n.x=i.x+(n.y-i.y)*o}function zi(t,e,n,i){var o=t.startRect,r=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var c=i.width/a;n.y=r.y+(c-o.height)*s}else{var l=i.height*a;n.x=r.x+(l-o.width)*s}}Si.aspectRatio=Mi;var ki=(0,Oe.makeModifier)(Mi,"aspectRatio");Si.default=ki;var Ti={};Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.default=void 0;var Ai=function(){};Ai._defaults={};var Ci=Ai;Ti.default=Ci;var Di={};Object.defineProperty(Di,"__esModule",{value:!0}),Object.defineProperty(Di,"default",{enumerable:!0,get:function(){return Ti.default}});var qi={};function ji(t,e,n){return r.default.func(t)?T.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):T.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(qi,"__esModule",{value:!0}),qi.getRestrictionRect=ji,qi.restrict=qi.default=void 0;var Ii={start:function(t){var e=t.rect,n=t.startOffset,i=t.state,o=t.interaction,r=t.pageCoords,a=i.options,s=a.elementRect,c=(0,k.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var l=ji(a.restriction,o,r);if(l){var u=l.right-l.left-e.width,d=l.bottom-l.top-e.height;u<0&&(c.left+=u,c.right+=u),d<0&&(c.top+=d,c.bottom+=d)}c.left+=n.left-e.width*s.left,c.top+=n.top-e.height*s.top,c.right+=n.right-e.width*(1-s.right),c.bottom+=n.bottom-e.height*(1-s.bottom)}i.offset=c},set:function(t){var e=t.coords,n=t.interaction,i=t.state,o=i.options,r=i.offset,a=ji(o.restriction,n,e);if(a){var s=T.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-r.right,e.x),s.left+r.left),e.y=Math.max(Math.min(s.bottom-r.bottom,e.y),s.top+r.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};qi.restrict=Ii;var Ri=(0,Oe.makeModifier)(Ii,"restrict");qi.default=Ri;var $i={};Object.defineProperty($i,"__esModule",{value:!0}),$i.restrictEdges=$i.default=void 0;var Li={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Ni={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Fi(t,e){for(var n=["top","left","bottom","right"],i=0;i<n.length;i++){var o=n[i];o in t||(t[o]=e[o])}return t}var Bi={noInner:Li,noOuter:Ni,start:function(t){var e,n=t.interaction,i=t.startOffset,o=t.state,r=o.options;if(r){var a=(0,qi.getRestrictionRect)(r.offset,n,n.coords.start.page);e=T.rectToXY(a)}e=e||{x:0,y:0},o.offset={top:e.y+i.top,left:e.x+i.left,bottom:e.y-i.bottom,right:e.x-i.right}},set:function(t){var e=t.coords,n=t.edges,i=t.interaction,o=t.state,r=o.offset,a=o.options;if(n){var s=(0,k.default)({},e),c=(0,qi.getRestrictionRect)(a.inner,i,s)||{},l=(0,qi.getRestrictionRect)(a.outer,i,s)||{};Fi(c,Li),Fi(l,Ni),n.top?e.y=Math.min(Math.max(l.top+r.top,s.y),c.top+r.top):n.bottom&&(e.y=Math.max(Math.min(l.bottom+r.bottom,s.y),c.bottom+r.bottom)),n.left?e.x=Math.min(Math.max(l.left+r.left,s.x),c.left+r.left):n.right&&(e.x=Math.max(Math.min(l.right+r.right,s.x),c.right+r.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};$i.restrictEdges=Bi;var Vi=(0,Oe.makeModifier)(Bi,"restrictEdges");$i.default=Vi;var Ui={};Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.restrictRect=Ui.default=void 0;var Hi=(0,k.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},qi.restrict.defaults),Wi={start:qi.restrict.start,set:qi.restrict.set,defaults:Hi};Ui.restrictRect=Wi;var Xi=(0,Oe.makeModifier)(Wi,"restrictRect");Ui.default=Xi;var Yi={};Object.defineProperty(Yi,"__esModule",{value:!0}),Yi.restrictSize=Yi.default=void 0;var Gi={width:-1/0,height:-1/0},Qi={width:1/0,height:1/0},Ji={start:function(t){return $i.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,i=t.rect,o=t.edges,r=n.options;if(o){var a=T.tlbrToXywh((0,qi.getRestrictionRect)(r.min,e,t.coords))||Gi,s=T.tlbrToXywh((0,qi.getRestrictionRect)(r.max,e,t.coords))||Qi;n.options={endOnly:r.endOnly,inner:(0,k.default)({},$i.restrictEdges.noInner),outer:(0,k.default)({},$i.restrictEdges.noOuter)},o.top?(n.options.inner.top=i.bottom-a.height,n.options.outer.top=i.bottom-s.height):o.bottom&&(n.options.inner.bottom=i.top+a.height,n.options.outer.bottom=i.top+s.height),o.left?(n.options.inner.left=i.right-a.width,n.options.outer.left=i.right-s.width):o.right&&(n.options.inner.right=i.left+a.width,n.options.outer.right=i.left+s.width),$i.restrictEdges.set(t),n.options=r}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Yi.restrictSize=Ji;var Ki=(0,Oe.makeModifier)(Ji,"restrictSize");Yi.default=Ki;var Zi={};Object.defineProperty(Zi,"__esModule",{value:!0}),Object.defineProperty(Zi,"default",{enumerable:!0,get:function(){return Ti.default}});var to={};Object.defineProperty(to,"__esModule",{value:!0}),to.snap=to.default=void 0;var eo={start:function(t){var e,n=t.interaction,i=t.interactable,o=t.element,r=t.rect,a=t.state,s=t.startOffset,c=a.options,l=c.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,T.rectToXY)((0,T.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,D.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===c.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var u=(0,T.resolveRectLike)(c.offset,i,o,[n]);(e=(0,T.rectToXY)(u)||{x:0,y:0}).x+=l.x,e.y+=l.y}var d=c.relativePoints;a.offsets=r&&d&&d.length?d.map((function(t,n){return{index:n,relativePoint:t,x:s.left-r.width*t.x+e.x,y:s.top-r.height*t.y+e.y}})):[{index:0,relativePoint:null,x:e.x,y:e.y}]},set:function(t){var e=t.interaction,n=t.coords,i=t.state,o=i.options,a=i.offsets,s=(0,D.default)(e.interactable,e.element,e.prepared.name),c=(0,k.default)({},n),l=[];o.offsetWithOrigin||(c.x-=s.x,c.y-=s.y);for(var u=0;u<a.length;u++)for(var d=a[u],p=c.x-d.x,h=c.y-d.y,f=0,g=o.targets.length;f<g;f++){var m,v=o.targets[f];(m=r.default.func(v)?v(p,h,e._proxy,d,f):v)&&l.push({x:(r.default.number(m.x)?m.x:p)+d.x,y:(r.default.number(m.y)?m.y:h)+d.y,range:r.default.number(m.range)?m.range:o.range,source:v,index:f,offset:d})}for(var b={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},y=0;y<l.length;y++){var w=l[y],x=w.range,S=w.x-c.x,E=w.y-c.y,_=(0,I.default)(S,E),O=_<=x;x===1/0&&b.inRange&&b.range!==1/0&&(O=!1),b.target&&!(O?b.inRange&&x!==1/0?_/x<b.distance/b.range:x===1/0&&b.range!==1/0||_<b.distance:!b.inRange&&_<b.distance)||(b.target=w,b.distance=_,b.range=x,b.inRange=O,b.delta.x=S,b.delta.y=E)}return b.inRange&&(n.x=b.target.x,n.y=b.target.y),i.closest=b,b},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};to.snap=eo;var no=(0,Oe.makeModifier)(eo,"snap");to.default=no;var io={};function oo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(io,"__esModule",{value:!0}),io.snapSize=io.default=void 0;var ro={start:function(t){var e=t.state,n=t.edges,i=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:i.offset||"self",origin:{x:0,y:0},range:i.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],to.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e,n,i=t.interaction,o=t.state,a=t.coords,s=o.options,c=o.offsets,l={x:a.x-c[0].x,y:a.y-c[0].y};o.options=(0,k.default)({},s),o.options.targets=[];for(var u=0;u<(s.targets||[]).length;u++){var d=(s.targets||[])[u],p=void 0;if(p=r.default.func(d)?d(l.x,l.y,i):d){for(var h=0;h<o.targetFields.length;h++){var f=(n=2,function(t){if(Array.isArray(t))return t}(e=o.targetFields[h])||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}}(e,n)||function(t,e){if(t){if("string"==typeof t)return oo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oo(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=f[0],m=f[1];if(g in p||m in p){p.x=p[g],p.y=p[m];break}}o.options.targets.push(p)}}var v=to.snap.set(t);return o.options=s,v},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};io.snapSize=ro;var ao=(0,Oe.makeModifier)(ro,"snapSize");io.default=ao;var so={};Object.defineProperty(so,"__esModule",{value:!0}),so.snapEdges=so.default=void 0;var co={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],io.snapSize.start(t)):null},set:io.snapSize.set,defaults:(0,k.default)((0,me.default)(io.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};so.snapEdges=co;var lo=(0,Oe.makeModifier)(co,"snapEdges");so.default=lo;var uo={};Object.defineProperty(uo,"__esModule",{value:!0}),Object.defineProperty(uo,"default",{enumerable:!0,get:function(){return Ti.default}});var po={};Object.defineProperty(po,"__esModule",{value:!0}),Object.defineProperty(po,"default",{enumerable:!0,get:function(){return Ti.default}});var ho={};Object.defineProperty(ho,"__esModule",{value:!0}),ho.default=void 0;var fo={aspectRatio:Si.default,restrictEdges:$i.default,restrict:qi.default,restrictRect:Ui.default,restrictSize:Yi.default,snapEdges:so.default,snap:to.default,snapSize:io.default,spring:uo.default,avoid:Di.default,transform:po.default,rubberband:Zi.default};ho.default=fo;var go={};Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var mo={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(Oe.default),t.usePlugin(wi.default),e.modifiers=ho.default,ho.default){var i=ho.default[n],o=i._defaults,r=i._methods;o._methods=r,t.defaults.perAction[n]=o}}};go.default=mo;var vo={};function bo(t){return(bo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yo(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function wo(t,e){return(wo=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xo(t,e){return!e||"object"!==bo(e)&&"function"!=typeof e?So(t):e}function So(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Eo(t){return(Eo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(vo,"__esModule",{value:!0}),vo.PointerEvent=vo.default=void 0;var Oo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wo(t,e)}(r,t);var e,n,i,o=(n=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Eo(n);if(i){var o=Eo(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return xo(this,t)});function r(t,e,n,i,a,s){var c;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),_o(So(c=o.call(this,a)),"type",void 0),_o(So(c),"originalEvent",void 0),_o(So(c),"pointerId",void 0),_o(So(c),"pointerType",void 0),_o(So(c),"double",void 0),_o(So(c),"pageX",void 0),_o(So(c),"pageY",void 0),_o(So(c),"clientX",void 0),_o(So(c),"clientY",void 0),_o(So(c),"dt",void 0),_o(So(c),"eventable",void 0),N.pointerExtend(So(c),n),n!==e&&N.pointerExtend(So(c),e),c.timeStamp=s,c.originalEvent=n,c.type=t,c.pointerId=N.getPointerId(e),c.pointerType=N.getPointerType(e),c.target=i,c.currentTarget=null,"tap"===t){var l=a.getPointerIndex(e);c.dt=c.timeStamp-a.pointers[l].downTime;var u=c.timeStamp-a.tapTime;c.double=!!(a.prevTap&&"doubletap"!==a.prevTap.type&&a.prevTap.target===c.target&&u<500)}else"doubletap"===t&&(c.dt=e.timeStamp-a.tapTime);return c}return(e=[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&yo(r.prototype,e),r}(X.BaseEvent);vo.PointerEvent=vo.default=Oo;var Mo={};Object.defineProperty(Mo,"__esModule",{value:!0}),Mo.default=void 0;var Po={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(t){t.pointerEvents=Po,t.defaults.actions.pointerEvents=Po.defaults,(0,k.default)(t.actions.phaselessTypes,Po.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;!e&&n.hold||(n.hold={duration:1/0,timeout:null})},"interactions:move":function(t,e){var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget;t.duplicate||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&To(t),zo({interaction:n,pointer:i,event:o,eventTarget:r,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,c=S.getPath(r),l={interaction:n,pointer:i,event:o,eventTarget:r,type:"hold",targets:[],path:c,node:null},u=0;u<c.length;u++){var d=c[u];l.node=d,e.fire("pointerEvents:collect-targets",l)}if(l.targets.length){for(var p=1/0,h=0;h<l.targets.length;h++){var f=l.targets[h].eventable.options.holdDuration;f<p&&(p=f)}s.duration=p,s.timeout=setTimeout((function(){zo({interaction:n,eventTarget:r,pointer:i,event:o,type:"hold"},e)}),p)}}(t,e),zo(t,e)},"interactions:up":function(t,e){To(t),zo(t,e),function(t,e){var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget;n.pointerWasMoved||zo({interaction:n,eventTarget:r,pointer:i,event:o,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){To(t),zo(t,e)}},PointerEvent:vo.PointerEvent,fire:zo,collectEventTargets:ko,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function zo(t,e){var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget,a=t.type,s=t.targets,c=void 0===s?ko(t,e):s,l=new vo.PointerEvent(a,i,o,r,n,e.now());e.fire("pointerEvents:new",{pointerEvent:l});for(var u={interaction:n,pointer:i,event:o,eventTarget:r,targets:c,type:a,pointerEvent:l},d=0;d<c.length;d++){var p=c[d];for(var h in p.props||{})l[h]=p.props[h];var f=(0,D.default)(p.eventable,p.node);if(l._subtractOrigin(f),l.eventable=p.eventable,l.currentTarget=p.node,p.eventable.fire(l),l._addOrigin(f),l.immediatePropagationStopped||l.propagationStopped&&d+1<c.length&&c[d+1].node!==l.currentTarget)break}if(e.fire("pointerEvents:fired",u),"tap"===a){var g=l.double?zo({interaction:n,pointer:i,event:o,eventTarget:r,type:"doubletap"},e):l;n.prevTap=g,n.tapTime=g.timeStamp}return l}function ko(t,e){var n=t.interaction,i=t.pointer,o=t.event,r=t.eventTarget,a=t.type,s=n.getPointerIndex(i),c=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!c||c.downTarget!==r))return[];for(var l=S.getPath(r),u={interaction:n,pointer:i,event:o,eventTarget:r,type:a,path:l,targets:[],node:null},d=0;d<l.length;d++){var p=l[d];u.node=p,e.fire("pointerEvents:collect-targets",u)}return"hold"===a&&(u.targets=u.targets.filter((function(t){var e;return t.eventable.options.holdDuration===(null==(e=n.pointers[s])?void 0:e.hold.duration)}))),u.targets}function To(t){var e=t.interaction,n=t.pointerIndex,i=e.pointers[n].hold;i&&i.timeout&&(clearTimeout(i.timeout),i.timeout=null)}var Ao=Po;Mo.default=Ao;var Co={};function Do(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Co,"__esModule",{value:!0}),Co.default=void 0;var qo={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(Mo.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=Do,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,i=t.pointerEvent,o=t.eventTarget,r=t.targets;if("hold"===i.type&&r.length){var a=r[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:i,event:i},e)}),a))}}})};Co.default=qo;var jo={};function Io(t){return(0,k.default)(this.events.options,t),this}Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0;var Ro={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Io;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var i=n.call(this,t,e);return i===this&&(this.events.options[t]=e),i}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,i=t.node,o=t.type,r=t.eventTarget;e.interactables.forEachMatch(i,(function(t){var e=t.events,a=e.options;e.types[o]&&e.types[o].length&&t.testIgnoreAllow(a,i,r)&&n.push({node:i,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,i=t.options;(0,k.default)(n.events.options,e.pointerEvents.defaults),(0,k.default)(n.events.options,i.pointerEvents||{})}}};jo.default=Ro;var $o={};Object.defineProperty($o,"__esModule",{value:!0}),$o.default=void 0;var Lo={id:"pointer-events",install:function(t){t.usePlugin(Mo),t.usePlugin(Co.default),t.usePlugin(jo.default)}};$o.default=Lo;var No={};function Fo(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var i=r.default.string(t.target)?J.from(t._context.querySelectorAll(t.target)):[t.target],o=n.window.Promise,a=o?[]:null,s=function(){var r=i[c],s=t.getRect(r);if(!s)return"break";var l=J.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===r&&n.prepared.name===e.name})),u=void 0;if(l)l.move(),a&&(u=l._reflowPromise||new o((function(t){l._reflowResolve=t})));else{var d=(0,T.tlbrToXywh)(s),p={page:{x:d.x,y:d.y},client:{x:d.x,y:d.y},timeStamp:n.now()},h=N.coordsToEvent(p);u=function(t,e,n,i,o){var r=t.interactions.new({pointerType:"reflow"}),a={interaction:r,event:o,pointer:o,eventTarget:n,phase:"reflow"};r.interactable=e,r.element=n,r.prevEvent=o,r.updatePointer(o,o,n,!0),N.setZeroCoords(r.coords.delta),(0,Lt.copyAction)(r.prepared,i),r._doPhase(a);var s=t.window.Promise,c=s?new s((function(t){r._reflowResolve=t})):void 0;return r._reflowPromise=c,r.start(i,e,n),r._interacting?(r.move(a),r.end(o)):(r.stop(),r._reflowResolve()),r.removePointer(o,o),c}(n,t,r,e,h)}a&&a.push(u)},c=0;c<i.length&&"break"!==s();c++);return a&&o.all(a).then((function(){return t}))}(this,e,t)}}Object.defineProperty(No,"__esModule",{value:!0}),No.install=Fo,No.default=void 0;var Bo={id:"reflow",install:Fo,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),J.remove(e.interactions.list,n))}}};No.default=Bo;var Vo={exports:{}};function Uo(t){return(Uo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(Vo.exports,"__esModule",{value:!0}),Vo.exports.default=void 0,ui.default.use(se.default),ui.default.use(Ye.default),ui.default.use($o.default),ui.default.use(en.default),ui.default.use(go.default),ui.default.use(re.default),ui.default.use(Pt.default),ui.default.use(qt.default),ui.default.use(No.default);var Ho=ui.default;if(Vo.exports.default=Ho,"object"===Uo(Vo)&&Vo)try{Vo.exports=ui.default}catch(t){}ui.default.default=ui.default,Vo=Vo.exports;var Wo={exports:{}};function Xo(t){return(Xo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(Wo.exports,"__esModule",{value:!0}),Wo.exports.default=void 0;var Yo=Vo.default;if(Wo.exports.default=Yo,"object"===Xo(Wo)&&Wo)try{Wo.exports=Vo.default}catch(t){}return Vo.default.default=Vo.default,Wo.exports}()})),Wr=v(Hr);class Xr{serialize(){return{type:"1"}}toJson(){return"1"}}const Yr=Rn`<svg
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
</svg>`;let Gr=class CircuitDropzoneElement extends HTMLElement{constructor(){super(...arguments),this.size="",this.inputWireQuantum=!1,this.outputWireQuantum=!1,this.wireTop=!1,this.wireBottom=!1,this.occupied=!1,this.draggableTagName="",this.shadow=!1,this.childrenLoaded=!0,this.wireCount=0}get draggableElement(){const t=this.children[0];return void 0===t?null:t.snapped?t:null}get circuitStep(){const t=this.parentElement;return null!==t&&"CIRCUIT-STEP"===t.nodeName?t:null}set wireQuantum(t){this.inputWireQuantum=t,this.outputWireQuantum=t}get snapTarget(){const t=this.getBoundingClientRect();return{x:window.pageXOffset+t.left+this.clientWidth/2,y:window.pageYOffset+t.top+this.clientHeight/2}}index(){const t=this.closest("circuit-step");return null===t?null:t.dropzoneIndex(this)}prev(){const t=this.index();if(null===t)return null;if(null===this.circuitStep)return null;const e=this.circuitStep.prev();return null===e?null:e.dropzone(t)}next(){const t=this.index();if(null===t)return null;if(null===this.circuitStep)return null;const e=this.circuitStep.next();return null===e?null:e.dropzone(t)}assign(t){this.append(t),this.occupied=!0}toJson(){const t=this.draggableElement;return null==t?"1":t.toJson()}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.addSlotChangeEventListener(),this.initDropzone(),this.addEventListener("dragAndDroppable.grab",this.enableDrop),this.addEventListener("dragAndDroppable.enddragging",this.dispatchDropzoneDroppedEvent),this.addEventListener("dragAndDroppable.snap",this.snapDraggable),this.addEventListener("dragAndDroppable.unsnap",this.unsnapDraggable)}dispatchDropzoneDroppedEvent(){this.dispatchEvent(new CustomEvent("dropzone.drop",{detail:this,bubbles:!0}))}attributeChangedCallback(t,e,n){if(e!==n&&0!==this.childElementCount&&"data-wire-count"===t&&null!==n){this.children[0].setAttribute("data-wire-count",n)}}update(){if($n(Rn`<style>
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
            height: ${1.5*Vr.size.xl}rem;
            width: ${Vr.size.xl}rem;
          }

          :host([data-wire-count="3"]) {
            height: ${1.5*Vr.size.lg}rem;
            width: ${Vr.size.lg}rem;
          }

          :host([data-wire-count="4"]) {
            height: ${1.5*Vr.size.base}rem;
            width: ${Vr.size.base}rem;
          }

          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]) {
            height: ${1.5*Vr.size.sm}rem;
            width: ${Vr.size.sm}rem;
          }

          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${1.5*Vr.size.xs}rem;
            width: ${Vr.size.xs}rem;
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
              height: ${Vr.size.base}rem;
              width: ${1.5*Vr.size.base}rem;
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
          ${Yr}
        </div>`,this.shadowRoot),1===this.childElementCount){const t=this.children[0];this.childrenLoaded=!1,this.occupied=!0,this.draggableTagName=t.tagName.toLowerCase()}else if(this.childElementCount>1)throw new Error("A dropzone cannot hold multiple operations.")}addSlotChangeEventListener(){this.slotEl.addEventListener("slotchange",(()=>{if(this.childElementCount>1)throw new Error("A dropzone cannot hold multiple operations.");if(0===this.childElementCount)return this.draggableTagName="",this.occupied=!1,void this.enableDrop();const t=this.children[0],e=t.nodeName;t.setAttribute("data-wire-count",this.wireCount.toString()),""!==this.size&&t.setAttribute("data-size",this.size),this.draggableTagName=e.toLowerCase(),this.occupied=!0,this.disableDrop(),this.childrenLoaded?this.dispatchEvent(new CustomEvent("dropzone.snap",{detail:this,bubbles:!0})):(this.dispatchEvent(new Event("circuitchange",{bubbles:!0})),this.childrenLoaded=!0)}))}initDropzone(){Wr(this).dropzone({accept:"[data-drag-and-drop]",overlap:"center"})}enableDrop(){Wr(this).dropzone(!0)}disableDrop(){Wr(this).dropzone(!1)}snapDraggable(t){const e=t.detail;this.append(e),e.moveTo(0,0)}unsnapDraggable(){this.draggableTagName="",this.occupied=!1,this.dispatchEvent(new CustomEvent("dropzone.unsnap",{detail:this,bubbles:!0}))}updateWires(){const t=this.draggableTagName,e=this.prev();"write-gate"===t?(this.inputWireQuantum=null!==e&&e.outputWireQuantum,this.outputWireQuantum=!0):"measurement-gate"===t?(this.inputWireQuantum=null!==e&&e.outputWireQuantum,this.outputWireQuantum=!1):null===e?(this.inputWireQuantum=!1,this.outputWireQuantum=!1):(this.inputWireQuantum=e.outputWireQuantum,this.outputWireQuantum=e.outputWireQuantum)}remove(){var t;null===(t=this.parentElement)||void 0===t||t.removeChild(this)}serialize(){return null===this.draggableElement?(new Xr).serialize():this.draggableElement.serialize()}};t([u,e("design:type",HTMLSlotElement)],Gr.prototype,"slotEl",void 0),t([h,e("design:type",Object)],Gr.prototype,"size",void 0),t([h,e("design:type",Object)],Gr.prototype,"inputWireQuantum",void 0),t([h,e("design:type",Object)],Gr.prototype,"outputWireQuantum",void 0),t([h,e("design:type",Object)],Gr.prototype,"wireTop",void 0),t([h,e("design:type",Object)],Gr.prototype,"wireBottom",void 0),t([h,e("design:type",Object)],Gr.prototype,"occupied",void 0),t([h,e("design:type",Object)],Gr.prototype,"draggableTagName",void 0),t([h,e("design:type",Object)],Gr.prototype,"shadow",void 0),t([h,e("design:type",Object)],Gr.prototype,"childrenLoaded",void 0),t([h,e("design:type",Object)],Gr.prototype,"wireCount",void 0),Gr=t([m],Gr);let Qr=class PaletteDropzoneElement extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.update()}update(){$n(Rn`<style>
          :host {
            position: relative;
            height: ${Vr.size.base}rem;
            width: ${Vr.size.base}rem;
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="dragAndDroppable.grab:palette-dropzone#newOperation">
          <slot></slot>
        </div>`,this.shadowRoot)}newOperation(t){const e=t.target,n=e.cloneNode(!0);e.disableHelp(),n.removeAttribute("data-grabbed"),this.prepend(n)}};Qr=t([m],Qr);const Jr=Rn`<style>
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
</style>`,Kr=t=>t instanceof Qr,Zr=t=>t instanceof Gr;function ta(n){class i extends n{constructor(){super(...arguments),this.dragAndDrop=!1,this.grabbed=!1,this.dragging=!1,this.snapped=!0,this.positionX=0,this.positionY=0,this.hoverable=!0}get dropzone(){return this.parentElement}get dragAndDroppableStyle(){return Jr}initDragAndDrop(){this.isPaletteDraggable&&(this.dragAndDrop=!0,this.snapped=!1),this.dragAndDrop&&(Wr.isSet(this)||(Wr(this).draggable({onstart:this.startDragging.bind(this),onmove:this.dragMove.bind(this),onend:this.endDragging.bind(this)}),this.addEventListener("mousedown",this.grab),this.addEventListener("mouseup",this.unGrab)))}startDragging(){We.isMobile()||(this.dragging=!0)}dragMove(t){We.isMobile()||this.move(t.dx,t.dy)}endDragging(t){if(!We.isMobile()){if(!this.snapped)return this.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:t.clientX,y:t.clientY},bubbles:!0})),void this.trash();this.dragging=!1,this.grabbed=!1,this.moveTo(0,0),this.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:t.clientX,y:t.clientY},bubbles:!0}))}}trash(){var t;Wr(this).unset(),this.dispatchEvent(new Event("dragAndDroppable.trash",{bubbles:!0})),null===(t=this.parentElement)||void 0===t||t.removeChild(this)}grab(t){We.isMobile()||(this.grabbed=!0,this.dispatchEvent(new CustomEvent("dragAndDroppable.grab",{detail:this,bubbles:!0})),Kr(this.dropzone)&&this.moveToGrabbedPosition(t.offsetX,t.offsetY))}unGrab(t){We.isMobile()||(this.snapped?(this.grabbed=!1,this.moveTo(0,0),this.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab",{detail:{x:t.clientX,y:t.clientY},bubbles:!0}))):this.trash())}setSnapTargets(t){const e=this.dropzone,n=t;j.notNull(e),Zr(e)&&n.push(e);const i=n.map((t=>t.snapTarget));Wr(this).draggable({modifiers:[Wr.modifiers.snap({targets:i,range:this.snapRange(),relativePoints:[{x:.5,y:.5}]})],listeners:{move:t=>{const e=t.modifiers[0];if(e.inRange){const t=(t=>{for(const e of n){const n=e.snapTarget;if(n.x===t.x&&n.y===t.y)return e}return null})(e.target.source);j.notNull(t),this.snapped=!0,t.dispatchEvent(new CustomEvent("dragAndDroppable.snap",{detail:this,bubbles:!0}))}else this.snapped&&Zr(this.parentElement)&&(this.snapped=!1,this.dispatchEvent(new Event("dragAndDroppable.unsnap",{bubbles:!0}))),this.snapped=!1}}})}get isPaletteDraggable(){return Kr(this.dropzone)}snapRange(){return this.clientWidth}moveToGrabbedPosition(t,e){const n=t-this.clientWidth/2,i=e-this.clientHeight/2;this.move(n,i)}move(t,e){const n=this.positionX+t,i=this.positionY+e;this.moveTo(n,i)}moveTo(t,e){this.positionX=t,this.positionY=e,this.style.transform=`translate(${t}px, ${e}px)`}}return t([h,e("design:type",Object)],i.prototype,"dragAndDrop",void 0),t([h,e("design:type",Object)],i.prototype,"grabbed",void 0),t([h,e("design:type",Object)],i.prototype,"dragging",void 0),t([h,e("design:type",Object)],i.prototype,"snapped",void 0),t([h,e("design:type",Object)],i.prototype,"positionX",void 0),t([h,e("design:type",Object)],i.prototype,"positionY",void 0),t([h,e("design:type",Object)],i.prototype,"hoverable",void 0),i}function ea(n){class i extends n{constructor(){super(...arguments),this.help=!0}showHelp(){if(!this.help)return;if(this._tippy)return;const t=this.innerHTML.trim();if(""===t)return;Ve(this,{allowHTML:!0,animation:!1,arrow:oe+oe,delay:0,placement:"right",theme:"qni",onShow(e){e.setContent(t)}}).show()}disableHelp(){const t=this._tippy;this.help=!1,null==t||t.destroy(),this.innerHTML=""}}return t([h,e("design:type",Object)],i.prototype,"help",void 0),i}function na(n){class i extends n{constructor(){super(...arguments),this.iconType=""}get iconSvg(){throw new Error("Not implemented yet")}get iconStyle(){const t=Rn`<style>
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
      </style>`;let e;if("square"===this.iconType)e="0.25rem";else{if("circle"!==this.iconType){if("transparent"===this.iconType)return Rn`${t}

          <style>
            #icon {
              color: var(--colors-gate, #43c000);
            }

            :host([data-disabled]) #icon {
              color: var(--colors-eel, #4b4b4b);
            }
          </style>`;throw new Error("iconType not set")}e="9999px"}return Rn`${t}

        <style>
          #icon {
            border-radius: ${e};
            color: var(--colors-snow, #ffffff);
            background-color: var(--colors-gate, #43c000);
          }

          :host([data-disabled]) #icon {
            background-color: var(--colors-eel, #4b4b4b);
          }
        </style>`}}return t([h,e("design:type",Object)],i.prototype,"iconType",void 0),i}function ia(n){class i extends n{constructor(){super(...arguments),this.if=""}}return t([h,e("design:type",Object)],i.prototype,"if",void 0),i}function oa(t){return class extends t{toJson(){throw new Error("Not implemented yet")}}}function ra(t){return class extends t{get labelStyle(){return Rn`<style>
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
      </style>`}}}function aa(t){return class extends t{set targets(t){this.setAttribute("data-targets",t.sort().join())}get targets(){const t=this.getAttribute("data-targets");return null===t||""===t?[]:t.split(",").map((t=>parseInt(t))).sort()}}}function sa(n){class i extends n{constructor(){super(...arguments),this.wireTop=!1,this.wireTopDisabled=!1,this.wireBottom=!1,this.wireBottomDisabled=!1}disconnectFromAll(){this.wireTop=!1,this.wireBottom=!1}get wiresStyle(){return Rn`<style>
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
      </style>`}get wiresSvg(){return Rn`<svg
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
      </svg>`}}return t([h,e("design:type",Object)],i.prototype,"wireTop",void 0),t([h,e("design:type",Object)],i.prototype,"wireTopDisabled",void 0),t([h,e("design:type",Object)],i.prototype,"wireBottom",void 0),t([h,e("design:type",Object)],i.prototype,"wireBottomDisabled",void 0),i}var ca;let la=ca=class MeasurementGateElement extends(an(ta(na(ea(ra(Ur(oa(HTMLElement)))))))){constructor(){super(...arguments),this.iconType="transparent",this.value=0,this.flag=""}static create({dragAndDrop:t=!1,flag:e=""}={}){const n=new ca;return n.dragAndDrop=t,n.flag=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}
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
        </div>`,this.shadowRoot)}toJson(){return""===this.flag?'"Measure"':`"Measure>${this.flag}"`}serialize(){return{type:Ze,flag:this.flag}}get iconSvg(){return Rn`
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
    `}};t([h,e("design:type",Object)],la.prototype,"iconType",void 0),t([h,e("design:type",Object)],la.prototype,"value",void 0),t([h,e("design:type",Object)],la.prototype,"flag",void 0),la=ca=t([m],la);let ua=class QuantumSimulatorElement extends HTMLElement{constructor(){super(...arguments),this.serviceWorker="/serviceworker.js"}clearCircuit(){var t;null===(t=this.quantumCircuit)||void 0===t||t.clear()}connectedCallback(){this.circleNotation=null,this.visibleQubitCircleKets=[],this.addEventListener("dragAndDroppable.grab",this.prepareDraggableDrop),this.addEventListener("dragAndDroppable.ungrab",this.proxyDraggableUngrabEvent),this.addEventListener("dragAndDroppable.enddragging",this.finishEditing),this.addEventListener("dragAndDroppable.trash",this.resizeAndRunCircuit),this.addEventListener("step.load",this.makeStepHoverable),this.addEventListener("step.drop",this.resizeAndRunCircuit),this.addEventListener("step.click",this.breakpointClickedStep),this.addEventListener("step.click",this.gotoClickedStep),this.addEventListener("step.hover",this.activateHoveredStep),this.addEventListener("step.hover",this.showStateVectorOfHoveredStep),this.addEventListener("step.snap",this.run),this.addEventListener("step.unsnap",this.run),this.addEventListener("circuit.loaded",this.registerQuantumCircuit),this.addEventListener("circuit.loaded",this.run),this.addEventListener("circuit.mouseleave",this.gotoBreakpoint),this.addEventListener("circle-notation.loaded",this.registerCircleNotation),this.addEventListener("circle-notation.visibilityChanged",this.showVisibleQubitCircles),this.addEventListener("run-circuit-button.loaded",this.registerRunCircuitButton),this.addEventListener("run-circuit-button.click",this.run),this.addEventListener("operation.change",this.run),this.worker=new Worker(this.serviceWorker),this.worker.addEventListener("message",(t=>{var e;const n=t.data;if(this.amplitudes=this.amplitudes||[],"step"===n.type){const t=this.quantumCircuit.steps[n.step];for(const e in n.blochVectors){const i=t.dropzones[e].draggableElement;if(i){const t=n.blochVectors[e];i.x=t[0],i.y=t[1],i.z=t[2]}}if(n.measuredBits){const e=n.measuredBits,i=t.dropzones;for(const t in e){const n=i[t].draggableElement;n instanceof la&&(n.value=e[t])}}for(const e of t.ifableGates)""!==e.if&&(e.disabled=!n.flags[e.if]);const e={};for(const t in n.amplitudes){const i=n.amplitudes[t];e[t]=new N(i[0],i[1])}this.amplitudes[n.step]=e}else if("finish"===n.type){const t=this.quantumCircuit.activeStep,n=this.quantumCircuit.breakpoint;if(t){const e=this.fetchStepIndex(t);this.drawStateVector(e)}else n?this.gotoBreakpoint():this.setBreakpointAndShowStateVector(0);null===(e=this.runCircuitButton)||void 0===e||e.enable()}}))}registerCircleNotation(t){this.circleNotation=t.target}registerQuantumCircuit(t){this.quantumCircuit=t.target}registerRunCircuitButton(t){this.runCircuitButton=t.target}showVisibleQubitCircles(t){const e=t.detail;j.notNull(e),this.visibleQubitCircleKets=e,this.run()}run(){if(null===this.quantumCircuit)return;if(null===this.circleNotation)return;const t=this.quantumCircuit.qubitCount;this.circleNotation.qubitCount=t,this.worker.postMessage({nqubit:t,steps:this.quantumCircuit.serializedSteps,targets:this.visibleQubitCircleKets})}setBreakpointAndShowStateVector(t){this.quantumCircuit.setBreakpoint(t),this.drawStateVector(t)}breakpointClickedStep(t){const e=t.detail;for(const t of this.quantumCircuit.steps)t.breakpoint=!1;e.breakpoint=!0}gotoClickedStep(t){const e=t.detail,n=this.fetchStepIndex(e);this.setBreakpointAndShowStateVector(n)}activateHoveredStep(t){if(this.quantumCircuit.editing)return;const e=t.detail;for(const t of this.quantumCircuit.steps)t.active=!1;e.active=!0}showStateVectorOfHoveredStep(t){const e=t.detail,n=this.fetchStepIndex(e);this.drawStateVector(n)}makeStepHoverable(t){var e;if(null===(e=this.quantumCircuit)||void 0===e?void 0:e.editing)return;t.detail.hoverable=!0}resizeAndRunCircuit(){this.quantumCircuit.resize(),this.run()}gotoBreakpoint(){var t;const e=null===(t=this.quantumCircuit)||void 0===t?void 0:t.breakpoint,n=this.fetchStepIndex(e);this.drawStateVector(n)}fetchStepIndex(t){const e=this.quantumCircuit.steps.indexOf(t);if(-1===e)throw new Error("CircuitStep not found");return e}drawStateVector(t){if(void 0===this.amplitudes)return;if(null===this.circleNotation)return;const e=this.amplitudes[t];e&&this.circleNotation.setAmplitudes(e)}prepareDraggableDrop(t){t.stopPropagation();const e=t.detail;j.notNull(e),j.notNull(this.quantumCircuit),this.quantumCircuit.prepareDraggableDrop(),e.setSnapTargets(this.quantumCircuit.freeDropzones)}proxyDraggableUngrabEvent(t){var e;const n=t.detail;j.notNull(n),j.notNull(n.x),j.notNull(n.y),null===(e=this.quantumCircuit)||void 0===e||e.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab",{detail:{x:n.x,y:n.y},bubbles:!1}))}finishEditing(t){var e;const n=t.detail;j.notNull(n),j.notNull(n.x),j.notNull(n.y),null===(e=this.quantumCircuit)||void 0===e||e.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging",{detail:{x:n.x,y:n.y},bubbles:!1}))}};var da;t([h,e("design:type",Object)],ua.prototype,"serviceWorker",void 0),ua=t([m],ua);let pa=da=class BlochDisplayElement extends(ta(ea(Ur(oa(HTMLElement))))){constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}static create({dragAndDrop:t=!1}={}){const e=new da;return e.dragAndDrop=t,e}showPopup(){this.isCircuitDraggable()?this.showInspector():this.showHelp()}showInspector(){if(this.grabbed)return;if(this._tippy)return;const t=this.blochInspectorPopupContent();Ve(this,{allowHTML:!0,animation:!1,arrow:oe+oe,delay:0,placement:"auto",theme:"qni",onShow(e){e.setContent(t)}}).show()}blochInspectorPopupContent(){const t=document.createDocumentFragment();return $n(Rn`
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
      `,t),t}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.updateBlochVector(),this.initDragAndDrop())}disconnectedCallback(){const t=this._tippy;null==t||t.destroy()}attributeChangedCallback(t,e,n){this.body&&e!==n&&("data-draggable-source"!==t?"data-draggable-shadow"!==t?null!==n&&("data-x"===t&&(this.x=parseFloat(n)),"data-y"===t&&(this.y=parseFloat(n)),"data-z"===t&&(this.z=parseFloat(n)),this.d=this.vectorLength(),this.phi=this.calculatePhi(),this.theta=this.calculateTheta(),this.updateBlochVector()):this.body.classList.toggle("draggable-shadow"):this.body.classList.toggle("draggable-source"))}update(){this.d=this.vectorLength(),this.phi=this.calculatePhi(),this.theta=this.calculateTheta();const t=t=>Rn`<div
        class="vector-line-rect"
        style="transform: rotateY(${t}deg)"
      ></div>`,e=(t,e)=>Rn`<div
        class="vector-end-circle"
        style="transform: rotate${e}(${t}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`;$n(Rn`${this.sizeableStyle} ${this.dragAndDroppableStyle}

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
        </div>`,this.shadowRoot)}toJson(){return'"Bloch"'}serialize(){return{type:Ke}}updateBlochVector(){const t=this.vectorEndCircles[0].offsetWidth;this.vectorLine.style.height=`calc(${100*this.d/2}% - ${t/2}px)`,this.vectorEnd.style.bottom=`calc(50% + ${100*this.d/2}% + ${t/2}px)`,0!==this.d&&(this.vector.style.transform=`rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`)}get d(){const t=this.getAttribute("data-d");if(null===t)throw new Error("data-d not set");return parseFloat(t)}set d(t){var e;this.setAttribute("data-d",t.toString()),null===(e=this.body)||void 0===e||e.setAttribute("data-d",t.toString())}vectorLength(){return parseFloat(Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z).toFixed(4))}set phi(t){this.setAttribute("data-phi",t.toString())}get phi(){const t=this.getAttribute("data-phi");if(null===t)throw new Error("data-phi not set");return parseFloat(t)}calculatePhi(){return 180*Math.atan2(this.y,this.x)/Math.PI}set theta(t){this.setAttribute("data-theta",t.toString())}get theta(){const t=this.getAttribute("data-theta");if(null===t)throw new Error("data-theta not set");return parseFloat(t)}calculateTheta(){return 180*Math.max(0,Math.PI/2-Math.atan2(this.z,Math.sqrt(this.y*this.y+this.x*this.x)))/Math.PI}forceSigned(t,e=4){return(t>=0?"+":"")+t.toFixed(e)}isCircuitDraggable(){return null!==this.parentElement&&"CIRCUIT-DROPZONE"===this.parentElement.tagName}};t([u,e("design:type",HTMLElement)],pa.prototype,"body",void 0),t([u,e("design:type",HTMLElement)],pa.prototype,"vectorLine",void 0),t([u,e("design:type",HTMLElement)],pa.prototype,"vectorEnd",void 0),t([u,e("design:type",HTMLElement)],pa.prototype,"vector",void 0),t([d,e("design:type",Array)],pa.prototype,"vectorEndCircles",void 0),t([h,e("design:type",Object)],pa.prototype,"x",void 0),t([h,e("design:type",Object)],pa.prototype,"y",void 0),t([h,e("design:type",Object)],pa.prototype,"z",void 0),pa=da=t([m],pa);let ha=class CircuitBlockElement extends HTMLElement{constructor(){super(...arguments),this.comment="",this.finalized=!1}finalize(){this.finalized=!0}connectedCallback(){this.attachShadow({mode:"open"}),this.update()}update(){$n(Rn`<style>
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
        </div>`,this.shadowRoot)}};t([h,e("design:type",Object)],ha.prototype,"comment",void 0),t([h,e("design:type",Object)],ha.prototype,"finalized",void 0),ha=t([m],ha);let fa=class CircuitStepElement extends HTMLElement{constructor(){super(...arguments),this.active=!1,this.snap=!1,this.breakpoint=!1,this.keep=!1,this.shadow=!1,this.hoverable=!1}get isInBlock(){return null!==this.closest("circuit-block")}get block(){return this.closest("circuit-block")}get wireCount(){return this.dropzones.length}get nqubit(){let t=this.wireCount;const e=this.dropzones;for(let n=t-1;n>=0&&!e[n].occupied;n--)t--;return t}get dropzones(){return this.elements("circuit-dropzone")}get lastDropzone(){return this.dropzones[this.wireCount-1]}get isEmpty(){return!this.keep&&this.dropzones.every((t=>!t.occupied))}dropzone(t){const e=this.dropzones[t];if(void 0===e)throw new Error("Dropzone not found");return e}dropzoneIndex(t){const e=this.dropzones.indexOf(t);return-1===e?null:e}bit(t){const e=t.parentElement;if(null===e)throw new Error("Dropzone not found");return this.dropzones.indexOf(e)}index(){const t=this.quantumCircuitElement();if(null===t)return null;const e=t.steps.indexOf(this);if(-1===e)throw new Error("circuitStep not found");return e}prev(){const t=this.index();if(null===t||0===t)return null;const e=this.quantumCircuitElement();if(null===e)return null;return e.steps[t-1]||null}next(){const t=this.index();if(null===t)return null;const e=this.quantumCircuitElement();if(null===e)return null;return e.steps[t+1]||null}activate(){this.dispatchEvent(new CustomEvent("step.click",{bubbles:!0,detail:this}))}appendDropzone(){const t=document.createElement("circuit-dropzone");return this.append(t),t}appendOperation(t){const e=document.createElement("circuit-dropzone");e.append(t),e.occupied=!0,this.append(e),this.updateConnections()}remove(){var t;null===(t=this.parentElement)||void 0===t||t.removeChild(this)}quantumCircuitElement(){return this.closest("quantum-circuit")}serialize(){return this.dropzones.map((t=>t.serialize()))}toJson(){const t=this.dropzones.map((t=>t.toJson()));for(;t.length>0&&"1"===t[t.length-1];)t.pop();return 0===t.length?"[1]":`[${t.join(",")}]`}attributeChangedCallback(t,e,n){if(e!==n&&"data-shadow"===t&&null===n)for(const t of this.dropzones)t.shadow=!1}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.addSlotChangeEventListener(),this.updateConnections(),this.updateWires(),this.dispatchStepLoadEvent(),this.addEventListener("mouseenter",this.dispatchStepHoverEvent),this.addEventListener("dropzone.snap",this.dispatchStepHoverEvent),this.addEventListener("dropzone.snap",this.dispatchStepSnapEvent),this.addEventListener("dropzone.unsnap",this.dispatchStepUnsnapEvent),this.addEventListener("dropzone.drop",this.dispatchStepDropEvent),this.addEventListener("dragAndDroppable.grab",this.dispatchStepSnapEvent),this.addEventListener("dragAndDroppable.enddragging",this.unsnap),this.addEventListener("click",this.activate)}dispatchStepLoadEvent(){this.dispatchEvent(new CustomEvent("step.load",{detail:this,bubbles:!0}))}dispatchStepHoverEvent(){this.dispatchEvent(new CustomEvent("step.hover",{detail:this,bubbles:!0}))}dispatchStepSnapEvent(){this.dispatchEvent(new CustomEvent("step.snap",{detail:this,bubbles:!0}))}dispatchStepUnsnapEvent(){this.unsnap(),this.dispatchEvent(new CustomEvent("step.unsnap",{detail:this,bubbles:!0}))}dispatchStepDropEvent(){this.dispatchEvent(new CustomEvent("step.drop",{detail:this,bubbles:!0}))}unsnap(){this.snap=!1}update(){$n(Rn`<style>
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          :host([data-hoverable]) {
            cursor: pointer;
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
            margin-right: ${Vr.size.xl/2}rem;
          }

          ::slotted(circuit-dropzone[data-wire-count="3"]:nth-of-type(n + 2)) {
            margin-right: ${Vr.size.lg/2}rem;
          }

          ::slotted(circuit-dropzone[data-wire-count="4"]:nth-of-type(n + 2)) {
            margin-right: ${Vr.size.base/2}rem;
          }

          ::slotted(circuit-dropzone[data-wire-count="5"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="6"]:nth-of-type(n + 2)) {
            margin-right: ${Vr.size.sm/2}rem;
          }

          ::slotted(circuit-dropzone[data-wire-count="7"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="8"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="9"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="10"]:nth-of-type(n + 2)) {
            margin-right: ${Vr.size.xs/2}rem;
          }

          @media (min-width: 768px) {
            #body {
              flex-direction: column;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }

            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: ${Vr.size.base/2}rem !important;
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
        </div>`,this.shadowRoot)}addSlotChangeEventListener(){this.slotEl.addEventListener("slotchange",(()=>{if(this.shadow)for(const t of this.dropzones)t.shadow=!0;this.updateConnections(),this.updateWires();for(const t of this.dropzones)t.wireCount=this.wireCount}))}updateConnections(){for(const e of this.dropzones){e.wireTop=!1,e.wireBottom=!1;const n=e.draggableElement;"object"==typeof(t=n)&&null!==t&&"boolean"==typeof t.wireTop&&"boolean"==typeof t.wireBottom&&"function"==typeof t.disconnectFromAll&&n.disconnectFromAll()}var t;if(2!==this.swapGates.length)for(const t of this.swapGates)t.disable();else{const t=this.swapGates,e=t.map((t=>this.bit(t)));for(const n of t)n.enable(),n.targets=e,n.wireTop=t.some((t=>this.bit(t)<this.bit(n))),n.wireBottom=t.some((t=>this.bit(t)>this.bit(n)));for(const t of this.dropzones){if(t.draggable)continue;const n=Math.min(...e),i=Math.max(...e);n<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<i&&(t.wireTop=!0,t.wireBottom=!0)}}for(const t of this.phaseGates){if(""===t.phi)continue;const e=this.phaseGates.filter((e=>e.phi===t.phi));for(const t of e)t.targets=e.map((t=>this.bit(t))),t.wireTop=e.some((e=>this.bit(e)<this.bit(t))),t.wireBottom=e.some((e=>this.bit(e)>this.bit(t)));for(const t of this.dropzones){if(t.draggable)continue;const n=e.map((t=>this.bit(t))),i=Math.min(...n),o=Math.max(...n);i<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<o&&(t.wireTop=!0,t.wireBottom=!0)}}if(0!==this.controlGates.length){if(1===this.controlGates.length&&0===this.controllableGates.length){const t=this.controlGates[0];return t.disable(),void(t.targets=[])}if(0===this.controllableGates.length)for(const t of this.controlGates)t.enable(),t.targets=this.controlBits,t.wireTop=this.controlGates.some((e=>this.bit(t)>this.bit(e))),t.wireBottom=this.controlGates.some((e=>this.bit(t)<this.bit(e)));else{for(const t of this.controllableGates)t.controls=this.controlBits,t.wireTop=this.controlGates.some((e=>this.bit(e)<this.bit(t)))||this.controllableGates.some((e=>this.bit(e)<this.bit(t))),t.wireBottom=this.controlGates.some((e=>this.bit(e)>this.bit(t)))||this.controllableGates.some((e=>this.bit(e)>this.bit(t)));for(const t of this.controlGates)t.enable(),t.targets=this.controllableBits,t.wireTop=this.controllableGates.some((e=>this.bit(t)>this.bit(e)))||this.controlGates.some((e=>this.bit(t)>this.bit(e))),t.wireBottom=this.controllableGates.some((e=>this.bit(t)<this.bit(e)))||this.controlGates.some((e=>this.bit(t)<this.bit(e)))}for(const t of this.dropzones){if(t.draggable)continue;const e=this.controlGates.map((t=>this.bit(t))).concat(this.controllableGates.map((t=>this.bit(t)))),n=e.sort()[0],i=e.sort().slice(-1)[0];n<this.dropzones.indexOf(t)&&this.dropzones.indexOf(t)<i&&(t.wireTop=!0,t.wireBottom=!0)}}else for(const t of this.controllableGates)t.controls=[]}updateWires(){for(const t of this.dropzones)t.updateWires()}get controlGates(){return this.snappedDraggables("control-gate")}get controlBits(){return this.controlGates.map((t=>this.bit(t)))}get controllableGates(){return this.snappedDraggables("h-gate,x-gate,y-gate,z-gate,phase-gate,rnot-gate,rx-gate,ry-gate,rz-gate,swap-gate")}get ifableGates(){return this.snappedDraggables("h-gate,x-gate,rnot-gate")}get controllableBits(){return this.controllableGates.map((t=>this.bit(t)))}get phaseGates(){return this.snappedDraggables("phase-gate")}get swapGates(){return this.snappedDraggables("swap-gate")}elements(t){return Array.from(this.querySelectorAll(t))}snappedDraggables(t){return this.elements(t).filter((t=>t.snapped))}};var ga;t([h,e("design:type",Object)],fa.prototype,"active",void 0),t([h,e("design:type",Object)],fa.prototype,"snap",void 0),t([h,e("design:type",Object)],fa.prototype,"breakpoint",void 0),t([h,e("design:type",Object)],fa.prototype,"keep",void 0),t([h,e("design:type",Object)],fa.prototype,"shadow",void 0),t([h,e("design:type",Object)],fa.prototype,"hoverable",void 0),t([u,e("design:type",HTMLSlotElement)],fa.prototype,"slotEl",void 0),fa=t([m],fa);let ma=ga=class ControlGateElement extends(ta(aa(sa(Ln(na(ea(Ur(oa(HTMLElement))))))))){constructor(){super(...arguments),this.iconType="transparent"}static create({dragAndDrop:t=!1}={}){const e=new ga;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"•"'}serialize(){return{type:"•",targets:this.targets}}get iconSvg(){return Rn`
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
    `}};var va;t([h,e("design:type",Object)],ma.prototype,"iconType",void 0),ma=ga=t([m],ma);let ba=va=class HGateElement extends(an(ta(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const n=new va;return n.dragAndDrop=t,n.if=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"H<${this.if}"`:'"H"'}serialize(){return{type:"H",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L17 35M17 24L31 24M31 13L31 35" />
    </svg>`}};var ya;t([h,e("design:type",Object)],ba.prototype,"iconType",void 0),ba=va=t([m],ba);let wa=ya=class PhaseGateElement extends(an(ta(aa(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="circle",this.phi=""}static create({phi:t="π/2",dragAndDrop:e=!1}={}){const n=new ya;return n.phi=t,n.dragAndDrop=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.phi?'"P"':`"P(${this.phi.replace("/","_")})"`}serialize(){return{type:"P",phi:this.phi.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
    </svg>`}};var xa;t([h,e("design:type",Object)],wa.prototype,"iconType",void 0),t([h,e("design:type",Object)],wa.prototype,"phi",void 0),wa=ya=t([m],wa);let Sa=xa=class RnotGateElement extends(an(ta(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const n=new xa;return n.dragAndDrop=t,n.if=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"X^½<${this.if}"`:'"X^½"'}serialize(){return{type:Xe,controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg
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
    </svg>`}};var Ea;t([h,e("design:type",Object)],Sa.prototype,"iconType",void 0),Sa=xa=t([m],Sa);let _a=Ea=class RxGateElement extends(an(ta(aa(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const n=new Ea;return n.theta=t,n.dragAndDrop=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Rx"':`"Rx(${this.theta.replace("/","_")})"`}serialize(){return{type:Ye,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998L34.609 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}};var Oa;t([h,e("design:type",Object)],_a.prototype,"iconType",void 0),t([h,e("design:type",Object)],_a.prototype,"theta",void 0),_a=Ea=t([m],_a);let Ma=Oa=class RyGateElement extends(an(ta(aa(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const n=new Oa;return n.theta=t,n.dragAndDrop=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Ry"':`"Ry(${this.theta.replace("/","_")})"`}serialize(){return{type:Ge,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002l-4.967 10.927M25.03 13.002l4.613 10.927m0 0L29.676 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}};var Pa;t([h,e("design:type",Object)],Ma.prototype,"iconType",void 0),t([h,e("design:type",Object)],Ma.prototype,"theta",void 0),Ma=Oa=t([m],Ma);let za=Pa=class RzGateElement extends(an(ta(aa(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement))))))))))))){constructor(){super(...arguments),this.iconType="square",this.theta=""}static create({theta:t="π/2",dragAndDrop:e=!1}={}){const n=new Pa;return n.theta=t,n.dragAndDrop=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""===this.theta?'"Rz"':`"Rz(${this.theta.replace("/","_")})"`}serialize(){return{type:Qe,theta:this.theta.replace("π","pi"),controls:this.controls,targets:this.targets,if:this.if}}get iconSvg(){return Rn`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}};var ka;t([h,e("design:type",Object)],za.prototype,"iconType",void 0),t([h,e("design:type",Object)],za.prototype,"theta",void 0),za=Pa=t([m],za);let Ta=ka=class SwapGateElement extends(ta(aa(sn(sa(Ln(na(ea(Ur(oa(HTMLElement)))))))))){constructor(){super(...arguments),this.iconType="transparent"}static create({dragAndDrop:t=!1}={}){const e=new ka;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:swap-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Swap"'}serialize(){const t=this.targets;if(2!==t.length&&0!==t.length)throw new Error(`Invalid swap targets: ${this.targets.toString()}`);return{type:Je,controls:this.controls,targets:t}}get iconSvg(){return Rn`<svg
      id="icon"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>`}};var Aa;t([h,e("design:type",Object)],Ta.prototype,"iconType",void 0),Ta=ka=t([m],Ta);let Ca=Aa=class WriteGateElement extends(ta(na(ea(Ur(oa(HTMLElement)))))){constructor(){super(...arguments),this.iconType="transparent",this.value="0"}static create(t,{dragAndDrop:e=!1}={}){const n=new Aa;return n.value=t,n.dragAndDrop=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$n(Rn`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}

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
            font-size: 0.875rem;
            line-height: 1.25rem;
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
        </div>`,this.shadowRoot)}toJson(){return`"|${this.value}>"`}serialize(){if("0"!==this.value&&"1"!==this.value)throw new Error(`Invalid write value: ${this.value}`);return{type:"Write",value:parseInt(this.value)}}get iconSvg(){return Rn`<svg
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
    </svg>`}};var Da;t([h,e("design:type",Object)],Ca.prototype,"iconType",void 0),t([h,e("design:type",Object)],Ca.prototype,"value",void 0),Ca=Aa=t([m],Ca);let qa=Da=class XGateElement extends(an(ta(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement)))))))))))){constructor(){super(...arguments),this.iconType="circle"}static create({dragAndDrop:t=!1,ifVar:e=""}={}){const n=new Da;return n.dragAndDrop=t,n.if=e,n}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop(),this.addEventListener("mouseenter",this.showHelp),this.addEventListener("mousedown",this.showRightClickPopup))}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,this.shadowRoot)}toJson(){return""!==this.if?`"X<${this.if}"`:'"X"'}serialize(){return{type:"X",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg
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
    </svg>`}};var ja;t([h,e("design:type",Object)],qa.prototype,"iconType",void 0),qa=Da=t([m],qa);let Ia=ja=class YGateElement extends(ta(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1}={}){const e=new ja;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:y-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Y"'}serialize(){return{type:"Y",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L24 24L31 13M24 24L24 35" />
    </svg>`}};var Ra;t([h,e("design:type",Object)],Ia.prototype,"iconType",void 0),Ia=ja=t([m],Ia);let $a=Ra=class ZGateElement extends(ta(sn(sa(ra(ia(Ln(na(ea(Ur(oa(HTMLElement))))))))))){constructor(){super(...arguments),this.iconType="square"}static create({dragAndDrop:t=!1}={}){const e=new Ra;return e.dragAndDrop=t,e}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.initDragAndDrop())}update(){$n(Rn`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:z-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,this.shadowRoot)}toJson(){return'"Z"'}serialize(){return{type:"Z",controls:this.controls,if:""!==this.if?this.if:null}}get iconSvg(){return Rn`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L31 13L17 35L31 35" />
    </svg>`}};t([h,e("design:type",Object)],$a.prototype,"iconType",void 0),$a=Ra=t([m],$a);let La=class QuantumCircuitElement extends HTMLElement{constructor(){super(...arguments),this.json="",this.updateUrl=!1,this.minWireCount=1,this.maxWireCount=10,this.wireCount=1,this.minStepCount=1,this.interactive=!1,this.editing=!1,this.qubitCount=1,this.breakpointStepIndex=0}get steps(){return Array.from(this.querySelectorAll("circuit-step"))}get breakpoint(){for(const t of this.steps)if(t.breakpoint)return t;return this.setBreakpoint(this.breakpointStepIndex),this.steps[this.breakpointStepIndex]}get activeStep(){for(const t of this.steps)if(t.active)return t;return null}get snappedStep(){for(const t of this.steps)if(t.snap)return t;return null}get serializedSteps(){return this.steps.map((t=>t.serialize()))}get emptySteps(){return this.steps.filter((t=>t.isEmpty))}get nonEmptySteps(){return this.steps.filter((t=>!t.isEmpty))}get largestStep(){let t=null,e=0;for(const n of this.steps)n.wireCount>0&&n.wireCount>e&&(t=n,e=n.wireCount);return t}get dropzones(){return Array.from(this.querySelectorAll("circuit-dropzone"))}get freeDropzones(){return this.dropzones.filter((t=>!t.occupied))}step(t){const e=this.steps[t];if(void 0===e)throw new Error(`step ${t} does not exist.`);return e}appendStep(){const t=new fa,e=this.blocks.slice(-1)[0]||null;return null===e||e.finalized?this.append(t):e.append(t),t}i(){return this.appendStep().keep=!0,this.resize(),this}h(...t){return this.applyOperation(new ba,...t),this.resize(),this}x(...t){return this.applyOperation(new qa,...t),this.resize(),this}y(...t){return this.applyOperation(new Ia,...t),this.resize(),this}z(...t){return this.applyOperation(new $a,...t),this.resize(),this}phase(t,...e){return this.applyOperation(wa.create({phi:t.toString()}),...e),this.resize(),this}rnot(...t){return this.applyOperation(new Sa,...t),this.resize(),this}rx(t,...e){return this.applyOperation(_a.create({theta:t.toString()}),...e),this.resize(),this}ry(t,...e){return this.applyOperation(Ma.create({theta:t.toString()}),...e),this.resize(),this}rz(t,...e){return this.applyOperation(za.create({theta:t.toString()}),...e),this.resize(),this}control(...t){return this.applyOperation(new ma,...t),this.resize(),this}cnot(t,e){this.validateQubits(t,e);const n=this.appendStep(),i=Math.max(t,e)+1;for(let t=0;t<i;t++)n.appendDropzone();return n.dropzones[t].assign(new ma),n.dropzones[e].assign(new qa),this.resize(),this}ccnot(t,e,n){this.validateQubits(t,e,n);const i=this.appendStep(),o=Math.max(t,e,n)+1;for(let t=0;t<o;t++)i.appendDropzone();return i.dropzones[t].assign(new ma),i.dropzones[e].assign(new ma),i.dropzones[n].assign(new qa),this.resize(),this}swap(t,e){return this.applyOperation(new Ta,t,e),this.resize(),this}bloch(...t){return this.applyOperation(new pa,...t),this.resize(),this}write(t,...e){return this.applyOperation(Ca.create(t),...e),this.resize(),this}measure(...t){return this.applyOperation(new la,...t),this.resize(),this}block(t,e){const n=new ha;return n.comment=t,n.setAttribute("data-targets","quantum-circuit.blocks"),this.append(n),e(this),n.finalize(),this}connectedCallback(){this.addEventListener("dragAndDroppable.ungrab",(()=>{this.editing=!1})),this.addEventListener("dragAndDroppable.ungrab",this.resize),this.addEventListener("dragAndDroppable.ungrab",this.enableDraggablesHover),this.addEventListener("dragAndDroppable.ungrab",this.dispatchStepHoverEvent),this.addEventListener("dragAndDroppable.enddragging",(()=>{this.editing=!1})),this.addEventListener("dragAndDroppable.enddragging",this.resize),this.addEventListener("dragAndDroppable.enddragging",this.enableDraggablesHover),this.addEventListener("dragAndDroppable.enddragging",this.dispatchStepHoverEvent),this.addEventListener("step.snap",this.snapStep),this.addEventListener("step.snap",this.updateAllSteps),this.addEventListener("step.snap",this.updateNqubit),this.addEventListener("step.unsnap",this.unsnapStep),this.addEventListener("step.unsnap",this.updateAllSteps),this.addEventListener("step.unsnap",this.updateNqubit),this.addEventListener("mouseleave",this.dispatchCircuitMouseLeaveEvent),this.addEventListener("operation.update",this.updateJsonUrl),this.attachShadow({mode:"open"}),this.update(),this.loadFromJson(),this.updateAllSteps(),this.updateNqubit(),this.dispatchEvent(new Event("circuit.loaded",{bubbles:!0}))}updateNqubit(){const t=this.steps;if(0===t.length)return this.qubitCount=1,void(this.wireCount=this.minWireCount);const e=Math.max(...t.map((t=>t.nqubit)));if(0===e)return this.qubitCount=1,void(this.wireCount=this.minWireCount);this.qubitCount=e,e>this.minWireCount?this.wireCount=e:this.wireCount=this.minWireCount}dispatchStepHoverEvent(t){const e=t.detail.x,n=t.detail.y,i=document.elementFromPoint(e,n),o=null==i?void 0:i.closest("circuit-step");null==o||o.dispatchStepHoverEvent()}dispatchCircuitMouseLeaveEvent(){for(const t of this.steps)t.active=!1;this.dispatchEvent(new Event("circuit.mouseleave",{bubbles:!0}))}setBreakpoint(t){const e=this.steps[t];this.breakpointStepIndex=t;for(const t of this.steps)t.breakpoint=!1;e.breakpoint=!0}snapStep(t){if(!this.interactive)return;const e=t.detail;for(const t of this.steps)this.editing&&(t.active=!1),t.snap=!1;this.editing&&(e.active=!0),e.snap=!0}unsnapStep(t){if(!this.interactive)return;const e=t.detail;this.editing&&(e.active=!1),e.snap=!1}attributeChangedCallback(t,e,n){null!==this.shadowRoot&&e!==n&&"data-json"===t&&(this.update(),this.loadFromJson())}update(){$n(Rn`<style>
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

        <div
          id="body"
          data-action="circuitchange:quantum-circuit#updateAllSteps"
        >
          <slot data-target="quantum-circuit.slotEl"></slot>
        </div>`,this.shadowRoot)}applyOperation(t,...e){this.validateQubits(...e);const n=this.appendStep(),i=Math.max(...e)+1;for(let t=0;t<i;t++)n.appendDropzone();for(const i of e){const e=t.cloneNode();e instanceof wa&&(e.phi=t.phi),e instanceof _a&&(e.theta=t.theta),e instanceof Ma&&(e.theta=t.theta),e instanceof za&&(e.theta=t.theta),e instanceof Ca&&(e.value=t.value),n.dropzones[i].assign(e)}}validateQubits(...t){if(t.some((t=>t<0)))throw new Error("The index of the qubit must be greater than or equal to 0.")}loadFromJson(){let t,e=null;if(t=this.updateUrl?this.urlJson:this.json,""===t||"new"===t)return void(this.updateUrl&&this.resize());const n=JSON.parse(t);for(const t of n.cols){const n=this.appendStep();for(const i of t)switch(!0){case/^\|0>$/.test(i):n.appendOperation(Ca.create("0",{dragAndDrop:this.updateUrl}));break;case/^\|1>$/.test(i):n.appendOperation(Ca.create("1",{dragAndDrop:this.updateUrl}));break;case/^H$/.test(i):n.appendOperation(ba.create({dragAndDrop:this.updateUrl}));break;case/^H<(.+)$/.test(i):n.appendOperation(ba.create({dragAndDrop:this.updateUrl,ifVar:RegExp.$1.trim()}));break;case/^X$/.test(i):n.appendOperation(qa.create({dragAndDrop:this.updateUrl}));break;case/^X<(.+)$/.test(i):n.appendOperation(qa.create({dragAndDrop:this.updateUrl,ifVar:RegExp.$1.trim()}));break;case/^Y$/.test(i):n.appendOperation(Ia.create({dragAndDrop:this.updateUrl}));break;case/^Z$/.test(i):n.appendOperation($a.create({dragAndDrop:this.updateUrl}));break;case/^P$/.test(i):n.appendOperation(wa.create({dragAndDrop:this.updateUrl}));break;case/^P\((.+)\)$/.test(i):n.appendOperation(wa.create({phi:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^X\^½$/.test(i):{const t=new Sa;t.dragAndDrop=this.updateUrl,n.appendOperation(t);break}case/^X\^½<(.+)$/.test(i):{const t=new Sa;t.dragAndDrop=this.updateUrl,t.if=RegExp.$1.trim(),n.appendOperation(t);break}case/^Rx$/.test(i):n.appendOperation(_a.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Rx\((.+)\)$/.test(i):n.appendOperation(_a.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Ry$/.test(i):n.appendOperation(Ma.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Ry\((.+)\)$/.test(i):n.appendOperation(Ma.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Rz$/.test(i):n.appendOperation(za.create({theta:"π/2",dragAndDrop:this.updateUrl}));break;case/^Rz\((.+)\)$/.test(i):n.appendOperation(za.create({theta:RegExp.$1.replace("_","/"),dragAndDrop:this.updateUrl}));break;case/^Swap$/.test(i):n.appendOperation(Ta.create({dragAndDrop:this.updateUrl}));break;case/^•$/.test(i):n.appendOperation(ma.create({dragAndDrop:this.updateUrl}));break;case/^Bloch$/.test(i):n.appendOperation(pa.create({dragAndDrop:this.updateUrl}));break;case/^Measure$/.test(i):n.appendOperation(la.create({dragAndDrop:this.updateUrl}));break;case/^Measure>(.+)$/.test(i):n.appendOperation(la.create({dragAndDrop:this.updateUrl,flag:RegExp.$1.trim()}));break;case/^\{(.+)$/.test(i):{const t=RegExp.$1;n.remove(),e=new ha,e.comment=t,e.setAttribute("data-targets","quantum-circuit.blocks"),this.append(e);break}case/^\}$/.test(i):n.remove(),e.finalize();break;default:if(1!==i)throw new Error(`Unknown instruction: ${i}`);0===n.nqubit?n.keep=!0:n.keep=!1,n.appendDropzone()}}this.resize()}get urlJson(){return decodeURIComponent(location.pathname.split("/").pop()||"")}updateAllSteps(){for(const t of this.steps)t.updateWires(),t.updateConnections();this.updateJsonUrl()}prepareDraggableDrop(){this.interactive=!0,this.editing=!0,this.disableDraggablesOnCircuitHover(),this.appendWire(),this.appendCircuitStepShadow()}disableDraggablesOnCircuitHover(){for(const t of this.draggablesOnCircuit)t.hoverable=!1}enableDraggablesHover(){for(const t of this.draggables)t.hoverable=!0}get draggables(){return Array.from(this.querySelectorAll("[data-drag-and-drop]"))}get draggablesOnCircuit(){return Array.from(this.querySelectorAll("[data-drag-and-drop]:not([data-grabbed])"))}appendWire(){if(!(this.qubitCount>=this.maxWireCount))for(const t of this.steps)t.appendDropzone()}appendCircuitStepShadow(){const t=this.largestStep.wireCount;for(const e of this.steps){const n=new fa;n.shadow=!0;for(let e=0;e<t;e++)n.appendDropzone();const i=e.parentElement;j.notNull(i),i.insertBefore(n,e.nextSibling)}const e=new fa;e.shadow=!0;for(let n=0;n<t;n++)e.appendDropzone();this.prepend(e)}resize(){this.removeEmptySteps(),this.appendMinimumSteps(),this.removeLastEmptyWires(),this.updateJsonUrl()}removeEmptySteps(){for(const t of this.emptySteps)t.remove();for(const t of this.steps)t.shadow=!1}appendMinimumSteps(){const t=this.minStepCount-this.steps.length;for(let e=0;e<t;e++)this.appendStep();const e=this.largestStep&&this.largestStep.wireCount>this.minWireCount?this.largestStep.wireCount:this.minWireCount;for(const t of this.steps){const n=e-t.wireCount;for(let e=0;e<n;e++)t.appendDropzone()}}removeLastEmptyWires(){for(;this.steps.every((t=>t.wireCount>this.minWireCount&&!t.lastDropzone.occupied));)for(const t of this.steps)t.lastDropzone.remove()}clear(){history.pushState("","",'{"cols":[]}'),location.reload()}updateJsonUrl(){this.updateUrl&&history.pushState("","",this.toJson())}toJson(){let t=!1;const e=[];for(const n of this.nonEmptySteps){if(n.isInBlock){if(!t){const i=n.block;e.push(`["{${i.comment}"]`),t=!0}}else t&&(e.push('["}"]'),t=!1);e.push(n.toJson())}return t&&e.push('["}"]'),`{"cols":[${e.join(",")}]}`}};t([h,e("design:type",Object)],La.prototype,"json",void 0),t([h,e("design:type",Object)],La.prototype,"updateUrl",void 0),t([h,e("design:type",Object)],La.prototype,"minWireCount",void 0),t([h,e("design:type",Object)],La.prototype,"maxWireCount",void 0),t([h,e("design:type",Object)],La.prototype,"wireCount",void 0),t([h,e("design:type",Object)],La.prototype,"minStepCount",void 0),t([h,e("design:type",Object)],La.prototype,"interactive",void 0),t([h,e("design:type",Object)],La.prototype,"editing",void 0),t([h,e("design:type",Object)],La.prototype,"qubitCount",void 0),t([u,e("design:type",HTMLSlotElement)],La.prototype,"slotEl",void 0),t([d,e("design:type",Array)],La.prototype,"blocks",void 0),La=t([m],La);let Na=class CircleNotationElement extends HTMLElement{constructor(){super(...arguments),this.qubitCount=1,this.size="",this.magnitudes="1.0",this.phases="",this.multiQubits=!1,this.showKets=!1}setAmplitudes(t){const e=this.qubitCircles;for(const[n,i]of Object.entries(t)){const t=e[parseInt(n)];t.setAttribute("data-amplitude-real",i.real.toString()),t.setAttribute("data-amplitude-imag",i.imag.toString());const o=i.abs();if(this.setRoundedMagnitude(t,o),0===o)continue;const r=i.phase()/Math.PI*180;this.setRoundedPhase(t,r)}}connectedCallback(){null===this.shadowRoot&&(this.attachShadow({mode:"open"}),this.update(),this.multiQubits&&(this.startQubitCircleVisibilityObserver(),this.initQubitCirclePopup(this.qubitCircles),this.dispatchLoadedEvent()))}dispatchLoadedEvent(){this.dispatchEvent(new Event("circle-notation.loaded",{bubbles:!0}))}startQubitCircleVisibilityObserver(){const t=new IntersectionObserver((t=>{for(const e of t){const t=e.target;e.intersectionRatio>=.2?(t.setAttribute("data-targets","circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"),this.dispatchEvent(new CustomEvent("circle-notation.visibilityChanged",{detail:this.visibleQubitCircleKets,bubbles:!0}))):0===e.intersectionRatio&&t.setAttribute("data-targets","circle-notation.qubitCircleGroups")}}),{root:this,threshold:[0,.2]});for(const e of this.qubitCircleGroups)t.observe(e)}get visibleQubitCircleKets(){return this.visibleQubitCircles.map((t=>parseInt(t.getAttribute("data-ket"))))}get visibleQubitCircles(){const t=this.visibleQubitCircleGroups.map((t=>Array.from(t.querySelectorAll(".qubit-circle"))));return[].concat(...t)}update(){$n(Rn`<style>
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
            color: var(--colors-wolf, #777777);
            margin-bottom: -24px;
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

        <div id="body">${this.qubitCirclesHtml}</div>`,this.shadowRoot);for(const[t,e]of this.magnitudes.split(",").entries())this.setRoundedMagnitude(this.qubitCircles[t],parseFloat(e));for(const[t,e]of this.phases.split(",").entries()){this.qubitCircles[t].querySelector(".qubit-circle__phase").style.transform=`rotate(${-parseFloat(e)}deg)`}}setRoundedMagnitude(t,e){if(null===t)return;if(void 0===t)return;let n=Math.round(100*e);n=n<10?0===n?0:10:10*Math.round(n/10),n/=100,t.setAttribute("data-magnitude",e.toString()),t.setAttribute("data-rounded-magnitude",n.toString())}setRoundedPhase(t,e){if(null===t)return;if(void 0===t)return;let n=10*Math.round(e/10);n<0&&(n=360+n),t.setAttribute("data-phase",e.toString()),t.setAttribute("data-rounded-phase",n.toString())}get qubitCirclesHtml(){return this.multiQubits?this.stateVectorHtml(10):Rn`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`}qubitCircleHtml(t){return Rn`<div
      class="qubit-circle"
      data-ket="${t}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`}stateVectorHtml(t){let e=Rn``;const n=this.qubitCircleGroup([...Array(Math.pow(2,t)).keys()],(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t,(t=>this.qubitCircleGroup(t)))))))))))),256);for(const t of n)e=Rn`${e} ${t}`;return e}qubitCircleGroup(t,e,n=t.length/2){return((t,e=1)=>t.reduce(((n,i,o)=>o%e?n:[...n,t.slice(o,o+e)]),[]))(t,n).map((t=>{let i=Rn``;if(e)for(const n of e(t))i=Rn`${i} ${n}`;else for(const e of t)i=Rn`${i} ${this.qubitCircleHtml(e)}`;return 64===n?Rn`<div
          class="qubit-circle-group--size${n}"
          data-targets="circle-notation.qubitCircleGroups"
        >
          ${i}
        </div>`:Rn`<div class="qubit-circle-group--size${n}">${i}</div>`}))}initQubitCirclePopup(t){const e=Ve(t);He(e,{allowHTML:!0,animation:!1,arrow:oe+oe,delay:0,theme:"qni"})}setPopupContent(t){if(!this.multiQubits)return;const e=t.target,n=this.ketDecimal(e),i=e.getAttribute("data-amplitude-real"),o=e.getAttribute("data-amplitude-imag"),r=e.getAttribute("data-magnitude"),a=e.getAttribute("data-phase");if(null===i||null===o||null===r||null===a)this.setQubitCirclePopupContent(this.popupEl.content,e,n,N.ZERO,0,0,this.qubitCount);else{const t=new N(parseFloat(i),parseFloat(o));this.setQubitCirclePopupContent(this.popupEl.content,e,n,t,parseFloat(r),parseFloat(a),this.qubitCount)}}setQubitCirclePopupContent(t,e,n,i,o,r,a){e._tippy.setContent(this.popupContent(t,n,i,o,r,a))}popupContent(t,e,n,i,o,r){const a=t.querySelector(".circle-notation-popup__ket-binary"),s=t.querySelector(".circle-notation-popup__ket-decimal"),c=t.querySelector(".circle-notation-popup__amplitude-real"),l=t.querySelector(".circle-notation-popup__amplitude-imag"),u=t.querySelector(".circle-notation-popup__probability"),d=t.querySelector(".circle-notation-popup__phase");a.textContent=e.toString(2).padStart(r,"0"),s.textContent=e.toString(),c.textContent=this.forceSigned(n.real,5),l.textContent=`${this.forceSigned(n.imag,5)}i`,u.textContent=`${this.forceSigned(i*i*100,4)}%`,d.textContent=`${this.forceSigned(o,2)}°`;const p=document.createElement("div");return p.appendChild(t.cloneNode(!0)),p.innerHTML}get popupEl(){return this.querySelector("#circle-notation-popup")}forceSigned(t,e){return(t>=0?"+":"")+t.toFixed(e)}ketDecimal(t){const e=t.getAttribute("data-ket");return parseInt(e)}};t([h,e("design:type",Object)],Na.prototype,"qubitCount",void 0),t([h,e("design:type",Object)],Na.prototype,"size",void 0),t([h,e("design:type",Object)],Na.prototype,"magnitudes",void 0),t([h,e("design:type",Object)],Na.prototype,"phases",void 0),t([h,e("design:type",Object)],Na.prototype,"multiQubits",void 0),t([h,e("design:type",Object)],Na.prototype,"showKets",void 0),t([d,e("design:type",Array)],Na.prototype,"qubitCircles",void 0),t([d,e("design:type",Array)],Na.prototype,"qubitCircleGroups",void 0),t([d,e("design:type",Array)],Na.prototype,"visibleQubitCircleGroups",void 0),Na=t([m],Na);const Fa=Rn`<style>
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
  </svg>`,Ba=Rn`<style>
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
  </svg>`;let Va=class RunCircuitButtonElement extends HTMLElement{runSimulator(){this.disable(),this.dispatchEvent(new Event("run-circuit-button.click",{bubbles:!0}))}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}connectedCallback(){this.attachShadow({mode:"open"}),this.update(),this.dispatchEvent(new Event("run-circuit-button.loaded",{bubbles:!0}))}update(){$n(Rn`<style>
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
          ${Fa} ${Ba}
        </button>`,this.shadowRoot)}};t([u,e("design:type",HTMLInputElement)],Va.prototype,"button",void 0),Va=t([m],Va)}));
//# sourceMappingURL=qni.js.map
