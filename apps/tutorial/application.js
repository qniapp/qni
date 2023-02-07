var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var xh = Object.create;
var pa = Object.defineProperty;
var ic = Object.getOwnPropertyDescriptor;
var Eh = Object.getOwnPropertyNames;
var Sh = Object.getPrototypeOf;
var Ch = Object.prototype.hasOwnProperty;
var c = /* @__PURE__ */ __name((t, n) => pa(t, "name", { value: n, configurable: true }), "c");
var da = /* @__PURE__ */ __name((t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports), "da");
var Th = /* @__PURE__ */ __name((t, n, e, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let a of Eh(n))
      !Ch.call(t, a) && a !== e && pa(t, a, { get: () => n[a], enumerable: !(r = ic(n, a)) || r.enumerable });
  return t;
}, "Th");
var _n = /* @__PURE__ */ __name((t, n, e) => (e = t != null ? xh(Sh(t)) : {}, Th(n || !t || !t.__esModule ? pa(e, "default", { value: t, enumerable: true }) : e, t)), "_n");
var M = /* @__PURE__ */ __name((t, n, e, r) => {
  for (var a = r > 1 ? void 0 : r ? ic(n, e) : n, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (a = (r ? h(n, e, a) : h(a)) || a);
  return r && a && pa(n, e, a), a;
}, "M");
var oc = /* @__PURE__ */ __name((t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
}, "oc");
var fa = /* @__PURE__ */ __name((t, n, e) => (oc(t, n, "read from private field"), e ? e.call(t) : n.get(t)), "fa");
var ha = /* @__PURE__ */ __name((t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, "ha");
var va = /* @__PURE__ */ __name((t, n, e, r) => (oc(t, n, "write to private field"), r ? r.call(t, e) : n.set(t, e), e), "va");
var sc = da((Vs, ac) => {
  (function(t) {
    "use strict";
    var n = 2e3, e = { s: 1, n: 0, d: 1 };
    function r(E, S) {
      if (isNaN(E = parseInt(E, 10)))
        throw y.InvalidParameter;
      return E * S;
    }
    __name(r, "r");
    c(r, "assign");
    function a(E, S) {
      if (S === 0)
        throw y.DivisionByZero;
      var C = Object.create(y.prototype);
      C.s = E < 0 ? -1 : 1, E = E < 0 ? -E : E;
      var T = f(E, S);
      return C.n = E / T, C.d = S / T, C;
    }
    __name(a, "a");
    c(a, "newFraction");
    function u(E) {
      for (var S = {}, C = E, T = 2, z = 4; z <= C; ) {
        for (; C % T === 0; )
          C /= T, S[T] = (S[T] || 0) + 1;
        z += 1 + 2 * T++;
      }
      return C !== E ? C > 1 && (S[C] = (S[C] || 0) + 1) : S[E] = (S[E] || 0) + 1, S;
    }
    __name(u, "u");
    c(u, "factorize");
    var h = c(function(E, S) {
      var C = 0, T = 1, z = 1, k = 0, j = 0, $ = 0, A = 1, ee = 1, R = 0, H = 1, K = 1, te = 1, le = 1e7, Y;
      if (E != null)
        if (S !== void 0) {
          if (C = E, T = S, z = C * T, C % 1 !== 0 || T % 1 !== 0)
            throw y.NonIntegerParameter;
        } else
          switch (typeof E) {
            case "object": {
              if ("d" in E && "n" in E)
                C = E.n, T = E.d, "s" in E && (C *= E.s);
              else if (0 in E)
                C = E[0], 1 in E && (T = E[1]);
              else
                throw y.InvalidParameter;
              z = C * T;
              break;
            }
            case "number": {
              if (E < 0 && (z = E, E = -E), E % 1 === 0)
                C = E;
              else if (E > 0) {
                for (E >= 1 && (ee = Math.pow(10, Math.floor(1 + Math.log(E) / Math.LN10)), E /= ee); H <= le && te <= le; )
                  if (Y = (R + K) / (H + te), E === Y) {
                    H + te <= le ? (C = R + K, T = H + te) : te > H ? (C = K, T = te) : (C = R, T = H);
                    break;
                  } else
                    E > Y ? (R += K, H += te) : (K += R, te += H), H > le ? (C = K, T = te) : (C = R, T = H);
                C *= ee;
              } else
                (isNaN(E) || isNaN(S)) && (T = C = NaN);
              break;
            }
            case "string": {
              if (H = E.match(/\d+|./g), H === null)
                throw y.InvalidParameter;
              if (H[R] === "-" ? (z = -1, R++) : H[R] === "+" && R++, H.length === R + 1 ? j = r(H[R++], z) : H[R + 1] === "." || H[R] === "." ? (H[R] !== "." && (k = r(H[R++], z)), R++, (R + 1 === H.length || H[R + 1] === "(" && H[R + 3] === ")" || H[R + 1] === "'" && H[R + 3] === "'") && (j = r(H[R], z), A = Math.pow(10, H[R].length), R++), (H[R] === "(" && H[R + 2] === ")" || H[R] === "'" && H[R + 2] === "'") && ($ = r(H[R + 1], z), ee = Math.pow(10, H[R + 1].length) - 1, R += 3)) : H[R + 1] === "/" || H[R + 1] === ":" ? (j = r(H[R], z), A = r(H[R + 2], 1), R += 3) : H[R + 3] === "/" && H[R + 1] === " " && (k = r(H[R], z), j = r(H[R + 2], z), A = r(H[R + 4], 1), R += 5), H.length <= R) {
                T = A * ee, z = C = $ + T * k + ee * j;
                break;
              }
            }
            default:
              throw y.InvalidParameter;
          }
      if (T === 0)
        throw y.DivisionByZero;
      e.s = z < 0 ? -1 : 1, e.n = Math.abs(C), e.d = Math.abs(T);
    }, "parse");
    function b(E, S, C) {
      for (var T = 1; S > 0; E = E * E % C, S >>= 1)
        S & 1 && (T = T * E % C);
      return T;
    }
    __name(b, "b");
    c(b, "modpow");
    function v(E, S) {
      for (; S % 2 === 0; S /= 2)
        ;
      for (; S % 5 === 0; S /= 5)
        ;
      if (S === 1)
        return 0;
      for (var C = 10 % S, T = 1; C !== 1; T++)
        if (C = C * 10 % S, T > n)
          return 0;
      return T;
    }
    __name(v, "v");
    c(v, "cycleLen");
    function d(E, S, C) {
      for (var T = 1, z = b(10, C, S), k = 0; k < 300; k++) {
        if (T === z)
          return k;
        T = T * 10 % S, z = z * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    c(d, "cycleStart");
    function f(E, S) {
      if (!E)
        return S;
      if (!S)
        return E;
      for (; ; ) {
        if (E %= S, !E)
          return S;
        if (S %= E, !S)
          return E;
      }
    }
    __name(f, "f");
    c(f, "gcd");
    function y(E, S) {
      if (h(E, S), this instanceof y)
        E = f(e.d, e.n), this.s = e.s, this.n = e.n / E, this.d = e.d / E;
      else
        return a(e.s * e.n, e.d);
    }
    __name(y, "y");
    c(y, "Fraction"), y.DivisionByZero = new Error("Division by Zero"), y.InvalidParameter = new Error("Invalid argument"), y.NonIntegerParameter = new Error("Parameters must be integer"), y.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return a(this.n, this.d);
    }, neg: function() {
      return a(-this.s * this.n, this.d);
    }, add: function(E, S) {
      return h(E, S), a(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(E, S) {
      return h(E, S), a(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(E, S) {
      return h(E, S), a(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(E, S) {
      return h(E, S), a(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return a(this.s * this.n, this.d);
    }, mod: function(E, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new y(NaN);
      if (E === void 0)
        return a(this.s * this.n % this.d, 1);
      if (h(E, S), e.n === 0 && this.d === 0)
        throw y.DivisionByZero;
      return a(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(E, S) {
      return h(E, S), a(f(e.n, this.n) * f(e.d, this.d), e.d * this.d);
    }, lcm: function(E, S) {
      return h(E, S), e.n === 0 && this.n === 0 ? a(0, 1) : a(e.n * this.n, f(e.n, this.n) * f(e.d, this.d));
    }, ceil: function(E) {
      return E = Math.pow(10, E || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.ceil(E * this.s * this.n / this.d), E);
    }, floor: function(E) {
      return E = Math.pow(10, E || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.floor(E * this.s * this.n / this.d), E);
    }, round: function(E) {
      return E = Math.pow(10, E || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.round(E * this.s * this.n / this.d), E);
    }, inverse: function() {
      return a(this.s * this.d, this.n);
    }, pow: function(E, S) {
      if (h(E, S), e.d === 1)
        return e.s < 0 ? a(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : a(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var C = u(this.n), T = u(this.d), z = 1, k = 1;
      for (var j in C)
        if (j !== "1") {
          if (j === "0") {
            z = 0;
            break;
          }
          if (C[j] *= e.n, C[j] % e.d === 0)
            C[j] /= e.d;
          else
            return null;
          z *= Math.pow(j, C[j]);
        }
      for (var j in T)
        if (j !== "1") {
          if (T[j] *= e.n, T[j] % e.d === 0)
            T[j] /= e.d;
          else
            return null;
          k *= Math.pow(j, T[j]);
        }
      return e.s < 0 ? a(k, z) : a(z, k);
    }, equals: function(E, S) {
      return h(E, S), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(E, S) {
      h(E, S);
      var C = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < C) - (C < 0);
    }, simplify: function(E) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      E = E || 1e-3;
      for (var S = this.abs(), C = S.toContinued(), T = 1; T < C.length; T++) {
        for (var z = a(C[T - 1], 1), k = T - 2; k >= 0; k--)
          z = z.inverse().add(C[k]);
        if (z.sub(S).abs().valueOf() < E)
          return z.mul(this.s);
      }
      return this;
    }, divisible: function(E, S) {
      return h(E, S), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(E) {
      var S, C = "", T = this.n, z = this.d;
      return this.s < 0 && (C += "-"), z === 1 ? C += T : (E && (S = Math.floor(T / z)) > 0 && (C += S, C += " ", T %= z), C += T, C += "/", C += z), C;
    }, toLatex: function(E) {
      var S, C = "", T = this.n, z = this.d;
      return this.s < 0 && (C += "-"), z === 1 ? C += T : (E && (S = Math.floor(T / z)) > 0 && (C += S, T %= z), C += "\\frac{", C += T, C += "}{", C += z, C += "}"), C;
    }, toContinued: function() {
      var E, S = this.n, C = this.d, T = [];
      if (isNaN(S) || isNaN(C))
        return T;
      do
        T.push(Math.floor(S / C)), E = S % C, S = C, C = E;
      while (S !== 1);
      return T;
    }, toString: function(E) {
      var S = this.n, C = this.d;
      if (isNaN(S) || isNaN(C))
        return "NaN";
      E = E || 15;
      var T = v(S, C), z = d(S, C, T), k = this.s < 0 ? "-" : "";
      if (k += S / C | 0, S %= C, S *= 10, S && (k += "."), T) {
        for (var j = z; j--; )
          k += S / C | 0, S %= C, S *= 10;
        k += "(";
        for (var j = T; j--; )
          k += S / C | 0, S %= C, S *= 10;
        k += ")";
      } else
        for (var j = E; S && j--; )
          k += S / C | 0, S %= C, S *= 10;
      return k;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return y;
    }) : typeof Vs == "object" ? (Object.defineProperty(y, "__esModule", { value: true }), y.default = y, y.Fraction = y, ac.exports = y) : t.Fraction = y;
  })(Vs);
});
var po = da((op, zl) => {
  (function(t) {
    typeof op == "object" && typeof zl != "undefined" ? zl.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
  })(function() {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var n = {};
    Object.defineProperty(n, "__esModule", { value: true }), n.getWindow = function(i) {
      return (0, t.default)(i) ? i : (i.ownerDocument || i).defaultView || r.window;
    }, n.init = a, n.window = n.realWindow = void 0;
    var e = void 0;
    n.realWindow = e;
    var r = void 0;
    function a(i) {
      n.realWindow = e = i;
      var o = i.document.createTextNode("");
      o.ownerDocument !== i.document && typeof i.wrap == "function" && i.wrap(o) === o && (i = i.wrap(i)), n.window = r = i;
    }
    __name(a, "a");
    c(a, "o"), n.window = r, typeof window != "undefined" && window && a(window);
    var u = {};
    function h(i) {
      return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, h(i);
    }
    __name(h, "h");
    c(h, "a"), Object.defineProperty(u, "__esModule", { value: true }), u.default = void 0;
    var b = c(function(i) {
      return !!i && h(i) === "object";
    }, "s"), v = c(function(i) {
      return typeof i == "function";
    }, "l"), d = { window: function(i) {
      return i === n.window || (0, t.default)(i);
    }, docFrag: function(i) {
      return b(i) && i.nodeType === 11;
    }, object: b, func: v, number: function(i) {
      return typeof i == "number";
    }, bool: function(i) {
      return typeof i == "boolean";
    }, string: function(i) {
      return typeof i == "string";
    }, element: function(i) {
      if (!i || h(i) !== "object")
        return false;
      var o = n.getWindow(i) || n.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : h(Element)) ? i instanceof Element || i instanceof o.Element : i.nodeType === 1 && typeof i.nodeName == "string";
    }, plainObject: function(i) {
      return b(i) && !!i.constructor && /function Object\b/.test(i.constructor.toString());
    }, array: function(i) {
      return b(i) && i.length !== void 0 && v(i.splice);
    } };
    u.default = d;
    var f = {};
    function y(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var s = o.prepared.axis;
        s === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : s === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(y, "y");
    c(y, "f");
    function E(i) {
      var o = i.iEvent, s = i.interaction;
      if (s.prepared.name === "drag") {
        var l = s.prepared.axis;
        if (l === "x" || l === "y") {
          var p = l === "x" ? "y" : "x";
          o.page[p] = s.coords.start.page[p], o.client[p] = s.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    __name(E, "E");
    c(E, "d"), Object.defineProperty(f, "__esModule", { value: true }), f.default = void 0;
    var S = { id: "actions/drag", install: function(i) {
      var o = i.actions, s = i.Interactable, l = i.defaults;
      s.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", l.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": y, "interactions:action-resume": y, "interactions:action-move": E, "auto-start:check": function(i) {
      var o = i.interaction, s = i.interactable, l = i.buttons, p = s.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || l & s.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(i) {
      return u.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : u.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: y, move: E, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, C = S;
    f.default = C;
    var T = {};
    Object.defineProperty(T, "__esModule", { value: true }), T.default = void 0;
    var z = { init: function(i) {
      var o = i;
      z.document = o.document, z.DocumentFragment = o.DocumentFragment || k, z.SVGElement = o.SVGElement || k, z.SVGSVGElement = o.SVGSVGElement || k, z.SVGElementInstance = o.SVGElementInstance || k, z.Element = o.Element || k, z.HTMLElement = o.HTMLElement || z.Element, z.Event = o.Event, z.Touch = o.Touch || k, z.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function k() {
    }
    __name(k, "k");
    c(k, "y");
    var j = z;
    T.default = j;
    var $ = {};
    Object.defineProperty($, "__esModule", { value: true }), $.default = void 0;
    var A = { init: function(i) {
      var o = T.default.Element, s = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || u.default.func(i.DocumentTouch) && T.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = s.pointerEnabled !== false && !!T.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(s.platform), A.isIOS7 = /iP(hone|od|ad)/.test(s.platform) && /OS 7[^\d]/.test(s.appVersion), A.isIe9 = /MSIE 9/.test(s.userAgent), A.isOperaMobile = s.appName === "Opera" && A.supportsTouch && /Presto/.test(s.userAgent), A.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? T.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = T.default.document && "onmousewheel" in T.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ee = A;
    $.default = ee;
    var R = {};
    function H(i) {
      var o = i.parentNode;
      if (u.default.docFrag(o)) {
        for (; (o = o.host) && u.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(H, "H");
    c(H, "P");
    function K(i, o) {
      return n.window !== n.realWindow && (o = o.replace(/\/deep\//g, " ")), i[$.default.prefixedMatchesSelector](o);
    }
    __name(K, "K");
    c(K, "O"), Object.defineProperty(R, "__esModule", { value: true }), R.closest = function(i, o) {
      for (; u.default.element(i); ) {
        if (K(i, o))
          return i;
        i = H(i);
      }
      return null;
    }, R.getActualElement = function(i) {
      return i.correspondingUseElement || i;
    }, R.getElementClientRect = ie, R.getElementRect = function(i) {
      var o = ie(i);
      if (!$.default.isIOS7 && o) {
        var s = Y(n.getWindow(i));
        o.left += s.x, o.right += s.x, o.top += s.y, o.bottom += s.y;
      }
      return o;
    }, R.getPath = function(i) {
      for (var o = []; i; )
        o.push(i), i = H(i);
      return o;
    }, R.getScrollXY = Y, R.indexOfDeepestElement = function(i) {
      for (var o, s = [], l = 0; l < i.length; l++) {
        var p = i[l], m = i[o];
        if (p && l !== o)
          if (m) {
            var x = te(p), g = te(m);
            if (x !== p.ownerDocument)
              if (g !== p.ownerDocument)
                if (x !== g) {
                  s = s.length ? s : le(m);
                  var w = void 0;
                  if (m instanceof T.default.HTMLElement && p instanceof T.default.SVGElement && !(p instanceof T.default.SVGSVGElement)) {
                    if (p === g)
                      continue;
                    w = p.ownerSVGElement;
                  } else
                    w = p;
                  for (var O = le(w, m.ownerDocument), I = 0; O[I] && O[I] === s[I]; )
                    I++;
                  var P = [O[I - 1], O[I], s[I]];
                  if (P[0])
                    for (var N = P[0].lastChild; N; ) {
                      if (N === P[1]) {
                        o = l, s = O;
                        break;
                      }
                      if (N === P[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  L = p, _ = m, (parseInt(n.getWindow(L).getComputedStyle(L).zIndex, 10) || 0) >= (parseInt(n.getWindow(_).getComputedStyle(_).zIndex, 10) || 0) && (o = l);
              else
                o = l;
          } else
            o = l;
      }
      var L, _;
      return o;
    }, R.matchesSelector = K, R.matchesUpTo = function(i, o, s) {
      for (; u.default.element(i); ) {
        if (K(i, o))
          return true;
        if ((i = H(i)) === s)
          return K(i, o);
      }
      return false;
    }, R.nodeContains = function(i, o) {
      if (i.contains)
        return i.contains(o);
      for (; o; ) {
        if (o === i)
          return true;
        o = o.parentNode;
      }
      return false;
    }, R.parentNode = H, R.trySelector = function(i) {
      return !!u.default.string(i) && (T.default.document.querySelector(i), true);
    };
    var te = c(function(i) {
      return i.parentNode || i.host;
    }, "E");
    function le(i, o) {
      for (var s, l = [], p = i; (s = te(p)) && p !== o && s !== p.ownerDocument; )
        l.unshift(p), p = s;
      return l;
    }
    __name(le, "le");
    c(le, "S");
    function Y(i) {
      return { x: (i = i || n.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(Y, "Y");
    c(Y, "T");
    function ie(i) {
      var o = i instanceof T.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ie, "ie");
    c(ie, "j");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(i, o) {
      for (var s in o)
        i[s] = o[s];
      return i;
    };
    var ue = {};
    function Fe(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Fe, "Fe");
    c(Fe, "I");
    function $e(i, o, s) {
      return i === "parent" ? (0, R.parentNode)(s) : i === "self" ? o.getRect(s) : (0, R.closest)(s, i);
    }
    __name($e, "$e");
    c($e, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.addEdges = function(i, o, s) {
      i.left && (o.left += s.x), i.right && (o.right += s.x), i.top && (o.top += s.y), i.bottom && (o.bottom += s.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ue.getStringOptionResult = $e, ue.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, ue.resolveRectLike = function(i, o, s, l) {
      var p, m = i;
      return u.default.string(m) ? m = $e(m, o, s) : u.default.func(m) && (m = m.apply(void 0, function(x) {
        if (Array.isArray(x))
          return Fe(x);
      }(p = l) || function(x) {
        if (typeof Symbol != "undefined" && x[Symbol.iterator] != null || x["@@iterator"] != null)
          return Array.from(x);
      }(p) || function(x, g) {
        if (x) {
          if (typeof x == "string")
            return Fe(x, g);
          var w = Object.prototype.toString.call(x).slice(8, -1);
          return w === "Object" && x.constructor && (w = x.constructor.name), w === "Map" || w === "Set" ? Array.from(x) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? Fe(x, g) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), u.default.element(m) && (m = (0, R.getElementRect)(m)), m;
    }, ue.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, W.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, ue.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, W.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var De = {};
    Object.defineProperty(De, "__esModule", { value: true }), De.default = function(i, o, s) {
      var l = i.options[s], p = l && l.origin || i.options.origin, m = (0, ue.resolveRectLike)(p, i, o, [i && o]);
      return (0, ue.rectToXY)(m) || { x: 0, y: 0 };
    };
    var Le = {};
    function it(i) {
      return i.trim().split(/ +/);
    }
    __name(it, "it");
    c(it, "C"), Object.defineProperty(Le, "__esModule", { value: true }), Le.default = c(/* @__PURE__ */ __name(function i(o, s, l) {
      if (l = l || {}, u.default.string(o) && o.search(" ") !== -1 && (o = it(o)), u.default.array(o))
        return o.reduce(function(w, O) {
          return (0, W.default)(w, i(O, s, l));
        }, l);
      if (u.default.object(o) && (s = o, o = ""), u.default.func(s))
        l[o] = l[o] || [], l[o].push(s);
      else if (u.default.array(s))
        for (var p = 0; p < s.length; p++) {
          var m;
          m = s[p], i(o, m, l);
        }
      else if (u.default.object(s))
        for (var x in s) {
          var g = it(x).map(function(w) {
            return "".concat(o).concat(w);
          });
          i(g, s[x], l);
        }
      return l;
    }, "i"), "t");
    var Xe = {};
    Object.defineProperty(Xe, "__esModule", { value: true }), Xe.default = void 0, Xe.default = function(i, o) {
      return Math.sqrt(i * i + o * o);
    };
    var We = {};
    Object.defineProperty(We, "__esModule", { value: true }), We.default = function(i, o) {
      i.__set || (i.__set = {});
      var s = c(function(p) {
        typeof i[p] != "function" && p !== "__set" && Object.defineProperty(i, p, { get: function() {
          return p in i.__set ? i.__set[p] : i.__set[p] = o[p];
        }, set: function(m) {
          i.__set[p] = m;
        }, configurable: true });
      }, "n");
      for (var l in o)
        s(l);
      return i;
    };
    var J = {};
    function tr(i) {
      return i instanceof T.default.Event || i instanceof T.default.Touch;
    }
    __name(tr, "tr");
    c(tr, "B");
    function Ie(i, o, s) {
      return i = i || "page", (s = s || {}).x = o[i + "X"], s.y = o[i + "Y"], s;
    }
    __name(Ie, "Ie");
    c(Ie, "Y");
    function Je(i, o) {
      return o = o || { x: 0, y: 0 }, $.default.isOperaMobile && tr(i) ? (Ie("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : Ie("page", i, o), o;
    }
    __name(Je, "Je");
    c(Je, "W");
    function sr(i, o) {
      return o = o || {}, $.default.isOperaMobile && tr(i) ? Ie("screen", i, o) : Ie("client", i, o), o;
    }
    __name(sr, "sr");
    c(sr, "L");
    function yr(i) {
      var o = [];
      return u.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(yr, "yr");
    c(yr, "U");
    function lr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, s = 0; s < i.length; s++) {
        var l = i[s];
        for (var p in o)
          o[p] += l[p];
      }
      for (var m in o)
        o[m] /= i.length;
      return o;
    }
    __name(lr, "lr");
    c(lr, "V"), Object.defineProperty(J, "__esModule", { value: true }), J.coordsToEvent = function(i) {
      return { coords: i, get page() {
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
    }, J.copyCoords = function(i, o) {
      i.page = i.page || {}, i.page.x = o.page.x, i.page.y = o.page.y, i.client = i.client || {}, i.client.x = o.client.x, i.client.y = o.client.y, i.timeStamp = o.timeStamp;
    }, J.getClientXY = sr, J.getEventTargets = function(i) {
      var o = u.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [R.getActualElement(o ? o[0] : i.target), R.getActualElement(i.currentTarget)];
    }, J.getPageXY = Je, J.getPointerId = function(i) {
      return u.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, J.getPointerType = function(i) {
      return u.default.string(i.pointerType) ? i.pointerType : u.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof T.default.Touch ? "touch" : "mouse";
    }, J.getTouchPair = yr, J.getXY = Ie, J.isNativePointer = tr, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.pointerAverage = lr, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return We.default;
    } }), J.setCoordDeltas = function(i, o, s) {
      i.page.x = s.page.x - o.page.x, i.page.y = s.page.y - o.page.y, i.client.x = s.client.x - o.client.x, i.client.y = s.client.y - o.client.y, i.timeStamp = s.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(i, o) {
      var s = Math.max(o.timeStamp / 1e3, 1e-3);
      i.page.x = o.page.x / s, i.page.y = o.page.y / s, i.client.x = o.client.x / s, i.client.y = o.client.y / s, i.timeStamp = s;
    }, J.setCoords = function(i, o, s) {
      var l = o.length > 1 ? lr(o) : o[0];
      Je(l, i.page), sr(l, i.client), i.timeStamp = s;
    }, J.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, J.touchAngle = function(i, o) {
      var s = o + "X", l = o + "Y", p = yr(i), m = p[1][s] - p[0][s], x = p[1][l] - p[0][l];
      return 180 * Math.atan2(x, m) / Math.PI;
    }, J.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = yr(i), s = Math.min(o[0].pageX, o[1].pageX), l = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), m = Math.max(o[0].pageY, o[1].pageY);
      return { x: s, y: l, left: s, top: l, right: p, bottom: m, width: p - s, height: m - l };
    }, J.touchDistance = function(i, o) {
      var s = o + "X", l = o + "Y", p = yr(i), m = p[0][s] - p[1][s], x = p[0][l] - p[1][l];
      return (0, Xe.default)(m, x);
    };
    var rr = {};
    function Mr(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Mr, "Mr");
    c(Mr, "q");
    function jr(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(jr, "jr");
    c(jr, "G"), Object.defineProperty(rr, "__esModule", { value: true }), rr.BaseEvent = void 0;
    var wn = function() {
      function i(l) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), jr(this, "immediatePropagationStopped", false), jr(this, "propagationStopped", false), this._interaction = l;
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Mr(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    rr.BaseEvent = wn, Object.defineProperty(wn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Me = {};
    Object.defineProperty(Me, "__esModule", { value: true }), Me.remove = Me.merge = Me.from = Me.findIndex = Me.find = Me.contains = void 0, Me.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, Me.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var xn = c(function(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        i.push(l);
      }
      return i;
    }, "K");
    Me.merge = xn, Me.from = function(i) {
      return xn([], i);
    };
    var En = c(function(i, o) {
      for (var s = 0; s < i.length; s++)
        if (o(i[s], s, i))
          return s;
      return -1;
    }, "Z");
    Me.findIndex = En, Me.find = function(i, o) {
      return i[En(i, o)];
    };
    var Dt = {};
    function Hr(i) {
      return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Hr(i);
    }
    __name(Hr, "Hr");
    c(Hr, "Q");
    function Xn(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Xn, "Xn");
    c(Xn, "tt");
    function on(i, o) {
      return on = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, on(i, o);
    }
    __name(on, "on");
    c(on, "et");
    function wr(i, o) {
      if (o && (Hr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Mt(i);
    }
    __name(wr, "wr");
    c(wr, "nt");
    function Mt(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Mt, "Mt");
    c(Mt, "rt");
    function Ir(i) {
      return Ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ir(i);
    }
    __name(Ir, "Ir");
    c(Ir, "ot");
    function Bt(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Bt, "Bt");
    c(Bt, "it"), Object.defineProperty(Dt, "__esModule", { value: true }), Dt.DropEvent = void 0;
    var Sn = function(i) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), w && on(g, w);
      })(x, i);
      var o, s, l, p, m = (l = x, p = function() {
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
        var g, w = Ir(l);
        if (p) {
          var O = Ir(this).constructor;
          g = Reflect.construct(w, arguments, O);
        } else
          g = w.apply(this, arguments);
        return wr(this, g);
      });
      function x(g, w, O) {
        var I;
        (function(_, q) {
          if (!(_ instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, x), Bt(Mt(I = m.call(this, w._interaction)), "dropzone", void 0), Bt(Mt(I), "dragEvent", void 0), Bt(Mt(I), "relatedTarget", void 0), Bt(Mt(I), "draggable", void 0), Bt(Mt(I), "propagationStopped", false), Bt(Mt(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? g.prev : g.cur, N = P.element, L = P.dropzone;
        return I.type = O, I.target = N, I.currentTarget = N, I.dropzone = L, I.dragEvent = w, I.relatedTarget = w.target, I.draggable = w.interactable, I.timeStamp = w.timeStamp, I;
      }
      __name(x, "x");
      return c(x, "a"), o = x, (s = [{ key: "reject", value: function() {
        var g = this, w = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && w.cur.dropzone === this.dropzone && w.cur.element === this.target)
          if (w.prev.dropzone = this.dropzone, w.prev.element = this.target, w.rejected = true, w.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = w.activeDrops, I = Me.findIndex(O, function(N) {
              var L = N.dropzone, _ = N.element;
              return L === g.dropzone && _ === g.target;
            });
            w.activeDrops.splice(I, 1);
            var P = new x(w, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new x(w, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Xn(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), x;
    }(rr.BaseEvent);
    Dt.DropEvent = Sn;
    var Br = {};
    function Cn(i, o) {
      for (var s = 0; s < i.slice().length; s++) {
        var l = i.slice()[s], p = l.dropzone, m = l.element;
        o.dropzone = p, o.target = m, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(Cn, "Cn");
    c(Cn, "lt");
    function an(i, o) {
      for (var s = function(m, x) {
        for (var g = m.interactables, w = [], O = 0; O < g.list.length; O++) {
          var I = g.list[O];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(u.default.element(P) && P !== x || u.default.string(P) && !R.matchesSelector(x, P) || u.default.func(P) && !P({ dropzone: I, draggableElement: x })))
              for (var N = u.default.string(I.target) ? I._context.querySelectorAll(I.target) : u.default.array(I.target) ? I.target : [I.target], L = 0; L < N.length; L++) {
                var _ = N[L];
                _ !== x && w.push({ dropzone: I, element: _, rect: I.getRect(_) });
              }
          }
        }
        return w;
      }(i, o), l = 0; l < s.length; l++) {
        var p = s[l];
        p.rect = p.dropzone.getRect(p.element);
      }
      return s;
    }
    __name(an, "an");
    c(an, "ut");
    function Tn(i, o, s) {
      for (var l = i.dropState, p = i.interactable, m = i.element, x = [], g = 0; g < l.activeDrops.length; g++) {
        var w = l.activeDrops[g], O = w.dropzone, I = w.element, P = w.rect;
        x.push(O.dropCheck(o, s, p, m, I, P) ? I : null);
      }
      var N = R.indexOfDeepestElement(x);
      return l.activeDrops[N] || null;
    }
    __name(Tn, "Tn");
    c(Tn, "ct");
    function Pi(i, o, s) {
      var l = i.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return s.type === "dragstart" && (p.activate = new Dt.DropEvent(l, s, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), s.type === "dragend" && (p.deactivate = new Dt.DropEvent(l, s, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), l.rejected || (l.cur.element !== l.prev.element && (l.prev.dropzone && (p.leave = new Dt.DropEvent(l, s, "dragleave"), s.dragLeave = p.leave.target = l.prev.element, s.prevDropzone = p.leave.dropzone = l.prev.dropzone), l.cur.dropzone && (p.enter = new Dt.DropEvent(l, s, "dragenter"), s.dragEnter = l.cur.element, s.dropzone = l.cur.dropzone)), s.type === "dragend" && l.cur.dropzone && (p.drop = new Dt.DropEvent(l, s, "drop"), s.dropzone = l.cur.dropzone, s.relatedTarget = l.cur.element), s.type === "dragmove" && l.cur.dropzone && (p.move = new Dt.DropEvent(l, s, "dropmove"), p.move.dragmove = s, s.dropzone = l.cur.dropzone)), p;
    }
    __name(Pi, "Pi");
    c(Pi, "ft");
    function zi(i, o) {
      var s = i.dropState, l = s.activeDrops, p = s.cur, m = s.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && Cn(l, o.deactivate), s.prev.dropzone = p.dropzone, s.prev.element = p.element;
    }
    __name(zi, "zi");
    c(zi, "dt");
    function _o(i, o) {
      var s = i.interaction, l = i.iEvent, p = i.event;
      if (l.type === "dragmove" || l.type === "dragend") {
        var m = s.dropState;
        o.dynamicDrop && (m.activeDrops = an(o, s.element));
        var x = l, g = Tn(s, x, p);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = Pi(s, 0, x);
      }
    }
    __name(_o, "_o");
    c(_o, "pt"), Object.defineProperty(Br, "__esModule", { value: true }), Br.default = void 0;
    var Do = { id: "actions/drop", install: function(i) {
      var o = i.actions, s = i.interactStatic, l = i.Interactable, p = i.defaults;
      i.usePlugin(f.default), l.prototype.dropzone = function(m) {
        return function(x, g) {
          if (u.default.object(g)) {
            if (x.options.drop.enabled = g.enabled !== false, g.listeners) {
              var w = (0, Le.default)(g.listeners), O = Object.keys(w).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = w[P], I;
              }, {});
              x.off(x.options.drop.listeners), x.on(O), x.options.drop.listeners = O;
            }
            return u.default.func(g.ondrop) && x.on("drop", g.ondrop), u.default.func(g.ondropactivate) && x.on("dropactivate", g.ondropactivate), u.default.func(g.ondropdeactivate) && x.on("dropdeactivate", g.ondropdeactivate), u.default.func(g.ondragenter) && x.on("dragenter", g.ondragenter), u.default.func(g.ondragleave) && x.on("dragleave", g.ondragleave), u.default.func(g.ondropmove) && x.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? x.options.drop.overlap = g.overlap : u.default.number(g.overlap) && (x.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (x.options.drop.accept = g.accept), "checker" in g && (x.options.drop.checker = g.checker), x;
          }
          return u.default.bool(g) ? (x.options.drop.enabled = g, x) : x.options.drop;
        }(this, m);
      }, l.prototype.dropCheck = function(m, x, g, w, O, I) {
        return function(P, N, L, _, q, X, F) {
          var ne = false;
          if (!(F = F || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(N, L, ne, P, X, _, q);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var fe = (0, De.default)(_, q, "drag"), Pe = J.getPageXY(N);
            Pe.x += fe.x, Pe.y += fe.y;
            var qe = Pe.x > F.left && Pe.x < F.right, Se = Pe.y > F.top && Pe.y < F.bottom;
            ne = qe && Se;
          }
          var He = _.getRect(q);
          if (He && oe === "center") {
            var pr = He.left + He.width / 2, Ur = He.top + He.height / 2;
            ne = pr >= F.left && pr <= F.right && Ur >= F.top && Ur <= F.bottom;
          }
          return He && u.default.number(oe) && (ne = Math.max(0, Math.min(F.right, He.right) - Math.max(F.left, He.left)) * Math.max(0, Math.min(F.bottom, He.bottom) - Math.max(F.top, He.top)) / (He.width * He.height) >= oe), P.options.drop.checker && (ne = P.options.drop.checker(N, L, ne, P, X, _, q)), ne;
        }(this, m, x, g, w, O, I);
      }, s.dynamicDrop = function(m) {
        return u.default.bool(m) ? (i.dynamicDrop = m, s) : i.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, p.actions.drop = Do.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var s = i.interaction, l = (i.event, i.iEvent);
      if (s.prepared.name === "drag") {
        var p = s.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = an(o, s.element), p.events = Pi(s, 0, l), p.events.activate && (Cn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: s, dragEvent: l }));
      }
    }, "interactions:action-move": _o, "interactions:after-action-move": function(i, o) {
      var s = i.interaction, l = i.iEvent;
      s.prepared.name === "drag" && (zi(s, s.dropState.events), o.fire("actions/drop:move", { interaction: s, dragEvent: l }), s.dropState.events = {});
    }, "interactions:action-end": function(i, o) {
      if (i.interaction.prepared.name === "drag") {
        var s = i.interaction, l = i.iEvent;
        _o(i, o), zi(s, s.dropState.events), o.fire("actions/drop:end", { interaction: s, dragEvent: l });
      }
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var s = o.dropState;
        s && (s.activeDrops = null, s.events = null, s.cur.dropzone = null, s.cur.element = null, s.prev.dropzone = null, s.prev.element = null, s.rejected = false);
      }
    } }, getActiveDrops: an, getDrop: Tn, getDropEvents: Pi, fireDropEvents: zi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, hs = Do;
    Br.default = hs;
    var G = {};
    function re(i) {
      var o = i.interaction, s = i.iEvent, l = i.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(O) {
          return O.pointer;
        }), m = l === "start", x = l === "end", g = o.interactable.options.deltaSource;
        if (s.touches = [p[0], p[1]], m)
          s.distance = J.touchDistance(p, g), s.box = J.touchBBox(p), s.scale = 1, s.ds = 0, s.angle = J.touchAngle(p, g), s.da = 0, o.gesture.startDistance = s.distance, o.gesture.startAngle = s.angle;
        else if (x) {
          var w = o.prevEvent;
          s.distance = w.distance, s.box = w.box, s.scale = w.scale, s.ds = 0, s.angle = w.angle, s.da = 0;
        } else
          s.distance = J.touchDistance(p, g), s.box = J.touchBBox(p), s.scale = s.distance / o.gesture.startDistance, s.angle = J.touchAngle(p, g), s.ds = s.scale - o.gesture.scale, s.da = s.angle - o.gesture.angle;
        o.gesture.distance = s.distance, o.gesture.angle = s.angle, u.default.number(s.scale) && s.scale !== 1 / 0 && !isNaN(s.scale) && (o.gesture.scale = s.scale);
      }
    }
    __name(re, "re");
    c(re, "yt"), Object.defineProperty(G, "__esModule", { value: true }), G.default = void 0;
    var ae = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o = i.actions, s = i.Interactable, l = i.defaults;
      s.prototype.gesturable = function(p) {
        return u.default.object(p) ? (this.options.gesture.enabled = p.enabled !== false, this.setPerAction("gesture", p), this.setOnEvents("gesture", p), this) : u.default.bool(p) ? (this.options.gesture.enabled = p, this) : this.options.gesture;
      }, o.map.gesture = ae, o.methodDict.gesture = "gesturable", l.actions.gesture = ae.defaults;
    }, listeners: { "interactions:action-start": re, "interactions:action-move": re, "interactions:action-end": re, "interactions:new": function(i) {
      i.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(i) {
      if (!(i.interaction.pointers.length < 2)) {
        var o = i.interactable.options.gesture;
        if (o && o.enabled)
          return i.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, Ae = ae;
    G.default = Ae;
    var ge = {};
    function xt(i, o, s, l, p, m, x) {
      if (!o)
        return false;
      if (o === true) {
        var g = u.default.number(m.width) ? m.width : m.right - m.left, w = u.default.number(m.height) ? m.height : m.bottom - m.top;
        if (x = Math.min(x, Math.abs((i === "left" || i === "right" ? g : w) / 2)), g < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), w < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left") {
          var O = g >= 0 ? m.left : m.right;
          return s.x < O + x;
        }
        if (i === "top") {
          var I = w >= 0 ? m.top : m.bottom;
          return s.y < I + x;
        }
        if (i === "right")
          return s.x > (g >= 0 ? m.right : m.left) - x;
        if (i === "bottom")
          return s.y > (w >= 0 ? m.bottom : m.top) - x;
      }
      return !!u.default.element(l) && (u.default.element(o) ? o === l : R.matchesUpTo(l, o, p));
    }
    __name(xt, "xt");
    c(xt, "wt");
    function kt(i) {
      var o = i.iEvent, s = i.interaction;
      if (s.prepared.name === "resize" && s.resizeAxes) {
        var l = o;
        s.interactable.options.resize.square ? (s.resizeAxes === "y" ? l.delta.x = l.delta.y : l.delta.y = l.delta.x, l.axes = "xy") : (l.axes = s.resizeAxes, s.resizeAxes === "x" ? l.delta.y = 0 : s.resizeAxes === "y" && (l.delta.x = 0));
      }
    }
    __name(kt, "kt");
    c(kt, "_t"), Object.defineProperty(ge, "__esModule", { value: true }), ge.default = void 0;
    var It = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, s = i.browser, l = i.Interactable, p = i.defaults;
      It.cursors = function(m) {
        return m.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(s), It.defaultMargin = s.supportsTouch || s.supportsPointerEvent ? 20 : 10, l.prototype.resizable = function(m) {
        return function(x, g, w) {
          return u.default.object(g) ? (x.options.resize.enabled = g.enabled !== false, x.setPerAction("resize", g), x.setOnEvents("resize", g), u.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? x.options.resize.axis = g.axis : g.axis === null && (x.options.resize.axis = w.defaults.actions.resize.axis), u.default.bool(g.preserveAspectRatio) ? x.options.resize.preserveAspectRatio = g.preserveAspectRatio : u.default.bool(g.square) && (x.options.resize.square = g.square), x) : u.default.bool(g) ? (x.options.resize.enabled = g, x) : x.options.resize;
        }(this, m, i);
      }, o.map.resize = It, o.methodDict.resize = "resizable", p.actions.resize = It.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var s = o.iEvent, l = o.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var p = s, m = l.rect;
          l._rects = { start: (0, W.default)({}, m), corrected: (0, W.default)({}, m), previous: (0, W.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = l.prepared.edges, p.rect = l._rects.corrected, p.deltaRect = l._rects.delta;
        }
      })(i), kt(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var s = o.iEvent, l = o.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var p = s, m = l.interactable.options.resize.invert, x = m === "reposition" || m === "negate", g = l.rect, w = l._rects, O = w.start, I = w.corrected, P = w.delta, N = w.previous;
          if ((0, W.default)(N, I), x) {
            if ((0, W.default)(I, g), m === "reposition") {
              if (I.top > I.bottom) {
                var L = I.top;
                I.top = I.bottom, I.bottom = L;
              }
              if (I.left > I.right) {
                var _ = I.left;
                I.left = I.right, I.right = _;
              }
            }
          } else
            I.top = Math.min(g.top, O.bottom), I.bottom = Math.max(g.bottom, O.top), I.left = Math.min(g.left, O.right), I.right = Math.max(g.right, O.left);
          for (var q in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[q] = I[q] - N[q];
          p.edges = l.prepared.edges, p.rect = I, p.deltaRect = P;
        }
      })(i), kt(i);
    }, "interactions:action-end": function(i) {
      var o = i.iEvent, s = i.interaction;
      if (s.prepared.name === "resize" && s.prepared.edges) {
        var l = o;
        l.edges = s.prepared.edges, l.rect = s._rects.corrected, l.deltaRect = s._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o = i.interaction, s = i.interactable, l = i.element, p = i.rect, m = i.buttons;
      if (p) {
        var x = (0, W.default)({}, o.coords.cur.page), g = s.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || m & g.mouseButtons)) {
          if (u.default.object(g.edges)) {
            var w = { left: false, right: false, top: false, bottom: false };
            for (var O in w)
              w[O] = xt(O, g.edges[O], x, o._latestPointer.eventTarget, l, p, g.margin || It.defaultMargin);
            w.left = w.left && !w.right, w.top = w.top && !w.bottom, (w.left || w.right || w.top || w.bottom) && (i.action = { name: "resize", edges: w });
          } else {
            var I = g.axis !== "y" && x.x > p.right - It.defaultMargin, P = g.axis !== "x" && x.y > p.bottom - It.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, s = i.axis, l = i.name, p = It.cursors, m = null;
      if (s)
        m = p[l + s];
      else if (o) {
        for (var x = "", g = ["top", "bottom", "left", "right"], w = 0; w < g.length; w++) {
          var O = g[w];
          o[O] && (x += O);
        }
        m = p[x];
      }
      return m;
    }, defaultMargin: null }, ko = It;
    ge.default = ko;
    var ur = {};
    Object.defineProperty(ur, "__esModule", { value: true }), ur.default = void 0;
    var Ri = { id: "actions", install: function(i) {
      i.usePlugin(G.default), i.usePlugin(ge.default), i.usePlugin(f.default), i.usePlugin(Br.default);
    } };
    ur.default = Ri;
    var At = {};
    Object.defineProperty(At, "__esModule", { value: true }), At.default = void 0;
    var Pt, $r, Zn = 0, Qn = { request: function(i) {
      return Pt(i);
    }, cancel: function(i) {
      return $r(i);
    }, init: function(i) {
      if (Pt = i.requestAnimationFrame, $r = i.cancelAnimationFrame, !Pt)
        for (var o = ["ms", "moz", "webkit", "o"], s = 0; s < o.length; s++) {
          var l = o[s];
          Pt = i["".concat(l, "RequestAnimationFrame")], $r = i["".concat(l, "CancelAnimationFrame")] || i["".concat(l, "CancelRequestAnimationFrame")];
        }
      Pt = Pt && Pt.bind(i), $r = $r && $r.bind(i), Pt || (Pt = c(function(p) {
        var m = Date.now(), x = Math.max(0, 16 - (m - Zn)), g = i.setTimeout(function() {
          p(m + x);
        }, x);
        return Zn = m + x, g;
      }, "jt"), $r = c(function(p) {
        return clearTimeout(p);
      }, "Mt"));
    } };
    At.default = Qn;
    var sn = {};
    Object.defineProperty(sn, "__esModule", { value: true }), sn.default = void 0, sn.getContainer = No, sn.getScroll = _i, sn.getScrollSize = function(i) {
      return u.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, sn.getScrollSizeDelta = function(i, o) {
      var s = i.interaction, l = i.element, p = s && s.interactable.options[s.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var m = No(p.container, s.interactable, l), x = _i(m);
      o();
      var g = _i(m);
      return { x: g.x - x.x, y: g.y - x.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, At.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = At.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), At.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, o = i.interactable, s = i.element, l = i.prepared.name, p = o.options[l].autoScroll, m = No(p.container, o, s), x = ce.now(), g = (x - ce.prevTime) / 1e3, w = p.speed * g;
      if (w >= 1) {
        var O = { x: ce.x * w, y: ce.y * w };
        if (O.x || O.y) {
          var I = _i(m);
          u.default.window(m) ? m.scrollBy(O.x, O.y) : m && (m.scrollLeft += O.x, m.scrollTop += O.y);
          var P = _i(m), N = { x: P.x - I.x, y: P.y - I.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: s, interactable: o, delta: N, interaction: i, container: m });
        }
        ce.prevTime = x;
      }
      ce.isScrolling && (At.default.cancel(ce.i), ce.i = At.default.request(ce.scroll));
    }, check: function(i, o) {
      var s;
      return (s = i.options[o].autoScroll) == null ? void 0 : s.enabled;
    }, onInteractionMove: function(i) {
      var o = i.interaction, s = i.pointer;
      if (o.interacting() && ce.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ce.x = ce.y = 0;
        else {
          var l, p, m, x, g = o.interactable, w = o.element, O = o.prepared.name, I = g.options[O].autoScroll, P = No(I.container, g, w);
          if (u.default.window(P))
            x = s.clientX < ce.margin, l = s.clientY < ce.margin, p = s.clientX > P.innerWidth - ce.margin, m = s.clientY > P.innerHeight - ce.margin;
          else {
            var N = R.getElementClientRect(P);
            x = s.clientX < N.left + ce.margin, l = s.clientY < N.top + ce.margin, p = s.clientX > N.right - ce.margin, m = s.clientY > N.bottom - ce.margin;
          }
          ce.x = p ? 1 : x ? -1 : 0, ce.y = m ? 1 : l ? -1 : 0, ce.isScrolling || (ce.margin = I.margin, ce.speed = I.speed, ce.start(o));
        }
    } };
    function No(i, o, s) {
      return (u.default.string(i) ? (0, ue.getStringOptionResult)(i, o, s) : i) || (0, n.getWindow)(s);
    }
    __name(No, "No");
    c(No, "zt");
    function _i(i) {
      return u.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(_i, "_i");
    c(_i, "Ct");
    var Ld = { id: "auto-scroll", install: function(i) {
      var o = i.defaults, s = i.actions;
      i.autoScroll = ce, ce.now = function() {
        return i.now();
      }, s.phaselessTypes.autoscroll = true, o.perAction.autoScroll = ce.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoScroll = null;
    }, "interactions:destroy": function(i) {
      i.interaction.autoScroll = null, ce.stop(), ce.interaction && (ce.interaction = null);
    }, "interactions:stop": ce.stop, "interactions:action-move": function(i) {
      return ce.onInteractionMove(i);
    } } }, jd = Ld;
    sn.default = jd;
    var nr = {};
    Object.defineProperty(nr, "__esModule", { value: true }), nr.copyAction = function(i, o) {
      return i.name = o.name, i.axis = o.axis, i.edges = o.edges, i;
    }, nr.sign = void 0, nr.warnOnce = function(i, o) {
      var s = false;
      return function() {
        return s || (n.window.console.warn(o), s = true), i.apply(this, arguments);
      };
    }, nr.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var Go = {};
    function Hd(i) {
      return u.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Hd, "Hd");
    c(Hd, "Yt");
    function Bd(i) {
      return u.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Bd, "Bd");
    c(Bd, "Wt"), Object.defineProperty(Go, "__esModule", { value: true }), Go.default = void 0;
    var $d = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(s, l, p, m) {
        var x = function(g, w, O, I, P) {
          var N = g.getRect(I), L = { action: null, interactable: g, interaction: O, element: I, rect: N, buttons: w.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[w.button] };
          return P.fire("auto-start:check", L), L.action;
        }(this, l, p, m, i);
        return this.options.actionChecker ? this.options.actionChecker(s, l, x, this, m, p) : x;
      }, o.prototype.ignoreFrom = (0, nr.warnOnce)(function(s) {
        return this._backCompatOption("ignoreFrom", s);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, nr.warnOnce)(function(s) {
        return this._backCompatOption("allowFrom", s);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Bd, o.prototype.styleCursor = Hd;
    } };
    Go.default = $d;
    var Jn = {};
    function cu(i, o, s, l, p) {
      return o.testIgnoreAllow(o.options[i.name], s, l) && o.options[i.name].enabled && Lo(o, s, i, p) ? i : null;
    }
    __name(cu, "cu");
    c(cu, "Vt");
    function qd(i, o, s, l, p, m, x) {
      for (var g = 0, w = l.length; g < w; g++) {
        var O = l[g], I = p[g], P = O.getAction(o, s, i, I);
        if (P) {
          var N = cu(P, O, I, m, x);
          if (N)
            return { action: N, interactable: O, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(qd, "qd");
    c(qd, "Nt");
    function pu(i, o, s, l, p) {
      var m = [], x = [], g = l;
      function w(I) {
        m.push(I), x.push(g);
      }
      __name(w, "w");
      for (c(w, "u"); u.default.element(g); ) {
        m = [], x = [], p.interactables.forEachMatch(g, w);
        var O = qd(i, o, s, m, x, l, p);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        g = R.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(pu, "pu");
    c(pu, "qt");
    function du(i, o, s) {
      var l = o.action, p = o.interactable, m = o.element;
      l = l || { name: null }, i.interactable = p, i.element = m, (0, nr.copyAction)(i.prepared, l), i.rect = p && l.name ? p.getRect(m) : null, hu(i, s), s.fire("autoStart:prepared", { interaction: i });
    }
    __name(du, "du");
    c(du, "Gt");
    function Lo(i, o, s, l) {
      var p = i.options, m = p[s.name].max, x = p[s.name].maxPerElement, g = l.autoStart.maxInteractions, w = 0, O = 0, I = 0;
      if (!(m && x && g))
        return false;
      for (var P = 0; P < l.interactions.list.length; P++) {
        var N = l.interactions.list[P], L = N.prepared.name;
        if (N.interacting() && (++w >= g || N.interactable === i && ((O += L === s.name ? 1 : 0) >= m || N.element === o && (I++, L === s.name && I >= x))))
          return false;
      }
      return g > 0;
    }
    __name(Lo, "Lo");
    c(Lo, "$t");
    function fu(i, o) {
      return u.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(fu, "fu");
    c(fu, "Ht");
    function vs(i, o, s) {
      var l = s.autoStart.cursorElement;
      l && l !== i && (l.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, s.autoStart.cursorElement = o ? i : null;
    }
    __name(vs, "vs");
    c(vs, "Kt");
    function hu(i, o) {
      var s = i.interactable, l = i.element, p = i.prepared;
      if (i.pointerType === "mouse" && s && s.options.styleCursor) {
        var m = "";
        if (p.name) {
          var x = s.options[p.name].cursorChecker;
          m = u.default.func(x) ? x(p, s, l, i._interacting) : o.actions.map[p.name].getCursor(p);
        }
        vs(i.element, m || "", o);
      } else
        o.autoStart.cursorElement && vs(o.autoStart.cursorElement, "", o);
    }
    __name(hu, "hu");
    c(hu, "Zt"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = void 0;
    var Fd = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, s = i.defaults;
      i.usePlugin(Go.default), s.base.actionChecker = null, s.base.styleCursor = true, (0, W.default)(s.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(l) {
        return fu(l, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Lo, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var s = i.interaction, l = i.pointer, p = i.event, m = i.eventTarget;
      s.interacting() || du(s, pu(s, l, p, m, o), o);
    }, "interactions:move": function(i, o) {
      (function(s, l) {
        var p = s.interaction, m = s.pointer, x = s.event, g = s.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || du(p, pu(p, m, x, g, l), l);
      })(i, o), function(s, l) {
        var p = s.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          l.fire("autoStart:before-start", s);
          var m = p.interactable, x = p.prepared.name;
          x && m && (m.options[x].manualStart || !Lo(m, p.element, p.prepared, l) ? p.stop() : (p.start(p.prepared, m, p.element), hu(p, l)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var s = i.interaction, l = s.interactable;
      l && l.options.styleCursor && vs(s.element, "", o);
    } }, maxInteractions: fu, withinInteractionLimit: Lo, validateAction: cu }, Ud = Fd;
    Jn.default = Ud;
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Wd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var s = i.interaction, l = i.eventTarget, p = i.dx, m = i.dy;
      if (s.prepared.name === "drag") {
        var x = Math.abs(p), g = Math.abs(m), w = s.interactable.options.drag, O = w.startAxis, I = x > g ? "x" : x < g ? "y" : "xy";
        if (s.prepared.axis = w.lockAxis === "start" ? I[0] : w.lockAxis, I !== "xy" && O !== "xy" && O !== I) {
          s.prepared.name = null;
          for (var P = l, N = function(_) {
            if (_ !== s.interactable) {
              var q = s.interactable.options.drag;
              if (!q.manualStart && _.testIgnoreAllow(q, P, l)) {
                var X = _.getAction(s.downPointer, s.downEvent, s, P);
                if (X && X.name === "drag" && function(F, ne) {
                  if (!ne)
                    return false;
                  var oe = ne.options.drag.startAxis;
                  return F === "xy" || oe === "xy" || oe === F;
                }(I, _) && Jn.default.validateAction(X, _, P, l, o))
                  return _;
              }
            }
          }; u.default.element(P); ) {
            var L = o.interactables.forEachMatch(P, N);
            if (L) {
              s.prepared.name = "drag", s.interactable = L, s.element = P;
              break;
            }
            P = (0, R.parentNode)(P);
          }
        }
      }
    } } };
    jo.default = Wd;
    var Ho = {};
    function ms(i) {
      var o = i.prepared && i.prepared.name;
      if (!o)
        return null;
      var s = i.interactable.options;
      return s[o].hold || s[o].delay;
    }
    __name(ms, "ms");
    c(ms, "re"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var Vd = { id: "auto-start/hold", install: function(i) {
      var o = i.defaults;
      i.usePlugin(Jn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o = i.interaction, s = ms(o);
      s > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, s));
    }, "interactions:move": function(i) {
      var o = i.interaction, s = i.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !s && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o = i.interaction;
      ms(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: ms }, Yd = Vd;
    Ho.default = Yd;
    var Bo = {};
    Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0;
    var Xd = { id: "auto-start", install: function(i) {
      i.usePlugin(Jn.default), i.usePlugin(Ho.default), i.usePlugin(jo.default);
    } };
    Bo.default = Xd;
    var Kn = {};
    function Zd(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : u.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Zd, "Zd");
    c(Zd, "ue");
    function Qd(i) {
      var o = i.interaction, s = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(s);
    }
    __name(Qd, "Qd");
    c(Qd, "ce");
    function vu(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = Zd, o.prototype.checkAndPreventDefault = function(s) {
        return function(l, p, m) {
          var x = l.options.preventDefault;
          if (x !== "never")
            if (x !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(m.type)) {
                var g = (0, n.getWindow)(m.target).document, w = p.getDocOptions(g);
                if (!w || !w.events || w.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(m.type) || u.default.element(m.target) && (0, R.matchesSelector)(m.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || m.preventDefault();
            } else
              m.preventDefault();
        }(this, i, s);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(s) {
        for (var l = 0; l < i.interactions.list.length; l++) {
          var p = i.interactions.list[l];
          if (p.element && (p.element === s.target || (0, R.nodeContains)(p.element, s.target)))
            return void p.interactable.checkAndPreventDefault(s);
        }
      } });
    }
    __name(vu, "vu");
    c(vu, "fe"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = void 0, Kn.install = vu;
    var Jd = { id: "core/interactablePreventDefault", install: vu, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = Qd, i;
    }, {}) };
    Kn.default = Jd;
    var gs = {};
    Object.defineProperty(gs, "__esModule", { value: true }), gs.default = void 0, gs.default = {};
    var Di, bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), bs.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(Di || (Di = {})), Di.touchAction, Di.boxSizing, Di.noListeners;
    var Kd = { id: "dev-tools", install: function() {
    } };
    bs.default = Kd;
    var On = {};
    Object.defineProperty(On, "__esModule", { value: true }), On.default = c(/* @__PURE__ */ __name(function i(o) {
      var s = {};
      for (var l in o) {
        var p = o[l];
        u.default.plainObject(p) ? s[l] = i(p) : u.default.array(p) ? s[l] = Me.from(p) : s[l] = p;
      }
      return s;
    }, "i"), "t");
    var Mn = {};
    function mu(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var p = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (p != null) {
          var m, x, g = [], w = true, O = false;
          try {
            for (p = p.call(s); !(w = (m = p.next()).done) && (g.push(m.value), !l || g.length !== l); w = true)
              ;
          } catch (I) {
            O = true, x = I;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (O)
                throw x;
            }
          }
          return g;
        }
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return gu(s, l);
          var p = Object.prototype.toString.call(s).slice(8, -1);
          return p === "Object" && s.constructor && (p = s.constructor.name), p === "Map" || p === "Set" ? Array.from(s) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? gu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(mu, "mu");
    c(mu, "be");
    function gu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(gu, "gu");
    c(gu, "xe");
    function ef(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(ef, "ef");
    c(ef, "we");
    function In(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(In, "In");
    c(In, "_e"), Object.defineProperty(Mn, "__esModule", { value: true }), Mn.default = void 0, Mn.getRectOffset = bu;
    var tf = function() {
      function i(l) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), In(this, "states", []), In(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), In(this, "startDelta", void 0), In(this, "result", void 0), In(this, "endResult", void 0), In(this, "edges", void 0), In(this, "interaction", void 0), this.interaction = l, this.result = $o();
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "start", value: function(l, p) {
        var m = l.phase, x = this.interaction, g = function(O) {
          var I = O.interactable.options[O.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var L = I[N];
            return L && L.enabled && { options: L, methods: L._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(x);
        this.prepareStates(g), this.edges = (0, W.default)({}, x.edges), this.startOffset = bu(x.rect, p), this.startDelta = { x: 0, y: 0 };
        var w = this.fillArg({ phase: m, pageCoords: p, preEnd: false });
        return this.result = $o(), this.startAll(w), this.result = this.setAll(w);
      } }, { key: "fillArg", value: function(l) {
        var p = this.interaction;
        return l.interaction = p, l.interactable = p.interactable, l.element = p.element, l.rect = l.rect || p.rect, l.edges = this.edges, l.startOffset = this.startOffset, l;
      } }, { key: "startAll", value: function(l) {
        for (var p = 0; p < this.states.length; p++) {
          var m = this.states[p];
          m.methods.start && (l.state = m, m.methods.start(l));
        }
      } }, { key: "setAll", value: function(l) {
        var p = l.phase, m = l.preEnd, x = l.skipModifiers, g = l.rect;
        l.coords = (0, W.default)({}, l.pageCoords), l.rect = (0, W.default)({}, g);
        for (var w = x ? this.states.slice(x) : this.states, O = $o(l.coords, l.rect), I = 0; I < w.length; I++) {
          var P, N = w[I], L = N.options, _ = (0, W.default)({}, l.coords), q = null;
          (P = N.methods) != null && P.set && this.shouldDo(L, m, p) && (l.state = N, q = N.methods.set(l), ue.addEdges(this.interaction.edges, l.rect, { x: l.coords.x - _.x, y: l.coords.y - _.y })), O.eventProps.push(q);
        }
        O.delta.x = l.coords.x - l.pageCoords.x, O.delta.y = l.coords.y - l.pageCoords.y, O.rectDelta.left = l.rect.left - g.left, O.rectDelta.right = l.rect.right - g.right, O.rectDelta.top = l.rect.top - g.top, O.rectDelta.bottom = l.rect.bottom - g.bottom;
        var X = this.result.coords, F = this.result.rect;
        if (X && F) {
          var ne = O.rect.left !== F.left || O.rect.right !== F.right || O.rect.top !== F.top || O.rect.bottom !== F.bottom;
          O.changed = ne || X.x !== O.coords.x || X.y !== O.coords.y;
        }
        return O;
      } }, { key: "applyToInteraction", value: function(l) {
        var p = this.interaction, m = l.phase, x = p.coords.cur, g = p.coords.start, w = this.result, O = this.startDelta, I = w.delta;
        m === "start" && (0, W.default)(this.startDelta, w.delta);
        for (var P = 0; P < [[g, O], [x, I]].length; P++) {
          var N = mu([[g, O], [x, I]][P], 2), L = N[0], _ = N[1];
          L.page.x += _.x, L.page.y += _.y, L.client.x += _.x, L.client.y += _.y;
        }
        var q = this.result.rectDelta, X = l.rect || p.rect;
        X.left += q.left, X.right += q.right, X.top += q.top, X.bottom += q.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(l) {
        var p = this.interaction, m = l.phase, x = l.preEnd, g = l.skipModifiers, w = this.setAll(this.fillArg({ preEnd: x, phase: m, pageCoords: l.modifiedCoords || p.coords.cur.page }));
        if (this.result = w, !w.changed && (!g || g < this.states.length) && p.interacting())
          return false;
        if (l.modifiedCoords) {
          var O = p.coords.cur.page, I = { x: l.modifiedCoords.x - O.x, y: l.modifiedCoords.y - O.y };
          w.coords.x += I.x, w.coords.y += I.y, w.delta.x += I.x, w.delta.y += I.y;
        }
        this.applyToInteraction(l);
      } }, { key: "beforeEnd", value: function(l) {
        var p = l.interaction, m = l.event, x = this.states;
        if (x && x.length) {
          for (var g = false, w = 0; w < x.length; w++) {
            var O = x[w];
            l.state = O;
            var I = O.options, P = O.methods, N = P.beforeEnd && P.beforeEnd(l);
            if (N)
              return this.endResult = N, false;
            g = g || !g && this.shouldDo(I, true, l.phase, true);
          }
          g && p.move({ event: m, preEnd: true });
        }
      } }, { key: "stop", value: function(l) {
        var p = l.interaction;
        if (this.states && this.states.length) {
          var m = (0, W.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, l);
          this.fillArg(m);
          for (var x = 0; x < this.states.length; x++) {
            var g = this.states[x];
            m.state = g, g.methods.stop && g.methods.stop(m);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(l) {
        this.states = [];
        for (var p = 0; p < l.length; p++) {
          var m = l[p], x = m.options, g = m.methods, w = m.name;
          this.states.push({ options: x, methods: g, index: p, name: w });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(l) {
        var p = l.interaction, m = p.coords, x = p.rect, g = p.modification;
        if (g.result) {
          for (var w = g.startDelta, O = g.result, I = O.delta, P = O.rectDelta, N = [[m.start, w], [m.cur, I]], L = 0; L < N.length; L++) {
            var _ = mu(N[L], 2), q = _[0], X = _[1];
            q.page.x -= X.x, q.page.y -= X.y, q.client.x -= X.x, q.client.y -= X.y;
          }
          x.left -= P.left, x.right -= P.right, x.top -= P.top, x.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(l, p, m, x) {
        return !(!l || l.enabled === false || x && !l.endOnly || l.endOnly && !p || m === "start" && !l.setStart);
      } }, { key: "copyFrom", value: function(l) {
        this.startOffset = l.startOffset, this.startDelta = l.startDelta, this.edges = l.edges, this.states = l.states.map(function(p) {
          return (0, On.default)(p);
        }), this.result = $o((0, W.default)({}, l.result.coords), (0, W.default)({}, l.result.rect));
      } }, { key: "destroy", value: function() {
        for (var l in this)
          this[l] = null;
      } }]) && ef(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function $o(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name($o, "$o");
    c($o, "Oe");
    function bu(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(bu, "bu");
    c(bu, "Ee"), Mn.default = tf;
    var Et = {};
    function qo(i) {
      var o = i.iEvent, s = i.interaction.modification.result;
      s && (o.modifiers = s.eventProps);
    }
    __name(qo, "qo");
    c(qo, "Te"), Object.defineProperty(Et, "__esModule", { value: true }), Et.addEventModifiers = qo, Et.default = void 0, Et.makeModifier = function(i, o) {
      var s = i.defaults, l = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, p = c(function(m) {
        var x = m || {};
        for (var g in x.enabled = x.enabled !== false, s)
          g in x || (x[g] = s[g]);
        var w = { options: x, methods: l, name: o, enable: function() {
          return x.enabled = true, w;
        }, disable: function() {
          return x.enabled = false, w;
        } };
        return w;
      }, "o");
      return o && typeof o == "string" && (p._defaults = s, p._methods = l), p;
    };
    var rf = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.modification = new Mn.default(o);
    }, "interactions:before-action-start": function(i) {
      var o = i.interaction.modification;
      o.start(i, i.interaction.coords.start.page), i.interaction.edges = o.edges, o.applyToInteraction(i);
    }, "interactions:before-action-move": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:before-action-end": function(i) {
      return i.interaction.modification.beforeEnd(i);
    }, "interactions:action-start": qo, "interactions:action-move": qo, "interactions:action-end": qo, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, nf = rf;
    Et.default = nf;
    var ki = {};
    Object.defineProperty(ki, "__esModule", { value: true }), ki.defaults = void 0, ki.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ni = {};
    function ys(i) {
      return ys = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ys(i);
    }
    __name(ys, "ys");
    c(ys, "De");
    function of(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(of, "of");
    c(of, "Ae");
    function ws(i, o) {
      return ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, ws(i, o);
    }
    __name(ws, "ws");
    c(ws, "ze");
    function af(i, o) {
      if (o && (ys(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return je(i);
    }
    __name(af, "af");
    c(af, "Ce");
    function je(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(je, "je");
    c(je, "Re");
    function Fo(i) {
      return Fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Fo(i);
    }
    __name(Fo, "Fo");
    c(Fo, "Fe");
    function Ue(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Ue, "Ue");
    c(Ue, "Xe"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.InteractEvent = void 0;
    var yu = function(i) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), w && ws(g, w);
      })(x, i);
      var o, s, l, p, m = (l = x, p = function() {
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
        var g, w = Fo(l);
        if (p) {
          var O = Fo(this).constructor;
          g = Reflect.construct(w, arguments, O);
        } else
          g = w.apply(this, arguments);
        return af(this, g);
      });
      function x(g, w, O, I, P, N, L) {
        var _;
        (function(qe, Se) {
          if (!(qe instanceof Se))
            throw new TypeError("Cannot call a class as a function");
        })(this, x), Ue(je(_ = m.call(this, g)), "relatedTarget", null), Ue(je(_), "screenX", void 0), Ue(je(_), "screenY", void 0), Ue(je(_), "button", void 0), Ue(je(_), "buttons", void 0), Ue(je(_), "ctrlKey", void 0), Ue(je(_), "shiftKey", void 0), Ue(je(_), "altKey", void 0), Ue(je(_), "metaKey", void 0), Ue(je(_), "page", void 0), Ue(je(_), "client", void 0), Ue(je(_), "delta", void 0), Ue(je(_), "rect", void 0), Ue(je(_), "x0", void 0), Ue(je(_), "y0", void 0), Ue(je(_), "t0", void 0), Ue(je(_), "dt", void 0), Ue(je(_), "duration", void 0), Ue(je(_), "clientX0", void 0), Ue(je(_), "clientY0", void 0), Ue(je(_), "velocity", void 0), Ue(je(_), "speed", void 0), Ue(je(_), "swipe", void 0), Ue(je(_), "axes", void 0), Ue(je(_), "preEnd", void 0), P = P || g.element;
        var q = g.interactable, X = (q && q.options || ki.defaults).deltaSource, F = (0, De.default)(q, P, O), ne = I === "start", oe = I === "end", fe = ne ? je(_) : g.prevEvent, Pe = ne ? g.coords.start : oe ? { page: fe.page, client: fe.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return _.page = (0, W.default)({}, Pe.page), _.client = (0, W.default)({}, Pe.client), _.rect = (0, W.default)({}, g.rect), _.timeStamp = Pe.timeStamp, oe || (_.page.x -= F.x, _.page.y -= F.y, _.client.x -= F.x, _.client.y -= F.y), _.ctrlKey = w.ctrlKey, _.altKey = w.altKey, _.shiftKey = w.shiftKey, _.metaKey = w.metaKey, _.button = w.button, _.buttons = w.buttons, _.target = P, _.currentTarget = P, _.preEnd = N, _.type = L || O + (I || ""), _.interactable = q, _.t0 = ne ? g.pointers[g.pointers.length - 1].downTime : fe.t0, _.x0 = g.coords.start.page.x - F.x, _.y0 = g.coords.start.page.y - F.y, _.clientX0 = g.coords.start.client.x - F.x, _.clientY0 = g.coords.start.client.y - F.y, _.delta = ne || oe ? { x: 0, y: 0 } : { x: _[X].x - fe[X].x, y: _[X].y - fe[X].y }, _.dt = g.coords.delta.timeStamp, _.duration = _.timeStamp - _.t0, _.velocity = (0, W.default)({}, g.coords.velocity[X]), _.speed = (0, Xe.default)(_.velocity.x, _.velocity.y), _.swipe = oe || I === "inertiastart" ? _.getSwipe() : null, _;
      }
      __name(x, "x");
      return c(x, "a"), o = x, (s = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var w = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        w < 0 && (w += 360);
        var O = 112.5 <= w && w < 247.5, I = 202.5 <= w && w < 337.5;
        return { up: I, down: !I && 22.5 <= w && w < 157.5, left: O, right: !O && (292.5 <= w || w < 67.5), angle: w, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && of(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), x;
    }(rr.BaseEvent);
    Ni.InteractEvent = yu, Object.defineProperties(yu.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(i) {
      this.page.x = i;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(i) {
      this.page.y = i;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(i) {
      this.client.x = i;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(i) {
      this.client.y = i;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(i) {
      this.delta.x = i;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(i) {
      this.delta.y = i;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(i) {
      this.velocity.x = i;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(i) {
      this.velocity.y = i;
    } } });
    var Gi = {};
    function wu(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(wu, "wu");
    c(wu, "We");
    function sf(i, o, s) {
      return o && wu(i.prototype, o), s && wu(i, s), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(sf, "sf");
    c(sf, "Le");
    function Li(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Li, "Li");
    c(Li, "Ue"), Object.defineProperty(Gi, "__esModule", { value: true }), Gi.PointerInfo = void 0;
    var lf = sf(c(/* @__PURE__ */ __name(function i(o, s, l, p, m) {
      (function(x, g) {
        if (!(x instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), Li(this, "id", void 0), Li(this, "pointer", void 0), Li(this, "event", void 0), Li(this, "downTime", void 0), Li(this, "downTarget", void 0), this.id = o, this.pointer = s, this.event = l, this.downTime = p, this.downTarget = m;
    }, "i"), "t"));
    Gi.PointerInfo = lf;
    var Uo, Wo, $t = {};
    function uf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(uf, "uf");
    c(uf, "$e");
    function Ye(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Ye, "Ye");
    c(Ye, "He"), Object.defineProperty($t, "__esModule", { value: true }), $t.Interaction = void 0, Object.defineProperty($t, "PointerInfo", { enumerable: true, get: function() {
      return Gi.PointerInfo;
    } }), $t.default = $t._ProxyValues = $t._ProxyMethods = void 0, $t._ProxyValues = Uo, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(Uo || ($t._ProxyValues = Uo = {})), $t._ProxyMethods = Wo, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Wo || ($t._ProxyMethods = Wo = {}));
    var cf = 0, xu = function() {
      function i(l) {
        var p = this, m = l.pointerType, x = l.scopeFire;
        (function(N, L) {
          if (!(N instanceof L))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ye(this, "interactable", null), Ye(this, "element", null), Ye(this, "rect", null), Ye(this, "_rects", void 0), Ye(this, "edges", null), Ye(this, "_scopeFire", void 0), Ye(this, "prepared", { name: null, axis: null, edges: null }), Ye(this, "pointerType", void 0), Ye(this, "pointers", []), Ye(this, "downEvent", null), Ye(this, "downPointer", {}), Ye(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ye(this, "prevEvent", null), Ye(this, "pointerIsDown", false), Ye(this, "pointerWasMoved", false), Ye(this, "_interacting", false), Ye(this, "_ending", false), Ye(this, "_stopped", true), Ye(this, "_proxy", null), Ye(this, "simulation", null), Ye(this, "doMove", (0, nr.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ye(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), Ye(this, "_id", cf++), this._scopeFire = x, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var w = c(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return g[N];
          } });
        }, "a");
        for (var O in Uo)
          w(O);
        var I = c(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return g[N].apply(g, arguments);
          } });
        }, "l");
        for (var P in Wo)
          I(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, s = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(l, p, m) {
        var x = this.updatePointer(l, p, m, true), g = this.pointers[x];
        this._scopeFire("interactions:down", { pointer: l, event: p, eventTarget: m, pointerIndex: x, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(l, p, m) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (l.name === "gesture" ? 2 : 1) || !p.options[l.name].enabled) && ((0, nr.copyAction)(this.prepared, l), this.interactable = p, this.element = m, this.rect = p.getRect(m), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(l, p, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(l, p, m, false);
        var x, g, w = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (x = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Xe.default)(x, g) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(l), I = { pointer: l, pointerIndex: O, pointerInfo: this.pointers[O], event: p, type: "move", eventTarget: m, dx: x, dy: g, duplicate: w, interaction: this };
        w || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), w || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(l) {
        l && l.event || J.setZeroCoords(this.coords.delta), (l = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, l || {})).phase = "move", this._doPhase(l);
      } }, { key: "pointerUp", value: function(l, p, m, x) {
        var g = this.getPointerIndex(l);
        g === -1 && (g = this.updatePointer(l, p, m, false));
        var w = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(w), { pointer: l, pointerIndex: g, pointerInfo: this.pointers[g], event: p, eventTarget: m, type: w, curEventTarget: x, interaction: this }), this.simulation || this.end(p), this.removePointer(l, p);
      } }, { key: "documentBlur", value: function(l) {
        this.end(l), this._scopeFire("interactions:blur", { event: l, type: "blur", interaction: this });
      } }, { key: "end", value: function(l) {
        var p;
        this._ending = true, l = l || this._latestPointer.event, this.interacting() && (p = this._doPhase({ event: l, interaction: this, phase: "end" })), this._ending = false, p === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(l) {
        var p = J.getPointerId(l);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Me.findIndex(this.pointers, function(m) {
          return m.id === p;
        });
      } }, { key: "getPointerInfo", value: function(l) {
        return this.pointers[this.getPointerIndex(l)];
      } }, { key: "updatePointer", value: function(l, p, m, x) {
        var g = J.getPointerId(l), w = this.getPointerIndex(l), O = this.pointers[w];
        return x = x !== false && (x || /(down|start)$/i.test(p.type)), O ? O.pointer = l : (O = new Gi.PointerInfo(g, l, p, null, null), w = this.pointers.length, this.pointers.push(O)), J.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), x && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = m, J.pointerExtend(this.downPointer, l), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(l, p, m), this._scopeFire("interactions:update-pointer", { pointer: l, event: p, eventTarget: m, down: x, pointerInfo: O, pointerIndex: w, interaction: this }), w;
      } }, { key: "removePointer", value: function(l, p) {
        var m = this.getPointerIndex(l);
        if (m !== -1) {
          var x = this.pointers[m];
          this._scopeFire("interactions:remove-pointer", { pointer: l, event: p, eventTarget: null, pointerIndex: m, pointerInfo: x, interaction: this }), this.pointers.splice(m, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(l, p, m) {
        this._latestPointer.pointer = l, this._latestPointer.event = p, this._latestPointer.eventTarget = m;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(l, p, m, x) {
        return new Ni.InteractEvent(this, l, this.prepared.name, p, this.element, m, x);
      } }, { key: "_fireEvent", value: function(l) {
        var p;
        (p = this.interactable) == null || p.fire(l), (!this.prevEvent || l.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = l);
      } }, { key: "_doPhase", value: function(l) {
        var p = l.event, m = l.phase, x = l.preEnd, g = l.type, w = this.rect;
        if (w && m === "move" && (ue.addEdges(this.edges, w, this.coords.delta[this.interactable.options.deltaSource]), w.width = w.right - w.left, w.height = w.bottom - w.top), this._scopeFire("interactions:before-action-".concat(m), l) === false)
          return false;
        var O = l.iEvent = this._createPreparedEvent(p, m, x, g);
        return this._scopeFire("interactions:action-".concat(m), l), m === "start" && (this.prevEvent = O), this._fireEvent(O), this._scopeFire("interactions:after-action-".concat(m), l), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], s && uf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    $t.Interaction = xu;
    var pf = xu;
    $t.default = pf;
    var An = {};
    function Eu(i) {
      i.pointerIsDown && (Es(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(Eu, "Eu");
    c(Eu, "tn");
    function Su(i) {
      xs(i.interaction);
    }
    __name(Su, "Su");
    c(Su, "en");
    function xs(i) {
      if (!function(s) {
        return !(!s.offset.pending.x && !s.offset.pending.y);
      }(i))
        return false;
      var o = i.offset.pending;
      return Es(i.coords.cur, o), Es(i.coords.delta, o), ue.addEdges(i.edges, i.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(xs, "xs");
    c(xs, "nn");
    function df(i) {
      var o = i.x, s = i.y;
      this.offset.pending.x += o, this.offset.pending.y += s, this.offset.total.x += o, this.offset.total.y += s;
    }
    __name(df, "df");
    c(df, "rn");
    function Es(i, o) {
      var s = i.page, l = i.client, p = o.x, m = o.y;
      s.x += p, s.y += m, l.x += p, l.y += m;
    }
    __name(Es, "Es");
    c(Es, "on"), Object.defineProperty(An, "__esModule", { value: true }), An.addTotal = Eu, An.applyPending = xs, An.default = void 0, $t._ProxyMethods.offsetBy = "";
    var ff = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = df;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return Eu(i.interaction);
    }, "interactions:before-action-start": Su, "interactions:before-action-move": Su, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (xs(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, hf = ff;
    An.default = hf;
    var ei = {};
    function vf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(vf, "vf");
    c(vf, "un");
    function bt(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(bt, "bt");
    c(bt, "cn"), Object.defineProperty(ei, "__esModule", { value: true }), ei.default = ei.InertiaState = void 0;
    var Cu = function() {
      function i(l) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), bt(this, "active", false), bt(this, "isModified", false), bt(this, "smoothEnd", false), bt(this, "allowResume", false), bt(this, "modification", void 0), bt(this, "modifierCount", 0), bt(this, "modifierArg", void 0), bt(this, "startCoords", void 0), bt(this, "t0", 0), bt(this, "v0", 0), bt(this, "te", 0), bt(this, "targetOffset", void 0), bt(this, "modifiedOffset", void 0), bt(this, "currentOffset", void 0), bt(this, "lambda_v0", 0), bt(this, "one_ve_v0", 0), bt(this, "timeout", void 0), bt(this, "interaction", void 0), this.interaction = l;
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "start", value: function(l) {
        var p = this.interaction, m = Vo(p);
        if (!m || !m.enabled)
          return false;
        var x = p.coords.velocity.client, g = (0, Xe.default)(x.x, x.y), w = this.modification || (this.modification = new Mn.default(p));
        if (w.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = w.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (w.result = w.setAll(this.modifierArg), !w.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: l, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var l = this, p = this.interaction.coords.velocity.client, m = Vo(this.interaction), x = m.resistance, g = -Math.log(m.endSpeed / this.v0) / x;
        this.targetOffset = { x: (p.x - g) / x, y: (p.y - g) / x }, this.te = g, this.lambda_v0 = x / this.v0, this.one_ve_v0 = 1 - m.endSpeed / this.v0;
        var w = this.modification, O = this.modifierArg;
        O.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, w.result = w.setAll(O), w.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + w.result.delta.x, y: this.targetOffset.y + w.result.delta.y }), this.onNextFrame(function() {
          return l.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var l = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return l.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(l) {
        var p = this;
        this.timeout = At.default.request(function() {
          p.active && l();
        });
      } }, { key: "inertiaTick", value: function() {
        var l, p, m, x, g, w = this, O = this.interaction, I = Vo(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var N, L = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (l = this.targetOffset.x, p = this.targetOffset.y, m = this.modifiedOffset.x, x = this.modifiedOffset.y, N = { x: Tu(g = L, 0, l, m), y: Tu(g, 0, p, x) }) : N = { x: this.targetOffset.x * L, y: this.targetOffset.y * L };
          var _ = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += _.x, this.currentOffset.y += _.y, O.offsetBy(_), O.move(), this.onNextFrame(function() {
            return w.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var l = this, p = this.interaction, m = p._now() - this.t0, x = Vo(p).smoothEndDuration;
        if (m < x) {
          var g = { x: Ou(m, 0, this.targetOffset.x, x), y: Ou(m, 0, this.targetOffset.y, x) }, w = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, p.offsetBy(w), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return l.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(l) {
        var p = l.pointer, m = l.event, x = l.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(p, m, x, true), g._doPhase({ interaction: g, event: m, phase: "resume" }), (0, J.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, At.default.cancel(this.timeout);
      } }]) && vf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Vo(i) {
      var o = i.interactable, s = i.prepared;
      return o && o.options && s.name && o.options[s.name].inertia;
    }
    __name(Vo, "Vo");
    c(Vo, "dn"), ei.InertiaState = Cu;
    var mf = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(An.default), i.usePlugin(Et.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new Cu(o);
    }, "interactions:before-action-end": function(i) {
      var o = i.interaction, s = i.event;
      return (!o._interacting || o.simulation || !o.inertia.start(s)) && null;
    }, "interactions:down": function(i) {
      var o = i.interaction, s = i.eventTarget, l = o.inertia;
      if (l.active)
        for (var p = s; u.default.element(p); ) {
          if (p === o.element) {
            l.resume(i);
            break;
          }
          p = R.parentNode(p);
        }
    }, "interactions:stop": function(i) {
      var o = i.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(i) {
      var o = i.interaction.modification;
      o.stop(i), o.start(i, i.interaction.coords.cur.page), o.applyToInteraction(i);
    }, "interactions:before-action-inertiastart": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:action-resume": Et.addEventModifiers, "interactions:action-inertiastart": Et.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    function Tu(i, o, s, l) {
      var p = 1 - i;
      return p * p * o + 2 * p * i * s + i * i * l;
    }
    __name(Tu, "Tu");
    c(Tu, "vn");
    function Ou(i, o, s, l) {
      return -s * (i /= l) * (i - 2) + o;
    }
    __name(Ou, "Ou");
    c(Ou, "hn");
    var gf = mf;
    ei.default = gf;
    var ji = {};
    function bf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(bf, "bf");
    c(bf, "mn");
    function Hi(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Hi, "Hi");
    c(Hi, "bn");
    function Mu(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        if (i.immediatePropagationStopped)
          break;
        l(i);
      }
    }
    __name(Mu, "Mu");
    c(Mu, "xn"), Object.defineProperty(ji, "__esModule", { value: true }), ji.Eventable = void 0;
    var yf = function() {
      function i(l) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Hi(this, "options", void 0), Hi(this, "types", {}), Hi(this, "propagationStopped", false), Hi(this, "immediatePropagationStopped", false), Hi(this, "global", void 0), this.options = (0, W.default)({}, l || {});
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "fire", value: function(l) {
        var p, m = this.global;
        (p = this.types[l.type]) && Mu(l, p), !l.propagationStopped && m && (p = m[l.type]) && Mu(l, p);
      } }, { key: "on", value: function(l, p) {
        var m = (0, Le.default)(l, p);
        for (l in m)
          this.types[l] = Me.merge(this.types[l] || [], m[l]);
      } }, { key: "off", value: function(l, p) {
        var m = (0, Le.default)(l, p);
        for (l in m) {
          var x = this.types[l];
          if (x && x.length)
            for (var g = 0; g < m[l].length; g++) {
              var w = m[l][g], O = x.indexOf(w);
              O !== -1 && x.splice(O, 1);
            }
        }
      } }, { key: "getRect", value: function(l) {
        return null;
      } }]) && bf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    ji.Eventable = yf;
    var Bi = {};
    Object.defineProperty(Bi, "__esModule", { value: true }), Bi.default = function(i, o) {
      if (o.phaselessTypes[i])
        return true;
      for (var s in o.map)
        if (i.indexOf(s) === 0 && i.substr(s.length) in o.phases)
          return true;
      return false;
    };
    var Ss = {};
    Object.defineProperty(Ss, "__esModule", { value: true }), Ss.createInteractStatic = function(i) {
      var o = c(/* @__PURE__ */ __name(function s(l, p) {
        var m = i.interactables.get(l, p);
        return m || ((m = i.interactables.new(l, p)).events.global = s.globalEvents), m;
      }, "s"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(s, l) {
        return this.scope.usePlugin(s, l), this;
      }, o.isSet = function(s, l) {
        return !!this.scope.interactables.get(s, l && l.context);
      }, o.on = (0, nr.warnOnce)(function(s, l, p) {
        if (u.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u.default.array(s)) {
          for (var m = 0; m < s.length; m++) {
            var x = s[m];
            this.on(x, l, p);
          }
          return this;
        }
        if (u.default.object(s)) {
          for (var g in s)
            this.on(g, s[g], l);
          return this;
        }
        return (0, Bi.default)(s, this.scope.actions) ? this.globalEvents[s] ? this.globalEvents[s].push(l) : this.globalEvents[s] = [l] : this.scope.events.add(this.scope.document, s, l, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, nr.warnOnce)(function(s, l, p) {
        if (u.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u.default.array(s)) {
          for (var m = 0; m < s.length; m++) {
            var x = s[m];
            this.off(x, l, p);
          }
          return this;
        }
        if (u.default.object(s)) {
          for (var g in s)
            this.off(g, s[g], l);
          return this;
        }
        var w;
        return (0, Bi.default)(s, this.scope.actions) ? s in this.globalEvents && (w = this.globalEvents[s].indexOf(l)) !== -1 && this.globalEvents[s].splice(w, 1) : this.scope.events.remove(this.scope.document, s, l, p), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return $.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return $.default.supportsPointerEvent;
      }, o.stop = function() {
        for (var s = 0; s < this.scope.interactions.list.length; s++)
          this.scope.interactions.list[s].stop();
        return this;
      }, o.pointerMoveTolerance = function(s) {
        return u.default.number(s) ? (this.scope.interactions.pointerMoveTolerance = s, this) : this.scope.interactions.pointerMoveTolerance;
      }, o.addDocument = function(s, l) {
        this.scope.addDocument(s, l);
      }, o.removeDocument = function(s) {
        this.scope.removeDocument(s);
      }, o;
    };
    var Yo = {};
    function wf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(wf, "wf");
    c(wf, "En");
    function qr(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(qr, "qr");
    c(qr, "Sn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.Interactable = void 0;
    var xf = function() {
      function i(l, p, m, x) {
        (function(g, w) {
          if (!(g instanceof w))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), qr(this, "options", void 0), qr(this, "_actions", void 0), qr(this, "target", void 0), qr(this, "events", new ji.Eventable()), qr(this, "_context", void 0), qr(this, "_win", void 0), qr(this, "_doc", void 0), qr(this, "_scopeEvents", void 0), qr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = l, this._context = p.context || m, this._win = (0, n.getWindow)((0, R.trySelector)(l) ? this._context : l), this._doc = this._win.document, this._scopeEvents = x, this.set(p);
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(l, p) {
        return u.default.func(p.onstart) && this.on("".concat(l, "start"), p.onstart), u.default.func(p.onmove) && this.on("".concat(l, "move"), p.onmove), u.default.func(p.onend) && this.on("".concat(l, "end"), p.onend), u.default.func(p.oninertiastart) && this.on("".concat(l, "inertiastart"), p.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(l, p, m) {
        (u.default.array(p) || u.default.object(p)) && this.off(l, p), (u.default.array(m) || u.default.object(m)) && this.on(l, m);
      } }, { key: "setPerAction", value: function(l, p) {
        var m = this._defaults;
        for (var x in p) {
          var g = x, w = this.options[l], O = p[g];
          g === "listeners" && this.updatePerActionListeners(l, w.listeners, O), u.default.array(O) ? w[g] = Me.from(O) : u.default.plainObject(O) ? (w[g] = (0, W.default)(w[g] || {}, (0, On.default)(O)), u.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (w[g].enabled = O.enabled !== false)) : u.default.bool(O) && u.default.object(m.perAction[g]) ? w[g].enabled = O : w[g] = O;
        }
      } }, { key: "getRect", value: function(l) {
        return l = l || (u.default.element(this.target) ? this.target : null), u.default.string(this.target) && (l = l || this._context.querySelector(this.target)), (0, R.getElementRect)(l);
      } }, { key: "rectChecker", value: function(l) {
        var p = this;
        return u.default.func(l) ? (this._rectChecker = l, this.getRect = function(m) {
          var x = (0, W.default)({}, p._rectChecker(m));
          return "width" in x || (x.width = x.right - x.left, x.height = x.bottom - x.top), x;
        }, this) : l === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(l, p) {
        if ((0, R.trySelector)(p) || u.default.object(p)) {
          for (var m in this.options[l] = p, this._actions.map)
            this.options[m][l] = p;
          return this;
        }
        return this.options[l];
      } }, { key: "origin", value: function(l) {
        return this._backCompatOption("origin", l);
      } }, { key: "deltaSource", value: function(l) {
        return l === "page" || l === "client" ? (this.options.deltaSource = l, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(l) {
        return this._context === l.ownerDocument || (0, R.nodeContains)(this._context, l);
      } }, { key: "testIgnoreAllow", value: function(l, p, m) {
        return !this.testIgnore(l.ignoreFrom, p, m) && this.testAllow(l.allowFrom, p, m);
      } }, { key: "testAllow", value: function(l, p, m) {
        return !l || !!u.default.element(m) && (u.default.string(l) ? (0, R.matchesUpTo)(m, l, p) : !!u.default.element(l) && (0, R.nodeContains)(l, m));
      } }, { key: "testIgnore", value: function(l, p, m) {
        return !(!l || !u.default.element(m)) && (u.default.string(l) ? (0, R.matchesUpTo)(m, l, p) : !!u.default.element(l) && (0, R.nodeContains)(l, m));
      } }, { key: "fire", value: function(l) {
        return this.events.fire(l), this;
      } }, { key: "_onOff", value: function(l, p, m, x) {
        u.default.object(p) && !u.default.array(p) && (x = m, m = null);
        var g = l === "on" ? "add" : "remove", w = (0, Le.default)(p, m);
        for (var O in w) {
          O === "wheel" && (O = $.default.wheelEvent);
          for (var I = 0; I < w[O].length; I++) {
            var P = w[O][I];
            (0, Bi.default)(O, this._actions) ? this.events[l](O, P) : u.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, O, P, x) : this._scopeEvents[g](this.target, O, P, x);
          }
        }
        return this;
      } }, { key: "on", value: function(l, p, m) {
        return this._onOff("on", l, p, m);
      } }, { key: "off", value: function(l, p, m) {
        return this._onOff("off", l, p, m);
      } }, { key: "set", value: function(l) {
        var p = this._defaults;
        for (var m in u.default.object(l) || (l = {}), this.options = (0, On.default)(p.base), this._actions.methodDict) {
          var x = m, g = this._actions.methodDict[x];
          this.options[x] = {}, this.setPerAction(x, (0, W.default)((0, W.default)({}, p.perAction), p.actions[x])), this[g](l[x]);
        }
        for (var w in l)
          u.default.func(this[w]) && this[w](l[w]);
        return this;
      } }, { key: "unset", value: function() {
        if (u.default.string(this.target))
          for (var l in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[l], m = p.length - 1; m >= 0; m--) {
              var x = p[m], g = x.selector, w = x.context, O = x.listeners;
              g === this.target && w === this._context && p.splice(m, 1);
              for (var I = O.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, l, O[I][0], O[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && wf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Yo.Interactable = xf;
    var Xo = {};
    function Ef(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Ef, "Ef");
    c(Ef, "Mn");
    function Cs(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Cs, "Cs");
    c(Cs, "kn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.InteractableSet = void 0;
    var Sf = function() {
      function i(l) {
        var p = this;
        (function(m, x) {
          if (!(m instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Cs(this, "list", []), Cs(this, "selectorMap", {}), Cs(this, "scope", void 0), this.scope = l, l.addListeners({ "interactable:unset": function(m) {
          var x = m.interactable, g = x.target, w = x._context, O = u.default.string(g) ? p.selectorMap[g] : g[p.scope.id], I = Me.findIndex(O, function(P) {
            return P.context === w;
          });
          O[I] && (O[I].context = null, O[I].interactable = null), O.splice(I, 1);
        } });
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "new", value: function(l, p) {
        p = (0, W.default)(p || {}, { actions: this.scope.actions });
        var m = new this.scope.Interactable(l, p, this.scope.document, this.scope.events), x = { context: m._context, interactable: m };
        return this.scope.addDocument(m._doc), this.list.push(m), u.default.string(l) ? (this.selectorMap[l] || (this.selectorMap[l] = []), this.selectorMap[l].push(x)) : (m.target[this.scope.id] || Object.defineProperty(l, this.scope.id, { value: [], configurable: true }), l[this.scope.id].push(x)), this.scope.fire("interactable:new", { target: l, options: p, interactable: m, win: this.scope._win }), m;
      } }, { key: "get", value: function(l, p) {
        var m = p && p.context || this.scope.document, x = u.default.string(l), g = x ? this.selectorMap[l] : l[this.scope.id];
        if (!g)
          return null;
        var w = Me.find(g, function(O) {
          return O.context === m && (x || O.interactable.inContext(l));
        });
        return w && w.interactable;
      } }, { key: "forEachMatch", value: function(l, p) {
        for (var m = 0; m < this.list.length; m++) {
          var x = this.list[m], g = void 0;
          if ((u.default.string(x.target) ? u.default.element(l) && R.matchesSelector(l, x.target) : l === x.target) && x.inContext(l) && (g = p(x)), g !== void 0)
            return g;
        }
      } }]) && Ef(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Xo.InteractableSet = Sf;
    var Zo = {};
    function Cf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Cf, "Cf");
    c(Cf, "An");
    function Ts(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Ts, "Ts");
    c(Ts, "zn");
    function Os(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var p = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (p != null) {
          var m, x, g = [], w = true, O = false;
          try {
            for (p = p.call(s); !(w = (m = p.next()).done) && (g.push(m.value), !l || g.length !== l); w = true)
              ;
          } catch (I) {
            O = true, x = I;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (O)
                throw x;
            }
          }
          return g;
        }
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Iu(s, l);
          var p = Object.prototype.toString.call(s).slice(8, -1);
          return p === "Object" && s.constructor && (p = s.constructor.name), p === "Map" || p === "Set" ? Array.from(s) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Iu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Os, "Os");
    c(Os, "Cn");
    function Iu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Iu, "Iu");
    c(Iu, "Rn"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var Tf = function() {
      function i(l) {
        (function(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ts(this, "currentTarget", void 0), Ts(this, "originalEvent", void 0), Ts(this, "type", void 0), this.originalEvent = l, (0, We.default)(this, l);
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Cf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function $i(i) {
      if (!u.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, W.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name($i, "$i");
    c($i, "Xn");
    var Of = { id: "events", install: function(i) {
      var o, s = [], l = {}, p = [], m = { add: x, remove: g, addDelegate: function(I, P, N, L, _) {
        var q = $i(_);
        if (!l[N]) {
          l[N] = [];
          for (var X = 0; X < p.length; X++) {
            var F = p[X];
            x(F, N, w), x(F, N, O, true);
          }
        }
        var ne = l[N], oe = Me.find(ne, function(fe) {
          return fe.selector === I && fe.context === P;
        });
        oe || (oe = { selector: I, context: P, listeners: [] }, ne.push(oe)), oe.listeners.push([L, q]);
      }, removeDelegate: function(I, P, N, L, _) {
        var q, X = $i(_), F = l[N], ne = false;
        if (F)
          for (q = F.length - 1; q >= 0; q--) {
            var oe = F[q];
            if (oe.selector === I && oe.context === P) {
              for (var fe = oe.listeners, Pe = fe.length - 1; Pe >= 0; Pe--) {
                var qe = Os(fe[Pe], 2), Se = qe[0], He = qe[1], pr = He.capture, Ur = He.passive;
                if (Se === L && pr === X.capture && Ur === X.passive) {
                  fe.splice(Pe, 1), fe.length || (F.splice(q, 1), g(P, N, w), g(P, N, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: w, delegateUseCapture: O, delegatedEvents: l, documents: p, targets: s, supportsOptions: false, supportsPassive: false };
      function x(I, P, N, L) {
        var _ = $i(L), q = Me.find(s, function(X) {
          return X.eventTarget === I;
        });
        q || (q = { eventTarget: I, events: {} }, s.push(q)), q.events[P] || (q.events[P] = []), I.addEventListener && !Me.contains(q.events[P], N) && (I.addEventListener(P, N, m.supportsOptions ? _ : _.capture), q.events[P].push(N));
      }
      __name(x, "x");
      c(x, "s");
      function g(I, P, N, L) {
        var _ = $i(L), q = Me.findIndex(s, function(Pe) {
          return Pe.eventTarget === I;
        }), X = s[q];
        if (X && X.events)
          if (P !== "all") {
            var F = false, ne = X.events[P];
            if (ne) {
              if (N === "all") {
                for (var oe = ne.length - 1; oe >= 0; oe--)
                  g(I, P, ne[oe], _);
                return;
              }
              for (var fe = 0; fe < ne.length; fe++)
                if (ne[fe] === N) {
                  I.removeEventListener(P, N, m.supportsOptions ? _ : _.capture), ne.splice(fe, 1), ne.length === 0 && (delete X.events[P], F = true);
                  break;
                }
            }
            F && !Object.keys(X.events).length && s.splice(q, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && g(I, P, "all");
      }
      __name(g, "g");
      c(g, "l");
      function w(I, P) {
        for (var N = $i(P), L = new Tf(I), _ = l[I.type], q = Os(J.getEventTargets(I), 1)[0], X = q; u.default.element(X); ) {
          for (var F = 0; F < _.length; F++) {
            var ne = _[F], oe = ne.selector, fe = ne.context;
            if (R.matchesSelector(X, oe) && R.nodeContains(fe, q) && R.nodeContains(fe, X)) {
              var Pe = ne.listeners;
              L.currentTarget = X;
              for (var qe = 0; qe < Pe.length; qe++) {
                var Se = Os(Pe[qe], 2), He = Se[0], pr = Se[1], Ur = pr.capture, Ws = pr.passive;
                Ur === N.capture && Ws === N.passive && He(L);
              }
            }
          }
          X = R.parentNode(X);
        }
      }
      __name(w, "w");
      c(w, "u");
      function O(I) {
        return w(I, true);
      }
      __name(O, "O");
      return c(O, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), i.events = m, m;
    } };
    Zo.default = Of;
    var Qo = {};
    Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0;
    var Jo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var o = 0; o < Jo.methodOrder.length; o++) {
        var s;
        s = Jo.methodOrder[o];
        var l = Jo[s](i);
        if (l)
          return l;
      }
      return null;
    }, simulationResume: function(i) {
      var o = i.pointerType, s = i.eventType, l = i.eventTarget, p = i.scope;
      if (!/down|start/i.test(s))
        return null;
      for (var m = 0; m < p.interactions.list.length; m++) {
        var x = p.interactions.list[m], g = l;
        if (x.simulation && x.simulation.allowResume && x.pointerType === o)
          for (; g; ) {
            if (g === x.element)
              return x;
            g = R.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o, s = i.pointerId, l = i.pointerType, p = i.eventType, m = i.scope;
      if (l !== "mouse" && l !== "pen")
        return null;
      for (var x = 0; x < m.interactions.list.length; x++) {
        var g = m.interactions.list[x];
        if (g.pointerType === l) {
          if (g.simulation && !Au(g, s))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
        }
      }
      if (o)
        return o;
      for (var w = 0; w < m.interactions.list.length; w++) {
        var O = m.interactions.list[w];
        if (!(O.pointerType !== l || /down/i.test(p) && O.simulation))
          return O;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o = i.pointerId, s = i.scope, l = 0; l < s.interactions.list.length; l++) {
        var p = s.interactions.list[l];
        if (Au(p, o))
          return p;
      }
      return null;
    }, idle: function(i) {
      for (var o = i.pointerType, s = i.scope, l = 0; l < s.interactions.list.length; l++) {
        var p = s.interactions.list[l];
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
    function Au(i, o) {
      return i.pointers.some(function(s) {
        return s.id === o;
      });
    }
    __name(Au, "Au");
    c(Au, "Ln");
    var Mf = Jo;
    Qo.default = Mf;
    var Ko = {};
    function Ms(i) {
      return Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ms(i);
    }
    __name(Ms, "Ms");
    c(Ms, "Nn");
    function Pu(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var p = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (p != null) {
          var m, x, g = [], w = true, O = false;
          try {
            for (p = p.call(s); !(w = (m = p.next()).done) && (g.push(m.value), !l || g.length !== l); w = true)
              ;
          } catch (I) {
            O = true, x = I;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (O)
                throw x;
            }
          }
          return g;
        }
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return zu(s, l);
          var p = Object.prototype.toString.call(s).slice(8, -1);
          return p === "Object" && s.constructor && (p = s.constructor.name), p === "Map" || p === "Set" ? Array.from(s) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? zu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Pu, "Pu");
    c(Pu, "qn");
    function zu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(zu, "zu");
    c(zu, "Gn");
    function If(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(If, "If");
    c(If, "$n");
    function Af(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Af, "Af");
    c(Af, "Hn");
    function Is(i, o) {
      return Is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Is(i, o);
    }
    __name(Is, "Is");
    c(Is, "Kn");
    function Pf(i, o) {
      if (o && (Ms(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(i);
    }
    __name(Pf, "Pf");
    c(Pf, "Zn");
    function ea(i) {
      return ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, ea(i);
    }
    __name(ea, "ea");
    c(ea, "Jn"), Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var As = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Ru(i, o) {
      return function(s) {
        var l = o.interactions.list, p = J.getPointerType(s), m = Pu(J.getEventTargets(s), 2), x = m[0], g = m[1], w = [];
        if (/^touch/.test(s.type)) {
          o.prevTouchTime = o.now();
          for (var O = 0; O < s.changedTouches.length; O++) {
            var I = s.changedTouches[O], P = { pointer: I, pointerId: J.getPointerId(I), pointerType: p, eventType: s.type, eventTarget: x, curEventTarget: g, scope: o }, N = _u(P);
            w.push([P.pointer, P.eventTarget, P.curEventTarget, N]);
          }
        } else {
          var L = false;
          if (!$.default.supportsPointerEvent && /mouse/.test(s.type)) {
            for (var _ = 0; _ < l.length && !L; _++)
              L = l[_].pointerType !== "mouse" && l[_].pointerIsDown;
            L = L || o.now() - o.prevTouchTime < 500 || s.timeStamp === 0;
          }
          if (!L) {
            var q = { pointer: s, pointerId: J.getPointerId(s), pointerType: p, eventType: s.type, curEventTarget: g, eventTarget: x, scope: o }, X = _u(q);
            w.push([q.pointer, q.eventTarget, q.curEventTarget, X]);
          }
        }
        for (var F = 0; F < w.length; F++) {
          var ne = Pu(w[F], 4), oe = ne[0], fe = ne[1], Pe = ne[2];
          ne[3][i](oe, s, fe, Pe);
        }
      };
    }
    __name(Ru, "Ru");
    c(Ru, "tr");
    function _u(i) {
      var o = i.pointerType, s = i.scope, l = { interaction: Qo.default.search(i), searchDetails: i };
      return s.fire("interactions:find", l), l.interaction || s.interactions.new({ pointerType: o });
    }
    __name(_u, "_u");
    c(_u, "er");
    function Ps(i, o) {
      var s = i.doc, l = i.scope, p = i.options, m = l.interactions.docEvents, x = l.events, g = x[o];
      for (var w in l.browser.isIOS && !p.events && (p.events = { passive: false }), x.delegatedEvents)
        g(s, w, x.delegateListener), g(s, w, x.delegateUseCapture, true);
      for (var O = p && p.events, I = 0; I < m.length; I++) {
        var P = m[I];
        g(s, P.type, P.listener, O);
      }
    }
    __name(Ps, "Ps");
    c(Ps, "nr");
    var zf = { id: "core/interactions", install: function(i) {
      for (var o = {}, s = 0; s < As.length; s++) {
        var l = As[s];
        o[l] = Ru(l, i);
      }
      var p, m = $.default.pEventTypes;
      function x() {
        for (var g = 0; g < i.interactions.list.length; g++) {
          var w = i.interactions.list[g];
          if (w.pointerIsDown && w.pointerType === "touch" && !w._interacting)
            for (var O = function() {
              var P = w.pointers[I];
              i.documents.some(function(N) {
                var L = N.doc;
                return (0, R.nodeContains)(L, P.downTarget);
              }) || w.removePointer(P.pointer, P.event);
            }, I = 0; I < w.pointers.length; I++)
              O();
        }
      }
      __name(x, "x");
      c(x, "a"), (p = T.default.PointerEvent ? [{ type: m.down, listener: x }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: x }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var w = 0; w < i.interactions.list.length; w++)
          i.interactions.list[w].documentBlur(g);
      } }), i.prevTouchTime = 0, i.Interaction = function(g) {
        (function(_, q) {
          if (typeof q != "function" && q !== null)
            throw new TypeError("Super expression must either be null or a function");
          _.prototype = Object.create(q && q.prototype, { constructor: { value: _, writable: true, configurable: true } }), Object.defineProperty(_, "prototype", { writable: false }), q && Is(_, q);
        })(L, g);
        var w, O, I, P, N = (I = L, P = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (_) {
            return false;
          }
        }(), function() {
          var _, q = ea(I);
          if (P) {
            var X = ea(this).constructor;
            _ = Reflect.construct(q, arguments, X);
          } else
            _ = q.apply(this, arguments);
          return Pf(this, _);
        });
        function L() {
          return If(this, L), N.apply(this, arguments);
        }
        __name(L, "L");
        return c(L, "s"), w = L, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(_) {
          i.interactions.pointerMoveTolerance = _;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && Af(w.prototype, O), Object.defineProperty(w, "prototype", { writable: false }), L;
      }($t.default), i.interactions = { list: [], new: function(g) {
        g.scopeFire = function(O, I) {
          return i.fire(O, I);
        };
        var w = new i.Interaction(g);
        return i.interactions.list.push(w), w;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, i.usePlugin(Kn.default);
    }, listeners: { "scope:add-document": function(i) {
      return Ps(i, "add");
    }, "scope:remove-document": function(i) {
      return Ps(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var s = i.interactable, l = o.interactions.list.length - 1; l >= 0; l--) {
        var p = o.interactions.list[l];
        p.interactable === s && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(l, 1));
      }
    } }, onDocSignal: Ps, doOnInteractions: Ru, methodNames: As }, Rf = zf;
    Ko.default = Rf;
    var qi = {};
    function zs(i) {
      return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, zs(i);
    }
    __name(zs, "zs");
    c(zs, "ar");
    function Fi() {
      return Fi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, s) {
        var l = _f(i, o);
        if (l) {
          var p = Object.getOwnPropertyDescriptor(l, o);
          return p.get ? p.get.call(arguments.length < 3 ? i : s) : p.value;
        }
      }, Fi.apply(this, arguments);
    }
    __name(Fi, "Fi");
    c(Fi, "sr");
    function _f(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = ln(i)) !== null; )
        ;
      return i;
    }
    __name(_f, "_f");
    c(_f, "lr");
    function Rs(i, o) {
      return Rs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Rs(i, o);
    }
    __name(Rs, "Rs");
    c(Rs, "ur");
    function Df(i, o) {
      if (o && (zs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(i);
    }
    __name(Df, "Df");
    c(Df, "cr");
    function ln(i) {
      return ln = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, ln(i);
    }
    __name(ln, "ln");
    c(ln, "fr");
    function Du(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Du, "Du");
    c(Du, "dr");
    function ku(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(ku, "ku");
    c(ku, "pr");
    function Nu(i, o, s) {
      return o && ku(i.prototype, o), s && ku(i, s), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Nu, "Nu");
    c(Nu, "vr");
    function St(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(St, "St");
    c(St, "hr"), Object.defineProperty(qi, "__esModule", { value: true }), qi.Scope = void 0, qi.initScope = Gu;
    var kf = function() {
      function i() {
        var o = this;
        Du(this, i), St(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), St(this, "isInitialized", false), St(this, "listenerMaps", []), St(this, "browser", $.default), St(this, "defaults", (0, On.default)(ki.defaults)), St(this, "Eventable", ji.Eventable), St(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), St(this, "interactStatic", (0, Ss.createInteractStatic)(this)), St(this, "InteractEvent", Ni.InteractEvent), St(this, "Interactable", void 0), St(this, "interactables", new Xo.InteractableSet(this)), St(this, "_win", void 0), St(this, "document", void 0), St(this, "window", void 0), St(this, "documents", []), St(this, "_plugins", { list: [], map: {} }), St(this, "onWindowUnload", function(l) {
          return o.removeDocument(l.target);
        });
        var s = this;
        this.Interactable = function(l) {
          (function(w, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            w.prototype = Object.create(O && O.prototype, { constructor: { value: w, writable: true, configurable: true } }), Object.defineProperty(w, "prototype", { writable: false }), O && Rs(w, O);
          })(g, l);
          var p, m, x = (p = g, m = function() {
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
            var w, O = ln(p);
            if (m) {
              var I = ln(this).constructor;
              w = Reflect.construct(O, arguments, I);
            } else
              w = O.apply(this, arguments);
            return Df(this, w);
          });
          function g() {
            return Du(this, g), x.apply(this, arguments);
          }
          __name(g, "g");
          return c(g, "i"), Nu(g, [{ key: "_defaults", get: function() {
            return s.defaults;
          } }, { key: "set", value: function(w) {
            return Fi(ln(g.prototype), "set", this).call(this, w), s.fire("interactable:set", { options: w, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Fi(ln(g.prototype), "unset", this).call(this);
            var w = s.interactables.list.indexOf(this);
            w < 0 || (Fi(ln(g.prototype), "unset", this).call(this), s.interactables.list.splice(w, 1), s.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }(Yo.Interactable);
      }
      __name(i, "i");
      return c(i, "t"), Nu(i, [{ key: "addListeners", value: function(o, s) {
        this.listenerMaps.push({ id: s, map: o });
      } }, { key: "fire", value: function(o, s) {
        for (var l = 0; l < this.listenerMaps.length; l++) {
          var p = this.listenerMaps[l].map[o];
          if (p && p(s, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : Gu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, s) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, s), o.listeners && o.before) {
          for (var l = 0, p = this.listenerMaps.length, m = o.before.reduce(function(g, w) {
            return g[w] = true, g[Lu(w)] = true, g;
          }, {}); l < p; l++) {
            var x = this.listenerMaps[l].id;
            if (m[x] || m[Lu(x)])
              break;
          }
          this.listenerMaps.splice(l, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, s) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var l = n.getWindow(o);
        s = s ? (0, W.default)({}, s) : {}, this.documents.push({ doc: o, options: s }), this.events.documents.push(o), o !== this.document && this.events.add(l, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: l, scope: this, options: s });
      } }, { key: "removeDocument", value: function(o) {
        var s = this.getDocIndex(o), l = n.getWindow(o), p = this.documents[s].options;
        this.events.remove(l, "unload", this.onWindowUnload), this.documents.splice(s, 1), this.events.documents.splice(s, 1), this.fire("scope:remove-document", { doc: o, window: l, scope: this, options: p });
      } }, { key: "getDocIndex", value: function(o) {
        for (var s = 0; s < this.documents.length; s++)
          if (this.documents[s].doc === o)
            return s;
        return -1;
      } }, { key: "getDocOptions", value: function(o) {
        var s = this.getDocIndex(o);
        return s === -1 ? null : this.documents[s].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), i;
    }();
    function Gu(i, o) {
      return i.isInitialized = true, u.default.window(o) && n.init(o), T.default.init(o), $.default.init(o), At.default.init(o), i.window = o, i.document = o.document, i.usePlugin(Ko.default), i.usePlugin(Zo.default), i;
    }
    __name(Gu, "Gu");
    c(Gu, "yr");
    function Lu(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(Lu, "Lu");
    c(Lu, "mr"), qi.Scope = kf;
    var _s = {}, ct = {};
    Object.defineProperty(ct, "__esModule", { value: true });
    var Nf = {};
    ct.default = void 0, Object.keys(_s).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(Nf, i) || i in ct && ct[i] === _s[i] || Object.defineProperty(ct, i, { enumerable: true, get: function() {
        return _s[i];
      } }));
    });
    var ju = new qi.Scope(), Gf = ju.interactStatic;
    ct.default = Gf;
    var Lf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    ju.init(Lf);
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0, ta.default = function() {
    };
    var ra = {};
    Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0, ra.default = function() {
    };
    var na = {};
    function Hu(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var p = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (p != null) {
          var m, x, g = [], w = true, O = false;
          try {
            for (p = p.call(s); !(w = (m = p.next()).done) && (g.push(m.value), !l || g.length !== l); w = true)
              ;
          } catch (I) {
            O = true, x = I;
          } finally {
            try {
              w || p.return == null || p.return();
            } finally {
              if (O)
                throw x;
            }
          }
          return g;
        }
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Bu(s, l);
          var p = Object.prototype.toString.call(s).slice(8, -1);
          return p === "Object" && s.constructor && (p = s.constructor.name), p === "Map" || p === "Set" ? Array.from(s) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Bu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Hu, "Hu");
    c(Hu, "jr");
    function Bu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Bu, "Bu");
    c(Bu, "Mr"), Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0, na.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(l) {
        var p = Hu(l, 2), m = p[0], x = p[1];
        return m in i || x in i;
      }), s = c(function(l, p) {
        for (var m = i.range, x = i.limits, g = x === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : x, w = i.offset, O = w === void 0 ? { x: 0, y: 0 } : w, I = { range: m, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var N = Hu(o[P], 2), L = N[0], _ = N[1], q = Math.round((l - O.x) / i[L]), X = Math.round((p - O.y) / i[_]);
          I[L] = Math.max(g.left, Math.min(g.right, q * i[L] + O.x)), I[_] = Math.max(g.top, Math.min(g.bottom, X * i[_] + O.y));
        }
        return I;
      }, "n");
      return s.grid = i, s.coordFields = o, s;
    };
    var Ui = {};
    Object.defineProperty(Ui, "__esModule", { value: true }), Object.defineProperty(Ui, "edgeTarget", { enumerable: true, get: function() {
      return ta.default;
    } }), Object.defineProperty(Ui, "elements", { enumerable: true, get: function() {
      return ra.default;
    } }), Object.defineProperty(Ui, "grid", { enumerable: true, get: function() {
      return na.default;
    } });
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var jf = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, Ui), o.createSnapGrid = o.snappers.grid;
    } }, Hf = jf;
    ia.default = Hf;
    var ti = {};
    function $u(i, o) {
      var s = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(i);
        o && (l = l.filter(function(p) {
          return Object.getOwnPropertyDescriptor(i, p).enumerable;
        })), s.push.apply(s, l);
      }
      return s;
    }
    __name($u, "$u");
    c($u, "Cr");
    function Ds(i) {
      for (var o = 1; o < arguments.length; o++) {
        var s = arguments[o] != null ? arguments[o] : {};
        o % 2 ? $u(Object(s), true).forEach(function(l) {
          Bf(i, l, s[l]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : $u(Object(s)).forEach(function(l) {
          Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(s, l));
        });
      }
      return i;
    }
    __name(Ds, "Ds");
    c(Ds, "Rr");
    function Bf(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Bf, "Bf");
    c(Bf, "Fr"), Object.defineProperty(ti, "__esModule", { value: true }), ti.default = ti.aspectRatio = void 0;
    var qu = { start: function(i) {
      var o = i.state, s = i.rect, l = i.edges, p = i.pageCoords, m = o.options.ratio, x = o.options, g = x.equalDelta, w = x.modifiers;
      m === "preserve" && (m = s.width / s.height), o.startCoords = (0, W.default)({}, p), o.startRect = (0, W.default)({}, s), o.ratio = m, o.equalDelta = g;
      var O = o.linkedEdges = { top: l.top || l.left && !l.bottom, left: l.left || l.top && !l.right, bottom: l.bottom || l.right && !l.top, right: l.right || l.bottom && !l.left };
      if (o.xIsPrimaryAxis = !(!l.left && !l.right), o.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        o.edgeSign = { x: I, y: I };
      } else
        o.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, W.default)(i.edges, O), w && w.length) {
        var P = new Mn.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(w), o.subModification = P, P.startAll(Ds({}, i));
      }
    }, set: function(i) {
      var o = i.state, s = i.rect, l = i.coords, p = (0, W.default)({}, l), m = o.equalDelta ? $f : qf;
      if (m(o, o.xIsPrimaryAxis, l, s), !o.subModification)
        return null;
      var x = (0, W.default)({}, s);
      (0, ue.addEdges)(o.linkedEdges, x, { x: l.x - p.x, y: l.y - p.y });
      var g = o.subModification.setAll(Ds(Ds({}, i), {}, { rect: x, edges: o.linkedEdges, pageCoords: l, prevCoords: l, prevRect: x })), w = g.delta;
      return g.changed && (m(o, Math.abs(w.x) > Math.abs(w.y), g.coords, g.rect), (0, W.default)(l, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function $f(i, o, s) {
      var l = i.startCoords, p = i.edgeSign;
      o ? s.y = l.y + (s.x - l.x) * p.y : s.x = l.x + (s.y - l.y) * p.x;
    }
    __name($f, "$f");
    c($f, "Br");
    function qf(i, o, s, l) {
      var p = i.startRect, m = i.startCoords, x = i.ratio, g = i.edgeSign;
      if (o) {
        var w = l.width / x;
        s.y = m.y + (w - p.height) * g.y;
      } else {
        var O = l.height * x;
        s.x = m.x + (O - p.width) * g.x;
      }
    }
    __name(qf, "qf");
    c(qf, "Yr"), ti.aspectRatio = qu;
    var Ff = (0, Et.makeModifier)(qu, "aspectRatio");
    ti.default = Ff;
    var Pn = {};
    Object.defineProperty(Pn, "__esModule", { value: true }), Pn.default = void 0;
    var Fu = c(function() {
    }, "Ur");
    Fu._defaults = {};
    var Uf = Fu;
    Pn.default = Uf;
    var ks = {};
    Object.defineProperty(ks, "__esModule", { value: true }), Object.defineProperty(ks, "default", { enumerable: true, get: function() {
      return Pn.default;
    } });
    var Nt = {};
    function Ns(i, o, s) {
      return u.default.func(i) ? ue.resolveRectLike(i, o.interactable, o.element, [s.x, s.y, o]) : ue.resolveRectLike(i, o.interactable, o.element);
    }
    __name(Ns, "Ns");
    c(Ns, "Gr"), Object.defineProperty(Nt, "__esModule", { value: true }), Nt.default = void 0, Nt.getRestrictionRect = Ns, Nt.restrict = void 0;
    var Uu = { start: function(i) {
      var o = i.rect, s = i.startOffset, l = i.state, p = i.interaction, m = i.pageCoords, x = l.options, g = x.elementRect, w = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, x.offset || {});
      if (o && g) {
        var O = Ns(x.restriction, p, m);
        if (O) {
          var I = O.right - O.left - o.width, P = O.bottom - O.top - o.height;
          I < 0 && (w.left += I, w.right += I), P < 0 && (w.top += P, w.bottom += P);
        }
        w.left += s.left - o.width * g.left, w.top += s.top - o.height * g.top, w.right += s.right - o.width * (1 - g.right), w.bottom += s.bottom - o.height * (1 - g.bottom);
      }
      l.offset = w;
    }, set: function(i) {
      var o = i.coords, s = i.interaction, l = i.state, p = l.options, m = l.offset, x = Ns(p.restriction, s, o);
      if (x) {
        var g = ue.xywhToTlbr(x);
        o.x = Math.max(Math.min(g.right - m.right, o.x), g.left + m.left), o.y = Math.max(Math.min(g.bottom - m.bottom, o.y), g.top + m.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Nt.restrict = Uu;
    var Wf = (0, Et.makeModifier)(Uu, "restrict");
    Nt.default = Wf;
    var Ar = {};
    Object.defineProperty(Ar, "__esModule", { value: true }), Ar.restrictEdges = Ar.default = void 0;
    var Wu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Vu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Yu(i, o) {
      for (var s = ["top", "left", "bottom", "right"], l = 0; l < s.length; l++) {
        var p = s[l];
        p in i || (i[p] = o[p]);
      }
      return i;
    }
    __name(Yu, "Yu");
    c(Yu, "Qr");
    var Xu = { noInner: Wu, noOuter: Vu, start: function(i) {
      var o, s = i.interaction, l = i.startOffset, p = i.state, m = p.options;
      if (m) {
        var x = (0, Nt.getRestrictionRect)(m.offset, s, s.coords.start.page);
        o = ue.rectToXY(x);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + l.top, left: o.x + l.left, bottom: o.y - l.bottom, right: o.x - l.right };
    }, set: function(i) {
      var o = i.coords, s = i.edges, l = i.interaction, p = i.state, m = p.offset, x = p.options;
      if (s) {
        var g = (0, W.default)({}, o), w = (0, Nt.getRestrictionRect)(x.inner, l, g) || {}, O = (0, Nt.getRestrictionRect)(x.outer, l, g) || {};
        Yu(w, Wu), Yu(O, Vu), s.top ? o.y = Math.min(Math.max(O.top + m.top, g.y), w.top + m.top) : s.bottom && (o.y = Math.max(Math.min(O.bottom + m.bottom, g.y), w.bottom + m.bottom)), s.left ? o.x = Math.min(Math.max(O.left + m.left, g.x), w.left + m.left) : s.right && (o.x = Math.max(Math.min(O.right + m.right, g.x), w.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Ar.restrictEdges = Xu;
    var Vf = (0, Et.makeModifier)(Xu, "restrictEdges");
    Ar.default = Vf;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.restrictRect = ri.default = void 0;
    var Yf = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Nt.restrict.defaults), Zu = { start: Nt.restrict.start, set: Nt.restrict.set, defaults: Yf };
    ri.restrictRect = Zu;
    var Xf = (0, Et.makeModifier)(Zu, "restrictRect");
    ri.default = Xf;
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.restrictSize = ni.default = void 0;
    var Zf = { width: -1 / 0, height: -1 / 0 }, Qf = { width: 1 / 0, height: 1 / 0 }, Qu = { start: function(i) {
      return Ar.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, s = i.state, l = i.rect, p = i.edges, m = s.options;
      if (p) {
        var x = ue.tlbrToXywh((0, Nt.getRestrictionRect)(m.min, o, i.coords)) || Zf, g = ue.tlbrToXywh((0, Nt.getRestrictionRect)(m.max, o, i.coords)) || Qf;
        s.options = { endOnly: m.endOnly, inner: (0, W.default)({}, Ar.restrictEdges.noInner), outer: (0, W.default)({}, Ar.restrictEdges.noOuter) }, p.top ? (s.options.inner.top = l.bottom - x.height, s.options.outer.top = l.bottom - g.height) : p.bottom && (s.options.inner.bottom = l.top + x.height, s.options.outer.bottom = l.top + g.height), p.left ? (s.options.inner.left = l.right - x.width, s.options.outer.left = l.right - g.width) : p.right && (s.options.inner.right = l.left + x.width, s.options.outer.right = l.left + g.width), Ar.restrictEdges.set(i), s.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ni.restrictSize = Qu;
    var Jf = (0, Et.makeModifier)(Qu, "restrictSize");
    ni.default = Jf;
    var Gs = {};
    Object.defineProperty(Gs, "__esModule", { value: true }), Object.defineProperty(Gs, "default", { enumerable: true, get: function() {
      return Pn.default;
    } });
    var un = {};
    Object.defineProperty(un, "__esModule", { value: true }), un.snap = un.default = void 0;
    var Ju = { start: function(i) {
      var o, s = i.interaction, l = i.interactable, p = i.element, m = i.rect, x = i.state, g = i.startOffset, w = x.options, O = w.offsetWithOrigin ? function(N) {
        var L = N.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(N.state.options.origin, null, null, [L])) || (0, De.default)(N.interactable, L, N.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (w.offset === "startCoords")
        o = { x: s.coords.start.page.x, y: s.coords.start.page.y };
      else {
        var I = (0, ue.resolveRectLike)(w.offset, l, p, [s]);
        (o = (0, ue.rectToXY)(I) || { x: 0, y: 0 }).x += O.x, o.y += O.y;
      }
      var P = w.relativePoints;
      x.offsets = m && P && P.length ? P.map(function(N, L) {
        return { index: L, relativePoint: N, x: g.left - m.width * N.x + o.x, y: g.top - m.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, s = i.coords, l = i.state, p = l.options, m = l.offsets, x = (0, De.default)(o.interactable, o.element, o.prepared.name), g = (0, W.default)({}, s), w = [];
      p.offsetWithOrigin || (g.x -= x.x, g.y -= x.y);
      for (var O = 0; O < m.length; O++)
        for (var I = m[O], P = g.x - I.x, N = g.y - I.y, L = 0, _ = p.targets.length; L < _; L++) {
          var q, X = p.targets[L];
          (q = u.default.func(X) ? X(P, N, o._proxy, I, L) : X) && w.push({ x: (u.default.number(q.x) ? q.x : P) + I.x, y: (u.default.number(q.y) ? q.y : N) + I.y, range: u.default.number(q.range) ? q.range : p.range, source: X, index: L, offset: I });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < w.length; ne++) {
        var oe = w[ne], fe = oe.range, Pe = oe.x - g.x, qe = oe.y - g.y, Se = (0, Xe.default)(Pe, qe), He = Se <= fe;
        fe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (He = false), F.target && !(He ? F.inRange && fe !== 1 / 0 ? Se / fe < F.distance / F.range : fe === 1 / 0 && F.range !== 1 / 0 || Se < F.distance : !F.inRange && Se < F.distance) || (F.target = oe, F.distance = Se, F.range = fe, F.inRange = He, F.delta.x = Pe, F.delta.y = qe);
      }
      return F.inRange && (s.x = F.target.x, s.y = F.target.y), l.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    un.snap = Ju;
    var Kf = (0, Et.makeModifier)(Ju, "snap");
    un.default = Kf;
    var Fr = {};
    function Ku(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Ku, "Ku");
    c(Ku, "yo"), Object.defineProperty(Fr, "__esModule", { value: true }), Fr.snapSize = Fr.default = void 0;
    var ec = { start: function(i) {
      var o = i.state, s = i.edges, l = o.options;
      if (!s)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: s.left ? 0 : 1, y: s.top ? 0 : 1 }], offset: l.offset || "self", origin: { x: 0, y: 0 }, range: l.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], un.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, s, l = i.interaction, p = i.state, m = i.coords, x = p.options, g = p.offsets, w = { x: m.x - g[0].x, y: m.y - g[0].y };
      p.options = (0, W.default)({}, x), p.options.targets = [];
      for (var O = 0; O < (x.targets || []).length; O++) {
        var I = (x.targets || [])[O], P = void 0;
        if (P = u.default.func(I) ? I(w.x, w.y, l) : I) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var L = (o = p.targetFields[N], s = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, ne) {
              var oe = F == null ? null : typeof Symbol != "undefined" && F[Symbol.iterator] || F["@@iterator"];
              if (oe != null) {
                var fe, Pe, qe = [], Se = true, He = false;
                try {
                  for (oe = oe.call(F); !(Se = (fe = oe.next()).done) && (qe.push(fe.value), !ne || qe.length !== ne); Se = true)
                    ;
                } catch (pr) {
                  He = true, Pe = pr;
                } finally {
                  try {
                    Se || oe.return == null || oe.return();
                  } finally {
                    if (He)
                      throw Pe;
                  }
                }
                return qe;
              }
            }(o, s) || function(F, ne) {
              if (F) {
                if (typeof F == "string")
                  return Ku(F, ne);
                var oe = Object.prototype.toString.call(F).slice(8, -1);
                return oe === "Object" && F.constructor && (oe = F.constructor.name), oe === "Map" || oe === "Set" ? Array.from(F) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Ku(F, ne) : void 0;
              }
            }(o, s) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), _ = L[0], q = L[1];
            if (_ in P || q in P) {
              P.x = P[_], P.y = P[q];
              break;
            }
          }
          p.options.targets.push(P);
        }
      }
      var X = un.snap.set(i);
      return p.options = x, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Fr.snapSize = ec;
    var eh = (0, Et.makeModifier)(ec, "snapSize");
    Fr.default = eh;
    var ii = {};
    Object.defineProperty(ii, "__esModule", { value: true }), ii.snapEdges = ii.default = void 0;
    var tc = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Fr.snapSize.start(i)) : null;
    }, set: Fr.snapSize.set, defaults: (0, W.default)((0, On.default)(Fr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ii.snapEdges = tc;
    var th = (0, Et.makeModifier)(tc, "snapEdges");
    ii.default = th;
    var Ls = {};
    Object.defineProperty(Ls, "__esModule", { value: true }), Object.defineProperty(Ls, "default", { enumerable: true, get: function() {
      return Pn.default;
    } });
    var js = {};
    Object.defineProperty(js, "__esModule", { value: true }), Object.defineProperty(js, "default", { enumerable: true, get: function() {
      return Pn.default;
    } });
    var oi = {};
    Object.defineProperty(oi, "__esModule", { value: true }), oi.default = void 0;
    var rh = { aspectRatio: ti.default, restrictEdges: Ar.default, restrict: Nt.default, restrictRect: ri.default, restrictSize: ni.default, snapEdges: ii.default, snap: un.default, snapSize: Fr.default, spring: Ls.default, avoid: ks.default, transform: js.default, rubberband: Gs.default };
    oi.default = rh;
    var oa = {};
    Object.defineProperty(oa, "__esModule", { value: true }), oa.default = void 0;
    var nh = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var s in i.usePlugin(Et.default), i.usePlugin(ia.default), o.modifiers = oi.default, oi.default) {
        var l = oi.default[s], p = l._defaults, m = l._methods;
        p._methods = m, i.defaults.perAction[s] = p;
      }
    } }, ih = nh;
    oa.default = ih;
    var zn = {};
    function Hs(i) {
      return Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Hs(i);
    }
    __name(Hs, "Hs");
    c(Hs, "Io");
    function oh(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(oh, "oh");
    c(oh, "Do");
    function Bs(i, o) {
      return Bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Bs(i, o);
    }
    __name(Bs, "Bs");
    c(Bs, "Ao");
    function ah(i, o) {
      if (o && (Hs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return $s(i);
    }
    __name(ah, "ah");
    c(ah, "zo");
    function $s(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name($s, "$s");
    c($s, "Co");
    function aa(i) {
      return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, aa(i);
    }
    __name(aa, "aa");
    c(aa, "Ro"), Object.defineProperty(zn, "__esModule", { value: true }), zn.default = zn.PointerEvent = void 0;
    var sh = function(i) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), w && Bs(g, w);
      })(x, i);
      var o, s, l, p, m = (l = x, p = function() {
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
        var g, w = aa(l);
        if (p) {
          var O = aa(this).constructor;
          g = Reflect.construct(w, arguments, O);
        } else
          g = w.apply(this, arguments);
        return ah(this, g);
      });
      function x(g, w, O, I, P, N) {
        var L;
        if (function(X, F) {
          if (!(X instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, x), L = m.call(this, P), J.pointerExtend($s(L), O), O !== w && J.pointerExtend($s(L), w), L.timeStamp = N, L.originalEvent = O, L.type = g, L.pointerId = J.getPointerId(w), L.pointerType = J.getPointerType(w), L.target = I, L.currentTarget = null, g === "tap") {
          var _ = P.getPointerIndex(w);
          L.dt = L.timeStamp - P.pointers[_].downTime;
          var q = L.timeStamp - P.tapTime;
          L.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === L.target && q < 500;
        } else
          g === "doubletap" && (L.dt = w.timeStamp - P.tapTime, L.double = true);
        return L;
      }
      __name(x, "x");
      return c(x, "a"), o = x, (s = [{ key: "_subtractOrigin", value: function(g) {
        var w = g.x, O = g.y;
        return this.pageX -= w, this.pageY -= O, this.clientX -= w, this.clientY -= O, this;
      } }, { key: "_addOrigin", value: function(g) {
        var w = g.x, O = g.y;
        return this.pageX += w, this.pageY += O, this.clientX += w, this.clientY += O, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && oh(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), x;
    }(rr.BaseEvent);
    zn.PointerEvent = zn.default = sh;
    var Wi = {};
    Object.defineProperty(Wi, "__esModule", { value: true }), Wi.default = void 0;
    var sa = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = sa, i.defaults.actions.pointerEvents = sa.defaults, (0, W.default)(i.actions.phaselessTypes, sa.types);
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o = i.down, s = i.pointerInfo;
      !o && s.hold || (s.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o) {
      var s = i.interaction, l = i.pointer, p = i.event, m = i.eventTarget;
      i.duplicate || s.pointerIsDown && !s.pointerWasMoved || (s.pointerIsDown && qs(i), cn({ interaction: s, pointer: l, event: p, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(s, l) {
        for (var p = s.interaction, m = s.pointer, x = s.event, g = s.eventTarget, w = s.pointerIndex, O = p.pointers[w].hold, I = R.getPath(g), P = { interaction: p, pointer: m, event: x, eventTarget: g, type: "hold", targets: [], path: I, node: null }, N = 0; N < I.length; N++) {
          var L = I[N];
          P.node = L, l.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var _ = 1 / 0, q = 0; q < P.targets.length; q++) {
            var X = P.targets[q].eventable.options.holdDuration;
            X < _ && (_ = X);
          }
          O.duration = _, O.timeout = setTimeout(function() {
            cn({ interaction: p, eventTarget: g, pointer: m, event: x, type: "hold" }, l);
          }, _);
        }
      })(i, o), cn(i, o);
    }, "interactions:up": function(i, o) {
      qs(i), cn(i, o), function(s, l) {
        var p = s.interaction, m = s.pointer, x = s.event, g = s.eventTarget;
        p.pointerWasMoved || cn({ interaction: p, eventTarget: g, pointer: m, event: x, type: "tap" }, l);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      qs(i), cn(i, o);
    } }, PointerEvent: zn.PointerEvent, fire: cn, collectEventTargets: rc, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function cn(i, o) {
      var s = i.interaction, l = i.pointer, p = i.event, m = i.eventTarget, x = i.type, g = i.targets, w = g === void 0 ? rc(i, o) : g, O = new zn.PointerEvent(x, l, p, m, s, o.now());
      o.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: s, pointer: l, event: p, eventTarget: m, targets: w, type: x, pointerEvent: O }, P = 0; P < w.length; P++) {
        var N = w[P];
        for (var L in N.props || {})
          O[L] = N.props[L];
        var _ = (0, De.default)(N.eventable, N.node);
        if (O._subtractOrigin(_), O.eventable = N.eventable, O.currentTarget = N.node, N.eventable.fire(O), O._addOrigin(_), O.immediatePropagationStopped || O.propagationStopped && P + 1 < w.length && w[P + 1].node !== O.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", I), x === "tap") {
        var q = O.double ? cn({ interaction: s, pointer: l, event: p, eventTarget: m, type: "doubletap" }, o) : O;
        s.prevTap = q, s.tapTime = q.timeStamp;
      }
      return O;
    }
    __name(cn, "cn");
    c(cn, "Yo");
    function rc(i, o) {
      var s = i.interaction, l = i.pointer, p = i.event, m = i.eventTarget, x = i.type, g = s.getPointerIndex(l), w = s.pointers[g];
      if (x === "tap" && (s.pointerWasMoved || !w || w.downTarget !== m))
        return [];
      for (var O = R.getPath(m), I = { interaction: s, pointer: l, event: p, eventTarget: m, type: x, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var N = O[P];
        I.node = N, o.fire("pointerEvents:collect-targets", I);
      }
      return x === "hold" && (I.targets = I.targets.filter(function(L) {
        var _;
        return L.eventable.options.holdDuration === ((_ = s.pointers[g]) == null ? void 0 : _.hold.duration);
      })), I.targets;
    }
    __name(rc, "rc");
    c(rc, "Wo");
    function qs(i) {
      var o = i.interaction, s = i.pointerIndex, l = o.pointers[s].hold;
      l && l.timeout && (clearTimeout(l.timeout), l.timeout = null);
    }
    __name(qs, "qs");
    c(qs, "Lo");
    var lh = sa;
    Wi.default = lh;
    var la = {};
    function uh(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(uh, "uh");
    c(uh, "No"), Object.defineProperty(la, "__esModule", { value: true }), la.default = void 0;
    var ch = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(Wi.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = uh, i;
    }, { "pointerEvents:new": function(i) {
      var o = i.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o) {
      var s = i.interaction, l = i.pointerEvent, p = i.eventTarget, m = i.targets;
      if (l.type === "hold" && m.length) {
        var x = m[0].eventable.options.holdRepeatInterval;
        x <= 0 || (s.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: s, eventTarget: p, type: "hold", pointer: l, event: l }, o);
        }, x));
      }
    } }) }, ph = ch;
    la.default = ph;
    var ua = {};
    function dh(i) {
      return (0, W.default)(this.events.options, i), this;
    }
    __name(dh, "dh");
    c(dh, "Ho"), Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var fh = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = dh;
      var s = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(l, p) {
        var m = s.call(this, l, p);
        return m === this && (this.events.options[l] = p), m;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o) {
      var s = i.targets, l = i.node, p = i.type, m = i.eventTarget;
      o.interactables.forEachMatch(l, function(x) {
        var g = x.events, w = g.options;
        g.types[p] && g.types[p].length && x.testIgnoreAllow(w, l, m) && s.push({ node: l, eventable: g, props: { interactable: x } });
      });
    }, "interactable:new": function(i) {
      var o = i.interactable;
      o.events.getRect = function(s) {
        return o.getRect(s);
      };
    }, "interactable:set": function(i, o) {
      var s = i.interactable, l = i.options;
      (0, W.default)(s.events.options, o.pointerEvents.defaults), (0, W.default)(s.events.options, l.pointerEvents || {});
    } } }, hh = fh;
    ua.default = hh;
    var ca = {};
    Object.defineProperty(ca, "__esModule", { value: true }), ca.default = void 0;
    var vh = { id: "pointer-events", install: function(i) {
      i.usePlugin(Wi), i.usePlugin(la.default), i.usePlugin(ua.default);
    } }, mh = vh;
    ca.default = mh;
    var Vi = {};
    function nc(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(s) {
        return function(l, p, m) {
          for (var x = u.default.string(l.target) ? Me.from(l._context.querySelectorAll(l.target)) : [l.target], g = m.window.Promise, w = g ? [] : null, O = function() {
            var P = x[I], N = l.getRect(P);
            if (!N)
              return "break";
            var L = Me.find(m.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === l && ne.element === P && ne.prepared.name === p.name;
            }), _ = void 0;
            if (L)
              L.move(), w && (_ = L._reflowPromise || new g(function(ne) {
                L._reflowResolve = ne;
              }));
            else {
              var q = (0, ue.tlbrToXywh)(N), X = { page: { x: q.x, y: q.y }, client: { x: q.x, y: q.y }, timeStamp: m.now() }, F = J.coordsToEvent(X);
              _ = function(ne, oe, fe, Pe, qe) {
                var Se = ne.interactions.new({ pointerType: "reflow" }), He = { interaction: Se, event: qe, pointer: qe, eventTarget: fe, phase: "reflow" };
                Se.interactable = oe, Se.element = fe, Se.prevEvent = qe, Se.updatePointer(qe, qe, fe, true), J.setZeroCoords(Se.coords.delta), (0, nr.copyAction)(Se.prepared, Pe), Se._doPhase(He);
                var pr = ne.window.Promise, Ur = pr ? new pr(function(Ws) {
                  Se._reflowResolve = Ws;
                }) : void 0;
                return Se._reflowPromise = Ur, Se.start(Pe, oe, fe), Se._interacting ? (Se.move(He), Se.end(qe)) : (Se.stop(), Se._reflowResolve()), Se.removePointer(qe, qe), Ur;
              }(m, l, P, p, F);
            }
            w && w.push(_);
          }, I = 0; I < x.length && O() !== "break"; I++)
            ;
          return w && g.all(w).then(function() {
            return l;
          });
        }(this, s, i);
      };
    }
    __name(nc, "nc");
    c(nc, "ni"), Object.defineProperty(Vi, "__esModule", { value: true }), Vi.default = void 0, Vi.install = nc;
    var gh = { id: "reflow", install: nc, listeners: { "interactions:stop": function(i, o) {
      var s = i.interaction;
      s.pointerType === "reflow" && (s._reflowResolve && s._reflowResolve(), Me.remove(o.interactions.list, s));
    } } }, bh = gh;
    Vi.default = bh;
    var cr = { exports: {} };
    function Fs(i) {
      return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Fs(i);
    }
    __name(Fs, "Fs");
    c(Fs, "ai"), Object.defineProperty(cr.exports, "__esModule", { value: true }), cr.exports.default = void 0, ct.default.use(Kn.default), ct.default.use(An.default), ct.default.use(ca.default), ct.default.use(ei.default), ct.default.use(oa.default), ct.default.use(Bo.default), ct.default.use(ur.default), ct.default.use(sn.default), ct.default.use(Vi.default);
    var yh = ct.default;
    if (cr.exports.default = yh, Fs(cr) === "object" && cr)
      try {
        cr.exports = ct.default;
      } catch (i) {
      }
    ct.default.default = ct.default, cr = cr.exports;
    var Rn = { exports: {} };
    function Us(i) {
      return Us = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Us(i);
    }
    __name(Us, "Us");
    c(Us, "ui"), Object.defineProperty(Rn.exports, "__esModule", { value: true }), Rn.exports.default = void 0;
    var wh = cr.default;
    if (Rn.exports.default = wh, Us(Rn) === "object" && Rn)
      try {
        Rn.exports = cr.default;
      } catch (i) {
      }
    return cr.default.default = cr.default, Rn.exports;
  });
});
var Ad = da((Id, lu) => {
  (function(t) {
    "use strict";
    var n = /* @__PURE__ */ __name(function() {
    }, "n"), e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(d) {
      return setTimeout(d, 16);
    };
    function r() {
      var d = this;
      d.reads = [], d.writes = [], d.raf = e.bind(t), n("initialized", d);
    }
    __name(r, "r");
    c(r, "FastDom"), r.prototype = { constructor: r, runTasks: function(d) {
      n("run tasks");
      for (var f; f = d.shift(); )
        f();
    }, measure: function(d, f) {
      n("measure");
      var y = f ? d.bind(f) : d;
      return this.reads.push(y), a(this), y;
    }, mutate: function(d, f) {
      n("mutate");
      var y = f ? d.bind(f) : d;
      return this.writes.push(y), a(this), y;
    }, clear: function(d) {
      return n("clear", d), h(this.reads, d) || h(this.writes, d);
    }, extend: function(d) {
      if (n("extend", d), typeof d != "object")
        throw new Error("expected object");
      var f = Object.create(this);
      return b(f, d), f.fastdom = this, f.initialize && f.initialize(), f;
    }, catch: null };
    function a(d) {
      d.scheduled || (d.scheduled = true, d.raf(u.bind(null, d)), n("flush scheduled"));
    }
    __name(a, "a");
    c(a, "scheduleFlush");
    function u(d) {
      n("flush");
      var f = d.writes, y = d.reads, E;
      try {
        n("flushing reads", y.length), d.runTasks(y), n("flushing writes", f.length), d.runTasks(f);
      } catch (S) {
        E = S;
      }
      if (d.scheduled = false, (y.length || f.length) && a(d), E)
        if (n("task errored", E.message), d.catch)
          d.catch(E);
        else
          throw E;
    }
    __name(u, "u");
    c(u, "flush");
    function h(d, f) {
      var y = d.indexOf(f);
      return !!~y && !!d.splice(y, 1);
    }
    __name(h, "h");
    c(h, "remove");
    function b(d, f) {
      for (var y in f)
        f.hasOwnProperty(y) && (d[y] = f[y]);
    }
    __name(b, "b");
    c(b, "mixin");
    var v = t.fastdom = t.fastdom || new r();
    typeof define == "function" ? define(function() {
      return v;
    }) : typeof lu == "object" && (lu.exports = v);
  })(typeof window != "undefined" ? window : Id);
});
var _d = da((uu, Rd) => {
  (function(t) {
    "use strict";
    var n = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, e = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, r = c(function(d) {
      var f = Math.PI / 4;
      if (-f > d || d > f)
        return Math.cos(d) - 1;
      var y = d * d;
      return y * (y * (y * (y * (y * (y * (y * (y / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), a = c(function(d, f) {
      var y = Math.abs(d), E = Math.abs(f);
      return y < 3e3 && E < 3e3 ? Math.sqrt(y * y + E * E) : (y < E ? (y = E, E = d / f) : E = f / d, y * Math.sqrt(1 + E * E));
    }, "hypot"), u = c(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function h(d, f) {
      var y = Math.abs(d), E = Math.abs(f);
      return d === 0 ? Math.log(E) : f === 0 ? Math.log(y) : y < 3e3 && E < 3e3 ? Math.log(d * d + f * f) * 0.5 : (d = d / 2, f = f / 2, 0.5 * Math.log(d * d + f * f) + Math.LN2);
    }
    __name(h, "h");
    c(h, "logHypot");
    var b = c(function(d, f) {
      var y = { re: 0, im: 0 };
      if (d == null)
        y.re = y.im = 0;
      else if (f !== void 0)
        y.re = d, y.im = f;
      else
        switch (typeof d) {
          case "object":
            if ("im" in d && "re" in d)
              y.re = d.re, y.im = d.im;
            else if ("abs" in d && "arg" in d) {
              if (!Number.isFinite(d.abs) && Number.isFinite(d.arg))
                return v.INFINITY;
              y.re = d.abs * Math.cos(d.arg), y.im = d.abs * Math.sin(d.arg);
            } else if ("r" in d && "phi" in d) {
              if (!Number.isFinite(d.r) && Number.isFinite(d.phi))
                return v.INFINITY;
              y.re = d.r * Math.cos(d.phi), y.im = d.r * Math.sin(d.phi);
            } else
              d.length === 2 ? (y.re = d[0], y.im = d[1]) : u();
            break;
          case "string":
            y.im = y.re = 0;
            var E = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, C = 0;
            E === null && u();
            for (var T = 0; T < E.length; T++) {
              var z = E[T];
              z === " " || z === "	" || z === `
` || (z === "+" ? S++ : z === "-" ? C++ : z === "i" || z === "I" ? (S + C === 0 && u(), E[T + 1] !== " " && !isNaN(E[T + 1]) ? (y.im += parseFloat((C % 2 ? "-" : "") + E[T + 1]), T++) : y.im += parseFloat((C % 2 ? "-" : "") + "1"), S = C = 0) : ((S + C === 0 || isNaN(z)) && u(), E[T + 1] === "i" || E[T + 1] === "I" ? (y.im += parseFloat((C % 2 ? "-" : "") + z), T++) : y.re += parseFloat((C % 2 ? "-" : "") + z), S = C = 0));
            }
            S + C > 0 && u();
            break;
          case "number":
            y.im = 0, y.re = d;
            break;
          default:
            u();
        }
      return isNaN(y.re) || isNaN(y.im), y;
    }, "parse");
    function v(d, f) {
      if (!(this instanceof v))
        return new v(d, f);
      var y = b(d, f);
      this.re = y.re, this.im = y.im;
    }
    __name(v, "v");
    c(v, "Complex"), v.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new v(this.re / d, this.im / d);
    }, add: function(d, f) {
      var y = new v(d, f);
      return this.isInfinite() && y.isInfinite() ? v.NAN : this.isInfinite() || y.isInfinite() ? v.INFINITY : new v(this.re + y.re, this.im + y.im);
    }, sub: function(d, f) {
      var y = new v(d, f);
      return this.isInfinite() && y.isInfinite() ? v.NAN : this.isInfinite() || y.isInfinite() ? v.INFINITY : new v(this.re - y.re, this.im - y.im);
    }, mul: function(d, f) {
      var y = new v(d, f);
      return this.isInfinite() && y.isZero() || this.isZero() && y.isInfinite() ? v.NAN : this.isInfinite() || y.isInfinite() ? v.INFINITY : y.im === 0 && this.im === 0 ? new v(this.re * y.re, 0) : new v(this.re * y.re - this.im * y.im, this.re * y.im + this.im * y.re);
    }, div: function(d, f) {
      var y = new v(d, f);
      if (this.isZero() && y.isZero() || this.isInfinite() && y.isInfinite())
        return v.NAN;
      if (this.isInfinite() || y.isZero())
        return v.INFINITY;
      if (this.isZero() || y.isInfinite())
        return v.ZERO;
      d = this.re, f = this.im;
      var E = y.re, S = y.im, C, T;
      return S === 0 ? new v(d / E, f / E) : Math.abs(E) < Math.abs(S) ? (T = E / S, C = E * T + S, new v((d * T + f) / C, (f * T - d) / C)) : (T = S / E, C = S * T + E, new v((d + f * T) / C, (f - d * T) / C));
    }, pow: function(d, f) {
      var y = new v(d, f);
      if (d = this.re, f = this.im, y.isZero())
        return v.ONE;
      if (y.im === 0) {
        if (f === 0 && d > 0)
          return new v(Math.pow(d, y.re), 0);
        if (d === 0)
          switch ((y.re % 4 + 4) % 4) {
            case 0:
              return new v(Math.pow(f, y.re), 0);
            case 1:
              return new v(0, Math.pow(f, y.re));
            case 2:
              return new v(-Math.pow(f, y.re), 0);
            case 3:
              return new v(0, -Math.pow(f, y.re));
          }
      }
      if (d === 0 && f === 0 && y.re > 0 && y.im >= 0)
        return v.ZERO;
      var E = Math.atan2(f, d), S = h(d, f);
      return d = Math.exp(y.re * S - y.im * E), f = y.im * S + y.re * E, new v(d * Math.cos(f), d * Math.sin(f));
    }, sqrt: function() {
      var d = this.re, f = this.im, y = this.abs(), E, S;
      if (d >= 0) {
        if (f === 0)
          return new v(Math.sqrt(d), 0);
        E = 0.5 * Math.sqrt(2 * (y + d));
      } else
        E = Math.abs(f) / Math.sqrt(2 * (y - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (y - d)) : S = Math.abs(f) / Math.sqrt(2 * (y + d)), new v(E, f < 0 ? -S : S);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im, new v(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, f = this.im;
      return new v(Math.expm1(d) * Math.cos(f) + r(f), Math.exp(d) * Math.sin(f));
    }, log: function() {
      var d = this.re, f = this.im;
      return f === 0 && d > 0, new v(h(d, f), Math.atan2(f, d));
    }, abs: function() {
      return a(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, f = this.im;
      return new v(Math.sin(d) * n(f), Math.cos(d) * e(f));
    }, cos: function() {
      var d = this.re, f = this.im;
      return new v(Math.cos(d) * n(f), -Math.sin(d) * e(f));
    }, tan: function() {
      var d = 2 * this.re, f = 2 * this.im, y = Math.cos(d) + n(f);
      return new v(Math.sin(d) / y, e(f) / y);
    }, cot: function() {
      var d = 2 * this.re, f = 2 * this.im, y = Math.cos(d) - n(f);
      return new v(-Math.sin(d) / y, e(f) / y);
    }, sec: function() {
      var d = this.re, f = this.im, y = 0.5 * n(2 * f) + 0.5 * Math.cos(2 * d);
      return new v(Math.cos(d) * n(f) / y, Math.sin(d) * e(f) / y);
    }, csc: function() {
      var d = this.re, f = this.im, y = 0.5 * n(2 * f) - 0.5 * Math.cos(2 * d);
      return new v(Math.sin(d) * n(f) / y, -Math.cos(d) * e(f) / y);
    }, asin: function() {
      var d = this.re, f = this.im, y = new v(f * f - d * d + 1, -2 * d * f).sqrt(), E = new v(y.re - f, y.im + d).log();
      return new v(E.im, -E.re);
    }, acos: function() {
      var d = this.re, f = this.im, y = new v(f * f - d * d + 1, -2 * d * f).sqrt(), E = new v(y.re - f, y.im + d).log();
      return new v(Math.PI / 2 - E.im, E.re);
    }, atan: function() {
      var d = this.re, f = this.im;
      if (d === 0) {
        if (f === 1)
          return new v(0, 1 / 0);
        if (f === -1)
          return new v(0, -1 / 0);
      }
      var y = d * d + (1 - f) * (1 - f), E = new v((1 - f * f - d * d) / y, -2 * d / y).log();
      return new v(-0.5 * E.im, 0.5 * E.re);
    }, acot: function() {
      var d = this.re, f = this.im;
      if (f === 0)
        return new v(Math.atan2(1, d), 0);
      var y = d * d + f * f;
      return y !== 0 ? new v(d / y, -f / y).atan() : new v(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new v(0, 1 / 0);
      var y = d * d + f * f;
      return y !== 0 ? new v(d / y, -f / y).acos() : new v(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new v(Math.PI / 2, 1 / 0);
      var y = d * d + f * f;
      return y !== 0 ? new v(d / y, -f / y).asin() : new v(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, f = this.im;
      return new v(e(d) * Math.cos(f), n(d) * Math.sin(f));
    }, cosh: function() {
      var d = this.re, f = this.im;
      return new v(n(d) * Math.cos(f), e(d) * Math.sin(f));
    }, tanh: function() {
      var d = 2 * this.re, f = 2 * this.im, y = n(d) + Math.cos(f);
      return new v(e(d) / y, Math.sin(f) / y);
    }, coth: function() {
      var d = 2 * this.re, f = 2 * this.im, y = n(d) - Math.cos(f);
      return new v(e(d) / y, -Math.sin(f) / y);
    }, csch: function() {
      var d = this.re, f = this.im, y = Math.cos(2 * f) - n(2 * d);
      return new v(-2 * e(d) * Math.cos(f) / y, 2 * n(d) * Math.sin(f) / y);
    }, sech: function() {
      var d = this.re, f = this.im, y = Math.cos(2 * f) + n(2 * d);
      return new v(2 * n(d) * Math.cos(f) / y, -2 * e(d) * Math.sin(f) / y);
    }, asinh: function() {
      var d = this.im;
      this.im = -this.re, this.re = d;
      var f = this.asin();
      return this.re = -this.im, this.im = d, d = f.re, f.re = -f.im, f.im = d, f;
    }, acosh: function() {
      var d = this.acos();
      if (d.im <= 0) {
        var f = d.re;
        d.re = -d.im, d.im = f;
      } else {
        var f = d.im;
        d.im = -d.re, d.re = f;
      }
      return d;
    }, atanh: function() {
      var d = this.re, f = this.im, y = d > 1 && f === 0, E = 1 - d, S = 1 + d, C = E * E + f * f, T = C !== 0 ? new v((S * E - f * f) / C, (f * E + S * f) / C) : new v(d !== -1 ? d / 0 : 0, f !== 0 ? f / 0 : 0), z = T.re;
      return T.re = h(T.re, T.im) / 2, T.im = Math.atan2(T.im, z) / 2, y && (T.im = -T.im), T;
    }, acoth: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new v(0, Math.PI / 2);
      var y = d * d + f * f;
      return y !== 0 ? new v(d / y, -f / y).atanh() : new v(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, f = this.im;
      if (f === 0)
        return new v(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var y = d * d + f * f;
      return y !== 0 ? new v(d / y, -f / y).asinh() : new v(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, f = this.im;
      if (this.isZero())
        return v.INFINITY;
      var y = d * d + f * f;
      return y !== 0 ? new v(d / y, -f / y).acosh() : new v(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return v.INFINITY;
      if (this.isInfinite())
        return v.ZERO;
      var d = this.re, f = this.im, y = d * d + f * f;
      return new v(d / y, -f / y);
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
    }, equals: function(d, f) {
      var y = new v(d, f);
      return Math.abs(y.re - this.re) <= v.EPSILON && Math.abs(y.im - this.im) <= v.EPSILON;
    }, clone: function() {
      return new v(this.re, this.im);
    }, toString: function() {
      var d = this.re, f = this.im, y = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < v.EPSILON && (d = 0), Math.abs(f) < v.EPSILON && (f = 0), f === 0 ? y + d : (d !== 0 ? (y += d, y += " ", f < 0 ? (f = -f, y += "-") : y += "+", y += " ") : f < 0 && (f = -f, y += "-"), f !== 1 && (y += f), y + "i"));
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
    }) : typeof uu == "object" ? (Object.defineProperty(v, "__esModule", { value: true }), v.default = v, v.Complex = v, Rd.exports = v) : t.Complex = v;
  })(uu);
});
var dn = _n(sc());
function lc(t) {
  let n = fn(t);
  return new dn.default(n).valueOf() * Math.PI;
}
__name(lc, "lc");
c(lc, "W");
function Xi(t) {
  let n = fn(t).split("/");
  if (n.length === 1)
    return 1;
  if (n.length === 2)
    return parseInt(n[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(Xi, "Xi");
c(Xi, "H");
function uc(t, n) {
  return new dn.default(fn(t)).valueOf() < new dn.default(fn(n)).valueOf();
}
__name(uc, "uc");
c(uc, "V");
function cc(t, n) {
  return new dn.default(fn(t)).valueOf() > new dn.default(fn(n)).valueOf();
}
__name(cc, "cc");
c(cc, "Y");
function pc(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let n = fn(t);
    return new dn.default(n).valueOf(), true;
  } catch (n) {
    return false;
  }
}
__name(pc, "pc");
c(pc, "J");
function fn(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(fn, "fn");
c(fn, "l");
function dc(t) {
  try {
    let n = fn(t), e = new dn.default(n).toFraction().split("/"), r;
    return e[0] === "0" ? r = "0" : e[0] === "1" ? r = "\u03C0" : e[0] === "-1" ? r = "-\u03C0" : r = `${e[0]}\u03C0`, e.length === 1 ? r : `${r}/${e[1]}`;
  } catch (n) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(dc, "dc");
c(dc, "j");
var Oh = Object.prototype.toString.call({});
var Mh = "!recursion-limit!";
var Ih = 10;
function Ke(t, n = Ih) {
  return Ah(t) || Ph(t, n) || zh(t, n);
}
__name(Ke, "Ke");
c(Ke, "p");
function Ah(t) {
  if (t === null)
    return "null";
  if (t === void 0)
    return "undefined";
  if (typeof t == "string")
    return `"${t}"`;
  if (typeof t == "number")
    return String(t);
}
__name(Ah, "Ah");
c(Ah, "G");
function Ph(t, n) {
  if (n === 0)
    return Mh;
  if (t instanceof Map)
    return Rh(t, n);
  if (t instanceof Set)
    return _h(t, n);
  if (((e) => e[Symbol.iterator] !== void 0)(t))
    return Dh(t, n);
}
__name(Ph, "Ph");
c(Ph, "M");
function zh(t, n) {
  let e = String(t);
  return e !== Oh ? e : kh(t, n);
}
__name(zh, "zh");
c(zh, "O");
function Rh(t, n) {
  let e = [];
  for (let [r, a] of t.entries()) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let u = Ke(r, n - 1), h = Ke(a, n - 1);
    e.push(`${u}: ${h}`);
  }
  return `Map{${e.join(", ")}}`;
}
__name(Rh, "Rh");
c(Rh, "F");
function _h(t, n) {
  let e = [];
  for (let r of t) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(Ke(r, n - 1));
  }
  return `Set{${e.join(", ")}}`;
}
__name(_h, "_h");
c(_h, "N");
function Dh(t, n) {
  let e = [];
  for (let r of t) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(Ke(r, n - 1));
  }
  return `${Array.isArray(t) ? "" : t.constructor.name}[${e.join(", ")}]`;
}
__name(Dh, "Dh");
c(Dh, "D");
function kh(t, n) {
  let e = [];
  for (let a in t) {
    if (!Object.prototype.hasOwnProperty.call(t, a))
      continue;
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let u = t[a], h = Ke(a, n - 1), b = Ke(u, n - 1);
    e.push(`${h}: ${b}`);
  }
  let r = t.constructor.name;
  return `${r === {}.constructor.name ? "" : `(Type: ${r})`}{${e.join(", ")}}`;
}
__name(kh, "kh");
c(kh, "U");
var Ys = 0;
var pt = c(class extends Error {
  constructor(t, n) {
    super(t), this.detailsObj = n, this.name = "Error", this.message = t, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Ys++;
    try {
      this.details = Ys === 1 ? Ke(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Ys--;
    }
  }
}, "m");
var Nh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var ir = c(class {
  static parseFloat(t) {
    if (t.length === 0)
      throw new Error(`Not a number: '${t}'`);
    if (t[0] === "-")
      return -ir.parseFloat(t.substr(1));
    if (t[0] === "\u221A")
      return Math.sqrt(ir.parseFloat(t.substr(1)));
    let n = ir.matchUnicodeFraction((r) => r.character === t);
    if (n !== void 0)
      return n.value;
    let e = parseFloat(t);
    if (isNaN(e))
      throw new Error(`Not a number: '${t}'`);
    return e;
  }
  static simplifyByRounding(t, n) {
    if (t < 0)
      return -ir.simplifyByRounding(-t, n);
    let e = t % 1;
    if (e <= n || 1 - e <= n)
      return Math.round(t);
    let r = ir.matchUnicodeFraction((u) => Math.abs(u.value - t) <= n);
    if (r !== void 0)
      return r.value;
    let a = ir.matchUnicodeFraction((u) => Math.abs(Math.sqrt(u.value) - t) <= n);
    return a !== void 0 ? Math.sqrt(a.value) : t;
  }
  static matchUnicodeFraction(t) {
    for (let n of Nh)
      if (t(n))
        return n;
  }
  constructor(t, n, e, r) {
    this.allowAbbreviation = t, this.maxAbbreviationError = n, this.fixedDigits = e, this.itemSeparator = r;
  }
  formatFloat(t) {
    return this.allowAbbreviation ? this.abbreviateFloat(t, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? t.toFixed(this.fixedDigits) : String(t);
  }
  abbreviateFloat(t, n = 0, e = void 0) {
    if (Math.abs(t) < n)
      return "0";
    if (t < 0)
      return `-${this.abbreviateFloat(-t, n, e)}`;
    let r = ir.matchUnicodeFraction((u) => Math.abs(u.value - t) <= n);
    if (r !== void 0)
      return r.character;
    let a = ir.matchUnicodeFraction((u) => Math.abs(Math.sqrt(u.value) - t) <= n);
    return a !== void 0 ? `\u221A${a.character}` : t % 1 !== 0 && e !== void 0 ? t.toFixed(e) : t.toString();
  }
}, "u");
var Yi = ir;
Yi.CONSISTENT = new ir(false, 0, 2, ", "), Yi.EXACT = new ir(true, 0, void 0, ", "), Yi.MINIFIED = new ir(true, 0, void 0, ","), Yi.SIMPLIFIED = new ir(true, 5e-4, 3, ", ");
var B = c(class {
  static need(t, n, e) {
    if (t !== true) {
      let r = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, a = `Precondition failed

Message: ${n === void 0 ? "(not provided)" : n}

Args: ${r}`;
      throw new Error(a);
    }
  }
  static notNull(t) {
    B.need(t != null, "notNull");
  }
  static snappedCosSin(t) {
    let n = Math.PI / 4, e = Math.round(t / n);
    if (e * n === t) {
      let r = Math.sqrt(0.5);
      return [[1, 0], [r, r], [0, 1], [-r, r], [-1, 0], [-r, -r], [0, -1], [r, -r]][e & 7];
    }
    return [Math.cos(t), Math.sin(t)];
  }
}, "d");
var he = c(class {
  static from(t) {
    if (t instanceof he)
      return t;
    if (typeof t == "number")
      return new he(t, 0);
    throw new pt("Unrecognized value type.", { v: t });
  }
  static polar(t, n) {
    let [e, r] = B.snappedCosSin(n);
    return new he(t * e, t * r);
  }
  static realPartOf(t) {
    if (t instanceof he)
      return t.real;
    if (typeof t == "number")
      return t;
    throw new pt("Unrecognized value type.", { v: t });
  }
  static imagPartOf(t) {
    if (t instanceof he)
      return t.imag;
    if (typeof t == "number")
      return 0;
    throw new pt("Unrecognized value type.", { v: t });
  }
  constructor(t, n) {
    this.real = t, this.imag = n;
  }
  static rootsOfQuadratic(t, n, e) {
    if (t = he.from(t), n = he.from(n), e = he.from(e), t.isEqualTo(0)) {
      if (!n.isEqualTo(0))
        return [e.times(-1).dividedBy(n)];
      if (!e.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let r = n.times(n).minus(t.times(e).times(4)).sqrts(), a = n.times(-1), u = t.times(2);
    return r.map((h) => a.minus(h).dividedBy(u));
  }
  isEqualTo(t) {
    return t instanceof he ? this.real === t.real && this.imag === t.imag : typeof t == "number" ? this.real === t && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(t, n) {
    if (t instanceof he || typeof t == "number") {
      let e = this.minus(he.from(t));
      return Math.abs(e.real) <= n && Math.abs(e.imag) <= n && e.abs() <= n;
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
    let t = this.norm2();
    return t < 1e-5 ? he.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t));
  }
  plus(t) {
    let n = he.from(t);
    return new he(this.real + n.real, this.imag + n.imag);
  }
  minus(t) {
    let n = he.from(t);
    return new he(this.real - n.real, this.imag - n.imag);
  }
  times(t) {
    let n = he.from(t);
    return new he(this.real * n.real - this.imag * n.imag, this.real * n.imag + this.imag * n.real);
  }
  dividedBy(t) {
    let n = he.from(t), e = n.norm2();
    if (e === 0)
      throw new Error("Division by Zero");
    let r = this.times(n.conjugate());
    return new he(r.real / e, r.imag / e);
  }
  sqrts() {
    let [t, n] = [this.real, this.imag], e = Math.sqrt(Math.sqrt(t * t + n * n));
    if (e === 0)
      return [he.ZERO];
    if (n === 0 && t < 0)
      return [new he(0, e), new he(0, -e)];
    let r = this.phase() / 2, a = he.polar(e, r);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new he(this.real, -this.imag);
  }
  toString(t) {
    return t = t || Yi.EXACT, t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t);
  }
  neg() {
    return new he(-this.real, -this.imag);
  }
  raisedTo(t) {
    return t === 0.5 && this.imag === 0 && this.real >= 0 ? new he(Math.sqrt(this.real), 0) : he.ZERO.isEqualTo(t) ? he.ONE : this.isEqualTo(he.ZERO) ? he.ZERO : this.ln().times(he.from(t)).exp();
  }
  exp() {
    return he.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let t = this.times(he.I);
    return t.exp().plus(t.neg().exp()).times(0.5);
  }
  sin() {
    let t = this.times(he.I);
    return t.exp().minus(t.neg().exp()).dividedBy(new he(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new he(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(t) {
    return Math.abs(this.imag) <= t.maxAbbreviationError ? t.formatFloat(this.real) : Math.abs(this.real) <= t.maxAbbreviationError ? Math.abs(this.imag - 1) <= t.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= t.maxAbbreviationError ? "-i" : `${t.formatFloat(this.imag)}i` : this.toStringBothValues(t);
  }
  toStringBothValues(t) {
    let n = this.imag >= 0 ? "+" : "-", e = t.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= t.maxAbbreviationError ? "" : t.formatFloat(Math.abs(this.imag));
    return `${(t.allowAbbreviation || t.fixedDigits === void 0 || this.real < 0 ? "" : "+") + t.formatFloat(this.real) + n + e}i`;
  }
}, "o");
var pn = he;
pn.ZERO = new he(0, 0), pn.ONE = new he(1, 0), pn.I = new he(0, 1);
var Zi = { MAX_QUBIT_COUNT: 16 };
function pe(t, n = {}, e = document) {
  let r = new CustomEvent(t, { bubbles: true, cancelable: true, detail: n });
  return e.dispatchEvent(r);
}
__name(pe, "pe");
c(pe, "pe");
var fc = c((t) => typeof t == "number" && 1 <= t && t <= Zi.MAX_QUBIT_COUNT, "de");
var Xs = "\u25E6";
var Zs = "Bloch";
var Qs = "\u2022";
var ma = "H";
var ga = "Measure";
var ba = "P";
var Js = "QFT\u2020";
var Ks = "QFT";
var ya = "X^\xBD";
var wa = "Rx";
var xa = "Ry";
var Ea = "Rz";
var el = "\u2026";
var tl = "Swap";
var Sa = "T";
var hc = "|0>";
var vc = "|1>";
var Ca = "X";
var Ta = "Y";
var Oa = "Z";
var rl = /* @__PURE__ */ new WeakSet();
function il(t) {
  rl.add(t), t.shadowRoot && ol(t.shadowRoot), sl(t), al(t.ownerDocument);
}
__name(il, "il");
c(il, "bind");
function ol(t) {
  sl(t), al(t);
}
__name(ol, "ol");
c(ol, "bindShadow");
var Ma = /* @__PURE__ */ new WeakMap();
function al(t = document) {
  if (Ma.has(t))
    return Ma.get(t);
  let n = false, e = new MutationObserver((a) => {
    for (let u of a)
      if (u.type === "attributes" && u.target instanceof Element)
        nl(u.target);
      else if (u.type === "childList" && u.addedNodes.length)
        for (let h of u.addedNodes)
          h instanceof Element && sl(h);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let r = { get closed() {
    return n;
  }, unsubscribe() {
    n = true, Ma.delete(t), e.disconnect();
  } };
  return Ma.set(t, r), r;
}
__name(al, "al");
c(al, "listenForBind");
function sl(t) {
  for (let n of t.querySelectorAll("[data-action]"))
    nl(n);
  t instanceof Element && t.hasAttribute("data-action") && nl(t);
}
__name(sl, "sl");
c(sl, "bindElements");
function Gh(t) {
  let n = t.currentTarget;
  for (let e of mc(n))
    if (t.type === e.type) {
      let r = n.closest(e.tag);
      rl.has(r) && typeof r[e.method] == "function" && r[e.method](t);
      let a = n.getRootNode();
      if (a instanceof ShadowRoot && rl.has(a.host) && a.host.matches(e.tag)) {
        let u = a.host;
        typeof u[e.method] == "function" && u[e.method](t);
      }
    }
}
__name(Gh, "Gh");
c(Gh, "handleEvent");
function* mc(t) {
  for (let n of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = n.lastIndexOf(":"), r = Math.max(0, n.lastIndexOf("#")) || n.length;
    yield { type: n.slice(0, e), tag: n.slice(e + 1, r), method: n.slice(r + 1) || "handleEvent" };
  }
}
__name(mc, "mc");
c(mc, "bindings");
function nl(t) {
  for (let n of mc(t))
    t.addEventListener(n.type, Gh);
}
__name(nl, "nl");
c(nl, "bindActions");
function ll(t) {
  let n = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(n) || (window[t.name] = t, window.customElements.define(n, t));
}
__name(ll, "ll");
c(ll, "register");
function ul(t, n) {
  let e = t.tagName.toLowerCase();
  if (t.shadowRoot) {
    for (let r of t.shadowRoot.querySelectorAll(`[data-target~="${e}.${n}"]`))
      if (!r.closest(e))
        return r;
  }
  for (let r of t.querySelectorAll(`[data-target~="${e}.${n}"]`))
    if (r.closest(e) === t)
      return r;
}
__name(ul, "ul");
c(ul, "findTarget");
function cl(t, n) {
  let e = t.tagName.toLowerCase(), r = [];
  if (t.shadowRoot)
    for (let a of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${n}"]`))
      a.closest(e) || r.push(a);
  for (let a of t.querySelectorAll(`[data-targets~="${e}.${n}"]`))
    a.closest(e) === t && r.push(a);
  return r;
}
__name(cl, "cl");
c(cl, "findTargets");
function Oe(t, n) {
  return Object.defineProperty(t, n, { configurable: true, get() {
    return ul(this, n);
  } });
}
__name(Oe, "Oe");
c(Oe, "target");
function dt(t, n) {
  return Object.defineProperty(t, n, { configurable: true, get() {
    return cl(this, n);
  } });
}
__name(dt, "dt");
c(dt, "targets");
function pl(t) {
  for (let n of t.querySelectorAll("template[data-shadowroot]"))
    n.parentElement === t && t.attachShadow({ mode: n.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(n.content.cloneNode(true));
}
__name(pl, "pl");
c(pl, "autoShadowRoot");
var Ia = /* @__PURE__ */ new WeakMap();
function D(t, n) {
  Ia.has(t) || Ia.set(t, []), Ia.get(t).push(n);
}
__name(D, "D");
c(D, "attr");
function dl(t, n) {
  n || (n = gc(Object.getPrototypeOf(t)));
  for (let e of n) {
    let r = t[e], a = bc(e), u = { configurable: true, get() {
      return this.getAttribute(a) || "";
    }, set(h) {
      this.setAttribute(a, h || "");
    } };
    typeof r == "number" ? u = { configurable: true, get() {
      return Number(this.getAttribute(a) || 0);
    }, set(h) {
      this.setAttribute(a, h);
    } } : typeof r == "boolean" && (u = { configurable: true, get() {
      return this.hasAttribute(a);
    }, set(h) {
      this.toggleAttribute(a, h);
    } }), Object.defineProperty(t, e, u), e in t && !t.hasAttribute(a) && u.set.call(t, r);
  }
}
__name(dl, "dl");
c(dl, "initializeAttrs");
function gc(t) {
  let n = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let r = Ia.get(e) || [];
    for (let a of r)
      n.add(a);
    e = Object.getPrototypeOf(e);
  }
  return n;
}
__name(gc, "gc");
c(gc, "getAttrNames");
function bc(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(bc, "bc");
c(bc, "attrToAttributeName");
function fl(t) {
  let n = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...gc(t.prototype)].map(bc).concat(n);
  }, set(e) {
    n = e;
  } });
}
__name(fl, "fl");
c(fl, "defineObservedAttributes");
var Lh = /* @__PURE__ */ new WeakSet();
function yc(t, n) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), Lh.add(t), pl(t), dl(t), il(t), n && n.call(t), t.shadowRoot && ol(t.shadowRoot);
}
__name(yc, "yc");
c(yc, "initializeInstance");
function wc(t) {
  fl(t), ll(t);
}
__name(wc, "wc");
c(wc, "initializeClass");
function Q(t) {
  let n = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    yc(this, n);
  }, wc(t);
}
__name(Q, "Q");
c(Q, "controller");
function be(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.active = false;
    }
    activate() {
      this.active = true, pe("activateable:active", {}, this);
    }
    deactivate() {
      this.active = false;
    }
  }
  __name(n, "n");
  return c(n, "ActivateableMixinClass"), M([D], n.prototype, "active", 2), n;
}
__name(be, "be");
c(be, "ActivateableMixin");
var Dn = c((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function hn(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(n, "n");
  return c(n, "AngleableMixinClass"), M([D], n.prototype, "angle", 2), M([D], n.prototype, "reducedAngle", 2), n;
}
__name(hn, "hn");
c(hn, "AngleableMixin");
var Qi = c((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function Ze(t) {
  class n extends t {
    get controls() {
      let r = this.getAttribute("data-controls");
      return r === null ? [] : r === "" ? [] : r.split(",").map((a) => parseInt(a)).sort();
    }
    set controls(r) {
      this.setAttribute("data-controls", r.sort().join());
    }
    get antiControls() {
      let r = this.getAttribute("data-anti-controls");
      return r === null ? [] : r === "" ? [] : r.split(",").map((a) => parseInt(a)).sort();
    }
    set antiControls(r) {
      this.setAttribute("data-anti-controls", r.sort().join());
    }
    get isControlled() {
      return this.controls.length > 0;
    }
    get isAntiControlled() {
      return this.antiControls.length > 0;
    }
  }
  __name(n, "n");
  return c(n, "ControllableMixinClass"), n;
}
__name(Ze, "Ze");
c(Ze, "ControllableMixin");
function Ne(t) {
  class n extends t {
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
  __name(n, "n");
  return c(n, "DisableableMixinClass"), M([D], n.prototype, "disabled", 2), n;
}
__name(Ne, "Ne");
c(Ne, "DisableableMixin");
var V = c(function() {
  return V = Object.assign || c(function(n) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var u in e)
        Object.prototype.hasOwnProperty.call(e, u) && (n[u] = e[u]);
    }
    return n;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function ai(t, n) {
  var e = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (e[r[a]] = t[r[a]]);
  return e;
}
__name(ai, "ai");
c(ai, "__rest");
function ve(t) {
  var n = typeof Symbol == "function" && Symbol.iterator, e = n && t[n], r = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return { next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    } };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(ve, "ve");
c(ve, "__values");
function ye(t, n) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var r = e.call(t), a, u = [], h;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; )
      u.push(a.value);
  } catch (b) {
    h = { error: b };
  } finally {
    try {
      a && !a.done && (e = r.return) && e.call(r);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return u;
}
__name(ye, "ye");
c(ye, "__read");
function ze(t, n, e) {
  if (e || arguments.length === 2)
    for (var r = 0, a = n.length, u; r < a; r++)
      (u || !(r in n)) && (u || (u = Array.prototype.slice.call(n, 0, r)), u[r] = n[r]);
  return t.concat(u || Array.prototype.slice.call(n));
}
__name(ze, "ze");
c(ze, "__spreadArray");
var Re;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(Re || (Re = {}));
var xr;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(xr || (xr = {}));
var Ji = Re.Start;
var si = Re.Stop;
var Wr = Re.Raise;
var Vr = Re.Send;
var Aa = Re.Cancel;
var xc = Re.NullEvent;
var hl = Re.Assign;
var zg = Re.After;
var Rg = Re.DoneState;
var Pa = Re.Log;
var Ec = Re.Init;
var Ki = Re.Invoke;
var _g = Re.ErrorExecution;
var vl = Re.ErrorPlatform;
var ml = Re.ErrorCustom;
var eo = Re.Update;
var Sc = Re.Choose;
var Cc = Re.Pure;
var za = ".";
var gl = {};
var Ra = "xstate.guard";
var Tc = "";
var Ge = true;
var _a;
function ro(t, n, e) {
  e === void 0 && (e = za);
  var r = li(t, e), a = li(n, e);
  return Ce(a) ? Ce(r) ? a === r : false : Ce(r) ? r in a : Object.keys(r).every(function(u) {
    return u in a ? ro(r[u], a[u]) : false;
  });
}
__name(ro, "ro");
c(ro, "matchesState");
function Da(t) {
  try {
    return Ce(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (n) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Da, "Da");
c(Da, "getEventType");
function ka(t, n) {
  try {
    return Yr(t) ? t : t.toString().split(n);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(ka, "ka");
c(ka, "toStatePath");
function jh(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(jh, "jh");
c(jh, "isStateLike");
function li(t, n) {
  if (jh(t))
    return t.value;
  if (Yr(t))
    return to(t);
  if (typeof t != "string")
    return t;
  var e = ka(t, n);
  return to(e);
}
__name(li, "li");
c(li, "toStateValue");
function to(t) {
  if (t.length === 1)
    return t[0];
  for (var n = {}, e = n, r = 0; r < t.length - 1; r++)
    r === t.length - 2 ? e[t[r]] = t[r + 1] : (e[t[r]] = {}, e = e[t[r]]);
  return n;
}
__name(to, "to");
c(to, "pathToStateValue");
function ui(t, n) {
  for (var e = {}, r = Object.keys(t), a = 0; a < r.length; a++) {
    var u = r[a];
    e[u] = n(t[u], u, t, a);
  }
  return e;
}
__name(ui, "ui");
c(ui, "mapValues");
function bl(t, n, e) {
  var r, a, u = {};
  try {
    for (var h = ve(Object.keys(t)), b = h.next(); !b.done; b = h.next()) {
      var v = b.value, d = t[v];
      e(d) && (u[v] = n(d, v, t));
    }
  } catch (f) {
    r = { error: f };
  } finally {
    try {
      b && !b.done && (a = h.return) && a.call(h);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return u;
}
__name(bl, "bl");
c(bl, "mapFilterValues");
var Oc = c(function(t) {
  return function(n) {
    var e, r, a = n;
    try {
      for (var u = ve(t), h = u.next(); !h.done; h = u.next()) {
        var b = h.value;
        a = a[b];
      }
    } catch (v) {
      e = { error: v };
    } finally {
      try {
        h && !h.done && (r = u.return) && r.call(u);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return a;
  };
}, "path");
function Mc(t, n) {
  return function(e) {
    var r, a, u = e;
    try {
      for (var h = ve(t), b = h.next(); !b.done; b = h.next()) {
        var v = b.value;
        u = u[n][v];
      }
    } catch (d) {
      r = { error: d };
    } finally {
      try {
        b && !b.done && (a = h.return) && a.call(h);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return u;
  };
}
__name(Mc, "Mc");
c(Mc, "nestedPath");
function no(t) {
  if (!t)
    return [[]];
  if (Ce(t))
    return [[t]];
  var n = Be(Object.keys(t).map(function(e) {
    var r = t[e];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[e]] : no(t[e]).map(function(a) {
      return [e].concat(a);
    });
  }));
  return n;
}
__name(no, "no");
c(no, "toStatePaths");
function Be(t) {
  var n;
  return (n = []).concat.apply(n, ze([], ye(t), false));
}
__name(Be, "Be");
c(Be, "flatten");
function Ic(t) {
  return Yr(t) ? t : [t];
}
__name(Ic, "Ic");
c(Ic, "toArrayStrict");
function or(t) {
  return t === void 0 ? [] : Ic(t);
}
__name(or, "or");
c(or, "toArray");
function kn(t, n, e) {
  var r, a;
  if (_e(t))
    return t(n, e.data);
  var u = {};
  try {
    for (var h = ve(Object.keys(t)), b = h.next(); !b.done; b = h.next()) {
      var v = b.value, d = t[v];
      _e(d) ? u[v] = d(n, e.data) : u[v] = d;
    }
  } catch (f) {
    r = { error: f };
  } finally {
    try {
      b && !b.done && (a = h.return) && a.call(h);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return u;
}
__name(kn, "kn");
c(kn, "mapContext");
function Ac(t) {
  return /^(done|error)\./.test(t);
}
__name(Ac, "Ac");
c(Ac, "isBuiltInEvent");
function yl(t) {
  return !!(t instanceof Promise || t !== null && (_e(t) || typeof t == "object") && _e(t.then));
}
__name(yl, "yl");
c(yl, "isPromiseLike");
function Pc(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(Pc, "Pc");
c(Pc, "isBehavior");
function zc(t, n) {
  var e, r, a = ye([[], []], 2), u = a[0], h = a[1];
  try {
    for (var b = ve(t), v = b.next(); !v.done; v = b.next()) {
      var d = v.value;
      n(d) ? u.push(d) : h.push(d);
    }
  } catch (f) {
    e = { error: f };
  } finally {
    try {
      v && !v.done && (r = b.return) && r.call(b);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [u, h];
}
__name(zc, "zc");
c(zc, "partition");
function Rc(t, n) {
  return ui(t.states, function(e, r) {
    if (e) {
      var a = (Ce(n) ? void 0 : n[r]) || (e ? e.current : void 0);
      if (a)
        return { current: a, states: Rc(e, a) };
    }
  });
}
__name(Rc, "Rc");
c(Rc, "updateHistoryStates");
function _c(t, n) {
  return { current: n, states: Rc(t, n) };
}
__name(_c, "_c");
c(_c, "updateHistoryValue");
function wl(t, n, e, r) {
  Ge || et(!!t, "Attempting to update undefined context");
  var a = t && e.reduce(function(u, h) {
    var b, v, d = h.assignment, f = { state: r, action: h, _event: n }, y = {};
    if (_e(d))
      y = d(u, n.data, f);
    else
      try {
        for (var E = ve(Object.keys(d)), S = E.next(); !S.done; S = E.next()) {
          var C = S.value, T = d[C];
          y[C] = _e(T) ? T(u, n.data, f) : T;
        }
      } catch (z) {
        b = { error: z };
      } finally {
        try {
          S && !S.done && (v = E.return) && v.call(E);
        } finally {
          if (b)
            throw b.error;
        }
      }
    return Object.assign({}, u, y);
  }, t);
  return a;
}
__name(wl, "wl");
c(wl, "updateContext");
var et = c(function() {
}, "warn");
Ge || (et = c(function(t, n) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var r = ["Warning: ".concat(n)];
    e && r.push(e), console.warn.apply(console, r);
  }
}, "warn"));
function Yr(t) {
  return Array.isArray(t);
}
__name(Yr, "Yr");
c(Yr, "isArray");
function _e(t) {
  return typeof t == "function";
}
__name(_e, "_e");
c(_e, "isFunction");
function Ce(t) {
  return typeof t == "string";
}
__name(Ce, "Ce");
c(Ce, "isString");
function Na(t, n) {
  if (t)
    return Ce(t) ? { type: Ra, name: t, predicate: n ? n[t] : void 0 } : _e(t) ? { type: Ra, name: t.name, predicate: t } : t;
}
__name(Na, "Na");
c(Na, "toGuard");
function Dc(t) {
  try {
    return "subscribe" in t && _e(t.subscribe);
  } catch (n) {
    return false;
  }
}
__name(Dc, "Dc");
c(Dc, "isObservable");
var Pr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Hg = (_a = {}, _a[Pr] = function() {
  return this;
}, _a[Symbol.observable] = function() {
  return this;
}, _a);
function zr(t) {
  return !!t && "__xstatenode" in t;
}
__name(zr, "zr");
c(zr, "isMachine");
function kc(t) {
  return !!t && typeof t.send == "function";
}
__name(kc, "kc");
c(kc, "isActor");
function io(t, n) {
  return Ce(t) || typeof t == "number" ? V({ type: t }, n) : t;
}
__name(io, "io");
c(io, "toEventObject");
function ot(t, n) {
  if (!Ce(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = io(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, n);
}
__name(ot, "ot");
c(ot, "toSCXMLEvent");
function Nn(t, n) {
  var e = Ic(n).map(function(r) {
    return typeof r == "undefined" || typeof r == "string" || zr(r) ? { target: r, event: t } : V(V({}, r), { event: t });
  });
  return e;
}
__name(Nn, "Nn");
c(Nn, "toTransitionConfigArray");
function Nc(t) {
  if (!(t === void 0 || t === Tc))
    return or(t);
}
__name(Nc, "Nc");
c(Nc, "normalizeTarget");
function Gc(t, n, e) {
  if (!Ge) {
    var r = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === n)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(r));
    else {
      var a = n.stack ? " Stacktrace was '".concat(n.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(r, " Current error is '").concat(n, "'.").concat(a));
    }
  }
}
__name(Gc, "Gc");
c(Gc, "reportUnhandledExceptionOnInvocation");
function Ga(t, n, e, r, a) {
  var u = t.options.guards, h = { state: a, cond: n, _event: r };
  if (n.type === Ra)
    return ((u == null ? void 0 : u[n.name]) || n.predicate)(e, r.data, h);
  var b = u == null ? void 0 : u[n.type];
  if (!b)
    throw new Error("Guard '".concat(n.type, "' is not implemented on machine '").concat(t.id, "'."));
  return b(e, r.data, h);
}
__name(Ga, "Ga");
c(Ga, "evaluateGuard");
function La(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(La, "La");
c(La, "toInvokeSource");
function ci(t, n, e) {
  var r = c(function() {
  }, "noop"), a = typeof t == "object", u = a ? t : null;
  return { next: ((a ? t.next : t) || r).bind(u), error: ((a ? t.error : n) || r).bind(u), complete: ((a ? t.complete : e) || r).bind(u) };
}
__name(ci, "ci");
c(ci, "toObserver");
function oo(t, n) {
  return "".concat(t, ":invocation[").concat(n, "]");
}
__name(oo, "oo");
c(oo, "createInvokeId");
var Xr = ot({ type: Ec });
function ja(t, n) {
  return n && n[t] || void 0;
}
__name(ja, "ja");
c(ja, "getActionFunction");
function di(t, n) {
  var e;
  if (Ce(t) || typeof t == "number") {
    var r = ja(t, n);
    _e(r) ? e = { type: t, exec: r } : r ? e = r : e = { type: t, exec: void 0 };
  } else if (_e(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var r = ja(t.type, n);
    if (_e(r))
      e = V(V({}, t), { exec: r });
    else if (r) {
      var a = r.type || t.type;
      e = V(V(V({}, r), t), { type: a });
    } else
      e = t;
  }
  return e;
}
__name(di, "di");
c(di, "toActionObject");
var Rr = c(function(t, n) {
  if (!t)
    return [];
  var e = Yr(t) ? t : [t];
  return e.map(function(r) {
    return di(r, n);
  });
}, "toActionObjects");
function Ha(t) {
  var n = di(t);
  return V(V({ id: Ce(t) ? t : n.id }, n), { type: n.type });
}
__name(Ha, "Ha");
c(Ha, "toActivityDefinition");
function Lc(t) {
  return Ce(t) ? { type: Wr, event: t } : xl(t, { to: xr.Internal });
}
__name(Lc, "Lc");
c(Lc, "raise");
function Hh(t) {
  return { type: Wr, _event: ot(t.event) };
}
__name(Hh, "Hh");
c(Hh, "resolveRaise");
function xl(t, n) {
  return { to: n ? n.to : void 0, type: Vr, event: _e(t) ? t : io(t), delay: n ? n.delay : void 0, id: n && n.id !== void 0 ? n.id : _e(t) ? t.name : Da(t) };
}
__name(xl, "xl");
c(xl, "send");
function Bh(t, n, e, r) {
  var a = { _event: e }, u = ot(_e(t.event) ? t.event(n, e.data, a) : t.event), h;
  if (Ce(t.delay)) {
    var b = r && r[t.delay];
    h = _e(b) ? b(n, e.data, a) : b;
  } else
    h = _e(t.delay) ? t.delay(n, e.data, a) : t.delay;
  var v = _e(t.to) ? t.to(n, e.data, a) : t.to;
  return V(V({}, t), { to: v, _event: u, event: u.data, delay: h });
}
__name(Bh, "Bh");
c(Bh, "resolveSend");
var $h = c(function(t, n, e) {
  return V(V({}, t), { value: Ce(t.expr) ? t.expr : t.expr(n, e.data, { _event: e }) });
}, "resolveLog");
var jc = c(function(t) {
  return { type: Aa, sendId: t };
}, "cancel");
function Hc(t) {
  var n = Ha(t);
  return { type: Re.Start, activity: n, exec: void 0 };
}
__name(Hc, "Hc");
c(Hc, "start");
function Bc(t) {
  var n = _e(t) ? t : Ha(t);
  return { type: Re.Stop, activity: n, exec: void 0 };
}
__name(Bc, "Bc");
c(Bc, "stop");
function qh(t, n, e) {
  var r = _e(t.activity) ? t.activity(n, e.data) : t.activity, a = typeof r == "string" ? { id: r } : r, u = { type: Re.Stop, activity: a };
  return u;
}
__name(qh, "qh");
c(qh, "resolveStop");
function $c(t, n) {
  var e = n ? "#".concat(n) : "";
  return "".concat(Re.After, "(").concat(t, ")").concat(e);
}
__name($c, "$c");
c($c, "after");
function ao(t, n) {
  var e = "".concat(Re.DoneState, ".").concat(t), r = { type: e, data: n };
  return r.toString = function() {
    return e;
  }, r;
}
__name(ao, "ao");
c(ao, "done");
function fi(t, n) {
  var e = "".concat(Re.DoneInvoke, ".").concat(t), r = { type: e, data: n };
  return r.toString = function() {
    return e;
  }, r;
}
__name(fi, "fi");
c(fi, "doneInvoke");
function Gn(t, n) {
  var e = "".concat(Re.ErrorPlatform, ".").concat(t), r = { type: e, data: n };
  return r.toString = function() {
    return e;
  }, r;
}
__name(Gn, "Gn");
c(Gn, "error");
var Fh = c(function(t) {
  var n, e, r = [];
  try {
    for (var a = ve(t), u = a.next(); !u.done; u = a.next())
      for (var h = u.value, b = 0; b < h.actions.length; ) {
        if (h.actions[b].type === hl) {
          r.push(h.actions[b]), h.actions.splice(b, 1);
          continue;
        }
        b++;
      }
  } catch (v) {
    n = { error: v };
  } finally {
    try {
      u && !u.done && (e = a.return) && e.call(a);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return r;
}, "pluckAssigns");
function pi(t, n, e, r, a, u, h) {
  h === void 0 && (h = false);
  var b = h ? [] : Fh(a), v = b.length ? wl(e, r, b, n) : e, d = h ? [e] : void 0, f = [];
  function y(C, T) {
    var z;
    switch (T.type) {
      case Wr:
        return Hh(T);
      case Vr:
        var k = Bh(T, v, r, t.options.delays);
        return Ge || et(!Ce(T.delay) || typeof k.delay == "number", "No delay reference for delay expression '".concat(T.delay, "' was found on machine '").concat(t.id, "'")), u && k.to !== xr.Internal && (C === "entry" ? f.push(k) : u == null || u(k, v, r)), k;
      case Pa: {
        var j = $h(T, v, r);
        return u == null || u(j, v, r), j;
      }
      case Sc: {
        var $ = T, A = (z = $.conds.find(function(ue) {
          var Fe = Na(ue.cond, t.options.guards);
          return !Fe || Ga(t, Fe, v, r, u ? void 0 : n);
        })) === null || z === void 0 ? void 0 : z.actions;
        if (!A)
          return [];
        var ee = ye(pi(t, n, v, r, [{ type: C, actions: Rr(or(A), t.options.actions) }], u, h), 2), R = ee[0], H = ee[1];
        return v = H, d == null || d.push(v), R;
      }
      case Cc: {
        var A = T.get(v, r.data);
        if (!A)
          return [];
        var K = ye(pi(t, n, v, r, [{ type: C, actions: Rr(or(A), t.options.actions) }], u, h), 2), te = K[0], le = K[1];
        return v = le, d == null || d.push(v), te;
      }
      case si: {
        var j = qh(T, v, r);
        return u == null || u(j, e, r), j;
      }
      case hl: {
        v = wl(v, r, [T], u ? void 0 : n), d == null || d.push(v);
        break;
      }
      default:
        var Y = di(T, t.options.actions), ie = Y.exec;
        if (u)
          u(Y, v, r);
        else if (ie && d) {
          var W = d.length - 1;
          Y = V(V({}, Y), { exec: function(ue) {
            for (var Fe = [], $e = 1; $e < arguments.length; $e++)
              Fe[$e - 1] = arguments[$e];
            ie.apply(void 0, ze([d[W]], ye(Fe), false));
          } });
        }
        return Y;
    }
  }
  __name(y, "y");
  c(y, "handleAction");
  function E(C) {
    var T, z, k = [];
    try {
      for (var j = ve(C.actions), $ = j.next(); !$.done; $ = j.next()) {
        var A = $.value, ee = y(C.type, A);
        ee && (k = k.concat(ee));
      }
    } catch (R) {
      T = { error: R };
    } finally {
      try {
        $ && !$.done && (z = j.return) && z.call(j);
      } finally {
        if (T)
          throw T.error;
      }
    }
    return f.forEach(function(R) {
      u(R, v, r);
    }), f.length = 0, k;
  }
  __name(E, "E");
  c(E, "processBlock");
  var S = Be(a.map(E));
  return [S, v];
}
__name(pi, "pi");
c(pi, "resolveActions");
var qc = [];
var vn = c(function(t, n) {
  qc.push(t);
  var e = n(t);
  return qc.pop(), e;
}, "provide");
function Fc(t) {
  var n;
  return n = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, n[Pr] = function() {
    return this;
  }, n;
}
__name(Fc, "Fc");
c(Fc, "createNullActor");
function Uc(t, n, e, r) {
  var a, u = La(t.src), h = (a = n == null ? void 0 : n.options.services) === null || a === void 0 ? void 0 : a[u.type], b = t.data ? kn(t.data, e, r) : void 0, v = h ? El(h, t.id, b) : Fc(t.id);
  return v.meta = t, v;
}
__name(Uc, "Uc");
c(Uc, "createInvocableActor");
function El(t, n, e) {
  var r = Fc(n);
  if (r.deferred = true, zr(t)) {
    var a = r.state = vn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    r.getSnapshot = function() {
      return a;
    };
  }
  return r;
}
__name(El, "El");
c(El, "createDeferredActor");
function Uh(t) {
  try {
    return typeof t.send == "function";
  } catch (n) {
    return false;
  }
}
__name(Uh, "Uh");
c(Uh, "isActor");
function Wc(t) {
  return Uh(t) && "id" in t;
}
__name(Wc, "Wc");
c(Wc, "isSpawnedActor");
function Vc(t) {
  var n;
  return V((n = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, n[Pr] = function() {
    return this;
  }, n), t);
}
__name(Vc, "Vc");
c(Vc, "toActorRef");
var so = c(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function Cl(t) {
  return Object.keys(t.states).map(function(n) {
    return t.states[n];
  });
}
__name(Cl, "Cl");
c(Cl, "getAllChildren");
function hi(t) {
  return Cl(t).filter(function(n) {
    return n.type !== "history";
  });
}
__name(hi, "hi");
c(hi, "getChildren");
function Tl(t) {
  var n = [t];
  return so(t) ? n : n.concat(Be(hi(t).map(Tl)));
}
__name(Tl, "Tl");
c(Tl, "getAllStateNodes");
function vi(t, n) {
  var e, r, a, u, h, b, v, d, f = new Set(t), y = Sl(f), E = new Set(n);
  try {
    for (var S = ve(E), C = S.next(); !C.done; C = S.next())
      for (var T = C.value, z = T.parent; z && !E.has(z); )
        E.add(z), z = z.parent;
  } catch (te) {
    e = { error: te };
  } finally {
    try {
      C && !C.done && (r = S.return) && r.call(S);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var k = Sl(E);
  try {
    for (var j = ve(E), $ = j.next(); !$.done; $ = j.next()) {
      var T = $.value;
      if (T.type === "compound" && (!k.get(T) || !k.get(T).length))
        y.get(T) ? y.get(T).forEach(function(le) {
          return E.add(le);
        }) : T.initialStateNodes.forEach(function(le) {
          return E.add(le);
        });
      else if (T.type === "parallel")
        try {
          for (var A = (h = void 0, ve(hi(T))), ee = A.next(); !ee.done; ee = A.next()) {
            var R = ee.value;
            E.has(R) || (E.add(R), y.get(R) ? y.get(R).forEach(function(le) {
              return E.add(le);
            }) : R.initialStateNodes.forEach(function(le) {
              return E.add(le);
            }));
          }
        } catch (le) {
          h = { error: le };
        } finally {
          try {
            ee && !ee.done && (b = A.return) && b.call(A);
          } finally {
            if (h)
              throw h.error;
          }
        }
    }
  } catch (te) {
    a = { error: te };
  } finally {
    try {
      $ && !$.done && (u = j.return) && u.call(j);
    } finally {
      if (a)
        throw a.error;
    }
  }
  try {
    for (var H = ve(E), K = H.next(); !K.done; K = H.next())
      for (var T = K.value, z = T.parent; z && !E.has(z); )
        E.add(z), z = z.parent;
  } catch (te) {
    v = { error: te };
  } finally {
    try {
      K && !K.done && (d = H.return) && d.call(H);
    } finally {
      if (v)
        throw v.error;
    }
  }
  return E;
}
__name(vi, "vi");
c(vi, "getConfiguration");
function Yc(t, n) {
  var e = n.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var r = e[0];
    if (r) {
      if (so(r))
        return r.key;
    } else
      return {};
  }
  var a = {};
  return e.forEach(function(u) {
    a[u.key] = Yc(u, n);
  }), a;
}
__name(Yc, "Yc");
c(Yc, "getValueFromAdj");
function Sl(t) {
  var n, e, r = /* @__PURE__ */ new Map();
  try {
    for (var a = ve(t), u = a.next(); !u.done; u = a.next()) {
      var h = u.value;
      r.has(h) || r.set(h, []), h.parent && (r.has(h.parent) || r.set(h.parent, []), r.get(h.parent).push(h));
    }
  } catch (b) {
    n = { error: b };
  } finally {
    try {
      u && !u.done && (e = a.return) && e.call(a);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return r;
}
__name(Sl, "Sl");
c(Sl, "getAdjList");
function Xc(t, n) {
  var e = vi([t], n);
  return Yc(t, Sl(e));
}
__name(Xc, "Xc");
c(Xc, "getValue");
function mi(t, n) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === n;
  }) : t instanceof Set ? t.has(n) : false;
}
__name(mi, "mi");
c(mi, "has");
function Zc(t) {
  return ze([], ye(new Set(Be(ze([], ye(t.map(function(n) {
    return n.ownEvents;
  })), false)))), false);
}
__name(Zc, "Zc");
c(Zc, "nextEvents");
function lo(t, n) {
  return n.type === "compound" ? hi(n).some(function(e) {
    return e.type === "final" && mi(t, e);
  }) : n.type === "parallel" ? hi(n).every(function(e) {
    return lo(t, e);
  }) : false;
}
__name(lo, "lo");
c(lo, "isInFinalState");
function Qc(t) {
  return t === void 0 && (t = []), t.reduce(function(n, e) {
    return e.meta !== void 0 && (n[e.id] = e.meta), n;
  }, {});
}
__name(Qc, "Qc");
c(Qc, "getMeta");
function Ol(t) {
  return new Set(Be(t.map(function(n) {
    return n.tags;
  })));
}
__name(Ol, "Ol");
c(Ol, "getTagsFromConfiguration");
function Ml(t, n) {
  if (t === n)
    return true;
  if (t === void 0 || n === void 0)
    return false;
  if (Ce(t) || Ce(n))
    return t === n;
  var e = Object.keys(t), r = Object.keys(n);
  return e.length === r.length && e.every(function(a) {
    return Ml(t[a], n[a]);
  });
}
__name(Ml, "Ml");
c(Ml, "stateValuesEqual");
function Jc(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(Jc, "Jc");
c(Jc, "isStateConfig");
function Kc(t, n) {
  var e = t.exec, r = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(n.context, n.event, { action: t, state: n, _event: n._event });
  } : void 0 });
  return r;
}
__name(Kc, "Kc");
c(Kc, "bindActionToState");
var dr = function() {
  function t(n) {
    var e = this, r;
    this.actions = [], this.activities = gl, this.meta = {}, this.events = [], this.value = n.value, this.context = n.context, this._event = n._event, this._sessionid = n._sessionid, this.event = this._event.data, this.historyValue = n.historyValue, this.history = n.history, this.actions = n.actions || [], this.activities = n.activities || gl, this.meta = Qc(n.configuration), this.events = n.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = n.configuration, this.transitions = n.transitions, this.children = n.children, this.done = !!n.done, this.tags = (r = Array.isArray(n.tags) ? new Set(n.tags) : n.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = n.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Zc(e.configuration);
    } });
  }
  __name(t, "t");
  return c(t, "State"), t.from = function(n, e) {
    if (n instanceof t)
      return n.context !== e ? new t({ value: n.value, context: e, _event: n._event, _sessionid: null, historyValue: n.historyValue, history: n.history, actions: [], activities: n.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : n;
    var r = Xr;
    return new t({ value: n, context: e, _event: r, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(n) {
    return new t(n);
  }, t.inert = function(n, e) {
    if (n instanceof t) {
      if (!n.actions.length)
        return n;
      var r = Xr;
      return new t({ value: n.value, context: e, _event: r, _sessionid: null, historyValue: n.historyValue, history: n.history, activities: n.activities, configuration: n.configuration, transitions: [], children: {} });
    }
    return t.from(n, e);
  }, t.prototype.toStrings = function(n, e) {
    var r = this;
    if (n === void 0 && (n = this.value), e === void 0 && (e = "."), Ce(n))
      return [n];
    var a = Object.keys(n);
    return a.concat.apply(a, ze([], ye(a.map(function(u) {
      return r.toStrings(n[u], e).map(function(h) {
        return u + e + h;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var n = this;
    n.configuration, n.transitions;
    var e = n.tags;
    n.machine;
    var r = ai(n, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, r), { tags: Array.from(e) });
  }, t.prototype.matches = function(n) {
    return ro(n, this.value);
  }, t.prototype.hasTag = function(n) {
    return this.tags.has(n);
  }, t.prototype.can = function(n) {
    var e;
    Ge && et(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var r = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, n);
    return !!(r != null && r.transitions.length) && r.transitions.some(function(a) {
      return a.target !== void 0 || a.actions.length;
    });
  }, t;
}();
var Wh = { deferEvents: false };
var Il = function() {
  function t(n) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Wh), n);
  }
  __name(t, "t");
  return c(t, "Scheduler"), t.prototype.initialize = function(n) {
    if (this.initialized = true, n) {
      if (!this.options.deferEvents) {
        this.schedule(n);
        return;
      }
      this.process(n);
    }
    this.flushEvents();
  }, t.prototype.schedule = function(n) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(n);
      return;
    }
    if (this.queue.length !== 0)
      throw new Error("Event queue should be empty when it is not processing events");
    this.process(n), this.flushEvents();
  }, t.prototype.clear = function() {
    this.queue = [];
  }, t.prototype.flushEvents = function() {
    for (var n = this.queue.shift(); n; )
      this.process(n), n = this.queue.shift();
  }, t.prototype.process = function(n) {
    this.processingEvent = true;
    try {
      n();
    } catch (e) {
      throw this.clear(), e;
    } finally {
      this.processingEvent = false;
    }
  }, t;
}();
var Al = /* @__PURE__ */ new Map();
var Vh = 0;
var gi = { bookId: function() {
  return "x:".concat(Vh++);
}, register: function(t, n) {
  return Al.set(t, n), t;
}, get: function(t) {
  return Al.get(t);
}, free: function(t) {
  Al.delete(t);
} };
function Ba() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  Ge || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(Ba, "Ba");
c(Ba, "getGlobal");
function Yh() {
  var t = Ba();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(Yh, "Yh");
c(Yh, "getDevTools");
function ep(t) {
  if (Ba()) {
    var n = Yh();
    n && n.register(t);
  }
}
__name(ep, "ep");
c(ep, "registerService");
function tp(t, n) {
  n === void 0 && (n = {});
  var e = t.initialState, r = /* @__PURE__ */ new Set(), a = [], u = false, h = c(function() {
    if (!u) {
      for (u = true; a.length > 0; ) {
        var d = a.shift();
        e = t.transition(e, d, v), r.forEach(function(f) {
          return f.next(e);
        });
      }
      u = false;
    }
  }, "flush"), b = Vc({ id: n.id, send: function(d) {
    a.push(d), h();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, f, y) {
    var E = ci(d, f, y);
    return r.add(E), E.next(e), { unsubscribe: function() {
      r.delete(E);
    } };
  } }), v = { parent: n.parent, self: b, id: n.id || "anonymous", observers: r };
  return e = t.start ? t.start(v) : e, b;
}
__name(tp, "tp");
c(tp, "spawnBehavior");
var Xh = { sync: false, autoForward: false };
var ft;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(ft || (ft = {}));
var rp = function() {
  function t(n, e) {
    e === void 0 && (e = t.defaultOptions);
    var r = this;
    this.machine = n, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = ft.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(f, y) {
      if (Yr(f))
        return r.batch(f), r.state;
      var E = ot(io(f, y));
      if (r.status === ft.Stopped)
        return Ge || et(false, 'Event "'.concat(E.name, '" was sent to stopped service "').concat(r.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(E.data))), r.state;
      if (r.status !== ft.Running && !r.options.deferEvents)
        throw new Error('Event "'.concat(E.name, '" was sent to uninitialized service "').concat(r.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(E.data)));
      return r.scheduler.schedule(function() {
        r.forward(E);
        var S = r._nextState(E);
        r.update(S, E);
      }), r._state;
    }, this.sendTo = function(f, y, E) {
      var S = r.parent && (y === xr.Parent || r.parent.id === y), C = S ? r.parent : Ce(y) ? r.children.get(y) || gi.get(y) : kc(y) ? y : void 0;
      if (!C) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(y, "' from service '").concat(r.id, "'."));
        Ge || et(false, "Service '".concat(r.id, "' has no parent: unable to send event ").concat(f.type));
        return;
      }
      if ("machine" in C) {
        if (r.status !== ft.Stopped || r.parent !== C || r.state.done) {
          var T = V(V({}, f), { name: f.name === ml ? "".concat(Gn(r.id)) : f.name, origin: r.sessionId });
          !E && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([C, T]) : C.send(T);
        }
      } else
        !E && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([C, f.data]) : C.send(f.data);
    }, this._exec = function(f, y, E, S) {
      S === void 0 && (S = r.machine.options.actions);
      var C = f.exec || ja(f.type, S), T = _e(C) ? C : C ? C.exec : f.exec;
      if (T)
        try {
          return T(y, E.data, r.machine.config.predictableActionArguments ? { action: f, _event: E } : { action: f, state: r.state, _event: E });
        } catch (ie) {
          throw r.parent && r.parent.send({ type: "xstate.error", data: ie }), ie;
        }
      switch (f.type) {
        case Vr:
          var z = f;
          if (typeof z.delay == "number") {
            r.defer(z);
            return;
          } else
            z.to ? r.sendTo(z._event, z.to, E === Xr) : r.send(z._event);
          break;
        case Aa:
          r.cancel(f.sendId);
          break;
        case Ji: {
          if (r.status !== ft.Running)
            return;
          var k = f.activity;
          if (!r.machine.config.predictableActionArguments && !r.state.activities[k.id || k.type])
            break;
          if (k.type === Re.Invoke) {
            var j = La(k.src), $ = r.machine.options.services ? r.machine.options.services[j.type] : void 0, A = k.id, ee = k.data;
            Ge || et(!("forward" in k), "`forward` property is deprecated (found in invocation of '".concat(k.src, "' in in machine '").concat(r.machine.id, "'). ") + "Please use `autoForward` instead.");
            var R = "autoForward" in k ? k.autoForward : !!k.forward;
            if (!$) {
              Ge || et(false, "No service found for invocation '".concat(k.src, "' in machine '").concat(r.machine.id, "'."));
              return;
            }
            var H = ee ? kn(ee, y, E) : void 0;
            if (typeof $ == "string")
              return;
            var K = _e($) ? $(y, E.data, { data: H, src: j, meta: k.meta }) : $;
            if (!K)
              return;
            var te = void 0;
            zr(K) && (K = H ? K.withContext(H) : K, te = { autoForward: R }), r.spawn(K, A, te);
          } else
            r.spawnActivity(k);
          break;
        }
        case si: {
          r.stopChild(f.activity.id);
          break;
        }
        case Pa:
          var le = f.label, Y = f.value;
          le ? r.logger(le, Y) : r.logger(Y);
          break;
        default:
          Ge || et(false, "No implementation found for action type '".concat(f.type, "'"));
          break;
      }
    };
    var a = V(V({}, t.defaultOptions), e), u = a.clock, h = a.logger, b = a.parent, v = a.id, d = v !== void 0 ? v : n.id;
    this.id = d, this.logger = h, this.clock = u, this.parent = b, this.options = a, this.scheduler = new Il({ deferEvents: this.options.deferEvents }), this.sessionId = gi.bookId();
  }
  __name(t, "t");
  return c(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var n = this;
    return this._initialState ? this._initialState : vn(this, function() {
      return n._initialState = n.machine.initialState, n._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return Ge || et(this.status !== ft.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(n, e) {
    var r, a;
    try {
      for (var u = ve(n.actions), h = u.next(); !h.done; h = u.next()) {
        var b = h.value;
        this.exec(b, n, e);
      }
    } catch (v) {
      r = { error: v };
    } finally {
      try {
        h && !h.done && (a = u.return) && a.call(u);
      } finally {
        if (r)
          throw r.error;
      }
    }
  }, t.prototype.update = function(n, e) {
    var r, a, u, h, b, v, d, f, y = this;
    if (n._sessionid = this.sessionId, this._state = n, (!this.machine.config.predictableActionArguments || e === Xr) && this.options.execute)
      this.execute(this.state);
    else
      for (var E = void 0; E = this._outgoingQueue.shift(); )
        E[0].send(E[1]);
    if (this.children.forEach(function(te) {
      y.state.children[te.id] = te;
    }), this.devTools && this.devTools.send(e.data, n), n.event)
      try {
        for (var S = ve(this.eventListeners), C = S.next(); !C.done; C = S.next()) {
          var T = C.value;
          T(n.event);
        }
      } catch (te) {
        r = { error: te };
      } finally {
        try {
          C && !C.done && (a = S.return) && a.call(S);
        } finally {
          if (r)
            throw r.error;
        }
      }
    try {
      for (var z = ve(this.listeners), k = z.next(); !k.done; k = z.next()) {
        var T = k.value;
        T(n, n.event);
      }
    } catch (te) {
      u = { error: te };
    } finally {
      try {
        k && !k.done && (h = z.return) && h.call(z);
      } finally {
        if (u)
          throw u.error;
      }
    }
    try {
      for (var j = ve(this.contextListeners), $ = j.next(); !$.done; $ = j.next()) {
        var A = $.value;
        A(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (te) {
      b = { error: te };
    } finally {
      try {
        $ && !$.done && (v = j.return) && v.call(j);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (this.state.done) {
      var ee = n.configuration.find(function(te) {
        return te.type === "final" && te.parent === y.machine;
      }), R = ee && ee.doneData ? kn(ee.doneData, n.context, e) : void 0;
      try {
        for (var H = ve(this.doneListeners), K = H.next(); !K.done; K = H.next()) {
          var T = K.value;
          T(fi(this.id, R));
        }
      } catch (te) {
        d = { error: te };
      } finally {
        try {
          K && !K.done && (f = H.return) && f.call(H);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this._stop(), this._stopChildren(), gi.free(this.sessionId);
    }
  }, t.prototype.onTransition = function(n) {
    return this.listeners.add(n), this.status === ft.Running && n(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(n, e, r) {
    var a = this, u = ci(n, e, r);
    this.listeners.add(u.next), this.status !== ft.NotStarted && u.next(this.state);
    var h = c(function() {
      a.doneListeners.delete(h), a.stopListeners.delete(h), u.complete();
    }, "completeOnce");
    return this.status === ft.Stopped ? u.complete() : (this.onDone(h), this.onStop(h)), { unsubscribe: function() {
      a.listeners.delete(u.next), a.doneListeners.delete(h), a.stopListeners.delete(h);
    } };
  }, t.prototype.onEvent = function(n) {
    return this.eventListeners.add(n), this;
  }, t.prototype.onSend = function(n) {
    return this.sendListeners.add(n), this;
  }, t.prototype.onChange = function(n) {
    return this.contextListeners.add(n), this;
  }, t.prototype.onStop = function(n) {
    return this.stopListeners.add(n), this;
  }, t.prototype.onDone = function(n) {
    return this.doneListeners.add(n), this;
  }, t.prototype.off = function(n) {
    return this.listeners.delete(n), this.eventListeners.delete(n), this.sendListeners.delete(n), this.stopListeners.delete(n), this.doneListeners.delete(n), this.contextListeners.delete(n), this;
  }, t.prototype.start = function(n) {
    var e = this;
    if (this.status === ft.Running)
      return this;
    this.machine._init(), gi.register(this.sessionId, this), this.initialized = true, this.status = ft.Running;
    var r = n === void 0 ? this.initialState : vn(this, function() {
      return Jc(n) ? e.machine.resolveState(n) : e.machine.resolveState(dr.from(n, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(r, Xr);
    }), this;
  }, t.prototype._stopChildren = function() {
    this.children.forEach(function(n) {
      _e(n.stop) && n.stop();
    }), this.children.clear();
  }, t.prototype._stop = function() {
    var n, e, r, a, u, h, b, v, d, f;
    try {
      for (var y = ve(this.listeners), E = y.next(); !E.done; E = y.next()) {
        var S = E.value;
        this.listeners.delete(S);
      }
    } catch (H) {
      n = { error: H };
    } finally {
      try {
        E && !E.done && (e = y.return) && e.call(y);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var C = ve(this.stopListeners), T = C.next(); !T.done; T = C.next()) {
        var S = T.value;
        S(), this.stopListeners.delete(S);
      }
    } catch (H) {
      r = { error: H };
    } finally {
      try {
        T && !T.done && (a = C.return) && a.call(C);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var z = ve(this.contextListeners), k = z.next(); !k.done; k = z.next()) {
        var S = k.value;
        this.contextListeners.delete(S);
      }
    } catch (H) {
      u = { error: H };
    } finally {
      try {
        k && !k.done && (h = z.return) && h.call(z);
      } finally {
        if (u)
          throw u.error;
      }
    }
    try {
      for (var j = ve(this.doneListeners), $ = j.next(); !$.done; $ = j.next()) {
        var S = $.value;
        this.doneListeners.delete(S);
      }
    } catch (H) {
      b = { error: H };
    } finally {
      try {
        $ && !$.done && (v = j.return) && v.call(j);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    this.initialized = false, this.status = ft.Stopped, this._initialState = void 0;
    try {
      for (var A = ve(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
        var R = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[R]);
      }
    } catch (H) {
      d = { error: H };
    } finally {
      try {
        ee && !ee.done && (f = A.return) && f.call(A);
      } finally {
        if (d)
          throw d.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new Il({ deferEvents: this.options.deferEvents });
  }, t.prototype.stop = function() {
    var n = this, e = this.scheduler;
    return this._stop(), e.schedule(function() {
      var r = ot({ type: "xstate.stop" }), a = vn(n, function() {
        var u = Be(ze([], ye(n.state.configuration), false).sort(function(f, y) {
          return y.order - f.order;
        }).map(function(f) {
          return Rr(f.onExit, n.machine.options.actions);
        })), h = ye(pi(n.machine, n.state, n.state.context, r, [{ type: "exit", actions: u }], n.machine.config.predictableActionArguments ? n._exec : void 0, n.machine.config.predictableActionArguments || n.machine.config.preserveActionOrder), 2), b = h[0], v = h[1], d = new dr({ value: n.state.value, context: v, _event: r, _sessionid: n.sessionId, historyValue: void 0, history: n.state, actions: b.filter(function(f) {
          return f.type !== Wr && (f.type !== Vr || !!f.to && f.to !== xr.Internal);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: n.state.done, tags: n.state.tags, machine: n.machine });
        return d.changed = true, d;
      });
      n.update(a, r), n._stopChildren(), gi.free(n.sessionId);
    }), this;
  }, t.prototype.batch = function(n) {
    var e = this;
    if (this.status === ft.NotStarted && this.options.deferEvents)
      Ge || et(false, "".concat(n.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== ft.Running)
      throw new Error("".concat(n.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (n.length) {
      var r = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var a, u, h = e.state, b = false, v = [], d = c(function(S) {
          var C = ot(S);
          e.forward(C), h = vn(e, function() {
            return e.machine.transition(h, C, void 0, r || void 0);
          }), v.push.apply(v, ze([], ye(e.machine.config.predictableActionArguments ? h.actions : h.actions.map(function(T) {
            return Kc(T, h);
          })), false)), b = b || !!h.changed;
        }, "_loop_1");
        try {
          for (var f = ve(n), y = f.next(); !y.done; y = f.next()) {
            var E = y.value;
            d(E);
          }
        } catch (S) {
          a = { error: S };
        } finally {
          try {
            y && !y.done && (u = f.return) && u.call(f);
          } finally {
            if (a)
              throw a.error;
          }
        }
        h.changed = b, h.actions = v, e.update(h, ot(n[n.length - 1]));
      });
    }
  }, t.prototype.sender = function(n) {
    return this.send.bind(this, n);
  }, t.prototype._nextState = function(n, e) {
    var r = this;
    e === void 0 && (e = !!this.machine.config.predictableActionArguments && this._exec);
    var a = ot(n);
    if (a.name.indexOf(vl) === 0 && !this.state.nextEvents.some(function(h) {
      return h.indexOf(vl) === 0;
    }))
      throw a.data.data;
    var u = vn(this, function() {
      return r.machine.transition(r.state, a, void 0, e || void 0);
    });
    return u;
  }, t.prototype.nextState = function(n) {
    return this._nextState(n, false);
  }, t.prototype.forward = function(n) {
    var e, r;
    try {
      for (var a = ve(this.forwardTo), u = a.next(); !u.done; u = a.next()) {
        var h = u.value, b = this.children.get(h);
        if (!b)
          throw new Error("Unable to forward event '".concat(n, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(h, "'."));
        b.send(n);
      }
    } catch (v) {
      e = { error: v };
    } finally {
      try {
        u && !u.done && (r = a.return) && r.call(a);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.defer = function(n) {
    var e = this;
    this.delayedEventsMap[n.id] = this.clock.setTimeout(function() {
      n.to ? e.sendTo(n._event, n.to, true) : e.send(n._event);
    }, n.delay);
  }, t.prototype.cancel = function(n) {
    this.clock.clearTimeout(this.delayedEventsMap[n]), delete this.delayedEventsMap[n];
  }, t.prototype.exec = function(n, e, r) {
    r === void 0 && (r = this.machine.options.actions), this._exec(n, e.context, e._event, r);
  }, t.prototype.removeChild = function(n) {
    var e;
    this.children.delete(n), this.forwardTo.delete(n), (e = this.state) === null || e === void 0 || delete e.children[n];
  }, t.prototype.stopChild = function(n) {
    var e = this.children.get(n);
    e && (this.removeChild(n), _e(e.stop) && e.stop());
  }, t.prototype.spawn = function(n, e, r) {
    if (this.status !== ft.Running)
      return El(n, e);
    if (yl(n))
      return this.spawnPromise(Promise.resolve(n), e);
    if (_e(n))
      return this.spawnCallback(n, e);
    if (Wc(n))
      return this.spawnActor(n, e);
    if (Dc(n))
      return this.spawnObservable(n, e);
    if (zr(n))
      return this.spawnMachine(n, V(V({}, r), { id: e }));
    if (Pc(n))
      return this.spawnBehavior(n, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof n, '".'));
  }, t.prototype.spawnMachine = function(n, e) {
    var r = this;
    e === void 0 && (e = {});
    var a = new t(n, V(V({}, this.options), { parent: this, id: e.id || n.id })), u = V(V({}, Xh), e);
    u.sync && a.onTransition(function(b) {
      r.send(eo, { state: b, id: a.id });
    });
    var h = a;
    return this.children.set(a.id, h), u.autoForward && this.forwardTo.add(a.id), a.onDone(function(b) {
      r.removeChild(a.id), r.send(ot(b, { origin: a.id }));
    }).start(), h;
  }, t.prototype.spawnBehavior = function(n, e) {
    var r = tp(n, { id: e, parent: this });
    return this.children.set(e, r), r;
  }, t.prototype.spawnPromise = function(n, e) {
    var r, a = this, u = false, h;
    n.then(function(v) {
      u || (h = v, a.removeChild(e), a.send(ot(fi(e, v), { origin: e })));
    }, function(v) {
      if (!u) {
        a.removeChild(e);
        var d = Gn(e, v);
        try {
          a.send(ot(d, { origin: e }));
        } catch (f) {
          Gc(v, f, e), a.devTools && a.devTools.send(d, a.state), a.machine.strict && a.stop();
        }
      }
    });
    var b = (r = { id: e, send: function() {
    }, subscribe: function(v, d, f) {
      var y = ci(v, d, f), E = false;
      return n.then(function(S) {
        E || (y.next(S), !E && y.complete());
      }, function(S) {
        E || y.error(S);
      }), { unsubscribe: function() {
        return E = true;
      } };
    }, stop: function() {
      u = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return h;
    } }, r[Pr] = function() {
      return this;
    }, r);
    return this.children.set(e, b), b;
  }, t.prototype.spawnCallback = function(n, e) {
    var r, a = this, u = false, h = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), v, d = c(function(E) {
      v = E, b.forEach(function(S) {
        return S(E);
      }), !u && a.send(ot(E, { origin: e }));
    }, "receive"), f;
    try {
      f = n(d, function(E) {
        h.add(E);
      });
    } catch (E) {
      this.send(Gn(e, E));
    }
    if (yl(f))
      return this.spawnPromise(f, e);
    var y = (r = { id: e, send: function(E) {
      return h.forEach(function(S) {
        return S(E);
      });
    }, subscribe: function(E) {
      var S = ci(E);
      return b.add(S.next), { unsubscribe: function() {
        b.delete(S.next);
      } };
    }, stop: function() {
      u = true, _e(f) && f();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return v;
    } }, r[Pr] = function() {
      return this;
    }, r);
    return this.children.set(e, y), y;
  }, t.prototype.spawnObservable = function(n, e) {
    var r, a = this, u, h = n.subscribe(function(v) {
      u = v, a.send(ot(v, { origin: e }));
    }, function(v) {
      a.removeChild(e), a.send(ot(Gn(e, v), { origin: e }));
    }, function() {
      a.removeChild(e), a.send(ot(fi(e), { origin: e }));
    }), b = (r = { id: e, send: function() {
    }, subscribe: function(v, d, f) {
      return n.subscribe(v, d, f);
    }, stop: function() {
      return h.unsubscribe();
    }, getSnapshot: function() {
      return u;
    }, toJSON: function() {
      return { id: e };
    } }, r[Pr] = function() {
      return this;
    }, r);
    return this.children.set(e, b), b;
  }, t.prototype.spawnActor = function(n, e) {
    return this.children.set(e, n), n;
  }, t.prototype.spawnActivity = function(n) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[n.type] : void 0;
    if (!e) {
      Ge || et(false, "No implementation found for activity '".concat(n.type, "'"));
      return;
    }
    var r = e(this.state.context, n);
    this.spawnEffect(n.id, r);
  }, t.prototype.spawnEffect = function(n, e) {
    var r;
    this.children.set(n, (r = { id: n, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: e || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: n };
    } }, r[Pr] = function() {
      return this;
    }, r));
  }, t.prototype.attachDev = function() {
    var n = Ba();
    if (this.options.devTools && n) {
      if (n.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = n.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(r) {
          return { value: r.value, context: r.context, actions: r.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      ep(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[Pr] = function() {
    return this;
  }, t.prototype.getSnapshot = function() {
    return this.status === ft.NotStarted ? this.initialState : this._state;
  }, t.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(n, e) {
    return setTimeout(n, e);
  }, clearTimeout: function(n) {
    return clearTimeout(n);
  } }, logger: console.log.bind(console), devTools: false }, t.interpret = at, t;
}();
function at(t, n) {
  var e = new rp(t, n);
  return e;
}
__name(at, "at");
c(at, "interpret");
function Zh(t) {
  if (typeof t == "string") {
    var n = { type: t };
    return n.toString = function() {
      return t;
    }, n;
  }
  return t;
}
__name(Zh, "Zh");
c(Zh, "toInvokeSource");
function uo(t) {
  return V(V({ type: Ki }, t), { toJSON: function() {
    t.onDone, t.onError;
    var n = ai(t, ["onDone", "onError"]);
    return V(V({}, n), { type: Ki, src: Zh(t.src) });
  } });
}
__name(uo, "uo");
c(uo, "toInvokeDefinition");
var wi = "";
var Pl = "#";
var co = "*";
var bi = {};
var yi = c(function(t) {
  return t[0] === Pl;
}, "isStateId");
var Qh = c(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Jh = c(function(t, n, e) {
  var r = e.slice(0, -1).some(function(u) {
    return !("cond" in u) && !("in" in u) && (Ce(u.target) || zr(u.target));
  }), a = n === wi ? "the transient event" : "event '".concat(n, "'");
  et(!r, "One or more transitions for ".concat(a, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var np = function() {
  function t(n, e, r, a) {
    r === void 0 && (r = "context" in n ? n.context : void 0);
    var u = this, h;
    this.config = n, this._context = r, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Qh(), e), this.parent = a == null ? void 0 : a.parent, this.key = this.config.key || (a == null ? void 0 : a.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : za), this.id = this.config.id || ze([this.machine.key], ye(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (h = this.config.schema) !== null && h !== void 0 ? h : {}, this.description = this.config.description, Ge || et(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ui(this.config.states, function(d, f) {
      var y, E = new t(d, {}, void 0, { parent: u, key: f });
      return Object.assign(u.idMap, V((y = {}, y[E.id] = E, y), E.idMap)), E;
    }) : bi;
    var b = 0;
    function v(d) {
      var f, y;
      d.order = b++;
      try {
        for (var E = ve(Cl(d)), S = E.next(); !S.done; S = E.next()) {
          var C = S.value;
          v(C);
        }
      } catch (T) {
        f = { error: T };
      } finally {
        try {
          S && !S.done && (y = E.return) && y.call(E);
        } finally {
          if (f)
            throw f.error;
        }
      }
    }
    __name(v, "v");
    c(v, "dfs"), v(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var f = d.event;
      return f === wi;
    }) : wi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = or(this.config.entry || this.config.onEntry).map(function(d) {
      return di(d);
    }), this.onExit = or(this.config.exit || this.config.onExit).map(function(d) {
      return di(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = or(this.config.invoke).map(function(d, f) {
      var y, E;
      if (zr(d)) {
        var S = oo(u.id, f);
        return u.machine.options.services = V((y = {}, y[S] = d, y), u.machine.options.services), uo({ src: S, id: S });
      } else if (Ce(d.src)) {
        var S = d.id || oo(u.id, f);
        return uo(V(V({}, d), { id: S, src: d.src }));
      } else if (zr(d.src) || _e(d.src)) {
        var S = d.id || oo(u.id, f);
        return u.machine.options.services = V((E = {}, E[S] = d.src, E), u.machine.options.services), uo(V(V({ id: S }, d), { src: S }));
      } else {
        var C = d.src;
        return uo(V(V({ id: oo(u.id, f) }, d), { src: C }));
      }
    }), this.activities = or(this.config.activities).concat(this.invoke).map(function(d) {
      return Ha(d);
    }), this.transition = this.transition.bind(this), this.tags = or(this.config.tags);
  }
  __name(t, "t");
  return c(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Tl(this).forEach(function(n) {
      return n.on;
    });
  }, t.prototype.withConfig = function(n, e) {
    var r = this.options, a = r.actions, u = r.activities, h = r.guards, b = r.services, v = r.delays;
    return new t(this.config, { actions: V(V({}, a), n.actions), activities: V(V({}, u), n.activities), guards: V(V({}, h), n.guards), services: V(V({}, b), n.services), delays: V(V({}, v), n.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(n) {
    return new t(this.config, this.options, n);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return _e(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ui(this.states, function(n) {
      return n.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), t.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(t.prototype, "on", { get: function() {
    if (this.__cache.on)
      return this.__cache.on;
    var n = this.transitions;
    return this.__cache.on = n.reduce(function(e, r) {
      return e[r.eventType] = e[r.eventType] || [], e[r.eventType].push(r), e;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), t.prototype.getCandidates = function(n) {
    if (this.__cache.candidates[n])
      return this.__cache.candidates[n];
    var e = n === wi, r = this.transitions.filter(function(a) {
      var u = a.eventType === n;
      return e ? u : u || a.eventType === co;
    });
    return this.__cache.candidates[n] = r, r;
  }, t.prototype.getDelayedTransitions = function() {
    var n = this, e = this.config.after;
    if (!e)
      return [];
    var r = c(function(u, h) {
      var b = _e(u) ? "".concat(n.id, ":delay[").concat(h, "]") : u, v = $c(b, n.id);
      return n.onEntry.push(xl(v, { delay: u })), n.onExit.push(jc(v)), v;
    }, "mutateEntryExit"), a = Yr(e) ? e.map(function(u, h) {
      var b = r(u.delay, h);
      return V(V({}, u), { event: b });
    }) : Be(Object.keys(e).map(function(u, h) {
      var b = e[u], v = Ce(b) ? { target: b } : b, d = isNaN(+u) ? u : +u, f = r(d, h);
      return or(v).map(function(y) {
        return V(V({}, y), { event: f, delay: d });
      });
    }));
    return a.map(function(u) {
      var h = u.delay;
      return V(V({}, n.formatTransition(u)), { delay: h });
    });
  }, t.prototype.getStateNodes = function(n) {
    var e, r = this;
    if (!n)
      return [];
    var a = n instanceof dr ? n.value : li(n, this.delimiter);
    if (Ce(a)) {
      var u = this.getStateNode(a).initial;
      return u !== void 0 ? this.getStateNodes((e = {}, e[a] = u, e)) : [this, this.states[a]];
    }
    var h = Object.keys(a), b = [this];
    return b.push.apply(b, ze([], ye(Be(h.map(function(v) {
      return r.getStateNode(v).getStateNodes(a[v]);
    }))), false)), b;
  }, t.prototype.handles = function(n) {
    var e = Da(n);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(n) {
    var e = n instanceof dr ? n : dr.create(n), r = Array.from(vi([], this.getStateNodes(e.value)));
    return new dr(V(V({}, e), { value: this.resolve(e.value), configuration: r, done: lo(r, this), tags: Ol(r), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(n, e, r) {
    var a = this.getStateNode(n), u = a.next(e, r);
    return !u || !u.transitions.length ? this.next(e, r) : u;
  }, t.prototype.transitionCompoundNode = function(n, e, r) {
    var a = Object.keys(n), u = this.getStateNode(a[0]), h = u._transition(n[a[0]], e, r);
    return !h || !h.transitions.length ? this.next(e, r) : h;
  }, t.prototype.transitionParallelNode = function(n, e, r) {
    var a, u, h = {};
    try {
      for (var b = ve(Object.keys(n)), v = b.next(); !v.done; v = b.next()) {
        var d = v.value, f = n[d];
        if (f) {
          var y = this.getStateNode(d), E = y._transition(f, e, r);
          E && (h[d] = E);
        }
      }
    } catch (k) {
      a = { error: k };
    } finally {
      try {
        v && !v.done && (u = b.return) && u.call(b);
      } finally {
        if (a)
          throw a.error;
      }
    }
    var S = Object.keys(h).map(function(k) {
      return h[k];
    }), C = Be(S.map(function(k) {
      return k.transitions;
    })), T = S.some(function(k) {
      return k.transitions.length > 0;
    });
    if (!T)
      return this.next(e, r);
    var z = Be(Object.keys(h).map(function(k) {
      return h[k].configuration;
    }));
    return { transitions: C, exitSet: Be(S.map(function(k) {
      return k.exitSet;
    })), configuration: z, source: e, actions: Be(Object.keys(h).map(function(k) {
      return h[k].actions;
    })) };
  }, t.prototype._transition = function(n, e, r) {
    return Ce(n) ? this.transitionLeafNode(n, e, r) : Object.keys(n).length === 1 ? this.transitionCompoundNode(n, e, r) : this.transitionParallelNode(n, e, r);
  }, t.prototype.getTransitionData = function(n, e) {
    return this._transition(n.value, n, ot(e));
  }, t.prototype.next = function(n, e) {
    var r, a, u = this, h = e.name, b = [], v = [], d;
    try {
      for (var f = ve(this.getCandidates(h)), y = f.next(); !y.done; y = f.next()) {
        var E = y.value, S = E.cond, C = E.in, T = n.context, z = C ? Ce(C) && yi(C) ? n.matches(li(this.getStateNodeById(C).path, this.delimiter)) : ro(li(C, this.delimiter), Oc(this.path.slice(0, -2))(n.value)) : true, k = false;
        try {
          k = !S || Ga(this.machine, S, T, e, n);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(h, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (k && z) {
          E.target !== void 0 && (v = E.target), b.push.apply(b, ze([], ye(E.actions), false)), d = E;
          break;
        }
      }
    } catch (A) {
      r = { error: A };
    } finally {
      try {
        y && !y.done && (a = f.return) && a.call(f);
      } finally {
        if (r)
          throw r.error;
      }
    }
    if (d) {
      if (!v.length)
        return { transitions: [d], exitSet: [], configuration: n.value ? [this] : [], source: n, actions: b };
      var j = Be(v.map(function(A) {
        return u.getRelativeStateNodes(A, n.historyValue);
      })), $ = !!d.internal;
      return { transitions: [d], exitSet: $ ? [] : Be(v.map(function(A) {
        return u.getPotentiallyReenteringNodes(A);
      })), configuration: j, source: n, actions: b };
    }
  }, t.prototype.getPotentiallyReenteringNodes = function(n) {
    if (this.order < n.order)
      return [this];
    for (var e = [], r = this, a = n; r && r !== a; )
      e.push(r), r = r.parent;
    return r !== a ? [] : (e.push(a), e);
  }, t.prototype.getActions = function(n, e, r, a, u, h, b) {
    var v, d, f, y, E = this, S = h ? vi([], this.getStateNodes(h.value)) : [], C = /* @__PURE__ */ new Set();
    try {
      for (var T = ve(Array.from(n).sort(function(Y, ie) {
        return Y.order - ie.order;
      })), z = T.next(); !z.done; z = T.next()) {
        var k = z.value;
        (!mi(S, k) || mi(r.exitSet, k) || k.parent && C.has(k.parent)) && C.add(k);
      }
    } catch (Y) {
      v = { error: Y };
    } finally {
      try {
        z && !z.done && (d = T.return) && d.call(T);
      } finally {
        if (v)
          throw v.error;
      }
    }
    try {
      for (var j = ve(S), $ = j.next(); !$.done; $ = j.next()) {
        var k = $.value;
        (!mi(n, k) || mi(r.exitSet, k.parent)) && r.exitSet.push(k);
      }
    } catch (Y) {
      f = { error: Y };
    } finally {
      try {
        $ && !$.done && (y = j.return) && y.call(j);
      } finally {
        if (f)
          throw f.error;
      }
    }
    r.exitSet.sort(function(Y, ie) {
      return ie.order - Y.order;
    });
    var A = Array.from(C).sort(function(Y, ie) {
      return Y.order - ie.order;
    }), ee = new Set(r.exitSet), R = Be(A.map(function(Y) {
      var ie = [];
      if (Y.type !== "final")
        return ie;
      var W = Y.parent;
      if (!W.parent)
        return ie;
      ie.push(ao(Y.id, Y.doneData), ao(W.id, Y.doneData ? kn(Y.doneData, a, u) : void 0));
      var ue = W.parent;
      return ue.type === "parallel" && hi(ue).every(function(Fe) {
        return lo(r.configuration, Fe);
      }) && ie.push(ao(ue.id)), ie;
    })), H = A.map(function(Y) {
      var ie = Y.onEntry, W = Y.activities.map(function(ue) {
        return Hc(ue);
      });
      return { type: "entry", actions: Rr(b ? ze(ze([], ye(ie), false), ye(W), false) : ze(ze([], ye(W), false), ye(ie), false), E.machine.options.actions) };
    }).concat({ type: "state_done", actions: R.map(Lc) }), K = Array.from(ee).map(function(Y) {
      return { type: "exit", actions: Rr(ze(ze([], ye(Y.onExit), false), ye(Y.activities.map(function(ie) {
        return Bc(ie);
      })), false), E.machine.options.actions) };
    }), te = K.concat({ type: "transition", actions: Rr(r.actions, this.machine.options.actions) }).concat(H);
    if (e) {
      var le = Rr(Be(ze([], ye(n), false).sort(function(Y, ie) {
        return ie.order - Y.order;
      }).map(function(Y) {
        return Y.onExit;
      })), this.machine.options.actions).filter(function(Y) {
        return Y.type !== Wr && (Y.type !== Vr || !!Y.to && Y.to !== xr.Internal);
      });
      return te.concat({ type: "stop", actions: le });
    }
    return te;
  }, t.prototype.transition = function(n, e, r, a) {
    n === void 0 && (n = this.initialState);
    var u = ot(e), h;
    if (n instanceof dr)
      h = r === void 0 ? n : this.resolveState(dr.from(n, r));
    else {
      var b = Ce(n) ? this.resolve(to(this.getResolvedPath(n))) : this.resolve(n), v = r != null ? r : this.machine.context;
      h = this.resolveState(dr.from(b, v));
    }
    if (!Ge && u.name === co)
      throw new Error("An event cannot have the wildcard type ('".concat(co, "')"));
    if (this.strict && !this.events.includes(u.name) && !Ac(u.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(u.name, "'"));
    var d = this._transition(h.value, h, u) || { transitions: [], configuration: [], exitSet: [], source: h, actions: [] }, f = vi([], this.getStateNodes(h.value)), y = d.configuration.length ? vi(f, d.configuration) : f;
    return d.configuration = ze([], ye(y), false), this.resolveTransition(d, h, h.context, a, u);
  }, t.prototype.resolveRaisedTransition = function(n, e, r, a) {
    var u, h = n.actions;
    return n = this.transition(n, e, void 0, a), n._event = r, n.event = r.data, (u = n.actions).unshift.apply(u, ze([], ye(h), false)), n;
  }, t.prototype.resolveTransition = function(n, e, r, a, u) {
    var h, b, v, d, f = this;
    u === void 0 && (u = Xr);
    var y = n.configuration, E = !e || n.transitions.length > 0, S = E ? n.configuration : e ? e.configuration : [], C = lo(S, this), T = E ? Xc(this.machine, y) : void 0, z = e ? e.historyValue ? e.historyValue : n.source ? this.machine.historyValue(e.value) : void 0 : void 0, k = this.getActions(new Set(S), C, n, r, u, e, a), j = e ? V({}, e.activities) : {};
    try {
      for (var $ = ve(k), A = $.next(); !A.done; A = $.next()) {
        var ee = A.value;
        try {
          for (var R = (v = void 0, ve(ee.actions)), H = R.next(); !H.done; H = R.next()) {
            var K = H.value;
            K.type === Ji ? j[K.activity.id || K.activity.type] = K : K.type === si && (j[K.activity.id || K.activity.type] = false);
          }
        } catch (Ie) {
          v = { error: Ie };
        } finally {
          try {
            H && !H.done && (d = R.return) && d.call(R);
          } finally {
            if (v)
              throw v.error;
          }
        }
      }
    } catch (Ie) {
      h = { error: Ie };
    } finally {
      try {
        A && !A.done && (b = $.return) && b.call($);
      } finally {
        if (h)
          throw h.error;
      }
    }
    var te = ye(pi(this, e, r, u, k, a, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), le = te[0], Y = te[1], ie = ye(zc(le, function(Ie) {
      return Ie.type === Wr || Ie.type === Vr && Ie.to === xr.Internal;
    }), 2), W = ie[0], ue = ie[1], Fe = le.filter(function(Ie) {
      var Je;
      return Ie.type === Ji && ((Je = Ie.activity) === null || Je === void 0 ? void 0 : Je.type) === Ki;
    }), $e = Fe.reduce(function(Ie, Je) {
      return Ie[Je.activity.id] = Uc(Je.activity, f.machine, Y, u), Ie;
    }, e ? V({}, e.children) : {}), De = new dr({ value: T || e.value, context: Y, _event: u, _sessionid: e ? e._sessionid : null, historyValue: T ? z ? _c(z, T) : void 0 : e ? e.historyValue : void 0, history: !T || n.source ? e : void 0, actions: T ? ue : [], activities: T ? j : e ? e.activities : {}, events: [], configuration: S, transitions: n.transitions, children: $e, done: C, tags: Ol(S), machine: this }), Le = r !== Y;
    De.changed = u.name === eo || Le;
    var it = De.history;
    it && delete it.history;
    var Xe = !C && (this._transient || y.some(function(Ie) {
      return Ie._transient;
    }));
    if (!E && (!Xe || u.name === wi))
      return De;
    var We = De;
    if (!C)
      for (Xe && (We = this.resolveRaisedTransition(We, { type: xc }, u, a)); W.length; ) {
        var J = W.shift();
        We = this.resolveRaisedTransition(We, J._event, u, a);
      }
    var tr = We.changed || (it ? !!We.actions.length || Le || typeof it.value != typeof We.value || !Ml(We.value, it.value) : void 0);
    return We.changed = tr, We.history = it, We;
  }, t.prototype.getStateNode = function(n) {
    if (yi(n))
      return this.machine.getStateNodeById(n);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(n, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[n];
    if (!e)
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(n) {
    var e = yi(n) ? n.slice(Pl.length) : n;
    if (e === this.id)
      return this;
    var r = this.machine.idMap[e];
    if (!r)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return r;
  }, t.prototype.getStateNodeByPath = function(n) {
    if (typeof n == "string" && yi(n))
      try {
        return this.getStateNodeById(n.slice(1));
      } catch (u) {
      }
    for (var e = ka(n, this.delimiter).slice(), r = this; e.length; ) {
      var a = e.shift();
      if (!a.length)
        break;
      r = r.getStateNode(a);
    }
    return r;
  }, t.prototype.resolve = function(n) {
    var e, r = this;
    if (!n)
      return this.initialStateValue || bi;
    switch (this.type) {
      case "parallel":
        return ui(this.initialStateValue, function(u, h) {
          return u ? r.getStateNode(h).resolve(n[h] || u) : bi;
        });
      case "compound":
        if (Ce(n)) {
          var a = this.getStateNode(n);
          return a.type === "parallel" || a.type === "compound" ? (e = {}, e[n] = a.initialStateValue, e) : n;
        }
        return Object.keys(n).length ? ui(n, function(u, h) {
          return u ? r.getStateNode(h).resolve(u) : bi;
        }) : this.initialStateValue || {};
      default:
        return n || bi;
    }
  }, t.prototype.getResolvedPath = function(n) {
    if (yi(n)) {
      var e = this.machine.idMap[n.slice(Pl.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(n, "'"));
      return e.path;
    }
    return ka(n, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var n;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = bl(this.states, function(r) {
        return r.initialStateValue || bi;
      }, function(r) {
        return r.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = so(this.states[this.initial]) ? this.initial : (n = {}, n[this.initial] = this.states[this.initial].initialStateValue, n);
    } else
      e = {};
    return this.__cache.initialStateValue = e, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), t.prototype.getInitialState = function(n, e) {
    this._init();
    var r = this.getStateNodes(n);
    return this.resolveTransition({ configuration: r, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, e != null ? e : this.machine.context, void 0);
  }, Object.defineProperty(t.prototype, "initialState", { get: function() {
    var n = this.initialStateValue;
    if (!n)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(n);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "target", { get: function() {
    var n;
    if (this.type === "history") {
      var e = this.config;
      Ce(e.target) ? n = yi(e.target) ? to(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : n = e.target;
    }
    return n;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(n, e, r) {
    return r === void 0 && (r = true), r ? n.type === "history" ? n.resolveHistory(e) : n.initialStateNodes : [n];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var n = this;
    if (so(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Ge || et(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = no(this.initialStateValue);
    return Be(e.map(function(r) {
      return n.getFromRelativePath(r);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(n) {
    if (!n.length)
      return [this];
    var e = ye(n), r = e[0], a = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
    var u = this.getStateNode(r);
    if (u.type === "history")
      return u.resolveHistory();
    if (!this.states[r])
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return this.states[r].getFromRelativePath(a);
  }, t.prototype.historyValue = function(n) {
    if (Object.keys(this.states).length)
      return { current: n || this.initialStateValue, states: bl(this.states, function(e, r) {
        if (!n)
          return e.historyValue();
        var a = Ce(n) ? void 0 : n[r];
        return e.historyValue(a || e.initialStateValue);
      }, function(e) {
        return !e.history;
      }) };
  }, t.prototype.resolveHistory = function(n) {
    var e = this;
    if (this.type !== "history")
      return [this];
    var r = this.parent;
    if (!n) {
      var a = this.target;
      return a ? Be(no(a).map(function(h) {
        return r.getFromRelativePath(h);
      })) : r.initialStateNodes;
    }
    var u = Mc(r.path, "states")(n).current;
    return Ce(u) ? [r.getStateNode(u)] : Be(no(u).map(function(h) {
      return e.history === "deep" ? r.getFromRelativePath(h) : [r.states[h[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var n = this, e = Be(Object.keys(this.states).map(function(r) {
      return n.states[r].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "events", { get: function() {
    var n, e, r, a;
    if (this.__cache.events)
      return this.__cache.events;
    var u = this.states, h = new Set(this.ownEvents);
    if (u)
      try {
        for (var b = ve(Object.keys(u)), v = b.next(); !v.done; v = b.next()) {
          var d = v.value, f = u[d];
          if (f.states)
            try {
              for (var y = (r = void 0, ve(f.events)), E = y.next(); !E.done; E = y.next()) {
                var S = E.value;
                h.add("".concat(S));
              }
            } catch (C) {
              r = { error: C };
            } finally {
              try {
                E && !E.done && (a = y.return) && a.call(y);
              } finally {
                if (r)
                  throw r.error;
              }
            }
        }
      } catch (C) {
        n = { error: C };
      } finally {
        try {
          v && !v.done && (e = b.return) && e.call(b);
        } finally {
          if (n)
            throw n.error;
        }
      }
    return this.__cache.events = Array.from(h);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "ownEvents", { get: function() {
    var n = new Set(this.transitions.filter(function(e) {
      return !(!e.target && !e.actions.length && e.internal);
    }).map(function(e) {
      return e.eventType;
    }));
    return Array.from(n);
  }, enumerable: false, configurable: true }), t.prototype.resolveTarget = function(n) {
    var e = this;
    if (n !== void 0)
      return n.map(function(r) {
        if (!Ce(r))
          return r;
        var a = r[0] === e.delimiter;
        if (a && !e.parent)
          return e.getStateNodeByPath(r.slice(1));
        var u = a ? e.key + r : r;
        if (e.parent)
          try {
            var h = e.parent.getStateNodeByPath(u);
            return h;
          } catch (b) {
            throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(b.message));
          }
        else
          return e.getStateNodeByPath(u);
      });
  }, t.prototype.formatTransition = function(n) {
    var e = this, r = Nc(n.target), a = "internal" in n ? n.internal : r ? r.some(function(v) {
      return Ce(v) && v[0] === e.delimiter;
    }) : true, u = this.machine.options.guards, h = this.resolveTarget(r), b = V(V({}, n), { actions: Rr(or(n.actions)), cond: Na(n.cond, u), target: h, source: this, internal: a, eventType: n.event, toJSON: function() {
      return V(V({}, b), { target: b.target ? b.target.map(function(v) {
        return "#".concat(v.id);
      }) : void 0, source: "#".concat(e.id) });
    } });
    return b;
  }, t.prototype.formatTransitions = function() {
    var n, e, r = this, a;
    if (!this.config.on)
      a = [];
    else if (Array.isArray(this.config.on))
      a = this.config.on;
    else {
      var u = this.config.on, h = co, b = u[h], v = b === void 0 ? [] : b, d = ai(u, [typeof h == "symbol" ? h : h + ""]);
      a = Be(Object.keys(d).map(function(j) {
        !Ge && j === wi && et(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(r.id, '".'));
        var $ = Nn(j, d[j]);
        return Ge || Jh(r, j, $), $;
      }).concat(Nn(co, v)));
    }
    var f = this.config.always ? Nn("", this.config.always) : [], y = this.config.onDone ? Nn(String(ao(this.id)), this.config.onDone) : [];
    Ge || et(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var E = Be(this.invoke.map(function(j) {
      var $ = [];
      return j.onDone && $.push.apply($, ze([], ye(Nn(String(fi(j.id)), j.onDone)), false)), j.onError && $.push.apply($, ze([], ye(Nn(String(Gn(j.id)), j.onError)), false)), $;
    })), S = this.after, C = Be(ze(ze(ze(ze([], ye(y), false), ye(E), false), ye(a), false), ye(f), false).map(function(j) {
      return or(j).map(function($) {
        return r.formatTransition($);
      });
    }));
    try {
      for (var T = ve(S), z = T.next(); !z.done; z = T.next()) {
        var k = z.value;
        C.push(k);
      }
    } catch (j) {
      n = { error: j };
    } finally {
      try {
        z && !z.done && (e = T.return) && e.call(T);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return C;
  }, t;
}();
var ip = false;
function ht(t, n) {
  return !Ge && !("predictableActionArguments" in t) && !ip && (ip = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new np(t, n);
}
__name(ht, "ht");
c(ht, "createMachine");
var fo = _n(po(), 1);
var qa = c((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var $a = c((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Rl = c((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function we(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = ht({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        pe("draggable:init", {}, this);
      }, setInteract: (a, u) => {
        B.need(u.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let h = (0, fo.default)(this);
        h.styleCursor(false), h.pointerEvents({ ignoreFrom: ".resize-handle" }), h.on("down", this.grab.bind(this)), h.on("up", this.release.bind(this)), h.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let b = this.dropzone;
        $a(b) ? this.snappedDropzone = b : this.snappedDropzone = null;
      }, grab: (a, u) => {
        B.need(u.type === "GRAB", "event type must be GRAB"), u.type === "GRAB" && (this.grabbed = true, pe("draggable:grab", {}, this), Rl(this.dropzone) && (this.snapped = false, this.moveByOffset(u.x, u.y), this.classList.remove("qpu-operation-xl")));
      }, release: (a, u) => {
        B.need(u.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, pe("draggable:release", {}, this);
      }, startDragging: (a, u) => {
        B.need(u.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (a, u) => {
        B.need(u.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, pe("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, pe("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && pe("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), pe("draggable:drop", {}, this));
      }, delete: () => {
        (0, fo.default)(this).unset(), pe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => $a(this.dropzone), isOnPaletteDropzone: () => Rl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && $a(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = at(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${Ke(a.value)}`);
      });
    }
    get draggable() {
      return this.draggableService.state !== void 0;
    }
    set draggable(a) {
      a ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    initDraggable() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let a = this.parentElement;
      return B.notNull(a), !Rl(a) && !$a(a) ? null : a;
    }
    set snapTargets(a) {
      (0, fo.default)(this).draggable({ modifiers: [fo.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(a) {
      let u = a.modifiers[0];
      if (u.inRange) {
        let h = u.target.source;
        pe("draggable:in-snap-range", { snapTargetInfo: h }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(a) {
      this.draggableService.send({ type: "GRAB", x: a.offsetX, y: a.offsetY });
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
    dragMove(a) {
      this.move(a.dx, a.dy);
    }
    move(a, u) {
      let h = this.operationX + a, b = this.operationY + u;
      this.moveTo(h, b);
    }
    moveTo(a, u) {
      this.operationX = a, this.operationY = u, this.style.transform = `translate(${a}px, ${u}px)`;
    }
    moveByOffset(a, u) {
      let h = a - this.clientWidth / 2, b = u - this.clientHeight / 2;
      this.move(h, b);
    }
  }
  __name(n, "n");
  return c(n, "DraggableMixinClass"), M([D], n.prototype, "operationX", 2), M([D], n.prototype, "operationY", 2), M([D], n.prototype, "grabbed", 2), M([D], n.prototype, "dragging", 2), M([D], n.prototype, "snapped", 2), M([D], n.prototype, "bit", 2), M([D], n.prototype, "debugDraggable", 2), n;
}
__name(we, "we");
c(we, "DraggableMixin");
var Ln = c((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function ap(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(n, "n");
  return c(n, "FlaggableMixinClass"), M([D], n.prototype, "flag", 2), n;
}
__name(ap, "ap");
c(ap, "FlaggableMixin");
var Qe = "top";
var vt = "bottom";
var st = "right";
var tt = "left";
var Fa = "auto";
var mn = [Qe, vt, st, tt];
var Zr = "start";
var jn = "end";
var sp = "clippingParents";
var Ua = "viewport";
var xi = "popper";
var lp = "reference";
var _l = mn.reduce(function(t, n) {
  return t.concat([n + "-" + Zr, n + "-" + jn]);
}, []);
var Wa = [].concat(mn, [Fa]).reduce(function(t, n) {
  return t.concat([n, n + "-" + Zr, n + "-" + jn]);
}, []);
var Kh = "beforeRead";
var ev = "read";
var tv = "afterRead";
var rv = "beforeMain";
var nv = "main";
var iv = "afterMain";
var ov = "beforeWrite";
var av = "write";
var sv = "afterWrite";
var up = [Kh, ev, tv, rv, nv, iv, ov, av, sv];
function yt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(yt, "yt");
c(yt, "getNodeName");
function rt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var n = t.ownerDocument;
    return n && n.defaultView || window;
  }
  return t;
}
__name(rt, "rt");
c(rt, "getWindow");
function _r(t) {
  var n = rt(t).Element;
  return t instanceof n || t instanceof Element;
}
__name(_r, "_r");
c(_r, "isElement");
function mt(t) {
  var n = rt(t).HTMLElement;
  return t instanceof n || t instanceof HTMLElement;
}
__name(mt, "mt");
c(mt, "isHTMLElement");
function Va(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var n = rt(t).ShadowRoot;
  return t instanceof n || t instanceof ShadowRoot;
}
__name(Va, "Va");
c(Va, "isShadowRoot");
function lv(t) {
  var n = t.state;
  Object.keys(n.elements).forEach(function(e) {
    var r = n.styles[e] || {}, a = n.attributes[e] || {}, u = n.elements[e];
    !mt(u) || !yt(u) || (Object.assign(u.style, r), Object.keys(a).forEach(function(h) {
      var b = a[h];
      b === false ? u.removeAttribute(h) : u.setAttribute(h, b === true ? "" : b);
    }));
  });
}
__name(lv, "lv");
c(lv, "applyStyles");
function uv(t) {
  var n = t.state, e = { popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(n.elements.popper.style, e.popper), n.styles = e, n.elements.arrow && Object.assign(n.elements.arrow.style, e.arrow), function() {
    Object.keys(n.elements).forEach(function(r) {
      var a = n.elements[r], u = n.attributes[r] || {}, h = Object.keys(n.styles.hasOwnProperty(r) ? n.styles[r] : e[r]), b = h.reduce(function(v, d) {
        return v[d] = "", v;
      }, {});
      !mt(a) || !yt(a) || (Object.assign(a.style, b), Object.keys(u).forEach(function(v) {
        a.removeAttribute(v);
      }));
    });
  };
}
__name(uv, "uv");
c(uv, "effect");
var ho = { name: "applyStyles", enabled: true, phase: "write", fn: lv, effect: uv, requires: ["computeStyles"] };
function wt(t) {
  return t.split("-")[0];
}
__name(wt, "wt");
c(wt, "getBasePlacement");
var Er = Math.max;
var Hn = Math.min;
var Qr = Math.round;
function fr(t, n) {
  n === void 0 && (n = false);
  var e = t.getBoundingClientRect(), r = 1, a = 1;
  if (mt(t) && n) {
    var u = t.offsetHeight, h = t.offsetWidth;
    h > 0 && (r = Qr(e.width) / h || 1), u > 0 && (a = Qr(e.height) / u || 1);
  }
  return { width: e.width / r, height: e.height / a, top: e.top / a, right: e.right / r, bottom: e.bottom / a, left: e.left / r, x: e.left / r, y: e.top / a };
}
__name(fr, "fr");
c(fr, "getBoundingClientRect");
function Bn(t) {
  var n = fr(t), e = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(n.width - e) <= 1 && (e = n.width), Math.abs(n.height - r) <= 1 && (r = n.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: r };
}
__name(Bn, "Bn");
c(Bn, "getLayoutRect");
function vo(t, n) {
  var e = n.getRootNode && n.getRootNode();
  if (t.contains(n))
    return true;
  if (e && Va(e)) {
    var r = n;
    do {
      if (r && t.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
__name(vo, "vo");
c(vo, "contains");
function Gt(t) {
  return rt(t).getComputedStyle(t);
}
__name(Gt, "Gt");
c(Gt, "getComputedStyle");
function Dl(t) {
  return ["table", "td", "th"].indexOf(yt(t)) >= 0;
}
__name(Dl, "Dl");
c(Dl, "isTableElement");
function Ct(t) {
  return ((_r(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(Ct, "Ct");
c(Ct, "getDocumentElement");
function Jr(t) {
  return yt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Va(t) ? t.host : null) || Ct(t);
}
__name(Jr, "Jr");
c(Jr, "getParentNode");
function cp(t) {
  return !mt(t) || Gt(t).position === "fixed" ? null : t.offsetParent;
}
__name(cp, "cp");
c(cp, "getTrueOffsetParent");
function cv(t) {
  var n = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && mt(t)) {
    var r = Gt(t);
    if (r.position === "fixed")
      return null;
  }
  for (var a = Jr(t); mt(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var u = Gt(a);
    if (u.transform !== "none" || u.perspective !== "none" || u.contain === "paint" || ["transform", "perspective"].indexOf(u.willChange) !== -1 || n && u.willChange === "filter" || n && u.filter && u.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
__name(cv, "cv");
c(cv, "getContainingBlock");
function Sr(t) {
  for (var n = rt(t), e = cp(t); e && Dl(e) && Gt(e).position === "static"; )
    e = cp(e);
  return e && (yt(e) === "html" || yt(e) === "body" && Gt(e).position === "static") ? n : e || cv(t) || n;
}
__name(Sr, "Sr");
c(Sr, "getOffsetParent");
function $n(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name($n, "$n");
c($n, "getMainAxisFromPlacement");
function qn(t, n, e) {
  return Er(t, Hn(n, e));
}
__name(qn, "qn");
c(qn, "within");
function pp(t, n, e) {
  var r = qn(t, n, e);
  return r > e ? e : r;
}
__name(pp, "pp");
c(pp, "withinMaxClamp");
function mo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(mo, "mo");
c(mo, "getFreshSideObject");
function go(t) {
  return Object.assign({}, mo(), t);
}
__name(go, "go");
c(go, "mergePaddingObject");
function bo(t, n) {
  return n.reduce(function(e, r) {
    return e[r] = t, e;
  }, {});
}
__name(bo, "bo");
c(bo, "expandToHashMap");
var pv = c(function(n, e) {
  return n = typeof n == "function" ? n(Object.assign({}, e.rects, { placement: e.placement })) : n, go(typeof n != "number" ? n : bo(n, mn));
}, "toPaddingObject");
function dv(t) {
  var n, e = t.state, r = t.name, a = t.options, u = e.elements.arrow, h = e.modifiersData.popperOffsets, b = wt(e.placement), v = $n(b), d = [tt, st].indexOf(b) >= 0, f = d ? "height" : "width";
  if (!(!u || !h)) {
    var y = pv(a.padding, e), E = Bn(u), S = v === "y" ? Qe : tt, C = v === "y" ? vt : st, T = e.rects.reference[f] + e.rects.reference[v] - h[v] - e.rects.popper[f], z = h[v] - e.rects.reference[v], k = Sr(u), j = k ? v === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, $ = T / 2 - z / 2, A = y[S], ee = j - E[f] - y[C], R = j / 2 - E[f] / 2 + $, H = qn(A, R, ee), K = v;
    e.modifiersData[r] = (n = {}, n[K] = H, n.centerOffset = H - R, n);
  }
}
__name(dv, "dv");
c(dv, "arrow");
function fv(t) {
  var n = t.state, e = t.options, r = e.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = n.elements.popper.querySelector(a), !a) || vo(n.elements.popper, a) && (n.elements.arrow = a));
}
__name(fv, "fv");
c(fv, "effect");
var dp = { name: "arrow", enabled: true, phase: "main", fn: dv, effect: fv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function hr(t) {
  return t.split("-")[1];
}
__name(hr, "hr");
c(hr, "getVariation");
var hv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function vv(t) {
  var n = t.x, e = t.y, r = window, a = r.devicePixelRatio || 1;
  return { x: Qr(n * a) / a || 0, y: Qr(e * a) / a || 0 };
}
__name(vv, "vv");
c(vv, "roundOffsetsByDPR");
function fp(t) {
  var n, e = t.popper, r = t.popperRect, a = t.placement, u = t.variation, h = t.offsets, b = t.position, v = t.gpuAcceleration, d = t.adaptive, f = t.roundOffsets, y = t.isFixed, E = h.x, S = E === void 0 ? 0 : E, C = h.y, T = C === void 0 ? 0 : C, z = typeof f == "function" ? f({ x: S, y: T }) : { x: S, y: T };
  S = z.x, T = z.y;
  var k = h.hasOwnProperty("x"), j = h.hasOwnProperty("y"), $ = tt, A = Qe, ee = window;
  if (d) {
    var R = Sr(e), H = "clientHeight", K = "clientWidth";
    if (R === rt(e) && (R = Ct(e), Gt(R).position !== "static" && b === "absolute" && (H = "scrollHeight", K = "scrollWidth")), R = R, a === Qe || (a === tt || a === st) && u === jn) {
      A = vt;
      var te = y && ee.visualViewport ? ee.visualViewport.height : R[H];
      T -= te - r.height, T *= v ? 1 : -1;
    }
    if (a === tt || (a === Qe || a === vt) && u === jn) {
      $ = st;
      var le = y && ee.visualViewport ? ee.visualViewport.width : R[K];
      S -= le - r.width, S *= v ? 1 : -1;
    }
  }
  var Y = Object.assign({ position: b }, d && hv), ie = f === true ? vv({ x: S, y: T }) : { x: S, y: T };
  if (S = ie.x, T = ie.y, v) {
    var W;
    return Object.assign({}, Y, (W = {}, W[A] = j ? "0" : "", W[$] = k ? "0" : "", W.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + T + "px)" : "translate3d(" + S + "px, " + T + "px, 0)", W));
  }
  return Object.assign({}, Y, (n = {}, n[A] = j ? T + "px" : "", n[$] = k ? S + "px" : "", n.transform = "", n));
}
__name(fp, "fp");
c(fp, "mapToStyles");
function mv(t) {
  var n = t.state, e = t.options, r = e.gpuAcceleration, a = r === void 0 ? true : r, u = e.adaptive, h = u === void 0 ? true : u, b = e.roundOffsets, v = b === void 0 ? true : b;
  if (false)
    var d;
  var f = { placement: wt(n.placement), variation: hr(n.placement), popper: n.elements.popper, popperRect: n.rects.popper, gpuAcceleration: a, isFixed: n.options.strategy === "fixed" };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, fp(Object.assign({}, f, { offsets: n.modifiersData.popperOffsets, position: n.options.strategy, adaptive: h, roundOffsets: v })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, fp(Object.assign({}, f, { offsets: n.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: v })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
__name(mv, "mv");
c(mv, "computeStyles");
var hp = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: mv, data: {} };
var Ya = { passive: true };
function gv(t) {
  var n = t.state, e = t.instance, r = t.options, a = r.scroll, u = a === void 0 ? true : a, h = r.resize, b = h === void 0 ? true : h, v = rt(n.elements.popper), d = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return u && d.forEach(function(f) {
    f.addEventListener("scroll", e.update, Ya);
  }), b && v.addEventListener("resize", e.update, Ya), function() {
    u && d.forEach(function(f) {
      f.removeEventListener("scroll", e.update, Ya);
    }), b && v.removeEventListener("resize", e.update, Ya);
  };
}
__name(gv, "gv");
c(gv, "effect");
var vp = { name: "eventListeners", enabled: true, phase: "write", fn: c(function() {
}, "fn"), effect: gv, data: {} };
var bv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ei(t) {
  return t.replace(/left|right|bottom|top/g, function(n) {
    return bv[n];
  });
}
__name(Ei, "Ei");
c(Ei, "getOppositePlacement");
var yv = { start: "end", end: "start" };
function Xa(t) {
  return t.replace(/start|end/g, function(n) {
    return yv[n];
  });
}
__name(Xa, "Xa");
c(Xa, "getOppositeVariationPlacement");
function Fn(t) {
  var n = rt(t), e = n.pageXOffset, r = n.pageYOffset;
  return { scrollLeft: e, scrollTop: r };
}
__name(Fn, "Fn");
c(Fn, "getWindowScroll");
function Un(t) {
  return fr(Ct(t)).left + Fn(t).scrollLeft;
}
__name(Un, "Un");
c(Un, "getWindowScrollBarX");
function kl(t) {
  var n = rt(t), e = Ct(t), r = n.visualViewport, a = e.clientWidth, u = e.clientHeight, h = 0, b = 0;
  return r && (a = r.width, u = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (h = r.offsetLeft, b = r.offsetTop)), { width: a, height: u, x: h + Un(t), y: b };
}
__name(kl, "kl");
c(kl, "getViewportRect");
function Nl(t) {
  var n, e = Ct(t), r = Fn(t), a = (n = t.ownerDocument) == null ? void 0 : n.body, u = Er(e.scrollWidth, e.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Er(e.scrollHeight, e.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), b = -r.scrollLeft + Un(t), v = -r.scrollTop;
  return Gt(a || e).direction === "rtl" && (b += Er(e.clientWidth, a ? a.clientWidth : 0) - u), { width: u, height: h, x: b, y: v };
}
__name(Nl, "Nl");
c(Nl, "getDocumentRect");
function Wn(t) {
  var n = Gt(t), e = n.overflow, r = n.overflowX, a = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + a + r);
}
__name(Wn, "Wn");
c(Wn, "isScrollParent");
function Za(t) {
  return ["html", "body", "#document"].indexOf(yt(t)) >= 0 ? t.ownerDocument.body : mt(t) && Wn(t) ? t : Za(Jr(t));
}
__name(Za, "Za");
c(Za, "getScrollParent");
function gn(t, n) {
  var e;
  n === void 0 && (n = []);
  var r = Za(t), a = r === ((e = t.ownerDocument) == null ? void 0 : e.body), u = rt(r), h = a ? [u].concat(u.visualViewport || [], Wn(r) ? r : []) : r, b = n.concat(h);
  return a ? b : b.concat(gn(Jr(h)));
}
__name(gn, "gn");
c(gn, "listScrollParents");
function Si(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(Si, "Si");
c(Si, "rectToClientRect");
function wv(t) {
  var n = fr(t);
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
__name(wv, "wv");
c(wv, "getInnerBoundingClientRect");
function mp(t, n) {
  return n === Ua ? Si(kl(t)) : _r(n) ? wv(n) : Si(Nl(Ct(t)));
}
__name(mp, "mp");
c(mp, "getClientRectFromMixedType");
function xv(t) {
  var n = gn(Jr(t)), e = ["absolute", "fixed"].indexOf(Gt(t).position) >= 0, r = e && mt(t) ? Sr(t) : t;
  return _r(r) ? n.filter(function(a) {
    return _r(a) && vo(a, r) && yt(a) !== "body";
  }) : [];
}
__name(xv, "xv");
c(xv, "getClippingParents");
function Gl(t, n, e) {
  var r = n === "clippingParents" ? xv(t) : [].concat(n), a = [].concat(r, [e]), u = a[0], h = a.reduce(function(b, v) {
    var d = mp(t, v);
    return b.top = Er(d.top, b.top), b.right = Hn(d.right, b.right), b.bottom = Hn(d.bottom, b.bottom), b.left = Er(d.left, b.left), b;
  }, mp(t, u));
  return h.width = h.right - h.left, h.height = h.bottom - h.top, h.x = h.left, h.y = h.top, h;
}
__name(Gl, "Gl");
c(Gl, "getClippingRect");
function yo(t) {
  var n = t.reference, e = t.element, r = t.placement, a = r ? wt(r) : null, u = r ? hr(r) : null, h = n.x + n.width / 2 - e.width / 2, b = n.y + n.height / 2 - e.height / 2, v;
  switch (a) {
    case Qe:
      v = { x: h, y: n.y - e.height };
      break;
    case vt:
      v = { x: h, y: n.y + n.height };
      break;
    case st:
      v = { x: n.x + n.width, y: b };
      break;
    case tt:
      v = { x: n.x - e.width, y: b };
      break;
    default:
      v = { x: n.x, y: n.y };
  }
  var d = a ? $n(a) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (u) {
      case Zr:
        v[d] = v[d] - (n[f] / 2 - e[f] / 2);
        break;
      case jn:
        v[d] = v[d] + (n[f] / 2 - e[f] / 2);
        break;
      default:
    }
  }
  return v;
}
__name(yo, "yo");
c(yo, "computeOffsets");
function Cr(t, n) {
  n === void 0 && (n = {});
  var e = n, r = e.placement, a = r === void 0 ? t.placement : r, u = e.boundary, h = u === void 0 ? sp : u, b = e.rootBoundary, v = b === void 0 ? Ua : b, d = e.elementContext, f = d === void 0 ? xi : d, y = e.altBoundary, E = y === void 0 ? false : y, S = e.padding, C = S === void 0 ? 0 : S, T = go(typeof C != "number" ? C : bo(C, mn)), z = f === xi ? lp : xi, k = t.rects.popper, j = t.elements[E ? z : f], $ = Gl(_r(j) ? j : j.contextElement || Ct(t.elements.popper), h, v), A = fr(t.elements.reference), ee = yo({ reference: A, element: k, strategy: "absolute", placement: a }), R = Si(Object.assign({}, k, ee)), H = f === xi ? R : A, K = { top: $.top - H.top + T.top, bottom: H.bottom - $.bottom + T.bottom, left: $.left - H.left + T.left, right: H.right - $.right + T.right }, te = t.modifiersData.offset;
  if (f === xi && te) {
    var le = te[a];
    Object.keys(K).forEach(function(Y) {
      var ie = [st, vt].indexOf(Y) >= 0 ? 1 : -1, W = [Qe, vt].indexOf(Y) >= 0 ? "y" : "x";
      K[Y] += le[W] * ie;
    });
  }
  return K;
}
__name(Cr, "Cr");
c(Cr, "detectOverflow");
function Ll(t, n) {
  n === void 0 && (n = {});
  var e = n, r = e.placement, a = e.boundary, u = e.rootBoundary, h = e.padding, b = e.flipVariations, v = e.allowedAutoPlacements, d = v === void 0 ? Wa : v, f = hr(r), y = f ? b ? _l : _l.filter(function(C) {
    return hr(C) === f;
  }) : mn, E = y.filter(function(C) {
    return d.indexOf(C) >= 0;
  });
  E.length === 0 && (E = y);
  var S = E.reduce(function(C, T) {
    return C[T] = Cr(t, { placement: T, boundary: a, rootBoundary: u, padding: h })[wt(T)], C;
  }, {});
  return Object.keys(S).sort(function(C, T) {
    return S[C] - S[T];
  });
}
__name(Ll, "Ll");
c(Ll, "computeAutoPlacement");
function Ev(t) {
  if (wt(t) === Fa)
    return [];
  var n = Ei(t);
  return [Xa(t), n, Xa(n)];
}
__name(Ev, "Ev");
c(Ev, "getExpandedFallbackPlacements");
function Sv(t) {
  var n = t.state, e = t.options, r = t.name;
  if (!n.modifiersData[r]._skip) {
    for (var a = e.mainAxis, u = a === void 0 ? true : a, h = e.altAxis, b = h === void 0 ? true : h, v = e.fallbackPlacements, d = e.padding, f = e.boundary, y = e.rootBoundary, E = e.altBoundary, S = e.flipVariations, C = S === void 0 ? true : S, T = e.allowedAutoPlacements, z = n.options.placement, k = wt(z), j = k === z, $ = v || (j || !C ? [Ei(z)] : Ev(z)), A = [z].concat($).reduce(function(Ie, Je) {
      return Ie.concat(wt(Je) === Fa ? Ll(n, { placement: Je, boundary: f, rootBoundary: y, padding: d, flipVariations: C, allowedAutoPlacements: T }) : Je);
    }, []), ee = n.rects.reference, R = n.rects.popper, H = /* @__PURE__ */ new Map(), K = true, te = A[0], le = 0; le < A.length; le++) {
      var Y = A[le], ie = wt(Y), W = hr(Y) === Zr, ue = [Qe, vt].indexOf(ie) >= 0, Fe = ue ? "width" : "height", $e = Cr(n, { placement: Y, boundary: f, rootBoundary: y, altBoundary: E, padding: d }), De = ue ? W ? st : tt : W ? vt : Qe;
      ee[Fe] > R[Fe] && (De = Ei(De));
      var Le = Ei(De), it = [];
      if (u && it.push($e[ie] <= 0), b && it.push($e[De] <= 0, $e[Le] <= 0), it.every(function(Ie) {
        return Ie;
      })) {
        te = Y, K = false;
        break;
      }
      H.set(Y, it);
    }
    if (K)
      for (var Xe = C ? 3 : 1, We = c(function(Je) {
        var sr = A.find(function(yr) {
          var lr = H.get(yr);
          if (lr)
            return lr.slice(0, Je).every(function(rr) {
              return rr;
            });
        });
        if (sr)
          return te = sr, "break";
      }, "_loop"), J = Xe; J > 0; J--) {
        var tr = We(J);
        if (tr === "break")
          break;
      }
    n.placement !== te && (n.modifiersData[r]._skip = true, n.placement = te, n.reset = true);
  }
}
__name(Sv, "Sv");
c(Sv, "flip");
var gp = { name: "flip", enabled: true, phase: "main", fn: Sv, requiresIfExists: ["offset"], data: { _skip: false } };
function bp(t, n, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - n.height - e.y, right: t.right - n.width + e.x, bottom: t.bottom - n.height + e.y, left: t.left - n.width - e.x };
}
__name(bp, "bp");
c(bp, "getSideOffsets");
function yp(t) {
  return [Qe, st, vt, tt].some(function(n) {
    return t[n] >= 0;
  });
}
__name(yp, "yp");
c(yp, "isAnySideFullyClipped");
function Cv(t) {
  var n = t.state, e = t.name, r = n.rects.reference, a = n.rects.popper, u = n.modifiersData.preventOverflow, h = Cr(n, { elementContext: "reference" }), b = Cr(n, { altBoundary: true }), v = bp(h, r), d = bp(b, a, u), f = yp(v), y = yp(d);
  n.modifiersData[e] = { referenceClippingOffsets: v, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: y }, n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": y });
}
__name(Cv, "Cv");
c(Cv, "hide");
var wp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Cv };
function Tv(t, n, e) {
  var r = wt(t), a = [tt, Qe].indexOf(r) >= 0 ? -1 : 1, u = typeof e == "function" ? e(Object.assign({}, n, { placement: t })) : e, h = u[0], b = u[1];
  return h = h || 0, b = (b || 0) * a, [tt, st].indexOf(r) >= 0 ? { x: b, y: h } : { x: h, y: b };
}
__name(Tv, "Tv");
c(Tv, "distanceAndSkiddingToXY");
function Ov(t) {
  var n = t.state, e = t.options, r = t.name, a = e.offset, u = a === void 0 ? [0, 0] : a, h = Wa.reduce(function(f, y) {
    return f[y] = Tv(y, n.rects, u), f;
  }, {}), b = h[n.placement], v = b.x, d = b.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += v, n.modifiersData.popperOffsets.y += d), n.modifiersData[r] = h;
}
__name(Ov, "Ov");
c(Ov, "offset");
var xp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Ov };
function Mv(t) {
  var n = t.state, e = t.name;
  n.modifiersData[e] = yo({ reference: n.rects.reference, element: n.rects.popper, strategy: "absolute", placement: n.placement });
}
__name(Mv, "Mv");
c(Mv, "popperOffsets");
var Ep = { name: "popperOffsets", enabled: true, phase: "read", fn: Mv, data: {} };
function jl(t) {
  return t === "x" ? "y" : "x";
}
__name(jl, "jl");
c(jl, "getAltAxis");
function Iv(t) {
  var n = t.state, e = t.options, r = t.name, a = e.mainAxis, u = a === void 0 ? true : a, h = e.altAxis, b = h === void 0 ? false : h, v = e.boundary, d = e.rootBoundary, f = e.altBoundary, y = e.padding, E = e.tether, S = E === void 0 ? true : E, C = e.tetherOffset, T = C === void 0 ? 0 : C, z = Cr(n, { boundary: v, rootBoundary: d, padding: y, altBoundary: f }), k = wt(n.placement), j = hr(n.placement), $ = !j, A = $n(k), ee = jl(A), R = n.modifiersData.popperOffsets, H = n.rects.reference, K = n.rects.popper, te = typeof T == "function" ? T(Object.assign({}, n.rects, { placement: n.placement })) : T, le = typeof te == "number" ? { mainAxis: te, altAxis: te } : Object.assign({ mainAxis: 0, altAxis: 0 }, te), Y = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, ie = { x: 0, y: 0 };
  if (R) {
    if (u) {
      var W, ue = A === "y" ? Qe : tt, Fe = A === "y" ? vt : st, $e = A === "y" ? "height" : "width", De = R[A], Le = De + z[ue], it = De - z[Fe], Xe = S ? -K[$e] / 2 : 0, We = j === Zr ? H[$e] : K[$e], J = j === Zr ? -K[$e] : -H[$e], tr = n.elements.arrow, Ie = S && tr ? Bn(tr) : { width: 0, height: 0 }, Je = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : mo(), sr = Je[ue], yr = Je[Fe], lr = qn(0, H[$e], Ie[$e]), rr = $ ? H[$e] / 2 - Xe - lr - sr - le.mainAxis : We - lr - sr - le.mainAxis, Mr = $ ? -H[$e] / 2 + Xe + lr + yr + le.mainAxis : J + lr + yr + le.mainAxis, jr = n.elements.arrow && Sr(n.elements.arrow), wn = jr ? A === "y" ? jr.clientTop || 0 : jr.clientLeft || 0 : 0, Me = (W = Y == null ? void 0 : Y[A]) != null ? W : 0, xn = De + rr - Me - wn, En = De + Mr - Me, Dt = qn(S ? Hn(Le, xn) : Le, De, S ? Er(it, En) : it);
      R[A] = Dt, ie[A] = Dt - De;
    }
    if (b) {
      var Hr, Xn = A === "x" ? Qe : tt, on = A === "x" ? vt : st, wr = R[ee], Mt = ee === "y" ? "height" : "width", Ir = wr + z[Xn], Bt = wr - z[on], Sn = [Qe, tt].indexOf(k) !== -1, Br = (Hr = Y == null ? void 0 : Y[ee]) != null ? Hr : 0, Cn = Sn ? Ir : wr - H[Mt] - K[Mt] - Br + le.altAxis, an = Sn ? wr + H[Mt] + K[Mt] - Br - le.altAxis : Bt, Tn = S && Sn ? pp(Cn, wr, an) : qn(S ? Cn : Ir, wr, S ? an : Bt);
      R[ee] = Tn, ie[ee] = Tn - wr;
    }
    n.modifiersData[r] = ie;
  }
}
__name(Iv, "Iv");
c(Iv, "preventOverflow");
var Sp = { name: "preventOverflow", enabled: true, phase: "main", fn: Iv, requiresIfExists: ["offset"] };
function Hl(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(Hl, "Hl");
c(Hl, "getHTMLElementScroll");
function Bl(t) {
  return t === rt(t) || !mt(t) ? Fn(t) : Hl(t);
}
__name(Bl, "Bl");
c(Bl, "getNodeScroll");
function Av(t) {
  var n = t.getBoundingClientRect(), e = Qr(n.width) / t.offsetWidth || 1, r = Qr(n.height) / t.offsetHeight || 1;
  return e !== 1 || r !== 1;
}
__name(Av, "Av");
c(Av, "isElementScaled");
function $l(t, n, e) {
  e === void 0 && (e = false);
  var r = mt(n), a = mt(n) && Av(n), u = Ct(n), h = fr(t, a), b = { scrollLeft: 0, scrollTop: 0 }, v = { x: 0, y: 0 };
  return (r || !r && !e) && ((yt(n) !== "body" || Wn(u)) && (b = Bl(n)), mt(n) ? (v = fr(n, true), v.x += n.clientLeft, v.y += n.clientTop) : u && (v.x = Un(u))), { x: h.left + b.scrollLeft - v.x, y: h.top + b.scrollTop - v.y, width: h.width, height: h.height };
}
__name($l, "$l");
c($l, "getCompositeRect");
function Pv(t) {
  var n = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(u) {
    n.set(u.name, u);
  });
  function a(u) {
    e.add(u.name);
    var h = [].concat(u.requires || [], u.requiresIfExists || []);
    h.forEach(function(b) {
      if (!e.has(b)) {
        var v = n.get(b);
        v && a(v);
      }
    }), r.push(u);
  }
  __name(a, "a");
  return c(a, "sort"), t.forEach(function(u) {
    e.has(u.name) || a(u);
  }), r;
}
__name(Pv, "Pv");
c(Pv, "order");
function ql(t) {
  var n = Pv(t);
  return up.reduce(function(e, r) {
    return e.concat(n.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
__name(ql, "ql");
c(ql, "orderModifiers");
function Fl(t) {
  var n;
  return function() {
    return n || (n = new Promise(function(e) {
      Promise.resolve().then(function() {
        n = void 0, e(t());
      });
    })), n;
  };
}
__name(Fl, "Fl");
c(Fl, "debounce");
function Ul(t) {
  var n = t.reduce(function(e, r) {
    var a = e[r.name];
    return e[r.name] = a ? Object.assign({}, a, r, { options: Object.assign({}, a.options, r.options), data: Object.assign({}, a.data, r.data) }) : r, e;
  }, {});
  return Object.keys(n).map(function(e) {
    return n[e];
  });
}
__name(Ul, "Ul");
c(Ul, "mergeByName");
var Cp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Tp() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  return !n.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
__name(Tp, "Tp");
c(Tp, "areValidElements");
function Op(t) {
  t === void 0 && (t = {});
  var n = t, e = n.defaultModifiers, r = e === void 0 ? [] : e, a = n.defaultOptions, u = a === void 0 ? Cp : a;
  return c(function(b, v, d) {
    d === void 0 && (d = u);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Cp, u), modifiersData: {}, elements: { reference: b, popper: v }, attributes: {}, styles: {} }, y = [], E = false, S = { state: f, setOptions: c(function(k) {
      var j = typeof k == "function" ? k(f.options) : k;
      T(), f.options = Object.assign({}, u, f.options, j), f.scrollParents = { reference: _r(b) ? gn(b) : b.contextElement ? gn(b.contextElement) : [], popper: gn(v) };
      var $ = ql(Ul([].concat(r, f.options.modifiers)));
      if (f.orderedModifiers = $.filter(function(Y) {
        return Y.enabled;
      }), false) {
        var A;
        if (getBasePlacement(f.options.placement) === auto)
          var ee;
        var R, H, K, te, le;
      }
      return C(), S.update();
    }, "setOptions"), forceUpdate: c(function() {
      if (!E) {
        var k = f.elements, j = k.reference, $ = k.popper;
        if (Tp(j, $)) {
          f.rects = { reference: $l(j, Sr($), f.options.strategy === "fixed"), popper: Bn($) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(Y) {
            return f.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var A = 0, ee = 0; ee < f.orderedModifiers.length; ee++) {
            if (f.reset === true) {
              f.reset = false, ee = -1;
              continue;
            }
            var R = f.orderedModifiers[ee], H = R.fn, K = R.options, te = K === void 0 ? {} : K, le = R.name;
            typeof H == "function" && (f = H({ state: f, options: te, name: le, instance: S }) || f);
          }
        }
      }
    }, "forceUpdate"), update: Fl(function() {
      return new Promise(function(z) {
        S.forceUpdate(), z(f);
      });
    }), destroy: c(function() {
      T(), E = true;
    }, "destroy") };
    if (!Tp(b, v))
      return S;
    S.setOptions(d).then(function(z) {
      !E && d.onFirstUpdate && d.onFirstUpdate(z);
    });
    function C() {
      f.orderedModifiers.forEach(function(z) {
        var k = z.name, j = z.options, $ = j === void 0 ? {} : j, A = z.effect;
        if (typeof A == "function") {
          var ee = A({ state: f, name: k, instance: S, options: $ }), R = c(function() {
          }, "noopFn");
          y.push(ee || R);
        }
      });
    }
    __name(C, "C");
    c(C, "runModifierEffects");
    function T() {
      y.forEach(function(z) {
        return z();
      }), y = [];
    }
    __name(T, "T");
    return c(T, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(Op, "Op");
c(Op, "popperGenerator");
var zv = [vp, Ep, hp, ho, xp, gp, Sp, dp, wp];
var Wl = Op({ defaultModifiers: zv });
var Rv = "tippy-box";
var Np = "tippy-content";
var _v = "tippy-backdrop";
var Gp = "tippy-arrow";
var Lp = "tippy-svg-arrow";
var Vn = { passive: true, capture: true };
var jp = c(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Vl(t, n, e) {
  if (Array.isArray(t)) {
    var r = t[n];
    return r == null ? Array.isArray(e) ? e[n] : e : r;
  }
  return t;
}
__name(Vl, "Vl");
c(Vl, "getValueAtIndexOrReturn");
function Kl(t, n) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(n + "]") > -1;
}
__name(Kl, "Kl");
c(Kl, "isType");
function Hp(t, n) {
  return typeof t == "function" ? t.apply(void 0, n) : t;
}
__name(Hp, "Hp");
c(Hp, "invokeWithArgsOrReturn");
function Mp(t, n) {
  if (n === 0)
    return t;
  var e;
  return function(r) {
    clearTimeout(e), e = setTimeout(function() {
      t(r);
    }, n);
  };
}
__name(Mp, "Mp");
c(Mp, "debounce");
function Dv(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(Dv, "Dv");
c(Dv, "splitBySpaces");
function Ci(t) {
  return [].concat(t);
}
__name(Ci, "Ci");
c(Ci, "normalizeToArray");
function Ip(t, n) {
  t.indexOf(n) === -1 && t.push(n);
}
__name(Ip, "Ip");
c(Ip, "pushIfUnique");
function kv(t) {
  return t.filter(function(n, e) {
    return t.indexOf(n) === e;
  });
}
__name(kv, "kv");
c(kv, "unique");
function Nv(t) {
  return t.split("-")[0];
}
__name(Nv, "Nv");
c(Nv, "getBasePlacement");
function Ja(t) {
  return [].slice.call(t);
}
__name(Ja, "Ja");
c(Ja, "arrayFrom");
function Ap(t) {
  return Object.keys(t).reduce(function(n, e) {
    return t[e] !== void 0 && (n[e] = t[e]), n;
  }, {});
}
__name(Ap, "Ap");
c(Ap, "removeUndefinedProps");
function wo() {
  return document.createElement("div");
}
__name(wo, "wo");
c(wo, "div");
function Ka(t) {
  return ["Element", "Fragment"].some(function(n) {
    return Kl(t, n);
  });
}
__name(Ka, "Ka");
c(Ka, "isElement");
function Gv(t) {
  return Kl(t, "NodeList");
}
__name(Gv, "Gv");
c(Gv, "isNodeList");
function Lv(t) {
  return Kl(t, "MouseEvent");
}
__name(Lv, "Lv");
c(Lv, "isMouseEvent");
function jv(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(jv, "jv");
c(jv, "isReferenceElement");
function Hv(t) {
  return Ka(t) ? [t] : Gv(t) ? Ja(t) : Array.isArray(t) ? t : Ja(document.querySelectorAll(t));
}
__name(Hv, "Hv");
c(Hv, "getArrayOfElements");
function Yl(t, n) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = n + "ms");
  });
}
__name(Yl, "Yl");
c(Yl, "setTransitionDuration");
function Pp(t, n) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", n);
  });
}
__name(Pp, "Pp");
c(Pp, "setVisibilityState");
function Bv(t) {
  var n, e = Ci(t), r = e[0];
  return r != null && (n = r.ownerDocument) != null && n.body ? r.ownerDocument : document;
}
__name(Bv, "Bv");
c(Bv, "getOwnerDocument");
function $v(t, n) {
  var e = n.clientX, r = n.clientY;
  return t.every(function(a) {
    var u = a.popperRect, h = a.popperState, b = a.props, v = b.interactiveBorder, d = Nv(h.placement), f = h.modifiersData.offset;
    if (!f)
      return true;
    var y = d === "bottom" ? f.top.y : 0, E = d === "top" ? f.bottom.y : 0, S = d === "right" ? f.left.x : 0, C = d === "left" ? f.right.x : 0, T = u.top - r + y > v, z = r - u.bottom - E > v, k = u.left - e + S > v, j = e - u.right - C > v;
    return T || z || k || j;
  });
}
__name($v, "$v");
c($v, "isCursorOutsideInteractiveBorder");
function Xl(t, n, e) {
  var r = n + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    t[r](a, e);
  });
}
__name(Xl, "Xl");
c(Xl, "updateTransitionEndListener");
function zp(t, n) {
  for (var e = n; e; ) {
    var r;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (r = e.getRootNode()) == null ? void 0 : r.host;
  }
  return false;
}
__name(zp, "zp");
c(zp, "actualContains");
var Dr = { isTouch: false };
var Rp = 0;
function qv() {
  Dr.isTouch || (Dr.isTouch = true, window.performance && document.addEventListener("mousemove", Bp));
}
__name(qv, "qv");
c(qv, "onDocumentTouchStart");
function Bp() {
  var t = performance.now();
  t - Rp < 20 && (Dr.isTouch = false, document.removeEventListener("mousemove", Bp)), Rp = t;
}
__name(Bp, "Bp");
c(Bp, "onDocumentMouseMove");
function Fv() {
  var t = document.activeElement;
  if (jv(t)) {
    var n = t._tippy;
    t.blur && !n.state.isVisible && t.blur();
  }
}
__name(Fv, "Fv");
c(Fv, "onWindowBlur");
function Uv() {
  document.addEventListener("touchstart", qv, Vn), window.addEventListener("blur", Fv);
}
__name(Uv, "Uv");
c(Uv, "bindGlobalEventListeners");
var Wv = typeof window != "undefined" && typeof document != "undefined";
var Vv = Wv ? !!window.msCrypto : false;
var Yv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Xv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Tr = Object.assign({ appendTo: jp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: c(function() {
}, "onAfterUpdate"), onBeforeUpdate: c(function() {
}, "onBeforeUpdate"), onCreate: c(function() {
}, "onCreate"), onDestroy: c(function() {
}, "onDestroy"), onHidden: c(function() {
}, "onHidden"), onHide: c(function() {
}, "onHide"), onMount: c(function() {
}, "onMount"), onShow: c(function() {
}, "onShow"), onShown: c(function() {
}, "onShown"), onTrigger: c(function() {
}, "onTrigger"), onUntrigger: c(function() {
}, "onUntrigger"), onClickOutside: c(function() {
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Yv, Xv);
var Zv = Object.keys(Tr);
var Qv = c(function(n) {
  var e = Object.keys(n);
  e.forEach(function(r) {
    Tr[r] = n[r];
  });
}, "setDefaultProps");
function $p(t) {
  var n = t.plugins || [], e = n.reduce(function(r, a) {
    var u = a.name, h = a.defaultValue;
    if (u) {
      var b;
      r[u] = t[u] !== void 0 ? t[u] : (b = Tr[u]) != null ? b : h;
    }
    return r;
  }, {});
  return Object.assign({}, t, e);
}
__name($p, "$p");
c($p, "getExtendedPassedProps");
function Jv(t, n) {
  var e = n ? Object.keys($p(Object.assign({}, Tr, { plugins: n }))) : Zv, r = e.reduce(function(a, u) {
    var h = (t.getAttribute("data-tippy-" + u) || "").trim();
    if (!h)
      return a;
    if (u === "content")
      a[u] = h;
    else
      try {
        a[u] = JSON.parse(h);
      } catch (b) {
        a[u] = h;
      }
    return a;
  }, {});
  return r;
}
__name(Jv, "Jv");
c(Jv, "getDataAttributeProps");
function _p(t, n) {
  var e = Object.assign({}, n, { content: Hp(n.content, [t]) }, n.ignoreAttributes ? {} : Jv(t, n.plugins));
  return e.aria = Object.assign({}, Tr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? n.interactive : e.aria.expanded, content: e.aria.content === "auto" ? n.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(_p, "_p");
c(_p, "evaluateProps");
var Kv = c(function() {
  return "innerHTML";
}, "innerHTML");
function Ql(t, n) {
  t[Kv()] = n;
}
__name(Ql, "Ql");
c(Ql, "dangerouslySetInnerHTML");
function Dp(t) {
  var n = wo();
  return t === true ? n.className = Gp : (n.className = Lp, Ka(t) ? n.appendChild(t) : Ql(n, t)), n;
}
__name(Dp, "Dp");
c(Dp, "createArrowElement");
function kp(t, n) {
  Ka(n.content) ? (Ql(t, ""), t.appendChild(n.content)) : typeof n.content != "function" && (n.allowHTML ? Ql(t, n.content) : t.textContent = n.content);
}
__name(kp, "kp");
c(kp, "setContent");
function Jl(t) {
  var n = t.firstElementChild, e = Ja(n.children);
  return { box: n, content: e.find(function(r) {
    return r.classList.contains(Np);
  }), arrow: e.find(function(r) {
    return r.classList.contains(Gp) || r.classList.contains(Lp);
  }), backdrop: e.find(function(r) {
    return r.classList.contains(_v);
  }) };
}
__name(Jl, "Jl");
c(Jl, "getChildren");
function qp(t) {
  var n = wo(), e = wo();
  e.className = Rv, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var r = wo();
  r.className = Np, r.setAttribute("data-state", "hidden"), kp(r, t.props), n.appendChild(e), e.appendChild(r), a(t.props, t.props);
  function a(u, h) {
    var b = Jl(n), v = b.box, d = b.content, f = b.arrow;
    h.theme ? v.setAttribute("data-theme", h.theme) : v.removeAttribute("data-theme"), typeof h.animation == "string" ? v.setAttribute("data-animation", h.animation) : v.removeAttribute("data-animation"), h.inertia ? v.setAttribute("data-inertia", "") : v.removeAttribute("data-inertia"), v.style.maxWidth = typeof h.maxWidth == "number" ? h.maxWidth + "px" : h.maxWidth, h.role ? v.setAttribute("role", h.role) : v.removeAttribute("role"), (u.content !== h.content || u.allowHTML !== h.allowHTML) && kp(d, t.props), h.arrow ? f ? u.arrow !== h.arrow && (v.removeChild(f), v.appendChild(Dp(h.arrow))) : v.appendChild(Dp(h.arrow)) : f && v.removeChild(f);
  }
  __name(a, "a");
  return c(a, "onUpdate"), { popper: n, onUpdate: a };
}
__name(qp, "qp");
c(qp, "render");
qp.$$tippy = true;
var em = 1;
var Qa = [];
var Zl = [];
function tm(t, n) {
  var e = _p(t, Object.assign({}, Tr, $p(Ap(n)))), r, a, u, h = false, b = false, v = false, d = false, f, y, E, S = [], C = Mp(xn, e.interactiveDebounce), T, z = em++, k = null, j = kv(e.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: z, reference: t, popper: wo(), popperInstance: k, props: e, state: $, plugins: j, clearDelayTimeouts: Cn, setProps: an, setContent: Tn, show: Pi, hide: zi, hideWithInteractivity: _o, enable: Sn, disable: Br, unmount: Do, destroy: hs };
  if (!e.render)
    return A;
  var ee = e.render(A), R = ee.popper, H = ee.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + A.id, A.popper = R, t._tippy = A, R._tippy = A;
  var K = j.map(function(G) {
    return G.fn(A);
  }), te = t.hasAttribute("aria-expanded");
  return jr(), Xe(), De(), Le("onCreate", [A]), e.showOnCreate && Ir(), R.addEventListener("mouseenter", function() {
    A.props.interactive && A.state.isVisible && A.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    A.props.interactive && A.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", C);
  }), A;
  function le() {
    var G = A.props.touch;
    return Array.isArray(G) ? G : [G, 0];
  }
  __name(le, "le");
  c(le, "getNormalizedTouchSettings");
  function Y() {
    return le()[0] === "hold";
  }
  __name(Y, "Y");
  c(Y, "getIsCustomTouchBehavior");
  function ie() {
    var G;
    return !!((G = A.props.render) != null && G.$$tippy);
  }
  __name(ie, "ie");
  c(ie, "getIsDefaultRenderFn");
  function W() {
    return T || t;
  }
  __name(W, "W");
  c(W, "getCurrentTarget");
  function ue() {
    var G = W().parentNode;
    return G ? Bv(G) : document;
  }
  __name(ue, "ue");
  c(ue, "getDocument");
  function Fe() {
    return Jl(R);
  }
  __name(Fe, "Fe");
  c(Fe, "getDefaultTemplateChildren");
  function $e(G) {
    return A.state.isMounted && !A.state.isVisible || Dr.isTouch || f && f.type === "focus" ? 0 : Vl(A.props.delay, G ? 0 : 1, Tr.delay);
  }
  __name($e, "$e");
  c($e, "getDelay");
  function De(G) {
    G === void 0 && (G = false), R.style.pointerEvents = A.props.interactive && !G ? "" : "none", R.style.zIndex = "" + A.props.zIndex;
  }
  __name(De, "De");
  c(De, "handleStyles");
  function Le(G, re, ae) {
    if (ae === void 0 && (ae = true), K.forEach(function(ge) {
      ge[G] && ge[G].apply(ge, re);
    }), ae) {
      var Ae;
      (Ae = A.props)[G].apply(Ae, re);
    }
  }
  __name(Le, "Le");
  c(Le, "invokeHook");
  function it() {
    var G = A.props.aria;
    if (G.content) {
      var re = "aria-" + G.content, ae = R.id, Ae = Ci(A.props.triggerTarget || t);
      Ae.forEach(function(ge) {
        var xt = ge.getAttribute(re);
        if (A.state.isVisible)
          ge.setAttribute(re, xt ? xt + " " + ae : ae);
        else {
          var kt = xt && xt.replace(ae, "").trim();
          kt ? ge.setAttribute(re, kt) : ge.removeAttribute(re);
        }
      });
    }
  }
  __name(it, "it");
  c(it, "handleAriaContentAttribute");
  function Xe() {
    if (!(te || !A.props.aria.expanded)) {
      var G = Ci(A.props.triggerTarget || t);
      G.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === W() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Xe, "Xe");
  c(Xe, "handleAriaExpandedAttribute");
  function We() {
    ue().removeEventListener("mousemove", C), Qa = Qa.filter(function(G) {
      return G !== C;
    });
  }
  __name(We, "We");
  c(We, "cleanupInteractiveMouseListeners");
  function J(G) {
    if (!(Dr.isTouch && (v || G.type === "mousedown"))) {
      var re = G.composedPath && G.composedPath()[0] || G.target;
      if (!(A.props.interactive && zp(R, re))) {
        if (Ci(A.props.triggerTarget || t).some(function(ae) {
          return zp(ae, re);
        })) {
          if (Dr.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Le("onClickOutside", [A, G]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), b = true, setTimeout(function() {
          b = false;
        }), A.state.isMounted || sr());
      }
    }
  }
  __name(J, "J");
  c(J, "onDocumentPress");
  function tr() {
    v = true;
  }
  __name(tr, "tr");
  c(tr, "onTouchMove");
  function Ie() {
    v = false;
  }
  __name(Ie, "Ie");
  c(Ie, "onTouchStart");
  function Je() {
    var G = ue();
    G.addEventListener("mousedown", J, true), G.addEventListener("touchend", J, Vn), G.addEventListener("touchstart", Ie, Vn), G.addEventListener("touchmove", tr, Vn);
  }
  __name(Je, "Je");
  c(Je, "addDocumentPress");
  function sr() {
    var G = ue();
    G.removeEventListener("mousedown", J, true), G.removeEventListener("touchend", J, Vn), G.removeEventListener("touchstart", Ie, Vn), G.removeEventListener("touchmove", tr, Vn);
  }
  __name(sr, "sr");
  c(sr, "removeDocumentPress");
  function yr(G, re) {
    rr(G, function() {
      !A.state.isVisible && R.parentNode && R.parentNode.contains(R) && re();
    });
  }
  __name(yr, "yr");
  c(yr, "onTransitionedOut");
  function lr(G, re) {
    rr(G, re);
  }
  __name(lr, "lr");
  c(lr, "onTransitionedIn");
  function rr(G, re) {
    var ae = Fe().box;
    function Ae(ge) {
      ge.target === ae && (Xl(ae, "remove", Ae), re());
    }
    __name(Ae, "Ae");
    if (c(Ae, "listener"), G === 0)
      return re();
    Xl(ae, "remove", y), Xl(ae, "add", Ae), y = Ae;
  }
  __name(rr, "rr");
  c(rr, "onTransitionEnd");
  function Mr(G, re, ae) {
    ae === void 0 && (ae = false);
    var Ae = Ci(A.props.triggerTarget || t);
    Ae.forEach(function(ge) {
      ge.addEventListener(G, re, ae), S.push({ node: ge, eventType: G, handler: re, options: ae });
    });
  }
  __name(Mr, "Mr");
  c(Mr, "on");
  function jr() {
    Y() && (Mr("touchstart", Me, { passive: true }), Mr("touchend", En, { passive: true })), Dv(A.props.trigger).forEach(function(G) {
      if (G !== "manual")
        switch (Mr(G, Me), G) {
          case "mouseenter":
            Mr("mouseleave", En);
            break;
          case "focus":
            Mr(Vv ? "focusout" : "blur", Dt);
            break;
          case "focusin":
            Mr("focusout", Dt);
            break;
        }
    });
  }
  __name(jr, "jr");
  c(jr, "addListeners");
  function wn() {
    S.forEach(function(G) {
      var re = G.node, ae = G.eventType, Ae = G.handler, ge = G.options;
      re.removeEventListener(ae, Ae, ge);
    }), S = [];
  }
  __name(wn, "wn");
  c(wn, "removeListeners");
  function Me(G) {
    var re, ae = false;
    if (!(!A.state.isEnabled || Hr(G) || b)) {
      var Ae = ((re = f) == null ? void 0 : re.type) === "focus";
      f = G, T = G.currentTarget, Xe(), !A.state.isVisible && Lv(G) && Qa.forEach(function(ge) {
        return ge(G);
      }), G.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || h) && A.props.hideOnClick !== false && A.state.isVisible ? ae = true : Ir(G), G.type === "click" && (h = !ae), ae && !Ae && Bt(G);
    }
  }
  __name(Me, "Me");
  c(Me, "onTrigger");
  function xn(G) {
    var re = G.target, ae = W().contains(re) || R.contains(re);
    if (!(G.type === "mousemove" && ae)) {
      var Ae = Mt().concat(R).map(function(ge) {
        var xt, kt = ge._tippy, It = (xt = kt.popperInstance) == null ? void 0 : xt.state;
        return It ? { popperRect: ge.getBoundingClientRect(), popperState: It, props: e } : null;
      }).filter(Boolean);
      $v(Ae, G) && (We(), Bt(G));
    }
  }
  __name(xn, "xn");
  c(xn, "onMouseMove");
  function En(G) {
    var re = Hr(G) || A.props.trigger.indexOf("click") >= 0 && h;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(G);
        return;
      }
      Bt(G);
    }
  }
  __name(En, "En");
  c(En, "onMouseLeave");
  function Dt(G) {
    A.props.trigger.indexOf("focusin") < 0 && G.target !== W() || A.props.interactive && G.relatedTarget && R.contains(G.relatedTarget) || Bt(G);
  }
  __name(Dt, "Dt");
  c(Dt, "onBlurOrFocusOut");
  function Hr(G) {
    return Dr.isTouch ? Y() !== G.type.indexOf("touch") >= 0 : false;
  }
  __name(Hr, "Hr");
  c(Hr, "isEventListenerStopped");
  function Xn() {
    on();
    var G = A.props, re = G.popperOptions, ae = G.placement, Ae = G.offset, ge = G.getReferenceClientRect, xt = G.moveTransition, kt = ie() ? Jl(R).arrow : null, It = ge ? { getBoundingClientRect: ge, contextElement: ge.contextElement || W() } : t, ko = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: c(function(At) {
      var Pt = At.state;
      if (ie()) {
        var $r = Fe(), Zn = $r.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Qn) {
          Qn === "placement" ? Zn.setAttribute("data-placement", Pt.placement) : Pt.attributes.popper["data-popper-" + Qn] ? Zn.setAttribute("data-" + Qn, "") : Zn.removeAttribute("data-" + Qn);
        }), Pt.attributes.popper = {};
      }
    }, "fn") }, ur = [{ name: "offset", options: { offset: Ae } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !xt } }, ko];
    ie() && kt && ur.push({ name: "arrow", options: { element: kt, padding: 3 } }), ur.push.apply(ur, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = Wl(It, R, Object.assign({}, re, { placement: ae, onFirstUpdate: E, modifiers: ur }));
  }
  __name(Xn, "Xn");
  c(Xn, "createPopperInstance");
  function on() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(on, "on");
  c(on, "destroyPopperInstance");
  function wr() {
    var G = A.props.appendTo, re, ae = W();
    A.props.interactive && G === jp || G === "parent" ? re = ae.parentNode : re = Hp(G, [ae]), re.contains(R) || re.appendChild(R), A.state.isMounted = true, Xn();
  }
  __name(wr, "wr");
  c(wr, "mount");
  function Mt() {
    return Ja(R.querySelectorAll("[data-tippy-root]"));
  }
  __name(Mt, "Mt");
  c(Mt, "getNestedPopperTree");
  function Ir(G) {
    A.clearDelayTimeouts(), G && Le("onTrigger", [A, G]), Je();
    var re = $e(true), ae = le(), Ae = ae[0], ge = ae[1];
    Dr.isTouch && Ae === "hold" && ge && (re = ge), re ? r = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(Ir, "Ir");
  c(Ir, "scheduleShow");
  function Bt(G) {
    if (A.clearDelayTimeouts(), Le("onUntrigger", [A, G]), !A.state.isVisible) {
      sr();
      return;
    }
    if (!(A.props.trigger.indexOf("mouseenter") >= 0 && A.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(G.type) >= 0 && h)) {
      var re = $e(false);
      re ? a = setTimeout(function() {
        A.state.isVisible && A.hide();
      }, re) : u = requestAnimationFrame(function() {
        A.hide();
      });
    }
  }
  __name(Bt, "Bt");
  c(Bt, "scheduleHide");
  function Sn() {
    A.state.isEnabled = true;
  }
  __name(Sn, "Sn");
  c(Sn, "enable");
  function Br() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Br, "Br");
  c(Br, "disable");
  function Cn() {
    clearTimeout(r), clearTimeout(a), cancelAnimationFrame(u);
  }
  __name(Cn, "Cn");
  c(Cn, "clearDelayTimeouts");
  function an(G) {
    if (!A.state.isDestroyed) {
      Le("onBeforeUpdate", [A, G]), wn();
      var re = A.props, ae = _p(t, Object.assign({}, re, Ap(G), { ignoreAttributes: true }));
      A.props = ae, jr(), re.interactiveDebounce !== ae.interactiveDebounce && (We(), C = Mp(xn, ae.interactiveDebounce)), re.triggerTarget && !ae.triggerTarget ? Ci(re.triggerTarget).forEach(function(Ae) {
        Ae.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && t.removeAttribute("aria-expanded"), Xe(), De(), H && H(re, ae), A.popperInstance && (Xn(), Mt().forEach(function(Ae) {
        requestAnimationFrame(Ae._tippy.popperInstance.forceUpdate);
      })), Le("onAfterUpdate", [A, G]);
    }
  }
  __name(an, "an");
  c(an, "setProps");
  function Tn(G) {
    A.setProps({ content: G });
  }
  __name(Tn, "Tn");
  c(Tn, "setContent");
  function Pi() {
    var G = A.state.isVisible, re = A.state.isDestroyed, ae = !A.state.isEnabled, Ae = Dr.isTouch && !A.props.touch, ge = Vl(A.props.duration, 0, Tr.duration);
    if (!(G || re || ae || Ae) && !W().hasAttribute("disabled") && (Le("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (R.style.visibility = "visible"), De(), Je(), A.state.isMounted || (R.style.transition = "none"), ie()) {
        var xt = Fe(), kt = xt.box, It = xt.content;
        Yl([kt, It], 0);
      }
      E = c(function() {
        var ur;
        if (!(!A.state.isVisible || d)) {
          if (d = true, R.offsetHeight, R.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var Ri = Fe(), At = Ri.box, Pt = Ri.content;
            Yl([At, Pt], ge), Pp([At, Pt], "visible");
          }
          it(), Xe(), Ip(Zl, A), (ur = A.popperInstance) == null || ur.forceUpdate(), Le("onMount", [A]), A.props.animation && ie() && lr(ge, function() {
            A.state.isShown = true, Le("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), wr();
    }
  }
  __name(Pi, "Pi");
  c(Pi, "show");
  function zi() {
    var G = !A.state.isVisible, re = A.state.isDestroyed, ae = !A.state.isEnabled, Ae = Vl(A.props.duration, 1, Tr.duration);
    if (!(G || re || ae) && (Le("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, h = false, ie() && (R.style.visibility = "hidden"), We(), sr(), De(true), ie()) {
        var ge = Fe(), xt = ge.box, kt = ge.content;
        A.props.animation && (Yl([xt, kt], Ae), Pp([xt, kt], "hidden"));
      }
      it(), Xe(), A.props.animation ? ie() && yr(Ae, A.unmount) : A.unmount();
    }
  }
  __name(zi, "zi");
  c(zi, "hide");
  function _o(G) {
    ue().addEventListener("mousemove", C), Ip(Qa, C), C(G);
  }
  __name(_o, "_o");
  c(_o, "hideWithInteractivity");
  function Do() {
    A.state.isVisible && A.hide(), A.state.isMounted && (on(), Mt().forEach(function(G) {
      G._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), Zl = Zl.filter(function(G) {
      return G !== A;
    }), A.state.isMounted = false, Le("onHidden", [A]));
  }
  __name(Do, "Do");
  c(Do, "unmount");
  function hs() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), wn(), delete t._tippy, A.state.isDestroyed = true, Le("onDestroy", [A]));
  }
  __name(hs, "hs");
  c(hs, "destroy");
}
__name(tm, "tm");
c(tm, "createTippy");
function xo(t, n) {
  n === void 0 && (n = {});
  var e = Tr.plugins.concat(n.plugins || []);
  Uv();
  var r = Object.assign({}, n, { plugins: e }), a = Hv(t);
  if (false)
    var u, h;
  var b = a.reduce(function(v, d) {
    var f = d && tm(d, r);
    return f && v.push(f), v;
  }, []);
  return Ka(t) ? b[0] : b;
}
__name(xo, "xo");
c(xo, "tippy");
xo.defaultProps = Tr;
xo.setDefaultProps = Qv;
xo.currentInput = Dr;
var lS = Object.assign({}, ho, { effect: c(function(n) {
  var e = n.state, r = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow);
}, "effect") });
xo.setDefaultProps({ render: qp });
var zt = xo;
var eu = c((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
function xe(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ht({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let a = this.helpContent;
        a !== null && (this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(u) {
          u.setContent(a);
        } }), this.addEventListener("mouseenter", this.showHelp));
      }, show: () => {
        this.popup.show();
      }, enable: () => {
        this.popup.enable(), this.help = true;
      }, disable: () => {
        var a;
        (a = this.popup) == null || a.disable(), this.help = false;
      }, destroy: () => {
        var a;
        (a = this.popup) == null || a.destroy();
      } } });
      this.helpableService = at(this.helpableMachine).onTransition((a) => {
        this.debugHelpable && console.log(`helpable: ${Ke(a.value)}`);
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
      let a;
      this.helpId !== "" ? a = this.helpId : a = `${this.tagName.toLowerCase()}-help`;
      let u = document.getElementById(a);
      return u === null ? null : u.content.cloneNode(true);
    }
  }
  __name(n, "n");
  return c(n, "HelpableMixinClass"), M([D], n.prototype, "help", 2), M([D], n.prototype, "helpId", 2), M([D], n.prototype, "debugHelpable", 2), n;
}
__name(xe, "xe");
c(xe, "HelpableMixin");
function me(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(n, "n");
  return c(n, "HoverableMixinClass"), M([D], n.prototype, "hoverable", 2), n;
}
__name(me, "me");
c(me, "HoverableMixin");
var es = /* @__PURE__ */ new Map();
function ts(t) {
  if (es.has(t))
    return es.get(t);
  let n = t.length, e = 0, r = 0, a = 0, u = [];
  for (let h = 0; h < n; h += 1) {
    let b = t[h], v = t[h + 1], d = t[h - 1];
    b === "{" && v === "{" && d !== "\\" ? (a += 1, a === 1 && (r = h), h += 1) : b === "}" && v === "}" && d !== "\\" && a && (a -= 1, a === 0 && (r > e && (u.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), e = r), u.push(Object.freeze({ type: "part", start: r, end: h + 2, value: t.slice(e + 2, h).trim() })), h += 1, e = h + 1));
  }
  return e < n && u.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), es.set(t, Object.freeze(u)), es.get(t);
}
__name(ts, "ts");
c(ts, "parse");
var Yn = /* @__PURE__ */ new WeakMap();
var Fp = /* @__PURE__ */ new WeakMap();
var kr = /* @__PURE__ */ __name(class {
  constructor(n, e) {
    this.expression = e, Yn.set(this, n), n.updateParent("");
  }
  get attributeName() {
    return Yn.get(this).attr.name;
  }
  get attributeNamespace() {
    return Yn.get(this).attr.namespaceURI;
  }
  get value() {
    return Fp.get(this);
  }
  set value(n) {
    Fp.set(this, n || ""), Yn.get(this).updateParent(n);
  }
  get element() {
    return Yn.get(this).element;
  }
  get booleanValue() {
    return Yn.get(this).booleanValue;
  }
  set booleanValue(n) {
    Yn.get(this).booleanValue = n;
  }
}, "kr");
c(kr, "AttributeTemplatePart");
var Ti = /* @__PURE__ */ __name(class {
  constructor(n, e) {
    this.element = n, this.attr = e, this.partList = [];
  }
  get booleanValue() {
    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
  }
  set booleanValue(n) {
    if (this.partList.length !== 1)
      throw new DOMException("Operation not supported", "NotSupportedError");
    this.partList[0].value = n ? "" : null;
  }
  append(n) {
    this.partList.push(n);
  }
  updateParent(n) {
    if (this.partList.length === 1 && n === null)
      this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
    else {
      let e = this.partList.map((r) => typeof r == "string" ? r : r.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, e);
    }
  }
}, "Ti");
c(Ti, "AttributeValueSetter");
var bn = /* @__PURE__ */ new WeakMap();
var Rt = /* @__PURE__ */ __name(class {
  constructor(n, e) {
    this.expression = e, bn.set(this, [n]), n.textContent = "";
  }
  get value() {
    return bn.get(this).map((n) => n.textContent).join("");
  }
  set value(n) {
    this.replace(n);
  }
  get previousSibling() {
    return bn.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return bn.get(this)[bn.get(this).length - 1].nextSibling;
  }
  replace(...n) {
    let e = n.map((r) => typeof r == "string" ? new Text(r) : r);
    e.length || e.push(new Text("")), bn.get(this)[0].before(...e);
    for (let r of bn.get(this))
      r.remove();
    bn.set(this, e);
  }
}, "Rt");
c(Rt, "NodeTemplatePart");
function Eo(t) {
  return { processCallback(n, e, r) {
    var a;
    if (!(typeof r != "object" || !r)) {
      for (let u of e)
        if (u.expression in r) {
          let h = (a = r[u.expression]) !== null && a !== void 0 ? a : "";
          t(u, h);
        }
    }
  } };
}
__name(Eo, "Eo");
c(Eo, "createProcessor");
function So(t, n) {
  t.value = String(n);
}
__name(So, "So");
c(So, "processPropertyIdentity");
function rs(t, n) {
  return typeof n == "boolean" && t instanceof kr && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = n, true) : false;
}
__name(rs, "rs");
c(rs, "processBooleanAttribute");
var tu = Eo(So);
var rm = Eo((t, n) => {
  rs(t, n) || So(t, n);
});
function* nm(t) {
  let n = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = n.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let r = 0; r < e.attributes.length; r += 1) {
        let a = e.attributes.item(r);
        if (a && a.value.includes("{{")) {
          let u = new Ti(e, a);
          for (let h of ts(a.value))
            if (h.type === "string")
              u.append(h.value);
            else {
              let b = new kr(u, h.value);
              u.append(b), yield b;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let r = ts(e.textContent);
      for (let a = 0; a < r.length; a += 1) {
        let u = r[a];
        u.end < e.textContent.length && e.splitText(u.end), u.type === "part" && (yield new Rt(e, u.value));
        break;
      }
    }
}
__name(nm, "nm");
c(nm, "collectParts");
var ns = /* @__PURE__ */ new WeakMap();
var is = /* @__PURE__ */ new WeakMap();
var Kr = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(n, e, r = tu) {
    var a, u;
    super(), Object.getPrototypeOf(this) !== Kr.prototype && Object.setPrototypeOf(this, Kr.prototype), this.appendChild(n.content.cloneNode(true)), is.set(this, Array.from(nm(this))), ns.set(this, r), (u = (a = ns.get(this)).createCallback) === null || u === void 0 || u.call(a, this, is.get(this), e), ns.get(this).processCallback(this, is.get(this), e);
  }
  update(n) {
    ns.get(this).processCallback(this, is.get(this), n);
  }
}, "Kr");
c(Kr, "TemplateInstance");
var ru = /* @__PURE__ */ new WeakMap();
var Up = /* @__PURE__ */ new WeakMap();
var Wp = /* @__PURE__ */ new WeakMap();
var _t = /* @__PURE__ */ __name(class {
  constructor(n, e, r) {
    this.strings = n, this.values = e, this.processor = r;
  }
  static setCSPTrustedTypesPolicy(n) {
    _t.cspTrustedTypesPolicy = n;
  }
  get template() {
    var n, e;
    if (ru.has(this.strings))
      return ru.get(this.strings);
    {
      let r = document.createElement("template"), a = this.strings.length - 1, u = this.strings.reduce((b, v, d) => b + v + (d < a ? `{{ ${d} }}` : ""), ""), h = (e = (n = _t.cspTrustedTypesPolicy) === null || n === void 0 ? void 0 : n.createHTML(u)) !== null && e !== void 0 ? e : u;
      return r.innerHTML = h, ru.set(this.strings, r), r;
    }
  }
  renderInto(n) {
    let e = this.template;
    if (Up.get(n) !== e) {
      Up.set(n, e);
      let r = new Kr(e, this.values, this.processor);
      Wp.set(n, r), n instanceof Rt ? n.replace(...r.children) : n.appendChild(r);
      return;
    }
    Wp.get(n).update(this.values);
  }
}, "_t");
c(_t, "TemplateResult");
_t.cspTrustedTypesPolicy = null;
function Z(t, n) {
  t.renderInto(n);
}
__name(Z, "Z");
c(Z, "render");
var Vp = /* @__PURE__ */ new WeakSet();
function Yp(t) {
  return Vp.has(t);
}
__name(Yp, "Yp");
c(Yp, "isDirective");
function Xp(t, n) {
  return Yp(n) ? (n(t), true) : false;
}
__name(Xp, "Xp");
c(Xp, "processDirective");
function Co(t) {
  return (...n) => {
    let e = t(...n);
    return Vp.add(e), e;
  };
}
__name(Co, "Co");
c(Co, "directive");
var To = /* @__PURE__ */ new WeakMap();
var Oi = /* @__PURE__ */ __name(class {
  constructor(n, e) {
    this.element = n, this.type = e, this.element.addEventListener(this.type, this), To.get(this.element).set(this.type, this);
  }
  set(n) {
    typeof n == "function" ? this.handleEvent = n.bind(this.element) : typeof n == "object" && typeof n.handleEvent == "function" ? this.handleEvent = n.handleEvent.bind(n) : (this.element.removeEventListener(this.type, this), To.get(this.element).delete(this.type));
  }
  static for(n) {
    To.has(n.element) || To.set(n.element, /* @__PURE__ */ new Map());
    let e = n.attributeName.slice(2), r = To.get(n.element);
    return r.has(e) ? r.get(e) : new Oi(n.element, e);
  }
}, "Oi");
c(Oi, "EventHandler");
function Zp(t, n) {
  return t instanceof kr && t.attributeName.startsWith("on") ? (Oi.for(t).set(n), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(Zp, "Zp");
c(Zp, "processEvent");
function im(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(im, "im");
c(im, "isIterable");
function Qp(t, n) {
  if (!im(n))
    return false;
  if (t instanceof Rt) {
    let e = [];
    for (let r of n)
      if (r instanceof _t) {
        let a = document.createDocumentFragment();
        r.renderInto(a), e.push(...a.childNodes);
      } else
        r instanceof DocumentFragment ? e.push(...r.childNodes) : e.push(String(r));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(n).join(" "), true;
}
__name(Qp, "Qp");
c(Qp, "processIterable");
function Jp(t, n) {
  return n instanceof DocumentFragment && t instanceof Rt ? (n.childNodes.length && t.replace(...n.childNodes), true) : false;
}
__name(Jp, "Jp");
c(Jp, "processDocumentFragment");
function Kp(t, n) {
  return n instanceof _t && t instanceof Rt ? (n.renderInto(t), true) : false;
}
__name(Kp, "Kp");
c(Kp, "processSubTemplate");
function os(t, n) {
  Xp(t, n) || rs(t, n) || Zp(t, n) || Kp(t, n) || Jp(t, n) || Qp(t, n) || So(t, n);
}
__name(os, "os");
c(os, "processPart");
var nu = Eo(os);
function U(t, ...n) {
  return new _t(t, n, nu);
}
__name(U, "U");
c(U, "html");
var iu = /* @__PURE__ */ new WeakMap();
var om = Co((...t) => (n) => {
  iu.has(n) || iu.set(n, { i: t.length });
  let e = iu.get(n);
  for (let r = 0; r < t.length; r += 1)
    t[r] instanceof Promise ? Promise.resolve(t[r]).then((a) => {
      r < e.i && (e.i = r, os(n, a));
    }) : r <= e.i && (e.i = r, os(n, t[r]));
});
var am = Co((t) => (n) => {
  var e, r;
  if (!(n instanceof Rt))
    return;
  let a = document.createElement("template"), u = (r = (e = _t.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && r !== void 0 ? r : t;
  a.innerHTML = u;
  let h = document.importNode(a.content, true);
  n.replace(...h.childNodes);
});
function Te(t) {
  class n extends t {
    iconHtml(r) {
      return U`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(r)}</div>`;
    }
    iconSvg(r) {
      return U([r]);
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
  __name(n, "n");
  return c(n, "IconableMixinClass"), n;
}
__name(Te, "Te");
c(Te, "IconableMixin");
var en = c((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
function lt(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(n, "n");
  return c(n, "IfableMixinClass"), M([D], n.prototype, "if", 2), n;
}
__name(lt, "lt");
c(lt, "IfableMixin");
var as = c((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function Ee(t) {
  class n extends t {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var a, u, h, b;
        (a = this.ifTooltip) == null || a.hide(), (u = this.angleTooltip) == null || u.hide(), (h = this.flagTooltip) == null || h.hide(), (b = this.deleteTooltip) == null || b.hide();
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
      pe("menuable:show-menu", {}, this);
    }
    get menuContent() {
      let a = document.getElementById("operation-menu");
      if (a === null || a.content === void 0)
        return null;
      let u = a.content.cloneNode(true), h = document.createDocumentFragment();
      return Z(U`${u}`, h), h;
    }
    initMenuItems(a) {
      if (en(a.reference)) {
        let h = a.popper.querySelector("button[data-operation-menu-if]");
        B.notNull(h), h.disabled = false, this.ifTooltip = h._tippy, this.ifTooltip === void 0 && (this.ifTooltip = zt(h, { animation: false, content: "Set `if' Conditional" }), h.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Dn(a.reference)) {
        let h = a.popper.querySelector("button[data-operation-menu-angle]");
        B.notNull(h), h.disabled = false, this.angleTooltip = h._tippy, this.angleTooltip === void 0 && (this.angleTooltip = zt(h, { animation: false, content: "Change Angle" }), h.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Ln(a.reference)) {
        let h = a.popper.querySelector("button[data-operation-menu-flag]");
        B.notNull(h), h.disabled = false, this.flagTooltip = h._tippy, this.flagTooltip === void 0 && (this.flagTooltip = zt(h, { animation: false, content: "Set Condifitonal Flag" }), h.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let u = a.popper.querySelector("[data-operation-menu-delete]");
      B.notNull(u), this.deleteTooltip = u._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = zt(u, { animation: false, content: "Delete" })), u.addEventListener("mousedown", this.destroyMenu.bind(this)), u.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), pe("menuable:menu-if", {}, this);
    }
    showAngleInspector() {
      this.hideMenu(), pe("menuable:menu-angle", {}, this);
    }
    showFlagInspector() {
      this.hideMenu(), pe("menuable:menu-flag", {}, this);
    }
    dispatchOperationDeleteEvent() {
      pe("menuable:menu-delete", {}, this);
    }
  }
  __name(n, "n");
  return c(n, "MenuableMixinClass"), n;
}
__name(Ee, "Ee");
c(Ee, "MenuableMixin");
var ss = _n(po(), 1);
var ar = c((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function ls(t) {
  class n extends t {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = ht({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        pe("resizeable:init", {}, this);
      }, setInteract: (a, u) => {
        B.need(u.type === "SET_INTERACT", "event type must be SET_INTERACT"), B.notNull(this.resizeHandle);
        let h = (0, ss.default)(this.resizeHandle);
        h.styleCursor(false), h.on("down", this.grabResizeHandle.bind(this)), h.on("up", this.releaseResizeHandle.bind(this)), h.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (a, u) => {
        B.need(u.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, pe("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (a, u) => {
        B.need(u.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, pe("resizeable:release-resize-handle", {}, this);
      }, startResizing: (a, u) => {
        B.need(u.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (a, u) => {
        B.need(u.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), pe("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), pe("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = at(this.resizeableMachine).onTransition((a) => {
        this.debugResizeable && console.log(`resizeable: ${Ke(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, ss.default)(this.resizeHandle).draggable({ modifiers: [ss.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(a) {
      let u = a.modifiers[0];
      if (!u.inRange)
        return;
      let h = u.target.source;
      pe("resizeable:resize-handle-in-snap-range", { snapTargetInfo: h }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
    }
    grabResizeHandle(a) {
      if (a.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: grabResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "GRAB_RESIZE_HANDLE", x: a.offsetX, y: a.offsetY });
    }
    releaseResizeHandle(a) {
      if (a.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: releaseResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "RELEASE_RESIZE_HANDLE" });
    }
    startResizing() {
      this.resizeableService.send({ type: "START_RESIZING" });
    }
    moveResizeHandle(a) {
      let u = this.resizeHandleX + a.dx, h = this.resizeHandleY + a.dy;
      this.moveResizeHandleTo(u, h);
    }
    moveResizeHandleTo(a, u) {
      this.resizeHandleX = a, this.resizeHandleY = u, this.resizeHandle.style.transform = `translate(${a}px, ${u}px)`;
    }
    endResizing() {
      this.resizeableService.send({ type: "END_RESIZING" });
    }
  }
  __name(n, "n");
  return c(n, "ResizeableMixinClass"), M([D], n.prototype, "span", 2), M([D], n.prototype, "resizeHandleX", 2), M([D], n.prototype, "resizeHandleY", 2), M([D], n.prototype, "debugResizeable", 2), M([D], n.prototype, "resizing", 2), M([Oe], n.prototype, "resizeHandle", 2), n;
}
__name(ls, "ls");
c(ls, "ResizeableMixin");
var ed = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var vr = /* @__PURE__ */ __name(class extends Ee(xe(we(Ne(Te(be(me(HTMLElement))))))) {
  get operationType() {
    return Xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ed)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Xs}"`;
  }
}, "vr");
c(vr, "AntiControlGateElement"), vr = M([Q], vr);
function td(t) {
  return /^-?\d+$/.test(t);
}
__name(td, "td");
c(td, "isNumeric");
function Tt(t, n = 4) {
  return (t >= 0 ? "+" : "") + t.toFixed(n);
}
__name(Tt, "Tt");
c(Tt, "forceSigned");
var nt = /* @__PURE__ */ __name(class extends Ee(xe(we(be(me(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Zs;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (B.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this.popup;
    e && e.destroy();
    let r = this.blochInspectorPopupContent();
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(a) {
      a.setContent(r);
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
            <span class="font-mono font-bold">${Tt(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${Tt(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${Tt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${Tt(this.x)}</span>, y:
            <span class="font-mono font-bold">${Tt(this.y)}</span>, z:
            <span class="font-mono font-bold">${Tt(this.z)}</span>
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
  attributeChangedCallback(e, r, a) {
    this.body && r !== a && a !== null && (e === "data-x" && (this.x = parseFloat(a)), e === "data-y" && (this.y = parseFloat(a)), e === "data-z" && (this.z = parseFloat(a)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = c((a) => U`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${a}deg)"></div>`, "vectorLineRect"), r = c((a, u) => U`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${u}(${a}deg)"
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
                  ${r(0, "Y")} ${r(20, "Y")} ${r(40, "Y")}
                  ${r(60, "Y")} ${r(80, "Y")} ${r(100, "Y")}
                  ${r(120, "Y")} ${r(140, "Y")} ${r(160, "Y")}
                  ${r(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Zs}"`;
  }
  updateBlochVector() {
    var r;
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (r = this.popup) == null || r.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return B.notNull(e), parseFloat(e);
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
    return B.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return B.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    return 180 * Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x))) / Math.PI;
  }
}, "nt");
c(nt, "BlochDisplayElement"), M([Oe], nt.prototype, "body", 2), M([Oe], nt.prototype, "vectorLine", 2), M([Oe], nt.prototype, "vectorEnd", 2), M([Oe], nt.prototype, "vector", 2), M([dt], nt.prototype, "vectorEndCircles", 2), M([D], nt.prototype, "x", 2), M([D], nt.prototype, "y", 2), M([D], nt.prototype, "z", 2), nt = M([Q], nt);
var rd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Lt = /* @__PURE__ */ __name(class extends Ee(xe(we(Ne(Te(be(me(HTMLElement))))))) {
  get operationType() {
    return Qs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(rd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Qs}"`;
  }
}, "Lt");
c(Lt, "ControlGateElement"), Lt = M([Q], Lt);
var nd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var qt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(we(Ne(Te(be(me(HTMLElement))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(nd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ma}<${this.if}"` : `"${ma}"`;
  }
}, "qt");
c(qt, "HGateElement"), qt = M([Q], qt);
var id = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends Ee(xe(ap(we(Te(be(me(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(id)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ga}"` : `"${ga}>${this.flag}"`;
  }
}, "Ft");
c(Ft, "MeasurementGateElement"), M([D], Ft.prototype, "value", 2), Ft = M([Q], Ft);
var od = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ut = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(hn(we(Ne(Te(be(me(HTMLElement)))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(od)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ba}"` : `"${ba}(${this.angle.replace("/", "_")})"`;
  }
}, "Ut");
c(Ut, "PhaseGateElement"), Ut = M([Q], Ut);
var us = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var ad = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="26.2" y1="7.47778" x2="29.2" y2="7.47778" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="27.7" y1="6" x2="27.7" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="20.0973" y1="12" x2="25.0353" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="22.7" y1="13" x2="22.7" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13" y1="12" x2="16.4513" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="14" y1="16" x2="16" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13" y1="12" x2="13" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M8.9292 16C8.9292 18.4379 7.39801 20 5.9646 20C4.53119 20 3 18.4379 3 16C3 13.5621 4.53119 12 5.9646 12C7.39801 12 8.9292 13.5621 8.9292 16Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
  <line x1="1" y1="-1" x2="3.34292" y2="-1" transform="matrix(0.570556 0.821259 -0.805999 0.591917 5.9646 18.5332)" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var mr = /* @__PURE__ */ __name(class extends Ee(xe(ls(we(Te(be(me(HTMLElement))))))) {
  get operationType() {
    return Js;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(ad)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(us)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Js}${this.span}"`;
  }
}, "mr");
c(mr, "QftDaggerGateElement"), mr = M([Q], mr);
var sd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var gr = /* @__PURE__ */ __name(class extends Ee(xe(ls(we(Te(be(me(HTMLElement))))))) {
  get operationType() {
    return Ks;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(sd)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(us)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ks}${this.span}"`;
  }
}, "gr");
c(gr, "QftGateElement"), gr = M([Q], gr);
var ld = `<svg
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
var Wt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(we(Ne(Te(be(me(HTMLElement))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ld)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ya}<${this.if}"` : `"${ya}"`;
  }
}, "Wt");
c(Wt, "RnotGateElement"), Wt = M([Q], Wt);
var ud = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(hn(we(Ne(Te(be(me(HTMLElement)))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ud)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${wa}"` : `"${wa}(${this.angle.replace("/", "_")})"`;
  }
}, "Vt");
c(Vt, "RxGateElement"), Vt = M([Q], Vt);
var cd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(hn(we(Ne(Te(be(me(HTMLElement)))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(cd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xa}"` : `"${xa}(${this.angle.replace("/", "_")})"`;
  }
}, "Yt");
c(Yt, "RyGateElement"), Yt = M([Q], Yt);
var pd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Xt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(hn(we(Ne(Te(be(me(HTMLElement)))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(pd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ea}"` : `"${Ea}(${this.angle.replace("/", "_")})"`;
  }
}, "Xt");
c(Xt, "RzGateElement"), Xt = M([Q], Xt);
var dd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var br = /* @__PURE__ */ __name(class extends Ee(xe(we(Ne(Te(be(me(HTMLElement))))))) {
  get operationType() {
    return el;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(dd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${el}"`;
  }
}, "br");
c(br, "SpacerGateElement"), br = M([Q], br);
var fd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends Ee(xe(Ze(we(Ne(Te(be(me(HTMLElement)))))))) {
  get operationType() {
    return tl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(fd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${tl}"`;
  }
}, "Zt");
c(Zt, "SwapGateElement"), Zt = M([Q], Zt);
var hd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(we(Ne(Te(be(me(HTMLElement))))))))) {
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(hd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Sa}<${this.if}"` : `"${Sa}"`;
  }
}, "Qt");
c(Qt, "TGateElement"), Qt = M([Q], Qt);
var vd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var jt = /* @__PURE__ */ __name(class extends Ee(xe(we(Te(be(me(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return hc;
      case "1":
        return vc;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(vd)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "jt");
c(jt, "WriteGateElement"), M([D], jt.prototype, "value", 2), jt = M([Q], jt);
var md = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(we(Ne(Te(be(me(HTMLElement))))))))) {
  get operationType() {
    return Ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(md)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ca}<${this.if}"` : `"${Ca}"`;
  }
}, "Jt");
c(Jt, "XGateElement"), Jt = M([Q], Jt);
var gd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(we(Ne(Te(be(me(HTMLElement))))))))) {
  get operationType() {
    return Ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(gd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ta}<${this.if}"` : `"${Ta}"`;
  }
}, "Kt");
c(Kt, "YGateElement"), Kt = M([Q], Kt);
var bd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ee(xe(lt(Ze(we(Ne(Te(be(me(HTMLElement))))))))) {
  get operationType() {
    return Oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(bd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Oa}<${this.if}"` : `"${Oa}"`;
  }
}, "er");
c(er, "ZGateElement"), er = M([Q], er);
var Ve = c((t) => t instanceof vr || t instanceof nt || t instanceof Lt || t instanceof qt || t instanceof Ft || t instanceof Ut || t instanceof mr || t instanceof gr || t instanceof Wt || t instanceof Vt || t instanceof Yt || t instanceof Xt || t instanceof br || t instanceof Zt || t instanceof Qt || t instanceof jt || t instanceof Jt || t instanceof Kt || t instanceof er, "isOperation");
var yd = c((t) => t != null && t instanceof qt, "isHGateElement");
var wd = c((t) => t != null && t instanceof Jt, "isXGateElement");
var xd = c((t) => t != null && t instanceof Kt, "isYGateElement");
var Ed = c((t) => t != null && t instanceof er, "isZGateElement");
var Oo = c((t) => t != null && t instanceof Ut, "isPhaseGateElement");
var Sd = c((t) => t != null && t instanceof Qt, "isTGateElement");
var Cd = c((t) => t != null && t instanceof Wt, "isRnotGateElement");
var cs = c((t) => t != null && t instanceof Vt, "isRxGateElement");
var ps = c((t) => t != null && t instanceof Yt, "isRyGateElement");
var ds = c((t) => t != null && t instanceof Xt, "isRzGateElement");
var UM = c((t) => t != null && t instanceof br, "isSpacerGateElement");
var Td = c((t) => t != null && t instanceof Zt, "isSwapGateElement");
var ou = c((t) => t != null && t instanceof Lt, "isControlGateElement");
var au = c((t) => t != null && t instanceof vr, "isAntiControlGateElement");
var Od = c((t) => t != null && t instanceof nt, "isBlochDisplayElement");
var WM = c((t) => t != null && t instanceof jt, "isWriteGateElement");
var Md = c((t) => t != null && t instanceof Ft, "isMeasurementGateElement");
var Mo = _n(po(), 1);
var su = c((t) => t !== null && t instanceof Or, "isAngleSliderElement");
var Or = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = ht({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new pt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, r) => {
      r.type === "SET_ANGLE" && (this.denominator = Xi(this.angle));
    }, setAngleInRadian: (e, r) => {
      if (r.type !== "SET_DENOMINATOR")
        return;
      let [, a] = this.findSnapAngle(this.radian);
      this.angle = a;
    }, setRadianInAngle: (e, r) => {
      if (r.type !== "SET_ANGLE")
        return;
      let [a] = this.findSnapAngle(lc(this.angle));
      this.radian = a;
    }, updateSnapAngles: () => {
      this.updateSnapAngles();
    }, updateHandlePosition: () => {
      this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI);
    }, dispatchChangeEvent: () => {
      this.dispatchEvent(new Event("angle-slider-change", { bubbles: true }));
    }, dispatchUpdateEvent: () => {
      this.dispatchEvent(new Event("angle-slider-update", { bubbles: true }));
    } } });
    this.angleSliderService = at(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Ke(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, r, a) {
    r !== a && a !== null && (e === "data-angle" && a !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
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
    let r = Mo.default.getElementRect(e.target).width, a = e.pageX / r;
    this.left = a;
    let u = this.proportionToRadian(a);
    this.setAttribute("data-radian", u.toString());
    let [, h] = this.findSnapAngle(u);
    this.angle !== h && (this.angle = h);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, r = 2 * this.denominator, a = new Array(r - e + 1).fill(null).map((u, h) => h + e);
    this.snapAngles = {};
    for (let u of a)
      this.denominator === 1 ? u === 0 ? this.snapAngles[0] = "0" : u === 1 ? this.snapAngles[Math.PI] = "\u03C0" : u === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[u * Math.PI] = `${u}\u03C0` : u === 0 ? this.snapAngles[0] = "0" : u === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : u === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[u * Math.PI / this.denominator] = `${u}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let r = null, a = null, u = null;
    for (let h in this.snapAngles) {
      let b = Math.abs(parseFloat(h) - e);
      (r === null || b < r) && (r = b, a = parseFloat(h), u = this.snapAngles[h]);
    }
    return B.notNull(a), B.notNull(u), [a, u];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Or");
c(Or, "AngleSliderElement"), M([D], Or.prototype, "angle", 2), M([D], Or.prototype, "radian", 2), M([D], Or.prototype, "denominator", 2), M([D], Or.prototype, "disabled", 2), M([D], Or.prototype, "debug", 2), Or = M([Q], Or);
var Mi = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let r = e.currentTarget;
    B.notNull(r);
    for (let a of this.buttons)
      a.removeAttribute("data-active");
    r.setAttribute("data-active", "");
  }
}, "Mi");
c(Mi, "ButtonGroupElement"), M([dt], Mi.prototype, "buttons", 2), Mi = M([Q], Mi);
var Ii = _n(Ad(), 1);
var ut = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let r = this.mobile !== null && this.mobile !== e.matches;
    this.mobile = e.matches, r && (this.mobile || this.style.removeProperty("top"), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.drawQubitCircles());
  }
  startBasicCircleNotationMode() {
    this.colorPhase = false;
  }
  startColorPhaseMode() {
    this.colorPhase = true;
  }
  attributeChangedCallback(e, r, a) {
    r !== a && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (B.notNull(a), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new pt("unsupported qubit count", this.qubitCount);
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
          throw new pt("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let r = e.getAttribute("data-ket");
      return B.notNull(r), parseInt(r);
    }), B.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    Ii.default.mutate(() => {
      for (let r of this.qubitCircles) {
        let a = r.getAttribute("data-ket");
        B.notNull(a);
        let u = parseInt(a), h = e[u];
        if (h === void 0)
          continue;
        let b = Math.floor(h.abs() * 1e5) / 1e5, v = h.phase() / Math.PI * 180;
        r.setAttribute("data-amplitude-real", h.real.toString()), r.setAttribute("data-amplitude-imag", h.imag.toString()), b === 0 ? r.classList.add("magnitude-0") : (r.classList.remove("magnitude-0"), r.style.setProperty("--magnitude", b.toString()));
        let d = Math.trunc(v);
        d < 0 && (d = 360 + d), r.style.setProperty("--phase", `-${d.toString()}deg`);
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
        throw new pt("unsupported qubit count", this.qubitCount);
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
        throw new pt("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.mobile) {
      let r = this.clientHeight;
      return this.rowCount > 4 && r < e ? r : e;
    } else
      return e;
  }
  get windowWidth() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.mobile) {
      let r = this.clientWidth;
      return this.colCount >= 16 && r < e ? r : e;
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
        throw new pt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    B.notNull(this.window), B.notNull(this.innerContainer), this.qubitCount !== 0 && Ii.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let e = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let a = this.lastRowStartIndex; a <= this.lastRowEndIndex; a++)
        for (let u = this.lastColStartIndex; u <= this.lastColEndIndex; u++)
          e.push({ col: u, row: a });
      let r = document.createDocumentFragment();
      for (let a of this.allQubitCircleElements(e))
        r.appendChild(a);
      this.innerContainer.textContent = "", this.innerContainer.appendChild(r), this.updateVisibleQubitCircleKets();
    });
  }
  update() {
    this.drawNewlyVisibleQubitCircles(), this.removeInvisibleQubitCircles();
  }
  drawNewlyVisibleQubitCircles() {
    this.window !== void 0 && this.innerContainer !== void 0 && (Ii.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, r = this.overscanColEndIndex, a = this.overscanRowStartIndex, u = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === r && this.lastRowStartIndex === a && this.lastRowEndIndex === u)) {
        for (let h = a; h <= u; h++)
          for (let b = e; b <= r; b++)
            (b < this.lastColStartIndex || this.lastColEndIndex < b || h < this.lastRowStartIndex || this.lastRowEndIndex < h) && this.qubitCirclePositions.push({ col: b, row: h });
        this.lastColStartIndex = e, this.lastColEndIndex = r, this.lastRowStartIndex = a, this.lastRowEndIndex = u;
      }
    }), Ii.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let r of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(r);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    Ii.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let r = e.getAttribute("data-col"), a = e.getAttribute("data-row");
        B.notNull(r), B.notNull(a);
        let u = parseInt(r), h = parseInt(a);
        if (u < this.lastColStartIndex || this.lastColEndIndex < u || h < this.lastRowStartIndex || this.lastRowEndIndex < h) {
          let b = e._tippy;
          b !== void 0 && b.destroy(), e.remove();
        }
      }
    });
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let r = e.col + e.row * this.colCount, a = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, u = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, h = document.createElement("div");
    h.className = "qubit-circle magnitude-0", h.setAttribute("data-col", e.col.toString()), h.setAttribute("data-row", e.row.toString()), h.setAttribute("data-ket", r.toString()), h.setAttribute("data-targets", "circle-notation.qubitCircles"), h.setAttribute("data-amplitude-real", "0"), h.setAttribute("data-amplitude-imag", "0"), h.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), h.style.setProperty("top", `${a}px`), h.style.setProperty("left", `${u}px`);
    let b = document.createElement("div");
    b.className = "qubit-circle__magnitude";
    let v = document.createElement("div");
    return v.className = "qubit-circle__phase", h.appendChild(b), h.appendChild(v), h;
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
        throw new pt("unsupported qubit count", this.qubitCount);
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
    let r = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && r++, r;
  }
  get visibleColEndIndex() {
    let e = this.windowWidth + this.windowScrollLeft - this.paddingX, r = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && r++, Math.min(this.colCount - 1, r);
  }
  get visibleRowStartIndex() {
    let e = this.windowScrollTop - this.paddingY;
    if (e < 0)
      return 0;
    let r = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && r++, r;
  }
  get visibleRowEndIndex() {
    let e = this.windowHeight + this.windowScrollTop - this.paddingY, r = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && r++, Math.min(this.rowCount - 1, r);
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
    let r = e.target;
    B.need(r.classList.contains("qubit-circle"), "not a qubit-circle");
    let a = zt(r, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let u = r.getAttribute("data-ket");
    B.notNull(u);
    let h = r.getAttribute("data-amplitude-real");
    B.notNull(h);
    let b = r.getAttribute("data-amplitude-imag");
    B.notNull(b);
    let v = parseInt(u), d = parseFloat(h), f = parseFloat(b), y = new pn(d, f), E = y.abs(), S = y.phase() / Math.PI * 180, C = document.importNode(this.qubitCirclePopupTemplate.content, true), T = C.getElementById("qubit-circle-popup--ket-binary-value"), z = C.getElementById("qubit-circle-popup--ket-decimal-value"), k = C.getElementById("qubit-circle-popup--amplitude"), j = C.getElementById("qubit-circle-popup--amplitude-real-value"), $ = C.getElementById("qubit-circle-popup--amplitude-imag-value"), A = C.getElementById("qubit-circle-popup--probability"), ee = C.getElementById("qubit-circle-popup--probability-value"), R = C.getElementById("qubit-circle-popup--phase"), H = C.getElementById("qubit-circle-popup--phase-value");
    B.notNull(k), B.notNull(j), B.notNull($), B.notNull(A), B.notNull(ee), B.notNull(R), B.notNull(H), T && (T.textContent = v.toString(2).padStart(this.qubitCount, "0")), z && (z.textContent = v.toString()), this.showQubitCirclePopupAmplitude ? (j.textContent = Tt(y.real, 5), $.textContent = `${Tt(y.imag, 5)}i`) : k.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Tt(E * E * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? H.textContent = `${Tt(S, 2)}\xB0` : R.style.display = "none";
    let K = document.createElement("div");
    K.appendChild(C), a.setContent(K.innerHTML), a.show();
  }
  hideQubitCirclePopup(e) {
    let r = e.target;
    B.need(r.classList.contains("qubit-circle"), "not a qubit-circle");
    let a = r._tippy;
    B.notNull(a), a.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "ut");
c(ut, "CircleNotationElement"), M([D], ut.prototype, "qubitCount", 2), M([D], ut.prototype, "qubitCircleSize", 2), M([D], ut.prototype, "colCount", 2), M([D], ut.prototype, "rowCount", 2), M([D], ut.prototype, "paddingX", 2), M([D], ut.prototype, "paddingY", 2), M([D], ut.prototype, "overscanCount", 2), M([D], ut.prototype, "colorPhase", 2), M([D], ut.prototype, "qubitCirclePopupTemplateId", 2), M([D], ut.prototype, "showQubitCirclePopupAmplitude", 2), M([D], ut.prototype, "showQubitCirclePopupProbability", 2), M([D], ut.prototype, "showQubitCirclePopupPhase", 2), M([Oe], ut.prototype, "window", 2), M([Oe], ut.prototype, "innerContainer", 2), M([dt], ut.prototype, "qubitCircles", 2), ut = M([Q], ut);
var Ai = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Ai");
c(Ai, "CircleNotationPanelElement"), M([Oe], Ai.prototype, "circleNotation", 2), Ai = M([Q], Ai);
var Pd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var zd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Nr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(e, r, a) {
    r !== a && a !== null && e === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
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
            ${this.iconHtml(Pd)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(zd)}
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
    for (let r = 0; r < this.gateSets.length; r++)
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
    for (let r of this.popinAnimationGates)
      (e = r.parentElement) == null || e.removeChild(r);
  }
  prevGateSet() {
    this.currentGateSetIndex === 0 ? this.currentGateSetIndex = this.gateSets.length - 1 : this.currentGateSetIndex--;
  }
  nextGateSet() {
    this.currentGateSetIndex === this.gateSets.length - 1 ? this.currentGateSetIndex = 0 : this.currentGateSetIndex++;
  }
  validateCurrentGateSetIndex() {
    B.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), B.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
  }
  toggleGateSets() {
    for (let [e, r] of this.gateSets.entries())
      e === this.currentGateSetIndex ? r.classList.remove("hidden") : r.classList.add("hidden");
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
    return B.notNull(e), e;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((e) => {
      let r = e.children.item(0);
      return B.need(Ve(r), `${r} must be an operation.`), r;
    });
  }
  createPopinAnimationGates() {
    for (let e of this.gatesInActiveGateSet) {
      let r = e.cloneNode(false);
      r.setAttribute("data-targets", "gate-carousel.popinAnimationGates"), r.style.position = "absolute", r.style.top = `${this.offsetHeight}px`, r.style.left = `${e.offsetLeft}px`, this.append(r);
    }
  }
  animatePopinAnimationGates() {
    for (let [e, r] of this.popinAnimationGates.entries()) {
      B.need(e < 4, "#popinGates must be < 4");
      let a = 0;
      e === 0 ? a = 500 : e === 1 ? a = 600 : e === 2 ? a = 700 : e === 3 && (a = 800);
      let u = r.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: a, fill: "forwards", easing: "ease-out" });
      u.onfinish = () => {
        r === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [e, r] of this.dots.entries())
      e === this.currentGateSetIndex ? r.classList.add("dot--active") : r.classList.remove("dot--active");
  }
}, "Nr");
c(Nr, "GateCarouselElement"), M([D], Nr.prototype, "currentGateSetIndex", 2), M([Oe], Nr.prototype, "contentClipper", 2), M([dt], Nr.prototype, "gateSets", 2), M([dt], Nr.prototype, "dots", 2), M([dt], Nr.prototype, "popinAnimationGates", 2), Nr = M([Q], Nr);
var Io = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return B.notNull(e), e;
  }
  initPopup() {
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let r = e.target;
    !this.popup.popper.contains(r) && !this.popup.reference.contains(r) && !Ve(r) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    B.notNull(e);
    let r = e.content.cloneNode(true), a = document.createDocumentFragment();
    return Z(U`${r}`, a), a;
  }
}, "Io");
c(Io, "InspectorButtonElement"), Io = M([Q], Io);
var Ot = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return dc(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), en(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Dn(e)) {
      let r = Xi(e.angle);
      Oo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (cs(e) || ps(e) || ds(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = r.toString(), this.denominatorLabel.textContent = r.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Ln(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    let r = e.target;
    if (!su(r))
      throw new Error(`${r} isn't an angle-slider`);
    this.angleInput.value = r.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let r = e.target;
    if (!su(r))
      throw new Error(`${r} isn't an angle-slider`);
    this.angleInput.value = r.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    B.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (pc(e)) {
      let r, a = Xi(e);
      this.denominatorInput.value = a.toString(), this.denominatorLabel.textContent = a.toString(), this.backupCurrentDenominator(), uc(e, "-2\u03C0") ? (r = `-${a * 2}\u03C0/${a}`, this.angleInput.value = r) : cc(e, "2\u03C0") ? (r = `${a * 2}\u03C0/${a}`, this.angleInput.value = r) : r = e, this.backupCurrentPhi(), this.angleSlider.angle = r, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    B.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    td(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Ot");
c(Ot, "OperationInspectorElement"), M([Oe], Ot.prototype, "ifInput", 2), M([Oe], Ot.prototype, "angleInputLabel", 2), M([Oe], Ot.prototype, "angleInput", 2), M([Oe], Ot.prototype, "angleSlider", 2), M([Oe], Ot.prototype, "denominatorInput", 2), M([Oe], Ot.prototype, "denominatorVariableLabel", 2), M([Oe], Ot.prototype, "denominatorLabel", 2), M([Oe], Ot.prototype, "reduceAngleFractionCheckbox", 2), M([Oe], Ot.prototype, "flagInput", 2), M([D], Ot.prototype, "conditionalGatePaneDisabled", 2), M([D], Ot.prototype, "anglePaneDisabled", 2), M([D], Ot.prototype, "conditionalFlagPaneDisabled", 2), Ot = M([Q], Ot);
var fs = _n(_d(), 1);
var Ht = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let e = zt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let r = document.importNode(this.popupTemplate.content, true), a = new fs.default(this.amplitude), u = r.getElementById("qubit-circle-popup--header"), h = r.getElementById("qubit-circle-popup--ket-binary-value"), b = r.getElementById("qubit-circle-popup--ket-decimal-value"), v = r.getElementById("qubit-circle-popup--amplitude"), d = r.getElementById("qubit-circle-popup--amplitude-real-value"), f = r.getElementById("qubit-circle-popup--amplitude-imag-value"), y = r.getElementById("qubit-circle-popup--probability"), E = r.getElementById("qubit-circle-popup--probability-value"), S = r.getElementById("qubit-circle-popup--phase"), C = r.getElementById("qubit-circle-popup--phase-value");
    B.notNull(u), B.notNull(h), B.notNull(b), B.notNull(v), B.notNull(d), B.notNull(f), B.notNull(y), B.notNull(E), B.notNull(S), B.notNull(C), this.showPopupHeader ? (h.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), b.textContent = this.ket.toString()) : u.style.display = "none", this.showPopupAmplitude ? (d.textContent = Tt(a.re, 5), f.textContent = `${Tt(a.im, 5)}i`) : v.style.display = "none", this.showPopupProbability ? E.textContent = `${Tt(this.magnitude * this.magnitude * 100, 4)}%` : y.style.display = "none", this.showPopupPhase ? C.textContent = `${Tt(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let T = document.createElement("div");
    T.appendChild(r), e.setContent(T.innerHTML), e.show();
  }
  get magnitude() {
    return new fs.default(this.amplitude).abs();
  }
  get phase() {
    return new fs.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let e = this._tippy;
    B.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "Ht");
c(Ht, "QubitCircleElement"), M([D], Ht.prototype, "ket", 2), M([D], Ht.prototype, "qubitCount", 2), M([D], Ht.prototype, "amplitude", 2), M([D], Ht.prototype, "hidePhase", 2), M([D], Ht.prototype, "popupTemplateId", 2), M([D], Ht.prototype, "showPopupHeader", 2), M([D], Ht.prototype, "showPopupAmplitude", 2), M([D], Ht.prototype, "showPopupProbability", 2), M([D], Ht.prototype, "showPopupPhase", 2), M([D], Ht.prototype, "darkMode", 2), Ht = M([Q], Ht);
var Dd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var kd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var tn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = ht({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, r) => {
      if (r.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let a = document.createElement("span");
      a.id = "ripple";
      let u = Math.max(this.clientWidth, this.clientHeight), h = u / 2, b = this.getBoundingClientRect(), v = b.left + window.pageXOffset, d = b.top + window.pageYOffset;
      a.setAttribute("part", "ripple"), a.setAttribute("data-target", "run-circuit-button.ripple"), a.style.width = a.style.height = `${u}px`, a.style.left = `${r.clientX - (v + h)}px`, a.style.top = `${r.clientY - (d + h)}px`, this.body.appendChild(a);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = at(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Ke(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, r, a) {
    r !== a && e === "data-running" && a !== null && this.runCircuitButtonService.send({ type: "FINISH" });
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
    return U([Dd]);
  }
  get tailSpinIcon() {
    return U([kd]);
  }
}, "tn");
c(tn, "RunCircuitButtonElement"), M([D], tn.prototype, "running", 2), M([D], tn.prototype, "debug", 2), M([Oe], tn.prototype, "body", 2), M([Oe], tn.prototype, "ripple", 2), tn = M([Q], tn);
var Gr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let r = window.getComputedStyle(this);
    this.marginTop = parseFloat(r.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(r.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
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
}, "Gr");
c(Gr, "SlideInElement"), M([D], Gr.prototype, "direction", 2), M([D], Gr.prototype, "directionDesktop", 2), M([D], Gr.prototype, "duration", 2), M([D], Gr.prototype, "marginTop", 2), M([D], Gr.prototype, "marginBottom", 2), Gr = M([Q], Gr);
var rn = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "rn");
c(rn, "CircuitBlockElement"), M([D], rn.prototype, "comment", 2), M([D], rn.prototype, "finalized", 2), rn = M([Q], rn);
var Lr = c((t) => t != null && t instanceof gt, "isCircuitStepElement");
var ke = c((t, n) => Array.from(t.reduce((e, r, a, u) => {
  let h = n(r, a, u), b = e.get(h);
  return b ? b.push(r) : e.set(h, [r]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var gt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = ht({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, r) => {
      if (!(r.type === "SNAP_DROPZONE" || r.type === "OCCUPY_DROPZONE"))
        return;
      let a = r.dropzone, u = this.bit(a);
      B.notNull(a.operation), a.operation.bit = u;
    }, updateResizeableSpanDropzones: (e, r) => {
      if (!(r.type === "SNAP_DROPZONE" || r.type === "UNSNAP_DROPZONE" || r.type === "OCCUPY_DROPZONE" || r.type === "DELETE_OPERATION" || r.type === "RESIZE_OPERATION"))
        return;
      let a = 1;
      for (let u of this.dropzones) {
        let h = u.operation;
        if (ar(h)) {
          a = h.span;
          continue;
        }
        h === null && (a > 1 ? (u.occupied = true, a -= 1) : u.occupied = false);
      }
    }, dispatchSnapEvent: (e, r) => {
      r.type === "SNAP_DROPZONE" && pe("circuit-step:qpu-operation-snap", { dropzone: r.dropzone }, this);
    }, dispatchUnsnapEvent: (e, r) => {
      r.type === "UNSNAP_DROPZONE" && pe("circuit-step:qpu-operation-unsnap", { dropzone: r.dropzone }, this);
    }, dispatchDeleteOperationEvent: (e, r) => {
      r.type === "DELETE_OPERATION" && pe("circuit-step:delete-qpu-operation", { dropzone: r.dropzone }, this);
    }, dispatchResizeOperationEvent: (e, r) => {
      r.type === "RESIZE_OPERATION" && pe("circuit-step:resize-qpu-operation", { dropzone: r.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = at(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Ke(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [r, a] of Object.entries(this.dropzones)) {
      if (!a.occupied)
        continue;
      let u = parseInt(r, 10) + 1;
      if (u > e && (e = u), ar(a.operation)) {
        let h = u + a.operation.span - 1;
        h > e && (e = h);
      }
    }
    return B.need(0 <= e && e <= Zi.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
  attributeChangedCallback(e, r, a) {
    if (r !== a && (e === "data-active" && (a !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (a !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let u of this.dropzones)
        a !== null ? u.shadow = true : u.shadow = false;
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let h of this.dropzones)
      h.connectTop = false, h.connectBottom = false;
    let r = this.controlGateDropzones, a = this.antiControlGateDropzones, u = this.controllableDropzones(e);
    for (let h of u)
      Qi(h.operation) && (h.operation.controls = [], h.operation.antiControls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), r.length === 1 && u.length === 0) {
      r[0].operation.disable();
      return;
    }
    if (a.length === 1 && u.length === 0) {
      a[0].operation.disable();
      return;
    }
    r.length === 0 && a.length === 0 || (u.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e));
  }
  updateSwapConnections(e) {
    let r = e == null ? void 0 : e.disableSwap, a = this.swapGateDropzones;
    if (a.length !== 2 || r)
      for (let u of a)
        u.operation.disable();
    else {
      for (let h of a)
        h.operation.enable(), h.connectTop = a.some((v) => this.bit(v) < this.bit(h)), h.connectBottom = a.some((v) => this.bit(v) > this.bit(h));
      let u = a.map((h) => this.bit(h));
      for (let h of this.freeDropzones) {
        let b = Math.min(...u), v = Math.max(...u);
        b < this.bit(h) && this.bit(h) < v && (h.connectTop = true, h.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e != null && e.disablePhasePhase)
      return;
    let r = this.phaseGateDropzones;
    for (let a of r) {
      let u = a.operation;
      if (u.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let h = r.filter((b) => {
        if (!Oo(b.operation))
          throw new Error(`${b.operation} isn't a phase-gate element.`);
        return u.angle === b.operation.angle;
      }).map((b) => this.bit(b));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (h = h.slice(0, e.maxPhasePhaseTargetGates)), h.includes(this.bit(a)) && (a.connectTop = h.some((b) => b < this.bit(a)), a.connectBottom = h.some((b) => b > this.bit(a)));
    }
    for (let a of this.freeDropzones) {
      let h = this.phaseGateDropzones.filter((d) => d.connectTop || d.connectBottom).map((d) => this.bit(d)), b = Math.min(...h), v = Math.max(...h);
      b < this.bit(a) && this.bit(a) < v && (a.connectTop = true, a.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let r = this.controlGateDropzones, a = r.map((h) => this.bit(h)), u = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? a = [] : e.maxControlControlTargetGates > 1 && (a = a.slice(0, e.maxControlControlTargetGates)));
    for (let h of r) {
      u += 1;
      let b = h.operation;
      e != null && e.disableControlControl || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && u > e.maxControlControlTargetGates) ? b.disable() : (b.enable(), h.connectTop = a.some((v) => this.bit(h) > v), h.connectBottom = a.some((v) => this.bit(h) < v));
    }
  }
  updateControlledUConnections(e) {
    let r = this.controllableDropzones(e), a = this.controlGateDropzones, u = this.antiControlGateDropzones, h = [...new Set(r.map((C) => C.operationName))], b = this.numControlGateDropzones(e, h), v = a.map((C) => this.bit(C)), d = u.map((C) => this.bit(C)), f = v.concat(d), y = b === null ? f : f.slice(0, b), E = r.map((C) => this.bit(C)), S = y.concat(E);
    for (let [C, T] of Object.entries(a)) {
      let z = T.operation;
      T.connectBottom = S.some((k) => this.bit(T) < k), T.connectTop = S.some((k) => this.bit(T) > k), b === null || b !== null && parseInt(C) < b ? z.enable() : (T.connectTop = Math.max(...S) > this.bit(T), z.disable());
    }
    for (let [C, T] of Object.entries(u)) {
      let z = T.operation;
      T.connectBottom = S.some((k) => this.bit(T) < k), T.connectTop = S.some((k) => this.bit(T) > k), b === null || b !== null && parseInt(C) < b ? z.enable() : (T.connectTop = Math.max(...S) > this.bit(T), z.disable());
    }
    for (let C of r) {
      if (!Qi(C.operation))
        throw new Error(`${C.operation} isn't controllable.`);
      C.operation.controls = this.controlBits(C, v, e), C.operation.antiControls = d, C.connectTop = S.some((T) => T < this.bit(C)), C.connectBottom = S.some((T) => T > this.bit(C));
    }
  }
  updateFreeDropzoneConnections(e) {
    let r = this.controllableDropzones(e), a = this.controlGateDropzones.filter((f) => ou(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), u = this.antiControlGateDropzones.filter((f) => au(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), h = r.map((f) => this.bit(f)), b = a.concat(u).concat(h), v = Math.min(...b), d = Math.max(...b);
    for (let f of this.freeDropzones)
      v < this.bit(f) && this.bit(f) < d && (f.connectTop = true, f.connectBottom = true);
  }
  controlBits(e, r, a) {
    let u = r;
    return a && (a.maxChControlGates > 0 && e.operationName === "h-gate" ? u = r.slice(0, a.maxChControlGates) : a.maxCnotControlGates > 0 && e.operationName === "x-gate" ? u = r.slice(0, a.maxCnotControlGates) : a.maxCyControlGates > 0 && e.operationName === "y-gate" ? u = r.slice(0, a.maxCyControlGates) : a.maxCzControlGates > 0 && e.operationName === "z-gate" ? u = r.slice(0, a.maxCzControlGates) : a.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? u = r.slice(0, a.maxCphaseControlGates) : a.maxCtControlGates > 0 && e.operationName === "t-gate" ? u = r.slice(0, a.maxCtControlGates) : a.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? u = r.slice(0, a.maxCrnotControlGates) : a.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? u = r.slice(0, a.maxCrxControlGates) : a.maxCryControlGates > 0 && e.operationName === "ry-gate" ? u = r.slice(0, a.maxCryControlGates) : a.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? u = r.slice(0, a.maxCrzControlGates) : a.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (u = r.slice(0, a.maxCswapControlGates))), u;
  }
  bit(e) {
    let r = this.dropzones.indexOf(e);
    return B.need(r !== -1, "circuit-dropzone not found."), r;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => e.operation === null);
  }
  dropzoneAt(e) {
    let r = this.dropzones[e];
    return B.notNull(r), r;
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new de();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let r = new de();
    this.append(r), r.put(e);
  }
  get swapGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.occupiedDropzones.filter((e) => ou(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => au(e.operation));
  }
  numControlGateDropzones(e, r) {
    if (e === void 0)
      return null;
    let a = 0;
    return r.includes("h-gate") && !e.disableCh && e.maxChControlGates > a && (a = e.maxChControlGates), r.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > a && (a = e.maxCnotControlGates), r.includes("y-gate") && !e.disableCy && e.maxCyControlGates > a && (a = e.maxCyControlGates), r.includes("z-gate") && !e.disableCz && e.maxCzControlGates > a && (a = e.maxCzControlGates), r.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > a && (a = e.maxCphaseControlGates), r.includes("t-gate") && !e.disableCt && e.maxCtControlGates > a && (a = e.maxCtControlGates), r.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > a && (a = e.maxCrnotControlGates), r.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > a && (a = e.maxCrxControlGates), r.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > a && (a = e.maxCryControlGates), r.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > a && (a = e.maxCrzControlGates), r.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > a && (a = e.maxCswapControlGates), a === 0 ? null : a;
  }
  controllableDropzones(e) {
    let r = 0, a = 0, u = 0, h = 0, b = 0, v = 0, d = 0, f = 0, y = 0, E = 0;
    return this.occupiedDropzones.filter((S) => Qi(S.operation)).filter((S) => e === void 0 ? true : yd(S.operation) ? (r += 1, e.maxChTargetGates !== 0 && r > e.maxChTargetGates ? false : !e.disableCh) : wd(S.operation) ? (a += 1, e.maxCnotTargetGates !== 0 && a > e.maxCnotTargetGates ? false : !e.disableCnot) : xd(S.operation) ? (u += 1, e.maxCyTargetGates !== 0 && u > e.maxCyTargetGates ? false : !e.disableCy) : Ed(S.operation) ? (h += 1, e.maxCzTargetGates !== 0 && h > e.maxCzTargetGates ? false : !e.disableCz) : Oo(S.operation) ? (b += 1, e.maxCphaseTargetGates !== 0 && b > e.maxCphaseTargetGates ? false : !e.disableCphase) : Sd(S.operation) ? (v += 1, e.maxCtTargetGates !== 0 && v > e.maxCtTargetGates ? false : !e.disableCt) : Cd(S.operation) ? (d += 1, e.maxCrnotTargetGates !== 0 && d > e.maxCrnotTargetGates ? false : !e.disableCrnot) : cs(S.operation) ? (f += 1, e.maxCrxTargetGates !== 0 && f > e.maxCrxTargetGates ? false : !e.disableCrx) : ps(S.operation) ? (y += 1, e.maxCryTargetGates !== 0 && y > e.maxCryTargetGates ? false : !e.disableCry) : ds(S.operation) ? (E += 1, e.maxCrzTargetGates !== 0 && E > e.maxCrzTargetGates ? false : !e.disableCrz) : Td(S.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    pe("circuit-step:update", {}, this);
  }
  deleteOperation(e) {
    let r = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: r });
  }
  resizeOperation(e) {
    let r = e.target;
    this.circuitStepService.send({ type: "RESIZE_OPERATION", dropzone: r });
  }
  dispatchMouseenterEvent() {
    pe("circuit-step:mouseenter", {}, this);
  }
  dispatchMouseleaveEvent() {
    pe("circuit-step:mouseleave", {}, this);
  }
  maybeDispatchClickEvent(e) {
    Ve(e.target) || pe("circuit-step:click", {}, this);
  }
  snapDropzone(e) {
    let r = e.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: r });
  }
  unsnapDropzone(e) {
    let r = e.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: r });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(e) {
    let r = e.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: r });
  }
  serialize() {
    let e = [];
    for (let [r, a] of ke(this.operations, (u) => u.constructor))
      switch (r) {
        case qt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.if))
            for (let [v, d] of ke(b, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, E = d.map((C) => C.bit), S = { type: y, targets: E };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Jt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.if))
            for (let [v, d] of ke(b, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, E = d.map((C) => C.bit), S = { type: y, targets: E };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Kt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.if))
            for (let [v, d] of ke(b, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, E = d.map((C) => C.bit), S = { type: y, targets: E };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case er: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.if))
            for (let [v, d] of ke(b, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, E = d.map((C) => C.bit), S = { type: y, targets: E };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Ut: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.angle))
            for (let [v, d] of ke(b, (f) => f.if))
              for (let [f, y] of ke(d, (E) => E.controls.toString())) {
                let E = y[0], S = E.operationType, C = y.map((z) => z.bit), T = { type: S, targets: C };
                v !== "" && (T.if = v), h !== "" && (T.angle = h), f !== "" && (T.controls = E.controls), E.antiControls.length > 0 && (T.antiControls = E.antiControls), e.push(T);
              }
          break;
        }
        case Qt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.if))
            for (let [v, d] of ke(b, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, E = d.map((C) => C.bit), S = { type: y, targets: E };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Wt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.if))
            for (let [v, d] of ke(b, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, E = d.map((C) => C.bit), S = { type: y, targets: E };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Vt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.angle))
            for (let [v, d] of ke(b, (f) => f.if))
              for (let [f, y] of ke(d, (E) => E.controls.toString())) {
                let E = y[0], S = E.operationType, C = y.map((z) => z.bit), T = { type: S, targets: C };
                v !== "" && (T.if = v), h !== "" && (T.angle = h), f !== "" && (T.controls = E.controls), E.antiControls.length > 0 && (T.antiControls = E.antiControls), e.push(T);
              }
          break;
        }
        case Yt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.angle))
            for (let [v, d] of ke(b, (f) => f.if))
              for (let [f, y] of ke(d, (E) => E.controls.toString())) {
                let E = y[0], S = E.operationType, C = y.map((z) => z.bit), T = { type: S, targets: C };
                v !== "" && (T.if = v), h !== "" && (T.angle = h), f !== "" && (T.controls = E.controls), E.antiControls.length > 0 && (T.antiControls = E.antiControls), e.push(T);
              }
          break;
        }
        case Xt: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.angle))
            for (let [v, d] of ke(b, (f) => f.if))
              for (let [f, y] of ke(d, (E) => E.controls.toString())) {
                let E = y[0], S = E.operationType, C = y.map((z) => z.bit), T = { type: S, targets: C };
                v !== "" && (T.if = v), h !== "" && (T.angle = h), f !== "" && (T.controls = E.controls), E.antiControls.length > 0 && (T.antiControls = E.antiControls), e.push(T);
              }
          break;
        }
        case br: {
          let u = a, h = u[0].operationType, b = u.map((d) => d.bit), v = { type: h, targets: b };
          e.push(v);
          break;
        }
        case gr: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.span)) {
            let d = b[0].operationType, f = b.map((E) => E.bit), y = { type: d, span: h, targets: f };
            e.push(y);
          }
          break;
        }
        case mr: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.span)) {
            let d = b[0].operationType, f = b.map((E) => E.bit), y = { type: d, span: h, targets: f };
            e.push(y);
          }
          break;
        }
        case Zt: {
          let u = a.filter((d) => !d.disabled);
          if (u.length !== 2)
            break;
          let h = u[0].operationType, b = u[0].controls, v = { type: h, targets: [u[0].bit, u[1].bit] };
          b !== void 0 && b.length > 0 && (v.controls = b), e.push(v);
          break;
        }
        case Lt: {
          let u = a.filter((b) => !b.disabled);
          if (u.length < 2 || this.operations.some((b) => Qi(b) && b.controls.length > 0))
            break;
          let h = u.map((b) => b.bit);
          e.push({ type: u[0].operationType, targets: h });
          break;
        }
        case vr:
          break;
        case nt: {
          let u = a, h = a.map((b) => b.bit);
          e.push({ type: u[0].operationType, targets: h });
          break;
        }
        case jt: {
          let u = a;
          for (let [, h] of ke(u, (b) => b.value)) {
            let b = h.map((v) => v.bit);
            e.push({ type: h[0].operationType, targets: b });
          }
          break;
        }
        case Ft: {
          let u = a;
          for (let [h, b] of ke(u, (v) => v.flag)) {
            let v = b.map((y) => y.bit), f = { type: b[0].operationType, targets: v };
            h !== "" && (f.flag = h), e.push(f);
          }
          break;
        }
        default:
          throw new pt("Unrecognized operation", { klass: r });
      }
    return e;
  }
  get operations() {
    return this.occupiedDropzones.map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((r) => r.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
}, "gt");
c(gt, "CircuitStepElement"), M([D], gt.prototype, "active", 2), M([D], gt.prototype, "breakpoint", 2), M([D], gt.prototype, "shadow", 2), M([D], gt.prototype, "keep", 2), M([D], gt.prototype, "debug", 2), M([dt], gt.prototype, "dropzones", 2), M([dt], gt.prototype, "freeDropzones", 2), M([dt], gt.prototype, "occupiedDropzones", 2), gt = M([Q], gt);
var Gd = _n(po(), 1);
var Nd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Po = c((t) => t != null && t instanceof de, "isCircuitDropzoneElement");
var Ao;
var de = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ha(this, Ao, null);
    this.occupied = false;
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.targets = "circuit-step.dropzones circuit-step.freeDropzones";
    this.debug = false;
    this.circuitDropzoneMachine = ht({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      B.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      B.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, pe("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, pe("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      pe("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, r) => {
      r.type === "PUT_OPERATION" && (this.append(r.operation), this.operationName = r.operation.tagName.toLocaleLowerCase(), this.occupied = true, r.operation.snapped = true);
    }, deleteOperation: (e, r) => {
      r.type === "DELETE_OPERATION" && (this.removeAttribute("data-operation-name"), this.occupied = false, this.removeChild(r.operation));
    }, resizeOperation: () => {
      pe("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      pe("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      pe("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = at(this.circuitDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`circuit-dropzone: ${e.value}`);
    });
  }
  get noConnections() {
    return !this.connectTop && !this.connectBottom;
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
    let { signal: e } = va(this, Ao, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = fa(this, Ao)) == null || e.abort();
  }
  attributeChangedCallback(e, r, a) {
    r !== a && e === "data-occupied" && (a !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
  }
  update() {
    Z(U`<style>
          #body {
            position: relative;
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

        <div id="body" part="body"><slot></slot>${this.wireSvg}</div>`, this.shadowRoot);
  }
  put(e) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: e });
  }
  get circuitStep() {
    let e = this.parentElement;
    return B.notNull(e), Lr(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Gd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: r });
  }
  resizeOperation(e) {
    let r = e.target;
    if (!ar(r))
      throw new Error(`${r} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([Nd]);
  }
}, "de");
c(de, "CircuitDropzoneElement"), Ao = /* @__PURE__ */ new WeakMap(), M([D], de.prototype, "occupied", 2), M([D], de.prototype, "operationName", 2), M([D], de.prototype, "inputWireQuantum", 2), M([D], de.prototype, "outputWireQuantum", 2), M([D], de.prototype, "connectTop", 2), M([D], de.prototype, "connectBottom", 2), M([D], de.prototype, "shadow", 2), M([D], de.prototype, "targets", 2), M([D], de.prototype, "debug", 2), de = M([Q], de);
var yn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ht({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, r) => {
      if (r.type !== "GRAB_OPERATION")
        return;
      let a = r.operation;
      as(a) && a.menu && a.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, r) => {
      r.type !== "GRAB_OPERATION" && r.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(r.operation);
    }, snapOperationIntoDropzone: (e, r) => {
      if (r.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let a = r.operation, u = this.circuit.snapTargetAt(r.x, r.y);
      if (a.snapped = true, u.dropzone === null) {
        let h = u.stepIndex;
        B.notNull(h);
        let b = this.circuit.addShadowStepAfter(h), v = b.dropzones[u.wireIndex];
        B.notNull(v), v.append(a), v.operationName = a.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(b.dropzones);
      } else
        u.dropzone.append(a);
    }, snapResizeHandleIntoDropzone: (e, r) => {
      if (r.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let a = r.operation;
      if (!ar(a))
        throw new Error(`${a} is not resizeable`);
      let u = a.dropzone;
      if (!Po(u))
        throw new Error(`${u} is not a circuit dropzone`);
      B.notNull(u.circuitStep);
      let h = u.circuitStep.dropzones.indexOf(u), v = this.circuit.resizeHandleSnapTargetAt(r.x, r.y).wireIndex - h + 1;
      if (!fc(v))
        throw new Error(`Invalid span: ${v}`);
      a.span = v;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < Zi.MAX_QUBIT_COUNT && this.circuit.appendWire();
    }, maybeRemoveLastEmptyWires: () => {
      this.circuit.removeLastEmptyWires();
    }, resizeCircuit: () => {
      this.circuit.resize(), this.dispatchEvent(new Event("circuit-editor-resize", { bubbles: true }));
    }, setSnapTargets: (e, r) => {
      r.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(r.operation);
    }, setResizeHandleSnapTargets: (e, r) => {
      r.type === "GRAB_RESIZE_HANDLE" && this.circuit.setResizeHandleSnapTargets(r.operation);
    }, setBreakpoint: (e, r) => {
      r.type === "CLICK_STEP" && this.circuit.setBreakpoint(r.step);
    }, activateStep: (e, r) => {
      r.type !== "MOUSE_ENTER_STEP" && r.type !== "SNAP_STEP" || (r.step.active = true);
    }, deactivateStep: (e, r) => {
      r.type !== "MOUSE_LEAVE_STEP" && r.type !== "UNSNAP_STEP" || (r.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (e, r) => {
      r.type !== "END_DRAGGING_OPERATION" || r.operation.snapped || this.inspectorButton !== void 0 && this.inspectorButton.isInspectorShown && this.inspectorButton.inspector.disableAllPanes();
    }, initOperationMenu: (e, r) => {
      if (r.type !== "DROP_OPERATION")
        return;
      let a = r.operation;
      as(a) && a.initMenu();
    }, showOperationMenu: (e, r) => {
      r.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || r.operation.showMenu());
    }, showOperationInspectorIf: (e, r) => {
      r.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(r.operation);
    }, showOperationInspectorAngle: (e, r) => {
      r.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(r.operation);
    }, showOperationInspectorFlag: (e, r) => {
      r.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(r.operation);
    }, setOperationIf: (e, r) => {
      r.type === "SET_OPERATION_IF" && (r.operation.if = r.if);
    }, setOperationAngle: (e, r) => {
      r.type === "SET_OPERATION_ANGLE" && (r.operation.angle = r.angle, r.operation.reducedAngle = r.reducedAngle);
    }, setOperationFlag: (e, r) => {
      r.type === "SET_OPERATION_FLAG" && (r.operation.flag = r.flag);
    }, maybeUpdateOperationInspector: (e, r) => {
      if (r.type !== "ACTIVATE_OPERATION" || this.inspectorButton === void 0)
        return;
      let a = r.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(a);
    } } });
    this.circuitEditorService = at(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Ke(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let r = e.target;
    if (qa(r))
      r.draggable = true;
    else
      throw new pt("Not a draggable element.", { el: r });
  }
  enableResizing(e) {
    let r = e.target;
    if (ar(r))
      r.resizeable = true;
    else
      throw new pt("Not a resizeable element.", { el: r });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let a of this.circuit.operations)
        as(a) && a.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var a;
    let r = e.target;
    !Ve(r) && this.inspectorButton && !((a = this.inspectorButton) != null && a.popup.popper.contains(r)) && !this.inspectorButton.popup.reference.contains(r) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: r });
  }
  showOperationMenu(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: r });
  }
  showOperationInspectorIf(e) {
    let r = e.target;
    if (!en(r))
      throw new Error(`${r} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: r });
  }
  showOperationInspectorAngle(e) {
    let r = e.target;
    if (!Dn(r))
      throw new Error(`${r} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: r });
  }
  showOperationInspectorFlag(e) {
    let r = e.target;
    if (!Ln(r))
      throw new Error(`${r} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: r });
  }
  setOperationIf(e) {
    let r = e.target, a = this.activeOperation;
    if (!en(a))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: a, if: r.if });
  }
  setOperationAngle(e) {
    let r = e.target, a = this.activeOperation;
    if (B.notNull(a), !Dn(a))
      throw new Error(`${a.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: a, angle: r.angle, reducedAngle: r.reduceAngleFraction ? r.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let r = e.target, a = this.activeOperation;
    if (!Ln(a))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: a, flag: r.flag });
  }
  grabOperation(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: r });
  }
  grabResizeHandle(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: r });
  }
  releaseResizeHandle(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: r });
  }
  releaseOperation(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: r });
  }
  resizeEnd(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: r });
  }
  endDraggingOperation(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: r });
  }
  dropOperation(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: r });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let r = e.target;
    if (!Lr(r))
      throw new Error(`${r} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: r });
  }
  snapStep(e) {
    let r = e.target;
    if (!Lr(r))
      throw new Error(`${r} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: r });
  }
  unsnapStep(e) {
    let r = e.target;
    if (!Lr(r))
      throw new Error(`${r} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: r });
  }
  operationInSnapRange(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    let u = e.detail.snapTargetInfo, h = u.x, b = u.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: r, x: h, y: b });
  }
  resizeHandleInSnapRange(e) {
    let r = e.target;
    if (!Ve(r))
      throw new Error(`${r} must be an Operation.`);
    let u = e.detail.snapTargetInfo, h = u.x, b = u.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: r, x: h, y: b });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let r = e.target;
    if (!Lr(r))
      throw new Error(`${r} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: r });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let r = e.target;
    if (!Lr(r))
      throw new Error(`${r} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: r });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "yn");
c(yn, "CircuitEditorElement"), M([D], yn.prototype, "debug", 2), M([Oe], yn.prototype, "circuit", 2), M([Oe], yn.prototype, "inspectorButton", 2), yn = M([Q], yn);
var Ro;
var zo = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ha(this, Ro, null);
  }
  connectedCallback() {
    let { signal: e } = va(this, Ro, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = fa(this, Ro)) == null || e.abort();
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
    qa(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), ar(e) && (e.resizeable = true), eu(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => Ve(e));
  }
  newOperation(e) {
    let r = e.target;
    this.assertOperation(r);
    let a = r.cloneNode(false);
    this.assertOperation(a), eu(r) && r.disableHelp(), this.prepend(a), this.initOperation(a);
  }
  deleteOperation(e) {
    let r = e.target;
    this.assertOperation(r), this.removeChild(r);
  }
  assertOperation(e) {
    if (!Ve(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "zo");
c(zo, "PaletteDropzoneElement"), Ro = /* @__PURE__ */ new WeakMap(), zo = M([Q], zo);
var se = /* @__PURE__ */ __name(class extends me(HTMLElement) {
  constructor() {
    super(...arguments);
    this.minStepCount = 1;
    this.minWireCount = 1;
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
    this.quantumCircuitMachine = ht({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = at(this.quantumCircuitMachine).onTransition((e) => {
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
    return this.steps.find((r) => r.active) || null;
  }
  fetchStepIndex(e) {
    let r = this.steps.indexOf(e);
    return B.need(r !== -1, `circuit-step index of ${e} not found.`), r;
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
    let e = null, r = 0;
    for (let a of this.steps)
      a.wireCount > 0 && a.wireCount > r && (e = a, r = a.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let r = 0; r < e; r++)
      this.append(new gt());
  }
  stepAt(e) {
    let r = this.steps[e];
    return B.notNull(r), r;
  }
  addShadowStepAfter(e) {
    let r = new gt();
    r.shadow = true;
    for (let a = 0; a < this.wireCount; a++)
      r.appendDropzone();
    if (e === -1)
      this.prepend(r);
    else {
      let a = this.steps[e];
      B.notNull(a.parentElement), a.parentElement.insertBefore(r, a.nextSibling);
    }
    return r;
  }
  activateStep(e) {
    e.active = true;
  }
  deactivateAllSteps() {
    for (let e of this.steps)
      e.active = false;
  }
  setBreakpoint(e) {
    for (let r of this.steps)
      r.breakpoint = false;
    e.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((r) => r.breakpoint) || null;
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
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), pe("quantum-circuit:init", {}, this);
  }
  attributeChangedCallback(e, r, a) {
    r !== a && (e === "data-editing" && (a !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && a !== null && this.makeOperationsHoverable(), e === "data-json" && a !== "" && a !== null && (this.loadFromJson(a), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let r = e.target;
    this.updateStepOperationAttributes(r);
  }
  updateStepOperationAttributes(e) {
    e.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    pe("quantum-circuit:mouseleave", {}, this);
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new qt();
      return a && u.disable(), u;
    }, ...r), this.resize(), this;
  }
  x(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Jt();
      return a && u.disable(), u;
    }, ...r), this;
  }
  y(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Kt();
      return a && u.disable(), u;
    }, ...r), this;
  }
  z(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new er();
      return a && u.disable(), u;
    }, ...r), this;
  }
  phase(...e) {
    let r = "", a, u;
    if (typeof e[0] == "number")
      a = e;
    else if (typeof e[0] == "string")
      r = e[0], a = e.slice(1);
    else {
      let b = e[0];
      a = b.targets, u = b.disabled;
    }
    let h = this.applyOperationToTargets(() => {
      let b = new Ut();
      return b.angle = r, u && b.disable(), b;
    }, ...a);
    return a.length > 1 && this.updateStepOperationAttributes(h), this;
  }
  t(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Qt();
      return a && u.disable(), u;
    }, ...r), this.resize(), this;
  }
  rnot(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Wt();
      return a && u.disable(), u;
    }, ...r), this;
  }
  rx(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Vt();
      return a && u.disable(), u;
    }, ...r), this;
  }
  ry(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Yt();
      return a && u.disable(), u;
    }, ...r), this;
  }
  rz(...e) {
    let r, a;
    if (typeof e[0] == "number")
      r = e;
    else {
      let u = e[0];
      r = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Xt();
      return a && u.disable(), u;
    }, ...r), this;
  }
  qft(e, ...r) {
    let a;
    return typeof r[0] == "number" ? a = r : a = r[0].targets, this.applyOperationToTargets(() => {
      let u = new gr();
      return u.span = e, u;
    }, ...a), this.resize(), this;
  }
  qftDagger(e, ...r) {
    let a;
    return typeof r[0] == "number" ? a = r : a = r[0].targets, this.applyOperationToTargets(() => {
      let u = new mr();
      return u.span = e, u;
    }, ...a), this.resize(), this;
  }
  swap(...e) {
    let r = this.applyOperationToTargets(() => new Zt(), ...e);
    return this.updateStepOperationAttributes(r), this;
  }
  control(...e) {
    let r = this.applyOperationToTargets(() => new Lt(), ...e);
    return this.updateStepOperationAttributes(r), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new nt(), ...e), this;
  }
  write(e, ...r) {
    return this.applyOperationToTargets(() => {
      let a = new jt();
      return a.value = e, a;
    }, ...r), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Ft(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...r) {
    let a = Math.max(...r) + 1, u = this.appendStepWithDropzones(a);
    for (let h of r) {
      let b = e();
      u.dropzoneAt(h).put(b);
    }
    return u;
  }
  ch(e, r) {
    return this.controlledU(qt, e, r), this;
  }
  cnot(e, r) {
    return this.controlledU(Jt, e, r), this.resize(), this;
  }
  cy(e, r) {
    return this.controlledU(Kt, e, r), this;
  }
  cz(e, r) {
    return this.controlledU(er, e, r), this;
  }
  cphase(e, r) {
    return this.controlledU(Ut, e, r), this;
  }
  ct(e, r) {
    return this.controlledU(Qt, e, r), this;
  }
  crnot(e, r) {
    return this.controlledU(Wt, e, r), this;
  }
  crx(e, r) {
    return this.controlledU(Vt, e, r), this;
  }
  cry(e, r) {
    return this.controlledU(Yt, e, r), this;
  }
  crz(e, r) {
    return this.controlledU(Xt, e, r), this;
  }
  cswap(e, r) {
    return this.controlledU(Zt, e, r), this;
  }
  cc(...e) {
    let r = Math.max(...e) + 1, a = this.appendStepWithDropzones(r);
    for (let u of e)
      a.dropzoneAt(u).put(new Lt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(a), this;
  }
  controlledU(e, r, a) {
    let u = [].concat(r), h = [].concat(a), b = u.concat(h), v = Math.max(...b) + 1, d = this.appendStepWithDropzones(v);
    for (let f of u)
      d.dropzoneAt(f).put(new Lt());
    for (let f of h)
      d.dropzoneAt(f).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d);
  }
  appendStep() {
    let e = new gt(), r = this.blocks.slice(-1)[0] || null;
    return r === null || r.finalized ? this.append(e) : r.append(e), e;
  }
  appendStepWithDropzones(e) {
    let r = new gt();
    this.append(r);
    for (let a = 0; a < e; a++) {
      let u = new de();
      r.append(u);
    }
    return r;
  }
  updateAllWires() {
    let e = this.steps[0];
    if (e === void 0)
      return;
    let r = e.dropzones.length;
    for (let a = 0; a < r; a++)
      this.updateWire(a);
  }
  activateOperation(e) {
    for (let r of this.operations)
      r.active = false;
    e.active = true;
  }
  appendWire() {
    for (let e of this.steps)
      e.appendDropzone();
  }
  removeLastEmptyWires() {
    for (; this.steps.every((e) => e.wireCount > e.maxOccupiedDropzoneBit && e.wireCount > this.minWireCount && !e.lastDropzone.occupied); )
      for (let e of this.steps)
        e.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let e of this.emptySteps)
      e.remove();
  }
  loadFromJson(e) {
    this.innerHTML = "";
    let r = null;
    if (e === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let a = JSON.parse(e);
    this.circuitTitle = (a.title || "").trim();
    let u = false;
    for (let h of a.cols) {
      let b = this.appendStep();
      u && (b.keep = true, u = false);
      let v = [];
      for (let d of h) {
        switch (true) {
          case /^\|0>$/.test(d): {
            let f = new jt();
            f.value = "0", v.push(f), b.append(new de());
            break;
          }
          case /^\|1>$/.test(d): {
            let f = new jt();
            f.value = "1", v.push(f), b.append(new de());
            break;
          }
          case /^H/.test(d): {
            let f = new qt();
            f.if = this.ifVariable(d.slice(1)), v.push(f), b.append(new de());
            break;
          }
          case (/^X$/.test(d) || /^X<(.+)$/.test(d)): {
            let f = new Jt();
            f.if = d.slice(2).trim(), v.push(f), b.append(new de());
            break;
          }
          case /^Y/.test(d): {
            let f = new Kt();
            f.if = this.ifVariable(d.slice(1)), v.push(f), b.append(new de());
            break;
          }
          case /^Z/.test(d): {
            let f = new er();
            f.if = this.ifVariable(d.slice(1)), v.push(f), b.append(new de());
            break;
          }
          case /^P/.test(d): {
            let f = new Ut();
            f.angle = this.angleParameter(d.slice(1)), v.push(f), b.append(new de());
            break;
          }
          case /^T/.test(d): {
            let f = new Qt();
            f.if = this.ifVariable(d.slice(1)), v.push(f), b.append(new de());
            break;
          }
          case /^X\^½/.test(d): {
            let f = new Wt();
            f.if = this.ifVariable(d.slice(3)), v.push(f), b.append(new de());
            break;
          }
          case /^Rx/.test(d): {
            let f = new Vt();
            f.angle = this.angleParameter(d.slice(2)), v.push(f), b.append(new de());
            break;
          }
          case /^Ry/.test(d): {
            let f = new Yt();
            f.angle = this.angleParameter(d.slice(2)), v.push(f), b.append(new de());
            break;
          }
          case /^Rz/.test(d): {
            let f = new Xt();
            f.angle = this.angleParameter(d.slice(2)), v.push(f), b.append(new de());
            break;
          }
          case /^…/.test(d): {
            let f = new br();
            v.push(f), b.append(new de());
            break;
          }
          case /^QFT\d/.test(d): {
            let f = new gr(), y = parseInt(d.slice(3), 10);
            f.span = y, v.push(f);
            for (let E = 0; E < y; E++)
              b.append(new de());
            break;
          }
          case /^QFT†\d/.test(d): {
            let f = new mr(), y = parseInt(d.slice(4), 10);
            f.span = y, v.push(f), b.append(new de());
            for (let E = 0; E < y; E++)
              b.append(new de());
            break;
          }
          case /^Swap$/.test(d): {
            let f = new Zt();
            v.push(f), b.append(new de());
            break;
          }
          case /^•$/.test(d): {
            let f = new Lt();
            v.push(f), b.append(new de());
            break;
          }
          case /^◦$/.test(d): {
            let f = new vr();
            v.push(f), b.append(new de());
            break;
          }
          case /^Bloch$/.test(d): {
            let f = new nt();
            v.push(f), b.append(new de());
            break;
          }
          case /^Measure/.test(d): {
            let f = new Ft(), y = ((/^>(.+)$/.exec(d.slice(7)) || [])[1] || "").trim();
            f.flag = y, v.push(f), b.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(d): {
            let f = d.slice(1);
            b.remove(), r = new rn(), r.comment = f, r.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(r);
            break;
          }
          case /^[\]}]$/.test(d): {
            b.remove(), r.finalize(), u = true;
            break;
          }
          default: {
            if (d !== 1)
              throw new Error(`Unknown operation: ${d}`);
            b.append(new de()), v.push(null);
          }
        }
        for (let [f, y] of Object.entries(v))
          y !== null && b.dropzoneAt(parseInt(f)).put(y);
        b.updateOperationAttributes();
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
    let e = this.largestStep, r = e && e.wireCount > this.minWireCount ? e.wireCount : this.minWireCount;
    for (let a of this.steps) {
      let u = r - a.wireCount;
      for (let h = 0; h < u; h++)
        a.appendDropzone();
    }
  }
  updateWire(e) {
    let r = false;
    for (let a of this.steps) {
      let u = a.dropzoneAt(e);
      if (u.inputWireQuantum = r, u.operationName === "write-gate")
        u.inputWireQuantum = r, u.outputWireQuantum = true, r = true;
      else if (u.operationName === "measurement-gate")
        u.inputWireQuantum = r, u.outputWireQuantum = false, r = false;
      else if (u.operationName === "swap-gate") {
        let h = a.dropzones.filter((b) => b.operationName === "swap-gate");
        if (h.length === 2) {
          let b = h.map((y) => a.bit(y)), v = a.bit(u), d = b[0] === v ? b[1] : b[0], f = a.dropzoneAt(d);
          u.inputWireQuantum = r, u.outputWireQuantum = f.inputWireQuantum, r = f.inputWireQuantum;
        } else
          u.inputWireQuantum = r, u.outputWireQuantum = r;
      } else
        u.inputWireQuantum = r, u.outputWireQuantum = r;
    }
  }
  updateChangedWire(e) {
    let r = e.target;
    if (!Lr(r))
      throw new Error(`${r} isn't a circuit-step.`);
    let a = e.detail.dropzone;
    if (!Po(a))
      throw new Error(`${a} isn't a circuit-dropzone.`);
    let u = r.dropzones.indexOf(a);
    B.need(u !== -1, "circuit-dropzone not found."), this.updateWire(u);
  }
  snapTargetAt(e, r) {
    return this.isVertical ? this.snapTargets[r][e] : this.snapTargets[e][r];
  }
  resizeHandleSnapTargetAt(e, r) {
    return this.isVertical ? this.resizeHandleSnapTargets[r][e] : this.resizeHandleSnapTargets[e][r];
  }
  setSnapTargets(e) {
    let r = [];
    this.snapTargets = {};
    let a = 1;
    ar(e) && (a = e.span);
    let u = e.dropzone;
    for (let [h, b] of Object.entries(this.steps)) {
      let v = parseInt(h);
      for (let [d, f] of Object.entries(b.dropzones)) {
        let y = parseInt(d), E = f.snapTarget, S = this.isVertical ? E.y : E.x, C = this.isVertical ? E.x : E.y;
        if (v === 0 && b.dropzones[y + a - 1] !== void 0) {
          let z = S - e.snapRange * 0.75;
          this.isVertical ? r.push({ x: C, y: z }) : r.push({ x: z, y: C }), this.snapTargets[z] === void 0 && (this.snapTargets[z] = {}), this.snapTargets[z][C] === void 0 && (this.snapTargets[z][C] = { dropzone: null, stepIndex: -1, wireIndex: y });
        }
        if (a === 1)
          (f === u || !f.occupied) && r.push(E);
        else if (!f.occupied && y + a <= b.dropzones.length && r.push(E), f === u) {
          r.push(E);
          for (let z = 1; z < a && y + z < b.dropzones.length; z++) {
            let k = b.dropzones[y + z];
            B.notNull(k), r.push(k.snapTarget);
          }
        }
        let T = S + e.snapRange * 0.75;
        b.dropzones[y + a - 1] !== void 0 && (this.isVertical ? r.push({ x: C, y: T }) : r.push({ x: T, y: C })), this.snapTargets[T] === void 0 && (this.snapTargets[T] = {}), this.snapTargets[T][C] === void 0 && (this.snapTargets[T][C] = { dropzone: null, stepIndex: v, wireIndex: y }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][C] === void 0 && (this.snapTargets[S][C] = { dropzone: f, stepIndex: null, wireIndex: y });
      }
    }
    e.snapTargets = r;
  }
  setResizeHandleSnapTargets(e) {
    if (!ar(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!Po(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let r = e.dropzone.circuitStep;
    B.notNull(r);
    let a = r.freeDropzones, u = e.dropzone;
    a.push(u);
    let h = [];
    this.resizeHandleSnapTargets = {};
    for (let [b, v] of Object.entries(r.dropzones)) {
      let d = v.resizeHandleSnapTarget, f = this.isVertical ? d.y : d.x, y = this.isVertical ? d.x : d.y, E = parseInt(b) % this.wireCount;
      if (v.occupied || h.push(d), v === u) {
        h.push(d);
        let S = e.span;
        for (let C = 1; C < S; C++) {
          let T = r.dropzones[parseInt(b) + C];
          B.notNull(T), h.push(T.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][y] === void 0 && (this.resizeHandleSnapTargets[f][y] = { dropzone: v, stepIndex: null, wireIndex: E });
    }
    e.resizeHandleSnapTargets = h;
  }
  updateSnapTargets(e) {
    let r = e[0];
    B.notNull(r);
    let a = this.isVertical ? r.snapTarget.y : r.snapTarget.x;
    for (let [u, h] of Object.entries(this.snapTargets))
      if (!(parseInt(u) <= a))
        for (let b in h) {
          let v = h[b];
          v.stepIndex !== null && (v.stepIndex += 1);
        }
    for (let [u, h] of Object.entries(e)) {
      let b = h.snapTarget, v = this.isVertical ? b.y : b.x, d = this.isVertical ? b.x : b.y;
      B.notNull(this.snapTargets[v]), this.snapTargets[v][d] = { dropzone: h, stepIndex: null, wireIndex: parseInt(u) };
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
    let e = false, r = [];
    for (let a of this.nonEmptySteps) {
      if (a.isInBlock) {
        if (!e) {
          let u = a.block;
          r.push(`["[${u.comment}"]`), e = true;
        }
      } else
        e && (r.push('["]"]'), e = false);
      r.push(a.toJson());
    }
    return e && r.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${r.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${r.join(",")}]}`;
  }
}, "se");
c(se, "QuantumCircuitElement"), M([D], se.prototype, "minStepCount", 2), M([D], se.prototype, "minWireCount", 2), M([D], se.prototype, "editing", 2), M([D], se.prototype, "updateUrl", 2), M([D], se.prototype, "json", 2), M([D], se.prototype, "circuitTitle", 2), M([D], se.prototype, "debug", 2), M([D], se.prototype, "chDisabled", 2), M([D], se.prototype, "chMaxControlGates", 2), M([D], se.prototype, "chMaxTargetGates", 2), M([D], se.prototype, "cnotDisabled", 2), M([D], se.prototype, "cnotMaxControlGates", 2), M([D], se.prototype, "cnotMaxTargetGates", 2), M([D], se.prototype, "cyDisabled", 2), M([D], se.prototype, "cyMaxControlGates", 2), M([D], se.prototype, "cyMaxTargetGates", 2), M([D], se.prototype, "czDisabled", 2), M([D], se.prototype, "czMaxControlGates", 2), M([D], se.prototype, "czMaxTargetGates", 2), M([D], se.prototype, "cphaseDisabled", 2), M([D], se.prototype, "cphaseMaxControlGates", 2), M([D], se.prototype, "cphaseMaxTargetGates", 2), M([D], se.prototype, "ctDisabled", 2), M([D], se.prototype, "ctMaxControlGates", 2), M([D], se.prototype, "ctMaxTargetGates", 2), M([D], se.prototype, "crnotDisabled", 2), M([D], se.prototype, "crnotMaxControlGates", 2), M([D], se.prototype, "crnotMaxTargetGates", 2), M([D], se.prototype, "crxDisabled", 2), M([D], se.prototype, "crxMaxControlGates", 2), M([D], se.prototype, "crxMaxTargetGates", 2), M([D], se.prototype, "cryDisabled", 2), M([D], se.prototype, "cryMaxControlGates", 2), M([D], se.prototype, "cryMaxTargetGates", 2), M([D], se.prototype, "crzDisabled", 2), M([D], se.prototype, "crzMaxControlGates", 2), M([D], se.prototype, "crzMaxTargetGates", 2), M([D], se.prototype, "cswapDisabled", 2), M([D], se.prototype, "cswapMaxControlGates", 2), M([D], se.prototype, "swapDisabled", 2), M([D], se.prototype, "controlControlDisabled", 2), M([D], se.prototype, "controlControlMaxTargetGates", 2), M([D], se.prototype, "phasePhaseDisabled", 2), M([D], se.prototype, "phasePhaseMaxTargetGates", 2), M([dt], se.prototype, "blocks", 2), se = M([Q], se);
var nn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("draggable:delete", this.maybeUpdateUrl), this.addEventListener("draggable:delete", this.freshRun), this.addEventListener("menuable:menu-delete", this.maybeUpdateUrl), this.addEventListener("menuable:menu-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step:mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step:mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step:qpu-operation-snap", this.freshRun), this.addEventListener("circuit-step:qpu-operation-unsnap", this.freshRun), this.addEventListener("circuit-step:update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step:qpu-operation-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step:qpu-operation-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.freshRun), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var u;
    let r = e.data, a = this.activeStepIndex;
    switch (r.type) {
      case "step": {
        let h = this.circuit.stepAt(r.step);
        for (let b in r.blochVectors) {
          let v = parseInt(b), d = h.dropzoneAt(v).operation;
          if (Od(d)) {
            let f = r.blochVectors[v];
            d.x = f[0], d.y = f[1], d.z = f[2];
          }
        }
        if (r.measuredBits) {
          let b = r.measuredBits;
          for (let v in b) {
            let d = parseInt(v), f = h.dropzoneAt(d).operation;
            Md(f) && (f.value = b[d].toString());
          }
        }
        for (let b of h.dropzones) {
          let v = b.operation;
          en(v) && v.if !== "" && (v.disabled = !r.flags[v.if]);
        }
        if (a === r.step) {
          let b = {};
          for (let v in r.amplitudes) {
            let d = r.amplitudes[v];
            b[v] = new pn(d[0], d[1]);
          }
          (u = this.circleNotation) == null || u.setAmplitudes(b);
        }
        break;
      }
      case "finish": {
        for (let h of this.runCircuitButtons)
          h.running = false;
        break;
      }
      default:
        throw new pt("Unknown service worker message", { data: r });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(e) {
    let r = this.activeStepIndex, a = this.circuit.serialize();
    B.need(a.length > 0, "non-zero step length");
    let u = this.circuit.toJson(), h = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: h, stepIndex: r, circuitJson: u, invalidateCaches: e, steps: a, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let e = Math.max(...this.circuit.steps.map((r) => r.maxOccupiedDropzoneBit));
    return e === 0 && (e = 1), this.circleNotation.qubitCount = e, e;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, r = this.circuit.breakpoint, a = e || r;
    return a === null && (a = this.circuit.stepAt(0), this.circuit.setBreakpoint(a)), this.circuit.fetchStepIndex(a);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    B.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "nn");
c(nn, "QuantumSimulatorElement"), M([D], nn.prototype, "updateUrl", 2), M([Oe], nn.prototype, "circuit", 2), M([Oe], nn.prototype, "circleNotation", 2), M([dt], nn.prototype, "runCircuitButtons", 2), nn = M([Q], nn);

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
  pn as Complex
};
/*! Bundled license information:

fraction.js/fraction.js:
  (**
   * @license Fraction.js v4.2.0 05/03/2022
   * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
   *
   * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

complex.js/complex.js:
  (**
   * @license Complex.js v2.1.1 12/05/2020
   *
   * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

xstate/es/_virtual/_tslib.js:
  (*! *****************************************************************************
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
  ***************************************************************************** *)
*/
//# sourceMappingURL=application.js.map
