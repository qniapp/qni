var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var nh = Object.create;
var Bi = Object.defineProperty;
var Wu = Object.getOwnPropertyDescriptor;
var ih = Object.getOwnPropertyNames;
var oh = Object.getPrototypeOf;
var ah = Object.prototype.hasOwnProperty;
var sh = /* @__PURE__ */ __name((r) => Bi(r, "__esModule", { value: true }), "sh");
var u = /* @__PURE__ */ __name((r, t) => Bi(r, "name", { value: t, configurable: true }), "u");
var aa = /* @__PURE__ */ __name((r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports), "aa");
var lh = /* @__PURE__ */ __name((r, t, e, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let l of ih(t))
      !ah.call(r, l) && (e || l !== "default") && Bi(r, l, { get: () => t[l], enumerable: !(i = Wu(t, l)) || i.enumerable });
  return r;
}, "lh");
var ni = /* @__PURE__ */ __name((r, t) => lh(sh(Bi(r != null ? nh(oh(r)) : {}, "default", !t && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "ni");
var A = /* @__PURE__ */ __name((r, t, e, i) => {
  for (var l = i > 1 ? void 0 : i ? Wu(t, e) : t, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(t, e, l) : f(l)) || l);
  return i && l && Bi(t, e, l), l;
}, "A");
var Uu = /* @__PURE__ */ __name((r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
}, "Uu");
var sa = /* @__PURE__ */ __name((r, t, e) => (Uu(r, t, "read from private field"), e ? e.call(r) : t.get(r)), "sa");
var la = /* @__PURE__ */ __name((r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, "la");
var ua = /* @__PURE__ */ __name((r, t, e, i) => (Uu(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e), "ua");
var Yu = aa((Ls, Vu) => {
  (function(r) {
    "use strict";
    var t = 2e3, e = { s: 1, n: 0, d: 1 };
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
      var P = m(y, S);
      return O.n = y / P, O.d = S / P, O;
    }
    __name(l, "l");
    u(l, "newFraction");
    function c(y) {
      for (var S = {}, O = y, P = 2, k = 4; k <= O; ) {
        for (; O % P === 0; )
          O /= P, S[P] = (S[P] || 0) + 1;
        k += 1 + 2 * P++;
      }
      return O !== y ? O > 1 && (S[O] = (S[O] || 0) + 1) : S[y] = (S[y] || 0) + 1, S;
    }
    __name(c, "c");
    u(c, "factorize");
    var f = u(function(y, S) {
      var O = 0, P = 1, k = 1, j = 0, L = 0, V = 0, M = 1, B = 1, _ = 0, N = 1, W = 1, Q = 1, it = 1e7, nt;
      if (y != null)
        if (S !== void 0) {
          if (O = y, P = S, k = O * P, O % 1 !== 0 || P % 1 !== 0)
            throw w.NonIntegerParameter;
        } else
          switch (typeof y) {
            case "object": {
              if ("d" in y && "n" in y)
                O = y.n, P = y.d, "s" in y && (O *= y.s);
              else if (0 in y)
                O = y[0], 1 in y && (P = y[1]);
              else
                throw w.InvalidParameter;
              k = O * P;
              break;
            }
            case "number": {
              if (y < 0 && (k = y, y = -y), y % 1 === 0)
                O = y;
              else if (y > 0) {
                for (y >= 1 && (B = Math.pow(10, Math.floor(1 + Math.log(y) / Math.LN10)), y /= B); N <= it && Q <= it; )
                  if (nt = (_ + W) / (N + Q), y === nt) {
                    N + Q <= it ? (O = _ + W, P = N + Q) : Q > N ? (O = W, P = Q) : (O = _, P = N);
                    break;
                  } else
                    y > nt ? (_ += W, N += Q) : (W += _, Q += N), N > it ? (O = W, P = Q) : (O = _, P = N);
                O *= B;
              } else
                (isNaN(y) || isNaN(S)) && (P = O = NaN);
              break;
            }
            case "string": {
              if (N = y.match(/\d+|./g), N === null)
                throw w.InvalidParameter;
              if (N[_] === "-" ? (k = -1, _++) : N[_] === "+" && _++, N.length === _ + 1 ? L = i(N[_++], k) : N[_ + 1] === "." || N[_] === "." ? (N[_] !== "." && (j = i(N[_++], k)), _++, (_ + 1 === N.length || N[_ + 1] === "(" && N[_ + 3] === ")" || N[_ + 1] === "'" && N[_ + 3] === "'") && (L = i(N[_], k), M = Math.pow(10, N[_].length), _++), (N[_] === "(" && N[_ + 2] === ")" || N[_] === "'" && N[_ + 2] === "'") && (V = i(N[_ + 1], k), B = Math.pow(10, N[_ + 1].length) - 1, _ += 3)) : N[_ + 1] === "/" || N[_ + 1] === ":" ? (L = i(N[_], k), M = i(N[_ + 2], 1), _ += 3) : N[_ + 3] === "/" && N[_ + 1] === " " && (j = i(N[_], k), L = i(N[_ + 2], k), M = i(N[_ + 4], 1), _ += 5), N.length <= _) {
                P = M * B, k = O = V + P * j + B * L;
                break;
              }
            }
            default:
              throw w.InvalidParameter;
          }
      if (P === 0)
        throw w.DivisionByZero;
      e.s = k < 0 ? -1 : 1, e.n = Math.abs(O), e.d = Math.abs(P);
    }, "parse");
    function b(y, S, O) {
      for (var P = 1; S > 0; y = y * y % O, S >>= 1)
        S & 1 && (P = P * y % O);
      return P;
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
      for (var O = 10 % S, P = 1; O !== 1; P++)
        if (O = O * 10 % S, P > t)
          return 0;
      return P;
    }
    __name(h, "h");
    u(h, "cycleLen");
    function d(y, S, O) {
      for (var P = 1, k = b(10, O, S), j = 0; j < 300; j++) {
        if (P === k)
          return j;
        P = P * 10 % S, k = k * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    u(d, "cycleStart");
    function m(y, S) {
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
    __name(m, "m");
    u(m, "gcd");
    function w(y, S) {
      if (f(y, S), this instanceof w)
        y = m(e.d, e.n), this.s = e.s, this.n = e.n / y, this.d = e.d / y;
      else
        return l(e.s * e.n, e.d);
    }
    __name(w, "w");
    u(w, "Fraction"), w.DivisionByZero = new Error("Division by Zero"), w.InvalidParameter = new Error("Invalid argument"), w.NonIntegerParameter = new Error("Parameters must be integer"), w.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return l(this.n, this.d);
    }, neg: function() {
      return l(-this.s * this.n, this.d);
    }, add: function(y, S) {
      return f(y, S), l(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(y, S) {
      return f(y, S), l(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(y, S) {
      return f(y, S), l(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(y, S) {
      return f(y, S), l(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return l(this.s * this.n, this.d);
    }, mod: function(y, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new w(NaN);
      if (y === void 0)
        return l(this.s * this.n % this.d, 1);
      if (f(y, S), e.n === 0 && this.d === 0)
        throw w.DivisionByZero;
      return l(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(y, S) {
      return f(y, S), l(m(e.n, this.n) * m(e.d, this.d), e.d * this.d);
    }, lcm: function(y, S) {
      return f(y, S), e.n === 0 && this.n === 0 ? l(0, 1) : l(e.n * this.n, m(e.n, this.n) * m(e.d, this.d));
    }, ceil: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : l(Math.ceil(y * this.s * this.n / this.d), y);
    }, floor: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : l(Math.floor(y * this.s * this.n / this.d), y);
    }, round: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : l(Math.round(y * this.s * this.n / this.d), y);
    }, inverse: function() {
      return l(this.s * this.d, this.n);
    }, pow: function(y, S) {
      if (f(y, S), e.d === 1)
        return e.s < 0 ? l(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : l(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var O = c(this.n), P = c(this.d), k = 1, j = 1;
      for (var L in O)
        if (L !== "1") {
          if (L === "0") {
            k = 0;
            break;
          }
          if (O[L] *= e.n, O[L] % e.d === 0)
            O[L] /= e.d;
          else
            return null;
          k *= Math.pow(L, O[L]);
        }
      for (var L in P)
        if (L !== "1") {
          if (P[L] *= e.n, P[L] % e.d === 0)
            P[L] /= e.d;
          else
            return null;
          j *= Math.pow(L, P[L]);
        }
      return e.s < 0 ? l(j, k) : l(k, j);
    }, equals: function(y, S) {
      return f(y, S), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(y, S) {
      f(y, S);
      var O = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < O) - (O < 0);
    }, simplify: function(y) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      y = y || 1e-3;
      for (var S = this.abs(), O = S.toContinued(), P = 1; P < O.length; P++) {
        for (var k = l(O[P - 1], 1), j = P - 2; j >= 0; j--)
          k = k.inverse().add(O[j]);
        if (k.sub(S).abs().valueOf() < y)
          return k.mul(this.s);
      }
      return this;
    }, divisible: function(y, S) {
      return f(y, S), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(y) {
      var S, O = "", P = this.n, k = this.d;
      return this.s < 0 && (O += "-"), k === 1 ? O += P : (y && (S = Math.floor(P / k)) > 0 && (O += S, O += " ", P %= k), O += P, O += "/", O += k), O;
    }, toLatex: function(y) {
      var S, O = "", P = this.n, k = this.d;
      return this.s < 0 && (O += "-"), k === 1 ? O += P : (y && (S = Math.floor(P / k)) > 0 && (O += S, P %= k), O += "\\frac{", O += P, O += "}{", O += k, O += "}"), O;
    }, toContinued: function() {
      var y, S = this.n, O = this.d, P = [];
      if (isNaN(S) || isNaN(O))
        return P;
      do
        P.push(Math.floor(S / O)), y = S % O, S = O, O = y;
      while (S !== 1);
      return P;
    }, toString: function(y) {
      var S = this.n, O = this.d;
      if (isNaN(S) || isNaN(O))
        return "NaN";
      y = y || 15;
      var P = h(S, O), k = d(S, O, P), j = this.s < 0 ? "-" : "";
      if (j += S / O | 0, S %= O, S *= 10, S && (j += "."), P) {
        for (var L = k; L--; )
          j += S / O | 0, S %= O, S *= 10;
        j += "(";
        for (var L = P; L--; )
          j += S / O | 0, S %= O, S *= 10;
        j += ")";
      } else
        for (var L = y; S && L--; )
          j += S / O | 0, S %= O, S *= 10;
      return j;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return w;
    }) : typeof Ls == "object" ? (Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.Fraction = w, Vu.exports = w) : r.Fraction = w;
  })(Ls);
});
var La = aa((Fc, vl) => {
  (function(r) {
    typeof Fc == "object" && typeof vl != "undefined" ? vl.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
  })(function() {
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0, r.default = function(n) {
      return !(!n || !n.Window) && n instanceof n.Window;
    };
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.getWindow = function(n) {
      return (0, r.default)(n) ? n : (n.ownerDocument || n).defaultView || i.window;
    }, t.init = l, t.window = t.realWindow = void 0;
    var e = void 0;
    t.realWindow = e;
    var i = void 0;
    function l(n) {
      t.realWindow = e = n;
      var o = n.document.createTextNode("");
      o.ownerDocument !== n.document && typeof n.wrap == "function" && n.wrap(o) === o && (n = n.wrap(n)), t.window = i = n;
    }
    __name(l, "l");
    u(l, "o"), t.window = i, typeof window != "undefined" && window && l(window);
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
      return n === t.window || (0, r.default)(n);
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
      var o = t.getWindow(n) || t.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : f(Element)) ? n instanceof Element || n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return b(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return b(n) && n.length !== void 0 && h(n.splice);
    } };
    c.default = d;
    var m = {};
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
    u(y, "d"), Object.defineProperty(m, "__esModule", { value: true }), m.default = void 0;
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
    m.default = O;
    var P = {};
    Object.defineProperty(P, "__esModule", { value: true }), P.default = void 0;
    var k = { init: function(n) {
      var o = n;
      k.document = o.document, k.DocumentFragment = o.DocumentFragment || j, k.SVGElement = o.SVGElement || j, k.SVGSVGElement = o.SVGSVGElement || j, k.SVGElementInstance = o.SVGElementInstance || j, k.Element = o.Element || j, k.HTMLElement = o.HTMLElement || k.Element, k.Event = o.Event, k.Touch = o.Touch || j, k.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function j() {
    }
    __name(j, "j");
    u(j, "y");
    var L = k;
    P.default = L;
    var V = {};
    Object.defineProperty(V, "__esModule", { value: true }), V.default = void 0;
    var M = { init: function(n) {
      var o = P.default.Element, a = n.navigator || {};
      M.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && P.default.document instanceof n.DocumentTouch, M.supportsPointerEvent = a.pointerEnabled !== false && !!P.default.PointerEvent, M.isIOS = /iP(hone|od|ad)/.test(a.platform), M.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), M.isIe9 = /MSIE 9/.test(a.userAgent), M.isOperaMobile = a.appName === "Opera" && M.supportsTouch && /Presto/.test(a.userAgent), M.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", M.pEventTypes = M.supportsPointerEvent ? P.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, M.wheelEvent = P.default.document && "onmousewheel" in P.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = M;
    V.default = B;
    var _ = {};
    function N(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(N, "N");
    u(N, "P");
    function W(n, o) {
      return t.window !== t.realWindow && (o = o.replace(/\/deep\//g, " ")), n[V.default.prefixedMatchesSelector](o);
    }
    __name(W, "W");
    u(W, "O"), Object.defineProperty(_, "__esModule", { value: true }), _.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (W(n, o))
          return n;
        n = N(n);
      }
      return null;
    }, _.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, _.getElementClientRect = ct, _.getElementRect = function(n) {
      var o = ct(n);
      if (!V.default.isIOS7 && o) {
        var a = nt(t.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, _.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = N(n);
      return o;
    }, _.getScrollXY = nt, _.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], v = n[o];
        if (p && s !== o)
          if (v) {
            var E = Q(p), g = Q(v);
            if (E !== p.ownerDocument)
              if (g !== p.ownerDocument)
                if (E !== g) {
                  a = a.length ? a : it(v);
                  var x = void 0;
                  if (v instanceof P.default.HTMLElement && p instanceof P.default.SVGElement && !(p instanceof P.default.SVGSVGElement)) {
                    if (p === g)
                      continue;
                    x = p.ownerSVGElement;
                  } else
                    x = p;
                  for (var C = it(x, v.ownerDocument), T = 0; C[T] && C[T] === a[T]; )
                    T++;
                  var I = [C[T - 1], C[T], a[T]];
                  if (I[0])
                    for (var R = I[0].lastChild; R; ) {
                      if (R === I[1]) {
                        o = s, a = C;
                        break;
                      }
                      if (R === I[2])
                        break;
                      R = R.previousSibling;
                    }
                } else
                  q = p, D = v, (parseInt(t.getWindow(q).getComputedStyle(q).zIndex, 10) || 0) >= (parseInt(t.getWindow(D).getComputedStyle(D).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var q, D;
      return o;
    }, _.matchesSelector = W, _.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (W(n, o))
          return true;
        if ((n = N(n)) === a)
          return W(n, o);
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
    }, _.parentNode = N, _.trySelector = function(n) {
      return !!c.default.string(n) && (P.default.document.querySelector(n), true);
    };
    var Q = u(function(n) {
      return n.parentNode || n.host;
    }, "E");
    function it(n, o) {
      for (var a, s = [], p = n; (a = Q(p)) && p !== o && a !== p.ownerDocument; )
        s.unshift(p), p = a;
      return s;
    }
    __name(it, "it");
    u(it, "S");
    function nt(n) {
      return { x: (n = n || t.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(nt, "nt");
    u(nt, "T");
    function ct(n) {
      var o = n instanceof P.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ct, "ct");
    u(ct, "j");
    var Y = {};
    Object.defineProperty(Y, "__esModule", { value: true }), Y.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ut = {};
    function kt(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(kt, "kt");
    u(kt, "I");
    function Wt(n, o, a) {
      return n === "parent" ? (0, _.parentNode)(a) : n === "self" ? o.getRect(a) : (0, _.closest)(a, n);
    }
    __name(Wt, "Wt");
    u(Wt, "D"), Object.defineProperty(ut, "__esModule", { value: true }), ut.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ut.getStringOptionResult = Wt, ut.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ut.resolveRectLike = function(n, o, a, s) {
      var p, v = n;
      return c.default.string(v) ? v = Wt(v, o, a) : c.default.func(v) && (v = v.apply(void 0, function(E) {
        if (Array.isArray(E))
          return kt(E);
      }(p = s) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(p) || function(E, g) {
        if (E) {
          if (typeof E == "string")
            return kt(E, g);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? kt(E, g) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(v) && (v = (0, _.getElementRect)(v)), v;
    }, ut.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, Y.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ut.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, Y.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    };
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, v = (0, ut.resolveRectLike)(p, n, o, [n && o]);
      return (0, ut.rectToXY)(v) || { x: 0, y: 0 };
    };
    var ft = {};
    function Xt(n) {
      return n.trim().split(/ +/);
    }
    __name(Xt, "Xt");
    u(Xt, "C"), Object.defineProperty(ft, "__esModule", { value: true }), ft.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Xt(o)), c.default.array(o))
        return o.reduce(function(x, C) {
          return (0, Y.default)(x, n(C, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var p = 0; p < a.length; p++) {
          var v;
          v = a[p], n(o, v, s);
        }
      else if (c.default.object(a))
        for (var E in a) {
          var g = Xt(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          n(g, a[E], s);
        }
      return s;
    }, "n"), "t");
    var Jt = {};
    Object.defineProperty(Jt, "__esModule", { value: true }), Jt.default = void 0, Jt.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var $e = {};
    Object.defineProperty($e, "__esModule", { value: true }), $e.default = function(n, o) {
      n.__set || (n.__set = {});
      var a = u(function(p) {
        typeof n[p] != "function" && p !== "__set" && Object.defineProperty(n, p, { get: function() {
          return p in n.__set ? n.__set[p] : n.__set[p] = o[p];
        }, set: function(v) {
          n.__set[p] = v;
        }, configurable: true });
      }, "n");
      for (var s in o)
        a(s);
      return n;
    };
    var J = {};
    function dr(n) {
      return n instanceof P.default.Event || n instanceof P.default.Touch;
    }
    __name(dr, "dr");
    u(dr, "B");
    function Oe(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Oe, "Oe");
    u(Oe, "Y");
    function ke(n, o) {
      return o = o || { x: 0, y: 0 }, V.default.isOperaMobile && dr(n) ? (Oe("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Oe("page", n, o), o;
    }
    __name(ke, "ke");
    u(ke, "W");
    function Fe(n, o) {
      return o = o || {}, V.default.isOperaMobile && dr(n) ? Oe("screen", n, o) : Oe("client", n, o), o;
    }
    __name(Fe, "Fe");
    u(Fe, "L");
    function fr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(fr, "fr");
    u(fr, "U");
    function We(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var v in o)
        o[v] /= n.length;
      return o;
    }
    __name(We, "We");
    u(We, "V"), Object.defineProperty(J, "__esModule", { value: true }), J.coordsToEvent = function(n) {
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
    }, J.getClientXY = Fe, J.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [_.getActualElement(o ? o[0] : n.target), _.getActualElement(n.currentTarget)];
    }, J.getPageXY = ke, J.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, J.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof P.default.Touch ? "touch" : "mouse";
    }, J.getTouchPair = fr, J.getXY = Oe, J.isNativePointer = dr, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.pointerAverage = We, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return $e.default;
    } }), J.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, J.setCoords = function(n, o, a) {
      var s = o.length > 1 ? We(o) : o[0];
      ke(s, n.page), Fe(s, n.client), n.timeStamp = a;
    }, J.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, J.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = fr(n), v = p[1][a] - p[0][a], E = p[1][s] - p[0][s];
      return 180 * Math.atan2(E, v) / Math.PI;
    }, J.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = fr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), v = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: v, width: p - a, height: v - s };
    }, J.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = fr(n), v = p[0][a] - p[1][a], E = p[0][s] - p[1][s];
      return (0, Jt.default)(v, E);
    };
    var Ne = {};
    function wr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(wr, "wr");
    u(wr, "q");
    function Ir(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ir, "Ir");
    u(Ir, "G"), Object.defineProperty(Ne, "__esModule", { value: true }), Ne.BaseEvent = void 0;
    var un = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ir(this, "immediatePropagationStopped", false), Ir(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && wr(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Ne.BaseEvent = un, Object.defineProperty(un.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var yt = {};
    Object.defineProperty(yt, "__esModule", { value: true }), yt.remove = yt.merge = yt.from = yt.findIndex = yt.find = yt.contains = void 0, yt.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, yt.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var cn = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "K");
    yt.merge = cn, yt.from = function(n) {
      return cn([], n);
    };
    var pn = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Z");
    yt.findIndex = pn, yt.find = function(n, o) {
      return n[pn(n, o)];
    };
    var Me = {};
    function Ar(n) {
      return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ar(n);
    }
    __name(Ar, "Ar");
    u(Ar, "Q");
    function Un(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Un, "Un");
    u(Un, "tt");
    function Ur(n, o) {
      return Ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Ur(n, o);
    }
    __name(Ur, "Ur");
    u(Ur, "et");
    function hr(n, o) {
      if (o && (Ar(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return xe(n);
    }
    __name(hr, "hr");
    u(hr, "nt");
    function xe(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(xe, "xe");
    u(xe, "rt");
    function xr(n) {
      return xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, xr(n);
    }
    __name(xr, "xr");
    u(xr, "ot");
    function De(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(De, "De");
    u(De, "it"), Object.defineProperty(Me, "__esModule", { value: true }), Me.DropEvent = void 0;
    var dn = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Ur(g, x);
      })(E, n);
      var o, a, s, p, v = (s = E, p = function() {
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
        var g, x = xr(s);
        if (p) {
          var C = xr(this).constructor;
          g = Reflect.construct(x, arguments, C);
        } else
          g = x.apply(this, arguments);
        return hr(this, g);
      });
      function E(g, x, C) {
        var T;
        (function(D, H) {
          if (!(D instanceof H))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), De(xe(T = v.call(this, x._interaction)), "dropzone", void 0), De(xe(T), "dragEvent", void 0), De(xe(T), "relatedTarget", void 0), De(xe(T), "draggable", void 0), De(xe(T), "propagationStopped", false), De(xe(T), "immediatePropagationStopped", false);
        var I = C === "dragleave" ? g.prev : g.cur, R = I.element, q = I.dropzone;
        return T.type = C, T.target = R, T.currentTarget = R, T.dropzone = q, T.dragEvent = x, T.relatedTarget = x.target, T.draggable = x.interactable, T.timeStamp = x.timeStamp, T;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "reject", value: function() {
        var g = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var C = x.activeDrops, T = yt.findIndex(C, function(R) {
              var q = R.dropzone, D = R.element;
              return q === g.dropzone && D === g.target;
            });
            x.activeDrops.splice(T, 1);
            var I = new E(x, this.dragEvent, "dropdeactivate");
            I.dropzone = this.dropzone, I.target = this.target, this.dropzone.fire(I);
          } else
            this.dropzone.fire(new E(x, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Un(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Ne.BaseEvent);
    Me.DropEvent = dn;
    var _r = {};
    function fn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, v = s.element;
        o.dropzone = p, o.target = v, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(fn, "fn");
    u(fn, "lt");
    function Vr(n, o) {
      for (var a = function(v, E) {
        for (var g = v.interactables, x = [], C = 0; C < g.list.length; C++) {
          var T = g.list[C];
          if (T.options.drop.enabled) {
            var I = T.options.drop.accept;
            if (!(c.default.element(I) && I !== E || c.default.string(I) && !_.matchesSelector(E, I) || c.default.func(I) && !I({ dropzone: T, draggableElement: E })))
              for (var R = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], q = 0; q < R.length; q++) {
                var D = R[q];
                D !== E && x.push({ dropzone: T, element: D, rect: T.getRect(D) });
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
    __name(Vr, "Vr");
    u(Vr, "ut");
    function hn(n, o, a) {
      for (var s = n.dropState, p = n.interactable, v = n.element, E = [], g = 0; g < s.activeDrops.length; g++) {
        var x = s.activeDrops[g], C = x.dropzone, T = x.element, I = x.rect;
        E.push(C.dropCheck(o, a, p, v, T, I) ? T : null);
      }
      var R = _.indexOfDeepestElement(E);
      return s.activeDrops[R] || null;
    }
    __name(hn, "hn");
    u(hn, "ct");
    function Si(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new Me.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new Me.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new Me.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new Me.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new Me.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new Me.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(Si, "Si");
    u(Si, "ft");
    function Ci(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, v = a.prev;
      o.leave && v.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && fn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(Ci, "Ci");
    u(Ci, "dt");
    function Po(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var v = a.dropState;
        o.dynamicDrop && (v.activeDrops = Vr(o, a.element));
        var E = s, g = hn(a, E, p);
        v.rejected = v.rejected && !!g && g.dropzone === v.cur.dropzone && g.element === v.cur.element, v.cur.dropzone = g && g.dropzone, v.cur.element = g && g.element, v.events = Si(a, 0, E);
      }
    }
    __name(Po, "Po");
    u(Po, "pt"), Object.defineProperty(_r, "__esModule", { value: true }), _r.default = void 0;
    var Io = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(m.default), s.prototype.dropzone = function(v) {
        return function(E, g) {
          if (c.default.object(g)) {
            if (E.options.drop.enabled = g.enabled !== false, g.listeners) {
              var x = (0, ft.default)(g.listeners), C = Object.keys(x).reduce(function(T, I) {
                return T[/^(enter|leave)/.test(I) ? "drag".concat(I) : /^(activate|deactivate|move)/.test(I) ? "drop".concat(I) : I] = x[I], T;
              }, {});
              E.off(E.options.drop.listeners), E.on(C), E.options.drop.listeners = C;
            }
            return c.default.func(g.ondrop) && E.on("drop", g.ondrop), c.default.func(g.ondropactivate) && E.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && E.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && E.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && E.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && E.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? E.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (E.options.drop.accept = g.accept), "checker" in g && (E.options.drop.checker = g.checker), E;
          }
          return c.default.bool(g) ? (E.options.drop.enabled = g, E) : E.options.drop;
        }(this, v);
      }, s.prototype.dropCheck = function(v, E, g, x, C, T) {
        return function(I, R, q, D, H, Z, $) {
          var rt = false;
          if (!($ = $ || I.getRect(Z)))
            return !!I.options.drop.checker && I.options.drop.checker(R, q, rt, I, Z, D, H);
          var ot = I.options.drop.overlap;
          if (ot === "pointer") {
            var pt = (0, Gt.default)(D, H, "drag"), St = J.getPageXY(R);
            St.x += pt.x, St.y += pt.y;
            var Lt = St.x > $.left && St.x < $.right, vt = St.y > $.top && St.y < $.bottom;
            rt = Lt && vt;
          }
          var zt = D.getRect(H);
          if (zt && ot === "center") {
            var Ye = zt.left + zt.width / 2, Rr = zt.top + zt.height / 2;
            rt = Ye >= $.left && Ye <= $.right && Rr >= $.top && Rr <= $.bottom;
          }
          return zt && c.default.number(ot) && (rt = Math.max(0, Math.min($.right, zt.right) - Math.max($.left, zt.left)) * Math.max(0, Math.min($.bottom, zt.bottom) - Math.max($.top, zt.top)) / (zt.width * zt.height) >= ot), I.options.drop.checker && (rt = I.options.drop.checker(R, q, rt, I, Z, D, H)), rt;
        }(this, v, E, g, x, C, T);
      }, a.dynamicDrop = function(v) {
        return c.default.bool(v) ? (n.dynamicDrop = v, a) : n.dynamicDrop;
      }, (0, Y.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = Io.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = Vr(o, a.element), p.events = Si(a, 0, s), p.events.activate && (fn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Po, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Ci(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Po(n, o), Ci(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Vr, getDrop: hn, getDropEvents: Si, fireDropEvents: Ci, defaults: { enabled: false, accept: null, overlap: "pointer" } }, os = Io;
    _r.default = os;
    var G = {};
    function et(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(C) {
          return C.pointer;
        }), v = s === "start", E = s === "end", g = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], v)
          a.distance = J.touchDistance(p, g), a.box = J.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = J.touchAngle(p, g), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (E) {
          var x = o.prevEvent;
          a.distance = x.distance, a.box = x.box, a.scale = x.scale, a.ds = 0, a.angle = x.angle, a.da = 0;
        } else
          a.distance = J.touchDistance(p, g), a.box = J.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = J.touchAngle(p, g), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(et, "et");
    u(et, "yt"), Object.defineProperty(G, "__esModule", { value: true }), G.default = void 0;
    var at = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(p) {
        return c.default.object(p) ? (this.options.gesture.enabled = p.enabled !== false, this.setPerAction("gesture", p), this.setOnEvents("gesture", p), this) : c.default.bool(p) ? (this.options.gesture.enabled = p, this) : this.options.gesture;
      }, o.map.gesture = at, o.methodDict.gesture = "gesturable", s.actions.gesture = at.defaults;
    }, listeners: { "interactions:action-start": et, "interactions:action-move": et, "interactions:action-end": et, "interactions:new": function(n) {
      n.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(n) {
      if (!(n.interaction.pointers.length < 2)) {
        var o = n.interactable.options.gesture;
        if (o && o.enabled)
          return n.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, Et = at;
    G.default = Et;
    var ht = {};
    function he(n, o, a, s, p, v, E) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(v.width) ? v.width : v.right - v.left, x = c.default.number(v.height) ? v.height : v.bottom - v.top;
        if (E = Math.min(E, Math.abs((n === "left" || n === "right" ? g : x) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), x < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left") {
          var C = g >= 0 ? v.left : v.right;
          return a.x < C + E;
        }
        if (n === "top") {
          var T = x >= 0 ? v.top : v.bottom;
          return a.y < T + E;
        }
        if (n === "right")
          return a.x > (g >= 0 ? v.right : v.left) - E;
        if (n === "bottom")
          return a.y > (x >= 0 ? v.bottom : v.top) - E;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : _.matchesUpTo(s, o, p));
    }
    __name(he, "he");
    u(he, "wt");
    function Pe(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Pe, "Pe");
    u(Pe, "_t"), Object.defineProperty(ht, "__esModule", { value: true }), ht.default = void 0;
    var Ee = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      Ee.cursors = function(v) {
        return v.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), Ee.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(v) {
        return function(E, g, x) {
          return c.default.object(g) ? (E.options.resize.enabled = g.enabled !== false, E.setPerAction("resize", g), E.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? E.options.resize.axis = g.axis : g.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (E.options.resize.square = g.square), E) : c.default.bool(g) ? (E.options.resize.enabled = g, E) : E.options.resize;
        }(this, v, n);
      }, o.map.resize = Ee, o.methodDict.resize = "resizable", p.actions.resize = Ee.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, v = s.rect;
          s._rects = { start: (0, Y.default)({}, v), corrected: (0, Y.default)({}, v), previous: (0, Y.default)({}, v), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), Pe(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, v = s.interactable.options.resize.invert, E = v === "reposition" || v === "negate", g = s.rect, x = s._rects, C = x.start, T = x.corrected, I = x.delta, R = x.previous;
          if ((0, Y.default)(R, T), E) {
            if ((0, Y.default)(T, g), v === "reposition") {
              if (T.top > T.bottom) {
                var q = T.top;
                T.top = T.bottom, T.bottom = q;
              }
              if (T.left > T.right) {
                var D = T.left;
                T.left = T.right, T.right = D;
              }
            }
          } else
            T.top = Math.min(g.top, C.bottom), T.bottom = Math.max(g.bottom, C.top), T.left = Math.min(g.left, C.right), T.right = Math.max(g.right, C.left);
          for (var H in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            I[H] = T[H] - R[H];
          p.edges = s.prepared.edges, p.rect = T, p.deltaRect = I;
        }
      })(n), Pe(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, v = n.buttons;
      if (p) {
        var E = (0, Y.default)({}, o.coords.cur.page), g = a.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (v & g.mouseButtons) != 0)) {
          if (c.default.object(g.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var C in x)
              x[C] = he(C, g.edges[C], E, o._latestPointer.eventTarget, s, p, g.margin || Ee.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (n.action = { name: "resize", edges: x });
          } else {
            var T = g.axis !== "y" && E.x > p.right - Ee.defaultMargin, I = g.axis !== "x" && E.y > p.bottom - Ee.defaultMargin;
            (T || I) && (n.action = { name: "resize", axes: (T ? "x" : "") + (I ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = Ee.cursors, v = null;
      if (a)
        v = p[s + a];
      else if (o) {
        for (var E = "", g = ["top", "bottom", "left", "right"], x = 0; x < g.length; x++) {
          var C = g[x];
          o[C] && (E += C);
        }
        v = p[E];
      }
      return v;
    }, defaultMargin: null }, Ao = Ee;
    ht.default = Ao;
    var Ue = {};
    Object.defineProperty(Ue, "__esModule", { value: true }), Ue.default = void 0;
    var Ti = { id: "actions", install: function(n) {
      n.usePlugin(G.default), n.usePlugin(ht.default), n.usePlugin(m.default), n.usePlugin(_r.default);
    } };
    Ue.default = Ti;
    var Se = {};
    Object.defineProperty(Se, "__esModule", { value: true }), Se.default = void 0;
    var Ce, kr, Vn = 0, Yn = { request: function(n) {
      return Ce(n);
    }, cancel: function(n) {
      return kr(n);
    }, init: function(n) {
      if (Ce = n.requestAnimationFrame, kr = n.cancelAnimationFrame, !Ce)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Ce = n["".concat(s, "RequestAnimationFrame")], kr = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Ce = Ce && Ce.bind(n), kr = kr && kr.bind(n), Ce || (Ce = u(function(p) {
        var v = Date.now(), E = Math.max(0, 16 - (v - Vn)), g = n.setTimeout(function() {
          p(v + E);
        }, E);
        return Vn = v + E, g;
      }, "jt"), kr = u(function(p) {
        return clearTimeout(p);
      }, "Mt"));
    } };
    Se.default = Yn;
    var Yr = {};
    Object.defineProperty(Yr, "__esModule", { value: true }), Yr.default = void 0, Yr.getContainer = _o, Yr.getScroll = Oi, Yr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Yr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var v = _o(p.container, a.interactable, s), E = Oi(v);
      o();
      var g = Oi(v);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var lt = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      lt.isScrolling = true, Se.default.cancel(lt.i), n.autoScroll = lt, lt.interaction = n, lt.prevTime = lt.now(), lt.i = Se.default.request(lt.scroll);
    }, stop: function() {
      lt.isScrolling = false, lt.interaction && (lt.interaction.autoScroll = null), Se.default.cancel(lt.i);
    }, scroll: function() {
      var n = lt.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, v = _o(p.container, o, a), E = lt.now(), g = (E - lt.prevTime) / 1e3, x = p.speed * g;
      if (x >= 1) {
        var C = { x: lt.x * x, y: lt.y * x };
        if (C.x || C.y) {
          var T = Oi(v);
          c.default.window(v) ? v.scrollBy(C.x, C.y) : v && (v.scrollLeft += C.x, v.scrollTop += C.y);
          var I = Oi(v), R = { x: I.x - T.x, y: I.y - T.y };
          (R.x || R.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: R, interaction: n, container: v });
        }
        lt.prevTime = E;
      }
      lt.isScrolling && (Se.default.cancel(lt.i), lt.i = Se.default.request(lt.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && lt.check(o.interactable, o.prepared.name))
        if (o.simulation)
          lt.x = lt.y = 0;
        else {
          var s, p, v, E, g = o.interactable, x = o.element, C = o.prepared.name, T = g.options[C].autoScroll, I = _o(T.container, g, x);
          if (c.default.window(I))
            E = a.clientX < lt.margin, s = a.clientY < lt.margin, p = a.clientX > I.innerWidth - lt.margin, v = a.clientY > I.innerHeight - lt.margin;
          else {
            var R = _.getElementClientRect(I);
            E = a.clientX < R.left + lt.margin, s = a.clientY < R.top + lt.margin, p = a.clientX > R.right - lt.margin, v = a.clientY > R.bottom - lt.margin;
          }
          lt.x = p ? 1 : E ? -1 : 0, lt.y = v ? 1 : s ? -1 : 0, lt.isScrolling || (lt.margin = T.margin, lt.speed = T.speed, lt.start(o));
        }
    } };
    function _o(n, o, a) {
      return (c.default.string(n) ? (0, ut.getStringOptionResult)(n, o, a) : n) || (0, t.getWindow)(a);
    }
    __name(_o, "_o");
    u(_o, "zt");
    function Oi(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Oi, "Oi");
    u(Oi, "Ct");
    var wd = { id: "auto-scroll", install: function(n) {
      var o = n.defaults, a = n.actions;
      n.autoScroll = lt, lt.now = function() {
        return n.now();
      }, a.phaselessTypes.autoscroll = true, o.perAction.autoScroll = lt.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoScroll = null;
    }, "interactions:destroy": function(n) {
      n.interaction.autoScroll = null, lt.stop(), lt.interaction && (lt.interaction = null);
    }, "interactions:stop": lt.stop, "interactions:action-move": function(n) {
      return lt.onInteractionMove(n);
    } } }, xd = wd;
    Yr.default = xd;
    var Ge = {};
    Object.defineProperty(Ge, "__esModule", { value: true }), Ge.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Ge.sign = void 0, Ge.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (t.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Ge.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var ko = {};
    function Ed(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Ed, "Ed");
    u(Ed, "Yt");
    function Sd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Sd, "Sd");
    u(Sd, "Wt"), Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var Cd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, v) {
        var E = function(g, x, C, T, I) {
          var R = g.getRect(T), q = { action: null, interactable: g, interaction: C, element: T, rect: R, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return I.fire("auto-start:check", q), q.action;
        }(this, s, p, v, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, E, this, v, p) : E;
      }, o.prototype.ignoreFrom = (0, Ge.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Ge.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Sd, o.prototype.styleCursor = Ed;
    } };
    ko.default = Cd;
    var Xn = {};
    function Ql(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Do(o, a, n, p) ? n : null;
    }
    __name(Ql, "Ql");
    u(Ql, "Vt");
    function Td(n, o, a, s, p, v, E) {
      for (var g = 0, x = s.length; g < x; g++) {
        var C = s[g], T = p[g], I = C.getAction(o, a, n, T);
        if (I) {
          var R = Ql(I, C, T, v, E);
          if (R)
            return { action: R, interactable: C, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Td, "Td");
    u(Td, "Nt");
    function Kl(n, o, a, s, p) {
      var v = [], E = [], g = s;
      function x(T) {
        v.push(T), E.push(g);
      }
      __name(x, "x");
      for (u(x, "u"); c.default.element(g); ) {
        v = [], E = [], p.interactables.forEachMatch(g, x);
        var C = Td(n, o, a, v, E, s, p);
        if (C.action && !C.interactable.options[C.action.name].manualStart)
          return C;
        g = _.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Kl, "Kl");
    u(Kl, "qt");
    function Jl(n, o, a) {
      var s = o.action, p = o.interactable, v = o.element;
      s = s || { name: null }, n.interactable = p, n.element = v, (0, Ge.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(v) : null, eu(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Jl, "Jl");
    u(Jl, "Gt");
    function Do(n, o, a, s) {
      var p = n.options, v = p[a.name].max, E = p[a.name].maxPerElement, g = s.autoStart.maxInteractions, x = 0, C = 0, T = 0;
      if (!(v && E && g))
        return false;
      for (var I = 0; I < s.interactions.list.length; I++) {
        var R = s.interactions.list[I], q = R.prepared.name;
        if (R.interacting() && (++x >= g || R.interactable === n && ((C += q === a.name ? 1 : 0) >= v || R.element === o && (T++, q === a.name && T >= E))))
          return false;
      }
      return g > 0;
    }
    __name(Do, "Do");
    u(Do, "$t");
    function tu(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(tu, "tu");
    u(tu, "Ht");
    function as(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(as, "as");
    u(as, "Kt");
    function eu(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var v = "";
        if (p.name) {
          var E = a.options[p.name].cursorChecker;
          v = c.default.func(E) ? E(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        as(n.element, v || "", o);
      } else
        o.autoStart.cursorElement && as(o.autoStart.cursorElement, "", o);
    }
    __name(eu, "eu");
    u(eu, "Zt"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = void 0;
    var Od = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(ko.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, Y.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return tu(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Do, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget;
      a.interacting() || Jl(a, Kl(a, s, p, v, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, v = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Jl(p, Kl(p, v, E, g, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var v = p.interactable, E = p.prepared.name;
          E && v && (v.options[E].manualStart || !Do(v, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, v, p.element), eu(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && as(a.element, "", o);
    } }, maxInteractions: tu, withinInteractionLimit: Do, validateAction: Ql }, Md = Od;
    Xn.default = Md;
    var zo = {};
    Object.defineProperty(zo, "__esModule", { value: true }), zo.default = void 0;
    var Pd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, v = n.dy;
      if (a.prepared.name === "drag") {
        var E = Math.abs(p), g = Math.abs(v), x = a.interactable.options.drag, C = x.startAxis, T = E > g ? "x" : E < g ? "y" : "xy";
        if (a.prepared.axis = x.lockAxis === "start" ? T[0] : x.lockAxis, T !== "xy" && C !== "xy" && C !== T) {
          a.prepared.name = null;
          for (var I = s, R = function(D) {
            if (D !== a.interactable) {
              var H = a.interactable.options.drag;
              if (!H.manualStart && D.testIgnoreAllow(H, I, s)) {
                var Z = D.getAction(a.downPointer, a.downEvent, a, I);
                if (Z && Z.name === "drag" && function($, rt) {
                  if (!rt)
                    return false;
                  var ot = rt.options.drag.startAxis;
                  return $ === "xy" || ot === "xy" || ot === $;
                }(T, D) && Xn.default.validateAction(Z, D, I, s, o))
                  return D;
              }
            }
          }; c.default.element(I); ) {
            var q = o.interactables.forEachMatch(I, R);
            if (q) {
              a.prepared.name = "drag", a.interactable = q, a.element = I;
              break;
            }
            I = (0, _.parentNode)(I);
          }
        }
      }
    } } };
    zo.default = Pd;
    var Ro = {};
    function ss(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(ss, "ss");
    u(ss, "re"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
    var Id = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Xn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = ss(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      ss(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: ss }, Ad = Id;
    Ro.default = Ad;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var _d = { id: "auto-start", install: function(n) {
      n.usePlugin(Xn.default), n.usePlugin(Ro.default), n.usePlugin(zo.default);
    } };
    No.default = _d;
    var Zn = {};
    function kd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(kd, "kd");
    u(kd, "ue");
    function Dd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Dd, "Dd");
    u(Dd, "ce");
    function ru(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = kd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, v) {
          var E = s.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(v.type)) {
                var g = (0, t.getWindow)(v.target).document, x = p.getDocOptions(g);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(v.type) || c.default.element(v.target) && (0, _.matchesSelector)(v.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || v.preventDefault();
            } else
              v.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, _.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(ru, "ru");
    u(ru, "fe"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.default = void 0, Zn.install = ru;
    var zd = { id: "core/interactablePreventDefault", install: ru, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Dd, n;
    }, {}) };
    Zn.default = zd;
    var ls = {};
    Object.defineProperty(ls, "__esModule", { value: true }), ls.default = void 0, ls.default = {};
    var Mi, us = {};
    Object.defineProperty(us, "__esModule", { value: true }), us.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Mi || (Mi = {})), Mi.touchAction, Mi.boxSizing, Mi.noListeners;
    var Rd = { id: "dev-tools", install: function() {
    } };
    us.default = Rd;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: true }), mn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = yt.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var vn = {};
    function nu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, C = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              x || p.return == null || p.return();
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
            return iu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? iu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(nu, "nu");
    u(nu, "be");
    function iu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(iu, "iu");
    u(iu, "xe");
    function Nd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Nd, "Nd");
    u(Nd, "we");
    function gn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(gn, "gn");
    u(gn, "_e"), Object.defineProperty(vn, "__esModule", { value: true }), vn.default = void 0, vn.getRectOffset = ou;
    var Gd = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), gn(this, "states", []), gn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), gn(this, "startDelta", void 0), gn(this, "result", void 0), gn(this, "endResult", void 0), gn(this, "edges", void 0), gn(this, "interaction", void 0), this.interaction = s, this.result = Go();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var v = s.phase, E = this.interaction, g = function(C) {
          var T = C.interactable.options[C.prepared.name], I = T.modifiers;
          return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(R) {
            var q = T[R];
            return q && q.enabled && { options: q, methods: q._methods };
          }).filter(function(R) {
            return !!R;
          });
        }(E);
        this.prepareStates(g), this.edges = (0, Y.default)({}, E.edges), this.startOffset = ou(E.rect, p), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: v, pageCoords: p, preEnd: false });
        return this.result = Go(), this.startAll(x), this.result = this.setAll(x);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var v = this.states[p];
          v.methods.start && (s.state = v, v.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, v = s.preEnd, E = s.skipModifiers, g = s.rect;
        s.coords = (0, Y.default)({}, s.pageCoords), s.rect = (0, Y.default)({}, g);
        for (var x = E ? this.states.slice(E) : this.states, C = Go(s.coords, s.rect), T = 0; T < x.length; T++) {
          var I, R = x[T], q = R.options, D = (0, Y.default)({}, s.coords), H = null;
          (I = R.methods) != null && I.set && this.shouldDo(q, v, p) && (s.state = R, H = R.methods.set(s), ut.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - D.x, y: s.coords.y - D.y })), C.eventProps.push(H);
        }
        C.delta.x = s.coords.x - s.pageCoords.x, C.delta.y = s.coords.y - s.pageCoords.y, C.rectDelta.left = s.rect.left - g.left, C.rectDelta.right = s.rect.right - g.right, C.rectDelta.top = s.rect.top - g.top, C.rectDelta.bottom = s.rect.bottom - g.bottom;
        var Z = this.result.coords, $ = this.result.rect;
        if (Z && $) {
          var rt = C.rect.left !== $.left || C.rect.right !== $.right || C.rect.top !== $.top || C.rect.bottom !== $.bottom;
          C.changed = rt || Z.x !== C.coords.x || Z.y !== C.coords.y;
        }
        return C;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, v = s.phase, E = p.coords.cur, g = p.coords.start, x = this.result, C = this.startDelta, T = x.delta;
        v === "start" && (0, Y.default)(this.startDelta, x.delta);
        for (var I = 0; I < [[g, C], [E, T]].length; I++) {
          var R = nu([[g, C], [E, T]][I], 2), q = R[0], D = R[1];
          q.page.x += D.x, q.page.y += D.y, q.client.x += D.x, q.client.y += D.y;
        }
        var H = this.result.rectDelta, Z = s.rect || p.rect;
        Z.left += H.left, Z.right += H.right, Z.top += H.top, Z.bottom += H.bottom, Z.width = Z.right - Z.left, Z.height = Z.bottom - Z.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, v = s.phase, E = s.preEnd, g = s.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: v, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = x, !x.changed && (!g || g < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var C = p.coords.cur.page, T = { x: s.modifiedCoords.x - C.x, y: s.modifiedCoords.y - C.y };
          x.coords.x += T.x, x.coords.y += T.y, x.delta.x += T.x, x.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, v = s.event, E = this.states;
        if (E && E.length) {
          for (var g = false, x = 0; x < E.length; x++) {
            var C = E[x];
            s.state = C;
            var T = C.options, I = C.methods, R = I.beforeEnd && I.beforeEnd(s);
            if (R)
              return this.endResult = R, false;
            g = g || !g && this.shouldDo(T, true, s.phase, true);
          }
          g && p.move({ event: v, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var v = (0, Y.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(v);
          for (var E = 0; E < this.states.length; E++) {
            var g = this.states[E];
            v.state = g, g.methods.stop && g.methods.stop(v);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var v = s[p], E = v.options, g = v.methods, x = v.name;
          this.states.push({ options: E, methods: g, index: p, name: x });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, v = p.coords, E = p.rect, g = p.modification;
        if (g.result) {
          for (var x = g.startDelta, C = g.result, T = C.delta, I = C.rectDelta, R = [[v.start, x], [v.cur, T]], q = 0; q < R.length; q++) {
            var D = nu(R[q], 2), H = D[0], Z = D[1];
            H.page.x -= Z.x, H.page.y -= Z.y, H.client.x -= Z.x, H.client.y -= Z.y;
          }
          E.left -= I.left, E.right -= I.right, E.top -= I.top, E.bottom -= I.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, v, E) {
        return !(!s || s.enabled === false || E && !s.endOnly || s.endOnly && !p || v === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, mn.default)(p);
        }), this.result = Go((0, Y.default)({}, s.result.coords), (0, Y.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Nd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Go(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Go, "Go");
    u(Go, "Oe");
    function ou(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(ou, "ou");
    u(ou, "Ee"), vn.default = Gd;
    var me = {};
    function Lo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(Lo, "Lo");
    u(Lo, "Te"), Object.defineProperty(me, "__esModule", { value: true }), me.addEventModifiers = Lo, me.default = void 0, me.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(v) {
        var E = v || {};
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
    var Ld = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new vn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": Lo, "interactions:action-move": Lo, "interactions:action-end": Lo, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } }, qd = Ld;
    me.default = qd;
    var Pi = {};
    Object.defineProperty(Pi, "__esModule", { value: true }), Pi.defaults = void 0, Pi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ii = {};
    function cs(n) {
      return cs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, cs(n);
    }
    __name(cs, "cs");
    u(cs, "De");
    function jd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(jd, "jd");
    u(jd, "Ae");
    function ps(n, o) {
      return ps = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, ps(n, o);
    }
    __name(ps, "ps");
    u(ps, "ze");
    function Bd(n, o) {
      if (o && (cs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Dt(n);
    }
    __name(Bd, "Bd");
    u(Bd, "Ce");
    function Dt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Dt, "Dt");
    u(Dt, "Re");
    function qo(n) {
      return qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, qo(n);
    }
    __name(qo, "qo");
    u(qo, "Fe");
    function jt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(jt, "jt");
    u(jt, "Xe"), Object.defineProperty(Ii, "__esModule", { value: true }), Ii.InteractEvent = void 0;
    var au = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && ps(g, x);
      })(E, n);
      var o, a, s, p, v = (s = E, p = function() {
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
        var g, x = qo(s);
        if (p) {
          var C = qo(this).constructor;
          g = Reflect.construct(x, arguments, C);
        } else
          g = x.apply(this, arguments);
        return Bd(this, g);
      });
      function E(g, x, C, T, I, R, q) {
        var D;
        (function(Lt, vt) {
          if (!(Lt instanceof vt))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), jt(Dt(D = v.call(this, g)), "relatedTarget", null), jt(Dt(D), "screenX", void 0), jt(Dt(D), "screenY", void 0), jt(Dt(D), "button", void 0), jt(Dt(D), "buttons", void 0), jt(Dt(D), "ctrlKey", void 0), jt(Dt(D), "shiftKey", void 0), jt(Dt(D), "altKey", void 0), jt(Dt(D), "metaKey", void 0), jt(Dt(D), "page", void 0), jt(Dt(D), "client", void 0), jt(Dt(D), "delta", void 0), jt(Dt(D), "rect", void 0), jt(Dt(D), "x0", void 0), jt(Dt(D), "y0", void 0), jt(Dt(D), "t0", void 0), jt(Dt(D), "dt", void 0), jt(Dt(D), "duration", void 0), jt(Dt(D), "clientX0", void 0), jt(Dt(D), "clientY0", void 0), jt(Dt(D), "velocity", void 0), jt(Dt(D), "speed", void 0), jt(Dt(D), "swipe", void 0), jt(Dt(D), "axes", void 0), jt(Dt(D), "preEnd", void 0), I = I || g.element;
        var H = g.interactable, Z = (H && H.options || Pi.defaults).deltaSource, $ = (0, Gt.default)(H, I, C), rt = T === "start", ot = T === "end", pt = rt ? Dt(D) : g.prevEvent, St = rt ? g.coords.start : ot ? { page: pt.page, client: pt.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return D.page = (0, Y.default)({}, St.page), D.client = (0, Y.default)({}, St.client), D.rect = (0, Y.default)({}, g.rect), D.timeStamp = St.timeStamp, ot || (D.page.x -= $.x, D.page.y -= $.y, D.client.x -= $.x, D.client.y -= $.y), D.ctrlKey = x.ctrlKey, D.altKey = x.altKey, D.shiftKey = x.shiftKey, D.metaKey = x.metaKey, D.button = x.button, D.buttons = x.buttons, D.target = I, D.currentTarget = I, D.preEnd = R, D.type = q || C + (T || ""), D.interactable = H, D.t0 = rt ? g.pointers[g.pointers.length - 1].downTime : pt.t0, D.x0 = g.coords.start.page.x - $.x, D.y0 = g.coords.start.page.y - $.y, D.clientX0 = g.coords.start.client.x - $.x, D.clientY0 = g.coords.start.client.y - $.y, D.delta = rt || ot ? { x: 0, y: 0 } : { x: D[Z].x - pt[Z].x, y: D[Z].y - pt[Z].y }, D.dt = g.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, Y.default)({}, g.coords.velocity[Z]), D.speed = (0, Jt.default)(D.velocity.x, D.velocity.y), D.swipe = ot || T === "inertiastart" ? D.getSwipe() : null, D;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var C = 112.5 <= x && x < 247.5, T = 202.5 <= x && x < 337.5;
        return { up: T, down: !T && 22.5 <= x && x < 157.5, left: C, right: !C && (292.5 <= x || x < 67.5), angle: x, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && jd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Ne.BaseEvent);
    Ii.InteractEvent = au, Object.defineProperties(au.prototype, { pageX: { get: function() {
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
    var Ai = {};
    function su(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(su, "su");
    u(su, "We");
    function Hd(n, o, a) {
      return o && su(n.prototype, o), a && su(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Hd, "Hd");
    u(Hd, "Le");
    function _i(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_i, "_i");
    u(_i, "Ue"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.PointerInfo = void 0;
    var $d = Hd(u(/* @__PURE__ */ __name(function n(o, a, s, p, v) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), _i(this, "id", void 0), _i(this, "pointer", void 0), _i(this, "event", void 0), _i(this, "downTime", void 0), _i(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = v;
    }, "n"), "t"));
    Ai.PointerInfo = $d;
    var jo, Bo, ze = {};
    function Fd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Fd, "Fd");
    u(Fd, "$e");
    function Ht(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ht, "Ht");
    u(Ht, "He"), Object.defineProperty(ze, "__esModule", { value: true }), ze.Interaction = void 0, Object.defineProperty(ze, "PointerInfo", { enumerable: true, get: function() {
      return Ai.PointerInfo;
    } }), ze.default = ze._ProxyValues = ze._ProxyMethods = void 0, ze._ProxyValues = jo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(jo || (ze._ProxyValues = jo = {})), ze._ProxyMethods = Bo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Bo || (ze._ProxyMethods = Bo = {}));
    var Wd = 0, lu = function() {
      function n(s) {
        var p = this, v = s.pointerType, E = s.scopeFire;
        (function(R, q) {
          if (!(R instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ht(this, "interactable", null), Ht(this, "element", null), Ht(this, "rect", null), Ht(this, "_rects", void 0), Ht(this, "edges", null), Ht(this, "_scopeFire", void 0), Ht(this, "prepared", { name: null, axis: null, edges: null }), Ht(this, "pointerType", void 0), Ht(this, "pointers", []), Ht(this, "downEvent", null), Ht(this, "downPointer", {}), Ht(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ht(this, "prevEvent", null), Ht(this, "pointerIsDown", false), Ht(this, "pointerWasMoved", false), Ht(this, "_interacting", false), Ht(this, "_ending", false), Ht(this, "_stopped", true), Ht(this, "_proxy", null), Ht(this, "simulation", null), Ht(this, "doMove", (0, Ge.warnOnce)(function(R) {
          this.move(R);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ht(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), Ht(this, "_id", Wd++), this._scopeFire = E, this.pointerType = v;
        var g = this;
        this._proxy = {};
        var x = u(function(R) {
          Object.defineProperty(p._proxy, R, { get: function() {
            return g[R];
          } });
        }, "a");
        for (var C in jo)
          x(C);
        var T = u(function(R) {
          Object.defineProperty(p._proxy, R, { value: function() {
            return g[R].apply(g, arguments);
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
      } }, { key: "pointerDown", value: function(s, p, v) {
        var E = this.updatePointer(s, p, v, true), g = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: v, pointerIndex: E, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, v) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, Ge.copyAction)(this.prepared, s), this.interactable = p, this.element = v, this.rect = p.getRect(v), this.edges = this.prepared.edges ? (0, Y.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, v) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, v, false);
        var E, g, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Jt.default)(E, g) > this.pointerMoveTolerance);
        var C = this.getPointerIndex(s), T = { pointer: s, pointerIndex: C, pointerInfo: this.pointers[C], event: p, type: "move", eventTarget: v, dx: E, dy: g, duplicate: x, interaction: this };
        x || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), x || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || J.setZeroCoords(this.coords.delta), (s = (0, Y.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, v, E) {
        var g = this.getPointerIndex(s);
        g === -1 && (g = this.updatePointer(s, p, v, false));
        var x = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(x), { pointer: s, pointerIndex: g, pointerInfo: this.pointers[g], event: p, eventTarget: v, type: x, curEventTarget: E, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
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
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : yt.findIndex(this.pointers, function(v) {
          return v.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, v, E) {
        var g = J.getPointerId(s), x = this.getPointerIndex(s), C = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(p.type)), C ? C.pointer = s : (C = new Ai.PointerInfo(g, s, p, null, null), x = this.pointers.length, this.pointers.push(C)), J.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, C.downTime = this.coords.cur.timeStamp, C.downTarget = v, J.pointerExtend(this.downPointer, s), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, v), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: v, down: E, pointerInfo: C, pointerIndex: x, interaction: this }), x;
      } }, { key: "removePointer", value: function(s, p) {
        var v = this.getPointerIndex(s);
        if (v !== -1) {
          var E = this.pointers[v];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p, eventTarget: null, pointerIndex: v, pointerInfo: E, interaction: this }), this.pointers.splice(v, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p, v) {
        this._latestPointer.pointer = s, this._latestPointer.event = p, this._latestPointer.eventTarget = v;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p, v, E) {
        return new Ii.InteractEvent(this, s, this.prepared.name, p, this.element, v, E);
      } }, { key: "_fireEvent", value: function(s) {
        var p;
        (p = this.interactable) == null || p.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, v = s.phase, E = s.preEnd, g = s.type, x = this.rect;
        if (x && v === "move" && (ut.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(v), s) === false)
          return false;
        var C = s.iEvent = this._createPreparedEvent(p, v, E, g);
        return this._scopeFire("interactions:action-".concat(v), s), v === "start" && (this.prevEvent = C), this._fireEvent(C), this._scopeFire("interactions:after-action-".concat(v), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], a && Fd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    ze.Interaction = lu;
    var Ud = lu;
    ze.default = Ud;
    var bn = {};
    function uu(n) {
      n.pointerIsDown && (fs(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(uu, "uu");
    u(uu, "tn");
    function cu(n) {
      ds(n.interaction);
    }
    __name(cu, "cu");
    u(cu, "en");
    function ds(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return fs(n.coords.cur, o), fs(n.coords.delta, o), ut.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ds, "ds");
    u(ds, "nn");
    function Vd(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Vd, "Vd");
    u(Vd, "rn");
    function fs(n, o) {
      var a = n.page, s = n.client, p = o.x, v = o.y;
      a.x += p, a.y += v, s.x += p, s.y += v;
    }
    __name(fs, "fs");
    u(fs, "on"), Object.defineProperty(bn, "__esModule", { value: true }), bn.addTotal = uu, bn.applyPending = ds, bn.default = void 0, ze._ProxyMethods.offsetBy = "";
    var Yd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Vd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return uu(n.interaction);
    }, "interactions:before-action-start": cu, "interactions:before-action-move": cu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ds(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, Xd = Yd;
    bn.default = Xd;
    var Qn = {};
    function Zd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Zd, "Zd");
    u(Zd, "un");
    function le(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(le, "le");
    u(le, "cn"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = Qn.InertiaState = void 0;
    var pu = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), le(this, "active", false), le(this, "isModified", false), le(this, "smoothEnd", false), le(this, "allowResume", false), le(this, "modification", void 0), le(this, "modifierCount", 0), le(this, "modifierArg", void 0), le(this, "startCoords", void 0), le(this, "t0", 0), le(this, "v0", 0), le(this, "te", 0), le(this, "targetOffset", void 0), le(this, "modifiedOffset", void 0), le(this, "currentOffset", void 0), le(this, "lambda_v0", 0), le(this, "one_ve_v0", 0), le(this, "timeout", void 0), le(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, v = Ho(p);
        if (!v || !v.enabled)
          return false;
        var E = p.coords.velocity.client, g = (0, Jt.default)(E.x, E.y), x = this.modification || (this.modification = new vn.default(p));
        if (x.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = v.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && g > v.minSpeed && g > v.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, v = Ho(this.interaction), E = v.resistance, g = -Math.log(v.endSpeed / this.v0) / E;
        this.targetOffset = { x: (p.x - g) / E, y: (p.y - g) / E }, this.te = g, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - v.endSpeed / this.v0;
        var x = this.modification, C = this.modifierArg;
        C.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, x.result = x.setAll(C), x.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + x.result.delta.x, y: this.targetOffset.y + x.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var p = this;
        this.timeout = Se.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, v, E, g, x = this, C = this.interaction, T = Ho(C).resistance, I = (C._now() - this.t0) / 1e3;
        if (I < this.te) {
          var R, q = 1 - (Math.exp(-T * I) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, v = this.modifiedOffset.x, E = this.modifiedOffset.y, R = { x: du(g = q, 0, s, v), y: du(g, 0, p, E) }) : R = { x: this.targetOffset.x * q, y: this.targetOffset.y * q };
          var D = { x: R.x - this.currentOffset.x, y: R.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, C.offsetBy(D), C.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          C.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, v = p._now() - this.t0, E = Ho(p).smoothEndDuration;
        if (v < E) {
          var g = { x: fu(v, 0, this.targetOffset.x, E), y: fu(v, 0, this.targetOffset.y, E) }, x = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, p.offsetBy(x), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, v = s.event, E = s.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(p, v, E, true), g._doPhase({ interaction: g, event: v, phase: "resume" }), (0, J.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Se.default.cancel(this.timeout);
      } }]) && Zd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Ho(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Ho, "Ho");
    u(Ho, "dn"), Qn.InertiaState = pu;
    var Qd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(bn.default), n.usePlugin(me.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new pu(o);
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
    }, "interactions:action-resume": me.addEventModifiers, "interactions:action-inertiastart": me.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    function du(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(du, "du");
    u(du, "vn");
    function fu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(fu, "fu");
    u(fu, "hn");
    var Kd = Qd;
    Qn.default = Kd;
    var ki = {};
    function Jd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Jd, "Jd");
    u(Jd, "mn");
    function Di(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Di, "Di");
    u(Di, "bn");
    function hu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(hu, "hu");
    u(hu, "xn"), Object.defineProperty(ki, "__esModule", { value: true }), ki.Eventable = void 0;
    var tf = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Di(this, "options", void 0), Di(this, "types", {}), Di(this, "propagationStopped", false), Di(this, "immediatePropagationStopped", false), Di(this, "global", void 0), this.options = (0, Y.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, v = this.global;
        (p = this.types[s.type]) && hu(s, p), !s.propagationStopped && v && (p = v[s.type]) && hu(s, p);
      } }, { key: "on", value: function(s, p) {
        var v = (0, ft.default)(s, p);
        for (s in v)
          this.types[s] = yt.merge(this.types[s] || [], v[s]);
      } }, { key: "off", value: function(s, p) {
        var v = (0, ft.default)(s, p);
        for (s in v) {
          var E = this.types[s];
          if (E && E.length)
            for (var g = 0; g < v[s].length; g++) {
              var x = v[s][g], C = E.indexOf(x);
              C !== -1 && E.splice(C, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Jd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    ki.Eventable = tf;
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), zi.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var hs = {};
    Object.defineProperty(hs, "__esModule", { value: true }), hs.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var v = n.interactables.get(s, p);
        return v || ((v = n.interactables.new(s, p)).events.global = a.globalEvents), v;
      }, "a"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = _.getElementRect, o.getElementClientRect = _.getElementClientRect, o.matchesSelector = _.matchesSelector, o.closest = _.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Ge.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var v = 0; v < a.length; v++) {
            var E = a[v];
            this.on(E, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.on(g, a[g], s);
          return this;
        }
        return (0, zi.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Ge.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var v = 0; v < a.length; v++) {
            var E = a[v];
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
        return (0, zi.default)(a, this.scope.actions) ? a in this.globalEvents && (x = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(x, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return V.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return V.default.supportsPointerEvent;
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
    function ef(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(ef, "ef");
    u(ef, "En");
    function Dr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Dr, "Dr");
    u(Dr, "Sn"), Object.defineProperty($o, "__esModule", { value: true }), $o.Interactable = void 0;
    var rf = function() {
      function n(s, p, v, E) {
        (function(g, x) {
          if (!(g instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Dr(this, "options", void 0), Dr(this, "_actions", void 0), Dr(this, "target", void 0), Dr(this, "events", new ki.Eventable()), Dr(this, "_context", void 0), Dr(this, "_win", void 0), Dr(this, "_doc", void 0), Dr(this, "_scopeEvents", void 0), Dr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || v, this._win = (0, t.getWindow)((0, _.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = E, this.set(p);
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, p) {
        return c.default.func(p.onstart) && this.on("".concat(s, "start"), p.onstart), c.default.func(p.onmove) && this.on("".concat(s, "move"), p.onmove), c.default.func(p.onend) && this.on("".concat(s, "end"), p.onend), c.default.func(p.oninertiastart) && this.on("".concat(s, "inertiastart"), p.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, p, v) {
        (c.default.array(p) || c.default.object(p)) && this.off(s, p), (c.default.array(v) || c.default.object(v)) && this.on(s, v);
      } }, { key: "setPerAction", value: function(s, p) {
        var v = this._defaults;
        for (var E in p) {
          var g = E, x = this.options[s], C = p[g];
          g === "listeners" && this.updatePerActionListeners(s, x.listeners, C), c.default.array(C) ? x[g] = yt.from(C) : c.default.plainObject(C) ? (x[g] = (0, Y.default)(x[g] || {}, (0, mn.default)(C)), c.default.object(v.perAction[g]) && "enabled" in v.perAction[g] && (x[g].enabled = C.enabled !== false)) : c.default.bool(C) && c.default.object(v.perAction[g]) ? x[g].enabled = C : x[g] = C;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, _.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(v) {
          var E = (0, Y.default)({}, p._rectChecker(v));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, _.trySelector)(p) || c.default.object(p)) {
          for (var v in this.options[s] = p, this._actions.map)
            this.options[v][s] = p;
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
      } }, { key: "testIgnoreAllow", value: function(s, p, v) {
        return !this.testIgnore(s.ignoreFrom, p, v) && this.testAllow(s.allowFrom, p, v);
      } }, { key: "testAllow", value: function(s, p, v) {
        return !s || !!c.default.element(v) && (c.default.string(s) ? (0, _.matchesUpTo)(v, s, p) : !!c.default.element(s) && (0, _.nodeContains)(s, v));
      } }, { key: "testIgnore", value: function(s, p, v) {
        return !(!s || !c.default.element(v)) && (c.default.string(s) ? (0, _.matchesUpTo)(v, s, p) : !!c.default.element(s) && (0, _.nodeContains)(s, v));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, v, E) {
        c.default.object(p) && !c.default.array(p) && (E = v, v = null);
        var g = s === "on" ? "add" : "remove", x = (0, ft.default)(p, v);
        for (var C in x) {
          C === "wheel" && (C = V.default.wheelEvent);
          for (var T = 0; T < x[C].length; T++) {
            var I = x[C][T];
            (0, zi.default)(C, this._actions) ? this.events[s](C, I) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, C, I, E) : this._scopeEvents[g](this.target, C, I, E);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, v) {
        return this._onOff("on", s, p, v);
      } }, { key: "off", value: function(s, p, v) {
        return this._onOff("off", s, p, v);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var v in c.default.object(s) || (s = {}), this.options = (0, mn.default)(p.base), this._actions.methodDict) {
          var E = v, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, Y.default)((0, Y.default)({}, p.perAction), p.actions[E])), this[g](s[E]);
        }
        for (var x in s)
          c.default.func(this[x]) && this[x](s[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], v = p.length - 1; v >= 0; v--) {
              var E = p[v], g = E.selector, x = E.context, C = E.listeners;
              g === this.target && x === this._context && p.splice(v, 1);
              for (var T = C.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, C[T][0], C[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && ef(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    $o.Interactable = rf;
    var Fo = {};
    function nf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(nf, "nf");
    u(nf, "Mn");
    function ms(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ms, "ms");
    u(ms, "kn"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.InteractableSet = void 0;
    var of = function() {
      function n(s) {
        var p = this;
        (function(v, E) {
          if (!(v instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ms(this, "list", []), ms(this, "selectorMap", {}), ms(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(v) {
          var E = v.interactable, g = E.target, x = E._context, C = c.default.string(g) ? p.selectorMap[g] : g[p.scope.id], T = yt.findIndex(C, function(I) {
            return I.context === x;
          });
          C[T] && (C[T].context = null, C[T].interactable = null), C.splice(T, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, Y.default)(p || {}, { actions: this.scope.actions });
        var v = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), E = { context: v._context, interactable: v };
        return this.scope.addDocument(v._doc), this.list.push(v), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(E)) : (v.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: s, options: p, interactable: v, win: this.scope._win }), v;
      } }, { key: "get", value: function(s, p) {
        var v = p && p.context || this.scope.document, E = c.default.string(s), g = E ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var x = yt.find(g, function(C) {
          return C.context === v && (E || C.interactable.inContext(s));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var v = 0; v < this.list.length; v++) {
          var E = this.list[v], g = void 0;
          if ((c.default.string(E.target) ? c.default.element(s) && _.matchesSelector(s, E.target) : s === E.target) && E.inContext(s) && (g = p(E)), g !== void 0)
            return g;
        }
      } }]) && nf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Fo.InteractableSet = of;
    var Wo = {};
    function af(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(af, "af");
    u(af, "An");
    function vs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vs, "vs");
    u(vs, "zn");
    function gs(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, C = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              x || p.return == null || p.return();
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
            return mu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? mu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(gs, "gs");
    u(gs, "Cn");
    function mu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(mu, "mu");
    u(mu, "Rn"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var sf = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), vs(this, "currentTarget", void 0), vs(this, "originalEvent", void 0), vs(this, "type", void 0), this.originalEvent = s, (0, $e.default)(this, s);
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
      } }]) && af(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Ri(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, Y.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(Ri, "Ri");
    u(Ri, "Xn");
    var lf = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], v = { add: E, remove: g, addDelegate: function(T, I, R, q, D) {
        var H = Ri(D);
        if (!s[R]) {
          s[R] = [];
          for (var Z = 0; Z < p.length; Z++) {
            var $ = p[Z];
            E($, R, x), E($, R, C, true);
          }
        }
        var rt = s[R], ot = yt.find(rt, function(pt) {
          return pt.selector === T && pt.context === I;
        });
        ot || (ot = { selector: T, context: I, listeners: [] }, rt.push(ot)), ot.listeners.push([q, H]);
      }, removeDelegate: function(T, I, R, q, D) {
        var H, Z = Ri(D), $ = s[R], rt = false;
        if ($)
          for (H = $.length - 1; H >= 0; H--) {
            var ot = $[H];
            if (ot.selector === T && ot.context === I) {
              for (var pt = ot.listeners, St = pt.length - 1; St >= 0; St--) {
                var Lt = gs(pt[St], 2), vt = Lt[0], zt = Lt[1], Ye = zt.capture, Rr = zt.passive;
                if (vt === q && Ye === Z.capture && Rr === Z.passive) {
                  pt.splice(St, 1), pt.length || ($.splice(H, 1), g(I, R, x), g(I, R, C, true)), rt = true;
                  break;
                }
              }
              if (rt)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: C, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function E(T, I, R, q) {
        var D = Ri(q), H = yt.find(a, function(Z) {
          return Z.eventTarget === T;
        });
        H || (H = { eventTarget: T, events: {} }, a.push(H)), H.events[I] || (H.events[I] = []), T.addEventListener && !yt.contains(H.events[I], R) && (T.addEventListener(I, R, v.supportsOptions ? D : D.capture), H.events[I].push(R));
      }
      __name(E, "E");
      u(E, "s");
      function g(T, I, R, q) {
        var D = Ri(q), H = yt.findIndex(a, function(St) {
          return St.eventTarget === T;
        }), Z = a[H];
        if (Z && Z.events)
          if (I !== "all") {
            var $ = false, rt = Z.events[I];
            if (rt) {
              if (R === "all") {
                for (var ot = rt.length - 1; ot >= 0; ot--)
                  g(T, I, rt[ot], D);
                return;
              }
              for (var pt = 0; pt < rt.length; pt++)
                if (rt[pt] === R) {
                  T.removeEventListener(I, R, v.supportsOptions ? D : D.capture), rt.splice(pt, 1), rt.length === 0 && (delete Z.events[I], $ = true);
                  break;
                }
            }
            $ && !Object.keys(Z.events).length && a.splice(H, 1);
          } else
            for (I in Z.events)
              Z.events.hasOwnProperty(I) && g(T, I, "all");
      }
      __name(g, "g");
      u(g, "l");
      function x(T, I) {
        for (var R = Ri(I), q = new sf(T), D = s[T.type], H = gs(J.getEventTargets(T), 1)[0], Z = H; c.default.element(Z); ) {
          for (var $ = 0; $ < D.length; $++) {
            var rt = D[$], ot = rt.selector, pt = rt.context;
            if (_.matchesSelector(Z, ot) && _.nodeContains(pt, H) && _.nodeContains(pt, Z)) {
              var St = rt.listeners;
              q.currentTarget = Z;
              for (var Lt = 0; Lt < St.length; Lt++) {
                var vt = gs(St[Lt], 2), zt = vt[0], Ye = vt[1], Rr = Ye.capture, Gs = Ye.passive;
                Rr === R.capture && Gs === R.passive && zt(q);
              }
            }
          }
          Z = _.parentNode(Z);
        }
      }
      __name(x, "x");
      u(x, "u");
      function C(T) {
        return x(T, true);
      }
      __name(C, "C");
      return u(C, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return v.supportsOptions = true;
      }, get passive() {
        return v.supportsPassive = true;
      } }), n.events = v, v;
    } };
    Wo.default = lf;
    var Uo = {};
    Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var Vo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Vo.methodOrder.length; o++) {
        var a;
        a = Vo.methodOrder[o];
        var s = Vo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, p = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var v = 0; v < p.interactions.list.length; v++) {
        var E = p.interactions.list[v], g = s;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; g; ) {
            if (g === E.element)
              return E;
            g = _.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, v = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var E = 0; E < v.interactions.list.length; E++) {
        var g = v.interactions.list[E];
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
      for (var x = 0; x < v.interactions.list.length; x++) {
        var C = v.interactions.list[x];
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
          var v = p.interactable;
          if (v && (!v.options.gesture || !v.options.gesture.enabled))
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
    var uf = Vo;
    Uo.default = uf;
    var Yo = {};
    function bs(n) {
      return bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, bs(n);
    }
    __name(bs, "bs");
    u(bs, "Nn");
    function gu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, C = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              x || p.return == null || p.return();
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
            return bu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? bu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(gu, "gu");
    u(gu, "qn");
    function bu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(bu, "bu");
    u(bu, "Gn");
    function cf(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(cf, "cf");
    u(cf, "$n");
    function pf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(pf, "pf");
    u(pf, "Hn");
    function ys(n, o) {
      return ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, ys(n, o);
    }
    __name(ys, "ys");
    u(ys, "Kn");
    function df(n, o) {
      if (o && (bs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(df, "df");
    u(df, "Zn");
    function Xo(n) {
      return Xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Xo(n);
    }
    __name(Xo, "Xo");
    u(Xo, "Jn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0;
    var ws = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function yu(n, o) {
      return function(a) {
        var s = o.interactions.list, p = J.getPointerType(a), v = gu(J.getEventTargets(a), 2), E = v[0], g = v[1], x = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var C = 0; C < a.changedTouches.length; C++) {
            var T = a.changedTouches[C], I = { pointer: T, pointerId: J.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: E, curEventTarget: g, scope: o }, R = wu(I);
            x.push([I.pointer, I.eventTarget, I.curEventTarget, R]);
          }
        } else {
          var q = false;
          if (!V.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var D = 0; D < s.length && !q; D++)
              q = s[D].pointerType !== "mouse" && s[D].pointerIsDown;
            q = q || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!q) {
            var H = { pointer: a, pointerId: J.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: g, eventTarget: E, scope: o }, Z = wu(H);
            x.push([H.pointer, H.eventTarget, H.curEventTarget, Z]);
          }
        }
        for (var $ = 0; $ < x.length; $++) {
          var rt = gu(x[$], 4), ot = rt[0], pt = rt[1], St = rt[2];
          rt[3][n](ot, a, pt, St);
        }
      };
    }
    __name(yu, "yu");
    u(yu, "tr");
    function wu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Uo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(wu, "wu");
    u(wu, "er");
    function xs(n, o) {
      var a = n.doc, s = n.scope, p = n.options, v = s.interactions.docEvents, E = s.events, g = E[o];
      for (var x in s.browser.isIOS && !p.events && (p.events = { passive: false }), E.delegatedEvents)
        g(a, x, E.delegateListener), g(a, x, E.delegateUseCapture, true);
      for (var C = p && p.events, T = 0; T < v.length; T++) {
        var I = v[T];
        g(a, I.type, I.listener, C);
      }
    }
    __name(xs, "xs");
    u(xs, "nr");
    var ff = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ws.length; a++) {
        var s = ws[a];
        o[s] = yu(s, n);
      }
      var p, v = V.default.pEventTypes;
      function E() {
        for (var g = 0; g < n.interactions.list.length; g++) {
          var x = n.interactions.list[g];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var C = function() {
              var I = x.pointers[T];
              n.documents.some(function(R) {
                var q = R.doc;
                return (0, _.nodeContains)(q, I.downTarget);
              }) || x.removePointer(I.pointer, I.event);
            }, T = 0; T < x.pointers.length; T++)
              C();
        }
      }
      __name(E, "E");
      u(E, "a"), (p = P.default.PointerEvent ? [{ type: v.down, listener: E }, { type: v.down, listener: o.pointerDown }, { type: v.move, listener: o.pointerMove }, { type: v.up, listener: o.pointerUp }, { type: v.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var x = 0; x < n.interactions.list.length; x++)
          n.interactions.list[x].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(D, H) {
          if (typeof H != "function" && H !== null)
            throw new TypeError("Super expression must either be null or a function");
          D.prototype = Object.create(H && H.prototype, { constructor: { value: D, writable: true, configurable: true } }), Object.defineProperty(D, "prototype", { writable: false }), H && ys(D, H);
        })(q, g);
        var x, C, T, I, R = (T = q, I = function() {
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
          var D, H = Xo(T);
          if (I) {
            var Z = Xo(this).constructor;
            D = Reflect.construct(H, arguments, Z);
          } else
            D = H.apply(this, arguments);
          return df(this, D);
        });
        function q() {
          return cf(this, q), R.apply(this, arguments);
        }
        __name(q, "q");
        return u(q, "s"), x = q, (C = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(D) {
          n.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && pf(x.prototype, C), Object.defineProperty(x, "prototype", { writable: false }), q;
      }(ze.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(C, T) {
          return n.fire(C, T);
        };
        var x = new n.Interaction(g);
        return n.interactions.list.push(x), x;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Zn.default);
    }, listeners: { "scope:add-document": function(n) {
      return xs(n, "add");
    }, "scope:remove-document": function(n) {
      return xs(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: xs, doOnInteractions: yu, methodNames: ws }, hf = ff;
    Yo.default = hf;
    var Ni = {};
    function Es(n) {
      return Es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Es(n);
    }
    __name(Es, "Es");
    u(Es, "ar");
    function Gi() {
      return Gi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(n, o, a) {
        var s = mf(n, o);
        if (s) {
          var p = Object.getOwnPropertyDescriptor(s, o);
          return p.get ? p.get.call(arguments.length < 3 ? n : a) : p.value;
        }
      }, Gi.apply(this, arguments);
    }
    __name(Gi, "Gi");
    u(Gi, "sr");
    function mf(n, o) {
      for (; !Object.prototype.hasOwnProperty.call(n, o) && (n = Xr(n)) !== null; )
        ;
      return n;
    }
    __name(mf, "mf");
    u(mf, "lr");
    function Ss(n, o) {
      return Ss = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Ss(n, o);
    }
    __name(Ss, "Ss");
    u(Ss, "ur");
    function vf(n, o) {
      if (o && (Es(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(vf, "vf");
    u(vf, "cr");
    function Xr(n) {
      return Xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Xr(n);
    }
    __name(Xr, "Xr");
    u(Xr, "fr");
    function xu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(xu, "xu");
    u(xu, "dr");
    function Eu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Eu, "Eu");
    u(Eu, "pr");
    function Su(n, o, a) {
      return o && Eu(n.prototype, o), a && Eu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Su, "Su");
    u(Su, "vr");
    function ve(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ve, "ve");
    u(ve, "hr"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.Scope = void 0, Ni.initScope = Cu;
    var gf = function() {
      function n() {
        var o = this;
        xu(this, n), ve(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ve(this, "isInitialized", false), ve(this, "listenerMaps", []), ve(this, "browser", V.default), ve(this, "defaults", (0, mn.default)(Pi.defaults)), ve(this, "Eventable", ki.Eventable), ve(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), ve(this, "interactStatic", (0, hs.createInteractStatic)(this)), ve(this, "InteractEvent", Ii.InteractEvent), ve(this, "Interactable", void 0), ve(this, "interactables", new Fo.InteractableSet(this)), ve(this, "_win", void 0), ve(this, "document", void 0), ve(this, "window", void 0), ve(this, "documents", []), ve(this, "_plugins", { list: [], map: {} }), ve(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(x, C) {
            if (typeof C != "function" && C !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(C && C.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), C && Ss(x, C);
          })(g, s);
          var p, v, E = (p = g, v = function() {
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
            var x, C = Xr(p);
            if (v) {
              var T = Xr(this).constructor;
              x = Reflect.construct(C, arguments, T);
            } else
              x = C.apply(this, arguments);
            return vf(this, x);
          });
          function g() {
            return xu(this, g), E.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), Su(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(x) {
            return Gi(Xr(g.prototype), "set", this).call(this, x), a.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Gi(Xr(g.prototype), "unset", this).call(this);
            var x = a.interactables.list.indexOf(this);
            x < 0 || (Gi(Xr(g.prototype), "unset", this).call(this), a.interactables.list.splice(x, 1), a.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }($o.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), Su(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : Cu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, v = o.before.reduce(function(g, x) {
            return g[x] = true, g[Tu(x)] = true, g;
          }, {}); s < p; s++) {
            var E = this.listenerMaps[s].id;
            if (v[E] || v[Tu(E)])
              break;
          }
          this.listenerMaps.splice(s, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, a) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var s = t.getWindow(o);
        a = a ? (0, Y.default)({}, a) : {}, this.documents.push({ doc: o, options: a }), this.events.documents.push(o), o !== this.document && this.events.add(s, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: s, scope: this, options: a });
      } }, { key: "removeDocument", value: function(o) {
        var a = this.getDocIndex(o), s = t.getWindow(o), p = this.documents[a].options;
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
    function Cu(n, o) {
      return n.isInitialized = true, c.default.window(o) && t.init(o), P.default.init(o), V.default.init(o), Se.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Yo.default), n.usePlugin(Wo.default), n;
    }
    __name(Cu, "Cu");
    u(Cu, "yr");
    function Tu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(Tu, "Tu");
    u(Tu, "mr"), Ni.Scope = gf;
    var Cs = {}, te = {};
    Object.defineProperty(te, "__esModule", { value: true });
    var bf = {};
    te.default = void 0, Object.keys(Cs).forEach(function(n) {
      n !== "default" && n !== "__esModule" && (Object.prototype.hasOwnProperty.call(bf, n) || n in te && te[n] === Cs[n] || Object.defineProperty(te, n, { enumerable: true, get: function() {
        return Cs[n];
      } }));
    });
    var Ou = new Ni.Scope(), yf = Ou.interactStatic;
    te.default = yf;
    var wf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Ou.init(wf);
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0, Zo.default = function() {
    };
    var Qo = {};
    Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0, Qo.default = function() {
    };
    var Ko = {};
    function Mu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, C = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (T) {
            C = true, E = T;
          } finally {
            try {
              x || p.return == null || p.return();
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
            return Pu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Pu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Mu, "Mu");
    u(Mu, "jr");
    function Pu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Pu, "Pu");
    u(Pu, "Mr"), Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0, Ko.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = Mu(s, 2), v = p[0], E = p[1];
        return v in n || E in n;
      }), a = u(function(s, p) {
        for (var v = n.range, E = n.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = n.offset, C = x === void 0 ? { x: 0, y: 0 } : x, T = { range: v, grid: n, x: null, y: null }, I = 0; I < o.length; I++) {
          var R = Mu(o[I], 2), q = R[0], D = R[1], H = Math.round((s - C.x) / n[q]), Z = Math.round((p - C.y) / n[D]);
          T[q] = Math.max(g.left, Math.min(g.right, H * n[q] + C.x)), T[D] = Math.max(g.top, Math.min(g.bottom, Z * n[D] + C.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Object.defineProperty(Li, "edgeTarget", { enumerable: true, get: function() {
      return Zo.default;
    } }), Object.defineProperty(Li, "elements", { enumerable: true, get: function() {
      return Qo.default;
    } }), Object.defineProperty(Li, "grid", { enumerable: true, get: function() {
      return Ko.default;
    } });
    var Jo = {};
    Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var xf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, Y.default)(o.snappers || {}, Li), o.createSnapGrid = o.snappers.grid;
    } }, Ef = xf;
    Jo.default = Ef;
    var Kn = {};
    function Iu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(Iu, "Iu");
    u(Iu, "Cr");
    function Ts(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Iu(Object(a), true).forEach(function(s) {
          Sf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Iu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(Ts, "Ts");
    u(Ts, "Rr");
    function Sf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Sf, "Sf");
    u(Sf, "Fr"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = Kn.aspectRatio = void 0;
    var Au = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, v = o.options.ratio, E = o.options, g = E.equalDelta, x = E.modifiers;
      v === "preserve" && (v = a.width / a.height), o.startCoords = (0, Y.default)({}, p), o.startRect = (0, Y.default)({}, a), o.ratio = v, o.equalDelta = g;
      var C = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta) {
        var T = (C.left ? 1 : -1) * (C.top ? 1 : -1);
        o.edgeSign = { x: T, y: T };
      } else
        o.edgeSign = { x: C.left ? -1 : 1, y: C.top ? -1 : 1 };
      if ((0, Y.default)(n.edges, C), x && x.length) {
        var I = new vn.default(n.interaction);
        I.copyFrom(n.interaction.modification), I.prepareStates(x), o.subModification = I, I.startAll(Ts({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, Y.default)({}, s), v = o.equalDelta ? Cf : Tf;
      if (v(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var E = (0, Y.default)({}, a);
      (0, ut.addEdges)(o.linkedEdges, E, { x: s.x - p.x, y: s.y - p.y });
      var g = o.subModification.setAll(Ts(Ts({}, n), {}, { rect: E, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: E })), x = g.delta;
      return g.changed && (v(o, Math.abs(x.x) > Math.abs(x.y), g.coords, g.rect), (0, Y.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Cf(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p.y : a.x = s.x + (a.y - s.y) * p.x;
    }
    __name(Cf, "Cf");
    u(Cf, "Br");
    function Tf(n, o, a, s) {
      var p = n.startRect, v = n.startCoords, E = n.ratio, g = n.edgeSign;
      if (o) {
        var x = s.width / E;
        a.y = v.y + (x - p.height) * g.y;
      } else {
        var C = s.height * E;
        a.x = v.x + (C - p.width) * g.x;
      }
    }
    __name(Tf, "Tf");
    u(Tf, "Yr"), Kn.aspectRatio = Au;
    var Of = (0, me.makeModifier)(Au, "aspectRatio");
    Kn.default = Of;
    var yn = {};
    Object.defineProperty(yn, "__esModule", { value: true }), yn.default = void 0;
    var _u = u(function() {
    }, "Ur");
    _u._defaults = {};
    var Mf = _u;
    yn.default = Mf;
    var Os = {};
    Object.defineProperty(Os, "__esModule", { value: true }), Object.defineProperty(Os, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var Ie = {};
    function Ms(n, o, a) {
      return c.default.func(n) ? ut.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ut.resolveRectLike(n, o.interactable, o.element);
    }
    __name(Ms, "Ms");
    u(Ms, "Gr"), Object.defineProperty(Ie, "__esModule", { value: true }), Ie.default = void 0, Ie.getRestrictionRect = Ms, Ie.restrict = void 0;
    var ku = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, v = n.pageCoords, E = s.options, g = E.elementRect, x = (0, Y.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && g) {
        var C = Ms(E.restriction, p, v);
        if (C) {
          var T = C.right - C.left - o.width, I = C.bottom - C.top - o.height;
          T < 0 && (x.left += T, x.right += T), I < 0 && (x.top += I, x.bottom += I);
        }
        x.left += a.left - o.width * g.left, x.top += a.top - o.height * g.top, x.right += a.right - o.width * (1 - g.right), x.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = x;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, v = s.offset, E = Ms(p.restriction, a, o);
      if (E) {
        var g = ut.xywhToTlbr(E);
        o.x = Math.max(Math.min(g.right - v.right, o.x), g.left + v.left), o.y = Math.max(Math.min(g.bottom - v.bottom, o.y), g.top + v.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Ie.restrict = ku;
    var Pf = (0, me.makeModifier)(ku, "restrict");
    Ie.default = Pf;
    var Er = {};
    Object.defineProperty(Er, "__esModule", { value: true }), Er.restrictEdges = Er.default = void 0;
    var Du = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, zu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Ru(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(Ru, "Ru");
    u(Ru, "Qr");
    var Nu = { noInner: Du, noOuter: zu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, v = p.options;
      if (v) {
        var E = (0, Ie.getRestrictionRect)(v.offset, a, a.coords.start.page);
        o = ut.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, v = p.offset, E = p.options;
      if (a) {
        var g = (0, Y.default)({}, o), x = (0, Ie.getRestrictionRect)(E.inner, s, g) || {}, C = (0, Ie.getRestrictionRect)(E.outer, s, g) || {};
        Ru(x, Du), Ru(C, zu), a.top ? o.y = Math.min(Math.max(C.top + v.top, g.y), x.top + v.top) : a.bottom && (o.y = Math.max(Math.min(C.bottom + v.bottom, g.y), x.bottom + v.bottom)), a.left ? o.x = Math.min(Math.max(C.left + v.left, g.x), x.left + v.left) : a.right && (o.x = Math.max(Math.min(C.right + v.right, g.x), x.right + v.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Er.restrictEdges = Nu;
    var If = (0, me.makeModifier)(Nu, "restrictEdges");
    Er.default = If;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.restrictRect = Jn.default = void 0;
    var Af = (0, Y.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Ie.restrict.defaults), Gu = { start: Ie.restrict.start, set: Ie.restrict.set, defaults: Af };
    Jn.restrictRect = Gu;
    var _f = (0, me.makeModifier)(Gu, "restrictRect");
    Jn.default = _f;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictSize = ti.default = void 0;
    var kf = { width: -1 / 0, height: -1 / 0 }, Df = { width: 1 / 0, height: 1 / 0 }, Lu = { start: function(n) {
      return Er.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, v = a.options;
      if (p) {
        var E = ut.tlbrToXywh((0, Ie.getRestrictionRect)(v.min, o, n.coords)) || kf, g = ut.tlbrToXywh((0, Ie.getRestrictionRect)(v.max, o, n.coords)) || Df;
        a.options = { endOnly: v.endOnly, inner: (0, Y.default)({}, Er.restrictEdges.noInner), outer: (0, Y.default)({}, Er.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - E.height, a.options.outer.top = s.bottom - g.height) : p.bottom && (a.options.inner.bottom = s.top + E.height, a.options.outer.bottom = s.top + g.height), p.left ? (a.options.inner.left = s.right - E.width, a.options.outer.left = s.right - g.width) : p.right && (a.options.inner.right = s.left + E.width, a.options.outer.right = s.left + g.width), Er.restrictEdges.set(n), a.options = v;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ti.restrictSize = Lu;
    var zf = (0, me.makeModifier)(Lu, "restrictSize");
    ti.default = zf;
    var Ps = {};
    Object.defineProperty(Ps, "__esModule", { value: true }), Object.defineProperty(Ps, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.snap = Zr.default = void 0;
    var qu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, v = n.rect, E = n.state, g = n.startOffset, x = E.options, C = x.offsetWithOrigin ? function(R) {
        var q = R.interaction.element;
        return (0, ut.rectToXY)((0, ut.resolveRectLike)(R.state.options.origin, null, null, [q])) || (0, Gt.default)(R.interactable, q, R.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ut.resolveRectLike)(x.offset, s, p, [a]);
        (o = (0, ut.rectToXY)(T) || { x: 0, y: 0 }).x += C.x, o.y += C.y;
      }
      var I = x.relativePoints;
      E.offsets = v && I && I.length ? I.map(function(R, q) {
        return { index: q, relativePoint: R, x: g.left - v.width * R.x + o.x, y: g.top - v.height * R.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, v = s.offsets, E = (0, Gt.default)(o.interactable, o.element, o.prepared.name), g = (0, Y.default)({}, a), x = [];
      p.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var C = 0; C < v.length; C++)
        for (var T = v[C], I = g.x - T.x, R = g.y - T.y, q = 0, D = p.targets.length; q < D; q++) {
          var H, Z = p.targets[q];
          (H = c.default.func(Z) ? Z(I, R, o._proxy, T, q) : Z) && x.push({ x: (c.default.number(H.x) ? H.x : I) + T.x, y: (c.default.number(H.y) ? H.y : R) + T.y, range: c.default.number(H.range) ? H.range : p.range, source: Z, index: q, offset: T });
        }
      for (var $ = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, rt = 0; rt < x.length; rt++) {
        var ot = x[rt], pt = ot.range, St = ot.x - g.x, Lt = ot.y - g.y, vt = (0, Jt.default)(St, Lt), zt = vt <= pt;
        pt === 1 / 0 && $.inRange && $.range !== 1 / 0 && (zt = false), $.target && !(zt ? $.inRange && pt !== 1 / 0 ? vt / pt < $.distance / $.range : pt === 1 / 0 && $.range !== 1 / 0 || vt < $.distance : !$.inRange && vt < $.distance) || ($.target = ot, $.distance = vt, $.range = pt, $.inRange = zt, $.delta.x = St, $.delta.y = Lt);
      }
      return $.inRange && (a.x = $.target.x, a.y = $.target.y), s.closest = $, $;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Zr.snap = qu;
    var Rf = (0, me.makeModifier)(qu, "snap");
    Zr.default = Rf;
    var zr = {};
    function ju(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ju, "ju");
    u(ju, "yo"), Object.defineProperty(zr, "__esModule", { value: true }), zr.snapSize = zr.default = void 0;
    var Bu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Zr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, v = n.coords, E = p.options, g = p.offsets, x = { x: v.x - g[0].x, y: v.y - g[0].y };
      p.options = (0, Y.default)({}, E), p.options.targets = [];
      for (var C = 0; C < (E.targets || []).length; C++) {
        var T = (E.targets || [])[C], I = void 0;
        if (I = c.default.func(T) ? T(x.x, x.y, s) : T) {
          for (var R = 0; R < p.targetFields.length; R++) {
            var q = (o = p.targetFields[R], a = 2, function($) {
              if (Array.isArray($))
                return $;
            }(o) || function($, rt) {
              var ot = $ == null ? null : typeof Symbol != "undefined" && $[Symbol.iterator] || $["@@iterator"];
              if (ot != null) {
                var pt, St, Lt = [], vt = true, zt = false;
                try {
                  for (ot = ot.call($); !(vt = (pt = ot.next()).done) && (Lt.push(pt.value), !rt || Lt.length !== rt); vt = true)
                    ;
                } catch (Ye) {
                  zt = true, St = Ye;
                } finally {
                  try {
                    vt || ot.return == null || ot.return();
                  } finally {
                    if (zt)
                      throw St;
                  }
                }
                return Lt;
              }
            }(o, a) || function($, rt) {
              if ($) {
                if (typeof $ == "string")
                  return ju($, rt);
                var ot = Object.prototype.toString.call($).slice(8, -1);
                return ot === "Object" && $.constructor && (ot = $.constructor.name), ot === "Map" || ot === "Set" ? Array.from($) : ot === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ot) ? ju($, rt) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), D = q[0], H = q[1];
            if (D in I || H in I) {
              I.x = I[D], I.y = I[H];
              break;
            }
          }
          p.options.targets.push(I);
        }
      }
      var Z = Zr.snap.set(n);
      return p.options = E, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    zr.snapSize = Bu;
    var Nf = (0, me.makeModifier)(Bu, "snapSize");
    zr.default = Nf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.snapEdges = ei.default = void 0;
    var Hu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], zr.snapSize.start(n)) : null;
    }, set: zr.snapSize.set, defaults: (0, Y.default)((0, mn.default)(zr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ei.snapEdges = Hu;
    var Gf = (0, me.makeModifier)(Hu, "snapEdges");
    ei.default = Gf;
    var Is = {};
    Object.defineProperty(Is, "__esModule", { value: true }), Object.defineProperty(Is, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var As = {};
    Object.defineProperty(As, "__esModule", { value: true }), Object.defineProperty(As, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.default = void 0;
    var Lf = { aspectRatio: Kn.default, restrictEdges: Er.default, restrict: Ie.default, restrictRect: Jn.default, restrictSize: ti.default, snapEdges: ei.default, snap: Zr.default, snapSize: zr.default, spring: Is.default, avoid: Os.default, transform: As.default, rubberband: Ps.default };
    ri.default = Lf;
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0;
    var qf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(me.default), n.usePlugin(Jo.default), o.modifiers = ri.default, ri.default) {
        var s = ri.default[a], p = s._defaults, v = s._methods;
        p._methods = v, n.defaults.perAction[a] = p;
      }
    } }, jf = qf;
    ta.default = jf;
    var wn = {};
    function _s(n) {
      return _s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _s(n);
    }
    __name(_s, "_s");
    u(_s, "Io");
    function Bf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Bf, "Bf");
    u(Bf, "Do");
    function ks(n, o) {
      return ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, ks(n, o);
    }
    __name(ks, "ks");
    u(ks, "Ao");
    function Hf(n, o) {
      if (o && (_s(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ds(n);
    }
    __name(Hf, "Hf");
    u(Hf, "zo");
    function Ds(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Ds, "Ds");
    u(Ds, "Co");
    function ea(n) {
      return ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, ea(n);
    }
    __name(ea, "ea");
    u(ea, "Ro"), Object.defineProperty(wn, "__esModule", { value: true }), wn.default = wn.PointerEvent = void 0;
    var $f = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && ks(g, x);
      })(E, n);
      var o, a, s, p, v = (s = E, p = function() {
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
        var g, x = ea(s);
        if (p) {
          var C = ea(this).constructor;
          g = Reflect.construct(x, arguments, C);
        } else
          g = x.apply(this, arguments);
        return Hf(this, g);
      });
      function E(g, x, C, T, I, R) {
        var q;
        if (function(Z, $) {
          if (!(Z instanceof $))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), q = v.call(this, I), J.pointerExtend(Ds(q), C), C !== x && J.pointerExtend(Ds(q), x), q.timeStamp = R, q.originalEvent = C, q.type = g, q.pointerId = J.getPointerId(x), q.pointerType = J.getPointerType(x), q.target = T, q.currentTarget = null, g === "tap") {
          var D = I.getPointerIndex(x);
          q.dt = q.timeStamp - I.pointers[D].downTime;
          var H = q.timeStamp - I.tapTime;
          q.double = !!I.prevTap && I.prevTap.type !== "doubletap" && I.prevTap.target === q.target && H < 500;
        } else
          g === "doubletap" && (q.dt = x.timeStamp - I.tapTime, q.double = true);
        return q;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "_subtractOrigin", value: function(g) {
        var x = g.x, C = g.y;
        return this.pageX -= x, this.pageY -= C, this.clientX -= x, this.clientY -= C, this;
      } }, { key: "_addOrigin", value: function(g) {
        var x = g.x, C = g.y;
        return this.pageX += x, this.pageY += C, this.clientX += x, this.clientY += C, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Bf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Ne.BaseEvent);
    wn.PointerEvent = wn.default = $f;
    var qi = {};
    Object.defineProperty(qi, "__esModule", { value: true }), qi.default = void 0;
    var ra = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = ra, n.defaults.actions.pointerEvents = ra.defaults, (0, Y.default)(n.actions.phaselessTypes, ra.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && zs(n), Qr({ interaction: a, pointer: s, event: p, eventTarget: v, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, v = a.pointer, E = a.event, g = a.eventTarget, x = a.pointerIndex, C = p.pointers[x].hold, T = _.getPath(g), I = { interaction: p, pointer: v, event: E, eventTarget: g, type: "hold", targets: [], path: T, node: null }, R = 0; R < T.length; R++) {
          var q = T[R];
          I.node = q, s.fire("pointerEvents:collect-targets", I);
        }
        if (I.targets.length) {
          for (var D = 1 / 0, H = 0; H < I.targets.length; H++) {
            var Z = I.targets[H].eventable.options.holdDuration;
            Z < D && (D = Z);
          }
          C.duration = D, C.timeout = setTimeout(function() {
            Qr({ interaction: p, eventTarget: g, pointer: v, event: E, type: "hold" }, s);
          }, D);
        }
      })(n, o), Qr(n, o);
    }, "interactions:up": function(n, o) {
      zs(n), Qr(n, o), function(a, s) {
        var p = a.interaction, v = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerWasMoved || Qr({ interaction: p, eventTarget: g, pointer: v, event: E, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      zs(n), Qr(n, o);
    } }, PointerEvent: wn.PointerEvent, fire: Qr, collectEventTargets: $u, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Qr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget, E = n.type, g = n.targets, x = g === void 0 ? $u(n, o) : g, C = new wn.PointerEvent(E, s, p, v, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: C });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: v, targets: x, type: E, pointerEvent: C }, I = 0; I < x.length; I++) {
        var R = x[I];
        for (var q in R.props || {})
          C[q] = R.props[q];
        var D = (0, Gt.default)(R.eventable, R.node);
        if (C._subtractOrigin(D), C.eventable = R.eventable, C.currentTarget = R.node, R.eventable.fire(C), C._addOrigin(D), C.immediatePropagationStopped || C.propagationStopped && I + 1 < x.length && x[I + 1].node !== C.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), E === "tap") {
        var H = C.double ? Qr({ interaction: a, pointer: s, event: p, eventTarget: v, type: "doubletap" }, o) : C;
        a.prevTap = H, a.tapTime = H.timeStamp;
      }
      return C;
    }
    __name(Qr, "Qr");
    u(Qr, "Yo");
    function $u(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget, E = n.type, g = a.getPointerIndex(s), x = a.pointers[g];
      if (E === "tap" && (a.pointerWasMoved || !x || x.downTarget !== v))
        return [];
      for (var C = _.getPath(v), T = { interaction: a, pointer: s, event: p, eventTarget: v, type: E, path: C, targets: [], node: null }, I = 0; I < C.length; I++) {
        var R = C[I];
        T.node = R, o.fire("pointerEvents:collect-targets", T);
      }
      return E === "hold" && (T.targets = T.targets.filter(function(q) {
        var D;
        return q.eventable.options.holdDuration === ((D = a.pointers[g]) == null ? void 0 : D.hold.duration);
      })), T.targets;
    }
    __name($u, "$u");
    u($u, "Wo");
    function zs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(zs, "zs");
    u(zs, "Lo");
    var Ff = ra;
    qi.default = Ff;
    var na = {};
    function Wf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Wf, "Wf");
    u(Wf, "No"), Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0;
    var Uf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(qi.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Wf, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, p = n.eventTarget, v = n.targets;
      if (s.type === "hold" && v.length) {
        var E = v[0].eventable.options.holdRepeatInterval;
        E <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: p, type: "hold", pointer: s, event: s }, o);
        }, E));
      }
    } }) }, Vf = Uf;
    na.default = Vf;
    var ia = {};
    function Yf(n) {
      return (0, Y.default)(this.events.options, n), this;
    }
    __name(Yf, "Yf");
    u(Yf, "Ho"), Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Xf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = Yf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var v = a.call(this, s, p);
        return v === this && (this.events.options[s] = p), v;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, v = n.eventTarget;
      o.interactables.forEachMatch(s, function(E) {
        var g = E.events, x = g.options;
        g.types[p] && g.types[p].length && E.testIgnoreAllow(x, s, v) && a.push({ node: s, eventable: g, props: { interactable: E } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, Y.default)(a.events.options, o.pointerEvents.defaults), (0, Y.default)(a.events.options, s.pointerEvents || {});
    } } }, Zf = Xf;
    ia.default = Zf;
    var oa = {};
    Object.defineProperty(oa, "__esModule", { value: true }), oa.default = void 0;
    var Qf = { id: "pointer-events", install: function(n) {
      n.usePlugin(qi), n.usePlugin(na.default), n.usePlugin(ia.default);
    } }, Kf = Qf;
    oa.default = Kf;
    var ji = {};
    function Fu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, v) {
          for (var E = c.default.string(s.target) ? yt.from(s._context.querySelectorAll(s.target)) : [s.target], g = v.window.Promise, x = g ? [] : null, C = function() {
            var I = E[T], R = s.getRect(I);
            if (!R)
              return "break";
            var q = yt.find(v.interactions.list, function(rt) {
              return rt.interacting() && rt.interactable === s && rt.element === I && rt.prepared.name === p.name;
            }), D = void 0;
            if (q)
              q.move(), x && (D = q._reflowPromise || new g(function(rt) {
                q._reflowResolve = rt;
              }));
            else {
              var H = (0, ut.tlbrToXywh)(R), Z = { page: { x: H.x, y: H.y }, client: { x: H.x, y: H.y }, timeStamp: v.now() }, $ = J.coordsToEvent(Z);
              D = function(rt, ot, pt, St, Lt) {
                var vt = rt.interactions.new({ pointerType: "reflow" }), zt = { interaction: vt, event: Lt, pointer: Lt, eventTarget: pt, phase: "reflow" };
                vt.interactable = ot, vt.element = pt, vt.prevEvent = Lt, vt.updatePointer(Lt, Lt, pt, true), J.setZeroCoords(vt.coords.delta), (0, Ge.copyAction)(vt.prepared, St), vt._doPhase(zt);
                var Ye = rt.window.Promise, Rr = Ye ? new Ye(function(Gs) {
                  vt._reflowResolve = Gs;
                }) : void 0;
                return vt._reflowPromise = Rr, vt.start(St, ot, pt), vt._interacting ? (vt.move(zt), vt.end(Lt)) : (vt.stop(), vt._reflowResolve()), vt.removePointer(Lt, Lt), Rr;
              }(v, s, I, p, $);
            }
            x && x.push(D);
          }, T = 0; T < E.length && C() !== "break"; T++)
            ;
          return x && g.all(x).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Fu, "Fu");
    u(Fu, "ni"), Object.defineProperty(ji, "__esModule", { value: true }), ji.default = void 0, ji.install = Fu;
    var Jf = { id: "reflow", install: Fu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), yt.remove(o.interactions.list, a));
    } } }, th = Jf;
    ji.default = th;
    var Ve = { exports: {} };
    function Rs(n) {
      return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rs(n);
    }
    __name(Rs, "Rs");
    u(Rs, "ai"), Object.defineProperty(Ve.exports, "__esModule", { value: true }), Ve.exports.default = void 0, te.default.use(Zn.default), te.default.use(bn.default), te.default.use(oa.default), te.default.use(Qn.default), te.default.use(ta.default), te.default.use(No.default), te.default.use(Ue.default), te.default.use(Yr.default), te.default.use(ji.default);
    var eh = te.default;
    if (Ve.exports.default = eh, Rs(Ve) === "object" && Ve)
      try {
        Ve.exports = te.default;
      } catch (n) {
      }
    te.default.default = te.default, Ve = Ve.exports;
    var xn = { exports: {} };
    function Ns(n) {
      return Ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ns(n);
    }
    __name(Ns, "Ns");
    u(Ns, "ui"), Object.defineProperty(xn.exports, "__esModule", { value: true }), xn.exports.default = void 0;
    var rh = Ve.default;
    if (xn.exports.default = rh, Ns(xn) === "object" && xn)
      try {
        xn.exports = Ve.default;
      } catch (n) {
      }
    return Ve.default.default = Ve.default, xn.exports;
  });
});
var pd = aa((cd, Ul) => {
  (function(r) {
    "use strict";
    var t = /* @__PURE__ */ __name(function() {
    }, "t"), e = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(d) {
      return setTimeout(d, 16);
    };
    function i() {
      var d = this;
      d.reads = [], d.writes = [], d.raf = e.bind(r), t("initialized", d);
    }
    __name(i, "i");
    u(i, "FastDom"), i.prototype = { constructor: i, runTasks: function(d) {
      t("run tasks");
      for (var m; m = d.shift(); )
        m();
    }, measure: function(d, m) {
      t("measure");
      var w = m ? d.bind(m) : d;
      return this.reads.push(w), l(this), w;
    }, mutate: function(d, m) {
      t("mutate");
      var w = m ? d.bind(m) : d;
      return this.writes.push(w), l(this), w;
    }, clear: function(d) {
      return t("clear", d), f(this.reads, d) || f(this.writes, d);
    }, extend: function(d) {
      if (t("extend", d), typeof d != "object")
        throw new Error("expected object");
      var m = Object.create(this);
      return b(m, d), m.fastdom = this, m.initialize && m.initialize(), m;
    }, catch: null };
    function l(d) {
      d.scheduled || (d.scheduled = true, d.raf(c.bind(null, d)), t("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(d) {
      t("flush");
      var m = d.writes, w = d.reads, y;
      try {
        t("flushing reads", w.length), d.runTasks(w), t("flushing writes", m.length), d.runTasks(m);
      } catch (S) {
        y = S;
      }
      if (d.scheduled = false, (w.length || m.length) && l(d), y)
        if (t("task errored", y.message), d.catch)
          d.catch(y);
        else
          throw y;
    }
    __name(c, "c");
    u(c, "flush");
    function f(d, m) {
      var w = d.indexOf(m);
      return !!~w && !!d.splice(w, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function b(d, m) {
      for (var w in m)
        m.hasOwnProperty(w) && (d[w] = m[w]);
    }
    __name(b, "b");
    u(b, "mixin");
    var h = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return h;
    }) : typeof Ul == "object" && (Ul.exports = h);
  })(typeof window != "undefined" ? window : cd);
});
var md = aa((Yl, hd) => {
  (function(r) {
    "use strict";
    var t = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, e = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, i = u(function(d) {
      var m = Math.PI / 4;
      if (-m > d || d > m)
        return Math.cos(d) - 1;
      var w = d * d;
      return w * (w * (w * (w * (w * (w * (w * (w / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(d, m) {
      var w = Math.abs(d), y = Math.abs(m);
      return w < 3e3 && y < 3e3 ? Math.sqrt(w * w + y * y) : (w < y ? (w = y, y = d / m) : y = m / d, w * Math.sqrt(1 + y * y));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(d, m) {
      var w = Math.abs(d), y = Math.abs(m);
      return d === 0 ? Math.log(y) : m === 0 ? Math.log(w) : w < 3e3 && y < 3e3 ? Math.log(d * d + m * m) * 0.5 : (d = d / 2, m = m / 2, 0.5 * Math.log(d * d + m * m) + Math.LN2);
    }
    __name(f, "f");
    u(f, "logHypot");
    var b = u(function(d, m) {
      var w = { re: 0, im: 0 };
      if (d == null)
        w.re = w.im = 0;
      else if (m !== void 0)
        w.re = d, w.im = m;
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
            for (var P = 0; P < y.length; P++) {
              var k = y[P];
              k === " " || k === "	" || k === `
` || (k === "+" ? S++ : k === "-" ? O++ : k === "i" || k === "I" ? (S + O === 0 && c(), y[P + 1] !== " " && !isNaN(y[P + 1]) ? (w.im += parseFloat((O % 2 ? "-" : "") + y[P + 1]), P++) : w.im += parseFloat((O % 2 ? "-" : "") + "1"), S = O = 0) : ((S + O === 0 || isNaN(k)) && c(), y[P + 1] === "i" || y[P + 1] === "I" ? (w.im += parseFloat((O % 2 ? "-" : "") + k), P++) : w.re += parseFloat((O % 2 ? "-" : "") + k), S = O = 0));
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
    function h(d, m) {
      if (!(this instanceof h))
        return new h(d, m);
      var w = b(d, m);
      this.re = w.re, this.im = w.im;
    }
    __name(h, "h");
    u(h, "Complex"), h.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new h(this.re / d, this.im / d);
    }, add: function(d, m) {
      var w = new h(d, m);
      return this.isInfinite() && w.isInfinite() ? h.NAN : this.isInfinite() || w.isInfinite() ? h.INFINITY : new h(this.re + w.re, this.im + w.im);
    }, sub: function(d, m) {
      var w = new h(d, m);
      return this.isInfinite() && w.isInfinite() ? h.NAN : this.isInfinite() || w.isInfinite() ? h.INFINITY : new h(this.re - w.re, this.im - w.im);
    }, mul: function(d, m) {
      var w = new h(d, m);
      return this.isInfinite() && w.isZero() || this.isZero() && w.isInfinite() ? h.NAN : this.isInfinite() || w.isInfinite() ? h.INFINITY : w.im === 0 && this.im === 0 ? new h(this.re * w.re, 0) : new h(this.re * w.re - this.im * w.im, this.re * w.im + this.im * w.re);
    }, div: function(d, m) {
      var w = new h(d, m);
      if (this.isZero() && w.isZero() || this.isInfinite() && w.isInfinite())
        return h.NAN;
      if (this.isInfinite() || w.isZero())
        return h.INFINITY;
      if (this.isZero() || w.isInfinite())
        return h.ZERO;
      d = this.re, m = this.im;
      var y = w.re, S = w.im, O, P;
      return S === 0 ? new h(d / y, m / y) : Math.abs(y) < Math.abs(S) ? (P = y / S, O = y * P + S, new h((d * P + m) / O, (m * P - d) / O)) : (P = S / y, O = S * P + y, new h((d + m * P) / O, (m - d * P) / O));
    }, pow: function(d, m) {
      var w = new h(d, m);
      if (d = this.re, m = this.im, w.isZero())
        return h.ONE;
      if (w.im === 0) {
        if (m === 0 && d > 0)
          return new h(Math.pow(d, w.re), 0);
        if (d === 0)
          switch ((w.re % 4 + 4) % 4) {
            case 0:
              return new h(Math.pow(m, w.re), 0);
            case 1:
              return new h(0, Math.pow(m, w.re));
            case 2:
              return new h(-Math.pow(m, w.re), 0);
            case 3:
              return new h(0, -Math.pow(m, w.re));
          }
      }
      if (d === 0 && m === 0 && w.re > 0 && w.im >= 0)
        return h.ZERO;
      var y = Math.atan2(m, d), S = f(d, m);
      return d = Math.exp(w.re * S - w.im * y), m = w.im * S + w.re * y, new h(d * Math.cos(m), d * Math.sin(m));
    }, sqrt: function() {
      var d = this.re, m = this.im, w = this.abs(), y, S;
      if (d >= 0) {
        if (m === 0)
          return new h(Math.sqrt(d), 0);
        y = 0.5 * Math.sqrt(2 * (w + d));
      } else
        y = Math.abs(m) / Math.sqrt(2 * (w - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (w - d)) : S = Math.abs(m) / Math.sqrt(2 * (w + d)), new h(y, m < 0 ? -S : S);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im === 0, new h(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, m = this.im;
      return new h(Math.expm1(d) * Math.cos(m) + i(m), Math.exp(d) * Math.sin(m));
    }, log: function() {
      var d = this.re, m = this.im;
      return m === 0 && d > 0, new h(f(d, m), Math.atan2(m, d));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, m = this.im;
      return new h(Math.sin(d) * t(m), Math.cos(d) * e(m));
    }, cos: function() {
      var d = this.re, m = this.im;
      return new h(Math.cos(d) * t(m), -Math.sin(d) * e(m));
    }, tan: function() {
      var d = 2 * this.re, m = 2 * this.im, w = Math.cos(d) + t(m);
      return new h(Math.sin(d) / w, e(m) / w);
    }, cot: function() {
      var d = 2 * this.re, m = 2 * this.im, w = Math.cos(d) - t(m);
      return new h(-Math.sin(d) / w, e(m) / w);
    }, sec: function() {
      var d = this.re, m = this.im, w = 0.5 * t(2 * m) + 0.5 * Math.cos(2 * d);
      return new h(Math.cos(d) * t(m) / w, Math.sin(d) * e(m) / w);
    }, csc: function() {
      var d = this.re, m = this.im, w = 0.5 * t(2 * m) - 0.5 * Math.cos(2 * d);
      return new h(Math.sin(d) * t(m) / w, -Math.cos(d) * e(m) / w);
    }, asin: function() {
      var d = this.re, m = this.im, w = new h(m * m - d * d + 1, -2 * d * m).sqrt(), y = new h(w.re - m, w.im + d).log();
      return new h(y.im, -y.re);
    }, acos: function() {
      var d = this.re, m = this.im, w = new h(m * m - d * d + 1, -2 * d * m).sqrt(), y = new h(w.re - m, w.im + d).log();
      return new h(Math.PI / 2 - y.im, y.re);
    }, atan: function() {
      var d = this.re, m = this.im;
      if (d === 0) {
        if (m === 1)
          return new h(0, 1 / 0);
        if (m === -1)
          return new h(0, -1 / 0);
      }
      var w = d * d + (1 - m) * (1 - m), y = new h((1 - m * m - d * d) / w, -2 * d / w).log();
      return new h(-0.5 * y.im, 0.5 * y.re);
    }, acot: function() {
      var d = this.re, m = this.im;
      if (m === 0)
        return new h(Math.atan2(1, d), 0);
      var w = d * d + m * m;
      return w !== 0 ? new h(d / w, -m / w).atan() : new h(d !== 0 ? d / 0 : 0, m !== 0 ? -m / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, m = this.im;
      if (d === 0 && m === 0)
        return new h(0, 1 / 0);
      var w = d * d + m * m;
      return w !== 0 ? new h(d / w, -m / w).acos() : new h(d !== 0 ? d / 0 : 0, m !== 0 ? -m / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, m = this.im;
      if (d === 0 && m === 0)
        return new h(Math.PI / 2, 1 / 0);
      var w = d * d + m * m;
      return w !== 0 ? new h(d / w, -m / w).asin() : new h(d !== 0 ? d / 0 : 0, m !== 0 ? -m / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, m = this.im;
      return new h(e(d) * Math.cos(m), t(d) * Math.sin(m));
    }, cosh: function() {
      var d = this.re, m = this.im;
      return new h(t(d) * Math.cos(m), e(d) * Math.sin(m));
    }, tanh: function() {
      var d = 2 * this.re, m = 2 * this.im, w = t(d) + Math.cos(m);
      return new h(e(d) / w, Math.sin(m) / w);
    }, coth: function() {
      var d = 2 * this.re, m = 2 * this.im, w = t(d) - Math.cos(m);
      return new h(e(d) / w, -Math.sin(m) / w);
    }, csch: function() {
      var d = this.re, m = this.im, w = Math.cos(2 * m) - t(2 * d);
      return new h(-2 * e(d) * Math.cos(m) / w, 2 * t(d) * Math.sin(m) / w);
    }, sech: function() {
      var d = this.re, m = this.im, w = Math.cos(2 * m) + t(2 * d);
      return new h(2 * t(d) * Math.cos(m) / w, -2 * e(d) * Math.sin(m) / w);
    }, asinh: function() {
      var d = this.im;
      this.im = -this.re, this.re = d;
      var m = this.asin();
      return this.re = -this.im, this.im = d, d = m.re, m.re = -m.im, m.im = d, m;
    }, acosh: function() {
      var d = this.acos();
      if (d.im <= 0) {
        var m = d.re;
        d.re = -d.im, d.im = m;
      } else {
        var m = d.im;
        d.im = -d.re, d.re = m;
      }
      return d;
    }, atanh: function() {
      var d = this.re, m = this.im, w = d > 1 && m === 0, y = 1 - d, S = 1 + d, O = y * y + m * m, P = O !== 0 ? new h((S * y - m * m) / O, (m * y + S * m) / O) : new h(d !== -1 ? d / 0 : 0, m !== 0 ? m / 0 : 0), k = P.re;
      return P.re = f(P.re, P.im) / 2, P.im = Math.atan2(P.im, k) / 2, w && (P.im = -P.im), P;
    }, acoth: function() {
      var d = this.re, m = this.im;
      if (d === 0 && m === 0)
        return new h(0, Math.PI / 2);
      var w = d * d + m * m;
      return w !== 0 ? new h(d / w, -m / w).atanh() : new h(d !== 0 ? d / 0 : 0, m !== 0 ? -m / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, m = this.im;
      if (m === 0)
        return new h(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var w = d * d + m * m;
      return w !== 0 ? new h(d / w, -m / w).asinh() : new h(d !== 0 ? d / 0 : 0, m !== 0 ? -m / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, m = this.im;
      if (this.isZero())
        return h.INFINITY;
      var w = d * d + m * m;
      return w !== 0 ? new h(d / w, -m / w).acosh() : new h(d !== 0 ? d / 0 : 0, m !== 0 ? -m / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return h.INFINITY;
      if (this.isInfinite())
        return h.ZERO;
      var d = this.re, m = this.im, w = d * d + m * m;
      return new h(d / w, -m / w);
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
    }, equals: function(d, m) {
      var w = new h(d, m);
      return Math.abs(w.re - this.re) <= h.EPSILON && Math.abs(w.im - this.im) <= h.EPSILON;
    }, clone: function() {
      return new h(this.re, this.im);
    }, toString: function() {
      var d = this.re, m = this.im, w = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < h.EPSILON && (d = 0), Math.abs(m) < h.EPSILON && (m = 0), m === 0 ? w + d : (d !== 0 ? (w += d, w += " ", m < 0 ? (m = -m, w += "-") : w += "+", w += " ") : m < 0 && (m = -m, w += "-"), m !== 1 && (w += m), w + "i"));
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
    }) : typeof Yl == "object" ? (Object.defineProperty(h, "__esModule", { value: true }), h.default = h, h.Complex = h, hd.exports = h) : r.Complex = h;
  })(Yl);
});
var Kr = ni(Yu());
function Xu(r) {
  let t = Jr(r);
  return new Kr.default(t).valueOf() * Math.PI;
}
__name(Xu, "Xu");
u(Xu, "V");
function $i(r) {
  let t = Jr(r).split("/");
  if (t.length === 1)
    return 1;
  if (t.length === 2)
    return parseInt(t[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name($i, "$i");
u($i, "X");
function Zu(r, t) {
  return new Kr.default(Jr(r)).valueOf() < new Kr.default(Jr(t)).valueOf();
}
__name(Zu, "Zu");
u(Zu, "W");
function Qu(r, t) {
  return new Kr.default(Jr(r)).valueOf() > new Kr.default(Jr(t)).valueOf();
}
__name(Qu, "Qu");
u(Qu, "H");
function Ku(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let t = Jr(r);
    return new Kr.default(t).valueOf(), true;
  } catch (t) {
    return false;
  }
}
__name(Ku, "Ku");
u(Ku, "Q");
function Jr(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(Jr, "Jr");
u(Jr, "l");
function Ju(r) {
  try {
    let t = Jr(r), e = new Kr.default(t).toFraction().split("/"), i;
    return e[0] === "0" ? i = "0" : e[0] === "1" ? i = "\u03C0" : e[0] === "-1" ? i = "-\u03C0" : i = `${e[0]}\u03C0`, e.length === 1 ? i : `${i}/${e[1]}`;
  } catch (t) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Ju, "Ju");
u(Ju, "J");
var uh = Object.prototype.toString.call({});
var ch = "!recursion-limit!";
var ph = 10;
function ee(r, t = ph) {
  return dh(r) || fh(r, t) || hh(r, t);
}
__name(ee, "ee");
u(ee, "c");
function dh(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(dh, "dh");
u(dh, "M");
function fh(r, t) {
  if (t === 0)
    return ch;
  if (r instanceof Map)
    return mh(r, t);
  if (r instanceof Set)
    return vh(r, t);
  if (((e) => e[Symbol.iterator] !== void 0)(r))
    return gh(r, t);
}
__name(fh, "fh");
u(fh, "O");
function hh(r, t) {
  let e = String(r);
  return e !== uh ? e : bh(r, t);
}
__name(hh, "hh");
u(hh, "F");
function mh(r, t) {
  let e = [];
  for (let [i, l] of r.entries()) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let c = ee(i, t - 1), f = ee(l, t - 1);
    e.push(`${c}: ${f}`);
  }
  return `Map{${e.join(", ")}}`;
}
__name(mh, "mh");
u(mh, "G");
function vh(r, t) {
  let e = [];
  for (let i of r) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(ee(i, t - 1));
  }
  return `Set{${e.join(", ")}}`;
}
__name(vh, "vh");
u(vh, "R");
function gh(r, t) {
  let e = [];
  for (let i of r) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(ee(i, t - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${e.join(", ")}]`;
}
__name(gh, "gh");
u(gh, "N");
function bh(r, t) {
  let e = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let c = r[l], f = ee(l, t - 1), b = ee(c, t - 1);
    e.push(`${f}: ${b}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${e.join(", ")}}`;
}
__name(bh, "bh");
u(bh, "q");
var qs = 0;
var ue = u(class extends Error {
  constructor(r, t) {
    super(r);
    this.detailsObj = t, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), qs++;
    try {
      this.details = qs === 1 ? ee(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      qs--;
    }
  }
}, "d");
var yh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var Le = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -Le.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(Le.parseFloat(r.substr(1)));
    let t = Le.matchUnicodeFraction((i) => i.character === r);
    if (t !== void 0)
      return t.value;
    let e = parseFloat(r);
    if (isNaN(e))
      throw new Error(`Not a number: '${r}'`);
    return e;
  }
  static simplifyByRounding(r, t) {
    if (r < 0)
      return -Le.simplifyByRounding(-r, t);
    let e = r % 1;
    if (e <= t || 1 - e <= t)
      return Math.round(r);
    let i = Le.matchUnicodeFraction((c) => Math.abs(c.value - r) <= t);
    if (i !== void 0)
      return i.value;
    let l = Le.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= t);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let t of yh)
      if (r(t))
        return t;
  }
  constructor(r, t, e, i) {
    this.allowAbbreviation = r, this.maxAbbreviationError = t, this.fixedDigits = e, this.itemSeparator = i;
  }
  formatFloat(r) {
    return this.allowAbbreviation ? this.abbreviateFloat(r, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? r.toFixed(this.fixedDigits) : String(r);
  }
  abbreviateFloat(r, t = 0, e = void 0) {
    if (Math.abs(r) < t)
      return "0";
    if (r < 0)
      return `-${this.abbreviateFloat(-r, t, e)}`;
    let i = Le.matchUnicodeFraction((c) => Math.abs(c.value - r) <= t);
    if (i !== void 0)
      return i.character;
    let l = Le.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= t);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && e !== void 0 ? r.toFixed(e) : r.toString();
  }
}, "u");
var Hi = Le;
Hi.CONSISTENT = new Le(false, 0, 2, ", "), Hi.EXACT = new Le(true, 0, void 0, ", "), Hi.MINIFIED = new Le(true, 0, void 0, ","), Hi.SIMPLIFIED = new Le(true, 5e-4, 3, ", ");
var U = u(class {
  static need(r, t, e) {
    if (r !== true) {
      let i = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, l = `Precondition failed

Message: ${t === void 0 ? "(not provided)" : t}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    U.need(r != null, "notNull");
  }
  static snappedCosSin(r) {
    let t = Math.PI / 4, e = Math.round(r / t);
    if (e * t === r) {
      let i = Math.sqrt(0.5);
      return [[1, 0], [i, i], [0, 1], [-i, i], [-1, 0], [-i, -i], [0, -1], [i, -i]][e & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
}, "m");
var dt = u(class {
  static from(r) {
    if (r instanceof dt)
      return r;
    if (typeof r == "number")
      return new dt(r, 0);
    throw new ue("Unrecognized value type.", { v: r });
  }
  static polar(r, t) {
    let [e, i] = U.snappedCosSin(t);
    return new dt(r * e, r * i);
  }
  static realPartOf(r) {
    if (r instanceof dt)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new ue("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof dt)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new ue("Unrecognized value type.", { v: r });
  }
  constructor(r, t) {
    this.real = r, this.imag = t;
  }
  static rootsOfQuadratic(r, t, e) {
    if (r = dt.from(r), t = dt.from(t), e = dt.from(e), r.isEqualTo(0)) {
      if (!t.isEqualTo(0))
        return [e.times(-1).dividedBy(t)];
      if (!e.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let i = t.times(t).minus(r.times(e).times(4)).sqrts(), l = t.times(-1), c = r.times(2);
    return i.map((f) => l.minus(f).dividedBy(c));
  }
  isEqualTo(r) {
    return r instanceof dt ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, t) {
    if (r instanceof dt || typeof r == "number") {
      let e = this.minus(dt.from(r));
      return Math.abs(e.real) <= t && Math.abs(e.imag) <= t && e.abs() <= t;
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
    return r < 1e-5 ? dt.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let t = dt.from(r);
    return new dt(this.real + t.real, this.imag + t.imag);
  }
  minus(r) {
    let t = dt.from(r);
    return new dt(this.real - t.real, this.imag - t.imag);
  }
  times(r) {
    let t = dt.from(r);
    return new dt(this.real * t.real - this.imag * t.imag, this.real * t.imag + this.imag * t.real);
  }
  dividedBy(r) {
    let t = dt.from(r), e = t.norm2();
    if (e === 0)
      throw new Error("Division by Zero");
    let i = this.times(t.conjugate());
    return new dt(i.real / e, i.imag / e);
  }
  sqrts() {
    let [r, t] = [this.real, this.imag], e = Math.sqrt(Math.sqrt(r * r + t * t));
    if (e === 0)
      return [dt.ZERO];
    if (t === 0 && r < 0)
      return [new dt(0, e), new dt(0, -e)];
    let i = this.phase() / 2, l = dt.polar(e, i);
    return [l, l.times(-1)];
  }
  conjugate() {
    return new dt(this.real, -this.imag);
  }
  toString(r) {
    return r = r || Hi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new dt(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new dt(Math.sqrt(this.real), 0) : dt.ZERO.isEqualTo(r) ? dt.ONE : this.isEqualTo(dt.ZERO) ? dt.ZERO : this.ln().times(dt.from(r)).exp();
  }
  exp() {
    return dt.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(dt.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(dt.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new dt(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new dt(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(r) {
    return Math.abs(this.imag) <= r.maxAbbreviationError ? r.formatFloat(this.real) : Math.abs(this.real) <= r.maxAbbreviationError ? Math.abs(this.imag - 1) <= r.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= r.maxAbbreviationError ? "-i" : `${r.formatFloat(this.imag)}i` : this.toStringBothValues(r);
  }
  toStringBothValues(r) {
    let t = this.imag >= 0 ? "+" : "-", e = r.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= r.maxAbbreviationError ? "" : r.formatFloat(Math.abs(this.imag));
    return `${(r.allowAbbreviation || r.fixedDigits === void 0 || this.real < 0 ? "" : "+") + r.formatFloat(this.real) + t + e}i`;
  }
}, "o");
var Xe = dt;
Xe.ZERO = new dt(0, 0), Xe.ONE = new dt(1, 0), Xe.I = new dt(0, 1);
var ca = "H";
var pa = "X";
var da = "Y";
var fa = "Z";
var ha = "P";
var ma = "T";
var va = "X^\xBD";
var ga = "Rx";
var ba = "Ry";
var ya = "Rz";
var js = "Swap";
var Bs = "\u2022";
var Hs = "Bloch";
var tc = "|0>";
var ec = "|1>";
var wa = "Measure";
var $s = /* @__PURE__ */ new WeakSet();
function Ws(r) {
  $s.add(r), r.shadowRoot && Us(r.shadowRoot), Ys(r), Vs(r.ownerDocument);
}
__name(Ws, "Ws");
u(Ws, "bind");
function Us(r) {
  Ys(r), Vs(r);
}
__name(Us, "Us");
u(Us, "bindShadow");
var xa = /* @__PURE__ */ new WeakMap();
function Vs(r = document) {
  if (xa.has(r))
    return xa.get(r);
  let t = false, e = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Fs(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && Ys(f);
  });
  e.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return t;
  }, unsubscribe() {
    t = true, xa.delete(r), e.disconnect();
  } };
  return xa.set(r, i), i;
}
__name(Vs, "Vs");
u(Vs, "listenForBind");
function Ys(r) {
  for (let t of r.querySelectorAll("[data-action]"))
    Fs(t);
  r instanceof Element && r.hasAttribute("data-action") && Fs(r);
}
__name(Ys, "Ys");
u(Ys, "bindElements");
function wh(r) {
  let t = r.currentTarget;
  for (let e of rc(t))
    if (r.type === e.type) {
      let i = t.closest(e.tag);
      $s.has(i) && typeof i[e.method] == "function" && i[e.method](r);
      let l = t.getRootNode();
      if (l instanceof ShadowRoot && $s.has(l.host) && l.host.matches(e.tag)) {
        let c = l.host;
        typeof c[e.method] == "function" && c[e.method](r);
      }
    }
}
__name(wh, "wh");
u(wh, "handleEvent");
function* rc(r) {
  for (let t of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = t.lastIndexOf(":"), i = Math.max(0, t.lastIndexOf("#")) || t.length;
    yield { type: t.slice(0, e), tag: t.slice(e + 1, i), method: t.slice(i + 1) || "handleEvent" };
  }
}
__name(rc, "rc");
u(rc, "bindings");
function Fs(r) {
  for (let t of rc(r))
    r.addEventListener(t.type, wh);
}
__name(Fs, "Fs");
u(Fs, "bindActions");
function Xs(r) {
  let t = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(t) || (window[r.name] = r, window.customElements.define(t, r));
}
__name(Xs, "Xs");
u(Xs, "register");
function Zs(r, t) {
  let e = r.tagName.toLowerCase();
  if (r.shadowRoot) {
    for (let i of r.shadowRoot.querySelectorAll(`[data-target~="${e}.${t}"]`))
      if (!i.closest(e))
        return i;
  }
  for (let i of r.querySelectorAll(`[data-target~="${e}.${t}"]`))
    if (i.closest(e) === r)
      return i;
}
__name(Zs, "Zs");
u(Zs, "findTarget");
function Qs(r, t) {
  let e = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${e}.${t}"]`))
      l.closest(e) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${e}.${t}"]`))
    l.closest(e) === r && i.push(l);
  return i;
}
__name(Qs, "Qs");
u(Qs, "findTargets");
function wt(r, t) {
  return Object.defineProperty(r, t, { configurable: true, get() {
    return Zs(this, t);
  } });
}
__name(wt, "wt");
u(wt, "target");
function re(r, t) {
  return Object.defineProperty(r, t, { configurable: true, get() {
    return Qs(this, t);
  } });
}
__name(re, "re");
u(re, "targets");
function Ks(r) {
  for (let t of r.querySelectorAll("template[data-shadowroot]"))
    t.parentElement === r && r.attachShadow({ mode: t.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(t.content.cloneNode(true));
}
__name(Ks, "Ks");
u(Ks, "autoShadowRoot");
var Ea = /* @__PURE__ */ new WeakMap();
function z(r, t) {
  Ea.has(r) || Ea.set(r, []), Ea.get(r).push(t);
}
__name(z, "z");
u(z, "attr");
function Js(r, t) {
  t || (t = nc(Object.getPrototypeOf(r)));
  for (let e of t) {
    let i = r[e], l = ic(e), c = { configurable: true, get() {
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
    } }), Object.defineProperty(r, e, c), e in r && !r.hasAttribute(l) && c.set.call(r, i);
  }
}
__name(Js, "Js");
u(Js, "initializeAttrs");
function nc(r) {
  let t = /* @__PURE__ */ new Set(), e = r;
  for (; e && e !== HTMLElement; ) {
    let i = Ea.get(e) || [];
    for (let l of i)
      t.add(l);
    e = Object.getPrototypeOf(e);
  }
  return t;
}
__name(nc, "nc");
u(nc, "getAttrNames");
function ic(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(ic, "ic");
u(ic, "attrToAttributeName");
function tl(r) {
  let t = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...nc(r.prototype)].map(ic).concat(t);
  }, set(e) {
    t = e;
  } });
}
__name(tl, "tl");
u(tl, "defineObservedAttributes");
var xh = /* @__PURE__ */ new WeakSet();
function oc(r, t) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), xh.add(r), Ks(r), Js(r), Ws(r), t && t.call(r), r.shadowRoot && Us(r.shadowRoot);
}
__name(oc, "oc");
u(oc, "initializeInstance");
function ac(r) {
  tl(r), Xs(r);
}
__name(ac, "ac");
u(ac, "initializeClass");
function tt(r) {
  let t = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    oc(this, t);
  }, ac(r);
}
__name(tt, "tt");
u(tt, "controller");
function Ot(r) {
  class t extends r {
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
  __name(t, "t");
  return u(t, "ActivateableMixinClass"), A([z], t.prototype, "active", 2), t;
}
__name(Ot, "Ot");
u(Ot, "ActivateableMixin");
var En = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function tn(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(t, "t");
  return u(t, "AngleableMixinClass"), A([z], t.prototype, "angle", 2), A([z], t.prototype, "reducedAngle", 2), t;
}
__name(tn, "tn");
u(tn, "AngleableMixin");
var Sn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function $t(r) {
  class t extends r {
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
  __name(t, "t");
  return u(t, "ControllableMixinClass"), t;
}
__name($t, "$t");
u($t, "ControllableMixin");
function Bt(r) {
  class t extends r {
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
  __name(t, "t");
  return u(t, "DisableableMixinClass"), A([z], t.prototype, "disabled", 2), t;
}
__name(Bt, "Bt");
u(Bt, "DisableableMixin");
var X = u(function() {
  return X = Object.assign || u(function(t) {
    for (var e, i = 1, l = arguments.length; i < l; i++) {
      e = arguments[i];
      for (var c in e)
        Object.prototype.hasOwnProperty.call(e, c) && (t[c] = e[c]);
    }
    return t;
  }, "__assign"), X.apply(this, arguments);
}, "__assign");
function ii(r, t) {
  var e = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (e[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      t.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (e[i[l]] = r[i[l]]);
  return e;
}
__name(ii, "ii");
u(ii, "__rest");
function mt(r) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], i = 0;
  if (e)
    return e.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(mt, "mt");
u(mt, "__values");
function gt(r, t) {
  var e = typeof Symbol == "function" && r[Symbol.iterator];
  if (!e)
    return r;
  var i = e.call(r), l, c = [], f;
  try {
    for (; (t === void 0 || t-- > 0) && !(l = i.next()).done; )
      c.push(l.value);
  } catch (b) {
    f = { error: b };
  } finally {
    try {
      l && !l.done && (e = i.return) && e.call(i);
    } finally {
      if (f)
        throw f.error;
    }
  }
  return c;
}
__name(gt, "gt");
u(gt, "__read");
function At(r, t, e) {
  if (e || arguments.length === 2)
    for (var i = 0, l = t.length, c; i < l; i++)
      (c || !(i in t)) && (c || (c = Array.prototype.slice.call(t, 0, i)), c[i] = t[i]);
  return r.concat(c || Array.prototype.slice.call(t));
}
__name(At, "At");
u(At, "__spreadArray");
var Ct;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Ct || (Ct = {}));
var en;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(en || (en = {}));
var Fi = Ct.Start;
var oi = Ct.Stop;
var ai = Ct.Raise;
var Cn = Ct.Send;
var Sa = Ct.Cancel;
var sc = Ct.NullEvent;
var el = Ct.Assign;
var Yv = Ct.After;
var Xv = Ct.DoneState;
var Ca = Ct.Log;
var lc = Ct.Init;
var Wi = Ct.Invoke;
var Zv = Ct.ErrorExecution;
var rl = Ct.ErrorPlatform;
var nl = Ct.ErrorCustom;
var Ui = Ct.Update;
var uc = Ct.Choose;
var cc = Ct.Pure;
var Ta = ".";
var il = {};
var Oa = "xstate.guard";
var pc = "";
var qt = true;
var Ma;
function Yi(r, t, e) {
  e === void 0 && (e = Ta);
  var i = si(r, e), l = si(t, e);
  return bt(l) ? bt(i) ? l === i : false : bt(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Yi(i[c], l[c]) : false;
  });
}
__name(Yi, "Yi");
u(Yi, "matchesState");
function Pa(r) {
  try {
    return bt(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (t) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Pa, "Pa");
u(Pa, "getEventType");
function Ia(r, t) {
  try {
    return Nr(r) ? r : r.toString().split(t);
  } catch (e) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Ia, "Ia");
u(Ia, "toStatePath");
function Eh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Eh, "Eh");
u(Eh, "isStateLike");
function si(r, t) {
  if (Eh(r))
    return r.value;
  if (Nr(r))
    return Vi(r);
  if (typeof r != "string")
    return r;
  var e = Ia(r, t);
  return Vi(e);
}
__name(si, "si");
u(si, "toStateValue");
function Vi(r) {
  if (r.length === 1)
    return r[0];
  for (var t = {}, e = t, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? e[r[i]] = r[i + 1] : (e[r[i]] = {}, e = e[r[i]]);
  return t;
}
__name(Vi, "Vi");
u(Vi, "pathToStateValue");
function li(r, t) {
  for (var e = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    e[c] = t(r[c], c, r, l);
  }
  return e;
}
__name(li, "li");
u(li, "mapValues");
function ol(r, t, e) {
  var i, l, c = {};
  try {
    for (var f = mt(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, d = r[h];
      !e(d) || (c[h] = t(d, h, r));
    }
  } catch (m) {
    i = { error: m };
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
__name(ol, "ol");
u(ol, "mapFilterValues");
var dc = u(function(r) {
  return function(t) {
    var e, i, l = t;
    try {
      for (var c = mt(r), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        l = l[b];
      }
    } catch (h) {
      e = { error: h };
    } finally {
      try {
        f && !f.done && (i = c.return) && i.call(c);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return l;
  };
}, "path");
function fc(r, t) {
  return function(e) {
    var i, l, c = e;
    try {
      for (var f = mt(r), b = f.next(); !b.done; b = f.next()) {
        var h = b.value;
        c = c[t][h];
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
__name(fc, "fc");
u(fc, "nestedPath");
function Xi(r) {
  if (!r)
    return [[]];
  if (bt(r))
    return [[r]];
  var t = Rt(Object.keys(r).map(function(e) {
    var i = r[e];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[e]] : Xi(r[e]).map(function(l) {
      return [e].concat(l);
    });
  }));
  return t;
}
__name(Xi, "Xi");
u(Xi, "toStatePaths");
function Rt(r) {
  var t;
  return (t = []).concat.apply(t, At([], gt(r), false));
}
__name(Rt, "Rt");
u(Rt, "flatten");
function hc(r) {
  return Nr(r) ? r : [r];
}
__name(hc, "hc");
u(hc, "toArrayStrict");
function qe(r) {
  return r === void 0 ? [] : hc(r);
}
__name(qe, "qe");
u(qe, "toArray");
function Tn(r, t, e) {
  var i, l;
  if (Tt(r))
    return r(t, e.data);
  var c = {};
  try {
    for (var f = mt(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, d = r[h];
      Tt(d) ? c[h] = d(t, e.data) : c[h] = d;
    }
  } catch (m) {
    i = { error: m };
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
__name(Tn, "Tn");
u(Tn, "mapContext");
function mc(r) {
  return /^(done|error)\./.test(r);
}
__name(mc, "mc");
u(mc, "isBuiltInEvent");
function al(r) {
  return !!(r instanceof Promise || r !== null && (Tt(r) || typeof r == "object") && Tt(r.then));
}
__name(al, "al");
u(al, "isPromiseLike");
function vc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(vc, "vc");
u(vc, "isBehavior");
function Aa(r, t) {
  var e, i, l = gt([[], []], 2), c = l[0], f = l[1];
  try {
    for (var b = mt(r), h = b.next(); !h.done; h = b.next()) {
      var d = h.value;
      t(d) ? c.push(d) : f.push(d);
    }
  } catch (m) {
    e = { error: m };
  } finally {
    try {
      h && !h.done && (i = b.return) && i.call(b);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [c, f];
}
__name(Aa, "Aa");
u(Aa, "partition");
function gc(r, t) {
  return li(r.states, function(e, i) {
    if (!!e) {
      var l = (bt(t) ? void 0 : t[i]) || (e ? e.current : void 0);
      if (!!l)
        return { current: l, states: gc(e, l) };
    }
  });
}
__name(gc, "gc");
u(gc, "updateHistoryStates");
function bc(r, t) {
  return { current: t, states: gc(r, t) };
}
__name(bc, "bc");
u(bc, "updateHistoryValue");
function sl(r, t, e, i) {
  qt || Ut(!!r, "Attempting to update undefined context");
  var l = r && e.reduce(function(c, f) {
    var b, h, d = f.assignment, m = { state: i, action: f, _event: t }, w = {};
    if (Tt(d))
      w = d(c, t.data, m);
    else
      try {
        for (var y = mt(Object.keys(d)), S = y.next(); !S.done; S = y.next()) {
          var O = S.value, P = d[O];
          w[O] = Tt(P) ? P(c, t.data, m) : P;
        }
      } catch (k) {
        b = { error: k };
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
__name(sl, "sl");
u(sl, "updateContext");
var Ut = u(function() {
}, "warn");
qt || (Ut = u(function(r, t) {
  var e = r instanceof Error ? r : void 0;
  if (!(!e && r) && console !== void 0) {
    var i = ["Warning: ".concat(t)];
    e && i.push(e), console.warn.apply(console, i);
  }
}, "warn"));
function Nr(r) {
  return Array.isArray(r);
}
__name(Nr, "Nr");
u(Nr, "isArray");
function Tt(r) {
  return typeof r == "function";
}
__name(Tt, "Tt");
u(Tt, "isFunction");
function bt(r) {
  return typeof r == "string";
}
__name(bt, "bt");
u(bt, "isString");
function _a(r, t) {
  if (!!r)
    return bt(r) ? { type: Oa, name: r, predicate: t ? t[r] : void 0 } : Tt(r) ? { type: Oa, name: r.name, predicate: r } : r;
}
__name(_a, "_a");
u(_a, "toGuard");
function yc(r) {
  try {
    return "subscribe" in r && Tt(r.subscribe);
  } catch (t) {
    return false;
  }
}
__name(yc, "yc");
u(yc, "isObservable");
var Sr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var ng = (Ma = {}, Ma[Sr] = function() {
  return this;
}, Ma[Symbol.observable] = function() {
  return this;
}, Ma);
function Cr(r) {
  return !!r && "__xstatenode" in r;
}
__name(Cr, "Cr");
u(Cr, "isMachine");
function wc(r) {
  return !!r && typeof r.send == "function";
}
__name(wc, "wc");
u(wc, "isActor");
function Zi(r, t) {
  return bt(r) || typeof r == "number" ? X({ type: r }, t) : r;
}
__name(Zi, "Zi");
u(Zi, "toEventObject");
function ne(r, t) {
  if (!bt(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var e = Zi(r);
  return X({ name: e.type, data: e, $$type: "scxml", type: "external" }, t);
}
__name(ne, "ne");
u(ne, "toSCXMLEvent");
function On(r, t) {
  var e = hc(t).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Cr(i) ? { target: i, event: r } : X(X({}, i), { event: r });
  });
  return e;
}
__name(On, "On");
u(On, "toTransitionConfigArray");
function xc(r) {
  if (!(r === void 0 || r === pc))
    return qe(r);
}
__name(xc, "xc");
u(xc, "normalizeTarget");
function Ec(r, t, e) {
  if (!qt) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === t)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(t, "'.").concat(l));
    }
  }
}
__name(Ec, "Ec");
u(Ec, "reportUnhandledExceptionOnInvocation");
function ka(r, t, e, i, l) {
  var c = r.options.guards, f = { state: l, cond: t, _event: i };
  if (t.type === Oa)
    return ((c == null ? void 0 : c[t.name]) || t.predicate)(e, i.data, f);
  var b = c == null ? void 0 : c[t.type];
  if (!b)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(r.id, "'."));
  return b(e, i.data, f);
}
__name(ka, "ka");
u(ka, "evaluateGuard");
function Da(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(Da, "Da");
u(Da, "toInvokeSource");
function Qi(r, t, e) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: t || i, complete: e || i };
}
__name(Qi, "Qi");
u(Qi, "toObserver");
function Ki(r, t) {
  return "".concat(r, ":invocation[").concat(t, "]");
}
__name(Ki, "Ki");
u(Ki, "createInvokeId");
var Mn = ne({ type: lc });
function za(r, t) {
  return t && t[r] || void 0;
}
__name(za, "za");
u(za, "getActionFunction");
function ui(r, t) {
  var e;
  if (bt(r) || typeof r == "number") {
    var i = za(r, t);
    Tt(i) ? e = { type: r, exec: i } : i ? e = i : e = { type: r, exec: void 0 };
  } else if (Tt(r))
    e = { type: r.name || r.toString(), exec: r };
  else {
    var i = za(r.type, t);
    if (Tt(i))
      e = X(X({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      e = X(X(X({}, i), r), { type: l });
    } else
      e = r;
  }
  return e;
}
__name(ui, "ui");
u(ui, "toActionObject");
var Ji = u(function(r, t) {
  if (!r)
    return [];
  var e = Nr(r) ? r : [r];
  return e.map(function(i) {
    return ui(i, t);
  });
}, "toActionObjects");
function Na(r) {
  var t = ui(r);
  return X(X({ id: bt(r) ? r : t.id }, t), { type: t.type });
}
__name(Na, "Na");
u(Na, "toActivityDefinition");
function Sc(r) {
  return bt(r) ? { type: ai, event: r } : ll(r, { to: en.Internal });
}
__name(Sc, "Sc");
u(Sc, "raise");
function Sh(r) {
  return { type: ai, _event: ne(r.event) };
}
__name(Sh, "Sh");
u(Sh, "resolveRaise");
function ll(r, t) {
  return { to: t ? t.to : void 0, type: Cn, event: Tt(r) ? r : Zi(r), delay: t ? t.delay : void 0, id: t && t.id !== void 0 ? t.id : Tt(r) ? r.name : Pa(r) };
}
__name(ll, "ll");
u(ll, "send");
function Ch(r, t, e, i) {
  var l = { _event: e }, c = ne(Tt(r.event) ? r.event(t, e.data, l) : r.event), f;
  if (bt(r.delay)) {
    var b = i && i[r.delay];
    f = Tt(b) ? b(t, e.data, l) : b;
  } else
    f = Tt(r.delay) ? r.delay(t, e.data, l) : r.delay;
  var h = Tt(r.to) ? r.to(t, e.data, l) : r.to;
  return X(X({}, r), { to: h, _event: c, event: c.data, delay: f });
}
__name(Ch, "Ch");
u(Ch, "resolveSend");
var Th = u(function(r, t, e) {
  return X(X({}, r), { value: bt(r.expr) ? r.expr : r.expr(t, e.data, { _event: e }) });
}, "resolveLog");
var Cc = u(function(r) {
  return { type: Sa, sendId: r };
}, "cancel");
function Tc(r) {
  var t = Na(r);
  return { type: Ct.Start, activity: t, exec: void 0 };
}
__name(Tc, "Tc");
u(Tc, "start");
function Oc(r) {
  var t = Tt(r) ? r : Na(r);
  return { type: Ct.Stop, activity: t, exec: void 0 };
}
__name(Oc, "Oc");
u(Oc, "stop");
function Oh(r, t, e) {
  var i = Tt(r.activity) ? r.activity(t, e.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Ct.Stop, activity: l };
  return c;
}
__name(Oh, "Oh");
u(Oh, "resolveStop");
function Mc(r, t) {
  var e = t ? "#".concat(t) : "";
  return "".concat(Ct.After, "(").concat(r, ")").concat(e);
}
__name(Mc, "Mc");
u(Mc, "after");
function to(r, t) {
  var e = "".concat(Ct.DoneState, ".").concat(r), i = { type: e, data: t };
  return i.toString = function() {
    return e;
  }, i;
}
__name(to, "to");
u(to, "done");
function ci(r, t) {
  var e = "".concat(Ct.DoneInvoke, ".").concat(r), i = { type: e, data: t };
  return i.toString = function() {
    return e;
  }, i;
}
__name(ci, "ci");
u(ci, "doneInvoke");
function Pn(r, t) {
  var e = "".concat(Ct.ErrorPlatform, ".").concat(r), i = { type: e, data: t };
  return i.toString = function() {
    return e;
  }, i;
}
__name(Pn, "Pn");
u(Pn, "error");
function Ra(r, t, e, i, l, c) {
  c === void 0 && (c = false);
  var f = gt(c ? [[], l] : Aa(l, function(y) {
    return y.type === el;
  }), 2), b = f[0], h = f[1], d = b.length ? sl(e, i, b, t) : e, m = c ? [e] : void 0, w = Rt(h.map(function(y) {
    var S;
    switch (y.type) {
      case ai:
        return Sh(y);
      case Cn:
        var O = Ch(y, d, i, r.options.delays);
        return qt || Ut(!bt(y.delay) || typeof O.delay == "number", "No delay reference for delay expression '".concat(y.delay, "' was found on machine '").concat(r.id, "'")), O;
      case Ca:
        return Th(y, d, i);
      case uc: {
        var P = y, k = (S = P.conds.find(function(it) {
          var nt = _a(it.cond, r.options.guards);
          return !nt || ka(r, nt, d, i, t);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!k)
          return [];
        var j = gt(Ra(r, t, d, i, Ji(qe(k), r.options.actions), c), 2), L = j[0], V = j[1];
        return d = V, m == null || m.push(d), L;
      }
      case cc: {
        var k = y.get(d, i.data);
        if (!k)
          return [];
        var M = gt(Ra(r, t, d, i, Ji(qe(k), r.options.actions), c), 2), B = M[0], _ = M[1];
        return d = _, m == null || m.push(d), B;
      }
      case oi:
        return Oh(y, d, i);
      case el: {
        d = sl(d, i, [y], t), m == null || m.push(d);
        break;
      }
      default:
        var N = ui(y, r.options.actions), W = N.exec;
        if (W && m) {
          var Q = m.length - 1;
          N = X(X({}, N), { exec: function(it) {
            for (var nt = [], ct = 1; ct < arguments.length; ct++)
              nt[ct - 1] = arguments[ct];
            W.apply(void 0, At([m[Q]], gt(nt), false));
          } });
        }
        return N;
    }
  }).filter(function(y) {
    return !!y;
  }));
  return [w, d];
}
__name(Ra, "Ra");
u(Ra, "resolveActions");
var Pc = [];
var In = u(function(r, t) {
  Pc.push(r);
  var e = t(r);
  return Pc.pop(), e;
}, "provide");
function Ic(r) {
  var t;
  return t = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, t[Sr] = function() {
    return this;
  }, t;
}
__name(Ic, "Ic");
u(Ic, "createNullActor");
function Ac(r, t, e, i) {
  var l, c = Da(r.src), f = (l = t == null ? void 0 : t.options.services) === null || l === void 0 ? void 0 : l[c.type], b = r.data ? Tn(r.data, e, i) : void 0, h = f ? _c(f, r.id, b) : Ic(r.id);
  return h.meta = r, h;
}
__name(Ac, "Ac");
u(Ac, "createInvocableActor");
function _c(r, t, e) {
  var i = Ic(t);
  if (i.deferred = true, Cr(r)) {
    var l = i.state = In(void 0, function() {
      return (e ? r.withContext(e) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(_c, "_c");
u(_c, "createDeferredActor");
function Mh(r) {
  try {
    return typeof r.send == "function";
  } catch (t) {
    return false;
  }
}
__name(Mh, "Mh");
u(Mh, "isActor");
function kc(r) {
  return Mh(r) && "id" in r;
}
__name(kc, "kc");
u(kc, "isSpawnedActor");
function Dc(r) {
  var t;
  return X((t = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, t[Sr] = function() {
    return this;
  }, t), r);
}
__name(Dc, "Dc");
u(Dc, "toActorRef");
var eo = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function An(r) {
  return Object.keys(r.states).map(function(t) {
    return r.states[t];
  }).filter(function(t) {
    return t.type !== "history";
  });
}
__name(An, "An");
u(An, "getChildren");
function cl(r) {
  var t = [r];
  return eo(r) ? t : t.concat(Rt(An(r).map(cl)));
}
__name(cl, "cl");
u(cl, "getAllStateNodes");
function _n(r, t) {
  var e, i, l, c, f, b, h, d, m = new Set(r), w = ul(m), y = new Set(t);
  try {
    for (var S = mt(y), O = S.next(); !O.done; O = S.next())
      for (var P = O.value, k = P.parent; k && !y.has(k); )
        y.add(k), k = k.parent;
  } catch (Q) {
    e = { error: Q };
  } finally {
    try {
      O && !O.done && (i = S.return) && i.call(S);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var j = ul(y);
  try {
    for (var L = mt(y), V = L.next(); !V.done; V = L.next()) {
      var P = V.value;
      if (P.type === "compound" && (!j.get(P) || !j.get(P).length))
        w.get(P) ? w.get(P).forEach(function(it) {
          return y.add(it);
        }) : P.initialStateNodes.forEach(function(it) {
          return y.add(it);
        });
      else if (P.type === "parallel")
        try {
          for (var M = (f = void 0, mt(An(P))), B = M.next(); !B.done; B = M.next()) {
            var _ = B.value;
            y.has(_) || (y.add(_), w.get(_) ? w.get(_).forEach(function(it) {
              return y.add(it);
            }) : _.initialStateNodes.forEach(function(it) {
              return y.add(it);
            }));
          }
        } catch (it) {
          f = { error: it };
        } finally {
          try {
            B && !B.done && (b = M.return) && b.call(M);
          } finally {
            if (f)
              throw f.error;
          }
        }
    }
  } catch (Q) {
    l = { error: Q };
  } finally {
    try {
      V && !V.done && (c = L.return) && c.call(L);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var N = mt(y), W = N.next(); !W.done; W = N.next())
      for (var P = W.value, k = P.parent; k && !y.has(k); )
        y.add(k), k = k.parent;
  } catch (Q) {
    h = { error: Q };
  } finally {
    try {
      W && !W.done && (d = N.return) && d.call(N);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return y;
}
__name(_n, "_n");
u(_n, "getConfiguration");
function zc(r, t) {
  var e = t.get(r);
  if (!e)
    return {};
  if (r.type === "compound") {
    var i = e[0];
    if (i) {
      if (eo(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return e.forEach(function(c) {
    l[c.key] = zc(c, t);
  }), l;
}
__name(zc, "zc");
u(zc, "getValueFromAdj");
function ul(r) {
  var t, e, i = /* @__PURE__ */ new Map();
  try {
    for (var l = mt(r), c = l.next(); !c.done; c = l.next()) {
      var f = c.value;
      i.has(f) || i.set(f, []), f.parent && (i.has(f.parent) || i.set(f.parent, []), i.get(f.parent).push(f));
    }
  } catch (b) {
    t = { error: b };
  } finally {
    try {
      c && !c.done && (e = l.return) && e.call(l);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return i;
}
__name(ul, "ul");
u(ul, "getAdjList");
function Rc(r, t) {
  var e = _n([r], t);
  return zc(r, ul(e));
}
__name(Rc, "Rc");
u(Rc, "getValue");
function ro(r, t) {
  return Array.isArray(r) ? r.some(function(e) {
    return e === t;
  }) : r instanceof Set ? r.has(t) : false;
}
__name(ro, "ro");
u(ro, "has");
function Nc(r) {
  return At([], gt(new Set(Rt(At([], gt(r.map(function(t) {
    return t.ownEvents;
  })), false)))), false);
}
__name(Nc, "Nc");
u(Nc, "nextEvents");
function kn(r, t) {
  return t.type === "compound" ? An(t).some(function(e) {
    return e.type === "final" && ro(r, e);
  }) : t.type === "parallel" ? An(t).every(function(e) {
    return kn(r, e);
  }) : false;
}
__name(kn, "kn");
u(kn, "isInFinalState");
function Gc(r) {
  return r === void 0 && (r = []), r.reduce(function(t, e) {
    return e.meta !== void 0 && (t[e.id] = e.meta), t;
  }, {});
}
__name(Gc, "Gc");
u(Gc, "getMeta");
function pl(r) {
  return new Set(Rt(r.map(function(t) {
    return t.tags;
  })));
}
__name(pl, "pl");
u(pl, "getTagsFromConfiguration");
function dl(r, t) {
  if (r === t)
    return true;
  if (r === void 0 || t === void 0)
    return false;
  if (bt(r) || bt(t))
    return r === t;
  var e = Object.keys(r), i = Object.keys(t);
  return e.length === i.length && e.every(function(l) {
    return dl(r[l], t[l]);
  });
}
__name(dl, "dl");
u(dl, "stateValuesEqual");
function Lc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Lc, "Lc");
u(Lc, "isStateConfig");
function qc(r, t) {
  var e = r.exec, i = X(X({}, r), { exec: e !== void 0 ? function() {
    return e(t.context, t.event, { action: r, state: t, _event: t._event });
  } : void 0 });
  return i;
}
__name(qc, "qc");
u(qc, "bindActionToState");
var mr = function() {
  function r(t) {
    var e = this, i;
    this.actions = [], this.activities = il, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || il, this.meta = Gc(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (i = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Nc(e.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(t, e) {
    if (t instanceof r)
      return t.context !== e ? new r({ value: t.value, context: e, _event: t._event, _sessionid: null, historyValue: t.historyValue, history: t.history, actions: [], activities: t.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : t;
    var i = Mn;
    return new r({ value: t, context: e, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(t) {
    return new r(t);
  }, r.inert = function(t, e) {
    if (t instanceof r) {
      if (!t.actions.length)
        return t;
      var i = Mn;
      return new r({ value: t.value, context: e, _event: i, _sessionid: null, historyValue: t.historyValue, history: t.history, activities: t.activities, configuration: t.configuration, transitions: [], children: {} });
    }
    return r.from(t, e);
  }, r.prototype.toStrings = function(t, e) {
    var i = this;
    if (t === void 0 && (t = this.value), e === void 0 && (e = "."), bt(t))
      return [t];
    var l = Object.keys(t);
    return l.concat.apply(l, At([], gt(l.map(function(c) {
      return i.toStrings(t[c], e).map(function(f) {
        return c + e + f;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var t = this;
    t.configuration, t.transitions;
    var e = t.tags;
    t.machine;
    var i = ii(t, ["configuration", "transitions", "tags", "machine"]);
    return X(X({}, i), { tags: Array.from(e) });
  }, r.prototype.matches = function(t) {
    return Yi(t, this.value);
  }, r.prototype.hasTag = function(t) {
    return this.tags.has(t);
  }, r.prototype.can = function(t) {
    var e;
    qt && Ut(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, t);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Ph = { deferEvents: false };
var fl = function() {
  function r(t) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = X(X({}, Ph), t);
  }
  __name(r, "r");
  return u(r, "Scheduler"), r.prototype.initialize = function(t) {
    if (this.initialized = true, t) {
      if (!this.options.deferEvents) {
        this.schedule(t);
        return;
      }
      this.process(t);
    }
    this.flushEvents();
  }, r.prototype.schedule = function(t) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(t);
      return;
    }
    if (this.queue.length !== 0)
      throw new Error("Event queue should be empty when it is not processing events");
    this.process(t), this.flushEvents();
  }, r.prototype.clear = function() {
    this.queue = [];
  }, r.prototype.flushEvents = function() {
    for (var t = this.queue.shift(); t; )
      this.process(t), t = this.queue.shift();
  }, r.prototype.process = function(t) {
    this.processingEvent = true;
    try {
      t();
    } catch (e) {
      throw this.clear(), e;
    } finally {
      this.processingEvent = false;
    }
  }, r;
}();
var hl = /* @__PURE__ */ new Map();
var Ih = 0;
var no = { bookId: function() {
  return "x:".concat(Ih++);
}, register: function(r, t) {
  return hl.set(r, t), r;
}, get: function(r) {
  return hl.get(r);
}, free: function(r) {
  hl.delete(r);
} };
function Ga() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  qt || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(Ga, "Ga");
u(Ga, "getGlobal");
function Ah() {
  var r = Ga();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(Ah, "Ah");
u(Ah, "getDevTools");
function jc(r) {
  if (!!Ga()) {
    var t = Ah();
    t && t.register(r);
  }
}
__name(jc, "jc");
u(jc, "registerService");
function Bc(r, t) {
  t === void 0 && (t = {});
  var e = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var d = l.shift();
        e = r.transition(e, d, h), i.forEach(function(m) {
          return m.next(e);
        });
      }
      c = false;
    }
  }, "flush"), b = Dc({ id: t.id, send: function(d) {
    l.push(d), f();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, m, w) {
    var y = Qi(d, m, w);
    return i.add(y), y.next(e), { unsubscribe: function() {
      i.delete(y);
    } };
  } }), h = { parent: t.parent, self: b, id: t.id || "anonymous", observers: i };
  return e = r.start ? r.start(h) : e, b;
}
__name(Bc, "Bc");
u(Bc, "spawnBehavior");
var _h = { sync: false, autoForward: false };
var ge;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(ge || (ge = {}));
var Hc = function() {
  function r(t, e) {
    var i = this;
    e === void 0 && (e = r.defaultOptions), this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = ge.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(m, w) {
      if (Nr(m))
        return i.batch(m), i.state;
      var y = ne(Zi(m, w));
      if (i.status === ge.Stopped)
        return qt || Ut(false, 'Event "'.concat(y.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(y.data))), i.state;
      if (i.status !== ge.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(y.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(y.data)));
      return i.scheduler.schedule(function() {
        i.forward(y);
        var S = i.nextState(y);
        i.update(S, y);
      }), i._state;
    }, this.sendTo = function(m, w) {
      var y = i.parent && (w === en.Parent || i.parent.id === w), S = y ? i.parent : bt(w) ? i.children.get(w) || no.get(w) : wc(w) ? w : void 0;
      if (!S) {
        if (!y)
          throw new Error("Unable to send event to child '".concat(w, "' from service '").concat(i.id, "'."));
        qt || Ut(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(m.type));
        return;
      }
      "machine" in S ? S.send(X(X({}, m), { name: m.name === nl ? "".concat(Pn(i.id)) : m.name, origin: i.sessionId })) : S.send(m.data);
    };
    var l = X(X({}, r.defaultOptions), e), c = l.clock, f = l.logger, b = l.parent, h = l.id, d = h !== void 0 ? h : t.id;
    this.id = d, this.logger = f, this.clock = c, this.parent = b, this.options = l, this.scheduler = new fl({ deferEvents: this.options.deferEvents }), this.sessionId = no.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var t = this;
    return this._initialState ? this._initialState : In(this, function() {
      return t._initialState = t.machine.initialState, t._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return qt || Ut(this.status !== ge.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(t, e) {
    var i, l;
    try {
      for (var c = mt(t.actions), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        this.exec(b, t, e);
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
  }, r.prototype.update = function(t, e) {
    var i, l, c, f, b, h, d, m, w = this;
    if (t._sessionid = this.sessionId, this._state = t, this.options.execute && this.execute(this.state), this.children.forEach(function(Q) {
      w.state.children[Q.id] = Q;
    }), this.devTools && this.devTools.send(e.data, t), t.event)
      try {
        for (var y = mt(this.eventListeners), S = y.next(); !S.done; S = y.next()) {
          var O = S.value;
          O(t.event);
        }
      } catch (Q) {
        i = { error: Q };
      } finally {
        try {
          S && !S.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var P = mt(this.listeners), k = P.next(); !k.done; k = P.next()) {
        var O = k.value;
        O(t, t.event);
      }
    } catch (Q) {
      c = { error: Q };
    } finally {
      try {
        k && !k.done && (f = P.return) && f.call(P);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var j = mt(this.contextListeners), L = j.next(); !L.done; L = j.next()) {
        var V = L.value;
        V(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (Q) {
      b = { error: Q };
    } finally {
      try {
        L && !L.done && (h = j.return) && h.call(j);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var M = kn(t.configuration || [], this.machine);
    if (this.state.configuration && M) {
      var B = t.configuration.find(function(Q) {
        return Q.type === "final" && Q.parent === w.machine;
      }), _ = B && B.doneData ? Tn(B.doneData, t.context, e) : void 0;
      try {
        for (var N = mt(this.doneListeners), W = N.next(); !W.done; W = N.next()) {
          var O = W.value;
          O(ci(this.id, _));
        }
      } catch (Q) {
        d = { error: Q };
      } finally {
        try {
          W && !W.done && (m = N.return) && m.call(N);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(t) {
    return this.listeners.add(t), this.status === ge.Running && t(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(t, e, i) {
    var l = this;
    if (!t)
      return { unsubscribe: function() {
      } };
    var c, f = i;
    return typeof t == "function" ? c = t : (c = t.next.bind(t), f = t.complete.bind(t)), this.listeners.add(c), this.status !== ge.NotStarted && c(this.state), f && (this.status === ge.Stopped ? f() : this.onDone(f)), { unsubscribe: function() {
      c && l.listeners.delete(c), f && l.doneListeners.delete(f);
    } };
  }, r.prototype.onEvent = function(t) {
    return this.eventListeners.add(t), this;
  }, r.prototype.onSend = function(t) {
    return this.sendListeners.add(t), this;
  }, r.prototype.onChange = function(t) {
    return this.contextListeners.add(t), this;
  }, r.prototype.onStop = function(t) {
    return this.stopListeners.add(t), this;
  }, r.prototype.onDone = function(t) {
    return this.doneListeners.add(t), this;
  }, r.prototype.off = function(t) {
    return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
  }, r.prototype.start = function(t) {
    var e = this;
    if (this.status === ge.Running)
      return this;
    this.machine._init(), no.register(this.sessionId, this), this.initialized = true, this.status = ge.Running;
    var i = t === void 0 ? this.initialState : In(this, function() {
      return Lc(t) ? e.machine.resolveState(t) : e.machine.resolveState(mr.from(t, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(i, Mn);
    }), this;
  }, r.prototype.stop = function() {
    var t, e, i, l, c, f, b, h, d, m, w = this;
    try {
      for (var y = mt(this.listeners), S = y.next(); !S.done; S = y.next()) {
        var O = S.value;
        this.listeners.delete(O);
      }
    } catch (W) {
      t = { error: W };
    } finally {
      try {
        S && !S.done && (e = y.return) && e.call(y);
      } finally {
        if (t)
          throw t.error;
      }
    }
    try {
      for (var P = mt(this.stopListeners), k = P.next(); !k.done; k = P.next()) {
        var O = k.value;
        O(), this.stopListeners.delete(O);
      }
    } catch (W) {
      i = { error: W };
    } finally {
      try {
        k && !k.done && (l = P.return) && l.call(P);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var j = mt(this.contextListeners), L = j.next(); !L.done; L = j.next()) {
        var O = L.value;
        this.contextListeners.delete(O);
      }
    } catch (W) {
      c = { error: W };
    } finally {
      try {
        L && !L.done && (f = j.return) && f.call(j);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var V = mt(this.doneListeners), M = V.next(); !M.done; M = V.next()) {
        var O = M.value;
        this.doneListeners.delete(O);
      }
    } catch (W) {
      b = { error: W };
    } finally {
      try {
        M && !M.done && (h = V.return) && h.call(V);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    At([], gt(this.state.configuration), false).sort(function(W, Q) {
      return Q.order - W.order;
    }).forEach(function(W) {
      var Q, it;
      try {
        for (var nt = mt(W.definition.exit), ct = nt.next(); !ct.done; ct = nt.next()) {
          var Y = ct.value;
          w.exec(Y, w.state);
        }
      } catch (ut) {
        Q = { error: ut };
      } finally {
        try {
          ct && !ct.done && (it = nt.return) && it.call(nt);
        } finally {
          if (Q)
            throw Q.error;
        }
      }
    }), this.children.forEach(function(W) {
      Tt(W.stop) && W.stop();
    }), this.children.clear();
    try {
      for (var B = mt(Object.keys(this.delayedEventsMap)), _ = B.next(); !_.done; _ = B.next()) {
        var N = _.value;
        this.clock.clearTimeout(this.delayedEventsMap[N]);
      }
    } catch (W) {
      d = { error: W };
    } finally {
      try {
        _ && !_.done && (m = B.return) && m.call(B);
      } finally {
        if (d)
          throw d.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new fl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = ge.Stopped, this._initialState = void 0, no.free(this.sessionId), this;
  }, r.prototype.batch = function(t) {
    var e = this;
    if (this.status === ge.NotStarted && this.options.deferEvents)
      qt || Ut(false, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== ge.Running)
      throw new Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = e.state, f = false, b = [], h = u(function(y) {
        var S = ne(y);
        e.forward(S), c = In(e, function() {
          return e.machine.transition(c, S);
        }), b.push.apply(b, At([], gt(c.actions.map(function(O) {
          return qc(O, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var d = mt(t), m = d.next(); !m.done; m = d.next()) {
          var w = m.value;
          h(w);
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          m && !m.done && (l = d.return) && l.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = f, c.actions = b, e.update(c, ne(t[t.length - 1]));
    });
  }, r.prototype.sender = function(t) {
    return this.send.bind(this, t);
  }, r.prototype.nextState = function(t) {
    var e = this, i = ne(t);
    if (i.name.indexOf(rl) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(rl) === 0;
    }))
      throw i.data.data;
    var l = In(this, function() {
      return e.machine.transition(e.state, i);
    });
    return l;
  }, r.prototype.forward = function(t) {
    var e, i;
    try {
      for (var l = mt(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var f = c.value, b = this.children.get(f);
        if (!b)
          throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(f, "'."));
        b.send(t);
      }
    } catch (h) {
      e = { error: h };
    } finally {
      try {
        c && !c.done && (i = l.return) && i.call(l);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, r.prototype.defer = function(t) {
    var e = this;
    this.delayedEventsMap[t.id] = this.clock.setTimeout(function() {
      t.to ? e.sendTo(t._event, t.to) : e.send(t._event);
    }, t.delay);
  }, r.prototype.cancel = function(t) {
    this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
  }, r.prototype.exec = function(t, e, i) {
    i === void 0 && (i = this.machine.options.actions);
    var l = e.context, c = e._event, f = t.exec || za(t.type, i), b = Tt(f) ? f : f ? f.exec : t.exec;
    if (b)
      try {
        return b(l, c.data, { action: t, state: this.state, _event: c });
      } catch (M) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: M }), M;
      }
    switch (t.type) {
      case Cn:
        var h = t;
        if (typeof h.delay == "number") {
          this.defer(h);
          return;
        } else
          h.to ? this.sendTo(h._event, h.to) : this.send(h._event);
        break;
      case Sa:
        this.cancel(t.sendId);
        break;
      case Fi: {
        if (this.status !== ge.Running)
          return;
        var d = t.activity;
        if (!this.state.activities[d.id || d.type])
          break;
        if (d.type === Ct.Invoke) {
          var m = Da(d.src), w = this.machine.options.services ? this.machine.options.services[m.type] : void 0, y = d.id, S = d.data;
          qt || Ut(!("forward" in d), "`forward` property is deprecated (found in invocation of '".concat(d.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var O = "autoForward" in d ? d.autoForward : !!d.forward;
          if (!w) {
            qt || Ut(false, "No service found for invocation '".concat(d.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var P = S ? Tn(S, l, c) : void 0;
          if (typeof w == "string")
            return;
          var k = Tt(w) ? w(l, c.data, { data: P, src: m, meta: d.meta }) : w;
          if (!k)
            return;
          var j = void 0;
          Cr(k) && (k = P ? k.withContext(P) : k, j = { autoForward: O }), this.spawn(k, y, j);
        } else
          this.spawnActivity(d);
        break;
      }
      case oi: {
        this.stopChild(t.activity.id);
        break;
      }
      case Ca:
        var L = t.label, V = t.value;
        L ? this.logger(L, V) : this.logger(V);
        break;
      default:
        qt || Ut(false, "No implementation found for action type '".concat(t.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(t) {
    var e;
    this.children.delete(t), this.forwardTo.delete(t), (e = this.state) === null || e === void 0 || delete e.children[t];
  }, r.prototype.stopChild = function(t) {
    var e = this.children.get(t);
    !e || (this.removeChild(t), Tt(e.stop) && e.stop());
  }, r.prototype.spawn = function(t, e, i) {
    if (al(t))
      return this.spawnPromise(Promise.resolve(t), e);
    if (Tt(t))
      return this.spawnCallback(t, e);
    if (kc(t))
      return this.spawnActor(t, e);
    if (yc(t))
      return this.spawnObservable(t, e);
    if (Cr(t))
      return this.spawnMachine(t, X(X({}, i), { id: e }));
    if (vc(t))
      return this.spawnBehavior(t, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'));
  }, r.prototype.spawnMachine = function(t, e) {
    var i = this;
    e === void 0 && (e = {});
    var l = new r(t, X(X({}, this.options), { parent: this, id: e.id || t.id })), c = X(X({}, _h), e);
    c.sync && l.onTransition(function(b) {
      i.send(Ui, { state: b, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(b) {
      i.removeChild(l.id), i.send(ne(b, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(t, e) {
    var i = Bc(t, { id: e, parent: this });
    return this.children.set(e, i), i;
  }, r.prototype.spawnPromise = function(t, e) {
    var i, l = this, c = false, f;
    t.then(function(h) {
      c || (f = h, l.removeChild(e), l.send(ne(ci(e, h), { origin: e })));
    }, function(h) {
      if (!c) {
        l.removeChild(e);
        var d = Pn(e, h);
        try {
          l.send(ne(d, { origin: e }));
        } catch (m) {
          Ec(h, m, e), l.devTools && l.devTools.send(d, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var b = (i = { id: e, send: function() {
    }, subscribe: function(h, d, m) {
      var w = Qi(h, d, m), y = false;
      return t.then(function(S) {
        y || (w.next(S), !y && w.complete());
      }, function(S) {
        y || w.error(S);
      }), { unsubscribe: function() {
        return y = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return f;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(e, b), b;
  }, r.prototype.spawnCallback = function(t, e) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), h, d = u(function(y) {
      h = y, b.forEach(function(S) {
        return S(y);
      }), !c && l.send(ne(y, { origin: e }));
    }, "receive"), m;
    try {
      m = t(d, function(y) {
        f.add(y);
      });
    } catch (y) {
      this.send(Pn(e, y));
    }
    if (al(m))
      return this.spawnPromise(m, e);
    var w = (i = { id: e, send: function(y) {
      return f.forEach(function(S) {
        return S(y);
      });
    }, subscribe: function(y) {
      var S = Qi(y);
      return b.add(S.next), { unsubscribe: function() {
        b.delete(S.next);
      } };
    }, stop: function() {
      c = true, Tt(m) && m();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return h;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(e, w), w;
  }, r.prototype.spawnObservable = function(t, e) {
    var i, l = this, c, f = t.subscribe(function(h) {
      c = h, l.send(ne(h, { origin: e }));
    }, function(h) {
      l.removeChild(e), l.send(ne(Pn(e, h), { origin: e }));
    }, function() {
      l.removeChild(e), l.send(ne(ci(e), { origin: e }));
    }), b = (i = { id: e, send: function() {
    }, subscribe: function(h, d, m) {
      return t.subscribe(h, d, m);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: e };
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(e, b), b;
  }, r.prototype.spawnActor = function(t, e) {
    return this.children.set(e, t), t;
  }, r.prototype.spawnActivity = function(t) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
    if (!e) {
      qt || Ut(false, "No implementation found for activity '".concat(t.type, "'"));
      return;
    }
    var i = e(this.state.context, t);
    this.spawnEffect(t.id, i);
  }, r.prototype.spawnEffect = function(t, e) {
    var i;
    this.children.set(t, (i = { id: t, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: e || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: t };
    } }, i[Sr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var t = Ga();
    if (this.options.devTools && t) {
      if (t.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(X(X({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, e), { features: X({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      jc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Sr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === ge.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(t, e) {
    return setTimeout(t, e);
  }, clearTimeout: function(t) {
    return clearTimeout(t);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = ce, r;
}();
function ce(r, t) {
  var e = new Hc(r, t);
  return e;
}
__name(ce, "ce");
u(ce, "interpret");
function kh(r) {
  if (typeof r == "string") {
    var t = { type: r };
    return t.toString = function() {
      return r;
    }, t;
  }
  return r;
}
__name(kh, "kh");
u(kh, "toInvokeSource");
function io(r) {
  return X(X({ type: Wi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var t = ii(r, ["onDone", "onError"]);
    return X(X({}, t), { type: Wi, src: kh(r.src) });
  } });
}
__name(io, "io");
u(io, "toInvokeDefinition");
var fi = "";
var ml = "#";
var oo = "*";
var pi = {};
var di = u(function(r) {
  return r[0] === ml;
}, "isStateId");
var Dh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var zh = u(function(r, t, e) {
  var i = e.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (bt(c.target) || Cr(c.target));
  }), l = t === fi ? "the transient event" : "event '".concat(t, "'");
  Ut(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var $c = function() {
  function r(t, e, i, l) {
    var c = this;
    i === void 0 && (i = "context" in t ? t.context : void 0);
    var f;
    this.config = t, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Dh(), e), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ta), this.id = this.config.id || At([this.machine.key], gt(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, qt || Ut(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? li(this.config.states, function(d, m) {
      var w, y = new r(d, {}, void 0, { parent: c, key: m });
      return Object.assign(c.idMap, X((w = {}, w[y.id] = y, w), y.idMap)), y;
    }) : pi;
    var b = 0;
    function h(d) {
      var m, w;
      d.order = b++;
      try {
        for (var y = mt(An(d)), S = y.next(); !S.done; S = y.next()) {
          var O = S.value;
          h(O);
        }
      } catch (P) {
        m = { error: P };
      } finally {
        try {
          S && !S.done && (w = y.return) && w.call(y);
        } finally {
          if (m)
            throw m.error;
        }
      }
    }
    __name(h, "h");
    u(h, "dfs"), h(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var m = d.event;
      return m === fi;
    }) : fi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = qe(this.config.entry || this.config.onEntry).map(function(d) {
      return ui(d);
    }), this.onExit = qe(this.config.exit || this.config.onExit).map(function(d) {
      return ui(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = qe(this.config.invoke).map(function(d, m) {
      var w, y;
      if (Cr(d)) {
        var S = Ki(c.id, m);
        return c.machine.options.services = X((w = {}, w[S] = d, w), c.machine.options.services), io({ src: S, id: S });
      } else if (bt(d.src)) {
        var S = d.id || Ki(c.id, m);
        return io(X(X({}, d), { id: S, src: d.src }));
      } else if (Cr(d.src) || Tt(d.src)) {
        var S = d.id || Ki(c.id, m);
        return c.machine.options.services = X((y = {}, y[S] = d.src, y), c.machine.options.services), io(X(X({ id: S }, d), { src: S }));
      } else {
        var O = d.src;
        return io(X(X({ id: Ki(c.id, m) }, d), { src: O }));
      }
    }), this.activities = qe(this.config.activities).concat(this.invoke).map(function(d) {
      return Na(d);
    }), this.transition = this.transition.bind(this), this.tags = qe(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || cl(this).forEach(function(t) {
      return t.on;
    });
  }, r.prototype.withConfig = function(t, e) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, b = i.services, h = i.delays;
    return new r(this.config, { actions: X(X({}, l), t.actions), activities: X(X({}, c), t.activities), guards: X(X({}, f), t.guards), services: X(X({}, b), t.services), delays: X(X({}, h), t.delays) }, e != null ? e : this.context);
  }, r.prototype.withContext = function(t) {
    return new r(this.config, this.options, t);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Tt(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: li(this.states, function(t) {
      return t.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), r.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(r.prototype, "on", { get: function() {
    if (this.__cache.on)
      return this.__cache.on;
    var t = this.transitions;
    return this.__cache.on = t.reduce(function(e, i) {
      return e[i.eventType] = e[i.eventType] || [], e[i.eventType].push(i), e;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), r.prototype.getCandidates = function(t) {
    if (this.__cache.candidates[t])
      return this.__cache.candidates[t];
    var e = t === fi, i = this.transitions.filter(function(l) {
      var c = l.eventType === t;
      return e ? c : c || l.eventType === oo;
    });
    return this.__cache.candidates[t] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var t = this, e = this.config.after;
    if (!e)
      return [];
    var i = u(function(c, f) {
      var b = Tt(c) ? "".concat(t.id, ":delay[").concat(f, "]") : c, h = Mc(b, t.id);
      return t.onEntry.push(ll(h, { delay: c })), t.onExit.push(Cc(h)), h;
    }, "mutateEntryExit"), l = Nr(e) ? e.map(function(c, f) {
      var b = i(c.delay, f);
      return X(X({}, c), { event: b });
    }) : Rt(Object.keys(e).map(function(c, f) {
      var b = e[c], h = bt(b) ? { target: b } : b, d = isNaN(+c) ? c : +c, m = i(d, f);
      return qe(h).map(function(w) {
        return X(X({}, w), { event: m, delay: d });
      });
    }));
    return l.map(function(c) {
      var f = c.delay;
      return X(X({}, t.formatTransition(c)), { delay: f });
    });
  }, r.prototype.getStateNodes = function(t) {
    var e, i = this;
    if (!t)
      return [];
    var l = t instanceof mr ? t.value : si(t, this.delimiter);
    if (bt(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((e = {}, e[l] = c, e)) : [this, this.states[l]];
    }
    var f = Object.keys(l), b = [this];
    return b.push.apply(b, At([], gt(Rt(f.map(function(h) {
      return i.getStateNode(h).getStateNodes(l[h]);
    }))), false)), b;
  }, r.prototype.handles = function(t) {
    var e = Pa(t);
    return this.events.includes(e);
  }, r.prototype.resolveState = function(t) {
    var e = t instanceof mr ? t : mr.create(t), i = Array.from(_n([], this.getStateNodes(e.value)));
    return new mr(X(X({}, e), { value: this.resolve(e.value), configuration: i, done: kn(i, this), tags: pl(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(t, e, i) {
    var l = this.getStateNode(t), c = l.next(e, i);
    return !c || !c.transitions.length ? this.next(e, i) : c;
  }, r.prototype.transitionCompoundNode = function(t, e, i) {
    var l = Object.keys(t), c = this.getStateNode(l[0]), f = c._transition(t[l[0]], e, i);
    return !f || !f.transitions.length ? this.next(e, i) : f;
  }, r.prototype.transitionParallelNode = function(t, e, i) {
    var l, c, f = {};
    try {
      for (var b = mt(Object.keys(t)), h = b.next(); !h.done; h = b.next()) {
        var d = h.value, m = t[d];
        if (!!m) {
          var w = this.getStateNode(d), y = w._transition(m, e, i);
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
    }), O = Rt(S.map(function(L) {
      return L.transitions;
    })), P = S.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!P)
      return this.next(e, i);
    var k = Rt(S.map(function(L) {
      return L.entrySet;
    })), j = Rt(Object.keys(f).map(function(L) {
      return f[L].configuration;
    }));
    return { transitions: O, entrySet: k, exitSet: Rt(S.map(function(L) {
      return L.exitSet;
    })), configuration: j, source: e, actions: Rt(Object.keys(f).map(function(L) {
      return f[L].actions;
    })) };
  }, r.prototype._transition = function(t, e, i) {
    return bt(t) ? this.transitionLeafNode(t, e, i) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, e, i) : this.transitionParallelNode(t, e, i);
  }, r.prototype.getTransitionData = function(t, e) {
    return this._transition(t.value, t, ne(e));
  }, r.prototype.next = function(t, e) {
    var i, l, c = this, f = e.name, b = [], h = [], d;
    try {
      for (var m = mt(this.getCandidates(f)), w = m.next(); !w.done; w = m.next()) {
        var y = w.value, S = y.cond, O = y.in, P = t.context, k = O ? bt(O) && di(O) ? t.matches(si(this.getStateNodeById(O).path, this.delimiter)) : Yi(si(O, this.delimiter), dc(this.path.slice(0, -2))(t.value)) : true, j = false;
        try {
          j = !S || ka(this.machine, S, P, e, t);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (j && k) {
          y.target !== void 0 && (h = y.target), b.push.apply(b, At([], gt(y.actions), false)), d = y;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        w && !w.done && (l = m.return) && l.call(m);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!d) {
      if (!h.length)
        return { transitions: [d], entrySet: [], exitSet: [], configuration: t.value ? [this] : [], source: t, actions: b };
      var L = Rt(h.map(function(B) {
        return c.getRelativeStateNodes(B, t.historyValue);
      })), V = !!d.internal, M = V ? [] : Rt(L.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [d], entrySet: M, exitSet: V ? [] : [this], configuration: L, source: t, actions: b };
    }
  }, r.prototype.nodesFromChild = function(t) {
    if (t.escapes(this))
      return [];
    for (var e = [], i = t; i && i !== this; )
      e.push(i), i = i.parent;
    return e.push(this), e;
  }, r.prototype.escapes = function(t) {
    if (this === t)
      return false;
    for (var e = this.parent; e; ) {
      if (e === t)
        return false;
      e = e.parent;
    }
    return true;
  }, r.prototype.getActions = function(t, e, i, l) {
    var c, f, b, h, d = _n([], l ? this.getStateNodes(l.value) : [this]), m = t.configuration.length ? _n(d, t.configuration) : d;
    try {
      for (var w = mt(m), y = w.next(); !y.done; y = w.next()) {
        var S = y.value;
        ro(d, S) || t.entrySet.push(S);
      }
    } catch (N) {
      c = { error: N };
    } finally {
      try {
        y && !y.done && (f = w.return) && f.call(w);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var O = mt(d), P = O.next(); !P.done; P = O.next()) {
        var S = P.value;
        (!ro(m, S) || ro(t.exitSet, S.parent)) && t.exitSet.push(S);
      }
    } catch (N) {
      b = { error: N };
    } finally {
      try {
        P && !P.done && (h = O.return) && h.call(O);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var k = Rt(t.entrySet.map(function(N) {
      var W = [];
      if (N.type !== "final")
        return W;
      var Q = N.parent;
      if (!Q.parent)
        return W;
      W.push(to(N.id, N.doneData), to(Q.id, N.doneData ? Tn(N.doneData, e, i) : void 0));
      var it = Q.parent;
      return it.type === "parallel" && An(it).every(function(nt) {
        return kn(t.configuration, nt);
      }) && W.push(to(it.id)), W;
    }));
    t.exitSet.sort(function(N, W) {
      return W.order - N.order;
    }), t.entrySet.sort(function(N, W) {
      return N.order - W.order;
    });
    var j = new Set(t.entrySet), L = new Set(t.exitSet), V = gt([Rt(Array.from(j).map(function(N) {
      return At(At([], gt(N.activities.map(function(W) {
        return Tc(W);
      })), false), gt(N.onEntry), false);
    })).concat(k.map(Sc)), Rt(Array.from(L).map(function(N) {
      return At(At([], gt(N.onExit), false), gt(N.activities.map(function(W) {
        return Oc(W);
      })), false);
    }))], 2), M = V[0], B = V[1], _ = Ji(B.concat(t.actions).concat(M), this.machine.options.actions);
    return _;
  }, r.prototype.transition = function(t, e, i) {
    t === void 0 && (t = this.initialState);
    var l = ne(e), c;
    if (t instanceof mr)
      c = i === void 0 ? t : this.resolveState(mr.from(t, i));
    else {
      var f = bt(t) ? this.resolve(Vi(this.getResolvedPath(t))) : this.resolve(t), b = i != null ? i : this.machine.context;
      c = this.resolveState(mr.from(f, b));
    }
    if (!qt && l.name === oo)
      throw new Error("An event cannot have the wildcard type ('".concat(oo, "')"));
    if (this.strict && !this.events.includes(l.name) && !mc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var h = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, d = _n([], this.getStateNodes(c.value)), m = h.configuration.length ? _n(d, h.configuration) : d;
    return h.configuration = At([], gt(m), false), this.resolveTransition(h, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(t, e, i) {
    var l, c = t.actions;
    return t = this.transition(t, e), t._event = i, t.event = i.data, (l = t.actions).unshift.apply(l, At([], gt(c), false)), t;
  }, r.prototype.resolveTransition = function(t, e, i, l) {
    var c, f, b = this;
    l === void 0 && (l = Mn);
    var h = t.configuration, d = !e || t.transitions.length > 0, m = d ? Rc(this.machine, h) : void 0, w = e ? e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0 : void 0, y = this.getActions(t, i, l, e), S = e ? X({}, e.activities) : {};
    try {
      for (var O = mt(y), P = O.next(); !P.done; P = O.next()) {
        var k = P.value;
        k.type === Fi ? S[k.activity.id || k.activity.type] = k : k.type === oi && (S[k.activity.id || k.activity.type] = false);
      }
    } catch (ft) {
      c = { error: ft };
    } finally {
      try {
        P && !P.done && (f = O.return) && f.call(O);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var j = gt(Ra(this, e, i, l, y, this.machine.config.preserveActionOrder), 2), L = j[0], V = j[1], M = gt(Aa(L, function(ft) {
      return ft.type === ai || ft.type === Cn && ft.to === en.Internal;
    }), 2), B = M[0], _ = M[1], N = L.filter(function(ft) {
      var Xt;
      return ft.type === Fi && ((Xt = ft.activity) === null || Xt === void 0 ? void 0 : Xt.type) === Wi;
    }), W = N.reduce(function(ft, Xt) {
      return ft[Xt.activity.id] = Ac(Xt.activity, b.machine, V, l), ft;
    }, e ? X({}, e.children) : {}), Q = d ? t.configuration : e ? e.configuration : [], it = kn(Q, this), nt = new mr({ value: m || e.value, context: V, _event: l, _sessionid: e ? e._sessionid : null, historyValue: m ? w ? bc(w, m) : void 0 : e ? e.historyValue : void 0, history: !m || t.source ? e : void 0, actions: m ? _ : [], activities: m ? S : e ? e.activities : {}, events: [], configuration: Q, transitions: t.transitions, children: W, done: it, tags: pl(Q), machine: this }), ct = i !== V;
    nt.changed = l.name === Ui || ct;
    var Y = nt.history;
    Y && delete Y.history;
    var ut = !it && (this._transient || h.some(function(ft) {
      return ft._transient;
    }));
    if (!d && (!ut || l.name === fi))
      return nt;
    var kt = nt;
    if (!it)
      for (ut && (kt = this.resolveRaisedTransition(kt, { type: sc }, l)); B.length; ) {
        var Wt = B.shift();
        kt = this.resolveRaisedTransition(kt, Wt._event, l);
      }
    var Gt = kt.changed || (Y ? !!kt.actions.length || ct || typeof Y.value != typeof kt.value || !dl(kt.value, Y.value) : void 0);
    return kt.changed = Gt, kt.history = Y, kt;
  }, r.prototype.getStateNode = function(t) {
    if (di(t))
      return this.machine.getStateNodeById(t);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[t];
    if (!e)
      throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, r.prototype.getStateNodeById = function(t) {
    var e = di(t) ? t.slice(ml.length) : t;
    if (e === this.id)
      return this;
    var i = this.machine.idMap[e];
    if (!i)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(t) {
    if (typeof t == "string" && di(t))
      try {
        return this.getStateNodeById(t.slice(1));
      } catch (c) {
      }
    for (var e = Ia(t, this.delimiter).slice(), i = this; e.length; ) {
      var l = e.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(t) {
    var e, i = this;
    if (!t)
      return this.initialStateValue || pi;
    switch (this.type) {
      case "parallel":
        return li(this.initialStateValue, function(c, f) {
          return c ? i.getStateNode(f).resolve(t[f] || c) : pi;
        });
      case "compound":
        if (bt(t)) {
          var l = this.getStateNode(t);
          return l.type === "parallel" || l.type === "compound" ? (e = {}, e[t] = l.initialStateValue, e) : t;
        }
        return Object.keys(t).length ? li(t, function(c, f) {
          return c ? i.getStateNode(f).resolve(c) : pi;
        }) : this.initialStateValue || {};
      default:
        return t || pi;
    }
  }, r.prototype.getResolvedPath = function(t) {
    if (di(t)) {
      var e = this.machine.idMap[t.slice(ml.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(t, "'"));
      return e.path;
    }
    return Ia(t, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var t;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = ol(this.states, function(i) {
        return i.initialStateValue || pi;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = eo(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
    } else
      e = {};
    return this.__cache.initialStateValue = e, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), r.prototype.getInitialState = function(t, e) {
    this._init();
    var i = this.getStateNodes(t);
    return this.resolveTransition({ configuration: i, entrySet: i, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, e != null ? e : this.machine.context, void 0);
  }, Object.defineProperty(r.prototype, "initialState", { get: function() {
    var t = this.initialStateValue;
    if (!t)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "target", { get: function() {
    var t;
    if (this.type === "history") {
      var e = this.config;
      bt(e.target) ? t = di(e.target) ? Vi(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : t = e.target;
    }
    return t;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(t, e, i) {
    return i === void 0 && (i = true), i ? t.type === "history" ? t.resolveHistory(e) : t.initialStateNodes : [t];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var t = this;
    if (eo(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return qt || Ut(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = Xi(this.initialStateValue);
    return Rt(e.map(function(i) {
      return t.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(t) {
    if (!t.length)
      return [this];
    var e = gt(t), i = e[0], l = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(i, "' from node with no states"));
    var c = this.getStateNode(i);
    if (c.type === "history")
      return c.resolveHistory();
    if (!this.states[i])
      throw new Error("Child state '".concat(i, "' does not exist on '").concat(this.id, "'"));
    return this.states[i].getFromRelativePath(l);
  }, r.prototype.historyValue = function(t) {
    if (!!Object.keys(this.states).length)
      return { current: t || this.initialStateValue, states: ol(this.states, function(e, i) {
        if (!t)
          return e.historyValue();
        var l = bt(t) ? void 0 : t[i];
        return e.historyValue(l || e.initialStateValue);
      }, function(e) {
        return !e.history;
      }) };
  }, r.prototype.resolveHistory = function(t) {
    var e = this;
    if (this.type !== "history")
      return [this];
    var i = this.parent;
    if (!t) {
      var l = this.target;
      return l ? Rt(Xi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = fc(i.path, "states")(t).current;
    return bt(c) ? [i.getStateNode(c)] : Rt(Xi(c).map(function(f) {
      return e.history === "deep" ? i.getFromRelativePath(f) : [i.states[f[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var t = this, e = Rt(Object.keys(this.states).map(function(i) {
      return t.states[i].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "events", { get: function() {
    var t, e, i, l;
    if (this.__cache.events)
      return this.__cache.events;
    var c = this.states, f = new Set(this.ownEvents);
    if (c)
      try {
        for (var b = mt(Object.keys(c)), h = b.next(); !h.done; h = b.next()) {
          var d = h.value, m = c[d];
          if (m.states)
            try {
              for (var w = (i = void 0, mt(m.events)), y = w.next(); !y.done; y = w.next()) {
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
        t = { error: O };
      } finally {
        try {
          h && !h.done && (e = b.return) && e.call(b);
        } finally {
          if (t)
            throw t.error;
        }
      }
    return this.__cache.events = Array.from(f);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "ownEvents", { get: function() {
    var t = new Set(this.transitions.filter(function(e) {
      return !(!e.target && !e.actions.length && e.internal);
    }).map(function(e) {
      return e.eventType;
    }));
    return Array.from(t);
  }, enumerable: false, configurable: true }), r.prototype.resolveTarget = function(t) {
    var e = this;
    if (t !== void 0)
      return t.map(function(i) {
        if (!bt(i))
          return i;
        var l = i[0] === e.delimiter;
        if (l && !e.parent)
          return e.getStateNodeByPath(i.slice(1));
        var c = l ? e.key + i : i;
        if (e.parent)
          try {
            var f = e.parent.getStateNodeByPath(c);
            return f;
          } catch (b) {
            throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(b.message));
          }
        else
          return e.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(t) {
    var e = this, i = xc(t.target), l = "internal" in t ? t.internal : i ? i.some(function(h) {
      return bt(h) && h[0] === e.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), b = X(X({}, t), { actions: Ji(qe(t.actions)), cond: _a(t.cond, c), target: f, source: this, internal: l, eventType: t.event, toJSON: function() {
      return X(X({}, b), { target: b.target ? b.target.map(function(h) {
        return "#".concat(h.id);
      }) : void 0, source: "#".concat(e.id) });
    } });
    return b;
  }, r.prototype.formatTransitions = function() {
    var t, e, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, f = oo, b = c[f], h = b === void 0 ? [] : b, d = ii(c, [typeof f == "symbol" ? f : f + ""]);
      l = Rt(Object.keys(d).map(function(L) {
        !qt && L === fi && Ut(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var V = On(L, d[L]);
        return qt || zh(i, L, V), V;
      }).concat(On(oo, h)));
    }
    var m = this.config.always ? On("", this.config.always) : [], w = this.config.onDone ? On(String(to(this.id)), this.config.onDone) : [];
    qt || Ut(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var y = Rt(this.invoke.map(function(L) {
      var V = [];
      return L.onDone && V.push.apply(V, At([], gt(On(String(ci(L.id)), L.onDone)), false)), L.onError && V.push.apply(V, At([], gt(On(String(Pn(L.id)), L.onError)), false)), V;
    })), S = this.after, O = Rt(At(At(At(At([], gt(w), false), gt(y), false), gt(l), false), gt(m), false).map(function(L) {
      return qe(L).map(function(V) {
        return i.formatTransition(V);
      });
    }));
    try {
      for (var P = mt(S), k = P.next(); !k.done; k = P.next()) {
        var j = k.value;
        O.push(j);
      }
    } catch (L) {
      t = { error: L };
    } finally {
      try {
        k && !k.done && (e = P.return) && e.call(P);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return O;
  }, r;
}();
function be(r, t) {
  return new $c(r, t);
}
__name(be, "be");
u(be, "createMachine");
var ao = ni(La(), 1);
var Wc = u((r) => r != null && typeof r.draggable == "boolean", "isDraggable");
var qa = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var gl = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Mt(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = be({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        this.dispatchEvent(new Event("draggable-init", { bubbles: true }));
      }, setInteract: () => {
        let i = (0, ao.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        qa(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), gl(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("operation-xl")));
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
        (0, ao.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => qa(this.dropzone), isOnPaletteDropzone: () => gl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && qa(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = ce(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${ee(i.value)}`);
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
      return U.notNull(i), !gl(i) && !qa(i) ? null : i;
    }
    set snapTargets(i) {
      (0, ao.default)(this).draggable({ modifiers: [ao.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
  __name(t, "t");
  return u(t, "DraggableMixinClass"), A([z], t.prototype, "operationX", 2), A([z], t.prototype, "operationY", 2), A([z], t.prototype, "grabbed", 2), A([z], t.prototype, "dragging", 2), A([z], t.prototype, "snapped", 2), A([z], t.prototype, "bit", 2), A([z], t.prototype, "debugDraggable", 2), t;
}
__name(Mt, "Mt");
u(Mt, "DraggableMixin");
var Dn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Uc(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(t, "t");
  return u(t, "FlaggableMixinClass"), A([z], t.prototype, "flag", 2), t;
}
__name(Uc, "Uc");
u(Uc, "FlaggableMixin");
var Ft = "top";
var ie = "bottom";
var Zt = "right";
var Vt = "left";
var ja = "auto";
var rn = [Ft, ie, Zt, Vt];
var Gr = "start";
var zn = "end";
var Vc = "clippingParents";
var Ba = "viewport";
var hi = "popper";
var Yc = "reference";
var bl = rn.reduce(function(r, t) {
  return r.concat([t + "-" + Gr, t + "-" + zn]);
}, []);
var Ha = [].concat(rn, [ja]).reduce(function(r, t) {
  return r.concat([t, t + "-" + Gr, t + "-" + zn]);
}, []);
var Rh = "beforeRead";
var Nh = "read";
var Gh = "afterRead";
var Lh = "beforeMain";
var qh = "main";
var jh = "afterMain";
var Bh = "beforeWrite";
var Hh = "write";
var $h = "afterWrite";
var Xc = [Rh, Nh, Gh, Lh, qh, jh, Bh, Hh, $h];
function pe(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(pe, "pe");
u(pe, "getNodeName");
function Yt(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var t = r.ownerDocument;
    return t && t.defaultView || window;
  }
  return r;
}
__name(Yt, "Yt");
u(Yt, "getWindow");
function Tr(r) {
  var t = Yt(r).Element;
  return r instanceof t || r instanceof Element;
}
__name(Tr, "Tr");
u(Tr, "isElement");
function oe(r) {
  var t = Yt(r).HTMLElement;
  return r instanceof t || r instanceof HTMLElement;
}
__name(oe, "oe");
u(oe, "isHTMLElement");
function $a(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var t = Yt(r).ShadowRoot;
  return r instanceof t || r instanceof ShadowRoot;
}
__name($a, "$a");
u($a, "isShadowRoot");
function Fh(r) {
  var t = r.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, l = t.attributes[e] || {}, c = t.elements[e];
    !oe(c) || !pe(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var b = l[f];
      b === false ? c.removeAttribute(f) : c.setAttribute(f, b === true ? "" : b);
    }));
  });
}
__name(Fh, "Fh");
u(Fh, "applyStyles");
function Wh(r) {
  var t = r.state, e = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var l = t.elements[i], c = t.attributes[i] || {}, f = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), b = f.reduce(function(h, d) {
        return h[d] = "", h;
      }, {});
      !oe(l) || !pe(l) || (Object.assign(l.style, b), Object.keys(c).forEach(function(h) {
        l.removeAttribute(h);
      }));
    });
  };
}
__name(Wh, "Wh");
u(Wh, "effect");
var so = { name: "applyStyles", enabled: true, phase: "write", fn: Fh, effect: Wh, requires: ["computeStyles"] };
function de(r) {
  return r.split("-")[0];
}
__name(de, "de");
u(de, "getBasePlacement");
var vr = Math.max;
var Rn = Math.min;
var Lr = Math.round;
function Ze(r, t) {
  t === void 0 && (t = false);
  var e = r.getBoundingClientRect(), i = 1, l = 1;
  if (oe(r) && t) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Lr(e.width) / f || 1), c > 0 && (l = Lr(e.height) / c || 1);
  }
  return { width: e.width / i, height: e.height / l, top: e.top / l, right: e.right / i, bottom: e.bottom / l, left: e.left / i, x: e.left / i, y: e.top / l };
}
__name(Ze, "Ze");
u(Ze, "getBoundingClientRect");
function Nn(r) {
  var t = Ze(r), e = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: r.offsetLeft, y: r.offsetTop, width: e, height: i };
}
__name(Nn, "Nn");
u(Nn, "getLayoutRect");
function lo(r, t) {
  var e = t.getRootNode && t.getRootNode();
  if (r.contains(t))
    return true;
  if (e && $a(e)) {
    var i = t;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(lo, "lo");
u(lo, "contains");
function Ae(r) {
  return Yt(r).getComputedStyle(r);
}
__name(Ae, "Ae");
u(Ae, "getComputedStyle");
function yl(r) {
  return ["table", "td", "th"].indexOf(pe(r)) >= 0;
}
__name(yl, "yl");
u(yl, "isTableElement");
function ye(r) {
  return ((Tr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(ye, "ye");
u(ye, "getDocumentElement");
function qr(r) {
  return pe(r) === "html" ? r : r.assignedSlot || r.parentNode || ($a(r) ? r.host : null) || ye(r);
}
__name(qr, "qr");
u(qr, "getParentNode");
function Zc(r) {
  return !oe(r) || Ae(r).position === "fixed" ? null : r.offsetParent;
}
__name(Zc, "Zc");
u(Zc, "getTrueOffsetParent");
function Uh(r) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && oe(r)) {
    var i = Ae(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = qr(r); oe(l) && ["html", "body"].indexOf(pe(l)) < 0; ) {
    var c = Ae(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || t && c.willChange === "filter" || t && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(Uh, "Uh");
u(Uh, "getContainingBlock");
function gr(r) {
  for (var t = Yt(r), e = Zc(r); e && yl(e) && Ae(e).position === "static"; )
    e = Zc(e);
  return e && (pe(e) === "html" || pe(e) === "body" && Ae(e).position === "static") ? t : e || Uh(r) || t;
}
__name(gr, "gr");
u(gr, "getOffsetParent");
function Gn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Gn, "Gn");
u(Gn, "getMainAxisFromPlacement");
function Ln(r, t, e) {
  return vr(r, Rn(t, e));
}
__name(Ln, "Ln");
u(Ln, "within");
function Qc(r, t, e) {
  var i = Ln(r, t, e);
  return i > e ? e : i;
}
__name(Qc, "Qc");
u(Qc, "withinMaxClamp");
function uo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(uo, "uo");
u(uo, "getFreshSideObject");
function co(r) {
  return Object.assign({}, uo(), r);
}
__name(co, "co");
u(co, "mergePaddingObject");
function po(r, t) {
  return t.reduce(function(e, i) {
    return e[i] = r, e;
  }, {});
}
__name(po, "po");
u(po, "expandToHashMap");
var Vh = u(function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, co(typeof t != "number" ? t : po(t, rn));
}, "toPaddingObject");
function Yh(r) {
  var t, e = r.state, i = r.name, l = r.options, c = e.elements.arrow, f = e.modifiersData.popperOffsets, b = de(e.placement), h = Gn(b), d = [Vt, Zt].indexOf(b) >= 0, m = d ? "height" : "width";
  if (!(!c || !f)) {
    var w = Vh(l.padding, e), y = Nn(c), S = h === "y" ? Ft : Vt, O = h === "y" ? ie : Zt, P = e.rects.reference[m] + e.rects.reference[h] - f[h] - e.rects.popper[m], k = f[h] - e.rects.reference[h], j = gr(c), L = j ? h === "y" ? j.clientHeight || 0 : j.clientWidth || 0 : 0, V = P / 2 - k / 2, M = w[S], B = L - y[m] - w[O], _ = L / 2 - y[m] / 2 + V, N = Ln(M, _, B), W = h;
    e.modifiersData[i] = (t = {}, t[W] = N, t.centerOffset = N - _, t);
  }
}
__name(Yh, "Yh");
u(Yh, "arrow");
function Xh(r) {
  var t = r.state, e = r.options, i = e.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || !lo(t.elements.popper, l) || (t.elements.arrow = l));
}
__name(Xh, "Xh");
u(Xh, "effect");
var Kc = { name: "arrow", enabled: true, phase: "main", fn: Yh, effect: Xh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qe(r) {
  return r.split("-")[1];
}
__name(Qe, "Qe");
u(Qe, "getVariation");
var Zh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Qh(r) {
  var t = r.x, e = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Lr(t * l) / l || 0, y: Lr(e * l) / l || 0 };
}
__name(Qh, "Qh");
u(Qh, "roundOffsetsByDPR");
function Jc(r) {
  var t, e = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, b = r.position, h = r.gpuAcceleration, d = r.adaptive, m = r.roundOffsets, w = r.isFixed, y = f.x, S = y === void 0 ? 0 : y, O = f.y, P = O === void 0 ? 0 : O, k = typeof m == "function" ? m({ x: S, y: P }) : { x: S, y: P };
  S = k.x, P = k.y;
  var j = f.hasOwnProperty("x"), L = f.hasOwnProperty("y"), V = Vt, M = Ft, B = window;
  if (d) {
    var _ = gr(e), N = "clientHeight", W = "clientWidth";
    if (_ === Yt(e) && (_ = ye(e), Ae(_).position !== "static" && b === "absolute" && (N = "scrollHeight", W = "scrollWidth")), _ = _, l === Ft || (l === Vt || l === Zt) && c === zn) {
      M = ie;
      var Q = w && B.visualViewport ? B.visualViewport.height : _[N];
      P -= Q - i.height, P *= h ? 1 : -1;
    }
    if (l === Vt || (l === Ft || l === ie) && c === zn) {
      V = Zt;
      var it = w && B.visualViewport ? B.visualViewport.width : _[W];
      S -= it - i.width, S *= h ? 1 : -1;
    }
  }
  var nt = Object.assign({ position: b }, d && Zh), ct = m === true ? Qh({ x: S, y: P }) : { x: S, y: P };
  if (S = ct.x, P = ct.y, h) {
    var Y;
    return Object.assign({}, nt, (Y = {}, Y[M] = L ? "0" : "", Y[V] = j ? "0" : "", Y.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + P + "px)" : "translate3d(" + S + "px, " + P + "px, 0)", Y));
  }
  return Object.assign({}, nt, (t = {}, t[M] = L ? P + "px" : "", t[V] = j ? S + "px" : "", t.transform = "", t));
}
__name(Jc, "Jc");
u(Jc, "mapToStyles");
function Kh(r) {
  var t = r.state, e = r.options, i = e.gpuAcceleration, l = i === void 0 ? true : i, c = e.adaptive, f = c === void 0 ? true : c, b = e.roundOffsets, h = b === void 0 ? true : b;
  if (false)
    var d;
  var m = { placement: de(t.placement), variation: Qe(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: l, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Jc(Object.assign({}, m, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: f, roundOffsets: h })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jc(Object.assign({}, m, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: h })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
__name(Kh, "Kh");
u(Kh, "computeStyles");
var tp = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Kh, data: {} };
var Fa = { passive: true };
function Jh(r) {
  var t = r.state, e = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, b = f === void 0 ? true : f, h = Yt(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return c && d.forEach(function(m) {
    m.addEventListener("scroll", e.update, Fa);
  }), b && h.addEventListener("resize", e.update, Fa), function() {
    c && d.forEach(function(m) {
      m.removeEventListener("scroll", e.update, Fa);
    }), b && h.removeEventListener("resize", e.update, Fa);
  };
}
__name(Jh, "Jh");
u(Jh, "effect");
var ep = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Jh, data: {} };
var tm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(r) {
  return r.replace(/left|right|bottom|top/g, function(t) {
    return tm[t];
  });
}
__name(mi, "mi");
u(mi, "getOppositePlacement");
var em = { start: "end", end: "start" };
function Wa(r) {
  return r.replace(/start|end/g, function(t) {
    return em[t];
  });
}
__name(Wa, "Wa");
u(Wa, "getOppositeVariationPlacement");
function qn(r) {
  var t = Yt(r), e = t.pageXOffset, i = t.pageYOffset;
  return { scrollLeft: e, scrollTop: i };
}
__name(qn, "qn");
u(qn, "getWindowScroll");
function jn(r) {
  return Ze(ye(r)).left + qn(r).scrollLeft;
}
__name(jn, "jn");
u(jn, "getWindowScrollBarX");
function wl(r) {
  var t = Yt(r), e = ye(r), i = t.visualViewport, l = e.clientWidth, c = e.clientHeight, f = 0, b = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, b = i.offsetTop)), { width: l, height: c, x: f + jn(r), y: b };
}
__name(wl, "wl");
u(wl, "getViewportRect");
function xl(r) {
  var t, e = ye(r), i = qn(r), l = (t = r.ownerDocument) == null ? void 0 : t.body, c = vr(e.scrollWidth, e.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = vr(e.scrollHeight, e.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), b = -i.scrollLeft + jn(r), h = -i.scrollTop;
  return Ae(l || e).direction === "rtl" && (b += vr(e.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: b, y: h };
}
__name(xl, "xl");
u(xl, "getDocumentRect");
function Bn(r) {
  var t = Ae(r), e = t.overflow, i = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + l + i);
}
__name(Bn, "Bn");
u(Bn, "isScrollParent");
function Ua(r) {
  return ["html", "body", "#document"].indexOf(pe(r)) >= 0 ? r.ownerDocument.body : oe(r) && Bn(r) ? r : Ua(qr(r));
}
__name(Ua, "Ua");
u(Ua, "getScrollParent");
function nn(r, t) {
  var e;
  t === void 0 && (t = []);
  var i = Ua(r), l = i === ((e = r.ownerDocument) == null ? void 0 : e.body), c = Yt(i), f = l ? [c].concat(c.visualViewport || [], Bn(i) ? i : []) : i, b = t.concat(f);
  return l ? b : b.concat(nn(qr(f)));
}
__name(nn, "nn");
u(nn, "listScrollParents");
function vi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(vi, "vi");
u(vi, "rectToClientRect");
function rm(r) {
  var t = Ze(r);
  return t.top = t.top + r.clientTop, t.left = t.left + r.clientLeft, t.bottom = t.top + r.clientHeight, t.right = t.left + r.clientWidth, t.width = r.clientWidth, t.height = r.clientHeight, t.x = t.left, t.y = t.top, t;
}
__name(rm, "rm");
u(rm, "getInnerBoundingClientRect");
function rp(r, t) {
  return t === Ba ? vi(wl(r)) : Tr(t) ? rm(t) : vi(xl(ye(r)));
}
__name(rp, "rp");
u(rp, "getClientRectFromMixedType");
function nm(r) {
  var t = nn(qr(r)), e = ["absolute", "fixed"].indexOf(Ae(r).position) >= 0, i = e && oe(r) ? gr(r) : r;
  return Tr(i) ? t.filter(function(l) {
    return Tr(l) && lo(l, i) && pe(l) !== "body";
  }) : [];
}
__name(nm, "nm");
u(nm, "getClippingParents");
function El(r, t, e) {
  var i = t === "clippingParents" ? nm(r) : [].concat(t), l = [].concat(i, [e]), c = l[0], f = l.reduce(function(b, h) {
    var d = rp(r, h);
    return b.top = vr(d.top, b.top), b.right = Rn(d.right, b.right), b.bottom = Rn(d.bottom, b.bottom), b.left = vr(d.left, b.left), b;
  }, rp(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(El, "El");
u(El, "getClippingRect");
function fo(r) {
  var t = r.reference, e = r.element, i = r.placement, l = i ? de(i) : null, c = i ? Qe(i) : null, f = t.x + t.width / 2 - e.width / 2, b = t.y + t.height / 2 - e.height / 2, h;
  switch (l) {
    case Ft:
      h = { x: f, y: t.y - e.height };
      break;
    case ie:
      h = { x: f, y: t.y + t.height };
      break;
    case Zt:
      h = { x: t.x + t.width, y: b };
      break;
    case Vt:
      h = { x: t.x - e.width, y: b };
      break;
    default:
      h = { x: t.x, y: t.y };
  }
  var d = l ? Gn(l) : null;
  if (d != null) {
    var m = d === "y" ? "height" : "width";
    switch (c) {
      case Gr:
        h[d] = h[d] - (t[m] / 2 - e[m] / 2);
        break;
      case zn:
        h[d] = h[d] + (t[m] / 2 - e[m] / 2);
        break;
      default:
    }
  }
  return h;
}
__name(fo, "fo");
u(fo, "computeOffsets");
function br(r, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, l = i === void 0 ? r.placement : i, c = e.boundary, f = c === void 0 ? Vc : c, b = e.rootBoundary, h = b === void 0 ? Ba : b, d = e.elementContext, m = d === void 0 ? hi : d, w = e.altBoundary, y = w === void 0 ? false : w, S = e.padding, O = S === void 0 ? 0 : S, P = co(typeof O != "number" ? O : po(O, rn)), k = m === hi ? Yc : hi, j = r.rects.popper, L = r.elements[y ? k : m], V = El(Tr(L) ? L : L.contextElement || ye(r.elements.popper), f, h), M = Ze(r.elements.reference), B = fo({ reference: M, element: j, strategy: "absolute", placement: l }), _ = vi(Object.assign({}, j, B)), N = m === hi ? _ : M, W = { top: V.top - N.top + P.top, bottom: N.bottom - V.bottom + P.bottom, left: V.left - N.left + P.left, right: N.right - V.right + P.right }, Q = r.modifiersData.offset;
  if (m === hi && Q) {
    var it = Q[l];
    Object.keys(W).forEach(function(nt) {
      var ct = [Zt, ie].indexOf(nt) >= 0 ? 1 : -1, Y = [Ft, ie].indexOf(nt) >= 0 ? "y" : "x";
      W[nt] += it[Y] * ct;
    });
  }
  return W;
}
__name(br, "br");
u(br, "detectOverflow");
function Sl(r, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, l = e.boundary, c = e.rootBoundary, f = e.padding, b = e.flipVariations, h = e.allowedAutoPlacements, d = h === void 0 ? Ha : h, m = Qe(i), w = m ? b ? bl : bl.filter(function(O) {
    return Qe(O) === m;
  }) : rn, y = w.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  y.length === 0 && (y = w);
  var S = y.reduce(function(O, P) {
    return O[P] = br(r, { placement: P, boundary: l, rootBoundary: c, padding: f })[de(P)], O;
  }, {});
  return Object.keys(S).sort(function(O, P) {
    return S[O] - S[P];
  });
}
__name(Sl, "Sl");
u(Sl, "computeAutoPlacement");
function im(r) {
  if (de(r) === ja)
    return [];
  var t = mi(r);
  return [Wa(r), t, Wa(t)];
}
__name(im, "im");
u(im, "getExpandedFallbackPlacements");
function om(r) {
  var t = r.state, e = r.options, i = r.name;
  if (!t.modifiersData[i]._skip) {
    for (var l = e.mainAxis, c = l === void 0 ? true : l, f = e.altAxis, b = f === void 0 ? true : f, h = e.fallbackPlacements, d = e.padding, m = e.boundary, w = e.rootBoundary, y = e.altBoundary, S = e.flipVariations, O = S === void 0 ? true : S, P = e.allowedAutoPlacements, k = t.options.placement, j = de(k), L = j === k, V = h || (L || !O ? [mi(k)] : im(k)), M = [k].concat(V).reduce(function(Oe, ke) {
      return Oe.concat(de(ke) === ja ? Sl(t, { placement: ke, boundary: m, rootBoundary: w, padding: d, flipVariations: O, allowedAutoPlacements: P }) : ke);
    }, []), B = t.rects.reference, _ = t.rects.popper, N = /* @__PURE__ */ new Map(), W = true, Q = M[0], it = 0; it < M.length; it++) {
      var nt = M[it], ct = de(nt), Y = Qe(nt) === Gr, ut = [Ft, ie].indexOf(ct) >= 0, kt = ut ? "width" : "height", Wt = br(t, { placement: nt, boundary: m, rootBoundary: w, altBoundary: y, padding: d }), Gt = ut ? Y ? Zt : Vt : Y ? ie : Ft;
      B[kt] > _[kt] && (Gt = mi(Gt));
      var ft = mi(Gt), Xt = [];
      if (c && Xt.push(Wt[ct] <= 0), b && Xt.push(Wt[Gt] <= 0, Wt[ft] <= 0), Xt.every(function(Oe) {
        return Oe;
      })) {
        Q = nt, W = false;
        break;
      }
      N.set(nt, Xt);
    }
    if (W)
      for (var Jt = O ? 3 : 1, $e = u(function(ke) {
        var Fe = M.find(function(fr) {
          var We = N.get(fr);
          if (We)
            return We.slice(0, ke).every(function(Ne) {
              return Ne;
            });
        });
        if (Fe)
          return Q = Fe, "break";
      }, "_loop"), J = Jt; J > 0; J--) {
        var dr = $e(J);
        if (dr === "break")
          break;
      }
    t.placement !== Q && (t.modifiersData[i]._skip = true, t.placement = Q, t.reset = true);
  }
}
__name(om, "om");
u(om, "flip");
var np = { name: "flip", enabled: true, phase: "main", fn: om, requiresIfExists: ["offset"], data: { _skip: false } };
function ip(r, t, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: r.top - t.height - e.y, right: r.right - t.width + e.x, bottom: r.bottom - t.height + e.y, left: r.left - t.width - e.x };
}
__name(ip, "ip");
u(ip, "getSideOffsets");
function op(r) {
  return [Ft, Zt, ie, Vt].some(function(t) {
    return r[t] >= 0;
  });
}
__name(op, "op");
u(op, "isAnySideFullyClipped");
function am(r) {
  var t = r.state, e = r.name, i = t.rects.reference, l = t.rects.popper, c = t.modifiersData.preventOverflow, f = br(t, { elementContext: "reference" }), b = br(t, { altBoundary: true }), h = ip(f, i), d = ip(b, l, c), m = op(h), w = op(d);
  t.modifiersData[e] = { referenceClippingOffsets: h, popperEscapeOffsets: d, isReferenceHidden: m, hasPopperEscaped: w }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": m, "data-popper-escaped": w });
}
__name(am, "am");
u(am, "hide");
var ap = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: am };
function sm(r, t, e) {
  var i = de(r), l = [Vt, Ft].indexOf(i) >= 0 ? -1 : 1, c = typeof e == "function" ? e(Object.assign({}, t, { placement: r })) : e, f = c[0], b = c[1];
  return f = f || 0, b = (b || 0) * l, [Vt, Zt].indexOf(i) >= 0 ? { x: b, y: f } : { x: f, y: b };
}
__name(sm, "sm");
u(sm, "distanceAndSkiddingToXY");
function lm(r) {
  var t = r.state, e = r.options, i = r.name, l = e.offset, c = l === void 0 ? [0, 0] : l, f = Ha.reduce(function(m, w) {
    return m[w] = sm(w, t.rects, c), m;
  }, {}), b = f[t.placement], h = b.x, d = b.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += h, t.modifiersData.popperOffsets.y += d), t.modifiersData[i] = f;
}
__name(lm, "lm");
u(lm, "offset");
var sp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: lm };
function um(r) {
  var t = r.state, e = r.name;
  t.modifiersData[e] = fo({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
__name(um, "um");
u(um, "popperOffsets");
var lp = { name: "popperOffsets", enabled: true, phase: "read", fn: um, data: {} };
function Cl(r) {
  return r === "x" ? "y" : "x";
}
__name(Cl, "Cl");
u(Cl, "getAltAxis");
function cm(r) {
  var t = r.state, e = r.options, i = r.name, l = e.mainAxis, c = l === void 0 ? true : l, f = e.altAxis, b = f === void 0 ? false : f, h = e.boundary, d = e.rootBoundary, m = e.altBoundary, w = e.padding, y = e.tether, S = y === void 0 ? true : y, O = e.tetherOffset, P = O === void 0 ? 0 : O, k = br(t, { boundary: h, rootBoundary: d, padding: w, altBoundary: m }), j = de(t.placement), L = Qe(t.placement), V = !L, M = Gn(j), B = Cl(M), _ = t.modifiersData.popperOffsets, N = t.rects.reference, W = t.rects.popper, Q = typeof P == "function" ? P(Object.assign({}, t.rects, { placement: t.placement })) : P, it = typeof Q == "number" ? { mainAxis: Q, altAxis: Q } : Object.assign({ mainAxis: 0, altAxis: 0 }, Q), nt = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ct = { x: 0, y: 0 };
  if (!!_) {
    if (c) {
      var Y, ut = M === "y" ? Ft : Vt, kt = M === "y" ? ie : Zt, Wt = M === "y" ? "height" : "width", Gt = _[M], ft = Gt + k[ut], Xt = Gt - k[kt], Jt = S ? -W[Wt] / 2 : 0, $e = L === Gr ? N[Wt] : W[Wt], J = L === Gr ? -W[Wt] : -N[Wt], dr = t.elements.arrow, Oe = S && dr ? Nn(dr) : { width: 0, height: 0 }, ke = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uo(), Fe = ke[ut], fr = ke[kt], We = Ln(0, N[Wt], Oe[Wt]), Ne = V ? N[Wt] / 2 - Jt - We - Fe - it.mainAxis : $e - We - Fe - it.mainAxis, wr = V ? -N[Wt] / 2 + Jt + We + fr + it.mainAxis : J + We + fr + it.mainAxis, Ir = t.elements.arrow && gr(t.elements.arrow), un = Ir ? M === "y" ? Ir.clientTop || 0 : Ir.clientLeft || 0 : 0, yt = (Y = nt == null ? void 0 : nt[M]) != null ? Y : 0, cn = Gt + Ne - yt - un, pn = Gt + wr - yt, Me = Ln(S ? Rn(ft, cn) : ft, Gt, S ? vr(Xt, pn) : Xt);
      _[M] = Me, ct[M] = Me - Gt;
    }
    if (b) {
      var Ar, Un = M === "x" ? Ft : Vt, Ur = M === "x" ? ie : Zt, hr = _[B], xe = B === "y" ? "height" : "width", xr = hr + k[Un], De = hr - k[Ur], dn = [Ft, Vt].indexOf(j) !== -1, _r = (Ar = nt == null ? void 0 : nt[B]) != null ? Ar : 0, fn = dn ? xr : hr - N[xe] - W[xe] - _r + it.altAxis, Vr = dn ? hr + N[xe] + W[xe] - _r - it.altAxis : De, hn = S && dn ? Qc(fn, hr, Vr) : Ln(S ? fn : xr, hr, S ? Vr : De);
      _[B] = hn, ct[B] = hn - hr;
    }
    t.modifiersData[i] = ct;
  }
}
__name(cm, "cm");
u(cm, "preventOverflow");
var up = { name: "preventOverflow", enabled: true, phase: "main", fn: cm, requiresIfExists: ["offset"] };
function Tl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(Tl, "Tl");
u(Tl, "getHTMLElementScroll");
function Ol(r) {
  return r === Yt(r) || !oe(r) ? qn(r) : Tl(r);
}
__name(Ol, "Ol");
u(Ol, "getNodeScroll");
function pm(r) {
  var t = r.getBoundingClientRect(), e = Lr(t.width) / r.offsetWidth || 1, i = Lr(t.height) / r.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
__name(pm, "pm");
u(pm, "isElementScaled");
function Ml(r, t, e) {
  e === void 0 && (e = false);
  var i = oe(t), l = oe(t) && pm(t), c = ye(t), f = Ze(r, l), b = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 };
  return (i || !i && !e) && ((pe(t) !== "body" || Bn(c)) && (b = Ol(t)), oe(t) ? (h = Ze(t, true), h.x += t.clientLeft, h.y += t.clientTop) : c && (h.x = jn(c))), { x: f.left + b.scrollLeft - h.x, y: f.top + b.scrollTop - h.y, width: f.width, height: f.height };
}
__name(Ml, "Ml");
u(Ml, "getCompositeRect");
function dm(r) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    t.set(c.name, c);
  });
  function l(c) {
    e.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(b) {
      if (!e.has(b)) {
        var h = t.get(b);
        h && l(h);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    e.has(c.name) || l(c);
  }), i;
}
__name(dm, "dm");
u(dm, "order");
function Pl(r) {
  var t = dm(r);
  return Xc.reduce(function(e, i) {
    return e.concat(t.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(Pl, "Pl");
u(Pl, "orderModifiers");
function Il(r) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(r());
      });
    })), t;
  };
}
__name(Il, "Il");
u(Il, "debounce");
function Al(r) {
  var t = r.reduce(function(e, i) {
    var l = e[i.name];
    return e[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
__name(Al, "Al");
u(Al, "mergeByName");
var cp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function pp() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(pp, "pp");
u(pp, "areValidElements");
function dp(r) {
  r === void 0 && (r = {});
  var t = r, e = t.defaultModifiers, i = e === void 0 ? [] : e, l = t.defaultOptions, c = l === void 0 ? cp : l;
  return u(function(b, h, d) {
    d === void 0 && (d = c);
    var m = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, cp, c), modifiersData: {}, elements: { reference: b, popper: h }, attributes: {}, styles: {} }, w = [], y = false, S = { state: m, setOptions: u(function(j) {
      var L = typeof j == "function" ? j(m.options) : j;
      P(), m.options = Object.assign({}, c, m.options, L), m.scrollParents = { reference: Tr(b) ? nn(b) : b.contextElement ? nn(b.contextElement) : [], popper: nn(h) };
      var V = Pl(Al([].concat(i, m.options.modifiers)));
      if (m.orderedModifiers = V.filter(function(nt) {
        return nt.enabled;
      }), false) {
        var M;
        if (getBasePlacement(m.options.placement) === auto)
          var B;
        var _, N, W, Q, it;
      }
      return O(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!y) {
        var j = m.elements, L = j.reference, V = j.popper;
        if (!!pp(L, V)) {
          m.rects = { reference: Ml(L, gr(V), m.options.strategy === "fixed"), popper: Nn(V) }, m.reset = false, m.placement = m.options.placement, m.orderedModifiers.forEach(function(nt) {
            return m.modifiersData[nt.name] = Object.assign({}, nt.data);
          });
          for (var M = 0, B = 0; B < m.orderedModifiers.length; B++) {
            if (m.reset === true) {
              m.reset = false, B = -1;
              continue;
            }
            var _ = m.orderedModifiers[B], N = _.fn, W = _.options, Q = W === void 0 ? {} : W, it = _.name;
            typeof N == "function" && (m = N({ state: m, options: Q, name: it, instance: S }) || m);
          }
        }
      }
    }, "forceUpdate"), update: Il(function() {
      return new Promise(function(k) {
        S.forceUpdate(), k(m);
      });
    }), destroy: u(function() {
      P(), y = true;
    }, "destroy") };
    if (!pp(b, h))
      return S;
    S.setOptions(d).then(function(k) {
      !y && d.onFirstUpdate && d.onFirstUpdate(k);
    });
    function O() {
      m.orderedModifiers.forEach(function(k) {
        var j = k.name, L = k.options, V = L === void 0 ? {} : L, M = k.effect;
        if (typeof M == "function") {
          var B = M({ state: m, name: j, instance: S, options: V }), _ = u(function() {
          }, "noopFn");
          w.push(B || _);
        }
      });
    }
    __name(O, "O");
    u(O, "runModifierEffects");
    function P() {
      w.forEach(function(k) {
        return k();
      }), w = [];
    }
    __name(P, "P");
    return u(P, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(dp, "dp");
u(dp, "popperGenerator");
var fm = [ep, lp, tp, so, sp, np, up, Kc, ap];
var _l = dp({ defaultModifiers: fm });
var jr = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var hm = "tippy-box";
var Ep = "tippy-content";
var mm = "tippy-backdrop";
var Sp = "tippy-arrow";
var Cp = "tippy-svg-arrow";
var Hn = { passive: true, capture: true };
var Tp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function kl(r, t, e) {
  if (Array.isArray(r)) {
    var i = r[t];
    return i == null ? Array.isArray(e) ? e[t] : e : i;
  }
  return r;
}
__name(kl, "kl");
u(kl, "getValueAtIndexOrReturn");
function Ll(r, t) {
  var e = {}.toString.call(r);
  return e.indexOf("[object") === 0 && e.indexOf(t + "]") > -1;
}
__name(Ll, "Ll");
u(Ll, "isType");
function Op(r, t) {
  return typeof r == "function" ? r.apply(void 0, t) : r;
}
__name(Op, "Op");
u(Op, "invokeWithArgsOrReturn");
function fp(r, t) {
  if (t === 0)
    return r;
  var e;
  return function(i) {
    clearTimeout(e), e = setTimeout(function() {
      r(i);
    }, t);
  };
}
__name(fp, "fp");
u(fp, "debounce");
function vm(r, t) {
  var e = Object.assign({}, r);
  return t.forEach(function(i) {
    delete e[i];
  }), e;
}
__name(vm, "vm");
u(vm, "removeProperties");
function gm(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(gm, "gm");
u(gm, "splitBySpaces");
function $n(r) {
  return [].concat(r);
}
__name($n, "$n");
u($n, "normalizeToArray");
function hp(r, t) {
  r.indexOf(t) === -1 && r.push(t);
}
__name(hp, "hp");
u(hp, "pushIfUnique");
function bm(r) {
  return r.filter(function(t, e) {
    return r.indexOf(t) === e;
  });
}
__name(bm, "bm");
u(bm, "unique");
function ym(r) {
  return r.split("-")[0];
}
__name(ym, "ym");
u(ym, "getBasePlacement");
function Ya(r) {
  return [].slice.call(r);
}
__name(Ya, "Ya");
u(Ya, "arrayFrom");
function mp(r) {
  return Object.keys(r).reduce(function(t, e) {
    return r[e] !== void 0 && (t[e] = r[e]), t;
  }, {});
}
__name(mp, "mp");
u(mp, "removeUndefinedProps");
function gi() {
  return document.createElement("div");
}
__name(gi, "gi");
u(gi, "div");
function Xa(r) {
  return ["Element", "Fragment"].some(function(t) {
    return Ll(r, t);
  });
}
__name(Xa, "Xa");
u(Xa, "isElement");
function wm(r) {
  return Ll(r, "NodeList");
}
__name(wm, "wm");
u(wm, "isNodeList");
function xm(r) {
  return Ll(r, "MouseEvent");
}
__name(xm, "xm");
u(xm, "isMouseEvent");
function Em(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Em, "Em");
u(Em, "isReferenceElement");
function Sm(r) {
  return Xa(r) ? [r] : wm(r) ? Ya(r) : Array.isArray(r) ? r : Ya(document.querySelectorAll(r));
}
__name(Sm, "Sm");
u(Sm, "getArrayOfElements");
function Dl(r, t) {
  r.forEach(function(e) {
    e && (e.style.transitionDuration = t + "ms");
  });
}
__name(Dl, "Dl");
u(Dl, "setTransitionDuration");
function vp(r, t) {
  r.forEach(function(e) {
    e && e.setAttribute("data-state", t);
  });
}
__name(vp, "vp");
u(vp, "setVisibilityState");
function Cm(r) {
  var t, e = $n(r), i = e[0];
  return i != null && (t = i.ownerDocument) != null && t.body ? i.ownerDocument : document;
}
__name(Cm, "Cm");
u(Cm, "getOwnerDocument");
function Tm(r, t) {
  var e = t.clientX, i = t.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, b = l.props, h = b.interactiveBorder, d = ym(f.placement), m = f.modifiersData.offset;
    if (!m)
      return true;
    var w = d === "bottom" ? m.top.y : 0, y = d === "top" ? m.bottom.y : 0, S = d === "right" ? m.left.x : 0, O = d === "left" ? m.right.x : 0, P = c.top - i + w > h, k = i - c.bottom - y > h, j = c.left - e + S > h, L = e - c.right - O > h;
    return P || k || j || L;
  });
}
__name(Tm, "Tm");
u(Tm, "isCursorOutsideInteractiveBorder");
function zl(r, t, e) {
  var i = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, e);
  });
}
__name(zl, "zl");
u(zl, "updateTransitionEndListener");
function gp(r, t) {
  for (var e = t; e; ) {
    var i;
    if (r.contains(e))
      return true;
    e = e.getRootNode == null || (i = e.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(gp, "gp");
u(gp, "actualContains");
var Or = { isTouch: false };
var bp = 0;
function Om() {
  Or.isTouch || (Or.isTouch = true, window.performance && document.addEventListener("mousemove", Mp));
}
__name(Om, "Om");
u(Om, "onDocumentTouchStart");
function Mp() {
  var r = performance.now();
  r - bp < 20 && (Or.isTouch = false, document.removeEventListener("mousemove", Mp)), bp = r;
}
__name(Mp, "Mp");
u(Mp, "onDocumentMouseMove");
function Mm() {
  var r = document.activeElement;
  if (Em(r)) {
    var t = r._tippy;
    r.blur && !t.state.isVisible && r.blur();
  }
}
__name(Mm, "Mm");
u(Mm, "onWindowBlur");
function Pm() {
  document.addEventListener("touchstart", Om, Hn), window.addEventListener("blur", Mm);
}
__name(Pm, "Pm");
u(Pm, "bindGlobalEventListeners");
var Im = typeof window != "undefined" && typeof document != "undefined";
var Am = Im ? !!window.msCrypto : false;
var _m = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var km = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var yr = Object.assign({ appendTo: Tp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, _m, km);
var Dm = Object.keys(yr);
var zm = u(function(t) {
  var e = Object.keys(t);
  e.forEach(function(i) {
    yr[i] = t[i];
  });
}, "setDefaultProps");
function Pp(r) {
  var t = r.plugins || [], e = t.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var b;
      i[c] = r[c] !== void 0 ? r[c] : (b = yr[c]) != null ? b : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, e);
}
__name(Pp, "Pp");
u(Pp, "getExtendedPassedProps");
function Rm(r, t) {
  var e = t ? Object.keys(Pp(Object.assign({}, yr, { plugins: t }))) : Dm, i = e.reduce(function(l, c) {
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
__name(Rm, "Rm");
u(Rm, "getDataAttributeProps");
function yp(r, t) {
  var e = Object.assign({}, t, { content: Op(t.content, [r]) }, t.ignoreAttributes ? {} : Rm(r, t.plugins));
  return e.aria = Object.assign({}, yr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? t.interactive : e.aria.expanded, content: e.aria.content === "auto" ? t.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(yp, "yp");
u(yp, "evaluateProps");
var Nm = u(function() {
  return "innerHTML";
}, "innerHTML");
function Nl(r, t) {
  r[Nm()] = t;
}
__name(Nl, "Nl");
u(Nl, "dangerouslySetInnerHTML");
function wp(r) {
  var t = gi();
  return r === true ? t.className = Sp : (t.className = Cp, Xa(r) ? t.appendChild(r) : Nl(t, r)), t;
}
__name(wp, "wp");
u(wp, "createArrowElement");
function xp(r, t) {
  Xa(t.content) ? (Nl(r, ""), r.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Nl(r, t.content) : r.textContent = t.content);
}
__name(xp, "xp");
u(xp, "setContent");
function Gl(r) {
  var t = r.firstElementChild, e = Ya(t.children);
  return { box: t, content: e.find(function(i) {
    return i.classList.contains(Ep);
  }), arrow: e.find(function(i) {
    return i.classList.contains(Sp) || i.classList.contains(Cp);
  }), backdrop: e.find(function(i) {
    return i.classList.contains(mm);
  }) };
}
__name(Gl, "Gl");
u(Gl, "getChildren");
function Ip(r) {
  var t = gi(), e = gi();
  e.className = hm, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var i = gi();
  i.className = Ep, i.setAttribute("data-state", "hidden"), xp(i, r.props), t.appendChild(e), e.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var b = Gl(t), h = b.box, d = b.content, m = b.arrow;
    f.theme ? h.setAttribute("data-theme", f.theme) : h.removeAttribute("data-theme"), typeof f.animation == "string" ? h.setAttribute("data-animation", f.animation) : h.removeAttribute("data-animation"), f.inertia ? h.setAttribute("data-inertia", "") : h.removeAttribute("data-inertia"), h.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? h.setAttribute("role", f.role) : h.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && xp(d, r.props), f.arrow ? m ? c.arrow !== f.arrow && (h.removeChild(m), h.appendChild(wp(f.arrow))) : h.appendChild(wp(f.arrow)) : m && h.removeChild(m);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: t, onUpdate: l };
}
__name(Ip, "Ip");
u(Ip, "render");
Ip.$$tippy = true;
var Gm = 1;
var Va = [];
var Rl = [];
function Lm(r, t) {
  var e = yp(r, Object.assign({}, yr, Pp(mp(t)))), i, l, c, f = false, b = false, h = false, d = false, m, w, y, S = [], O = fp(cn, e.interactiveDebounce), P, k = Gm++, j = null, L = bm(e.plugins), V = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, M = { id: k, reference: r, popper: gi(), popperInstance: j, props: e, state: V, plugins: L, clearDelayTimeouts: fn, setProps: Vr, setContent: hn, show: Si, hide: Ci, hideWithInteractivity: Po, enable: dn, disable: _r, unmount: Io, destroy: os };
  if (!e.render)
    return M;
  var B = e.render(M), _ = B.popper, N = B.onUpdate;
  _.setAttribute("data-tippy-root", ""), _.id = "tippy-" + M.id, M.popper = _, r._tippy = M, _._tippy = M;
  var W = L.map(function(G) {
    return G.fn(M);
  }), Q = r.hasAttribute("aria-expanded");
  return Ir(), Jt(), Gt(), ft("onCreate", [M]), e.showOnCreate && xr(), _.addEventListener("mouseenter", function() {
    M.props.interactive && M.state.isVisible && M.clearDelayTimeouts();
  }), _.addEventListener("mouseleave", function() {
    M.props.interactive && M.props.trigger.indexOf("mouseenter") >= 0 && ut().addEventListener("mousemove", O);
  }), M;
  function it() {
    var G = M.props.touch;
    return Array.isArray(G) ? G : [G, 0];
  }
  __name(it, "it");
  u(it, "getNormalizedTouchSettings");
  function nt() {
    return it()[0] === "hold";
  }
  __name(nt, "nt");
  u(nt, "getIsCustomTouchBehavior");
  function ct() {
    var G;
    return !!((G = M.props.render) != null && G.$$tippy);
  }
  __name(ct, "ct");
  u(ct, "getIsDefaultRenderFn");
  function Y() {
    return P || r;
  }
  __name(Y, "Y");
  u(Y, "getCurrentTarget");
  function ut() {
    var G = Y().parentNode;
    return G ? Cm(G) : document;
  }
  __name(ut, "ut");
  u(ut, "getDocument");
  function kt() {
    return Gl(_);
  }
  __name(kt, "kt");
  u(kt, "getDefaultTemplateChildren");
  function Wt(G) {
    return M.state.isMounted && !M.state.isVisible || Or.isTouch || m && m.type === "focus" ? 0 : kl(M.props.delay, G ? 0 : 1, yr.delay);
  }
  __name(Wt, "Wt");
  u(Wt, "getDelay");
  function Gt(G) {
    G === void 0 && (G = false), _.style.pointerEvents = M.props.interactive && !G ? "" : "none", _.style.zIndex = "" + M.props.zIndex;
  }
  __name(Gt, "Gt");
  u(Gt, "handleStyles");
  function ft(G, et, at) {
    if (at === void 0 && (at = true), W.forEach(function(ht) {
      ht[G] && ht[G].apply(ht, et);
    }), at) {
      var Et;
      (Et = M.props)[G].apply(Et, et);
    }
  }
  __name(ft, "ft");
  u(ft, "invokeHook");
  function Xt() {
    var G = M.props.aria;
    if (!!G.content) {
      var et = "aria-" + G.content, at = _.id, Et = $n(M.props.triggerTarget || r);
      Et.forEach(function(ht) {
        var he = ht.getAttribute(et);
        if (M.state.isVisible)
          ht.setAttribute(et, he ? he + " " + at : at);
        else {
          var Pe = he && he.replace(at, "").trim();
          Pe ? ht.setAttribute(et, Pe) : ht.removeAttribute(et);
        }
      });
    }
  }
  __name(Xt, "Xt");
  u(Xt, "handleAriaContentAttribute");
  function Jt() {
    if (!(Q || !M.props.aria.expanded)) {
      var G = $n(M.props.triggerTarget || r);
      G.forEach(function(et) {
        M.props.interactive ? et.setAttribute("aria-expanded", M.state.isVisible && et === Y() ? "true" : "false") : et.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Jt, "Jt");
  u(Jt, "handleAriaExpandedAttribute");
  function $e() {
    ut().removeEventListener("mousemove", O), Va = Va.filter(function(G) {
      return G !== O;
    });
  }
  __name($e, "$e");
  u($e, "cleanupInteractiveMouseListeners");
  function J(G) {
    if (!(Or.isTouch && (h || G.type === "mousedown"))) {
      var et = G.composedPath && G.composedPath()[0] || G.target;
      if (!(M.props.interactive && gp(_, et))) {
        if ($n(M.props.triggerTarget || r).some(function(at) {
          return gp(at, et);
        })) {
          if (Or.isTouch || M.state.isVisible && M.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ft("onClickOutside", [M, G]);
        M.props.hideOnClick === true && (M.clearDelayTimeouts(), M.hide(), b = true, setTimeout(function() {
          b = false;
        }), M.state.isMounted || Fe());
      }
    }
  }
  __name(J, "J");
  u(J, "onDocumentPress");
  function dr() {
    h = true;
  }
  __name(dr, "dr");
  u(dr, "onTouchMove");
  function Oe() {
    h = false;
  }
  __name(Oe, "Oe");
  u(Oe, "onTouchStart");
  function ke() {
    var G = ut();
    G.addEventListener("mousedown", J, true), G.addEventListener("touchend", J, Hn), G.addEventListener("touchstart", Oe, Hn), G.addEventListener("touchmove", dr, Hn);
  }
  __name(ke, "ke");
  u(ke, "addDocumentPress");
  function Fe() {
    var G = ut();
    G.removeEventListener("mousedown", J, true), G.removeEventListener("touchend", J, Hn), G.removeEventListener("touchstart", Oe, Hn), G.removeEventListener("touchmove", dr, Hn);
  }
  __name(Fe, "Fe");
  u(Fe, "removeDocumentPress");
  function fr(G, et) {
    Ne(G, function() {
      !M.state.isVisible && _.parentNode && _.parentNode.contains(_) && et();
    });
  }
  __name(fr, "fr");
  u(fr, "onTransitionedOut");
  function We(G, et) {
    Ne(G, et);
  }
  __name(We, "We");
  u(We, "onTransitionedIn");
  function Ne(G, et) {
    var at = kt().box;
    function Et(ht) {
      ht.target === at && (zl(at, "remove", Et), et());
    }
    __name(Et, "Et");
    if (u(Et, "listener"), G === 0)
      return et();
    zl(at, "remove", w), zl(at, "add", Et), w = Et;
  }
  __name(Ne, "Ne");
  u(Ne, "onTransitionEnd");
  function wr(G, et, at) {
    at === void 0 && (at = false);
    var Et = $n(M.props.triggerTarget || r);
    Et.forEach(function(ht) {
      ht.addEventListener(G, et, at), S.push({ node: ht, eventType: G, handler: et, options: at });
    });
  }
  __name(wr, "wr");
  u(wr, "on");
  function Ir() {
    nt() && (wr("touchstart", yt, { passive: true }), wr("touchend", pn, { passive: true })), gm(M.props.trigger).forEach(function(G) {
      if (G !== "manual")
        switch (wr(G, yt), G) {
          case "mouseenter":
            wr("mouseleave", pn);
            break;
          case "focus":
            wr(Am ? "focusout" : "blur", Me);
            break;
          case "focusin":
            wr("focusout", Me);
            break;
        }
    });
  }
  __name(Ir, "Ir");
  u(Ir, "addListeners");
  function un() {
    S.forEach(function(G) {
      var et = G.node, at = G.eventType, Et = G.handler, ht = G.options;
      et.removeEventListener(at, Et, ht);
    }), S = [];
  }
  __name(un, "un");
  u(un, "removeListeners");
  function yt(G) {
    var et, at = false;
    if (!(!M.state.isEnabled || Ar(G) || b)) {
      var Et = ((et = m) == null ? void 0 : et.type) === "focus";
      m = G, P = G.currentTarget, Jt(), !M.state.isVisible && xm(G) && Va.forEach(function(ht) {
        return ht(G);
      }), G.type === "click" && (M.props.trigger.indexOf("mouseenter") < 0 || f) && M.props.hideOnClick !== false && M.state.isVisible ? at = true : xr(G), G.type === "click" && (f = !at), at && !Et && De(G);
    }
  }
  __name(yt, "yt");
  u(yt, "onTrigger");
  function cn(G) {
    var et = G.target, at = Y().contains(et) || _.contains(et);
    if (!(G.type === "mousemove" && at)) {
      var Et = xe().concat(_).map(function(ht) {
        var he, Pe = ht._tippy, Ee = (he = Pe.popperInstance) == null ? void 0 : he.state;
        return Ee ? { popperRect: ht.getBoundingClientRect(), popperState: Ee, props: e } : null;
      }).filter(Boolean);
      Tm(Et, G) && ($e(), De(G));
    }
  }
  __name(cn, "cn");
  u(cn, "onMouseMove");
  function pn(G) {
    var et = Ar(G) || M.props.trigger.indexOf("click") >= 0 && f;
    if (!et) {
      if (M.props.interactive) {
        M.hideWithInteractivity(G);
        return;
      }
      De(G);
    }
  }
  __name(pn, "pn");
  u(pn, "onMouseLeave");
  function Me(G) {
    M.props.trigger.indexOf("focusin") < 0 && G.target !== Y() || M.props.interactive && G.relatedTarget && _.contains(G.relatedTarget) || De(G);
  }
  __name(Me, "Me");
  u(Me, "onBlurOrFocusOut");
  function Ar(G) {
    return Or.isTouch ? nt() !== G.type.indexOf("touch") >= 0 : false;
  }
  __name(Ar, "Ar");
  u(Ar, "isEventListenerStopped");
  function Un() {
    Ur();
    var G = M.props, et = G.popperOptions, at = G.placement, Et = G.offset, ht = G.getReferenceClientRect, he = G.moveTransition, Pe = ct() ? Gl(_).arrow : null, Ee = ht ? { getBoundingClientRect: ht, contextElement: ht.contextElement || Y() } : r, Ao = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Se) {
      var Ce = Se.state;
      if (ct()) {
        var kr = kt(), Vn = kr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Yn) {
          Yn === "placement" ? Vn.setAttribute("data-placement", Ce.placement) : Ce.attributes.popper["data-popper-" + Yn] ? Vn.setAttribute("data-" + Yn, "") : Vn.removeAttribute("data-" + Yn);
        }), Ce.attributes.popper = {};
      }
    }, "fn") }, Ue = [{ name: "offset", options: { offset: Et } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !he } }, Ao];
    ct() && Pe && Ue.push({ name: "arrow", options: { element: Pe, padding: 3 } }), Ue.push.apply(Ue, (et == null ? void 0 : et.modifiers) || []), M.popperInstance = _l(Ee, _, Object.assign({}, et, { placement: at, onFirstUpdate: y, modifiers: Ue }));
  }
  __name(Un, "Un");
  u(Un, "createPopperInstance");
  function Ur() {
    M.popperInstance && (M.popperInstance.destroy(), M.popperInstance = null);
  }
  __name(Ur, "Ur");
  u(Ur, "destroyPopperInstance");
  function hr() {
    var G = M.props.appendTo, et, at = Y();
    M.props.interactive && G === Tp || G === "parent" ? et = at.parentNode : et = Op(G, [at]), et.contains(_) || et.appendChild(_), M.state.isMounted = true, Un();
  }
  __name(hr, "hr");
  u(hr, "mount");
  function xe() {
    return Ya(_.querySelectorAll("[data-tippy-root]"));
  }
  __name(xe, "xe");
  u(xe, "getNestedPopperTree");
  function xr(G) {
    M.clearDelayTimeouts(), G && ft("onTrigger", [M, G]), ke();
    var et = Wt(true), at = it(), Et = at[0], ht = at[1];
    Or.isTouch && Et === "hold" && ht && (et = ht), et ? i = setTimeout(function() {
      M.show();
    }, et) : M.show();
  }
  __name(xr, "xr");
  u(xr, "scheduleShow");
  function De(G) {
    if (M.clearDelayTimeouts(), ft("onUntrigger", [M, G]), !M.state.isVisible) {
      Fe();
      return;
    }
    if (!(M.props.trigger.indexOf("mouseenter") >= 0 && M.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(G.type) >= 0 && f)) {
      var et = Wt(false);
      et ? l = setTimeout(function() {
        M.state.isVisible && M.hide();
      }, et) : c = requestAnimationFrame(function() {
        M.hide();
      });
    }
  }
  __name(De, "De");
  u(De, "scheduleHide");
  function dn() {
    M.state.isEnabled = true;
  }
  __name(dn, "dn");
  u(dn, "enable");
  function _r() {
    M.hide(), M.state.isEnabled = false;
  }
  __name(_r, "_r");
  u(_r, "disable");
  function fn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(fn, "fn");
  u(fn, "clearDelayTimeouts");
  function Vr(G) {
    if (!M.state.isDestroyed) {
      ft("onBeforeUpdate", [M, G]), un();
      var et = M.props, at = yp(r, Object.assign({}, et, mp(G), { ignoreAttributes: true }));
      M.props = at, Ir(), et.interactiveDebounce !== at.interactiveDebounce && ($e(), O = fp(cn, at.interactiveDebounce)), et.triggerTarget && !at.triggerTarget ? $n(et.triggerTarget).forEach(function(Et) {
        Et.removeAttribute("aria-expanded");
      }) : at.triggerTarget && r.removeAttribute("aria-expanded"), Jt(), Gt(), N && N(et, at), M.popperInstance && (Un(), xe().forEach(function(Et) {
        requestAnimationFrame(Et._tippy.popperInstance.forceUpdate);
      })), ft("onAfterUpdate", [M, G]);
    }
  }
  __name(Vr, "Vr");
  u(Vr, "setProps");
  function hn(G) {
    M.setProps({ content: G });
  }
  __name(hn, "hn");
  u(hn, "setContent");
  function Si() {
    var G = M.state.isVisible, et = M.state.isDestroyed, at = !M.state.isEnabled, Et = Or.isTouch && !M.props.touch, ht = kl(M.props.duration, 0, yr.duration);
    if (!(G || et || at || Et) && !Y().hasAttribute("disabled") && (ft("onShow", [M], false), M.props.onShow(M) !== false)) {
      if (M.state.isVisible = true, ct() && (_.style.visibility = "visible"), Gt(), ke(), M.state.isMounted || (_.style.transition = "none"), ct()) {
        var he = kt(), Pe = he.box, Ee = he.content;
        Dl([Pe, Ee], 0);
      }
      y = u(function() {
        var Ue;
        if (!(!M.state.isVisible || d)) {
          if (d = true, _.offsetHeight, _.style.transition = M.props.moveTransition, ct() && M.props.animation) {
            var Ti = kt(), Se = Ti.box, Ce = Ti.content;
            Dl([Se, Ce], ht), vp([Se, Ce], "visible");
          }
          Xt(), Jt(), hp(Rl, M), (Ue = M.popperInstance) == null || Ue.forceUpdate(), ft("onMount", [M]), M.props.animation && ct() && We(ht, function() {
            M.state.isShown = true, ft("onShown", [M]);
          });
        }
      }, "onFirstUpdate"), hr();
    }
  }
  __name(Si, "Si");
  u(Si, "show");
  function Ci() {
    var G = !M.state.isVisible, et = M.state.isDestroyed, at = !M.state.isEnabled, Et = kl(M.props.duration, 1, yr.duration);
    if (!(G || et || at) && (ft("onHide", [M], false), M.props.onHide(M) !== false)) {
      if (M.state.isVisible = false, M.state.isShown = false, d = false, f = false, ct() && (_.style.visibility = "hidden"), $e(), Fe(), Gt(true), ct()) {
        var ht = kt(), he = ht.box, Pe = ht.content;
        M.props.animation && (Dl([he, Pe], Et), vp([he, Pe], "hidden"));
      }
      Xt(), Jt(), M.props.animation ? ct() && fr(Et, M.unmount) : M.unmount();
    }
  }
  __name(Ci, "Ci");
  u(Ci, "hide");
  function Po(G) {
    ut().addEventListener("mousemove", O), hp(Va, O), O(G);
  }
  __name(Po, "Po");
  u(Po, "hideWithInteractivity");
  function Io() {
    M.state.isVisible && M.hide(), !!M.state.isMounted && (Ur(), xe().forEach(function(G) {
      G._tippy.unmount();
    }), _.parentNode && _.parentNode.removeChild(_), Rl = Rl.filter(function(G) {
      return G !== M;
    }), M.state.isMounted = false, ft("onHidden", [M]));
  }
  __name(Io, "Io");
  u(Io, "unmount");
  function os() {
    M.state.isDestroyed || (M.clearDelayTimeouts(), M.unmount(), un(), delete r._tippy, M.state.isDestroyed = true, ft("onDestroy", [M]));
  }
  __name(os, "os");
  u(os, "destroy");
}
__name(Lm, "Lm");
u(Lm, "createTippy");
function bi(r, t) {
  t === void 0 && (t = {});
  var e = yr.plugins.concat(t.plugins || []);
  Pm();
  var i = Object.assign({}, t, { plugins: e }), l = Sm(r);
  if (false)
    var c, f;
  var b = l.reduce(function(h, d) {
    var m = d && Lm(d, i);
    return m && h.push(m), h;
  }, []);
  return Xa(r) ? b[0] : b;
}
__name(bi, "bi");
u(bi, "tippy");
bi.defaultProps = yr;
bi.setDefaultProps = zm;
bi.currentInput = Or;
var qm = Object.assign({}, so, { effect: u(function(t) {
  var e = t.state, i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow);
}, "effect") });
var Ap = u(function(t, e) {
  var i;
  e === void 0 && (e = {});
  var l = t, c = [], f = [], b, h = e.overrides, d = [], m = false;
  function w() {
    f = l.map(function(M) {
      return $n(M.props.triggerTarget || M.reference);
    }).reduce(function(M, B) {
      return M.concat(B);
    }, []);
  }
  __name(w, "w");
  u(w, "setTriggerTargets");
  function y() {
    c = l.map(function(M) {
      return M.reference;
    });
  }
  __name(y, "y");
  u(y, "setReferences");
  function S(M) {
    l.forEach(function(B) {
      M ? B.enable() : B.disable();
    });
  }
  __name(S, "S");
  u(S, "enableInstances");
  function O(M) {
    return l.map(function(B) {
      var _ = B.setProps;
      return B.setProps = function(N) {
        _(N), B.reference === b && M.setProps(N);
      }, function() {
        B.setProps = _;
      };
    });
  }
  __name(O, "O");
  u(O, "interceptSetProps");
  function P(M, B) {
    var _ = f.indexOf(B);
    if (B !== b) {
      b = B;
      var N = (h || []).concat("content").reduce(function(W, Q) {
        return W[Q] = l[_].props[Q], W;
      }, {});
      M.setProps(Object.assign({}, N, { getReferenceClientRect: typeof N.getReferenceClientRect == "function" ? N.getReferenceClientRect : function() {
        var W;
        return (W = c[_]) == null ? void 0 : W.getBoundingClientRect();
      } }));
    }
  }
  __name(P, "P");
  u(P, "prepareInstance"), S(false), y(), w();
  var k = { fn: u(function() {
    return { onDestroy: u(function() {
      S(true);
    }, "onDestroy"), onHidden: u(function() {
      b = null;
    }, "onHidden"), onClickOutside: u(function(_) {
      _.props.showOnCreate && !m && (m = true, b = null);
    }, "onClickOutside"), onShow: u(function(_) {
      _.props.showOnCreate && !m && (m = true, P(_, c[0]));
    }, "onShow"), onTrigger: u(function(_, N) {
      P(_, N.currentTarget);
    }, "onTrigger") };
  }, "fn") }, j = bi(gi(), Object.assign({}, vm(e, ["overrides"]), { plugins: [k].concat(e.plugins || []), triggerTarget: f, popperOptions: Object.assign({}, e.popperOptions, { modifiers: [].concat(((i = e.popperOptions) == null ? void 0 : i.modifiers) || [], [qm]) }) })), L = j.show;
  j.show = function(M) {
    if (L(), !b && M == null)
      return P(j, c[0]);
    if (!(b && M == null)) {
      if (typeof M == "number")
        return c[M] && P(j, c[M]);
      if (l.indexOf(M) >= 0) {
        var B = M.reference;
        return P(j, B);
      }
      if (c.indexOf(M) >= 0)
        return P(j, M);
    }
  }, j.showNext = function() {
    var M = c[0];
    if (!b)
      return j.show(0);
    var B = c.indexOf(b);
    j.show(c[B + 1] || M);
  }, j.showPrevious = function() {
    var M = c[c.length - 1];
    if (!b)
      return j.show(M);
    var B = c.indexOf(b), _ = c[B - 1] || M;
    j.show(_);
  };
  var V = j.setProps;
  return j.setProps = function(M) {
    h = M.overrides || h, V(M);
  }, j.setInstances = function(M) {
    S(true), d.forEach(function(B) {
      return B();
    }), l = M, S(false), y(), w(), d = O(j), j.setProps({ triggerTarget: f });
  }, d = O(j), j;
}, "createSingleton");
bi.setDefaultProps({ render: Ip });
var fe = bi;
var ql = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Pt(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = be({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = fe(this, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
      this.helpableService = ce(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${ee(i.value)}`);
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
  __name(t, "t");
  return u(t, "HelpableMixinClass"), A([z], t.prototype, "help", 2), A([z], t.prototype, "helpId", 2), A([z], t.prototype, "debugHelpable", 2), t;
}
__name(Pt, "Pt");
u(Pt, "HelpableMixin");
function xt(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(t, "t");
  return u(t, "HoverableMixinClass"), A([z], t.prototype, "hoverable", 2), t;
}
__name(xt, "xt");
u(xt, "HoverableMixin");
function* Za(r) {
  let t = "", e = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, t && (yield { type: "string", start: e, end: l, value: t }), t = "{{", e = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: e, end: l + 2, value: t.slice(2).trim() }, t = "", l += 2, e = l), t += r[l] || "";
  t && (yield { type: "string", start: e, end: r.length, value: t });
}
__name(Za, "Za");
u(Za, "parse");
var _p = /* @__PURE__ */ __name(function(r, t, e, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !l : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, e) : l ? l.value = e : t.set(r, e), e;
}, "_p");
var on = /* @__PURE__ */ __name(function(r, t, e, i) {
  if (e === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(r) : i ? i.value : t.get(r);
}, "on");
var Mr;
var Qa;
var Br = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.expression = e, Mr.set(this, void 0), Qa.set(this, ""), _p(this, Mr, t, "f"), on(this, Mr, "f").updateParent("");
  }
  get attributeName() {
    return on(this, Mr, "f").attr.name;
  }
  get attributeNamespace() {
    return on(this, Mr, "f").attr.namespaceURI;
  }
  get value() {
    return on(this, Qa, "f");
  }
  set value(t) {
    _p(this, Qa, t || "", "f"), on(this, Mr, "f").updateParent(t);
  }
  get element() {
    return on(this, Mr, "f").element;
  }
  get booleanValue() {
    return on(this, Mr, "f").booleanValue;
  }
  set booleanValue(t) {
    on(this, Mr, "f").booleanValue = t;
  }
}, "Br");
u(Br, "AttributeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ new WeakMap();
var ho = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.element = t, this.attr = e, this.partList = [];
  }
  get booleanValue() {
    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
  }
  set booleanValue(t) {
    if (this.partList.length !== 1)
      throw new DOMException("Operation not supported", "NotSupportedError");
    this.partList[0].value = t ? "" : null;
  }
  append(t) {
    this.partList.push(t);
  }
  updateParent(t) {
    if (this.partList.length === 1 && t === null)
      this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
    else {
      let e = this.partList.map((i) => typeof i == "string" ? i : i.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, e);
    }
  }
}, "ho");
u(ho, "AttributeValueSetter");
var kp = /* @__PURE__ */ __name(function(r, t, e, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !l : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, e) : l ? l.value = e : t.set(r, e), e;
}, "kp");
var yi = /* @__PURE__ */ __name(function(r, t, e, i) {
  if (e === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(r) : i ? i.value : t.get(r);
}, "yi");
var Pr;
var Ke = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.expression = e, Pr.set(this, void 0), kp(this, Pr, [t], "f"), t.textContent = "";
  }
  get value() {
    return yi(this, Pr, "f").map((t) => t.textContent).join("");
  }
  set value(t) {
    this.replace(t);
  }
  get previousSibling() {
    return yi(this, Pr, "f")[0].previousSibling;
  }
  get nextSibling() {
    return yi(this, Pr, "f")[yi(this, Pr, "f").length - 1].nextSibling;
  }
  replace(...t) {
    let e = t.map((i) => typeof i == "string" ? new Text(i) : i);
    e.length || e.push(new Text("")), yi(this, Pr, "f")[0].before(...e);
    for (let i of yi(this, Pr, "f"))
      i.remove();
    kp(this, Pr, e, "f");
  }
}, "Ke");
u(Ke, "NodeTemplatePart");
Pr = /* @__PURE__ */ new WeakMap();
function mo(r) {
  return { createCallback(t, e, i) {
    this.processCallback(t, e, i);
  }, processCallback(t, e, i) {
    var l;
    if (!(typeof i != "object" || !i)) {
      for (let c of e)
        if (c.expression in i) {
          let f = (l = i[c.expression]) !== null && l !== void 0 ? l : "";
          r(c, f);
        }
    }
  } };
}
__name(mo, "mo");
u(mo, "createProcessor");
function vo(r, t) {
  r.value = String(t);
}
__name(vo, "vo");
u(vo, "processPropertyIdentity");
function Ka(r, t) {
  return typeof t == "boolean" && r instanceof Br && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = t, true) : false;
}
__name(Ka, "Ka");
u(Ka, "processBooleanAttribute");
var jl = mo(vo);
var jm = mo((r, t) => {
  Ka(r, t) || vo(r, t);
});
var Dp = /* @__PURE__ */ __name(function(r, t, e, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !l : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, e) : l ? l.value = e : t.set(r, e), e;
}, "Dp");
var Ja = /* @__PURE__ */ __name(function(r, t, e, i) {
  if (e === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(r) : i ? i.value : t.get(r);
}, "Ja");
var go;
var bo;
function* Bm(r) {
  let t = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = t.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let i = 0; i < e.attributes.length; i += 1) {
        let l = e.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new ho(e, l);
          for (let f of Za(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let b = new Br(c, f.value);
              c.append(b), yield b;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{"))
      for (let i of Za(e.textContent)) {
        i.end < e.textContent.length && e.splitText(i.end), i.type === "part" && (yield new Ke(e, i.value));
        break;
      }
}
__name(Bm, "Bm");
u(Bm, "collectParts");
var an = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(t, e, i = jl) {
    var l, c;
    super();
    go.set(this, void 0), bo.set(this, void 0), Object.getPrototypeOf(this) !== an.prototype && Object.setPrototypeOf(this, an.prototype), this.appendChild(t.content.cloneNode(true)), Dp(this, bo, Array.from(Bm(this)), "f"), Dp(this, go, i, "f"), (c = (l = Ja(this, go, "f")).createCallback) === null || c === void 0 || c.call(l, this, Ja(this, bo, "f"), e);
  }
  update(t) {
    Ja(this, go, "f").processCallback(this, Ja(this, bo, "f"), t);
  }
}, "an");
u(an, "TemplateInstance");
go = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap();
var zp = /* @__PURE__ */ new WeakSet();
function Rp(r) {
  return zp.has(r);
}
__name(Rp, "Rp");
u(Rp, "isDirective");
function Np(r, t) {
  return Rp(t) ? (t(r), true) : false;
}
__name(Np, "Np");
u(Np, "processDirective");
function yo(r) {
  return (...t) => {
    let e = r(...t);
    return zp.add(e), e;
  };
}
__name(yo, "yo");
u(yo, "directive");
var wo = /* @__PURE__ */ new WeakMap();
var xo = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.element = t, this.type = e, this.element.addEventListener(this.type, this), wo.get(this.element).set(this.type, this);
  }
  set(t) {
    typeof t == "function" ? this.handleEvent = t.bind(this.element) : typeof t == "object" && typeof t.handleEvent == "function" ? this.handleEvent = t.handleEvent.bind(t) : (this.element.removeEventListener(this.type, this), wo.get(this.element).delete(this.type));
  }
  static for(t) {
    wo.has(t.element) || wo.set(t.element, /* @__PURE__ */ new Map());
    let e = t.attributeName.slice(2), i = wo.get(t.element);
    return i.has(e) ? i.get(e) : new xo(t.element, e);
  }
}, "xo");
u(xo, "EventHandler");
function Gp(r, t) {
  return r instanceof Br && r.attributeName.startsWith("on") ? (xo.for(r).set(t), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Gp, "Gp");
u(Gp, "processEvent");
function Hm(r, t) {
  return t instanceof wi && r instanceof Ke ? (t.renderInto(r), true) : false;
}
__name(Hm, "Hm");
u(Hm, "processSubTemplate");
function $m(r, t) {
  return t instanceof DocumentFragment && r instanceof Ke ? (t.childNodes.length && r.replace(...t.childNodes), true) : false;
}
__name($m, "$m");
u($m, "processDocumentFragment");
function Fm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(Fm, "Fm");
u(Fm, "isIterable");
function Wm(r, t) {
  if (!Fm(t))
    return false;
  if (r instanceof Ke) {
    let e = [];
    for (let i of t)
      if (i instanceof wi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), e.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? e.push(...i.childNodes) : e.push(String(i));
    return e.length && r.replace(...e), true;
  } else
    return r.value = Array.from(t).join(" "), true;
}
__name(Wm, "Wm");
u(Wm, "processIterable");
function ts(r, t) {
  Np(r, t) || Ka(r, t) || Gp(r, t) || Hm(r, t) || $m(r, t) || Wm(r, t) || vo(r, t);
}
__name(ts, "ts");
u(ts, "processPart");
var Bl = /* @__PURE__ */ new WeakMap();
var Lp = /* @__PURE__ */ new WeakMap();
var qp = /* @__PURE__ */ new WeakMap();
var wi = /* @__PURE__ */ __name(class {
  constructor(t, e, i) {
    this.strings = t, this.values = e, this.processor = i;
  }
  get template() {
    if (Bl.has(this.strings))
      return Bl.get(this.strings);
    {
      let t = document.createElement("template"), e = this.strings.length - 1;
      return t.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < e ? `{{ ${c} }}` : ""), ""), Bl.set(this.strings, t), t;
    }
  }
  renderInto(t) {
    let e = this.template;
    if (Lp.get(t) !== e) {
      Lp.set(t, e);
      let i = new an(e, this.values, this.processor);
      qp.set(t, i), t instanceof Ke ? t.replace(...i.children) : t.appendChild(i);
      return;
    }
    qp.get(t).update(this.values);
  }
}, "wi");
u(wi, "TemplateResult");
var Um = mo(ts);
function F(r, ...t) {
  return new wi(r, t, Um);
}
__name(F, "F");
u(F, "html");
function K(r, t) {
  r.renderInto(t);
}
__name(K, "K");
u(K, "render");
var Hl = /* @__PURE__ */ new WeakMap();
var Vm = yo((...r) => (t) => {
  Hl.has(t) || Hl.set(t, { i: r.length });
  let e = Hl.get(t);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < e.i && (e.i = i, ts(t, l));
    }) : i <= e.i && (e.i = i, ts(t, r[i]));
});
var Ym = yo((r) => (t) => {
  if (!(t instanceof Ke))
    return;
  let e = document.createElement("template");
  e.innerHTML = r;
  let i = document.importNode(e.content, true);
  t.replace(...i.childNodes);
});
function _t(r) {
  class t extends r {
    iconHtml(i) {
      return F`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return F([i]);
    }
    get iconStyle() {
      return F`<style>
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
  __name(t, "t");
  return u(t, "IconableMixinClass"), t;
}
__name(_t, "_t");
u(_t, "IconableMixin");
var Hr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Qt(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(t, "t");
  return u(t, "IfableMixinClass"), A([z], t.prototype, "if", 2), t;
}
__name(Qt, "Qt");
u(Qt, "IfableMixin");
var $l = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function It(r) {
  class t extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = fe(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      return K(F`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Hr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        U.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = fe(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (En(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        U.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = fe(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Dn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        U.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = fe(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      U.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = fe(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  __name(t, "t");
  return u(t, "MenuableMixinClass"), t;
}
__name(It, "It");
u(It, "MenuableMixin");
function jp(r) {
  return /^-?\d+$/.test(r);
}
__name(jp, "jp");
u(jp, "isNumeric");
function we(r, t = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(t);
}
__name(we, "we");
u(we, "forceSigned");
var ae = /* @__PURE__ */ __name(class extends It(Pt(Mt(Ot(xt(HTMLElement))))) {
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
    if (U.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let t = this._tippy;
    t && t.destroy();
    let e = this.blochInspectorPopupContent();
    fe(this, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(e);
    } }).show();
  }
  blochInspectorPopupContent() {
    let t = document.createDocumentFragment();
    return K(F`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${we(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${we(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${we(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${we(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${we(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${we(this.z)}</span>
          </section>
        </div>
      `, t), t;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let t = this._tippy;
    t == null || t.destroy();
  }
  attributeChangedCallback(t, e, i) {
    !this.body || e !== i && i !== null && (t === "data-x" && (this.x = parseFloat(i)), t === "data-y" && (this.y = parseFloat(i)), t === "data-z" && (this.z = parseFloat(i)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let t = u((i) => F`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), e = u((i, l) => F`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    K(F`<style>
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
                  ${t(0)} ${t(20)} ${t(40)} ${t(60)}
                  ${t(80)} ${t(100)} ${t(120)} ${t(140)}
                  ${t(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${e(0, "Y")} ${e(20, "Y")} ${e(40, "Y")}
                  ${e(60, "Y")} ${e(80, "Y")} ${e(100, "Y")}
                  ${e(120, "Y")} ${e(140, "Y")} ${e(160, "Y")}
                  ${e(90, "X")}
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
    let t = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${t / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${t / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let e = this._tippy;
    e == null || e.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let t = this.getAttribute("data-d");
    return U.notNull(t), parseFloat(t);
  }
  set d(t) {
    this.setAttribute("data-d", t.toString());
  }
  vectorLength() {
    return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4));
  }
  set phi(t) {
    this.setAttribute("data-phi", t.toString());
  }
  get phi() {
    let t = this.getAttribute("data-phi");
    return U.notNull(t), parseFloat(t);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(t) {
    this.setAttribute("data-theta", t.toString());
  }
  get theta() {
    let t = this.getAttribute("data-theta");
    return U.notNull(t), parseFloat(t);
  }
  thetaRadian() {
    let t = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * t / Math.PI;
  }
}, "ae");
u(ae, "BlochDisplayElement"), A([wt], ae.prototype, "body", 2), A([wt], ae.prototype, "vectorLine", 2), A([wt], ae.prototype, "vectorEnd", 2), A([wt], ae.prototype, "vector", 2), A([re], ae.prototype, "vectorEndCircles", 2), A([z], ae.prototype, "x", 2), A([z], ae.prototype, "y", 2), A([z], ae.prototype, "z", 2);
tt(ae);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var je = /* @__PURE__ */ __name(class extends It(Pt(Mt(Bt(_t(Ot(xt(HTMLElement))))))) {
  get operationType() {
    return Bs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Bs}"`;
  }
}, "je");
u(je, "ControlGateElement");
tt(je);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Je = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(Mt(Bt(_t(Ot(xt(HTMLElement))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ca}<${this.if}"` : `"${ca}"`;
  }
}, "Je");
u(Je, "HGateElement");
tt(Je);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends It(Pt(Uc(Mt(_t(Ot(xt(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">
        ${this.iconHtml($p)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${wa}"` : `"${wa}>${this.flag}"`;
  }
}, "tr");
u(tr, "MeasurementGateElement"), A([z], tr.prototype, "value", 2);
tt(tr);
var Fp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(tn(Mt(Bt(_t(Ot(xt(HTMLElement)))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ha}"` : `"${ha}(${this.angle.replace("/", "_")})"`;
  }
}, "er");
u(er, "PhaseGateElement");
tt(er);
var Wp = `<svg
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
var rr = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(Mt(Bt(_t(Ot(xt(HTMLElement))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${va}<${this.if}"` : `"${va}"`;
  }
}, "rr");
u(rr, "RnotGateElement");
tt(rr);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(tn(Mt(Bt(_t(Ot(xt(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Up)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ga}"` : `"${ga}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "RxGateElement");
tt(nr);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(tn(Mt(Bt(_t(Ot(xt(HTMLElement)))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ba}"` : `"${ba}(${this.angle.replace("/", "_")})"`;
  }
}, "ir");
u(ir, "RyGateElement");
tt(ir);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(tn(Mt(Bt(_t(Ot(xt(HTMLElement)))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Yp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ya}"` : `"${ya}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RzGateElement");
tt(or);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends It(Pt($t(Mt(Bt(_t(Ot(xt(HTMLElement)))))))) {
  get operationType() {
    return js;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Xp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${js}"`;
  }
}, "ar");
u(ar, "SwapGateElement");
tt(ar);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(Mt(Bt(_t(Ot(xt(HTMLElement))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Zp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ma}<${this.if}"` : `"${ma}"`;
  }
}, "sr");
u(sr, "TGateElement");
tt(sr);
var Qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Be = /* @__PURE__ */ __name(class extends It(Pt(Mt(_t(Ot(xt(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return tc;
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
    K(F`<div part="body">
        ${this.iconHtml(Qp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Be");
u(Be, "WriteGateElement"), A([z], Be.prototype, "value", 2);
tt(Be);
var Kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(Mt(Bt(_t(Ot(xt(HTMLElement))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${pa}<${this.if}"` : `"${pa}"`;
  }
}, "lr");
u(lr, "XGateElement");
tt(lr);
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(Mt(Bt(_t(Ot(xt(HTMLElement))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(Jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${da}<${this.if}"` : `"${da}"`;
  }
}, "ur");
u(ur, "YGateElement");
tt(ur);
var td = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends It(Pt(Qt($t(Mt(Bt(_t(Ot(xt(HTMLElement))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    K(F`<div part="body">${this.iconHtml(td)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${fa}<${this.if}"` : `"${fa}"`;
  }
}, "cr");
u(cr, "ZGateElement");
tt(cr);
var Kt = u((r) => r instanceof Je || r instanceof lr || r instanceof ur || r instanceof cr || r instanceof er || r instanceof sr || r instanceof rr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof ar || r instanceof je || r instanceof ae || r instanceof Be || r instanceof tr, "isOperation");
var ed = u((r) => r != null && r instanceof Je, "isHGateElement");
var rd = u((r) => r != null && r instanceof lr, "isXGateElement");
var nd = u((r) => r != null && r instanceof ur, "isYGateElement");
var id = u((r) => r != null && r instanceof cr, "isZGateElement");
var Eo = u((r) => r != null && r instanceof er, "isPhaseGateElement");
var od = u((r) => r != null && r instanceof sr, "isTGateElement");
var ad = u((r) => r != null && r instanceof rr, "isRnotGateElement");
var es = u((r) => r != null && r instanceof nr, "isRxGateElement");
var rs = u((r) => r != null && r instanceof ir, "isRyGateElement");
var ns = u((r) => r != null && r instanceof or, "isRzGateElement");
var sd = u((r) => r != null && r instanceof ar, "isSwapGateElement");
var Fl = u((r) => r != null && r instanceof je, "isControlGateElement");
var ld = u((r) => r != null && r instanceof ae, "isBlochDisplayElement");
var rT = u((r) => r != null && r instanceof Be, "isWriteGateElement");
var ud = u((r) => r != null && r instanceof tr, "isMeasurementGateElement");
var So = ni(La(), 1);
var Wl = u((r) => r !== null && r instanceof $r, "isAngleSliderElement");
var $r = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = be({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new ue("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (t, e) => {
      e.type === "SET_ANGLE" && (this.denominator = $i(this.angle));
    }, setAngleInRadian: (t, e) => {
      if (e.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (t, e) => {
      if (e.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(Xu(this.angle));
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
    this.angleSliderService = ce(this.angleSliderMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${ee(t.value)}`);
    }).start();
  }
  attributeChangedCallback(t, e, i) {
    e !== i && i !== null && (t === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), t === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, So.default)(this).unset();
  }
  update() {
    K(F`<style>
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
    (0, So.default)(this).draggable({ origin: "self", modifiers: [So.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(t) {
    let e = So.default.getElementRect(t.target).width, i = t.pageX / e;
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
    let t = -2 * this.denominator, e = 2 * this.denominator, i = new Array(e - t + 1).fill(null).map((l, c) => c + t);
    this.snapAngles = {};
    for (let l of i)
      this.denominator === 1 ? l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI] = "\u03C0" : l === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[l * Math.PI] = `${l}\u03C0` : l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : l === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[l * Math.PI / this.denominator] = `${l}\u03C0/${this.denominator}`;
  }
  findSnapAngle(t) {
    let e = null, i = null, l = null;
    for (let c in this.snapAngles) {
      let f = Math.abs(parseFloat(c) - t);
      (e === null || f < e) && (e = f, i = parseFloat(c), l = this.snapAngles[c]);
    }
    return U.notNull(i), U.notNull(l), [i, l];
  }
  proportionToRadian(t) {
    return (t - 0.5) * Math.PI * 4;
  }
  set left(t) {
    this.style.paddingLeft = `${t * 100}%`;
  }
}, "$r");
u($r, "AngleSliderElement"), A([z], $r.prototype, "angle", 2), A([z], $r.prototype, "radian", 2), A([z], $r.prototype, "denominator", 2), A([z], $r.prototype, "disabled", 2), A([z], $r.prototype, "debug", 2);
tt($r);
var Co = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    K(F`<slot></slot>`, this.shadowRoot);
  }
  activateButton(t) {
    let e = t.currentTarget;
    U.notNull(e);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    e.setAttribute("data-active", "");
  }
}, "Co");
u(Co, "ButtonGroupElement"), A([re], Co.prototype, "buttons", 2), Co = A([tt], Co);
var xi = ni(pd(), 1);
var se = /* @__PURE__ */ __name(class extends HTMLElement {
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
  handleViewSizeChange(t) {
    let e = this.mobile !== null && this.mobile !== t.matches;
    this.mobile = t.matches, e && (this.mobile || this.style.removeProperty("top"), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.drawQubitCircles());
  }
  startBasicCircleNotationMode() {
    this.colorPhase = false;
  }
  startColorPhaseMode() {
    this.colorPhase = true;
  }
  attributeChangedCallback(t, e, i) {
    e !== i && (t === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (U.notNull(i), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), t === "data-color-phase" && this.drawQubitCircles());
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
          throw new ue("unsupported qubit count", this.qubitCount);
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
          throw new ue("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((t) => {
      let e = t.getAttribute("data-ket");
      return U.notNull(e), parseInt(e);
    }), U.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(t) {
    xi.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let i = e.getAttribute("data-ket");
        U.notNull(i);
        let l = parseInt(i), c = t[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, b = c.phase() / Math.PI * 180;
        e.setAttribute("data-amplitude-real", c.real.toString()), e.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? e.classList.add("magnitude-0") : (e.classList.remove("magnitude-0"), e.style.setProperty("--magnitude", f.toString()));
        let h = Math.trunc(b);
        h < 0 && (h = 360 + h), e.style.setProperty("--phase", `-${h.toString()}deg`);
      }
    });
  }
  renderShadowRoot() {
    K(F`<style>
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
        throw new ue("unsupported qubit count", this.qubitCount);
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
        throw new ue("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    if (this.qubitCount === 0)
      return 0;
    let t = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.mobile) {
      let e = this.clientHeight;
      return this.rowCount > 4 && e < t ? e : t;
    } else
      return t;
  }
  get windowWidth() {
    if (this.qubitCount === 0)
      return 0;
    let t = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.mobile) {
      let e = this.clientWidth;
      return this.colCount >= 16 && e < t ? e : t;
    } else
      return t;
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
        throw new ue("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    U.notNull(this.window), U.notNull(this.innerContainer), this.qubitCount !== 0 && xi.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let t = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let i = this.lastRowStartIndex; i <= this.lastRowEndIndex; i++)
        for (let l = this.lastColStartIndex; l <= this.lastColEndIndex; l++)
          t.push({ col: l, row: i });
      let e = document.createDocumentFragment();
      for (let i of this.allQubitCircleElements(t))
        e.appendChild(i);
      this.innerContainer.textContent = "", this.innerContainer.appendChild(e), this.updateVisibleQubitCircleKets();
    });
  }
  update() {
    this.drawNewlyVisibleQubitCircles(), this.removeInvisibleQubitCircles();
  }
  drawNewlyVisibleQubitCircles() {
    this.window !== void 0 && this.innerContainer !== void 0 && (xi.default.measure(() => {
      this.qubitCirclePositions = [];
      let t = this.overscanColStartIndex, e = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === t && this.lastColEndIndex === e && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = t; f <= e; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = t, this.lastColEndIndex = e, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), xi.default.mutate(() => {
      let t = document.createDocumentFragment();
      for (let e of this.allQubitCircleElements(this.qubitCirclePositions))
        t.appendChild(e);
      this.innerContainer.appendChild(t), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    xi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let e = t.getAttribute("data-col"), i = t.getAttribute("data-row");
        U.notNull(e), U.notNull(i);
        let l = parseInt(e), c = parseInt(i);
        if (l < this.lastColStartIndex || this.lastColEndIndex < l || c < this.lastRowStartIndex || this.lastRowEndIndex < c) {
          let f = t._tippy;
          f !== void 0 && f.destroy(), t.remove();
        }
      }
    });
  }
  allQubitCircleElements(t) {
    return t.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(t) {
    let e = t.col + t.row * this.colCount, i = this.qubitCircleSizePx * t.row + t.row * this.gap + this.paddingY, l = this.qubitCircleSizePx * t.col + t.col * this.gap + this.paddingX, c = document.createElement("div");
    c.className = "qubit-circle magnitude-0", c.setAttribute("data-col", t.col.toString()), c.setAttribute("data-row", t.row.toString()), c.setAttribute("data-ket", e.toString()), c.setAttribute("data-targets", "circle-notation.qubitCircles"), c.setAttribute("data-amplitude-real", "0"), c.setAttribute("data-amplitude-imag", "0"), c.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), c.style.setProperty("top", `${i}px`), c.style.setProperty("left", `${l}px`);
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
        throw new ue("unsupported qubit count", this.qubitCount);
    }
  }
  get overscanColStartIndex() {
    let t = this.visibleColStartIndex - this.overscanCount;
    return t < 0 ? 0 : t;
  }
  get overscanColEndIndex() {
    let t = this.visibleColEndIndex + this.overscanCount;
    return t > this.colCount - 1 ? this.colCount - 1 : t;
  }
  get overscanRowStartIndex() {
    let t = this.visibleRowStartIndex - this.overscanCount;
    return t < 0 ? 0 : t;
  }
  get overscanRowEndIndex() {
    let t = this.visibleRowEndIndex + this.overscanCount;
    return t > this.rowCount - 1 ? this.rowCount - 1 : t;
  }
  get visibleColStartIndex() {
    let t = this.windowScrollLeft - this.paddingX;
    if (t < 0)
      return 0;
    let e = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && e++, e;
  }
  get visibleColEndIndex() {
    let t = this.windowWidth + this.windowScrollLeft - this.paddingX, e = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && e++, Math.min(this.colCount - 1, e);
  }
  get visibleRowStartIndex() {
    let t = this.windowScrollTop - this.paddingY;
    if (t < 0)
      return 0;
    let e = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && e++, e;
  }
  get visibleRowEndIndex() {
    let t = this.windowHeight + this.windowScrollTop - this.paddingY, e = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && e++, Math.min(this.rowCount - 1, e);
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
  showQubitCirclePopup(t) {
    let e = t.target;
    U.need(e.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = fe(e, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = e.getAttribute("data-ket");
    U.notNull(l);
    let c = e.getAttribute("data-amplitude-real");
    U.notNull(c);
    let f = e.getAttribute("data-amplitude-imag");
    U.notNull(f);
    let b = parseInt(l), h = parseFloat(c), d = parseFloat(f), m = new Xe(h, d), w = m.abs(), y = m.phase() / Math.PI * 180, S = document.importNode(this.qubitCirclePopupTemplate.content, true), O = S.getElementById("qubit-circle-popup--ket-binary-value"), P = S.getElementById("qubit-circle-popup--ket-decimal-value"), k = S.getElementById("qubit-circle-popup--amplitude"), j = S.getElementById("qubit-circle-popup--amplitude-real-value"), L = S.getElementById("qubit-circle-popup--amplitude-imag-value"), V = S.getElementById("qubit-circle-popup--probability"), M = S.getElementById("qubit-circle-popup--probability-value"), B = S.getElementById("qubit-circle-popup--phase"), _ = S.getElementById("qubit-circle-popup--phase-value");
    U.notNull(k), U.notNull(j), U.notNull(L), U.notNull(V), U.notNull(M), U.notNull(B), U.notNull(_), O && (O.textContent = b.toString(2).padStart(this.qubitCount, "0")), P && (P.textContent = b.toString()), this.showQubitCirclePopupAmplitude ? (j.textContent = we(m.real, 5), L.textContent = `${we(m.imag, 5)}i`) : k.style.display = "none", this.showQubitCirclePopupProbability ? M.textContent = `${we(w * w * 100, 4)}%` : V.style.display = "none", this.showQubitCirclePopupPhase ? _.textContent = `${we(y, 2)}\xB0` : B.style.display = "none";
    let N = document.createElement("div");
    N.appendChild(S), i.setContent(N.innerHTML), i.show();
  }
  hideQubitCirclePopup(t) {
    let e = t.target;
    U.need(e.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = e._tippy;
    U.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "se");
u(se, "CircleNotationElement"), A([z], se.prototype, "qubitCount", 2), A([z], se.prototype, "qubitCircleSize", 2), A([z], se.prototype, "colCount", 2), A([z], se.prototype, "rowCount", 2), A([z], se.prototype, "paddingX", 2), A([z], se.prototype, "paddingY", 2), A([z], se.prototype, "overscanCount", 2), A([z], se.prototype, "colorPhase", 2), A([z], se.prototype, "qubitCirclePopupTemplateId", 2), A([z], se.prototype, "showQubitCirclePopupAmplitude", 2), A([z], se.prototype, "showQubitCirclePopupProbability", 2), A([z], se.prototype, "showQubitCirclePopupPhase", 2), A([wt], se.prototype, "window", 2), A([wt], se.prototype, "innerContainer", 2), A([re], se.prototype, "qubitCircles", 2), se = A([tt], se);
var To = /* @__PURE__ */ __name(class extends HTMLElement {
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
    K(F`<slot></slot>`, this.shadowRoot);
  }
}, "To");
u(To, "CircleNotationPanelElement"), A([wt], To.prototype, "circleNotation", 2), To = A([tt], To);
var pr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "";
    this.magnitudes = "";
    this.phases = "";
    this.multiQubits = false;
    this.showKets = false;
  }
  setAmplitudes(t) {
    let e = this.qubitCircles;
    for (let [i, l] of Object.entries(t)) {
      let c = e[parseInt(i)];
      U.notNull(c);
      let f = Xe.from(l);
      c.setAttribute("data-amplitude-real", f.real.toString()), c.setAttribute("data-amplitude-imag", f.imag.toString());
      let b = f.abs();
      this.setRoundedMagnitude(c, b);
      let h = f.phase() / Math.PI * 180;
      this.setRoundedPhase(c, h);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initQubitCirclePopup(this.qubitCircles), this.hasAttribute("data-multi-qubits") && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()));
  }
  dispatchLoadEvent() {
    this.dispatchEvent(new Event("circle-notation-old.load", { bubbles: true }));
  }
  attributeChangedCallback(t, e, i) {
    this.shadowRoot !== null && e !== i && t === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let t = { root: this, threshold: [0, 0.2] }, e = u((l) => {
      for (let c of l) {
        let f = c.target;
        c.intersectionRatio >= 0.2 ? (f.setAttribute("data-targets", "circle-notation-old.qubitCircleGroups circle-notation-old.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : c.intersectionRatio === 0 && f.setAttribute("data-targets", "circle-notation-old.qubitCircleGroups");
      }
    }, "callback"), i = new IntersectionObserver(e, t);
    for (let l of this.qubitCircleGroups)
      i.observe(l);
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  get visibleQubitCircleKets() {
    let t = 2 ** this.qubitCount;
    return this.visibleQubitCircles.map((e) => parseInt(e.getAttribute("data-ket"))).filter((e) => e < t);
  }
  get visibleQubitCircles() {
    let t = this.visibleQubitCircleGroups.map((e) => Array.from(e.querySelectorAll(".qubit-circle")));
    return [].concat(...t);
  }
  update() {
    if (K(F`<style>
          @media (min-width: 768px) {
            :host([data-qubit-count='8']),
            :host([data-qubit-count='9']),
            :host([data-qubit-count='10']) {
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

          :host([data-qubit-count='3']) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle-group--size8 {
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

          :host([data-qubit-count='4']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-qubit-count='7']) .qubit-circle-group--size32,
            :host([data-qubit-count='8']) .qubit-circle-group--size32,
            :host([data-qubit-count='9']) .qubit-circle-group--size32,
            :host([data-qubit-count='10']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size64,
            :host([data-qubit-count='7']) .qubit-circle-group--size64,
            :host([data-qubit-count='8']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='9']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='10']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-qubit-count='1']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='2']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='4']) .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='6']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-qubit-count='7']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='8']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='8']) .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='9']) .qubit-circle-group--size256:nth-of-type(n + 3) {
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

          /* .qubit-circle__magnitude */

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-red-600, #dc2626) !important;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-orange-500, #f97516) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.1'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.2'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.3'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.4'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.5'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.6'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.7'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.8'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.9'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9) !important;
          }

          .qubit-circle[data-rounded-magnitude='1'] > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1) !important;
          }

          /* .qubit-circle__phase */

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-red-600, #dc2626) !important;
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] > .qubit-circle__phase {
            transform: rotate(-10deg) !important;
          }

          .qubit-circle[data-rounded-phase='20'] > .qubit-circle__phase {
            transform: rotate(-20deg) !important;
          }

          .qubit-circle[data-rounded-phase='30'] > .qubit-circle__phase {
            transform: rotate(-30deg) !important;
          }

          .qubit-circle[data-rounded-phase='40'] > .qubit-circle__phase {
            transform: rotate(-40deg) !important;
          }

          .qubit-circle[data-rounded-phase='50'] > .qubit-circle__phase {
            transform: rotate(-50deg) !important;
          }

          .qubit-circle[data-rounded-phase='60'] > .qubit-circle__phase {
            transform: rotate(-60deg) !important;
          }

          .qubit-circle[data-rounded-phase='70'] > .qubit-circle__phase {
            transform: rotate(-70deg) !important;
          }

          .qubit-circle[data-rounded-phase='80'] > .qubit-circle__phase {
            transform: rotate(-80deg) !important;
          }

          .qubit-circle[data-rounded-phase='90'] > .qubit-circle__phase {
            transform: rotate(-90deg) !important;
          }

          .qubit-circle[data-rounded-phase='100'] > .qubit-circle__phase {
            transform: rotate(-100deg) !important;
          }

          .qubit-circle[data-rounded-phase='110'] > .qubit-circle__phase {
            transform: rotate(-110deg) !important;
          }

          .qubit-circle[data-rounded-phase='120'] > .qubit-circle__phase {
            transform: rotate(-120deg) !important;
          }

          .qubit-circle[data-rounded-phase='130'] > .qubit-circle__phase {
            transform: rotate(-130deg) !important;
          }

          .qubit-circle[data-rounded-phase='140'] > .qubit-circle__phase {
            transform: rotate(-140deg) !important;
          }

          .qubit-circle[data-rounded-phase='150'] > .qubit-circle__phase {
            transform: rotate(-150deg) !important;
          }

          .qubit-circle[data-rounded-phase='160'] > .qubit-circle__phase {
            transform: rotate(-160deg) !important;
          }

          .qubit-circle[data-rounded-phase='170'] > .qubit-circle__phase {
            transform: rotate(-170deg) !important;
          }

          .qubit-circle[data-rounded-phase='180'] > .qubit-circle__phase {
            transform: rotate(-180deg) !important;
          }

          .qubit-circle[data-rounded-phase='190'] > .qubit-circle__phase {
            transform: rotate(-190deg) !important;
          }

          .qubit-circle[data-rounded-phase='200'] > .qubit-circle__phase {
            transform: rotate(-200deg) !important;
          }

          .qubit-circle[data-rounded-phase='210'] > .qubit-circle__phase {
            transform: rotate(-210deg) !important;
          }

          .qubit-circle[data-rounded-phase='220'] > .qubit-circle__phase {
            transform: rotate(-220deg) !important;
          }

          .qubit-circle[data-rounded-phase='230'] > .qubit-circle__phase {
            transform: rotate(-230deg) !important;
          }

          .qubit-circle[data-rounded-phase='240'] > .qubit-circle__phase {
            transform: rotate(-240deg) !important;
          }

          .qubit-circle[data-rounded-phase='250'] > .qubit-circle__phase {
            transform: rotate(-250deg) !important;
          }

          .qubit-circle[data-rounded-phase='260'] > .qubit-circle__phase {
            transform: rotate(-260deg) !important;
          }

          .qubit-circle[data-rounded-phase='270'] > .qubit-circle__phase {
            transform: rotate(-270deg) !important;
          }

          .qubit-circle[data-rounded-phase='280'] > .qubit-circle__phase {
            transform: rotate(-280deg) !important;
          }

          .qubit-circle[data-rounded-phase='290'] > .qubit-circle__phase {
            transform: rotate(-290deg) !important;
          }

          .qubit-circle[data-rounded-phase='300'] > .qubit-circle__phase {
            transform: rotate(-300deg) !important;
          }

          .qubit-circle[data-rounded-phase='310'] > .qubit-circle__phase {
            transform: rotate(-310deg) !important;
          }

          .qubit-circle[data-rounded-phase='320'] > .qubit-circle__phase {
            transform: rotate(-320deg) !important;
          }

          .qubit-circle[data-rounded-phase='330'] > .qubit-circle__phase {
            transform: rotate(-330deg) !important;
          }

          .qubit-circle[data-rounded-phase='340'] > .qubit-circle__phase {
            transform: rotate(-340deg) !important;
          }

          .qubit-circle[data-rounded-phase='350'] > .qubit-circle__phase {
            transform: rotate(-350deg) !important;
          }

          .qubit-circle[data-rounded-phase='360'] > .qubit-circle__phase {
            transform: rotate(-360deg) !important;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`, this.shadowRoot), this.magnitudes !== "")
      for (let [t, e] of this.magnitudes.split(",").entries())
        this.setRoundedMagnitude(this.qubitCircles[t], parseFloat(e));
    if (this.phases !== "")
      for (let [t, e] of this.phases.split(",").entries()) {
        let i = this.qubitCircles[t], l = e ? parseFloat(e) : 0;
        this.setRoundedPhase(i, l);
        let c = i.querySelector(".qubit-circle__phase");
        c.style.transform = `rotate(${-l}deg)`;
      }
  }
  setRoundedMagnitude(t, e) {
    if (t === null || t === void 0)
      return;
    let i = Math.round(e * 100);
    i = i < 10 ? i === 0 ? 0 : 10 : Math.round(i / 10) * 10, i = i / 100, t.setAttribute("data-magnitude", e.toString()), t.setAttribute("data-rounded-magnitude", i.toString());
  }
  setRoundedPhase(t, e) {
    if (t === null || t === void 0)
      return;
    let i = Math.round(e / 10) * 10;
    i < 0 && (i = 360 + i), t.setAttribute("data-phase", e.toString()), t.setAttribute("data-rounded-phase", i.toString());
  }
  get qubitCirclesHtml() {
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : F`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(t) {
    return F`<div
      part="qubit-circle"
      class="qubit-circle"
      data-ket="${t}"
      data-action="mouseenter:circle-notation-old#setPopupContent"
      data-targets="circle-notation-old.qubitCircles"
    >
      <div class="qubit-circle__magnitude" part="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase" part="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(t) {
    let e = F``, i = this.qubitCircleGroup([...Array(2 ** t).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (f) => this.qubitCircleGroup(f, (b) => this.qubitCircleGroup(b, (h) => this.qubitCircleGroup(h, (d) => this.qubitCircleGroup(d)))))), 256);
    for (let l of i)
      e = F`${e} ${l}`;
    return e;
  }
  qubitCircleGroup(t, e, i = t.length / 2) {
    return u((c, f = 1) => c.reduce((b, h, d) => d % f ? b : [...b, c.slice(d, d + f)], []), "arrayChunk")(t, i).map((c) => {
      let f = F``;
      if (e)
        for (let b of e(c))
          f = F`${f} ${b}`;
      else
        for (let b of c)
          f = F`${f} ${this.qubitCircleHtml(b)}`;
      return i === 64 ? F`<div class="qubit-circle-group--size${i}" data-targets="circle-notation-old.qubitCircleGroups">
          ${f}
        </div>` : F`<div class="qubit-circle-group--size${i}">${f}</div>`;
    });
  }
  initQubitCirclePopup(t) {
    let e = fe(t);
    Ap(e, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, theme: "qni" });
  }
  setPopupContent(t) {
    if (this.popupEl === null)
      return;
    let e = t.target, i = this.ketDecimal(e), l = e.getAttribute("data-amplitude-real"), c = e.getAttribute("data-amplitude-imag"), f = e.getAttribute("data-magnitude"), b = e.getAttribute("data-phase"), h;
    l === null || c === null ? h = Xe.ZERO : h = new Xe(parseFloat(l), parseFloat(c));
    let d;
    f && parseFloat(f) === 0 ? d = 0 : d = b ? parseFloat(b) : 0, this.setQubitCirclePopupContent(this.popupEl.content, e, i, h, f ? parseFloat(f) : 0, d, this.qubitCount);
  }
  setQubitCirclePopupContent(t, e, i, l, c, f, b) {
    e._tippy.setContent(this.popupContent(t, i, l, c, f, b));
  }
  popupContent(t, e, i, l, c, f) {
    let b = t.querySelector(".ket-binary"), h = t.querySelector(".ket-decimal"), d = t.querySelector(".amplitude-real"), m = t.querySelector(".amplitude-imag"), w = t.querySelector(".probability"), y = t.querySelector(".phase");
    b && (b.textContent = e.toString(2).padStart(f, "0")), h && (h.textContent = e.toString()), d && (d.textContent = this.forceSigned(i.real, 5)), m && (m.textContent = `${this.forceSigned(i.imag, 5)}i`), w && (w.textContent = `${this.forceSigned(l * l * 100, 4)}%`), y && (y.textContent = `${this.forceSigned(c, 2)}\xB0`);
    let S = document.createElement("div");
    return S.appendChild(t.cloneNode(true)), S.innerHTML;
  }
  get popupEl() {
    return document.getElementById("circle-notation-popup");
  }
  forceSigned(t, e) {
    return (t >= 0 ? "+" : "") + t.toFixed(e);
  }
  ketDecimal(t) {
    let e = t.getAttribute("data-ket");
    return parseInt(e);
  }
}, "pr");
u(pr, "CircleNotationOldElement"), A([z], pr.prototype, "qubitCount", 2), A([z], pr.prototype, "size", 2), A([z], pr.prototype, "magnitudes", 2), A([z], pr.prototype, "phases", 2), A([z], pr.prototype, "multiQubits", 2), A([z], pr.prototype, "showKets", 2), A([re], pr.prototype, "qubitCircles", 2), A([re], pr.prototype, "qubitCircleGroups", 2), A([re], pr.prototype, "visibleQubitCircleGroups", 2);
tt(pr);
var dd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var fd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Fr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(t, e, i) {
    e !== i && i !== null && t === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
  }
  startBreakpointChangeEventListener(t) {
    window.matchMedia("(max-width: 639px)").addEventListener("change", t);
  }
  startAnimation() {
    this.toggleGateSets(), this.toggleDots(), this.removePopinAnimationGates(), this.enableContentClipping(), this.makeAllGateSetsInvisible(), this.createPopinAnimationGates(), this.animatePopinAnimationGates();
  }
  update() {
    K(F`
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
            ${this.iconHtml(dd)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(fd)}
          </button>

          <div id="body">
            <slot></slot>

            <div id="dot-group">${this.dotsHtml()}</div>
          </div>
        </div>
      `, this.shadowRoot);
  }
  iconHtml(t) {
    return F([t]);
  }
  dotsHtml() {
    let t = F``;
    for (let e = 0; e < this.gateSets.length; e++)
      t = F`${t}
        <div class="dot" data-targets="gate-carousel.dots"></div>`;
    return t;
  }
  enableContentClipping() {
    this.contentClipper.style.overflow = "hidden";
  }
  disableContentClipping() {
    this.contentClipper.style.overflow = "visible";
  }
  removePopinAnimationGates() {
    var t;
    for (let e of this.popinAnimationGates)
      (t = e.parentElement) == null || t.removeChild(e);
  }
  prevGateSet() {
    this.currentGateSetIndex === 0 ? this.currentGateSetIndex = this.gateSets.length - 1 : this.currentGateSetIndex--;
  }
  nextGateSet() {
    this.currentGateSetIndex === this.gateSets.length - 1 ? this.currentGateSetIndex = 0 : this.currentGateSetIndex++;
  }
  validateCurrentGateSetIndex() {
    U.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), U.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
  }
  toggleGateSets() {
    for (let [t, e] of this.gateSets.entries())
      t === this.currentGateSetIndex ? e.classList.remove("hidden") : e.classList.add("hidden");
  }
  makeAllGateSetsVisible() {
    for (let t of this.gateSets)
      t.classList.remove("invisible");
  }
  makeAllGateSetsInvisible() {
    for (let t of this.gateSets)
      t.classList.add("invisible");
  }
  get activeGateSet() {
    let t = this.gateSets[this.currentGateSetIndex];
    return U.notNull(t), t;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((t) => {
      let e = t.children.item(0);
      return U.need(Kt(e), `${e} must be an operation.`), e;
    });
  }
  createPopinAnimationGates() {
    for (let t of this.gatesInActiveGateSet) {
      let e = t.cloneNode(false);
      e.setAttribute("data-targets", "gate-carousel.popinAnimationGates"), e.style.position = "absolute", e.style.top = `${this.offsetHeight}px`, e.style.left = `${t.offsetLeft}px`, this.append(e);
    }
  }
  animatePopinAnimationGates() {
    for (let [t, e] of this.popinAnimationGates.entries()) {
      U.need(t < 4, "#popinGates must be < 4");
      let i = 0;
      t === 0 ? i = 500 : t === 1 ? i = 600 : t === 2 ? i = 700 : t === 3 && (i = 800);
      let l = e.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: i, fill: "forwards", easing: "ease-out" });
      l.onfinish = () => {
        e === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [t, e] of this.dots.entries())
      t === this.currentGateSetIndex ? e.classList.add("dot--active") : e.classList.remove("dot--active");
  }
}, "Fr");
u(Fr, "GateCarouselElement"), A([z], Fr.prototype, "currentGateSetIndex", 2), A([wt], Fr.prototype, "contentClipper", 2), A([re], Fr.prototype, "gateSets", 2), A([re], Fr.prototype, "dots", 2), A([re], Fr.prototype, "popinAnimationGates", 2), Fr = A([tt], Fr);
var Vl = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    K(F`<slot></slot>`, this.shadowRoot);
  }
  showInspector(t) {
    this.showPopup(), this.inspector.operation = t;
  }
  showIfInspector(t) {
    this.showPopup(), this.inspector.operation = t, window.setTimeout(() => {
      this.inspector.ifInput.focus();
    }, 0);
  }
  showAngleInspector(t) {
    this.showPopup(), this.inspector.operation = t, window.setTimeout(() => {
      this.inspector.angleInput.focus();
    }, 0);
  }
  showFlagInspector(t) {
    this.showPopup(), this.inspector.operation = t, window.setTimeout(() => {
      this.inspector.flagInput.focus();
    }, 0);
  }
  get inspector() {
    let t = this.popup.popper.querySelector("operation-inspector");
    return U.notNull(t), t;
  }
  initPopup() {
    this.popup = fe(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(t) {
    let e = t.target;
    !this.popup.popper.contains(e) && !this.popup.reference.contains(e) && !Kt(e) && this.popup.hide();
  }
  get popupContent() {
    let t = document.querySelector("#operation-inspector-template");
    U.notNull(t);
    let e = t.content.cloneNode(true), i = document.createDocumentFragment();
    return K(F`${e}`, i), i;
  }
}, "Vl");
u(Vl, "InspectorButtonElement");
tt(Vl);
var _e = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return Ju(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(t) {
    if (this.clear(), this.disableAllPanes(), Hr(t) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = t.if), En(t)) {
      let e = $i(t.angle);
      Eo(t) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (es(t) || rs(t) || ns(t)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = t.angle, this.backupCurrentPhi(), this.angleSlider.angle = t.angle, this.denominatorInput.value = e.toString(), this.denominatorLabel.textContent = e.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = t.reducedAngle !== "";
    }
    Dn(t) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = t.flag);
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
    K(F`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(t) {
    let e = t.target;
    if (!Wl(e))
      throw new Error(`${e} isn't an angle-slider`);
    this.angleInput.value = e.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(t) {
    let e = t.target;
    if (!Wl(e))
      throw new Error(`${e} isn't an angle-slider`);
    this.angleInput.value = e.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let t = this.angleInput.getAttribute("data-original-value");
    U.notNull(t), this.angleInput.value = t;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let t = this.angleInput.value;
    if (Ku(t)) {
      let e, i = $i(t);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Zu(t, "-2\u03C0") ? (e = `-${i * 2}\u03C0/${i}`, this.angleInput.value = e) : Qu(t, "2\u03C0") ? (e = `${i * 2}\u03C0/${i}`, this.angleInput.value = e) : e = t, this.backupCurrentPhi(), this.angleSlider.angle = e, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    let t = this.denominatorInput.getAttribute("data-original-value");
    U.notNull(t), this.denominatorInput.value = t, this.denominatorLabel.textContent = t;
  }
  changeDenominator() {
    let t = this.denominatorInput.value;
    jp(t) && parseInt(t) > 1 ? (this.denominatorLabel.textContent = t, this.angleSlider.denominator = parseInt(t), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "_e");
u(_e, "OperationInspectorElement"), A([wt], _e.prototype, "ifInput", 2), A([wt], _e.prototype, "angleInputLabel", 2), A([wt], _e.prototype, "angleInput", 2), A([wt], _e.prototype, "angleSlider", 2), A([wt], _e.prototype, "denominatorInput", 2), A([wt], _e.prototype, "denominatorVariableLabel", 2), A([wt], _e.prototype, "denominatorLabel", 2), A([wt], _e.prototype, "reduceAngleFractionCheckbox", 2), A([wt], _e.prototype, "flagInput", 2), A([z], _e.prototype, "conditionalGatePaneDisabled", 2), A([z], _e.prototype, "anglePaneDisabled", 2), A([z], _e.prototype, "conditionalFlagPaneDisabled", 2);
tt(_e);
var is = ni(md(), 1);
var He = /* @__PURE__ */ __name(class extends HTMLElement {
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
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.addPopupEventListeners());
  }
  update() {
    K(F`<style>
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
    let t = fe(this, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.popupTemplate === null)
      return;
    let e = document.importNode(this.popupTemplate.content, true), i = new is.default(this.amplitude), l = e.getElementById("qubit-circle-popup--header"), c = e.getElementById("qubit-circle-popup--ket-binary-value"), f = e.getElementById("qubit-circle-popup--ket-decimal-value"), b = e.getElementById("qubit-circle-popup--amplitude"), h = e.getElementById("qubit-circle-popup--amplitude-real-value"), d = e.getElementById("qubit-circle-popup--amplitude-imag-value"), m = e.getElementById("qubit-circle-popup--probability"), w = e.getElementById("qubit-circle-popup--probability-value"), y = e.getElementById("qubit-circle-popup--phase"), S = e.getElementById("qubit-circle-popup--phase-value");
    U.notNull(l), U.notNull(c), U.notNull(f), U.notNull(b), U.notNull(h), U.notNull(d), U.notNull(m), U.notNull(w), U.notNull(y), U.notNull(S), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (h.textContent = we(i.re, 5), d.textContent = `${we(i.im, 5)}i`) : b.style.display = "none", this.showPopupProbability ? w.textContent = `${we(this.magnitude * this.magnitude * 100, 4)}%` : m.style.display = "none", this.showPopupPhase ? S.textContent = `${we(this.phaseDeg, 2)}\xB0` : y.style.display = "none";
    let O = document.createElement("div");
    O.appendChild(e), t.setContent(O.innerHTML), t.show();
  }
  get magnitude() {
    return new is.default(this.amplitude).abs();
  }
  get phase() {
    return new is.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let t = this._tippy;
    U.notNull(t), t.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "He");
u(He, "QubitCircleElement"), A([z], He.prototype, "ket", 2), A([z], He.prototype, "qubitCount", 2), A([z], He.prototype, "amplitude", 2), A([z], He.prototype, "hidePhase", 2), A([z], He.prototype, "popupTemplateId", 2), A([z], He.prototype, "showPopupHeader", 2), A([z], He.prototype, "showPopupAmplitude", 2), A([z], He.prototype, "showPopupProbability", 2), A([z], He.prototype, "showPopupPhase", 2), He = A([tt], He);
var vd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var gd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Fn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = be({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (t, e) => {
      if (e.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), b = f.left + window.pageXOffset, h = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${e.clientX - (b + c)}px`, i.style.top = `${e.clientY - (h + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = ce(this.runCircuitButtonMachine).onTransition((t) => {
      this.debug && console.log(`run-circuit-button: ${ee(t.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(t, e, i) {
    e !== i && t === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    K(F`<style>
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
  handleClickEvent(t) {
    this.runCircuitButtonService.send({ type: "CLICK", clientX: t.clientX, clientY: t.clientY });
  }
  get reloadIcon() {
    return F([vd]);
  }
  get tailSpinIcon() {
    return F([gd]);
  }
}, "Fn");
u(Fn, "RunCircuitButtonElement"), A([z], Fn.prototype, "running", 2), A([z], Fn.prototype, "debug", 2), A([wt], Fn.prototype, "body", 2), A([wt], Fn.prototype, "ripple", 2);
tt(Fn);
var Wr = /* @__PURE__ */ __name(class extends HTMLElement {
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
      let t = window.getComputedStyle(this);
      this.marginTop = parseFloat(t.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(t.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
    }), this.attachShadow({ mode: "open" }), this.renderShadowRoot(), this.startViewSizeChangeEventListener();
  }
  startViewSizeChangeEventListener() {
    let t = window.matchMedia("(max-width: 639px)");
    t.addEventListener("change", () => this.handleViewSizeChange(t)), this.setMobileBreakpointFlag(t);
  }
  handleViewSizeChange(t) {
    this.setMobileBreakpointFlag(t);
    let e = window.getComputedStyle(this);
    this.marginTop = parseFloat(e.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(e.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
  }
  setMobileBreakpointFlag(t) {
    this.mobile = t.matches;
  }
  prepareAnimation() {
    this.mobile ? this.direction === "up" ? (this.style.bottom = "auto", this.style.top = `${window.innerHeight}px`) : this.direction === "down" && (this.style.top = `-${this.offsetHeight + this.marginTop}px`) : this.directionDesktop === "up" ? (this.style.bottom = "auto", this.style.top = `${window.innerHeight}px`) : this.directionDesktop === "down" && (this.style.top = `-${this.offsetHeight}px`);
  }
  startAnimation() {
    this.mobile ? this.direction === "up" ? this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)` }, { transform: `translateY(-${this.offsetHeight + this.marginBottom}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.direction === "down" && this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${this.offsetHeight + this.marginTop + 16}px)` }, { transform: `translateY(${this.offsetHeight + this.marginTop}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.directionDesktop === "up" ? this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)` }, { transform: `translateY(-${this.offsetHeight + this.marginBottom}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.directionDesktop === "down" && this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${this.offsetHeight + 16}px)` }, { transform: `translateY(${this.offsetHeight}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" });
  }
  renderShadowRoot() {
    K(F`<slot></slot>`, this.shadowRoot);
  }
}, "Wr");
u(Wr, "SlideInElement"), A([z], Wr.prototype, "direction", 2), A([z], Wr.prototype, "directionDesktop", 2), A([z], Wr.prototype, "duration", 2), A([z], Wr.prototype, "marginTop", 2), A([z], Wr.prototype, "marginBottom", 2), Wr = A([tt], Wr);
var sn = /* @__PURE__ */ __name(class extends HTMLElement {
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
    K(F`<style>
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
}, "sn");
u(sn, "CircuitBlockElement"), A([z], sn.prototype, "comment", 2), A([z], sn.prototype, "finalized", 2), sn = A([tt], sn);
var yd = ni(La(), 1);
var bd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Xl = u((r) => r != null && r instanceof Te, "isCircuitDropzoneElement");
var Oo;
var Te = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    la(this, Oo, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = be({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      U.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      U.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (t, e) => {
      e.type === "PUT_OPERATION" && (this.append(e.operation), this.operationName = e.operation.tagName.toLocaleLowerCase(), e.operation.snapped = true);
    }, deleteOperation: (t, e) => {
      e.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(e.operation));
    }, dispatchOccupiedEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-occupy", { bubbles: true }));
    }, dispatchDeleteOperationEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-operation-delete", { bubbles: true }));
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = ce(this.circuitDropzoneMachine).onTransition((t) => {
      this.debug && console.log(`circuit-dropzone: ${t.value}`);
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
    let t = this.getBoundingClientRect();
    return { x: window.pageXOffset + t.left + this.clientWidth / 2, y: window.pageYOffset + t.top + this.clientHeight / 2 };
  }
  toJson() {
    let t = this.operation;
    return t === null ? "1" : t.toJson();
  }
  connectedCallback() {
    let { signal: t } = ua(this, Oo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: t }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: t }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: t }), this.addEventListener("operation-delete", this.deleteOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = sa(this, Oo)) == null || t.abort();
  }
  update() {
    K(F`<style>
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
  put(t) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: t });
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, yd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
  deleteOperation(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: e });
  }
  get wireSvg() {
    return F([bd]);
  }
}, "Te");
u(Te, "CircuitDropzoneElement"), Oo = /* @__PURE__ */ new WeakMap(), A([z], Te.prototype, "operationName", 2), A([z], Te.prototype, "inputWireQuantum", 2), A([z], Te.prototype, "outputWireQuantum", 2), A([z], Te.prototype, "connectTop", 2), A([z], Te.prototype, "connectBottom", 2), A([z], Te.prototype, "shadow", 2), A([z], Te.prototype, "debug", 2);
tt(Te);
var ln = u((r) => r != null && r instanceof Re, "isCircuitStepElement");
var Nt = u((r, t) => Array.from(r.reduce((e, i, l, c) => {
  let f = t(i, l, c), b = e.get(f);
  return b ? b.push(i) : e.set(f, [i]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var Re = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = be({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (t, e) => {
      if (e.type !== "SNAP_DROPZONE" && e.type !== "OCCUPY_DROPZONE")
        return;
      let i = e.dropzone, l = this.bit(i);
      U.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (t, e) => {
      e.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (t, e) => {
      e.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (t, e) => {
      e.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = ce(this.circuitStepMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${ee(t.value)}`);
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
  attributeChangedCallback(t, e, i) {
    if (e !== i && (t === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), t === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), t === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    K(F`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(t) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let e = this.controlGateDropzones, i = this.controllableDropzones(t);
    for (let l of i)
      Sn(l.operation) && (l.operation.controls = []);
    if (this.updateSwapConnections(t), this.updatePhasePhaseConnections(t), e.length !== 0) {
      if (e.length === 1 && i.length === 0) {
        e[0].operation.disable();
        return;
      }
      i.length === 0 ? this.updateControlControlConnections(t) : this.updateControlledUConnections(t), this.updateFreeDropzoneConnections(t);
    }
  }
  updateSwapConnections(t) {
    let e = t == null ? void 0 : t.disableSwap, i = this.swapGateDropzones;
    if (i.length !== 2 || e)
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
  updatePhasePhaseConnections(t) {
    if (t == null ? void 0 : t.disablePhasePhase)
      return;
    let e = this.phaseGateDropzones;
    for (let i of e) {
      let l = i.operation;
      if (l.angle === "" || t !== void 0 && t.maxPhasePhaseTargetGates === 1)
        continue;
      let c = e.filter((f) => {
        if (!Eo(f.operation))
          throw new Error(`${f.operation} isn't a phase-gate element.`);
        return l.angle === f.operation.angle;
      }).map((f) => this.bit(f));
      t !== void 0 && t.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, t.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((f) => f < this.bit(i)), i.connectBottom = c.some((f) => f > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((h) => h.connectTop || h.connectBottom).map((h) => this.bit(h)), f = Math.min(...c), b = Math.max(...c);
      f < this.bit(i) && this.bit(i) < b && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(t) {
    let e = this.controlGateDropzones, i = e.map((c) => this.bit(c)), l = 0;
    t !== void 0 && (t.maxControlControlTargetGates === 1 ? i = [] : t.maxControlControlTargetGates > 1 && (i = i.slice(0, t.maxControlControlTargetGates)));
    for (let c of e) {
      l += 1;
      let f = c.operation;
      (t == null ? void 0 : t.disableControlControl) || t !== void 0 && (t.maxControlControlTargetGates === 1 || t.maxControlControlTargetGates > 0 && l > t.maxControlControlTargetGates) ? f.disable() : (f.enable(), c.connectTop = i.some((b) => this.bit(c) > b), c.connectBottom = i.some((b) => this.bit(c) < b));
    }
  }
  updateControlledUConnections(t) {
    let e = this.controllableDropzones(t), i = this.controlGateDropzones, l = [...new Set(e.map((m) => m.operationName))], c = this.numControlGateDropzones(t, l), f = i.map((m) => this.bit(m)), b = c === null ? f : f.slice(0, c), h = e.map((m) => this.bit(m)), d = b.concat(h);
    for (let [m, w] of Object.entries(i)) {
      let y = w.operation;
      w.connectBottom = d.some((S) => this.bit(w) < S), w.connectTop = d.some((S) => this.bit(w) > S), c === null || c !== null && parseInt(m) < c ? y.enable() : (w.connectTop = Math.max(...d) > this.bit(w), y.disable());
    }
    for (let m of e) {
      if (!Sn(m.operation))
        throw new Error(`${m.operation} isn't controllable.`);
      m.operation.controls = this.controlBits(m, f, t), m.connectTop = d.some((w) => w < this.bit(m)), m.connectBottom = d.some((w) => w > this.bit(m));
    }
  }
  updateFreeDropzoneConnections(t) {
    let e = this.controllableDropzones(t), i = this.controlGateDropzones.filter((h) => Fl(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), l = e.map((h) => this.bit(h)), c = i.concat(l), f = Math.min(...c), b = Math.max(...c);
    for (let h of this.freeDropzones)
      f < this.bit(h) && this.bit(h) < b && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(t, e, i) {
    let l = e;
    return i && (i.maxChControlGates > 0 && t.operationName === "h-gate" ? l = e.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && t.operationName === "x-gate" ? l = e.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && t.operationName === "y-gate" ? l = e.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && t.operationName === "z-gate" ? l = e.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && t.operationName === "phase-gate" ? l = e.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && t.operationName === "t-gate" ? l = e.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && t.operationName === "rnot-gate" ? l = e.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && t.operationName === "rx-gate" ? l = e.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && t.operationName === "ry-gate" ? l = e.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && t.operationName === "rz-gate" ? l = e.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && t.operationName === "swap-gate" && (l = e.slice(0, i.maxCswapControlGates))), l;
  }
  bit(t) {
    let e = this.dropzones.indexOf(t);
    return U.need(e !== -1, "circuit-dropzone not found."), e;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((t) => !t.occupied);
  }
  dropzoneAt(t) {
    let e = this.dropzones[t];
    return U.notNull(e), e;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get freeDropzones() {
    return this.dropzones.filter((t) => !t.occupied);
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let t = new Te();
    return t.shadow = this.shadow, this.append(t), t;
  }
  appendOperation(t) {
    let e = new Te();
    this.append(e), e.put(t);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((t) => t.occupied).filter((t) => t.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((t) => t.occupied).filter((t) => t.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((t) => t.occupied && Fl(t.operation));
  }
  numControlGateDropzones(t, e) {
    if (t === void 0)
      return null;
    let i = 0;
    return e.includes("h-gate") && !t.disableCh && t.maxChControlGates > i && (i = t.maxChControlGates), e.includes("x-gate") && !t.disableCnot && t.maxCnotControlGates > i && (i = t.maxCnotControlGates), e.includes("y-gate") && !t.disableCy && t.maxCyControlGates > i && (i = t.maxCyControlGates), e.includes("z-gate") && !t.disableCz && t.maxCzControlGates > i && (i = t.maxCzControlGates), e.includes("phase-gate") && !t.disableCphase && t.maxCphaseControlGates > i && (i = t.maxCphaseControlGates), e.includes("t-gate") && !t.disableCt && t.maxCtControlGates > i && (i = t.maxCtControlGates), e.includes("rnot-gate") && !t.disableCrnot && t.maxCrnotControlGates > i && (i = t.maxCrnotControlGates), e.includes("rx-gate") && !t.disableCrx && t.maxCrxControlGates > i && (i = t.maxCrxControlGates), e.includes("ry-gate") && !t.disableCry && t.maxCryControlGates > i && (i = t.maxCryControlGates), e.includes("rz-gate") && !t.disableCrz && t.maxCrzControlGates > i && (i = t.maxCrzControlGates), e.includes("swap-gate") && !t.disableCswap && t.maxCswapControlGates > i && (i = t.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(t) {
    let e = 0, i = 0, l = 0, c = 0, f = 0, b = 0, h = 0, d = 0, m = 0, w = 0;
    return this.dropzones.filter((y) => y.occupied).filter((y) => Sn(y.operation)).filter((y) => t === void 0 ? true : ed(y.operation) ? (e += 1, t.maxChTargetGates !== 0 && e > t.maxChTargetGates ? false : !t.disableCh) : rd(y.operation) ? (i += 1, t.maxCnotTargetGates !== 0 && i > t.maxCnotTargetGates ? false : !t.disableCnot) : nd(y.operation) ? (l += 1, t.maxCyTargetGates !== 0 && l > t.maxCyTargetGates ? false : !t.disableCy) : id(y.operation) ? (c += 1, t.maxCzTargetGates !== 0 && c > t.maxCzTargetGates ? false : !t.disableCz) : Eo(y.operation) ? (f += 1, t.maxCphaseTargetGates !== 0 && f > t.maxCphaseTargetGates ? false : !t.disableCphase) : od(y.operation) ? (b += 1, t.maxCtTargetGates !== 0 && b > t.maxCtTargetGates ? false : !t.disableCt) : ad(y.operation) ? (h += 1, t.maxCrnotTargetGates !== 0 && h > t.maxCrnotTargetGates ? false : !t.disableCrnot) : es(y.operation) ? (d += 1, t.maxCrxTargetGates !== 0 && d > t.maxCrxTargetGates ? false : !t.disableCrx) : rs(y.operation) ? (m += 1, t.maxCryTargetGates !== 0 && m > t.maxCryTargetGates ? false : !t.disableCry) : ns(y.operation) ? (w += 1, t.maxCrzTargetGates !== 0 && w > t.maxCrzTargetGates ? false : !t.disableCrz) : sd(y.operation) ? !t.disableCswap : true);
  }
  dispatchUpdateEvent() {
    this.dispatchEvent(new Event("circuit-step-update", { bubbles: true }));
  }
  deleteOperation(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: e });
  }
  dispatchMouseenterEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseenter", { bubbles: true }));
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseleave", { bubbles: true }));
  }
  maybeDispatchClickEvent(t) {
    Kt(t.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
  }
  snapDropzone(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: e });
  }
  unsnapDropzone(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: e });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: e });
  }
  serialize() {
    let t = [];
    for (let [e, i] of Nt(this.operations, (l) => l.constructor))
      switch (e) {
        case Je: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.if))
            for (let [b, h] of Nt(f, (d) => d.controls.toString())) {
              let d = h[0], m = d.operationType, w = h.map((S) => S.bit), y = { type: m, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), t.push(y);
            }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.if))
            for (let [b, h] of Nt(f, (d) => d.controls.toString())) {
              let d = h[0], m = d.operationType, w = h.map((S) => S.bit), y = { type: m, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), t.push(y);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.if))
            for (let [b, h] of Nt(f, (d) => d.controls.toString())) {
              let d = h[0], m = d.operationType, w = h.map((S) => S.bit), y = { type: m, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), t.push(y);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.if))
            for (let [b, h] of Nt(f, (d) => d.controls.toString())) {
              let d = h[0], m = d.operationType, w = h.map((S) => S.bit), y = { type: m, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), t.push(y);
            }
          break;
        }
        case er: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.angle))
            for (let [b, h] of Nt(f, (d) => d.if))
              for (let [d, m] of Nt(h, (w) => w.controls.toString())) {
                let w = m[0], y = w.operationType, S = m.map((P) => P.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), t.push(O);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.if))
            for (let [b, h] of Nt(f, (d) => d.controls.toString())) {
              let d = h[0], m = d.operationType, w = h.map((S) => S.bit), y = { type: m, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), t.push(y);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.if))
            for (let [b, h] of Nt(f, (d) => d.controls.toString())) {
              let d = h[0], m = d.operationType, w = h.map((S) => S.bit), y = { type: m, targets: w };
              c !== "" && (y.if = c), b !== "" && (y.controls = d.controls), t.push(y);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.angle))
            for (let [b, h] of Nt(f, (d) => d.if))
              for (let [d, m] of Nt(h, (w) => w.controls.toString())) {
                let w = m[0], y = w.operationType, S = m.map((P) => P.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), t.push(O);
              }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.angle))
            for (let [b, h] of Nt(f, (d) => d.if))
              for (let [d, m] of Nt(h, (w) => w.controls.toString())) {
                let w = m[0], y = w.operationType, S = m.map((P) => P.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), t.push(O);
              }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.angle))
            for (let [b, h] of Nt(f, (d) => d.if))
              for (let [d, m] of Nt(h, (w) => w.controls.toString())) {
                let w = m[0], y = w.operationType, S = m.map((P) => P.bit), O = { type: y, targets: S };
                b !== "" && (O.if = b), c !== "" && (O.angle = c), d !== "" && (O.controls = w.controls), t.push(O);
              }
          break;
        }
        case ar: {
          let l = i.filter((h) => !h.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, b = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (b.controls = f), t.push(b);
          break;
        }
        case je: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => Sn(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          t.push({ type: l[0].operationType, targets: c });
          break;
        }
        case ae: {
          let l = i, c = i.map((f) => f.bit);
          t.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Be: {
          let l = i;
          for (let [, c] of Nt(l, (f) => f.value)) {
            let f = c.map((b) => b.bit);
            t.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, f] of Nt(l, (b) => b.flag)) {
            let b = f.map((m) => m.bit), d = { type: f[0].operationType, targets: b };
            c !== "" && (d.flag = c), t.push(d);
          }
          break;
        }
        default:
          throw new ue("Unrecognized operation", { klass: e });
      }
    return t;
  }
  get operations() {
    return this.dropzones.filter((t) => t.occupied).map((t) => t.operation).filter((t) => t !== null);
  }
  toJson() {
    let t = this.dropzones.map((e) => e.toJson());
    for (; t.length > 0 && t[t.length - 1] === "1"; )
      t.pop();
    return t.length === 0 ? "[1]" : `[${t.join(",")}]`;
  }
}, "Re");
u(Re, "CircuitStepElement"), A([z], Re.prototype, "active", 2), A([z], Re.prototype, "breakpoint", 2), A([z], Re.prototype, "shadow", 2), A([z], Re.prototype, "keep", 2), A([z], Re.prototype, "debug", 2);
tt(Re);
var Ei = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = be({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (t, e) => {
      if (e.type !== "GRAB_OPERATION")
        return;
      let i = e.operation;
      $l(i) && i.menu && i.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (t, e) => {
      e.type === "GRAB_OPERATION" && this.circuit.activateOperation(e.operation);
    }, snapOperationIntoDropzone: (t, e) => {
      if (e.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let i = e.operation, l = this.circuit.snapTargetAt(e.x, e.y);
      if (i.snapped = true, l.dropzone === null) {
        let c = l.stepIndex;
        U.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), b = f.dropzones[l.wireIndex];
        U.notNull(b), b.append(i), b.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
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
    }, setSnapTargets: (t, e) => {
      e.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(e.operation);
    }, setBreakpoint: (t, e) => {
      e.type === "CLICK_STEP" && this.circuit.setBreakpoint(e.step);
    }, activateStep: (t, e) => {
      e.type !== "MOUSE_ENTER_STEP" && e.type !== "SNAP_STEP" || (e.step.active = true);
    }, deactivateStep: (t, e) => {
      e.type !== "MOUSE_LEAVE_STEP" && e.type !== "UNSNAP_STEP" || (e.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (t, e) => {
      e.type !== "END_DRAGGING_OPERATION" || e.operation.snapped || this.inspectorButton !== void 0 && (!this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes());
    }, initOperationMenu: (t, e) => {
      if (e.type !== "DROP_OPERATION")
        return;
      let i = e.operation;
      $l(i) && i.initMenu();
    }, showOperationMenu: (t, e) => {
      e.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || e.operation.showMenu());
    }, showOperationInspectorIf: (t, e) => {
      e.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(e.operation);
    }, showOperationInspectorAngle: (t, e) => {
      e.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(e.operation);
    }, showOperationInspectorFlag: (t, e) => {
      e.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(e.operation);
    }, setOperationIf: (t, e) => {
      e.type === "SET_OPERATION_IF" && (e.operation.if = e.if);
    }, setOperationAngle: (t, e) => {
      e.type === "SET_OPERATION_ANGLE" && (e.operation.angle = e.angle, e.operation.reducedAngle = e.reducedAngle);
    }, setOperationFlag: (t, e) => {
      e.type === "SET_OPERATION_FLAG" && (e.operation.flag = e.flag);
    }, maybeUpdateOperationInspector: (t, e) => {
      if (e.type !== "ACTIVATE_OPERATION" || this.inspectorButton === void 0)
        return;
      let i = e.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(i);
    } } });
    this.circuitEditorService = ce(this.circuitEditorMachine).onTransition((t) => {
      this.debug && console.log(`circuit-editor: ${ee(t.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable-init", this.enableDragging), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    K(F`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(t) {
    let e = t.target;
    if (Wc(e))
      e.draggable = true;
    else
      throw new ue("Not a draggable element.", { el: e });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(t) {
    if (t.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let i of this.circuit.operations)
        i.initMenu();
    }
  }
  maybeDeactivateOperation(t) {
    var i;
    let e = t.target;
    !Kt(e) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(e)) && !this.inspectorButton.popup.reference.contains(e) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: e });
  }
  showOperationMenu(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: e });
  }
  showOperationInspectorIf(t) {
    let e = t.target;
    if (!Hr(e))
      throw new Error(`${e} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: e });
  }
  showOperationInspectorAngle(t) {
    let e = t.target;
    if (!En(e))
      throw new Error(`${e} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: e });
  }
  showOperationInspectorFlag(t) {
    let e = t.target;
    if (!Dn(e))
      throw new Error(`${e} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: e });
  }
  setOperationIf(t) {
    let e = t.target, i = this.activeOperation;
    if (!Hr(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: e.if });
  }
  setOperationAngle(t) {
    let e = t.target, i = this.activeOperation;
    if (U.notNull(i), !En(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: e.angle, reducedAngle: e.reduceAngleFraction ? e.reducedAngle : "" });
  }
  setOperationFlag(t) {
    let e = t.target, i = this.activeOperation;
    if (!Dn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: e.flag });
  }
  grabOperation(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: e });
  }
  releaseOperation(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: e });
  }
  endDraggingOperation(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: e });
  }
  dropOperation(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: e });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(t) {
    let e = t.target;
    if (!ln(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: e });
  }
  snapStep(t) {
    let e = t.target;
    if (!ln(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: e });
  }
  unsnapStep(t) {
    let e = t.target;
    if (!ln(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: e });
  }
  operationInSnapRange(t) {
    let e = t.target;
    if (!Kt(e))
      throw new Error(`${e} must be an Operation.`);
    let l = t.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: e, x: c, y: f });
  }
  mouseEnterStep(t) {
    if (this.circuit.editing)
      return;
    let e = t.target;
    if (!ln(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: e });
  }
  mouseLeaveStep(t) {
    if (this.circuit.editing)
      return;
    let e = t.target;
    if (!ln(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: e });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "Ei");
u(Ei, "CircuitEditorElement"), A([z], Ei.prototype, "debug", 2), A([wt], Ei.prototype, "circuit", 2), A([wt], Ei.prototype, "inspectorButton", 2);
tt(Ei);
var Mo;
var Zl = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    la(this, Mo, null);
  }
  connectedCallback() {
    let { signal: t } = ua(this, Mo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: t }), this.addEventListener("operation-delete", this.deleteOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = sa(this, Mo)) == null || t.abort();
  }
  update() {
    K(F`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(t) {
    t.draggable = true, t.snapped = true, t.grabbed = false, ql(t) && t.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((t) => Kt(t));
  }
  newOperation(t) {
    let e = t.target;
    this.assertOperation(e);
    let i = e.cloneNode(false);
    this.assertOperation(i), ql(e) && e.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(t) {
    let e = t.target;
    this.assertOperation(e), this.removeChild(e);
  }
  assertOperation(t) {
    if (!Kt(t))
      throw new TypeError(`${t} isn't an operation.`);
  }
}, "Zl");
u(Zl, "PaletteDropzoneElement"), Mo = /* @__PURE__ */ new WeakMap();
tt(Zl);
var st = /* @__PURE__ */ __name(class extends xt(HTMLElement) {
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
    this.quantumCircuitMachine = be({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = ce(this.quantumCircuitMachine).onTransition((t) => {
      this.debug && console.log(`quantum-circuit: ${t.value}`);
    }).start();
    this.cx = this.cnot;
  }
  get wireCount() {
    return this.stepAt(0).wireCount;
  }
  get activeStepIndex() {
    let t = this.activeStep;
    return t === null ? null : this.fetchStepIndex(t);
  }
  get activeStep() {
    return this.steps.find((e) => e.active) || null;
  }
  fetchStepIndex(t) {
    let e = this.steps.indexOf(t);
    return U.need(e !== -1, `circuit-step index of ${t} not found.`), e;
  }
  get steps() {
    return Array.from(this.querySelectorAll("circuit-step"));
  }
  get emptySteps() {
    return this.steps.filter((t) => t.isEmpty);
  }
  get nonEmptySteps() {
    return this.steps.filter((t) => !t.isEmpty);
  }
  get largestStep() {
    let t = null, e = 0;
    for (let i of this.steps)
      i.wireCount > 0 && i.wireCount > e && (t = i, e = i.wireCount);
    return t;
  }
  appendMinimumSteps() {
    let t = this.minStepCount - this.steps.length;
    for (let e = 0; e < t; e++)
      this.append(new Re());
  }
  stepAt(t) {
    let e = this.steps[t];
    return U.notNull(e), e;
  }
  addShadowStepAfter(t) {
    let e = new Re();
    e.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      e.appendDropzone();
    if (t === -1)
      this.prepend(e);
    else {
      let i = this.steps[t];
      U.notNull(i.parentElement), i.parentElement.insertBefore(e, i.nextSibling);
    }
    return e;
  }
  activateStep(t) {
    t.active = true;
  }
  deactivateAllSteps() {
    for (let t of this.steps)
      t.active = false;
  }
  setBreakpoint(t) {
    for (let e of this.steps)
      e.breakpoint = false;
    t.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((e) => e.breakpoint) || null;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get operations() {
    return this.dropzones.map((t) => t.operation).filter((t) => t !== null);
  }
  get isVertical() {
    return window.getComputedStyle(this).flexDirection === "column";
  }
  connectedCallback() {
    if (this.attachShadow({ mode: "open" }), this.update(), this.hasAttribute("data-update-url")) {
      let t = this.urlJson;
      this.loadFromJson(t);
    }
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(t, e, i) {
    e !== i && (t === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), t === "data-hoverable" && i !== null && this.makeOperationsHoverable(), t === "data-json" && i !== "" && i !== null && (this.loadFromJson(i), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let t of this.operations)
      t.hoverable = true;
  }
  update() {
    K(F`<slot></slot>`, this.shadowRoot);
  }
  updateStep(t) {
    let e = t.target;
    this.updateStepOperationAttributes(e);
  }
  updateStepOperationAttributes(t) {
    t.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("quantum-circuit-mouseleave", { bubbles: true }));
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new Je();
      return i && l.disable(), l;
    }, ...e), this.resize(), this;
  }
  x(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new lr();
      return i && l.disable(), l;
    }, ...e), this;
  }
  y(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ur();
      return i && l.disable(), l;
    }, ...e), this;
  }
  z(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new cr();
      return i && l.disable(), l;
    }, ...e), this;
  }
  phase(...t) {
    let e = "", i, l;
    if (typeof t[0] == "number")
      i = t;
    else if (typeof t[0] == "string")
      e = t[0], i = t.slice(1);
    else {
      let f = t[0];
      i = f.targets, l = f.disabled;
    }
    let c = this.applyOperationToTargets(() => {
      let f = new er();
      return f.angle = e, l && f.disable(), f;
    }, ...i);
    return i.length > 1 && this.updateStepOperationAttributes(c), this;
  }
  t(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new sr();
      return i && l.disable(), l;
    }, ...e), this.resize(), this;
  }
  rnot(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new rr();
      return i && l.disable(), l;
    }, ...e), this;
  }
  rx(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new nr();
      return i && l.disable(), l;
    }, ...e), this;
  }
  ry(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ir();
      return i && l.disable(), l;
    }, ...e), this;
  }
  rz(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let l = t[0];
      e = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new or();
      return i && l.disable(), l;
    }, ...e), this;
  }
  swap(...t) {
    let e = this.applyOperationToTargets(() => new ar(), ...t);
    return this.updateStepOperationAttributes(e), this;
  }
  control(...t) {
    let e = this.applyOperationToTargets(() => new je(), ...t);
    return this.updateStepOperationAttributes(e), this;
  }
  bloch(...t) {
    return this.applyOperationToTargets(() => new ae(), ...t), this;
  }
  write(t, ...e) {
    return this.applyOperationToTargets(() => {
      let i = new Be();
      return i.value = t, i;
    }, ...e), this.resize(), this;
  }
  measure(...t) {
    return this.applyOperationToTargets(() => new tr(), ...t), this.resize(), this;
  }
  applyOperationToTargets(t, ...e) {
    let i = Math.max(...e) + 1, l = this.appendStepWithDropzones(i);
    for (let c of e) {
      let f = t();
      l.dropzoneAt(c).put(f);
    }
    return l;
  }
  ch(t, e) {
    return this.controlledU(Je, t, e), this;
  }
  cnot(t, e) {
    return this.controlledU(lr, t, e), this.resize(), this;
  }
  cy(t, e) {
    return this.controlledU(ur, t, e), this;
  }
  cz(t, e) {
    return this.controlledU(cr, t, e), this;
  }
  cphase(t, e) {
    return this.controlledU(er, t, e), this;
  }
  ct(t, e) {
    return this.controlledU(sr, t, e), this;
  }
  crnot(t, e) {
    return this.controlledU(rr, t, e), this;
  }
  crx(t, e) {
    return this.controlledU(nr, t, e), this;
  }
  cry(t, e) {
    return this.controlledU(ir, t, e), this;
  }
  crz(t, e) {
    return this.controlledU(or, t, e), this;
  }
  cswap(t, e) {
    return this.controlledU(ar, t, e), this;
  }
  cc(...t) {
    let e = Math.max(...t) + 1, i = this.appendStepWithDropzones(e);
    for (let l of t)
      i.dropzoneAt(l).put(new je());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(t, e, i) {
    let l = [].concat(e), c = [].concat(i), f = l.concat(c), b = Math.max(...f) + 1, h = this.appendStepWithDropzones(b);
    for (let d of l)
      h.dropzoneAt(d).put(new je());
    for (let d of c)
      h.dropzoneAt(d).put(new t());
    this.appendMinimumWires(), this.updateStepOperationAttributes(h);
  }
  appendStep() {
    let t = new Re(), e = this.blocks.slice(-1)[0] || null;
    return e === null || e.finalized ? this.append(t) : e.append(t), t;
  }
  appendStepWithDropzones(t) {
    let e = new Re();
    this.append(e);
    for (let i = 0; i < t; i++) {
      let l = new Te();
      e.append(l);
    }
    return e;
  }
  updateAllWires() {
    let t = this.steps[0];
    if (t === void 0)
      return;
    let e = t.dropzones.length;
    for (let i = 0; i < e; i++)
      this.updateWire(i);
  }
  activateOperation(t) {
    for (let e of this.operations)
      e.active = false;
    t.active = true;
  }
  appendWire() {
    for (let t of this.steps)
      t.appendDropzone();
  }
  removeLastEmptyWires() {
    for (; this.steps.every((t) => t.wireCount > this.minWireCount && !t.lastDropzone.occupied); )
      for (let t of this.steps)
        t.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let t of this.emptySteps)
      t.remove();
  }
  loadFromJson(t) {
    this.innerHTML = "";
    let e = null;
    if (t === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let i = JSON.parse(t);
    this.circuitTitle = (i.title || "").trim();
    let l = false;
    for (let c of i.cols) {
      let f = this.appendStep();
      l && (f.keep = true, l = false);
      for (let b of c) {
        switch (true) {
          case /^\|0>$/.test(b): {
            let h = new Be();
            h.value = "0", f.appendOperation(h);
            break;
          }
          case /^\|1>$/.test(b): {
            let h = new Be();
            h.value = "1", f.appendOperation(h);
            break;
          }
          case /^H/.test(b): {
            let h = new Je();
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
            let h = new er();
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
          case /^Swap$/.test(b): {
            let h = new ar();
            f.appendOperation(h);
            break;
          }
          case /^•$/.test(b): {
            let h = new je();
            f.appendOperation(h);
            break;
          }
          case /^Bloch$/.test(b): {
            let h = new ae();
            f.appendOperation(h);
            break;
          }
          case /^Measure/.test(b): {
            let h = new tr(), d = ((/^>(.+)$/.exec(b.slice(7)) || [])[1] || "").trim();
            h.flag = d, f.appendOperation(h);
            break;
          }
          case /^[[{](.+)$/.test(b): {
            let h = b.slice(1);
            f.remove(), e = new sn(), e.comment = h, e.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(e);
            break;
          }
          case /^[\]}]$/.test(b): {
            f.remove(), e.finalize(), l = true;
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
  ifVariable(t) {
    return ((/^<(.+)$/.exec(t) || [])[1] || "").trim();
  }
  angleParameter(t) {
    return ((/^\((.+)\)$/.exec(t) || [])[1] || "").trim().replace("_", "/");
  }
  appendMinimumWires() {
    let t = this.largestStep, e = t && t.wireCount > this.minWireCount ? t.wireCount : this.minWireCount;
    for (let i of this.steps) {
      let l = e - i.wireCount;
      for (let c = 0; c < l; c++)
        i.appendDropzone();
    }
  }
  updateWire(t) {
    let e = false;
    for (let i of this.steps) {
      let l = i.dropzoneAt(t);
      if (l.inputWireQuantum = e, l.operationName === "write-gate")
        l.inputWireQuantum = e, l.outputWireQuantum = true, e = true;
      else if (l.operationName === "measurement-gate")
        l.inputWireQuantum = e, l.outputWireQuantum = false, e = false;
      else if (l.operationName === "swap-gate") {
        let c = i.dropzones.filter((f) => f.operationName === "swap-gate");
        if (c.length === 2) {
          let f = c.map((m) => i.bit(m)), b = i.bit(l), h = f[0] === b ? f[1] : f[0], d = i.dropzoneAt(h);
          l.inputWireQuantum = e, l.outputWireQuantum = d.inputWireQuantum, e = d.inputWireQuantum;
        } else
          l.inputWireQuantum = e, l.outputWireQuantum = e;
      } else
        l.inputWireQuantum = e, l.outputWireQuantum = e;
    }
  }
  updateChangedWire(t) {
    let e = t.target;
    if (!ln(e))
      throw new Error(`${e} isn't a circuit-step.`);
    let i = t.detail.dropzone;
    if (!Xl(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = e.dropzones.indexOf(i);
    U.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  snapTargetAt(t, e) {
    return this.isVertical ? this.snapTargets[e][t] : this.snapTargets[t][e];
  }
  setSnapTargets(t) {
    let e = this.dropzones.filter((c) => !c.occupied), i = [];
    this.snapTargets = {};
    let l = t.dropzone;
    Xl(l) && e.push(l);
    for (let [c, f] of Object.entries(this.dropzones)) {
      let b = f.snapTarget, h = this.isVertical ? b.y : b.x, d = this.isVertical ? b.x : b.y, m = parseInt(c) % this.wireCount, w = h - t.snapRange * 0.75, y = h + t.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: d, y: w }) : i.push({ x: w, y: d }), this.snapTargets[w] === void 0 && (this.snapTargets[w] = {}), this.snapTargets[w][d] === void 0 && (this.snapTargets[w][d] = { dropzone: null, stepIndex: -1, wireIndex: m })), this.isVertical ? i.push({ x: d, y }) : i.push({ x: y, y: d }), this.snapTargets[y] === void 0 && (this.snapTargets[y] = {}), this.snapTargets[y][d] === void 0 && (this.snapTargets[y][d] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: m }), (!f.occupied || f === l) && i.push(b), this.snapTargets[h] === void 0 && (this.snapTargets[h] = {}), this.snapTargets[h][d] === void 0 && (this.snapTargets[h][d] = { dropzone: f, stepIndex: null, wireIndex: m });
    }
    t.snapTargets = i;
  }
  updateSnapTargets(t) {
    let e = t[0];
    U.notNull(e);
    let i = this.isVertical ? e.snapTarget.y : e.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let b = c[f];
          b.stepIndex !== null && (b.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(t)) {
      let f = c.snapTarget, b = this.isVertical ? f.y : f.x, h = this.isVertical ? f.x : f.y;
      U.notNull(this.snapTargets[b]), this.snapTargets[b][h] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
    }
  }
  serialize() {
    return this.steps.map((t) => t.serialize());
  }
  get urlJson() {
    let t = window.location.href.toString().split(window.location.host)[1].slice(1);
    return decodeURIComponent(t);
  }
  clear() {
    history.pushState("", "", encodeURIComponent('{"cols":[]}')), location.reload();
  }
  toJson() {
    let t = false, e = [];
    for (let i of this.nonEmptySteps) {
      if (i.isInBlock) {
        if (!t) {
          let l = i.block;
          e.push(`["[${l.comment}"]`), t = true;
        }
      } else
        t && (e.push('["]"]'), t = false);
      e.push(i.toJson());
    }
    return t && e.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${e.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${e.join(",")}]}`;
  }
}, "st");
u(st, "QuantumCircuitElement"), A([z], st.prototype, "minStepCount", 2), A([z], st.prototype, "minWireCount", 2), A([z], st.prototype, "maxWireCount", 2), A([z], st.prototype, "editing", 2), A([z], st.prototype, "updateUrl", 2), A([z], st.prototype, "json", 2), A([z], st.prototype, "circuitTitle", 2), A([z], st.prototype, "debug", 2), A([z], st.prototype, "chDisabled", 2), A([z], st.prototype, "chMaxControlGates", 2), A([z], st.prototype, "chMaxTargetGates", 2), A([z], st.prototype, "cnotDisabled", 2), A([z], st.prototype, "cnotMaxControlGates", 2), A([z], st.prototype, "cnotMaxTargetGates", 2), A([z], st.prototype, "cyDisabled", 2), A([z], st.prototype, "cyMaxControlGates", 2), A([z], st.prototype, "cyMaxTargetGates", 2), A([z], st.prototype, "czDisabled", 2), A([z], st.prototype, "czMaxControlGates", 2), A([z], st.prototype, "czMaxTargetGates", 2), A([z], st.prototype, "cphaseDisabled", 2), A([z], st.prototype, "cphaseMaxControlGates", 2), A([z], st.prototype, "cphaseMaxTargetGates", 2), A([z], st.prototype, "ctDisabled", 2), A([z], st.prototype, "ctMaxControlGates", 2), A([z], st.prototype, "ctMaxTargetGates", 2), A([z], st.prototype, "crnotDisabled", 2), A([z], st.prototype, "crnotMaxControlGates", 2), A([z], st.prototype, "crnotMaxTargetGates", 2), A([z], st.prototype, "crxDisabled", 2), A([z], st.prototype, "crxMaxControlGates", 2), A([z], st.prototype, "crxMaxTargetGates", 2), A([z], st.prototype, "cryDisabled", 2), A([z], st.prototype, "cryMaxControlGates", 2), A([z], st.prototype, "cryMaxTargetGates", 2), A([z], st.prototype, "crzDisabled", 2), A([z], st.prototype, "crzMaxControlGates", 2), A([z], st.prototype, "crzMaxTargetGates", 2), A([z], st.prototype, "cswapDisabled", 2), A([z], st.prototype, "cswapMaxControlGates", 2), A([z], st.prototype, "swapDisabled", 2), A([z], st.prototype, "controlControlDisabled", 2), A([z], st.prototype, "controlControlMaxTargetGates", 2), A([z], st.prototype, "phasePhaseDisabled", 2), A([z], st.prototype, "phasePhaseMaxTargetGates", 2), A([re], st.prototype, "blocks", 2);
tt(st);
var Wn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-delete", this.maybeUpdateUrl), this.addEventListener("operation-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.freshRun), this.addEventListener("circuit-step-unsnap", this.freshRun), this.addEventListener("circuit-step-update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    K(F`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(t) {
    var l;
    let e = t.data, i = this.activeStepIndex;
    switch (e.type) {
      case "step": {
        let c = this.circuit.stepAt(e.step);
        for (let f in e.blochVectors) {
          let b = parseInt(f), h = c.dropzoneAt(b).operation;
          if (ld(h)) {
            let d = e.blochVectors[b];
            h.x = d[0], h.y = d[1], h.z = d[2];
          }
        }
        if (e.measuredBits) {
          let f = e.measuredBits;
          for (let b in f) {
            let h = parseInt(b), d = c.dropzoneAt(h).operation;
            ud(d) && (d.value = f[h].toString());
          }
        }
        for (let f of c.dropzones) {
          let b = f.operation;
          !Hr(b) || b.if !== "" && (b.disabled = !e.flags[b.if]);
        }
        if (i === e.step) {
          let f = {};
          for (let b in e.amplitudes) {
            let h = e.amplitudes[b];
            f[b] = new Xe(h[0], h[1]);
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
        throw new ue("Unknown service worker message", { data: e });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(t) {
    let e = this.activeStepIndex, i = this.circuit.serialize();
    U.need(i.length > 0, "non-zero step length");
    let l = this.circuit.toJson(), c = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: c, stepIndex: e, circuitJson: l, invalidateCaches: t, steps: i, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let t = this.circuit.serialize();
    U.need(t.length > 0, "non-zero step length");
    let e = Math.max(...t.map((l) => Math.max(...l.map((c) => {
      let f = [];
      return Sn(c) && (f = c.controls), Math.max(...c.targets.concat(f));
    })))), i = e >= 0 ? e + 1 : 1;
    return this.circleNotation.qubitCount = i, i;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let t = this.circuit.activeStep, e = this.circuit.breakpoint, i = t || e;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    U.notNull(this.circuit);
    let t = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(t));
  }
}, "Wn");
u(Wn, "QuantumSimulatorElement"), A([z], Wn.prototype, "updateUrl", 2), A([wt], Wn.prototype, "circuit", 2), A([wt], Wn.prototype, "circleNotation", 2), A([re], Wn.prototype, "runCircuitButtons", 2);
tt(Wn);

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
  Xe as Complex
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
