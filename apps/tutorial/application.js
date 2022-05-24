var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var zf = Object.create;
var Bi = Object.defineProperty;
var ju = Object.getOwnPropertyDescriptor;
var Rf = Object.getOwnPropertyNames;
var Nf = Object.getPrototypeOf;
var Gf = Object.prototype.hasOwnProperty;
var qf = /* @__PURE__ */ __name((r) => Bi(r, "__esModule", { value: true }), "qf");
var u = /* @__PURE__ */ __name((r, e) => Bi(r, "name", { value: e, configurable: true }), "u");
var Ts = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "Ts");
var Lf = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of Rf(e))
      !Gf.call(r, l) && (t || l !== "default") && Bi(r, l, { get: () => e[l], enumerable: !(i = ju(e, l)) || i.enumerable });
  return r;
}, "Lf");
var Hi = /* @__PURE__ */ __name((r, e) => Lf(qf(Bi(r != null ? zf(Nf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Hi");
var I = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? ju(e, t) : e, c = r.length - 1, d; c >= 0; c--)
    (d = r[c]) && (l = (i ? d(e, t, l) : d(l)) || l);
  return i && l && Bi(e, t, l), l;
}, "I");
var Bu = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "Bu");
var na = /* @__PURE__ */ __name((r, e, t) => (Bu(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "na");
var ia = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "ia");
var oa = /* @__PURE__ */ __name((r, e, t, i) => (Bu(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "oa");
var $u = Ts((Cs, Hu) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(S) {
      function M() {
        var k = Error.apply(this, arguments);
        k.name = this.name = S, this.stack = k.stack, this.message = k.message;
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
    function v(S) {
      for (var M = {}, _ = S, k = 2, L = 4; L <= _; ) {
        for (; _ % k === 0; )
          _ /= k, M[k] = (M[k] || 0) + 1;
        L += 1 + 2 * k++;
      }
      return _ !== S ? _ > 1 && (M[_] = (M[_] || 0) + 1) : M[S] = (M[S] || 0) + 1, M;
    }
    __name(v, "v");
    u(v, "factorize");
    var y = u(function(S, M) {
      var _ = 0, k = 1, L = 1, E = 0, B = 0, R = 0, X = 1, V = 1, H = 0, W = 1, ie = 1, oe = 1, U = 1e7, ce;
      if (S != null)
        if (M !== void 0)
          _ = S, k = M, L = _ * k;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (_ = S.n, k = S.d, "s" in S && (_ *= S.s)) : 0 in S ? (_ = S[0], 1 in S && (k = S[1])) : h(), L = _ * k;
              break;
            }
            case "number": {
              if (S < 0 && (L = S, S = -S), S % 1 === 0)
                _ = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); W <= U && oe <= U; )
                  if (ce = (H + ie) / (W + oe), S === ce) {
                    W + oe <= U ? (_ = H + ie, k = W + oe) : oe > W ? (_ = ie, k = oe) : (_ = H, k = W);
                    break;
                  } else
                    S > ce ? (H += ie, W += oe) : (ie += H, oe += W), W > U ? (_ = ie, k = oe) : (_ = H, k = W);
                _ *= V;
              } else
                (isNaN(S) || isNaN(M)) && (k = _ = NaN);
              break;
            }
            case "string":
              if (W = S.match(/\d+|./g), W === null && h(), W[H] === "-" ? (L = -1, H++) : W[H] === "+" && H++, W.length === H + 1 ? B = d(W[H++], L) : W[H + 1] === "." || W[H] === "." ? (W[H] !== "." && (E = d(W[H++], L)), H++, (H + 1 === W.length || W[H + 1] === "(" && W[H + 3] === ")" || W[H + 1] === "'" && W[H + 3] === "'") && (B = d(W[H], L), X = Math.pow(10, W[H].length), H++), (W[H] === "(" && W[H + 2] === ")" || W[H] === "'" && W[H + 2] === "'") && (R = d(W[H + 1], L), V = Math.pow(10, W[H + 1].length) - 1, H += 3)) : W[H + 1] === "/" || W[H + 1] === ":" ? (B = d(W[H], L), X = d(W[H + 2], 1), H += 3) : W[H + 3] === "/" && W[H + 1] === " " && (E = d(W[H], L), B = d(W[H + 2], L), X = d(W[H + 4], 1), H += 5), W.length <= H) {
                k = X * V, L = _ = R + k * E + V * B;
                break;
              }
            default:
              h();
          }
      if (k === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(_), t.d = Math.abs(k);
    }, "parse");
    function x(S, M, _) {
      for (var k = 1; M > 0; S = S * S % _, M >>= 1)
        M & 1 && (k = k * S % _);
      return k;
    }
    __name(x, "x");
    u(x, "modpow");
    function O(S, M) {
      for (; M % 2 === 0; M /= 2)
        ;
      for (; M % 5 === 0; M /= 5)
        ;
      if (M === 1)
        return 0;
      for (var _ = 10 % M, k = 1; _ !== 1; k++)
        if (_ = _ * 10 % M, k > e)
          return 0;
      return k;
    }
    __name(O, "O");
    u(O, "cycleLen");
    function C(S, M, _) {
      for (var k = 1, L = x(10, _, M), E = 0; E < 300; E++) {
        if (k === L)
          return E;
        k = k * 10 % M, L = L * 10 % M;
      }
      return 0;
    }
    __name(C, "C");
    u(C, "cycleStart");
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
      var _ = v(this.n), k = v(this.d), L = 1, E = 1;
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
      for (var B in k)
        if (B !== "1") {
          if (k[B] *= t.n, k[B] % t.d === 0)
            k[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, k[B]);
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
      for (var k = 0; k < M.length; k++) {
        var L = _(M.slice(0, k + 1));
        if (L.sub(this.abs()).abs().valueOf() < S)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(S, M) {
      return y(S, M), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var M, _ = "", k = this.n, L = this.d;
      return this.s < 0 && (_ += "-"), L === 1 ? _ += k : (S && (M = Math.floor(k / L)) > 0 && (_ += M, _ += " ", k %= L), _ += k, _ += "/", _ += L), _;
    }, toLatex: function(S) {
      var M, _ = "", k = this.n, L = this.d;
      return this.s < 0 && (_ += "-"), L === 1 ? _ += k : (S && (M = Math.floor(k / L)) > 0 && (_ += M, k %= L), _ += "\\frac{", _ += k, _ += "}{", _ += L, _ += "}"), _;
    }, toContinued: function() {
      var S, M = this.n, _ = this.d, k = [];
      if (isNaN(M) || isNaN(_))
        return k;
      do
        k.push(Math.floor(M / _)), S = M % _, M = _, _ = S;
      while (M !== 1);
      return k;
    }, toString: function(S) {
      var M, _ = this.n, k = this.d;
      if (isNaN(_) || isNaN(k))
        return "NaN";
      S = S || 15;
      var L = O(_, k), E = C(_, k, L), B = this.s === -1 ? "-" : "";
      if (B += _ / k | 0, _ %= k, _ *= 10, _ && (B += "."), L) {
        for (var R = E; R--; )
          B += _ / k | 0, _ %= k, _ *= 10;
        B += "(";
        for (var R = L; R--; )
          B += _ / k | 0, _ %= k, _ *= 10;
        B += ")";
      } else
        for (var R = S; _ && R--; )
          B += _ / k | 0, _ %= k, _ *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return D;
    }) : typeof Cs == "object" ? (Object.defineProperty(D, "__esModule", { value: true }), D.default = D, D.Fraction = D, Hu.exports = D) : r.Fraction = D;
  })(Cs);
});
var za = Ts((Lc, nl) => {
  (function(r) {
    typeof Lc == "object" && typeof nl != "undefined" ? nl.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    }, "s"), v = u(function(n) {
      return typeof n == "function";
    }, "l"), y = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return h(n) && n.nodeType === 11;
    }, object: h, func: v, number: function(n) {
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
      return h(n) && n.length !== void 0 && v(n.splice);
    } };
    c.default = y;
    var x = {};
    function O(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(O, "O");
    u(O, "f");
    function C(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p = s === "x" ? "y" : "x";
          o.page[p] = a.coords.start.page[p], o.client[p] = a.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    __name(C, "C");
    u(C, "d"), Object.defineProperty(x, "__esModule", { value: true }), x.default = void 0;
    var A = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = A.draggable, o.map.drag = A, o.methodDict.drag = "draggable", s.actions.drag = A.defaults;
    }, listeners: { "interactions:before-action-move": O, "interactions:action-resume": O, "interactions:action-move": C, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: O, move: C, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
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
    var k = M;
    S.default = k;
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
            var g = H(p), m = H(f);
            if (g !== p.ownerDocument)
              if (m !== p.ownerDocument)
                if (g !== m) {
                  a = a.length ? a : W(f);
                  var b = void 0;
                  if (f instanceof S.default.HTMLElement && p instanceof S.default.SVGElement && !(p instanceof S.default.SVGSVGElement)) {
                    if (p === m)
                      continue;
                    b = p.ownerSVGElement;
                  } else
                    b = p;
                  for (var w = W(b, f.ownerDocument), T = 0; w[T] && w[T] === a[T]; )
                    T++;
                  var P = [w[T - 1], w[T], a[T]];
                  if (P[0])
                    for (var N = P[0].lastChild; N; ) {
                      if (N === P[1]) {
                        o = s, a = w;
                        break;
                      }
                      if (N === P[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  q = p, z = f, (parseInt(e.getWindow(q).getComputedStyle(q).zIndex, 10) || 0) >= (parseInt(e.getWindow(z).getComputedStyle(z).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var q, z;
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
      }(p) || function(g, m) {
        if (g) {
          if (typeof g == "string")
            return Re(g, m);
          var b = Object.prototype.toString.call(g).slice(8, -1);
          return b === "Object" && g.constructor && (b = g.constructor.name), b === "Map" || b === "Set" ? Array.from(g) : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? Re(g, m) : void 0;
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
          var m = Ye(g).map(function(b) {
            return "".concat(o).concat(b);
          });
          n(m, a[g], s);
        }
      return s;
    }, "n"), "t");
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: true }), Ke.default = void 0, Ke.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var qt = {};
    function It(n, o) {
      for (var a in o) {
        var s = It.prefixedPropREs, p = false;
        for (var f in s)
          if (a.indexOf(f) === 0 && s[f].test(a)) {
            p = true;
            break;
          }
        p || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    __name(It, "It");
    u(It, "X"), Object.defineProperty(qt, "__esModule", { value: true }), qt.default = void 0, It.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var kr = It;
    qt.default = kr;
    var K = {};
    function Tt(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    __name(Tt, "Tt");
    u(Tt, "W");
    function Ct(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Ct, "Ct");
    u(Ct, "L");
    function Dr(n, o) {
      return o = o || { x: 0, y: 0 }, L.default.isOperaMobile && Tt(n) ? (Ct("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Ct("page", n, o), o;
    }
    __name(Dr, "Dr");
    u(Dr, "U");
    function Xt(n, o) {
      return o = o || {}, L.default.isOperaMobile && Tt(n) ? Ct("screen", n, o) : Ct("client", n, o), o;
    }
    __name(Xt, "Xt");
    u(Xt, "V");
    function hr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(hr, "hr");
    u(hr, "N");
    function mr(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var f in o)
        o[f] /= n.length;
      return o;
    }
    __name(mr, "mr");
    u(mr, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, K.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.isNativePointer = Tt, K.getXY = Ct, K.getPageXY = Dr, K.getClientXY = Xt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? mr(o) : o[0];
      Dr(s, n.page), Xt(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = hr, K.pointerAverage = mr, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = hr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), f = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: f, width: p - a, height: f - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = hr(n), f = p[0][a] - p[1][a], g = p[0][s] - p[1][s];
      return (0, Ke.default)(f, g);
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
      return qt.default;
    } });
    var Lt = {};
    function Vn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Vn, "Vn");
    u(Vn, "G");
    function kt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(kt, "kt");
    u(kt, "H"), Object.defineProperty(Lt, "__esModule", { value: true }), Lt.BaseEvent = void 0;
    var fn = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), kt(this, "type", void 0), kt(this, "target", void 0), kt(this, "currentTarget", void 0), kt(this, "interactable", void 0), kt(this, "_interaction", void 0), kt(this, "timeStamp", void 0), kt(this, "immediatePropagationStopped", false), kt(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Vn(o.prototype, a), n;
    }();
    Lt.BaseEvent = fn, Object.defineProperty(fn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, xe.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Vr = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    xe.merge = Vr, xe.from = function(n) {
      return Vr([], n);
    };
    var Xr = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    xe.findIndex = Xr, xe.find = function(n, o) {
      return n[Xr(n, o)];
    };
    var Dt = {};
    function hn(n) {
      return (hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(hn, "hn");
    u(hn, "et");
    function vr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(vr, "vr");
    u(vr, "nt");
    function gr(n, o) {
      return (gr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(gr, "gr");
    u(gr, "rt");
    function mn(n, o) {
      return !o || hn(o) !== "object" && typeof o != "function" ? pt(n) : o;
    }
    __name(mn, "mn");
    u(mn, "ot");
    function pt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(pt, "pt");
    u(pt, "it");
    function zr(n) {
      return (zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(zr, "zr");
    u(zr, "at");
    function jt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(jt, "jt");
    u(jt, "st"), Object.defineProperty(Dt, "__esModule", { value: true }), Dt.DropEvent = void 0;
    var Xn = function(n) {
      (function(m, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        m.prototype = Object.create(b && b.prototype, { constructor: { value: m, writable: true, configurable: true } }), b && gr(m, b);
      })(g, n);
      var o, a, s, p, f = (s = g, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (m) {
          return false;
        }
      }(), function() {
        var m, b = zr(s);
        if (p) {
          var w = zr(this).constructor;
          m = Reflect.construct(b, arguments, w);
        } else
          m = b.apply(this, arguments);
        return mn(this, m);
      });
      function g(m, b, w) {
        var T;
        (function(z, $) {
          if (!(z instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, g), jt(pt(T = f.call(this, b._interaction)), "target", void 0), jt(pt(T), "dropzone", void 0), jt(pt(T), "dragEvent", void 0), jt(pt(T), "relatedTarget", void 0), jt(pt(T), "draggable", void 0), jt(pt(T), "timeStamp", void 0), jt(pt(T), "propagationStopped", false), jt(pt(T), "immediatePropagationStopped", false);
        var P = w === "dragleave" ? m.prev : m.cur, N = P.element, q = P.dropzone;
        return T.type = w, T.target = N, T.currentTarget = N, T.dropzone = q, T.dragEvent = b, T.relatedTarget = b.target, T.draggable = b.interactable, T.timeStamp = b.timeStamp, T;
      }
      __name(g, "g");
      return u(g, "a"), o = g, (a = [{ key: "reject", value: function() {
        var m = this, b = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && b.cur.dropzone === this.dropzone && b.cur.element === this.target)
          if (b.prev.dropzone = this.dropzone, b.prev.element = this.target, b.rejected = true, b.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var w = b.activeDrops, T = xe.findIndex(w, function(N) {
              var q = N.dropzone, z = N.element;
              return q === m.dropzone && z === m.target;
            });
            b.activeDrops.splice(T, 1);
            var P = new g(b, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new g(b, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && vr(o.prototype, a), g;
    }(Lt.BaseEvent);
    Dt.DropEvent = Xn;
    var Rr = {};
    function vn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, f = s.element;
        o.dropzone = p, o.target = f, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(vn, "vn");
    u(vn, "ct");
    function Ei(n, o) {
      for (var a = function(f, g) {
        for (var m = f.interactables, b = [], w = 0; w < m.list.length; w++) {
          var T = m.list[w];
          if (T.options.drop.enabled) {
            var P = T.options.drop.accept;
            if (!(c.default.element(P) && P !== g || c.default.string(P) && !R.matchesSelector(g, P) || c.default.func(P) && !P({ dropzone: T, draggableElement: g })))
              for (var N = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], q = 0; q < N.length; q++) {
                var z = N[q];
                z !== g && b.push({ dropzone: T, element: z, rect: T.getRect(z) });
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
    __name(Ei, "Ei");
    u(Ei, "ft");
    function Ao(n, o, a) {
      for (var s = n.dropState, p = n.interactable, f = n.element, g = [], m = 0; m < s.activeDrops.length; m++) {
        var b = s.activeDrops[m], w = b.dropzone, T = b.element, P = b.rect;
        g.push(w.dropCheck(o, a, p, f, T, P) ? T : null);
      }
      var N = R.indexOfDeepestElement(g);
      return s.activeDrops[N] || null;
    }
    __name(Ao, "Ao");
    u(Ao, "dt");
    function Si(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new Dt.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new Dt.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new Dt.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new Dt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new Dt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new Dt.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(Si, "Si");
    u(Si, "pt");
    function Ti(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, f = a.prev;
      o.leave && f.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && vn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(Ti, "Ti");
    u(Ti, "vt");
    function _o(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f = a.dropState;
        o.dynamicDrop && (f.activeDrops = Ei(o, a.element));
        var g = s, m = Ao(a, g, p);
        f.rejected = f.rejected && !!m && m.dropzone === f.cur.dropzone && m.element === f.cur.element, f.cur.dropzone = m && m.dropzone, f.cur.element = m && m.element, f.events = Si(a, 0, g);
      }
    }
    __name(_o, "_o");
    u(_o, "ht"), Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(x.default), s.prototype.dropzone = function(f) {
        return function(g, m) {
          if (c.default.object(m)) {
            if (g.options.drop.enabled = m.enabled !== false, m.listeners) {
              var b = (0, fe.default)(m.listeners), w = Object.keys(b).reduce(function(T, P) {
                return T[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = b[P], T;
              }, {});
              g.off(g.options.drop.listeners), g.on(w), g.options.drop.listeners = w;
            }
            return c.default.func(m.ondrop) && g.on("drop", m.ondrop), c.default.func(m.ondropactivate) && g.on("dropactivate", m.ondropactivate), c.default.func(m.ondropdeactivate) && g.on("dropdeactivate", m.ondropdeactivate), c.default.func(m.ondragenter) && g.on("dragenter", m.ondragenter), c.default.func(m.ondragleave) && g.on("dragleave", m.ondragleave), c.default.func(m.ondropmove) && g.on("dropmove", m.ondropmove), /^(pointer|center)$/.test(m.overlap) ? g.options.drop.overlap = m.overlap : c.default.number(m.overlap) && (g.options.drop.overlap = Math.max(Math.min(1, m.overlap), 0)), "accept" in m && (g.options.drop.accept = m.accept), "checker" in m && (g.options.drop.checker = m.checker), g;
          }
          return c.default.bool(m) ? (g.options.drop.enabled = m, g) : g.options.drop;
        }(this, f);
      }, s.prototype.dropCheck = function(f, g, m, b, w, T) {
        return function(P, N, q, z, $, J, F) {
          var ne = false;
          if (!(F = F || P.getRect(J)))
            return !!P.options.drop.checker && P.options.drop.checker(N, q, ne, P, J, z, $);
          var le = P.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, qe.default)(z, $, "drag"), Ee = K.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            ne = je && be;
          }
          var Ie = z.getRect($);
          if (Ie && le === "center") {
            var Jt = Ie.left + Ie.width / 2, Lr = Ie.top + Ie.height / 2;
            ne = Jt >= F.left && Jt <= F.right && Lr >= F.top && Lr <= F.bottom;
          }
          return Ie && c.default.number(le) && (ne = Math.max(0, Math.min(F.right, Ie.right) - Math.max(F.left, Ie.left)) * Math.max(0, Math.min(F.bottom, Ie.bottom) - Math.max(F.top, Ie.top)) / (Ie.width * Ie.height) >= le), P.options.drop.checker && (ne = P.options.drop.checker(N, q, ne, P, J, z, $)), ne;
        }(this, f, g, m, b, w, T);
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
        p.activeDrops = null, p.events = null, p.activeDrops = Ei(o, a.element), p.events = Si(a, 0, s), p.events.activate && (vn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": _o, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Ti(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        _o(n, o), Ti(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Ei, getDrop: Ao, getDropEvents: Si, fireDropEvents: Ti, defaults: { enabled: false, accept: null, overlap: "pointer" } }, te = j;
    Rr.default = te;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(w) {
          return w.pointer;
        }), f = s === "start", g = s === "end", m = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], f)
          a.distance = K.touchDistance(p, m), a.box = K.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(p, m), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (g) {
          var b = o.prevEvent;
          a.distance = b.distance, a.box = b.box, a.scale = b.scale, a.ds = 0, a.angle = b.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(p, m), a.box = K.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(p, m), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
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
    } }, dt = he;
    ae.default = dt;
    var ft = {};
    function Yr(n, o, a, s, p, f, g) {
      if (!o)
        return false;
      if (o === true) {
        var m = c.default.number(f.width) ? f.width : f.right - f.left, b = c.default.number(f.height) ? f.height : f.bottom - f.top;
        if (g = Math.min(g, Math.abs((n === "left" || n === "right" ? m : b) / 2)), m < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), b < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (m >= 0 ? f.left : f.right) + g;
        if (n === "top")
          return a.y < (b >= 0 ? f.top : f.bottom) + g;
        if (n === "right")
          return a.x > (m >= 0 ? f.right : f.left) - g;
        if (n === "bottom")
          return a.y > (b >= 0 ? f.bottom : f.top) - g;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : R.matchesUpTo(s, o, p));
    }
    __name(Yr, "Yr");
    u(Yr, "Pt");
    function Ci(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Ci, "Ci");
    u(Ci, "Ot"), Object.defineProperty(ft, "__esModule", { value: true }), ft.default = void 0;
    var ht = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      ht.cursors = function(f) {
        return f.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ht.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(f) {
        return function(g, m, b) {
          return c.default.object(m) ? (g.options.resize.enabled = m.enabled !== false, g.setPerAction("resize", m), g.setOnEvents("resize", m), c.default.string(m.axis) && /^x$|^y$|^xy$/.test(m.axis) ? g.options.resize.axis = m.axis : m.axis === null && (g.options.resize.axis = b.defaults.actions.resize.axis), c.default.bool(m.preserveAspectRatio) ? g.options.resize.preserveAspectRatio = m.preserveAspectRatio : c.default.bool(m.square) && (g.options.resize.square = m.square), g) : c.default.bool(m) ? (g.options.resize.enabled = m, g) : g.options.resize;
        }(this, f, n);
      }, o.map.resize = ht, o.methodDict.resize = "resizable", p.actions.resize = ht.defaults;
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
          var p = a, f = s.interactable.options.resize.invert, g = f === "reposition" || f === "negate", m = s.rect, b = s._rects, w = b.start, T = b.corrected, P = b.delta, N = b.previous;
          if ((0, U.default)(N, T), g) {
            if ((0, U.default)(T, m), f === "reposition") {
              if (T.top > T.bottom) {
                var q = T.top;
                T.top = T.bottom, T.bottom = q;
              }
              if (T.left > T.right) {
                var z = T.left;
                T.left = T.right, T.right = z;
              }
            }
          } else
            T.top = Math.min(m.top, w.bottom), T.bottom = Math.max(m.bottom, w.top), T.left = Math.min(m.left, w.right), T.right = Math.max(m.right, w.left);
          for (var $ in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            P[$] = T[$] - N[$];
          p.edges = s.prepared.edges, p.rect = T, p.deltaRect = P;
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
        var g = (0, U.default)({}, o.coords.cur.page), m = a.options.resize;
        if (m && m.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (f & m.mouseButtons) != 0)) {
          if (c.default.object(m.edges)) {
            var b = { left: false, right: false, top: false, bottom: false };
            for (var w in b)
              b[w] = Yr(w, m.edges[w], g, o._latestPointer.eventTarget, s, p, m.margin || ht.defaultMargin);
            b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (n.action = { name: "resize", edges: b });
          } else {
            var T = m.axis !== "y" && g.x > p.right - ht.defaultMargin, P = m.axis !== "x" && g.y > p.bottom - ht.defaultMargin;
            (T || P) && (n.action = { name: "resize", axes: (T ? "x" : "") + (P ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = ht.cursors, f = null;
      if (a)
        f = p[s + a];
      else if (o) {
        for (var g = "", m = ["top", "bottom", "left", "right"], b = 0; b < m.length; b++) {
          var w = m[b];
          o[w] && (g += w);
        }
        f = p[g];
      }
      return f;
    }, defaultMargin: null }, Oi = ht;
    ft.default = Oi;
    var Nr = {};
    Object.defineProperty(Nr, "__esModule", { value: true }), Nr.default = void 0;
    var Zr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(ft.default), n.usePlugin(x.default), n.usePlugin(Rr.default);
    } };
    Nr.default = Zr;
    var Bt = {};
    Object.defineProperty(Bt, "__esModule", { value: true }), Bt.default = void 0;
    var Ht, Yt, Nl = 0, fd = { request: function(n) {
      return Ht(n);
    }, cancel: function(n) {
      return Yt(n);
    }, init: function(n) {
      if (Ht = n.requestAnimationFrame, Yt = n.cancelAnimationFrame, !Ht)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Ht = n["".concat(s, "RequestAnimationFrame")], Yt = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Ht = Ht && Ht.bind(n), Yt = Yt && Yt.bind(n), Ht || (Ht = u(function(p) {
        var f = Date.now(), g = Math.max(0, 16 - (f - Nl)), m = n.setTimeout(function() {
          p(f + g);
        }, g);
        return Nl = f + g, m;
      }, "kt"), Yt = u(function(p) {
        return clearTimeout(p);
      }, "It"));
    } };
    Bt.default = fd;
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.getContainer = Io, Jr.getScroll = Pi, Jr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Jr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var f = Io(p.container, a.interactable, s), g = Pi(f);
      o();
      var m = Pi(f);
      return { x: m.x - g.x, y: m.y - g.y };
    }, Jr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, Bt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = Bt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), Bt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, f = Io(p.container, o, a), g = ue.now(), m = (g - ue.prevTime) / 1e3, b = p.speed * m;
      if (b >= 1) {
        var w = { x: ue.x * b, y: ue.y * b };
        if (w.x || w.y) {
          var T = Pi(f);
          c.default.window(f) ? f.scrollBy(w.x, w.y) : f && (f.scrollLeft += w.x, f.scrollTop += w.y);
          var P = Pi(f), N = { x: P.x - T.x, y: P.y - T.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: f });
        }
        ue.prevTime = g;
      }
      ue.isScrolling && (Bt.default.cancel(ue.i), ue.i = Bt.default.request(ue.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && ue.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ue.x = ue.y = 0;
        else {
          var s, p, f, g, m = o.interactable, b = o.element, w = o.prepared.name, T = m.options[w].autoScroll, P = Io(T.container, m, b);
          if (c.default.window(P))
            g = a.clientX < ue.margin, s = a.clientY < ue.margin, p = a.clientX > P.innerWidth - ue.margin, f = a.clientY > P.innerHeight - ue.margin;
          else {
            var N = R.getElementClientRect(P);
            g = a.clientX < N.left + ue.margin, s = a.clientY < N.top + ue.margin, p = a.clientX > N.right - ue.margin, f = a.clientY > N.bottom - ue.margin;
          }
          ue.x = p ? 1 : g ? -1 : 0, ue.y = f ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = T.margin, ue.speed = T.speed, ue.start(o));
        }
    } };
    function Io(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(Io, "Io");
    u(Io, "Ct");
    function Pi(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Pi, "Pi");
    u(Pi, "Ft");
    var hd = { id: "auto-scroll", install: function(n) {
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
    Jr.default = hd;
    var $t = {};
    Object.defineProperty($t, "__esModule", { value: true }), $t.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, $t.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, $t.sign = void 0, $t.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var ko = {};
    function md(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(md, "md");
    u(md, "Wt");
    function vd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(vd, "vd");
    u(vd, "Lt"), Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var gd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, f) {
        var g = function(m, b, w, T, P) {
          var N = m.getRect(T), q = { action: null, interactable: m, interaction: w, element: T, rect: N, buttons: b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button] };
          return P.fire("auto-start:check", q), q.action;
        }(this, s, p, f, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, g, this, f, p) : g;
      }, o.prototype.ignoreFrom = (0, $t.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, $t.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = vd, o.prototype.styleCursor = md;
    } };
    ko.default = gd;
    var Yn = {};
    function Gl(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Do(o, a, n, p) ? n : null;
    }
    __name(Gl, "Gl");
    u(Gl, "Nt");
    function bd(n, o, a, s, p, f, g) {
      for (var m = 0, b = s.length; m < b; m++) {
        var w = s[m], T = p[m], P = w.getAction(o, a, n, T);
        if (P) {
          var N = Gl(P, w, T, f, g);
          if (N)
            return { action: N, interactable: w, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(bd, "bd");
    u(bd, "qt");
    function ql(n, o, a, s, p) {
      var f = [], g = [], m = s;
      function b(T) {
        f.push(T), g.push(m);
      }
      __name(b, "b");
      for (u(b, "u"); c.default.element(m); ) {
        f = [], g = [], p.interactables.forEachMatch(m, b);
        var w = bd(n, o, a, f, g, s, p);
        if (w.action && !w.interactable.options[w.action.name].manualStart)
          return w;
        m = R.parentNode(m);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(ql, "ql");
    u(ql, "$t");
    function Ll(n, o, a) {
      var s = o.action, p = o.interactable, f = o.element;
      s = s || { name: null }, n.interactable = p, n.element = f, (0, $t.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(f) : null, Bl(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Ll, "Ll");
    u(Ll, "Gt");
    function Do(n, o, a, s) {
      var p = n.options, f = p[a.name].max, g = p[a.name].maxPerElement, m = s.autoStart.maxInteractions, b = 0, w = 0, T = 0;
      if (!(f && g && m))
        return false;
      for (var P = 0; P < s.interactions.list.length; P++) {
        var N = s.interactions.list[P], q = N.prepared.name;
        if (N.interacting() && (++b >= m || N.interactable === n && ((w += q === a.name ? 1 : 0) >= f || N.element === o && (T++, q === a.name && T >= g))))
          return false;
      }
      return m > 0;
    }
    __name(Do, "Do");
    u(Do, "Ht");
    function jl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(jl, "jl");
    u(jl, "Kt");
    function es(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(es, "es");
    u(es, "Zt");
    function Bl(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f = "";
        if (p.name) {
          var g = a.options[p.name].cursorChecker;
          f = c.default.func(g) ? g(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        es(n.element, f || "", o);
      } else
        o.autoStart.cursorElement && es(o.autoStart.cursorElement, "", o);
    }
    __name(Bl, "Bl");
    u(Bl, "Jt"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = void 0;
    var yd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(ko.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return jl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Do, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      a.interacting() || Ll(a, ql(a, s, p, f, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, f = a.pointer, g = a.event, m = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Ll(p, ql(p, f, g, m, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f = p.interactable, g = p.prepared.name;
          g && f && (f.options[g].manualStart || !Do(f, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, f, p.element), Bl(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && es(a.element, "", o);
    } }, maxInteractions: jl, withinInteractionLimit: Do, validateAction: Gl };
    Yn.default = yd;
    var zo = {};
    Object.defineProperty(zo, "__esModule", { value: true }), zo.default = void 0;
    var xd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, f = n.dy;
      if (a.prepared.name === "drag") {
        var g = Math.abs(p), m = Math.abs(f), b = a.interactable.options.drag, w = b.startAxis, T = g > m ? "x" : g < m ? "y" : "xy";
        if (a.prepared.axis = b.lockAxis === "start" ? T[0] : b.lockAxis, T !== "xy" && w !== "xy" && w !== T) {
          a.prepared.name = null;
          for (var P = s, N = function(z) {
            if (z !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && z.testIgnoreAllow($, P, s)) {
                var J = z.getAction(a.downPointer, a.downEvent, a, P);
                if (J && J.name === "drag" && function(F, ne) {
                  if (!ne)
                    return false;
                  var le = ne.options.drag.startAxis;
                  return F === "xy" || le === "xy" || le === F;
                }(T, z) && Yn.default.validateAction(J, z, P, s, o))
                  return z;
              }
            }
          }; c.default.element(P); ) {
            var q = o.interactables.forEachMatch(P, N);
            if (q) {
              a.prepared.name = "drag", a.interactable = q, a.element = P;
              break;
            }
            P = (0, R.parentNode)(P);
          }
        }
      }
    } } };
    zo.default = xd;
    var Ro = {};
    function ts(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(ts, "ts");
    u(ts, "re"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
    var wd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Yn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = ts(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      ts(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: ts };
    Ro.default = wd;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Ed = { id: "auto-start", install: function(n) {
      n.usePlugin(Yn.default), n.usePlugin(Ro.default), n.usePlugin(zo.default);
    } };
    No.default = Ed;
    var Zn = {};
    function Sd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Sd, "Sd");
    u(Sd, "le");
    function Td(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Td, "Td");
    u(Td, "ue");
    function Hl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Sd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, f) {
          var g = s.options.preventDefault;
          if (g !== "never")
            if (g !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(f.type)) {
                var m = (0, e.getWindow)(f.target).document, b = p.getDocOptions(m);
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
    __name(Hl, "Hl");
    u(Hl, "ce"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.install = Hl, Zn.default = void 0;
    var Cd = { id: "core/interactablePreventDefault", install: Hl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Td, n;
    }, {}) };
    Zn.default = Cd;
    var rs = {};
    Object.defineProperty(rs, "__esModule", { value: true }), rs.default = void 0, rs.default = {};
    var Mi, ns = {};
    Object.defineProperty(ns, "__esModule", { value: true }), ns.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Mi || (Mi = {})), Mi.touchAction, Mi.boxSizing, Mi.noListeners;
    var Od = { id: "dev-tools", install: function() {
    } };
    ns.default = Od;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = xe.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var bn = {};
    function $l(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, m = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            g = true, m = T;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw m;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Fl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Fl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name($l, "$l");
    u($l, "me");
    function Fl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Fl, "Fl");
    u(Fl, "be");
    function Pd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Pd, "Pd");
    u(Pd, "xe");
    function yn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(yn, "yn");
    u(yn, "we"), Object.defineProperty(bn, "__esModule", { value: true }), bn.getRectOffset = Wl, bn.default = void 0;
    var Md = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), yn(this, "states", []), yn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), yn(this, "startDelta", void 0), yn(this, "result", void 0), yn(this, "endResult", void 0), yn(this, "edges", void 0), yn(this, "interaction", void 0), this.interaction = s, this.result = Go();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var f = s.phase, g = this.interaction, m = function(w) {
          var T = w.interactable.options[w.prepared.name], P = T.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var q = T[N];
            return q && q.enabled && { options: q, methods: q._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(g);
        this.prepareStates(m), this.edges = (0, U.default)({}, g.edges), this.startOffset = Wl(g.rect, p), this.startDelta = { x: 0, y: 0 };
        var b = this.fillArg({ phase: f, pageCoords: p, preEnd: false });
        return this.result = Go(), this.startAll(b), this.result = this.setAll(b);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var f = this.states[p];
          f.methods.start && (s.state = f, f.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, f = s.preEnd, g = s.skipModifiers, m = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, m);
        for (var b = g ? this.states.slice(g) : this.states, w = Go(s.coords, s.rect), T = 0; T < b.length; T++) {
          var P, N = b[T], q = N.options, z = (0, U.default)({}, s.coords), $ = null;
          (P = N.methods) != null && P.set && this.shouldDo(q, f, p) && (s.state = N, $ = N.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - z.x, y: s.coords.y - z.y })), w.eventProps.push($);
        }
        w.delta.x = s.coords.x - s.pageCoords.x, w.delta.y = s.coords.y - s.pageCoords.y, w.rectDelta.left = s.rect.left - m.left, w.rectDelta.right = s.rect.right - m.right, w.rectDelta.top = s.rect.top - m.top, w.rectDelta.bottom = s.rect.bottom - m.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var ne = w.rect.left !== F.left || w.rect.right !== F.right || w.rect.top !== F.top || w.rect.bottom !== F.bottom;
          w.changed = ne || J.x !== w.coords.x || J.y !== w.coords.y;
        }
        return w;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, f = s.phase, g = p.coords.cur, m = p.coords.start, b = this.result, w = this.startDelta, T = b.delta;
        f === "start" && (0, U.default)(this.startDelta, b.delta);
        for (var P = 0; P < [[m, w], [g, T]].length; P++) {
          var N = $l([[m, w], [g, T]][P], 2), q = N[0], z = N[1];
          q.page.x += z.x, q.page.y += z.y, q.client.x += z.x, q.client.y += z.y;
        }
        var $ = this.result.rectDelta, J = s.rect || p.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, f = s.phase, g = s.preEnd, m = s.skipModifiers, b = this.setAll(this.fillArg({ preEnd: g, phase: f, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = b, !b.changed && (!m || m < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var w = p.coords.cur.page, T = { x: s.modifiedCoords.x - w.x, y: s.modifiedCoords.y - w.y };
          b.coords.x += T.x, b.coords.y += T.y, b.delta.x += T.x, b.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, f = s.event, g = this.states;
        if (g && g.length) {
          for (var m = false, b = 0; b < g.length; b++) {
            var w = g[b];
            s.state = w;
            var T = w.options, P = w.methods, N = P.beforeEnd && P.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            m = m || !m && this.shouldDo(T, true, s.phase, true);
          }
          m && p.move({ event: f, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var f = (0, U.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(f);
          for (var g = 0; g < this.states.length; g++) {
            var m = this.states[g];
            f.state = m, m.methods.stop && m.methods.stop(f);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var f = s[p], g = f.options, m = f.methods, b = f.name;
          this.states.push({ options: g, methods: m, index: p, name: b });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, f = p.coords, g = p.rect, m = p.modification;
        if (m.result) {
          for (var b = m.startDelta, w = m.result, T = w.delta, P = w.rectDelta, N = [[f.start, b], [f.cur, T]], q = 0; q < N.length; q++) {
            var z = $l(N[q], 2), $ = z[0], J = z[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          g.left -= P.left, g.right -= P.right, g.top -= P.top, g.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, f, g) {
        return !(!s || s.enabled === false || g && !s.endOnly || s.endOnly && !p || f === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, gn.default)(p);
        }), this.result = Go((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Pd(o.prototype, a), n;
    }();
    function Go(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Go, "Go");
    u(Go, "Pe");
    function Wl(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Wl, "Wl");
    u(Wl, "Oe"), bn.default = Md;
    var mt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(qo, "qo");
    u(qo, "Ee"), Object.defineProperty(mt, "__esModule", { value: true }), mt.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(f) {
        var g = f || {};
        for (var m in g.enabled = g.enabled !== false, a)
          m in g || (g[m] = a[m]);
        var b = { options: g, methods: s, name: o, enable: function() {
          return g.enabled = true, b;
        }, disable: function() {
          return g.enabled = false, b;
        } };
        return b;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    }, mt.addEventModifiers = qo, mt.default = void 0;
    var Ad = { id: "modifiers/base", before: ["actions"], install: function(n) {
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
    mt.default = Ad;
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: true }), Ai.defaults = void 0, Ai.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var _i = {};
    function Ul(n) {
      return (Ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Ul, "Ul");
    u(Ul, "ke");
    function _d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(_d, "_d");
    u(_d, "Ie");
    function Vl(n, o) {
      return (Vl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Vl, "Vl");
    u(Vl, "De");
    function Id(n, o) {
      return !o || Ul(o) !== "object" && typeof o != "function" ? Ce(n) : o;
    }
    __name(Id, "Id");
    u(Id, "Ae");
    function Ce(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Ce, "Ce");
    u(Ce, "Re");
    function is(n) {
      return (is = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(is, "is");
    u(is, "ze");
    function _e(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_e, "_e");
    u(_e, "Ce"), Object.defineProperty(_i, "__esModule", { value: true }), _i.InteractEvent = void 0;
    var Xl = function(n) {
      (function(m, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        m.prototype = Object.create(b && b.prototype, { constructor: { value: m, writable: true, configurable: true } }), b && Vl(m, b);
      })(g, n);
      var o, a, s, p, f = (s = g, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (m) {
          return false;
        }
      }(), function() {
        var m, b = is(s);
        if (p) {
          var w = is(this).constructor;
          m = Reflect.construct(b, arguments, w);
        } else
          m = b.apply(this, arguments);
        return Id(this, m);
      });
      function g(m, b, w, T, P, N, q) {
        var z;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, g), _e(Ce(z = f.call(this, m)), "target", void 0), _e(Ce(z), "currentTarget", void 0), _e(Ce(z), "relatedTarget", null), _e(Ce(z), "screenX", void 0), _e(Ce(z), "screenY", void 0), _e(Ce(z), "button", void 0), _e(Ce(z), "buttons", void 0), _e(Ce(z), "ctrlKey", void 0), _e(Ce(z), "shiftKey", void 0), _e(Ce(z), "altKey", void 0), _e(Ce(z), "metaKey", void 0), _e(Ce(z), "page", void 0), _e(Ce(z), "client", void 0), _e(Ce(z), "delta", void 0), _e(Ce(z), "rect", void 0), _e(Ce(z), "x0", void 0), _e(Ce(z), "y0", void 0), _e(Ce(z), "t0", void 0), _e(Ce(z), "dt", void 0), _e(Ce(z), "duration", void 0), _e(Ce(z), "clientX0", void 0), _e(Ce(z), "clientY0", void 0), _e(Ce(z), "velocity", void 0), _e(Ce(z), "speed", void 0), _e(Ce(z), "swipe", void 0), _e(Ce(z), "timeStamp", void 0), _e(Ce(z), "axes", void 0), _e(Ce(z), "preEnd", void 0), P = P || m.element;
        var $ = m.interactable, J = ($ && $.options || Ai.defaults).deltaSource, F = (0, qe.default)($, P, w), ne = T === "start", le = T === "end", pe = ne ? Ce(z) : m.prevEvent, Ee = ne ? m.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: m.coords.cur.timeStamp } : m.coords.cur;
        return z.page = (0, U.default)({}, Ee.page), z.client = (0, U.default)({}, Ee.client), z.rect = (0, U.default)({}, m.rect), z.timeStamp = Ee.timeStamp, le || (z.page.x -= F.x, z.page.y -= F.y, z.client.x -= F.x, z.client.y -= F.y), z.ctrlKey = b.ctrlKey, z.altKey = b.altKey, z.shiftKey = b.shiftKey, z.metaKey = b.metaKey, z.button = b.button, z.buttons = b.buttons, z.target = P, z.currentTarget = P, z.preEnd = N, z.type = q || w + (T || ""), z.interactable = $, z.t0 = ne ? m.pointers[m.pointers.length - 1].downTime : pe.t0, z.x0 = m.coords.start.page.x - F.x, z.y0 = m.coords.start.page.y - F.y, z.clientX0 = m.coords.start.client.x - F.x, z.clientY0 = m.coords.start.client.y - F.y, z.delta = ne || le ? { x: 0, y: 0 } : { x: z[J].x - pe[J].x, y: z[J].y - pe[J].y }, z.dt = m.coords.delta.timeStamp, z.duration = z.timeStamp - z.t0, z.velocity = (0, U.default)({}, m.coords.velocity[J]), z.speed = (0, Ke.default)(z.velocity.x, z.velocity.y), z.swipe = le || T === "inertiastart" ? z.getSwipe() : null, z;
      }
      __name(g, "g");
      return u(g, "a"), o = g, (a = [{ key: "getSwipe", value: function() {
        var m = this._interaction;
        if (m.prevEvent.speed < 600 || this.timeStamp - m.prevEvent.timeStamp > 150)
          return null;
        var b = 180 * Math.atan2(m.prevEvent.velocityY, m.prevEvent.velocityX) / Math.PI;
        b < 0 && (b += 360);
        var w = 112.5 <= b && b < 247.5, T = 202.5 <= b && b < 337.5;
        return { up: T, down: !T && 22.5 <= b && b < 157.5, left: w, right: !w && (292.5 <= b || b < 67.5), angle: b, speed: m.prevEvent.speed, velocity: { x: m.prevEvent.velocityX, y: m.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && _d(o.prototype, a), g;
    }(Lt.BaseEvent);
    _i.InteractEvent = Xl, Object.defineProperties(Xl.prototype, { pageX: { get: function() {
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
    var Ii = {};
    function ki(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ki, "ki");
    u(ki, "Ye"), Object.defineProperty(Ii, "__esModule", { value: true }), Ii.PointerInfo = void 0, Ii.PointerInfo = u(/* @__PURE__ */ __name(function n(o, a, s, p, f) {
      (function(g, m) {
        if (!(g instanceof m))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), ki(this, "id", void 0), ki(this, "pointer", void 0), ki(this, "event", void 0), ki(this, "downTime", void 0), ki(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = f;
    }, "n"), "t");
    var Lo, jo, zt = {};
    function kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(kd, "kd");
    u(kd, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(He, "He");
    u(He, "Ve"), Object.defineProperty(zt, "__esModule", { value: true }), Object.defineProperty(zt, "PointerInfo", { enumerable: true, get: function() {
      return Ii.PointerInfo;
    } }), zt.default = zt.Interaction = zt._ProxyMethods = zt._ProxyValues = void 0, zt._ProxyValues = Lo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Lo || (zt._ProxyValues = Lo = {})), zt._ProxyMethods = jo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(jo || (zt._ProxyMethods = jo = {}));
    var Dd = 0, Yl = function() {
      function n(s) {
        var p = this, f = s.pointerType, g = s.scopeFire;
        (function(N, q) {
          if (!(N instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, $t.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), He(this, "_id", Dd++), this._scopeFire = g, this.pointerType = f;
        var m = this;
        this._proxy = {};
        var b = u(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return m[N];
          } });
        }, "a");
        for (var w in Lo)
          b(w);
        var T = u(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return m[N].apply(m, arguments);
          } });
        }, "l");
        for (var P in jo)
          T(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, f) {
        var g = this.updatePointer(s, p, f, true), m = this.pointers[g];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: f, pointerIndex: g, pointerInfo: m, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, f) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, $t.copyAction)(this.prepared, s), this.interactable = p, this.element = f, this.rect = p.getRect(f), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, f) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, f, false);
        var g, m, b = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (g = this.coords.cur.client.x - this.coords.start.client.x, m = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ke.default)(g, m) > this.pointerMoveTolerance);
        var w = this.getPointerIndex(s), T = { pointer: s, pointerIndex: w, pointerInfo: this.pointers[w], event: p, type: "move", eventTarget: f, dx: g, dy: m, duplicate: b, interaction: this };
        b || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), b || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, f, g) {
        var m = this.getPointerIndex(s);
        m === -1 && (m = this.updatePointer(s, p, f, false));
        var b = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(b), { pointer: s, pointerIndex: m, pointerInfo: this.pointers[m], event: p, eventTarget: f, type: b, curEventTarget: g, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
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
        var m = K.getPointerId(s), b = this.getPointerIndex(s), w = this.pointers[b];
        return g = g !== false && (g || /(down|start)$/i.test(p.type)), w ? w.pointer = s : (w = new Ii.PointerInfo(m, s, p, null, null), b = this.pointers.length, this.pointers.push(w)), K.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
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
        return new _i.InteractEvent(this, s, this.prepared.name, p, this.element, f, g);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, f = s.phase, g = s.preEnd, m = s.type, b = this.rect;
        if (b && f === "move" && (ce.addEdges(this.edges, b, this.coords.delta[this.interactable.options.deltaSource]), b.width = b.right - b.left, b.height = b.bottom - b.top), this._scopeFire("interactions:before-action-".concat(f), s) === false)
          return false;
        var w = s.iEvent = this._createPreparedEvent(p, f, g, m);
        return this._scopeFire("interactions:action-".concat(f), s), f === "start" && (this.prevEvent = w), this._fireEvent(w), this._scopeFire("interactions:after-action-".concat(f), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && kd(o.prototype, a), n;
    }();
    zt.Interaction = Yl;
    var zd = Yl;
    zt.default = zd;
    var xn = {};
    function Zl(n) {
      n.pointerIsDown && (as(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(Zl, "Zl");
    u(Zl, "He");
    function Jl(n) {
      os(n.interaction);
    }
    __name(Jl, "Jl");
    u(Jl, "Ke");
    function os(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return as(n.coords.cur, o), as(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(os, "os");
    u(os, "Ze");
    function Rd(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Rd, "Rd");
    u(Rd, "Je");
    function as(n, o) {
      var a = n.page, s = n.client, p = o.x, f = o.y;
      a.x += p, a.y += f, s.x += p, s.y += f;
    }
    __name(as, "as");
    u(as, "Qe"), Object.defineProperty(xn, "__esModule", { value: true }), xn.addTotal = Zl, xn.applyPending = os, xn.default = void 0, zt._ProxyMethods.offsetBy = "";
    var Nd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Rd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Zl(n.interaction);
    }, "interactions:before-action-start": Jl, "interactions:before-action-move": Jl, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (os(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    xn.default = Nd;
    var Jn = {};
    function Gd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Gd, "Gd");
    u(Gd, "nn");
    function it(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(it, "it");
    u(it, "rn"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = Jn.InertiaState = void 0;
    var Kl = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), it(this, "active", false), it(this, "isModified", false), it(this, "smoothEnd", false), it(this, "allowResume", false), it(this, "modification", void 0), it(this, "modifierCount", 0), it(this, "modifierArg", void 0), it(this, "startCoords", void 0), it(this, "t0", 0), it(this, "v0", 0), it(this, "te", 0), it(this, "targetOffset", void 0), it(this, "modifiedOffset", void 0), it(this, "currentOffset", void 0), it(this, "lambda_v0", 0), it(this, "one_ve_v0", 0), it(this, "timeout", void 0), it(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, f = Bo(p);
        if (!f || !f.enabled)
          return false;
        var g = p.coords.velocity.client, m = (0, Ke.default)(g.x, g.y), b = this.modification || (this.modification = new bn.default(p));
        if (b.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = f.allowResume, this.v0 = m, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = b.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && m > f.minSpeed && m > f.endSpeed)
          this.startInertia();
        else {
          if (b.result = b.setAll(this.modifierArg), !b.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, f = Bo(this.interaction), g = f.resistance, m = -Math.log(f.endSpeed / this.v0) / g;
        this.targetOffset = { x: (p.x - m) / g, y: (p.y - m) / g }, this.te = m, this.lambda_v0 = g / this.v0, this.one_ve_v0 = 1 - f.endSpeed / this.v0;
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
        this.timeout = Bt.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, f, g, m, b = this, w = this.interaction, T = Bo(w).resistance, P = (w._now() - this.t0) / 1e3;
        if (P < this.te) {
          var N, q = 1 - (Math.exp(-T * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, f = this.modifiedOffset.x, g = this.modifiedOffset.y, N = { x: Ql(m = q, 0, s, f), y: Ql(m, 0, p, g) }) : N = { x: this.targetOffset.x * q, y: this.targetOffset.y * q };
          var z = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += z.x, this.currentOffset.y += z.y, w.offsetBy(z), w.move(), this.onNextFrame(function() {
            return b.inertiaTick();
          });
        } else
          w.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, f = p._now() - this.t0, g = Bo(p).smoothEndDuration;
        if (f < g) {
          var m = { x: eu(f, 0, this.targetOffset.x, g), y: eu(f, 0, this.targetOffset.y, g) }, b = { x: m.x - this.currentOffset.x, y: m.y - this.currentOffset.y };
          this.currentOffset.x += b.x, this.currentOffset.y += b.y, p.offsetBy(b), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, f = s.event, g = s.eventTarget, m = this.interaction;
        m.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), m.updatePointer(p, f, g, true), m._doPhase({ interaction: m, event: f, phase: "resume" }), (0, K.copyCoords)(m.coords.prev, m.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Bt.default.cancel(this.timeout);
      } }]) && Gd(o.prototype, a), n;
    }();
    function Bo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Bo, "Bo");
    u(Bo, "an");
    function Ql(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(Ql, "Ql");
    u(Ql, "sn");
    function eu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(eu, "eu");
    u(eu, "ln"), Jn.InertiaState = Kl;
    var qd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(xn.default), n.usePlugin(mt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new Kl(o);
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
    }, "interactions:action-resume": mt.addEventModifiers, "interactions:action-inertiastart": mt.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Jn.default = qd;
    var Di = {};
    function Ld(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ld, "Ld");
    u(Ld, "fn");
    function zi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zi, "zi");
    u(zi, "dn");
    function tu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(tu, "tu");
    u(tu, "pn"), Object.defineProperty(Di, "__esModule", { value: true }), Di.Eventable = void 0;
    var jd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), zi(this, "options", void 0), zi(this, "types", {}), zi(this, "propagationStopped", false), zi(this, "immediatePropagationStopped", false), zi(this, "global", void 0), this.options = (0, U.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, f = this.global;
        (p = this.types[s.type]) && tu(s, p), !s.propagationStopped && f && (p = f[s.type]) && tu(s, p);
      } }, { key: "on", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f)
          this.types[s] = xe.merge(this.types[s] || [], f[s]);
      } }, { key: "off", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f) {
          var g = this.types[s];
          if (g && g.length)
            for (var m = 0; m < f[s].length; m++) {
              var b = f[s][m], w = g.indexOf(b);
              w !== -1 && g.splice(w, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Ld(o.prototype, a), n;
    }();
    Di.Eventable = jd;
    var Ri = {};
    Object.defineProperty(Ri, "__esModule", { value: true }), Ri.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var ss = {};
    Object.defineProperty(ss, "__esModule", { value: true }), ss.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var f = n.interactables.get(s, p);
        return f || ((f = n.interactables.new(s, p)).events.global = a.globalEvents), f;
      }, "a"), "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, $t.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            this.on(g, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var m in a)
            this.on(m, a[m], s);
          return this;
        }
        return (0, Ri.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, $t.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            this.off(g, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var m in a)
            this.off(m, a[m], s);
          return this;
        }
        var b;
        return (0, Ri.default)(a, this.scope.actions) ? a in this.globalEvents && (b = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(b, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
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
    function Bd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Bd, "Bd");
    u(Bd, "mn");
    function Gr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Gr, "Gr");
    u(Gr, "bn"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.Interactable = void 0;
    var Hd = function() {
      function n(s, p, f, g) {
        (function(m, b) {
          if (!(m instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Gr(this, "options", void 0), Gr(this, "_actions", void 0), Gr(this, "target", void 0), Gr(this, "events", new Di.Eventable()), Gr(this, "_context", void 0), Gr(this, "_win", void 0), Gr(this, "_doc", void 0), Gr(this, "_scopeEvents", void 0), Gr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || f, this._win = (0, e.getWindow)((0, R.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = g, this.set(p);
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
          var m = g, b = this.options[s], w = p[m];
          m === "listeners" && this.updatePerActionListeners(s, b.listeners, w), c.default.array(w) ? b[m] = xe.from(w) : c.default.plainObject(w) ? (b[m] = (0, U.default)(b[m] || {}, (0, gn.default)(w)), c.default.object(f.perAction[m]) && "enabled" in f.perAction[m] && (b[m].enabled = w.enabled !== false)) : c.default.bool(w) && c.default.object(f.perAction[m]) ? b[m].enabled = w : b[m] = w;
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
        var m = s === "on" ? "add" : "remove", b = (0, fe.default)(p, f);
        for (var w in b) {
          w === "wheel" && (w = L.default.wheelEvent);
          for (var T = 0; T < b[w].length; T++) {
            var P = b[w][T];
            (0, Ri.default)(w, this._actions) ? this.events[s](w, P) : c.default.string(this.target) ? this._scopeEvents["".concat(m, "Delegate")](this.target, this._context, w, P, g) : this._scopeEvents[m](this.target, w, P, g);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, f) {
        return this._onOff("on", s, p, f);
      } }, { key: "off", value: function(s, p, f) {
        return this._onOff("off", s, p, f);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var f in c.default.object(s) || (s = {}), this.options = (0, gn.default)(p.base), this._actions.methodDict) {
          var g = f, m = this._actions.methodDict[g];
          this.options[g] = {}, this.setPerAction(g, (0, U.default)((0, U.default)({}, p.perAction), p.actions[g])), this[m](s[g]);
        }
        for (var b in s)
          c.default.func(this[b]) && this[b](s[b]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], f = p.length - 1; f >= 0; f--) {
              var g = p[f], m = g.selector, b = g.context, w = g.listeners;
              m === this.target && b === this._context && p.splice(f, 1);
              for (var T = w.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, w[T][0], w[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Bd(o.prototype, a), n;
    }();
    Ho.Interactable = Hd;
    var $o = {};
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name($d, "$d");
    u($d, "_n");
    function ls(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ls, "ls");
    u(ls, "Pn"), Object.defineProperty($o, "__esModule", { value: true }), $o.InteractableSet = void 0;
    var Fd = function() {
      function n(s) {
        var p = this;
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ls(this, "list", []), ls(this, "selectorMap", {}), ls(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f) {
          var g = f.interactable, m = g.target, b = g._context, w = c.default.string(m) ? p.selectorMap[m] : m[p.scope.id], T = xe.findIndex(w, function(P) {
            return P.context === b;
          });
          w[T] && (w[T].context = null, w[T].interactable = null), w.splice(T, 1);
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
        var f = p && p.context || this.scope.document, g = c.default.string(s), m = g ? this.selectorMap[s] : s[this.scope.id];
        if (!m)
          return null;
        var b = xe.find(m, function(w) {
          return w.context === f && (g || w.interactable.inContext(s));
        });
        return b && b.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var f = 0; f < this.list.length; f++) {
          var g = this.list[f], m = void 0;
          if ((c.default.string(g.target) ? c.default.element(s) && R.matchesSelector(s, g.target) : s === g.target) && g.inContext(s) && (m = p(g)), m !== void 0)
            return m;
        }
      } }]) && $d(o.prototype, a), n;
    }();
    $o.InteractableSet = Fd;
    var Fo = {};
    function Wd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Wd, "Wd");
    u(Wd, "En");
    function us(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(us, "us");
    u(us, "Tn");
    function cs(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, m = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            g = true, m = T;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw m;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return ru(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? ru(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(cs, "cs");
    u(cs, "Mn");
    function ru(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ru, "ru");
    u(ru, "jn"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.default = void 0;
    var Ud = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), us(this, "currentTarget", void 0), us(this, "originalEvent", void 0), us(this, "type", void 0), this.originalEvent = s, (0, qt.default)(this, s);
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
      } }]) && Wd(o.prototype, a), n;
    }();
    function Ni(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(Ni, "Ni");
    u(Ni, "In");
    var Vd = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], f = { add: g, remove: m, addDelegate: function(T, P, N, q, z) {
        var $ = Ni(z);
        if (!s[N]) {
          s[N] = [];
          for (var J = 0; J < p.length; J++) {
            var F = p[J];
            g(F, N, b), g(F, N, w, true);
          }
        }
        var ne = s[N], le = xe.find(ne, function(pe) {
          return pe.selector === T && pe.context === P;
        });
        le || (le = { selector: T, context: P, listeners: [] }, ne.push(le)), le.listeners.push([q, $]);
      }, removeDelegate: function(T, P, N, q, z) {
        var $, J = Ni(z), F = s[N], ne = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === T && le.context === P) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = cs(pe[Ee], 2), be = je[0], Ie = je[1], Jt = Ie.capture, Lr = Ie.passive;
                if (be === q && Jt === J.capture && Lr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), m(P, N, b), m(P, N, w, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: b, delegateUseCapture: w, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function g(T, P, N, q) {
        var z = Ni(q), $ = xe.find(a, function(J) {
          return J.eventTarget === T;
        });
        $ || ($ = { eventTarget: T, events: {} }, a.push($)), $.events[P] || ($.events[P] = []), T.addEventListener && !xe.contains($.events[P], N) && (T.addEventListener(P, N, f.supportsOptions ? z : z.capture), $.events[P].push(N));
      }
      __name(g, "g");
      u(g, "s");
      function m(T, P, N, q) {
        var z = Ni(q), $ = xe.findIndex(a, function(Ee) {
          return Ee.eventTarget === T;
        }), J = a[$];
        if (J && J.events)
          if (P !== "all") {
            var F = false, ne = J.events[P];
            if (ne) {
              if (N === "all") {
                for (var le = ne.length - 1; le >= 0; le--)
                  m(T, P, ne[le], z);
                return;
              }
              for (var pe = 0; pe < ne.length; pe++)
                if (ne[pe] === N) {
                  T.removeEventListener(P, N, f.supportsOptions ? z : z.capture), ne.splice(pe, 1), ne.length === 0 && (delete J.events[P], F = true);
                  break;
                }
            }
            F && !Object.keys(J.events).length && a.splice($, 1);
          } else
            for (P in J.events)
              J.events.hasOwnProperty(P) && m(T, P, "all");
      }
      __name(m, "m");
      u(m, "l");
      function b(T, P) {
        for (var N = Ni(P), q = new Ud(T), z = s[T.type], $ = cs(K.getEventTargets(T), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < z.length; F++) {
            var ne = z[F], le = ne.selector, pe = ne.context;
            if (R.matchesSelector(J, le) && R.nodeContains(pe, $) && R.nodeContains(pe, J)) {
              var Ee = ne.listeners;
              q.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = cs(Ee[je], 2), Ie = be[0], Jt = be[1], Lr = Jt.capture, Ss = Jt.passive;
                Lr === N.capture && Ss === N.passive && Ie(q);
              }
            }
          }
          J = R.parentNode(J);
        }
      }
      __name(b, "b");
      u(b, "u");
      function w(T) {
        return b(T, true);
      }
      __name(w, "w");
      return u(w, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return f.supportsOptions = true;
      }, get passive() {
        return f.supportsPassive = true;
      } }), n.events = f, f;
    } };
    Fo.default = Vd;
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
      for (var f = 0; f < p.interactions.list.length; f++) {
        var g = p.interactions.list[f], m = s;
        if (g.simulation && g.simulation.allowResume && g.pointerType === o)
          for (; m; ) {
            if (m === g.element)
              return g;
            m = R.parentNode(m);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, f = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var g = 0; g < f.interactions.list.length; g++) {
        var m = f.interactions.list[g];
        if (m.pointerType === s) {
          if (m.simulation && !nu(m, a))
            continue;
          if (m.interacting())
            return m;
          o || (o = m);
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
        if (nu(p, o))
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
    function nu(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(nu, "nu");
    u(nu, "zn");
    var Xd = Uo;
    Wo.default = Xd;
    var Vo = {};
    function iu(n) {
      return (iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(iu, "iu");
    u(iu, "Xn");
    function ou(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, m = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            g = true, m = T;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw m;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return au(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? au(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ou, "ou");
    u(ou, "Yn");
    function au(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(au, "au");
    u(au, "Bn");
    function Yd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Yd, "Yd");
    u(Yd, "Wn");
    function Zd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Zd, "Zd");
    u(Zd, "Ln");
    function su(n, o) {
      return (su = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(su, "su");
    u(su, "Un");
    function Jd(n, o) {
      return !o || iu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Jd, "Jd");
    u(Jd, "Vn");
    function ps(n) {
      return (ps = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ps, "ps");
    u(ps, "Nn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var ds = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function lu(n, o) {
      return function(a) {
        var s = o.interactions.list, p = K.getPointerType(a), f = ou(K.getEventTargets(a), 2), g = f[0], m = f[1], b = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var w = 0; w < a.changedTouches.length; w++) {
            var T = a.changedTouches[w], P = { pointer: T, pointerId: K.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: g, curEventTarget: m, scope: o }, N = uu(P);
            b.push([P.pointer, P.eventTarget, P.curEventTarget, N]);
          }
        } else {
          var q = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var z = 0; z < s.length && !q; z++)
              q = s[z].pointerType !== "mouse" && s[z].pointerIsDown;
            q = q || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!q) {
            var $ = { pointer: a, pointerId: K.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: m, eventTarget: g, scope: o }, J = uu($);
            b.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < b.length; F++) {
          var ne = ou(b[F], 4), le = ne[0], pe = ne[1], Ee = ne[2];
          ne[3][n](le, a, pe, Ee);
        }
      };
    }
    __name(lu, "lu");
    u(lu, "$n");
    function uu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Wo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(uu, "uu");
    u(uu, "Gn");
    function fs(n, o) {
      var a = n.doc, s = n.scope, p = n.options, f = s.interactions.docEvents, g = s.events, m = g[o];
      for (var b in s.browser.isIOS && !p.events && (p.events = { passive: false }), g.delegatedEvents)
        m(a, b, g.delegateListener), m(a, b, g.delegateUseCapture, true);
      for (var w = p && p.events, T = 0; T < f.length; T++) {
        var P = f[T];
        m(a, P.type, P.listener, w);
      }
    }
    __name(fs, "fs");
    u(fs, "Hn");
    var Kd = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ds.length; a++) {
        var s = ds[a];
        o[s] = lu(s, n);
      }
      var p, f = L.default.pEventTypes;
      function g() {
        for (var m = 0; m < n.interactions.list.length; m++) {
          var b = n.interactions.list[m];
          if (b.pointerIsDown && b.pointerType === "touch" && !b._interacting)
            for (var w = function() {
              var P = b.pointers[T];
              n.documents.some(function(N) {
                var q = N.doc;
                return (0, R.nodeContains)(q, P.downTarget);
              }) || b.removePointer(P.pointer, P.event);
            }, T = 0; T < b.pointers.length; T++)
              w();
        }
      }
      __name(g, "g");
      u(g, "a"), (p = S.default.PointerEvent ? [{ type: f.down, listener: g }, { type: f.down, listener: o.pointerDown }, { type: f.move, listener: o.pointerMove }, { type: f.up, listener: o.pointerUp }, { type: f.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: g }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(m) {
        for (var b = 0; b < n.interactions.list.length; b++)
          n.interactions.list[b].documentBlur(m);
      } }), n.prevTouchTime = 0, n.Interaction = function(m) {
        (function(z, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          z.prototype = Object.create($ && $.prototype, { constructor: { value: z, writable: true, configurable: true } }), $ && su(z, $);
        })(q, m);
        var b, w, T, P, N = (T = q, P = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (z) {
            return false;
          }
        }(), function() {
          var z, $ = ps(T);
          if (P) {
            var J = ps(this).constructor;
            z = Reflect.construct($, arguments, J);
          } else
            z = $.apply(this, arguments);
          return Jd(this, z);
        });
        function q() {
          return Yd(this, q), N.apply(this, arguments);
        }
        __name(q, "q");
        return u(q, "s"), b = q, (w = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(z) {
          n.interactions.pointerMoveTolerance = z;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && Zd(b.prototype, w), q;
      }(zt.default), n.interactions = { list: [], new: function(m) {
        m.scopeFire = function(w, T) {
          return n.fire(w, T);
        };
        var b = new n.Interaction(m);
        return n.interactions.list.push(b), b;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Zn.default);
    }, listeners: { "scope:add-document": function(n) {
      return fs(n, "add");
    }, "scope:remove-document": function(n) {
      return fs(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: fs, doOnInteractions: lu, methodNames: ds };
    Vo.default = Kd;
    var Gi = {};
    function cu(n) {
      return (cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(cu, "cu");
    u(cu, "Jn");
    function hs(n, o, a) {
      return (hs = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p, f) {
        var g = function(b, w) {
          for (; !Object.prototype.hasOwnProperty.call(b, w) && (b = Kn(b)) !== null; )
            ;
          return b;
        }(s, p);
        if (g) {
          var m = Object.getOwnPropertyDescriptor(g, p);
          return m.get ? m.get.call(f) : m.value;
        }
      })(n, o, a || n);
    }
    __name(hs, "hs");
    u(hs, "Qn");
    function pu(n, o) {
      return (pu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(pu, "pu");
    u(pu, "tr");
    function Qd(n, o) {
      return !o || cu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Qd, "Qd");
    u(Qd, "er");
    function Kn(n) {
      return (Kn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Kn, "Kn");
    u(Kn, "nr");
    function du(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(du, "du");
    u(du, "rr");
    function fu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(fu, "fu");
    u(fu, "or");
    function hu(n, o, a) {
      return o && fu(n.prototype, o), a && fu(n, a), n;
    }
    __name(hu, "hu");
    u(hu, "ir");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vt, "vt");
    u(vt, "ar"), Object.defineProperty(Gi, "__esModule", { value: true }), Gi.initScope = mu, Gi.Scope = void 0;
    var ef = function() {
      function n() {
        var o = this;
        du(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", L.default), vt(this, "defaults", (0, gn.default)(Ai.defaults)), vt(this, "Eventable", Di.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, ss.createInteractStatic)(this)), vt(this, "InteractEvent", _i.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new $o.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(b, w) {
            if (typeof w != "function" && w !== null)
              throw new TypeError("Super expression must either be null or a function");
            b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), w && pu(b, w);
          })(m, s);
          var p, f, g = (p = m, f = function() {
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
            var b, w = Kn(p);
            if (f) {
              var T = Kn(this).constructor;
              b = Reflect.construct(w, arguments, T);
            } else
              b = w.apply(this, arguments);
            return Qd(this, b);
          });
          function m() {
            return du(this, m), g.apply(this, arguments);
          }
          __name(m, "m");
          return u(m, "i"), hu(m, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(b) {
            return hs(Kn(m.prototype), "set", this).call(this, b), a.fire("interactable:set", { options: b, interactable: this }), this;
          } }, { key: "unset", value: function() {
            hs(Kn(m.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), m;
        }(Ho.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), hu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : mu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, f = o.before.reduce(function(m, b) {
            return m[b] = true, m[vu(b)] = true, m;
          }, {}); s < p; s++) {
            var g = this.listenerMaps[s].id;
            if (f[g] || f[vu(g)])
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
    function mu(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), S.default.init(o), L.default.init(o), Bt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Vo.default), n.usePlugin(Fo.default), n;
    }
    __name(mu, "mu");
    u(mu, "lr");
    function vu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(vu, "vu");
    u(vu, "ur"), Gi.Scope = ef;
    var wt = {};
    Object.defineProperty(wt, "__esModule", { value: true }), wt.default = void 0;
    var gu = new Gi.Scope(), tf = gu.interactStatic;
    wt.default = tf;
    var rf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    gu.init(rf);
    var Xo = {};
    Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0, Xo.default = function() {
    };
    var Yo = {};
    Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0, Yo.default = function() {
    };
    var Zo = {};
    function bu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, g = false, m = void 0;
          try {
            for (var b, w = a[Symbol.iterator](); !(f = (b = w.next()).done) && (p.push(b.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            g = true, m = T;
          } finally {
            try {
              f || w.return == null || w.return();
            } finally {
              if (g)
                throw m;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return yu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? yu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(bu, "bu");
    u(bu, "yr");
    function yu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(yu, "yu");
    u(yu, "mr"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0, Zo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = bu(s, 2), f = p[0], g = p[1];
        return f in n || g in n;
      }), a = u(function(s, p) {
        for (var f = n.range, g = n.limits, m = g === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : g, b = n.offset, w = b === void 0 ? { x: 0, y: 0 } : b, T = { range: f, grid: n, x: null, y: null }, P = 0; P < o.length; P++) {
          var N = bu(o[P], 2), q = N[0], z = N[1], $ = Math.round((s - w.x) / n[q]), J = Math.round((p - w.y) / n[z]);
          T[q] = Math.max(m.left, Math.min(m.right, $ * n[q] + w.x)), T[z] = Math.max(m.top, Math.min(m.bottom, J * n[z] + w.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var qi = {};
    Object.defineProperty(qi, "__esModule", { value: true }), Object.defineProperty(qi, "edgeTarget", { enumerable: true, get: function() {
      return Xo.default;
    } }), Object.defineProperty(qi, "elements", { enumerable: true, get: function() {
      return Yo.default;
    } }), Object.defineProperty(qi, "grid", { enumerable: true, get: function() {
      return Zo.default;
    } });
    var Jo = {};
    Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var nf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, qi), o.createSnapGrid = o.snappers.grid;
    } };
    Jo.default = nf;
    var Qn = {};
    function xu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(xu, "xu");
    u(xu, "Pr");
    function ms(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? xu(Object(a), true).forEach(function(s) {
          of(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : xu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(ms, "ms");
    u(ms, "Or");
    function of(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(of, "of");
    u(of, "Sr"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.aspectRatio = Qn.default = void 0;
    var wu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, f = o.options.ratio, g = o.options, m = g.equalDelta, b = g.modifiers;
      f === "preserve" && (f = a.width / a.height), o.startCoords = (0, U.default)({}, p), o.startRect = (0, U.default)({}, a), o.ratio = f, o.equalDelta = m;
      var w = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (w.left ? 1 : -1) * (w.top ? 1 : -1);
      else {
        var T = o.xIsPrimaryAxis ? w.top : w.left;
        o.edgeSign = T ? -1 : 1;
      }
      if ((0, U.default)(n.edges, w), b && b.length) {
        var P = new bn.default(n.interaction);
        P.copyFrom(n.interaction.modification), P.prepareStates(b), o.subModification = P, P.startAll(ms({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, U.default)({}, s), f = o.equalDelta ? af : sf;
      if (f(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var g = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, g, { x: s.x - p.x, y: s.y - p.y });
      var m = o.subModification.setAll(ms(ms({}, n), {}, { rect: g, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: g })), b = m.delta;
      return m.changed && (f(o, Math.abs(b.x) > Math.abs(b.y), m.coords, m.rect), (0, U.default)(s, m.coords)), m.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function af(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p : a.x = s.x + (a.y - s.y) * p;
    }
    __name(af, "af");
    u(af, "Tr");
    function sf(n, o, a, s) {
      var p = n.startRect, f = n.startCoords, g = n.ratio, m = n.edgeSign;
      if (o) {
        var b = s.width / g;
        a.y = f.y + (b - p.height) * m;
      } else {
        var w = s.height * g;
        a.x = f.x + (w - p.width) * m;
      }
    }
    __name(sf, "sf");
    u(sf, "Mr"), Qn.aspectRatio = wu;
    var lf = (0, mt.makeModifier)(wu, "aspectRatio");
    Qn.default = lf;
    var wn = {};
    Object.defineProperty(wn, "__esModule", { value: true }), wn.default = void 0;
    var Eu = u(function() {
    }, "Ir");
    Eu._defaults = {};
    var uf = Eu;
    wn.default = uf;
    var vs = {};
    Object.defineProperty(vs, "__esModule", { value: true }), Object.defineProperty(vs, "default", { enumerable: true, get: function() {
      return wn.default;
    } });
    var Ot = {};
    function gs(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    __name(gs, "gs");
    u(gs, "zr"), Object.defineProperty(Ot, "__esModule", { value: true }), Ot.getRestrictionRect = gs, Ot.restrict = Ot.default = void 0;
    var Su = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, f = n.pageCoords, g = s.options, m = g.elementRect, b = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, g.offset || {});
      if (o && m) {
        var w = gs(g.restriction, p, f);
        if (w) {
          var T = w.right - w.left - o.width, P = w.bottom - w.top - o.height;
          T < 0 && (b.left += T, b.right += T), P < 0 && (b.top += P, b.bottom += P);
        }
        b.left += a.left - o.width * m.left, b.top += a.top - o.height * m.top, b.right += a.right - o.width * (1 - m.right), b.bottom += a.bottom - o.height * (1 - m.bottom);
      }
      s.offset = b;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, f = s.offset, g = gs(p.restriction, a, o);
      if (g) {
        var m = ce.xywhToTlbr(g);
        o.x = Math.max(Math.min(m.right - f.right, o.x), m.left + f.left), o.y = Math.max(Math.min(m.bottom - f.bottom, o.y), m.top + f.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Ot.restrict = Su;
    var cf = (0, mt.makeModifier)(Su, "restrict");
    Ot.default = cf;
    var Tr = {};
    Object.defineProperty(Tr, "__esModule", { value: true }), Tr.restrictEdges = Tr.default = void 0;
    var Tu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Cu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Ou(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(Ou, "Ou");
    u(Ou, "Wr");
    var Pu = { noInner: Tu, noOuter: Cu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, f = p.options;
      if (f) {
        var g = (0, Ot.getRestrictionRect)(f.offset, a, a.coords.start.page);
        o = ce.rectToXY(g);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, f = p.offset, g = p.options;
      if (a) {
        var m = (0, U.default)({}, o), b = (0, Ot.getRestrictionRect)(g.inner, s, m) || {}, w = (0, Ot.getRestrictionRect)(g.outer, s, m) || {};
        Ou(b, Tu), Ou(w, Cu), a.top ? o.y = Math.min(Math.max(w.top + f.top, m.y), b.top + f.top) : a.bottom && (o.y = Math.max(Math.min(w.bottom + f.bottom, m.y), b.bottom + f.bottom)), a.left ? o.x = Math.min(Math.max(w.left + f.left, m.x), b.left + f.left) : a.right && (o.x = Math.max(Math.min(w.right + f.right, m.x), b.right + f.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Tr.restrictEdges = Pu;
    var pf = (0, mt.makeModifier)(Pu, "restrictEdges");
    Tr.default = pf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictRect = ei.default = void 0;
    var df = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Ot.restrict.defaults), Mu = { start: Ot.restrict.start, set: Ot.restrict.set, defaults: df };
    ei.restrictRect = Mu;
    var ff = (0, mt.makeModifier)(Mu, "restrictRect");
    ei.default = ff;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictSize = ti.default = void 0;
    var hf = { width: -1 / 0, height: -1 / 0 }, mf = { width: 1 / 0, height: 1 / 0 }, Au = { start: function(n) {
      return Tr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, f = a.options;
      if (p) {
        var g = ce.tlbrToXywh((0, Ot.getRestrictionRect)(f.min, o, n.coords)) || hf, m = ce.tlbrToXywh((0, Ot.getRestrictionRect)(f.max, o, n.coords)) || mf;
        a.options = { endOnly: f.endOnly, inner: (0, U.default)({}, Tr.restrictEdges.noInner), outer: (0, U.default)({}, Tr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - g.height, a.options.outer.top = s.bottom - m.height) : p.bottom && (a.options.inner.bottom = s.top + g.height, a.options.outer.bottom = s.top + m.height), p.left ? (a.options.inner.left = s.right - g.width, a.options.outer.left = s.right - m.width) : p.right && (a.options.inner.right = s.left + g.width, a.options.outer.right = s.left + m.width), Tr.restrictEdges.set(n), a.options = f;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ti.restrictSize = Au;
    var vf = (0, mt.makeModifier)(Au, "restrictSize");
    ti.default = vf;
    var bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), Object.defineProperty(bs, "default", { enumerable: true, get: function() {
      return wn.default;
    } });
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snap = Kr.default = void 0;
    var _u = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, f = n.rect, g = n.state, m = n.startOffset, b = g.options, w = b.offsetWithOrigin ? function(N) {
        var q = N.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N.state.options.origin, null, null, [q])) || (0, qe.default)(N.interactable, q, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (b.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ce.resolveRectLike)(b.offset, s, p, [a]);
        (o = (0, ce.rectToXY)(T) || { x: 0, y: 0 }).x += w.x, o.y += w.y;
      }
      var P = b.relativePoints;
      g.offsets = f && P && P.length ? P.map(function(N, q) {
        return { index: q, relativePoint: N, x: m.left - f.width * N.x + o.x, y: m.top - f.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, f = s.offsets, g = (0, qe.default)(o.interactable, o.element, o.prepared.name), m = (0, U.default)({}, a), b = [];
      p.offsetWithOrigin || (m.x -= g.x, m.y -= g.y);
      for (var w = 0; w < f.length; w++)
        for (var T = f[w], P = m.x - T.x, N = m.y - T.y, q = 0, z = p.targets.length; q < z; q++) {
          var $, J = p.targets[q];
          ($ = c.default.func(J) ? J(P, N, o._proxy, T, q) : J) && b.push({ x: (c.default.number($.x) ? $.x : P) + T.x, y: (c.default.number($.y) ? $.y : N) + T.y, range: c.default.number($.range) ? $.range : p.range, source: J, index: q, offset: T });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < b.length; ne++) {
        var le = b[ne], pe = le.range, Ee = le.x - m.x, je = le.y - m.y, be = (0, Ke.default)(Ee, je), Ie = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (Ie = false), F.target && !(Ie ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = Ie, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Kr.snap = _u;
    var gf = (0, mt.makeModifier)(_u, "snap");
    Kr.default = gf;
    var qr = {};
    function Iu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Iu, "Iu");
    u(Iu, "oo"), Object.defineProperty(qr, "__esModule", { value: true }), qr.snapSize = qr.default = void 0;
    var ku = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Kr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, f = n.coords, g = p.options, m = p.offsets, b = { x: f.x - m[0].x, y: f.y - m[0].y };
      p.options = (0, U.default)({}, g), p.options.targets = [];
      for (var w = 0; w < (g.targets || []).length; w++) {
        var T = (g.targets || [])[w], P = void 0;
        if (P = c.default.func(T) ? T(b.x, b.y, s) : T) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var q = (o = p.targetFields[N], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, ne) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var le = [], pe = true, Ee = false, je = void 0;
                try {
                  for (var be, Ie = F[Symbol.iterator](); !(pe = (be = Ie.next()).done) && (le.push(be.value), !ne || le.length !== ne); pe = true)
                    ;
                } catch (Jt) {
                  Ee = true, je = Jt;
                } finally {
                  try {
                    pe || Ie.return == null || Ie.return();
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
                  return Iu(F, ne);
                var le = Object.prototype.toString.call(F).slice(8, -1);
                return le === "Object" && F.constructor && (le = F.constructor.name), le === "Map" || le === "Set" ? Array.from(F) : le === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le) ? Iu(F, ne) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), z = q[0], $ = q[1];
            if (z in P || $ in P) {
              P.x = P[z], P.y = P[$];
              break;
            }
          }
          p.options.targets.push(P);
        }
      }
      var J = Kr.snap.set(n);
      return p.options = g, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    qr.snapSize = ku;
    var bf = (0, mt.makeModifier)(ku, "snapSize");
    qr.default = bf;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.snapEdges = ri.default = void 0;
    var Du = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], qr.snapSize.start(n)) : null;
    }, set: qr.snapSize.set, defaults: (0, U.default)((0, gn.default)(qr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ri.snapEdges = Du;
    var yf = (0, mt.makeModifier)(Du, "snapEdges");
    ri.default = yf;
    var ys = {};
    Object.defineProperty(ys, "__esModule", { value: true }), Object.defineProperty(ys, "default", { enumerable: true, get: function() {
      return wn.default;
    } });
    var xs = {};
    Object.defineProperty(xs, "__esModule", { value: true }), Object.defineProperty(xs, "default", { enumerable: true, get: function() {
      return wn.default;
    } });
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.default = void 0;
    var xf = { aspectRatio: Qn.default, restrictEdges: Tr.default, restrict: Ot.default, restrictRect: ei.default, restrictSize: ti.default, snapEdges: ri.default, snap: Kr.default, snapSize: qr.default, spring: ys.default, avoid: vs.default, transform: xs.default, rubberband: bs.default };
    ni.default = xf;
    var Ko = {};
    Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var wf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(mt.default), n.usePlugin(Jo.default), o.modifiers = ni.default, ni.default) {
        var s = ni.default[a], p = s._defaults, f = s._methods;
        p._methods = f, n.defaults.perAction[a] = p;
      }
    } };
    Ko.default = wf;
    var En = {};
    function zu(n) {
      return (zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(zu, "zu");
    u(zu, "mo");
    function Ef(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ef, "Ef");
    u(Ef, "bo");
    function Ru(n, o) {
      return (Ru = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Ru, "Ru");
    u(Ru, "xo");
    function Sf(n, o) {
      return !o || zu(o) !== "object" && typeof o != "function" ? Rt(n) : o;
    }
    __name(Sf, "Sf");
    u(Sf, "wo");
    function Rt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Rt, "Rt");
    u(Rt, "_o");
    function ws(n) {
      return (ws = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ws, "ws");
    u(ws, "Po");
    function br(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(br, "br");
    u(br, "Oo"), Object.defineProperty(En, "__esModule", { value: true }), En.PointerEvent = En.default = void 0;
    var Tf = function(n) {
      (function(m, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        m.prototype = Object.create(b && b.prototype, { constructor: { value: m, writable: true, configurable: true } }), b && Ru(m, b);
      })(g, n);
      var o, a, s, p, f = (s = g, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (m) {
          return false;
        }
      }(), function() {
        var m, b = ws(s);
        if (p) {
          var w = ws(this).constructor;
          m = Reflect.construct(b, arguments, w);
        } else
          m = b.apply(this, arguments);
        return Sf(this, m);
      });
      function g(m, b, w, T, P, N) {
        var q;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, g), br(Rt(q = f.call(this, P)), "type", void 0), br(Rt(q), "originalEvent", void 0), br(Rt(q), "pointerId", void 0), br(Rt(q), "pointerType", void 0), br(Rt(q), "double", void 0), br(Rt(q), "pageX", void 0), br(Rt(q), "pageY", void 0), br(Rt(q), "clientX", void 0), br(Rt(q), "clientY", void 0), br(Rt(q), "dt", void 0), br(Rt(q), "eventable", void 0), K.pointerExtend(Rt(q), w), w !== b && K.pointerExtend(Rt(q), b), q.timeStamp = N, q.originalEvent = w, q.type = m, q.pointerId = K.getPointerId(b), q.pointerType = K.getPointerType(b), q.target = T, q.currentTarget = null, m === "tap") {
          var z = P.getPointerIndex(b);
          q.dt = q.timeStamp - P.pointers[z].downTime;
          var $ = q.timeStamp - P.tapTime;
          q.double = !!(P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === q.target && $ < 500);
        } else
          m === "doubletap" && (q.dt = b.timeStamp - P.tapTime);
        return q;
      }
      __name(g, "g");
      return u(g, "a"), o = g, (a = [{ key: "_subtractOrigin", value: function(m) {
        var b = m.x, w = m.y;
        return this.pageX -= b, this.pageY -= w, this.clientX -= b, this.clientY -= w, this;
      } }, { key: "_addOrigin", value: function(m) {
        var b = m.x, w = m.y;
        return this.pageX += b, this.pageY += w, this.clientX += b, this.clientY += w, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Ef(o.prototype, a), g;
    }(Lt.BaseEvent);
    En.PointerEvent = En.default = Tf;
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Li.default = void 0;
    var Qo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Qo, n.defaults.actions.pointerEvents = Qo.defaults, (0, U.default)(n.actions.phaselessTypes, Qo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && Es(n), Qr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, f = a.pointer, g = a.event, m = a.eventTarget, b = a.pointerIndex, w = p.pointers[b].hold, T = R.getPath(m), P = { interaction: p, pointer: f, event: g, eventTarget: m, type: "hold", targets: [], path: T, node: null }, N = 0; N < T.length; N++) {
          var q = T[N];
          P.node = q, s.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var z = 1 / 0, $ = 0; $ < P.targets.length; $++) {
            var J = P.targets[$].eventable.options.holdDuration;
            J < z && (z = J);
          }
          w.duration = z, w.timeout = setTimeout(function() {
            Qr({ interaction: p, eventTarget: m, pointer: f, event: g, type: "hold" }, s);
          }, z);
        }
      })(n, o), Qr(n, o);
    }, "interactions:up": function(n, o) {
      Es(n), Qr(n, o), function(a, s) {
        var p = a.interaction, f = a.pointer, g = a.event, m = a.eventTarget;
        p.pointerWasMoved || Qr({ interaction: p, eventTarget: m, pointer: f, event: g, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      Es(n), Qr(n, o);
    } }, PointerEvent: En.PointerEvent, fire: Qr, collectEventTargets: Nu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Qr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, g = n.type, m = n.targets, b = m === void 0 ? Nu(n, o) : m, w = new En.PointerEvent(g, s, p, f, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: w });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: f, targets: b, type: g, pointerEvent: w }, P = 0; P < b.length; P++) {
        var N = b[P];
        for (var q in N.props || {})
          w[q] = N.props[q];
        var z = (0, qe.default)(N.eventable, N.node);
        if (w._subtractOrigin(z), w.eventable = N.eventable, w.currentTarget = N.node, N.eventable.fire(w), w._addOrigin(z), w.immediatePropagationStopped || w.propagationStopped && P + 1 < b.length && b[P + 1].node !== w.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), g === "tap") {
        var $ = w.double ? Qr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "doubletap" }, o) : w;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return w;
    }
    __name(Qr, "Qr");
    u(Qr, "Mo");
    function Nu(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, g = n.type, m = a.getPointerIndex(s), b = a.pointers[m];
      if (g === "tap" && (a.pointerWasMoved || !b || b.downTarget !== f))
        return [];
      for (var w = R.getPath(f), T = { interaction: a, pointer: s, event: p, eventTarget: f, type: g, path: w, targets: [], node: null }, P = 0; P < w.length; P++) {
        var N = w[P];
        T.node = N, o.fire("pointerEvents:collect-targets", T);
      }
      return g === "hold" && (T.targets = T.targets.filter(function(q) {
        var z;
        return q.eventable.options.holdDuration === ((z = a.pointers[m]) == null ? void 0 : z.hold.duration);
      })), T.targets;
    }
    __name(Nu, "Nu");
    u(Nu, "jo");
    function Es(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(Es, "Es");
    u(Es, "ko");
    var Cf = Qo;
    Li.default = Cf;
    var ea = {};
    function Of(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Of, "Of");
    u(Of, "Ao"), Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0;
    var Pf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Li.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Of, n;
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
    ea.default = Pf;
    var ta = {};
    function Mf(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    __name(Mf, "Mf");
    u(Mf, "Co"), Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0;
    var Af = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = Mf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var f = a.call(this, s, p);
        return f === this && (this.events.options[s] = p), f;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, f = n.eventTarget;
      o.interactables.forEachMatch(s, function(g) {
        var m = g.events, b = m.options;
        m.types[p] && m.types[p].length && g.testIgnoreAllow(b, s, f) && a.push({ node: s, eventable: m, props: { interactable: g } });
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
    ta.default = Af;
    var ra = {};
    Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0;
    var _f = { id: "pointer-events", install: function(n) {
      n.usePlugin(Li), n.usePlugin(ea.default), n.usePlugin(ta.default);
    } };
    ra.default = _f;
    var ji = {};
    function Gu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, f) {
          for (var g = c.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], m = f.window.Promise, b = m ? [] : null, w = function() {
            var P = g[T], N = s.getRect(P);
            if (!N)
              return "break";
            var q = xe.find(f.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === s && ne.element === P && ne.prepared.name === p.name;
            }), z = void 0;
            if (q)
              q.move(), b && (z = q._reflowPromise || new m(function(ne) {
                q._reflowResolve = ne;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(N), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f.now() }, F = K.coordsToEvent(J);
              z = function(ne, le, pe, Ee, je) {
                var be = ne.interactions.new({ pointerType: "reflow" }), Ie = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), K.setZeroCoords(be.coords.delta), (0, $t.copyAction)(be.prepared, Ee), be._doPhase(Ie);
                var Jt = ne.window.Promise, Lr = Jt ? new Jt(function(Ss) {
                  be._reflowResolve = Ss;
                }) : void 0;
                return be._reflowPromise = Lr, be.start(Ee, le, pe), be._interacting ? (be.move(Ie), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), Lr;
              }(f, s, P, p, F);
            }
            b && b.push(z);
          }, T = 0; T < g.length && w() !== "break"; T++)
            ;
          return b && m.all(b).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Gu, "Gu");
    u(Gu, "Wo"), Object.defineProperty(ji, "__esModule", { value: true }), ji.install = Gu, ji.default = void 0;
    var If = { id: "reflow", install: Gu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o.interactions.list, a));
    } } };
    ji.default = If;
    var Zt = { exports: {} };
    function qu(n) {
      return (qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(qu, "qu");
    u(qu, "Vo"), Object.defineProperty(Zt.exports, "__esModule", { value: true }), Zt.exports.default = void 0, wt.default.use(Zn.default), wt.default.use(xn.default), wt.default.use(ra.default), wt.default.use(Jn.default), wt.default.use(Ko.default), wt.default.use(No.default), wt.default.use(Nr.default), wt.default.use(Jr.default), wt.default.use(ji.default);
    var kf = wt.default;
    if (Zt.exports.default = kf, qu(Zt) === "object" && Zt)
      try {
        Zt.exports = wt.default;
      } catch (n) {
      }
    wt.default.default = wt.default, Zt = Zt.exports;
    var Sn = { exports: {} };
    function Lu(n) {
      return (Lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Lu, "Lu");
    u(Lu, "$o"), Object.defineProperty(Sn.exports, "__esModule", { value: true }), Sn.exports.default = void 0;
    var Df = Zt.default;
    if (Sn.exports.default = Df, Lu(Sn) === "object" && Sn)
      try {
        Sn.exports = Zt.default;
      } catch (n) {
      }
    return Zt.default.default = Zt.default, Sn.exports;
  });
});
var ld = Ts((sd, kl) => {
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
      var O = x ? y.bind(x) : y;
      return this.reads.push(O), l(this), O;
    }, mutate: function(y, x) {
      e("mutate");
      var O = x ? y.bind(x) : y;
      return this.writes.push(O), l(this), O;
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
      var x = y.writes, O = y.reads, C;
      try {
        e("flushing reads", O.length), y.runTasks(O), e("flushing writes", x.length), y.runTasks(x);
      } catch (A) {
        C = A;
      }
      if (y.scheduled = false, (O.length || x.length) && l(y), C)
        if (e("task errored", C.message), y.catch)
          y.catch(C);
        else
          throw C;
    }
    __name(c, "c");
    u(c, "flush");
    function d(y, x) {
      var O = y.indexOf(x);
      return !!~O && !!y.splice(O, 1);
    }
    __name(d, "d");
    u(d, "remove");
    function h(y, x) {
      for (var O in x)
        x.hasOwnProperty(O) && (y[O] = x[O]);
    }
    __name(h, "h");
    u(h, "mixin");
    var v = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return v;
    }) : typeof kl == "object" && (kl.exports = v);
  })(typeof window != "undefined" ? window : sd);
});
var en = Hi($u());
function Fu(r) {
  let e = tn(r);
  return new en.default(e).valueOf() * Math.PI;
}
__name(Fu, "Fu");
u(Fu, "V");
function Fi(r) {
  let e = tn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(Fi, "Fi");
u(Fi, "X");
function Wu(r, e) {
  return new en.default(tn(r)).valueOf() < new en.default(tn(e)).valueOf();
}
__name(Wu, "Wu");
u(Wu, "W");
function Uu(r, e) {
  return new en.default(tn(r)).valueOf() > new en.default(tn(e)).valueOf();
}
__name(Uu, "Uu");
u(Uu, "H");
function Vu(r) {
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
__name(Vu, "Vu");
u(Vu, "Q");
function tn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(tn, "tn");
u(tn, "l");
function Xu(r) {
  try {
    let e = tn(r), t = new en.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Xu, "Xu");
u(Xu, "J");
var jf = Object.prototype.toString.call({});
var Bf = "!recursion-limit!";
var Hf = 10;
function Qe(r, e = Hf) {
  return $f(r) || Ff(r, e) || Wf(r, e);
}
__name(Qe, "Qe");
u(Qe, "c");
function $f(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name($f, "$f");
u($f, "M");
function Ff(r, e) {
  if (e === 0)
    return Bf;
  if (r instanceof Map)
    return Uf(r, e);
  if (r instanceof Set)
    return Vf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Xf(r, e);
}
__name(Ff, "Ff");
u(Ff, "O");
function Wf(r, e) {
  let t = String(r);
  return t !== jf ? t : Yf(r, e);
}
__name(Wf, "Wf");
u(Wf, "F");
function Uf(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = Qe(i, e - 1), d = Qe(l, e - 1);
    t.push(`${c}: ${d}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(Uf, "Uf");
u(Uf, "G");
function Vf(r, e) {
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
__name(Vf, "Vf");
u(Vf, "R");
function Xf(r, e) {
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
__name(Xf, "Xf");
u(Xf, "N");
function Yf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], d = Qe(l, e - 1), h = Qe(c, e - 1);
    t.push(`${d}: ${h}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(Yf, "Yf");
u(Yf, "q");
var Os = 0;
var Et = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Os++;
    try {
      this.details = Os === 1 ? Qe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Os--;
    }
  }
}, "d");
var Zf = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var Ft = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -Ft.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(Ft.parseFloat(r.substr(1)));
    let e = Ft.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -Ft.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = Ft.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = Ft.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of Zf)
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
    let i = Ft.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = Ft.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var $i = Ft;
$i.CONSISTENT = new Ft(false, 0, 2, ", "), $i.EXACT = new Ft(true, 0, void 0, ", "), $i.MINIFIED = new Ft(true, 0, void 0, ","), $i.SIMPLIFIED = new Ft(true, 5e-4, 3, ", ");
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
var Nt = de;
Nt.ZERO = new de(0, 0), Nt.ONE = new de(1, 0), Nt.I = new de(0, 1);
var aa = "H";
var sa = "X";
var la = "Y";
var ua = "Z";
var ca = "P";
var pa = "T";
var da = "X^\xBD";
var fa = "Rx";
var ha = "Ry";
var ma = "Rz";
var Ps = "Swap";
var Ms = "\u2022";
var As = "Bloch";
var Yu = "|0>";
var Zu = "|1>";
var va = "Measure";
var _s = /* @__PURE__ */ new WeakSet();
function ks(r) {
  _s.add(r), r.shadowRoot && Ds(r.shadowRoot), Rs(r), zs(r.ownerDocument);
}
__name(ks, "ks");
u(ks, "bind");
function Ds(r) {
  Rs(r), zs(r);
}
__name(Ds, "Ds");
u(Ds, "bindShadow");
var ga = /* @__PURE__ */ new WeakMap();
function zs(r = document) {
  if (ga.has(r))
    return ga.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Is(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let d of c.addedNodes)
          d instanceof Element && Rs(d);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, ga.delete(r), t.disconnect();
  } };
  return ga.set(r, i), i;
}
__name(zs, "zs");
u(zs, "listenForBind");
function Rs(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Is(e);
  r instanceof Element && r.hasAttribute("data-action") && Is(r);
}
__name(Rs, "Rs");
u(Rs, "bindElements");
function Jf(r) {
  let e = r.currentTarget;
  for (let t of Ju(e))
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
__name(Jf, "Jf");
u(Jf, "handleEvent");
function* Ju(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(Ju, "Ju");
u(Ju, "bindings");
function Is(r) {
  for (let e of Ju(r))
    r.addEventListener(e.type, Jf);
}
__name(Is, "Is");
u(Is, "bindActions");
function Ns(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(Ns, "Ns");
u(Ns, "register");
function Gs(r, e) {
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
__name(Gs, "Gs");
u(Gs, "findTarget");
function qs(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(qs, "qs");
u(qs, "findTargets");
function ke(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Gs(this, e);
  } });
}
__name(ke, "ke");
u(ke, "target");
function Pt(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return qs(this, e);
  } });
}
__name(Pt, "Pt");
u(Pt, "targets");
function Ls(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(Ls, "Ls");
u(Ls, "autoShadowRoot");
var ba = /* @__PURE__ */ new WeakMap();
function G(r, e) {
  ba.has(r) || ba.set(r, []), ba.get(r).push(e);
}
__name(G, "G");
u(G, "attr");
function js(r, e) {
  e || (e = Ku(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = Qu(t), c = { configurable: true, get() {
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
__name(js, "js");
u(js, "initializeAttrs");
function Ku(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = ba.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(Ku, "Ku");
u(Ku, "getAttrNames");
function Qu(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Qu, "Qu");
u(Qu, "attrToAttributeName");
function Bs(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...Ku(r.prototype)].map(Qu).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Bs, "Bs");
u(Bs, "defineObservedAttributes");
var Kf = /* @__PURE__ */ new WeakSet();
function ec(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Kf.add(r), Ls(r), js(r), ks(r), e && e.call(r), r.shadowRoot && Ds(r.shadowRoot);
}
__name(ec, "ec");
u(ec, "initializeInstance");
function tc(r) {
  Bs(r), Ns(r);
}
__name(tc, "tc");
u(tc, "initializeClass");
function re(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    ec(this, e);
  }, tc(r);
}
__name(re, "re");
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
  __name(e, "e");
  return u(e, "ActivateableMixinClass"), I([G], e.prototype, "active", 2), e;
}
__name(Oe, "Oe");
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
  __name(e, "e");
  return u(e, "AngleableMixinClass"), I([G], e.prototype, "angle", 2), I([G], e.prototype, "reducedAngle", 2), e;
}
__name(rn, "rn");
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
  return u(e, "DisableableMixinClass"), I([G], e.prototype, "disabled", 2), e;
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
function ve(r, e) {
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
__name(ve, "ve");
u(ve, "__read");
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
var nn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(nn || (nn = {}));
var Wi = Se.Start;
var oi = Se.Stop;
var ai = Se.Raise;
var On = Se.Send;
var ya = Se.Cancel;
var rc = Se.NullEvent;
var Hs = Se.Assign;
var Sv = Se.After;
var Tv = Se.DoneState;
var xa = Se.Log;
var nc = Se.Init;
var Ui = Se.Invoke;
var Cv = Se.ErrorExecution;
var $s = Se.ErrorPlatform;
var Fs = Se.ErrorCustom;
var Vi = Se.Update;
var ic = Se.Choose;
var oc = Se.Pure;
var wa = ".";
var Ws = {};
var Ea = "xstate.guard";
var ac = "";
var Le = true;
var Sa;
function Yi(r, e, t) {
  t === void 0 && (t = wa);
  var i = si(r, t), l = si(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Yi(i[c], l[c]) : false;
  });
}
__name(Yi, "Yi");
u(Yi, "matchesState");
function Ta(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ta, "Ta");
u(Ta, "getEventType");
function Ca(r, e) {
  try {
    return jr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Ca, "Ca");
u(Ca, "toStatePath");
function Qf(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Qf, "Qf");
u(Qf, "isStateLike");
function si(r, e) {
  if (Qf(r))
    return r.value;
  if (jr(r))
    return Xi(r);
  if (typeof r != "string")
    return r;
  var t = Ca(r, e);
  return Xi(t);
}
__name(si, "si");
u(si, "toStateValue");
function Xi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Xi, "Xi");
u(Xi, "pathToStateValue");
function li(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(li, "li");
u(li, "mapValues");
function Us(r, e, t) {
  var i, l, c = {};
  try {
    for (var d = me(Object.keys(r)), h = d.next(); !h.done; h = d.next()) {
      var v = h.value, y = r[v];
      !t(y) || (c[v] = e(y, v, r));
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
__name(Us, "Us");
u(Us, "mapFilterValues");
var sc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = me(r), d = c.next(); !d.done; d = c.next()) {
        var h = d.value;
        l = l[h];
      }
    } catch (v) {
      t = { error: v };
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
function lc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var d = me(r), h = d.next(); !h.done; h = d.next()) {
        var v = h.value;
        c = c[e][v];
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
__name(lc, "lc");
u(lc, "nestedPath");
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
__name(Zi, "Zi");
u(Zi, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, De([], ve(r), false));
}
__name(Ne, "Ne");
u(Ne, "flatten");
function uc(r) {
  return jr(r) ? r : [r];
}
__name(uc, "uc");
u(uc, "toArrayStrict");
function Wt(r) {
  return r === void 0 ? [] : uc(r);
}
__name(Wt, "Wt");
u(Wt, "toArray");
function Pn(r, e, t) {
  var i, l;
  if (Te(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var d = me(Object.keys(r)), h = d.next(); !h.done; h = d.next()) {
      var v = h.value, y = r[v];
      Te(y) ? c[v] = y(e, t.data) : c[v] = y;
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
__name(Pn, "Pn");
u(Pn, "mapContext");
function cc(r) {
  return /^(done|error)\./.test(r);
}
__name(cc, "cc");
u(cc, "isBuiltInEvent");
function Vs(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
__name(Vs, "Vs");
u(Vs, "isPromiseLike");
function pc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(pc, "pc");
u(pc, "isBehavior");
function Oa(r, e) {
  var t, i, l = ve([[], []], 2), c = l[0], d = l[1];
  try {
    for (var h = me(r), v = h.next(); !v.done; v = h.next()) {
      var y = v.value;
      e(y) ? c.push(y) : d.push(y);
    }
  } catch (x) {
    t = { error: x };
  } finally {
    try {
      v && !v.done && (i = h.return) && i.call(h);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, d];
}
__name(Oa, "Oa");
u(Oa, "partition");
function dc(r, e) {
  return li(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: dc(t, l) };
    }
  });
}
__name(dc, "dc");
u(dc, "updateHistoryStates");
function fc(r, e) {
  return { current: e, states: dc(r, e) };
}
__name(fc, "fc");
u(fc, "updateHistoryValue");
function Xs(r, e, t, i) {
  Le || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, d) {
    var h, v, y = d.assignment, x = { state: i, action: d, _event: e }, O = {};
    if (Te(y))
      O = y(c, e.data, x);
    else
      try {
        for (var C = me(Object.keys(y)), A = C.next(); !A.done; A = C.next()) {
          var D = A.value, S = y[D];
          O[D] = Te(S) ? S(c, e.data, x) : S;
        }
      } catch (M) {
        h = { error: M };
      } finally {
        try {
          A && !A.done && (v = C.return) && v.call(C);
        } finally {
          if (h)
            throw h.error;
        }
      }
    return Object.assign({}, c, O);
  }, r);
  return l;
}
__name(Xs, "Xs");
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
function jr(r) {
  return Array.isArray(r);
}
__name(jr, "jr");
u(jr, "isArray");
function Te(r) {
  return typeof r == "function";
}
__name(Te, "Te");
u(Te, "isFunction");
function ge(r) {
  return typeof r == "string";
}
__name(ge, "ge");
u(ge, "isString");
function Pa(r, e) {
  if (!!r)
    return ge(r) ? { type: Ea, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: Ea, name: r.name, predicate: r } : r;
}
__name(Pa, "Pa");
u(Pa, "toGuard");
function hc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(hc, "hc");
u(hc, "isObservable");
var Cr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var kv = (Sa = {}, Sa[Cr] = function() {
  return this;
}, Sa[Symbol.observable] = function() {
  return this;
}, Sa);
function Or(r) {
  return !!r && "__xstatenode" in r;
}
__name(Or, "Or");
u(Or, "isMachine");
function mc(r) {
  return !!r && typeof r.send == "function";
}
__name(mc, "mc");
u(mc, "isActor");
function Ji(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
__name(Ji, "Ji");
u(Ji, "toEventObject");
function et(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Ji(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(et, "et");
u(et, "toSCXMLEvent");
function Mn(r, e) {
  var t = uc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Or(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
__name(Mn, "Mn");
u(Mn, "toTransitionConfigArray");
function vc(r) {
  if (!(r === void 0 || r === ac))
    return Wt(r);
}
__name(vc, "vc");
u(vc, "normalizeTarget");
function gc(r, e, t) {
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
__name(gc, "gc");
u(gc, "reportUnhandledExceptionOnInvocation");
function Ma(r, e, t, i, l) {
  var c = r.options.guards, d = { state: l, cond: e, _event: i };
  if (e.type === Ea)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, d);
  var h = c == null ? void 0 : c[e.type];
  if (!h)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return h(t, i.data, d);
}
__name(Ma, "Ma");
u(Ma, "evaluateGuard");
function Aa(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(Aa, "Aa");
u(Aa, "toInvokeSource");
function Ki(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Ki, "Ki");
u(Ki, "toObserver");
function Qi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Qi, "Qi");
u(Qi, "createInvokeId");
var An = et({ type: nc });
function _a(r, e) {
  return e && e[r] || void 0;
}
__name(_a, "_a");
u(_a, "getActionFunction");
function ui(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = _a(r, e);
    Te(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Te(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = _a(r.type, e);
    if (Te(i))
      t = Y(Y({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = Y(Y(Y({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(ui, "ui");
u(ui, "toActionObject");
var eo = u(function(r, e) {
  if (!r)
    return [];
  var t = jr(r) ? r : [r];
  return t.map(function(i) {
    return ui(i, e);
  });
}, "toActionObjects");
function ka(r) {
  var e = ui(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
__name(ka, "ka");
u(ka, "toActivityDefinition");
function bc(r) {
  return ge(r) ? { type: ai, event: r } : Ys(r, { to: nn.Internal });
}
__name(bc, "bc");
u(bc, "raise");
function eh(r) {
  return { type: ai, _event: et(r.event) };
}
__name(eh, "eh");
u(eh, "resolveRaise");
function Ys(r, e) {
  return { to: e ? e.to : void 0, type: On, event: Te(r) ? r : Ji(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : Ta(r) };
}
__name(Ys, "Ys");
u(Ys, "send");
function th(r, e, t, i) {
  var l = { _event: t }, c = et(Te(r.event) ? r.event(e, t.data, l) : r.event), d;
  if (ge(r.delay)) {
    var h = i && i[r.delay];
    d = Te(h) ? h(e, t.data, l) : h;
  } else
    d = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var v = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: v, _event: c, event: c.data, delay: d });
}
__name(th, "th");
u(th, "resolveSend");
var rh = u(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var yc = u(function(r) {
  return { type: ya, sendId: r };
}, "cancel");
function xc(r) {
  var e = ka(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
__name(xc, "xc");
u(xc, "start");
function wc(r) {
  var e = Te(r) ? r : ka(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
__name(wc, "wc");
u(wc, "stop");
function nh(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
__name(nh, "nh");
u(nh, "resolveStop");
function Ec(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
__name(Ec, "Ec");
u(Ec, "after");
function to(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(to, "to");
u(to, "done");
function ci(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(ci, "ci");
u(ci, "doneInvoke");
function _n(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(_n, "_n");
u(_n, "error");
function Ia(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var d = ve(c ? [[], l] : Oa(l, function(C) {
    return C.type === Hs;
  }), 2), h = d[0], v = d[1], y = h.length ? Xs(t, i, h, e) : t, x = c ? [t] : void 0, O = Ne(v.map(function(C) {
    var A;
    switch (C.type) {
      case ai:
        return eh(C);
      case On:
        var D = th(C, y, i, r.options.delays);
        return Le || Ue(!ge(C.delay) || typeof D.delay == "number", "No delay reference for delay expression '".concat(C.delay, "' was found on machine '").concat(r.id, "'")), D;
      case xa:
        return rh(C, y, i);
      case ic: {
        var S = C, M = (A = S.conds.find(function(W) {
          var ie = Pa(W.cond, r.options.guards);
          return !ie || Ma(r, ie, y, i, e);
        })) === null || A === void 0 ? void 0 : A.actions;
        if (!M)
          return [];
        var _ = ve(Ia(r, e, y, i, eo(Wt(M), r.options.actions), c), 2), k = _[0], L = _[1];
        return y = L, x == null || x.push(y), k;
      }
      case oc: {
        var M = C.get(y, i.data);
        if (!M)
          return [];
        var E = ve(Ia(r, e, y, i, eo(Wt(M), r.options.actions), c), 2), B = E[0], R = E[1];
        return y = R, x == null || x.push(y), B;
      }
      case oi:
        return nh(C, y, i);
      case Hs: {
        y = Xs(y, i, [C], e), x == null || x.push(y);
        break;
      }
      default:
        var X = ui(C, r.options.actions), V = X.exec;
        if (V && x) {
          var H = x.length - 1;
          X = Y(Y({}, X), { exec: function(W) {
            for (var ie = [], oe = 1; oe < arguments.length; oe++)
              ie[oe - 1] = arguments[oe];
            V.apply(void 0, De([x[H]], ve(ie), false));
          } });
        }
        return X;
    }
  }).filter(function(C) {
    return !!C;
  }));
  return [O, y];
}
__name(Ia, "Ia");
u(Ia, "resolveActions");
var Sc = [];
var In = u(function(r, e) {
  Sc.push(r);
  var t = e(r);
  return Sc.pop(), t;
}, "provide");
function Tc(r) {
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
__name(Tc, "Tc");
u(Tc, "createNullActor");
function Cc(r, e, t, i) {
  var l, c = Aa(r.src), d = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], h = r.data ? Pn(r.data, t, i) : void 0, v = d ? Oc(d, r.id, h) : Tc(r.id);
  return v.meta = r, v;
}
__name(Cc, "Cc");
u(Cc, "createInvocableActor");
function Oc(r, e, t) {
  var i = Tc(e);
  if (i.deferred = true, Or(r)) {
    var l = i.state = In(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(Oc, "Oc");
u(Oc, "createDeferredActor");
function ih(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(ih, "ih");
u(ih, "isActor");
function Pc(r) {
  return ih(r) && "id" in r;
}
__name(Pc, "Pc");
u(Pc, "isSpawnedActor");
function Mc(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Cr] = function() {
    return this;
  }, e), r);
}
__name(Mc, "Mc");
u(Mc, "toActorRef");
var ro = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function kn(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(kn, "kn");
u(kn, "getChildren");
function Js(r) {
  var e = [r];
  return ro(r) ? e : e.concat(Ne(kn(r).map(Js)));
}
__name(Js, "Js");
u(Js, "getAllStateNodes");
function Dn(r, e) {
  var t, i, l, c, d, h, v, y, x = new Set(r), O = Zs(x), C = new Set(e);
  try {
    for (var A = me(C), D = A.next(); !D.done; D = A.next())
      for (var S = D.value, M = S.parent; M && !C.has(M); )
        C.add(M), M = M.parent;
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
  var _ = Zs(C);
  try {
    for (var k = me(C), L = k.next(); !L.done; L = k.next()) {
      var S = L.value;
      if (S.type === "compound" && (!_.get(S) || !_.get(S).length))
        O.get(S) ? O.get(S).forEach(function(W) {
          return C.add(W);
        }) : S.initialStateNodes.forEach(function(W) {
          return C.add(W);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d = void 0, me(kn(S))), B = E.next(); !B.done; B = E.next()) {
            var R = B.value;
            C.has(R) || (C.add(R), O.get(R) ? O.get(R).forEach(function(W) {
              return C.add(W);
            }) : R.initialStateNodes.forEach(function(W) {
              return C.add(W);
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
      L && !L.done && (c = k.return) && c.call(k);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var X = me(C), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, M = S.parent; M && !C.has(M); )
        C.add(M), M = M.parent;
  } catch (H) {
    v = { error: H };
  } finally {
    try {
      V && !V.done && (y = X.return) && y.call(X);
    } finally {
      if (v)
        throw v.error;
    }
  }
  return C;
}
__name(Dn, "Dn");
u(Dn, "getConfiguration");
function Ac(r, e) {
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
    l[c.key] = Ac(c, e);
  }), l;
}
__name(Ac, "Ac");
u(Ac, "getValueFromAdj");
function Zs(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = me(r), c = l.next(); !c.done; c = l.next()) {
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
__name(Zs, "Zs");
u(Zs, "getAdjList");
function _c(r, e) {
  var t = Dn([r], e);
  return Ac(r, Zs(t));
}
__name(_c, "_c");
u(_c, "getValue");
function no(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(no, "no");
u(no, "has");
function Ic(r) {
  return De([], ve(new Set(Ne(De([], ve(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(Ic, "Ic");
u(Ic, "nextEvents");
function zn(r, e) {
  return e.type === "compound" ? kn(e).some(function(t) {
    return t.type === "final" && no(r, t);
  }) : e.type === "parallel" ? kn(e).every(function(t) {
    return zn(r, t);
  }) : false;
}
__name(zn, "zn");
u(zn, "isInFinalState");
function kc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(kc, "kc");
u(kc, "getMeta");
function Ks(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
__name(Ks, "Ks");
u(Ks, "getTagsFromConfiguration");
function Qs(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Qs(r[l], e[l]);
  });
}
__name(Qs, "Qs");
u(Qs, "stateValuesEqual");
function Dc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Dc, "Dc");
u(Dc, "isStateConfig");
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
    this.actions = [], this.activities = Ws, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || Ws, this.meta = kc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Ic(t.configuration);
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
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ge(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, De([], ve(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(d) {
        return c + t + d;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ii(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Yi(e, this.value);
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
var oh = { deferEvents: false };
var el = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, oh), e);
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
var tl = /* @__PURE__ */ new Map();
var ah = 0;
var io = { bookId: function() {
  return "x:".concat(ah++);
}, register: function(r, e) {
  return tl.set(r, e), r;
}, get: function(r) {
  return tl.get(r);
}, free: function(r) {
  tl.delete(r);
} };
function Da() {
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
__name(Da, "Da");
u(Da, "getGlobal");
function sh() {
  var r = Da();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(sh, "sh");
u(sh, "getDevTools");
function Rc(r) {
  if (!!Da()) {
    var e = sh();
    e && e.register(r);
  }
}
__name(Rc, "Rc");
u(Rc, "registerService");
function Nc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, d = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var y = l.shift();
        t = r.transition(t, y, v), i.forEach(function(x) {
          return x.next(t);
        });
      }
      c = false;
    }
  }, "flush"), h = Mc({ id: e.id, send: function(y) {
    l.push(y), d();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, x, O) {
    var C = Ki(y, x, O);
    return i.add(C), C.next(t), { unsubscribe: function() {
      i.delete(C);
    } };
  } }), v = { parent: e.parent, self: h, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(v) : t, h;
}
__name(Nc, "Nc");
u(Nc, "spawnBehavior");
var lh = { sync: false, autoForward: false };
var gt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(gt || (gt = {}));
var Gc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = gt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(x, O) {
      if (jr(x))
        return i.batch(x), i.state;
      var C = et(Ji(x, O));
      if (i.status === gt.Stopped)
        return Le || Ue(false, 'Event "'.concat(C.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(C.data))), i.state;
      if (i.status !== gt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(C.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(C.data)));
      return i.scheduler.schedule(function() {
        i.forward(C);
        var A = i.nextState(C);
        i.update(A, C);
      }), i._state;
    }, this.sendTo = function(x, O) {
      var C = i.parent && (O === nn.Parent || i.parent.id === O), A = C ? i.parent : ge(O) ? i.children.get(O) || io.get(O) : mc(O) ? O : void 0;
      if (!A) {
        if (!C)
          throw new Error("Unable to send event to child '".concat(O, "' from service '").concat(i.id, "'."));
        Le || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(x.type));
        return;
      }
      "machine" in A ? A.send(Y(Y({}, x), { name: x.name === Fs ? "".concat(_n(i.id)) : x.name, origin: i.sessionId })) : A.send(x.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c = l.clock, d = l.logger, h = l.parent, v = l.id, y = v !== void 0 ? v : e.id;
    this.id = y, this.logger = d, this.clock = c, this.parent = h, this.options = l, this.scheduler = new el({ deferEvents: this.options.deferEvents }), this.sessionId = io.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : In(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || Ue(this.status !== gt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = me(e.actions), d = c.next(); !d.done; d = c.next()) {
        var h = d.value;
        this.exec(h, e, t);
      }
    } catch (v) {
      i = { error: v };
    } finally {
      try {
        d && !d.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, d, h, v, y, x, O = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      O.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var C = me(this.eventListeners), A = C.next(); !A.done; A = C.next()) {
          var D = A.value;
          D(e.event);
        }
      } catch (H) {
        i = { error: H };
      } finally {
        try {
          A && !A.done && (l = C.return) && l.call(C);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var S = me(this.listeners), M = S.next(); !M.done; M = S.next()) {
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
      for (var _ = me(this.contextListeners), k = _.next(); !k.done; k = _.next()) {
        var L = k.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      h = { error: H };
    } finally {
      try {
        k && !k.done && (v = _.return) && v.call(_);
      } finally {
        if (h)
          throw h.error;
      }
    }
    var E = zn(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === O.machine;
      }), R = B && B.doneData ? Pn(B.doneData, e.context, t) : void 0;
      try {
        for (var X = me(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var D = V.value;
          D(ci(this.id, R));
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
    return this.listeners.add(e), this.status === gt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, d = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), d = e.complete.bind(e)), this.listeners.add(c), this.status !== gt.NotStarted && c(this.state), d && (this.status === gt.Stopped ? d() : this.onDone(d)), { unsubscribe: function() {
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
    if (this.status === gt.Running)
      return this;
    this.machine._init(), io.register(this.sessionId, this), this.initialized = true, this.status = gt.Running;
    var i = e === void 0 ? this.initialState : In(this, function() {
      return Dc(e) ? t.machine.resolveState(e) : t.machine.resolveState(yr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, An);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, d, h, v, y, x, O = this;
    try {
      for (var C = me(this.listeners), A = C.next(); !A.done; A = C.next()) {
        var D = A.value;
        this.listeners.delete(D);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        A && !A.done && (t = C.return) && t.call(C);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var S = me(this.stopListeners), M = S.next(); !M.done; M = S.next()) {
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
      for (var _ = me(this.contextListeners), k = _.next(); !k.done; k = _.next()) {
        var D = k.value;
        this.contextListeners.delete(D);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        k && !k.done && (d = _.return) && d.call(_);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var L = me(this.doneListeners), E = L.next(); !E.done; E = L.next()) {
        var D = E.value;
        this.doneListeners.delete(D);
      }
    } catch (V) {
      h = { error: V };
    } finally {
      try {
        E && !E.done && (v = L.return) && v.call(L);
      } finally {
        if (h)
          throw h.error;
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
          O.exec(U, O.state);
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
    return this.scheduler.clear(), this.scheduler = new el({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = gt.Stopped, this._initialState = void 0, io.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === gt.NotStarted && this.options.deferEvents)
      Le || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== gt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, d = false, h = [], v = u(function(C) {
        var A = et(C);
        t.forward(A), c = In(t, function() {
          return t.machine.transition(c, A);
        }), h.push.apply(h, De([], ve(c.actions.map(function(D) {
          return zc(D, c);
        })), false)), d = d || !!c.changed;
      }, "_loop_1");
      try {
        for (var y = me(e), x = y.next(); !x.done; x = y.next()) {
          var O = x.value;
          v(O);
        }
      } catch (C) {
        i = { error: C };
      } finally {
        try {
          x && !x.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = d, c.actions = h, t.update(c, et(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = et(e);
    if (i.name.indexOf($s) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf($s) === 0;
    }))
      throw i.data.data;
    var l = In(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = me(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var d = c.value, h = this.children.get(d);
        if (!h)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d, "'."));
        h.send(e);
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
    var l = t.context, c = t._event, d = e.exec || _a(e.type, i), h = Te(d) ? d : d ? d.exec : e.exec;
    if (h)
      try {
        return h(l, c.data, { action: e, state: this.state, _event: c });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case On:
        var v = e;
        if (typeof v.delay == "number") {
          this.defer(v);
          return;
        } else
          v.to ? this.sendTo(v._event, v.to) : this.send(v._event);
        break;
      case ya:
        this.cancel(e.sendId);
        break;
      case Wi: {
        if (this.status !== gt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Se.Invoke) {
          var x = Aa(y.src), O = this.machine.options.services ? this.machine.options.services[x.type] : void 0, C = y.id, A = y.data;
          Le || Ue(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var D = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!O) {
            Le || Ue(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = A ? Pn(A, l, c) : void 0;
          if (typeof O == "string")
            return;
          var M = Te(O) ? O(l, c.data, { data: S, src: x, meta: y.meta }) : O;
          if (!M)
            return;
          var _ = void 0;
          Or(M) && (M = S ? M.withContext(S) : M, _ = { autoForward: D }), this.spawn(M, C, _);
        } else
          this.spawnActivity(y);
        break;
      }
      case oi: {
        this.stopChild(e.activity.id);
        break;
      }
      case xa:
        var k = e.label, L = e.value;
        k ? this.logger(k, L) : this.logger(L);
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
    if (Vs(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Te(e))
      return this.spawnCallback(e, t);
    if (Pc(e))
      return this.spawnActor(e, t);
    if (hc(e))
      return this.spawnObservable(e, t);
    if (Or(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (pc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c = Y(Y({}, lh), t);
    c.sync && l.onTransition(function(h) {
      i.send(Vi, { state: h, id: l.id });
    });
    var d = l;
    return this.children.set(l.id, d), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(h) {
      i.removeChild(l.id), i.send(et(h, { origin: l.id }));
    }).start(), d;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Nc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, d;
    e.then(function(v) {
      c || (d = v, l.removeChild(t), l.send(et(ci(t, v), { origin: t })));
    }, function(v) {
      if (!c) {
        l.removeChild(t);
        var y = _n(t, v);
        try {
          l.send(et(y, { origin: t }));
        } catch (x) {
          gc(v, x, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var h = (i = { id: t, send: function() {
    }, subscribe: function(v, y, x) {
      var O = Ki(v, y, x), C = false;
      return e.then(function(A) {
        C || (O.next(A), !C && O.complete());
      }, function(A) {
        C || O.error(A);
      }), { unsubscribe: function() {
        return C = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return d;
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, h), h;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v, y = u(function(C) {
      v = C, h.forEach(function(A) {
        return A(C);
      }), !c && l.send(et(C, { origin: t }));
    }, "receive"), x;
    try {
      x = e(y, function(C) {
        d.add(C);
      });
    } catch (C) {
      this.send(_n(t, C));
    }
    if (Vs(x))
      return this.spawnPromise(x, t);
    var O = (i = { id: t, send: function(C) {
      return d.forEach(function(A) {
        return A(C);
      });
    }, subscribe: function(C) {
      var A = Ki(C);
      return h.add(A.next), { unsubscribe: function() {
        h.delete(A.next);
      } };
    }, stop: function() {
      c = true, Te(x) && x();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return v;
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, O), O;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, d = e.subscribe(function(v) {
      c = v, l.send(et(v, { origin: t }));
    }, function(v) {
      l.removeChild(t), l.send(et(_n(t, v), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(et(ci(t), { origin: t }));
    }), h = (i = { id: t, send: function() {
    }, subscribe: function(v, y, x) {
      return e.subscribe(v, y, x);
    }, stop: function() {
      return d.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Cr] = function() {
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
    } }, i[Cr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = Da();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Rc(this);
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
  var t = new Gc(r, e);
  return t;
}
__name(ot, "ot");
u(ot, "interpret");
function uh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(uh, "uh");
u(uh, "toInvokeSource");
function oo(r) {
  return Y(Y({ type: Ui }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ii(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: Ui, src: uh(r.src) });
  } });
}
__name(oo, "oo");
u(oo, "toInvokeDefinition");
var fi = "";
var rl = "#";
var ao = "*";
var pi = {};
var di = u(function(r) {
  return r[0] === rl;
}, "isStateId");
var ch = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var ph = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Or(c.target));
  }), l = e === fi ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var qc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(ch(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : wa), this.id = this.config.id || De([this.machine.key], ve(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d = this.config.schema) !== null && d !== void 0 ? d : {}, this.description = this.config.description, Le || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? li(this.config.states, function(y, x) {
      var O, C = new r(y, {}, void 0, { parent: c, key: x });
      return Object.assign(c.idMap, Y((O = {}, O[C.id] = C, O), C.idMap)), C;
    }) : pi;
    var h = 0;
    function v(y) {
      var x, O;
      y.order = h++;
      try {
        for (var C = me(kn(y)), A = C.next(); !A.done; A = C.next()) {
          var D = A.value;
          v(D);
        }
      } catch (S) {
        x = { error: S };
      } finally {
        try {
          A && !A.done && (O = C.return) && O.call(C);
        } finally {
          if (x)
            throw x.error;
        }
      }
    }
    __name(v, "v");
    u(v, "dfs"), v(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var x = y.event;
      return x === fi;
    }) : fi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Wt(this.config.entry || this.config.onEntry).map(function(y) {
      return ui(y);
    }), this.onExit = Wt(this.config.exit || this.config.onExit).map(function(y) {
      return ui(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Wt(this.config.invoke).map(function(y, x) {
      var O, C;
      if (Or(y)) {
        var A = Qi(c.id, x);
        return c.machine.options.services = Y((O = {}, O[A] = y, O), c.machine.options.services), oo({ src: A, id: A });
      } else if (ge(y.src)) {
        var A = y.id || Qi(c.id, x);
        return oo(Y(Y({}, y), { id: A, src: y.src }));
      } else if (Or(y.src) || Te(y.src)) {
        var A = y.id || Qi(c.id, x);
        return c.machine.options.services = Y((C = {}, C[A] = y.src, C), c.machine.options.services), oo(Y(Y({ id: A }, y), { src: A }));
      } else {
        var D = y.src;
        return oo(Y(Y({ id: Qi(c.id, x) }, y), { src: D }));
      }
    }), this.activities = Wt(this.config.activities).concat(this.invoke).map(function(y) {
      return ka(y);
    }), this.transition = this.transition.bind(this), this.tags = Wt(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Js(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, d = i.guards, h = i.services, v = i.delays;
    return new r(this.config, { actions: Y(Y({}, l), e.actions), activities: Y(Y({}, c), e.activities), guards: Y(Y({}, d), e.guards), services: Y(Y({}, h), e.services), delays: Y(Y({}, v), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Te(this._context) ? this._context() : this._context;
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
      return t ? c : c || l.eventType === ao;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, d) {
      var h = Te(c) ? "".concat(e.id, ":delay[").concat(d, "]") : c, v = Ec(h, e.id);
      return e.onEntry.push(Ys(v, { delay: c })), e.onExit.push(yc(v)), v;
    }, "mutateEntryExit"), l = jr(t) ? t.map(function(c, d) {
      var h = i(c.delay, d);
      return Y(Y({}, c), { event: h });
    }) : Ne(Object.keys(t).map(function(c, d) {
      var h = t[c], v = ge(h) ? { target: h } : h, y = isNaN(+c) ? c : +c, x = i(y, d);
      return Wt(v).map(function(O) {
        return Y(Y({}, O), { event: x, delay: y });
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
    var l = e instanceof yr ? e.value : si(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var d = Object.keys(l), h = [this];
    return h.push.apply(h, De([], ve(Ne(d.map(function(v) {
      return i.getStateNode(v).getStateNodes(l[v]);
    }))), false)), h;
  }, r.prototype.handles = function(e) {
    var t = Ta(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof yr ? e : yr.create(e), i = Array.from(Dn([], this.getStateNodes(t.value)));
    return new yr(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: zn(i, this), tags: Ks(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), d = c._transition(e[l[0]], t, i);
    return !d || !d.transitions.length ? this.next(t, i) : d;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, d = {};
    try {
      for (var h = me(Object.keys(e)), v = h.next(); !v.done; v = h.next()) {
        var y = v.value, x = e[y];
        if (!!x) {
          var O = this.getStateNode(y), C = O._transition(x, t, i);
          C && (d[y] = C);
        }
      }
    } catch (k) {
      l = { error: k };
    } finally {
      try {
        v && !v.done && (c = h.return) && c.call(h);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var A = Object.keys(d).map(function(k) {
      return d[k];
    }), D = Ne(A.map(function(k) {
      return k.transitions;
    })), S = A.some(function(k) {
      return k.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var M = Ne(A.map(function(k) {
      return k.entrySet;
    })), _ = Ne(Object.keys(d).map(function(k) {
      return d[k].configuration;
    }));
    return { transitions: D, entrySet: M, exitSet: Ne(A.map(function(k) {
      return k.exitSet;
    })), configuration: _, source: t, actions: Ne(Object.keys(d).map(function(k) {
      return d[k].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, et(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, d = t.name, h = [], v = [], y;
    try {
      for (var x = me(this.getCandidates(d)), O = x.next(); !O.done; O = x.next()) {
        var C = O.value, A = C.cond, D = C.in, S = e.context, M = D ? ge(D) && di(D) ? e.matches(si(this.getStateNodeById(D).path, this.delimiter)) : Yi(si(D, this.delimiter), sc(this.path.slice(0, -2))(e.value)) : true, _ = false;
        try {
          _ = !A || Ma(this.machine, A, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(A.name || A.type, "' in transition for event '").concat(d, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (_ && M) {
          C.target !== void 0 && (v = C.target), h.push.apply(h, De([], ve(C.actions), false)), y = C;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        O && !O.done && (l = x.return) && l.call(x);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!v.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: h };
      var k = Ne(v.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), L = !!y.internal, E = L ? [] : Ne(k.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: L ? [] : [this], configuration: k, source: e, actions: h };
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
    var c, d, h, v, y = Dn([], l ? this.getStateNodes(l.value) : [this]), x = e.configuration.length ? Dn(y, e.configuration) : y;
    try {
      for (var O = me(x), C = O.next(); !C.done; C = O.next()) {
        var A = C.value;
        no(y, A) || e.entrySet.push(A);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        C && !C.done && (d = O.return) && d.call(O);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var D = me(y), S = D.next(); !S.done; S = D.next()) {
        var A = S.value;
        (!no(x, A) || no(e.exitSet, A.parent)) && e.exitSet.push(A);
      }
    } catch (X) {
      h = { error: X };
    } finally {
      try {
        S && !S.done && (v = D.return) && v.call(D);
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
      V.push(to(X.id, X.doneData), to(H.id, X.doneData ? Pn(X.doneData, t, i) : void 0));
      var W = H.parent;
      return W.type === "parallel" && kn(W).every(function(ie) {
        return zn(e.configuration, ie);
      }) && V.push(to(W.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var _ = new Set(e.entrySet), k = new Set(e.exitSet), L = ve([Ne(Array.from(_).map(function(X) {
      return De(De([], ve(X.activities.map(function(V) {
        return xc(V);
      })), false), ve(X.onEntry), false);
    })).concat(M.map(bc)), Ne(Array.from(k).map(function(X) {
      return De(De([], ve(X.onExit), false), ve(X.activities.map(function(V) {
        return wc(V);
      })), false);
    }))], 2), E = L[0], B = L[1], R = eo(B.concat(e.actions).concat(E), this.machine.options.actions);
    return R;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = et(t), c;
    if (e instanceof yr)
      c = i === void 0 ? e : this.resolveState(yr.from(e, i));
    else {
      var d = ge(e) ? this.resolve(Xi(this.getResolvedPath(e))) : this.resolve(e), h = i != null ? i : this.machine.context;
      c = this.resolveState(yr.from(d, h));
    }
    if (!Le && l.name === ao)
      throw new Error("An event cannot have the wildcard type ('".concat(ao, "')"));
    if (this.strict && !this.events.includes(l.name) && !cc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var v = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, y = Dn([], this.getStateNodes(c.value)), x = v.configuration.length ? Dn(y, v.configuration) : y;
    return v.configuration = De([], ve(x), false), this.resolveTransition(v, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], ve(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, d, h = this;
    l === void 0 && (l = An);
    var v = e.configuration, y = !t || e.transitions.length > 0, x = y ? _c(this.machine, v) : void 0, O = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, C = this.getActions(e, i, l, t), A = t ? Y({}, t.activities) : {};
    try {
      for (var D = me(C), S = D.next(); !S.done; S = D.next()) {
        var M = S.value;
        M.type === Wi ? A[M.activity.id || M.activity.type] = M : M.type === oi && (A[M.activity.id || M.activity.type] = false);
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
    var _ = ve(Ia(this, t, i, l, C, this.machine.config.preserveActionOrder), 2), k = _[0], L = _[1], E = ve(Oa(k, function(fe) {
      return fe.type === ai || fe.type === On && fe.to === nn.Internal;
    }), 2), B = E[0], R = E[1], X = k.filter(function(fe) {
      var Ye;
      return fe.type === Wi && ((Ye = fe.activity) === null || Ye === void 0 ? void 0 : Ye.type) === Ui;
    }), V = X.reduce(function(fe, Ye) {
      return fe[Ye.activity.id] = Cc(Ye.activity, h.machine, L, l), fe;
    }, t ? Y({}, t.children) : {}), H = y ? e.configuration : t ? t.configuration : [], W = zn(H, this), ie = new yr({ value: x || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: x ? O ? fc(O, x) : void 0 : t ? t.historyValue : void 0, history: !x || e.source ? t : void 0, actions: x ? R : [], activities: x ? A : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: W, tags: Ks(H), machine: this }), oe = i !== L;
    ie.changed = l.name === Vi || oe;
    var U = ie.history;
    U && delete U.history;
    var ce = !W && (this._transient || v.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ce || l.name === fi))
      return ie;
    var Re = ie;
    if (!W)
      for (ce && (Re = this.resolveRaisedTransition(Re, { type: rc }, l)); B.length; ) {
        var We = B.shift();
        Re = this.resolveRaisedTransition(Re, We._event, l);
      }
    var qe = Re.changed || (U ? !!Re.actions.length || oe || typeof U.value != typeof Re.value || !Qs(Re.value, U.value) : void 0);
    return Re.changed = qe, Re.history = U, Re;
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
    var t = di(e) ? e.slice(rl.length) : e;
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
    for (var t = Ca(e, this.delimiter).slice(), i = this; t.length; ) {
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
        return li(this.initialStateValue, function(c, d) {
          return c ? i.getStateNode(d).resolve(e[d] || c) : pi;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? li(e, function(c, d) {
          return c ? i.getStateNode(d).resolve(c) : pi;
        }) : this.initialStateValue || {};
      default:
        return e || pi;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (di(e)) {
      var t = this.machine.idMap[e.slice(rl.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Ca(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = Us(this.states, function(i) {
        return i.initialStateValue || pi;
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
      ge(t.target) ? e = di(t.target) ? Xi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
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
      return { current: e || this.initialStateValue, states: Us(this.states, function(t, i) {
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
      return l ? Ne(Zi(l).map(function(d) {
        return i.getFromRelativePath(d);
      })) : i.initialStateNodes;
    }
    var c = lc(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Zi(c).map(function(d) {
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
        for (var h = me(Object.keys(c)), v = h.next(); !v.done; v = h.next()) {
          var y = v.value, x = c[y];
          if (x.states)
            try {
              for (var O = (i = void 0, me(x.events)), C = O.next(); !C.done; C = O.next()) {
                var A = C.value;
                d.add("".concat(A));
              }
            } catch (D) {
              i = { error: D };
            } finally {
              try {
                C && !C.done && (l = O.return) && l.call(O);
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
          v && !v.done && (t = h.return) && t.call(h);
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
    var t = this, i = vc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(v) {
      return ge(v) && v[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, d = this.resolveTarget(i), h = Y(Y({}, e), { actions: eo(Wt(e.actions)), cond: Pa(e.cond, c), target: d, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Y(Y({}, h), { target: h.target ? h.target.map(function(v) {
        return "#".concat(v.id);
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
      var c = this.config.on, d = ao, h = c[d], v = h === void 0 ? [] : h, y = ii(c, [typeof d == "symbol" ? d : d + ""]);
      l = Ne(Object.keys(y).map(function(k) {
        !Le && k === fi && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = Mn(k, y[k]);
        return Le || ph(i, k, L), L;
      }).concat(Mn(ao, v)));
    }
    var x = this.config.always ? Mn("", this.config.always) : [], O = this.config.onDone ? Mn(String(to(this.id)), this.config.onDone) : [];
    Le || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var C = Ne(this.invoke.map(function(k) {
      var L = [];
      return k.onDone && L.push.apply(L, De([], ve(Mn(String(ci(k.id)), k.onDone)), false)), k.onError && L.push.apply(L, De([], ve(Mn(String(_n(k.id)), k.onError)), false)), L;
    })), A = this.after, D = Ne(De(De(De(De([], ve(O), false), ve(C), false), ve(l), false), ve(x), false).map(function(k) {
      return Wt(k).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var S = me(A), M = S.next(); !M.done; M = S.next()) {
        var _ = M.value;
        D.push(_);
      }
    } catch (k) {
      e = { error: k };
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
function bt(r, e) {
  return new qc(r, e);
}
__name(bt, "bt");
u(bt, "createMachine");
var so = Hi(za(), 1);
var Ra = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var il = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Pe(r) {
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
        Ra(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), il(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
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
      } }, guards: { isOnCircuitDropzone: () => Ra(this.dropzone), isOnPaletteDropzone: () => il(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Ra(this.dropzone), isTrashed: () => !this.snapped } });
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
      return ee.notNull(i), !il(i) && !Ra(i) ? null : i;
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
  return u(e, "DraggableMixinClass"), I([G], e.prototype, "operationX", 2), I([G], e.prototype, "operationY", 2), I([G], e.prototype, "grabbed", 2), I([G], e.prototype, "dragging", 2), I([G], e.prototype, "snapped", 2), I([G], e.prototype, "bit", 2), I([G], e.prototype, "debugDraggable", 2), e;
}
__name(Pe, "Pe");
u(Pe, "DraggableMixin");
var Rn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function jc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), I([G], e.prototype, "flag", 2), e;
}
__name(jc, "jc");
u(jc, "FlaggableMixin");
var Fe = "top";
var tt = "bottom";
var Ze = "right";
var Ve = "left";
var Na = "auto";
var on = [Fe, tt, Ze, Ve];
var Br = "start";
var Nn = "end";
var Bc = "clippingParents";
var Ga = "viewport";
var hi = "popper";
var Hc = "reference";
var ol = on.reduce(function(r, e) {
  return r.concat([e + "-" + Br, e + "-" + Nn]);
}, []);
var qa = [].concat(on, [Na]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Br, e + "-" + Nn]);
}, []);
var dh = "beforeRead";
var fh = "read";
var hh = "afterRead";
var mh = "beforeMain";
var vh = "main";
var gh = "afterMain";
var bh = "beforeWrite";
var yh = "write";
var xh = "afterWrite";
var $c = [dh, fh, hh, mh, vh, gh, bh, yh, xh];
function at(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(at, "at");
u(at, "getNodeName");
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
function rt(r) {
  var e = Xe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(rt, "rt");
u(rt, "isHTMLElement");
function La(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Xe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(La, "La");
u(La, "isShadowRoot");
function wh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !rt(c) || !at(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(d) {
      var h = l[d];
      h === false ? c.removeAttribute(d) : c.setAttribute(d, h === true ? "" : h);
    }));
  });
}
__name(wh, "wh");
u(wh, "applyStyles");
function Eh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), h = d.reduce(function(v, y) {
        return v[y] = "", v;
      }, {});
      !rt(l) || !at(l) || (Object.assign(l.style, h), Object.keys(c).forEach(function(v) {
        l.removeAttribute(v);
      }));
    });
  };
}
__name(Eh, "Eh");
u(Eh, "effect");
var lo = { name: "applyStyles", enabled: true, phase: "write", fn: wh, effect: Eh, requires: ["computeStyles"] };
function st(r) {
  return r.split("-")[0];
}
__name(st, "st");
u(st, "getBasePlacement");
var xr = Math.max;
var Gn = Math.min;
var Hr = Math.round;
function Kt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (rt(r) && e) {
    var c = r.offsetHeight, d = r.offsetWidth;
    d > 0 && (i = Hr(t.width) / d || 1), c > 0 && (l = Hr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Kt, "Kt");
u(Kt, "getBoundingClientRect");
function qn(r) {
  var e = Kt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(qn, "qn");
u(qn, "getLayoutRect");
function uo(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && La(t)) {
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
function Mt(r) {
  return Xe(r).getComputedStyle(r);
}
__name(Mt, "Mt");
u(Mt, "getComputedStyle");
function al(r) {
  return ["table", "td", "th"].indexOf(at(r)) >= 0;
}
__name(al, "al");
u(al, "isTableElement");
function yt(r) {
  return ((Pr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(yt, "yt");
u(yt, "getDocumentElement");
function $r(r) {
  return at(r) === "html" ? r : r.assignedSlot || r.parentNode || (La(r) ? r.host : null) || yt(r);
}
__name($r, "$r");
u($r, "getParentNode");
function Fc(r) {
  return !rt(r) || Mt(r).position === "fixed" ? null : r.offsetParent;
}
__name(Fc, "Fc");
u(Fc, "getTrueOffsetParent");
function Sh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && rt(r)) {
    var i = Mt(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = $r(r); rt(l) && ["html", "body"].indexOf(at(l)) < 0; ) {
    var c = Mt(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(Sh, "Sh");
u(Sh, "getContainingBlock");
function wr(r) {
  for (var e = Xe(r), t = Fc(r); t && al(t) && Mt(t).position === "static"; )
    t = Fc(t);
  return t && (at(t) === "html" || at(t) === "body" && Mt(t).position === "static") ? e : t || Sh(r) || e;
}
__name(wr, "wr");
u(wr, "getOffsetParent");
function Ln(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Ln, "Ln");
u(Ln, "getMainAxisFromPlacement");
function jn(r, e, t) {
  return xr(r, Gn(e, t));
}
__name(jn, "jn");
u(jn, "within");
function Wc(r, e, t) {
  var i = jn(r, e, t);
  return i > t ? t : i;
}
__name(Wc, "Wc");
u(Wc, "withinMaxClamp");
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
var Th = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, po(typeof e != "number" ? e : fo(e, on));
}, "toPaddingObject");
function Ch(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, h = st(t.placement), v = Ln(h), y = [Ve, Ze].indexOf(h) >= 0, x = y ? "height" : "width";
  if (!(!c || !d)) {
    var O = Th(l.padding, t), C = qn(c), A = v === "y" ? Fe : Ve, D = v === "y" ? tt : Ze, S = t.rects.reference[x] + t.rects.reference[v] - d[v] - t.rects.popper[x], M = d[v] - t.rects.reference[v], _ = wr(c), k = _ ? v === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, L = S / 2 - M / 2, E = O[A], B = k - C[x] - O[D], R = k / 2 - C[x] / 2 + L, X = jn(E, R, B), V = v;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - R, e);
  }
}
__name(Ch, "Ch");
u(Ch, "arrow");
function Oh(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !uo(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(Oh, "Oh");
u(Oh, "effect");
var Uc = { name: "arrow", enabled: true, phase: "main", fn: Ch, effect: Oh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qt(r) {
  return r.split("-")[1];
}
__name(Qt, "Qt");
u(Qt, "getVariation");
var Ph = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Mh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Hr(e * l) / l || 0, y: Hr(t * l) / l || 0 };
}
__name(Mh, "Mh");
u(Mh, "roundOffsetsByDPR");
function Vc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, d = r.offsets, h = r.position, v = r.gpuAcceleration, y = r.adaptive, x = r.roundOffsets, O = r.isFixed, C = d.x, A = C === void 0 ? 0 : C, D = d.y, S = D === void 0 ? 0 : D, M = typeof x == "function" ? x({ x: A, y: S }) : { x: A, y: S };
  A = M.x, S = M.y;
  var _ = d.hasOwnProperty("x"), k = d.hasOwnProperty("y"), L = Ve, E = Fe, B = window;
  if (y) {
    var R = wr(t), X = "clientHeight", V = "clientWidth";
    if (R === Xe(t) && (R = yt(t), Mt(R).position !== "static" && h === "absolute" && (X = "scrollHeight", V = "scrollWidth")), R = R, l === Fe || (l === Ve || l === Ze) && c === Nn) {
      E = tt;
      var H = O && B.visualViewport ? B.visualViewport.height : R[X];
      S -= H - i.height, S *= v ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === tt) && c === Nn) {
      L = Ze;
      var W = O && B.visualViewport ? B.visualViewport.width : R[V];
      A -= W - i.width, A *= v ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: h }, y && Ph), oe = x === true ? Mh({ x: A, y: S }) : { x: A, y: S };
  if (A = oe.x, S = oe.y, v) {
    var U;
    return Object.assign({}, ie, (U = {}, U[E] = k ? "0" : "", U[L] = _ ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + A + "px, " + S + "px)" : "translate3d(" + A + "px, " + S + "px, 0)", U));
  }
  return Object.assign({}, ie, (e = {}, e[E] = k ? S + "px" : "", e[L] = _ ? A + "px" : "", e.transform = "", e));
}
__name(Vc, "Vc");
u(Vc, "mapToStyles");
function Ah(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, d = c === void 0 ? true : c, h = t.roundOffsets, v = h === void 0 ? true : h;
  if (false)
    var y;
  var x = { placement: st(e.placement), variation: Qt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Vc(Object.assign({}, x, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d, roundOffsets: v })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Vc(Object.assign({}, x, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: v })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(Ah, "Ah");
u(Ah, "computeStyles");
var Xc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Ah, data: {} };
var ja = { passive: true };
function _h(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, d = i.resize, h = d === void 0 ? true : d, v = Xe(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && y.forEach(function(x) {
    x.addEventListener("scroll", t.update, ja);
  }), h && v.addEventListener("resize", t.update, ja), function() {
    c && y.forEach(function(x) {
      x.removeEventListener("scroll", t.update, ja);
    }), h && v.removeEventListener("resize", t.update, ja);
  };
}
__name(_h, "_h");
u(_h, "effect");
var Yc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: _h, data: {} };
var Ih = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Ih[e];
  });
}
__name(mi, "mi");
u(mi, "getOppositePlacement");
var kh = { start: "end", end: "start" };
function Ba(r) {
  return r.replace(/start|end/g, function(e) {
    return kh[e];
  });
}
__name(Ba, "Ba");
u(Ba, "getOppositeVariationPlacement");
function Bn(r) {
  var e = Xe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(Bn, "Bn");
u(Bn, "getWindowScroll");
function Hn(r) {
  return Kt(yt(r)).left + Bn(r).scrollLeft;
}
__name(Hn, "Hn");
u(Hn, "getWindowScrollBarX");
function sl(r) {
  var e = Xe(r), t = yt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, d = 0, h = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = i.offsetLeft, h = i.offsetTop)), { width: l, height: c, x: d + Hn(r), y: h };
}
__name(sl, "sl");
u(sl, "getViewportRect");
function ll(r) {
  var e, t = yt(r), i = Bn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = xr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = xr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), h = -i.scrollLeft + Hn(r), v = -i.scrollTop;
  return Mt(l || t).direction === "rtl" && (h += xr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: h, y: v };
}
__name(ll, "ll");
u(ll, "getDocumentRect");
function $n(r) {
  var e = Mt(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name($n, "$n");
u($n, "isScrollParent");
function Ha(r) {
  return ["html", "body", "#document"].indexOf(at(r)) >= 0 ? r.ownerDocument.body : rt(r) && $n(r) ? r : Ha($r(r));
}
__name(Ha, "Ha");
u(Ha, "getScrollParent");
function an(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Ha(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Xe(i), d = l ? [c].concat(c.visualViewport || [], $n(i) ? i : []) : i, h = e.concat(d);
  return l ? h : h.concat(an($r(d)));
}
__name(an, "an");
u(an, "listScrollParents");
function vi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(vi, "vi");
u(vi, "rectToClientRect");
function Dh(r) {
  var e = Kt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(Dh, "Dh");
u(Dh, "getInnerBoundingClientRect");
function Zc(r, e) {
  return e === Ga ? vi(sl(r)) : Pr(e) ? Dh(e) : vi(ll(yt(r)));
}
__name(Zc, "Zc");
u(Zc, "getClientRectFromMixedType");
function zh(r) {
  var e = an($r(r)), t = ["absolute", "fixed"].indexOf(Mt(r).position) >= 0, i = t && rt(r) ? wr(r) : r;
  return Pr(i) ? e.filter(function(l) {
    return Pr(l) && uo(l, i) && at(l) !== "body";
  }) : [];
}
__name(zh, "zh");
u(zh, "getClippingParents");
function ul(r, e, t) {
  var i = e === "clippingParents" ? zh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], d = l.reduce(function(h, v) {
    var y = Zc(r, v);
    return h.top = xr(y.top, h.top), h.right = Gn(y.right, h.right), h.bottom = Gn(y.bottom, h.bottom), h.left = xr(y.left, h.left), h;
  }, Zc(r, c));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
__name(ul, "ul");
u(ul, "getClippingRect");
function ho(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? st(i) : null, c = i ? Qt(i) : null, d = e.x + e.width / 2 - t.width / 2, h = e.y + e.height / 2 - t.height / 2, v;
  switch (l) {
    case Fe:
      v = { x: d, y: e.y - t.height };
      break;
    case tt:
      v = { x: d, y: e.y + e.height };
      break;
    case Ze:
      v = { x: e.x + e.width, y: h };
      break;
    case Ve:
      v = { x: e.x - t.width, y: h };
      break;
    default:
      v = { x: e.x, y: e.y };
  }
  var y = l ? Ln(l) : null;
  if (y != null) {
    var x = y === "y" ? "height" : "width";
    switch (c) {
      case Br:
        v[y] = v[y] - (e[x] / 2 - t[x] / 2);
        break;
      case Nn:
        v[y] = v[y] + (e[x] / 2 - t[x] / 2);
        break;
      default:
    }
  }
  return v;
}
__name(ho, "ho");
u(ho, "computeOffsets");
function Er(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, d = c === void 0 ? Bc : c, h = t.rootBoundary, v = h === void 0 ? Ga : h, y = t.elementContext, x = y === void 0 ? hi : y, O = t.altBoundary, C = O === void 0 ? false : O, A = t.padding, D = A === void 0 ? 0 : A, S = po(typeof D != "number" ? D : fo(D, on)), M = x === hi ? Hc : hi, _ = r.rects.popper, k = r.elements[C ? M : x], L = ul(Pr(k) ? k : k.contextElement || yt(r.elements.popper), d, v), E = Kt(r.elements.reference), B = ho({ reference: E, element: _, strategy: "absolute", placement: l }), R = vi(Object.assign({}, _, B)), X = x === hi ? R : E, V = { top: L.top - X.top + S.top, bottom: X.bottom - L.bottom + S.bottom, left: L.left - X.left + S.left, right: X.right - L.right + S.right }, H = r.modifiersData.offset;
  if (x === hi && H) {
    var W = H[l];
    Object.keys(V).forEach(function(ie) {
      var oe = [Ze, tt].indexOf(ie) >= 0 ? 1 : -1, U = [Fe, tt].indexOf(ie) >= 0 ? "y" : "x";
      V[ie] += W[U] * oe;
    });
  }
  return V;
}
__name(Er, "Er");
u(Er, "detectOverflow");
function cl(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, d = t.padding, h = t.flipVariations, v = t.allowedAutoPlacements, y = v === void 0 ? qa : v, x = Qt(i), O = x ? h ? ol : ol.filter(function(D) {
    return Qt(D) === x;
  }) : on, C = O.filter(function(D) {
    return y.indexOf(D) >= 0;
  });
  C.length === 0 && (C = O);
  var A = C.reduce(function(D, S) {
    return D[S] = Er(r, { placement: S, boundary: l, rootBoundary: c, padding: d })[st(S)], D;
  }, {});
  return Object.keys(A).sort(function(D, S) {
    return A[D] - A[S];
  });
}
__name(cl, "cl");
u(cl, "computeAutoPlacement");
function Rh(r) {
  if (st(r) === Na)
    return [];
  var e = mi(r);
  return [Ba(r), e, Ba(e)];
}
__name(Rh, "Rh");
u(Rh, "getExpandedFallbackPlacements");
function Nh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, h = d === void 0 ? true : d, v = t.fallbackPlacements, y = t.padding, x = t.boundary, O = t.rootBoundary, C = t.altBoundary, A = t.flipVariations, D = A === void 0 ? true : A, S = t.allowedAutoPlacements, M = e.options.placement, _ = st(M), k = _ === M, L = v || (k || !D ? [mi(M)] : Rh(M)), E = [M].concat(L).reduce(function(K, Tt) {
      return K.concat(st(Tt) === Na ? cl(e, { placement: Tt, boundary: x, rootBoundary: O, padding: y, flipVariations: D, allowedAutoPlacements: S }) : Tt);
    }, []), B = e.rects.reference, R = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, H = E[0], W = 0; W < E.length; W++) {
      var ie = E[W], oe = st(ie), U = Qt(ie) === Br, ce = [Fe, tt].indexOf(oe) >= 0, Re = ce ? "width" : "height", We = Er(e, { placement: ie, boundary: x, rootBoundary: O, altBoundary: C, padding: y }), qe = ce ? U ? Ze : Ve : U ? tt : Fe;
      B[Re] > R[Re] && (qe = mi(qe));
      var fe = mi(qe), Ye = [];
      if (c && Ye.push(We[oe] <= 0), h && Ye.push(We[qe] <= 0, We[fe] <= 0), Ye.every(function(K) {
        return K;
      })) {
        H = ie, V = false;
        break;
      }
      X.set(ie, Ye);
    }
    if (V)
      for (var Ke = D ? 3 : 1, qt = u(function(Tt) {
        var Ct = E.find(function(Dr) {
          var Xt = X.get(Dr);
          if (Xt)
            return Xt.slice(0, Tt).every(function(hr) {
              return hr;
            });
        });
        if (Ct)
          return H = Ct, "break";
      }, "_loop"), It = Ke; It > 0; It--) {
        var kr = qt(It);
        if (kr === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
__name(Nh, "Nh");
u(Nh, "flip");
var Jc = { name: "flip", enabled: true, phase: "main", fn: Nh, requiresIfExists: ["offset"], data: { _skip: false } };
function Kc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(Kc, "Kc");
u(Kc, "getSideOffsets");
function Qc(r) {
  return [Fe, Ze, tt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
__name(Qc, "Qc");
u(Qc, "isAnySideFullyClipped");
function Gh(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, d = Er(e, { elementContext: "reference" }), h = Er(e, { altBoundary: true }), v = Kc(d, i), y = Kc(h, l, c), x = Qc(v), O = Qc(y);
  e.modifiersData[t] = { referenceClippingOffsets: v, popperEscapeOffsets: y, isReferenceHidden: x, hasPopperEscaped: O }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": x, "data-popper-escaped": O });
}
__name(Gh, "Gh");
u(Gh, "hide");
var ep = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Gh };
function qh(r, e, t) {
  var i = st(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d = c[0], h = c[1];
  return d = d || 0, h = (h || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: h, y: d } : { x: d, y: h };
}
__name(qh, "qh");
u(qh, "distanceAndSkiddingToXY");
function Lh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, d = qa.reduce(function(x, O) {
    return x[O] = qh(O, e.rects, c), x;
  }, {}), h = d[e.placement], v = h.x, y = h.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += v, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d;
}
__name(Lh, "Lh");
u(Lh, "offset");
var tp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Lh };
function jh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = ho({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(jh, "jh");
u(jh, "popperOffsets");
var rp = { name: "popperOffsets", enabled: true, phase: "read", fn: jh, data: {} };
function pl(r) {
  return r === "x" ? "y" : "x";
}
__name(pl, "pl");
u(pl, "getAltAxis");
function Bh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, h = d === void 0 ? false : d, v = t.boundary, y = t.rootBoundary, x = t.altBoundary, O = t.padding, C = t.tether, A = C === void 0 ? true : C, D = t.tetherOffset, S = D === void 0 ? 0 : D, M = Er(e, { boundary: v, rootBoundary: y, padding: O, altBoundary: x }), _ = st(e.placement), k = Qt(e.placement), L = !k, E = Ln(_), B = pl(E), R = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, H = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, W = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ie = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!R) {
    if (c) {
      var U, ce = E === "y" ? Fe : Ve, Re = E === "y" ? tt : Ze, We = E === "y" ? "height" : "width", qe = R[E], fe = qe + M[ce], Ye = qe - M[Re], Ke = A ? -V[We] / 2 : 0, qt = k === Br ? X[We] : V[We], It = k === Br ? -V[We] : -X[We], kr = e.elements.arrow, K = A && kr ? qn(kr) : { width: 0, height: 0 }, Tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : co(), Ct = Tt[ce], Dr = Tt[Re], Xt = jn(0, X[We], K[We]), hr = L ? X[We] / 2 - Ke - Xt - Ct - W.mainAxis : qt - Xt - Ct - W.mainAxis, mr = L ? -X[We] / 2 + Ke + Xt + Dr + W.mainAxis : It + Xt + Dr + W.mainAxis, Lt = e.elements.arrow && wr(e.elements.arrow), Vn = Lt ? E === "y" ? Lt.clientTop || 0 : Lt.clientLeft || 0 : 0, kt = (U = ie == null ? void 0 : ie[E]) != null ? U : 0, fn = qe + hr - kt - Vn, xe = qe + mr - kt, Vr = jn(A ? Gn(fe, fn) : fe, qe, A ? xr(Ye, xe) : Ye);
      R[E] = Vr, oe[E] = Vr - qe;
    }
    if (h) {
      var Xr, Dt = E === "x" ? Fe : Ve, hn = E === "x" ? tt : Ze, vr = R[B], gr = B === "y" ? "height" : "width", mn = vr + M[Dt], pt = vr - M[hn], zr = [Fe, Ve].indexOf(_) !== -1, jt = (Xr = ie == null ? void 0 : ie[B]) != null ? Xr : 0, Xn = zr ? mn : vr - X[gr] - V[gr] - jt + W.altAxis, Rr = zr ? vr + X[gr] + V[gr] - jt - W.altAxis : pt, vn = A && zr ? Wc(Xn, vr, Rr) : jn(A ? Xn : mn, vr, A ? Rr : pt);
      R[B] = vn, oe[B] = vn - vr;
    }
    e.modifiersData[i] = oe;
  }
}
__name(Bh, "Bh");
u(Bh, "preventOverflow");
var np = { name: "preventOverflow", enabled: true, phase: "main", fn: Bh, requiresIfExists: ["offset"] };
function dl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(dl, "dl");
u(dl, "getHTMLElementScroll");
function fl(r) {
  return r === Xe(r) || !rt(r) ? Bn(r) : dl(r);
}
__name(fl, "fl");
u(fl, "getNodeScroll");
function Hh(r) {
  var e = r.getBoundingClientRect(), t = Hr(e.width) / r.offsetWidth || 1, i = Hr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(Hh, "Hh");
u(Hh, "isElementScaled");
function hl(r, e, t) {
  t === void 0 && (t = false);
  var i = rt(e), l = rt(e) && Hh(e), c = yt(e), d = Kt(r, l), h = { scrollLeft: 0, scrollTop: 0 }, v = { x: 0, y: 0 };
  return (i || !i && !t) && ((at(e) !== "body" || $n(c)) && (h = fl(e)), rt(e) ? (v = Kt(e, true), v.x += e.clientLeft, v.y += e.clientTop) : c && (v.x = Hn(c))), { x: d.left + h.scrollLeft - v.x, y: d.top + h.scrollTop - v.y, width: d.width, height: d.height };
}
__name(hl, "hl");
u(hl, "getCompositeRect");
function $h(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(h) {
      if (!t.has(h)) {
        var v = e.get(h);
        v && l(v);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name($h, "$h");
u($h, "order");
function ml(r) {
  var e = $h(r);
  return $c.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(ml, "ml");
u(ml, "orderModifiers");
function vl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(vl, "vl");
u(vl, "debounce");
function gl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(gl, "gl");
u(gl, "mergeByName");
var ip = { placement: "bottom", modifiers: [], strategy: "absolute" };
function op() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(op, "op");
u(op, "areValidElements");
function ap(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? ip : l;
  return u(function(h, v, y) {
    y === void 0 && (y = c);
    var x = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ip, c), modifiersData: {}, elements: { reference: h, popper: v }, attributes: {}, styles: {} }, O = [], C = false, A = { state: x, setOptions: u(function(_) {
      var k = typeof _ == "function" ? _(x.options) : _;
      S(), x.options = Object.assign({}, c, x.options, k), x.scrollParents = { reference: Pr(h) ? an(h) : h.contextElement ? an(h.contextElement) : [], popper: an(v) };
      var L = ml(gl([].concat(i, x.options.modifiers)));
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
      if (!C) {
        var _ = x.elements, k = _.reference, L = _.popper;
        if (!!op(k, L)) {
          x.rects = { reference: hl(k, wr(L), x.options.strategy === "fixed"), popper: qn(L) }, x.reset = false, x.placement = x.options.placement, x.orderedModifiers.forEach(function(ie) {
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
    }, "forceUpdate"), update: vl(function() {
      return new Promise(function(M) {
        A.forceUpdate(), M(x);
      });
    }), destroy: u(function() {
      S(), C = true;
    }, "destroy") };
    if (!op(h, v))
      return A;
    A.setOptions(y).then(function(M) {
      !C && y.onFirstUpdate && y.onFirstUpdate(M);
    });
    function D() {
      x.orderedModifiers.forEach(function(M) {
        var _ = M.name, k = M.options, L = k === void 0 ? {} : k, E = M.effect;
        if (typeof E == "function") {
          var B = E({ state: x, name: _, instance: A, options: L }), R = u(function() {
          }, "noopFn");
          O.push(B || R);
        }
      });
    }
    __name(D, "D");
    u(D, "runModifierEffects");
    function S() {
      O.forEach(function(M) {
        return M();
      }), O = [];
    }
    __name(S, "S");
    return u(S, "cleanupModifierEffects"), A;
  }, "createPopper");
}
__name(ap, "ap");
u(ap, "popperGenerator");
var Fh = [Yc, rp, Xc, lo, tp, Jc, np, Uc, ep];
var bl = ap({ defaultModifiers: Fh });
var At = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Wh = "tippy-box";
var vp = "tippy-content";
var Uh = "tippy-backdrop";
var gp = "tippy-arrow";
var bp = "tippy-svg-arrow";
var Fn = { passive: true, capture: true };
var yp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function yl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(yl, "yl");
u(yl, "getValueAtIndexOrReturn");
function Cl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Cl, "Cl");
u(Cl, "isType");
function xp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(xp, "xp");
u(xp, "invokeWithArgsOrReturn");
function sp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(sp, "sp");
u(sp, "debounce");
function Vh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
__name(Vh, "Vh");
u(Vh, "removeProperties");
function Xh(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Xh, "Xh");
u(Xh, "splitBySpaces");
function Wn(r) {
  return [].concat(r);
}
__name(Wn, "Wn");
u(Wn, "normalizeToArray");
function lp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(lp, "lp");
u(lp, "pushIfUnique");
function Yh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(Yh, "Yh");
u(Yh, "unique");
function Zh(r) {
  return r.split("-")[0];
}
__name(Zh, "Zh");
u(Zh, "getBasePlacement");
function Fa(r) {
  return [].slice.call(r);
}
__name(Fa, "Fa");
u(Fa, "arrayFrom");
function up(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(up, "up");
u(up, "removeUndefinedProps");
function gi() {
  return document.createElement("div");
}
__name(gi, "gi");
u(gi, "div");
function Wa(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Cl(r, e);
  });
}
__name(Wa, "Wa");
u(Wa, "isElement");
function Jh(r) {
  return Cl(r, "NodeList");
}
__name(Jh, "Jh");
u(Jh, "isNodeList");
function Kh(r) {
  return Cl(r, "MouseEvent");
}
__name(Kh, "Kh");
u(Kh, "isMouseEvent");
function Qh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Qh, "Qh");
u(Qh, "isReferenceElement");
function em(r) {
  return Wa(r) ? [r] : Jh(r) ? Fa(r) : Array.isArray(r) ? r : Fa(document.querySelectorAll(r));
}
__name(em, "em");
u(em, "getArrayOfElements");
function xl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(xl, "xl");
u(xl, "setTransitionDuration");
function cp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(cp, "cp");
u(cp, "setVisibilityState");
function tm(r) {
  var e, t = Wn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(tm, "tm");
u(tm, "getOwnerDocument");
function rm(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, d = l.popperState, h = l.props, v = h.interactiveBorder, y = Zh(d.placement), x = d.modifiersData.offset;
    if (!x)
      return true;
    var O = y === "bottom" ? x.top.y : 0, C = y === "top" ? x.bottom.y : 0, A = y === "right" ? x.left.x : 0, D = y === "left" ? x.right.x : 0, S = c.top - i + O > v, M = i - c.bottom - C > v, _ = c.left - t + A > v, k = t - c.right - D > v;
    return S || M || _ || k;
  });
}
__name(rm, "rm");
u(rm, "isCursorOutsideInteractiveBorder");
function wl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(wl, "wl");
u(wl, "updateTransitionEndListener");
function pp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(pp, "pp");
u(pp, "actualContains");
var Mr = { isTouch: false };
var dp = 0;
function nm() {
  Mr.isTouch || (Mr.isTouch = true, window.performance && document.addEventListener("mousemove", wp));
}
__name(nm, "nm");
u(nm, "onDocumentTouchStart");
function wp() {
  var r = performance.now();
  r - dp < 20 && (Mr.isTouch = false, document.removeEventListener("mousemove", wp)), dp = r;
}
__name(wp, "wp");
u(wp, "onDocumentMouseMove");
function im() {
  var r = document.activeElement;
  if (Qh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(im, "im");
u(im, "onWindowBlur");
function om() {
  document.addEventListener("touchstart", nm, Fn), window.addEventListener("blur", im);
}
__name(om, "om");
u(om, "bindGlobalEventListeners");
var am = typeof window != "undefined" && typeof document != "undefined";
var sm = am ? !!window.msCrypto : false;
var lm = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var um = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Sr = Object.assign({ appendTo: yp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, lm, um);
var cm = Object.keys(Sr);
var pm = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    Sr[i] = e[i];
  });
}, "setDefaultProps");
function Ep(r) {
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
__name(Ep, "Ep");
u(Ep, "getExtendedPassedProps");
function dm(r, e) {
  var t = e ? Object.keys(Ep(Object.assign({}, Sr, { plugins: e }))) : cm, i = t.reduce(function(l, c) {
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
__name(dm, "dm");
u(dm, "getDataAttributeProps");
function fp(r, e) {
  var t = Object.assign({}, e, { content: xp(e.content, [r]) }, e.ignoreAttributes ? {} : dm(r, e.plugins));
  return t.aria = Object.assign({}, Sr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(fp, "fp");
u(fp, "evaluateProps");
var fm = u(function() {
  return "innerHTML";
}, "innerHTML");
function Sl(r, e) {
  r[fm()] = e;
}
__name(Sl, "Sl");
u(Sl, "dangerouslySetInnerHTML");
function hp(r) {
  var e = gi();
  return r === true ? e.className = gp : (e.className = bp, Wa(r) ? e.appendChild(r) : Sl(e, r)), e;
}
__name(hp, "hp");
u(hp, "createArrowElement");
function mp(r, e) {
  Wa(e.content) ? (Sl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Sl(r, e.content) : r.textContent = e.content);
}
__name(mp, "mp");
u(mp, "setContent");
function Tl(r) {
  var e = r.firstElementChild, t = Fa(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(vp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(gp) || i.classList.contains(bp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Uh);
  }) };
}
__name(Tl, "Tl");
u(Tl, "getChildren");
function Sp(r) {
  var e = gi(), t = gi();
  t.className = Wh, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = gi();
  i.className = vp, i.setAttribute("data-state", "hidden"), mp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, d) {
    var h = Tl(e), v = h.box, y = h.content, x = h.arrow;
    d.theme ? v.setAttribute("data-theme", d.theme) : v.removeAttribute("data-theme"), typeof d.animation == "string" ? v.setAttribute("data-animation", d.animation) : v.removeAttribute("data-animation"), d.inertia ? v.setAttribute("data-inertia", "") : v.removeAttribute("data-inertia"), v.style.maxWidth = typeof d.maxWidth == "number" ? d.maxWidth + "px" : d.maxWidth, d.role ? v.setAttribute("role", d.role) : v.removeAttribute("role"), (c.content !== d.content || c.allowHTML !== d.allowHTML) && mp(y, r.props), d.arrow ? x ? c.arrow !== d.arrow && (v.removeChild(x), v.appendChild(hp(d.arrow))) : v.appendChild(hp(d.arrow)) : x && v.removeChild(x);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(Sp, "Sp");
u(Sp, "render");
Sp.$$tippy = true;
var hm = 1;
var $a = [];
var El = [];
function mm(r, e) {
  var t = fp(r, Object.assign({}, Sr, Ep(up(e)))), i, l, c, d = false, h = false, v = false, y = false, x, O, C, A = [], D = sp(fn, t.interactiveDebounce), S, M = hm++, _ = null, k = Yh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: M, reference: r, popper: gi(), popperInstance: _, props: t, state: L, plugins: k, clearDelayTimeouts: Xn, setProps: Rr, setContent: vn, show: Ei, hide: Ao, hideWithInteractivity: Si, enable: zr, disable: jt, unmount: Ti, destroy: _o };
  if (!t.render)
    return E;
  var B = t.render(E), R = B.popper, X = B.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + E.id, E.popper = R, r._tippy = E, R._tippy = E;
  var V = k.map(function(j) {
    return j.fn(E);
  }), H = r.hasAttribute("aria-expanded");
  return Lt(), Ke(), qe(), fe("onCreate", [E]), t.showOnCreate && mn(), R.addEventListener("mouseenter", function() {
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
    return j ? tm(j) : document;
  }
  __name(ce, "ce");
  u(ce, "getDocument");
  function Re() {
    return Tl(R);
  }
  __name(Re, "Re");
  u(Re, "getDefaultTemplateChildren");
  function We(j) {
    return E.state.isMounted && !E.state.isVisible || Mr.isTouch || x && x.type === "focus" ? 0 : yl(E.props.delay, j ? 0 : 1, Sr.delay);
  }
  __name(We, "We");
  u(We, "getDelay");
  function qe(j) {
    j === void 0 && (j = false), R.style.pointerEvents = E.props.interactive && !j ? "" : "none", R.style.zIndex = "" + E.props.zIndex;
  }
  __name(qe, "qe");
  u(qe, "handleStyles");
  function fe(j, te, ae) {
    if (ae === void 0 && (ae = true), V.forEach(function(he) {
      he[j] && he[j].apply(he, te);
    }), ae) {
      var ye;
      (ye = E.props)[j].apply(ye, te);
    }
  }
  __name(fe, "fe");
  u(fe, "invokeHook");
  function Ye() {
    var j = E.props.aria;
    if (!!j.content) {
      var te = "aria-" + j.content, ae = R.id, ye = Wn(E.props.triggerTarget || r);
      ye.forEach(function(he) {
        var dt = he.getAttribute(te);
        if (E.state.isVisible)
          he.setAttribute(te, dt ? dt + " " + ae : ae);
        else {
          var ft = dt && dt.replace(ae, "").trim();
          ft ? he.setAttribute(te, ft) : he.removeAttribute(te);
        }
      });
    }
  }
  __name(Ye, "Ye");
  u(Ye, "handleAriaContentAttribute");
  function Ke() {
    if (!(H || !E.props.aria.expanded)) {
      var j = Wn(E.props.triggerTarget || r);
      j.forEach(function(te) {
        E.props.interactive ? te.setAttribute("aria-expanded", E.state.isVisible && te === U() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Ke, "Ke");
  u(Ke, "handleAriaExpandedAttribute");
  function qt() {
    ce().removeEventListener("mousemove", D), $a = $a.filter(function(j) {
      return j !== D;
    });
  }
  __name(qt, "qt");
  u(qt, "cleanupInteractiveMouseListeners");
  function It(j) {
    if (!(Mr.isTouch && (v || j.type === "mousedown"))) {
      var te = j.composedPath && j.composedPath()[0] || j.target;
      if (!(E.props.interactive && pp(R, te))) {
        if (Wn(E.props.triggerTarget || r).some(function(ae) {
          return pp(ae, te);
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
  __name(It, "It");
  u(It, "onDocumentPress");
  function kr() {
    v = true;
  }
  __name(kr, "kr");
  u(kr, "onTouchMove");
  function K() {
    v = false;
  }
  __name(K, "K");
  u(K, "onTouchStart");
  function Tt() {
    var j = ce();
    j.addEventListener("mousedown", It, true), j.addEventListener("touchend", It, Fn), j.addEventListener("touchstart", K, Fn), j.addEventListener("touchmove", kr, Fn);
  }
  __name(Tt, "Tt");
  u(Tt, "addDocumentPress");
  function Ct() {
    var j = ce();
    j.removeEventListener("mousedown", It, true), j.removeEventListener("touchend", It, Fn), j.removeEventListener("touchstart", K, Fn), j.removeEventListener("touchmove", kr, Fn);
  }
  __name(Ct, "Ct");
  u(Ct, "removeDocumentPress");
  function Dr(j, te) {
    hr(j, function() {
      !E.state.isVisible && R.parentNode && R.parentNode.contains(R) && te();
    });
  }
  __name(Dr, "Dr");
  u(Dr, "onTransitionedOut");
  function Xt(j, te) {
    hr(j, te);
  }
  __name(Xt, "Xt");
  u(Xt, "onTransitionedIn");
  function hr(j, te) {
    var ae = Re().box;
    function ye(he) {
      he.target === ae && (wl(ae, "remove", ye), te());
    }
    __name(ye, "ye");
    if (u(ye, "listener"), j === 0)
      return te();
    wl(ae, "remove", O), wl(ae, "add", ye), O = ye;
  }
  __name(hr, "hr");
  u(hr, "onTransitionEnd");
  function mr(j, te, ae) {
    ae === void 0 && (ae = false);
    var ye = Wn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, te, ae), A.push({ node: he, eventType: j, handler: te, options: ae });
    });
  }
  __name(mr, "mr");
  u(mr, "on");
  function Lt() {
    ie() && (mr("touchstart", kt, { passive: true }), mr("touchend", xe, { passive: true })), Xh(E.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (mr(j, kt), j) {
          case "mouseenter":
            mr("mouseleave", xe);
            break;
          case "focus":
            mr(sm ? "focusout" : "blur", Vr);
            break;
          case "focusin":
            mr("focusout", Vr);
            break;
        }
    });
  }
  __name(Lt, "Lt");
  u(Lt, "addListeners");
  function Vn() {
    A.forEach(function(j) {
      var te = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      te.removeEventListener(ae, ye, he);
    }), A = [];
  }
  __name(Vn, "Vn");
  u(Vn, "removeListeners");
  function kt(j) {
    var te, ae = false;
    if (!(!E.state.isEnabled || Xr(j) || h)) {
      var ye = ((te = x) == null ? void 0 : te.type) === "focus";
      x = j, S = j.currentTarget, Ke(), !E.state.isVisible && Kh(j) && $a.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d) && E.props.hideOnClick !== false && E.state.isVisible ? ae = true : mn(j), j.type === "click" && (d = !ae), ae && !ye && pt(j);
    }
  }
  __name(kt, "kt");
  u(kt, "onTrigger");
  function fn(j) {
    var te = j.target, ae = U().contains(te) || R.contains(te);
    if (!(j.type === "mousemove" && ae)) {
      var ye = gr().concat(R).map(function(he) {
        var dt, ft = he._tippy, Yr = (dt = ft.popperInstance) == null ? void 0 : dt.state;
        return Yr ? { popperRect: he.getBoundingClientRect(), popperState: Yr, props: t } : null;
      }).filter(Boolean);
      rm(ye, j) && (qt(), pt(j));
    }
  }
  __name(fn, "fn");
  u(fn, "onMouseMove");
  function xe(j) {
    var te = Xr(j) || E.props.trigger.indexOf("click") >= 0 && d;
    if (!te) {
      if (E.props.interactive) {
        E.hideWithInteractivity(j);
        return;
      }
      pt(j);
    }
  }
  __name(xe, "xe");
  u(xe, "onMouseLeave");
  function Vr(j) {
    E.props.trigger.indexOf("focusin") < 0 && j.target !== U() || E.props.interactive && j.relatedTarget && R.contains(j.relatedTarget) || pt(j);
  }
  __name(Vr, "Vr");
  u(Vr, "onBlurOrFocusOut");
  function Xr(j) {
    return Mr.isTouch ? ie() !== j.type.indexOf("touch") >= 0 : false;
  }
  __name(Xr, "Xr");
  u(Xr, "isEventListenerStopped");
  function Dt() {
    hn();
    var j = E.props, te = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, dt = j.moveTransition, ft = oe() ? Tl(R).arrow : null, Yr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : r, Ci = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Nr) {
      var Zr = Nr.state;
      if (oe()) {
        var Bt = Re(), Ht = Bt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Yt) {
          Yt === "placement" ? Ht.setAttribute("data-placement", Zr.placement) : Zr.attributes.popper["data-popper-" + Yt] ? Ht.setAttribute("data-" + Yt, "") : Ht.removeAttribute("data-" + Yt);
        }), Zr.attributes.popper = {};
      }
    }, "fn") }, ht = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !dt } }, Ci];
    oe() && ft && ht.push({ name: "arrow", options: { element: ft, padding: 3 } }), ht.push.apply(ht, (te == null ? void 0 : te.modifiers) || []), E.popperInstance = bl(Yr, R, Object.assign({}, te, { placement: ae, onFirstUpdate: C, modifiers: ht }));
  }
  __name(Dt, "Dt");
  u(Dt, "createPopperInstance");
  function hn() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  __name(hn, "hn");
  u(hn, "destroyPopperInstance");
  function vr() {
    var j = E.props.appendTo, te, ae = U();
    E.props.interactive && j === yp || j === "parent" ? te = ae.parentNode : te = xp(j, [ae]), te.contains(R) || te.appendChild(R), E.state.isMounted = true, Dt();
  }
  __name(vr, "vr");
  u(vr, "mount");
  function gr() {
    return Fa(R.querySelectorAll("[data-tippy-root]"));
  }
  __name(gr, "gr");
  u(gr, "getNestedPopperTree");
  function mn(j) {
    E.clearDelayTimeouts(), j && fe("onTrigger", [E, j]), Tt();
    var te = We(true), ae = W(), ye = ae[0], he = ae[1];
    Mr.isTouch && ye === "hold" && he && (te = he), te ? i = setTimeout(function() {
      E.show();
    }, te) : E.show();
  }
  __name(mn, "mn");
  u(mn, "scheduleShow");
  function pt(j) {
    if (E.clearDelayTimeouts(), fe("onUntrigger", [E, j]), !E.state.isVisible) {
      Ct();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && d)) {
      var te = We(false);
      te ? l = setTimeout(function() {
        E.state.isVisible && E.hide();
      }, te) : c = requestAnimationFrame(function() {
        E.hide();
      });
    }
  }
  __name(pt, "pt");
  u(pt, "scheduleHide");
  function zr() {
    E.state.isEnabled = true;
  }
  __name(zr, "zr");
  u(zr, "enable");
  function jt() {
    E.hide(), E.state.isEnabled = false;
  }
  __name(jt, "jt");
  u(jt, "disable");
  function Xn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(Xn, "Xn");
  u(Xn, "clearDelayTimeouts");
  function Rr(j) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, j]), Vn();
      var te = E.props, ae = fp(r, Object.assign({}, te, up(j), { ignoreAttributes: true }));
      E.props = ae, Lt(), te.interactiveDebounce !== ae.interactiveDebounce && (qt(), D = sp(fn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? Wn(te.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Ke(), qe(), X && X(te, ae), E.popperInstance && (Dt(), gr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, j]);
    }
  }
  __name(Rr, "Rr");
  u(Rr, "setProps");
  function vn(j) {
    E.setProps({ content: j });
  }
  __name(vn, "vn");
  u(vn, "setContent");
  function Ei() {
    var j = E.state.isVisible, te = E.state.isDestroyed, ae = !E.state.isEnabled, ye = Mr.isTouch && !E.props.touch, he = yl(E.props.duration, 0, Sr.duration);
    if (!(j || te || ae || ye) && !U().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, oe() && (R.style.visibility = "visible"), qe(), Tt(), E.state.isMounted || (R.style.transition = "none"), oe()) {
        var dt = Re(), ft = dt.box, Yr = dt.content;
        xl([ft, Yr], 0);
      }
      C = u(function() {
        var ht;
        if (!(!E.state.isVisible || y)) {
          if (y = true, R.offsetHeight, R.style.transition = E.props.moveTransition, oe() && E.props.animation) {
            var Oi = Re(), Nr = Oi.box, Zr = Oi.content;
            xl([Nr, Zr], he), cp([Nr, Zr], "visible");
          }
          Ye(), Ke(), lp(El, E), (ht = E.popperInstance) == null || ht.forceUpdate(), fe("onMount", [E]), E.props.animation && oe() && Xt(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), vr();
    }
  }
  __name(Ei, "Ei");
  u(Ei, "show");
  function Ao() {
    var j = !E.state.isVisible, te = E.state.isDestroyed, ae = !E.state.isEnabled, ye = yl(E.props.duration, 1, Sr.duration);
    if (!(j || te || ae) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d = false, oe() && (R.style.visibility = "hidden"), qt(), Ct(), qe(true), oe()) {
        var he = Re(), dt = he.box, ft = he.content;
        E.props.animation && (xl([dt, ft], ye), cp([dt, ft], "hidden"));
      }
      Ye(), Ke(), E.props.animation ? oe() && Dr(ye, E.unmount) : E.unmount();
    }
  }
  __name(Ao, "Ao");
  u(Ao, "hide");
  function Si(j) {
    ce().addEventListener("mousemove", D), lp($a, D), D(j);
  }
  __name(Si, "Si");
  u(Si, "hideWithInteractivity");
  function Ti() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (hn(), gr().forEach(function(j) {
      j._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), El = El.filter(function(j) {
      return j !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  __name(Ti, "Ti");
  u(Ti, "unmount");
  function _o() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), Vn(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  __name(_o, "_o");
  u(_o, "destroy");
}
__name(mm, "mm");
u(mm, "createTippy");
function bi(r, e) {
  e === void 0 && (e = {});
  var t = Sr.plugins.concat(e.plugins || []);
  om();
  var i = Object.assign({}, e, { plugins: t }), l = em(r);
  if (false)
    var c, d;
  var h = l.reduce(function(v, y) {
    var x = y && mm(y, i);
    return x && v.push(x), v;
  }, []);
  return Wa(r) ? h[0] : h;
}
__name(bi, "bi");
u(bi, "tippy");
bi.defaultProps = Sr;
bi.setDefaultProps = pm;
bi.currentInput = Mr;
var vm = Object.assign({}, lo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var Tp = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], d = [], h, v = t.overrides, y = [], x = false;
  function O() {
    d = l.map(function(E) {
      return Wn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  __name(O, "O");
  u(O, "setTriggerTargets");
  function C() {
    c = l.map(function(E) {
      return E.reference;
    });
  }
  __name(C, "C");
  u(C, "setReferences");
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
      var X = (v || []).concat("content").reduce(function(V, H) {
        return V[H] = l[R].props[H], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c[R]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  __name(S, "S");
  u(S, "prepareInstance"), A(false), C(), O();
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
  }, "fn") }, _ = bi(gi(), Object.assign({}, Vh(t, ["overrides"]), { plugins: [M].concat(t.plugins || []), triggerTarget: d, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [vm]) }) })), k = _.show;
  _.show = function(E) {
    if (k(), !h && E == null)
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
    v = E.overrides || v, L(E);
  }, _.setInstances = function(E) {
    A(true), y.forEach(function(B) {
      return B();
    }), l = E, A(false), C(), O(), y = D(_), _.setProps({ triggerTarget: d });
  }, y = D(_), _;
}, "createSingleton");
bi.setDefaultProps({ render: Sp });
var lt = bi;
var Ol = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Me(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = bt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = lt(this, { allowHTML: true, animation: false, arrow: At + At, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
  __name(e, "e");
  return u(e, "HelpableMixinClass"), I([G], e.prototype, "help", 2), I([G], e.prototype, "helpId", 2), I([G], e.prototype, "debugHelpable", 2), e;
}
__name(Me, "Me");
u(Me, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), I([G], e.prototype, "hoverable", 2), e;
}
__name(we, "we");
u(we, "HoverableMixin");
function* Ua(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Ua, "Ua");
u(Ua, "parse");
var Cp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Cp");
var sn = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "sn");
var Ar;
var Va;
var Fr = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Ar.set(this, void 0), Va.set(this, ""), Cp(this, Ar, e, "f"), sn(this, Ar, "f").updateParent("");
  }
  get attributeName() {
    return sn(this, Ar, "f").attr.name;
  }
  get attributeNamespace() {
    return sn(this, Ar, "f").attr.namespaceURI;
  }
  get value() {
    return sn(this, Va, "f");
  }
  set value(e) {
    Cp(this, Va, e || "", "f"), sn(this, Ar, "f").updateParent(e);
  }
  get element() {
    return sn(this, Ar, "f").element;
  }
  get booleanValue() {
    return sn(this, Ar, "f").booleanValue;
  }
  set booleanValue(e) {
    sn(this, Ar, "f").booleanValue = e;
  }
}, "Fr");
u(Fr, "AttributeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap();
var mo = /* @__PURE__ */ __name(class {
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
}, "mo");
u(mo, "AttributeValueSetter");
var Op = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Op");
var yi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "yi");
var _r;
var er = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, _r.set(this, void 0), Op(this, _r, [e], "f"), e.textContent = "";
  }
  get value() {
    return yi(this, _r, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return yi(this, _r, "f")[0].previousSibling;
  }
  get nextSibling() {
    return yi(this, _r, "f")[yi(this, _r, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), yi(this, _r, "f")[0].before(...t);
    for (let i of yi(this, _r, "f"))
      i.remove();
    Op(this, _r, t, "f");
  }
}, "er");
u(er, "NodeTemplatePart");
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
function go(r, e) {
  r.value = String(e);
}
__name(go, "go");
u(go, "processPropertyIdentity");
function Xa(r, e) {
  return typeof e == "boolean" && r instanceof Fr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(Xa, "Xa");
u(Xa, "processBooleanAttribute");
var Pl = vo(go);
var gm = vo((r, e) => {
  Xa(r, e) || go(r, e);
});
var Pp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Pp");
var Ya = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "Ya");
var bo;
var yo;
function* bm(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new mo(t, l);
          for (let d of Ua(l.value))
            if (d.type === "string")
              c.append(d.value);
            else {
              let h = new Fr(c, d.value);
              c.append(h), yield h;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Ua(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new er(t, i.value));
        break;
      }
}
__name(bm, "bm");
u(bm, "collectParts");
var ln = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = Pl) {
    var l, c;
    super();
    bo.set(this, void 0), yo.set(this, void 0), Object.getPrototypeOf(this) !== ln.prototype && Object.setPrototypeOf(this, ln.prototype), this.appendChild(e.content.cloneNode(true)), Pp(this, yo, Array.from(bm(this)), "f"), Pp(this, bo, i, "f"), (c = (l = Ya(this, bo, "f")).createCallback) === null || c === void 0 || c.call(l, this, Ya(this, yo, "f"), t);
  }
  update(e) {
    Ya(this, bo, "f").processCallback(this, Ya(this, yo, "f"), e);
  }
}, "ln");
u(ln, "TemplateInstance");
bo = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
var Mp = /* @__PURE__ */ new WeakSet();
function Ap(r) {
  return Mp.has(r);
}
__name(Ap, "Ap");
u(Ap, "isDirective");
function _p(r, e) {
  return Ap(e) ? (e(r), true) : false;
}
__name(_p, "_p");
u(_p, "processDirective");
function xo(r) {
  return (...e) => {
    let t = r(...e);
    return Mp.add(t), t;
  };
}
__name(xo, "xo");
u(xo, "directive");
var wo = /* @__PURE__ */ new WeakMap();
var Eo = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), wo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), wo.get(this.element).delete(this.type));
  }
  static for(e) {
    wo.has(e.element) || wo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = wo.get(e.element);
    return i.has(t) ? i.get(t) : new Eo(e.element, t);
  }
}, "Eo");
u(Eo, "EventHandler");
function Ip(r, e) {
  return r instanceof Fr && r.attributeName.startsWith("on") ? (Eo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Ip, "Ip");
u(Ip, "processEvent");
function ym(r, e) {
  return e instanceof xi && r instanceof er ? (e.renderInto(r), true) : false;
}
__name(ym, "ym");
u(ym, "processSubTemplate");
function xm(r, e) {
  return e instanceof DocumentFragment && r instanceof er ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(xm, "xm");
u(xm, "processDocumentFragment");
function wm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(wm, "wm");
u(wm, "isIterable");
function Em(r, e) {
  if (!wm(e))
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
__name(Em, "Em");
u(Em, "processIterable");
function Za(r, e) {
  _p(r, e) || Xa(r, e) || Ip(r, e) || ym(r, e) || xm(r, e) || Em(r, e) || go(r, e);
}
__name(Za, "Za");
u(Za, "processPart");
var Ml = /* @__PURE__ */ new WeakMap();
var kp = /* @__PURE__ */ new WeakMap();
var Dp = /* @__PURE__ */ new WeakMap();
var xi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Ml.has(this.strings))
      return Ml.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Ml.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (kp.get(e) !== t) {
      kp.set(e, t);
      let i = new ln(t, this.values, this.processor);
      Dp.set(e, i), e instanceof er ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Dp.get(e).update(this.values);
  }
}, "xi");
u(xi, "TemplateResult");
var Sm = vo(Za);
function Z(r, ...e) {
  return new xi(r, e, Sm);
}
__name(Z, "Z");
u(Z, "html");
function Q(r, e) {
  r.renderInto(e);
}
__name(Q, "Q");
u(Q, "render");
var Al = /* @__PURE__ */ new WeakMap();
var Tm = xo((...r) => (e) => {
  Al.has(e) || Al.set(e, { i: r.length });
  let t = Al.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Za(e, l));
    }) : i <= t.i && (t.i = i, Za(e, r[i]));
});
var Cm = xo((r) => (e) => {
  if (!(e instanceof er))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function ze(r) {
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
__name(ze, "ze");
u(ze, "IconableMixin");
var Wr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Je(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), I([G], e.prototype, "if", 2), e;
}
__name(Je, "Je");
u(Je, "IfableMixin");
var zp = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ae(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = lt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      return Q(Z`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Wr(i.reference)) {
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
  __name(e, "e");
  return u(e, "MenuableMixinClass"), e;
}
__name(Ae, "Ae");
u(Ae, "MenuableMixin");
function Rp(r) {
  return /^-?\d+$/.test(r);
}
__name(Rp, "Rp");
u(Rp, "isNumeric");
function xt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(xt, "xt");
u(xt, "forceSigned");
var nt = /* @__PURE__ */ __name(class extends Ae(Me(Pe(Oe(we(HTMLElement))))) {
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
    lt(this, { allowHTML: true, animation: false, arrow: At + At, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
            <span class="bloch-display__inspector-d">${xt(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${xt(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${xt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${xt(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${xt(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${xt(this.z)}</span>
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
}, "nt");
u(nt, "BlochDisplayElement"), I([ke], nt.prototype, "body", 2), I([ke], nt.prototype, "vectorLine", 2), I([ke], nt.prototype, "vectorEnd", 2), I([ke], nt.prototype, "vector", 2), I([Pt], nt.prototype, "vectorEndCircles", 2), I([G], nt.prototype, "x", 2), I([G], nt.prototype, "y", 2), I([G], nt.prototype, "z", 2);
re(nt);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Ut = /* @__PURE__ */ __name(class extends Ae(Me(Pe(Be(ze(Oe(we(HTMLElement))))))) {
  get operationType() {
    return Ms;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ms}"`;
  }
}, "Ut");
u(Ut, "ControlGateElement");
re(Ut);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(Pe(Be(ze(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return aa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${aa}<${this.if}"` : `"${aa}"`;
  }
}, "tr");
u(tr, "HGateElement");
re(tr);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ae(Me(jc(Pe(ze(Oe(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">
        ${this.iconHtml(qp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${va}"` : `"${va}>${this.flag}"`;
  }
}, "rr");
u(rr, "MeasurementGateElement"), I([G], rr.prototype, "value", 2);
re(rr);
var Lp = `<svg
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
var nr = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(rn(Pe(Be(ze(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Lp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ca}"` : `"${ca}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "PhaseGateElement");
re(nr);
var jp = `<svg
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
var ir = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(Pe(Be(ze(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${da}<${this.if}"` : `"${da}"`;
  }
}, "ir");
u(ir, "RnotGateElement");
re(ir);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(rn(Pe(Be(ze(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${fa}"` : `"${fa}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RxGateElement");
re(or);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(rn(Pe(Be(ze(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ha}"` : `"${ha}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RyGateElement");
re(ar);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(rn(Pe(Be(ze(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ma}"` : `"${ma}(${this.angle.replace("/", "_")})"`;
  }
}, "sr");
u(sr, "RzGateElement");
re(sr);
var Fp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends Ae(Me($e(Pe(Be(ze(Oe(we(HTMLElement)))))))) {
  get operationType() {
    return Ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ps}"`;
  }
}, "lr");
u(lr, "SwapGateElement");
re(lr);
var Wp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(Pe(Be(ze(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${pa}<${this.if}"` : `"${pa}"`;
  }
}, "ur");
u(ur, "TGateElement");
re(ur);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends Ae(Me(Pe(ze(Oe(we(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Yu;
      case "1":
        return Zu;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">
        ${this.iconHtml(Up)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Vt");
u(Vt, "WriteGateElement"), I([G], Vt.prototype, "value", 2);
re(Vt);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(Pe(Be(ze(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
}, "cr");
u(cr, "XGateElement");
re(cr);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(Pe(Be(ze(Oe(we(HTMLElement))))))))) {
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
}, "pr");
u(pr, "YGateElement");
re(pr);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends Ae(Me(Je($e(Pe(Be(ze(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(Z`<div part="body">${this.iconHtml(Yp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ua}<${this.if}"` : `"${ua}"`;
  }
}, "dr");
u(dr, "ZGateElement");
re(dr);
var ut = u((r) => r instanceof tr || r instanceof cr || r instanceof pr || r instanceof dr || r instanceof nr || r instanceof ur || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof Ut || r instanceof nt || r instanceof Vt || r instanceof rr, "isOperation");
var Zp = u((r) => r != null && r instanceof tr, "isHGateElement");
var Jp = u((r) => r != null && r instanceof cr, "isXGateElement");
var Kp = u((r) => r != null && r instanceof pr, "isYGateElement");
var Qp = u((r) => r != null && r instanceof dr, "isZGateElement");
var So = u((r) => r != null && r instanceof nr, "isPhaseGateElement");
var ed = u((r) => r != null && r instanceof ur, "isTGateElement");
var td = u((r) => r != null && r instanceof ir, "isRnotGateElement");
var Ja = u((r) => r != null && r instanceof or, "isRxGateElement");
var Ka = u((r) => r != null && r instanceof ar, "isRyGateElement");
var Qa = u((r) => r != null && r instanceof sr, "isRzGateElement");
var rd = u((r) => r != null && r instanceof lr, "isSwapGateElement");
var _l = u((r) => r != null && r instanceof Ut, "isControlGateElement");
var nd = u((r) => r != null && r instanceof nt, "isBlochDisplayElement");
var IT = u((r) => r != null && r instanceof Vt, "isWriteGateElement");
var id = u((r) => r != null && r instanceof rr, "isMeasurementGateElement");
var To = Hi(za(), 1);
var Il = u((r) => r !== null && r instanceof Ur, "isAngleSliderElement");
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
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
      let [i] = this.findSnapAngle(Fu(this.angle));
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
      let d = Math.abs(parseFloat(c) - e);
      (t === null || d < t) && (t = d, i = parseFloat(c), l = this.snapAngles[c]);
    }
    return ee.notNull(i), ee.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Ur");
u(Ur, "AngleSliderElement"), I([G], Ur.prototype, "angle", 2), I([G], Ur.prototype, "radian", 2), I([G], Ur.prototype, "denominator", 2), I([G], Ur.prototype, "disabled", 2), I([G], Ur.prototype, "debug", 2);
re(Ur);
var Co = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Co");
u(Co, "ButtonGroupElement"), I([Pt], Co.prototype, "buttons", 2), Co = I([re], Co);
function od(r, e = 0, { start: t = true, middle: i = true, once: l = false } = {}) {
  let c = 0, d, h = false;
  function v(...y) {
    if (h)
      return;
    let x = Date.now() - c;
    c = Date.now(), t ? (t = false, r.apply(this, y), l && v.cancel()) : (i && x < e || !i) && (clearTimeout(d), d = setTimeout(() => {
      c = Date.now(), r.apply(this, y), l && v.cancel();
    }, i ? e - x : e));
  }
  __name(v, "v");
  return u(v, "fn"), v.cancel = () => {
    clearTimeout(d), h = true;
  }, v;
}
__name(od, "od");
u(od, "throttle");
function ad(r, e = 0, { start: t = false, middle: i = false, once: l = false } = {}) {
  return od(r, e, { start: t, middle: i, once: l });
}
__name(ad, "ad");
u(ad, "debounce");
function Oo(r = 0, e = {}) {
  return (t, i, l) => {
    if (!l || typeof l.value != "function")
      throw new Error("debounce can only decorate functions");
    let c = l.value;
    l.value = ad(c, r, e), Object.defineProperty(t, i, l);
  };
}
__name(Oo, "Oo");
u(Oo, "debounce");
var un = Hi(ld(), 1);
var ct = /* @__PURE__ */ __name(class extends HTMLElement {
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
        let d = Math.floor(c.abs() * 1e5) / 1e5, h = t.children.item(0);
        ee.notNull(h);
        let v = c.phase() / Math.PI * 180, y = t.children.item(1);
        ee.notNull(y);
        let x = Math.trunc(v);
        x < 0 && (x = 360 + x), t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), d === 0 ? t.classList.add("magnitude-0") : t.classList.remove("magnitude-0"), h.style.setProperty("--magnitude", d.toString()), this.coloredPhase ? (t.classList.add("phase-hidden"), d === 0 ? h.style.setProperty("--magnitude", "0") : h.style.setProperty("--magnitude", "1"), -22.5 <= v && v < 22.5 || 337.5 <= v && v <= 360 || -337.5 < v && v <= -360 ? h.style.setProperty("--magnitude-color", "rgb(168 85 247)") : 22.5 <= v && v < 67.5 || -337.5 <= v && v < -292.5 ? h.style.setProperty("--magnitude-color", "rgb(236 72 153)") : 67.5 <= v && v < 112.5 || -292.5 <= v && v < -247.5 ? h.style.setProperty("--magnitude-color", "rgb(249 115 22)") : 112.5 <= v && v < 157.5 || -247.5 <= v && v < -202.5 ? h.style.setProperty("--magnitude-color", "rgb(234 179 8)") : 157.5 <= v && v < 202.5 || -202.5 <= v && v < -157.5 ? h.style.setProperty("--magnitude-color", "rgb(132 204 22)") : 202.5 <= v && v < 247.5 || -157.5 <= v && v < -112.5 ? h.style.setProperty("--magnitude-color", "rgb(34 197 94)") : 247.5 <= v && v < 292.5 || -112.5 <= v && v < -67.5 ? h.style.setProperty("--magnitude-color", "rgb(14 165 233)") : 292.5 <= v && v < 337.5 || -67.5 <= v && v < -22.5 ? h.style.setProperty("--magnitude-color", "rgb(99 102 241)") : h.style.removeProperty("--magnitude-color")) : h.style.setProperty("--magnitude-color", "rgb(14 165 233)"), y.style.setProperty("--phase", `-${x.toString()}deg`);
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
        for (let d = i; d <= l; d++)
          for (let h = e; h <= t; h++)
            (h < this.lastColStartIndex || this.lastColEndIndex < h || d < this.lastRowStartIndex || this.lastRowEndIndex < d) && c.push({ col: h, row: d });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), un.default.mutate(() => {
      let d = document.createDocumentFragment();
      for (let h of this.allQubitCircleElements(c))
        d.appendChild(h);
      this.innerContainer.appendChild(d), c.length !== 0 && this.dispatchVisibilityChangedEvent();
    });
  }
  removeInvisibleQubitCircles() {
    let e, t, i, l;
    un.default.measure(() => {
      e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
    }), un.default.mutate(() => {
      for (let c of this.qubitCircles) {
        let d = c.getAttribute("data-col"), h = c.getAttribute("data-row");
        ee.notNull(d), ee.notNull(h);
        let v = parseInt(d), y = parseInt(h);
        if (v < e || t < v || y < i || l < y) {
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
    let i = lt(t, { allowHTML: true, animation: false, arrow: At + At, delay: 0, theme: "qni" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    ee.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    ee.notNull(c);
    let d = t.getAttribute("data-amplitude-imag");
    ee.notNull(d);
    let h = parseInt(l), v = parseFloat(c), y = parseFloat(d), x = new Nt(v, y), O = x.abs(), C = x.phase() / Math.PI * 180, A = this.qubitCirclePopupTemplate.content.querySelector(".ket-binary"), D = this.qubitCirclePopupTemplate.content.querySelector(".ket-decimal"), S = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-real"), M = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-imag"), _ = this.qubitCirclePopupTemplate.content.querySelector(".probability"), k = this.qubitCirclePopupTemplate.content.querySelector(".phase");
    A && (A.textContent = h.toString(2).padStart(this.qubitCount, "0")), D && (D.textContent = h.toString()), S && (S.textContent = xt(x.real, 5)), M && (M.textContent = `${xt(x.imag, 5)}i`), _ && (_.textContent = `${xt(O * O * 100, 4)}%`), k && (k.textContent = `${xt(C, 2)}\xB0`);
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
}, "ct");
u(ct, "CircleNotationElement"), I([G], ct.prototype, "qubitCount", 2), I([G], ct.prototype, "qubitCircleSize", 2), I([G], ct.prototype, "cols", 2), I([G], ct.prototype, "rows", 2), I([G], ct.prototype, "paddingX", 2), I([G], ct.prototype, "paddingY", 2), I([G], ct.prototype, "overscan", 2), I([G], ct.prototype, "qubitCirclePopupTemplateId", 2), I([G], ct.prototype, "coloredPhase", 2), I([ke], ct.prototype, "window", 2), I([ke], ct.prototype, "innerContainer", 2), I([Pt], ct.prototype, "qubitCircles", 2), I([Oo(10)], ct.prototype, "drawNewlyVisibleQubuitCircles", 1), I([Oo(100)], ct.prototype, "removeInvisibleQubitCircles", 1), ct = I([re], ct);
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
      ee.notNull(c);
      let d = Nt.from(l);
      c.setAttribute("data-amplitude-real", d.real.toString()), c.setAttribute("data-amplitude-imag", d.imag.toString());
      let h = d.abs();
      this.setRoundedMagnitude(c, h);
      let v = d.phase() / Math.PI * 180;
      this.setRoundedPhase(c, v);
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
    let t = Z``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (d) => this.qubitCircleGroup(d, (h) => this.qubitCircleGroup(h, (v) => this.qubitCircleGroup(v, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = Z`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, d = 1) => c.reduce((h, v, y) => y % d ? h : [...h, c.slice(y, y + d)], []), "arrayChunk")(e, i).map((c) => {
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
    let t = lt(e);
    Tp(t, { allowHTML: true, animation: false, arrow: At + At, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), d = t.getAttribute("data-magnitude"), h = t.getAttribute("data-phase"), v;
    l === null || c === null ? v = Nt.ZERO : v = new Nt(parseFloat(l), parseFloat(c));
    let y;
    d && parseFloat(d) === 0 ? y = 0 : y = h ? parseFloat(h) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, v, d ? parseFloat(d) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, d, h) {
    t._tippy.setContent(this.popupContent(e, i, l, c, d, h));
  }
  popupContent(e, t, i, l, c, d) {
    let h = e.querySelector(".ket-binary"), v = e.querySelector(".ket-decimal"), y = e.querySelector(".amplitude-real"), x = e.querySelector(".amplitude-imag"), O = e.querySelector(".probability"), C = e.querySelector(".phase");
    h && (h.textContent = t.toString(2).padStart(d, "0")), v && (v.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), x && (x.textContent = `${this.forceSigned(i.imag, 5)}i`), O && (O.textContent = `${this.forceSigned(l * l * 100, 4)}%`), C && (C.textContent = `${this.forceSigned(c, 2)}\xB0`);
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
u(fr, "CircleNotationOldElement"), I([G], fr.prototype, "qubitCount", 2), I([G], fr.prototype, "size", 2), I([G], fr.prototype, "magnitudes", 2), I([G], fr.prototype, "phases", 2), I([G], fr.prototype, "multiQubits", 2), I([G], fr.prototype, "showKets", 2), I([Pt], fr.prototype, "qubitCircles", 2), I([Pt], fr.prototype, "qubitCircleGroups", 2), I([Pt], fr.prototype, "visibleQubitCircleGroups", 2);
re(fr);
var Dl = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Dl");
u(Dl, "InspectorButtonElement");
re(Dl);
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
    return Xu(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Wr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Tn(e)) {
      let t = Fi(e.angle);
      So(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ja(e) || Ka(e) || Qa(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
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
    if (!Il(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!Il(t))
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
    if (Vu(e)) {
      let t, i = Fi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Wu(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Uu(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Rp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "_t");
u(_t, "OperationInspectorElement"), I([ke], _t.prototype, "ifInput", 2), I([ke], _t.prototype, "angleInputLabel", 2), I([ke], _t.prototype, "angleInput", 2), I([ke], _t.prototype, "angleSlider", 2), I([ke], _t.prototype, "denominatorInput", 2), I([ke], _t.prototype, "denominatorVariableLabel", 2), I([ke], _t.prototype, "denominatorLabel", 2), I([ke], _t.prototype, "reduceAngleFractionCheckbox", 2), I([ke], _t.prototype, "flagInput", 2), I([G], _t.prototype, "conditionalGatePaneDisabled", 2), I([G], _t.prototype, "anglePaneDisabled", 2), I([G], _t.prototype, "conditionalFlagPaneDisabled", 2);
re(_t);
var Ir = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.ket = 0;
    this.qubitCount = 1;
    this.magnitude = 0;
    this.phase = 0;
    this.amplitude = "";
    this.qubitCirclePopupTemplateId = "qubit-circle-popup-template";
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Q(Z`<style>
          qubit-circle {
            --phase: 0deg;
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
            transform: rotate(${this.phase}deg);
          }

          :host([data-magnitude="0"]) #phase {
            display: none;
          }
        </style>

        <div id="border">
          <div id="magnitude" part="magnitude"></div>
          <div id="phase"></div>
        </div>`, this.shadowRoot);
  }
  showQubitCirclePopup() {
    let e = lt(this, { allowHTML: true, animation: false, arrow: At + At, delay: 0, theme: "qni" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let t = new Nt(0, 0), i = 0, l = 0;
    this.amplitude !== "" || (i = this.magnitude, l = this.phase);
    let c = this.qubitCirclePopupTemplate.content.querySelector(".ket-binary"), d = this.qubitCirclePopupTemplate.content.querySelector(".ket-decimal"), h = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-real"), v = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-imag"), y = this.qubitCirclePopupTemplate.content.querySelector(".probability"), x = this.qubitCirclePopupTemplate.content.querySelector(".phase");
    c && (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0")), d && (d.textContent = this.ket.toString()), h && (h.textContent = xt(t.real, 5)), v && (v.textContent = `${xt(t.imag, 5)}i`), y && (y.textContent = `${xt(i * i * 100, 4)}%`), x && (x.textContent = `${xt(l, 2)}\xB0`);
    let O = document.createElement("div");
    O.appendChild(this.qubitCirclePopupTemplate.content.cloneNode(true)), e.setContent(O.innerHTML), e.show();
  }
  hideQubitCirclePopup() {
    let e = this._tippy;
    ee.notNull(e), e.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "Ir");
u(Ir, "QubitCircleElement"), I([G], Ir.prototype, "ket", 2), I([G], Ir.prototype, "qubitCount", 2), I([G], Ir.prototype, "magnitude", 2), I([G], Ir.prototype, "phase", 2), I([G], Ir.prototype, "amplitude", 2), I([G], Ir.prototype, "qubitCirclePopupTemplateId", 2), Ir = I([re], Ir);
var ud = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var cd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, d = this.getBoundingClientRect(), h = d.left + window.pageXOffset, v = d.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (h + c)}px`, i.style.top = `${t.clientY - (v + c)}px`, this.body.appendChild(i);
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
    return Z([ud]);
  }
  get tailSpinIcon() {
    return Z([cd]);
  }
}, "Un");
u(Un, "RunCircuitButtonElement"), I([G], Un.prototype, "running", 2), I([G], Un.prototype, "debug", 2), I([ke], Un.prototype, "body", 2), I([ke], Un.prototype, "ripple", 2);
re(Un);
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
}, "cn");
u(cn, "CircuitBlockElement"), I([G], cn.prototype, "comment", 2), I([G], cn.prototype, "finalized", 2), cn = I([re], cn);
var dd = Hi(za(), 1);
var pd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var zl = u((r) => r != null && r instanceof St, "isCircuitDropzoneElement");
var Po;
var St = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ia(this, Po, null);
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
    let { signal: e } = oa(this, Po, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: e }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: e }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = na(this, Po)) == null || e.abort();
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, dd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    return Z([pd]);
  }
}, "St");
u(St, "CircuitDropzoneElement"), Po = /* @__PURE__ */ new WeakMap(), I([G], St.prototype, "operationName", 2), I([G], St.prototype, "inputWireQuantum", 2), I([G], St.prototype, "outputWireQuantum", 2), I([G], St.prototype, "connectTop", 2), I([G], St.prototype, "connectBottom", 2), I([G], St.prototype, "shadow", 2), I([G], St.prototype, "debug", 2);
re(St);
var pn = u((r) => r != null && r instanceof Gt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let d = e(i, l, c), h = t.get(d);
  return h ? h.push(i) : t.set(d, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Gt = /* @__PURE__ */ __name(class extends HTMLElement {
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
        if (!So(d.operation))
          throw new Error(`${d.operation} isn't a phase-gate element.`);
        return l.angle === d.operation.angle;
      }).map((d) => this.bit(d));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((d) => d < this.bit(i)), i.connectBottom = c.some((d) => d > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((v) => v.connectTop || v.connectBottom).map((v) => this.bit(v)), d = Math.min(...c), h = Math.max(...c);
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
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((x) => x.operationName))], c = this.numControlGateDropzones(e, l), d = i.map((x) => this.bit(x)), h = c === null ? d : d.slice(0, c), v = t.map((x) => this.bit(x)), y = h.concat(v);
    for (let [x, O] of Object.entries(i)) {
      let C = O.operation;
      O.connectBottom = y.some((A) => this.bit(O) < A), O.connectTop = y.some((A) => this.bit(O) > A), c === null || c !== null && parseInt(x) < c ? C.enable() : (O.connectTop = Math.max(...y) > this.bit(O), C.disable());
    }
    for (let x of t) {
      if (!Cn(x.operation))
        throw new Error(`${x.operation} isn't controllable.`);
      x.operation.controls = this.controlBits(x, d, e), x.connectTop = y.some((O) => O < this.bit(x)), x.connectBottom = y.some((O) => O > this.bit(x));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((v) => _l(v.operation) && !v.operation.disabled).map((v) => this.bit(v)), l = t.map((v) => this.bit(v)), c = i.concat(l), d = Math.min(...c), h = Math.max(...c);
    for (let v of this.freeDropzones)
      d < this.bit(v) && this.bit(v) < h && (v.connectTop = true, v.connectBottom = true);
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
    let t = 0, i = 0, l = 0, c = 0, d = 0, h = 0, v = 0, y = 0, x = 0, O = 0;
    return this.dropzones.filter((C) => C.occupied).filter((C) => Cn(C.operation)).filter((C) => e === void 0 ? true : Zp(C.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Jp(C.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : Kp(C.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Qp(C.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : So(C.operation) ? (d += 1, e.maxCphaseTargetGates !== 0 && d > e.maxCphaseTargetGates ? false : !e.disableCphase) : ed(C.operation) ? (h += 1, e.maxCtTargetGates !== 0 && h > e.maxCtTargetGates ? false : !e.disableCt) : td(C.operation) ? (v += 1, e.maxCrnotTargetGates !== 0 && v > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ja(C.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : Ka(C.operation) ? (x += 1, e.maxCryTargetGates !== 0 && x > e.maxCryTargetGates ? false : !e.disableCry) : Qa(C.operation) ? (O += 1, e.maxCrzTargetGates !== 0 && O > e.maxCrzTargetGates ? false : !e.disableCrz) : rd(C.operation) ? !e.disableCswap : true);
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
            for (let [h, v] of Ge(d, (y) => y.controls.toString())) {
              let y = v[0], x = y.operationType, O = v.map((A) => A.bit), C = { type: x, targets: O };
              c !== "" && (C.if = c), h !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, v] of Ge(d, (y) => y.controls.toString())) {
              let y = v[0], x = y.operationType, O = v.map((A) => A.bit), C = { type: x, targets: O };
              c !== "" && (C.if = c), h !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, v] of Ge(d, (y) => y.controls.toString())) {
              let y = v[0], x = y.operationType, O = v.map((A) => A.bit), C = { type: x, targets: O };
              c !== "" && (C.if = c), h !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case dr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, v] of Ge(d, (y) => y.controls.toString())) {
              let y = v[0], x = y.operationType, O = v.map((A) => A.bit), C = { type: x, targets: O };
              c !== "" && (C.if = c), h !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, v] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(v, (O) => O.controls.toString())) {
                let O = x[0], C = O.operationType, A = x.map((S) => S.bit), D = { type: C, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = O.controls), e.push(D);
              }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, v] of Ge(d, (y) => y.controls.toString())) {
              let y = v[0], x = y.operationType, O = v.map((A) => A.bit), C = { type: x, targets: O };
              c !== "" && (C.if = c), h !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.if))
            for (let [h, v] of Ge(d, (y) => y.controls.toString())) {
              let y = v[0], x = y.operationType, O = v.map((A) => A.bit), C = { type: x, targets: O };
              c !== "" && (C.if = c), h !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, v] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(v, (O) => O.controls.toString())) {
                let O = x[0], C = O.operationType, A = x.map((S) => S.bit), D = { type: C, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = O.controls), e.push(D);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, v] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(v, (O) => O.controls.toString())) {
                let O = x[0], C = O.operationType, A = x.map((S) => S.bit), D = { type: C, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = O.controls), e.push(D);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, d] of Ge(l, (h) => h.angle))
            for (let [h, v] of Ge(d, (y) => y.if))
              for (let [y, x] of Ge(v, (O) => O.controls.toString())) {
                let O = x[0], C = O.operationType, A = x.map((S) => S.bit), D = { type: C, targets: A };
                h !== "" && (D.if = h), c !== "" && (D.angle = c), y !== "" && (D.controls = O.controls), e.push(D);
              }
          break;
        }
        case lr: {
          let l = i.filter((v) => !v.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, d = l[0].controls, h = { type: c, targets: [l[0].bit, l[1].bit] };
          d !== void 0 && d.length > 0 && (h.controls = d), e.push(h);
          break;
        }
        case Ut: {
          let l = i.filter((d) => !d.disabled);
          if (l.length < 2 || this.operations.some((d) => Cn(d) && d.controls.length > 0))
            break;
          let c = l.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case nt: {
          let l = i, c = i.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Vt: {
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
}, "Gt");
u(Gt, "CircuitStepElement"), I([G], Gt.prototype, "active", 2), I([G], Gt.prototype, "breakpoint", 2), I([G], Gt.prototype, "shadow", 2), I([G], Gt.prototype, "keep", 2), I([G], Gt.prototype, "debug", 2);
re(Gt);
var wi = /* @__PURE__ */ __name(class extends HTMLElement {
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
        let d = this.circuit.addShadowStepAfter(c), h = d.dropzones[l.wireIndex];
        ee.notNull(h), h.append(i), h.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d.dropzones);
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
    if (!Wr(t))
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
    if (!Wr(i))
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
    let l = e.detail.snapTargetInfo, c = l.x, d = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: d });
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
}, "wi");
u(wi, "CircuitEditorElement"), I([G], wi.prototype, "debug", 2), I([ke], wi.prototype, "circuit", 2), I([ke], wi.prototype, "inspectorButton", 2);
re(wi);
var Mo;
var Rl = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ia(this, Mo, null);
  }
  connectedCallback() {
    let { signal: e } = oa(this, Mo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = na(this, Mo)) == null || e.abort();
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
    e.draggable = true, e.snapped = true, e.grabbed = false, Ol(e) && e.initHelp();
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
    this.assertOperation(i), Ol(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!ut(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "Rl");
u(Rl, "PaletteDropzoneElement"), Mo = /* @__PURE__ */ new WeakMap();
re(Rl);
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
      this.append(new Gt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return ee.notNull(t), t;
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
    let t = this.applyOperationToTargets(() => new Ut(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new nt(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Vt();
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
      i.dropzoneAt(l).put(new Ut());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), d = l.concat(c), h = Math.max(...d) + 1, v = this.appendStepWithDropzones(h);
    for (let y of l)
      v.dropzoneAt(y).put(new Ut());
    for (let y of c)
      v.dropzoneAt(y).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(v);
  }
  appendStep() {
    let e = new Gt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Gt();
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
      let d = this.appendStep();
      l && (d.keep = true, l = false);
      for (let h of c) {
        switch (true) {
          case /^\|0>$/.test(h): {
            let v = new Vt();
            v.value = "0", d.appendOperation(v);
            break;
          }
          case /^\|1>$/.test(h): {
            let v = new Vt();
            v.value = "1", d.appendOperation(v);
            break;
          }
          case /^H/.test(h): {
            let v = new tr();
            v.if = this.ifVariable(h.slice(1)), d.appendOperation(v);
            break;
          }
          case (/^X$/.test(h) || /^X<(.+)$/.test(h)): {
            let v = new cr();
            v.if = h.slice(2).trim(), d.appendOperation(v);
            break;
          }
          case /^Y/.test(h): {
            let v = new pr();
            v.if = this.ifVariable(h.slice(1)), d.appendOperation(v);
            break;
          }
          case /^Z/.test(h): {
            let v = new dr();
            v.if = this.ifVariable(h.slice(1)), d.appendOperation(v);
            break;
          }
          case /^P/.test(h): {
            let v = new nr();
            v.angle = this.angleParameter(h.slice(1)), d.appendOperation(v);
            break;
          }
          case /^T/.test(h): {
            let v = new ur();
            v.if = this.ifVariable(h.slice(1)), d.appendOperation(v);
            break;
          }
          case /^X\^½/.test(h): {
            let v = new ir();
            v.if = this.ifVariable(h.slice(3)), d.appendOperation(v);
            break;
          }
          case /^Rx/.test(h): {
            let v = new or();
            v.angle = this.angleParameter(h.slice(2)), d.appendOperation(v);
            break;
          }
          case /^Ry/.test(h): {
            let v = new ar();
            v.angle = this.angleParameter(h.slice(2)), d.appendOperation(v);
            break;
          }
          case /^Rz/.test(h): {
            let v = new sr();
            v.angle = this.angleParameter(h.slice(2)), d.appendOperation(v);
            break;
          }
          case /^Swap$/.test(h): {
            let v = new lr();
            d.appendOperation(v);
            break;
          }
          case /^•$/.test(h): {
            let v = new Ut();
            d.appendOperation(v);
            break;
          }
          case /^Bloch$/.test(h): {
            let v = new nt();
            d.appendOperation(v);
            break;
          }
          case /^Measure/.test(h): {
            let v = new rr(), y = ((/^>(.+)$/.exec(h.slice(7)) || [])[1] || "").trim();
            v.flag = y, d.appendOperation(v);
            break;
          }
          case /^[[{](.+)$/.test(h): {
            let v = h.slice(1);
            d.remove(), t = new cn(), t.comment = v, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
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
          let d = c.map((x) => i.bit(x)), h = i.bit(l), v = d[0] === h ? d[1] : d[0], y = i.dropzoneAt(v);
          l.inputWireQuantum = t, l.outputWireQuantum = y.inputWireQuantum, t = y.inputWireQuantum;
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
    if (!zl(i))
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
    zl(l) && t.push(l);
    for (let [c, d] of Object.entries(this.dropzones)) {
      let h = d.snapTarget, v = this.isVertical ? h.y : h.x, y = this.isVertical ? h.x : h.y, x = parseInt(c) % this.wireCount, O = v - e.snapRange * 0.75, C = v + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: y, y: O }) : i.push({ x: O, y }), this.snapTargets[O] === void 0 && (this.snapTargets[O] = {}), this.snapTargets[O][y] === void 0 && (this.snapTargets[O][y] = { dropzone: null, stepIndex: -1, wireIndex: x })), this.isVertical ? i.push({ x: y, y: C }) : i.push({ x: C, y }), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][y] === void 0 && (this.snapTargets[C][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: x }), (!d.occupied || d === l) && i.push(h), this.snapTargets[v] === void 0 && (this.snapTargets[v] = {}), this.snapTargets[v][y] === void 0 && (this.snapTargets[v][y] = { dropzone: d, stepIndex: null, wireIndex: x });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    ee.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let d in c) {
          let h = c[d];
          h.stepIndex !== null && (h.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let d = c.snapTarget, h = this.isVertical ? d.y : d.x, v = this.isVertical ? d.x : d.y;
      ee.notNull(this.snapTargets[h]), this.snapTargets[h][v] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), I([G], se.prototype, "minStepCount", 2), I([G], se.prototype, "minWireCount", 2), I([G], se.prototype, "maxWireCount", 2), I([G], se.prototype, "editing", 2), I([G], se.prototype, "updateUrl", 2), I([G], se.prototype, "json", 2), I([G], se.prototype, "circuitTitle", 2), I([G], se.prototype, "debug", 2), I([G], se.prototype, "chDisabled", 2), I([G], se.prototype, "chMaxControlGates", 2), I([G], se.prototype, "chMaxTargetGates", 2), I([G], se.prototype, "cnotDisabled", 2), I([G], se.prototype, "cnotMaxControlGates", 2), I([G], se.prototype, "cnotMaxTargetGates", 2), I([G], se.prototype, "cyDisabled", 2), I([G], se.prototype, "cyMaxControlGates", 2), I([G], se.prototype, "cyMaxTargetGates", 2), I([G], se.prototype, "czDisabled", 2), I([G], se.prototype, "czMaxControlGates", 2), I([G], se.prototype, "czMaxTargetGates", 2), I([G], se.prototype, "cphaseDisabled", 2), I([G], se.prototype, "cphaseMaxControlGates", 2), I([G], se.prototype, "cphaseMaxTargetGates", 2), I([G], se.prototype, "ctDisabled", 2), I([G], se.prototype, "ctMaxControlGates", 2), I([G], se.prototype, "ctMaxTargetGates", 2), I([G], se.prototype, "crnotDisabled", 2), I([G], se.prototype, "crnotMaxControlGates", 2), I([G], se.prototype, "crnotMaxTargetGates", 2), I([G], se.prototype, "crxDisabled", 2), I([G], se.prototype, "crxMaxControlGates", 2), I([G], se.prototype, "crxMaxTargetGates", 2), I([G], se.prototype, "cryDisabled", 2), I([G], se.prototype, "cryMaxControlGates", 2), I([G], se.prototype, "cryMaxTargetGates", 2), I([G], se.prototype, "crzDisabled", 2), I([G], se.prototype, "crzMaxControlGates", 2), I([G], se.prototype, "crzMaxTargetGates", 2), I([G], se.prototype, "cswapDisabled", 2), I([G], se.prototype, "cswapMaxControlGates", 2), I([G], se.prototype, "swapDisabled", 2), I([G], se.prototype, "controlControlDisabled", 2), I([G], se.prototype, "controlControlMaxTargetGates", 2), I([G], se.prototype, "phasePhaseDisabled", 2), I([G], se.prototype, "phasePhaseMaxTargetGates", 2), I([Pt], se.prototype, "blocks", 2);
re(se);
var dn = /* @__PURE__ */ __name(class extends HTMLElement {
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
        for (let d in t.blochVectors) {
          let h = parseInt(d), v = c.dropzoneAt(h).operation;
          if (nd(v)) {
            let y = t.blochVectors[h];
            v.x = y[0], v.y = y[1], v.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d = t.measuredBits;
          for (let h in d) {
            let v = parseInt(h), y = c.dropzoneAt(v).operation;
            id(y) && (y.value = d[v].toString());
          }
        }
        for (let d of c.dropzones) {
          let h = d.operation;
          !Wr(h) || h.if !== "" && (h.disabled = !t.flags[h.if]);
        }
        if (i === t.step) {
          let d = {};
          for (let h in t.amplitudes) {
            let v = t.amplitudes[h];
            d[h] = new Nt(v[0], v[1]);
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
        throw new Et("Unknown service worker message", { data: t });
    }
  }
  run() {
    let e = this.activeStepIndex, t = this.circuit.serialize();
    ee.need(t.length > 0, "non-zero step length");
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
    ee.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "dn");
u(dn, "QuantumSimulatorElement"), I([G], dn.prototype, "updateUrl", 2), I([ke], dn.prototype, "circuit", 2), I([ke], dn.prototype, "circleNotation", 2), I([Pt], dn.prototype, "runCircuitButtons", 2), I([Oo(10)], dn.prototype, "run", 1);
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
  Nt as Complex
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
