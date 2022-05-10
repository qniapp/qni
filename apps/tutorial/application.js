var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var Cf = Object.create;
var Li = Object.defineProperty;
var ku = Object.getOwnPropertyDescriptor;
var Of = Object.getOwnPropertyNames;
var Mf = Object.getPrototypeOf;
var Pf = Object.prototype.hasOwnProperty;
var _f = /* @__PURE__ */ __name((r) => Li(r, "__esModule", { value: true }), "_f");
var u = /* @__PURE__ */ __name((r, e) => Li(r, "name", { value: e, configurable: true }), "u");
var Ru = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "Ru");
var Af = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of Of(e))
      !Pf.call(r, l) && (t || l !== "default") && Li(r, l, { get: () => e[l], enumerable: !(i = ku(e, l)) || i.enumerable });
  return r;
}, "Af");
var Ko = /* @__PURE__ */ __name((r, e) => Af(_f(Li(r != null ? Cf(Mf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Ko");
var k = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? ku(e, t) : e, c = r.length - 1, d; c >= 0; c--)
    (d = r[c]) && (l = (i ? d(e, t, l) : d(l)) || l);
  return i && l && Li(e, t, l), l;
}, "k");
var Nu = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "Nu");
var Qo = /* @__PURE__ */ __name((r, e, t) => (Nu(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "Qo");
var ea = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "ea");
var ta = /* @__PURE__ */ __name((r, e, t, i) => (Nu(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "ta");
var qu = Ru((xs, Gu) => {
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
      function A() {
      }
      __name(A, "A");
      return u(A, "IntermediateInheritor"), A.prototype = Error.prototype, M.prototype = new A(), M;
    }
    __name(i, "i");
    u(i, "createError");
    var l = z.DivisionByZero = i("DivisionByZero"), c = z.InvalidParameter = i("InvalidParameter");
    function d(S, M) {
      return isNaN(S = parseInt(S, 10)) && m(), S * M;
    }
    __name(d, "d");
    u(d, "assign");
    function m() {
      throw new c();
    }
    __name(m, "m");
    u(m, "throwInvalidParam");
    function b(S) {
      for (var M = {}, A = S, I = 2, L = 4; L <= A; ) {
        for (; A % I === 0; )
          A /= I, M[I] = (M[I] || 0) + 1;
        L += 1 + 2 * I++;
      }
      return A !== S ? A > 1 && (M[A] = (M[A] || 0) + 1) : M[S] = (M[S] || 0) + 1, M;
    }
    __name(b, "b");
    u(b, "factorize");
    var y = u(function(S, M) {
      var A = 0, I = 1, L = 1, E = 0, B = 0, R = 0, X = 1, V = 1, H = 0, W = 1, ie = 1, oe = 1, U = 1e7, ce;
      if (S != null)
        if (M !== void 0)
          A = S, I = M, L = A * I;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (A = S.n, I = S.d, "s" in S && (A *= S.s)) : 0 in S ? (A = S[0], 1 in S && (I = S[1])) : m(), L = A * I;
              break;
            }
            case "number": {
              if (S < 0 && (L = S, S = -S), S % 1 === 0)
                A = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); W <= U && oe <= U; )
                  if (ce = (H + ie) / (W + oe), S === ce) {
                    W + oe <= U ? (A = H + ie, I = W + oe) : oe > W ? (A = ie, I = oe) : (A = H, I = W);
                    break;
                  } else
                    S > ce ? (H += ie, W += oe) : (ie += H, oe += W), W > U ? (A = ie, I = oe) : (A = H, I = W);
                A *= V;
              } else
                (isNaN(S) || isNaN(M)) && (I = A = NaN);
              break;
            }
            case "string":
              if (W = S.match(/\d+|./g), W === null && m(), W[H] === "-" ? (L = -1, H++) : W[H] === "+" && H++, W.length === H + 1 ? B = d(W[H++], L) : W[H + 1] === "." || W[H] === "." ? (W[H] !== "." && (E = d(W[H++], L)), H++, (H + 1 === W.length || W[H + 1] === "(" && W[H + 3] === ")" || W[H + 1] === "'" && W[H + 3] === "'") && (B = d(W[H], L), X = Math.pow(10, W[H].length), H++), (W[H] === "(" && W[H + 2] === ")" || W[H] === "'" && W[H + 2] === "'") && (R = d(W[H + 1], L), V = Math.pow(10, W[H + 1].length) - 1, H += 3)) : W[H + 1] === "/" || W[H + 1] === ":" ? (B = d(W[H], L), X = d(W[H + 2], 1), H += 3) : W[H + 3] === "/" && W[H + 1] === " " && (E = d(W[H], L), B = d(W[H + 2], L), X = d(W[H + 4], 1), H += 5), W.length <= H) {
                I = X * V, L = A = R + I * E + V * B;
                break;
              }
            default:
              m();
          }
      if (I === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(A), t.d = Math.abs(I);
    }, "parse");
    function w(S, M, A) {
      for (var I = 1; M > 0; S = S * S % A, M >>= 1)
        M & 1 && (I = I * S % A);
      return I;
    }
    __name(w, "w");
    u(w, "modpow");
    function P(S, M) {
      for (; M % 2 === 0; M /= 2)
        ;
      for (; M % 5 === 0; M /= 5)
        ;
      if (M === 1)
        return 0;
      for (var A = 10 % M, I = 1; A !== 1; I++)
        if (A = A * 10 % M, I > e)
          return 0;
      return I;
    }
    __name(P, "P");
    u(P, "cycleLen");
    function C(S, M, A) {
      for (var I = 1, L = w(10, A, M), E = 0; E < 300; E++) {
        if (I === L)
          return E;
        I = I * 10 % M, L = L * 10 % M;
      }
      return 0;
    }
    __name(C, "C");
    u(C, "cycleStart");
    function _(S, M) {
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
    __name(_, "_");
    u(_, "gcd");
    function z(S, M) {
      if (!(this instanceof z))
        return new z(S, M);
      y(S, M), S = _(t.d, t.n), this.s = t.s, this.n = t.n / S, this.d = t.d / S;
    }
    __name(z, "z");
    u(z, "Fraction"), z.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new z(this.n, this.d);
    }, neg: function() {
      return new z(-this.s * this.n, this.d);
    }, add: function(S, M) {
      return y(S, M), new z(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(S, M) {
      return y(S, M), new z(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(S, M) {
      return y(S, M), new z(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(S, M) {
      return y(S, M), new z(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new z(this);
    }, mod: function(S, M) {
      return isNaN(this.n) || isNaN(this.d) ? new z(NaN) : S === void 0 ? new z(this.s * this.n % this.d, 1) : (y(S, M), t.n === 0 && this.d === 0 && z(0, 0), new z(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(S, M) {
      return y(S, M), new z(_(t.n, this.n) * _(t.d, this.d), t.d * this.d);
    }, lcm: function(S, M) {
      return y(S, M), t.n === 0 && this.n === 0 ? new z() : new z(t.n * this.n, _(t.n, this.n) * _(t.d, this.d));
    }, ceil: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new z(NaN) : new z(Math.ceil(S * this.s * this.n / this.d), S);
    }, floor: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new z(NaN) : new z(Math.floor(S * this.s * this.n / this.d), S);
    }, round: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new z(NaN) : new z(Math.round(S * this.s * this.n / this.d), S);
    }, inverse: function() {
      return new z(this.s * this.d, this.n);
    }, pow: function(S, M) {
      if (y(S, M), t.d === 1)
        return t.s < 0 ? new z(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new z(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var A = b(this.n), I = b(this.d), L = 1, E = 1;
      for (var B in A)
        if (B !== "1") {
          if (B === "0") {
            L = 0;
            break;
          }
          if (A[B] *= t.n, A[B] % t.d === 0)
            A[B] /= t.d;
          else
            return null;
          L *= Math.pow(B, A[B]);
        }
      for (var B in I)
        if (B !== "1") {
          if (I[B] *= t.n, I[B] % t.d === 0)
            I[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, I[B]);
        }
      return t.s < 0 ? new z(E, L) : new z(L, E);
    }, equals: function(S, M) {
      return y(S, M), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(S, M) {
      y(S, M);
      var A = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < A) - (A < 0);
    }, simplify: function(S) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var M = this.abs().toContinued();
      S = S || 1e-3;
      function A(E) {
        return E.length === 1 ? new z(E[0]) : A(E.slice(1)).inverse().add(E[0]);
      }
      __name(A, "A");
      u(A, "rec");
      for (var I = 0; I < M.length; I++) {
        var L = A(M.slice(0, I + 1));
        if (L.sub(this.abs()).abs().valueOf() < S)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(S, M) {
      return y(S, M), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var M, A = "", I = this.n, L = this.d;
      return this.s < 0 && (A += "-"), L === 1 ? A += I : (S && (M = Math.floor(I / L)) > 0 && (A += M, A += " ", I %= L), A += I, A += "/", A += L), A;
    }, toLatex: function(S) {
      var M, A = "", I = this.n, L = this.d;
      return this.s < 0 && (A += "-"), L === 1 ? A += I : (S && (M = Math.floor(I / L)) > 0 && (A += M, I %= L), A += "\\frac{", A += I, A += "}{", A += L, A += "}"), A;
    }, toContinued: function() {
      var S, M = this.n, A = this.d, I = [];
      if (isNaN(M) || isNaN(A))
        return I;
      do
        I.push(Math.floor(M / A)), S = M % A, M = A, A = S;
      while (M !== 1);
      return I;
    }, toString: function(S) {
      var M, A = this.n, I = this.d;
      if (isNaN(A) || isNaN(I))
        return "NaN";
      S = S || 15;
      var L = P(A, I), E = C(A, I, L), B = this.s === -1 ? "-" : "";
      if (B += A / I | 0, A %= I, A *= 10, A && (B += "."), L) {
        for (var R = E; R--; )
          B += A / I | 0, A %= I, A *= 10;
        B += "(";
        for (var R = L; R--; )
          B += A / I | 0, A %= I, A *= 10;
        B += ")";
      } else
        for (var R = S; A && R--; )
          B += A / I | 0, A %= I, A *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return z;
    }) : typeof xs == "object" ? (Object.defineProperty(z, "__esModule", { value: true }), z.default = z, z.Fraction = z, Gu.exports = z) : r.Fraction = z;
  })(xs);
});
var Aa = Ru((kc, Ks) => {
  (function(r) {
    typeof kc == "object" && typeof Ks != "undefined" ? Ks.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    var m = u(function(n) {
      return !!n && d(n) === "object";
    }, "s"), b = u(function(n) {
      return typeof n == "function";
    }, "l"), y = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return m(n) && n.nodeType === 11;
    }, object: m, func: b, number: function(n) {
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
      return m(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return m(n) && n.length !== void 0 && b(n.splice);
    } };
    c.default = y;
    var w = {};
    function P(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(P, "P");
    u(P, "f");
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
    u(C, "d"), Object.defineProperty(w, "__esModule", { value: true }), w.default = void 0;
    var _ = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = _.draggable, o.map.drag = _, o.methodDict.drag = "draggable", s.actions.drag = _.defaults;
    }, listeners: { "interactions:before-action-move": P, "interactions:action-resume": P, "interactions:action-move": C, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: P, move: C, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, z = _;
    w.default = z;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: true }), S.default = void 0;
    var M = { init: function(n) {
      var o = n;
      M.document = o.document, M.DocumentFragment = o.DocumentFragment || A, M.SVGElement = o.SVGElement || A, M.SVGSVGElement = o.SVGSVGElement || A, M.SVGElementInstance = o.SVGElementInstance || A, M.Element = o.Element || A, M.HTMLElement = o.HTMLElement || M.Element, M.Event = o.Event, M.Touch = o.Touch || A, M.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function A() {
    }
    __name(A, "A");
    u(A, "y");
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
            var v = H(p), h = H(f);
            if (v !== p.ownerDocument)
              if (h !== p.ownerDocument)
                if (v !== h) {
                  a = a.length ? a : W(f);
                  var g = void 0;
                  if (f instanceof S.default.HTMLElement && p instanceof S.default.SVGElement && !(p instanceof S.default.SVGSVGElement)) {
                    if (p === h)
                      continue;
                    g = p.ownerSVGElement;
                  } else
                    g = p;
                  for (var x = W(g, f.ownerDocument), T = 0; x[T] && x[T] === a[T]; )
                    T++;
                  var O = [x[T - 1], x[T], a[T]];
                  if (O[0])
                    for (var N = O[0].lastChild; N; ) {
                      if (N === O[1]) {
                        o = s, a = x;
                        break;
                      }
                      if (N === O[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  q = p, D = f, (parseInt(e.getWindow(q).getComputedStyle(q).zIndex, 10) || 0) >= (parseInt(e.getWindow(D).getComputedStyle(D).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var q, D;
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
      return c.default.string(f) ? f = We(f, o, a) : c.default.func(f) && (f = f.apply(void 0, function(v) {
        if (Array.isArray(v))
          return Re(v);
      }(p = s) || function(v) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(v))
          return Array.from(v);
      }(p) || function(v, h) {
        if (v) {
          if (typeof v == "string")
            return Re(v, h);
          var g = Object.prototype.toString.call(v).slice(8, -1);
          return g === "Object" && v.constructor && (g = v.constructor.name), g === "Map" || g === "Set" ? Array.from(v) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Re(v, h) : void 0;
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
        return o.reduce(function(g, x) {
          return (0, U.default)(g, n(x, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var p = 0; p < a.length; p++) {
          var f;
          f = a[p], n(o, f, s);
        }
      else if (c.default.object(a))
        for (var v in a) {
          var h = Ye(v).map(function(g) {
            return "".concat(o).concat(g);
          });
          n(h, a[v], s);
        }
      return s;
    }, "n"), "t");
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: true }), Ke.default = void 0, Ke.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var kt = {};
    function Pt(n, o) {
      for (var a in o) {
        var s = Pt.prefixedPropREs, p = false;
        for (var f in s)
          if (a.indexOf(f) === 0 && s[f].test(a)) {
            p = true;
            break;
          }
        p || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    __name(Pt, "Pt");
    u(Pt, "X"), Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0, Pt.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Ir = Pt;
    kt.default = Ir;
    var K = {};
    function Et(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    __name(Et, "Et");
    u(Et, "W");
    function St(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(St, "St");
    u(St, "L");
    function zr(n, o) {
      return o = o || { x: 0, y: 0 }, L.default.isOperaMobile && Et(n) ? (St("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : St("page", n, o), o;
    }
    __name(zr, "zr");
    u(zr, "U");
    function Wt(n, o) {
      return o = o || {}, L.default.isOperaMobile && Et(n) ? St("screen", n, o) : St("client", n, o), o;
    }
    __name(Wt, "Wt");
    u(Wt, "V");
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
    }, K.isNativePointer = Et, K.getXY = St, K.getPageXY = zr, K.getClientXY = Wt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? mr(o) : o[0];
      zr(s, n.page), Wt(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = hr, K.pointerAverage = mr, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = hr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), f = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: f, width: p - a, height: f - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = hr(n), f = p[0][a] - p[1][a], v = p[0][s] - p[1][s];
      return (0, Ke.default)(f, v);
    }, K.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = hr(n), f = p[1][a] - p[0][a], v = p[1][s] - p[0][s];
      return 180 * Math.atan2(v, f) / Math.PI;
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
    function Wn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Wn, "Wn");
    u(Wn, "G");
    function _t(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_t, "_t");
    u(_t, "H"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.BaseEvent = void 0;
    var cn = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _t(this, "type", void 0), _t(this, "target", void 0), _t(this, "currentTarget", void 0), _t(this, "interactable", void 0), _t(this, "_interaction", void 0), _t(this, "timeStamp", void 0), _t(this, "immediatePropagationStopped", false), _t(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Wn(o.prototype, a), n;
    }();
    Rt.BaseEvent = cn, Object.defineProperty(cn.prototype, "interaction", { get: function() {
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
    var At = {};
    function pn(n) {
      return (pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(pn, "pn");
    u(pn, "et");
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
    function dn(n, o) {
      return !o || pn(o) !== "object" && typeof o != "function" ? ct(n) : o;
    }
    __name(dn, "dn");
    u(dn, "ot");
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
    u(Nt, "st"), Object.defineProperty(At, "__esModule", { value: true }), At.DropEvent = void 0;
    var Un = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && gr(h, g);
      })(v, n);
      var o, a, s, p, f = (s = v, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, g = Dr(s);
        if (p) {
          var x = Dr(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return dn(this, h);
      });
      function v(h, g, x) {
        var T;
        (function(D, $) {
          if (!(D instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, v), Nt(ct(T = f.call(this, g._interaction)), "target", void 0), Nt(ct(T), "dropzone", void 0), Nt(ct(T), "dragEvent", void 0), Nt(ct(T), "relatedTarget", void 0), Nt(ct(T), "draggable", void 0), Nt(ct(T), "timeStamp", void 0), Nt(ct(T), "propagationStopped", false), Nt(ct(T), "immediatePropagationStopped", false);
        var O = x === "dragleave" ? h.prev : h.cur, N = O.element, q = O.dropzone;
        return T.type = x, T.target = N, T.currentTarget = N, T.dropzone = q, T.dragEvent = g, T.relatedTarget = g.target, T.draggable = g.interactable, T.timeStamp = g.timeStamp, T;
      }
      __name(v, "v");
      return u(v, "a"), o = v, (a = [{ key: "reject", value: function() {
        var h = this, g = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && g.cur.dropzone === this.dropzone && g.cur.element === this.target)
          if (g.prev.dropzone = this.dropzone, g.prev.element = this.target, g.rejected = true, g.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var x = g.activeDrops, T = xe.findIndex(x, function(N) {
              var q = N.dropzone, D = N.element;
              return q === h.dropzone && D === h.target;
            });
            g.activeDrops.splice(T, 1);
            var O = new v(g, this.dragEvent, "dropdeactivate");
            O.dropzone = this.dropzone, O.target = this.target, this.dropzone.fire(O);
          } else
            this.dropzone.fire(new v(g, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && vr(o.prototype, a), v;
    }(Rt.BaseEvent);
    At.DropEvent = Un;
    var kr = {};
    function fn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, f = s.element;
        o.dropzone = p, o.target = f, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(fn, "fn");
    u(fn, "ct");
    function xi(n, o) {
      for (var a = function(f, v) {
        for (var h = f.interactables, g = [], x = 0; x < h.list.length; x++) {
          var T = h.list[x];
          if (T.options.drop.enabled) {
            var O = T.options.drop.accept;
            if (!(c.default.element(O) && O !== v || c.default.string(O) && !R.matchesSelector(v, O) || c.default.func(O) && !O({ dropzone: T, draggableElement: v })))
              for (var N = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], q = 0; q < N.length; q++) {
                var D = N[q];
                D !== v && g.push({ dropzone: T, element: D, rect: T.getRect(D) });
              }
          }
        }
        return g;
      }(n, o), s = 0; s < a.length; s++) {
        var p = a[s];
        p.rect = p.dropzone.getRect(p.element);
      }
      return a;
    }
    __name(xi, "xi");
    u(xi, "ft");
    function To(n, o, a) {
      for (var s = n.dropState, p = n.interactable, f = n.element, v = [], h = 0; h < s.activeDrops.length; h++) {
        var g = s.activeDrops[h], x = g.dropzone, T = g.element, O = g.rect;
        v.push(x.dropCheck(o, a, p, f, T, O) ? T : null);
      }
      var N = R.indexOfDeepestElement(v);
      return s.activeDrops[N] || null;
    }
    __name(To, "To");
    u(To, "dt");
    function wi(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new At.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new At.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new At.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new At.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new At.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new At.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(wi, "wi");
    u(wi, "pt");
    function Ei(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, f = a.prev;
      o.leave && f.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && fn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(Ei, "Ei");
    u(Ei, "vt");
    function Co(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f = a.dropState;
        o.dynamicDrop && (f.activeDrops = xi(o, a.element));
        var v = s, h = To(a, v, p);
        f.rejected = f.rejected && !!h && h.dropzone === f.cur.dropzone && h.element === f.cur.element, f.cur.dropzone = h && h.dropzone, f.cur.element = h && h.element, f.events = wi(a, 0, v);
      }
    }
    __name(Co, "Co");
    u(Co, "ht"), Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(w.default), s.prototype.dropzone = function(f) {
        return function(v, h) {
          if (c.default.object(h)) {
            if (v.options.drop.enabled = h.enabled !== false, h.listeners) {
              var g = (0, fe.default)(h.listeners), x = Object.keys(g).reduce(function(T, O) {
                return T[/^(enter|leave)/.test(O) ? "drag".concat(O) : /^(activate|deactivate|move)/.test(O) ? "drop".concat(O) : O] = g[O], T;
              }, {});
              v.off(v.options.drop.listeners), v.on(x), v.options.drop.listeners = x;
            }
            return c.default.func(h.ondrop) && v.on("drop", h.ondrop), c.default.func(h.ondropactivate) && v.on("dropactivate", h.ondropactivate), c.default.func(h.ondropdeactivate) && v.on("dropdeactivate", h.ondropdeactivate), c.default.func(h.ondragenter) && v.on("dragenter", h.ondragenter), c.default.func(h.ondragleave) && v.on("dragleave", h.ondragleave), c.default.func(h.ondropmove) && v.on("dropmove", h.ondropmove), /^(pointer|center)$/.test(h.overlap) ? v.options.drop.overlap = h.overlap : c.default.number(h.overlap) && (v.options.drop.overlap = Math.max(Math.min(1, h.overlap), 0)), "accept" in h && (v.options.drop.accept = h.accept), "checker" in h && (v.options.drop.checker = h.checker), v;
          }
          return c.default.bool(h) ? (v.options.drop.enabled = h, v) : v.options.drop;
        }(this, f);
      }, s.prototype.dropCheck = function(f, v, h, g, x, T) {
        return function(O, N, q, D, $, J, F) {
          var re = false;
          if (!(F = F || O.getRect(J)))
            return !!O.options.drop.checker && O.options.drop.checker(N, q, re, O, J, D, $);
          var le = O.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, qe.default)(D, $, "drag"), Ee = K.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            re = je && be;
          }
          var Ie = D.getRect($);
          if (Ie && le === "center") {
            var Xt = Ie.left + Ie.width / 2, qr = Ie.top + Ie.height / 2;
            re = Xt >= F.left && Xt <= F.right && qr >= F.top && qr <= F.bottom;
          }
          return Ie && c.default.number(le) && (re = Math.max(0, Math.min(F.right, Ie.right) - Math.max(F.left, Ie.left)) * Math.max(0, Math.min(F.bottom, Ie.bottom) - Math.max(F.top, Ie.top)) / (Ie.width * Ie.height) >= le), O.options.drop.checker && (re = O.options.drop.checker(N, q, re, O, J, D, $)), re;
        }(this, f, v, h, g, x, T);
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
        p.activeDrops = null, p.events = null, p.activeDrops = xi(o, a.element), p.events = wi(a, 0, s), p.events.activate && (fn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Co, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Ei(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Co(n, o), Ei(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: xi, getDrop: To, getDropEvents: wi, fireDropEvents: Ei, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Q = j;
    kr.default = Q;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(x) {
          return x.pointer;
        }), f = s === "start", v = s === "end", h = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], f)
          a.distance = K.touchDistance(p, h), a.box = K.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(p, h), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (v) {
          var g = o.prevEvent;
          a.distance = g.distance, a.box = g.box, a.scale = g.scale, a.ds = 0, a.angle = g.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(p, h), a.box = K.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(p, h), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
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
    function Xr(n, o, a, s, p, f, v) {
      if (!o)
        return false;
      if (o === true) {
        var h = c.default.number(f.width) ? f.width : f.right - f.left, g = c.default.number(f.height) ? f.height : f.bottom - f.top;
        if (v = Math.min(v, Math.abs((n === "left" || n === "right" ? h : g) / 2)), h < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), g < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (h >= 0 ? f.left : f.right) + v;
        if (n === "top")
          return a.y < (g >= 0 ? f.top : f.bottom) + v;
        if (n === "right")
          return a.x > (h >= 0 ? f.right : f.left) - v;
        if (n === "bottom")
          return a.y > (g >= 0 ? f.bottom : f.top) - v;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : R.matchesUpTo(s, o, p));
    }
    __name(Xr, "Xr");
    u(Xr, "Pt");
    function Si(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Si, "Si");
    u(Si, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
    var ft = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      ft.cursors = function(f) {
        return f.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ft.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(f) {
        return function(v, h, g) {
          return c.default.object(h) ? (v.options.resize.enabled = h.enabled !== false, v.setPerAction("resize", h), v.setOnEvents("resize", h), c.default.string(h.axis) && /^x$|^y$|^xy$/.test(h.axis) ? v.options.resize.axis = h.axis : h.axis === null && (v.options.resize.axis = g.defaults.actions.resize.axis), c.default.bool(h.preserveAspectRatio) ? v.options.resize.preserveAspectRatio = h.preserveAspectRatio : c.default.bool(h.square) && (v.options.resize.square = h.square), v) : c.default.bool(h) ? (v.options.resize.enabled = h, v) : v.options.resize;
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
      })(n), Si(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.interactable.options.resize.invert, v = f === "reposition" || f === "negate", h = s.rect, g = s._rects, x = g.start, T = g.corrected, O = g.delta, N = g.previous;
          if ((0, U.default)(N, T), v) {
            if ((0, U.default)(T, h), f === "reposition") {
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
            T.top = Math.min(h.top, x.bottom), T.bottom = Math.max(h.bottom, x.top), T.left = Math.min(h.left, x.right), T.right = Math.max(h.right, x.left);
          for (var $ in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            O[$] = T[$] - N[$];
          p.edges = s.prepared.edges, p.rect = T, p.deltaRect = O;
        }
      })(n), Si(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, f = n.buttons;
      if (p) {
        var v = (0, U.default)({}, o.coords.cur.page), h = a.options.resize;
        if (h && h.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (f & h.mouseButtons) != 0)) {
          if (c.default.object(h.edges)) {
            var g = { left: false, right: false, top: false, bottom: false };
            for (var x in g)
              g[x] = Xr(x, h.edges[x], v, o._latestPointer.eventTarget, s, p, h.margin || ft.defaultMargin);
            g.left = g.left && !g.right, g.top = g.top && !g.bottom, (g.left || g.right || g.top || g.bottom) && (n.action = { name: "resize", edges: g });
          } else {
            var T = h.axis !== "y" && v.x > p.right - ft.defaultMargin, O = h.axis !== "x" && v.y > p.bottom - ft.defaultMargin;
            (T || O) && (n.action = { name: "resize", axes: (T ? "x" : "") + (O ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = ft.cursors, f = null;
      if (a)
        f = p[s + a];
      else if (o) {
        for (var v = "", h = ["top", "bottom", "left", "right"], g = 0; g < h.length; g++) {
          var x = h[g];
          o[x] && (v += x);
        }
        f = p[v];
      }
      return f;
    }, defaultMargin: null }, Ti = ft;
    dt.default = Ti;
    var Rr = {};
    Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var Yr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(dt.default), n.usePlugin(w.default), n.usePlugin(kr.default);
    } };
    Rr.default = Yr;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0;
    var qt, Ut, Al = 0, id = { request: function(n) {
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
        var f = Date.now(), v = Math.max(0, 16 - (f - Al)), h = n.setTimeout(function() {
          p(f + v);
        }, v);
        return Al = f + v, h;
      }, "kt"), Ut = u(function(p) {
        return clearTimeout(p);
      }, "It"));
    } };
    Gt.default = id;
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.getContainer = Oo, Zr.getScroll = Ci, Zr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Zr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var f = Oo(p.container, a.interactable, s), v = Ci(f);
      o();
      var h = Ci(f);
      return { x: h.x - v.x, y: h.y - v.y };
    }, Zr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, Gt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = Gt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), Gt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, f = Oo(p.container, o, a), v = ue.now(), h = (v - ue.prevTime) / 1e3, g = p.speed * h;
      if (g >= 1) {
        var x = { x: ue.x * g, y: ue.y * g };
        if (x.x || x.y) {
          var T = Ci(f);
          c.default.window(f) ? f.scrollBy(x.x, x.y) : f && (f.scrollLeft += x.x, f.scrollTop += x.y);
          var O = Ci(f), N = { x: O.x - T.x, y: O.y - T.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: f });
        }
        ue.prevTime = v;
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
          var s, p, f, v, h = o.interactable, g = o.element, x = o.prepared.name, T = h.options[x].autoScroll, O = Oo(T.container, h, g);
          if (c.default.window(O))
            v = a.clientX < ue.margin, s = a.clientY < ue.margin, p = a.clientX > O.innerWidth - ue.margin, f = a.clientY > O.innerHeight - ue.margin;
          else {
            var N = R.getElementClientRect(O);
            v = a.clientX < N.left + ue.margin, s = a.clientY < N.top + ue.margin, p = a.clientX > N.right - ue.margin, f = a.clientY > N.bottom - ue.margin;
          }
          ue.x = p ? 1 : v ? -1 : 0, ue.y = f ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = T.margin, ue.speed = T.speed, ue.start(o));
        }
    } };
    function Oo(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(Oo, "Oo");
    u(Oo, "Ct");
    function Ci(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Ci, "Ci");
    u(Ci, "Ft");
    var od = { id: "auto-scroll", install: function(n) {
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
    Zr.default = od;
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
    var Mo = {};
    function ad(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(ad, "ad");
    u(ad, "Wt");
    function sd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(sd, "sd");
    u(sd, "Lt"), Object.defineProperty(Mo, "__esModule", { value: true }), Mo.default = void 0;
    var ld = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, f) {
        var v = function(h, g, x, T, O) {
          var N = h.getRect(T), q = { action: null, interactable: h, interaction: x, element: T, rect: N, buttons: g.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[g.button] };
          return O.fire("auto-start:check", q), q.action;
        }(this, s, p, f, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, v, this, f, p) : v;
      }, o.prototype.ignoreFrom = (0, Lt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Lt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = sd, o.prototype.styleCursor = ad;
    } };
    Mo.default = ld;
    var Vn = {};
    function Il(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Po(o, a, n, p) ? n : null;
    }
    __name(Il, "Il");
    u(Il, "Nt");
    function ud(n, o, a, s, p, f, v) {
      for (var h = 0, g = s.length; h < g; h++) {
        var x = s[h], T = p[h], O = x.getAction(o, a, n, T);
        if (O) {
          var N = Il(O, x, T, f, v);
          if (N)
            return { action: N, interactable: x, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(ud, "ud");
    u(ud, "qt");
    function zl(n, o, a, s, p) {
      var f = [], v = [], h = s;
      function g(T) {
        f.push(T), v.push(h);
      }
      __name(g, "g");
      for (u(g, "u"); c.default.element(h); ) {
        f = [], v = [], p.interactables.forEachMatch(h, g);
        var x = ud(n, o, a, f, v, s, p);
        if (x.action && !x.interactable.options[x.action.name].manualStart)
          return x;
        h = R.parentNode(h);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(zl, "zl");
    u(zl, "$t");
    function Dl(n, o, a) {
      var s = o.action, p = o.interactable, f = o.element;
      s = s || { name: null }, n.interactable = p, n.element = f, (0, Lt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(f) : null, Rl(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Dl, "Dl");
    u(Dl, "Gt");
    function Po(n, o, a, s) {
      var p = n.options, f = p[a.name].max, v = p[a.name].maxPerElement, h = s.autoStart.maxInteractions, g = 0, x = 0, T = 0;
      if (!(f && v && h))
        return false;
      for (var O = 0; O < s.interactions.list.length; O++) {
        var N = s.interactions.list[O], q = N.prepared.name;
        if (N.interacting() && (++g >= h || N.interactable === n && ((x += q === a.name ? 1 : 0) >= f || N.element === o && (T++, q === a.name && T >= v))))
          return false;
      }
      return h > 0;
    }
    __name(Po, "Po");
    u(Po, "Ht");
    function kl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(kl, "kl");
    u(kl, "Kt");
    function Za(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(Za, "Za");
    u(Za, "Zt");
    function Rl(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f = "";
        if (p.name) {
          var v = a.options[p.name].cursorChecker;
          f = c.default.func(v) ? v(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        Za(n.element, f || "", o);
      } else
        o.autoStart.cursorElement && Za(o.autoStart.cursorElement, "", o);
    }
    __name(Rl, "Rl");
    u(Rl, "Jt"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0;
    var cd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(Mo.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return kl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Po, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      a.interacting() || Dl(a, zl(a, s, p, f, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, f = a.pointer, v = a.event, h = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Dl(p, zl(p, f, v, h, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f = p.interactable, v = p.prepared.name;
          v && f && (f.options[v].manualStart || !Po(f, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, f, p.element), Rl(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && Za(a.element, "", o);
    } }, maxInteractions: kl, withinInteractionLimit: Po, validateAction: Il };
    Vn.default = cd;
    var _o = {};
    Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var pd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, f = n.dy;
      if (a.prepared.name === "drag") {
        var v = Math.abs(p), h = Math.abs(f), g = a.interactable.options.drag, x = g.startAxis, T = v > h ? "x" : v < h ? "y" : "xy";
        if (a.prepared.axis = g.lockAxis === "start" ? T[0] : g.lockAxis, T !== "xy" && x !== "xy" && x !== T) {
          a.prepared.name = null;
          for (var O = s, N = function(D) {
            if (D !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && D.testIgnoreAllow($, O, s)) {
                var J = D.getAction(a.downPointer, a.downEvent, a, O);
                if (J && J.name === "drag" && function(F, re) {
                  if (!re)
                    return false;
                  var le = re.options.drag.startAxis;
                  return F === "xy" || le === "xy" || le === F;
                }(T, D) && Vn.default.validateAction(J, D, O, s, o))
                  return D;
              }
            }
          }; c.default.element(O); ) {
            var q = o.interactables.forEachMatch(O, N);
            if (q) {
              a.prepared.name = "drag", a.interactable = q, a.element = O;
              break;
            }
            O = (0, R.parentNode)(O);
          }
        }
      }
    } } };
    _o.default = pd;
    var Ao = {};
    function Ja(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(Ja, "Ja");
    u(Ja, "re"), Object.defineProperty(Ao, "__esModule", { value: true }), Ao.default = void 0;
    var dd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Vn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = Ja(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      Ja(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: Ja };
    Ao.default = dd;
    var Io = {};
    Object.defineProperty(Io, "__esModule", { value: true }), Io.default = void 0;
    var fd = { id: "auto-start", install: function(n) {
      n.usePlugin(Vn.default), n.usePlugin(Ao.default), n.usePlugin(_o.default);
    } };
    Io.default = fd;
    var Xn = {};
    function hd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(hd, "hd");
    u(hd, "le");
    function md(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(md, "md");
    u(md, "ue");
    function Nl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = hd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, f) {
          var v = s.options.preventDefault;
          if (v !== "never")
            if (v !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(f.type)) {
                var h = (0, e.getWindow)(f.target).document, g = p.getDocOptions(h);
                if (!g || !g.events || g.events.passive !== false)
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
    __name(Nl, "Nl");
    u(Nl, "ce"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.install = Nl, Xn.default = void 0;
    var vd = { id: "core/interactablePreventDefault", install: Nl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = md, n;
    }, {}) };
    Xn.default = vd;
    var Ka = {};
    Object.defineProperty(Ka, "__esModule", { value: true }), Ka.default = void 0, Ka.default = {};
    var Oi, Qa = {};
    Object.defineProperty(Qa, "__esModule", { value: true }), Qa.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Oi || (Oi = {})), Oi.touchAction, Oi.boxSizing, Oi.noListeners;
    var gd = { id: "dev-tools", install: function() {
    } };
    Qa.default = gd;
    var hn = {};
    Object.defineProperty(hn, "__esModule", { value: true }), hn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = xe.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var mn = {};
    function Gl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, v = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            v = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (v)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return ql(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? ql(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Gl, "Gl");
    u(Gl, "me");
    function ql(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ql, "ql");
    u(ql, "be");
    function bd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(bd, "bd");
    u(bd, "xe");
    function vn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vn, "vn");
    u(vn, "we"), Object.defineProperty(mn, "__esModule", { value: true }), mn.getRectOffset = Ll, mn.default = void 0;
    var yd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), vn(this, "states", []), vn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), vn(this, "startDelta", void 0), vn(this, "result", void 0), vn(this, "endResult", void 0), vn(this, "edges", void 0), vn(this, "interaction", void 0), this.interaction = s, this.result = zo();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var f = s.phase, v = this.interaction, h = function(x) {
          var T = x.interactable.options[x.prepared.name], O = T.modifiers;
          return O && O.length ? O : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var q = T[N];
            return q && q.enabled && { options: q, methods: q._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(v);
        this.prepareStates(h), this.edges = (0, U.default)({}, v.edges), this.startOffset = Ll(v.rect, p), this.startDelta = { x: 0, y: 0 };
        var g = this.fillArg({ phase: f, pageCoords: p, preEnd: false });
        return this.result = zo(), this.startAll(g), this.result = this.setAll(g);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var f = this.states[p];
          f.methods.start && (s.state = f, f.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, f = s.preEnd, v = s.skipModifiers, h = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, h);
        for (var g = v ? this.states.slice(v) : this.states, x = zo(s.coords, s.rect), T = 0; T < g.length; T++) {
          var O, N = g[T], q = N.options, D = (0, U.default)({}, s.coords), $ = null;
          (O = N.methods) != null && O.set && this.shouldDo(q, f, p) && (s.state = N, $ = N.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - D.x, y: s.coords.y - D.y })), x.eventProps.push($);
        }
        x.delta.x = s.coords.x - s.pageCoords.x, x.delta.y = s.coords.y - s.pageCoords.y, x.rectDelta.left = s.rect.left - h.left, x.rectDelta.right = s.rect.right - h.right, x.rectDelta.top = s.rect.top - h.top, x.rectDelta.bottom = s.rect.bottom - h.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var re = x.rect.left !== F.left || x.rect.right !== F.right || x.rect.top !== F.top || x.rect.bottom !== F.bottom;
          x.changed = re || J.x !== x.coords.x || J.y !== x.coords.y;
        }
        return x;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, f = s.phase, v = p.coords.cur, h = p.coords.start, g = this.result, x = this.startDelta, T = g.delta;
        f === "start" && (0, U.default)(this.startDelta, g.delta);
        for (var O = 0; O < [[h, x], [v, T]].length; O++) {
          var N = Gl([[h, x], [v, T]][O], 2), q = N[0], D = N[1];
          q.page.x += D.x, q.page.y += D.y, q.client.x += D.x, q.client.y += D.y;
        }
        var $ = this.result.rectDelta, J = s.rect || p.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, f = s.phase, v = s.preEnd, h = s.skipModifiers, g = this.setAll(this.fillArg({ preEnd: v, phase: f, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = g, !g.changed && (!h || h < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var x = p.coords.cur.page, T = { x: s.modifiedCoords.x - x.x, y: s.modifiedCoords.y - x.y };
          g.coords.x += T.x, g.coords.y += T.y, g.delta.x += T.x, g.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, f = s.event, v = this.states;
        if (v && v.length) {
          for (var h = false, g = 0; g < v.length; g++) {
            var x = v[g];
            s.state = x;
            var T = x.options, O = x.methods, N = O.beforeEnd && O.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            h = h || !h && this.shouldDo(T, true, s.phase, true);
          }
          h && p.move({ event: f, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var f = (0, U.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(f);
          for (var v = 0; v < this.states.length; v++) {
            var h = this.states[v];
            f.state = h, h.methods.stop && h.methods.stop(f);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var f = s[p], v = f.options, h = f.methods, g = f.name;
          this.states.push({ options: v, methods: h, index: p, name: g });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, f = p.coords, v = p.rect, h = p.modification;
        if (h.result) {
          for (var g = h.startDelta, x = h.result, T = x.delta, O = x.rectDelta, N = [[f.start, g], [f.cur, T]], q = 0; q < N.length; q++) {
            var D = Gl(N[q], 2), $ = D[0], J = D[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          v.left -= O.left, v.right -= O.right, v.top -= O.top, v.bottom -= O.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, f, v) {
        return !(!s || s.enabled === false || v && !s.endOnly || s.endOnly && !p || f === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, hn.default)(p);
        }), this.result = zo((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && bd(o.prototype, a), n;
    }();
    function zo(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(zo, "zo");
    u(zo, "Pe");
    function Ll(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Ll, "Ll");
    u(Ll, "Oe"), mn.default = yd;
    var ht = {};
    function Do(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(Do, "Do");
    u(Do, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(f) {
        var v = f || {};
        for (var h in v.enabled = v.enabled !== false, a)
          h in v || (v[h] = a[h]);
        var g = { options: v, methods: s, name: o, enable: function() {
          return v.enabled = true, g;
        }, disable: function() {
          return v.enabled = false, g;
        } };
        return g;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    }, ht.addEventModifiers = Do, ht.default = void 0;
    var xd = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new mn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": Do, "interactions:action-move": Do, "interactions:action-end": Do, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ht.default = xd;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.defaults = void 0, Mi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Pi = {};
    function jl(n) {
      return (jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(jl, "jl");
    u(jl, "ke");
    function wd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(wd, "wd");
    u(wd, "Ie");
    function Bl(n, o) {
      return (Bl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Bl, "Bl");
    u(Bl, "De");
    function Ed(n, o) {
      return !o || jl(o) !== "object" && typeof o != "function" ? Ce(n) : o;
    }
    __name(Ed, "Ed");
    u(Ed, "Ae");
    function Ce(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Ce, "Ce");
    u(Ce, "Re");
    function es(n) {
      return (es = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(es, "es");
    u(es, "ze");
    function Ae(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ae, "Ae");
    u(Ae, "Ce"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.InteractEvent = void 0;
    var Hl = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && Bl(h, g);
      })(v, n);
      var o, a, s, p, f = (s = v, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, g = es(s);
        if (p) {
          var x = es(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return Ed(this, h);
      });
      function v(h, g, x, T, O, N, q) {
        var D;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, v), Ae(Ce(D = f.call(this, h)), "target", void 0), Ae(Ce(D), "currentTarget", void 0), Ae(Ce(D), "relatedTarget", null), Ae(Ce(D), "screenX", void 0), Ae(Ce(D), "screenY", void 0), Ae(Ce(D), "button", void 0), Ae(Ce(D), "buttons", void 0), Ae(Ce(D), "ctrlKey", void 0), Ae(Ce(D), "shiftKey", void 0), Ae(Ce(D), "altKey", void 0), Ae(Ce(D), "metaKey", void 0), Ae(Ce(D), "page", void 0), Ae(Ce(D), "client", void 0), Ae(Ce(D), "delta", void 0), Ae(Ce(D), "rect", void 0), Ae(Ce(D), "x0", void 0), Ae(Ce(D), "y0", void 0), Ae(Ce(D), "t0", void 0), Ae(Ce(D), "dt", void 0), Ae(Ce(D), "duration", void 0), Ae(Ce(D), "clientX0", void 0), Ae(Ce(D), "clientY0", void 0), Ae(Ce(D), "velocity", void 0), Ae(Ce(D), "speed", void 0), Ae(Ce(D), "swipe", void 0), Ae(Ce(D), "timeStamp", void 0), Ae(Ce(D), "axes", void 0), Ae(Ce(D), "preEnd", void 0), O = O || h.element;
        var $ = h.interactable, J = ($ && $.options || Mi.defaults).deltaSource, F = (0, qe.default)($, O, x), re = T === "start", le = T === "end", pe = re ? Ce(D) : h.prevEvent, Ee = re ? h.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: h.coords.cur.timeStamp } : h.coords.cur;
        return D.page = (0, U.default)({}, Ee.page), D.client = (0, U.default)({}, Ee.client), D.rect = (0, U.default)({}, h.rect), D.timeStamp = Ee.timeStamp, le || (D.page.x -= F.x, D.page.y -= F.y, D.client.x -= F.x, D.client.y -= F.y), D.ctrlKey = g.ctrlKey, D.altKey = g.altKey, D.shiftKey = g.shiftKey, D.metaKey = g.metaKey, D.button = g.button, D.buttons = g.buttons, D.target = O, D.currentTarget = O, D.preEnd = N, D.type = q || x + (T || ""), D.interactable = $, D.t0 = re ? h.pointers[h.pointers.length - 1].downTime : pe.t0, D.x0 = h.coords.start.page.x - F.x, D.y0 = h.coords.start.page.y - F.y, D.clientX0 = h.coords.start.client.x - F.x, D.clientY0 = h.coords.start.client.y - F.y, D.delta = re || le ? { x: 0, y: 0 } : { x: D[J].x - pe[J].x, y: D[J].y - pe[J].y }, D.dt = h.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, U.default)({}, h.coords.velocity[J]), D.speed = (0, Ke.default)(D.velocity.x, D.velocity.y), D.swipe = le || T === "inertiastart" ? D.getSwipe() : null, D;
      }
      __name(v, "v");
      return u(v, "a"), o = v, (a = [{ key: "getSwipe", value: function() {
        var h = this._interaction;
        if (h.prevEvent.speed < 600 || this.timeStamp - h.prevEvent.timeStamp > 150)
          return null;
        var g = 180 * Math.atan2(h.prevEvent.velocityY, h.prevEvent.velocityX) / Math.PI;
        g < 0 && (g += 360);
        var x = 112.5 <= g && g < 247.5, T = 202.5 <= g && g < 337.5;
        return { up: T, down: !T && 22.5 <= g && g < 157.5, left: x, right: !x && (292.5 <= g || g < 67.5), angle: g, speed: h.prevEvent.speed, velocity: { x: h.prevEvent.velocityX, y: h.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && wd(o.prototype, a), v;
    }(Rt.BaseEvent);
    Pi.InteractEvent = Hl, Object.defineProperties(Hl.prototype, { pageX: { get: function() {
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
    function Ai(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ai, "Ai");
    u(Ai, "Ye"), Object.defineProperty(_i, "__esModule", { value: true }), _i.PointerInfo = void 0, _i.PointerInfo = u(/* @__PURE__ */ __name(function n(o, a, s, p, f) {
      (function(v, h) {
        if (!(v instanceof h))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ai(this, "id", void 0), Ai(this, "pointer", void 0), Ai(this, "event", void 0), Ai(this, "downTime", void 0), Ai(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = f;
    }, "n"), "t");
    var ko, Ro, It = {};
    function Sd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Sd, "Sd");
    u(Sd, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(He, "He");
    u(He, "Ve"), Object.defineProperty(It, "__esModule", { value: true }), Object.defineProperty(It, "PointerInfo", { enumerable: true, get: function() {
      return _i.PointerInfo;
    } }), It.default = It.Interaction = It._ProxyMethods = It._ProxyValues = void 0, It._ProxyValues = ko, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(ko || (It._ProxyValues = ko = {})), It._ProxyMethods = Ro, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Ro || (It._ProxyMethods = Ro = {}));
    var Td = 0, $l = function() {
      function n(s) {
        var p = this, f = s.pointerType, v = s.scopeFire;
        (function(N, q) {
          if (!(N instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Lt.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), He(this, "_id", Td++), this._scopeFire = v, this.pointerType = f;
        var h = this;
        this._proxy = {};
        var g = u(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return h[N];
          } });
        }, "a");
        for (var x in ko)
          g(x);
        var T = u(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return h[N].apply(h, arguments);
          } });
        }, "l");
        for (var O in Ro)
          T(O);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, f) {
        var v = this.updatePointer(s, p, f, true), h = this.pointers[v];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: f, pointerIndex: v, pointerInfo: h, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, f) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, Lt.copyAction)(this.prepared, s), this.interactable = p, this.element = f, this.rect = p.getRect(f), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, f) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, f, false);
        var v, h, g = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (v = this.coords.cur.client.x - this.coords.start.client.x, h = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ke.default)(v, h) > this.pointerMoveTolerance);
        var x = this.getPointerIndex(s), T = { pointer: s, pointerIndex: x, pointerInfo: this.pointers[x], event: p, type: "move", eventTarget: f, dx: v, dy: h, duplicate: g, interaction: this };
        g || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), g || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, f, v) {
        var h = this.getPointerIndex(s);
        h === -1 && (h = this.updatePointer(s, p, f, false));
        var g = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(g), { pointer: s, pointerIndex: h, pointerInfo: this.pointers[h], event: p, eventTarget: f, type: g, curEventTarget: v, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
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
      } }, { key: "updatePointer", value: function(s, p, f, v) {
        var h = K.getPointerId(s), g = this.getPointerIndex(s), x = this.pointers[g];
        return v = v !== false && (v || /(down|start)$/i.test(p.type)), x ? x.pointer = s : (x = new _i.PointerInfo(h, s, p, null, null), g = this.pointers.length, this.pointers.push(x)), K.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), v && (this.pointerIsDown = true, x.downTime = this.coords.cur.timeStamp, x.downTarget = f, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, f), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: f, down: v, pointerInfo: x, pointerIndex: g, interaction: this }), g;
      } }, { key: "removePointer", value: function(s, p) {
        var f = this.getPointerIndex(s);
        if (f !== -1) {
          var v = this.pointers[f];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p, eventTarget: null, pointerIndex: f, pointerInfo: v, interaction: this }), this.pointers.splice(f, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p, f) {
        this._latestPointer.pointer = s, this._latestPointer.event = p, this._latestPointer.eventTarget = f;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p, f, v) {
        return new Pi.InteractEvent(this, s, this.prepared.name, p, this.element, f, v);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, f = s.phase, v = s.preEnd, h = s.type, g = this.rect;
        if (g && f === "move" && (ce.addEdges(this.edges, g, this.coords.delta[this.interactable.options.deltaSource]), g.width = g.right - g.left, g.height = g.bottom - g.top), this._scopeFire("interactions:before-action-".concat(f), s) === false)
          return false;
        var x = s.iEvent = this._createPreparedEvent(p, f, v, h);
        return this._scopeFire("interactions:action-".concat(f), s), f === "start" && (this.prevEvent = x), this._fireEvent(x), this._scopeFire("interactions:after-action-".concat(f), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Sd(o.prototype, a), n;
    }();
    It.Interaction = $l;
    var Cd = $l;
    It.default = Cd;
    var gn = {};
    function Fl(n) {
      n.pointerIsDown && (rs(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(Fl, "Fl");
    u(Fl, "He");
    function Wl(n) {
      ts(n.interaction);
    }
    __name(Wl, "Wl");
    u(Wl, "Ke");
    function ts(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return rs(n.coords.cur, o), rs(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ts, "ts");
    u(ts, "Ze");
    function Od(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Od, "Od");
    u(Od, "Je");
    function rs(n, o) {
      var a = n.page, s = n.client, p = o.x, f = o.y;
      a.x += p, a.y += f, s.x += p, s.y += f;
    }
    __name(rs, "rs");
    u(rs, "Qe"), Object.defineProperty(gn, "__esModule", { value: true }), gn.addTotal = Fl, gn.applyPending = ts, gn.default = void 0, It._ProxyMethods.offsetBy = "";
    var Md = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Od;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Fl(n.interaction);
    }, "interactions:before-action-start": Wl, "interactions:before-action-move": Wl, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ts(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    gn.default = Md;
    var Yn = {};
    function Pd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Pd, "Pd");
    u(Pd, "nn");
    function ot(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ot, "ot");
    u(ot, "rn"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = Yn.InertiaState = void 0;
    var Ul = function() {
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
        var p = this.interaction, f = No(p);
        if (!f || !f.enabled)
          return false;
        var v = p.coords.velocity.client, h = (0, Ke.default)(v.x, v.y), g = this.modification || (this.modification = new mn.default(p));
        if (g.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = f.allowResume, this.v0 = h, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = g.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && h > f.minSpeed && h > f.endSpeed)
          this.startInertia();
        else {
          if (g.result = g.setAll(this.modifierArg), !g.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, f = No(this.interaction), v = f.resistance, h = -Math.log(f.endSpeed / this.v0) / v;
        this.targetOffset = { x: (p.x - h) / v, y: (p.y - h) / v }, this.te = h, this.lambda_v0 = v / this.v0, this.one_ve_v0 = 1 - f.endSpeed / this.v0;
        var g = this.modification, x = this.modifierArg;
        x.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, g.result = g.setAll(x), g.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + g.result.delta.x, y: this.targetOffset.y + g.result.delta.y }), this.onNextFrame(function() {
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
        var s, p, f, v, h, g = this, x = this.interaction, T = No(x).resistance, O = (x._now() - this.t0) / 1e3;
        if (O < this.te) {
          var N, q = 1 - (Math.exp(-T * O) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, f = this.modifiedOffset.x, v = this.modifiedOffset.y, N = { x: Vl(h = q, 0, s, f), y: Vl(h, 0, p, v) }) : N = { x: this.targetOffset.x * q, y: this.targetOffset.y * q };
          var D = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, x.offsetBy(D), x.move(), this.onNextFrame(function() {
            return g.inertiaTick();
          });
        } else
          x.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, f = p._now() - this.t0, v = No(p).smoothEndDuration;
        if (f < v) {
          var h = { x: Xl(f, 0, this.targetOffset.x, v), y: Xl(f, 0, this.targetOffset.y, v) }, g = { x: h.x - this.currentOffset.x, y: h.y - this.currentOffset.y };
          this.currentOffset.x += g.x, this.currentOffset.y += g.y, p.offsetBy(g), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, f = s.event, v = s.eventTarget, h = this.interaction;
        h.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), h.updatePointer(p, f, v, true), h._doPhase({ interaction: h, event: f, phase: "resume" }), (0, K.copyCoords)(h.coords.prev, h.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Gt.default.cancel(this.timeout);
      } }]) && Pd(o.prototype, a), n;
    }();
    function No(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(No, "No");
    u(No, "an");
    function Vl(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(Vl, "Vl");
    u(Vl, "sn");
    function Xl(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(Xl, "Xl");
    u(Xl, "ln"), Yn.InertiaState = Ul;
    var _d = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(gn.default), n.usePlugin(ht.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new Ul(o);
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
    Yn.default = _d;
    var Ii = {};
    function Ad(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ad, "Ad");
    u(Ad, "fn");
    function zi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zi, "zi");
    u(zi, "dn");
    function Yl(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(Yl, "Yl");
    u(Yl, "pn"), Object.defineProperty(Ii, "__esModule", { value: true }), Ii.Eventable = void 0;
    var Id = function() {
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
        (p = this.types[s.type]) && Yl(s, p), !s.propagationStopped && f && (p = f[s.type]) && Yl(s, p);
      } }, { key: "on", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f)
          this.types[s] = xe.merge(this.types[s] || [], f[s]);
      } }, { key: "off", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f) {
          var v = this.types[s];
          if (v && v.length)
            for (var h = 0; h < f[s].length; h++) {
              var g = f[s][h], x = v.indexOf(g);
              x !== -1 && v.splice(x, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Ad(o.prototype, a), n;
    }();
    Ii.Eventable = Id;
    var Di = {};
    Object.defineProperty(Di, "__esModule", { value: true }), Di.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var ns = {};
    Object.defineProperty(ns, "__esModule", { value: true }), ns.createInteractStatic = function(n) {
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
            var v = a[f];
            this.on(v, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var h in a)
            this.on(h, a[h], s);
          return this;
        }
        return (0, Di.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Lt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var v = a[f];
            this.off(v, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var h in a)
            this.off(h, a[h], s);
          return this;
        }
        var g;
        return (0, Di.default)(a, this.scope.actions) ? a in this.globalEvents && (g = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(g, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
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
    var Go = {};
    function zd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(zd, "zd");
    u(zd, "mn");
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nr, "Nr");
    u(Nr, "bn"), Object.defineProperty(Go, "__esModule", { value: true }), Go.Interactable = void 0;
    var Dd = function() {
      function n(s, p, f, v) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new Ii.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || f, this._win = (0, e.getWindow)((0, R.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = v, this.set(p);
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
        for (var v in p) {
          var h = v, g = this.options[s], x = p[h];
          h === "listeners" && this.updatePerActionListeners(s, g.listeners, x), c.default.array(x) ? g[h] = xe.from(x) : c.default.plainObject(x) ? (g[h] = (0, U.default)(g[h] || {}, (0, hn.default)(x)), c.default.object(f.perAction[h]) && "enabled" in f.perAction[h] && (g[h].enabled = x.enabled !== false)) : c.default.bool(x) && c.default.object(f.perAction[h]) ? g[h].enabled = x : g[h] = x;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, R.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(f) {
          var v = (0, U.default)({}, p._rectChecker(f));
          return "width" in v || (v.width = v.right - v.left, v.height = v.bottom - v.top), v;
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
      } }, { key: "_onOff", value: function(s, p, f, v) {
        c.default.object(p) && !c.default.array(p) && (v = f, f = null);
        var h = s === "on" ? "add" : "remove", g = (0, fe.default)(p, f);
        for (var x in g) {
          x === "wheel" && (x = L.default.wheelEvent);
          for (var T = 0; T < g[x].length; T++) {
            var O = g[x][T];
            (0, Di.default)(x, this._actions) ? this.events[s](x, O) : c.default.string(this.target) ? this._scopeEvents["".concat(h, "Delegate")](this.target, this._context, x, O, v) : this._scopeEvents[h](this.target, x, O, v);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, f) {
        return this._onOff("on", s, p, f);
      } }, { key: "off", value: function(s, p, f) {
        return this._onOff("off", s, p, f);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var f in c.default.object(s) || (s = {}), this.options = (0, hn.default)(p.base), this._actions.methodDict) {
          var v = f, h = this._actions.methodDict[v];
          this.options[v] = {}, this.setPerAction(v, (0, U.default)((0, U.default)({}, p.perAction), p.actions[v])), this[h](s[v]);
        }
        for (var g in s)
          c.default.func(this[g]) && this[g](s[g]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], f = p.length - 1; f >= 0; f--) {
              var v = p[f], h = v.selector, g = v.context, x = v.listeners;
              h === this.target && g === this._context && p.splice(f, 1);
              for (var T = x.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, x[T][0], x[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && zd(o.prototype, a), n;
    }();
    Go.Interactable = Dd;
    var qo = {};
    function kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(kd, "kd");
    u(kd, "_n");
    function is(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(is, "is");
    u(is, "Pn"), Object.defineProperty(qo, "__esModule", { value: true }), qo.InteractableSet = void 0;
    var Rd = function() {
      function n(s) {
        var p = this;
        (function(f, v) {
          if (!(f instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), is(this, "list", []), is(this, "selectorMap", {}), is(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f) {
          var v = f.interactable, h = v.target, g = v._context, x = c.default.string(h) ? p.selectorMap[h] : h[p.scope.id], T = xe.findIndex(x, function(O) {
            return O.context === g;
          });
          x[T] && (x[T].context = null, x[T].interactable = null), x.splice(T, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, U.default)(p || {}, { actions: this.scope.actions });
        var f = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), v = { context: f._context, interactable: f };
        return this.scope.addDocument(f._doc), this.list.push(f), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(v)) : (f.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(v)), this.scope.fire("interactable:new", { target: s, options: p, interactable: f, win: this.scope._win }), f;
      } }, { key: "get", value: function(s, p) {
        var f = p && p.context || this.scope.document, v = c.default.string(s), h = v ? this.selectorMap[s] : s[this.scope.id];
        if (!h)
          return null;
        var g = xe.find(h, function(x) {
          return x.context === f && (v || x.interactable.inContext(s));
        });
        return g && g.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var f = 0; f < this.list.length; f++) {
          var v = this.list[f], h = void 0;
          if ((c.default.string(v.target) ? c.default.element(s) && R.matchesSelector(s, v.target) : s === v.target) && v.inContext(s) && (h = p(v)), h !== void 0)
            return h;
        }
      } }]) && kd(o.prototype, a), n;
    }();
    qo.InteractableSet = Rd;
    var Lo = {};
    function Nd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Nd, "Nd");
    u(Nd, "En");
    function os(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(os, "os");
    u(os, "Tn");
    function as(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, v = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            v = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (v)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Zl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Zl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(as, "as");
    u(as, "Mn");
    function Zl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Zl, "Zl");
    u(Zl, "jn"), Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var Gd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), os(this, "currentTarget", void 0), os(this, "originalEvent", void 0), os(this, "type", void 0), this.originalEvent = s, (0, kt.default)(this, s);
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
      } }]) && Nd(o.prototype, a), n;
    }();
    function ki(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(ki, "ki");
    u(ki, "In");
    var qd = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], f = { add: v, remove: h, addDelegate: function(T, O, N, q, D) {
        var $ = ki(D);
        if (!s[N]) {
          s[N] = [];
          for (var J = 0; J < p.length; J++) {
            var F = p[J];
            v(F, N, g), v(F, N, x, true);
          }
        }
        var re = s[N], le = xe.find(re, function(pe) {
          return pe.selector === T && pe.context === O;
        });
        le || (le = { selector: T, context: O, listeners: [] }, re.push(le)), le.listeners.push([q, $]);
      }, removeDelegate: function(T, O, N, q, D) {
        var $, J = ki(D), F = s[N], re = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === T && le.context === O) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = as(pe[Ee], 2), be = je[0], Ie = je[1], Xt = Ie.capture, qr = Ie.passive;
                if (be === q && Xt === J.capture && qr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), h(O, N, g), h(O, N, x, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: g, delegateUseCapture: x, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function v(T, O, N, q) {
        var D = ki(q), $ = xe.find(a, function(J) {
          return J.eventTarget === T;
        });
        $ || ($ = { eventTarget: T, events: {} }, a.push($)), $.events[O] || ($.events[O] = []), T.addEventListener && !xe.contains($.events[O], N) && (T.addEventListener(O, N, f.supportsOptions ? D : D.capture), $.events[O].push(N));
      }
      __name(v, "v");
      u(v, "s");
      function h(T, O, N, q) {
        var D = ki(q), $ = xe.findIndex(a, function(Ee) {
          return Ee.eventTarget === T;
        }), J = a[$];
        if (J && J.events)
          if (O !== "all") {
            var F = false, re = J.events[O];
            if (re) {
              if (N === "all") {
                for (var le = re.length - 1; le >= 0; le--)
                  h(T, O, re[le], D);
                return;
              }
              for (var pe = 0; pe < re.length; pe++)
                if (re[pe] === N) {
                  T.removeEventListener(O, N, f.supportsOptions ? D : D.capture), re.splice(pe, 1), re.length === 0 && (delete J.events[O], F = true);
                  break;
                }
            }
            F && !Object.keys(J.events).length && a.splice($, 1);
          } else
            for (O in J.events)
              J.events.hasOwnProperty(O) && h(T, O, "all");
      }
      __name(h, "h");
      u(h, "l");
      function g(T, O) {
        for (var N = ki(O), q = new Gd(T), D = s[T.type], $ = as(K.getEventTargets(T), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < D.length; F++) {
            var re = D[F], le = re.selector, pe = re.context;
            if (R.matchesSelector(J, le) && R.nodeContains(pe, $) && R.nodeContains(pe, J)) {
              var Ee = re.listeners;
              q.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = as(Ee[je], 2), Ie = be[0], Xt = be[1], qr = Xt.capture, ys = Xt.passive;
                qr === N.capture && ys === N.passive && Ie(q);
              }
            }
          }
          J = R.parentNode(J);
        }
      }
      __name(g, "g");
      u(g, "u");
      function x(T) {
        return g(T, true);
      }
      __name(x, "x");
      return u(x, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return f.supportsOptions = true;
      }, get passive() {
        return f.supportsPassive = true;
      } }), n.events = f, f;
    } };
    Lo.default = qd;
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Bo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Bo.methodOrder.length; o++) {
        var a;
        a = Bo.methodOrder[o];
        var s = Bo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, p = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var f = 0; f < p.interactions.list.length; f++) {
        var v = p.interactions.list[f], h = s;
        if (v.simulation && v.simulation.allowResume && v.pointerType === o)
          for (; h; ) {
            if (h === v.element)
              return v;
            h = R.parentNode(h);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, f = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var v = 0; v < f.interactions.list.length; v++) {
        var h = f.interactions.list[v];
        if (h.pointerType === s) {
          if (h.simulation && !Jl(h, a))
            continue;
          if (h.interacting())
            return h;
          o || (o = h);
        }
      }
      if (o)
        return o;
      for (var g = 0; g < f.interactions.list.length; g++) {
        var x = f.interactions.list[g];
        if (!(x.pointerType !== s || /down/i.test(p) && x.simulation))
          return x;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (Jl(p, o))
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
    function Jl(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(Jl, "Jl");
    u(Jl, "zn");
    var Ld = Bo;
    jo.default = Ld;
    var Ho = {};
    function Kl(n) {
      return (Kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Kl, "Kl");
    u(Kl, "Xn");
    function Ql(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, v = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            v = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (v)
                throw h;
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
    __name(Ql, "Ql");
    u(Ql, "Yn");
    function eu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(eu, "eu");
    u(eu, "Bn");
    function jd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(jd, "jd");
    u(jd, "Wn");
    function Bd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Bd, "Bd");
    u(Bd, "Ln");
    function tu(n, o) {
      return (tu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(tu, "tu");
    u(tu, "Un");
    function Hd(n, o) {
      return !o || Kl(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Hd, "Hd");
    u(Hd, "Vn");
    function ss(n) {
      return (ss = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ss, "ss");
    u(ss, "Nn"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var ls = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function ru(n, o) {
      return function(a) {
        var s = o.interactions.list, p = K.getPointerType(a), f = Ql(K.getEventTargets(a), 2), v = f[0], h = f[1], g = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var x = 0; x < a.changedTouches.length; x++) {
            var T = a.changedTouches[x], O = { pointer: T, pointerId: K.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: v, curEventTarget: h, scope: o }, N = nu(O);
            g.push([O.pointer, O.eventTarget, O.curEventTarget, N]);
          }
        } else {
          var q = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var D = 0; D < s.length && !q; D++)
              q = s[D].pointerType !== "mouse" && s[D].pointerIsDown;
            q = q || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!q) {
            var $ = { pointer: a, pointerId: K.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: h, eventTarget: v, scope: o }, J = nu($);
            g.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < g.length; F++) {
          var re = Ql(g[F], 4), le = re[0], pe = re[1], Ee = re[2];
          re[3][n](le, a, pe, Ee);
        }
      };
    }
    __name(ru, "ru");
    u(ru, "$n");
    function nu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: jo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(nu, "nu");
    u(nu, "Gn");
    function us(n, o) {
      var a = n.doc, s = n.scope, p = n.options, f = s.interactions.docEvents, v = s.events, h = v[o];
      for (var g in s.browser.isIOS && !p.events && (p.events = { passive: false }), v.delegatedEvents)
        h(a, g, v.delegateListener), h(a, g, v.delegateUseCapture, true);
      for (var x = p && p.events, T = 0; T < f.length; T++) {
        var O = f[T];
        h(a, O.type, O.listener, x);
      }
    }
    __name(us, "us");
    u(us, "Hn");
    var $d = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ls.length; a++) {
        var s = ls[a];
        o[s] = ru(s, n);
      }
      var p, f = L.default.pEventTypes;
      function v() {
        for (var h = 0; h < n.interactions.list.length; h++) {
          var g = n.interactions.list[h];
          if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting)
            for (var x = function() {
              var O = g.pointers[T];
              n.documents.some(function(N) {
                var q = N.doc;
                return (0, R.nodeContains)(q, O.downTarget);
              }) || g.removePointer(O.pointer, O.event);
            }, T = 0; T < g.pointers.length; T++)
              x();
        }
      }
      __name(v, "v");
      u(v, "a"), (p = S.default.PointerEvent ? [{ type: f.down, listener: v }, { type: f.down, listener: o.pointerDown }, { type: f.move, listener: o.pointerMove }, { type: f.up, listener: o.pointerUp }, { type: f.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: v }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(h) {
        for (var g = 0; g < n.interactions.list.length; g++)
          n.interactions.list[g].documentBlur(h);
      } }), n.prevTouchTime = 0, n.Interaction = function(h) {
        (function(D, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          D.prototype = Object.create($ && $.prototype, { constructor: { value: D, writable: true, configurable: true } }), $ && tu(D, $);
        })(q, h);
        var g, x, T, O, N = (T = q, O = function() {
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
          var D, $ = ss(T);
          if (O) {
            var J = ss(this).constructor;
            D = Reflect.construct($, arguments, J);
          } else
            D = $.apply(this, arguments);
          return Hd(this, D);
        });
        function q() {
          return jd(this, q), N.apply(this, arguments);
        }
        __name(q, "q");
        return u(q, "s"), g = q, (x = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(D) {
          n.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && Bd(g.prototype, x), q;
      }(It.default), n.interactions = { list: [], new: function(h) {
        h.scopeFire = function(x, T) {
          return n.fire(x, T);
        };
        var g = new n.Interaction(h);
        return n.interactions.list.push(g), g;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Xn.default);
    }, listeners: { "scope:add-document": function(n) {
      return us(n, "add");
    }, "scope:remove-document": function(n) {
      return us(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: us, doOnInteractions: ru, methodNames: ls };
    Ho.default = $d;
    var Ri = {};
    function iu(n) {
      return (iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(iu, "iu");
    u(iu, "Jn");
    function cs(n, o, a) {
      return (cs = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p, f) {
        var v = function(g, x) {
          for (; !Object.prototype.hasOwnProperty.call(g, x) && (g = Zn(g)) !== null; )
            ;
          return g;
        }(s, p);
        if (v) {
          var h = Object.getOwnPropertyDescriptor(v, p);
          return h.get ? h.get.call(f) : h.value;
        }
      })(n, o, a || n);
    }
    __name(cs, "cs");
    u(cs, "Qn");
    function ou(n, o) {
      return (ou = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(ou, "ou");
    u(ou, "tr");
    function Fd(n, o) {
      return !o || iu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Fd, "Fd");
    u(Fd, "er");
    function Zn(n) {
      return (Zn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Zn, "Zn");
    u(Zn, "nr");
    function au(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(au, "au");
    u(au, "rr");
    function su(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(su, "su");
    u(su, "or");
    function lu(n, o, a) {
      return o && su(n.prototype, o), a && su(n, a), n;
    }
    __name(lu, "lu");
    u(lu, "ir");
    function mt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(mt, "mt");
    u(mt, "ar"), Object.defineProperty(Ri, "__esModule", { value: true }), Ri.initScope = uu, Ri.Scope = void 0;
    var Wd = function() {
      function n() {
        var o = this;
        au(this, n), mt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), mt(this, "isInitialized", false), mt(this, "listenerMaps", []), mt(this, "browser", L.default), mt(this, "defaults", (0, hn.default)(Mi.defaults)), mt(this, "Eventable", Ii.Eventable), mt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), mt(this, "interactStatic", (0, ns.createInteractStatic)(this)), mt(this, "InteractEvent", Pi.InteractEvent), mt(this, "Interactable", void 0), mt(this, "interactables", new qo.InteractableSet(this)), mt(this, "_win", void 0), mt(this, "document", void 0), mt(this, "window", void 0), mt(this, "documents", []), mt(this, "_plugins", { list: [], map: {} }), mt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(g, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function");
            g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), x && ou(g, x);
          })(h, s);
          var p, f, v = (p = h, f = function() {
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
            var g, x = Zn(p);
            if (f) {
              var T = Zn(this).constructor;
              g = Reflect.construct(x, arguments, T);
            } else
              g = x.apply(this, arguments);
            return Fd(this, g);
          });
          function h() {
            return au(this, h), v.apply(this, arguments);
          }
          __name(h, "h");
          return u(h, "i"), lu(h, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(g) {
            return cs(Zn(h.prototype), "set", this).call(this, g), a.fire("interactable:set", { options: g, interactable: this }), this;
          } }, { key: "unset", value: function() {
            cs(Zn(h.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), h;
        }(Go.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), lu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : uu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, f = o.before.reduce(function(h, g) {
            return h[g] = true, h[cu(g)] = true, h;
          }, {}); s < p; s++) {
            var v = this.listenerMaps[s].id;
            if (f[v] || f[cu(v)])
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
    function uu(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), S.default.init(o), L.default.init(o), Gt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Ho.default), n.usePlugin(Lo.default), n;
    }
    __name(uu, "uu");
    u(uu, "lr");
    function cu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(cu, "cu");
    u(cu, "ur"), Ri.Scope = Wd;
    var yt = {};
    Object.defineProperty(yt, "__esModule", { value: true }), yt.default = void 0;
    var pu = new Ri.Scope(), Ud = pu.interactStatic;
    yt.default = Ud;
    var Vd = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    pu.init(Vd);
    var $o = {};
    Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0, $o.default = function() {
    };
    var Fo = {};
    Object.defineProperty(Fo, "__esModule", { value: true }), Fo.default = void 0, Fo.default = function() {
    };
    var Wo = {};
    function du(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, v = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            v = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (v)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return fu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? fu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(du, "du");
    u(du, "yr");
    function fu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(fu, "fu");
    u(fu, "mr"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0, Wo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = du(s, 2), f = p[0], v = p[1];
        return f in n || v in n;
      }), a = u(function(s, p) {
        for (var f = n.range, v = n.limits, h = v === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : v, g = n.offset, x = g === void 0 ? { x: 0, y: 0 } : g, T = { range: f, grid: n, x: null, y: null }, O = 0; O < o.length; O++) {
          var N = du(o[O], 2), q = N[0], D = N[1], $ = Math.round((s - x.x) / n[q]), J = Math.round((p - x.y) / n[D]);
          T[q] = Math.max(h.left, Math.min(h.right, $ * n[q] + x.x)), T[D] = Math.max(h.top, Math.min(h.bottom, J * n[D] + x.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Ni = {};
    Object.defineProperty(Ni, "__esModule", { value: true }), Object.defineProperty(Ni, "edgeTarget", { enumerable: true, get: function() {
      return $o.default;
    } }), Object.defineProperty(Ni, "elements", { enumerable: true, get: function() {
      return Fo.default;
    } }), Object.defineProperty(Ni, "grid", { enumerable: true, get: function() {
      return Wo.default;
    } });
    var Uo = {};
    Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var Xd = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, Ni), o.createSnapGrid = o.snappers.grid;
    } };
    Uo.default = Xd;
    var Jn = {};
    function hu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(hu, "hu");
    u(hu, "Pr");
    function ps(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? hu(Object(a), true).forEach(function(s) {
          Yd(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : hu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(ps, "ps");
    u(ps, "Or");
    function Yd(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Yd, "Yd");
    u(Yd, "Sr"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.aspectRatio = Jn.default = void 0;
    var mu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, f = o.options.ratio, v = o.options, h = v.equalDelta, g = v.modifiers;
      f === "preserve" && (f = a.width / a.height), o.startCoords = (0, U.default)({}, p), o.startRect = (0, U.default)({}, a), o.ratio = f, o.equalDelta = h;
      var x = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (x.left ? 1 : -1) * (x.top ? 1 : -1);
      else {
        var T = o.xIsPrimaryAxis ? x.top : x.left;
        o.edgeSign = T ? -1 : 1;
      }
      if ((0, U.default)(n.edges, x), g && g.length) {
        var O = new mn.default(n.interaction);
        O.copyFrom(n.interaction.modification), O.prepareStates(g), o.subModification = O, O.startAll(ps({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, U.default)({}, s), f = o.equalDelta ? Zd : Jd;
      if (f(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var v = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, v, { x: s.x - p.x, y: s.y - p.y });
      var h = o.subModification.setAll(ps(ps({}, n), {}, { rect: v, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: v })), g = h.delta;
      return h.changed && (f(o, Math.abs(g.x) > Math.abs(g.y), h.coords, h.rect), (0, U.default)(s, h.coords)), h.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Zd(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p : a.x = s.x + (a.y - s.y) * p;
    }
    __name(Zd, "Zd");
    u(Zd, "Tr");
    function Jd(n, o, a, s) {
      var p = n.startRect, f = n.startCoords, v = n.ratio, h = n.edgeSign;
      if (o) {
        var g = s.width / v;
        a.y = f.y + (g - p.height) * h;
      } else {
        var x = s.height * v;
        a.x = f.x + (x - p.width) * h;
      }
    }
    __name(Jd, "Jd");
    u(Jd, "Mr"), Jn.aspectRatio = mu;
    var Kd = (0, ht.makeModifier)(mu, "aspectRatio");
    Jn.default = Kd;
    var bn = {};
    Object.defineProperty(bn, "__esModule", { value: true }), bn.default = void 0;
    var vu = u(function() {
    }, "Ir");
    vu._defaults = {};
    var Qd = vu;
    bn.default = Qd;
    var ds = {};
    Object.defineProperty(ds, "__esModule", { value: true }), Object.defineProperty(ds, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var Tt = {};
    function fs(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    __name(fs, "fs");
    u(fs, "zr"), Object.defineProperty(Tt, "__esModule", { value: true }), Tt.getRestrictionRect = fs, Tt.restrict = Tt.default = void 0;
    var gu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, f = n.pageCoords, v = s.options, h = v.elementRect, g = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, v.offset || {});
      if (o && h) {
        var x = fs(v.restriction, p, f);
        if (x) {
          var T = x.right - x.left - o.width, O = x.bottom - x.top - o.height;
          T < 0 && (g.left += T, g.right += T), O < 0 && (g.top += O, g.bottom += O);
        }
        g.left += a.left - o.width * h.left, g.top += a.top - o.height * h.top, g.right += a.right - o.width * (1 - h.right), g.bottom += a.bottom - o.height * (1 - h.bottom);
      }
      s.offset = g;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, f = s.offset, v = fs(p.restriction, a, o);
      if (v) {
        var h = ce.xywhToTlbr(v);
        o.x = Math.max(Math.min(h.right - f.right, o.x), h.left + f.left), o.y = Math.max(Math.min(h.bottom - f.bottom, o.y), h.top + f.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Tt.restrict = gu;
    var ef = (0, ht.makeModifier)(gu, "restrict");
    Tt.default = ef;
    var Tr = {};
    Object.defineProperty(Tr, "__esModule", { value: true }), Tr.restrictEdges = Tr.default = void 0;
    var bu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, yu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function xu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(xu, "xu");
    u(xu, "Wr");
    var wu = { noInner: bu, noOuter: yu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, f = p.options;
      if (f) {
        var v = (0, Tt.getRestrictionRect)(f.offset, a, a.coords.start.page);
        o = ce.rectToXY(v);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, f = p.offset, v = p.options;
      if (a) {
        var h = (0, U.default)({}, o), g = (0, Tt.getRestrictionRect)(v.inner, s, h) || {}, x = (0, Tt.getRestrictionRect)(v.outer, s, h) || {};
        xu(g, bu), xu(x, yu), a.top ? o.y = Math.min(Math.max(x.top + f.top, h.y), g.top + f.top) : a.bottom && (o.y = Math.max(Math.min(x.bottom + f.bottom, h.y), g.bottom + f.bottom)), a.left ? o.x = Math.min(Math.max(x.left + f.left, h.x), g.left + f.left) : a.right && (o.x = Math.max(Math.min(x.right + f.right, h.x), g.right + f.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Tr.restrictEdges = wu;
    var tf = (0, ht.makeModifier)(wu, "restrictEdges");
    Tr.default = tf;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: true }), Kn.restrictRect = Kn.default = void 0;
    var rf = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Tt.restrict.defaults), Eu = { start: Tt.restrict.start, set: Tt.restrict.set, defaults: rf };
    Kn.restrictRect = Eu;
    var nf = (0, ht.makeModifier)(Eu, "restrictRect");
    Kn.default = nf;
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.restrictSize = Qn.default = void 0;
    var of = { width: -1 / 0, height: -1 / 0 }, af = { width: 1 / 0, height: 1 / 0 }, Su = { start: function(n) {
      return Tr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, f = a.options;
      if (p) {
        var v = ce.tlbrToXywh((0, Tt.getRestrictionRect)(f.min, o, n.coords)) || of, h = ce.tlbrToXywh((0, Tt.getRestrictionRect)(f.max, o, n.coords)) || af;
        a.options = { endOnly: f.endOnly, inner: (0, U.default)({}, Tr.restrictEdges.noInner), outer: (0, U.default)({}, Tr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - v.height, a.options.outer.top = s.bottom - h.height) : p.bottom && (a.options.inner.bottom = s.top + v.height, a.options.outer.bottom = s.top + h.height), p.left ? (a.options.inner.left = s.right - v.width, a.options.outer.left = s.right - h.width) : p.right && (a.options.inner.right = s.left + v.width, a.options.outer.right = s.left + h.width), Tr.restrictEdges.set(n), a.options = f;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Qn.restrictSize = Su;
    var sf = (0, ht.makeModifier)(Su, "restrictSize");
    Qn.default = sf;
    var hs = {};
    Object.defineProperty(hs, "__esModule", { value: true }), Object.defineProperty(hs, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.snap = Jr.default = void 0;
    var Tu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, f = n.rect, v = n.state, h = n.startOffset, g = v.options, x = g.offsetWithOrigin ? function(N) {
        var q = N.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N.state.options.origin, null, null, [q])) || (0, qe.default)(N.interactable, q, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (g.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ce.resolveRectLike)(g.offset, s, p, [a]);
        (o = (0, ce.rectToXY)(T) || { x: 0, y: 0 }).x += x.x, o.y += x.y;
      }
      var O = g.relativePoints;
      v.offsets = f && O && O.length ? O.map(function(N, q) {
        return { index: q, relativePoint: N, x: h.left - f.width * N.x + o.x, y: h.top - f.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, f = s.offsets, v = (0, qe.default)(o.interactable, o.element, o.prepared.name), h = (0, U.default)({}, a), g = [];
      p.offsetWithOrigin || (h.x -= v.x, h.y -= v.y);
      for (var x = 0; x < f.length; x++)
        for (var T = f[x], O = h.x - T.x, N = h.y - T.y, q = 0, D = p.targets.length; q < D; q++) {
          var $, J = p.targets[q];
          ($ = c.default.func(J) ? J(O, N, o._proxy, T, q) : J) && g.push({ x: (c.default.number($.x) ? $.x : O) + T.x, y: (c.default.number($.y) ? $.y : N) + T.y, range: c.default.number($.range) ? $.range : p.range, source: J, index: q, offset: T });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < g.length; re++) {
        var le = g[re], pe = le.range, Ee = le.x - h.x, je = le.y - h.y, be = (0, Ke.default)(Ee, je), Ie = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (Ie = false), F.target && !(Ie ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = Ie, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Jr.snap = Tu;
    var lf = (0, ht.makeModifier)(Tu, "snap");
    Jr.default = lf;
    var Gr = {};
    function Cu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Cu, "Cu");
    u(Cu, "oo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var Ou = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Jr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, f = n.coords, v = p.options, h = p.offsets, g = { x: f.x - h[0].x, y: f.y - h[0].y };
      p.options = (0, U.default)({}, v), p.options.targets = [];
      for (var x = 0; x < (v.targets || []).length; x++) {
        var T = (v.targets || [])[x], O = void 0;
        if (O = c.default.func(T) ? T(g.x, g.y, s) : T) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var q = (o = p.targetFields[N], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, re) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var le = [], pe = true, Ee = false, je = void 0;
                try {
                  for (var be, Ie = F[Symbol.iterator](); !(pe = (be = Ie.next()).done) && (le.push(be.value), !re || le.length !== re); pe = true)
                    ;
                } catch (Xt) {
                  Ee = true, je = Xt;
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
            }(o, a) || function(F, re) {
              if (F) {
                if (typeof F == "string")
                  return Cu(F, re);
                var le = Object.prototype.toString.call(F).slice(8, -1);
                return le === "Object" && F.constructor && (le = F.constructor.name), le === "Map" || le === "Set" ? Array.from(F) : le === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le) ? Cu(F, re) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), D = q[0], $ = q[1];
            if (D in O || $ in O) {
              O.x = O[D], O.y = O[$];
              break;
            }
          }
          p.options.targets.push(O);
        }
      }
      var J = Jr.snap.set(n);
      return p.options = v, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = Ou;
    var uf = (0, ht.makeModifier)(Ou, "snapSize");
    Gr.default = uf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.snapEdges = ei.default = void 0;
    var Mu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, U.default)((0, hn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ei.snapEdges = Mu;
    var cf = (0, ht.makeModifier)(Mu, "snapEdges");
    ei.default = cf;
    var ms = {};
    Object.defineProperty(ms, "__esModule", { value: true }), Object.defineProperty(ms, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var vs = {};
    Object.defineProperty(vs, "__esModule", { value: true }), Object.defineProperty(vs, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.default = void 0;
    var pf = { aspectRatio: Jn.default, restrictEdges: Tr.default, restrict: Tt.default, restrictRect: Kn.default, restrictSize: Qn.default, snapEdges: ei.default, snap: Jr.default, snapSize: Gr.default, spring: ms.default, avoid: ds.default, transform: vs.default, rubberband: hs.default };
    ti.default = pf;
    var Vo = {};
    Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var df = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ht.default), n.usePlugin(Uo.default), o.modifiers = ti.default, ti.default) {
        var s = ti.default[a], p = s._defaults, f = s._methods;
        p._methods = f, n.defaults.perAction[a] = p;
      }
    } };
    Vo.default = df;
    var yn = {};
    function Pu(n) {
      return (Pu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Pu, "Pu");
    u(Pu, "mo");
    function ff(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(ff, "ff");
    u(ff, "bo");
    function _u(n, o) {
      return (_u = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(_u, "_u");
    u(_u, "xo");
    function hf(n, o) {
      return !o || Pu(o) !== "object" && typeof o != "function" ? zt(n) : o;
    }
    __name(hf, "hf");
    u(hf, "wo");
    function zt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(zt, "zt");
    u(zt, "_o");
    function gs(n) {
      return (gs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(gs, "gs");
    u(gs, "Po");
    function br(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(br, "br");
    u(br, "Oo"), Object.defineProperty(yn, "__esModule", { value: true }), yn.PointerEvent = yn.default = void 0;
    var mf = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && _u(h, g);
      })(v, n);
      var o, a, s, p, f = (s = v, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, g = gs(s);
        if (p) {
          var x = gs(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return hf(this, h);
      });
      function v(h, g, x, T, O, N) {
        var q;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, v), br(zt(q = f.call(this, O)), "type", void 0), br(zt(q), "originalEvent", void 0), br(zt(q), "pointerId", void 0), br(zt(q), "pointerType", void 0), br(zt(q), "double", void 0), br(zt(q), "pageX", void 0), br(zt(q), "pageY", void 0), br(zt(q), "clientX", void 0), br(zt(q), "clientY", void 0), br(zt(q), "dt", void 0), br(zt(q), "eventable", void 0), K.pointerExtend(zt(q), x), x !== g && K.pointerExtend(zt(q), g), q.timeStamp = N, q.originalEvent = x, q.type = h, q.pointerId = K.getPointerId(g), q.pointerType = K.getPointerType(g), q.target = T, q.currentTarget = null, h === "tap") {
          var D = O.getPointerIndex(g);
          q.dt = q.timeStamp - O.pointers[D].downTime;
          var $ = q.timeStamp - O.tapTime;
          q.double = !!(O.prevTap && O.prevTap.type !== "doubletap" && O.prevTap.target === q.target && $ < 500);
        } else
          h === "doubletap" && (q.dt = g.timeStamp - O.tapTime);
        return q;
      }
      __name(v, "v");
      return u(v, "a"), o = v, (a = [{ key: "_subtractOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX -= g, this.pageY -= x, this.clientX -= g, this.clientY -= x, this;
      } }, { key: "_addOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX += g, this.pageY += x, this.clientX += g, this.clientY += x, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && ff(o.prototype, a), v;
    }(Rt.BaseEvent);
    yn.PointerEvent = yn.default = mf;
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: true }), Gi.default = void 0;
    var Xo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Xo, n.defaults.actions.pointerEvents = Xo.defaults, (0, U.default)(n.actions.phaselessTypes, Xo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && bs(n), Kr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, f = a.pointer, v = a.event, h = a.eventTarget, g = a.pointerIndex, x = p.pointers[g].hold, T = R.getPath(h), O = { interaction: p, pointer: f, event: v, eventTarget: h, type: "hold", targets: [], path: T, node: null }, N = 0; N < T.length; N++) {
          var q = T[N];
          O.node = q, s.fire("pointerEvents:collect-targets", O);
        }
        if (O.targets.length) {
          for (var D = 1 / 0, $ = 0; $ < O.targets.length; $++) {
            var J = O.targets[$].eventable.options.holdDuration;
            J < D && (D = J);
          }
          x.duration = D, x.timeout = setTimeout(function() {
            Kr({ interaction: p, eventTarget: h, pointer: f, event: v, type: "hold" }, s);
          }, D);
        }
      })(n, o), Kr(n, o);
    }, "interactions:up": function(n, o) {
      bs(n), Kr(n, o), function(a, s) {
        var p = a.interaction, f = a.pointer, v = a.event, h = a.eventTarget;
        p.pointerWasMoved || Kr({ interaction: p, eventTarget: h, pointer: f, event: v, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      bs(n), Kr(n, o);
    } }, PointerEvent: yn.PointerEvent, fire: Kr, collectEventTargets: Au, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Kr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, v = n.type, h = n.targets, g = h === void 0 ? Au(n, o) : h, x = new yn.PointerEvent(v, s, p, f, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: x });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: f, targets: g, type: v, pointerEvent: x }, O = 0; O < g.length; O++) {
        var N = g[O];
        for (var q in N.props || {})
          x[q] = N.props[q];
        var D = (0, qe.default)(N.eventable, N.node);
        if (x._subtractOrigin(D), x.eventable = N.eventable, x.currentTarget = N.node, N.eventable.fire(x), x._addOrigin(D), x.immediatePropagationStopped || x.propagationStopped && O + 1 < g.length && g[O + 1].node !== x.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), v === "tap") {
        var $ = x.double ? Kr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "doubletap" }, o) : x;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return x;
    }
    __name(Kr, "Kr");
    u(Kr, "Mo");
    function Au(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, v = n.type, h = a.getPointerIndex(s), g = a.pointers[h];
      if (v === "tap" && (a.pointerWasMoved || !g || g.downTarget !== f))
        return [];
      for (var x = R.getPath(f), T = { interaction: a, pointer: s, event: p, eventTarget: f, type: v, path: x, targets: [], node: null }, O = 0; O < x.length; O++) {
        var N = x[O];
        T.node = N, o.fire("pointerEvents:collect-targets", T);
      }
      return v === "hold" && (T.targets = T.targets.filter(function(q) {
        var D;
        return q.eventable.options.holdDuration === ((D = a.pointers[h]) == null ? void 0 : D.hold.duration);
      })), T.targets;
    }
    __name(Au, "Au");
    u(Au, "jo");
    function bs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(bs, "bs");
    u(bs, "ko");
    var vf = Xo;
    Gi.default = vf;
    var Yo = {};
    function gf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(gf, "gf");
    u(gf, "Ao"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0;
    var bf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Gi.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = gf, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, p = n.eventTarget, f = n.targets;
      if (s.type === "hold" && f.length) {
        var v = f[0].eventable.options.holdRepeatInterval;
        v <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: p, type: "hold", pointer: s, event: s }, o);
        }, v));
      }
    } }) };
    Yo.default = bf;
    var Zo = {};
    function yf(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    __name(yf, "yf");
    u(yf, "Co"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var xf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = yf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var f = a.call(this, s, p);
        return f === this && (this.events.options[s] = p), f;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, f = n.eventTarget;
      o.interactables.forEachMatch(s, function(v) {
        var h = v.events, g = h.options;
        h.types[p] && h.types[p].length && v.testIgnoreAllow(g, s, f) && a.push({ node: s, eventable: h, props: { interactable: v } });
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
    Zo.default = xf;
    var Jo = {};
    Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var wf = { id: "pointer-events", install: function(n) {
      n.usePlugin(Gi), n.usePlugin(Yo.default), n.usePlugin(Zo.default);
    } };
    Jo.default = wf;
    var qi = {};
    function Iu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, f) {
          for (var v = c.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], h = f.window.Promise, g = h ? [] : null, x = function() {
            var O = v[T], N = s.getRect(O);
            if (!N)
              return "break";
            var q = xe.find(f.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === O && re.prepared.name === p.name;
            }), D = void 0;
            if (q)
              q.move(), g && (D = q._reflowPromise || new h(function(re) {
                q._reflowResolve = re;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(N), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f.now() }, F = K.coordsToEvent(J);
              D = function(re, le, pe, Ee, je) {
                var be = re.interactions.new({ pointerType: "reflow" }), Ie = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), K.setZeroCoords(be.coords.delta), (0, Lt.copyAction)(be.prepared, Ee), be._doPhase(Ie);
                var Xt = re.window.Promise, qr = Xt ? new Xt(function(ys) {
                  be._reflowResolve = ys;
                }) : void 0;
                return be._reflowPromise = qr, be.start(Ee, le, pe), be._interacting ? (be.move(Ie), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), qr;
              }(f, s, O, p, F);
            }
            g && g.push(D);
          }, T = 0; T < v.length && x() !== "break"; T++)
            ;
          return g && h.all(g).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Iu, "Iu");
    u(Iu, "Wo"), Object.defineProperty(qi, "__esModule", { value: true }), qi.install = Iu, qi.default = void 0;
    var Ef = { id: "reflow", install: Iu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o.interactions.list, a));
    } } };
    qi.default = Ef;
    var Vt = { exports: {} };
    function zu(n) {
      return (zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(zu, "zu");
    u(zu, "Vo"), Object.defineProperty(Vt.exports, "__esModule", { value: true }), Vt.exports.default = void 0, yt.default.use(Xn.default), yt.default.use(gn.default), yt.default.use(Jo.default), yt.default.use(Yn.default), yt.default.use(Vo.default), yt.default.use(Io.default), yt.default.use(Rr.default), yt.default.use(Zr.default), yt.default.use(qi.default);
    var Sf = yt.default;
    if (Vt.exports.default = Sf, zu(Vt) === "object" && Vt)
      try {
        Vt.exports = yt.default;
      } catch (n) {
      }
    yt.default.default = yt.default, Vt = Vt.exports;
    var xn = { exports: {} };
    function Du(n) {
      return (Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Du, "Du");
    u(Du, "$o"), Object.defineProperty(xn.exports, "__esModule", { value: true }), xn.exports.default = void 0;
    var Tf = Vt.default;
    if (xn.exports.default = Tf, Du(xn) === "object" && xn)
      try {
        xn.exports = Vt.default;
      } catch (n) {
      }
    return Vt.default.default = Vt.default, xn.exports;
  });
});
var Qr = Ko(qu());
function Lu(r) {
  let e = en(r);
  return new Qr.default(e).valueOf() * Math.PI;
}
__name(Lu, "Lu");
u(Lu, "V");
function Bi(r) {
  let e = en(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(Bi, "Bi");
u(Bi, "X");
function ju(r, e) {
  return new Qr.default(en(r)).valueOf() < new Qr.default(en(e)).valueOf();
}
__name(ju, "ju");
u(ju, "W");
function Bu(r, e) {
  return new Qr.default(en(r)).valueOf() > new Qr.default(en(e)).valueOf();
}
__name(Bu, "Bu");
u(Bu, "H");
function Hu(r) {
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
__name(Hu, "Hu");
u(Hu, "Q");
function en(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(en, "en");
u(en, "l");
function $u(r) {
  try {
    let e = en(r), t = new Qr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name($u, "$u");
u($u, "J");
var If = Object.prototype.toString.call({});
var zf = "!recursion-limit!";
var Df = 10;
function Qe(r, e = Df) {
  return kf(r) || Rf(r, e) || Nf(r, e);
}
__name(Qe, "Qe");
u(Qe, "c");
function kf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(kf, "kf");
u(kf, "M");
function Rf(r, e) {
  if (e === 0)
    return zf;
  if (r instanceof Map)
    return Gf(r, e);
  if (r instanceof Set)
    return qf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Lf(r, e);
}
__name(Rf, "Rf");
u(Rf, "O");
function Nf(r, e) {
  let t = String(r);
  return t !== If ? t : jf(r, e);
}
__name(Nf, "Nf");
u(Nf, "F");
function Gf(r, e) {
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
__name(Gf, "Gf");
u(Gf, "G");
function qf(r, e) {
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
__name(qf, "qf");
u(qf, "R");
function Lf(r, e) {
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
__name(Lf, "Lf");
u(Lf, "N");
function jf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], d = Qe(l, e - 1), m = Qe(c, e - 1);
    t.push(`${d}: ${m}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(jf, "jf");
u(jf, "q");
var ws = 0;
var Ct = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), ws++;
    try {
      this.details = ws === 1 ? Qe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      ws--;
    }
  }
}, "d");
var Bf = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
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
    for (let e of Bf)
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
var ji = jt;
ji.CONSISTENT = new jt(false, 0, 2, ", "), ji.EXACT = new jt(true, 0, void 0, ", "), ji.MINIFIED = new jt(true, 0, void 0, ","), ji.SIMPLIFIED = new jt(true, 5e-4, 3, ", ");
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
    throw new Ct("Unrecognized value type.", { v: r });
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
    throw new Ct("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new Ct("Unrecognized value type.", { v: r });
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
    return r = r || ji.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var ra = "H";
var na = "X";
var ia = "Y";
var oa = "Z";
var aa = "P";
var sa = "T";
var la = "X^\xBD";
var ua = "Rx";
var ca = "Ry";
var pa = "Rz";
var Es = "Swap";
var Ss = "\u2022";
var Ts = "Bloch";
var Fu = "|0>";
var Wu = "|1>";
var da = "Measure";
var Cs = /* @__PURE__ */ new WeakSet();
function Ms(r) {
  Cs.add(r), r.shadowRoot && Ps(r.shadowRoot), As(r), _s(r.ownerDocument);
}
__name(Ms, "Ms");
u(Ms, "bind");
function Ps(r) {
  As(r), _s(r);
}
__name(Ps, "Ps");
u(Ps, "bindShadow");
var fa = /* @__PURE__ */ new WeakMap();
function _s(r = document) {
  if (fa.has(r))
    return fa.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Os(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let d of c.addedNodes)
          d instanceof Element && As(d);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, fa.delete(r), t.disconnect();
  } };
  return fa.set(r, i), i;
}
__name(_s, "_s");
u(_s, "listenForBind");
function As(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Os(e);
  r instanceof Element && r.hasAttribute("data-action") && Os(r);
}
__name(As, "As");
u(As, "bindElements");
function Hf(r) {
  let e = r.currentTarget;
  for (let t of Uu(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      Cs.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && Cs.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(Hf, "Hf");
u(Hf, "handleEvent");
function* Uu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(Uu, "Uu");
u(Uu, "bindings");
function Os(r) {
  for (let e of Uu(r))
    r.addEventListener(e.type, Hf);
}
__name(Os, "Os");
u(Os, "bindActions");
function Is(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(Is, "Is");
u(Is, "register");
function zs(r, e) {
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
__name(zs, "zs");
u(zs, "findTarget");
function Ds(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(Ds, "Ds");
u(Ds, "findTargets");
function ze(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return zs(this, e);
  } });
}
__name(ze, "ze");
u(ze, "target");
function Bt(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Ds(this, e);
  } });
}
__name(Bt, "Bt");
u(Bt, "targets");
function ks(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(ks, "ks");
u(ks, "autoShadowRoot");
var ha = /* @__PURE__ */ new WeakMap();
function G(r, e) {
  ha.has(r) || ha.set(r, []), ha.get(r).push(e);
}
__name(G, "G");
u(G, "attr");
function Rs(r, e) {
  e || (e = Vu(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = Xu(t), c = { configurable: true, get() {
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
__name(Rs, "Rs");
u(Rs, "initializeAttrs");
function Vu(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = ha.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(Vu, "Vu");
u(Vu, "getAttrNames");
function Xu(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Xu, "Xu");
u(Xu, "attrToAttributeName");
function Ns(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...Vu(r.prototype)].map(Xu).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Ns, "Ns");
u(Ns, "defineObservedAttributes");
var $f = /* @__PURE__ */ new WeakSet();
function Yu(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), $f.add(r), ks(r), Rs(r), Ms(r), e && e.call(r), r.shadowRoot && Ps(r.shadowRoot);
}
__name(Yu, "Yu");
u(Yu, "initializeInstance");
function Zu(r) {
  Ns(r), Is(r);
}
__name(Zu, "Zu");
u(Zu, "initializeClass");
function ne(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    Yu(this, e);
  }, Zu(r);
}
__name(ne, "ne");
u(ne, "controller");
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
  return u(e, "ActivateableMixinClass"), k([G], e.prototype, "active", 2), e;
}
__name(Oe, "Oe");
u(Oe, "ActivateableMixin");
var wn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function tn(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u(e, "AngleableMixinClass"), k([G], e.prototype, "angle", 2), k([G], e.prototype, "reducedAngle", 2), e;
}
__name(tn, "tn");
u(tn, "AngleableMixin");
var En = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
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
  return u(e, "DisableableMixinClass"), k([G], e.prototype, "disabled", 2), e;
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
function ri(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(ri, "ri");
u(ri, "__rest");
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
  } catch (m) {
    d = { error: m };
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
var rn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(rn || (rn = {}));
var Hi = Se.Start;
var ni = Se.Stop;
var ii = Se.Raise;
var Sn = Se.Send;
var ma = Se.Cancel;
var Ju = Se.NullEvent;
var Gs = Se.Assign;
var hv = Se.After;
var mv = Se.DoneState;
var va = Se.Log;
var Ku = Se.Init;
var $i = Se.Invoke;
var vv = Se.ErrorExecution;
var qs = Se.ErrorPlatform;
var Ls = Se.ErrorCustom;
var Fi = Se.Update;
var Qu = Se.Choose;
var ec = Se.Pure;
var ga = ".";
var js = {};
var ba = "xstate.guard";
var tc = "";
var Le = true;
var ya;
function Ui(r, e, t) {
  t === void 0 && (t = ga);
  var i = oi(r, t), l = oi(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Ui(i[c], l[c]) : false;
  });
}
__name(Ui, "Ui");
u(Ui, "matchesState");
function xa(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(xa, "xa");
u(xa, "getEventType");
function wa(r, e) {
  try {
    return Lr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(wa, "wa");
u(wa, "toStatePath");
function Ff(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Ff, "Ff");
u(Ff, "isStateLike");
function oi(r, e) {
  if (Ff(r))
    return r.value;
  if (Lr(r))
    return Wi(r);
  if (typeof r != "string")
    return r;
  var t = wa(r, e);
  return Wi(t);
}
__name(oi, "oi");
u(oi, "toStateValue");
function Wi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Wi, "Wi");
u(Wi, "pathToStateValue");
function ai(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(ai, "ai");
u(ai, "mapValues");
function Bs(r, e, t) {
  var i, l, c = {};
  try {
    for (var d = me(Object.keys(r)), m = d.next(); !m.done; m = d.next()) {
      var b = m.value, y = r[b];
      !t(y) || (c[b] = e(y, b, r));
    }
  } catch (w) {
    i = { error: w };
  } finally {
    try {
      m && !m.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(Bs, "Bs");
u(Bs, "mapFilterValues");
var rc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = me(r), d = c.next(); !d.done; d = c.next()) {
        var m = d.value;
        l = l[m];
      }
    } catch (b) {
      t = { error: b };
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
function nc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var d = me(r), m = d.next(); !m.done; m = d.next()) {
        var b = m.value;
        c = c[e][b];
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
    return c;
  };
}
__name(nc, "nc");
u(nc, "nestedPath");
function Vi(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Vi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Vi, "Vi");
u(Vi, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, De([], ve(r), false));
}
__name(Ne, "Ne");
u(Ne, "flatten");
function ic(r) {
  return Lr(r) ? r : [r];
}
__name(ic, "ic");
u(ic, "toArrayStrict");
function Ht(r) {
  return r === void 0 ? [] : ic(r);
}
__name(Ht, "Ht");
u(Ht, "toArray");
function Tn(r, e, t) {
  var i, l;
  if (Te(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var d = me(Object.keys(r)), m = d.next(); !m.done; m = d.next()) {
      var b = m.value, y = r[b];
      Te(y) ? c[b] = y(e, t.data) : c[b] = y;
    }
  } catch (w) {
    i = { error: w };
  } finally {
    try {
      m && !m.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(Tn, "Tn");
u(Tn, "mapContext");
function oc(r) {
  return /^(done|error)\./.test(r);
}
__name(oc, "oc");
u(oc, "isBuiltInEvent");
function Hs(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
__name(Hs, "Hs");
u(Hs, "isPromiseLike");
function ac(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(ac, "ac");
u(ac, "isBehavior");
function Ea(r, e) {
  var t, i, l = ve([[], []], 2), c = l[0], d = l[1];
  try {
    for (var m = me(r), b = m.next(); !b.done; b = m.next()) {
      var y = b.value;
      e(y) ? c.push(y) : d.push(y);
    }
  } catch (w) {
    t = { error: w };
  } finally {
    try {
      b && !b.done && (i = m.return) && i.call(m);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, d];
}
__name(Ea, "Ea");
u(Ea, "partition");
function sc(r, e) {
  return ai(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: sc(t, l) };
    }
  });
}
__name(sc, "sc");
u(sc, "updateHistoryStates");
function lc(r, e) {
  return { current: e, states: sc(r, e) };
}
__name(lc, "lc");
u(lc, "updateHistoryValue");
function $s(r, e, t, i) {
  Le || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, d) {
    var m, b, y = d.assignment, w = { state: i, action: d, _event: e }, P = {};
    if (Te(y))
      P = y(c, e.data, w);
    else
      try {
        for (var C = me(Object.keys(y)), _ = C.next(); !_.done; _ = C.next()) {
          var z = _.value, S = y[z];
          P[z] = Te(S) ? S(c, e.data, w) : S;
        }
      } catch (M) {
        m = { error: M };
      } finally {
        try {
          _ && !_.done && (b = C.return) && b.call(C);
        } finally {
          if (m)
            throw m.error;
        }
      }
    return Object.assign({}, c, P);
  }, r);
  return l;
}
__name($s, "$s");
u($s, "updateContext");
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
function Sa(r, e) {
  if (!!r)
    return ge(r) ? { type: ba, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: ba, name: r.name, predicate: r } : r;
}
__name(Sa, "Sa");
u(Sa, "toGuard");
function uc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(uc, "uc");
u(uc, "isObservable");
var Cr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Sv = (ya = {}, ya[Cr] = function() {
  return this;
}, ya[Symbol.observable] = function() {
  return this;
}, ya);
function Or(r) {
  return !!r && "__xstatenode" in r;
}
__name(Or, "Or");
u(Or, "isMachine");
function cc(r) {
  return !!r && typeof r.send == "function";
}
__name(cc, "cc");
u(cc, "isActor");
function Xi(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
__name(Xi, "Xi");
u(Xi, "toEventObject");
function et(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Xi(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(et, "et");
u(et, "toSCXMLEvent");
function Cn(r, e) {
  var t = ic(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Or(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
__name(Cn, "Cn");
u(Cn, "toTransitionConfigArray");
function pc(r) {
  if (!(r === void 0 || r === tc))
    return Ht(r);
}
__name(pc, "pc");
u(pc, "normalizeTarget");
function dc(r, e, t) {
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
__name(dc, "dc");
u(dc, "reportUnhandledExceptionOnInvocation");
function Ta(r, e, t, i, l) {
  var c = r.options.guards, d = { state: l, cond: e, _event: i };
  if (e.type === ba)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, d);
  var m = c == null ? void 0 : c[e.type];
  if (!m)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return m(t, i.data, d);
}
__name(Ta, "Ta");
u(Ta, "evaluateGuard");
function Ca(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(Ca, "Ca");
u(Ca, "toInvokeSource");
function Yi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Yi, "Yi");
u(Yi, "toObserver");
function Zi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Zi, "Zi");
u(Zi, "createInvokeId");
var On = et({ type: Ku });
function Oa(r, e) {
  return e && e[r] || void 0;
}
__name(Oa, "Oa");
u(Oa, "getActionFunction");
function si(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = Oa(r, e);
    Te(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Te(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = Oa(r.type, e);
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
__name(si, "si");
u(si, "toActionObject");
var Ji = u(function(r, e) {
  if (!r)
    return [];
  var t = Lr(r) ? r : [r];
  return t.map(function(i) {
    return si(i, e);
  });
}, "toActionObjects");
function Pa(r) {
  var e = si(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
__name(Pa, "Pa");
u(Pa, "toActivityDefinition");
function fc(r) {
  return ge(r) ? { type: ii, event: r } : Fs(r, { to: rn.Internal });
}
__name(fc, "fc");
u(fc, "raise");
function Wf(r) {
  return { type: ii, _event: et(r.event) };
}
__name(Wf, "Wf");
u(Wf, "resolveRaise");
function Fs(r, e) {
  return { to: e ? e.to : void 0, type: Sn, event: Te(r) ? r : Xi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : xa(r) };
}
__name(Fs, "Fs");
u(Fs, "send");
function Uf(r, e, t, i) {
  var l = { _event: t }, c = et(Te(r.event) ? r.event(e, t.data, l) : r.event), d;
  if (ge(r.delay)) {
    var m = i && i[r.delay];
    d = Te(m) ? m(e, t.data, l) : m;
  } else
    d = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var b = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: b, _event: c, event: c.data, delay: d });
}
__name(Uf, "Uf");
u(Uf, "resolveSend");
var Vf = u(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var hc = u(function(r) {
  return { type: ma, sendId: r };
}, "cancel");
function mc(r) {
  var e = Pa(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
__name(mc, "mc");
u(mc, "start");
function vc(r) {
  var e = Te(r) ? r : Pa(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
__name(vc, "vc");
u(vc, "stop");
function Xf(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
__name(Xf, "Xf");
u(Xf, "resolveStop");
function gc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
__name(gc, "gc");
u(gc, "after");
function Ki(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(Ki, "Ki");
u(Ki, "done");
function li(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(li, "li");
u(li, "doneInvoke");
function Mn(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(Mn, "Mn");
u(Mn, "error");
function Ma(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var d = ve(c ? [[], l] : Ea(l, function(C) {
    return C.type === Gs;
  }), 2), m = d[0], b = d[1], y = m.length ? $s(t, i, m, e) : t, w = c ? [t] : void 0, P = Ne(b.map(function(C) {
    var _;
    switch (C.type) {
      case ii:
        return Wf(C);
      case Sn:
        var z = Uf(C, y, i, r.options.delays);
        return Le || Ue(!ge(C.delay) || typeof z.delay == "number", "No delay reference for delay expression '".concat(C.delay, "' was found on machine '").concat(r.id, "'")), z;
      case va:
        return Vf(C, y, i);
      case Qu: {
        var S = C, M = (_ = S.conds.find(function(W) {
          var ie = Sa(W.cond, r.options.guards);
          return !ie || Ta(r, ie, y, i, e);
        })) === null || _ === void 0 ? void 0 : _.actions;
        if (!M)
          return [];
        var A = ve(Ma(r, e, y, i, Ji(Ht(M), r.options.actions), c), 2), I = A[0], L = A[1];
        return y = L, w == null || w.push(y), I;
      }
      case ec: {
        var M = C.get(y, i.data);
        if (!M)
          return [];
        var E = ve(Ma(r, e, y, i, Ji(Ht(M), r.options.actions), c), 2), B = E[0], R = E[1];
        return y = R, w == null || w.push(y), B;
      }
      case ni:
        return Xf(C, y, i);
      case Gs: {
        y = $s(y, i, [C], e), w == null || w.push(y);
        break;
      }
      default:
        var X = si(C, r.options.actions), V = X.exec;
        if (V && w) {
          var H = w.length - 1;
          X = Y(Y({}, X), { exec: function(W) {
            for (var ie = [], oe = 1; oe < arguments.length; oe++)
              ie[oe - 1] = arguments[oe];
            V.apply(void 0, De([w[H]], ve(ie), false));
          } });
        }
        return X;
    }
  }).filter(function(C) {
    return !!C;
  }));
  return [P, y];
}
__name(Ma, "Ma");
u(Ma, "resolveActions");
var bc = [];
var Pn = u(function(r, e) {
  bc.push(r);
  var t = e(r);
  return bc.pop(), t;
}, "provide");
function yc(r) {
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
__name(yc, "yc");
u(yc, "createNullActor");
function xc(r, e, t, i) {
  var l, c = Ca(r.src), d = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], m = r.data ? Tn(r.data, t, i) : void 0, b = d ? wc(d, r.id, m) : yc(r.id);
  return b.meta = r, b;
}
__name(xc, "xc");
u(xc, "createInvocableActor");
function wc(r, e, t) {
  var i = yc(e);
  if (i.deferred = true, Or(r)) {
    var l = i.state = Pn(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(wc, "wc");
u(wc, "createDeferredActor");
function Yf(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(Yf, "Yf");
u(Yf, "isActor");
function Ec(r) {
  return Yf(r) && "id" in r;
}
__name(Ec, "Ec");
u(Ec, "isSpawnedActor");
function Sc(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Cr] = function() {
    return this;
  }, e), r);
}
__name(Sc, "Sc");
u(Sc, "toActorRef");
var Qi = u(function(r) {
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
function Us(r) {
  var e = [r];
  return Qi(r) ? e : e.concat(Ne(_n(r).map(Us)));
}
__name(Us, "Us");
u(Us, "getAllStateNodes");
function An(r, e) {
  var t, i, l, c, d, m, b, y, w = new Set(r), P = Ws(w), C = new Set(e);
  try {
    for (var _ = me(C), z = _.next(); !z.done; z = _.next())
      for (var S = z.value, M = S.parent; M && !C.has(M); )
        C.add(M), M = M.parent;
  } catch (H) {
    t = { error: H };
  } finally {
    try {
      z && !z.done && (i = _.return) && i.call(_);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var A = Ws(C);
  try {
    for (var I = me(C), L = I.next(); !L.done; L = I.next()) {
      var S = L.value;
      if (S.type === "compound" && (!A.get(S) || !A.get(S).length))
        P.get(S) ? P.get(S).forEach(function(W) {
          return C.add(W);
        }) : S.initialStateNodes.forEach(function(W) {
          return C.add(W);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d = void 0, me(_n(S))), B = E.next(); !B.done; B = E.next()) {
            var R = B.value;
            C.has(R) || (C.add(R), P.get(R) ? P.get(R).forEach(function(W) {
              return C.add(W);
            }) : R.initialStateNodes.forEach(function(W) {
              return C.add(W);
            }));
          }
        } catch (W) {
          d = { error: W };
        } finally {
          try {
            B && !B.done && (m = E.return) && m.call(E);
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
    for (var X = me(C), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, M = S.parent; M && !C.has(M); )
        C.add(M), M = M.parent;
  } catch (H) {
    b = { error: H };
  } finally {
    try {
      V && !V.done && (y = X.return) && y.call(X);
    } finally {
      if (b)
        throw b.error;
    }
  }
  return C;
}
__name(An, "An");
u(An, "getConfiguration");
function Tc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (Qi(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = Tc(c, e);
  }), l;
}
__name(Tc, "Tc");
u(Tc, "getValueFromAdj");
function Ws(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = me(r), c = l.next(); !c.done; c = l.next()) {
      var d = c.value;
      i.has(d) || i.set(d, []), d.parent && (i.has(d.parent) || i.set(d.parent, []), i.get(d.parent).push(d));
    }
  } catch (m) {
    e = { error: m };
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
__name(Ws, "Ws");
u(Ws, "getAdjList");
function Cc(r, e) {
  var t = An([r], e);
  return Tc(r, Ws(t));
}
__name(Cc, "Cc");
u(Cc, "getValue");
function eo(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(eo, "eo");
u(eo, "has");
function Oc(r) {
  return De([], ve(new Set(Ne(De([], ve(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(Oc, "Oc");
u(Oc, "nextEvents");
function In(r, e) {
  return e.type === "compound" ? _n(e).some(function(t) {
    return t.type === "final" && eo(r, t);
  }) : e.type === "parallel" ? _n(e).every(function(t) {
    return In(r, t);
  }) : false;
}
__name(In, "In");
u(In, "isInFinalState");
function Mc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(Mc, "Mc");
u(Mc, "getMeta");
function Vs(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
__name(Vs, "Vs");
u(Vs, "getTagsFromConfiguration");
function Xs(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Xs(r[l], e[l]);
  });
}
__name(Xs, "Xs");
u(Xs, "stateValuesEqual");
function Pc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Pc, "Pc");
u(Pc, "isStateConfig");
function _c(r, e) {
  var t = r.exec, i = Y(Y({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(_c, "_c");
u(_c, "bindActionToState");
var yr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = js, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || js, this.meta = Mc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Oc(t.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = On;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = On;
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
    var i = ri(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Ui(e, this.value);
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
var Zf = { deferEvents: false };
var Ys = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, Zf), e);
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
var Zs = /* @__PURE__ */ new Map();
var Jf = 0;
var to = { bookId: function() {
  return "x:".concat(Jf++);
}, register: function(r, e) {
  return Zs.set(r, e), r;
}, get: function(r) {
  return Zs.get(r);
}, free: function(r) {
  Zs.delete(r);
} };
function _a() {
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
__name(_a, "_a");
u(_a, "getGlobal");
function Kf() {
  var r = _a();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(Kf, "Kf");
u(Kf, "getDevTools");
function Ac(r) {
  if (!!_a()) {
    var e = Kf();
    e && e.register(r);
  }
}
__name(Ac, "Ac");
u(Ac, "registerService");
function Ic(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, d = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var y = l.shift();
        t = r.transition(t, y, b), i.forEach(function(w) {
          return w.next(t);
        });
      }
      c = false;
    }
  }, "flush"), m = Sc({ id: e.id, send: function(y) {
    l.push(y), d();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, w, P) {
    var C = Yi(y, w, P);
    return i.add(C), C.next(t), { unsubscribe: function() {
      i.delete(C);
    } };
  } }), b = { parent: e.parent, self: m, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(b) : t, m;
}
__name(Ic, "Ic");
u(Ic, "spawnBehavior");
var Qf = { sync: false, autoForward: false };
var vt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(vt || (vt = {}));
var zc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = vt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(w, P) {
      if (Lr(w))
        return i.batch(w), i.state;
      var C = et(Xi(w, P));
      if (i.status === vt.Stopped)
        return Le || Ue(false, 'Event "'.concat(C.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(C.data))), i.state;
      if (i.status !== vt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(C.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(C.data)));
      return i.scheduler.schedule(function() {
        i.forward(C);
        var _ = i.nextState(C);
        i.update(_, C);
      }), i._state;
    }, this.sendTo = function(w, P) {
      var C = i.parent && (P === rn.Parent || i.parent.id === P), _ = C ? i.parent : ge(P) ? i.children.get(P) || to.get(P) : cc(P) ? P : void 0;
      if (!_) {
        if (!C)
          throw new Error("Unable to send event to child '".concat(P, "' from service '").concat(i.id, "'."));
        Le || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(w.type));
        return;
      }
      "machine" in _ ? _.send(Y(Y({}, w), { name: w.name === Ls ? "".concat(Mn(i.id)) : w.name, origin: i.sessionId })) : _.send(w.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c = l.clock, d = l.logger, m = l.parent, b = l.id, y = b !== void 0 ? b : e.id;
    this.id = y, this.logger = d, this.clock = c, this.parent = m, this.options = l, this.scheduler = new Ys({ deferEvents: this.options.deferEvents }), this.sessionId = to.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : Pn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || Ue(this.status !== vt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = me(e.actions), d = c.next(); !d.done; d = c.next()) {
        var m = d.value;
        this.exec(m, e, t);
      }
    } catch (b) {
      i = { error: b };
    } finally {
      try {
        d && !d.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, d, m, b, y, w, P = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      P.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var C = me(this.eventListeners), _ = C.next(); !_.done; _ = C.next()) {
          var z = _.value;
          z(e.event);
        }
      } catch (H) {
        i = { error: H };
      } finally {
        try {
          _ && !_.done && (l = C.return) && l.call(C);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var S = me(this.listeners), M = S.next(); !M.done; M = S.next()) {
        var z = M.value;
        z(e, e.event);
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
      for (var A = me(this.contextListeners), I = A.next(); !I.done; I = A.next()) {
        var L = I.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      m = { error: H };
    } finally {
      try {
        I && !I.done && (b = A.return) && b.call(A);
      } finally {
        if (m)
          throw m.error;
      }
    }
    var E = In(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === P.machine;
      }), R = B && B.doneData ? Tn(B.doneData, e.context, t) : void 0;
      try {
        for (var X = me(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var z = V.value;
          z(li(this.id, R));
        }
      } catch (H) {
        y = { error: H };
      } finally {
        try {
          V && !V.done && (w = X.return) && w.call(X);
        } finally {
          if (y)
            throw y.error;
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
    var c, d = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), d = e.complete.bind(e)), this.listeners.add(c), this.status !== vt.NotStarted && c(this.state), d && (this.status === vt.Stopped ? d() : this.onDone(d)), { unsubscribe: function() {
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
    if (this.status === vt.Running)
      return this;
    this.machine._init(), to.register(this.sessionId, this), this.initialized = true, this.status = vt.Running;
    var i = e === void 0 ? this.initialState : Pn(this, function() {
      return Pc(e) ? t.machine.resolveState(e) : t.machine.resolveState(yr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, On);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, d, m, b, y, w, P = this;
    try {
      for (var C = me(this.listeners), _ = C.next(); !_.done; _ = C.next()) {
        var z = _.value;
        this.listeners.delete(z);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        _ && !_.done && (t = C.return) && t.call(C);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var S = me(this.stopListeners), M = S.next(); !M.done; M = S.next()) {
        var z = M.value;
        z(), this.stopListeners.delete(z);
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
      for (var A = me(this.contextListeners), I = A.next(); !I.done; I = A.next()) {
        var z = I.value;
        this.contextListeners.delete(z);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        I && !I.done && (d = A.return) && d.call(A);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var L = me(this.doneListeners), E = L.next(); !E.done; E = L.next()) {
        var z = E.value;
        this.doneListeners.delete(z);
      }
    } catch (V) {
      m = { error: V };
    } finally {
      try {
        E && !E.done && (b = L.return) && b.call(L);
      } finally {
        if (m)
          throw m.error;
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
        R && !R.done && (w = B.return) && w.call(B);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new Ys({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = vt.Stopped, this._initialState = void 0, to.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === vt.NotStarted && this.options.deferEvents)
      Le || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== vt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, d = false, m = [], b = u(function(C) {
        var _ = et(C);
        t.forward(_), c = Pn(t, function() {
          return t.machine.transition(c, _);
        }), m.push.apply(m, De([], ve(c.actions.map(function(z) {
          return _c(z, c);
        })), false)), d = d || !!c.changed;
      }, "_loop_1");
      try {
        for (var y = me(e), w = y.next(); !w.done; w = y.next()) {
          var P = w.value;
          b(P);
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
      c.changed = d, c.actions = m, t.update(c, et(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = et(e);
    if (i.name.indexOf(qs) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(qs) === 0;
    }))
      throw i.data.data;
    var l = Pn(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = me(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var d = c.value, m = this.children.get(d);
        if (!m)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d, "'."));
        m.send(e);
      }
    } catch (b) {
      t = { error: b };
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
    var l = t.context, c = t._event, d = e.exec || Oa(e.type, i), m = Te(d) ? d : d ? d.exec : e.exec;
    if (m)
      try {
        return m(l, c.data, { action: e, state: this.state, _event: c });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case Sn:
        var b = e;
        if (typeof b.delay == "number") {
          this.defer(b);
          return;
        } else
          b.to ? this.sendTo(b._event, b.to) : this.send(b._event);
        break;
      case ma:
        this.cancel(e.sendId);
        break;
      case Hi: {
        if (this.status !== vt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Se.Invoke) {
          var w = Ca(y.src), P = this.machine.options.services ? this.machine.options.services[w.type] : void 0, C = y.id, _ = y.data;
          Le || Ue(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var z = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!P) {
            Le || Ue(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = _ ? Tn(_, l, c) : void 0;
          if (typeof P == "string")
            return;
          var M = Te(P) ? P(l, c.data, { data: S, src: w, meta: y.meta }) : P;
          if (!M)
            return;
          var A = void 0;
          Or(M) && (M = S ? M.withContext(S) : M, A = { autoForward: z }), this.spawn(M, C, A);
        } else
          this.spawnActivity(y);
        break;
      }
      case ni: {
        this.stopChild(e.activity.id);
        break;
      }
      case va:
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
    !t || (this.removeChild(e), Te(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (Hs(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Te(e))
      return this.spawnCallback(e, t);
    if (Ec(e))
      return this.spawnActor(e, t);
    if (uc(e))
      return this.spawnObservable(e, t);
    if (Or(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (ac(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c = Y(Y({}, Qf), t);
    c.sync && l.onTransition(function(m) {
      i.send(Fi, { state: m, id: l.id });
    });
    var d = l;
    return this.children.set(l.id, d), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(m) {
      i.removeChild(l.id), i.send(et(m, { origin: l.id }));
    }).start(), d;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Ic(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, d;
    e.then(function(b) {
      c || (d = b, l.removeChild(t), l.send(et(li(t, b), { origin: t })));
    }, function(b) {
      if (!c) {
        l.removeChild(t);
        var y = Mn(t, b);
        try {
          l.send(et(y, { origin: t }));
        } catch (w) {
          dc(b, w, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var m = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      var P = Yi(b, y, w), C = false;
      return e.then(function(_) {
        C || (P.next(_), !C && P.complete());
      }, function(_) {
        C || P.error(_);
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
    return this.children.set(t, m), m;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, d = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), b, y = u(function(C) {
      b = C, m.forEach(function(_) {
        return _(C);
      }), !c && l.send(et(C, { origin: t }));
    }, "receive"), w;
    try {
      w = e(y, function(C) {
        d.add(C);
      });
    } catch (C) {
      this.send(Mn(t, C));
    }
    if (Hs(w))
      return this.spawnPromise(w, t);
    var P = (i = { id: t, send: function(C) {
      return d.forEach(function(_) {
        return _(C);
      });
    }, subscribe: function(C) {
      var _ = Yi(C);
      return m.add(_.next), { unsubscribe: function() {
        m.delete(_.next);
      } };
    }, stop: function() {
      c = true, Te(w) && w();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return b;
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, P), P;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, d = e.subscribe(function(b) {
      c = b, l.send(et(b, { origin: t }));
    }, function(b) {
      l.removeChild(t), l.send(et(Mn(t, b), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(et(li(t), { origin: t }));
    }), m = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      return e.subscribe(b, y, w);
    }, stop: function() {
      return d.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Cr] = function() {
      return this;
    }, i);
    return this.children.set(t, m), m;
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
    var e = _a();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Ac(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Cr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === vt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = at, r;
}();
function at(r, e) {
  var t = new zc(r, e);
  return t;
}
__name(at, "at");
u(at, "interpret");
function eh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(eh, "eh");
u(eh, "toInvokeSource");
function ro(r) {
  return Y(Y({ type: $i }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ri(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: $i, src: eh(r.src) });
  } });
}
__name(ro, "ro");
u(ro, "toInvokeDefinition");
var pi = "";
var Js = "#";
var no = "*";
var ui = {};
var ci = u(function(r) {
  return r[0] === Js;
}, "isStateId");
var th = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var rh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Or(c.target));
  }), l = e === pi ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Dc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(th(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ga), this.id = this.config.id || De([this.machine.key], ve(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d = this.config.schema) !== null && d !== void 0 ? d : {}, this.description = this.config.description, Le || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ai(this.config.states, function(y, w) {
      var P, C = new r(y, {}, void 0, { parent: c, key: w });
      return Object.assign(c.idMap, Y((P = {}, P[C.id] = C, P), C.idMap)), C;
    }) : ui;
    var m = 0;
    function b(y) {
      var w, P;
      y.order = m++;
      try {
        for (var C = me(_n(y)), _ = C.next(); !_.done; _ = C.next()) {
          var z = _.value;
          b(z);
        }
      } catch (S) {
        w = { error: S };
      } finally {
        try {
          _ && !_.done && (P = C.return) && P.call(C);
        } finally {
          if (w)
            throw w.error;
        }
      }
    }
    __name(b, "b");
    u(b, "dfs"), b(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var w = y.event;
      return w === pi;
    }) : pi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ht(this.config.entry || this.config.onEntry).map(function(y) {
      return si(y);
    }), this.onExit = Ht(this.config.exit || this.config.onExit).map(function(y) {
      return si(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ht(this.config.invoke).map(function(y, w) {
      var P, C;
      if (Or(y)) {
        var _ = Zi(c.id, w);
        return c.machine.options.services = Y((P = {}, P[_] = y, P), c.machine.options.services), ro({ src: _, id: _ });
      } else if (ge(y.src)) {
        var _ = y.id || Zi(c.id, w);
        return ro(Y(Y({}, y), { id: _, src: y.src }));
      } else if (Or(y.src) || Te(y.src)) {
        var _ = y.id || Zi(c.id, w);
        return c.machine.options.services = Y((C = {}, C[_] = y.src, C), c.machine.options.services), ro(Y(Y({ id: _ }, y), { src: _ }));
      } else {
        var z = y.src;
        return ro(Y(Y({ id: Zi(c.id, w) }, y), { src: z }));
      }
    }), this.activities = Ht(this.config.activities).concat(this.invoke).map(function(y) {
      return Pa(y);
    }), this.transition = this.transition.bind(this), this.tags = Ht(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Us(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, d = i.guards, m = i.services, b = i.delays;
    return new r(this.config, { actions: Y(Y({}, l), e.actions), activities: Y(Y({}, c), e.activities), guards: Y(Y({}, d), e.guards), services: Y(Y({}, m), e.services), delays: Y(Y({}, b), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Te(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ai(this.states, function(e) {
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
    var t = e === pi, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === no;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, d) {
      var m = Te(c) ? "".concat(e.id, ":delay[").concat(d, "]") : c, b = gc(m, e.id);
      return e.onEntry.push(Fs(b, { delay: c })), e.onExit.push(hc(b)), b;
    }, "mutateEntryExit"), l = Lr(t) ? t.map(function(c, d) {
      var m = i(c.delay, d);
      return Y(Y({}, c), { event: m });
    }) : Ne(Object.keys(t).map(function(c, d) {
      var m = t[c], b = ge(m) ? { target: m } : m, y = isNaN(+c) ? c : +c, w = i(y, d);
      return Ht(b).map(function(P) {
        return Y(Y({}, P), { event: w, delay: y });
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
    var l = e instanceof yr ? e.value : oi(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var d = Object.keys(l), m = [this];
    return m.push.apply(m, De([], ve(Ne(d.map(function(b) {
      return i.getStateNode(b).getStateNodes(l[b]);
    }))), false)), m;
  }, r.prototype.handles = function(e) {
    var t = xa(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof yr ? e : yr.create(e), i = Array.from(An([], this.getStateNodes(t.value)));
    return new yr(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: In(i, this), tags: Vs(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), d = c._transition(e[l[0]], t, i);
    return !d || !d.transitions.length ? this.next(t, i) : d;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, d = {};
    try {
      for (var m = me(Object.keys(e)), b = m.next(); !b.done; b = m.next()) {
        var y = b.value, w = e[y];
        if (!!w) {
          var P = this.getStateNode(y), C = P._transition(w, t, i);
          C && (d[y] = C);
        }
      }
    } catch (I) {
      l = { error: I };
    } finally {
      try {
        b && !b.done && (c = m.return) && c.call(m);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var _ = Object.keys(d).map(function(I) {
      return d[I];
    }), z = Ne(_.map(function(I) {
      return I.transitions;
    })), S = _.some(function(I) {
      return I.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var M = Ne(_.map(function(I) {
      return I.entrySet;
    })), A = Ne(Object.keys(d).map(function(I) {
      return d[I].configuration;
    }));
    return { transitions: z, entrySet: M, exitSet: Ne(_.map(function(I) {
      return I.exitSet;
    })), configuration: A, source: t, actions: Ne(Object.keys(d).map(function(I) {
      return d[I].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, et(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, d = t.name, m = [], b = [], y;
    try {
      for (var w = me(this.getCandidates(d)), P = w.next(); !P.done; P = w.next()) {
        var C = P.value, _ = C.cond, z = C.in, S = e.context, M = z ? ge(z) && ci(z) ? e.matches(oi(this.getStateNodeById(z).path, this.delimiter)) : Ui(oi(z, this.delimiter), rc(this.path.slice(0, -2))(e.value)) : true, A = false;
        try {
          A = !_ || Ta(this.machine, _, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(_.name || _.type, "' in transition for event '").concat(d, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (A && M) {
          C.target !== void 0 && (b = C.target), m.push.apply(m, De([], ve(C.actions), false)), y = C;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        P && !P.done && (l = w.return) && l.call(w);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!b.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: m };
      var I = Ne(b.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), L = !!y.internal, E = L ? [] : Ne(I.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: L ? [] : [this], configuration: I, source: e, actions: m };
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
    var c, d, m, b, y = An([], l ? this.getStateNodes(l.value) : [this]), w = e.configuration.length ? An(y, e.configuration) : y;
    try {
      for (var P = me(w), C = P.next(); !C.done; C = P.next()) {
        var _ = C.value;
        eo(y, _) || e.entrySet.push(_);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        C && !C.done && (d = P.return) && d.call(P);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var z = me(y), S = z.next(); !S.done; S = z.next()) {
        var _ = S.value;
        (!eo(w, _) || eo(e.exitSet, _.parent)) && e.exitSet.push(_);
      }
    } catch (X) {
      m = { error: X };
    } finally {
      try {
        S && !S.done && (b = z.return) && b.call(z);
      } finally {
        if (m)
          throw m.error;
      }
    }
    var M = Ne(e.entrySet.map(function(X) {
      var V = [];
      if (X.type !== "final")
        return V;
      var H = X.parent;
      if (!H.parent)
        return V;
      V.push(Ki(X.id, X.doneData), Ki(H.id, X.doneData ? Tn(X.doneData, t, i) : void 0));
      var W = H.parent;
      return W.type === "parallel" && _n(W).every(function(ie) {
        return In(e.configuration, ie);
      }) && V.push(Ki(W.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var A = new Set(e.entrySet), I = new Set(e.exitSet), L = ve([Ne(Array.from(A).map(function(X) {
      return De(De([], ve(X.activities.map(function(V) {
        return mc(V);
      })), false), ve(X.onEntry), false);
    })).concat(M.map(fc)), Ne(Array.from(I).map(function(X) {
      return De(De([], ve(X.onExit), false), ve(X.activities.map(function(V) {
        return vc(V);
      })), false);
    }))], 2), E = L[0], B = L[1], R = Ji(B.concat(e.actions).concat(E), this.machine.options.actions);
    return R;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = et(t), c;
    if (e instanceof yr)
      c = i === void 0 ? e : this.resolveState(yr.from(e, i));
    else {
      var d = ge(e) ? this.resolve(Wi(this.getResolvedPath(e))) : this.resolve(e), m = i != null ? i : this.machine.context;
      c = this.resolveState(yr.from(d, m));
    }
    if (!Le && l.name === no)
      throw new Error("An event cannot have the wildcard type ('".concat(no, "')"));
    if (this.strict && !this.events.includes(l.name) && !oc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var b = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, y = An([], this.getStateNodes(c.value)), w = b.configuration.length ? An(y, b.configuration) : y;
    return b.configuration = De([], ve(w), false), this.resolveTransition(b, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], ve(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, d, m = this;
    l === void 0 && (l = On);
    var b = e.configuration, y = !t || e.transitions.length > 0, w = y ? Cc(this.machine, b) : void 0, P = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, C = this.getActions(e, i, l, t), _ = t ? Y({}, t.activities) : {};
    try {
      for (var z = me(C), S = z.next(); !S.done; S = z.next()) {
        var M = S.value;
        M.type === Hi ? _[M.activity.id || M.activity.type] = M : M.type === ni && (_[M.activity.id || M.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        S && !S.done && (d = z.return) && d.call(z);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var A = ve(Ma(this, t, i, l, C, this.machine.config.preserveActionOrder), 2), I = A[0], L = A[1], E = ve(Ea(I, function(fe) {
      return fe.type === ii || fe.type === Sn && fe.to === rn.Internal;
    }), 2), B = E[0], R = E[1], X = I.filter(function(fe) {
      var Ye;
      return fe.type === Hi && ((Ye = fe.activity) === null || Ye === void 0 ? void 0 : Ye.type) === $i;
    }), V = X.reduce(function(fe, Ye) {
      return fe[Ye.activity.id] = xc(Ye.activity, m.machine, L, l), fe;
    }, t ? Y({}, t.children) : {}), H = y ? e.configuration : t ? t.configuration : [], W = In(H, this), ie = new yr({ value: w || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: w ? P ? lc(P, w) : void 0 : t ? t.historyValue : void 0, history: !w || e.source ? t : void 0, actions: w ? R : [], activities: w ? _ : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: W, tags: Vs(H), machine: this }), oe = i !== L;
    ie.changed = l.name === Fi || oe;
    var U = ie.history;
    U && delete U.history;
    var ce = !W && (this._transient || b.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ce || l.name === pi))
      return ie;
    var Re = ie;
    if (!W)
      for (ce && (Re = this.resolveRaisedTransition(Re, { type: Ju }, l)); B.length; ) {
        var We = B.shift();
        Re = this.resolveRaisedTransition(Re, We._event, l);
      }
    var qe = Re.changed || (U ? !!Re.actions.length || oe || typeof U.value != typeof Re.value || !Xs(Re.value, U.value) : void 0);
    return Re.changed = qe, Re.history = U, Re;
  }, r.prototype.getStateNode = function(e) {
    if (ci(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = ci(e) ? e.slice(Js.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && ci(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = wa(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || ui;
    switch (this.type) {
      case "parallel":
        return ai(this.initialStateValue, function(c, d) {
          return c ? i.getStateNode(d).resolve(e[d] || c) : ui;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? ai(e, function(c, d) {
          return c ? i.getStateNode(d).resolve(c) : ui;
        }) : this.initialStateValue || {};
      default:
        return e || ui;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (ci(e)) {
      var t = this.machine.idMap[e.slice(Js.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return wa(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = Bs(this.states, function(i) {
        return i.initialStateValue || ui;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = Qi(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
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
      ge(t.target) ? e = ci(t.target) ? Wi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (Qi(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Vi(this.initialStateValue);
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
      return { current: e || this.initialStateValue, states: Bs(this.states, function(t, i) {
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
      return l ? Ne(Vi(l).map(function(d) {
        return i.getFromRelativePath(d);
      })) : i.initialStateNodes;
    }
    var c = nc(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Vi(c).map(function(d) {
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
        for (var m = me(Object.keys(c)), b = m.next(); !b.done; b = m.next()) {
          var y = b.value, w = c[y];
          if (w.states)
            try {
              for (var P = (i = void 0, me(w.events)), C = P.next(); !C.done; C = P.next()) {
                var _ = C.value;
                d.add("".concat(_));
              }
            } catch (z) {
              i = { error: z };
            } finally {
              try {
                C && !C.done && (l = P.return) && l.call(P);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (z) {
        e = { error: z };
      } finally {
        try {
          b && !b.done && (t = m.return) && t.call(m);
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
          } catch (m) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(m.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = pc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(b) {
      return ge(b) && b[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, d = this.resolveTarget(i), m = Y(Y({}, e), { actions: Ji(Ht(e.actions)), cond: Sa(e.cond, c), target: d, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Y(Y({}, m), { target: m.target ? m.target.map(function(b) {
        return "#".concat(b.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return m;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, d = no, m = c[d], b = m === void 0 ? [] : m, y = ri(c, [typeof d == "symbol" ? d : d + ""]);
      l = Ne(Object.keys(y).map(function(I) {
        !Le && I === pi && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = Cn(I, y[I]);
        return Le || rh(i, I, L), L;
      }).concat(Cn(no, b)));
    }
    var w = this.config.always ? Cn("", this.config.always) : [], P = this.config.onDone ? Cn(String(Ki(this.id)), this.config.onDone) : [];
    Le || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var C = Ne(this.invoke.map(function(I) {
      var L = [];
      return I.onDone && L.push.apply(L, De([], ve(Cn(String(li(I.id)), I.onDone)), false)), I.onError && L.push.apply(L, De([], ve(Cn(String(Mn(I.id)), I.onError)), false)), L;
    })), _ = this.after, z = Ne(De(De(De(De([], ve(P), false), ve(C), false), ve(l), false), ve(w), false).map(function(I) {
      return Ht(I).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var S = me(_), M = S.next(); !M.done; M = S.next()) {
        var A = M.value;
        z.push(A);
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
    return z;
  }, r;
}();
function gt(r, e) {
  return new Dc(r, e);
}
__name(gt, "gt");
u(gt, "createMachine");
var io = Ko(Aa(), 1);
var Ia = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Qs = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
        let i = (0, io.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Ia(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), Qs(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
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
        (0, io.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Ia(this.dropzone), isOnPaletteDropzone: () => Qs(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Ia(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = at(this.draggableMachine).onTransition((i) => {
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
      return ee.notNull(i), !Qs(i) && !Ia(i) ? null : i;
    }
    set snapTargets(i) {
      (0, io.default)(this).draggable({ modifiers: [io.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
  return u(e, "DraggableMixinClass"), k([G], e.prototype, "operationX", 2), k([G], e.prototype, "operationY", 2), k([G], e.prototype, "grabbed", 2), k([G], e.prototype, "dragging", 2), k([G], e.prototype, "snapped", 2), k([G], e.prototype, "bit", 2), k([G], e.prototype, "debugDraggable", 2), e;
}
__name(Me, "Me");
u(Me, "DraggableMixin");
var zn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Rc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), k([G], e.prototype, "flag", 2), e;
}
__name(Rc, "Rc");
u(Rc, "FlaggableMixin");
var Fe = "top";
var tt = "bottom";
var Ze = "right";
var Ve = "left";
var za = "auto";
var nn = [Fe, tt, Ze, Ve];
var jr = "start";
var Dn = "end";
var Nc = "clippingParents";
var Da = "viewport";
var di = "popper";
var Gc = "reference";
var el = nn.reduce(function(r, e) {
  return r.concat([e + "-" + jr, e + "-" + Dn]);
}, []);
var ka = [].concat(nn, [za]).reduce(function(r, e) {
  return r.concat([e, e + "-" + jr, e + "-" + Dn]);
}, []);
var nh = "beforeRead";
var ih = "read";
var oh = "afterRead";
var ah = "beforeMain";
var sh = "main";
var lh = "afterMain";
var uh = "beforeWrite";
var ch = "write";
var ph = "afterWrite";
var qc = [nh, ih, oh, ah, sh, lh, uh, ch, ph];
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
function Mr(r) {
  var e = Xe(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Mr, "Mr");
u(Mr, "isElement");
function rt(r) {
  var e = Xe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(rt, "rt");
u(rt, "isHTMLElement");
function Ra(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Xe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Ra, "Ra");
u(Ra, "isShadowRoot");
function dh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !rt(c) || !st(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(d) {
      var m = l[d];
      m === false ? c.removeAttribute(d) : c.setAttribute(d, m === true ? "" : m);
    }));
  });
}
__name(dh, "dh");
u(dh, "applyStyles");
function fh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), m = d.reduce(function(b, y) {
        return b[y] = "", b;
      }, {});
      !rt(l) || !st(l) || (Object.assign(l.style, m), Object.keys(c).forEach(function(b) {
        l.removeAttribute(b);
      }));
    });
  };
}
__name(fh, "fh");
u(fh, "effect");
var oo = { name: "applyStyles", enabled: true, phase: "write", fn: dh, effect: fh, requires: ["computeStyles"] };
function lt(r) {
  return r.split("-")[0];
}
__name(lt, "lt");
u(lt, "getBasePlacement");
var xr = Math.max;
var kn = Math.min;
var Br = Math.round;
function Zt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (rt(r) && e) {
    var c = r.offsetHeight, d = r.offsetWidth;
    d > 0 && (i = Br(t.width) / d || 1), c > 0 && (l = Br(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Zt, "Zt");
u(Zt, "getBoundingClientRect");
function Rn(r) {
  var e = Zt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Rn, "Rn");
u(Rn, "getLayoutRect");
function ao(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Ra(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(ao, "ao");
u(ao, "contains");
function Ot(r) {
  return Xe(r).getComputedStyle(r);
}
__name(Ot, "Ot");
u(Ot, "getComputedStyle");
function tl(r) {
  return ["table", "td", "th"].indexOf(st(r)) >= 0;
}
__name(tl, "tl");
u(tl, "isTableElement");
function bt(r) {
  return ((Mr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(bt, "bt");
u(bt, "getDocumentElement");
function Hr(r) {
  return st(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ra(r) ? r.host : null) || bt(r);
}
__name(Hr, "Hr");
u(Hr, "getParentNode");
function Lc(r) {
  return !rt(r) || Ot(r).position === "fixed" ? null : r.offsetParent;
}
__name(Lc, "Lc");
u(Lc, "getTrueOffsetParent");
function hh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && rt(r)) {
    var i = Ot(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Hr(r); rt(l) && ["html", "body"].indexOf(st(l)) < 0; ) {
    var c = Ot(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(hh, "hh");
u(hh, "getContainingBlock");
function wr(r) {
  for (var e = Xe(r), t = Lc(r); t && tl(t) && Ot(t).position === "static"; )
    t = Lc(t);
  return t && (st(t) === "html" || st(t) === "body" && Ot(t).position === "static") ? e : t || hh(r) || e;
}
__name(wr, "wr");
u(wr, "getOffsetParent");
function Nn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Nn, "Nn");
u(Nn, "getMainAxisFromPlacement");
function Gn(r, e, t) {
  return xr(r, kn(e, t));
}
__name(Gn, "Gn");
u(Gn, "within");
function jc(r, e, t) {
  var i = Gn(r, e, t);
  return i > t ? t : i;
}
__name(jc, "jc");
u(jc, "withinMaxClamp");
function so() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(so, "so");
u(so, "getFreshSideObject");
function lo(r) {
  return Object.assign({}, so(), r);
}
__name(lo, "lo");
u(lo, "mergePaddingObject");
function uo(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(uo, "uo");
u(uo, "expandToHashMap");
var mh = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, lo(typeof e != "number" ? e : uo(e, nn));
}, "toPaddingObject");
function vh(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, m = lt(t.placement), b = Nn(m), y = [Ve, Ze].indexOf(m) >= 0, w = y ? "height" : "width";
  if (!(!c || !d)) {
    var P = mh(l.padding, t), C = Rn(c), _ = b === "y" ? Fe : Ve, z = b === "y" ? tt : Ze, S = t.rects.reference[w] + t.rects.reference[b] - d[b] - t.rects.popper[w], M = d[b] - t.rects.reference[b], A = wr(c), I = A ? b === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, L = S / 2 - M / 2, E = P[_], B = I - C[w] - P[z], R = I / 2 - C[w] / 2 + L, X = Gn(E, R, B), V = b;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - R, e);
  }
}
__name(vh, "vh");
u(vh, "arrow");
function gh(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !ao(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(gh, "gh");
u(gh, "effect");
var Bc = { name: "arrow", enabled: true, phase: "main", fn: vh, effect: gh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jt(r) {
  return r.split("-")[1];
}
__name(Jt, "Jt");
u(Jt, "getVariation");
var bh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Br(e * l) / l || 0, y: Br(t * l) / l || 0 };
}
__name(yh, "yh");
u(yh, "roundOffsetsByDPR");
function Hc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, d = r.offsets, m = r.position, b = r.gpuAcceleration, y = r.adaptive, w = r.roundOffsets, P = r.isFixed, C = d.x, _ = C === void 0 ? 0 : C, z = d.y, S = z === void 0 ? 0 : z, M = typeof w == "function" ? w({ x: _, y: S }) : { x: _, y: S };
  _ = M.x, S = M.y;
  var A = d.hasOwnProperty("x"), I = d.hasOwnProperty("y"), L = Ve, E = Fe, B = window;
  if (y) {
    var R = wr(t), X = "clientHeight", V = "clientWidth";
    if (R === Xe(t) && (R = bt(t), Ot(R).position !== "static" && m === "absolute" && (X = "scrollHeight", V = "scrollWidth")), R = R, l === Fe || (l === Ve || l === Ze) && c === Dn) {
      E = tt;
      var H = P && B.visualViewport ? B.visualViewport.height : R[X];
      S -= H - i.height, S *= b ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === tt) && c === Dn) {
      L = Ze;
      var W = P && B.visualViewport ? B.visualViewport.width : R[V];
      _ -= W - i.width, _ *= b ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: m }, y && bh), oe = w === true ? yh({ x: _, y: S }) : { x: _, y: S };
  if (_ = oe.x, S = oe.y, b) {
    var U;
    return Object.assign({}, ie, (U = {}, U[E] = I ? "0" : "", U[L] = A ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + S + "px)" : "translate3d(" + _ + "px, " + S + "px, 0)", U));
  }
  return Object.assign({}, ie, (e = {}, e[E] = I ? S + "px" : "", e[L] = A ? _ + "px" : "", e.transform = "", e));
}
__name(Hc, "Hc");
u(Hc, "mapToStyles");
function xh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, d = c === void 0 ? true : c, m = t.roundOffsets, b = m === void 0 ? true : m;
  if (false)
    var y;
  var w = { placement: lt(e.placement), variation: Jt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Hc(Object.assign({}, w, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d, roundOffsets: b })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Hc(Object.assign({}, w, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: b })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(xh, "xh");
u(xh, "computeStyles");
var $c = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: xh, data: {} };
var Na = { passive: true };
function wh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, d = i.resize, m = d === void 0 ? true : d, b = Xe(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && y.forEach(function(w) {
    w.addEventListener("scroll", t.update, Na);
  }), m && b.addEventListener("resize", t.update, Na), function() {
    c && y.forEach(function(w) {
      w.removeEventListener("scroll", t.update, Na);
    }), m && b.removeEventListener("resize", t.update, Na);
  };
}
__name(wh, "wh");
u(wh, "effect");
var Fc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: wh, data: {} };
var Eh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function fi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Eh[e];
  });
}
__name(fi, "fi");
u(fi, "getOppositePlacement");
var Sh = { start: "end", end: "start" };
function Ga(r) {
  return r.replace(/start|end/g, function(e) {
    return Sh[e];
  });
}
__name(Ga, "Ga");
u(Ga, "getOppositeVariationPlacement");
function qn(r) {
  var e = Xe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(qn, "qn");
u(qn, "getWindowScroll");
function Ln(r) {
  return Zt(bt(r)).left + qn(r).scrollLeft;
}
__name(Ln, "Ln");
u(Ln, "getWindowScrollBarX");
function rl(r) {
  var e = Xe(r), t = bt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, d = 0, m = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = i.offsetLeft, m = i.offsetTop)), { width: l, height: c, x: d + Ln(r), y: m };
}
__name(rl, "rl");
u(rl, "getViewportRect");
function nl(r) {
  var e, t = bt(r), i = qn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = xr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = xr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), m = -i.scrollLeft + Ln(r), b = -i.scrollTop;
  return Ot(l || t).direction === "rtl" && (m += xr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: m, y: b };
}
__name(nl, "nl");
u(nl, "getDocumentRect");
function jn(r) {
  var e = Ot(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(jn, "jn");
u(jn, "isScrollParent");
function qa(r) {
  return ["html", "body", "#document"].indexOf(st(r)) >= 0 ? r.ownerDocument.body : rt(r) && jn(r) ? r : qa(Hr(r));
}
__name(qa, "qa");
u(qa, "getScrollParent");
function on(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = qa(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Xe(i), d = l ? [c].concat(c.visualViewport || [], jn(i) ? i : []) : i, m = e.concat(d);
  return l ? m : m.concat(on(Hr(d)));
}
__name(on, "on");
u(on, "listScrollParents");
function hi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(hi, "hi");
u(hi, "rectToClientRect");
function Th(r) {
  var e = Zt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(Th, "Th");
u(Th, "getInnerBoundingClientRect");
function Wc(r, e) {
  return e === Da ? hi(rl(r)) : Mr(e) ? Th(e) : hi(nl(bt(r)));
}
__name(Wc, "Wc");
u(Wc, "getClientRectFromMixedType");
function Ch(r) {
  var e = on(Hr(r)), t = ["absolute", "fixed"].indexOf(Ot(r).position) >= 0, i = t && rt(r) ? wr(r) : r;
  return Mr(i) ? e.filter(function(l) {
    return Mr(l) && ao(l, i) && st(l) !== "body";
  }) : [];
}
__name(Ch, "Ch");
u(Ch, "getClippingParents");
function il(r, e, t) {
  var i = e === "clippingParents" ? Ch(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], d = l.reduce(function(m, b) {
    var y = Wc(r, b);
    return m.top = xr(y.top, m.top), m.right = kn(y.right, m.right), m.bottom = kn(y.bottom, m.bottom), m.left = xr(y.left, m.left), m;
  }, Wc(r, c));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
__name(il, "il");
u(il, "getClippingRect");
function co(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? lt(i) : null, c = i ? Jt(i) : null, d = e.x + e.width / 2 - t.width / 2, m = e.y + e.height / 2 - t.height / 2, b;
  switch (l) {
    case Fe:
      b = { x: d, y: e.y - t.height };
      break;
    case tt:
      b = { x: d, y: e.y + e.height };
      break;
    case Ze:
      b = { x: e.x + e.width, y: m };
      break;
    case Ve:
      b = { x: e.x - t.width, y: m };
      break;
    default:
      b = { x: e.x, y: e.y };
  }
  var y = l ? Nn(l) : null;
  if (y != null) {
    var w = y === "y" ? "height" : "width";
    switch (c) {
      case jr:
        b[y] = b[y] - (e[w] / 2 - t[w] / 2);
        break;
      case Dn:
        b[y] = b[y] + (e[w] / 2 - t[w] / 2);
        break;
      default:
    }
  }
  return b;
}
__name(co, "co");
u(co, "computeOffsets");
function Er(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, d = c === void 0 ? Nc : c, m = t.rootBoundary, b = m === void 0 ? Da : m, y = t.elementContext, w = y === void 0 ? di : y, P = t.altBoundary, C = P === void 0 ? false : P, _ = t.padding, z = _ === void 0 ? 0 : _, S = lo(typeof z != "number" ? z : uo(z, nn)), M = w === di ? Gc : di, A = r.rects.popper, I = r.elements[C ? M : w], L = il(Mr(I) ? I : I.contextElement || bt(r.elements.popper), d, b), E = Zt(r.elements.reference), B = co({ reference: E, element: A, strategy: "absolute", placement: l }), R = hi(Object.assign({}, A, B)), X = w === di ? R : E, V = { top: L.top - X.top + S.top, bottom: X.bottom - L.bottom + S.bottom, left: L.left - X.left + S.left, right: X.right - L.right + S.right }, H = r.modifiersData.offset;
  if (w === di && H) {
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
function ol(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, d = t.padding, m = t.flipVariations, b = t.allowedAutoPlacements, y = b === void 0 ? ka : b, w = Jt(i), P = w ? m ? el : el.filter(function(z) {
    return Jt(z) === w;
  }) : nn, C = P.filter(function(z) {
    return y.indexOf(z) >= 0;
  });
  C.length === 0 && (C = P);
  var _ = C.reduce(function(z, S) {
    return z[S] = Er(r, { placement: S, boundary: l, rootBoundary: c, padding: d })[lt(S)], z;
  }, {});
  return Object.keys(_).sort(function(z, S) {
    return _[z] - _[S];
  });
}
__name(ol, "ol");
u(ol, "computeAutoPlacement");
function Oh(r) {
  if (lt(r) === za)
    return [];
  var e = fi(r);
  return [Ga(r), e, Ga(e)];
}
__name(Oh, "Oh");
u(Oh, "getExpandedFallbackPlacements");
function Mh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, m = d === void 0 ? true : d, b = t.fallbackPlacements, y = t.padding, w = t.boundary, P = t.rootBoundary, C = t.altBoundary, _ = t.flipVariations, z = _ === void 0 ? true : _, S = t.allowedAutoPlacements, M = e.options.placement, A = lt(M), I = A === M, L = b || (I || !z ? [fi(M)] : Oh(M)), E = [M].concat(L).reduce(function(K, Et) {
      return K.concat(lt(Et) === za ? ol(e, { placement: Et, boundary: w, rootBoundary: P, padding: y, flipVariations: z, allowedAutoPlacements: S }) : Et);
    }, []), B = e.rects.reference, R = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, H = E[0], W = 0; W < E.length; W++) {
      var ie = E[W], oe = lt(ie), U = Jt(ie) === jr, ce = [Fe, tt].indexOf(oe) >= 0, Re = ce ? "width" : "height", We = Er(e, { placement: ie, boundary: w, rootBoundary: P, altBoundary: C, padding: y }), qe = ce ? U ? Ze : Ve : U ? tt : Fe;
      B[Re] > R[Re] && (qe = fi(qe));
      var fe = fi(qe), Ye = [];
      if (c && Ye.push(We[oe] <= 0), m && Ye.push(We[qe] <= 0, We[fe] <= 0), Ye.every(function(K) {
        return K;
      })) {
        H = ie, V = false;
        break;
      }
      X.set(ie, Ye);
    }
    if (V)
      for (var Ke = z ? 3 : 1, kt = u(function(Et) {
        var St = E.find(function(zr) {
          var Wt = X.get(zr);
          if (Wt)
            return Wt.slice(0, Et).every(function(hr) {
              return hr;
            });
        });
        if (St)
          return H = St, "break";
      }, "_loop"), Pt = Ke; Pt > 0; Pt--) {
        var Ir = kt(Pt);
        if (Ir === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
__name(Mh, "Mh");
u(Mh, "flip");
var Uc = { name: "flip", enabled: true, phase: "main", fn: Mh, requiresIfExists: ["offset"], data: { _skip: false } };
function Vc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(Vc, "Vc");
u(Vc, "getSideOffsets");
function Xc(r) {
  return [Fe, Ze, tt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
__name(Xc, "Xc");
u(Xc, "isAnySideFullyClipped");
function Ph(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, d = Er(e, { elementContext: "reference" }), m = Er(e, { altBoundary: true }), b = Vc(d, i), y = Vc(m, l, c), w = Xc(b), P = Xc(y);
  e.modifiersData[t] = { referenceClippingOffsets: b, popperEscapeOffsets: y, isReferenceHidden: w, hasPopperEscaped: P }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": w, "data-popper-escaped": P });
}
__name(Ph, "Ph");
u(Ph, "hide");
var Yc = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ph };
function _h(r, e, t) {
  var i = lt(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d = c[0], m = c[1];
  return d = d || 0, m = (m || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: m, y: d } : { x: d, y: m };
}
__name(_h, "_h");
u(_h, "distanceAndSkiddingToXY");
function Ah(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, d = ka.reduce(function(w, P) {
    return w[P] = _h(P, e.rects, c), w;
  }, {}), m = d[e.placement], b = m.x, y = m.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += b, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d;
}
__name(Ah, "Ah");
u(Ah, "offset");
var Zc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Ah };
function Ih(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = co({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(Ih, "Ih");
u(Ih, "popperOffsets");
var Jc = { name: "popperOffsets", enabled: true, phase: "read", fn: Ih, data: {} };
function al(r) {
  return r === "x" ? "y" : "x";
}
__name(al, "al");
u(al, "getAltAxis");
function zh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, m = d === void 0 ? false : d, b = t.boundary, y = t.rootBoundary, w = t.altBoundary, P = t.padding, C = t.tether, _ = C === void 0 ? true : C, z = t.tetherOffset, S = z === void 0 ? 0 : z, M = Er(e, { boundary: b, rootBoundary: y, padding: P, altBoundary: w }), A = lt(e.placement), I = Jt(e.placement), L = !I, E = Nn(A), B = al(E), R = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, H = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, W = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ie = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!R) {
    if (c) {
      var U, ce = E === "y" ? Fe : Ve, Re = E === "y" ? tt : Ze, We = E === "y" ? "height" : "width", qe = R[E], fe = qe + M[ce], Ye = qe - M[Re], Ke = _ ? -V[We] / 2 : 0, kt = I === jr ? X[We] : V[We], Pt = I === jr ? -V[We] : -X[We], Ir = e.elements.arrow, K = _ && Ir ? Rn(Ir) : { width: 0, height: 0 }, Et = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : so(), St = Et[ce], zr = Et[Re], Wt = Gn(0, X[We], K[We]), hr = L ? X[We] / 2 - Ke - Wt - St - W.mainAxis : kt - Wt - St - W.mainAxis, mr = L ? -X[We] / 2 + Ke + Wt + zr + W.mainAxis : Pt + Wt + zr + W.mainAxis, Rt = e.elements.arrow && wr(e.elements.arrow), Wn = Rt ? E === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0 : 0, _t = (U = ie == null ? void 0 : ie[E]) != null ? U : 0, cn = qe + hr - _t - Wn, xe = qe + mr - _t, Ur = Gn(_ ? kn(fe, cn) : fe, qe, _ ? xr(Ye, xe) : Ye);
      R[E] = Ur, oe[E] = Ur - qe;
    }
    if (m) {
      var Vr, At = E === "x" ? Fe : Ve, pn = E === "x" ? tt : Ze, vr = R[B], gr = B === "y" ? "height" : "width", dn = vr + M[At], ct = vr - M[pn], Dr = [Fe, Ve].indexOf(A) !== -1, Nt = (Vr = ie == null ? void 0 : ie[B]) != null ? Vr : 0, Un = Dr ? dn : vr - X[gr] - V[gr] - Nt + W.altAxis, kr = Dr ? vr + X[gr] + V[gr] - Nt - W.altAxis : ct, fn = _ && Dr ? jc(Un, vr, kr) : Gn(_ ? Un : dn, vr, _ ? kr : ct);
      R[B] = fn, oe[B] = fn - vr;
    }
    e.modifiersData[i] = oe;
  }
}
__name(zh, "zh");
u(zh, "preventOverflow");
var Kc = { name: "preventOverflow", enabled: true, phase: "main", fn: zh, requiresIfExists: ["offset"] };
function sl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(sl, "sl");
u(sl, "getHTMLElementScroll");
function ll(r) {
  return r === Xe(r) || !rt(r) ? qn(r) : sl(r);
}
__name(ll, "ll");
u(ll, "getNodeScroll");
function Dh(r) {
  var e = r.getBoundingClientRect(), t = Br(e.width) / r.offsetWidth || 1, i = Br(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(Dh, "Dh");
u(Dh, "isElementScaled");
function ul(r, e, t) {
  t === void 0 && (t = false);
  var i = rt(e), l = rt(e) && Dh(e), c = bt(e), d = Zt(r, l), m = { scrollLeft: 0, scrollTop: 0 }, b = { x: 0, y: 0 };
  return (i || !i && !t) && ((st(e) !== "body" || jn(c)) && (m = ll(e)), rt(e) ? (b = Zt(e, true), b.x += e.clientLeft, b.y += e.clientTop) : c && (b.x = Ln(c))), { x: d.left + m.scrollLeft - b.x, y: d.top + m.scrollTop - b.y, width: d.width, height: d.height };
}
__name(ul, "ul");
u(ul, "getCompositeRect");
function kh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(m) {
      if (!t.has(m)) {
        var b = e.get(m);
        b && l(b);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(kh, "kh");
u(kh, "order");
function cl(r) {
  var e = kh(r);
  return qc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(cl, "cl");
u(cl, "orderModifiers");
function pl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(pl, "pl");
u(pl, "debounce");
function dl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(dl, "dl");
u(dl, "mergeByName");
var Qc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ep() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(ep, "ep");
u(ep, "areValidElements");
function tp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? Qc : l;
  return u(function(m, b, y) {
    y === void 0 && (y = c);
    var w = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qc, c), modifiersData: {}, elements: { reference: m, popper: b }, attributes: {}, styles: {} }, P = [], C = false, _ = { state: w, setOptions: u(function(A) {
      var I = typeof A == "function" ? A(w.options) : A;
      S(), w.options = Object.assign({}, c, w.options, I), w.scrollParents = { reference: Mr(m) ? on(m) : m.contextElement ? on(m.contextElement) : [], popper: on(b) };
      var L = cl(dl([].concat(i, w.options.modifiers)));
      if (w.orderedModifiers = L.filter(function(ie) {
        return ie.enabled;
      }), false) {
        var E;
        if (getBasePlacement(w.options.placement) === auto)
          var B;
        var R, X, V, H, W;
      }
      return z(), _.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!C) {
        var A = w.elements, I = A.reference, L = A.popper;
        if (!!ep(I, L)) {
          w.rects = { reference: ul(I, wr(L), w.options.strategy === "fixed"), popper: Rn(L) }, w.reset = false, w.placement = w.options.placement, w.orderedModifiers.forEach(function(ie) {
            return w.modifiersData[ie.name] = Object.assign({}, ie.data);
          });
          for (var E = 0, B = 0; B < w.orderedModifiers.length; B++) {
            if (w.reset === true) {
              w.reset = false, B = -1;
              continue;
            }
            var R = w.orderedModifiers[B], X = R.fn, V = R.options, H = V === void 0 ? {} : V, W = R.name;
            typeof X == "function" && (w = X({ state: w, options: H, name: W, instance: _ }) || w);
          }
        }
      }
    }, "forceUpdate"), update: pl(function() {
      return new Promise(function(M) {
        _.forceUpdate(), M(w);
      });
    }), destroy: u(function() {
      S(), C = true;
    }, "destroy") };
    if (!ep(m, b))
      return _;
    _.setOptions(y).then(function(M) {
      !C && y.onFirstUpdate && y.onFirstUpdate(M);
    });
    function z() {
      w.orderedModifiers.forEach(function(M) {
        var A = M.name, I = M.options, L = I === void 0 ? {} : I, E = M.effect;
        if (typeof E == "function") {
          var B = E({ state: w, name: A, instance: _, options: L }), R = u(function() {
          }, "noopFn");
          P.push(B || R);
        }
      });
    }
    __name(z, "z");
    u(z, "runModifierEffects");
    function S() {
      P.forEach(function(M) {
        return M();
      }), P = [];
    }
    __name(S, "S");
    return u(S, "cleanupModifierEffects"), _;
  }, "createPopper");
}
__name(tp, "tp");
u(tp, "popperGenerator");
var Rh = [Fc, Jc, $c, oo, Zc, Uc, Kc, Bc, Yc];
var fl = tp({ defaultModifiers: Rh });
var Kt = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Nh = "tippy-box";
var pp = "tippy-content";
var Gh = "tippy-backdrop";
var dp = "tippy-arrow";
var fp = "tippy-svg-arrow";
var Bn = { passive: true, capture: true };
var hp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function hl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(hl, "hl");
u(hl, "getValueAtIndexOrReturn");
function xl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(xl, "xl");
u(xl, "isType");
function mp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(mp, "mp");
u(mp, "invokeWithArgsOrReturn");
function rp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(rp, "rp");
u(rp, "debounce");
function qh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
__name(qh, "qh");
u(qh, "removeProperties");
function Lh(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Lh, "Lh");
u(Lh, "splitBySpaces");
function Hn(r) {
  return [].concat(r);
}
__name(Hn, "Hn");
u(Hn, "normalizeToArray");
function np(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(np, "np");
u(np, "pushIfUnique");
function jh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(jh, "jh");
u(jh, "unique");
function Bh(r) {
  return r.split("-")[0];
}
__name(Bh, "Bh");
u(Bh, "getBasePlacement");
function ja(r) {
  return [].slice.call(r);
}
__name(ja, "ja");
u(ja, "arrayFrom");
function ip(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(ip, "ip");
u(ip, "removeUndefinedProps");
function mi() {
  return document.createElement("div");
}
__name(mi, "mi");
u(mi, "div");
function Ba(r) {
  return ["Element", "Fragment"].some(function(e) {
    return xl(r, e);
  });
}
__name(Ba, "Ba");
u(Ba, "isElement");
function Hh(r) {
  return xl(r, "NodeList");
}
__name(Hh, "Hh");
u(Hh, "isNodeList");
function $h(r) {
  return xl(r, "MouseEvent");
}
__name($h, "$h");
u($h, "isMouseEvent");
function Fh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Fh, "Fh");
u(Fh, "isReferenceElement");
function Wh(r) {
  return Ba(r) ? [r] : Hh(r) ? ja(r) : Array.isArray(r) ? r : ja(document.querySelectorAll(r));
}
__name(Wh, "Wh");
u(Wh, "getArrayOfElements");
function ml(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(ml, "ml");
u(ml, "setTransitionDuration");
function op(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(op, "op");
u(op, "setVisibilityState");
function Uh(r) {
  var e, t = Hn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(Uh, "Uh");
u(Uh, "getOwnerDocument");
function Vh(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, d = l.popperState, m = l.props, b = m.interactiveBorder, y = Bh(d.placement), w = d.modifiersData.offset;
    if (!w)
      return true;
    var P = y === "bottom" ? w.top.y : 0, C = y === "top" ? w.bottom.y : 0, _ = y === "right" ? w.left.x : 0, z = y === "left" ? w.right.x : 0, S = c.top - i + P > b, M = i - c.bottom - C > b, A = c.left - t + _ > b, I = t - c.right - z > b;
    return S || M || A || I;
  });
}
__name(Vh, "Vh");
u(Vh, "isCursorOutsideInteractiveBorder");
function vl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(vl, "vl");
u(vl, "updateTransitionEndListener");
function ap(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(ap, "ap");
u(ap, "actualContains");
var Pr = { isTouch: false };
var sp = 0;
function Xh() {
  Pr.isTouch || (Pr.isTouch = true, window.performance && document.addEventListener("mousemove", vp));
}
__name(Xh, "Xh");
u(Xh, "onDocumentTouchStart");
function vp() {
  var r = performance.now();
  r - sp < 20 && (Pr.isTouch = false, document.removeEventListener("mousemove", vp)), sp = r;
}
__name(vp, "vp");
u(vp, "onDocumentMouseMove");
function Yh() {
  var r = document.activeElement;
  if (Fh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(Yh, "Yh");
u(Yh, "onWindowBlur");
function Zh() {
  document.addEventListener("touchstart", Xh, Bn), window.addEventListener("blur", Yh);
}
__name(Zh, "Zh");
u(Zh, "bindGlobalEventListeners");
var Jh = typeof window != "undefined" && typeof document != "undefined";
var Kh = Jh ? !!window.msCrypto : false;
var Qh = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var em = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Sr = Object.assign({ appendTo: hp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Qh, em);
var tm = Object.keys(Sr);
var rm = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    Sr[i] = e[i];
  });
}, "setDefaultProps");
function gp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, d = l.defaultValue;
    if (c) {
      var m;
      i[c] = r[c] !== void 0 ? r[c] : (m = Sr[c]) != null ? m : d;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(gp, "gp");
u(gp, "getExtendedPassedProps");
function nm(r, e) {
  var t = e ? Object.keys(gp(Object.assign({}, Sr, { plugins: e }))) : tm, i = t.reduce(function(l, c) {
    var d = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!d)
      return l;
    if (c === "content")
      l[c] = d;
    else
      try {
        l[c] = JSON.parse(d);
      } catch (m) {
        l[c] = d;
      }
    return l;
  }, {});
  return i;
}
__name(nm, "nm");
u(nm, "getDataAttributeProps");
function lp(r, e) {
  var t = Object.assign({}, e, { content: mp(e.content, [r]) }, e.ignoreAttributes ? {} : nm(r, e.plugins));
  return t.aria = Object.assign({}, Sr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(lp, "lp");
u(lp, "evaluateProps");
var im = u(function() {
  return "innerHTML";
}, "innerHTML");
function bl(r, e) {
  r[im()] = e;
}
__name(bl, "bl");
u(bl, "dangerouslySetInnerHTML");
function up(r) {
  var e = mi();
  return r === true ? e.className = dp : (e.className = fp, Ba(r) ? e.appendChild(r) : bl(e, r)), e;
}
__name(up, "up");
u(up, "createArrowElement");
function cp(r, e) {
  Ba(e.content) ? (bl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? bl(r, e.content) : r.textContent = e.content);
}
__name(cp, "cp");
u(cp, "setContent");
function yl(r) {
  var e = r.firstElementChild, t = ja(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(pp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(dp) || i.classList.contains(fp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Gh);
  }) };
}
__name(yl, "yl");
u(yl, "getChildren");
function bp(r) {
  var e = mi(), t = mi();
  t.className = Nh, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = mi();
  i.className = pp, i.setAttribute("data-state", "hidden"), cp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, d) {
    var m = yl(e), b = m.box, y = m.content, w = m.arrow;
    d.theme ? b.setAttribute("data-theme", d.theme) : b.removeAttribute("data-theme"), typeof d.animation == "string" ? b.setAttribute("data-animation", d.animation) : b.removeAttribute("data-animation"), d.inertia ? b.setAttribute("data-inertia", "") : b.removeAttribute("data-inertia"), b.style.maxWidth = typeof d.maxWidth == "number" ? d.maxWidth + "px" : d.maxWidth, d.role ? b.setAttribute("role", d.role) : b.removeAttribute("role"), (c.content !== d.content || c.allowHTML !== d.allowHTML) && cp(y, r.props), d.arrow ? w ? c.arrow !== d.arrow && (b.removeChild(w), b.appendChild(up(d.arrow))) : b.appendChild(up(d.arrow)) : w && b.removeChild(w);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(bp, "bp");
u(bp, "render");
bp.$$tippy = true;
var om = 1;
var La = [];
var gl = [];
function am(r, e) {
  var t = lp(r, Object.assign({}, Sr, gp(ip(e)))), i, l, c, d = false, m = false, b = false, y = false, w, P, C, _ = [], z = rp(cn, t.interactiveDebounce), S, M = om++, A = null, I = jh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: M, reference: r, popper: mi(), popperInstance: A, props: t, state: L, plugins: I, clearDelayTimeouts: Un, setProps: kr, setContent: fn, show: xi, hide: To, hideWithInteractivity: wi, enable: Dr, disable: Nt, unmount: Ei, destroy: Co };
  if (!t.render)
    return E;
  var B = t.render(E), R = B.popper, X = B.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + E.id, E.popper = R, r._tippy = E, R._tippy = E;
  var V = I.map(function(j) {
    return j.fn(E);
  }), H = r.hasAttribute("aria-expanded");
  return Rt(), Ke(), qe(), fe("onCreate", [E]), t.showOnCreate && dn(), R.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", z);
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
    return j ? Uh(j) : document;
  }
  __name(ce, "ce");
  u(ce, "getDocument");
  function Re() {
    return yl(R);
  }
  __name(Re, "Re");
  u(Re, "getDefaultTemplateChildren");
  function We(j) {
    return E.state.isMounted && !E.state.isVisible || Pr.isTouch || w && w.type === "focus" ? 0 : hl(E.props.delay, j ? 0 : 1, Sr.delay);
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
      var Q = "aria-" + j.content, ae = R.id, ye = Hn(E.props.triggerTarget || r);
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
  function Ke() {
    if (!(H || !E.props.aria.expanded)) {
      var j = Hn(E.props.triggerTarget || r);
      j.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === U() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Ke, "Ke");
  u(Ke, "handleAriaExpandedAttribute");
  function kt() {
    ce().removeEventListener("mousemove", z), La = La.filter(function(j) {
      return j !== z;
    });
  }
  __name(kt, "kt");
  u(kt, "cleanupInteractiveMouseListeners");
  function Pt(j) {
    if (!(Pr.isTouch && (b || j.type === "mousedown"))) {
      var Q = j.composedPath && j.composedPath()[0] || j.target;
      if (!(E.props.interactive && ap(R, Q))) {
        if (Hn(E.props.triggerTarget || r).some(function(ae) {
          return ap(ae, Q);
        })) {
          if (Pr.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [E, j]);
        E.props.hideOnClick === true && (E.clearDelayTimeouts(), E.hide(), m = true, setTimeout(function() {
          m = false;
        }), E.state.isMounted || St());
      }
    }
  }
  __name(Pt, "Pt");
  u(Pt, "onDocumentPress");
  function Ir() {
    b = true;
  }
  __name(Ir, "Ir");
  u(Ir, "onTouchMove");
  function K() {
    b = false;
  }
  __name(K, "K");
  u(K, "onTouchStart");
  function Et() {
    var j = ce();
    j.addEventListener("mousedown", Pt, true), j.addEventListener("touchend", Pt, Bn), j.addEventListener("touchstart", K, Bn), j.addEventListener("touchmove", Ir, Bn);
  }
  __name(Et, "Et");
  u(Et, "addDocumentPress");
  function St() {
    var j = ce();
    j.removeEventListener("mousedown", Pt, true), j.removeEventListener("touchend", Pt, Bn), j.removeEventListener("touchstart", K, Bn), j.removeEventListener("touchmove", Ir, Bn);
  }
  __name(St, "St");
  u(St, "removeDocumentPress");
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
      he.target === ae && (vl(ae, "remove", ye), Q());
    }
    __name(ye, "ye");
    if (u(ye, "listener"), j === 0)
      return Q();
    vl(ae, "remove", P), vl(ae, "add", ye), P = ye;
  }
  __name(hr, "hr");
  u(hr, "onTransitionEnd");
  function mr(j, Q, ae) {
    ae === void 0 && (ae = false);
    var ye = Hn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, Q, ae), _.push({ node: he, eventType: j, handler: Q, options: ae });
    });
  }
  __name(mr, "mr");
  u(mr, "on");
  function Rt() {
    ie() && (mr("touchstart", _t, { passive: true }), mr("touchend", xe, { passive: true })), Lh(E.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (mr(j, _t), j) {
          case "mouseenter":
            mr("mouseleave", xe);
            break;
          case "focus":
            mr(Kh ? "focusout" : "blur", Ur);
            break;
          case "focusin":
            mr("focusout", Ur);
            break;
        }
    });
  }
  __name(Rt, "Rt");
  u(Rt, "addListeners");
  function Wn() {
    _.forEach(function(j) {
      var Q = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      Q.removeEventListener(ae, ye, he);
    }), _ = [];
  }
  __name(Wn, "Wn");
  u(Wn, "removeListeners");
  function _t(j) {
    var Q, ae = false;
    if (!(!E.state.isEnabled || Vr(j) || m)) {
      var ye = ((Q = w) == null ? void 0 : Q.type) === "focus";
      w = j, S = j.currentTarget, Ke(), !E.state.isVisible && $h(j) && La.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d) && E.props.hideOnClick !== false && E.state.isVisible ? ae = true : dn(j), j.type === "click" && (d = !ae), ae && !ye && ct(j);
    }
  }
  __name(_t, "_t");
  u(_t, "onTrigger");
  function cn(j) {
    var Q = j.target, ae = U().contains(Q) || R.contains(Q);
    if (!(j.type === "mousemove" && ae)) {
      var ye = gr().concat(R).map(function(he) {
        var pt, dt = he._tippy, Xr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Xr ? { popperRect: he.getBoundingClientRect(), popperState: Xr, props: t } : null;
      }).filter(Boolean);
      Vh(ye, j) && (kt(), ct(j));
    }
  }
  __name(cn, "cn");
  u(cn, "onMouseMove");
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
    return Pr.isTouch ? ie() !== j.type.indexOf("touch") >= 0 : false;
  }
  __name(Vr, "Vr");
  u(Vr, "isEventListenerStopped");
  function At() {
    pn();
    var j = E.props, Q = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, pt = j.moveTransition, dt = oe() ? yl(R).arrow : null, Xr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : r, Si = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Rr) {
      var Yr = Rr.state;
      if (oe()) {
        var Gt = Re(), qt = Gt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ut) {
          Ut === "placement" ? qt.setAttribute("data-placement", Yr.placement) : Yr.attributes.popper["data-popper-" + Ut] ? qt.setAttribute("data-" + Ut, "") : qt.removeAttribute("data-" + Ut);
        }), Yr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, Si];
    oe() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = fl(Xr, R, Object.assign({}, Q, { placement: ae, onFirstUpdate: C, modifiers: ft }));
  }
  __name(At, "At");
  u(At, "createPopperInstance");
  function pn() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  __name(pn, "pn");
  u(pn, "destroyPopperInstance");
  function vr() {
    var j = E.props.appendTo, Q, ae = U();
    E.props.interactive && j === hp || j === "parent" ? Q = ae.parentNode : Q = mp(j, [ae]), Q.contains(R) || Q.appendChild(R), E.state.isMounted = true, At();
  }
  __name(vr, "vr");
  u(vr, "mount");
  function gr() {
    return ja(R.querySelectorAll("[data-tippy-root]"));
  }
  __name(gr, "gr");
  u(gr, "getNestedPopperTree");
  function dn(j) {
    E.clearDelayTimeouts(), j && fe("onTrigger", [E, j]), Et();
    var Q = We(true), ae = W(), ye = ae[0], he = ae[1];
    Pr.isTouch && ye === "hold" && he && (Q = he), Q ? i = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  __name(dn, "dn");
  u(dn, "scheduleShow");
  function ct(j) {
    if (E.clearDelayTimeouts(), fe("onUntrigger", [E, j]), !E.state.isVisible) {
      St();
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
  function Un() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(Un, "Un");
  u(Un, "clearDelayTimeouts");
  function kr(j) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, j]), Wn();
      var Q = E.props, ae = lp(r, Object.assign({}, Q, ip(j), { ignoreAttributes: true }));
      E.props = ae, Rt(), Q.interactiveDebounce !== ae.interactiveDebounce && (kt(), z = rp(cn, ae.interactiveDebounce)), Q.triggerTarget && !ae.triggerTarget ? Hn(Q.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Ke(), qe(), X && X(Q, ae), E.popperInstance && (At(), gr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, j]);
    }
  }
  __name(kr, "kr");
  u(kr, "setProps");
  function fn(j) {
    E.setProps({ content: j });
  }
  __name(fn, "fn");
  u(fn, "setContent");
  function xi() {
    var j = E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = Pr.isTouch && !E.props.touch, he = hl(E.props.duration, 0, Sr.duration);
    if (!(j || Q || ae || ye) && !U().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, oe() && (R.style.visibility = "visible"), qe(), Et(), E.state.isMounted || (R.style.transition = "none"), oe()) {
        var pt = Re(), dt = pt.box, Xr = pt.content;
        ml([dt, Xr], 0);
      }
      C = u(function() {
        var ft;
        if (!(!E.state.isVisible || y)) {
          if (y = true, R.offsetHeight, R.style.transition = E.props.moveTransition, oe() && E.props.animation) {
            var Ti = Re(), Rr = Ti.box, Yr = Ti.content;
            ml([Rr, Yr], he), op([Rr, Yr], "visible");
          }
          Ye(), Ke(), np(gl, E), (ft = E.popperInstance) == null || ft.forceUpdate(), fe("onMount", [E]), E.props.animation && oe() && Wt(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), vr();
    }
  }
  __name(xi, "xi");
  u(xi, "show");
  function To() {
    var j = !E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = hl(E.props.duration, 1, Sr.duration);
    if (!(j || Q || ae) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d = false, oe() && (R.style.visibility = "hidden"), kt(), St(), qe(true), oe()) {
        var he = Re(), pt = he.box, dt = he.content;
        E.props.animation && (ml([pt, dt], ye), op([pt, dt], "hidden"));
      }
      Ye(), Ke(), E.props.animation ? oe() && zr(ye, E.unmount) : E.unmount();
    }
  }
  __name(To, "To");
  u(To, "hide");
  function wi(j) {
    ce().addEventListener("mousemove", z), np(La, z), z(j);
  }
  __name(wi, "wi");
  u(wi, "hideWithInteractivity");
  function Ei() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (pn(), gr().forEach(function(j) {
      j._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), gl = gl.filter(function(j) {
      return j !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  __name(Ei, "Ei");
  u(Ei, "unmount");
  function Co() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), Wn(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  __name(Co, "Co");
  u(Co, "destroy");
}
__name(am, "am");
u(am, "createTippy");
function vi(r, e) {
  e === void 0 && (e = {});
  var t = Sr.plugins.concat(e.plugins || []);
  Zh();
  var i = Object.assign({}, e, { plugins: t }), l = Wh(r);
  if (false)
    var c, d;
  var m = l.reduce(function(b, y) {
    var w = y && am(y, i);
    return w && b.push(w), b;
  }, []);
  return Ba(r) ? m[0] : m;
}
__name(vi, "vi");
u(vi, "tippy");
vi.defaultProps = Sr;
vi.setDefaultProps = rm;
vi.currentInput = Pr;
var sm = Object.assign({}, oo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var yp = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], d = [], m, b = t.overrides, y = [], w = false;
  function P() {
    d = l.map(function(E) {
      return Hn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  __name(P, "P");
  u(P, "setTriggerTargets");
  function C() {
    c = l.map(function(E) {
      return E.reference;
    });
  }
  __name(C, "C");
  u(C, "setReferences");
  function _(E) {
    l.forEach(function(B) {
      E ? B.enable() : B.disable();
    });
  }
  __name(_, "_");
  u(_, "enableInstances");
  function z(E) {
    return l.map(function(B) {
      var R = B.setProps;
      return B.setProps = function(X) {
        R(X), B.reference === m && E.setProps(X);
      }, function() {
        B.setProps = R;
      };
    });
  }
  __name(z, "z");
  u(z, "interceptSetProps");
  function S(E, B) {
    var R = d.indexOf(B);
    if (B !== m) {
      m = B;
      var X = (b || []).concat("content").reduce(function(V, H) {
        return V[H] = l[R].props[H], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c[R]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  __name(S, "S");
  u(S, "prepareInstance"), _(false), C(), P();
  var M = { fn: u(function() {
    return { onDestroy: u(function() {
      _(true);
    }, "onDestroy"), onHidden: u(function() {
      m = null;
    }, "onHidden"), onClickOutside: u(function(R) {
      R.props.showOnCreate && !w && (w = true, m = null);
    }, "onClickOutside"), onShow: u(function(R) {
      R.props.showOnCreate && !w && (w = true, S(R, c[0]));
    }, "onShow"), onTrigger: u(function(R, X) {
      S(R, X.currentTarget);
    }, "onTrigger") };
  }, "fn") }, A = vi(mi(), Object.assign({}, qh(t, ["overrides"]), { plugins: [M].concat(t.plugins || []), triggerTarget: d, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [sm]) }) })), I = A.show;
  A.show = function(E) {
    if (I(), !m && E == null)
      return S(A, c[0]);
    if (!(m && E == null)) {
      if (typeof E == "number")
        return c[E] && S(A, c[E]);
      if (l.indexOf(E) >= 0) {
        var B = E.reference;
        return S(A, B);
      }
      if (c.indexOf(E) >= 0)
        return S(A, E);
    }
  }, A.showNext = function() {
    var E = c[0];
    if (!m)
      return A.show(0);
    var B = c.indexOf(m);
    A.show(c[B + 1] || E);
  }, A.showPrevious = function() {
    var E = c[c.length - 1];
    if (!m)
      return A.show(E);
    var B = c.indexOf(m), R = c[B - 1] || E;
    A.show(R);
  };
  var L = A.setProps;
  return A.setProps = function(E) {
    b = E.overrides || b, L(E);
  }, A.setInstances = function(E) {
    _(true), y.forEach(function(B) {
      return B();
    }), l = E, _(false), C(), P(), y = z(A), A.setProps({ triggerTarget: d });
  }, y = z(A), A;
}, "createSingleton");
vi.setDefaultProps({ render: bp });
var xt = vi;
var wl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Pe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = gt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = xt(this, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
  return u(e, "HelpableMixinClass"), k([G], e.prototype, "help", 2), k([G], e.prototype, "helpId", 2), k([G], e.prototype, "debugHelpable", 2), e;
}
__name(Pe, "Pe");
u(Pe, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), k([G], e.prototype, "hoverable", 2), e;
}
__name(we, "we");
u(we, "HoverableMixin");
function* Ha(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Ha, "Ha");
u(Ha, "parse");
var xp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "xp");
var an = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "an");
var _r;
var $a;
var $r = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, _r.set(this, void 0), $a.set(this, ""), xp(this, _r, e, "f"), an(this, _r, "f").updateParent("");
  }
  get attributeName() {
    return an(this, _r, "f").attr.name;
  }
  get attributeNamespace() {
    return an(this, _r, "f").attr.namespaceURI;
  }
  get value() {
    return an(this, $a, "f");
  }
  set value(e) {
    xp(this, $a, e || "", "f"), an(this, _r, "f").updateParent(e);
  }
  get element() {
    return an(this, _r, "f").element;
  }
  get booleanValue() {
    return an(this, _r, "f").booleanValue;
  }
  set booleanValue(e) {
    an(this, _r, "f").booleanValue = e;
  }
}, "$r");
u($r, "AttributeTemplatePart");
_r = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap();
var po = /* @__PURE__ */ __name(class {
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
}, "po");
u(po, "AttributeValueSetter");
var wp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "wp");
var gi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "gi");
var Ar;
var Qt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Ar.set(this, void 0), wp(this, Ar, [e], "f"), e.textContent = "";
  }
  get value() {
    return gi(this, Ar, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return gi(this, Ar, "f")[0].previousSibling;
  }
  get nextSibling() {
    return gi(this, Ar, "f")[gi(this, Ar, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), gi(this, Ar, "f")[0].before(...t);
    for (let i of gi(this, Ar, "f"))
      i.remove();
    wp(this, Ar, t, "f");
  }
}, "Qt");
u(Qt, "NodeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap();
function fo(r) {
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
__name(fo, "fo");
u(fo, "createProcessor");
function ho(r, e) {
  r.value = String(e);
}
__name(ho, "ho");
u(ho, "processPropertyIdentity");
function Fa(r, e) {
  return typeof e == "boolean" && r instanceof $r && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(Fa, "Fa");
u(Fa, "processBooleanAttribute");
var El = fo(ho);
var lm = fo((r, e) => {
  Fa(r, e) || ho(r, e);
});
var Ep = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Ep");
var Wa = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "Wa");
var mo;
var vo;
function* um(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new po(t, l);
          for (let d of Ha(l.value))
            if (d.type === "string")
              c.append(d.value);
            else {
              let m = new $r(c, d.value);
              c.append(m), yield m;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Ha(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Qt(t, i.value));
        break;
      }
}
__name(um, "um");
u(um, "collectParts");
var sn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = El) {
    var l, c;
    super();
    mo.set(this, void 0), vo.set(this, void 0), Object.getPrototypeOf(this) !== sn.prototype && Object.setPrototypeOf(this, sn.prototype), this.appendChild(e.content.cloneNode(true)), Ep(this, vo, Array.from(um(this)), "f"), Ep(this, mo, i, "f"), (c = (l = Wa(this, mo, "f")).createCallback) === null || c === void 0 || c.call(l, this, Wa(this, vo, "f"), t);
  }
  update(e) {
    Wa(this, mo, "f").processCallback(this, Wa(this, vo, "f"), e);
  }
}, "sn");
u(sn, "TemplateInstance");
mo = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap();
var Sp = /* @__PURE__ */ new WeakSet();
function Tp(r) {
  return Sp.has(r);
}
__name(Tp, "Tp");
u(Tp, "isDirective");
function Cp(r, e) {
  return Tp(e) ? (e(r), true) : false;
}
__name(Cp, "Cp");
u(Cp, "processDirective");
function go(r) {
  return (...e) => {
    let t = r(...e);
    return Sp.add(t), t;
  };
}
__name(go, "go");
u(go, "directive");
var bo = /* @__PURE__ */ new WeakMap();
var yo = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), bo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), bo.get(this.element).delete(this.type));
  }
  static for(e) {
    bo.has(e.element) || bo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = bo.get(e.element);
    return i.has(t) ? i.get(t) : new yo(e.element, t);
  }
}, "yo");
u(yo, "EventHandler");
function Op(r, e) {
  return r instanceof $r && r.attributeName.startsWith("on") ? (yo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Op, "Op");
u(Op, "processEvent");
function cm(r, e) {
  return e instanceof bi && r instanceof Qt ? (e.renderInto(r), true) : false;
}
__name(cm, "cm");
u(cm, "processSubTemplate");
function pm(r, e) {
  return e instanceof DocumentFragment && r instanceof Qt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(pm, "pm");
u(pm, "processDocumentFragment");
function dm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(dm, "dm");
u(dm, "isIterable");
function fm(r, e) {
  if (!dm(e))
    return false;
  if (r instanceof Qt) {
    let t = [];
    for (let i of e)
      if (i instanceof bi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
__name(fm, "fm");
u(fm, "processIterable");
function Ua(r, e) {
  Cp(r, e) || Fa(r, e) || Op(r, e) || cm(r, e) || pm(r, e) || fm(r, e) || ho(r, e);
}
__name(Ua, "Ua");
u(Ua, "processPart");
var Sl = /* @__PURE__ */ new WeakMap();
var Mp = /* @__PURE__ */ new WeakMap();
var Pp = /* @__PURE__ */ new WeakMap();
var bi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Sl.has(this.strings))
      return Sl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Sl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (Mp.get(e) !== t) {
      Mp.set(e, t);
      let i = new sn(t, this.values, this.processor);
      Pp.set(e, i), e instanceof Qt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Pp.get(e).update(this.values);
  }
}, "bi");
u(bi, "TemplateResult");
var hm = fo(Ua);
function Z(r, ...e) {
  return new bi(r, e, hm);
}
__name(Z, "Z");
u(Z, "html");
function te(r, e) {
  r.renderInto(e);
}
__name(te, "te");
u(te, "render");
var Tl = /* @__PURE__ */ new WeakMap();
var mm = go((...r) => (e) => {
  Tl.has(e) || Tl.set(e, { i: r.length });
  let t = Tl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Ua(e, l));
    }) : i <= t.i && (t.i = i, Ua(e, r[i]));
});
var vm = go((r) => (e) => {
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
  return u(e, "IfableMixinClass"), k([G], e.prototype, "if", 2), e;
}
__name(Je, "Je");
u(Je, "IfableMixin");
var _p = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function _e(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = xt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c, d, m;
        (l = this.ifTooltip) == null || l.hide(), (c = this.angleTooltip) == null || c.hide(), (d = this.flagTooltip) == null || d.hide(), (m = this.deleteTooltip) == null || m.hide();
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
      return te(Z`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Fr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        ee.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = xt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (wn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        ee.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = xt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (zn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        ee.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = xt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      ee.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = xt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
function Ap(r) {
  return /^-?\d+$/.test(r);
}
__name(Ap, "Ap");
u(Ap, "isNumeric");
function er(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(er, "er");
u(er, "forceSigned");
var nt = /* @__PURE__ */ __name(class extends _e(Pe(Me(Oe(we(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Ts;
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
    xt(this, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return te(Z`
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
    te(Z`<style>
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
    return `"${Ts}"`;
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
u(nt, "BlochDisplayElement"), k([ze], nt.prototype, "body", 2), k([ze], nt.prototype, "vectorLine", 2), k([ze], nt.prototype, "vectorEnd", 2), k([ze], nt.prototype, "vector", 2), k([Bt], nt.prototype, "vectorEndCircles", 2), k([G], nt.prototype, "x", 2), k([G], nt.prototype, "y", 2), k([G], nt.prototype, "z", 2);
ne(nt);
var Ip = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var $t = /* @__PURE__ */ __name(class extends _e(Pe(Me(Be(ke(Oe(we(HTMLElement))))))) {
  get operationType() {
    return Ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Ip)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ss}"`;
  }
}, "$t");
u($t, "ControlGateElement");
ne($t);
var zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ra;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(zp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ra}<${this.if}"` : `"${ra}"`;
  }
}, "tr");
u(tr, "HGateElement");
ne(tr);
var Dp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends _e(Pe(Rc(Me(ke(Oe(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">
        ${this.iconHtml(Dp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${da}"` : `"${da}>${this.flag}"`;
  }
}, "rr");
u(rr, "MeasurementGateElement"), k([G], rr.prototype, "value", 2);
ne(rr);
var kp = `<svg
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
var nr = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(tn(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return aa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${aa}"` : `"${aa}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "PhaseGateElement");
ne(nr);
var Rp = `<svg
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
var ir = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return la;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${la}<${this.if}"` : `"${la}"`;
  }
}, "ir");
u(ir, "RnotGateElement");
ne(ir);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(tn(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ua}"` : `"${ua}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RxGateElement");
ne(or);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(tn(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ca}"` : `"${ca}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RyGateElement");
ne(ar);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(tn(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${pa}"` : `"${pa}(${this.angle.replace("/", "_")})"`;
  }
}, "sr");
u(sr, "RzGateElement");
ne(sr);
var Lp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends _e(Pe($e(Me(Be(ke(Oe(we(HTMLElement)))))))) {
  get operationType() {
    return Es;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Lp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Es}"`;
  }
}, "lr");
u(lr, "SwapGateElement");
ne(lr);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
}, "ur");
u(ur, "TGateElement");
ne(ur);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends _e(Pe(Me(ke(Oe(we(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Fu;
      case "1":
        return Wu;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">
        ${this.iconHtml(Bp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Ft");
u(Ft, "WriteGateElement"), k([G], Ft.prototype, "value", 2);
ne(Ft);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return na;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${na}<${this.if}"` : `"${na}"`;
  }
}, "cr");
u(cr, "XGateElement");
ne(cr);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ia;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ia}<${this.if}"` : `"${ia}"`;
  }
}, "pr");
u(pr, "YGateElement");
ne(pr);
var Fp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends _e(Pe(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${oa}<${this.if}"` : `"${oa}"`;
  }
}, "dr");
u(dr, "ZGateElement");
ne(dr);
var ut = u((r) => r instanceof tr || r instanceof cr || r instanceof pr || r instanceof dr || r instanceof nr || r instanceof ur || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof $t || r instanceof nt || r instanceof Ft || r instanceof rr, "isOperation");
var Wp = u((r) => r != null && r instanceof tr, "isHGateElement");
var Up = u((r) => r != null && r instanceof cr, "isXGateElement");
var Vp = u((r) => r != null && r instanceof pr, "isYGateElement");
var Xp = u((r) => r != null && r instanceof dr, "isZGateElement");
var xo = u((r) => r != null && r instanceof nr, "isPhaseGateElement");
var Yp = u((r) => r != null && r instanceof ur, "isTGateElement");
var Zp = u((r) => r != null && r instanceof ir, "isRnotGateElement");
var Va = u((r) => r != null && r instanceof or, "isRxGateElement");
var Xa = u((r) => r != null && r instanceof ar, "isRyGateElement");
var Ya = u((r) => r != null && r instanceof sr, "isRzGateElement");
var Jp = u((r) => r != null && r instanceof lr, "isSwapGateElement");
var Cl = u((r) => r != null && r instanceof $t, "isControlGateElement");
var Kp = u((r) => r != null && r instanceof nt, "isBlochDisplayElement");
var ET = u((r) => r != null && r instanceof Ft, "isWriteGateElement");
var Qp = u((r) => r != null && r instanceof rr, "isMeasurementGateElement");
var wo = Ko(Aa(), 1);
var Ol = u((r) => r !== null && r instanceof Wr, "isAngleSliderElement");
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
        throw new Ct("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = Bi(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(Lu(this.angle));
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
    (0, wo.default)(this).unset();
  }
  update() {
    te(Z`<style>
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
    (0, wo.default)(this).draggable({ origin: "self", modifiers: [wo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = wo.default.getElementRect(e.target).width, i = e.pageX / t;
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
}, "Wr");
u(Wr, "AngleSliderElement"), k([G], Wr.prototype, "angle", 2), k([G], Wr.prototype, "radian", 2), k([G], Wr.prototype, "denominator", 2), k([G], Wr.prototype, "disabled", 2), k([G], Wr.prototype, "debug", 2);
ne(Wr);
var it = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.qubitCircleSize = "xl";
    this.cols = 0;
    this.rows = 0;
    this.paddingX = 0;
    this.paddingY = 0;
    this.colStartIndex = -1;
    this.colEndIndex = -1;
    this.rowStartIndex = -1;
    this.rowEndIndex = -1;
    this.vertical = true;
    this.qubitCirclePopupTemplateId = "qubit-circle-popup-template";
    this.lastParentElementClientWidth = null;
    this.lastWindowScrollTop = null;
    this.lastWindowScrollLeft = null;
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && e === "data-qubit-count") {
      ee.notNull(i);
      let l = parseInt(i);
      this.updateQubitCircleSize(l), this.updateDimension(l), this.redrawWindowAndInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent();
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
        throw new Ct("unsupported qubit count", e);
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
        throw new Ct("unsupported qubit count", e);
    }
  }
  get visibleQubitCircleKets() {
    return this.qubitCircles.map((t) => {
      let i = t.getAttribute("data-ket");
      return ee.notNull(i), parseInt(i);
    });
  }
  setAmplitudes(e) {
    for (let t of this.qubitCircles) {
      let i = t.getAttribute("data-ket");
      ee.notNull(i);
      let l = parseInt(i), c = e[l];
      if (c === void 0)
        continue;
      t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString());
      let d = Math.floor(c.abs() * 1e5) / 1e5, m = t.children.item(0);
      ee.notNull(m), m.style.setProperty("--magnitude", d.toString());
      let b = c.phase() / Math.PI * 180, y = t.children.item(1);
      ee.notNull(y);
      let w = Math.trunc(b);
      w < 0 && (w = 360 + w), y.style.setProperty("--phase", `-${w.toString()}deg`);
    }
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.startResizeObserver(), this.updatePadding(), this.redrawWindowAndInnerContainer(), this.maybeRedrawQubitCircles(), this.dispatchEvent(new CustomEvent("circle-notation-init", { bubbles: true }));
  }
  startResizeObserver() {
    this.detectLayoutOrientation(), new ResizeObserver(this.detectLayoutOrientation.bind(this)).observe(document.body);
  }
  detectLayoutOrientation() {
    let e = false;
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768 ? (this.vertical || (e = true), this.vertical = true) : (this.vertical && (e = true), this.vertical = false), e && (this.updateQubitCircleSize(this.qubitCount), this.updatePadding(), this.updateDimension(this.qubitCount), this.redrawWindowAndInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent());
  }
  updatePadding() {
    this.style.removeProperty("padding");
    let e = window.getComputedStyle(this);
    this.paddingX = parseInt(e.paddingLeft, 10), this.paddingY = parseInt(e.paddingTop, 10), this.style.paddingTop = "0px", this.style.paddingRight = "0px", this.style.paddingBottom = "0px", this.style.paddingLeft = "0px";
  }
  update() {
    te(Z`<style>
          :root {
            --magnitude: 0;
            --phase: 0deg;
          }

          .circle-notation__window {
            overflow: auto;
          }

          .circle-notation__inner-container {
            position: relative;
          }

          .qubit-circle {
            position: absolute;
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-circle-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-qubit-circle-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-qubit-circle-size='base']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-circle-size='sm']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          :host([data-qubit-circle-size='xs']) .qubit-circle {
            height: 17px;
            width: 17px;
          }

          /* magnitude */

          .qubit-circle__magnitude {
            position: absolute;
            border-style: solid;
            border-color: rgb(226 232 240); /* slate-200 */
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
          }

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: rgb(220 38 38); /* red-600 */
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle__magnitude,
          :host([data-qubit-circle-size='lg']) .qubit-circle__magnitude,
          :host([data-qubit-circle-size='base']) .qubit-circle__magnitude {
            border-width: 2px;
          }
          :host([data-qubit-circle-size='sm']) .qubit-circle__magnitude,
          :host([data-qubit-circle-size='xs']) .qubit-circle__magnitude {
            border-width: 1px;
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            background-color: rgb(14 165 233); /* sky-500 */
            transform-origin: center;
            transform: scaleX(var(--magnitude)) scaleY(var(--magnitude));

            content: '';
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: rgb(249 115 22); /* orange-500 */
          }

          /* phase */

          .qubit-circle__phase {
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-style: solid;
            border-color: rgb(100 116 139); /* slate-500 */
            border-radius: 9999px;
            transform-origin: center;
            transform: rotate(var(--phase));
          }

          .qubit-circle[data-amplitude-real='0'][data-amplitude-imag='0'] .qubit-circle__phase {
            transform: scaleX(0) scaleY(0);
          }

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: rgb(220 38 38); /* red-600 */
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle__phase,
          :host([data-qubit-circle-size='lg']) .qubit-circle__phase,
          :host([data-qubit-circle-size='base']) .qubit-circle__phase {
            border-width: 2px;
          }
          :host([data-qubit-circle-size='sm']) .qubit-circle__phase,
          :host([data-qubit-circle-size='xs']) .qubit-circle__phase {
            border-width: 1px;
          }

          .qubit-circle__phase::after {
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem; /* 4px */
            border-bottom-left-radius: 0.25rem; /* 4px */

            content: '';
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle__phase::after,
          :host([data-qubit-circle-size='lg']) .qubit-circle__phase::after,
          :host([data-qubit-circle-size='base']) .qubit-circle__phase::after {
            width: 0.125rem; /* 2px */
          }
          :host([data-qubit-circle-size='sm']) .qubit-circle__phase::after,
          :host([data-qubit-circle-size='xs']) .qubit-circle__phase::after {
            width: 1px;
          }
        </style>

        <div
          class="circle-notation__window"
          data-target="circle-notation.window"
          data-action="scroll:circle-notation#maybeRedrawQubitCircles"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px"
        >
          <div
            class="circle-notation__inner-container"
            data-target="circle-notation.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px"
          ></div>
        </div>`, this.shadowRoot);
  }
  get innerHeight() {
    return this.rows * this.qubitCircleSizePx + this.paddingY * 2;
  }
  get innerWidth() {
    return this.cols * this.qubitCircleSizePx + this.paddingX * 2;
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
        return this.vertical ? this.qubitCircleSizePx * 2 : this.qubitCircleSizePx;
      case 4:
        return this.qubitCircleSizePx * 2;
      case 5:
        return this.vertical ? this.qubitCircleSizePx * 4 : this.qubitCircleSizePx * 2;
      case 6:
        return this.qubitCircleSizePx * 4;
      case 7:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 4;
      case 8:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 9:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 10:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 11:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 12:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 13:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 14:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 15:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      case 16:
        return this.vertical ? this.qubitCircleSizePx * 5 : this.qubitCircleSizePx * 8;
      default:
        throw new Ct("unsupported qubit count", this.qubitCount);
    }
  }
  get qubitCirclesAreaWidth() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSizePx * 2;
      case 2:
        return this.qubitCircleSizePx * 4;
      case 3:
        return this.vertical ? this.qubitCircleSizePx * 4 : this.qubitCircleSizePx * 8;
      case 4:
        return this.qubitCircleSizePx * 8;
      case 5:
        return this.vertical ? this.qubitCircleSizePx * 8 : this.qubitCircleSizePx * 16;
      case 6:
        return this.qubitCircleSizePx * 16;
      case 7:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 8:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 9:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 10:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 11:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 12:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 13:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 14:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 15:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      case 16:
        return this.vertical ? this.qubitCircleSizePx * 16 : this.qubitCircleSizePx * 32;
      default:
        throw new Ct("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    return this.qubitCirclesAreaHeight + this.paddingY * 2;
  }
  get windowWidth() {
    ee.notNull(this.parentElement);
    let e = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.vertical) {
      let t = this.parentElementClientWidth;
      return this.cols > 16 && e < t ? t : e;
    } else
      return e;
  }
  get parentElementClientWidth() {
    return ee.notNull(this.parentElement), this.lastParentElementClientWidth === null && (this.lastParentElementClientWidth = this.parentElement.clientWidth, window.setTimeout(() => {
      this.lastParentElementClientWidth = null;
    }, 10)), this.lastParentElementClientWidth;
  }
  redrawWindowAndInnerContainer() {
    this.window !== void 0 && (this.window.style.height = `${this.windowHeight}px`, this.window.style.width = `${this.windowWidth}px`, this.innerContainer.style.height = `${this.innerHeight}px`, this.innerContainer.style.width = `${this.innerWidth}px`);
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
        return this.vertical ? 23 : 32;
      case 6:
        return this.vertical ? 17 : 32;
      case 7:
        return 17;
      case 8:
        return 17;
      case 9:
        return 17;
      case 10:
        return 17;
      case 11:
        return 17;
      case 12:
        return 17;
      case 13:
        return 17;
      case 14:
        return 17;
      case 15:
        return 17;
      case 16:
        return 17;
      default:
        throw new Ct("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    if (this.window === void 0)
      return;
    this.colStartIndex = this.calculateColStartIndex, this.colEndIndex = this.calculateColEndIndex, this.rowStartIndex = this.calculateRowStartIndex, this.rowEndIndex = this.calculateRowEndIndex;
    let e = [];
    for (let i = this.rowStartIndex; i <= this.rowEndIndex; i++)
      for (let l = this.colStartIndex; l <= this.colEndIndex; l++)
        e.push({ col: l, row: i });
    let t = document.createDocumentFragment();
    for (let i of this.allQubitCircleElements(e))
      t.appendChild(i);
    this.innerContainer.appendChild(t);
  }
  maybeRedrawQubitCircles() {
    if (this.window === void 0)
      return;
    let e = this.calculateColStartIndex, t = this.calculateColEndIndex, i = this.calculateRowStartIndex, l = this.calculateRowEndIndex;
    if (e === void 0 || this.colStartIndex === e && this.colEndIndex === t && this.rowStartIndex === i && this.rowEndIndex === l)
      return;
    let c = [];
    for (let m = i; m <= l; m++)
      for (let b = e; b <= t; b++)
        (b < this.colStartIndex || this.colEndIndex < b || m < this.rowStartIndex || this.rowEndIndex < m) && c.push({ col: b, row: m });
    this.colStartIndex = e, this.colEndIndex = t, this.rowStartIndex = i, this.rowEndIndex = l;
    let d = document.createDocumentFragment();
    for (let m of this.allQubitCircleElements(c))
      d.appendChild(m);
    this.innerContainer.appendChild(d);
    for (let m of this.qubitCircles) {
      let b = m.getAttribute("data-col"), y = m.getAttribute("data-row");
      ee.notNull(b), ee.notNull(y);
      let w = parseInt(b), P = parseInt(y);
      if (w < e || t < w || P < i || l < P) {
        let C = m._tippy;
        C !== void 0 && C.destroy(), m.remove();
      }
    }
    this.dispatchVisibilityChangedEvent();
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let t = e.col + e.row * this.cols, i = this.qubitCircleSizePx * e.row + this.paddingY, l = this.qubitCircleSizePx * e.col + this.paddingX, c = document.createElement("div");
    c.className = "qubit-circle", c.setAttribute("data-col", e.col.toString()), c.setAttribute("data-row", e.row.toString()), c.setAttribute("data-ket", t.toString()), c.setAttribute("data-targets", "circle-notation.qubitCircles"), c.setAttribute("data-amplitude-real", "0"), c.setAttribute("data-amplitude-imag", "0"), c.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), c.style.setProperty("top", `${i}px`), c.style.setProperty("left", `${l}px`);
    let d = document.createElement("div");
    d.className = "qubit-circle__magnitude", d.style.setProperty("--magnitude", "0");
    let m = document.createElement("div");
    return m.className = "qubit-circle__phase", c.appendChild(d), c.appendChild(m), c;
  }
  get calculateColStartIndex() {
    return this.windowScrollLeft < this.paddingX ? 0 : Math.floor((this.windowScrollLeft - this.paddingX) / this.qubitCircleSizePx);
  }
  get calculateColEndIndex() {
    return this.windowScrollLeft < this.paddingX ? Math.min(this.cols - 1, Math.floor((this.windowWidth - (this.paddingX - this.windowScrollLeft)) / this.qubitCircleSizePx)) : Math.min(this.cols - 1, Math.floor((this.windowWidth + (this.windowScrollLeft - this.paddingX)) / this.qubitCircleSizePx));
  }
  get calculateRowStartIndex() {
    return this.windowScrollTop < this.paddingY ? 0 : Math.floor((this.windowScrollTop - this.paddingY) / this.qubitCircleSizePx);
  }
  get calculateRowEndIndex() {
    return this.windowScrollTop < this.paddingY ? Math.min(this.rows - 1, Math.floor((this.windowHeight - (this.paddingY - this.windowScrollTop)) / this.qubitCircleSizePx)) : Math.min(this.rows - 1, Math.floor((this.windowHeight + (this.windowScrollTop - this.paddingY)) / this.qubitCircleSizePx));
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
    let i = xt(t, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, theme: "qni" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    ee.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    ee.notNull(c);
    let d = t.getAttribute("data-amplitude-imag");
    ee.notNull(d);
    let m = parseInt(l), b = parseFloat(c), y = parseFloat(d), w = new Yt(b, y), P = w.abs(), C = w.phase() / Math.PI * 180, _ = this.qubitCirclePopupTemplate.content.querySelector(".ket-binary"), z = this.qubitCirclePopupTemplate.content.querySelector(".ket-decimal"), S = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-real"), M = this.qubitCirclePopupTemplate.content.querySelector(".amplitude-imag"), A = this.qubitCirclePopupTemplate.content.querySelector(".probability"), I = this.qubitCirclePopupTemplate.content.querySelector(".phase");
    _ && (_.textContent = m.toString(2).padStart(this.qubitCount, "0")), z && (z.textContent = m.toString()), S && (S.textContent = er(w.real, 5)), M && (M.textContent = `${er(w.imag, 5)}i`), A && (A.textContent = `${er(P * P * 100, 4)}%`), I && (I.textContent = `${er(C, 2)}\xB0`);
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
}, "it");
u(it, "CircleNotationElement"), k([G], it.prototype, "qubitCount", 2), k([G], it.prototype, "qubitCircleSize", 2), k([G], it.prototype, "cols", 2), k([G], it.prototype, "rows", 2), k([G], it.prototype, "paddingX", 2), k([G], it.prototype, "paddingY", 2), k([G], it.prototype, "colStartIndex", 2), k([G], it.prototype, "colEndIndex", 2), k([G], it.prototype, "rowStartIndex", 2), k([G], it.prototype, "rowEndIndex", 2), k([G], it.prototype, "vertical", 2), k([G], it.prototype, "qubitCirclePopupTemplateId", 2), k([ze], it.prototype, "window", 2), k([ze], it.prototype, "innerContainer", 2), k([Bt], it.prototype, "qubitCircles", 2), it = k([ne], it);
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
      let d = Yt.from(l);
      c.setAttribute("data-amplitude-real", d.real.toString()), c.setAttribute("data-amplitude-imag", d.imag.toString());
      let m = d.abs();
      this.setRoundedMagnitude(c, m);
      let b = d.phase() / Math.PI * 180;
      this.setRoundedPhase(c, b);
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
    if (te(Z`<style>
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
    let t = Z``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (d) => this.qubitCircleGroup(d, (m) => this.qubitCircleGroup(m, (b) => this.qubitCircleGroup(b, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = Z`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, d = 1) => c.reduce((m, b, y) => y % d ? m : [...m, c.slice(y, y + d)], []), "arrayChunk")(e, i).map((c) => {
      let d = Z``;
      if (t)
        for (let m of t(c))
          d = Z`${d} ${m}`;
      else
        for (let m of c)
          d = Z`${d} ${this.qubitCircleHtml(m)}`;
      return i === 64 ? Z`<div class="qubit-circle-group--size${i}" data-targets="circle-notation-old.qubitCircleGroups">
          ${d}
        </div>` : Z`<div class="qubit-circle-group--size${i}">${d}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = xt(e);
    yp(t, { allowHTML: true, animation: false, arrow: Kt + Kt, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), d = t.getAttribute("data-magnitude"), m = t.getAttribute("data-phase"), b;
    l === null || c === null ? b = Yt.ZERO : b = new Yt(parseFloat(l), parseFloat(c));
    let y;
    d && parseFloat(d) === 0 ? y = 0 : y = m ? parseFloat(m) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, b, d ? parseFloat(d) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, d, m) {
    t._tippy.setContent(this.popupContent(e, i, l, c, d, m));
  }
  popupContent(e, t, i, l, c, d) {
    let m = e.querySelector(".ket-binary"), b = e.querySelector(".ket-decimal"), y = e.querySelector(".amplitude-real"), w = e.querySelector(".amplitude-imag"), P = e.querySelector(".probability"), C = e.querySelector(".phase");
    m && (m.textContent = t.toString(2).padStart(d, "0")), b && (b.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), w && (w.textContent = `${this.forceSigned(i.imag, 5)}i`), P && (P.textContent = `${this.forceSigned(l * l * 100, 4)}%`), C && (C.textContent = `${this.forceSigned(c, 2)}\xB0`);
    let _ = document.createElement("div");
    return _.appendChild(e.cloneNode(true)), _.innerHTML;
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
u(fr, "CircleNotationOldElement"), k([G], fr.prototype, "qubitCount", 2), k([G], fr.prototype, "size", 2), k([G], fr.prototype, "magnitudes", 2), k([G], fr.prototype, "phases", 2), k([G], fr.prototype, "multiQubits", 2), k([G], fr.prototype, "showKets", 2), k([Bt], fr.prototype, "qubitCircles", 2), k([Bt], fr.prototype, "qubitCircleGroups", 2), k([Bt], fr.prototype, "visibleQubitCircleGroups", 2);
ne(fr);
var Ml = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    te(Z`<slot></slot>`, this.shadowRoot);
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
    this.popup = xt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
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
    return te(Z`${t}`, i), i;
  }
}, "Ml");
u(Ml, "InspectorButtonElement");
ne(Ml);
var Mt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return $u(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Fr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), wn(e)) {
      let t = Bi(e.angle);
      xo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Va(e) || Xa(e) || Ya(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    zn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    te(Z`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!Ol(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!Ol(t))
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
    if (Hu(e)) {
      let t, i = Bi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), ju(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Bu(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Ap(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Mt");
u(Mt, "OperationInspectorElement"), k([ze], Mt.prototype, "ifInput", 2), k([ze], Mt.prototype, "angleInputLabel", 2), k([ze], Mt.prototype, "angleInput", 2), k([ze], Mt.prototype, "angleSlider", 2), k([ze], Mt.prototype, "denominatorInput", 2), k([ze], Mt.prototype, "denominatorVariableLabel", 2), k([ze], Mt.prototype, "denominatorLabel", 2), k([ze], Mt.prototype, "reduceAngleFractionCheckbox", 2), k([ze], Mt.prototype, "flagInput", 2), k([G], Mt.prototype, "conditionalGatePaneDisabled", 2), k([G], Mt.prototype, "anglePaneDisabled", 2), k([G], Mt.prototype, "conditionalFlagPaneDisabled", 2);
ne(Mt);
var ed = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var td = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var $n = /* @__PURE__ */ __name(class extends HTMLElement {
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
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, d = this.getBoundingClientRect(), m = d.left + window.pageXOffset, b = d.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (m + c)}px`, i.style.top = `${t.clientY - (b + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = at(this.runCircuitButtonMachine).onTransition((e) => {
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
    te(Z`<style>
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
    return Z([ed]);
  }
  get tailSpinIcon() {
    return Z([td]);
  }
}, "$n");
u($n, "RunCircuitButtonElement"), k([G], $n.prototype, "running", 2), k([G], $n.prototype, "debug", 2), k([ze], $n.prototype, "body", 2), k([ze], $n.prototype, "ripple", 2);
ne($n);
var ln = /* @__PURE__ */ __name(class extends HTMLElement {
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
    te(Z`<style>
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
}, "ln");
u(ln, "CircuitBlockElement"), k([G], ln.prototype, "comment", 2), k([G], ln.prototype, "finalized", 2), ln = k([ne], ln);
var nd = Ko(Aa(), 1);
var rd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Pl = u((r) => r != null && r instanceof wt, "isCircuitDropzoneElement");
var Eo;
var wt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ea(this, Eo, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = gt({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
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
    let { signal: e } = ta(this, Eo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: e }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: e }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Qo(this, Eo)) == null || e.abort();
  }
  update() {
    te(Z`<style>
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, nd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    return Z([rd]);
  }
}, "wt");
u(wt, "CircuitDropzoneElement"), Eo = /* @__PURE__ */ new WeakMap(), k([G], wt.prototype, "operationName", 2), k([G], wt.prototype, "inputWireQuantum", 2), k([G], wt.prototype, "outputWireQuantum", 2), k([G], wt.prototype, "connectTop", 2), k([G], wt.prototype, "connectBottom", 2), k([G], wt.prototype, "shadow", 2), k([G], wt.prototype, "debug", 2);
ne(wt);
var un = u((r) => r != null && r instanceof Dt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let d = e(i, l, c), m = t.get(d);
  return m ? m.push(i) : t.set(d, [i]), t;
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
    this.circuitStepService = at(this.circuitStepMachine).onTransition((e) => {
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
    te(Z`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      En(l.operation) && (l.operation.controls = []);
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
        c.operation.enable(), c.connectTop = i.some((m) => this.bit(m) < this.bit(c)), c.connectBottom = i.some((m) => this.bit(m) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let d = Math.min(...l), m = Math.max(...l);
        d < this.bit(c) && this.bit(c) < m && (c.connectTop = true, c.connectBottom = true);
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
        if (!xo(d.operation))
          throw new Error(`${d.operation} isn't a phase-gate element.`);
        return l.angle === d.operation.angle;
      }).map((d) => this.bit(d));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((d) => d < this.bit(i)), i.connectBottom = c.some((d) => d > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((b) => b.connectTop || b.connectBottom).map((b) => this.bit(b)), d = Math.min(...c), m = Math.max(...c);
      d < this.bit(i) && this.bit(i) < m && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let d = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? d.disable() : (d.enable(), c.connectTop = i.some((m) => this.bit(c) > m), c.connectBottom = i.some((m) => this.bit(c) < m));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((w) => w.operationName))], c = this.numControlGateDropzones(e, l), d = i.map((w) => this.bit(w)), m = c === null ? d : d.slice(0, c), b = t.map((w) => this.bit(w)), y = m.concat(b);
    for (let [w, P] of Object.entries(i)) {
      let C = P.operation;
      P.connectBottom = y.some((_) => this.bit(P) < _), P.connectTop = y.some((_) => this.bit(P) > _), c === null || c !== null && parseInt(w) < c ? C.enable() : (P.connectTop = Math.max(...y) > this.bit(P), C.disable());
    }
    for (let w of t) {
      if (!En(w.operation))
        throw new Error(`${w.operation} isn't controllable.`);
      w.operation.controls = this.controlBits(w, d, e), w.connectTop = y.some((P) => P < this.bit(w)), w.connectBottom = y.some((P) => P > this.bit(w));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((b) => Cl(b.operation) && !b.operation.disabled).map((b) => this.bit(b)), l = t.map((b) => this.bit(b)), c = i.concat(l), d = Math.min(...c), m = Math.max(...c);
    for (let b of this.freeDropzones)
      d < this.bit(b) && this.bit(b) < m && (b.connectTop = true, b.connectBottom = true);
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
    let e = new wt();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new wt();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && Cl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, d = 0, m = 0, b = 0, y = 0, w = 0, P = 0;
    return this.dropzones.filter((C) => C.occupied).filter((C) => En(C.operation)).filter((C) => e === void 0 ? true : Wp(C.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Up(C.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : Vp(C.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Xp(C.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : xo(C.operation) ? (d += 1, e.maxCphaseTargetGates !== 0 && d > e.maxCphaseTargetGates ? false : !e.disableCphase) : Yp(C.operation) ? (m += 1, e.maxCtTargetGates !== 0 && m > e.maxCtTargetGates ? false : !e.disableCt) : Zp(C.operation) ? (b += 1, e.maxCrnotTargetGates !== 0 && b > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Va(C.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : Xa(C.operation) ? (w += 1, e.maxCryTargetGates !== 0 && w > e.maxCryTargetGates ? false : !e.disableCry) : Ya(C.operation) ? (P += 1, e.maxCrzTargetGates !== 0 && P > e.maxCrzTargetGates ? false : !e.disableCrz) : Jp(C.operation) ? !e.disableCswap : true);
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
          for (let [c, d] of Ge(l, (m) => m.if))
            for (let [m, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, P = b.map((_) => _.bit), C = { type: w, targets: P };
              c !== "" && (C.if = c), m !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.if))
            for (let [m, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, P = b.map((_) => _.bit), C = { type: w, targets: P };
              c !== "" && (C.if = c), m !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.if))
            for (let [m, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, P = b.map((_) => _.bit), C = { type: w, targets: P };
              c !== "" && (C.if = c), m !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case dr: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.if))
            for (let [m, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, P = b.map((_) => _.bit), C = { type: w, targets: P };
              c !== "" && (C.if = c), m !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.angle))
            for (let [m, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (P) => P.controls.toString())) {
                let P = w[0], C = P.operationType, _ = w.map((S) => S.bit), z = { type: C, targets: _ };
                m !== "" && (z.if = m), c !== "" && (z.angle = c), y !== "" && (z.controls = P.controls), e.push(z);
              }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.if))
            for (let [m, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, P = b.map((_) => _.bit), C = { type: w, targets: P };
              c !== "" && (C.if = c), m !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.if))
            for (let [m, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, P = b.map((_) => _.bit), C = { type: w, targets: P };
              c !== "" && (C.if = c), m !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.angle))
            for (let [m, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (P) => P.controls.toString())) {
                let P = w[0], C = P.operationType, _ = w.map((S) => S.bit), z = { type: C, targets: _ };
                m !== "" && (z.if = m), c !== "" && (z.angle = c), y !== "" && (z.controls = P.controls), e.push(z);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.angle))
            for (let [m, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (P) => P.controls.toString())) {
                let P = w[0], C = P.operationType, _ = w.map((S) => S.bit), z = { type: C, targets: _ };
                m !== "" && (z.if = m), c !== "" && (z.angle = c), y !== "" && (z.controls = P.controls), e.push(z);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.angle))
            for (let [m, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (P) => P.controls.toString())) {
                let P = w[0], C = P.operationType, _ = w.map((S) => S.bit), z = { type: C, targets: _ };
                m !== "" && (z.if = m), c !== "" && (z.angle = c), y !== "" && (z.controls = P.controls), e.push(z);
              }
          break;
        }
        case lr: {
          let l = i.filter((b) => !b.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, d = l[0].controls, m = { type: c, targets: [l[0].bit, l[1].bit] };
          d !== void 0 && d.length > 0 && (m.controls = d), e.push(m);
          break;
        }
        case $t: {
          let l = i.filter((d) => !d.disabled);
          if (l.length < 2 || this.operations.some((d) => En(d) && d.controls.length > 0))
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
        case Ft: {
          let l = i;
          for (let [, c] of Ge(l, (d) => d.value)) {
            let d = c.map((m) => m.bit);
            e.push({ type: c[0].operationType, targets: d });
          }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, d] of Ge(l, (m) => m.flag)) {
            let m = d.map((w) => w.bit), y = { type: d[0].operationType, targets: m };
            c !== "" && (y.flag = c), e.push(y);
          }
          break;
        }
        default:
          throw new Ct("Unrecognized operation", { klass: t });
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
u(Dt, "CircuitStepElement"), k([G], Dt.prototype, "active", 2), k([G], Dt.prototype, "breakpoint", 2), k([G], Dt.prototype, "shadow", 2), k([G], Dt.prototype, "keep", 2), k([G], Dt.prototype, "debug", 2);
ne(Dt);
var yi = /* @__PURE__ */ __name(class extends HTMLElement {
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
        ee.notNull(c);
        let d = this.circuit.addShadowStepAfter(c), m = d.dropzones[l.wireIndex];
        ee.notNull(m), m.append(i), m.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d.dropzones);
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
      _p(i) && i.initMenu();
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
      this.debug && console.log(`circuit-editor: ${Qe(e.value)}`);
    });
  }
  connectedCallback() {
    this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable);
  }
  update() {
    te(Z`<slot></slot>`, this.shadowRoot);
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
    if (!wn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!zn(t))
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
    if (ee.notNull(i), !wn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!zn(i))
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
    if (!un(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!un(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!un(t))
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
    if (!un(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!un(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "yi");
u(yi, "CircuitEditorElement"), k([G], yi.prototype, "debug", 2), k([ze], yi.prototype, "circuit", 2), k([ze], yi.prototype, "inspectorButton", 2);
ne(yi);
var So;
var _l = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ea(this, So, null);
  }
  connectedCallback() {
    let { signal: e } = ta(this, So, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Qo(this, So)) == null || e.abort();
  }
  update() {
    te(Z`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, wl(e) && e.initHelp();
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
    this.assertOperation(i), wl(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!ut(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "_l");
u(_l, "PaletteDropzoneElement"), So = /* @__PURE__ */ new WeakMap();
ne(_l);
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
      this.append(new Dt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return ee.notNull(t), t;
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
    te(Z`<slot></slot>`, this.shadowRoot);
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
    return this.applyOperationToTargets(() => new nt(), ...e), this;
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
    let l = [].concat(t), c = [].concat(i), d = l.concat(c), m = Math.max(...d) + 1, b = this.appendStepWithDropzones(m);
    for (let y of l)
      b.dropzoneAt(y).put(new $t());
    for (let y of c)
      b.dropzoneAt(y).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(b);
  }
  appendStep() {
    let e = new Dt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Dt();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new wt();
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
      for (let m of c) {
        switch (true) {
          case /^\|0>$/.test(m): {
            let b = new Ft();
            b.value = "0", d.appendOperation(b);
            break;
          }
          case /^\|1>$/.test(m): {
            let b = new Ft();
            b.value = "1", d.appendOperation(b);
            break;
          }
          case /^H/.test(m): {
            let b = new tr();
            b.if = this.ifVariable(m.slice(1)), d.appendOperation(b);
            break;
          }
          case (/^X$/.test(m) || /^X<(.+)$/.test(m)): {
            let b = new cr();
            b.if = m.slice(2).trim(), d.appendOperation(b);
            break;
          }
          case /^Y/.test(m): {
            let b = new pr();
            b.if = this.ifVariable(m.slice(1)), d.appendOperation(b);
            break;
          }
          case /^Z/.test(m): {
            let b = new dr();
            b.if = this.ifVariable(m.slice(1)), d.appendOperation(b);
            break;
          }
          case /^P/.test(m): {
            let b = new nr();
            b.angle = this.angleParameter(m.slice(1)), d.appendOperation(b);
            break;
          }
          case /^T/.test(m): {
            let b = new ur();
            b.if = this.ifVariable(m.slice(1)), d.appendOperation(b);
            break;
          }
          case /^X\^½/.test(m): {
            let b = new ir();
            b.if = this.ifVariable(m.slice(3)), d.appendOperation(b);
            break;
          }
          case /^Rx/.test(m): {
            let b = new or();
            b.angle = this.angleParameter(m.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Ry/.test(m): {
            let b = new ar();
            b.angle = this.angleParameter(m.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Rz/.test(m): {
            let b = new sr();
            b.angle = this.angleParameter(m.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Swap$/.test(m): {
            let b = new lr();
            d.appendOperation(b);
            break;
          }
          case /^•$/.test(m): {
            let b = new $t();
            d.appendOperation(b);
            break;
          }
          case /^Bloch$/.test(m): {
            let b = new nt();
            d.appendOperation(b);
            break;
          }
          case /^Measure/.test(m): {
            let b = new rr(), y = ((/^>(.+)$/.exec(m.slice(7)) || [])[1] || "").trim();
            b.flag = y, d.appendOperation(b);
            break;
          }
          case /^[[{](.+)$/.test(m): {
            let b = m.slice(1);
            d.remove(), t = new ln(), t.comment = b, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(m): {
            d.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (m !== 1)
              throw new Error(`Unknown operation: ${m}`);
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
          let d = c.map((w) => i.bit(w)), m = i.bit(l), b = d[0] === m ? d[1] : d[0], y = i.dropzoneAt(b);
          l.inputWireQuantum = t, l.outputWireQuantum = y.inputWireQuantum, t = y.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!un(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Pl(i))
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
    Pl(l) && t.push(l);
    for (let [c, d] of Object.entries(this.dropzones)) {
      let m = d.snapTarget, b = this.isVertical ? m.y : m.x, y = this.isVertical ? m.x : m.y, w = parseInt(c) % this.wireCount, P = b - e.snapRange * 0.75, C = b + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: y, y: P }) : i.push({ x: P, y }), this.snapTargets[P] === void 0 && (this.snapTargets[P] = {}), this.snapTargets[P][y] === void 0 && (this.snapTargets[P][y] = { dropzone: null, stepIndex: -1, wireIndex: w })), this.isVertical ? i.push({ x: y, y: C }) : i.push({ x: C, y }), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][y] === void 0 && (this.snapTargets[C][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: w }), (!d.occupied || d === l) && i.push(m), this.snapTargets[b] === void 0 && (this.snapTargets[b] = {}), this.snapTargets[b][y] === void 0 && (this.snapTargets[b][y] = { dropzone: d, stepIndex: null, wireIndex: w });
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
          let m = c[d];
          m.stepIndex !== null && (m.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let d = c.snapTarget, m = this.isVertical ? d.y : d.x, b = this.isVertical ? d.x : d.y;
      ee.notNull(this.snapTargets[m]), this.snapTargets[m][b] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), k([G], se.prototype, "minStepCount", 2), k([G], se.prototype, "minWireCount", 2), k([G], se.prototype, "maxWireCount", 2), k([G], se.prototype, "editing", 2), k([G], se.prototype, "updateUrl", 2), k([G], se.prototype, "json", 2), k([G], se.prototype, "circuitTitle", 2), k([G], se.prototype, "debug", 2), k([G], se.prototype, "chDisabled", 2), k([G], se.prototype, "chMaxControlGates", 2), k([G], se.prototype, "chMaxTargetGates", 2), k([G], se.prototype, "cnotDisabled", 2), k([G], se.prototype, "cnotMaxControlGates", 2), k([G], se.prototype, "cnotMaxTargetGates", 2), k([G], se.prototype, "cyDisabled", 2), k([G], se.prototype, "cyMaxControlGates", 2), k([G], se.prototype, "cyMaxTargetGates", 2), k([G], se.prototype, "czDisabled", 2), k([G], se.prototype, "czMaxControlGates", 2), k([G], se.prototype, "czMaxTargetGates", 2), k([G], se.prototype, "cphaseDisabled", 2), k([G], se.prototype, "cphaseMaxControlGates", 2), k([G], se.prototype, "cphaseMaxTargetGates", 2), k([G], se.prototype, "ctDisabled", 2), k([G], se.prototype, "ctMaxControlGates", 2), k([G], se.prototype, "ctMaxTargetGates", 2), k([G], se.prototype, "crnotDisabled", 2), k([G], se.prototype, "crnotMaxControlGates", 2), k([G], se.prototype, "crnotMaxTargetGates", 2), k([G], se.prototype, "crxDisabled", 2), k([G], se.prototype, "crxMaxControlGates", 2), k([G], se.prototype, "crxMaxTargetGates", 2), k([G], se.prototype, "cryDisabled", 2), k([G], se.prototype, "cryMaxControlGates", 2), k([G], se.prototype, "cryMaxTargetGates", 2), k([G], se.prototype, "crzDisabled", 2), k([G], se.prototype, "crzMaxControlGates", 2), k([G], se.prototype, "crzMaxTargetGates", 2), k([G], se.prototype, "cswapDisabled", 2), k([G], se.prototype, "cswapMaxControlGates", 2), k([G], se.prototype, "swapDisabled", 2), k([G], se.prototype, "controlControlDisabled", 2), k([G], se.prototype, "controlControlMaxTargetGates", 2), k([G], se.prototype, "phasePhaseDisabled", 2), k([G], se.prototype, "phasePhaseMaxTargetGates", 2), k([Bt], se.prototype, "blocks", 2);
ne(se);
var Fn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-init", this.run), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    te(Z`<slot></slot>`, this.shadowRoot);
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
          let m = parseInt(d), b = c.dropzoneAt(m).operation;
          if (Kp(b)) {
            let y = t.blochVectors[m];
            b.x = y[0], b.y = y[1], b.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d = t.measuredBits;
          for (let m in d) {
            let b = parseInt(m), y = c.dropzoneAt(b).operation;
            Qp(y) && (y.value = d[b].toString());
          }
        }
        for (let d of c.dropzones) {
          let m = d.operation;
          !Fr(m) || m.if !== "" && (m.disabled = !t.flags[m.if]);
        }
        if (i === t.step) {
          let d = {};
          for (let m in t.amplitudes) {
            let b = t.amplitudes[m];
            d[m] = new Yt(b[0], b[1]);
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
        throw new Ct("Unknown service worker message", { data: t });
    }
  }
  run() {
    let e = this.activeStepIndex, t = this.circuit.serialize();
    ee.need(t.length > 0, "non-zero step length");
    let i = Math.max(...t.map((c) => Math.max(...c.map((d) => {
      let m = [];
      return En(d) && (m = d.controls), Math.max(...d.targets.concat(m));
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
}, "Fn");
u(Fn, "QuantumSimulatorElement"), k([G], Fn.prototype, "updateUrl", 2), k([ze], Fn.prototype, "circuit", 2), k([ze], Fn.prototype, "circleNotation", 2), k([Bt], Fn.prototype, "runCircuitButtons", 2);
ne(Fn);

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
