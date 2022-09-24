var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var ph = Object.create;
var qi = Object.defineProperty;
var Ju = Object.getOwnPropertyDescriptor;
var dh = Object.getOwnPropertyNames;
var fh = Object.getPrototypeOf;
var hh = Object.prototype.hasOwnProperty;
var vh = /* @__PURE__ */ __name((r) => qi(r, "__esModule", { value: true }), "vh");
var u = /* @__PURE__ */ __name((r, e) => qi(r, "name", { value: e, configurable: true }), "u");
var ca = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "ca");
var mh = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of dh(e))
      !hh.call(r, l) && (t || l !== "default") && qi(r, l, { get: () => e[l], enumerable: !(i = Ju(e, l)) || i.enumerable });
  return r;
}, "mh");
var Tn = /* @__PURE__ */ __name((r, e) => mh(vh(qi(r != null ? ph(fh(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Tn");
var A = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? Ju(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && qi(e, t, l), l;
}, "A");
var Ku = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "Ku");
var pa = /* @__PURE__ */ __name((r, e, t) => (Ku(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "pa");
var da = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "da");
var fa = /* @__PURE__ */ __name((r, e, t, i) => (Ku(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "fa");
var tc = ca((Us, ec) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(y, S) {
      if (isNaN(y = parseInt(y, 10)))
        throw w.InvalidParameter;
      return y * S;
    }
    __name(i, "i");
    u(i, "assign");
    function l(y, S) {
      if (S === 0)
        throw w.DivisionByZero;
      var O = Object.create(w.prototype);
      O.s = y < 0 ? -1 : 1, y = y < 0 ? -y : y;
      var M = v(y, S);
      return O.n = y / M, O.d = S / M, O;
    }
    __name(l, "l");
    u(l, "newFraction");
    function c(y) {
      for (var S = {}, O = y, M = 2, _ = 4; _ <= O; ) {
        for (; O % M === 0; )
          O /= M, S[M] = (S[M] || 0) + 1;
        _ += 1 + 2 * M++;
      }
      return O !== y ? O > 1 && (S[O] = (S[O] || 0) + 1) : S[y] = (S[y] || 0) + 1, S;
    }
    __name(c, "c");
    u(c, "factorize");
    var f = u(function(y, S) {
      var O = 0, M = 1, _ = 1, $ = 0, L = 0, F = 0, I = 1, Q = 1, z = 0, j = 1, Y = 1, K = 1, ie = 1e7, ne;
      if (y != null)
        if (S !== void 0) {
          if (O = y, M = S, _ = O * M, O % 1 !== 0 || M % 1 !== 0)
            throw w.NonIntegerParameter;
        } else
          switch (typeof y) {
            case "object": {
              if ("d" in y && "n" in y)
                O = y.n, M = y.d, "s" in y && (O *= y.s);
              else if (0 in y)
                O = y[0], 1 in y && (M = y[1]);
              else
                throw w.InvalidParameter;
              _ = O * M;
              break;
            }
            case "number": {
              if (y < 0 && (_ = y, y = -y), y % 1 === 0)
                O = y;
              else if (y > 0) {
                for (y >= 1 && (Q = Math.pow(10, Math.floor(1 + Math.log(y) / Math.LN10)), y /= Q); j <= ie && K <= ie; )
                  if (ne = (z + Y) / (j + K), y === ne) {
                    j + K <= ie ? (O = z + Y, M = j + K) : K > j ? (O = Y, M = K) : (O = z, M = j);
                    break;
                  } else
                    y > ne ? (z += Y, j += K) : (Y += z, K += j), j > ie ? (O = Y, M = K) : (O = z, M = j);
                O *= Q;
              } else
                (isNaN(y) || isNaN(S)) && (M = O = NaN);
              break;
            }
            case "string": {
              if (j = y.match(/\d+|./g), j === null)
                throw w.InvalidParameter;
              if (j[z] === "-" ? (_ = -1, z++) : j[z] === "+" && z++, j.length === z + 1 ? L = i(j[z++], _) : j[z + 1] === "." || j[z] === "." ? (j[z] !== "." && ($ = i(j[z++], _)), z++, (z + 1 === j.length || j[z + 1] === "(" && j[z + 3] === ")" || j[z + 1] === "'" && j[z + 3] === "'") && (L = i(j[z], _), I = Math.pow(10, j[z].length), z++), (j[z] === "(" && j[z + 2] === ")" || j[z] === "'" && j[z + 2] === "'") && (F = i(j[z + 1], _), Q = Math.pow(10, j[z + 1].length) - 1, z += 3)) : j[z + 1] === "/" || j[z + 1] === ":" ? (L = i(j[z], _), I = i(j[z + 2], 1), z += 3) : j[z + 3] === "/" && j[z + 1] === " " && ($ = i(j[z], _), L = i(j[z + 2], _), I = i(j[z + 4], 1), z += 5), j.length <= z) {
                M = I * Q, _ = O = F + M * $ + Q * L;
                break;
              }
            }
            default:
              throw w.InvalidParameter;
          }
      if (M === 0)
        throw w.DivisionByZero;
      t.s = _ < 0 ? -1 : 1, t.n = Math.abs(O), t.d = Math.abs(M);
    }, "parse");
    function b(y, S, O) {
      for (var M = 1; S > 0; y = y * y % O, S >>= 1)
        S & 1 && (M = M * y % O);
      return M;
    }
    __name(b, "b");
    u(b, "modpow");
    function h(y, S) {
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
    __name(h, "h");
    u(h, "cycleLen");
    function d(y, S, O) {
      for (var M = 1, _ = b(10, O, S), $ = 0; $ < 300; $++) {
        if (M === _)
          return $;
        M = M * 10 % S, _ = _ * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    u(d, "cycleStart");
    function v(y, S) {
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
    __name(v, "v");
    u(v, "gcd");
    function w(y, S) {
      if (f(y, S), this instanceof w)
        y = v(t.d, t.n), this.s = t.s, this.n = t.n / y, this.d = t.d / y;
      else
        return l(t.s * t.n, t.d);
    }
    __name(w, "w");
    u(w, "Fraction"), w.DivisionByZero = new Error("Division by Zero"), w.InvalidParameter = new Error("Invalid argument"), w.NonIntegerParameter = new Error("Parameters must be integer"), w.prototype = { s: 1, n: 0, d: 1, abs: function() {
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
        return new w(NaN);
      if (y === void 0)
        return l(this.s * this.n % this.d, 1);
      if (f(y, S), t.n === 0 && this.d === 0)
        throw w.DivisionByZero;
      return l(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d);
    }, gcd: function(y, S) {
      return f(y, S), l(v(t.n, this.n) * v(t.d, this.d), t.d * this.d);
    }, lcm: function(y, S) {
      return f(y, S), t.n === 0 && this.n === 0 ? l(0, 1) : l(t.n * this.n, v(t.n, this.n) * v(t.d, this.d));
    }, ceil: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : l(Math.ceil(y * this.s * this.n / this.d), y);
    }, floor: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : l(Math.floor(y * this.s * this.n / this.d), y);
    }, round: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : l(Math.round(y * this.s * this.n / this.d), y);
    }, inverse: function() {
      return l(this.s * this.d, this.n);
    }, pow: function(y, S) {
      if (f(y, S), t.d === 1)
        return t.s < 0 ? l(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : l(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var O = c(this.n), M = c(this.d), _ = 1, $ = 1;
      for (var L in O)
        if (L !== "1") {
          if (L === "0") {
            _ = 0;
            break;
          }
          if (O[L] *= t.n, O[L] % t.d === 0)
            O[L] /= t.d;
          else
            return null;
          _ *= Math.pow(L, O[L]);
        }
      for (var L in M)
        if (L !== "1") {
          if (M[L] *= t.n, M[L] % t.d === 0)
            M[L] /= t.d;
          else
            return null;
          $ *= Math.pow(L, M[L]);
        }
      return t.s < 0 ? l($, _) : l(_, $);
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
        for (var _ = l(O[M - 1], 1), $ = M - 2; $ >= 0; $--)
          _ = _.inverse().add(O[$]);
        if (_.sub(S).abs().valueOf() < y)
          return _.mul(this.s);
      }
      return this;
    }, divisible: function(y, S) {
      return f(y, S), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(y) {
      var S, O = "", M = this.n, _ = this.d;
      return this.s < 0 && (O += "-"), _ === 1 ? O += M : (y && (S = Math.floor(M / _)) > 0 && (O += S, O += " ", M %= _), O += M, O += "/", O += _), O;
    }, toLatex: function(y) {
      var S, O = "", M = this.n, _ = this.d;
      return this.s < 0 && (O += "-"), _ === 1 ? O += M : (y && (S = Math.floor(M / _)) > 0 && (O += S, M %= _), O += "\\frac{", O += M, O += "}{", O += _, O += "}"), O;
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
      var M = h(S, O), _ = d(S, O, M), $ = this.s < 0 ? "-" : "";
      if ($ += S / O | 0, S %= O, S *= 10, S && ($ += "."), M) {
        for (var L = _; L--; )
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
      return w;
    }) : typeof Us == "object" ? (Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.Fraction = w, ec.exports = w) : r.Fraction = w;
  })(Us);
});
var so = ca((Qc, Tl) => {
  (function(r) {
    typeof Qc == "object" && typeof Tl != "undefined" ? Tl.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    }, "s"), h = u(function(n) {
      return typeof n == "function";
    }, "l"), d = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return b(n) && n.nodeType === 11;
    }, object: b, func: h, number: function(n) {
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
      return b(n) && n.length !== void 0 && h(n.splice);
    } };
    c.default = d;
    var v = {};
    function w(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(w, "w");
    u(w, "f");
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
    u(y, "d"), Object.defineProperty(v, "__esModule", { value: true }), v.default = void 0;
    var S = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", s.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": w, "interactions:action-resume": w, "interactions:action-move": y, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: w, move: y, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, O = S;
    v.default = O;
    var M = {};
    Object.defineProperty(M, "__esModule", { value: true }), M.default = void 0;
    var _ = { init: function(n) {
      var o = n;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || $, _.SVGElement = o.SVGElement || $, _.SVGSVGElement = o.SVGSVGElement || $, _.SVGElementInstance = o.SVGElementInstance || $, _.Element = o.Element || $, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || $, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function $() {
    }
    __name($, "$");
    u($, "y");
    var L = _;
    M.default = L;
    var F = {};
    Object.defineProperty(F, "__esModule", { value: true }), F.default = void 0;
    var I = { init: function(n) {
      var o = M.default.Element, a = n.navigator || {};
      I.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && M.default.document instanceof n.DocumentTouch, I.supportsPointerEvent = a.pointerEnabled !== false && !!M.default.PointerEvent, I.isIOS = /iP(hone|od|ad)/.test(a.platform), I.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), I.isIe9 = /MSIE 9/.test(a.userAgent), I.isOperaMobile = a.appName === "Opera" && I.supportsTouch && /Presto/.test(a.userAgent), I.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", I.pEventTypes = I.supportsPointerEvent ? M.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, I.wheelEvent = M.default.document && "onmousewheel" in M.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Q = I;
    F.default = Q;
    var z = {};
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
    function Y(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[F.default.prefixedMatchesSelector](o);
    }
    __name(Y, "Y");
    u(Y, "O"), Object.defineProperty(z, "__esModule", { value: true }), z.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (Y(n, o))
          return n;
        n = j(n);
      }
      return null;
    }, z.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, z.getElementClientRect = ce, z.getElementRect = function(n) {
      var o = ce(n);
      if (!F.default.isIOS7 && o) {
        var a = ne(e.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, z.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = j(n);
      return o;
    }, z.getScrollXY = ne, z.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], m = n[o];
        if (p && s !== o)
          if (m) {
            var E = K(p), g = K(m);
            if (E !== p.ownerDocument)
              if (g !== p.ownerDocument)
                if (E !== g) {
                  a = a.length ? a : ie(m);
                  var x = void 0;
                  if (m instanceof M.default.HTMLElement && p instanceof M.default.SVGElement && !(p instanceof M.default.SVGSVGElement)) {
                    if (p === g)
                      continue;
                    x = p.ownerSVGElement;
                  } else
                    x = p;
                  for (var T = ie(x, m.ownerDocument), C = 0; T[C] && T[C] === a[C]; )
                    C++;
                  var P = [T[C - 1], T[C], a[C]];
                  if (P[0])
                    for (var D = P[0].lastChild; D; ) {
                      if (D === P[1]) {
                        o = s, a = T;
                        break;
                      }
                      if (D === P[2])
                        break;
                      D = D.previousSibling;
                    }
                } else
                  G = p, R = m, (parseInt(e.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(e.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var G, R;
      return o;
    }, z.matchesSelector = Y, z.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (Y(n, o))
          return true;
        if ((n = j(n)) === a)
          return Y(n, o);
      }
      return false;
    }, z.nodeContains = function(n, o) {
      if (n.contains)
        return n.contains(o);
      for (; o; ) {
        if (o === n)
          return true;
        o = o.parentNode;
      }
      return false;
    }, z.parentNode = j, z.trySelector = function(n) {
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
    function ce(n) {
      var o = n instanceof M.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ce, "ce");
    u(ce, "j");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ue = {};
    function De(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(De, "De");
    u(De, "I");
    function Ye(n, o, a) {
      return n === "parent" ? (0, z.parentNode)(a) : n === "self" ? o.getRect(a) : (0, z.closest)(a, n);
    }
    __name(Ye, "Ye");
    u(Ye, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ue.getStringOptionResult = Ye, ue.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ue.resolveRectLike = function(n, o, a, s) {
      var p, m = n;
      return c.default.string(m) ? m = Ye(m, o, a) : c.default.func(m) && (m = m.apply(void 0, function(E) {
        if (Array.isArray(E))
          return De(E);
      }(p = s) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(p) || function(E, g) {
        if (E) {
          if (typeof E == "string")
            return De(E, g);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? De(E, g) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(m) && (m = (0, z.getElementRect)(m)), m;
    }, ue.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, W.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ue.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, W.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    };
    var je = {};
    Object.defineProperty(je, "__esModule", { value: true }), je.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, m = (0, ue.resolveRectLike)(p, n, o, [n && o]);
      return (0, ue.rectToXY)(m) || { x: 0, y: 0 };
    };
    var fe = {};
    function Ke(n) {
      return n.trim().split(/ +/);
    }
    __name(Ke, "Ke");
    u(Ke, "C"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Ke(o)), c.default.array(o))
        return o.reduce(function(x, T) {
          return (0, W.default)(x, n(T, a, s));
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
          var g = Ke(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          n(g, a[E], s);
        }
      return s;
    }, "n"), "t");
    var rt = {};
    Object.defineProperty(rt, "__esModule", { value: true }), rt.default = void 0, rt.default = function(n, o) {
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
    function pr(n) {
      return n instanceof M.default.Event || n instanceof M.default.Touch;
    }
    __name(pr, "pr");
    u(pr, "B");
    function Ot(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Ot, "Ot");
    u(Ot, "Y");
    function Rt(n, o) {
      return o = o || { x: 0, y: 0 }, F.default.isOperaMobile && pr(n) ? (Ot("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Ot("page", n, o), o;
    }
    __name(Rt, "Rt");
    u(Rt, "W");
    function Wt(n, o) {
      return o = o || {}, F.default.isOperaMobile && pr(n) ? Ot("screen", n, o) : Ot("client", n, o), o;
    }
    __name(Wt, "Wt");
    u(Wt, "L");
    function dr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(dr, "dr");
    u(dr, "U");
    function Ut(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var m in o)
        o[m] /= n.length;
      return o;
    }
    __name(Ut, "Ut");
    u(Ut, "V"), Object.defineProperty(J, "__esModule", { value: true }), J.coordsToEvent = function(n) {
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
    }, J.getClientXY = Wt, J.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [z.getActualElement(o ? o[0] : n.target), z.getActualElement(n.currentTarget)];
    }, J.getPageXY = Rt, J.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, J.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof M.default.Touch ? "touch" : "mouse";
    }, J.getTouchPair = dr, J.getXY = Ot, J.isNativePointer = pr, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.pointerAverage = Ut, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return Ft.default;
    } }), J.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, J.setCoords = function(n, o, a) {
      var s = o.length > 1 ? Ut(o) : o[0];
      Rt(s, n.page), Wt(s, n.client), n.timeStamp = a;
    }, J.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, J.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = dr(n), m = p[1][a] - p[0][a], E = p[1][s] - p[0][s];
      return 180 * Math.atan2(E, m) / Math.PI;
    }, J.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = dr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), m = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: m, width: p - a, height: m - s };
    }, J.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = dr(n), m = p[0][a] - p[1][a], E = p[0][s] - p[1][s];
      return (0, rt.default)(m, E);
    };
    var Lt = {};
    function yr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(yr, "yr");
    u(yr, "q");
    function zr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zr, "zr");
    u(zr, "G"), Object.defineProperty(Lt, "__esModule", { value: true }), Lt.BaseEvent = void 0;
    var pn = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), zr(this, "immediatePropagationStopped", false), zr(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && yr(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Lt.BaseEvent = pn, Object.defineProperty(pn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Oe = {};
    Object.defineProperty(Oe, "__esModule", { value: true }), Oe.remove = Oe.merge = Oe.from = Oe.findIndex = Oe.find = Oe.contains = void 0, Oe.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, Oe.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var dn = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "K");
    Oe.merge = dn, Oe.from = function(n) {
      return dn([], n);
    };
    var fn = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Z");
    Oe.findIndex = fn, Oe.find = function(n, o) {
      return n[fn(n, o)];
    };
    var Mt = {};
    function _r(n) {
      return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _r(n);
    }
    __name(_r, "_r");
    u(_r, "Q");
    function Yn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Yn, "Yn");
    u(Yn, "tt");
    function Yr(n, o) {
      return Yr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Yr(n, o);
    }
    __name(Yr, "Yr");
    u(Yr, "et");
    function fr(n, o) {
      if (o && (_r(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return wt(n);
    }
    __name(fr, "fr");
    u(fr, "nt");
    function wt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(wt, "wt");
    u(wt, "rt");
    function wr(n) {
      return wr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, wr(n);
    }
    __name(wr, "wr");
    u(wr, "ot");
    function kt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(kt, "kt");
    u(kt, "it"), Object.defineProperty(Mt, "__esModule", { value: true }), Mt.DropEvent = void 0;
    var hn = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Yr(g, x);
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
        var g, x = wr(s);
        if (p) {
          var T = wr(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return fr(this, g);
      });
      function E(g, x, T) {
        var C;
        (function(R, B) {
          if (!(R instanceof B))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), kt(wt(C = m.call(this, x._interaction)), "dropzone", void 0), kt(wt(C), "dragEvent", void 0), kt(wt(C), "relatedTarget", void 0), kt(wt(C), "draggable", void 0), kt(wt(C), "propagationStopped", false), kt(wt(C), "immediatePropagationStopped", false);
        var P = T === "dragleave" ? g.prev : g.cur, D = P.element, G = P.dropzone;
        return C.type = T, C.target = D, C.currentTarget = D, C.dropzone = G, C.dragEvent = x, C.relatedTarget = x.target, C.draggable = x.interactable, C.timeStamp = x.timeStamp, C;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "reject", value: function() {
        var g = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var T = x.activeDrops, C = Oe.findIndex(T, function(D) {
              var G = D.dropzone, R = D.element;
              return G === g.dropzone && R === g.target;
            });
            x.activeDrops.splice(C, 1);
            var P = new E(x, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new E(x, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Yn(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Mt.DropEvent = hn;
    var Rr = {};
    function vn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, m = s.element;
        o.dropzone = p, o.target = m, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(vn, "vn");
    u(vn, "lt");
    function Xr(n, o) {
      for (var a = function(m, E) {
        for (var g = m.interactables, x = [], T = 0; T < g.list.length; T++) {
          var C = g.list[T];
          if (C.options.drop.enabled) {
            var P = C.options.drop.accept;
            if (!(c.default.element(P) && P !== E || c.default.string(P) && !z.matchesSelector(E, P) || c.default.func(P) && !P({ dropzone: C, draggableElement: E })))
              for (var D = c.default.string(C.target) ? C._context.querySelectorAll(C.target) : c.default.array(C.target) ? C.target : [C.target], G = 0; G < D.length; G++) {
                var R = D[G];
                R !== E && x.push({ dropzone: C, element: R, rect: C.getRect(R) });
              }
          }
        }
        return x;
      }(n, o), s = 0; s < a.length; s++) {
        var p = a[s];
        p.rect = p.dropzone.getRect(p.element);
      }
      return a;
    }
    __name(Xr, "Xr");
    u(Xr, "ut");
    function mn(n, o, a) {
      for (var s = n.dropState, p = n.interactable, m = n.element, E = [], g = 0; g < s.activeDrops.length; g++) {
        var x = s.activeDrops[g], T = x.dropzone, C = x.element, P = x.rect;
        E.push(T.dropCheck(o, a, p, m, C, P) ? C : null);
      }
      var D = z.indexOfDeepestElement(E);
      return s.activeDrops[D] || null;
    }
    __name(mn, "mn");
    u(mn, "ct");
    function Ti(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new Mt.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new Mt.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new Mt.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new Mt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new Mt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new Mt.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(Ti, "Ti");
    u(Ti, "ft");
    function Ci(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, m = a.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && vn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(Ci, "Ci");
    u(Ci, "dt");
    function _o(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var m = a.dropState;
        o.dynamicDrop && (m.activeDrops = Xr(o, a.element));
        var E = s, g = mn(a, E, p);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = Ti(a, 0, E);
      }
    }
    __name(_o, "_o");
    u(_o, "pt"), Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var Ro = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(v.default), s.prototype.dropzone = function(m) {
        return function(E, g) {
          if (c.default.object(g)) {
            if (E.options.drop.enabled = g.enabled !== false, g.listeners) {
              var x = (0, fe.default)(g.listeners), T = Object.keys(x).reduce(function(C, P) {
                return C[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], C;
              }, {});
              E.off(E.options.drop.listeners), E.on(T), E.options.drop.listeners = T;
            }
            return c.default.func(g.ondrop) && E.on("drop", g.ondrop), c.default.func(g.ondropactivate) && E.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && E.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && E.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && E.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && E.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? E.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (E.options.drop.accept = g.accept), "checker" in g && (E.options.drop.checker = g.checker), E;
          }
          return c.default.bool(g) ? (E.options.drop.enabled = g, E) : E.options.drop;
        }(this, m);
      }, s.prototype.dropCheck = function(m, E, g, x, T, C) {
        return function(P, D, G, R, B, X, q) {
          var re = false;
          if (!(q = q || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(D, G, re, P, X, R, B);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var pe = (0, je.default)(R, B, "drag"), Pe = J.getPageXY(D);
            Pe.x += pe.x, Pe.y += pe.y;
            var He = Pe.x > q.left && Pe.x < q.right, ge = Pe.y > q.top && Pe.y < q.bottom;
            re = He && ge;
          }
          var Ge = R.getRect(B);
          if (Ge && oe === "center") {
            var Xt = Ge.left + Ge.width / 2, Gr = Ge.top + Ge.height / 2;
            re = Xt >= q.left && Xt <= q.right && Gr >= q.top && Gr <= q.bottom;
          }
          return Ge && c.default.number(oe) && (re = Math.max(0, Math.min(q.right, Ge.right) - Math.max(q.left, Ge.left)) * Math.max(0, Math.min(q.bottom, Ge.bottom) - Math.max(q.top, Ge.top)) / (Ge.width * Ge.height) >= oe), P.options.drop.checker && (re = P.options.drop.checker(D, G, re, P, X, R, B)), re;
        }(this, m, E, g, x, T, C);
      }, a.dynamicDrop = function(m) {
        return c.default.bool(m) ? (n.dynamicDrop = m, a) : n.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = Ro.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = Xr(o, a.element), p.events = Ti(a, 0, s), p.events.activate && (vn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": _o, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Ci(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        _o(n, o), Ci(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Xr, getDrop: mn, getDropEvents: Ti, fireDropEvents: Ci, defaults: { enabled: false, accept: null, overlap: "pointer" } }, fs = Ro;
    Rr.default = fs;
    var N = {};
    function te(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(T) {
          return T.pointer;
        }), m = s === "start", E = s === "end", g = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], m)
          a.distance = J.touchDistance(p, g), a.box = J.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = J.touchAngle(p, g), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (E) {
          var x = o.prevEvent;
          a.distance = x.distance, a.box = x.box, a.scale = x.scale, a.ds = 0, a.angle = x.angle, a.da = 0;
        } else
          a.distance = J.touchDistance(p, g), a.box = J.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = J.touchAngle(p, g), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(te, "te");
    u(te, "yt"), Object.defineProperty(N, "__esModule", { value: true }), N.default = void 0;
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
    } }, Ie = ae;
    N.default = Ie;
    var he = {};
    function ht(n, o, a, s, p, m, E) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(m.width) ? m.width : m.right - m.left, x = c.default.number(m.height) ? m.height : m.bottom - m.top;
        if (E = Math.min(E, Math.abs((n === "left" || n === "right" ? g : x) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), x < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left") {
          var T = g >= 0 ? m.left : m.right;
          return a.x < T + E;
        }
        if (n === "top") {
          var C = x >= 0 ? m.top : m.bottom;
          return a.y < C + E;
        }
        if (n === "right")
          return a.x > (g >= 0 ? m.right : m.left) - E;
        if (n === "bottom")
          return a.y > (x >= 0 ? m.bottom : m.top) - E;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : z.matchesUpTo(s, o, p));
    }
    __name(ht, "ht");
    u(ht, "wt");
    function It(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(It, "It");
    u(It, "_t"), Object.defineProperty(he, "__esModule", { value: true }), he.default = void 0;
    var xt = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      xt.cursors = function(m) {
        return m.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), xt.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(m) {
        return function(E, g, x) {
          return c.default.object(g) ? (E.options.resize.enabled = g.enabled !== false, E.setPerAction("resize", g), E.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? E.options.resize.axis = g.axis : g.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (E.options.resize.square = g.square), E) : c.default.bool(g) ? (E.options.resize.enabled = g, E) : E.options.resize;
        }(this, m, n);
      }, o.map.resize = xt, o.methodDict.resize = "resizable", p.actions.resize = xt.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, m = s.rect;
          s._rects = { start: (0, W.default)({}, m), corrected: (0, W.default)({}, m), previous: (0, W.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), It(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, m = s.interactable.options.resize.invert, E = m === "reposition" || m === "negate", g = s.rect, x = s._rects, T = x.start, C = x.corrected, P = x.delta, D = x.previous;
          if ((0, W.default)(D, C), E) {
            if ((0, W.default)(C, g), m === "reposition") {
              if (C.top > C.bottom) {
                var G = C.top;
                C.top = C.bottom, C.bottom = G;
              }
              if (C.left > C.right) {
                var R = C.left;
                C.left = C.right, C.right = R;
              }
            }
          } else
            C.top = Math.min(g.top, T.bottom), C.bottom = Math.max(g.bottom, T.top), C.left = Math.min(g.left, T.right), C.right = Math.max(g.right, T.left);
          for (var B in C.width = C.right - C.left, C.height = C.bottom - C.top, C)
            P[B] = C[B] - D[B];
          p.edges = s.prepared.edges, p.rect = C, p.deltaRect = P;
        }
      })(n), It(n);
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
            var x = { left: false, right: false, top: false, bottom: false };
            for (var T in x)
              x[T] = ht(T, g.edges[T], E, o._latestPointer.eventTarget, s, p, g.margin || xt.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (n.action = { name: "resize", edges: x });
          } else {
            var C = g.axis !== "y" && E.x > p.right - xt.defaultMargin, P = g.axis !== "x" && E.y > p.bottom - xt.defaultMargin;
            (C || P) && (n.action = { name: "resize", axes: (C ? "x" : "") + (P ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = xt.cursors, m = null;
      if (a)
        m = p[s + a];
      else if (o) {
        for (var E = "", g = ["top", "bottom", "left", "right"], x = 0; x < g.length; x++) {
          var T = g[x];
          o[T] && (E += T);
        }
        m = p[E];
      }
      return m;
    }, defaultMargin: null }, ko = xt;
    he.default = ko;
    var Vt = {};
    Object.defineProperty(Vt, "__esModule", { value: true }), Vt.default = void 0;
    var Oi = { id: "actions", install: function(n) {
      n.usePlugin(N.default), n.usePlugin(he.default), n.usePlugin(v.default), n.usePlugin(Rr.default);
    } };
    Vt.default = Oi;
    var Et = {};
    Object.defineProperty(Et, "__esModule", { value: true }), Et.default = void 0;
    var St, kr, Xn = 0, Zn = { request: function(n) {
      return St(n);
    }, cancel: function(n) {
      return kr(n);
    }, init: function(n) {
      if (St = n.requestAnimationFrame, kr = n.cancelAnimationFrame, !St)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          St = n["".concat(s, "RequestAnimationFrame")], kr = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      St = St && St.bind(n), kr = kr && kr.bind(n), St || (St = u(function(p) {
        var m = Date.now(), E = Math.max(0, 16 - (m - Xn)), g = n.setTimeout(function() {
          p(m + E);
        }, E);
        return Xn = m + E, g;
      }, "jt"), kr = u(function(p) {
        return clearTimeout(p);
      }, "Mt"));
    } };
    Et.default = Zn;
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.default = void 0, Zr.getContainer = Do, Zr.getScroll = Mi, Zr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Zr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var m = Do(p.container, a.interactable, s), E = Mi(m);
      o();
      var g = Mi(m);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, Et.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = Et.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), Et.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, m = Do(p.container, o, a), E = le.now(), g = (E - le.prevTime) / 1e3, x = p.speed * g;
      if (x >= 1) {
        var T = { x: le.x * x, y: le.y * x };
        if (T.x || T.y) {
          var C = Mi(m);
          c.default.window(m) ? m.scrollBy(T.x, T.y) : m && (m.scrollLeft += T.x, m.scrollTop += T.y);
          var P = Mi(m), D = { x: P.x - C.x, y: P.y - C.y };
          (D.x || D.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: D, interaction: n, container: m });
        }
        le.prevTime = E;
      }
      le.isScrolling && (Et.default.cancel(le.i), le.i = Et.default.request(le.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && le.check(o.interactable, o.prepared.name))
        if (o.simulation)
          le.x = le.y = 0;
        else {
          var s, p, m, E, g = o.interactable, x = o.element, T = o.prepared.name, C = g.options[T].autoScroll, P = Do(C.container, g, x);
          if (c.default.window(P))
            E = a.clientX < le.margin, s = a.clientY < le.margin, p = a.clientX > P.innerWidth - le.margin, m = a.clientY > P.innerHeight - le.margin;
          else {
            var D = z.getElementClientRect(P);
            E = a.clientX < D.left + le.margin, s = a.clientY < D.top + le.margin, p = a.clientX > D.right - le.margin, m = a.clientY > D.bottom - le.margin;
          }
          le.x = p ? 1 : E ? -1 : 0, le.y = m ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = C.margin, le.speed = C.speed, le.start(o));
        }
    } };
    function Do(n, o, a) {
      return (c.default.string(n) ? (0, ue.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(Do, "Do");
    u(Do, "zt");
    function Mi(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Mi, "Mi");
    u(Mi, "Ct");
    var Id = { id: "auto-scroll", install: function(n) {
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
    } } }, Pd = Id;
    Zr.default = Pd;
    var jt = {};
    Object.defineProperty(jt, "__esModule", { value: true }), jt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, jt.sign = void 0, jt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, jt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var No = {};
    function Ad(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Ad, "Ad");
    u(Ad, "Yt");
    function zd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(zd, "zd");
    u(zd, "Wt"), Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var _d = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, m) {
        var E = function(g, x, T, C, P) {
          var D = g.getRect(C), G = { action: null, interactable: g, interaction: T, element: C, rect: D, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", G), G.action;
        }(this, s, p, m, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, E, this, m, p) : E;
      }, o.prototype.ignoreFrom = (0, jt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, jt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = zd, o.prototype.styleCursor = Ad;
    } };
    No.default = _d;
    var Qn = {};
    function iu(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Go(o, a, n, p) ? n : null;
    }
    __name(iu, "iu");
    u(iu, "Vt");
    function Rd(n, o, a, s, p, m, E) {
      for (var g = 0, x = s.length; g < x; g++) {
        var T = s[g], C = p[g], P = T.getAction(o, a, n, C);
        if (P) {
          var D = iu(P, T, C, m, E);
          if (D)
            return { action: D, interactable: T, element: C };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Rd, "Rd");
    u(Rd, "Nt");
    function ou(n, o, a, s, p) {
      var m = [], E = [], g = s;
      function x(C) {
        m.push(C), E.push(g);
      }
      __name(x, "x");
      for (u(x, "u"); c.default.element(g); ) {
        m = [], E = [], p.interactables.forEachMatch(g, x);
        var T = Rd(n, o, a, m, E, s, p);
        if (T.action && !T.interactable.options[T.action.name].manualStart)
          return T;
        g = z.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(ou, "ou");
    u(ou, "qt");
    function au(n, o, a) {
      var s = o.action, p = o.interactable, m = o.element;
      s = s || { name: null }, n.interactable = p, n.element = m, (0, jt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(m) : null, lu(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(au, "au");
    u(au, "Gt");
    function Go(n, o, a, s) {
      var p = n.options, m = p[a.name].max, E = p[a.name].maxPerElement, g = s.autoStart.maxInteractions, x = 0, T = 0, C = 0;
      if (!(m && E && g))
        return false;
      for (var P = 0; P < s.interactions.list.length; P++) {
        var D = s.interactions.list[P], G = D.prepared.name;
        if (D.interacting() && (++x >= g || D.interactable === n && ((T += G === a.name ? 1 : 0) >= m || D.element === o && (C++, G === a.name && C >= E))))
          return false;
      }
      return g > 0;
    }
    __name(Go, "Go");
    u(Go, "$t");
    function su(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(su, "su");
    u(su, "Ht");
    function hs(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(hs, "hs");
    u(hs, "Kt");
    function lu(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var m = "";
        if (p.name) {
          var E = a.options[p.name].cursorChecker;
          m = c.default.func(E) ? E(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        hs(n.element, m || "", o);
      } else
        o.autoStart.cursorElement && hs(o.autoStart.cursorElement, "", o);
    }
    __name(lu, "lu");
    u(lu, "Zt"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0;
    var kd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(No.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, W.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return su(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Go, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget;
      a.interacting() || au(a, ou(a, s, p, m, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || au(p, ou(p, m, E, g, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var m = p.interactable, E = p.prepared.name;
          E && m && (m.options[E].manualStart || !Go(m, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, m, p.element), lu(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && hs(a.element, "", o);
    } }, maxInteractions: su, withinInteractionLimit: Go, validateAction: iu }, Dd = kd;
    Qn.default = Dd;
    var Lo = {};
    Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var Nd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, m = n.dy;
      if (a.prepared.name === "drag") {
        var E = Math.abs(p), g = Math.abs(m), x = a.interactable.options.drag, T = x.startAxis, C = E > g ? "x" : E < g ? "y" : "xy";
        if (a.prepared.axis = x.lockAxis === "start" ? C[0] : x.lockAxis, C !== "xy" && T !== "xy" && T !== C) {
          a.prepared.name = null;
          for (var P = s, D = function(R) {
            if (R !== a.interactable) {
              var B = a.interactable.options.drag;
              if (!B.manualStart && R.testIgnoreAllow(B, P, s)) {
                var X = R.getAction(a.downPointer, a.downEvent, a, P);
                if (X && X.name === "drag" && function(q, re) {
                  if (!re)
                    return false;
                  var oe = re.options.drag.startAxis;
                  return q === "xy" || oe === "xy" || oe === q;
                }(C, R) && Qn.default.validateAction(X, R, P, s, o))
                  return R;
              }
            }
          }; c.default.element(P); ) {
            var G = o.interactables.forEachMatch(P, D);
            if (G) {
              a.prepared.name = "drag", a.interactable = G, a.element = P;
              break;
            }
            P = (0, z.parentNode)(P);
          }
        }
      }
    } } };
    Lo.default = Nd;
    var jo = {};
    function vs(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(vs, "vs");
    u(vs, "re"), Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Gd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Qn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = vs(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      vs(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: vs }, Ld = Gd;
    jo.default = Ld;
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var jd = { id: "auto-start", install: function(n) {
      n.usePlugin(Qn.default), n.usePlugin(jo.default), n.usePlugin(Lo.default);
    } };
    Ho.default = jd;
    var Jn = {};
    function Hd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Hd, "Hd");
    u(Hd, "ue");
    function Bd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Bd, "Bd");
    u(Bd, "ce");
    function uu(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Hd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, m) {
          var E = s.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(m.type)) {
                var g = (0, e.getWindow)(m.target).document, x = p.getDocOptions(g);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(m.type) || c.default.element(m.target) && (0, z.matchesSelector)(m.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || m.preventDefault();
            } else
              m.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, z.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(uu, "uu");
    u(uu, "fe"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = void 0, Jn.install = uu;
    var qd = { id: "core/interactablePreventDefault", install: uu, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Bd, n;
    }, {}) };
    Jn.default = qd;
    var ms = {};
    Object.defineProperty(ms, "__esModule", { value: true }), ms.default = void 0, ms.default = {};
    var Ii, gs = {};
    Object.defineProperty(gs, "__esModule", { value: true }), gs.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ii || (Ii = {})), Ii.touchAction, Ii.boxSizing, Ii.noListeners;
    var $d = { id: "dev-tools", install: function() {
    } };
    gs.default = $d;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = Oe.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var bn = {};
    function cu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (C) {
            T = true, E = C;
          } finally {
            try {
              x || p.return == null || p.return();
            } finally {
              if (T)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return pu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? pu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(cu, "cu");
    u(cu, "be");
    function pu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(pu, "pu");
    u(pu, "xe");
    function Fd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Fd, "Fd");
    u(Fd, "we");
    function yn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(yn, "yn");
    u(yn, "_e"), Object.defineProperty(bn, "__esModule", { value: true }), bn.default = void 0, bn.getRectOffset = du;
    var Wd = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), yn(this, "states", []), yn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), yn(this, "startDelta", void 0), yn(this, "result", void 0), yn(this, "endResult", void 0), yn(this, "edges", void 0), yn(this, "interaction", void 0), this.interaction = s, this.result = Bo();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var m = s.phase, E = this.interaction, g = function(T) {
          var C = T.interactable.options[T.prepared.name], P = C.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(D) {
            var G = C[D];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(D) {
            return !!D;
          });
        }(E);
        this.prepareStates(g), this.edges = (0, W.default)({}, E.edges), this.startOffset = du(E.rect, p), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: m, pageCoords: p, preEnd: false });
        return this.result = Bo(), this.startAll(x), this.result = this.setAll(x);
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
        for (var x = E ? this.states.slice(E) : this.states, T = Bo(s.coords, s.rect), C = 0; C < x.length; C++) {
          var P, D = x[C], G = D.options, R = (0, W.default)({}, s.coords), B = null;
          (P = D.methods) != null && P.set && this.shouldDo(G, m, p) && (s.state = D, B = D.methods.set(s), ue.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - R.x, y: s.coords.y - R.y })), T.eventProps.push(B);
        }
        T.delta.x = s.coords.x - s.pageCoords.x, T.delta.y = s.coords.y - s.pageCoords.y, T.rectDelta.left = s.rect.left - g.left, T.rectDelta.right = s.rect.right - g.right, T.rectDelta.top = s.rect.top - g.top, T.rectDelta.bottom = s.rect.bottom - g.bottom;
        var X = this.result.coords, q = this.result.rect;
        if (X && q) {
          var re = T.rect.left !== q.left || T.rect.right !== q.right || T.rect.top !== q.top || T.rect.bottom !== q.bottom;
          T.changed = re || X.x !== T.coords.x || X.y !== T.coords.y;
        }
        return T;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, m = s.phase, E = p.coords.cur, g = p.coords.start, x = this.result, T = this.startDelta, C = x.delta;
        m === "start" && (0, W.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[g, T], [E, C]].length; P++) {
          var D = cu([[g, T], [E, C]][P], 2), G = D[0], R = D[1];
          G.page.x += R.x, G.page.y += R.y, G.client.x += R.x, G.client.y += R.y;
        }
        var B = this.result.rectDelta, X = s.rect || p.rect;
        X.left += B.left, X.right += B.right, X.top += B.top, X.bottom += B.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, m = s.phase, E = s.preEnd, g = s.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: m, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = x, !x.changed && (!g || g < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var T = p.coords.cur.page, C = { x: s.modifiedCoords.x - T.x, y: s.modifiedCoords.y - T.y };
          x.coords.x += C.x, x.coords.y += C.y, x.delta.x += C.x, x.delta.y += C.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, m = s.event, E = this.states;
        if (E && E.length) {
          for (var g = false, x = 0; x < E.length; x++) {
            var T = E[x];
            s.state = T;
            var C = T.options, P = T.methods, D = P.beforeEnd && P.beforeEnd(s);
            if (D)
              return this.endResult = D, false;
            g = g || !g && this.shouldDo(C, true, s.phase, true);
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
          var m = s[p], E = m.options, g = m.methods, x = m.name;
          this.states.push({ options: E, methods: g, index: p, name: x });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, m = p.coords, E = p.rect, g = p.modification;
        if (g.result) {
          for (var x = g.startDelta, T = g.result, C = T.delta, P = T.rectDelta, D = [[m.start, x], [m.cur, C]], G = 0; G < D.length; G++) {
            var R = cu(D[G], 2), B = R[0], X = R[1];
            B.page.x -= X.x, B.page.y -= X.y, B.client.x -= X.x, B.client.y -= X.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, m, E) {
        return !(!s || s.enabled === false || E && !s.endOnly || s.endOnly && !p || m === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, gn.default)(p);
        }), this.result = Bo((0, W.default)({}, s.result.coords), (0, W.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Fd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Bo(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Bo, "Bo");
    u(Bo, "Oe");
    function du(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(du, "du");
    u(du, "Ee"), bn.default = Wd;
    var vt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(qo, "qo");
    u(qo, "Te"), Object.defineProperty(vt, "__esModule", { value: true }), vt.addEventModifiers = qo, vt.default = void 0, vt.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(m) {
        var E = m || {};
        for (var g in E.enabled = E.enabled !== false, a)
          g in E || (E[g] = a[g]);
        var x = { options: E, methods: s, name: o, enable: function() {
          return E.enabled = true, x;
        }, disable: function() {
          return E.enabled = false, x;
        } };
        return x;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    };
    var Ud = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new bn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": qo, "interactions:action-move": qo, "interactions:action-end": qo, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } }, Vd = Ud;
    vt.default = Vd;
    var Pi = {};
    Object.defineProperty(Pi, "__esModule", { value: true }), Pi.defaults = void 0, Pi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ai = {};
    function bs(n) {
      return bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, bs(n);
    }
    __name(bs, "bs");
    u(bs, "De");
    function Yd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Yd, "Yd");
    u(Yd, "Ae");
    function ys(n, o) {
      return ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, ys(n, o);
    }
    __name(ys, "ys");
    u(ys, "ze");
    function Xd(n, o) {
      if (o && (bs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ne(n);
    }
    __name(Xd, "Xd");
    u(Xd, "Ce");
    function Ne(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Ne, "Ne");
    u(Ne, "Re");
    function $o(n) {
      return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, $o(n);
    }
    __name($o, "$o");
    u($o, "Fe");
    function $e(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name($e, "$e");
    u($e, "Xe"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.InteractEvent = void 0;
    var fu = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && ys(g, x);
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
        var g, x = $o(s);
        if (p) {
          var T = $o(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return Xd(this, g);
      });
      function E(g, x, T, C, P, D, G) {
        var R;
        (function(He, ge) {
          if (!(He instanceof ge))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), $e(Ne(R = m.call(this, g)), "relatedTarget", null), $e(Ne(R), "screenX", void 0), $e(Ne(R), "screenY", void 0), $e(Ne(R), "button", void 0), $e(Ne(R), "buttons", void 0), $e(Ne(R), "ctrlKey", void 0), $e(Ne(R), "shiftKey", void 0), $e(Ne(R), "altKey", void 0), $e(Ne(R), "metaKey", void 0), $e(Ne(R), "page", void 0), $e(Ne(R), "client", void 0), $e(Ne(R), "delta", void 0), $e(Ne(R), "rect", void 0), $e(Ne(R), "x0", void 0), $e(Ne(R), "y0", void 0), $e(Ne(R), "t0", void 0), $e(Ne(R), "dt", void 0), $e(Ne(R), "duration", void 0), $e(Ne(R), "clientX0", void 0), $e(Ne(R), "clientY0", void 0), $e(Ne(R), "velocity", void 0), $e(Ne(R), "speed", void 0), $e(Ne(R), "swipe", void 0), $e(Ne(R), "axes", void 0), $e(Ne(R), "preEnd", void 0), P = P || g.element;
        var B = g.interactable, X = (B && B.options || Pi.defaults).deltaSource, q = (0, je.default)(B, P, T), re = C === "start", oe = C === "end", pe = re ? Ne(R) : g.prevEvent, Pe = re ? g.coords.start : oe ? { page: pe.page, client: pe.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return R.page = (0, W.default)({}, Pe.page), R.client = (0, W.default)({}, Pe.client), R.rect = (0, W.default)({}, g.rect), R.timeStamp = Pe.timeStamp, oe || (R.page.x -= q.x, R.page.y -= q.y, R.client.x -= q.x, R.client.y -= q.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = D, R.type = G || T + (C || ""), R.interactable = B, R.t0 = re ? g.pointers[g.pointers.length - 1].downTime : pe.t0, R.x0 = g.coords.start.page.x - q.x, R.y0 = g.coords.start.page.y - q.y, R.clientX0 = g.coords.start.client.x - q.x, R.clientY0 = g.coords.start.client.y - q.y, R.delta = re || oe ? { x: 0, y: 0 } : { x: R[X].x - pe[X].x, y: R[X].y - pe[X].y }, R.dt = g.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, W.default)({}, g.coords.velocity[X]), R.speed = (0, rt.default)(R.velocity.x, R.velocity.y), R.swipe = oe || C === "inertiastart" ? R.getSwipe() : null, R;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var T = 112.5 <= x && x < 247.5, C = 202.5 <= x && x < 337.5;
        return { up: C, down: !C && 22.5 <= x && x < 157.5, left: T, right: !T && (292.5 <= x || x < 67.5), angle: x, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Yd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Ai.InteractEvent = fu, Object.defineProperties(fu.prototype, { pageX: { get: function() {
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
    var zi = {};
    function hu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(hu, "hu");
    u(hu, "We");
    function Zd(n, o, a) {
      return o && hu(n.prototype, o), a && hu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Zd, "Zd");
    u(Zd, "Le");
    function _i(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_i, "_i");
    u(_i, "Ue"), Object.defineProperty(zi, "__esModule", { value: true }), zi.PointerInfo = void 0;
    var Qd = Zd(u(/* @__PURE__ */ __name(function n(o, a, s, p, m) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), _i(this, "id", void 0), _i(this, "pointer", void 0), _i(this, "event", void 0), _i(this, "downTime", void 0), _i(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = m;
    }, "n"), "t"));
    zi.PointerInfo = Qd;
    var Fo, Wo, Dt = {};
    function Jd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Jd, "Jd");
    u(Jd, "$e");
    function We(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(We, "We");
    u(We, "He"), Object.defineProperty(Dt, "__esModule", { value: true }), Dt.Interaction = void 0, Object.defineProperty(Dt, "PointerInfo", { enumerable: true, get: function() {
      return zi.PointerInfo;
    } }), Dt.default = Dt._ProxyValues = Dt._ProxyMethods = void 0, Dt._ProxyValues = Fo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Fo || (Dt._ProxyValues = Fo = {})), Dt._ProxyMethods = Wo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Wo || (Dt._ProxyMethods = Wo = {}));
    var Kd = 0, vu = function() {
      function n(s) {
        var p = this, m = s.pointerType, E = s.scopeFire;
        (function(D, G) {
          if (!(D instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), We(this, "interactable", null), We(this, "element", null), We(this, "rect", null), We(this, "_rects", void 0), We(this, "edges", null), We(this, "_scopeFire", void 0), We(this, "prepared", { name: null, axis: null, edges: null }), We(this, "pointerType", void 0), We(this, "pointers", []), We(this, "downEvent", null), We(this, "downPointer", {}), We(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), We(this, "prevEvent", null), We(this, "pointerIsDown", false), We(this, "pointerWasMoved", false), We(this, "_interacting", false), We(this, "_ending", false), We(this, "_stopped", true), We(this, "_proxy", null), We(this, "simulation", null), We(this, "doMove", (0, jt.warnOnce)(function(D) {
          this.move(D);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), We(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), We(this, "_id", Kd++), this._scopeFire = E, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var x = u(function(D) {
          Object.defineProperty(p._proxy, D, { get: function() {
            return g[D];
          } });
        }, "a");
        for (var T in Fo)
          x(T);
        var C = u(function(D) {
          Object.defineProperty(p._proxy, D, { value: function() {
            return g[D].apply(g, arguments);
          } });
        }, "l");
        for (var P in Wo)
          C(P);
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
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, jt.copyAction)(this.prepared, s), this.interactable = p, this.element = m, this.rect = p.getRect(m), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, m, false);
        var E, g, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, rt.default)(E, g) > this.pointerMoveTolerance);
        var T = this.getPointerIndex(s), C = { pointer: s, pointerIndex: T, pointerInfo: this.pointers[T], event: p, type: "move", eventTarget: m, dx: E, dy: g, duplicate: x, interaction: this };
        x || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", C), x || this.simulation || (this.interacting() && (C.type = null, this.move(C)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || J.setZeroCoords(this.coords.delta), (s = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, m, E) {
        var g = this.getPointerIndex(s);
        g === -1 && (g = this.updatePointer(s, p, m, false));
        var x = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(x), { pointer: s, pointerIndex: g, pointerInfo: this.pointers[g], event: p, eventTarget: m, type: x, curEventTarget: E, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
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
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Oe.findIndex(this.pointers, function(m) {
          return m.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, m, E) {
        var g = J.getPointerId(s), x = this.getPointerIndex(s), T = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(p.type)), T ? T.pointer = s : (T = new zi.PointerInfo(g, s, p, null, null), x = this.pointers.length, this.pointers.push(T)), J.setCoords(this.coords.cur, this.pointers.map(function(C) {
          return C.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, T.downTime = this.coords.cur.timeStamp, T.downTarget = m, J.pointerExtend(this.downPointer, s), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, m), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: m, down: E, pointerInfo: T, pointerIndex: x, interaction: this }), x;
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
        return new Ai.InteractEvent(this, s, this.prepared.name, p, this.element, m, E);
      } }, { key: "_fireEvent", value: function(s) {
        var p;
        (p = this.interactable) == null || p.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, m = s.phase, E = s.preEnd, g = s.type, x = this.rect;
        if (x && m === "move" && (ue.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(m), s) === false)
          return false;
        var T = s.iEvent = this._createPreparedEvent(p, m, E, g);
        return this._scopeFire("interactions:action-".concat(m), s), m === "start" && (this.prevEvent = T), this._fireEvent(T), this._scopeFire("interactions:after-action-".concat(m), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], a && Jd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Dt.Interaction = vu;
    var ef = vu;
    Dt.default = ef;
    var wn = {};
    function mu(n) {
      n.pointerIsDown && (xs(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(mu, "mu");
    u(mu, "tn");
    function gu(n) {
      ws(n.interaction);
    }
    __name(gu, "gu");
    u(gu, "en");
    function ws(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return xs(n.coords.cur, o), xs(n.coords.delta, o), ue.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ws, "ws");
    u(ws, "nn");
    function tf(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(tf, "tf");
    u(tf, "rn");
    function xs(n, o) {
      var a = n.page, s = n.client, p = o.x, m = o.y;
      a.x += p, a.y += m, s.x += p, s.y += m;
    }
    __name(xs, "xs");
    u(xs, "on"), Object.defineProperty(wn, "__esModule", { value: true }), wn.addTotal = mu, wn.applyPending = ws, wn.default = void 0, Dt._ProxyMethods.offsetBy = "";
    var rf = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = tf;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return mu(n.interaction);
    }, "interactions:before-action-start": gu, "interactions:before-action-move": gu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ws(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, nf = rf;
    wn.default = nf;
    var Kn = {};
    function of(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(of, "of");
    u(of, "un");
    function pt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(pt, "pt");
    u(pt, "cn"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = Kn.InertiaState = void 0;
    var bu = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), pt(this, "active", false), pt(this, "isModified", false), pt(this, "smoothEnd", false), pt(this, "allowResume", false), pt(this, "modification", void 0), pt(this, "modifierCount", 0), pt(this, "modifierArg", void 0), pt(this, "startCoords", void 0), pt(this, "t0", 0), pt(this, "v0", 0), pt(this, "te", 0), pt(this, "targetOffset", void 0), pt(this, "modifiedOffset", void 0), pt(this, "currentOffset", void 0), pt(this, "lambda_v0", 0), pt(this, "one_ve_v0", 0), pt(this, "timeout", void 0), pt(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, m = Uo(p);
        if (!m || !m.enabled)
          return false;
        var E = p.coords.velocity.client, g = (0, rt.default)(E.x, E.y), x = this.modification || (this.modification = new bn.default(p));
        if (x.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, m = Uo(this.interaction), E = m.resistance, g = -Math.log(m.endSpeed / this.v0) / E;
        this.targetOffset = { x: (p.x - g) / E, y: (p.y - g) / E }, this.te = g, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - m.endSpeed / this.v0;
        var x = this.modification, T = this.modifierArg;
        T.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, x.result = x.setAll(T), x.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + x.result.delta.x, y: this.targetOffset.y + x.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var p = this;
        this.timeout = Et.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, m, E, g, x = this, T = this.interaction, C = Uo(T).resistance, P = (T._now() - this.t0) / 1e3;
        if (P < this.te) {
          var D, G = 1 - (Math.exp(-C * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, m = this.modifiedOffset.x, E = this.modifiedOffset.y, D = { x: yu(g = G, 0, s, m), y: yu(g, 0, p, E) }) : D = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var R = { x: D.x - this.currentOffset.x, y: D.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, T.offsetBy(R), T.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          T.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, m = p._now() - this.t0, E = Uo(p).smoothEndDuration;
        if (m < E) {
          var g = { x: wu(m, 0, this.targetOffset.x, E), y: wu(m, 0, this.targetOffset.y, E) }, x = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, p.offsetBy(x), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
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
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Et.default.cancel(this.timeout);
      } }]) && of(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Uo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Uo, "Uo");
    u(Uo, "dn"), Kn.InertiaState = bu;
    var af = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(wn.default), n.usePlugin(vt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new bu(o);
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
          p = z.parentNode(p);
        }
    }, "interactions:stop": function(n) {
      var o = n.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(n) {
      var o = n.interaction.modification;
      o.stop(n), o.start(n, n.interaction.coords.cur.page), o.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": vt.addEventModifiers, "interactions:action-inertiastart": vt.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    function yu(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(yu, "yu");
    u(yu, "vn");
    function wu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(wu, "wu");
    u(wu, "hn");
    var sf = af;
    Kn.default = sf;
    var Ri = {};
    function lf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(lf, "lf");
    u(lf, "mn");
    function ki(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ki, "ki");
    u(ki, "bn");
    function xu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(xu, "xu");
    u(xu, "xn"), Object.defineProperty(Ri, "__esModule", { value: true }), Ri.Eventable = void 0;
    var uf = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ki(this, "options", void 0), ki(this, "types", {}), ki(this, "propagationStopped", false), ki(this, "immediatePropagationStopped", false), ki(this, "global", void 0), this.options = (0, W.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, m = this.global;
        (p = this.types[s.type]) && xu(s, p), !s.propagationStopped && m && (p = m[s.type]) && xu(s, p);
      } }, { key: "on", value: function(s, p) {
        var m = (0, fe.default)(s, p);
        for (s in m)
          this.types[s] = Oe.merge(this.types[s] || [], m[s]);
      } }, { key: "off", value: function(s, p) {
        var m = (0, fe.default)(s, p);
        for (s in m) {
          var E = this.types[s];
          if (E && E.length)
            for (var g = 0; g < m[s].length; g++) {
              var x = m[s][g], T = E.indexOf(x);
              T !== -1 && E.splice(T, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && lf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Ri.Eventable = uf;
    var Di = {};
    Object.defineProperty(Di, "__esModule", { value: true }), Di.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var Es = {};
    Object.defineProperty(Es, "__esModule", { value: true }), Es.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var m = n.interactables.get(s, p);
        return m || ((m = n.interactables.new(s, p)).events.global = a.globalEvents), m;
      }, "a"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, jt.warnOnce)(function(a, s, p) {
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
        return (0, Di.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, jt.warnOnce)(function(a, s, p) {
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
        var x;
        return (0, Di.default)(a, this.scope.actions) ? a in this.globalEvents && (x = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(x, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return F.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return F.default.supportsPointerEvent;
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
    var Vo = {};
    function cf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(cf, "cf");
    u(cf, "En");
    function Dr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Dr, "Dr");
    u(Dr, "Sn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.Interactable = void 0;
    var pf = function() {
      function n(s, p, m, E) {
        (function(g, x) {
          if (!(g instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Dr(this, "options", void 0), Dr(this, "_actions", void 0), Dr(this, "target", void 0), Dr(this, "events", new Ri.Eventable()), Dr(this, "_context", void 0), Dr(this, "_win", void 0), Dr(this, "_doc", void 0), Dr(this, "_scopeEvents", void 0), Dr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || m, this._win = (0, e.getWindow)((0, z.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = E, this.set(p);
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
          var g = E, x = this.options[s], T = p[g];
          g === "listeners" && this.updatePerActionListeners(s, x.listeners, T), c.default.array(T) ? x[g] = Oe.from(T) : c.default.plainObject(T) ? (x[g] = (0, W.default)(x[g] || {}, (0, gn.default)(T)), c.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (x[g].enabled = T.enabled !== false)) : c.default.bool(T) && c.default.object(m.perAction[g]) ? x[g].enabled = T : x[g] = T;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, z.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(m) {
          var E = (0, W.default)({}, p._rectChecker(m));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, z.trySelector)(p) || c.default.object(p)) {
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
        return this._context === s.ownerDocument || (0, z.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, p, m) {
        return !this.testIgnore(s.ignoreFrom, p, m) && this.testAllow(s.allowFrom, p, m);
      } }, { key: "testAllow", value: function(s, p, m) {
        return !s || !!c.default.element(m) && (c.default.string(s) ? (0, z.matchesUpTo)(m, s, p) : !!c.default.element(s) && (0, z.nodeContains)(s, m));
      } }, { key: "testIgnore", value: function(s, p, m) {
        return !(!s || !c.default.element(m)) && (c.default.string(s) ? (0, z.matchesUpTo)(m, s, p) : !!c.default.element(s) && (0, z.nodeContains)(s, m));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, m, E) {
        c.default.object(p) && !c.default.array(p) && (E = m, m = null);
        var g = s === "on" ? "add" : "remove", x = (0, fe.default)(p, m);
        for (var T in x) {
          T === "wheel" && (T = F.default.wheelEvent);
          for (var C = 0; C < x[T].length; C++) {
            var P = x[T][C];
            (0, Di.default)(T, this._actions) ? this.events[s](T, P) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, T, P, E) : this._scopeEvents[g](this.target, T, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, m) {
        return this._onOff("on", s, p, m);
      } }, { key: "off", value: function(s, p, m) {
        return this._onOff("off", s, p, m);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var m in c.default.object(s) || (s = {}), this.options = (0, gn.default)(p.base), this._actions.methodDict) {
          var E = m, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, W.default)((0, W.default)({}, p.perAction), p.actions[E])), this[g](s[E]);
        }
        for (var x in s)
          c.default.func(this[x]) && this[x](s[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], m = p.length - 1; m >= 0; m--) {
              var E = p[m], g = E.selector, x = E.context, T = E.listeners;
              g === this.target && x === this._context && p.splice(m, 1);
              for (var C = T.length - 1; C >= 0; C--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, T[C][0], T[C][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && cf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Vo.Interactable = pf;
    var Yo = {};
    function df(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(df, "df");
    u(df, "Mn");
    function Ss(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ss, "Ss");
    u(Ss, "kn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.InteractableSet = void 0;
    var ff = function() {
      function n(s) {
        var p = this;
        (function(m, E) {
          if (!(m instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ss(this, "list", []), Ss(this, "selectorMap", {}), Ss(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(m) {
          var E = m.interactable, g = E.target, x = E._context, T = c.default.string(g) ? p.selectorMap[g] : g[p.scope.id], C = Oe.findIndex(T, function(P) {
            return P.context === x;
          });
          T[C] && (T[C].context = null, T[C].interactable = null), T.splice(C, 1);
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
        var x = Oe.find(g, function(T) {
          return T.context === m && (E || T.interactable.inContext(s));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var m = 0; m < this.list.length; m++) {
          var E = this.list[m], g = void 0;
          if ((c.default.string(E.target) ? c.default.element(s) && z.matchesSelector(s, E.target) : s === E.target) && E.inContext(s) && (g = p(E)), g !== void 0)
            return g;
        }
      } }]) && df(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Yo.InteractableSet = ff;
    var Xo = {};
    function hf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(hf, "hf");
    u(hf, "An");
    function Ts(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ts, "Ts");
    u(Ts, "zn");
    function Cs(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (C) {
            T = true, E = C;
          } finally {
            try {
              x || p.return == null || p.return();
            } finally {
              if (T)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Eu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Eu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Cs, "Cs");
    u(Cs, "Cn");
    function Eu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Eu, "Eu");
    u(Eu, "Rn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var vf = function() {
      function n(s) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ts(this, "currentTarget", void 0), Ts(this, "originalEvent", void 0), Ts(this, "type", void 0), this.originalEvent = s, (0, Ft.default)(this, s);
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
      } }]) && hf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Ni(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, W.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(Ni, "Ni");
    u(Ni, "Xn");
    var mf = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], m = { add: E, remove: g, addDelegate: function(C, P, D, G, R) {
        var B = Ni(R);
        if (!s[D]) {
          s[D] = [];
          for (var X = 0; X < p.length; X++) {
            var q = p[X];
            E(q, D, x), E(q, D, T, true);
          }
        }
        var re = s[D], oe = Oe.find(re, function(pe) {
          return pe.selector === C && pe.context === P;
        });
        oe || (oe = { selector: C, context: P, listeners: [] }, re.push(oe)), oe.listeners.push([G, B]);
      }, removeDelegate: function(C, P, D, G, R) {
        var B, X = Ni(R), q = s[D], re = false;
        if (q)
          for (B = q.length - 1; B >= 0; B--) {
            var oe = q[B];
            if (oe.selector === C && oe.context === P) {
              for (var pe = oe.listeners, Pe = pe.length - 1; Pe >= 0; Pe--) {
                var He = Cs(pe[Pe], 2), ge = He[0], Ge = He[1], Xt = Ge.capture, Gr = Ge.passive;
                if (ge === G && Xt === X.capture && Gr === X.passive) {
                  pe.splice(Pe, 1), pe.length || (q.splice(B, 1), g(P, D, x), g(P, D, T, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: T, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function E(C, P, D, G) {
        var R = Ni(G), B = Oe.find(a, function(X) {
          return X.eventTarget === C;
        });
        B || (B = { eventTarget: C, events: {} }, a.push(B)), B.events[P] || (B.events[P] = []), C.addEventListener && !Oe.contains(B.events[P], D) && (C.addEventListener(P, D, m.supportsOptions ? R : R.capture), B.events[P].push(D));
      }
      __name(E, "E");
      u(E, "s");
      function g(C, P, D, G) {
        var R = Ni(G), B = Oe.findIndex(a, function(Pe) {
          return Pe.eventTarget === C;
        }), X = a[B];
        if (X && X.events)
          if (P !== "all") {
            var q = false, re = X.events[P];
            if (re) {
              if (D === "all") {
                for (var oe = re.length - 1; oe >= 0; oe--)
                  g(C, P, re[oe], R);
                return;
              }
              for (var pe = 0; pe < re.length; pe++)
                if (re[pe] === D) {
                  C.removeEventListener(P, D, m.supportsOptions ? R : R.capture), re.splice(pe, 1), re.length === 0 && (delete X.events[P], q = true);
                  break;
                }
            }
            q && !Object.keys(X.events).length && a.splice(B, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && g(C, P, "all");
      }
      __name(g, "g");
      u(g, "l");
      function x(C, P) {
        for (var D = Ni(P), G = new vf(C), R = s[C.type], B = Cs(J.getEventTargets(C), 1)[0], X = B; c.default.element(X); ) {
          for (var q = 0; q < R.length; q++) {
            var re = R[q], oe = re.selector, pe = re.context;
            if (z.matchesSelector(X, oe) && z.nodeContains(pe, B) && z.nodeContains(pe, X)) {
              var Pe = re.listeners;
              G.currentTarget = X;
              for (var He = 0; He < Pe.length; He++) {
                var ge = Cs(Pe[He], 2), Ge = ge[0], Xt = ge[1], Gr = Xt.capture, Ws = Xt.passive;
                Gr === D.capture && Ws === D.passive && Ge(G);
              }
            }
          }
          X = z.parentNode(X);
        }
      }
      __name(x, "x");
      u(x, "u");
      function T(C) {
        return x(C, true);
      }
      __name(T, "T");
      return u(T, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), n.events = m, m;
    } };
    Xo.default = mf;
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var Qo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Qo.methodOrder.length; o++) {
        var a;
        a = Qo.methodOrder[o];
        var s = Qo[a](n);
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
            g = z.parentNode(g);
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
          if (g.simulation && !Su(g, a))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
        }
      }
      if (o)
        return o;
      for (var x = 0; x < m.interactions.list.length; x++) {
        var T = m.interactions.list[x];
        if (!(T.pointerType !== s || /down/i.test(p) && T.simulation))
          return T;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (Su(p, o))
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
    function Su(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(Su, "Su");
    u(Su, "Ln");
    var gf = Qo;
    Zo.default = gf;
    var Jo = {};
    function Os(n) {
      return Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Os(n);
    }
    __name(Os, "Os");
    u(Os, "Nn");
    function Tu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (C) {
            T = true, E = C;
          } finally {
            try {
              x || p.return == null || p.return();
            } finally {
              if (T)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Cu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Cu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Tu, "Tu");
    u(Tu, "qn");
    function Cu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Cu, "Cu");
    u(Cu, "Gn");
    function bf(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(bf, "bf");
    u(bf, "$n");
    function yf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(yf, "yf");
    u(yf, "Hn");
    function Ms(n, o) {
      return Ms = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Ms(n, o);
    }
    __name(Ms, "Ms");
    u(Ms, "Kn");
    function wf(n, o) {
      if (o && (Os(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(wf, "wf");
    u(wf, "Zn");
    function Ko(n) {
      return Ko = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ko(n);
    }
    __name(Ko, "Ko");
    u(Ko, "Jn"), Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var Is = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Ou(n, o) {
      return function(a) {
        var s = o.interactions.list, p = J.getPointerType(a), m = Tu(J.getEventTargets(a), 2), E = m[0], g = m[1], x = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var T = 0; T < a.changedTouches.length; T++) {
            var C = a.changedTouches[T], P = { pointer: C, pointerId: J.getPointerId(C), pointerType: p, eventType: a.type, eventTarget: E, curEventTarget: g, scope: o }, D = Mu(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, D]);
          }
        } else {
          var G = false;
          if (!F.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var R = 0; R < s.length && !G; R++)
              G = s[R].pointerType !== "mouse" && s[R].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G) {
            var B = { pointer: a, pointerId: J.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: g, eventTarget: E, scope: o }, X = Mu(B);
            x.push([B.pointer, B.eventTarget, B.curEventTarget, X]);
          }
        }
        for (var q = 0; q < x.length; q++) {
          var re = Tu(x[q], 4), oe = re[0], pe = re[1], Pe = re[2];
          re[3][n](oe, a, pe, Pe);
        }
      };
    }
    __name(Ou, "Ou");
    u(Ou, "tr");
    function Mu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Zo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(Mu, "Mu");
    u(Mu, "er");
    function Ps(n, o) {
      var a = n.doc, s = n.scope, p = n.options, m = s.interactions.docEvents, E = s.events, g = E[o];
      for (var x in s.browser.isIOS && !p.events && (p.events = { passive: false }), E.delegatedEvents)
        g(a, x, E.delegateListener), g(a, x, E.delegateUseCapture, true);
      for (var T = p && p.events, C = 0; C < m.length; C++) {
        var P = m[C];
        g(a, P.type, P.listener, T);
      }
    }
    __name(Ps, "Ps");
    u(Ps, "nr");
    var xf = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < Is.length; a++) {
        var s = Is[a];
        o[s] = Ou(s, n);
      }
      var p, m = F.default.pEventTypes;
      function E() {
        for (var g = 0; g < n.interactions.list.length; g++) {
          var x = n.interactions.list[g];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var T = function() {
              var P = x.pointers[C];
              n.documents.some(function(D) {
                var G = D.doc;
                return (0, z.nodeContains)(G, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, C = 0; C < x.pointers.length; C++)
              T();
        }
      }
      __name(E, "E");
      u(E, "a"), (p = M.default.PointerEvent ? [{ type: m.down, listener: E }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var x = 0; x < n.interactions.list.length; x++)
          n.interactions.list[x].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(R, B) {
          if (typeof B != "function" && B !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(B && B.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), B && Ms(R, B);
        })(G, g);
        var x, T, C, P, D = (C = G, P = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (R) {
            return false;
          }
        }(), function() {
          var R, B = Ko(C);
          if (P) {
            var X = Ko(this).constructor;
            R = Reflect.construct(B, arguments, X);
          } else
            R = B.apply(this, arguments);
          return wf(this, R);
        });
        function G() {
          return bf(this, G), D.apply(this, arguments);
        }
        __name(G, "G");
        return u(G, "s"), x = G, (T = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(R) {
          n.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && yf(x.prototype, T), Object.defineProperty(x, "prototype", { writable: false }), G;
      }(Dt.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(T, C) {
          return n.fire(T, C);
        };
        var x = new n.Interaction(g);
        return n.interactions.list.push(x), x;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Jn.default);
    }, listeners: { "scope:add-document": function(n) {
      return Ps(n, "add");
    }, "scope:remove-document": function(n) {
      return Ps(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: Ps, doOnInteractions: Ou, methodNames: Is }, Ef = xf;
    Jo.default = Ef;
    var Gi = {};
    function As(n) {
      return As = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, As(n);
    }
    __name(As, "As");
    u(As, "ar");
    function Li() {
      return Li = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(n, o, a) {
        var s = Sf(n, o);
        if (s) {
          var p = Object.getOwnPropertyDescriptor(s, o);
          return p.get ? p.get.call(arguments.length < 3 ? n : a) : p.value;
        }
      }, Li.apply(this, arguments);
    }
    __name(Li, "Li");
    u(Li, "sr");
    function Sf(n, o) {
      for (; !Object.prototype.hasOwnProperty.call(n, o) && (n = Qr(n)) !== null; )
        ;
      return n;
    }
    __name(Sf, "Sf");
    u(Sf, "lr");
    function zs(n, o) {
      return zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, zs(n, o);
    }
    __name(zs, "zs");
    u(zs, "ur");
    function Tf(n, o) {
      if (o && (As(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(Tf, "Tf");
    u(Tf, "cr");
    function Qr(n) {
      return Qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Qr(n);
    }
    __name(Qr, "Qr");
    u(Qr, "fr");
    function Iu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Iu, "Iu");
    u(Iu, "dr");
    function Pu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Pu, "Pu");
    u(Pu, "pr");
    function Au(n, o, a) {
      return o && Pu(n.prototype, o), a && Pu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Au, "Au");
    u(Au, "vr");
    function mt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(mt, "mt");
    u(mt, "hr"), Object.defineProperty(Gi, "__esModule", { value: true }), Gi.Scope = void 0, Gi.initScope = zu;
    var Cf = function() {
      function n() {
        var o = this;
        Iu(this, n), mt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), mt(this, "isInitialized", false), mt(this, "listenerMaps", []), mt(this, "browser", F.default), mt(this, "defaults", (0, gn.default)(Pi.defaults)), mt(this, "Eventable", Ri.Eventable), mt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), mt(this, "interactStatic", (0, Es.createInteractStatic)(this)), mt(this, "InteractEvent", Ai.InteractEvent), mt(this, "Interactable", void 0), mt(this, "interactables", new Yo.InteractableSet(this)), mt(this, "_win", void 0), mt(this, "document", void 0), mt(this, "window", void 0), mt(this, "documents", []), mt(this, "_plugins", { list: [], map: {} }), mt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(x, T) {
            if (typeof T != "function" && T !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(T && T.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), T && zs(x, T);
          })(g, s);
          var p, m, E = (p = g, m = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (x) {
              return false;
            }
          }(), function() {
            var x, T = Qr(p);
            if (m) {
              var C = Qr(this).constructor;
              x = Reflect.construct(T, arguments, C);
            } else
              x = T.apply(this, arguments);
            return Tf(this, x);
          });
          function g() {
            return Iu(this, g), E.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), Au(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(x) {
            return Li(Qr(g.prototype), "set", this).call(this, x), a.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Li(Qr(g.prototype), "unset", this).call(this);
            var x = a.interactables.list.indexOf(this);
            x < 0 || (Li(Qr(g.prototype), "unset", this).call(this), a.interactables.list.splice(x, 1), a.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }(Vo.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), Au(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : zu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, m = o.before.reduce(function(g, x) {
            return g[x] = true, g[_u(x)] = true, g;
          }, {}); s < p; s++) {
            var E = this.listenerMaps[s].id;
            if (m[E] || m[_u(E)])
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
    function zu(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), M.default.init(o), F.default.init(o), Et.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Jo.default), n.usePlugin(Xo.default), n;
    }
    __name(zu, "zu");
    u(zu, "yr");
    function _u(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(_u, "_u");
    u(_u, "mr"), Gi.Scope = Cf;
    var _s = {}, nt = {};
    Object.defineProperty(nt, "__esModule", { value: true });
    var Of = {};
    nt.default = void 0, Object.keys(_s).forEach(function(n) {
      n !== "default" && n !== "__esModule" && (Object.prototype.hasOwnProperty.call(Of, n) || n in nt && nt[n] === _s[n] || Object.defineProperty(nt, n, { enumerable: true, get: function() {
        return _s[n];
      } }));
    });
    var Ru = new Gi.Scope(), Mf = Ru.interactStatic;
    nt.default = Mf;
    var If = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Ru.init(If);
    var ea = {};
    Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0, ea.default = function() {
    };
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0, ta.default = function() {
    };
    var ra = {};
    function ku(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (m = p.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (C) {
            T = true, E = C;
          } finally {
            try {
              x || p.return == null || p.return();
            } finally {
              if (T)
                throw E;
            }
          }
          return g;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Du(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Du(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ku, "ku");
    u(ku, "jr");
    function Du(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Du, "Du");
    u(Du, "Mr"), Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0, ra.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = ku(s, 2), m = p[0], E = p[1];
        return m in n || E in n;
      }), a = u(function(s, p) {
        for (var m = n.range, E = n.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = n.offset, T = x === void 0 ? { x: 0, y: 0 } : x, C = { range: m, grid: n, x: null, y: null }, P = 0; P < o.length; P++) {
          var D = ku(o[P], 2), G = D[0], R = D[1], B = Math.round((s - T.x) / n[G]), X = Math.round((p - T.y) / n[R]);
          C[G] = Math.max(g.left, Math.min(g.right, B * n[G] + T.x)), C[R] = Math.max(g.top, Math.min(g.bottom, X * n[R] + T.y));
        }
        return C;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var ji = {};
    Object.defineProperty(ji, "__esModule", { value: true }), Object.defineProperty(ji, "edgeTarget", { enumerable: true, get: function() {
      return ea.default;
    } }), Object.defineProperty(ji, "elements", { enumerable: true, get: function() {
      return ta.default;
    } }), Object.defineProperty(ji, "grid", { enumerable: true, get: function() {
      return ra.default;
    } });
    var na = {};
    Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0;
    var Pf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, ji), o.createSnapGrid = o.snappers.grid;
    } }, Af = Pf;
    na.default = Af;
    var ei = {};
    function Nu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(Nu, "Nu");
    u(Nu, "Cr");
    function Rs(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Nu(Object(a), true).forEach(function(s) {
          zf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Nu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(Rs, "Rs");
    u(Rs, "Rr");
    function zf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zf, "zf");
    u(zf, "Fr"), Object.defineProperty(ei, "__esModule", { value: true }), ei.default = ei.aspectRatio = void 0;
    var Gu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, m = o.options.ratio, E = o.options, g = E.equalDelta, x = E.modifiers;
      m === "preserve" && (m = a.width / a.height), o.startCoords = (0, W.default)({}, p), o.startRect = (0, W.default)({}, a), o.ratio = m, o.equalDelta = g;
      var T = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta) {
        var C = (T.left ? 1 : -1) * (T.top ? 1 : -1);
        o.edgeSign = { x: C, y: C };
      } else
        o.edgeSign = { x: T.left ? -1 : 1, y: T.top ? -1 : 1 };
      if ((0, W.default)(n.edges, T), x && x.length) {
        var P = new bn.default(n.interaction);
        P.copyFrom(n.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(Rs({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, W.default)({}, s), m = o.equalDelta ? _f : Rf;
      if (m(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var E = (0, W.default)({}, a);
      (0, ue.addEdges)(o.linkedEdges, E, { x: s.x - p.x, y: s.y - p.y });
      var g = o.subModification.setAll(Rs(Rs({}, n), {}, { rect: E, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: E })), x = g.delta;
      return g.changed && (m(o, Math.abs(x.x) > Math.abs(x.y), g.coords, g.rect), (0, W.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function _f(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p.y : a.x = s.x + (a.y - s.y) * p.x;
    }
    __name(_f, "_f");
    u(_f, "Br");
    function Rf(n, o, a, s) {
      var p = n.startRect, m = n.startCoords, E = n.ratio, g = n.edgeSign;
      if (o) {
        var x = s.width / E;
        a.y = m.y + (x - p.height) * g.y;
      } else {
        var T = s.height * E;
        a.x = m.x + (T - p.width) * g.x;
      }
    }
    __name(Rf, "Rf");
    u(Rf, "Yr"), ei.aspectRatio = Gu;
    var kf = (0, vt.makeModifier)(Gu, "aspectRatio");
    ei.default = kf;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = void 0;
    var Lu = u(function() {
    }, "Ur");
    Lu._defaults = {};
    var Df = Lu;
    xn.default = Df;
    var ks = {};
    Object.defineProperty(ks, "__esModule", { value: true }), Object.defineProperty(ks, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Pt = {};
    function Ds(n, o, a) {
      return c.default.func(n) ? ue.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ue.resolveRectLike(n, o.interactable, o.element);
    }
    __name(Ds, "Ds");
    u(Ds, "Gr"), Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0, Pt.getRestrictionRect = Ds, Pt.restrict = void 0;
    var ju = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, m = n.pageCoords, E = s.options, g = E.elementRect, x = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && g) {
        var T = Ds(E.restriction, p, m);
        if (T) {
          var C = T.right - T.left - o.width, P = T.bottom - T.top - o.height;
          C < 0 && (x.left += C, x.right += C), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += a.left - o.width * g.left, x.top += a.top - o.height * g.top, x.right += a.right - o.width * (1 - g.right), x.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = x;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, m = s.offset, E = Ds(p.restriction, a, o);
      if (E) {
        var g = ue.xywhToTlbr(E);
        o.x = Math.max(Math.min(g.right - m.right, o.x), g.left + m.left), o.y = Math.max(Math.min(g.bottom - m.bottom, o.y), g.top + m.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Pt.restrict = ju;
    var Nf = (0, vt.makeModifier)(ju, "restrict");
    Pt.default = Nf;
    var xr = {};
    Object.defineProperty(xr, "__esModule", { value: true }), xr.restrictEdges = xr.default = void 0;
    var Hu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Bu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function qu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(qu, "qu");
    u(qu, "Qr");
    var $u = { noInner: Hu, noOuter: Bu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, m = p.options;
      if (m) {
        var E = (0, Pt.getRestrictionRect)(m.offset, a, a.coords.start.page);
        o = ue.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, m = p.offset, E = p.options;
      if (a) {
        var g = (0, W.default)({}, o), x = (0, Pt.getRestrictionRect)(E.inner, s, g) || {}, T = (0, Pt.getRestrictionRect)(E.outer, s, g) || {};
        qu(x, Hu), qu(T, Bu), a.top ? o.y = Math.min(Math.max(T.top + m.top, g.y), x.top + m.top) : a.bottom && (o.y = Math.max(Math.min(T.bottom + m.bottom, g.y), x.bottom + m.bottom)), a.left ? o.x = Math.min(Math.max(T.left + m.left, g.x), x.left + m.left) : a.right && (o.x = Math.max(Math.min(T.right + m.right, g.x), x.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    xr.restrictEdges = $u;
    var Gf = (0, vt.makeModifier)($u, "restrictEdges");
    xr.default = Gf;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictRect = ti.default = void 0;
    var Lf = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Pt.restrict.defaults), Fu = { start: Pt.restrict.start, set: Pt.restrict.set, defaults: Lf };
    ti.restrictRect = Fu;
    var jf = (0, vt.makeModifier)(Fu, "restrictRect");
    ti.default = jf;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.restrictSize = ri.default = void 0;
    var Hf = { width: -1 / 0, height: -1 / 0 }, Bf = { width: 1 / 0, height: 1 / 0 }, Wu = { start: function(n) {
      return xr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, m = a.options;
      if (p) {
        var E = ue.tlbrToXywh((0, Pt.getRestrictionRect)(m.min, o, n.coords)) || Hf, g = ue.tlbrToXywh((0, Pt.getRestrictionRect)(m.max, o, n.coords)) || Bf;
        a.options = { endOnly: m.endOnly, inner: (0, W.default)({}, xr.restrictEdges.noInner), outer: (0, W.default)({}, xr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - E.height, a.options.outer.top = s.bottom - g.height) : p.bottom && (a.options.inner.bottom = s.top + E.height, a.options.outer.bottom = s.top + g.height), p.left ? (a.options.inner.left = s.right - E.width, a.options.outer.left = s.right - g.width) : p.right && (a.options.inner.right = s.left + E.width, a.options.outer.right = s.left + g.width), xr.restrictEdges.set(n), a.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ri.restrictSize = Wu;
    var qf = (0, vt.makeModifier)(Wu, "restrictSize");
    ri.default = qf;
    var Ns = {};
    Object.defineProperty(Ns, "__esModule", { value: true }), Object.defineProperty(Ns, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.snap = Jr.default = void 0;
    var Uu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, m = n.rect, E = n.state, g = n.startOffset, x = E.options, T = x.offsetWithOrigin ? function(D) {
        var G = D.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(D.state.options.origin, null, null, [G])) || (0, je.default)(D.interactable, G, D.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var C = (0, ue.resolveRectLike)(x.offset, s, p, [a]);
        (o = (0, ue.rectToXY)(C) || { x: 0, y: 0 }).x += T.x, o.y += T.y;
      }
      var P = x.relativePoints;
      E.offsets = m && P && P.length ? P.map(function(D, G) {
        return { index: G, relativePoint: D, x: g.left - m.width * D.x + o.x, y: g.top - m.height * D.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, m = s.offsets, E = (0, je.default)(o.interactable, o.element, o.prepared.name), g = (0, W.default)({}, a), x = [];
      p.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var T = 0; T < m.length; T++)
        for (var C = m[T], P = g.x - C.x, D = g.y - C.y, G = 0, R = p.targets.length; G < R; G++) {
          var B, X = p.targets[G];
          (B = c.default.func(X) ? X(P, D, o._proxy, C, G) : X) && x.push({ x: (c.default.number(B.x) ? B.x : P) + C.x, y: (c.default.number(B.y) ? B.y : D) + C.y, range: c.default.number(B.range) ? B.range : p.range, source: X, index: G, offset: C });
        }
      for (var q = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < x.length; re++) {
        var oe = x[re], pe = oe.range, Pe = oe.x - g.x, He = oe.y - g.y, ge = (0, rt.default)(Pe, He), Ge = ge <= pe;
        pe === 1 / 0 && q.inRange && q.range !== 1 / 0 && (Ge = false), q.target && !(Ge ? q.inRange && pe !== 1 / 0 ? ge / pe < q.distance / q.range : pe === 1 / 0 && q.range !== 1 / 0 || ge < q.distance : !q.inRange && ge < q.distance) || (q.target = oe, q.distance = ge, q.range = pe, q.inRange = Ge, q.delta.x = Pe, q.delta.y = He);
      }
      return q.inRange && (a.x = q.target.x, a.y = q.target.y), s.closest = q, q;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Jr.snap = Uu;
    var $f = (0, vt.makeModifier)(Uu, "snap");
    Jr.default = $f;
    var Nr = {};
    function Vu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Vu, "Vu");
    u(Vu, "yo"), Object.defineProperty(Nr, "__esModule", { value: true }), Nr.snapSize = Nr.default = void 0;
    var Yu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Jr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, m = n.coords, E = p.options, g = p.offsets, x = { x: m.x - g[0].x, y: m.y - g[0].y };
      p.options = (0, W.default)({}, E), p.options.targets = [];
      for (var T = 0; T < (E.targets || []).length; T++) {
        var C = (E.targets || [])[T], P = void 0;
        if (P = c.default.func(C) ? C(x.x, x.y, s) : C) {
          for (var D = 0; D < p.targetFields.length; D++) {
            var G = (o = p.targetFields[D], a = 2, function(q) {
              if (Array.isArray(q))
                return q;
            }(o) || function(q, re) {
              var oe = q == null ? null : typeof Symbol != "undefined" && q[Symbol.iterator] || q["@@iterator"];
              if (oe != null) {
                var pe, Pe, He = [], ge = true, Ge = false;
                try {
                  for (oe = oe.call(q); !(ge = (pe = oe.next()).done) && (He.push(pe.value), !re || He.length !== re); ge = true)
                    ;
                } catch (Xt) {
                  Ge = true, Pe = Xt;
                } finally {
                  try {
                    ge || oe.return == null || oe.return();
                  } finally {
                    if (Ge)
                      throw Pe;
                  }
                }
                return He;
              }
            }(o, a) || function(q, re) {
              if (q) {
                if (typeof q == "string")
                  return Vu(q, re);
                var oe = Object.prototype.toString.call(q).slice(8, -1);
                return oe === "Object" && q.constructor && (oe = q.constructor.name), oe === "Map" || oe === "Set" ? Array.from(q) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Vu(q, re) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = G[0], B = G[1];
            if (R in P || B in P) {
              P.x = P[R], P.y = P[B];
              break;
            }
          }
          p.options.targets.push(P);
        }
      }
      var X = Jr.snap.set(n);
      return p.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Nr.snapSize = Yu;
    var Ff = (0, vt.makeModifier)(Yu, "snapSize");
    Nr.default = Ff;
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.snapEdges = ni.default = void 0;
    var Xu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Nr.snapSize.start(n)) : null;
    }, set: Nr.snapSize.set, defaults: (0, W.default)((0, gn.default)(Nr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ni.snapEdges = Xu;
    var Wf = (0, vt.makeModifier)(Xu, "snapEdges");
    ni.default = Wf;
    var Gs = {};
    Object.defineProperty(Gs, "__esModule", { value: true }), Object.defineProperty(Gs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Ls = {};
    Object.defineProperty(Ls, "__esModule", { value: true }), Object.defineProperty(Ls, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var ii = {};
    Object.defineProperty(ii, "__esModule", { value: true }), ii.default = void 0;
    var Uf = { aspectRatio: ei.default, restrictEdges: xr.default, restrict: Pt.default, restrictRect: ti.default, restrictSize: ri.default, snapEdges: ni.default, snap: Jr.default, snapSize: Nr.default, spring: Gs.default, avoid: ks.default, transform: Ls.default, rubberband: Ns.default };
    ii.default = Uf;
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Vf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(vt.default), n.usePlugin(na.default), o.modifiers = ii.default, ii.default) {
        var s = ii.default[a], p = s._defaults, m = s._methods;
        p._methods = m, n.defaults.perAction[a] = p;
      }
    } }, Yf = Vf;
    ia.default = Yf;
    var En = {};
    function js(n) {
      return js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, js(n);
    }
    __name(js, "js");
    u(js, "Io");
    function Xf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Xf, "Xf");
    u(Xf, "Do");
    function Hs(n, o) {
      return Hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Hs(n, o);
    }
    __name(Hs, "Hs");
    u(Hs, "Ao");
    function Zf(n, o) {
      if (o && (js(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Bs(n);
    }
    __name(Zf, "Zf");
    u(Zf, "zo");
    function Bs(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Bs, "Bs");
    u(Bs, "Co");
    function oa(n) {
      return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, oa(n);
    }
    __name(oa, "oa");
    u(oa, "Ro"), Object.defineProperty(En, "__esModule", { value: true }), En.default = En.PointerEvent = void 0;
    var Qf = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Hs(g, x);
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
        var g, x = oa(s);
        if (p) {
          var T = oa(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return Zf(this, g);
      });
      function E(g, x, T, C, P, D) {
        var G;
        if (function(X, q) {
          if (!(X instanceof q))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = m.call(this, P), J.pointerExtend(Bs(G), T), T !== x && J.pointerExtend(Bs(G), x), G.timeStamp = D, G.originalEvent = T, G.type = g, G.pointerId = J.getPointerId(x), G.pointerType = J.getPointerType(x), G.target = C, G.currentTarget = null, g === "tap") {
          var R = P.getPointerIndex(x);
          G.dt = G.timeStamp - P.pointers[R].downTime;
          var B = G.timeStamp - P.tapTime;
          G.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === G.target && B < 500;
        } else
          g === "doubletap" && (G.dt = x.timeStamp - P.tapTime, G.double = true);
        return G;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "_subtractOrigin", value: function(g) {
        var x = g.x, T = g.y;
        return this.pageX -= x, this.pageY -= T, this.clientX -= x, this.clientY -= T, this;
      } }, { key: "_addOrigin", value: function(g) {
        var x = g.x, T = g.y;
        return this.pageX += x, this.pageY += T, this.clientX += x, this.clientY += T, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Xf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    En.PointerEvent = En.default = Qf;
    var Hi = {};
    Object.defineProperty(Hi, "__esModule", { value: true }), Hi.default = void 0;
    var aa = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = aa, n.defaults.actions.pointerEvents = aa.defaults, (0, W.default)(n.actions.phaselessTypes, aa.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && qs(n), Kr({ interaction: a, pointer: s, event: p, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget, x = a.pointerIndex, T = p.pointers[x].hold, C = z.getPath(g), P = { interaction: p, pointer: m, event: E, eventTarget: g, type: "hold", targets: [], path: C, node: null }, D = 0; D < C.length; D++) {
          var G = C[D];
          P.node = G, s.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, B = 0; B < P.targets.length; B++) {
            var X = P.targets[B].eventable.options.holdDuration;
            X < R && (R = X);
          }
          T.duration = R, T.timeout = setTimeout(function() {
            Kr({ interaction: p, eventTarget: g, pointer: m, event: E, type: "hold" }, s);
          }, R);
        }
      })(n, o), Kr(n, o);
    }, "interactions:up": function(n, o) {
      qs(n), Kr(n, o), function(a, s) {
        var p = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerWasMoved || Kr({ interaction: p, eventTarget: g, pointer: m, event: E, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      qs(n), Kr(n, o);
    } }, PointerEvent: En.PointerEvent, fire: Kr, collectEventTargets: Zu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Kr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget, E = n.type, g = n.targets, x = g === void 0 ? Zu(n, o) : g, T = new En.PointerEvent(E, s, p, m, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: T });
      for (var C = { interaction: a, pointer: s, event: p, eventTarget: m, targets: x, type: E, pointerEvent: T }, P = 0; P < x.length; P++) {
        var D = x[P];
        for (var G in D.props || {})
          T[G] = D.props[G];
        var R = (0, je.default)(D.eventable, D.node);
        if (T._subtractOrigin(R), T.eventable = D.eventable, T.currentTarget = D.node, D.eventable.fire(T), T._addOrigin(R), T.immediatePropagationStopped || T.propagationStopped && P + 1 < x.length && x[P + 1].node !== T.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", C), E === "tap") {
        var B = T.double ? Kr({ interaction: a, pointer: s, event: p, eventTarget: m, type: "doubletap" }, o) : T;
        a.prevTap = B, a.tapTime = B.timeStamp;
      }
      return T;
    }
    __name(Kr, "Kr");
    u(Kr, "Yo");
    function Zu(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, m = n.eventTarget, E = n.type, g = a.getPointerIndex(s), x = a.pointers[g];
      if (E === "tap" && (a.pointerWasMoved || !x || x.downTarget !== m))
        return [];
      for (var T = z.getPath(m), C = { interaction: a, pointer: s, event: p, eventTarget: m, type: E, path: T, targets: [], node: null }, P = 0; P < T.length; P++) {
        var D = T[P];
        C.node = D, o.fire("pointerEvents:collect-targets", C);
      }
      return E === "hold" && (C.targets = C.targets.filter(function(G) {
        var R;
        return G.eventable.options.holdDuration === ((R = a.pointers[g]) == null ? void 0 : R.hold.duration);
      })), C.targets;
    }
    __name(Zu, "Zu");
    u(Zu, "Wo");
    function qs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(qs, "qs");
    u(qs, "Lo");
    var Jf = aa;
    Hi.default = Jf;
    var sa = {};
    function Kf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Kf, "Kf");
    u(Kf, "No"), Object.defineProperty(sa, "__esModule", { value: true }), sa.default = void 0;
    var eh = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Hi.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Kf, n;
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
    } }) }, th = eh;
    sa.default = th;
    var la = {};
    function rh(n) {
      return (0, W.default)(this.events.options, n), this;
    }
    __name(rh, "rh");
    u(rh, "Ho"), Object.defineProperty(la, "__esModule", { value: true }), la.default = void 0;
    var nh = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = rh;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var m = a.call(this, s, p);
        return m === this && (this.events.options[s] = p), m;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, m = n.eventTarget;
      o.interactables.forEachMatch(s, function(E) {
        var g = E.events, x = g.options;
        g.types[p] && g.types[p].length && E.testIgnoreAllow(x, s, m) && a.push({ node: s, eventable: g, props: { interactable: E } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, W.default)(a.events.options, o.pointerEvents.defaults), (0, W.default)(a.events.options, s.pointerEvents || {});
    } } }, ih = nh;
    la.default = ih;
    var ua = {};
    Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var oh = { id: "pointer-events", install: function(n) {
      n.usePlugin(Hi), n.usePlugin(sa.default), n.usePlugin(la.default);
    } }, ah = oh;
    ua.default = ah;
    var Bi = {};
    function Qu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, m) {
          for (var E = c.default.string(s.target) ? Oe.from(s._context.querySelectorAll(s.target)) : [s.target], g = m.window.Promise, x = g ? [] : null, T = function() {
            var P = E[C], D = s.getRect(P);
            if (!D)
              return "break";
            var G = Oe.find(m.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === P && re.prepared.name === p.name;
            }), R = void 0;
            if (G)
              G.move(), x && (R = G._reflowPromise || new g(function(re) {
                G._reflowResolve = re;
              }));
            else {
              var B = (0, ue.tlbrToXywh)(D), X = { page: { x: B.x, y: B.y }, client: { x: B.x, y: B.y }, timeStamp: m.now() }, q = J.coordsToEvent(X);
              R = function(re, oe, pe, Pe, He) {
                var ge = re.interactions.new({ pointerType: "reflow" }), Ge = { interaction: ge, event: He, pointer: He, eventTarget: pe, phase: "reflow" };
                ge.interactable = oe, ge.element = pe, ge.prevEvent = He, ge.updatePointer(He, He, pe, true), J.setZeroCoords(ge.coords.delta), (0, jt.copyAction)(ge.prepared, Pe), ge._doPhase(Ge);
                var Xt = re.window.Promise, Gr = Xt ? new Xt(function(Ws) {
                  ge._reflowResolve = Ws;
                }) : void 0;
                return ge._reflowPromise = Gr, ge.start(Pe, oe, pe), ge._interacting ? (ge.move(Ge), ge.end(He)) : (ge.stop(), ge._reflowResolve()), ge.removePointer(He, He), Gr;
              }(m, s, P, p, q);
            }
            x && x.push(R);
          }, C = 0; C < E.length && T() !== "break"; C++)
            ;
          return x && g.all(x).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Qu, "Qu");
    u(Qu, "ni"), Object.defineProperty(Bi, "__esModule", { value: true }), Bi.default = void 0, Bi.install = Qu;
    var sh = { id: "reflow", install: Qu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), Oe.remove(o.interactions.list, a));
    } } }, lh = sh;
    Bi.default = lh;
    var Yt = { exports: {} };
    function $s(n) {
      return $s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, $s(n);
    }
    __name($s, "$s");
    u($s, "ai"), Object.defineProperty(Yt.exports, "__esModule", { value: true }), Yt.exports.default = void 0, nt.default.use(Jn.default), nt.default.use(wn.default), nt.default.use(ua.default), nt.default.use(Kn.default), nt.default.use(ia.default), nt.default.use(Ho.default), nt.default.use(Vt.default), nt.default.use(Zr.default), nt.default.use(Bi.default);
    var uh = nt.default;
    if (Yt.exports.default = uh, $s(Yt) === "object" && Yt)
      try {
        Yt.exports = nt.default;
      } catch (n) {
      }
    nt.default.default = nt.default, Yt = Yt.exports;
    var Sn = { exports: {} };
    function Fs(n) {
      return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Fs(n);
    }
    __name(Fs, "Fs");
    u(Fs, "ui"), Object.defineProperty(Sn.exports, "__esModule", { value: true }), Sn.exports.default = void 0;
    var ch = Yt.default;
    if (Sn.exports.default = ch, Fs(Sn) === "object" && Sn)
      try {
        Sn.exports = Yt.default;
      } catch (n) {
      }
    return Yt.default.default = Yt.default, Sn.exports;
  });
});
var yd = ca((bd, eu) => {
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
      for (var v; v = d.shift(); )
        v();
    }, measure: function(d, v) {
      e("measure");
      var w = v ? d.bind(v) : d;
      return this.reads.push(w), l(this), w;
    }, mutate: function(d, v) {
      e("mutate");
      var w = v ? d.bind(v) : d;
      return this.writes.push(w), l(this), w;
    }, clear: function(d) {
      return e("clear", d), f(this.reads, d) || f(this.writes, d);
    }, extend: function(d) {
      if (e("extend", d), typeof d != "object")
        throw new Error("expected object");
      var v = Object.create(this);
      return b(v, d), v.fastdom = this, v.initialize && v.initialize(), v;
    }, catch: null };
    function l(d) {
      d.scheduled || (d.scheduled = true, d.raf(c.bind(null, d)), e("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(d) {
      e("flush");
      var v = d.writes, w = d.reads, y;
      try {
        e("flushing reads", w.length), d.runTasks(w), e("flushing writes", v.length), d.runTasks(v);
      } catch (S) {
        y = S;
      }
      if (d.scheduled = false, (w.length || v.length) && l(d), y)
        if (e("task errored", y.message), d.catch)
          d.catch(y);
        else
          throw y;
    }
    __name(c, "c");
    u(c, "flush");
    function f(d, v) {
      var w = d.indexOf(v);
      return !!~w && !!d.splice(w, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function b(d, v) {
      for (var w in v)
        v.hasOwnProperty(w) && (d[w] = v[w]);
    }
    __name(b, "b");
    u(b, "mixin");
    var h = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return h;
    }) : typeof eu == "object" && (eu.exports = h);
  })(typeof window != "undefined" ? window : bd);
});
var Sd = ca((ru, Ed) => {
  (function(r) {
    "use strict";
    var e = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, t = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, i = u(function(d) {
      var v = Math.PI / 4;
      if (-v > d || d > v)
        return Math.cos(d) - 1;
      var w = d * d;
      return w * (w * (w * (w * (w * (w * (w * (w / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(d, v) {
      var w = Math.abs(d), y = Math.abs(v);
      return w < 3e3 && y < 3e3 ? Math.sqrt(w * w + y * y) : (w < y ? (w = y, y = d / v) : y = v / d, w * Math.sqrt(1 + y * y));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(d, v) {
      var w = Math.abs(d), y = Math.abs(v);
      return d === 0 ? Math.log(y) : v === 0 ? Math.log(w) : w < 3e3 && y < 3e3 ? Math.log(d * d + v * v) * 0.5 : (d = d / 2, v = v / 2, 0.5 * Math.log(d * d + v * v) + Math.LN2);
    }
    __name(f, "f");
    u(f, "logHypot");
    var b = u(function(d, v) {
      var w = { re: 0, im: 0 };
      if (d == null)
        w.re = w.im = 0;
      else if (v !== void 0)
        w.re = d, w.im = v;
      else
        switch (typeof d) {
          case "object":
            if ("im" in d && "re" in d)
              w.re = d.re, w.im = d.im;
            else if ("abs" in d && "arg" in d) {
              if (!Number.isFinite(d.abs) && Number.isFinite(d.arg))
                return h.INFINITY;
              w.re = d.abs * Math.cos(d.arg), w.im = d.abs * Math.sin(d.arg);
            } else if ("r" in d && "phi" in d) {
              if (!Number.isFinite(d.r) && Number.isFinite(d.phi))
                return h.INFINITY;
              w.re = d.r * Math.cos(d.phi), w.im = d.r * Math.sin(d.phi);
            } else
              d.length === 2 ? (w.re = d[0], w.im = d[1]) : c();
            break;
          case "string":
            w.im = w.re = 0;
            var y = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, O = 0;
            y === null && c();
            for (var M = 0; M < y.length; M++) {
              var _ = y[M];
              _ === " " || _ === "	" || _ === `
` || (_ === "+" ? S++ : _ === "-" ? O++ : _ === "i" || _ === "I" ? (S + O === 0 && c(), y[M + 1] !== " " && !isNaN(y[M + 1]) ? (w.im += parseFloat((O % 2 ? "-" : "") + y[M + 1]), M++) : w.im += parseFloat((O % 2 ? "-" : "") + "1"), S = O = 0) : ((S + O === 0 || isNaN(_)) && c(), y[M + 1] === "i" || y[M + 1] === "I" ? (w.im += parseFloat((O % 2 ? "-" : "") + _), M++) : w.re += parseFloat((O % 2 ? "-" : "") + _), S = O = 0));
            }
            S + O > 0 && c();
            break;
          case "number":
            w.im = 0, w.re = d;
            break;
          default:
            c();
        }
      return isNaN(w.re) || isNaN(w.im), w;
    }, "parse");
    function h(d, v) {
      if (!(this instanceof h))
        return new h(d, v);
      var w = b(d, v);
      this.re = w.re, this.im = w.im;
    }
    __name(h, "h");
    u(h, "Complex"), h.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new h(this.re / d, this.im / d);
    }, add: function(d, v) {
      var w = new h(d, v);
      return this.isInfinite() && w.isInfinite() ? h.NAN : this.isInfinite() || w.isInfinite() ? h.INFINITY : new h(this.re + w.re, this.im + w.im);
    }, sub: function(d, v) {
      var w = new h(d, v);
      return this.isInfinite() && w.isInfinite() ? h.NAN : this.isInfinite() || w.isInfinite() ? h.INFINITY : new h(this.re - w.re, this.im - w.im);
    }, mul: function(d, v) {
      var w = new h(d, v);
      return this.isInfinite() && w.isZero() || this.isZero() && w.isInfinite() ? h.NAN : this.isInfinite() || w.isInfinite() ? h.INFINITY : w.im === 0 && this.im === 0 ? new h(this.re * w.re, 0) : new h(this.re * w.re - this.im * w.im, this.re * w.im + this.im * w.re);
    }, div: function(d, v) {
      var w = new h(d, v);
      if (this.isZero() && w.isZero() || this.isInfinite() && w.isInfinite())
        return h.NAN;
      if (this.isInfinite() || w.isZero())
        return h.INFINITY;
      if (this.isZero() || w.isInfinite())
        return h.ZERO;
      d = this.re, v = this.im;
      var y = w.re, S = w.im, O, M;
      return S === 0 ? new h(d / y, v / y) : Math.abs(y) < Math.abs(S) ? (M = y / S, O = y * M + S, new h((d * M + v) / O, (v * M - d) / O)) : (M = S / y, O = S * M + y, new h((d + v * M) / O, (v - d * M) / O));
    }, pow: function(d, v) {
      var w = new h(d, v);
      if (d = this.re, v = this.im, w.isZero())
        return h.ONE;
      if (w.im === 0) {
        if (v === 0 && d > 0)
          return new h(Math.pow(d, w.re), 0);
        if (d === 0)
          switch ((w.re % 4 + 4) % 4) {
            case 0:
              return new h(Math.pow(v, w.re), 0);
            case 1:
              return new h(0, Math.pow(v, w.re));
            case 2:
              return new h(-Math.pow(v, w.re), 0);
            case 3:
              return new h(0, -Math.pow(v, w.re));
          }
      }
      if (d === 0 && v === 0 && w.re > 0 && w.im >= 0)
        return h.ZERO;
      var y = Math.atan2(v, d), S = f(d, v);
      return d = Math.exp(w.re * S - w.im * y), v = w.im * S + w.re * y, new h(d * Math.cos(v), d * Math.sin(v));
    }, sqrt: function() {
      var d = this.re, v = this.im, w = this.abs(), y, S;
      if (d >= 0) {
        if (v === 0)
          return new h(Math.sqrt(d), 0);
        y = 0.5 * Math.sqrt(2 * (w + d));
      } else
        y = Math.abs(v) / Math.sqrt(2 * (w - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (w - d)) : S = Math.abs(v) / Math.sqrt(2 * (w + d)), new h(y, v < 0 ? -S : S);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im === 0, new h(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, v = this.im;
      return new h(Math.expm1(d) * Math.cos(v) + i(v), Math.exp(d) * Math.sin(v));
    }, log: function() {
      var d = this.re, v = this.im;
      return v === 0 && d > 0, new h(f(d, v), Math.atan2(v, d));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, v = this.im;
      return new h(Math.sin(d) * e(v), Math.cos(d) * t(v));
    }, cos: function() {
      var d = this.re, v = this.im;
      return new h(Math.cos(d) * e(v), -Math.sin(d) * t(v));
    }, tan: function() {
      var d = 2 * this.re, v = 2 * this.im, w = Math.cos(d) + e(v);
      return new h(Math.sin(d) / w, t(v) / w);
    }, cot: function() {
      var d = 2 * this.re, v = 2 * this.im, w = Math.cos(d) - e(v);
      return new h(-Math.sin(d) / w, t(v) / w);
    }, sec: function() {
      var d = this.re, v = this.im, w = 0.5 * e(2 * v) + 0.5 * Math.cos(2 * d);
      return new h(Math.cos(d) * e(v) / w, Math.sin(d) * t(v) / w);
    }, csc: function() {
      var d = this.re, v = this.im, w = 0.5 * e(2 * v) - 0.5 * Math.cos(2 * d);
      return new h(Math.sin(d) * e(v) / w, -Math.cos(d) * t(v) / w);
    }, asin: function() {
      var d = this.re, v = this.im, w = new h(v * v - d * d + 1, -2 * d * v).sqrt(), y = new h(w.re - v, w.im + d).log();
      return new h(y.im, -y.re);
    }, acos: function() {
      var d = this.re, v = this.im, w = new h(v * v - d * d + 1, -2 * d * v).sqrt(), y = new h(w.re - v, w.im + d).log();
      return new h(Math.PI / 2 - y.im, y.re);
    }, atan: function() {
      var d = this.re, v = this.im;
      if (d === 0) {
        if (v === 1)
          return new h(0, 1 / 0);
        if (v === -1)
          return new h(0, -1 / 0);
      }
      var w = d * d + (1 - v) * (1 - v), y = new h((1 - v * v - d * d) / w, -2 * d / w).log();
      return new h(-0.5 * y.im, 0.5 * y.re);
    }, acot: function() {
      var d = this.re, v = this.im;
      if (v === 0)
        return new h(Math.atan2(1, d), 0);
      var w = d * d + v * v;
      return w !== 0 ? new h(d / w, -v / w).atan() : new h(d !== 0 ? d / 0 : 0, v !== 0 ? -v / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, v = this.im;
      if (d === 0 && v === 0)
        return new h(0, 1 / 0);
      var w = d * d + v * v;
      return w !== 0 ? new h(d / w, -v / w).acos() : new h(d !== 0 ? d / 0 : 0, v !== 0 ? -v / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, v = this.im;
      if (d === 0 && v === 0)
        return new h(Math.PI / 2, 1 / 0);
      var w = d * d + v * v;
      return w !== 0 ? new h(d / w, -v / w).asin() : new h(d !== 0 ? d / 0 : 0, v !== 0 ? -v / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, v = this.im;
      return new h(t(d) * Math.cos(v), e(d) * Math.sin(v));
    }, cosh: function() {
      var d = this.re, v = this.im;
      return new h(e(d) * Math.cos(v), t(d) * Math.sin(v));
    }, tanh: function() {
      var d = 2 * this.re, v = 2 * this.im, w = e(d) + Math.cos(v);
      return new h(t(d) / w, Math.sin(v) / w);
    }, coth: function() {
      var d = 2 * this.re, v = 2 * this.im, w = e(d) - Math.cos(v);
      return new h(t(d) / w, -Math.sin(v) / w);
    }, csch: function() {
      var d = this.re, v = this.im, w = Math.cos(2 * v) - e(2 * d);
      return new h(-2 * t(d) * Math.cos(v) / w, 2 * e(d) * Math.sin(v) / w);
    }, sech: function() {
      var d = this.re, v = this.im, w = Math.cos(2 * v) + e(2 * d);
      return new h(2 * e(d) * Math.cos(v) / w, -2 * t(d) * Math.sin(v) / w);
    }, asinh: function() {
      var d = this.im;
      this.im = -this.re, this.re = d;
      var v = this.asin();
      return this.re = -this.im, this.im = d, d = v.re, v.re = -v.im, v.im = d, v;
    }, acosh: function() {
      var d = this.acos();
      if (d.im <= 0) {
        var v = d.re;
        d.re = -d.im, d.im = v;
      } else {
        var v = d.im;
        d.im = -d.re, d.re = v;
      }
      return d;
    }, atanh: function() {
      var d = this.re, v = this.im, w = d > 1 && v === 0, y = 1 - d, S = 1 + d, O = y * y + v * v, M = O !== 0 ? new h((S * y - v * v) / O, (v * y + S * v) / O) : new h(d !== -1 ? d / 0 : 0, v !== 0 ? v / 0 : 0), _ = M.re;
      return M.re = f(M.re, M.im) / 2, M.im = Math.atan2(M.im, _) / 2, w && (M.im = -M.im), M;
    }, acoth: function() {
      var d = this.re, v = this.im;
      if (d === 0 && v === 0)
        return new h(0, Math.PI / 2);
      var w = d * d + v * v;
      return w !== 0 ? new h(d / w, -v / w).atanh() : new h(d !== 0 ? d / 0 : 0, v !== 0 ? -v / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, v = this.im;
      if (v === 0)
        return new h(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var w = d * d + v * v;
      return w !== 0 ? new h(d / w, -v / w).asinh() : new h(d !== 0 ? d / 0 : 0, v !== 0 ? -v / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, v = this.im;
      if (this.isZero())
        return h.INFINITY;
      var w = d * d + v * v;
      return w !== 0 ? new h(d / w, -v / w).acosh() : new h(d !== 0 ? d / 0 : 0, v !== 0 ? -v / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return h.INFINITY;
      if (this.isInfinite())
        return h.ZERO;
      var d = this.re, v = this.im, w = d * d + v * v;
      return new h(d / w, -v / w);
    }, conjugate: function() {
      return new h(this.re, -this.im);
    }, neg: function() {
      return new h(-this.re, -this.im);
    }, ceil: function(d) {
      return d = Math.pow(10, d || 0), new h(Math.ceil(this.re * d) / d, Math.ceil(this.im * d) / d);
    }, floor: function(d) {
      return d = Math.pow(10, d || 0), new h(Math.floor(this.re * d) / d, Math.floor(this.im * d) / d);
    }, round: function(d) {
      return d = Math.pow(10, d || 0), new h(Math.round(this.re * d) / d, Math.round(this.im * d) / d);
    }, equals: function(d, v) {
      var w = new h(d, v);
      return Math.abs(w.re - this.re) <= h.EPSILON && Math.abs(w.im - this.im) <= h.EPSILON;
    }, clone: function() {
      return new h(this.re, this.im);
    }, toString: function() {
      var d = this.re, v = this.im, w = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < h.EPSILON && (d = 0), Math.abs(v) < h.EPSILON && (v = 0), v === 0 ? w + d : (d !== 0 ? (w += d, w += " ", v < 0 ? (v = -v, w += "-") : w += "+", w += " ") : v < 0 && (v = -v, w += "-"), v !== 1 && (w += v), w + "i"));
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
    } }, h.ZERO = new h(0, 0), h.ONE = new h(1, 0), h.I = new h(0, 1), h.PI = new h(Math.PI, 0), h.E = new h(Math.E, 0), h.INFINITY = new h(1 / 0, 1 / 0), h.NAN = new h(NaN, NaN), h.EPSILON = 1e-15, typeof define == "function" && define.amd ? define([], function() {
      return h;
    }) : typeof ru == "object" ? (Object.defineProperty(h, "__esModule", { value: true }), h.default = h, h.Complex = h, Ed.exports = h) : r.Complex = h;
  })(ru);
});
var tn = Tn(tc());
function rc(r) {
  let e = rn(r);
  return new tn.default(e).valueOf() * Math.PI;
}
__name(rc, "rc");
u(rc, "K");
function Fi(r) {
  let e = rn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(Fi, "Fi");
u(Fi, "V");
function nc(r, e) {
  return new tn.default(rn(r)).valueOf() < new tn.default(rn(e)).valueOf();
}
__name(nc, "nc");
u(nc, "Y");
function ic(r, e) {
  return new tn.default(rn(r)).valueOf() > new tn.default(rn(e)).valueOf();
}
__name(ic, "ic");
u(ic, "W");
function oc(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = rn(r);
    return new tn.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(oc, "oc");
u(oc, "H");
function rn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(rn, "rn");
u(rn, "l");
function ac(r) {
  try {
    let e = rn(r), t = new tn.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(ac, "ac");
u(ac, "J");
var gh = Object.prototype.toString.call({});
var bh = "!recursion-limit!";
var yh = 10;
function Xe(r, e = yh) {
  return wh(r) || xh(r, e) || Eh(r, e);
}
__name(Xe, "Xe");
u(Xe, "c");
function wh(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(wh, "wh");
u(wh, "G");
function xh(r, e) {
  if (e === 0)
    return bh;
  if (r instanceof Map)
    return Sh(r, e);
  if (r instanceof Set)
    return Th(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Ch(r, e);
}
__name(xh, "xh");
u(xh, "F");
function Eh(r, e) {
  let t = String(r);
  return t !== gh ? t : Oh(r, e);
}
__name(Eh, "Eh");
u(Eh, "M");
function Sh(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = Xe(i, e - 1), f = Xe(l, e - 1);
    t.push(`${c}: ${f}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(Sh, "Sh");
u(Sh, "O");
function Th(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Xe(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
__name(Th, "Th");
u(Th, "R");
function Ch(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Xe(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
__name(Ch, "Ch");
u(Ch, "D");
function Oh(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], f = Xe(l, e - 1), b = Xe(c, e - 1);
    t.push(`${f}: ${b}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(Oh, "Oh");
u(Oh, "N");
var Vs = 0;
var it = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Vs++;
    try {
      this.details = Vs === 1 ? Xe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Vs--;
    }
  }
}, "d");
var Mh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var Ht = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -Ht.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(Ht.parseFloat(r.substr(1)));
    let e = Ht.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -Ht.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = Ht.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = Ht.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of Mh)
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
    let i = Ht.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = Ht.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var $i = Ht;
$i.CONSISTENT = new Ht(false, 0, 2, ", "), $i.EXACT = new Ht(true, 0, void 0, ", "), $i.MINIFIED = new Ht(true, 0, void 0, ","), $i.SIMPLIFIED = new Ht(true, 5e-4, 3, ", ");
var H = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    H.need(r != null, "notNull");
  }
  static snappedCosSin(r) {
    let e = Math.PI / 4, t = Math.round(r / e);
    if (t * e === r) {
      let i = Math.sqrt(0.5);
      return [[1, 0], [i, i], [0, 1], [-i, i], [-1, 0], [-i, -i], [0, -1], [i, -i]][t & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
}, "m");
var de = u(class {
  static from(r) {
    if (r instanceof de)
      return r;
    if (typeof r == "number")
      return new de(r, 0);
    throw new it("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = H.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new it("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new it("Unrecognized value type.", { v: r });
  }
  constructor(r, e) {
    this.real = r, this.imag = e;
  }
  static rootsOfQuadratic(r, e, t) {
    if (r = de.from(r), e = de.from(e), t = de.from(t), r.isEqualTo(0)) {
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
    return r instanceof de ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (r instanceof de || typeof r == "number") {
      let t = this.minus(de.from(r));
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
    return r < 1e-5 ? de.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let e = de.from(r);
    return new de(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = de.from(r);
    return new de(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = de.from(r);
    return new de(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = de.from(r), t = e.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let i = this.times(e.conjugate());
    return new de(i.real / t, i.imag / t);
  }
  sqrts() {
    let [r, e] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(r * r + e * e));
    if (t === 0)
      return [de.ZERO];
    if (e === 0 && r < 0)
      return [new de(0, t), new de(0, -t)];
    let i = this.phase() / 2, l = de.polar(t, i);
    return [l, l.times(-1)];
  }
  conjugate() {
    return new de(this.real, -this.imag);
  }
  toString(r) {
    return r = r || $i.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new de(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new de(Math.sqrt(this.real), 0) : de.ZERO.isEqualTo(r) ? de.ONE : this.isEqualTo(de.ZERO) ? de.ZERO : this.ln().times(de.from(r)).exp();
  }
  exp() {
    return de.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(de.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(de.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new de(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new de(Math.log(this.abs()), this.phase());
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
var en = de;
en.ZERO = new de(0, 0), en.ONE = new de(1, 0), en.I = new de(0, 1);
function ve(r, e = {}, t = document) {
  let i = new CustomEvent(r, { bubbles: true, cancelable: true, detail: e });
  return t.dispatchEvent(i);
}
__name(ve, "ve");
u(ve, "ue");
var Ys = "Bloch";
var Xs = "\u2022";
var ha = "H";
var va = "Measure";
var ma = "P";
var ga = "QFT";
var ba = "QFT\u2020";
var ya = "X^\xBD";
var wa = "Rx";
var xa = "Ry";
var Ea = "Rz";
var Zs = "Swap";
var Sa = "T";
var sc = "|0>";
var lc = "|1>";
var Ta = "X";
var Ca = "Y";
var Oa = "Z";
var Qs = /* @__PURE__ */ new WeakSet();
function Ks(r) {
  Qs.add(r), r.shadowRoot && el(r.shadowRoot), rl(r), tl(r.ownerDocument);
}
__name(Ks, "Ks");
u(Ks, "bind");
function el(r) {
  rl(r), tl(r);
}
__name(el, "el");
u(el, "bindShadow");
var Ma = /* @__PURE__ */ new WeakMap();
function tl(r = document) {
  if (Ma.has(r))
    return Ma.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Js(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && rl(f);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, Ma.delete(r), t.disconnect();
  } };
  return Ma.set(r, i), i;
}
__name(tl, "tl");
u(tl, "listenForBind");
function rl(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Js(e);
  r instanceof Element && r.hasAttribute("data-action") && Js(r);
}
__name(rl, "rl");
u(rl, "bindElements");
function Ih(r) {
  let e = r.currentTarget;
  for (let t of uc(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      Qs.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && Qs.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(Ih, "Ih");
u(Ih, "handleEvent");
function* uc(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(uc, "uc");
u(uc, "bindings");
function Js(r) {
  for (let e of uc(r))
    r.addEventListener(e.type, Ih);
}
__name(Js, "Js");
u(Js, "bindActions");
function nl(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(nl, "nl");
u(nl, "register");
function il(r, e) {
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
__name(il, "il");
u(il, "findTarget");
function ol(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(ol, "ol");
u(ol, "findTargets");
function xe(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return il(this, e);
  } });
}
__name(xe, "xe");
u(xe, "target");
function At(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return ol(this, e);
  } });
}
__name(At, "At");
u(At, "targets");
function al(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(al, "al");
u(al, "autoShadowRoot");
var Ia = /* @__PURE__ */ new WeakMap();
function k(r, e) {
  Ia.has(r) || Ia.set(r, []), Ia.get(r).push(e);
}
__name(k, "k");
u(k, "attr");
function sl(r, e) {
  e || (e = cc(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = pc(t), c = { configurable: true, get() {
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
__name(sl, "sl");
u(sl, "initializeAttrs");
function cc(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = Ia.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(cc, "cc");
u(cc, "getAttrNames");
function pc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(pc, "pc");
u(pc, "attrToAttributeName");
function ll(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...cc(r.prototype)].map(pc).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(ll, "ll");
u(ll, "defineObservedAttributes");
var Ph = /* @__PURE__ */ new WeakSet();
function dc(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Ph.add(r), al(r), sl(r), Ks(r), e && e.call(r), r.shadowRoot && el(r.shadowRoot);
}
__name(dc, "dc");
u(dc, "initializeInstance");
function fc(r) {
  ll(r), nl(r);
}
__name(fc, "fc");
u(fc, "initializeClass");
function ee(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    dc(this, e);
  }, fc(r);
}
__name(ee, "ee");
u(ee, "controller");
function Ee(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.active = false;
    }
    activate() {
      this.active = true, ve("activateable:active", {}, this);
    }
    deactivate() {
      this.active = false;
    }
  }
  __name(e, "e");
  return u(e, "ActivateableMixinClass"), A([k], e.prototype, "active", 2), e;
}
__name(Ee, "Ee");
u(Ee, "ActivateableMixin");
var Cn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function nn(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u(e, "AngleableMixinClass"), A([k], e.prototype, "angle", 2), A([k], e.prototype, "reducedAngle", 2), e;
}
__name(nn, "nn");
u(nn, "AngleableMixin");
var On = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function Be(r) {
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
__name(Be, "Be");
u(Be, "ControllableMixin");
function Re(r) {
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
  return u(e, "DisableableMixinClass"), A([k], e.prototype, "disabled", 2), e;
}
__name(Re, "Re");
u(Re, "DisableableMixin");
var V = u(function() {
  return V = Object.assign || u(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function oi(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(oi, "oi");
u(oi, "__rest");
function me(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(me, "me");
u(me, "__values");
function be(r, e) {
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
__name(be, "be");
u(be, "__read");
function ke(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(ke, "ke");
u(ke, "__spreadArray");
var Ae;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Ae || (Ae = {}));
var on;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(on || (on = {}));
var Wi = Ae.Start;
var ai = Ae.Stop;
var si = Ae.Raise;
var Mn = Ae.Send;
var Pa = Ae.Cancel;
var hc = Ae.NullEvent;
var ul = Ae.Assign;
var ig = Ae.After;
var og = Ae.DoneState;
var Aa = Ae.Log;
var vc = Ae.Init;
var Ui = Ae.Invoke;
var ag = Ae.ErrorExecution;
var cl = Ae.ErrorPlatform;
var pl = Ae.ErrorCustom;
var Vi = Ae.Update;
var mc = Ae.Choose;
var gc = Ae.Pure;
var za = ".";
var dl = {};
var _a = "xstate.guard";
var bc = "";
var qe = true;
var Ra;
function Xi(r, e, t) {
  t === void 0 && (t = za);
  var i = li(r, t), l = li(e, t);
  return ye(l) ? ye(i) ? l === i : false : ye(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Xi(i[c], l[c]) : false;
  });
}
__name(Xi, "Xi");
u(Xi, "matchesState");
function ka(r) {
  try {
    return ye(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(ka, "ka");
u(ka, "getEventType");
function Da(r, e) {
  try {
    return Lr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Da, "Da");
u(Da, "toStatePath");
function Ah(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Ah, "Ah");
u(Ah, "isStateLike");
function li(r, e) {
  if (Ah(r))
    return r.value;
  if (Lr(r))
    return Yi(r);
  if (typeof r != "string")
    return r;
  var t = Da(r, e);
  return Yi(t);
}
__name(li, "li");
u(li, "toStateValue");
function Yi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Yi, "Yi");
u(Yi, "pathToStateValue");
function ui(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(ui, "ui");
u(ui, "mapValues");
function fl(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = me(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, d = r[h];
      !t(d) || (c[h] = e(d, h, r));
    }
  } catch (v) {
    i = { error: v };
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
__name(fl, "fl");
u(fl, "mapFilterValues");
var yc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = me(r), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        l = l[b];
      }
    } catch (h) {
      t = { error: h };
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
function wc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var f = me(r), b = f.next(); !b.done; b = f.next()) {
        var h = b.value;
        c = c[e][h];
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
__name(wc, "wc");
u(wc, "nestedPath");
function Zi(r) {
  if (!r)
    return [[]];
  if (ye(r))
    return [[r]];
  var e = Le(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Zi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Zi, "Zi");
u(Zi, "toStatePaths");
function Le(r) {
  var e;
  return (e = []).concat.apply(e, ke([], be(r), false));
}
__name(Le, "Le");
u(Le, "flatten");
function xc(r) {
  return Lr(r) ? r : [r];
}
__name(xc, "xc");
u(xc, "toArrayStrict");
function Bt(r) {
  return r === void 0 ? [] : xc(r);
}
__name(Bt, "Bt");
u(Bt, "toArray");
function In(r, e, t) {
  var i, l;
  if (ze(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = me(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, d = r[h];
      ze(d) ? c[h] = d(e, t.data) : c[h] = d;
    }
  } catch (v) {
    i = { error: v };
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
__name(In, "In");
u(In, "mapContext");
function Ec(r) {
  return /^(done|error)\./.test(r);
}
__name(Ec, "Ec");
u(Ec, "isBuiltInEvent");
function hl(r) {
  return !!(r instanceof Promise || r !== null && (ze(r) || typeof r == "object") && ze(r.then));
}
__name(hl, "hl");
u(hl, "isPromiseLike");
function Sc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(Sc, "Sc");
u(Sc, "isBehavior");
function Na(r, e) {
  var t, i, l = be([[], []], 2), c = l[0], f = l[1];
  try {
    for (var b = me(r), h = b.next(); !h.done; h = b.next()) {
      var d = h.value;
      e(d) ? c.push(d) : f.push(d);
    }
  } catch (v) {
    t = { error: v };
  } finally {
    try {
      h && !h.done && (i = b.return) && i.call(b);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, f];
}
__name(Na, "Na");
u(Na, "partition");
function Tc(r, e) {
  return ui(r.states, function(t, i) {
    if (!!t) {
      var l = (ye(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: Tc(t, l) };
    }
  });
}
__name(Tc, "Tc");
u(Tc, "updateHistoryStates");
function Cc(r, e) {
  return { current: e, states: Tc(r, e) };
}
__name(Cc, "Cc");
u(Cc, "updateHistoryValue");
function vl(r, e, t, i) {
  qe || Ze(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var b, h, d = f.assignment, v = { state: i, action: f, _event: e }, w = {};
    if (ze(d))
      w = d(c, e.data, v);
    else
      try {
        for (var y = me(Object.keys(d)), S = y.next(); !S.done; S = y.next()) {
          var O = S.value, M = d[O];
          w[O] = ze(M) ? M(c, e.data, v) : M;
        }
      } catch (_) {
        b = { error: _ };
      } finally {
        try {
          S && !S.done && (h = y.return) && h.call(y);
        } finally {
          if (b)
            throw b.error;
        }
      }
    return Object.assign({}, c, w);
  }, r);
  return l;
}
__name(vl, "vl");
u(vl, "updateContext");
var Ze = u(function() {
}, "warn");
qe || (Ze = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function Lr(r) {
  return Array.isArray(r);
}
__name(Lr, "Lr");
u(Lr, "isArray");
function ze(r) {
  return typeof r == "function";
}
__name(ze, "ze");
u(ze, "isFunction");
function ye(r) {
  return typeof r == "string";
}
__name(ye, "ye");
u(ye, "isString");
function Ga(r, e) {
  if (!!r)
    return ye(r) ? { type: _a, name: r, predicate: e ? e[r] : void 0 } : ze(r) ? { type: _a, name: r.name, predicate: r } : r;
}
__name(Ga, "Ga");
u(Ga, "toGuard");
function Oc(r) {
  try {
    return "subscribe" in r && ze(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(Oc, "Oc");
u(Oc, "isObservable");
var Er = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var fg = (Ra = {}, Ra[Er] = function() {
  return this;
}, Ra[Symbol.observable] = function() {
  return this;
}, Ra);
function Sr(r) {
  return !!r && "__xstatenode" in r;
}
__name(Sr, "Sr");
u(Sr, "isMachine");
function Mc(r) {
  return !!r && typeof r.send == "function";
}
__name(Mc, "Mc");
u(Mc, "isActor");
function Qi(r, e) {
  return ye(r) || typeof r == "number" ? V({ type: r }, e) : r;
}
__name(Qi, "Qi");
u(Qi, "toEventObject");
function ot(r, e) {
  if (!ye(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Qi(r);
  return V({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(ot, "ot");
u(ot, "toSCXMLEvent");
function Pn(r, e) {
  var t = xc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Sr(i) ? { target: i, event: r } : V(V({}, i), { event: r });
  });
  return t;
}
__name(Pn, "Pn");
u(Pn, "toTransitionConfigArray");
function Ic(r) {
  if (!(r === void 0 || r === bc))
    return Bt(r);
}
__name(Ic, "Ic");
u(Ic, "normalizeTarget");
function Pc(r, e, t) {
  if (!qe) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
__name(Pc, "Pc");
u(Pc, "reportUnhandledExceptionOnInvocation");
function La(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === _a)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var b = c == null ? void 0 : c[e.type];
  if (!b)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return b(t, i.data, f);
}
__name(La, "La");
u(La, "evaluateGuard");
function ja(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(ja, "ja");
u(ja, "toInvokeSource");
function Ji(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Ji, "Ji");
u(Ji, "toObserver");
function Ki(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Ki, "Ki");
u(Ki, "createInvokeId");
var An = ot({ type: vc });
function Ha(r, e) {
  return e && e[r] || void 0;
}
__name(Ha, "Ha");
u(Ha, "getActionFunction");
function ci(r, e) {
  var t;
  if (ye(r) || typeof r == "number") {
    var i = Ha(r, e);
    ze(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (ze(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = Ha(r.type, e);
    if (ze(i))
      t = V(V({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = V(V(V({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(ci, "ci");
u(ci, "toActionObject");
var eo = u(function(r, e) {
  if (!r)
    return [];
  var t = Lr(r) ? r : [r];
  return t.map(function(i) {
    return ci(i, e);
  });
}, "toActionObjects");
function qa(r) {
  var e = ci(r);
  return V(V({ id: ye(r) ? r : e.id }, e), { type: e.type });
}
__name(qa, "qa");
u(qa, "toActivityDefinition");
function Ac(r) {
  return ye(r) ? { type: si, event: r } : ml(r, { to: on.Internal });
}
__name(Ac, "Ac");
u(Ac, "raise");
function zh(r) {
  return { type: si, _event: ot(r.event) };
}
__name(zh, "zh");
u(zh, "resolveRaise");
function ml(r, e) {
  return { to: e ? e.to : void 0, type: Mn, event: ze(r) ? r : Qi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : ze(r) ? r.name : ka(r) };
}
__name(ml, "ml");
u(ml, "send");
function _h(r, e, t, i) {
  var l = { _event: t }, c = ot(ze(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (ye(r.delay)) {
    var b = i && i[r.delay];
    f = ze(b) ? b(e, t.data, l) : b;
  } else
    f = ze(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var h = ze(r.to) ? r.to(e, t.data, l) : r.to;
  return V(V({}, r), { to: h, _event: c, event: c.data, delay: f });
}
__name(_h, "_h");
u(_h, "resolveSend");
var Rh = u(function(r, e, t) {
  return V(V({}, r), { value: ye(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var zc = u(function(r) {
  return { type: Pa, sendId: r };
}, "cancel");
function _c(r) {
  var e = qa(r);
  return { type: Ae.Start, activity: e, exec: void 0 };
}
__name(_c, "_c");
u(_c, "start");
function Rc(r) {
  var e = ze(r) ? r : qa(r);
  return { type: Ae.Stop, activity: e, exec: void 0 };
}
__name(Rc, "Rc");
u(Rc, "stop");
function kh(r, e, t) {
  var i = ze(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Ae.Stop, activity: l };
  return c;
}
__name(kh, "kh");
u(kh, "resolveStop");
function kc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Ae.After, "(").concat(r, ")").concat(t);
}
__name(kc, "kc");
u(kc, "after");
function to(r, e) {
  var t = "".concat(Ae.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(to, "to");
u(to, "done");
function pi(r, e) {
  var t = "".concat(Ae.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(pi, "pi");
u(pi, "doneInvoke");
function zn(r, e) {
  var t = "".concat(Ae.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(zn, "zn");
u(zn, "error");
function Ba(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = be(c ? [[], l] : Na(l, function(y) {
    return y.type === ul;
  }), 2), b = f[0], h = f[1], d = b.length ? vl(t, i, b, e) : t, v = c ? [t] : void 0, w = Le(h.map(function(y) {
    var S;
    switch (y.type) {
      case si:
        return zh(y);
      case Mn:
        var O = _h(y, d, i, r.options.delays);
        return qe || Ze(!ye(y.delay) || typeof O.delay == "number", "No delay reference for delay expression '".concat(y.delay, "' was found on machine '").concat(r.id, "'")), O;
      case Aa:
        return Rh(y, d, i);
      case mc: {
        var M = y, _ = (S = M.conds.find(function(ie) {
          var ne = Ga(ie.cond, r.options.guards);
          return !ne || La(r, ne, d, i, e);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!_)
          return [];
        var $ = be(Ba(r, e, d, i, eo(Bt(_), r.options.actions), c), 2), L = $[0], F = $[1];
        return d = F, v == null || v.push(d), L;
      }
      case gc: {
        var _ = y.get(d, i.data);
        if (!_)
          return [];
        var I = be(Ba(r, e, d, i, eo(Bt(_), r.options.actions), c), 2), Q = I[0], z = I[1];
        return d = z, v == null || v.push(d), Q;
      }
      case ai:
        return kh(y, d, i);
      case ul: {
        d = vl(d, i, [y], e), v == null || v.push(d);
        break;
      }
      default:
        var j = ci(y, r.options.actions), Y = j.exec;
        if (Y && v) {
          var K = v.length - 1;
          j = V(V({}, j), { exec: function(ie) {
            for (var ne = [], ce = 1; ce < arguments.length; ce++)
              ne[ce - 1] = arguments[ce];
            Y.apply(void 0, ke([v[K]], be(ne), false));
          } });
        }
        return j;
    }
  }).filter(function(y) {
    return !!y;
  }));
  return [w, d];
}
__name(Ba, "Ba");
u(Ba, "resolveActions");
var Dc = [];
var _n = u(function(r, e) {
  Dc.push(r);
  var t = e(r);
  return Dc.pop(), t;
}, "provide");
function Nc(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[Er] = function() {
    return this;
  }, e;
}
__name(Nc, "Nc");
u(Nc, "createNullActor");
function Gc(r, e, t, i) {
  var l, c = ja(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], b = r.data ? In(r.data, t, i) : void 0, h = f ? Lc(f, r.id, b) : Nc(r.id);
  return h.meta = r, h;
}
__name(Gc, "Gc");
u(Gc, "createInvocableActor");
function Lc(r, e, t) {
  var i = Nc(e);
  if (i.deferred = true, Sr(r)) {
    var l = i.state = _n(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(Lc, "Lc");
u(Lc, "createDeferredActor");
function Dh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(Dh, "Dh");
u(Dh, "isActor");
function jc(r) {
  return Dh(r) && "id" in r;
}
__name(jc, "jc");
u(jc, "isSpawnedActor");
function Hc(r) {
  var e;
  return V((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Er] = function() {
    return this;
  }, e), r);
}
__name(Hc, "Hc");
u(Hc, "toActorRef");
var ro = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function Rn(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(Rn, "Rn");
u(Rn, "getChildren");
function bl(r) {
  var e = [r];
  return ro(r) ? e : e.concat(Le(Rn(r).map(bl)));
}
__name(bl, "bl");
u(bl, "getAllStateNodes");
function kn(r, e) {
  var t, i, l, c, f, b, h, d, v = new Set(r), w = gl(v), y = new Set(e);
  try {
    for (var S = me(y), O = S.next(); !O.done; O = S.next())
      for (var M = O.value, _ = M.parent; _ && !y.has(_); )
        y.add(_), _ = _.parent;
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
  var $ = gl(y);
  try {
    for (var L = me(y), F = L.next(); !F.done; F = L.next()) {
      var M = F.value;
      if (M.type === "compound" && (!$.get(M) || !$.get(M).length))
        w.get(M) ? w.get(M).forEach(function(ie) {
          return y.add(ie);
        }) : M.initialStateNodes.forEach(function(ie) {
          return y.add(ie);
        });
      else if (M.type === "parallel")
        try {
          for (var I = (f = void 0, me(Rn(M))), Q = I.next(); !Q.done; Q = I.next()) {
            var z = Q.value;
            y.has(z) || (y.add(z), w.get(z) ? w.get(z).forEach(function(ie) {
              return y.add(ie);
            }) : z.initialStateNodes.forEach(function(ie) {
              return y.add(ie);
            }));
          }
        } catch (ie) {
          f = { error: ie };
        } finally {
          try {
            Q && !Q.done && (b = I.return) && b.call(I);
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
      F && !F.done && (c = L.return) && c.call(L);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var j = me(y), Y = j.next(); !Y.done; Y = j.next())
      for (var M = Y.value, _ = M.parent; _ && !y.has(_); )
        y.add(_), _ = _.parent;
  } catch (K) {
    h = { error: K };
  } finally {
    try {
      Y && !Y.done && (d = j.return) && d.call(j);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return y;
}
__name(kn, "kn");
u(kn, "getConfiguration");
function Bc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (ro(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = Bc(c, e);
  }), l;
}
__name(Bc, "Bc");
u(Bc, "getValueFromAdj");
function gl(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = me(r), c = l.next(); !c.done; c = l.next()) {
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
__name(gl, "gl");
u(gl, "getAdjList");
function qc(r, e) {
  var t = kn([r], e);
  return Bc(r, gl(t));
}
__name(qc, "qc");
u(qc, "getValue");
function no(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(no, "no");
u(no, "has");
function $c(r) {
  return ke([], be(new Set(Le(ke([], be(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name($c, "$c");
u($c, "nextEvents");
function Dn(r, e) {
  return e.type === "compound" ? Rn(e).some(function(t) {
    return t.type === "final" && no(r, t);
  }) : e.type === "parallel" ? Rn(e).every(function(t) {
    return Dn(r, t);
  }) : false;
}
__name(Dn, "Dn");
u(Dn, "isInFinalState");
function Fc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(Fc, "Fc");
u(Fc, "getMeta");
function yl(r) {
  return new Set(Le(r.map(function(e) {
    return e.tags;
  })));
}
__name(yl, "yl");
u(yl, "getTagsFromConfiguration");
function wl(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ye(r) || ye(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return wl(r[l], e[l]);
  });
}
__name(wl, "wl");
u(wl, "stateValuesEqual");
function Wc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Wc, "Wc");
u(Wc, "isStateConfig");
function Uc(r, e) {
  var t = r.exec, i = V(V({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(Uc, "Uc");
u(Uc, "bindActionToState");
var hr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = dl, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || dl, this.meta = Fc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return $c(t.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = An;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = An;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ye(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, ke([], be(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(f) {
        return c + t + f;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = oi(e, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Xi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    qe && Ze(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Nh = { deferEvents: false };
var xl = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Nh), e);
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
var El = /* @__PURE__ */ new Map();
var Gh = 0;
var io = { bookId: function() {
  return "x:".concat(Gh++);
}, register: function(r, e) {
  return El.set(r, e), r;
}, get: function(r) {
  return El.get(r);
}, free: function(r) {
  El.delete(r);
} };
function $a() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  qe || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name($a, "$a");
u($a, "getGlobal");
function Lh() {
  var r = $a();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(Lh, "Lh");
u(Lh, "getDevTools");
function Vc(r) {
  if (!!$a()) {
    var e = Lh();
    e && e.register(r);
  }
}
__name(Vc, "Vc");
u(Vc, "registerService");
function Yc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var d = l.shift();
        t = r.transition(t, d, h), i.forEach(function(v) {
          return v.next(t);
        });
      }
      c = false;
    }
  }, "flush"), b = Hc({ id: e.id, send: function(d) {
    l.push(d), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(d, v, w) {
    var y = Ji(d, v, w);
    return i.add(y), y.next(t), { unsubscribe: function() {
      i.delete(y);
    } };
  } }), h = { parent: e.parent, self: b, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(h) : t, b;
}
__name(Yc, "Yc");
u(Yc, "spawnBehavior");
var jh = { sync: false, autoForward: false };
var gt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(gt || (gt = {}));
var Xc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = gt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(v, w) {
      if (Lr(v))
        return i.batch(v), i.state;
      var y = ot(Qi(v, w));
      if (i.status === gt.Stopped)
        return qe || Ze(false, 'Event "'.concat(y.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(y.data))), i.state;
      if (i.status !== gt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(y.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(y.data)));
      return i.scheduler.schedule(function() {
        i.forward(y);
        var S = i.nextState(y);
        i.update(S, y);
      }), i._state;
    }, this.sendTo = function(v, w) {
      var y = i.parent && (w === on.Parent || i.parent.id === w), S = y ? i.parent : ye(w) ? i.children.get(w) || io.get(w) : Mc(w) ? w : void 0;
      if (!S) {
        if (!y)
          throw new Error("Unable to send event to child '".concat(w, "' from service '").concat(i.id, "'."));
        qe || Ze(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(v.type));
        return;
      }
      "machine" in S ? S.send(V(V({}, v), { name: v.name === pl ? "".concat(zn(i.id)) : v.name, origin: i.sessionId })) : S.send(v.data);
    };
    var l = V(V({}, r.defaultOptions), t), c = l.clock, f = l.logger, b = l.parent, h = l.id, d = h !== void 0 ? h : e.id;
    this.id = d, this.logger = f, this.clock = c, this.parent = b, this.options = l, this.scheduler = new xl({ deferEvents: this.options.deferEvents }), this.sessionId = io.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return qe || Ze(this.status !== gt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = me(e.actions), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        this.exec(b, e, t);
      }
    } catch (h) {
      i = { error: h };
    } finally {
      try {
        f && !f.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, f, b, h, d, v, w = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(K) {
      w.state.children[K.id] = K;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var y = me(this.eventListeners), S = y.next(); !S.done; S = y.next()) {
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
      for (var M = me(this.listeners), _ = M.next(); !_.done; _ = M.next()) {
        var O = _.value;
        O(e, e.event);
      }
    } catch (K) {
      c = { error: K };
    } finally {
      try {
        _ && !_.done && (f = M.return) && f.call(M);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var $ = me(this.contextListeners), L = $.next(); !L.done; L = $.next()) {
        var F = L.value;
        F(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (K) {
      b = { error: K };
    } finally {
      try {
        L && !L.done && (h = $.return) && h.call($);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var I = Dn(e.configuration || [], this.machine);
    if (this.state.configuration && I) {
      var Q = e.configuration.find(function(K) {
        return K.type === "final" && K.parent === w.machine;
      }), z = Q && Q.doneData ? In(Q.doneData, e.context, t) : void 0;
      try {
        for (var j = me(this.doneListeners), Y = j.next(); !Y.done; Y = j.next()) {
          var O = Y.value;
          O(pi(this.id, z));
        }
      } catch (K) {
        d = { error: K };
      } finally {
        try {
          Y && !Y.done && (v = j.return) && v.call(j);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(e) {
    return this.listeners.add(e), this.status === gt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, f = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), f = e.complete.bind(e)), this.listeners.add(c), this.status !== gt.NotStarted && c(this.state), f && (this.status === gt.Stopped ? f() : this.onDone(f)), { unsubscribe: function() {
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
    if (this.status === gt.Running)
      return this;
    this.machine._init(), io.register(this.sessionId, this), this.initialized = true, this.status = gt.Running;
    var i = e === void 0 ? this.initialState : _n(this, function() {
      return Wc(e) ? t.machine.resolveState(e) : t.machine.resolveState(hr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, An);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, b, h, d, v, w = this;
    try {
      for (var y = me(this.listeners), S = y.next(); !S.done; S = y.next()) {
        var O = S.value;
        this.listeners.delete(O);
      }
    } catch (Y) {
      e = { error: Y };
    } finally {
      try {
        S && !S.done && (t = y.return) && t.call(y);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var M = me(this.stopListeners), _ = M.next(); !_.done; _ = M.next()) {
        var O = _.value;
        O(), this.stopListeners.delete(O);
      }
    } catch (Y) {
      i = { error: Y };
    } finally {
      try {
        _ && !_.done && (l = M.return) && l.call(M);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var $ = me(this.contextListeners), L = $.next(); !L.done; L = $.next()) {
        var O = L.value;
        this.contextListeners.delete(O);
      }
    } catch (Y) {
      c = { error: Y };
    } finally {
      try {
        L && !L.done && (f = $.return) && f.call($);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var F = me(this.doneListeners), I = F.next(); !I.done; I = F.next()) {
        var O = I.value;
        this.doneListeners.delete(O);
      }
    } catch (Y) {
      b = { error: Y };
    } finally {
      try {
        I && !I.done && (h = F.return) && h.call(F);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    ke([], be(this.state.configuration), false).sort(function(Y, K) {
      return K.order - Y.order;
    }).forEach(function(Y) {
      var K, ie;
      try {
        for (var ne = me(Y.definition.exit), ce = ne.next(); !ce.done; ce = ne.next()) {
          var W = ce.value;
          w.exec(W, w.state);
        }
      } catch (ue) {
        K = { error: ue };
      } finally {
        try {
          ce && !ce.done && (ie = ne.return) && ie.call(ne);
        } finally {
          if (K)
            throw K.error;
        }
      }
    }), this.children.forEach(function(Y) {
      ze(Y.stop) && Y.stop();
    }), this.children.clear();
    try {
      for (var Q = me(Object.keys(this.delayedEventsMap)), z = Q.next(); !z.done; z = Q.next()) {
        var j = z.value;
        this.clock.clearTimeout(this.delayedEventsMap[j]);
      }
    } catch (Y) {
      d = { error: Y };
    } finally {
      try {
        z && !z.done && (v = Q.return) && v.call(Q);
      } finally {
        if (d)
          throw d.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new xl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = gt.Stopped, this._initialState = void 0, io.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === gt.NotStarted && this.options.deferEvents)
      qe || Ze(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== gt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, b = [], h = u(function(y) {
        var S = ot(y);
        t.forward(S), c = _n(t, function() {
          return t.machine.transition(c, S);
        }), b.push.apply(b, ke([], be(c.actions.map(function(O) {
          return Uc(O, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var d = me(e), v = d.next(); !v.done; v = d.next()) {
          var w = v.value;
          h(w);
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          v && !v.done && (l = d.return) && l.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = f, c.actions = b, t.update(c, ot(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = ot(e);
    if (i.name.indexOf(cl) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(cl) === 0;
    }))
      throw i.data.data;
    var l = _n(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = me(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var f = c.value, b = this.children.get(f);
        if (!b)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(f, "'."));
        b.send(e);
      }
    } catch (h) {
      t = { error: h };
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
    var l = t.context, c = t._event, f = e.exec || Ha(e.type, i), b = ze(f) ? f : f ? f.exec : e.exec;
    if (b)
      try {
        return b(l, c.data, { action: e, state: this.state, _event: c });
      } catch (I) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: I }), I;
      }
    switch (e.type) {
      case Mn:
        var h = e;
        if (typeof h.delay == "number") {
          this.defer(h);
          return;
        } else
          h.to ? this.sendTo(h._event, h.to) : this.send(h._event);
        break;
      case Pa:
        this.cancel(e.sendId);
        break;
      case Wi: {
        if (this.status !== gt.Running)
          return;
        var d = e.activity;
        if (!this.state.activities[d.id || d.type])
          break;
        if (d.type === Ae.Invoke) {
          var v = ja(d.src), w = this.machine.options.services ? this.machine.options.services[v.type] : void 0, y = d.id, S = d.data;
          qe || Ze(!("forward" in d), "`forward` property is deprecated (found in invocation of '".concat(d.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var O = "autoForward" in d ? d.autoForward : !!d.forward;
          if (!w) {
            qe || Ze(false, "No service found for invocation '".concat(d.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var M = S ? In(S, l, c) : void 0;
          if (typeof w == "string")
            return;
          var _ = ze(w) ? w(l, c.data, { data: M, src: v, meta: d.meta }) : w;
          if (!_)
            return;
          var $ = void 0;
          Sr(_) && (_ = M ? _.withContext(M) : _, $ = { autoForward: O }), this.spawn(_, y, $);
        } else
          this.spawnActivity(d);
        break;
      }
      case ai: {
        this.stopChild(e.activity.id);
        break;
      }
      case Aa:
        var L = e.label, F = e.value;
        L ? this.logger(L, F) : this.logger(F);
        break;
      default:
        qe || Ze(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), ze(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (hl(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (ze(e))
      return this.spawnCallback(e, t);
    if (jc(e))
      return this.spawnActor(e, t);
    if (Oc(e))
      return this.spawnObservable(e, t);
    if (Sr(e))
      return this.spawnMachine(e, V(V({}, i), { id: t }));
    if (Sc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, V(V({}, this.options), { parent: this, id: t.id || e.id })), c = V(V({}, jh), t);
    c.sync && l.onTransition(function(b) {
      i.send(Vi, { state: b, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(b) {
      i.removeChild(l.id), i.send(ot(b, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Yc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(h) {
      c || (f = h, l.removeChild(t), l.send(ot(pi(t, h), { origin: t })));
    }, function(h) {
      if (!c) {
        l.removeChild(t);
        var d = zn(t, h);
        try {
          l.send(ot(d, { origin: t }));
        } catch (v) {
          Pc(h, v, t), l.devTools && l.devTools.send(d, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var b = (i = { id: t, send: function() {
    }, subscribe: function(h, d, v) {
      var w = Ji(h, d, v), y = false;
      return e.then(function(S) {
        y || (w.next(S), !y && w.complete());
      }, function(S) {
        y || w.error(S);
      }), { unsubscribe: function() {
        return y = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return f;
    } }, i[Er] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), h, d = u(function(y) {
      h = y, b.forEach(function(S) {
        return S(y);
      }), !c && l.send(ot(y, { origin: t }));
    }, "receive"), v;
    try {
      v = e(d, function(y) {
        f.add(y);
      });
    } catch (y) {
      this.send(zn(t, y));
    }
    if (hl(v))
      return this.spawnPromise(v, t);
    var w = (i = { id: t, send: function(y) {
      return f.forEach(function(S) {
        return S(y);
      });
    }, subscribe: function(y) {
      var S = Ji(y);
      return b.add(S.next), { unsubscribe: function() {
        b.delete(S.next);
      } };
    }, stop: function() {
      c = true, ze(v) && v();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return h;
    } }, i[Er] = function() {
      return this;
    }, i);
    return this.children.set(t, w), w;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, f = e.subscribe(function(h) {
      c = h, l.send(ot(h, { origin: t }));
    }, function(h) {
      l.removeChild(t), l.send(ot(zn(t, h), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(ot(pi(t), { origin: t }));
    }), b = (i = { id: t, send: function() {
    }, subscribe: function(h, d, v) {
      return e.subscribe(h, d, v);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Er] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      qe || Ze(false, "No implementation found for activity '".concat(e.type, "'"));
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
    } }, i[Er] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = $a();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: V({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Vc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Er] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === gt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = et, r;
}();
function et(r, e) {
  var t = new Xc(r, e);
  return t;
}
__name(et, "et");
u(et, "interpret");
function Hh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(Hh, "Hh");
u(Hh, "toInvokeSource");
function oo(r) {
  return V(V({ type: Ui }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = oi(r, ["onDone", "onError"]);
    return V(V({}, e), { type: Ui, src: Hh(r.src) });
  } });
}
__name(oo, "oo");
u(oo, "toInvokeDefinition");
var hi = "";
var Sl = "#";
var ao = "*";
var di = {};
var fi = u(function(r) {
  return r[0] === Sl;
}, "isStateId");
var Bh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var qh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ye(c.target) || Sr(c.target));
  }), l = e === hi ? "the transient event" : "event '".concat(e, "'");
  Ze(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Zc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var f;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Bh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : za), this.id = this.config.id || ke([this.machine.key], be(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, qe || Ze(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ui(this.config.states, function(d, v) {
      var w, y = new r(d, {}, void 0, { parent: c, key: v });
      return Object.assign(c.idMap, V((w = {}, w[y.id] = y, w), y.idMap)), y;
    }) : di;
    var b = 0;
    function h(d) {
      var v, w;
      d.order = b++;
      try {
        for (var y = me(Rn(d)), S = y.next(); !S.done; S = y.next()) {
          var O = S.value;
          h(O);
        }
      } catch (M) {
        v = { error: M };
      } finally {
        try {
          S && !S.done && (w = y.return) && w.call(y);
        } finally {
          if (v)
            throw v.error;
        }
      }
    }
    __name(h, "h");
    u(h, "dfs"), h(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var v = d.event;
      return v === hi;
    }) : hi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Bt(this.config.entry || this.config.onEntry).map(function(d) {
      return ci(d);
    }), this.onExit = Bt(this.config.exit || this.config.onExit).map(function(d) {
      return ci(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Bt(this.config.invoke).map(function(d, v) {
      var w, y;
      if (Sr(d)) {
        var S = Ki(c.id, v);
        return c.machine.options.services = V((w = {}, w[S] = d, w), c.machine.options.services), oo({ src: S, id: S });
      } else if (ye(d.src)) {
        var S = d.id || Ki(c.id, v);
        return oo(V(V({}, d), { id: S, src: d.src }));
      } else if (Sr(d.src) || ze(d.src)) {
        var S = d.id || Ki(c.id, v);
        return c.machine.options.services = V((y = {}, y[S] = d.src, y), c.machine.options.services), oo(V(V({ id: S }, d), { src: S }));
      } else {
        var O = d.src;
        return oo(V(V({ id: Ki(c.id, v) }, d), { src: O }));
      }
    }), this.activities = Bt(this.config.activities).concat(this.invoke).map(function(d) {
      return qa(d);
    }), this.transition = this.transition.bind(this), this.tags = Bt(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || bl(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, b = i.services, h = i.delays;
    return new r(this.config, { actions: V(V({}, l), e.actions), activities: V(V({}, c), e.activities), guards: V(V({}, f), e.guards), services: V(V({}, b), e.services), delays: V(V({}, h), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return ze(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ui(this.states, function(e) {
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
    var t = e === hi, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === ao;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, f) {
      var b = ze(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, h = kc(b, e.id);
      return e.onEntry.push(ml(h, { delay: c })), e.onExit.push(zc(h)), h;
    }, "mutateEntryExit"), l = Lr(t) ? t.map(function(c, f) {
      var b = i(c.delay, f);
      return V(V({}, c), { event: b });
    }) : Le(Object.keys(t).map(function(c, f) {
      var b = t[c], h = ye(b) ? { target: b } : b, d = isNaN(+c) ? c : +c, v = i(d, f);
      return Bt(h).map(function(w) {
        return V(V({}, w), { event: v, delay: d });
      });
    }));
    return l.map(function(c) {
      var f = c.delay;
      return V(V({}, e.formatTransition(c)), { delay: f });
    });
  }, r.prototype.getStateNodes = function(e) {
    var t, i = this;
    if (!e)
      return [];
    var l = e instanceof hr ? e.value : li(e, this.delimiter);
    if (ye(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var f = Object.keys(l), b = [this];
    return b.push.apply(b, ke([], be(Le(f.map(function(h) {
      return i.getStateNode(h).getStateNodes(l[h]);
    }))), false)), b;
  }, r.prototype.handles = function(e) {
    var t = ka(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof hr ? e : hr.create(e), i = Array.from(kn([], this.getStateNodes(t.value)));
    return new hr(V(V({}, t), { value: this.resolve(t.value), configuration: i, done: Dn(i, this), tags: yl(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var b = me(Object.keys(e)), h = b.next(); !h.done; h = b.next()) {
        var d = h.value, v = e[d];
        if (!!v) {
          var w = this.getStateNode(d), y = w._transition(v, t, i);
          y && (f[d] = y);
        }
      }
    } catch (L) {
      l = { error: L };
    } finally {
      try {
        h && !h.done && (c = b.return) && c.call(b);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var S = Object.keys(f).map(function(L) {
      return f[L];
    }), O = Le(S.map(function(L) {
      return L.transitions;
    })), M = S.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!M)
      return this.next(t, i);
    var _ = Le(S.map(function(L) {
      return L.entrySet;
    })), $ = Le(Object.keys(f).map(function(L) {
      return f[L].configuration;
    }));
    return { transitions: O, entrySet: _, exitSet: Le(S.map(function(L) {
      return L.exitSet;
    })), configuration: $, source: t, actions: Le(Object.keys(f).map(function(L) {
      return f[L].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ye(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, ot(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, b = [], h = [], d;
    try {
      for (var v = me(this.getCandidates(f)), w = v.next(); !w.done; w = v.next()) {
        var y = w.value, S = y.cond, O = y.in, M = e.context, _ = O ? ye(O) && fi(O) ? e.matches(li(this.getStateNodeById(O).path, this.delimiter)) : Xi(li(O, this.delimiter), yc(this.path.slice(0, -2))(e.value)) : true, $ = false;
        try {
          $ = !S || La(this.machine, S, M, t, e);
        } catch (Q) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(Q.message));
        }
        if ($ && _) {
          y.target !== void 0 && (h = y.target), b.push.apply(b, ke([], be(y.actions), false)), d = y;
          break;
        }
      }
    } catch (Q) {
      i = { error: Q };
    } finally {
      try {
        w && !w.done && (l = v.return) && l.call(v);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!d) {
      if (!h.length)
        return { transitions: [d], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: b };
      var L = Le(h.map(function(Q) {
        return c.getRelativeStateNodes(Q, e.historyValue);
      })), F = !!d.internal, I = F ? [] : Le(L.map(function(Q) {
        return c.nodesFromChild(Q);
      }));
      return { transitions: [d], entrySet: I, exitSet: F ? [] : [this], configuration: L, source: e, actions: b };
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
    var c, f, b, h, d = kn([], l ? this.getStateNodes(l.value) : [this]), v = e.configuration.length ? kn(d, e.configuration) : d;
    try {
      for (var w = me(v), y = w.next(); !y.done; y = w.next()) {
        var S = y.value;
        no(d, S) || e.entrySet.push(S);
      }
    } catch (j) {
      c = { error: j };
    } finally {
      try {
        y && !y.done && (f = w.return) && f.call(w);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var O = me(d), M = O.next(); !M.done; M = O.next()) {
        var S = M.value;
        (!no(v, S) || no(e.exitSet, S.parent)) && e.exitSet.push(S);
      }
    } catch (j) {
      b = { error: j };
    } finally {
      try {
        M && !M.done && (h = O.return) && h.call(O);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var _ = Le(e.entrySet.map(function(j) {
      var Y = [];
      if (j.type !== "final")
        return Y;
      var K = j.parent;
      if (!K.parent)
        return Y;
      Y.push(to(j.id, j.doneData), to(K.id, j.doneData ? In(j.doneData, t, i) : void 0));
      var ie = K.parent;
      return ie.type === "parallel" && Rn(ie).every(function(ne) {
        return Dn(e.configuration, ne);
      }) && Y.push(to(ie.id)), Y;
    }));
    e.exitSet.sort(function(j, Y) {
      return Y.order - j.order;
    }), e.entrySet.sort(function(j, Y) {
      return j.order - Y.order;
    });
    var $ = new Set(e.entrySet), L = new Set(e.exitSet), F = be([Le(Array.from($).map(function(j) {
      return ke(ke([], be(j.activities.map(function(Y) {
        return _c(Y);
      })), false), be(j.onEntry), false);
    })).concat(_.map(Ac)), Le(Array.from(L).map(function(j) {
      return ke(ke([], be(j.onExit), false), be(j.activities.map(function(Y) {
        return Rc(Y);
      })), false);
    }))], 2), I = F[0], Q = F[1], z = eo(Q.concat(e.actions).concat(I), this.machine.options.actions);
    return z;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = ot(t), c;
    if (e instanceof hr)
      c = i === void 0 ? e : this.resolveState(hr.from(e, i));
    else {
      var f = ye(e) ? this.resolve(Yi(this.getResolvedPath(e))) : this.resolve(e), b = i != null ? i : this.machine.context;
      c = this.resolveState(hr.from(f, b));
    }
    if (!qe && l.name === ao)
      throw new Error("An event cannot have the wildcard type ('".concat(ao, "')"));
    if (this.strict && !this.events.includes(l.name) && !Ec(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var h = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, d = kn([], this.getStateNodes(c.value)), v = h.configuration.length ? kn(d, h.configuration) : d;
    return h.configuration = ke([], be(v), false), this.resolveTransition(h, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, ke([], be(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, b = this;
    l === void 0 && (l = An);
    var h = e.configuration, d = !t || e.transitions.length > 0, v = d ? qc(this.machine, h) : void 0, w = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, y = this.getActions(e, i, l, t), S = t ? V({}, t.activities) : {};
    try {
      for (var O = me(y), M = O.next(); !M.done; M = O.next()) {
        var _ = M.value;
        _.type === Wi ? S[_.activity.id || _.activity.type] = _ : _.type === ai && (S[_.activity.id || _.activity.type] = false);
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
    var $ = be(Ba(this, t, i, l, y, this.machine.config.preserveActionOrder), 2), L = $[0], F = $[1], I = be(Na(L, function(fe) {
      return fe.type === si || fe.type === Mn && fe.to === on.Internal;
    }), 2), Q = I[0], z = I[1], j = L.filter(function(fe) {
      var Ke;
      return fe.type === Wi && ((Ke = fe.activity) === null || Ke === void 0 ? void 0 : Ke.type) === Ui;
    }), Y = j.reduce(function(fe, Ke) {
      return fe[Ke.activity.id] = Gc(Ke.activity, b.machine, F, l), fe;
    }, t ? V({}, t.children) : {}), K = d ? e.configuration : t ? t.configuration : [], ie = Dn(K, this), ne = new hr({ value: v || t.value, context: F, _event: l, _sessionid: t ? t._sessionid : null, historyValue: v ? w ? Cc(w, v) : void 0 : t ? t.historyValue : void 0, history: !v || e.source ? t : void 0, actions: v ? z : [], activities: v ? S : t ? t.activities : {}, events: [], configuration: K, transitions: e.transitions, children: Y, done: ie, tags: yl(K), machine: this }), ce = i !== F;
    ne.changed = l.name === Vi || ce;
    var W = ne.history;
    W && delete W.history;
    var ue = !ie && (this._transient || h.some(function(fe) {
      return fe._transient;
    }));
    if (!d && (!ue || l.name === hi))
      return ne;
    var De = ne;
    if (!ie)
      for (ue && (De = this.resolveRaisedTransition(De, { type: hc }, l)); Q.length; ) {
        var Ye = Q.shift();
        De = this.resolveRaisedTransition(De, Ye._event, l);
      }
    var je = De.changed || (W ? !!De.actions.length || ce || typeof W.value != typeof De.value || !wl(De.value, W.value) : void 0);
    return De.changed = je, De.history = W, De;
  }, r.prototype.getStateNode = function(e) {
    if (fi(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = fi(e) ? e.slice(Sl.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && fi(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = Da(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || di;
    switch (this.type) {
      case "parallel":
        return ui(this.initialStateValue, function(c, f) {
          return c ? i.getStateNode(f).resolve(e[f] || c) : di;
        });
      case "compound":
        if (ye(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? ui(e, function(c, f) {
          return c ? i.getStateNode(f).resolve(c) : di;
        }) : this.initialStateValue || {};
      default:
        return e || di;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (fi(e)) {
      var t = this.machine.idMap[e.slice(Sl.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Da(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = fl(this.states, function(i) {
        return i.initialStateValue || di;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = ro(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
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
      ye(t.target) ? e = fi(t.target) ? Yi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (ro(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return qe || Ze(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Zi(this.initialStateValue);
    return Le(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = be(e), i = t[0], l = t.slice(1);
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
      return { current: e || this.initialStateValue, states: fl(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = ye(e) ? void 0 : e[i];
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
      return l ? Le(Zi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = wc(i.path, "states")(e).current;
    return ye(c) ? [i.getStateNode(c)] : Le(Zi(c).map(function(f) {
      return t.history === "deep" ? i.getFromRelativePath(f) : [i.states[f[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = Le(Object.keys(this.states).map(function(i) {
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
        for (var b = me(Object.keys(c)), h = b.next(); !h.done; h = b.next()) {
          var d = h.value, v = c[d];
          if (v.states)
            try {
              for (var w = (i = void 0, me(v.events)), y = w.next(); !y.done; y = w.next()) {
                var S = y.value;
                f.add("".concat(S));
              }
            } catch (O) {
              i = { error: O };
            } finally {
              try {
                y && !y.done && (l = w.return) && l.call(w);
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
          h && !h.done && (t = b.return) && t.call(b);
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
        if (!ye(i))
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
    var t = this, i = Ic(e.target), l = "internal" in e ? e.internal : i ? i.some(function(h) {
      return ye(h) && h[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), b = V(V({}, e), { actions: eo(Bt(e.actions)), cond: Ga(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
      return V(V({}, b), { target: b.target ? b.target.map(function(h) {
        return "#".concat(h.id);
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
      var c = this.config.on, f = ao, b = c[f], h = b === void 0 ? [] : b, d = oi(c, [typeof f == "symbol" ? f : f + ""]);
      l = Le(Object.keys(d).map(function(L) {
        !qe && L === hi && Ze(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var F = Pn(L, d[L]);
        return qe || qh(i, L, F), F;
      }).concat(Pn(ao, h)));
    }
    var v = this.config.always ? Pn("", this.config.always) : [], w = this.config.onDone ? Pn(String(to(this.id)), this.config.onDone) : [];
    qe || Ze(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var y = Le(this.invoke.map(function(L) {
      var F = [];
      return L.onDone && F.push.apply(F, ke([], be(Pn(String(pi(L.id)), L.onDone)), false)), L.onError && F.push.apply(F, ke([], be(Pn(String(zn(L.id)), L.onError)), false)), F;
    })), S = this.after, O = Le(ke(ke(ke(ke([], be(w), false), be(y), false), be(l), false), be(v), false).map(function(L) {
      return Bt(L).map(function(F) {
        return i.formatTransition(F);
      });
    }));
    try {
      for (var M = me(S), _ = M.next(); !_.done; _ = M.next()) {
        var $ = _.value;
        O.push($);
      }
    } catch (L) {
      e = { error: L };
    } finally {
      try {
        _ && !_.done && (t = M.return) && t.call(M);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return O;
  }, r;
}();
function at(r, e) {
  return new Zc(r, e);
}
__name(at, "at");
u(at, "createMachine");
var lo = Tn(so(), 1);
var Wa = u((r) => r != null && typeof r.draggable == "boolean", "isDraggable");
var Fa = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Cl = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Se(r) {
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
      this.draggableMachine = at({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        ve("draggable:init", {}, this);
      }, setInteract: (i, l) => {
        H.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let c = (0, lo.default)(this);
        c.styleCursor(false), c.pointerEvents({ ignoreFrom: ".resize-handle" }), c.on("down", this.grab.bind(this)), c.on("up", this.release.bind(this)), c.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let f = this.dropzone;
        Fa(f) ? this.snappedDropzone = f : this.snappedDropzone = null;
      }, grab: (i, l) => {
        H.need(l.type === "GRAB", "event type must be GRAB"), l.type === "GRAB" && (this.grabbed = true, ve("draggable:grab", {}, this), Cl(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("qpu-operation-xl")));
      }, release: (i, l) => {
        H.need(l.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, ve("draggable:release", {}, this);
      }, startDragging: (i, l) => {
        H.need(l.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (i, l) => {
        H.need(l.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, ve("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, ve("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && ve("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        !this.snapped || (this.moveTo(0, 0), ve("draggable:drop", {}, this));
      }, delete: () => {
        (0, lo.default)(this).unset(), ve("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => Fa(this.dropzone), isOnPaletteDropzone: () => Cl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Fa(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = et(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Xe(i.value)}`);
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
      return H.notNull(i), !Cl(i) && !Fa(i) ? null : i;
    }
    set snapTargets(i) {
      (0, lo.default)(this).draggable({ modifiers: [lo.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(i) {
      let l = i.modifiers[0];
      if (l.inRange) {
        let c = l.target.source;
        ve("draggable:in-snap-range", { snapTargetInfo: c }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
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
  return u(e, "DraggableMixinClass"), A([k], e.prototype, "operationX", 2), A([k], e.prototype, "operationY", 2), A([k], e.prototype, "grabbed", 2), A([k], e.prototype, "dragging", 2), A([k], e.prototype, "snapped", 2), A([k], e.prototype, "bit", 2), A([k], e.prototype, "debugDraggable", 2), e;
}
__name(Se, "Se");
u(Se, "DraggableMixin");
var Nn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Jc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), A([k], e.prototype, "flag", 2), e;
}
__name(Jc, "Jc");
u(Jc, "FlaggableMixin");
var Ve = "top";
var st = "bottom";
var tt = "right";
var Qe = "left";
var Ua = "auto";
var an = [Ve, st, tt, Qe];
var jr = "start";
var Gn = "end";
var Kc = "clippingParents";
var Va = "viewport";
var vi = "popper";
var ep = "reference";
var Ol = an.reduce(function(r, e) {
  return r.concat([e + "-" + jr, e + "-" + Gn]);
}, []);
var Ya = [].concat(an, [Ua]).reduce(function(r, e) {
  return r.concat([e, e + "-" + jr, e + "-" + Gn]);
}, []);
var $h = "beforeRead";
var Fh = "read";
var Wh = "afterRead";
var Uh = "beforeMain";
var Vh = "main";
var Yh = "afterMain";
var Xh = "beforeWrite";
var Zh = "write";
var Qh = "afterWrite";
var tp = [$h, Fh, Wh, Uh, Vh, Yh, Xh, Zh, Qh];
function dt(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(dt, "dt");
u(dt, "getNodeName");
function Je(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Je, "Je");
u(Je, "getWindow");
function Tr(r) {
  var e = Je(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Tr, "Tr");
u(Tr, "isElement");
function lt(r) {
  var e = Je(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(lt, "lt");
u(lt, "isHTMLElement");
function Xa(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Je(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Xa, "Xa");
u(Xa, "isShadowRoot");
function Jh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !lt(c) || !dt(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var b = l[f];
      b === false ? c.removeAttribute(f) : c.setAttribute(f, b === true ? "" : b);
    }));
  });
}
__name(Jh, "Jh");
u(Jh, "applyStyles");
function Kh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, f = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), b = f.reduce(function(h, d) {
        return h[d] = "", h;
      }, {});
      !lt(l) || !dt(l) || (Object.assign(l.style, b), Object.keys(c).forEach(function(h) {
        l.removeAttribute(h);
      }));
    });
  };
}
__name(Kh, "Kh");
u(Kh, "effect");
var uo = { name: "applyStyles", enabled: true, phase: "write", fn: Jh, effect: Kh, requires: ["computeStyles"] };
function ft(r) {
  return r.split("-")[0];
}
__name(ft, "ft");
u(ft, "getBasePlacement");
var vr = Math.max;
var Ln = Math.min;
var Hr = Math.round;
function Zt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (lt(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Hr(t.width) / f || 1), c > 0 && (l = Hr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Zt, "Zt");
u(Zt, "getBoundingClientRect");
function jn(r) {
  var e = Zt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(jn, "jn");
u(jn, "getLayoutRect");
function co(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Xa(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(co, "co");
u(co, "contains");
function zt(r) {
  return Je(r).getComputedStyle(r);
}
__name(zt, "zt");
u(zt, "getComputedStyle");
function Ml(r) {
  return ["table", "td", "th"].indexOf(dt(r)) >= 0;
}
__name(Ml, "Ml");
u(Ml, "isTableElement");
function bt(r) {
  return ((Tr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(bt, "bt");
u(bt, "getDocumentElement");
function Br(r) {
  return dt(r) === "html" ? r : r.assignedSlot || r.parentNode || (Xa(r) ? r.host : null) || bt(r);
}
__name(Br, "Br");
u(Br, "getParentNode");
function rp(r) {
  return !lt(r) || zt(r).position === "fixed" ? null : r.offsetParent;
}
__name(rp, "rp");
u(rp, "getTrueOffsetParent");
function ev(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && lt(r)) {
    var i = zt(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Br(r); lt(l) && ["html", "body"].indexOf(dt(l)) < 0; ) {
    var c = zt(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(ev, "ev");
u(ev, "getContainingBlock");
function mr(r) {
  for (var e = Je(r), t = rp(r); t && Ml(t) && zt(t).position === "static"; )
    t = rp(t);
  return t && (dt(t) === "html" || dt(t) === "body" && zt(t).position === "static") ? e : t || ev(r) || e;
}
__name(mr, "mr");
u(mr, "getOffsetParent");
function Hn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Hn, "Hn");
u(Hn, "getMainAxisFromPlacement");
function Bn(r, e, t) {
  return vr(r, Ln(e, t));
}
__name(Bn, "Bn");
u(Bn, "within");
function np(r, e, t) {
  var i = Bn(r, e, t);
  return i > t ? t : i;
}
__name(np, "np");
u(np, "withinMaxClamp");
function po() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(po, "po");
u(po, "getFreshSideObject");
function fo(r) {
  return Object.assign({}, po(), r);
}
__name(fo, "fo");
u(fo, "mergePaddingObject");
function ho(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(ho, "ho");
u(ho, "expandToHashMap");
var tv = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, fo(typeof e != "number" ? e : ho(e, an));
}, "toPaddingObject");
function rv(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, b = ft(t.placement), h = Hn(b), d = [Qe, tt].indexOf(b) >= 0, v = d ? "height" : "width";
  if (!(!c || !f)) {
    var w = tv(l.padding, t), y = jn(c), S = h === "y" ? Ve : Qe, O = h === "y" ? st : tt, M = t.rects.reference[v] + t.rects.reference[h] - f[h] - t.rects.popper[v], _ = f[h] - t.rects.reference[h], $ = mr(c), L = $ ? h === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, F = M / 2 - _ / 2, I = w[S], Q = L - y[v] - w[O], z = L / 2 - y[v] / 2 + F, j = Bn(I, z, Q), Y = h;
    t.modifiersData[i] = (e = {}, e[Y] = j, e.centerOffset = j - z, e);
  }
}
__name(rv, "rv");
u(rv, "arrow");
function nv(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !co(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(nv, "nv");
u(nv, "effect");
var ip = { name: "arrow", enabled: true, phase: "main", fn: rv, effect: nv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qt(r) {
  return r.split("-")[1];
}
__name(Qt, "Qt");
u(Qt, "getVariation");
var iv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ov(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Hr(e * l) / l || 0, y: Hr(t * l) / l || 0 };
}
__name(ov, "ov");
u(ov, "roundOffsetsByDPR");
function op(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, b = r.position, h = r.gpuAcceleration, d = r.adaptive, v = r.roundOffsets, w = r.isFixed, y = f.x, S = y === void 0 ? 0 : y, O = f.y, M = O === void 0 ? 0 : O, _ = typeof v == "function" ? v({ x: S, y: M }) : { x: S, y: M };
  S = _.x, M = _.y;
  var $ = f.hasOwnProperty("x"), L = f.hasOwnProperty("y"), F = Qe, I = Ve, Q = window;
  if (d) {
    var z = mr(t), j = "clientHeight", Y = "clientWidth";
    if (z === Je(t) && (z = bt(t), zt(z).position !== "static" && b === "absolute" && (j = "scrollHeight", Y = "scrollWidth")), z = z, l === Ve || (l === Qe || l === tt) && c === Gn) {
      I = st;
      var K = w && Q.visualViewport ? Q.visualViewport.height : z[j];
      M -= K - i.height, M *= h ? 1 : -1;
    }
    if (l === Qe || (l === Ve || l === st) && c === Gn) {
      F = tt;
      var ie = w && Q.visualViewport ? Q.visualViewport.width : z[Y];
      S -= ie - i.width, S *= h ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: b }, d && iv), ce = v === true ? ov({ x: S, y: M }) : { x: S, y: M };
  if (S = ce.x, M = ce.y, h) {
    var W;
    return Object.assign({}, ne, (W = {}, W[I] = L ? "0" : "", W[F] = $ ? "0" : "", W.transform = (Q.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + M + "px)" : "translate3d(" + S + "px, " + M + "px, 0)", W));
  }
  return Object.assign({}, ne, (e = {}, e[I] = L ? M + "px" : "", e[F] = $ ? S + "px" : "", e.transform = "", e));
}
__name(op, "op");
u(op, "mapToStyles");
function av(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, b = t.roundOffsets, h = b === void 0 ? true : b;
  if (false)
    var d;
  var v = { placement: ft(e.placement), variation: Qt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, op(Object.assign({}, v, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: h })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, op(Object.assign({}, v, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: h })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(av, "av");
u(av, "computeStyles");
var ap = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: av, data: {} };
var Za = { passive: true };
function sv(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, b = f === void 0 ? true : f, h = Je(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && d.forEach(function(v) {
    v.addEventListener("scroll", t.update, Za);
  }), b && h.addEventListener("resize", t.update, Za), function() {
    c && d.forEach(function(v) {
      v.removeEventListener("scroll", t.update, Za);
    }), b && h.removeEventListener("resize", t.update, Za);
  };
}
__name(sv, "sv");
u(sv, "effect");
var sp = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: sv, data: {} };
var lv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return lv[e];
  });
}
__name(mi, "mi");
u(mi, "getOppositePlacement");
var uv = { start: "end", end: "start" };
function Qa(r) {
  return r.replace(/start|end/g, function(e) {
    return uv[e];
  });
}
__name(Qa, "Qa");
u(Qa, "getOppositeVariationPlacement");
function qn(r) {
  var e = Je(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(qn, "qn");
u(qn, "getWindowScroll");
function $n(r) {
  return Zt(bt(r)).left + qn(r).scrollLeft;
}
__name($n, "$n");
u($n, "getWindowScrollBarX");
function Il(r) {
  var e = Je(r), t = bt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, b = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, b = i.offsetTop)), { width: l, height: c, x: f + $n(r), y: b };
}
__name(Il, "Il");
u(Il, "getViewportRect");
function Pl(r) {
  var e, t = bt(r), i = qn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = vr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = vr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), b = -i.scrollLeft + $n(r), h = -i.scrollTop;
  return zt(l || t).direction === "rtl" && (b += vr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: b, y: h };
}
__name(Pl, "Pl");
u(Pl, "getDocumentRect");
function Fn(r) {
  var e = zt(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(Fn, "Fn");
u(Fn, "isScrollParent");
function Ja(r) {
  return ["html", "body", "#document"].indexOf(dt(r)) >= 0 ? r.ownerDocument.body : lt(r) && Fn(r) ? r : Ja(Br(r));
}
__name(Ja, "Ja");
u(Ja, "getScrollParent");
function sn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Ja(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Je(i), f = l ? [c].concat(c.visualViewport || [], Fn(i) ? i : []) : i, b = e.concat(f);
  return l ? b : b.concat(sn(Br(f)));
}
__name(sn, "sn");
u(sn, "listScrollParents");
function gi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(gi, "gi");
u(gi, "rectToClientRect");
function cv(r) {
  var e = Zt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(cv, "cv");
u(cv, "getInnerBoundingClientRect");
function lp(r, e) {
  return e === Va ? gi(Il(r)) : Tr(e) ? cv(e) : gi(Pl(bt(r)));
}
__name(lp, "lp");
u(lp, "getClientRectFromMixedType");
function pv(r) {
  var e = sn(Br(r)), t = ["absolute", "fixed"].indexOf(zt(r).position) >= 0, i = t && lt(r) ? mr(r) : r;
  return Tr(i) ? e.filter(function(l) {
    return Tr(l) && co(l, i) && dt(l) !== "body";
  }) : [];
}
__name(pv, "pv");
u(pv, "getClippingParents");
function Al(r, e, t) {
  var i = e === "clippingParents" ? pv(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(b, h) {
    var d = lp(r, h);
    return b.top = vr(d.top, b.top), b.right = Ln(d.right, b.right), b.bottom = Ln(d.bottom, b.bottom), b.left = vr(d.left, b.left), b;
  }, lp(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(Al, "Al");
u(Al, "getClippingRect");
function vo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? ft(i) : null, c = i ? Qt(i) : null, f = e.x + e.width / 2 - t.width / 2, b = e.y + e.height / 2 - t.height / 2, h;
  switch (l) {
    case Ve:
      h = { x: f, y: e.y - t.height };
      break;
    case st:
      h = { x: f, y: e.y + e.height };
      break;
    case tt:
      h = { x: e.x + e.width, y: b };
      break;
    case Qe:
      h = { x: e.x - t.width, y: b };
      break;
    default:
      h = { x: e.x, y: e.y };
  }
  var d = l ? Hn(l) : null;
  if (d != null) {
    var v = d === "y" ? "height" : "width";
    switch (c) {
      case jr:
        h[d] = h[d] - (e[v] / 2 - t[v] / 2);
        break;
      case Gn:
        h[d] = h[d] + (e[v] / 2 - t[v] / 2);
        break;
      default:
    }
  }
  return h;
}
__name(vo, "vo");
u(vo, "computeOffsets");
function gr(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? Kc : c, b = t.rootBoundary, h = b === void 0 ? Va : b, d = t.elementContext, v = d === void 0 ? vi : d, w = t.altBoundary, y = w === void 0 ? false : w, S = t.padding, O = S === void 0 ? 0 : S, M = fo(typeof O != "number" ? O : ho(O, an)), _ = v === vi ? ep : vi, $ = r.rects.popper, L = r.elements[y ? _ : v], F = Al(Tr(L) ? L : L.contextElement || bt(r.elements.popper), f, h), I = Zt(r.elements.reference), Q = vo({ reference: I, element: $, strategy: "absolute", placement: l }), z = gi(Object.assign({}, $, Q)), j = v === vi ? z : I, Y = { top: F.top - j.top + M.top, bottom: j.bottom - F.bottom + M.bottom, left: F.left - j.left + M.left, right: j.right - F.right + M.right }, K = r.modifiersData.offset;
  if (v === vi && K) {
    var ie = K[l];
    Object.keys(Y).forEach(function(ne) {
      var ce = [tt, st].indexOf(ne) >= 0 ? 1 : -1, W = [Ve, st].indexOf(ne) >= 0 ? "y" : "x";
      Y[ne] += ie[W] * ce;
    });
  }
  return Y;
}
__name(gr, "gr");
u(gr, "detectOverflow");
function zl(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, b = t.flipVariations, h = t.allowedAutoPlacements, d = h === void 0 ? Ya : h, v = Qt(i), w = v ? b ? Ol : Ol.filter(function(O) {
    return Qt(O) === v;
  }) : an, y = w.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  y.length === 0 && (y = w);
  var S = y.reduce(function(O, M) {
    return O[M] = gr(r, { placement: M, boundary: l, rootBoundary: c, padding: f })[ft(M)], O;
  }, {});
  return Object.keys(S).sort(function(O, M) {
    return S[O] - S[M];
  });
}
__name(zl, "zl");
u(zl, "computeAutoPlacement");
function dv(r) {
  if (ft(r) === Ua)
    return [];
  var e = mi(r);
  return [Qa(r), e, Qa(e)];
}
__name(dv, "dv");
u(dv, "getExpandedFallbackPlacements");
function fv(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? true : f, h = t.fallbackPlacements, d = t.padding, v = t.boundary, w = t.rootBoundary, y = t.altBoundary, S = t.flipVariations, O = S === void 0 ? true : S, M = t.allowedAutoPlacements, _ = e.options.placement, $ = ft(_), L = $ === _, F = h || (L || !O ? [mi(_)] : dv(_)), I = [_].concat(F).reduce(function(Ot, Rt) {
      return Ot.concat(ft(Rt) === Ua ? zl(e, { placement: Rt, boundary: v, rootBoundary: w, padding: d, flipVariations: O, allowedAutoPlacements: M }) : Rt);
    }, []), Q = e.rects.reference, z = e.rects.popper, j = /* @__PURE__ */ new Map(), Y = true, K = I[0], ie = 0; ie < I.length; ie++) {
      var ne = I[ie], ce = ft(ne), W = Qt(ne) === jr, ue = [Ve, st].indexOf(ce) >= 0, De = ue ? "width" : "height", Ye = gr(e, { placement: ne, boundary: v, rootBoundary: w, altBoundary: y, padding: d }), je = ue ? W ? tt : Qe : W ? st : Ve;
      Q[De] > z[De] && (je = mi(je));
      var fe = mi(je), Ke = [];
      if (c && Ke.push(Ye[ce] <= 0), b && Ke.push(Ye[je] <= 0, Ye[fe] <= 0), Ke.every(function(Ot) {
        return Ot;
      })) {
        K = ne, Y = false;
        break;
      }
      j.set(ne, Ke);
    }
    if (Y)
      for (var rt = O ? 3 : 1, Ft = u(function(Rt) {
        var Wt = I.find(function(dr) {
          var Ut = j.get(dr);
          if (Ut)
            return Ut.slice(0, Rt).every(function(Lt) {
              return Lt;
            });
        });
        if (Wt)
          return K = Wt, "break";
      }, "_loop"), J = rt; J > 0; J--) {
        var pr = Ft(J);
        if (pr === "break")
          break;
      }
    e.placement !== K && (e.modifiersData[i]._skip = true, e.placement = K, e.reset = true);
  }
}
__name(fv, "fv");
u(fv, "flip");
var up = { name: "flip", enabled: true, phase: "main", fn: fv, requiresIfExists: ["offset"], data: { _skip: false } };
function cp(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(cp, "cp");
u(cp, "getSideOffsets");
function pp(r) {
  return [Ve, tt, st, Qe].some(function(e) {
    return r[e] >= 0;
  });
}
__name(pp, "pp");
u(pp, "isAnySideFullyClipped");
function hv(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = gr(e, { elementContext: "reference" }), b = gr(e, { altBoundary: true }), h = cp(f, i), d = cp(b, l, c), v = pp(h), w = pp(d);
  e.modifiersData[t] = { referenceClippingOffsets: h, popperEscapeOffsets: d, isReferenceHidden: v, hasPopperEscaped: w }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": v, "data-popper-escaped": w });
}
__name(hv, "hv");
u(hv, "hide");
var dp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hv };
function vv(r, e, t) {
  var i = ft(r), l = [Qe, Ve].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], b = c[1];
  return f = f || 0, b = (b || 0) * l, [Qe, tt].indexOf(i) >= 0 ? { x: b, y: f } : { x: f, y: b };
}
__name(vv, "vv");
u(vv, "distanceAndSkiddingToXY");
function mv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = Ya.reduce(function(v, w) {
    return v[w] = vv(w, e.rects, c), v;
  }, {}), b = f[e.placement], h = b.x, d = b.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += h, e.modifiersData.popperOffsets.y += d), e.modifiersData[i] = f;
}
__name(mv, "mv");
u(mv, "offset");
var fp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: mv };
function gv(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = vo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(gv, "gv");
u(gv, "popperOffsets");
var hp = { name: "popperOffsets", enabled: true, phase: "read", fn: gv, data: {} };
function _l(r) {
  return r === "x" ? "y" : "x";
}
__name(_l, "_l");
u(_l, "getAltAxis");
function bv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? false : f, h = t.boundary, d = t.rootBoundary, v = t.altBoundary, w = t.padding, y = t.tether, S = y === void 0 ? true : y, O = t.tetherOffset, M = O === void 0 ? 0 : O, _ = gr(e, { boundary: h, rootBoundary: d, padding: w, altBoundary: v }), $ = ft(e.placement), L = Qt(e.placement), F = !L, I = Hn($), Q = _l(I), z = e.modifiersData.popperOffsets, j = e.rects.reference, Y = e.rects.popper, K = typeof M == "function" ? M(Object.assign({}, e.rects, { placement: e.placement })) : M, ie = typeof K == "number" ? { mainAxis: K, altAxis: K } : Object.assign({ mainAxis: 0, altAxis: 0 }, K), ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ce = { x: 0, y: 0 };
  if (!!z) {
    if (c) {
      var W, ue = I === "y" ? Ve : Qe, De = I === "y" ? st : tt, Ye = I === "y" ? "height" : "width", je = z[I], fe = je + _[ue], Ke = je - _[De], rt = S ? -Y[Ye] / 2 : 0, Ft = L === jr ? j[Ye] : Y[Ye], J = L === jr ? -Y[Ye] : -j[Ye], pr = e.elements.arrow, Ot = S && pr ? jn(pr) : { width: 0, height: 0 }, Rt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : po(), Wt = Rt[ue], dr = Rt[De], Ut = Bn(0, j[Ye], Ot[Ye]), Lt = F ? j[Ye] / 2 - rt - Ut - Wt - ie.mainAxis : Ft - Ut - Wt - ie.mainAxis, yr = F ? -j[Ye] / 2 + rt + Ut + dr + ie.mainAxis : J + Ut + dr + ie.mainAxis, zr = e.elements.arrow && mr(e.elements.arrow), pn = zr ? I === "y" ? zr.clientTop || 0 : zr.clientLeft || 0 : 0, Oe = (W = ne == null ? void 0 : ne[I]) != null ? W : 0, dn = je + Lt - Oe - pn, fn = je + yr - Oe, Mt = Bn(S ? Ln(fe, dn) : fe, je, S ? vr(Ke, fn) : Ke);
      z[I] = Mt, ce[I] = Mt - je;
    }
    if (b) {
      var _r, Yn = I === "x" ? Ve : Qe, Yr = I === "x" ? st : tt, fr = z[Q], wt = Q === "y" ? "height" : "width", wr = fr + _[Yn], kt = fr - _[Yr], hn = [Ve, Qe].indexOf($) !== -1, Rr = (_r = ne == null ? void 0 : ne[Q]) != null ? _r : 0, vn = hn ? wr : fr - j[wt] - Y[wt] - Rr + ie.altAxis, Xr = hn ? fr + j[wt] + Y[wt] - Rr - ie.altAxis : kt, mn = S && hn ? np(vn, fr, Xr) : Bn(S ? vn : wr, fr, S ? Xr : kt);
      z[Q] = mn, ce[Q] = mn - fr;
    }
    e.modifiersData[i] = ce;
  }
}
__name(bv, "bv");
u(bv, "preventOverflow");
var vp = { name: "preventOverflow", enabled: true, phase: "main", fn: bv, requiresIfExists: ["offset"] };
function Rl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(Rl, "Rl");
u(Rl, "getHTMLElementScroll");
function kl(r) {
  return r === Je(r) || !lt(r) ? qn(r) : Rl(r);
}
__name(kl, "kl");
u(kl, "getNodeScroll");
function yv(r) {
  var e = r.getBoundingClientRect(), t = Hr(e.width) / r.offsetWidth || 1, i = Hr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(yv, "yv");
u(yv, "isElementScaled");
function Dl(r, e, t) {
  t === void 0 && (t = false);
  var i = lt(e), l = lt(e) && yv(e), c = bt(e), f = Zt(r, l), b = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 };
  return (i || !i && !t) && ((dt(e) !== "body" || Fn(c)) && (b = kl(e)), lt(e) ? (h = Zt(e, true), h.x += e.clientLeft, h.y += e.clientTop) : c && (h.x = $n(c))), { x: f.left + b.scrollLeft - h.x, y: f.top + b.scrollTop - h.y, width: f.width, height: f.height };
}
__name(Dl, "Dl");
u(Dl, "getCompositeRect");
function wv(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(b) {
      if (!t.has(b)) {
        var h = e.get(b);
        h && l(h);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(wv, "wv");
u(wv, "order");
function Nl(r) {
  var e = wv(r);
  return tp.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(Nl, "Nl");
u(Nl, "orderModifiers");
function Gl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(Gl, "Gl");
u(Gl, "debounce");
function Ll(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(Ll, "Ll");
u(Ll, "mergeByName");
var mp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function gp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(gp, "gp");
u(gp, "areValidElements");
function bp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? mp : l;
  return u(function(b, h, d) {
    d === void 0 && (d = c);
    var v = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, mp, c), modifiersData: {}, elements: { reference: b, popper: h }, attributes: {}, styles: {} }, w = [], y = false, S = { state: v, setOptions: u(function($) {
      var L = typeof $ == "function" ? $(v.options) : $;
      M(), v.options = Object.assign({}, c, v.options, L), v.scrollParents = { reference: Tr(b) ? sn(b) : b.contextElement ? sn(b.contextElement) : [], popper: sn(h) };
      var F = Nl(Ll([].concat(i, v.options.modifiers)));
      if (v.orderedModifiers = F.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var I;
        if (getBasePlacement(v.options.placement) === auto)
          var Q;
        var z, j, Y, K, ie;
      }
      return O(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!y) {
        var $ = v.elements, L = $.reference, F = $.popper;
        if (!!gp(L, F)) {
          v.rects = { reference: Dl(L, mr(F), v.options.strategy === "fixed"), popper: jn(F) }, v.reset = false, v.placement = v.options.placement, v.orderedModifiers.forEach(function(ne) {
            return v.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var I = 0, Q = 0; Q < v.orderedModifiers.length; Q++) {
            if (v.reset === true) {
              v.reset = false, Q = -1;
              continue;
            }
            var z = v.orderedModifiers[Q], j = z.fn, Y = z.options, K = Y === void 0 ? {} : Y, ie = z.name;
            typeof j == "function" && (v = j({ state: v, options: K, name: ie, instance: S }) || v);
          }
        }
      }
    }, "forceUpdate"), update: Gl(function() {
      return new Promise(function(_) {
        S.forceUpdate(), _(v);
      });
    }), destroy: u(function() {
      M(), y = true;
    }, "destroy") };
    if (!gp(b, h))
      return S;
    S.setOptions(d).then(function(_) {
      !y && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function O() {
      v.orderedModifiers.forEach(function(_) {
        var $ = _.name, L = _.options, F = L === void 0 ? {} : L, I = _.effect;
        if (typeof I == "function") {
          var Q = I({ state: v, name: $, instance: S, options: F }), z = u(function() {
          }, "noopFn");
          w.push(Q || z);
        }
      });
    }
    __name(O, "O");
    u(O, "runModifierEffects");
    function M() {
      w.forEach(function(_) {
        return _();
      }), w = [];
    }
    __name(M, "M");
    return u(M, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(bp, "bp");
u(bp, "popperGenerator");
var xv = [sp, hp, ap, uo, fp, up, vp, ip, dp];
var jl = bp({ defaultModifiers: xv });
var Ev = "tippy-box";
var Ip = "tippy-content";
var Sv = "tippy-backdrop";
var Pp = "tippy-arrow";
var Ap = "tippy-svg-arrow";
var Wn = { passive: true, capture: true };
var zp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Hl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(Hl, "Hl");
u(Hl, "getValueAtIndexOrReturn");
function Ul(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Ul, "Ul");
u(Ul, "isType");
function _p(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(_p, "_p");
u(_p, "invokeWithArgsOrReturn");
function yp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(yp, "yp");
u(yp, "debounce");
function Tv(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Tv, "Tv");
u(Tv, "splitBySpaces");
function bi(r) {
  return [].concat(r);
}
__name(bi, "bi");
u(bi, "normalizeToArray");
function wp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(wp, "wp");
u(wp, "pushIfUnique");
function Cv(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(Cv, "Cv");
u(Cv, "unique");
function Ov(r) {
  return r.split("-")[0];
}
__name(Ov, "Ov");
u(Ov, "getBasePlacement");
function es(r) {
  return [].slice.call(r);
}
__name(es, "es");
u(es, "arrayFrom");
function xp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(xp, "xp");
u(xp, "removeUndefinedProps");
function mo() {
  return document.createElement("div");
}
__name(mo, "mo");
u(mo, "div");
function ts(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Ul(r, e);
  });
}
__name(ts, "ts");
u(ts, "isElement");
function Mv(r) {
  return Ul(r, "NodeList");
}
__name(Mv, "Mv");
u(Mv, "isNodeList");
function Iv(r) {
  return Ul(r, "MouseEvent");
}
__name(Iv, "Iv");
u(Iv, "isMouseEvent");
function Pv(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Pv, "Pv");
u(Pv, "isReferenceElement");
function Av(r) {
  return ts(r) ? [r] : Mv(r) ? es(r) : Array.isArray(r) ? r : es(document.querySelectorAll(r));
}
__name(Av, "Av");
u(Av, "getArrayOfElements");
function Bl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(Bl, "Bl");
u(Bl, "setTransitionDuration");
function Ep(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(Ep, "Ep");
u(Ep, "setVisibilityState");
function zv(r) {
  var e, t = bi(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(zv, "zv");
u(zv, "getOwnerDocument");
function _v(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, b = l.props, h = b.interactiveBorder, d = Ov(f.placement), v = f.modifiersData.offset;
    if (!v)
      return true;
    var w = d === "bottom" ? v.top.y : 0, y = d === "top" ? v.bottom.y : 0, S = d === "right" ? v.left.x : 0, O = d === "left" ? v.right.x : 0, M = c.top - i + w > h, _ = i - c.bottom - y > h, $ = c.left - t + S > h, L = t - c.right - O > h;
    return M || _ || $ || L;
  });
}
__name(_v, "_v");
u(_v, "isCursorOutsideInteractiveBorder");
function ql(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(ql, "ql");
u(ql, "updateTransitionEndListener");
function Sp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(Sp, "Sp");
u(Sp, "actualContains");
var Cr = { isTouch: false };
var Tp = 0;
function Rv() {
  Cr.isTouch || (Cr.isTouch = true, window.performance && document.addEventListener("mousemove", Rp));
}
__name(Rv, "Rv");
u(Rv, "onDocumentTouchStart");
function Rp() {
  var r = performance.now();
  r - Tp < 20 && (Cr.isTouch = false, document.removeEventListener("mousemove", Rp)), Tp = r;
}
__name(Rp, "Rp");
u(Rp, "onDocumentMouseMove");
function kv() {
  var r = document.activeElement;
  if (Pv(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(kv, "kv");
u(kv, "onWindowBlur");
function Dv() {
  document.addEventListener("touchstart", Rv, Wn), window.addEventListener("blur", kv);
}
__name(Dv, "Dv");
u(Dv, "bindGlobalEventListeners");
var Nv = typeof window != "undefined" && typeof document != "undefined";
var Gv = Nv ? !!window.msCrypto : false;
var Lv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var jv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var br = Object.assign({ appendTo: zp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Lv, jv);
var Hv = Object.keys(br);
var Bv = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    br[i] = e[i];
  });
}, "setDefaultProps");
function kp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var b;
      i[c] = r[c] !== void 0 ? r[c] : (b = br[c]) != null ? b : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(kp, "kp");
u(kp, "getExtendedPassedProps");
function qv(r, e) {
  var t = e ? Object.keys(kp(Object.assign({}, br, { plugins: e }))) : Hv, i = t.reduce(function(l, c) {
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
__name(qv, "qv");
u(qv, "getDataAttributeProps");
function Cp(r, e) {
  var t = Object.assign({}, e, { content: _p(e.content, [r]) }, e.ignoreAttributes ? {} : qv(r, e.plugins));
  return t.aria = Object.assign({}, br.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(Cp, "Cp");
u(Cp, "evaluateProps");
var $v = u(function() {
  return "innerHTML";
}, "innerHTML");
function Fl(r, e) {
  r[$v()] = e;
}
__name(Fl, "Fl");
u(Fl, "dangerouslySetInnerHTML");
function Op(r) {
  var e = mo();
  return r === true ? e.className = Pp : (e.className = Ap, ts(r) ? e.appendChild(r) : Fl(e, r)), e;
}
__name(Op, "Op");
u(Op, "createArrowElement");
function Mp(r, e) {
  ts(e.content) ? (Fl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Fl(r, e.content) : r.textContent = e.content);
}
__name(Mp, "Mp");
u(Mp, "setContent");
function Wl(r) {
  var e = r.firstElementChild, t = es(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(Ip);
  }), arrow: t.find(function(i) {
    return i.classList.contains(Pp) || i.classList.contains(Ap);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Sv);
  }) };
}
__name(Wl, "Wl");
u(Wl, "getChildren");
function Dp(r) {
  var e = mo(), t = mo();
  t.className = Ev, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = mo();
  i.className = Ip, i.setAttribute("data-state", "hidden"), Mp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var b = Wl(e), h = b.box, d = b.content, v = b.arrow;
    f.theme ? h.setAttribute("data-theme", f.theme) : h.removeAttribute("data-theme"), typeof f.animation == "string" ? h.setAttribute("data-animation", f.animation) : h.removeAttribute("data-animation"), f.inertia ? h.setAttribute("data-inertia", "") : h.removeAttribute("data-inertia"), h.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? h.setAttribute("role", f.role) : h.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && Mp(d, r.props), f.arrow ? v ? c.arrow !== f.arrow && (h.removeChild(v), h.appendChild(Op(f.arrow))) : h.appendChild(Op(f.arrow)) : v && h.removeChild(v);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(Dp, "Dp");
u(Dp, "render");
Dp.$$tippy = true;
var Fv = 1;
var Ka = [];
var $l = [];
function Wv(r, e) {
  var t = Cp(r, Object.assign({}, br, kp(xp(e)))), i, l, c, f = false, b = false, h = false, d = false, v, w, y, S = [], O = yp(dn, t.interactiveDebounce), M, _ = Fv++, $ = null, L = Cv(t.plugins), F = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, I = { id: _, reference: r, popper: mo(), popperInstance: $, props: t, state: F, plugins: L, clearDelayTimeouts: vn, setProps: Xr, setContent: mn, show: Ti, hide: Ci, hideWithInteractivity: _o, enable: hn, disable: Rr, unmount: Ro, destroy: fs };
  if (!t.render)
    return I;
  var Q = t.render(I), z = Q.popper, j = Q.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + I.id, I.popper = z, r._tippy = I, z._tippy = I;
  var Y = L.map(function(N) {
    return N.fn(I);
  }), K = r.hasAttribute("aria-expanded");
  return zr(), rt(), je(), fe("onCreate", [I]), t.showOnCreate && wr(), z.addEventListener("mouseenter", function() {
    I.props.interactive && I.state.isVisible && I.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    I.props.interactive && I.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", O);
  }), I;
  function ie() {
    var N = I.props.touch;
    return Array.isArray(N) ? N : [N, 0];
  }
  __name(ie, "ie");
  u(ie, "getNormalizedTouchSettings");
  function ne() {
    return ie()[0] === "hold";
  }
  __name(ne, "ne");
  u(ne, "getIsCustomTouchBehavior");
  function ce() {
    var N;
    return !!((N = I.props.render) != null && N.$$tippy);
  }
  __name(ce, "ce");
  u(ce, "getIsDefaultRenderFn");
  function W() {
    return M || r;
  }
  __name(W, "W");
  u(W, "getCurrentTarget");
  function ue() {
    var N = W().parentNode;
    return N ? zv(N) : document;
  }
  __name(ue, "ue");
  u(ue, "getDocument");
  function De() {
    return Wl(z);
  }
  __name(De, "De");
  u(De, "getDefaultTemplateChildren");
  function Ye(N) {
    return I.state.isMounted && !I.state.isVisible || Cr.isTouch || v && v.type === "focus" ? 0 : Hl(I.props.delay, N ? 0 : 1, br.delay);
  }
  __name(Ye, "Ye");
  u(Ye, "getDelay");
  function je(N) {
    N === void 0 && (N = false), z.style.pointerEvents = I.props.interactive && !N ? "" : "none", z.style.zIndex = "" + I.props.zIndex;
  }
  __name(je, "je");
  u(je, "handleStyles");
  function fe(N, te, ae) {
    if (ae === void 0 && (ae = true), Y.forEach(function(he) {
      he[N] && he[N].apply(he, te);
    }), ae) {
      var Ie;
      (Ie = I.props)[N].apply(Ie, te);
    }
  }
  __name(fe, "fe");
  u(fe, "invokeHook");
  function Ke() {
    var N = I.props.aria;
    if (!!N.content) {
      var te = "aria-" + N.content, ae = z.id, Ie = bi(I.props.triggerTarget || r);
      Ie.forEach(function(he) {
        var ht = he.getAttribute(te);
        if (I.state.isVisible)
          he.setAttribute(te, ht ? ht + " " + ae : ae);
        else {
          var It = ht && ht.replace(ae, "").trim();
          It ? he.setAttribute(te, It) : he.removeAttribute(te);
        }
      });
    }
  }
  __name(Ke, "Ke");
  u(Ke, "handleAriaContentAttribute");
  function rt() {
    if (!(K || !I.props.aria.expanded)) {
      var N = bi(I.props.triggerTarget || r);
      N.forEach(function(te) {
        I.props.interactive ? te.setAttribute("aria-expanded", I.state.isVisible && te === W() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  __name(rt, "rt");
  u(rt, "handleAriaExpandedAttribute");
  function Ft() {
    ue().removeEventListener("mousemove", O), Ka = Ka.filter(function(N) {
      return N !== O;
    });
  }
  __name(Ft, "Ft");
  u(Ft, "cleanupInteractiveMouseListeners");
  function J(N) {
    if (!(Cr.isTouch && (h || N.type === "mousedown"))) {
      var te = N.composedPath && N.composedPath()[0] || N.target;
      if (!(I.props.interactive && Sp(z, te))) {
        if (bi(I.props.triggerTarget || r).some(function(ae) {
          return Sp(ae, te);
        })) {
          if (Cr.isTouch || I.state.isVisible && I.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [I, N]);
        I.props.hideOnClick === true && (I.clearDelayTimeouts(), I.hide(), b = true, setTimeout(function() {
          b = false;
        }), I.state.isMounted || Wt());
      }
    }
  }
  __name(J, "J");
  u(J, "onDocumentPress");
  function pr() {
    h = true;
  }
  __name(pr, "pr");
  u(pr, "onTouchMove");
  function Ot() {
    h = false;
  }
  __name(Ot, "Ot");
  u(Ot, "onTouchStart");
  function Rt() {
    var N = ue();
    N.addEventListener("mousedown", J, true), N.addEventListener("touchend", J, Wn), N.addEventListener("touchstart", Ot, Wn), N.addEventListener("touchmove", pr, Wn);
  }
  __name(Rt, "Rt");
  u(Rt, "addDocumentPress");
  function Wt() {
    var N = ue();
    N.removeEventListener("mousedown", J, true), N.removeEventListener("touchend", J, Wn), N.removeEventListener("touchstart", Ot, Wn), N.removeEventListener("touchmove", pr, Wn);
  }
  __name(Wt, "Wt");
  u(Wt, "removeDocumentPress");
  function dr(N, te) {
    Lt(N, function() {
      !I.state.isVisible && z.parentNode && z.parentNode.contains(z) && te();
    });
  }
  __name(dr, "dr");
  u(dr, "onTransitionedOut");
  function Ut(N, te) {
    Lt(N, te);
  }
  __name(Ut, "Ut");
  u(Ut, "onTransitionedIn");
  function Lt(N, te) {
    var ae = De().box;
    function Ie(he) {
      he.target === ae && (ql(ae, "remove", Ie), te());
    }
    __name(Ie, "Ie");
    if (u(Ie, "listener"), N === 0)
      return te();
    ql(ae, "remove", w), ql(ae, "add", Ie), w = Ie;
  }
  __name(Lt, "Lt");
  u(Lt, "onTransitionEnd");
  function yr(N, te, ae) {
    ae === void 0 && (ae = false);
    var Ie = bi(I.props.triggerTarget || r);
    Ie.forEach(function(he) {
      he.addEventListener(N, te, ae), S.push({ node: he, eventType: N, handler: te, options: ae });
    });
  }
  __name(yr, "yr");
  u(yr, "on");
  function zr() {
    ne() && (yr("touchstart", Oe, { passive: true }), yr("touchend", fn, { passive: true })), Tv(I.props.trigger).forEach(function(N) {
      if (N !== "manual")
        switch (yr(N, Oe), N) {
          case "mouseenter":
            yr("mouseleave", fn);
            break;
          case "focus":
            yr(Gv ? "focusout" : "blur", Mt);
            break;
          case "focusin":
            yr("focusout", Mt);
            break;
        }
    });
  }
  __name(zr, "zr");
  u(zr, "addListeners");
  function pn() {
    S.forEach(function(N) {
      var te = N.node, ae = N.eventType, Ie = N.handler, he = N.options;
      te.removeEventListener(ae, Ie, he);
    }), S = [];
  }
  __name(pn, "pn");
  u(pn, "removeListeners");
  function Oe(N) {
    var te, ae = false;
    if (!(!I.state.isEnabled || _r(N) || b)) {
      var Ie = ((te = v) == null ? void 0 : te.type) === "focus";
      v = N, M = N.currentTarget, rt(), !I.state.isVisible && Iv(N) && Ka.forEach(function(he) {
        return he(N);
      }), N.type === "click" && (I.props.trigger.indexOf("mouseenter") < 0 || f) && I.props.hideOnClick !== false && I.state.isVisible ? ae = true : wr(N), N.type === "click" && (f = !ae), ae && !Ie && kt(N);
    }
  }
  __name(Oe, "Oe");
  u(Oe, "onTrigger");
  function dn(N) {
    var te = N.target, ae = W().contains(te) || z.contains(te);
    if (!(N.type === "mousemove" && ae)) {
      var Ie = wt().concat(z).map(function(he) {
        var ht, It = he._tippy, xt = (ht = It.popperInstance) == null ? void 0 : ht.state;
        return xt ? { popperRect: he.getBoundingClientRect(), popperState: xt, props: t } : null;
      }).filter(Boolean);
      _v(Ie, N) && (Ft(), kt(N));
    }
  }
  __name(dn, "dn");
  u(dn, "onMouseMove");
  function fn(N) {
    var te = _r(N) || I.props.trigger.indexOf("click") >= 0 && f;
    if (!te) {
      if (I.props.interactive) {
        I.hideWithInteractivity(N);
        return;
      }
      kt(N);
    }
  }
  __name(fn, "fn");
  u(fn, "onMouseLeave");
  function Mt(N) {
    I.props.trigger.indexOf("focusin") < 0 && N.target !== W() || I.props.interactive && N.relatedTarget && z.contains(N.relatedTarget) || kt(N);
  }
  __name(Mt, "Mt");
  u(Mt, "onBlurOrFocusOut");
  function _r(N) {
    return Cr.isTouch ? ne() !== N.type.indexOf("touch") >= 0 : false;
  }
  __name(_r, "_r");
  u(_r, "isEventListenerStopped");
  function Yn() {
    Yr();
    var N = I.props, te = N.popperOptions, ae = N.placement, Ie = N.offset, he = N.getReferenceClientRect, ht = N.moveTransition, It = ce() ? Wl(z).arrow : null, xt = he ? { getBoundingClientRect: he, contextElement: he.contextElement || W() } : r, ko = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Et) {
      var St = Et.state;
      if (ce()) {
        var kr = De(), Xn = kr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Zn) {
          Zn === "placement" ? Xn.setAttribute("data-placement", St.placement) : St.attributes.popper["data-popper-" + Zn] ? Xn.setAttribute("data-" + Zn, "") : Xn.removeAttribute("data-" + Zn);
        }), St.attributes.popper = {};
      }
    }, "fn") }, Vt = [{ name: "offset", options: { offset: Ie } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !ht } }, ko];
    ce() && It && Vt.push({ name: "arrow", options: { element: It, padding: 3 } }), Vt.push.apply(Vt, (te == null ? void 0 : te.modifiers) || []), I.popperInstance = jl(xt, z, Object.assign({}, te, { placement: ae, onFirstUpdate: y, modifiers: Vt }));
  }
  __name(Yn, "Yn");
  u(Yn, "createPopperInstance");
  function Yr() {
    I.popperInstance && (I.popperInstance.destroy(), I.popperInstance = null);
  }
  __name(Yr, "Yr");
  u(Yr, "destroyPopperInstance");
  function fr() {
    var N = I.props.appendTo, te, ae = W();
    I.props.interactive && N === zp || N === "parent" ? te = ae.parentNode : te = _p(N, [ae]), te.contains(z) || te.appendChild(z), I.state.isMounted = true, Yn();
  }
  __name(fr, "fr");
  u(fr, "mount");
  function wt() {
    return es(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(wt, "wt");
  u(wt, "getNestedPopperTree");
  function wr(N) {
    I.clearDelayTimeouts(), N && fe("onTrigger", [I, N]), Rt();
    var te = Ye(true), ae = ie(), Ie = ae[0], he = ae[1];
    Cr.isTouch && Ie === "hold" && he && (te = he), te ? i = setTimeout(function() {
      I.show();
    }, te) : I.show();
  }
  __name(wr, "wr");
  u(wr, "scheduleShow");
  function kt(N) {
    if (I.clearDelayTimeouts(), fe("onUntrigger", [I, N]), !I.state.isVisible) {
      Wt();
      return;
    }
    if (!(I.props.trigger.indexOf("mouseenter") >= 0 && I.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(N.type) >= 0 && f)) {
      var te = Ye(false);
      te ? l = setTimeout(function() {
        I.state.isVisible && I.hide();
      }, te) : c = requestAnimationFrame(function() {
        I.hide();
      });
    }
  }
  __name(kt, "kt");
  u(kt, "scheduleHide");
  function hn() {
    I.state.isEnabled = true;
  }
  __name(hn, "hn");
  u(hn, "enable");
  function Rr() {
    I.hide(), I.state.isEnabled = false;
  }
  __name(Rr, "Rr");
  u(Rr, "disable");
  function vn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(vn, "vn");
  u(vn, "clearDelayTimeouts");
  function Xr(N) {
    if (!I.state.isDestroyed) {
      fe("onBeforeUpdate", [I, N]), pn();
      var te = I.props, ae = Cp(r, Object.assign({}, te, xp(N), { ignoreAttributes: true }));
      I.props = ae, zr(), te.interactiveDebounce !== ae.interactiveDebounce && (Ft(), O = yp(dn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? bi(te.triggerTarget).forEach(function(Ie) {
        Ie.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), rt(), je(), j && j(te, ae), I.popperInstance && (Yn(), wt().forEach(function(Ie) {
        requestAnimationFrame(Ie._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [I, N]);
    }
  }
  __name(Xr, "Xr");
  u(Xr, "setProps");
  function mn(N) {
    I.setProps({ content: N });
  }
  __name(mn, "mn");
  u(mn, "setContent");
  function Ti() {
    var N = I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Ie = Cr.isTouch && !I.props.touch, he = Hl(I.props.duration, 0, br.duration);
    if (!(N || te || ae || Ie) && !W().hasAttribute("disabled") && (fe("onShow", [I], false), I.props.onShow(I) !== false)) {
      if (I.state.isVisible = true, ce() && (z.style.visibility = "visible"), je(), Rt(), I.state.isMounted || (z.style.transition = "none"), ce()) {
        var ht = De(), It = ht.box, xt = ht.content;
        Bl([It, xt], 0);
      }
      y = u(function() {
        var Vt;
        if (!(!I.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = I.props.moveTransition, ce() && I.props.animation) {
            var Oi = De(), Et = Oi.box, St = Oi.content;
            Bl([Et, St], he), Ep([Et, St], "visible");
          }
          Ke(), rt(), wp($l, I), (Vt = I.popperInstance) == null || Vt.forceUpdate(), fe("onMount", [I]), I.props.animation && ce() && Ut(he, function() {
            I.state.isShown = true, fe("onShown", [I]);
          });
        }
      }, "onFirstUpdate"), fr();
    }
  }
  __name(Ti, "Ti");
  u(Ti, "show");
  function Ci() {
    var N = !I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Ie = Hl(I.props.duration, 1, br.duration);
    if (!(N || te || ae) && (fe("onHide", [I], false), I.props.onHide(I) !== false)) {
      if (I.state.isVisible = false, I.state.isShown = false, d = false, f = false, ce() && (z.style.visibility = "hidden"), Ft(), Wt(), je(true), ce()) {
        var he = De(), ht = he.box, It = he.content;
        I.props.animation && (Bl([ht, It], Ie), Ep([ht, It], "hidden"));
      }
      Ke(), rt(), I.props.animation ? ce() && dr(Ie, I.unmount) : I.unmount();
    }
  }
  __name(Ci, "Ci");
  u(Ci, "hide");
  function _o(N) {
    ue().addEventListener("mousemove", O), wp(Ka, O), O(N);
  }
  __name(_o, "_o");
  u(_o, "hideWithInteractivity");
  function Ro() {
    I.state.isVisible && I.hide(), !!I.state.isMounted && (Yr(), wt().forEach(function(N) {
      N._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), $l = $l.filter(function(N) {
      return N !== I;
    }), I.state.isMounted = false, fe("onHidden", [I]));
  }
  __name(Ro, "Ro");
  u(Ro, "unmount");
  function fs() {
    I.state.isDestroyed || (I.clearDelayTimeouts(), I.unmount(), pn(), delete r._tippy, I.state.isDestroyed = true, fe("onDestroy", [I]));
  }
  __name(fs, "fs");
  u(fs, "destroy");
}
__name(Wv, "Wv");
u(Wv, "createTippy");
function go(r, e) {
  e === void 0 && (e = {});
  var t = br.plugins.concat(e.plugins || []);
  Dv();
  var i = Object.assign({}, e, { plugins: t }), l = Av(r);
  if (false)
    var c, f;
  var b = l.reduce(function(h, d) {
    var v = d && Wv(d, i);
    return v && h.push(v), h;
  }, []);
  return ts(r) ? b[0] : b;
}
__name(go, "go");
u(go, "tippy");
go.defaultProps = br;
go.setDefaultProps = Bv;
go.currentInput = Cr;
var Tx = Object.assign({}, uo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
go.setDefaultProps({ render: Dp });
var Tt = go;
var Vl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Te(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = at({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = Tt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(l) {
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
      this.helpableService = et(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${Xe(i.value)}`);
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
  return u(e, "HelpableMixinClass"), A([k], e.prototype, "help", 2), A([k], e.prototype, "helpId", 2), A([k], e.prototype, "debugHelpable", 2), e;
}
__name(Te, "Te");
u(Te, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), A([k], e.prototype, "hoverable", 2), e;
}
__name(we, "we");
u(we, "HoverableMixin");
function* rs(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(rs, "rs");
u(rs, "parse");
var Np = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Np");
var ln = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "ln");
var Or;
var ns;
var qr = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Or.set(this, void 0), ns.set(this, ""), Np(this, Or, e, "f"), ln(this, Or, "f").updateParent("");
  }
  get attributeName() {
    return ln(this, Or, "f").attr.name;
  }
  get attributeNamespace() {
    return ln(this, Or, "f").attr.namespaceURI;
  }
  get value() {
    return ln(this, ns, "f");
  }
  set value(e) {
    Np(this, ns, e || "", "f"), ln(this, Or, "f").updateParent(e);
  }
  get element() {
    return ln(this, Or, "f").element;
  }
  get booleanValue() {
    return ln(this, Or, "f").booleanValue;
  }
  set booleanValue(e) {
    ln(this, Or, "f").booleanValue = e;
  }
}, "qr");
u(qr, "AttributeTemplatePart");
Or = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap();
var bo = /* @__PURE__ */ __name(class {
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
}, "bo");
u(bo, "AttributeValueSetter");
var Gp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Gp");
var yi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "yi");
var Mr;
var Jt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Mr.set(this, void 0), Gp(this, Mr, [e], "f"), e.textContent = "";
  }
  get value() {
    return yi(this, Mr, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return yi(this, Mr, "f")[0].previousSibling;
  }
  get nextSibling() {
    return yi(this, Mr, "f")[yi(this, Mr, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), yi(this, Mr, "f")[0].before(...t);
    for (let i of yi(this, Mr, "f"))
      i.remove();
    Gp(this, Mr, t, "f");
  }
}, "Jt");
u(Jt, "NodeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap();
function yo(r) {
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
__name(yo, "yo");
u(yo, "createProcessor");
function wo(r, e) {
  r.value = String(e);
}
__name(wo, "wo");
u(wo, "processPropertyIdentity");
function is(r, e) {
  return typeof e == "boolean" && r instanceof qr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(is, "is");
u(is, "processBooleanAttribute");
var Yl = yo(wo);
var Uv = yo((r, e) => {
  is(r, e) || wo(r, e);
});
var Lp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Lp");
var os = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "os");
var xo;
var Eo;
function* Vv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new bo(t, l);
          for (let f of rs(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let b = new qr(c, f.value);
              c.append(b), yield b;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of rs(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Jt(t, i.value));
        break;
      }
}
__name(Vv, "Vv");
u(Vv, "collectParts");
var un = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = Yl) {
    var l, c;
    super();
    xo.set(this, void 0), Eo.set(this, void 0), Object.getPrototypeOf(this) !== un.prototype && Object.setPrototypeOf(this, un.prototype), this.appendChild(e.content.cloneNode(true)), Lp(this, Eo, Array.from(Vv(this)), "f"), Lp(this, xo, i, "f"), (c = (l = os(this, xo, "f")).createCallback) === null || c === void 0 || c.call(l, this, os(this, Eo, "f"), t);
  }
  update(e) {
    os(this, xo, "f").processCallback(this, os(this, Eo, "f"), e);
  }
}, "un");
u(un, "TemplateInstance");
xo = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap();
var jp = /* @__PURE__ */ new WeakSet();
function Hp(r) {
  return jp.has(r);
}
__name(Hp, "Hp");
u(Hp, "isDirective");
function Bp(r, e) {
  return Hp(e) ? (e(r), true) : false;
}
__name(Bp, "Bp");
u(Bp, "processDirective");
function So(r) {
  return (...e) => {
    let t = r(...e);
    return jp.add(t), t;
  };
}
__name(So, "So");
u(So, "directive");
var To = /* @__PURE__ */ new WeakMap();
var Co = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), To.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), To.get(this.element).delete(this.type));
  }
  static for(e) {
    To.has(e.element) || To.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = To.get(e.element);
    return i.has(t) ? i.get(t) : new Co(e.element, t);
  }
}, "Co");
u(Co, "EventHandler");
function qp(r, e) {
  return r instanceof qr && r.attributeName.startsWith("on") ? (Co.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(qp, "qp");
u(qp, "processEvent");
function Yv(r, e) {
  return e instanceof wi && r instanceof Jt ? (e.renderInto(r), true) : false;
}
__name(Yv, "Yv");
u(Yv, "processSubTemplate");
function Xv(r, e) {
  return e instanceof DocumentFragment && r instanceof Jt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(Xv, "Xv");
u(Xv, "processDocumentFragment");
function Zv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(Zv, "Zv");
u(Zv, "isIterable");
function Qv(r, e) {
  if (!Zv(e))
    return false;
  if (r instanceof Jt) {
    let t = [];
    for (let i of e)
      if (i instanceof wi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
__name(Qv, "Qv");
u(Qv, "processIterable");
function as(r, e) {
  Bp(r, e) || is(r, e) || qp(r, e) || Yv(r, e) || Xv(r, e) || Qv(r, e) || wo(r, e);
}
__name(as, "as");
u(as, "processPart");
var Xl = /* @__PURE__ */ new WeakMap();
var $p = /* @__PURE__ */ new WeakMap();
var Fp = /* @__PURE__ */ new WeakMap();
var wi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Xl.has(this.strings))
      return Xl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Xl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if ($p.get(e) !== t) {
      $p.set(e, t);
      let i = new un(t, this.values, this.processor);
      Fp.set(e, i), e instanceof Jt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Fp.get(e).update(this.values);
  }
}, "wi");
u(wi, "TemplateResult");
var Jv = yo(as);
function U(r, ...e) {
  return new wi(r, e, Jv);
}
__name(U, "U");
u(U, "html");
function Z(r, e) {
  r.renderInto(e);
}
__name(Z, "Z");
u(Z, "render");
var Zl = /* @__PURE__ */ new WeakMap();
var Kv = So((...r) => (e) => {
  Zl.has(e) || Zl.set(e, { i: r.length });
  let t = Zl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, as(e, l));
    }) : i <= t.i && (t.i = i, as(e, r[i]));
});
var em = So((r) => (e) => {
  if (!(e instanceof Jt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function Me(r) {
  class e extends r {
    iconHtml(i) {
      return U`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return U([i]);
    }
    get iconStyle() {
      return U`<style>
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
__name(Me, "Me");
u(Me, "IconableMixin");
var $r = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Fe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), A([k], e.prototype, "if", 2), e;
}
__name(Fe, "Fe");
u(Fe, "IfableMixin");
var Ql = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ce(r) {
  class e extends r {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = Tt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var i, l, c, f;
        (i = this.ifTooltip) == null || i.hide(), (l = this.angleTooltip) == null || l.hide(), (c = this.flagTooltip) == null || c.hide(), (f = this.deleteTooltip) == null || f.hide();
      } }));
    }
    showMenu() {
      this.menu.show();
    }
    hideMenu() {
      this.menu.hide();
    }
    destroyMenu() {
      this.menu.destroy();
    }
    dispatchShowMenuEvent() {
      this.dispatchEvent(new Event("operation-show-menu", { bubbles: true }));
    }
    get menuContent() {
      let i = document.getElementById("operation-menu");
      if (i === null || i.content === void 0)
        return null;
      let l = i.content.cloneNode(true), c = document.createDocumentFragment();
      return Z(U`${l}`, c), c;
    }
    initMenuItems(i) {
      if ($r(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        H.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Tt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Cn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        H.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Tt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Nn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        H.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Tt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      H.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Tt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
      this.dispatchEvent(new Event("draggable:delete", { bubbles: true }));
    }
  }
  __name(e, "e");
  return u(e, "MenuableMixinClass"), e;
}
__name(Ce, "Ce");
u(Ce, "MenuableMixin");
var ss = Tn(so(), 1);
var Fr = u((r) => r != null && typeof r.resizeable == "boolean", "isResizeable");
function Wp(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.nqubit = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = at({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        ve("resizeable:init", {}, this);
      }, setInteract: (i, l) => {
        H.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT"), H.notNull(this.resizeHandle);
        let c = (0, ss.default)(this.resizeHandle);
        c.styleCursor(false), c.on("down", this.grabResizeHandle.bind(this)), c.on("up", this.releaseResizeHandle.bind(this)), c.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (i, l) => {
        H.need(l.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, ve("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (i, l) => {
        H.need(l.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false;
      }, startResizing: (i, l) => {
        H.need(l.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (i, l) => {
        H.need(l.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), ve("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), ve("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = et(this.resizeableMachine).onTransition((i) => {
        this.debugResizeable && console.log(`resizeable: ${Xe(i.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(i) {
      i ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(i) {
      (0, ss.default)(this.resizeHandle).draggable({ modifiers: [ss.default.modifiers.snap({ targets: i, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(i) {
      let l = i.modifiers[0];
      if (!l.inRange)
        return;
      let c = l.target.source;
      ve("resizeable:resize-handle-in-snap-range", { snapTargetInfo: c }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
    }
    grabResizeHandle(i) {
      if (i.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: grabResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "GRAB_RESIZE_HANDLE", x: i.offsetX, y: i.offsetY });
    }
    releaseResizeHandle(i) {
      if (i.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: releaseResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "RELEASE_RESIZE_HANDLE" });
    }
    startResizing() {
      this.resizeableService.send({ type: "START_RESIZING" });
    }
    moveResizeHandle(i) {
      let l = this.resizeHandleX + i.dx, c = this.resizeHandleY + i.dy;
      this.moveResizeHandleTo(l, c);
    }
    moveResizeHandleTo(i, l) {
      this.resizeHandleX = i, this.resizeHandleY = l, this.resizeHandle.style.transform = `translate(${i}px, ${l}px)`;
    }
    endResizing() {
      this.resizeableService.send({ type: "END_RESIZING" });
    }
  }
  __name(e, "e");
  return u(e, "ResizeableMixinClass"), A([k], e.prototype, "nqubit", 2), A([k], e.prototype, "resizeHandleX", 2), A([k], e.prototype, "resizeHandleY", 2), A([k], e.prototype, "debugResizeable", 2), A([k], e.prototype, "resizing", 2), A([xe], e.prototype, "resizeHandle", 2), e;
}
__name(Wp, "Wp");
u(Wp, "ResizeableMixin");
function Up(r) {
  return /^-?\d+$/.test(r);
}
__name(Up, "Up");
u(Up, "isNumeric");
function yt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(yt, "yt");
u(yt, "forceSigned");
var ut = /* @__PURE__ */ __name(class extends Ce(Te(Se(Ee(we(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Ys;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (H.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this.popup;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    this.popup = Tt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(i) {
      i.setContent(t);
    } }), this.popup.show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return Z(U`
        <header>
          <h1>Local State</h1>
        </header>

        <div class="body">
          <section>
            r:
            <span class="font-mono font-bold">${yt(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${yt(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${yt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${yt(this.x)}</span>, y:
            <span class="font-mono font-bold">${yt(this.y)}</span>, z:
            <span class="font-mono font-bold">${yt(this.z)}</span>
          </section>
        </div>
      `, e), e;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let e = this.popup;
    e == null || e.destroy();
  }
  attributeChangedCallback(e, t, i) {
    !this.body || t !== i && i !== null && (e === "data-x" && (this.x = parseFloat(i)), e === "data-y" && (this.y = parseFloat(i)), e === "data-z" && (this.z = parseFloat(i)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = u((i) => U`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => U`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Z(U`<style>
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

          .font-mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
          }

          .font-bold {
            font-weight: 700;
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
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ys}"`;
  }
  updateBlochVector() {
    var t;
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (t = this.popup) == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return H.notNull(e), parseFloat(e);
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
    return H.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return H.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
}, "ut");
u(ut, "BlochDisplayElement"), A([xe], ut.prototype, "body", 2), A([xe], ut.prototype, "vectorLine", 2), A([xe], ut.prototype, "vectorEnd", 2), A([xe], ut.prototype, "vector", 2), A([At], ut.prototype, "vectorEndCircles", 2), A([k], ut.prototype, "x", 2), A([k], ut.prototype, "y", 2), A([k], ut.prototype, "z", 2);
ee(ut);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var qt = /* @__PURE__ */ __name(class extends Ce(Te(Se(Re(Me(Ee(we(HTMLElement))))))) {
  get operationType() {
    return Xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Vp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Xs}"`;
  }
}, "qt");
u(qt, "ControlGateElement");
ee(qt);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Yp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ha}<${this.if}"` : `"${ha}"`;
  }
}, "Kt");
u(Kt, "HGateElement");
ee(Kt);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ce(Te(Jc(Se(Me(Ee(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(Xp)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${va}"` : `"${va}>${this.flag}"`;
  }
}, "er");
u(er, "MeasurementGateElement"), A([k], er.prototype, "value", 2);
ee(er);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(nn(Se(Re(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Zp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ma}"` : `"${ma}(${this.angle.replace("/", "_")})"`;
  }
}, "tr");
u(tr, "PhaseGateElement");
ee(tr);
var ls = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var Qp = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="26.2" y1="7.47778" x2="29.2" y2="7.47778" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="27.7" y1="6" x2="27.7" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="20.0973" y1="12" x2="25.0353" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="22.7" y1="13" x2="22.7" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="13" y1="12" x2="16.4513" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="14" y1="16" x2="16" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="13" y1="12" x2="13" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M8.9292 16C8.9292 18.4379 7.39801 20 5.9646 20C4.53119 20 3 18.4379 3 16C3 13.5621 4.53119 12 5.9646 12C7.39801 12 8.9292 13.5621 8.9292 16Z" stroke="currentColor" stroke-width="2"/>
  <line x1="1" y1="-1" x2="3.34292" y2="-1" transform="matrix(0.570556 0.821259 -0.805999 0.591917 5.9646 18.5332)" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Ir = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(Qp)}</div>
          <div part="resize-handle">${this.iconHtml(ls)}</div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ba}<${this.if}"` : `"${ba}"`;
  }
}, "Ir");
u(Ir, "QftDaggerGateElement");
ee(Ir);
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Pr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Wp(Se(Re(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(Jp)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            ${this.iconHtml(ls)}
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ga}${this.nqubit}<${this.if}"` : `"${ga}${this.nqubit}"`;
  }
}, "Pr");
u(Pr, "QftGateElement");
ee(Pr);
var Kp = `<svg
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
var rr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Kp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ya}<${this.if}"` : `"${ya}"`;
  }
}, "rr");
u(rr, "RnotGateElement");
ee(rr);
var ed = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(nn(Se(Re(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ed)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${wa}"` : `"${wa}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "RxGateElement");
ee(nr);
var td = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(nn(Se(Re(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(td)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xa}"` : `"${xa}(${this.angle.replace("/", "_")})"`;
  }
}, "ir");
u(ir, "RyGateElement");
ee(ir);
var rd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(nn(Se(Re(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(rd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ea}"` : `"${Ea}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RzGateElement");
ee(or);
var nd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ce(Te(Be(Se(Re(Me(Ee(we(HTMLElement)))))))) {
  get operationType() {
    return Zs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(nd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Zs}"`;
  }
}, "ar");
u(ar, "SwapGateElement");
ee(ar);
var id = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(id)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Sa}<${this.if}"` : `"${Sa}"`;
  }
}, "sr");
u(sr, "TGateElement");
ee(sr);
var od = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var $t = /* @__PURE__ */ __name(class extends Ce(Te(Se(Me(Ee(we(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return sc;
      case "1":
        return lc;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(od)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "$t");
u($t, "WriteGateElement"), A([k], $t.prototype, "value", 2);
ee($t);
var ad = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ad)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ta}<${this.if}"` : `"${Ta}"`;
  }
}, "lr");
u(lr, "XGateElement");
ee(lr);
var sd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(sd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ca}<${this.if}"` : `"${Ca}"`;
  }
}, "ur");
u(ur, "YGateElement");
ee(ur);
var ld = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends Ce(Te(Fe(Be(Se(Re(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ld)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Oa}<${this.if}"` : `"${Oa}"`;
  }
}, "cr");
u(cr, "ZGateElement");
ee(cr);
var Ue = u((r) => r instanceof Kt || r instanceof lr || r instanceof ur || r instanceof cr || r instanceof tr || r instanceof sr || r instanceof rr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof ar || r instanceof qt || r instanceof ut || r instanceof $t || r instanceof er || r instanceof Pr || r instanceof Ir, "isOperation");
var ud = u((r) => r != null && r instanceof Kt, "isHGateElement");
var cd = u((r) => r != null && r instanceof lr, "isXGateElement");
var pd = u((r) => r != null && r instanceof ur, "isYGateElement");
var dd = u((r) => r != null && r instanceof cr, "isZGateElement");
var Oo = u((r) => r != null && r instanceof tr, "isPhaseGateElement");
var fd = u((r) => r != null && r instanceof sr, "isTGateElement");
var hd = u((r) => r != null && r instanceof rr, "isRnotGateElement");
var us = u((r) => r != null && r instanceof nr, "isRxGateElement");
var cs = u((r) => r != null && r instanceof ir, "isRyGateElement");
var ps = u((r) => r != null && r instanceof or, "isRzGateElement");
var vd = u((r) => r != null && r instanceof ar, "isSwapGateElement");
var Jl = u((r) => r != null && r instanceof qt, "isControlGateElement");
var md = u((r) => r != null && r instanceof ut, "isBlochDisplayElement");
var jC = u((r) => r != null && r instanceof $t, "isWriteGateElement");
var gd = u((r) => r != null && r instanceof er, "isMeasurementGateElement");
var Mo = Tn(so(), 1);
var Kl = u((r) => r !== null && r instanceof Wr, "isAngleSliderElement");
var Wr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = at({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new it("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = Fi(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(rc(this.angle));
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
    this.angleSliderService = et(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Xe(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Mo.default)(this).unset();
  }
  update() {
    Z(U`<style>
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
    (0, Mo.default)(this).draggable({ origin: "self", modifiers: [Mo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = Mo.default.getElementRect(e.target).width, i = e.pageX / t;
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
    return H.notNull(i), H.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Wr");
u(Wr, "AngleSliderElement"), A([k], Wr.prototype, "angle", 2), A([k], Wr.prototype, "radian", 2), A([k], Wr.prototype, "denominator", 2), A([k], Wr.prototype, "disabled", 2), A([k], Wr.prototype, "debug", 2);
ee(Wr);
var Io = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let t = e.currentTarget;
    H.notNull(t);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    t.setAttribute("data-active", "");
  }
}, "Io");
u(Io, "ButtonGroupElement"), A([At], Io.prototype, "buttons", 2), Io = A([ee], Io);
var xi = Tn(yd(), 1);
var ct = /* @__PURE__ */ __name(class extends HTMLElement {
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
    t !== i && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (H.notNull(i), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new it("unsupported qubit count", this.qubitCount);
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
          throw new it("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let t = e.getAttribute("data-ket");
      return H.notNull(t), parseInt(t);
    }), H.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    xi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        H.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, b = c.phase() / Math.PI * 180;
        t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? t.classList.add("magnitude-0") : (t.classList.remove("magnitude-0"), t.style.setProperty("--magnitude", f.toString()));
        let h = Math.trunc(b);
        h < 0 && (h = 360 + h), t.style.setProperty("--phase", `-${h.toString()}deg`);
      }
    });
  }
  renderShadowRoot() {
    Z(U`<style>
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
        throw new it("unsupported qubit count", this.qubitCount);
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
        throw new it("unsupported qubit count", this.qubitCount);
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
        throw new it("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && xi.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (xi.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = e; f <= t; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), xi.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let t of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(t);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    xi.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let t = e.getAttribute("data-col"), i = e.getAttribute("data-row");
        H.notNull(t), H.notNull(i);
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
        throw new it("unsupported qubit count", this.qubitCount);
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
    H.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = Tt(t, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    H.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    H.notNull(c);
    let f = t.getAttribute("data-amplitude-imag");
    H.notNull(f);
    let b = parseInt(l), h = parseFloat(c), d = parseFloat(f), v = new en(h, d), w = v.abs(), y = v.phase() / Math.PI * 180, S = document.importNode(this.qubitCirclePopupTemplate.content, true), O = S.getElementById("qubit-circle-popup--ket-binary-value"), M = S.getElementById("qubit-circle-popup--ket-decimal-value"), _ = S.getElementById("qubit-circle-popup--amplitude"), $ = S.getElementById("qubit-circle-popup--amplitude-real-value"), L = S.getElementById("qubit-circle-popup--amplitude-imag-value"), F = S.getElementById("qubit-circle-popup--probability"), I = S.getElementById("qubit-circle-popup--probability-value"), Q = S.getElementById("qubit-circle-popup--phase"), z = S.getElementById("qubit-circle-popup--phase-value");
    H.notNull(_), H.notNull($), H.notNull(L), H.notNull(F), H.notNull(I), H.notNull(Q), H.notNull(z), O && (O.textContent = b.toString(2).padStart(this.qubitCount, "0")), M && (M.textContent = b.toString()), this.showQubitCirclePopupAmplitude ? ($.textContent = yt(v.real, 5), L.textContent = `${yt(v.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? I.textContent = `${yt(w * w * 100, 4)}%` : F.style.display = "none", this.showQubitCirclePopupPhase ? z.textContent = `${yt(y, 2)}\xB0` : Q.style.display = "none";
    let j = document.createElement("div");
    j.appendChild(S), i.setContent(j.innerHTML), i.show();
  }
  hideQubitCirclePopup(e) {
    let t = e.target;
    H.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    H.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "ct");
u(ct, "CircleNotationElement"), A([k], ct.prototype, "qubitCount", 2), A([k], ct.prototype, "qubitCircleSize", 2), A([k], ct.prototype, "colCount", 2), A([k], ct.prototype, "rowCount", 2), A([k], ct.prototype, "paddingX", 2), A([k], ct.prototype, "paddingY", 2), A([k], ct.prototype, "overscanCount", 2), A([k], ct.prototype, "colorPhase", 2), A([k], ct.prototype, "qubitCirclePopupTemplateId", 2), A([k], ct.prototype, "showQubitCirclePopupAmplitude", 2), A([k], ct.prototype, "showQubitCirclePopupProbability", 2), A([k], ct.prototype, "showQubitCirclePopupPhase", 2), A([xe], ct.prototype, "window", 2), A([xe], ct.prototype, "innerContainer", 2), A([At], ct.prototype, "qubitCircles", 2), ct = A([ee], ct);
var Po = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(U`<slot></slot>`, this.shadowRoot);
  }
}, "Po");
u(Po, "CircleNotationPanelElement"), A([xe], Po.prototype, "circleNotation", 2), Po = A([ee], Po);
var wd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var xd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(U`
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
            ${this.iconHtml(wd)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(xd)}
          </button>

          <div id="body">
            <slot></slot>

            <div id="dot-group">${this.dotsHtml()}</div>
          </div>
        </div>
      `, this.shadowRoot);
  }
  iconHtml(e) {
    return U([e]);
  }
  dotsHtml() {
    let e = U``;
    for (let t = 0; t < this.gateSets.length; t++)
      e = U`${e}
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
    H.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), H.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
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
    return H.notNull(e), e;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((e) => {
      let t = e.children.item(0);
      return H.need(Ue(t), `${t} must be an operation.`), t;
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
      H.need(e < 4, "#popinGates must be < 4");
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
}, "Ur");
u(Ur, "GateCarouselElement"), A([k], Ur.prototype, "currentGateSetIndex", 2), A([xe], Ur.prototype, "contentClipper", 2), A([At], Ur.prototype, "gateSets", 2), A([At], Ur.prototype, "dots", 2), A([At], Ur.prototype, "popinAnimationGates", 2), Ur = A([ee], Ur);
var tu = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
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
    return H.notNull(e), e;
  }
  initPopup() {
    this.popup = Tt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !Ue(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    H.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return Z(U`${t}`, i), i;
  }
}, "tu");
u(tu, "InspectorButtonElement");
ee(tu);
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
    return ac(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), $r(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Cn(e)) {
      let t = Fi(e.angle);
      Oo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (us(e) || cs(e) || ps(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Nn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!Kl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!Kl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    H.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (oc(e)) {
      let t, i = Fi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), nc(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : ic(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    H.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Up(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "_t");
u(_t, "OperationInspectorElement"), A([xe], _t.prototype, "ifInput", 2), A([xe], _t.prototype, "angleInputLabel", 2), A([xe], _t.prototype, "angleInput", 2), A([xe], _t.prototype, "angleSlider", 2), A([xe], _t.prototype, "denominatorInput", 2), A([xe], _t.prototype, "denominatorVariableLabel", 2), A([xe], _t.prototype, "denominatorLabel", 2), A([xe], _t.prototype, "reduceAngleFractionCheckbox", 2), A([xe], _t.prototype, "flagInput", 2), A([k], _t.prototype, "conditionalGatePaneDisabled", 2), A([k], _t.prototype, "anglePaneDisabled", 2), A([k], _t.prototype, "conditionalFlagPaneDisabled", 2);
ee(_t);
var ds = Tn(Sd(), 1);
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
    Z(U`<style>
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
    let e = Tt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let t = document.importNode(this.popupTemplate.content, true), i = new ds.default(this.amplitude), l = t.getElementById("qubit-circle-popup--header"), c = t.getElementById("qubit-circle-popup--ket-binary-value"), f = t.getElementById("qubit-circle-popup--ket-decimal-value"), b = t.getElementById("qubit-circle-popup--amplitude"), h = t.getElementById("qubit-circle-popup--amplitude-real-value"), d = t.getElementById("qubit-circle-popup--amplitude-imag-value"), v = t.getElementById("qubit-circle-popup--probability"), w = t.getElementById("qubit-circle-popup--probability-value"), y = t.getElementById("qubit-circle-popup--phase"), S = t.getElementById("qubit-circle-popup--phase-value");
    H.notNull(l), H.notNull(c), H.notNull(f), H.notNull(b), H.notNull(h), H.notNull(d), H.notNull(v), H.notNull(w), H.notNull(y), H.notNull(S), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (h.textContent = yt(i.re, 5), d.textContent = `${yt(i.im, 5)}i`) : b.style.display = "none", this.showPopupProbability ? w.textContent = `${yt(this.magnitude * this.magnitude * 100, 4)}%` : v.style.display = "none", this.showPopupPhase ? S.textContent = `${yt(this.phaseDeg, 2)}\xB0` : y.style.display = "none";
    let O = document.createElement("div");
    O.appendChild(t), e.setContent(O.innerHTML), e.show();
  }
  get magnitude() {
    return new ds.default(this.amplitude).abs();
  }
  get phase() {
    return new ds.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let e = this._tippy;
    H.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "Nt");
u(Nt, "QubitCircleElement"), A([k], Nt.prototype, "ket", 2), A([k], Nt.prototype, "qubitCount", 2), A([k], Nt.prototype, "amplitude", 2), A([k], Nt.prototype, "hidePhase", 2), A([k], Nt.prototype, "popupTemplateId", 2), A([k], Nt.prototype, "showPopupHeader", 2), A([k], Nt.prototype, "showPopupAmplitude", 2), A([k], Nt.prototype, "showPopupProbability", 2), A([k], Nt.prototype, "showPopupPhase", 2), A([k], Nt.prototype, "darkMode", 2), Nt = A([ee], Nt);
var Td = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Cd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Un = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = at({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), b = f.left + window.pageXOffset, h = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (b + c)}px`, i.style.top = `${t.clientY - (h + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = et(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Xe(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Z(U`<style>
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
    return U([Td]);
  }
  get tailSpinIcon() {
    return U([Cd]);
  }
}, "Un");
u(Un, "RunCircuitButtonElement"), A([k], Un.prototype, "running", 2), A([k], Un.prototype, "debug", 2), A([xe], Un.prototype, "body", 2), A([xe], Un.prototype, "ripple", 2);
ee(Un);
var Vr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(U`<slot></slot>`, this.shadowRoot);
  }
}, "Vr");
u(Vr, "SlideInElement"), A([k], Vr.prototype, "direction", 2), A([k], Vr.prototype, "directionDesktop", 2), A([k], Vr.prototype, "duration", 2), A([k], Vr.prototype, "marginTop", 2), A([k], Vr.prototype, "marginBottom", 2), Vr = A([ee], Vr);
var cn = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(U`<style>
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
}, "cn");
u(cn, "CircuitBlockElement"), A([k], cn.prototype, "comment", 2), A([k], cn.prototype, "finalized", 2), cn = A([ee], cn);
var Ar = u((r) => r != null && r instanceof Gt, "isCircuitStepElement");
var _e = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let f = e(i, l, c), b = t.get(f);
  return b ? b.push(i) : t.set(f, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Gt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = at({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      H.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && ve("circuit-step:qpu-operation-snap", { dropzone: t.dropzone }, this);
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && ve("circuit-step:qpu-operation-unsnap", { dropzone: t.dropzone }, this);
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && ve("circuit-step:delete-qpu-operation", { dropzone: t.dropzone }, this);
    }, dispatchResizeOperationEvent: (e, t) => {
      t.type === "RESIZE_OPERATION" && ve("circuit-step:resize-qpu-operation", { dropzone: t.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = et(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Xe(e.value)}`);
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
    this.circuitStepService.start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone:qpu-operation-snap", this.snapDropzone), this.addEventListener("circuit-dropzone:qpu-operation-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone:qpu-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone:qpu-operation-resize", this.resizeOperation), this.addEventListener("circuit-dropzone:qpu-operation-drop", this.unshadow), this.addEventListener("circuit-dropzone:occupied", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      On(l.operation) && (l.operation.controls = []);
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
        if (!Oo(f.operation))
          throw new Error(`${f.operation} isn't a phase-gate element.`);
        return l.angle === f.operation.angle;
      }).map((f) => this.bit(f));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((f) => f < this.bit(i)), i.connectBottom = c.some((f) => f > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((h) => h.connectTop || h.connectBottom).map((h) => this.bit(h)), f = Math.min(...c), b = Math.max(...c);
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
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((v) => v.operationName))], c = this.numControlGateDropzones(e, l), f = i.map((v) => this.bit(v)), b = c === null ? f : f.slice(0, c), h = t.map((v) => this.bit(v)), d = b.concat(h);
    for (let [v, w] of Object.entries(i)) {
      let y = w.operation;
      w.connectBottom = d.some((S) => this.bit(w) < S), w.connectTop = d.some((S) => this.bit(w) > S), c === null || c !== null && parseInt(v) < c ? y.enable() : (w.connectTop = Math.max(...d) > this.bit(w), y.disable());
    }
    for (let v of t) {
      if (!On(v.operation))
        throw new Error(`${v.operation} isn't controllable.`);
      v.operation.controls = this.controlBits(v, f, e), v.connectTop = d.some((w) => w < this.bit(v)), v.connectBottom = d.some((w) => w > this.bit(v));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((h) => Jl(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), l = t.map((h) => this.bit(h)), c = i.concat(l), f = Math.min(...c), b = Math.max(...c);
    for (let h of this.freeDropzones)
      f < this.bit(h) && this.bit(h) < b && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return H.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return H.notNull(t), t;
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
    return this.dropzones.filter((e) => e.occupied && Jl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, b = 0, h = 0, d = 0, v = 0, w = 0;
    return this.dropzones.filter((y) => y.occupied).filter((y) => On(y.operation)).filter((y) => e === void 0 ? true : ud(y.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : cd(y.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : pd(y.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : dd(y.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : Oo(y.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : fd(y.operation) ? (b += 1, e.maxCtTargetGates !== 0 && b > e.maxCtTargetGates ? false : !e.disableCt) : hd(y.operation) ? (h += 1, e.maxCrnotTargetGates !== 0 && h > e.maxCrnotTargetGates ? false : !e.disableCrnot) : us(y.operation) ? (d += 1, e.maxCrxTargetGates !== 0 && d > e.maxCrxTargetGates ? false : !e.disableCrx) : cs(y.operation) ? (v += 1, e.maxCryTargetGates !== 0 && v > e.maxCryTargetGates ? false : !e.disableCry) : ps(y.operation) ? (w += 1, e.maxCrzTargetGates !== 0 && w > e.maxCrzTargetGates ? false : !e.disableCrz) : vd(y.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    ve("circuit-step:update", {}, this);
  }
  deleteOperation(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: t });
  }
  resizeOperation(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "RESIZE_OPERATION", dropzone: t });
  }
  dispatchMouseenterEvent() {
    ve("circuit-step:mouseenter", {}, this);
  }
  dispatchMouseleaveEvent() {
    ve("circuit-step:mouseleave", {}, this);
  }
  maybeDispatchClickEvent(e) {
    Ue(e.target) || ve("circuit-step:click", {}, this);
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
    for (let [t, i] of _e(this.operations, (l) => l.constructor))
      switch (t) {
        case Kt: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, h] of _e(f, (d) => d.if))
              for (let [d, v] of _e(h, (w) => w.controls.toString())) {
                let w = v[0], y = w.operationType, S = v.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), e.push(O);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, h] of _e(f, (d) => d.if))
              for (let [d, v] of _e(h, (w) => w.controls.toString())) {
                let w = v[0], y = w.operationType, S = v.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), e.push(O);
              }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, h] of _e(f, (d) => d.if))
              for (let [d, v] of _e(h, (w) => w.controls.toString())) {
                let w = v[0], y = w.operationType, S = v.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), e.push(O);
              }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, h] of _e(f, (d) => d.if))
              for (let [d, v] of _e(h, (w) => w.controls.toString())) {
                let w = v[0], y = w.operationType, S = v.map((M) => M.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), e.push(O);
              }
          break;
        }
        case Pr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, nqubit: d.nqubit, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case Ir: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, h] of _e(f, (d) => d.controls.toString())) {
              let d = h[0], v = d.operationType, w = h.map((S) => S.bit), y = { type: v, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), e.push(y);
            }
          break;
        }
        case ar: {
          let l = i.filter((h) => !h.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, b = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (b.controls = f), e.push(b);
          break;
        }
        case qt: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => On(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case ut: {
          let l = i, c = i.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case $t: {
          let l = i;
          for (let [, c] of _e(l, (f) => f.value)) {
            let f = c.map((b) => b.bit);
            e.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case er: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.flag)) {
            let b = f.map((v) => v.bit), d = { type: f[0].operationType, targets: b };
            c !== "" && (d.flag = c), e.push(d);
          }
          break;
        }
        default:
          throw new it("Unrecognized operation", { klass: t });
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
}, "Gt");
u(Gt, "CircuitStepElement"), A([k], Gt.prototype, "active", 2), A([k], Gt.prototype, "breakpoint", 2), A([k], Gt.prototype, "shadow", 2), A([k], Gt.prototype, "keep", 2), A([k], Gt.prototype, "debug", 2);
ee(Gt);
var Md = Tn(so(), 1);
var Od = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Ei = u((r) => r != null && r instanceof Ct, "isCircuitDropzoneElement");
var Ao;
var Ct = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    da(this, Ao, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = at({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      H.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      H.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), ve("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.operationName = "", ve("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      ve("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(t.operation));
    }, resizeOperation: () => {
      ve("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      ve("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      ve("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = et(this.circuitDropzoneMachine).onTransition((e) => {
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
  get resizeHandleSnapTarget() {
    let e = this.getBoundingClientRect();
    return { x: window.pageXOffset + e.left + this.clientWidth / 2, y: window.pageYOffset + e.top + this.clientHeight + 4 };
  }
  toJson() {
    let e = this.operation;
    return e === null ? "1" : e.toJson();
  }
  connectedCallback() {
    let { signal: e } = fa(this, Ao, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = pa(this, Ao)) == null || e.abort();
  }
  update() {
    Z(U`<style>
          #body {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
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
  get circuitStep() {
    let e = this.parentElement;
    return H.notNull(e), Ar(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, Md.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
  }
  snap() {
    this.circuitDropzoneService.send({ type: "SNAP_OPERATION" });
  }
  unsnap() {
    this.circuitDropzoneService.send({ type: "UNSNAP_OPERATION" });
  }
  dropOperation() {
    this.circuitDropzoneService.send({ type: "DROP_OPERATION" });
  }
  deleteOperation(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  resizeOperation(e) {
    let t = e.target;
    if (!Fr(t))
      throw new Error(`${t} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([Od]);
  }
}, "Ct");
u(Ct, "CircuitDropzoneElement"), Ao = /* @__PURE__ */ new WeakMap(), A([k], Ct.prototype, "operationName", 2), A([k], Ct.prototype, "inputWireQuantum", 2), A([k], Ct.prototype, "outputWireQuantum", 2), A([k], Ct.prototype, "connectTop", 2), A([k], Ct.prototype, "connectBottom", 2), A([k], Ct.prototype, "shadow", 2), A([k], Ct.prototype, "debug", 2);
ee(Ct);
var Si = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = at({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["startCircuitEdit", "addDocumentCursorResizingStyle", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation;
      Ql(i) && i.menu && i.hideMenu();
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
        H.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), b = f.dropzones[l.wireIndex];
        H.notNull(b), b.append(i), b.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
      } else
        l.dropzone.append(i);
    }, snapResizeHandleIntoDropzone: (e, t) => {
      if (t.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let i = t.operation;
      if (!Fr(i))
        throw new Error(`${i} is not resizeable`);
      let l = i.dropzone;
      if (!Ei(l))
        throw new Error(`${l} is not a circuit dropzone`);
      H.notNull(l.circuitStep);
      let c = l.circuitStep.dropzones.indexOf(l), b = this.circuit.resizeHandleSnapTargetAt(t.x, t.y).wireIndex - c + 1;
      i.nqubit = b;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < this.circuit.maxWireCount && this.circuit.appendWire();
    }, maybeRemoveLastEmptyWires: () => {
      this.circuit.removeLastEmptyWires();
    }, resizeCircuit: () => {
      this.circuit.resize(), this.dispatchEvent(new Event("circuit-editor-resize", { bubbles: true }));
    }, setSnapTargets: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(t.operation);
    }, setResizeHandleSnapTargets: (e, t) => {
      t.type === "GRAB_RESIZE_HANDLE" && this.circuit.setResizeHandleSnapTargets(t.operation);
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
      Ql(i) && i.initMenu();
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
    this.circuitEditorService = et(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Xe(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let t = e.target;
    if (Wa(t))
      t.draggable = true;
    else
      throw new it("Not a draggable element.", { el: t });
  }
  enableResizing(e) {
    let t = e.target;
    if (Fr(t))
      t.resizeable = true;
    else
      throw new it("Not a resizeable element.", { el: t });
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
    !Ue(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: t });
  }
  showOperationInspectorIf(e) {
    let t = e.target;
    if (!$r(t))
      throw new Error(`${t} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: t });
  }
  showOperationInspectorAngle(e) {
    let t = e.target;
    if (!Cn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!Nn(t))
      throw new Error(`${t} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: t });
  }
  setOperationIf(e) {
    let t = e.target, i = this.activeOperation;
    if (!$r(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: t.if });
  }
  setOperationAngle(e) {
    let t = e.target, i = this.activeOperation;
    if (H.notNull(i), !Cn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!Nn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  grabResizeHandle(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  resizeEnd(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!Ar(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!Ar(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!Ar(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  resizeHandleInSnapRange(e) {
    let t = e.target;
    if (!Ue(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!Ar(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!Ar(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "Si");
u(Si, "CircuitEditorElement"), A([k], Si.prototype, "debug", 2), A([xe], Si.prototype, "circuit", 2), A([xe], Si.prototype, "inspectorButton", 2);
ee(Si);
var zo;
var nu = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    da(this, zo, null);
  }
  connectedCallback() {
    let { signal: e } = fa(this, zo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = pa(this, zo)) == null || e.abort();
  }
  update() {
    Z(U`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    Wa(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), Fr(e) && (e.resizeable = true), Vl(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => Ue(e));
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), Vl(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!Ue(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "nu");
u(nu, "PaletteDropzoneElement"), zo = /* @__PURE__ */ new WeakMap();
ee(nu);
var se = /* @__PURE__ */ __name(class extends we(HTMLElement) {
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
    this.quantumCircuitMachine = at({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = et(this.quantumCircuitMachine).onTransition((e) => {
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
    return H.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
      this.append(new Gt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return H.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new Gt();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      H.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), ve("quantum-circuit:init", {}, this);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && i !== null && this.makeOperationsHoverable(), e === "data-json" && i !== "" && i !== null && (this.loadFromJson(i), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let t = e.target;
    this.updateStepOperationAttributes(t);
  }
  updateStepOperationAttributes(e) {
    e.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    ve("quantum-circuit:mouseleave", {}, this);
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
      let l = new lr();
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
      let l = new ur();
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
      let l = new cr();
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
      let f = new tr();
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
      let l = new sr();
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
      let l = new rr();
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
      let l = new nr();
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
      let l = new ir();
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
      let l = new or();
      return i && l.disable(), l;
    }, ...t), this;
  }
  qft(e, ...t) {
    let i, l;
    if (typeof t[0] == "number")
      i = t;
    else {
      let c = t[0];
      i = c.targets, l = c.disabled;
    }
    return this.applyOperationToTargets(() => {
      let c = new Pr();
      return c.nqubit = e, l && c.disable(), c;
    }, ...i), this.resize(), this;
  }
  qftDagger(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new Ir();
      return i && l.disable(), l;
    }, ...t), this.resize(), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new ar(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  control(...e) {
    let t = this.applyOperationToTargets(() => new qt(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new ut(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new $t();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new er(), ...e), this.resize(), this;
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
    return this.controlledU(lr, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(ur, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(cr, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(tr, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(sr, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(rr, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(ir, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(or, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new qt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), b = Math.max(...f) + 1, h = this.appendStepWithDropzones(b);
    for (let d of l)
      h.dropzoneAt(d).put(new qt());
    for (let d of c)
      h.dropzoneAt(d).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(h);
  }
  appendStep() {
    let e = new Gt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Gt();
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
            let h = new $t();
            h.value = "0", f.appendOperation(h);
            break;
          }
          case /^\|1>$/.test(b): {
            let h = new $t();
            h.value = "1", f.appendOperation(h);
            break;
          }
          case /^H/.test(b): {
            let h = new Kt();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case (/^X$/.test(b) || /^X<(.+)$/.test(b)): {
            let h = new lr();
            h.if = b.slice(2).trim(), f.appendOperation(h);
            break;
          }
          case /^Y/.test(b): {
            let h = new ur();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^Z/.test(b): {
            let h = new cr();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^P/.test(b): {
            let h = new tr();
            h.angle = this.angleParameter(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^T/.test(b): {
            let h = new sr();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^X\^½/.test(b): {
            let h = new rr();
            h.if = this.ifVariable(b.slice(3)), f.appendOperation(h);
            break;
          }
          case /^Rx/.test(b): {
            let h = new nr();
            h.angle = this.angleParameter(b.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Ry/.test(b): {
            let h = new ir();
            h.angle = this.angleParameter(b.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Rz/.test(b): {
            let h = new or();
            h.angle = this.angleParameter(b.slice(2)), f.appendOperation(h);
            break;
          }
          case /^QFT\d/.test(b): {
            let h = new Pr();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^QFT†\d/.test(b): {
            let h = new Ir();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^Swap$/.test(b): {
            let h = new ar();
            f.appendOperation(h);
            break;
          }
          case /^•$/.test(b): {
            let h = new qt();
            f.appendOperation(h);
            break;
          }
          case /^Bloch$/.test(b): {
            let h = new ut();
            f.appendOperation(h);
            break;
          }
          case /^Measure/.test(b): {
            let h = new er(), d = ((/^>(.+)$/.exec(b.slice(7)) || [])[1] || "").trim();
            h.flag = d, f.appendOperation(h);
            break;
          }
          case /^[[{](.+)$/.test(b): {
            let h = b.slice(1);
            f.remove(), t = new cn(), t.comment = h, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
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
          let f = c.map((v) => i.bit(v)), b = i.bit(l), h = f[0] === b ? f[1] : f[0], d = i.dropzoneAt(h);
          l.inputWireQuantum = t, l.outputWireQuantum = d.inputWireQuantum, t = d.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!Ar(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Ei(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    H.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  snapTargetAt(e, t) {
    return this.isVertical ? this.snapTargets[t][e] : this.snapTargets[e][t];
  }
  resizeHandleSnapTargetAt(e, t) {
    return this.isVertical ? this.resizeHandleSnapTargets[t][e] : this.resizeHandleSnapTargets[e][t];
  }
  setSnapTargets(e) {
    let t = this.dropzones.filter((c) => !c.occupied), i = [];
    this.snapTargets = {};
    let l = e.dropzone;
    Ei(l) && t.push(l);
    for (let [c, f] of Object.entries(this.dropzones)) {
      let b = f.snapTarget, h = this.isVertical ? b.y : b.x, d = this.isVertical ? b.x : b.y, v = parseInt(c) % this.wireCount, w = h - e.snapRange * 0.75, y = h + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: d, y: w }) : i.push({ x: w, y: d }), this.snapTargets[w] === void 0 && (this.snapTargets[w] = {}), this.snapTargets[w][d] === void 0 && (this.snapTargets[w][d] = { dropzone: null, stepIndex: -1, wireIndex: v })), this.isVertical ? i.push({ x: d, y }) : i.push({ x: y, y: d }), this.snapTargets[y] === void 0 && (this.snapTargets[y] = {}), this.snapTargets[y][d] === void 0 && (this.snapTargets[y][d] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: v }), (!f.occupied || f === l) && i.push(b), this.snapTargets[h] === void 0 && (this.snapTargets[h] = {}), this.snapTargets[h][d] === void 0 && (this.snapTargets[h][d] = { dropzone: f, stepIndex: null, wireIndex: v });
    }
    e.snapTargets = i;
  }
  setResizeHandleSnapTargets(e) {
    if (!Fr(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!Ei(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let t = e.dropzone.circuitStep;
    H.notNull(t);
    let i = t.dropzones.filter((f) => !f.occupied), l = e.dropzone;
    i.push(l);
    let c = [];
    this.resizeHandleSnapTargets = {};
    for (let [f, b] of Object.entries(t.dropzones)) {
      let h = b.resizeHandleSnapTarget, d = this.isVertical ? h.y : h.x, v = this.isVertical ? h.x : h.y, w = parseInt(f) % this.wireCount;
      (!b.occupied || b === l) && c.push(h), this.resizeHandleSnapTargets[d] === void 0 && (this.resizeHandleSnapTargets[d] = {}), this.resizeHandleSnapTargets[d][v] === void 0 && (this.resizeHandleSnapTargets[d][v] = { dropzone: b, stepIndex: null, wireIndex: w });
    }
    e.resizeHandleSnapTargets = c;
  }
  updateSnapTargets(e) {
    let t = e[0];
    H.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let b = c[f];
          b.stepIndex !== null && (b.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let f = c.snapTarget, b = this.isVertical ? f.y : f.x, h = this.isVertical ? f.x : f.y;
      H.notNull(this.snapTargets[b]), this.snapTargets[b][h] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), A([k], se.prototype, "minStepCount", 2), A([k], se.prototype, "minWireCount", 2), A([k], se.prototype, "maxWireCount", 2), A([k], se.prototype, "editing", 2), A([k], se.prototype, "updateUrl", 2), A([k], se.prototype, "json", 2), A([k], se.prototype, "circuitTitle", 2), A([k], se.prototype, "debug", 2), A([k], se.prototype, "chDisabled", 2), A([k], se.prototype, "chMaxControlGates", 2), A([k], se.prototype, "chMaxTargetGates", 2), A([k], se.prototype, "cnotDisabled", 2), A([k], se.prototype, "cnotMaxControlGates", 2), A([k], se.prototype, "cnotMaxTargetGates", 2), A([k], se.prototype, "cyDisabled", 2), A([k], se.prototype, "cyMaxControlGates", 2), A([k], se.prototype, "cyMaxTargetGates", 2), A([k], se.prototype, "czDisabled", 2), A([k], se.prototype, "czMaxControlGates", 2), A([k], se.prototype, "czMaxTargetGates", 2), A([k], se.prototype, "cphaseDisabled", 2), A([k], se.prototype, "cphaseMaxControlGates", 2), A([k], se.prototype, "cphaseMaxTargetGates", 2), A([k], se.prototype, "ctDisabled", 2), A([k], se.prototype, "ctMaxControlGates", 2), A([k], se.prototype, "ctMaxTargetGates", 2), A([k], se.prototype, "crnotDisabled", 2), A([k], se.prototype, "crnotMaxControlGates", 2), A([k], se.prototype, "crnotMaxTargetGates", 2), A([k], se.prototype, "crxDisabled", 2), A([k], se.prototype, "crxMaxControlGates", 2), A([k], se.prototype, "crxMaxTargetGates", 2), A([k], se.prototype, "cryDisabled", 2), A([k], se.prototype, "cryMaxControlGates", 2), A([k], se.prototype, "cryMaxTargetGates", 2), A([k], se.prototype, "crzDisabled", 2), A([k], se.prototype, "crzMaxControlGates", 2), A([k], se.prototype, "crzMaxTargetGates", 2), A([k], se.prototype, "cswapDisabled", 2), A([k], se.prototype, "cswapMaxControlGates", 2), A([k], se.prototype, "swapDisabled", 2), A([k], se.prototype, "controlControlDisabled", 2), A([k], se.prototype, "controlControlMaxTargetGates", 2), A([k], se.prototype, "phasePhaseDisabled", 2), A([k], se.prototype, "phasePhaseMaxTargetGates", 2), A([At], se.prototype, "blocks", 2);
ee(se);
var Vn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("draggable:delete", this.maybeUpdateUrl), this.addEventListener("draggable:delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step:mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step:mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step:qpu-operation-snap", this.freshRun), this.addEventListener("circuit-step:qpu-operation-unsnap", this.freshRun), this.addEventListener("circuit-step:update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step:qpu-operation-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step:qpu-operation-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.freshRun), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
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
          let b = parseInt(f), h = c.dropzoneAt(b).operation;
          if (md(h)) {
            let d = t.blochVectors[b];
            h.x = d[0], h.y = d[1], h.z = d[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let b in f) {
            let h = parseInt(b), d = c.dropzoneAt(h).operation;
            gd(d) && (d.value = f[h].toString());
          }
        }
        for (let f of c.dropzones) {
          let b = f.operation;
          !$r(b) || b.if !== "" && (b.disabled = !t.flags[b.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let b in t.amplitudes) {
            let h = t.amplitudes[b];
            f[b] = new en(h[0], h[1]);
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
        throw new it("Unknown service worker message", { data: t });
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
    H.need(i.length > 0, "non-zero step length");
    let l = this.circuit.toJson(), c = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: c, stepIndex: t, circuitJson: l, invalidateCaches: e, steps: i, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let e = this.circuit.serialize();
    H.need(e.length > 0, "non-zero step length");
    let t = Math.max(...e.map((l) => Math.max(...l.map((c) => {
      let f = [];
      return On(c) && (f = c.controls), Math.max(...c.targets.concat(f));
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
    H.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "Vn");
u(Vn, "QuantumSimulatorElement"), A([k], Vn.prototype, "updateUrl", 2), A([xe], Vn.prototype, "circuit", 2), A([xe], Vn.prototype, "circleNotation", 2), A([At], Vn.prototype, "runCircuitButtons", 2);
ee(Vn);

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
  en as Complex
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
