var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var ph = Object.create;
var Hi = Object.defineProperty;
var Ku = Object.getOwnPropertyDescriptor;
var dh = Object.getOwnPropertyNames;
var fh = Object.getPrototypeOf;
var hh = Object.prototype.hasOwnProperty;
var mh = /* @__PURE__ */ __name((r) => Hi(r, "__esModule", { value: true }), "mh");
var u = /* @__PURE__ */ __name((r, e) => Hi(r, "name", { value: e, configurable: true }), "u");
var ca = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "ca");
var vh = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of dh(e))
      !hh.call(r, l) && (t || l !== "default") && Hi(r, l, { get: () => e[l], enumerable: !(i = Ku(e, l)) || i.enumerable });
  return r;
}, "vh");
var Tn = /* @__PURE__ */ __name((r, e) => vh(mh(Hi(r != null ? ph(fh(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Tn");
var A = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? Ku(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && Hi(e, t, l), l;
}, "A");
var ec = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "ec");
var pa = /* @__PURE__ */ __name((r, e, t) => (ec(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "pa");
var da = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "da");
var fa = /* @__PURE__ */ __name((r, e, t, i) => (ec(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "fa");
var rc = ca((Ws, tc) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(w, S) {
      if (isNaN(w = parseInt(w, 10)))
        throw y.InvalidParameter;
      return w * S;
    }
    __name(i, "i");
    u(i, "assign");
    function l(w, S) {
      if (S === 0)
        throw y.DivisionByZero;
      var C = Object.create(y.prototype);
      C.s = w < 0 ? -1 : 1, w = w < 0 ? -w : w;
      var M = h(w, S);
      return C.n = w / M, C.d = S / M, C;
    }
    __name(l, "l");
    u(l, "newFraction");
    function c(w) {
      for (var S = {}, C = w, M = 2, _ = 4; _ <= C; ) {
        for (; C % M === 0; )
          C /= M, S[M] = (S[M] || 0) + 1;
        _ += 1 + 2 * M++;
      }
      return C !== w ? C > 1 && (S[C] = (S[C] || 0) + 1) : S[w] = (S[w] || 0) + 1, S;
    }
    __name(c, "c");
    u(c, "factorize");
    var f = u(function(w, S) {
      var C = 0, M = 1, _ = 1, B = 0, L = 0, F = 0, I = 1, Q = 1, z = 0, j = 1, Y = 1, K = 1, ie = 1e7, ne;
      if (w != null)
        if (S !== void 0) {
          if (C = w, M = S, _ = C * M, C % 1 !== 0 || M % 1 !== 0)
            throw y.NonIntegerParameter;
        } else
          switch (typeof w) {
            case "object": {
              if ("d" in w && "n" in w)
                C = w.n, M = w.d, "s" in w && (C *= w.s);
              else if (0 in w)
                C = w[0], 1 in w && (M = w[1]);
              else
                throw y.InvalidParameter;
              _ = C * M;
              break;
            }
            case "number": {
              if (w < 0 && (_ = w, w = -w), w % 1 === 0)
                C = w;
              else if (w > 0) {
                for (w >= 1 && (Q = Math.pow(10, Math.floor(1 + Math.log(w) / Math.LN10)), w /= Q); j <= ie && K <= ie; )
                  if (ne = (z + Y) / (j + K), w === ne) {
                    j + K <= ie ? (C = z + Y, M = j + K) : K > j ? (C = Y, M = K) : (C = z, M = j);
                    break;
                  } else
                    w > ne ? (z += Y, j += K) : (Y += z, K += j), j > ie ? (C = Y, M = K) : (C = z, M = j);
                C *= Q;
              } else
                (isNaN(w) || isNaN(S)) && (M = C = NaN);
              break;
            }
            case "string": {
              if (j = w.match(/\d+|./g), j === null)
                throw y.InvalidParameter;
              if (j[z] === "-" ? (_ = -1, z++) : j[z] === "+" && z++, j.length === z + 1 ? L = i(j[z++], _) : j[z + 1] === "." || j[z] === "." ? (j[z] !== "." && (B = i(j[z++], _)), z++, (z + 1 === j.length || j[z + 1] === "(" && j[z + 3] === ")" || j[z + 1] === "'" && j[z + 3] === "'") && (L = i(j[z], _), I = Math.pow(10, j[z].length), z++), (j[z] === "(" && j[z + 2] === ")" || j[z] === "'" && j[z + 2] === "'") && (F = i(j[z + 1], _), Q = Math.pow(10, j[z + 1].length) - 1, z += 3)) : j[z + 1] === "/" || j[z + 1] === ":" ? (L = i(j[z], _), I = i(j[z + 2], 1), z += 3) : j[z + 3] === "/" && j[z + 1] === " " && (B = i(j[z], _), L = i(j[z + 2], _), I = i(j[z + 4], 1), z += 5), j.length <= z) {
                M = I * Q, _ = C = F + M * B + Q * L;
                break;
              }
            }
            default:
              throw y.InvalidParameter;
          }
      if (M === 0)
        throw y.DivisionByZero;
      t.s = _ < 0 ? -1 : 1, t.n = Math.abs(C), t.d = Math.abs(M);
    }, "parse");
    function b(w, S, C) {
      for (var M = 1; S > 0; w = w * w % C, S >>= 1)
        S & 1 && (M = M * w % C);
      return M;
    }
    __name(b, "b");
    u(b, "modpow");
    function m(w, S) {
      for (; S % 2 === 0; S /= 2)
        ;
      for (; S % 5 === 0; S /= 5)
        ;
      if (S === 1)
        return 0;
      for (var C = 10 % S, M = 1; C !== 1; M++)
        if (C = C * 10 % S, M > e)
          return 0;
      return M;
    }
    __name(m, "m");
    u(m, "cycleLen");
    function d(w, S, C) {
      for (var M = 1, _ = b(10, C, S), B = 0; B < 300; B++) {
        if (M === _)
          return B;
        M = M * 10 % S, _ = _ * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    u(d, "cycleStart");
    function h(w, S) {
      if (!w)
        return S;
      if (!S)
        return w;
      for (; ; ) {
        if (w %= S, !w)
          return S;
        if (S %= w, !S)
          return w;
      }
    }
    __name(h, "h");
    u(h, "gcd");
    function y(w, S) {
      if (f(w, S), this instanceof y)
        w = h(t.d, t.n), this.s = t.s, this.n = t.n / w, this.d = t.d / w;
      else
        return l(t.s * t.n, t.d);
    }
    __name(y, "y");
    u(y, "Fraction"), y.DivisionByZero = new Error("Division by Zero"), y.InvalidParameter = new Error("Invalid argument"), y.NonIntegerParameter = new Error("Parameters must be integer"), y.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return l(this.n, this.d);
    }, neg: function() {
      return l(-this.s * this.n, this.d);
    }, add: function(w, S) {
      return f(w, S), l(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(w, S) {
      return f(w, S), l(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(w, S) {
      return f(w, S), l(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(w, S) {
      return f(w, S), l(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return l(this.s * this.n, this.d);
    }, mod: function(w, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new y(NaN);
      if (w === void 0)
        return l(this.s * this.n % this.d, 1);
      if (f(w, S), t.n === 0 && this.d === 0)
        throw y.DivisionByZero;
      return l(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d);
    }, gcd: function(w, S) {
      return f(w, S), l(h(t.n, this.n) * h(t.d, this.d), t.d * this.d);
    }, lcm: function(w, S) {
      return f(w, S), t.n === 0 && this.n === 0 ? l(0, 1) : l(t.n * this.n, h(t.n, this.n) * h(t.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : l(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : l(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : l(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return l(this.s * this.d, this.n);
    }, pow: function(w, S) {
      if (f(w, S), t.d === 1)
        return t.s < 0 ? l(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : l(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var C = c(this.n), M = c(this.d), _ = 1, B = 1;
      for (var L in C)
        if (L !== "1") {
          if (L === "0") {
            _ = 0;
            break;
          }
          if (C[L] *= t.n, C[L] % t.d === 0)
            C[L] /= t.d;
          else
            return null;
          _ *= Math.pow(L, C[L]);
        }
      for (var L in M)
        if (L !== "1") {
          if (M[L] *= t.n, M[L] % t.d === 0)
            M[L] /= t.d;
          else
            return null;
          B *= Math.pow(L, M[L]);
        }
      return t.s < 0 ? l(B, _) : l(_, B);
    }, equals: function(w, S) {
      return f(w, S), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(w, S) {
      f(w, S);
      var C = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < C) - (C < 0);
    }, simplify: function(w) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      w = w || 1e-3;
      for (var S = this.abs(), C = S.toContinued(), M = 1; M < C.length; M++) {
        for (var _ = l(C[M - 1], 1), B = M - 2; B >= 0; B--)
          _ = _.inverse().add(C[B]);
        if (_.sub(S).abs().valueOf() < w)
          return _.mul(this.s);
      }
      return this;
    }, divisible: function(w, S) {
      return f(w, S), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(w) {
      var S, C = "", M = this.n, _ = this.d;
      return this.s < 0 && (C += "-"), _ === 1 ? C += M : (w && (S = Math.floor(M / _)) > 0 && (C += S, C += " ", M %= _), C += M, C += "/", C += _), C;
    }, toLatex: function(w) {
      var S, C = "", M = this.n, _ = this.d;
      return this.s < 0 && (C += "-"), _ === 1 ? C += M : (w && (S = Math.floor(M / _)) > 0 && (C += S, M %= _), C += "\\frac{", C += M, C += "}{", C += _, C += "}"), C;
    }, toContinued: function() {
      var w, S = this.n, C = this.d, M = [];
      if (isNaN(S) || isNaN(C))
        return M;
      do
        M.push(Math.floor(S / C)), w = S % C, S = C, C = w;
      while (S !== 1);
      return M;
    }, toString: function(w) {
      var S = this.n, C = this.d;
      if (isNaN(S) || isNaN(C))
        return "NaN";
      w = w || 15;
      var M = m(S, C), _ = d(S, C, M), B = this.s < 0 ? "-" : "";
      if (B += S / C | 0, S %= C, S *= 10, S && (B += "."), M) {
        for (var L = _; L--; )
          B += S / C | 0, S %= C, S *= 10;
        B += "(";
        for (var L = M; L--; )
          B += S / C | 0, S %= C, S *= 10;
        B += ")";
      } else
        for (var L = w; S && L--; )
          B += S / C | 0, S %= C, S *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return y;
    }) : typeof Ws == "object" ? (Object.defineProperty(y, "__esModule", { value: true }), y.default = y, y.Fraction = y, tc.exports = y) : r.Fraction = y;
  })(Ws);
});
var ao = ca((Jc, Cl) => {
  (function(r) {
    typeof Jc == "object" && typeof Cl != "undefined" ? Cl.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    }, "s"), m = u(function(n) {
      return typeof n == "function";
    }, "l"), d = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return b(n) && n.nodeType === 11;
    }, object: b, func: m, number: function(n) {
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
      return b(n) && n.length !== void 0 && m(n.splice);
    } };
    c.default = d;
    var h = {};
    function y(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(y, "y");
    u(y, "f");
    function w(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p = s === "x" ? "y" : "x";
          o.page[p] = a.coords.start.page[p], o.client[p] = a.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    __name(w, "w");
    u(w, "d"), Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
    var S = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", s.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": y, "interactions:action-resume": y, "interactions:action-move": w, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: y, move: w, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, C = S;
    h.default = C;
    var M = {};
    Object.defineProperty(M, "__esModule", { value: true }), M.default = void 0;
    var _ = { init: function(n) {
      var o = n;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || B, _.SVGElement = o.SVGElement || B, _.SVGSVGElement = o.SVGSVGElement || B, _.SVGElementInstance = o.SVGElementInstance || B, _.Element = o.Element || B, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || B, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function B() {
    }
    __name(B, "B");
    u(B, "y");
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
    }, z.getElementClientRect = pe, z.getElementRect = function(n) {
      var o = pe(n);
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
        var p = n[s], v = n[o];
        if (p && s !== o)
          if (v) {
            var E = K(p), g = K(v);
            if (E !== p.ownerDocument)
              if (g !== p.ownerDocument)
                if (E !== g) {
                  a = a.length ? a : ie(v);
                  var x = void 0;
                  if (v instanceof M.default.HTMLElement && p instanceof M.default.SVGElement && !(p instanceof M.default.SVGSVGElement)) {
                    if (p === g)
                      continue;
                    x = p.ownerSVGElement;
                  } else
                    x = p;
                  for (var T = ie(x, v.ownerDocument), O = 0; T[O] && T[O] === a[O]; )
                    O++;
                  var P = [T[O - 1], T[O], a[O]];
                  if (P[0])
                    for (var k = P[0].lastChild; k; ) {
                      if (k === P[1]) {
                        o = s, a = T;
                        break;
                      }
                      if (k === P[2])
                        break;
                      k = k.previousSibling;
                    }
                } else
                  G = p, R = v, (parseInt(e.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(e.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = s);
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
    var ce = {};
    function De(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(De, "De");
    u(De, "I");
    function Ve(n, o, a) {
      return n === "parent" ? (0, z.parentNode)(a) : n === "self" ? o.getRect(a) : (0, z.closest)(a, n);
    }
    __name(Ve, "Ve");
    u(Ve, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ce.getStringOptionResult = Ve, ce.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ce.resolveRectLike = function(n, o, a, s) {
      var p, v = n;
      return c.default.string(v) ? v = Ve(v, o, a) : c.default.func(v) && (v = v.apply(void 0, function(E) {
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
      }())), c.default.element(v) && (v = (0, z.getElementRect)(v)), v;
    }, ce.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, W.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, W.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    };
    var Le = {};
    Object.defineProperty(Le, "__esModule", { value: true }), Le.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, v = (0, ce.resolveRectLike)(p, n, o, [n && o]);
      return (0, ce.rectToXY)(v) || { x: 0, y: 0 };
    };
    var he = {};
    function Je(n) {
      return n.trim().split(/ +/);
    }
    __name(Je, "Je");
    u(Je, "C"), Object.defineProperty(he, "__esModule", { value: true }), he.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Je(o)), c.default.array(o))
        return o.reduce(function(x, T) {
          return (0, W.default)(x, n(T, a, s));
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
          var g = Je(E).map(function(x) {
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
      return n instanceof M.default.Event || n instanceof M.default.Touch;
    }
    __name(dr, "dr");
    u(dr, "B");
    function Ot(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Ot, "Ot");
    u(Ot, "Y");
    function Rt(n, o) {
      return o = o || { x: 0, y: 0 }, F.default.isOperaMobile && dr(n) ? (Ot("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Ot("page", n, o), o;
    }
    __name(Rt, "Rt");
    u(Rt, "W");
    function Wt(n, o) {
      return o = o || {}, F.default.isOperaMobile && dr(n) ? Ot("screen", n, o) : Ot("client", n, o), o;
    }
    __name(Wt, "Wt");
    u(Wt, "L");
    function fr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(fr, "fr");
    u(fr, "U");
    function Ut(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var v in o)
        o[v] /= n.length;
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
    }, J.getTouchPair = fr, J.getXY = Ot, J.isNativePointer = dr, J.newCoords = function() {
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
      var a = o + "X", s = o + "Y", p = fr(n), v = p[1][a] - p[0][a], E = p[1][s] - p[0][s];
      return 180 * Math.atan2(E, v) / Math.PI;
    }, J.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = fr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), v = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: v, width: p - a, height: v - s };
    }, J.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = fr(n), v = p[0][a] - p[1][a], E = p[0][s] - p[1][s];
      return (0, rt.default)(v, E);
    };
    var Lt = {};
    function wr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(wr, "wr");
    u(wr, "q");
    function _r(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_r, "_r");
    u(_r, "G"), Object.defineProperty(Lt, "__esModule", { value: true }), Lt.BaseEvent = void 0;
    var pn = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _r(this, "immediatePropagationStopped", false), _r(this, "propagationStopped", false), this._interaction = s;
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
    function Rr(n) {
      return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rr(n);
    }
    __name(Rr, "Rr");
    u(Rr, "Q");
    function Vn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Vn, "Vn");
    u(Vn, "tt");
    function Yr(n, o) {
      return Yr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Yr(n, o);
    }
    __name(Yr, "Yr");
    u(Yr, "et");
    function hr(n, o) {
      if (o && (Rr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return wt(n);
    }
    __name(hr, "hr");
    u(hr, "nt");
    function wt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(wt, "wt");
    u(wt, "rt");
    function xr(n) {
      return xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, xr(n);
    }
    __name(xr, "xr");
    u(xr, "ot");
    function Dt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Dt, "Dt");
    u(Dt, "it"), Object.defineProperty(Mt, "__esModule", { value: true }), Mt.DropEvent = void 0;
    var hn = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Yr(g, x);
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
          var T = xr(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return hr(this, g);
      });
      function E(g, x, T) {
        var O;
        (function(R, q) {
          if (!(R instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Dt(wt(O = v.call(this, x._interaction)), "dropzone", void 0), Dt(wt(O), "dragEvent", void 0), Dt(wt(O), "relatedTarget", void 0), Dt(wt(O), "draggable", void 0), Dt(wt(O), "propagationStopped", false), Dt(wt(O), "immediatePropagationStopped", false);
        var P = T === "dragleave" ? g.prev : g.cur, k = P.element, G = P.dropzone;
        return O.type = T, O.target = k, O.currentTarget = k, O.dropzone = G, O.dragEvent = x, O.relatedTarget = x.target, O.draggable = x.interactable, O.timeStamp = x.timeStamp, O;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "reject", value: function() {
        var g = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var T = x.activeDrops, O = Oe.findIndex(T, function(k) {
              var G = k.dropzone, R = k.element;
              return G === g.dropzone && R === g.target;
            });
            x.activeDrops.splice(O, 1);
            var P = new E(x, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new E(x, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Vn(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Mt.DropEvent = hn;
    var Dr = {};
    function mn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, v = s.element;
        o.dropzone = p, o.target = v, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(mn, "mn");
    u(mn, "lt");
    function Xr(n, o) {
      for (var a = function(v, E) {
        for (var g = v.interactables, x = [], T = 0; T < g.list.length; T++) {
          var O = g.list[T];
          if (O.options.drop.enabled) {
            var P = O.options.drop.accept;
            if (!(c.default.element(P) && P !== E || c.default.string(P) && !z.matchesSelector(E, P) || c.default.func(P) && !P({ dropzone: O, draggableElement: E })))
              for (var k = c.default.string(O.target) ? O._context.querySelectorAll(O.target) : c.default.array(O.target) ? O.target : [O.target], G = 0; G < k.length; G++) {
                var R = k[G];
                R !== E && x.push({ dropzone: O, element: R, rect: O.getRect(R) });
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
    function vn(n, o, a) {
      for (var s = n.dropState, p = n.interactable, v = n.element, E = [], g = 0; g < s.activeDrops.length; g++) {
        var x = s.activeDrops[g], T = x.dropzone, O = x.element, P = x.rect;
        E.push(T.dropCheck(o, a, p, v, O, P) ? O : null);
      }
      var k = z.indexOfDeepestElement(E);
      return s.activeDrops[k] || null;
    }
    __name(vn, "vn");
    u(vn, "ct");
    function Ei(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new Mt.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new Mt.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new Mt.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new Mt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new Mt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new Mt.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(Ei, "Ei");
    u(Ei, "ft");
    function Si(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, v = a.prev;
      o.leave && v.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && mn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(Si, "Si");
    u(Si, "dt");
    function _o(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var v = a.dropState;
        o.dynamicDrop && (v.activeDrops = Xr(o, a.element));
        var E = s, g = vn(a, E, p);
        v.rejected = v.rejected && !!g && g.dropzone === v.cur.dropzone && g.element === v.cur.element, v.cur.dropzone = g && g.dropzone, v.cur.element = g && g.element, v.events = Ei(a, 0, E);
      }
    }
    __name(_o, "_o");
    u(_o, "pt"), Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var Ro = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(h.default), s.prototype.dropzone = function(v) {
        return function(E, g) {
          if (c.default.object(g)) {
            if (E.options.drop.enabled = g.enabled !== false, g.listeners) {
              var x = (0, he.default)(g.listeners), T = Object.keys(x).reduce(function(O, P) {
                return O[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], O;
              }, {});
              E.off(E.options.drop.listeners), E.on(T), E.options.drop.listeners = T;
            }
            return c.default.func(g.ondrop) && E.on("drop", g.ondrop), c.default.func(g.ondropactivate) && E.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && E.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && E.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && E.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && E.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? E.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (E.options.drop.accept = g.accept), "checker" in g && (E.options.drop.checker = g.checker), E;
          }
          return c.default.bool(g) ? (E.options.drop.enabled = g, E) : E.options.drop;
        }(this, v);
      }, s.prototype.dropCheck = function(v, E, g, x, T, O) {
        return function(P, k, G, R, q, X, $) {
          var re = false;
          if (!($ = $ || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(k, G, re, P, X, R, q);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var de = (0, Le.default)(R, q, "drag"), Pe = J.getPageXY(k);
            Pe.x += de.x, Pe.y += de.y;
            var je = Pe.x > $.left && Pe.x < $.right, ge = Pe.y > $.top && Pe.y < $.bottom;
            re = je && ge;
          }
          var Ne = R.getRect(q);
          if (Ne && oe === "center") {
            var Xt = Ne.left + Ne.width / 2, Lr = Ne.top + Ne.height / 2;
            re = Xt >= $.left && Xt <= $.right && Lr >= $.top && Lr <= $.bottom;
          }
          return Ne && c.default.number(oe) && (re = Math.max(0, Math.min($.right, Ne.right) - Math.max($.left, Ne.left)) * Math.max(0, Math.min($.bottom, Ne.bottom) - Math.max($.top, Ne.top)) / (Ne.width * Ne.height) >= oe), P.options.drop.checker && (re = P.options.drop.checker(k, G, re, P, X, R, q)), re;
        }(this, v, E, g, x, T, O);
      }, a.dynamicDrop = function(v) {
        return c.default.bool(v) ? (n.dynamicDrop = v, a) : n.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = Ro.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = Xr(o, a.element), p.events = Ei(a, 0, s), p.events.activate && (mn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": _o, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Si(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        _o(n, o), Si(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Xr, getDrop: vn, getDropEvents: Ei, fireDropEvents: Si, defaults: { enabled: false, accept: null, overlap: "pointer" } }, ds = Ro;
    Dr.default = ds;
    var N = {};
    function te(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(T) {
          return T.pointer;
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
    var me = {};
    function ht(n, o, a, s, p, v, E) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(v.width) ? v.width : v.right - v.left, x = c.default.number(v.height) ? v.height : v.bottom - v.top;
        if (E = Math.min(E, Math.abs((n === "left" || n === "right" ? g : x) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), x < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left") {
          var T = g >= 0 ? v.left : v.right;
          return a.x < T + E;
        }
        if (n === "top") {
          var O = x >= 0 ? v.top : v.bottom;
          return a.y < O + E;
        }
        if (n === "right")
          return a.x > (g >= 0 ? v.right : v.left) - E;
        if (n === "bottom")
          return a.y > (x >= 0 ? v.bottom : v.top) - E;
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
    u(It, "_t"), Object.defineProperty(me, "__esModule", { value: true }), me.default = void 0;
    var xt = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      xt.cursors = function(v) {
        return v.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), xt.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(v) {
        return function(E, g, x) {
          return c.default.object(g) ? (E.options.resize.enabled = g.enabled !== false, E.setPerAction("resize", g), E.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? E.options.resize.axis = g.axis : g.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (E.options.resize.square = g.square), E) : c.default.bool(g) ? (E.options.resize.enabled = g, E) : E.options.resize;
        }(this, v, n);
      }, o.map.resize = xt, o.methodDict.resize = "resizable", p.actions.resize = xt.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, v = s.rect;
          s._rects = { start: (0, W.default)({}, v), corrected: (0, W.default)({}, v), previous: (0, W.default)({}, v), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), It(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, v = s.interactable.options.resize.invert, E = v === "reposition" || v === "negate", g = s.rect, x = s._rects, T = x.start, O = x.corrected, P = x.delta, k = x.previous;
          if ((0, W.default)(k, O), E) {
            if ((0, W.default)(O, g), v === "reposition") {
              if (O.top > O.bottom) {
                var G = O.top;
                O.top = O.bottom, O.bottom = G;
              }
              if (O.left > O.right) {
                var R = O.left;
                O.left = O.right, O.right = R;
              }
            }
          } else
            O.top = Math.min(g.top, T.bottom), O.bottom = Math.max(g.bottom, T.top), O.left = Math.min(g.left, T.right), O.right = Math.max(g.right, T.left);
          for (var q in O.width = O.right - O.left, O.height = O.bottom - O.top, O)
            P[q] = O[q] - k[q];
          p.edges = s.prepared.edges, p.rect = O, p.deltaRect = P;
        }
      })(n), It(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, v = n.buttons;
      if (p) {
        var E = (0, W.default)({}, o.coords.cur.page), g = a.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (v & g.mouseButtons) != 0)) {
          if (c.default.object(g.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var T in x)
              x[T] = ht(T, g.edges[T], E, o._latestPointer.eventTarget, s, p, g.margin || xt.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (n.action = { name: "resize", edges: x });
          } else {
            var O = g.axis !== "y" && E.x > p.right - xt.defaultMargin, P = g.axis !== "x" && E.y > p.bottom - xt.defaultMargin;
            (O || P) && (n.action = { name: "resize", axes: (O ? "x" : "") + (P ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = xt.cursors, v = null;
      if (a)
        v = p[s + a];
      else if (o) {
        for (var E = "", g = ["top", "bottom", "left", "right"], x = 0; x < g.length; x++) {
          var T = g[x];
          o[T] && (E += T);
        }
        v = p[E];
      }
      return v;
    }, defaultMargin: null }, Do = xt;
    me.default = Do;
    var Vt = {};
    Object.defineProperty(Vt, "__esModule", { value: true }), Vt.default = void 0;
    var Ti = { id: "actions", install: function(n) {
      n.usePlugin(N.default), n.usePlugin(me.default), n.usePlugin(h.default), n.usePlugin(Dr.default);
    } };
    Vt.default = Ti;
    var Et = {};
    Object.defineProperty(Et, "__esModule", { value: true }), Et.default = void 0;
    var St, kr, Yn = 0, Xn = { request: function(n) {
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
        var v = Date.now(), E = Math.max(0, 16 - (v - Yn)), g = n.setTimeout(function() {
          p(v + E);
        }, E);
        return Yn = v + E, g;
      }, "jt"), kr = u(function(p) {
        return clearTimeout(p);
      }, "Mt"));
    } };
    Et.default = Xn;
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.default = void 0, Zr.getContainer = ko, Zr.getScroll = Ci, Zr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Zr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var v = ko(p.container, a.interactable, s), E = Ci(v);
      o();
      var g = Ci(v);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, Et.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = Et.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), Et.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, v = ko(p.container, o, a), E = le.now(), g = (E - le.prevTime) / 1e3, x = p.speed * g;
      if (x >= 1) {
        var T = { x: le.x * x, y: le.y * x };
        if (T.x || T.y) {
          var O = Ci(v);
          c.default.window(v) ? v.scrollBy(T.x, T.y) : v && (v.scrollLeft += T.x, v.scrollTop += T.y);
          var P = Ci(v), k = { x: P.x - O.x, y: P.y - O.y };
          (k.x || k.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: k, interaction: n, container: v });
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
          var s, p, v, E, g = o.interactable, x = o.element, T = o.prepared.name, O = g.options[T].autoScroll, P = ko(O.container, g, x);
          if (c.default.window(P))
            E = a.clientX < le.margin, s = a.clientY < le.margin, p = a.clientX > P.innerWidth - le.margin, v = a.clientY > P.innerHeight - le.margin;
          else {
            var k = z.getElementClientRect(P);
            E = a.clientX < k.left + le.margin, s = a.clientY < k.top + le.margin, p = a.clientX > k.right - le.margin, v = a.clientY > k.bottom - le.margin;
          }
          le.x = p ? 1 : E ? -1 : 0, le.y = v ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = O.margin, le.speed = O.speed, le.start(o));
        }
    } };
    function ko(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(ko, "ko");
    u(ko, "zt");
    function Ci(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Ci, "Ci");
    u(Ci, "Ct");
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
      o.prototype.getAction = function(a, s, p, v) {
        var E = function(g, x, T, O, P) {
          var k = g.getRect(O), G = { action: null, interactable: g, interaction: T, element: O, rect: k, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", G), G.action;
        }(this, s, p, v, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, E, this, v, p) : E;
      }, o.prototype.ignoreFrom = (0, jt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, jt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = zd, o.prototype.styleCursor = Ad;
    } };
    No.default = _d;
    var Zn = {};
    function ou(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Go(o, a, n, p) ? n : null;
    }
    __name(ou, "ou");
    u(ou, "Vt");
    function Rd(n, o, a, s, p, v, E) {
      for (var g = 0, x = s.length; g < x; g++) {
        var T = s[g], O = p[g], P = T.getAction(o, a, n, O);
        if (P) {
          var k = ou(P, T, O, v, E);
          if (k)
            return { action: k, interactable: T, element: O };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Rd, "Rd");
    u(Rd, "Nt");
    function au(n, o, a, s, p) {
      var v = [], E = [], g = s;
      function x(O) {
        v.push(O), E.push(g);
      }
      __name(x, "x");
      for (u(x, "u"); c.default.element(g); ) {
        v = [], E = [], p.interactables.forEachMatch(g, x);
        var T = Rd(n, o, a, v, E, s, p);
        if (T.action && !T.interactable.options[T.action.name].manualStart)
          return T;
        g = z.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(au, "au");
    u(au, "qt");
    function su(n, o, a) {
      var s = o.action, p = o.interactable, v = o.element;
      s = s || { name: null }, n.interactable = p, n.element = v, (0, jt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(v) : null, uu(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(su, "su");
    u(su, "Gt");
    function Go(n, o, a, s) {
      var p = n.options, v = p[a.name].max, E = p[a.name].maxPerElement, g = s.autoStart.maxInteractions, x = 0, T = 0, O = 0;
      if (!(v && E && g))
        return false;
      for (var P = 0; P < s.interactions.list.length; P++) {
        var k = s.interactions.list[P], G = k.prepared.name;
        if (k.interacting() && (++x >= g || k.interactable === n && ((T += G === a.name ? 1 : 0) >= v || k.element === o && (O++, G === a.name && O >= E))))
          return false;
      }
      return g > 0;
    }
    __name(Go, "Go");
    u(Go, "$t");
    function lu(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(lu, "lu");
    u(lu, "Ht");
    function fs(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(fs, "fs");
    u(fs, "Kt");
    function uu(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var v = "";
        if (p.name) {
          var E = a.options[p.name].cursorChecker;
          v = c.default.func(E) ? E(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        fs(n.element, v || "", o);
      } else
        o.autoStart.cursorElement && fs(o.autoStart.cursorElement, "", o);
    }
    __name(uu, "uu");
    u(uu, "Zt"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.default = void 0;
    var Dd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(No.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, W.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return lu(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Go, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget;
      a.interacting() || su(a, au(a, s, p, v, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, v = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || su(p, au(p, v, E, g, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var v = p.interactable, E = p.prepared.name;
          E && v && (v.options[E].manualStart || !Go(v, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, v, p.element), uu(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && fs(a.element, "", o);
    } }, maxInteractions: lu, withinInteractionLimit: Go, validateAction: ou }, kd = Dd;
    Zn.default = kd;
    var Lo = {};
    Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var Nd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, v = n.dy;
      if (a.prepared.name === "drag") {
        var E = Math.abs(p), g = Math.abs(v), x = a.interactable.options.drag, T = x.startAxis, O = E > g ? "x" : E < g ? "y" : "xy";
        if (a.prepared.axis = x.lockAxis === "start" ? O[0] : x.lockAxis, O !== "xy" && T !== "xy" && T !== O) {
          a.prepared.name = null;
          for (var P = s, k = function(R) {
            if (R !== a.interactable) {
              var q = a.interactable.options.drag;
              if (!q.manualStart && R.testIgnoreAllow(q, P, s)) {
                var X = R.getAction(a.downPointer, a.downEvent, a, P);
                if (X && X.name === "drag" && function($, re) {
                  if (!re)
                    return false;
                  var oe = re.options.drag.startAxis;
                  return $ === "xy" || oe === "xy" || oe === $;
                }(O, R) && Zn.default.validateAction(X, R, P, s, o))
                  return R;
              }
            }
          }; c.default.element(P); ) {
            var G = o.interactables.forEachMatch(P, k);
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
    function hs(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(hs, "hs");
    u(hs, "re"), Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Gd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Zn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = hs(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      hs(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: hs }, Ld = Gd;
    jo.default = Ld;
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var jd = { id: "auto-start", install: function(n) {
      n.usePlugin(Zn.default), n.usePlugin(jo.default), n.usePlugin(Lo.default);
    } };
    Ho.default = jd;
    var Qn = {};
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
    function cu(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Hd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, v) {
          var E = s.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(v.type)) {
                var g = (0, e.getWindow)(v.target).document, x = p.getDocOptions(g);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(v.type) || c.default.element(v.target) && (0, z.matchesSelector)(v.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || v.preventDefault();
            } else
              v.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, z.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(cu, "cu");
    u(cu, "fe"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0, Qn.install = cu;
    var qd = { id: "core/interactablePreventDefault", install: cu, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Bd, n;
    }, {}) };
    Qn.default = qd;
    var ms = {};
    Object.defineProperty(ms, "__esModule", { value: true }), ms.default = void 0, ms.default = {};
    var Oi, vs = {};
    Object.defineProperty(vs, "__esModule", { value: true }), vs.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Oi || (Oi = {})), Oi.touchAction, Oi.boxSizing, Oi.noListeners;
    var $d = { id: "dev-tools", install: function() {
    } };
    vs.default = $d;
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
    function pu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
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
            return du(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? du(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(pu, "pu");
    u(pu, "be");
    function du(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(du, "du");
    u(du, "xe");
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
    u(yn, "_e"), Object.defineProperty(bn, "__esModule", { value: true }), bn.default = void 0, bn.getRectOffset = fu;
    var Wd = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), yn(this, "states", []), yn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), yn(this, "startDelta", void 0), yn(this, "result", void 0), yn(this, "endResult", void 0), yn(this, "edges", void 0), yn(this, "interaction", void 0), this.interaction = s, this.result = Bo();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var v = s.phase, E = this.interaction, g = function(T) {
          var O = T.interactable.options[T.prepared.name], P = O.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(k) {
            var G = O[k];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(k) {
            return !!k;
          });
        }(E);
        this.prepareStates(g), this.edges = (0, W.default)({}, E.edges), this.startOffset = fu(E.rect, p), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: v, pageCoords: p, preEnd: false });
        return this.result = Bo(), this.startAll(x), this.result = this.setAll(x);
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
        s.coords = (0, W.default)({}, s.pageCoords), s.rect = (0, W.default)({}, g);
        for (var x = E ? this.states.slice(E) : this.states, T = Bo(s.coords, s.rect), O = 0; O < x.length; O++) {
          var P, k = x[O], G = k.options, R = (0, W.default)({}, s.coords), q = null;
          (P = k.methods) != null && P.set && this.shouldDo(G, v, p) && (s.state = k, q = k.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - R.x, y: s.coords.y - R.y })), T.eventProps.push(q);
        }
        T.delta.x = s.coords.x - s.pageCoords.x, T.delta.y = s.coords.y - s.pageCoords.y, T.rectDelta.left = s.rect.left - g.left, T.rectDelta.right = s.rect.right - g.right, T.rectDelta.top = s.rect.top - g.top, T.rectDelta.bottom = s.rect.bottom - g.bottom;
        var X = this.result.coords, $ = this.result.rect;
        if (X && $) {
          var re = T.rect.left !== $.left || T.rect.right !== $.right || T.rect.top !== $.top || T.rect.bottom !== $.bottom;
          T.changed = re || X.x !== T.coords.x || X.y !== T.coords.y;
        }
        return T;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, v = s.phase, E = p.coords.cur, g = p.coords.start, x = this.result, T = this.startDelta, O = x.delta;
        v === "start" && (0, W.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[g, T], [E, O]].length; P++) {
          var k = pu([[g, T], [E, O]][P], 2), G = k[0], R = k[1];
          G.page.x += R.x, G.page.y += R.y, G.client.x += R.x, G.client.y += R.y;
        }
        var q = this.result.rectDelta, X = s.rect || p.rect;
        X.left += q.left, X.right += q.right, X.top += q.top, X.bottom += q.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, v = s.phase, E = s.preEnd, g = s.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: v, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = x, !x.changed && (!g || g < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var T = p.coords.cur.page, O = { x: s.modifiedCoords.x - T.x, y: s.modifiedCoords.y - T.y };
          x.coords.x += O.x, x.coords.y += O.y, x.delta.x += O.x, x.delta.y += O.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, v = s.event, E = this.states;
        if (E && E.length) {
          for (var g = false, x = 0; x < E.length; x++) {
            var T = E[x];
            s.state = T;
            var O = T.options, P = T.methods, k = P.beforeEnd && P.beforeEnd(s);
            if (k)
              return this.endResult = k, false;
            g = g || !g && this.shouldDo(O, true, s.phase, true);
          }
          g && p.move({ event: v, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var v = (0, W.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
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
          for (var x = g.startDelta, T = g.result, O = T.delta, P = T.rectDelta, k = [[v.start, x], [v.cur, O]], G = 0; G < k.length; G++) {
            var R = pu(k[G], 2), q = R[0], X = R[1];
            q.page.x -= X.x, q.page.y -= X.y, q.client.x -= X.x, q.client.y -= X.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, v, E) {
        return !(!s || s.enabled === false || E && !s.endOnly || s.endOnly && !p || v === "start" && !s.setStart);
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
    function fu(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(fu, "fu");
    u(fu, "Ee"), bn.default = Wd;
    var mt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(qo, "qo");
    u(qo, "Te"), Object.defineProperty(mt, "__esModule", { value: true }), mt.addEventModifiers = qo, mt.default = void 0, mt.makeModifier = function(n, o) {
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
    mt.default = Vd;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.defaults = void 0, Mi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ii = {};
    function gs(n) {
      return gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, gs(n);
    }
    __name(gs, "gs");
    u(gs, "De");
    function Yd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Yd, "Yd");
    u(Yd, "Ae");
    function bs(n, o) {
      return bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, bs(n, o);
    }
    __name(bs, "bs");
    u(bs, "ze");
    function Xd(n, o) {
      if (o && (gs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ke(n);
    }
    __name(Xd, "Xd");
    u(Xd, "Ce");
    function ke(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(ke, "ke");
    u(ke, "Re");
    function $o(n) {
      return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, $o(n);
    }
    __name($o, "$o");
    u($o, "Fe");
    function Be(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Be, "Be");
    u(Be, "Xe"), Object.defineProperty(Ii, "__esModule", { value: true }), Ii.InteractEvent = void 0;
    var hu = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && bs(g, x);
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
        var g, x = $o(s);
        if (p) {
          var T = $o(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return Xd(this, g);
      });
      function E(g, x, T, O, P, k, G) {
        var R;
        (function(je, ge) {
          if (!(je instanceof ge))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Be(ke(R = v.call(this, g)), "relatedTarget", null), Be(ke(R), "screenX", void 0), Be(ke(R), "screenY", void 0), Be(ke(R), "button", void 0), Be(ke(R), "buttons", void 0), Be(ke(R), "ctrlKey", void 0), Be(ke(R), "shiftKey", void 0), Be(ke(R), "altKey", void 0), Be(ke(R), "metaKey", void 0), Be(ke(R), "page", void 0), Be(ke(R), "client", void 0), Be(ke(R), "delta", void 0), Be(ke(R), "rect", void 0), Be(ke(R), "x0", void 0), Be(ke(R), "y0", void 0), Be(ke(R), "t0", void 0), Be(ke(R), "dt", void 0), Be(ke(R), "duration", void 0), Be(ke(R), "clientX0", void 0), Be(ke(R), "clientY0", void 0), Be(ke(R), "velocity", void 0), Be(ke(R), "speed", void 0), Be(ke(R), "swipe", void 0), Be(ke(R), "axes", void 0), Be(ke(R), "preEnd", void 0), P = P || g.element;
        var q = g.interactable, X = (q && q.options || Mi.defaults).deltaSource, $ = (0, Le.default)(q, P, T), re = O === "start", oe = O === "end", de = re ? ke(R) : g.prevEvent, Pe = re ? g.coords.start : oe ? { page: de.page, client: de.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return R.page = (0, W.default)({}, Pe.page), R.client = (0, W.default)({}, Pe.client), R.rect = (0, W.default)({}, g.rect), R.timeStamp = Pe.timeStamp, oe || (R.page.x -= $.x, R.page.y -= $.y, R.client.x -= $.x, R.client.y -= $.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = k, R.type = G || T + (O || ""), R.interactable = q, R.t0 = re ? g.pointers[g.pointers.length - 1].downTime : de.t0, R.x0 = g.coords.start.page.x - $.x, R.y0 = g.coords.start.page.y - $.y, R.clientX0 = g.coords.start.client.x - $.x, R.clientY0 = g.coords.start.client.y - $.y, R.delta = re || oe ? { x: 0, y: 0 } : { x: R[X].x - de[X].x, y: R[X].y - de[X].y }, R.dt = g.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, W.default)({}, g.coords.velocity[X]), R.speed = (0, rt.default)(R.velocity.x, R.velocity.y), R.swipe = oe || O === "inertiastart" ? R.getSwipe() : null, R;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var T = 112.5 <= x && x < 247.5, O = 202.5 <= x && x < 337.5;
        return { up: O, down: !O && 22.5 <= x && x < 157.5, left: T, right: !T && (292.5 <= x || x < 67.5), angle: x, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Yd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Ii.InteractEvent = hu, Object.defineProperties(hu.prototype, { pageX: { get: function() {
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
    var Pi = {};
    function mu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(mu, "mu");
    u(mu, "We");
    function Zd(n, o, a) {
      return o && mu(n.prototype, o), a && mu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Zd, "Zd");
    u(Zd, "Le");
    function Ai(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ai, "Ai");
    u(Ai, "Ue"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.PointerInfo = void 0;
    var Qd = Zd(u(/* @__PURE__ */ __name(function n(o, a, s, p, v) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ai(this, "id", void 0), Ai(this, "pointer", void 0), Ai(this, "event", void 0), Ai(this, "downTime", void 0), Ai(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = v;
    }, "n"), "t"));
    Pi.PointerInfo = Qd;
    var Fo, Wo, kt = {};
    function Jd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Jd, "Jd");
    u(Jd, "$e");
    function Fe(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Fe, "Fe");
    u(Fe, "He"), Object.defineProperty(kt, "__esModule", { value: true }), kt.Interaction = void 0, Object.defineProperty(kt, "PointerInfo", { enumerable: true, get: function() {
      return Pi.PointerInfo;
    } }), kt.default = kt._ProxyValues = kt._ProxyMethods = void 0, kt._ProxyValues = Fo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Fo || (kt._ProxyValues = Fo = {})), kt._ProxyMethods = Wo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Wo || (kt._ProxyMethods = Wo = {}));
    var Kd = 0, vu = function() {
      function n(s) {
        var p = this, v = s.pointerType, E = s.scopeFire;
        (function(k, G) {
          if (!(k instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Fe(this, "interactable", null), Fe(this, "element", null), Fe(this, "rect", null), Fe(this, "_rects", void 0), Fe(this, "edges", null), Fe(this, "_scopeFire", void 0), Fe(this, "prepared", { name: null, axis: null, edges: null }), Fe(this, "pointerType", void 0), Fe(this, "pointers", []), Fe(this, "downEvent", null), Fe(this, "downPointer", {}), Fe(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Fe(this, "prevEvent", null), Fe(this, "pointerIsDown", false), Fe(this, "pointerWasMoved", false), Fe(this, "_interacting", false), Fe(this, "_ending", false), Fe(this, "_stopped", true), Fe(this, "_proxy", null), Fe(this, "simulation", null), Fe(this, "doMove", (0, jt.warnOnce)(function(k) {
          this.move(k);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Fe(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), Fe(this, "_id", Kd++), this._scopeFire = E, this.pointerType = v;
        var g = this;
        this._proxy = {};
        var x = u(function(k) {
          Object.defineProperty(p._proxy, k, { get: function() {
            return g[k];
          } });
        }, "a");
        for (var T in Fo)
          x(T);
        var O = u(function(k) {
          Object.defineProperty(p._proxy, k, { value: function() {
            return g[k].apply(g, arguments);
          } });
        }, "l");
        for (var P in Wo)
          O(P);
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
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, jt.copyAction)(this.prepared, s), this.interactable = p, this.element = v, this.rect = p.getRect(v), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, v) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, v, false);
        var E, g, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, rt.default)(E, g) > this.pointerMoveTolerance);
        var T = this.getPointerIndex(s), O = { pointer: s, pointerIndex: T, pointerInfo: this.pointers[T], event: p, type: "move", eventTarget: v, dx: E, dy: g, duplicate: x, interaction: this };
        x || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", O), x || this.simulation || (this.interacting() && (O.type = null, this.move(O)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || J.setZeroCoords(this.coords.delta), (s = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
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
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Oe.findIndex(this.pointers, function(v) {
          return v.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, v, E) {
        var g = J.getPointerId(s), x = this.getPointerIndex(s), T = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(p.type)), T ? T.pointer = s : (T = new Pi.PointerInfo(g, s, p, null, null), x = this.pointers.length, this.pointers.push(T)), J.setCoords(this.coords.cur, this.pointers.map(function(O) {
          return O.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, T.downTime = this.coords.cur.timeStamp, T.downTarget = v, J.pointerExtend(this.downPointer, s), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, v), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: v, down: E, pointerInfo: T, pointerIndex: x, interaction: this }), x;
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
        if (x && v === "move" && (ce.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(v), s) === false)
          return false;
        var T = s.iEvent = this._createPreparedEvent(p, v, E, g);
        return this._scopeFire("interactions:action-".concat(v), s), v === "start" && (this.prevEvent = T), this._fireEvent(T), this._scopeFire("interactions:after-action-".concat(v), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], a && Jd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    kt.Interaction = vu;
    var ef = vu;
    kt.default = ef;
    var wn = {};
    function gu(n) {
      n.pointerIsDown && (ws(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(gu, "gu");
    u(gu, "tn");
    function bu(n) {
      ys(n.interaction);
    }
    __name(bu, "bu");
    u(bu, "en");
    function ys(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return ws(n.coords.cur, o), ws(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ys, "ys");
    u(ys, "nn");
    function tf(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(tf, "tf");
    u(tf, "rn");
    function ws(n, o) {
      var a = n.page, s = n.client, p = o.x, v = o.y;
      a.x += p, a.y += v, s.x += p, s.y += v;
    }
    __name(ws, "ws");
    u(ws, "on"), Object.defineProperty(wn, "__esModule", { value: true }), wn.addTotal = gu, wn.applyPending = ys, wn.default = void 0, kt._ProxyMethods.offsetBy = "";
    var rf = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = tf;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return gu(n.interaction);
    }, "interactions:before-action-start": bu, "interactions:before-action-move": bu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ys(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, nf = rf;
    wn.default = nf;
    var Jn = {};
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
    u(pt, "cn"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = Jn.InertiaState = void 0;
    var yu = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), pt(this, "active", false), pt(this, "isModified", false), pt(this, "smoothEnd", false), pt(this, "allowResume", false), pt(this, "modification", void 0), pt(this, "modifierCount", 0), pt(this, "modifierArg", void 0), pt(this, "startCoords", void 0), pt(this, "t0", 0), pt(this, "v0", 0), pt(this, "te", 0), pt(this, "targetOffset", void 0), pt(this, "modifiedOffset", void 0), pt(this, "currentOffset", void 0), pt(this, "lambda_v0", 0), pt(this, "one_ve_v0", 0), pt(this, "timeout", void 0), pt(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, v = Uo(p);
        if (!v || !v.enabled)
          return false;
        var E = p.coords.velocity.client, g = (0, rt.default)(E.x, E.y), x = this.modification || (this.modification = new bn.default(p));
        if (x.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = v.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && g > v.minSpeed && g > v.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, v = Uo(this.interaction), E = v.resistance, g = -Math.log(v.endSpeed / this.v0) / E;
        this.targetOffset = { x: (p.x - g) / E, y: (p.y - g) / E }, this.te = g, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - v.endSpeed / this.v0;
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
        var s, p, v, E, g, x = this, T = this.interaction, O = Uo(T).resistance, P = (T._now() - this.t0) / 1e3;
        if (P < this.te) {
          var k, G = 1 - (Math.exp(-O * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, v = this.modifiedOffset.x, E = this.modifiedOffset.y, k = { x: wu(g = G, 0, s, v), y: wu(g, 0, p, E) }) : k = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var R = { x: k.x - this.currentOffset.x, y: k.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, T.offsetBy(R), T.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          T.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, v = p._now() - this.t0, E = Uo(p).smoothEndDuration;
        if (v < E) {
          var g = { x: xu(v, 0, this.targetOffset.x, E), y: xu(v, 0, this.targetOffset.y, E) }, x = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
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
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Et.default.cancel(this.timeout);
      } }]) && of(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Uo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Uo, "Uo");
    u(Uo, "dn"), Jn.InertiaState = yu;
    var af = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(wn.default), n.usePlugin(mt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new yu(o);
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
    }, "interactions:action-resume": mt.addEventModifiers, "interactions:action-inertiastart": mt.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    function wu(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(wu, "wu");
    u(wu, "vn");
    function xu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(xu, "xu");
    u(xu, "hn");
    var sf = af;
    Jn.default = sf;
    var zi = {};
    function lf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(lf, "lf");
    u(lf, "mn");
    function _i(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_i, "_i");
    u(_i, "bn");
    function Eu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(Eu, "Eu");
    u(Eu, "xn"), Object.defineProperty(zi, "__esModule", { value: true }), zi.Eventable = void 0;
    var uf = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _i(this, "options", void 0), _i(this, "types", {}), _i(this, "propagationStopped", false), _i(this, "immediatePropagationStopped", false), _i(this, "global", void 0), this.options = (0, W.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, v = this.global;
        (p = this.types[s.type]) && Eu(s, p), !s.propagationStopped && v && (p = v[s.type]) && Eu(s, p);
      } }, { key: "on", value: function(s, p) {
        var v = (0, he.default)(s, p);
        for (s in v)
          this.types[s] = Oe.merge(this.types[s] || [], v[s]);
      } }, { key: "off", value: function(s, p) {
        var v = (0, he.default)(s, p);
        for (s in v) {
          var E = this.types[s];
          if (E && E.length)
            for (var g = 0; g < v[s].length; g++) {
              var x = v[s][g], T = E.indexOf(x);
              T !== -1 && E.splice(T, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && lf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    zi.Eventable = uf;
    var Ri = {};
    Object.defineProperty(Ri, "__esModule", { value: true }), Ri.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var xs = {};
    Object.defineProperty(xs, "__esModule", { value: true }), xs.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var v = n.interactables.get(s, p);
        return v || ((v = n.interactables.new(s, p)).events.global = a.globalEvents), v;
      }, "a"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, jt.warnOnce)(function(a, s, p) {
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
        return (0, Ri.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, jt.warnOnce)(function(a, s, p) {
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
        return (0, Ri.default)(a, this.scope.actions) ? a in this.globalEvents && (x = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(x, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
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
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nr, "Nr");
    u(Nr, "Sn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.Interactable = void 0;
    var pf = function() {
      function n(s, p, v, E) {
        (function(g, x) {
          if (!(g instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new zi.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || v, this._win = (0, e.getWindow)((0, z.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = E, this.set(p);
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
          var g = E, x = this.options[s], T = p[g];
          g === "listeners" && this.updatePerActionListeners(s, x.listeners, T), c.default.array(T) ? x[g] = Oe.from(T) : c.default.plainObject(T) ? (x[g] = (0, W.default)(x[g] || {}, (0, gn.default)(T)), c.default.object(v.perAction[g]) && "enabled" in v.perAction[g] && (x[g].enabled = T.enabled !== false)) : c.default.bool(T) && c.default.object(v.perAction[g]) ? x[g].enabled = T : x[g] = T;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, z.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(v) {
          var E = (0, W.default)({}, p._rectChecker(v));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, z.trySelector)(p) || c.default.object(p)) {
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
        return this._context === s.ownerDocument || (0, z.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, p, v) {
        return !this.testIgnore(s.ignoreFrom, p, v) && this.testAllow(s.allowFrom, p, v);
      } }, { key: "testAllow", value: function(s, p, v) {
        return !s || !!c.default.element(v) && (c.default.string(s) ? (0, z.matchesUpTo)(v, s, p) : !!c.default.element(s) && (0, z.nodeContains)(s, v));
      } }, { key: "testIgnore", value: function(s, p, v) {
        return !(!s || !c.default.element(v)) && (c.default.string(s) ? (0, z.matchesUpTo)(v, s, p) : !!c.default.element(s) && (0, z.nodeContains)(s, v));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, v, E) {
        c.default.object(p) && !c.default.array(p) && (E = v, v = null);
        var g = s === "on" ? "add" : "remove", x = (0, he.default)(p, v);
        for (var T in x) {
          T === "wheel" && (T = F.default.wheelEvent);
          for (var O = 0; O < x[T].length; O++) {
            var P = x[T][O];
            (0, Ri.default)(T, this._actions) ? this.events[s](T, P) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, T, P, E) : this._scopeEvents[g](this.target, T, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, v) {
        return this._onOff("on", s, p, v);
      } }, { key: "off", value: function(s, p, v) {
        return this._onOff("off", s, p, v);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var v in c.default.object(s) || (s = {}), this.options = (0, gn.default)(p.base), this._actions.methodDict) {
          var E = v, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, W.default)((0, W.default)({}, p.perAction), p.actions[E])), this[g](s[E]);
        }
        for (var x in s)
          c.default.func(this[x]) && this[x](s[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], v = p.length - 1; v >= 0; v--) {
              var E = p[v], g = E.selector, x = E.context, T = E.listeners;
              g === this.target && x === this._context && p.splice(v, 1);
              for (var O = T.length - 1; O >= 0; O--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, T[O][0], T[O][1]);
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
    function Es(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Es, "Es");
    u(Es, "kn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.InteractableSet = void 0;
    var ff = function() {
      function n(s) {
        var p = this;
        (function(v, E) {
          if (!(v instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Es(this, "list", []), Es(this, "selectorMap", {}), Es(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(v) {
          var E = v.interactable, g = E.target, x = E._context, T = c.default.string(g) ? p.selectorMap[g] : g[p.scope.id], O = Oe.findIndex(T, function(P) {
            return P.context === x;
          });
          T[O] && (T[O].context = null, T[O].interactable = null), T.splice(O, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, W.default)(p || {}, { actions: this.scope.actions });
        var v = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), E = { context: v._context, interactable: v };
        return this.scope.addDocument(v._doc), this.list.push(v), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(E)) : (v.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: s, options: p, interactable: v, win: this.scope._win }), v;
      } }, { key: "get", value: function(s, p) {
        var v = p && p.context || this.scope.document, E = c.default.string(s), g = E ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var x = Oe.find(g, function(T) {
          return T.context === v && (E || T.interactable.inContext(s));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var v = 0; v < this.list.length; v++) {
          var E = this.list[v], g = void 0;
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
    function Ss(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ss, "Ss");
    u(Ss, "zn");
    function Ts(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
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
            return Su(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Su(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Ts, "Ts");
    u(Ts, "Cn");
    function Su(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Su, "Su");
    u(Su, "Rn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var mf = function() {
      function n(s) {
        (function(p, v) {
          if (!(p instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ss(this, "currentTarget", void 0), Ss(this, "originalEvent", void 0), Ss(this, "type", void 0), this.originalEvent = s, (0, Ft.default)(this, s);
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
    function Di(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, W.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(Di, "Di");
    u(Di, "Xn");
    var vf = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], v = { add: E, remove: g, addDelegate: function(O, P, k, G, R) {
        var q = Di(R);
        if (!s[k]) {
          s[k] = [];
          for (var X = 0; X < p.length; X++) {
            var $ = p[X];
            E($, k, x), E($, k, T, true);
          }
        }
        var re = s[k], oe = Oe.find(re, function(de) {
          return de.selector === O && de.context === P;
        });
        oe || (oe = { selector: O, context: P, listeners: [] }, re.push(oe)), oe.listeners.push([G, q]);
      }, removeDelegate: function(O, P, k, G, R) {
        var q, X = Di(R), $ = s[k], re = false;
        if ($)
          for (q = $.length - 1; q >= 0; q--) {
            var oe = $[q];
            if (oe.selector === O && oe.context === P) {
              for (var de = oe.listeners, Pe = de.length - 1; Pe >= 0; Pe--) {
                var je = Ts(de[Pe], 2), ge = je[0], Ne = je[1], Xt = Ne.capture, Lr = Ne.passive;
                if (ge === G && Xt === X.capture && Lr === X.passive) {
                  de.splice(Pe, 1), de.length || ($.splice(q, 1), g(P, k, x), g(P, k, T, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: T, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function E(O, P, k, G) {
        var R = Di(G), q = Oe.find(a, function(X) {
          return X.eventTarget === O;
        });
        q || (q = { eventTarget: O, events: {} }, a.push(q)), q.events[P] || (q.events[P] = []), O.addEventListener && !Oe.contains(q.events[P], k) && (O.addEventListener(P, k, v.supportsOptions ? R : R.capture), q.events[P].push(k));
      }
      __name(E, "E");
      u(E, "s");
      function g(O, P, k, G) {
        var R = Di(G), q = Oe.findIndex(a, function(Pe) {
          return Pe.eventTarget === O;
        }), X = a[q];
        if (X && X.events)
          if (P !== "all") {
            var $ = false, re = X.events[P];
            if (re) {
              if (k === "all") {
                for (var oe = re.length - 1; oe >= 0; oe--)
                  g(O, P, re[oe], R);
                return;
              }
              for (var de = 0; de < re.length; de++)
                if (re[de] === k) {
                  O.removeEventListener(P, k, v.supportsOptions ? R : R.capture), re.splice(de, 1), re.length === 0 && (delete X.events[P], $ = true);
                  break;
                }
            }
            $ && !Object.keys(X.events).length && a.splice(q, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && g(O, P, "all");
      }
      __name(g, "g");
      u(g, "l");
      function x(O, P) {
        for (var k = Di(P), G = new mf(O), R = s[O.type], q = Ts(J.getEventTargets(O), 1)[0], X = q; c.default.element(X); ) {
          for (var $ = 0; $ < R.length; $++) {
            var re = R[$], oe = re.selector, de = re.context;
            if (z.matchesSelector(X, oe) && z.nodeContains(de, q) && z.nodeContains(de, X)) {
              var Pe = re.listeners;
              G.currentTarget = X;
              for (var je = 0; je < Pe.length; je++) {
                var ge = Ts(Pe[je], 2), Ne = ge[0], Xt = ge[1], Lr = Xt.capture, Fs = Xt.passive;
                Lr === k.capture && Fs === k.passive && Ne(G);
              }
            }
          }
          X = z.parentNode(X);
        }
      }
      __name(x, "x");
      u(x, "u");
      function T(O) {
        return x(O, true);
      }
      __name(T, "T");
      return u(T, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return v.supportsOptions = true;
      }, get passive() {
        return v.supportsPassive = true;
      } }), n.events = v, v;
    } };
    Xo.default = vf;
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
      for (var v = 0; v < p.interactions.list.length; v++) {
        var E = p.interactions.list[v], g = s;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; g; ) {
            if (g === E.element)
              return E;
            g = z.parentNode(g);
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
          if (g.simulation && !Tu(g, a))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
        }
      }
      if (o)
        return o;
      for (var x = 0; x < v.interactions.list.length; x++) {
        var T = v.interactions.list[x];
        if (!(T.pointerType !== s || /down/i.test(p) && T.simulation))
          return T;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (Tu(p, o))
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
    function Tu(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(Tu, "Tu");
    u(Tu, "Ln");
    var gf = Qo;
    Zo.default = gf;
    var Jo = {};
    function Cs(n) {
      return Cs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Cs(n);
    }
    __name(Cs, "Cs");
    u(Cs, "Nn");
    function Cu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var p = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (p != null) {
          var v, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
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
            return Ou(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Ou(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Cu, "Cu");
    u(Cu, "qn");
    function Ou(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Ou, "Ou");
    u(Ou, "Gn");
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
    function Os(n, o) {
      return Os = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Os(n, o);
    }
    __name(Os, "Os");
    u(Os, "Kn");
    function wf(n, o) {
      if (o && (Cs(o) === "object" || typeof o == "function"))
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
    var Ms = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Mu(n, o) {
      return function(a) {
        var s = o.interactions.list, p = J.getPointerType(a), v = Cu(J.getEventTargets(a), 2), E = v[0], g = v[1], x = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var T = 0; T < a.changedTouches.length; T++) {
            var O = a.changedTouches[T], P = { pointer: O, pointerId: J.getPointerId(O), pointerType: p, eventType: a.type, eventTarget: E, curEventTarget: g, scope: o }, k = Iu(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, k]);
          }
        } else {
          var G = false;
          if (!F.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var R = 0; R < s.length && !G; R++)
              G = s[R].pointerType !== "mouse" && s[R].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G) {
            var q = { pointer: a, pointerId: J.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: g, eventTarget: E, scope: o }, X = Iu(q);
            x.push([q.pointer, q.eventTarget, q.curEventTarget, X]);
          }
        }
        for (var $ = 0; $ < x.length; $++) {
          var re = Cu(x[$], 4), oe = re[0], de = re[1], Pe = re[2];
          re[3][n](oe, a, de, Pe);
        }
      };
    }
    __name(Mu, "Mu");
    u(Mu, "tr");
    function Iu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Zo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(Iu, "Iu");
    u(Iu, "er");
    function Is(n, o) {
      var a = n.doc, s = n.scope, p = n.options, v = s.interactions.docEvents, E = s.events, g = E[o];
      for (var x in s.browser.isIOS && !p.events && (p.events = { passive: false }), E.delegatedEvents)
        g(a, x, E.delegateListener), g(a, x, E.delegateUseCapture, true);
      for (var T = p && p.events, O = 0; O < v.length; O++) {
        var P = v[O];
        g(a, P.type, P.listener, T);
      }
    }
    __name(Is, "Is");
    u(Is, "nr");
    var xf = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < Ms.length; a++) {
        var s = Ms[a];
        o[s] = Mu(s, n);
      }
      var p, v = F.default.pEventTypes;
      function E() {
        for (var g = 0; g < n.interactions.list.length; g++) {
          var x = n.interactions.list[g];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var T = function() {
              var P = x.pointers[O];
              n.documents.some(function(k) {
                var G = k.doc;
                return (0, z.nodeContains)(G, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, O = 0; O < x.pointers.length; O++)
              T();
        }
      }
      __name(E, "E");
      u(E, "a"), (p = M.default.PointerEvent ? [{ type: v.down, listener: E }, { type: v.down, listener: o.pointerDown }, { type: v.move, listener: o.pointerMove }, { type: v.up, listener: o.pointerUp }, { type: v.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var x = 0; x < n.interactions.list.length; x++)
          n.interactions.list[x].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(R, q) {
          if (typeof q != "function" && q !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(q && q.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), q && Os(R, q);
        })(G, g);
        var x, T, O, P, k = (O = G, P = function() {
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
          var R, q = Ko(O);
          if (P) {
            var X = Ko(this).constructor;
            R = Reflect.construct(q, arguments, X);
          } else
            R = q.apply(this, arguments);
          return wf(this, R);
        });
        function G() {
          return bf(this, G), k.apply(this, arguments);
        }
        __name(G, "G");
        return u(G, "s"), x = G, (T = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(R) {
          n.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && yf(x.prototype, T), Object.defineProperty(x, "prototype", { writable: false }), G;
      }(kt.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(T, O) {
          return n.fire(T, O);
        };
        var x = new n.Interaction(g);
        return n.interactions.list.push(x), x;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Qn.default);
    }, listeners: { "scope:add-document": function(n) {
      return Is(n, "add");
    }, "scope:remove-document": function(n) {
      return Is(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: Is, doOnInteractions: Mu, methodNames: Ms }, Ef = xf;
    Jo.default = Ef;
    var ki = {};
    function Ps(n) {
      return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ps(n);
    }
    __name(Ps, "Ps");
    u(Ps, "ar");
    function Ni() {
      return Ni = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(n, o, a) {
        var s = Sf(n, o);
        if (s) {
          var p = Object.getOwnPropertyDescriptor(s, o);
          return p.get ? p.get.call(arguments.length < 3 ? n : a) : p.value;
        }
      }, Ni.apply(this, arguments);
    }
    __name(Ni, "Ni");
    u(Ni, "sr");
    function Sf(n, o) {
      for (; !Object.prototype.hasOwnProperty.call(n, o) && (n = Qr(n)) !== null; )
        ;
      return n;
    }
    __name(Sf, "Sf");
    u(Sf, "lr");
    function As(n, o) {
      return As = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, As(n, o);
    }
    __name(As, "As");
    u(As, "ur");
    function Tf(n, o) {
      if (o && (Ps(o) === "object" || typeof o == "function"))
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
    function Pu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Pu, "Pu");
    u(Pu, "dr");
    function Au(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Au, "Au");
    u(Au, "pr");
    function zu(n, o, a) {
      return o && Au(n.prototype, o), a && Au(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(zu, "zu");
    u(zu, "vr");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vt, "vt");
    u(vt, "hr"), Object.defineProperty(ki, "__esModule", { value: true }), ki.Scope = void 0, ki.initScope = _u;
    var Cf = function() {
      function n() {
        var o = this;
        Pu(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", F.default), vt(this, "defaults", (0, gn.default)(Mi.defaults)), vt(this, "Eventable", zi.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, xs.createInteractStatic)(this)), vt(this, "InteractEvent", Ii.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new Yo.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(x, T) {
            if (typeof T != "function" && T !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(T && T.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), T && As(x, T);
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
            var x, T = Qr(p);
            if (v) {
              var O = Qr(this).constructor;
              x = Reflect.construct(T, arguments, O);
            } else
              x = T.apply(this, arguments);
            return Tf(this, x);
          });
          function g() {
            return Pu(this, g), E.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), zu(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(x) {
            return Ni(Qr(g.prototype), "set", this).call(this, x), a.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Ni(Qr(g.prototype), "unset", this).call(this);
            var x = a.interactables.list.indexOf(this);
            x < 0 || (Ni(Qr(g.prototype), "unset", this).call(this), a.interactables.list.splice(x, 1), a.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }(Vo.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), zu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : _u(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, v = o.before.reduce(function(g, x) {
            return g[x] = true, g[Ru(x)] = true, g;
          }, {}); s < p; s++) {
            var E = this.listenerMaps[s].id;
            if (v[E] || v[Ru(E)])
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
    function _u(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), M.default.init(o), F.default.init(o), Et.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Jo.default), n.usePlugin(Xo.default), n;
    }
    __name(_u, "_u");
    u(_u, "yr");
    function Ru(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(Ru, "Ru");
    u(Ru, "mr"), ki.Scope = Cf;
    var zs = {}, nt = {};
    Object.defineProperty(nt, "__esModule", { value: true });
    var Of = {};
    nt.default = void 0, Object.keys(zs).forEach(function(n) {
      n !== "default" && n !== "__esModule" && (Object.prototype.hasOwnProperty.call(Of, n) || n in nt && nt[n] === zs[n] || Object.defineProperty(nt, n, { enumerable: true, get: function() {
        return zs[n];
      } }));
    });
    var Du = new ki.Scope(), Mf = Du.interactStatic;
    nt.default = Mf;
    var If = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Du.init(If);
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
          var v, E, g = [], x = true, T = false;
          try {
            for (p = p.call(a); !(x = (v = p.next()).done) && (g.push(v.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
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
            return Nu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Nu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ku, "ku");
    u(ku, "jr");
    function Nu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Nu, "Nu");
    u(Nu, "Mr"), Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0, ra.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = ku(s, 2), v = p[0], E = p[1];
        return v in n || E in n;
      }), a = u(function(s, p) {
        for (var v = n.range, E = n.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = n.offset, T = x === void 0 ? { x: 0, y: 0 } : x, O = { range: v, grid: n, x: null, y: null }, P = 0; P < o.length; P++) {
          var k = ku(o[P], 2), G = k[0], R = k[1], q = Math.round((s - T.x) / n[G]), X = Math.round((p - T.y) / n[R]);
          O[G] = Math.max(g.left, Math.min(g.right, q * n[G] + T.x)), O[R] = Math.max(g.top, Math.min(g.bottom, X * n[R] + T.y));
        }
        return O;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: true }), Object.defineProperty(Gi, "edgeTarget", { enumerable: true, get: function() {
      return ea.default;
    } }), Object.defineProperty(Gi, "elements", { enumerable: true, get: function() {
      return ta.default;
    } }), Object.defineProperty(Gi, "grid", { enumerable: true, get: function() {
      return ra.default;
    } });
    var na = {};
    Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0;
    var Pf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, Gi), o.createSnapGrid = o.snappers.grid;
    } }, Af = Pf;
    na.default = Af;
    var Kn = {};
    function Gu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(Gu, "Gu");
    u(Gu, "Cr");
    function _s(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Gu(Object(a), true).forEach(function(s) {
          zf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Gu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(_s, "_s");
    u(_s, "Rr");
    function zf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zf, "zf");
    u(zf, "Fr"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = Kn.aspectRatio = void 0;
    var Lu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, v = o.options.ratio, E = o.options, g = E.equalDelta, x = E.modifiers;
      v === "preserve" && (v = a.width / a.height), o.startCoords = (0, W.default)({}, p), o.startRect = (0, W.default)({}, a), o.ratio = v, o.equalDelta = g;
      var T = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta) {
        var O = (T.left ? 1 : -1) * (T.top ? 1 : -1);
        o.edgeSign = { x: O, y: O };
      } else
        o.edgeSign = { x: T.left ? -1 : 1, y: T.top ? -1 : 1 };
      if ((0, W.default)(n.edges, T), x && x.length) {
        var P = new bn.default(n.interaction);
        P.copyFrom(n.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(_s({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, W.default)({}, s), v = o.equalDelta ? _f : Rf;
      if (v(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var E = (0, W.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, E, { x: s.x - p.x, y: s.y - p.y });
      var g = o.subModification.setAll(_s(_s({}, n), {}, { rect: E, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: E })), x = g.delta;
      return g.changed && (v(o, Math.abs(x.x) > Math.abs(x.y), g.coords, g.rect), (0, W.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function _f(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p.y : a.x = s.x + (a.y - s.y) * p.x;
    }
    __name(_f, "_f");
    u(_f, "Br");
    function Rf(n, o, a, s) {
      var p = n.startRect, v = n.startCoords, E = n.ratio, g = n.edgeSign;
      if (o) {
        var x = s.width / E;
        a.y = v.y + (x - p.height) * g.y;
      } else {
        var T = s.height * E;
        a.x = v.x + (T - p.width) * g.x;
      }
    }
    __name(Rf, "Rf");
    u(Rf, "Yr"), Kn.aspectRatio = Lu;
    var Df = (0, mt.makeModifier)(Lu, "aspectRatio");
    Kn.default = Df;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = void 0;
    var ju = u(function() {
    }, "Ur");
    ju._defaults = {};
    var kf = ju;
    xn.default = kf;
    var Rs = {};
    Object.defineProperty(Rs, "__esModule", { value: true }), Object.defineProperty(Rs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Pt = {};
    function Ds(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    __name(Ds, "Ds");
    u(Ds, "Gr"), Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0, Pt.getRestrictionRect = Ds, Pt.restrict = void 0;
    var Hu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, v = n.pageCoords, E = s.options, g = E.elementRect, x = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && g) {
        var T = Ds(E.restriction, p, v);
        if (T) {
          var O = T.right - T.left - o.width, P = T.bottom - T.top - o.height;
          O < 0 && (x.left += O, x.right += O), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += a.left - o.width * g.left, x.top += a.top - o.height * g.top, x.right += a.right - o.width * (1 - g.right), x.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = x;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, v = s.offset, E = Ds(p.restriction, a, o);
      if (E) {
        var g = ce.xywhToTlbr(E);
        o.x = Math.max(Math.min(g.right - v.right, o.x), g.left + v.left), o.y = Math.max(Math.min(g.bottom - v.bottom, o.y), g.top + v.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Pt.restrict = Hu;
    var Nf = (0, mt.makeModifier)(Hu, "restrict");
    Pt.default = Nf;
    var Er = {};
    Object.defineProperty(Er, "__esModule", { value: true }), Er.restrictEdges = Er.default = void 0;
    var Bu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, qu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function $u(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name($u, "$u");
    u($u, "Qr");
    var Fu = { noInner: Bu, noOuter: qu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, v = p.options;
      if (v) {
        var E = (0, Pt.getRestrictionRect)(v.offset, a, a.coords.start.page);
        o = ce.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, v = p.offset, E = p.options;
      if (a) {
        var g = (0, W.default)({}, o), x = (0, Pt.getRestrictionRect)(E.inner, s, g) || {}, T = (0, Pt.getRestrictionRect)(E.outer, s, g) || {};
        $u(x, Bu), $u(T, qu), a.top ? o.y = Math.min(Math.max(T.top + v.top, g.y), x.top + v.top) : a.bottom && (o.y = Math.max(Math.min(T.bottom + v.bottom, g.y), x.bottom + v.bottom)), a.left ? o.x = Math.min(Math.max(T.left + v.left, g.x), x.left + v.left) : a.right && (o.x = Math.max(Math.min(T.right + v.right, g.x), x.right + v.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Er.restrictEdges = Fu;
    var Gf = (0, mt.makeModifier)(Fu, "restrictEdges");
    Er.default = Gf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictRect = ei.default = void 0;
    var Lf = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Pt.restrict.defaults), Wu = { start: Pt.restrict.start, set: Pt.restrict.set, defaults: Lf };
    ei.restrictRect = Wu;
    var jf = (0, mt.makeModifier)(Wu, "restrictRect");
    ei.default = jf;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictSize = ti.default = void 0;
    var Hf = { width: -1 / 0, height: -1 / 0 }, Bf = { width: 1 / 0, height: 1 / 0 }, Uu = { start: function(n) {
      return Er.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, v = a.options;
      if (p) {
        var E = ce.tlbrToXywh((0, Pt.getRestrictionRect)(v.min, o, n.coords)) || Hf, g = ce.tlbrToXywh((0, Pt.getRestrictionRect)(v.max, o, n.coords)) || Bf;
        a.options = { endOnly: v.endOnly, inner: (0, W.default)({}, Er.restrictEdges.noInner), outer: (0, W.default)({}, Er.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - E.height, a.options.outer.top = s.bottom - g.height) : p.bottom && (a.options.inner.bottom = s.top + E.height, a.options.outer.bottom = s.top + g.height), p.left ? (a.options.inner.left = s.right - E.width, a.options.outer.left = s.right - g.width) : p.right && (a.options.inner.right = s.left + E.width, a.options.outer.right = s.left + g.width), Er.restrictEdges.set(n), a.options = v;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ti.restrictSize = Uu;
    var qf = (0, mt.makeModifier)(Uu, "restrictSize");
    ti.default = qf;
    var ks = {};
    Object.defineProperty(ks, "__esModule", { value: true }), Object.defineProperty(ks, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.snap = Jr.default = void 0;
    var Vu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, v = n.rect, E = n.state, g = n.startOffset, x = E.options, T = x.offsetWithOrigin ? function(k) {
        var G = k.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(k.state.options.origin, null, null, [G])) || (0, Le.default)(k.interactable, G, k.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var O = (0, ce.resolveRectLike)(x.offset, s, p, [a]);
        (o = (0, ce.rectToXY)(O) || { x: 0, y: 0 }).x += T.x, o.y += T.y;
      }
      var P = x.relativePoints;
      E.offsets = v && P && P.length ? P.map(function(k, G) {
        return { index: G, relativePoint: k, x: g.left - v.width * k.x + o.x, y: g.top - v.height * k.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, v = s.offsets, E = (0, Le.default)(o.interactable, o.element, o.prepared.name), g = (0, W.default)({}, a), x = [];
      p.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var T = 0; T < v.length; T++)
        for (var O = v[T], P = g.x - O.x, k = g.y - O.y, G = 0, R = p.targets.length; G < R; G++) {
          var q, X = p.targets[G];
          (q = c.default.func(X) ? X(P, k, o._proxy, O, G) : X) && x.push({ x: (c.default.number(q.x) ? q.x : P) + O.x, y: (c.default.number(q.y) ? q.y : k) + O.y, range: c.default.number(q.range) ? q.range : p.range, source: X, index: G, offset: O });
        }
      for (var $ = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < x.length; re++) {
        var oe = x[re], de = oe.range, Pe = oe.x - g.x, je = oe.y - g.y, ge = (0, rt.default)(Pe, je), Ne = ge <= de;
        de === 1 / 0 && $.inRange && $.range !== 1 / 0 && (Ne = false), $.target && !(Ne ? $.inRange && de !== 1 / 0 ? ge / de < $.distance / $.range : de === 1 / 0 && $.range !== 1 / 0 || ge < $.distance : !$.inRange && ge < $.distance) || ($.target = oe, $.distance = ge, $.range = de, $.inRange = Ne, $.delta.x = Pe, $.delta.y = je);
      }
      return $.inRange && (a.x = $.target.x, a.y = $.target.y), s.closest = $, $;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Jr.snap = Vu;
    var $f = (0, mt.makeModifier)(Vu, "snap");
    Jr.default = $f;
    var Gr = {};
    function Yu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Yu, "Yu");
    u(Yu, "yo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var Xu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Jr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, v = n.coords, E = p.options, g = p.offsets, x = { x: v.x - g[0].x, y: v.y - g[0].y };
      p.options = (0, W.default)({}, E), p.options.targets = [];
      for (var T = 0; T < (E.targets || []).length; T++) {
        var O = (E.targets || [])[T], P = void 0;
        if (P = c.default.func(O) ? O(x.x, x.y, s) : O) {
          for (var k = 0; k < p.targetFields.length; k++) {
            var G = (o = p.targetFields[k], a = 2, function($) {
              if (Array.isArray($))
                return $;
            }(o) || function($, re) {
              var oe = $ == null ? null : typeof Symbol != "undefined" && $[Symbol.iterator] || $["@@iterator"];
              if (oe != null) {
                var de, Pe, je = [], ge = true, Ne = false;
                try {
                  for (oe = oe.call($); !(ge = (de = oe.next()).done) && (je.push(de.value), !re || je.length !== re); ge = true)
                    ;
                } catch (Xt) {
                  Ne = true, Pe = Xt;
                } finally {
                  try {
                    ge || oe.return == null || oe.return();
                  } finally {
                    if (Ne)
                      throw Pe;
                  }
                }
                return je;
              }
            }(o, a) || function($, re) {
              if ($) {
                if (typeof $ == "string")
                  return Yu($, re);
                var oe = Object.prototype.toString.call($).slice(8, -1);
                return oe === "Object" && $.constructor && (oe = $.constructor.name), oe === "Map" || oe === "Set" ? Array.from($) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Yu($, re) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = G[0], q = G[1];
            if (R in P || q in P) {
              P.x = P[R], P.y = P[q];
              break;
            }
          }
          p.options.targets.push(P);
        }
      }
      var X = Jr.snap.set(n);
      return p.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = Xu;
    var Ff = (0, mt.makeModifier)(Xu, "snapSize");
    Gr.default = Ff;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.snapEdges = ri.default = void 0;
    var Zu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, W.default)((0, gn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ri.snapEdges = Zu;
    var Wf = (0, mt.makeModifier)(Zu, "snapEdges");
    ri.default = Wf;
    var Ns = {};
    Object.defineProperty(Ns, "__esModule", { value: true }), Object.defineProperty(Ns, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Gs = {};
    Object.defineProperty(Gs, "__esModule", { value: true }), Object.defineProperty(Gs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.default = void 0;
    var Uf = { aspectRatio: Kn.default, restrictEdges: Er.default, restrict: Pt.default, restrictRect: ei.default, restrictSize: ti.default, snapEdges: ri.default, snap: Jr.default, snapSize: Gr.default, spring: Ns.default, avoid: Rs.default, transform: Gs.default, rubberband: ks.default };
    ni.default = Uf;
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Vf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(mt.default), n.usePlugin(na.default), o.modifiers = ni.default, ni.default) {
        var s = ni.default[a], p = s._defaults, v = s._methods;
        p._methods = v, n.defaults.perAction[a] = p;
      }
    } }, Yf = Vf;
    ia.default = Yf;
    var En = {};
    function Ls(n) {
      return Ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ls(n);
    }
    __name(Ls, "Ls");
    u(Ls, "Io");
    function Xf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Xf, "Xf");
    u(Xf, "Do");
    function js(n, o) {
      return js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, js(n, o);
    }
    __name(js, "js");
    u(js, "Ao");
    function Zf(n, o) {
      if (o && (Ls(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Hs(n);
    }
    __name(Zf, "Zf");
    u(Zf, "zo");
    function Hs(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Hs, "Hs");
    u(Hs, "Co");
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
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && js(g, x);
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
        var g, x = oa(s);
        if (p) {
          var T = oa(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return Zf(this, g);
      });
      function E(g, x, T, O, P, k) {
        var G;
        if (function(X, $) {
          if (!(X instanceof $))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = v.call(this, P), J.pointerExtend(Hs(G), T), T !== x && J.pointerExtend(Hs(G), x), G.timeStamp = k, G.originalEvent = T, G.type = g, G.pointerId = J.getPointerId(x), G.pointerType = J.getPointerType(x), G.target = O, G.currentTarget = null, g === "tap") {
          var R = P.getPointerIndex(x);
          G.dt = G.timeStamp - P.pointers[R].downTime;
          var q = G.timeStamp - P.tapTime;
          G.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === G.target && q < 500;
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
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Li.default = void 0;
    var aa = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = aa, n.defaults.actions.pointerEvents = aa.defaults, (0, W.default)(n.actions.phaselessTypes, aa.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && Bs(n), Kr({ interaction: a, pointer: s, event: p, eventTarget: v, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, v = a.pointer, E = a.event, g = a.eventTarget, x = a.pointerIndex, T = p.pointers[x].hold, O = z.getPath(g), P = { interaction: p, pointer: v, event: E, eventTarget: g, type: "hold", targets: [], path: O, node: null }, k = 0; k < O.length; k++) {
          var G = O[k];
          P.node = G, s.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, q = 0; q < P.targets.length; q++) {
            var X = P.targets[q].eventable.options.holdDuration;
            X < R && (R = X);
          }
          T.duration = R, T.timeout = setTimeout(function() {
            Kr({ interaction: p, eventTarget: g, pointer: v, event: E, type: "hold" }, s);
          }, R);
        }
      })(n, o), Kr(n, o);
    }, "interactions:up": function(n, o) {
      Bs(n), Kr(n, o), function(a, s) {
        var p = a.interaction, v = a.pointer, E = a.event, g = a.eventTarget;
        p.pointerWasMoved || Kr({ interaction: p, eventTarget: g, pointer: v, event: E, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      Bs(n), Kr(n, o);
    } }, PointerEvent: En.PointerEvent, fire: Kr, collectEventTargets: Qu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Kr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget, E = n.type, g = n.targets, x = g === void 0 ? Qu(n, o) : g, T = new En.PointerEvent(E, s, p, v, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: T });
      for (var O = { interaction: a, pointer: s, event: p, eventTarget: v, targets: x, type: E, pointerEvent: T }, P = 0; P < x.length; P++) {
        var k = x[P];
        for (var G in k.props || {})
          T[G] = k.props[G];
        var R = (0, Le.default)(k.eventable, k.node);
        if (T._subtractOrigin(R), T.eventable = k.eventable, T.currentTarget = k.node, k.eventable.fire(T), T._addOrigin(R), T.immediatePropagationStopped || T.propagationStopped && P + 1 < x.length && x[P + 1].node !== T.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", O), E === "tap") {
        var q = T.double ? Kr({ interaction: a, pointer: s, event: p, eventTarget: v, type: "doubletap" }, o) : T;
        a.prevTap = q, a.tapTime = q.timeStamp;
      }
      return T;
    }
    __name(Kr, "Kr");
    u(Kr, "Yo");
    function Qu(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, v = n.eventTarget, E = n.type, g = a.getPointerIndex(s), x = a.pointers[g];
      if (E === "tap" && (a.pointerWasMoved || !x || x.downTarget !== v))
        return [];
      for (var T = z.getPath(v), O = { interaction: a, pointer: s, event: p, eventTarget: v, type: E, path: T, targets: [], node: null }, P = 0; P < T.length; P++) {
        var k = T[P];
        O.node = k, o.fire("pointerEvents:collect-targets", O);
      }
      return E === "hold" && (O.targets = O.targets.filter(function(G) {
        var R;
        return G.eventable.options.holdDuration === ((R = a.pointers[g]) == null ? void 0 : R.hold.duration);
      })), O.targets;
    }
    __name(Qu, "Qu");
    u(Qu, "Wo");
    function Bs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(Bs, "Bs");
    u(Bs, "Lo");
    var Jf = aa;
    Li.default = Jf;
    var sa = {};
    function Kf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Kf, "Kf");
    u(Kf, "No"), Object.defineProperty(sa, "__esModule", { value: true }), sa.default = void 0;
    var eh = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Li.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Kf, n;
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
      (0, W.default)(a.events.options, o.pointerEvents.defaults), (0, W.default)(a.events.options, s.pointerEvents || {});
    } } }, ih = nh;
    la.default = ih;
    var ua = {};
    Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var oh = { id: "pointer-events", install: function(n) {
      n.usePlugin(Li), n.usePlugin(sa.default), n.usePlugin(la.default);
    } }, ah = oh;
    ua.default = ah;
    var ji = {};
    function Ju(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, v) {
          for (var E = c.default.string(s.target) ? Oe.from(s._context.querySelectorAll(s.target)) : [s.target], g = v.window.Promise, x = g ? [] : null, T = function() {
            var P = E[O], k = s.getRect(P);
            if (!k)
              return "break";
            var G = Oe.find(v.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === P && re.prepared.name === p.name;
            }), R = void 0;
            if (G)
              G.move(), x && (R = G._reflowPromise || new g(function(re) {
                G._reflowResolve = re;
              }));
            else {
              var q = (0, ce.tlbrToXywh)(k), X = { page: { x: q.x, y: q.y }, client: { x: q.x, y: q.y }, timeStamp: v.now() }, $ = J.coordsToEvent(X);
              R = function(re, oe, de, Pe, je) {
                var ge = re.interactions.new({ pointerType: "reflow" }), Ne = { interaction: ge, event: je, pointer: je, eventTarget: de, phase: "reflow" };
                ge.interactable = oe, ge.element = de, ge.prevEvent = je, ge.updatePointer(je, je, de, true), J.setZeroCoords(ge.coords.delta), (0, jt.copyAction)(ge.prepared, Pe), ge._doPhase(Ne);
                var Xt = re.window.Promise, Lr = Xt ? new Xt(function(Fs) {
                  ge._reflowResolve = Fs;
                }) : void 0;
                return ge._reflowPromise = Lr, ge.start(Pe, oe, de), ge._interacting ? (ge.move(Ne), ge.end(je)) : (ge.stop(), ge._reflowResolve()), ge.removePointer(je, je), Lr;
              }(v, s, P, p, $);
            }
            x && x.push(R);
          }, O = 0; O < E.length && T() !== "break"; O++)
            ;
          return x && g.all(x).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Ju, "Ju");
    u(Ju, "ni"), Object.defineProperty(ji, "__esModule", { value: true }), ji.default = void 0, ji.install = Ju;
    var sh = { id: "reflow", install: Ju, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), Oe.remove(o.interactions.list, a));
    } } }, lh = sh;
    ji.default = lh;
    var Yt = { exports: {} };
    function qs(n) {
      return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, qs(n);
    }
    __name(qs, "qs");
    u(qs, "ai"), Object.defineProperty(Yt.exports, "__esModule", { value: true }), Yt.exports.default = void 0, nt.default.use(Qn.default), nt.default.use(wn.default), nt.default.use(ua.default), nt.default.use(Jn.default), nt.default.use(ia.default), nt.default.use(Ho.default), nt.default.use(Vt.default), nt.default.use(Zr.default), nt.default.use(ji.default);
    var uh = nt.default;
    if (Yt.exports.default = uh, qs(Yt) === "object" && Yt)
      try {
        Yt.exports = nt.default;
      } catch (n) {
      }
    nt.default.default = nt.default, Yt = Yt.exports;
    var Sn = { exports: {} };
    function $s(n) {
      return $s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, $s(n);
    }
    __name($s, "$s");
    u($s, "ui"), Object.defineProperty(Sn.exports, "__esModule", { value: true }), Sn.exports.default = void 0;
    var ch = Yt.default;
    if (Sn.exports.default = ch, $s(Sn) === "object" && Sn)
      try {
        Sn.exports = Yt.default;
      } catch (n) {
      }
    return Yt.default.default = Yt.default, Sn.exports;
  });
});
var yd = ca((bd, tu) => {
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
      var y = h ? d.bind(h) : d;
      return this.reads.push(y), l(this), y;
    }, mutate: function(d, h) {
      e("mutate");
      var y = h ? d.bind(h) : d;
      return this.writes.push(y), l(this), y;
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
      var h = d.writes, y = d.reads, w;
      try {
        e("flushing reads", y.length), d.runTasks(y), e("flushing writes", h.length), d.runTasks(h);
      } catch (S) {
        w = S;
      }
      if (d.scheduled = false, (y.length || h.length) && l(d), w)
        if (e("task errored", w.message), d.catch)
          d.catch(w);
        else
          throw w;
    }
    __name(c, "c");
    u(c, "flush");
    function f(d, h) {
      var y = d.indexOf(h);
      return !!~y && !!d.splice(y, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function b(d, h) {
      for (var y in h)
        h.hasOwnProperty(y) && (d[y] = h[y]);
    }
    __name(b, "b");
    u(b, "mixin");
    var m = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof tu == "object" && (tu.exports = m);
  })(typeof window != "undefined" ? window : bd);
});
var Sd = ca((nu, Ed) => {
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
      var y = d * d;
      return y * (y * (y * (y * (y * (y * (y * (y / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(d, h) {
      var y = Math.abs(d), w = Math.abs(h);
      return y < 3e3 && w < 3e3 ? Math.sqrt(y * y + w * w) : (y < w ? (y = w, w = d / h) : w = h / d, y * Math.sqrt(1 + w * w));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(d, h) {
      var y = Math.abs(d), w = Math.abs(h);
      return d === 0 ? Math.log(w) : h === 0 ? Math.log(y) : y < 3e3 && w < 3e3 ? Math.log(d * d + h * h) * 0.5 : (d = d / 2, h = h / 2, 0.5 * Math.log(d * d + h * h) + Math.LN2);
    }
    __name(f, "f");
    u(f, "logHypot");
    var b = u(function(d, h) {
      var y = { re: 0, im: 0 };
      if (d == null)
        y.re = y.im = 0;
      else if (h !== void 0)
        y.re = d, y.im = h;
      else
        switch (typeof d) {
          case "object":
            if ("im" in d && "re" in d)
              y.re = d.re, y.im = d.im;
            else if ("abs" in d && "arg" in d) {
              if (!Number.isFinite(d.abs) && Number.isFinite(d.arg))
                return m.INFINITY;
              y.re = d.abs * Math.cos(d.arg), y.im = d.abs * Math.sin(d.arg);
            } else if ("r" in d && "phi" in d) {
              if (!Number.isFinite(d.r) && Number.isFinite(d.phi))
                return m.INFINITY;
              y.re = d.r * Math.cos(d.phi), y.im = d.r * Math.sin(d.phi);
            } else
              d.length === 2 ? (y.re = d[0], y.im = d[1]) : c();
            break;
          case "string":
            y.im = y.re = 0;
            var w = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, C = 0;
            w === null && c();
            for (var M = 0; M < w.length; M++) {
              var _ = w[M];
              _ === " " || _ === "	" || _ === `
` || (_ === "+" ? S++ : _ === "-" ? C++ : _ === "i" || _ === "I" ? (S + C === 0 && c(), w[M + 1] !== " " && !isNaN(w[M + 1]) ? (y.im += parseFloat((C % 2 ? "-" : "") + w[M + 1]), M++) : y.im += parseFloat((C % 2 ? "-" : "") + "1"), S = C = 0) : ((S + C === 0 || isNaN(_)) && c(), w[M + 1] === "i" || w[M + 1] === "I" ? (y.im += parseFloat((C % 2 ? "-" : "") + _), M++) : y.re += parseFloat((C % 2 ? "-" : "") + _), S = C = 0));
            }
            S + C > 0 && c();
            break;
          case "number":
            y.im = 0, y.re = d;
            break;
          default:
            c();
        }
      return isNaN(y.re) || isNaN(y.im), y;
    }, "parse");
    function m(d, h) {
      if (!(this instanceof m))
        return new m(d, h);
      var y = b(d, h);
      this.re = y.re, this.im = y.im;
    }
    __name(m, "m");
    u(m, "Complex"), m.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new m(this.re / d, this.im / d);
    }, add: function(d, h) {
      var y = new m(d, h);
      return this.isInfinite() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : new m(this.re + y.re, this.im + y.im);
    }, sub: function(d, h) {
      var y = new m(d, h);
      return this.isInfinite() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : new m(this.re - y.re, this.im - y.im);
    }, mul: function(d, h) {
      var y = new m(d, h);
      return this.isInfinite() && y.isZero() || this.isZero() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : y.im === 0 && this.im === 0 ? new m(this.re * y.re, 0) : new m(this.re * y.re - this.im * y.im, this.re * y.im + this.im * y.re);
    }, div: function(d, h) {
      var y = new m(d, h);
      if (this.isZero() && y.isZero() || this.isInfinite() && y.isInfinite())
        return m.NAN;
      if (this.isInfinite() || y.isZero())
        return m.INFINITY;
      if (this.isZero() || y.isInfinite())
        return m.ZERO;
      d = this.re, h = this.im;
      var w = y.re, S = y.im, C, M;
      return S === 0 ? new m(d / w, h / w) : Math.abs(w) < Math.abs(S) ? (M = w / S, C = w * M + S, new m((d * M + h) / C, (h * M - d) / C)) : (M = S / w, C = S * M + w, new m((d + h * M) / C, (h - d * M) / C));
    }, pow: function(d, h) {
      var y = new m(d, h);
      if (d = this.re, h = this.im, y.isZero())
        return m.ONE;
      if (y.im === 0) {
        if (h === 0 && d > 0)
          return new m(Math.pow(d, y.re), 0);
        if (d === 0)
          switch ((y.re % 4 + 4) % 4) {
            case 0:
              return new m(Math.pow(h, y.re), 0);
            case 1:
              return new m(0, Math.pow(h, y.re));
            case 2:
              return new m(-Math.pow(h, y.re), 0);
            case 3:
              return new m(0, -Math.pow(h, y.re));
          }
      }
      if (d === 0 && h === 0 && y.re > 0 && y.im >= 0)
        return m.ZERO;
      var w = Math.atan2(h, d), S = f(d, h);
      return d = Math.exp(y.re * S - y.im * w), h = y.im * S + y.re * w, new m(d * Math.cos(h), d * Math.sin(h));
    }, sqrt: function() {
      var d = this.re, h = this.im, y = this.abs(), w, S;
      if (d >= 0) {
        if (h === 0)
          return new m(Math.sqrt(d), 0);
        w = 0.5 * Math.sqrt(2 * (y + d));
      } else
        w = Math.abs(h) / Math.sqrt(2 * (y - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (y - d)) : S = Math.abs(h) / Math.sqrt(2 * (y + d)), new m(w, h < 0 ? -S : S);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im === 0, new m(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, h = this.im;
      return new m(Math.expm1(d) * Math.cos(h) + i(h), Math.exp(d) * Math.sin(h));
    }, log: function() {
      var d = this.re, h = this.im;
      return h === 0 && d > 0, new m(f(d, h), Math.atan2(h, d));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, h = this.im;
      return new m(Math.sin(d) * e(h), Math.cos(d) * t(h));
    }, cos: function() {
      var d = this.re, h = this.im;
      return new m(Math.cos(d) * e(h), -Math.sin(d) * t(h));
    }, tan: function() {
      var d = 2 * this.re, h = 2 * this.im, y = Math.cos(d) + e(h);
      return new m(Math.sin(d) / y, t(h) / y);
    }, cot: function() {
      var d = 2 * this.re, h = 2 * this.im, y = Math.cos(d) - e(h);
      return new m(-Math.sin(d) / y, t(h) / y);
    }, sec: function() {
      var d = this.re, h = this.im, y = 0.5 * e(2 * h) + 0.5 * Math.cos(2 * d);
      return new m(Math.cos(d) * e(h) / y, Math.sin(d) * t(h) / y);
    }, csc: function() {
      var d = this.re, h = this.im, y = 0.5 * e(2 * h) - 0.5 * Math.cos(2 * d);
      return new m(Math.sin(d) * e(h) / y, -Math.cos(d) * t(h) / y);
    }, asin: function() {
      var d = this.re, h = this.im, y = new m(h * h - d * d + 1, -2 * d * h).sqrt(), w = new m(y.re - h, y.im + d).log();
      return new m(w.im, -w.re);
    }, acos: function() {
      var d = this.re, h = this.im, y = new m(h * h - d * d + 1, -2 * d * h).sqrt(), w = new m(y.re - h, y.im + d).log();
      return new m(Math.PI / 2 - w.im, w.re);
    }, atan: function() {
      var d = this.re, h = this.im;
      if (d === 0) {
        if (h === 1)
          return new m(0, 1 / 0);
        if (h === -1)
          return new m(0, -1 / 0);
      }
      var y = d * d + (1 - h) * (1 - h), w = new m((1 - h * h - d * d) / y, -2 * d / y).log();
      return new m(-0.5 * w.im, 0.5 * w.re);
    }, acot: function() {
      var d = this.re, h = this.im;
      if (h === 0)
        return new m(Math.atan2(1, d), 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).atan() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new m(0, 1 / 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).acos() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new m(Math.PI / 2, 1 / 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).asin() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, h = this.im;
      return new m(t(d) * Math.cos(h), e(d) * Math.sin(h));
    }, cosh: function() {
      var d = this.re, h = this.im;
      return new m(e(d) * Math.cos(h), t(d) * Math.sin(h));
    }, tanh: function() {
      var d = 2 * this.re, h = 2 * this.im, y = e(d) + Math.cos(h);
      return new m(t(d) / y, Math.sin(h) / y);
    }, coth: function() {
      var d = 2 * this.re, h = 2 * this.im, y = e(d) - Math.cos(h);
      return new m(t(d) / y, -Math.sin(h) / y);
    }, csch: function() {
      var d = this.re, h = this.im, y = Math.cos(2 * h) - e(2 * d);
      return new m(-2 * t(d) * Math.cos(h) / y, 2 * e(d) * Math.sin(h) / y);
    }, sech: function() {
      var d = this.re, h = this.im, y = Math.cos(2 * h) + e(2 * d);
      return new m(2 * e(d) * Math.cos(h) / y, -2 * t(d) * Math.sin(h) / y);
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
      var d = this.re, h = this.im, y = d > 1 && h === 0, w = 1 - d, S = 1 + d, C = w * w + h * h, M = C !== 0 ? new m((S * w - h * h) / C, (h * w + S * h) / C) : new m(d !== -1 ? d / 0 : 0, h !== 0 ? h / 0 : 0), _ = M.re;
      return M.re = f(M.re, M.im) / 2, M.im = Math.atan2(M.im, _) / 2, y && (M.im = -M.im), M;
    }, acoth: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new m(0, Math.PI / 2);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).atanh() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, h = this.im;
      if (h === 0)
        return new m(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).asinh() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, h = this.im;
      if (this.isZero())
        return m.INFINITY;
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).acosh() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return m.INFINITY;
      if (this.isInfinite())
        return m.ZERO;
      var d = this.re, h = this.im, y = d * d + h * h;
      return new m(d / y, -h / y);
    }, conjugate: function() {
      return new m(this.re, -this.im);
    }, neg: function() {
      return new m(-this.re, -this.im);
    }, ceil: function(d) {
      return d = Math.pow(10, d || 0), new m(Math.ceil(this.re * d) / d, Math.ceil(this.im * d) / d);
    }, floor: function(d) {
      return d = Math.pow(10, d || 0), new m(Math.floor(this.re * d) / d, Math.floor(this.im * d) / d);
    }, round: function(d) {
      return d = Math.pow(10, d || 0), new m(Math.round(this.re * d) / d, Math.round(this.im * d) / d);
    }, equals: function(d, h) {
      var y = new m(d, h);
      return Math.abs(y.re - this.re) <= m.EPSILON && Math.abs(y.im - this.im) <= m.EPSILON;
    }, clone: function() {
      return new m(this.re, this.im);
    }, toString: function() {
      var d = this.re, h = this.im, y = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < m.EPSILON && (d = 0), Math.abs(h) < m.EPSILON && (h = 0), h === 0 ? y + d : (d !== 0 ? (y += d, y += " ", h < 0 ? (h = -h, y += "-") : y += "+", y += " ") : h < 0 && (h = -h, y += "-"), h !== 1 && (y += h), y + "i"));
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
    } }, m.ZERO = new m(0, 0), m.ONE = new m(1, 0), m.I = new m(0, 1), m.PI = new m(Math.PI, 0), m.E = new m(Math.E, 0), m.INFINITY = new m(1 / 0, 1 / 0), m.NAN = new m(NaN, NaN), m.EPSILON = 1e-15, typeof define == "function" && define.amd ? define([], function() {
      return m;
    }) : typeof nu == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, Ed.exports = m) : r.Complex = m;
  })(nu);
});
var tn = Tn(rc());
function nc(r) {
  let e = rn(r);
  return new tn.default(e).valueOf() * Math.PI;
}
__name(nc, "nc");
u(nc, "K");
function qi(r) {
  let e = rn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(qi, "qi");
u(qi, "V");
function ic(r, e) {
  return new tn.default(rn(r)).valueOf() < new tn.default(rn(e)).valueOf();
}
__name(ic, "ic");
u(ic, "Y");
function oc(r, e) {
  return new tn.default(rn(r)).valueOf() > new tn.default(rn(e)).valueOf();
}
__name(oc, "oc");
u(oc, "W");
function ac(r) {
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
__name(ac, "ac");
u(ac, "H");
function rn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(rn, "rn");
u(rn, "l");
function sc(r) {
  try {
    let e = rn(r), t = new tn.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(sc, "sc");
u(sc, "J");
var gh = Object.prototype.toString.call({});
var bh = "!recursion-limit!";
var yh = 10;
function Ye(r, e = yh) {
  return wh(r) || xh(r, e) || Eh(r, e);
}
__name(Ye, "Ye");
u(Ye, "f");
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
    let c = Ye(i, e - 1), f = Ye(l, e - 1);
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
    t.push(Ye(i, e - 1));
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
    t.push(Ye(i, e - 1));
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
    let c = r[l], f = Ye(l, e - 1), b = Ye(c, e - 1);
    t.push(`${f}: ${b}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(Oh, "Oh");
u(Oh, "N");
var Us = 0;
var it = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Us++;
    try {
      this.details = Us === 1 ? Ye(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Us--;
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
var Bi = Ht;
Bi.CONSISTENT = new Ht(false, 0, 2, ", "), Bi.EXACT = new Ht(true, 0, void 0, ", "), Bi.MINIFIED = new Ht(true, 0, void 0, ","), Bi.SIMPLIFIED = new Ht(true, 5e-4, 3, ", ");
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
var fe = u(class {
  static from(r) {
    if (r instanceof fe)
      return r;
    if (typeof r == "number")
      return new fe(r, 0);
    throw new it("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = H.snappedCosSin(e);
    return new fe(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof fe)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new it("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof fe)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new it("Unrecognized value type.", { v: r });
  }
  constructor(r, e) {
    this.real = r, this.imag = e;
  }
  static rootsOfQuadratic(r, e, t) {
    if (r = fe.from(r), e = fe.from(e), t = fe.from(t), r.isEqualTo(0)) {
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
    return r instanceof fe ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (r instanceof fe || typeof r == "number") {
      let t = this.minus(fe.from(r));
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
    return r < 1e-5 ? fe.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let e = fe.from(r);
    return new fe(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = fe.from(r);
    return new fe(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = fe.from(r);
    return new fe(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = fe.from(r), t = e.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let i = this.times(e.conjugate());
    return new fe(i.real / t, i.imag / t);
  }
  sqrts() {
    let [r, e] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(r * r + e * e));
    if (t === 0)
      return [fe.ZERO];
    if (e === 0 && r < 0)
      return [new fe(0, t), new fe(0, -t)];
    let i = this.phase() / 2, l = fe.polar(t, i);
    return [l, l.times(-1)];
  }
  conjugate() {
    return new fe(this.real, -this.imag);
  }
  toString(r) {
    return r = r || Bi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new fe(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new fe(Math.sqrt(this.real), 0) : fe.ZERO.isEqualTo(r) ? fe.ONE : this.isEqualTo(fe.ZERO) ? fe.ZERO : this.ln().times(fe.from(r)).exp();
  }
  exp() {
    return fe.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(fe.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(fe.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new fe(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new fe(Math.log(this.abs()), this.phase());
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
var en = fe;
en.ZERO = new fe(0, 0), en.ONE = new fe(1, 0), en.I = new fe(0, 1);
function ue(r, e = {}, t = document) {
  let i = new CustomEvent(r, { bubbles: true, cancelable: true, detail: e });
  return t.dispatchEvent(i);
}
__name(ue, "ue");
u(ue, "ue");
var Vs = "Bloch";
var Ys = "\u2022";
var ha = "H";
var ma = "Measure";
var va = "P";
var Xs = "QFT";
var Zs = "QFT\u2020";
var ga = "X^\xBD";
var ba = "Rx";
var ya = "Ry";
var wa = "Rz";
var Qs = "Swap";
var xa = "T";
var lc = "|0>";
var uc = "|1>";
var Ea = "X";
var Sa = "Y";
var Ta = "Z";
var Js = /* @__PURE__ */ new WeakSet();
function el(r) {
  Js.add(r), r.shadowRoot && tl(r.shadowRoot), nl(r), rl(r.ownerDocument);
}
__name(el, "el");
u(el, "bind");
function tl(r) {
  nl(r), rl(r);
}
__name(tl, "tl");
u(tl, "bindShadow");
var Ca = /* @__PURE__ */ new WeakMap();
function rl(r = document) {
  if (Ca.has(r))
    return Ca.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Ks(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && nl(f);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, Ca.delete(r), t.disconnect();
  } };
  return Ca.set(r, i), i;
}
__name(rl, "rl");
u(rl, "listenForBind");
function nl(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Ks(e);
  r instanceof Element && r.hasAttribute("data-action") && Ks(r);
}
__name(nl, "nl");
u(nl, "bindElements");
function Ih(r) {
  let e = r.currentTarget;
  for (let t of cc(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      Js.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && Js.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(Ih, "Ih");
u(Ih, "handleEvent");
function* cc(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(cc, "cc");
u(cc, "bindings");
function Ks(r) {
  for (let e of cc(r))
    r.addEventListener(e.type, Ih);
}
__name(Ks, "Ks");
u(Ks, "bindActions");
function il(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(il, "il");
u(il, "register");
function ol(r, e) {
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
__name(ol, "ol");
u(ol, "findTarget");
function al(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(al, "al");
u(al, "findTargets");
function xe(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return ol(this, e);
  } });
}
__name(xe, "xe");
u(xe, "target");
function At(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return al(this, e);
  } });
}
__name(At, "At");
u(At, "targets");
function sl(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(sl, "sl");
u(sl, "autoShadowRoot");
var Oa = /* @__PURE__ */ new WeakMap();
function D(r, e) {
  Oa.has(r) || Oa.set(r, []), Oa.get(r).push(e);
}
__name(D, "D");
u(D, "attr");
function ll(r, e) {
  e || (e = pc(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = dc(t), c = { configurable: true, get() {
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
__name(ll, "ll");
u(ll, "initializeAttrs");
function pc(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = Oa.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(pc, "pc");
u(pc, "getAttrNames");
function dc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(dc, "dc");
u(dc, "attrToAttributeName");
function ul(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...pc(r.prototype)].map(dc).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(ul, "ul");
u(ul, "defineObservedAttributes");
var Ph = /* @__PURE__ */ new WeakSet();
function fc(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Ph.add(r), sl(r), ll(r), el(r), e && e.call(r), r.shadowRoot && tl(r.shadowRoot);
}
__name(fc, "fc");
u(fc, "initializeInstance");
function hc(r) {
  ul(r), il(r);
}
__name(hc, "hc");
u(hc, "initializeClass");
function ee(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    fc(this, e);
  }, hc(r);
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
      this.active = true, ue("activateable:active", {}, this);
    }
    deactivate() {
      this.active = false;
    }
  }
  __name(e, "e");
  return u(e, "ActivateableMixinClass"), A([D], e.prototype, "active", 2), e;
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
  return u(e, "AngleableMixinClass"), A([D], e.prototype, "angle", 2), A([D], e.prototype, "reducedAngle", 2), e;
}
__name(nn, "nn");
u(nn, "AngleableMixin");
var $i = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function We(r) {
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
__name(We, "We");
u(We, "ControllableMixin");
function qe(r) {
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
  return u(e, "DisableableMixinClass"), A([D], e.prototype, "disabled", 2), e;
}
__name(qe, "qe");
u(qe, "DisableableMixin");
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
function ii(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(ii, "ii");
u(ii, "__rest");
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
function Re(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(Re, "Re");
u(Re, "__spreadArray");
var Ae;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Ae || (Ae = {}));
var on;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(on || (on = {}));
var Fi = Ae.Start;
var oi = Ae.Stop;
var ai = Ae.Raise;
var On = Ae.Send;
var Ma = Ae.Cancel;
var mc = Ae.NullEvent;
var cl = Ae.Assign;
var ig = Ae.After;
var og = Ae.DoneState;
var Ia = Ae.Log;
var vc = Ae.Init;
var Wi = Ae.Invoke;
var ag = Ae.ErrorExecution;
var pl = Ae.ErrorPlatform;
var dl = Ae.ErrorCustom;
var Ui = Ae.Update;
var gc = Ae.Choose;
var bc = Ae.Pure;
var Pa = ".";
var fl = {};
var Aa = "xstate.guard";
var yc = "";
var He = true;
var za;
function Yi(r, e, t) {
  t === void 0 && (t = Pa);
  var i = si(r, t), l = si(e, t);
  return ye(l) ? ye(i) ? l === i : false : ye(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Yi(i[c], l[c]) : false;
  });
}
__name(Yi, "Yi");
u(Yi, "matchesState");
function _a(r) {
  try {
    return ye(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(_a, "_a");
u(_a, "getEventType");
function Ra(r, e) {
  try {
    return jr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Ra, "Ra");
u(Ra, "toStatePath");
function Ah(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Ah, "Ah");
u(Ah, "isStateLike");
function si(r, e) {
  if (Ah(r))
    return r.value;
  if (jr(r))
    return Vi(r);
  if (typeof r != "string")
    return r;
  var t = Ra(r, e);
  return Vi(t);
}
__name(si, "si");
u(si, "toStateValue");
function Vi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Vi, "Vi");
u(Vi, "pathToStateValue");
function li(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(li, "li");
u(li, "mapValues");
function hl(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = ve(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var m = b.value, d = r[m];
      !t(d) || (c[m] = e(d, m, r));
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
__name(hl, "hl");
u(hl, "mapFilterValues");
var wc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ve(r), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        l = l[b];
      }
    } catch (m) {
      t = { error: m };
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
function xc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var f = ve(r), b = f.next(); !b.done; b = f.next()) {
        var m = b.value;
        c = c[e][m];
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
__name(xc, "xc");
u(xc, "nestedPath");
function Xi(r) {
  if (!r)
    return [[]];
  if (ye(r))
    return [[r]];
  var e = Ge(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Xi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Xi, "Xi");
u(Xi, "toStatePaths");
function Ge(r) {
  var e;
  return (e = []).concat.apply(e, Re([], be(r), false));
}
__name(Ge, "Ge");
u(Ge, "flatten");
function Ec(r) {
  return jr(r) ? r : [r];
}
__name(Ec, "Ec");
u(Ec, "toArrayStrict");
function Bt(r) {
  return r === void 0 ? [] : Ec(r);
}
__name(Bt, "Bt");
u(Bt, "toArray");
function Mn(r, e, t) {
  var i, l;
  if (ze(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = ve(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var m = b.value, d = r[m];
      ze(d) ? c[m] = d(e, t.data) : c[m] = d;
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
__name(Mn, "Mn");
u(Mn, "mapContext");
function Sc(r) {
  return /^(done|error)\./.test(r);
}
__name(Sc, "Sc");
u(Sc, "isBuiltInEvent");
function ml(r) {
  return !!(r instanceof Promise || r !== null && (ze(r) || typeof r == "object") && ze(r.then));
}
__name(ml, "ml");
u(ml, "isPromiseLike");
function Tc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(Tc, "Tc");
u(Tc, "isBehavior");
function Da(r, e) {
  var t, i, l = be([[], []], 2), c = l[0], f = l[1];
  try {
    for (var b = ve(r), m = b.next(); !m.done; m = b.next()) {
      var d = m.value;
      e(d) ? c.push(d) : f.push(d);
    }
  } catch (h) {
    t = { error: h };
  } finally {
    try {
      m && !m.done && (i = b.return) && i.call(b);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, f];
}
__name(Da, "Da");
u(Da, "partition");
function Cc(r, e) {
  return li(r.states, function(t, i) {
    if (!!t) {
      var l = (ye(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: Cc(t, l) };
    }
  });
}
__name(Cc, "Cc");
u(Cc, "updateHistoryStates");
function Oc(r, e) {
  return { current: e, states: Cc(r, e) };
}
__name(Oc, "Oc");
u(Oc, "updateHistoryValue");
function vl(r, e, t, i) {
  He || Xe(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var b, m, d = f.assignment, h = { state: i, action: f, _event: e }, y = {};
    if (ze(d))
      y = d(c, e.data, h);
    else
      try {
        for (var w = ve(Object.keys(d)), S = w.next(); !S.done; S = w.next()) {
          var C = S.value, M = d[C];
          y[C] = ze(M) ? M(c, e.data, h) : M;
        }
      } catch (_) {
        b = { error: _ };
      } finally {
        try {
          S && !S.done && (m = w.return) && m.call(w);
        } finally {
          if (b)
            throw b.error;
        }
      }
    return Object.assign({}, c, y);
  }, r);
  return l;
}
__name(vl, "vl");
u(vl, "updateContext");
var Xe = u(function() {
}, "warn");
He || (Xe = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function jr(r) {
  return Array.isArray(r);
}
__name(jr, "jr");
u(jr, "isArray");
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
function ka(r, e) {
  if (!!r)
    return ye(r) ? { type: Aa, name: r, predicate: e ? e[r] : void 0 } : ze(r) ? { type: Aa, name: r.name, predicate: r } : r;
}
__name(ka, "ka");
u(ka, "toGuard");
function Mc(r) {
  try {
    return "subscribe" in r && ze(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(Mc, "Mc");
u(Mc, "isObservable");
var Sr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var fg = (za = {}, za[Sr] = function() {
  return this;
}, za[Symbol.observable] = function() {
  return this;
}, za);
function Tr(r) {
  return !!r && "__xstatenode" in r;
}
__name(Tr, "Tr");
u(Tr, "isMachine");
function Ic(r) {
  return !!r && typeof r.send == "function";
}
__name(Ic, "Ic");
u(Ic, "isActor");
function Zi(r, e) {
  return ye(r) || typeof r == "number" ? V({ type: r }, e) : r;
}
__name(Zi, "Zi");
u(Zi, "toEventObject");
function ot(r, e) {
  if (!ye(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Zi(r);
  return V({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(ot, "ot");
u(ot, "toSCXMLEvent");
function In(r, e) {
  var t = Ec(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Tr(i) ? { target: i, event: r } : V(V({}, i), { event: r });
  });
  return t;
}
__name(In, "In");
u(In, "toTransitionConfigArray");
function Pc(r) {
  if (!(r === void 0 || r === yc))
    return Bt(r);
}
__name(Pc, "Pc");
u(Pc, "normalizeTarget");
function Ac(r, e, t) {
  if (!He) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
__name(Ac, "Ac");
u(Ac, "reportUnhandledExceptionOnInvocation");
function Na(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === Aa)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var b = c == null ? void 0 : c[e.type];
  if (!b)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return b(t, i.data, f);
}
__name(Na, "Na");
u(Na, "evaluateGuard");
function Ga(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(Ga, "Ga");
u(Ga, "toInvokeSource");
function Qi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Qi, "Qi");
u(Qi, "toObserver");
function Ji(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Ji, "Ji");
u(Ji, "createInvokeId");
var Pn = ot({ type: vc });
function La(r, e) {
  return e && e[r] || void 0;
}
__name(La, "La");
u(La, "getActionFunction");
function ui(r, e) {
  var t;
  if (ye(r) || typeof r == "number") {
    var i = La(r, e);
    ze(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (ze(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = La(r.type, e);
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
__name(ui, "ui");
u(ui, "toActionObject");
var Ki = u(function(r, e) {
  if (!r)
    return [];
  var t = jr(r) ? r : [r];
  return t.map(function(i) {
    return ui(i, e);
  });
}, "toActionObjects");
function Ha(r) {
  var e = ui(r);
  return V(V({ id: ye(r) ? r : e.id }, e), { type: e.type });
}
__name(Ha, "Ha");
u(Ha, "toActivityDefinition");
function zc(r) {
  return ye(r) ? { type: ai, event: r } : gl(r, { to: on.Internal });
}
__name(zc, "zc");
u(zc, "raise");
function zh(r) {
  return { type: ai, _event: ot(r.event) };
}
__name(zh, "zh");
u(zh, "resolveRaise");
function gl(r, e) {
  return { to: e ? e.to : void 0, type: On, event: ze(r) ? r : Zi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : ze(r) ? r.name : _a(r) };
}
__name(gl, "gl");
u(gl, "send");
function _h(r, e, t, i) {
  var l = { _event: t }, c = ot(ze(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (ye(r.delay)) {
    var b = i && i[r.delay];
    f = ze(b) ? b(e, t.data, l) : b;
  } else
    f = ze(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var m = ze(r.to) ? r.to(e, t.data, l) : r.to;
  return V(V({}, r), { to: m, _event: c, event: c.data, delay: f });
}
__name(_h, "_h");
u(_h, "resolveSend");
var Rh = u(function(r, e, t) {
  return V(V({}, r), { value: ye(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var _c = u(function(r) {
  return { type: Ma, sendId: r };
}, "cancel");
function Rc(r) {
  var e = Ha(r);
  return { type: Ae.Start, activity: e, exec: void 0 };
}
__name(Rc, "Rc");
u(Rc, "start");
function Dc(r) {
  var e = ze(r) ? r : Ha(r);
  return { type: Ae.Stop, activity: e, exec: void 0 };
}
__name(Dc, "Dc");
u(Dc, "stop");
function Dh(r, e, t) {
  var i = ze(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Ae.Stop, activity: l };
  return c;
}
__name(Dh, "Dh");
u(Dh, "resolveStop");
function kc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Ae.After, "(").concat(r, ")").concat(t);
}
__name(kc, "kc");
u(kc, "after");
function eo(r, e) {
  var t = "".concat(Ae.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(eo, "eo");
u(eo, "done");
function ci(r, e) {
  var t = "".concat(Ae.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(ci, "ci");
u(ci, "doneInvoke");
function An(r, e) {
  var t = "".concat(Ae.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(An, "An");
u(An, "error");
function ja(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = be(c ? [[], l] : Da(l, function(w) {
    return w.type === cl;
  }), 2), b = f[0], m = f[1], d = b.length ? vl(t, i, b, e) : t, h = c ? [t] : void 0, y = Ge(m.map(function(w) {
    var S;
    switch (w.type) {
      case ai:
        return zh(w);
      case On:
        var C = _h(w, d, i, r.options.delays);
        return He || Xe(!ye(w.delay) || typeof C.delay == "number", "No delay reference for delay expression '".concat(w.delay, "' was found on machine '").concat(r.id, "'")), C;
      case Ia:
        return Rh(w, d, i);
      case gc: {
        var M = w, _ = (S = M.conds.find(function(ie) {
          var ne = ka(ie.cond, r.options.guards);
          return !ne || Na(r, ne, d, i, e);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!_)
          return [];
        var B = be(ja(r, e, d, i, Ki(Bt(_), r.options.actions), c), 2), L = B[0], F = B[1];
        return d = F, h == null || h.push(d), L;
      }
      case bc: {
        var _ = w.get(d, i.data);
        if (!_)
          return [];
        var I = be(ja(r, e, d, i, Ki(Bt(_), r.options.actions), c), 2), Q = I[0], z = I[1];
        return d = z, h == null || h.push(d), Q;
      }
      case oi:
        return Dh(w, d, i);
      case cl: {
        d = vl(d, i, [w], e), h == null || h.push(d);
        break;
      }
      default:
        var j = ui(w, r.options.actions), Y = j.exec;
        if (Y && h) {
          var K = h.length - 1;
          j = V(V({}, j), { exec: function(ie) {
            for (var ne = [], pe = 1; pe < arguments.length; pe++)
              ne[pe - 1] = arguments[pe];
            Y.apply(void 0, Re([h[K]], be(ne), false));
          } });
        }
        return j;
    }
  }).filter(function(w) {
    return !!w;
  }));
  return [y, d];
}
__name(ja, "ja");
u(ja, "resolveActions");
var Nc = [];
var zn = u(function(r, e) {
  Nc.push(r);
  var t = e(r);
  return Nc.pop(), t;
}, "provide");
function Gc(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[Sr] = function() {
    return this;
  }, e;
}
__name(Gc, "Gc");
u(Gc, "createNullActor");
function Lc(r, e, t, i) {
  var l, c = Ga(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], b = r.data ? Mn(r.data, t, i) : void 0, m = f ? jc(f, r.id, b) : Gc(r.id);
  return m.meta = r, m;
}
__name(Lc, "Lc");
u(Lc, "createInvocableActor");
function jc(r, e, t) {
  var i = Gc(e);
  if (i.deferred = true, Tr(r)) {
    var l = i.state = zn(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(jc, "jc");
u(jc, "createDeferredActor");
function kh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(kh, "kh");
u(kh, "isActor");
function Hc(r) {
  return kh(r) && "id" in r;
}
__name(Hc, "Hc");
u(Hc, "isSpawnedActor");
function Bc(r) {
  var e;
  return V((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Sr] = function() {
    return this;
  }, e), r);
}
__name(Bc, "Bc");
u(Bc, "toActorRef");
var to = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function _n(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(_n, "_n");
u(_n, "getChildren");
function yl(r) {
  var e = [r];
  return to(r) ? e : e.concat(Ge(_n(r).map(yl)));
}
__name(yl, "yl");
u(yl, "getAllStateNodes");
function Rn(r, e) {
  var t, i, l, c, f, b, m, d, h = new Set(r), y = bl(h), w = new Set(e);
  try {
    for (var S = ve(w), C = S.next(); !C.done; C = S.next())
      for (var M = C.value, _ = M.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (K) {
    t = { error: K };
  } finally {
    try {
      C && !C.done && (i = S.return) && i.call(S);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var B = bl(w);
  try {
    for (var L = ve(w), F = L.next(); !F.done; F = L.next()) {
      var M = F.value;
      if (M.type === "compound" && (!B.get(M) || !B.get(M).length))
        y.get(M) ? y.get(M).forEach(function(ie) {
          return w.add(ie);
        }) : M.initialStateNodes.forEach(function(ie) {
          return w.add(ie);
        });
      else if (M.type === "parallel")
        try {
          for (var I = (f = void 0, ve(_n(M))), Q = I.next(); !Q.done; Q = I.next()) {
            var z = Q.value;
            w.has(z) || (w.add(z), y.get(z) ? y.get(z).forEach(function(ie) {
              return w.add(ie);
            }) : z.initialStateNodes.forEach(function(ie) {
              return w.add(ie);
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
    for (var j = ve(w), Y = j.next(); !Y.done; Y = j.next())
      for (var M = Y.value, _ = M.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (K) {
    m = { error: K };
  } finally {
    try {
      Y && !Y.done && (d = j.return) && d.call(j);
    } finally {
      if (m)
        throw m.error;
    }
  }
  return w;
}
__name(Rn, "Rn");
u(Rn, "getConfiguration");
function qc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (to(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = qc(c, e);
  }), l;
}
__name(qc, "qc");
u(qc, "getValueFromAdj");
function bl(r) {
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
__name(bl, "bl");
u(bl, "getAdjList");
function $c(r, e) {
  var t = Rn([r], e);
  return qc(r, bl(t));
}
__name($c, "$c");
u($c, "getValue");
function ro(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(ro, "ro");
u(ro, "has");
function Fc(r) {
  return Re([], be(new Set(Ge(Re([], be(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(Fc, "Fc");
u(Fc, "nextEvents");
function Dn(r, e) {
  return e.type === "compound" ? _n(e).some(function(t) {
    return t.type === "final" && ro(r, t);
  }) : e.type === "parallel" ? _n(e).every(function(t) {
    return Dn(r, t);
  }) : false;
}
__name(Dn, "Dn");
u(Dn, "isInFinalState");
function Wc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(Wc, "Wc");
u(Wc, "getMeta");
function wl(r) {
  return new Set(Ge(r.map(function(e) {
    return e.tags;
  })));
}
__name(wl, "wl");
u(wl, "getTagsFromConfiguration");
function xl(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ye(r) || ye(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return xl(r[l], e[l]);
  });
}
__name(xl, "xl");
u(xl, "stateValuesEqual");
function Uc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Uc, "Uc");
u(Uc, "isStateConfig");
function Vc(r, e) {
  var t = r.exec, i = V(V({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(Vc, "Vc");
u(Vc, "bindActionToState");
var mr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = fl, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || fl, this.meta = Wc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Fc(t.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = Pn;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = Pn;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ye(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, Re([], be(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(f) {
        return c + t + f;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ii(e, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Yi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    He && Xe(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Nh = { deferEvents: false };
var El = function() {
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
var Sl = /* @__PURE__ */ new Map();
var Gh = 0;
var no = { bookId: function() {
  return "x:".concat(Gh++);
}, register: function(r, e) {
  return Sl.set(r, e), r;
}, get: function(r) {
  return Sl.get(r);
}, free: function(r) {
  Sl.delete(r);
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
  He || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(Ba, "Ba");
u(Ba, "getGlobal");
function Lh() {
  var r = Ba();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(Lh, "Lh");
u(Lh, "getDevTools");
function Yc(r) {
  if (!!Ba()) {
    var e = Lh();
    e && e.register(r);
  }
}
__name(Yc, "Yc");
u(Yc, "registerService");
function Xc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var d = l.shift();
        t = r.transition(t, d, m), i.forEach(function(h) {
          return h.next(t);
        });
      }
      c = false;
    }
  }, "flush"), b = Bc({ id: e.id, send: function(d) {
    l.push(d), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(d, h, y) {
    var w = Qi(d, h, y);
    return i.add(w), w.next(t), { unsubscribe: function() {
      i.delete(w);
    } };
  } }), m = { parent: e.parent, self: b, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(m) : t, b;
}
__name(Xc, "Xc");
u(Xc, "spawnBehavior");
var jh = { sync: false, autoForward: false };
var gt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(gt || (gt = {}));
var Zc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = gt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(h, y) {
      if (jr(h))
        return i.batch(h), i.state;
      var w = ot(Zi(h, y));
      if (i.status === gt.Stopped)
        return He || Xe(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(w.data))), i.state;
      if (i.status !== gt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(w.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(w.data)));
      return i.scheduler.schedule(function() {
        i.forward(w);
        var S = i.nextState(w);
        i.update(S, w);
      }), i._state;
    }, this.sendTo = function(h, y) {
      var w = i.parent && (y === on.Parent || i.parent.id === y), S = w ? i.parent : ye(y) ? i.children.get(y) || no.get(y) : Ic(y) ? y : void 0;
      if (!S) {
        if (!w)
          throw new Error("Unable to send event to child '".concat(y, "' from service '").concat(i.id, "'."));
        He || Xe(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(h.type));
        return;
      }
      "machine" in S ? S.send(V(V({}, h), { name: h.name === dl ? "".concat(An(i.id)) : h.name, origin: i.sessionId })) : S.send(h.data);
    };
    var l = V(V({}, r.defaultOptions), t), c = l.clock, f = l.logger, b = l.parent, m = l.id, d = m !== void 0 ? m : e.id;
    this.id = d, this.logger = f, this.clock = c, this.parent = b, this.options = l, this.scheduler = new El({ deferEvents: this.options.deferEvents }), this.sessionId = no.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : zn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return He || Xe(this.status !== gt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ve(e.actions), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        this.exec(b, e, t);
      }
    } catch (m) {
      i = { error: m };
    } finally {
      try {
        f && !f.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, f, b, m, d, h, y = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(K) {
      y.state.children[K.id] = K;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var w = ve(this.eventListeners), S = w.next(); !S.done; S = w.next()) {
          var C = S.value;
          C(e.event);
        }
      } catch (K) {
        i = { error: K };
      } finally {
        try {
          S && !S.done && (l = w.return) && l.call(w);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var M = ve(this.listeners), _ = M.next(); !_.done; _ = M.next()) {
        var C = _.value;
        C(e, e.event);
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
      for (var B = ve(this.contextListeners), L = B.next(); !L.done; L = B.next()) {
        var F = L.value;
        F(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (K) {
      b = { error: K };
    } finally {
      try {
        L && !L.done && (m = B.return) && m.call(B);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var I = Dn(e.configuration || [], this.machine);
    if (this.state.configuration && I) {
      var Q = e.configuration.find(function(K) {
        return K.type === "final" && K.parent === y.machine;
      }), z = Q && Q.doneData ? Mn(Q.doneData, e.context, t) : void 0;
      try {
        for (var j = ve(this.doneListeners), Y = j.next(); !Y.done; Y = j.next()) {
          var C = Y.value;
          C(ci(this.id, z));
        }
      } catch (K) {
        d = { error: K };
      } finally {
        try {
          Y && !Y.done && (h = j.return) && h.call(j);
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
    this.machine._init(), no.register(this.sessionId, this), this.initialized = true, this.status = gt.Running;
    var i = e === void 0 ? this.initialState : zn(this, function() {
      return Uc(e) ? t.machine.resolveState(e) : t.machine.resolveState(mr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Pn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, b, m, d, h, y = this;
    try {
      for (var w = ve(this.listeners), S = w.next(); !S.done; S = w.next()) {
        var C = S.value;
        this.listeners.delete(C);
      }
    } catch (Y) {
      e = { error: Y };
    } finally {
      try {
        S && !S.done && (t = w.return) && t.call(w);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var M = ve(this.stopListeners), _ = M.next(); !_.done; _ = M.next()) {
        var C = _.value;
        C(), this.stopListeners.delete(C);
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
      for (var B = ve(this.contextListeners), L = B.next(); !L.done; L = B.next()) {
        var C = L.value;
        this.contextListeners.delete(C);
      }
    } catch (Y) {
      c = { error: Y };
    } finally {
      try {
        L && !L.done && (f = B.return) && f.call(B);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var F = ve(this.doneListeners), I = F.next(); !I.done; I = F.next()) {
        var C = I.value;
        this.doneListeners.delete(C);
      }
    } catch (Y) {
      b = { error: Y };
    } finally {
      try {
        I && !I.done && (m = F.return) && m.call(F);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    Re([], be(this.state.configuration), false).sort(function(Y, K) {
      return K.order - Y.order;
    }).forEach(function(Y) {
      var K, ie;
      try {
        for (var ne = ve(Y.definition.exit), pe = ne.next(); !pe.done; pe = ne.next()) {
          var W = pe.value;
          y.exec(W, y.state);
        }
      } catch (ce) {
        K = { error: ce };
      } finally {
        try {
          pe && !pe.done && (ie = ne.return) && ie.call(ne);
        } finally {
          if (K)
            throw K.error;
        }
      }
    }), this.children.forEach(function(Y) {
      ze(Y.stop) && Y.stop();
    }), this.children.clear();
    try {
      for (var Q = ve(Object.keys(this.delayedEventsMap)), z = Q.next(); !z.done; z = Q.next()) {
        var j = z.value;
        this.clock.clearTimeout(this.delayedEventsMap[j]);
      }
    } catch (Y) {
      d = { error: Y };
    } finally {
      try {
        z && !z.done && (h = Q.return) && h.call(Q);
      } finally {
        if (d)
          throw d.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new El({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = gt.Stopped, this._initialState = void 0, no.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === gt.NotStarted && this.options.deferEvents)
      He || Xe(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== gt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, b = [], m = u(function(w) {
        var S = ot(w);
        t.forward(S), c = zn(t, function() {
          return t.machine.transition(c, S);
        }), b.push.apply(b, Re([], be(c.actions.map(function(C) {
          return Vc(C, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var d = ve(e), h = d.next(); !h.done; h = d.next()) {
          var y = h.value;
          m(y);
        }
      } catch (w) {
        i = { error: w };
      } finally {
        try {
          h && !h.done && (l = d.return) && l.call(d);
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
    if (i.name.indexOf(pl) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(pl) === 0;
    }))
      throw i.data.data;
    var l = zn(this, function() {
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
    } catch (m) {
      t = { error: m };
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
    var l = t.context, c = t._event, f = e.exec || La(e.type, i), b = ze(f) ? f : f ? f.exec : e.exec;
    if (b)
      try {
        return b(l, c.data, { action: e, state: this.state, _event: c });
      } catch (I) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: I }), I;
      }
    switch (e.type) {
      case On:
        var m = e;
        if (typeof m.delay == "number") {
          this.defer(m);
          return;
        } else
          m.to ? this.sendTo(m._event, m.to) : this.send(m._event);
        break;
      case Ma:
        this.cancel(e.sendId);
        break;
      case Fi: {
        if (this.status !== gt.Running)
          return;
        var d = e.activity;
        if (!this.state.activities[d.id || d.type])
          break;
        if (d.type === Ae.Invoke) {
          var h = Ga(d.src), y = this.machine.options.services ? this.machine.options.services[h.type] : void 0, w = d.id, S = d.data;
          He || Xe(!("forward" in d), "`forward` property is deprecated (found in invocation of '".concat(d.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var C = "autoForward" in d ? d.autoForward : !!d.forward;
          if (!y) {
            He || Xe(false, "No service found for invocation '".concat(d.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var M = S ? Mn(S, l, c) : void 0;
          if (typeof y == "string")
            return;
          var _ = ze(y) ? y(l, c.data, { data: M, src: h, meta: d.meta }) : y;
          if (!_)
            return;
          var B = void 0;
          Tr(_) && (_ = M ? _.withContext(M) : _, B = { autoForward: C }), this.spawn(_, w, B);
        } else
          this.spawnActivity(d);
        break;
      }
      case oi: {
        this.stopChild(e.activity.id);
        break;
      }
      case Ia:
        var L = e.label, F = e.value;
        L ? this.logger(L, F) : this.logger(F);
        break;
      default:
        He || Xe(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), ze(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (ml(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (ze(e))
      return this.spawnCallback(e, t);
    if (Hc(e))
      return this.spawnActor(e, t);
    if (Mc(e))
      return this.spawnObservable(e, t);
    if (Tr(e))
      return this.spawnMachine(e, V(V({}, i), { id: t }));
    if (Tc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, V(V({}, this.options), { parent: this, id: t.id || e.id })), c = V(V({}, jh), t);
    c.sync && l.onTransition(function(b) {
      i.send(Ui, { state: b, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(b) {
      i.removeChild(l.id), i.send(ot(b, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Xc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(m) {
      c || (f = m, l.removeChild(t), l.send(ot(ci(t, m), { origin: t })));
    }, function(m) {
      if (!c) {
        l.removeChild(t);
        var d = An(t, m);
        try {
          l.send(ot(d, { origin: t }));
        } catch (h) {
          Ac(m, h, t), l.devTools && l.devTools.send(d, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var b = (i = { id: t, send: function() {
    }, subscribe: function(m, d, h) {
      var y = Qi(m, d, h), w = false;
      return e.then(function(S) {
        w || (y.next(S), !w && y.complete());
      }, function(S) {
        w || y.error(S);
      }), { unsubscribe: function() {
        return w = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return f;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), m, d = u(function(w) {
      m = w, b.forEach(function(S) {
        return S(w);
      }), !c && l.send(ot(w, { origin: t }));
    }, "receive"), h;
    try {
      h = e(d, function(w) {
        f.add(w);
      });
    } catch (w) {
      this.send(An(t, w));
    }
    if (ml(h))
      return this.spawnPromise(h, t);
    var y = (i = { id: t, send: function(w) {
      return f.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = Qi(w);
      return b.add(S.next), { unsubscribe: function() {
        b.delete(S.next);
      } };
    }, stop: function() {
      c = true, ze(h) && h();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return m;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, y), y;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, f = e.subscribe(function(m) {
      c = m, l.send(ot(m, { origin: t }));
    }, function(m) {
      l.removeChild(t), l.send(ot(An(t, m), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(ot(ci(t), { origin: t }));
    }), b = (i = { id: t, send: function() {
    }, subscribe: function(m, d, h) {
      return e.subscribe(m, d, h);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      He || Xe(false, "No implementation found for activity '".concat(e.type, "'"));
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
    } }, i[Sr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = Ba();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: V({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Yc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Sr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === gt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = Ke, r;
}();
function Ke(r, e) {
  var t = new Zc(r, e);
  return t;
}
__name(Ke, "Ke");
u(Ke, "interpret");
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
function io(r) {
  return V(V({ type: Wi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ii(r, ["onDone", "onError"]);
    return V(V({}, e), { type: Wi, src: Hh(r.src) });
  } });
}
__name(io, "io");
u(io, "toInvokeDefinition");
var fi = "";
var Tl = "#";
var oo = "*";
var pi = {};
var di = u(function(r) {
  return r[0] === Tl;
}, "isStateId");
var Bh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var qh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ye(c.target) || Tr(c.target));
  }), l = e === fi ? "the transient event" : "event '".concat(e, "'");
  Xe(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Qc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var f;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Bh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Pa), this.id = this.config.id || Re([this.machine.key], be(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, He || Xe(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? li(this.config.states, function(d, h) {
      var y, w = new r(d, {}, void 0, { parent: c, key: h });
      return Object.assign(c.idMap, V((y = {}, y[w.id] = w, y), w.idMap)), w;
    }) : pi;
    var b = 0;
    function m(d) {
      var h, y;
      d.order = b++;
      try {
        for (var w = ve(_n(d)), S = w.next(); !S.done; S = w.next()) {
          var C = S.value;
          m(C);
        }
      } catch (M) {
        h = { error: M };
      } finally {
        try {
          S && !S.done && (y = w.return) && y.call(w);
        } finally {
          if (h)
            throw h.error;
        }
      }
    }
    __name(m, "m");
    u(m, "dfs"), m(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var h = d.event;
      return h === fi;
    }) : fi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Bt(this.config.entry || this.config.onEntry).map(function(d) {
      return ui(d);
    }), this.onExit = Bt(this.config.exit || this.config.onExit).map(function(d) {
      return ui(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Bt(this.config.invoke).map(function(d, h) {
      var y, w;
      if (Tr(d)) {
        var S = Ji(c.id, h);
        return c.machine.options.services = V((y = {}, y[S] = d, y), c.machine.options.services), io({ src: S, id: S });
      } else if (ye(d.src)) {
        var S = d.id || Ji(c.id, h);
        return io(V(V({}, d), { id: S, src: d.src }));
      } else if (Tr(d.src) || ze(d.src)) {
        var S = d.id || Ji(c.id, h);
        return c.machine.options.services = V((w = {}, w[S] = d.src, w), c.machine.options.services), io(V(V({ id: S }, d), { src: S }));
      } else {
        var C = d.src;
        return io(V(V({ id: Ji(c.id, h) }, d), { src: C }));
      }
    }), this.activities = Bt(this.config.activities).concat(this.invoke).map(function(d) {
      return Ha(d);
    }), this.transition = this.transition.bind(this), this.tags = Bt(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || yl(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, b = i.services, m = i.delays;
    return new r(this.config, { actions: V(V({}, l), e.actions), activities: V(V({}, c), e.activities), guards: V(V({}, f), e.guards), services: V(V({}, b), e.services), delays: V(V({}, m), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return ze(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: li(this.states, function(e) {
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
    var t = e === fi, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === oo;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, f) {
      var b = ze(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, m = kc(b, e.id);
      return e.onEntry.push(gl(m, { delay: c })), e.onExit.push(_c(m)), m;
    }, "mutateEntryExit"), l = jr(t) ? t.map(function(c, f) {
      var b = i(c.delay, f);
      return V(V({}, c), { event: b });
    }) : Ge(Object.keys(t).map(function(c, f) {
      var b = t[c], m = ye(b) ? { target: b } : b, d = isNaN(+c) ? c : +c, h = i(d, f);
      return Bt(m).map(function(y) {
        return V(V({}, y), { event: h, delay: d });
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
    var l = e instanceof mr ? e.value : si(e, this.delimiter);
    if (ye(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var f = Object.keys(l), b = [this];
    return b.push.apply(b, Re([], be(Ge(f.map(function(m) {
      return i.getStateNode(m).getStateNodes(l[m]);
    }))), false)), b;
  }, r.prototype.handles = function(e) {
    var t = _a(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof mr ? e : mr.create(e), i = Array.from(Rn([], this.getStateNodes(t.value)));
    return new mr(V(V({}, t), { value: this.resolve(t.value), configuration: i, done: Dn(i, this), tags: wl(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var b = ve(Object.keys(e)), m = b.next(); !m.done; m = b.next()) {
        var d = m.value, h = e[d];
        if (!!h) {
          var y = this.getStateNode(d), w = y._transition(h, t, i);
          w && (f[d] = w);
        }
      }
    } catch (L) {
      l = { error: L };
    } finally {
      try {
        m && !m.done && (c = b.return) && c.call(b);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var S = Object.keys(f).map(function(L) {
      return f[L];
    }), C = Ge(S.map(function(L) {
      return L.transitions;
    })), M = S.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!M)
      return this.next(t, i);
    var _ = Ge(S.map(function(L) {
      return L.entrySet;
    })), B = Ge(Object.keys(f).map(function(L) {
      return f[L].configuration;
    }));
    return { transitions: C, entrySet: _, exitSet: Ge(S.map(function(L) {
      return L.exitSet;
    })), configuration: B, source: t, actions: Ge(Object.keys(f).map(function(L) {
      return f[L].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ye(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, ot(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, b = [], m = [], d;
    try {
      for (var h = ve(this.getCandidates(f)), y = h.next(); !y.done; y = h.next()) {
        var w = y.value, S = w.cond, C = w.in, M = e.context, _ = C ? ye(C) && di(C) ? e.matches(si(this.getStateNodeById(C).path, this.delimiter)) : Yi(si(C, this.delimiter), wc(this.path.slice(0, -2))(e.value)) : true, B = false;
        try {
          B = !S || Na(this.machine, S, M, t, e);
        } catch (Q) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(Q.message));
        }
        if (B && _) {
          w.target !== void 0 && (m = w.target), b.push.apply(b, Re([], be(w.actions), false)), d = w;
          break;
        }
      }
    } catch (Q) {
      i = { error: Q };
    } finally {
      try {
        y && !y.done && (l = h.return) && l.call(h);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!d) {
      if (!m.length)
        return { transitions: [d], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: b };
      var L = Ge(m.map(function(Q) {
        return c.getRelativeStateNodes(Q, e.historyValue);
      })), F = !!d.internal, I = F ? [] : Ge(L.map(function(Q) {
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
    var c, f, b, m, d = Rn([], l ? this.getStateNodes(l.value) : [this]), h = e.configuration.length ? Rn(d, e.configuration) : d;
    try {
      for (var y = ve(h), w = y.next(); !w.done; w = y.next()) {
        var S = w.value;
        ro(d, S) || e.entrySet.push(S);
      }
    } catch (j) {
      c = { error: j };
    } finally {
      try {
        w && !w.done && (f = y.return) && f.call(y);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var C = ve(d), M = C.next(); !M.done; M = C.next()) {
        var S = M.value;
        (!ro(h, S) || ro(e.exitSet, S.parent)) && e.exitSet.push(S);
      }
    } catch (j) {
      b = { error: j };
    } finally {
      try {
        M && !M.done && (m = C.return) && m.call(C);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var _ = Ge(e.entrySet.map(function(j) {
      var Y = [];
      if (j.type !== "final")
        return Y;
      var K = j.parent;
      if (!K.parent)
        return Y;
      Y.push(eo(j.id, j.doneData), eo(K.id, j.doneData ? Mn(j.doneData, t, i) : void 0));
      var ie = K.parent;
      return ie.type === "parallel" && _n(ie).every(function(ne) {
        return Dn(e.configuration, ne);
      }) && Y.push(eo(ie.id)), Y;
    }));
    e.exitSet.sort(function(j, Y) {
      return Y.order - j.order;
    }), e.entrySet.sort(function(j, Y) {
      return j.order - Y.order;
    });
    var B = new Set(e.entrySet), L = new Set(e.exitSet), F = be([Ge(Array.from(B).map(function(j) {
      return Re(Re([], be(j.activities.map(function(Y) {
        return Rc(Y);
      })), false), be(j.onEntry), false);
    })).concat(_.map(zc)), Ge(Array.from(L).map(function(j) {
      return Re(Re([], be(j.onExit), false), be(j.activities.map(function(Y) {
        return Dc(Y);
      })), false);
    }))], 2), I = F[0], Q = F[1], z = Ki(Q.concat(e.actions).concat(I), this.machine.options.actions);
    return z;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = ot(t), c;
    if (e instanceof mr)
      c = i === void 0 ? e : this.resolveState(mr.from(e, i));
    else {
      var f = ye(e) ? this.resolve(Vi(this.getResolvedPath(e))) : this.resolve(e), b = i != null ? i : this.machine.context;
      c = this.resolveState(mr.from(f, b));
    }
    if (!He && l.name === oo)
      throw new Error("An event cannot have the wildcard type ('".concat(oo, "')"));
    if (this.strict && !this.events.includes(l.name) && !Sc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var m = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, d = Rn([], this.getStateNodes(c.value)), h = m.configuration.length ? Rn(d, m.configuration) : d;
    return m.configuration = Re([], be(h), false), this.resolveTransition(m, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, Re([], be(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, b = this;
    l === void 0 && (l = Pn);
    var m = e.configuration, d = !t || e.transitions.length > 0, h = d ? $c(this.machine, m) : void 0, y = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, w = this.getActions(e, i, l, t), S = t ? V({}, t.activities) : {};
    try {
      for (var C = ve(w), M = C.next(); !M.done; M = C.next()) {
        var _ = M.value;
        _.type === Fi ? S[_.activity.id || _.activity.type] = _ : _.type === oi && (S[_.activity.id || _.activity.type] = false);
      }
    } catch (he) {
      c = { error: he };
    } finally {
      try {
        M && !M.done && (f = C.return) && f.call(C);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var B = be(ja(this, t, i, l, w, this.machine.config.preserveActionOrder), 2), L = B[0], F = B[1], I = be(Da(L, function(he) {
      return he.type === ai || he.type === On && he.to === on.Internal;
    }), 2), Q = I[0], z = I[1], j = L.filter(function(he) {
      var Je;
      return he.type === Fi && ((Je = he.activity) === null || Je === void 0 ? void 0 : Je.type) === Wi;
    }), Y = j.reduce(function(he, Je) {
      return he[Je.activity.id] = Lc(Je.activity, b.machine, F, l), he;
    }, t ? V({}, t.children) : {}), K = d ? e.configuration : t ? t.configuration : [], ie = Dn(K, this), ne = new mr({ value: h || t.value, context: F, _event: l, _sessionid: t ? t._sessionid : null, historyValue: h ? y ? Oc(y, h) : void 0 : t ? t.historyValue : void 0, history: !h || e.source ? t : void 0, actions: h ? z : [], activities: h ? S : t ? t.activities : {}, events: [], configuration: K, transitions: e.transitions, children: Y, done: ie, tags: wl(K), machine: this }), pe = i !== F;
    ne.changed = l.name === Ui || pe;
    var W = ne.history;
    W && delete W.history;
    var ce = !ie && (this._transient || m.some(function(he) {
      return he._transient;
    }));
    if (!d && (!ce || l.name === fi))
      return ne;
    var De = ne;
    if (!ie)
      for (ce && (De = this.resolveRaisedTransition(De, { type: mc }, l)); Q.length; ) {
        var Ve = Q.shift();
        De = this.resolveRaisedTransition(De, Ve._event, l);
      }
    var Le = De.changed || (W ? !!De.actions.length || pe || typeof W.value != typeof De.value || !xl(De.value, W.value) : void 0);
    return De.changed = Le, De.history = W, De;
  }, r.prototype.getStateNode = function(e) {
    if (di(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = di(e) ? e.slice(Tl.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && di(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = Ra(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || pi;
    switch (this.type) {
      case "parallel":
        return li(this.initialStateValue, function(c, f) {
          return c ? i.getStateNode(f).resolve(e[f] || c) : pi;
        });
      case "compound":
        if (ye(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? li(e, function(c, f) {
          return c ? i.getStateNode(f).resolve(c) : pi;
        }) : this.initialStateValue || {};
      default:
        return e || pi;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (di(e)) {
      var t = this.machine.idMap[e.slice(Tl.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Ra(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = hl(this.states, function(i) {
        return i.initialStateValue || pi;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = to(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
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
      ye(t.target) ? e = di(t.target) ? Vi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (to(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return He || Xe(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Xi(this.initialStateValue);
    return Ge(t.map(function(i) {
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
      return { current: e || this.initialStateValue, states: hl(this.states, function(t, i) {
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
      return l ? Ge(Xi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = xc(i.path, "states")(e).current;
    return ye(c) ? [i.getStateNode(c)] : Ge(Xi(c).map(function(f) {
      return t.history === "deep" ? i.getFromRelativePath(f) : [i.states[f[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = Ge(Object.keys(this.states).map(function(i) {
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
        for (var b = ve(Object.keys(c)), m = b.next(); !m.done; m = b.next()) {
          var d = m.value, h = c[d];
          if (h.states)
            try {
              for (var y = (i = void 0, ve(h.events)), w = y.next(); !w.done; w = y.next()) {
                var S = w.value;
                f.add("".concat(S));
              }
            } catch (C) {
              i = { error: C };
            } finally {
              try {
                w && !w.done && (l = y.return) && l.call(y);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (C) {
        e = { error: C };
      } finally {
        try {
          m && !m.done && (t = b.return) && t.call(b);
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
    var t = this, i = Pc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(m) {
      return ye(m) && m[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), b = V(V({}, e), { actions: Ki(Bt(e.actions)), cond: ka(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
      return V(V({}, b), { target: b.target ? b.target.map(function(m) {
        return "#".concat(m.id);
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
      var c = this.config.on, f = oo, b = c[f], m = b === void 0 ? [] : b, d = ii(c, [typeof f == "symbol" ? f : f + ""]);
      l = Ge(Object.keys(d).map(function(L) {
        !He && L === fi && Xe(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var F = In(L, d[L]);
        return He || qh(i, L, F), F;
      }).concat(In(oo, m)));
    }
    var h = this.config.always ? In("", this.config.always) : [], y = this.config.onDone ? In(String(eo(this.id)), this.config.onDone) : [];
    He || Xe(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = Ge(this.invoke.map(function(L) {
      var F = [];
      return L.onDone && F.push.apply(F, Re([], be(In(String(ci(L.id)), L.onDone)), false)), L.onError && F.push.apply(F, Re([], be(In(String(An(L.id)), L.onError)), false)), F;
    })), S = this.after, C = Ge(Re(Re(Re(Re([], be(y), false), be(w), false), be(l), false), be(h), false).map(function(L) {
      return Bt(L).map(function(F) {
        return i.formatTransition(F);
      });
    }));
    try {
      for (var M = ve(S), _ = M.next(); !_.done; _ = M.next()) {
        var B = _.value;
        C.push(B);
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
    return C;
  }, r;
}();
function at(r, e) {
  return new Qc(r, e);
}
__name(at, "at");
u(at, "createMachine");
var so = Tn(ao(), 1);
var $a = u((r) => r != null && typeof r.draggable == "boolean", "isDraggable");
var qa = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Ol = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
        ue("draggable:init", {}, this);
      }, setInteract: (i, l) => {
        H.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let c = (0, so.default)(this);
        c.styleCursor(false), c.pointerEvents({ ignoreFrom: ".resize-handle" }), c.on("down", this.grab.bind(this)), c.on("up", this.release.bind(this)), c.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let f = this.dropzone;
        qa(f) ? this.snappedDropzone = f : this.snappedDropzone = null;
      }, grab: (i, l) => {
        H.need(l.type === "GRAB", "event type must be GRAB"), l.type === "GRAB" && (this.grabbed = true, ue("draggable:grab", {}, this), Ol(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("qpu-operation-xl")));
      }, release: (i, l) => {
        H.need(l.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, ue("draggable:release", {}, this);
      }, startDragging: (i, l) => {
        H.need(l.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (i, l) => {
        H.need(l.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, ue("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, ue("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && ue("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        !this.snapped || (this.moveTo(0, 0), ue("draggable:drop", {}, this));
      }, delete: () => {
        (0, so.default)(this).unset(), ue("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => qa(this.dropzone), isOnPaletteDropzone: () => Ol(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && qa(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = Ke(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Ye(i.value)}`);
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
      return H.notNull(i), !Ol(i) && !qa(i) ? null : i;
    }
    set snapTargets(i) {
      (0, so.default)(this).draggable({ modifiers: [so.default.modifiers.snap({ targets: i, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(i) {
      let l = i.modifiers[0];
      if (l.inRange) {
        let c = l.target.source;
        ue("draggable:in-snap-range", { snapTargetInfo: c }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
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
  return u(e, "DraggableMixinClass"), A([D], e.prototype, "operationX", 2), A([D], e.prototype, "operationY", 2), A([D], e.prototype, "grabbed", 2), A([D], e.prototype, "dragging", 2), A([D], e.prototype, "snapped", 2), A([D], e.prototype, "bit", 2), A([D], e.prototype, "debugDraggable", 2), e;
}
__name(Se, "Se");
u(Se, "DraggableMixin");
var kn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Kc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), A([D], e.prototype, "flag", 2), e;
}
__name(Kc, "Kc");
u(Kc, "FlaggableMixin");
var Ue = "top";
var st = "bottom";
var et = "right";
var Ze = "left";
var Fa = "auto";
var an = [Ue, st, et, Ze];
var Hr = "start";
var Nn = "end";
var ep = "clippingParents";
var Wa = "viewport";
var hi = "popper";
var tp = "reference";
var Ml = an.reduce(function(r, e) {
  return r.concat([e + "-" + Hr, e + "-" + Nn]);
}, []);
var Ua = [].concat(an, [Fa]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Hr, e + "-" + Nn]);
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
var rp = [$h, Fh, Wh, Uh, Vh, Yh, Xh, Zh, Qh];
function dt(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(dt, "dt");
u(dt, "getNodeName");
function Qe(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Qe, "Qe");
u(Qe, "getWindow");
function Cr(r) {
  var e = Qe(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Cr, "Cr");
u(Cr, "isElement");
function lt(r) {
  var e = Qe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(lt, "lt");
u(lt, "isHTMLElement");
function Va(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Qe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Va, "Va");
u(Va, "isShadowRoot");
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
      var l = e.elements[i], c = e.attributes[i] || {}, f = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), b = f.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !lt(l) || !dt(l) || (Object.assign(l.style, b), Object.keys(c).forEach(function(m) {
        l.removeAttribute(m);
      }));
    });
  };
}
__name(Kh, "Kh");
u(Kh, "effect");
var lo = { name: "applyStyles", enabled: true, phase: "write", fn: Jh, effect: Kh, requires: ["computeStyles"] };
function ft(r) {
  return r.split("-")[0];
}
__name(ft, "ft");
u(ft, "getBasePlacement");
var vr = Math.max;
var Gn = Math.min;
var Br = Math.round;
function Zt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (lt(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Br(t.width) / f || 1), c > 0 && (l = Br(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Zt, "Zt");
u(Zt, "getBoundingClientRect");
function Ln(r) {
  var e = Zt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Ln, "Ln");
u(Ln, "getLayoutRect");
function uo(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Va(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(uo, "uo");
u(uo, "contains");
function zt(r) {
  return Qe(r).getComputedStyle(r);
}
__name(zt, "zt");
u(zt, "getComputedStyle");
function Il(r) {
  return ["table", "td", "th"].indexOf(dt(r)) >= 0;
}
__name(Il, "Il");
u(Il, "isTableElement");
function bt(r) {
  return ((Cr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(bt, "bt");
u(bt, "getDocumentElement");
function qr(r) {
  return dt(r) === "html" ? r : r.assignedSlot || r.parentNode || (Va(r) ? r.host : null) || bt(r);
}
__name(qr, "qr");
u(qr, "getParentNode");
function np(r) {
  return !lt(r) || zt(r).position === "fixed" ? null : r.offsetParent;
}
__name(np, "np");
u(np, "getTrueOffsetParent");
function em(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && lt(r)) {
    var i = zt(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = qr(r); lt(l) && ["html", "body"].indexOf(dt(l)) < 0; ) {
    var c = zt(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(em, "em");
u(em, "getContainingBlock");
function gr(r) {
  for (var e = Qe(r), t = np(r); t && Il(t) && zt(t).position === "static"; )
    t = np(t);
  return t && (dt(t) === "html" || dt(t) === "body" && zt(t).position === "static") ? e : t || em(r) || e;
}
__name(gr, "gr");
u(gr, "getOffsetParent");
function jn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(jn, "jn");
u(jn, "getMainAxisFromPlacement");
function Hn(r, e, t) {
  return vr(r, Gn(e, t));
}
__name(Hn, "Hn");
u(Hn, "within");
function ip(r, e, t) {
  var i = Hn(r, e, t);
  return i > t ? t : i;
}
__name(ip, "ip");
u(ip, "withinMaxClamp");
function co() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(co, "co");
u(co, "getFreshSideObject");
function po(r) {
  return Object.assign({}, co(), r);
}
__name(po, "po");
u(po, "mergePaddingObject");
function fo(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(fo, "fo");
u(fo, "expandToHashMap");
var tm = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, po(typeof e != "number" ? e : fo(e, an));
}, "toPaddingObject");
function rm(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, b = ft(t.placement), m = jn(b), d = [Ze, et].indexOf(b) >= 0, h = d ? "height" : "width";
  if (!(!c || !f)) {
    var y = tm(l.padding, t), w = Ln(c), S = m === "y" ? Ue : Ze, C = m === "y" ? st : et, M = t.rects.reference[h] + t.rects.reference[m] - f[m] - t.rects.popper[h], _ = f[m] - t.rects.reference[m], B = gr(c), L = B ? m === "y" ? B.clientHeight || 0 : B.clientWidth || 0 : 0, F = M / 2 - _ / 2, I = y[S], Q = L - w[h] - y[C], z = L / 2 - w[h] / 2 + F, j = Hn(I, z, Q), Y = m;
    t.modifiersData[i] = (e = {}, e[Y] = j, e.centerOffset = j - z, e);
  }
}
__name(rm, "rm");
u(rm, "arrow");
function nm(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !uo(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(nm, "nm");
u(nm, "effect");
var op = { name: "arrow", enabled: true, phase: "main", fn: rm, effect: nm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qt(r) {
  return r.split("-")[1];
}
__name(Qt, "Qt");
u(Qt, "getVariation");
var im = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function om(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Br(e * l) / l || 0, y: Br(t * l) / l || 0 };
}
__name(om, "om");
u(om, "roundOffsetsByDPR");
function ap(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, b = r.position, m = r.gpuAcceleration, d = r.adaptive, h = r.roundOffsets, y = r.isFixed, w = f.x, S = w === void 0 ? 0 : w, C = f.y, M = C === void 0 ? 0 : C, _ = typeof h == "function" ? h({ x: S, y: M }) : { x: S, y: M };
  S = _.x, M = _.y;
  var B = f.hasOwnProperty("x"), L = f.hasOwnProperty("y"), F = Ze, I = Ue, Q = window;
  if (d) {
    var z = gr(t), j = "clientHeight", Y = "clientWidth";
    if (z === Qe(t) && (z = bt(t), zt(z).position !== "static" && b === "absolute" && (j = "scrollHeight", Y = "scrollWidth")), z = z, l === Ue || (l === Ze || l === et) && c === Nn) {
      I = st;
      var K = y && Q.visualViewport ? Q.visualViewport.height : z[j];
      M -= K - i.height, M *= m ? 1 : -1;
    }
    if (l === Ze || (l === Ue || l === st) && c === Nn) {
      F = et;
      var ie = y && Q.visualViewport ? Q.visualViewport.width : z[Y];
      S -= ie - i.width, S *= m ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: b }, d && im), pe = h === true ? om({ x: S, y: M }) : { x: S, y: M };
  if (S = pe.x, M = pe.y, m) {
    var W;
    return Object.assign({}, ne, (W = {}, W[I] = L ? "0" : "", W[F] = B ? "0" : "", W.transform = (Q.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + M + "px)" : "translate3d(" + S + "px, " + M + "px, 0)", W));
  }
  return Object.assign({}, ne, (e = {}, e[I] = L ? M + "px" : "", e[F] = B ? S + "px" : "", e.transform = "", e));
}
__name(ap, "ap");
u(ap, "mapToStyles");
function am(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, b = t.roundOffsets, m = b === void 0 ? true : b;
  if (false)
    var d;
  var h = { placement: ft(e.placement), variation: Qt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ap(Object.assign({}, h, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: m })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ap(Object.assign({}, h, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(am, "am");
u(am, "computeStyles");
var sp = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: am, data: {} };
var Ya = { passive: true };
function sm(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, b = f === void 0 ? true : f, m = Qe(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && d.forEach(function(h) {
    h.addEventListener("scroll", t.update, Ya);
  }), b && m.addEventListener("resize", t.update, Ya), function() {
    c && d.forEach(function(h) {
      h.removeEventListener("scroll", t.update, Ya);
    }), b && m.removeEventListener("resize", t.update, Ya);
  };
}
__name(sm, "sm");
u(sm, "effect");
var lp = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: sm, data: {} };
var lm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return lm[e];
  });
}
__name(mi, "mi");
u(mi, "getOppositePlacement");
var um = { start: "end", end: "start" };
function Xa(r) {
  return r.replace(/start|end/g, function(e) {
    return um[e];
  });
}
__name(Xa, "Xa");
u(Xa, "getOppositeVariationPlacement");
function Bn(r) {
  var e = Qe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(Bn, "Bn");
u(Bn, "getWindowScroll");
function qn(r) {
  return Zt(bt(r)).left + Bn(r).scrollLeft;
}
__name(qn, "qn");
u(qn, "getWindowScrollBarX");
function Pl(r) {
  var e = Qe(r), t = bt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, b = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, b = i.offsetTop)), { width: l, height: c, x: f + qn(r), y: b };
}
__name(Pl, "Pl");
u(Pl, "getViewportRect");
function Al(r) {
  var e, t = bt(r), i = Bn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = vr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = vr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), b = -i.scrollLeft + qn(r), m = -i.scrollTop;
  return zt(l || t).direction === "rtl" && (b += vr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: b, y: m };
}
__name(Al, "Al");
u(Al, "getDocumentRect");
function $n(r) {
  var e = zt(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name($n, "$n");
u($n, "isScrollParent");
function Za(r) {
  return ["html", "body", "#document"].indexOf(dt(r)) >= 0 ? r.ownerDocument.body : lt(r) && $n(r) ? r : Za(qr(r));
}
__name(Za, "Za");
u(Za, "getScrollParent");
function sn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Za(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Qe(i), f = l ? [c].concat(c.visualViewport || [], $n(i) ? i : []) : i, b = e.concat(f);
  return l ? b : b.concat(sn(qr(f)));
}
__name(sn, "sn");
u(sn, "listScrollParents");
function vi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(vi, "vi");
u(vi, "rectToClientRect");
function cm(r) {
  var e = Zt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(cm, "cm");
u(cm, "getInnerBoundingClientRect");
function up(r, e) {
  return e === Wa ? vi(Pl(r)) : Cr(e) ? cm(e) : vi(Al(bt(r)));
}
__name(up, "up");
u(up, "getClientRectFromMixedType");
function pm(r) {
  var e = sn(qr(r)), t = ["absolute", "fixed"].indexOf(zt(r).position) >= 0, i = t && lt(r) ? gr(r) : r;
  return Cr(i) ? e.filter(function(l) {
    return Cr(l) && uo(l, i) && dt(l) !== "body";
  }) : [];
}
__name(pm, "pm");
u(pm, "getClippingParents");
function zl(r, e, t) {
  var i = e === "clippingParents" ? pm(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(b, m) {
    var d = up(r, m);
    return b.top = vr(d.top, b.top), b.right = Gn(d.right, b.right), b.bottom = Gn(d.bottom, b.bottom), b.left = vr(d.left, b.left), b;
  }, up(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(zl, "zl");
u(zl, "getClippingRect");
function ho(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? ft(i) : null, c = i ? Qt(i) : null, f = e.x + e.width / 2 - t.width / 2, b = e.y + e.height / 2 - t.height / 2, m;
  switch (l) {
    case Ue:
      m = { x: f, y: e.y - t.height };
      break;
    case st:
      m = { x: f, y: e.y + e.height };
      break;
    case et:
      m = { x: e.x + e.width, y: b };
      break;
    case Ze:
      m = { x: e.x - t.width, y: b };
      break;
    default:
      m = { x: e.x, y: e.y };
  }
  var d = l ? jn(l) : null;
  if (d != null) {
    var h = d === "y" ? "height" : "width";
    switch (c) {
      case Hr:
        m[d] = m[d] - (e[h] / 2 - t[h] / 2);
        break;
      case Nn:
        m[d] = m[d] + (e[h] / 2 - t[h] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(ho, "ho");
u(ho, "computeOffsets");
function br(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? ep : c, b = t.rootBoundary, m = b === void 0 ? Wa : b, d = t.elementContext, h = d === void 0 ? hi : d, y = t.altBoundary, w = y === void 0 ? false : y, S = t.padding, C = S === void 0 ? 0 : S, M = po(typeof C != "number" ? C : fo(C, an)), _ = h === hi ? tp : hi, B = r.rects.popper, L = r.elements[w ? _ : h], F = zl(Cr(L) ? L : L.contextElement || bt(r.elements.popper), f, m), I = Zt(r.elements.reference), Q = ho({ reference: I, element: B, strategy: "absolute", placement: l }), z = vi(Object.assign({}, B, Q)), j = h === hi ? z : I, Y = { top: F.top - j.top + M.top, bottom: j.bottom - F.bottom + M.bottom, left: F.left - j.left + M.left, right: j.right - F.right + M.right }, K = r.modifiersData.offset;
  if (h === hi && K) {
    var ie = K[l];
    Object.keys(Y).forEach(function(ne) {
      var pe = [et, st].indexOf(ne) >= 0 ? 1 : -1, W = [Ue, st].indexOf(ne) >= 0 ? "y" : "x";
      Y[ne] += ie[W] * pe;
    });
  }
  return Y;
}
__name(br, "br");
u(br, "detectOverflow");
function _l(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, b = t.flipVariations, m = t.allowedAutoPlacements, d = m === void 0 ? Ua : m, h = Qt(i), y = h ? b ? Ml : Ml.filter(function(C) {
    return Qt(C) === h;
  }) : an, w = y.filter(function(C) {
    return d.indexOf(C) >= 0;
  });
  w.length === 0 && (w = y);
  var S = w.reduce(function(C, M) {
    return C[M] = br(r, { placement: M, boundary: l, rootBoundary: c, padding: f })[ft(M)], C;
  }, {});
  return Object.keys(S).sort(function(C, M) {
    return S[C] - S[M];
  });
}
__name(_l, "_l");
u(_l, "computeAutoPlacement");
function dm(r) {
  if (ft(r) === Fa)
    return [];
  var e = mi(r);
  return [Xa(r), e, Xa(e)];
}
__name(dm, "dm");
u(dm, "getExpandedFallbackPlacements");
function fm(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? true : f, m = t.fallbackPlacements, d = t.padding, h = t.boundary, y = t.rootBoundary, w = t.altBoundary, S = t.flipVariations, C = S === void 0 ? true : S, M = t.allowedAutoPlacements, _ = e.options.placement, B = ft(_), L = B === _, F = m || (L || !C ? [mi(_)] : dm(_)), I = [_].concat(F).reduce(function(Ot, Rt) {
      return Ot.concat(ft(Rt) === Fa ? _l(e, { placement: Rt, boundary: h, rootBoundary: y, padding: d, flipVariations: C, allowedAutoPlacements: M }) : Rt);
    }, []), Q = e.rects.reference, z = e.rects.popper, j = /* @__PURE__ */ new Map(), Y = true, K = I[0], ie = 0; ie < I.length; ie++) {
      var ne = I[ie], pe = ft(ne), W = Qt(ne) === Hr, ce = [Ue, st].indexOf(pe) >= 0, De = ce ? "width" : "height", Ve = br(e, { placement: ne, boundary: h, rootBoundary: y, altBoundary: w, padding: d }), Le = ce ? W ? et : Ze : W ? st : Ue;
      Q[De] > z[De] && (Le = mi(Le));
      var he = mi(Le), Je = [];
      if (c && Je.push(Ve[pe] <= 0), b && Je.push(Ve[Le] <= 0, Ve[he] <= 0), Je.every(function(Ot) {
        return Ot;
      })) {
        K = ne, Y = false;
        break;
      }
      j.set(ne, Je);
    }
    if (Y)
      for (var rt = C ? 3 : 1, Ft = u(function(Rt) {
        var Wt = I.find(function(fr) {
          var Ut = j.get(fr);
          if (Ut)
            return Ut.slice(0, Rt).every(function(Lt) {
              return Lt;
            });
        });
        if (Wt)
          return K = Wt, "break";
      }, "_loop"), J = rt; J > 0; J--) {
        var dr = Ft(J);
        if (dr === "break")
          break;
      }
    e.placement !== K && (e.modifiersData[i]._skip = true, e.placement = K, e.reset = true);
  }
}
__name(fm, "fm");
u(fm, "flip");
var cp = { name: "flip", enabled: true, phase: "main", fn: fm, requiresIfExists: ["offset"], data: { _skip: false } };
function pp(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(pp, "pp");
u(pp, "getSideOffsets");
function dp(r) {
  return [Ue, et, st, Ze].some(function(e) {
    return r[e] >= 0;
  });
}
__name(dp, "dp");
u(dp, "isAnySideFullyClipped");
function hm(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = br(e, { elementContext: "reference" }), b = br(e, { altBoundary: true }), m = pp(f, i), d = pp(b, l, c), h = dp(m), y = dp(d);
  e.modifiersData[t] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: h, hasPopperEscaped: y }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": y });
}
__name(hm, "hm");
u(hm, "hide");
var fp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hm };
function mm(r, e, t) {
  var i = ft(r), l = [Ze, Ue].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], b = c[1];
  return f = f || 0, b = (b || 0) * l, [Ze, et].indexOf(i) >= 0 ? { x: b, y: f } : { x: f, y: b };
}
__name(mm, "mm");
u(mm, "distanceAndSkiddingToXY");
function vm(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = Ua.reduce(function(h, y) {
    return h[y] = mm(y, e.rects, c), h;
  }, {}), b = f[e.placement], m = b.x, d = b.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += m, e.modifiersData.popperOffsets.y += d), e.modifiersData[i] = f;
}
__name(vm, "vm");
u(vm, "offset");
var hp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: vm };
function gm(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = ho({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(gm, "gm");
u(gm, "popperOffsets");
var mp = { name: "popperOffsets", enabled: true, phase: "read", fn: gm, data: {} };
function Rl(r) {
  return r === "x" ? "y" : "x";
}
__name(Rl, "Rl");
u(Rl, "getAltAxis");
function bm(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? false : f, m = t.boundary, d = t.rootBoundary, h = t.altBoundary, y = t.padding, w = t.tether, S = w === void 0 ? true : w, C = t.tetherOffset, M = C === void 0 ? 0 : C, _ = br(e, { boundary: m, rootBoundary: d, padding: y, altBoundary: h }), B = ft(e.placement), L = Qt(e.placement), F = !L, I = jn(B), Q = Rl(I), z = e.modifiersData.popperOffsets, j = e.rects.reference, Y = e.rects.popper, K = typeof M == "function" ? M(Object.assign({}, e.rects, { placement: e.placement })) : M, ie = typeof K == "number" ? { mainAxis: K, altAxis: K } : Object.assign({ mainAxis: 0, altAxis: 0 }, K), ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, pe = { x: 0, y: 0 };
  if (!!z) {
    if (c) {
      var W, ce = I === "y" ? Ue : Ze, De = I === "y" ? st : et, Ve = I === "y" ? "height" : "width", Le = z[I], he = Le + _[ce], Je = Le - _[De], rt = S ? -Y[Ve] / 2 : 0, Ft = L === Hr ? j[Ve] : Y[Ve], J = L === Hr ? -Y[Ve] : -j[Ve], dr = e.elements.arrow, Ot = S && dr ? Ln(dr) : { width: 0, height: 0 }, Rt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : co(), Wt = Rt[ce], fr = Rt[De], Ut = Hn(0, j[Ve], Ot[Ve]), Lt = F ? j[Ve] / 2 - rt - Ut - Wt - ie.mainAxis : Ft - Ut - Wt - ie.mainAxis, wr = F ? -j[Ve] / 2 + rt + Ut + fr + ie.mainAxis : J + Ut + fr + ie.mainAxis, _r = e.elements.arrow && gr(e.elements.arrow), pn = _r ? I === "y" ? _r.clientTop || 0 : _r.clientLeft || 0 : 0, Oe = (W = ne == null ? void 0 : ne[I]) != null ? W : 0, dn = Le + Lt - Oe - pn, fn = Le + wr - Oe, Mt = Hn(S ? Gn(he, dn) : he, Le, S ? vr(Je, fn) : Je);
      z[I] = Mt, pe[I] = Mt - Le;
    }
    if (b) {
      var Rr, Vn = I === "x" ? Ue : Ze, Yr = I === "x" ? st : et, hr = z[Q], wt = Q === "y" ? "height" : "width", xr = hr + _[Vn], Dt = hr - _[Yr], hn = [Ue, Ze].indexOf(B) !== -1, Dr = (Rr = ne == null ? void 0 : ne[Q]) != null ? Rr : 0, mn = hn ? xr : hr - j[wt] - Y[wt] - Dr + ie.altAxis, Xr = hn ? hr + j[wt] + Y[wt] - Dr - ie.altAxis : Dt, vn = S && hn ? ip(mn, hr, Xr) : Hn(S ? mn : xr, hr, S ? Xr : Dt);
      z[Q] = vn, pe[Q] = vn - hr;
    }
    e.modifiersData[i] = pe;
  }
}
__name(bm, "bm");
u(bm, "preventOverflow");
var vp = { name: "preventOverflow", enabled: true, phase: "main", fn: bm, requiresIfExists: ["offset"] };
function Dl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(Dl, "Dl");
u(Dl, "getHTMLElementScroll");
function kl(r) {
  return r === Qe(r) || !lt(r) ? Bn(r) : Dl(r);
}
__name(kl, "kl");
u(kl, "getNodeScroll");
function ym(r) {
  var e = r.getBoundingClientRect(), t = Br(e.width) / r.offsetWidth || 1, i = Br(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(ym, "ym");
u(ym, "isElementScaled");
function Nl(r, e, t) {
  t === void 0 && (t = false);
  var i = lt(e), l = lt(e) && ym(e), c = bt(e), f = Zt(r, l), b = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (i || !i && !t) && ((dt(e) !== "body" || $n(c)) && (b = kl(e)), lt(e) ? (m = Zt(e, true), m.x += e.clientLeft, m.y += e.clientTop) : c && (m.x = qn(c))), { x: f.left + b.scrollLeft - m.x, y: f.top + b.scrollTop - m.y, width: f.width, height: f.height };
}
__name(Nl, "Nl");
u(Nl, "getCompositeRect");
function wm(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(b) {
      if (!t.has(b)) {
        var m = e.get(b);
        m && l(m);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(wm, "wm");
u(wm, "order");
function Gl(r) {
  var e = wm(r);
  return rp.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(Gl, "Gl");
u(Gl, "orderModifiers");
function Ll(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(Ll, "Ll");
u(Ll, "debounce");
function jl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(jl, "jl");
u(jl, "mergeByName");
var gp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function bp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(bp, "bp");
u(bp, "areValidElements");
function yp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? gp : l;
  return u(function(b, m, d) {
    d === void 0 && (d = c);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gp, c), modifiersData: {}, elements: { reference: b, popper: m }, attributes: {}, styles: {} }, y = [], w = false, S = { state: h, setOptions: u(function(B) {
      var L = typeof B == "function" ? B(h.options) : B;
      M(), h.options = Object.assign({}, c, h.options, L), h.scrollParents = { reference: Cr(b) ? sn(b) : b.contextElement ? sn(b.contextElement) : [], popper: sn(m) };
      var F = Gl(jl([].concat(i, h.options.modifiers)));
      if (h.orderedModifiers = F.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var I;
        if (getBasePlacement(h.options.placement) === auto)
          var Q;
        var z, j, Y, K, ie;
      }
      return C(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var B = h.elements, L = B.reference, F = B.popper;
        if (!!bp(L, F)) {
          h.rects = { reference: Nl(L, gr(F), h.options.strategy === "fixed"), popper: Ln(F) }, h.reset = false, h.placement = h.options.placement, h.orderedModifiers.forEach(function(ne) {
            return h.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var I = 0, Q = 0; Q < h.orderedModifiers.length; Q++) {
            if (h.reset === true) {
              h.reset = false, Q = -1;
              continue;
            }
            var z = h.orderedModifiers[Q], j = z.fn, Y = z.options, K = Y === void 0 ? {} : Y, ie = z.name;
            typeof j == "function" && (h = j({ state: h, options: K, name: ie, instance: S }) || h);
          }
        }
      }
    }, "forceUpdate"), update: Ll(function() {
      return new Promise(function(_) {
        S.forceUpdate(), _(h);
      });
    }), destroy: u(function() {
      M(), w = true;
    }, "destroy") };
    if (!bp(b, m))
      return S;
    S.setOptions(d).then(function(_) {
      !w && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function C() {
      h.orderedModifiers.forEach(function(_) {
        var B = _.name, L = _.options, F = L === void 0 ? {} : L, I = _.effect;
        if (typeof I == "function") {
          var Q = I({ state: h, name: B, instance: S, options: F }), z = u(function() {
          }, "noopFn");
          y.push(Q || z);
        }
      });
    }
    __name(C, "C");
    u(C, "runModifierEffects");
    function M() {
      y.forEach(function(_) {
        return _();
      }), y = [];
    }
    __name(M, "M");
    return u(M, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(yp, "yp");
u(yp, "popperGenerator");
var xm = [lp, mp, sp, lo, hp, cp, vp, op, fp];
var Hl = yp({ defaultModifiers: xm });
var Em = "tippy-box";
var Pp = "tippy-content";
var Sm = "tippy-backdrop";
var Ap = "tippy-arrow";
var zp = "tippy-svg-arrow";
var Fn = { passive: true, capture: true };
var _p = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Bl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(Bl, "Bl");
u(Bl, "getValueAtIndexOrReturn");
function Vl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Vl, "Vl");
u(Vl, "isType");
function Rp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(Rp, "Rp");
u(Rp, "invokeWithArgsOrReturn");
function wp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(wp, "wp");
u(wp, "debounce");
function Tm(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Tm, "Tm");
u(Tm, "splitBySpaces");
function gi(r) {
  return [].concat(r);
}
__name(gi, "gi");
u(gi, "normalizeToArray");
function xp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(xp, "xp");
u(xp, "pushIfUnique");
function Cm(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(Cm, "Cm");
u(Cm, "unique");
function Om(r) {
  return r.split("-")[0];
}
__name(Om, "Om");
u(Om, "getBasePlacement");
function Ja(r) {
  return [].slice.call(r);
}
__name(Ja, "Ja");
u(Ja, "arrayFrom");
function Ep(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(Ep, "Ep");
u(Ep, "removeUndefinedProps");
function mo() {
  return document.createElement("div");
}
__name(mo, "mo");
u(mo, "div");
function Ka(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Vl(r, e);
  });
}
__name(Ka, "Ka");
u(Ka, "isElement");
function Mm(r) {
  return Vl(r, "NodeList");
}
__name(Mm, "Mm");
u(Mm, "isNodeList");
function Im(r) {
  return Vl(r, "MouseEvent");
}
__name(Im, "Im");
u(Im, "isMouseEvent");
function Pm(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Pm, "Pm");
u(Pm, "isReferenceElement");
function Am(r) {
  return Ka(r) ? [r] : Mm(r) ? Ja(r) : Array.isArray(r) ? r : Ja(document.querySelectorAll(r));
}
__name(Am, "Am");
u(Am, "getArrayOfElements");
function ql(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(ql, "ql");
u(ql, "setTransitionDuration");
function Sp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(Sp, "Sp");
u(Sp, "setVisibilityState");
function zm(r) {
  var e, t = gi(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(zm, "zm");
u(zm, "getOwnerDocument");
function _m(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, b = l.props, m = b.interactiveBorder, d = Om(f.placement), h = f.modifiersData.offset;
    if (!h)
      return true;
    var y = d === "bottom" ? h.top.y : 0, w = d === "top" ? h.bottom.y : 0, S = d === "right" ? h.left.x : 0, C = d === "left" ? h.right.x : 0, M = c.top - i + y > m, _ = i - c.bottom - w > m, B = c.left - t + S > m, L = t - c.right - C > m;
    return M || _ || B || L;
  });
}
__name(_m, "_m");
u(_m, "isCursorOutsideInteractiveBorder");
function $l(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name($l, "$l");
u($l, "updateTransitionEndListener");
function Tp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(Tp, "Tp");
u(Tp, "actualContains");
var Or = { isTouch: false };
var Cp = 0;
function Rm() {
  Or.isTouch || (Or.isTouch = true, window.performance && document.addEventListener("mousemove", Dp));
}
__name(Rm, "Rm");
u(Rm, "onDocumentTouchStart");
function Dp() {
  var r = performance.now();
  r - Cp < 20 && (Or.isTouch = false, document.removeEventListener("mousemove", Dp)), Cp = r;
}
__name(Dp, "Dp");
u(Dp, "onDocumentMouseMove");
function Dm() {
  var r = document.activeElement;
  if (Pm(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(Dm, "Dm");
u(Dm, "onWindowBlur");
function km() {
  document.addEventListener("touchstart", Rm, Fn), window.addEventListener("blur", Dm);
}
__name(km, "km");
u(km, "bindGlobalEventListeners");
var Nm = typeof window != "undefined" && typeof document != "undefined";
var Gm = Nm ? !!window.msCrypto : false;
var Lm = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var jm = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var yr = Object.assign({ appendTo: _p, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Lm, jm);
var Hm = Object.keys(yr);
var Bm = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    yr[i] = e[i];
  });
}, "setDefaultProps");
function kp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var b;
      i[c] = r[c] !== void 0 ? r[c] : (b = yr[c]) != null ? b : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(kp, "kp");
u(kp, "getExtendedPassedProps");
function qm(r, e) {
  var t = e ? Object.keys(kp(Object.assign({}, yr, { plugins: e }))) : Hm, i = t.reduce(function(l, c) {
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
__name(qm, "qm");
u(qm, "getDataAttributeProps");
function Op(r, e) {
  var t = Object.assign({}, e, { content: Rp(e.content, [r]) }, e.ignoreAttributes ? {} : qm(r, e.plugins));
  return t.aria = Object.assign({}, yr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(Op, "Op");
u(Op, "evaluateProps");
var $m = u(function() {
  return "innerHTML";
}, "innerHTML");
function Wl(r, e) {
  r[$m()] = e;
}
__name(Wl, "Wl");
u(Wl, "dangerouslySetInnerHTML");
function Mp(r) {
  var e = mo();
  return r === true ? e.className = Ap : (e.className = zp, Ka(r) ? e.appendChild(r) : Wl(e, r)), e;
}
__name(Mp, "Mp");
u(Mp, "createArrowElement");
function Ip(r, e) {
  Ka(e.content) ? (Wl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Wl(r, e.content) : r.textContent = e.content);
}
__name(Ip, "Ip");
u(Ip, "setContent");
function Ul(r) {
  var e = r.firstElementChild, t = Ja(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(Pp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(Ap) || i.classList.contains(zp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Sm);
  }) };
}
__name(Ul, "Ul");
u(Ul, "getChildren");
function Np(r) {
  var e = mo(), t = mo();
  t.className = Em, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = mo();
  i.className = Pp, i.setAttribute("data-state", "hidden"), Ip(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var b = Ul(e), m = b.box, d = b.content, h = b.arrow;
    f.theme ? m.setAttribute("data-theme", f.theme) : m.removeAttribute("data-theme"), typeof f.animation == "string" ? m.setAttribute("data-animation", f.animation) : m.removeAttribute("data-animation"), f.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? m.setAttribute("role", f.role) : m.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && Ip(d, r.props), f.arrow ? h ? c.arrow !== f.arrow && (m.removeChild(h), m.appendChild(Mp(f.arrow))) : m.appendChild(Mp(f.arrow)) : h && m.removeChild(h);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(Np, "Np");
u(Np, "render");
Np.$$tippy = true;
var Fm = 1;
var Qa = [];
var Fl = [];
function Wm(r, e) {
  var t = Op(r, Object.assign({}, yr, kp(Ep(e)))), i, l, c, f = false, b = false, m = false, d = false, h, y, w, S = [], C = wp(dn, t.interactiveDebounce), M, _ = Fm++, B = null, L = Cm(t.plugins), F = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, I = { id: _, reference: r, popper: mo(), popperInstance: B, props: t, state: F, plugins: L, clearDelayTimeouts: mn, setProps: Xr, setContent: vn, show: Ei, hide: Si, hideWithInteractivity: _o, enable: hn, disable: Dr, unmount: Ro, destroy: ds };
  if (!t.render)
    return I;
  var Q = t.render(I), z = Q.popper, j = Q.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + I.id, I.popper = z, r._tippy = I, z._tippy = I;
  var Y = L.map(function(N) {
    return N.fn(I);
  }), K = r.hasAttribute("aria-expanded");
  return _r(), rt(), Le(), he("onCreate", [I]), t.showOnCreate && xr(), z.addEventListener("mouseenter", function() {
    I.props.interactive && I.state.isVisible && I.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    I.props.interactive && I.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", C);
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
  function pe() {
    var N;
    return !!((N = I.props.render) != null && N.$$tippy);
  }
  __name(pe, "pe");
  u(pe, "getIsDefaultRenderFn");
  function W() {
    return M || r;
  }
  __name(W, "W");
  u(W, "getCurrentTarget");
  function ce() {
    var N = W().parentNode;
    return N ? zm(N) : document;
  }
  __name(ce, "ce");
  u(ce, "getDocument");
  function De() {
    return Ul(z);
  }
  __name(De, "De");
  u(De, "getDefaultTemplateChildren");
  function Ve(N) {
    return I.state.isMounted && !I.state.isVisible || Or.isTouch || h && h.type === "focus" ? 0 : Bl(I.props.delay, N ? 0 : 1, yr.delay);
  }
  __name(Ve, "Ve");
  u(Ve, "getDelay");
  function Le(N) {
    N === void 0 && (N = false), z.style.pointerEvents = I.props.interactive && !N ? "" : "none", z.style.zIndex = "" + I.props.zIndex;
  }
  __name(Le, "Le");
  u(Le, "handleStyles");
  function he(N, te, ae) {
    if (ae === void 0 && (ae = true), Y.forEach(function(me) {
      me[N] && me[N].apply(me, te);
    }), ae) {
      var Ie;
      (Ie = I.props)[N].apply(Ie, te);
    }
  }
  __name(he, "he");
  u(he, "invokeHook");
  function Je() {
    var N = I.props.aria;
    if (!!N.content) {
      var te = "aria-" + N.content, ae = z.id, Ie = gi(I.props.triggerTarget || r);
      Ie.forEach(function(me) {
        var ht = me.getAttribute(te);
        if (I.state.isVisible)
          me.setAttribute(te, ht ? ht + " " + ae : ae);
        else {
          var It = ht && ht.replace(ae, "").trim();
          It ? me.setAttribute(te, It) : me.removeAttribute(te);
        }
      });
    }
  }
  __name(Je, "Je");
  u(Je, "handleAriaContentAttribute");
  function rt() {
    if (!(K || !I.props.aria.expanded)) {
      var N = gi(I.props.triggerTarget || r);
      N.forEach(function(te) {
        I.props.interactive ? te.setAttribute("aria-expanded", I.state.isVisible && te === W() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  __name(rt, "rt");
  u(rt, "handleAriaExpandedAttribute");
  function Ft() {
    ce().removeEventListener("mousemove", C), Qa = Qa.filter(function(N) {
      return N !== C;
    });
  }
  __name(Ft, "Ft");
  u(Ft, "cleanupInteractiveMouseListeners");
  function J(N) {
    if (!(Or.isTouch && (m || N.type === "mousedown"))) {
      var te = N.composedPath && N.composedPath()[0] || N.target;
      if (!(I.props.interactive && Tp(z, te))) {
        if (gi(I.props.triggerTarget || r).some(function(ae) {
          return Tp(ae, te);
        })) {
          if (Or.isTouch || I.state.isVisible && I.props.trigger.indexOf("click") >= 0)
            return;
        } else
          he("onClickOutside", [I, N]);
        I.props.hideOnClick === true && (I.clearDelayTimeouts(), I.hide(), b = true, setTimeout(function() {
          b = false;
        }), I.state.isMounted || Wt());
      }
    }
  }
  __name(J, "J");
  u(J, "onDocumentPress");
  function dr() {
    m = true;
  }
  __name(dr, "dr");
  u(dr, "onTouchMove");
  function Ot() {
    m = false;
  }
  __name(Ot, "Ot");
  u(Ot, "onTouchStart");
  function Rt() {
    var N = ce();
    N.addEventListener("mousedown", J, true), N.addEventListener("touchend", J, Fn), N.addEventListener("touchstart", Ot, Fn), N.addEventListener("touchmove", dr, Fn);
  }
  __name(Rt, "Rt");
  u(Rt, "addDocumentPress");
  function Wt() {
    var N = ce();
    N.removeEventListener("mousedown", J, true), N.removeEventListener("touchend", J, Fn), N.removeEventListener("touchstart", Ot, Fn), N.removeEventListener("touchmove", dr, Fn);
  }
  __name(Wt, "Wt");
  u(Wt, "removeDocumentPress");
  function fr(N, te) {
    Lt(N, function() {
      !I.state.isVisible && z.parentNode && z.parentNode.contains(z) && te();
    });
  }
  __name(fr, "fr");
  u(fr, "onTransitionedOut");
  function Ut(N, te) {
    Lt(N, te);
  }
  __name(Ut, "Ut");
  u(Ut, "onTransitionedIn");
  function Lt(N, te) {
    var ae = De().box;
    function Ie(me) {
      me.target === ae && ($l(ae, "remove", Ie), te());
    }
    __name(Ie, "Ie");
    if (u(Ie, "listener"), N === 0)
      return te();
    $l(ae, "remove", y), $l(ae, "add", Ie), y = Ie;
  }
  __name(Lt, "Lt");
  u(Lt, "onTransitionEnd");
  function wr(N, te, ae) {
    ae === void 0 && (ae = false);
    var Ie = gi(I.props.triggerTarget || r);
    Ie.forEach(function(me) {
      me.addEventListener(N, te, ae), S.push({ node: me, eventType: N, handler: te, options: ae });
    });
  }
  __name(wr, "wr");
  u(wr, "on");
  function _r() {
    ne() && (wr("touchstart", Oe, { passive: true }), wr("touchend", fn, { passive: true })), Tm(I.props.trigger).forEach(function(N) {
      if (N !== "manual")
        switch (wr(N, Oe), N) {
          case "mouseenter":
            wr("mouseleave", fn);
            break;
          case "focus":
            wr(Gm ? "focusout" : "blur", Mt);
            break;
          case "focusin":
            wr("focusout", Mt);
            break;
        }
    });
  }
  __name(_r, "_r");
  u(_r, "addListeners");
  function pn() {
    S.forEach(function(N) {
      var te = N.node, ae = N.eventType, Ie = N.handler, me = N.options;
      te.removeEventListener(ae, Ie, me);
    }), S = [];
  }
  __name(pn, "pn");
  u(pn, "removeListeners");
  function Oe(N) {
    var te, ae = false;
    if (!(!I.state.isEnabled || Rr(N) || b)) {
      var Ie = ((te = h) == null ? void 0 : te.type) === "focus";
      h = N, M = N.currentTarget, rt(), !I.state.isVisible && Im(N) && Qa.forEach(function(me) {
        return me(N);
      }), N.type === "click" && (I.props.trigger.indexOf("mouseenter") < 0 || f) && I.props.hideOnClick !== false && I.state.isVisible ? ae = true : xr(N), N.type === "click" && (f = !ae), ae && !Ie && Dt(N);
    }
  }
  __name(Oe, "Oe");
  u(Oe, "onTrigger");
  function dn(N) {
    var te = N.target, ae = W().contains(te) || z.contains(te);
    if (!(N.type === "mousemove" && ae)) {
      var Ie = wt().concat(z).map(function(me) {
        var ht, It = me._tippy, xt = (ht = It.popperInstance) == null ? void 0 : ht.state;
        return xt ? { popperRect: me.getBoundingClientRect(), popperState: xt, props: t } : null;
      }).filter(Boolean);
      _m(Ie, N) && (Ft(), Dt(N));
    }
  }
  __name(dn, "dn");
  u(dn, "onMouseMove");
  function fn(N) {
    var te = Rr(N) || I.props.trigger.indexOf("click") >= 0 && f;
    if (!te) {
      if (I.props.interactive) {
        I.hideWithInteractivity(N);
        return;
      }
      Dt(N);
    }
  }
  __name(fn, "fn");
  u(fn, "onMouseLeave");
  function Mt(N) {
    I.props.trigger.indexOf("focusin") < 0 && N.target !== W() || I.props.interactive && N.relatedTarget && z.contains(N.relatedTarget) || Dt(N);
  }
  __name(Mt, "Mt");
  u(Mt, "onBlurOrFocusOut");
  function Rr(N) {
    return Or.isTouch ? ne() !== N.type.indexOf("touch") >= 0 : false;
  }
  __name(Rr, "Rr");
  u(Rr, "isEventListenerStopped");
  function Vn() {
    Yr();
    var N = I.props, te = N.popperOptions, ae = N.placement, Ie = N.offset, me = N.getReferenceClientRect, ht = N.moveTransition, It = pe() ? Ul(z).arrow : null, xt = me ? { getBoundingClientRect: me, contextElement: me.contextElement || W() } : r, Do = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Et) {
      var St = Et.state;
      if (pe()) {
        var kr = De(), Yn = kr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Xn) {
          Xn === "placement" ? Yn.setAttribute("data-placement", St.placement) : St.attributes.popper["data-popper-" + Xn] ? Yn.setAttribute("data-" + Xn, "") : Yn.removeAttribute("data-" + Xn);
        }), St.attributes.popper = {};
      }
    }, "fn") }, Vt = [{ name: "offset", options: { offset: Ie } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !ht } }, Do];
    pe() && It && Vt.push({ name: "arrow", options: { element: It, padding: 3 } }), Vt.push.apply(Vt, (te == null ? void 0 : te.modifiers) || []), I.popperInstance = Hl(xt, z, Object.assign({}, te, { placement: ae, onFirstUpdate: w, modifiers: Vt }));
  }
  __name(Vn, "Vn");
  u(Vn, "createPopperInstance");
  function Yr() {
    I.popperInstance && (I.popperInstance.destroy(), I.popperInstance = null);
  }
  __name(Yr, "Yr");
  u(Yr, "destroyPopperInstance");
  function hr() {
    var N = I.props.appendTo, te, ae = W();
    I.props.interactive && N === _p || N === "parent" ? te = ae.parentNode : te = Rp(N, [ae]), te.contains(z) || te.appendChild(z), I.state.isMounted = true, Vn();
  }
  __name(hr, "hr");
  u(hr, "mount");
  function wt() {
    return Ja(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(wt, "wt");
  u(wt, "getNestedPopperTree");
  function xr(N) {
    I.clearDelayTimeouts(), N && he("onTrigger", [I, N]), Rt();
    var te = Ve(true), ae = ie(), Ie = ae[0], me = ae[1];
    Or.isTouch && Ie === "hold" && me && (te = me), te ? i = setTimeout(function() {
      I.show();
    }, te) : I.show();
  }
  __name(xr, "xr");
  u(xr, "scheduleShow");
  function Dt(N) {
    if (I.clearDelayTimeouts(), he("onUntrigger", [I, N]), !I.state.isVisible) {
      Wt();
      return;
    }
    if (!(I.props.trigger.indexOf("mouseenter") >= 0 && I.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(N.type) >= 0 && f)) {
      var te = Ve(false);
      te ? l = setTimeout(function() {
        I.state.isVisible && I.hide();
      }, te) : c = requestAnimationFrame(function() {
        I.hide();
      });
    }
  }
  __name(Dt, "Dt");
  u(Dt, "scheduleHide");
  function hn() {
    I.state.isEnabled = true;
  }
  __name(hn, "hn");
  u(hn, "enable");
  function Dr() {
    I.hide(), I.state.isEnabled = false;
  }
  __name(Dr, "Dr");
  u(Dr, "disable");
  function mn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(mn, "mn");
  u(mn, "clearDelayTimeouts");
  function Xr(N) {
    if (!I.state.isDestroyed) {
      he("onBeforeUpdate", [I, N]), pn();
      var te = I.props, ae = Op(r, Object.assign({}, te, Ep(N), { ignoreAttributes: true }));
      I.props = ae, _r(), te.interactiveDebounce !== ae.interactiveDebounce && (Ft(), C = wp(dn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? gi(te.triggerTarget).forEach(function(Ie) {
        Ie.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), rt(), Le(), j && j(te, ae), I.popperInstance && (Vn(), wt().forEach(function(Ie) {
        requestAnimationFrame(Ie._tippy.popperInstance.forceUpdate);
      })), he("onAfterUpdate", [I, N]);
    }
  }
  __name(Xr, "Xr");
  u(Xr, "setProps");
  function vn(N) {
    I.setProps({ content: N });
  }
  __name(vn, "vn");
  u(vn, "setContent");
  function Ei() {
    var N = I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Ie = Or.isTouch && !I.props.touch, me = Bl(I.props.duration, 0, yr.duration);
    if (!(N || te || ae || Ie) && !W().hasAttribute("disabled") && (he("onShow", [I], false), I.props.onShow(I) !== false)) {
      if (I.state.isVisible = true, pe() && (z.style.visibility = "visible"), Le(), Rt(), I.state.isMounted || (z.style.transition = "none"), pe()) {
        var ht = De(), It = ht.box, xt = ht.content;
        ql([It, xt], 0);
      }
      w = u(function() {
        var Vt;
        if (!(!I.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = I.props.moveTransition, pe() && I.props.animation) {
            var Ti = De(), Et = Ti.box, St = Ti.content;
            ql([Et, St], me), Sp([Et, St], "visible");
          }
          Je(), rt(), xp(Fl, I), (Vt = I.popperInstance) == null || Vt.forceUpdate(), he("onMount", [I]), I.props.animation && pe() && Ut(me, function() {
            I.state.isShown = true, he("onShown", [I]);
          });
        }
      }, "onFirstUpdate"), hr();
    }
  }
  __name(Ei, "Ei");
  u(Ei, "show");
  function Si() {
    var N = !I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Ie = Bl(I.props.duration, 1, yr.duration);
    if (!(N || te || ae) && (he("onHide", [I], false), I.props.onHide(I) !== false)) {
      if (I.state.isVisible = false, I.state.isShown = false, d = false, f = false, pe() && (z.style.visibility = "hidden"), Ft(), Wt(), Le(true), pe()) {
        var me = De(), ht = me.box, It = me.content;
        I.props.animation && (ql([ht, It], Ie), Sp([ht, It], "hidden"));
      }
      Je(), rt(), I.props.animation ? pe() && fr(Ie, I.unmount) : I.unmount();
    }
  }
  __name(Si, "Si");
  u(Si, "hide");
  function _o(N) {
    ce().addEventListener("mousemove", C), xp(Qa, C), C(N);
  }
  __name(_o, "_o");
  u(_o, "hideWithInteractivity");
  function Ro() {
    I.state.isVisible && I.hide(), !!I.state.isMounted && (Yr(), wt().forEach(function(N) {
      N._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), Fl = Fl.filter(function(N) {
      return N !== I;
    }), I.state.isMounted = false, he("onHidden", [I]));
  }
  __name(Ro, "Ro");
  u(Ro, "unmount");
  function ds() {
    I.state.isDestroyed || (I.clearDelayTimeouts(), I.unmount(), pn(), delete r._tippy, I.state.isDestroyed = true, he("onDestroy", [I]));
  }
  __name(ds, "ds");
  u(ds, "destroy");
}
__name(Wm, "Wm");
u(Wm, "createTippy");
function vo(r, e) {
  e === void 0 && (e = {});
  var t = yr.plugins.concat(e.plugins || []);
  km();
  var i = Object.assign({}, e, { plugins: t }), l = Am(r);
  if (false)
    var c, f;
  var b = l.reduce(function(m, d) {
    var h = d && Wm(d, i);
    return h && m.push(h), m;
  }, []);
  return Ka(r) ? b[0] : b;
}
__name(vo, "vo");
u(vo, "tippy");
vo.defaultProps = yr;
vo.setDefaultProps = Bm;
vo.currentInput = Or;
var Tx = Object.assign({}, lo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
vo.setDefaultProps({ render: Np });
var Tt = vo;
var Yl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
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
      this.helpableService = Ke(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${Ye(i.value)}`);
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
  return u(e, "HelpableMixinClass"), A([D], e.prototype, "help", 2), A([D], e.prototype, "helpId", 2), A([D], e.prototype, "debugHelpable", 2), e;
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
  return u(e, "HoverableMixinClass"), A([D], e.prototype, "hoverable", 2), e;
}
__name(we, "we");
u(we, "HoverableMixin");
function* es(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(es, "es");
u(es, "parse");
var Gp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Gp");
var ln = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "ln");
var Mr;
var ts;
var $r = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Mr.set(this, void 0), ts.set(this, ""), Gp(this, Mr, e, "f"), ln(this, Mr, "f").updateParent("");
  }
  get attributeName() {
    return ln(this, Mr, "f").attr.name;
  }
  get attributeNamespace() {
    return ln(this, Mr, "f").attr.namespaceURI;
  }
  get value() {
    return ln(this, ts, "f");
  }
  set value(e) {
    Gp(this, ts, e || "", "f"), ln(this, Mr, "f").updateParent(e);
  }
  get element() {
    return ln(this, Mr, "f").element;
  }
  get booleanValue() {
    return ln(this, Mr, "f").booleanValue;
  }
  set booleanValue(e) {
    ln(this, Mr, "f").booleanValue = e;
  }
}, "$r");
u($r, "AttributeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap();
var go = /* @__PURE__ */ __name(class {
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
}, "go");
u(go, "AttributeValueSetter");
var Lp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Lp");
var bi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "bi");
var Ir;
var Jt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Ir.set(this, void 0), Lp(this, Ir, [e], "f"), e.textContent = "";
  }
  get value() {
    return bi(this, Ir, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return bi(this, Ir, "f")[0].previousSibling;
  }
  get nextSibling() {
    return bi(this, Ir, "f")[bi(this, Ir, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), bi(this, Ir, "f")[0].before(...t);
    for (let i of bi(this, Ir, "f"))
      i.remove();
    Lp(this, Ir, t, "f");
  }
}, "Jt");
u(Jt, "NodeTemplatePart");
Ir = /* @__PURE__ */ new WeakMap();
function bo(r) {
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
__name(bo, "bo");
u(bo, "createProcessor");
function yo(r, e) {
  r.value = String(e);
}
__name(yo, "yo");
u(yo, "processPropertyIdentity");
function rs(r, e) {
  return typeof e == "boolean" && r instanceof $r && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(rs, "rs");
u(rs, "processBooleanAttribute");
var Xl = bo(yo);
var Um = bo((r, e) => {
  rs(r, e) || yo(r, e);
});
var jp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "jp");
var ns = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "ns");
var wo;
var xo;
function* Vm(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new go(t, l);
          for (let f of es(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let b = new $r(c, f.value);
              c.append(b), yield b;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of es(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Jt(t, i.value));
        break;
      }
}
__name(Vm, "Vm");
u(Vm, "collectParts");
var un = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = Xl) {
    var l, c;
    super();
    wo.set(this, void 0), xo.set(this, void 0), Object.getPrototypeOf(this) !== un.prototype && Object.setPrototypeOf(this, un.prototype), this.appendChild(e.content.cloneNode(true)), jp(this, xo, Array.from(Vm(this)), "f"), jp(this, wo, i, "f"), (c = (l = ns(this, wo, "f")).createCallback) === null || c === void 0 || c.call(l, this, ns(this, xo, "f"), t);
  }
  update(e) {
    ns(this, wo, "f").processCallback(this, ns(this, xo, "f"), e);
  }
}, "un");
u(un, "TemplateInstance");
wo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap();
var Hp = /* @__PURE__ */ new WeakSet();
function Bp(r) {
  return Hp.has(r);
}
__name(Bp, "Bp");
u(Bp, "isDirective");
function qp(r, e) {
  return Bp(e) ? (e(r), true) : false;
}
__name(qp, "qp");
u(qp, "processDirective");
function Eo(r) {
  return (...e) => {
    let t = r(...e);
    return Hp.add(t), t;
  };
}
__name(Eo, "Eo");
u(Eo, "directive");
var So = /* @__PURE__ */ new WeakMap();
var To = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), So.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), So.get(this.element).delete(this.type));
  }
  static for(e) {
    So.has(e.element) || So.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = So.get(e.element);
    return i.has(t) ? i.get(t) : new To(e.element, t);
  }
}, "To");
u(To, "EventHandler");
function $p(r, e) {
  return r instanceof $r && r.attributeName.startsWith("on") ? (To.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name($p, "$p");
u($p, "processEvent");
function Ym(r, e) {
  return e instanceof yi && r instanceof Jt ? (e.renderInto(r), true) : false;
}
__name(Ym, "Ym");
u(Ym, "processSubTemplate");
function Xm(r, e) {
  return e instanceof DocumentFragment && r instanceof Jt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(Xm, "Xm");
u(Xm, "processDocumentFragment");
function Zm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(Zm, "Zm");
u(Zm, "isIterable");
function Qm(r, e) {
  if (!Zm(e))
    return false;
  if (r instanceof Jt) {
    let t = [];
    for (let i of e)
      if (i instanceof yi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
__name(Qm, "Qm");
u(Qm, "processIterable");
function is(r, e) {
  qp(r, e) || rs(r, e) || $p(r, e) || Ym(r, e) || Xm(r, e) || Qm(r, e) || yo(r, e);
}
__name(is, "is");
u(is, "processPart");
var Zl = /* @__PURE__ */ new WeakMap();
var Fp = /* @__PURE__ */ new WeakMap();
var Wp = /* @__PURE__ */ new WeakMap();
var yi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Zl.has(this.strings))
      return Zl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Zl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (Fp.get(e) !== t) {
      Fp.set(e, t);
      let i = new un(t, this.values, this.processor);
      Wp.set(e, i), e instanceof Jt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Wp.get(e).update(this.values);
  }
}, "yi");
u(yi, "TemplateResult");
var Jm = bo(is);
function U(r, ...e) {
  return new yi(r, e, Jm);
}
__name(U, "U");
u(U, "html");
function Z(r, e) {
  r.renderInto(e);
}
__name(Z, "Z");
u(Z, "render");
var Ql = /* @__PURE__ */ new WeakMap();
var Km = Eo((...r) => (e) => {
  Ql.has(e) || Ql.set(e, { i: r.length });
  let t = Ql.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, is(e, l));
    }) : i <= t.i && (t.i = i, is(e, r[i]));
});
var ev = Eo((r) => (e) => {
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
var Fr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function tt(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), A([D], e.prototype, "if", 2), e;
}
__name(tt, "tt");
u(tt, "IfableMixin");
var Jl = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
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
      ue("menuable:show-menu", {}, this);
    }
    get menuContent() {
      let i = document.getElementById("operation-menu");
      if (i === null || i.content === void 0)
        return null;
      let l = i.content.cloneNode(true), c = document.createDocumentFragment();
      return Z(U`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Fr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        H.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Tt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Cn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        H.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Tt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (kn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        H.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Tt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      H.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Tt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), ue("menuable:menu-if", {}, this);
    }
    showAngleInspector() {
      this.hideMenu(), ue("menuable:menu-angle", {}, this);
    }
    showFlagInspector() {
      this.hideMenu(), ue("menuable:menu-flag", {}, this);
    }
    dispatchOperationDeleteEvent() {
      ue("menuable:menu-delete", {}, this);
    }
  }
  __name(e, "e");
  return u(e, "MenuableMixinClass"), e;
}
__name(Ce, "Ce");
u(Ce, "MenuableMixin");
var os = Tn(ao(), 1);
var Kt = u((r) => r != null && typeof r.resizeable == "boolean", "isResizeable");
function as(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = at({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        ue("resizeable:init", {}, this);
      }, setInteract: (i, l) => {
        H.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT"), H.notNull(this.resizeHandle);
        let c = (0, os.default)(this.resizeHandle);
        c.styleCursor(false), c.on("down", this.grabResizeHandle.bind(this)), c.on("up", this.releaseResizeHandle.bind(this)), c.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (i, l) => {
        H.need(l.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, ue("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (i, l) => {
        H.need(l.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, ue("resizeable:release-resize-handle", {}, this);
      }, startResizing: (i, l) => {
        H.need(l.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (i, l) => {
        H.need(l.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), ue("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), ue("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = Ke(this.resizeableMachine).onTransition((i) => {
        this.debugResizeable && console.log(`resizeable: ${Ye(i.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(i) {
      i ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(i) {
      (0, os.default)(this.resizeHandle).draggable({ modifiers: [os.default.modifiers.snap({ targets: i, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(i) {
      let l = i.modifiers[0];
      if (!l.inRange)
        return;
      let c = l.target.source;
      ue("resizeable:resize-handle-in-snap-range", { snapTargetInfo: c }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
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
  return u(e, "ResizeableMixinClass"), A([D], e.prototype, "span", 2), A([D], e.prototype, "resizeHandleX", 2), A([D], e.prototype, "resizeHandleY", 2), A([D], e.prototype, "debugResizeable", 2), A([D], e.prototype, "resizing", 2), A([xe], e.prototype, "resizeHandle", 2), e;
}
__name(as, "as");
u(as, "ResizeableMixin");
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
    return Vs;
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
    return `"${Vs}"`;
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
u(ut, "BlochDisplayElement"), A([xe], ut.prototype, "body", 2), A([xe], ut.prototype, "vectorLine", 2), A([xe], ut.prototype, "vectorEnd", 2), A([xe], ut.prototype, "vector", 2), A([At], ut.prototype, "vectorEndCircles", 2), A([D], ut.prototype, "x", 2), A([D], ut.prototype, "y", 2), A([D], ut.prototype, "z", 2);
ee(ut);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var qt = /* @__PURE__ */ __name(class extends Ce(Te(Se(qe(Me(Ee(we(HTMLElement))))))) {
  get operationType() {
    return Ys;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Vp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ys}"`;
  }
}, "qt");
u(qt, "ControlGateElement");
ee(qt);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(Se(qe(Me(Ee(we(HTMLElement))))))))) {
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
}, "er");
u(er, "HGateElement");
ee(er);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ce(Te(Kc(Se(Me(Ee(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ma;
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
    return this.flag === "" ? `"${ma}"` : `"${ma}>${this.flag}"`;
  }
}, "tr");
u(tr, "MeasurementGateElement"), A([D], tr.prototype, "value", 2);
ee(tr);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(nn(Se(qe(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Zp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${va}"` : `"${va}(${this.angle.replace("/", "_")})"`;
  }
}, "rr");
u(rr, "PhaseGateElement");
ee(rr);
var ss = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var Pr = /* @__PURE__ */ __name(class extends Ce(Te(as(Se(Me(Ee(we(HTMLElement))))))) {
  get operationType() {
    return Zs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(Qp)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            ${this.iconHtml(ss)}
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Zs}${this.span}"`;
  }
}, "Pr");
u(Pr, "QftDaggerGateElement");
ee(Pr);
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
var Ar = /* @__PURE__ */ __name(class extends Ce(Te(as(Se(Me(Ee(we(HTMLElement))))))) {
  get operationType() {
    return Xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(Jp)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            ${this.iconHtml(ss)}
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Xs}${this.span}"`;
  }
}, "Ar");
u(Ar, "QftGateElement");
ee(Ar);
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
var nr = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(Se(qe(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Kp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ga}<${this.if}"` : `"${ga}"`;
  }
}, "nr");
u(nr, "RnotGateElement");
ee(nr);
var ed = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(nn(Se(qe(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ed)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ba}"` : `"${ba}(${this.angle.replace("/", "_")})"`;
  }
}, "ir");
u(ir, "RxGateElement");
ee(ir);
var td = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(nn(Se(qe(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(td)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ya}"` : `"${ya}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RyGateElement");
ee(or);
var rd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(nn(Se(qe(Me(Ee(we(HTMLElement)))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(rd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${wa}"` : `"${wa}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RzGateElement");
ee(ar);
var nd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends Ce(Te(We(Se(qe(Me(Ee(we(HTMLElement)))))))) {
  get operationType() {
    return Qs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(nd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Qs}"`;
  }
}, "sr");
u(sr, "SwapGateElement");
ee(sr);
var id = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(Se(qe(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(id)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${xa}<${this.if}"` : `"${xa}"`;
  }
}, "lr");
u(lr, "TGateElement");
ee(lr);
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
        return lc;
      case "1":
        return uc;
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
u($t, "WriteGateElement"), A([D], $t.prototype, "value", 2);
ee($t);
var ad = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(Se(qe(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ad)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ea}<${this.if}"` : `"${Ea}"`;
  }
}, "ur");
u(ur, "XGateElement");
ee(ur);
var sd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(Se(qe(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(sd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Sa}<${this.if}"` : `"${Sa}"`;
  }
}, "cr");
u(cr, "YGateElement");
ee(cr);
var ld = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends Ce(Te(tt(We(Se(qe(Me(Ee(we(HTMLElement))))))))) {
  get operationType() {
    return Ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ld)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ta}<${this.if}"` : `"${Ta}"`;
  }
}, "pr");
u(pr, "ZGateElement");
ee(pr);
var $e = u((r) => r instanceof er || r instanceof ur || r instanceof cr || r instanceof pr || r instanceof rr || r instanceof lr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof qt || r instanceof ut || r instanceof $t || r instanceof tr || r instanceof Ar || r instanceof Pr, "isOperation");
var ud = u((r) => r != null && r instanceof er, "isHGateElement");
var cd = u((r) => r != null && r instanceof ur, "isXGateElement");
var pd = u((r) => r != null && r instanceof cr, "isYGateElement");
var dd = u((r) => r != null && r instanceof pr, "isZGateElement");
var Co = u((r) => r != null && r instanceof rr, "isPhaseGateElement");
var fd = u((r) => r != null && r instanceof lr, "isTGateElement");
var hd = u((r) => r != null && r instanceof nr, "isRnotGateElement");
var ls = u((r) => r != null && r instanceof ir, "isRxGateElement");
var us = u((r) => r != null && r instanceof or, "isRyGateElement");
var cs = u((r) => r != null && r instanceof ar, "isRzGateElement");
var md = u((r) => r != null && r instanceof sr, "isSwapGateElement");
var Kl = u((r) => r != null && r instanceof qt, "isControlGateElement");
var vd = u((r) => r != null && r instanceof ut, "isBlochDisplayElement");
var LC = u((r) => r != null && r instanceof $t, "isWriteGateElement");
var gd = u((r) => r != null && r instanceof tr, "isMeasurementGateElement");
var Oo = Tn(ao(), 1);
var eu = u((r) => r !== null && r instanceof Wr, "isAngleSliderElement");
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
      t.type === "SET_ANGLE" && (this.denominator = qi(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(nc(this.angle));
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
    this.angleSliderService = Ke(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Ye(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Oo.default)(this).unset();
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
    (0, Oo.default)(this).draggable({ origin: "self", modifiers: [Oo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = Oo.default.getElementRect(e.target).width, i = e.pageX / t;
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
u(Wr, "AngleSliderElement"), A([D], Wr.prototype, "angle", 2), A([D], Wr.prototype, "radian", 2), A([D], Wr.prototype, "denominator", 2), A([D], Wr.prototype, "disabled", 2), A([D], Wr.prototype, "debug", 2);
ee(Wr);
var Mo = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Mo");
u(Mo, "ButtonGroupElement"), A([At], Mo.prototype, "buttons", 2), Mo = A([ee], Mo);
var wi = Tn(yd(), 1);
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
    wi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        H.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, b = c.phase() / Math.PI * 180;
        t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? t.classList.add("magnitude-0") : (t.classList.remove("magnitude-0"), t.style.setProperty("--magnitude", f.toString()));
        let m = Math.trunc(b);
        m < 0 && (m = 360 + m), t.style.setProperty("--phase", `-${m.toString()}deg`);
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
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && wi.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (wi.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = e; f <= t; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), wi.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let t of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(t);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    wi.default.mutate(() => {
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
    let b = parseInt(l), m = parseFloat(c), d = parseFloat(f), h = new en(m, d), y = h.abs(), w = h.phase() / Math.PI * 180, S = document.importNode(this.qubitCirclePopupTemplate.content, true), C = S.getElementById("qubit-circle-popup--ket-binary-value"), M = S.getElementById("qubit-circle-popup--ket-decimal-value"), _ = S.getElementById("qubit-circle-popup--amplitude"), B = S.getElementById("qubit-circle-popup--amplitude-real-value"), L = S.getElementById("qubit-circle-popup--amplitude-imag-value"), F = S.getElementById("qubit-circle-popup--probability"), I = S.getElementById("qubit-circle-popup--probability-value"), Q = S.getElementById("qubit-circle-popup--phase"), z = S.getElementById("qubit-circle-popup--phase-value");
    H.notNull(_), H.notNull(B), H.notNull(L), H.notNull(F), H.notNull(I), H.notNull(Q), H.notNull(z), C && (C.textContent = b.toString(2).padStart(this.qubitCount, "0")), M && (M.textContent = b.toString()), this.showQubitCirclePopupAmplitude ? (B.textContent = yt(h.real, 5), L.textContent = `${yt(h.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? I.textContent = `${yt(y * y * 100, 4)}%` : F.style.display = "none", this.showQubitCirclePopupPhase ? z.textContent = `${yt(w, 2)}\xB0` : Q.style.display = "none";
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
u(ct, "CircleNotationElement"), A([D], ct.prototype, "qubitCount", 2), A([D], ct.prototype, "qubitCircleSize", 2), A([D], ct.prototype, "colCount", 2), A([D], ct.prototype, "rowCount", 2), A([D], ct.prototype, "paddingX", 2), A([D], ct.prototype, "paddingY", 2), A([D], ct.prototype, "overscanCount", 2), A([D], ct.prototype, "colorPhase", 2), A([D], ct.prototype, "qubitCirclePopupTemplateId", 2), A([D], ct.prototype, "showQubitCirclePopupAmplitude", 2), A([D], ct.prototype, "showQubitCirclePopupProbability", 2), A([D], ct.prototype, "showQubitCirclePopupPhase", 2), A([xe], ct.prototype, "window", 2), A([xe], ct.prototype, "innerContainer", 2), A([At], ct.prototype, "qubitCircles", 2), ct = A([ee], ct);
var Io = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Io");
u(Io, "CircleNotationPanelElement"), A([xe], Io.prototype, "circleNotation", 2), Io = A([ee], Io);
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
      return H.need($e(t), `${t} must be an operation.`), t;
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
u(Ur, "GateCarouselElement"), A([D], Ur.prototype, "currentGateSetIndex", 2), A([xe], Ur.prototype, "contentClipper", 2), A([At], Ur.prototype, "gateSets", 2), A([At], Ur.prototype, "dots", 2), A([At], Ur.prototype, "popinAnimationGates", 2), Ur = A([ee], Ur);
var ru = /* @__PURE__ */ __name(class extends HTMLElement {
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
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !$e(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    H.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return Z(U`${t}`, i), i;
  }
}, "ru");
u(ru, "InspectorButtonElement");
ee(ru);
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
    return sc(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Fr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Cn(e)) {
      let t = qi(e.angle);
      Co(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (ls(e) || us(e) || cs(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    kn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    if (!eu(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!eu(t))
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
    if (ac(e)) {
      let t, i = qi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), ic(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : oc(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
u(_t, "OperationInspectorElement"), A([xe], _t.prototype, "ifInput", 2), A([xe], _t.prototype, "angleInputLabel", 2), A([xe], _t.prototype, "angleInput", 2), A([xe], _t.prototype, "angleSlider", 2), A([xe], _t.prototype, "denominatorInput", 2), A([xe], _t.prototype, "denominatorVariableLabel", 2), A([xe], _t.prototype, "denominatorLabel", 2), A([xe], _t.prototype, "reduceAngleFractionCheckbox", 2), A([xe], _t.prototype, "flagInput", 2), A([D], _t.prototype, "conditionalGatePaneDisabled", 2), A([D], _t.prototype, "anglePaneDisabled", 2), A([D], _t.prototype, "conditionalFlagPaneDisabled", 2);
ee(_t);
var ps = Tn(Sd(), 1);
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
    let t = document.importNode(this.popupTemplate.content, true), i = new ps.default(this.amplitude), l = t.getElementById("qubit-circle-popup--header"), c = t.getElementById("qubit-circle-popup--ket-binary-value"), f = t.getElementById("qubit-circle-popup--ket-decimal-value"), b = t.getElementById("qubit-circle-popup--amplitude"), m = t.getElementById("qubit-circle-popup--amplitude-real-value"), d = t.getElementById("qubit-circle-popup--amplitude-imag-value"), h = t.getElementById("qubit-circle-popup--probability"), y = t.getElementById("qubit-circle-popup--probability-value"), w = t.getElementById("qubit-circle-popup--phase"), S = t.getElementById("qubit-circle-popup--phase-value");
    H.notNull(l), H.notNull(c), H.notNull(f), H.notNull(b), H.notNull(m), H.notNull(d), H.notNull(h), H.notNull(y), H.notNull(w), H.notNull(S), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (m.textContent = yt(i.re, 5), d.textContent = `${yt(i.im, 5)}i`) : b.style.display = "none", this.showPopupProbability ? y.textContent = `${yt(this.magnitude * this.magnitude * 100, 4)}%` : h.style.display = "none", this.showPopupPhase ? S.textContent = `${yt(this.phaseDeg, 2)}\xB0` : w.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(t), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new ps.default(this.amplitude).abs();
  }
  get phase() {
    return new ps.default(this.amplitude).arg();
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
u(Nt, "QubitCircleElement"), A([D], Nt.prototype, "ket", 2), A([D], Nt.prototype, "qubitCount", 2), A([D], Nt.prototype, "amplitude", 2), A([D], Nt.prototype, "hidePhase", 2), A([D], Nt.prototype, "popupTemplateId", 2), A([D], Nt.prototype, "showPopupHeader", 2), A([D], Nt.prototype, "showPopupAmplitude", 2), A([D], Nt.prototype, "showPopupProbability", 2), A([D], Nt.prototype, "showPopupPhase", 2), A([D], Nt.prototype, "darkMode", 2), Nt = A([ee], Nt);
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
var Wn = /* @__PURE__ */ __name(class extends HTMLElement {
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
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), b = f.left + window.pageXOffset, m = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (b + c)}px`, i.style.top = `${t.clientY - (m + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = Ke(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Ye(e.value)}`);
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
}, "Wn");
u(Wn, "RunCircuitButtonElement"), A([D], Wn.prototype, "running", 2), A([D], Wn.prototype, "debug", 2), A([xe], Wn.prototype, "body", 2), A([xe], Wn.prototype, "ripple", 2);
ee(Wn);
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
u(Vr, "SlideInElement"), A([D], Vr.prototype, "direction", 2), A([D], Vr.prototype, "directionDesktop", 2), A([D], Vr.prototype, "duration", 2), A([D], Vr.prototype, "marginTop", 2), A([D], Vr.prototype, "marginBottom", 2), Vr = A([ee], Vr);
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
u(cn, "CircuitBlockElement"), A([D], cn.prototype, "comment", 2), A([D], cn.prototype, "finalized", 2), cn = A([ee], cn);
var zr = u((r) => r != null && r instanceof Gt, "isCircuitStepElement");
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
      t.type === "SNAP_DROPZONE" && ue("circuit-step:qpu-operation-snap", { dropzone: t.dropzone }, this);
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && ue("circuit-step:qpu-operation-unsnap", { dropzone: t.dropzone }, this);
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && ue("circuit-step:delete-qpu-operation", { dropzone: t.dropzone }, this);
    }, dispatchResizeOperationEvent: (e, t) => {
      t.type === "RESIZE_OPERATION" && ue("circuit-step:resize-qpu-operation", { dropzone: t.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = Ke(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Ye(e.value)}`);
    });
  }
  get numberOfQubitsInUse() {
    let e = 0;
    for (let [t, i] of Object.entries(this.dropzones)) {
      let l = parseInt(t) + 1;
      i.operation && l > e && (e = l), Kt(i.operation) && l + i.operation.span - 1 > e && (e = l + i.operation.span - 1);
    }
    return H.need(0 <= e && e <= 16, "invalid number of qubits in use"), e;
  }
  get numberOfWiresDisplayed() {
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
      $i(l.operation) && (l.operation.controls = []);
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
        if (!Co(f.operation))
          throw new Error(`${f.operation} isn't a phase-gate element.`);
        return l.angle === f.operation.angle;
      }).map((f) => this.bit(f));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((f) => f < this.bit(i)), i.connectBottom = c.some((f) => f > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((m) => m.connectTop || m.connectBottom).map((m) => this.bit(m)), f = Math.min(...c), b = Math.max(...c);
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
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((h) => h.operationName))], c = this.numControlGateDropzones(e, l), f = i.map((h) => this.bit(h)), b = c === null ? f : f.slice(0, c), m = t.map((h) => this.bit(h)), d = b.concat(m);
    for (let [h, y] of Object.entries(i)) {
      let w = y.operation;
      y.connectBottom = d.some((S) => this.bit(y) < S), y.connectTop = d.some((S) => this.bit(y) > S), c === null || c !== null && parseInt(h) < c ? w.enable() : (y.connectTop = Math.max(...d) > this.bit(y), w.disable());
    }
    for (let h of t) {
      if (!$i(h.operation))
        throw new Error(`${h.operation} isn't controllable.`);
      h.operation.controls = this.controlBits(h, f, e), h.connectTop = d.some((y) => y < this.bit(h)), h.connectBottom = d.some((y) => y > this.bit(h));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((m) => Kl(m.operation) && !m.operation.disabled).map((m) => this.bit(m)), l = t.map((m) => this.bit(m)), c = i.concat(l), f = Math.min(...c), b = Math.max(...c);
    for (let m of this.freeDropzones)
      f < this.bit(m) && this.bit(m) < b && (m.connectTop = true, m.connectBottom = true);
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
    return this.dropzones[this.numberOfWiresDisplayed - 1];
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
    return this.dropzones.filter((e) => e.occupied && Kl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, b = 0, m = 0, d = 0, h = 0, y = 0;
    return this.dropzones.filter((w) => w.occupied).filter((w) => $i(w.operation)).filter((w) => e === void 0 ? true : ud(w.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : cd(w.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : pd(w.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : dd(w.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : Co(w.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : fd(w.operation) ? (b += 1, e.maxCtTargetGates !== 0 && b > e.maxCtTargetGates ? false : !e.disableCt) : hd(w.operation) ? (m += 1, e.maxCrnotTargetGates !== 0 && m > e.maxCrnotTargetGates ? false : !e.disableCrnot) : ls(w.operation) ? (d += 1, e.maxCrxTargetGates !== 0 && d > e.maxCrxTargetGates ? false : !e.disableCrx) : us(w.operation) ? (h += 1, e.maxCryTargetGates !== 0 && h > e.maxCryTargetGates ? false : !e.disableCry) : cs(w.operation) ? (y += 1, e.maxCrzTargetGates !== 0 && y > e.maxCrzTargetGates ? false : !e.disableCrz) : md(w.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    ue("circuit-step:update", {}, this);
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
    ue("circuit-step:mouseenter", {}, this);
  }
  dispatchMouseleaveEvent() {
    ue("circuit-step:mouseleave", {}, this);
  }
  maybeDispatchClickEvent(e) {
    $e(e.target) || ue("circuit-step:click", {}, this);
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
        case er: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, m] of _e(f, (d) => d.controls.toString())) {
              let d = m[0], h = d.operationType, y = m.map((S) => S.bit), w = { type: h, targets: y };
              c !== "" && (w.if = c), b !== "" && (w.controls = d.controls), e.push(w);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, m] of _e(f, (d) => d.controls.toString())) {
              let d = m[0], h = d.operationType, y = m.map((S) => S.bit), w = { type: h, targets: y };
              c !== "" && (w.if = c), b !== "" && (w.controls = d.controls), e.push(w);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, m] of _e(f, (d) => d.controls.toString())) {
              let d = m[0], h = d.operationType, y = m.map((S) => S.bit), w = { type: h, targets: y };
              c !== "" && (w.if = c), b !== "" && (w.controls = d.controls), e.push(w);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, m] of _e(f, (d) => d.controls.toString())) {
              let d = m[0], h = d.operationType, y = m.map((S) => S.bit), w = { type: h, targets: y };
              c !== "" && (w.if = c), b !== "" && (w.controls = d.controls), e.push(w);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, m] of _e(f, (d) => d.if))
              for (let [d, h] of _e(m, (y) => y.controls.toString())) {
                let y = h[0], w = y.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                b !== "" && (C.if = b), c !== "" && (C.angle = c), d !== "" && (C.controls = y.controls), e.push(C);
              }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, m] of _e(f, (d) => d.controls.toString())) {
              let d = m[0], h = d.operationType, y = m.map((S) => S.bit), w = { type: h, targets: y };
              c !== "" && (w.if = c), b !== "" && (w.controls = d.controls), e.push(w);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.if))
            for (let [b, m] of _e(f, (d) => d.controls.toString())) {
              let d = m[0], h = d.operationType, y = m.map((S) => S.bit), w = { type: h, targets: y };
              c !== "" && (w.if = c), b !== "" && (w.controls = d.controls), e.push(w);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, m] of _e(f, (d) => d.if))
              for (let [d, h] of _e(m, (y) => y.controls.toString())) {
                let y = h[0], w = y.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                b !== "" && (C.if = b), c !== "" && (C.angle = c), d !== "" && (C.controls = y.controls), e.push(C);
              }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, m] of _e(f, (d) => d.if))
              for (let [d, h] of _e(m, (y) => y.controls.toString())) {
                let y = h[0], w = y.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                b !== "" && (C.if = b), c !== "" && (C.angle = c), d !== "" && (C.controls = y.controls), e.push(C);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.angle))
            for (let [b, m] of _e(f, (d) => d.if))
              for (let [d, h] of _e(m, (y) => y.controls.toString())) {
                let y = h[0], w = y.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                b !== "" && (C.if = b), c !== "" && (C.angle = c), d !== "" && (C.controls = y.controls), e.push(C);
              }
          break;
        }
        case Ar: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.span)) {
            let m = f[0].operationType, d = f.map((y) => y.bit), h = { type: m, span: c, targets: d };
            e.push(h);
          }
          break;
        }
        case Pr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.span)) {
            let m = f[0].operationType, d = f.map((y) => y.bit), h = { type: m, span: c, targets: d };
            e.push(h);
          }
          break;
        }
        case sr: {
          let l = i.filter((m) => !m.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, b = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (b.controls = f), e.push(b);
          break;
        }
        case qt: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => $i(f) && f.controls.length > 0))
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
        case tr: {
          let l = i;
          for (let [c, f] of _e(l, (b) => b.flag)) {
            let b = f.map((h) => h.bit), d = { type: f[0].operationType, targets: b };
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
u(Gt, "CircuitStepElement"), A([D], Gt.prototype, "active", 2), A([D], Gt.prototype, "breakpoint", 2), A([D], Gt.prototype, "shadow", 2), A([D], Gt.prototype, "keep", 2), A([D], Gt.prototype, "debug", 2);
ee(Gt);
var Md = Tn(ao(), 1);
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
var Ao = u((r) => r != null && r instanceof Ct, "isCircuitDropzoneElement");
var Po;
var Ct = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    da(this, Po, null);
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
      H.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), ue("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.operationName = "", ue("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      ue("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(t.operation));
    }, resizeOperation: () => {
      ue("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      ue("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      ue("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = Ke(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = fa(this, Po, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = pa(this, Po)) == null || e.abort();
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
    return H.notNull(e), zr(e) ? e : null;
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
    if (!$e(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  resizeOperation(e) {
    let t = e.target;
    if (!Kt(t))
      throw new Error(`${t} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([Od]);
  }
}, "Ct");
u(Ct, "CircuitDropzoneElement"), Po = /* @__PURE__ */ new WeakMap(), A([D], Ct.prototype, "operationName", 2), A([D], Ct.prototype, "inputWireQuantum", 2), A([D], Ct.prototype, "outputWireQuantum", 2), A([D], Ct.prototype, "connectTop", 2), A([D], Ct.prototype, "connectBottom", 2), A([D], Ct.prototype, "shadow", 2), A([D], Ct.prototype, "debug", 2);
ee(Ct);
var xi = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = at({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["startCircuitEdit", "addDocumentCursorResizingStyle", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation;
      Jl(i) && i.menu && i.hideMenu();
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
      if (!Kt(i))
        throw new Error(`${i} is not resizeable`);
      let l = i.dropzone;
      if (!Ao(l))
        throw new Error(`${l} is not a circuit dropzone`);
      H.notNull(l.circuitStep);
      let c = l.circuitStep.dropzones.indexOf(l), b = this.circuit.resizeHandleSnapTargetAt(t.x, t.y).wireIndex - c + 1;
      i.span = b;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.numberOfWiresDisplayed < this.circuit.maxWireCount && this.circuit.appendWire();
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
      Jl(i) && i.initMenu();
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
    this.circuitEditorService = Ke(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Ye(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let t = e.target;
    if ($a(t))
      t.draggable = true;
    else
      throw new it("Not a draggable element.", { el: t });
  }
  enableResizing(e) {
    let t = e.target;
    if (Kt(t))
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
    !$e(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: t });
  }
  showOperationInspectorIf(e) {
    let t = e.target;
    if (!Fr(t))
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
    if (!kn(t))
      throw new Error(`${t} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: t });
  }
  setOperationIf(e) {
    let t = e.target, i = this.activeOperation;
    if (!Fr(i))
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
    if (!kn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  grabResizeHandle(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: t });
  }
  releaseResizeHandle(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  resizeEnd(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  resizeHandleInSnapRange(e) {
    let t = e.target;
    if (!$e(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "xi");
u(xi, "CircuitEditorElement"), A([D], xi.prototype, "debug", 2), A([xe], xi.prototype, "circuit", 2), A([xe], xi.prototype, "inspectorButton", 2);
ee(xi);
var zo;
var iu = /* @__PURE__ */ __name(class extends HTMLElement {
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
    $a(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), Kt(e) && (e.resizeable = true), Yl(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => $e(e));
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), Yl(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!$e(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "iu");
u(iu, "PaletteDropzoneElement"), zo = /* @__PURE__ */ new WeakMap();
ee(iu);
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
    this.quantumCircuitService = Ke(this.quantumCircuitMachine).onTransition((e) => {
      this.debug && console.log(`quantum-circuit: ${e.value}`);
    }).start();
    this.cx = this.cnot;
  }
  get numberOfWiresDisplayed() {
    return this.stepAt(0).numberOfWiresDisplayed;
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
      i.numberOfWiresDisplayed > 0 && i.numberOfWiresDisplayed > t && (e = i, t = i.numberOfWiresDisplayed);
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
    for (let i = 0; i < this.numberOfWiresDisplayed; i++)
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
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), ue("quantum-circuit:init", {}, this);
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
    ue("quantum-circuit:mouseleave", {}, this);
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
      let l = new er();
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
      let l = new ur();
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
      let l = new cr();
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
      let l = new pr();
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
      let f = new rr();
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
      let l = new lr();
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
      let l = new nr();
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
      let l = new ir();
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
      let l = new or();
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
      let l = new ar();
      return i && l.disable(), l;
    }, ...t), this;
  }
  qft(e, ...t) {
    let i;
    return typeof t[0] == "number" ? i = t : i = t[0].targets, this.applyOperationToTargets(() => {
      let l = new Ar();
      return l.span = e, l;
    }, ...i), this.resize(), this;
  }
  qftDagger(e, ...t) {
    let i;
    return typeof t[0] == "number" ? i = t : i = t[0].targets, this.applyOperationToTargets(() => {
      let l = new Pr();
      return l.span = e, l;
    }, ...i), this.resize(), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new sr(), ...e);
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
    return this.applyOperationToTargets(() => new tr(), ...e), this.resize(), this;
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
    return this.controlledU(er, e, t), this;
  }
  cnot(e, t) {
    return this.controlledU(ur, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(cr, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(pr, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(rr, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(lr, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(ir, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(or, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(sr, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new qt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), b = Math.max(...f) + 1, m = this.appendStepWithDropzones(b);
    for (let d of l)
      m.dropzoneAt(d).put(new qt());
    for (let d of c)
      m.dropzoneAt(d).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(m);
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
    for (; this.steps.every((e) => e.numberOfWiresDisplayed > e.numberOfQubitsInUse && e.numberOfWiresDisplayed > this.minWireCount && !e.lastDropzone.occupied); )
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
            let m = new $t();
            m.value = "0", f.appendOperation(m);
            break;
          }
          case /^\|1>$/.test(b): {
            let m = new $t();
            m.value = "1", f.appendOperation(m);
            break;
          }
          case /^H/.test(b): {
            let m = new er();
            m.if = this.ifVariable(b.slice(1)), f.appendOperation(m);
            break;
          }
          case (/^X$/.test(b) || /^X<(.+)$/.test(b)): {
            let m = new ur();
            m.if = b.slice(2).trim(), f.appendOperation(m);
            break;
          }
          case /^Y/.test(b): {
            let m = new cr();
            m.if = this.ifVariable(b.slice(1)), f.appendOperation(m);
            break;
          }
          case /^Z/.test(b): {
            let m = new pr();
            m.if = this.ifVariable(b.slice(1)), f.appendOperation(m);
            break;
          }
          case /^P/.test(b): {
            let m = new rr();
            m.angle = this.angleParameter(b.slice(1)), f.appendOperation(m);
            break;
          }
          case /^T/.test(b): {
            let m = new lr();
            m.if = this.ifVariable(b.slice(1)), f.appendOperation(m);
            break;
          }
          case /^X\^½/.test(b): {
            let m = new nr();
            m.if = this.ifVariable(b.slice(3)), f.appendOperation(m);
            break;
          }
          case /^Rx/.test(b): {
            let m = new ir();
            m.angle = this.angleParameter(b.slice(2)), f.appendOperation(m);
            break;
          }
          case /^Ry/.test(b): {
            let m = new or();
            m.angle = this.angleParameter(b.slice(2)), f.appendOperation(m);
            break;
          }
          case /^Rz/.test(b): {
            let m = new ar();
            m.angle = this.angleParameter(b.slice(2)), f.appendOperation(m);
            break;
          }
          case /^QFT\d/.test(b): {
            let m = new Ar(), d = parseInt(b.slice(3), 10);
            m.span = d, f.appendOperation(m);
            break;
          }
          case /^QFT†\d/.test(b): {
            let m = new Pr(), d = parseInt(b.slice(4), 10);
            m.span = d, f.appendOperation(m);
            break;
          }
          case /^Swap$/.test(b): {
            let m = new sr();
            f.appendOperation(m);
            break;
          }
          case /^•$/.test(b): {
            let m = new qt();
            f.appendOperation(m);
            break;
          }
          case /^Bloch$/.test(b): {
            let m = new ut();
            f.appendOperation(m);
            break;
          }
          case /^Measure/.test(b): {
            let m = new tr(), d = ((/^>(.+)$/.exec(b.slice(7)) || [])[1] || "").trim();
            m.flag = d, f.appendOperation(m);
            break;
          }
          case /^[[{](.+)$/.test(b): {
            let m = b.slice(1);
            f.remove(), t = new cn(), t.comment = m, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
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
    let e = this.largestStep, t = e && e.numberOfWiresDisplayed > this.minWireCount ? e.numberOfWiresDisplayed : this.minWireCount;
    for (let i of this.steps) {
      let l = t - i.numberOfWiresDisplayed;
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
          let f = c.map((h) => i.bit(h)), b = i.bit(l), m = f[0] === b ? f[1] : f[0], d = i.dropzoneAt(m);
          l.inputWireQuantum = t, l.outputWireQuantum = d.inputWireQuantum, t = d.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Ao(i))
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
    let t = [];
    this.snapTargets = {};
    let i = 1;
    Kt(e) && (i = e.span);
    let l = e.dropzone;
    for (let [c, f] of Object.entries(this.steps)) {
      let b = parseInt(c);
      for (let [m, d] of Object.entries(f.dropzones)) {
        let h = parseInt(m), y = d.snapTarget, w = this.isVertical ? y.y : y.x, S = this.isVertical ? y.x : y.y;
        if (b === 0 && f.dropzones[h + i - 1] !== void 0) {
          let M = w - e.snapRange * 0.75;
          this.isVertical ? t.push({ x: S, y: M }) : t.push({ x: M, y: S }), this.snapTargets[M] === void 0 && (this.snapTargets[M] = {}), this.snapTargets[M][S] === void 0 && (this.snapTargets[M][S] = { dropzone: null, stepIndex: -1, wireIndex: h });
        }
        if (i === 1)
          (d === l || !d.occupied) && t.push(y);
        else {
          let M = Array.from(Array(i).keys()).slice(1).map((_) => {
            let B = f.dropzones[h + _];
            return B !== void 0 && (B === l || !B.occupied);
          }).every((_) => _);
          (!d.occupied || d === l) && M && t.push(y);
        }
        let C = w + e.snapRange * 0.75;
        f.dropzones[h + i - 1] !== void 0 && (this.isVertical ? t.push({ x: S, y: C }) : t.push({ x: C, y: S })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][S] === void 0 && (this.snapTargets[C][S] = { dropzone: null, stepIndex: b, wireIndex: h }), this.snapTargets[w] === void 0 && (this.snapTargets[w] = {}), this.snapTargets[w][S] === void 0 && (this.snapTargets[w][S] = { dropzone: d, stepIndex: null, wireIndex: h });
      }
    }
    e.snapTargets = t;
  }
  setResizeHandleSnapTargets(e) {
    if (!Kt(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!Ao(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let t = e.dropzone.circuitStep;
    H.notNull(t);
    let i = t.dropzones.filter((f) => !f.occupied), l = e.dropzone;
    i.push(l);
    let c = [];
    this.resizeHandleSnapTargets = {};
    for (let [f, b] of Object.entries(t.dropzones)) {
      let m = b.resizeHandleSnapTarget, d = this.isVertical ? m.y : m.x, h = this.isVertical ? m.x : m.y, y = parseInt(f) % this.numberOfWiresDisplayed;
      (!b.occupied || b === l) && c.push(m), this.resizeHandleSnapTargets[d] === void 0 && (this.resizeHandleSnapTargets[d] = {}), this.resizeHandleSnapTargets[d][h] === void 0 && (this.resizeHandleSnapTargets[d][h] = { dropzone: b, stepIndex: null, wireIndex: y });
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
      let f = c.snapTarget, b = this.isVertical ? f.y : f.x, m = this.isVertical ? f.x : f.y;
      H.notNull(this.snapTargets[b]), this.snapTargets[b][m] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), A([D], se.prototype, "minStepCount", 2), A([D], se.prototype, "minWireCount", 2), A([D], se.prototype, "maxWireCount", 2), A([D], se.prototype, "editing", 2), A([D], se.prototype, "updateUrl", 2), A([D], se.prototype, "json", 2), A([D], se.prototype, "circuitTitle", 2), A([D], se.prototype, "debug", 2), A([D], se.prototype, "chDisabled", 2), A([D], se.prototype, "chMaxControlGates", 2), A([D], se.prototype, "chMaxTargetGates", 2), A([D], se.prototype, "cnotDisabled", 2), A([D], se.prototype, "cnotMaxControlGates", 2), A([D], se.prototype, "cnotMaxTargetGates", 2), A([D], se.prototype, "cyDisabled", 2), A([D], se.prototype, "cyMaxControlGates", 2), A([D], se.prototype, "cyMaxTargetGates", 2), A([D], se.prototype, "czDisabled", 2), A([D], se.prototype, "czMaxControlGates", 2), A([D], se.prototype, "czMaxTargetGates", 2), A([D], se.prototype, "cphaseDisabled", 2), A([D], se.prototype, "cphaseMaxControlGates", 2), A([D], se.prototype, "cphaseMaxTargetGates", 2), A([D], se.prototype, "ctDisabled", 2), A([D], se.prototype, "ctMaxControlGates", 2), A([D], se.prototype, "ctMaxTargetGates", 2), A([D], se.prototype, "crnotDisabled", 2), A([D], se.prototype, "crnotMaxControlGates", 2), A([D], se.prototype, "crnotMaxTargetGates", 2), A([D], se.prototype, "crxDisabled", 2), A([D], se.prototype, "crxMaxControlGates", 2), A([D], se.prototype, "crxMaxTargetGates", 2), A([D], se.prototype, "cryDisabled", 2), A([D], se.prototype, "cryMaxControlGates", 2), A([D], se.prototype, "cryMaxTargetGates", 2), A([D], se.prototype, "crzDisabled", 2), A([D], se.prototype, "crzMaxControlGates", 2), A([D], se.prototype, "crzMaxTargetGates", 2), A([D], se.prototype, "cswapDisabled", 2), A([D], se.prototype, "cswapMaxControlGates", 2), A([D], se.prototype, "swapDisabled", 2), A([D], se.prototype, "controlControlDisabled", 2), A([D], se.prototype, "controlControlMaxTargetGates", 2), A([D], se.prototype, "phasePhaseDisabled", 2), A([D], se.prototype, "phasePhaseMaxTargetGates", 2), A([At], se.prototype, "blocks", 2);
ee(se);
var Un = /* @__PURE__ */ __name(class extends HTMLElement {
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
    var l;
    let t = e.data, i = this.activeStepIndex;
    switch (t.type) {
      case "step": {
        let c = this.circuit.stepAt(t.step);
        for (let f in t.blochVectors) {
          let b = parseInt(f), m = c.dropzoneAt(b).operation;
          if (vd(m)) {
            let d = t.blochVectors[b];
            m.x = d[0], m.y = d[1], m.z = d[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let b in f) {
            let m = parseInt(b), d = c.dropzoneAt(m).operation;
            gd(d) && (d.value = f[m].toString());
          }
        }
        for (let f of c.dropzones) {
          let b = f.operation;
          !Fr(b) || b.if !== "" && (b.disabled = !t.flags[b.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let b in t.amplitudes) {
            let m = t.amplitudes[b];
            f[b] = new en(m[0], m[1]);
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
    let e = Math.max(...this.circuit.steps.map((t) => t.numberOfQubitsInUse));
    return e === 0 && (e = 1), this.circleNotation.qubitCount = e, e;
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
}, "Un");
u(Un, "QuantumSimulatorElement"), A([D], Un.prototype, "updateUrl", 2), A([xe], Un.prototype, "circuit", 2), A([xe], Un.prototype, "circleNotation", 2), A([At], Un.prototype, "runCircuitButtons", 2);
ee(Un);

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
