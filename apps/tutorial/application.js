var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var zf = Object.create;
var ji = Object.defineProperty;
var qu = Object.getOwnPropertyDescriptor;
var Df = Object.getOwnPropertyNames;
var kf = Object.getPrototypeOf;
var Rf = Object.prototype.hasOwnProperty;
var Nf = /* @__PURE__ */ __name((r) => ji(r, "__esModule", { value: true }), "Nf");
var u = /* @__PURE__ */ __name((r, e) => ji(r, "name", { value: e, configurable: true }), "u");
var Es = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "Es");
var Gf = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of Df(e))
      !Rf.call(r, l) && (t || l !== "default") && ji(r, l, { get: () => e[l], enumerable: !(i = qu(e, l)) || i.enumerable });
  return r;
}, "Gf");
var Bi = /* @__PURE__ */ __name((r, e) => Gf(Nf(ji(r != null ? zf(kf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Bi");
var z = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? qu(e, t) : e, c = r.length - 1, d; c >= 0; c--)
    (d = r[c]) && (l = (i ? d(e, t, l) : d(l)) || l);
  return i && l && ji(e, t, l), l;
}, "z");
var Lu = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "Lu");
var ta = /* @__PURE__ */ __name((r, e, t) => (Lu(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "ta");
var ra = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "ra");
var na = /* @__PURE__ */ __name((r, e, t, i) => (Lu(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "na");
var Bu = Es((Ss, ju) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(S) {
      function M() {
        var I = Error.apply(this, arguments);
        I.name = this.name = S, this.stack = I.stack, this.message = I.message;
      }
      __name(M, "M");
      u(M, "errorConstructor");
      function _() {
      }
      __name(_, "_");
      return u(_, "IntermediateInheritor"), _.prototype = Error.prototype, M.prototype = new _(), M;
    }
    __name(i, "i");
    u(i, "createError");
    var l = D.DivisionByZero = i("DivisionByZero"), c = D.InvalidParameter = i("InvalidParameter");
    function d(S, M) {
      return isNaN(S = parseInt(S, 10)) && h(), S * M;
    }
    __name(d, "d");
    u(d, "assign");
    function h() {
      throw new c();
    }
    __name(h, "h");
    u(h, "throwInvalidParam");
    function m(S) {
      for (var M = {}, _ = S, I = 2, L = 4; L <= _; ) {
        for (; _ % I === 0; )
          _ /= I, M[I] = (M[I] || 0) + 1;
        L += 1 + 2 * I++;
      }
      return _ !== S ? _ > 1 && (M[_] = (M[_] || 0) + 1) : M[S] = (M[S] || 0) + 1, M;
    }
    __name(m, "m");
    u(m, "factorize");
    var y = u(function(S, M) {
      var _ = 0, I = 1, L = 1, E = 0, B = 0, R = 0, X = 1, V = 1, H = 0, W = 1, ie = 1, oe = 1, U = 1e7, ce;
      if (S != null)
        if (M !== void 0)
          _ = S, I = M, L = _ * I;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (_ = S.n, I = S.d, "s" in S && (_ *= S.s)) : 0 in S ? (_ = S[0], 1 in S && (I = S[1])) : h(), L = _ * I;
              break;
            }
            case "number": {
              if (S < 0 && (L = S, S = -S), S % 1 === 0)
                _ = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); W <= U && oe <= U; )
                  if (ce = (H + ie) / (W + oe), S === ce) {
                    W + oe <= U ? (_ = H + ie, I = W + oe) : oe > W ? (_ = ie, I = oe) : (_ = H, I = W);
                    break;
                  } else
                    S > ce ? (H += ie, W += oe) : (ie += H, oe += W), W > U ? (_ = ie, I = oe) : (_ = H, I = W);
                _ *= V;
              } else
                (isNaN(S) || isNaN(M)) && (I = _ = NaN);
              break;
            }
            case "string":
              if (W = S.match(/\d+|./g), W === null && h(), W[H] === "-" ? (L = -1, H++) : W[H] === "+" && H++, W.length === H + 1 ? B = d(W[H++], L) : W[H + 1] === "." || W[H] === "." ? (W[H] !== "." && (E = d(W[H++], L)), H++, (H + 1 === W.length || W[H + 1] === "(" && W[H + 3] === ")" || W[H + 1] === "'" && W[H + 3] === "'") && (B = d(W[H], L), X = Math.pow(10, W[H].length), H++), (W[H] === "(" && W[H + 2] === ")" || W[H] === "'" && W[H + 2] === "'") && (R = d(W[H + 1], L), V = Math.pow(10, W[H + 1].length) - 1, H += 3)) : W[H + 1] === "/" || W[H + 1] === ":" ? (B = d(W[H], L), X = d(W[H + 2], 1), H += 3) : W[H + 3] === "/" && W[H + 1] === " " && (E = d(W[H], L), B = d(W[H + 2], L), X = d(W[H + 4], 1), H += 5), W.length <= H) {
                I = X * V, L = _ = R + I * E + V * B;
                break;
              }
            default:
              h();
          }
      if (I === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(_), t.d = Math.abs(I);
    }, "parse");
    function x(S, M, _) {
      for (var I = 1; M > 0; S = S * S % _, M >>= 1)
        M & 1 && (I = I * S % _);
      return I;
    }
    __name(x, "x");
    u(x, "modpow");
    function P(S, M) {
      for (; M % 2 === 0; M /= 2)
        ;
      for (; M % 5 === 0; M /= 5)
        ;
      if (M === 1)
        return 0;
      for (var _ = 10 % M, I = 1; _ !== 1; I++)
        if (_ = _ * 10 % M, I > e)
          return 0;
      return I;
    }
    __name(P, "P");
    u(P, "cycleLen");
    function T(S, M, _) {
      for (var I = 1, L = x(10, _, M), E = 0; E < 300; E++) {
        if (I === L)
          return E;
        I = I * 10 % M, L = L * 10 % M;
      }
      return 0;
    }
    __name(T, "T");
    u(T, "cycleStart");
    function A(S, M) {
      if (!S)
        return M;
      if (!M)
        return S;
      for (; ; ) {
        if (S %= M, !S)
          return M;
        if (M %= S, !M)
          return S;
      }
    }
    __name(A, "A");
    u(A, "gcd");
    function D(S, M) {
      if (!(this instanceof D))
        return new D(S, M);
      y(S, M), S = A(t.d, t.n), this.s = t.s, this.n = t.n / S, this.d = t.d / S;
    }
    __name(D, "D");
    u(D, "Fraction"), D.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new D(this.n, this.d);
    }, neg: function() {
      return new D(-this.s * this.n, this.d);
    }, add: function(S, M) {
      return y(S, M), new D(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(S, M) {
      return y(S, M), new D(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(S, M) {
      return y(S, M), new D(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(S, M) {
      return y(S, M), new D(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new D(this);
    }, mod: function(S, M) {
      return isNaN(this.n) || isNaN(this.d) ? new D(NaN) : S === void 0 ? new D(this.s * this.n % this.d, 1) : (y(S, M), t.n === 0 && this.d === 0 && D(0, 0), new D(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(S, M) {
      return y(S, M), new D(A(t.n, this.n) * A(t.d, this.d), t.d * this.d);
    }, lcm: function(S, M) {
      return y(S, M), t.n === 0 && this.n === 0 ? new D() : new D(t.n * this.n, A(t.n, this.n) * A(t.d, this.d));
    }, ceil: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new D(NaN) : new D(Math.ceil(S * this.s * this.n / this.d), S);
    }, floor: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new D(NaN) : new D(Math.floor(S * this.s * this.n / this.d), S);
    }, round: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new D(NaN) : new D(Math.round(S * this.s * this.n / this.d), S);
    }, inverse: function() {
      return new D(this.s * this.d, this.n);
    }, pow: function(S, M) {
      if (y(S, M), t.d === 1)
        return t.s < 0 ? new D(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new D(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var _ = m(this.n), I = m(this.d), L = 1, E = 1;
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
      for (var B in I)
        if (B !== "1") {
          if (I[B] *= t.n, I[B] % t.d === 0)
            I[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, I[B]);
        }
      return t.s < 0 ? new D(E, L) : new D(L, E);
    }, equals: function(S, M) {
      return y(S, M), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(S, M) {
      y(S, M);
      var _ = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < _) - (_ < 0);
    }, simplify: function(S) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var M = this.abs().toContinued();
      S = S || 1e-3;
      function _(E) {
        return E.length === 1 ? new D(E[0]) : _(E.slice(1)).inverse().add(E[0]);
      }
      __name(_, "_");
      u(_, "rec");
      for (var I = 0; I < M.length; I++) {
        var L = _(M.slice(0, I + 1));
        if (L.sub(this.abs()).abs().valueOf() < S)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(S, M) {
      return y(S, M), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var M, _ = "", I = this.n, L = this.d;
      return this.s < 0 && (_ += "-"), L === 1 ? _ += I : (S && (M = Math.floor(I / L)) > 0 && (_ += M, _ += " ", I %= L), _ += I, _ += "/", _ += L), _;
    }, toLatex: function(S) {
      var M, _ = "", I = this.n, L = this.d;
      return this.s < 0 && (_ += "-"), L === 1 ? _ += I : (S && (M = Math.floor(I / L)) > 0 && (_ += M, I %= L), _ += "\\frac{", _ += I, _ += "}{", _ += L, _ += "}"), _;
    }, toContinued: function() {
      var S, M = this.n, _ = this.d, I = [];
      if (isNaN(M) || isNaN(_))
        return I;
      do
        I.push(Math.floor(M / _)), S = M % _, M = _, _ = S;
      while (M !== 1);
      return I;
    }, toString: function(S) {
      var M, _ = this.n, I = this.d;
      if (isNaN(_) || isNaN(I))
        return "NaN";
      S = S || 15;
      var L = P(_, I), E = T(_, I, L), B = this.s === -1 ? "-" : "";
      if (B += _ / I | 0, _ %= I, _ *= 10, _ && (B += "."), L) {
        for (var R = E; R--; )
          B += _ / I | 0, _ %= I, _ *= 10;
        B += "(";
        for (var R = L; R--; )
          B += _ / I | 0, _ %= I, _ *= 10;
        B += ")";
      } else
        for (var R = S; _ && R--; )
          B += _ / I | 0, _ %= I, _ *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return D;
    }) : typeof Ss == "object" ? (Object.defineProperty(D, "__esModule", { value: true }), D.default = D, D.Fraction = D, ju.exports = D) : r.Fraction = D;
  })(Ss);
});
var za = Es((Gc, tl) => {
  (function(r) {
    typeof Gc == "object" && typeof tl != "undefined" ? tl.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    __name(l, "l");
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c = {};
    function d(n) {
      return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(d, "d");
    u(d, "a"), Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
    var h = u(function(n) {
      return !!n && d(n) === "object";
    }, "s"), m = u(function(n) {
      return typeof n == "function";
    }, "l"), y = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return h(n) && n.nodeType === 11;
    }, object: h, func: m, number: function(n) {
      return typeof n == "number";
    }, bool: function(n) {
      return typeof n == "boolean";
    }, string: function(n) {
      return typeof n == "string";
    }, element: function(n) {
      if (!n || d(n) !== "object")
        return false;
      var o = e.getWindow(n) || e.window;
      return /object|function/.test(d(o.Element)) ? n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return h(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return h(n) && n.length !== void 0 && m(n.splice);
    } };
    c.default = y;
    var x = {};
    function P(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(P, "P");
    u(P, "f");
    function T(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p = s === "x" ? "y" : "x";
          o.page[p] = a.coords.start.page[p], o.client[p] = a.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    __name(T, "T");
    u(T, "d"), Object.defineProperty(x, "__esModule", { value: true }), x.default = void 0;
    var A = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = A.draggable, o.map.drag = A, o.methodDict.drag = "draggable", s.actions.drag = A.defaults;
    }, listeners: { "interactions:before-action-move": P, "interactions:action-resume": P, "interactions:action-move": T, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: P, move: T, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, D = A;
    x.default = D;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: true }), S.default = void 0;
    var M = { init: function(n) {
      var o = n;
      M.document = o.document, M.DocumentFragment = o.DocumentFragment || _, M.SVGElement = o.SVGElement || _, M.SVGSVGElement = o.SVGSVGElement || _, M.SVGElementInstance = o.SVGElementInstance || _, M.Element = o.Element || _, M.HTMLElement = o.HTMLElement || M.Element, M.Event = o.Event, M.Touch = o.Touch || _, M.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function _() {
    }
    __name(_, "_");
    u(_, "y");
    var I = M;
    S.default = I;
    var L = {};
    Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var E = { init: function(n) {
      var o = S.default.Element, a = n.navigator || {};
      E.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && S.default.document instanceof n.DocumentTouch, E.supportsPointerEvent = a.pointerEnabled !== false && !!S.default.PointerEvent, E.isIOS = /iP(hone|od|ad)/.test(a.platform), E.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), E.isIe9 = /MSIE 9/.test(a.userAgent), E.isOperaMobile = a.appName === "Opera" && E.supportsTouch && /Presto/.test(a.userAgent), E.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", E.pEventTypes = E.supportsPointerEvent ? S.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, E.wheelEvent = S.default.document && "onmousewheel" in S.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = E;
    L.default = B;
    var R = {};
    function X(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(X, "X");
    u(X, "P");
    function V(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[L.default.prefixedMatchesSelector](o);
    }
    __name(V, "V");
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
        n = X(n);
      }
      return null;
    }, R.parentNode = X, R.matchesSelector = V, R.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], f = n[o];
        if (p && s !== o)
          if (f) {
            var g = H(p), v = H(f);
            if (g !== p.ownerDocument)
              if (v !== p.ownerDocument)
                if (g !== v) {
                  a = a.length ? a : W(f);
                  var b = void 0;
                  if (f instanceof S.default.HTMLElement && p instanceof S.default.SVGElement && !(p instanceof S.default.SVGSVGElement)) {
                    if (p === v)
                      continue;
                    b = p.ownerSVGElement;
                  } else
                    b = p;
                  for (var w = W(b, f.ownerDocument), C = 0; w[C] && w[C] === a[C]; )
                    C++;
                  var O = [w[C - 1], w[C], a[C]];
                  if (O[0])
                    for (var N = O[0].lastChild; N; ) {
                      if (N === O[1]) {
                        o = s, a = w;
                        break;
                      }
                      if (N === O[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  G = p, k = f, (parseInt(e.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(e.getWindow(k).getComputedStyle(k).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var G, k;
      return o;
    }, R.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return true;
        if ((n = X(n)) === a)
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
        o.push(n), n = X(n);
      return o;
    }, R.trySelector = function(n) {
      return !!c.default.string(n) && (S.default.document.querySelector(n), true);
    };
    var H = u(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function W(n, o) {
      for (var a, s = [], p = n; (a = H(p)) && p !== o && a !== p.ownerDocument; )
        s.unshift(p), p = a;
      return s;
    }
    __name(W, "W");
    u(W, "E");
    function ie(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(ie, "ie");
    u(ie, "T");
    function oe(n) {
      var o = n instanceof S.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(oe, "oe");
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
    __name(Re, "Re");
    u(Re, "I");
    function We(n, o, a) {
      return n === "parent" ? (0, R.parentNode)(a) : n === "self" ? o.getRect(a) : (0, R.closest)(a, n);
    }
    __name(We, "We");
    u(We, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.getStringOptionResult = We, ce.resolveRectLike = function(n, o, a, s) {
      var p, f = n;
      return c.default.string(f) ? f = We(f, o, a) : c.default.func(f) && (f = f.apply(void 0, function(g) {
        if (Array.isArray(g))
          return Re(g);
      }(p = s) || function(g) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(g))
          return Array.from(g);
      }(p) || function(g, v) {
        if (g) {
          if (typeof g == "string")
            return Re(g, v);
          var b = Object.prototype.toString.call(g).slice(8, -1);
          return b === "Object" && g.constructor && (b = g.constructor.name), b === "Map" || b === "Set" ? Array.from(g) : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? Re(g, v) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(f) && (f = (0, R.getElementRect)(f)), f;
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
      var s = n.options[a], p = s && s.origin || n.options.origin, f = (0, ce.resolveRectLike)(p, n, o, [n && o]);
      return (0, ce.rectToXY)(f) || { x: 0, y: 0 };
    };
    var fe = {};
    function Ye(n) {
      return n.trim().split(/ +/);
    }
    __name(Ye, "Ye");
    u(Ye, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Ye(o)), c.default.array(o))
        return o.reduce(function(b, w) {
          return (0, U.default)(b, n(w, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var p = 0; p < a.length; p++) {
          var f;
          f = a[p], n(o, f, s);
        }
      else if (c.default.object(a))
        for (var g in a) {
          var v = Ye(g).map(function(b) {
            return "".concat(o).concat(b);
          });
          n(v, a[g], s);
        }
      return s;
    }, "n"), "t");
    var Qe = {};
    Object.defineProperty(Qe, "__esModule", { value: true }), Qe.default = void 0, Qe.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var kt = {};
    function Mt(n, o) {
      for (var a in o) {
        var s = Mt.prefixedPropREs, p = false;
        for (var f in s)
          if (a.indexOf(f) === 0 && s[f].test(a)) {
            p = true;
            break;
          }
        p || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    __name(Mt, "Mt");
    u(Mt, "X"), Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0, Mt.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Ir = Mt;
    kt.default = Ir;
    var K = {};
    function St(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    __name(St, "St");
    u(St, "W");
    function Ct(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Ct, "Ct");
    u(Ct, "L");
    function zr(n, o) {
      return o = o || { x: 0, y: 0 }, L.default.isOperaMobile && St(n) ? (Ct("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Ct("page", n, o), o;
    }
    __name(zr, "zr");
    u(zr, "U");
    function Wt(n, o) {
      return o = o || {}, L.default.isOperaMobile && St(n) ? Ct("screen", n, o) : Ct("client", n, o), o;
    }
    __name(Wt, "Wt");
    u(Wt, "V");
    function hr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(hr, "hr");
    u(hr, "N");
    function vr(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var f in o)
        o[f] /= n.length;
      return o;
    }
    __name(vr, "vr");
    u(vr, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, K.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.isNativePointer = St, K.getXY = Ct, K.getPageXY = zr, K.getClientXY = Wt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? vr(o) : o[0];
      zr(s, n.page), Wt(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = hr, K.pointerAverage = vr, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = hr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), f = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: f, width: p - a, height: f - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = hr(n), f = p[0][a] - p[1][a], g = p[0][s] - p[1][s];
      return (0, Qe.default)(f, g);
    }, K.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = hr(n), f = p[1][a] - p[0][a], g = p[1][s] - p[0][s];
      return 180 * Math.atan2(g, f) / Math.PI;
    }, K.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof S.default.Touch ? "touch" : "mouse";
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
      return kt.default;
    } });
    var Rt = {};
    function Un(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Un, "Un");
    u(Un, "G");
    function At(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(At, "At");
    u(At, "H"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.BaseEvent = void 0;
    var dn = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), At(this, "type", void 0), At(this, "target", void 0), At(this, "currentTarget", void 0), At(this, "interactable", void 0), At(this, "_interaction", void 0), At(this, "timeStamp", void 0), At(this, "immediatePropagationStopped", false), At(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Un(o.prototype, a), n;
    }();
    Rt.BaseEvent = dn, Object.defineProperty(dn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, xe.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Ur = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    xe.merge = Ur, xe.from = function(n) {
      return Ur([], n);
    };
    var Vr = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    xe.findIndex = Vr, xe.find = function(n, o) {
      return n[Vr(n, o)];
    };
    var _t = {};
    function fn(n) {
      return (fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(fn, "fn");
    u(fn, "et");
    function mr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(mr, "mr");
    u(mr, "nt");
    function gr(n, o) {
      return (gr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(gr, "gr");
    u(gr, "rt");
    function hn(n, o) {
      return !o || fn(o) !== "object" && typeof o != "function" ? ct(n) : o;
    }
    __name(hn, "hn");
    u(hn, "ot");
    function ct(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(ct, "ct");
    u(ct, "it");
    function Dr(n) {
      return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Dr, "Dr");
    u(Dr, "at");
    function Nt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nt, "Nt");
    u(Nt, "st"), Object.defineProperty(_t, "__esModule", { value: true }), _t.DropEvent = void 0;
    var Vn = function(n) {
      (function(v, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        v.prototype = Object.create(b && b.prototype, { constructor: { value: v, writable: true, configurable: true } }), b && gr(v, b);
      })(g, n);
      var o, a, s, p, f = (s = g, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (v) {
          return false;
        }
      }(), function() {
        var v, b = Dr(s);
        if (p) {
          var w = Dr(this).constructor;
          v = Reflect.construct(b, arguments, w);
        } else
          v = b.apply(this, arguments);
        return hn(this, v);
      });
      function g(v, b, w) {
        var C;
        (function(k, $) {
          if (!(k instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, g), Nt(ct(C = f.call(this, b._interaction)), "target", void 0), Nt(ct(C), "dropzone", void 0), Nt(ct(C), "dragEvent", void 0), Nt(ct(C), "relatedTarget", void 0), Nt(ct(C), "draggable", void 0), Nt(ct(C), "timeStamp", void 0), Nt(ct(C), "propagationStopped", false), Nt(ct(C), "immediatePropagationStopped", false);
        var O = w === "dragleave" ? v.prev : v.cur, N = O.element, G = O.dropzone;
        return C.type = w, C.target = N, C.currentTarget = N, C.dropzone = G, C.dragEvent = b, C.relatedTarget = b.target, C.draggable = b.interactable, C.timeStamp = b.timeStamp, C;
      }
      __name(g, "g");
      return u(g, "a"), o = g, (a = [{ key: "reject", value: function() {
        var v = this, b = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && b.cur.dropzone === this.dropzone && b.cur.element === this.target)
          if (b.prev.dropzone = this.dropzone, b.prev.element = this.target, b.rejected = true, b.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var w = b.activeDrops, C = xe.findIndex(w, function(N) {
              var G = N.dropzone, k = N.element;
              return G === v.dropzone && k === v.target;
            });
            b.activeDrops.splice(C, 1);
            var O = new g(b, this.dragEvent, "dropdeactivate");
            O.dropzone = this.dropzone, O.target = this.target, this.dropzone.fire(O);
          } else
            this.dropzone.fire(new g(b, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && mr(o.prototype, a), g;
    }(Rt.BaseEvent);
    _t.DropEvent = Vn;
    var kr = {};
    function vn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, f = s.element;
        o.dropzone = p, o.target = f, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(vn, "vn");
    u(vn, "ct");
    function wi(n, o) {
      for (var a = function(f, g) {
        for (var v = f.interactables, b = [], w = 0; w < v.list.length; w++) {
          var C = v.list[w];
          if (C.options.drop.enabled) {
            var O = C.options.drop.accept;
            if (!(c.default.element(O) && O !== g || c.default.string(O) && !R.matchesSelector(g, O) || c.default.func(O) && !O({ dropzone: C, draggableElement: g })))
              for (var N = c.default.string(C.target) ? C._context.querySelectorAll(C.target) : c.default.array(C.target) ? C.target : [C.target], G = 0; G < N.length; G++) {
                var k = N[G];
                k !== g && b.push({ dropzone: C, element: k, rect: C.getRect(k) });
              }
          }
        }
        return b;
      }(n, o), s = 0; s < a.length; s++) {
        var p = a[s];
        p.rect = p.dropzone.getRect(p.element);
      }
      return a;
    }
    __name(wi, "wi");
    u(wi, "ft");
    function Po(n, o, a) {
      for (var s = n.dropState, p = n.interactable, f = n.element, g = [], v = 0; v < s.activeDrops.length; v++) {
        var b = s.activeDrops[v], w = b.dropzone, C = b.element, O = b.rect;
        g.push(w.dropCheck(o, a, p, f, C, O) ? C : null);
      }
      var N = R.indexOfDeepestElement(g);
      return s.activeDrops[N] || null;
    }
    __name(Po, "Po");
    u(Po, "dt");
    function Ei(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new _t.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new _t.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new _t.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new _t.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new _t.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new _t.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(Ei, "Ei");
    u(Ei, "pt");
    function Si(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, f = a.prev;
      o.leave && f.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && vn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(Si, "Si");
    u(Si, "vt");
    function Mo(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f = a.dropState;
        o.dynamicDrop && (f.activeDrops = wi(o, a.element));
        var g = s, v = Po(a, g, p);
        f.rejected = f.rejected && !!v && v.dropzone === f.cur.dropzone && v.element === f.cur.element, f.cur.dropzone = v && v.dropzone, f.cur.element = v && v.element, f.events = Ei(a, 0, g);
      }
    }
    __name(Mo, "Mo");
    u(Mo, "ht"), Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(x.default), s.prototype.dropzone = function(f) {
        return function(g, v) {
          if (c.default.object(v)) {
            if (g.options.drop.enabled = v.enabled !== false, v.listeners) {
              var b = (0, fe.default)(v.listeners), w = Object.keys(b).reduce(function(C, O) {
                return C[/^(enter|leave)/.test(O) ? "drag".concat(O) : /^(activate|deactivate|move)/.test(O) ? "drop".concat(O) : O] = b[O], C;
              }, {});
              g.off(g.options.drop.listeners), g.on(w), g.options.drop.listeners = w;
            }
            return c.default.func(v.ondrop) && g.on("drop", v.ondrop), c.default.func(v.ondropactivate) && g.on("dropactivate", v.ondropactivate), c.default.func(v.ondropdeactivate) && g.on("dropdeactivate", v.ondropdeactivate), c.default.func(v.ondragenter) && g.on("dragenter", v.ondragenter), c.default.func(v.ondragleave) && g.on("dragleave", v.ondragleave), c.default.func(v.ondropmove) && g.on("dropmove", v.ondropmove), /^(pointer|center)$/.test(v.overlap) ? g.options.drop.overlap = v.overlap : c.default.number(v.overlap) && (g.options.drop.overlap = Math.max(Math.min(1, v.overlap), 0)), "accept" in v && (g.options.drop.accept = v.accept), "checker" in v && (g.options.drop.checker = v.checker), g;
          }
          return c.default.bool(v) ? (g.options.drop.enabled = v, g) : g.options.drop;
        }(this, f);
      }, s.prototype.dropCheck = function(f, g, v, b, w, C) {
        return function(O, N, G, k, $, J, F) {
          var te = false;
          if (!(F = F || O.getRect(J)))
            return !!O.options.drop.checker && O.options.drop.checker(N, G, te, O, J, k, $);
          var le = O.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, qe.default)(k, $, "drag"), Ee = K.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            te = je && be;
          }
          var ze = k.getRect($);
          if (ze && le === "center") {
            var Xt = ze.left + ze.width / 2, qr = ze.top + ze.height / 2;
            te = Xt >= F.left && Xt <= F.right && qr >= F.top && qr <= F.bottom;
          }
          return ze && c.default.number(le) && (te = Math.max(0, Math.min(F.right, ze.right) - Math.max(F.left, ze.left)) * Math.max(0, Math.min(F.bottom, ze.bottom) - Math.max(F.top, ze.top)) / (ze.width * ze.height) >= le), O.options.drop.checker && (te = O.options.drop.checker(N, G, te, O, J, k, $)), te;
        }(this, f, g, v, b, w, C);
      }, a.dynamicDrop = function(f) {
        return c.default.bool(f) ? (n.dynamicDrop = f, a) : n.dynamicDrop;
      }, (0, U.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = j.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = wi(o, a.element), p.events = Ei(a, 0, s), p.events.activate && (vn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Mo, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Si(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Mo(n, o), Si(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: wi, getDrop: Po, getDropEvents: Ei, fireDropEvents: Si, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Q = j;
    kr.default = Q;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(w) {
          return w.pointer;
        }), f = s === "start", g = s === "end", v = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], f)
          a.distance = K.touchDistance(p, v), a.box = K.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(p, v), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (g) {
          var b = o.prevEvent;
          a.distance = b.distance, a.box = b.box, a.scale = b.scale, a.ds = 0, a.angle = b.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(p, v), a.box = K.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(p, v), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(ye, "ye");
    u(ye, "bt"), Object.defineProperty(ae, "__esModule", { value: true }), ae.default = void 0;
    var he = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(p) {
        return c.default.object(p) ? (this.options.gesture.enabled = p.enabled !== false, this.setPerAction("gesture", p), this.setOnEvents("gesture", p), this) : c.default.bool(p) ? (this.options.gesture.enabled = p, this) : this.options.gesture;
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
    } }, pt = he;
    ae.default = pt;
    var dt = {};
    function Xr(n, o, a, s, p, f, g) {
      if (!o)
        return false;
      if (o === true) {
        var v = c.default.number(f.width) ? f.width : f.right - f.left, b = c.default.number(f.height) ? f.height : f.bottom - f.top;
        if (g = Math.min(g, Math.abs((n === "left" || n === "right" ? v : b) / 2)), v < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), b < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (v >= 0 ? f.left : f.right) + g;
        if (n === "top")
          return a.y < (b >= 0 ? f.top : f.bottom) + g;
        if (n === "right")
          return a.x > (v >= 0 ? f.right : f.left) - g;
        if (n === "bottom")
          return a.y > (b >= 0 ? f.bottom : f.top) - g;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : R.matchesUpTo(s, o, p));
    }
    __name(Xr, "Xr");
    u(Xr, "Pt");
    function Ci(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Ci, "Ci");
    u(Ci, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
    var ft = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      ft.cursors = function(f) {
        return f.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ft.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(f) {
        return function(g, v, b) {
          return c.default.object(v) ? (g.options.resize.enabled = v.enabled !== false, g.setPerAction("resize", v), g.setOnEvents("resize", v), c.default.string(v.axis) && /^x$|^y$|^xy$/.test(v.axis) ? g.options.resize.axis = v.axis : v.axis === null && (g.options.resize.axis = b.defaults.actions.resize.axis), c.default.bool(v.preserveAspectRatio) ? g.options.resize.preserveAspectRatio = v.preserveAspectRatio : c.default.bool(v.square) && (g.options.resize.square = v.square), g) : c.default.bool(v) ? (g.options.resize.enabled = v, g) : g.options.resize;
        }(this, f, n);
      }, o.map.resize = ft, o.methodDict.resize = "resizable", p.actions.resize = ft.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.rect;
          s._rects = { start: (0, U.default)({}, f), corrected: (0, U.default)({}, f), previous: (0, U.default)({}, f), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), Ci(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.interactable.options.resize.invert, g = f === "reposition" || f === "negate", v = s.rect, b = s._rects, w = b.start, C = b.corrected, O = b.delta, N = b.previous;
          if ((0, U.default)(N, C), g) {
            if ((0, U.default)(C, v), f === "reposition") {
              if (C.top > C.bottom) {
                var G = C.top;
                C.top = C.bottom, C.bottom = G;
              }
              if (C.left > C.right) {
                var k = C.left;
                C.left = C.right, C.right = k;
              }
            }
          } else
            C.top = Math.min(v.top, w.bottom), C.bottom = Math.max(v.bottom, w.top), C.left = Math.min(v.left, w.right), C.right = Math.max(v.right, w.left);
          for (var $ in C.width = C.right - C.left, C.height = C.bottom - C.top, C)
            O[$] = C[$] - N[$];
          p.edges = s.prepared.edges, p.rect = C, p.deltaRect = O;
        }
      })(n), Ci(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, f = n.buttons;
      if (p) {
        var g = (0, U.default)({}, o.coords.cur.page), v = a.options.resize;
        if (v && v.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (f & v.mouseButtons) != 0)) {
          if (c.default.object(v.edges)) {
            var b = { left: false, right: false, top: false, bottom: false };
            for (var w in b)
              b[w] = Xr(w, v.edges[w], g, o._latestPointer.eventTarget, s, p, v.margin || ft.defaultMargin);
            b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (n.action = { name: "resize", edges: b });
          } else {
            var C = v.axis !== "y" && g.x > p.right - ft.defaultMargin, O = v.axis !== "x" && g.y > p.bottom - ft.defaultMargin;
            (C || O) && (n.action = { name: "resize", axes: (C ? "x" : "") + (O ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = ft.cursors, f = null;
      if (a)
        f = p[s + a];
      else if (o) {
        for (var g = "", v = ["top", "bottom", "left", "right"], b = 0; b < v.length; b++) {
          var w = v[b];
          o[w] && (g += w);
        }
        f = p[g];
      }
      return f;
    }, defaultMargin: null }, Ti = ft;
    dt.default = Ti;
    var Rr = {};
    Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var Yr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(dt.default), n.usePlugin(x.default), n.usePlugin(kr.default);
    } };
    Rr.default = Yr;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0;
    var qt, Ut, kl = 0, pd = { request: function(n) {
      return qt(n);
    }, cancel: function(n) {
      return Ut(n);
    }, init: function(n) {
      if (qt = n.requestAnimationFrame, Ut = n.cancelAnimationFrame, !qt)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          qt = n["".concat(s, "RequestAnimationFrame")], Ut = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      qt = qt && qt.bind(n), Ut = Ut && Ut.bind(n), qt || (qt = u(function(p) {
        var f = Date.now(), g = Math.max(0, 16 - (f - kl)), v = n.setTimeout(function() {
          p(f + g);
        }, g);
        return kl = f + g, v;
      }, "kt"), Ut = u(function(p) {
        return clearTimeout(p);
      }, "It"));
    } };
    Gt.default = pd;
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.getContainer = Ao, Zr.getScroll = Oi, Zr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Zr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var f = Ao(p.container, a.interactable, s), g = Oi(f);
      o();
      var v = Oi(f);
      return { x: v.x - g.x, y: v.y - g.y };
    }, Zr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, Gt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = Gt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), Gt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, f = Ao(p.container, o, a), g = ue.now(), v = (g - ue.prevTime) / 1e3, b = p.speed * v;
      if (b >= 1) {
        var w = { x: ue.x * b, y: ue.y * b };
        if (w.x || w.y) {
          var C = Oi(f);
          c.default.window(f) ? f.scrollBy(w.x, w.y) : f && (f.scrollLeft += w.x, f.scrollTop += w.y);
          var O = Oi(f), N = { x: O.x - C.x, y: O.y - C.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: f });
        }
        ue.prevTime = g;
      }
      ue.isScrolling && (Gt.default.cancel(ue.i), ue.i = Gt.default.request(ue.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && ue.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ue.x = ue.y = 0;
        else {
          var s, p, f, g, v = o.interactable, b = o.element, w = o.prepared.name, C = v.options[w].autoScroll, O = Ao(C.container, v, b);
          if (c.default.window(O))
            g = a.clientX < ue.margin, s = a.clientY < ue.margin, p = a.clientX > O.innerWidth - ue.margin, f = a.clientY > O.innerHeight - ue.margin;
          else {
            var N = R.getElementClientRect(O);
            g = a.clientX < N.left + ue.margin, s = a.clientY < N.top + ue.margin, p = a.clientX > N.right - ue.margin, f = a.clientY > N.bottom - ue.margin;
          }
          ue.x = p ? 1 : g ? -1 : 0, ue.y = f ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = C.margin, ue.speed = C.speed, ue.start(o));
        }
    } };
    function Ao(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(Ao, "Ao");
    u(Ao, "Ct");
    function Oi(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Oi, "Oi");
    u(Oi, "Ft");
    var dd = { id: "auto-scroll", install: function(n) {
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
    Zr.default = dd;
    var Lt = {};
    Object.defineProperty(Lt, "__esModule", { value: true }), Lt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Lt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Lt.sign = void 0, Lt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var _o = {};
    function fd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(fd, "fd");
    u(fd, "Wt");
    function hd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(hd, "hd");
    u(hd, "Lt"), Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var vd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, f) {
        var g = function(v, b, w, C, O) {
          var N = v.getRect(C), G = { action: null, interactable: v, interaction: w, element: C, rect: N, buttons: b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button] };
          return O.fire("auto-start:check", G), G.action;
        }(this, s, p, f, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, g, this, f, p) : g;
      }, o.prototype.ignoreFrom = (0, Lt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Lt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = hd, o.prototype.styleCursor = fd;
    } };
    _o.default = vd;
    var Xn = {};
    function Rl(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Io(o, a, n, p) ? n : null;
    }
    __name(Rl, "Rl");
    u(Rl, "Nt");
    function md(n, o, a, s, p, f, g) {
      for (var v = 0, b = s.length; v < b; v++) {
        var w = s[v], C = p[v], O = w.getAction(o, a, n, C);
        if (O) {
          var N = Rl(O, w, C, f, g);
          if (N)
            return { action: N, interactable: w, element: C };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(md, "md");
    u(md, "qt");
    function Nl(n, o, a, s, p) {
      var f = [], g = [], v = s;
      function b(C) {
        f.push(C), g.push(v);
      }
      __name(b, "b");
      for (u(b, "u"); c.default.element(v); ) {
        f = [], g = [], p.interactables.forEachMatch(v, b);
        var w = md(n, o, a, f, g, s, p);
        if (w.action && !w.interactable.options[w.action.name].manualStart)
          return w;
        v = R.parentNode(v);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Nl, "Nl");
    u(Nl, "$t");
    function Gl(n, o, a) {
      var s = o.action, p = o.interactable, f = o.element;
      s = s || { name: null }, n.interactable = p, n.element = f, (0, Lt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(f) : null, Ll(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Gl, "Gl");
    u(Gl, "Gt");
    function Io(n, o, a, s) {
      var p = n.options, f = p[a.name].max, g = p[a.name].maxPerElement, v = s.autoStart.maxInteractions, b = 0, w = 0, C = 0;
      if (!(f && g && v))
        return false;
      for (var O = 0; O < s.interactions.list.length; O++) {
        var N = s.interactions.list[O], G = N.prepared.name;
        if (N.interacting() && (++b >= v || N.interactable === n && ((w += G === a.name ? 1 : 0) >= f || N.element === o && (C++, G === a.name && C >= g))))
          return false;
      }
      return v > 0;
    }
    __name(Io, "Io");
    u(Io, "Ht");
    function ql(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(ql, "ql");
    u(ql, "Kt");
    function Ka(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(Ka, "Ka");
    u(Ka, "Zt");
    function Ll(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f = "";
        if (p.name) {
          var g = a.options[p.name].cursorChecker;
          f = c.default.func(g) ? g(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        Ka(n.element, f || "", o);
      } else
        o.autoStart.cursorElement && Ka(o.autoStart.cursorElement, "", o);
    }
    __name(Ll, "Ll");
    u(Ll, "Jt"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = void 0;
    var gd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(_o.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return ql(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Io, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      a.interacting() || Gl(a, Nl(a, s, p, f, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, f = a.pointer, g = a.event, v = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Gl(p, Nl(p, f, g, v, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f = p.interactable, g = p.prepared.name;
          g && f && (f.options[g].manualStart || !Io(f, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, f, p.element), Ll(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && Ka(a.element, "", o);
    } }, maxInteractions: ql, withinInteractionLimit: Io, validateAction: Rl };
    Xn.default = gd;
    var zo = {};
    Object.defineProperty(zo, "__esModule", { value: true }), zo.default = void 0;
    var bd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, f = n.dy;
      if (a.prepared.name === "drag") {
        var g = Math.abs(p), v = Math.abs(f), b = a.interactable.options.drag, w = b.startAxis, C = g > v ? "x" : g < v ? "y" : "xy";
        if (a.prepared.axis = b.lockAxis === "start" ? C[0] : b.lockAxis, C !== "xy" && w !== "xy" && w !== C) {
          a.prepared.name = null;
          for (var O = s, N = function(k) {
            if (k !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && k.testIgnoreAllow($, O, s)) {
                var J = k.getAction(a.downPointer, a.downEvent, a, O);
                if (J && J.name === "drag" && function(F, te) {
                  if (!te)
                    return false;
                  var le = te.options.drag.startAxis;
                  return F === "xy" || le === "xy" || le === F;
                }(C, k) && Xn.default.validateAction(J, k, O, s, o))
                  return k;
              }
            }
          }; c.default.element(O); ) {
            var G = o.interactables.forEachMatch(O, N);
            if (G) {
              a.prepared.name = "drag", a.interactable = G, a.element = O;
              break;
            }
            O = (0, R.parentNode)(O);
          }
        }
      }
    } } };
    zo.default = bd;
    var Do = {};
    function Qa(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(Qa, "Qa");
    u(Qa, "re"), Object.defineProperty(Do, "__esModule", { value: true }), Do.default = void 0;
    var yd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Xn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = Qa(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      Qa(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: Qa };
    Do.default = yd;
    var ko = {};
    Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var xd = { id: "auto-start", install: function(n) {
      n.usePlugin(Xn.default), n.usePlugin(Do.default), n.usePlugin(zo.default);
    } };
    ko.default = xd;
    var Yn = {};
    function wd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(wd, "wd");
    u(wd, "le");
    function Ed(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Ed, "Ed");
    u(Ed, "ue");
    function jl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = wd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, f) {
          var g = s.options.preventDefault;
          if (g !== "never")
            if (g !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(f.type)) {
                var v = (0, e.getWindow)(f.target).document, b = p.getDocOptions(v);
                if (!b || !b.events || b.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(f.type) || c.default.element(f.target) && (0, R.matchesSelector)(f.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || f.preventDefault();
            } else
              f.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, R.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(jl, "jl");
    u(jl, "ce"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.install = jl, Yn.default = void 0;
    var Sd = { id: "core/interactablePreventDefault", install: jl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Ed, n;
    }, {}) };
    Yn.default = Sd;
    var es = {};
    Object.defineProperty(es, "__esModule", { value: true }), es.default = void 0, es.default = {};
    var Pi, ts = {};
    Object.defineProperty(ts, "__esModule", { value: true }), ts.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Pi || (Pi = {})), Pi.touchAction, Pi.boxSizing, Pi.noListeners;
    var Cd = { id: "dev-tools", install: function() {
    } };
    ts.default = Cd;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: true }), mn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = xe.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var gn = {};
    function Bl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, v = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (C) {
            g = true, v = C;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw v;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Hl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Hl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Bl, "Bl");
    u(Bl, "me");
    function Hl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Hl, "Hl");
    u(Hl, "be");
    function Td(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Td, "Td");
    u(Td, "xe");
    function bn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(bn, "bn");
    u(bn, "we"), Object.defineProperty(gn, "__esModule", { value: true }), gn.getRectOffset = $l, gn.default = void 0;
    var Od = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), bn(this, "states", []), bn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), bn(this, "startDelta", void 0), bn(this, "result", void 0), bn(this, "endResult", void 0), bn(this, "edges", void 0), bn(this, "interaction", void 0), this.interaction = s, this.result = Ro();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var f = s.phase, g = this.interaction, v = function(w) {
          var C = w.interactable.options[w.prepared.name], O = C.modifiers;
          return O && O.length ? O : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var G = C[N];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(g);
        this.prepareStates(v), this.edges = (0, U.default)({}, g.edges), this.startOffset = $l(g.rect, p), this.startDelta = { x: 0, y: 0 };
        var b = this.fillArg({ phase: f, pageCoords: p, preEnd: false });
        return this.result = Ro(), this.startAll(b), this.result = this.setAll(b);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var f = this.states[p];
          f.methods.start && (s.state = f, f.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, f = s.preEnd, g = s.skipModifiers, v = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, v);
        for (var b = g ? this.states.slice(g) : this.states, w = Ro(s.coords, s.rect), C = 0; C < b.length; C++) {
          var O, N = b[C], G = N.options, k = (0, U.default)({}, s.coords), $ = null;
          (O = N.methods) != null && O.set && this.shouldDo(G, f, p) && (s.state = N, $ = N.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - k.x, y: s.coords.y - k.y })), w.eventProps.push($);
        }
        w.delta.x = s.coords.x - s.pageCoords.x, w.delta.y = s.coords.y - s.pageCoords.y, w.rectDelta.left = s.rect.left - v.left, w.rectDelta.right = s.rect.right - v.right, w.rectDelta.top = s.rect.top - v.top, w.rectDelta.bottom = s.rect.bottom - v.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var te = w.rect.left !== F.left || w.rect.right !== F.right || w.rect.top !== F.top || w.rect.bottom !== F.bottom;
          w.changed = te || J.x !== w.coords.x || J.y !== w.coords.y;
        }
        return w;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, f = s.phase, g = p.coords.cur, v = p.coords.start, b = this.result, w = this.startDelta, C = b.delta;
        f === "start" && (0, U.default)(this.startDelta, b.delta);
        for (var O = 0; O < [[v, w], [g, C]].length; O++) {
          var N = Bl([[v, w], [g, C]][O], 2), G = N[0], k = N[1];
          G.page.x += k.x, G.page.y += k.y, G.client.x += k.x, G.client.y += k.y;
        }
        var $ = this.result.rectDelta, J = s.rect || p.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, f = s.phase, g = s.preEnd, v = s.skipModifiers, b = this.setAll(this.fillArg({ preEnd: g, phase: f, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = b, !b.changed && (!v || v < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var w = p.coords.cur.page, C = { x: s.modifiedCoords.x - w.x, y: s.modifiedCoords.y - w.y };
          b.coords.x += C.x, b.coords.y += C.y, b.delta.x += C.x, b.delta.y += C.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, f = s.event, g = this.states;
        if (g && g.length) {
          for (var v = false, b = 0; b < g.length; b++) {
            var w = g[b];
            s.state = w;
            var C = w.options, O = w.methods, N = O.beforeEnd && O.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            v = v || !v && this.shouldDo(C, true, s.phase, true);
          }
          v && p.move({ event: f, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var f = (0, U.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(f);
          for (var g = 0; g < this.states.length; g++) {
            var v = this.states[g];
            f.state = v, v.methods.stop && v.methods.stop(f);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var f = s[p], g = f.options, v = f.methods, b = f.name;
          this.states.push({ options: g, methods: v, index: p, name: b });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, f = p.coords, g = p.rect, v = p.modification;
        if (v.result) {
          for (var b = v.startDelta, w = v.result, C = w.delta, O = w.rectDelta, N = [[f.start, b], [f.cur, C]], G = 0; G < N.length; G++) {
            var k = Bl(N[G], 2), $ = k[0], J = k[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          g.left -= O.left, g.right -= O.right, g.top -= O.top, g.bottom -= O.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, f, g) {
        return !(!s || s.enabled === false || g && !s.endOnly || s.endOnly && !p || f === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, mn.default)(p);
        }), this.result = Ro((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Td(o.prototype, a), n;
    }();
    function Ro(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Ro, "Ro");
    u(Ro, "Pe");
    function $l(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name($l, "$l");
    u($l, "Oe"), gn.default = Od;
    var ht = {};
    function No(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(No, "No");
    u(No, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(f) {
        var g = f || {};
        for (var v in g.enabled = g.enabled !== false, a)
          v in g || (g[v] = a[v]);
        var b = { options: g, methods: s, name: o, enable: function() {
          return g.enabled = true, b;
        }, disable: function() {
          return g.enabled = false, b;
        } };
        return b;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    }, ht.addEventModifiers = No, ht.default = void 0;
    var Pd = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new gn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": No, "interactions:action-move": No, "interactions:action-end": No, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ht.default = Pd;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.defaults = void 0, Mi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ai = {};
    function Fl(n) {
      return (Fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Fl, "Fl");
    u(Fl, "ke");
    function Md(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Md, "Md");
    u(Md, "Ie");
    function Wl(n, o) {
      return (Wl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Wl, "Wl");
    u(Wl, "De");
    function Ad(n, o) {
      return !o || Fl(o) !== "object" && typeof o != "function" ? Te(n) : o;
    }
    __name(Ad, "Ad");
    u(Ad, "Ae");
    function Te(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Te, "Te");
    u(Te, "Re");
    function rs(n) {
      return (rs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(rs, "rs");
    u(rs, "ze");
    function Ie(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ie, "Ie");
    u(Ie, "Ce"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.InteractEvent = void 0;
    var Ul = function(n) {
      (function(v, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        v.prototype = Object.create(b && b.prototype, { constructor: { value: v, writable: true, configurable: true } }), b && Wl(v, b);
      })(g, n);
      var o, a, s, p, f = (s = g, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (v) {
          return false;
        }
      }(), function() {
        var v, b = rs(s);
        if (p) {
          var w = rs(this).constructor;
          v = Reflect.construct(b, arguments, w);
        } else
          v = b.apply(this, arguments);
        return Ad(this, v);
      });
      function g(v, b, w, C, O, N, G) {
        var k;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, g), Ie(Te(k = f.call(this, v)), "target", void 0), Ie(Te(k), "currentTarget", void 0), Ie(Te(k), "relatedTarget", null), Ie(Te(k), "screenX", void 0), Ie(Te(k), "screenY", void 0), Ie(Te(k), "button", void 0), Ie(Te(k), "buttons", void 0), Ie(Te(k), "ctrlKey", void 0), Ie(Te(k), "shiftKey", void 0), Ie(Te(k), "altKey", void 0), Ie(Te(k), "metaKey", void 0), Ie(Te(k), "page", void 0), Ie(Te(k), "client", void 0), Ie(Te(k), "delta", void 0), Ie(Te(k), "rect", void 0), Ie(Te(k), "x0", void 0), Ie(Te(k), "y0", void 0), Ie(Te(k), "t0", void 0), Ie(Te(k), "dt", void 0), Ie(Te(k), "duration", void 0), Ie(Te(k), "clientX0", void 0), Ie(Te(k), "clientY0", void 0), Ie(Te(k), "velocity", void 0), Ie(Te(k), "speed", void 0), Ie(Te(k), "swipe", void 0), Ie(Te(k), "timeStamp", void 0), Ie(Te(k), "axes", void 0), Ie(Te(k), "preEnd", void 0), O = O || v.element;
        var $ = v.interactable, J = ($ && $.options || Mi.defaults).deltaSource, F = (0, qe.default)($, O, w), te = C === "start", le = C === "end", pe = te ? Te(k) : v.prevEvent, Ee = te ? v.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: v.coords.cur.timeStamp } : v.coords.cur;
        return k.page = (0, U.default)({}, Ee.page), k.client = (0, U.default)({}, Ee.client), k.rect = (0, U.default)({}, v.rect), k.timeStamp = Ee.timeStamp, le || (k.page.x -= F.x, k.page.y -= F.y, k.client.x -= F.x, k.client.y -= F.y), k.ctrlKey = b.ctrlKey, k.altKey = b.altKey, k.shiftKey = b.shiftKey, k.metaKey = b.metaKey, k.button = b.button, k.buttons = b.buttons, k.target = O, k.currentTarget = O, k.preEnd = N, k.type = G || w + (C || ""), k.interactable = $, k.t0 = te ? v.pointers[v.pointers.length - 1].downTime : pe.t0, k.x0 = v.coords.start.page.x - F.x, k.y0 = v.coords.start.page.y - F.y, k.clientX0 = v.coords.start.client.x - F.x, k.clientY0 = v.coords.start.client.y - F.y, k.delta = te || le ? { x: 0, y: 0 } : { x: k[J].x - pe[J].x, y: k[J].y - pe[J].y }, k.dt = v.coords.delta.timeStamp, k.duration = k.timeStamp - k.t0, k.velocity = (0, U.default)({}, v.coords.velocity[J]), k.speed = (0, Qe.default)(k.velocity.x, k.velocity.y), k.swipe = le || C === "inertiastart" ? k.getSwipe() : null, k;
      }
      __name(g, "g");
      return u(g, "a"), o = g, (a = [{ key: "getSwipe", value: function() {
        var v = this._interaction;
        if (v.prevEvent.speed < 600 || this.timeStamp - v.prevEvent.timeStamp > 150)
          return null;
        var b = 180 * Math.atan2(v.prevEvent.velocityY, v.prevEvent.velocityX) / Math.PI;
        b < 0 && (b += 360);
        var w = 112.5 <= b && b < 247.5, C = 202.5 <= b && b < 337.5;
        return { up: C, down: !C && 22.5 <= b && b < 157.5, left: w, right: !w && (292.5 <= b || b < 67.5), angle: b, speed: v.prevEvent.speed, velocity: { x: v.prevEvent.velocityX, y: v.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Md(o.prototype, a), g;
    }(Rt.BaseEvent);
    Ai.InteractEvent = Ul, Object.defineProperties(Ul.prototype, { pageX: { get: function() {
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
    var _i = {};
    function Ii(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ii, "Ii");
    u(Ii, "Ye"), Object.defineProperty(_i, "__esModule", { value: true }), _i.PointerInfo = void 0, _i.PointerInfo = u(/* @__PURE__ */ __name(function n(o, a, s, p, f) {
      (function(g, v) {
        if (!(g instanceof v))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ii(this, "id", void 0), Ii(this, "pointer", void 0), Ii(this, "event", void 0), Ii(this, "downTime", void 0), Ii(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = f;
    }, "n"), "t");
    var Go, qo, It = {};
    function _d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(_d, "_d");
    u(_d, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(He, "He");
    u(He, "Ve"), Object.defineProperty(It, "__esModule", { value: true }), Object.defineProperty(It, "PointerInfo", { enumerable: true, get: function() {
      return _i.PointerInfo;
    } }), It.default = It.Interaction = It._ProxyMethods = It._ProxyValues = void 0, It._ProxyValues = Go, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Go || (It._ProxyValues = Go = {})), It._ProxyMethods = qo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(qo || (It._ProxyMethods = qo = {}));
    var Id = 0, Vl = function() {
      function n(s) {
        var p = this, f = s.pointerType, g = s.scopeFire;
        (function(N, G) {
          if (!(N instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Lt.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), He(this, "_id", Id++), this._scopeFire = g, this.pointerType = f;
        var v = this;
        this._proxy = {};
        var b = u(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return v[N];
          } });
        }, "a");
        for (var w in Go)
          b(w);
        var C = u(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return v[N].apply(v, arguments);
          } });
        }, "l");
        for (var O in qo)
          C(O);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, f) {
        var g = this.updatePointer(s, p, f, true), v = this.pointers[g];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: f, pointerIndex: g, pointerInfo: v, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, f) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, Lt.copyAction)(this.prepared, s), this.interactable = p, this.element = f, this.rect = p.getRect(f), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, f) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, f, false);
        var g, v, b = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (g = this.coords.cur.client.x - this.coords.start.client.x, v = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Qe.default)(g, v) > this.pointerMoveTolerance);
        var w = this.getPointerIndex(s), C = { pointer: s, pointerIndex: w, pointerInfo: this.pointers[w], event: p, type: "move", eventTarget: f, dx: g, dy: v, duplicate: b, interaction: this };
        b || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", C), b || this.simulation || (this.interacting() && (C.type = null, this.move(C)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, f, g) {
        var v = this.getPointerIndex(s);
        v === -1 && (v = this.updatePointer(s, p, f, false));
        var b = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(b), { pointer: s, pointerIndex: v, pointerInfo: this.pointers[v], event: p, eventTarget: f, type: b, curEventTarget: g, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
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
        var p = K.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : xe.findIndex(this.pointers, function(f) {
          return f.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, f, g) {
        var v = K.getPointerId(s), b = this.getPointerIndex(s), w = this.pointers[b];
        return g = g !== false && (g || /(down|start)$/i.test(p.type)), w ? w.pointer = s : (w = new _i.PointerInfo(v, s, p, null, null), b = this.pointers.length, this.pointers.push(w)), K.setCoords(this.coords.cur, this.pointers.map(function(C) {
          return C.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), g && (this.pointerIsDown = true, w.downTime = this.coords.cur.timeStamp, w.downTarget = f, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, f), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: f, down: g, pointerInfo: w, pointerIndex: b, interaction: this }), b;
      } }, { key: "removePointer", value: function(s, p) {
        var f = this.getPointerIndex(s);
        if (f !== -1) {
          var g = this.pointers[f];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p, eventTarget: null, pointerIndex: f, pointerInfo: g, interaction: this }), this.pointers.splice(f, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p, f) {
        this._latestPointer.pointer = s, this._latestPointer.event = p, this._latestPointer.eventTarget = f;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p, f, g) {
        return new Ai.InteractEvent(this, s, this.prepared.name, p, this.element, f, g);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, f = s.phase, g = s.preEnd, v = s.type, b = this.rect;
        if (b && f === "move" && (ce.addEdges(this.edges, b, this.coords.delta[this.interactable.options.deltaSource]), b.width = b.right - b.left, b.height = b.bottom - b.top), this._scopeFire("interactions:before-action-".concat(f), s) === false)
          return false;
        var w = s.iEvent = this._createPreparedEvent(p, f, g, v);
        return this._scopeFire("interactions:action-".concat(f), s), f === "start" && (this.prevEvent = w), this._fireEvent(w), this._scopeFire("interactions:after-action-".concat(f), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && _d(o.prototype, a), n;
    }();
    It.Interaction = Vl;
    var zd = Vl;
    It.default = zd;
    var yn = {};
    function Xl(n) {
      n.pointerIsDown && (is(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(Xl, "Xl");
    u(Xl, "He");
    function Yl(n) {
      ns(n.interaction);
    }
    __name(Yl, "Yl");
    u(Yl, "Ke");
    function ns(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return is(n.coords.cur, o), is(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ns, "ns");
    u(ns, "Ze");
    function Dd(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Dd, "Dd");
    u(Dd, "Je");
    function is(n, o) {
      var a = n.page, s = n.client, p = o.x, f = o.y;
      a.x += p, a.y += f, s.x += p, s.y += f;
    }
    __name(is, "is");
    u(is, "Qe"), Object.defineProperty(yn, "__esModule", { value: true }), yn.addTotal = Xl, yn.applyPending = ns, yn.default = void 0, It._ProxyMethods.offsetBy = "";
    var kd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Dd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Xl(n.interaction);
    }, "interactions:before-action-start": Yl, "interactions:before-action-move": Yl, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ns(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    yn.default = kd;
    var Zn = {};
    function Rd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Rd, "Rd");
    u(Rd, "nn");
    function ot(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ot, "ot");
    u(ot, "rn"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.default = Zn.InertiaState = void 0;
    var Zl = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ot(this, "active", false), ot(this, "isModified", false), ot(this, "smoothEnd", false), ot(this, "allowResume", false), ot(this, "modification", void 0), ot(this, "modifierCount", 0), ot(this, "modifierArg", void 0), ot(this, "startCoords", void 0), ot(this, "t0", 0), ot(this, "v0", 0), ot(this, "te", 0), ot(this, "targetOffset", void 0), ot(this, "modifiedOffset", void 0), ot(this, "currentOffset", void 0), ot(this, "lambda_v0", 0), ot(this, "one_ve_v0", 0), ot(this, "timeout", void 0), ot(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, f = Lo(p);
        if (!f || !f.enabled)
          return false;
        var g = p.coords.velocity.client, v = (0, Qe.default)(g.x, g.y), b = this.modification || (this.modification = new gn.default(p));
        if (b.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = f.allowResume, this.v0 = v, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = b.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && v > f.minSpeed && v > f.endSpeed)
          this.startInertia();
        else {
          if (b.result = b.setAll(this.modifierArg), !b.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, f = Lo(this.interaction), g = f.resistance, v = -Math.log(f.endSpeed / this.v0) / g;
        this.targetOffset = { x: (p.x - v) / g, y: (p.y - v) / g }, this.te = v, this.lambda_v0 = g / this.v0, this.one_ve_v0 = 1 - f.endSpeed / this.v0;
        var b = this.modification, w = this.modifierArg;
        w.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, b.result = b.setAll(w), b.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + b.result.delta.x, y: this.targetOffset.y + b.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var p = this;
        this.timeout = Gt.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, f, g, v, b = this, w = this.interaction, C = Lo(w).resistance, O = (w._now() - this.t0) / 1e3;
        if (O < this.te) {
          var N, G = 1 - (Math.exp(-C * O) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, f = this.modifiedOffset.x, g = this.modifiedOffset.y, N = { x: Jl(v = G, 0, s, f), y: Jl(v, 0, p, g) }) : N = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var k = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += k.x, this.currentOffset.y += k.y, w.offsetBy(k), w.move(), this.onNextFrame(function() {
            return b.inertiaTick();
          });
        } else
          w.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, f = p._now() - this.t0, g = Lo(p).smoothEndDuration;
        if (f < g) {
          var v = { x: Kl(f, 0, this.targetOffset.x, g), y: Kl(f, 0, this.targetOffset.y, g) }, b = { x: v.x - this.currentOffset.x, y: v.y - this.currentOffset.y };
          this.currentOffset.x += b.x, this.currentOffset.y += b.y, p.offsetBy(b), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, f = s.event, g = s.eventTarget, v = this.interaction;
        v.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), v.updatePointer(p, f, g, true), v._doPhase({ interaction: v, event: f, phase: "resume" }), (0, K.copyCoords)(v.coords.prev, v.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Gt.default.cancel(this.timeout);
      } }]) && Rd(o.prototype, a), n;
    }();
    function Lo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Lo, "Lo");
    u(Lo, "an");
    function Jl(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(Jl, "Jl");
    u(Jl, "sn");
    function Kl(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(Kl, "Kl");
    u(Kl, "ln"), Zn.InertiaState = Zl;
    var Nd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(yn.default), n.usePlugin(ht.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new Zl(o);
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
          p = R.parentNode(p);
        }
    }, "interactions:stop": function(n) {
      var o = n.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(n) {
      var o = n.interaction.modification;
      o.stop(n), o.start(n, n.interaction.coords.cur.page), o.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": ht.addEventModifiers, "interactions:action-inertiastart": ht.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Zn.default = Nd;
    var zi = {};
    function Gd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Gd, "Gd");
    u(Gd, "fn");
    function Di(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Di, "Di");
    u(Di, "dn");
    function Ql(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(Ql, "Ql");
    u(Ql, "pn"), Object.defineProperty(zi, "__esModule", { value: true }), zi.Eventable = void 0;
    var qd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Di(this, "options", void 0), Di(this, "types", {}), Di(this, "propagationStopped", false), Di(this, "immediatePropagationStopped", false), Di(this, "global", void 0), this.options = (0, U.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, f = this.global;
        (p = this.types[s.type]) && Ql(s, p), !s.propagationStopped && f && (p = f[s.type]) && Ql(s, p);
      } }, { key: "on", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f)
          this.types[s] = xe.merge(this.types[s] || [], f[s]);
      } }, { key: "off", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f) {
          var g = this.types[s];
          if (g && g.length)
            for (var v = 0; v < f[s].length; v++) {
              var b = f[s][v], w = g.indexOf(b);
              w !== -1 && g.splice(w, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Gd(o.prototype, a), n;
    }();
    zi.Eventable = qd;
    var ki = {};
    Object.defineProperty(ki, "__esModule", { value: true }), ki.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var os = {};
    Object.defineProperty(os, "__esModule", { value: true }), os.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var f = n.interactables.get(s, p);
        return f || ((f = n.interactables.new(s, p)).events.global = a.globalEvents), f;
      }, "a"), "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Lt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            this.on(g, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var v in a)
            this.on(v, a[v], s);
          return this;
        }
        return (0, ki.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Lt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            this.off(g, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var v in a)
            this.off(v, a[v], s);
          return this;
        }
        var b;
        return (0, ki.default)(a, this.scope.actions) ? a in this.globalEvents && (b = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(b, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
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
    var jo = {};
    function Ld(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ld, "Ld");
    u(Ld, "mn");
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nr, "Nr");
    u(Nr, "bn"), Object.defineProperty(jo, "__esModule", { value: true }), jo.Interactable = void 0;
    var jd = function() {
      function n(s, p, f, g) {
        (function(v, b) {
          if (!(v instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new zi.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || f, this._win = (0, e.getWindow)((0, R.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = g, this.set(p);
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, p) {
        return c.default.func(p.onstart) && this.on("".concat(s, "start"), p.onstart), c.default.func(p.onmove) && this.on("".concat(s, "move"), p.onmove), c.default.func(p.onend) && this.on("".concat(s, "end"), p.onend), c.default.func(p.oninertiastart) && this.on("".concat(s, "inertiastart"), p.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, p, f) {
        (c.default.array(p) || c.default.object(p)) && this.off(s, p), (c.default.array(f) || c.default.object(f)) && this.on(s, f);
      } }, { key: "setPerAction", value: function(s, p) {
        var f = this._defaults;
        for (var g in p) {
          var v = g, b = this.options[s], w = p[v];
          v === "listeners" && this.updatePerActionListeners(s, b.listeners, w), c.default.array(w) ? b[v] = xe.from(w) : c.default.plainObject(w) ? (b[v] = (0, U.default)(b[v] || {}, (0, mn.default)(w)), c.default.object(f.perAction[v]) && "enabled" in f.perAction[v] && (b[v].enabled = w.enabled !== false)) : c.default.bool(w) && c.default.object(f.perAction[v]) ? b[v].enabled = w : b[v] = w;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, R.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(f) {
          var g = (0, U.default)({}, p._rectChecker(f));
          return "width" in g || (g.width = g.right - g.left, g.height = g.bottom - g.top), g;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, R.trySelector)(p) || c.default.object(p)) {
          for (var f in this.options[s] = p, this._actions.map)
            this.options[f][s] = p;
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
      } }, { key: "testIgnoreAllow", value: function(s, p, f) {
        return !this.testIgnore(s.ignoreFrom, p, f) && this.testAllow(s.allowFrom, p, f);
      } }, { key: "testAllow", value: function(s, p, f) {
        return !s || !!c.default.element(f) && (c.default.string(s) ? (0, R.matchesUpTo)(f, s, p) : !!c.default.element(s) && (0, R.nodeContains)(s, f));
      } }, { key: "testIgnore", value: function(s, p, f) {
        return !(!s || !c.default.element(f)) && (c.default.string(s) ? (0, R.matchesUpTo)(f, s, p) : !!c.default.element(s) && (0, R.nodeContains)(s, f));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, f, g) {
        c.default.object(p) && !c.default.array(p) && (g = f, f = null);
        var v = s === "on" ? "add" : "remove", b = (0, fe.default)(p, f);
        for (var w in b) {
          w === "wheel" && (w = L.default.wheelEvent);
          for (var C = 0; C < b[w].length; C++) {
            var O = b[w][C];
            (0, ki.default)(w, this._actions) ? this.events[s](w, O) : c.default.string(this.target) ? this._scopeEvents["".concat(v, "Delegate")](this.target, this._context, w, O, g) : this._scopeEvents[v](this.target, w, O, g);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, f) {
        return this._onOff("on", s, p, f);
      } }, { key: "off", value: function(s, p, f) {
        return this._onOff("off", s, p, f);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var f in c.default.object(s) || (s = {}), this.options = (0, mn.default)(p.base), this._actions.methodDict) {
          var g = f, v = this._actions.methodDict[g];
          this.options[g] = {}, this.setPerAction(g, (0, U.default)((0, U.default)({}, p.perAction), p.actions[g])), this[v](s[g]);
        }
        for (var b in s)
          c.default.func(this[b]) && this[b](s[b]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], f = p.length - 1; f >= 0; f--) {
              var g = p[f], v = g.selector, b = g.context, w = g.listeners;
              v === this.target && b === this._context && p.splice(f, 1);
              for (var C = w.length - 1; C >= 0; C--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, w[C][0], w[C][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Ld(o.prototype, a), n;
    }();
    jo.Interactable = jd;
    var Bo = {};
    function Bd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Bd, "Bd");
    u(Bd, "_n");
    function as(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(as, "as");
    u(as, "Pn"), Object.defineProperty(Bo, "__esModule", { value: true }), Bo.InteractableSet = void 0;
    var Hd = function() {
      function n(s) {
        var p = this;
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), as(this, "list", []), as(this, "selectorMap", {}), as(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f) {
          var g = f.interactable, v = g.target, b = g._context, w = c.default.string(v) ? p.selectorMap[v] : v[p.scope.id], C = xe.findIndex(w, function(O) {
            return O.context === b;
          });
          w[C] && (w[C].context = null, w[C].interactable = null), w.splice(C, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, U.default)(p || {}, { actions: this.scope.actions });
        var f = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), g = { context: f._context, interactable: f };
        return this.scope.addDocument(f._doc), this.list.push(f), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(g)) : (f.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(g)), this.scope.fire("interactable:new", { target: s, options: p, interactable: f, win: this.scope._win }), f;
      } }, { key: "get", value: function(s, p) {
        var f = p && p.context || this.scope.document, g = c.default.string(s), v = g ? this.selectorMap[s] : s[this.scope.id];
        if (!v)
          return null;
        var b = xe.find(v, function(w) {
          return w.context === f && (g || w.interactable.inContext(s));
        });
        return b && b.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var f = 0; f < this.list.length; f++) {
          var g = this.list[f], v = void 0;
          if ((c.default.string(g.target) ? c.default.element(s) && R.matchesSelector(s, g.target) : s === g.target) && g.inContext(s) && (v = p(g)), v !== void 0)
            return v;
        }
      } }]) && Bd(o.prototype, a), n;
    }();
    Bo.InteractableSet = Hd;
    var Ho = {};
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name($d, "$d");
    u($d, "En");
    function ss(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ss, "ss");
    u(ss, "Tn");
    function ls(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, v = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (C) {
            g = true, v = C;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw v;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return eu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? eu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ls, "ls");
    u(ls, "Mn");
    function eu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(eu, "eu");
    u(eu, "jn"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var Fd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ss(this, "currentTarget", void 0), ss(this, "originalEvent", void 0), ss(this, "type", void 0), this.originalEvent = s, (0, kt.default)(this, s);
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
      } }]) && $d(o.prototype, a), n;
    }();
    function Ri(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(Ri, "Ri");
    u(Ri, "In");
    var Wd = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], f = { add: g, remove: v, addDelegate: function(C, O, N, G, k) {
        var $ = Ri(k);
        if (!s[N]) {
          s[N] = [];
          for (var J = 0; J < p.length; J++) {
            var F = p[J];
            g(F, N, b), g(F, N, w, true);
          }
        }
        var te = s[N], le = xe.find(te, function(pe) {
          return pe.selector === C && pe.context === O;
        });
        le || (le = { selector: C, context: O, listeners: [] }, te.push(le)), le.listeners.push([G, $]);
      }, removeDelegate: function(C, O, N, G, k) {
        var $, J = Ri(k), F = s[N], te = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === C && le.context === O) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = ls(pe[Ee], 2), be = je[0], ze = je[1], Xt = ze.capture, qr = ze.passive;
                if (be === G && Xt === J.capture && qr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), v(O, N, b), v(O, N, w, true)), te = true;
                  break;
                }
              }
              if (te)
                break;
            }
          }
      }, delegateListener: b, delegateUseCapture: w, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function g(C, O, N, G) {
        var k = Ri(G), $ = xe.find(a, function(J) {
          return J.eventTarget === C;
        });
        $ || ($ = { eventTarget: C, events: {} }, a.push($)), $.events[O] || ($.events[O] = []), C.addEventListener && !xe.contains($.events[O], N) && (C.addEventListener(O, N, f.supportsOptions ? k : k.capture), $.events[O].push(N));
      }
      __name(g, "g");
      u(g, "s");
      function v(C, O, N, G) {
        var k = Ri(G), $ = xe.findIndex(a, function(Ee) {
          return Ee.eventTarget === C;
        }), J = a[$];
        if (J && J.events)
          if (O !== "all") {
            var F = false, te = J.events[O];
            if (te) {
              if (N === "all") {
                for (var le = te.length - 1; le >= 0; le--)
                  v(C, O, te[le], k);
                return;
              }
              for (var pe = 0; pe < te.length; pe++)
                if (te[pe] === N) {
                  C.removeEventListener(O, N, f.supportsOptions ? k : k.capture), te.splice(pe, 1), te.length === 0 && (delete J.events[O], F = true);
                  break;
                }
            }
            F && !Object.keys(J.events).length && a.splice($, 1);
          } else
            for (O in J.events)
              J.events.hasOwnProperty(O) && v(C, O, "all");
      }
      __name(v, "v");
      u(v, "l");
      function b(C, O) {
        for (var N = Ri(O), G = new Fd(C), k = s[C.type], $ = ls(K.getEventTargets(C), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < k.length; F++) {
            var te = k[F], le = te.selector, pe = te.context;
            if (R.matchesSelector(J, le) && R.nodeContains(pe, $) && R.nodeContains(pe, J)) {
              var Ee = te.listeners;
              G.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = ls(Ee[je], 2), ze = be[0], Xt = be[1], qr = Xt.capture, ws = Xt.passive;
                qr === N.capture && ws === N.passive && ze(G);
              }
            }
          }
          J = R.parentNode(J);
        }
      }
      __name(b, "b");
      u(b, "u");
      function w(C) {
        return b(C, true);
      }
      __name(w, "w");
      return u(w, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return f.supportsOptions = true;
      }, get passive() {
        return f.supportsPassive = true;
      } }), n.events = f, f;
    } };
    Ho.default = Wd;
    var $o = {};
    Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0;
    var Fo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Fo.methodOrder.length; o++) {
        var a;
        a = Fo.methodOrder[o];
        var s = Fo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, p = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var f = 0; f < p.interactions.list.length; f++) {
        var g = p.interactions.list[f], v = s;
        if (g.simulation && g.simulation.allowResume && g.pointerType === o)
          for (; v; ) {
            if (v === g.element)
              return g;
            v = R.parentNode(v);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, f = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var g = 0; g < f.interactions.list.length; g++) {
        var v = f.interactions.list[g];
        if (v.pointerType === s) {
          if (v.simulation && !tu(v, a))
            continue;
          if (v.interacting())
            return v;
          o || (o = v);
        }
      }
      if (o)
        return o;
      for (var b = 0; b < f.interactions.list.length; b++) {
        var w = f.interactions.list[b];
        if (!(w.pointerType !== s || /down/i.test(p) && w.simulation))
          return w;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (tu(p, o))
          return p;
      }
      return null;
    }, idle: function(n) {
      for (var o = n.pointerType, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (p.pointers.length === 1) {
          var f = p.interactable;
          if (f && (!f.options.gesture || !f.options.gesture.enabled))
            continue;
        } else if (p.pointers.length >= 2)
          continue;
        if (!p.interacting() && o === p.pointerType)
          return p;
      }
      return null;
    } };
    function tu(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(tu, "tu");
    u(tu, "zn");
    var Ud = Fo;
    $o.default = Ud;
    var Wo = {};
    function ru(n) {
      return (ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(ru, "ru");
    u(ru, "Xn");
    function nu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, v = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (C) {
            g = true, v = C;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw v;
            }
          }
          return p;
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
    u(nu, "Yn");
    function iu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(iu, "iu");
    u(iu, "Bn");
    function Vd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Vd, "Vd");
    u(Vd, "Wn");
    function Xd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Xd, "Xd");
    u(Xd, "Ln");
    function ou(n, o) {
      return (ou = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(ou, "ou");
    u(ou, "Un");
    function Yd(n, o) {
      return !o || ru(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Yd, "Yd");
    u(Yd, "Vn");
    function us(n) {
      return (us = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(us, "us");
    u(us, "Nn"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var cs = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function au(n, o) {
      return function(a) {
        var s = o.interactions.list, p = K.getPointerType(a), f = nu(K.getEventTargets(a), 2), g = f[0], v = f[1], b = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var w = 0; w < a.changedTouches.length; w++) {
            var C = a.changedTouches[w], O = { pointer: C, pointerId: K.getPointerId(C), pointerType: p, eventType: a.type, eventTarget: g, curEventTarget: v, scope: o }, N = su(O);
            b.push([O.pointer, O.eventTarget, O.curEventTarget, N]);
          }
        } else {
          var G = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var k = 0; k < s.length && !G; k++)
              G = s[k].pointerType !== "mouse" && s[k].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G) {
            var $ = { pointer: a, pointerId: K.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: v, eventTarget: g, scope: o }, J = su($);
            b.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < b.length; F++) {
          var te = nu(b[F], 4), le = te[0], pe = te[1], Ee = te[2];
          te[3][n](le, a, pe, Ee);
        }
      };
    }
    __name(au, "au");
    u(au, "$n");
    function su(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: $o.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(su, "su");
    u(su, "Gn");
    function ps(n, o) {
      var a = n.doc, s = n.scope, p = n.options, f = s.interactions.docEvents, g = s.events, v = g[o];
      for (var b in s.browser.isIOS && !p.events && (p.events = { passive: false }), g.delegatedEvents)
        v(a, b, g.delegateListener), v(a, b, g.delegateUseCapture, true);
      for (var w = p && p.events, C = 0; C < f.length; C++) {
        var O = f[C];
        v(a, O.type, O.listener, w);
      }
    }
    __name(ps, "ps");
    u(ps, "Hn");
    var Zd = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < cs.length; a++) {
        var s = cs[a];
        o[s] = au(s, n);
      }
      var p, f = L.default.pEventTypes;
      function g() {
        for (var v = 0; v < n.interactions.list.length; v++) {
          var b = n.interactions.list[v];
          if (b.pointerIsDown && b.pointerType === "touch" && !b._interacting)
            for (var w = function() {
              var O = b.pointers[C];
              n.documents.some(function(N) {
                var G = N.doc;
                return (0, R.nodeContains)(G, O.downTarget);
              }) || b.removePointer(O.pointer, O.event);
            }, C = 0; C < b.pointers.length; C++)
              w();
        }
      }
      __name(g, "g");
      u(g, "a"), (p = S.default.PointerEvent ? [{ type: f.down, listener: g }, { type: f.down, listener: o.pointerDown }, { type: f.move, listener: o.pointerMove }, { type: f.up, listener: o.pointerUp }, { type: f.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: g }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(v) {
        for (var b = 0; b < n.interactions.list.length; b++)
          n.interactions.list[b].documentBlur(v);
      } }), n.prevTouchTime = 0, n.Interaction = function(v) {
        (function(k, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          k.prototype = Object.create($ && $.prototype, { constructor: { value: k, writable: true, configurable: true } }), $ && ou(k, $);
        })(G, v);
        var b, w, C, O, N = (C = G, O = function() {
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
          var k, $ = us(C);
          if (O) {
            var J = us(this).constructor;
            k = Reflect.construct($, arguments, J);
          } else
            k = $.apply(this, arguments);
          return Yd(this, k);
        });
        function G() {
          return Vd(this, G), N.apply(this, arguments);
        }
        __name(G, "G");
        return u(G, "s"), b = G, (w = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(k) {
          n.interactions.pointerMoveTolerance = k;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && Xd(b.prototype, w), G;
      }(It.default), n.interactions = { list: [], new: function(v) {
        v.scopeFire = function(w, C) {
          return n.fire(w, C);
        };
        var b = new n.Interaction(v);
        return n.interactions.list.push(b), b;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Yn.default);
    }, listeners: { "scope:add-document": function(n) {
      return ps(n, "add");
    }, "scope:remove-document": function(n) {
      return ps(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: ps, doOnInteractions: au, methodNames: cs };
    Wo.default = Zd;
    var Ni = {};
    function lu(n) {
      return (lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(lu, "lu");
    u(lu, "Jn");
    function ds(n, o, a) {
      return (ds = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p, f) {
        var g = function(b, w) {
          for (; !Object.prototype.hasOwnProperty.call(b, w) && (b = Jn(b)) !== null; )
            ;
          return b;
        }(s, p);
        if (g) {
          var v = Object.getOwnPropertyDescriptor(g, p);
          return v.get ? v.get.call(f) : v.value;
        }
      })(n, o, a || n);
    }
    __name(ds, "ds");
    u(ds, "Qn");
    function uu(n, o) {
      return (uu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(uu, "uu");
    u(uu, "tr");
    function Jd(n, o) {
      return !o || lu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Jd, "Jd");
    u(Jd, "er");
    function Jn(n) {
      return (Jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Jn, "Jn");
    u(Jn, "nr");
    function cu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(cu, "cu");
    u(cu, "rr");
    function pu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(pu, "pu");
    u(pu, "or");
    function du(n, o, a) {
      return o && pu(n.prototype, o), a && pu(n, a), n;
    }
    __name(du, "du");
    u(du, "ir");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vt, "vt");
    u(vt, "ar"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.initScope = fu, Ni.Scope = void 0;
    var Kd = function() {
      function n() {
        var o = this;
        cu(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", L.default), vt(this, "defaults", (0, mn.default)(Mi.defaults)), vt(this, "Eventable", zi.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, os.createInteractStatic)(this)), vt(this, "InteractEvent", Ai.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new Bo.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(b, w) {
            if (typeof w != "function" && w !== null)
              throw new TypeError("Super expression must either be null or a function");
            b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), w && uu(b, w);
          })(v, s);
          var p, f, g = (p = v, f = function() {
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
            var b, w = Jn(p);
            if (f) {
              var C = Jn(this).constructor;
              b = Reflect.construct(w, arguments, C);
            } else
              b = w.apply(this, arguments);
            return Jd(this, b);
          });
          function v() {
            return cu(this, v), g.apply(this, arguments);
          }
          __name(v, "v");
          return u(v, "i"), du(v, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(b) {
            return ds(Jn(v.prototype), "set", this).call(this, b), a.fire("interactable:set", { options: b, interactable: this }), this;
          } }, { key: "unset", value: function() {
            ds(Jn(v.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), v;
        }(jo.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), du(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : fu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, f = o.before.reduce(function(v, b) {
            return v[b] = true, v[hu(b)] = true, v;
          }, {}); s < p; s++) {
            var g = this.listenerMaps[s].id;
            if (f[g] || f[hu(g)])
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
    function fu(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), S.default.init(o), L.default.init(o), Gt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Wo.default), n.usePlugin(Ho.default), n;
    }
    __name(fu, "fu");
    u(fu, "lr");
    function hu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(hu, "hu");
    u(hu, "ur"), Ni.Scope = Kd;
    var yt = {};
    Object.defineProperty(yt, "__esModule", { value: true }), yt.default = void 0;
    var vu = new Ni.Scope(), Qd = vu.interactStatic;
    yt.default = Qd;
    var ef = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    vu.init(ef);
    var Uo = {};
    Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0, Uo.default = function() {
    };
    var Vo = {};
    Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0, Vo.default = function() {
    };
    var Xo = {};
    function mu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, v = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (C) {
            g = true, v = C;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw v;
            }
          }
          return p;
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
    u(mu, "yr");
    function gu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(gu, "gu");
    u(gu, "mr"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0, Xo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = mu(s, 2), f = p[0], g = p[1];
        return f in n || g in n;
      }), a = u(function(s, p) {
        for (var f = n.range, g = n.limits, v = g === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : g, b = n.offset, w = b === void 0 ? { x: 0, y: 0 } : b, C = { range: f, grid: n, x: null, y: null }, O = 0; O < o.length; O++) {
          var N = mu(o[O], 2), G = N[0], k = N[1], $ = Math.round((s - w.x) / n[G]), J = Math.round((p - w.y) / n[k]);
          C[G] = Math.max(v.left, Math.min(v.right, $ * n[G] + w.x)), C[k] = Math.max(v.top, Math.min(v.bottom, J * n[k] + w.y));
        }
        return C;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: true }), Object.defineProperty(Gi, "edgeTarget", { enumerable: true, get: function() {
      return Uo.default;
    } }), Object.defineProperty(Gi, "elements", { enumerable: true, get: function() {
      return Vo.default;
    } }), Object.defineProperty(Gi, "grid", { enumerable: true, get: function() {
      return Xo.default;
    } });
    var Yo = {};
    Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0;
    var tf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, Gi), o.createSnapGrid = o.snappers.grid;
    } };
    Yo.default = tf;
    var Kn = {};
    function bu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(bu, "bu");
    u(bu, "Pr");
    function fs(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? bu(Object(a), true).forEach(function(s) {
          rf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : bu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(fs, "fs");
    u(fs, "Or");
    function rf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(rf, "rf");
    u(rf, "Sr"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.aspectRatio = Kn.default = void 0;
    var yu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, f = o.options.ratio, g = o.options, v = g.equalDelta, b = g.modifiers;
      f === "preserve" && (f = a.width / a.height), o.startCoords = (0, U.default)({}, p), o.startRect = (0, U.default)({}, a), o.ratio = f, o.equalDelta = v;
      var w = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (w.left ? 1 : -1) * (w.top ? 1 : -1);
      else {
        var C = o.xIsPrimaryAxis ? w.top : w.left;
        o.edgeSign = C ? -1 : 1;
      }
      if ((0, U.default)(n.edges, w), b && b.length) {
        var O = new gn.default(n.interaction);
        O.copyFrom(n.interaction.modification), O.prepareStates(b), o.subModification = O, O.startAll(fs({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, U.default)({}, s), f = o.equalDelta ? nf : of;
      if (f(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var g = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, g, { x: s.x - p.x, y: s.y - p.y });
      var v = o.subModification.setAll(fs(fs({}, n), {}, { rect: g, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: g })), b = v.delta;
      return v.changed && (f(o, Math.abs(b.x) > Math.abs(b.y), v.coords, v.rect), (0, U.default)(s, v.coords)), v.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function nf(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p : a.x = s.x + (a.y - s.y) * p;
    }
    __name(nf, "nf");
    u(nf, "Tr");
    function of(n, o, a, s) {
      var p = n.startRect, f = n.startCoords, g = n.ratio, v = n.edgeSign;
      if (o) {
        var b = s.width / g;
        a.y = f.y + (b - p.height) * v;
      } else {
        var w = s.height * g;
        a.x = f.x + (w - p.width) * v;
      }
    }
    __name(of, "of");
    u(of, "Mr"), Kn.aspectRatio = yu;
    var af = (0, ht.makeModifier)(yu, "aspectRatio");
    Kn.default = af;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = void 0;
    var xu = u(function() {
    }, "Ir");
    xu._defaults = {};
    var sf = xu;
    xn.default = sf;
    var hs = {};
    Object.defineProperty(hs, "__esModule", { value: true }), Object.defineProperty(hs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Tt = {};
    function vs(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    __name(vs, "vs");
    u(vs, "zr"), Object.defineProperty(Tt, "__esModule", { value: true }), Tt.getRestrictionRect = vs, Tt.restrict = Tt.default = void 0;
    var wu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, f = n.pageCoords, g = s.options, v = g.elementRect, b = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, g.offset || {});
      if (o && v) {
        var w = vs(g.restriction, p, f);
        if (w) {
          var C = w.right - w.left - o.width, O = w.bottom - w.top - o.height;
          C < 0 && (b.left += C, b.right += C), O < 0 && (b.top += O, b.bottom += O);
        }
        b.left += a.left - o.width * v.left, b.top += a.top - o.height * v.top, b.right += a.right - o.width * (1 - v.right), b.bottom += a.bottom - o.height * (1 - v.bottom);
      }
      s.offset = b;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, f = s.offset, g = vs(p.restriction, a, o);
      if (g) {
        var v = ce.xywhToTlbr(g);
        o.x = Math.max(Math.min(v.right - f.right, o.x), v.left + f.left), o.y = Math.max(Math.min(v.bottom - f.bottom, o.y), v.top + f.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Tt.restrict = wu;
    var lf = (0, ht.makeModifier)(wu, "restrict");
    Tt.default = lf;
    var Cr = {};
    Object.defineProperty(Cr, "__esModule", { value: true }), Cr.restrictEdges = Cr.default = void 0;
    var Eu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Su = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Cu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(Cu, "Cu");
    u(Cu, "Wr");
    var Tu = { noInner: Eu, noOuter: Su, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, f = p.options;
      if (f) {
        var g = (0, Tt.getRestrictionRect)(f.offset, a, a.coords.start.page);
        o = ce.rectToXY(g);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, f = p.offset, g = p.options;
      if (a) {
        var v = (0, U.default)({}, o), b = (0, Tt.getRestrictionRect)(g.inner, s, v) || {}, w = (0, Tt.getRestrictionRect)(g.outer, s, v) || {};
        Cu(b, Eu), Cu(w, Su), a.top ? o.y = Math.min(Math.max(w.top + f.top, v.y), b.top + f.top) : a.bottom && (o.y = Math.max(Math.min(w.bottom + f.bottom, v.y), b.bottom + f.bottom)), a.left ? o.x = Math.min(Math.max(w.left + f.left, v.x), b.left + f.left) : a.right && (o.x = Math.max(Math.min(w.right + f.right, v.x), b.right + f.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Cr.restrictEdges = Tu;
    var uf = (0, ht.makeModifier)(Tu, "restrictEdges");
    Cr.default = uf;
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.restrictRect = Qn.default = void 0;
    var cf = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Tt.restrict.defaults), Ou = { start: Tt.restrict.start, set: Tt.restrict.set, defaults: cf };
    Qn.restrictRect = Ou;
    var pf = (0, ht.makeModifier)(Ou, "restrictRect");
    Qn.default = pf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictSize = ei.default = void 0;
    var df = { width: -1 / 0, height: -1 / 0 }, ff = { width: 1 / 0, height: 1 / 0 }, Pu = { start: function(n) {
      return Cr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, f = a.options;
      if (p) {
        var g = ce.tlbrToXywh((0, Tt.getRestrictionRect)(f.min, o, n.coords)) || df, v = ce.tlbrToXywh((0, Tt.getRestrictionRect)(f.max, o, n.coords)) || ff;
        a.options = { endOnly: f.endOnly, inner: (0, U.default)({}, Cr.restrictEdges.noInner), outer: (0, U.default)({}, Cr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - g.height, a.options.outer.top = s.bottom - v.height) : p.bottom && (a.options.inner.bottom = s.top + g.height, a.options.outer.bottom = s.top + v.height), p.left ? (a.options.inner.left = s.right - g.width, a.options.outer.left = s.right - v.width) : p.right && (a.options.inner.right = s.left + g.width, a.options.outer.right = s.left + v.width), Cr.restrictEdges.set(n), a.options = f;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ei.restrictSize = Pu;
    var hf = (0, ht.makeModifier)(Pu, "restrictSize");
    ei.default = hf;
    var ms = {};
    Object.defineProperty(ms, "__esModule", { value: true }), Object.defineProperty(ms, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.snap = Jr.default = void 0;
    var Mu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, f = n.rect, g = n.state, v = n.startOffset, b = g.options, w = b.offsetWithOrigin ? function(N) {
        var G = N.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N.state.options.origin, null, null, [G])) || (0, qe.default)(N.interactable, G, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (b.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var C = (0, ce.resolveRectLike)(b.offset, s, p, [a]);
        (o = (0, ce.rectToXY)(C) || { x: 0, y: 0 }).x += w.x, o.y += w.y;
      }
      var O = b.relativePoints;
      g.offsets = f && O && O.length ? O.map(function(N, G) {
        return { index: G, relativePoint: N, x: v.left - f.width * N.x + o.x, y: v.top - f.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, f = s.offsets, g = (0, qe.default)(o.interactable, o.element, o.prepared.name), v = (0, U.default)({}, a), b = [];
      p.offsetWithOrigin || (v.x -= g.x, v.y -= g.y);
      for (var w = 0; w < f.length; w++)
        for (var C = f[w], O = v.x - C.x, N = v.y - C.y, G = 0, k = p.targets.length; G < k; G++) {
          var $, J = p.targets[G];
          ($ = c.default.func(J) ? J(O, N, o._proxy, C, G) : J) && b.push({ x: (c.default.number($.x) ? $.x : O) + C.x, y: (c.default.number($.y) ? $.y : N) + C.y, range: c.default.number($.range) ? $.range : p.range, source: J, index: G, offset: C });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, te = 0; te < b.length; te++) {
        var le = b[te], pe = le.range, Ee = le.x - v.x, je = le.y - v.y, be = (0, Qe.default)(Ee, je), ze = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (ze = false), F.target && !(ze ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = ze, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Jr.snap = Mu;
    var vf = (0, ht.makeModifier)(Mu, "snap");
    Jr.default = vf;
    var Gr = {};
    function Au(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Au, "Au");
    u(Au, "oo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var _u = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Jr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, f = n.coords, g = p.options, v = p.offsets, b = { x: f.x - v[0].x, y: f.y - v[0].y };
      p.options = (0, U.default)({}, g), p.options.targets = [];
      for (var w = 0; w < (g.targets || []).length; w++) {
        var C = (g.targets || [])[w], O = void 0;
        if (O = c.default.func(C) ? C(b.x, b.y, s) : C) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var G = (o = p.targetFields[N], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, te) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var le = [], pe = true, Ee = false, je = void 0;
                try {
                  for (var be, ze = F[Symbol.iterator](); !(pe = (be = ze.next()).done) && (le.push(be.value), !te || le.length !== te); pe = true)
                    ;
                } catch (Xt) {
                  Ee = true, je = Xt;
                } finally {
                  try {
                    pe || ze.return == null || ze.return();
                  } finally {
                    if (Ee)
                      throw je;
                  }
                }
                return le;
              }
            }(o, a) || function(F, te) {
              if (F) {
                if (typeof F == "string")
                  return Au(F, te);
                var le = Object.prototype.toString.call(F).slice(8, -1);
                return le === "Object" && F.constructor && (le = F.constructor.name), le === "Map" || le === "Set" ? Array.from(F) : le === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le) ? Au(F, te) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), k = G[0], $ = G[1];
            if (k in O || $ in O) {
              O.x = O[k], O.y = O[$];
              break;
            }
          }
          p.options.targets.push(O);
        }
      }
      var J = Jr.snap.set(n);
      return p.options = g, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = _u;
    var mf = (0, ht.makeModifier)(_u, "snapSize");
    Gr.default = mf;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.snapEdges = ti.default = void 0;
    var Iu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, U.default)((0, mn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ti.snapEdges = Iu;
    var gf = (0, ht.makeModifier)(Iu, "snapEdges");
    ti.default = gf;
    var gs = {};
    Object.defineProperty(gs, "__esModule", { value: true }), Object.defineProperty(gs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), Object.defineProperty(bs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.default = void 0;
    var bf = { aspectRatio: Kn.default, restrictEdges: Cr.default, restrict: Tt.default, restrictRect: Qn.default, restrictSize: ei.default, snapEdges: ti.default, snap: Jr.default, snapSize: Gr.default, spring: gs.default, avoid: hs.default, transform: bs.default, rubberband: ms.default };
    ri.default = bf;
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var yf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ht.default), n.usePlugin(Yo.default), o.modifiers = ri.default, ri.default) {
        var s = ri.default[a], p = s._defaults, f = s._methods;
        p._methods = f, n.defaults.perAction[a] = p;
      }
    } };
    Zo.default = yf;
    var wn = {};
    function zu(n) {
      return (zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(zu, "zu");
    u(zu, "mo");
    function xf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(xf, "xf");
    u(xf, "bo");
    function Du(n, o) {
      return (Du = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Du, "Du");
    u(Du, "xo");
    function wf(n, o) {
      return !o || zu(o) !== "object" && typeof o != "function" ? zt(n) : o;
    }
    __name(wf, "wf");
    u(wf, "wo");
    function zt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(zt, "zt");
    u(zt, "_o");
    function ys(n) {
      return (ys = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ys, "ys");
    u(ys, "Po");
    function br(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(br, "br");
    u(br, "Oo"), Object.defineProperty(wn, "__esModule", { value: true }), wn.PointerEvent = wn.default = void 0;
    var Ef = function(n) {
      (function(v, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        v.prototype = Object.create(b && b.prototype, { constructor: { value: v, writable: true, configurable: true } }), b && Du(v, b);
      })(g, n);
      var o, a, s, p, f = (s = g, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (v) {
          return false;
        }
      }(), function() {
        var v, b = ys(s);
        if (p) {
          var w = ys(this).constructor;
          v = Reflect.construct(b, arguments, w);
        } else
          v = b.apply(this, arguments);
        return wf(this, v);
      });
      function g(v, b, w, C, O, N) {
        var G;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, g), br(zt(G = f.call(this, O)), "type", void 0), br(zt(G), "originalEvent", void 0), br(zt(G), "pointerId", void 0), br(zt(G), "pointerType", void 0), br(zt(G), "double", void 0), br(zt(G), "pageX", void 0), br(zt(G), "pageY", void 0), br(zt(G), "clientX", void 0), br(zt(G), "clientY", void 0), br(zt(G), "dt", void 0), br(zt(G), "eventable", void 0), K.pointerExtend(zt(G), w), w !== b && K.pointerExtend(zt(G), b), G.timeStamp = N, G.originalEvent = w, G.type = v, G.pointerId = K.getPointerId(b), G.pointerType = K.getPointerType(b), G.target = C, G.currentTarget = null, v === "tap") {
          var k = O.getPointerIndex(b);
          G.dt = G.timeStamp - O.pointers[k].downTime;
          var $ = G.timeStamp - O.tapTime;
          G.double = !!(O.prevTap && O.prevTap.type !== "doubletap" && O.prevTap.target === G.target && $ < 500);
        } else
          v === "doubletap" && (G.dt = b.timeStamp - O.tapTime);
        return G;
      }
      __name(g, "g");
      return u(g, "a"), o = g, (a = [{ key: "_subtractOrigin", value: function(v) {
        var b = v.x, w = v.y;
        return this.pageX -= b, this.pageY -= w, this.clientX -= b, this.clientY -= w, this;
      } }, { key: "_addOrigin", value: function(v) {
        var b = v.x, w = v.y;
        return this.pageX += b, this.pageY += w, this.clientX += b, this.clientY += w, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && xf(o.prototype, a), g;
    }(Rt.BaseEvent);
    wn.PointerEvent = wn.default = Ef;
    var qi = {};
    Object.defineProperty(qi, "__esModule", { value: true }), qi.default = void 0;
    var Jo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Jo, n.defaults.actions.pointerEvents = Jo.defaults, (0, U.default)(n.actions.phaselessTypes, Jo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && xs(n), Kr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, f = a.pointer, g = a.event, v = a.eventTarget, b = a.pointerIndex, w = p.pointers[b].hold, C = R.getPath(v), O = { interaction: p, pointer: f, event: g, eventTarget: v, type: "hold", targets: [], path: C, node: null }, N = 0; N < C.length; N++) {
          var G = C[N];
          O.node = G, s.fire("pointerEvents:collect-targets", O);
        }
        if (O.targets.length) {
          for (var k = 1 / 0, $ = 0; $ < O.targets.length; $++) {
            var J = O.targets[$].eventable.options.holdDuration;
            J < k && (k = J);
          }
          w.duration = k, w.timeout = setTimeout(function() {
            Kr({ interaction: p, eventTarget: v, pointer: f, event: g, type: "hold" }, s);
          }, k);
        }
      })(n, o), Kr(n, o);
    }, "interactions:up": function(n, o) {
      xs(n), Kr(n, o), function(a, s) {
        var p = a.interaction, f = a.pointer, g = a.event, v = a.eventTarget;
        p.pointerWasMoved || Kr({ interaction: p, eventTarget: v, pointer: f, event: g, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      xs(n), Kr(n, o);
    } }, PointerEvent: wn.PointerEvent, fire: Kr, collectEventTargets: ku, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Kr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, g = n.type, v = n.targets, b = v === void 0 ? ku(n, o) : v, w = new wn.PointerEvent(g, s, p, f, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: w });
      for (var C = { interaction: a, pointer: s, event: p, eventTarget: f, targets: b, type: g, pointerEvent: w }, O = 0; O < b.length; O++) {
        var N = b[O];
        for (var G in N.props || {})
          w[G] = N.props[G];
        var k = (0, qe.default)(N.eventable, N.node);
        if (w._subtractOrigin(k), w.eventable = N.eventable, w.currentTarget = N.node, N.eventable.fire(w), w._addOrigin(k), w.immediatePropagationStopped || w.propagationStopped && O + 1 < b.length && b[O + 1].node !== w.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", C), g === "tap") {
        var $ = w.double ? Kr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "doubletap" }, o) : w;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return w;
    }
    __name(Kr, "Kr");
    u(Kr, "Mo");
    function ku(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, g = n.type, v = a.getPointerIndex(s), b = a.pointers[v];
      if (g === "tap" && (a.pointerWasMoved || !b || b.downTarget !== f))
        return [];
      for (var w = R.getPath(f), C = { interaction: a, pointer: s, event: p, eventTarget: f, type: g, path: w, targets: [], node: null }, O = 0; O < w.length; O++) {
        var N = w[O];
        C.node = N, o.fire("pointerEvents:collect-targets", C);
      }
      return g === "hold" && (C.targets = C.targets.filter(function(G) {
        var k;
        return G.eventable.options.holdDuration === ((k = a.pointers[v]) == null ? void 0 : k.hold.duration);
      })), C.targets;
    }
    __name(ku, "ku");
    u(ku, "jo");
    function xs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(xs, "xs");
    u(xs, "ko");
    var Sf = Jo;
    qi.default = Sf;
    var Ko = {};
    function Cf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Cf, "Cf");
    u(Cf, "Ao"), Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var Tf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(qi.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Cf, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, p = n.eventTarget, f = n.targets;
      if (s.type === "hold" && f.length) {
        var g = f[0].eventable.options.holdRepeatInterval;
        g <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: p, type: "hold", pointer: s, event: s }, o);
        }, g));
      }
    } }) };
    Ko.default = Tf;
    var Qo = {};
    function Of(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    __name(Of, "Of");
    u(Of, "Co"), Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0;
    var Pf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = Of;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var f = a.call(this, s, p);
        return f === this && (this.events.options[s] = p), f;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, f = n.eventTarget;
      o.interactables.forEachMatch(s, function(g) {
        var v = g.events, b = v.options;
        v.types[p] && v.types[p].length && g.testIgnoreAllow(b, s, f) && a.push({ node: s, eventable: v, props: { interactable: g } });
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
    Qo.default = Pf;
    var ea = {};
    Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0;
    var Mf = { id: "pointer-events", install: function(n) {
      n.usePlugin(qi), n.usePlugin(Ko.default), n.usePlugin(Qo.default);
    } };
    ea.default = Mf;
    var Li = {};
    function Ru(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, f) {
          for (var g = c.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], v = f.window.Promise, b = v ? [] : null, w = function() {
            var O = g[C], N = s.getRect(O);
            if (!N)
              return "break";
            var G = xe.find(f.interactions.list, function(te) {
              return te.interacting() && te.interactable === s && te.element === O && te.prepared.name === p.name;
            }), k = void 0;
            if (G)
              G.move(), b && (k = G._reflowPromise || new v(function(te) {
                G._reflowResolve = te;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(N), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f.now() }, F = K.coordsToEvent(J);
              k = function(te, le, pe, Ee, je) {
                var be = te.interactions.new({ pointerType: "reflow" }), ze = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), K.setZeroCoords(be.coords.delta), (0, Lt.copyAction)(be.prepared, Ee), be._doPhase(ze);
                var Xt = te.window.Promise, qr = Xt ? new Xt(function(ws) {
                  be._reflowResolve = ws;
                }) : void 0;
                return be._reflowPromise = qr, be.start(Ee, le, pe), be._interacting ? (be.move(ze), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), qr;
              }(f, s, O, p, F);
            }
            b && b.push(k);
          }, C = 0; C < g.length && w() !== "break"; C++)
            ;
          return b && v.all(b).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Ru, "Ru");
    u(Ru, "Wo"), Object.defineProperty(Li, "__esModule", { value: true }), Li.install = Ru, Li.default = void 0;
    var Af = { id: "reflow", install: Ru, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o.interactions.list, a));
    } } };
    Li.default = Af;
    var Vt = { exports: {} };
    function Nu(n) {
      return (Nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Nu, "Nu");
    u(Nu, "Vo"), Object.defineProperty(Vt.exports, "__esModule", { value: true }), Vt.exports.default = void 0, yt.default.use(Yn.default), yt.default.use(yn.default), yt.default.use(ea.default), yt.default.use(Zn.default), yt.default.use(Zo.default), yt.default.use(ko.default), yt.default.use(Rr.default), yt.default.use(Zr.default), yt.default.use(Li.default);
    var _f = yt.default;
    if (Vt.exports.default = _f, Nu(Vt) === "object" && Vt)
      try {
        Vt.exports = yt.default;
      } catch (n) {
      }
    yt.default.default = yt.default, Vt = Vt.exports;
    var En = { exports: {} };
    function Gu(n) {
      return (Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Gu, "Gu");
    u(Gu, "$o"), Object.defineProperty(En.exports, "__esModule", { value: true }), En.exports.default = void 0;
    var If = Vt.default;
    if (En.exports.default = If, Gu(En) === "object" && En)
      try {
        En.exports = Vt.default;
      } catch (n) {
      }
    return Vt.default.default = Vt.default, En.exports;
  });
});
var ad = Es((od, _l) => {
  (function(r) {
    "use strict";
    var e = /* @__PURE__ */ __name(function() {
    }, "e"), t = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(y) {
      return setTimeout(y, 16);
    };
    function i() {
      var y = this;
      y.reads = [], y.writes = [], y.raf = t.bind(r), e("initialized", y);
    }
    __name(i, "i");
    u(i, "FastDom"), i.prototype = { constructor: i, runTasks: function(y) {
      e("run tasks");
      for (var x; x = y.shift(); )
        x();
    }, measure: function(y, x) {
      e("measure");
      var P = x ? y.bind(x) : y;
      return this.reads.push(P), l(this), P;
    }, mutate: function(y, x) {
      e("mutate");
      var P = x ? y.bind(x) : y;
      return this.writes.push(P), l(this), P;
    }, clear: function(y) {
      return e("clear", y), d(this.reads, y) || d(this.writes, y);
    }, extend: function(y) {
      if (e("extend", y), typeof y != "object")
        throw new Error("expected object");
      var x = Object.create(this);
      return h(x, y), x.fastdom = this, x.initialize && x.initialize(), x;
    }, catch: null };
    function l(y) {
      y.scheduled || (y.scheduled = true, y.raf(c.bind(null, y)), e("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(y) {
      e("flush");
      var x = y.writes, P = y.reads, T;
      try {
        e("flushing reads", P.length), y.runTasks(P), e("flushing writes", x.length), y.runTasks(x);
      } catch (A) {
        T = A;
      }
      if (y.scheduled = false, (P.length || x.length) && l(y), T)
        if (e("task errored", T.message), y.catch)
          y.catch(T);
        else
          throw T;
    }
    __name(c, "c");
    u(c, "flush");
    function d(y, x) {
      var P = y.indexOf(x);
      return !!~P && !!y.splice(P, 1);
    }
    __name(d, "d");
    u(d, "remove");
    function h(y, x) {
      for (var P in x)
        x.hasOwnProperty(P) && (y[P] = x[P]);
    }
    __name(h, "h");
    u(h, "mixin");
    var m = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof _l == "object" && (_l.exports = m);
  })(typeof window != "undefined" ? window : od);
});
var Qr = Bi(Bu());
function Hu(r) {
  let e = en(r);
  return new Qr.default(e).valueOf() * Math.PI;
}
__name(Hu, "Hu");
u(Hu, "V");
function $i(r) {
  let e = en(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name($i, "$i");
u($i, "X");
function $u(r, e) {
  return new Qr.default(en(r)).valueOf() < new Qr.default(en(e)).valueOf();
}
__name($u, "$u");
u($u, "W");
function Fu(r, e) {
  return new Qr.default(en(r)).valueOf() > new Qr.default(en(e)).valueOf();
}
__name(Fu, "Fu");
u(Fu, "H");
function Wu(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = en(r);
    return new Qr.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(Wu, "Wu");
u(Wu, "Q");
function en(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(en, "en");
u(en, "l");
function Uu(r) {
  try {
    let e = en(r), t = new Qr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Uu, "Uu");
u(Uu, "J");
var qf = Object.prototype.toString.call({});
var Lf = "!recursion-limit!";
var jf = 10;
function et(r, e = jf) {
  return Bf(r) || Hf(r, e) || $f(r, e);
}
__name(et, "et");
u(et, "c");
function Bf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(Bf, "Bf");
u(Bf, "M");
function Hf(r, e) {
  if (e === 0)
    return Lf;
  if (r instanceof Map)
    return Ff(r, e);
  if (r instanceof Set)
    return Wf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Uf(r, e);
}
__name(Hf, "Hf");
u(Hf, "O");
function $f(r, e) {
  let t = String(r);
  return t !== qf ? t : Vf(r, e);
}
__name($f, "$f");
u($f, "F");
function Ff(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = et(i, e - 1), d = et(l, e - 1);
    t.push(`${c}: ${d}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(Ff, "Ff");
u(Ff, "G");
function Wf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(et(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
__name(Wf, "Wf");
u(Wf, "R");
function Uf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(et(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
__name(Uf, "Uf");
u(Uf, "N");
function Vf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], d = et(l, e - 1), h = et(c, e - 1);
    t.push(`${d}: ${h}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(Vf, "Vf");
u(Vf, "q");
var Cs = 0;
var xt = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Cs++;
    try {
      this.details = Cs === 1 ? et(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Cs--;
    }
  }
}, "d");
var Xf = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
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
    for (let e of Xf)
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
var Hi = jt;
Hi.CONSISTENT = new jt(false, 0, 2, ", "), Hi.EXACT = new jt(true, 0, void 0, ", "), Hi.MINIFIED = new jt(true, 0, void 0, ","), Hi.SIMPLIFIED = new jt(true, 5e-4, 3, ", ");
var re = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    re.need(r != null, "notNull");
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
    throw new xt("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = re.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new xt("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new xt("Unrecognized value type.", { v: r });
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
    return i.map((d) => l.minus(d).dividedBy(c));
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
    return r = r || Hi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var Yt = de;
Yt.ZERO = new de(0, 0), Yt.ONE = new de(1, 0), Yt.I = new de(0, 1);
var ia = "H";
var oa = "X";
var aa = "Y";
var sa = "Z";
var la = "P";
var ua = "T";
var ca = "X^\xBD";
var pa = "Rx";
var da = "Ry";
var fa = "Rz";
var Ts = "Swap";
var Os = "\u2022";
var Ps = "Bloch";
var Vu = "|0>";
var Xu = "|1>";
var ha = "Measure";
var Ms = /* @__PURE__ */ new WeakSet();
function _s(r) {
  Ms.add(r), r.shadowRoot && Is(r.shadowRoot), Ds(r), zs(r.ownerDocument);
}
__name(_s, "_s");
u(_s, "bind");
function Is(r) {
  Ds(r), zs(r);
}
__name(Is, "Is");
u(Is, "bindShadow");
var va = /* @__PURE__ */ new WeakMap();
function zs(r = document) {
  if (va.has(r))
    return va.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        As(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let d of c.addedNodes)
          d instanceof Element && Ds(d);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, va.delete(r), t.disconnect();
  } };
  return va.set(r, i), i;
}
__name(zs, "zs");
u(zs, "listenForBind");
function Ds(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    As(e);
  r instanceof Element && r.hasAttribute("data-action") && As(r);
}
__name(Ds, "Ds");
u(Ds, "bindElements");
function Yf(r) {
  let e = r.currentTarget;
  for (let t of Yu(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      Ms.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && Ms.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(Yf, "Yf");
u(Yf, "handleEvent");
function* Yu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(Yu, "Yu");
u(Yu, "bindings");
function As(r) {
  for (let e of Yu(r))
    r.addEventListener(e.type, Yf);
}
__name(As, "As");
u(As, "bindActions");
function ks(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(ks, "ks");
u(ks, "register");
function Rs(r, e) {
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
__name(Rs, "Rs");
u(Rs, "findTarget");
function Ns(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(Ns, "Ns");
u(Ns, "findTargets");
function Oe(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Rs(this, e);
  } });
}
__name(Oe, "Oe");
u(Oe, "target");
function Bt(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Ns(this, e);
  } });
}
__name(Bt, "Bt");
u(Bt, "targets");
function Gs(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(Gs, "Gs");
u(Gs, "autoShadowRoot");
var ma = /* @__PURE__ */ new WeakMap();
function q(r, e) {
  ma.has(r) || ma.set(r, []), ma.get(r).push(e);
}
__name(q, "q");
u(q, "attr");
function qs(r, e) {
  e || (e = Zu(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = Ju(t), c = { configurable: true, get() {
      return this.getAttribute(l) || "";
    }, set(d) {
      this.setAttribute(l, d || "");
    } };
    typeof i == "number" ? c = { configurable: true, get() {
      return Number(this.getAttribute(l) || 0);
    }, set(d) {
      this.setAttribute(l, d);
    } } : typeof i == "boolean" && (c = { configurable: true, get() {
      return this.hasAttribute(l);
    }, set(d) {
      this.toggleAttribute(l, d);
    } }), Object.defineProperty(r, t, c), t in r && !r.hasAttribute(l) && c.set.call(r, i);
  }
}
__name(qs, "qs");
u(qs, "initializeAttrs");
function Zu(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = ma.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(Zu, "Zu");
u(Zu, "getAttrNames");
function Ju(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Ju, "Ju");
u(Ju, "attrToAttributeName");
function Ls(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...Zu(r.prototype)].map(Ju).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Ls, "Ls");
u(Ls, "defineObservedAttributes");
var Zf = /* @__PURE__ */ new WeakSet();
function Ku(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Zf.add(r), Gs(r), qs(r), _s(r), e && e.call(r), r.shadowRoot && Is(r.shadowRoot);
}
__name(Ku, "Ku");
u(Ku, "initializeInstance");
function Qu(r) {
  Ls(r), ks(r);
}
__name(Qu, "Qu");
u(Qu, "initializeClass");
function ne(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    Ku(this, e);
  }, Qu(r);
}
__name(ne, "ne");
u(ne, "controller");
function Pe(r) {
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
  return u(e, "ActivateableMixinClass"), z([q], e.prototype, "active", 2), e;
}
__name(Pe, "Pe");
u(Pe, "ActivateableMixin");
var Sn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function tn(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u(e, "AngleableMixinClass"), z([q], e.prototype, "angle", 2), z([q], e.prototype, "reducedAngle", 2), e;
}
__name(tn, "tn");
u(tn, "AngleableMixin");
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
  __name(e, "e");
  return u(e, "ControllableMixinClass"), e;
}
__name($e, "$e");
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
  __name(e, "e");
  return u(e, "DisableableMixinClass"), z([q], e.prototype, "disabled", 2), e;
}
__name(Be, "Be");
u(Be, "DisableableMixin");
var Y = u(function() {
  return Y = Object.assign || u(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, "__assign"), Y.apply(this, arguments);
}, "__assign");
function ni(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(ni, "ni");
u(ni, "__rest");
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
function me(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), l, c = [], d;
  try {
    for (; (e === void 0 || e-- > 0) && !(l = i.next()).done; )
      c.push(l.value);
  } catch (h) {
    d = { error: h };
  } finally {
    try {
      l && !l.done && (t = i.return) && t.call(i);
    } finally {
      if (d)
        throw d.error;
    }
  }
  return c;
}
__name(me, "me");
u(me, "__read");
function De(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(De, "De");
u(De, "__spreadArray");
var Se;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Se || (Se = {}));
var rn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(rn || (rn = {}));
var Fi = Se.Start;
var ii = Se.Stop;
var oi = Se.Raise;
var Tn = Se.Send;
var ga = Se.Cancel;
var ec = Se.NullEvent;
var js = Se.Assign;
var wm = Se.After;
var Em = Se.DoneState;
var ba = Se.Log;
var tc = Se.Init;
var Wi = Se.Invoke;
var Sm = Se.ErrorExecution;
var Bs = Se.ErrorPlatform;
var Hs = Se.ErrorCustom;
var Ui = Se.Update;
var rc = Se.Choose;
var nc = Se.Pure;
var ya = ".";
var $s = {};
var xa = "xstate.guard";
var ic = "";
var Le = true;
var wa;
function Xi(r, e, t) {
  t === void 0 && (t = ya);
  var i = ai(r, t), l = ai(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Xi(i[c], l[c]) : false;
  });
}
__name(Xi, "Xi");
u(Xi, "matchesState");
function Ea(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ea, "Ea");
u(Ea, "getEventType");
function Sa(r, e) {
  try {
    return Lr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Sa, "Sa");
u(Sa, "toStatePath");
function Jf(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Jf, "Jf");
u(Jf, "isStateLike");
function ai(r, e) {
  if (Jf(r))
    return r.value;
  if (Lr(r))
    return Vi(r);
  if (typeof r != "string")
    return r;
  var t = Sa(r, e);
  return Vi(t);
}
__name(ai, "ai");
u(ai, "toStateValue");
function Vi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Vi, "Vi");
u(Vi, "pathToStateValue");
function si(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(si, "si");
u(si, "mapValues");
function Fs(r, e, t) {
  var i, l, c = {};
  try {
    for (var d = ve(Object.keys(r)), h = d.next(); !h.done; h = d.next()) {
      var m = h.value, y = r[m];
      !t(y) || (c[m] = e(y, m, r));
    }
  } catch (x) {
    i = { error: x };
  } finally {
    try {
      h && !h.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(Fs, "Fs");
u(Fs, "mapFilterValues");
var oc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ve(r), d = c.next(); !d.done; d = c.next()) {
        var h = d.value;
        l = l[h];
      }
    } catch (m) {
      t = { error: m };
    } finally {
      try {
        d && !d.done && (i = c.return) && i.call(c);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return l;
  };
}, "path");
function ac(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var d = ve(r), h = d.next(); !h.done; h = d.next()) {
        var m = h.value;
        c = c[e][m];
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
    return c;
  };
}
__name(ac, "ac");
u(ac, "nestedPath");
function Yi(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Yi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Yi, "Yi");
u(Yi, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, De([], me(r), false));
}
__name(Ne, "Ne");
u(Ne, "flatten");
function sc(r) {
  return Lr(r) ? r : [r];
}
__name(sc, "sc");
u(sc, "toArrayStrict");
function Ht(r) {
  return r === void 0 ? [] : sc(r);
}
__name(Ht, "Ht");
u(Ht, "toArray");
function On(r, e, t) {
  var i, l;
  if (Ce(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var d = ve(Object.keys(r)), h = d.next(); !h.done; h = d.next()) {
      var m = h.value, y = r[m];
      Ce(y) ? c[m] = y(e, t.data) : c[m] = y;
    }
  } catch (x) {
    i = { error: x };
  } finally {
    try {
      h && !h.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(On, "On");
u(On, "mapContext");
function lc(r) {
  return /^(done|error)\./.test(r);
}
__name(lc, "lc");
u(lc, "isBuiltInEvent");
function Ws(r) {
  return !!(r instanceof Promise || r !== null && (Ce(r) || typeof r == "object") && Ce(r.then));
}
__name(Ws, "Ws");
u(Ws, "isPromiseLike");
function uc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(uc, "uc");
u(uc, "isBehavior");
function Ca(r, e) {
  var t, i, l = me([[], []], 2), c = l[0], d = l[1];
  try {
    for (var h = ve(r), m = h.next(); !m.done; m = h.next()) {
      var y = m.value;
      e(y) ? c.push(y) : d.push(y);
    }
  } catch (x) {
    t = { error: x };
  } finally {
    try {
      m && !m.done && (i = h.return) && i.call(h);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, d];
}
__name(Ca, "Ca");
u(Ca, "partition");
function cc(r, e) {
  return si(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: cc(t, l) };
    }
  });
}
__name(cc, "cc");
u(cc, "updateHistoryStates");
function pc(r, e) {
  return { current: e, states: cc(r, e) };
}
__name(pc, "pc");
u(pc, "updateHistoryValue");
function Us(r, e, t, i) {
  Le || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, d) {
    var h, m, y = d.assignment, x = { state: i, action: d, _event: e }, P = {};
    if (Ce(y))
      P = y(c, e.data, x);
    else
      try {
        for (var T = ve(Object.keys(y)), A = T.next(); !A.done; A = T.next()) {
          var D = A.value, S = y[D];
          P[D] = Ce(S) ? S(c, e.data, x) : S;
        }
      } catch (M) {
        h = { error: M };
      } finally {
        try {
          A && !A.done && (m = T.return) && m.call(T);
        } finally {
          if (h)
            throw h.error;
        }
      }
    return Object.assign({}, c, P);
  }, r);
  return l;
}
__name(Us, "Us");
u(Us, "updateContext");
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
__name(Lr, "Lr");
u(Lr, "isArray");
function Ce(r) {
  return typeof r == "function";
}
__name(Ce, "Ce");
u(Ce, "isFunction");
function ge(r) {
  return typeof r == "string";
}
__name(ge, "ge");
u(ge, "isString");
function Ta(r, e) {
  if (!!r)
    return ge(r) ? { type: xa, name: r, predicate: e ? e[r] : void 0 } : Ce(r) ? { type: xa, name: r.name, predicate: r } : r;
}
__name(Ta, "Ta");
u(Ta, "toGuard");
function dc(r) {
  try {
    return "subscribe" in r && Ce(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(dc, "dc");
u(dc, "isObservable");
var Tr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var _m = (wa = {}, wa[Tr] = function() {
  return this;
}, wa[Symbol.observable] = function() {
  return this;
}, wa);
function Or(r) {
  return !!r && "__xstatenode" in r;
}
__name(Or, "Or");
u(Or, "isMachine");
function fc(r) {
  return !!r && typeof r.send == "function";
}
__name(fc, "fc");
u(fc, "isActor");
function Zi(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
__name(Zi, "Zi");
u(Zi, "toEventObject");
function tt(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Zi(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(tt, "tt");
u(tt, "toSCXMLEvent");
function Pn(r, e) {
  var t = sc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Or(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
__name(Pn, "Pn");
u(Pn, "toTransitionConfigArray");
function hc(r) {
  if (!(r === void 0 || r === ic))
    return Ht(r);
}
__name(hc, "hc");
u(hc, "normalizeTarget");
function vc(r, e, t) {
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
__name(vc, "vc");
u(vc, "reportUnhandledExceptionOnInvocation");
function Oa(r, e, t, i, l) {
  var c = r.options.guards, d = { state: l, cond: e, _event: i };
  if (e.type === xa)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, d);
  var h = c == null ? void 0 : c[e.type];
  if (!h)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return h(t, i.data, d);
}
__name(Oa, "Oa");
u(Oa, "evaluateGuard");
function Pa(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(Pa, "Pa");
u(Pa, "toInvokeSource");
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
var Mn = tt({ type: tc });
function Ma(r, e) {
  return e && e[r] || void 0;
}
__name(Ma, "Ma");
u(Ma, "getActionFunction");
function li(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = Ma(r, e);
    Ce(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Ce(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = Ma(r.type, e);
    if (Ce(i))
      t = Y(Y({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = Y(Y(Y({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(li, "li");
u(li, "toActionObject");
var Qi = u(function(r, e) {
  if (!r)
    return [];
  var t = Lr(r) ? r : [r];
  return t.map(function(i) {
    return li(i, e);
  });
}, "toActionObjects");
function _a(r) {
  var e = li(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
__name(_a, "_a");
u(_a, "toActivityDefinition");
function mc(r) {
  return ge(r) ? { type: oi, event: r } : Vs(r, { to: rn.Internal });
}
__name(mc, "mc");
u(mc, "raise");
function Kf(r) {
  return { type: oi, _event: tt(r.event) };
}
__name(Kf, "Kf");
u(Kf, "resolveRaise");
function Vs(r, e) {
  return { to: e ? e.to : void 0, type: Tn, event: Ce(r) ? r : Zi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Ce(r) ? r.name : Ea(r) };
}
__name(Vs, "Vs");
u(Vs, "send");
function Qf(r, e, t, i) {
  var l = { _event: t }, c = tt(Ce(r.event) ? r.event(e, t.data, l) : r.event), d;
  if (ge(r.delay)) {
    var h = i && i[r.delay];
    d = Ce(h) ? h(e, t.data, l) : h;
  } else
    d = Ce(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var m = Ce(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: m, _event: c, event: c.data, delay: d });
}
__name(Qf, "Qf");
u(Qf, "resolveSend");
var eh = u(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var gc = u(function(r) {
  return { type: ga, sendId: r };
}, "cancel");
function bc(r) {
  var e = _a(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
__name(bc, "bc");
u(bc, "start");
function yc(r) {
  var e = Ce(r) ? r : _a(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
__name(yc, "yc");
u(yc, "stop");
function th(r, e, t) {
  var i = Ce(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
__name(th, "th");
u(th, "resolveStop");
function xc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
__name(xc, "xc");
u(xc, "after");
function eo(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(eo, "eo");
u(eo, "done");
function ui(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(ui, "ui");
u(ui, "doneInvoke");
function An(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(An, "An");
u(An, "error");
function Aa(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var d = me(c ? [[], l] : Ca(l, function(T) {
    return T.type === js;
  }), 2), h = d[0], m = d[1], y = h.length ? Us(t, i, h, e) : t, x = c ? [t] : void 0, P = Ne(m.map(function(T) {
    var A;
    switch (T.type) {
      case oi:
        return Kf(T);
      case Tn:
        var D = Qf(T, y, i, r.options.delays);
        return Le || Ue(!ge(T.delay) || typeof D.delay == "number", "No delay reference for delay expression '".concat(T.delay, "' was found on machine '").concat(r.id, "'")), D;
      case ba:
        return eh(T, y, i);
      case rc: {
        var S = T, M = (A = S.conds.find(function(W) {
          var ie = Ta(W.cond, r.options.guards);
          return !ie || Oa(r, ie, y, i, e);
        })) === null || A === void 0 ? void 0 : A.actions;
        if (!M)
          return [];
        var _ = me(Aa(r, e, y, i, Qi(Ht(M), r.options.actions), c), 2), I = _[0], L = _[1];
        return y = L, x == null || x.push(y), I;
      }
      case nc: {
        var M = T.get(y, i.data);
        if (!M)
          return [];
        var E = me(Aa(r, e, y, i, Qi(Ht(M), r.options.actions), c), 2), B = E[0], R = E[1];
        return y = R, x == null || x.push(y), B;
      }
      case ii:
        return th(T, y, i);
      case js: {
        y = Us(y, i, [T], e), x == null || x.push(y);
        break;
      }
      default:
        var X = li(T, r.options.actions), V = X.exec;
        if (V && x) {
          var H = x.length - 1;
          X = Y(Y({}, X), { exec: function(W) {
            for (var ie = [], oe = 1; oe < arguments.length; oe++)
              ie[oe - 1] = arguments[oe];
            V.apply(void 0, De([x[H]], me(ie), false));
          } });
        }
        return X;
    }
  }).filter(function(T) {
    return !!T;
  }));
  return [P, y];
}
__name(Aa, "Aa");
u(Aa, "resolveActions");
var wc = [];
var _n = u(function(r, e) {
  wc.push(r);
  var t = e(r);
  return wc.pop(), t;
}, "provide");
function Ec(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[Tr] = function() {
    return this;
  }, e;
}
__name(Ec, "Ec");
u(Ec, "createNullActor");
function Sc(r, e, t, i) {
  var l, c = Pa(r.src), d = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], h = r.data ? On(r.data, t, i) : void 0, m = d ? Cc(d, r.id, h) : Ec(r.id);
  return m.meta = r, m;
}
__name(Sc, "Sc");
u(Sc, "createInvocableActor");
function Cc(r, e, t) {
  var i = Ec(e);
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
__name(Cc, "Cc");
u(Cc, "createDeferredActor");
function rh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(rh, "rh");
u(rh, "isActor");
function Tc(r) {
  return rh(r) && "id" in r;
}
__name(Tc, "Tc");
u(Tc, "isSpawnedActor");
function Oc(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Tr] = function() {
    return this;
  }, e), r);
}
__name(Oc, "Oc");
u(Oc, "toActorRef");
var to = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function In(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(In, "In");
u(In, "getChildren");
function Ys(r) {
  var e = [r];
  return to(r) ? e : e.concat(Ne(In(r).map(Ys)));
}
__name(Ys, "Ys");
u(Ys, "getAllStateNodes");
function zn(r, e) {
  var t, i, l, c, d, h, m, y, x = new Set(r), P = Xs(x), T = new Set(e);
  try {
    for (var A = ve(T), D = A.next(); !D.done; D = A.next())
      for (var S = D.value, M = S.parent; M && !T.has(M); )
        T.add(M), M = M.parent;
  } catch (H) {
    t = { error: H };
  } finally {
    try {
      D && !D.done && (i = A.return) && i.call(A);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var _ = Xs(T);
  try {
    for (var I = ve(T), L = I.next(); !L.done; L = I.next()) {
      var S = L.value;
      if (S.type === "compound" && (!_.get(S) || !_.get(S).length))
        P.get(S) ? P.get(S).forEach(function(W) {
          return T.add(W);
        }) : S.initialStateNodes.forEach(function(W) {
          return T.add(W);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d = void 0, ve(In(S))), B = E.next(); !B.done; B = E.next()) {
            var R = B.value;
            T.has(R) || (T.add(R), P.get(R) ? P.get(R).forEach(function(W) {
              return T.add(W);
            }) : R.initialStateNodes.forEach(function(W) {
              return T.add(W);
            }));
          }
        } catch (W) {
          d = { error: W };
        } finally {
          try {
            B && !B.done && (h = E.return) && h.call(E);
          } finally {
            if (d)
              throw d.error;
          }
        }
    }
  } catch (H) {
    l = { error: H };
  } finally {
    try {
      L && !L.done && (c = I.return) && c.call(I);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var X = ve(T), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, M = S.parent; M && !T.has(M); )
        T.add(M), M = M.parent;
  } catch (H) {
    m = { error: H };
  } finally {
    try {
      V && !V.done && (y = X.return) && y.call(X);
    } finally {
      if (m)
        throw m.error;
    }
  }
  return T;
}
__name(zn, "zn");
u(zn, "getConfiguration");
function Pc(r, e) {
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
    l[c.key] = Pc(c, e);
  }), l;
}
__name(Pc, "Pc");
u(Pc, "getValueFromAdj");
function Xs(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = ve(r), c = l.next(); !c.done; c = l.next()) {
      var d = c.value;
      i.has(d) || i.set(d, []), d.parent && (i.has(d.parent) || i.set(d.parent, []), i.get(d.parent).push(d));
    }
  } catch (h) {
    e = { error: h };
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
__name(Xs, "Xs");
u(Xs, "getAdjList");
function Mc(r, e) {
  var t = zn([r], e);
  return Pc(r, Xs(t));
}
__name(Mc, "Mc");
u(Mc, "getValue");
function ro(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(ro, "ro");
u(ro, "has");
function Ac(r) {
  return De([], me(new Set(Ne(De([], me(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(Ac, "Ac");
u(Ac, "nextEvents");
function Dn(r, e) {
  return e.type === "compound" ? In(e).some(function(t) {
    return t.type === "final" && ro(r, t);
  }) : e.type === "parallel" ? In(e).every(function(t) {
    return Dn(r, t);
  }) : false;
}
__name(Dn, "Dn");
u(Dn, "isInFinalState");
function _c(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(_c, "_c");
u(_c, "getMeta");
function Zs(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
__name(Zs, "Zs");
u(Zs, "getTagsFromConfiguration");
function Js(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Js(r[l], e[l]);
  });
}
__name(Js, "Js");
u(Js, "stateValuesEqual");
function Ic(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Ic, "Ic");
u(Ic, "isStateConfig");
function zc(r, e) {
  var t = r.exec, i = Y(Y({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(zc, "zc");
u(zc, "bindActionToState");
var yr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = $s, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || $s, this.meta = _c(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Ac(t.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = Mn;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = Mn;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ge(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, De([], me(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(d) {
        return c + t + d;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ni(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
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
var nh = { deferEvents: false };
var Ks = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, nh), e);
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
var Qs = /* @__PURE__ */ new Map();
var ih = 0;
var no = { bookId: function() {
  return "x:".concat(ih++);
}, register: function(r, e) {
  return Qs.set(r, e), r;
}, get: function(r) {
  return Qs.get(r);
}, free: function(r) {
  Qs.delete(r);
} };
function Ia() {
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
__name(Ia, "Ia");
u(Ia, "getGlobal");
function oh() {
  var r = Ia();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(oh, "oh");
u(oh, "getDevTools");
function Dc(r) {
  if (!!Ia()) {
    var e = oh();
    e && e.register(r);
  }
}
__name(Dc, "Dc");
u(Dc, "registerService");
function kc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, d = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var y = l.shift();
        t = r.transition(t, y, m), i.forEach(function(x) {
          return x.next(t);
        });
      }
      c = false;
    }
  }, "flush"), h = Oc({ id: e.id, send: function(y) {
    l.push(y), d();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, x, P) {
    var T = Ji(y, x, P);
    return i.add(T), T.next(t), { unsubscribe: function() {
      i.delete(T);
    } };
  } }), m = { parent: e.parent, self: h, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(m) : t, h;
}
__name(kc, "kc");
u(kc, "spawnBehavior");
var ah = { sync: false, autoForward: false };
var mt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(mt || (mt = {}));
var Rc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = mt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(x, P) {
      if (Lr(x))
        return i.batch(x), i.state;
      var T = tt(Zi(x, P));
      if (i.status === mt.Stopped)
        return Le || Ue(false, 'Event "'.concat(T.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(T.data))), i.state;
      if (i.status !== mt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(T.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(T.data)));
      return i.scheduler.schedule(function() {
        i.forward(T);
        var A = i.nextState(T);
        i.update(A, T);
      }), i._state;
    }, this.sendTo = function(x, P) {
      var T = i.parent && (P === rn.Parent || i.parent.id === P), A = T ? i.parent : ge(P) ? i.children.get(P) || no.get(P) : fc(P) ? P : void 0;
      if (!A) {
        if (!T)
          throw new Error("Unable to send event to child '".concat(P, "' from service '").concat(i.id, "'."));
        Le || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(x.type));
        return;
      }
      "machine" in A ? A.send(Y(Y({}, x), { name: x.name === Hs ? "".concat(An(i.id)) : x.name, origin: i.sessionId })) : A.send(x.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c = l.clock, d = l.logger, h = l.parent, m = l.id, y = m !== void 0 ? m : e.id;
    this.id = y, this.logger = d, this.clock = c, this.parent = h, this.options = l, this.scheduler = new Ks({ deferEvents: this.options.deferEvents }), this.sessionId = no.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || Ue(this.status !== mt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ve(e.actions), d = c.next(); !d.done; d = c.next()) {
        var h = d.value;
        this.exec(h, e, t);
      }
    } catch (m) {
      i = { error: m };
    } finally {
      try {
        d && !d.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, d, h, m, y, x, P = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      P.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var T = ve(this.eventListeners), A = T.next(); !A.done; A = T.next()) {
          var D = A.value;
          D(e.event);
        }
      } catch (H) {
        i = { error: H };
      } finally {
        try {
          A && !A.done && (l = T.return) && l.call(T);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var S = ve(this.listeners), M = S.next(); !M.done; M = S.next()) {
        var D = M.value;
        D(e, e.event);
      }
    } catch (H) {
      c = { error: H };
    } finally {
      try {
        M && !M.done && (d = S.return) && d.call(S);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var _ = ve(this.contextListeners), I = _.next(); !I.done; I = _.next()) {
        var L = I.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      h = { error: H };
    } finally {
      try {
        I && !I.done && (m = _.return) && m.call(_);
      } finally {
        if (h)
          throw h.error;
      }
    }
    var E = Dn(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === P.machine;
      }), R = B && B.doneData ? On(B.doneData, e.context, t) : void 0;
      try {
        for (var X = ve(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var D = V.value;
          D(ui(this.id, R));
        }
      } catch (H) {
        y = { error: H };
      } finally {
        try {
          V && !V.done && (x = X.return) && x.call(X);
        } finally {
          if (y)
            throw y.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(e) {
    return this.listeners.add(e), this.status === mt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, d = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), d = e.complete.bind(e)), this.listeners.add(c), this.status !== mt.NotStarted && c(this.state), d && (this.status === mt.Stopped ? d() : this.onDone(d)), { unsubscribe: function() {
      c && l.listeners.delete(c), d && l.doneListeners.delete(d);
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
    if (this.status === mt.Running)
      return this;
    this.machine._init(), no.register(this.sessionId, this), this.initialized = true, this.status = mt.Running;
    var i = e === void 0 ? this.initialState : _n(this, function() {
      return Ic(e) ? t.machine.resolveState(e) : t.machine.resolveState(yr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Mn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, d, h, m, y, x, P = this;
    try {
      for (var T = ve(this.listeners), A = T.next(); !A.done; A = T.next()) {
        var D = A.value;
        this.listeners.delete(D);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        A && !A.done && (t = T.return) && t.call(T);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var S = ve(this.stopListeners), M = S.next(); !M.done; M = S.next()) {
        var D = M.value;
        D(), this.stopListeners.delete(D);
      }
    } catch (V) {
      i = { error: V };
    } finally {
      try {
        M && !M.done && (l = S.return) && l.call(S);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var _ = ve(this.contextListeners), I = _.next(); !I.done; I = _.next()) {
        var D = I.value;
        this.contextListeners.delete(D);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        I && !I.done && (d = _.return) && d.call(_);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var L = ve(this.doneListeners), E = L.next(); !E.done; E = L.next()) {
        var D = E.value;
        this.doneListeners.delete(D);
      }
    } catch (V) {
      h = { error: V };
    } finally {
      try {
        E && !E.done && (m = L.return) && m.call(L);
      } finally {
        if (h)
          throw h.error;
      }
    }
    if (!this.initialized)
      return this;
    De([], me(this.state.configuration), false).sort(function(V, H) {
      return H.order - V.order;
    }).forEach(function(V) {
      var H, W;
      try {
        for (var ie = ve(V.definition.exit), oe = ie.next(); !oe.done; oe = ie.next()) {
          var U = oe.value;
          P.exec(U, P.state);
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
      Ce(V.stop) && V.stop();
    }), this.children.clear();
    try {
      for (var B = ve(Object.keys(this.delayedEventsMap)), R = B.next(); !R.done; R = B.next()) {
        var X = R.value;
        this.clock.clearTimeout(this.delayedEventsMap[X]);
      }
    } catch (V) {
      y = { error: V };
    } finally {
      try {
        R && !R.done && (x = B.return) && x.call(B);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new Ks({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = mt.Stopped, this._initialState = void 0, no.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === mt.NotStarted && this.options.deferEvents)
      Le || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== mt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, d = false, h = [], m = u(function(T) {
        var A = tt(T);
        t.forward(A), c = _n(t, function() {
          return t.machine.transition(c, A);
        }), h.push.apply(h, De([], me(c.actions.map(function(D) {
          return zc(D, c);
        })), false)), d = d || !!c.changed;
      }, "_loop_1");
      try {
        for (var y = ve(e), x = y.next(); !x.done; x = y.next()) {
          var P = x.value;
          m(P);
        }
      } catch (T) {
        i = { error: T };
      } finally {
        try {
          x && !x.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = d, c.actions = h, t.update(c, tt(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = tt(e);
    if (i.name.indexOf(Bs) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Bs) === 0;
    }))
      throw i.data.data;
    var l = _n(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = ve(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var d = c.value, h = this.children.get(d);
        if (!h)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d, "'."));
        h.send(e);
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
    var l = t.context, c = t._event, d = e.exec || Ma(e.type, i), h = Ce(d) ? d : d ? d.exec : e.exec;
    if (h)
      try {
        return h(l, c.data, { action: e, state: this.state, _event: c });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case Tn:
        var m = e;
        if (typeof m.delay == "number") {
          this.defer(m);
          return;
        } else
          m.to ? this.sendTo(m._event, m.to) : this.send(m._event);
        break;
      case ga:
        this.cancel(e.sendId);
        break;
      case Fi: {
        if (this.status !== mt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Se.Invoke) {
          var x = Pa(y.src), P = this.machine.options.services ? this.machine.options.services[x.type] : void 0, T = y.id, A = y.data;
          Le || Ue(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var D = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!P) {
            Le || Ue(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = A ? On(A, l, c) : void 0;
          if (typeof P == "string")
            return;
          var M = Ce(P) ? P(l, c.data, { data: S, src: x, meta: y.meta }) : P;
          if (!M)
            return;
          var _ = void 0;
          Or(M) && (M = S ? M.withContext(S) : M, _ = { autoForward: D }), this.spawn(M, T, _);
        } else
          this.spawnActivity(y);
        break;
      }
      case ii: {
        this.stopChild(e.activity.id);
        break;
      }
      case ba:
        var I = e.label, L = e.value;
        I ? this.logger(I, L) : this.logger(L);
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
    !t || (this.removeChild(e), Ce(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (Ws(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Ce(e))
      return this.spawnCallback(e, t);
    if (Tc(e))
      return this.spawnActor(e, t);
    if (dc(e))
      return this.spawnObservable(e, t);
    if (Or(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (uc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c = Y(Y({}, ah), t);
    c.sync && l.onTransition(function(h) {
      i.send(Ui, { state: h, id: l.id });
    });
    var d = l;
    return this.children.set(l.id, d), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(h) {
      i.removeChild(l.id), i.send(tt(h, { origin: l.id }));
    }).start(), d;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = kc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, d;
    e.then(function(m) {
      c || (d = m, l.removeChild(t), l.send(tt(ui(t, m), { origin: t })));
    }, function(m) {
      if (!c) {
        l.removeChild(t);
        var y = An(t, m);
        try {
          l.send(tt(y, { origin: t }));
        } catch (x) {
          vc(m, x, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var h = (i = { id: t, send: function() {
    }, subscribe: function(m, y, x) {
      var P = Ji(m, y, x), T = false;
      return e.then(function(A) {
        T || (P.next(A), !T && P.complete());
      }, function(A) {
        T || P.error(A);
      }), { unsubscribe: function() {
        return T = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return d;
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, h), h;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), m, y = u(function(T) {
      m = T, h.forEach(function(A) {
        return A(T);
      }), !c && l.send(tt(T, { origin: t }));
    }, "receive"), x;
    try {
      x = e(y, function(T) {
        d.add(T);
      });
    } catch (T) {
      this.send(An(t, T));
    }
    if (Ws(x))
      return this.spawnPromise(x, t);
    var P = (i = { id: t, send: function(T) {
      return d.forEach(function(A) {
        return A(T);
      });
    }, subscribe: function(T) {
      var A = Ji(T);
      return h.add(A.next), { unsubscribe: function() {
        h.delete(A.next);
      } };
    }, stop: function() {
      c = true, Ce(x) && x();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return m;
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, P), P;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, d = e.subscribe(function(m) {
      c = m, l.send(tt(m, { origin: t }));
    }, function(m) {
      l.removeChild(t), l.send(tt(An(t, m), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(tt(ui(t), { origin: t }));
    }), h = (i = { id: t, send: function() {
    }, subscribe: function(m, y, x) {
      return e.subscribe(m, y, x);
    }, stop: function() {
      return d.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, h), h;
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
    } }, i[Tr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = Ia();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Dc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Tr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === mt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = at, r;
}();
function at(r, e) {
  var t = new Rc(r, e);
  return t;
}
__name(at, "at");
u(at, "interpret");
function sh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(sh, "sh");
u(sh, "toInvokeSource");
function io(r) {
  return Y(Y({ type: Wi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ni(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: Wi, src: sh(r.src) });
  } });
}
__name(io, "io");
u(io, "toInvokeDefinition");
var di = "";
var el = "#";
var oo = "*";
var ci = {};
var pi = u(function(r) {
  return r[0] === el;
}, "isStateId");
var lh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var uh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Or(c.target));
  }), l = e === di ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Nc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(lh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ya), this.id = this.config.id || De([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d = this.config.schema) !== null && d !== void 0 ? d : {}, this.description = this.config.description, Le || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? si(this.config.states, function(y, x) {
      var P, T = new r(y, {}, void 0, { parent: c, key: x });
      return Object.assign(c.idMap, Y((P = {}, P[T.id] = T, P), T.idMap)), T;
    }) : ci;
    var h = 0;
    function m(y) {
      var x, P;
      y.order = h++;
      try {
        for (var T = ve(In(y)), A = T.next(); !A.done; A = T.next()) {
          var D = A.value;
          m(D);
        }
      } catch (S) {
        x = { error: S };
      } finally {
        try {
          A && !A.done && (P = T.return) && P.call(T);
        } finally {
          if (x)
            throw x.error;
        }
      }
    }
    __name(m, "m");
    u(m, "dfs"), m(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var x = y.event;
      return x === di;
    }) : di in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ht(this.config.entry || this.config.onEntry).map(function(y) {
      return li(y);
    }), this.onExit = Ht(this.config.exit || this.config.onExit).map(function(y) {
      return li(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ht(this.config.invoke).map(function(y, x) {
      var P, T;
      if (Or(y)) {
        var A = Ki(c.id, x);
        return c.machine.options.services = Y((P = {}, P[A] = y, P), c.machine.options.services), io({ src: A, id: A });
      } else if (ge(y.src)) {
        var A = y.id || Ki(c.id, x);
        return io(Y(Y({}, y), { id: A, src: y.src }));
      } else if (Or(y.src) || Ce(y.src)) {
        var A = y.id || Ki(c.id, x);
        return c.machine.options.services = Y((T = {}, T[A] = y.src, T), c.machine.options.services), io(Y(Y({ id: A }, y), { src: A }));
      } else {
        var D = y.src;
        return io(Y(Y({ id: Ki(c.id, x) }, y), { src: D }));
      }
    }), this.activities = Ht(this.config.activities).concat(this.invoke).map(function(y) {
      return _a(y);
    }), this.transition = this.transition.bind(this), this.tags = Ht(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Ys(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, d = i.guards, h = i.services, m = i.delays;
    return new r(this.config, { actions: Y(Y({}, l), e.actions), activities: Y(Y({}, c), e.activities), guards: Y(Y({}, d), e.guards), services: Y(Y({}, h), e.services), delays: Y(Y({}, m), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Ce(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: si(this.states, function(e) {
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
    var t = e === di, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === oo;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, d) {
      var h = Ce(c) ? "".concat(e.id, ":delay[").concat(d, "]") : c, m = xc(h, e.id);
      return e.onEntry.push(Vs(m, { delay: c })), e.onExit.push(gc(m)), m;
    }, "mutateEntryExit"), l = Lr(t) ? t.map(function(c, d) {
      var h = i(c.delay, d);
      return Y(Y({}, c), { event: h });
    }) : Ne(Object.keys(t).map(function(c, d) {
      var h = t[c], m = ge(h) ? { target: h } : h, y = isNaN(+c) ? c : +c, x = i(y, d);
      return Ht(m).map(function(P) {
        return Y(Y({}, P), { event: x, delay: y });
      });
    }));
    return l.map(function(c) {
      var d = c.delay;
      return Y(Y({}, e.formatTransition(c)), { delay: d });
    });
  }, r.prototype.getStateNodes = function(e) {
    var t, i = this;
    if (!e)
      return [];
    var l = e instanceof yr ? e.value : ai(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var d = Object.keys(l), h = [this];
    return h.push.apply(h, De([], me(Ne(d.map(function(m) {
      return i.getStateNode(m).getStateNodes(l[m]);
    }))), false)), h;
  }, r.prototype.handles = function(e) {
    var t = Ea(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof yr ? e : yr.create(e), i = Array.from(zn([], this.getStateNodes(t.value)));
    return new yr(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: Dn(i, this), tags: Zs(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), d = c._transition(e[l[0]], t, i);
    return !d || !d.transitions.length ? this.next(t, i) : d;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, d = {};
    try {
      for (var h = ve(Object.keys(e)), m = h.next(); !m.done; m = h.next()) {
        var y = m.value, x = e[y];
        if (!!x) {
          var P = this.getStateNode(y), T = P._transition(x, t, i);
          T && (d[y] = T);
        }
      }
    } catch (I) {
      l = { error: I };
    } finally {
      try {
        m && !m.done && (c = h.return) && c.call(h);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var A = Object.keys(d).map(function(I) {
      return d[I];
    }), D = Ne(A.map(function(I) {
      return I.transitions;
    })), S = A.some(function(I) {
      return I.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var M = Ne(A.map(function(I) {
      return I.entrySet;
    })), _ = Ne(Object.keys(d).map(function(I) {
      return d[I].configuration;
    }));
    return { transitions: D, entrySet: M, exitSet: Ne(A.map(function(I) {
      return I.exitSet;
    })), configuration: _, source: t, actions: Ne(Object.keys(d).map(function(I) {
      return d[I].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, tt(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, d = t.name, h = [], m = [], y;
    try {
      for (var x = ve(this.getCandidates(d)), P = x.next(); !P.done; P = x.next()) {
        var T = P.value, A = T.cond, D = T.in, S = e.context, M = D ? ge(D) && pi(D) ? e.matches(ai(this.getStateNodeById(D).path, this.delimiter)) : Xi(ai(D, this.delimiter), oc(this.path.slice(0, -2))(e.value)) : true, _ = false;
        try {
          _ = !A || Oa(this.machine, A, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(A.name || A.type, "' in transition for event '").concat(d, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (_ && M) {
          T.target !== void 0 && (m = T.target), h.push.apply(h, De([], me(T.actions), false)), y = T;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        P && !P.done && (l = x.return) && l.call(x);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!m.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: h };
      var I = Ne(m.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), L = !!y.internal, E = L ? [] : Ne(I.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: L ? [] : [this], configuration: I, source: e, actions: h };
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
    var c, d, h, m, y = zn([], l ? this.getStateNodes(l.value) : [this]), x = e.configuration.length ? zn(y, e.configuration) : y;
    try {
      for (var P = ve(x), T = P.next(); !T.done; T = P.next()) {
        var A = T.value;
        ro(y, A) || e.entrySet.push(A);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        T && !T.done && (d = P.return) && d.call(P);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var D = ve(y), S = D.next(); !S.done; S = D.next()) {
        var A = S.value;
        (!ro(x, A) || ro(e.exitSet, A.parent)) && e.exitSet.push(A);
      }
    } catch (X) {
      h = { error: X };
    } finally {
      try {
        S && !S.done && (m = D.return) && m.call(D);
      } finally {
        if (h)
          throw h.error;
      }
    }
    var M = Ne(e.entrySet.map(function(X) {
      var V = [];
      if (X.type !== "final")
        return V;
      var H = X.parent;
      if (!H.parent)
        return V;
      V.push(eo(X.id, X.doneData), eo(H.id, X.doneData ? On(X.doneData, t, i) : void 0));
      var W = H.parent;
      return W.type === "parallel" && In(W).every(function(ie) {
        return Dn(e.configuration, ie);
      }) && V.push(eo(W.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var _ = new Set(e.entrySet), I = new Set(e.exitSet), L = me([Ne(Array.from(_).map(function(X) {
      return De(De([], me(X.activities.map(function(V) {
        return bc(V);
      })), false), me(X.onEntry), false);
    })).concat(M.map(mc)), Ne(Array.from(I).map(function(X) {
      return De(De([], me(X.onExit), false), me(X.activities.map(function(V) {
        return yc(V);
      })), false);
    }))], 2), E = L[0], B = L[1], R = Qi(B.concat(e.actions).concat(E), this.machine.options.actions);
    return R;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = tt(t), c;
    if (e instanceof yr)
      c = i === void 0 ? e : this.resolveState(yr.from(e, i));
    else {
      var d = ge(e) ? this.resolve(Vi(this.getResolvedPath(e))) : this.resolve(e), h = i != null ? i : this.machine.context;
      c = this.resolveState(yr.from(d, h));
    }
    if (!Le && l.name === oo)
      throw new Error("An event cannot have the wildcard type ('".concat(oo, "')"));
    if (this.strict && !this.events.includes(l.name) && !lc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var m = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, y = zn([], this.getStateNodes(c.value)), x = m.configuration.length ? zn(y, m.configuration) : y;
    return m.configuration = De([], me(x), false), this.resolveTransition(m, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], me(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, d, h = this;
    l === void 0 && (l = Mn);
    var m = e.configuration, y = !t || e.transitions.length > 0, x = y ? Mc(this.machine, m) : void 0, P = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, T = this.getActions(e, i, l, t), A = t ? Y({}, t.activities) : {};
    try {
      for (var D = ve(T), S = D.next(); !S.done; S = D.next()) {
        var M = S.value;
        M.type === Fi ? A[M.activity.id || M.activity.type] = M : M.type === ii && (A[M.activity.id || M.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        S && !S.done && (d = D.return) && d.call(D);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var _ = me(Aa(this, t, i, l, T, this.machine.config.preserveActionOrder), 2), I = _[0], L = _[1], E = me(Ca(I, function(fe) {
      return fe.type === oi || fe.type === Tn && fe.to === rn.Internal;
    }), 2), B = E[0], R = E[1], X = I.filter(function(fe) {
      var Ye;
      return fe.type === Fi && ((Ye = fe.activity) === null || Ye === void 0 ? void 0 : Ye.type) === Wi;
    }), V = X.reduce(function(fe, Ye) {
      return fe[Ye.activity.id] = Sc(Ye.activity, h.machine, L, l), fe;
    }, t ? Y({}, t.children) : {}), H = y ? e.configuration : t ? t.configuration : [], W = Dn(H, this), ie = new yr({ value: x || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: x ? P ? pc(P, x) : void 0 : t ? t.historyValue : void 0, history: !x || e.source ? t : void 0, actions: x ? R : [], activities: x ? A : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: W, tags: Zs(H), machine: this }), oe = i !== L;
    ie.changed = l.name === Ui || oe;
    var U = ie.history;
    U && delete U.history;
    var ce = !W && (this._transient || m.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ce || l.name === di))
      return ie;
    var Re = ie;
    if (!W)
      for (ce && (Re = this.resolveRaisedTransition(Re, { type: ec }, l)); B.length; ) {
        var We = B.shift();
        Re = this.resolveRaisedTransition(Re, We._event, l);
      }
    var qe = Re.changed || (U ? !!Re.actions.length || oe || typeof U.value != typeof Re.value || !Js(Re.value, U.value) : void 0);
    return Re.changed = qe, Re.history = U, Re;
  }, r.prototype.getStateNode = function(e) {
    if (pi(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = pi(e) ? e.slice(el.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && pi(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = Sa(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || ci;
    switch (this.type) {
      case "parallel":
        return si(this.initialStateValue, function(c, d) {
          return c ? i.getStateNode(d).resolve(e[d] || c) : ci;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? si(e, function(c, d) {
          return c ? i.getStateNode(d).resolve(c) : ci;
        }) : this.initialStateValue || {};
      default:
        return e || ci;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (pi(e)) {
      var t = this.machine.idMap[e.slice(el.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Sa(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = Fs(this.states, function(i) {
        return i.initialStateValue || ci;
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
      ge(t.target) ? e = pi(t.target) ? Vi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (to(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Yi(this.initialStateValue);
    return Ne(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = me(e), i = t[0], l = t.slice(1);
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
      return { current: e || this.initialStateValue, states: Fs(this.states, function(t, i) {
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
      return l ? Ne(Yi(l).map(function(d) {
        return i.getFromRelativePath(d);
      })) : i.initialStateNodes;
    }
    var c = ac(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Yi(c).map(function(d) {
      return t.history === "deep" ? i.getFromRelativePath(d) : [i.states[d[0]]];
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
    var c = this.states, d = new Set(this.ownEvents);
    if (c)
      try {
        for (var h = ve(Object.keys(c)), m = h.next(); !m.done; m = h.next()) {
          var y = m.value, x = c[y];
          if (x.states)
            try {
              for (var P = (i = void 0, ve(x.events)), T = P.next(); !T.done; T = P.next()) {
                var A = T.value;
                d.add("".concat(A));
              }
            } catch (D) {
              i = { error: D };
            } finally {
              try {
                T && !T.done && (l = P.return) && l.call(P);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (D) {
        e = { error: D };
      } finally {
        try {
          m && !m.done && (t = h.return) && t.call(h);
        } finally {
          if (e)
            throw e.error;
        }
      }
    return this.__cache.events = Array.from(d);
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
            var d = t.parent.getStateNodeByPath(c);
            return d;
          } catch (h) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(h.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = hc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(m) {
      return ge(m) && m[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, d = this.resolveTarget(i), h = Y(Y({}, e), { actions: Qi(Ht(e.actions)), cond: Ta(e.cond, c), target: d, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Y(Y({}, h), { target: h.target ? h.target.map(function(m) {
        return "#".concat(m.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return h;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, d = oo, h = c[d], m = h === void 0 ? [] : h, y = ni(c, [typeof d == "symbol" ? d : d + ""]);
      l = Ne(Object.keys(y).map(function(I) {
        !Le && I === di && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = Pn(I, y[I]);
        return Le || uh(i, I, L), L;
      }).concat(Pn(oo, m)));
    }
    var x = this.config.always ? Pn("", this.config.always) : [], P = this.config.onDone ? Pn(String(eo(this.id)), this.config.onDone) : [];
    Le || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var T = Ne(this.invoke.map(function(I) {
      var L = [];
      return I.onDone && L.push.apply(L, De([], me(Pn(String(ui(I.id)), I.onDone)), false)), I.onError && L.push.apply(L, De([], me(Pn(String(An(I.id)), I.onError)), false)), L;
    })), A = this.after, D = Ne(De(De(De(De([], me(P), false), me(T), false), me(l), false), me(x), false).map(function(I) {
      return Ht(I).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var S = ve(A), M = S.next(); !M.done; M = S.next()) {
        var _ = M.value;
        D.push(_);
      }
    } catch (I) {
      e = { error: I };
    } finally {
      try {
        M && !M.done && (t = S.return) && t.call(S);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return D;
  }, r;
}();
function gt(r, e) {
  return new Nc(r, e);
}
__name(gt, "gt");
u(gt, "createMachine");
var ao = Bi(za(), 1);
var Da = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var rl = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
      this.draggableMachine = gt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, ao.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Da(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), rl(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
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
      } }, guards: { isOnCircuitDropzone: () => Da(this.dropzone), isOnPaletteDropzone: () => rl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Da(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = at(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${et(i.value)}`);
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
      return re.notNull(i), !rl(i) && !Da(i) ? null : i;
    }
    set snapTargets(i) {
      (0, ao.default)(this).draggable({ modifiers: [ao.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
      let c = this.operationX + i, d = this.operationY + l;
      this.moveTo(c, d);
    }
    moveTo(i, l) {
      this.operationX = i, this.operationY = l, this.style.transform = `translate(${i}px, ${l}px)`;
    }
    moveByOffset(i, l) {
      let c = i - this.clientWidth / 2, d = l - this.clientHeight / 2;
      this.move(c, d);
    }
  }
  __name(e, "e");
  return u(e, "DraggableMixinClass"), z([q], e.prototype, "operationX", 2), z([q], e.prototype, "operationY", 2), z([q], e.prototype, "grabbed", 2), z([q], e.prototype, "dragging", 2), z([q], e.prototype, "snapped", 2), z([q], e.prototype, "bit", 2), z([q], e.prototype, "debugDraggable", 2), e;
}
__name(Me, "Me");
u(Me, "DraggableMixin");
var kn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function qc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), z([q], e.prototype, "flag", 2), e;
}
__name(qc, "qc");
u(qc, "FlaggableMixin");
var Fe = "top";
var rt = "bottom";
var Ze = "right";
var Ve = "left";
var ka = "auto";
var nn = [Fe, rt, Ze, Ve];
var jr = "start";
var Rn = "end";
var Lc = "clippingParents";
var Ra = "viewport";
var fi = "popper";
var jc = "reference";
var nl = nn.reduce(function(r, e) {
  return r.concat([e + "-" + jr, e + "-" + Rn]);
}, []);
var Na = [].concat(nn, [ka]).reduce(function(r, e) {
  return r.concat([e, e + "-" + jr, e + "-" + Rn]);
}, []);
var ch = "beforeRead";
var ph = "read";
var dh = "afterRead";
var fh = "beforeMain";
var hh = "main";
var vh = "afterMain";
var mh = "beforeWrite";
var gh = "write";
var bh = "afterWrite";
var Bc = [ch, ph, dh, fh, hh, vh, mh, gh, bh];
function st(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(st, "st");
u(st, "getNodeName");
function Xe(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Xe, "Xe");
u(Xe, "getWindow");
function Pr(r) {
  var e = Xe(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Pr, "Pr");
u(Pr, "isElement");
function nt(r) {
  var e = Xe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(nt, "nt");
u(nt, "isHTMLElement");
function Ga(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Xe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Ga, "Ga");
u(Ga, "isShadowRoot");
function yh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !nt(c) || !st(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(d) {
      var h = l[d];
      h === false ? c.removeAttribute(d) : c.setAttribute(d, h === true ? "" : h);
    }));
  });
}
__name(yh, "yh");
u(yh, "applyStyles");
function xh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), h = d.reduce(function(m, y) {
        return m[y] = "", m;
      }, {});
      !nt(l) || !st(l) || (Object.assign(l.style, h), Object.keys(c).forEach(function(m) {
        l.removeAttribute(m);
      }));
    });
  };
}
__name(xh, "xh");
u(xh, "effect");
var so = { name: "applyStyles", enabled: true, phase: "write", fn: yh, effect: xh, requires: ["computeStyles"] };
function lt(r) {
  return r.split("-")[0];
}
__name(lt, "lt");
u(lt, "getBasePlacement");
var xr = Math.max;
var Nn = Math.min;
var Br = Math.round;
function Zt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (nt(r) && e) {
    var c = r.offsetHeight, d = r.offsetWidth;
    d > 0 && (i = Br(t.width) / d || 1), c > 0 && (l = Br(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Zt, "Zt");
u(Zt, "getBoundingClientRect");
function Gn(r) {
  var e = Zt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Gn, "Gn");
u(Gn, "getLayoutRect");
function lo(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Ga(t)) {
    var i = e;
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
function Ot(r) {
  return Xe(r).getComputedStyle(r);
}
__name(Ot, "Ot");
u(Ot, "getComputedStyle");
function il(r) {
  return ["table", "td", "th"].indexOf(st(r)) >= 0;
}
__name(il, "il");
u(il, "isTableElement");
function bt(r) {
  return ((Pr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(bt, "bt");
u(bt, "getDocumentElement");
function Hr(r) {
  return st(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ga(r) ? r.host : null) || bt(r);
}
__name(Hr, "Hr");
u(Hr, "getParentNode");
function Hc(r) {
  return !nt(r) || Ot(r).position === "fixed" ? null : r.offsetParent;
}
__name(Hc, "Hc");
u(Hc, "getTrueOffsetParent");
function wh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && nt(r)) {
    var i = Ot(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Hr(r); nt(l) && ["html", "body"].indexOf(st(l)) < 0; ) {
    var c = Ot(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(wh, "wh");
u(wh, "getContainingBlock");
function wr(r) {
  for (var e = Xe(r), t = Hc(r); t && il(t) && Ot(t).position === "static"; )
    t = Hc(t);
  return t && (st(t) === "html" || st(t) === "body" && Ot(t).position === "static") ? e : t || wh(r) || e;
}
__name(wr, "wr");
u(wr, "getOffsetParent");
function qn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(qn, "qn");
u(qn, "getMainAxisFromPlacement");
function Ln(r, e, t) {
  return xr(r, Nn(e, t));
}
__name(Ln, "Ln");
u(Ln, "within");
function $c(r, e, t) {
  var i = Ln(r, e, t);
  return i > t ? t : i;
}
__name($c, "$c");
u($c, "withinMaxClamp");
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
function po(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(po, "po");
u(po, "expandToHashMap");
var Eh = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, co(typeof e != "number" ? e : po(e, nn));
}, "toPaddingObject");
function Sh(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, h = lt(t.placement), m = qn(h), y = [Ve, Ze].indexOf(h) >= 0, x = y ? "height" : "width";
  if (!(!c || !d)) {
    var P = Eh(l.padding, t), T = Gn(c), A = m === "y" ? Fe : Ve, D = m === "y" ? rt : Ze, S = t.rects.reference[x] + t.rects.reference[m] - d[m] - t.rects.popper[x], M = d[m] - t.rects.reference[m], _ = wr(c), I = _ ? m === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, L = S / 2 - M / 2, E = P[A], B = I - T[x] - P[D], R = I / 2 - T[x] / 2 + L, X = Ln(E, R, B), V = m;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - R, e);
  }
}
__name(Sh, "Sh");
u(Sh, "arrow");
function Ch(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !lo(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(Ch, "Ch");
u(Ch, "effect");
var Fc = { name: "arrow", enabled: true, phase: "main", fn: Sh, effect: Ch, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jt(r) {
  return r.split("-")[1];
}
__name(Jt, "Jt");
u(Jt, "getVariation");
var Th = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Oh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Br(e * l) / l || 0, y: Br(t * l) / l || 0 };
}
__name(Oh, "Oh");
u(Oh, "roundOffsetsByDPR");
function Wc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, d = r.offsets, h = r.position, m = r.gpuAcceleration, y = r.adaptive, x = r.roundOffsets, P = r.isFixed, T = d.x, A = T === void 0 ? 0 : T, D = d.y, S = D === void 0 ? 0 : D, M = typeof x == "function" ? x({ x: A, y: S }) : { x: A, y: S };
  A = M.x, S = M.y;
  var _ = d.hasOwnProperty("x"), I = d.hasOwnProperty("y"), L = Ve, E = Fe, B = window;
  if (y) {
    var R = wr(t), X = "clientHeight", V = "clientWidth";
    if (R === Xe(t) && (R = bt(t), Ot(R).position !== "static" && h === "absolute" && (X = "scrollHeight", V = "scrollWidth")), R = R, l === Fe || (l === Ve || l === Ze) && c === Rn) {
      E = rt;
      var H = P && B.visualViewport ? B.visualViewport.height : R[X];
      S -= H - i.height, S *= m ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === rt) && c === Rn) {
      L = Ze;
      var W = P && B.visualViewport ? B.visualViewport.width : R[V];
      A -= W - i.width, A *= m ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: h }, y && Th), oe = x === true ? Oh({ x: A, y: S }) : { x: A, y: S };
  if (A = oe.x, S = oe.y, m) {
    var U;
    return Object.assign({}, ie, (U = {}, U[E] = I ? "0" : "", U[L] = _ ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + A + "px, " + S + "px)" : "translate3d(" + A + "px, " + S + "px, 0)", U));
  }
  return Object.assign({}, ie, (e = {}, e[E] = I ? S + "px" : "", e[L] = _ ? A + "px" : "", e.transform = "", e));
}
__name(Wc, "Wc");
u(Wc, "mapToStyles");
function Ph(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, d = c === void 0 ? true : c, h = t.roundOffsets, m = h === void 0 ? true : h;
  if (false)
    var y;
  var x = { placement: lt(e.placement), variation: Jt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Wc(Object.assign({}, x, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d, roundOffsets: m })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Wc(Object.assign({}, x, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(Ph, "Ph");
u(Ph, "computeStyles");
var Uc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Ph, data: {} };
var qa = { passive: true };
function Mh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, d = i.resize, h = d === void 0 ? true : d, m = Xe(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && y.forEach(function(x) {
    x.addEventListener("scroll", t.update, qa);
  }), h && m.addEventListener("resize", t.update, qa), function() {
    c && y.forEach(function(x) {
      x.removeEventListener("scroll", t.update, qa);
    }), h && m.removeEventListener("resize", t.update, qa);
  };
}
__name(Mh, "Mh");
u(Mh, "effect");
var Vc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Mh, data: {} };
var Ah = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Ah[e];
  });
}
__name(hi, "hi");
u(hi, "getOppositePlacement");
var _h = { start: "end", end: "start" };
function La(r) {
  return r.replace(/start|end/g, function(e) {
    return _h[e];
  });
}
__name(La, "La");
u(La, "getOppositeVariationPlacement");
function jn(r) {
  var e = Xe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(jn, "jn");
u(jn, "getWindowScroll");
function Bn(r) {
  return Zt(bt(r)).left + jn(r).scrollLeft;
}
__name(Bn, "Bn");
u(Bn, "getWindowScrollBarX");
function ol(r) {
  var e = Xe(r), t = bt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, d = 0, h = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = i.offsetLeft, h = i.offsetTop)), { width: l, height: c, x: d + Bn(r), y: h };
}
__name(ol, "ol");
u(ol, "getViewportRect");
function al(r) {
  var e, t = bt(r), i = jn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = xr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = xr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), h = -i.scrollLeft + Bn(r), m = -i.scrollTop;
  return Ot(l || t).direction === "rtl" && (h += xr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: h, y: m };
}
__name(al, "al");
u(al, "getDocumentRect");
function Hn(r) {
  var e = Ot(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(Hn, "Hn");
u(Hn, "isScrollParent");
function ja(r) {
  return ["html", "body", "#document"].indexOf(st(r)) >= 0 ? r.ownerDocument.body : nt(r) && Hn(r) ? r : ja(Hr(r));
}
__name(ja, "ja");
u(ja, "getScrollParent");
function on(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = ja(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Xe(i), d = l ? [c].concat(c.visualViewport || [], Hn(i) ? i : []) : i, h = e.concat(d);
  return l ? h : h.concat(on(Hr(d)));
}
__name(on, "on");
u(on, "listScrollParents");
function vi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(vi, "vi");
u(vi, "rectToClientRect");
function Ih(r) {
  var e = Zt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(Ih, "Ih");
u(Ih, "getInnerBoundingClientRect");
function Xc(r, e) {
  return e === Ra ? vi(ol(r)) : Pr(e) ? Ih(e) : vi(al(bt(r)));
}
__name(Xc, "Xc");
u(Xc, "getClientRectFromMixedType");
function zh(r) {
  var e = on(Hr(r)), t = ["absolute", "fixed"].indexOf(Ot(r).position) >= 0, i = t && nt(r) ? wr(r) : r;
  return Pr(i) ? e.filter(function(l) {
    return Pr(l) && lo(l, i) && st(l) !== "body";
  }) : [];
}
__name(zh, "zh");
u(zh, "getClippingParents");
function sl(r, e, t) {
  var i = e === "clippingParents" ? zh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], d = l.reduce(function(h, m) {
    var y = Xc(r, m);
    return h.top = xr(y.top, h.top), h.right = Nn(y.right, h.right), h.bottom = Nn(y.bottom, h.bottom), h.left = xr(y.left, h.left), h;
  }, Xc(r, c));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
__name(sl, "sl");
u(sl, "getClippingRect");
function fo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? lt(i) : null, c = i ? Jt(i) : null, d = e.x + e.width / 2 - t.width / 2, h = e.y + e.height / 2 - t.height / 2, m;
  switch (l) {
    case Fe:
      m = { x: d, y: e.y - t.height };
      break;
    case rt:
      m = { x: d, y: e.y + e.height };
      break;
    case Ze:
      m = { x: e.x + e.width, y: h };
      break;
    case Ve:
      m = { x: e.x - t.width, y: h };
      break;
    default:
      m = { x: e.x, y: e.y };
  }
  var y = l ? qn(l) : null;
  if (y != null) {
    var x = y === "y" ? "height" : "width";
    switch (c) {
      case jr:
        m[y] = m[y] - (e[x] / 2 - t[x] / 2);
        break;
      case Rn:
        m[y] = m[y] + (e[x] / 2 - t[x] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(fo, "fo");
u(fo, "computeOffsets");
function Er(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, d = c === void 0 ? Lc : c, h = t.rootBoundary, m = h === void 0 ? Ra : h, y = t.elementContext, x = y === void 0 ? fi : y, P = t.altBoundary, T = P === void 0 ? false : P, A = t.padding, D = A === void 0 ? 0 : A, S = co(typeof D != "number" ? D : po(D, nn)), M = x === fi ? jc : fi, _ = r.rects.popper, I = r.elements[T ? M : x], L = sl(Pr(I) ? I : I.contextElement || bt(r.elements.popper), d, m), E = Zt(r.elements.reference), B = fo({ reference: E, element: _, strategy: "absolute", placement: l }), R = vi(Object.assign({}, _, B)), X = x === fi ? R : E, V = { top: L.top - X.top + S.top, bottom: X.bottom - L.bottom + S.bottom, left: L.left - X.left + S.left, right: X.right - L.right + S.right }, H = r.modifiersData.offset;
  if (x === fi && H) {
    var W = H[l];
    Object.keys(V).forEach(function(ie) {
      var oe = [Ze, rt].indexOf(ie) >= 0 ? 1 : -1, U = [Fe, rt].indexOf(ie) >= 0 ? "y" : "x";
      V[ie] += W[U] * oe;
    });
  }
  return V;
}
__name(Er, "Er");
u(Er, "detectOverflow");
function ll(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, d = t.padding, h = t.flipVariations, m = t.allowedAutoPlacements, y = m === void 0 ? Na : m, x = Jt(i), P = x ? h ? nl : nl.filter(function(D) {
    return Jt(D) === x;
  }) : nn, T = P.filter(function(D) {
    return y.indexOf(D) >= 0;
  });
  T.length === 0 && (T = P);
  var A = T.reduce(function(D, S) {
    return D[S] = Er(r, { placement: S, boundary: l, rootBoundary: c, padding: d })[lt(S)], D;
  }, {});
  return Object.keys(A).sort(function(D, S) {
    return A[D] - A[S];
  });
}
__name(ll, "ll");
u(ll, "computeAutoPlacement");
function Dh(r) {
  if (lt(r) === ka)
    return [];
  var e = hi(r);
  return [La(r), e, La(e)];
}
__name(Dh, "Dh");
u(Dh, "getExpandedFallbackPlacements");
function kh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, h = d === void 0 ? true : d, m = t.fallbackPlacements, y = t.padding, x = t.boundary, P = t.rootBoundary, T = t.altBoundary, A = t.flipVariations, D = A === void 0 ? true : A, S = t.allowedAutoPlacements, M = e.options.placement, _ = lt(M), I = _ === M, L = m || (I || !D ? [hi(M)] : Dh(M)), E = [M].concat(L).reduce(function(K, St) {
      return K.concat(lt(St) === ka ? ll(e, { placement: St, boundary: x, rootBoundary: P, padding: y, flipVariations: D, allowedAutoPlacements: S }) : St);
    }, []), B = e.rects.reference, R = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, H = E[0], W = 0; W < E.length; W++) {
      var ie = E[W], oe = lt(ie), U = Jt(ie) === jr, ce = [Fe, rt].indexOf(oe) >= 0, Re = ce ? "width" : "height", We = Er(e, { placement: ie, boundary: x, rootBoundary: P, altBoundary: T, padding: y }), qe = ce ? U ? Ze : Ve : U ? rt : Fe;
      B[Re] > R[Re] && (qe = hi(qe));
      var fe = hi(qe), Ye = [];
      if (c && Ye.push(We[oe] <= 0), h && Ye.push(We[qe] <= 0, We[fe] <= 0), Ye.every(function(K) {
        return K;
      })) {
        H = ie, V = false;
        break;
      }
      X.set(ie, Ye);
    }
    if (V)
      for (var Qe = D ? 3 : 1, kt = u(function(St) {
        var Ct = E.find(function(zr) {
          var Wt = X.get(zr);
          if (Wt)
            return Wt.slice(0, St).every(function(hr) {
              return hr;
            });
        });
        if (Ct)
          return H = Ct, "break";
      }, "_loop"), Mt = Qe; Mt > 0; Mt--) {
        var Ir = kt(Mt);
        if (Ir === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
__name(kh, "kh");
u(kh, "flip");
var Yc = { name: "flip", enabled: true, phase: "main", fn: kh, requiresIfExists: ["offset"], data: { _skip: false } };
function Zc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(Zc, "Zc");
u(Zc, "getSideOffsets");
function Jc(r) {
  return [Fe, Ze, rt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
__name(Jc, "Jc");
u(Jc, "isAnySideFullyClipped");
function Rh(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, d = Er(e, { elementContext: "reference" }), h = Er(e, { altBoundary: true }), m = Zc(d, i), y = Zc(h, l, c), x = Jc(m), P = Jc(y);
  e.modifiersData[t] = { referenceClippingOffsets: m, popperEscapeOffsets: y, isReferenceHidden: x, hasPopperEscaped: P }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": x, "data-popper-escaped": P });
}
__name(Rh, "Rh");
u(Rh, "hide");
var Kc = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Rh };
function Nh(r, e, t) {
  var i = lt(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d = c[0], h = c[1];
  return d = d || 0, h = (h || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: h, y: d } : { x: d, y: h };
}
__name(Nh, "Nh");
u(Nh, "distanceAndSkiddingToXY");
function Gh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, d = Na.reduce(function(x, P) {
    return x[P] = Nh(P, e.rects, c), x;
  }, {}), h = d[e.placement], m = h.x, y = h.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += m, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d;
}
__name(Gh, "Gh");
u(Gh, "offset");
var Qc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Gh };
function qh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = fo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(qh, "qh");
u(qh, "popperOffsets");
var ep = { name: "popperOffsets", enabled: true, phase: "read", fn: qh, data: {} };
function ul(r) {
  return r === "x" ? "y" : "x";
}
__name(ul, "ul");
u(ul, "getAltAxis");
function Lh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, h = d === void 0 ? false : d, m = t.boundary, y = t.rootBoundary, x = t.altBoundary, P = t.padding, T = t.tether, A = T === void 0 ? true : T, D = t.tetherOffset, S = D === void 0 ? 0 : D, M = Er(e, { boundary: m, rootBoundary: y, padding: P, altBoundary: x }), _ = lt(e.placement), I = Jt(e.placement), L = !I, E = qn(_), B = ul(E), R = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, H = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, W = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ie = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!R) {
    if (c) {
      var U, ce = E === "y" ? Fe : Ve, Re = E === "y" ? rt : Ze, We = E === "y" ? "height" : "width", qe = R[E], fe = qe + M[ce], Ye = qe - M[Re], Qe = A ? -V[We] / 2 : 0, kt = I === jr ? X[We] : V[We], Mt = I === jr ? -V[We] : -X[We], Ir = e.elements.arrow, K = A && Ir ? Gn(Ir) : { width: 0, height: 0 }, St = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : uo(), Ct = St[ce], zr = St[Re], Wt = Ln(0, X[We], K[We]), hr = L ? X[We] / 2 - Qe - Wt - Ct - W.mainAxis : kt - Wt - Ct - W.mainAxis, vr = L ? -X[We] / 2 + Qe + Wt + zr + W.mainAxis : Mt + Wt + zr + W.mainAxis, Rt = e.elements.arrow && wr(e.elements.arrow), Un = Rt ? E === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0 : 0, At = (U = ie == null ? void 0 : ie[E]) != null ? U : 0, dn = qe + hr - At - Un, xe = qe + vr - At, Ur = Ln(A ? Nn(fe, dn) : fe, qe, A ? xr(Ye, xe) : Ye);
      R[E] = Ur, oe[E] = Ur - qe;
    }
    if (h) {
      var Vr, _t = E === "x" ? Fe : Ve, fn = E === "x" ? rt : Ze, mr = R[B], gr = B === "y" ? "height" : "width", hn = mr + M[_t], ct = mr - M[fn], Dr = [Fe, Ve].indexOf(_) !== -1, Nt = (Vr = ie == null ? void 0 : ie[B]) != null ? Vr : 0, Vn = Dr ? hn : mr - X[gr] - V[gr] - Nt + W.altAxis, kr = Dr ? mr + X[gr] + V[gr] - Nt - W.altAxis : ct, vn = A && Dr ? $c(Vn, mr, kr) : Ln(A ? Vn : hn, mr, A ? kr : ct);
      R[B] = vn, oe[B] = vn - mr;
    }
    e.modifiersData[i] = oe;
  }
}
__name(Lh, "Lh");
u(Lh, "preventOverflow");
var tp = { name: "preventOverflow", enabled: true, phase: "main", fn: Lh, requiresIfExists: ["offset"] };
function cl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(cl, "cl");
u(cl, "getHTMLElementScroll");
function pl(r) {
  return r === Xe(r) || !nt(r) ? jn(r) : cl(r);
}
__name(pl, "pl");
u(pl, "getNodeScroll");
function jh(r) {
  var e = r.getBoundingClientRect(), t = Br(e.width) / r.offsetWidth || 1, i = Br(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(jh, "jh");
u(jh, "isElementScaled");
function dl(r, e, t) {
  t === void 0 && (t = false);
  var i = nt(e), l = nt(e) && jh(e), c = bt(e), d = Zt(r, l), h = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (i || !i && !t) && ((st(e) !== "body" || Hn(c)) && (h = pl(e)), nt(e) ? (m = Zt(e, true), m.x += e.clientLeft, m.y += e.clientTop) : c && (m.x = Bn(c))), { x: d.left + h.scrollLeft - m.x, y: d.top + h.scrollTop - m.y, width: d.width, height: d.height };
}
__name(dl, "dl");
u(dl, "getCompositeRect");
function Bh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(h) {
      if (!t.has(h)) {
        var m = e.get(h);
        m && l(m);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(Bh, "Bh");
u(Bh, "order");
function fl(r) {
  var e = Bh(r);
  return Bc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(fl, "fl");
u(fl, "orderModifiers");
function hl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(hl, "hl");
u(hl, "debounce");
function vl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(vl, "vl");
u(vl, "mergeByName");
var rp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function np() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(np, "np");
u(np, "areValidElements");
function ip(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? rp : l;
  return u(function(h, m, y) {
    y === void 0 && (y = c);
    var x = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, rp, c), modifiersData: {}, elements: { reference: h, popper: m }, attributes: {}, styles: {} }, P = [], T = false, A = { state: x, setOptions: u(function(_) {
      var I = typeof _ == "function" ? _(x.options) : _;
      S(), x.options = Object.assign({}, c, x.options, I), x.scrollParents = { reference: Pr(h) ? on(h) : h.contextElement ? on(h.contextElement) : [], popper: on(m) };
      var L = fl(vl([].concat(i, x.options.modifiers)));
      if (x.orderedModifiers = L.filter(function(ie) {
        return ie.enabled;
      }), false) {
        var E;
        if (getBasePlacement(x.options.placement) === auto)
          var B;
        var R, X, V, H, W;
      }
      return D(), A.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!T) {
        var _ = x.elements, I = _.reference, L = _.popper;
        if (!!np(I, L)) {
          x.rects = { reference: dl(I, wr(L), x.options.strategy === "fixed"), popper: Gn(L) }, x.reset = false, x.placement = x.options.placement, x.orderedModifiers.forEach(function(ie) {
            return x.modifiersData[ie.name] = Object.assign({}, ie.data);
          });
          for (var E = 0, B = 0; B < x.orderedModifiers.length; B++) {
            if (x.reset === true) {
              x.reset = false, B = -1;
              continue;
            }
            var R = x.orderedModifiers[B], X = R.fn, V = R.options, H = V === void 0 ? {} : V, W = R.name;
            typeof X == "function" && (x = X({ state: x, options: H, name: W, instance: A }) || x);
          }
        }
      }
    }, "forceUpdate"), update: hl(function() {
      return new Promise(function(M) {
        A.forceUpdate(), M(x);
      });
    }), destroy: u(function() {
      S(), T = true;
    }, "destroy") };
    if (!np(h, m))
      return A;
    A.setOptions(y).then(function(M) {
      !T && y.onFirstUpdate && y.onFirstUpdate(M);
    });
    function D() {
      x.orderedModifiers.forEach(function(M) {
        var _ = M.name, I = M.options, L = I === void 0 ? {} : I, E = M.effect;
        if (typeof E == "function") {
          var B = E({ state: x, name: _, instance: A, options: L }), R = u(function() {
          }, "noopFn");
          P.push(B || R);
        }
      });
    }
    __name(D, "D");
    u(D, "runModifierEffects");
    function S() {
      P.forEach(function(M) {
        return M();
      }), P = [];
    }
    __name(S, "S");
    return u(S, "cleanupModifierEffects"), A;
  }, "createPopper");
}
__name(ip, "ip");
u(ip, "popperGenerator");
var Hh = [Vc, ep, Uc, so, Qc, Yc, tp, Fc, Kc];
var ml = ip({ defaultModifiers: Hh });
var Kt = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var $h = "tippy-box";
var hp = "tippy-content";
var Fh = "tippy-backdrop";
var vp = "tippy-arrow";
var mp = "tippy-svg-arrow";
var $n = { passive: true, capture: true };
var gp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function gl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(gl, "gl");
u(gl, "getValueAtIndexOrReturn");
function Sl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Sl, "Sl");
u(Sl, "isType");
function bp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(bp, "bp");
u(bp, "invokeWithArgsOrReturn");
function op(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(op, "op");
u(op, "debounce");
function Wh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
__name(Wh, "Wh");
u(Wh, "removeProperties");
function Uh(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Uh, "Uh");
u(Uh, "splitBySpaces");
function Fn(r) {
  return [].concat(r);
}
__name(Fn, "Fn");
u(Fn, "normalizeToArray");
function ap(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(ap, "ap");
u(ap, "pushIfUnique");
function Vh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(Vh, "Vh");
u(Vh, "unique");
function Xh(r) {
  return r.split("-")[0];
}
__name(Xh, "Xh");
u(Xh, "getBasePlacement");
function Ha(r) {
  return [].slice.call(r);
}
__name(Ha, "Ha");
u(Ha, "arrayFrom");
function sp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(sp, "sp");
u(sp, "removeUndefinedProps");
function mi() {
  return document.createElement("div");
}
__name(mi, "mi");
u(mi, "div");
function $a(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Sl(r, e);
  });
}
__name($a, "$a");
u($a, "isElement");
function Yh(r) {
  return Sl(r, "NodeList");
}
__name(Yh, "Yh");
u(Yh, "isNodeList");
function Zh(r) {
  return Sl(r, "MouseEvent");
}
__name(Zh, "Zh");
u(Zh, "isMouseEvent");
function Jh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Jh, "Jh");
u(Jh, "isReferenceElement");
function Kh(r) {
  return $a(r) ? [r] : Yh(r) ? Ha(r) : Array.isArray(r) ? r : Ha(document.querySelectorAll(r));
}
__name(Kh, "Kh");
u(Kh, "getArrayOfElements");
function bl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(bl, "bl");
u(bl, "setTransitionDuration");
function lp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(lp, "lp");
u(lp, "setVisibilityState");
function Qh(r) {
  var e, t = Fn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(Qh, "Qh");
u(Qh, "getOwnerDocument");
function ev(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, d = l.popperState, h = l.props, m = h.interactiveBorder, y = Xh(d.placement), x = d.modifiersData.offset;
    if (!x)
      return true;
    var P = y === "bottom" ? x.top.y : 0, T = y === "top" ? x.bottom.y : 0, A = y === "right" ? x.left.x : 0, D = y === "left" ? x.right.x : 0, S = c.top - i + P > m, M = i - c.bottom - T > m, _ = c.left - t + A > m, I = t - c.right - D > m;
    return S || M || _ || I;
  });
}
__name(ev, "ev");
u(ev, "isCursorOutsideInteractiveBorder");
function yl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(yl, "yl");
u(yl, "updateTransitionEndListener");
function up(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(up, "up");
u(up, "actualContains");
var Mr = { isTouch: false };
var cp = 0;
function tv() {
  Mr.isTouch || (Mr.isTouch = true, window.performance && document.addEventListener("mousemove", yp));
}
__name(tv, "tv");
u(tv, "onDocumentTouchStart");
function yp() {
  var r = performance.now();
  r - cp < 20 && (Mr.isTouch = false, document.removeEventListener("mousemove", yp)), cp = r;
}
__name(yp, "yp");
u(yp, "onDocumentMouseMove");
function rv() {
  var r = document.activeElement;
  if (Jh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(rv, "rv");
u(rv, "onWindowBlur");
function nv() {
  document.addEventListener("touchstart", tv, $n), window.addEventListener("blur", rv);
}
__name(nv, "nv");
u(nv, "bindGlobalEventListeners");
var iv = typeof window != "undefined" && typeof document != "undefined";
var ov = iv ? !!window.msCrypto : false;
var av = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var sv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Sr = Object.assign({ appendTo: gp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, av, sv);
var lv = Object.keys(Sr);
var uv = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    Sr[i] = e[i];
  });
}, "setDefaultProps");
function xp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, d = l.defaultValue;
    if (c) {
      var h;
      i[c] = r[c] !== void 0 ? r[c] : (h = Sr[c]) != null ? h : d;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(xp, "xp");
u(xp, "getExtendedPassedProps");
function cv(r, e) {
  var t = e ? Object.keys(xp(Object.assign({}, Sr, { plugins: e }))) : lv, i = t.reduce(function(l, c) {
    var d = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!d)
      return l;
    if (c === "content")
      l[c] = d;
    else
      try {
        l[c] = JSON.parse(d);
      } catch (h) {
        l[c] = d;
      }
    return l;
  }, {});
  return i;
}
__name(cv, "cv");
u(cv, "getDataAttributeProps");
function pp(r, e) {
  var t = Object.assign({}, e, { content: bp(e.content, [r]) }, e.ignoreAttributes ? {} : cv(r, e.plugins));
  return t.aria = Object.assign({}, Sr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(pp, "pp");
u(pp, "evaluateProps");
var pv = u(function() {
  return "innerHTML";
}, "innerHTML");
function wl(r, e) {
  r[pv()] = e;
}
__name(wl, "wl");
u(wl, "dangerouslySetInnerHTML");
function dp(r) {
  var e = mi();
  return r === true ? e.className = vp : (e.className = mp, $a(r) ? e.appendChild(r) : wl(e, r)), e;
}
__name(dp, "dp");
u(dp, "createArrowElement");
function fp(r, e) {
  $a(e.content) ? (wl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? wl(r, e.content) : r.textContent = e.content);
}
__name(fp, "fp");
u(fp, "setContent");
function El(r) {
  var e = r.firstElementChild, t = Ha(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(hp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(vp) || i.classList.contains(mp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Fh);
  }) };
}
__name(El, "El");
u(El, "getChildren");
function wp(r) {
  var e = mi(), t = mi();
  t.className = $h, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = mi();
  i.className = hp, i.setAttribute("data-state", "hidden"), fp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, d) {
    var h = El(e), m = h.box, y = h.content, x = h.arrow;
    d.theme ? m.setAttribute("data-theme", d.theme) : m.removeAttribute("data-theme"), typeof d.animation == "string" ? m.setAttribute("data-animation", d.animation) : m.removeAttribute("data-animation"), d.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof d.maxWidth == "number" ? d.maxWidth + "px" : d.maxWidth, d.role ? m.setAttribute("role", d.role) : m.removeAttribute("role"), (c.content !== d.content || c.allowHTML !== d.allowHTML) && fp(y, r.props), d.arrow ? x ? c.arrow !== d.arrow && (m.removeChild(x), m.appendChild(dp(d.arrow))) : m.appendChild(dp(d.arrow)) : x && m.removeChild(x);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(wp, "wp");
u(wp, "render");
wp.$$tippy = true;
var dv = 1;
var Ba = [];
var xl = [];
function fv(r, e) {
  var t = pp(r, Object.assign({}, Sr, xp(sp(e)))), i, l, c, d = false, h = false, m = false, y = false, x, P, T, A = [], D = op(dn, t.interactiveDebounce), S, M = dv++, _ = null, I = Vh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: M, reference: r, popper: mi(), popperInstance: _, props: t, state: L, plugins: I, clearDelayTimeouts: Vn, setProps: kr, setContent: vn, show: wi, hide: Po, hideWithInteractivity: Ei, enable: Dr, disable: Nt, unmount: Si, destroy: Mo };
  if (!t.render)
    return E;
  var B = t.render(E), R = B.popper, X = B.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + E.id, E.popper = R, r._tippy = E, R._tippy = E;
  var V = I.map(function(j) {
    return j.fn(E);
  }), H = r.hasAttribute("aria-expanded");
  return Rt(), Qe(), qe(), fe("onCreate", [E]), t.showOnCreate && hn(), R.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", D);
  }), E;
  function W() {
    var j = E.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  __name(W, "W");
  u(W, "getNormalizedTouchSettings");
  function ie() {
    return W()[0] === "hold";
  }
  __name(ie, "ie");
  u(ie, "getIsCustomTouchBehavior");
  function oe() {
    var j;
    return !!((j = E.props.render) != null && j.$$tippy);
  }
  __name(oe, "oe");
  u(oe, "getIsDefaultRenderFn");
  function U() {
    return S || r;
  }
  __name(U, "U");
  u(U, "getCurrentTarget");
  function ce() {
    var j = U().parentNode;
    return j ? Qh(j) : document;
  }
  __name(ce, "ce");
  u(ce, "getDocument");
  function Re() {
    return El(R);
  }
  __name(Re, "Re");
  u(Re, "getDefaultTemplateChildren");
  function We(j) {
    return E.state.isMounted && !E.state.isVisible || Mr.isTouch || x && x.type === "focus" ? 0 : gl(E.props.delay, j ? 0 : 1, Sr.delay);
  }
  __name(We, "We");
  u(We, "getDelay");
  function qe(j) {
    j === void 0 && (j = false), R.style.pointerEvents = E.props.interactive && !j ? "" : "none", R.style.zIndex = "" + E.props.zIndex;
  }
  __name(qe, "qe");
  u(qe, "handleStyles");
  function fe(j, Q, ae) {
    if (ae === void 0 && (ae = true), V.forEach(function(he) {
      he[j] && he[j].apply(he, Q);
    }), ae) {
      var ye;
      (ye = E.props)[j].apply(ye, Q);
    }
  }
  __name(fe, "fe");
  u(fe, "invokeHook");
  function Ye() {
    var j = E.props.aria;
    if (!!j.content) {
      var Q = "aria-" + j.content, ae = R.id, ye = Fn(E.props.triggerTarget || r);
      ye.forEach(function(he) {
        var pt = he.getAttribute(Q);
        if (E.state.isVisible)
          he.setAttribute(Q, pt ? pt + " " + ae : ae);
        else {
          var dt = pt && pt.replace(ae, "").trim();
          dt ? he.setAttribute(Q, dt) : he.removeAttribute(Q);
        }
      });
    }
  }
  __name(Ye, "Ye");
  u(Ye, "handleAriaContentAttribute");
  function Qe() {
    if (!(H || !E.props.aria.expanded)) {
      var j = Fn(E.props.triggerTarget || r);
      j.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === U() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Qe, "Qe");
  u(Qe, "handleAriaExpandedAttribute");
  function kt() {
    ce().removeEventListener("mousemove", D), Ba = Ba.filter(function(j) {
      return j !== D;
    });
  }
  __name(kt, "kt");
  u(kt, "cleanupInteractiveMouseListeners");
  function Mt(j) {
    if (!(Mr.isTouch && (m || j.type === "mousedown"))) {
      var Q = j.composedPath && j.composedPath()[0] || j.target;
      if (!(E.props.interactive && up(R, Q))) {
        if (Fn(E.props.triggerTarget || r).some(function(ae) {
          return up(ae, Q);
        })) {
          if (Mr.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [E, j]);
        E.props.hideOnClick === true && (E.clearDelayTimeouts(), E.hide(), h = true, setTimeout(function() {
          h = false;
        }), E.state.isMounted || Ct());
      }
    }
  }
  __name(Mt, "Mt");
  u(Mt, "onDocumentPress");
  function Ir() {
    m = true;
  }
  __name(Ir, "Ir");
  u(Ir, "onTouchMove");
  function K() {
    m = false;
  }
  __name(K, "K");
  u(K, "onTouchStart");
  function St() {
    var j = ce();
    j.addEventListener("mousedown", Mt, true), j.addEventListener("touchend", Mt, $n), j.addEventListener("touchstart", K, $n), j.addEventListener("touchmove", Ir, $n);
  }
  __name(St, "St");
  u(St, "addDocumentPress");
  function Ct() {
    var j = ce();
    j.removeEventListener("mousedown", Mt, true), j.removeEventListener("touchend", Mt, $n), j.removeEventListener("touchstart", K, $n), j.removeEventListener("touchmove", Ir, $n);
  }
  __name(Ct, "Ct");
  u(Ct, "removeDocumentPress");
  function zr(j, Q) {
    hr(j, function() {
      !E.state.isVisible && R.parentNode && R.parentNode.contains(R) && Q();
    });
  }
  __name(zr, "zr");
  u(zr, "onTransitionedOut");
  function Wt(j, Q) {
    hr(j, Q);
  }
  __name(Wt, "Wt");
  u(Wt, "onTransitionedIn");
  function hr(j, Q) {
    var ae = Re().box;
    function ye(he) {
      he.target === ae && (yl(ae, "remove", ye), Q());
    }
    __name(ye, "ye");
    if (u(ye, "listener"), j === 0)
      return Q();
    yl(ae, "remove", P), yl(ae, "add", ye), P = ye;
  }
  __name(hr, "hr");
  u(hr, "onTransitionEnd");
  function vr(j, Q, ae) {
    ae === void 0 && (ae = false);
    var ye = Fn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, Q, ae), A.push({ node: he, eventType: j, handler: Q, options: ae });
    });
  }
  __name(vr, "vr");
  u(vr, "on");
  function Rt() {
    ie() && (vr("touchstart", At, { passive: true }), vr("touchend", xe, { passive: true })), Uh(E.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (vr(j, At), j) {
          case "mouseenter":
            vr("mouseleave", xe);
            break;
          case "focus":
            vr(ov ? "focusout" : "blur", Ur);
            break;
          case "focusin":
            vr("focusout", Ur);
            break;
        }
    });
  }
  __name(Rt, "Rt");
  u(Rt, "addListeners");
  function Un() {
    A.forEach(function(j) {
      var Q = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      Q.removeEventListener(ae, ye, he);
    }), A = [];
  }
  __name(Un, "Un");
  u(Un, "removeListeners");
  function At(j) {
    var Q, ae = false;
    if (!(!E.state.isEnabled || Vr(j) || h)) {
      var ye = ((Q = x) == null ? void 0 : Q.type) === "focus";
      x = j, S = j.currentTarget, Qe(), !E.state.isVisible && Zh(j) && Ba.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d) && E.props.hideOnClick !== false && E.state.isVisible ? ae = true : hn(j), j.type === "click" && (d = !ae), ae && !ye && ct(j);
    }
  }
  __name(At, "At");
  u(At, "onTrigger");
  function dn(j) {
    var Q = j.target, ae = U().contains(Q) || R.contains(Q);
    if (!(j.type === "mousemove" && ae)) {
      var ye = gr().concat(R).map(function(he) {
        var pt, dt = he._tippy, Xr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Xr ? { popperRect: he.getBoundingClientRect(), popperState: Xr, props: t } : null;
      }).filter(Boolean);
      ev(ye, j) && (kt(), ct(j));
    }
  }
  __name(dn, "dn");
  u(dn, "onMouseMove");
  function xe(j) {
    var Q = Vr(j) || E.props.trigger.indexOf("click") >= 0 && d;
    if (!Q) {
      if (E.props.interactive) {
        E.hideWithInteractivity(j);
        return;
      }
      ct(j);
    }
  }
  __name(xe, "xe");
  u(xe, "onMouseLeave");
  function Ur(j) {
    E.props.trigger.indexOf("focusin") < 0 && j.target !== U() || E.props.interactive && j.relatedTarget && R.contains(j.relatedTarget) || ct(j);
  }
  __name(Ur, "Ur");
  u(Ur, "onBlurOrFocusOut");
  function Vr(j) {
    return Mr.isTouch ? ie() !== j.type.indexOf("touch") >= 0 : false;
  }
  __name(Vr, "Vr");
  u(Vr, "isEventListenerStopped");
  function _t() {
    fn();
    var j = E.props, Q = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, pt = j.moveTransition, dt = oe() ? El(R).arrow : null, Xr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : r, Ci = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Rr) {
      var Yr = Rr.state;
      if (oe()) {
        var Gt = Re(), qt = Gt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ut) {
          Ut === "placement" ? qt.setAttribute("data-placement", Yr.placement) : Yr.attributes.popper["data-popper-" + Ut] ? qt.setAttribute("data-" + Ut, "") : qt.removeAttribute("data-" + Ut);
        }), Yr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, Ci];
    oe() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = ml(Xr, R, Object.assign({}, Q, { placement: ae, onFirstUpdate: T, modifiers: ft }));
  }
  __name(_t, "_t");
  u(_t, "createPopperInstance");
  function fn() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  __name(fn, "fn");
  u(fn, "destroyPopperInstance");
  function mr() {
    var j = E.props.appendTo, Q, ae = U();
    E.props.interactive && j === gp || j === "parent" ? Q = ae.parentNode : Q = bp(j, [ae]), Q.contains(R) || Q.appendChild(R), E.state.isMounted = true, _t();
  }
  __name(mr, "mr");
  u(mr, "mount");
  function gr() {
    return Ha(R.querySelectorAll("[data-tippy-root]"));
  }
  __name(gr, "gr");
  u(gr, "getNestedPopperTree");
  function hn(j) {
    E.clearDelayTimeouts(), j && fe("onTrigger", [E, j]), St();
    var Q = We(true), ae = W(), ye = ae[0], he = ae[1];
    Mr.isTouch && ye === "hold" && he && (Q = he), Q ? i = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  __name(hn, "hn");
  u(hn, "scheduleShow");
  function ct(j) {
    if (E.clearDelayTimeouts(), fe("onUntrigger", [E, j]), !E.state.isVisible) {
      Ct();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && d)) {
      var Q = We(false);
      Q ? l = setTimeout(function() {
        E.state.isVisible && E.hide();
      }, Q) : c = requestAnimationFrame(function() {
        E.hide();
      });
    }
  }
  __name(ct, "ct");
  u(ct, "scheduleHide");
  function Dr() {
    E.state.isEnabled = true;
  }
  __name(Dr, "Dr");
  u(Dr, "enable");
  function Nt() {
    E.hide(), E.state.isEnabled = false;
  }
  __name(Nt, "Nt");
  u(Nt, "disable");
  function Vn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(Vn, "Vn");
  u(Vn, "clearDelayTimeouts");
  function kr(j) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, j]), Un();
      var Q = E.props, ae = pp(r, Object.assign({}, Q, sp(j), { ignoreAttributes: true }));
      E.props = ae, Rt(), Q.interactiveDebounce !== ae.interactiveDebounce && (kt(), D = op(dn, ae.interactiveDebounce)), Q.triggerTarget && !ae.triggerTarget ? Fn(Q.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Qe(), qe(), X && X(Q, ae), E.popperInstance && (_t(), gr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, j]);
    }
  }
  __name(kr, "kr");
  u(kr, "setProps");
  function vn(j) {
    E.setProps({ content: j });
  }
  __name(vn, "vn");
  u(vn, "setContent");
  function wi() {
    var j = E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = Mr.isTouch && !E.props.touch, he = gl(E.props.duration, 0, Sr.duration);
    if (!(j || Q || ae || ye) && !U().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, oe() && (R.style.visibility = "visible"), qe(), St(), E.state.isMounted || (R.style.transition = "none"), oe()) {
        var pt = Re(), dt = pt.box, Xr = pt.content;
        bl([dt, Xr], 0);
      }
      T = u(function() {
        var ft;
        if (!(!E.state.isVisible || y)) {
          if (y = true, R.offsetHeight, R.style.transition = E.props.moveTransition, oe() && E.props.animation) {
            var Ti = Re(), Rr = Ti.box, Yr = Ti.content;
            bl([Rr, Yr], he), lp([Rr, Yr], "visible");
          }
          Ye(), Qe(), ap(xl, E), (ft = E.popperInstance) == null || ft.forceUpdate(), fe("onMount", [E]), E.props.animation && oe() && Wt(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), mr();
    }
  }
  __name(wi, "wi");
  u(wi, "show");
  function Po() {
    var j = !E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = gl(E.props.duration, 1, Sr.duration);
    if (!(j || Q || ae) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d = false, oe() && (R.style.visibility = "hidden"), kt(), Ct(), qe(true), oe()) {
        var he = Re(), pt = he.box, dt = he.content;
        E.props.animation && (bl([pt, dt], ye), lp([pt, dt], "hidden"));
      }
      Ye(), Qe(), E.props.animation ? oe() && zr(ye, E.unmount) : E.unmount();
    }
  }
  __name(Po, "Po");
  u(Po, "hide");
  function Ei(j) {
    ce().addEventListener("mousemove", D), ap(Ba, D), D(j);
  }
  __name(Ei, "Ei");
  u(Ei, "hideWithInteractivity");
  function Si() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (fn(), gr().forEach(function(j) {
      j._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), xl = xl.filter(function(j) {
      return j !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  __name(Si, "Si");
  u(Si, "unmount");
  function Mo() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), Un(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  __name(Mo, "Mo");
  u(Mo, "destroy");
}
__name(fv, "fv");
u(fv, "createTippy");
function gi(r, e) {
  e === void 0 && (e = {});
  var t = Sr.plugins.concat(e.plugins || []);
  nv();
  var i = Object.assign({}, e, { plugins: t }), l = Kh(r);
  if (false)
    var c, d;
  var h = l.reduce(function(m, y) {
    var x = y && fv(y, i);
    return x && m.push(x), m;
  }, []);
  return $a(r) ? h[0] : h;
}
__name(gi, "gi");
u(gi, "tippy");
gi.defaultProps = Sr;
gi.setDefaultProps = uv;
gi.currentInput = Mr;
var hv = Object.assign({}, so, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var Ep = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], d = [], h, m = t.overrides, y = [], x = false;
  function P() {
    d = l.map(function(E) {
      return Fn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  __name(P, "P");
  u(P, "setTriggerTargets");
  function T() {
    c = l.map(function(E) {
      return E.reference;
    });
  }
  __name(T, "T");
  u(T, "setReferences");
  function A(E) {
    l.forEach(function(B) {
      E ? B.enable() : B.disable();
    });
  }
  __name(A, "A");
  u(A, "enableInstances");
  function D(E) {
    return l.map(function(B) {
      var R = B.setProps;
      return B.setProps = function(X) {
        R(X), B.reference === h && E.setProps(X);
      }, function() {
        B.setProps = R;
      };
    });
  }
  __name(D, "D");
  u(D, "interceptSetProps");
  function S(E, B) {
    var R = d.indexOf(B);
    if (B !== h) {
      h = B;
      var X = (m || []).concat("content").reduce(function(V, H) {
        return V[H] = l[R].props[H], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c[R]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  __name(S, "S");
  u(S, "prepareInstance"), A(false), T(), P();
  var M = { fn: u(function() {
    return { onDestroy: u(function() {
      A(true);
    }, "onDestroy"), onHidden: u(function() {
      h = null;
    }, "onHidden"), onClickOutside: u(function(R) {
      R.props.showOnCreate && !x && (x = true, h = null);
    }, "onClickOutside"), onShow: u(function(R) {
      R.props.showOnCreate && !x && (x = true, S(R, c[0]));
    }, "onShow"), onTrigger: u(function(R, X) {
      S(R, X.currentTarget);
    }, "onTrigger") };
  }, "fn") }, _ = gi(mi(), Object.assign({}, Wh(t, ["overrides"]), { plugins: [M].concat(t.plugins || []), triggerTarget: d, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [hv]) }) })), I = _.show;
  _.show = function(E) {
    if (I(), !h && E == null)
      return S(_, c[0]);
    if (!(h && E == null)) {
      if (typeof E == "number")
        return c[E] && S(_, c[E]);
      if (l.indexOf(E) >= 0) {
        var B = E.reference;
        return S(_, B);
      }
      if (c.indexOf(E) >= 0)
        return S(_, E);
    }
  }, _.showNext = function() {
    var E = c[0];
    if (!h)
      return _.show(0);
    var B = c.indexOf(h);
    _.show(c[B + 1] || E);
  }, _.showPrevious = function() {
    var E = c[c.length - 1];
    if (!h)
      return _.show(E);
    var B = c.indexOf(h), R = c[B - 1] || E;
    _.show(R);
  };
  var L = _.setProps;
  return _.setProps = function(E) {
    m = E.overrides || m, L(E);
  }, _.setInstances = function(E) {
    A(true), y.forEach(function(B) {
      return B();
    }), l = E, A(false), T(), P(), y = D(_), _.setProps({ triggerTarget: d });
  }, y = D(_), _;
}, "createSingleton");
gi.setDefaultProps({ render: wp });
var wt = gi;
var Cl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Ae(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = gt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = wt(this, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
      this.helpableService = at(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${et(i.value)}`);
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
  return u(e, "HelpableMixinClass"), z([q], e.prototype, "help", 2), z([q], e.prototype, "helpId", 2), z([q], e.prototype, "debugHelpable", 2), e;
}
__name(Ae, "Ae");
u(Ae, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), z([q], e.prototype, "hoverable", 2), e;
}
__name(we, "we");
u(we, "HoverableMixin");
function* Fa(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Fa, "Fa");
u(Fa, "parse");
var Sp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Sp");
var an = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "an");
var Ar;
var Wa;
var $r = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Ar.set(this, void 0), Wa.set(this, ""), Sp(this, Ar, e, "f"), an(this, Ar, "f").updateParent("");
  }
  get attributeName() {
    return an(this, Ar, "f").attr.name;
  }
  get attributeNamespace() {
    return an(this, Ar, "f").attr.namespaceURI;
  }
  get value() {
    return an(this, Wa, "f");
  }
  set value(e) {
    Sp(this, Wa, e || "", "f"), an(this, Ar, "f").updateParent(e);
  }
  get element() {
    return an(this, Ar, "f").element;
  }
  get booleanValue() {
    return an(this, Ar, "f").booleanValue;
  }
  set booleanValue(e) {
    an(this, Ar, "f").booleanValue = e;
  }
}, "$r");
u($r, "AttributeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap();
var ho = /* @__PURE__ */ __name(class {
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
}, "ho");
u(ho, "AttributeValueSetter");
var Cp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Cp");
var bi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "bi");
var _r;
var Qt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, _r.set(this, void 0), Cp(this, _r, [e], "f"), e.textContent = "";
  }
  get value() {
    return bi(this, _r, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return bi(this, _r, "f")[0].previousSibling;
  }
  get nextSibling() {
    return bi(this, _r, "f")[bi(this, _r, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), bi(this, _r, "f")[0].before(...t);
    for (let i of bi(this, _r, "f"))
      i.remove();
    Cp(this, _r, t, "f");
  }
}, "Qt");
u(Qt, "NodeTemplatePart");
_r = /* @__PURE__ */ new WeakMap();
function vo(r) {
  return { createCallback(e, t, i) {
    this.processCallback(e, t, i);
  }, processCallback(e, t, i) {
    var l;
    if (!(typeof i != "object" || !i)) {
      for (let c of t)
        if (c.expression in i) {
          let d = (l = i[c.expression]) !== null && l !== void 0 ? l : "";
          r(c, d);
        }
    }
  } };
}
__name(vo, "vo");
u(vo, "createProcessor");
function mo(r, e) {
  r.value = String(e);
}
__name(mo, "mo");
u(mo, "processPropertyIdentity");
function Ua(r, e) {
  return typeof e == "boolean" && r instanceof $r && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(Ua, "Ua");
u(Ua, "processBooleanAttribute");
var Tl = vo(mo);
var vv = vo((r, e) => {
  Ua(r, e) || mo(r, e);
});
var Tp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Tp");
var Va = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "Va");
var go;
var bo;
function* mv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new ho(t, l);
          for (let d of Fa(l.value))
            if (d.type === "string")
              c.append(d.value);
            else {
              let h = new $r(c, d.value);
              c.append(h), yield h;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Fa(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Qt(t, i.value));
        break;
      }
}
__name(mv, "mv");
u(mv, "collectParts");
var sn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = Tl) {
    var l, c;
    super();
    go.set(this, void 0), bo.set(this, void 0), Object.getPrototypeOf(this) !== sn.prototype && Object.setPrototypeOf(this, sn.prototype), this.appendChild(e.content.cloneNode(true)), Tp(this, bo, Array.from(mv(this)), "f"), Tp(this, go, i, "f"), (c = (l = Va(this, go, "f")).createCallback) === null || c === void 0 || c.call(l, this, Va(this, bo, "f"), t);
  }
  update(e) {
    Va(this, go, "f").processCallback(this, Va(this, bo, "f"), e);
  }
}, "sn");
u(sn, "TemplateInstance");
go = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap();
var Op = /* @__PURE__ */ new WeakSet();
function Pp(r) {
  return Op.has(r);
}
__name(Pp, "Pp");
u(Pp, "isDirective");
function Mp(r, e) {
  return Pp(e) ? (e(r), true) : false;
}
__name(Mp, "Mp");
u(Mp, "processDirective");
function yo(r) {
  return (...e) => {
    let t = r(...e);
    return Op.add(t), t;
  };
}
__name(yo, "yo");
u(yo, "directive");
var xo = /* @__PURE__ */ new WeakMap();
var wo = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), xo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), xo.get(this.element).delete(this.type));
  }
  static for(e) {
    xo.has(e.element) || xo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = xo.get(e.element);
    return i.has(t) ? i.get(t) : new wo(e.element, t);
  }
}, "wo");
u(wo, "EventHandler");
function Ap(r, e) {
  return r instanceof $r && r.attributeName.startsWith("on") ? (wo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Ap, "Ap");
u(Ap, "processEvent");
function gv(r, e) {
  return e instanceof yi && r instanceof Qt ? (e.renderInto(r), true) : false;
}
__name(gv, "gv");
u(gv, "processSubTemplate");
function bv(r, e) {
  return e instanceof DocumentFragment && r instanceof Qt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(bv, "bv");
u(bv, "processDocumentFragment");
function yv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(yv, "yv");
u(yv, "isIterable");
function xv(r, e) {
  if (!yv(e))
    return false;
  if (r instanceof Qt) {
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
__name(xv, "xv");
u(xv, "processIterable");
function Xa(r, e) {
  Mp(r, e) || Ua(r, e) || Ap(r, e) || gv(r, e) || bv(r, e) || xv(r, e) || mo(r, e);
}
__name(Xa, "Xa");
u(Xa, "processPart");
var Ol = /* @__PURE__ */ new WeakMap();
var _p = /* @__PURE__ */ new WeakMap();
var Ip = /* @__PURE__ */ new WeakMap();
var yi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Ol.has(this.strings))
      return Ol.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Ol.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (_p.get(e) !== t) {
      _p.set(e, t);
      let i = new sn(t, this.values, this.processor);
      Ip.set(e, i), e instanceof Qt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Ip.get(e).update(this.values);
  }
}, "yi");
u(yi, "TemplateResult");
var wv = vo(Xa);
function Z(r, ...e) {
  return new yi(r, e, wv);
}
__name(Z, "Z");
u(Z, "html");
function ee(r, e) {
  r.renderInto(e);
}
__name(ee, "ee");
u(ee, "render");
var Pl = /* @__PURE__ */ new WeakMap();
var Ev = yo((...r) => (e) => {
  Pl.has(e) || Pl.set(e, { i: r.length });
  let t = Pl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Xa(e, l));
    }) : i <= t.i && (t.i = i, Xa(e, r[i]));
});
var Sv = yo((r) => (e) => {
  if (!(e instanceof Qt))
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
  __name(e, "e");
  return u(e, "IconableMixinClass"), e;
}
__name(ke, "ke");
u(ke, "IconableMixin");
var Fr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Je(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), z([q], e.prototype, "if", 2), e;
}
__name(Je, "Je");
u(Je, "IfableMixin");
var zp = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function _e(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = wt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c, d, h;
        (l = this.ifTooltip) == null || l.hide(), (c = this.angleTooltip) == null || c.hide(), (d = this.flagTooltip) == null || d.hide(), (h = this.deleteTooltip) == null || h.hide();
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
      return ee(Z`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Fr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        re.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = wt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Sn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        re.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = wt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (kn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        re.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = wt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      re.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = wt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
__name(_e, "_e");
u(_e, "MenuableMixin");
function Dp(r) {
  return /^-?\d+$/.test(r);
}
__name(Dp, "Dp");
u(Dp, "isNumeric");
function er(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(er, "er");
u(er, "forceSigned");
var it = /* @__PURE__ */ __name(class extends _e(Ae(Me(Pe(we(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Ps;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (re.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    wt(this, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return ee(Z`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${er(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${er(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${er(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${er(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${er(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${er(this.z)}</span>
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
    ee(Z`<style>
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
    return `"${Ps}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let t = this._tippy;
    t == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return re.notNull(e), parseFloat(e);
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
    return re.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return re.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
}, "it");
u(it, "BlochDisplayElement"), z([Oe], it.prototype, "body", 2), z([Oe], it.prototype, "vectorLine", 2), z([Oe], it.prototype, "vectorEnd", 2), z([Oe], it.prototype, "vector", 2), z([Bt], it.prototype, "vectorEndCircles", 2), z([q], it.prototype, "x", 2), z([q], it.prototype, "y", 2), z([q], it.prototype, "z", 2);
ne(it);
var kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var $t = /* @__PURE__ */ __name(class extends _e(Ae(Me(Be(ke(Pe(we(HTMLElement))))))) {
  get operationType() {
    return Os;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Os}"`;
  }
}, "$t");
u($t, "ControlGateElement");
ne($t);
var Rp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(Me(Be(ke(Pe(we(HTMLElement))))))))) {
  get operationType() {
    return ia;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ia}<${this.if}"` : `"${ia}"`;
  }
}, "tr");
u(tr, "HGateElement");
ne(tr);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends _e(Ae(qc(Me(ke(Pe(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">
        ${this.iconHtml(Np)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ha}"` : `"${ha}>${this.flag}"`;
  }
}, "rr");
u(rr, "MeasurementGateElement"), z([q], rr.prototype, "value", 2);
ne(rr);
var Gp = `<svg
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
var nr = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(tn(Me(Be(ke(Pe(we(HTMLElement)))))))))) {
  get operationType() {
    return la;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${la}"` : `"${la}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "PhaseGateElement");
ne(nr);
var qp = `<svg
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
var ir = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(Me(Be(ke(Pe(we(HTMLElement))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ca}<${this.if}"` : `"${ca}"`;
  }
}, "ir");
u(ir, "RnotGateElement");
ne(ir);
var Lp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(tn(Me(Be(ke(Pe(we(HTMLElement)))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Lp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${pa}"` : `"${pa}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RxGateElement");
ne(or);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(tn(Me(Be(ke(Pe(we(HTMLElement)))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${da}"` : `"${da}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RyGateElement");
ne(ar);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(tn(Me(Be(ke(Pe(we(HTMLElement)))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${fa}"` : `"${fa}(${this.angle.replace("/", "_")})"`;
  }
}, "sr");
u(sr, "RzGateElement");
ne(sr);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends _e(Ae($e(Me(Be(ke(Pe(we(HTMLElement)))))))) {
  get operationType() {
    return Ts;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ts}"`;
  }
}, "lr");
u(lr, "SwapGateElement");
ne(lr);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(Me(Be(ke(Pe(we(HTMLElement))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ua}<${this.if}"` : `"${ua}"`;
  }
}, "ur");
u(ur, "TGateElement");
ne(ur);
var Fp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends _e(Ae(Me(ke(Pe(we(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Vu;
      case "1":
        return Xu;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">
        ${this.iconHtml(Fp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Ft");
u(Ft, "WriteGateElement"), z([q], Ft.prototype, "value", 2);
ne(Ft);
var Wp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(Me(Be(ke(Pe(we(HTMLElement))))))))) {
  get operationType() {
    return oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${oa}<${this.if}"` : `"${oa}"`;
  }
}, "cr");
u(cr, "XGateElement");
ne(cr);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(Me(Be(ke(Pe(we(HTMLElement))))))))) {
  get operationType() {
    return aa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Up)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${aa}<${this.if}"` : `"${aa}"`;
  }
}, "pr");
u(pr, "YGateElement");
ne(pr);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends _e(Ae(Je($e(Me(Be(ke(Pe(we(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
}, "dr");
u(dr, "ZGateElement");
ne(dr);
var ut = u((r) => r instanceof tr || r instanceof cr || r instanceof pr || r instanceof dr || r instanceof nr || r instanceof ur || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof $t || r instanceof it || r instanceof Ft || r instanceof rr, "isOperation");
var Xp = u((r) => r != null && r instanceof tr, "isHGateElement");
var Yp = u((r) => r != null && r instanceof cr, "isXGateElement");
var Zp = u((r) => r != null && r instanceof pr, "isYGateElement");
var Jp = u((r) => r != null && r instanceof dr, "isZGateElement");
var Eo = u((r) => r != null && r instanceof nr, "isPhaseGateElement");
var Kp = u((r) => r != null && r instanceof ur, "isTGateElement");
var Qp = u((r) => r != null && r instanceof ir, "isRnotGateElement");
var Ya = u((r) => r != null && r instanceof or, "isRxGateElement");
var Za = u((r) => r != null && r instanceof ar, "isRyGateElement");
var Ja = u((r) => r != null && r instanceof sr, "isRzGateElement");
var ed = u((r) => r != null && r instanceof lr, "isSwapGateElement");
var Ml = u((r) => r != null && r instanceof $t, "isControlGateElement");
var td = u((r) => r != null && r instanceof it, "isBlochDisplayElement");
var AC = u((r) => r != null && r instanceof Ft, "isWriteGateElement");
var rd = u((r) => r != null && r instanceof rr, "isMeasurementGateElement");
var So = Bi(za(), 1);
var Al = u((r) => r !== null && r instanceof Wr, "isAngleSliderElement");
var Wr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = gt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new xt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = $i(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(Hu(this.angle));
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
    this.angleSliderService = at(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${et(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, So.default)(this).unset();
  }
  update() {
    ee(Z`<style>
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
  move(e) {
    let t = So.default.getElementRect(e.target).width, i = e.pageX / t;
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
      let d = Math.abs(parseFloat(c) - e);
      (t === null || d < t) && (t = d, i = parseFloat(c), l = this.snapAngles[c]);
    }
    return re.notNull(i), re.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Wr");
u(Wr, "AngleSliderElement"), z([q], Wr.prototype, "angle", 2), z([q], Wr.prototype, "radian", 2), z([q], Wr.prototype, "denominator", 2), z([q], Wr.prototype, "disabled", 2), z([q], Wr.prototype, "debug", 2);
ne(Wr);
function nd(r, e = 0, { start: t = true, middle: i = true, once: l = false } = {}) {
  let c = 0, d, h = false;
  function m(...y) {
    if (h)
      return;
    let x = Date.now() - c;
    c = Date.now(), t ? (t = false, r.apply(this, y), l && m.cancel()) : (i && x < e || !i) && (clearTimeout(d), d = setTimeout(() => {
      c = Date.now(), r.apply(this, y), l && m.cancel();
    }, i ? e - x : e));
  }
  __name(m, "m");
  return u(m, "fn"), m.cancel = () => {
    clearTimeout(d), h = true;
  }, m;
}
__name(nd, "nd");
u(nd, "throttle");
function id(r, e = 0, { start: t = false, middle: i = false, once: l = false } = {}) {
  return nd(r, e, { start: t, middle: i, once: l });
}
__name(id, "id");
u(id, "debounce");
function Co(r = 0, e = {}) {
  return (t, i, l) => {
    if (!l || typeof l.value != "function")
      throw new Error("debounce can only decorate functions");
    let c = l.value;
    l.value = id(c, r, e), Object.defineProperty(t, i, l);
  };
}
__name(Co, "Co");
u(Co, "debounce");
var ln = Bi(ad(), 1);
var Ke = /* @__PURE__ */ __name(class extends HTMLElement {
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
    this.basicCircleNotationButton !== void 0 && this.basicCircleNotationButton.setAttribute("data-active", ""), this.coloredPhaseButton !== void 0 && this.coloredPhaseButton.removeAttribute("data-active"), this.coloredPhase = false, this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent();
  }
  startColoredPhaseMode() {
    this.coloredPhaseButton !== void 0 && this.coloredPhaseButton.setAttribute("data-active", ""), this.basicCircleNotationButton !== void 0 && this.basicCircleNotationButton.removeAttribute("data-active"), this.coloredPhase = true, this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && e === "data-qubit-count") {
      re.notNull(i);
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
        throw new xt("unsupported qubit count", e);
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
        throw new xt("unsupported qubit count", e);
    }
  }
  get visibleQubitCircleKets() {
    return this.qubitCircles.map((t) => {
      let i = t.getAttribute("data-ket");
      return re.notNull(i), parseInt(i);
    });
  }
  setAmplitudes(e) {
    ln.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        re.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let d = Math.floor(c.abs() * 1e5) / 1e5, h = t.children.item(0);
        re.notNull(h);
        let m = c.phase() / Math.PI * 180, y = t.children.item(1);
        re.notNull(y);
        let x = Math.trunc(m);
        x < 0 && (x = 360 + x), t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), d === 0 ? t.classList.add("magnitude-0") : t.classList.remove("magnitude-0"), h.style.setProperty("--magnitude", d.toString()), this.coloredPhase ? (t.classList.add("phase-hidden"), d === 0 ? h.style.setProperty("--magnitude", "0") : h.style.setProperty("--magnitude", "1"), -22.5 <= m && m < 22.5 || 337.5 <= m && m <= 360 || -337.5 < m && m <= -360 ? h.style.setProperty("--magnitude-color", "rgb(168 85 247)") : 22.5 <= m && m < 67.5 || -337.5 <= m && m < -292.5 ? h.style.setProperty("--magnitude-color", "rgb(236 72 153)") : 67.5 <= m && m < 112.5 || -292.5 <= m && m < -247.5 ? h.style.setProperty("--magnitude-color", "rgb(249 115 22)") : 112.5 <= m && m < 157.5 || -247.5 <= m && m < -202.5 ? h.style.setProperty("--magnitude-color", "rgb(234 179 8)") : 157.5 <= m && m < 202.5 || -202.5 <= m && m < -157.5 ? h.style.setProperty("--magnitude-color", "rgb(132 204 22)") : 202.5 <= m && m < 247.5 || -157.5 <= m && m < -112.5 ? h.style.setProperty("--magnitude-color", "rgb(34 197 94)") : 247.5 <= m && m < 292.5 || -112.5 <= m && m < -67.5 ? h.style.setProperty("--magnitude-color", "rgb(14 165 233)") : 292.5 <= m && m < 337.5 || -67.5 <= m && m < -22.5 ? h.style.setProperty("--magnitude-color", "rgb(99 102 241)") : h.style.removeProperty("--magnitude-color")) : h.style.setProperty("--magnitude-color", "rgb(14 165 233)"), y.style.setProperty("--phase", `-${x.toString()}deg`);
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
    ee(Z`<style>
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
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px; overflow: auto;"
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
        throw new xt("unsupported qubit count", this.qubitCount);
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
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 10:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 11:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 12:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 13:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 14:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 15:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      case 16:
        return this.vertical ? this.qubitCircleSizePx * 16 + this.gap * 15 : this.qubitCircleSizePx * 32 + this.gap * 31;
      default:
        throw new xt("unsupported qubit count", this.qubitCount);
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
      return this.cols > 16 && t < e ? t : e;
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
        return this.vertical ? 18 : 32;
      case 7:
        return 18;
      case 8:
        return 18;
      case 9:
        return 18;
      case 10:
        return 18;
      case 11:
        return 18;
      case 12:
        return 18;
      case 13:
        return 18;
      case 14:
        return 18;
      case 15:
        return 18;
      case 16:
        return 18;
      default:
        throw new xt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    if (this.window === void 0)
      return;
    let e = [];
    ln.default.measure(() => {
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let t = this.lastRowStartIndex; t <= this.lastRowEndIndex; t++)
        for (let i = this.lastColStartIndex; i <= this.lastColEndIndex; i++)
          e.push({ col: i, row: t });
    }), ln.default.mutate(() => {
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
    ln.default.measure(() => {
      if (e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex, !(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let d = i; d <= l; d++)
          for (let h = e; h <= t; h++)
            (h < this.lastColStartIndex || this.lastColEndIndex < h || d < this.lastRowStartIndex || this.lastRowEndIndex < d) && c.push({ col: h, row: d });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), ln.default.mutate(() => {
      let d = document.createDocumentFragment();
      for (let h of this.allQubitCircleElements(c))
        d.appendChild(h);
      this.innerContainer.appendChild(d), c.length !== 0 && this.dispatchVisibilityChangedEvent();
    });
  }
  removeInvisibleQubitCircles() {
    let e, t, i, l;
    ln.default.measure(() => {
      e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
    }), ln.default.mutate(() => {
      for (let c of this.qubitCircles) {
        let d = c.getAttribute("data-col"), h = c.getAttribute("data-row");
        re.notNull(d), re.notNull(h);
        let m = parseInt(d), y = parseInt(h);
        if (m < e || t < m || y < i || l < y) {
          let x = c._tippy;
          x !== void 0 && x.destroy(), c.remove();
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
    let d = document.createElement("div");
    d.className = "qubit-circle__magnitude", d.style.setProperty("--magnitude", "0");
    let h = document.createElement("div");
    return h.className = "qubit-circle__phase", h.style.setProperty("width", `${this.qubitCircleLineWidth}px`), c.appendChild(d), c.appendChild(h), c;
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
        throw new xt("unsupported qubit count", this.qubitCount);
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
    re.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = wt(t, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, theme: "qni" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    re.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    re.notNull(c);
    let d = t.getAttribute("data-amplitude-imag");
    re.notNull(d);
    let h = parseInt(l), m = parseFloat(c), y = parseFloat(d), x = new Yt(m, y), P = x.abs(), T = x.phase() / Math.PI * 180, A = this.qubitCirclePopupTemplate.content.querySelector(".ket-binary"), D = this.qubitCirclePopupTemplate.content.querySelector(".ket-decimal"), S = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-real"), M = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-imag"), _ = this.qubitCirclePopupTemplate.content.querySelector(".probability"), I = this.qubitCirclePopupTemplate.content.querySelector(".phase");
    A && (A.textContent = h.toString(2).padStart(this.qubitCount, "0")), D && (D.textContent = h.toString()), S && (S.textContent = er(x.real, 5)), M && (M.textContent = `${er(x.imag, 5)}i`), _ && (_.textContent = `${er(P * P * 100, 4)}%`), I && (I.textContent = `${er(T, 2)}\xB0`);
    let L = document.createElement("div");
    L.appendChild(this.qubitCirclePopupTemplate.content.cloneNode(true)), i.setContent(L.innerHTML), i.show();
  }
  hideQubitCirclePopup(e) {
    let t = e.target;
    re.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    re.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "Ke");
u(Ke, "CircleNotationElement"), z([q], Ke.prototype, "qubitCount", 2), z([q], Ke.prototype, "qubitCircleSize", 2), z([q], Ke.prototype, "cols", 2), z([q], Ke.prototype, "rows", 2), z([q], Ke.prototype, "paddingX", 2), z([q], Ke.prototype, "paddingY", 2), z([q], Ke.prototype, "overscan", 2), z([q], Ke.prototype, "qubitCirclePopupTemplateId", 2), z([q], Ke.prototype, "coloredPhase", 2), z([Oe], Ke.prototype, "window", 2), z([Oe], Ke.prototype, "innerContainer", 2), z([Oe], Ke.prototype, "basicCircleNotationButton", 2), z([Oe], Ke.prototype, "coloredPhaseButton", 2), z([Bt], Ke.prototype, "qubitCircles", 2), z([Co(10)], Ke.prototype, "drawNewlyVisibleQubuitCircles", 1), z([Co(100)], Ke.prototype, "removeInvisibleQubitCircles", 1), Ke = z([ne], Ke);
var fr = /* @__PURE__ */ __name(class extends HTMLElement {
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
      re.notNull(c);
      let d = Yt.from(l);
      c.setAttribute("data-amplitude-real", d.real.toString()), c.setAttribute("data-amplitude-imag", d.imag.toString());
      let h = d.abs();
      this.setRoundedMagnitude(c, h);
      let m = d.phase() / Math.PI * 180;
      this.setRoundedPhase(c, m);
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
        let d = c.target;
        c.intersectionRatio >= 0.2 ? (d.setAttribute("data-targets", "circle-notation-old.qubitCircleGroups circle-notation-old.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : c.intersectionRatio === 0 && d.setAttribute("data-targets", "circle-notation-old.qubitCircleGroups");
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
    if (ee(Z`<style>
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
    let t = Z``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (d) => this.qubitCircleGroup(d, (h) => this.qubitCircleGroup(h, (m) => this.qubitCircleGroup(m, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = Z`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, d = 1) => c.reduce((h, m, y) => y % d ? h : [...h, c.slice(y, y + d)], []), "arrayChunk")(e, i).map((c) => {
      let d = Z``;
      if (t)
        for (let h of t(c))
          d = Z`${d} ${h}`;
      else
        for (let h of c)
          d = Z`${d} ${this.qubitCircleHtml(h)}`;
      return i === 64 ? Z`<div class="qubit-circle-group--size${i}" data-targets="circle-notation-old.qubitCircleGroups">
          ${d}
        </div>` : Z`<div class="qubit-circle-group--size${i}">${d}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = wt(e);
    Ep(t, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), d = t.getAttribute("data-magnitude"), h = t.getAttribute("data-phase"), m;
    l === null || c === null ? m = Yt.ZERO : m = new Yt(parseFloat(l), parseFloat(c));
    let y;
    d && parseFloat(d) === 0 ? y = 0 : y = h ? parseFloat(h) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, m, d ? parseFloat(d) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, d, h) {
    t._tippy.setContent(this.popupContent(e, i, l, c, d, h));
  }
  popupContent(e, t, i, l, c, d) {
    let h = e.querySelector(".ket-binary"), m = e.querySelector(".ket-decimal"), y = e.querySelector(".amplitude-real"), x = e.querySelector(".amplitude-imag"), P = e.querySelector(".probability"), T = e.querySelector(".phase");
    h && (h.textContent = t.toString(2).padStart(d, "0")), m && (m.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), x && (x.textContent = `${this.forceSigned(i.imag, 5)}i`), P && (P.textContent = `${this.forceSigned(l * l * 100, 4)}%`), T && (T.textContent = `${this.forceSigned(c, 2)}\xB0`);
    let A = document.createElement("div");
    return A.appendChild(e.cloneNode(true)), A.innerHTML;
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
}, "fr");
u(fr, "CircleNotationOldElement"), z([q], fr.prototype, "qubitCount", 2), z([q], fr.prototype, "size", 2), z([q], fr.prototype, "magnitudes", 2), z([q], fr.prototype, "phases", 2), z([q], fr.prototype, "multiQubits", 2), z([q], fr.prototype, "showKets", 2), z([Bt], fr.prototype, "qubitCircles", 2), z([Bt], fr.prototype, "qubitCircleGroups", 2), z([Bt], fr.prototype, "visibleQubitCircleGroups", 2);
ne(fr);
var Il = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
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
    return re.notNull(e), e;
  }
  initPopup() {
    this.popup = wt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
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
    re.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return ee(Z`${t}`, i), i;
  }
}, "Il");
u(Il, "InspectorButtonElement");
ne(Il);
var Pt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return Uu(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Fr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Sn(e)) {
      let t = $i(e.angle);
      Eo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ya(e) || Za(e) || Ja(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
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
    ee(Z`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!Al(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!Al(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    re.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Wu(e)) {
      let t, i = $i(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), $u(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Fu(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    re.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Dp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Pt");
u(Pt, "OperationInspectorElement"), z([Oe], Pt.prototype, "ifInput", 2), z([Oe], Pt.prototype, "angleInputLabel", 2), z([Oe], Pt.prototype, "angleInput", 2), z([Oe], Pt.prototype, "angleSlider", 2), z([Oe], Pt.prototype, "denominatorInput", 2), z([Oe], Pt.prototype, "denominatorVariableLabel", 2), z([Oe], Pt.prototype, "denominatorLabel", 2), z([Oe], Pt.prototype, "reduceAngleFractionCheckbox", 2), z([Oe], Pt.prototype, "flagInput", 2), z([q], Pt.prototype, "conditionalGatePaneDisabled", 2), z([q], Pt.prototype, "anglePaneDisabled", 2), z([q], Pt.prototype, "conditionalFlagPaneDisabled", 2);
ne(Pt);
var sd = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var ld = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
    this.runCircuitButtonMachine = gt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, d = this.getBoundingClientRect(), h = d.left + window.pageXOffset, m = d.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (h + c)}px`, i.style.top = `${t.clientY - (m + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = at(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${et(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    ee(Z`<style>
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
    return Z([sd]);
  }
  get tailSpinIcon() {
    return Z([ld]);
  }
}, "Wn");
u(Wn, "RunCircuitButtonElement"), z([q], Wn.prototype, "running", 2), z([q], Wn.prototype, "debug", 2), z([Oe], Wn.prototype, "body", 2), z([Oe], Wn.prototype, "ripple", 2);
ne(Wn);
var un = /* @__PURE__ */ __name(class extends HTMLElement {
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
    ee(Z`<style>
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
}, "un");
u(un, "CircuitBlockElement"), z([q], un.prototype, "comment", 2), z([q], un.prototype, "finalized", 2), un = z([ne], un);
var cd = Bi(za(), 1);
var ud = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var zl = u((r) => r != null && r instanceof Et, "isCircuitDropzoneElement");
var To;
var Et = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ra(this, To, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = gt({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      re.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      re.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
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
    this.circuitDropzoneService = at(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = na(this, To, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: e }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: e }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = ta(this, To)) == null || e.abort();
  }
  update() {
    ee(Z`<style>
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, cd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    return Z([ud]);
  }
}, "Et");
u(Et, "CircuitDropzoneElement"), To = /* @__PURE__ */ new WeakMap(), z([q], Et.prototype, "operationName", 2), z([q], Et.prototype, "inputWireQuantum", 2), z([q], Et.prototype, "outputWireQuantum", 2), z([q], Et.prototype, "connectTop", 2), z([q], Et.prototype, "connectBottom", 2), z([q], Et.prototype, "shadow", 2), z([q], Et.prototype, "debug", 2);
ne(Et);
var cn = u((r) => r != null && r instanceof Dt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let d = e(i, l, c), h = t.get(d);
  return h ? h.push(i) : t.set(d, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Dt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = gt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      re.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = at(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${et(e.value)}`);
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
    ee(Z`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
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
        c.operation.enable(), c.connectTop = i.some((h) => this.bit(h) < this.bit(c)), c.connectBottom = i.some((h) => this.bit(h) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let d = Math.min(...l), h = Math.max(...l);
        d < this.bit(c) && this.bit(c) < h && (c.connectTop = true, c.connectBottom = true);
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
      let c = t.filter((d) => {
        if (!Eo(d.operation))
          throw new Error(`${d.operation} isn't a phase-gate element.`);
        return l.angle === d.operation.angle;
      }).map((d) => this.bit(d));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((d) => d < this.bit(i)), i.connectBottom = c.some((d) => d > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((m) => m.connectTop || m.connectBottom).map((m) => this.bit(m)), d = Math.min(...c), h = Math.max(...c);
      d < this.bit(i) && this.bit(i) < h && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let d = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? d.disable() : (d.enable(), c.connectTop = i.some((h) => this.bit(c) > h), c.connectBottom = i.some((h) => this.bit(c) < h));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((x) => x.operationName))], c = this.numControlGateDropzones(e, l), d = i.map((x) => this.bit(x)), h = c === null ? d : d.slice(0, c), m = t.map((x) => this.bit(x)), y = h.concat(m);
    for (let [x, P] of Object.entries(i)) {
      let T = P.operation;
      P.connectBottom = y.some((A) => this.bit(P) < A), P.connectTop = y.some((A) => this.bit(P) > A), c === null || c !== null && parseInt(x) < c ? T.enable() : (P.connectTop = Math.max(...y) > this.bit(P), T.disable());
    }
    for (let x of t) {
      if (!Cn(x.operation))
        throw new Error(`${x.operation} isn't controllable.`);
      x.operation.controls = this.controlBits(x, d, e), x.connectTop = y.some((P) => P < this.bit(x)), x.connectBottom = y.some((P) => P > this.bit(x));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((m) => Ml(m.operation) && !m.operation.disabled).map((m) => this.bit(m)), l = t.map((m) => this.bit(m)), c = i.concat(l), d = Math.min(...c), h = Math.max(...c);
    for (let m of this.freeDropzones)
      d < this.bit(m) && this.bit(m) < h && (m.connectTop = true, m.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return re.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return re.notNull(t), t;
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
    let e = new Et();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new Et();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && Ml(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, d = 0, h = 0, m = 0, y = 0, x = 0, P = 0;
    return this.dropzones.filter((T) => T.occupied).filter((T) => Cn(T.operation)).filter((T) => e === void 0 ? true : Xp(T.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Yp(T.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : Zp(T.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Jp(T.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : Eo(T.operation) ? (d += 1, e.maxCphaseTargetGates !== 0 && d > e.maxCphaseTargetGates ? false : !e.disableCphase) : Kp(T.operation) ? (h += 1, e.maxCtTargetGates !== 0 && h > e.maxCtTargetGates ? false : !e.disableCt) : Qp(T.operation) ? (m += 1, e.maxCrnotTargetGates !== 0 && m > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ya(T.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : Za(T.operation) ? (x += 1, e.maxCryTargetGates !== 0 && x > e.maxCryTargetGates ? false : !e.disableCry) : Ja(T.operation) ? (P += 1, e.maxCrzTargetGates !== 0 && P > e.maxCrzTargetGates ? false : !e.disableCrz) : ed(T.operation) ? !e.disableCswap : true);
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
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, m] of Ge(d, (y) => y.controls.toString())) {
              let y = m[0], x = y.operationType, P = m.map((A) => A.bit), T = { type: x, targets: P };
              c !== "" && (T.if = c), h !== "" && (T.controls = y.controls), e.push(T);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, m] of Ge(d, (y) => y.controls.toString())) {
              let y = m[0], x = y.operationType, P = m.map((A) => A.bit), T = { type: x, targets: P };
              c !== "" && (T.if = c), h !== "" && (T.controls = y.controls), e.push(T);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, m] of Ge(d, (y) => y.controls.toString())) {
              let y = m[0], x = y.operationType, P = m.map((A) => A.bit), T = { type: x, targets: P };
              c !== "" && (T.if = c), h !== "" && (T.controls = y.controls), e.push(T);
            }
          break;
        }
        case dr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, m] of Ge(d, (y) => y.controls.toString())) {
              let y = m[0], x = y.operationType, P = m.map((A) => A.bit), T = { type: x, targets: P };
              c !== "" && (T.if = c), h !== "" && (T.controls = y.controls), e.push(T);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, m] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(m, (P) => P.controls.toString())) {
                let P = x[0], T = P.operationType, A = x.map((S) => S.bit), D = { type: T, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = P.controls), e.push(D);
              }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, m] of Ge(d, (y) => y.controls.toString())) {
              let y = m[0], x = y.operationType, P = m.map((A) => A.bit), T = { type: x, targets: P };
              c !== "" && (T.if = c), h !== "" && (T.controls = y.controls), e.push(T);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, m] of Ge(d, (y) => y.controls.toString())) {
              let y = m[0], x = y.operationType, P = m.map((A) => A.bit), T = { type: x, targets: P };
              c !== "" && (T.if = c), h !== "" && (T.controls = y.controls), e.push(T);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, m] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(m, (P) => P.controls.toString())) {
                let P = x[0], T = P.operationType, A = x.map((S) => S.bit), D = { type: T, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = P.controls), e.push(D);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, m] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(m, (P) => P.controls.toString())) {
                let P = x[0], T = P.operationType, A = x.map((S) => S.bit), D = { type: T, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = P.controls), e.push(D);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, m] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(m, (P) => P.controls.toString())) {
                let P = x[0], T = P.operationType, A = x.map((S) => S.bit), D = { type: T, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = P.controls), e.push(D);
              }
          break;
        }
        case lr: {
          let l = i.filter((m) => !m.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, d = l[0].controls, h = { type: c, targets: [l[0].bit, l[1].bit] };
          d !== void 0 && d.length > 0 && (h.controls = d), e.push(h);
          break;
        }
        case $t: {
          let l = i.filter((d) => !d.disabled);
          if (l.length < 2 || this.operations.some((d) => Cn(d) && d.controls.length > 0))
            break;
          let c = l.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case it: {
          let l = i, c = i.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Ft: {
          let l = i;
          for (let [, c] of Ge(l, (d) => d.value)) {
            let d = c.map((h) => h.bit);
            e.push({ type: c[0].operationType, targets: d });
          }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.flag)) {
            let h = d.map((x) => x.bit), y = { type: d[0].operationType, targets: h };
            c !== "" && (y.flag = c), e.push(y);
          }
          break;
        }
        default:
          throw new xt("Unrecognized operation", { klass: t });
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
}, "Dt");
u(Dt, "CircuitStepElement"), z([q], Dt.prototype, "active", 2), z([q], Dt.prototype, "breakpoint", 2), z([q], Dt.prototype, "shadow", 2), z([q], Dt.prototype, "keep", 2), z([q], Dt.prototype, "debug", 2);
ne(Dt);
var xi = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = gt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
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
        re.notNull(c);
        let d = this.circuit.addShadowStepAfter(c), h = d.dropzones[l.wireIndex];
        re.notNull(h), h.append(i), h.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d.dropzones);
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
      zp(i) && i.initMenu();
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
    this.circuitEditorService = at(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${et(e.value)}`);
    });
  }
  connectedCallback() {
    this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable);
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
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
    if (!Sn(t))
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
    if (re.notNull(i), !Sn(i))
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
    if (!cn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!cn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!cn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, d = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: d });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!cn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!cn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "xi");
u(xi, "CircuitEditorElement"), z([q], xi.prototype, "debug", 2), z([Oe], xi.prototype, "circuit", 2), z([Oe], xi.prototype, "inspectorButton", 2);
ne(xi);
var Oo;
var Dl = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ra(this, Oo, null);
  }
  connectedCallback() {
    let { signal: e } = na(this, Oo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = ta(this, Oo)) == null || e.abort();
  }
  update() {
    ee(Z`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, Cl(e) && e.initHelp();
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
    this.assertOperation(i), Cl(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!ut(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "Dl");
u(Dl, "PaletteDropzoneElement"), Oo = /* @__PURE__ */ new WeakMap();
ne(Dl);
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
    this.quantumCircuitMachine = gt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
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
    return this.steps.find((t) => t.active) || null;
  }
  fetchStepIndex(e) {
    let t = this.steps.indexOf(e);
    return re.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
      this.append(new Dt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return re.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new Dt();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      re.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    ee(Z`<slot></slot>`, this.shadowRoot);
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
      let d = e[0];
      i = d.targets, l = d.disabled;
    }
    let c = this.applyOperationToTargets(() => {
      let d = new nr();
      return d.angle = t, l && d.disable(), d;
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
    let t = this.applyOperationToTargets(() => new $t(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new it(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Ft();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new rr(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...t) {
    let i = Math.max(...t) + 1, l = this.appendStepWithDropzones(i);
    for (let c of t) {
      let d = e();
      l.dropzoneAt(c).put(d);
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
      i.dropzoneAt(l).put(new $t());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), d = l.concat(c), h = Math.max(...d) + 1, m = this.appendStepWithDropzones(h);
    for (let y of l)
      m.dropzoneAt(y).put(new $t());
    for (let y of c)
      m.dropzoneAt(y).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(m);
  }
  appendStep() {
    let e = new Dt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Dt();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new Et();
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
      let d = this.appendStep();
      l && (d.keep = true, l = false);
      for (let h of c) {
        switch (true) {
          case /^\|0>$/.test(h): {
            let m = new Ft();
            m.value = "0", d.appendOperation(m);
            break;
          }
          case /^\|1>$/.test(h): {
            let m = new Ft();
            m.value = "1", d.appendOperation(m);
            break;
          }
          case /^H/.test(h): {
            let m = new tr();
            m.if = this.ifVariable(h.slice(1)), d.appendOperation(m);
            break;
          }
          case (/^X$/.test(h) || /^X<(.+)$/.test(h)): {
            let m = new cr();
            m.if = h.slice(2).trim(), d.appendOperation(m);
            break;
          }
          case /^Y/.test(h): {
            let m = new pr();
            m.if = this.ifVariable(h.slice(1)), d.appendOperation(m);
            break;
          }
          case /^Z/.test(h): {
            let m = new dr();
            m.if = this.ifVariable(h.slice(1)), d.appendOperation(m);
            break;
          }
          case /^P/.test(h): {
            let m = new nr();
            m.angle = this.angleParameter(h.slice(1)), d.appendOperation(m);
            break;
          }
          case /^T/.test(h): {
            let m = new ur();
            m.if = this.ifVariable(h.slice(1)), d.appendOperation(m);
            break;
          }
          case /^X\^½/.test(h): {
            let m = new ir();
            m.if = this.ifVariable(h.slice(3)), d.appendOperation(m);
            break;
          }
          case /^Rx/.test(h): {
            let m = new or();
            m.angle = this.angleParameter(h.slice(2)), d.appendOperation(m);
            break;
          }
          case /^Ry/.test(h): {
            let m = new ar();
            m.angle = this.angleParameter(h.slice(2)), d.appendOperation(m);
            break;
          }
          case /^Rz/.test(h): {
            let m = new sr();
            m.angle = this.angleParameter(h.slice(2)), d.appendOperation(m);
            break;
          }
          case /^Swap$/.test(h): {
            let m = new lr();
            d.appendOperation(m);
            break;
          }
          case /^•$/.test(h): {
            let m = new $t();
            d.appendOperation(m);
            break;
          }
          case /^Bloch$/.test(h): {
            let m = new it();
            d.appendOperation(m);
            break;
          }
          case /^Measure/.test(h): {
            let m = new rr(), y = ((/^>(.+)$/.exec(h.slice(7)) || [])[1] || "").trim();
            m.flag = y, d.appendOperation(m);
            break;
          }
          case /^[[{](.+)$/.test(h): {
            let m = h.slice(1);
            d.remove(), t = new un(), t.comment = m, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(h): {
            d.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (h !== 1)
              throw new Error(`Unknown operation: ${h}`);
            d.appendDropzone();
          }
        }
        d.updateOperationAttributes();
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
        let c = i.dropzones.filter((d) => d.operationName === "swap-gate");
        if (c.length === 2) {
          let d = c.map((x) => i.bit(x)), h = i.bit(l), m = d[0] === h ? d[1] : d[0], y = i.dropzoneAt(m);
          l.inputWireQuantum = t, l.outputWireQuantum = y.inputWireQuantum, t = y.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!cn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!zl(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    re.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
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
    zl(l) && t.push(l);
    for (let [c, d] of Object.entries(this.dropzones)) {
      let h = d.snapTarget, m = this.isVertical ? h.y : h.x, y = this.isVertical ? h.x : h.y, x = parseInt(c) % this.wireCount, P = m - e.snapRange * 0.75, T = m + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: y, y: P }) : i.push({ x: P, y }), this.snapTargets[P] === void 0 && (this.snapTargets[P] = {}), this.snapTargets[P][y] === void 0 && (this.snapTargets[P][y] = { dropzone: null, stepIndex: -1, wireIndex: x })), this.isVertical ? i.push({ x: y, y: T }) : i.push({ x: T, y }), this.snapTargets[T] === void 0 && (this.snapTargets[T] = {}), this.snapTargets[T][y] === void 0 && (this.snapTargets[T][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: x }), (!d.occupied || d === l) && i.push(h), this.snapTargets[m] === void 0 && (this.snapTargets[m] = {}), this.snapTargets[m][y] === void 0 && (this.snapTargets[m][y] = { dropzone: d, stepIndex: null, wireIndex: x });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    re.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let d in c) {
          let h = c[d];
          h.stepIndex !== null && (h.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let d = c.snapTarget, h = this.isVertical ? d.y : d.x, m = this.isVertical ? d.x : d.y;
      re.notNull(this.snapTargets[h]), this.snapTargets[h][m] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), z([q], se.prototype, "minStepCount", 2), z([q], se.prototype, "minWireCount", 2), z([q], se.prototype, "maxWireCount", 2), z([q], se.prototype, "editing", 2), z([q], se.prototype, "updateUrl", 2), z([q], se.prototype, "json", 2), z([q], se.prototype, "circuitTitle", 2), z([q], se.prototype, "debug", 2), z([q], se.prototype, "chDisabled", 2), z([q], se.prototype, "chMaxControlGates", 2), z([q], se.prototype, "chMaxTargetGates", 2), z([q], se.prototype, "cnotDisabled", 2), z([q], se.prototype, "cnotMaxControlGates", 2), z([q], se.prototype, "cnotMaxTargetGates", 2), z([q], se.prototype, "cyDisabled", 2), z([q], se.prototype, "cyMaxControlGates", 2), z([q], se.prototype, "cyMaxTargetGates", 2), z([q], se.prototype, "czDisabled", 2), z([q], se.prototype, "czMaxControlGates", 2), z([q], se.prototype, "czMaxTargetGates", 2), z([q], se.prototype, "cphaseDisabled", 2), z([q], se.prototype, "cphaseMaxControlGates", 2), z([q], se.prototype, "cphaseMaxTargetGates", 2), z([q], se.prototype, "ctDisabled", 2), z([q], se.prototype, "ctMaxControlGates", 2), z([q], se.prototype, "ctMaxTargetGates", 2), z([q], se.prototype, "crnotDisabled", 2), z([q], se.prototype, "crnotMaxControlGates", 2), z([q], se.prototype, "crnotMaxTargetGates", 2), z([q], se.prototype, "crxDisabled", 2), z([q], se.prototype, "crxMaxControlGates", 2), z([q], se.prototype, "crxMaxTargetGates", 2), z([q], se.prototype, "cryDisabled", 2), z([q], se.prototype, "cryMaxControlGates", 2), z([q], se.prototype, "cryMaxTargetGates", 2), z([q], se.prototype, "crzDisabled", 2), z([q], se.prototype, "crzMaxControlGates", 2), z([q], se.prototype, "crzMaxTargetGates", 2), z([q], se.prototype, "cswapDisabled", 2), z([q], se.prototype, "cswapMaxControlGates", 2), z([q], se.prototype, "swapDisabled", 2), z([q], se.prototype, "controlControlDisabled", 2), z([q], se.prototype, "controlControlMaxTargetGates", 2), z([q], se.prototype, "phasePhaseDisabled", 2), z([q], se.prototype, "phasePhaseMaxTargetGates", 2), z([Bt], se.prototype, "blocks", 2);
ne(se);
var pn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-init", this.run), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
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
        for (let d in t.blochVectors) {
          let h = parseInt(d), m = c.dropzoneAt(h).operation;
          if (td(m)) {
            let y = t.blochVectors[h];
            m.x = y[0], m.y = y[1], m.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d = t.measuredBits;
          for (let h in d) {
            let m = parseInt(h), y = c.dropzoneAt(m).operation;
            rd(y) && (y.value = d[m].toString());
          }
        }
        for (let d of c.dropzones) {
          let h = d.operation;
          !Fr(h) || h.if !== "" && (h.disabled = !t.flags[h.if]);
        }
        if (i === t.step) {
          let d = {};
          for (let h in t.amplitudes) {
            let m = t.amplitudes[h];
            d[h] = new Yt(m[0], m[1]);
          }
          (l = this.circleNotation) == null || l.setAmplitudes(d);
        }
        break;
      }
      case "finish": {
        for (let c of this.runCircuitButtons)
          c.running = false;
        break;
      }
      default:
        throw new xt("Unknown service worker message", { data: t });
    }
  }
  run() {
    let e = this.activeStepIndex, t = this.circuit.serialize();
    re.need(t.length > 0, "non-zero step length");
    let i = Math.max(...t.map((c) => Math.max(...c.map((d) => {
      let h = [];
      return Cn(d) && (h = d.controls), Math.max(...d.targets.concat(h));
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
    re.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "pn");
u(pn, "QuantumSimulatorElement"), z([q], pn.prototype, "updateUrl", 2), z([Oe], pn.prototype, "circuit", 2), z([Oe], pn.prototype, "circleNotation", 2), z([Bt], pn.prototype, "runCircuitButtons", 2), z([Co(10)], pn.prototype, "run", 1);
ne(pn);

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
  Yt as Complex
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
 * @license Fraction.js v4.1.2 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=application.js.map
