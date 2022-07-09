var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var th = Object.create;
var Gi = Object.defineProperty;
var qu = Object.getOwnPropertyDescriptor;
var rh = Object.getOwnPropertyNames;
var nh = Object.getPrototypeOf;
var ih = Object.prototype.hasOwnProperty;
var oh = /* @__PURE__ */ __name((r) => Gi(r, "__esModule", { value: true }), "oh");
var u = /* @__PURE__ */ __name((r, e) => Gi(r, "name", { value: e, configurable: true }), "u");
var oa = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "oa");
var ah = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of rh(e))
      !ih.call(r, l) && (t || l !== "default") && Gi(r, l, { get: () => e[l], enumerable: !(i = qu(e, l)) || i.enumerable });
  return r;
}, "ah");
var ei = /* @__PURE__ */ __name((r, e) => ah(oh(Gi(r != null ? th(nh(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "ei");
var A = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? qu(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && Gi(e, t, l), l;
}, "A");
var Wu = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "Wu");
var aa = /* @__PURE__ */ __name((r, e, t) => (Wu(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "aa");
var sa = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "sa");
var la = /* @__PURE__ */ __name((r, e, t, i) => (Wu(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "la");
var Vu = oa((Gs, Uu) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(y, S) {
      if (isNaN(y = parseInt(y, 10)))
        throw x.InvalidParameter;
      return y * S;
    }
    __name(i, "i");
    u(i, "assign");
    function l(y, S) {
      if (S === 0)
        throw x.DivisionByZero;
      var O = Object.create(x.prototype);
      O.s = y < 0 ? -1 : 1, y = y < 0 ? -y : y;
      var M = h(y, S);
      return O.n = y / M, O.d = S / M, O;
    }
    __name(l, "l");
    u(l, "newFraction");
    function c(y) {
      for (var S = {}, O = y, M = 2, k = 4; k <= O; ) {
        for (; O % M === 0; )
          O /= M, S[M] = (S[M] || 0) + 1;
        k += 1 + 2 * M++;
      }
      return O !== y ? O > 1 && (S[O] = (S[O] || 0) + 1) : S[y] = (S[y] || 0) + 1, S;
    }
    __name(c, "c");
    u(c, "factorize");
    var f = u(function(y, S) {
      var O = 0, M = 1, k = 1, $ = 0, L = 0, q = 0, P = 1, Z = 1, _ = 0, j = 1, V = 1, K = 1, ie = 1e7, ne;
      if (y != null)
        if (S !== void 0) {
          if (O = y, M = S, k = O * M, O % 1 !== 0 || M % 1 !== 0)
            throw x.NonIntegerParameter;
        } else
          switch (typeof y) {
            case "object": {
              if ("d" in y && "n" in y)
                O = y.n, M = y.d, "s" in y && (O *= y.s);
              else if (0 in y)
                O = y[0], 1 in y && (M = y[1]);
              else
                throw x.InvalidParameter;
              k = O * M;
              break;
            }
            case "number": {
              if (y < 0 && (k = y, y = -y), y % 1 === 0)
                O = y;
              else if (y > 0) {
                for (y >= 1 && (Z = Math.pow(10, Math.floor(1 + Math.log(y) / Math.LN10)), y /= Z); j <= ie && K <= ie; )
                  if (ne = (_ + V) / (j + K), y === ne) {
                    j + K <= ie ? (O = _ + V, M = j + K) : K > j ? (O = V, M = K) : (O = _, M = j);
                    break;
                  } else
                    y > ne ? (_ += V, j += K) : (V += _, K += j), j > ie ? (O = V, M = K) : (O = _, M = j);
                O *= Z;
              } else
                (isNaN(y) || isNaN(S)) && (M = O = NaN);
              break;
            }
            case "string": {
              if (j = y.match(/\d+|./g), j === null)
                throw x.InvalidParameter;
              if (j[_] === "-" ? (k = -1, _++) : j[_] === "+" && _++, j.length === _ + 1 ? L = i(j[_++], k) : j[_ + 1] === "." || j[_] === "." ? (j[_] !== "." && ($ = i(j[_++], k)), _++, (_ + 1 === j.length || j[_ + 1] === "(" && j[_ + 3] === ")" || j[_ + 1] === "'" && j[_ + 3] === "'") && (L = i(j[_], k), P = Math.pow(10, j[_].length), _++), (j[_] === "(" && j[_ + 2] === ")" || j[_] === "'" && j[_ + 2] === "'") && (q = i(j[_ + 1], k), Z = Math.pow(10, j[_ + 1].length) - 1, _ += 3)) : j[_ + 1] === "/" || j[_ + 1] === ":" ? (L = i(j[_], k), P = i(j[_ + 2], 1), _ += 3) : j[_ + 3] === "/" && j[_ + 1] === " " && ($ = i(j[_], k), L = i(j[_ + 2], k), P = i(j[_ + 4], 1), _ += 5), j.length <= _) {
                M = P * Z, k = O = q + M * $ + Z * L;
                break;
              }
            }
            default:
              throw x.InvalidParameter;
          }
      if (M === 0)
        throw x.DivisionByZero;
      t.s = k < 0 ? -1 : 1, t.n = Math.abs(O), t.d = Math.abs(M);
    }, "parse");
    function b(y, S, O) {
      for (var M = 1; S > 0; y = y * y % O, S >>= 1)
        S & 1 && (M = M * y % O);
      return M;
    }
    __name(b, "b");
    u(b, "modpow");
    function v(y, S) {
      for (; S % 2 === 0; S /= 2)
        ;
      for (; S % 5 === 0; S /= 5)
        ;
      if (S === 1)
        return 0;
      for (var O = 10 % S, M = 1; O !== 1; M++)
        if (O = O * 10 % S, M > e)
          return 0;
      return M;
    }
    __name(v, "v");
    u(v, "cycleLen");
    function d(y, S, O) {
      for (var M = 1, k = b(10, O, S), $ = 0; $ < 300; $++) {
        if (M === k)
          return $;
        M = M * 10 % S, k = k * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    u(d, "cycleStart");
    function h(y, S) {
      if (!y)
        return S;
      if (!S)
        return y;
      for (; ; ) {
        if (y %= S, !y)
          return S;
        if (S %= y, !S)
          return y;
      }
    }
    __name(h, "h");
    u(h, "gcd");
    function x(y, S) {
      if (f(y, S), this instanceof x)
        y = h(t.d, t.n), this.s = t.s, this.n = t.n / y, this.d = t.d / y;
      else
        return l(t.s * t.n, t.d);
    }
    __name(x, "x");
    u(x, "Fraction"), x.DivisionByZero = new Error("Division by Zero"), x.InvalidParameter = new Error("Invalid argument"), x.NonIntegerParameter = new Error("Parameters must be integer"), x.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return l(this.n, this.d);
    }, neg: function() {
      return l(-this.s * this.n, this.d);
    }, add: function(y, S) {
      return f(y, S), l(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(y, S) {
      return f(y, S), l(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(y, S) {
      return f(y, S), l(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(y, S) {
      return f(y, S), l(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return l(this.s * this.n, this.d);
    }, mod: function(y, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new x(NaN);
      if (y === void 0)
        return l(this.s * this.n % this.d, 1);
      if (f(y, S), t.n === 0 && this.d === 0)
        throw x.DivisionByZero;
      return l(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d);
    }, gcd: function(y, S) {
      return f(y, S), l(h(t.n, this.n) * h(t.d, this.d), t.d * this.d);
    }, lcm: function(y, S) {
      return f(y, S), t.n === 0 && this.n === 0 ? l(0, 1) : l(t.n * this.n, h(t.n, this.n) * h(t.d, this.d));
    }, ceil: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new x(NaN) : l(Math.ceil(y * this.s * this.n / this.d), y);
    }, floor: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new x(NaN) : l(Math.floor(y * this.s * this.n / this.d), y);
    }, round: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new x(NaN) : l(Math.round(y * this.s * this.n / this.d), y);
    }, inverse: function() {
      return l(this.s * this.d, this.n);
    }, pow: function(y, S) {
      if (f(y, S), t.d === 1)
        return t.s < 0 ? l(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : l(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var O = c(this.n), M = c(this.d), k = 1, $ = 1;
      for (var L in O)
        if (L !== "1") {
          if (L === "0") {
            k = 0;
            break;
          }
          if (O[L] *= t.n, O[L] % t.d === 0)
            O[L] /= t.d;
          else
            return null;
          k *= Math.pow(L, O[L]);
        }
      for (var L in M)
        if (L !== "1") {
          if (M[L] *= t.n, M[L] % t.d === 0)
            M[L] /= t.d;
          else
            return null;
          $ *= Math.pow(L, M[L]);
        }
      return t.s < 0 ? l($, k) : l(k, $);
    }, equals: function(y, S) {
      return f(y, S), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(y, S) {
      f(y, S);
      var O = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < O) - (O < 0);
    }, simplify: function(y) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      y = y || 1e-3;
      for (var S = this.abs(), O = S.toContinued(), M = 1; M < O.length; M++) {
        for (var k = l(O[M - 1], 1), $ = M - 2; $ >= 0; $--)
          k = k.inverse().add(O[$]);
        if (k.sub(S).abs().valueOf() < y)
          return k.mul(this.s);
      }
      return this;
    }, divisible: function(y, S) {
      return f(y, S), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(y) {
      var S, O = "", M = this.n, k = this.d;
      return this.s < 0 && (O += "-"), k === 1 ? O += M : (y && (S = Math.floor(M / k)) > 0 && (O += S, O += " ", M %= k), O += M, O += "/", O += k), O;
    }, toLatex: function(y) {
      var S, O = "", M = this.n, k = this.d;
      return this.s < 0 && (O += "-"), k === 1 ? O += M : (y && (S = Math.floor(M / k)) > 0 && (O += S, M %= k), O += "\\frac{", O += M, O += "}{", O += k, O += "}"), O;
    }, toContinued: function() {
      var y, S = this.n, O = this.d, M = [];
      if (isNaN(S) || isNaN(O))
        return M;
      do
        M.push(Math.floor(S / O)), y = S % O, S = O, O = y;
      while (S !== 1);
      return M;
    }, toString: function(y) {
      var S = this.n, O = this.d;
      if (isNaN(S) || isNaN(O))
        return "NaN";
      y = y || 15;
      var M = v(S, O), k = d(S, O, M), $ = this.s < 0 ? "-" : "";
      if ($ += S / O | 0, S %= O, S *= 10, S && ($ += "."), M) {
        for (var L = k; L--; )
          $ += S / O | 0, S %= O, S *= 10;
        $ += "(";
        for (var L = M; L--; )
          $ += S / O | 0, S %= O, S *= 10;
        $ += ")";
      } else
        for (var L = y; S && L--; )
          $ += S / O | 0, S %= O, S *= 10;
      return $;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return x;
    }) : typeof Gs == "object" ? (Object.defineProperty(x, "__esModule", { value: true }), x.default = x, x.Fraction = x, Uu.exports = x) : r.Fraction = x;
  })(Gs);
});
var Ga = oa((Fc, vl) => {
  (function(r) {
    typeof Fc == "object" && typeof vl != "undefined" ? vl.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
  })(function() {
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0, r.default = function(n) {
      return !(!n || !n.Window) && n instanceof n.Window;
    };
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.getWindow = function(n) {
      return (0, r.default)(n) ? n : (n.ownerDocument || n).defaultView || i.window;
    }, e.init = l, e.window = e.realWindow = void 0;
    var t = void 0;
    e.realWindow = t;
    var i = void 0;
    function l(n) {
      e.realWindow = t = n;
      var o = n.document.createTextNode("");
      o.ownerDocument !== n.document && typeof n.wrap == "function" && n.wrap(o) === o && (n = n.wrap(n)), e.window = i = n;
    }
    __name(l, "l");
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c = {};
    function f(n) {
      return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, f(n);
    }
    __name(f, "f");
    u(f, "a"), Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
    var b = u(function(n) {
      return !!n && f(n) === "object";
    }, "s"), v = u(function(n) {
      return typeof n == "function";
    }, "l"), d = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return b(n) && n.nodeType === 11;
    }, object: b, func: v, number: function(n) {
      return typeof n == "number";
    }, bool: function(n) {
      return typeof n == "boolean";
    }, string: function(n) {
      return typeof n == "string";
    }, element: function(n) {
      if (!n || f(n) !== "object")
        return false;
      var o = e.getWindow(n) || e.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : f(Element)) ? n instanceof Element || n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return b(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return b(n) && n.length !== void 0 && v(n.splice);
    } };
    c.default = d;
    var h = {};
    function x(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(x, "x");
    u(x, "f");
    function y(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p = s === "x" ? "y" : "x";
          o.page[p] = a.coords.start.page[p], o.client[p] = a.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    __name(y, "y");
    u(y, "d"), Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
    var S = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", s.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": x, "interactions:action-resume": x, "interactions:action-move": y, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: x, move: y, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, O = S;
    h.default = O;
    var M = {};
    Object.defineProperty(M, "__esModule", { value: true }), M.default = void 0;
    var k = { init: function(n) {
      var o = n;
      k.document = o.document, k.DocumentFragment = o.DocumentFragment || $, k.SVGElement = o.SVGElement || $, k.SVGSVGElement = o.SVGSVGElement || $, k.SVGElementInstance = o.SVGElementInstance || $, k.Element = o.Element || $, k.HTMLElement = o.HTMLElement || k.Element, k.Event = o.Event, k.Touch = o.Touch || $, k.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function $() {
    }
    __name($, "$");
    u($, "y");
    var L = k;
    M.default = L;
    var q = {};
    Object.defineProperty(q, "__esModule", { value: true }), q.default = void 0;
    var P = { init: function(n) {
      var o = M.default.Element, a = n.navigator || {};
      P.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && M.default.document instanceof n.DocumentTouch, P.supportsPointerEvent = a.pointerEnabled !== false && !!M.default.PointerEvent, P.isIOS = /iP(hone|od|ad)/.test(a.platform), P.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), P.isIe9 = /MSIE 9/.test(a.userAgent), P.isOperaMobile = a.appName === "Opera" && P.supportsTouch && /Presto/.test(a.userAgent), P.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", P.pEventTypes = P.supportsPointerEvent ? M.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, P.wheelEvent = M.default.document && "onmousewheel" in M.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Z = P;
    q.default = Z;
    var _ = {};
    function j(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(j, "j");
    u(j, "P");
    function V(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[q.default.prefixedMatchesSelector](o);
    }
    __name(V, "V");
    u(V, "O"), Object.defineProperty(_, "__esModule", { value: true }), _.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return n;
        n = j(n);
      }
      return null;
    }, _.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, _.getElementClientRect = pe, _.getElementRect = function(n) {
      var o = pe(n);
      if (!q.default.isIOS7 && o) {
        var a = ne(e.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, _.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = j(n);
      return o;
    }, _.getScrollXY = ne, _.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], m = n[o];
        if (p && s !== o)
          if (m) {
            var E = K(p), g = K(m);
            if (E !== p.ownerDocument)
              if (g !== p.ownerDocument)
                if (E !== g) {
                  a = a.length ? a : ie(m);
                  var w = void 0;
                  if (m instanceof M.default.HTMLElement && p instanceof M.default.SVGElement && !(p instanceof M.default.SVGSVGElement)) {
                    if (p === g)
                      continue;
                    w = p.ownerSVGElement;
                  } else
                    w = p;
                  for (var C = ie(w, m.ownerDocument), T = 0; C[T] && C[T] === a[T]; )
                    T++;
                  var I = [C[T - 1], C[T], a[T]];
                  if (I[0])
                    for (var N = I[0].lastChild; N; ) {
                      if (N === I[1]) {
                        o = s, a = C;
                        break;
                      }
                      if (N === I[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  G = p, D = m, (parseInt(e.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(e.getWindow(D).getComputedStyle(D).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var G, D;
      return o;
    }, _.matchesSelector = V, _.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return true;
        if ((n = j(n)) === a)
          return V(n, o);
      }
      return false;
    }, _.nodeContains = function(n, o) {
      if (n.contains)
        return n.contains(o);
      for (; o; ) {
        if (o === n)
          return true;
        o = o.parentNode;
      }
      return false;
    }, _.parentNode = j, _.trySelector = function(n) {
      return !!c.default.string(n) && (M.default.document.querySelector(n), true);
    };
    var K = u(function(n) {
      return n.parentNode || n.host;
    }, "E");
    function ie(n, o) {
      for (var a, s = [], p = n; (a = K(p)) && p !== o && a !== p.ownerDocument; )
        s.unshift(p), p = a;
      return s;
    }
    __name(ie, "ie");
    u(ie, "S");
    function ne(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(ne, "ne");
    u(ne, "T");
    function pe(n) {
      var o = n instanceof M.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(pe, "pe");
    u(pe, "j");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ue = {};
    function ke(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ke, "ke");
    u(ke, "I");
    function We(n, o, a) {
      return n === "parent" ? (0, _.parentNode)(a) : n === "self" ? o.getRect(a) : (0, _.closest)(a, n);
    }
    __name(We, "We");
    u(We, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ue.getStringOptionResult = We, ue.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ue.resolveRectLike = function(n, o, a, s) {
      var p, m = n;
      return c.default.string(m) ? m = We(m, o, a) : c.default.func(m) && (m = m.apply(void 0, function(E) {
        if (Array.isArray(E))
          return ke(E);
      }(p = s) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(p) || function(E, g) {
        if (E) {
          if (typeof E == "string")
            return ke(E, g);
          var w = Object.prototype.toString.call(E).slice(8, -1);
          return w === "Object" && E.constructor && (w = E.constructor.name), w === "Map" || w === "Set" ? Array.from(E) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? ke(E, g) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(m) && (m = (0, _.getElementRect)(m)), m;
    }, ue.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, W.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ue.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, W.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    };
    var Ge = {};
    Object.defineProperty(Ge, "__esModule", { value: true }), Ge.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, m = (0, ue.resolveRectLike)(p, n, o, [n && o]);
      return (0, ue.rectToXY)(m) || { x: 0, y: 0 };
    };
    var fe = {};
    function Xe(n) {
      return n.trim().split(/ +/);
    }
    __name(Xe, "Xe");
    u(Xe, "C"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Xe(o)), c.default.array(o))
        return o.reduce(function(w, C) {
          return (0, W.default)(w, n(C, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var p = 0; p < a.length; p++) {
          var m;
          m = a[p], n(o, m, s);
        }
      else if (c.default.object(a))
        for (var E in a) {
          var g = Xe(E).map(function(w) {
            return "".concat(o).concat(w);
          });
          n(g, a[E], s);
        }
      return s;
    }, "n"), "t");
    var Qe = {};
    Object.defineProperty(Qe, "__esModule", { value: true }), Qe.default = void 0, Qe.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var Ft = {};
    Object.defineProperty(Ft, "__esModule", { value: true }), Ft.default = function(n, o) {
      n.__set || (n.__set = {});
      var a = u(function(p) {
        typeof n[p] != "function" && p !== "__set" && Object.defineProperty(n, p, { get: function() {
          return p in n.__set ? n.__set[p] : n.__set[p] = o[p];
        }, set: function(m) {
          n.__set[p] = m;
        }, configurable: true });
      }, "n");
      for (var s in o)
        a(s);
      return n;
    };
    var J = {};
    function cr(n) {
      return n instanceof M.default.Event || n instanceof M.default.Touch;
    }
    __name(cr, "cr");
    u(cr, "B");
    function Tt(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Tt, "Tt");
    u(Tt, "Y");
    function kt(n, o) {
      return o = o || { x: 0, y: 0 }, q.default.isOperaMobile && cr(n) ? (Tt("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Tt("page", n, o), o;
    }
    __name(kt, "kt");
    u(kt, "W");
    function qt(n, o) {
      return o = o || {}, q.default.isOperaMobile && cr(n) ? Tt("screen", n, o) : Tt("client", n, o), o;
    }
    __name(qt, "qt");
    u(qt, "L");
    function pr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(pr, "pr");
    u(pr, "U");
    function Wt(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var m in o)
        o[m] /= n.length;
      return o;
    }
    __name(Wt, "Wt");
    u(Wt, "V"), Object.defineProperty(J, "__esModule", { value: true }), J.coordsToEvent = function(n) {
      return { coords: n, get page() {
        return this.coords.page;
      }, get client() {
        return this.coords.client;
      }, get timeStamp() {
        return this.coords.timeStamp;
      }, get pageX() {
        return this.coords.page.x;
      }, get pageY() {
        return this.coords.page.y;
      }, get clientX() {
        return this.coords.client.x;
      }, get clientY() {
        return this.coords.client.y;
      }, get pointerId() {
        return this.coords.pointerId;
      }, get target() {
        return this.coords.target;
      }, get type() {
        return this.coords.type;
      }, get pointerType() {
        return this.coords.pointerType;
      }, get buttons() {
        return this.coords.buttons;
      }, preventDefault: function() {
      } };
    }, J.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, J.getClientXY = qt, J.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [_.getActualElement(o ? o[0] : n.target), _.getActualElement(n.currentTarget)];
    }, J.getPageXY = kt, J.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, J.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof M.default.Touch ? "touch" : "mouse";
    }, J.getTouchPair = pr, J.getXY = Tt, J.isNativePointer = cr, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.pointerAverage = Wt, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return Ft.default;
    } }), J.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, J.setCoords = function(n, o, a) {
      var s = o.length > 1 ? Wt(o) : o[0];
      kt(s, n.page), qt(s, n.client), n.timeStamp = a;
    }, J.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, J.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = pr(n), m = p[1][a] - p[0][a], E = p[1][s] - p[0][s];
      return 180 * Math.atan2(E, m) / Math.PI;
    }, J.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = pr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), m = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: m, width: p - a, height: m - s };
    }, J.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = pr(n), m = p[0][a] - p[1][a], E = p[0][s] - p[1][s];
      return (0, Qe.default)(m, E);
    };
    var Gt = {};
    function br(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(br, "br");
    u(br, "q");
    function Mr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Mr, "Mr");
    u(Mr, "G"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.BaseEvent = void 0;
    var sn = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Mr(this, "immediatePropagationStopped", false), Mr(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && br(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Gt.BaseEvent = sn, Object.defineProperty(sn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var ye = {};
    Object.defineProperty(ye, "__esModule", { value: true }), ye.remove = ye.merge = ye.from = ye.findIndex = ye.find = ye.contains = void 0, ye.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, ye.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var ln = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "K");
    ye.merge = ln, ye.from = function(n) {
      return ln([], n);
    };
    var un = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Z");
    ye.findIndex = un, ye.find = function(n, o) {
      return n[un(n, o)];
    };
    var Ot = {};
    function Pr(n) {
      return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Pr(n);
    }
    __name(Pr, "Pr");
    u(Pr, "Q");
    function Fn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Fn, "Fn");
    u(Fn, "tt");
    function Fr(n, o) {
      return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Fr(n, o);
    }
    __name(Fr, "Fr");
    u(Fr, "et");
    function dr(n, o) {
      if (o && (Pr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return yt(n);
    }
    __name(dr, "dr");
    u(dr, "nt");
    function yt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(yt, "yt");
    u(yt, "rt");
    function yr(n) {
      return yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, yr(n);
    }
    __name(yr, "yr");
    u(yr, "ot");
    function Dt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Dt, "Dt");
    u(Dt, "it"), Object.defineProperty(Ot, "__esModule", { value: true }), Ot.DropEvent = void 0;
    var cn = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), w && Fr(g, w);
      })(E, n);
      var o, a, s, p, m = (s = E, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (g) {
          return false;
        }
      }(), function() {
        var g, w = yr(s);
        if (p) {
          var C = yr(this).constructor;
          g = Reflect.construct(w, arguments, C);
        } else
          g = w.apply(this, arguments);
        return dr(this, g);
      });
      function E(g, w, C) {
        var T;
        (function(D, B) {
          if (!(D instanceof B))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Dt(yt(T = m.call(this, w._interaction)), "dropzone", void 0), Dt(yt(T), "dragEvent", void 0), Dt(yt(T), "relatedTarget", void 0), Dt(yt(T), "draggable", void 0), Dt(yt(T), "propagationStopped", false), Dt(yt(T), "immediatePropagationStopped", false);
        var I = C === "dragleave" ? g.prev : g.cur, N = I.element, G = I.dropzone;
        return T.type = C, T.target = N, T.currentTarget = N, T.dropzone = G, T.dragEvent = w, T.relatedTarget = w.target, T.draggable = w.interactable, T.timeStamp = w.timeStamp, T;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "reject", value: function() {
        var g = this, w = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && w.cur.dropzone === this.dropzone && w.cur.element === this.target)
          if (w.prev.dropzone = this.dropzone, w.prev.element = this.target, w.rejected = true, w.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var C = w.activeDrops, T = ye.findIndex(C, function(N) {
              var G = N.dropzone, D = N.element;
              return G === g.dropzone && D === g.target;
            });
            w.activeDrops.splice(T, 1);
            var I = new E(w, this.dragEvent, "dropdeactivate");
            I.dropzone = this.dropzone, I.target = this.target, this.dropzone.fire(I);
          } else
            this.dropzone.fire(new E(w, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Fn(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Gt.BaseEvent);
    Ot.DropEvent = cn;
    var Ir = {};
    function pn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, m = s.element;
        o.dropzone = p, o.target = m, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(pn, "pn");
    u(pn, "lt");
    function qr(n, o) {
      for (var a = function(m, E) {
        for (var g = m.interactables, w = [], C = 0; C < g.list.length; C++) {
          var T = g.list[C];
          if (T.options.drop.enabled) {
            var I = T.options.drop.accept;
            if (!(c.default.element(I) && I !== E || c.default.string(I) && !_.matchesSelector(E, I) || c.default.func(I) && !I({ dropzone: T, draggableElement: E })))
              for (var N = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], G = 0; G < N.length; G++) {
                var D = N[G];
                D !== E && w.push({ dropzone: T, element: D, rect: T.getRect(D) });
              }
          }
        }
        return w;
      }(n, o), s = 0; s < a.length; s++) {
        var p = a[s];
        p.rect = p.dropzone.getRect(p.element);
      }
      return a;
    }
    __name(qr, "qr");
    u(qr, "ut");
    function dn(n, o, a) {
      for (var s = n.dropState, p = n.interactable, m = n.element, E = [], g = 0; g < s.activeDrops.length; g++) {
        var w = s.activeDrops[g], C = w.dropzone, T = w.element, I = w.rect;
        E.push(C.dropCheck(o, a, p, m, T, I) ? T : null);
      }
      var N = _.indexOfDeepestElement(E);
      return s.activeDrops[N] || null;
    }
    __name(dn, "dn");
    u(dn, "ct");
    function yi(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new Ot.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new Ot.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new Ot.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new Ot.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new Ot.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new Ot.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(yi, "yi");
    u(yi, "ft");
    function wi(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, m = a.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && pn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(wi, "wi");
    u(wi, "dt");
    function Mo(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var m = a.dropState;
        o.dynamicDrop && (m.activeDrops = qr(o, a.element));
        var E = s, g = dn(a, E, p);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = yi(a, 0, E);
      }
    }
    __name(Mo, "Mo");
    u(Mo, "pt"), Object.defineProperty(Ir, "__esModule", { value: true }), Ir.default = void 0;
    var Po = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(h.default), s.prototype.dropzone = function(m) {
        return function(E, g) {
          if (c.default.object(g)) {
            if (E.options.drop.enabled = g.enabled !== false, g.listeners) {
              var w = (0, fe.default)(g.listeners), C = Object.keys(w).reduce(function(T, I) {
                return T[/^(enter|leave)/.test(I) ? "drag".concat(I) : /^(activate|deactivate|move)/.test(I) ? "drop".concat(I) : I] = w[I], T;
              }, {});
              E.off(E.options.drop.listeners), E.on(C), E.options.drop.listeners = C;
            }
            return c.default.func(g.ondrop) && E.on("drop", g.ondrop), c.default.func(g.ondropactivate) && E.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && E.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && E.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && E.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && E.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? E.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (E.options.drop.accept = g.accept), "checker" in g && (E.options.drop.checker = g.checker), E;
          }
          return c.default.bool(g) ? (E.options.drop.enabled = g, E) : E.options.drop;
        }(this, m);
      }, s.prototype.dropCheck = function(m, E, g, w, C, T) {
        return function(I, N, G, D, B, X, H) {
          var re = false;
          if (!(H = H || I.getRect(X)))
            return !!I.options.drop.checker && I.options.drop.checker(N, G, re, I, X, D, B);
          var oe = I.options.drop.overlap;
          if (oe === "pointer") {
            var de = (0, Ge.default)(D, B, "drag"), Se = J.getPageXY(N);
            Se.x += de.x, Se.y += de.y;
            var Le = Se.x > H.left && Se.x < H.right, me = Se.y > H.top && Se.y < H.bottom;
            re = Le && me;
          }
          var Re = D.getRect(B);
          if (Re && oe === "center") {
            var Yt = Re.left + Re.width / 2, Dr = Re.top + Re.height / 2;
            re = Yt >= H.left && Yt <= H.right && Dr >= H.top && Dr <= H.bottom;
          }
          return Re && c.default.number(oe) && (re = Math.max(0, Math.min(H.right, Re.right) - Math.max(H.left, Re.left)) * Math.max(0, Math.min(H.bottom, Re.bottom) - Math.max(H.top, Re.top)) / (Re.width * Re.height) >= oe), I.options.drop.checker && (re = I.options.drop.checker(N, G, re, I, X, D, B)), re;
        }(this, m, E, g, w, C, T);
      }, a.dynamicDrop = function(m) {
        return c.default.bool(m) ? (n.dynamicDrop = m, a) : n.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = Po.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = qr(o, a.element), p.events = yi(a, 0, s), p.events.activate && (pn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Mo, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (wi(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Mo(n, o), wi(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: qr, getDrop: dn, getDropEvents: yi, fireDropEvents: wi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, is = Po;
    Ir.default = is;
    var z = {};
    function te(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(C) {
          return C.pointer;
        }), m = s === "start", E = s === "end", g = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], m)
          a.distance = J.touchDistance(p, g), a.box = J.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = J.touchAngle(p, g), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (E) {
          var w = o.prevEvent;
          a.distance = w.distance, a.box = w.box, a.scale = w.scale, a.ds = 0, a.angle = w.angle, a.da = 0;
        } else
          a.distance = J.touchDistance(p, g), a.box = J.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = J.touchAngle(p, g), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(te, "te");
    u(te, "yt"), Object.defineProperty(z, "__esModule", { value: true }), z.default = void 0;
    var ae = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(p) {
        return c.default.object(p) ? (this.options.gesture.enabled = p.enabled !== false, this.setPerAction("gesture", p), this.setOnEvents("gesture", p), this) : c.default.bool(p) ? (this.options.gesture.enabled = p, this) : this.options.gesture;
      }, o.map.gesture = ae, o.methodDict.gesture = "gesturable", s.actions.gesture = ae.defaults;
    }, listeners: { "interactions:action-start": te, "interactions:action-move": te, "interactions:action-end": te, "interactions:new": function(n) {
      n.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(n) {
      if (!(n.interaction.pointers.length < 2)) {
        var o = n.interactable.options.gesture;
        if (o && o.enabled)
          return n.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, Ee = ae;
    z.default = Ee;
    var he = {};
    function dt(n, o, a, s, p, m, E) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(m.width) ? m.width : m.right - m.left, w = c.default.number(m.height) ? m.height : m.bottom - m.top;
        if (E = Math.min(E, Math.abs((n === "left" || n === "right" ? g : w) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), w < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left") {
          var C = g >= 0 ? m.left : m.right;
          return a.x < C + E;
        }
        if (n === "top") {
          var T = w >= 0 ? m.top : m.bottom;
          return a.y < T + E;
        }
        if (n === "right")
          return a.x > (g >= 0 ? m.right : m.left) - E;
        if (n === "bottom")
          return a.y > (w >= 0 ? m.bottom : m.top) - E;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : _.matchesUpTo(s, o, p));
    }
    __name(dt, "dt");
    u(dt, "wt");
    function Mt(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Mt, "Mt");
    u(Mt, "_t"), Object.defineProperty(he, "__esModule", { value: true }), he.default = void 0;
    var wt = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      wt.cursors = function(m) {
        return m.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), wt.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(m) {
        return function(E, g, w) {
          return c.default.object(g) ? (E.options.resize.enabled = g.enabled !== false, E.setPerAction("resize", g), E.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? E.options.resize.axis = g.axis : g.axis === null && (E.options.resize.axis = w.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (E.options.resize.square = g.square), E) : c.default.bool(g) ? (E.options.resize.enabled = g, E) : E.options.resize;
        }(this, m, n);
      }, o.map.resize = wt, o.methodDict.resize = "resizable", p.actions.resize = wt.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, m = s.rect;
          s._rects = { start: (0, W.default)({}, m), corrected: (0, W.default)({}, m), previous: (0, W.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), Mt(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, m = s.interactable.options.resize.invert, E = m === "reposition" || m === "negate", g = s.rect, w = s._rects, C = w.start, T = w.corrected, I = w.delta, N = w.previous;
          if ((0, W.default)(N, T), E) {
            if ((0, W.default)(T, g), m === "reposition") {
              if (T.top > T.bottom) {
                var G = T.top;
                T.top = T.bottom, T.bottom = G;
              }
              if (T.left > T.right) {
                var D = T.left;
                T.left = T.right, T.right = D;
              }
            }
          } else
            T.top = Math.min(g.top, C.bottom), T.bottom = Math.max(g.bottom, C.top), T.left = Math.min(g.left, C.right), T.right = Math.max(g.right, C.left);
          for (var B in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            I[B] = T[B] - N[B];
          p.edges = s.prepared.edges, p.rect = T, p.deltaRect = I;
        }
      })(n), Mt(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, m = n.buttons;
      if (p) {
        var E = (0, W.default)({}, o.coords.cur.page), g = a.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (m & g.mouseButtons) != 0)) {
          if (c.default.object(g.edges)) {
            var w = { left: false, right: false, top: false, bottom: false };
            for (var C in w)
              w[C] = dt(C, g.edges[C], E, o._latestPointer.eventTarget, s, p, g.margin || wt.defaultMargin);
            w.left = w.left && !w.right, w.top = w.top && !w.bottom, (w.left || w.right || w.top || w.bottom) && (n.action = { name: "resize", edges: w });
          } else {
            var T = g.axis !== "y" && E.x > p.right - wt.defaultMargin, I = g.axis !== "x" && E.y > p.bottom - wt.defaultMargin;
            (T || I) && (n.action = { name: "resize", axes: (T ? "x" : "") + (I ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = wt.cursors, m = null;
      if (a)
        m = p[s + a];
      else if (o) {
        for (var E = "", g = ["top", "bottom", "left", "right"], w = 0; w < g.length; w++) {
          var C = g[w];
          o[C] && (E += C);
        }
        m = p[E];
      }
      return m;
    }, defaultMargin: null }, Io = wt;
    he.default = Io;
    var Ut = {};
    Object.defineProperty(Ut, "__esModule", { value: true }), Ut.default = void 0;
    var xi = { id: "actions", install: function(n) {
      n.usePlugin(z.default), n.usePlugin(he.default), n.usePlugin(h.default), n.usePlugin(Ir.default);
    } };
    Ut.default = xi;
    var xt = {};
    Object.defineProperty(xt, "__esModule", { value: true }), xt.default = void 0;
    var Et, Ar, qn = 0, Wn = { request: function(n) {
      return Et(n);
    }, cancel: function(n) {
      return Ar(n);
    }, init: function(n) {
      if (Et = n.requestAnimationFrame, Ar = n.cancelAnimationFrame, !Et)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Et = n["".concat(s, "RequestAnimationFrame")], Ar = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Et = Et && Et.bind(n), Ar = Ar && Ar.bind(n), Et || (Et = u(function(p) {
        var m = Date.now(), E = Math.max(0, 16 - (m - qn)), g = n.setTimeout(function() {
          p(m + E);
        }, E);
        return qn = m + E, g;
      }, "jt"), Ar = u(function(p) {
        return clearTimeout(p);
      }, "Mt"));
    } };
    xt.default = Wn;
    var Wr = {};
    Object.defineProperty(Wr, "__esModule", { value: true }), Wr.default = void 0, Wr.getContainer = Ao, Wr.getScroll = Ei, Wr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Wr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var m = Ao(p.container, a.interactable, s), E = Ei(m);
      o();
      var g = Ei(m);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, xt.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = xt.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), xt.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, m = Ao(p.container, o, a), E = le.now(), g = (E - le.prevTime) / 1e3, w = p.speed * g;
      if (w >= 1) {
        var C = { x: le.x * w, y: le.y * w };
        if (C.x || C.y) {
          var T = Ei(m);
          c.default.window(m) ? m.scrollBy(C.x, C.y) : m && (m.scrollLeft += C.x, m.scrollTop += C.y);
          var I = Ei(m), N = { x: I.x - T.x, y: I.y - T.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: m });
        }
        le.prevTime = E;
      }
      le.isScrolling && (xt.default.cancel(le.i), le.i = xt.default.request(le.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && le.check(o.interactable, o.prepared.name))
        if (o.simulation)
          le.x = le.y = 0;
        else {
          var s, p, m, E, g = o.interactable, w = o.element, C = o.prepared.name, T = g.options[C].autoScroll, I = Ao(T.container, g, w);
          if (c.default.window(I))
            E = a.clientX < le.margin, s = a.clientY < le.margin, p = a.clientX > I.innerWidth - le.margin, m = a.clientY > I.innerHeight - le.margin;
          else {
            var N = _.getElementClientRect(I);
            E = a.clientX < N.left + le.margin, s = a.clientY < N.top + le.margin, p = a.clientX > N.right - le.margin, m = a.clientY > N.bottom - le.margin;
          }
          le.x = p ? 1 : E ? -1 : 0, le.y = m ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = T.margin, le.speed = T.speed, le.start(o));
        }
    } };
    function Ao(n, o, a) {
      return (c.default.string(n) ? (0, ue.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(Ao, "Ao");
    u(Ao, "zt");
    function Ei(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Ei, "Ei");
    u(Ei, "Ct");
    var bd = { id: "auto-scroll", install: function(n) {
      var o = n.defaults, a = n.actions;
      n.autoScroll = le, le.now = function() {
        return n.now();
      }, a.phaselessTypes.autoscroll = true, o.perAction.autoScroll = le.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoScroll = null;
    }, "interactions:destroy": function(n) {
      n.interaction.autoScroll = null, le.stop(), le.interaction && (le.interaction = null);
    }, "interactions:stop": le.stop, "interactions:action-move": function(n) {
      return le.onInteractionMove(n);
    } } }, yd = bd;
    Wr.default = yd;
    var Lt = {};
    Object.defineProperty(Lt, "__esModule", { value: true }), Lt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Lt.sign = void 0, Lt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Lt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var _o = {};
    function wd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(wd, "wd");
    u(wd, "Yt");
    function xd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(xd, "xd");
    u(xd, "Wt"), Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var Ed = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, m) {
        var E = function(g, w, C, T, I) {
          var N = g.getRect(T), G = { action: null, interactable: g, interaction: C, element: T, rect: N, buttons: w.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[w.button] };
          return I.fire("auto-start:check", G), G.action;
        }(this, s, p, m, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, E, this, m, p) : E;
      }, o.prototype.ignoreFrom = (0, Lt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Lt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = xd, o.prototype.styleCursor = wd;
    } };
    _o.default = Ed;
    var Un = {};
    function Zl(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && ko(o, a, n, p) ? n : null;
    }
    __name(Zl, "Zl");
    u(Zl, "Vt");
    function Sd(n, o, a, s, p, m, E) {
      for (var g = 0, w = s.length; g < w; g++) {
        var C = s[g], T = p[g], I = C.getAction(o, a, n, T);
        if (I) {
          var N = Zl(I, C, T, m, E);
          if (N)
            return { action: N, interactable: C, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Sd, "Sd");
    u(Sd, "Nt");
    function Jl(n, o, a, s, p) {
      var m = [], E = [], g = s;
      function w(T) {
        m.push(T), E.push(g);
      }
      __name(w, "w");
      for (u(w, "u"); c.default.element(g); ) {
        m = [], E = [], p.interactables.forEachMatch(g, w);
        var C = Sd(n, o, a, m, E, s, p);
        if (C.action && !C.interactable.options[C.action.name].manualStart)
          return C;
        g = _.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Jl, "Jl");
    u(Jl, "qt");
    function Kl(n, o, a) {
      var s = o.action, p = o.interactable, m = o.element;
      s = s || { name: null }, n.interactable = p, n.element = m, (0, Lt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(m) : null, eu(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Kl, "Kl");
    u(Kl, "Gt");
    function ko(n, o, a, s) {
      var p = n.options, m = p[a.name].max, E = p[a.name].maxPerElement, g = s.autoStart.maxInteractions, w = 0, C = 0, T = 0;
      if (!(m && E && g))
        return false;
      for (var I = 0; I < s.interactions.list.length; I++) {
        var N = s.interactions.list[I], G = N.prepared.name;
        if (N.interacting() && (++w >= g || N.interactable === n && ((C += G === a.name ? 1 : 0) >= m || N.element === o && (T++, G === a.name && T >= E))))
          return false;
      }
      return g > 0;
    }
    __name(ko, "ko");
    u(ko, "$t");
    function Ql(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(Ql, "Ql");
    u(Ql, "Ht");
    function os(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(os, "os");
    u(os, "Kt");
    function eu(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var m = "";
        if (p.name) {
          var E = a.options[p.name].cursorChecker;
          m = c.default.func(E) ? E(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        os(n.element, m || "", o);
      } else
        o.autoStart.cursorElement && os(o.autoStart.cursorElement, "", o);
    }
    __name(eu, "eu");
    u(eu, "Zt"), Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var Cd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(_o.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, W.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return Ql(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ko, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget;
      a.interacting() || Kl(a, Jl(a, s, p, m, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Kl(p, Jl(p, m, E, g, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var m = p.interactable, E = p.prepared.name;
          E && m && (m.options[E].manualStart || !ko(m, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, m, p.element), eu(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && os(a.element, "", o);
    } }, maxInteractions: Ql, withinInteractionLimit: ko, validateAction: Zl }, Td = Cd;
    Un.default = Td;
    var Do = {};
    Object.defineProperty(Do, "__esModule", { value: true }), Do.default = void 0;
    var Od = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, m = n.dy;
      if (a.prepared.name === "drag") {
        var E = Math.abs(p), g = Math.abs(m), w = a.interactable.options.drag, C = w.startAxis, T = E > g ? "x" : E < g ? "y" : "xy";
        if (a.prepared.axis = w.lockAxis === "start" ? T[0] : w.lockAxis, T !== "xy" && C !== "xy" && C !== T) {
          a.prepared.name = null;
          for (var I = s, N = function(D) {
            if (D !== a.interactable) {
              var B = a.interactable.options.drag;
              if (!B.manualStart && D.testIgnoreAllow(B, I, s)) {
                var X = D.getAction(a.downPointer, a.downEvent, a, I);
                if (X && X.name === "drag" && function(H, re) {
                  if (!re)
                    return false;
                  var oe = re.options.drag.startAxis;
                  return H === "xy" || oe === "xy" || oe === H;
                }(T, D) && Un.default.validateAction(X, D, I, s, o))
                  return D;
              }
            }
          }; c.default.element(I); ) {
            var G = o.interactables.forEachMatch(I, N);
            if (G) {
              a.prepared.name = "drag", a.interactable = G, a.element = I;
              break;
            }
            I = (0, _.parentNode)(I);
          }
        }
      }
    } } };
    Do.default = Od;
    var Ro = {};
    function as(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(as, "as");
    u(as, "re"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
    var Md = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Un.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = as(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      as(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: as }, Pd = Md;
    Ro.default = Pd;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Id = { id: "auto-start", install: function(n) {
      n.usePlugin(Un.default), n.usePlugin(Ro.default), n.usePlugin(Do.default);
    } };
    No.default = Id;
    var Vn = {};
    function Ad(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Ad, "Ad");
    u(Ad, "ue");
    function _d(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(_d, "_d");
    u(_d, "ce");
    function tu(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Ad, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, m) {
          var E = s.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(m.type)) {
                var g = (0, e.getWindow)(m.target).document, w = p.getDocOptions(g);
                if (!w || !w.events || w.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(m.type) || c.default.element(m.target) && (0, _.matchesSelector)(m.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || m.preventDefault();
            } else
              m.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, _.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(tu, "tu");
    u(tu, "fe"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0, Vn.install = tu;
    var kd = { id: "core/interactablePreventDefault", install: tu, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = _d, n;
    }, {}) };
    Vn.default = kd;
    var ss = {};
    Object.defineProperty(ss, "__esModule", { value: true }), ss.default = void 0, ss.default = {};
    var Si, ls = {};
    Object.defineProperty(ls, "__esModule", { value: true }), ls.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Si || (Si = {})), Si.touchAction, Si.boxSizing, Si.noListeners;
    var Dd = { id: "dev-tools", install: function() {
    } };
    ls.default = Dd;
    var fn = {};
    Object.defineProperty(fn, "__esModule", { value: true }), fn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = ye.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var hn = {};
    function ru(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], w = true, C = false;
          try {
            for (p = p.call(a); !(w = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); w = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (C)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return nu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? nu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ru, "ru");
    u(ru, "be");
    function nu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(nu, "nu");
    u(nu, "xe");
    function Rd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Rd, "Rd");
    u(Rd, "we");
    function vn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vn, "vn");
    u(vn, "_e"), Object.defineProperty(hn, "__esModule", { value: true }), hn.default = void 0, hn.getRectOffset = iu;
    var Nd = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), vn(this, "states", []), vn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), vn(this, "startDelta", void 0), vn(this, "result", void 0), vn(this, "endResult", void 0), vn(this, "edges", void 0), vn(this, "interaction", void 0), this.interaction = s, this.result = zo();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var m = s.phase, E = this.interaction, g = function(C) {
          var T = C.interactable.options[C.prepared.name], I = T.modifiers;
          return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var G = T[N];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(E);
        this.prepareStates(g), this.edges = (0, W.default)({}, E.edges), this.startOffset = iu(E.rect, p), this.startDelta = { x: 0, y: 0 };
        var w = this.fillArg({ phase: m, pageCoords: p, preEnd: false });
        return this.result = zo(), this.startAll(w), this.result = this.setAll(w);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var m = this.states[p];
          m.methods.start && (s.state = m, m.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, m = s.preEnd, E = s.skipModifiers, g = s.rect;
        s.coords = (0, W.default)({}, s.pageCoords), s.rect = (0, W.default)({}, g);
        for (var w = E ? this.states.slice(E) : this.states, C = zo(s.coords, s.rect), T = 0; T < w.length; T++) {
          var I, N = w[T], G = N.options, D = (0, W.default)({}, s.coords), B = null;
          (I = N.methods) != null && I.set && this.shouldDo(G, m, p) && (s.state = N, B = N.methods.set(s), ue.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - D.x, y: s.coords.y - D.y })), C.eventProps.push(B);
        }
        C.delta.x = s.coords.x - s.pageCoords.x, C.delta.y = s.coords.y - s.pageCoords.y, C.rectDelta.left = s.rect.left - g.left, C.rectDelta.right = s.rect.right - g.right, C.rectDelta.top = s.rect.top - g.top, C.rectDelta.bottom = s.rect.bottom - g.bottom;
        var X = this.result.coords, H = this.result.rect;
        if (X && H) {
          var re = C.rect.left !== H.left || C.rect.right !== H.right || C.rect.top !== H.top || C.rect.bottom !== H.bottom;
          C.changed = re || X.x !== C.coords.x || X.y !== C.coords.y;
        }
        return C;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, m = s.phase, E = p.coords.cur, g = p.coords.start, w = this.result, C = this.startDelta, T = w.delta;
        m === "start" && (0, W.default)(this.startDelta, w.delta);
        for (var I = 0; I < [[g, C], [E, T]].length; I++) {
          var N = ru([[g, C], [E, T]][I], 2), G = N[0], D = N[1];
          G.page.x += D.x, G.page.y += D.y, G.client.x += D.x, G.client.y += D.y;
        }
        var B = this.result.rectDelta, X = s.rect || p.rect;
        X.left += B.left, X.right += B.right, X.top += B.top, X.bottom += B.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, m = s.phase, E = s.preEnd, g = s.skipModifiers, w = this.setAll(this.fillArg({ preEnd: E, phase: m, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = w, !w.changed && (!g || g < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var C = p.coords.cur.page, T = { x: s.modifiedCoords.x - C.x, y: s.modifiedCoords.y - C.y };
          w.coords.x += T.x, w.coords.y += T.y, w.delta.x += T.x, w.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, m = s.event, E = this.states;
        if (E && E.length) {
          for (var g = false, w = 0; w < E.length; w++) {
            var C = E[w];
            s.state = C;
            var T = C.options, I = C.methods, N = I.beforeEnd && I.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            g = g || !g && this.shouldDo(T, true, s.phase, true);
          }
          g && p.move({ event: m, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var m = (0, W.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(m);
          for (var E = 0; E < this.states.length; E++) {
            var g = this.states[E];
            m.state = g, g.methods.stop && g.methods.stop(m);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var m = s[p], E = m.options, g = m.methods, w = m.name;
          this.states.push({ options: E, methods: g, index: p, name: w });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, m = p.coords, E = p.rect, g = p.modification;
        if (g.result) {
          for (var w = g.startDelta, C = g.result, T = C.delta, I = C.rectDelta, N = [[m.start, w], [m.cur, T]], G = 0; G < N.length; G++) {
            var D = ru(N[G], 2), B = D[0], X = D[1];
            B.page.x -= X.x, B.page.y -= X.y, B.client.x -= X.x, B.client.y -= X.y;
          }
          E.left -= I.left, E.right -= I.right, E.top -= I.top, E.bottom -= I.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, m, E) {
        return !(!s || s.enabled === false || E && !s.endOnly || s.endOnly && !p || m === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, fn.default)(p);
        }), this.result = zo((0, W.default)({}, s.result.coords), (0, W.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Rd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function zo(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(zo, "zo");
    u(zo, "Oe");
    function iu(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(iu, "iu");
    u(iu, "Ee"), hn.default = Nd;
    var ft = {};
    function Go(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(Go, "Go");
    u(Go, "Te"), Object.defineProperty(ft, "__esModule", { value: true }), ft.addEventModifiers = Go, ft.default = void 0, ft.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(m) {
        var E = m || {};
        for (var g in E.enabled = E.enabled !== false, a)
          g in E || (E[g] = a[g]);
        var w = { options: E, methods: s, name: o, enable: function() {
          return E.enabled = true, w;
        }, disable: function() {
          return E.enabled = false, w;
        } };
        return w;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    };
    var zd = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new hn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": Go, "interactions:action-move": Go, "interactions:action-end": Go, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } }, Gd = zd;
    ft.default = Gd;
    var Ci = {};
    Object.defineProperty(Ci, "__esModule", { value: true }), Ci.defaults = void 0, Ci.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ti = {};
    function us(n) {
      return us = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, us(n);
    }
    __name(us, "us");
    u(us, "De");
    function Ld(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ld, "Ld");
    u(Ld, "Ae");
    function cs(n, o) {
      return cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, cs(n, o);
    }
    __name(cs, "cs");
    u(cs, "ze");
    function jd(n, o) {
      if (o && (us(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return De(n);
    }
    __name(jd, "jd");
    u(jd, "Ce");
    function De(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(De, "De");
    u(De, "Re");
    function Lo(n) {
      return Lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Lo(n);
    }
    __name(Lo, "Lo");
    u(Lo, "Fe");
    function Be(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Be, "Be");
    u(Be, "Xe"), Object.defineProperty(Ti, "__esModule", { value: true }), Ti.InteractEvent = void 0;
    var ou = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), w && cs(g, w);
      })(E, n);
      var o, a, s, p, m = (s = E, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (g) {
          return false;
        }
      }(), function() {
        var g, w = Lo(s);
        if (p) {
          var C = Lo(this).constructor;
          g = Reflect.construct(w, arguments, C);
        } else
          g = w.apply(this, arguments);
        return jd(this, g);
      });
      function E(g, w, C, T, I, N, G) {
        var D;
        (function(Le, me) {
          if (!(Le instanceof me))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Be(De(D = m.call(this, g)), "relatedTarget", null), Be(De(D), "screenX", void 0), Be(De(D), "screenY", void 0), Be(De(D), "button", void 0), Be(De(D), "buttons", void 0), Be(De(D), "ctrlKey", void 0), Be(De(D), "shiftKey", void 0), Be(De(D), "altKey", void 0), Be(De(D), "metaKey", void 0), Be(De(D), "page", void 0), Be(De(D), "client", void 0), Be(De(D), "delta", void 0), Be(De(D), "rect", void 0), Be(De(D), "x0", void 0), Be(De(D), "y0", void 0), Be(De(D), "t0", void 0), Be(De(D), "dt", void 0), Be(De(D), "duration", void 0), Be(De(D), "clientX0", void 0), Be(De(D), "clientY0", void 0), Be(De(D), "velocity", void 0), Be(De(D), "speed", void 0), Be(De(D), "swipe", void 0), Be(De(D), "axes", void 0), Be(De(D), "preEnd", void 0), I = I || g.element;
        var B = g.interactable, X = (B && B.options || Ci.defaults).deltaSource, H = (0, Ge.default)(B, I, C), re = T === "start", oe = T === "end", de = re ? De(D) : g.prevEvent, Se = re ? g.coords.start : oe ? { page: de.page, client: de.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return D.page = (0, W.default)({}, Se.page), D.client = (0, W.default)({}, Se.client), D.rect = (0, W.default)({}, g.rect), D.timeStamp = Se.timeStamp, oe || (D.page.x -= H.x, D.page.y -= H.y, D.client.x -= H.x, D.client.y -= H.y), D.ctrlKey = w.ctrlKey, D.altKey = w.altKey, D.shiftKey = w.shiftKey, D.metaKey = w.metaKey, D.button = w.button, D.buttons = w.buttons, D.target = I, D.currentTarget = I, D.preEnd = N, D.type = G || C + (T || ""), D.interactable = B, D.t0 = re ? g.pointers[g.pointers.length - 1].downTime : de.t0, D.x0 = g.coords.start.page.x - H.x, D.y0 = g.coords.start.page.y - H.y, D.clientX0 = g.coords.start.client.x - H.x, D.clientY0 = g.coords.start.client.y - H.y, D.delta = re || oe ? { x: 0, y: 0 } : { x: D[X].x - de[X].x, y: D[X].y - de[X].y }, D.dt = g.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, W.default)({}, g.coords.velocity[X]), D.speed = (0, Qe.default)(D.velocity.x, D.velocity.y), D.swipe = oe || T === "inertiastart" ? D.getSwipe() : null, D;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var w = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        w < 0 && (w += 360);
        var C = 112.5 <= w && w < 247.5, T = 202.5 <= w && w < 337.5;
        return { up: T, down: !T && 22.5 <= w && w < 157.5, left: C, right: !C && (292.5 <= w || w < 67.5), angle: w, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Ld(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Gt.BaseEvent);
    Ti.InteractEvent = ou, Object.defineProperties(ou.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(n) {
      this.page.x = n;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(n) {
      this.page.y = n;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(n) {
      this.client.x = n;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(n) {
      this.client.y = n;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(n) {
      this.delta.x = n;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(n) {
      this.delta.y = n;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(n) {
      this.velocity.x = n;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(n) {
      this.velocity.y = n;
    } } });
    var Oi = {};
    function au(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(au, "au");
    u(au, "We");
    function Bd(n, o, a) {
      return o && au(n.prototype, o), a && au(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Bd, "Bd");
    u(Bd, "Le");
    function Mi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Mi, "Mi");
    u(Mi, "Ue"), Object.defineProperty(Oi, "__esModule", { value: true }), Oi.PointerInfo = void 0;
    var Hd = Bd(u(/* @__PURE__ */ __name(function n(o, a, s, p, m) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Mi(this, "id", void 0), Mi(this, "pointer", void 0), Mi(this, "event", void 0), Mi(this, "downTime", void 0), Mi(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = m;
    }, "n"), "t"));
    Oi.PointerInfo = Hd;
    var jo, Bo, Rt = {};
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name($d, "$d");
    u($d, "$e");
    function $e(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name($e, "$e");
    u($e, "He"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.Interaction = void 0, Object.defineProperty(Rt, "PointerInfo", { enumerable: true, get: function() {
      return Oi.PointerInfo;
    } }), Rt.default = Rt._ProxyValues = Rt._ProxyMethods = void 0, Rt._ProxyValues = jo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(jo || (Rt._ProxyValues = jo = {})), Rt._ProxyMethods = Bo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Bo || (Rt._ProxyMethods = Bo = {}));
    var Fd = 0, su = function() {
      function n(s) {
        var p = this, m = s.pointerType, E = s.scopeFire;
        (function(N, G) {
          if (!(N instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), $e(this, "interactable", null), $e(this, "element", null), $e(this, "rect", null), $e(this, "_rects", void 0), $e(this, "edges", null), $e(this, "_scopeFire", void 0), $e(this, "prepared", { name: null, axis: null, edges: null }), $e(this, "pointerType", void 0), $e(this, "pointers", []), $e(this, "downEvent", null), $e(this, "downPointer", {}), $e(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), $e(this, "prevEvent", null), $e(this, "pointerIsDown", false), $e(this, "pointerWasMoved", false), $e(this, "_interacting", false), $e(this, "_ending", false), $e(this, "_stopped", true), $e(this, "_proxy", null), $e(this, "simulation", null), $e(this, "doMove", (0, Lt.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), $e(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), $e(this, "_id", Fd++), this._scopeFire = E, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var w = u(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return g[N];
          } });
        }, "a");
        for (var C in jo)
          w(C);
        var T = u(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return g[N].apply(g, arguments);
          } });
        }, "l");
        for (var I in Bo)
          T(I);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, m) {
        var E = this.updatePointer(s, p, m, true), g = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: m, pointerIndex: E, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, m) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, Lt.copyAction)(this.prepared, s), this.interactable = p, this.element = m, this.rect = p.getRect(m), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, m, false);
        var E, g, w = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Qe.default)(E, g) > this.pointerMoveTolerance);
        var C = this.getPointerIndex(s), T = { pointer: s, pointerIndex: C, pointerInfo: this.pointers[C], event: p, type: "move", eventTarget: m, dx: E, dy: g, duplicate: w, interaction: this };
        w || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), w || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || J.setZeroCoords(this.coords.delta), (s = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, m, E) {
        var g = this.getPointerIndex(s);
        g === -1 && (g = this.updatePointer(s, p, m, false));
        var w = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(w), { pointer: s, pointerIndex: g, pointerInfo: this.pointers[g], event: p, eventTarget: m, type: w, curEventTarget: E, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
      } }, { key: "documentBlur", value: function(s) {
        this.end(s), this._scopeFire("interactions:blur", { event: s, type: "blur", interaction: this });
      } }, { key: "end", value: function(s) {
        var p;
        this._ending = true, s = s || this._latestPointer.event, this.interacting() && (p = this._doPhase({ event: s, interaction: this, phase: "end" })), this._ending = false, p === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(s) {
        var p = J.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : ye.findIndex(this.pointers, function(m) {
          return m.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, m, E) {
        var g = J.getPointerId(s), w = this.getPointerIndex(s), C = this.pointers[w];
        return E = E !== false && (E || /(down|start)$/i.test(p.type)), C ? C.pointer = s : (C = new Oi.PointerInfo(g, s, p, null, null), w = this.pointers.length, this.pointers.push(C)), J.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, C.downTime = this.coords.cur.timeStamp, C.downTarget = m, J.pointerExtend(this.downPointer, s), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, m), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: m, down: E, pointerInfo: C, pointerIndex: w, interaction: this }), w;
      } }, { key: "removePointer", value: function(s, p) {
        var m = this.getPointerIndex(s);
        if (m !== -1) {
          var E = this.pointers[m];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p, eventTarget: null, pointerIndex: m, pointerInfo: E, interaction: this }), this.pointers.splice(m, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p, m) {
        this._latestPointer.pointer = s, this._latestPointer.event = p, this._latestPointer.eventTarget = m;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p, m, E) {
        return new Ti.InteractEvent(this, s, this.prepared.name, p, this.element, m, E);
      } }, { key: "_fireEvent", value: function(s) {
        var p;
        (p = this.interactable) == null || p.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, m = s.phase, E = s.preEnd, g = s.type, w = this.rect;
        if (w && m === "move" && (ue.addEdges(this.edges, w, this.coords.delta[this.interactable.options.deltaSource]), w.width = w.right - w.left, w.height = w.bottom - w.top), this._scopeFire("interactions:before-action-".concat(m), s) === false)
          return false;
        var C = s.iEvent = this._createPreparedEvent(p, m, E, g);
        return this._scopeFire("interactions:action-".concat(m), s), m === "start" && (this.prevEvent = C), this._fireEvent(C), this._scopeFire("interactions:after-action-".concat(m), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], a && $d(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Rt.Interaction = su;
    var qd = su;
    Rt.default = qd;
    var mn = {};
    function lu(n) {
      n.pointerIsDown && (ds(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(lu, "lu");
    u(lu, "tn");
    function uu(n) {
      ps(n.interaction);
    }
    __name(uu, "uu");
    u(uu, "en");
    function ps(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return ds(n.coords.cur, o), ds(n.coords.delta, o), ue.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ps, "ps");
    u(ps, "nn");
    function Wd(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Wd, "Wd");
    u(Wd, "rn");
    function ds(n, o) {
      var a = n.page, s = n.client, p = o.x, m = o.y;
      a.x += p, a.y += m, s.x += p, s.y += m;
    }
    __name(ds, "ds");
    u(ds, "on"), Object.defineProperty(mn, "__esModule", { value: true }), mn.addTotal = lu, mn.applyPending = ps, mn.default = void 0, Rt._ProxyMethods.offsetBy = "";
    var Ud = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Wd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return lu(n.interaction);
    }, "interactions:before-action-start": uu, "interactions:before-action-move": uu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ps(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, Vd = Ud;
    mn.default = Vd;
    var Yn = {};
    function Yd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Yd, "Yd");
    u(Yd, "un");
    function lt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(lt, "lt");
    u(lt, "cn"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = Yn.InertiaState = void 0;
    var cu = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), lt(this, "active", false), lt(this, "isModified", false), lt(this, "smoothEnd", false), lt(this, "allowResume", false), lt(this, "modification", void 0), lt(this, "modifierCount", 0), lt(this, "modifierArg", void 0), lt(this, "startCoords", void 0), lt(this, "t0", 0), lt(this, "v0", 0), lt(this, "te", 0), lt(this, "targetOffset", void 0), lt(this, "modifiedOffset", void 0), lt(this, "currentOffset", void 0), lt(this, "lambda_v0", 0), lt(this, "one_ve_v0", 0), lt(this, "timeout", void 0), lt(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, m = Ho(p);
        if (!m || !m.enabled)
          return false;
        var E = p.coords.velocity.client, g = (0, Qe.default)(E.x, E.y), w = this.modification || (this.modification = new hn.default(p));
        if (w.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = w.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (w.result = w.setAll(this.modifierArg), !w.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, m = Ho(this.interaction), E = m.resistance, g = -Math.log(m.endSpeed / this.v0) / E;
        this.targetOffset = { x: (p.x - g) / E, y: (p.y - g) / E }, this.te = g, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - m.endSpeed / this.v0;
        var w = this.modification, C = this.modifierArg;
        C.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, w.result = w.setAll(C), w.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + w.result.delta.x, y: this.targetOffset.y + w.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var p = this;
        this.timeout = xt.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, m, E, g, w = this, C = this.interaction, T = Ho(C).resistance, I = (C._now() - this.t0) / 1e3;
        if (I < this.te) {
          var N, G = 1 - (Math.exp(-T * I) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, m = this.modifiedOffset.x, E = this.modifiedOffset.y, N = { x: pu(g = G, 0, s, m), y: pu(g, 0, p, E) }) : N = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var D = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, C.offsetBy(D), C.move(), this.onNextFrame(function() {
            return w.inertiaTick();
          });
        } else
          C.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, m = p._now() - this.t0, E = Ho(p).smoothEndDuration;
        if (m < E) {
          var g = { x: du(m, 0, this.targetOffset.x, E), y: du(m, 0, this.targetOffset.y, E) }, w = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, p.offsetBy(w), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, m = s.event, E = s.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(p, m, E, true), g._doPhase({ interaction: g, event: m, phase: "resume" }), (0, J.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, xt.default.cancel(this.timeout);
      } }]) && Yd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Ho(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Ho, "Ho");
    u(Ho, "dn"), Yn.InertiaState = cu;
    var Xd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(mn.default), n.usePlugin(ft.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new cu(o);
    }, "interactions:before-action-end": function(n) {
      var o = n.interaction, a = n.event;
      return (!o._interacting || o.simulation || !o.inertia.start(a)) && null;
    }, "interactions:down": function(n) {
      var o = n.interaction, a = n.eventTarget, s = o.inertia;
      if (s.active)
        for (var p = a; c.default.element(p); ) {
          if (p === o.element) {
            s.resume(n);
            break;
          }
          p = _.parentNode(p);
        }
    }, "interactions:stop": function(n) {
      var o = n.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(n) {
      var o = n.interaction.modification;
      o.stop(n), o.start(n, n.interaction.coords.cur.page), o.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": ft.addEventModifiers, "interactions:action-inertiastart": ft.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    function pu(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(pu, "pu");
    u(pu, "vn");
    function du(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(du, "du");
    u(du, "hn");
    var Zd = Xd;
    Yn.default = Zd;
    var Pi = {};
    function Jd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Jd, "Jd");
    u(Jd, "mn");
    function Ii(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ii, "Ii");
    u(Ii, "bn");
    function fu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(fu, "fu");
    u(fu, "xn"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.Eventable = void 0;
    var Kd = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ii(this, "options", void 0), Ii(this, "types", {}), Ii(this, "propagationStopped", false), Ii(this, "immediatePropagationStopped", false), Ii(this, "global", void 0), this.options = (0, W.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, m = this.global;
        (p = this.types[s.type]) && fu(s, p), !s.propagationStopped && m && (p = m[s.type]) && fu(s, p);
      } }, { key: "on", value: function(s, p) {
        var m = (0, fe.default)(s, p);
        for (s in m)
          this.types[s] = ye.merge(this.types[s] || [], m[s]);
      } }, { key: "off", value: function(s, p) {
        var m = (0, fe.default)(s, p);
        for (s in m) {
          var E = this.types[s];
          if (E && E.length)
            for (var g = 0; g < m[s].length; g++) {
              var w = m[s][g], C = E.indexOf(w);
              C !== -1 && E.splice(C, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Jd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Pi.Eventable = Kd;
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: true }), Ai.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var fs = {};
    Object.defineProperty(fs, "__esModule", { value: true }), fs.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var m = n.interactables.get(s, p);
        return m || ((m = n.interactables.new(s, p)).events.global = a.globalEvents), m;
      }, "a"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = _.getElementRect, o.getElementClientRect = _.getElementClientRect, o.matchesSelector = _.matchesSelector, o.closest = _.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Lt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var m = 0; m < a.length; m++) {
            var E = a[m];
            this.on(E, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.on(g, a[g], s);
          return this;
        }
        return (0, Ai.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Lt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var m = 0; m < a.length; m++) {
            var E = a[m];
            this.off(E, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.off(g, a[g], s);
          return this;
        }
        var w;
        return (0, Ai.default)(a, this.scope.actions) ? a in this.globalEvents && (w = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(w, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return q.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return q.default.supportsPointerEvent;
      }, o.stop = function() {
        for (var a = 0; a < this.scope.interactions.list.length; a++)
          this.scope.interactions.list[a].stop();
        return this;
      }, o.pointerMoveTolerance = function(a) {
        return c.default.number(a) ? (this.scope.interactions.pointerMoveTolerance = a, this) : this.scope.interactions.pointerMoveTolerance;
      }, o.addDocument = function(a, s) {
        this.scope.addDocument(a, s);
      }, o.removeDocument = function(a) {
        this.scope.removeDocument(a);
      }, o;
    };
    var $o = {};
    function Qd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Qd, "Qd");
    u(Qd, "En");
    function _r(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_r, "_r");
    u(_r, "Sn"), Object.defineProperty($o, "__esModule", { value: true }), $o.Interactable = void 0;
    var ef = function() {
      function n(s, p, m, E) {
        (function(g, w) {
          if (!(g instanceof w))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _r(this, "options", void 0), _r(this, "_actions", void 0), _r(this, "target", void 0), _r(this, "events", new Pi.Eventable()), _r(this, "_context", void 0), _r(this, "_win", void 0), _r(this, "_doc", void 0), _r(this, "_scopeEvents", void 0), _r(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || m, this._win = (0, e.getWindow)((0, _.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = E, this.set(p);
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, p) {
        return c.default.func(p.onstart) && this.on("".concat(s, "start"), p.onstart), c.default.func(p.onmove) && this.on("".concat(s, "move"), p.onmove), c.default.func(p.onend) && this.on("".concat(s, "end"), p.onend), c.default.func(p.oninertiastart) && this.on("".concat(s, "inertiastart"), p.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, p, m) {
        (c.default.array(p) || c.default.object(p)) && this.off(s, p), (c.default.array(m) || c.default.object(m)) && this.on(s, m);
      } }, { key: "setPerAction", value: function(s, p) {
        var m = this._defaults;
        for (var E in p) {
          var g = E, w = this.options[s], C = p[g];
          g === "listeners" && this.updatePerActionListeners(s, w.listeners, C), c.default.array(C) ? w[g] = ye.from(C) : c.default.plainObject(C) ? (w[g] = (0, W.default)(w[g] || {}, (0, fn.default)(C)), c.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (w[g].enabled = C.enabled !== false)) : c.default.bool(C) && c.default.object(m.perAction[g]) ? w[g].enabled = C : w[g] = C;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, _.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(m) {
          var E = (0, W.default)({}, p._rectChecker(m));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, _.trySelector)(p) || c.default.object(p)) {
          for (var m in this.options[s] = p, this._actions.map)
            this.options[m][s] = p;
          return this;
        }
        return this.options[s];
      } }, { key: "origin", value: function(s) {
        return this._backCompatOption("origin", s);
      } }, { key: "deltaSource", value: function(s) {
        return s === "page" || s === "client" ? (this.options.deltaSource = s, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(s) {
        return this._context === s.ownerDocument || (0, _.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, p, m) {
        return !this.testIgnore(s.ignoreFrom, p, m) && this.testAllow(s.allowFrom, p, m);
      } }, { key: "testAllow", value: function(s, p, m) {
        return !s || !!c.default.element(m) && (c.default.string(s) ? (0, _.matchesUpTo)(m, s, p) : !!c.default.element(s) && (0, _.nodeContains)(s, m));
      } }, { key: "testIgnore", value: function(s, p, m) {
        return !(!s || !c.default.element(m)) && (c.default.string(s) ? (0, _.matchesUpTo)(m, s, p) : !!c.default.element(s) && (0, _.nodeContains)(s, m));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, m, E) {
        c.default.object(p) && !c.default.array(p) && (E = m, m = null);
        var g = s === "on" ? "add" : "remove", w = (0, fe.default)(p, m);
        for (var C in w) {
          C === "wheel" && (C = q.default.wheelEvent);
          for (var T = 0; T < w[C].length; T++) {
            var I = w[C][T];
            (0, Ai.default)(C, this._actions) ? this.events[s](C, I) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, C, I, E) : this._scopeEvents[g](this.target, C, I, E);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, m) {
        return this._onOff("on", s, p, m);
      } }, { key: "off", value: function(s, p, m) {
        return this._onOff("off", s, p, m);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var m in c.default.object(s) || (s = {}), this.options = (0, fn.default)(p.base), this._actions.methodDict) {
          var E = m, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, W.default)((0, W.default)({}, p.perAction), p.actions[E])), this[g](s[E]);
        }
        for (var w in s)
          c.default.func(this[w]) && this[w](s[w]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], m = p.length - 1; m >= 0; m--) {
              var E = p[m], g = E.selector, w = E.context, C = E.listeners;
              g === this.target && w === this._context && p.splice(m, 1);
              for (var T = C.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, C[T][0], C[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Qd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    $o.Interactable = ef;
    var Fo = {};
    function tf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(tf, "tf");
    u(tf, "Mn");
    function hs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(hs, "hs");
    u(hs, "kn"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.InteractableSet = void 0;
    var rf = function() {
      function n(s) {
        var p = this;
        (function(m, E) {
          if (!(m instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), hs(this, "list", []), hs(this, "selectorMap", {}), hs(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(m) {
          var E = m.interactable, g = E.target, w = E._context, C = c.default.string(g) ? p.selectorMap[g] : g[p.scope.id], T = ye.findIndex(C, function(I) {
            return I.context === w;
          });
          C[T] && (C[T].context = null, C[T].interactable = null), C.splice(T, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, W.default)(p || {}, { actions: this.scope.actions });
        var m = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), E = { context: m._context, interactable: m };
        return this.scope.addDocument(m._doc), this.list.push(m), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(E)) : (m.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: s, options: p, interactable: m, win: this.scope._win }), m;
      } }, { key: "get", value: function(s, p) {
        var m = p && p.context || this.scope.document, E = c.default.string(s), g = E ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var w = ye.find(g, function(C) {
          return C.context === m && (E || C.interactable.inContext(s));
        });
        return w && w.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var m = 0; m < this.list.length; m++) {
          var E = this.list[m], g = void 0;
          if ((c.default.string(E.target) ? c.default.element(s) && _.matchesSelector(s, E.target) : s === E.target) && E.inContext(s) && (g = p(E)), g !== void 0)
            return g;
        }
      } }]) && tf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Fo.InteractableSet = rf;
    var qo = {};
    function nf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(nf, "nf");
    u(nf, "An");
    function vs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vs, "vs");
    u(vs, "zn");
    function ms(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], w = true, C = false;
          try {
            for (p = p.call(a); !(w = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); w = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (C)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return hu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? hu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ms, "ms");
    u(ms, "Cn");
    function hu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(hu, "hu");
    u(hu, "Rn"), Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0;
    var of = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), vs(this, "currentTarget", void 0), vs(this, "originalEvent", void 0), vs(this, "type", void 0), this.originalEvent = s, (0, Ft.default)(this, s);
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && nf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function _i(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, W.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(_i, "_i");
    u(_i, "Xn");
    var af = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], m = { add: E, remove: g, addDelegate: function(T, I, N, G, D) {
        var B = _i(D);
        if (!s[N]) {
          s[N] = [];
          for (var X = 0; X < p.length; X++) {
            var H = p[X];
            E(H, N, w), E(H, N, C, true);
          }
        }
        var re = s[N], oe = ye.find(re, function(de) {
          return de.selector === T && de.context === I;
        });
        oe || (oe = { selector: T, context: I, listeners: [] }, re.push(oe)), oe.listeners.push([G, B]);
      }, removeDelegate: function(T, I, N, G, D) {
        var B, X = _i(D), H = s[N], re = false;
        if (H)
          for (B = H.length - 1; B >= 0; B--) {
            var oe = H[B];
            if (oe.selector === T && oe.context === I) {
              for (var de = oe.listeners, Se = de.length - 1; Se >= 0; Se--) {
                var Le = ms(de[Se], 2), me = Le[0], Re = Le[1], Yt = Re.capture, Dr = Re.passive;
                if (me === G && Yt === X.capture && Dr === X.passive) {
                  de.splice(Se, 1), de.length || (H.splice(B, 1), g(I, N, w), g(I, N, C, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: w, delegateUseCapture: C, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function E(T, I, N, G) {
        var D = _i(G), B = ye.find(a, function(X) {
          return X.eventTarget === T;
        });
        B || (B = { eventTarget: T, events: {} }, a.push(B)), B.events[I] || (B.events[I] = []), T.addEventListener && !ye.contains(B.events[I], N) && (T.addEventListener(I, N, m.supportsOptions ? D : D.capture), B.events[I].push(N));
      }
      __name(E, "E");
      u(E, "s");
      function g(T, I, N, G) {
        var D = _i(G), B = ye.findIndex(a, function(Se) {
          return Se.eventTarget === T;
        }), X = a[B];
        if (X && X.events)
          if (I !== "all") {
            var H = false, re = X.events[I];
            if (re) {
              if (N === "all") {
                for (var oe = re.length - 1; oe >= 0; oe--)
                  g(T, I, re[oe], D);
                return;
              }
              for (var de = 0; de < re.length; de++)
                if (re[de] === N) {
                  T.removeEventListener(I, N, m.supportsOptions ? D : D.capture), re.splice(de, 1), re.length === 0 && (delete X.events[I], H = true);
                  break;
                }
            }
            H && !Object.keys(X.events).length && a.splice(B, 1);
          } else
            for (I in X.events)
              X.events.hasOwnProperty(I) && g(T, I, "all");
      }
      __name(g, "g");
      u(g, "l");
      function w(T, I) {
        for (var N = _i(I), G = new of(T), D = s[T.type], B = ms(J.getEventTargets(T), 1)[0], X = B; c.default.element(X); ) {
          for (var H = 0; H < D.length; H++) {
            var re = D[H], oe = re.selector, de = re.context;
            if (_.matchesSelector(X, oe) && _.nodeContains(de, B) && _.nodeContains(de, X)) {
              var Se = re.listeners;
              G.currentTarget = X;
              for (var Le = 0; Le < Se.length; Le++) {
                var me = ms(Se[Le], 2), Re = me[0], Yt = me[1], Dr = Yt.capture, zs = Yt.passive;
                Dr === N.capture && zs === N.passive && Re(G);
              }
            }
          }
          X = _.parentNode(X);
        }
      }
      __name(w, "w");
      u(w, "u");
      function C(T) {
        return w(T, true);
      }
      __name(C, "C");
      return u(C, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), n.events = m, m;
    } };
    qo.default = af;
    var Wo = {};
    Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var Uo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Uo.methodOrder.length; o++) {
        var a;
        a = Uo.methodOrder[o];
        var s = Uo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, p = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var m = 0; m < p.interactions.list.length; m++) {
        var E = p.interactions.list[m], g = s;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; g; ) {
            if (g === E.element)
              return E;
            g = _.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, m = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var E = 0; E < m.interactions.list.length; E++) {
        var g = m.interactions.list[E];
        if (g.pointerType === s) {
          if (g.simulation && !vu(g, a))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
        }
      }
      if (o)
        return o;
      for (var w = 0; w < m.interactions.list.length; w++) {
        var C = m.interactions.list[w];
        if (!(C.pointerType !== s || /down/i.test(p) && C.simulation))
          return C;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (vu(p, o))
          return p;
      }
      return null;
    }, idle: function(n) {
      for (var o = n.pointerType, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (p.pointers.length === 1) {
          var m = p.interactable;
          if (m && (!m.options.gesture || !m.options.gesture.enabled))
            continue;
        } else if (p.pointers.length >= 2)
          continue;
        if (!p.interacting() && o === p.pointerType)
          return p;
      }
      return null;
    } };
    function vu(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(vu, "vu");
    u(vu, "Ln");
    var sf = Uo;
    Wo.default = sf;
    var Vo = {};
    function gs(n) {
      return gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, gs(n);
    }
    __name(gs, "gs");
    u(gs, "Nn");
    function mu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], w = true, C = false;
          try {
            for (p = p.call(a); !(w = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); w = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (C)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return gu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? gu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(mu, "mu");
    u(mu, "qn");
    function gu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(gu, "gu");
    u(gu, "Gn");
    function lf(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(lf, "lf");
    u(lf, "$n");
    function uf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(uf, "uf");
    u(uf, "Hn");
    function bs(n, o) {
      return bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, bs(n, o);
    }
    __name(bs, "bs");
    u(bs, "Kn");
    function cf(n, o) {
      if (o && (gs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(cf, "cf");
    u(cf, "Zn");
    function Yo(n) {
      return Yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Yo(n);
    }
    __name(Yo, "Yo");
    u(Yo, "Jn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var ys = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function bu(n, o) {
      return function(a) {
        var s = o.interactions.list, p = J.getPointerType(a), m = mu(J.getEventTargets(a), 2), E = m[0], g = m[1], w = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var C = 0; C < a.changedTouches.length; C++) {
            var T = a.changedTouches[C], I = { pointer: T, pointerId: J.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: E, curEventTarget: g, scope: o }, N = yu(I);
            w.push([I.pointer, I.eventTarget, I.curEventTarget, N]);
          }
        } else {
          var G = false;
          if (!q.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var D = 0; D < s.length && !G; D++)
              G = s[D].pointerType !== "mouse" && s[D].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G) {
            var B = { pointer: a, pointerId: J.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: g, eventTarget: E, scope: o }, X = yu(B);
            w.push([B.pointer, B.eventTarget, B.curEventTarget, X]);
          }
        }
        for (var H = 0; H < w.length; H++) {
          var re = mu(w[H], 4), oe = re[0], de = re[1], Se = re[2];
          re[3][n](oe, a, de, Se);
        }
      };
    }
    __name(bu, "bu");
    u(bu, "tr");
    function yu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Wo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(yu, "yu");
    u(yu, "er");
    function ws(n, o) {
      var a = n.doc, s = n.scope, p = n.options, m = s.interactions.docEvents, E = s.events, g = E[o];
      for (var w in s.browser.isIOS && !p.events && (p.events = { passive: false }), E.delegatedEvents)
        g(a, w, E.delegateListener), g(a, w, E.delegateUseCapture, true);
      for (var C = p && p.events, T = 0; T < m.length; T++) {
        var I = m[T];
        g(a, I.type, I.listener, C);
      }
    }
    __name(ws, "ws");
    u(ws, "nr");
    var pf = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ys.length; a++) {
        var s = ys[a];
        o[s] = bu(s, n);
      }
      var p, m = q.default.pEventTypes;
      function E() {
        for (var g = 0; g < n.interactions.list.length; g++) {
          var w = n.interactions.list[g];
          if (w.pointerIsDown && w.pointerType === "touch" && !w._interacting)
            for (var C = function() {
              var I = w.pointers[T];
              n.documents.some(function(N) {
                var G = N.doc;
                return (0, _.nodeContains)(G, I.downTarget);
              }) || w.removePointer(I.pointer, I.event);
            }, T = 0; T < w.pointers.length; T++)
              C();
        }
      }
      __name(E, "E");
      u(E, "a"), (p = M.default.PointerEvent ? [{ type: m.down, listener: E }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var w = 0; w < n.interactions.list.length; w++)
          n.interactions.list[w].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(D, B) {
          if (typeof B != "function" && B !== null)
            throw new TypeError("Super expression must either be null or a function");
          D.prototype = Object.create(B && B.prototype, { constructor: { value: D, writable: true, configurable: true } }), Object.defineProperty(D, "prototype", { writable: false }), B && bs(D, B);
        })(G, g);
        var w, C, T, I, N = (T = G, I = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (D) {
            return false;
          }
        }(), function() {
          var D, B = Yo(T);
          if (I) {
            var X = Yo(this).constructor;
            D = Reflect.construct(B, arguments, X);
          } else
            D = B.apply(this, arguments);
          return cf(this, D);
        });
        function G() {
          return lf(this, G), N.apply(this, arguments);
        }
        __name(G, "G");
        return u(G, "s"), w = G, (C = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(D) {
          n.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && uf(w.prototype, C), Object.defineProperty(w, "prototype", { writable: false }), G;
      }(Rt.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(C, T) {
          return n.fire(C, T);
        };
        var w = new n.Interaction(g);
        return n.interactions.list.push(w), w;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Vn.default);
    }, listeners: { "scope:add-document": function(n) {
      return ws(n, "add");
    }, "scope:remove-document": function(n) {
      return ws(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: ws, doOnInteractions: bu, methodNames: ys }, df = pf;
    Vo.default = df;
    var ki = {};
    function xs(n) {
      return xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, xs(n);
    }
    __name(xs, "xs");
    u(xs, "ar");
    function Di() {
      return Di = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(n, o, a) {
        var s = ff(n, o);
        if (s) {
          var p = Object.getOwnPropertyDescriptor(s, o);
          return p.get ? p.get.call(arguments.length < 3 ? n : a) : p.value;
        }
      }, Di.apply(this, arguments);
    }
    __name(Di, "Di");
    u(Di, "sr");
    function ff(n, o) {
      for (; !Object.prototype.hasOwnProperty.call(n, o) && (n = Ur(n)) !== null; )
        ;
      return n;
    }
    __name(ff, "ff");
    u(ff, "lr");
    function Es(n, o) {
      return Es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Es(n, o);
    }
    __name(Es, "Es");
    u(Es, "ur");
    function hf(n, o) {
      if (o && (xs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(hf, "hf");
    u(hf, "cr");
    function Ur(n) {
      return Ur = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ur(n);
    }
    __name(Ur, "Ur");
    u(Ur, "fr");
    function wu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(wu, "wu");
    u(wu, "dr");
    function xu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(xu, "xu");
    u(xu, "pr");
    function Eu(n, o, a) {
      return o && xu(n.prototype, o), a && xu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Eu, "Eu");
    u(Eu, "vr");
    function ht(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ht, "ht");
    u(ht, "hr"), Object.defineProperty(ki, "__esModule", { value: true }), ki.Scope = void 0, ki.initScope = Su;
    var vf = function() {
      function n() {
        var o = this;
        wu(this, n), ht(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ht(this, "isInitialized", false), ht(this, "listenerMaps", []), ht(this, "browser", q.default), ht(this, "defaults", (0, fn.default)(Ci.defaults)), ht(this, "Eventable", Pi.Eventable), ht(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), ht(this, "interactStatic", (0, fs.createInteractStatic)(this)), ht(this, "InteractEvent", Ti.InteractEvent), ht(this, "Interactable", void 0), ht(this, "interactables", new Fo.InteractableSet(this)), ht(this, "_win", void 0), ht(this, "document", void 0), ht(this, "window", void 0), ht(this, "documents", []), ht(this, "_plugins", { list: [], map: {} }), ht(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(w, C) {
            if (typeof C != "function" && C !== null)
              throw new TypeError("Super expression must either be null or a function");
            w.prototype = Object.create(C && C.prototype, { constructor: { value: w, writable: true, configurable: true } }), Object.defineProperty(w, "prototype", { writable: false }), C && Es(w, C);
          })(g, s);
          var p, m, E = (p = g, m = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (w) {
              return false;
            }
          }(), function() {
            var w, C = Ur(p);
            if (m) {
              var T = Ur(this).constructor;
              w = Reflect.construct(C, arguments, T);
            } else
              w = C.apply(this, arguments);
            return hf(this, w);
          });
          function g() {
            return wu(this, g), E.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), Eu(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(w) {
            return Di(Ur(g.prototype), "set", this).call(this, w), a.fire("interactable:set", { options: w, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Di(Ur(g.prototype), "unset", this).call(this);
            var w = a.interactables.list.indexOf(this);
            w < 0 || (Di(Ur(g.prototype), "unset", this).call(this), a.interactables.list.splice(w, 1), a.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }($o.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), Eu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : Su(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, m = o.before.reduce(function(g, w) {
            return g[w] = true, g[Cu(w)] = true, g;
          }, {}); s < p; s++) {
            var E = this.listenerMaps[s].id;
            if (m[E] || m[Cu(E)])
              break;
          }
          this.listenerMaps.splice(s, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, a) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var s = e.getWindow(o);
        a = a ? (0, W.default)({}, a) : {}, this.documents.push({ doc: o, options: a }), this.events.documents.push(o), o !== this.document && this.events.add(s, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: s, scope: this, options: a });
      } }, { key: "removeDocument", value: function(o) {
        var a = this.getDocIndex(o), s = e.getWindow(o), p = this.documents[a].options;
        this.events.remove(s, "unload", this.onWindowUnload), this.documents.splice(a, 1), this.events.documents.splice(a, 1), this.fire("scope:remove-document", { doc: o, window: s, scope: this, options: p });
      } }, { key: "getDocIndex", value: function(o) {
        for (var a = 0; a < this.documents.length; a++)
          if (this.documents[a].doc === o)
            return a;
        return -1;
      } }, { key: "getDocOptions", value: function(o) {
        var a = this.getDocIndex(o);
        return a === -1 ? null : this.documents[a].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), n;
    }();
    function Su(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), M.default.init(o), q.default.init(o), xt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Vo.default), n.usePlugin(qo.default), n;
    }
    __name(Su, "Su");
    u(Su, "yr");
    function Cu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(Cu, "Cu");
    u(Cu, "mr"), ki.Scope = vf;
    var Ss = {}, et = {};
    Object.defineProperty(et, "__esModule", { value: true });
    var mf = {};
    et.default = void 0, Object.keys(Ss).forEach(function(n) {
      n !== "default" && n !== "__esModule" && (Object.prototype.hasOwnProperty.call(mf, n) || n in et && et[n] === Ss[n] || Object.defineProperty(et, n, { enumerable: true, get: function() {
        return Ss[n];
      } }));
    });
    var Tu = new ki.Scope(), gf = Tu.interactStatic;
    et.default = gf;
    var bf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Tu.init(bf);
    var Xo = {};
    Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0, Xo.default = function() {
    };
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0, Zo.default = function() {
    };
    var Jo = {};
    function Ou(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], w = true, C = false;
          try {
            for (p = p.call(a); !(w = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); w = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (C)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Mu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Mu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Ou, "Ou");
    u(Ou, "jr");
    function Mu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Mu, "Mu");
    u(Mu, "Mr"), Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0, Jo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = Ou(s, 2), m = p[0], E = p[1];
        return m in n || E in n;
      }), a = u(function(s, p) {
        for (var m = n.range, E = n.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, w = n.offset, C = w === void 0 ? { x: 0, y: 0 } : w, T = { range: m, grid: n, x: null, y: null }, I = 0; I < o.length; I++) {
          var N = Ou(o[I], 2), G = N[0], D = N[1], B = Math.round((s - C.x) / n[G]), X = Math.round((p - C.y) / n[D]);
          T[G] = Math.max(g.left, Math.min(g.right, B * n[G] + C.x)), T[D] = Math.max(g.top, Math.min(g.bottom, X * n[D] + C.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Ri = {};
    Object.defineProperty(Ri, "__esModule", { value: true }), Object.defineProperty(Ri, "edgeTarget", { enumerable: true, get: function() {
      return Xo.default;
    } }), Object.defineProperty(Ri, "elements", { enumerable: true, get: function() {
      return Zo.default;
    } }), Object.defineProperty(Ri, "grid", { enumerable: true, get: function() {
      return Jo.default;
    } });
    var Ko = {};
    Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var yf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, Ri), o.createSnapGrid = o.snappers.grid;
    } }, wf = yf;
    Ko.default = wf;
    var Xn = {};
    function Pu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(Pu, "Pu");
    u(Pu, "Cr");
    function Cs(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Pu(Object(a), true).forEach(function(s) {
          xf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Pu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(Cs, "Cs");
    u(Cs, "Rr");
    function xf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(xf, "xf");
    u(xf, "Fr"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = Xn.aspectRatio = void 0;
    var Iu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, m = o.options.ratio, E = o.options, g = E.equalDelta, w = E.modifiers;
      m === "preserve" && (m = a.width / a.height), o.startCoords = (0, W.default)({}, p), o.startRect = (0, W.default)({}, a), o.ratio = m, o.equalDelta = g;
      var C = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta) {
        var T = (C.left ? 1 : -1) * (C.top ? 1 : -1);
        o.edgeSign = { x: T, y: T };
      } else
        o.edgeSign = { x: C.left ? -1 : 1, y: C.top ? -1 : 1 };
      if ((0, W.default)(n.edges, C), w && w.length) {
        var I = new hn.default(n.interaction);
        I.copyFrom(n.interaction.modification), I.prepareStates(w), o.subModification = I, I.startAll(Cs({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, W.default)({}, s), m = o.equalDelta ? Ef : Sf;
      if (m(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var E = (0, W.default)({}, a);
      (0, ue.addEdges)(o.linkedEdges, E, { x: s.x - p.x, y: s.y - p.y });
      var g = o.subModification.setAll(Cs(Cs({}, n), {}, { rect: E, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: E })), w = g.delta;
      return g.changed && (m(o, Math.abs(w.x) > Math.abs(w.y), g.coords, g.rect), (0, W.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Ef(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p.y : a.x = s.x + (a.y - s.y) * p.x;
    }
    __name(Ef, "Ef");
    u(Ef, "Br");
    function Sf(n, o, a, s) {
      var p = n.startRect, m = n.startCoords, E = n.ratio, g = n.edgeSign;
      if (o) {
        var w = s.width / E;
        a.y = m.y + (w - p.height) * g.y;
      } else {
        var C = s.height * E;
        a.x = m.x + (C - p.width) * g.x;
      }
    }
    __name(Sf, "Sf");
    u(Sf, "Yr"), Xn.aspectRatio = Iu;
    var Cf = (0, ft.makeModifier)(Iu, "aspectRatio");
    Xn.default = Cf;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = void 0;
    var Au = u(function() {
    }, "Ur");
    Au._defaults = {};
    var Tf = Au;
    gn.default = Tf;
    var Ts = {};
    Object.defineProperty(Ts, "__esModule", { value: true }), Object.defineProperty(Ts, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Pt = {};
    function Os(n, o, a) {
      return c.default.func(n) ? ue.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ue.resolveRectLike(n, o.interactable, o.element);
    }
    __name(Os, "Os");
    u(Os, "Gr"), Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0, Pt.getRestrictionRect = Os, Pt.restrict = void 0;
    var _u = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, m = n.pageCoords, E = s.options, g = E.elementRect, w = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && g) {
        var C = Os(E.restriction, p, m);
        if (C) {
          var T = C.right - C.left - o.width, I = C.bottom - C.top - o.height;
          T < 0 && (w.left += T, w.right += T), I < 0 && (w.top += I, w.bottom += I);
        }
        w.left += a.left - o.width * g.left, w.top += a.top - o.height * g.top, w.right += a.right - o.width * (1 - g.right), w.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = w;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, m = s.offset, E = Os(p.restriction, a, o);
      if (E) {
        var g = ue.xywhToTlbr(E);
        o.x = Math.max(Math.min(g.right - m.right, o.x), g.left + m.left), o.y = Math.max(Math.min(g.bottom - m.bottom, o.y), g.top + m.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Pt.restrict = _u;
    var Of = (0, ft.makeModifier)(_u, "restrict");
    Pt.default = Of;
    var wr = {};
    Object.defineProperty(wr, "__esModule", { value: true }), wr.restrictEdges = wr.default = void 0;
    var ku = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Du = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Ru(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(Ru, "Ru");
    u(Ru, "Qr");
    var Nu = { noInner: ku, noOuter: Du, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, m = p.options;
      if (m) {
        var E = (0, Pt.getRestrictionRect)(m.offset, a, a.coords.start.page);
        o = ue.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, m = p.offset, E = p.options;
      if (a) {
        var g = (0, W.default)({}, o), w = (0, Pt.getRestrictionRect)(E.inner, s, g) || {}, C = (0, Pt.getRestrictionRect)(E.outer, s, g) || {};
        Ru(w, ku), Ru(C, Du), a.top ? o.y = Math.min(Math.max(C.top + m.top, g.y), w.top + m.top) : a.bottom && (o.y = Math.max(Math.min(C.bottom + m.bottom, g.y), w.bottom + m.bottom)), a.left ? o.x = Math.min(Math.max(C.left + m.left, g.x), w.left + m.left) : a.right && (o.x = Math.max(Math.min(C.right + m.right, g.x), w.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    wr.restrictEdges = Nu;
    var Mf = (0, ft.makeModifier)(Nu, "restrictEdges");
    wr.default = Mf;
    var Zn = {};
    Object.defineProperty(Zn, "__esModule", { value: true }), Zn.restrictRect = Zn.default = void 0;
    var Pf = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Pt.restrict.defaults), zu = { start: Pt.restrict.start, set: Pt.restrict.set, defaults: Pf };
    Zn.restrictRect = zu;
    var If = (0, ft.makeModifier)(zu, "restrictRect");
    Zn.default = If;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.restrictSize = Jn.default = void 0;
    var Af = { width: -1 / 0, height: -1 / 0 }, _f = { width: 1 / 0, height: 1 / 0 }, Gu = { start: function(n) {
      return wr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, m = a.options;
      if (p) {
        var E = ue.tlbrToXywh((0, Pt.getRestrictionRect)(m.min, o, n.coords)) || Af, g = ue.tlbrToXywh((0, Pt.getRestrictionRect)(m.max, o, n.coords)) || _f;
        a.options = { endOnly: m.endOnly, inner: (0, W.default)({}, wr.restrictEdges.noInner), outer: (0, W.default)({}, wr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - E.height, a.options.outer.top = s.bottom - g.height) : p.bottom && (a.options.inner.bottom = s.top + E.height, a.options.outer.bottom = s.top + g.height), p.left ? (a.options.inner.left = s.right - E.width, a.options.outer.left = s.right - g.width) : p.right && (a.options.inner.right = s.left + E.width, a.options.outer.right = s.left + g.width), wr.restrictEdges.set(n), a.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Jn.restrictSize = Gu;
    var kf = (0, ft.makeModifier)(Gu, "restrictSize");
    Jn.default = kf;
    var Ms = {};
    Object.defineProperty(Ms, "__esModule", { value: true }), Object.defineProperty(Ms, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Vr = {};
    Object.defineProperty(Vr, "__esModule", { value: true }), Vr.snap = Vr.default = void 0;
    var Lu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, m = n.rect, E = n.state, g = n.startOffset, w = E.options, C = w.offsetWithOrigin ? function(N) {
        var G = N.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(N.state.options.origin, null, null, [G])) || (0, Ge.default)(N.interactable, G, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (w.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ue.resolveRectLike)(w.offset, s, p, [a]);
        (o = (0, ue.rectToXY)(T) || { x: 0, y: 0 }).x += C.x, o.y += C.y;
      }
      var I = w.relativePoints;
      E.offsets = m && I && I.length ? I.map(function(N, G) {
        return { index: G, relativePoint: N, x: g.left - m.width * N.x + o.x, y: g.top - m.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, m = s.offsets, E = (0, Ge.default)(o.interactable, o.element, o.prepared.name), g = (0, W.default)({}, a), w = [];
      p.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var C = 0; C < m.length; C++)
        for (var T = m[C], I = g.x - T.x, N = g.y - T.y, G = 0, D = p.targets.length; G < D; G++) {
          var B, X = p.targets[G];
          (B = c.default.func(X) ? X(I, N, o._proxy, T, G) : X) && w.push({ x: (c.default.number(B.x) ? B.x : I) + T.x, y: (c.default.number(B.y) ? B.y : N) + T.y, range: c.default.number(B.range) ? B.range : p.range, source: X, index: G, offset: T });
        }
      for (var H = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < w.length; re++) {
        var oe = w[re], de = oe.range, Se = oe.x - g.x, Le = oe.y - g.y, me = (0, Qe.default)(Se, Le), Re = me <= de;
        de === 1 / 0 && H.inRange && H.range !== 1 / 0 && (Re = false), H.target && !(Re ? H.inRange && de !== 1 / 0 ? me / de < H.distance / H.range : de === 1 / 0 && H.range !== 1 / 0 || me < H.distance : !H.inRange && me < H.distance) || (H.target = oe, H.distance = me, H.range = de, H.inRange = Re, H.delta.x = Se, H.delta.y = Le);
      }
      return H.inRange && (a.x = H.target.x, a.y = H.target.y), s.closest = H, H;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Vr.snap = Lu;
    var Df = (0, ft.makeModifier)(Lu, "snap");
    Vr.default = Df;
    var kr = {};
    function ju(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ju, "ju");
    u(ju, "yo"), Object.defineProperty(kr, "__esModule", { value: true }), kr.snapSize = kr.default = void 0;
    var Bu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Vr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, m = n.coords, E = p.options, g = p.offsets, w = { x: m.x - g[0].x, y: m.y - g[0].y };
      p.options = (0, W.default)({}, E), p.options.targets = [];
      for (var C = 0; C < (E.targets || []).length; C++) {
        var T = (E.targets || [])[C], I = void 0;
        if (I = c.default.func(T) ? T(w.x, w.y, s) : T) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var G = (o = p.targetFields[N], a = 2, function(H) {
              if (Array.isArray(H))
                return H;
            }(o) || function(H, re) {
              var oe = H == null ? null : typeof Symbol != "undefined" && H[Symbol.iterator] || H["@@iterator"];
              if (oe != null) {
                var de, Se, Le = [], me = true, Re = false;
                try {
                  for (oe = oe.call(H); !(me = (de = oe.next()).done) && (Le.push(de.value), !re || Le.length !== re); me = true)
                    ;
                } catch (Yt) {
                  Re = true, Se = Yt;
                } finally {
                  try {
                    me || oe.return == null || oe.return();
                  } finally {
                    if (Re)
                      throw Se;
                  }
                }
                return Le;
              }
            }(o, a) || function(H, re) {
              if (H) {
                if (typeof H == "string")
                  return ju(H, re);
                var oe = Object.prototype.toString.call(H).slice(8, -1);
                return oe === "Object" && H.constructor && (oe = H.constructor.name), oe === "Map" || oe === "Set" ? Array.from(H) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? ju(H, re) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), D = G[0], B = G[1];
            if (D in I || B in I) {
              I.x = I[D], I.y = I[B];
              break;
            }
          }
          p.options.targets.push(I);
        }
      }
      var X = Vr.snap.set(n);
      return p.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    kr.snapSize = Bu;
    var Rf = (0, ft.makeModifier)(Bu, "snapSize");
    kr.default = Rf;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: true }), Kn.snapEdges = Kn.default = void 0;
    var Hu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], kr.snapSize.start(n)) : null;
    }, set: kr.snapSize.set, defaults: (0, W.default)((0, fn.default)(kr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Kn.snapEdges = Hu;
    var Nf = (0, ft.makeModifier)(Hu, "snapEdges");
    Kn.default = Nf;
    var Ps = {};
    Object.defineProperty(Ps, "__esModule", { value: true }), Object.defineProperty(Ps, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Is = {};
    Object.defineProperty(Is, "__esModule", { value: true }), Object.defineProperty(Is, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0;
    var zf = { aspectRatio: Xn.default, restrictEdges: wr.default, restrict: Pt.default, restrictRect: Zn.default, restrictSize: Jn.default, snapEdges: Kn.default, snap: Vr.default, snapSize: kr.default, spring: Ps.default, avoid: Ts.default, transform: Is.default, rubberband: Ms.default };
    Qn.default = zf;
    var Qo = {};
    Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0;
    var Gf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ft.default), n.usePlugin(Ko.default), o.modifiers = Qn.default, Qn.default) {
        var s = Qn.default[a], p = s._defaults, m = s._methods;
        p._methods = m, n.defaults.perAction[a] = p;
      }
    } }, Lf = Gf;
    Qo.default = Lf;
    var bn = {};
    function As(n) {
      return As = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, As(n);
    }
    __name(As, "As");
    u(As, "Io");
    function jf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(jf, "jf");
    u(jf, "Do");
    function _s(n, o) {
      return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, _s(n, o);
    }
    __name(_s, "_s");
    u(_s, "Ao");
    function Bf(n, o) {
      if (o && (As(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ks(n);
    }
    __name(Bf, "Bf");
    u(Bf, "zo");
    function ks(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(ks, "ks");
    u(ks, "Co");
    function ea(n) {
      return ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, ea(n);
    }
    __name(ea, "ea");
    u(ea, "Ro"), Object.defineProperty(bn, "__esModule", { value: true }), bn.default = bn.PointerEvent = void 0;
    var Hf = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), w && _s(g, w);
      })(E, n);
      var o, a, s, p, m = (s = E, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (g) {
          return false;
        }
      }(), function() {
        var g, w = ea(s);
        if (p) {
          var C = ea(this).constructor;
          g = Reflect.construct(w, arguments, C);
        } else
          g = w.apply(this, arguments);
        return Bf(this, g);
      });
      function E(g, w, C, T, I, N) {
        var G;
        if (function(X, H) {
          if (!(X instanceof H))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = m.call(this, I), J.pointerExtend(ks(G), C), C !== w && J.pointerExtend(ks(G), w), G.timeStamp = N, G.originalEvent = C, G.type = g, G.pointerId = J.getPointerId(w), G.pointerType = J.getPointerType(w), G.target = T, G.currentTarget = null, g === "tap") {
          var D = I.getPointerIndex(w);
          G.dt = G.timeStamp - I.pointers[D].downTime;
          var B = G.timeStamp - I.tapTime;
          G.double = !!I.prevTap && I.prevTap.type !== "doubletap" && I.prevTap.target === G.target && B < 500;
        } else
          g === "doubletap" && (G.dt = w.timeStamp - I.tapTime, G.double = true);
        return G;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "_subtractOrigin", value: function(g) {
        var w = g.x, C = g.y;
        return this.pageX -= w, this.pageY -= C, this.clientX -= w, this.clientY -= C, this;
      } }, { key: "_addOrigin", value: function(g) {
        var w = g.x, C = g.y;
        return this.pageX += w, this.pageY += C, this.clientX += w, this.clientY += C, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && jf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Gt.BaseEvent);
    bn.PointerEvent = bn.default = Hf;
    var Ni = {};
    Object.defineProperty(Ni, "__esModule", { value: true }), Ni.default = void 0;
    var ta = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = ta, n.defaults.actions.pointerEvents = ta.defaults, (0, W.default)(n.actions.phaselessTypes, ta.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && Ds(n), Yr({ interaction: a, pointer: s, event: p, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget, w = a.pointerIndex, C = p.pointers[w].hold, T = _.getPath(g), I = { interaction: p, pointer: m, event: E, eventTarget: g, type: "hold", targets: [], path: T, node: null }, N = 0; N < T.length; N++) {
          var G = T[N];
          I.node = G, s.fire("pointerEvents:collect-targets", I);
        }
        if (I.targets.length) {
          for (var D = 1 / 0, B = 0; B < I.targets.length; B++) {
            var X = I.targets[B].eventable.options.holdDuration;
            X < D && (D = X);
          }
          C.duration = D, C.timeout = setTimeout(function() {
            Yr({ interaction: p, eventTarget: g, pointer: m, event: E, type: "hold" }, s);
          }, D);
        }
      })(n, o), Yr(n, o);
    }, "interactions:up": function(n, o) {
      Ds(n), Yr(n, o), function(a, s) {
        var p = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerWasMoved || Yr({ interaction: p, eventTarget: g, pointer: m, event: E, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      Ds(n), Yr(n, o);
    } }, PointerEvent: bn.PointerEvent, fire: Yr, collectEventTargets: $u, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Yr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget, E = n.type, g = n.targets, w = g === void 0 ? $u(n, o) : g, C = new bn.PointerEvent(E, s, p, m, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: C });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: m, targets: w, type: E, pointerEvent: C }, I = 0; I < w.length; I++) {
        var N = w[I];
        for (var G in N.props || {})
          C[G] = N.props[G];
        var D = (0, Ge.default)(N.eventable, N.node);
        if (C._subtractOrigin(D), C.eventable = N.eventable, C.currentTarget = N.node, N.eventable.fire(C), C._addOrigin(D), C.immediatePropagationStopped || C.propagationStopped && I + 1 < w.length && w[I + 1].node !== C.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), E === "tap") {
        var B = C.double ? Yr({ interaction: a, pointer: s, event: p, eventTarget: m, type: "doubletap" }, o) : C;
        a.prevTap = B, a.tapTime = B.timeStamp;
      }
      return C;
    }
    __name(Yr, "Yr");
    u(Yr, "Yo");
    function $u(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget, E = n.type, g = a.getPointerIndex(s), w = a.pointers[g];
      if (E === "tap" && (a.pointerWasMoved || !w || w.downTarget !== m))
        return [];
      for (var C = _.getPath(m), T = { interaction: a, pointer: s, event: p, eventTarget: m, type: E, path: C, targets: [], node: null }, I = 0; I < C.length; I++) {
        var N = C[I];
        T.node = N, o.fire("pointerEvents:collect-targets", T);
      }
      return E === "hold" && (T.targets = T.targets.filter(function(G) {
        var D;
        return G.eventable.options.holdDuration === ((D = a.pointers[g]) == null ? void 0 : D.hold.duration);
      })), T.targets;
    }
    __name($u, "$u");
    u($u, "Wo");
    function Ds(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(Ds, "Ds");
    u(Ds, "Lo");
    var $f = ta;
    Ni.default = $f;
    var ra = {};
    function Ff(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Ff, "Ff");
    u(Ff, "No"), Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0;
    var qf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Ni.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Ff, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, p = n.eventTarget, m = n.targets;
      if (s.type === "hold" && m.length) {
        var E = m[0].eventable.options.holdRepeatInterval;
        E <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: p, type: "hold", pointer: s, event: s }, o);
        }, E));
      }
    } }) }, Wf = qf;
    ra.default = Wf;
    var na = {};
    function Uf(n) {
      return (0, W.default)(this.events.options, n), this;
    }
    __name(Uf, "Uf");
    u(Uf, "Ho"), Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0;
    var Vf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = Uf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var m = a.call(this, s, p);
        return m === this && (this.events.options[s] = p), m;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, m = n.eventTarget;
      o.interactables.forEachMatch(s, function(E) {
        var g = E.events, w = g.options;
        g.types[p] && g.types[p].length && E.testIgnoreAllow(w, s, m) && a.push({ node: s, eventable: g, props: { interactable: E } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, W.default)(a.events.options, o.pointerEvents.defaults), (0, W.default)(a.events.options, s.pointerEvents || {});
    } } }, Yf = Vf;
    na.default = Yf;
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Xf = { id: "pointer-events", install: function(n) {
      n.usePlugin(Ni), n.usePlugin(ra.default), n.usePlugin(na.default);
    } }, Zf = Xf;
    ia.default = Zf;
    var zi = {};
    function Fu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, m) {
          for (var E = c.default.string(s.target) ? ye.from(s._context.querySelectorAll(s.target)) : [s.target], g = m.window.Promise, w = g ? [] : null, C = function() {
            var I = E[T], N = s.getRect(I);
            if (!N)
              return "break";
            var G = ye.find(m.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === I && re.prepared.name === p.name;
            }), D = void 0;
            if (G)
              G.move(), w && (D = G._reflowPromise || new g(function(re) {
                G._reflowResolve = re;
              }));
            else {
              var B = (0, ue.tlbrToXywh)(N), X = { page: { x: B.x, y: B.y }, client: { x: B.x, y: B.y }, timeStamp: m.now() }, H = J.coordsToEvent(X);
              D = function(re, oe, de, Se, Le) {
                var me = re.interactions.new({ pointerType: "reflow" }), Re = { interaction: me, event: Le, pointer: Le, eventTarget: de, phase: "reflow" };
                me.interactable = oe, me.element = de, me.prevEvent = Le, me.updatePointer(Le, Le, de, true), J.setZeroCoords(me.coords.delta), (0, Lt.copyAction)(me.prepared, Se), me._doPhase(Re);
                var Yt = re.window.Promise, Dr = Yt ? new Yt(function(zs) {
                  me._reflowResolve = zs;
                }) : void 0;
                return me._reflowPromise = Dr, me.start(Se, oe, de), me._interacting ? (me.move(Re), me.end(Le)) : (me.stop(), me._reflowResolve()), me.removePointer(Le, Le), Dr;
              }(m, s, I, p, H);
            }
            w && w.push(D);
          }, T = 0; T < E.length && C() !== "break"; T++)
            ;
          return w && g.all(w).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Fu, "Fu");
    u(Fu, "ni"), Object.defineProperty(zi, "__esModule", { value: true }), zi.default = void 0, zi.install = Fu;
    var Jf = { id: "reflow", install: Fu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), ye.remove(o.interactions.list, a));
    } } }, Kf = Jf;
    zi.default = Kf;
    var Vt = { exports: {} };
    function Rs(n) {
      return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rs(n);
    }
    __name(Rs, "Rs");
    u(Rs, "ai"), Object.defineProperty(Vt.exports, "__esModule", { value: true }), Vt.exports.default = void 0, et.default.use(Vn.default), et.default.use(mn.default), et.default.use(ia.default), et.default.use(Yn.default), et.default.use(Qo.default), et.default.use(No.default), et.default.use(Ut.default), et.default.use(Wr.default), et.default.use(zi.default);
    var Qf = et.default;
    if (Vt.exports.default = Qf, Rs(Vt) === "object" && Vt)
      try {
        Vt.exports = et.default;
      } catch (n) {
      }
    et.default.default = et.default, Vt = Vt.exports;
    var yn = { exports: {} };
    function Ns(n) {
      return Ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ns(n);
    }
    __name(Ns, "Ns");
    u(Ns, "ui"), Object.defineProperty(yn.exports, "__esModule", { value: true }), yn.exports.default = void 0;
    var eh = Vt.default;
    if (yn.exports.default = eh, Ns(yn) === "object" && yn)
      try {
        yn.exports = Vt.default;
      } catch (n) {
      }
    return Vt.default.default = Vt.default, yn.exports;
  });
});
var ud = oa((ld, Wl) => {
  (function(r) {
    "use strict";
    var e = /* @__PURE__ */ __name(function() {
    }, "e"), t = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(d) {
      return setTimeout(d, 16);
    };
    function i() {
      var d = this;
      d.reads = [], d.writes = [], d.raf = t.bind(r), e("initialized", d);
    }
    __name(i, "i");
    u(i, "FastDom"), i.prototype = { constructor: i, runTasks: function(d) {
      e("run tasks");
      for (var h; h = d.shift(); )
        h();
    }, measure: function(d, h) {
      e("measure");
      var x = h ? d.bind(h) : d;
      return this.reads.push(x), l(this), x;
    }, mutate: function(d, h) {
      e("mutate");
      var x = h ? d.bind(h) : d;
      return this.writes.push(x), l(this), x;
    }, clear: function(d) {
      return e("clear", d), f(this.reads, d) || f(this.writes, d);
    }, extend: function(d) {
      if (e("extend", d), typeof d != "object")
        throw new Error("expected object");
      var h = Object.create(this);
      return b(h, d), h.fastdom = this, h.initialize && h.initialize(), h;
    }, catch: null };
    function l(d) {
      d.scheduled || (d.scheduled = true, d.raf(c.bind(null, d)), e("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(d) {
      e("flush");
      var h = d.writes, x = d.reads, y;
      try {
        e("flushing reads", x.length), d.runTasks(x), e("flushing writes", h.length), d.runTasks(h);
      } catch (S) {
        y = S;
      }
      if (d.scheduled = false, (x.length || h.length) && l(d), y)
        if (e("task errored", y.message), d.catch)
          d.catch(y);
        else
          throw y;
    }
    __name(c, "c");
    u(c, "flush");
    function f(d, h) {
      var x = d.indexOf(h);
      return !!~x && !!d.splice(x, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function b(d, h) {
      for (var x in h)
        h.hasOwnProperty(x) && (d[x] = h[x]);
    }
    __name(b, "b");
    u(b, "mixin");
    var v = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return v;
    }) : typeof Wl == "object" && (Wl.exports = v);
  })(typeof window != "undefined" ? window : ld);
});
var fd = oa((Vl, dd) => {
  (function(r) {
    "use strict";
    var e = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, t = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, i = u(function(d) {
      var h = Math.PI / 4;
      if (-h > d || d > h)
        return Math.cos(d) - 1;
      var x = d * d;
      return x * (x * (x * (x * (x * (x * (x * (x / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(d, h) {
      var x = Math.abs(d), y = Math.abs(h);
      return x < 3e3 && y < 3e3 ? Math.sqrt(x * x + y * y) : (x < y ? (x = y, y = d / h) : y = h / d, x * Math.sqrt(1 + y * y));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(d, h) {
      var x = Math.abs(d), y = Math.abs(h);
      return d === 0 ? Math.log(y) : h === 0 ? Math.log(x) : x < 3e3 && y < 3e3 ? Math.log(d * d + h * h) * 0.5 : (d = d / 2, h = h / 2, 0.5 * Math.log(d * d + h * h) + Math.LN2);
    }
    __name(f, "f");
    u(f, "logHypot");
    var b = u(function(d, h) {
      var x = { re: 0, im: 0 };
      if (d == null)
        x.re = x.im = 0;
      else if (h !== void 0)
        x.re = d, x.im = h;
      else
        switch (typeof d) {
          case "object":
            if ("im" in d && "re" in d)
              x.re = d.re, x.im = d.im;
            else if ("abs" in d && "arg" in d) {
              if (!Number.isFinite(d.abs) && Number.isFinite(d.arg))
                return v.INFINITY;
              x.re = d.abs * Math.cos(d.arg), x.im = d.abs * Math.sin(d.arg);
            } else if ("r" in d && "phi" in d) {
              if (!Number.isFinite(d.r) && Number.isFinite(d.phi))
                return v.INFINITY;
              x.re = d.r * Math.cos(d.phi), x.im = d.r * Math.sin(d.phi);
            } else
              d.length === 2 ? (x.re = d[0], x.im = d[1]) : c();
            break;
          case "string":
            x.im = x.re = 0;
            var y = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, O = 0;
            y === null && c();
            for (var M = 0; M < y.length; M++) {
              var k = y[M];
              k === " " || k === "	" || k === `
` || (k === "+" ? S++ : k === "-" ? O++ : k === "i" || k === "I" ? (S + O === 0 && c(), y[M + 1] !== " " && !isNaN(y[M + 1]) ? (x.im += parseFloat((O % 2 ? "-" : "") + y[M + 1]), M++) : x.im += parseFloat((O % 2 ? "-" : "") + "1"), S = O = 0) : ((S + O === 0 || isNaN(k)) && c(), y[M + 1] === "i" || y[M + 1] === "I" ? (x.im += parseFloat((O % 2 ? "-" : "") + k), M++) : x.re += parseFloat((O % 2 ? "-" : "") + k), S = O = 0));
            }
            S + O > 0 && c();
            break;
          case "number":
            x.im = 0, x.re = d;
            break;
          default:
            c();
        }
      return isNaN(x.re) || isNaN(x.im), x;
    }, "parse");
    function v(d, h) {
      if (!(this instanceof v))
        return new v(d, h);
      var x = b(d, h);
      this.re = x.re, this.im = x.im;
    }
    __name(v, "v");
    u(v, "Complex"), v.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new v(this.re / d, this.im / d);
    }, add: function(d, h) {
      var x = new v(d, h);
      return this.isInfinite() && x.isInfinite() ? v.NAN : this.isInfinite() || x.isInfinite() ? v.INFINITY : new v(this.re + x.re, this.im + x.im);
    }, sub: function(d, h) {
      var x = new v(d, h);
      return this.isInfinite() && x.isInfinite() ? v.NAN : this.isInfinite() || x.isInfinite() ? v.INFINITY : new v(this.re - x.re, this.im - x.im);
    }, mul: function(d, h) {
      var x = new v(d, h);
      return this.isInfinite() && x.isZero() || this.isZero() && x.isInfinite() ? v.NAN : this.isInfinite() || x.isInfinite() ? v.INFINITY : x.im === 0 && this.im === 0 ? new v(this.re * x.re, 0) : new v(this.re * x.re - this.im * x.im, this.re * x.im + this.im * x.re);
    }, div: function(d, h) {
      var x = new v(d, h);
      if (this.isZero() && x.isZero() || this.isInfinite() && x.isInfinite())
        return v.NAN;
      if (this.isInfinite() || x.isZero())
        return v.INFINITY;
      if (this.isZero() || x.isInfinite())
        return v.ZERO;
      d = this.re, h = this.im;
      var y = x.re, S = x.im, O, M;
      return S === 0 ? new v(d / y, h / y) : Math.abs(y) < Math.abs(S) ? (M = y / S, O = y * M + S, new v((d * M + h) / O, (h * M - d) / O)) : (M = S / y, O = S * M + y, new v((d + h * M) / O, (h - d * M) / O));
    }, pow: function(d, h) {
      var x = new v(d, h);
      if (d = this.re, h = this.im, x.isZero())
        return v.ONE;
      if (x.im === 0) {
        if (h === 0 && d > 0)
          return new v(Math.pow(d, x.re), 0);
        if (d === 0)
          switch ((x.re % 4 + 4) % 4) {
            case 0:
              return new v(Math.pow(h, x.re), 0);
            case 1:
              return new v(0, Math.pow(h, x.re));
            case 2:
              return new v(-Math.pow(h, x.re), 0);
            case 3:
              return new v(0, -Math.pow(h, x.re));
          }
      }
      if (d === 0 && h === 0 && x.re > 0 && x.im >= 0)
        return v.ZERO;
      var y = Math.atan2(h, d), S = f(d, h);
      return d = Math.exp(x.re * S - x.im * y), h = x.im * S + x.re * y, new v(d * Math.cos(h), d * Math.sin(h));
    }, sqrt: function() {
      var d = this.re, h = this.im, x = this.abs(), y, S;
      if (d >= 0) {
        if (h === 0)
          return new v(Math.sqrt(d), 0);
        y = 0.5 * Math.sqrt(2 * (x + d));
      } else
        y = Math.abs(h) / Math.sqrt(2 * (x - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (x - d)) : S = Math.abs(h) / Math.sqrt(2 * (x + d)), new v(y, h < 0 ? -S : S);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im === 0, new v(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, h = this.im;
      return new v(Math.expm1(d) * Math.cos(h) + i(h), Math.exp(d) * Math.sin(h));
    }, log: function() {
      var d = this.re, h = this.im;
      return h === 0 && d > 0, new v(f(d, h), Math.atan2(h, d));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, h = this.im;
      return new v(Math.sin(d) * e(h), Math.cos(d) * t(h));
    }, cos: function() {
      var d = this.re, h = this.im;
      return new v(Math.cos(d) * e(h), -Math.sin(d) * t(h));
    }, tan: function() {
      var d = 2 * this.re, h = 2 * this.im, x = Math.cos(d) + e(h);
      return new v(Math.sin(d) / x, t(h) / x);
    }, cot: function() {
      var d = 2 * this.re, h = 2 * this.im, x = Math.cos(d) - e(h);
      return new v(-Math.sin(d) / x, t(h) / x);
    }, sec: function() {
      var d = this.re, h = this.im, x = 0.5 * e(2 * h) + 0.5 * Math.cos(2 * d);
      return new v(Math.cos(d) * e(h) / x, Math.sin(d) * t(h) / x);
    }, csc: function() {
      var d = this.re, h = this.im, x = 0.5 * e(2 * h) - 0.5 * Math.cos(2 * d);
      return new v(Math.sin(d) * e(h) / x, -Math.cos(d) * t(h) / x);
    }, asin: function() {
      var d = this.re, h = this.im, x = new v(h * h - d * d + 1, -2 * d * h).sqrt(), y = new v(x.re - h, x.im + d).log();
      return new v(y.im, -y.re);
    }, acos: function() {
      var d = this.re, h = this.im, x = new v(h * h - d * d + 1, -2 * d * h).sqrt(), y = new v(x.re - h, x.im + d).log();
      return new v(Math.PI / 2 - y.im, y.re);
    }, atan: function() {
      var d = this.re, h = this.im;
      if (d === 0) {
        if (h === 1)
          return new v(0, 1 / 0);
        if (h === -1)
          return new v(0, -1 / 0);
      }
      var x = d * d + (1 - h) * (1 - h), y = new v((1 - h * h - d * d) / x, -2 * d / x).log();
      return new v(-0.5 * y.im, 0.5 * y.re);
    }, acot: function() {
      var d = this.re, h = this.im;
      if (h === 0)
        return new v(Math.atan2(1, d), 0);
      var x = d * d + h * h;
      return x !== 0 ? new v(d / x, -h / x).atan() : new v(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new v(0, 1 / 0);
      var x = d * d + h * h;
      return x !== 0 ? new v(d / x, -h / x).acos() : new v(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new v(Math.PI / 2, 1 / 0);
      var x = d * d + h * h;
      return x !== 0 ? new v(d / x, -h / x).asin() : new v(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, h = this.im;
      return new v(t(d) * Math.cos(h), e(d) * Math.sin(h));
    }, cosh: function() {
      var d = this.re, h = this.im;
      return new v(e(d) * Math.cos(h), t(d) * Math.sin(h));
    }, tanh: function() {
      var d = 2 * this.re, h = 2 * this.im, x = e(d) + Math.cos(h);
      return new v(t(d) / x, Math.sin(h) / x);
    }, coth: function() {
      var d = 2 * this.re, h = 2 * this.im, x = e(d) - Math.cos(h);
      return new v(t(d) / x, -Math.sin(h) / x);
    }, csch: function() {
      var d = this.re, h = this.im, x = Math.cos(2 * h) - e(2 * d);
      return new v(-2 * t(d) * Math.cos(h) / x, 2 * e(d) * Math.sin(h) / x);
    }, sech: function() {
      var d = this.re, h = this.im, x = Math.cos(2 * h) + e(2 * d);
      return new v(2 * e(d) * Math.cos(h) / x, -2 * t(d) * Math.sin(h) / x);
    }, asinh: function() {
      var d = this.im;
      this.im = -this.re, this.re = d;
      var h = this.asin();
      return this.re = -this.im, this.im = d, d = h.re, h.re = -h.im, h.im = d, h;
    }, acosh: function() {
      var d = this.acos();
      if (d.im <= 0) {
        var h = d.re;
        d.re = -d.im, d.im = h;
      } else {
        var h = d.im;
        d.im = -d.re, d.re = h;
      }
      return d;
    }, atanh: function() {
      var d = this.re, h = this.im, x = d > 1 && h === 0, y = 1 - d, S = 1 + d, O = y * y + h * h, M = O !== 0 ? new v((S * y - h * h) / O, (h * y + S * h) / O) : new v(d !== -1 ? d / 0 : 0, h !== 0 ? h / 0 : 0), k = M.re;
      return M.re = f(M.re, M.im) / 2, M.im = Math.atan2(M.im, k) / 2, x && (M.im = -M.im), M;
    }, acoth: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new v(0, Math.PI / 2);
      var x = d * d + h * h;
      return x !== 0 ? new v(d / x, -h / x).atanh() : new v(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, h = this.im;
      if (h === 0)
        return new v(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var x = d * d + h * h;
      return x !== 0 ? new v(d / x, -h / x).asinh() : new v(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, h = this.im;
      if (this.isZero())
        return v.INFINITY;
      var x = d * d + h * h;
      return x !== 0 ? new v(d / x, -h / x).acosh() : new v(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return v.INFINITY;
      if (this.isInfinite())
        return v.ZERO;
      var d = this.re, h = this.im, x = d * d + h * h;
      return new v(d / x, -h / x);
    }, conjugate: function() {
      return new v(this.re, -this.im);
    }, neg: function() {
      return new v(-this.re, -this.im);
    }, ceil: function(d) {
      return d = Math.pow(10, d || 0), new v(Math.ceil(this.re * d) / d, Math.ceil(this.im * d) / d);
    }, floor: function(d) {
      return d = Math.pow(10, d || 0), new v(Math.floor(this.re * d) / d, Math.floor(this.im * d) / d);
    }, round: function(d) {
      return d = Math.pow(10, d || 0), new v(Math.round(this.re * d) / d, Math.round(this.im * d) / d);
    }, equals: function(d, h) {
      var x = new v(d, h);
      return Math.abs(x.re - this.re) <= v.EPSILON && Math.abs(x.im - this.im) <= v.EPSILON;
    }, clone: function() {
      return new v(this.re, this.im);
    }, toString: function() {
      var d = this.re, h = this.im, x = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < v.EPSILON && (d = 0), Math.abs(h) < v.EPSILON && (h = 0), h === 0 ? x + d : (d !== 0 ? (x += d, x += " ", h < 0 ? (h = -h, x += "-") : x += "+", x += " ") : h < 0 && (h = -h, x += "-"), h !== 1 && (x += h), x + "i"));
    }, toVector: function() {
      return [this.re, this.im];
    }, valueOf: function() {
      return this.im === 0 ? this.re : null;
    }, isNaN: function() {
      return isNaN(this.re) || isNaN(this.im);
    }, isZero: function() {
      return this.im === 0 && this.re === 0;
    }, isFinite: function() {
      return isFinite(this.re) && isFinite(this.im);
    }, isInfinite: function() {
      return !(this.isNaN() || this.isFinite());
    } }, v.ZERO = new v(0, 0), v.ONE = new v(1, 0), v.I = new v(0, 1), v.PI = new v(Math.PI, 0), v.E = new v(Math.E, 0), v.INFINITY = new v(1 / 0, 1 / 0), v.NAN = new v(NaN, NaN), v.EPSILON = 1e-15, typeof define == "function" && define.amd ? define([], function() {
      return v;
    }) : typeof Vl == "object" ? (Object.defineProperty(v, "__esModule", { value: true }), v.default = v, v.Complex = v, dd.exports = v) : r.Complex = v;
  })(Vl);
});
var Zr = ei(Vu());
function Yu(r) {
  let e = Jr(r);
  return new Zr.default(e).valueOf() * Math.PI;
}
__name(Yu, "Yu");
u(Yu, "Y");
function ji(r) {
  let e = Jr(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(ji, "ji");
u(ji, "W");
function Xu(r, e) {
  return new Zr.default(Jr(r)).valueOf() < new Zr.default(Jr(e)).valueOf();
}
__name(Xu, "Xu");
u(Xu, "Q");
function Zu(r, e) {
  return new Zr.default(Jr(r)).valueOf() > new Zr.default(Jr(e)).valueOf();
}
__name(Zu, "Zu");
u(Zu, "J");
function Ju(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = Jr(r);
    return new Zr.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(Ju, "Ju");
u(Ju, "j");
function Jr(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(Jr, "Jr");
u(Jr, "l");
function Ku(r) {
  try {
    let e = Jr(r), t = new Zr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Ku, "Ku");
u(Ku, "_");
var sh = Object.prototype.toString.call({});
var lh = "!recursion-limit!";
var uh = 10;
function rt(r, e = uh) {
  return ch(r) || ph(r, e) || dh(r, e);
}
__name(rt, "rt");
u(rt, "c");
function ch(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(ch, "ch");
u(ch, "O");
function ph(r, e) {
  if (e === 0)
    return lh;
  if (r instanceof Map)
    return fh(r, e);
  if (r instanceof Set)
    return hh(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return vh(r, e);
}
__name(ph, "ph");
u(ph, "G");
function dh(r, e) {
  let t = String(r);
  return t !== sh ? t : mh(r, e);
}
__name(dh, "dh");
u(dh, "R");
function fh(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = rt(i, e - 1), f = rt(l, e - 1);
    t.push(`${c}: ${f}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(fh, "fh");
u(fh, "N");
function hh(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(rt(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
__name(hh, "hh");
u(hh, "q");
function vh(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(rt(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
__name(vh, "vh");
u(vh, "D");
function mh(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], f = rt(l, e - 1), b = rt(c, e - 1);
    t.push(`${f}: ${b}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(mh, "mh");
u(mh, "v");
var Ls = 0;
var tt = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Ls++;
    try {
      this.details = Ls === 1 ? rt(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Ls--;
    }
  }
}, "d");
var gh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var jt = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -jt.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(jt.parseFloat(r.substr(1)));
    let e = jt.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -jt.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = jt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = jt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of gh)
      if (r(e))
        return e;
  }
  constructor(r, e, t, i) {
    this.allowAbbreviation = r, this.maxAbbreviationError = e, this.fixedDigits = t, this.itemSeparator = i;
  }
  formatFloat(r) {
    return this.allowAbbreviation ? this.abbreviateFloat(r, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? r.toFixed(this.fixedDigits) : String(r);
  }
  abbreviateFloat(r, e = 0, t = void 0) {
    if (Math.abs(r) < e)
      return "0";
    if (r < 0)
      return `-${this.abbreviateFloat(-r, e, t)}`;
    let i = jt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = jt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var Li = jt;
Li.CONSISTENT = new jt(false, 0, 2, ", "), Li.EXACT = new jt(true, 0, void 0, ", "), Li.MINIFIED = new jt(true, 0, void 0, ","), Li.SIMPLIFIED = new jt(true, 5e-4, 3, ", ");
var F = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    F.need(r != null, "notNull");
  }
  static snappedCosSin(r) {
    let e = Math.PI / 4, t = Math.round(r / e);
    if (t * e === r) {
      let i = Math.sqrt(0.5);
      return [[1, 0], [i, i], [0, 1], [-i, i], [-1, 0], [-i, -i], [0, -1], [i, -i]][t & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
}, "y");
var ce = u(class {
  static from(r) {
    if (r instanceof ce)
      return r;
    if (typeof r == "number")
      return new ce(r, 0);
    throw new tt("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = F.snappedCosSin(e);
    return new ce(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof ce)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new tt("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof ce)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new tt("Unrecognized value type.", { v: r });
  }
  static parse(r) {
    let e = r.match(/^\s*([+-]?\d+(?:\.\d*)?(?:e[+-]?\d+)?)\s*(?:([+-])\s*i)?\s*$/);
    if (e) {
      let [, t, i, l] = e;
      t === void 0 && (t = "0"), i === void 0 && (i = "+"), l === void 0 && (l = "0");
      let [c, f] = [t, l].map((d) => parseFloat(d)), [b, v] = [i, i].map((d) => d === "-" ? -1 : 1);
      return new ce(c * b, f * v);
    }
    throw new tt("Invalid complex number string.", { s: r });
  }
  constructor(r, e) {
    this.real = r, this.imag = e;
  }
  static rootsOfQuadratic(r, e, t) {
    if (r = ce.from(r), e = ce.from(e), t = ce.from(t), r.isEqualTo(0)) {
      if (!e.isEqualTo(0))
        return [t.times(-1).dividedBy(e)];
      if (!t.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let i = e.times(e).minus(r.times(t).times(4)).sqrts(), l = e.times(-1), c = r.times(2);
    return i.map((f) => l.minus(f).dividedBy(c));
  }
  isEqualTo(r) {
    return r instanceof ce ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (r instanceof ce || typeof r == "number") {
      let t = this.minus(ce.from(r));
      return Math.abs(t.real) <= e && Math.abs(t.imag) <= e && t.abs() <= e;
    }
    return false;
  }
  norm2() {
    return this.real * this.real + this.imag * this.imag;
  }
  abs() {
    return Math.sqrt(this.norm2());
  }
  unit() {
    let r = this.norm2();
    return r < 1e-5 ? ce.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let e = ce.from(r);
    return new ce(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = ce.from(r);
    return new ce(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = ce.from(r);
    return new ce(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = ce.from(r), t = e.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let i = this.times(e.conjugate());
    return new ce(i.real / t, i.imag / t);
  }
  sqrts() {
    let [r, e] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(r * r + e * e));
    if (t === 0)
      return [ce.ZERO];
    if (e === 0 && r < 0)
      return [new ce(0, t), new ce(0, -t)];
    let i = this.phase() / 2, l = ce.polar(t, i);
    return [l, l.times(-1)];
  }
  conjugate() {
    return new ce(this.real, -this.imag);
  }
  toString(r) {
    return r = r || Li.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new ce(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new ce(Math.sqrt(this.real), 0) : ce.ZERO.isEqualTo(r) ? ce.ONE : this.isEqualTo(ce.ZERO) ? ce.ZERO : this.ln().times(ce.from(r)).exp();
  }
  exp() {
    return ce.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(ce.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(ce.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new ce(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new ce(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(r) {
    return Math.abs(this.imag) <= r.maxAbbreviationError ? r.formatFloat(this.real) : Math.abs(this.real) <= r.maxAbbreviationError ? Math.abs(this.imag - 1) <= r.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= r.maxAbbreviationError ? "-i" : `${r.formatFloat(this.imag)}i` : this.toStringBothValues(r);
  }
  toStringBothValues(r) {
    let e = this.imag >= 0 ? "+" : "-", t = r.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= r.maxAbbreviationError ? "" : r.formatFloat(Math.abs(this.imag));
    return `${(r.allowAbbreviation || r.fixedDigits === void 0 || this.real < 0 ? "" : "+") + r.formatFloat(this.real) + e + t}i`;
  }
}, "o");
var Xr = ce;
Xr.ZERO = new ce(0, 0), Xr.ONE = new ce(1, 0), Xr.I = new ce(0, 1);
var ua = "H";
var ca = "X";
var pa = "Y";
var da = "Z";
var fa = "P";
var ha = "T";
var va = "X^\xBD";
var ma = "Rx";
var ga = "Ry";
var ba = "Rz";
var js = "Swap";
var Bs = "\u2022";
var Hs = "Bloch";
var Qu = "|0>";
var ec = "|1>";
var ya = "Measure";
var $s = /* @__PURE__ */ new WeakSet();
function qs(r) {
  $s.add(r), r.shadowRoot && Ws(r.shadowRoot), Vs(r), Us(r.ownerDocument);
}
__name(qs, "qs");
u(qs, "bind");
function Ws(r) {
  Vs(r), Us(r);
}
__name(Ws, "Ws");
u(Ws, "bindShadow");
var wa = /* @__PURE__ */ new WeakMap();
function Us(r = document) {
  if (wa.has(r))
    return wa.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Fs(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && Vs(f);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, wa.delete(r), t.disconnect();
  } };
  return wa.set(r, i), i;
}
__name(Us, "Us");
u(Us, "listenForBind");
function Vs(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Fs(e);
  r instanceof Element && r.hasAttribute("data-action") && Fs(r);
}
__name(Vs, "Vs");
u(Vs, "bindElements");
function bh(r) {
  let e = r.currentTarget;
  for (let t of tc(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      $s.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && $s.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(bh, "bh");
u(bh, "handleEvent");
function* tc(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(tc, "tc");
u(tc, "bindings");
function Fs(r) {
  for (let e of tc(r))
    r.addEventListener(e.type, bh);
}
__name(Fs, "Fs");
u(Fs, "bindActions");
function Ys(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(Ys, "Ys");
u(Ys, "register");
function Xs(r, e) {
  let t = r.tagName.toLowerCase();
  if (r.shadowRoot) {
    for (let i of r.shadowRoot.querySelectorAll(`[data-target~="${t}.${e}"]`))
      if (!i.closest(t))
        return i;
  }
  for (let i of r.querySelectorAll(`[data-target~="${t}.${e}"]`))
    if (i.closest(t) === r)
      return i;
}
__name(Xs, "Xs");
u(Xs, "findTarget");
function Zs(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(Zs, "Zs");
u(Zs, "findTargets");
function we(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Xs(this, e);
  } });
}
__name(we, "we");
u(we, "target");
function It(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Zs(this, e);
  } });
}
__name(It, "It");
u(It, "targets");
function Js(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(Js, "Js");
u(Js, "autoShadowRoot");
var xa = /* @__PURE__ */ new WeakMap();
function R(r, e) {
  xa.has(r) || xa.set(r, []), xa.get(r).push(e);
}
__name(R, "R");
u(R, "attr");
function Ks(r, e) {
  e || (e = rc(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = nc(t), c = { configurable: true, get() {
      return this.getAttribute(l) || "";
    }, set(f) {
      this.setAttribute(l, f || "");
    } };
    typeof i == "number" ? c = { configurable: true, get() {
      return Number(this.getAttribute(l) || 0);
    }, set(f) {
      this.setAttribute(l, f);
    } } : typeof i == "boolean" && (c = { configurable: true, get() {
      return this.hasAttribute(l);
    }, set(f) {
      this.toggleAttribute(l, f);
    } }), Object.defineProperty(r, t, c), t in r && !r.hasAttribute(l) && c.set.call(r, i);
  }
}
__name(Ks, "Ks");
u(Ks, "initializeAttrs");
function rc(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = xa.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(rc, "rc");
u(rc, "getAttrNames");
function nc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(nc, "nc");
u(nc, "attrToAttributeName");
function Qs(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...rc(r.prototype)].map(nc).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Qs, "Qs");
u(Qs, "defineObservedAttributes");
var yh = /* @__PURE__ */ new WeakSet();
function ic(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), yh.add(r), Js(r), Ks(r), qs(r), e && e.call(r), r.shadowRoot && Ws(r.shadowRoot);
}
__name(ic, "ic");
u(ic, "initializeInstance");
function oc(r) {
  Qs(r), Ys(r);
}
__name(oc, "oc");
u(oc, "initializeClass");
function ee(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    ic(this, e);
  }, oc(r);
}
__name(ee, "ee");
u(ee, "controller");
function Oe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.active = false;
    }
    activate() {
      this.active = true, this.dispatchEvent(new Event("operation-active", { bubbles: true }));
    }
    deactivate() {
      this.active = false;
    }
  }
  __name(e, "e");
  return u(e, "ActivateableMixinClass"), A([R], e.prototype, "active", 2), e;
}
__name(Oe, "Oe");
u(Oe, "ActivateableMixin");
var wn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function Kr(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u(e, "AngleableMixinClass"), A([R], e.prototype, "angle", 2), A([R], e.prototype, "reducedAngle", 2), e;
}
__name(Kr, "Kr");
u(Kr, "AngleableMixin");
var xn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function Fe(r) {
  class e extends r {
    set controls(i) {
      this.setAttribute("data-controls", i.sort().join());
    }
    get controls() {
      let i = this.getAttribute("data-controls");
      return i === null ? [] : i === "" ? [] : i.split(",").map((l) => parseInt(l)).sort();
    }
    get isControlled() {
      return this.controls.length > 0;
    }
  }
  __name(e, "e");
  return u(e, "ControllableMixinClass"), e;
}
__name(Fe, "Fe");
u(Fe, "ControllableMixin");
function He(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.disabled = false;
    }
    get enabled() {
      return !this.disabled;
    }
    enable() {
      this.disabled = false;
    }
    disable() {
      this.disabled = true;
    }
  }
  __name(e, "e");
  return u(e, "DisableableMixinClass"), A([R], e.prototype, "disabled", 2), e;
}
__name(He, "He");
u(He, "DisableableMixin");
var U = u(function() {
  return U = Object.assign || u(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, "__assign"), U.apply(this, arguments);
}, "__assign");
function ti(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(ti, "ti");
u(ti, "__rest");
function ve(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(ve, "ve");
u(ve, "__values");
function ge(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), l, c = [], f;
  try {
    for (; (e === void 0 || e-- > 0) && !(l = i.next()).done; )
      c.push(l.value);
  } catch (b) {
    f = { error: b };
  } finally {
    try {
      l && !l.done && (t = i.return) && t.call(i);
    } finally {
      if (f)
        throw f.error;
    }
  }
  return c;
}
__name(ge, "ge");
u(ge, "__read");
function Ae(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(Ae, "Ae");
u(Ae, "__spreadArray");
var Ce;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Ce || (Ce = {}));
var Qr;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(Qr || (Qr = {}));
var Bi = Ce.Start;
var ri = Ce.Stop;
var ni = Ce.Raise;
var En = Ce.Send;
var Ea = Ce.Cancel;
var ac = Ce.NullEvent;
var el = Ce.Assign;
var qm = Ce.After;
var Wm = Ce.DoneState;
var Sa = Ce.Log;
var sc = Ce.Init;
var Hi = Ce.Invoke;
var Um = Ce.ErrorExecution;
var tl = Ce.ErrorPlatform;
var rl = Ce.ErrorCustom;
var $i = Ce.Update;
var lc = Ce.Choose;
var uc = Ce.Pure;
var Ca = ".";
var nl = {};
var Ta = "xstate.guard";
var cc = "";
var je = true;
var Oa;
function qi(r, e, t) {
  t === void 0 && (t = Ca);
  var i = ii(r, t), l = ii(e, t);
  return be(l) ? be(i) ? l === i : false : be(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? qi(i[c], l[c]) : false;
  });
}
__name(qi, "qi");
u(qi, "matchesState");
function Ma(r) {
  try {
    return be(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ma, "Ma");
u(Ma, "getEventType");
function Pa(r, e) {
  try {
    return Rr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Pa, "Pa");
u(Pa, "toStatePath");
function wh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(wh, "wh");
u(wh, "isStateLike");
function ii(r, e) {
  if (wh(r))
    return r.value;
  if (Rr(r))
    return Fi(r);
  if (typeof r != "string")
    return r;
  var t = Pa(r, e);
  return Fi(t);
}
__name(ii, "ii");
u(ii, "toStateValue");
function Fi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Fi, "Fi");
u(Fi, "pathToStateValue");
function oi(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(oi, "oi");
u(oi, "mapValues");
function il(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = ve(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var v = b.value, d = r[v];
      !t(d) || (c[v] = e(d, v, r));
    }
  } catch (h) {
    i = { error: h };
  } finally {
    try {
      b && !b.done && (l = f.return) && l.call(f);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(il, "il");
u(il, "mapFilterValues");
var pc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ve(r), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        l = l[b];
      }
    } catch (v) {
      t = { error: v };
    } finally {
      try {
        f && !f.done && (i = c.return) && i.call(c);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return l;
  };
}, "path");
function dc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var f = ve(r), b = f.next(); !b.done; b = f.next()) {
        var v = b.value;
        c = c[e][v];
      }
    } catch (d) {
      i = { error: d };
    } finally {
      try {
        b && !b.done && (l = f.return) && l.call(f);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return c;
  };
}
__name(dc, "dc");
u(dc, "nestedPath");
function Wi(r) {
  if (!r)
    return [[]];
  if (be(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Wi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Wi, "Wi");
u(Wi, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, Ae([], ge(r), false));
}
__name(Ne, "Ne");
u(Ne, "flatten");
function fc(r) {
  return Rr(r) ? r : [r];
}
__name(fc, "fc");
u(fc, "toArrayStrict");
function Bt(r) {
  return r === void 0 ? [] : fc(r);
}
__name(Bt, "Bt");
u(Bt, "toArray");
function Sn(r, e, t) {
  var i, l;
  if (Te(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = ve(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var v = b.value, d = r[v];
      Te(d) ? c[v] = d(e, t.data) : c[v] = d;
    }
  } catch (h) {
    i = { error: h };
  } finally {
    try {
      b && !b.done && (l = f.return) && l.call(f);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(Sn, "Sn");
u(Sn, "mapContext");
function hc(r) {
  return /^(done|error)\./.test(r);
}
__name(hc, "hc");
u(hc, "isBuiltInEvent");
function ol(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
__name(ol, "ol");
u(ol, "isPromiseLike");
function vc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(vc, "vc");
u(vc, "isBehavior");
function Ia(r, e) {
  var t, i, l = ge([[], []], 2), c = l[0], f = l[1];
  try {
    for (var b = ve(r), v = b.next(); !v.done; v = b.next()) {
      var d = v.value;
      e(d) ? c.push(d) : f.push(d);
    }
  } catch (h) {
    t = { error: h };
  } finally {
    try {
      v && !v.done && (i = b.return) && i.call(b);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, f];
}
__name(Ia, "Ia");
u(Ia, "partition");
function mc(r, e) {
  return oi(r.states, function(t, i) {
    if (!!t) {
      var l = (be(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: mc(t, l) };
    }
  });
}
__name(mc, "mc");
u(mc, "updateHistoryStates");
function gc(r, e) {
  return { current: e, states: mc(r, e) };
}
__name(gc, "gc");
u(gc, "updateHistoryValue");
function al(r, e, t, i) {
  je || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var b, v, d = f.assignment, h = { state: i, action: f, _event: e }, x = {};
    if (Te(d))
      x = d(c, e.data, h);
    else
      try {
        for (var y = ve(Object.keys(d)), S = y.next(); !S.done; S = y.next()) {
          var O = S.value, M = d[O];
          x[O] = Te(M) ? M(c, e.data, h) : M;
        }
      } catch (k) {
        b = { error: k };
      } finally {
        try {
          S && !S.done && (v = y.return) && v.call(y);
        } finally {
          if (b)
            throw b.error;
        }
      }
    return Object.assign({}, c, x);
  }, r);
  return l;
}
__name(al, "al");
u(al, "updateContext");
var Ue = u(function() {
}, "warn");
je || (Ue = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function Rr(r) {
  return Array.isArray(r);
}
__name(Rr, "Rr");
u(Rr, "isArray");
function Te(r) {
  return typeof r == "function";
}
__name(Te, "Te");
u(Te, "isFunction");
function be(r) {
  return typeof r == "string";
}
__name(be, "be");
u(be, "isString");
function Aa(r, e) {
  if (!!r)
    return be(r) ? { type: Ta, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: Ta, name: r.name, predicate: r } : r;
}
__name(Aa, "Aa");
u(Aa, "toGuard");
function bc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(bc, "bc");
u(bc, "isObservable");
var xr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Qm = (Oa = {}, Oa[xr] = function() {
  return this;
}, Oa[Symbol.observable] = function() {
  return this;
}, Oa);
function Er(r) {
  return !!r && "__xstatenode" in r;
}
__name(Er, "Er");
u(Er, "isMachine");
function yc(r) {
  return !!r && typeof r.send == "function";
}
__name(yc, "yc");
u(yc, "isActor");
function Ui(r, e) {
  return be(r) || typeof r == "number" ? U({ type: r }, e) : r;
}
__name(Ui, "Ui");
u(Ui, "toEventObject");
function nt(r, e) {
  if (!be(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Ui(r);
  return U({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(nt, "nt");
u(nt, "toSCXMLEvent");
function Cn(r, e) {
  var t = fc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Er(i) ? { target: i, event: r } : U(U({}, i), { event: r });
  });
  return t;
}
__name(Cn, "Cn");
u(Cn, "toTransitionConfigArray");
function wc(r) {
  if (!(r === void 0 || r === cc))
    return Bt(r);
}
__name(wc, "wc");
u(wc, "normalizeTarget");
function xc(r, e, t) {
  if (!je) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
__name(xc, "xc");
u(xc, "reportUnhandledExceptionOnInvocation");
function _a(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === Ta)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var b = c == null ? void 0 : c[e.type];
  if (!b)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return b(t, i.data, f);
}
__name(_a, "_a");
u(_a, "evaluateGuard");
function ka(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(ka, "ka");
u(ka, "toInvokeSource");
function Vi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Vi, "Vi");
u(Vi, "toObserver");
function Yi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Yi, "Yi");
u(Yi, "createInvokeId");
var Tn = nt({ type: sc });
function Da(r, e) {
  return e && e[r] || void 0;
}
__name(Da, "Da");
u(Da, "getActionFunction");
function ai(r, e) {
  var t;
  if (be(r) || typeof r == "number") {
    var i = Da(r, e);
    Te(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Te(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = Da(r.type, e);
    if (Te(i))
      t = U(U({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = U(U(U({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(ai, "ai");
u(ai, "toActionObject");
var Xi = u(function(r, e) {
  if (!r)
    return [];
  var t = Rr(r) ? r : [r];
  return t.map(function(i) {
    return ai(i, e);
  });
}, "toActionObjects");
function Na(r) {
  var e = ai(r);
  return U(U({ id: be(r) ? r : e.id }, e), { type: e.type });
}
__name(Na, "Na");
u(Na, "toActivityDefinition");
function Ec(r) {
  return be(r) ? { type: ni, event: r } : sl(r, { to: Qr.Internal });
}
__name(Ec, "Ec");
u(Ec, "raise");
function xh(r) {
  return { type: ni, _event: nt(r.event) };
}
__name(xh, "xh");
u(xh, "resolveRaise");
function sl(r, e) {
  return { to: e ? e.to : void 0, type: En, event: Te(r) ? r : Ui(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : Ma(r) };
}
__name(sl, "sl");
u(sl, "send");
function Eh(r, e, t, i) {
  var l = { _event: t }, c = nt(Te(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (be(r.delay)) {
    var b = i && i[r.delay];
    f = Te(b) ? b(e, t.data, l) : b;
  } else
    f = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var v = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return U(U({}, r), { to: v, _event: c, event: c.data, delay: f });
}
__name(Eh, "Eh");
u(Eh, "resolveSend");
var Sh = u(function(r, e, t) {
  return U(U({}, r), { value: be(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var Sc = u(function(r) {
  return { type: Ea, sendId: r };
}, "cancel");
function Cc(r) {
  var e = Na(r);
  return { type: Ce.Start, activity: e, exec: void 0 };
}
__name(Cc, "Cc");
u(Cc, "start");
function Tc(r) {
  var e = Te(r) ? r : Na(r);
  return { type: Ce.Stop, activity: e, exec: void 0 };
}
__name(Tc, "Tc");
u(Tc, "stop");
function Ch(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Ce.Stop, activity: l };
  return c;
}
__name(Ch, "Ch");
u(Ch, "resolveStop");
function Oc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Ce.After, "(").concat(r, ")").concat(t);
}
__name(Oc, "Oc");
u(Oc, "after");
function Zi(r, e) {
  var t = "".concat(Ce.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(Zi, "Zi");
u(Zi, "done");
function si(r, e) {
  var t = "".concat(Ce.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(si, "si");
u(si, "doneInvoke");
function On(r, e) {
  var t = "".concat(Ce.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(On, "On");
u(On, "error");
function Ra(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = ge(c ? [[], l] : Ia(l, function(y) {
    return y.type === el;
  }), 2), b = f[0], v = f[1], d = b.length ? al(t, i, b, e) : t, h = c ? [t] : void 0, x = Ne(v.map(function(y) {
    var S;
    switch (y.type) {
      case ni:
        return xh(y);
      case En:
        var O = Eh(y, d, i, r.options.delays);
        return je || Ue(!be(y.delay) || typeof O.delay == "number", "No delay reference for delay expression '".concat(y.delay, "' was found on machine '").concat(r.id, "'")), O;
      case Sa:
        return Sh(y, d, i);
      case lc: {
        var M = y, k = (S = M.conds.find(function(ie) {
          var ne = Aa(ie.cond, r.options.guards);
          return !ne || _a(r, ne, d, i, e);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!k)
          return [];
        var $ = ge(Ra(r, e, d, i, Xi(Bt(k), r.options.actions), c), 2), L = $[0], q = $[1];
        return d = q, h == null || h.push(d), L;
      }
      case uc: {
        var k = y.get(d, i.data);
        if (!k)
          return [];
        var P = ge(Ra(r, e, d, i, Xi(Bt(k), r.options.actions), c), 2), Z = P[0], _ = P[1];
        return d = _, h == null || h.push(d), Z;
      }
      case ri:
        return Ch(y, d, i);
      case el: {
        d = al(d, i, [y], e), h == null || h.push(d);
        break;
      }
      default:
        var j = ai(y, r.options.actions), V = j.exec;
        if (V && h) {
          var K = h.length - 1;
          j = U(U({}, j), { exec: function(ie) {
            for (var ne = [], pe = 1; pe < arguments.length; pe++)
              ne[pe - 1] = arguments[pe];
            V.apply(void 0, Ae([h[K]], ge(ne), false));
          } });
        }
        return j;
    }
  }).filter(function(y) {
    return !!y;
  }));
  return [x, d];
}
__name(Ra, "Ra");
u(Ra, "resolveActions");
var Mc = [];
var Mn = u(function(r, e) {
  Mc.push(r);
  var t = e(r);
  return Mc.pop(), t;
}, "provide");
function Pc(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[xr] = function() {
    return this;
  }, e;
}
__name(Pc, "Pc");
u(Pc, "createNullActor");
function Ic(r, e, t, i) {
  var l, c = ka(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], b = r.data ? Sn(r.data, t, i) : void 0, v = f ? Ac(f, r.id, b) : Pc(r.id);
  return v.meta = r, v;
}
__name(Ic, "Ic");
u(Ic, "createInvocableActor");
function Ac(r, e, t) {
  var i = Pc(e);
  if (i.deferred = true, Er(r)) {
    var l = i.state = Mn(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(Ac, "Ac");
u(Ac, "createDeferredActor");
function Th(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(Th, "Th");
u(Th, "isActor");
function _c(r) {
  return Th(r) && "id" in r;
}
__name(_c, "_c");
u(_c, "isSpawnedActor");
function kc(r) {
  var e;
  return U((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[xr] = function() {
    return this;
  }, e), r);
}
__name(kc, "kc");
u(kc, "toActorRef");
var Ji = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function Pn(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(Pn, "Pn");
u(Pn, "getChildren");
function ul(r) {
  var e = [r];
  return Ji(r) ? e : e.concat(Ne(Pn(r).map(ul)));
}
__name(ul, "ul");
u(ul, "getAllStateNodes");
function In(r, e) {
  var t, i, l, c, f, b, v, d, h = new Set(r), x = ll(h), y = new Set(e);
  try {
    for (var S = ve(y), O = S.next(); !O.done; O = S.next())
      for (var M = O.value, k = M.parent; k && !y.has(k); )
        y.add(k), k = k.parent;
  } catch (K) {
    t = { error: K };
  } finally {
    try {
      O && !O.done && (i = S.return) && i.call(S);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var $ = ll(y);
  try {
    for (var L = ve(y), q = L.next(); !q.done; q = L.next()) {
      var M = q.value;
      if (M.type === "compound" && (!$.get(M) || !$.get(M).length))
        x.get(M) ? x.get(M).forEach(function(ie) {
          return y.add(ie);
        }) : M.initialStateNodes.forEach(function(ie) {
          return y.add(ie);
        });
      else if (M.type === "parallel")
        try {
          for (var P = (f = void 0, ve(Pn(M))), Z = P.next(); !Z.done; Z = P.next()) {
            var _ = Z.value;
            y.has(_) || (y.add(_), x.get(_) ? x.get(_).forEach(function(ie) {
              return y.add(ie);
            }) : _.initialStateNodes.forEach(function(ie) {
              return y.add(ie);
            }));
          }
        } catch (ie) {
          f = { error: ie };
        } finally {
          try {
            Z && !Z.done && (b = P.return) && b.call(P);
          } finally {
            if (f)
              throw f.error;
          }
        }
    }
  } catch (K) {
    l = { error: K };
  } finally {
    try {
      q && !q.done && (c = L.return) && c.call(L);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var j = ve(y), V = j.next(); !V.done; V = j.next())
      for (var M = V.value, k = M.parent; k && !y.has(k); )
        y.add(k), k = k.parent;
  } catch (K) {
    v = { error: K };
  } finally {
    try {
      V && !V.done && (d = j.return) && d.call(j);
    } finally {
      if (v)
        throw v.error;
    }
  }
  return y;
}
__name(In, "In");
u(In, "getConfiguration");
function Dc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (Ji(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = Dc(c, e);
  }), l;
}
__name(Dc, "Dc");
u(Dc, "getValueFromAdj");
function ll(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = ve(r), c = l.next(); !c.done; c = l.next()) {
      var f = c.value;
      i.has(f) || i.set(f, []), f.parent && (i.has(f.parent) || i.set(f.parent, []), i.get(f.parent).push(f));
    }
  } catch (b) {
    e = { error: b };
  } finally {
    try {
      c && !c.done && (t = l.return) && t.call(l);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return i;
}
__name(ll, "ll");
u(ll, "getAdjList");
function Rc(r, e) {
  var t = In([r], e);
  return Dc(r, ll(t));
}
__name(Rc, "Rc");
u(Rc, "getValue");
function Ki(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(Ki, "Ki");
u(Ki, "has");
function Nc(r) {
  return Ae([], ge(new Set(Ne(Ae([], ge(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(Nc, "Nc");
u(Nc, "nextEvents");
function An(r, e) {
  return e.type === "compound" ? Pn(e).some(function(t) {
    return t.type === "final" && Ki(r, t);
  }) : e.type === "parallel" ? Pn(e).every(function(t) {
    return An(r, t);
  }) : false;
}
__name(An, "An");
u(An, "isInFinalState");
function zc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(zc, "zc");
u(zc, "getMeta");
function cl(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
__name(cl, "cl");
u(cl, "getTagsFromConfiguration");
function pl(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (be(r) || be(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return pl(r[l], e[l]);
  });
}
__name(pl, "pl");
u(pl, "stateValuesEqual");
function Gc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Gc, "Gc");
u(Gc, "isStateConfig");
function Lc(r, e) {
  var t = r.exec, i = U(U({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(Lc, "Lc");
u(Lc, "bindActionToState");
var fr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = nl, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || nl, this.meta = zc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Nc(t.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = Tn;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = Tn;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), be(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, Ae([], ge(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(f) {
        return c + t + f;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ti(e, ["configuration", "transitions", "tags", "machine"]);
    return U(U({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return qi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    je && Ue(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Oh = { deferEvents: false };
var dl = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = U(U({}, Oh), e);
  }
  __name(r, "r");
  return u(r, "Scheduler"), r.prototype.initialize = function(e) {
    if (this.initialized = true, e) {
      if (!this.options.deferEvents) {
        this.schedule(e);
        return;
      }
      this.process(e);
    }
    this.flushEvents();
  }, r.prototype.schedule = function(e) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(e);
      return;
    }
    if (this.queue.length !== 0)
      throw new Error("Event queue should be empty when it is not processing events");
    this.process(e), this.flushEvents();
  }, r.prototype.clear = function() {
    this.queue = [];
  }, r.prototype.flushEvents = function() {
    for (var e = this.queue.shift(); e; )
      this.process(e), e = this.queue.shift();
  }, r.prototype.process = function(e) {
    this.processingEvent = true;
    try {
      e();
    } catch (t) {
      throw this.clear(), t;
    } finally {
      this.processingEvent = false;
    }
  }, r;
}();
var fl = /* @__PURE__ */ new Map();
var Mh = 0;
var Qi = { bookId: function() {
  return "x:".concat(Mh++);
}, register: function(r, e) {
  return fl.set(r, e), r;
}, get: function(r) {
  return fl.get(r);
}, free: function(r) {
  fl.delete(r);
} };
function za() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  je || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(za, "za");
u(za, "getGlobal");
function Ph() {
  var r = za();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(Ph, "Ph");
u(Ph, "getDevTools");
function jc(r) {
  if (!!za()) {
    var e = Ph();
    e && e.register(r);
  }
}
__name(jc, "jc");
u(jc, "registerService");
function Bc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var d = l.shift();
        t = r.transition(t, d, v), i.forEach(function(h) {
          return h.next(t);
        });
      }
      c = false;
    }
  }, "flush"), b = kc({ id: e.id, send: function(d) {
    l.push(d), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(d, h, x) {
    var y = Vi(d, h, x);
    return i.add(y), y.next(t), { unsubscribe: function() {
      i.delete(y);
    } };
  } }), v = { parent: e.parent, self: b, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(v) : t, b;
}
__name(Bc, "Bc");
u(Bc, "spawnBehavior");
var Ih = { sync: false, autoForward: false };
var vt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(vt || (vt = {}));
var Hc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = vt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(h, x) {
      if (Rr(h))
        return i.batch(h), i.state;
      var y = nt(Ui(h, x));
      if (i.status === vt.Stopped)
        return je || Ue(false, 'Event "'.concat(y.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(y.data))), i.state;
      if (i.status !== vt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(y.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(y.data)));
      return i.scheduler.schedule(function() {
        i.forward(y);
        var S = i.nextState(y);
        i.update(S, y);
      }), i._state;
    }, this.sendTo = function(h, x) {
      var y = i.parent && (x === Qr.Parent || i.parent.id === x), S = y ? i.parent : be(x) ? i.children.get(x) || Qi.get(x) : yc(x) ? x : void 0;
      if (!S) {
        if (!y)
          throw new Error("Unable to send event to child '".concat(x, "' from service '").concat(i.id, "'."));
        je || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(h.type));
        return;
      }
      "machine" in S ? S.send(U(U({}, h), { name: h.name === rl ? "".concat(On(i.id)) : h.name, origin: i.sessionId })) : S.send(h.data);
    };
    var l = U(U({}, r.defaultOptions), t), c = l.clock, f = l.logger, b = l.parent, v = l.id, d = v !== void 0 ? v : e.id;
    this.id = d, this.logger = f, this.clock = c, this.parent = b, this.options = l, this.scheduler = new dl({ deferEvents: this.options.deferEvents }), this.sessionId = Qi.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : Mn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return je || Ue(this.status !== vt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ve(e.actions), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        this.exec(b, e, t);
      }
    } catch (v) {
      i = { error: v };
    } finally {
      try {
        f && !f.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, f, b, v, d, h, x = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(K) {
      x.state.children[K.id] = K;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var y = ve(this.eventListeners), S = y.next(); !S.done; S = y.next()) {
          var O = S.value;
          O(e.event);
        }
      } catch (K) {
        i = { error: K };
      } finally {
        try {
          S && !S.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var M = ve(this.listeners), k = M.next(); !k.done; k = M.next()) {
        var O = k.value;
        O(e, e.event);
      }
    } catch (K) {
      c = { error: K };
    } finally {
      try {
        k && !k.done && (f = M.return) && f.call(M);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var $ = ve(this.contextListeners), L = $.next(); !L.done; L = $.next()) {
        var q = L.value;
        q(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (K) {
      b = { error: K };
    } finally {
      try {
        L && !L.done && (v = $.return) && v.call($);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var P = An(e.configuration || [], this.machine);
    if (this.state.configuration && P) {
      var Z = e.configuration.find(function(K) {
        return K.type === "final" && K.parent === x.machine;
      }), _ = Z && Z.doneData ? Sn(Z.doneData, e.context, t) : void 0;
      try {
        for (var j = ve(this.doneListeners), V = j.next(); !V.done; V = j.next()) {
          var O = V.value;
          O(si(this.id, _));
        }
      } catch (K) {
        d = { error: K };
      } finally {
        try {
          V && !V.done && (h = j.return) && h.call(j);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(e) {
    return this.listeners.add(e), this.status === vt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, f = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), f = e.complete.bind(e)), this.listeners.add(c), this.status !== vt.NotStarted && c(this.state), f && (this.status === vt.Stopped ? f() : this.onDone(f)), { unsubscribe: function() {
      c && l.listeners.delete(c), f && l.doneListeners.delete(f);
    } };
  }, r.prototype.onEvent = function(e) {
    return this.eventListeners.add(e), this;
  }, r.prototype.onSend = function(e) {
    return this.sendListeners.add(e), this;
  }, r.prototype.onChange = function(e) {
    return this.contextListeners.add(e), this;
  }, r.prototype.onStop = function(e) {
    return this.stopListeners.add(e), this;
  }, r.prototype.onDone = function(e) {
    return this.doneListeners.add(e), this;
  }, r.prototype.off = function(e) {
    return this.listeners.delete(e), this.eventListeners.delete(e), this.sendListeners.delete(e), this.stopListeners.delete(e), this.doneListeners.delete(e), this.contextListeners.delete(e), this;
  }, r.prototype.start = function(e) {
    var t = this;
    if (this.status === vt.Running)
      return this;
    this.machine._init(), Qi.register(this.sessionId, this), this.initialized = true, this.status = vt.Running;
    var i = e === void 0 ? this.initialState : Mn(this, function() {
      return Gc(e) ? t.machine.resolveState(e) : t.machine.resolveState(fr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Tn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, b, v, d, h, x = this;
    try {
      for (var y = ve(this.listeners), S = y.next(); !S.done; S = y.next()) {
        var O = S.value;
        this.listeners.delete(O);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        S && !S.done && (t = y.return) && t.call(y);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var M = ve(this.stopListeners), k = M.next(); !k.done; k = M.next()) {
        var O = k.value;
        O(), this.stopListeners.delete(O);
      }
    } catch (V) {
      i = { error: V };
    } finally {
      try {
        k && !k.done && (l = M.return) && l.call(M);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var $ = ve(this.contextListeners), L = $.next(); !L.done; L = $.next()) {
        var O = L.value;
        this.contextListeners.delete(O);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        L && !L.done && (f = $.return) && f.call($);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var q = ve(this.doneListeners), P = q.next(); !P.done; P = q.next()) {
        var O = P.value;
        this.doneListeners.delete(O);
      }
    } catch (V) {
      b = { error: V };
    } finally {
      try {
        P && !P.done && (v = q.return) && v.call(q);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    Ae([], ge(this.state.configuration), false).sort(function(V, K) {
      return K.order - V.order;
    }).forEach(function(V) {
      var K, ie;
      try {
        for (var ne = ve(V.definition.exit), pe = ne.next(); !pe.done; pe = ne.next()) {
          var W = pe.value;
          x.exec(W, x.state);
        }
      } catch (ue) {
        K = { error: ue };
      } finally {
        try {
          pe && !pe.done && (ie = ne.return) && ie.call(ne);
        } finally {
          if (K)
            throw K.error;
        }
      }
    }), this.children.forEach(function(V) {
      Te(V.stop) && V.stop();
    }), this.children.clear();
    try {
      for (var Z = ve(Object.keys(this.delayedEventsMap)), _ = Z.next(); !_.done; _ = Z.next()) {
        var j = _.value;
        this.clock.clearTimeout(this.delayedEventsMap[j]);
      }
    } catch (V) {
      d = { error: V };
    } finally {
      try {
        _ && !_.done && (h = Z.return) && h.call(Z);
      } finally {
        if (d)
          throw d.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new dl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = vt.Stopped, this._initialState = void 0, Qi.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === vt.NotStarted && this.options.deferEvents)
      je || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== vt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, b = [], v = u(function(y) {
        var S = nt(y);
        t.forward(S), c = Mn(t, function() {
          return t.machine.transition(c, S);
        }), b.push.apply(b, Ae([], ge(c.actions.map(function(O) {
          return Lc(O, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var d = ve(e), h = d.next(); !h.done; h = d.next()) {
          var x = h.value;
          v(x);
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          h && !h.done && (l = d.return) && l.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = f, c.actions = b, t.update(c, nt(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = nt(e);
    if (i.name.indexOf(tl) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(tl) === 0;
    }))
      throw i.data.data;
    var l = Mn(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = ve(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var f = c.value, b = this.children.get(f);
        if (!b)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(f, "'."));
        b.send(e);
      }
    } catch (v) {
      t = { error: v };
    } finally {
      try {
        c && !c.done && (i = l.return) && i.call(l);
      } finally {
        if (t)
          throw t.error;
      }
    }
  }, r.prototype.defer = function(e) {
    var t = this;
    this.delayedEventsMap[e.id] = this.clock.setTimeout(function() {
      e.to ? t.sendTo(e._event, e.to) : t.send(e._event);
    }, e.delay);
  }, r.prototype.cancel = function(e) {
    this.clock.clearTimeout(this.delayedEventsMap[e]), delete this.delayedEventsMap[e];
  }, r.prototype.exec = function(e, t, i) {
    i === void 0 && (i = this.machine.options.actions);
    var l = t.context, c = t._event, f = e.exec || Da(e.type, i), b = Te(f) ? f : f ? f.exec : e.exec;
    if (b)
      try {
        return b(l, c.data, { action: e, state: this.state, _event: c });
      } catch (P) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: P }), P;
      }
    switch (e.type) {
      case En:
        var v = e;
        if (typeof v.delay == "number") {
          this.defer(v);
          return;
        } else
          v.to ? this.sendTo(v._event, v.to) : this.send(v._event);
        break;
      case Ea:
        this.cancel(e.sendId);
        break;
      case Bi: {
        if (this.status !== vt.Running)
          return;
        var d = e.activity;
        if (!this.state.activities[d.id || d.type])
          break;
        if (d.type === Ce.Invoke) {
          var h = ka(d.src), x = this.machine.options.services ? this.machine.options.services[h.type] : void 0, y = d.id, S = d.data;
          je || Ue(!("forward" in d), "`forward` property is deprecated (found in invocation of '".concat(d.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var O = "autoForward" in d ? d.autoForward : !!d.forward;
          if (!x) {
            je || Ue(false, "No service found for invocation '".concat(d.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var M = S ? Sn(S, l, c) : void 0;
          if (typeof x == "string")
            return;
          var k = Te(x) ? x(l, c.data, { data: M, src: h, meta: d.meta }) : x;
          if (!k)
            return;
          var $ = void 0;
          Er(k) && (k = M ? k.withContext(M) : k, $ = { autoForward: O }), this.spawn(k, y, $);
        } else
          this.spawnActivity(d);
        break;
      }
      case ri: {
        this.stopChild(e.activity.id);
        break;
      }
      case Sa:
        var L = e.label, q = e.value;
        L ? this.logger(L, q) : this.logger(q);
        break;
      default:
        je || Ue(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), Te(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (ol(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Te(e))
      return this.spawnCallback(e, t);
    if (_c(e))
      return this.spawnActor(e, t);
    if (bc(e))
      return this.spawnObservable(e, t);
    if (Er(e))
      return this.spawnMachine(e, U(U({}, i), { id: t }));
    if (vc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, U(U({}, this.options), { parent: this, id: t.id || e.id })), c = U(U({}, Ih), t);
    c.sync && l.onTransition(function(b) {
      i.send($i, { state: b, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(b) {
      i.removeChild(l.id), i.send(nt(b, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Bc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(v) {
      c || (f = v, l.removeChild(t), l.send(nt(si(t, v), { origin: t })));
    }, function(v) {
      if (!c) {
        l.removeChild(t);
        var d = On(t, v);
        try {
          l.send(nt(d, { origin: t }));
        } catch (h) {
          xc(v, h, t), l.devTools && l.devTools.send(d, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var b = (i = { id: t, send: function() {
    }, subscribe: function(v, d, h) {
      var x = Vi(v, d, h), y = false;
      return e.then(function(S) {
        y || (x.next(S), !y && x.complete());
      }, function(S) {
        y || x.error(S);
      }), { unsubscribe: function() {
        return y = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return f;
    } }, i[xr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), v, d = u(function(y) {
      v = y, b.forEach(function(S) {
        return S(y);
      }), !c && l.send(nt(y, { origin: t }));
    }, "receive"), h;
    try {
      h = e(d, function(y) {
        f.add(y);
      });
    } catch (y) {
      this.send(On(t, y));
    }
    if (ol(h))
      return this.spawnPromise(h, t);
    var x = (i = { id: t, send: function(y) {
      return f.forEach(function(S) {
        return S(y);
      });
    }, subscribe: function(y) {
      var S = Vi(y);
      return b.add(S.next), { unsubscribe: function() {
        b.delete(S.next);
      } };
    }, stop: function() {
      c = true, Te(h) && h();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return v;
    } }, i[xr] = function() {
      return this;
    }, i);
    return this.children.set(t, x), x;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, f = e.subscribe(function(v) {
      c = v, l.send(nt(v, { origin: t }));
    }, function(v) {
      l.removeChild(t), l.send(nt(On(t, v), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(nt(si(t), { origin: t }));
    }), b = (i = { id: t, send: function() {
    }, subscribe: function(v, d, h) {
      return e.subscribe(v, d, h);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[xr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      je || Ue(false, "No implementation found for activity '".concat(e.type, "'"));
      return;
    }
    var i = t(this.state.context, e);
    this.spawnEffect(e.id, i);
  }, r.prototype.spawnEffect = function(e, t) {
    var i;
    this.children.set(e, (i = { id: e, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: t || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: e };
    } }, i[xr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = za();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(U(U({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: U({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      jc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[xr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === vt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = ut, r;
}();
function ut(r, e) {
  var t = new Hc(r, e);
  return t;
}
__name(ut, "ut");
u(ut, "interpret");
function Ah(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(Ah, "Ah");
u(Ah, "toInvokeSource");
function eo(r) {
  return U(U({ type: Hi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ti(r, ["onDone", "onError"]);
    return U(U({}, e), { type: Hi, src: Ah(r.src) });
  } });
}
__name(eo, "eo");
u(eo, "toInvokeDefinition");
var ci = "";
var hl = "#";
var to = "*";
var li = {};
var ui = u(function(r) {
  return r[0] === hl;
}, "isStateId");
var _h = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var kh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (be(c.target) || Er(c.target));
  }), l = e === ci ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var $c = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var f;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(_h(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ca), this.id = this.config.id || Ae([this.machine.key], ge(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, je || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? oi(this.config.states, function(d, h) {
      var x, y = new r(d, {}, void 0, { parent: c, key: h });
      return Object.assign(c.idMap, U((x = {}, x[y.id] = y, x), y.idMap)), y;
    }) : li;
    var b = 0;
    function v(d) {
      var h, x;
      d.order = b++;
      try {
        for (var y = ve(Pn(d)), S = y.next(); !S.done; S = y.next()) {
          var O = S.value;
          v(O);
        }
      } catch (M) {
        h = { error: M };
      } finally {
        try {
          S && !S.done && (x = y.return) && x.call(y);
        } finally {
          if (h)
            throw h.error;
        }
      }
    }
    __name(v, "v");
    u(v, "dfs"), v(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var h = d.event;
      return h === ci;
    }) : ci in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Bt(this.config.entry || this.config.onEntry).map(function(d) {
      return ai(d);
    }), this.onExit = Bt(this.config.exit || this.config.onExit).map(function(d) {
      return ai(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Bt(this.config.invoke).map(function(d, h) {
      var x, y;
      if (Er(d)) {
        var S = Yi(c.id, h);
        return c.machine.options.services = U((x = {}, x[S] = d, x), c.machine.options.services), eo({ src: S, id: S });
      } else if (be(d.src)) {
        var S = d.id || Yi(c.id, h);
        return eo(U(U({}, d), { id: S, src: d.src }));
      } else if (Er(d.src) || Te(d.src)) {
        var S = d.id || Yi(c.id, h);
        return c.machine.options.services = U((y = {}, y[S] = d.src, y), c.machine.options.services), eo(U(U({ id: S }, d), { src: S }));
      } else {
        var O = d.src;
        return eo(U(U({ id: Yi(c.id, h) }, d), { src: O }));
      }
    }), this.activities = Bt(this.config.activities).concat(this.invoke).map(function(d) {
      return Na(d);
    }), this.transition = this.transition.bind(this), this.tags = Bt(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || ul(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, b = i.services, v = i.delays;
    return new r(this.config, { actions: U(U({}, l), e.actions), activities: U(U({}, c), e.activities), guards: U(U({}, f), e.guards), services: U(U({}, b), e.services), delays: U(U({}, v), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Te(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: oi(this.states, function(e) {
      return e.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), r.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(r.prototype, "on", { get: function() {
    if (this.__cache.on)
      return this.__cache.on;
    var e = this.transitions;
    return this.__cache.on = e.reduce(function(t, i) {
      return t[i.eventType] = t[i.eventType] || [], t[i.eventType].push(i), t;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), r.prototype.getCandidates = function(e) {
    if (this.__cache.candidates[e])
      return this.__cache.candidates[e];
    var t = e === ci, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === to;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, f) {
      var b = Te(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, v = Oc(b, e.id);
      return e.onEntry.push(sl(v, { delay: c })), e.onExit.push(Sc(v)), v;
    }, "mutateEntryExit"), l = Rr(t) ? t.map(function(c, f) {
      var b = i(c.delay, f);
      return U(U({}, c), { event: b });
    }) : Ne(Object.keys(t).map(function(c, f) {
      var b = t[c], v = be(b) ? { target: b } : b, d = isNaN(+c) ? c : +c, h = i(d, f);
      return Bt(v).map(function(x) {
        return U(U({}, x), { event: h, delay: d });
      });
    }));
    return l.map(function(c) {
      var f = c.delay;
      return U(U({}, e.formatTransition(c)), { delay: f });
    });
  }, r.prototype.getStateNodes = function(e) {
    var t, i = this;
    if (!e)
      return [];
    var l = e instanceof fr ? e.value : ii(e, this.delimiter);
    if (be(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var f = Object.keys(l), b = [this];
    return b.push.apply(b, Ae([], ge(Ne(f.map(function(v) {
      return i.getStateNode(v).getStateNodes(l[v]);
    }))), false)), b;
  }, r.prototype.handles = function(e) {
    var t = Ma(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof fr ? e : fr.create(e), i = Array.from(In([], this.getStateNodes(t.value)));
    return new fr(U(U({}, t), { value: this.resolve(t.value), configuration: i, done: An(i, this), tags: cl(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var b = ve(Object.keys(e)), v = b.next(); !v.done; v = b.next()) {
        var d = v.value, h = e[d];
        if (!!h) {
          var x = this.getStateNode(d), y = x._transition(h, t, i);
          y && (f[d] = y);
        }
      }
    } catch (L) {
      l = { error: L };
    } finally {
      try {
        v && !v.done && (c = b.return) && c.call(b);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var S = Object.keys(f).map(function(L) {
      return f[L];
    }), O = Ne(S.map(function(L) {
      return L.transitions;
    })), M = S.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!M)
      return this.next(t, i);
    var k = Ne(S.map(function(L) {
      return L.entrySet;
    })), $ = Ne(Object.keys(f).map(function(L) {
      return f[L].configuration;
    }));
    return { transitions: O, entrySet: k, exitSet: Ne(S.map(function(L) {
      return L.exitSet;
    })), configuration: $, source: t, actions: Ne(Object.keys(f).map(function(L) {
      return f[L].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return be(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, nt(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, b = [], v = [], d;
    try {
      for (var h = ve(this.getCandidates(f)), x = h.next(); !x.done; x = h.next()) {
        var y = x.value, S = y.cond, O = y.in, M = e.context, k = O ? be(O) && ui(O) ? e.matches(ii(this.getStateNodeById(O).path, this.delimiter)) : qi(ii(O, this.delimiter), pc(this.path.slice(0, -2))(e.value)) : true, $ = false;
        try {
          $ = !S || _a(this.machine, S, M, t, e);
        } catch (Z) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(Z.message));
        }
        if ($ && k) {
          y.target !== void 0 && (v = y.target), b.push.apply(b, Ae([], ge(y.actions), false)), d = y;
          break;
        }
      }
    } catch (Z) {
      i = { error: Z };
    } finally {
      try {
        x && !x.done && (l = h.return) && l.call(h);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!d) {
      if (!v.length)
        return { transitions: [d], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: b };
      var L = Ne(v.map(function(Z) {
        return c.getRelativeStateNodes(Z, e.historyValue);
      })), q = !!d.internal, P = q ? [] : Ne(L.map(function(Z) {
        return c.nodesFromChild(Z);
      }));
      return { transitions: [d], entrySet: P, exitSet: q ? [] : [this], configuration: L, source: e, actions: b };
    }
  }, r.prototype.nodesFromChild = function(e) {
    if (e.escapes(this))
      return [];
    for (var t = [], i = e; i && i !== this; )
      t.push(i), i = i.parent;
    return t.push(this), t;
  }, r.prototype.escapes = function(e) {
    if (this === e)
      return false;
    for (var t = this.parent; t; ) {
      if (t === e)
        return false;
      t = t.parent;
    }
    return true;
  }, r.prototype.getActions = function(e, t, i, l) {
    var c, f, b, v, d = In([], l ? this.getStateNodes(l.value) : [this]), h = e.configuration.length ? In(d, e.configuration) : d;
    try {
      for (var x = ve(h), y = x.next(); !y.done; y = x.next()) {
        var S = y.value;
        Ki(d, S) || e.entrySet.push(S);
      }
    } catch (j) {
      c = { error: j };
    } finally {
      try {
        y && !y.done && (f = x.return) && f.call(x);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var O = ve(d), M = O.next(); !M.done; M = O.next()) {
        var S = M.value;
        (!Ki(h, S) || Ki(e.exitSet, S.parent)) && e.exitSet.push(S);
      }
    } catch (j) {
      b = { error: j };
    } finally {
      try {
        M && !M.done && (v = O.return) && v.call(O);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var k = Ne(e.entrySet.map(function(j) {
      var V = [];
      if (j.type !== "final")
        return V;
      var K = j.parent;
      if (!K.parent)
        return V;
      V.push(Zi(j.id, j.doneData), Zi(K.id, j.doneData ? Sn(j.doneData, t, i) : void 0));
      var ie = K.parent;
      return ie.type === "parallel" && Pn(ie).every(function(ne) {
        return An(e.configuration, ne);
      }) && V.push(Zi(ie.id)), V;
    }));
    e.exitSet.sort(function(j, V) {
      return V.order - j.order;
    }), e.entrySet.sort(function(j, V) {
      return j.order - V.order;
    });
    var $ = new Set(e.entrySet), L = new Set(e.exitSet), q = ge([Ne(Array.from($).map(function(j) {
      return Ae(Ae([], ge(j.activities.map(function(V) {
        return Cc(V);
      })), false), ge(j.onEntry), false);
    })).concat(k.map(Ec)), Ne(Array.from(L).map(function(j) {
      return Ae(Ae([], ge(j.onExit), false), ge(j.activities.map(function(V) {
        return Tc(V);
      })), false);
    }))], 2), P = q[0], Z = q[1], _ = Xi(Z.concat(e.actions).concat(P), this.machine.options.actions);
    return _;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = nt(t), c;
    if (e instanceof fr)
      c = i === void 0 ? e : this.resolveState(fr.from(e, i));
    else {
      var f = be(e) ? this.resolve(Fi(this.getResolvedPath(e))) : this.resolve(e), b = i != null ? i : this.machine.context;
      c = this.resolveState(fr.from(f, b));
    }
    if (!je && l.name === to)
      throw new Error("An event cannot have the wildcard type ('".concat(to, "')"));
    if (this.strict && !this.events.includes(l.name) && !hc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var v = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, d = In([], this.getStateNodes(c.value)), h = v.configuration.length ? In(d, v.configuration) : d;
    return v.configuration = Ae([], ge(h), false), this.resolveTransition(v, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, Ae([], ge(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, b = this;
    l === void 0 && (l = Tn);
    var v = e.configuration, d = !t || e.transitions.length > 0, h = d ? Rc(this.machine, v) : void 0, x = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, y = this.getActions(e, i, l, t), S = t ? U({}, t.activities) : {};
    try {
      for (var O = ve(y), M = O.next(); !M.done; M = O.next()) {
        var k = M.value;
        k.type === Bi ? S[k.activity.id || k.activity.type] = k : k.type === ri && (S[k.activity.id || k.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        M && !M.done && (f = O.return) && f.call(O);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var $ = ge(Ra(this, t, i, l, y, this.machine.config.preserveActionOrder), 2), L = $[0], q = $[1], P = ge(Ia(L, function(fe) {
      return fe.type === ni || fe.type === En && fe.to === Qr.Internal;
    }), 2), Z = P[0], _ = P[1], j = L.filter(function(fe) {
      var Xe;
      return fe.type === Bi && ((Xe = fe.activity) === null || Xe === void 0 ? void 0 : Xe.type) === Hi;
    }), V = j.reduce(function(fe, Xe) {
      return fe[Xe.activity.id] = Ic(Xe.activity, b.machine, q, l), fe;
    }, t ? U({}, t.children) : {}), K = d ? e.configuration : t ? t.configuration : [], ie = An(K, this), ne = new fr({ value: h || t.value, context: q, _event: l, _sessionid: t ? t._sessionid : null, historyValue: h ? x ? gc(x, h) : void 0 : t ? t.historyValue : void 0, history: !h || e.source ? t : void 0, actions: h ? _ : [], activities: h ? S : t ? t.activities : {}, events: [], configuration: K, transitions: e.transitions, children: V, done: ie, tags: cl(K), machine: this }), pe = i !== q;
    ne.changed = l.name === $i || pe;
    var W = ne.history;
    W && delete W.history;
    var ue = !ie && (this._transient || v.some(function(fe) {
      return fe._transient;
    }));
    if (!d && (!ue || l.name === ci))
      return ne;
    var ke = ne;
    if (!ie)
      for (ue && (ke = this.resolveRaisedTransition(ke, { type: ac }, l)); Z.length; ) {
        var We = Z.shift();
        ke = this.resolveRaisedTransition(ke, We._event, l);
      }
    var Ge = ke.changed || (W ? !!ke.actions.length || pe || typeof W.value != typeof ke.value || !pl(ke.value, W.value) : void 0);
    return ke.changed = Ge, ke.history = W, ke;
  }, r.prototype.getStateNode = function(e) {
    if (ui(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = ui(e) ? e.slice(hl.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && ui(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = Pa(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || li;
    switch (this.type) {
      case "parallel":
        return oi(this.initialStateValue, function(c, f) {
          return c ? i.getStateNode(f).resolve(e[f] || c) : li;
        });
      case "compound":
        if (be(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? oi(e, function(c, f) {
          return c ? i.getStateNode(f).resolve(c) : li;
        }) : this.initialStateValue || {};
      default:
        return e || li;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (ui(e)) {
      var t = this.machine.idMap[e.slice(hl.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Pa(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = il(this.states, function(i) {
        return i.initialStateValue || li;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = Ji(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
    } else
      t = {};
    return this.__cache.initialStateValue = t, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), r.prototype.getInitialState = function(e, t) {
    this._init();
    var i = this.getStateNodes(e);
    return this.resolveTransition({ configuration: i, entrySet: i, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, t != null ? t : this.machine.context, void 0);
  }, Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this.initialStateValue;
    if (!e)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "target", { get: function() {
    var e;
    if (this.type === "history") {
      var t = this.config;
      be(t.target) ? e = ui(t.target) ? Fi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (Ji(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return je || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Wi(this.initialStateValue);
    return Ne(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = ge(e), i = t[0], l = t.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(i, "' from node with no states"));
    var c = this.getStateNode(i);
    if (c.type === "history")
      return c.resolveHistory();
    if (!this.states[i])
      throw new Error("Child state '".concat(i, "' does not exist on '").concat(this.id, "'"));
    return this.states[i].getFromRelativePath(l);
  }, r.prototype.historyValue = function(e) {
    if (!!Object.keys(this.states).length)
      return { current: e || this.initialStateValue, states: il(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = be(e) ? void 0 : e[i];
        return t.historyValue(l || t.initialStateValue);
      }, function(t) {
        return !t.history;
      }) };
  }, r.prototype.resolveHistory = function(e) {
    var t = this;
    if (this.type !== "history")
      return [this];
    var i = this.parent;
    if (!e) {
      var l = this.target;
      return l ? Ne(Wi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = dc(i.path, "states")(e).current;
    return be(c) ? [i.getStateNode(c)] : Ne(Wi(c).map(function(f) {
      return t.history === "deep" ? i.getFromRelativePath(f) : [i.states[f[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = Ne(Object.keys(this.states).map(function(i) {
      return e.states[i].stateIds;
    }));
    return [this.id].concat(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "events", { get: function() {
    var e, t, i, l;
    if (this.__cache.events)
      return this.__cache.events;
    var c = this.states, f = new Set(this.ownEvents);
    if (c)
      try {
        for (var b = ve(Object.keys(c)), v = b.next(); !v.done; v = b.next()) {
          var d = v.value, h = c[d];
          if (h.states)
            try {
              for (var x = (i = void 0, ve(h.events)), y = x.next(); !y.done; y = x.next()) {
                var S = y.value;
                f.add("".concat(S));
              }
            } catch (O) {
              i = { error: O };
            } finally {
              try {
                y && !y.done && (l = x.return) && l.call(x);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (O) {
        e = { error: O };
      } finally {
        try {
          v && !v.done && (t = b.return) && t.call(b);
        } finally {
          if (e)
            throw e.error;
        }
      }
    return this.__cache.events = Array.from(f);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "ownEvents", { get: function() {
    var e = new Set(this.transitions.filter(function(t) {
      return !(!t.target && !t.actions.length && t.internal);
    }).map(function(t) {
      return t.eventType;
    }));
    return Array.from(e);
  }, enumerable: false, configurable: true }), r.prototype.resolveTarget = function(e) {
    var t = this;
    if (e !== void 0)
      return e.map(function(i) {
        if (!be(i))
          return i;
        var l = i[0] === t.delimiter;
        if (l && !t.parent)
          return t.getStateNodeByPath(i.slice(1));
        var c = l ? t.key + i : i;
        if (t.parent)
          try {
            var f = t.parent.getStateNodeByPath(c);
            return f;
          } catch (b) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(b.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = wc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(v) {
      return be(v) && v[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), b = U(U({}, e), { actions: Xi(Bt(e.actions)), cond: Aa(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
      return U(U({}, b), { target: b.target ? b.target.map(function(v) {
        return "#".concat(v.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return b;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, f = to, b = c[f], v = b === void 0 ? [] : b, d = ti(c, [typeof f == "symbol" ? f : f + ""]);
      l = Ne(Object.keys(d).map(function(L) {
        !je && L === ci && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var q = Cn(L, d[L]);
        return je || kh(i, L, q), q;
      }).concat(Cn(to, v)));
    }
    var h = this.config.always ? Cn("", this.config.always) : [], x = this.config.onDone ? Cn(String(Zi(this.id)), this.config.onDone) : [];
    je || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var y = Ne(this.invoke.map(function(L) {
      var q = [];
      return L.onDone && q.push.apply(q, Ae([], ge(Cn(String(si(L.id)), L.onDone)), false)), L.onError && q.push.apply(q, Ae([], ge(Cn(String(On(L.id)), L.onError)), false)), q;
    })), S = this.after, O = Ne(Ae(Ae(Ae(Ae([], ge(x), false), ge(y), false), ge(l), false), ge(h), false).map(function(L) {
      return Bt(L).map(function(q) {
        return i.formatTransition(q);
      });
    }));
    try {
      for (var M = ve(S), k = M.next(); !k.done; k = M.next()) {
        var $ = k.value;
        O.push($);
      }
    } catch (L) {
      e = { error: L };
    } finally {
      try {
        k && !k.done && (t = M.return) && t.call(M);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return O;
  }, r;
}();
function mt(r, e) {
  return new $c(r, e);
}
__name(mt, "mt");
u(mt, "createMachine");
var ro = ei(Ga(), 1);
var qc = u((r) => r != null && typeof r.draggable == "boolean", "isDraggable");
var La = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var ml = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Me(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = mt({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        this.dispatchEvent(new Event("draggable-init", { bubbles: true }));
      }, setInteract: () => {
        let i = (0, ro.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        La(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), ml(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("qpu-operation-xl")));
      }, release: () => {
        this.grabbed = false, this.dispatchEvent(new Event("operation-release", { bubbles: true }));
      }, startDragging: () => {
        this.dragging = true;
      }, endDragging: () => {
        this.grabbed = false, this.dragging = false, this.dispatchEvent(new Event("operation-end-dragging", { bubbles: true }));
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, this.dispatchEvent(new Event("operation-snap", { bubbles: true }));
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && this.snappedDropzone.dispatchEvent(new Event("operation-unsnap", { bubbles: true }));
      }, drop: () => {
        !this.snapped || (this.moveTo(0, 0), this.dispatchEvent(new Event("operation-drop", { bubbles: true })));
      }, delete: () => {
        (0, ro.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => La(this.dropzone), isOnPaletteDropzone: () => ml(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && La(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = ut(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${rt(i.value)}`);
      });
    }
    get draggable() {
      return this.draggableService.state !== void 0;
    }
    set draggable(i) {
      i ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    initDraggable() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let i = this.parentElement;
      return F.notNull(i), !ml(i) && !La(i) ? null : i;
    }
    set snapTargets(i) {
      (0, ro.default)(this).draggable({ modifiers: [ro.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(i) {
      let l = i.modifiers[0];
      if (l.inRange) {
        let c = l.target.source;
        this.dispatchEvent(new CustomEvent("operation-in-snap-range", { detail: { snapTargetInfo: c }, bubbles: true })), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(i) {
      this.draggableService.send({ type: "GRAB", x: i.offsetX, y: i.offsetY });
    }
    release() {
      this.draggableService.send({ type: "RELEASE" });
    }
    startDragging() {
      this.draggableService.send({ type: "START_DRAGGING" });
    }
    endDragging() {
      this.draggableService.send({ type: "END_DRAGGING" });
    }
    dragMove(i) {
      this.move(i.dx, i.dy);
    }
    move(i, l) {
      let c = this.operationX + i, f = this.operationY + l;
      this.moveTo(c, f);
    }
    moveTo(i, l) {
      this.operationX = i, this.operationY = l, this.style.transform = `translate(${i}px, ${l}px)`;
    }
    moveByOffset(i, l) {
      let c = i - this.clientWidth / 2, f = l - this.clientHeight / 2;
      this.move(c, f);
    }
  }
  __name(e, "e");
  return u(e, "DraggableMixinClass"), A([R], e.prototype, "operationX", 2), A([R], e.prototype, "operationY", 2), A([R], e.prototype, "grabbed", 2), A([R], e.prototype, "dragging", 2), A([R], e.prototype, "snapped", 2), A([R], e.prototype, "bit", 2), A([R], e.prototype, "debugDraggable", 2), e;
}
__name(Me, "Me");
u(Me, "DraggableMixin");
var _n = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Wc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), A([R], e.prototype, "flag", 2), e;
}
__name(Wc, "Wc");
u(Wc, "FlaggableMixin");
var qe = "top";
var it = "bottom";
var Ze = "right";
var Ve = "left";
var ja = "auto";
var en = [qe, it, Ze, Ve];
var Nr = "start";
var kn = "end";
var Uc = "clippingParents";
var Ba = "viewport";
var pi = "popper";
var Vc = "reference";
var gl = en.reduce(function(r, e) {
  return r.concat([e + "-" + Nr, e + "-" + kn]);
}, []);
var Ha = [].concat(en, [ja]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Nr, e + "-" + kn]);
}, []);
var Dh = "beforeRead";
var Rh = "read";
var Nh = "afterRead";
var zh = "beforeMain";
var Gh = "main";
var Lh = "afterMain";
var jh = "beforeWrite";
var Bh = "write";
var Hh = "afterWrite";
var Yc = [Dh, Rh, Nh, zh, Gh, Lh, jh, Bh, Hh];
function ct(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(ct, "ct");
u(ct, "getNodeName");
function Ye(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Ye, "Ye");
u(Ye, "getWindow");
function Sr(r) {
  var e = Ye(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Sr, "Sr");
u(Sr, "isElement");
function ot(r) {
  var e = Ye(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(ot, "ot");
u(ot, "isHTMLElement");
function $a(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Ye(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name($a, "$a");
u($a, "isShadowRoot");
function $h(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !ot(c) || !ct(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var b = l[f];
      b === false ? c.removeAttribute(f) : c.setAttribute(f, b === true ? "" : b);
    }));
  });
}
__name($h, "$h");
u($h, "applyStyles");
function Fh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, f = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), b = f.reduce(function(v, d) {
        return v[d] = "", v;
      }, {});
      !ot(l) || !ct(l) || (Object.assign(l.style, b), Object.keys(c).forEach(function(v) {
        l.removeAttribute(v);
      }));
    });
  };
}
__name(Fh, "Fh");
u(Fh, "effect");
var no = { name: "applyStyles", enabled: true, phase: "write", fn: $h, effect: Fh, requires: ["computeStyles"] };
function pt(r) {
  return r.split("-")[0];
}
__name(pt, "pt");
u(pt, "getBasePlacement");
var hr = Math.max;
var Dn = Math.min;
var zr = Math.round;
function Xt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (ot(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = zr(t.width) / f || 1), c > 0 && (l = zr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Xt, "Xt");
u(Xt, "getBoundingClientRect");
function Rn(r) {
  var e = Xt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Rn, "Rn");
u(Rn, "getLayoutRect");
function io(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && $a(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(io, "io");
u(io, "contains");
function At(r) {
  return Ye(r).getComputedStyle(r);
}
__name(At, "At");
u(At, "getComputedStyle");
function bl(r) {
  return ["table", "td", "th"].indexOf(ct(r)) >= 0;
}
__name(bl, "bl");
u(bl, "isTableElement");
function gt(r) {
  return ((Sr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(gt, "gt");
u(gt, "getDocumentElement");
function Gr(r) {
  return ct(r) === "html" ? r : r.assignedSlot || r.parentNode || ($a(r) ? r.host : null) || gt(r);
}
__name(Gr, "Gr");
u(Gr, "getParentNode");
function Xc(r) {
  return !ot(r) || At(r).position === "fixed" ? null : r.offsetParent;
}
__name(Xc, "Xc");
u(Xc, "getTrueOffsetParent");
function qh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && ot(r)) {
    var i = At(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Gr(r); ot(l) && ["html", "body"].indexOf(ct(l)) < 0; ) {
    var c = At(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(qh, "qh");
u(qh, "getContainingBlock");
function vr(r) {
  for (var e = Ye(r), t = Xc(r); t && bl(t) && At(t).position === "static"; )
    t = Xc(t);
  return t && (ct(t) === "html" || ct(t) === "body" && At(t).position === "static") ? e : t || qh(r) || e;
}
__name(vr, "vr");
u(vr, "getOffsetParent");
function Nn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Nn, "Nn");
u(Nn, "getMainAxisFromPlacement");
function zn(r, e, t) {
  return hr(r, Dn(e, t));
}
__name(zn, "zn");
u(zn, "within");
function Zc(r, e, t) {
  var i = zn(r, e, t);
  return i > t ? t : i;
}
__name(Zc, "Zc");
u(Zc, "withinMaxClamp");
function oo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(oo, "oo");
u(oo, "getFreshSideObject");
function ao(r) {
  return Object.assign({}, oo(), r);
}
__name(ao, "ao");
u(ao, "mergePaddingObject");
function so(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(so, "so");
u(so, "expandToHashMap");
var Wh = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ao(typeof e != "number" ? e : so(e, en));
}, "toPaddingObject");
function Uh(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, b = pt(t.placement), v = Nn(b), d = [Ve, Ze].indexOf(b) >= 0, h = d ? "height" : "width";
  if (!(!c || !f)) {
    var x = Wh(l.padding, t), y = Rn(c), S = v === "y" ? qe : Ve, O = v === "y" ? it : Ze, M = t.rects.reference[h] + t.rects.reference[v] - f[v] - t.rects.popper[h], k = f[v] - t.rects.reference[v], $ = vr(c), L = $ ? v === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, q = M / 2 - k / 2, P = x[S], Z = L - y[h] - x[O], _ = L / 2 - y[h] / 2 + q, j = zn(P, _, Z), V = v;
    t.modifiersData[i] = (e = {}, e[V] = j, e.centerOffset = j - _, e);
  }
}
__name(Uh, "Uh");
u(Uh, "arrow");
function Vh(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !io(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(Vh, "Vh");
u(Vh, "effect");
var Jc = { name: "arrow", enabled: true, phase: "main", fn: Uh, effect: Vh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Zt(r) {
  return r.split("-")[1];
}
__name(Zt, "Zt");
u(Zt, "getVariation");
var Yh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: zr(e * l) / l || 0, y: zr(t * l) / l || 0 };
}
__name(Xh, "Xh");
u(Xh, "roundOffsetsByDPR");
function Kc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, b = r.position, v = r.gpuAcceleration, d = r.adaptive, h = r.roundOffsets, x = r.isFixed, y = f.x, S = y === void 0 ? 0 : y, O = f.y, M = O === void 0 ? 0 : O, k = typeof h == "function" ? h({ x: S, y: M }) : { x: S, y: M };
  S = k.x, M = k.y;
  var $ = f.hasOwnProperty("x"), L = f.hasOwnProperty("y"), q = Ve, P = qe, Z = window;
  if (d) {
    var _ = vr(t), j = "clientHeight", V = "clientWidth";
    if (_ === Ye(t) && (_ = gt(t), At(_).position !== "static" && b === "absolute" && (j = "scrollHeight", V = "scrollWidth")), _ = _, l === qe || (l === Ve || l === Ze) && c === kn) {
      P = it;
      var K = x && Z.visualViewport ? Z.visualViewport.height : _[j];
      M -= K - i.height, M *= v ? 1 : -1;
    }
    if (l === Ve || (l === qe || l === it) && c === kn) {
      q = Ze;
      var ie = x && Z.visualViewport ? Z.visualViewport.width : _[V];
      S -= ie - i.width, S *= v ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: b }, d && Yh), pe = h === true ? Xh({ x: S, y: M }) : { x: S, y: M };
  if (S = pe.x, M = pe.y, v) {
    var W;
    return Object.assign({}, ne, (W = {}, W[P] = L ? "0" : "", W[q] = $ ? "0" : "", W.transform = (Z.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + M + "px)" : "translate3d(" + S + "px, " + M + "px, 0)", W));
  }
  return Object.assign({}, ne, (e = {}, e[P] = L ? M + "px" : "", e[q] = $ ? S + "px" : "", e.transform = "", e));
}
__name(Kc, "Kc");
u(Kc, "mapToStyles");
function Zh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, b = t.roundOffsets, v = b === void 0 ? true : b;
  if (false)
    var d;
  var h = { placement: pt(e.placement), variation: Zt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Kc(Object.assign({}, h, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: v })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Kc(Object.assign({}, h, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: v })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(Zh, "Zh");
u(Zh, "computeStyles");
var Qc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Zh, data: {} };
var Fa = { passive: true };
function Jh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, b = f === void 0 ? true : f, v = Ye(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && d.forEach(function(h) {
    h.addEventListener("scroll", t.update, Fa);
  }), b && v.addEventListener("resize", t.update, Fa), function() {
    c && d.forEach(function(h) {
      h.removeEventListener("scroll", t.update, Fa);
    }), b && v.removeEventListener("resize", t.update, Fa);
  };
}
__name(Jh, "Jh");
u(Jh, "effect");
var ep = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Jh, data: {} };
var Kh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function di(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Kh[e];
  });
}
__name(di, "di");
u(di, "getOppositePlacement");
var Qh = { start: "end", end: "start" };
function qa(r) {
  return r.replace(/start|end/g, function(e) {
    return Qh[e];
  });
}
__name(qa, "qa");
u(qa, "getOppositeVariationPlacement");
function Gn(r) {
  var e = Ye(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(Gn, "Gn");
u(Gn, "getWindowScroll");
function Ln(r) {
  return Xt(gt(r)).left + Gn(r).scrollLeft;
}
__name(Ln, "Ln");
u(Ln, "getWindowScrollBarX");
function yl(r) {
  var e = Ye(r), t = gt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, b = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, b = i.offsetTop)), { width: l, height: c, x: f + Ln(r), y: b };
}
__name(yl, "yl");
u(yl, "getViewportRect");
function wl(r) {
  var e, t = gt(r), i = Gn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = hr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = hr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), b = -i.scrollLeft + Ln(r), v = -i.scrollTop;
  return At(l || t).direction === "rtl" && (b += hr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: b, y: v };
}
__name(wl, "wl");
u(wl, "getDocumentRect");
function jn(r) {
  var e = At(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(jn, "jn");
u(jn, "isScrollParent");
function Wa(r) {
  return ["html", "body", "#document"].indexOf(ct(r)) >= 0 ? r.ownerDocument.body : ot(r) && jn(r) ? r : Wa(Gr(r));
}
__name(Wa, "Wa");
u(Wa, "getScrollParent");
function tn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Wa(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Ye(i), f = l ? [c].concat(c.visualViewport || [], jn(i) ? i : []) : i, b = e.concat(f);
  return l ? b : b.concat(tn(Gr(f)));
}
__name(tn, "tn");
u(tn, "listScrollParents");
function fi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(fi, "fi");
u(fi, "rectToClientRect");
function ev(r) {
  var e = Xt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(ev, "ev");
u(ev, "getInnerBoundingClientRect");
function tp(r, e) {
  return e === Ba ? fi(yl(r)) : Sr(e) ? ev(e) : fi(wl(gt(r)));
}
__name(tp, "tp");
u(tp, "getClientRectFromMixedType");
function tv(r) {
  var e = tn(Gr(r)), t = ["absolute", "fixed"].indexOf(At(r).position) >= 0, i = t && ot(r) ? vr(r) : r;
  return Sr(i) ? e.filter(function(l) {
    return Sr(l) && io(l, i) && ct(l) !== "body";
  }) : [];
}
__name(tv, "tv");
u(tv, "getClippingParents");
function xl(r, e, t) {
  var i = e === "clippingParents" ? tv(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(b, v) {
    var d = tp(r, v);
    return b.top = hr(d.top, b.top), b.right = Dn(d.right, b.right), b.bottom = Dn(d.bottom, b.bottom), b.left = hr(d.left, b.left), b;
  }, tp(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(xl, "xl");
u(xl, "getClippingRect");
function lo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? pt(i) : null, c = i ? Zt(i) : null, f = e.x + e.width / 2 - t.width / 2, b = e.y + e.height / 2 - t.height / 2, v;
  switch (l) {
    case qe:
      v = { x: f, y: e.y - t.height };
      break;
    case it:
      v = { x: f, y: e.y + e.height };
      break;
    case Ze:
      v = { x: e.x + e.width, y: b };
      break;
    case Ve:
      v = { x: e.x - t.width, y: b };
      break;
    default:
      v = { x: e.x, y: e.y };
  }
  var d = l ? Nn(l) : null;
  if (d != null) {
    var h = d === "y" ? "height" : "width";
    switch (c) {
      case Nr:
        v[d] = v[d] - (e[h] / 2 - t[h] / 2);
        break;
      case kn:
        v[d] = v[d] + (e[h] / 2 - t[h] / 2);
        break;
      default:
    }
  }
  return v;
}
__name(lo, "lo");
u(lo, "computeOffsets");
function mr(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? Uc : c, b = t.rootBoundary, v = b === void 0 ? Ba : b, d = t.elementContext, h = d === void 0 ? pi : d, x = t.altBoundary, y = x === void 0 ? false : x, S = t.padding, O = S === void 0 ? 0 : S, M = ao(typeof O != "number" ? O : so(O, en)), k = h === pi ? Vc : pi, $ = r.rects.popper, L = r.elements[y ? k : h], q = xl(Sr(L) ? L : L.contextElement || gt(r.elements.popper), f, v), P = Xt(r.elements.reference), Z = lo({ reference: P, element: $, strategy: "absolute", placement: l }), _ = fi(Object.assign({}, $, Z)), j = h === pi ? _ : P, V = { top: q.top - j.top + M.top, bottom: j.bottom - q.bottom + M.bottom, left: q.left - j.left + M.left, right: j.right - q.right + M.right }, K = r.modifiersData.offset;
  if (h === pi && K) {
    var ie = K[l];
    Object.keys(V).forEach(function(ne) {
      var pe = [Ze, it].indexOf(ne) >= 0 ? 1 : -1, W = [qe, it].indexOf(ne) >= 0 ? "y" : "x";
      V[ne] += ie[W] * pe;
    });
  }
  return V;
}
__name(mr, "mr");
u(mr, "detectOverflow");
function El(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, b = t.flipVariations, v = t.allowedAutoPlacements, d = v === void 0 ? Ha : v, h = Zt(i), x = h ? b ? gl : gl.filter(function(O) {
    return Zt(O) === h;
  }) : en, y = x.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  y.length === 0 && (y = x);
  var S = y.reduce(function(O, M) {
    return O[M] = mr(r, { placement: M, boundary: l, rootBoundary: c, padding: f })[pt(M)], O;
  }, {});
  return Object.keys(S).sort(function(O, M) {
    return S[O] - S[M];
  });
}
__name(El, "El");
u(El, "computeAutoPlacement");
function rv(r) {
  if (pt(r) === ja)
    return [];
  var e = di(r);
  return [qa(r), e, qa(e)];
}
__name(rv, "rv");
u(rv, "getExpandedFallbackPlacements");
function nv(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? true : f, v = t.fallbackPlacements, d = t.padding, h = t.boundary, x = t.rootBoundary, y = t.altBoundary, S = t.flipVariations, O = S === void 0 ? true : S, M = t.allowedAutoPlacements, k = e.options.placement, $ = pt(k), L = $ === k, q = v || (L || !O ? [di(k)] : rv(k)), P = [k].concat(q).reduce(function(Tt, kt) {
      return Tt.concat(pt(kt) === ja ? El(e, { placement: kt, boundary: h, rootBoundary: x, padding: d, flipVariations: O, allowedAutoPlacements: M }) : kt);
    }, []), Z = e.rects.reference, _ = e.rects.popper, j = /* @__PURE__ */ new Map(), V = true, K = P[0], ie = 0; ie < P.length; ie++) {
      var ne = P[ie], pe = pt(ne), W = Zt(ne) === Nr, ue = [qe, it].indexOf(pe) >= 0, ke = ue ? "width" : "height", We = mr(e, { placement: ne, boundary: h, rootBoundary: x, altBoundary: y, padding: d }), Ge = ue ? W ? Ze : Ve : W ? it : qe;
      Z[ke] > _[ke] && (Ge = di(Ge));
      var fe = di(Ge), Xe = [];
      if (c && Xe.push(We[pe] <= 0), b && Xe.push(We[Ge] <= 0, We[fe] <= 0), Xe.every(function(Tt) {
        return Tt;
      })) {
        K = ne, V = false;
        break;
      }
      j.set(ne, Xe);
    }
    if (V)
      for (var Qe = O ? 3 : 1, Ft = u(function(kt) {
        var qt = P.find(function(pr) {
          var Wt = j.get(pr);
          if (Wt)
            return Wt.slice(0, kt).every(function(Gt) {
              return Gt;
            });
        });
        if (qt)
          return K = qt, "break";
      }, "_loop"), J = Qe; J > 0; J--) {
        var cr = Ft(J);
        if (cr === "break")
          break;
      }
    e.placement !== K && (e.modifiersData[i]._skip = true, e.placement = K, e.reset = true);
  }
}
__name(nv, "nv");
u(nv, "flip");
var rp = { name: "flip", enabled: true, phase: "main", fn: nv, requiresIfExists: ["offset"], data: { _skip: false } };
function np(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(np, "np");
u(np, "getSideOffsets");
function ip(r) {
  return [qe, Ze, it, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
__name(ip, "ip");
u(ip, "isAnySideFullyClipped");
function iv(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = mr(e, { elementContext: "reference" }), b = mr(e, { altBoundary: true }), v = np(f, i), d = np(b, l, c), h = ip(v), x = ip(d);
  e.modifiersData[t] = { referenceClippingOffsets: v, popperEscapeOffsets: d, isReferenceHidden: h, hasPopperEscaped: x }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": x });
}
__name(iv, "iv");
u(iv, "hide");
var op = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: iv };
function ov(r, e, t) {
  var i = pt(r), l = [Ve, qe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], b = c[1];
  return f = f || 0, b = (b || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: b, y: f } : { x: f, y: b };
}
__name(ov, "ov");
u(ov, "distanceAndSkiddingToXY");
function av(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = Ha.reduce(function(h, x) {
    return h[x] = ov(x, e.rects, c), h;
  }, {}), b = f[e.placement], v = b.x, d = b.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += v, e.modifiersData.popperOffsets.y += d), e.modifiersData[i] = f;
}
__name(av, "av");
u(av, "offset");
var ap = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: av };
function sv(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = lo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(sv, "sv");
u(sv, "popperOffsets");
var sp = { name: "popperOffsets", enabled: true, phase: "read", fn: sv, data: {} };
function Sl(r) {
  return r === "x" ? "y" : "x";
}
__name(Sl, "Sl");
u(Sl, "getAltAxis");
function lv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? false : f, v = t.boundary, d = t.rootBoundary, h = t.altBoundary, x = t.padding, y = t.tether, S = y === void 0 ? true : y, O = t.tetherOffset, M = O === void 0 ? 0 : O, k = mr(e, { boundary: v, rootBoundary: d, padding: x, altBoundary: h }), $ = pt(e.placement), L = Zt(e.placement), q = !L, P = Nn($), Z = Sl(P), _ = e.modifiersData.popperOffsets, j = e.rects.reference, V = e.rects.popper, K = typeof M == "function" ? M(Object.assign({}, e.rects, { placement: e.placement })) : M, ie = typeof K == "number" ? { mainAxis: K, altAxis: K } : Object.assign({ mainAxis: 0, altAxis: 0 }, K), ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, pe = { x: 0, y: 0 };
  if (!!_) {
    if (c) {
      var W, ue = P === "y" ? qe : Ve, ke = P === "y" ? it : Ze, We = P === "y" ? "height" : "width", Ge = _[P], fe = Ge + k[ue], Xe = Ge - k[ke], Qe = S ? -V[We] / 2 : 0, Ft = L === Nr ? j[We] : V[We], J = L === Nr ? -V[We] : -j[We], cr = e.elements.arrow, Tt = S && cr ? Rn(cr) : { width: 0, height: 0 }, kt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : oo(), qt = kt[ue], pr = kt[ke], Wt = zn(0, j[We], Tt[We]), Gt = q ? j[We] / 2 - Qe - Wt - qt - ie.mainAxis : Ft - Wt - qt - ie.mainAxis, br = q ? -j[We] / 2 + Qe + Wt + pr + ie.mainAxis : J + Wt + pr + ie.mainAxis, Mr = e.elements.arrow && vr(e.elements.arrow), sn = Mr ? P === "y" ? Mr.clientTop || 0 : Mr.clientLeft || 0 : 0, ye = (W = ne == null ? void 0 : ne[P]) != null ? W : 0, ln = Ge + Gt - ye - sn, un = Ge + br - ye, Ot = zn(S ? Dn(fe, ln) : fe, Ge, S ? hr(Xe, un) : Xe);
      _[P] = Ot, pe[P] = Ot - Ge;
    }
    if (b) {
      var Pr, Fn = P === "x" ? qe : Ve, Fr = P === "x" ? it : Ze, dr = _[Z], yt = Z === "y" ? "height" : "width", yr = dr + k[Fn], Dt = dr - k[Fr], cn = [qe, Ve].indexOf($) !== -1, Ir = (Pr = ne == null ? void 0 : ne[Z]) != null ? Pr : 0, pn = cn ? yr : dr - j[yt] - V[yt] - Ir + ie.altAxis, qr = cn ? dr + j[yt] + V[yt] - Ir - ie.altAxis : Dt, dn = S && cn ? Zc(pn, dr, qr) : zn(S ? pn : yr, dr, S ? qr : Dt);
      _[Z] = dn, pe[Z] = dn - dr;
    }
    e.modifiersData[i] = pe;
  }
}
__name(lv, "lv");
u(lv, "preventOverflow");
var lp = { name: "preventOverflow", enabled: true, phase: "main", fn: lv, requiresIfExists: ["offset"] };
function Cl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(Cl, "Cl");
u(Cl, "getHTMLElementScroll");
function Tl(r) {
  return r === Ye(r) || !ot(r) ? Gn(r) : Cl(r);
}
__name(Tl, "Tl");
u(Tl, "getNodeScroll");
function uv(r) {
  var e = r.getBoundingClientRect(), t = zr(e.width) / r.offsetWidth || 1, i = zr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(uv, "uv");
u(uv, "isElementScaled");
function Ol(r, e, t) {
  t === void 0 && (t = false);
  var i = ot(e), l = ot(e) && uv(e), c = gt(e), f = Xt(r, l), b = { scrollLeft: 0, scrollTop: 0 }, v = { x: 0, y: 0 };
  return (i || !i && !t) && ((ct(e) !== "body" || jn(c)) && (b = Tl(e)), ot(e) ? (v = Xt(e, true), v.x += e.clientLeft, v.y += e.clientTop) : c && (v.x = Ln(c))), { x: f.left + b.scrollLeft - v.x, y: f.top + b.scrollTop - v.y, width: f.width, height: f.height };
}
__name(Ol, "Ol");
u(Ol, "getCompositeRect");
function cv(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(b) {
      if (!t.has(b)) {
        var v = e.get(b);
        v && l(v);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(cv, "cv");
u(cv, "order");
function Ml(r) {
  var e = cv(r);
  return Yc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(Ml, "Ml");
u(Ml, "orderModifiers");
function Pl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(Pl, "Pl");
u(Pl, "debounce");
function Il(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(Il, "Il");
u(Il, "mergeByName");
var up = { placement: "bottom", modifiers: [], strategy: "absolute" };
function cp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(cp, "cp");
u(cp, "areValidElements");
function pp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? up : l;
  return u(function(b, v, d) {
    d === void 0 && (d = c);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, up, c), modifiersData: {}, elements: { reference: b, popper: v }, attributes: {}, styles: {} }, x = [], y = false, S = { state: h, setOptions: u(function($) {
      var L = typeof $ == "function" ? $(h.options) : $;
      M(), h.options = Object.assign({}, c, h.options, L), h.scrollParents = { reference: Sr(b) ? tn(b) : b.contextElement ? tn(b.contextElement) : [], popper: tn(v) };
      var q = Ml(Il([].concat(i, h.options.modifiers)));
      if (h.orderedModifiers = q.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var P;
        if (getBasePlacement(h.options.placement) === auto)
          var Z;
        var _, j, V, K, ie;
      }
      return O(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!y) {
        var $ = h.elements, L = $.reference, q = $.popper;
        if (!!cp(L, q)) {
          h.rects = { reference: Ol(L, vr(q), h.options.strategy === "fixed"), popper: Rn(q) }, h.reset = false, h.placement = h.options.placement, h.orderedModifiers.forEach(function(ne) {
            return h.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var P = 0, Z = 0; Z < h.orderedModifiers.length; Z++) {
            if (h.reset === true) {
              h.reset = false, Z = -1;
              continue;
            }
            var _ = h.orderedModifiers[Z], j = _.fn, V = _.options, K = V === void 0 ? {} : V, ie = _.name;
            typeof j == "function" && (h = j({ state: h, options: K, name: ie, instance: S }) || h);
          }
        }
      }
    }, "forceUpdate"), update: Pl(function() {
      return new Promise(function(k) {
        S.forceUpdate(), k(h);
      });
    }), destroy: u(function() {
      M(), y = true;
    }, "destroy") };
    if (!cp(b, v))
      return S;
    S.setOptions(d).then(function(k) {
      !y && d.onFirstUpdate && d.onFirstUpdate(k);
    });
    function O() {
      h.orderedModifiers.forEach(function(k) {
        var $ = k.name, L = k.options, q = L === void 0 ? {} : L, P = k.effect;
        if (typeof P == "function") {
          var Z = P({ state: h, name: $, instance: S, options: q }), _ = u(function() {
          }, "noopFn");
          x.push(Z || _);
        }
      });
    }
    __name(O, "O");
    u(O, "runModifierEffects");
    function M() {
      x.forEach(function(k) {
        return k();
      }), x = [];
    }
    __name(M, "M");
    return u(M, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(pp, "pp");
u(pp, "popperGenerator");
var pv = [ep, sp, Qc, no, ap, rp, lp, Jc, op];
var Al = pp({ defaultModifiers: pv });
var co = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var dv = "tippy-box";
var xp = "tippy-content";
var fv = "tippy-backdrop";
var Ep = "tippy-arrow";
var Sp = "tippy-svg-arrow";
var Bn = { passive: true, capture: true };
var Cp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function _l(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(_l, "_l");
u(_l, "getValueAtIndexOrReturn");
function Gl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Gl, "Gl");
u(Gl, "isType");
function Tp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(Tp, "Tp");
u(Tp, "invokeWithArgsOrReturn");
function dp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(dp, "dp");
u(dp, "debounce");
function hv(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(hv, "hv");
u(hv, "splitBySpaces");
function hi(r) {
  return [].concat(r);
}
__name(hi, "hi");
u(hi, "normalizeToArray");
function fp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(fp, "fp");
u(fp, "pushIfUnique");
function vv(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(vv, "vv");
u(vv, "unique");
function mv(r) {
  return r.split("-")[0];
}
__name(mv, "mv");
u(mv, "getBasePlacement");
function Va(r) {
  return [].slice.call(r);
}
__name(Va, "Va");
u(Va, "arrayFrom");
function hp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(hp, "hp");
u(hp, "removeUndefinedProps");
function uo() {
  return document.createElement("div");
}
__name(uo, "uo");
u(uo, "div");
function Ya(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Gl(r, e);
  });
}
__name(Ya, "Ya");
u(Ya, "isElement");
function gv(r) {
  return Gl(r, "NodeList");
}
__name(gv, "gv");
u(gv, "isNodeList");
function bv(r) {
  return Gl(r, "MouseEvent");
}
__name(bv, "bv");
u(bv, "isMouseEvent");
function yv(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(yv, "yv");
u(yv, "isReferenceElement");
function wv(r) {
  return Ya(r) ? [r] : gv(r) ? Va(r) : Array.isArray(r) ? r : Va(document.querySelectorAll(r));
}
__name(wv, "wv");
u(wv, "getArrayOfElements");
function kl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(kl, "kl");
u(kl, "setTransitionDuration");
function vp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(vp, "vp");
u(vp, "setVisibilityState");
function xv(r) {
  var e, t = hi(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(xv, "xv");
u(xv, "getOwnerDocument");
function Ev(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, b = l.props, v = b.interactiveBorder, d = mv(f.placement), h = f.modifiersData.offset;
    if (!h)
      return true;
    var x = d === "bottom" ? h.top.y : 0, y = d === "top" ? h.bottom.y : 0, S = d === "right" ? h.left.x : 0, O = d === "left" ? h.right.x : 0, M = c.top - i + x > v, k = i - c.bottom - y > v, $ = c.left - t + S > v, L = t - c.right - O > v;
    return M || k || $ || L;
  });
}
__name(Ev, "Ev");
u(Ev, "isCursorOutsideInteractiveBorder");
function Dl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(Dl, "Dl");
u(Dl, "updateTransitionEndListener");
function mp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(mp, "mp");
u(mp, "actualContains");
var Cr = { isTouch: false };
var gp = 0;
function Sv() {
  Cr.isTouch || (Cr.isTouch = true, window.performance && document.addEventListener("mousemove", Op));
}
__name(Sv, "Sv");
u(Sv, "onDocumentTouchStart");
function Op() {
  var r = performance.now();
  r - gp < 20 && (Cr.isTouch = false, document.removeEventListener("mousemove", Op)), gp = r;
}
__name(Op, "Op");
u(Op, "onDocumentMouseMove");
function Cv() {
  var r = document.activeElement;
  if (yv(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(Cv, "Cv");
u(Cv, "onWindowBlur");
function Tv() {
  document.addEventListener("touchstart", Sv, Bn), window.addEventListener("blur", Cv);
}
__name(Tv, "Tv");
u(Tv, "bindGlobalEventListeners");
var Ov = typeof window != "undefined" && typeof document != "undefined";
var Mv = Ov ? !!window.msCrypto : false;
var Pv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Iv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var gr = Object.assign({ appendTo: Cp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
}, "onAfterUpdate"), onBeforeUpdate: u(function() {
}, "onBeforeUpdate"), onCreate: u(function() {
}, "onCreate"), onDestroy: u(function() {
}, "onDestroy"), onHidden: u(function() {
}, "onHidden"), onHide: u(function() {
}, "onHide"), onMount: u(function() {
}, "onMount"), onShow: u(function() {
}, "onShow"), onShown: u(function() {
}, "onShown"), onTrigger: u(function() {
}, "onTrigger"), onUntrigger: u(function() {
}, "onUntrigger"), onClickOutside: u(function() {
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Pv, Iv);
var Av = Object.keys(gr);
var _v = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    gr[i] = e[i];
  });
}, "setDefaultProps");
function Mp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var b;
      i[c] = r[c] !== void 0 ? r[c] : (b = gr[c]) != null ? b : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(Mp, "Mp");
u(Mp, "getExtendedPassedProps");
function kv(r, e) {
  var t = e ? Object.keys(Mp(Object.assign({}, gr, { plugins: e }))) : Av, i = t.reduce(function(l, c) {
    var f = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!f)
      return l;
    if (c === "content")
      l[c] = f;
    else
      try {
        l[c] = JSON.parse(f);
      } catch (b) {
        l[c] = f;
      }
    return l;
  }, {});
  return i;
}
__name(kv, "kv");
u(kv, "getDataAttributeProps");
function bp(r, e) {
  var t = Object.assign({}, e, { content: Tp(e.content, [r]) }, e.ignoreAttributes ? {} : kv(r, e.plugins));
  return t.aria = Object.assign({}, gr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(bp, "bp");
u(bp, "evaluateProps");
var Dv = u(function() {
  return "innerHTML";
}, "innerHTML");
function Nl(r, e) {
  r[Dv()] = e;
}
__name(Nl, "Nl");
u(Nl, "dangerouslySetInnerHTML");
function yp(r) {
  var e = uo();
  return r === true ? e.className = Ep : (e.className = Sp, Ya(r) ? e.appendChild(r) : Nl(e, r)), e;
}
__name(yp, "yp");
u(yp, "createArrowElement");
function wp(r, e) {
  Ya(e.content) ? (Nl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Nl(r, e.content) : r.textContent = e.content);
}
__name(wp, "wp");
u(wp, "setContent");
function zl(r) {
  var e = r.firstElementChild, t = Va(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(xp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(Ep) || i.classList.contains(Sp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(fv);
  }) };
}
__name(zl, "zl");
u(zl, "getChildren");
function Pp(r) {
  var e = uo(), t = uo();
  t.className = dv, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = uo();
  i.className = xp, i.setAttribute("data-state", "hidden"), wp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var b = zl(e), v = b.box, d = b.content, h = b.arrow;
    f.theme ? v.setAttribute("data-theme", f.theme) : v.removeAttribute("data-theme"), typeof f.animation == "string" ? v.setAttribute("data-animation", f.animation) : v.removeAttribute("data-animation"), f.inertia ? v.setAttribute("data-inertia", "") : v.removeAttribute("data-inertia"), v.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? v.setAttribute("role", f.role) : v.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && wp(d, r.props), f.arrow ? h ? c.arrow !== f.arrow && (v.removeChild(h), v.appendChild(yp(f.arrow))) : v.appendChild(yp(f.arrow)) : h && v.removeChild(h);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(Pp, "Pp");
u(Pp, "render");
Pp.$$tippy = true;
var Rv = 1;
var Ua = [];
var Rl = [];
function Nv(r, e) {
  var t = bp(r, Object.assign({}, gr, Mp(hp(e)))), i, l, c, f = false, b = false, v = false, d = false, h, x, y, S = [], O = dp(ln, t.interactiveDebounce), M, k = Rv++, $ = null, L = vv(t.plugins), q = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, P = { id: k, reference: r, popper: uo(), popperInstance: $, props: t, state: q, plugins: L, clearDelayTimeouts: pn, setProps: qr, setContent: dn, show: yi, hide: wi, hideWithInteractivity: Mo, enable: cn, disable: Ir, unmount: Po, destroy: is };
  if (!t.render)
    return P;
  var Z = t.render(P), _ = Z.popper, j = Z.onUpdate;
  _.setAttribute("data-tippy-root", ""), _.id = "tippy-" + P.id, P.popper = _, r._tippy = P, _._tippy = P;
  var V = L.map(function(z) {
    return z.fn(P);
  }), K = r.hasAttribute("aria-expanded");
  return Mr(), Qe(), Ge(), fe("onCreate", [P]), t.showOnCreate && yr(), _.addEventListener("mouseenter", function() {
    P.props.interactive && P.state.isVisible && P.clearDelayTimeouts();
  }), _.addEventListener("mouseleave", function() {
    P.props.interactive && P.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", O);
  }), P;
  function ie() {
    var z = P.props.touch;
    return Array.isArray(z) ? z : [z, 0];
  }
  __name(ie, "ie");
  u(ie, "getNormalizedTouchSettings");
  function ne() {
    return ie()[0] === "hold";
  }
  __name(ne, "ne");
  u(ne, "getIsCustomTouchBehavior");
  function pe() {
    var z;
    return !!((z = P.props.render) != null && z.$$tippy);
  }
  __name(pe, "pe");
  u(pe, "getIsDefaultRenderFn");
  function W() {
    return M || r;
  }
  __name(W, "W");
  u(W, "getCurrentTarget");
  function ue() {
    var z = W().parentNode;
    return z ? xv(z) : document;
  }
  __name(ue, "ue");
  u(ue, "getDocument");
  function ke() {
    return zl(_);
  }
  __name(ke, "ke");
  u(ke, "getDefaultTemplateChildren");
  function We(z) {
    return P.state.isMounted && !P.state.isVisible || Cr.isTouch || h && h.type === "focus" ? 0 : _l(P.props.delay, z ? 0 : 1, gr.delay);
  }
  __name(We, "We");
  u(We, "getDelay");
  function Ge(z) {
    z === void 0 && (z = false), _.style.pointerEvents = P.props.interactive && !z ? "" : "none", _.style.zIndex = "" + P.props.zIndex;
  }
  __name(Ge, "Ge");
  u(Ge, "handleStyles");
  function fe(z, te, ae) {
    if (ae === void 0 && (ae = true), V.forEach(function(he) {
      he[z] && he[z].apply(he, te);
    }), ae) {
      var Ee;
      (Ee = P.props)[z].apply(Ee, te);
    }
  }
  __name(fe, "fe");
  u(fe, "invokeHook");
  function Xe() {
    var z = P.props.aria;
    if (!!z.content) {
      var te = "aria-" + z.content, ae = _.id, Ee = hi(P.props.triggerTarget || r);
      Ee.forEach(function(he) {
        var dt = he.getAttribute(te);
        if (P.state.isVisible)
          he.setAttribute(te, dt ? dt + " " + ae : ae);
        else {
          var Mt = dt && dt.replace(ae, "").trim();
          Mt ? he.setAttribute(te, Mt) : he.removeAttribute(te);
        }
      });
    }
  }
  __name(Xe, "Xe");
  u(Xe, "handleAriaContentAttribute");
  function Qe() {
    if (!(K || !P.props.aria.expanded)) {
      var z = hi(P.props.triggerTarget || r);
      z.forEach(function(te) {
        P.props.interactive ? te.setAttribute("aria-expanded", P.state.isVisible && te === W() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Qe, "Qe");
  u(Qe, "handleAriaExpandedAttribute");
  function Ft() {
    ue().removeEventListener("mousemove", O), Ua = Ua.filter(function(z) {
      return z !== O;
    });
  }
  __name(Ft, "Ft");
  u(Ft, "cleanupInteractiveMouseListeners");
  function J(z) {
    if (!(Cr.isTouch && (v || z.type === "mousedown"))) {
      var te = z.composedPath && z.composedPath()[0] || z.target;
      if (!(P.props.interactive && mp(_, te))) {
        if (hi(P.props.triggerTarget || r).some(function(ae) {
          return mp(ae, te);
        })) {
          if (Cr.isTouch || P.state.isVisible && P.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [P, z]);
        P.props.hideOnClick === true && (P.clearDelayTimeouts(), P.hide(), b = true, setTimeout(function() {
          b = false;
        }), P.state.isMounted || qt());
      }
    }
  }
  __name(J, "J");
  u(J, "onDocumentPress");
  function cr() {
    v = true;
  }
  __name(cr, "cr");
  u(cr, "onTouchMove");
  function Tt() {
    v = false;
  }
  __name(Tt, "Tt");
  u(Tt, "onTouchStart");
  function kt() {
    var z = ue();
    z.addEventListener("mousedown", J, true), z.addEventListener("touchend", J, Bn), z.addEventListener("touchstart", Tt, Bn), z.addEventListener("touchmove", cr, Bn);
  }
  __name(kt, "kt");
  u(kt, "addDocumentPress");
  function qt() {
    var z = ue();
    z.removeEventListener("mousedown", J, true), z.removeEventListener("touchend", J, Bn), z.removeEventListener("touchstart", Tt, Bn), z.removeEventListener("touchmove", cr, Bn);
  }
  __name(qt, "qt");
  u(qt, "removeDocumentPress");
  function pr(z, te) {
    Gt(z, function() {
      !P.state.isVisible && _.parentNode && _.parentNode.contains(_) && te();
    });
  }
  __name(pr, "pr");
  u(pr, "onTransitionedOut");
  function Wt(z, te) {
    Gt(z, te);
  }
  __name(Wt, "Wt");
  u(Wt, "onTransitionedIn");
  function Gt(z, te) {
    var ae = ke().box;
    function Ee(he) {
      he.target === ae && (Dl(ae, "remove", Ee), te());
    }
    __name(Ee, "Ee");
    if (u(Ee, "listener"), z === 0)
      return te();
    Dl(ae, "remove", x), Dl(ae, "add", Ee), x = Ee;
  }
  __name(Gt, "Gt");
  u(Gt, "onTransitionEnd");
  function br(z, te, ae) {
    ae === void 0 && (ae = false);
    var Ee = hi(P.props.triggerTarget || r);
    Ee.forEach(function(he) {
      he.addEventListener(z, te, ae), S.push({ node: he, eventType: z, handler: te, options: ae });
    });
  }
  __name(br, "br");
  u(br, "on");
  function Mr() {
    ne() && (br("touchstart", ye, { passive: true }), br("touchend", un, { passive: true })), hv(P.props.trigger).forEach(function(z) {
      if (z !== "manual")
        switch (br(z, ye), z) {
          case "mouseenter":
            br("mouseleave", un);
            break;
          case "focus":
            br(Mv ? "focusout" : "blur", Ot);
            break;
          case "focusin":
            br("focusout", Ot);
            break;
        }
    });
  }
  __name(Mr, "Mr");
  u(Mr, "addListeners");
  function sn() {
    S.forEach(function(z) {
      var te = z.node, ae = z.eventType, Ee = z.handler, he = z.options;
      te.removeEventListener(ae, Ee, he);
    }), S = [];
  }
  __name(sn, "sn");
  u(sn, "removeListeners");
  function ye(z) {
    var te, ae = false;
    if (!(!P.state.isEnabled || Pr(z) || b)) {
      var Ee = ((te = h) == null ? void 0 : te.type) === "focus";
      h = z, M = z.currentTarget, Qe(), !P.state.isVisible && bv(z) && Ua.forEach(function(he) {
        return he(z);
      }), z.type === "click" && (P.props.trigger.indexOf("mouseenter") < 0 || f) && P.props.hideOnClick !== false && P.state.isVisible ? ae = true : yr(z), z.type === "click" && (f = !ae), ae && !Ee && Dt(z);
    }
  }
  __name(ye, "ye");
  u(ye, "onTrigger");
  function ln(z) {
    var te = z.target, ae = W().contains(te) || _.contains(te);
    if (!(z.type === "mousemove" && ae)) {
      var Ee = yt().concat(_).map(function(he) {
        var dt, Mt = he._tippy, wt = (dt = Mt.popperInstance) == null ? void 0 : dt.state;
        return wt ? { popperRect: he.getBoundingClientRect(), popperState: wt, props: t } : null;
      }).filter(Boolean);
      Ev(Ee, z) && (Ft(), Dt(z));
    }
  }
  __name(ln, "ln");
  u(ln, "onMouseMove");
  function un(z) {
    var te = Pr(z) || P.props.trigger.indexOf("click") >= 0 && f;
    if (!te) {
      if (P.props.interactive) {
        P.hideWithInteractivity(z);
        return;
      }
      Dt(z);
    }
  }
  __name(un, "un");
  u(un, "onMouseLeave");
  function Ot(z) {
    P.props.trigger.indexOf("focusin") < 0 && z.target !== W() || P.props.interactive && z.relatedTarget && _.contains(z.relatedTarget) || Dt(z);
  }
  __name(Ot, "Ot");
  u(Ot, "onBlurOrFocusOut");
  function Pr(z) {
    return Cr.isTouch ? ne() !== z.type.indexOf("touch") >= 0 : false;
  }
  __name(Pr, "Pr");
  u(Pr, "isEventListenerStopped");
  function Fn() {
    Fr();
    var z = P.props, te = z.popperOptions, ae = z.placement, Ee = z.offset, he = z.getReferenceClientRect, dt = z.moveTransition, Mt = pe() ? zl(_).arrow : null, wt = he ? { getBoundingClientRect: he, contextElement: he.contextElement || W() } : r, Io = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(xt) {
      var Et = xt.state;
      if (pe()) {
        var Ar = ke(), qn = Ar.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Wn) {
          Wn === "placement" ? qn.setAttribute("data-placement", Et.placement) : Et.attributes.popper["data-popper-" + Wn] ? qn.setAttribute("data-" + Wn, "") : qn.removeAttribute("data-" + Wn);
        }), Et.attributes.popper = {};
      }
    }, "fn") }, Ut = [{ name: "offset", options: { offset: Ee } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !dt } }, Io];
    pe() && Mt && Ut.push({ name: "arrow", options: { element: Mt, padding: 3 } }), Ut.push.apply(Ut, (te == null ? void 0 : te.modifiers) || []), P.popperInstance = Al(wt, _, Object.assign({}, te, { placement: ae, onFirstUpdate: y, modifiers: Ut }));
  }
  __name(Fn, "Fn");
  u(Fn, "createPopperInstance");
  function Fr() {
    P.popperInstance && (P.popperInstance.destroy(), P.popperInstance = null);
  }
  __name(Fr, "Fr");
  u(Fr, "destroyPopperInstance");
  function dr() {
    var z = P.props.appendTo, te, ae = W();
    P.props.interactive && z === Cp || z === "parent" ? te = ae.parentNode : te = Tp(z, [ae]), te.contains(_) || te.appendChild(_), P.state.isMounted = true, Fn();
  }
  __name(dr, "dr");
  u(dr, "mount");
  function yt() {
    return Va(_.querySelectorAll("[data-tippy-root]"));
  }
  __name(yt, "yt");
  u(yt, "getNestedPopperTree");
  function yr(z) {
    P.clearDelayTimeouts(), z && fe("onTrigger", [P, z]), kt();
    var te = We(true), ae = ie(), Ee = ae[0], he = ae[1];
    Cr.isTouch && Ee === "hold" && he && (te = he), te ? i = setTimeout(function() {
      P.show();
    }, te) : P.show();
  }
  __name(yr, "yr");
  u(yr, "scheduleShow");
  function Dt(z) {
    if (P.clearDelayTimeouts(), fe("onUntrigger", [P, z]), !P.state.isVisible) {
      qt();
      return;
    }
    if (!(P.props.trigger.indexOf("mouseenter") >= 0 && P.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(z.type) >= 0 && f)) {
      var te = We(false);
      te ? l = setTimeout(function() {
        P.state.isVisible && P.hide();
      }, te) : c = requestAnimationFrame(function() {
        P.hide();
      });
    }
  }
  __name(Dt, "Dt");
  u(Dt, "scheduleHide");
  function cn() {
    P.state.isEnabled = true;
  }
  __name(cn, "cn");
  u(cn, "enable");
  function Ir() {
    P.hide(), P.state.isEnabled = false;
  }
  __name(Ir, "Ir");
  u(Ir, "disable");
  function pn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(pn, "pn");
  u(pn, "clearDelayTimeouts");
  function qr(z) {
    if (!P.state.isDestroyed) {
      fe("onBeforeUpdate", [P, z]), sn();
      var te = P.props, ae = bp(r, Object.assign({}, te, hp(z), { ignoreAttributes: true }));
      P.props = ae, Mr(), te.interactiveDebounce !== ae.interactiveDebounce && (Ft(), O = dp(ln, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? hi(te.triggerTarget).forEach(function(Ee) {
        Ee.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Qe(), Ge(), j && j(te, ae), P.popperInstance && (Fn(), yt().forEach(function(Ee) {
        requestAnimationFrame(Ee._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [P, z]);
    }
  }
  __name(qr, "qr");
  u(qr, "setProps");
  function dn(z) {
    P.setProps({ content: z });
  }
  __name(dn, "dn");
  u(dn, "setContent");
  function yi() {
    var z = P.state.isVisible, te = P.state.isDestroyed, ae = !P.state.isEnabled, Ee = Cr.isTouch && !P.props.touch, he = _l(P.props.duration, 0, gr.duration);
    if (!(z || te || ae || Ee) && !W().hasAttribute("disabled") && (fe("onShow", [P], false), P.props.onShow(P) !== false)) {
      if (P.state.isVisible = true, pe() && (_.style.visibility = "visible"), Ge(), kt(), P.state.isMounted || (_.style.transition = "none"), pe()) {
        var dt = ke(), Mt = dt.box, wt = dt.content;
        kl([Mt, wt], 0);
      }
      y = u(function() {
        var Ut;
        if (!(!P.state.isVisible || d)) {
          if (d = true, _.offsetHeight, _.style.transition = P.props.moveTransition, pe() && P.props.animation) {
            var xi = ke(), xt = xi.box, Et = xi.content;
            kl([xt, Et], he), vp([xt, Et], "visible");
          }
          Xe(), Qe(), fp(Rl, P), (Ut = P.popperInstance) == null || Ut.forceUpdate(), fe("onMount", [P]), P.props.animation && pe() && Wt(he, function() {
            P.state.isShown = true, fe("onShown", [P]);
          });
        }
      }, "onFirstUpdate"), dr();
    }
  }
  __name(yi, "yi");
  u(yi, "show");
  function wi() {
    var z = !P.state.isVisible, te = P.state.isDestroyed, ae = !P.state.isEnabled, Ee = _l(P.props.duration, 1, gr.duration);
    if (!(z || te || ae) && (fe("onHide", [P], false), P.props.onHide(P) !== false)) {
      if (P.state.isVisible = false, P.state.isShown = false, d = false, f = false, pe() && (_.style.visibility = "hidden"), Ft(), qt(), Ge(true), pe()) {
        var he = ke(), dt = he.box, Mt = he.content;
        P.props.animation && (kl([dt, Mt], Ee), vp([dt, Mt], "hidden"));
      }
      Xe(), Qe(), P.props.animation ? pe() && pr(Ee, P.unmount) : P.unmount();
    }
  }
  __name(wi, "wi");
  u(wi, "hide");
  function Mo(z) {
    ue().addEventListener("mousemove", O), fp(Ua, O), O(z);
  }
  __name(Mo, "Mo");
  u(Mo, "hideWithInteractivity");
  function Po() {
    P.state.isVisible && P.hide(), !!P.state.isMounted && (Fr(), yt().forEach(function(z) {
      z._tippy.unmount();
    }), _.parentNode && _.parentNode.removeChild(_), Rl = Rl.filter(function(z) {
      return z !== P;
    }), P.state.isMounted = false, fe("onHidden", [P]));
  }
  __name(Po, "Po");
  u(Po, "unmount");
  function is() {
    P.state.isDestroyed || (P.clearDelayTimeouts(), P.unmount(), sn(), delete r._tippy, P.state.isDestroyed = true, fe("onDestroy", [P]));
  }
  __name(is, "is");
  u(is, "destroy");
}
__name(Nv, "Nv");
u(Nv, "createTippy");
function po(r, e) {
  e === void 0 && (e = {});
  var t = gr.plugins.concat(e.plugins || []);
  Tv();
  var i = Object.assign({}, e, { plugins: t }), l = wv(r);
  if (false)
    var c, f;
  var b = l.reduce(function(v, d) {
    var h = d && Nv(d, i);
    return h && v.push(h), v;
  }, []);
  return Ya(r) ? b[0] : b;
}
__name(po, "po");
u(po, "tippy");
po.defaultProps = gr;
po.setDefaultProps = _v;
po.currentInput = Cr;
var cx = Object.assign({}, no, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
po.setDefaultProps({ render: Pp });
var St = po;
var Ll = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Pe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = mt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = St(this, { allowHTML: true, animation: false, arrow: co, delay: 0, placement: "auto", theme: "tooltip", onShow(l) {
          l.setContent(i);
        } }), this.addEventListener("mouseenter", this.showHelp));
      }, show: () => {
        this.popup.show();
      }, enable: () => {
        this.popup.enable(), this.help = true;
      }, disable: () => {
        var i;
        (i = this.popup) == null || i.disable(), this.help = false;
      }, destroy: () => {
        var i;
        (i = this.popup) == null || i.destroy();
      } } });
      this.helpableService = ut(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${rt(i.value)}`);
      }).start();
    }
    initHelp() {
      this.helpableService.send("INIT");
    }
    showHelp() {
      this.helpableService.send("SHOW");
    }
    disableHelp() {
      this.helpableService.send("DISABLE");
    }
    get helpContent() {
      let i;
      this.helpId !== "" ? i = this.helpId : i = `${this.tagName.toLowerCase()}-help`;
      let l = document.getElementById(i);
      return l === null ? null : l.content.cloneNode(true);
    }
  }
  __name(e, "e");
  return u(e, "HelpableMixinClass"), A([R], e.prototype, "help", 2), A([R], e.prototype, "helpId", 2), A([R], e.prototype, "debugHelpable", 2), e;
}
__name(Pe, "Pe");
u(Pe, "HelpableMixin");
function xe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), A([R], e.prototype, "hoverable", 2), e;
}
__name(xe, "xe");
u(xe, "HoverableMixin");
function* Xa(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Xa, "Xa");
u(Xa, "parse");
var Ip = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Ip");
var rn = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "rn");
var Tr;
var Za;
var Lr = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Tr.set(this, void 0), Za.set(this, ""), Ip(this, Tr, e, "f"), rn(this, Tr, "f").updateParent("");
  }
  get attributeName() {
    return rn(this, Tr, "f").attr.name;
  }
  get attributeNamespace() {
    return rn(this, Tr, "f").attr.namespaceURI;
  }
  get value() {
    return rn(this, Za, "f");
  }
  set value(e) {
    Ip(this, Za, e || "", "f"), rn(this, Tr, "f").updateParent(e);
  }
  get element() {
    return rn(this, Tr, "f").element;
  }
  get booleanValue() {
    return rn(this, Tr, "f").booleanValue;
  }
  set booleanValue(e) {
    rn(this, Tr, "f").booleanValue = e;
  }
}, "Lr");
u(Lr, "AttributeTemplatePart");
Tr = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap();
var fo = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.attr = t, this.partList = [];
  }
  get booleanValue() {
    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
  }
  set booleanValue(e) {
    if (this.partList.length !== 1)
      throw new DOMException("Operation not supported", "NotSupportedError");
    this.partList[0].value = e ? "" : null;
  }
  append(e) {
    this.partList.push(e);
  }
  updateParent(e) {
    if (this.partList.length === 1 && e === null)
      this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
    else {
      let t = this.partList.map((i) => typeof i == "string" ? i : i.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, t);
    }
  }
}, "fo");
u(fo, "AttributeValueSetter");
var Ap = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Ap");
var vi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "vi");
var Or;
var Jt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Or.set(this, void 0), Ap(this, Or, [e], "f"), e.textContent = "";
  }
  get value() {
    return vi(this, Or, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return vi(this, Or, "f")[0].previousSibling;
  }
  get nextSibling() {
    return vi(this, Or, "f")[vi(this, Or, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), vi(this, Or, "f")[0].before(...t);
    for (let i of vi(this, Or, "f"))
      i.remove();
    Ap(this, Or, t, "f");
  }
}, "Jt");
u(Jt, "NodeTemplatePart");
Or = /* @__PURE__ */ new WeakMap();
function ho(r) {
  return { createCallback(e, t, i) {
    this.processCallback(e, t, i);
  }, processCallback(e, t, i) {
    var l;
    if (!(typeof i != "object" || !i)) {
      for (let c of t)
        if (c.expression in i) {
          let f = (l = i[c.expression]) !== null && l !== void 0 ? l : "";
          r(c, f);
        }
    }
  } };
}
__name(ho, "ho");
u(ho, "createProcessor");
function vo(r, e) {
  r.value = String(e);
}
__name(vo, "vo");
u(vo, "processPropertyIdentity");
function Ja(r, e) {
  return typeof e == "boolean" && r instanceof Lr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(Ja, "Ja");
u(Ja, "processBooleanAttribute");
var jl = ho(vo);
var zv = ho((r, e) => {
  Ja(r, e) || vo(r, e);
});
var _p = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "_p");
var Ka = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "Ka");
var mo;
var go;
function* Gv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new fo(t, l);
          for (let f of Xa(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let b = new Lr(c, f.value);
              c.append(b), yield b;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Xa(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Jt(t, i.value));
        break;
      }
}
__name(Gv, "Gv");
u(Gv, "collectParts");
var nn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = jl) {
    var l, c;
    super();
    mo.set(this, void 0), go.set(this, void 0), Object.getPrototypeOf(this) !== nn.prototype && Object.setPrototypeOf(this, nn.prototype), this.appendChild(e.content.cloneNode(true)), _p(this, go, Array.from(Gv(this)), "f"), _p(this, mo, i, "f"), (c = (l = Ka(this, mo, "f")).createCallback) === null || c === void 0 || c.call(l, this, Ka(this, go, "f"), t);
  }
  update(e) {
    Ka(this, mo, "f").processCallback(this, Ka(this, go, "f"), e);
  }
}, "nn");
u(nn, "TemplateInstance");
mo = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
var kp = /* @__PURE__ */ new WeakSet();
function Dp(r) {
  return kp.has(r);
}
__name(Dp, "Dp");
u(Dp, "isDirective");
function Rp(r, e) {
  return Dp(e) ? (e(r), true) : false;
}
__name(Rp, "Rp");
u(Rp, "processDirective");
function bo(r) {
  return (...e) => {
    let t = r(...e);
    return kp.add(t), t;
  };
}
__name(bo, "bo");
u(bo, "directive");
var yo = /* @__PURE__ */ new WeakMap();
var wo = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), yo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), yo.get(this.element).delete(this.type));
  }
  static for(e) {
    yo.has(e.element) || yo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = yo.get(e.element);
    return i.has(t) ? i.get(t) : new wo(e.element, t);
  }
}, "wo");
u(wo, "EventHandler");
function Np(r, e) {
  return r instanceof Lr && r.attributeName.startsWith("on") ? (wo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Np, "Np");
u(Np, "processEvent");
function Lv(r, e) {
  return e instanceof mi && r instanceof Jt ? (e.renderInto(r), true) : false;
}
__name(Lv, "Lv");
u(Lv, "processSubTemplate");
function jv(r, e) {
  return e instanceof DocumentFragment && r instanceof Jt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(jv, "jv");
u(jv, "processDocumentFragment");
function Bv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(Bv, "Bv");
u(Bv, "isIterable");
function Hv(r, e) {
  if (!Bv(e))
    return false;
  if (r instanceof Jt) {
    let t = [];
    for (let i of e)
      if (i instanceof mi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
__name(Hv, "Hv");
u(Hv, "processIterable");
function Qa(r, e) {
  Rp(r, e) || Ja(r, e) || Np(r, e) || Lv(r, e) || jv(r, e) || Hv(r, e) || vo(r, e);
}
__name(Qa, "Qa");
u(Qa, "processPart");
var Bl = /* @__PURE__ */ new WeakMap();
var zp = /* @__PURE__ */ new WeakMap();
var Gp = /* @__PURE__ */ new WeakMap();
var mi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Bl.has(this.strings))
      return Bl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Bl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (zp.get(e) !== t) {
      zp.set(e, t);
      let i = new nn(t, this.values, this.processor);
      Gp.set(e, i), e instanceof Jt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Gp.get(e).update(this.values);
  }
}, "mi");
u(mi, "TemplateResult");
var $v = ho(Qa);
function Y(r, ...e) {
  return new mi(r, e, $v);
}
__name(Y, "Y");
u(Y, "html");
function Q(r, e) {
  r.renderInto(e);
}
__name(Q, "Q");
u(Q, "render");
var Hl = /* @__PURE__ */ new WeakMap();
var Fv = bo((...r) => (e) => {
  Hl.has(e) || Hl.set(e, { i: r.length });
  let t = Hl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Qa(e, l));
    }) : i <= t.i && (t.i = i, Qa(e, r[i]));
});
var qv = bo((r) => (e) => {
  if (!(e instanceof Jt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function _e(r) {
  class e extends r {
    iconHtml(i) {
      return Y`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return Y([i]);
    }
    get iconStyle() {
      return Y`<style>
        #icon {
          position: relative;
          width: 100%;
          height: 100%;
        }

        #icon > svg {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
        }
      </style>`;
    }
  }
  __name(e, "e");
  return u(e, "IconableMixinClass"), e;
}
__name(_e, "_e");
u(_e, "IconableMixin");
var jr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Je(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), A([R], e.prototype, "if", 2), e;
}
__name(Je, "Je");
u(Je, "IfableMixin");
var $l = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ie(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = St(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c, f, b;
        (l = this.ifTooltip) == null || l.hide(), (c = this.angleTooltip) == null || c.hide(), (f = this.flagTooltip) == null || f.hide(), (b = this.deleteTooltip) == null || b.hide();
      } }));
    }
    showMenu() {
      this.menu.show();
    }
    hideMenu() {
      this.menu.hide();
    }
    destroyMenu() {
      let i = this._tippy;
      i == null || i.destroy();
    }
    dispatchShowMenuEvent() {
      this.dispatchEvent(new Event("operation-show-menu", { bubbles: true }));
    }
    get menuContent() {
      let i = document.getElementById("operation-menu");
      if (i === null || i.content === void 0)
        return null;
      let l = i.content.cloneNode(true), c = document.createDocumentFragment();
      return Q(Y`${l}`, c), c;
    }
    initMenuItems(i) {
      if (jr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        F.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = St(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (wn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        F.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = St(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (_n(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        F.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = St(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      F.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = St(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-if", { bubbles: true }));
    }
    showAngleInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-angle", { bubbles: true }));
    }
    showFlagInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-flag", { bubbles: true }));
    }
    dispatchOperationDeleteEvent() {
      this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
    }
  }
  __name(e, "e");
  return u(e, "MenuableMixinClass"), e;
}
__name(Ie, "Ie");
u(Ie, "MenuableMixin");
function Lp(r) {
  return /^-?\d+$/.test(r);
}
__name(Lp, "Lp");
u(Lp, "isNumeric");
function bt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(bt, "bt");
u(bt, "forceSigned");
var at = /* @__PURE__ */ __name(class extends Ie(Pe(Me(Oe(xe(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Hs;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (F.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    St(this, { allowHTML: true, animation: false, arrow: co + co, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return Q(Y`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${bt(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${bt(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${bt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${bt(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${bt(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${bt(this.z)}</span>
          </section>
        </div>
      `, e), e;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let e = this._tippy;
    e == null || e.destroy();
  }
  attributeChangedCallback(e, t, i) {
    !this.body || t !== i && i !== null && (e === "data-x" && (this.x = parseFloat(i)), e === "data-y" && (this.y = parseFloat(i)), e === "data-z" && (this.z = parseFloat(i)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = u((i) => Y`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => Y`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Q(Y`<style>
          #background {
            border-radius: 9999px;
            background-color: #ffffff;
          }

          #sphere-border {
            box-sizing: border-box;
            border-style: solid;
            border-radius: 9999px;
          }

          #sphere-lines {
            width: 100%;
            height: 100%;
            stroke: currentColor;
          }

          #perspective {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            perspective-origin: top right;
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
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
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

        <div part="icon" data-target="bloch-display.body" data-d="${this.d}">
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" part="sphere-border" class="absolute inset-0">
            <svg
              id="sphere-lines"
              part="sphere-lines"
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
            <div id="perspective" part="perspective">
              <div id="vector" data-target="bloch-display.vector">
                <div id="vector-line" data-target="bloch-display.vectorLine">
                  ${e(0)} ${e(20)} ${e(40)} ${e(60)}
                  ${e(80)} ${e(100)} ${e(120)} ${e(140)}
                  ${e(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${t(0, "Y")} ${t(20, "Y")} ${t(40, "Y")}
                  ${t(60, "Y")} ${t(80, "Y")} ${t(100, "Y")}
                  ${t(120, "Y")} ${t(140, "Y")} ${t(160, "Y")}
                  ${t(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Hs}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let t = this._tippy;
    t == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return F.notNull(e), parseFloat(e);
  }
  set d(e) {
    this.setAttribute("data-d", e.toString());
  }
  vectorLength() {
    return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4));
  }
  set phi(e) {
    this.setAttribute("data-phi", e.toString());
  }
  get phi() {
    let e = this.getAttribute("data-phi");
    return F.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return F.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
}, "at");
u(at, "BlochDisplayElement"), A([we], at.prototype, "body", 2), A([we], at.prototype, "vectorLine", 2), A([we], at.prototype, "vectorEnd", 2), A([we], at.prototype, "vector", 2), A([It], at.prototype, "vectorEndCircles", 2), A([R], at.prototype, "x", 2), A([R], at.prototype, "y", 2), A([R], at.prototype, "z", 2);
ee(at);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Ht = /* @__PURE__ */ __name(class extends Ie(Pe(Me(He(_e(Oe(xe(HTMLElement))))))) {
  get operationType() {
    return Bs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Bs}"`;
  }
}, "Ht");
u(Ht, "ControlGateElement");
ee(Ht);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Me(He(_e(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ua}<${this.if}"` : `"${ua}"`;
  }
}, "Kt");
u(Kt, "HGateElement");
ee(Kt);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends Ie(Pe(Wc(Me(_e(Oe(xe(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">
        ${this.iconHtml(Hp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ya}"` : `"${ya}>${this.flag}"`;
  }
}, "Qt");
u(Qt, "MeasurementGateElement"), A([R], Qt.prototype, "value", 2);
ee(Qt);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Kr(Me(He(_e(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${fa}"` : `"${fa}(${this.angle.replace("/", "_")})"`;
  }
}, "er");
u(er, "PhaseGateElement");
ee(er);
var Fp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 24L13 24L14 36L17 36L18 12L38 12" vector-effect="non-scaling-stroke"/>
  <path d="M24 32L34 18M34 32L24 18" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Me(He(_e(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${va}<${this.if}"` : `"${va}"`;
  }
}, "tr");
u(tr, "RnotGateElement");
ee(tr);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Kr(Me(He(_e(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ma}"` : `"${ma}(${this.angle.replace("/", "_")})"`;
  }
}, "rr");
u(rr, "RxGateElement");
ee(rr);
var Wp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Kr(Me(He(_e(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ga}"` : `"${ga}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "RyGateElement");
ee(nr);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Kr(Me(He(_e(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Up)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ba}"` : `"${ba}(${this.angle.replace("/", "_")})"`;
  }
}, "ir");
u(ir, "RzGateElement");
ee(ir);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ie(Pe(Fe(Me(He(_e(Oe(xe(HTMLElement)))))))) {
  get operationType() {
    return js;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${js}"`;
  }
}, "or");
u(or, "SwapGateElement");
ee(or);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Me(He(_e(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Yp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ha}<${this.if}"` : `"${ha}"`;
  }
}, "ar");
u(ar, "TGateElement");
ee(ar);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var $t = /* @__PURE__ */ __name(class extends Ie(Pe(Me(_e(Oe(xe(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Qu;
      case "1":
        return ec;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">
        ${this.iconHtml(Xp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "$t");
u($t, "WriteGateElement"), A([R], $t.prototype, "value", 2);
ee($t);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Me(He(_e(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Zp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ca}<${this.if}"` : `"${ca}"`;
  }
}, "sr");
u(sr, "XGateElement");
ee(sr);
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Me(He(_e(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${pa}<${this.if}"` : `"${pa}"`;
  }
}, "lr");
u(lr, "YGateElement");
ee(lr);
var Kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends Ie(Pe(Je(Fe(Me(He(_e(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Q(Y`<div part="body">${this.iconHtml(Kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${da}<${this.if}"` : `"${da}"`;
  }
}, "ur");
u(ur, "ZGateElement");
ee(ur);
var Ke = u((r) => r instanceof Kt || r instanceof sr || r instanceof lr || r instanceof ur || r instanceof er || r instanceof ar || r instanceof tr || r instanceof rr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof Ht || r instanceof at || r instanceof $t || r instanceof Qt, "isOperation");
var Qp = u((r) => r != null && r instanceof Kt, "isHGateElement");
var ed = u((r) => r != null && r instanceof sr, "isXGateElement");
var td = u((r) => r != null && r instanceof lr, "isYGateElement");
var rd = u((r) => r != null && r instanceof ur, "isZGateElement");
var xo = u((r) => r != null && r instanceof er, "isPhaseGateElement");
var nd = u((r) => r != null && r instanceof ar, "isTGateElement");
var id = u((r) => r != null && r instanceof tr, "isRnotGateElement");
var es = u((r) => r != null && r instanceof rr, "isRxGateElement");
var ts = u((r) => r != null && r instanceof nr, "isRyGateElement");
var rs = u((r) => r != null && r instanceof ir, "isRzGateElement");
var od = u((r) => r != null && r instanceof or, "isSwapGateElement");
var Fl = u((r) => r != null && r instanceof Ht, "isControlGateElement");
var ad = u((r) => r != null && r instanceof at, "isBlochDisplayElement");
var QC = u((r) => r != null && r instanceof $t, "isWriteGateElement");
var sd = u((r) => r != null && r instanceof Qt, "isMeasurementGateElement");
var Eo = ei(Ga(), 1);
var ql = u((r) => r !== null && r instanceof Br, "isAngleSliderElement");
var Br = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = mt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new tt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = ji(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(Yu(this.angle));
      this.radian = i;
    }, updateSnapAngles: () => {
      this.updateSnapAngles();
    }, updateHandlePosition: () => {
      this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI);
    }, dispatchChangeEvent: () => {
      this.dispatchEvent(new Event("angle-slider-change", { bubbles: true }));
    }, dispatchUpdateEvent: () => {
      this.dispatchEvent(new Event("angle-slider-update", { bubbles: true }));
    } } });
    this.angleSliderService = ut(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${rt(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Eo.default)(this).unset();
  }
  update() {
    Q(Y`<style>
        :host {
          display: inline-block;
          position: relative;
          touch-action: none;
        }

        :host::before {
          content: '';
          display: block;
          position: relative;
          top: 0px;
        }
      </style>`, this.shadowRoot);
  }
  initInteraction() {
    (0, Eo.default)(this).draggable({ origin: "self", modifiers: [Eo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = Eo.default.getElementRect(e.target).width, i = e.pageX / t;
    this.left = i;
    let l = this.proportionToRadian(i);
    this.setAttribute("data-radian", l.toString());
    let [, c] = this.findSnapAngle(l);
    this.angle !== c && (this.angle = c);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, t = 2 * this.denominator, i = new Array(t - e + 1).fill(null).map((l, c) => c + e);
    this.snapAngles = {};
    for (let l of i)
      this.denominator === 1 ? l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI] = "\u03C0" : l === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[l * Math.PI] = `${l}\u03C0` : l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : l === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[l * Math.PI / this.denominator] = `${l}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let t = null, i = null, l = null;
    for (let c in this.snapAngles) {
      let f = Math.abs(parseFloat(c) - e);
      (t === null || f < t) && (t = f, i = parseFloat(c), l = this.snapAngles[c]);
    }
    return F.notNull(i), F.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Br");
u(Br, "AngleSliderElement"), A([R], Br.prototype, "angle", 2), A([R], Br.prototype, "radian", 2), A([R], Br.prototype, "denominator", 2), A([R], Br.prototype, "disabled", 2), A([R], Br.prototype, "debug", 2);
ee(Br);
var So = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let t = e.currentTarget;
    F.notNull(t);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    t.setAttribute("data-active", "");
  }
}, "So");
u(So, "ButtonGroupElement"), A([It], So.prototype, "buttons", 2), So = A([ee], So);
var gi = ei(ud(), 1);
var st = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 0;
    this.qubitCircleSize = "base";
    this.colCount = 0;
    this.rowCount = 0;
    this.paddingX = 0;
    this.paddingY = 0;
    this.overscanCount = 0;
    this.colorPhase = false;
    this.qubitCirclePopupTemplateId = "qubit-circle-popup-template";
    this.showQubitCirclePopupAmplitude = true;
    this.showQubitCirclePopupProbability = true;
    this.showQubitCirclePopupPhase = true;
    this.visibleQubitCircleKets = [];
    this.mobile = null;
    this.lastWindowScrollTop = null;
    this.lastWindowScrollLeft = null;
    this.lastColStartIndex = -1;
    this.lastColEndIndex = -1;
    this.lastRowStartIndex = -1;
    this.lastRowEndIndex = -1;
    this.qubitCirclePositions = [];
    this.mobileMediaQuery = window.matchMedia("(max-width: 639px)");
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.renderShadowRoot(), this.startViewSizeChangeEventListener(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles();
  }
  startViewSizeChangeEventListener() {
    this.mobileMediaQuery.addEventListener("change", () => this.handleViewSizeChange(this.mobileMediaQuery)), this.handleViewSizeChange(this.mobileMediaQuery);
  }
  handleViewSizeChange(e) {
    let t = this.mobile !== null && this.mobile !== e.matches;
    this.mobile = e.matches, t && (this.mobile || this.style.removeProperty("top"), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.drawQubitCircles());
  }
  startBasicCircleNotationMode() {
    this.colorPhase = false;
  }
  startColorPhaseMode() {
    this.colorPhase = true;
  }
  attributeChangedCallback(e, t, i) {
    t !== i && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (F.notNull(i), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
  }
  updateQubitCircleSize() {
    if (this.qubitCount !== 0)
      switch (this.qubitCount) {
        case 1: {
          this.qubitCircleSize = "xl";
          break;
        }
        case 2: {
          this.mobile ? this.qubitCircleSize = "lg" : this.qubitCircleSize = "xl";
          break;
        }
        case 3: {
          this.mobile ? this.qubitCircleSize = "lg" : this.qubitCircleSize = "xl";
          break;
        }
        case 4: {
          this.mobile ? this.qubitCircleSize = "base" : this.qubitCircleSize = "lg";
          break;
        }
        case 5: {
          this.mobile ? this.qubitCircleSize = "sm" : this.qubitCircleSize = "base";
          break;
        }
        case 6: {
          this.mobile ? this.qubitCircleSize = "xs" : this.qubitCircleSize = "base";
          break;
        }
        case 7: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 8: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 9: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 10: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 11: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 12: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 13: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 14: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 15: {
          this.qubitCircleSize = "xs";
          break;
        }
        case 16: {
          this.qubitCircleSize = "xs";
          break;
        }
        default:
          throw new tt("unsupported qubit count", this.qubitCount);
      }
  }
  updateDimension() {
    if (this.qubitCount !== 0)
      switch (this.qubitCount) {
        case 1: {
          this.rowCount = 1, this.colCount = 2;
          break;
        }
        case 2: {
          this.rowCount = 1, this.colCount = 4;
          break;
        }
        case 3: {
          this.mobile ? (this.rowCount = 2, this.colCount = 4) : (this.rowCount = 1, this.colCount = 8);
          break;
        }
        case 4: {
          this.rowCount = 2, this.colCount = 8;
          break;
        }
        case 5: {
          this.mobile ? (this.rowCount = 4, this.colCount = 8) : (this.rowCount = 2, this.colCount = 16);
          break;
        }
        case 6: {
          this.rowCount = 4, this.colCount = 16;
          break;
        }
        case 7: {
          this.mobile ? (this.rowCount = 8, this.colCount = 16) : (this.rowCount = 4, this.colCount = 32);
          break;
        }
        case 8: {
          this.mobile ? (this.rowCount = 16, this.colCount = 16) : (this.rowCount = 8, this.colCount = 32);
          break;
        }
        case 9: {
          this.rowCount = 16, this.colCount = 32;
          break;
        }
        case 10: {
          this.rowCount = 32, this.colCount = 32;
          break;
        }
        case 11: {
          this.rowCount = 32, this.colCount = 64;
          break;
        }
        case 12: {
          this.rowCount = 64, this.colCount = 64;
          break;
        }
        case 13: {
          this.rowCount = 64, this.colCount = 128;
          break;
        }
        case 14: {
          this.rowCount = 128, this.colCount = 128;
          break;
        }
        case 15: {
          this.rowCount = 128, this.colCount = 256;
          break;
        }
        case 16: {
          this.rowCount = 256, this.colCount = 256;
          break;
        }
        default:
          throw new tt("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let t = e.getAttribute("data-ket");
      return F.notNull(t), parseInt(t);
    }), F.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    gi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        F.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, b = c.phase() / Math.PI * 180;
        t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? t.classList.add("magnitude-0") : (t.classList.remove("magnitude-0"), t.style.setProperty("--magnitude", f.toString()));
        let v = Math.trunc(b);
        v < 0 && (v = 360 + v), t.style.setProperty("--phase", `-${v.toString()}deg`);
      }
    });
  }
  renderShadowRoot() {
    Q(Y`<style>
          circle-notation {
            --magnitude: 0;
            --magnitude-color: rgb(14 165 233); /* sky-500 */
            --phase: 0deg;
            --width: 0px;
            --border-width: 0px;
            --phase-width: 0px;
          }

          /* border */

          .qubit-circle {
            position: absolute;
            width: var(--width);
            height: var(--height);
            border-color: rgb(226 232 240); /* slate-200 */
            border-radius: 9999px;
            border-style: solid;
            border-width: var(--border-width);
            box-sizing: border-box;
          }

          .qubit-circle:hover {
            filter: brightness(0.9);
          }

          .qubit-circle:not(.magnitude-0) {
            border-color: rgb(100 116 139); /* slate-500 */
          }

          /* magnitude */

          .qubit-circle__magnitude {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            background-color: var(--magnitude-color);
            transform-origin: center;
            transform: scaleX(var(--magnitude)) scaleY(var(--magnitude));
          }

          .qubit-circle.magnitude-0 .qubit-circle__magnitude {
            display: none;
          }

          :host([data-color-phase]) .qubit-circle__magnitude {
            transform: scaleX(1) scaleY(1);
            filter: hue-rotate(var(--phase));
          }

          /* phase */

          .qubit-circle__phase {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            width: var(--phase-width);
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            transform-origin: bottom;
            transform: rotate(var(--phase));
          }

          .qubit-circle.magnitude-0 .qubit-circle__phase {
            display: none;
          }
        </style>

        <slot></slot>

        <div
          class="circle-notation__window"
          data-target="circle-notation.window"
          data-action="scroll:circle-notation#update"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px; overflow: auto; overscroll-behavior: none;"
        >
          <div
            class="circle-notation__inner-container"
            data-target="circle-notation.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px; position: relative;"
          ></div>
        </div>`, this.shadowRoot);
  }
  get innerHeight() {
    return this.qubitCount === 0 ? 0 : this.rowCount * this.qubitCircleSizePx + (this.rowCount - 1) * this.gap + this.paddingY * 2;
  }
  get innerWidth() {
    return this.qubitCount === 0 ? 0 : this.colCount * this.qubitCircleSizePx + (this.colCount - 1) * this.gap + this.paddingX * 2;
  }
  get qubitCirclesAreaHeight() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSizePx;
      case 2:
        return this.qubitCircleSizePx;
      case 3:
        return this.mobile ? this.qubitCircleSizePx * 2 + this.gap : this.qubitCircleSizePx;
      case 4:
        return this.qubitCircleSizePx * 2 + this.gap;
      case 5:
        return this.mobile ? this.qubitCircleSizePx * 4 + this.gap * 3 : this.qubitCircleSizePx * 2 + this.gap;
      case 6:
        return this.qubitCircleSizePx * 4 + this.gap * 3;
      case 7:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 4 + this.gap * 3;
      case 8:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 9:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 10:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 11:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 12:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 13:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 14:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 15:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 16:
        return this.mobile ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      default:
        throw new tt("unsupported qubit count", this.qubitCount);
    }
  }
  get qubitCirclesAreaWidth() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSizePx * 2 + this.gap;
      case 2:
        return this.qubitCircleSizePx * 4 + this.gap * 3;
      case 3:
        return this.mobile ? this.qubitCircleSizePx * 4 + this.gap * 3 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 4:
        return this.qubitCircleSizePx * 8 + this.gap * 7;
      case 5:
        return this.mobile ? this.qubitCircleSizePx * 8 + this.gap * 7 : this.qubitCircleSizePx * 16 + this.gap * 15;
      case 6:
        return this.qubitCircleSizePx * 16 + this.gap * 15;
      case 7:
        return this.mobile ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 8:
        return this.mobile ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 9:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 10:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 11:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 12:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 13:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 14:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 15:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      case 16:
        return this.qubitCircleSizePx * 32 + this.gap * 31;
      default:
        throw new tt("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.mobile) {
      let t = this.clientHeight;
      return this.rowCount > 4 && t < e ? t : e;
    } else
      return e;
  }
  get windowWidth() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.mobile) {
      let t = this.clientWidth;
      return this.colCount >= 16 && t < e ? t : e;
    } else
      return e;
  }
  resizeWindow() {
    this.window !== void 0 && (this.window.style.height = `${this.windowHeight}px`, this.window.style.width = `${this.windowWidth}px`);
  }
  resizeInnerContainer() {
    this.innerContainer !== void 0 && (this.innerContainer.style.height = `${this.innerHeight}px`, this.innerContainer.style.width = `${this.innerWidth}px`);
  }
  get qubitCircleSizePx() {
    switch (this.qubitCount) {
      case 1:
        return 64;
      case 2:
        return this.mobile ? 48 : 64;
      case 3:
        return this.mobile ? 48 : 64;
      case 4:
        return this.mobile ? 32 : 48;
      case 5:
        return this.mobile ? 24 : 32;
      case 6:
        return this.mobile ? 16 : 32;
      case 7:
        return 16;
      case 8:
        return 16;
      case 9:
        return 16;
      case 10:
        return 16;
      case 11:
        return 16;
      case 12:
        return 16;
      case 13:
        return 16;
      case 14:
        return 16;
      case 15:
        return 16;
      case 16:
        return 16;
      default:
        throw new tt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    F.notNull(this.window), F.notNull(this.innerContainer), this.qubitCount !== 0 && gi.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let e = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let i = this.lastRowStartIndex; i <= this.lastRowEndIndex; i++)
        for (let l = this.lastColStartIndex; l <= this.lastColEndIndex; l++)
          e.push({ col: l, row: i });
      let t = document.createDocumentFragment();
      for (let i of this.allQubitCircleElements(e))
        t.appendChild(i);
      this.innerContainer.textContent = "", this.innerContainer.appendChild(t), this.updateVisibleQubitCircleKets();
    });
  }
  update() {
    this.drawNewlyVisibleQubitCircles(), this.removeInvisibleQubitCircles();
  }
  drawNewlyVisibleQubitCircles() {
    this.window !== void 0 && this.innerContainer !== void 0 && (gi.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = e; f <= t; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), gi.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let t of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(t);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    gi.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let t = e.getAttribute("data-col"), i = e.getAttribute("data-row");
        F.notNull(t), F.notNull(i);
        let l = parseInt(t), c = parseInt(i);
        if (l < this.lastColStartIndex || this.lastColEndIndex < l || c < this.lastRowStartIndex || this.lastRowEndIndex < c) {
          let f = e._tippy;
          f !== void 0 && f.destroy(), e.remove();
        }
      }
    });
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let t = e.col + e.row * this.colCount, i = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, l = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, c = document.createElement("div");
    c.className = "qubit-circle magnitude-0", c.setAttribute("data-col", e.col.toString()), c.setAttribute("data-row", e.row.toString()), c.setAttribute("data-ket", t.toString()), c.setAttribute("data-targets", "circle-notation.qubitCircles"), c.setAttribute("data-amplitude-real", "0"), c.setAttribute("data-amplitude-imag", "0"), c.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), c.style.setProperty("top", `${i}px`), c.style.setProperty("left", `${l}px`);
    let f = document.createElement("div");
    f.className = "qubit-circle__magnitude";
    let b = document.createElement("div");
    return b.className = "qubit-circle__phase", c.appendChild(f), c.appendChild(b), c;
  }
  get gap() {
    return this.qubitCircleLineWidth;
  }
  get qubitCircleLineWidth() {
    switch (this.qubitCount) {
      case 1:
        return 2;
      case 2:
        return 2;
      case 3:
        return 2;
      case 4:
        return 2;
      case 5:
        return this.mobile ? 1 : 2;
      case 6:
        return this.mobile ? 1 : 2;
      case 7:
        return 1;
      case 8:
        return 1;
      case 9:
        return 1;
      case 10:
        return 1;
      case 11:
        return 1;
      case 12:
        return 1;
      case 13:
        return 1;
      case 14:
        return 1;
      case 15:
        return 1;
      case 16:
        return 1;
      default:
        throw new tt("unsupported qubit count", this.qubitCount);
    }
  }
  get overscanColStartIndex() {
    let e = this.visibleColStartIndex - this.overscanCount;
    return e < 0 ? 0 : e;
  }
  get overscanColEndIndex() {
    let e = this.visibleColEndIndex + this.overscanCount;
    return e > this.colCount - 1 ? this.colCount - 1 : e;
  }
  get overscanRowStartIndex() {
    let e = this.visibleRowStartIndex - this.overscanCount;
    return e < 0 ? 0 : e;
  }
  get overscanRowEndIndex() {
    let e = this.visibleRowEndIndex + this.overscanCount;
    return e > this.rowCount - 1 ? this.rowCount - 1 : e;
  }
  get visibleColStartIndex() {
    let e = this.windowScrollLeft - this.paddingX;
    if (e < 0)
      return 0;
    let t = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && t++, t;
  }
  get visibleColEndIndex() {
    let e = this.windowWidth + this.windowScrollLeft - this.paddingX, t = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && t++, Math.min(this.colCount - 1, t);
  }
  get visibleRowStartIndex() {
    let e = this.windowScrollTop - this.paddingY;
    if (e < 0)
      return 0;
    let t = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && t++, t;
  }
  get visibleRowEndIndex() {
    let e = this.windowHeight + this.windowScrollTop - this.paddingY, t = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && t++, Math.min(this.rowCount - 1, t);
  }
  get windowScrollTop() {
    return this.lastWindowScrollTop === null && (this.lastWindowScrollTop = this.window.scrollTop, window.setTimeout(() => {
      this.lastWindowScrollTop = null;
    }, 10)), this.lastWindowScrollTop;
  }
  get windowScrollLeft() {
    return this.lastWindowScrollLeft === null && (this.lastWindowScrollLeft = this.window.scrollLeft, window.setTimeout(() => {
      this.lastWindowScrollLeft = null;
    }, 10)), this.lastWindowScrollLeft;
  }
  showQubitCirclePopup(e) {
    let t = e.target;
    F.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = St(t, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    F.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    F.notNull(c);
    let f = t.getAttribute("data-amplitude-imag");
    F.notNull(f);
    let b = parseInt(l), v = parseFloat(c), d = parseFloat(f), h = new Xr(v, d), x = h.abs(), y = h.phase() / Math.PI * 180, S = document.importNode(this.qubitCirclePopupTemplate.content, true), O = S.getElementById("qubit-circle-popup--ket-binary-value"), M = S.getElementById("qubit-circle-popup--ket-decimal-value"), k = S.getElementById("qubit-circle-popup--amplitude"), $ = S.getElementById("qubit-circle-popup--amplitude-real-value"), L = S.getElementById("qubit-circle-popup--amplitude-imag-value"), q = S.getElementById("qubit-circle-popup--probability"), P = S.getElementById("qubit-circle-popup--probability-value"), Z = S.getElementById("qubit-circle-popup--phase"), _ = S.getElementById("qubit-circle-popup--phase-value");
    F.notNull(k), F.notNull($), F.notNull(L), F.notNull(q), F.notNull(P), F.notNull(Z), F.notNull(_), O && (O.textContent = b.toString(2).padStart(this.qubitCount, "0")), M && (M.textContent = b.toString()), this.showQubitCirclePopupAmplitude ? ($.textContent = bt(h.real, 5), L.textContent = `${bt(h.imag, 5)}i`) : k.style.display = "none", this.showQubitCirclePopupProbability ? P.textContent = `${bt(x * x * 100, 4)}%` : q.style.display = "none", this.showQubitCirclePopupPhase ? _.textContent = `${bt(y, 2)}\xB0` : Z.style.display = "none";
    let j = document.createElement("div");
    j.appendChild(S), i.setContent(j.innerHTML), i.show();
  }
  hideQubitCirclePopup(e) {
    let t = e.target;
    F.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    F.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "st");
u(st, "CircleNotationElement"), A([R], st.prototype, "qubitCount", 2), A([R], st.prototype, "qubitCircleSize", 2), A([R], st.prototype, "colCount", 2), A([R], st.prototype, "rowCount", 2), A([R], st.prototype, "paddingX", 2), A([R], st.prototype, "paddingY", 2), A([R], st.prototype, "overscanCount", 2), A([R], st.prototype, "colorPhase", 2), A([R], st.prototype, "qubitCirclePopupTemplateId", 2), A([R], st.prototype, "showQubitCirclePopupAmplitude", 2), A([R], st.prototype, "showQubitCirclePopupProbability", 2), A([R], st.prototype, "showQubitCirclePopupPhase", 2), A([we], st.prototype, "window", 2), A([we], st.prototype, "innerContainer", 2), A([It], st.prototype, "qubitCircles", 2), st = A([ee], st);
var Co = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.renderShadowRoot();
  }
  startBasicCircleNotationMode() {
    this.circleNotation.startBasicCircleNotationMode();
  }
  startColorPhaseMode() {
    this.circleNotation.startColorPhaseMode();
  }
  renderShadowRoot() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
}, "Co");
u(Co, "CircleNotationPanelElement"), A([we], Co.prototype, "circleNotation", 2), Co = A([ee], Co);
var cd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var pd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Hr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && e === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
  }
  startBreakpointChangeEventListener(e) {
    window.matchMedia("(max-width: 639px)").addEventListener("change", e);
  }
  startAnimation() {
    this.toggleGateSets(), this.toggleDots(), this.removePopinAnimationGates(), this.enableContentClipping(), this.makeAllGateSetsInvisible(), this.createPopinAnimationGates(), this.animatePopinAnimationGates();
  }
  update() {
    Q(Y`
        <style>
          button {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 100%;
            padding: 0;
            border-width: 0px;
            color: rgb(24 24 27); /* zinc-900 */
            background-color: transparent;
            touch-action: manipulation;
          }

          #prev-button {
            border-top-left-radius: 0.75rem; /* 12px */
            border-bottom-left-radius: 0.75rem; /* 12px */
          }

          #next-button {
            border-top-right-radius: 0.75rem; /* 12px */
            border-bottom-right-radius: 0.75rem; /* 12px */
          }

          #content-clipper {
            position: relative;
            width: 100%;
            height: 100%;
          }

          #body {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1.5rem;
          }

          :host([data-targets='gate-carousel.gateSets']).hidden {
            display: none;
          }

          #dot-group {
            display: flex;
            flex-direction: row;
            column-gap: 0.5rem;
            padding: 0.5rem;
          }

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 9999px;
            background-color: rgb(228 228 231); /* zinc-200 */
          }

          .dot--active {
            background-color: rgb(14 165 233); /* sky-500 */
          }
        </style>

        <div id="content-clipper" data-target="gate-carousel.contentClipper">
          <button
            id="prev-button"
            type="button"
            aria-label="prev gate set"
            data-action="click:gate-carousel#prevGateSet"
            style="left: 0"
          >
            ${this.iconHtml(cd)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(pd)}
          </button>

          <div id="body">
            <slot></slot>

            <div id="dot-group">${this.dotsHtml()}</div>
          </div>
        </div>
      `, this.shadowRoot);
  }
  iconHtml(e) {
    return Y([e]);
  }
  dotsHtml() {
    let e = Y``;
    for (let t = 0; t < this.gateSets.length; t++)
      e = Y`${e}
        <div class="dot" data-targets="gate-carousel.dots"></div>`;
    return e;
  }
  enableContentClipping() {
    this.contentClipper.style.overflow = "hidden";
  }
  disableContentClipping() {
    this.contentClipper.style.overflow = "visible";
  }
  removePopinAnimationGates() {
    var e;
    for (let t of this.popinAnimationGates)
      (e = t.parentElement) == null || e.removeChild(t);
  }
  prevGateSet() {
    this.currentGateSetIndex === 0 ? this.currentGateSetIndex = this.gateSets.length - 1 : this.currentGateSetIndex--;
  }
  nextGateSet() {
    this.currentGateSetIndex === this.gateSets.length - 1 ? this.currentGateSetIndex = 0 : this.currentGateSetIndex++;
  }
  validateCurrentGateSetIndex() {
    F.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), F.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
  }
  toggleGateSets() {
    for (let [e, t] of this.gateSets.entries())
      e === this.currentGateSetIndex ? t.classList.remove("hidden") : t.classList.add("hidden");
  }
  makeAllGateSetsVisible() {
    for (let e of this.gateSets)
      e.classList.remove("invisible");
  }
  makeAllGateSetsInvisible() {
    for (let e of this.gateSets)
      e.classList.add("invisible");
  }
  get activeGateSet() {
    let e = this.gateSets[this.currentGateSetIndex];
    return F.notNull(e), e;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((e) => {
      let t = e.children.item(0);
      return F.need(Ke(t), `${t} must be an operation.`), t;
    });
  }
  createPopinAnimationGates() {
    for (let e of this.gatesInActiveGateSet) {
      let t = e.cloneNode(false);
      t.setAttribute("data-targets", "gate-carousel.popinAnimationGates"), t.style.position = "absolute", t.style.top = `${this.offsetHeight}px`, t.style.left = `${e.offsetLeft}px`, this.append(t);
    }
  }
  animatePopinAnimationGates() {
    for (let [e, t] of this.popinAnimationGates.entries()) {
      F.need(e < 4, "#popinGates must be < 4");
      let i = 0;
      e === 0 ? i = 500 : e === 1 ? i = 600 : e === 2 ? i = 700 : e === 3 && (i = 800);
      let l = t.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: i, fill: "forwards", easing: "ease-out" });
      l.onfinish = () => {
        t === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [e, t] of this.dots.entries())
      e === this.currentGateSetIndex ? t.classList.add("dot--active") : t.classList.remove("dot--active");
  }
}, "Hr");
u(Hr, "GateCarouselElement"), A([R], Hr.prototype, "currentGateSetIndex", 2), A([we], Hr.prototype, "contentClipper", 2), A([It], Hr.prototype, "gateSets", 2), A([It], Hr.prototype, "dots", 2), A([It], Hr.prototype, "popinAnimationGates", 2), Hr = A([ee], Hr);
var Ul = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
  showInspector(e) {
    this.showPopup(), this.inspector.operation = e;
  }
  showIfInspector(e) {
    this.showPopup(), this.inspector.operation = e, window.setTimeout(() => {
      this.inspector.ifInput.focus();
    }, 0);
  }
  showAngleInspector(e) {
    this.showPopup(), this.inspector.operation = e, window.setTimeout(() => {
      this.inspector.angleInput.focus();
    }, 0);
  }
  showFlagInspector(e) {
    this.showPopup(), this.inspector.operation = e, window.setTimeout(() => {
      this.inspector.flagInput.focus();
    }, 0);
  }
  get inspector() {
    let e = this.popup.popper.querySelector("operation-inspector");
    return F.notNull(e), e;
  }
  initPopup() {
    this.popup = St(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !Ke(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    F.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return Q(Y`${t}`, i), i;
  }
}, "Ul");
u(Ul, "InspectorButtonElement");
ee(Ul);
var _t = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.conditionalGatePaneDisabled = true;
    this.anglePaneDisabled = true;
    this.conditionalFlagPaneDisabled = true;
  }
  get if() {
    return this.ifInput.value;
  }
  get angle() {
    return this.angleInput.value;
  }
  get reducedAngle() {
    return Ku(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), jr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), wn(e)) {
      let t = ji(e.angle);
      xo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (es(e) || ts(e) || rs(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    _n(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
  }
  clear() {
    this.ifInput.value = "", this.angleInput.value = "", this.angleSlider.angle = "", this.denominatorInput.value = "", this.reduceAngleFractionCheckbox.checked = false, this.flagInput.value = "";
  }
  disableAllPanes() {
    this.conditionalGatePaneDisabled = true, this.anglePaneDisabled = true, this.conditionalFlagPaneDisabled = true;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.addEventListener("angle-slider-change", this.changeAngle), this.addEventListener("angle-slider-update", this.updateAngle), this.ifInput.addEventListener("change", this.changeIf.bind(this)), this.angleInput.addEventListener("change", this.updateAngleInput.bind(this)), this.denominatorInput.addEventListener("change", this.changeDenominator.bind(this)), this.reduceAngleFractionCheckbox.addEventListener("change", this.changeReduceSetting.bind(this)), this.flagInput.addEventListener("change", this.changeFlag.bind(this)));
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!ql(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!ql(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    F.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Ju(e)) {
      let t, i = ji(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Xu(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Zu(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
    } else
      this.restoreOriginalPhi();
  }
  changeFlag() {
    this.dispatchEvent(new Event("operation-inspector-flag-change", { bubbles: true }));
  }
  backupCurrentDenominator() {
    this.denominatorInput.setAttribute("data-original-value", this.denominatorInput.value);
  }
  restoreOriginalDenominator() {
    let e = this.denominatorInput.getAttribute("data-original-value");
    F.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Lp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "_t");
u(_t, "OperationInspectorElement"), A([we], _t.prototype, "ifInput", 2), A([we], _t.prototype, "angleInputLabel", 2), A([we], _t.prototype, "angleInput", 2), A([we], _t.prototype, "angleSlider", 2), A([we], _t.prototype, "denominatorInput", 2), A([we], _t.prototype, "denominatorVariableLabel", 2), A([we], _t.prototype, "denominatorLabel", 2), A([we], _t.prototype, "reduceAngleFractionCheckbox", 2), A([we], _t.prototype, "flagInput", 2), A([R], _t.prototype, "conditionalGatePaneDisabled", 2), A([R], _t.prototype, "anglePaneDisabled", 2), A([R], _t.prototype, "conditionalFlagPaneDisabled", 2);
ee(_t);
var ns = ei(fd(), 1);
var Nt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.ket = 0;
    this.qubitCount = 1;
    this.amplitude = "";
    this.hidePhase = false;
    this.popupTemplateId = "qubit-circle-popup-template";
    this.showPopupHeader = false;
    this.showPopupAmplitude = false;
    this.showPopupProbability = false;
    this.showPopupPhase = false;
    this.darkMode = false;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.addPopupEventListeners());
  }
  update() {
    Q(Y`<style>
          :host {
            position: relative;
          }

          :host::after {
            position: absolute;
            bottom: -3px;
            right: -12px;
            font-size: 10px;
            line-height: 10px;
            white-space: nowrap;
            content: '|' attr(data-ket) '⟩';
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
          }

          :host([data-dark-mode])::after {
            color: #ffffff;
          }

          #border {
            position: relative;

            box-sizing: border-box;
            border-color: rgb(100 116 139); /* slate-500 */
            border-radius: 9999px;
            border-style: solid;
            border-width: 2px;

            height: 100%;
            width: 100%;
          }

          :host([data-dark-mode]) #border {
            border-color: rgb(228 228 231); /* zinc-200 */
          }

          :host(:hover) #border {
            filter: brightness(0.9);
          }

          #magnitude {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;

            border-radius: 9999px;

            background-color: rgb(14 165 233); /* sky-500 */

            transform-origin: center;
            transform: scaleX(${this.magnitude}) scaleY(${this.magnitude});
          }

          #phase {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            width: 2px;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            transform-origin: bottom;
            transform: rotate(${this.cssPhaseDeg}deg);
          }

          :host([data-dark-mode]) #phase {
            background-color: #ffffff;
          }

          :host([data-hide-phase]) #phase {
            display: none;
          }
        </style>

        <div id="border">
          <div id="magnitude" part="magnitude"></div>
          <div id="phase"></div>
        </div>`, this.shadowRoot), this.magnitude === 0 && (this.hidePhase = true);
  }
  addPopupEventListeners() {
    this.addEventListener("mouseenter", this.showPopup), this.addEventListener("mouseleave", this.hidePopup);
  }
  showPopup() {
    let e = St(this, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.popupTemplate === null)
      return;
    let t = document.importNode(this.popupTemplate.content, true), i = new ns.default(this.amplitude), l = t.getElementById("qubit-circle-popup--header"), c = t.getElementById("qubit-circle-popup--ket-binary-value"), f = t.getElementById("qubit-circle-popup--ket-decimal-value"), b = t.getElementById("qubit-circle-popup--amplitude"), v = t.getElementById("qubit-circle-popup--amplitude-real-value"), d = t.getElementById("qubit-circle-popup--amplitude-imag-value"), h = t.getElementById("qubit-circle-popup--probability"), x = t.getElementById("qubit-circle-popup--probability-value"), y = t.getElementById("qubit-circle-popup--phase"), S = t.getElementById("qubit-circle-popup--phase-value");
    F.notNull(l), F.notNull(c), F.notNull(f), F.notNull(b), F.notNull(v), F.notNull(d), F.notNull(h), F.notNull(x), F.notNull(y), F.notNull(S), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (v.textContent = bt(i.re, 5), d.textContent = `${bt(i.im, 5)}i`) : b.style.display = "none", this.showPopupProbability ? x.textContent = `${bt(this.magnitude * this.magnitude * 100, 4)}%` : h.style.display = "none", this.showPopupPhase ? S.textContent = `${bt(this.phaseDeg, 2)}\xB0` : y.style.display = "none";
    let O = document.createElement("div");
    O.appendChild(t), e.setContent(O.innerHTML), e.show();
  }
  get magnitude() {
    return new ns.default(this.amplitude).abs();
  }
  get phase() {
    return new ns.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let e = this._tippy;
    F.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "Nt");
u(Nt, "QubitCircleElement"), A([R], Nt.prototype, "ket", 2), A([R], Nt.prototype, "qubitCount", 2), A([R], Nt.prototype, "amplitude", 2), A([R], Nt.prototype, "hidePhase", 2), A([R], Nt.prototype, "popupTemplateId", 2), A([R], Nt.prototype, "showPopupHeader", 2), A([R], Nt.prototype, "showPopupAmplitude", 2), A([R], Nt.prototype, "showPopupProbability", 2), A([R], Nt.prototype, "showPopupPhase", 2), A([R], Nt.prototype, "darkMode", 2), Nt = A([ee], Nt);
var hd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var vd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
            <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
            <stop stop-color="#fff" offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`;
var Hn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = mt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), b = f.left + window.pageXOffset, v = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (b + c)}px`, i.style.top = `${t.clientY - (v + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = ut(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${rt(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Q(Y`<style>
          #body {
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            height: 100%;
            width: 100%;
          }

          #ripple {
            position: absolute;
            border-radius: 9999px;
            transform: scale(0);
            animation: ripple 400ms linear;
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        </style>

        <div id="body" part="body" data-target="run-circuit-button.body">${this.reloadIcon} ${this.tailSpinIcon}</div>`, this.shadowRoot);
  }
  handleClickEvent(e) {
    this.runCircuitButtonService.send({ type: "CLICK", clientX: e.clientX, clientY: e.clientY });
  }
  get reloadIcon() {
    return Y([hd]);
  }
  get tailSpinIcon() {
    return Y([vd]);
  }
}, "Hn");
u(Hn, "RunCircuitButtonElement"), A([R], Hn.prototype, "running", 2), A([R], Hn.prototype, "debug", 2), A([we], Hn.prototype, "body", 2), A([we], Hn.prototype, "ripple", 2);
ee(Hn);
var $r = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.direction = "";
    this.directionDesktop = "";
    this.duration = 800;
    this.marginTop = 0;
    this.marginBottom = 0;
    this.mobile = false;
  }
  connectedCallback() {
    window.addEventListener("load", () => {
      let e = window.getComputedStyle(this);
      this.marginTop = parseFloat(e.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(e.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
    }), this.attachShadow({ mode: "open" }), this.renderShadowRoot(), this.startViewSizeChangeEventListener();
  }
  startViewSizeChangeEventListener() {
    let e = window.matchMedia("(max-width: 639px)");
    e.addEventListener("change", () => this.handleViewSizeChange(e)), this.setMobileBreakpointFlag(e);
  }
  handleViewSizeChange(e) {
    this.setMobileBreakpointFlag(e);
    let t = window.getComputedStyle(this);
    this.marginTop = parseFloat(t.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(t.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
  }
  setMobileBreakpointFlag(e) {
    this.mobile = e.matches;
  }
  prepareAnimation() {
    this.mobile ? this.direction === "up" ? (this.style.bottom = "auto", this.style.top = `${window.innerHeight}px`) : this.direction === "down" && (this.style.top = `-${this.offsetHeight + this.marginTop}px`) : this.directionDesktop === "up" ? (this.style.bottom = "auto", this.style.top = `${window.innerHeight}px`) : this.directionDesktop === "down" && (this.style.top = `-${this.offsetHeight}px`);
  }
  startAnimation() {
    this.mobile ? this.direction === "up" ? this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)` }, { transform: `translateY(-${this.offsetHeight + this.marginBottom}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.direction === "down" && this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${this.offsetHeight + this.marginTop + 16}px)` }, { transform: `translateY(${this.offsetHeight + this.marginTop}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.directionDesktop === "up" ? this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)` }, { transform: `translateY(-${this.offsetHeight + this.marginBottom}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.directionDesktop === "down" && this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${this.offsetHeight + 16}px)` }, { transform: `translateY(${this.offsetHeight}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" });
  }
  renderShadowRoot() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
}, "$r");
u($r, "SlideInElement"), A([R], $r.prototype, "direction", 2), A([R], $r.prototype, "directionDesktop", 2), A([R], $r.prototype, "duration", 2), A([R], $r.prototype, "marginTop", 2), A([R], $r.prototype, "marginBottom", 2), $r = A([ee], $r);
var on = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.comment = "";
    this.finalized = false;
  }
  finalize() {
    this.finalized = true;
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Q(Y`<style>
          :host {
            position: relative;
          }
          :host::before,
          :host::after {
            position: absolute;
            display: flex;
            justify-content: center;
            color: rgb(14 165 233); /* sky-500 */
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
            white-space: nowrap;
            content: attr(data-comment) '';
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
            border-color: rgb(14 165 233); /* sky-500 */
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
        </div>`, this.shadowRoot);
  }
}, "on");
u(on, "CircuitBlockElement"), A([R], on.prototype, "comment", 2), A([R], on.prototype, "finalized", 2), on = A([ee], on);
var gd = ei(Ga(), 1);
var md = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
  <line
    part="wire-input"
    x1="0"
    y1="24"
    x2="24"
    y2="24"
    stroke="currentColor"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    part="wire-output"
    x1="24"
    y1="24"
    x2="48"
    y2="24"
    stroke="currentColor"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="connect-top"
    part="connect-top"
    x1="24"
    y1="0"
    x2="24"
    y2="24"
    stroke="currentColor"
    stroke-width="4"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="connect-bottom"
    part="connect-bottom"
    x1="24"
    y1="48"
    x2="24"
    y2="24"
    stroke="currentColor"
    stroke-width="4"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>
`;
var Yl = u((r) => r != null && r instanceof Ct, "isCircuitDropzoneElement");
var To;
var Ct = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    sa(this, To, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = mt({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      F.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      F.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(t.operation));
    }, dispatchOccupiedEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-occupy", { bubbles: true }));
    }, dispatchDeleteOperationEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-operation-delete", { bubbles: true }));
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = ut(this.circuitDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`circuit-dropzone: ${e.value}`);
    });
  }
  get noConnections() {
    return !this.connectTop && !this.connectBottom;
  }
  get occupied() {
    return this.operationName !== "";
  }
  get operation() {
    return this.firstElementChild;
  }
  get snapTarget() {
    let e = this.getBoundingClientRect();
    return { x: window.pageXOffset + e.left + this.clientWidth / 2, y: window.pageYOffset + e.top + this.clientHeight / 2 };
  }
  toJson() {
    let e = this.operation;
    return e === null ? "1" : e.toJson();
  }
  connectedCallback() {
    let { signal: e } = la(this, To, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: e }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: e }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = aa(this, To)) == null || e.abort();
  }
  update() {
    Q(Y`<style>
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }

          #connect-top,
          #connect-bottom {
            display: none;
          }

          :host([data-connect-top]) #connect-top {
            display: block;
          }

          :host([data-connect-bottom]) #connect-bottom {
            display: block;
          }

          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
        </style>

        <div id="body"><slot></slot>${this.wireSvg}</div>`, this.shadowRoot);
  }
  put(e) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: e });
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, gd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
  }
  snapOperation() {
    this.circuitDropzoneService.send({ type: "SNAP_OPERATION" });
  }
  unsnapOperation() {
    this.circuitDropzoneService.send({ type: "UNSNAP_OPERATION" });
  }
  dropOperation() {
    this.circuitDropzoneService.send({ type: "DROP_OPERATION" });
  }
  deleteOperation(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  get wireSvg() {
    return Y([md]);
  }
}, "Ct");
u(Ct, "CircuitDropzoneElement"), To = /* @__PURE__ */ new WeakMap(), A([R], Ct.prototype, "operationName", 2), A([R], Ct.prototype, "inputWireQuantum", 2), A([R], Ct.prototype, "outputWireQuantum", 2), A([R], Ct.prototype, "connectTop", 2), A([R], Ct.prototype, "connectBottom", 2), A([R], Ct.prototype, "shadow", 2), A([R], Ct.prototype, "debug", 2);
ee(Ct);
var an = u((r) => r != null && r instanceof zt, "isCircuitStepElement");
var ze = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let f = e(i, l, c), b = t.get(f);
  return b ? b.push(i) : t.set(f, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var zt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = mt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      F.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = ut(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${rt(e.value)}`);
    });
  }
  get wireCount() {
    return this.dropzones.length;
  }
  get isInBlock() {
    return this.closest("circuit-block") !== null;
  }
  get block() {
    return this.closest("circuit-block");
  }
  connectedCallback() {
    this.circuitStepService.start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone-snap", this.snapDropzone), this.addEventListener("circuit-dropzone-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone-drop", this.unshadow), this.addEventListener("circuit-dropzone-occupy", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      xn(l.operation) && (l.operation.controls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), t.length !== 0) {
      if (t.length === 1 && i.length === 0) {
        t[0].operation.disable();
        return;
      }
      i.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e);
    }
  }
  updateSwapConnections(e) {
    let t = e == null ? void 0 : e.disableSwap, i = this.swapGateDropzones;
    if (i.length !== 2 || t)
      for (let l of i)
        l.operation.disable();
    else {
      for (let c of i)
        c.operation.enable(), c.connectTop = i.some((b) => this.bit(b) < this.bit(c)), c.connectBottom = i.some((b) => this.bit(b) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let f = Math.min(...l), b = Math.max(...l);
        f < this.bit(c) && this.bit(c) < b && (c.connectTop = true, c.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e == null ? void 0 : e.disablePhasePhase)
      return;
    let t = this.phaseGateDropzones;
    for (let i of t) {
      let l = i.operation;
      if (l.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let c = t.filter((f) => {
        if (!xo(f.operation))
          throw new Error(`${f.operation} isn't a phase-gate element.`);
        return l.angle === f.operation.angle;
      }).map((f) => this.bit(f));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((f) => f < this.bit(i)), i.connectBottom = c.some((f) => f > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((v) => v.connectTop || v.connectBottom).map((v) => this.bit(v)), f = Math.min(...c), b = Math.max(...c);
      f < this.bit(i) && this.bit(i) < b && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let f = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? f.disable() : (f.enable(), c.connectTop = i.some((b) => this.bit(c) > b), c.connectBottom = i.some((b) => this.bit(c) < b));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((h) => h.operationName))], c = this.numControlGateDropzones(e, l), f = i.map((h) => this.bit(h)), b = c === null ? f : f.slice(0, c), v = t.map((h) => this.bit(h)), d = b.concat(v);
    for (let [h, x] of Object.entries(i)) {
      let y = x.operation;
      x.connectBottom = d.some((S) => this.bit(x) < S), x.connectTop = d.some((S) => this.bit(x) > S), c === null || c !== null && parseInt(h) < c ? y.enable() : (x.connectTop = Math.max(...d) > this.bit(x), y.disable());
    }
    for (let h of t) {
      if (!xn(h.operation))
        throw new Error(`${h.operation} isn't controllable.`);
      h.operation.controls = this.controlBits(h, f, e), h.connectTop = d.some((x) => x < this.bit(h)), h.connectBottom = d.some((x) => x > this.bit(h));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((v) => Fl(v.operation) && !v.operation.disabled).map((v) => this.bit(v)), l = t.map((v) => this.bit(v)), c = i.concat(l), f = Math.min(...c), b = Math.max(...c);
    for (let v of this.freeDropzones)
      f < this.bit(v) && this.bit(v) < b && (v.connectTop = true, v.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return F.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return F.notNull(t), t;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get freeDropzones() {
    return this.dropzones.filter((e) => !e.occupied);
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new Ct();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new Ct();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && Fl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, b = 0, v = 0, d = 0, h = 0, x = 0;
    return this.dropzones.filter((y) => y.occupied).filter((y) => xn(y.operation)).filter((y) => e === void 0 ? true : Qp(y.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : ed(y.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : td(y.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : rd(y.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : xo(y.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : nd(y.operation) ? (b += 1, e.maxCtTargetGates !== 0 && b > e.maxCtTargetGates ? false : !e.disableCt) : id(y.operation) ? (v += 1, e.maxCrnotTargetGates !== 0 && v > e.maxCrnotTargetGates ? false : !e.disableCrnot) : es(y.operation) ? (d += 1, e.maxCrxTargetGates !== 0 && d > e.maxCrxTargetGates ? false : !e.disableCrx) : ts(y.operation) ? (h += 1, e.maxCryTargetGates !== 0 && h > e.maxCryTargetGates ? false : !e.disableCry) : rs(y.operation) ? (x += 1, e.maxCrzTargetGates !== 0 && x > e.maxCrzTargetGates ? false : !e.disableCrz) : od(y.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    this.dispatchEvent(new Event("circuit-step-update", { bubbles: true }));
  }
  deleteOperation(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: t });
  }
  dispatchMouseenterEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseenter", { bubbles: true }));
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseleave", { bubbles: true }));
  }
  maybeDispatchClickEvent(e) {
    Ke(e.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
  }
  snapDropzone(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: t });
  }
  unsnapDropzone(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: t });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: t });
  }
  serialize() {
    let e = [];
    for (let [t, i] of ze(this.operations, (l) => l.constructor))
      switch (t) {
        case Kt: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.if))
            for (let [b, v] of ze(f, (d) => d.controls.toString())) {
              let d = v[0], h = d.operationType, x = v.map((S) => S.bit), y = { type: h, targets: x };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.if))
            for (let [b, v] of ze(f, (d) => d.controls.toString())) {
              let d = v[0], h = d.operationType, x = v.map((S) => S.bit), y = { type: h, targets: x };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.if))
            for (let [b, v] of ze(f, (d) => d.controls.toString())) {
              let d = v[0], h = d.operationType, x = v.map((S) => S.bit), y = { type: h, targets: x };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.if))
            for (let [b, v] of ze(f, (d) => d.controls.toString())) {
              let d = v[0], h = d.operationType, x = v.map((S) => S.bit), y = { type: h, targets: x };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case er: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.angle))
            for (let [b, v] of ze(f, (d) => d.if))
              for (let [d, h] of ze(v, (x) => x.controls.toString())) {
                let x = h[0], y = x.operationType, S = h.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = x.controls), e.push(O);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.if))
            for (let [b, v] of ze(f, (d) => d.controls.toString())) {
              let d = v[0], h = d.operationType, x = v.map((S) => S.bit), y = { type: h, targets: x };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.if))
            for (let [b, v] of ze(f, (d) => d.controls.toString())) {
              let d = v[0], h = d.operationType, x = v.map((S) => S.bit), y = { type: h, targets: x };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.angle))
            for (let [b, v] of ze(f, (d) => d.if))
              for (let [d, h] of ze(v, (x) => x.controls.toString())) {
                let x = h[0], y = x.operationType, S = h.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = x.controls), e.push(O);
              }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.angle))
            for (let [b, v] of ze(f, (d) => d.if))
              for (let [d, h] of ze(v, (x) => x.controls.toString())) {
                let x = h[0], y = x.operationType, S = h.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = x.controls), e.push(O);
              }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.angle))
            for (let [b, v] of ze(f, (d) => d.if))
              for (let [d, h] of ze(v, (x) => x.controls.toString())) {
                let x = h[0], y = x.operationType, S = h.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = x.controls), e.push(O);
              }
          break;
        }
        case or: {
          let l = i.filter((v) => !v.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, b = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (b.controls = f), e.push(b);
          break;
        }
        case Ht: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => xn(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case at: {
          let l = i, c = i.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case $t: {
          let l = i;
          for (let [, c] of ze(l, (f) => f.value)) {
            let f = c.map((b) => b.bit);
            e.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case Qt: {
          let l = i;
          for (let [c, f] of ze(l, (b) => b.flag)) {
            let b = f.map((h) => h.bit), d = { type: f[0].operationType, targets: b };
            c !== "" && (d.flag = c), e.push(d);
          }
          break;
        }
        default:
          throw new tt("Unrecognized operation", { klass: t });
      }
    return e;
  }
  get operations() {
    return this.dropzones.filter((e) => e.occupied).map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((t) => t.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
}, "zt");
u(zt, "CircuitStepElement"), A([R], zt.prototype, "active", 2), A([R], zt.prototype, "breakpoint", 2), A([R], zt.prototype, "shadow", 2), A([R], zt.prototype, "keep", 2), A([R], zt.prototype, "debug", 2);
ee(zt);
var bi = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = mt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation;
      $l(i) && i.menu && i.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.activateOperation(t.operation);
    }, snapOperationIntoDropzone: (e, t) => {
      if (t.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let i = t.operation, l = this.circuit.snapTargetAt(t.x, t.y);
      if (i.snapped = true, l.dropzone === null) {
        let c = l.stepIndex;
        F.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), b = f.dropzones[l.wireIndex];
        F.notNull(b), b.append(i), b.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
      } else
        l.dropzone.append(i);
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < this.circuit.maxWireCount && this.circuit.appendWire();
    }, maybeRemoveLastEmptyWires: () => {
      this.circuit.removeLastEmptyWires();
    }, resizeCircuit: () => {
      this.circuit.resize(), this.dispatchEvent(new Event("circuit-editor-resize", { bubbles: true }));
    }, setSnapTargets: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(t.operation);
    }, setBreakpoint: (e, t) => {
      t.type === "CLICK_STEP" && this.circuit.setBreakpoint(t.step);
    }, activateStep: (e, t) => {
      t.type !== "MOUSE_ENTER_STEP" && t.type !== "SNAP_STEP" || (t.step.active = true);
    }, deactivateStep: (e, t) => {
      t.type !== "MOUSE_LEAVE_STEP" && t.type !== "UNSNAP_STEP" || (t.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (e, t) => {
      t.type !== "END_DRAGGING_OPERATION" || t.operation.snapped || this.inspectorButton !== void 0 && (!this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes());
    }, initOperationMenu: (e, t) => {
      if (t.type !== "DROP_OPERATION")
        return;
      let i = t.operation;
      $l(i) && i.initMenu();
    }, showOperationMenu: (e, t) => {
      t.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || t.operation.showMenu());
    }, showOperationInspectorIf: (e, t) => {
      t.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(t.operation);
    }, showOperationInspectorAngle: (e, t) => {
      t.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(t.operation);
    }, showOperationInspectorFlag: (e, t) => {
      t.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(t.operation);
    }, setOperationIf: (e, t) => {
      t.type === "SET_OPERATION_IF" && (t.operation.if = t.if);
    }, setOperationAngle: (e, t) => {
      t.type === "SET_OPERATION_ANGLE" && (t.operation.angle = t.angle, t.operation.reducedAngle = t.reducedAngle);
    }, setOperationFlag: (e, t) => {
      t.type === "SET_OPERATION_FLAG" && (t.operation.flag = t.flag);
    }, maybeUpdateOperationInspector: (e, t) => {
      if (t.type !== "ACTIVATE_OPERATION" || this.inspectorButton === void 0)
        return;
      let i = t.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(i);
    } } });
    this.circuitEditorService = ut(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${rt(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable-init", this.enableDragging), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let t = e.target;
    if (qc(t))
      t.draggable = true;
    else
      throw new tt("Not a draggable element.", { el: t });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let i of this.circuit.operations)
        i.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var i;
    let t = e.target;
    !Ke(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: t });
  }
  showOperationInspectorIf(e) {
    let t = e.target;
    if (!jr(t))
      throw new Error(`${t} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: t });
  }
  showOperationInspectorAngle(e) {
    let t = e.target;
    if (!wn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!_n(t))
      throw new Error(`${t} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: t });
  }
  setOperationIf(e) {
    let t = e.target, i = this.activeOperation;
    if (!jr(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: t.if });
  }
  setOperationAngle(e) {
    let t = e.target, i = this.activeOperation;
    if (F.notNull(i), !wn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!_n(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!an(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!an(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!an(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!Ke(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!an(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!an(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "bi");
u(bi, "CircuitEditorElement"), A([R], bi.prototype, "debug", 2), A([we], bi.prototype, "circuit", 2), A([we], bi.prototype, "inspectorButton", 2);
ee(bi);
var Oo;
var Xl = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    sa(this, Oo, null);
  }
  connectedCallback() {
    let { signal: e } = la(this, Oo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = aa(this, Oo)) == null || e.abort();
  }
  update() {
    Q(Y`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, Ll(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => Ke(e));
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), Ll(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!Ke(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "Xl");
u(Xl, "PaletteDropzoneElement"), Oo = /* @__PURE__ */ new WeakMap();
ee(Xl);
var se = /* @__PURE__ */ __name(class extends xe(HTMLElement) {
  constructor() {
    super(...arguments);
    this.minStepCount = 1;
    this.minWireCount = 1;
    this.maxWireCount = 10;
    this.editing = false;
    this.updateUrl = false;
    this.json = "";
    this.circuitTitle = "";
    this.debug = false;
    this.chDisabled = false;
    this.chMaxControlGates = 0;
    this.chMaxTargetGates = 0;
    this.cnotDisabled = false;
    this.cnotMaxControlGates = 0;
    this.cnotMaxTargetGates = 0;
    this.cyDisabled = false;
    this.cyMaxControlGates = 0;
    this.cyMaxTargetGates = 0;
    this.czDisabled = false;
    this.czMaxControlGates = 0;
    this.czMaxTargetGates = 0;
    this.cphaseDisabled = false;
    this.cphaseMaxControlGates = 0;
    this.cphaseMaxTargetGates = 0;
    this.ctDisabled = false;
    this.ctMaxControlGates = 0;
    this.ctMaxTargetGates = 0;
    this.crnotDisabled = false;
    this.crnotMaxControlGates = 0;
    this.crnotMaxTargetGates = 0;
    this.crxDisabled = false;
    this.crxMaxControlGates = 0;
    this.crxMaxTargetGates = 0;
    this.cryDisabled = false;
    this.cryMaxControlGates = 0;
    this.cryMaxTargetGates = 0;
    this.crzDisabled = false;
    this.crzMaxControlGates = 0;
    this.crzMaxTargetGates = 0;
    this.cswapDisabled = false;
    this.cswapMaxControlGates = 0;
    this.swapDisabled = false;
    this.controlControlDisabled = false;
    this.controlControlMaxTargetGates = 0;
    this.phasePhaseDisabled = false;
    this.phasePhaseMaxTargetGates = 0;
    this.quantumCircuitMachine = mt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = ut(this.quantumCircuitMachine).onTransition((e) => {
      this.debug && console.log(`quantum-circuit: ${e.value}`);
    }).start();
    this.cx = this.cnot;
  }
  get wireCount() {
    return this.stepAt(0).wireCount;
  }
  get activeStepIndex() {
    let e = this.activeStep;
    return e === null ? null : this.fetchStepIndex(e);
  }
  get activeStep() {
    return this.steps.find((t) => t.active) || null;
  }
  fetchStepIndex(e) {
    let t = this.steps.indexOf(e);
    return F.need(t !== -1, `circuit-step index of ${e} not found.`), t;
  }
  get steps() {
    return Array.from(this.querySelectorAll("circuit-step"));
  }
  get emptySteps() {
    return this.steps.filter((e) => e.isEmpty);
  }
  get nonEmptySteps() {
    return this.steps.filter((e) => !e.isEmpty);
  }
  get largestStep() {
    let e = null, t = 0;
    for (let i of this.steps)
      i.wireCount > 0 && i.wireCount > t && (e = i, t = i.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let t = 0; t < e; t++)
      this.append(new zt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return F.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new zt();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      F.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
    }
    return t;
  }
  activateStep(e) {
    e.active = true;
  }
  deactivateAllSteps() {
    for (let e of this.steps)
      e.active = false;
  }
  setBreakpoint(e) {
    for (let t of this.steps)
      t.breakpoint = false;
    e.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((t) => t.breakpoint) || null;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get operations() {
    return this.dropzones.map((e) => e.operation).filter((e) => e !== null);
  }
  get isVertical() {
    return window.getComputedStyle(this).flexDirection === "column";
  }
  connectedCallback() {
    if (this.attachShadow({ mode: "open" }), this.update(), this.hasAttribute("data-update-url")) {
      let e = this.urlJson;
      this.loadFromJson(e);
    }
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && i !== null && this.makeOperationsHoverable(), e === "data-json" && i !== "" && i !== null && (this.loadFromJson(i), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let t = e.target;
    this.updateStepOperationAttributes(t);
  }
  updateStepOperationAttributes(e) {
    e.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("quantum-circuit-mouseleave", { bubbles: true }));
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new Kt();
      return i && l.disable(), l;
    }, ...t), this.resize(), this;
  }
  x(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new sr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  y(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new lr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  z(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ur();
      return i && l.disable(), l;
    }, ...t), this;
  }
  phase(...e) {
    let t = "", i, l;
    if (typeof e[0] == "number")
      i = e;
    else if (typeof e[0] == "string")
      t = e[0], i = e.slice(1);
    else {
      let f = e[0];
      i = f.targets, l = f.disabled;
    }
    let c = this.applyOperationToTargets(() => {
      let f = new er();
      return f.angle = t, l && f.disable(), f;
    }, ...i);
    return i.length > 1 && this.updateStepOperationAttributes(c), this;
  }
  t(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ar();
      return i && l.disable(), l;
    }, ...t), this.resize(), this;
  }
  rnot(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new tr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  rx(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new rr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  ry(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new nr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  rz(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ir();
      return i && l.disable(), l;
    }, ...t), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new or(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  control(...e) {
    let t = this.applyOperationToTargets(() => new Ht(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new at(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new $t();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Qt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...t) {
    let i = Math.max(...t) + 1, l = this.appendStepWithDropzones(i);
    for (let c of t) {
      let f = e();
      l.dropzoneAt(c).put(f);
    }
    return l;
  }
  ch(e, t) {
    return this.controlledU(Kt, e, t), this;
  }
  cnot(e, t) {
    return this.controlledU(sr, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(lr, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(ur, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(er, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(tr, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(rr, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(ir, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(or, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new Ht());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), b = Math.max(...f) + 1, v = this.appendStepWithDropzones(b);
    for (let d of l)
      v.dropzoneAt(d).put(new Ht());
    for (let d of c)
      v.dropzoneAt(d).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(v);
  }
  appendStep() {
    let e = new zt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new zt();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new Ct();
      t.append(l);
    }
    return t;
  }
  updateAllWires() {
    let e = this.steps[0];
    if (e === void 0)
      return;
    let t = e.dropzones.length;
    for (let i = 0; i < t; i++)
      this.updateWire(i);
  }
  activateOperation(e) {
    for (let t of this.operations)
      t.active = false;
    e.active = true;
  }
  appendWire() {
    for (let e of this.steps)
      e.appendDropzone();
  }
  removeLastEmptyWires() {
    for (; this.steps.every((e) => e.wireCount > this.minWireCount && !e.lastDropzone.occupied); )
      for (let e of this.steps)
        e.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let e of this.emptySteps)
      e.remove();
  }
  loadFromJson(e) {
    this.innerHTML = "";
    let t = null;
    if (e === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let i = JSON.parse(e);
    this.circuitTitle = (i.title || "").trim();
    let l = false;
    for (let c of i.cols) {
      let f = this.appendStep();
      l && (f.keep = true, l = false);
      for (let b of c) {
        switch (true) {
          case /^\|0>$/.test(b): {
            let v = new $t();
            v.value = "0", f.appendOperation(v);
            break;
          }
          case /^\|1>$/.test(b): {
            let v = new $t();
            v.value = "1", f.appendOperation(v);
            break;
          }
          case /^H/.test(b): {
            let v = new Kt();
            v.if = this.ifVariable(b.slice(1)), f.appendOperation(v);
            break;
          }
          case (/^X$/.test(b) || /^X<(.+)$/.test(b)): {
            let v = new sr();
            v.if = b.slice(2).trim(), f.appendOperation(v);
            break;
          }
          case /^Y/.test(b): {
            let v = new lr();
            v.if = this.ifVariable(b.slice(1)), f.appendOperation(v);
            break;
          }
          case /^Z/.test(b): {
            let v = new ur();
            v.if = this.ifVariable(b.slice(1)), f.appendOperation(v);
            break;
          }
          case /^P/.test(b): {
            let v = new er();
            v.angle = this.angleParameter(b.slice(1)), f.appendOperation(v);
            break;
          }
          case /^T/.test(b): {
            let v = new ar();
            v.if = this.ifVariable(b.slice(1)), f.appendOperation(v);
            break;
          }
          case /^X\^½/.test(b): {
            let v = new tr();
            v.if = this.ifVariable(b.slice(3)), f.appendOperation(v);
            break;
          }
          case /^Rx/.test(b): {
            let v = new rr();
            v.angle = this.angleParameter(b.slice(2)), f.appendOperation(v);
            break;
          }
          case /^Ry/.test(b): {
            let v = new nr();
            v.angle = this.angleParameter(b.slice(2)), f.appendOperation(v);
            break;
          }
          case /^Rz/.test(b): {
            let v = new ir();
            v.angle = this.angleParameter(b.slice(2)), f.appendOperation(v);
            break;
          }
          case /^Swap$/.test(b): {
            let v = new or();
            f.appendOperation(v);
            break;
          }
          case /^•$/.test(b): {
            let v = new Ht();
            f.appendOperation(v);
            break;
          }
          case /^Bloch$/.test(b): {
            let v = new at();
            f.appendOperation(v);
            break;
          }
          case /^Measure/.test(b): {
            let v = new Qt(), d = ((/^>(.+)$/.exec(b.slice(7)) || [])[1] || "").trim();
            v.flag = d, f.appendOperation(v);
            break;
          }
          case /^[[{](.+)$/.test(b): {
            let v = b.slice(1);
            f.remove(), t = new on(), t.comment = v, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(b): {
            f.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (b !== 1)
              throw new Error(`Unknown operation: ${b}`);
            f.appendDropzone();
          }
        }
        f.updateOperationAttributes();
      }
    }
    this.resize();
  }
  ifVariable(e) {
    return ((/^<(.+)$/.exec(e) || [])[1] || "").trim();
  }
  angleParameter(e) {
    return ((/^\((.+)\)$/.exec(e) || [])[1] || "").trim().replace("_", "/");
  }
  appendMinimumWires() {
    let e = this.largestStep, t = e && e.wireCount > this.minWireCount ? e.wireCount : this.minWireCount;
    for (let i of this.steps) {
      let l = t - i.wireCount;
      for (let c = 0; c < l; c++)
        i.appendDropzone();
    }
  }
  updateWire(e) {
    let t = false;
    for (let i of this.steps) {
      let l = i.dropzoneAt(e);
      if (l.inputWireQuantum = t, l.operationName === "write-gate")
        l.inputWireQuantum = t, l.outputWireQuantum = true, t = true;
      else if (l.operationName === "measurement-gate")
        l.inputWireQuantum = t, l.outputWireQuantum = false, t = false;
      else if (l.operationName === "swap-gate") {
        let c = i.dropzones.filter((f) => f.operationName === "swap-gate");
        if (c.length === 2) {
          let f = c.map((h) => i.bit(h)), b = i.bit(l), v = f[0] === b ? f[1] : f[0], d = i.dropzoneAt(v);
          l.inputWireQuantum = t, l.outputWireQuantum = d.inputWireQuantum, t = d.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!an(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Yl(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    F.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  snapTargetAt(e, t) {
    return this.isVertical ? this.snapTargets[t][e] : this.snapTargets[e][t];
  }
  setSnapTargets(e) {
    let t = this.dropzones.filter((c) => !c.occupied), i = [];
    this.snapTargets = {};
    let l = e.dropzone;
    Yl(l) && t.push(l);
    for (let [c, f] of Object.entries(this.dropzones)) {
      let b = f.snapTarget, v = this.isVertical ? b.y : b.x, d = this.isVertical ? b.x : b.y, h = parseInt(c) % this.wireCount, x = v - e.snapRange * 0.75, y = v + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: d, y: x }) : i.push({ x, y: d }), this.snapTargets[x] === void 0 && (this.snapTargets[x] = {}), this.snapTargets[x][d] === void 0 && (this.snapTargets[x][d] = { dropzone: null, stepIndex: -1, wireIndex: h })), this.isVertical ? i.push({ x: d, y }) : i.push({ x: y, y: d }), this.snapTargets[y] === void 0 && (this.snapTargets[y] = {}), this.snapTargets[y][d] === void 0 && (this.snapTargets[y][d] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: h }), (!f.occupied || f === l) && i.push(b), this.snapTargets[v] === void 0 && (this.snapTargets[v] = {}), this.snapTargets[v][d] === void 0 && (this.snapTargets[v][d] = { dropzone: f, stepIndex: null, wireIndex: h });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    F.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let b = c[f];
          b.stepIndex !== null && (b.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let f = c.snapTarget, b = this.isVertical ? f.y : f.x, v = this.isVertical ? f.x : f.y;
      F.notNull(this.snapTargets[b]), this.snapTargets[b][v] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
    }
  }
  serialize() {
    return this.steps.map((e) => e.serialize());
  }
  get urlJson() {
    let e = window.location.href.toString().split(window.location.host)[1].slice(1);
    return decodeURIComponent(e);
  }
  clear() {
    history.pushState("", "", encodeURIComponent('{"cols":[]}')), location.reload();
  }
  toJson() {
    let e = false, t = [];
    for (let i of this.nonEmptySteps) {
      if (i.isInBlock) {
        if (!e) {
          let l = i.block;
          t.push(`["[${l.comment}"]`), e = true;
        }
      } else
        e && (t.push('["]"]'), e = false);
      t.push(i.toJson());
    }
    return e && t.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${t.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${t.join(",")}]}`;
  }
}, "se");
u(se, "QuantumCircuitElement"), A([R], se.prototype, "minStepCount", 2), A([R], se.prototype, "minWireCount", 2), A([R], se.prototype, "maxWireCount", 2), A([R], se.prototype, "editing", 2), A([R], se.prototype, "updateUrl", 2), A([R], se.prototype, "json", 2), A([R], se.prototype, "circuitTitle", 2), A([R], se.prototype, "debug", 2), A([R], se.prototype, "chDisabled", 2), A([R], se.prototype, "chMaxControlGates", 2), A([R], se.prototype, "chMaxTargetGates", 2), A([R], se.prototype, "cnotDisabled", 2), A([R], se.prototype, "cnotMaxControlGates", 2), A([R], se.prototype, "cnotMaxTargetGates", 2), A([R], se.prototype, "cyDisabled", 2), A([R], se.prototype, "cyMaxControlGates", 2), A([R], se.prototype, "cyMaxTargetGates", 2), A([R], se.prototype, "czDisabled", 2), A([R], se.prototype, "czMaxControlGates", 2), A([R], se.prototype, "czMaxTargetGates", 2), A([R], se.prototype, "cphaseDisabled", 2), A([R], se.prototype, "cphaseMaxControlGates", 2), A([R], se.prototype, "cphaseMaxTargetGates", 2), A([R], se.prototype, "ctDisabled", 2), A([R], se.prototype, "ctMaxControlGates", 2), A([R], se.prototype, "ctMaxTargetGates", 2), A([R], se.prototype, "crnotDisabled", 2), A([R], se.prototype, "crnotMaxControlGates", 2), A([R], se.prototype, "crnotMaxTargetGates", 2), A([R], se.prototype, "crxDisabled", 2), A([R], se.prototype, "crxMaxControlGates", 2), A([R], se.prototype, "crxMaxTargetGates", 2), A([R], se.prototype, "cryDisabled", 2), A([R], se.prototype, "cryMaxControlGates", 2), A([R], se.prototype, "cryMaxTargetGates", 2), A([R], se.prototype, "crzDisabled", 2), A([R], se.prototype, "crzMaxControlGates", 2), A([R], se.prototype, "crzMaxTargetGates", 2), A([R], se.prototype, "cswapDisabled", 2), A([R], se.prototype, "cswapMaxControlGates", 2), A([R], se.prototype, "swapDisabled", 2), A([R], se.prototype, "controlControlDisabled", 2), A([R], se.prototype, "controlControlMaxTargetGates", 2), A([R], se.prototype, "phasePhaseDisabled", 2), A([R], se.prototype, "phasePhaseMaxTargetGates", 2), A([It], se.prototype, "blocks", 2);
ee(se);
var $n = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-delete", this.maybeUpdateUrl), this.addEventListener("operation-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.freshRun), this.addEventListener("circuit-step-unsnap", this.freshRun), this.addEventListener("circuit-step-update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Q(Y`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var l;
    let t = e.data, i = this.activeStepIndex;
    switch (t.type) {
      case "step": {
        let c = this.circuit.stepAt(t.step);
        for (let f in t.blochVectors) {
          let b = parseInt(f), v = c.dropzoneAt(b).operation;
          if (ad(v)) {
            let d = t.blochVectors[b];
            v.x = d[0], v.y = d[1], v.z = d[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let b in f) {
            let v = parseInt(b), d = c.dropzoneAt(v).operation;
            sd(d) && (d.value = f[v].toString());
          }
        }
        for (let f of c.dropzones) {
          let b = f.operation;
          !jr(b) || b.if !== "" && (b.disabled = !t.flags[b.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let b in t.amplitudes) {
            let v = t.amplitudes[b];
            f[b] = new Xr(v[0], v[1]);
          }
          (l = this.circleNotation) == null || l.setAmplitudes(f);
        }
        break;
      }
      case "finish": {
        for (let c of this.runCircuitButtons)
          c.running = false;
        break;
      }
      default:
        throw new tt("Unknown service worker message", { data: t });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(e) {
    let t = this.activeStepIndex, i = this.circuit.serialize();
    F.need(i.length > 0, "non-zero step length");
    let l = this.circuit.toJson(), c = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: c, stepIndex: t, circuitJson: l, invalidateCaches: e, steps: i, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let e = this.circuit.serialize();
    F.need(e.length > 0, "non-zero step length");
    let t = Math.max(...e.map((l) => Math.max(...l.map((c) => {
      let f = [];
      return xn(c) && (f = c.controls), Math.max(...c.targets.concat(f));
    })))), i = t >= 0 ? t + 1 : 1;
    return this.circleNotation.qubitCount = i, i;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, t = this.circuit.breakpoint, i = e || t;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    F.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "$n");
u($n, "QuantumSimulatorElement"), A([R], $n.prototype, "updateUrl", 2), A([we], $n.prototype, "circuit", 2), A([we], $n.prototype, "circleNotation", 2), A([It], $n.prototype, "runCircuitButtons", 2);
ee($n);

// src/serviceworker-companion.js
if (navigator.serviceWorker) {
  if (location.hostname === "localhost") {
    navigator.serviceWorker.register("/serviceworker.js", { scope: "./" }).catch(function(error) {
      console.log("[Companion]", "Service worker registration failed: " + error);
    });
  } else {
    navigator.serviceWorker.register("/qni/serviceworker.js", { scope: "/qni/" }).catch(function(error) {
      console.log("[Companion]", "Service worker registration failed: " + error);
    });
  }
}
export {
  Xr as Complex
};
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
***************************************************************************** */
/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=application.js.map
