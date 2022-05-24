var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var qf = Object.create;
var Hi = Object.defineProperty;
var Hu = Object.getOwnPropertyDescriptor;
var Lf = Object.getOwnPropertyNames;
var jf = Object.getPrototypeOf;
var Bf = Object.prototype.hasOwnProperty;
var Hf = /* @__PURE__ */ __name((r) => Hi(r, "__esModule", { value: true }), "Hf");
var u = /* @__PURE__ */ __name((r, e) => Hi(r, "name", { value: e, configurable: true }), "u");
var na = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "na");
var $f = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of Lf(e))
      !Bf.call(r, l) && (t || l !== "default") && Hi(r, l, { get: () => e[l], enumerable: !(i = Hu(e, l)) || i.enumerable });
  return r;
}, "$f");
var ii = /* @__PURE__ */ __name((r, e) => $f(Hf(Hi(r != null ? qf(jf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "ii");
var z = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? Hu(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && Hi(e, t, l), l;
}, "z");
var $u = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "$u");
var ia = /* @__PURE__ */ __name((r, e, t) => ($u(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "ia");
var oa = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "oa");
var aa = /* @__PURE__ */ __name((r, e, t, i) => ($u(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "aa");
var Wu = na((Os, Fu) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(T) {
      function P() {
        var D = Error.apply(this, arguments);
        D.name = this.name = T, this.stack = D.stack, this.message = D.message;
      }
      u(P, "errorConstructor");
      function _() {
      }
      return u(_, "IntermediateInheritor"), _.prototype = Error.prototype, P.prototype = new _(), P;
    }
    u(i, "createError");
    var l = A.DivisionByZero = i("DivisionByZero"), c = A.InvalidParameter = i("InvalidParameter");
    function f(T, P) {
      return isNaN(T = parseInt(T, 10)) && g(), T * P;
    }
    u(f, "assign");
    function g() {
      throw new c();
    }
    u(g, "throwInvalidParam");
    function h(T) {
      for (var P = {}, _ = T, D = 2, L = 4; L <= _; ) {
        for (; _ % D === 0; )
          _ /= D, P[D] = (P[D] || 0) + 1;
        L += 1 + 2 * D++;
      }
      return _ !== T ? _ > 1 && (P[_] = (P[_] || 0) + 1) : P[T] = (P[T] || 0) + 1, P;
    }
    u(h, "factorize");
    var p = u(function(T, P) {
      var _ = 0, D = 1, L = 1, C = 0, B = 0, R = 0, Y = 1, V = 1, H = 0, W = 1, ie = 1, oe = 1, U = 1e7, ce;
      if (T != null)
        if (P !== void 0)
          _ = T, D = P, L = _ * D;
        else
          switch (typeof T) {
            case "object": {
              "d" in T && "n" in T ? (_ = T.n, D = T.d, "s" in T && (_ *= T.s)) : 0 in T ? (_ = T[0], 1 in T && (D = T[1])) : g(), L = _ * D;
              break;
            }
            case "number": {
              if (T < 0 && (L = T, T = -T), T % 1 === 0)
                _ = T;
              else if (T > 0) {
                for (T >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(T) / Math.LN10)), T /= V); W <= U && oe <= U; )
                  if (ce = (H + ie) / (W + oe), T === ce) {
                    W + oe <= U ? (_ = H + ie, D = W + oe) : oe > W ? (_ = ie, D = oe) : (_ = H, D = W);
                    break;
                  } else
                    T > ce ? (H += ie, W += oe) : (ie += H, oe += W), W > U ? (_ = ie, D = oe) : (_ = H, D = W);
                _ *= V;
              } else
                (isNaN(T) || isNaN(P)) && (D = _ = NaN);
              break;
            }
            case "string":
              if (W = T.match(/\d+|./g), W === null && g(), W[H] === "-" ? (L = -1, H++) : W[H] === "+" && H++, W.length === H + 1 ? B = f(W[H++], L) : W[H + 1] === "." || W[H] === "." ? (W[H] !== "." && (C = f(W[H++], L)), H++, (H + 1 === W.length || W[H + 1] === "(" && W[H + 3] === ")" || W[H + 1] === "'" && W[H + 3] === "'") && (B = f(W[H], L), Y = Math.pow(10, W[H].length), H++), (W[H] === "(" && W[H + 2] === ")" || W[H] === "'" && W[H + 2] === "'") && (R = f(W[H + 1], L), V = Math.pow(10, W[H + 1].length) - 1, H += 3)) : W[H + 1] === "/" || W[H + 1] === ":" ? (B = f(W[H], L), Y = f(W[H + 2], 1), H += 3) : W[H + 3] === "/" && W[H + 1] === " " && (C = f(W[H], L), B = f(W[H + 2], L), Y = f(W[H + 4], 1), H += 5), W.length <= H) {
                D = Y * V, L = _ = R + D * C + V * B;
                break;
              }
            default:
              g();
          }
      if (D === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(_), t.d = Math.abs(D);
    }, "parse");
    function m(T, P, _) {
      for (var D = 1; P > 0; T = T * T % _, P >>= 1)
        P & 1 && (D = D * T % _);
      return D;
    }
    u(m, "modpow");
    function x(T, P) {
      for (; P % 2 === 0; P /= 2)
        ;
      for (; P % 5 === 0; P /= 5)
        ;
      if (P === 1)
        return 0;
      for (var _ = 10 % P, D = 1; _ !== 1; D++)
        if (_ = _ * 10 % P, D > e)
          return 0;
      return D;
    }
    u(x, "cycleLen");
    function S(T, P, _) {
      for (var D = 1, L = m(10, _, P), C = 0; C < 300; C++) {
        if (D === L)
          return C;
        D = D * 10 % P, L = L * 10 % P;
      }
      return 0;
    }
    u(S, "cycleStart");
    function M(T, P) {
      if (!T)
        return P;
      if (!P)
        return T;
      for (; ; ) {
        if (T %= P, !T)
          return P;
        if (P %= T, !P)
          return T;
      }
    }
    u(M, "gcd");
    function A(T, P) {
      if (!(this instanceof A))
        return new A(T, P);
      p(T, P), T = M(t.d, t.n), this.s = t.s, this.n = t.n / T, this.d = t.d / T;
    }
    u(A, "Fraction"), A.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new A(this.n, this.d);
    }, neg: function() {
      return new A(-this.s * this.n, this.d);
    }, add: function(T, P) {
      return p(T, P), new A(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(T, P) {
      return p(T, P), new A(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(T, P) {
      return p(T, P), new A(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(T, P) {
      return p(T, P), new A(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new A(this);
    }, mod: function(T, P) {
      return isNaN(this.n) || isNaN(this.d) ? new A(NaN) : T === void 0 ? new A(this.s * this.n % this.d, 1) : (p(T, P), t.n === 0 && this.d === 0 && A(0, 0), new A(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(T, P) {
      return p(T, P), new A(M(t.n, this.n) * M(t.d, this.d), t.d * this.d);
    }, lcm: function(T, P) {
      return p(T, P), t.n === 0 && this.n === 0 ? new A() : new A(t.n * this.n, M(t.n, this.n) * M(t.d, this.d));
    }, ceil: function(T) {
      return T = Math.pow(10, T || 0), isNaN(this.n) || isNaN(this.d) ? new A(NaN) : new A(Math.ceil(T * this.s * this.n / this.d), T);
    }, floor: function(T) {
      return T = Math.pow(10, T || 0), isNaN(this.n) || isNaN(this.d) ? new A(NaN) : new A(Math.floor(T * this.s * this.n / this.d), T);
    }, round: function(T) {
      return T = Math.pow(10, T || 0), isNaN(this.n) || isNaN(this.d) ? new A(NaN) : new A(Math.round(T * this.s * this.n / this.d), T);
    }, inverse: function() {
      return new A(this.s * this.d, this.n);
    }, pow: function(T, P) {
      if (p(T, P), t.d === 1)
        return t.s < 0 ? new A(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new A(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var _ = h(this.n), D = h(this.d), L = 1, C = 1;
      for (var B in _)
        if (B !== "1") {
          if (B === "0") {
            L = 0;
            break;
          }
          if (_[B] *= t.n, _[B] % t.d === 0)
            _[B] /= t.d;
          else
            return null;
          L *= Math.pow(B, _[B]);
        }
      for (var B in D)
        if (B !== "1") {
          if (D[B] *= t.n, D[B] % t.d === 0)
            D[B] /= t.d;
          else
            return null;
          C *= Math.pow(B, D[B]);
        }
      return t.s < 0 ? new A(C, L) : new A(L, C);
    }, equals: function(T, P) {
      return p(T, P), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(T, P) {
      p(T, P);
      var _ = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < _) - (_ < 0);
    }, simplify: function(T) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var P = this.abs().toContinued();
      T = T || 1e-3;
      function _(C) {
        return C.length === 1 ? new A(C[0]) : _(C.slice(1)).inverse().add(C[0]);
      }
      u(_, "rec");
      for (var D = 0; D < P.length; D++) {
        var L = _(P.slice(0, D + 1));
        if (L.sub(this.abs()).abs().valueOf() < T)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(T, P) {
      return p(T, P), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(T) {
      var P, _ = "", D = this.n, L = this.d;
      return this.s < 0 && (_ += "-"), L === 1 ? _ += D : (T && (P = Math.floor(D / L)) > 0 && (_ += P, _ += " ", D %= L), _ += D, _ += "/", _ += L), _;
    }, toLatex: function(T) {
      var P, _ = "", D = this.n, L = this.d;
      return this.s < 0 && (_ += "-"), L === 1 ? _ += D : (T && (P = Math.floor(D / L)) > 0 && (_ += P, D %= L), _ += "\\frac{", _ += D, _ += "}{", _ += L, _ += "}"), _;
    }, toContinued: function() {
      var T, P = this.n, _ = this.d, D = [];
      if (isNaN(P) || isNaN(_))
        return D;
      do
        D.push(Math.floor(P / _)), T = P % _, P = _, _ = T;
      while (P !== 1);
      return D;
    }, toString: function(T) {
      var P, _ = this.n, D = this.d;
      if (isNaN(_) || isNaN(D))
        return "NaN";
      T = T || 15;
      var L = x(_, D), C = S(_, D, L), B = this.s === -1 ? "-" : "";
      if (B += _ / D | 0, _ %= D, _ *= 10, _ && (B += "."), L) {
        for (var R = C; R--; )
          B += _ / D | 0, _ %= D, _ *= 10;
        B += "(";
        for (var R = L; R--; )
          B += _ / D | 0, _ %= D, _ *= 10;
        B += ")";
      } else
        for (var R = T; _ && R--; )
          B += _ / D | 0, _ %= D, _ *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return A;
    }) : typeof Os == "object" ? (Object.defineProperty(A, "__esModule", { value: true }), A.default = A, A.Fraction = A, Fu.exports = A) : r.Fraction = A;
  })(Os);
});
var Ra = na((Bc, il) => {
  (function(r) {
    typeof Bc == "object" && typeof il != "undefined" ? il.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
  })(function() {
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0, r.default = function(n) {
      return !(!n || !n.Window) && n instanceof n.Window;
    };
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.init = l, e.getWindow = function(n) {
      return (0, r.default)(n) ? n : (n.ownerDocument || n).defaultView || i.window;
    }, e.window = e.realWindow = void 0;
    var t = void 0;
    e.realWindow = t;
    var i = void 0;
    function l(n) {
      e.realWindow = t = n;
      var o = n.document.createTextNode("");
      o.ownerDocument !== n.document && typeof n.wrap == "function" && n.wrap(o) === o && (n = n.wrap(n)), e.window = i = n;
    }
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c = {};
    function f(n) {
      return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(f, "a"), Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
    var g = u(function(n) {
      return !!n && f(n) === "object";
    }, "s"), h = u(function(n) {
      return typeof n == "function";
    }, "l"), p = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return g(n) && n.nodeType === 11;
    }, object: g, func: h, number: function(n) {
      return typeof n == "number";
    }, bool: function(n) {
      return typeof n == "boolean";
    }, string: function(n) {
      return typeof n == "string";
    }, element: function(n) {
      if (!n || f(n) !== "object")
        return false;
      var o = e.getWindow(n) || e.window;
      return /object|function/.test(f(o.Element)) ? n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return g(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return g(n) && n.length !== void 0 && h(n.splice);
    } };
    c.default = p;
    var m = {};
    function x(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    u(x, "f");
    function S(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var d = s === "x" ? "y" : "x";
          o.page[d] = a.coords.start.page[d], o.client[d] = a.coords.start.client[d], o.delta[d] = 0;
        }
      }
    }
    u(S, "d"), Object.defineProperty(m, "__esModule", { value: true }), m.default = void 0;
    var M = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = M.draggable, o.map.drag = M, o.methodDict.drag = "draggable", s.actions.drag = M.defaults;
    }, listeners: { "interactions:before-action-move": x, "interactions:action-resume": x, "interactions:action-move": S, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, d = a.options.drag;
      if (d && d.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: d.lockAxis === "start" ? d.startAxis : d.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: x, move: S, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, A = M;
    m.default = A;
    var T = {};
    Object.defineProperty(T, "__esModule", { value: true }), T.default = void 0;
    var P = { init: function(n) {
      var o = n;
      P.document = o.document, P.DocumentFragment = o.DocumentFragment || _, P.SVGElement = o.SVGElement || _, P.SVGSVGElement = o.SVGSVGElement || _, P.SVGElementInstance = o.SVGElementInstance || _, P.Element = o.Element || _, P.HTMLElement = o.HTMLElement || P.Element, P.Event = o.Event, P.Touch = o.Touch || _, P.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function _() {
    }
    u(_, "y");
    var D = P;
    T.default = D;
    var L = {};
    Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var C = { init: function(n) {
      var o = T.default.Element, a = n.navigator || {};
      C.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && T.default.document instanceof n.DocumentTouch, C.supportsPointerEvent = a.pointerEnabled !== false && !!T.default.PointerEvent, C.isIOS = /iP(hone|od|ad)/.test(a.platform), C.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), C.isIe9 = /MSIE 9/.test(a.userAgent), C.isOperaMobile = a.appName === "Opera" && C.supportsTouch && /Presto/.test(a.userAgent), C.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", C.pEventTypes = C.supportsPointerEvent ? T.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, C.wheelEvent = T.default.document && "onmousewheel" in T.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = C;
    L.default = B;
    var R = {};
    function Y(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    u(Y, "P");
    function V(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[L.default.prefixedMatchesSelector](o);
    }
    u(V, "O"), Object.defineProperty(R, "__esModule", { value: true }), R.nodeContains = function(n, o) {
      if (n.contains)
        return n.contains(o);
      for (; o; ) {
        if (o === n)
          return true;
        o = o.parentNode;
      }
      return false;
    }, R.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return n;
        n = Y(n);
      }
      return null;
    }, R.parentNode = Y, R.matchesSelector = V, R.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var d = n[s], v = n[o];
        if (d && s !== o)
          if (v) {
            var y = H(d), b = H(v);
            if (y !== d.ownerDocument)
              if (b !== d.ownerDocument)
                if (y !== b) {
                  a = a.length ? a : W(v);
                  var w = void 0;
                  if (v instanceof T.default.HTMLElement && d instanceof T.default.SVGElement && !(d instanceof T.default.SVGSVGElement)) {
                    if (d === b)
                      continue;
                    w = d.ownerSVGElement;
                  } else
                    w = d;
                  for (var E = W(w, v.ownerDocument), O = 0; E[O] && E[O] === a[O]; )
                    O++;
                  var I = [E[O - 1], E[O], a[O]];
                  if (I[0])
                    for (var N = I[0].lastChild; N; ) {
                      if (N === I[1]) {
                        o = s, a = E;
                        break;
                      }
                      if (N === I[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  q = d, k = v, (parseInt(e.getWindow(q).getComputedStyle(q).zIndex, 10) || 0) >= (parseInt(e.getWindow(k).getComputedStyle(k).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var q, k;
      return o;
    }, R.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return true;
        if ((n = Y(n)) === a)
          return V(n, o);
      }
      return false;
    }, R.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, R.getScrollXY = ie, R.getElementClientRect = oe, R.getElementRect = function(n) {
      var o = oe(n);
      if (!L.default.isIOS7 && o) {
        var a = ie(e.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, R.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = Y(n);
      return o;
    }, R.trySelector = function(n) {
      return !!c.default.string(n) && (T.default.document.querySelector(n), true);
    };
    var H = u(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function W(n, o) {
      for (var a, s = [], d = n; (a = H(d)) && d !== o && a !== d.ownerDocument; )
        s.unshift(d), d = a;
      return s;
    }
    u(W, "E");
    function ie(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    u(ie, "T");
    function oe(n) {
      var o = n instanceof T.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    u(oe, "M");
    var U = {};
    Object.defineProperty(U, "__esModule", { value: true }), U.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ce = {};
    function Re(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Re, "I");
    function We(n, o, a) {
      return n === "parent" ? (0, R.parentNode)(a) : n === "self" ? o.getRect(a) : (0, R.closest)(a, n);
    }
    u(We, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.getStringOptionResult = We, ce.resolveRectLike = function(n, o, a, s) {
      var d, v = n;
      return c.default.string(v) ? v = We(v, o, a) : c.default.func(v) && (v = v.apply(void 0, function(y) {
        if (Array.isArray(y))
          return Re(y);
      }(d = s) || function(y) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(y))
          return Array.from(y);
      }(d) || function(y, b) {
        if (y) {
          if (typeof y == "string")
            return Re(y, b);
          var w = Object.prototype.toString.call(y).slice(8, -1);
          return w === "Object" && y.constructor && (w = y.constructor.name), w === "Map" || w === "Set" ? Array.from(y) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? Re(y, b) : void 0;
        }
      }(d) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(v) && (v = (0, R.getElementRect)(v)), v;
    }, ce.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, U.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    }, ce.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, U.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    };
    var qe = {};
    Object.defineProperty(qe, "__esModule", { value: true }), qe.default = function(n, o, a) {
      var s = n.options[a], d = s && s.origin || n.options.origin, v = (0, ce.resolveRectLike)(d, n, o, [n && o]);
      return (0, ce.rectToXY)(v) || { x: 0, y: 0 };
    };
    var fe = {};
    function Xe(n) {
      return n.trim().split(/ +/);
    }
    u(Xe, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Xe(o)), c.default.array(o))
        return o.reduce(function(w, E) {
          return (0, U.default)(w, n(E, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var d = 0; d < a.length; d++) {
          var v;
          v = a[d], n(o, v, s);
        }
      else if (c.default.object(a))
        for (var y in a) {
          var b = Xe(y).map(function(w) {
            return "".concat(o).concat(w);
          });
          n(b, a[y], s);
        }
      return s;
    }, "t");
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: true }), Ke.default = void 0, Ke.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var Gt = {};
    function _t(n, o) {
      for (var a in o) {
        var s = _t.prefixedPropREs, d = false;
        for (var v in s)
          if (a.indexOf(v) === 0 && s[v].test(a)) {
            d = true;
            break;
          }
        d || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    u(_t, "X"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0, _t.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var _r = _t;
    Gt.default = _r;
    var K = {};
    function Tt(n) {
      return n instanceof T.default.Event || n instanceof T.default.Touch;
    }
    u(Tt, "W");
    function Ct(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    u(Ct, "L");
    function zr(n, o) {
      return o = o || { x: 0, y: 0 }, L.default.isOperaMobile && Tt(n) ? (Ct("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Ct("page", n, o), o;
    }
    u(zr, "U");
    function Vt(n, o) {
      return o = o || {}, L.default.isOperaMobile && Tt(n) ? Ct("screen", n, o) : Ct("client", n, o), o;
    }
    u(Vt, "V");
    function hr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    u(hr, "N");
    function mr(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var d in o)
          o[d] += s[d];
      }
      for (var v in o)
        o[v] /= n.length;
      return o;
    }
    u(mr, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, K.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.isNativePointer = Tt, K.getXY = Ct, K.getPageXY = zr, K.getClientXY = Vt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? mr(o) : o[0];
      zr(s, n.page), Vt(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = hr, K.pointerAverage = mr, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = hr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), d = Math.max(o[0].pageX, o[1].pageX), v = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: d, bottom: v, width: d - a, height: v - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", d = hr(n), v = d[0][a] - d[1][a], y = d[0][s] - d[1][s];
      return (0, Ke.default)(v, y);
    }, K.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", d = hr(n), v = d[1][a] - d[0][a], y = d[1][s] - d[0][s];
      return 180 * Math.atan2(y, v) / Math.PI;
    }, K.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof T.default.Touch ? "touch" : "mouse";
    }, K.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [R.getActualElement(o ? o[0] : n.target), R.getActualElement(n.currentTarget)];
    }, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.coordsToEvent = function(n) {
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
    }, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return Gt.default;
    } });
    var qt = {};
    function Vn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Vn, "G");
    function zt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(zt, "H"), Object.defineProperty(qt, "__esModule", { value: true }), qt.BaseEvent = void 0;
    var fn = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), zt(this, "type", void 0), zt(this, "target", void 0), zt(this, "currentTarget", void 0), zt(this, "interactable", void 0), zt(this, "_interaction", void 0), zt(this, "timeStamp", void 0), zt(this, "immediatePropagationStopped", false), zt(this, "propagationStopped", false), this._interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Vn(o.prototype, a), n;
    }();
    qt.BaseEvent = fn, Object.defineProperty(fn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var we = {};
    Object.defineProperty(we, "__esModule", { value: true }), we.find = we.findIndex = we.from = we.merge = we.remove = we.contains = void 0, we.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, we.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Vr = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    we.merge = Vr, we.from = function(n) {
      return Vr([], n);
    };
    var Yr = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    we.findIndex = Yr, we.find = function(n, o) {
      return n[Yr(n, o)];
    };
    var Dt = {};
    function hn(n) {
      return (hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(hn, "et");
    function vr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(vr, "nt");
    function gr(n, o) {
      return (gr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(gr, "rt");
    function mn(n, o) {
      return !o || hn(o) !== "object" && typeof o != "function" ? pt(n) : o;
    }
    u(mn, "ot");
    function pt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(pt, "it");
    function Dr(n) {
      return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Dr, "at");
    function Lt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Lt, "st"), Object.defineProperty(Dt, "__esModule", { value: true }), Dt.DropEvent = void 0;
    var Yn = function(n) {
      (function(b, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), w && gr(b, w);
      })(y, n);
      var o, a, s, d, v = (s = y, d = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (b) {
          return false;
        }
      }(), function() {
        var b, w = Dr(s);
        if (d) {
          var E = Dr(this).constructor;
          b = Reflect.construct(w, arguments, E);
        } else
          b = w.apply(this, arguments);
        return mn(this, b);
      });
      function y(b, w, E) {
        var O;
        (function(k, $) {
          if (!(k instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, y), Lt(pt(O = v.call(this, w._interaction)), "target", void 0), Lt(pt(O), "dropzone", void 0), Lt(pt(O), "dragEvent", void 0), Lt(pt(O), "relatedTarget", void 0), Lt(pt(O), "draggable", void 0), Lt(pt(O), "timeStamp", void 0), Lt(pt(O), "propagationStopped", false), Lt(pt(O), "immediatePropagationStopped", false);
        var I = E === "dragleave" ? b.prev : b.cur, N = I.element, q = I.dropzone;
        return O.type = E, O.target = N, O.currentTarget = N, O.dropzone = q, O.dragEvent = w, O.relatedTarget = w.target, O.draggable = w.interactable, O.timeStamp = w.timeStamp, O;
      }
      return u(y, "a"), o = y, (a = [{ key: "reject", value: function() {
        var b = this, w = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && w.cur.dropzone === this.dropzone && w.cur.element === this.target)
          if (w.prev.dropzone = this.dropzone, w.prev.element = this.target, w.rejected = true, w.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var E = w.activeDrops, O = we.findIndex(E, function(N) {
              var q = N.dropzone, k = N.element;
              return q === b.dropzone && k === b.target;
            });
            w.activeDrops.splice(O, 1);
            var I = new y(w, this.dragEvent, "dropdeactivate");
            I.dropzone = this.dropzone, I.target = this.target, this.dropzone.fire(I);
          } else
            this.dropzone.fire(new y(w, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && vr(o.prototype, a), y;
    }(qt.BaseEvent);
    Dt.DropEvent = Yn;
    var kr = {};
    function vn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], d = s.dropzone, v = s.element;
        o.dropzone = d, o.target = v, d.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    u(vn, "ct");
    function Si(n, o) {
      for (var a = function(v, y) {
        for (var b = v.interactables, w = [], E = 0; E < b.list.length; E++) {
          var O = b.list[E];
          if (O.options.drop.enabled) {
            var I = O.options.drop.accept;
            if (!(c.default.element(I) && I !== y || c.default.string(I) && !R.matchesSelector(y, I) || c.default.func(I) && !I({ dropzone: O, draggableElement: y })))
              for (var N = c.default.string(O.target) ? O._context.querySelectorAll(O.target) : c.default.array(O.target) ? O.target : [O.target], q = 0; q < N.length; q++) {
                var k = N[q];
                k !== y && w.push({ dropzone: O, element: k, rect: O.getRect(k) });
              }
          }
        }
        return w;
      }(n, o), s = 0; s < a.length; s++) {
        var d = a[s];
        d.rect = d.dropzone.getRect(d.element);
      }
      return a;
    }
    u(Si, "ft");
    function Io(n, o, a) {
      for (var s = n.dropState, d = n.interactable, v = n.element, y = [], b = 0; b < s.activeDrops.length; b++) {
        var w = s.activeDrops[b], E = w.dropzone, O = w.element, I = w.rect;
        y.push(E.dropCheck(o, a, d, v, O, I) ? O : null);
      }
      var N = R.indexOfDeepestElement(y);
      return s.activeDrops[N] || null;
    }
    u(Io, "dt");
    function Ti(n, o, a) {
      var s = n.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (d.activate = new Dt.DropEvent(s, a, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), a.type === "dragend" && (d.deactivate = new Dt.DropEvent(s, a, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (d.leave = new Dt.DropEvent(s, a, "dragleave"), a.dragLeave = d.leave.target = s.prev.element, a.prevDropzone = d.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (d.enter = new Dt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (d.drop = new Dt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (d.move = new Dt.DropEvent(s, a, "dropmove"), d.move.dragmove = a, a.dropzone = s.cur.dropzone)), d;
    }
    u(Ti, "pt");
    function Ci(n, o) {
      var a = n.dropState, s = a.activeDrops, d = a.cur, v = a.prev;
      o.leave && v.dropzone.fire(o.leave), o.enter && d.dropzone.fire(o.enter), o.move && d.dropzone.fire(o.move), o.drop && d.dropzone.fire(o.drop), o.deactivate && vn(s, o.deactivate), a.prev.dropzone = d.dropzone, a.prev.element = d.element;
    }
    u(Ci, "vt");
    function Ao(n, o) {
      var a = n.interaction, s = n.iEvent, d = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var v = a.dropState;
        o.dynamicDrop && (v.activeDrops = Si(o, a.element));
        var y = s, b = Io(a, y, d);
        v.rejected = v.rejected && !!b && b.dropzone === v.cur.dropzone && b.element === v.cur.element, v.cur.dropzone = b && b.dropzone, v.cur.element = b && b.element, v.events = Ti(a, 0, y);
      }
    }
    u(Ao, "ht"), Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, d = n.defaults;
      n.usePlugin(m.default), s.prototype.dropzone = function(v) {
        return function(y, b) {
          if (c.default.object(b)) {
            if (y.options.drop.enabled = b.enabled !== false, b.listeners) {
              var w = (0, fe.default)(b.listeners), E = Object.keys(w).reduce(function(O, I) {
                return O[/^(enter|leave)/.test(I) ? "drag".concat(I) : /^(activate|deactivate|move)/.test(I) ? "drop".concat(I) : I] = w[I], O;
              }, {});
              y.off(y.options.drop.listeners), y.on(E), y.options.drop.listeners = E;
            }
            return c.default.func(b.ondrop) && y.on("drop", b.ondrop), c.default.func(b.ondropactivate) && y.on("dropactivate", b.ondropactivate), c.default.func(b.ondropdeactivate) && y.on("dropdeactivate", b.ondropdeactivate), c.default.func(b.ondragenter) && y.on("dragenter", b.ondragenter), c.default.func(b.ondragleave) && y.on("dragleave", b.ondragleave), c.default.func(b.ondropmove) && y.on("dropmove", b.ondropmove), /^(pointer|center)$/.test(b.overlap) ? y.options.drop.overlap = b.overlap : c.default.number(b.overlap) && (y.options.drop.overlap = Math.max(Math.min(1, b.overlap), 0)), "accept" in b && (y.options.drop.accept = b.accept), "checker" in b && (y.options.drop.checker = b.checker), y;
          }
          return c.default.bool(b) ? (y.options.drop.enabled = b, y) : y.options.drop;
        }(this, v);
      }, s.prototype.dropCheck = function(v, y, b, w, E, O) {
        return function(I, N, q, k, $, J, F) {
          var ne = false;
          if (!(F = F || I.getRect(J)))
            return !!I.options.drop.checker && I.options.drop.checker(N, q, ne, I, J, k, $);
          var le = I.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, qe.default)(k, $, "drag"), Ee = K.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            ne = je && be;
          }
          var _e = k.getRect($);
          if (_e && le === "center") {
            var Zt = _e.left + _e.width / 2, qr = _e.top + _e.height / 2;
            ne = Zt >= F.left && Zt <= F.right && qr >= F.top && qr <= F.bottom;
          }
          return _e && c.default.number(le) && (ne = Math.max(0, Math.min(F.right, _e.right) - Math.max(F.left, _e.left)) * Math.max(0, Math.min(F.bottom, _e.bottom) - Math.max(F.top, _e.top)) / (_e.width * _e.height) >= le), I.options.drop.checker && (ne = I.options.drop.checker(N, q, ne, I, J, k, $)), ne;
        }(this, v, y, b, w, E, O);
      }, a.dynamicDrop = function(v) {
        return c.default.bool(v) ? (n.dynamicDrop = v, a) : n.dynamicDrop;
      }, (0, U.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, d.actions.drop = j.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var d = a.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = Si(o, a.element), d.events = Ti(a, 0, s), d.events.activate && (vn(d.activeDrops, d.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Ao, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Ci(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Ao(n, o), Ci(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Si, getDrop: Io, getDropEvents: Ti, fireDropEvents: Ci, defaults: { enabled: false, accept: null, overlap: "pointer" } }, te = j;
    kr.default = te;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var d = o.pointers.map(function(E) {
          return E.pointer;
        }), v = s === "start", y = s === "end", b = o.interactable.options.deltaSource;
        if (a.touches = [d[0], d[1]], v)
          a.distance = K.touchDistance(d, b), a.box = K.touchBBox(d), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(d, b), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (y) {
          var w = o.prevEvent;
          a.distance = w.distance, a.box = w.box, a.scale = w.scale, a.ds = 0, a.angle = w.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(d, b), a.box = K.touchBBox(d), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(d, b), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    u(ye, "bt"), Object.defineProperty(ae, "__esModule", { value: true }), ae.default = void 0;
    var he = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(d) {
        return c.default.object(d) ? (this.options.gesture.enabled = d.enabled !== false, this.setPerAction("gesture", d), this.setOnEvents("gesture", d), this) : c.default.bool(d) ? (this.options.gesture.enabled = d, this) : this.options.gesture;
      }, o.map.gesture = he, o.methodDict.gesture = "gesturable", s.actions.gesture = he.defaults;
    }, listeners: { "interactions:action-start": ye, "interactions:action-move": ye, "interactions:action-end": ye, "interactions:new": function(n) {
      n.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(n) {
      if (!(n.interaction.pointers.length < 2)) {
        var o = n.interactable.options.gesture;
        if (o && o.enabled)
          return n.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, dt = he;
    ae.default = dt;
    var ft = {};
    function Xr(n, o, a, s, d, v, y) {
      if (!o)
        return false;
      if (o === true) {
        var b = c.default.number(v.width) ? v.width : v.right - v.left, w = c.default.number(v.height) ? v.height : v.bottom - v.top;
        if (y = Math.min(y, Math.abs((n === "left" || n === "right" ? b : w) / 2)), b < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), w < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (b >= 0 ? v.left : v.right) + y;
        if (n === "top")
          return a.y < (w >= 0 ? v.top : v.bottom) + y;
        if (n === "right")
          return a.x > (b >= 0 ? v.right : v.left) - y;
        if (n === "bottom")
          return a.y > (w >= 0 ? v.bottom : v.top) - y;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : R.matchesUpTo(s, o, d));
    }
    u(Xr, "Pt");
    function Oi(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    u(Oi, "Ot"), Object.defineProperty(ft, "__esModule", { value: true }), ft.default = void 0;
    var ht = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, d = n.defaults;
      ht.cursors = function(v) {
        return v.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ht.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(v) {
        return function(y, b, w) {
          return c.default.object(b) ? (y.options.resize.enabled = b.enabled !== false, y.setPerAction("resize", b), y.setOnEvents("resize", b), c.default.string(b.axis) && /^x$|^y$|^xy$/.test(b.axis) ? y.options.resize.axis = b.axis : b.axis === null && (y.options.resize.axis = w.defaults.actions.resize.axis), c.default.bool(b.preserveAspectRatio) ? y.options.resize.preserveAspectRatio = b.preserveAspectRatio : c.default.bool(b.square) && (y.options.resize.square = b.square), y) : c.default.bool(b) ? (y.options.resize.enabled = b, y) : y.options.resize;
        }(this, v, n);
      }, o.map.resize = ht, o.methodDict.resize = "resizable", d.actions.resize = ht.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, v = s.rect;
          s._rects = { start: (0, U.default)({}, v), corrected: (0, U.default)({}, v), previous: (0, U.default)({}, v), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = s.prepared.edges, d.rect = s._rects.corrected, d.deltaRect = s._rects.delta;
        }
      })(n), Oi(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, v = s.interactable.options.resize.invert, y = v === "reposition" || v === "negate", b = s.rect, w = s._rects, E = w.start, O = w.corrected, I = w.delta, N = w.previous;
          if ((0, U.default)(N, O), y) {
            if ((0, U.default)(O, b), v === "reposition") {
              if (O.top > O.bottom) {
                var q = O.top;
                O.top = O.bottom, O.bottom = q;
              }
              if (O.left > O.right) {
                var k = O.left;
                O.left = O.right, O.right = k;
              }
            }
          } else
            O.top = Math.min(b.top, E.bottom), O.bottom = Math.max(b.bottom, E.top), O.left = Math.min(b.left, E.right), O.right = Math.max(b.right, E.left);
          for (var $ in O.width = O.right - O.left, O.height = O.bottom - O.top, O)
            I[$] = O[$] - N[$];
          d.edges = s.prepared.edges, d.rect = O, d.deltaRect = I;
        }
      })(n), Oi(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, d = n.rect, v = n.buttons;
      if (d) {
        var y = (0, U.default)({}, o.coords.cur.page), b = a.options.resize;
        if (b && b.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (v & b.mouseButtons) != 0)) {
          if (c.default.object(b.edges)) {
            var w = { left: false, right: false, top: false, bottom: false };
            for (var E in w)
              w[E] = Xr(E, b.edges[E], y, o._latestPointer.eventTarget, s, d, b.margin || ht.defaultMargin);
            w.left = w.left && !w.right, w.top = w.top && !w.bottom, (w.left || w.right || w.top || w.bottom) && (n.action = { name: "resize", edges: w });
          } else {
            var O = b.axis !== "y" && y.x > d.right - ht.defaultMargin, I = b.axis !== "x" && y.y > d.bottom - ht.defaultMargin;
            (O || I) && (n.action = { name: "resize", axes: (O ? "x" : "") + (I ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, d = ht.cursors, v = null;
      if (a)
        v = d[s + a];
      else if (o) {
        for (var y = "", b = ["top", "bottom", "left", "right"], w = 0; w < b.length; w++) {
          var E = b[w];
          o[E] && (y += E);
        }
        v = d[y];
      }
      return v;
    }, defaultMargin: null }, Mi = ht;
    ft.default = Mi;
    var Rr = {};
    Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var Zr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(ft.default), n.usePlugin(m.default), n.usePlugin(kr.default);
    } };
    Rr.default = Zr;
    var jt = {};
    Object.defineProperty(jt, "__esModule", { value: true }), jt.default = void 0;
    var Bt, Yt, ql = 0, gd = { request: function(n) {
      return Bt(n);
    }, cancel: function(n) {
      return Yt(n);
    }, init: function(n) {
      if (Bt = n.requestAnimationFrame, Yt = n.cancelAnimationFrame, !Bt)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Bt = n["".concat(s, "RequestAnimationFrame")], Yt = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Bt = Bt && Bt.bind(n), Yt = Yt && Yt.bind(n), Bt || (Bt = u(function(d) {
        var v = Date.now(), y = Math.max(0, 16 - (v - ql)), b = n.setTimeout(function() {
          d(v + y);
        }, y);
        return ql = v + y, b;
      }, "kt"), Yt = u(function(d) {
        return clearTimeout(d);
      }, "It"));
    } };
    jt.default = gd;
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.getContainer = _o, Jr.getScroll = Pi, Jr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Jr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, d = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return o(), { x: 0, y: 0 };
      var v = _o(d.container, a.interactable, s), y = Pi(v);
      o();
      var b = Pi(v);
      return { x: b.x - y.x, y: b.y - y.y };
    }, Jr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, jt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = jt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), jt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, d = o.options[s].autoScroll, v = _o(d.container, o, a), y = ue.now(), b = (y - ue.prevTime) / 1e3, w = d.speed * b;
      if (w >= 1) {
        var E = { x: ue.x * w, y: ue.y * w };
        if (E.x || E.y) {
          var O = Pi(v);
          c.default.window(v) ? v.scrollBy(E.x, E.y) : v && (v.scrollLeft += E.x, v.scrollTop += E.y);
          var I = Pi(v), N = { x: I.x - O.x, y: I.y - O.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: v });
        }
        ue.prevTime = y;
      }
      ue.isScrolling && (jt.default.cancel(ue.i), ue.i = jt.default.request(ue.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && ue.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ue.x = ue.y = 0;
        else {
          var s, d, v, y, b = o.interactable, w = o.element, E = o.prepared.name, O = b.options[E].autoScroll, I = _o(O.container, b, w);
          if (c.default.window(I))
            y = a.clientX < ue.margin, s = a.clientY < ue.margin, d = a.clientX > I.innerWidth - ue.margin, v = a.clientY > I.innerHeight - ue.margin;
          else {
            var N = R.getElementClientRect(I);
            y = a.clientX < N.left + ue.margin, s = a.clientY < N.top + ue.margin, d = a.clientX > N.right - ue.margin, v = a.clientY > N.bottom - ue.margin;
          }
          ue.x = d ? 1 : y ? -1 : 0, ue.y = v ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = O.margin, ue.speed = O.speed, ue.start(o));
        }
    } };
    function _o(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    u(_o, "Ct");
    function Pi(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    u(Pi, "Ft");
    var bd = { id: "auto-scroll", install: function(n) {
      var o = n.defaults, a = n.actions;
      n.autoScroll = ue, ue.now = function() {
        return n.now();
      }, a.phaselessTypes.autoscroll = true, o.perAction.autoScroll = ue.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoScroll = null;
    }, "interactions:destroy": function(n) {
      n.interaction.autoScroll = null, ue.stop(), ue.interaction && (ue.interaction = null);
    }, "interactions:stop": ue.stop, "interactions:action-move": function(n) {
      return ue.onInteractionMove(n);
    } } };
    Jr.default = bd;
    var Ht = {};
    Object.defineProperty(Ht, "__esModule", { value: true }), Ht.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Ht.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Ht.sign = void 0, Ht.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var zo = {};
    function yd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    u(yd, "Wt");
    function wd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    u(wd, "Lt"), Object.defineProperty(zo, "__esModule", { value: true }), zo.default = void 0;
    var xd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, d, v) {
        var y = function(b, w, E, O, I) {
          var N = b.getRect(O), q = { action: null, interactable: b, interaction: E, element: O, rect: N, buttons: w.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[w.button] };
          return I.fire("auto-start:check", q), q.action;
        }(this, s, d, v, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, y, this, v, d) : y;
      }, o.prototype.ignoreFrom = (0, Ht.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Ht.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = wd, o.prototype.styleCursor = yd;
    } };
    zo.default = xd;
    var Xn = {};
    function Ll(n, o, a, s, d) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Do(o, a, n, d) ? n : null;
    }
    u(Ll, "Nt");
    function Ed(n, o, a, s, d, v, y) {
      for (var b = 0, w = s.length; b < w; b++) {
        var E = s[b], O = d[b], I = E.getAction(o, a, n, O);
        if (I) {
          var N = Ll(I, E, O, v, y);
          if (N)
            return { action: N, interactable: E, element: O };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    u(Ed, "qt");
    function jl(n, o, a, s, d) {
      var v = [], y = [], b = s;
      function w(O) {
        v.push(O), y.push(b);
      }
      for (u(w, "u"); c.default.element(b); ) {
        v = [], y = [], d.interactables.forEachMatch(b, w);
        var E = Ed(n, o, a, v, y, s, d);
        if (E.action && !E.interactable.options[E.action.name].manualStart)
          return E;
        b = R.parentNode(b);
      }
      return { action: null, interactable: null, element: null };
    }
    u(jl, "$t");
    function Bl(n, o, a) {
      var s = o.action, d = o.interactable, v = o.element;
      s = s || { name: null }, n.interactable = d, n.element = v, (0, Ht.copyAction)(n.prepared, s), n.rect = d && s.name ? d.getRect(v) : null, $l(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    u(Bl, "Gt");
    function Do(n, o, a, s) {
      var d = n.options, v = d[a.name].max, y = d[a.name].maxPerElement, b = s.autoStart.maxInteractions, w = 0, E = 0, O = 0;
      if (!(v && y && b))
        return false;
      for (var I = 0; I < s.interactions.list.length; I++) {
        var N = s.interactions.list[I], q = N.prepared.name;
        if (N.interacting() && (++w >= b || N.interactable === n && ((E += q === a.name ? 1 : 0) >= v || N.element === o && (O++, q === a.name && O >= y))))
          return false;
      }
      return b > 0;
    }
    u(Do, "Ht");
    function Hl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    u(Hl, "Kt");
    function rs(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    u(rs, "Zt");
    function $l(n, o) {
      var a = n.interactable, s = n.element, d = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var v = "";
        if (d.name) {
          var y = a.options[d.name].cursorChecker;
          v = c.default.func(y) ? y(d, a, s, n._interacting) : o.actions.map[d.name].getCursor(d);
        }
        rs(n.element, v || "", o);
      } else
        o.autoStart.cursorElement && rs(o.autoStart.cursorElement, "", o);
    }
    u($l, "Jt"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = void 0;
    var Sd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(zo.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return Hl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Do, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget;
      a.interacting() || Bl(a, jl(a, s, d, v, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var d = a.interaction, v = a.pointer, y = a.event, b = a.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || Bl(d, jl(d, v, y, b, s), s);
      })(n, o), function(a, s) {
        var d = a.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          s.fire("autoStart:before-start", a);
          var v = d.interactable, y = d.prepared.name;
          y && v && (v.options[y].manualStart || !Do(v, d.element, d.prepared, s) ? d.stop() : (d.start(d.prepared, v, d.element), $l(d, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && rs(a.element, "", o);
    } }, maxInteractions: Hl, withinInteractionLimit: Do, validateAction: Ll };
    Xn.default = Sd;
    var ko = {};
    Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var Td = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, d = n.dx, v = n.dy;
      if (a.prepared.name === "drag") {
        var y = Math.abs(d), b = Math.abs(v), w = a.interactable.options.drag, E = w.startAxis, O = y > b ? "x" : y < b ? "y" : "xy";
        if (a.prepared.axis = w.lockAxis === "start" ? O[0] : w.lockAxis, O !== "xy" && E !== "xy" && E !== O) {
          a.prepared.name = null;
          for (var I = s, N = function(k) {
            if (k !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && k.testIgnoreAllow($, I, s)) {
                var J = k.getAction(a.downPointer, a.downEvent, a, I);
                if (J && J.name === "drag" && function(F, ne) {
                  if (!ne)
                    return false;
                  var le = ne.options.drag.startAxis;
                  return F === "xy" || le === "xy" || le === F;
                }(O, k) && Xn.default.validateAction(J, k, I, s, o))
                  return k;
              }
            }
          }; c.default.element(I); ) {
            var q = o.interactables.forEachMatch(I, N);
            if (q) {
              a.prepared.name = "drag", a.interactable = q, a.element = I;
              break;
            }
            I = (0, R.parentNode)(I);
          }
        }
      }
    } } };
    ko.default = Td;
    var Ro = {};
    function ns(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    u(ns, "re"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
    var Cd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Xn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = ns(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      ns(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: ns };
    Ro.default = Cd;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Od = { id: "auto-start", install: function(n) {
      n.usePlugin(Xn.default), n.usePlugin(Ro.default), n.usePlugin(ko.default);
    } };
    No.default = Od;
    var Zn = {};
    function Md(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    u(Md, "le");
    function Pd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    u(Pd, "ue");
    function Fl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Md, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, d, v) {
          var y = s.options.preventDefault;
          if (y !== "never")
            if (y !== "always") {
              if (d.events.supportsPassive && /^touch(start|move)$/.test(v.type)) {
                var b = (0, e.getWindow)(v.target).document, w = d.getDocOptions(b);
                if (!w || !w.events || w.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(v.type) || c.default.element(v.target) && (0, R.matchesSelector)(v.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || v.preventDefault();
            } else
              v.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var d = n.interactions.list[s];
          if (d.element && (d.element === a.target || (0, R.nodeContains)(d.element, a.target)))
            return void d.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    u(Fl, "ce"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.install = Fl, Zn.default = void 0;
    var Id = { id: "core/interactablePreventDefault", install: Fl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Pd, n;
    }, {}) };
    Zn.default = Id;
    var is = {};
    Object.defineProperty(is, "__esModule", { value: true }), is.default = void 0, is.default = {};
    var Ii, os = {};
    Object.defineProperty(os, "__esModule", { value: true }), os.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ii || (Ii = {})), Ii.touchAction, Ii.boxSizing, Ii.noListeners;
    var Ad = { id: "dev-tools", install: function() {
    } };
    os.default = Ad;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = u(function n(o) {
      var a = {};
      for (var s in o) {
        var d = o[s];
        c.default.plainObject(d) ? a[s] = n(d) : c.default.array(d) ? a[s] = we.from(d) : a[s] = d;
      }
      return a;
    }, "t");
    var bn = {};
    function Wl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, b = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, b = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw b;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Ul(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Ul(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Wl, "me");
    function Ul(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Ul, "be");
    function _d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(_d, "xe");
    function yn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(yn, "we"), Object.defineProperty(bn, "__esModule", { value: true }), bn.getRectOffset = Vl, bn.default = void 0;
    var zd = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), yn(this, "states", []), yn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), yn(this, "startDelta", void 0), yn(this, "result", void 0), yn(this, "endResult", void 0), yn(this, "edges", void 0), yn(this, "interaction", void 0), this.interaction = s, this.result = Go();
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, d) {
        var v = s.phase, y = this.interaction, b = function(E) {
          var O = E.interactable.options[E.prepared.name], I = O.modifiers;
          return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var q = O[N];
            return q && q.enabled && { options: q, methods: q._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(y);
        this.prepareStates(b), this.edges = (0, U.default)({}, y.edges), this.startOffset = Vl(y.rect, d), this.startDelta = { x: 0, y: 0 };
        var w = this.fillArg({ phase: v, pageCoords: d, preEnd: false });
        return this.result = Go(), this.startAll(w), this.result = this.setAll(w);
      } }, { key: "fillArg", value: function(s) {
        var d = this.interaction;
        return s.interaction = d, s.interactable = d.interactable, s.element = d.element, s.rect = s.rect || d.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var d = 0; d < this.states.length; d++) {
          var v = this.states[d];
          v.methods.start && (s.state = v, v.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var d = s.phase, v = s.preEnd, y = s.skipModifiers, b = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, b);
        for (var w = y ? this.states.slice(y) : this.states, E = Go(s.coords, s.rect), O = 0; O < w.length; O++) {
          var I, N = w[O], q = N.options, k = (0, U.default)({}, s.coords), $ = null;
          (I = N.methods) != null && I.set && this.shouldDo(q, v, d) && (s.state = N, $ = N.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - k.x, y: s.coords.y - k.y })), E.eventProps.push($);
        }
        E.delta.x = s.coords.x - s.pageCoords.x, E.delta.y = s.coords.y - s.pageCoords.y, E.rectDelta.left = s.rect.left - b.left, E.rectDelta.right = s.rect.right - b.right, E.rectDelta.top = s.rect.top - b.top, E.rectDelta.bottom = s.rect.bottom - b.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var ne = E.rect.left !== F.left || E.rect.right !== F.right || E.rect.top !== F.top || E.rect.bottom !== F.bottom;
          E.changed = ne || J.x !== E.coords.x || J.y !== E.coords.y;
        }
        return E;
      } }, { key: "applyToInteraction", value: function(s) {
        var d = this.interaction, v = s.phase, y = d.coords.cur, b = d.coords.start, w = this.result, E = this.startDelta, O = w.delta;
        v === "start" && (0, U.default)(this.startDelta, w.delta);
        for (var I = 0; I < [[b, E], [y, O]].length; I++) {
          var N = Wl([[b, E], [y, O]][I], 2), q = N[0], k = N[1];
          q.page.x += k.x, q.page.y += k.y, q.client.x += k.x, q.client.y += k.y;
        }
        var $ = this.result.rectDelta, J = s.rect || d.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var d = this.interaction, v = s.phase, y = s.preEnd, b = s.skipModifiers, w = this.setAll(this.fillArg({ preEnd: y, phase: v, pageCoords: s.modifiedCoords || d.coords.cur.page }));
        if (this.result = w, !w.changed && (!b || b < this.states.length) && d.interacting())
          return false;
        if (s.modifiedCoords) {
          var E = d.coords.cur.page, O = { x: s.modifiedCoords.x - E.x, y: s.modifiedCoords.y - E.y };
          w.coords.x += O.x, w.coords.y += O.y, w.delta.x += O.x, w.delta.y += O.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var d = s.interaction, v = s.event, y = this.states;
        if (y && y.length) {
          for (var b = false, w = 0; w < y.length; w++) {
            var E = y[w];
            s.state = E;
            var O = E.options, I = E.methods, N = I.beforeEnd && I.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            b = b || !b && this.shouldDo(O, true, s.phase, true);
          }
          b && d.move({ event: v, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var d = s.interaction;
        if (this.states && this.states.length) {
          var v = (0, U.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, s);
          this.fillArg(v);
          for (var y = 0; y < this.states.length; y++) {
            var b = this.states[y];
            v.state = b, b.methods.stop && b.methods.stop(v);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var d = 0; d < s.length; d++) {
          var v = s[d], y = v.options, b = v.methods, w = v.name;
          this.states.push({ options: y, methods: b, index: d, name: w });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var d = s.interaction, v = d.coords, y = d.rect, b = d.modification;
        if (b.result) {
          for (var w = b.startDelta, E = b.result, O = E.delta, I = E.rectDelta, N = [[v.start, w], [v.cur, O]], q = 0; q < N.length; q++) {
            var k = Wl(N[q], 2), $ = k[0], J = k[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          y.left -= I.left, y.right -= I.right, y.top -= I.top, y.bottom -= I.bottom;
        }
      } }, { key: "shouldDo", value: function(s, d, v, y) {
        return !(!s || s.enabled === false || y && !s.endOnly || s.endOnly && !d || v === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(d) {
          return (0, gn.default)(d);
        }), this.result = Go((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && _d(o.prototype, a), n;
    }();
    function Go(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    u(Go, "Pe");
    function Vl(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    u(Vl, "Oe"), bn.default = zd;
    var mt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    u(qo, "Ee"), Object.defineProperty(mt, "__esModule", { value: true }), mt.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, d = u(function(v) {
        var y = v || {};
        for (var b in y.enabled = y.enabled !== false, a)
          b in y || (y[b] = a[b]);
        var w = { options: y, methods: s, name: o, enable: function() {
          return y.enabled = true, w;
        }, disable: function() {
          return y.enabled = false, w;
        } };
        return w;
      }, "o");
      return o && typeof o == "string" && (d._defaults = a, d._methods = s), d;
    }, mt.addEventModifiers = qo, mt.default = void 0;
    var Dd = { id: "modifiers/base", before: ["actions"], install: function(n) {
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
    } } };
    mt.default = Dd;
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: true }), Ai.defaults = void 0, Ai.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var _i = {};
    function Yl(n) {
      return (Yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Yl, "ke");
    function kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(kd, "Ie");
    function Xl(n, o) {
      return (Xl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(Xl, "De");
    function Rd(n, o) {
      return !o || Yl(o) !== "object" && typeof o != "function" ? Ce(n) : o;
    }
    u(Rd, "Ae");
    function Ce(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(Ce, "Re");
    function as(n) {
      return (as = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(as, "ze");
    function Ae(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ae, "Ce"), Object.defineProperty(_i, "__esModule", { value: true }), _i.InteractEvent = void 0;
    var Zl = function(n) {
      (function(b, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), w && Xl(b, w);
      })(y, n);
      var o, a, s, d, v = (s = y, d = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (b) {
          return false;
        }
      }(), function() {
        var b, w = as(s);
        if (d) {
          var E = as(this).constructor;
          b = Reflect.construct(w, arguments, E);
        } else
          b = w.apply(this, arguments);
        return Rd(this, b);
      });
      function y(b, w, E, O, I, N, q) {
        var k;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, y), Ae(Ce(k = v.call(this, b)), "target", void 0), Ae(Ce(k), "currentTarget", void 0), Ae(Ce(k), "relatedTarget", null), Ae(Ce(k), "screenX", void 0), Ae(Ce(k), "screenY", void 0), Ae(Ce(k), "button", void 0), Ae(Ce(k), "buttons", void 0), Ae(Ce(k), "ctrlKey", void 0), Ae(Ce(k), "shiftKey", void 0), Ae(Ce(k), "altKey", void 0), Ae(Ce(k), "metaKey", void 0), Ae(Ce(k), "page", void 0), Ae(Ce(k), "client", void 0), Ae(Ce(k), "delta", void 0), Ae(Ce(k), "rect", void 0), Ae(Ce(k), "x0", void 0), Ae(Ce(k), "y0", void 0), Ae(Ce(k), "t0", void 0), Ae(Ce(k), "dt", void 0), Ae(Ce(k), "duration", void 0), Ae(Ce(k), "clientX0", void 0), Ae(Ce(k), "clientY0", void 0), Ae(Ce(k), "velocity", void 0), Ae(Ce(k), "speed", void 0), Ae(Ce(k), "swipe", void 0), Ae(Ce(k), "timeStamp", void 0), Ae(Ce(k), "axes", void 0), Ae(Ce(k), "preEnd", void 0), I = I || b.element;
        var $ = b.interactable, J = ($ && $.options || Ai.defaults).deltaSource, F = (0, qe.default)($, I, E), ne = O === "start", le = O === "end", pe = ne ? Ce(k) : b.prevEvent, Ee = ne ? b.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: b.coords.cur.timeStamp } : b.coords.cur;
        return k.page = (0, U.default)({}, Ee.page), k.client = (0, U.default)({}, Ee.client), k.rect = (0, U.default)({}, b.rect), k.timeStamp = Ee.timeStamp, le || (k.page.x -= F.x, k.page.y -= F.y, k.client.x -= F.x, k.client.y -= F.y), k.ctrlKey = w.ctrlKey, k.altKey = w.altKey, k.shiftKey = w.shiftKey, k.metaKey = w.metaKey, k.button = w.button, k.buttons = w.buttons, k.target = I, k.currentTarget = I, k.preEnd = N, k.type = q || E + (O || ""), k.interactable = $, k.t0 = ne ? b.pointers[b.pointers.length - 1].downTime : pe.t0, k.x0 = b.coords.start.page.x - F.x, k.y0 = b.coords.start.page.y - F.y, k.clientX0 = b.coords.start.client.x - F.x, k.clientY0 = b.coords.start.client.y - F.y, k.delta = ne || le ? { x: 0, y: 0 } : { x: k[J].x - pe[J].x, y: k[J].y - pe[J].y }, k.dt = b.coords.delta.timeStamp, k.duration = k.timeStamp - k.t0, k.velocity = (0, U.default)({}, b.coords.velocity[J]), k.speed = (0, Ke.default)(k.velocity.x, k.velocity.y), k.swipe = le || O === "inertiastart" ? k.getSwipe() : null, k;
      }
      return u(y, "a"), o = y, (a = [{ key: "getSwipe", value: function() {
        var b = this._interaction;
        if (b.prevEvent.speed < 600 || this.timeStamp - b.prevEvent.timeStamp > 150)
          return null;
        var w = 180 * Math.atan2(b.prevEvent.velocityY, b.prevEvent.velocityX) / Math.PI;
        w < 0 && (w += 360);
        var E = 112.5 <= w && w < 247.5, O = 202.5 <= w && w < 337.5;
        return { up: O, down: !O && 22.5 <= w && w < 157.5, left: E, right: !E && (292.5 <= w || w < 67.5), angle: w, speed: b.prevEvent.speed, velocity: { x: b.prevEvent.velocityX, y: b.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && kd(o.prototype, a), y;
    }(qt.BaseEvent);
    _i.InteractEvent = Zl, Object.defineProperties(Zl.prototype, { pageX: { get: function() {
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
    function Di(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Di, "Ye"), Object.defineProperty(zi, "__esModule", { value: true }), zi.PointerInfo = void 0, zi.PointerInfo = u(function n(o, a, s, d, v) {
      (function(y, b) {
        if (!(y instanceof b))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Di(this, "id", void 0), Di(this, "pointer", void 0), Di(this, "event", void 0), Di(this, "downTime", void 0), Di(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = d, this.downTarget = v;
    }, "t");
    var Lo, jo, kt = {};
    function Nd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Nd, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(He, "Ve"), Object.defineProperty(kt, "__esModule", { value: true }), Object.defineProperty(kt, "PointerInfo", { enumerable: true, get: function() {
      return zi.PointerInfo;
    } }), kt.default = kt.Interaction = kt._ProxyMethods = kt._ProxyValues = void 0, kt._ProxyValues = Lo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Lo || (kt._ProxyValues = Lo = {})), kt._ProxyMethods = jo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(jo || (kt._ProxyMethods = jo = {}));
    var Gd = 0, Jl = function() {
      function n(s) {
        var d = this, v = s.pointerType, y = s.scopeFire;
        (function(N, q) {
          if (!(N instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Ht.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), He(this, "_id", Gd++), this._scopeFire = y, this.pointerType = v;
        var b = this;
        this._proxy = {};
        var w = u(function(N) {
          Object.defineProperty(d._proxy, N, { get: function() {
            return b[N];
          } });
        }, "a");
        for (var E in Lo)
          w(E);
        var O = u(function(N) {
          Object.defineProperty(d._proxy, N, { value: function() {
            return b[N].apply(b, arguments);
          } });
        }, "l");
        for (var I in jo)
          O(I);
        this._scopeFire("interactions:new", { interaction: this });
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, d, v) {
        var y = this.updatePointer(s, d, v, true), b = this.pointers[y];
        this._scopeFire("interactions:down", { pointer: s, event: d, eventTarget: v, pointerIndex: y, pointerInfo: b, type: "down", interaction: this });
      } }, { key: "start", value: function(s, d, v) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !d.options[s.name].enabled) && ((0, Ht.copyAction)(this.prepared, s), this.interactable = d, this.element = v, this.rect = d.getRect(v), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, d, v) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, d, v, false);
        var y, b, w = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (y = this.coords.cur.client.x - this.coords.start.client.x, b = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ke.default)(y, b) > this.pointerMoveTolerance);
        var E = this.getPointerIndex(s), O = { pointer: s, pointerIndex: E, pointerInfo: this.pointers[E], event: d, type: "move", eventTarget: v, dx: y, dy: b, duplicate: w, interaction: this };
        w || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", O), w || this.simulation || (this.interacting() && (O.type = null, this.move(O)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, d, v, y) {
        var b = this.getPointerIndex(s);
        b === -1 && (b = this.updatePointer(s, d, v, false));
        var w = /cancel$/i.test(d.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(w), { pointer: s, pointerIndex: b, pointerInfo: this.pointers[b], event: d, eventTarget: v, type: w, curEventTarget: y, interaction: this }), this.simulation || this.end(d), this.removePointer(s, d);
      } }, { key: "documentBlur", value: function(s) {
        this.end(s), this._scopeFire("interactions:blur", { event: s, type: "blur", interaction: this });
      } }, { key: "end", value: function(s) {
        var d;
        this._ending = true, s = s || this._latestPointer.event, this.interacting() && (d = this._doPhase({ event: s, interaction: this, phase: "end" })), this._ending = false, d === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(s) {
        var d = K.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : we.findIndex(this.pointers, function(v) {
          return v.id === d;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, d, v, y) {
        var b = K.getPointerId(s), w = this.getPointerIndex(s), E = this.pointers[w];
        return y = y !== false && (y || /(down|start)$/i.test(d.type)), E ? E.pointer = s : (E = new zi.PointerInfo(b, s, d, null, null), w = this.pointers.length, this.pointers.push(E)), K.setCoords(this.coords.cur, this.pointers.map(function(O) {
          return O.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), y && (this.pointerIsDown = true, E.downTime = this.coords.cur.timeStamp, E.downTarget = v, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = d, this.pointerWasMoved = false)), this._updateLatestPointer(s, d, v), this._scopeFire("interactions:update-pointer", { pointer: s, event: d, eventTarget: v, down: y, pointerInfo: E, pointerIndex: w, interaction: this }), w;
      } }, { key: "removePointer", value: function(s, d) {
        var v = this.getPointerIndex(s);
        if (v !== -1) {
          var y = this.pointers[v];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: d, eventTarget: null, pointerIndex: v, pointerInfo: y, interaction: this }), this.pointers.splice(v, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, d, v) {
        this._latestPointer.pointer = s, this._latestPointer.event = d, this._latestPointer.eventTarget = v;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, d, v, y) {
        return new _i.InteractEvent(this, s, this.prepared.name, d, this.element, v, y);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var d = s.event, v = s.phase, y = s.preEnd, b = s.type, w = this.rect;
        if (w && v === "move" && (ce.addEdges(this.edges, w, this.coords.delta[this.interactable.options.deltaSource]), w.width = w.right - w.left, w.height = w.bottom - w.top), this._scopeFire("interactions:before-action-".concat(v), s) === false)
          return false;
        var E = s.iEvent = this._createPreparedEvent(d, v, y, b);
        return this._scopeFire("interactions:action-".concat(v), s), v === "start" && (this.prevEvent = E), this._fireEvent(E), this._scopeFire("interactions:after-action-".concat(v), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Nd(o.prototype, a), n;
    }();
    kt.Interaction = Jl;
    var qd = Jl;
    kt.default = qd;
    var wn = {};
    function Kl(n) {
      n.pointerIsDown && (ls(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    u(Kl, "He");
    function Ql(n) {
      ss(n.interaction);
    }
    u(Ql, "Ke");
    function ss(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return ls(n.coords.cur, o), ls(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    u(ss, "Ze");
    function Ld(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    u(Ld, "Je");
    function ls(n, o) {
      var a = n.page, s = n.client, d = o.x, v = o.y;
      a.x += d, a.y += v, s.x += d, s.y += v;
    }
    u(ls, "Qe"), Object.defineProperty(wn, "__esModule", { value: true }), wn.addTotal = Kl, wn.applyPending = ss, wn.default = void 0, kt._ProxyMethods.offsetBy = "";
    var jd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Ld;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Kl(n.interaction);
    }, "interactions:before-action-start": Ql, "interactions:before-action-move": Ql, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ss(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    wn.default = jd;
    var Jn = {};
    function Bd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Bd, "nn");
    function it(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(it, "rn"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = Jn.InertiaState = void 0;
    var eu = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), it(this, "active", false), it(this, "isModified", false), it(this, "smoothEnd", false), it(this, "allowResume", false), it(this, "modification", void 0), it(this, "modifierCount", 0), it(this, "modifierArg", void 0), it(this, "startCoords", void 0), it(this, "t0", 0), it(this, "v0", 0), it(this, "te", 0), it(this, "targetOffset", void 0), it(this, "modifiedOffset", void 0), it(this, "currentOffset", void 0), it(this, "lambda_v0", 0), it(this, "one_ve_v0", 0), it(this, "timeout", void 0), it(this, "interaction", void 0), this.interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var d = this.interaction, v = Bo(d);
        if (!v || !v.enabled)
          return false;
        var y = d.coords.velocity.client, b = (0, Ke.default)(y.x, y.y), w = this.modification || (this.modification = new bn.default(d));
        if (w.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = v.allowResume, this.v0 = b, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = w.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && b > v.minSpeed && b > v.endSpeed)
          this.startInertia();
        else {
          if (w.result = w.setAll(this.modifierArg), !w.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: s, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = true, d.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, d = this.interaction.coords.velocity.client, v = Bo(this.interaction), y = v.resistance, b = -Math.log(v.endSpeed / this.v0) / y;
        this.targetOffset = { x: (d.x - b) / y, y: (d.y - b) / y }, this.te = b, this.lambda_v0 = y / this.v0, this.one_ve_v0 = 1 - v.endSpeed / this.v0;
        var w = this.modification, E = this.modifierArg;
        E.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, w.result = w.setAll(E), w.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + w.result.delta.x, y: this.targetOffset.y + w.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var d = this;
        this.timeout = jt.default.request(function() {
          d.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, d, v, y, b, w = this, E = this.interaction, O = Bo(E).resistance, I = (E._now() - this.t0) / 1e3;
        if (I < this.te) {
          var N, q = 1 - (Math.exp(-O * I) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, d = this.targetOffset.y, v = this.modifiedOffset.x, y = this.modifiedOffset.y, N = { x: tu(b = q, 0, s, v), y: tu(b, 0, d, y) }) : N = { x: this.targetOffset.x * q, y: this.targetOffset.y * q };
          var k = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += k.x, this.currentOffset.y += k.y, E.offsetBy(k), E.move(), this.onNextFrame(function() {
            return w.inertiaTick();
          });
        } else
          E.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, d = this.interaction, v = d._now() - this.t0, y = Bo(d).smoothEndDuration;
        if (v < y) {
          var b = { x: ru(v, 0, this.targetOffset.x, y), y: ru(v, 0, this.targetOffset.y, y) }, w = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, d.offsetBy(w), d.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          d.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var d = s.pointer, v = s.event, y = s.eventTarget, b = this.interaction;
        b.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), b.updatePointer(d, v, y, true), b._doPhase({ interaction: b, event: v, phase: "resume" }), (0, K.copyCoords)(b.coords.prev, b.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, jt.default.cancel(this.timeout);
      } }]) && Bd(o.prototype, a), n;
    }();
    function Bo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    u(Bo, "an");
    function tu(n, o, a, s) {
      var d = 1 - n;
      return d * d * o + 2 * d * n * a + n * n * s;
    }
    u(tu, "sn");
    function ru(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    u(ru, "ln"), Jn.InertiaState = eu;
    var Hd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(wn.default), n.usePlugin(mt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new eu(o);
    }, "interactions:before-action-end": function(n) {
      var o = n.interaction, a = n.event;
      return (!o._interacting || o.simulation || !o.inertia.start(a)) && null;
    }, "interactions:down": function(n) {
      var o = n.interaction, a = n.eventTarget, s = o.inertia;
      if (s.active)
        for (var d = a; c.default.element(d); ) {
          if (d === o.element) {
            s.resume(n);
            break;
          }
          d = R.parentNode(d);
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
    Jn.default = Hd;
    var ki = {};
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u($d, "fn");
    function Ri(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ri, "dn");
    function nu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    u(nu, "pn"), Object.defineProperty(ki, "__esModule", { value: true }), ki.Eventable = void 0;
    var Fd = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ri(this, "options", void 0), Ri(this, "types", {}), Ri(this, "propagationStopped", false), Ri(this, "immediatePropagationStopped", false), Ri(this, "global", void 0), this.options = (0, U.default)({}, s || {});
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var d, v = this.global;
        (d = this.types[s.type]) && nu(s, d), !s.propagationStopped && v && (d = v[s.type]) && nu(s, d);
      } }, { key: "on", value: function(s, d) {
        var v = (0, fe.default)(s, d);
        for (s in v)
          this.types[s] = we.merge(this.types[s] || [], v[s]);
      } }, { key: "off", value: function(s, d) {
        var v = (0, fe.default)(s, d);
        for (s in v) {
          var y = this.types[s];
          if (y && y.length)
            for (var b = 0; b < v[s].length; b++) {
              var w = v[s][b], E = y.indexOf(w);
              E !== -1 && y.splice(E, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && $d(o.prototype, a), n;
    }();
    ki.Eventable = Fd;
    var Ni = {};
    Object.defineProperty(Ni, "__esModule", { value: true }), Ni.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var us = {};
    Object.defineProperty(us, "__esModule", { value: true }), us.createInteractStatic = function(n) {
      var o = u(function a(s, d) {
        var v = n.interactables.get(s, d);
        return v || ((v = n.interactables.new(s, d)).events.global = a.globalEvents), v;
      }, "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Ht.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var v = 0; v < a.length; v++) {
            var y = a[v];
            this.on(y, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var b in a)
            this.on(b, a[b], s);
          return this;
        }
        return (0, Ni.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: d }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Ht.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var v = 0; v < a.length; v++) {
            var y = a[v];
            this.off(y, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var b in a)
            this.off(b, a[b], s);
          return this;
        }
        var w;
        return (0, Ni.default)(a, this.scope.actions) ? a in this.globalEvents && (w = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(w, 1) : this.scope.events.remove(this.scope.document, a, s, d), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return L.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return L.default.supportsPointerEvent;
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
    var Ho = {};
    function Wd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Wd, "mn");
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Nr, "bn"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.Interactable = void 0;
    var Ud = function() {
      function n(s, d, v, y) {
        (function(b, w) {
          if (!(b instanceof w))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new ki.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = d.actions, this.target = s, this._context = d.context || v, this._win = (0, e.getWindow)((0, R.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = y, this.set(d);
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, d) {
        return c.default.func(d.onstart) && this.on("".concat(s, "start"), d.onstart), c.default.func(d.onmove) && this.on("".concat(s, "move"), d.onmove), c.default.func(d.onend) && this.on("".concat(s, "end"), d.onend), c.default.func(d.oninertiastart) && this.on("".concat(s, "inertiastart"), d.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, d, v) {
        (c.default.array(d) || c.default.object(d)) && this.off(s, d), (c.default.array(v) || c.default.object(v)) && this.on(s, v);
      } }, { key: "setPerAction", value: function(s, d) {
        var v = this._defaults;
        for (var y in d) {
          var b = y, w = this.options[s], E = d[b];
          b === "listeners" && this.updatePerActionListeners(s, w.listeners, E), c.default.array(E) ? w[b] = we.from(E) : c.default.plainObject(E) ? (w[b] = (0, U.default)(w[b] || {}, (0, gn.default)(E)), c.default.object(v.perAction[b]) && "enabled" in v.perAction[b] && (w[b].enabled = E.enabled !== false)) : c.default.bool(E) && c.default.object(v.perAction[b]) ? w[b].enabled = E : w[b] = E;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, R.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var d = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(v) {
          var y = (0, U.default)({}, d._rectChecker(v));
          return "width" in y || (y.width = y.right - y.left, y.height = y.bottom - y.top), y;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, d) {
        if ((0, R.trySelector)(d) || c.default.object(d)) {
          for (var v in this.options[s] = d, this._actions.map)
            this.options[v][s] = d;
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
        return this._context === s.ownerDocument || (0, R.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, d, v) {
        return !this.testIgnore(s.ignoreFrom, d, v) && this.testAllow(s.allowFrom, d, v);
      } }, { key: "testAllow", value: function(s, d, v) {
        return !s || !!c.default.element(v) && (c.default.string(s) ? (0, R.matchesUpTo)(v, s, d) : !!c.default.element(s) && (0, R.nodeContains)(s, v));
      } }, { key: "testIgnore", value: function(s, d, v) {
        return !(!s || !c.default.element(v)) && (c.default.string(s) ? (0, R.matchesUpTo)(v, s, d) : !!c.default.element(s) && (0, R.nodeContains)(s, v));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, d, v, y) {
        c.default.object(d) && !c.default.array(d) && (y = v, v = null);
        var b = s === "on" ? "add" : "remove", w = (0, fe.default)(d, v);
        for (var E in w) {
          E === "wheel" && (E = L.default.wheelEvent);
          for (var O = 0; O < w[E].length; O++) {
            var I = w[E][O];
            (0, Ni.default)(E, this._actions) ? this.events[s](E, I) : c.default.string(this.target) ? this._scopeEvents["".concat(b, "Delegate")](this.target, this._context, E, I, y) : this._scopeEvents[b](this.target, E, I, y);
          }
        }
        return this;
      } }, { key: "on", value: function(s, d, v) {
        return this._onOff("on", s, d, v);
      } }, { key: "off", value: function(s, d, v) {
        return this._onOff("off", s, d, v);
      } }, { key: "set", value: function(s) {
        var d = this._defaults;
        for (var v in c.default.object(s) || (s = {}), this.options = (0, gn.default)(d.base), this._actions.methodDict) {
          var y = v, b = this._actions.methodDict[y];
          this.options[y] = {}, this.setPerAction(y, (0, U.default)((0, U.default)({}, d.perAction), d.actions[y])), this[b](s[y]);
        }
        for (var w in s)
          c.default.func(this[w]) && this[w](s[w]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var d = this._scopeEvents.delegatedEvents[s], v = d.length - 1; v >= 0; v--) {
              var y = d[v], b = y.selector, w = y.context, E = y.listeners;
              b === this.target && w === this._context && d.splice(v, 1);
              for (var O = E.length - 1; O >= 0; O--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, E[O][0], E[O][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Wd(o.prototype, a), n;
    }();
    Ho.Interactable = Ud;
    var $o = {};
    function Vd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Vd, "_n");
    function cs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(cs, "Pn"), Object.defineProperty($o, "__esModule", { value: true }), $o.InteractableSet = void 0;
    var Yd = function() {
      function n(s) {
        var d = this;
        (function(v, y) {
          if (!(v instanceof y))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), cs(this, "list", []), cs(this, "selectorMap", {}), cs(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(v) {
          var y = v.interactable, b = y.target, w = y._context, E = c.default.string(b) ? d.selectorMap[b] : b[d.scope.id], O = we.findIndex(E, function(I) {
            return I.context === w;
          });
          E[O] && (E[O].context = null, E[O].interactable = null), E.splice(O, 1);
        } });
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, d) {
        d = (0, U.default)(d || {}, { actions: this.scope.actions });
        var v = new this.scope.Interactable(s, d, this.scope.document, this.scope.events), y = { context: v._context, interactable: v };
        return this.scope.addDocument(v._doc), this.list.push(v), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(y)) : (v.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(y)), this.scope.fire("interactable:new", { target: s, options: d, interactable: v, win: this.scope._win }), v;
      } }, { key: "get", value: function(s, d) {
        var v = d && d.context || this.scope.document, y = c.default.string(s), b = y ? this.selectorMap[s] : s[this.scope.id];
        if (!b)
          return null;
        var w = we.find(b, function(E) {
          return E.context === v && (y || E.interactable.inContext(s));
        });
        return w && w.interactable;
      } }, { key: "forEachMatch", value: function(s, d) {
        for (var v = 0; v < this.list.length; v++) {
          var y = this.list[v], b = void 0;
          if ((c.default.string(y.target) ? c.default.element(s) && R.matchesSelector(s, y.target) : s === y.target) && y.inContext(s) && (b = d(y)), b !== void 0)
            return b;
        }
      } }]) && Vd(o.prototype, a), n;
    }();
    $o.InteractableSet = Yd;
    var Fo = {};
    function Xd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Xd, "En");
    function ps(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(ps, "Tn");
    function ds(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, b = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, b = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw b;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return iu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? iu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(ds, "Mn");
    function iu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(iu, "jn"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.default = void 0;
    var Zd = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ps(this, "currentTarget", void 0), ps(this, "originalEvent", void 0), ps(this, "type", void 0), this.originalEvent = s, (0, Gt.default)(this, s);
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Xd(o.prototype, a), n;
    }();
    function Gi(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    u(Gi, "In");
    var Jd = { id: "events", install: function(n) {
      var o, a = [], s = {}, d = [], v = { add: y, remove: b, addDelegate: function(O, I, N, q, k) {
        var $ = Gi(k);
        if (!s[N]) {
          s[N] = [];
          for (var J = 0; J < d.length; J++) {
            var F = d[J];
            y(F, N, w), y(F, N, E, true);
          }
        }
        var ne = s[N], le = we.find(ne, function(pe) {
          return pe.selector === O && pe.context === I;
        });
        le || (le = { selector: O, context: I, listeners: [] }, ne.push(le)), le.listeners.push([q, $]);
      }, removeDelegate: function(O, I, N, q, k) {
        var $, J = Gi(k), F = s[N], ne = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === O && le.context === I) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = ds(pe[Ee], 2), be = je[0], _e = je[1], Zt = _e.capture, qr = _e.passive;
                if (be === q && Zt === J.capture && qr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), b(I, N, w), b(I, N, E, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: w, delegateUseCapture: E, delegatedEvents: s, documents: d, targets: a, supportsOptions: false, supportsPassive: false };
      function y(O, I, N, q) {
        var k = Gi(q), $ = we.find(a, function(J) {
          return J.eventTarget === O;
        });
        $ || ($ = { eventTarget: O, events: {} }, a.push($)), $.events[I] || ($.events[I] = []), O.addEventListener && !we.contains($.events[I], N) && (O.addEventListener(I, N, v.supportsOptions ? k : k.capture), $.events[I].push(N));
      }
      u(y, "s");
      function b(O, I, N, q) {
        var k = Gi(q), $ = we.findIndex(a, function(Ee) {
          return Ee.eventTarget === O;
        }), J = a[$];
        if (J && J.events)
          if (I !== "all") {
            var F = false, ne = J.events[I];
            if (ne) {
              if (N === "all") {
                for (var le = ne.length - 1; le >= 0; le--)
                  b(O, I, ne[le], k);
                return;
              }
              for (var pe = 0; pe < ne.length; pe++)
                if (ne[pe] === N) {
                  O.removeEventListener(I, N, v.supportsOptions ? k : k.capture), ne.splice(pe, 1), ne.length === 0 && (delete J.events[I], F = true);
                  break;
                }
            }
            F && !Object.keys(J.events).length && a.splice($, 1);
          } else
            for (I in J.events)
              J.events.hasOwnProperty(I) && b(O, I, "all");
      }
      u(b, "l");
      function w(O, I) {
        for (var N = Gi(I), q = new Zd(O), k = s[O.type], $ = ds(K.getEventTargets(O), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < k.length; F++) {
            var ne = k[F], le = ne.selector, pe = ne.context;
            if (R.matchesSelector(J, le) && R.nodeContains(pe, $) && R.nodeContains(pe, J)) {
              var Ee = ne.listeners;
              q.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = ds(Ee[je], 2), _e = be[0], Zt = be[1], qr = Zt.capture, Cs = Zt.passive;
                qr === N.capture && Cs === N.passive && _e(q);
              }
            }
          }
          J = R.parentNode(J);
        }
      }
      u(w, "u");
      function E(O) {
        return w(O, true);
      }
      return u(E, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return v.supportsOptions = true;
      }, get passive() {
        return v.supportsPassive = true;
      } }), n.events = v, v;
    } };
    Fo.default = Jd;
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
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, d = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var v = 0; v < d.interactions.list.length; v++) {
        var y = d.interactions.list[v], b = s;
        if (y.simulation && y.simulation.allowResume && y.pointerType === o)
          for (; b; ) {
            if (b === y.element)
              return y;
            b = R.parentNode(b);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, d = n.eventType, v = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var y = 0; y < v.interactions.list.length; y++) {
        var b = v.interactions.list[y];
        if (b.pointerType === s) {
          if (b.simulation && !ou(b, a))
            continue;
          if (b.interacting())
            return b;
          o || (o = b);
        }
      }
      if (o)
        return o;
      for (var w = 0; w < v.interactions.list.length; w++) {
        var E = v.interactions.list[w];
        if (!(E.pointerType !== s || /down/i.test(d) && E.simulation))
          return E;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var d = a.interactions.list[s];
        if (ou(d, o))
          return d;
      }
      return null;
    }, idle: function(n) {
      for (var o = n.pointerType, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var d = a.interactions.list[s];
        if (d.pointers.length === 1) {
          var v = d.interactable;
          if (v && (!v.options.gesture || !v.options.gesture.enabled))
            continue;
        } else if (d.pointers.length >= 2)
          continue;
        if (!d.interacting() && o === d.pointerType)
          return d;
      }
      return null;
    } };
    function ou(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    u(ou, "zn");
    var Kd = Uo;
    Wo.default = Kd;
    var Vo = {};
    function au(n) {
      return (au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(au, "Xn");
    function su(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, b = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, b = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw b;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return lu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? lu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(su, "Yn");
    function lu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(lu, "Bn");
    function Qd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(Qd, "Wn");
    function ef(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(ef, "Ln");
    function uu(n, o) {
      return (uu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(uu, "Un");
    function tf(n, o) {
      return !o || au(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    u(tf, "Vn");
    function fs(n) {
      return (fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(fs, "Nn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var hs = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function cu(n, o) {
      return function(a) {
        var s = o.interactions.list, d = K.getPointerType(a), v = su(K.getEventTargets(a), 2), y = v[0], b = v[1], w = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var E = 0; E < a.changedTouches.length; E++) {
            var O = a.changedTouches[E], I = { pointer: O, pointerId: K.getPointerId(O), pointerType: d, eventType: a.type, eventTarget: y, curEventTarget: b, scope: o }, N = pu(I);
            w.push([I.pointer, I.eventTarget, I.curEventTarget, N]);
          }
        } else {
          var q = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var k = 0; k < s.length && !q; k++)
              q = s[k].pointerType !== "mouse" && s[k].pointerIsDown;
            q = q || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!q) {
            var $ = { pointer: a, pointerId: K.getPointerId(a), pointerType: d, eventType: a.type, curEventTarget: b, eventTarget: y, scope: o }, J = pu($);
            w.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < w.length; F++) {
          var ne = su(w[F], 4), le = ne[0], pe = ne[1], Ee = ne[2];
          ne[3][n](le, a, pe, Ee);
        }
      };
    }
    u(cu, "$n");
    function pu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Wo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    u(pu, "Gn");
    function ms(n, o) {
      var a = n.doc, s = n.scope, d = n.options, v = s.interactions.docEvents, y = s.events, b = y[o];
      for (var w in s.browser.isIOS && !d.events && (d.events = { passive: false }), y.delegatedEvents)
        b(a, w, y.delegateListener), b(a, w, y.delegateUseCapture, true);
      for (var E = d && d.events, O = 0; O < v.length; O++) {
        var I = v[O];
        b(a, I.type, I.listener, E);
      }
    }
    u(ms, "Hn");
    var rf = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < hs.length; a++) {
        var s = hs[a];
        o[s] = cu(s, n);
      }
      var d, v = L.default.pEventTypes;
      function y() {
        for (var b = 0; b < n.interactions.list.length; b++) {
          var w = n.interactions.list[b];
          if (w.pointerIsDown && w.pointerType === "touch" && !w._interacting)
            for (var E = function() {
              var I = w.pointers[O];
              n.documents.some(function(N) {
                var q = N.doc;
                return (0, R.nodeContains)(q, I.downTarget);
              }) || w.removePointer(I.pointer, I.event);
            }, O = 0; O < w.pointers.length; O++)
              E();
        }
      }
      u(y, "a"), (d = T.default.PointerEvent ? [{ type: v.down, listener: y }, { type: v.down, listener: o.pointerDown }, { type: v.move, listener: o.pointerMove }, { type: v.up, listener: o.pointerUp }, { type: v.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: y }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(b) {
        for (var w = 0; w < n.interactions.list.length; w++)
          n.interactions.list[w].documentBlur(b);
      } }), n.prevTouchTime = 0, n.Interaction = function(b) {
        (function(k, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          k.prototype = Object.create($ && $.prototype, { constructor: { value: k, writable: true, configurable: true } }), $ && uu(k, $);
        })(q, b);
        var w, E, O, I, N = (O = q, I = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (k) {
            return false;
          }
        }(), function() {
          var k, $ = fs(O);
          if (I) {
            var J = fs(this).constructor;
            k = Reflect.construct($, arguments, J);
          } else
            k = $.apply(this, arguments);
          return tf(this, k);
        });
        function q() {
          return Qd(this, q), N.apply(this, arguments);
        }
        return u(q, "s"), w = q, (E = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(k) {
          n.interactions.pointerMoveTolerance = k;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && ef(w.prototype, E), q;
      }(kt.default), n.interactions = { list: [], new: function(b) {
        b.scopeFire = function(E, O) {
          return n.fire(E, O);
        };
        var w = new n.Interaction(b);
        return n.interactions.list.push(w), w;
      }, listeners: o, docEvents: d, pointerMoveTolerance: 1 }, n.usePlugin(Zn.default);
    }, listeners: { "scope:add-document": function(n) {
      return ms(n, "add");
    }, "scope:remove-document": function(n) {
      return ms(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var d = o.interactions.list[s];
        d.interactable === a && (d.stop(), o.fire("interactions:destroy", { interaction: d }), d.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: ms, doOnInteractions: cu, methodNames: hs };
    Vo.default = rf;
    var qi = {};
    function du(n) {
      return (du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(du, "Jn");
    function vs(n, o, a) {
      return (vs = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, d, v) {
        var y = function(w, E) {
          for (; !Object.prototype.hasOwnProperty.call(w, E) && (w = Kn(w)) !== null; )
            ;
          return w;
        }(s, d);
        if (y) {
          var b = Object.getOwnPropertyDescriptor(y, d);
          return b.get ? b.get.call(v) : b.value;
        }
      })(n, o, a || n);
    }
    u(vs, "Qn");
    function fu(n, o) {
      return (fu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(fu, "tr");
    function nf(n, o) {
      return !o || du(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    u(nf, "er");
    function Kn(n) {
      return (Kn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Kn, "nr");
    function hu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(hu, "rr");
    function mu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(mu, "or");
    function vu(n, o, a) {
      return o && mu(n.prototype, o), a && mu(n, a), n;
    }
    u(vu, "ir");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(vt, "ar"), Object.defineProperty(qi, "__esModule", { value: true }), qi.initScope = gu, qi.Scope = void 0;
    var of = function() {
      function n() {
        var o = this;
        hu(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", L.default), vt(this, "defaults", (0, gn.default)(Ai.defaults)), vt(this, "Eventable", ki.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, us.createInteractStatic)(this)), vt(this, "InteractEvent", _i.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new $o.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(w, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function");
            w.prototype = Object.create(E && E.prototype, { constructor: { value: w, writable: true, configurable: true } }), E && fu(w, E);
          })(b, s);
          var d, v, y = (d = b, v = function() {
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
            var w, E = Kn(d);
            if (v) {
              var O = Kn(this).constructor;
              w = Reflect.construct(E, arguments, O);
            } else
              w = E.apply(this, arguments);
            return nf(this, w);
          });
          function b() {
            return hu(this, b), y.apply(this, arguments);
          }
          return u(b, "i"), vu(b, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(w) {
            return vs(Kn(b.prototype), "set", this).call(this, w), a.fire("interactable:set", { options: w, interactable: this }), this;
          } }, { key: "unset", value: function() {
            vs(Kn(b.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), b;
        }(Ho.Interactable);
      }
      return u(n, "t"), vu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var d = this.listenerMaps[s].map[o];
          if (d && d(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : gu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, d = this.listenerMaps.length, v = o.before.reduce(function(b, w) {
            return b[w] = true, b[bu(w)] = true, b;
          }, {}); s < d; s++) {
            var y = this.listenerMaps[s].id;
            if (v[y] || v[bu(y)])
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
        a = a ? (0, U.default)({}, a) : {}, this.documents.push({ doc: o, options: a }), this.events.documents.push(o), o !== this.document && this.events.add(s, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: s, scope: this, options: a });
      } }, { key: "removeDocument", value: function(o) {
        var a = this.getDocIndex(o), s = e.getWindow(o), d = this.documents[a].options;
        this.events.remove(s, "unload", this.onWindowUnload), this.documents.splice(a, 1), this.events.documents.splice(a, 1), this.fire("scope:remove-document", { doc: o, window: s, scope: this, options: d });
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
    function gu(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), T.default.init(o), L.default.init(o), jt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Vo.default), n.usePlugin(Fo.default), n;
    }
    u(gu, "lr");
    function bu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    u(bu, "ur"), qi.Scope = of;
    var xt = {};
    Object.defineProperty(xt, "__esModule", { value: true }), xt.default = void 0;
    var yu = new qi.Scope(), af = yu.interactStatic;
    xt.default = af;
    var sf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    yu.init(sf);
    var Yo = {};
    Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0, Yo.default = function() {
    };
    var Xo = {};
    Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0, Xo.default = function() {
    };
    var Zo = {};
    function wu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, b = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, b = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw b;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return xu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? xu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(wu, "yr");
    function xu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(xu, "mr"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0, Zo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var d = wu(s, 2), v = d[0], y = d[1];
        return v in n || y in n;
      }), a = u(function(s, d) {
        for (var v = n.range, y = n.limits, b = y === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : y, w = n.offset, E = w === void 0 ? { x: 0, y: 0 } : w, O = { range: v, grid: n, x: null, y: null }, I = 0; I < o.length; I++) {
          var N = wu(o[I], 2), q = N[0], k = N[1], $ = Math.round((s - E.x) / n[q]), J = Math.round((d - E.y) / n[k]);
          O[q] = Math.max(b.left, Math.min(b.right, $ * n[q] + E.x)), O[k] = Math.max(b.top, Math.min(b.bottom, J * n[k] + E.y));
        }
        return O;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Object.defineProperty(Li, "edgeTarget", { enumerable: true, get: function() {
      return Yo.default;
    } }), Object.defineProperty(Li, "elements", { enumerable: true, get: function() {
      return Xo.default;
    } }), Object.defineProperty(Li, "grid", { enumerable: true, get: function() {
      return Zo.default;
    } });
    var Jo = {};
    Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var lf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, Li), o.createSnapGrid = o.snappers.grid;
    } };
    Jo.default = lf;
    var Qn = {};
    function Eu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(d) {
          return Object.getOwnPropertyDescriptor(n, d).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    u(Eu, "Pr");
    function gs(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Eu(Object(a), true).forEach(function(s) {
          uf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Eu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    u(gs, "Or");
    function uf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(uf, "Sr"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.aspectRatio = Qn.default = void 0;
    var Su = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, d = n.pageCoords, v = o.options.ratio, y = o.options, b = y.equalDelta, w = y.modifiers;
      v === "preserve" && (v = a.width / a.height), o.startCoords = (0, U.default)({}, d), o.startRect = (0, U.default)({}, a), o.ratio = v, o.equalDelta = b;
      var E = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (E.left ? 1 : -1) * (E.top ? 1 : -1);
      else {
        var O = o.xIsPrimaryAxis ? E.top : E.left;
        o.edgeSign = O ? -1 : 1;
      }
      if ((0, U.default)(n.edges, E), w && w.length) {
        var I = new bn.default(n.interaction);
        I.copyFrom(n.interaction.modification), I.prepareStates(w), o.subModification = I, I.startAll(gs({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, d = (0, U.default)({}, s), v = o.equalDelta ? cf : pf;
      if (v(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var y = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, y, { x: s.x - d.x, y: s.y - d.y });
      var b = o.subModification.setAll(gs(gs({}, n), {}, { rect: y, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: y })), w = b.delta;
      return b.changed && (v(o, Math.abs(w.x) > Math.abs(w.y), b.coords, b.rect), (0, U.default)(s, b.coords)), b.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function cf(n, o, a) {
      var s = n.startCoords, d = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * d : a.x = s.x + (a.y - s.y) * d;
    }
    u(cf, "Tr");
    function pf(n, o, a, s) {
      var d = n.startRect, v = n.startCoords, y = n.ratio, b = n.edgeSign;
      if (o) {
        var w = s.width / y;
        a.y = v.y + (w - d.height) * b;
      } else {
        var E = s.height * y;
        a.x = v.x + (E - d.width) * b;
      }
    }
    u(pf, "Mr"), Qn.aspectRatio = Su;
    var df = (0, mt.makeModifier)(Su, "aspectRatio");
    Qn.default = df;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = void 0;
    var Tu = u(function() {
    }, "Ir");
    Tu._defaults = {};
    var ff = Tu;
    xn.default = ff;
    var bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), Object.defineProperty(bs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Ot = {};
    function ys(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    u(ys, "zr"), Object.defineProperty(Ot, "__esModule", { value: true }), Ot.getRestrictionRect = ys, Ot.restrict = Ot.default = void 0;
    var Cu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, d = n.interaction, v = n.pageCoords, y = s.options, b = y.elementRect, w = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, y.offset || {});
      if (o && b) {
        var E = ys(y.restriction, d, v);
        if (E) {
          var O = E.right - E.left - o.width, I = E.bottom - E.top - o.height;
          O < 0 && (w.left += O, w.right += O), I < 0 && (w.top += I, w.bottom += I);
        }
        w.left += a.left - o.width * b.left, w.top += a.top - o.height * b.top, w.right += a.right - o.width * (1 - b.right), w.bottom += a.bottom - o.height * (1 - b.bottom);
      }
      s.offset = w;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, d = s.options, v = s.offset, y = ys(d.restriction, a, o);
      if (y) {
        var b = ce.xywhToTlbr(y);
        o.x = Math.max(Math.min(b.right - v.right, o.x), b.left + v.left), o.y = Math.max(Math.min(b.bottom - v.bottom, o.y), b.top + v.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Ot.restrict = Cu;
    var hf = (0, mt.makeModifier)(Cu, "restrict");
    Ot.default = hf;
    var Tr = {};
    Object.defineProperty(Tr, "__esModule", { value: true }), Tr.restrictEdges = Tr.default = void 0;
    var Ou = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Mu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Pu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var d = a[s];
        d in n || (n[d] = o[d]);
      }
      return n;
    }
    u(Pu, "Wr");
    var Iu = { noInner: Ou, noOuter: Mu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, d = n.state, v = d.options;
      if (v) {
        var y = (0, Ot.getRestrictionRect)(v.offset, a, a.coords.start.page);
        o = ce.rectToXY(y);
      }
      o = o || { x: 0, y: 0 }, d.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, d = n.state, v = d.offset, y = d.options;
      if (a) {
        var b = (0, U.default)({}, o), w = (0, Ot.getRestrictionRect)(y.inner, s, b) || {}, E = (0, Ot.getRestrictionRect)(y.outer, s, b) || {};
        Pu(w, Ou), Pu(E, Mu), a.top ? o.y = Math.min(Math.max(E.top + v.top, b.y), w.top + v.top) : a.bottom && (o.y = Math.max(Math.min(E.bottom + v.bottom, b.y), w.bottom + v.bottom)), a.left ? o.x = Math.min(Math.max(E.left + v.left, b.x), w.left + v.left) : a.right && (o.x = Math.max(Math.min(E.right + v.right, b.x), w.right + v.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Tr.restrictEdges = Iu;
    var mf = (0, mt.makeModifier)(Iu, "restrictEdges");
    Tr.default = mf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictRect = ei.default = void 0;
    var vf = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Ot.restrict.defaults), Au = { start: Ot.restrict.start, set: Ot.restrict.set, defaults: vf };
    ei.restrictRect = Au;
    var gf = (0, mt.makeModifier)(Au, "restrictRect");
    ei.default = gf;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictSize = ti.default = void 0;
    var bf = { width: -1 / 0, height: -1 / 0 }, yf = { width: 1 / 0, height: 1 / 0 }, _u = { start: function(n) {
      return Tr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, d = n.edges, v = a.options;
      if (d) {
        var y = ce.tlbrToXywh((0, Ot.getRestrictionRect)(v.min, o, n.coords)) || bf, b = ce.tlbrToXywh((0, Ot.getRestrictionRect)(v.max, o, n.coords)) || yf;
        a.options = { endOnly: v.endOnly, inner: (0, U.default)({}, Tr.restrictEdges.noInner), outer: (0, U.default)({}, Tr.restrictEdges.noOuter) }, d.top ? (a.options.inner.top = s.bottom - y.height, a.options.outer.top = s.bottom - b.height) : d.bottom && (a.options.inner.bottom = s.top + y.height, a.options.outer.bottom = s.top + b.height), d.left ? (a.options.inner.left = s.right - y.width, a.options.outer.left = s.right - b.width) : d.right && (a.options.inner.right = s.left + y.width, a.options.outer.right = s.left + b.width), Tr.restrictEdges.set(n), a.options = v;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ti.restrictSize = _u;
    var wf = (0, mt.makeModifier)(_u, "restrictSize");
    ti.default = wf;
    var ws = {};
    Object.defineProperty(ws, "__esModule", { value: true }), Object.defineProperty(ws, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snap = Kr.default = void 0;
    var zu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, d = n.element, v = n.rect, y = n.state, b = n.startOffset, w = y.options, E = w.offsetWithOrigin ? function(N) {
        var q = N.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N.state.options.origin, null, null, [q])) || (0, qe.default)(N.interactable, q, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (w.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var O = (0, ce.resolveRectLike)(w.offset, s, d, [a]);
        (o = (0, ce.rectToXY)(O) || { x: 0, y: 0 }).x += E.x, o.y += E.y;
      }
      var I = w.relativePoints;
      y.offsets = v && I && I.length ? I.map(function(N, q) {
        return { index: q, relativePoint: N, x: b.left - v.width * N.x + o.x, y: b.top - v.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, d = s.options, v = s.offsets, y = (0, qe.default)(o.interactable, o.element, o.prepared.name), b = (0, U.default)({}, a), w = [];
      d.offsetWithOrigin || (b.x -= y.x, b.y -= y.y);
      for (var E = 0; E < v.length; E++)
        for (var O = v[E], I = b.x - O.x, N = b.y - O.y, q = 0, k = d.targets.length; q < k; q++) {
          var $, J = d.targets[q];
          ($ = c.default.func(J) ? J(I, N, o._proxy, O, q) : J) && w.push({ x: (c.default.number($.x) ? $.x : I) + O.x, y: (c.default.number($.y) ? $.y : N) + O.y, range: c.default.number($.range) ? $.range : d.range, source: J, index: q, offset: O });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < w.length; ne++) {
        var le = w[ne], pe = le.range, Ee = le.x - b.x, je = le.y - b.y, be = (0, Ke.default)(Ee, je), _e = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (_e = false), F.target && !(_e ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = _e, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Kr.snap = zu;
    var xf = (0, mt.makeModifier)(zu, "snap");
    Kr.default = xf;
    var Gr = {};
    function Du(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Du, "oo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var ku = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Kr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, d = n.state, v = n.coords, y = d.options, b = d.offsets, w = { x: v.x - b[0].x, y: v.y - b[0].y };
      d.options = (0, U.default)({}, y), d.options.targets = [];
      for (var E = 0; E < (y.targets || []).length; E++) {
        var O = (y.targets || [])[E], I = void 0;
        if (I = c.default.func(O) ? O(w.x, w.y, s) : O) {
          for (var N = 0; N < d.targetFields.length; N++) {
            var q = (o = d.targetFields[N], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, ne) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var le = [], pe = true, Ee = false, je = void 0;
                try {
                  for (var be, _e = F[Symbol.iterator](); !(pe = (be = _e.next()).done) && (le.push(be.value), !ne || le.length !== ne); pe = true)
                    ;
                } catch (Zt) {
                  Ee = true, je = Zt;
                } finally {
                  try {
                    pe || _e.return == null || _e.return();
                  } finally {
                    if (Ee)
                      throw je;
                  }
                }
                return le;
              }
            }(o, a) || function(F, ne) {
              if (F) {
                if (typeof F == "string")
                  return Du(F, ne);
                var le = Object.prototype.toString.call(F).slice(8, -1);
                return le === "Object" && F.constructor && (le = F.constructor.name), le === "Map" || le === "Set" ? Array.from(F) : le === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le) ? Du(F, ne) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), k = q[0], $ = q[1];
            if (k in I || $ in I) {
              I.x = I[k], I.y = I[$];
              break;
            }
          }
          d.options.targets.push(I);
        }
      }
      var J = Kr.snap.set(n);
      return d.options = y, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = ku;
    var Ef = (0, mt.makeModifier)(ku, "snapSize");
    Gr.default = Ef;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.snapEdges = ri.default = void 0;
    var Ru = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, U.default)((0, gn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ri.snapEdges = Ru;
    var Sf = (0, mt.makeModifier)(Ru, "snapEdges");
    ri.default = Sf;
    var xs = {};
    Object.defineProperty(xs, "__esModule", { value: true }), Object.defineProperty(xs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Es = {};
    Object.defineProperty(Es, "__esModule", { value: true }), Object.defineProperty(Es, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.default = void 0;
    var Tf = { aspectRatio: Qn.default, restrictEdges: Tr.default, restrict: Ot.default, restrictRect: ei.default, restrictSize: ti.default, snapEdges: ri.default, snap: Kr.default, snapSize: Gr.default, spring: xs.default, avoid: bs.default, transform: Es.default, rubberband: ws.default };
    ni.default = Tf;
    var Ko = {};
    Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var Cf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(mt.default), n.usePlugin(Jo.default), o.modifiers = ni.default, ni.default) {
        var s = ni.default[a], d = s._defaults, v = s._methods;
        d._methods = v, n.defaults.perAction[a] = d;
      }
    } };
    Ko.default = Cf;
    var En = {};
    function Nu(n) {
      return (Nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Nu, "mo");
    function Of(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Of, "bo");
    function Gu(n, o) {
      return (Gu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(Gu, "xo");
    function Mf(n, o) {
      return !o || Nu(o) !== "object" && typeof o != "function" ? Rt(n) : o;
    }
    u(Mf, "wo");
    function Rt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(Rt, "_o");
    function Ss(n) {
      return (Ss = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Ss, "Po");
    function br(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(br, "Oo"), Object.defineProperty(En, "__esModule", { value: true }), En.PointerEvent = En.default = void 0;
    var Pf = function(n) {
      (function(b, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), w && Gu(b, w);
      })(y, n);
      var o, a, s, d, v = (s = y, d = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (b) {
          return false;
        }
      }(), function() {
        var b, w = Ss(s);
        if (d) {
          var E = Ss(this).constructor;
          b = Reflect.construct(w, arguments, E);
        } else
          b = w.apply(this, arguments);
        return Mf(this, b);
      });
      function y(b, w, E, O, I, N) {
        var q;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, y), br(Rt(q = v.call(this, I)), "type", void 0), br(Rt(q), "originalEvent", void 0), br(Rt(q), "pointerId", void 0), br(Rt(q), "pointerType", void 0), br(Rt(q), "double", void 0), br(Rt(q), "pageX", void 0), br(Rt(q), "pageY", void 0), br(Rt(q), "clientX", void 0), br(Rt(q), "clientY", void 0), br(Rt(q), "dt", void 0), br(Rt(q), "eventable", void 0), K.pointerExtend(Rt(q), E), E !== w && K.pointerExtend(Rt(q), w), q.timeStamp = N, q.originalEvent = E, q.type = b, q.pointerId = K.getPointerId(w), q.pointerType = K.getPointerType(w), q.target = O, q.currentTarget = null, b === "tap") {
          var k = I.getPointerIndex(w);
          q.dt = q.timeStamp - I.pointers[k].downTime;
          var $ = q.timeStamp - I.tapTime;
          q.double = !!(I.prevTap && I.prevTap.type !== "doubletap" && I.prevTap.target === q.target && $ < 500);
        } else
          b === "doubletap" && (q.dt = w.timeStamp - I.tapTime);
        return q;
      }
      return u(y, "a"), o = y, (a = [{ key: "_subtractOrigin", value: function(b) {
        var w = b.x, E = b.y;
        return this.pageX -= w, this.pageY -= E, this.clientX -= w, this.clientY -= E, this;
      } }, { key: "_addOrigin", value: function(b) {
        var w = b.x, E = b.y;
        return this.pageX += w, this.pageY += E, this.clientX += w, this.clientY += E, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Of(o.prototype, a), y;
    }(qt.BaseEvent);
    En.PointerEvent = En.default = Pf;
    var ji = {};
    Object.defineProperty(ji, "__esModule", { value: true }), ji.default = void 0;
    var Qo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Qo, n.defaults.actions.pointerEvents = Qo.defaults, (0, U.default)(n.actions.phaselessTypes, Qo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && Ts(n), Qr({ interaction: a, pointer: s, event: d, eventTarget: v, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var d = a.interaction, v = a.pointer, y = a.event, b = a.eventTarget, w = a.pointerIndex, E = d.pointers[w].hold, O = R.getPath(b), I = { interaction: d, pointer: v, event: y, eventTarget: b, type: "hold", targets: [], path: O, node: null }, N = 0; N < O.length; N++) {
          var q = O[N];
          I.node = q, s.fire("pointerEvents:collect-targets", I);
        }
        if (I.targets.length) {
          for (var k = 1 / 0, $ = 0; $ < I.targets.length; $++) {
            var J = I.targets[$].eventable.options.holdDuration;
            J < k && (k = J);
          }
          E.duration = k, E.timeout = setTimeout(function() {
            Qr({ interaction: d, eventTarget: b, pointer: v, event: y, type: "hold" }, s);
          }, k);
        }
      })(n, o), Qr(n, o);
    }, "interactions:up": function(n, o) {
      Ts(n), Qr(n, o), function(a, s) {
        var d = a.interaction, v = a.pointer, y = a.event, b = a.eventTarget;
        d.pointerWasMoved || Qr({ interaction: d, eventTarget: b, pointer: v, event: y, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      Ts(n), Qr(n, o);
    } }, PointerEvent: En.PointerEvent, fire: Qr, collectEventTargets: qu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Qr(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget, y = n.type, b = n.targets, w = b === void 0 ? qu(n, o) : b, E = new En.PointerEvent(y, s, d, v, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: E });
      for (var O = { interaction: a, pointer: s, event: d, eventTarget: v, targets: w, type: y, pointerEvent: E }, I = 0; I < w.length; I++) {
        var N = w[I];
        for (var q in N.props || {})
          E[q] = N.props[q];
        var k = (0, qe.default)(N.eventable, N.node);
        if (E._subtractOrigin(k), E.eventable = N.eventable, E.currentTarget = N.node, N.eventable.fire(E), E._addOrigin(k), E.immediatePropagationStopped || E.propagationStopped && I + 1 < w.length && w[I + 1].node !== E.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", O), y === "tap") {
        var $ = E.double ? Qr({ interaction: a, pointer: s, event: d, eventTarget: v, type: "doubletap" }, o) : E;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return E;
    }
    u(Qr, "Mo");
    function qu(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget, y = n.type, b = a.getPointerIndex(s), w = a.pointers[b];
      if (y === "tap" && (a.pointerWasMoved || !w || w.downTarget !== v))
        return [];
      for (var E = R.getPath(v), O = { interaction: a, pointer: s, event: d, eventTarget: v, type: y, path: E, targets: [], node: null }, I = 0; I < E.length; I++) {
        var N = E[I];
        O.node = N, o.fire("pointerEvents:collect-targets", O);
      }
      return y === "hold" && (O.targets = O.targets.filter(function(q) {
        var k;
        return q.eventable.options.holdDuration === ((k = a.pointers[b]) == null ? void 0 : k.hold.duration);
      })), O.targets;
    }
    u(qu, "jo");
    function Ts(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    u(Ts, "ko");
    var If = Qo;
    ji.default = If;
    var ea = {};
    function Af(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    u(Af, "Ao"), Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0;
    var _f = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(ji.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Af, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, d = n.eventTarget, v = n.targets;
      if (s.type === "hold" && v.length) {
        var y = v[0].eventable.options.holdRepeatInterval;
        y <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: d, type: "hold", pointer: s, event: s }, o);
        }, y));
      }
    } }) };
    ea.default = _f;
    var ta = {};
    function zf(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    u(zf, "Co"), Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0;
    var Df = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = zf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, d) {
        var v = a.call(this, s, d);
        return v === this && (this.events.options[s] = d), v;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, d = n.type, v = n.eventTarget;
      o.interactables.forEachMatch(s, function(y) {
        var b = y.events, w = b.options;
        b.types[d] && b.types[d].length && y.testIgnoreAllow(w, s, v) && a.push({ node: s, eventable: b, props: { interactable: y } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, U.default)(a.events.options, o.pointerEvents.defaults), (0, U.default)(a.events.options, s.pointerEvents || {});
    } } };
    ta.default = Df;
    var ra = {};
    Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0;
    var kf = { id: "pointer-events", install: function(n) {
      n.usePlugin(ji), n.usePlugin(ea.default), n.usePlugin(ta.default);
    } };
    ra.default = kf;
    var Bi = {};
    function Lu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, d, v) {
          for (var y = c.default.string(s.target) ? we.from(s._context.querySelectorAll(s.target)) : [s.target], b = v.window.Promise, w = b ? [] : null, E = function() {
            var I = y[O], N = s.getRect(I);
            if (!N)
              return "break";
            var q = we.find(v.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === s && ne.element === I && ne.prepared.name === d.name;
            }), k = void 0;
            if (q)
              q.move(), w && (k = q._reflowPromise || new b(function(ne) {
                q._reflowResolve = ne;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(N), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: v.now() }, F = K.coordsToEvent(J);
              k = function(ne, le, pe, Ee, je) {
                var be = ne.interactions.new({ pointerType: "reflow" }), _e = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), K.setZeroCoords(be.coords.delta), (0, Ht.copyAction)(be.prepared, Ee), be._doPhase(_e);
                var Zt = ne.window.Promise, qr = Zt ? new Zt(function(Cs) {
                  be._reflowResolve = Cs;
                }) : void 0;
                return be._reflowPromise = qr, be.start(Ee, le, pe), be._interacting ? (be.move(_e), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), qr;
              }(v, s, I, d, F);
            }
            w && w.push(k);
          }, O = 0; O < y.length && E() !== "break"; O++)
            ;
          return w && b.all(w).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    u(Lu, "Wo"), Object.defineProperty(Bi, "__esModule", { value: true }), Bi.install = Lu, Bi.default = void 0;
    var Rf = { id: "reflow", install: Lu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), we.remove(o.interactions.list, a));
    } } };
    Bi.default = Rf;
    var Xt = { exports: {} };
    function ju(n) {
      return (ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(ju, "Vo"), Object.defineProperty(Xt.exports, "__esModule", { value: true }), Xt.exports.default = void 0, xt.default.use(Zn.default), xt.default.use(wn.default), xt.default.use(ra.default), xt.default.use(Jn.default), xt.default.use(Ko.default), xt.default.use(No.default), xt.default.use(Rr.default), xt.default.use(Jr.default), xt.default.use(Bi.default);
    var Nf = xt.default;
    if (Xt.exports.default = Nf, ju(Xt) === "object" && Xt)
      try {
        Xt.exports = xt.default;
      } catch (n) {
      }
    xt.default.default = xt.default, Xt = Xt.exports;
    var Sn = { exports: {} };
    function Bu(n) {
      return (Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Bu, "$o"), Object.defineProperty(Sn.exports, "__esModule", { value: true }), Sn.exports.default = void 0;
    var Gf = Xt.default;
    if (Sn.exports.default = Gf, Bu(Sn) === "object" && Sn)
      try {
        Sn.exports = Xt.default;
      } catch (n) {
      }
    return Xt.default.default = Xt.default, Sn.exports;
  });
});
var cd = na((ud, Dl) => {
  (function(r) {
    "use strict";
    var e = function() {
    }, t = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(p) {
      return setTimeout(p, 16);
    };
    function i() {
      var p = this;
      p.reads = [], p.writes = [], p.raf = t.bind(r), e("initialized", p);
    }
    u(i, "FastDom"), i.prototype = { constructor: i, runTasks: function(p) {
      e("run tasks");
      for (var m; m = p.shift(); )
        m();
    }, measure: function(p, m) {
      e("measure");
      var x = m ? p.bind(m) : p;
      return this.reads.push(x), l(this), x;
    }, mutate: function(p, m) {
      e("mutate");
      var x = m ? p.bind(m) : p;
      return this.writes.push(x), l(this), x;
    }, clear: function(p) {
      return e("clear", p), f(this.reads, p) || f(this.writes, p);
    }, extend: function(p) {
      if (e("extend", p), typeof p != "object")
        throw new Error("expected object");
      var m = Object.create(this);
      return g(m, p), m.fastdom = this, m.initialize && m.initialize(), m;
    }, catch: null };
    function l(p) {
      p.scheduled || (p.scheduled = true, p.raf(c.bind(null, p)), e("flush scheduled"));
    }
    u(l, "scheduleFlush");
    function c(p) {
      e("flush");
      var m = p.writes, x = p.reads, S;
      try {
        e("flushing reads", x.length), p.runTasks(x), e("flushing writes", m.length), p.runTasks(m);
      } catch (M) {
        S = M;
      }
      if (p.scheduled = false, (x.length || m.length) && l(p), S)
        if (e("task errored", S.message), p.catch)
          p.catch(S);
        else
          throw S;
    }
    u(c, "flush");
    function f(p, m) {
      var x = p.indexOf(m);
      return !!~x && !!p.splice(x, 1);
    }
    u(f, "remove");
    function g(p, m) {
      for (var x in m)
        m.hasOwnProperty(x) && (p[x] = m[x]);
    }
    u(g, "mixin");
    var h = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return h;
    }) : typeof Dl == "object" && (Dl.exports = h);
  })(typeof window != "undefined" ? window : ud);
});
var dd = na((Rl, pd) => {
  (function(r) {
    "use strict";
    var e = Math.cosh || function(p) {
      return Math.abs(p) < 1e-9 ? 1 - p : (Math.exp(p) + Math.exp(-p)) * 0.5;
    }, t = Math.sinh || function(p) {
      return Math.abs(p) < 1e-9 ? p : (Math.exp(p) - Math.exp(-p)) * 0.5;
    }, i = u(function(p) {
      var m = Math.PI / 4;
      if (-m > p || p > m)
        return Math.cos(p) - 1;
      var x = p * p;
      return x * (x * (x * (x * (x * (x * (x * (x / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(p, m) {
      var x = Math.abs(p), S = Math.abs(m);
      return x < 3e3 && S < 3e3 ? Math.sqrt(x * x + S * S) : (x < S ? (x = S, S = p / m) : S = m / p, x * Math.sqrt(1 + S * S));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(p, m) {
      var x = Math.abs(p), S = Math.abs(m);
      return p === 0 ? Math.log(S) : m === 0 ? Math.log(x) : x < 3e3 && S < 3e3 ? Math.log(p * p + m * m) * 0.5 : (p = p / 2, m = m / 2, 0.5 * Math.log(p * p + m * m) + Math.LN2);
    }
    u(f, "logHypot");
    var g = u(function(p, m) {
      var x = { re: 0, im: 0 };
      if (p == null)
        x.re = x.im = 0;
      else if (m !== void 0)
        x.re = p, x.im = m;
      else
        switch (typeof p) {
          case "object":
            if ("im" in p && "re" in p)
              x.re = p.re, x.im = p.im;
            else if ("abs" in p && "arg" in p) {
              if (!Number.isFinite(p.abs) && Number.isFinite(p.arg))
                return h.INFINITY;
              x.re = p.abs * Math.cos(p.arg), x.im = p.abs * Math.sin(p.arg);
            } else if ("r" in p && "phi" in p) {
              if (!Number.isFinite(p.r) && Number.isFinite(p.phi))
                return h.INFINITY;
              x.re = p.r * Math.cos(p.phi), x.im = p.r * Math.sin(p.phi);
            } else
              p.length === 2 ? (x.re = p[0], x.im = p[1]) : c();
            break;
          case "string":
            x.im = x.re = 0;
            var S = p.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), M = 1, A = 0;
            S === null && c();
            for (var T = 0; T < S.length; T++) {
              var P = S[T];
              P === " " || P === "	" || P === `
` || (P === "+" ? M++ : P === "-" ? A++ : P === "i" || P === "I" ? (M + A === 0 && c(), S[T + 1] !== " " && !isNaN(S[T + 1]) ? (x.im += parseFloat((A % 2 ? "-" : "") + S[T + 1]), T++) : x.im += parseFloat((A % 2 ? "-" : "") + "1"), M = A = 0) : ((M + A === 0 || isNaN(P)) && c(), S[T + 1] === "i" || S[T + 1] === "I" ? (x.im += parseFloat((A % 2 ? "-" : "") + P), T++) : x.re += parseFloat((A % 2 ? "-" : "") + P), M = A = 0));
            }
            M + A > 0 && c();
            break;
          case "number":
            x.im = 0, x.re = p;
            break;
          default:
            c();
        }
      return isNaN(x.re) || isNaN(x.im), x;
    }, "parse");
    function h(p, m) {
      if (!(this instanceof h))
        return new h(p, m);
      var x = g(p, m);
      this.re = x.re, this.im = x.im;
    }
    u(h, "Complex"), h.prototype = { re: 0, im: 0, sign: function() {
      var p = this.abs();
      return new h(this.re / p, this.im / p);
    }, add: function(p, m) {
      var x = new h(p, m);
      return this.isInfinite() && x.isInfinite() ? h.NAN : this.isInfinite() || x.isInfinite() ? h.INFINITY : new h(this.re + x.re, this.im + x.im);
    }, sub: function(p, m) {
      var x = new h(p, m);
      return this.isInfinite() && x.isInfinite() ? h.NAN : this.isInfinite() || x.isInfinite() ? h.INFINITY : new h(this.re - x.re, this.im - x.im);
    }, mul: function(p, m) {
      var x = new h(p, m);
      return this.isInfinite() && x.isZero() || this.isZero() && x.isInfinite() ? h.NAN : this.isInfinite() || x.isInfinite() ? h.INFINITY : x.im === 0 && this.im === 0 ? new h(this.re * x.re, 0) : new h(this.re * x.re - this.im * x.im, this.re * x.im + this.im * x.re);
    }, div: function(p, m) {
      var x = new h(p, m);
      if (this.isZero() && x.isZero() || this.isInfinite() && x.isInfinite())
        return h.NAN;
      if (this.isInfinite() || x.isZero())
        return h.INFINITY;
      if (this.isZero() || x.isInfinite())
        return h.ZERO;
      p = this.re, m = this.im;
      var S = x.re, M = x.im, A, T;
      return M === 0 ? new h(p / S, m / S) : Math.abs(S) < Math.abs(M) ? (T = S / M, A = S * T + M, new h((p * T + m) / A, (m * T - p) / A)) : (T = M / S, A = M * T + S, new h((p + m * T) / A, (m - p * T) / A));
    }, pow: function(p, m) {
      var x = new h(p, m);
      if (p = this.re, m = this.im, x.isZero())
        return h.ONE;
      if (x.im === 0) {
        if (m === 0 && p > 0)
          return new h(Math.pow(p, x.re), 0);
        if (p === 0)
          switch ((x.re % 4 + 4) % 4) {
            case 0:
              return new h(Math.pow(m, x.re), 0);
            case 1:
              return new h(0, Math.pow(m, x.re));
            case 2:
              return new h(-Math.pow(m, x.re), 0);
            case 3:
              return new h(0, -Math.pow(m, x.re));
          }
      }
      if (p === 0 && m === 0 && x.re > 0 && x.im >= 0)
        return h.ZERO;
      var S = Math.atan2(m, p), M = f(p, m);
      return p = Math.exp(x.re * M - x.im * S), m = x.im * M + x.re * S, new h(p * Math.cos(m), p * Math.sin(m));
    }, sqrt: function() {
      var p = this.re, m = this.im, x = this.abs(), S, M;
      if (p >= 0) {
        if (m === 0)
          return new h(Math.sqrt(p), 0);
        S = 0.5 * Math.sqrt(2 * (x + p));
      } else
        S = Math.abs(m) / Math.sqrt(2 * (x - p));
      return p <= 0 ? M = 0.5 * Math.sqrt(2 * (x - p)) : M = Math.abs(m) / Math.sqrt(2 * (x + p)), new h(S, m < 0 ? -M : M);
    }, exp: function() {
      var p = Math.exp(this.re);
      return this.im === 0, new h(p * Math.cos(this.im), p * Math.sin(this.im));
    }, expm1: function() {
      var p = this.re, m = this.im;
      return new h(Math.expm1(p) * Math.cos(m) + i(m), Math.exp(p) * Math.sin(m));
    }, log: function() {
      var p = this.re, m = this.im;
      return m === 0 && p > 0, new h(f(p, m), Math.atan2(m, p));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var p = this.re, m = this.im;
      return new h(Math.sin(p) * e(m), Math.cos(p) * t(m));
    }, cos: function() {
      var p = this.re, m = this.im;
      return new h(Math.cos(p) * e(m), -Math.sin(p) * t(m));
    }, tan: function() {
      var p = 2 * this.re, m = 2 * this.im, x = Math.cos(p) + e(m);
      return new h(Math.sin(p) / x, t(m) / x);
    }, cot: function() {
      var p = 2 * this.re, m = 2 * this.im, x = Math.cos(p) - e(m);
      return new h(-Math.sin(p) / x, t(m) / x);
    }, sec: function() {
      var p = this.re, m = this.im, x = 0.5 * e(2 * m) + 0.5 * Math.cos(2 * p);
      return new h(Math.cos(p) * e(m) / x, Math.sin(p) * t(m) / x);
    }, csc: function() {
      var p = this.re, m = this.im, x = 0.5 * e(2 * m) - 0.5 * Math.cos(2 * p);
      return new h(Math.sin(p) * e(m) / x, -Math.cos(p) * t(m) / x);
    }, asin: function() {
      var p = this.re, m = this.im, x = new h(m * m - p * p + 1, -2 * p * m).sqrt(), S = new h(x.re - m, x.im + p).log();
      return new h(S.im, -S.re);
    }, acos: function() {
      var p = this.re, m = this.im, x = new h(m * m - p * p + 1, -2 * p * m).sqrt(), S = new h(x.re - m, x.im + p).log();
      return new h(Math.PI / 2 - S.im, S.re);
    }, atan: function() {
      var p = this.re, m = this.im;
      if (p === 0) {
        if (m === 1)
          return new h(0, 1 / 0);
        if (m === -1)
          return new h(0, -1 / 0);
      }
      var x = p * p + (1 - m) * (1 - m), S = new h((1 - m * m - p * p) / x, -2 * p / x).log();
      return new h(-0.5 * S.im, 0.5 * S.re);
    }, acot: function() {
      var p = this.re, m = this.im;
      if (m === 0)
        return new h(Math.atan2(1, p), 0);
      var x = p * p + m * m;
      return x !== 0 ? new h(p / x, -m / x).atan() : new h(p !== 0 ? p / 0 : 0, m !== 0 ? -m / 0 : 0).atan();
    }, asec: function() {
      var p = this.re, m = this.im;
      if (p === 0 && m === 0)
        return new h(0, 1 / 0);
      var x = p * p + m * m;
      return x !== 0 ? new h(p / x, -m / x).acos() : new h(p !== 0 ? p / 0 : 0, m !== 0 ? -m / 0 : 0).acos();
    }, acsc: function() {
      var p = this.re, m = this.im;
      if (p === 0 && m === 0)
        return new h(Math.PI / 2, 1 / 0);
      var x = p * p + m * m;
      return x !== 0 ? new h(p / x, -m / x).asin() : new h(p !== 0 ? p / 0 : 0, m !== 0 ? -m / 0 : 0).asin();
    }, sinh: function() {
      var p = this.re, m = this.im;
      return new h(t(p) * Math.cos(m), e(p) * Math.sin(m));
    }, cosh: function() {
      var p = this.re, m = this.im;
      return new h(e(p) * Math.cos(m), t(p) * Math.sin(m));
    }, tanh: function() {
      var p = 2 * this.re, m = 2 * this.im, x = e(p) + Math.cos(m);
      return new h(t(p) / x, Math.sin(m) / x);
    }, coth: function() {
      var p = 2 * this.re, m = 2 * this.im, x = e(p) - Math.cos(m);
      return new h(t(p) / x, -Math.sin(m) / x);
    }, csch: function() {
      var p = this.re, m = this.im, x = Math.cos(2 * m) - e(2 * p);
      return new h(-2 * t(p) * Math.cos(m) / x, 2 * e(p) * Math.sin(m) / x);
    }, sech: function() {
      var p = this.re, m = this.im, x = Math.cos(2 * m) + e(2 * p);
      return new h(2 * e(p) * Math.cos(m) / x, -2 * t(p) * Math.sin(m) / x);
    }, asinh: function() {
      var p = this.im;
      this.im = -this.re, this.re = p;
      var m = this.asin();
      return this.re = -this.im, this.im = p, p = m.re, m.re = -m.im, m.im = p, m;
    }, acosh: function() {
      var p = this.acos();
      if (p.im <= 0) {
        var m = p.re;
        p.re = -p.im, p.im = m;
      } else {
        var m = p.im;
        p.im = -p.re, p.re = m;
      }
      return p;
    }, atanh: function() {
      var p = this.re, m = this.im, x = p > 1 && m === 0, S = 1 - p, M = 1 + p, A = S * S + m * m, T = A !== 0 ? new h((M * S - m * m) / A, (m * S + M * m) / A) : new h(p !== -1 ? p / 0 : 0, m !== 0 ? m / 0 : 0), P = T.re;
      return T.re = f(T.re, T.im) / 2, T.im = Math.atan2(T.im, P) / 2, x && (T.im = -T.im), T;
    }, acoth: function() {
      var p = this.re, m = this.im;
      if (p === 0 && m === 0)
        return new h(0, Math.PI / 2);
      var x = p * p + m * m;
      return x !== 0 ? new h(p / x, -m / x).atanh() : new h(p !== 0 ? p / 0 : 0, m !== 0 ? -m / 0 : 0).atanh();
    }, acsch: function() {
      var p = this.re, m = this.im;
      if (m === 0)
        return new h(p !== 0 ? Math.log(p + Math.sqrt(p * p + 1)) : 1 / 0, 0);
      var x = p * p + m * m;
      return x !== 0 ? new h(p / x, -m / x).asinh() : new h(p !== 0 ? p / 0 : 0, m !== 0 ? -m / 0 : 0).asinh();
    }, asech: function() {
      var p = this.re, m = this.im;
      if (this.isZero())
        return h.INFINITY;
      var x = p * p + m * m;
      return x !== 0 ? new h(p / x, -m / x).acosh() : new h(p !== 0 ? p / 0 : 0, m !== 0 ? -m / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return h.INFINITY;
      if (this.isInfinite())
        return h.ZERO;
      var p = this.re, m = this.im, x = p * p + m * m;
      return new h(p / x, -m / x);
    }, conjugate: function() {
      return new h(this.re, -this.im);
    }, neg: function() {
      return new h(-this.re, -this.im);
    }, ceil: function(p) {
      return p = Math.pow(10, p || 0), new h(Math.ceil(this.re * p) / p, Math.ceil(this.im * p) / p);
    }, floor: function(p) {
      return p = Math.pow(10, p || 0), new h(Math.floor(this.re * p) / p, Math.floor(this.im * p) / p);
    }, round: function(p) {
      return p = Math.pow(10, p || 0), new h(Math.round(this.re * p) / p, Math.round(this.im * p) / p);
    }, equals: function(p, m) {
      var x = new h(p, m);
      return Math.abs(x.re - this.re) <= h.EPSILON && Math.abs(x.im - this.im) <= h.EPSILON;
    }, clone: function() {
      return new h(this.re, this.im);
    }, toString: function() {
      var p = this.re, m = this.im, x = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(p) < h.EPSILON && (p = 0), Math.abs(m) < h.EPSILON && (m = 0), m === 0 ? x + p : (p !== 0 ? (x += p, x += " ", m < 0 ? (m = -m, x += "-") : x += "+", x += " ") : m < 0 && (m = -m, x += "-"), m !== 1 && (x += m), x + "i"));
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
    }) : typeof Rl == "object" ? (Object.defineProperty(h, "__esModule", { value: true }), h.default = h, h.Complex = h, pd.exports = h) : r.Complex = h;
  })(Rl);
});
var en = ii(Wu());
function Uu(r) {
  let e = tn(r);
  return new en.default(e).valueOf() * Math.PI;
}
u(Uu, "V");
function Fi(r) {
  let e = tn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
u(Fi, "X");
function Vu(r, e) {
  return new en.default(tn(r)).valueOf() < new en.default(tn(e)).valueOf();
}
u(Vu, "W");
function Yu(r, e) {
  return new en.default(tn(r)).valueOf() > new en.default(tn(e)).valueOf();
}
u(Yu, "H");
function Xu(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = tn(r);
    return new en.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
u(Xu, "Q");
function tn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
u(tn, "l");
function Zu(r) {
  try {
    let e = tn(r), t = new en.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
u(Zu, "J");
var Ff = Object.prototype.toString.call({});
var Wf = "!recursion-limit!";
var Uf = 10;
function Qe(r, e = Uf) {
  return Vf(r) || Yf(r, e) || Xf(r, e);
}
u(Qe, "c");
function Vf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
u(Vf, "M");
function Yf(r, e) {
  if (e === 0)
    return Wf;
  if (r instanceof Map)
    return Zf(r, e);
  if (r instanceof Set)
    return Jf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Kf(r, e);
}
u(Yf, "O");
function Xf(r, e) {
  let t = String(r);
  return t !== Ff ? t : Qf(r, e);
}
u(Xf, "F");
function Zf(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = Qe(i, e - 1), f = Qe(l, e - 1);
    t.push(`${c}: ${f}`);
  }
  return `Map{${t.join(", ")}}`;
}
u(Zf, "G");
function Jf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Qe(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
u(Jf, "R");
function Kf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Qe(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
u(Kf, "N");
function Qf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], f = Qe(l, e - 1), g = Qe(c, e - 1);
    t.push(`${f}: ${g}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
u(Qf, "q");
var Ms = 0;
var Et = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Ms++;
    try {
      this.details = Ms === 1 ? Qe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Ms--;
    }
  }
}, "d");
var eh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var $t = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -$t.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt($t.parseFloat(r.substr(1)));
    let e = $t.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -$t.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = $t.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = $t.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of eh)
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
    let i = $t.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = $t.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var $i = $t;
$i.CONSISTENT = new $t(false, 0, 2, ", "), $i.EXACT = new $t(true, 0, void 0, ", "), $i.MINIFIED = new $t(true, 0, void 0, ","), $i.SIMPLIFIED = new $t(true, 5e-4, 3, ", ");
var ee = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    ee.need(r != null, "notNull");
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
    throw new Et("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = ee.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new Et("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new Et("Unrecognized value type.", { v: r });
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
var Jt = de;
Jt.ZERO = new de(0, 0), Jt.ONE = new de(1, 0), Jt.I = new de(0, 1);
var sa = "H";
var la = "X";
var ua = "Y";
var ca = "Z";
var pa = "P";
var da = "T";
var fa = "X^\xBD";
var ha = "Rx";
var ma = "Ry";
var va = "Rz";
var Ps = "Swap";
var Is = "\u2022";
var As = "Bloch";
var Ju = "|0>";
var Ku = "|1>";
var ga = "Measure";
var _s = /* @__PURE__ */ new WeakSet();
function Ds(r) {
  _s.add(r), r.shadowRoot && ks(r.shadowRoot), Ns(r), Rs(r.ownerDocument);
}
u(Ds, "bind");
function ks(r) {
  Ns(r), Rs(r);
}
u(ks, "bindShadow");
var ba = /* @__PURE__ */ new WeakMap();
function Rs(r = document) {
  if (ba.has(r))
    return ba.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        zs(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && Ns(f);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, ba.delete(r), t.disconnect();
  } };
  return ba.set(r, i), i;
}
u(Rs, "listenForBind");
function Ns(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    zs(e);
  r instanceof Element && r.hasAttribute("data-action") && zs(r);
}
u(Ns, "bindElements");
function th(r) {
  let e = r.currentTarget;
  for (let t of Qu(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      _s.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && _s.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
u(th, "handleEvent");
function* Qu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
u(Qu, "bindings");
function zs(r) {
  for (let e of Qu(r))
    r.addEventListener(e.type, th);
}
u(zs, "bindActions");
function Gs(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
u(Gs, "register");
function qs(r, e) {
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
u(qs, "findTarget");
function Ls(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
u(Ls, "findTargets");
function ze(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return qs(this, e);
  } });
}
u(ze, "target");
function Mt(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Ls(this, e);
  } });
}
u(Mt, "targets");
function js(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
u(js, "autoShadowRoot");
var ya = /* @__PURE__ */ new WeakMap();
function G(r, e) {
  ya.has(r) || ya.set(r, []), ya.get(r).push(e);
}
u(G, "attr");
function Bs(r, e) {
  e || (e = ec(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = tc(t), c = { configurable: true, get() {
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
u(Bs, "initializeAttrs");
function ec(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = ya.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
u(ec, "getAttrNames");
function tc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
u(tc, "attrToAttributeName");
function Hs(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...ec(r.prototype)].map(tc).concat(e);
  }, set(t) {
    e = t;
  } });
}
u(Hs, "defineObservedAttributes");
var rh = /* @__PURE__ */ new WeakSet();
function rc(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), rh.add(r), js(r), Bs(r), Ds(r), e && e.call(r), r.shadowRoot && ks(r.shadowRoot);
}
u(rc, "initializeInstance");
function nc(r) {
  Hs(r), Gs(r);
}
u(nc, "initializeClass");
function re(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    rc(this, e);
  }, nc(r);
}
u(re, "controller");
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
  return u(e, "ActivateableMixinClass"), z([G], e.prototype, "active", 2), e;
}
u(Oe, "ActivateableMixin");
var Tn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function rn(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  return u(e, "AngleableMixinClass"), z([G], e.prototype, "angle", 2), z([G], e.prototype, "reducedAngle", 2), e;
}
u(rn, "AngleableMixin");
var Cn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function $e(r) {
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
  return u(e, "ControllableMixinClass"), e;
}
u($e, "ControllableMixin");
function Be(r) {
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
  return u(e, "DisableableMixinClass"), z([G], e.prototype, "disabled", 2), e;
}
u(Be, "DisableableMixin");
var X = u(function() {
  return X = Object.assign || u(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, "__assign"), X.apply(this, arguments);
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
u(me, "__values");
function ve(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), l, c = [], f;
  try {
    for (; (e === void 0 || e-- > 0) && !(l = i.next()).done; )
      c.push(l.value);
  } catch (g) {
    f = { error: g };
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
u(ve, "__read");
function De(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
u(De, "__spreadArray");
var Se;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Se || (Se = {}));
var nn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(nn || (nn = {}));
var Wi = Se.Start;
var ai = Se.Stop;
var si = Se.Raise;
var On = Se.Send;
var wa = Se.Cancel;
var ic = Se.NullEvent;
var $s = Se.Assign;
var Mv = Se.After;
var Pv = Se.DoneState;
var xa = Se.Log;
var oc = Se.Init;
var Ui = Se.Invoke;
var Iv = Se.ErrorExecution;
var Fs = Se.ErrorPlatform;
var Ws = Se.ErrorCustom;
var Vi = Se.Update;
var ac = Se.Choose;
var sc = Se.Pure;
var Ea = ".";
var Us = {};
var Sa = "xstate.guard";
var lc = "";
var Le = true;
var Ta;
function Xi(r, e, t) {
  t === void 0 && (t = Ea);
  var i = li(r, t), l = li(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Xi(i[c], l[c]) : false;
  });
}
u(Xi, "matchesState");
function Ca(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
u(Ca, "getEventType");
function Oa(r, e) {
  try {
    return Lr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
u(Oa, "toStatePath");
function nh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
u(nh, "isStateLike");
function li(r, e) {
  if (nh(r))
    return r.value;
  if (Lr(r))
    return Yi(r);
  if (typeof r != "string")
    return r;
  var t = Oa(r, e);
  return Yi(t);
}
u(li, "toStateValue");
function Yi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
u(Yi, "pathToStateValue");
function ui(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
u(ui, "mapValues");
function Vs(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = me(Object.keys(r)), g = f.next(); !g.done; g = f.next()) {
      var h = g.value, p = r[h];
      !t(p) || (c[h] = e(p, h, r));
    }
  } catch (m) {
    i = { error: m };
  } finally {
    try {
      g && !g.done && (l = f.return) && l.call(f);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
u(Vs, "mapFilterValues");
var uc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = me(r), f = c.next(); !f.done; f = c.next()) {
        var g = f.value;
        l = l[g];
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
function cc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var f = me(r), g = f.next(); !g.done; g = f.next()) {
        var h = g.value;
        c = c[e][h];
      }
    } catch (p) {
      i = { error: p };
    } finally {
      try {
        g && !g.done && (l = f.return) && l.call(f);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return c;
  };
}
u(cc, "nestedPath");
function Zi(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Zi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
u(Zi, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, De([], ve(r), false));
}
u(Ne, "flatten");
function pc(r) {
  return Lr(r) ? r : [r];
}
u(pc, "toArrayStrict");
function Ft(r) {
  return r === void 0 ? [] : pc(r);
}
u(Ft, "toArray");
function Mn(r, e, t) {
  var i, l;
  if (Te(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = me(Object.keys(r)), g = f.next(); !g.done; g = f.next()) {
      var h = g.value, p = r[h];
      Te(p) ? c[h] = p(e, t.data) : c[h] = p;
    }
  } catch (m) {
    i = { error: m };
  } finally {
    try {
      g && !g.done && (l = f.return) && l.call(f);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
u(Mn, "mapContext");
function dc(r) {
  return /^(done|error)\./.test(r);
}
u(dc, "isBuiltInEvent");
function Ys(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
u(Ys, "isPromiseLike");
function fc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
u(fc, "isBehavior");
function Ma(r, e) {
  var t, i, l = ve([[], []], 2), c = l[0], f = l[1];
  try {
    for (var g = me(r), h = g.next(); !h.done; h = g.next()) {
      var p = h.value;
      e(p) ? c.push(p) : f.push(p);
    }
  } catch (m) {
    t = { error: m };
  } finally {
    try {
      h && !h.done && (i = g.return) && i.call(g);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, f];
}
u(Ma, "partition");
function hc(r, e) {
  return ui(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: hc(t, l) };
    }
  });
}
u(hc, "updateHistoryStates");
function mc(r, e) {
  return { current: e, states: hc(r, e) };
}
u(mc, "updateHistoryValue");
function Xs(r, e, t, i) {
  Le || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var g, h, p = f.assignment, m = { state: i, action: f, _event: e }, x = {};
    if (Te(p))
      x = p(c, e.data, m);
    else
      try {
        for (var S = me(Object.keys(p)), M = S.next(); !M.done; M = S.next()) {
          var A = M.value, T = p[A];
          x[A] = Te(T) ? T(c, e.data, m) : T;
        }
      } catch (P) {
        g = { error: P };
      } finally {
        try {
          M && !M.done && (h = S.return) && h.call(S);
        } finally {
          if (g)
            throw g.error;
        }
      }
    return Object.assign({}, c, x);
  }, r);
  return l;
}
u(Xs, "updateContext");
var Ue = u(function() {
}, "warn");
Le || (Ue = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function Lr(r) {
  return Array.isArray(r);
}
u(Lr, "isArray");
function Te(r) {
  return typeof r == "function";
}
u(Te, "isFunction");
function ge(r) {
  return typeof r == "string";
}
u(ge, "isString");
function Pa(r, e) {
  if (!!r)
    return ge(r) ? { type: Sa, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: Sa, name: r.name, predicate: r } : r;
}
u(Pa, "toGuard");
function vc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
u(vc, "isObservable");
var Cr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Nv = (Ta = {}, Ta[Cr] = function() {
  return this;
}, Ta[Symbol.observable] = function() {
  return this;
}, Ta);
function Or(r) {
  return !!r && "__xstatenode" in r;
}
u(Or, "isMachine");
function gc(r) {
  return !!r && typeof r.send == "function";
}
u(gc, "isActor");
function Ji(r, e) {
  return ge(r) || typeof r == "number" ? X({ type: r }, e) : r;
}
u(Ji, "toEventObject");
function et(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Ji(r);
  return X({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
u(et, "toSCXMLEvent");
function Pn(r, e) {
  var t = pc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Or(i) ? { target: i, event: r } : X(X({}, i), { event: r });
  });
  return t;
}
u(Pn, "toTransitionConfigArray");
function bc(r) {
  if (!(r === void 0 || r === lc))
    return Ft(r);
}
u(bc, "normalizeTarget");
function yc(r, e, t) {
  if (!Le) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
u(yc, "reportUnhandledExceptionOnInvocation");
function Ia(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === Sa)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var g = c == null ? void 0 : c[e.type];
  if (!g)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return g(t, i.data, f);
}
u(Ia, "evaluateGuard");
function Aa(r) {
  return typeof r == "string" ? { type: r } : r;
}
u(Aa, "toInvokeSource");
function Ki(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
u(Ki, "toObserver");
function Qi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
u(Qi, "createInvokeId");
var In = et({ type: oc });
function _a(r, e) {
  return e && e[r] || void 0;
}
u(_a, "getActionFunction");
function ci(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = _a(r, e);
    Te(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Te(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = _a(r.type, e);
    if (Te(i))
      t = X(X({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = X(X(X({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
u(ci, "toActionObject");
var eo = u(function(r, e) {
  if (!r)
    return [];
  var t = Lr(r) ? r : [r];
  return t.map(function(i) {
    return ci(i, e);
  });
}, "toActionObjects");
function Da(r) {
  var e = ci(r);
  return X(X({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
u(Da, "toActivityDefinition");
function wc(r) {
  return ge(r) ? { type: si, event: r } : Zs(r, { to: nn.Internal });
}
u(wc, "raise");
function ih(r) {
  return { type: si, _event: et(r.event) };
}
u(ih, "resolveRaise");
function Zs(r, e) {
  return { to: e ? e.to : void 0, type: On, event: Te(r) ? r : Ji(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : Ca(r) };
}
u(Zs, "send");
function oh(r, e, t, i) {
  var l = { _event: t }, c = et(Te(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (ge(r.delay)) {
    var g = i && i[r.delay];
    f = Te(g) ? g(e, t.data, l) : g;
  } else
    f = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var h = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return X(X({}, r), { to: h, _event: c, event: c.data, delay: f });
}
u(oh, "resolveSend");
var ah = u(function(r, e, t) {
  return X(X({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var xc = u(function(r) {
  return { type: wa, sendId: r };
}, "cancel");
function Ec(r) {
  var e = Da(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
u(Ec, "start");
function Sc(r) {
  var e = Te(r) ? r : Da(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
u(Sc, "stop");
function sh(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
u(sh, "resolveStop");
function Tc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
u(Tc, "after");
function to(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(to, "done");
function pi(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(pi, "doneInvoke");
function An(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(An, "error");
function za(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = ve(c ? [[], l] : Ma(l, function(S) {
    return S.type === $s;
  }), 2), g = f[0], h = f[1], p = g.length ? Xs(t, i, g, e) : t, m = c ? [t] : void 0, x = Ne(h.map(function(S) {
    var M;
    switch (S.type) {
      case si:
        return ih(S);
      case On:
        var A = oh(S, p, i, r.options.delays);
        return Le || Ue(!ge(S.delay) || typeof A.delay == "number", "No delay reference for delay expression '".concat(S.delay, "' was found on machine '").concat(r.id, "'")), A;
      case xa:
        return ah(S, p, i);
      case ac: {
        var T = S, P = (M = T.conds.find(function(W) {
          var ie = Pa(W.cond, r.options.guards);
          return !ie || Ia(r, ie, p, i, e);
        })) === null || M === void 0 ? void 0 : M.actions;
        if (!P)
          return [];
        var _ = ve(za(r, e, p, i, eo(Ft(P), r.options.actions), c), 2), D = _[0], L = _[1];
        return p = L, m == null || m.push(p), D;
      }
      case sc: {
        var P = S.get(p, i.data);
        if (!P)
          return [];
        var C = ve(za(r, e, p, i, eo(Ft(P), r.options.actions), c), 2), B = C[0], R = C[1];
        return p = R, m == null || m.push(p), B;
      }
      case ai:
        return sh(S, p, i);
      case $s: {
        p = Xs(p, i, [S], e), m == null || m.push(p);
        break;
      }
      default:
        var Y = ci(S, r.options.actions), V = Y.exec;
        if (V && m) {
          var H = m.length - 1;
          Y = X(X({}, Y), { exec: function(W) {
            for (var ie = [], oe = 1; oe < arguments.length; oe++)
              ie[oe - 1] = arguments[oe];
            V.apply(void 0, De([m[H]], ve(ie), false));
          } });
        }
        return Y;
    }
  }).filter(function(S) {
    return !!S;
  }));
  return [x, p];
}
u(za, "resolveActions");
var Cc = [];
var _n = u(function(r, e) {
  Cc.push(r);
  var t = e(r);
  return Cc.pop(), t;
}, "provide");
function Oc(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[Cr] = function() {
    return this;
  }, e;
}
u(Oc, "createNullActor");
function Mc(r, e, t, i) {
  var l, c = Aa(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], g = r.data ? Mn(r.data, t, i) : void 0, h = f ? Pc(f, r.id, g) : Oc(r.id);
  return h.meta = r, h;
}
u(Mc, "createInvocableActor");
function Pc(r, e, t) {
  var i = Oc(e);
  if (i.deferred = true, Or(r)) {
    var l = i.state = _n(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
u(Pc, "createDeferredActor");
function lh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
u(lh, "isActor");
function Ic(r) {
  return lh(r) && "id" in r;
}
u(Ic, "isSpawnedActor");
function Ac(r) {
  var e;
  return X((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Cr] = function() {
    return this;
  }, e), r);
}
u(Ac, "toActorRef");
var ro = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function zn(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
u(zn, "getChildren");
function Ks(r) {
  var e = [r];
  return ro(r) ? e : e.concat(Ne(zn(r).map(Ks)));
}
u(Ks, "getAllStateNodes");
function Dn(r, e) {
  var t, i, l, c, f, g, h, p, m = new Set(r), x = Js(m), S = new Set(e);
  try {
    for (var M = me(S), A = M.next(); !A.done; A = M.next())
      for (var T = A.value, P = T.parent; P && !S.has(P); )
        S.add(P), P = P.parent;
  } catch (H) {
    t = { error: H };
  } finally {
    try {
      A && !A.done && (i = M.return) && i.call(M);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var _ = Js(S);
  try {
    for (var D = me(S), L = D.next(); !L.done; L = D.next()) {
      var T = L.value;
      if (T.type === "compound" && (!_.get(T) || !_.get(T).length))
        x.get(T) ? x.get(T).forEach(function(W) {
          return S.add(W);
        }) : T.initialStateNodes.forEach(function(W) {
          return S.add(W);
        });
      else if (T.type === "parallel")
        try {
          for (var C = (f = void 0, me(zn(T))), B = C.next(); !B.done; B = C.next()) {
            var R = B.value;
            S.has(R) || (S.add(R), x.get(R) ? x.get(R).forEach(function(W) {
              return S.add(W);
            }) : R.initialStateNodes.forEach(function(W) {
              return S.add(W);
            }));
          }
        } catch (W) {
          f = { error: W };
        } finally {
          try {
            B && !B.done && (g = C.return) && g.call(C);
          } finally {
            if (f)
              throw f.error;
          }
        }
    }
  } catch (H) {
    l = { error: H };
  } finally {
    try {
      L && !L.done && (c = D.return) && c.call(D);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var Y = me(S), V = Y.next(); !V.done; V = Y.next())
      for (var T = V.value, P = T.parent; P && !S.has(P); )
        S.add(P), P = P.parent;
  } catch (H) {
    h = { error: H };
  } finally {
    try {
      V && !V.done && (p = Y.return) && p.call(Y);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return S;
}
u(Dn, "getConfiguration");
function _c(r, e) {
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
    l[c.key] = _c(c, e);
  }), l;
}
u(_c, "getValueFromAdj");
function Js(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = me(r), c = l.next(); !c.done; c = l.next()) {
      var f = c.value;
      i.has(f) || i.set(f, []), f.parent && (i.has(f.parent) || i.set(f.parent, []), i.get(f.parent).push(f));
    }
  } catch (g) {
    e = { error: g };
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
u(Js, "getAdjList");
function zc(r, e) {
  var t = Dn([r], e);
  return _c(r, Js(t));
}
u(zc, "getValue");
function no(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
u(no, "has");
function Dc(r) {
  return De([], ve(new Set(Ne(De([], ve(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
u(Dc, "nextEvents");
function kn(r, e) {
  return e.type === "compound" ? zn(e).some(function(t) {
    return t.type === "final" && no(r, t);
  }) : e.type === "parallel" ? zn(e).every(function(t) {
    return kn(r, t);
  }) : false;
}
u(kn, "isInFinalState");
function kc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
u(kc, "getMeta");
function Qs(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
u(Qs, "getTagsFromConfiguration");
function el(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return el(r[l], e[l]);
  });
}
u(el, "stateValuesEqual");
function Rc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
u(Rc, "isStateConfig");
function Nc(r, e) {
  var t = r.exec, i = X(X({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
u(Nc, "bindActionToState");
var yr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = Us, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || Us, this.meta = kc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Dc(t.configuration);
    } });
  }
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = In;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = In;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ge(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, De([], ve(l.map(function(c) {
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
    return X(X({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Xi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    Le && Ue(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var uh = { deferEvents: false };
var tl = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = X(X({}, uh), e);
  }
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
var rl = /* @__PURE__ */ new Map();
var ch = 0;
var io = { bookId: function() {
  return "x:".concat(ch++);
}, register: function(r, e) {
  return rl.set(r, e), r;
}, get: function(r) {
  return rl.get(r);
}, free: function(r) {
  rl.delete(r);
} };
function ka() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  Le || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
u(ka, "getGlobal");
function ph() {
  var r = ka();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
u(ph, "getDevTools");
function Gc(r) {
  if (!!ka()) {
    var e = ph();
    e && e.register(r);
  }
}
u(Gc, "registerService");
function qc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var p = l.shift();
        t = r.transition(t, p, h), i.forEach(function(m) {
          return m.next(t);
        });
      }
      c = false;
    }
  }, "flush"), g = Ac({ id: e.id, send: function(p) {
    l.push(p), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(p, m, x) {
    var S = Ki(p, m, x);
    return i.add(S), S.next(t), { unsubscribe: function() {
      i.delete(S);
    } };
  } }), h = { parent: e.parent, self: g, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(h) : t, g;
}
u(qc, "spawnBehavior");
var dh = { sync: false, autoForward: false };
var gt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(gt || (gt = {}));
var Lc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = gt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(m, x) {
      if (Lr(m))
        return i.batch(m), i.state;
      var S = et(Ji(m, x));
      if (i.status === gt.Stopped)
        return Le || Ue(false, 'Event "'.concat(S.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(S.data))), i.state;
      if (i.status !== gt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(S.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(S.data)));
      return i.scheduler.schedule(function() {
        i.forward(S);
        var M = i.nextState(S);
        i.update(M, S);
      }), i._state;
    }, this.sendTo = function(m, x) {
      var S = i.parent && (x === nn.Parent || i.parent.id === x), M = S ? i.parent : ge(x) ? i.children.get(x) || io.get(x) : gc(x) ? x : void 0;
      if (!M) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(x, "' from service '").concat(i.id, "'."));
        Le || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(m.type));
        return;
      }
      "machine" in M ? M.send(X(X({}, m), { name: m.name === Ws ? "".concat(An(i.id)) : m.name, origin: i.sessionId })) : M.send(m.data);
    };
    var l = X(X({}, r.defaultOptions), t), c = l.clock, f = l.logger, g = l.parent, h = l.id, p = h !== void 0 ? h : e.id;
    this.id = p, this.logger = f, this.clock = c, this.parent = g, this.options = l, this.scheduler = new tl({ deferEvents: this.options.deferEvents }), this.sessionId = io.bookId();
  }
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || Ue(this.status !== gt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = me(e.actions), f = c.next(); !f.done; f = c.next()) {
        var g = f.value;
        this.exec(g, e, t);
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
    var i, l, c, f, g, h, p, m, x = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      x.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var S = me(this.eventListeners), M = S.next(); !M.done; M = S.next()) {
          var A = M.value;
          A(e.event);
        }
      } catch (H) {
        i = { error: H };
      } finally {
        try {
          M && !M.done && (l = S.return) && l.call(S);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var T = me(this.listeners), P = T.next(); !P.done; P = T.next()) {
        var A = P.value;
        A(e, e.event);
      }
    } catch (H) {
      c = { error: H };
    } finally {
      try {
        P && !P.done && (f = T.return) && f.call(T);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var _ = me(this.contextListeners), D = _.next(); !D.done; D = _.next()) {
        var L = D.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      g = { error: H };
    } finally {
      try {
        D && !D.done && (h = _.return) && h.call(_);
      } finally {
        if (g)
          throw g.error;
      }
    }
    var C = kn(e.configuration || [], this.machine);
    if (this.state.configuration && C) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === x.machine;
      }), R = B && B.doneData ? Mn(B.doneData, e.context, t) : void 0;
      try {
        for (var Y = me(this.doneListeners), V = Y.next(); !V.done; V = Y.next()) {
          var A = V.value;
          A(pi(this.id, R));
        }
      } catch (H) {
        p = { error: H };
      } finally {
        try {
          V && !V.done && (m = Y.return) && m.call(Y);
        } finally {
          if (p)
            throw p.error;
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
      return Rc(e) ? t.machine.resolveState(e) : t.machine.resolveState(yr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, In);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, g, h, p, m, x = this;
    try {
      for (var S = me(this.listeners), M = S.next(); !M.done; M = S.next()) {
        var A = M.value;
        this.listeners.delete(A);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        M && !M.done && (t = S.return) && t.call(S);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var T = me(this.stopListeners), P = T.next(); !P.done; P = T.next()) {
        var A = P.value;
        A(), this.stopListeners.delete(A);
      }
    } catch (V) {
      i = { error: V };
    } finally {
      try {
        P && !P.done && (l = T.return) && l.call(T);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var _ = me(this.contextListeners), D = _.next(); !D.done; D = _.next()) {
        var A = D.value;
        this.contextListeners.delete(A);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        D && !D.done && (f = _.return) && f.call(_);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var L = me(this.doneListeners), C = L.next(); !C.done; C = L.next()) {
        var A = C.value;
        this.doneListeners.delete(A);
      }
    } catch (V) {
      g = { error: V };
    } finally {
      try {
        C && !C.done && (h = L.return) && h.call(L);
      } finally {
        if (g)
          throw g.error;
      }
    }
    if (!this.initialized)
      return this;
    De([], ve(this.state.configuration), false).sort(function(V, H) {
      return H.order - V.order;
    }).forEach(function(V) {
      var H, W;
      try {
        for (var ie = me(V.definition.exit), oe = ie.next(); !oe.done; oe = ie.next()) {
          var U = oe.value;
          x.exec(U, x.state);
        }
      } catch (ce) {
        H = { error: ce };
      } finally {
        try {
          oe && !oe.done && (W = ie.return) && W.call(ie);
        } finally {
          if (H)
            throw H.error;
        }
      }
    }), this.children.forEach(function(V) {
      Te(V.stop) && V.stop();
    }), this.children.clear();
    try {
      for (var B = me(Object.keys(this.delayedEventsMap)), R = B.next(); !R.done; R = B.next()) {
        var Y = R.value;
        this.clock.clearTimeout(this.delayedEventsMap[Y]);
      }
    } catch (V) {
      p = { error: V };
    } finally {
      try {
        R && !R.done && (m = B.return) && m.call(B);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new tl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = gt.Stopped, this._initialState = void 0, io.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === gt.NotStarted && this.options.deferEvents)
      Le || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== gt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, g = [], h = u(function(S) {
        var M = et(S);
        t.forward(M), c = _n(t, function() {
          return t.machine.transition(c, M);
        }), g.push.apply(g, De([], ve(c.actions.map(function(A) {
          return Nc(A, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var p = me(e), m = p.next(); !m.done; m = p.next()) {
          var x = m.value;
          h(x);
        }
      } catch (S) {
        i = { error: S };
      } finally {
        try {
          m && !m.done && (l = p.return) && l.call(p);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = f, c.actions = g, t.update(c, et(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = et(e);
    if (i.name.indexOf(Fs) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Fs) === 0;
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
        var f = c.value, g = this.children.get(f);
        if (!g)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(f, "'."));
        g.send(e);
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
    var l = t.context, c = t._event, f = e.exec || _a(e.type, i), g = Te(f) ? f : f ? f.exec : e.exec;
    if (g)
      try {
        return g(l, c.data, { action: e, state: this.state, _event: c });
      } catch (C) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: C }), C;
      }
    switch (e.type) {
      case On:
        var h = e;
        if (typeof h.delay == "number") {
          this.defer(h);
          return;
        } else
          h.to ? this.sendTo(h._event, h.to) : this.send(h._event);
        break;
      case wa:
        this.cancel(e.sendId);
        break;
      case Wi: {
        if (this.status !== gt.Running)
          return;
        var p = e.activity;
        if (!this.state.activities[p.id || p.type])
          break;
        if (p.type === Se.Invoke) {
          var m = Aa(p.src), x = this.machine.options.services ? this.machine.options.services[m.type] : void 0, S = p.id, M = p.data;
          Le || Ue(!("forward" in p), "`forward` property is deprecated (found in invocation of '".concat(p.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var A = "autoForward" in p ? p.autoForward : !!p.forward;
          if (!x) {
            Le || Ue(false, "No service found for invocation '".concat(p.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var T = M ? Mn(M, l, c) : void 0;
          if (typeof x == "string")
            return;
          var P = Te(x) ? x(l, c.data, { data: T, src: m, meta: p.meta }) : x;
          if (!P)
            return;
          var _ = void 0;
          Or(P) && (P = T ? P.withContext(T) : P, _ = { autoForward: A }), this.spawn(P, S, _);
        } else
          this.spawnActivity(p);
        break;
      }
      case ai: {
        this.stopChild(e.activity.id);
        break;
      }
      case xa:
        var D = e.label, L = e.value;
        D ? this.logger(D, L) : this.logger(L);
        break;
      default:
        Le || Ue(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), Te(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (Ys(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Te(e))
      return this.spawnCallback(e, t);
    if (Ic(e))
      return this.spawnActor(e, t);
    if (vc(e))
      return this.spawnObservable(e, t);
    if (Or(e))
      return this.spawnMachine(e, X(X({}, i), { id: t }));
    if (fc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, X(X({}, this.options), { parent: this, id: t.id || e.id })), c = X(X({}, dh), t);
    c.sync && l.onTransition(function(g) {
      i.send(Vi, { state: g, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(g) {
      i.removeChild(l.id), i.send(et(g, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = qc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(h) {
      c || (f = h, l.removeChild(t), l.send(et(pi(t, h), { origin: t })));
    }, function(h) {
      if (!c) {
        l.removeChild(t);
        var p = An(t, h);
        try {
          l.send(et(p, { origin: t }));
        } catch (m) {
          yc(h, m, t), l.devTools && l.devTools.send(p, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var g = (i = { id: t, send: function() {
    }, subscribe: function(h, p, m) {
      var x = Ki(h, p, m), S = false;
      return e.then(function(M) {
        S || (x.next(M), !S && x.complete());
      }, function(M) {
        S || x.error(M);
      }), { unsubscribe: function() {
        return S = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return f;
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, g), g;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h, p = u(function(S) {
      h = S, g.forEach(function(M) {
        return M(S);
      }), !c && l.send(et(S, { origin: t }));
    }, "receive"), m;
    try {
      m = e(p, function(S) {
        f.add(S);
      });
    } catch (S) {
      this.send(An(t, S));
    }
    if (Ys(m))
      return this.spawnPromise(m, t);
    var x = (i = { id: t, send: function(S) {
      return f.forEach(function(M) {
        return M(S);
      });
    }, subscribe: function(S) {
      var M = Ki(S);
      return g.add(M.next), { unsubscribe: function() {
        g.delete(M.next);
      } };
    }, stop: function() {
      c = true, Te(m) && m();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return h;
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, x), x;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, f = e.subscribe(function(h) {
      c = h, l.send(et(h, { origin: t }));
    }, function(h) {
      l.removeChild(t), l.send(et(An(t, h), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(et(pi(t), { origin: t }));
    }), g = (i = { id: t, send: function() {
    }, subscribe: function(h, p, m) {
      return e.subscribe(h, p, m);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, g), g;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      Le || Ue(false, "No implementation found for activity '".concat(e.type, "'"));
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
    } }, i[Cr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = ka();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(X(X({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: X({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Gc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Cr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === gt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = ot, r;
}();
function ot(r, e) {
  var t = new Lc(r, e);
  return t;
}
u(ot, "interpret");
function fh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
u(fh, "toInvokeSource");
function oo(r) {
  return X(X({ type: Ui }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = oi(r, ["onDone", "onError"]);
    return X(X({}, e), { type: Ui, src: fh(r.src) });
  } });
}
u(oo, "toInvokeDefinition");
var hi = "";
var nl = "#";
var ao = "*";
var di = {};
var fi = u(function(r) {
  return r[0] === nl;
}, "isStateId");
var hh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var mh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Or(c.target));
  }), l = e === hi ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var jc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var f;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(hh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ea), this.id = this.config.id || De([this.machine.key], ve(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, Le || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ui(this.config.states, function(p, m) {
      var x, S = new r(p, {}, void 0, { parent: c, key: m });
      return Object.assign(c.idMap, X((x = {}, x[S.id] = S, x), S.idMap)), S;
    }) : di;
    var g = 0;
    function h(p) {
      var m, x;
      p.order = g++;
      try {
        for (var S = me(zn(p)), M = S.next(); !M.done; M = S.next()) {
          var A = M.value;
          h(A);
        }
      } catch (T) {
        m = { error: T };
      } finally {
        try {
          M && !M.done && (x = S.return) && x.call(S);
        } finally {
          if (m)
            throw m.error;
        }
      }
    }
    u(h, "dfs"), h(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(p) {
      var m = p.event;
      return m === hi;
    }) : hi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ft(this.config.entry || this.config.onEntry).map(function(p) {
      return ci(p);
    }), this.onExit = Ft(this.config.exit || this.config.onExit).map(function(p) {
      return ci(p);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ft(this.config.invoke).map(function(p, m) {
      var x, S;
      if (Or(p)) {
        var M = Qi(c.id, m);
        return c.machine.options.services = X((x = {}, x[M] = p, x), c.machine.options.services), oo({ src: M, id: M });
      } else if (ge(p.src)) {
        var M = p.id || Qi(c.id, m);
        return oo(X(X({}, p), { id: M, src: p.src }));
      } else if (Or(p.src) || Te(p.src)) {
        var M = p.id || Qi(c.id, m);
        return c.machine.options.services = X((S = {}, S[M] = p.src, S), c.machine.options.services), oo(X(X({ id: M }, p), { src: M }));
      } else {
        var A = p.src;
        return oo(X(X({ id: Qi(c.id, m) }, p), { src: A }));
      }
    }), this.activities = Ft(this.config.activities).concat(this.invoke).map(function(p) {
      return Da(p);
    }), this.transition = this.transition.bind(this), this.tags = Ft(this.config.tags);
  }
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Ks(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, g = i.services, h = i.delays;
    return new r(this.config, { actions: X(X({}, l), e.actions), activities: X(X({}, c), e.activities), guards: X(X({}, f), e.guards), services: X(X({}, g), e.services), delays: X(X({}, h), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Te(this._context) ? this._context() : this._context;
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
      var g = Te(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, h = Tc(g, e.id);
      return e.onEntry.push(Zs(h, { delay: c })), e.onExit.push(xc(h)), h;
    }, "mutateEntryExit"), l = Lr(t) ? t.map(function(c, f) {
      var g = i(c.delay, f);
      return X(X({}, c), { event: g });
    }) : Ne(Object.keys(t).map(function(c, f) {
      var g = t[c], h = ge(g) ? { target: g } : g, p = isNaN(+c) ? c : +c, m = i(p, f);
      return Ft(h).map(function(x) {
        return X(X({}, x), { event: m, delay: p });
      });
    }));
    return l.map(function(c) {
      var f = c.delay;
      return X(X({}, e.formatTransition(c)), { delay: f });
    });
  }, r.prototype.getStateNodes = function(e) {
    var t, i = this;
    if (!e)
      return [];
    var l = e instanceof yr ? e.value : li(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var f = Object.keys(l), g = [this];
    return g.push.apply(g, De([], ve(Ne(f.map(function(h) {
      return i.getStateNode(h).getStateNodes(l[h]);
    }))), false)), g;
  }, r.prototype.handles = function(e) {
    var t = Ca(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof yr ? e : yr.create(e), i = Array.from(Dn([], this.getStateNodes(t.value)));
    return new yr(X(X({}, t), { value: this.resolve(t.value), configuration: i, done: kn(i, this), tags: Qs(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var g = me(Object.keys(e)), h = g.next(); !h.done; h = g.next()) {
        var p = h.value, m = e[p];
        if (!!m) {
          var x = this.getStateNode(p), S = x._transition(m, t, i);
          S && (f[p] = S);
        }
      }
    } catch (D) {
      l = { error: D };
    } finally {
      try {
        h && !h.done && (c = g.return) && c.call(g);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var M = Object.keys(f).map(function(D) {
      return f[D];
    }), A = Ne(M.map(function(D) {
      return D.transitions;
    })), T = M.some(function(D) {
      return D.transitions.length > 0;
    });
    if (!T)
      return this.next(t, i);
    var P = Ne(M.map(function(D) {
      return D.entrySet;
    })), _ = Ne(Object.keys(f).map(function(D) {
      return f[D].configuration;
    }));
    return { transitions: A, entrySet: P, exitSet: Ne(M.map(function(D) {
      return D.exitSet;
    })), configuration: _, source: t, actions: Ne(Object.keys(f).map(function(D) {
      return f[D].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, et(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, g = [], h = [], p;
    try {
      for (var m = me(this.getCandidates(f)), x = m.next(); !x.done; x = m.next()) {
        var S = x.value, M = S.cond, A = S.in, T = e.context, P = A ? ge(A) && fi(A) ? e.matches(li(this.getStateNodeById(A).path, this.delimiter)) : Xi(li(A, this.delimiter), uc(this.path.slice(0, -2))(e.value)) : true, _ = false;
        try {
          _ = !M || Ia(this.machine, M, T, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(M.name || M.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (_ && P) {
          S.target !== void 0 && (h = S.target), g.push.apply(g, De([], ve(S.actions), false)), p = S;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        x && !x.done && (l = m.return) && l.call(m);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!p) {
      if (!h.length)
        return { transitions: [p], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: g };
      var D = Ne(h.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), L = !!p.internal, C = L ? [] : Ne(D.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [p], entrySet: C, exitSet: L ? [] : [this], configuration: D, source: e, actions: g };
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
    var c, f, g, h, p = Dn([], l ? this.getStateNodes(l.value) : [this]), m = e.configuration.length ? Dn(p, e.configuration) : p;
    try {
      for (var x = me(m), S = x.next(); !S.done; S = x.next()) {
        var M = S.value;
        no(p, M) || e.entrySet.push(M);
      }
    } catch (Y) {
      c = { error: Y };
    } finally {
      try {
        S && !S.done && (f = x.return) && f.call(x);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var A = me(p), T = A.next(); !T.done; T = A.next()) {
        var M = T.value;
        (!no(m, M) || no(e.exitSet, M.parent)) && e.exitSet.push(M);
      }
    } catch (Y) {
      g = { error: Y };
    } finally {
      try {
        T && !T.done && (h = A.return) && h.call(A);
      } finally {
        if (g)
          throw g.error;
      }
    }
    var P = Ne(e.entrySet.map(function(Y) {
      var V = [];
      if (Y.type !== "final")
        return V;
      var H = Y.parent;
      if (!H.parent)
        return V;
      V.push(to(Y.id, Y.doneData), to(H.id, Y.doneData ? Mn(Y.doneData, t, i) : void 0));
      var W = H.parent;
      return W.type === "parallel" && zn(W).every(function(ie) {
        return kn(e.configuration, ie);
      }) && V.push(to(W.id)), V;
    }));
    e.exitSet.sort(function(Y, V) {
      return V.order - Y.order;
    }), e.entrySet.sort(function(Y, V) {
      return Y.order - V.order;
    });
    var _ = new Set(e.entrySet), D = new Set(e.exitSet), L = ve([Ne(Array.from(_).map(function(Y) {
      return De(De([], ve(Y.activities.map(function(V) {
        return Ec(V);
      })), false), ve(Y.onEntry), false);
    })).concat(P.map(wc)), Ne(Array.from(D).map(function(Y) {
      return De(De([], ve(Y.onExit), false), ve(Y.activities.map(function(V) {
        return Sc(V);
      })), false);
    }))], 2), C = L[0], B = L[1], R = eo(B.concat(e.actions).concat(C), this.machine.options.actions);
    return R;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = et(t), c;
    if (e instanceof yr)
      c = i === void 0 ? e : this.resolveState(yr.from(e, i));
    else {
      var f = ge(e) ? this.resolve(Yi(this.getResolvedPath(e))) : this.resolve(e), g = i != null ? i : this.machine.context;
      c = this.resolveState(yr.from(f, g));
    }
    if (!Le && l.name === ao)
      throw new Error("An event cannot have the wildcard type ('".concat(ao, "')"));
    if (this.strict && !this.events.includes(l.name) && !dc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var h = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, p = Dn([], this.getStateNodes(c.value)), m = h.configuration.length ? Dn(p, h.configuration) : p;
    return h.configuration = De([], ve(m), false), this.resolveTransition(h, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], ve(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, g = this;
    l === void 0 && (l = In);
    var h = e.configuration, p = !t || e.transitions.length > 0, m = p ? zc(this.machine, h) : void 0, x = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, S = this.getActions(e, i, l, t), M = t ? X({}, t.activities) : {};
    try {
      for (var A = me(S), T = A.next(); !T.done; T = A.next()) {
        var P = T.value;
        P.type === Wi ? M[P.activity.id || P.activity.type] = P : P.type === ai && (M[P.activity.id || P.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        T && !T.done && (f = A.return) && f.call(A);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var _ = ve(za(this, t, i, l, S, this.machine.config.preserveActionOrder), 2), D = _[0], L = _[1], C = ve(Ma(D, function(fe) {
      return fe.type === si || fe.type === On && fe.to === nn.Internal;
    }), 2), B = C[0], R = C[1], Y = D.filter(function(fe) {
      var Xe;
      return fe.type === Wi && ((Xe = fe.activity) === null || Xe === void 0 ? void 0 : Xe.type) === Ui;
    }), V = Y.reduce(function(fe, Xe) {
      return fe[Xe.activity.id] = Mc(Xe.activity, g.machine, L, l), fe;
    }, t ? X({}, t.children) : {}), H = p ? e.configuration : t ? t.configuration : [], W = kn(H, this), ie = new yr({ value: m || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: m ? x ? mc(x, m) : void 0 : t ? t.historyValue : void 0, history: !m || e.source ? t : void 0, actions: m ? R : [], activities: m ? M : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: W, tags: Qs(H), machine: this }), oe = i !== L;
    ie.changed = l.name === Vi || oe;
    var U = ie.history;
    U && delete U.history;
    var ce = !W && (this._transient || h.some(function(fe) {
      return fe._transient;
    }));
    if (!p && (!ce || l.name === hi))
      return ie;
    var Re = ie;
    if (!W)
      for (ce && (Re = this.resolveRaisedTransition(Re, { type: ic }, l)); B.length; ) {
        var We = B.shift();
        Re = this.resolveRaisedTransition(Re, We._event, l);
      }
    var qe = Re.changed || (U ? !!Re.actions.length || oe || typeof U.value != typeof Re.value || !el(Re.value, U.value) : void 0);
    return Re.changed = qe, Re.history = U, Re;
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
    var t = fi(e) ? e.slice(nl.length) : e;
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
    for (var t = Oa(e, this.delimiter).slice(), i = this; t.length; ) {
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
        if (ge(e)) {
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
      var t = this.machine.idMap[e.slice(nl.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Oa(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = Vs(this.states, function(i) {
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
      ge(t.target) ? e = fi(t.target) ? Yi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (ro(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Zi(this.initialStateValue);
    return Ne(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = ve(e), i = t[0], l = t.slice(1);
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
      return { current: e || this.initialStateValue, states: Vs(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = ge(e) ? void 0 : e[i];
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
      return l ? Ne(Zi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = cc(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Zi(c).map(function(f) {
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
        for (var g = me(Object.keys(c)), h = g.next(); !h.done; h = g.next()) {
          var p = h.value, m = c[p];
          if (m.states)
            try {
              for (var x = (i = void 0, me(m.events)), S = x.next(); !S.done; S = x.next()) {
                var M = S.value;
                f.add("".concat(M));
              }
            } catch (A) {
              i = { error: A };
            } finally {
              try {
                S && !S.done && (l = x.return) && l.call(x);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (A) {
        e = { error: A };
      } finally {
        try {
          h && !h.done && (t = g.return) && t.call(g);
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
        if (!ge(i))
          return i;
        var l = i[0] === t.delimiter;
        if (l && !t.parent)
          return t.getStateNodeByPath(i.slice(1));
        var c = l ? t.key + i : i;
        if (t.parent)
          try {
            var f = t.parent.getStateNodeByPath(c);
            return f;
          } catch (g) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(g.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = bc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(h) {
      return ge(h) && h[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), g = X(X({}, e), { actions: eo(Ft(e.actions)), cond: Pa(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
      return X(X({}, g), { target: g.target ? g.target.map(function(h) {
        return "#".concat(h.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return g;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, f = ao, g = c[f], h = g === void 0 ? [] : g, p = oi(c, [typeof f == "symbol" ? f : f + ""]);
      l = Ne(Object.keys(p).map(function(D) {
        !Le && D === hi && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = Pn(D, p[D]);
        return Le || mh(i, D, L), L;
      }).concat(Pn(ao, h)));
    }
    var m = this.config.always ? Pn("", this.config.always) : [], x = this.config.onDone ? Pn(String(to(this.id)), this.config.onDone) : [];
    Le || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var S = Ne(this.invoke.map(function(D) {
      var L = [];
      return D.onDone && L.push.apply(L, De([], ve(Pn(String(pi(D.id)), D.onDone)), false)), D.onError && L.push.apply(L, De([], ve(Pn(String(An(D.id)), D.onError)), false)), L;
    })), M = this.after, A = Ne(De(De(De(De([], ve(x), false), ve(S), false), ve(l), false), ve(m), false).map(function(D) {
      return Ft(D).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var T = me(M), P = T.next(); !P.done; P = T.next()) {
        var _ = P.value;
        A.push(_);
      }
    } catch (D) {
      e = { error: D };
    } finally {
      try {
        P && !P.done && (t = T.return) && t.call(T);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return A;
  }, r;
}();
function bt(r, e) {
  return new jc(r, e);
}
u(bt, "createMachine");
var so = ii(Ra(), 1);
var Na = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var ol = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
      this.draggableMachine = bt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, so.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Na(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), ol(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
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
        (0, so.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Na(this.dropzone), isOnPaletteDropzone: () => ol(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Na(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = ot(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Qe(i.value)}`);
      });
    }
    get draggable() {
      return this.draggableService.state !== void 0;
    }
    set draggable(i) {
      this.maybeStartDraggableStateMachine(), i ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    maybeStartDraggableStateMachine() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let i = this.parentElement;
      return ee.notNull(i), !ol(i) && !Na(i) ? null : i;
    }
    set snapTargets(i) {
      (0, so.default)(this).draggable({ modifiers: [so.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return this.offsetWidth;
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
  return u(e, "DraggableMixinClass"), z([G], e.prototype, "operationX", 2), z([G], e.prototype, "operationY", 2), z([G], e.prototype, "grabbed", 2), z([G], e.prototype, "dragging", 2), z([G], e.prototype, "snapped", 2), z([G], e.prototype, "bit", 2), z([G], e.prototype, "debugDraggable", 2), e;
}
u(Me, "DraggableMixin");
var Rn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Hc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  return u(e, "FlaggableMixinClass"), z([G], e.prototype, "flag", 2), e;
}
u(Hc, "FlaggableMixin");
var Fe = "top";
var tt = "bottom";
var Ze = "right";
var Ve = "left";
var Ga = "auto";
var on = [Fe, tt, Ze, Ve];
var jr = "start";
var Nn = "end";
var $c = "clippingParents";
var qa = "viewport";
var mi = "popper";
var Fc = "reference";
var al = on.reduce(function(r, e) {
  return r.concat([e + "-" + jr, e + "-" + Nn]);
}, []);
var La = [].concat(on, [Ga]).reduce(function(r, e) {
  return r.concat([e, e + "-" + jr, e + "-" + Nn]);
}, []);
var vh = "beforeRead";
var gh = "read";
var bh = "afterRead";
var yh = "beforeMain";
var wh = "main";
var xh = "afterMain";
var Eh = "beforeWrite";
var Sh = "write";
var Th = "afterWrite";
var Wc = [vh, gh, bh, yh, wh, xh, Eh, Sh, Th];
function at(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
u(at, "getNodeName");
function Ye(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
u(Ye, "getWindow");
function Mr(r) {
  var e = Ye(r).Element;
  return r instanceof e || r instanceof Element;
}
u(Mr, "isElement");
function rt(r) {
  var e = Ye(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
u(rt, "isHTMLElement");
function ja(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Ye(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
u(ja, "isShadowRoot");
function Ch(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !rt(c) || !at(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var g = l[f];
      g === false ? c.removeAttribute(f) : c.setAttribute(f, g === true ? "" : g);
    }));
  });
}
u(Ch, "applyStyles");
function Oh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, f = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), g = f.reduce(function(h, p) {
        return h[p] = "", h;
      }, {});
      !rt(l) || !at(l) || (Object.assign(l.style, g), Object.keys(c).forEach(function(h) {
        l.removeAttribute(h);
      }));
    });
  };
}
u(Oh, "effect");
var lo = { name: "applyStyles", enabled: true, phase: "write", fn: Ch, effect: Oh, requires: ["computeStyles"] };
function st(r) {
  return r.split("-")[0];
}
u(st, "getBasePlacement");
var wr = Math.max;
var Gn = Math.min;
var Br = Math.round;
function Kt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (rt(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Br(t.width) / f || 1), c > 0 && (l = Br(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
u(Kt, "getBoundingClientRect");
function qn(r) {
  var e = Kt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
u(qn, "getLayoutRect");
function uo(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && ja(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
u(uo, "contains");
function Pt(r) {
  return Ye(r).getComputedStyle(r);
}
u(Pt, "getComputedStyle");
function sl(r) {
  return ["table", "td", "th"].indexOf(at(r)) >= 0;
}
u(sl, "isTableElement");
function yt(r) {
  return ((Mr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
u(yt, "getDocumentElement");
function Hr(r) {
  return at(r) === "html" ? r : r.assignedSlot || r.parentNode || (ja(r) ? r.host : null) || yt(r);
}
u(Hr, "getParentNode");
function Uc(r) {
  return !rt(r) || Pt(r).position === "fixed" ? null : r.offsetParent;
}
u(Uc, "getTrueOffsetParent");
function Mh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && rt(r)) {
    var i = Pt(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Hr(r); rt(l) && ["html", "body"].indexOf(at(l)) < 0; ) {
    var c = Pt(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
u(Mh, "getContainingBlock");
function xr(r) {
  for (var e = Ye(r), t = Uc(r); t && sl(t) && Pt(t).position === "static"; )
    t = Uc(t);
  return t && (at(t) === "html" || at(t) === "body" && Pt(t).position === "static") ? e : t || Mh(r) || e;
}
u(xr, "getOffsetParent");
function Ln(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
u(Ln, "getMainAxisFromPlacement");
function jn(r, e, t) {
  return wr(r, Gn(e, t));
}
u(jn, "within");
function Vc(r, e, t) {
  var i = jn(r, e, t);
  return i > t ? t : i;
}
u(Vc, "withinMaxClamp");
function co() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
u(co, "getFreshSideObject");
function po(r) {
  return Object.assign({}, co(), r);
}
u(po, "mergePaddingObject");
function fo(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
u(fo, "expandToHashMap");
var Ph = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, po(typeof e != "number" ? e : fo(e, on));
}, "toPaddingObject");
function Ih(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, g = st(t.placement), h = Ln(g), p = [Ve, Ze].indexOf(g) >= 0, m = p ? "height" : "width";
  if (!(!c || !f)) {
    var x = Ph(l.padding, t), S = qn(c), M = h === "y" ? Fe : Ve, A = h === "y" ? tt : Ze, T = t.rects.reference[m] + t.rects.reference[h] - f[h] - t.rects.popper[m], P = f[h] - t.rects.reference[h], _ = xr(c), D = _ ? h === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, L = T / 2 - P / 2, C = x[M], B = D - S[m] - x[A], R = D / 2 - S[m] / 2 + L, Y = jn(C, R, B), V = h;
    t.modifiersData[i] = (e = {}, e[V] = Y, e.centerOffset = Y - R, e);
  }
}
u(Ih, "arrow");
function Ah(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !uo(e.elements.popper, l) || (e.elements.arrow = l));
}
u(Ah, "effect");
var Yc = { name: "arrow", enabled: true, phase: "main", fn: Ih, effect: Ah, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qt(r) {
  return r.split("-")[1];
}
u(Qt, "getVariation");
var _h = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function zh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Br(e * l) / l || 0, y: Br(t * l) / l || 0 };
}
u(zh, "roundOffsetsByDPR");
function Xc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, g = r.position, h = r.gpuAcceleration, p = r.adaptive, m = r.roundOffsets, x = r.isFixed, S = f.x, M = S === void 0 ? 0 : S, A = f.y, T = A === void 0 ? 0 : A, P = typeof m == "function" ? m({ x: M, y: T }) : { x: M, y: T };
  M = P.x, T = P.y;
  var _ = f.hasOwnProperty("x"), D = f.hasOwnProperty("y"), L = Ve, C = Fe, B = window;
  if (p) {
    var R = xr(t), Y = "clientHeight", V = "clientWidth";
    if (R === Ye(t) && (R = yt(t), Pt(R).position !== "static" && g === "absolute" && (Y = "scrollHeight", V = "scrollWidth")), R = R, l === Fe || (l === Ve || l === Ze) && c === Nn) {
      C = tt;
      var H = x && B.visualViewport ? B.visualViewport.height : R[Y];
      T -= H - i.height, T *= h ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === tt) && c === Nn) {
      L = Ze;
      var W = x && B.visualViewport ? B.visualViewport.width : R[V];
      M -= W - i.width, M *= h ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: g }, p && _h), oe = m === true ? zh({ x: M, y: T }) : { x: M, y: T };
  if (M = oe.x, T = oe.y, h) {
    var U;
    return Object.assign({}, ie, (U = {}, U[C] = D ? "0" : "", U[L] = _ ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + M + "px, " + T + "px)" : "translate3d(" + M + "px, " + T + "px, 0)", U));
  }
  return Object.assign({}, ie, (e = {}, e[C] = D ? T + "px" : "", e[L] = _ ? M + "px" : "", e.transform = "", e));
}
u(Xc, "mapToStyles");
function Dh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, g = t.roundOffsets, h = g === void 0 ? true : g;
  if (false)
    var p;
  var m = { placement: st(e.placement), variation: Qt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Xc(Object.assign({}, m, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: h })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Xc(Object.assign({}, m, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: h })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
u(Dh, "computeStyles");
var Zc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Dh, data: {} };
var Ba = { passive: true };
function kh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, g = f === void 0 ? true : f, h = Ye(e.elements.popper), p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && p.forEach(function(m) {
    m.addEventListener("scroll", t.update, Ba);
  }), g && h.addEventListener("resize", t.update, Ba), function() {
    c && p.forEach(function(m) {
      m.removeEventListener("scroll", t.update, Ba);
    }), g && h.removeEventListener("resize", t.update, Ba);
  };
}
u(kh, "effect");
var Jc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: kh, data: {} };
var Rh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Rh[e];
  });
}
u(vi, "getOppositePlacement");
var Nh = { start: "end", end: "start" };
function Ha(r) {
  return r.replace(/start|end/g, function(e) {
    return Nh[e];
  });
}
u(Ha, "getOppositeVariationPlacement");
function Bn(r) {
  var e = Ye(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
u(Bn, "getWindowScroll");
function Hn(r) {
  return Kt(yt(r)).left + Bn(r).scrollLeft;
}
u(Hn, "getWindowScrollBarX");
function ll(r) {
  var e = Ye(r), t = yt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, g = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, g = i.offsetTop)), { width: l, height: c, x: f + Hn(r), y: g };
}
u(ll, "getViewportRect");
function ul(r) {
  var e, t = yt(r), i = Bn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = wr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = wr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), g = -i.scrollLeft + Hn(r), h = -i.scrollTop;
  return Pt(l || t).direction === "rtl" && (g += wr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: g, y: h };
}
u(ul, "getDocumentRect");
function $n(r) {
  var e = Pt(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
u($n, "isScrollParent");
function $a(r) {
  return ["html", "body", "#document"].indexOf(at(r)) >= 0 ? r.ownerDocument.body : rt(r) && $n(r) ? r : $a(Hr(r));
}
u($a, "getScrollParent");
function an(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = $a(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Ye(i), f = l ? [c].concat(c.visualViewport || [], $n(i) ? i : []) : i, g = e.concat(f);
  return l ? g : g.concat(an(Hr(f)));
}
u(an, "listScrollParents");
function gi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
u(gi, "rectToClientRect");
function Gh(r) {
  var e = Kt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
u(Gh, "getInnerBoundingClientRect");
function Kc(r, e) {
  return e === qa ? gi(ll(r)) : Mr(e) ? Gh(e) : gi(ul(yt(r)));
}
u(Kc, "getClientRectFromMixedType");
function qh(r) {
  var e = an(Hr(r)), t = ["absolute", "fixed"].indexOf(Pt(r).position) >= 0, i = t && rt(r) ? xr(r) : r;
  return Mr(i) ? e.filter(function(l) {
    return Mr(l) && uo(l, i) && at(l) !== "body";
  }) : [];
}
u(qh, "getClippingParents");
function cl(r, e, t) {
  var i = e === "clippingParents" ? qh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(g, h) {
    var p = Kc(r, h);
    return g.top = wr(p.top, g.top), g.right = Gn(p.right, g.right), g.bottom = Gn(p.bottom, g.bottom), g.left = wr(p.left, g.left), g;
  }, Kc(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
u(cl, "getClippingRect");
function ho(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? st(i) : null, c = i ? Qt(i) : null, f = e.x + e.width / 2 - t.width / 2, g = e.y + e.height / 2 - t.height / 2, h;
  switch (l) {
    case Fe:
      h = { x: f, y: e.y - t.height };
      break;
    case tt:
      h = { x: f, y: e.y + e.height };
      break;
    case Ze:
      h = { x: e.x + e.width, y: g };
      break;
    case Ve:
      h = { x: e.x - t.width, y: g };
      break;
    default:
      h = { x: e.x, y: e.y };
  }
  var p = l ? Ln(l) : null;
  if (p != null) {
    var m = p === "y" ? "height" : "width";
    switch (c) {
      case jr:
        h[p] = h[p] - (e[m] / 2 - t[m] / 2);
        break;
      case Nn:
        h[p] = h[p] + (e[m] / 2 - t[m] / 2);
        break;
      default:
    }
  }
  return h;
}
u(ho, "computeOffsets");
function Er(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? $c : c, g = t.rootBoundary, h = g === void 0 ? qa : g, p = t.elementContext, m = p === void 0 ? mi : p, x = t.altBoundary, S = x === void 0 ? false : x, M = t.padding, A = M === void 0 ? 0 : M, T = po(typeof A != "number" ? A : fo(A, on)), P = m === mi ? Fc : mi, _ = r.rects.popper, D = r.elements[S ? P : m], L = cl(Mr(D) ? D : D.contextElement || yt(r.elements.popper), f, h), C = Kt(r.elements.reference), B = ho({ reference: C, element: _, strategy: "absolute", placement: l }), R = gi(Object.assign({}, _, B)), Y = m === mi ? R : C, V = { top: L.top - Y.top + T.top, bottom: Y.bottom - L.bottom + T.bottom, left: L.left - Y.left + T.left, right: Y.right - L.right + T.right }, H = r.modifiersData.offset;
  if (m === mi && H) {
    var W = H[l];
    Object.keys(V).forEach(function(ie) {
      var oe = [Ze, tt].indexOf(ie) >= 0 ? 1 : -1, U = [Fe, tt].indexOf(ie) >= 0 ? "y" : "x";
      V[ie] += W[U] * oe;
    });
  }
  return V;
}
u(Er, "detectOverflow");
function pl(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, g = t.flipVariations, h = t.allowedAutoPlacements, p = h === void 0 ? La : h, m = Qt(i), x = m ? g ? al : al.filter(function(A) {
    return Qt(A) === m;
  }) : on, S = x.filter(function(A) {
    return p.indexOf(A) >= 0;
  });
  S.length === 0 && (S = x);
  var M = S.reduce(function(A, T) {
    return A[T] = Er(r, { placement: T, boundary: l, rootBoundary: c, padding: f })[st(T)], A;
  }, {});
  return Object.keys(M).sort(function(A, T) {
    return M[A] - M[T];
  });
}
u(pl, "computeAutoPlacement");
function Lh(r) {
  if (st(r) === Ga)
    return [];
  var e = vi(r);
  return [Ha(r), e, Ha(e)];
}
u(Lh, "getExpandedFallbackPlacements");
function jh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, g = f === void 0 ? true : f, h = t.fallbackPlacements, p = t.padding, m = t.boundary, x = t.rootBoundary, S = t.altBoundary, M = t.flipVariations, A = M === void 0 ? true : M, T = t.allowedAutoPlacements, P = e.options.placement, _ = st(P), D = _ === P, L = h || (D || !A ? [vi(P)] : Lh(P)), C = [P].concat(L).reduce(function(K, Tt) {
      return K.concat(st(Tt) === Ga ? pl(e, { placement: Tt, boundary: m, rootBoundary: x, padding: p, flipVariations: A, allowedAutoPlacements: T }) : Tt);
    }, []), B = e.rects.reference, R = e.rects.popper, Y = /* @__PURE__ */ new Map(), V = true, H = C[0], W = 0; W < C.length; W++) {
      var ie = C[W], oe = st(ie), U = Qt(ie) === jr, ce = [Fe, tt].indexOf(oe) >= 0, Re = ce ? "width" : "height", We = Er(e, { placement: ie, boundary: m, rootBoundary: x, altBoundary: S, padding: p }), qe = ce ? U ? Ze : Ve : U ? tt : Fe;
      B[Re] > R[Re] && (qe = vi(qe));
      var fe = vi(qe), Xe = [];
      if (c && Xe.push(We[oe] <= 0), g && Xe.push(We[qe] <= 0, We[fe] <= 0), Xe.every(function(K) {
        return K;
      })) {
        H = ie, V = false;
        break;
      }
      Y.set(ie, Xe);
    }
    if (V)
      for (var Ke = A ? 3 : 1, Gt = u(function(Tt) {
        var Ct = C.find(function(zr) {
          var Vt = Y.get(zr);
          if (Vt)
            return Vt.slice(0, Tt).every(function(hr) {
              return hr;
            });
        });
        if (Ct)
          return H = Ct, "break";
      }, "_loop"), _t = Ke; _t > 0; _t--) {
        var _r = Gt(_t);
        if (_r === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
u(jh, "flip");
var Qc = { name: "flip", enabled: true, phase: "main", fn: jh, requiresIfExists: ["offset"], data: { _skip: false } };
function ep(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
u(ep, "getSideOffsets");
function tp(r) {
  return [Fe, Ze, tt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
u(tp, "isAnySideFullyClipped");
function Bh(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = Er(e, { elementContext: "reference" }), g = Er(e, { altBoundary: true }), h = ep(f, i), p = ep(g, l, c), m = tp(h), x = tp(p);
  e.modifiersData[t] = { referenceClippingOffsets: h, popperEscapeOffsets: p, isReferenceHidden: m, hasPopperEscaped: x }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": m, "data-popper-escaped": x });
}
u(Bh, "hide");
var rp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Bh };
function Hh(r, e, t) {
  var i = st(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], g = c[1];
  return f = f || 0, g = (g || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: g, y: f } : { x: f, y: g };
}
u(Hh, "distanceAndSkiddingToXY");
function $h(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = La.reduce(function(m, x) {
    return m[x] = Hh(x, e.rects, c), m;
  }, {}), g = f[e.placement], h = g.x, p = g.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += h, e.modifiersData.popperOffsets.y += p), e.modifiersData[i] = f;
}
u($h, "offset");
var np = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: $h };
function Fh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = ho({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
u(Fh, "popperOffsets");
var ip = { name: "popperOffsets", enabled: true, phase: "read", fn: Fh, data: {} };
function dl(r) {
  return r === "x" ? "y" : "x";
}
u(dl, "getAltAxis");
function Wh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, g = f === void 0 ? false : f, h = t.boundary, p = t.rootBoundary, m = t.altBoundary, x = t.padding, S = t.tether, M = S === void 0 ? true : S, A = t.tetherOffset, T = A === void 0 ? 0 : A, P = Er(e, { boundary: h, rootBoundary: p, padding: x, altBoundary: m }), _ = st(e.placement), D = Qt(e.placement), L = !D, C = Ln(_), B = dl(C), R = e.modifiersData.popperOffsets, Y = e.rects.reference, V = e.rects.popper, H = typeof T == "function" ? T(Object.assign({}, e.rects, { placement: e.placement })) : T, W = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ie = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!R) {
    if (c) {
      var U, ce = C === "y" ? Fe : Ve, Re = C === "y" ? tt : Ze, We = C === "y" ? "height" : "width", qe = R[C], fe = qe + P[ce], Xe = qe - P[Re], Ke = M ? -V[We] / 2 : 0, Gt = D === jr ? Y[We] : V[We], _t = D === jr ? -V[We] : -Y[We], _r = e.elements.arrow, K = M && _r ? qn(_r) : { width: 0, height: 0 }, Tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : co(), Ct = Tt[ce], zr = Tt[Re], Vt = jn(0, Y[We], K[We]), hr = L ? Y[We] / 2 - Ke - Vt - Ct - W.mainAxis : Gt - Vt - Ct - W.mainAxis, mr = L ? -Y[We] / 2 + Ke + Vt + zr + W.mainAxis : _t + Vt + zr + W.mainAxis, qt = e.elements.arrow && xr(e.elements.arrow), Vn = qt ? C === "y" ? qt.clientTop || 0 : qt.clientLeft || 0 : 0, zt = (U = ie == null ? void 0 : ie[C]) != null ? U : 0, fn = qe + hr - zt - Vn, we = qe + mr - zt, Vr = jn(M ? Gn(fe, fn) : fe, qe, M ? wr(Xe, we) : Xe);
      R[C] = Vr, oe[C] = Vr - qe;
    }
    if (g) {
      var Yr, Dt = C === "x" ? Fe : Ve, hn = C === "x" ? tt : Ze, vr = R[B], gr = B === "y" ? "height" : "width", mn = vr + P[Dt], pt = vr - P[hn], Dr = [Fe, Ve].indexOf(_) !== -1, Lt = (Yr = ie == null ? void 0 : ie[B]) != null ? Yr : 0, Yn = Dr ? mn : vr - Y[gr] - V[gr] - Lt + W.altAxis, kr = Dr ? vr + Y[gr] + V[gr] - Lt - W.altAxis : pt, vn = M && Dr ? Vc(Yn, vr, kr) : jn(M ? Yn : mn, vr, M ? kr : pt);
      R[B] = vn, oe[B] = vn - vr;
    }
    e.modifiersData[i] = oe;
  }
}
u(Wh, "preventOverflow");
var op = { name: "preventOverflow", enabled: true, phase: "main", fn: Wh, requiresIfExists: ["offset"] };
function fl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
u(fl, "getHTMLElementScroll");
function hl(r) {
  return r === Ye(r) || !rt(r) ? Bn(r) : fl(r);
}
u(hl, "getNodeScroll");
function Uh(r) {
  var e = r.getBoundingClientRect(), t = Br(e.width) / r.offsetWidth || 1, i = Br(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
u(Uh, "isElementScaled");
function ml(r, e, t) {
  t === void 0 && (t = false);
  var i = rt(e), l = rt(e) && Uh(e), c = yt(e), f = Kt(r, l), g = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 };
  return (i || !i && !t) && ((at(e) !== "body" || $n(c)) && (g = hl(e)), rt(e) ? (h = Kt(e, true), h.x += e.clientLeft, h.y += e.clientTop) : c && (h.x = Hn(c))), { x: f.left + g.scrollLeft - h.x, y: f.top + g.scrollTop - h.y, width: f.width, height: f.height };
}
u(ml, "getCompositeRect");
function Vh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(g) {
      if (!t.has(g)) {
        var h = e.get(g);
        h && l(h);
      }
    }), i.push(c);
  }
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
u(Vh, "order");
function vl(r) {
  var e = Vh(r);
  return Wc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
u(vl, "orderModifiers");
function gl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
u(gl, "debounce");
function bl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
u(bl, "mergeByName");
var ap = { placement: "bottom", modifiers: [], strategy: "absolute" };
function sp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
u(sp, "areValidElements");
function lp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? ap : l;
  return u(function(g, h, p) {
    p === void 0 && (p = c);
    var m = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ap, c), modifiersData: {}, elements: { reference: g, popper: h }, attributes: {}, styles: {} }, x = [], S = false, M = { state: m, setOptions: u(function(_) {
      var D = typeof _ == "function" ? _(m.options) : _;
      T(), m.options = Object.assign({}, c, m.options, D), m.scrollParents = { reference: Mr(g) ? an(g) : g.contextElement ? an(g.contextElement) : [], popper: an(h) };
      var L = vl(bl([].concat(i, m.options.modifiers)));
      if (m.orderedModifiers = L.filter(function(ie) {
        return ie.enabled;
      }), false) {
        var C;
        if (getBasePlacement(m.options.placement) === auto)
          var B;
        var R, Y, V, H, W;
      }
      return A(), M.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!S) {
        var _ = m.elements, D = _.reference, L = _.popper;
        if (!!sp(D, L)) {
          m.rects = { reference: ml(D, xr(L), m.options.strategy === "fixed"), popper: qn(L) }, m.reset = false, m.placement = m.options.placement, m.orderedModifiers.forEach(function(ie) {
            return m.modifiersData[ie.name] = Object.assign({}, ie.data);
          });
          for (var C = 0, B = 0; B < m.orderedModifiers.length; B++) {
            if (m.reset === true) {
              m.reset = false, B = -1;
              continue;
            }
            var R = m.orderedModifiers[B], Y = R.fn, V = R.options, H = V === void 0 ? {} : V, W = R.name;
            typeof Y == "function" && (m = Y({ state: m, options: H, name: W, instance: M }) || m);
          }
        }
      }
    }, "forceUpdate"), update: gl(function() {
      return new Promise(function(P) {
        M.forceUpdate(), P(m);
      });
    }), destroy: u(function() {
      T(), S = true;
    }, "destroy") };
    if (!sp(g, h))
      return M;
    M.setOptions(p).then(function(P) {
      !S && p.onFirstUpdate && p.onFirstUpdate(P);
    });
    function A() {
      m.orderedModifiers.forEach(function(P) {
        var _ = P.name, D = P.options, L = D === void 0 ? {} : D, C = P.effect;
        if (typeof C == "function") {
          var B = C({ state: m, name: _, instance: M, options: L }), R = u(function() {
          }, "noopFn");
          x.push(B || R);
        }
      });
    }
    u(A, "runModifierEffects");
    function T() {
      x.forEach(function(P) {
        return P();
      }), x = [];
    }
    return u(T, "cleanupModifierEffects"), M;
  }, "createPopper");
}
u(lp, "popperGenerator");
var Yh = [Jc, ip, Zc, lo, np, Qc, op, Yc, rp];
var yl = lp({ defaultModifiers: Yh });
var It = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Xh = "tippy-box";
var bp = "tippy-content";
var Zh = "tippy-backdrop";
var yp = "tippy-arrow";
var wp = "tippy-svg-arrow";
var Fn = { passive: true, capture: true };
var xp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function wl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
u(wl, "getValueAtIndexOrReturn");
function Ol(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
u(Ol, "isType");
function Ep(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
u(Ep, "invokeWithArgsOrReturn");
function up(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
u(up, "debounce");
function Jh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
u(Jh, "removeProperties");
function Kh(r) {
  return r.split(/\s+/).filter(Boolean);
}
u(Kh, "splitBySpaces");
function Wn(r) {
  return [].concat(r);
}
u(Wn, "normalizeToArray");
function cp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
u(cp, "pushIfUnique");
function Qh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
u(Qh, "unique");
function em(r) {
  return r.split("-")[0];
}
u(em, "getBasePlacement");
function Wa(r) {
  return [].slice.call(r);
}
u(Wa, "arrayFrom");
function pp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
u(pp, "removeUndefinedProps");
function bi() {
  return document.createElement("div");
}
u(bi, "div");
function Ua(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Ol(r, e);
  });
}
u(Ua, "isElement");
function tm(r) {
  return Ol(r, "NodeList");
}
u(tm, "isNodeList");
function rm(r) {
  return Ol(r, "MouseEvent");
}
u(rm, "isMouseEvent");
function nm(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
u(nm, "isReferenceElement");
function im(r) {
  return Ua(r) ? [r] : tm(r) ? Wa(r) : Array.isArray(r) ? r : Wa(document.querySelectorAll(r));
}
u(im, "getArrayOfElements");
function xl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
u(xl, "setTransitionDuration");
function dp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
u(dp, "setVisibilityState");
function om(r) {
  var e, t = Wn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
u(om, "getOwnerDocument");
function am(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, g = l.props, h = g.interactiveBorder, p = em(f.placement), m = f.modifiersData.offset;
    if (!m)
      return true;
    var x = p === "bottom" ? m.top.y : 0, S = p === "top" ? m.bottom.y : 0, M = p === "right" ? m.left.x : 0, A = p === "left" ? m.right.x : 0, T = c.top - i + x > h, P = i - c.bottom - S > h, _ = c.left - t + M > h, D = t - c.right - A > h;
    return T || P || _ || D;
  });
}
u(am, "isCursorOutsideInteractiveBorder");
function El(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
u(El, "updateTransitionEndListener");
function fp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
u(fp, "actualContains");
var Pr = { isTouch: false };
var hp = 0;
function sm() {
  Pr.isTouch || (Pr.isTouch = true, window.performance && document.addEventListener("mousemove", Sp));
}
u(sm, "onDocumentTouchStart");
function Sp() {
  var r = performance.now();
  r - hp < 20 && (Pr.isTouch = false, document.removeEventListener("mousemove", Sp)), hp = r;
}
u(Sp, "onDocumentMouseMove");
function lm() {
  var r = document.activeElement;
  if (nm(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
u(lm, "onWindowBlur");
function um() {
  document.addEventListener("touchstart", sm, Fn), window.addEventListener("blur", lm);
}
u(um, "bindGlobalEventListeners");
var cm = typeof window != "undefined" && typeof document != "undefined";
var pm = cm ? !!window.msCrypto : false;
var dm = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var fm = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Sr = Object.assign({ appendTo: xp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, dm, fm);
var hm = Object.keys(Sr);
var mm = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    Sr[i] = e[i];
  });
}, "setDefaultProps");
function Tp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var g;
      i[c] = r[c] !== void 0 ? r[c] : (g = Sr[c]) != null ? g : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
u(Tp, "getExtendedPassedProps");
function vm(r, e) {
  var t = e ? Object.keys(Tp(Object.assign({}, Sr, { plugins: e }))) : hm, i = t.reduce(function(l, c) {
    var f = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!f)
      return l;
    if (c === "content")
      l[c] = f;
    else
      try {
        l[c] = JSON.parse(f);
      } catch (g) {
        l[c] = f;
      }
    return l;
  }, {});
  return i;
}
u(vm, "getDataAttributeProps");
function mp(r, e) {
  var t = Object.assign({}, e, { content: Ep(e.content, [r]) }, e.ignoreAttributes ? {} : vm(r, e.plugins));
  return t.aria = Object.assign({}, Sr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
u(mp, "evaluateProps");
var gm = u(function() {
  return "innerHTML";
}, "innerHTML");
function Tl(r, e) {
  r[gm()] = e;
}
u(Tl, "dangerouslySetInnerHTML");
function vp(r) {
  var e = bi();
  return r === true ? e.className = yp : (e.className = wp, Ua(r) ? e.appendChild(r) : Tl(e, r)), e;
}
u(vp, "createArrowElement");
function gp(r, e) {
  Ua(e.content) ? (Tl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Tl(r, e.content) : r.textContent = e.content);
}
u(gp, "setContent");
function Cl(r) {
  var e = r.firstElementChild, t = Wa(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(bp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(yp) || i.classList.contains(wp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Zh);
  }) };
}
u(Cl, "getChildren");
function Cp(r) {
  var e = bi(), t = bi();
  t.className = Xh, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = bi();
  i.className = bp, i.setAttribute("data-state", "hidden"), gp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var g = Cl(e), h = g.box, p = g.content, m = g.arrow;
    f.theme ? h.setAttribute("data-theme", f.theme) : h.removeAttribute("data-theme"), typeof f.animation == "string" ? h.setAttribute("data-animation", f.animation) : h.removeAttribute("data-animation"), f.inertia ? h.setAttribute("data-inertia", "") : h.removeAttribute("data-inertia"), h.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? h.setAttribute("role", f.role) : h.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && gp(p, r.props), f.arrow ? m ? c.arrow !== f.arrow && (h.removeChild(m), h.appendChild(vp(f.arrow))) : h.appendChild(vp(f.arrow)) : m && h.removeChild(m);
  }
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
u(Cp, "render");
Cp.$$tippy = true;
var bm = 1;
var Fa = [];
var Sl = [];
function ym(r, e) {
  var t = mp(r, Object.assign({}, Sr, Tp(pp(e)))), i, l, c, f = false, g = false, h = false, p = false, m, x, S, M = [], A = up(fn, t.interactiveDebounce), T, P = bm++, _ = null, D = Qh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, C = { id: P, reference: r, popper: bi(), popperInstance: _, props: t, state: L, plugins: D, clearDelayTimeouts: Yn, setProps: kr, setContent: vn, show: Si, hide: Io, hideWithInteractivity: Ti, enable: Dr, disable: Lt, unmount: Ci, destroy: Ao };
  if (!t.render)
    return C;
  var B = t.render(C), R = B.popper, Y = B.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + C.id, C.popper = R, r._tippy = C, R._tippy = C;
  var V = D.map(function(j) {
    return j.fn(C);
  }), H = r.hasAttribute("aria-expanded");
  return qt(), Ke(), qe(), fe("onCreate", [C]), t.showOnCreate && mn(), R.addEventListener("mouseenter", function() {
    C.props.interactive && C.state.isVisible && C.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    C.props.interactive && C.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", A);
  }), C;
  function W() {
    var j = C.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  u(W, "getNormalizedTouchSettings");
  function ie() {
    return W()[0] === "hold";
  }
  u(ie, "getIsCustomTouchBehavior");
  function oe() {
    var j;
    return !!((j = C.props.render) != null && j.$$tippy);
  }
  u(oe, "getIsDefaultRenderFn");
  function U() {
    return T || r;
  }
  u(U, "getCurrentTarget");
  function ce() {
    var j = U().parentNode;
    return j ? om(j) : document;
  }
  u(ce, "getDocument");
  function Re() {
    return Cl(R);
  }
  u(Re, "getDefaultTemplateChildren");
  function We(j) {
    return C.state.isMounted && !C.state.isVisible || Pr.isTouch || m && m.type === "focus" ? 0 : wl(C.props.delay, j ? 0 : 1, Sr.delay);
  }
  u(We, "getDelay");
  function qe(j) {
    j === void 0 && (j = false), R.style.pointerEvents = C.props.interactive && !j ? "" : "none", R.style.zIndex = "" + C.props.zIndex;
  }
  u(qe, "handleStyles");
  function fe(j, te, ae) {
    if (ae === void 0 && (ae = true), V.forEach(function(he) {
      he[j] && he[j].apply(he, te);
    }), ae) {
      var ye;
      (ye = C.props)[j].apply(ye, te);
    }
  }
  u(fe, "invokeHook");
  function Xe() {
    var j = C.props.aria;
    if (!!j.content) {
      var te = "aria-" + j.content, ae = R.id, ye = Wn(C.props.triggerTarget || r);
      ye.forEach(function(he) {
        var dt = he.getAttribute(te);
        if (C.state.isVisible)
          he.setAttribute(te, dt ? dt + " " + ae : ae);
        else {
          var ft = dt && dt.replace(ae, "").trim();
          ft ? he.setAttribute(te, ft) : he.removeAttribute(te);
        }
      });
    }
  }
  u(Xe, "handleAriaContentAttribute");
  function Ke() {
    if (!(H || !C.props.aria.expanded)) {
      var j = Wn(C.props.triggerTarget || r);
      j.forEach(function(te) {
        C.props.interactive ? te.setAttribute("aria-expanded", C.state.isVisible && te === U() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  u(Ke, "handleAriaExpandedAttribute");
  function Gt() {
    ce().removeEventListener("mousemove", A), Fa = Fa.filter(function(j) {
      return j !== A;
    });
  }
  u(Gt, "cleanupInteractiveMouseListeners");
  function _t(j) {
    if (!(Pr.isTouch && (h || j.type === "mousedown"))) {
      var te = j.composedPath && j.composedPath()[0] || j.target;
      if (!(C.props.interactive && fp(R, te))) {
        if (Wn(C.props.triggerTarget || r).some(function(ae) {
          return fp(ae, te);
        })) {
          if (Pr.isTouch || C.state.isVisible && C.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [C, j]);
        C.props.hideOnClick === true && (C.clearDelayTimeouts(), C.hide(), g = true, setTimeout(function() {
          g = false;
        }), C.state.isMounted || Ct());
      }
    }
  }
  u(_t, "onDocumentPress");
  function _r() {
    h = true;
  }
  u(_r, "onTouchMove");
  function K() {
    h = false;
  }
  u(K, "onTouchStart");
  function Tt() {
    var j = ce();
    j.addEventListener("mousedown", _t, true), j.addEventListener("touchend", _t, Fn), j.addEventListener("touchstart", K, Fn), j.addEventListener("touchmove", _r, Fn);
  }
  u(Tt, "addDocumentPress");
  function Ct() {
    var j = ce();
    j.removeEventListener("mousedown", _t, true), j.removeEventListener("touchend", _t, Fn), j.removeEventListener("touchstart", K, Fn), j.removeEventListener("touchmove", _r, Fn);
  }
  u(Ct, "removeDocumentPress");
  function zr(j, te) {
    hr(j, function() {
      !C.state.isVisible && R.parentNode && R.parentNode.contains(R) && te();
    });
  }
  u(zr, "onTransitionedOut");
  function Vt(j, te) {
    hr(j, te);
  }
  u(Vt, "onTransitionedIn");
  function hr(j, te) {
    var ae = Re().box;
    function ye(he) {
      he.target === ae && (El(ae, "remove", ye), te());
    }
    if (u(ye, "listener"), j === 0)
      return te();
    El(ae, "remove", x), El(ae, "add", ye), x = ye;
  }
  u(hr, "onTransitionEnd");
  function mr(j, te, ae) {
    ae === void 0 && (ae = false);
    var ye = Wn(C.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, te, ae), M.push({ node: he, eventType: j, handler: te, options: ae });
    });
  }
  u(mr, "on");
  function qt() {
    ie() && (mr("touchstart", zt, { passive: true }), mr("touchend", we, { passive: true })), Kh(C.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (mr(j, zt), j) {
          case "mouseenter":
            mr("mouseleave", we);
            break;
          case "focus":
            mr(pm ? "focusout" : "blur", Vr);
            break;
          case "focusin":
            mr("focusout", Vr);
            break;
        }
    });
  }
  u(qt, "addListeners");
  function Vn() {
    M.forEach(function(j) {
      var te = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      te.removeEventListener(ae, ye, he);
    }), M = [];
  }
  u(Vn, "removeListeners");
  function zt(j) {
    var te, ae = false;
    if (!(!C.state.isEnabled || Yr(j) || g)) {
      var ye = ((te = m) == null ? void 0 : te.type) === "focus";
      m = j, T = j.currentTarget, Ke(), !C.state.isVisible && rm(j) && Fa.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (C.props.trigger.indexOf("mouseenter") < 0 || f) && C.props.hideOnClick !== false && C.state.isVisible ? ae = true : mn(j), j.type === "click" && (f = !ae), ae && !ye && pt(j);
    }
  }
  u(zt, "onTrigger");
  function fn(j) {
    var te = j.target, ae = U().contains(te) || R.contains(te);
    if (!(j.type === "mousemove" && ae)) {
      var ye = gr().concat(R).map(function(he) {
        var dt, ft = he._tippy, Xr = (dt = ft.popperInstance) == null ? void 0 : dt.state;
        return Xr ? { popperRect: he.getBoundingClientRect(), popperState: Xr, props: t } : null;
      }).filter(Boolean);
      am(ye, j) && (Gt(), pt(j));
    }
  }
  u(fn, "onMouseMove");
  function we(j) {
    var te = Yr(j) || C.props.trigger.indexOf("click") >= 0 && f;
    if (!te) {
      if (C.props.interactive) {
        C.hideWithInteractivity(j);
        return;
      }
      pt(j);
    }
  }
  u(we, "onMouseLeave");
  function Vr(j) {
    C.props.trigger.indexOf("focusin") < 0 && j.target !== U() || C.props.interactive && j.relatedTarget && R.contains(j.relatedTarget) || pt(j);
  }
  u(Vr, "onBlurOrFocusOut");
  function Yr(j) {
    return Pr.isTouch ? ie() !== j.type.indexOf("touch") >= 0 : false;
  }
  u(Yr, "isEventListenerStopped");
  function Dt() {
    hn();
    var j = C.props, te = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, dt = j.moveTransition, ft = oe() ? Cl(R).arrow : null, Xr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : r, Oi = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Rr) {
      var Zr = Rr.state;
      if (oe()) {
        var jt = Re(), Bt = jt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Yt) {
          Yt === "placement" ? Bt.setAttribute("data-placement", Zr.placement) : Zr.attributes.popper["data-popper-" + Yt] ? Bt.setAttribute("data-" + Yt, "") : Bt.removeAttribute("data-" + Yt);
        }), Zr.attributes.popper = {};
      }
    }, "fn") }, ht = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !dt } }, Oi];
    oe() && ft && ht.push({ name: "arrow", options: { element: ft, padding: 3 } }), ht.push.apply(ht, (te == null ? void 0 : te.modifiers) || []), C.popperInstance = yl(Xr, R, Object.assign({}, te, { placement: ae, onFirstUpdate: S, modifiers: ht }));
  }
  u(Dt, "createPopperInstance");
  function hn() {
    C.popperInstance && (C.popperInstance.destroy(), C.popperInstance = null);
  }
  u(hn, "destroyPopperInstance");
  function vr() {
    var j = C.props.appendTo, te, ae = U();
    C.props.interactive && j === xp || j === "parent" ? te = ae.parentNode : te = Ep(j, [ae]), te.contains(R) || te.appendChild(R), C.state.isMounted = true, Dt();
  }
  u(vr, "mount");
  function gr() {
    return Wa(R.querySelectorAll("[data-tippy-root]"));
  }
  u(gr, "getNestedPopperTree");
  function mn(j) {
    C.clearDelayTimeouts(), j && fe("onTrigger", [C, j]), Tt();
    var te = We(true), ae = W(), ye = ae[0], he = ae[1];
    Pr.isTouch && ye === "hold" && he && (te = he), te ? i = setTimeout(function() {
      C.show();
    }, te) : C.show();
  }
  u(mn, "scheduleShow");
  function pt(j) {
    if (C.clearDelayTimeouts(), fe("onUntrigger", [C, j]), !C.state.isVisible) {
      Ct();
      return;
    }
    if (!(C.props.trigger.indexOf("mouseenter") >= 0 && C.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && f)) {
      var te = We(false);
      te ? l = setTimeout(function() {
        C.state.isVisible && C.hide();
      }, te) : c = requestAnimationFrame(function() {
        C.hide();
      });
    }
  }
  u(pt, "scheduleHide");
  function Dr() {
    C.state.isEnabled = true;
  }
  u(Dr, "enable");
  function Lt() {
    C.hide(), C.state.isEnabled = false;
  }
  u(Lt, "disable");
  function Yn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  u(Yn, "clearDelayTimeouts");
  function kr(j) {
    if (!C.state.isDestroyed) {
      fe("onBeforeUpdate", [C, j]), Vn();
      var te = C.props, ae = mp(r, Object.assign({}, te, pp(j), { ignoreAttributes: true }));
      C.props = ae, qt(), te.interactiveDebounce !== ae.interactiveDebounce && (Gt(), A = up(fn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? Wn(te.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Ke(), qe(), Y && Y(te, ae), C.popperInstance && (Dt(), gr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [C, j]);
    }
  }
  u(kr, "setProps");
  function vn(j) {
    C.setProps({ content: j });
  }
  u(vn, "setContent");
  function Si() {
    var j = C.state.isVisible, te = C.state.isDestroyed, ae = !C.state.isEnabled, ye = Pr.isTouch && !C.props.touch, he = wl(C.props.duration, 0, Sr.duration);
    if (!(j || te || ae || ye) && !U().hasAttribute("disabled") && (fe("onShow", [C], false), C.props.onShow(C) !== false)) {
      if (C.state.isVisible = true, oe() && (R.style.visibility = "visible"), qe(), Tt(), C.state.isMounted || (R.style.transition = "none"), oe()) {
        var dt = Re(), ft = dt.box, Xr = dt.content;
        xl([ft, Xr], 0);
      }
      S = u(function() {
        var ht;
        if (!(!C.state.isVisible || p)) {
          if (p = true, R.offsetHeight, R.style.transition = C.props.moveTransition, oe() && C.props.animation) {
            var Mi = Re(), Rr = Mi.box, Zr = Mi.content;
            xl([Rr, Zr], he), dp([Rr, Zr], "visible");
          }
          Xe(), Ke(), cp(Sl, C), (ht = C.popperInstance) == null || ht.forceUpdate(), fe("onMount", [C]), C.props.animation && oe() && Vt(he, function() {
            C.state.isShown = true, fe("onShown", [C]);
          });
        }
      }, "onFirstUpdate"), vr();
    }
  }
  u(Si, "show");
  function Io() {
    var j = !C.state.isVisible, te = C.state.isDestroyed, ae = !C.state.isEnabled, ye = wl(C.props.duration, 1, Sr.duration);
    if (!(j || te || ae) && (fe("onHide", [C], false), C.props.onHide(C) !== false)) {
      if (C.state.isVisible = false, C.state.isShown = false, p = false, f = false, oe() && (R.style.visibility = "hidden"), Gt(), Ct(), qe(true), oe()) {
        var he = Re(), dt = he.box, ft = he.content;
        C.props.animation && (xl([dt, ft], ye), dp([dt, ft], "hidden"));
      }
      Xe(), Ke(), C.props.animation ? oe() && zr(ye, C.unmount) : C.unmount();
    }
  }
  u(Io, "hide");
  function Ti(j) {
    ce().addEventListener("mousemove", A), cp(Fa, A), A(j);
  }
  u(Ti, "hideWithInteractivity");
  function Ci() {
    C.state.isVisible && C.hide(), !!C.state.isMounted && (hn(), gr().forEach(function(j) {
      j._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), Sl = Sl.filter(function(j) {
      return j !== C;
    }), C.state.isMounted = false, fe("onHidden", [C]));
  }
  u(Ci, "unmount");
  function Ao() {
    C.state.isDestroyed || (C.clearDelayTimeouts(), C.unmount(), Vn(), delete r._tippy, C.state.isDestroyed = true, fe("onDestroy", [C]));
  }
  u(Ao, "destroy");
}
u(ym, "createTippy");
function yi(r, e) {
  e === void 0 && (e = {});
  var t = Sr.plugins.concat(e.plugins || []);
  um();
  var i = Object.assign({}, e, { plugins: t }), l = im(r);
  if (false)
    var c, f;
  var g = l.reduce(function(h, p) {
    var m = p && ym(p, i);
    return m && h.push(m), h;
  }, []);
  return Ua(r) ? g[0] : g;
}
u(yi, "tippy");
yi.defaultProps = Sr;
yi.setDefaultProps = mm;
yi.currentInput = Pr;
var wm = Object.assign({}, lo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var Op = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], f = [], g, h = t.overrides, p = [], m = false;
  function x() {
    f = l.map(function(C) {
      return Wn(C.props.triggerTarget || C.reference);
    }).reduce(function(C, B) {
      return C.concat(B);
    }, []);
  }
  u(x, "setTriggerTargets");
  function S() {
    c = l.map(function(C) {
      return C.reference;
    });
  }
  u(S, "setReferences");
  function M(C) {
    l.forEach(function(B) {
      C ? B.enable() : B.disable();
    });
  }
  u(M, "enableInstances");
  function A(C) {
    return l.map(function(B) {
      var R = B.setProps;
      return B.setProps = function(Y) {
        R(Y), B.reference === g && C.setProps(Y);
      }, function() {
        B.setProps = R;
      };
    });
  }
  u(A, "interceptSetProps");
  function T(C, B) {
    var R = f.indexOf(B);
    if (B !== g) {
      g = B;
      var Y = (h || []).concat("content").reduce(function(V, H) {
        return V[H] = l[R].props[H], V;
      }, {});
      C.setProps(Object.assign({}, Y, { getReferenceClientRect: typeof Y.getReferenceClientRect == "function" ? Y.getReferenceClientRect : function() {
        var V;
        return (V = c[R]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  u(T, "prepareInstance"), M(false), S(), x();
  var P = { fn: u(function() {
    return { onDestroy: u(function() {
      M(true);
    }, "onDestroy"), onHidden: u(function() {
      g = null;
    }, "onHidden"), onClickOutside: u(function(R) {
      R.props.showOnCreate && !m && (m = true, g = null);
    }, "onClickOutside"), onShow: u(function(R) {
      R.props.showOnCreate && !m && (m = true, T(R, c[0]));
    }, "onShow"), onTrigger: u(function(R, Y) {
      T(R, Y.currentTarget);
    }, "onTrigger") };
  }, "fn") }, _ = yi(bi(), Object.assign({}, Jh(t, ["overrides"]), { plugins: [P].concat(t.plugins || []), triggerTarget: f, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [wm]) }) })), D = _.show;
  _.show = function(C) {
    if (D(), !g && C == null)
      return T(_, c[0]);
    if (!(g && C == null)) {
      if (typeof C == "number")
        return c[C] && T(_, c[C]);
      if (l.indexOf(C) >= 0) {
        var B = C.reference;
        return T(_, B);
      }
      if (c.indexOf(C) >= 0)
        return T(_, C);
    }
  }, _.showNext = function() {
    var C = c[0];
    if (!g)
      return _.show(0);
    var B = c.indexOf(g);
    _.show(c[B + 1] || C);
  }, _.showPrevious = function() {
    var C = c[c.length - 1];
    if (!g)
      return _.show(C);
    var B = c.indexOf(g), R = c[B - 1] || C;
    _.show(R);
  };
  var L = _.setProps;
  return _.setProps = function(C) {
    h = C.overrides || h, L(C);
  }, _.setInstances = function(C) {
    M(true), p.forEach(function(B) {
      return B();
    }), l = C, M(false), S(), x(), p = A(_), _.setProps({ triggerTarget: f });
  }, p = A(_), _;
}, "createSingleton");
yi.setDefaultProps({ render: Cp });
var lt = yi;
var Ml = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Pe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = bt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = lt(this, { allowHTML: true, animation: false, arrow: It + It, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
      this.helpableService = ot(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${Qe(i.value)}`);
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
  return u(e, "HelpableMixinClass"), z([G], e.prototype, "help", 2), z([G], e.prototype, "helpId", 2), z([G], e.prototype, "debugHelpable", 2), e;
}
u(Pe, "HelpableMixin");
function xe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  return u(e, "HoverableMixinClass"), z([G], e.prototype, "hoverable", 2), e;
}
u(xe, "HoverableMixin");
function* Va(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
u(Va, "parse");
var Mp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var sn = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Ir;
var Ya;
var $r = class {
  constructor(e, t) {
    this.expression = t, Ir.set(this, void 0), Ya.set(this, ""), Mp(this, Ir, e, "f"), sn(this, Ir, "f").updateParent("");
  }
  get attributeName() {
    return sn(this, Ir, "f").attr.name;
  }
  get attributeNamespace() {
    return sn(this, Ir, "f").attr.namespaceURI;
  }
  get value() {
    return sn(this, Ya, "f");
  }
  set value(e) {
    Mp(this, Ya, e || "", "f"), sn(this, Ir, "f").updateParent(e);
  }
  get element() {
    return sn(this, Ir, "f").element;
  }
  get booleanValue() {
    return sn(this, Ir, "f").booleanValue;
  }
  set booleanValue(e) {
    sn(this, Ir, "f").booleanValue = e;
  }
};
u($r, "AttributeTemplatePart");
Ir = /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ new WeakMap();
var mo = class {
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
};
u(mo, "AttributeValueSetter");
var Pp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var wi = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Ar;
var er = class {
  constructor(e, t) {
    this.expression = t, Ar.set(this, void 0), Pp(this, Ar, [e], "f"), e.textContent = "";
  }
  get value() {
    return wi(this, Ar, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return wi(this, Ar, "f")[0].previousSibling;
  }
  get nextSibling() {
    return wi(this, Ar, "f")[wi(this, Ar, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), wi(this, Ar, "f")[0].before(...t);
    for (let i of wi(this, Ar, "f"))
      i.remove();
    Pp(this, Ar, t, "f");
  }
};
u(er, "NodeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap();
function vo(r) {
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
u(vo, "createProcessor");
function go(r, e) {
  r.value = String(e);
}
u(go, "processPropertyIdentity");
function Xa(r, e) {
  return typeof e == "boolean" && r instanceof $r && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
u(Xa, "processBooleanAttribute");
var Pl = vo(go);
var xm = vo((r, e) => {
  Xa(r, e) || go(r, e);
});
var Ip = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var Za = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var bo;
var yo;
function* Em(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new mo(t, l);
          for (let f of Va(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let g = new $r(c, f.value);
              c.append(g), yield g;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Va(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new er(t, i.value));
        break;
      }
}
u(Em, "collectParts");
var ln = class extends DocumentFragment {
  constructor(e, t, i = Pl) {
    var l, c;
    super();
    bo.set(this, void 0), yo.set(this, void 0), Object.getPrototypeOf(this) !== ln.prototype && Object.setPrototypeOf(this, ln.prototype), this.appendChild(e.content.cloneNode(true)), Ip(this, yo, Array.from(Em(this)), "f"), Ip(this, bo, i, "f"), (c = (l = Za(this, bo, "f")).createCallback) === null || c === void 0 || c.call(l, this, Za(this, yo, "f"), t);
  }
  update(e) {
    Za(this, bo, "f").processCallback(this, Za(this, yo, "f"), e);
  }
};
u(ln, "TemplateInstance");
bo = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
var Ap = /* @__PURE__ */ new WeakSet();
function _p(r) {
  return Ap.has(r);
}
u(_p, "isDirective");
function zp(r, e) {
  return _p(e) ? (e(r), true) : false;
}
u(zp, "processDirective");
function wo(r) {
  return (...e) => {
    let t = r(...e);
    return Ap.add(t), t;
  };
}
u(wo, "directive");
var xo = /* @__PURE__ */ new WeakMap();
var Eo = class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), xo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), xo.get(this.element).delete(this.type));
  }
  static for(e) {
    xo.has(e.element) || xo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = xo.get(e.element);
    return i.has(t) ? i.get(t) : new Eo(e.element, t);
  }
};
u(Eo, "EventHandler");
function Dp(r, e) {
  return r instanceof $r && r.attributeName.startsWith("on") ? (Eo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
u(Dp, "processEvent");
function Sm(r, e) {
  return e instanceof xi && r instanceof er ? (e.renderInto(r), true) : false;
}
u(Sm, "processSubTemplate");
function Tm(r, e) {
  return e instanceof DocumentFragment && r instanceof er ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
u(Tm, "processDocumentFragment");
function Cm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
u(Cm, "isIterable");
function Om(r, e) {
  if (!Cm(e))
    return false;
  if (r instanceof er) {
    let t = [];
    for (let i of e)
      if (i instanceof xi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
u(Om, "processIterable");
function Ja(r, e) {
  zp(r, e) || Xa(r, e) || Dp(r, e) || Sm(r, e) || Tm(r, e) || Om(r, e) || go(r, e);
}
u(Ja, "processPart");
var Il = /* @__PURE__ */ new WeakMap();
var kp = /* @__PURE__ */ new WeakMap();
var Rp = /* @__PURE__ */ new WeakMap();
var xi = class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Il.has(this.strings))
      return Il.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Il.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (kp.get(e) !== t) {
      kp.set(e, t);
      let i = new ln(t, this.values, this.processor);
      Rp.set(e, i), e instanceof er ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Rp.get(e).update(this.values);
  }
};
u(xi, "TemplateResult");
var Mm = vo(Ja);
function Z(r, ...e) {
  return new xi(r, e, Mm);
}
u(Z, "html");
function Q(r, e) {
  r.renderInto(e);
}
u(Q, "render");
var Al = /* @__PURE__ */ new WeakMap();
var Pm = wo((...r) => (e) => {
  Al.has(e) || Al.set(e, { i: r.length });
  let t = Al.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Ja(e, l));
    }) : i <= t.i && (t.i = i, Ja(e, r[i]));
});
var Im = wo((r) => (e) => {
  if (!(e instanceof er))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function ke(r) {
  class e extends r {
    iconHtml(i) {
      return Z`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return Z([i]);
    }
    get iconStyle() {
      return Z`<style>
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
  return u(e, "IconableMixinClass"), e;
}
u(ke, "IconableMixin");
var Fr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Je(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  return u(e, "IfableMixinClass"), z([G], e.prototype, "if", 2), e;
}
u(Je, "IfableMixin");
var Np = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ie(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = lt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c, f, g;
        (l = this.ifTooltip) == null || l.hide(), (c = this.angleTooltip) == null || c.hide(), (f = this.flagTooltip) == null || f.hide(), (g = this.deleteTooltip) == null || g.hide();
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
      return Q(Z`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Fr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        ee.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = lt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Tn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        ee.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = lt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Rn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        ee.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = lt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      ee.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = lt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  return u(e, "MenuableMixinClass"), e;
}
u(Ie, "MenuableMixin");
function Gp(r) {
  return /^-?\d+$/.test(r);
}
u(Gp, "isNumeric");
function wt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
u(wt, "forceSigned");
var nt = class extends Ie(Pe(Me(Oe(xe(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return As;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (ee.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    lt(this, { allowHTML: true, animation: false, arrow: It + It, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return Q(Z`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${wt(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${wt(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${wt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${wt(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${wt(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${wt(this.z)}</span>
          </section>
        </div>
      `, e), e;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
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
    let e = u((i) => Z`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => Z`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Q(Z`<style>
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
    return `"${As}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let t = this._tippy;
    t == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return ee.notNull(e), parseFloat(e);
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
    return ee.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return ee.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
};
u(nt, "BlochDisplayElement"), z([ze], nt.prototype, "body", 2), z([ze], nt.prototype, "vectorLine", 2), z([ze], nt.prototype, "vectorEnd", 2), z([ze], nt.prototype, "vector", 2), z([Mt], nt.prototype, "vectorEndCircles", 2), z([G], nt.prototype, "x", 2), z([G], nt.prototype, "y", 2), z([G], nt.prototype, "z", 2);
re(nt);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Wt = class extends Ie(Pe(Me(Be(ke(Oe(xe(HTMLElement))))))) {
  get operationType() {
    return Is;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Is}"`;
  }
};
u(Wt, "ControlGateElement");
re(Wt);
var Lp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var tr = class extends Ie(Pe(Je($e(Me(Be(ke(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Lp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
};
u(tr, "HGateElement");
re(tr);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = class extends Ie(Pe(Hc(Me(ke(Oe(xe(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">
        ${this.iconHtml(jp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ga}"` : `"${ga}>${this.flag}"`;
  }
};
u(rr, "MeasurementGateElement"), z([G], rr.prototype, "value", 2);
re(rr);
var Bp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
>
  <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
</svg>
`;
var nr = class extends Ie(Pe(Je($e(rn(Me(Be(ke(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${pa}"` : `"${pa}(${this.angle.replace("/", "_")})"`;
  }
};
u(nr, "PhaseGateElement");
re(nr);
var Hp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
  <path d="M24 32L34 18M34 32L24 18" />
</svg>
`;
var ir = class extends Ie(Pe(Je($e(Me(Be(ke(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${fa}<${this.if}"` : `"${fa}"`;
  }
};
u(ir, "RnotGateElement");
re(ir);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var or = class extends Ie(Pe(Je($e(rn(Me(Be(ke(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ha}"` : `"${ha}(${this.angle.replace("/", "_")})"`;
  }
};
u(or, "RxGateElement");
re(or);
var Fp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = class extends Ie(Pe(Je($e(rn(Me(Be(ke(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ma}"` : `"${ma}(${this.angle.replace("/", "_")})"`;
  }
};
u(ar, "RyGateElement");
re(ar);
var Wp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var sr = class extends Ie(Pe(Je($e(rn(Me(Be(ke(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${va}"` : `"${va}(${this.angle.replace("/", "_")})"`;
  }
};
u(sr, "RzGateElement");
re(sr);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var lr = class extends Ie(Pe($e(Me(Be(ke(Oe(xe(HTMLElement)))))))) {
  get operationType() {
    return Ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Up)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ps}"`;
  }
};
u(lr, "SwapGateElement");
re(lr);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ur = class extends Ie(Pe(Je($e(Me(Be(ke(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${da}<${this.if}"` : `"${da}"`;
  }
};
u(ur, "TGateElement");
re(ur);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ut = class extends Ie(Pe(Me(ke(Oe(xe(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Ju;
      case "1":
        return Ku;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">
        ${this.iconHtml(Yp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(Ut, "WriteGateElement"), z([G], Ut.prototype, "value", 2);
re(Ut);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var cr = class extends Ie(Pe(Je($e(Me(Be(ke(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return la;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Xp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${la}<${this.if}"` : `"${la}"`;
  }
};
u(cr, "XGateElement");
re(cr);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var pr = class extends Ie(Pe(Je($e(Me(Be(ke(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Zp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ua}<${this.if}"` : `"${ua}"`;
  }
};
u(pr, "YGateElement");
re(pr);
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var dr = class extends Ie(Pe(Je($e(Me(Be(ke(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ca}<${this.if}"` : `"${ca}"`;
  }
};
u(dr, "ZGateElement");
re(dr);
var ut = u((r) => r instanceof tr || r instanceof cr || r instanceof pr || r instanceof dr || r instanceof nr || r instanceof ur || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof Wt || r instanceof nt || r instanceof Ut || r instanceof rr, "isOperation");
var Kp = u((r) => r != null && r instanceof tr, "isHGateElement");
var Qp = u((r) => r != null && r instanceof cr, "isXGateElement");
var ed = u((r) => r != null && r instanceof pr, "isYGateElement");
var td = u((r) => r != null && r instanceof dr, "isZGateElement");
var So = u((r) => r != null && r instanceof nr, "isPhaseGateElement");
var rd = u((r) => r != null && r instanceof ur, "isTGateElement");
var nd = u((r) => r != null && r instanceof ir, "isRnotGateElement");
var Ka = u((r) => r != null && r instanceof or, "isRxGateElement");
var Qa = u((r) => r != null && r instanceof ar, "isRyGateElement");
var es = u((r) => r != null && r instanceof sr, "isRzGateElement");
var id = u((r) => r != null && r instanceof lr, "isSwapGateElement");
var _l = u((r) => r != null && r instanceof Wt, "isControlGateElement");
var od = u((r) => r != null && r instanceof nt, "isBlochDisplayElement");
var RT = u((r) => r != null && r instanceof Ut, "isWriteGateElement");
var ad = u((r) => r != null && r instanceof rr, "isMeasurementGateElement");
var To = ii(Ra(), 1);
var zl = u((r) => r !== null && r instanceof Wr, "isAngleSliderElement");
var Wr = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = bt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new Et("Bad denominator", this.denominator);
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
      let [i] = this.findSnapAngle(Uu(this.angle));
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
    this.angleSliderService = ot(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Qe(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, To.default)(this).unset();
  }
  update() {
    Q(Z`<style>
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
    (0, To.default)(this).draggable({ origin: "self", modifiers: [To.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = To.default.getElementRect(e.target).width, i = e.pageX / t;
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
    return ee.notNull(i), ee.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
};
u(Wr, "AngleSliderElement"), z([G], Wr.prototype, "angle", 2), z([G], Wr.prototype, "radian", 2), z([G], Wr.prototype, "denominator", 2), z([G], Wr.prototype, "disabled", 2), z([G], Wr.prototype, "debug", 2);
re(Wr);
var Co = class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Q(Z`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let t = e.currentTarget;
    ee.notNull(t);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    t.setAttribute("data-active", "");
  }
};
u(Co, "ButtonGroupElement"), z([Mt], Co.prototype, "buttons", 2), Co = z([re], Co);
function sd(r, e = 0, { start: t = true, middle: i = true, once: l = false } = {}) {
  let c = 0, f, g = false;
  function h(...p) {
    if (g)
      return;
    let m = Date.now() - c;
    c = Date.now(), t ? (t = false, r.apply(this, p), l && h.cancel()) : (i && m < e || !i) && (clearTimeout(f), f = setTimeout(() => {
      c = Date.now(), r.apply(this, p), l && h.cancel();
    }, i ? e - m : e));
  }
  return u(h, "fn"), h.cancel = () => {
    clearTimeout(f), g = true;
  }, h;
}
u(sd, "throttle");
function ld(r, e = 0, { start: t = false, middle: i = false, once: l = false } = {}) {
  return sd(r, e, { start: t, middle: i, once: l });
}
u(ld, "debounce");
function Oo(r = 0, e = {}) {
  return (t, i, l) => {
    if (!l || typeof l.value != "function")
      throw new Error("debounce can only decorate functions");
    let c = l.value;
    l.value = ld(c, r, e), Object.defineProperty(t, i, l);
  };
}
u(Oo, "debounce");
var un = ii(cd(), 1);
var ct = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.qubitCircleSize = "xl";
    this.cols = 0;
    this.rows = 0;
    this.paddingX = 0;
    this.paddingY = 0;
    this.overscan = 0;
    this.qubitCirclePopupTemplateId = "qubit-circle-popup-template";
    this.coloredPhase = false;
    this.vertical = true;
    this.lastClientHeight = null;
    this.lastClientWidth = null;
    this.lastWindowScrollTop = null;
    this.lastWindowScrollLeft = null;
    this.lastColStartIndex = -1;
    this.lastColEndIndex = -1;
    this.lastRowStartIndex = -1;
    this.lastRowEndIndex = -1;
  }
  startBasicCircleNotationMode() {
    this.coloredPhase = false, this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent();
  }
  startColoredPhaseMode() {
    this.coloredPhase = true, this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && e === "data-qubit-count") {
      ee.notNull(i);
      let l = parseInt(i);
      this.updateQubitCircleSize(l), this.updateDimension(l), this.resizeWindow(), this.resizeInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent();
    }
  }
  updateQubitCircleSize(e) {
    switch (e) {
      case 1: {
        this.qubitCircleSize = "xl";
        break;
      }
      case 2: {
        this.qubitCircleSize = "xl";
        break;
      }
      case 3: {
        this.vertical ? this.qubitCircleSize = "lg" : this.qubitCircleSize = "xl";
        break;
      }
      case 4: {
        this.vertical ? this.qubitCircleSize = "base" : this.qubitCircleSize = "lg";
        break;
      }
      case 5: {
        this.vertical ? this.qubitCircleSize = "sm" : this.qubitCircleSize = "base";
        break;
      }
      case 6: {
        this.vertical ? this.qubitCircleSize = "xs" : this.qubitCircleSize = "base";
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
        throw new Et("unsupported qubit count", e);
    }
  }
  updateDimension(e) {
    switch (e) {
      case 1: {
        this.rows = 1, this.cols = 2;
        break;
      }
      case 2: {
        this.rows = 1, this.cols = 4;
        break;
      }
      case 3: {
        this.vertical ? (this.rows = 2, this.cols = 4) : (this.rows = 1, this.cols = 8);
        break;
      }
      case 4: {
        this.rows = 2, this.cols = 8;
        break;
      }
      case 5: {
        this.vertical ? (this.rows = 4, this.cols = 8) : (this.rows = 2, this.cols = 16);
        break;
      }
      case 6: {
        this.rows = 4, this.cols = 16;
        break;
      }
      case 7: {
        this.vertical ? (this.rows = 8, this.cols = 16) : (this.rows = 4, this.cols = 32);
        break;
      }
      case 8: {
        this.vertical ? (this.rows = 16, this.cols = 16) : (this.rows = 8, this.cols = 32);
        break;
      }
      case 9: {
        this.rows = 16, this.cols = 32;
        break;
      }
      case 10: {
        this.rows = 32, this.cols = 32;
        break;
      }
      case 11: {
        this.rows = 32, this.cols = 64;
        break;
      }
      case 12: {
        this.rows = 64, this.cols = 64;
        break;
      }
      case 13: {
        this.rows = 64, this.cols = 128;
        break;
      }
      case 14: {
        this.rows = 128, this.cols = 128;
        break;
      }
      case 15: {
        this.rows = 128, this.cols = 256;
        break;
      }
      case 16: {
        this.rows = 256, this.cols = 256;
        break;
      }
      default:
        throw new Et("unsupported qubit count", e);
    }
  }
  get visibleQubitCircleKets() {
    return this.qubitCircles.map((t) => {
      let i = t.getAttribute("data-ket");
      return ee.notNull(i), parseInt(i);
    });
  }
  setAmplitudes(e) {
    un.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        ee.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, g = t.children.item(0);
        ee.notNull(g);
        let h = c.phase() / Math.PI * 180, p = t.children.item(1);
        ee.notNull(p);
        let m = Math.trunc(h);
        m < 0 && (m = 360 + m), t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? t.classList.add("magnitude-0") : t.classList.remove("magnitude-0"), g.style.setProperty("--magnitude", f.toString()), this.coloredPhase ? (t.classList.add("phase-hidden"), f === 0 ? g.style.setProperty("--magnitude", "0") : g.style.setProperty("--magnitude", "1"), -22.5 <= h && h < 22.5 || 337.5 <= h && h <= 360 || -337.5 < h && h <= -360 ? g.style.setProperty("--magnitude-color", "rgb(168 85 247)") : 22.5 <= h && h < 67.5 || -337.5 <= h && h < -292.5 ? g.style.setProperty("--magnitude-color", "rgb(236 72 153)") : 67.5 <= h && h < 112.5 || -292.5 <= h && h < -247.5 ? g.style.setProperty("--magnitude-color", "rgb(249 115 22)") : 112.5 <= h && h < 157.5 || -247.5 <= h && h < -202.5 ? g.style.setProperty("--magnitude-color", "rgb(234 179 8)") : 157.5 <= h && h < 202.5 || -202.5 <= h && h < -157.5 ? g.style.setProperty("--magnitude-color", "rgb(132 204 22)") : 202.5 <= h && h < 247.5 || -157.5 <= h && h < -112.5 ? g.style.setProperty("--magnitude-color", "rgb(34 197 94)") : 247.5 <= h && h < 292.5 || -112.5 <= h && h < -67.5 ? g.style.setProperty("--magnitude-color", "rgb(14 165 233)") : 292.5 <= h && h < 337.5 || -67.5 <= h && h < -22.5 ? g.style.setProperty("--magnitude-color", "rgb(99 102 241)") : g.style.removeProperty("--magnitude-color")) : g.style.setProperty("--magnitude-color", "rgb(14 165 233)"), p.style.setProperty("--phase", `-${m.toString()}deg`);
      }
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.startLayoutOrientationChangeObserver(), this.resizeWindow(), this.resizeInnerContainer(), this.drawNewlyVisibleQubuitCircles(), this.dispatchEvent(new CustomEvent("circle-notation-init", { bubbles: true }));
  }
  startLayoutOrientationChangeObserver() {
    this.detectViewportOrientation(), new ResizeObserver(this.detectViewportOrientation.bind(this)).observe(document.body);
  }
  detectViewportOrientation() {
    let e = false;
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768 ? (this.vertical || (e = true), this.vertical = true) : (this.vertical && (e = true), this.vertical = false), e && (this.updateQubitCircleSize(this.qubitCount), this.updateDimension(this.qubitCount), this.resizeWindow(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent());
  }
  update() {
    Q(Z`<style>
          circle-notation {
            --magnitude: 0;
            --magnitude-color: rgb(14 165 233); /* sky-500 */
            --phase: 0deg;
          }

          /* border */

          .qubit-circle {
            position: absolute;
            border-color: rgb(226 232 240); /* slate-200 */
            border-radius: 9999px;
            border-style: solid;
            box-sizing: border-box;
          }

          .qubit-circle:hover,
          .qubit-circle:not(.magnitude-0):hover {
            border-color: rgb(220 38 38); /* red-600 */
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

          .qubit-circle:hover .qubit-circle__magnitude {
            background-color: rgb(249 115 22); /* orange-500 */
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
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            transform-origin: bottom;
            transform: rotate(var(--phase));
          }

          .qubit-circle.magnitude-0 .qubit-circle__phase,
          .qubit-circle.phase-hidden .qubit-circle__phase {
            display: none;
          }
        </style>

        <slot></slot>

        <div
          class="circle-notation__window"
          data-target="circle-notation.window"
          data-action="scroll:circle-notation#drawNewlyVisibleQubuitCircles scroll:circle-notation#removeInvisibleQubitCircles"
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
    return this.rows * this.qubitCircleSizePx + (this.rows - 1) * this.gap + this.paddingY * 2;
  }
  get innerWidth() {
    return this.cols * this.qubitCircleSizePx + (this.cols - 1) * this.gap + this.paddingX * 2;
  }
  clearInnerContainer() {
    this.innerContainer !== void 0 && (this.innerContainer.textContent = "");
  }
  get qubitCirclesAreaHeight() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSizePx;
      case 2:
        return this.qubitCircleSizePx;
      case 3:
        return this.vertical ? this.qubitCircleSizePx * 2 + this.gap : this.qubitCircleSizePx;
      case 4:
        return this.qubitCircleSizePx * 2 + this.gap;
      case 5:
        return this.vertical ? this.qubitCircleSizePx * 4 + this.gap * 3 : this.qubitCircleSizePx * 2 + this.gap;
      case 6:
        return this.qubitCircleSizePx * 4 + this.gap * 3;
      case 7:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 4 + this.gap * 3;
      case 8:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 9:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 10:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 11:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 12:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 13:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 14:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 15:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 16:
        return this.vertical ? this.qubitCircleSizePx * 5 + this.gap * 4 : this.qubitCircleSizePx * 8 + this.gap * 7;
      default:
        throw new Et("unsupported qubit count", this.qubitCount);
    }
  }
  get qubitCirclesAreaWidth() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSizePx * 2 + this.gap;
      case 2:
        return this.qubitCircleSizePx * 4 + this.gap * 3;
      case 3:
        return this.vertical ? this.qubitCircleSizePx * 4 + this.gap * 3 : this.qubitCircleSizePx * 8 + this.gap * 7;
      case 4:
        return this.qubitCircleSizePx * 8 + this.gap * 7;
      case 5:
        return this.vertical ? this.qubitCircleSizePx * 8 + this.gap * 7 : this.qubitCircleSizePx * 16 + this.gap * 15;
      case 6:
        return this.qubitCircleSizePx * 16 + this.gap * 15;
      case 7:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 8:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
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
        throw new Et("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    let e = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.vertical) {
      let t = this.clientHeight;
      return this.rows > 4 && t < e ? t : e;
    } else
      return e;
  }
  get windowWidth() {
    let e = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.vertical) {
      let t = this.clientWidth;
      return this.cols >= 16 && t < e ? t : e;
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
        return 64;
      case 3:
        return this.vertical ? 48 : 64;
      case 4:
        return this.vertical ? 32 : 48;
      case 5:
        return this.vertical ? 24 : 32;
      case 6:
        return this.vertical ? 16 : 32;
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
        throw new Et("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    if (this.window === void 0)
      return;
    let e = [];
    un.default.measure(() => {
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let t = this.lastRowStartIndex; t <= this.lastRowEndIndex; t++)
        for (let i = this.lastColStartIndex; i <= this.lastColEndIndex; i++)
          e.push({ col: i, row: t });
    }), un.default.mutate(() => {
      let t = document.createDocumentFragment();
      for (let i of this.allQubitCircleElements(e))
        t.appendChild(i);
      this.innerContainer.appendChild(t);
    });
  }
  drawNewlyVisibleQubuitCircles() {
    if (this.window === void 0)
      return;
    let e, t, i, l, c = [];
    un.default.measure(() => {
      if (e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex, !(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let f = i; f <= l; f++)
          for (let g = e; g <= t; g++)
            (g < this.lastColStartIndex || this.lastColEndIndex < g || f < this.lastRowStartIndex || this.lastRowEndIndex < f) && c.push({ col: g, row: f });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), un.default.mutate(() => {
      let f = document.createDocumentFragment();
      for (let g of this.allQubitCircleElements(c))
        f.appendChild(g);
      this.innerContainer.appendChild(f), c.length !== 0 && this.dispatchVisibilityChangedEvent();
    });
  }
  removeInvisibleQubitCircles() {
    let e, t, i, l;
    un.default.measure(() => {
      e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
    }), un.default.mutate(() => {
      for (let c of this.qubitCircles) {
        let f = c.getAttribute("data-col"), g = c.getAttribute("data-row");
        ee.notNull(f), ee.notNull(g);
        let h = parseInt(f), p = parseInt(g);
        if (h < e || t < h || p < i || l < p) {
          let m = c._tippy;
          m !== void 0 && m.destroy(), c.remove();
        }
      }
    });
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let t = e.col + e.row * this.cols, i = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, l = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, c = document.createElement("div");
    c.className = "qubit-circle magnitude-0", c.setAttribute("data-col", e.col.toString()), c.setAttribute("data-row", e.row.toString()), c.setAttribute("data-ket", t.toString()), c.setAttribute("data-targets", "circle-notation.qubitCircles"), c.setAttribute("data-amplitude-real", "0"), c.setAttribute("data-amplitude-imag", "0"), c.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), c.style.setProperty("position", "absolute"), c.style.setProperty("top", `${i}px`), c.style.setProperty("left", `${l}px`), c.style.setProperty("width", `${this.qubitCircleSizePx}px`), c.style.setProperty("height", `${this.qubitCircleSizePx}px`), c.style.setProperty("border-width", `${this.qubitCircleLineWidth}px`);
    let f = document.createElement("div");
    f.className = "qubit-circle__magnitude", f.style.setProperty("--magnitude", "0");
    let g = document.createElement("div");
    return g.className = "qubit-circle__phase", g.style.setProperty("width", `${this.qubitCircleLineWidth}px`), c.appendChild(f), c.appendChild(g), c;
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
        return this.vertical ? 1 : 2;
      case 6:
        return this.vertical ? 1 : 2;
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
        throw new Et("unsupported qubit count", this.qubitCount);
    }
  }
  get overscanColStartIndex() {
    let e = this.visibleColStartIndex - this.overscan;
    return e < 0 ? 0 : e;
  }
  get overscanColEndIndex() {
    let e = this.visibleColEndIndex + this.overscan;
    return e > this.cols - 1 ? this.cols - 1 : e;
  }
  get overscanRowStartIndex() {
    let e = this.visibleRowStartIndex - this.overscan;
    return e < 0 ? 0 : e;
  }
  get overscanRowEndIndex() {
    let e = this.visibleRowEndIndex + this.overscan;
    return e > this.rows - 1 ? this.rows - 1 : e;
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
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && t++, Math.min(this.cols - 1, t);
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
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && t++, Math.min(this.rows - 1, t);
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
    ee.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = lt(t, { allowHTML: true, animation: false, arrow: It + It, delay: 0, theme: "qni" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    ee.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    ee.notNull(c);
    let f = t.getAttribute("data-amplitude-imag");
    ee.notNull(f);
    let g = parseInt(l), h = parseFloat(c), p = parseFloat(f), m = new Jt(h, p), x = m.abs(), S = m.phase() / Math.PI * 180, M = this.qubitCirclePopupTemplate.content.querySelector(".ket-binary"), A = this.qubitCirclePopupTemplate.content.querySelector(".ket-decimal"), T = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-real"), P = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-imag"), _ = this.qubitCirclePopupTemplate.content.querySelector(".probability"), D = this.qubitCirclePopupTemplate.content.querySelector(".phase");
    M && (M.textContent = g.toString(2).padStart(this.qubitCount, "0")), A && (A.textContent = g.toString()), T && (T.textContent = wt(m.real, 5)), P && (P.textContent = `${wt(m.imag, 5)}i`), _ && (_.textContent = `${wt(x * x * 100, 4)}%`), D && (D.textContent = `${wt(S, 2)}\xB0`);
    let L = document.createElement("div");
    L.appendChild(this.qubitCirclePopupTemplate.content.cloneNode(true)), i.setContent(L.innerHTML), i.show();
  }
  hideQubitCirclePopup(e) {
    let t = e.target;
    ee.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    ee.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
};
u(ct, "CircleNotationElement"), z([G], ct.prototype, "qubitCount", 2), z([G], ct.prototype, "qubitCircleSize", 2), z([G], ct.prototype, "cols", 2), z([G], ct.prototype, "rows", 2), z([G], ct.prototype, "paddingX", 2), z([G], ct.prototype, "paddingY", 2), z([G], ct.prototype, "overscan", 2), z([G], ct.prototype, "qubitCirclePopupTemplateId", 2), z([G], ct.prototype, "coloredPhase", 2), z([ze], ct.prototype, "window", 2), z([ze], ct.prototype, "innerContainer", 2), z([Mt], ct.prototype, "qubitCircles", 2), z([Oo(10)], ct.prototype, "drawNewlyVisibleQubuitCircles", 1), z([Oo(100)], ct.prototype, "removeInvisibleQubitCircles", 1), ct = z([re], ct);
var fr = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "";
    this.magnitudes = "";
    this.phases = "";
    this.multiQubits = false;
    this.showKets = false;
  }
  setAmplitudes(e) {
    let t = this.qubitCircles;
    for (let [i, l] of Object.entries(e)) {
      let c = t[parseInt(i)];
      ee.notNull(c);
      let f = Jt.from(l);
      c.setAttribute("data-amplitude-real", f.real.toString()), c.setAttribute("data-amplitude-imag", f.imag.toString());
      let g = f.abs();
      this.setRoundedMagnitude(c, g);
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
  attributeChangedCallback(e, t, i) {
    this.shadowRoot !== null && t !== i && e === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let e = { root: this, threshold: [0, 0.2] }, t = u((l) => {
      for (let c of l) {
        let f = c.target;
        c.intersectionRatio >= 0.2 ? (f.setAttribute("data-targets", "circle-notation-old.qubitCircleGroups circle-notation-old.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : c.intersectionRatio === 0 && f.setAttribute("data-targets", "circle-notation-old.qubitCircleGroups");
      }
    }, "callback"), i = new IntersectionObserver(t, e);
    for (let l of this.qubitCircleGroups)
      i.observe(l);
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  get visibleQubitCircleKets() {
    let e = 2 ** this.qubitCount;
    return this.visibleQubitCircles.map((t) => parseInt(t.getAttribute("data-ket"))).filter((t) => t < e);
  }
  get visibleQubitCircles() {
    let e = this.visibleQubitCircleGroups.map((t) => Array.from(t.querySelectorAll(".qubit-circle")));
    return [].concat(...e);
  }
  update() {
    if (Q(Z`<style>
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
      for (let [e, t] of this.magnitudes.split(",").entries())
        this.setRoundedMagnitude(this.qubitCircles[e], parseFloat(t));
    if (this.phases !== "")
      for (let [e, t] of this.phases.split(",").entries()) {
        let i = this.qubitCircles[e], l = t ? parseFloat(t) : 0;
        this.setRoundedPhase(i, l);
        let c = i.querySelector(".qubit-circle__phase");
        c.style.transform = `rotate(${-l}deg)`;
      }
  }
  setRoundedMagnitude(e, t) {
    if (e === null || e === void 0)
      return;
    let i = Math.round(t * 100);
    i = i < 10 ? i === 0 ? 0 : 10 : Math.round(i / 10) * 10, i = i / 100, e.setAttribute("data-magnitude", t.toString()), e.setAttribute("data-rounded-magnitude", i.toString());
  }
  setRoundedPhase(e, t) {
    if (e === null || e === void 0)
      return;
    let i = Math.round(t / 10) * 10;
    i < 0 && (i = 360 + i), e.setAttribute("data-phase", t.toString()), e.setAttribute("data-rounded-phase", i.toString());
  }
  get qubitCirclesHtml() {
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : Z`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(e) {
    return Z`<div
      part="qubit-circle"
      class="qubit-circle"
      data-ket="${e}"
      data-action="mouseenter:circle-notation-old#setPopupContent"
      data-targets="circle-notation-old.qubitCircles"
    >
      <div class="qubit-circle__magnitude" part="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase" part="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(e) {
    let t = Z``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (f) => this.qubitCircleGroup(f, (g) => this.qubitCircleGroup(g, (h) => this.qubitCircleGroup(h, (p) => this.qubitCircleGroup(p)))))), 256);
    for (let l of i)
      t = Z`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, f = 1) => c.reduce((g, h, p) => p % f ? g : [...g, c.slice(p, p + f)], []), "arrayChunk")(e, i).map((c) => {
      let f = Z``;
      if (t)
        for (let g of t(c))
          f = Z`${f} ${g}`;
      else
        for (let g of c)
          f = Z`${f} ${this.qubitCircleHtml(g)}`;
      return i === 64 ? Z`<div class="qubit-circle-group--size${i}" data-targets="circle-notation-old.qubitCircleGroups">
          ${f}
        </div>` : Z`<div class="qubit-circle-group--size${i}">${f}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = lt(e);
    Op(t, { allowHTML: true, animation: false, arrow: It + It, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), f = t.getAttribute("data-magnitude"), g = t.getAttribute("data-phase"), h;
    l === null || c === null ? h = Jt.ZERO : h = new Jt(parseFloat(l), parseFloat(c));
    let p;
    f && parseFloat(f) === 0 ? p = 0 : p = g ? parseFloat(g) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, h, f ? parseFloat(f) : 0, p, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, f, g) {
    t._tippy.setContent(this.popupContent(e, i, l, c, f, g));
  }
  popupContent(e, t, i, l, c, f) {
    let g = e.querySelector(".ket-binary"), h = e.querySelector(".ket-decimal"), p = e.querySelector(".amplitude-real"), m = e.querySelector(".amplitude-imag"), x = e.querySelector(".probability"), S = e.querySelector(".phase");
    g && (g.textContent = t.toString(2).padStart(f, "0")), h && (h.textContent = t.toString()), p && (p.textContent = this.forceSigned(i.real, 5)), m && (m.textContent = `${this.forceSigned(i.imag, 5)}i`), x && (x.textContent = `${this.forceSigned(l * l * 100, 4)}%`), S && (S.textContent = `${this.forceSigned(c, 2)}\xB0`);
    let M = document.createElement("div");
    return M.appendChild(e.cloneNode(true)), M.innerHTML;
  }
  get popupEl() {
    return document.getElementById("circle-notation-popup");
  }
  forceSigned(e, t) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
  ketDecimal(e) {
    let t = e.getAttribute("data-ket");
    return parseInt(t);
  }
};
u(fr, "CircleNotationOldElement"), z([G], fr.prototype, "qubitCount", 2), z([G], fr.prototype, "size", 2), z([G], fr.prototype, "magnitudes", 2), z([G], fr.prototype, "phases", 2), z([G], fr.prototype, "multiQubits", 2), z([G], fr.prototype, "showKets", 2), z([Mt], fr.prototype, "qubitCircles", 2), z([Mt], fr.prototype, "qubitCircleGroups", 2), z([Mt], fr.prototype, "visibleQubitCircleGroups", 2);
re(fr);
var kl = class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Q(Z`<slot></slot>`, this.shadowRoot);
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
    return ee.notNull(e), e;
  }
  initPopup() {
    this.popup = lt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !ut(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    ee.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return Q(Z`${t}`, i), i;
  }
};
u(kl, "InspectorButtonElement");
re(kl);
var At = class extends HTMLElement {
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
    return Zu(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Fr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Tn(e)) {
      let t = Fi(e.angle);
      So(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ka(e) || Qa(e) || es(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Rn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    Q(Z`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!zl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!zl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    ee.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Xu(e)) {
      let t, i = Fi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Vu(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Yu(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    ee.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Gp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(At, "OperationInspectorElement"), z([ze], At.prototype, "ifInput", 2), z([ze], At.prototype, "angleInputLabel", 2), z([ze], At.prototype, "angleInput", 2), z([ze], At.prototype, "angleSlider", 2), z([ze], At.prototype, "denominatorInput", 2), z([ze], At.prototype, "denominatorVariableLabel", 2), z([ze], At.prototype, "denominatorLabel", 2), z([ze], At.prototype, "reduceAngleFractionCheckbox", 2), z([ze], At.prototype, "flagInput", 2), z([G], At.prototype, "conditionalGatePaneDisabled", 2), z([G], At.prototype, "anglePaneDisabled", 2), z([G], At.prototype, "conditionalFlagPaneDisabled", 2);
re(At);
var ts = ii(dd(), 1);
var Ur = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.ket = 0;
    this.qubitCount = 1;
    this.amplitude = "";
    this.hidePhase = false;
    this.popupTemplateId = "qubit-circle-popup-template";
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.addPopupEventListeners();
  }
  update() {
    Q(Z`<style>
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
            border-color: rgb(220 38 38); /* red-600 */
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

          :host(:hover) #magnitude {
            background-color: rgb(249 115 22); /* orange-500 */
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
    let e = lt(this, { allowHTML: true, animation: false, arrow: It + It, delay: 0, theme: "qni" });
    if (this.popupTemplate === null)
      return;
    let t = new ts.default(this.amplitude), i = this.popupTemplate.content.querySelector(".ket-binary"), l = this.popupTemplate.content.querySelector(".ket-decimal"), c = this.popupTemplate.content.querySelector(".amplitude-real"), f = this.popupTemplate.content.querySelector(".amplitude-imag"), g = this.popupTemplate.content.querySelector(".probability"), h = this.popupTemplate.content.querySelector(".phase");
    i && (i.textContent = this.ket.toString(2).padStart(this.qubitCount, "0")), l && (l.textContent = this.ket.toString()), c && (c.textContent = wt(t.re, 5)), f && (f.textContent = `${wt(t.im, 5)}i`), g && (g.textContent = `${wt(this.magnitude * this.magnitude * 100, 4)}%`), h && (h.textContent = `${wt(this.phaseDeg, 2)}\xB0`);
    let p = document.createElement("div");
    p.appendChild(this.popupTemplate.content.cloneNode(true)), e.setContent(p.innerHTML), e.show();
  }
  get magnitude() {
    return new ts.default(this.amplitude).abs();
  }
  get phase() {
    return new ts.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let e = this._tippy;
    ee.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
};
u(Ur, "QubitCircleElement"), z([G], Ur.prototype, "ket", 2), z([G], Ur.prototype, "qubitCount", 2), z([G], Ur.prototype, "amplitude", 2), z([G], Ur.prototype, "hidePhase", 2), z([G], Ur.prototype, "popupTemplateId", 2), Ur = z([re], Ur);
var fd = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var hd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Un = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = bt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), g = f.left + window.pageXOffset, h = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (g + c)}px`, i.style.top = `${t.clientY - (h + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = ot(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Qe(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Q(Z`<style>
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
    return Z([fd]);
  }
  get tailSpinIcon() {
    return Z([hd]);
  }
};
u(Un, "RunCircuitButtonElement"), z([G], Un.prototype, "running", 2), z([G], Un.prototype, "debug", 2), z([ze], Un.prototype, "body", 2), z([ze], Un.prototype, "ripple", 2);
re(Un);
var cn = class extends HTMLElement {
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
    Q(Z`<style>
          :host {
            position: relative;
          }
          :host::before,
          :host::after {
            position: absolute;
            display: flex;
            justify-content: center;
            color: var(--colors-magnitude, #1cb0f6);
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
        </div>`, this.shadowRoot);
  }
};
u(cn, "CircuitBlockElement"), z([G], cn.prototype, "comment", 2), z([G], cn.prototype, "finalized", 2), cn = z([re], cn);
var vd = ii(Ra(), 1);
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
var Nl = u((r) => r != null && r instanceof St, "isCircuitDropzoneElement");
var Mo;
var St = class extends HTMLElement {
  constructor() {
    super(...arguments);
    oa(this, Mo, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = bt({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      ee.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      ee.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
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
    this.circuitDropzoneService = ot(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = aa(this, Mo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: e }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: e }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = ia(this, Mo)) == null || e.abort();
  }
  update() {
    Q(Z`<style>
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, vd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!ut(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  get wireSvg() {
    return Z([md]);
  }
};
u(St, "CircuitDropzoneElement"), Mo = /* @__PURE__ */ new WeakMap(), z([G], St.prototype, "operationName", 2), z([G], St.prototype, "inputWireQuantum", 2), z([G], St.prototype, "outputWireQuantum", 2), z([G], St.prototype, "connectTop", 2), z([G], St.prototype, "connectBottom", 2), z([G], St.prototype, "shadow", 2), z([G], St.prototype, "debug", 2);
re(St);
var pn = u((r) => r != null && r instanceof Nt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let f = e(i, l, c), g = t.get(f);
  return g ? g.push(i) : t.set(f, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Nt = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = bt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      ee.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = ot(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Qe(e.value)}`);
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
    Q(Z`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      Cn(l.operation) && (l.operation.controls = []);
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
        c.operation.enable(), c.connectTop = i.some((g) => this.bit(g) < this.bit(c)), c.connectBottom = i.some((g) => this.bit(g) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let f = Math.min(...l), g = Math.max(...l);
        f < this.bit(c) && this.bit(c) < g && (c.connectTop = true, c.connectBottom = true);
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
        if (!So(f.operation))
          throw new Error(`${f.operation} isn't a phase-gate element.`);
        return l.angle === f.operation.angle;
      }).map((f) => this.bit(f));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((f) => f < this.bit(i)), i.connectBottom = c.some((f) => f > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((h) => h.connectTop || h.connectBottom).map((h) => this.bit(h)), f = Math.min(...c), g = Math.max(...c);
      f < this.bit(i) && this.bit(i) < g && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let f = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? f.disable() : (f.enable(), c.connectTop = i.some((g) => this.bit(c) > g), c.connectBottom = i.some((g) => this.bit(c) < g));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((m) => m.operationName))], c = this.numControlGateDropzones(e, l), f = i.map((m) => this.bit(m)), g = c === null ? f : f.slice(0, c), h = t.map((m) => this.bit(m)), p = g.concat(h);
    for (let [m, x] of Object.entries(i)) {
      let S = x.operation;
      x.connectBottom = p.some((M) => this.bit(x) < M), x.connectTop = p.some((M) => this.bit(x) > M), c === null || c !== null && parseInt(m) < c ? S.enable() : (x.connectTop = Math.max(...p) > this.bit(x), S.disable());
    }
    for (let m of t) {
      if (!Cn(m.operation))
        throw new Error(`${m.operation} isn't controllable.`);
      m.operation.controls = this.controlBits(m, f, e), m.connectTop = p.some((x) => x < this.bit(m)), m.connectBottom = p.some((x) => x > this.bit(m));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((h) => _l(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), l = t.map((h) => this.bit(h)), c = i.concat(l), f = Math.min(...c), g = Math.max(...c);
    for (let h of this.freeDropzones)
      f < this.bit(h) && this.bit(h) < g && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return ee.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return ee.notNull(t), t;
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
    let e = new St();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new St();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && _l(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, g = 0, h = 0, p = 0, m = 0, x = 0;
    return this.dropzones.filter((S) => S.occupied).filter((S) => Cn(S.operation)).filter((S) => e === void 0 ? true : Kp(S.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Qp(S.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : ed(S.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : td(S.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : So(S.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : rd(S.operation) ? (g += 1, e.maxCtTargetGates !== 0 && g > e.maxCtTargetGates ? false : !e.disableCt) : nd(S.operation) ? (h += 1, e.maxCrnotTargetGates !== 0 && h > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ka(S.operation) ? (p += 1, e.maxCrxTargetGates !== 0 && p > e.maxCrxTargetGates ? false : !e.disableCrx) : Qa(S.operation) ? (m += 1, e.maxCryTargetGates !== 0 && m > e.maxCryTargetGates ? false : !e.disableCry) : es(S.operation) ? (x += 1, e.maxCrzTargetGates !== 0 && x > e.maxCrzTargetGates ? false : !e.disableCrz) : id(S.operation) ? !e.disableCswap : true);
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
    ut(e.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
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
    for (let [t, i] of Ge(this.operations, (l) => l.constructor))
      switch (t) {
        case tr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.if))
            for (let [g, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), g !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.if))
            for (let [g, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), g !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.if))
            for (let [g, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), g !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case dr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.if))
            for (let [g, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), g !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.angle))
            for (let [g, h] of Ge(f, (p) => p.if))
              for (let [p, m] of Ge(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((T) => T.bit), A = { type: S, targets: M };
                g !== "" && (A.if = g), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.if))
            for (let [g, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), g !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.if))
            for (let [g, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), g !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.angle))
            for (let [g, h] of Ge(f, (p) => p.if))
              for (let [p, m] of Ge(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((T) => T.bit), A = { type: S, targets: M };
                g !== "" && (A.if = g), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.angle))
            for (let [g, h] of Ge(f, (p) => p.if))
              for (let [p, m] of Ge(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((T) => T.bit), A = { type: S, targets: M };
                g !== "" && (A.if = g), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.angle))
            for (let [g, h] of Ge(f, (p) => p.if))
              for (let [p, m] of Ge(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((T) => T.bit), A = { type: S, targets: M };
                g !== "" && (A.if = g), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case lr: {
          let l = i.filter((h) => !h.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, g = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (g.controls = f), e.push(g);
          break;
        }
        case Wt: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => Cn(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case nt: {
          let l = i, c = i.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Ut: {
          let l = i;
          for (let [, c] of Ge(l, (f) => f.value)) {
            let f = c.map((g) => g.bit);
            e.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of Ge(l, (g) => g.flag)) {
            let g = f.map((m) => m.bit), p = { type: f[0].operationType, targets: g };
            c !== "" && (p.flag = c), e.push(p);
          }
          break;
        }
        default:
          throw new Et("Unrecognized operation", { klass: t });
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
};
u(Nt, "CircuitStepElement"), z([G], Nt.prototype, "active", 2), z([G], Nt.prototype, "breakpoint", 2), z([G], Nt.prototype, "shadow", 2), z([G], Nt.prototype, "keep", 2), z([G], Nt.prototype, "debug", 2);
re(Nt);
var Ei = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = bt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
      this.circuit.draggable = true;
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
        ee.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), g = f.dropzones[l.wireIndex];
        ee.notNull(g), g.append(i), g.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
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
      this.circuit.resize();
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
      Np(i) && i.initMenu();
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
    this.circuitEditorService = ot(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Qe(e.value)}`);
    });
  }
  connectedCallback() {
    this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable);
  }
  update() {
    Q(Z`<slot></slot>`, this.shadowRoot);
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
    !ut(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!ut(t))
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
    if (!Tn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!Rn(t))
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
    if (ee.notNull(i), !Tn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!Rn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!pn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!pn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!pn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!pn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!pn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
};
u(Ei, "CircuitEditorElement"), z([G], Ei.prototype, "debug", 2), z([ze], Ei.prototype, "circuit", 2), z([ze], Ei.prototype, "inspectorButton", 2);
re(Ei);
var Po;
var Gl = class extends HTMLElement {
  constructor() {
    super(...arguments);
    oa(this, Po, null);
  }
  connectedCallback() {
    let { signal: e } = aa(this, Po, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = ia(this, Po)) == null || e.abort();
  }
  update() {
    Q(Z`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, Ml(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => ut(e));
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), Ml(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!ut(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
};
u(Gl, "PaletteDropzoneElement"), Po = /* @__PURE__ */ new WeakMap();
re(Gl);
var se = class extends xe(HTMLElement) {
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
    this.quantumCircuitMachine = bt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = ot(this.quantumCircuitMachine).onTransition((e) => {
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
    return ee.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
      this.append(new Nt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return ee.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new Nt();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      ee.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && i !== null && this.makeOperationsHoverable(), e === "data-json" && i !== "" && (this.loadFromJson(i), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Q(Z`<slot></slot>`, this.shadowRoot);
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
      let l = new tr();
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
      let l = new cr();
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
      let l = new pr();
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
      let l = new dr();
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
      let f = new nr();
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
      let l = new ur();
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
      let l = new ir();
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
      let l = new or();
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
      let l = new ar();
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
      let l = new sr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new lr(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  control(...e) {
    let t = this.applyOperationToTargets(() => new Wt(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new nt(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Ut();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new rr(), ...e), this.resize(), this;
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
    return this.controlledU(tr, e, t), this;
  }
  cnot(e, t) {
    return this.controlledU(cr, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(pr, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(dr, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(ur, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(ir, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(or, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(sr, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(lr, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new Wt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), g = Math.max(...f) + 1, h = this.appendStepWithDropzones(g);
    for (let p of l)
      h.dropzoneAt(p).put(new Wt());
    for (let p of c)
      h.dropzoneAt(p).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(h);
  }
  appendStep() {
    let e = new Nt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Nt();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new St();
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
      for (let g of c) {
        switch (true) {
          case /^\|0>$/.test(g): {
            let h = new Ut();
            h.value = "0", f.appendOperation(h);
            break;
          }
          case /^\|1>$/.test(g): {
            let h = new Ut();
            h.value = "1", f.appendOperation(h);
            break;
          }
          case /^H/.test(g): {
            let h = new tr();
            h.if = this.ifVariable(g.slice(1)), f.appendOperation(h);
            break;
          }
          case (/^X$/.test(g) || /^X<(.+)$/.test(g)): {
            let h = new cr();
            h.if = g.slice(2).trim(), f.appendOperation(h);
            break;
          }
          case /^Y/.test(g): {
            let h = new pr();
            h.if = this.ifVariable(g.slice(1)), f.appendOperation(h);
            break;
          }
          case /^Z/.test(g): {
            let h = new dr();
            h.if = this.ifVariable(g.slice(1)), f.appendOperation(h);
            break;
          }
          case /^P/.test(g): {
            let h = new nr();
            h.angle = this.angleParameter(g.slice(1)), f.appendOperation(h);
            break;
          }
          case /^T/.test(g): {
            let h = new ur();
            h.if = this.ifVariable(g.slice(1)), f.appendOperation(h);
            break;
          }
          case /^X\^½/.test(g): {
            let h = new ir();
            h.if = this.ifVariable(g.slice(3)), f.appendOperation(h);
            break;
          }
          case /^Rx/.test(g): {
            let h = new or();
            h.angle = this.angleParameter(g.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Ry/.test(g): {
            let h = new ar();
            h.angle = this.angleParameter(g.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Rz/.test(g): {
            let h = new sr();
            h.angle = this.angleParameter(g.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Swap$/.test(g): {
            let h = new lr();
            f.appendOperation(h);
            break;
          }
          case /^•$/.test(g): {
            let h = new Wt();
            f.appendOperation(h);
            break;
          }
          case /^Bloch$/.test(g): {
            let h = new nt();
            f.appendOperation(h);
            break;
          }
          case /^Measure/.test(g): {
            let h = new rr(), p = ((/^>(.+)$/.exec(g.slice(7)) || [])[1] || "").trim();
            h.flag = p, f.appendOperation(h);
            break;
          }
          case /^[[{](.+)$/.test(g): {
            let h = g.slice(1);
            f.remove(), t = new cn(), t.comment = h, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(g): {
            f.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (g !== 1)
              throw new Error(`Unknown operation: ${g}`);
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
          let f = c.map((m) => i.bit(m)), g = i.bit(l), h = f[0] === g ? f[1] : f[0], p = i.dropzoneAt(h);
          l.inputWireQuantum = t, l.outputWireQuantum = p.inputWireQuantum, t = p.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!pn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Nl(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    ee.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  set draggable(e) {
    for (let t of this.operations)
      t.draggable = e;
  }
  snapTargetAt(e, t) {
    return this.isVertical ? this.snapTargets[t][e] : this.snapTargets[e][t];
  }
  setSnapTargets(e) {
    let t = this.dropzones.filter((c) => !c.occupied), i = [];
    this.snapTargets = {};
    let l = e.dropzone;
    Nl(l) && t.push(l);
    for (let [c, f] of Object.entries(this.dropzones)) {
      let g = f.snapTarget, h = this.isVertical ? g.y : g.x, p = this.isVertical ? g.x : g.y, m = parseInt(c) % this.wireCount, x = h - e.snapRange * 0.75, S = h + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: p, y: x }) : i.push({ x, y: p }), this.snapTargets[x] === void 0 && (this.snapTargets[x] = {}), this.snapTargets[x][p] === void 0 && (this.snapTargets[x][p] = { dropzone: null, stepIndex: -1, wireIndex: m })), this.isVertical ? i.push({ x: p, y: S }) : i.push({ x: S, y: p }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][p] === void 0 && (this.snapTargets[S][p] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: m }), (!f.occupied || f === l) && i.push(g), this.snapTargets[h] === void 0 && (this.snapTargets[h] = {}), this.snapTargets[h][p] === void 0 && (this.snapTargets[h][p] = { dropzone: f, stepIndex: null, wireIndex: m });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    ee.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let g = c[f];
          g.stepIndex !== null && (g.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let f = c.snapTarget, g = this.isVertical ? f.y : f.x, h = this.isVertical ? f.x : f.y;
      ee.notNull(this.snapTargets[g]), this.snapTargets[g][h] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
};
u(se, "QuantumCircuitElement"), z([G], se.prototype, "minStepCount", 2), z([G], se.prototype, "minWireCount", 2), z([G], se.prototype, "maxWireCount", 2), z([G], se.prototype, "editing", 2), z([G], se.prototype, "updateUrl", 2), z([G], se.prototype, "json", 2), z([G], se.prototype, "circuitTitle", 2), z([G], se.prototype, "debug", 2), z([G], se.prototype, "chDisabled", 2), z([G], se.prototype, "chMaxControlGates", 2), z([G], se.prototype, "chMaxTargetGates", 2), z([G], se.prototype, "cnotDisabled", 2), z([G], se.prototype, "cnotMaxControlGates", 2), z([G], se.prototype, "cnotMaxTargetGates", 2), z([G], se.prototype, "cyDisabled", 2), z([G], se.prototype, "cyMaxControlGates", 2), z([G], se.prototype, "cyMaxTargetGates", 2), z([G], se.prototype, "czDisabled", 2), z([G], se.prototype, "czMaxControlGates", 2), z([G], se.prototype, "czMaxTargetGates", 2), z([G], se.prototype, "cphaseDisabled", 2), z([G], se.prototype, "cphaseMaxControlGates", 2), z([G], se.prototype, "cphaseMaxTargetGates", 2), z([G], se.prototype, "ctDisabled", 2), z([G], se.prototype, "ctMaxControlGates", 2), z([G], se.prototype, "ctMaxTargetGates", 2), z([G], se.prototype, "crnotDisabled", 2), z([G], se.prototype, "crnotMaxControlGates", 2), z([G], se.prototype, "crnotMaxTargetGates", 2), z([G], se.prototype, "crxDisabled", 2), z([G], se.prototype, "crxMaxControlGates", 2), z([G], se.prototype, "crxMaxTargetGates", 2), z([G], se.prototype, "cryDisabled", 2), z([G], se.prototype, "cryMaxControlGates", 2), z([G], se.prototype, "cryMaxTargetGates", 2), z([G], se.prototype, "crzDisabled", 2), z([G], se.prototype, "crzMaxControlGates", 2), z([G], se.prototype, "crzMaxTargetGates", 2), z([G], se.prototype, "cswapDisabled", 2), z([G], se.prototype, "cswapMaxControlGates", 2), z([G], se.prototype, "swapDisabled", 2), z([G], se.prototype, "controlControlDisabled", 2), z([G], se.prototype, "controlControlMaxTargetGates", 2), z([G], se.prototype, "phasePhaseDisabled", 2), z([G], se.prototype, "phasePhaseMaxTargetGates", 2), z([Mt], se.prototype, "blocks", 2);
re(se);
var dn = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-init", this.run), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    Q(Z`<slot></slot>`, this.shadowRoot);
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
          let g = parseInt(f), h = c.dropzoneAt(g).operation;
          if (od(h)) {
            let p = t.blochVectors[g];
            h.x = p[0], h.y = p[1], h.z = p[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let g in f) {
            let h = parseInt(g), p = c.dropzoneAt(h).operation;
            ad(p) && (p.value = f[h].toString());
          }
        }
        for (let f of c.dropzones) {
          let g = f.operation;
          !Fr(g) || g.if !== "" && (g.disabled = !t.flags[g.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let g in t.amplitudes) {
            let h = t.amplitudes[g];
            f[g] = new Jt(h[0], h[1]);
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
        throw new Et("Unknown service worker message", { data: t });
    }
  }
  run() {
    let e = this.activeStepIndex, t = this.circuit.serialize();
    ee.need(t.length > 0, "non-zero step length");
    let i = Math.max(...t.map((c) => Math.max(...c.map((f) => {
      let g = [];
      return Cn(f) && (g = f.controls), Math.max(...f.targets.concat(g));
    })))), l = i >= 0 ? i + 1 : 1;
    this.circleNotation.qubitCount = l, this.worker.postMessage({ qubitCount: l, stepIndex: e, steps: t, targets: this.circleNotation.visibleQubitCircleKets });
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, t = this.circuit.breakpoint, i = e || t;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    ee.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
};
u(dn, "QuantumSimulatorElement"), z([G], dn.prototype, "updateUrl", 2), z([ze], dn.prototype, "circuit", 2), z([ze], dn.prototype, "circleNotation", 2), z([Mt], dn.prototype, "runCircuitButtons", 2), z([Oo(10)], dn.prototype, "run", 1);
re(dn);

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
  Jt as Complex
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
 * @license Fraction.js v4.1.2 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=application.js.map
