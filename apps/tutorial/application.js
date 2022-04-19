var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var yf = Object.create;
var Gi = Object.defineProperty;
var _u = Object.getOwnPropertyDescriptor;
var xf = Object.getOwnPropertyNames;
var wf = Object.getPrototypeOf;
var Ef = Object.prototype.hasOwnProperty;
var Sf = /* @__PURE__ */ __name((r) => Gi(r, "__esModule", { value: true }), "Sf");
var u = /* @__PURE__ */ __name((r, e) => Gi(r, "name", { value: e, configurable: true }), "u");
var Mu = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "Mu");
var Tf = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of xf(e))
      !Ef.call(r, l) && (t || l !== "default") && Gi(r, l, { get: () => e[l], enumerable: !(i = _u(e, l)) || i.enumerable });
  return r;
}, "Tf");
var Xo = /* @__PURE__ */ __name((r, e) => Tf(Sf(Gi(r != null ? yf(wf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Xo");
var k = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? _u(e, t) : e, c = r.length - 1, d; c >= 0; c--)
    (d = r[c]) && (l = (i ? d(e, t, l) : d(l)) || l);
  return i && l && Gi(e, t, l), l;
}, "k");
var Pu = Mu((vs, Au) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(S) {
      function _() {
        var I = Error.apply(this, arguments);
        I.name = this.name = S, this.stack = I.stack, this.message = I.message;
      }
      __name(_, "_");
      u(_, "errorConstructor");
      function P() {
      }
      __name(P, "P");
      return u(P, "IntermediateInheritor"), P.prototype = Error.prototype, _.prototype = new P(), _;
    }
    __name(i, "i");
    u(i, "createError");
    var l = R.DivisionByZero = i("DivisionByZero"), c = R.InvalidParameter = i("InvalidParameter");
    function d(S, _) {
      return isNaN(S = parseInt(S, 10)) && v(), S * _;
    }
    __name(d, "d");
    u(d, "assign");
    function v() {
      throw new c();
    }
    __name(v, "v");
    u(v, "throwInvalidParam");
    function b(S) {
      for (var _ = {}, P = S, I = 2, L = 4; L <= P; ) {
        for (; P % I === 0; )
          P /= I, _[I] = (_[I] || 0) + 1;
        L += 1 + 2 * I++;
      }
      return P !== S ? P > 1 && (_[P] = (_[P] || 0) + 1) : _[S] = (_[S] || 0) + 1, _;
    }
    __name(b, "b");
    u(b, "factorize");
    var y = u(function(S, _) {
      var P = 0, I = 1, L = 1, E = 0, B = 0, z = 0, X = 1, V = 1, H = 0, U = 1, re = 1, ie = 1, W = 1e7, ue;
      if (S != null)
        if (_ !== void 0)
          P = S, I = _, L = P * I;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (P = S.n, I = S.d, "s" in S && (P *= S.s)) : 0 in S ? (P = S[0], 1 in S && (I = S[1])) : v(), L = P * I;
              break;
            }
            case "number": {
              if (S < 0 && (L = S, S = -S), S % 1 === 0)
                P = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); U <= W && ie <= W; )
                  if (ue = (H + re) / (U + ie), S === ue) {
                    U + ie <= W ? (P = H + re, I = U + ie) : ie > U ? (P = re, I = ie) : (P = H, I = U);
                    break;
                  } else
                    S > ue ? (H += re, U += ie) : (re += H, ie += U), U > W ? (P = re, I = ie) : (P = H, I = U);
                P *= V;
              } else
                (isNaN(S) || isNaN(_)) && (I = P = NaN);
              break;
            }
            case "string":
              if (U = S.match(/\d+|./g), U === null && v(), U[H] === "-" ? (L = -1, H++) : U[H] === "+" && H++, U.length === H + 1 ? B = d(U[H++], L) : U[H + 1] === "." || U[H] === "." ? (U[H] !== "." && (E = d(U[H++], L)), H++, (H + 1 === U.length || U[H + 1] === "(" && U[H + 3] === ")" || U[H + 1] === "'" && U[H + 3] === "'") && (B = d(U[H], L), X = Math.pow(10, U[H].length), H++), (U[H] === "(" && U[H + 2] === ")" || U[H] === "'" && U[H + 2] === "'") && (z = d(U[H + 1], L), V = Math.pow(10, U[H + 1].length) - 1, H += 3)) : U[H + 1] === "/" || U[H + 1] === ":" ? (B = d(U[H], L), X = d(U[H + 2], 1), H += 3) : U[H + 3] === "/" && U[H + 1] === " " && (E = d(U[H], L), B = d(U[H + 2], L), X = d(U[H + 4], 1), H += 5), U.length <= H) {
                I = X * V, L = P = z + I * E + V * B;
                break;
              }
            default:
              v();
          }
      if (I === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(P), t.d = Math.abs(I);
    }, "parse");
    function w(S, _, P) {
      for (var I = 1; _ > 0; S = S * S % P, _ >>= 1)
        _ & 1 && (I = I * S % P);
      return I;
    }
    __name(w, "w");
    u(w, "modpow");
    function A(S, _) {
      for (; _ % 2 === 0; _ /= 2)
        ;
      for (; _ % 5 === 0; _ /= 5)
        ;
      if (_ === 1)
        return 0;
      for (var P = 10 % _, I = 1; P !== 1; I++)
        if (P = P * 10 % _, I > e)
          return 0;
      return I;
    }
    __name(A, "A");
    u(A, "cycleLen");
    function O(S, _, P) {
      for (var I = 1, L = w(10, P, _), E = 0; E < 300; E++) {
        if (I === L)
          return E;
        I = I * 10 % _, L = L * 10 % _;
      }
      return 0;
    }
    __name(O, "O");
    u(O, "cycleStart");
    function M(S, _) {
      if (!S)
        return _;
      if (!_)
        return S;
      for (; ; ) {
        if (S %= _, !S)
          return _;
        if (_ %= S, !_)
          return S;
      }
    }
    __name(M, "M");
    u(M, "gcd");
    function R(S, _) {
      if (!(this instanceof R))
        return new R(S, _);
      y(S, _), S = M(t.d, t.n), this.s = t.s, this.n = t.n / S, this.d = t.d / S;
    }
    __name(R, "R");
    u(R, "Fraction"), R.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new R(this.n, this.d);
    }, neg: function() {
      return new R(-this.s * this.n, this.d);
    }, add: function(S, _) {
      return y(S, _), new R(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(S, _) {
      return y(S, _), new R(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(S, _) {
      return y(S, _), new R(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(S, _) {
      return y(S, _), new R(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new R(this);
    }, mod: function(S, _) {
      return isNaN(this.n) || isNaN(this.d) ? new R(NaN) : S === void 0 ? new R(this.s * this.n % this.d, 1) : (y(S, _), t.n === 0 && this.d === 0 && R(0, 0), new R(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(S, _) {
      return y(S, _), new R(M(t.n, this.n) * M(t.d, this.d), t.d * this.d);
    }, lcm: function(S, _) {
      return y(S, _), t.n === 0 && this.n === 0 ? new R() : new R(t.n * this.n, M(t.n, this.n) * M(t.d, this.d));
    }, ceil: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new R(NaN) : new R(Math.ceil(S * this.s * this.n / this.d), S);
    }, floor: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new R(NaN) : new R(Math.floor(S * this.s * this.n / this.d), S);
    }, round: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new R(NaN) : new R(Math.round(S * this.s * this.n / this.d), S);
    }, inverse: function() {
      return new R(this.s * this.d, this.n);
    }, pow: function(S, _) {
      if (y(S, _), t.d === 1)
        return t.s < 0 ? new R(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new R(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var P = b(this.n), I = b(this.d), L = 1, E = 1;
      for (var B in P)
        if (B !== "1") {
          if (B === "0") {
            L = 0;
            break;
          }
          if (P[B] *= t.n, P[B] % t.d === 0)
            P[B] /= t.d;
          else
            return null;
          L *= Math.pow(B, P[B]);
        }
      for (var B in I)
        if (B !== "1") {
          if (I[B] *= t.n, I[B] % t.d === 0)
            I[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, I[B]);
        }
      return t.s < 0 ? new R(E, L) : new R(L, E);
    }, equals: function(S, _) {
      return y(S, _), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(S, _) {
      y(S, _);
      var P = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < P) - (P < 0);
    }, simplify: function(S) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var _ = this.abs().toContinued();
      S = S || 1e-3;
      function P(E) {
        return E.length === 1 ? new R(E[0]) : P(E.slice(1)).inverse().add(E[0]);
      }
      __name(P, "P");
      u(P, "rec");
      for (var I = 0; I < _.length; I++) {
        var L = P(_.slice(0, I + 1));
        if (L.sub(this.abs()).abs().valueOf() < S)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(S, _) {
      return y(S, _), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var _, P = "", I = this.n, L = this.d;
      return this.s < 0 && (P += "-"), L === 1 ? P += I : (S && (_ = Math.floor(I / L)) > 0 && (P += _, P += " ", I %= L), P += I, P += "/", P += L), P;
    }, toLatex: function(S) {
      var _, P = "", I = this.n, L = this.d;
      return this.s < 0 && (P += "-"), L === 1 ? P += I : (S && (_ = Math.floor(I / L)) > 0 && (P += _, I %= L), P += "\\frac{", P += I, P += "}{", P += L, P += "}"), P;
    }, toContinued: function() {
      var S, _ = this.n, P = this.d, I = [];
      if (isNaN(_) || isNaN(P))
        return I;
      do
        I.push(Math.floor(_ / P)), S = _ % P, _ = P, P = S;
      while (_ !== 1);
      return I;
    }, toString: function(S) {
      var _, P = this.n, I = this.d;
      if (isNaN(P) || isNaN(I))
        return "NaN";
      S = S || 15;
      var L = A(P, I), E = O(P, I, L), B = this.s === -1 ? "-" : "";
      if (B += P / I | 0, P %= I, P *= 10, P && (B += "."), L) {
        for (var z = E; z--; )
          B += P / I | 0, P %= I, P *= 10;
        B += "(";
        for (var z = L; z--; )
          B += P / I | 0, P %= I, P *= 10;
        B += ")";
      } else
        for (var z = S; P && z--; )
          B += P / I | 0, P %= I, P *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return R;
    }) : typeof vs == "object" ? (Object.defineProperty(R, "__esModule", { value: true }), R.default = R, R.Fraction = R, Au.exports = R) : r.Fraction = R;
  })(vs);
});
var Ta = Mu((Mc, Ws) => {
  (function(r) {
    typeof Mc == "object" && typeof Ws != "undefined" ? Ws.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    var v = u(function(n) {
      return !!n && d(n) === "object";
    }, "s"), b = u(function(n) {
      return typeof n == "function";
    }, "l"), y = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return v(n) && n.nodeType === 11;
    }, object: v, func: b, number: function(n) {
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
      return v(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return v(n) && n.length !== void 0 && b(n.splice);
    } };
    c.default = y;
    var w = {};
    function A(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(A, "A");
    u(A, "f");
    function O(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p = s === "x" ? "y" : "x";
          o.page[p] = a.coords.start.page[p], o.client[p] = a.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    __name(O, "O");
    u(O, "d"), Object.defineProperty(w, "__esModule", { value: true }), w.default = void 0;
    var M = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = M.draggable, o.map.drag = M, o.methodDict.drag = "draggable", s.actions.drag = M.defaults;
    }, listeners: { "interactions:before-action-move": A, "interactions:action-resume": A, "interactions:action-move": O, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: A, move: O, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, R = M;
    w.default = R;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: true }), S.default = void 0;
    var _ = { init: function(n) {
      var o = n;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || P, _.SVGElement = o.SVGElement || P, _.SVGSVGElement = o.SVGSVGElement || P, _.SVGElementInstance = o.SVGElementInstance || P, _.Element = o.Element || P, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || P, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function P() {
    }
    __name(P, "P");
    u(P, "y");
    var I = _;
    S.default = I;
    var L = {};
    Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var E = { init: function(n) {
      var o = S.default.Element, a = n.navigator || {};
      E.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && S.default.document instanceof n.DocumentTouch, E.supportsPointerEvent = a.pointerEnabled !== false && !!S.default.PointerEvent, E.isIOS = /iP(hone|od|ad)/.test(a.platform), E.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), E.isIe9 = /MSIE 9/.test(a.userAgent), E.isOperaMobile = a.appName === "Opera" && E.supportsTouch && /Presto/.test(a.userAgent), E.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", E.pEventTypes = E.supportsPointerEvent ? S.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, E.wheelEvent = S.default.document && "onmousewheel" in S.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = E;
    L.default = B;
    var z = {};
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
    u(V, "O"), Object.defineProperty(z, "__esModule", { value: true }), z.nodeContains = function(n, o) {
      if (n.contains)
        return n.contains(o);
      for (; o; ) {
        if (o === n)
          return true;
        o = o.parentNode;
      }
      return false;
    }, z.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return n;
        n = X(n);
      }
      return null;
    }, z.parentNode = X, z.matchesSelector = V, z.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], f = n[o];
        if (p && s !== o)
          if (f) {
            var m = H(p), h = H(f);
            if (m !== p.ownerDocument)
              if (h !== p.ownerDocument)
                if (m !== h) {
                  a = a.length ? a : U(f);
                  var g = void 0;
                  if (f instanceof S.default.HTMLElement && p instanceof S.default.SVGElement && !(p instanceof S.default.SVGSVGElement)) {
                    if (p === h)
                      continue;
                    g = p.ownerSVGElement;
                  } else
                    g = p;
                  for (var x = U(g, f.ownerDocument), T = 0; x[T] && x[T] === a[T]; )
                    T++;
                  var C = [x[T - 1], x[T], a[T]];
                  if (C[0])
                    for (var N = C[0].lastChild; N; ) {
                      if (N === C[1]) {
                        o = s, a = x;
                        break;
                      }
                      if (N === C[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  G = p, D = f, (parseInt(e.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(e.getWindow(D).getComputedStyle(D).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var G, D;
      return o;
    }, z.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return true;
        if ((n = X(n)) === a)
          return V(n, o);
      }
      return false;
    }, z.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, z.getScrollXY = re, z.getElementClientRect = ie, z.getElementRect = function(n) {
      var o = ie(n);
      if (!L.default.isIOS7 && o) {
        var a = re(e.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, z.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = X(n);
      return o;
    }, z.trySelector = function(n) {
      return !!c.default.string(n) && (S.default.document.querySelector(n), true);
    };
    var H = u(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function U(n, o) {
      for (var a, s = [], p = n; (a = H(p)) && p !== o && a !== p.ownerDocument; )
        s.unshift(p), p = a;
      return s;
    }
    __name(U, "U");
    u(U, "E");
    function re(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(re, "re");
    u(re, "T");
    function ie(n) {
      var o = n instanceof S.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ie, "ie");
    u(ie, "M");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ue = {};
    function Pe(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Pe, "Pe");
    u(Pe, "I");
    function We(n, o, a) {
      return n === "parent" ? (0, z.parentNode)(a) : n === "self" ? o.getRect(a) : (0, z.closest)(a, n);
    }
    __name(We, "We");
    u(We, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.getStringOptionResult = We, ue.resolveRectLike = function(n, o, a, s) {
      var p, f = n;
      return c.default.string(f) ? f = We(f, o, a) : c.default.func(f) && (f = f.apply(void 0, function(m) {
        if (Array.isArray(m))
          return Pe(m);
      }(p = s) || function(m) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(m))
          return Array.from(m);
      }(p) || function(m, h) {
        if (m) {
          if (typeof m == "string")
            return Pe(m, h);
          var g = Object.prototype.toString.call(m).slice(8, -1);
          return g === "Object" && m.constructor && (g = m.constructor.name), g === "Map" || g === "Set" ? Array.from(m) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Pe(m, h) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(f) && (f = (0, z.getElementRect)(f)), f;
    }, ue.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ue.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, W.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    }, ue.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, W.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ue.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    };
    var Ge = {};
    Object.defineProperty(Ge, "__esModule", { value: true }), Ge.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, f = (0, ue.resolveRectLike)(p, n, o, [n && o]);
      return (0, ue.rectToXY)(f) || { x: 0, y: 0 };
    };
    var fe = {};
    function Qe(n) {
      return n.trim().split(/ +/);
    }
    __name(Qe, "Qe");
    u(Qe, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Qe(o)), c.default.array(o))
        return o.reduce(function(g, x) {
          return (0, W.default)(g, n(x, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var p = 0; p < a.length; p++) {
          var f;
          f = a[p], n(o, f, s);
        }
      else if (c.default.object(a))
        for (var m in a) {
          var h = Qe(m).map(function(g) {
            return "".concat(o).concat(g);
          });
          n(h, a[m], s);
        }
      return s;
    }, "n"), "t");
    var rt = {};
    Object.defineProperty(rt, "__esModule", { value: true }), rt.default = void 0, rt.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var Dt = {};
    function Ot(n, o) {
      for (var a in o) {
        var s = Ot.prefixedPropREs, p = false;
        for (var f in s)
          if (a.indexOf(f) === 0 && s[f].test(a)) {
            p = true;
            break;
          }
        p || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    __name(Ot, "Ot");
    u(Ot, "X"), Object.defineProperty(Dt, "__esModule", { value: true }), Dt.default = void 0, Ot.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var _r = Ot;
    Dt.default = _r;
    var J = {};
    function xt(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    __name(xt, "xt");
    u(xt, "W");
    function wt(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(wt, "wt");
    u(wt, "L");
    function Mr(n, o) {
      return o = o || { x: 0, y: 0 }, L.default.isOperaMobile && xt(n) ? (wt("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : wt("page", n, o), o;
    }
    __name(Mr, "Mr");
    u(Mr, "U");
    function Ht(n, o) {
      return o = o || {}, L.default.isOperaMobile && xt(n) ? wt("screen", n, o) : wt("client", n, o), o;
    }
    __name(Ht, "Ht");
    u(Ht, "V");
    function lr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(lr, "lr");
    u(lr, "N");
    function ur(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var f in o)
        o[f] /= n.length;
      return o;
    }
    __name(ur, "ur");
    u(ur, "q"), Object.defineProperty(J, "__esModule", { value: true }), J.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, J.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, J.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, J.isNativePointer = xt, J.getXY = wt, J.getPageXY = Mr, J.getClientXY = Ht, J.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, J.setCoords = function(n, o, a) {
      var s = o.length > 1 ? ur(o) : o[0];
      Mr(s, n.page), Ht(s, n.client), n.timeStamp = a;
    }, J.getTouchPair = lr, J.pointerAverage = ur, J.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = lr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), f = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: f, width: p - a, height: f - s };
    }, J.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = lr(n), f = p[0][a] - p[1][a], m = p[0][s] - p[1][s];
      return (0, rt.default)(f, m);
    }, J.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = lr(n), f = p[1][a] - p[0][a], m = p[1][s] - p[0][s];
      return 180 * Math.atan2(m, f) / Math.PI;
    }, J.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof S.default.Touch ? "touch" : "mouse";
    }, J.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [z.getActualElement(o ? o[0] : n.target), z.getActualElement(n.currentTarget)];
    }, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.coordsToEvent = function(n) {
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
    }, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return Dt.default;
    } });
    var Rt = {};
    function $n(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name($n, "$n");
    u($n, "G");
    function Ct(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ct, "Ct");
    u(Ct, "H"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.BaseEvent = void 0;
    var ln = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ct(this, "type", void 0), Ct(this, "target", void 0), Ct(this, "currentTarget", void 0), Ct(this, "interactable", void 0), Ct(this, "_interaction", void 0), Ct(this, "timeStamp", void 0), Ct(this, "immediatePropagationStopped", false), Ct(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && $n(o.prototype, a), n;
    }();
    Rt.BaseEvent = ln, Object.defineProperty(ln.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, xe.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Fr = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    xe.merge = Fr, xe.from = function(n) {
      return Fr([], n);
    };
    var Ur = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    xe.findIndex = Ur, xe.find = function(n, o) {
      return n[Ur(n, o)];
    };
    var _t = {};
    function un(n) {
      return (un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(un, "un");
    u(un, "et");
    function cr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(cr, "cr");
    u(cr, "nt");
    function pr(n, o) {
      return (pr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(pr, "pr");
    u(pr, "rt");
    function cn(n, o) {
      return !o || un(o) !== "object" && typeof o != "function" ? ct(n) : o;
    }
    __name(cn, "cn");
    u(cn, "ot");
    function ct(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(ct, "ct");
    u(ct, "it");
    function Ar(n) {
      return (Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Ar, "Ar");
    u(Ar, "at");
    function zt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zt, "zt");
    u(zt, "st"), Object.defineProperty(_t, "__esModule", { value: true }), _t.DropEvent = void 0;
    var Fn = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && pr(h, g);
      })(m, n);
      var o, a, s, p, f = (s = m, p = function() {
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
        var h, g = Ar(s);
        if (p) {
          var x = Ar(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return cn(this, h);
      });
      function m(h, g, x) {
        var T;
        (function(D, $) {
          if (!(D instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, m), zt(ct(T = f.call(this, g._interaction)), "target", void 0), zt(ct(T), "dropzone", void 0), zt(ct(T), "dragEvent", void 0), zt(ct(T), "relatedTarget", void 0), zt(ct(T), "draggable", void 0), zt(ct(T), "timeStamp", void 0), zt(ct(T), "propagationStopped", false), zt(ct(T), "immediatePropagationStopped", false);
        var C = x === "dragleave" ? h.prev : h.cur, N = C.element, G = C.dropzone;
        return T.type = x, T.target = N, T.currentTarget = N, T.dropzone = G, T.dragEvent = g, T.relatedTarget = g.target, T.draggable = g.interactable, T.timeStamp = g.timeStamp, T;
      }
      __name(m, "m");
      return u(m, "a"), o = m, (a = [{ key: "reject", value: function() {
        var h = this, g = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && g.cur.dropzone === this.dropzone && g.cur.element === this.target)
          if (g.prev.dropzone = this.dropzone, g.prev.element = this.target, g.rejected = true, g.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var x = g.activeDrops, T = xe.findIndex(x, function(N) {
              var G = N.dropzone, D = N.element;
              return G === h.dropzone && D === h.target;
            });
            g.activeDrops.splice(T, 1);
            var C = new m(g, this.dragEvent, "dropdeactivate");
            C.dropzone = this.dropzone, C.target = this.target, this.dropzone.fire(C);
          } else
            this.dropzone.fire(new m(g, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && cr(o.prototype, a), m;
    }(Rt.BaseEvent);
    _t.DropEvent = Fn;
    var Pr = {};
    function pn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, f = s.element;
        o.dropzone = p, o.target = f, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(pn, "pn");
    u(pn, "ct");
    function bi(n, o) {
      for (var a = function(f, m) {
        for (var h = f.interactables, g = [], x = 0; x < h.list.length; x++) {
          var T = h.list[x];
          if (T.options.drop.enabled) {
            var C = T.options.drop.accept;
            if (!(c.default.element(C) && C !== m || c.default.string(C) && !z.matchesSelector(m, C) || c.default.func(C) && !C({ dropzone: T, draggableElement: m })))
              for (var N = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], G = 0; G < N.length; G++) {
                var D = N[G];
                D !== m && g.push({ dropzone: T, element: D, rect: T.getRect(D) });
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
    __name(bi, "bi");
    u(bi, "ft");
    function xo(n, o, a) {
      for (var s = n.dropState, p = n.interactable, f = n.element, m = [], h = 0; h < s.activeDrops.length; h++) {
        var g = s.activeDrops[h], x = g.dropzone, T = g.element, C = g.rect;
        m.push(x.dropCheck(o, a, p, f, T, C) ? T : null);
      }
      var N = z.indexOfDeepestElement(m);
      return s.activeDrops[N] || null;
    }
    __name(xo, "xo");
    u(xo, "dt");
    function yi(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new _t.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new _t.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new _t.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new _t.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new _t.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new _t.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    __name(yi, "yi");
    u(yi, "pt");
    function xi(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, f = a.prev;
      o.leave && f.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && pn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    __name(xi, "xi");
    u(xi, "vt");
    function wo(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f = a.dropState;
        o.dynamicDrop && (f.activeDrops = bi(o, a.element));
        var m = s, h = xo(a, m, p);
        f.rejected = f.rejected && !!h && h.dropzone === f.cur.dropzone && h.element === f.cur.element, f.cur.dropzone = h && h.dropzone, f.cur.element = h && h.element, f.events = yi(a, 0, m);
      }
    }
    __name(wo, "wo");
    u(wo, "ht"), Object.defineProperty(Pr, "__esModule", { value: true }), Pr.default = void 0;
    var q = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(w.default), s.prototype.dropzone = function(f) {
        return function(m, h) {
          if (c.default.object(h)) {
            if (m.options.drop.enabled = h.enabled !== false, h.listeners) {
              var g = (0, fe.default)(h.listeners), x = Object.keys(g).reduce(function(T, C) {
                return T[/^(enter|leave)/.test(C) ? "drag".concat(C) : /^(activate|deactivate|move)/.test(C) ? "drop".concat(C) : C] = g[C], T;
              }, {});
              m.off(m.options.drop.listeners), m.on(x), m.options.drop.listeners = x;
            }
            return c.default.func(h.ondrop) && m.on("drop", h.ondrop), c.default.func(h.ondropactivate) && m.on("dropactivate", h.ondropactivate), c.default.func(h.ondropdeactivate) && m.on("dropdeactivate", h.ondropdeactivate), c.default.func(h.ondragenter) && m.on("dragenter", h.ondragenter), c.default.func(h.ondragleave) && m.on("dragleave", h.ondragleave), c.default.func(h.ondropmove) && m.on("dropmove", h.ondropmove), /^(pointer|center)$/.test(h.overlap) ? m.options.drop.overlap = h.overlap : c.default.number(h.overlap) && (m.options.drop.overlap = Math.max(Math.min(1, h.overlap), 0)), "accept" in h && (m.options.drop.accept = h.accept), "checker" in h && (m.options.drop.checker = h.checker), m;
          }
          return c.default.bool(h) ? (m.options.drop.enabled = h, m) : m.options.drop;
        }(this, f);
      }, s.prototype.dropCheck = function(f, m, h, g, x, T) {
        return function(C, N, G, D, $, Z, F) {
          var ee = false;
          if (!(F = F || C.getRect(Z)))
            return !!C.options.drop.checker && C.options.drop.checker(N, G, ee, C, Z, D, $);
          var se = C.options.drop.overlap;
          if (se === "pointer") {
            var pe = (0, Ge.default)(D, $, "drag"), Ee = J.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var qe = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            ee = qe && be;
          }
          var De = D.getRect($);
          if (De && se === "center") {
            var Ut = De.left + De.width / 2, zr = De.top + De.height / 2;
            ee = Ut >= F.left && Ut <= F.right && zr >= F.top && zr <= F.bottom;
          }
          return De && c.default.number(se) && (ee = Math.max(0, Math.min(F.right, De.right) - Math.max(F.left, De.left)) * Math.max(0, Math.min(F.bottom, De.bottom) - Math.max(F.top, De.top)) / (De.width * De.height) >= se), C.options.drop.checker && (ee = C.options.drop.checker(N, G, ee, C, Z, D, $)), ee;
        }(this, f, m, h, g, x, T);
      }, a.dynamicDrop = function(f) {
        return c.default.bool(f) ? (n.dynamicDrop = f, a) : n.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = q.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = bi(o, a.element), p.events = yi(a, 0, s), p.events.activate && (pn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": wo, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (xi(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        wo(n, o), xi(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: bi, getDrop: xo, getDropEvents: yi, fireDropEvents: xi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Q = q;
    Pr.default = Q;
    var oe = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(x) {
          return x.pointer;
        }), f = s === "start", m = s === "end", h = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], f)
          a.distance = J.touchDistance(p, h), a.box = J.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = J.touchAngle(p, h), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (m) {
          var g = o.prevEvent;
          a.distance = g.distance, a.box = g.box, a.scale = g.scale, a.ds = 0, a.angle = g.angle, a.da = 0;
        } else
          a.distance = J.touchDistance(p, h), a.box = J.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = J.touchAngle(p, h), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(ye, "ye");
    u(ye, "bt"), Object.defineProperty(oe, "__esModule", { value: true }), oe.default = void 0;
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
    oe.default = pt;
    var dt = {};
    function Wr(n, o, a, s, p, f, m) {
      if (!o)
        return false;
      if (o === true) {
        var h = c.default.number(f.width) ? f.width : f.right - f.left, g = c.default.number(f.height) ? f.height : f.bottom - f.top;
        if (m = Math.min(m, Math.abs((n === "left" || n === "right" ? h : g) / 2)), h < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), g < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (h >= 0 ? f.left : f.right) + m;
        if (n === "top")
          return a.y < (g >= 0 ? f.top : f.bottom) + m;
        if (n === "right")
          return a.x > (h >= 0 ? f.right : f.left) - m;
        if (n === "bottom")
          return a.y > (g >= 0 ? f.bottom : f.top) - m;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : z.matchesUpTo(s, o, p));
    }
    __name(Wr, "Wr");
    u(Wr, "Pt");
    function wi(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(wi, "wi");
    u(wi, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
    var ft = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      ft.cursors = function(f) {
        return f.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ft.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(f) {
        return function(m, h, g) {
          return c.default.object(h) ? (m.options.resize.enabled = h.enabled !== false, m.setPerAction("resize", h), m.setOnEvents("resize", h), c.default.string(h.axis) && /^x$|^y$|^xy$/.test(h.axis) ? m.options.resize.axis = h.axis : h.axis === null && (m.options.resize.axis = g.defaults.actions.resize.axis), c.default.bool(h.preserveAspectRatio) ? m.options.resize.preserveAspectRatio = h.preserveAspectRatio : c.default.bool(h.square) && (m.options.resize.square = h.square), m) : c.default.bool(h) ? (m.options.resize.enabled = h, m) : m.options.resize;
        }(this, f, n);
      }, o.map.resize = ft, o.methodDict.resize = "resizable", p.actions.resize = ft.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.rect;
          s._rects = { start: (0, W.default)({}, f), corrected: (0, W.default)({}, f), previous: (0, W.default)({}, f), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), wi(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.interactable.options.resize.invert, m = f === "reposition" || f === "negate", h = s.rect, g = s._rects, x = g.start, T = g.corrected, C = g.delta, N = g.previous;
          if ((0, W.default)(N, T), m) {
            if ((0, W.default)(T, h), f === "reposition") {
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
            T.top = Math.min(h.top, x.bottom), T.bottom = Math.max(h.bottom, x.top), T.left = Math.min(h.left, x.right), T.right = Math.max(h.right, x.left);
          for (var $ in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            C[$] = T[$] - N[$];
          p.edges = s.prepared.edges, p.rect = T, p.deltaRect = C;
        }
      })(n), wi(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, f = n.buttons;
      if (p) {
        var m = (0, W.default)({}, o.coords.cur.page), h = a.options.resize;
        if (h && h.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (f & h.mouseButtons) != 0)) {
          if (c.default.object(h.edges)) {
            var g = { left: false, right: false, top: false, bottom: false };
            for (var x in g)
              g[x] = Wr(x, h.edges[x], m, o._latestPointer.eventTarget, s, p, h.margin || ft.defaultMargin);
            g.left = g.left && !g.right, g.top = g.top && !g.bottom, (g.left || g.right || g.top || g.bottom) && (n.action = { name: "resize", edges: g });
          } else {
            var T = h.axis !== "y" && m.x > p.right - ft.defaultMargin, C = h.axis !== "x" && m.y > p.bottom - ft.defaultMargin;
            (T || C) && (n.action = { name: "resize", axes: (T ? "x" : "") + (C ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = ft.cursors, f = null;
      if (a)
        f = p[s + a];
      else if (o) {
        for (var m = "", h = ["top", "bottom", "left", "right"], g = 0; g < h.length; g++) {
          var x = h[g];
          o[x] && (m += x);
        }
        f = p[m];
      }
      return f;
    }, defaultMargin: null }, Ei = ft;
    dt.default = Ei;
    var Ir = {};
    Object.defineProperty(Ir, "__esModule", { value: true }), Ir.default = void 0;
    var Vr = { id: "actions", install: function(n) {
      n.usePlugin(oe.default), n.usePlugin(dt.default), n.usePlugin(w.default), n.usePlugin(Pr.default);
    } };
    Ir.default = Vr;
    var kt = {};
    Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0;
    var Nt, $t, Sl = 0, Jp = { request: function(n) {
      return Nt(n);
    }, cancel: function(n) {
      return $t(n);
    }, init: function(n) {
      if (Nt = n.requestAnimationFrame, $t = n.cancelAnimationFrame, !Nt)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Nt = n["".concat(s, "RequestAnimationFrame")], $t = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Nt = Nt && Nt.bind(n), $t = $t && $t.bind(n), Nt || (Nt = u(function(p) {
        var f = Date.now(), m = Math.max(0, 16 - (f - Sl)), h = n.setTimeout(function() {
          p(f + m);
        }, m);
        return Sl = f + m, h;
      }, "kt"), $t = u(function(p) {
        return clearTimeout(p);
      }, "It"));
    } };
    kt.default = Jp;
    var Xr = {};
    Object.defineProperty(Xr, "__esModule", { value: true }), Xr.getContainer = Eo, Xr.getScroll = Si, Xr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Xr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var f = Eo(p.container, a.interactable, s), m = Si(f);
      o();
      var h = Si(f);
      return { x: h.x - m.x, y: h.y - m.y };
    }, Xr.default = void 0;
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, kt.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = kt.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), kt.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, f = Eo(p.container, o, a), m = le.now(), h = (m - le.prevTime) / 1e3, g = p.speed * h;
      if (g >= 1) {
        var x = { x: le.x * g, y: le.y * g };
        if (x.x || x.y) {
          var T = Si(f);
          c.default.window(f) ? f.scrollBy(x.x, x.y) : f && (f.scrollLeft += x.x, f.scrollTop += x.y);
          var C = Si(f), N = { x: C.x - T.x, y: C.y - T.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: f });
        }
        le.prevTime = m;
      }
      le.isScrolling && (kt.default.cancel(le.i), le.i = kt.default.request(le.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && le.check(o.interactable, o.prepared.name))
        if (o.simulation)
          le.x = le.y = 0;
        else {
          var s, p, f, m, h = o.interactable, g = o.element, x = o.prepared.name, T = h.options[x].autoScroll, C = Eo(T.container, h, g);
          if (c.default.window(C))
            m = a.clientX < le.margin, s = a.clientY < le.margin, p = a.clientX > C.innerWidth - le.margin, f = a.clientY > C.innerHeight - le.margin;
          else {
            var N = z.getElementClientRect(C);
            m = a.clientX < N.left + le.margin, s = a.clientY < N.top + le.margin, p = a.clientX > N.right - le.margin, f = a.clientY > N.bottom - le.margin;
          }
          le.x = p ? 1 : m ? -1 : 0, le.y = f ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = T.margin, le.speed = T.speed, le.start(o));
        }
    } };
    function Eo(n, o, a) {
      return (c.default.string(n) ? (0, ue.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(Eo, "Eo");
    u(Eo, "Ct");
    function Si(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Si, "Si");
    u(Si, "Ft");
    var Qp = { id: "auto-scroll", install: function(n) {
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
    } } };
    Xr.default = Qp;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Gt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Gt.sign = void 0, Gt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var So = {};
    function ed(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(ed, "ed");
    u(ed, "Wt");
    function td(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(td, "td");
    u(td, "Lt"), Object.defineProperty(So, "__esModule", { value: true }), So.default = void 0;
    var rd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, f) {
        var m = function(h, g, x, T, C) {
          var N = h.getRect(T), G = { action: null, interactable: h, interaction: x, element: T, rect: N, buttons: g.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[g.button] };
          return C.fire("auto-start:check", G), G.action;
        }(this, s, p, f, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, m, this, f, p) : m;
      }, o.prototype.ignoreFrom = (0, Gt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Gt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = td, o.prototype.styleCursor = ed;
    } };
    So.default = rd;
    var Un = {};
    function Tl(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && To(o, a, n, p) ? n : null;
    }
    __name(Tl, "Tl");
    u(Tl, "Nt");
    function nd(n, o, a, s, p, f, m) {
      for (var h = 0, g = s.length; h < g; h++) {
        var x = s[h], T = p[h], C = x.getAction(o, a, n, T);
        if (C) {
          var N = Tl(C, x, T, f, m);
          if (N)
            return { action: N, interactable: x, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(nd, "nd");
    u(nd, "qt");
    function Ol(n, o, a, s, p) {
      var f = [], m = [], h = s;
      function g(T) {
        f.push(T), m.push(h);
      }
      __name(g, "g");
      for (u(g, "u"); c.default.element(h); ) {
        f = [], m = [], p.interactables.forEachMatch(h, g);
        var x = nd(n, o, a, f, m, s, p);
        if (x.action && !x.interactable.options[x.action.name].manualStart)
          return x;
        h = z.parentNode(h);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ol, "Ol");
    u(Ol, "$t");
    function Cl(n, o, a) {
      var s = o.action, p = o.interactable, f = o.element;
      s = s || { name: null }, n.interactable = p, n.element = f, (0, Gt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(f) : null, Ml(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Cl, "Cl");
    u(Cl, "Gt");
    function To(n, o, a, s) {
      var p = n.options, f = p[a.name].max, m = p[a.name].maxPerElement, h = s.autoStart.maxInteractions, g = 0, x = 0, T = 0;
      if (!(f && m && h))
        return false;
      for (var C = 0; C < s.interactions.list.length; C++) {
        var N = s.interactions.list[C], G = N.prepared.name;
        if (N.interacting() && (++g >= h || N.interactable === n && ((x += G === a.name ? 1 : 0) >= f || N.element === o && (T++, G === a.name && T >= m))))
          return false;
      }
      return h > 0;
    }
    __name(To, "To");
    u(To, "Ht");
    function _l(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(_l, "_l");
    u(_l, "Kt");
    function Ua(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(Ua, "Ua");
    u(Ua, "Zt");
    function Ml(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f = "";
        if (p.name) {
          var m = a.options[p.name].cursorChecker;
          f = c.default.func(m) ? m(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        Ua(n.element, f || "", o);
      } else
        o.autoStart.cursorElement && Ua(o.autoStart.cursorElement, "", o);
    }
    __name(Ml, "Ml");
    u(Ml, "Jt"), Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var id = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(So.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, W.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return _l(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: To, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      a.interacting() || Cl(a, Ol(a, s, p, f, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Cl(p, Ol(p, f, m, h, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f = p.interactable, m = p.prepared.name;
          m && f && (f.options[m].manualStart || !To(f, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, f, p.element), Ml(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && Ua(a.element, "", o);
    } }, maxInteractions: _l, withinInteractionLimit: To, validateAction: Tl };
    Un.default = id;
    var Oo = {};
    Object.defineProperty(Oo, "__esModule", { value: true }), Oo.default = void 0;
    var od = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, f = n.dy;
      if (a.prepared.name === "drag") {
        var m = Math.abs(p), h = Math.abs(f), g = a.interactable.options.drag, x = g.startAxis, T = m > h ? "x" : m < h ? "y" : "xy";
        if (a.prepared.axis = g.lockAxis === "start" ? T[0] : g.lockAxis, T !== "xy" && x !== "xy" && x !== T) {
          a.prepared.name = null;
          for (var C = s, N = function(D) {
            if (D !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && D.testIgnoreAllow($, C, s)) {
                var Z = D.getAction(a.downPointer, a.downEvent, a, C);
                if (Z && Z.name === "drag" && function(F, ee) {
                  if (!ee)
                    return false;
                  var se = ee.options.drag.startAxis;
                  return F === "xy" || se === "xy" || se === F;
                }(T, D) && Un.default.validateAction(Z, D, C, s, o))
                  return D;
              }
            }
          }; c.default.element(C); ) {
            var G = o.interactables.forEachMatch(C, N);
            if (G) {
              a.prepared.name = "drag", a.interactable = G, a.element = C;
              break;
            }
            C = (0, z.parentNode)(C);
          }
        }
      }
    } } };
    Oo.default = od;
    var Co = {};
    function Wa(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(Wa, "Wa");
    u(Wa, "re"), Object.defineProperty(Co, "__esModule", { value: true }), Co.default = void 0;
    var ad = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Un.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = Wa(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      Wa(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: Wa };
    Co.default = ad;
    var _o = {};
    Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var sd = { id: "auto-start", install: function(n) {
      n.usePlugin(Un.default), n.usePlugin(Co.default), n.usePlugin(Oo.default);
    } };
    _o.default = sd;
    var Wn = {};
    function ld(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(ld, "ld");
    u(ld, "le");
    function ud(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(ud, "ud");
    u(ud, "ue");
    function Al(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = ld, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, f) {
          var m = s.options.preventDefault;
          if (m !== "never")
            if (m !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(f.type)) {
                var h = (0, e.getWindow)(f.target).document, g = p.getDocOptions(h);
                if (!g || !g.events || g.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(f.type) || c.default.element(f.target) && (0, z.matchesSelector)(f.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || f.preventDefault();
            } else
              f.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, z.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(Al, "Al");
    u(Al, "ce"), Object.defineProperty(Wn, "__esModule", { value: true }), Wn.install = Al, Wn.default = void 0;
    var cd = { id: "core/interactablePreventDefault", install: Al, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = ud, n;
    }, {}) };
    Wn.default = cd;
    var Va = {};
    Object.defineProperty(Va, "__esModule", { value: true }), Va.default = void 0, Va.default = {};
    var Ti, Xa = {};
    Object.defineProperty(Xa, "__esModule", { value: true }), Xa.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ti || (Ti = {})), Ti.touchAction, Ti.boxSizing, Ti.noListeners;
    var pd = { id: "dev-tools", install: function() {
    } };
    Xa.default = pd;
    var dn = {};
    Object.defineProperty(dn, "__esModule", { value: true }), dn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = xe.from(p) : a[s] = p;
      }
      return a;
    }, "n"), "t");
    var fn = {};
    function Pl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Il(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Il(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Pl, "Pl");
    u(Pl, "me");
    function Il(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Il, "Il");
    u(Il, "be");
    function dd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(dd, "dd");
    u(dd, "xe");
    function hn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(hn, "hn");
    u(hn, "we"), Object.defineProperty(fn, "__esModule", { value: true }), fn.getRectOffset = Dl, fn.default = void 0;
    var fd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), hn(this, "states", []), hn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), hn(this, "startDelta", void 0), hn(this, "result", void 0), hn(this, "endResult", void 0), hn(this, "edges", void 0), hn(this, "interaction", void 0), this.interaction = s, this.result = Mo();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var f = s.phase, m = this.interaction, h = function(x) {
          var T = x.interactable.options[x.prepared.name], C = T.modifiers;
          return C && C.length ? C : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var G = T[N];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(m);
        this.prepareStates(h), this.edges = (0, W.default)({}, m.edges), this.startOffset = Dl(m.rect, p), this.startDelta = { x: 0, y: 0 };
        var g = this.fillArg({ phase: f, pageCoords: p, preEnd: false });
        return this.result = Mo(), this.startAll(g), this.result = this.setAll(g);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var f = this.states[p];
          f.methods.start && (s.state = f, f.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, f = s.preEnd, m = s.skipModifiers, h = s.rect;
        s.coords = (0, W.default)({}, s.pageCoords), s.rect = (0, W.default)({}, h);
        for (var g = m ? this.states.slice(m) : this.states, x = Mo(s.coords, s.rect), T = 0; T < g.length; T++) {
          var C, N = g[T], G = N.options, D = (0, W.default)({}, s.coords), $ = null;
          (C = N.methods) != null && C.set && this.shouldDo(G, f, p) && (s.state = N, $ = N.methods.set(s), ue.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - D.x, y: s.coords.y - D.y })), x.eventProps.push($);
        }
        x.delta.x = s.coords.x - s.pageCoords.x, x.delta.y = s.coords.y - s.pageCoords.y, x.rectDelta.left = s.rect.left - h.left, x.rectDelta.right = s.rect.right - h.right, x.rectDelta.top = s.rect.top - h.top, x.rectDelta.bottom = s.rect.bottom - h.bottom;
        var Z = this.result.coords, F = this.result.rect;
        if (Z && F) {
          var ee = x.rect.left !== F.left || x.rect.right !== F.right || x.rect.top !== F.top || x.rect.bottom !== F.bottom;
          x.changed = ee || Z.x !== x.coords.x || Z.y !== x.coords.y;
        }
        return x;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, f = s.phase, m = p.coords.cur, h = p.coords.start, g = this.result, x = this.startDelta, T = g.delta;
        f === "start" && (0, W.default)(this.startDelta, g.delta);
        for (var C = 0; C < [[h, x], [m, T]].length; C++) {
          var N = Pl([[h, x], [m, T]][C], 2), G = N[0], D = N[1];
          G.page.x += D.x, G.page.y += D.y, G.client.x += D.x, G.client.y += D.y;
        }
        var $ = this.result.rectDelta, Z = s.rect || p.rect;
        Z.left += $.left, Z.right += $.right, Z.top += $.top, Z.bottom += $.bottom, Z.width = Z.right - Z.left, Z.height = Z.bottom - Z.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, f = s.phase, m = s.preEnd, h = s.skipModifiers, g = this.setAll(this.fillArg({ preEnd: m, phase: f, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = g, !g.changed && (!h || h < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var x = p.coords.cur.page, T = { x: s.modifiedCoords.x - x.x, y: s.modifiedCoords.y - x.y };
          g.coords.x += T.x, g.coords.y += T.y, g.delta.x += T.x, g.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, f = s.event, m = this.states;
        if (m && m.length) {
          for (var h = false, g = 0; g < m.length; g++) {
            var x = m[g];
            s.state = x;
            var T = x.options, C = x.methods, N = C.beforeEnd && C.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            h = h || !h && this.shouldDo(T, true, s.phase, true);
          }
          h && p.move({ event: f, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var f = (0, W.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(f);
          for (var m = 0; m < this.states.length; m++) {
            var h = this.states[m];
            f.state = h, h.methods.stop && h.methods.stop(f);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var f = s[p], m = f.options, h = f.methods, g = f.name;
          this.states.push({ options: m, methods: h, index: p, name: g });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, f = p.coords, m = p.rect, h = p.modification;
        if (h.result) {
          for (var g = h.startDelta, x = h.result, T = x.delta, C = x.rectDelta, N = [[f.start, g], [f.cur, T]], G = 0; G < N.length; G++) {
            var D = Pl(N[G], 2), $ = D[0], Z = D[1];
            $.page.x -= Z.x, $.page.y -= Z.y, $.client.x -= Z.x, $.client.y -= Z.y;
          }
          m.left -= C.left, m.right -= C.right, m.top -= C.top, m.bottom -= C.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, f, m) {
        return !(!s || s.enabled === false || m && !s.endOnly || s.endOnly && !p || f === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, dn.default)(p);
        }), this.result = Mo((0, W.default)({}, s.result.coords), (0, W.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && dd(o.prototype, a), n;
    }();
    function Mo(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Mo, "Mo");
    u(Mo, "Pe");
    function Dl(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Dl, "Dl");
    u(Dl, "Oe"), fn.default = fd;
    var ht = {};
    function Ao(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(Ao, "Ao");
    u(Ao, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(f) {
        var m = f || {};
        for (var h in m.enabled = m.enabled !== false, a)
          h in m || (m[h] = a[h]);
        var g = { options: m, methods: s, name: o, enable: function() {
          return m.enabled = true, g;
        }, disable: function() {
          return m.enabled = false, g;
        } };
        return g;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    }, ht.addEventModifiers = Ao, ht.default = void 0;
    var hd = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new fn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": Ao, "interactions:action-move": Ao, "interactions:action-end": Ao, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ht.default = hd;
    var Oi = {};
    Object.defineProperty(Oi, "__esModule", { value: true }), Oi.defaults = void 0, Oi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ci = {};
    function Rl(n) {
      return (Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Rl, "Rl");
    u(Rl, "ke");
    function vd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(vd, "vd");
    u(vd, "Ie");
    function zl(n, o) {
      return (zl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(zl, "zl");
    u(zl, "De");
    function md(n, o) {
      return !o || Rl(o) !== "object" && typeof o != "function" ? Oe(n) : o;
    }
    __name(md, "md");
    u(md, "Ae");
    function Oe(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Oe, "Oe");
    u(Oe, "Re");
    function Ya(n) {
      return (Ya = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Ya, "Ya");
    u(Ya, "ze");
    function Ie(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ie, "Ie");
    u(Ie, "Ce"), Object.defineProperty(Ci, "__esModule", { value: true }), Ci.InteractEvent = void 0;
    var kl = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && zl(h, g);
      })(m, n);
      var o, a, s, p, f = (s = m, p = function() {
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
        var h, g = Ya(s);
        if (p) {
          var x = Ya(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return md(this, h);
      });
      function m(h, g, x, T, C, N, G) {
        var D;
        (function(qe, be) {
          if (!(qe instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, m), Ie(Oe(D = f.call(this, h)), "target", void 0), Ie(Oe(D), "currentTarget", void 0), Ie(Oe(D), "relatedTarget", null), Ie(Oe(D), "screenX", void 0), Ie(Oe(D), "screenY", void 0), Ie(Oe(D), "button", void 0), Ie(Oe(D), "buttons", void 0), Ie(Oe(D), "ctrlKey", void 0), Ie(Oe(D), "shiftKey", void 0), Ie(Oe(D), "altKey", void 0), Ie(Oe(D), "metaKey", void 0), Ie(Oe(D), "page", void 0), Ie(Oe(D), "client", void 0), Ie(Oe(D), "delta", void 0), Ie(Oe(D), "rect", void 0), Ie(Oe(D), "x0", void 0), Ie(Oe(D), "y0", void 0), Ie(Oe(D), "t0", void 0), Ie(Oe(D), "dt", void 0), Ie(Oe(D), "duration", void 0), Ie(Oe(D), "clientX0", void 0), Ie(Oe(D), "clientY0", void 0), Ie(Oe(D), "velocity", void 0), Ie(Oe(D), "speed", void 0), Ie(Oe(D), "swipe", void 0), Ie(Oe(D), "timeStamp", void 0), Ie(Oe(D), "axes", void 0), Ie(Oe(D), "preEnd", void 0), C = C || h.element;
        var $ = h.interactable, Z = ($ && $.options || Oi.defaults).deltaSource, F = (0, Ge.default)($, C, x), ee = T === "start", se = T === "end", pe = ee ? Oe(D) : h.prevEvent, Ee = ee ? h.coords.start : se ? { page: pe.page, client: pe.client, timeStamp: h.coords.cur.timeStamp } : h.coords.cur;
        return D.page = (0, W.default)({}, Ee.page), D.client = (0, W.default)({}, Ee.client), D.rect = (0, W.default)({}, h.rect), D.timeStamp = Ee.timeStamp, se || (D.page.x -= F.x, D.page.y -= F.y, D.client.x -= F.x, D.client.y -= F.y), D.ctrlKey = g.ctrlKey, D.altKey = g.altKey, D.shiftKey = g.shiftKey, D.metaKey = g.metaKey, D.button = g.button, D.buttons = g.buttons, D.target = C, D.currentTarget = C, D.preEnd = N, D.type = G || x + (T || ""), D.interactable = $, D.t0 = ee ? h.pointers[h.pointers.length - 1].downTime : pe.t0, D.x0 = h.coords.start.page.x - F.x, D.y0 = h.coords.start.page.y - F.y, D.clientX0 = h.coords.start.client.x - F.x, D.clientY0 = h.coords.start.client.y - F.y, D.delta = ee || se ? { x: 0, y: 0 } : { x: D[Z].x - pe[Z].x, y: D[Z].y - pe[Z].y }, D.dt = h.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, W.default)({}, h.coords.velocity[Z]), D.speed = (0, rt.default)(D.velocity.x, D.velocity.y), D.swipe = se || T === "inertiastart" ? D.getSwipe() : null, D;
      }
      __name(m, "m");
      return u(m, "a"), o = m, (a = [{ key: "getSwipe", value: function() {
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
      } }]) && vd(o.prototype, a), m;
    }(Rt.BaseEvent);
    Ci.InteractEvent = kl, Object.defineProperties(kl.prototype, { pageX: { get: function() {
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
    function Mi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Mi, "Mi");
    u(Mi, "Ye"), Object.defineProperty(_i, "__esModule", { value: true }), _i.PointerInfo = void 0, _i.PointerInfo = u(/* @__PURE__ */ __name(function n(o, a, s, p, f) {
      (function(m, h) {
        if (!(m instanceof h))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Mi(this, "id", void 0), Mi(this, "pointer", void 0), Mi(this, "event", void 0), Mi(this, "downTime", void 0), Mi(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = f;
    }, "n"), "t");
    var Po, Io, Mt = {};
    function gd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(gd, "gd");
    u(gd, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(He, "He");
    u(He, "Ve"), Object.defineProperty(Mt, "__esModule", { value: true }), Object.defineProperty(Mt, "PointerInfo", { enumerable: true, get: function() {
      return _i.PointerInfo;
    } }), Mt.default = Mt.Interaction = Mt._ProxyMethods = Mt._ProxyValues = void 0, Mt._ProxyValues = Po, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Po || (Mt._ProxyValues = Po = {})), Mt._ProxyMethods = Io, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Io || (Mt._ProxyMethods = Io = {}));
    var bd = 0, Nl = function() {
      function n(s) {
        var p = this, f = s.pointerType, m = s.scopeFire;
        (function(N, G) {
          if (!(N instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Gt.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), He(this, "_id", bd++), this._scopeFire = m, this.pointerType = f;
        var h = this;
        this._proxy = {};
        var g = u(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return h[N];
          } });
        }, "a");
        for (var x in Po)
          g(x);
        var T = u(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return h[N].apply(h, arguments);
          } });
        }, "l");
        for (var C in Io)
          T(C);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, f) {
        var m = this.updatePointer(s, p, f, true), h = this.pointers[m];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: f, pointerIndex: m, pointerInfo: h, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, f) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, Gt.copyAction)(this.prepared, s), this.interactable = p, this.element = f, this.rect = p.getRect(f), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, f) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, f, false);
        var m, h, g = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (m = this.coords.cur.client.x - this.coords.start.client.x, h = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, rt.default)(m, h) > this.pointerMoveTolerance);
        var x = this.getPointerIndex(s), T = { pointer: s, pointerIndex: x, pointerInfo: this.pointers[x], event: p, type: "move", eventTarget: f, dx: m, dy: h, duplicate: g, interaction: this };
        g || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), g || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || J.setZeroCoords(this.coords.delta), (s = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, f, m) {
        var h = this.getPointerIndex(s);
        h === -1 && (h = this.updatePointer(s, p, f, false));
        var g = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(g), { pointer: s, pointerIndex: h, pointerInfo: this.pointers[h], event: p, eventTarget: f, type: g, curEventTarget: m, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
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
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : xe.findIndex(this.pointers, function(f) {
          return f.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, f, m) {
        var h = J.getPointerId(s), g = this.getPointerIndex(s), x = this.pointers[g];
        return m = m !== false && (m || /(down|start)$/i.test(p.type)), x ? x.pointer = s : (x = new _i.PointerInfo(h, s, p, null, null), g = this.pointers.length, this.pointers.push(x)), J.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), m && (this.pointerIsDown = true, x.downTime = this.coords.cur.timeStamp, x.downTarget = f, J.pointerExtend(this.downPointer, s), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, f), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: f, down: m, pointerInfo: x, pointerIndex: g, interaction: this }), g;
      } }, { key: "removePointer", value: function(s, p) {
        var f = this.getPointerIndex(s);
        if (f !== -1) {
          var m = this.pointers[f];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p, eventTarget: null, pointerIndex: f, pointerInfo: m, interaction: this }), this.pointers.splice(f, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p, f) {
        this._latestPointer.pointer = s, this._latestPointer.event = p, this._latestPointer.eventTarget = f;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p, f, m) {
        return new Ci.InteractEvent(this, s, this.prepared.name, p, this.element, f, m);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, f = s.phase, m = s.preEnd, h = s.type, g = this.rect;
        if (g && f === "move" && (ue.addEdges(this.edges, g, this.coords.delta[this.interactable.options.deltaSource]), g.width = g.right - g.left, g.height = g.bottom - g.top), this._scopeFire("interactions:before-action-".concat(f), s) === false)
          return false;
        var x = s.iEvent = this._createPreparedEvent(p, f, m, h);
        return this._scopeFire("interactions:action-".concat(f), s), f === "start" && (this.prevEvent = x), this._fireEvent(x), this._scopeFire("interactions:after-action-".concat(f), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && gd(o.prototype, a), n;
    }();
    Mt.Interaction = Nl;
    var yd = Nl;
    Mt.default = yd;
    var vn = {};
    function Gl(n) {
      n.pointerIsDown && (Ka(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(Gl, "Gl");
    u(Gl, "He");
    function Ll(n) {
      Za(n.interaction);
    }
    __name(Ll, "Ll");
    u(Ll, "Ke");
    function Za(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return Ka(n.coords.cur, o), Ka(n.coords.delta, o), ue.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(Za, "Za");
    u(Za, "Ze");
    function xd(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(xd, "xd");
    u(xd, "Je");
    function Ka(n, o) {
      var a = n.page, s = n.client, p = o.x, f = o.y;
      a.x += p, a.y += f, s.x += p, s.y += f;
    }
    __name(Ka, "Ka");
    u(Ka, "Qe"), Object.defineProperty(vn, "__esModule", { value: true }), vn.addTotal = Gl, vn.applyPending = Za, vn.default = void 0, Mt._ProxyMethods.offsetBy = "";
    var wd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = xd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Gl(n.interaction);
    }, "interactions:before-action-start": Ll, "interactions:before-action-move": Ll, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (Za(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    vn.default = wd;
    var Vn = {};
    function Ed(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ed, "Ed");
    u(Ed, "nn");
    function st(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(st, "st");
    u(st, "rn"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = Vn.InertiaState = void 0;
    var ql = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), st(this, "active", false), st(this, "isModified", false), st(this, "smoothEnd", false), st(this, "allowResume", false), st(this, "modification", void 0), st(this, "modifierCount", 0), st(this, "modifierArg", void 0), st(this, "startCoords", void 0), st(this, "t0", 0), st(this, "v0", 0), st(this, "te", 0), st(this, "targetOffset", void 0), st(this, "modifiedOffset", void 0), st(this, "currentOffset", void 0), st(this, "lambda_v0", 0), st(this, "one_ve_v0", 0), st(this, "timeout", void 0), st(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, f = Do(p);
        if (!f || !f.enabled)
          return false;
        var m = p.coords.velocity.client, h = (0, rt.default)(m.x, m.y), g = this.modification || (this.modification = new fn.default(p));
        if (g.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = f.allowResume, this.v0 = h, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = g.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && h > f.minSpeed && h > f.endSpeed)
          this.startInertia();
        else {
          if (g.result = g.setAll(this.modifierArg), !g.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, f = Do(this.interaction), m = f.resistance, h = -Math.log(f.endSpeed / this.v0) / m;
        this.targetOffset = { x: (p.x - h) / m, y: (p.y - h) / m }, this.te = h, this.lambda_v0 = m / this.v0, this.one_ve_v0 = 1 - f.endSpeed / this.v0;
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
        this.timeout = kt.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, f, m, h, g = this, x = this.interaction, T = Do(x).resistance, C = (x._now() - this.t0) / 1e3;
        if (C < this.te) {
          var N, G = 1 - (Math.exp(-T * C) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, f = this.modifiedOffset.x, m = this.modifiedOffset.y, N = { x: jl(h = G, 0, s, f), y: jl(h, 0, p, m) }) : N = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var D = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, x.offsetBy(D), x.move(), this.onNextFrame(function() {
            return g.inertiaTick();
          });
        } else
          x.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, f = p._now() - this.t0, m = Do(p).smoothEndDuration;
        if (f < m) {
          var h = { x: Bl(f, 0, this.targetOffset.x, m), y: Bl(f, 0, this.targetOffset.y, m) }, g = { x: h.x - this.currentOffset.x, y: h.y - this.currentOffset.y };
          this.currentOffset.x += g.x, this.currentOffset.y += g.y, p.offsetBy(g), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, f = s.event, m = s.eventTarget, h = this.interaction;
        h.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), h.updatePointer(p, f, m, true), h._doPhase({ interaction: h, event: f, phase: "resume" }), (0, J.copyCoords)(h.coords.prev, h.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, kt.default.cancel(this.timeout);
      } }]) && Ed(o.prototype, a), n;
    }();
    function Do(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Do, "Do");
    u(Do, "an");
    function jl(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    __name(jl, "jl");
    u(jl, "sn");
    function Bl(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(Bl, "Bl");
    u(Bl, "ln"), Vn.InertiaState = ql;
    var Sd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(vn.default), n.usePlugin(ht.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new ql(o);
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
    }, "interactions:action-resume": ht.addEventModifiers, "interactions:action-inertiastart": ht.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Vn.default = Sd;
    var Ai = {};
    function Td(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Td, "Td");
    u(Td, "fn");
    function Pi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Pi, "Pi");
    u(Pi, "dn");
    function Hl(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(Hl, "Hl");
    u(Hl, "pn"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.Eventable = void 0;
    var Od = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Pi(this, "options", void 0), Pi(this, "types", {}), Pi(this, "propagationStopped", false), Pi(this, "immediatePropagationStopped", false), Pi(this, "global", void 0), this.options = (0, W.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, f = this.global;
        (p = this.types[s.type]) && Hl(s, p), !s.propagationStopped && f && (p = f[s.type]) && Hl(s, p);
      } }, { key: "on", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f)
          this.types[s] = xe.merge(this.types[s] || [], f[s]);
      } }, { key: "off", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f) {
          var m = this.types[s];
          if (m && m.length)
            for (var h = 0; h < f[s].length; h++) {
              var g = f[s][h], x = m.indexOf(g);
              x !== -1 && m.splice(x, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Td(o.prototype, a), n;
    }();
    Ai.Eventable = Od;
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var Ja = {};
    Object.defineProperty(Ja, "__esModule", { value: true }), Ja.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, p) {
        var f = n.interactables.get(s, p);
        return f || ((f = n.interactables.new(s, p)).events.global = a.globalEvents), f;
      }, "a"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Gt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var m = a[f];
            this.on(m, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var h in a)
            this.on(h, a[h], s);
          return this;
        }
        return (0, Ii.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Gt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var m = a[f];
            this.off(m, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var h in a)
            this.off(h, a[h], s);
          return this;
        }
        var g;
        return (0, Ii.default)(a, this.scope.actions) ? a in this.globalEvents && (g = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(g, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
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
    var Ro = {};
    function Cd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Cd, "Cd");
    u(Cd, "mn");
    function Dr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Dr, "Dr");
    u(Dr, "bn"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.Interactable = void 0;
    var _d = function() {
      function n(s, p, f, m) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Dr(this, "options", void 0), Dr(this, "_actions", void 0), Dr(this, "target", void 0), Dr(this, "events", new Ai.Eventable()), Dr(this, "_context", void 0), Dr(this, "_win", void 0), Dr(this, "_doc", void 0), Dr(this, "_scopeEvents", void 0), Dr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || f, this._win = (0, e.getWindow)((0, z.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = m, this.set(p);
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
        for (var m in p) {
          var h = m, g = this.options[s], x = p[h];
          h === "listeners" && this.updatePerActionListeners(s, g.listeners, x), c.default.array(x) ? g[h] = xe.from(x) : c.default.plainObject(x) ? (g[h] = (0, W.default)(g[h] || {}, (0, dn.default)(x)), c.default.object(f.perAction[h]) && "enabled" in f.perAction[h] && (g[h].enabled = x.enabled !== false)) : c.default.bool(x) && c.default.object(f.perAction[h]) ? g[h].enabled = x : g[h] = x;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, z.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(f) {
          var m = (0, W.default)({}, p._rectChecker(f));
          return "width" in m || (m.width = m.right - m.left, m.height = m.bottom - m.top), m;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, z.trySelector)(p) || c.default.object(p)) {
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
        return this._context === s.ownerDocument || (0, z.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, p, f) {
        return !this.testIgnore(s.ignoreFrom, p, f) && this.testAllow(s.allowFrom, p, f);
      } }, { key: "testAllow", value: function(s, p, f) {
        return !s || !!c.default.element(f) && (c.default.string(s) ? (0, z.matchesUpTo)(f, s, p) : !!c.default.element(s) && (0, z.nodeContains)(s, f));
      } }, { key: "testIgnore", value: function(s, p, f) {
        return !(!s || !c.default.element(f)) && (c.default.string(s) ? (0, z.matchesUpTo)(f, s, p) : !!c.default.element(s) && (0, z.nodeContains)(s, f));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, f, m) {
        c.default.object(p) && !c.default.array(p) && (m = f, f = null);
        var h = s === "on" ? "add" : "remove", g = (0, fe.default)(p, f);
        for (var x in g) {
          x === "wheel" && (x = L.default.wheelEvent);
          for (var T = 0; T < g[x].length; T++) {
            var C = g[x][T];
            (0, Ii.default)(x, this._actions) ? this.events[s](x, C) : c.default.string(this.target) ? this._scopeEvents["".concat(h, "Delegate")](this.target, this._context, x, C, m) : this._scopeEvents[h](this.target, x, C, m);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, f) {
        return this._onOff("on", s, p, f);
      } }, { key: "off", value: function(s, p, f) {
        return this._onOff("off", s, p, f);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var f in c.default.object(s) || (s = {}), this.options = (0, dn.default)(p.base), this._actions.methodDict) {
          var m = f, h = this._actions.methodDict[m];
          this.options[m] = {}, this.setPerAction(m, (0, W.default)((0, W.default)({}, p.perAction), p.actions[m])), this[h](s[m]);
        }
        for (var g in s)
          c.default.func(this[g]) && this[g](s[g]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], f = p.length - 1; f >= 0; f--) {
              var m = p[f], h = m.selector, g = m.context, x = m.listeners;
              h === this.target && g === this._context && p.splice(f, 1);
              for (var T = x.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, x[T][0], x[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Cd(o.prototype, a), n;
    }();
    Ro.Interactable = _d;
    var zo = {};
    function Md(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Md, "Md");
    u(Md, "_n");
    function Qa(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Qa, "Qa");
    u(Qa, "Pn"), Object.defineProperty(zo, "__esModule", { value: true }), zo.InteractableSet = void 0;
    var Ad = function() {
      function n(s) {
        var p = this;
        (function(f, m) {
          if (!(f instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Qa(this, "list", []), Qa(this, "selectorMap", {}), Qa(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f) {
          var m = f.interactable, h = m.target, g = m._context, x = c.default.string(h) ? p.selectorMap[h] : h[p.scope.id], T = xe.findIndex(x, function(C) {
            return C.context === g;
          });
          x[T] && (x[T].context = null, x[T].interactable = null), x.splice(T, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, W.default)(p || {}, { actions: this.scope.actions });
        var f = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), m = { context: f._context, interactable: f };
        return this.scope.addDocument(f._doc), this.list.push(f), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(m)) : (f.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(m)), this.scope.fire("interactable:new", { target: s, options: p, interactable: f, win: this.scope._win }), f;
      } }, { key: "get", value: function(s, p) {
        var f = p && p.context || this.scope.document, m = c.default.string(s), h = m ? this.selectorMap[s] : s[this.scope.id];
        if (!h)
          return null;
        var g = xe.find(h, function(x) {
          return x.context === f && (m || x.interactable.inContext(s));
        });
        return g && g.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var f = 0; f < this.list.length; f++) {
          var m = this.list[f], h = void 0;
          if ((c.default.string(m.target) ? c.default.element(s) && z.matchesSelector(s, m.target) : s === m.target) && m.inContext(s) && (h = p(m)), h !== void 0)
            return h;
        }
      } }]) && Md(o.prototype, a), n;
    }();
    zo.InteractableSet = Ad;
    var ko = {};
    function Pd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Pd, "Pd");
    u(Pd, "En");
    function es(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(es, "es");
    u(es, "Tn");
    function ts(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return $l(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? $l(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ts, "ts");
    u(ts, "Mn");
    function $l(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name($l, "$l");
    u($l, "jn"), Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var Id = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), es(this, "currentTarget", void 0), es(this, "originalEvent", void 0), es(this, "type", void 0), this.originalEvent = s, (0, Dt.default)(this, s);
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
      } }]) && Pd(o.prototype, a), n;
    }();
    function Di(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, W.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(Di, "Di");
    u(Di, "In");
    var Dd = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], f = { add: m, remove: h, addDelegate: function(T, C, N, G, D) {
        var $ = Di(D);
        if (!s[N]) {
          s[N] = [];
          for (var Z = 0; Z < p.length; Z++) {
            var F = p[Z];
            m(F, N, g), m(F, N, x, true);
          }
        }
        var ee = s[N], se = xe.find(ee, function(pe) {
          return pe.selector === T && pe.context === C;
        });
        se || (se = { selector: T, context: C, listeners: [] }, ee.push(se)), se.listeners.push([G, $]);
      }, removeDelegate: function(T, C, N, G, D) {
        var $, Z = Di(D), F = s[N], ee = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var se = F[$];
            if (se.selector === T && se.context === C) {
              for (var pe = se.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var qe = ts(pe[Ee], 2), be = qe[0], De = qe[1], Ut = De.capture, zr = De.passive;
                if (be === G && Ut === Z.capture && zr === Z.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), h(C, N, g), h(C, N, x, true)), ee = true;
                  break;
                }
              }
              if (ee)
                break;
            }
          }
      }, delegateListener: g, delegateUseCapture: x, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function m(T, C, N, G) {
        var D = Di(G), $ = xe.find(a, function(Z) {
          return Z.eventTarget === T;
        });
        $ || ($ = { eventTarget: T, events: {} }, a.push($)), $.events[C] || ($.events[C] = []), T.addEventListener && !xe.contains($.events[C], N) && (T.addEventListener(C, N, f.supportsOptions ? D : D.capture), $.events[C].push(N));
      }
      __name(m, "m");
      u(m, "s");
      function h(T, C, N, G) {
        var D = Di(G), $ = xe.findIndex(a, function(Ee) {
          return Ee.eventTarget === T;
        }), Z = a[$];
        if (Z && Z.events)
          if (C !== "all") {
            var F = false, ee = Z.events[C];
            if (ee) {
              if (N === "all") {
                for (var se = ee.length - 1; se >= 0; se--)
                  h(T, C, ee[se], D);
                return;
              }
              for (var pe = 0; pe < ee.length; pe++)
                if (ee[pe] === N) {
                  T.removeEventListener(C, N, f.supportsOptions ? D : D.capture), ee.splice(pe, 1), ee.length === 0 && (delete Z.events[C], F = true);
                  break;
                }
            }
            F && !Object.keys(Z.events).length && a.splice($, 1);
          } else
            for (C in Z.events)
              Z.events.hasOwnProperty(C) && h(T, C, "all");
      }
      __name(h, "h");
      u(h, "l");
      function g(T, C) {
        for (var N = Di(C), G = new Id(T), D = s[T.type], $ = ts(J.getEventTargets(T), 1)[0], Z = $; c.default.element(Z); ) {
          for (var F = 0; F < D.length; F++) {
            var ee = D[F], se = ee.selector, pe = ee.context;
            if (z.matchesSelector(Z, se) && z.nodeContains(pe, $) && z.nodeContains(pe, Z)) {
              var Ee = ee.listeners;
              G.currentTarget = Z;
              for (var qe = 0; qe < Ee.length; qe++) {
                var be = ts(Ee[qe], 2), De = be[0], Ut = be[1], zr = Ut.capture, hs = Ut.passive;
                zr === N.capture && hs === N.passive && De(G);
              }
            }
          }
          Z = z.parentNode(Z);
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
    ko.default = Dd;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Go = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Go.methodOrder.length; o++) {
        var a;
        a = Go.methodOrder[o];
        var s = Go[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, p = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var f = 0; f < p.interactions.list.length; f++) {
        var m = p.interactions.list[f], h = s;
        if (m.simulation && m.simulation.allowResume && m.pointerType === o)
          for (; h; ) {
            if (h === m.element)
              return m;
            h = z.parentNode(h);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, f = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var m = 0; m < f.interactions.list.length; m++) {
        var h = f.interactions.list[m];
        if (h.pointerType === s) {
          if (h.simulation && !Fl(h, a))
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
        if (Fl(p, o))
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
    function Fl(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(Fl, "Fl");
    u(Fl, "zn");
    var Rd = Go;
    No.default = Rd;
    var Lo = {};
    function Ul(n) {
      return (Ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Ul, "Ul");
    u(Ul, "Xn");
    function Wl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Vl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Vl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Wl, "Wl");
    u(Wl, "Yn");
    function Vl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Vl, "Vl");
    u(Vl, "Bn");
    function zd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(zd, "zd");
    u(zd, "Wn");
    function kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(kd, "kd");
    u(kd, "Ln");
    function Xl(n, o) {
      return (Xl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Xl, "Xl");
    u(Xl, "Un");
    function Nd(n, o) {
      return !o || Ul(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Nd, "Nd");
    u(Nd, "Vn");
    function rs(n) {
      return (rs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(rs, "rs");
    u(rs, "Nn"), Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var ns = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Yl(n, o) {
      return function(a) {
        var s = o.interactions.list, p = J.getPointerType(a), f = Wl(J.getEventTargets(a), 2), m = f[0], h = f[1], g = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var x = 0; x < a.changedTouches.length; x++) {
            var T = a.changedTouches[x], C = { pointer: T, pointerId: J.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: m, curEventTarget: h, scope: o }, N = Zl(C);
            g.push([C.pointer, C.eventTarget, C.curEventTarget, N]);
          }
        } else {
          var G = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var D = 0; D < s.length && !G; D++)
              G = s[D].pointerType !== "mouse" && s[D].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G) {
            var $ = { pointer: a, pointerId: J.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: h, eventTarget: m, scope: o }, Z = Zl($);
            g.push([$.pointer, $.eventTarget, $.curEventTarget, Z]);
          }
        }
        for (var F = 0; F < g.length; F++) {
          var ee = Wl(g[F], 4), se = ee[0], pe = ee[1], Ee = ee[2];
          ee[3][n](se, a, pe, Ee);
        }
      };
    }
    __name(Yl, "Yl");
    u(Yl, "$n");
    function Zl(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: No.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(Zl, "Zl");
    u(Zl, "Gn");
    function is(n, o) {
      var a = n.doc, s = n.scope, p = n.options, f = s.interactions.docEvents, m = s.events, h = m[o];
      for (var g in s.browser.isIOS && !p.events && (p.events = { passive: false }), m.delegatedEvents)
        h(a, g, m.delegateListener), h(a, g, m.delegateUseCapture, true);
      for (var x = p && p.events, T = 0; T < f.length; T++) {
        var C = f[T];
        h(a, C.type, C.listener, x);
      }
    }
    __name(is, "is");
    u(is, "Hn");
    var Gd = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ns.length; a++) {
        var s = ns[a];
        o[s] = Yl(s, n);
      }
      var p, f = L.default.pEventTypes;
      function m() {
        for (var h = 0; h < n.interactions.list.length; h++) {
          var g = n.interactions.list[h];
          if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting)
            for (var x = function() {
              var C = g.pointers[T];
              n.documents.some(function(N) {
                var G = N.doc;
                return (0, z.nodeContains)(G, C.downTarget);
              }) || g.removePointer(C.pointer, C.event);
            }, T = 0; T < g.pointers.length; T++)
              x();
        }
      }
      __name(m, "m");
      u(m, "a"), (p = S.default.PointerEvent ? [{ type: f.down, listener: m }, { type: f.down, listener: o.pointerDown }, { type: f.move, listener: o.pointerMove }, { type: f.up, listener: o.pointerUp }, { type: f.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: m }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(h) {
        for (var g = 0; g < n.interactions.list.length; g++)
          n.interactions.list[g].documentBlur(h);
      } }), n.prevTouchTime = 0, n.Interaction = function(h) {
        (function(D, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          D.prototype = Object.create($ && $.prototype, { constructor: { value: D, writable: true, configurable: true } }), $ && Xl(D, $);
        })(G, h);
        var g, x, T, C, N = (T = G, C = function() {
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
          var D, $ = rs(T);
          if (C) {
            var Z = rs(this).constructor;
            D = Reflect.construct($, arguments, Z);
          } else
            D = $.apply(this, arguments);
          return Nd(this, D);
        });
        function G() {
          return zd(this, G), N.apply(this, arguments);
        }
        __name(G, "G");
        return u(G, "s"), g = G, (x = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(D) {
          n.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && kd(g.prototype, x), G;
      }(Mt.default), n.interactions = { list: [], new: function(h) {
        h.scopeFire = function(x, T) {
          return n.fire(x, T);
        };
        var g = new n.Interaction(h);
        return n.interactions.list.push(g), g;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Wn.default);
    }, listeners: { "scope:add-document": function(n) {
      return is(n, "add");
    }, "scope:remove-document": function(n) {
      return is(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: is, doOnInteractions: Yl, methodNames: ns };
    Lo.default = Gd;
    var Ri = {};
    function Kl(n) {
      return (Kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Kl, "Kl");
    u(Kl, "Jn");
    function os(n, o, a) {
      return (os = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p, f) {
        var m = function(g, x) {
          for (; !Object.prototype.hasOwnProperty.call(g, x) && (g = Xn(g)) !== null; )
            ;
          return g;
        }(s, p);
        if (m) {
          var h = Object.getOwnPropertyDescriptor(m, p);
          return h.get ? h.get.call(f) : h.value;
        }
      })(n, o, a || n);
    }
    __name(os, "os");
    u(os, "Qn");
    function Jl(n, o) {
      return (Jl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Jl, "Jl");
    u(Jl, "tr");
    function Ld(n, o) {
      return !o || Kl(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(Ld, "Ld");
    u(Ld, "er");
    function Xn(n) {
      return (Xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Xn, "Xn");
    u(Xn, "nr");
    function Ql(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Ql, "Ql");
    u(Ql, "rr");
    function eu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(eu, "eu");
    u(eu, "or");
    function tu(n, o, a) {
      return o && eu(n.prototype, o), a && eu(n, a), n;
    }
    __name(tu, "tu");
    u(tu, "ir");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(vt, "vt");
    u(vt, "ar"), Object.defineProperty(Ri, "__esModule", { value: true }), Ri.initScope = ru, Ri.Scope = void 0;
    var qd = function() {
      function n() {
        var o = this;
        Ql(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", L.default), vt(this, "defaults", (0, dn.default)(Oi.defaults)), vt(this, "Eventable", Ai.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, Ja.createInteractStatic)(this)), vt(this, "InteractEvent", Ci.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new zo.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(g, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function");
            g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), x && Jl(g, x);
          })(h, s);
          var p, f, m = (p = h, f = function() {
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
            var g, x = Xn(p);
            if (f) {
              var T = Xn(this).constructor;
              g = Reflect.construct(x, arguments, T);
            } else
              g = x.apply(this, arguments);
            return Ld(this, g);
          });
          function h() {
            return Ql(this, h), m.apply(this, arguments);
          }
          __name(h, "h");
          return u(h, "i"), tu(h, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(g) {
            return os(Xn(h.prototype), "set", this).call(this, g), a.fire("interactable:set", { options: g, interactable: this }), this;
          } }, { key: "unset", value: function() {
            os(Xn(h.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), h;
        }(Ro.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), tu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : ru(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, f = o.before.reduce(function(h, g) {
            return h[g] = true, h[nu(g)] = true, h;
          }, {}); s < p; s++) {
            var m = this.listenerMaps[s].id;
            if (f[m] || f[nu(m)])
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
    function ru(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), S.default.init(o), L.default.init(o), kt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Lo.default), n.usePlugin(ko.default), n;
    }
    __name(ru, "ru");
    u(ru, "lr");
    function nu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(nu, "nu");
    u(nu, "ur"), Ri.Scope = qd;
    var gt = {};
    Object.defineProperty(gt, "__esModule", { value: true }), gt.default = void 0;
    var iu = new Ri.Scope(), jd = iu.interactStatic;
    gt.default = jd;
    var Bd = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    iu.init(Bd);
    var qo = {};
    Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0, qo.default = function() {
    };
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0, jo.default = function() {
    };
    var Bo = {};
    function ou(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
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
    u(ou, "yr");
    function au(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(au, "au");
    u(au, "mr"), Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0, Bo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = ou(s, 2), f = p[0], m = p[1];
        return f in n || m in n;
      }), a = u(function(s, p) {
        for (var f = n.range, m = n.limits, h = m === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : m, g = n.offset, x = g === void 0 ? { x: 0, y: 0 } : g, T = { range: f, grid: n, x: null, y: null }, C = 0; C < o.length; C++) {
          var N = ou(o[C], 2), G = N[0], D = N[1], $ = Math.round((s - x.x) / n[G]), Z = Math.round((p - x.y) / n[D]);
          T[G] = Math.max(h.left, Math.min(h.right, $ * n[G] + x.x)), T[D] = Math.max(h.top, Math.min(h.bottom, Z * n[D] + x.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), Object.defineProperty(zi, "edgeTarget", { enumerable: true, get: function() {
      return qo.default;
    } }), Object.defineProperty(zi, "elements", { enumerable: true, get: function() {
      return jo.default;
    } }), Object.defineProperty(zi, "grid", { enumerable: true, get: function() {
      return Bo.default;
    } });
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var Hd = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, zi), o.createSnapGrid = o.snappers.grid;
    } };
    Ho.default = Hd;
    var Yn = {};
    function su(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(su, "su");
    u(su, "Pr");
    function as(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? su(Object(a), true).forEach(function(s) {
          $d(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : su(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(as, "as");
    u(as, "Or");
    function $d(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name($d, "$d");
    u($d, "Sr"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.aspectRatio = Yn.default = void 0;
    var lu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, f = o.options.ratio, m = o.options, h = m.equalDelta, g = m.modifiers;
      f === "preserve" && (f = a.width / a.height), o.startCoords = (0, W.default)({}, p), o.startRect = (0, W.default)({}, a), o.ratio = f, o.equalDelta = h;
      var x = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (x.left ? 1 : -1) * (x.top ? 1 : -1);
      else {
        var T = o.xIsPrimaryAxis ? x.top : x.left;
        o.edgeSign = T ? -1 : 1;
      }
      if ((0, W.default)(n.edges, x), g && g.length) {
        var C = new fn.default(n.interaction);
        C.copyFrom(n.interaction.modification), C.prepareStates(g), o.subModification = C, C.startAll(as({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, W.default)({}, s), f = o.equalDelta ? Fd : Ud;
      if (f(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var m = (0, W.default)({}, a);
      (0, ue.addEdges)(o.linkedEdges, m, { x: s.x - p.x, y: s.y - p.y });
      var h = o.subModification.setAll(as(as({}, n), {}, { rect: m, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: m })), g = h.delta;
      return h.changed && (f(o, Math.abs(g.x) > Math.abs(g.y), h.coords, h.rect), (0, W.default)(s, h.coords)), h.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Fd(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p : a.x = s.x + (a.y - s.y) * p;
    }
    __name(Fd, "Fd");
    u(Fd, "Tr");
    function Ud(n, o, a, s) {
      var p = n.startRect, f = n.startCoords, m = n.ratio, h = n.edgeSign;
      if (o) {
        var g = s.width / m;
        a.y = f.y + (g - p.height) * h;
      } else {
        var x = s.height * m;
        a.x = f.x + (x - p.width) * h;
      }
    }
    __name(Ud, "Ud");
    u(Ud, "Mr"), Yn.aspectRatio = lu;
    var Wd = (0, ht.makeModifier)(lu, "aspectRatio");
    Yn.default = Wd;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: true }), mn.default = void 0;
    var uu = u(function() {
    }, "Ir");
    uu._defaults = {};
    var Vd = uu;
    mn.default = Vd;
    var ss = {};
    Object.defineProperty(ss, "__esModule", { value: true }), Object.defineProperty(ss, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var Et = {};
    function ls(n, o, a) {
      return c.default.func(n) ? ue.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ue.resolveRectLike(n, o.interactable, o.element);
    }
    __name(ls, "ls");
    u(ls, "zr"), Object.defineProperty(Et, "__esModule", { value: true }), Et.getRestrictionRect = ls, Et.restrict = Et.default = void 0;
    var cu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, f = n.pageCoords, m = s.options, h = m.elementRect, g = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, m.offset || {});
      if (o && h) {
        var x = ls(m.restriction, p, f);
        if (x) {
          var T = x.right - x.left - o.width, C = x.bottom - x.top - o.height;
          T < 0 && (g.left += T, g.right += T), C < 0 && (g.top += C, g.bottom += C);
        }
        g.left += a.left - o.width * h.left, g.top += a.top - o.height * h.top, g.right += a.right - o.width * (1 - h.right), g.bottom += a.bottom - o.height * (1 - h.bottom);
      }
      s.offset = g;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, f = s.offset, m = ls(p.restriction, a, o);
      if (m) {
        var h = ue.xywhToTlbr(m);
        o.x = Math.max(Math.min(h.right - f.right, o.x), h.left + f.left), o.y = Math.max(Math.min(h.bottom - f.bottom, o.y), h.top + f.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Et.restrict = cu;
    var Xd = (0, ht.makeModifier)(cu, "restrict");
    Et.default = Xd;
    var yr = {};
    Object.defineProperty(yr, "__esModule", { value: true }), yr.restrictEdges = yr.default = void 0;
    var pu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, du = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function fu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    __name(fu, "fu");
    u(fu, "Wr");
    var hu = { noInner: pu, noOuter: du, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, f = p.options;
      if (f) {
        var m = (0, Et.getRestrictionRect)(f.offset, a, a.coords.start.page);
        o = ue.rectToXY(m);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, f = p.offset, m = p.options;
      if (a) {
        var h = (0, W.default)({}, o), g = (0, Et.getRestrictionRect)(m.inner, s, h) || {}, x = (0, Et.getRestrictionRect)(m.outer, s, h) || {};
        fu(g, pu), fu(x, du), a.top ? o.y = Math.min(Math.max(x.top + f.top, h.y), g.top + f.top) : a.bottom && (o.y = Math.max(Math.min(x.bottom + f.bottom, h.y), g.bottom + f.bottom)), a.left ? o.x = Math.min(Math.max(x.left + f.left, h.x), g.left + f.left) : a.right && (o.x = Math.max(Math.min(x.right + f.right, h.x), g.right + f.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    yr.restrictEdges = hu;
    var Yd = (0, ht.makeModifier)(hu, "restrictEdges");
    yr.default = Yd;
    var Zn = {};
    Object.defineProperty(Zn, "__esModule", { value: true }), Zn.restrictRect = Zn.default = void 0;
    var Zd = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Et.restrict.defaults), vu = { start: Et.restrict.start, set: Et.restrict.set, defaults: Zd };
    Zn.restrictRect = vu;
    var Kd = (0, ht.makeModifier)(vu, "restrictRect");
    Zn.default = Kd;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: true }), Kn.restrictSize = Kn.default = void 0;
    var Jd = { width: -1 / 0, height: -1 / 0 }, Qd = { width: 1 / 0, height: 1 / 0 }, mu = { start: function(n) {
      return yr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, f = a.options;
      if (p) {
        var m = ue.tlbrToXywh((0, Et.getRestrictionRect)(f.min, o, n.coords)) || Jd, h = ue.tlbrToXywh((0, Et.getRestrictionRect)(f.max, o, n.coords)) || Qd;
        a.options = { endOnly: f.endOnly, inner: (0, W.default)({}, yr.restrictEdges.noInner), outer: (0, W.default)({}, yr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - m.height, a.options.outer.top = s.bottom - h.height) : p.bottom && (a.options.inner.bottom = s.top + m.height, a.options.outer.bottom = s.top + h.height), p.left ? (a.options.inner.left = s.right - m.width, a.options.outer.left = s.right - h.width) : p.right && (a.options.inner.right = s.left + m.width, a.options.outer.right = s.left + h.width), yr.restrictEdges.set(n), a.options = f;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Kn.restrictSize = mu;
    var ef = (0, ht.makeModifier)(mu, "restrictSize");
    Kn.default = ef;
    var us = {};
    Object.defineProperty(us, "__esModule", { value: true }), Object.defineProperty(us, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var Yr = {};
    Object.defineProperty(Yr, "__esModule", { value: true }), Yr.snap = Yr.default = void 0;
    var gu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, f = n.rect, m = n.state, h = n.startOffset, g = m.options, x = g.offsetWithOrigin ? function(N) {
        var G = N.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(N.state.options.origin, null, null, [G])) || (0, Ge.default)(N.interactable, G, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (g.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ue.resolveRectLike)(g.offset, s, p, [a]);
        (o = (0, ue.rectToXY)(T) || { x: 0, y: 0 }).x += x.x, o.y += x.y;
      }
      var C = g.relativePoints;
      m.offsets = f && C && C.length ? C.map(function(N, G) {
        return { index: G, relativePoint: N, x: h.left - f.width * N.x + o.x, y: h.top - f.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, f = s.offsets, m = (0, Ge.default)(o.interactable, o.element, o.prepared.name), h = (0, W.default)({}, a), g = [];
      p.offsetWithOrigin || (h.x -= m.x, h.y -= m.y);
      for (var x = 0; x < f.length; x++)
        for (var T = f[x], C = h.x - T.x, N = h.y - T.y, G = 0, D = p.targets.length; G < D; G++) {
          var $, Z = p.targets[G];
          ($ = c.default.func(Z) ? Z(C, N, o._proxy, T, G) : Z) && g.push({ x: (c.default.number($.x) ? $.x : C) + T.x, y: (c.default.number($.y) ? $.y : N) + T.y, range: c.default.number($.range) ? $.range : p.range, source: Z, index: G, offset: T });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ee = 0; ee < g.length; ee++) {
        var se = g[ee], pe = se.range, Ee = se.x - h.x, qe = se.y - h.y, be = (0, rt.default)(Ee, qe), De = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (De = false), F.target && !(De ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = se, F.distance = be, F.range = pe, F.inRange = De, F.delta.x = Ee, F.delta.y = qe);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Yr.snap = gu;
    var tf = (0, ht.makeModifier)(gu, "snap");
    Yr.default = tf;
    var Rr = {};
    function bu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(bu, "bu");
    u(bu, "oo"), Object.defineProperty(Rr, "__esModule", { value: true }), Rr.snapSize = Rr.default = void 0;
    var yu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Yr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, f = n.coords, m = p.options, h = p.offsets, g = { x: f.x - h[0].x, y: f.y - h[0].y };
      p.options = (0, W.default)({}, m), p.options.targets = [];
      for (var x = 0; x < (m.targets || []).length; x++) {
        var T = (m.targets || [])[x], C = void 0;
        if (C = c.default.func(T) ? T(g.x, g.y, s) : T) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var G = (o = p.targetFields[N], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, ee) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var se = [], pe = true, Ee = false, qe = void 0;
                try {
                  for (var be, De = F[Symbol.iterator](); !(pe = (be = De.next()).done) && (se.push(be.value), !ee || se.length !== ee); pe = true)
                    ;
                } catch (Ut) {
                  Ee = true, qe = Ut;
                } finally {
                  try {
                    pe || De.return == null || De.return();
                  } finally {
                    if (Ee)
                      throw qe;
                  }
                }
                return se;
              }
            }(o, a) || function(F, ee) {
              if (F) {
                if (typeof F == "string")
                  return bu(F, ee);
                var se = Object.prototype.toString.call(F).slice(8, -1);
                return se === "Object" && F.constructor && (se = F.constructor.name), se === "Map" || se === "Set" ? Array.from(F) : se === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se) ? bu(F, ee) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), D = G[0], $ = G[1];
            if (D in C || $ in C) {
              C.x = C[D], C.y = C[$];
              break;
            }
          }
          p.options.targets.push(C);
        }
      }
      var Z = Yr.snap.set(n);
      return p.options = m, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Rr.snapSize = yu;
    var rf = (0, ht.makeModifier)(yu, "snapSize");
    Rr.default = rf;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.snapEdges = Jn.default = void 0;
    var xu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Rr.snapSize.start(n)) : null;
    }, set: Rr.snapSize.set, defaults: (0, W.default)((0, dn.default)(Rr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Jn.snapEdges = xu;
    var nf = (0, ht.makeModifier)(xu, "snapEdges");
    Jn.default = nf;
    var cs = {};
    Object.defineProperty(cs, "__esModule", { value: true }), Object.defineProperty(cs, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var ps = {};
    Object.defineProperty(ps, "__esModule", { value: true }), Object.defineProperty(ps, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0;
    var of = { aspectRatio: Yn.default, restrictEdges: yr.default, restrict: Et.default, restrictRect: Zn.default, restrictSize: Kn.default, snapEdges: Jn.default, snap: Yr.default, snapSize: Rr.default, spring: cs.default, avoid: ss.default, transform: ps.default, rubberband: us.default };
    Qn.default = of;
    var $o = {};
    Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0;
    var af = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ht.default), n.usePlugin(Ho.default), o.modifiers = Qn.default, Qn.default) {
        var s = Qn.default[a], p = s._defaults, f = s._methods;
        p._methods = f, n.defaults.perAction[a] = p;
      }
    } };
    $o.default = af;
    var gn = {};
    function wu(n) {
      return (wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(wu, "wu");
    u(wu, "mo");
    function sf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(sf, "sf");
    u(sf, "bo");
    function Eu(n, o) {
      return (Eu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Eu, "Eu");
    u(Eu, "xo");
    function lf(n, o) {
      return !o || wu(o) !== "object" && typeof o != "function" ? At(n) : o;
    }
    __name(lf, "lf");
    u(lf, "wo");
    function At(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(At, "At");
    u(At, "_o");
    function ds(n) {
      return (ds = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ds, "ds");
    u(ds, "Po");
    function dr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(dr, "dr");
    u(dr, "Oo"), Object.defineProperty(gn, "__esModule", { value: true }), gn.PointerEvent = gn.default = void 0;
    var uf = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && Eu(h, g);
      })(m, n);
      var o, a, s, p, f = (s = m, p = function() {
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
        var h, g = ds(s);
        if (p) {
          var x = ds(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return lf(this, h);
      });
      function m(h, g, x, T, C, N) {
        var G;
        if (function(Z, F) {
          if (!(Z instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, m), dr(At(G = f.call(this, C)), "type", void 0), dr(At(G), "originalEvent", void 0), dr(At(G), "pointerId", void 0), dr(At(G), "pointerType", void 0), dr(At(G), "double", void 0), dr(At(G), "pageX", void 0), dr(At(G), "pageY", void 0), dr(At(G), "clientX", void 0), dr(At(G), "clientY", void 0), dr(At(G), "dt", void 0), dr(At(G), "eventable", void 0), J.pointerExtend(At(G), x), x !== g && J.pointerExtend(At(G), g), G.timeStamp = N, G.originalEvent = x, G.type = h, G.pointerId = J.getPointerId(g), G.pointerType = J.getPointerType(g), G.target = T, G.currentTarget = null, h === "tap") {
          var D = C.getPointerIndex(g);
          G.dt = G.timeStamp - C.pointers[D].downTime;
          var $ = G.timeStamp - C.tapTime;
          G.double = !!(C.prevTap && C.prevTap.type !== "doubletap" && C.prevTap.target === G.target && $ < 500);
        } else
          h === "doubletap" && (G.dt = g.timeStamp - C.tapTime);
        return G;
      }
      __name(m, "m");
      return u(m, "a"), o = m, (a = [{ key: "_subtractOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX -= g, this.pageY -= x, this.clientX -= g, this.clientY -= x, this;
      } }, { key: "_addOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX += g, this.pageY += x, this.clientX += g, this.clientY += x, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && sf(o.prototype, a), m;
    }(Rt.BaseEvent);
    gn.PointerEvent = gn.default = uf;
    var ki = {};
    Object.defineProperty(ki, "__esModule", { value: true }), ki.default = void 0;
    var Fo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Fo, n.defaults.actions.pointerEvents = Fo.defaults, (0, W.default)(n.actions.phaselessTypes, Fo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && fs(n), Zr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget, g = a.pointerIndex, x = p.pointers[g].hold, T = z.getPath(h), C = { interaction: p, pointer: f, event: m, eventTarget: h, type: "hold", targets: [], path: T, node: null }, N = 0; N < T.length; N++) {
          var G = T[N];
          C.node = G, s.fire("pointerEvents:collect-targets", C);
        }
        if (C.targets.length) {
          for (var D = 1 / 0, $ = 0; $ < C.targets.length; $++) {
            var Z = C.targets[$].eventable.options.holdDuration;
            Z < D && (D = Z);
          }
          x.duration = D, x.timeout = setTimeout(function() {
            Zr({ interaction: p, eventTarget: h, pointer: f, event: m, type: "hold" }, s);
          }, D);
        }
      })(n, o), Zr(n, o);
    }, "interactions:up": function(n, o) {
      fs(n), Zr(n, o), function(a, s) {
        var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget;
        p.pointerWasMoved || Zr({ interaction: p, eventTarget: h, pointer: f, event: m, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      fs(n), Zr(n, o);
    } }, PointerEvent: gn.PointerEvent, fire: Zr, collectEventTargets: Su, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Zr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, m = n.type, h = n.targets, g = h === void 0 ? Su(n, o) : h, x = new gn.PointerEvent(m, s, p, f, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: x });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: f, targets: g, type: m, pointerEvent: x }, C = 0; C < g.length; C++) {
        var N = g[C];
        for (var G in N.props || {})
          x[G] = N.props[G];
        var D = (0, Ge.default)(N.eventable, N.node);
        if (x._subtractOrigin(D), x.eventable = N.eventable, x.currentTarget = N.node, N.eventable.fire(x), x._addOrigin(D), x.immediatePropagationStopped || x.propagationStopped && C + 1 < g.length && g[C + 1].node !== x.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), m === "tap") {
        var $ = x.double ? Zr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "doubletap" }, o) : x;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return x;
    }
    __name(Zr, "Zr");
    u(Zr, "Mo");
    function Su(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, m = n.type, h = a.getPointerIndex(s), g = a.pointers[h];
      if (m === "tap" && (a.pointerWasMoved || !g || g.downTarget !== f))
        return [];
      for (var x = z.getPath(f), T = { interaction: a, pointer: s, event: p, eventTarget: f, type: m, path: x, targets: [], node: null }, C = 0; C < x.length; C++) {
        var N = x[C];
        T.node = N, o.fire("pointerEvents:collect-targets", T);
      }
      return m === "hold" && (T.targets = T.targets.filter(function(G) {
        var D;
        return G.eventable.options.holdDuration === ((D = a.pointers[h]) == null ? void 0 : D.hold.duration);
      })), T.targets;
    }
    __name(Su, "Su");
    u(Su, "jo");
    function fs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(fs, "fs");
    u(fs, "ko");
    var cf = Fo;
    ki.default = cf;
    var Uo = {};
    function pf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(pf, "pf");
    u(pf, "Ao"), Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var df = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(ki.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = pf, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, p = n.eventTarget, f = n.targets;
      if (s.type === "hold" && f.length) {
        var m = f[0].eventable.options.holdRepeatInterval;
        m <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: p, type: "hold", pointer: s, event: s }, o);
        }, m));
      }
    } }) };
    Uo.default = df;
    var Wo = {};
    function ff(n) {
      return (0, W.default)(this.events.options, n), this;
    }
    __name(ff, "ff");
    u(ff, "Co"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var hf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = ff;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var f = a.call(this, s, p);
        return f === this && (this.events.options[s] = p), f;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, f = n.eventTarget;
      o.interactables.forEachMatch(s, function(m) {
        var h = m.events, g = h.options;
        h.types[p] && h.types[p].length && m.testIgnoreAllow(g, s, f) && a.push({ node: s, eventable: h, props: { interactable: m } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, W.default)(a.events.options, o.pointerEvents.defaults), (0, W.default)(a.events.options, s.pointerEvents || {});
    } } };
    Wo.default = hf;
    var Vo = {};
    Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var vf = { id: "pointer-events", install: function(n) {
      n.usePlugin(ki), n.usePlugin(Uo.default), n.usePlugin(Wo.default);
    } };
    Vo.default = vf;
    var Ni = {};
    function Tu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, f) {
          for (var m = c.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], h = f.window.Promise, g = h ? [] : null, x = function() {
            var C = m[T], N = s.getRect(C);
            if (!N)
              return "break";
            var G = xe.find(f.interactions.list, function(ee) {
              return ee.interacting() && ee.interactable === s && ee.element === C && ee.prepared.name === p.name;
            }), D = void 0;
            if (G)
              G.move(), g && (D = G._reflowPromise || new h(function(ee) {
                G._reflowResolve = ee;
              }));
            else {
              var $ = (0, ue.tlbrToXywh)(N), Z = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f.now() }, F = J.coordsToEvent(Z);
              D = function(ee, se, pe, Ee, qe) {
                var be = ee.interactions.new({ pointerType: "reflow" }), De = { interaction: be, event: qe, pointer: qe, eventTarget: pe, phase: "reflow" };
                be.interactable = se, be.element = pe, be.prevEvent = qe, be.updatePointer(qe, qe, pe, true), J.setZeroCoords(be.coords.delta), (0, Gt.copyAction)(be.prepared, Ee), be._doPhase(De);
                var Ut = ee.window.Promise, zr = Ut ? new Ut(function(hs) {
                  be._reflowResolve = hs;
                }) : void 0;
                return be._reflowPromise = zr, be.start(Ee, se, pe), be._interacting ? (be.move(De), be.end(qe)) : (be.stop(), be._reflowResolve()), be.removePointer(qe, qe), zr;
              }(f, s, C, p, F);
            }
            g && g.push(D);
          }, T = 0; T < m.length && x() !== "break"; T++)
            ;
          return g && h.all(g).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Tu, "Tu");
    u(Tu, "Wo"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.install = Tu, Ni.default = void 0;
    var mf = { id: "reflow", install: Tu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o.interactions.list, a));
    } } };
    Ni.default = mf;
    var Ft = { exports: {} };
    function Ou(n) {
      return (Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Ou, "Ou");
    u(Ou, "Vo"), Object.defineProperty(Ft.exports, "__esModule", { value: true }), Ft.exports.default = void 0, gt.default.use(Wn.default), gt.default.use(vn.default), gt.default.use(Vo.default), gt.default.use(Vn.default), gt.default.use($o.default), gt.default.use(_o.default), gt.default.use(Ir.default), gt.default.use(Xr.default), gt.default.use(Ni.default);
    var gf = gt.default;
    if (Ft.exports.default = gf, Ou(Ft) === "object" && Ft)
      try {
        Ft.exports = gt.default;
      } catch (n) {
      }
    gt.default.default = gt.default, Ft = Ft.exports;
    var bn = { exports: {} };
    function Cu(n) {
      return (Cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Cu, "Cu");
    u(Cu, "$o"), Object.defineProperty(bn.exports, "__esModule", { value: true }), bn.exports.default = void 0;
    var bf = Ft.default;
    if (bn.exports.default = bf, Cu(bn) === "object" && bn)
      try {
        bn.exports = Ft.default;
      } catch (n) {
      }
    return Ft.default.default = Ft.default, bn.exports;
  });
});
var Kr = Xo(Pu());
function Iu(r) {
  let e = Jr(r);
  return new Kr.default(e).valueOf() * Math.PI;
}
__name(Iu, "Iu");
u(Iu, "V");
function qi(r) {
  let e = Jr(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(qi, "qi");
u(qi, "X");
function Du(r, e) {
  return new Kr.default(Jr(r)).valueOf() < new Kr.default(Jr(e)).valueOf();
}
__name(Du, "Du");
u(Du, "W");
function Ru(r, e) {
  return new Kr.default(Jr(r)).valueOf() > new Kr.default(Jr(e)).valueOf();
}
__name(Ru, "Ru");
u(Ru, "H");
function zu(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = Jr(r);
    return new Kr.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(zu, "zu");
u(zu, "Q");
function Jr(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(Jr, "Jr");
u(Jr, "l");
function ku(r) {
  try {
    let e = Jr(r), t = new Kr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(ku, "ku");
u(ku, "J");
var Of = Object.prototype.toString.call({});
var Cf = "!recursion-limit!";
var _f = 10;
function Ve(r, e = _f) {
  return Mf(r) || Af(r, e) || Pf(r, e);
}
__name(Ve, "Ve");
u(Ve, "c");
function Mf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(Mf, "Mf");
u(Mf, "M");
function Af(r, e) {
  if (e === 0)
    return Cf;
  if (r instanceof Map)
    return If(r, e);
  if (r instanceof Set)
    return Df(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Rf(r, e);
}
__name(Af, "Af");
u(Af, "O");
function Pf(r, e) {
  let t = String(r);
  return t !== Of ? t : zf(r, e);
}
__name(Pf, "Pf");
u(Pf, "F");
function If(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = Ve(i, e - 1), d = Ve(l, e - 1);
    t.push(`${c}: ${d}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(If, "If");
u(If, "G");
function Df(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Ve(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
__name(Df, "Df");
u(Df, "R");
function Rf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Ve(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
__name(Rf, "Rf");
u(Rf, "N");
function zf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], d = Ve(l, e - 1), v = Ve(c, e - 1);
    t.push(`${d}: ${v}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(zf, "zf");
u(zf, "q");
var ms = 0;
var kr = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), ms++;
    try {
      this.details = ms === 1 ? Ve(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      ms--;
    }
  }
}, "d");
var kf = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var Lt = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -Lt.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(Lt.parseFloat(r.substr(1)));
    let e = Lt.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -Lt.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = Lt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = Lt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of kf)
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
    let i = Lt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = Lt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var Li = Lt;
Li.CONSISTENT = new Lt(false, 0, 2, ", "), Li.EXACT = new Lt(true, 0, void 0, ", "), Li.MINIFIED = new Lt(true, 0, void 0, ","), Li.SIMPLIFIED = new Lt(true, 5e-4, 3, ", ");
var ce = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    ce.need(r != null, "notNull");
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
    throw new kr("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = ce.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new kr("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new kr("Unrecognized value type.", { v: r });
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
    return r = r || Li.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var xr = de;
xr.ZERO = new de(0, 0), xr.ONE = new de(1, 0), xr.I = new de(0, 1);
var Yo = "H";
var Zo = "X";
var Ko = "Y";
var Jo = "Z";
var Qo = "P";
var ea = "T";
var ta = "X^\xBD";
var ra = "Rx";
var na = "Ry";
var ia = "Rz";
var gs = "Swap";
var bs = "\u2022";
var ys = "Bloch";
var Nu = "|0>";
var Gu = "|1>";
var oa = "Measure";
function Ce(r) {
  class e extends r {
    get active() {
      return this.hasAttribute("data-active");
    }
    set active(i) {
      i ? this.activate() : this.deactivate();
    }
    activate() {
      this.setAttribute("data-active", ""), this.dispatchEvent(new Event("operation-active", { bubbles: true }));
    }
    deactivate() {
      this.removeAttribute("data-active");
    }
  }
  __name(e, "e");
  return u(e, "ActivateableMixinClass"), e;
}
__name(Ce, "Ce");
u(Ce, "ActivateableMixin");
var xs = /* @__PURE__ */ new WeakSet();
function Es(r) {
  xs.add(r), r.shadowRoot && Ss(r.shadowRoot), Os(r), Ts(r.ownerDocument);
}
__name(Es, "Es");
u(Es, "bind");
function Ss(r) {
  Os(r), Ts(r);
}
__name(Ss, "Ss");
u(Ss, "bindShadow");
var aa = /* @__PURE__ */ new WeakMap();
function Ts(r = document) {
  if (aa.has(r))
    return aa.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        ws(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let d of c.addedNodes)
          d instanceof Element && Os(d);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, aa.delete(r), t.disconnect();
  } };
  return aa.set(r, i), i;
}
__name(Ts, "Ts");
u(Ts, "listenForBind");
function Os(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    ws(e);
  r instanceof Element && r.hasAttribute("data-action") && ws(r);
}
__name(Os, "Os");
u(Os, "bindElements");
function Nf(r) {
  let e = r.currentTarget;
  for (let t of Lu(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      xs.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && xs.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(Nf, "Nf");
u(Nf, "handleEvent");
function* Lu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(Lu, "Lu");
u(Lu, "bindings");
function ws(r) {
  for (let e of Lu(r))
    r.addEventListener(e.type, Nf);
}
__name(ws, "ws");
u(ws, "bindActions");
function Cs(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(Cs, "Cs");
u(Cs, "register");
function _s(r, e) {
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
__name(_s, "_s");
u(_s, "findTarget");
function Ms(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(Ms, "Ms");
u(Ms, "findTargets");
function je(r, e) {
  Object.defineProperty(r, e, { configurable: true, get() {
    return _s(this, e);
  } });
}
__name(je, "je");
u(je, "target");
function fr(r, e) {
  Object.defineProperty(r, e, { configurable: true, get() {
    return Ms(this, e);
  } });
}
__name(fr, "fr");
u(fr, "targets");
function As(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(As, "As");
u(As, "autoShadowRoot");
var sa = /* @__PURE__ */ new WeakMap();
function j(r, e) {
  sa.has(r) || sa.set(r, []), sa.get(r).push(e);
}
__name(j, "j");
u(j, "attr");
var qu = /* @__PURE__ */ new WeakSet();
function la(r, e) {
  if (!qu.has(r)) {
    qu.add(r), e || (e = ju(Object.getPrototypeOf(r)));
    for (let t of e) {
      let i = r[t], l = Bu(t), c = { configurable: true, get() {
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
}
__name(la, "la");
u(la, "initializeAttrs");
function ju(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = sa.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(ju, "ju");
u(ju, "getAttrNames");
function Bu(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Bu, "Bu");
u(Bu, "attrToAttributeName");
function Ps(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...ju(r.prototype)].map(Bu).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Ps, "Ps");
u(Ps, "defineObservedAttributes");
var Gf = /* @__PURE__ */ new WeakSet();
function Hu(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Gf.add(r), As(r), la(r), Es(r), e && e.call(r), r.shadowRoot && Ss(r.shadowRoot);
}
__name(Hu, "Hu");
u(Hu, "initializeInstance");
function $u(r, e, t, i, l) {
  la(r), e !== "data-catalyst" && l && l.call(r, e, t, i);
}
__name($u, "$u");
u($u, "initializeAttributeChanged");
function Fu(r) {
  Ps(r), Cs(r);
}
__name(Fu, "Fu");
u(Fu, "initializeClass");
function ne(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    Hu(this, e);
  };
  let t = r.prototype.attributeChangedCallback;
  r.prototype.attributeChangedCallback = function(i, l, c) {
    $u(this, i, l, c, t);
  }, Fu(r);
}
__name(ne, "ne");
u(ne, "controller");
var yn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function Qr(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u(e, "AngleableMixinClass"), k([j], e.prototype, "angle", 2), k([j], e.prototype, "reducedAngle", 2), e;
}
__name(Qr, "Qr");
u(Qr, "AngleableMixin");
var xn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
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
  return u(e, "DisableableMixinClass"), k([j], e.prototype, "disabled", 2), e;
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
function ei(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(ei, "ei");
u(ei, "__rest");
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
  } catch (v) {
    d = { error: v };
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
function Re(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(Re, "Re");
u(Re, "__spreadArray");
var Se;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Se || (Se = {}));
var en;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(en || (en = {}));
var ji = Se.Start;
var ti = Se.Stop;
var ri = Se.Raise;
var wn = Se.Send;
var ua = Se.Cancel;
var Uu = Se.NullEvent;
var Is = Se.Assign;
var sm = Se.After;
var lm = Se.DoneState;
var ca = Se.Log;
var Wu = Se.Init;
var Bi = Se.Invoke;
var um = Se.ErrorExecution;
var Ds = Se.ErrorPlatform;
var Rs = Se.ErrorCustom;
var Hi = Se.Update;
var Vu = Se.Choose;
var Xu = Se.Pure;
var pa = ".";
var zs = {};
var da = "xstate.guard";
var Yu = "";
var Le = true;
var fa;
function Fi(r, e, t) {
  t === void 0 && (t = pa);
  var i = ni(r, t), l = ni(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Fi(i[c], l[c]) : false;
  });
}
__name(Fi, "Fi");
u(Fi, "matchesState");
function ha(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(ha, "ha");
u(ha, "getEventType");
function va(r, e) {
  try {
    return Nr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(va, "va");
u(va, "toStatePath");
function Lf(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(Lf, "Lf");
u(Lf, "isStateLike");
function ni(r, e) {
  if (Lf(r))
    return r.value;
  if (Nr(r))
    return $i(r);
  if (typeof r != "string")
    return r;
  var t = va(r, e);
  return $i(t);
}
__name(ni, "ni");
u(ni, "toStateValue");
function $i(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name($i, "$i");
u($i, "pathToStateValue");
function ii(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(ii, "ii");
u(ii, "mapValues");
function ks(r, e, t) {
  var i, l, c = {};
  try {
    for (var d = ve(Object.keys(r)), v = d.next(); !v.done; v = d.next()) {
      var b = v.value, y = r[b];
      !t(y) || (c[b] = e(y, b, r));
    }
  } catch (w) {
    i = { error: w };
  } finally {
    try {
      v && !v.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(ks, "ks");
u(ks, "mapFilterValues");
var Zu = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ve(r), d = c.next(); !d.done; d = c.next()) {
        var v = d.value;
        l = l[v];
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
function Ku(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var d = ve(r), v = d.next(); !v.done; v = d.next()) {
        var b = v.value;
        c = c[e][b];
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
    return c;
  };
}
__name(Ku, "Ku");
u(Ku, "nestedPath");
function Ui(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = ke(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Ui(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Ui, "Ui");
u(Ui, "toStatePaths");
function ke(r) {
  var e;
  return (e = []).concat.apply(e, Re([], me(r), false));
}
__name(ke, "ke");
u(ke, "flatten");
function Ju(r) {
  return Nr(r) ? r : [r];
}
__name(Ju, "Ju");
u(Ju, "toArrayStrict");
function qt(r) {
  return r === void 0 ? [] : Ju(r);
}
__name(qt, "qt");
u(qt, "toArray");
function En(r, e, t) {
  var i, l;
  if (Te(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var d = ve(Object.keys(r)), v = d.next(); !v.done; v = d.next()) {
      var b = v.value, y = r[b];
      Te(y) ? c[b] = y(e, t.data) : c[b] = y;
    }
  } catch (w) {
    i = { error: w };
  } finally {
    try {
      v && !v.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(En, "En");
u(En, "mapContext");
function Qu(r) {
  return /^(done|error)\./.test(r);
}
__name(Qu, "Qu");
u(Qu, "isBuiltInEvent");
function Ns(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
__name(Ns, "Ns");
u(Ns, "isPromiseLike");
function ec(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(ec, "ec");
u(ec, "isBehavior");
function ma(r, e) {
  var t, i, l = me([[], []], 2), c = l[0], d = l[1];
  try {
    for (var v = ve(r), b = v.next(); !b.done; b = v.next()) {
      var y = b.value;
      e(y) ? c.push(y) : d.push(y);
    }
  } catch (w) {
    t = { error: w };
  } finally {
    try {
      b && !b.done && (i = v.return) && i.call(v);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, d];
}
__name(ma, "ma");
u(ma, "partition");
function tc(r, e) {
  return ii(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: tc(t, l) };
    }
  });
}
__name(tc, "tc");
u(tc, "updateHistoryStates");
function rc(r, e) {
  return { current: e, states: tc(r, e) };
}
__name(rc, "rc");
u(rc, "updateHistoryValue");
function Gs(r, e, t, i) {
  Le || Xe(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, d) {
    var v, b, y = d.assignment, w = { state: i, action: d, _event: e }, A = {};
    if (Te(y))
      A = y(c, e.data, w);
    else
      try {
        for (var O = ve(Object.keys(y)), M = O.next(); !M.done; M = O.next()) {
          var R = M.value, S = y[R];
          A[R] = Te(S) ? S(c, e.data, w) : S;
        }
      } catch (_) {
        v = { error: _ };
      } finally {
        try {
          M && !M.done && (b = O.return) && b.call(O);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, c, A);
  }, r);
  return l;
}
__name(Gs, "Gs");
u(Gs, "updateContext");
var Xe = u(function() {
}, "warn");
Le || (Xe = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function Nr(r) {
  return Array.isArray(r);
}
__name(Nr, "Nr");
u(Nr, "isArray");
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
function ga(r, e) {
  if (!!r)
    return ge(r) ? { type: da, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: da, name: r.name, predicate: r } : r;
}
__name(ga, "ga");
u(ga, "toGuard");
function nc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(nc, "nc");
u(nc, "isObservable");
var wr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var mm = (fa = {}, fa[wr] = function() {
  return this;
}, fa[Symbol.observable] = function() {
  return this;
}, fa);
function Er(r) {
  return !!r && "__xstatenode" in r;
}
__name(Er, "Er");
u(Er, "isMachine");
function ic(r) {
  return !!r && typeof r.send == "function";
}
__name(ic, "ic");
u(ic, "isActor");
function Wi(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
__name(Wi, "Wi");
u(Wi, "toEventObject");
function nt(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Wi(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(nt, "nt");
u(nt, "toSCXMLEvent");
function Sn(r, e) {
  var t = Ju(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Er(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
__name(Sn, "Sn");
u(Sn, "toTransitionConfigArray");
function oc(r) {
  if (!(r === void 0 || r === Yu))
    return qt(r);
}
__name(oc, "oc");
u(oc, "normalizeTarget");
function ac(r, e, t) {
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
__name(ac, "ac");
u(ac, "reportUnhandledExceptionOnInvocation");
function ba(r, e, t, i, l) {
  var c = r.options.guards, d = { state: l, cond: e, _event: i };
  if (e.type === da)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, d);
  var v = c == null ? void 0 : c[e.type];
  if (!v)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return v(t, i.data, d);
}
__name(ba, "ba");
u(ba, "evaluateGuard");
function ya(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(ya, "ya");
u(ya, "toInvokeSource");
function Vi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Vi, "Vi");
u(Vi, "toObserver");
function Xi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Xi, "Xi");
u(Xi, "createInvokeId");
var Tn = nt({ type: Wu });
function xa(r, e) {
  return e && e[r] || void 0;
}
__name(xa, "xa");
u(xa, "getActionFunction");
function oi(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = xa(r, e);
    Te(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Te(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = xa(r.type, e);
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
__name(oi, "oi");
u(oi, "toActionObject");
var Yi = u(function(r, e) {
  if (!r)
    return [];
  var t = Nr(r) ? r : [r];
  return t.map(function(i) {
    return oi(i, e);
  });
}, "toActionObjects");
function Ea(r) {
  var e = oi(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
__name(Ea, "Ea");
u(Ea, "toActivityDefinition");
function sc(r) {
  return ge(r) ? { type: ri, event: r } : Ls(r, { to: en.Internal });
}
__name(sc, "sc");
u(sc, "raise");
function qf(r) {
  return { type: ri, _event: nt(r.event) };
}
__name(qf, "qf");
u(qf, "resolveRaise");
function Ls(r, e) {
  return { to: e ? e.to : void 0, type: wn, event: Te(r) ? r : Wi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : ha(r) };
}
__name(Ls, "Ls");
u(Ls, "send");
function jf(r, e, t, i) {
  var l = { _event: t }, c = nt(Te(r.event) ? r.event(e, t.data, l) : r.event), d;
  if (ge(r.delay)) {
    var v = i && i[r.delay];
    d = Te(v) ? v(e, t.data, l) : v;
  } else
    d = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var b = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: b, _event: c, event: c.data, delay: d });
}
__name(jf, "jf");
u(jf, "resolveSend");
var Bf = u(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var lc = u(function(r) {
  return { type: ua, sendId: r };
}, "cancel");
function uc(r) {
  var e = Ea(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
__name(uc, "uc");
u(uc, "start");
function cc(r) {
  var e = Te(r) ? r : Ea(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
__name(cc, "cc");
u(cc, "stop");
function Hf(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
__name(Hf, "Hf");
u(Hf, "resolveStop");
function pc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
__name(pc, "pc");
u(pc, "after");
function Zi(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(Zi, "Zi");
u(Zi, "done");
function ai(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(ai, "ai");
u(ai, "doneInvoke");
function On(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(On, "On");
u(On, "error");
function wa(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var d = me(c ? [[], l] : ma(l, function(O) {
    return O.type === Is;
  }), 2), v = d[0], b = d[1], y = v.length ? Gs(t, i, v, e) : t, w = c ? [t] : void 0, A = ke(b.map(function(O) {
    var M;
    switch (O.type) {
      case ri:
        return qf(O);
      case wn:
        var R = jf(O, y, i, r.options.delays);
        return Le || Xe(!ge(O.delay) || typeof R.delay == "number", "No delay reference for delay expression '".concat(O.delay, "' was found on machine '").concat(r.id, "'")), R;
      case ca:
        return Bf(O, y, i);
      case Vu: {
        var S = O, _ = (M = S.conds.find(function(U) {
          var re = ga(U.cond, r.options.guards);
          return !re || ba(r, re, y, i, e);
        })) === null || M === void 0 ? void 0 : M.actions;
        if (!_)
          return [];
        var P = me(wa(r, e, y, i, Yi(qt(_), r.options.actions), c), 2), I = P[0], L = P[1];
        return y = L, w == null || w.push(y), I;
      }
      case Xu: {
        var _ = O.get(y, i.data);
        if (!_)
          return [];
        var E = me(wa(r, e, y, i, Yi(qt(_), r.options.actions), c), 2), B = E[0], z = E[1];
        return y = z, w == null || w.push(y), B;
      }
      case ti:
        return Hf(O, y, i);
      case Is: {
        y = Gs(y, i, [O], e), w == null || w.push(y);
        break;
      }
      default:
        var X = oi(O, r.options.actions), V = X.exec;
        if (V && w) {
          var H = w.length - 1;
          X = Y(Y({}, X), { exec: function(U) {
            for (var re = [], ie = 1; ie < arguments.length; ie++)
              re[ie - 1] = arguments[ie];
            V.apply(void 0, Re([w[H]], me(re), false));
          } });
        }
        return X;
    }
  }).filter(function(O) {
    return !!O;
  }));
  return [A, y];
}
__name(wa, "wa");
u(wa, "resolveActions");
var dc = [];
var Cn = u(function(r, e) {
  dc.push(r);
  var t = e(r);
  return dc.pop(), t;
}, "provide");
function fc(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[wr] = function() {
    return this;
  }, e;
}
__name(fc, "fc");
u(fc, "createNullActor");
function hc(r, e, t, i) {
  var l, c = ya(r.src), d = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], v = r.data ? En(r.data, t, i) : void 0, b = d ? vc(d, r.id, v) : fc(r.id);
  return b.meta = r, b;
}
__name(hc, "hc");
u(hc, "createInvocableActor");
function vc(r, e, t) {
  var i = fc(e);
  if (i.deferred = true, Er(r)) {
    var l = i.state = Cn(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(vc, "vc");
u(vc, "createDeferredActor");
function $f(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name($f, "$f");
u($f, "isActor");
function mc(r) {
  return $f(r) && "id" in r;
}
__name(mc, "mc");
u(mc, "isSpawnedActor");
function gc(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[wr] = function() {
    return this;
  }, e), r);
}
__name(gc, "gc");
u(gc, "toActorRef");
var Ki = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function _n(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  });
}
__name(_n, "_n");
u(_n, "getChildren");
function js(r) {
  var e = [r];
  return Ki(r) ? e : e.concat(ke(_n(r).map(js)));
}
__name(js, "js");
u(js, "getAllStateNodes");
function Mn(r, e) {
  var t, i, l, c, d, v, b, y, w = new Set(r), A = qs(w), O = new Set(e);
  try {
    for (var M = ve(O), R = M.next(); !R.done; R = M.next())
      for (var S = R.value, _ = S.parent; _ && !O.has(_); )
        O.add(_), _ = _.parent;
  } catch (H) {
    t = { error: H };
  } finally {
    try {
      R && !R.done && (i = M.return) && i.call(M);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var P = qs(O);
  try {
    for (var I = ve(O), L = I.next(); !L.done; L = I.next()) {
      var S = L.value;
      if (S.type === "compound" && (!P.get(S) || !P.get(S).length))
        A.get(S) ? A.get(S).forEach(function(U) {
          return O.add(U);
        }) : S.initialStateNodes.forEach(function(U) {
          return O.add(U);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d = void 0, ve(_n(S))), B = E.next(); !B.done; B = E.next()) {
            var z = B.value;
            z.type !== "history" && (O.has(z) || (O.add(z), A.get(z) ? A.get(z).forEach(function(U) {
              return O.add(U);
            }) : z.initialStateNodes.forEach(function(U) {
              return O.add(U);
            })));
          }
        } catch (U) {
          d = { error: U };
        } finally {
          try {
            B && !B.done && (v = E.return) && v.call(E);
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
    for (var X = ve(O), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, _ = S.parent; _ && !O.has(_); )
        O.add(_), _ = _.parent;
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
  return O;
}
__name(Mn, "Mn");
u(Mn, "getConfiguration");
function bc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (Ki(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = bc(c, e);
  }), l;
}
__name(bc, "bc");
u(bc, "getValueFromAdj");
function qs(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = ve(r), c = l.next(); !c.done; c = l.next()) {
      var d = c.value;
      i.has(d) || i.set(d, []), d.parent && (i.has(d.parent) || i.set(d.parent, []), i.get(d.parent).push(d));
    }
  } catch (v) {
    e = { error: v };
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
__name(qs, "qs");
u(qs, "getAdjList");
function yc(r, e) {
  var t = Mn([r], e);
  return bc(r, qs(t));
}
__name(yc, "yc");
u(yc, "getValue");
function Ji(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(Ji, "Ji");
u(Ji, "has");
function xc(r) {
  return Re([], me(new Set(ke(Re([], me(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(xc, "xc");
u(xc, "nextEvents");
function An(r, e) {
  return e.type === "compound" ? _n(e).some(function(t) {
    return t.type === "final" && Ji(r, t);
  }) : e.type === "parallel" ? _n(e).every(function(t) {
    return An(r, t);
  }) : false;
}
__name(An, "An");
u(An, "isInFinalState");
function wc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(wc, "wc");
u(wc, "getMeta");
function Bs(r) {
  return new Set(ke(r.map(function(e) {
    return e.tags;
  })));
}
__name(Bs, "Bs");
u(Bs, "getTagsFromConfiguration");
function Hs(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Hs(r[l], e[l]);
  });
}
__name(Hs, "Hs");
u(Hs, "stateValuesEqual");
function Ec(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Ec, "Ec");
u(Ec, "isStateConfig");
function Sc(r, e) {
  var t = r.exec, i = Y(Y({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(Sc, "Sc");
u(Sc, "bindActionToState");
var hr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = zs, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || zs, this.meta = wc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return xc(t.configuration);
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
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ge(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, Re([], me(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(d) {
        return c + t + d;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ei(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Fi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    Le && Xe(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Ff = { deferEvents: false };
var $s = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, Ff), e);
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
var Fs = /* @__PURE__ */ new Map();
var Uf = 0;
var Qi = { bookId: function() {
  return "x:".concat(Uf++);
}, register: function(r, e) {
  return Fs.set(r, e), r;
}, get: function(r) {
  return Fs.get(r);
}, free: function(r) {
  Fs.delete(r);
} };
function Sa() {
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
__name(Sa, "Sa");
u(Sa, "getGlobal");
function Wf() {
  var r = Sa();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(Wf, "Wf");
u(Wf, "getDevTools");
function Tc(r) {
  if (!!Sa()) {
    var e = Wf();
    e && e.register(r);
  }
}
__name(Tc, "Tc");
u(Tc, "registerService");
function Oc(r, e) {
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
  }, "flush"), v = gc({ id: e.id, send: function(y) {
    l.push(y), d();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, w, A) {
    var O = Vi(y, w, A);
    return i.add(O), O.next(t), { unsubscribe: function() {
      i.delete(O);
    } };
  } }), b = { parent: e.parent, self: v, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(b) : t, v;
}
__name(Oc, "Oc");
u(Oc, "spawnBehavior");
var Vf = { sync: false, autoForward: false };
var bt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(bt || (bt = {}));
var Cc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.scheduler = new $s(), this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = bt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(w, A) {
      if (Nr(w))
        return i.batch(w), i.state;
      var O = nt(Wi(w, A));
      if (i.status === bt.Stopped)
        return Le || Xe(false, 'Event "'.concat(O.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(O.data))), i.state;
      if (i.status !== bt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(O.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(O.data)));
      return i.scheduler.schedule(function() {
        i.forward(O);
        var M = i.nextState(O);
        i.update(M, O);
      }), i._state;
    }, this.sendTo = function(w, A) {
      var O = i.parent && (A === en.Parent || i.parent.id === A), M = O ? i.parent : ge(A) ? i.children.get(A) || Qi.get(A) : ic(A) ? A : void 0;
      if (!M) {
        if (!O)
          throw new Error("Unable to send event to child '".concat(A, "' from service '").concat(i.id, "'."));
        Le || Xe(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(w.type));
        return;
      }
      "machine" in M ? M.send(Y(Y({}, w), { name: w.name === Rs ? "".concat(On(i.id)) : w.name, origin: i.sessionId })) : M.send(w.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c = l.clock, d = l.logger, v = l.parent, b = l.id, y = b !== void 0 ? b : e.id;
    this.id = y, this.logger = d, this.clock = c, this.parent = v, this.options = l, this.scheduler = new $s({ deferEvents: this.options.deferEvents }), this.sessionId = Qi.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : Cn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || Xe(this.status !== bt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ve(e.actions), d = c.next(); !d.done; d = c.next()) {
        var v = d.value;
        this.exec(v, e, t);
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
    var i, l, c, d, v, b, y, w, A = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      A.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var O = ve(this.eventListeners), M = O.next(); !M.done; M = O.next()) {
          var R = M.value;
          R(e.event);
        }
      } catch (H) {
        i = { error: H };
      } finally {
        try {
          M && !M.done && (l = O.return) && l.call(O);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var S = ve(this.listeners), _ = S.next(); !_.done; _ = S.next()) {
        var R = _.value;
        R(e, e.event);
      }
    } catch (H) {
      c = { error: H };
    } finally {
      try {
        _ && !_.done && (d = S.return) && d.call(S);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var P = ve(this.contextListeners), I = P.next(); !I.done; I = P.next()) {
        var L = I.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      v = { error: H };
    } finally {
      try {
        I && !I.done && (b = P.return) && b.call(P);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var E = An(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === A.machine;
      }), z = B && B.doneData ? En(B.doneData, e.context, t) : void 0;
      try {
        for (var X = ve(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var R = V.value;
          R(ai(this.id, z));
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
    return this.listeners.add(e), this.status === bt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, d = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), d = e.complete.bind(e)), this.listeners.add(c), this.status === bt.Running && c(this.state), d && this.onDone(d), { unsubscribe: function() {
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
    if (this.status === bt.Running)
      return this;
    this.machine._init(), Qi.register(this.sessionId, this), this.initialized = true, this.status = bt.Running;
    var i = e === void 0 ? this.initialState : Cn(this, function() {
      return Ec(e) ? t.machine.resolveState(e) : t.machine.resolveState(hr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Tn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, d, v, b, y, w, A = this;
    try {
      for (var O = ve(this.listeners), M = O.next(); !M.done; M = O.next()) {
        var R = M.value;
        this.listeners.delete(R);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        M && !M.done && (t = O.return) && t.call(O);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var S = ve(this.stopListeners), _ = S.next(); !_.done; _ = S.next()) {
        var R = _.value;
        R(), this.stopListeners.delete(R);
      }
    } catch (V) {
      i = { error: V };
    } finally {
      try {
        _ && !_.done && (l = S.return) && l.call(S);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var P = ve(this.contextListeners), I = P.next(); !I.done; I = P.next()) {
        var R = I.value;
        this.contextListeners.delete(R);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        I && !I.done && (d = P.return) && d.call(P);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var L = ve(this.doneListeners), E = L.next(); !E.done; E = L.next()) {
        var R = E.value;
        this.doneListeners.delete(R);
      }
    } catch (V) {
      v = { error: V };
    } finally {
      try {
        E && !E.done && (b = L.return) && b.call(L);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    Re([], me(this.state.configuration), false).sort(function(V, H) {
      return H.order - V.order;
    }).forEach(function(V) {
      var H, U;
      try {
        for (var re = ve(V.definition.exit), ie = re.next(); !ie.done; ie = re.next()) {
          var W = ie.value;
          A.exec(W, A.state);
        }
      } catch (ue) {
        H = { error: ue };
      } finally {
        try {
          ie && !ie.done && (U = re.return) && U.call(re);
        } finally {
          if (H)
            throw H.error;
        }
      }
    }), this.children.forEach(function(V) {
      Te(V.stop) && V.stop();
    });
    try {
      for (var B = ve(Object.keys(this.delayedEventsMap)), z = B.next(); !z.done; z = B.next()) {
        var X = z.value;
        this.clock.clearTimeout(this.delayedEventsMap[X]);
      }
    } catch (V) {
      y = { error: V };
    } finally {
      try {
        z && !z.done && (w = B.return) && w.call(B);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return this.scheduler.clear(), this.initialized = false, this.status = bt.Stopped, Qi.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === bt.NotStarted && this.options.deferEvents)
      Le || Xe(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== bt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, d = false, v = [], b = u(function(O) {
        var M = nt(O);
        t.forward(M), c = Cn(t, function() {
          return t.machine.transition(c, M);
        }), v.push.apply(v, Re([], me(c.actions.map(function(R) {
          return Sc(R, c);
        })), false)), d = d || !!c.changed;
      }, "_loop_1");
      try {
        for (var y = ve(e), w = y.next(); !w.done; w = y.next()) {
          var A = w.value;
          b(A);
        }
      } catch (O) {
        i = { error: O };
      } finally {
        try {
          w && !w.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = d, c.actions = v, t.update(c, nt(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = nt(e);
    if (i.name.indexOf(Ds) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Ds) === 0;
    }))
      throw i.data.data;
    var l = Cn(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = ve(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var d = c.value, v = this.children.get(d);
        if (!v)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d, "'."));
        v.send(e);
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
    var l = t.context, c = t._event, d = e.exec || xa(e.type, i), v = Te(d) ? d : d ? d.exec : e.exec;
    if (v)
      try {
        return v(l, c.data, { action: e, state: this.state, _event: c });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case wn:
        var b = e;
        if (typeof b.delay == "number") {
          this.defer(b);
          return;
        } else
          b.to ? this.sendTo(b._event, b.to) : this.send(b._event);
        break;
      case ua:
        this.cancel(e.sendId);
        break;
      case ji: {
        if (this.status !== bt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Se.Invoke) {
          var w = ya(y.src), A = this.machine.options.services ? this.machine.options.services[w.type] : void 0, O = y.id, M = y.data;
          Le || Xe(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var R = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!A) {
            Le || Xe(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = M ? En(M, l, c) : void 0;
          if (typeof A == "string")
            return;
          var _ = Te(A) ? A(l, c.data, { data: S, src: w, meta: y.meta }) : A;
          if (!_)
            return;
          var P = void 0;
          Er(_) && (_ = S ? _.withContext(S) : _, P = { autoForward: R }), this.spawn(_, O, P);
        } else
          this.spawnActivity(y);
        break;
      }
      case ti: {
        this.stopChild(e.activity.id);
        break;
      }
      case ca:
        var I = e.label, L = e.value;
        I ? this.logger(I, L) : this.logger(L);
        break;
      default:
        Le || Xe(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), Te(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (Ns(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Te(e))
      return this.spawnCallback(e, t);
    if (mc(e))
      return this.spawnActor(e, t);
    if (nc(e))
      return this.spawnObservable(e, t);
    if (Er(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (ec(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c = Y(Y({}, Vf), t);
    c.sync && l.onTransition(function(v) {
      i.send(Hi, { state: v, id: l.id });
    });
    var d = l;
    return this.children.set(l.id, d), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(v) {
      i.removeChild(l.id), i.send(nt(v, { origin: l.id }));
    }).start(), d;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Oc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, d;
    e.then(function(b) {
      c || (d = b, l.removeChild(t), l.send(nt(ai(t, b), { origin: t })));
    }, function(b) {
      if (!c) {
        l.removeChild(t);
        var y = On(t, b);
        try {
          l.send(nt(y, { origin: t }));
        } catch (w) {
          ac(b, w, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      var A = Vi(b, y, w), O = false;
      return e.then(function(M) {
        O || (A.next(M), !O && A.complete());
      }, function(M) {
        O || A.error(M);
      }), { unsubscribe: function() {
        return O = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return d;
    } }, i[wr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, d = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), b, y = u(function(O) {
      b = O, v.forEach(function(M) {
        return M(O);
      }), !c && l.send(nt(O, { origin: t }));
    }, "receive"), w;
    try {
      w = e(y, function(O) {
        d.add(O);
      });
    } catch (O) {
      this.send(On(t, O));
    }
    if (Ns(w))
      return this.spawnPromise(w, t);
    var A = (i = { id: t, send: function(O) {
      return d.forEach(function(M) {
        return M(O);
      });
    }, subscribe: function(O) {
      var M = Vi(O);
      return v.add(M.next), { unsubscribe: function() {
        v.delete(M.next);
      } };
    }, stop: function() {
      c = true, Te(w) && w();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return b;
    } }, i[wr] = function() {
      return this;
    }, i);
    return this.children.set(t, A), A;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, d = e.subscribe(function(b) {
      c = b, l.send(nt(b, { origin: t }));
    }, function(b) {
      l.removeChild(t), l.send(nt(On(t, b), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(nt(ai(t), { origin: t }));
    }), v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      return e.subscribe(b, y, w);
    }, stop: function() {
      return d.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[wr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      Le || Xe(false, "No implementation found for activity '".concat(e.type, "'"));
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
    } }, i[wr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = Sa();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Tc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[wr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === bt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = Fe, r;
}();
function Fe(r, e) {
  var t = new Cc(r, e);
  return t;
}
__name(Fe, "Fe");
u(Fe, "interpret");
function Xf(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(Xf, "Xf");
u(Xf, "toInvokeSource");
function eo(r) {
  return Y(Y({ type: Bi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ei(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: Bi, src: Xf(r.src) });
  } });
}
__name(eo, "eo");
u(eo, "toInvokeDefinition");
var ui = "";
var Us = "#";
var to = "*";
var si = {};
var li = u(function(r) {
  return r[0] === Us;
}, "isStateId");
var Yf = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Zf = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Er(c.target));
  }), l = e === ui ? "the transient event" : "event '".concat(e, "'");
  Xe(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var _c = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Yf(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : pa), this.id = this.config.id || Re([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d = this.config.schema) !== null && d !== void 0 ? d : {}, this.description = this.config.description, Le || Xe(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ii(this.config.states, function(y, w) {
      var A, O = new r(y, {}, void 0, { parent: c, key: w });
      return Object.assign(c.idMap, Y((A = {}, A[O.id] = O, A), O.idMap)), O;
    }) : si;
    var v = 0;
    function b(y) {
      var w, A;
      y.order = v++;
      try {
        for (var O = ve(_n(y)), M = O.next(); !M.done; M = O.next()) {
          var R = M.value;
          b(R);
        }
      } catch (S) {
        w = { error: S };
      } finally {
        try {
          M && !M.done && (A = O.return) && A.call(O);
        } finally {
          if (w)
            throw w.error;
        }
      }
    }
    __name(b, "b");
    u(b, "dfs"), b(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var w = y.event;
      return w === ui;
    }) : ui in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = qt(this.config.entry || this.config.onEntry).map(function(y) {
      return oi(y);
    }), this.onExit = qt(this.config.exit || this.config.onExit).map(function(y) {
      return oi(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = qt(this.config.invoke).map(function(y, w) {
      var A, O;
      if (Er(y)) {
        var M = Xi(c.id, w);
        return c.machine.options.services = Y((A = {}, A[M] = y, A), c.machine.options.services), eo({ src: M, id: M });
      } else if (ge(y.src)) {
        var M = y.id || Xi(c.id, w);
        return eo(Y(Y({}, y), { id: M, src: y.src }));
      } else if (Er(y.src) || Te(y.src)) {
        var M = y.id || Xi(c.id, w);
        return c.machine.options.services = Y((O = {}, O[M] = y.src, O), c.machine.options.services), eo(Y(Y({ id: M }, y), { src: M }));
      } else {
        var R = y.src;
        return eo(Y(Y({ id: Xi(c.id, w) }, y), { src: R }));
      }
    }), this.activities = qt(this.config.activities).concat(this.invoke).map(function(y) {
      return Ea(y);
    }), this.transition = this.transition.bind(this), this.tags = qt(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || js(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, d = i.guards, v = i.services, b = i.delays;
    return new r(this.config, { actions: Y(Y({}, l), e.actions), activities: Y(Y({}, c), e.activities), guards: Y(Y({}, d), e.guards), services: Y(Y({}, v), e.services), delays: Y(Y({}, b), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Te(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ii(this.states, function(e) {
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
    var t = e === ui, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === to;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, d) {
      var v = Te(c) ? "".concat(e.id, ":delay[").concat(d, "]") : c, b = pc(v, e.id);
      return e.onEntry.push(Ls(b, { delay: c })), e.onExit.push(lc(b)), b;
    }, "mutateEntryExit"), l = Nr(t) ? t.map(function(c, d) {
      var v = i(c.delay, d);
      return Y(Y({}, c), { event: v });
    }) : ke(Object.keys(t).map(function(c, d) {
      var v = t[c], b = ge(v) ? { target: v } : v, y = isNaN(+c) ? c : +c, w = i(y, d);
      return qt(b).map(function(A) {
        return Y(Y({}, A), { event: w, delay: y });
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
    var l = e instanceof hr ? e.value : ni(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var d = Object.keys(l), v = [this];
    return v.push.apply(v, Re([], me(ke(d.map(function(b) {
      return i.getStateNode(b).getStateNodes(l[b]);
    }))), false)), v;
  }, r.prototype.handles = function(e) {
    var t = ha(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof hr ? e : hr.create(e), i = Array.from(Mn([], this.getStateNodes(t.value)));
    return new hr(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: An(i, this), tags: Bs(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), d = c._transition(e[l[0]], t, i);
    return !d || !d.transitions.length ? this.next(t, i) : d;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, d = {};
    try {
      for (var v = ve(Object.keys(e)), b = v.next(); !b.done; b = v.next()) {
        var y = b.value, w = e[y];
        if (!!w) {
          var A = this.getStateNode(y), O = A._transition(w, t, i);
          O && (d[y] = O);
        }
      }
    } catch (I) {
      l = { error: I };
    } finally {
      try {
        b && !b.done && (c = v.return) && c.call(v);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var M = Object.keys(d).map(function(I) {
      return d[I];
    }), R = ke(M.map(function(I) {
      return I.transitions;
    })), S = M.some(function(I) {
      return I.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var _ = ke(M.map(function(I) {
      return I.entrySet;
    })), P = ke(Object.keys(d).map(function(I) {
      return d[I].configuration;
    }));
    return { transitions: R, entrySet: _, exitSet: ke(M.map(function(I) {
      return I.exitSet;
    })), configuration: P, source: t, actions: ke(Object.keys(d).map(function(I) {
      return d[I].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, nt(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, d = t.name, v = [], b = [], y;
    try {
      for (var w = ve(this.getCandidates(d)), A = w.next(); !A.done; A = w.next()) {
        var O = A.value, M = O.cond, R = O.in, S = e.context, _ = R ? ge(R) && li(R) ? e.matches(ni(this.getStateNodeById(R).path, this.delimiter)) : Fi(ni(R, this.delimiter), Zu(this.path.slice(0, -2))(e.value)) : true, P = false;
        try {
          P = !M || ba(this.machine, M, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(M.name || M.type, "' in transition for event '").concat(d, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (P && _) {
          O.target !== void 0 && (b = O.target), v.push.apply(v, Re([], me(O.actions), false)), y = O;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        A && !A.done && (l = w.return) && l.call(w);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!b.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: v };
      var I = ke(b.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), L = !!y.internal, E = L ? [] : ke(I.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: L ? [] : [this], configuration: I, source: e, actions: v };
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
    var c, d, v, b, y = Mn([], l ? this.getStateNodes(l.value) : [this]), w = e.configuration.length ? Mn(y, e.configuration) : y;
    try {
      for (var A = ve(w), O = A.next(); !O.done; O = A.next()) {
        var M = O.value;
        Ji(y, M) || e.entrySet.push(M);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        O && !O.done && (d = A.return) && d.call(A);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var R = ve(y), S = R.next(); !S.done; S = R.next()) {
        var M = S.value;
        (!Ji(w, M) || Ji(e.exitSet, M.parent)) && e.exitSet.push(M);
      }
    } catch (X) {
      v = { error: X };
    } finally {
      try {
        S && !S.done && (b = R.return) && b.call(R);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var _ = ke(e.entrySet.map(function(X) {
      var V = [];
      if (X.type !== "final")
        return V;
      var H = X.parent;
      if (!H.parent)
        return V;
      V.push(Zi(X.id, X.doneData), Zi(H.id, X.doneData ? En(X.doneData, t, i) : void 0));
      var U = H.parent;
      return U.type === "parallel" && _n(U).every(function(re) {
        return An(e.configuration, re);
      }) && V.push(Zi(U.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var P = new Set(e.entrySet), I = new Set(e.exitSet), L = me([ke(Array.from(P).map(function(X) {
      return Re(Re([], me(X.activities.map(function(V) {
        return uc(V);
      })), false), me(X.onEntry), false);
    })).concat(_.map(sc)), ke(Array.from(I).map(function(X) {
      return Re(Re([], me(X.onExit), false), me(X.activities.map(function(V) {
        return cc(V);
      })), false);
    }))], 2), E = L[0], B = L[1], z = Yi(B.concat(e.actions).concat(E), this.machine.options.actions);
    return z;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = nt(t), c;
    if (e instanceof hr)
      c = i === void 0 ? e : this.resolveState(hr.from(e, i));
    else {
      var d = ge(e) ? this.resolve($i(this.getResolvedPath(e))) : this.resolve(e), v = i != null ? i : this.machine.context;
      c = this.resolveState(hr.from(d, v));
    }
    if (!Le && l.name === to)
      throw new Error("An event cannot have the wildcard type ('".concat(to, "')"));
    if (this.strict && !this.events.includes(l.name) && !Qu(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var b = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, y = Mn([], this.getStateNodes(c.value)), w = b.configuration.length ? Mn(y, b.configuration) : y;
    return b.configuration = Re([], me(w), false), this.resolveTransition(b, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, Re([], me(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, d, v = this;
    l === void 0 && (l = Tn);
    var b = e.configuration, y = !t || e.transitions.length > 0, w = y ? yc(this.machine, b) : void 0, A = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, O = this.getActions(e, i, l, t), M = t ? Y({}, t.activities) : {};
    try {
      for (var R = ve(O), S = R.next(); !S.done; S = R.next()) {
        var _ = S.value;
        _.type === ji ? M[_.activity.id || _.activity.type] = _ : _.type === ti && (M[_.activity.id || _.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        S && !S.done && (d = R.return) && d.call(R);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var P = me(wa(this, t, i, l, O, this.machine.config.preserveActionOrder), 2), I = P[0], L = P[1], E = me(ma(I, function(fe) {
      return fe.type === ri || fe.type === wn && fe.to === en.Internal;
    }), 2), B = E[0], z = E[1], X = I.filter(function(fe) {
      var Qe;
      return fe.type === ji && ((Qe = fe.activity) === null || Qe === void 0 ? void 0 : Qe.type) === Bi;
    }), V = X.reduce(function(fe, Qe) {
      return fe[Qe.activity.id] = hc(Qe.activity, v.machine, L, l), fe;
    }, t ? Y({}, t.children) : {}), H = y ? e.configuration : t ? t.configuration : [], U = An(H, this), re = new hr({ value: w || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: w ? A ? rc(A, w) : void 0 : t ? t.historyValue : void 0, history: !w || e.source ? t : void 0, actions: w ? z : [], activities: w ? M : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: U, tags: t == null ? void 0 : t.tags, machine: this }), ie = i !== L;
    re.changed = l.name === Hi || ie;
    var W = re.history;
    W && delete W.history;
    var ue = !U && (this._transient || b.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ue || l.name === ui))
      return re;
    var Pe = re;
    if (!U)
      for (ue && (Pe = this.resolveRaisedTransition(Pe, { type: Uu }, l)); B.length; ) {
        var We = B.shift();
        Pe = this.resolveRaisedTransition(Pe, We._event, l);
      }
    var Ge = Pe.changed || (W ? !!Pe.actions.length || ie || typeof W.value != typeof Pe.value || !Hs(Pe.value, W.value) : void 0);
    return Pe.changed = Ge, Pe.history = W, Pe.tags = Bs(Pe.configuration), Pe;
  }, r.prototype.getStateNode = function(e) {
    if (li(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = li(e) ? e.slice(Us.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && li(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = va(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || si;
    switch (this.type) {
      case "parallel":
        return ii(this.initialStateValue, function(c, d) {
          return c ? i.getStateNode(d).resolve(e[d] || c) : si;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? ii(e, function(c, d) {
          return c ? i.getStateNode(d).resolve(c) : si;
        }) : this.initialStateValue || {};
      default:
        return e || si;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (li(e)) {
      var t = this.machine.idMap[e.slice(Us.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return va(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = ks(this.states, function(i) {
        return i.initialStateValue || si;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = Ki(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
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
      ge(t.target) ? e = li(t.target) ? $i(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (Ki(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || Xe(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Ui(this.initialStateValue);
    return ke(t.map(function(i) {
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
      return { current: e || this.initialStateValue, states: ks(this.states, function(t, i) {
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
      return l ? ke(Ui(l).map(function(d) {
        return i.getFromRelativePath(d);
      })) : i.initialStateNodes;
    }
    var c = Ku(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : ke(Ui(c).map(function(d) {
      return t.history === "deep" ? i.getFromRelativePath(d) : [i.states[d[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = ke(Object.keys(this.states).map(function(i) {
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
        for (var v = ve(Object.keys(c)), b = v.next(); !b.done; b = v.next()) {
          var y = b.value, w = c[y];
          if (w.states)
            try {
              for (var A = (i = void 0, ve(w.events)), O = A.next(); !O.done; O = A.next()) {
                var M = O.value;
                d.add("".concat(M));
              }
            } catch (R) {
              i = { error: R };
            } finally {
              try {
                O && !O.done && (l = A.return) && l.call(A);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (R) {
        e = { error: R };
      } finally {
        try {
          b && !b.done && (t = v.return) && t.call(v);
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
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(v.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = oc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(b) {
      return ge(b) && b[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, d = this.resolveTarget(i), v = Y(Y({}, e), { actions: Yi(qt(e.actions)), cond: ga(e.cond, c), target: d, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Y(Y({}, v), { target: v.target ? v.target.map(function(b) {
        return "#".concat(b.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return v;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, d = to, v = c[d], b = v === void 0 ? [] : v, y = ei(c, [typeof d == "symbol" ? d : d + ""]);
      l = ke(Object.keys(y).map(function(I) {
        !Le && I === ui && Xe(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = Sn(I, y[I]);
        return Le || Zf(i, I, L), L;
      }).concat(Sn(to, b)));
    }
    var w = this.config.always ? Sn("", this.config.always) : [], A = this.config.onDone ? Sn(String(Zi(this.id)), this.config.onDone) : [];
    Le || Xe(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var O = ke(this.invoke.map(function(I) {
      var L = [];
      return I.onDone && L.push.apply(L, Re([], me(Sn(String(ai(I.id)), I.onDone)), false)), I.onError && L.push.apply(L, Re([], me(Sn(String(On(I.id)), I.onError)), false)), L;
    })), M = this.after, R = ke(Re(Re(Re(Re([], me(A), false), me(O), false), me(l), false), me(w), false).map(function(I) {
      return qt(I).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var S = ve(M), _ = S.next(); !_.done; _ = S.next()) {
        var P = _.value;
        R.push(P);
      }
    } catch (I) {
      e = { error: I };
    } finally {
      try {
        _ && !_.done && (t = S.return) && t.call(S);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return R;
  }, r;
}();
function Ye(r, e) {
  return new _c(r, e);
}
__name(Ye, "Ye");
u(Ye, "createMachine");
var ro = Xo(Ta(), 1);
var Oa = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Vs = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function _e(r) {
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
      this.draggableMachine = Ye({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { always: [{ target: "dragging", cond: "isOnCircuitDropzone" }], on: { START_DRAGGING: { target: "dragging" }, UNGRAB: [{ target: "deleted", actions: ["unGrab"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { entry: ["startDragging"], always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, ro.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.unGrab.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Oa(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), Vs(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
      }, unGrab: () => {
        this.grabbed = false, this.dispatchEvent(new Event("operation-ungrab", { bubbles: true }));
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
      } }, guards: { isOnCircuitDropzone: () => Oa(this.dropzone), isOnPaletteDropzone: () => Vs(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Oa(this.dropzone), isTrashed: () => !this.snapped } });
    }
    get draggable() {
      return this.draggableService !== void 0;
    }
    set draggable(i) {
      this.maybeInitStateMachine(), i ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    get dropzone() {
      let i = this.parentElement;
      return ce.notNull(i), !Vs(i) && !Oa(i) ? null : i;
    }
    maybeInitStateMachine() {
      this.draggableService === void 0 && (this.draggableService = Fe(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Ve(i.value)}`);
      }).start());
    }
    set snapTargets(i) {
      (0, ro.default)(this).draggable({ modifiers: [ro.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
    unGrab() {
      this.draggableService.send({ type: "UNGRAB" });
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
  return u(e, "DraggableMixinClass"), k([j], e.prototype, "operationX", 2), k([j], e.prototype, "operationY", 2), k([j], e.prototype, "grabbed", 2), k([j], e.prototype, "dragging", 2), k([j], e.prototype, "snapped", 2), k([j], e.prototype, "bit", 2), k([j], e.prototype, "debugDraggable", 2), e;
}
__name(_e, "_e");
u(_e, "DraggableMixin");
var Pn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Ac(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), k([j], e.prototype, "flag", 2), e;
}
__name(Ac, "Ac");
u(Ac, "FlaggableMixin");
var Ue = "top";
var it = "bottom";
var et = "right";
var Ze = "left";
var Ca = "auto";
var tn = [Ue, it, et, Ze];
var Gr = "start";
var In = "end";
var Pc = "clippingParents";
var _a = "viewport";
var ci = "popper";
var Ic = "reference";
var Xs = tn.reduce(function(r, e) {
  return r.concat([e + "-" + Gr, e + "-" + In]);
}, []);
var Ma = [].concat(tn, [Ca]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Gr, e + "-" + In]);
}, []);
var Kf = "beforeRead";
var Jf = "read";
var Qf = "afterRead";
var eh = "beforeMain";
var th = "main";
var rh = "afterMain";
var nh = "beforeWrite";
var ih = "write";
var oh = "afterWrite";
var Dc = [Kf, Jf, Qf, eh, th, rh, nh, ih, oh];
function lt(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(lt, "lt");
u(lt, "getNodeName");
function Ke(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Ke, "Ke");
u(Ke, "getWindow");
function Sr(r) {
  var e = Ke(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Sr, "Sr");
u(Sr, "isElement");
function ot(r) {
  var e = Ke(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(ot, "ot");
u(ot, "isHTMLElement");
function Aa(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Ke(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Aa, "Aa");
u(Aa, "isShadowRoot");
function ah(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !ot(c) || !lt(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(d) {
      var v = l[d];
      v === false ? c.removeAttribute(d) : c.setAttribute(d, v === true ? "" : v);
    }));
  });
}
__name(ah, "ah");
u(ah, "applyStyles");
function sh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), v = d.reduce(function(b, y) {
        return b[y] = "", b;
      }, {});
      !ot(l) || !lt(l) || (Object.assign(l.style, v), Object.keys(c).forEach(function(b) {
        l.removeAttribute(b);
      }));
    });
  };
}
__name(sh, "sh");
u(sh, "effect");
var no = { name: "applyStyles", enabled: true, phase: "write", fn: ah, effect: sh, requires: ["computeStyles"] };
function ut(r) {
  return r.split("-")[0];
}
__name(ut, "ut");
u(ut, "getBasePlacement");
var vr = Math.max;
var Dn = Math.min;
var Lr = Math.round;
function Wt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (ot(r) && e) {
    var c = r.offsetHeight, d = r.offsetWidth;
    d > 0 && (i = Lr(t.width) / d || 1), c > 0 && (l = Lr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Wt, "Wt");
u(Wt, "getBoundingClientRect");
function Rn(r) {
  var e = Wt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Rn, "Rn");
u(Rn, "getLayoutRect");
function io(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Aa(t)) {
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
function St(r) {
  return Ke(r).getComputedStyle(r);
}
__name(St, "St");
u(St, "getComputedStyle");
function Ys(r) {
  return ["table", "td", "th"].indexOf(lt(r)) >= 0;
}
__name(Ys, "Ys");
u(Ys, "isTableElement");
function mt(r) {
  return ((Sr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(mt, "mt");
u(mt, "getDocumentElement");
function qr(r) {
  return lt(r) === "html" ? r : r.assignedSlot || r.parentNode || (Aa(r) ? r.host : null) || mt(r);
}
__name(qr, "qr");
u(qr, "getParentNode");
function Rc(r) {
  return !ot(r) || St(r).position === "fixed" ? null : r.offsetParent;
}
__name(Rc, "Rc");
u(Rc, "getTrueOffsetParent");
function lh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && ot(r)) {
    var i = St(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = qr(r); ot(l) && ["html", "body"].indexOf(lt(l)) < 0; ) {
    var c = St(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(lh, "lh");
u(lh, "getContainingBlock");
function mr(r) {
  for (var e = Ke(r), t = Rc(r); t && Ys(t) && St(t).position === "static"; )
    t = Rc(t);
  return t && (lt(t) === "html" || lt(t) === "body" && St(t).position === "static") ? e : t || lh(r) || e;
}
__name(mr, "mr");
u(mr, "getOffsetParent");
function zn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(zn, "zn");
u(zn, "getMainAxisFromPlacement");
function kn(r, e, t) {
  return vr(r, Dn(e, t));
}
__name(kn, "kn");
u(kn, "within");
function zc(r, e, t) {
  var i = kn(r, e, t);
  return i > t ? t : i;
}
__name(zc, "zc");
u(zc, "withinMaxClamp");
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
var uh = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ao(typeof e != "number" ? e : so(e, tn));
}, "toPaddingObject");
function ch(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, v = ut(t.placement), b = zn(v), y = [Ze, et].indexOf(v) >= 0, w = y ? "height" : "width";
  if (!(!c || !d)) {
    var A = uh(l.padding, t), O = Rn(c), M = b === "y" ? Ue : Ze, R = b === "y" ? it : et, S = t.rects.reference[w] + t.rects.reference[b] - d[b] - t.rects.popper[w], _ = d[b] - t.rects.reference[b], P = mr(c), I = P ? b === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, L = S / 2 - _ / 2, E = A[M], B = I - O[w] - A[R], z = I / 2 - O[w] / 2 + L, X = kn(E, z, B), V = b;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - z, e);
  }
}
__name(ch, "ch");
u(ch, "arrow");
function ph(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !io(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(ph, "ph");
u(ph, "effect");
var kc = { name: "arrow", enabled: true, phase: "main", fn: ch, effect: ph, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Vt(r) {
  return r.split("-")[1];
}
__name(Vt, "Vt");
u(Vt, "getVariation");
var dh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function fh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Lr(e * l) / l || 0, y: Lr(t * l) / l || 0 };
}
__name(fh, "fh");
u(fh, "roundOffsetsByDPR");
function Nc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, d = r.offsets, v = r.position, b = r.gpuAcceleration, y = r.adaptive, w = r.roundOffsets, A = r.isFixed, O = d.x, M = O === void 0 ? 0 : O, R = d.y, S = R === void 0 ? 0 : R, _ = typeof w == "function" ? w({ x: M, y: S }) : { x: M, y: S };
  M = _.x, S = _.y;
  var P = d.hasOwnProperty("x"), I = d.hasOwnProperty("y"), L = Ze, E = Ue, B = window;
  if (y) {
    var z = mr(t), X = "clientHeight", V = "clientWidth";
    if (z === Ke(t) && (z = mt(t), St(z).position !== "static" && v === "absolute" && (X = "scrollHeight", V = "scrollWidth")), z = z, l === Ue || (l === Ze || l === et) && c === In) {
      E = it;
      var H = A && B.visualViewport ? B.visualViewport.height : z[X];
      S -= H - i.height, S *= b ? 1 : -1;
    }
    if (l === Ze || (l === Ue || l === it) && c === In) {
      L = et;
      var U = A && B.visualViewport ? B.visualViewport.width : z[V];
      M -= U - i.width, M *= b ? 1 : -1;
    }
  }
  var re = Object.assign({ position: v }, y && dh), ie = w === true ? fh({ x: M, y: S }) : { x: M, y: S };
  if (M = ie.x, S = ie.y, b) {
    var W;
    return Object.assign({}, re, (W = {}, W[E] = I ? "0" : "", W[L] = P ? "0" : "", W.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + M + "px, " + S + "px)" : "translate3d(" + M + "px, " + S + "px, 0)", W));
  }
  return Object.assign({}, re, (e = {}, e[E] = I ? S + "px" : "", e[L] = P ? M + "px" : "", e.transform = "", e));
}
__name(Nc, "Nc");
u(Nc, "mapToStyles");
function hh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, d = c === void 0 ? true : c, v = t.roundOffsets, b = v === void 0 ? true : v;
  if (false)
    var y;
  var w = { placement: ut(e.placement), variation: Vt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Nc(Object.assign({}, w, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d, roundOffsets: b })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Nc(Object.assign({}, w, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: b })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(hh, "hh");
u(hh, "computeStyles");
var Gc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: hh, data: {} };
var Pa = { passive: true };
function vh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, d = i.resize, v = d === void 0 ? true : d, b = Ke(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && y.forEach(function(w) {
    w.addEventListener("scroll", t.update, Pa);
  }), v && b.addEventListener("resize", t.update, Pa), function() {
    c && y.forEach(function(w) {
      w.removeEventListener("scroll", t.update, Pa);
    }), v && b.removeEventListener("resize", t.update, Pa);
  };
}
__name(vh, "vh");
u(vh, "effect");
var Lc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: vh, data: {} };
var mh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function pi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return mh[e];
  });
}
__name(pi, "pi");
u(pi, "getOppositePlacement");
var gh = { start: "end", end: "start" };
function Ia(r) {
  return r.replace(/start|end/g, function(e) {
    return gh[e];
  });
}
__name(Ia, "Ia");
u(Ia, "getOppositeVariationPlacement");
function Nn(r) {
  var e = Ke(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(Nn, "Nn");
u(Nn, "getWindowScroll");
function Gn(r) {
  return Wt(mt(r)).left + Nn(r).scrollLeft;
}
__name(Gn, "Gn");
u(Gn, "getWindowScrollBarX");
function Zs(r) {
  var e = Ke(r), t = mt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, d = 0, v = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = i.offsetLeft, v = i.offsetTop)), { width: l, height: c, x: d + Gn(r), y: v };
}
__name(Zs, "Zs");
u(Zs, "getViewportRect");
function Ks(r) {
  var e, t = mt(r), i = Nn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = vr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = vr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), v = -i.scrollLeft + Gn(r), b = -i.scrollTop;
  return St(l || t).direction === "rtl" && (v += vr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: v, y: b };
}
__name(Ks, "Ks");
u(Ks, "getDocumentRect");
function Ln(r) {
  var e = St(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(Ln, "Ln");
u(Ln, "isScrollParent");
function Da(r) {
  return ["html", "body", "#document"].indexOf(lt(r)) >= 0 ? r.ownerDocument.body : ot(r) && Ln(r) ? r : Da(qr(r));
}
__name(Da, "Da");
u(Da, "getScrollParent");
function rn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Da(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Ke(i), d = l ? [c].concat(c.visualViewport || [], Ln(i) ? i : []) : i, v = e.concat(d);
  return l ? v : v.concat(rn(qr(d)));
}
__name(rn, "rn");
u(rn, "listScrollParents");
function di(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(di, "di");
u(di, "rectToClientRect");
function bh(r) {
  var e = Wt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(bh, "bh");
u(bh, "getInnerBoundingClientRect");
function qc(r, e) {
  return e === _a ? di(Zs(r)) : Sr(e) ? bh(e) : di(Ks(mt(r)));
}
__name(qc, "qc");
u(qc, "getClientRectFromMixedType");
function yh(r) {
  var e = rn(qr(r)), t = ["absolute", "fixed"].indexOf(St(r).position) >= 0, i = t && ot(r) ? mr(r) : r;
  return Sr(i) ? e.filter(function(l) {
    return Sr(l) && io(l, i) && lt(l) !== "body";
  }) : [];
}
__name(yh, "yh");
u(yh, "getClippingParents");
function Js(r, e, t) {
  var i = e === "clippingParents" ? yh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], d = l.reduce(function(v, b) {
    var y = qc(r, b);
    return v.top = vr(y.top, v.top), v.right = Dn(y.right, v.right), v.bottom = Dn(y.bottom, v.bottom), v.left = vr(y.left, v.left), v;
  }, qc(r, c));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
__name(Js, "Js");
u(Js, "getClippingRect");
function lo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? ut(i) : null, c = i ? Vt(i) : null, d = e.x + e.width / 2 - t.width / 2, v = e.y + e.height / 2 - t.height / 2, b;
  switch (l) {
    case Ue:
      b = { x: d, y: e.y - t.height };
      break;
    case it:
      b = { x: d, y: e.y + e.height };
      break;
    case et:
      b = { x: e.x + e.width, y: v };
      break;
    case Ze:
      b = { x: e.x - t.width, y: v };
      break;
    default:
      b = { x: e.x, y: e.y };
  }
  var y = l ? zn(l) : null;
  if (y != null) {
    var w = y === "y" ? "height" : "width";
    switch (c) {
      case Gr:
        b[y] = b[y] - (e[w] / 2 - t[w] / 2);
        break;
      case In:
        b[y] = b[y] + (e[w] / 2 - t[w] / 2);
        break;
      default:
    }
  }
  return b;
}
__name(lo, "lo");
u(lo, "computeOffsets");
function gr(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, d = c === void 0 ? Pc : c, v = t.rootBoundary, b = v === void 0 ? _a : v, y = t.elementContext, w = y === void 0 ? ci : y, A = t.altBoundary, O = A === void 0 ? false : A, M = t.padding, R = M === void 0 ? 0 : M, S = ao(typeof R != "number" ? R : so(R, tn)), _ = w === ci ? Ic : ci, P = r.rects.popper, I = r.elements[O ? _ : w], L = Js(Sr(I) ? I : I.contextElement || mt(r.elements.popper), d, b), E = Wt(r.elements.reference), B = lo({ reference: E, element: P, strategy: "absolute", placement: l }), z = di(Object.assign({}, P, B)), X = w === ci ? z : E, V = { top: L.top - X.top + S.top, bottom: X.bottom - L.bottom + S.bottom, left: L.left - X.left + S.left, right: X.right - L.right + S.right }, H = r.modifiersData.offset;
  if (w === ci && H) {
    var U = H[l];
    Object.keys(V).forEach(function(re) {
      var ie = [et, it].indexOf(re) >= 0 ? 1 : -1, W = [Ue, it].indexOf(re) >= 0 ? "y" : "x";
      V[re] += U[W] * ie;
    });
  }
  return V;
}
__name(gr, "gr");
u(gr, "detectOverflow");
function Qs(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, d = t.padding, v = t.flipVariations, b = t.allowedAutoPlacements, y = b === void 0 ? Ma : b, w = Vt(i), A = w ? v ? Xs : Xs.filter(function(R) {
    return Vt(R) === w;
  }) : tn, O = A.filter(function(R) {
    return y.indexOf(R) >= 0;
  });
  O.length === 0 && (O = A);
  var M = O.reduce(function(R, S) {
    return R[S] = gr(r, { placement: S, boundary: l, rootBoundary: c, padding: d })[ut(S)], R;
  }, {});
  return Object.keys(M).sort(function(R, S) {
    return M[R] - M[S];
  });
}
__name(Qs, "Qs");
u(Qs, "computeAutoPlacement");
function xh(r) {
  if (ut(r) === Ca)
    return [];
  var e = pi(r);
  return [Ia(r), e, Ia(e)];
}
__name(xh, "xh");
u(xh, "getExpandedFallbackPlacements");
function wh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, v = d === void 0 ? true : d, b = t.fallbackPlacements, y = t.padding, w = t.boundary, A = t.rootBoundary, O = t.altBoundary, M = t.flipVariations, R = M === void 0 ? true : M, S = t.allowedAutoPlacements, _ = e.options.placement, P = ut(_), I = P === _, L = b || (I || !R ? [pi(_)] : xh(_)), E = [_].concat(L).reduce(function(J, xt) {
      return J.concat(ut(xt) === Ca ? Qs(e, { placement: xt, boundary: w, rootBoundary: A, padding: y, flipVariations: R, allowedAutoPlacements: S }) : xt);
    }, []), B = e.rects.reference, z = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, H = E[0], U = 0; U < E.length; U++) {
      var re = E[U], ie = ut(re), W = Vt(re) === Gr, ue = [Ue, it].indexOf(ie) >= 0, Pe = ue ? "width" : "height", We = gr(e, { placement: re, boundary: w, rootBoundary: A, altBoundary: O, padding: y }), Ge = ue ? W ? et : Ze : W ? it : Ue;
      B[Pe] > z[Pe] && (Ge = pi(Ge));
      var fe = pi(Ge), Qe = [];
      if (c && Qe.push(We[ie] <= 0), v && Qe.push(We[Ge] <= 0, We[fe] <= 0), Qe.every(function(J) {
        return J;
      })) {
        H = re, V = false;
        break;
      }
      X.set(re, Qe);
    }
    if (V)
      for (var rt = R ? 3 : 1, Dt = u(function(xt) {
        var wt = E.find(function(Mr) {
          var Ht = X.get(Mr);
          if (Ht)
            return Ht.slice(0, xt).every(function(lr) {
              return lr;
            });
        });
        if (wt)
          return H = wt, "break";
      }, "_loop"), Ot = rt; Ot > 0; Ot--) {
        var _r = Dt(Ot);
        if (_r === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
__name(wh, "wh");
u(wh, "flip");
var jc = { name: "flip", enabled: true, phase: "main", fn: wh, requiresIfExists: ["offset"], data: { _skip: false } };
function Bc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(Bc, "Bc");
u(Bc, "getSideOffsets");
function Hc(r) {
  return [Ue, et, it, Ze].some(function(e) {
    return r[e] >= 0;
  });
}
__name(Hc, "Hc");
u(Hc, "isAnySideFullyClipped");
function Eh(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, d = gr(e, { elementContext: "reference" }), v = gr(e, { altBoundary: true }), b = Bc(d, i), y = Bc(v, l, c), w = Hc(b), A = Hc(y);
  e.modifiersData[t] = { referenceClippingOffsets: b, popperEscapeOffsets: y, isReferenceHidden: w, hasPopperEscaped: A }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": w, "data-popper-escaped": A });
}
__name(Eh, "Eh");
u(Eh, "hide");
var $c = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Eh };
function Sh(r, e, t) {
  var i = ut(r), l = [Ze, Ue].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d = c[0], v = c[1];
  return d = d || 0, v = (v || 0) * l, [Ze, et].indexOf(i) >= 0 ? { x: v, y: d } : { x: d, y: v };
}
__name(Sh, "Sh");
u(Sh, "distanceAndSkiddingToXY");
function Th(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, d = Ma.reduce(function(w, A) {
    return w[A] = Sh(A, e.rects, c), w;
  }, {}), v = d[e.placement], b = v.x, y = v.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += b, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d;
}
__name(Th, "Th");
u(Th, "offset");
var Fc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Th };
function Oh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = lo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(Oh, "Oh");
u(Oh, "popperOffsets");
var Uc = { name: "popperOffsets", enabled: true, phase: "read", fn: Oh, data: {} };
function el(r) {
  return r === "x" ? "y" : "x";
}
__name(el, "el");
u(el, "getAltAxis");
function Ch(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, v = d === void 0 ? false : d, b = t.boundary, y = t.rootBoundary, w = t.altBoundary, A = t.padding, O = t.tether, M = O === void 0 ? true : O, R = t.tetherOffset, S = R === void 0 ? 0 : R, _ = gr(e, { boundary: b, rootBoundary: y, padding: A, altBoundary: w }), P = ut(e.placement), I = Vt(e.placement), L = !I, E = zn(P), B = el(E), z = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, H = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, U = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), re = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ie = { x: 0, y: 0 };
  if (!!z) {
    if (c) {
      var W, ue = E === "y" ? Ue : Ze, Pe = E === "y" ? it : et, We = E === "y" ? "height" : "width", Ge = z[E], fe = Ge + _[ue], Qe = Ge - _[Pe], rt = M ? -V[We] / 2 : 0, Dt = I === Gr ? X[We] : V[We], Ot = I === Gr ? -V[We] : -X[We], _r = e.elements.arrow, J = M && _r ? Rn(_r) : { width: 0, height: 0 }, xt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : oo(), wt = xt[ue], Mr = xt[Pe], Ht = kn(0, X[We], J[We]), lr = L ? X[We] / 2 - rt - Ht - wt - U.mainAxis : Dt - Ht - wt - U.mainAxis, ur = L ? -X[We] / 2 + rt + Ht + Mr + U.mainAxis : Ot + Ht + Mr + U.mainAxis, Rt = e.elements.arrow && mr(e.elements.arrow), $n = Rt ? E === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0 : 0, Ct = (W = re == null ? void 0 : re[E]) != null ? W : 0, ln = Ge + lr - Ct - $n, xe = Ge + ur - Ct, Fr = kn(M ? Dn(fe, ln) : fe, Ge, M ? vr(Qe, xe) : Qe);
      z[E] = Fr, ie[E] = Fr - Ge;
    }
    if (v) {
      var Ur, _t = E === "x" ? Ue : Ze, un = E === "x" ? it : et, cr = z[B], pr = B === "y" ? "height" : "width", cn = cr + _[_t], ct = cr - _[un], Ar = [Ue, Ze].indexOf(P) !== -1, zt = (Ur = re == null ? void 0 : re[B]) != null ? Ur : 0, Fn = Ar ? cn : cr - X[pr] - V[pr] - zt + U.altAxis, Pr = Ar ? cr + X[pr] + V[pr] - zt - U.altAxis : ct, pn = M && Ar ? zc(Fn, cr, Pr) : kn(M ? Fn : cn, cr, M ? Pr : ct);
      z[B] = pn, ie[B] = pn - cr;
    }
    e.modifiersData[i] = ie;
  }
}
__name(Ch, "Ch");
u(Ch, "preventOverflow");
var Wc = { name: "preventOverflow", enabled: true, phase: "main", fn: Ch, requiresIfExists: ["offset"] };
function tl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(tl, "tl");
u(tl, "getHTMLElementScroll");
function rl(r) {
  return r === Ke(r) || !ot(r) ? Nn(r) : tl(r);
}
__name(rl, "rl");
u(rl, "getNodeScroll");
function _h(r) {
  var e = r.getBoundingClientRect(), t = Lr(e.width) / r.offsetWidth || 1, i = Lr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(_h, "_h");
u(_h, "isElementScaled");
function nl(r, e, t) {
  t === void 0 && (t = false);
  var i = ot(e), l = ot(e) && _h(e), c = mt(e), d = Wt(r, l), v = { scrollLeft: 0, scrollTop: 0 }, b = { x: 0, y: 0 };
  return (i || !i && !t) && ((lt(e) !== "body" || Ln(c)) && (v = rl(e)), ot(e) ? (b = Wt(e, true), b.x += e.clientLeft, b.y += e.clientTop) : c && (b.x = Gn(c))), { x: d.left + v.scrollLeft - b.x, y: d.top + v.scrollTop - b.y, width: d.width, height: d.height };
}
__name(nl, "nl");
u(nl, "getCompositeRect");
function Mh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(v) {
      if (!t.has(v)) {
        var b = e.get(v);
        b && l(b);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(Mh, "Mh");
u(Mh, "order");
function il(r) {
  var e = Mh(r);
  return Dc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(il, "il");
u(il, "orderModifiers");
function ol(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(ol, "ol");
u(ol, "debounce");
function al(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(al, "al");
u(al, "mergeByName");
var Vc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xc() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(Xc, "Xc");
u(Xc, "areValidElements");
function Yc(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? Vc : l;
  return u(function(v, b, y) {
    y === void 0 && (y = c);
    var w = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Vc, c), modifiersData: {}, elements: { reference: v, popper: b }, attributes: {}, styles: {} }, A = [], O = false, M = { state: w, setOptions: u(function(P) {
      var I = typeof P == "function" ? P(w.options) : P;
      S(), w.options = Object.assign({}, c, w.options, I), w.scrollParents = { reference: Sr(v) ? rn(v) : v.contextElement ? rn(v.contextElement) : [], popper: rn(b) };
      var L = il(al([].concat(i, w.options.modifiers)));
      if (w.orderedModifiers = L.filter(function(re) {
        return re.enabled;
      }), false) {
        var E;
        if (getBasePlacement(w.options.placement) === auto)
          var B;
        var z, X, V, H, U;
      }
      return R(), M.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!O) {
        var P = w.elements, I = P.reference, L = P.popper;
        if (!!Xc(I, L)) {
          w.rects = { reference: nl(I, mr(L), w.options.strategy === "fixed"), popper: Rn(L) }, w.reset = false, w.placement = w.options.placement, w.orderedModifiers.forEach(function(re) {
            return w.modifiersData[re.name] = Object.assign({}, re.data);
          });
          for (var E = 0, B = 0; B < w.orderedModifiers.length; B++) {
            if (w.reset === true) {
              w.reset = false, B = -1;
              continue;
            }
            var z = w.orderedModifiers[B], X = z.fn, V = z.options, H = V === void 0 ? {} : V, U = z.name;
            typeof X == "function" && (w = X({ state: w, options: H, name: U, instance: M }) || w);
          }
        }
      }
    }, "forceUpdate"), update: ol(function() {
      return new Promise(function(_) {
        M.forceUpdate(), _(w);
      });
    }), destroy: u(function() {
      S(), O = true;
    }, "destroy") };
    if (!Xc(v, b))
      return M;
    M.setOptions(y).then(function(_) {
      !O && y.onFirstUpdate && y.onFirstUpdate(_);
    });
    function R() {
      w.orderedModifiers.forEach(function(_) {
        var P = _.name, I = _.options, L = I === void 0 ? {} : I, E = _.effect;
        if (typeof E == "function") {
          var B = E({ state: w, name: P, instance: M, options: L }), z = u(function() {
          }, "noopFn");
          A.push(B || z);
        }
      });
    }
    __name(R, "R");
    u(R, "runModifierEffects");
    function S() {
      A.forEach(function(_) {
        return _();
      }), A = [];
    }
    __name(S, "S");
    return u(S, "cleanupModifierEffects"), M;
  }, "createPopper");
}
__name(Yc, "Yc");
u(Yc, "popperGenerator");
var Ah = [Lc, Uc, Gc, no, Fc, jc, Wc, kc, $c];
var sl = Yc({ defaultModifiers: Ah });
var jr = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Ph = "tippy-box";
var op = "tippy-content";
var Ih = "tippy-backdrop";
var ap = "tippy-arrow";
var sp = "tippy-svg-arrow";
var qn = { passive: true, capture: true };
var lp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function ll(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(ll, "ll");
u(ll, "getValueAtIndexOrReturn");
function hl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(hl, "hl");
u(hl, "isType");
function up(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(up, "up");
u(up, "invokeWithArgsOrReturn");
function Zc(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(Zc, "Zc");
u(Zc, "debounce");
function Dh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
__name(Dh, "Dh");
u(Dh, "removeProperties");
function Rh(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Rh, "Rh");
u(Rh, "splitBySpaces");
function jn(r) {
  return [].concat(r);
}
__name(jn, "jn");
u(jn, "normalizeToArray");
function Kc(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(Kc, "Kc");
u(Kc, "pushIfUnique");
function zh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(zh, "zh");
u(zh, "unique");
function kh(r) {
  return r.split("-")[0];
}
__name(kh, "kh");
u(kh, "getBasePlacement");
function za(r) {
  return [].slice.call(r);
}
__name(za, "za");
u(za, "arrayFrom");
function Jc(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(Jc, "Jc");
u(Jc, "removeUndefinedProps");
function fi() {
  return document.createElement("div");
}
__name(fi, "fi");
u(fi, "div");
function ka(r) {
  return ["Element", "Fragment"].some(function(e) {
    return hl(r, e);
  });
}
__name(ka, "ka");
u(ka, "isElement");
function Nh(r) {
  return hl(r, "NodeList");
}
__name(Nh, "Nh");
u(Nh, "isNodeList");
function Gh(r) {
  return hl(r, "MouseEvent");
}
__name(Gh, "Gh");
u(Gh, "isMouseEvent");
function Lh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Lh, "Lh");
u(Lh, "isReferenceElement");
function qh(r) {
  return ka(r) ? [r] : Nh(r) ? za(r) : Array.isArray(r) ? r : za(document.querySelectorAll(r));
}
__name(qh, "qh");
u(qh, "getArrayOfElements");
function ul(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(ul, "ul");
u(ul, "setTransitionDuration");
function Qc(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(Qc, "Qc");
u(Qc, "setVisibilityState");
function jh(r) {
  var e, t = jn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(jh, "jh");
u(jh, "getOwnerDocument");
function Bh(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, d = l.popperState, v = l.props, b = v.interactiveBorder, y = kh(d.placement), w = d.modifiersData.offset;
    if (!w)
      return true;
    var A = y === "bottom" ? w.top.y : 0, O = y === "top" ? w.bottom.y : 0, M = y === "right" ? w.left.x : 0, R = y === "left" ? w.right.x : 0, S = c.top - i + A > b, _ = i - c.bottom - O > b, P = c.left - t + M > b, I = t - c.right - R > b;
    return S || _ || P || I;
  });
}
__name(Bh, "Bh");
u(Bh, "isCursorOutsideInteractiveBorder");
function cl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(cl, "cl");
u(cl, "updateTransitionEndListener");
function ep(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(ep, "ep");
u(ep, "actualContains");
var Tr = { isTouch: false };
var tp = 0;
function Hh() {
  Tr.isTouch || (Tr.isTouch = true, window.performance && document.addEventListener("mousemove", cp));
}
__name(Hh, "Hh");
u(Hh, "onDocumentTouchStart");
function cp() {
  var r = performance.now();
  r - tp < 20 && (Tr.isTouch = false, document.removeEventListener("mousemove", cp)), tp = r;
}
__name(cp, "cp");
u(cp, "onDocumentMouseMove");
function $h() {
  var r = document.activeElement;
  if (Lh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name($h, "$h");
u($h, "onWindowBlur");
function Fh() {
  document.addEventListener("touchstart", Hh, qn), window.addEventListener("blur", $h);
}
__name(Fh, "Fh");
u(Fh, "bindGlobalEventListeners");
var Uh = typeof window != "undefined" && typeof document != "undefined";
var Wh = Uh ? !!window.msCrypto : false;
var Vh = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Xh = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var br = Object.assign({ appendTo: lp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Vh, Xh);
var Yh = Object.keys(br);
var Zh = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    br[i] = e[i];
  });
}, "setDefaultProps");
function pp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, d = l.defaultValue;
    if (c) {
      var v;
      i[c] = r[c] !== void 0 ? r[c] : (v = br[c]) != null ? v : d;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(pp, "pp");
u(pp, "getExtendedPassedProps");
function Kh(r, e) {
  var t = e ? Object.keys(pp(Object.assign({}, br, { plugins: e }))) : Yh, i = t.reduce(function(l, c) {
    var d = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!d)
      return l;
    if (c === "content")
      l[c] = d;
    else
      try {
        l[c] = JSON.parse(d);
      } catch (v) {
        l[c] = d;
      }
    return l;
  }, {});
  return i;
}
__name(Kh, "Kh");
u(Kh, "getDataAttributeProps");
function rp(r, e) {
  var t = Object.assign({}, e, { content: up(e.content, [r]) }, e.ignoreAttributes ? {} : Kh(r, e.plugins));
  return t.aria = Object.assign({}, br.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(rp, "rp");
u(rp, "evaluateProps");
var Jh = u(function() {
  return "innerHTML";
}, "innerHTML");
function dl(r, e) {
  r[Jh()] = e;
}
__name(dl, "dl");
u(dl, "dangerouslySetInnerHTML");
function np(r) {
  var e = fi();
  return r === true ? e.className = ap : (e.className = sp, ka(r) ? e.appendChild(r) : dl(e, r)), e;
}
__name(np, "np");
u(np, "createArrowElement");
function ip(r, e) {
  ka(e.content) ? (dl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? dl(r, e.content) : r.textContent = e.content);
}
__name(ip, "ip");
u(ip, "setContent");
function fl(r) {
  var e = r.firstElementChild, t = za(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(op);
  }), arrow: t.find(function(i) {
    return i.classList.contains(ap) || i.classList.contains(sp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Ih);
  }) };
}
__name(fl, "fl");
u(fl, "getChildren");
function dp(r) {
  var e = fi(), t = fi();
  t.className = Ph, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = fi();
  i.className = op, i.setAttribute("data-state", "hidden"), ip(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, d) {
    var v = fl(e), b = v.box, y = v.content, w = v.arrow;
    d.theme ? b.setAttribute("data-theme", d.theme) : b.removeAttribute("data-theme"), typeof d.animation == "string" ? b.setAttribute("data-animation", d.animation) : b.removeAttribute("data-animation"), d.inertia ? b.setAttribute("data-inertia", "") : b.removeAttribute("data-inertia"), b.style.maxWidth = typeof d.maxWidth == "number" ? d.maxWidth + "px" : d.maxWidth, d.role ? b.setAttribute("role", d.role) : b.removeAttribute("role"), (c.content !== d.content || c.allowHTML !== d.allowHTML) && ip(y, r.props), d.arrow ? w ? c.arrow !== d.arrow && (b.removeChild(w), b.appendChild(np(d.arrow))) : b.appendChild(np(d.arrow)) : w && b.removeChild(w);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(dp, "dp");
u(dp, "render");
dp.$$tippy = true;
var Qh = 1;
var Ra = [];
var pl = [];
function ev(r, e) {
  var t = rp(r, Object.assign({}, br, pp(Jc(e)))), i, l, c, d = false, v = false, b = false, y = false, w, A, O, M = [], R = Zc(ln, t.interactiveDebounce), S, _ = Qh++, P = null, I = zh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: _, reference: r, popper: fi(), popperInstance: P, props: t, state: L, plugins: I, clearDelayTimeouts: Fn, setProps: Pr, setContent: pn, show: bi, hide: xo, hideWithInteractivity: yi, enable: Ar, disable: zt, unmount: xi, destroy: wo };
  if (!t.render)
    return E;
  var B = t.render(E), z = B.popper, X = B.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + E.id, E.popper = z, r._tippy = E, z._tippy = E;
  var V = I.map(function(q) {
    return q.fn(E);
  }), H = r.hasAttribute("aria-expanded");
  return Rt(), rt(), Ge(), fe("onCreate", [E]), t.showOnCreate && cn(), z.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", R);
  }), E;
  function U() {
    var q = E.props.touch;
    return Array.isArray(q) ? q : [q, 0];
  }
  __name(U, "U");
  u(U, "getNormalizedTouchSettings");
  function re() {
    return U()[0] === "hold";
  }
  __name(re, "re");
  u(re, "getIsCustomTouchBehavior");
  function ie() {
    var q;
    return !!((q = E.props.render) != null && q.$$tippy);
  }
  __name(ie, "ie");
  u(ie, "getIsDefaultRenderFn");
  function W() {
    return S || r;
  }
  __name(W, "W");
  u(W, "getCurrentTarget");
  function ue() {
    var q = W().parentNode;
    return q ? jh(q) : document;
  }
  __name(ue, "ue");
  u(ue, "getDocument");
  function Pe() {
    return fl(z);
  }
  __name(Pe, "Pe");
  u(Pe, "getDefaultTemplateChildren");
  function We(q) {
    return E.state.isMounted && !E.state.isVisible || Tr.isTouch || w && w.type === "focus" ? 0 : ll(E.props.delay, q ? 0 : 1, br.delay);
  }
  __name(We, "We");
  u(We, "getDelay");
  function Ge(q) {
    q === void 0 && (q = false), z.style.pointerEvents = E.props.interactive && !q ? "" : "none", z.style.zIndex = "" + E.props.zIndex;
  }
  __name(Ge, "Ge");
  u(Ge, "handleStyles");
  function fe(q, Q, oe) {
    if (oe === void 0 && (oe = true), V.forEach(function(he) {
      he[q] && he[q].apply(he, Q);
    }), oe) {
      var ye;
      (ye = E.props)[q].apply(ye, Q);
    }
  }
  __name(fe, "fe");
  u(fe, "invokeHook");
  function Qe() {
    var q = E.props.aria;
    if (!!q.content) {
      var Q = "aria-" + q.content, oe = z.id, ye = jn(E.props.triggerTarget || r);
      ye.forEach(function(he) {
        var pt = he.getAttribute(Q);
        if (E.state.isVisible)
          he.setAttribute(Q, pt ? pt + " " + oe : oe);
        else {
          var dt = pt && pt.replace(oe, "").trim();
          dt ? he.setAttribute(Q, dt) : he.removeAttribute(Q);
        }
      });
    }
  }
  __name(Qe, "Qe");
  u(Qe, "handleAriaContentAttribute");
  function rt() {
    if (!(H || !E.props.aria.expanded)) {
      var q = jn(E.props.triggerTarget || r);
      q.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === W() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  __name(rt, "rt");
  u(rt, "handleAriaExpandedAttribute");
  function Dt() {
    ue().removeEventListener("mousemove", R), Ra = Ra.filter(function(q) {
      return q !== R;
    });
  }
  __name(Dt, "Dt");
  u(Dt, "cleanupInteractiveMouseListeners");
  function Ot(q) {
    if (!(Tr.isTouch && (b || q.type === "mousedown"))) {
      var Q = q.composedPath && q.composedPath()[0] || q.target;
      if (!(E.props.interactive && ep(z, Q))) {
        if (jn(E.props.triggerTarget || r).some(function(oe) {
          return ep(oe, Q);
        })) {
          if (Tr.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [E, q]);
        E.props.hideOnClick === true && (E.clearDelayTimeouts(), E.hide(), v = true, setTimeout(function() {
          v = false;
        }), E.state.isMounted || wt());
      }
    }
  }
  __name(Ot, "Ot");
  u(Ot, "onDocumentPress");
  function _r() {
    b = true;
  }
  __name(_r, "_r");
  u(_r, "onTouchMove");
  function J() {
    b = false;
  }
  __name(J, "J");
  u(J, "onTouchStart");
  function xt() {
    var q = ue();
    q.addEventListener("mousedown", Ot, true), q.addEventListener("touchend", Ot, qn), q.addEventListener("touchstart", J, qn), q.addEventListener("touchmove", _r, qn);
  }
  __name(xt, "xt");
  u(xt, "addDocumentPress");
  function wt() {
    var q = ue();
    q.removeEventListener("mousedown", Ot, true), q.removeEventListener("touchend", Ot, qn), q.removeEventListener("touchstart", J, qn), q.removeEventListener("touchmove", _r, qn);
  }
  __name(wt, "wt");
  u(wt, "removeDocumentPress");
  function Mr(q, Q) {
    lr(q, function() {
      !E.state.isVisible && z.parentNode && z.parentNode.contains(z) && Q();
    });
  }
  __name(Mr, "Mr");
  u(Mr, "onTransitionedOut");
  function Ht(q, Q) {
    lr(q, Q);
  }
  __name(Ht, "Ht");
  u(Ht, "onTransitionedIn");
  function lr(q, Q) {
    var oe = Pe().box;
    function ye(he) {
      he.target === oe && (cl(oe, "remove", ye), Q());
    }
    __name(ye, "ye");
    if (u(ye, "listener"), q === 0)
      return Q();
    cl(oe, "remove", A), cl(oe, "add", ye), A = ye;
  }
  __name(lr, "lr");
  u(lr, "onTransitionEnd");
  function ur(q, Q, oe) {
    oe === void 0 && (oe = false);
    var ye = jn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(q, Q, oe), M.push({ node: he, eventType: q, handler: Q, options: oe });
    });
  }
  __name(ur, "ur");
  u(ur, "on");
  function Rt() {
    re() && (ur("touchstart", Ct, { passive: true }), ur("touchend", xe, { passive: true })), Rh(E.props.trigger).forEach(function(q) {
      if (q !== "manual")
        switch (ur(q, Ct), q) {
          case "mouseenter":
            ur("mouseleave", xe);
            break;
          case "focus":
            ur(Wh ? "focusout" : "blur", Fr);
            break;
          case "focusin":
            ur("focusout", Fr);
            break;
        }
    });
  }
  __name(Rt, "Rt");
  u(Rt, "addListeners");
  function $n() {
    M.forEach(function(q) {
      var Q = q.node, oe = q.eventType, ye = q.handler, he = q.options;
      Q.removeEventListener(oe, ye, he);
    }), M = [];
  }
  __name($n, "$n");
  u($n, "removeListeners");
  function Ct(q) {
    var Q, oe = false;
    if (!(!E.state.isEnabled || Ur(q) || v)) {
      var ye = ((Q = w) == null ? void 0 : Q.type) === "focus";
      w = q, S = q.currentTarget, rt(), !E.state.isVisible && Gh(q) && Ra.forEach(function(he) {
        return he(q);
      }), q.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d) && E.props.hideOnClick !== false && E.state.isVisible ? oe = true : cn(q), q.type === "click" && (d = !oe), oe && !ye && ct(q);
    }
  }
  __name(Ct, "Ct");
  u(Ct, "onTrigger");
  function ln(q) {
    var Q = q.target, oe = W().contains(Q) || z.contains(Q);
    if (!(q.type === "mousemove" && oe)) {
      var ye = pr().concat(z).map(function(he) {
        var pt, dt = he._tippy, Wr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Wr ? { popperRect: he.getBoundingClientRect(), popperState: Wr, props: t } : null;
      }).filter(Boolean);
      Bh(ye, q) && (Dt(), ct(q));
    }
  }
  __name(ln, "ln");
  u(ln, "onMouseMove");
  function xe(q) {
    var Q = Ur(q) || E.props.trigger.indexOf("click") >= 0 && d;
    if (!Q) {
      if (E.props.interactive) {
        E.hideWithInteractivity(q);
        return;
      }
      ct(q);
    }
  }
  __name(xe, "xe");
  u(xe, "onMouseLeave");
  function Fr(q) {
    E.props.trigger.indexOf("focusin") < 0 && q.target !== W() || E.props.interactive && q.relatedTarget && z.contains(q.relatedTarget) || ct(q);
  }
  __name(Fr, "Fr");
  u(Fr, "onBlurOrFocusOut");
  function Ur(q) {
    return Tr.isTouch ? re() !== q.type.indexOf("touch") >= 0 : false;
  }
  __name(Ur, "Ur");
  u(Ur, "isEventListenerStopped");
  function _t() {
    un();
    var q = E.props, Q = q.popperOptions, oe = q.placement, ye = q.offset, he = q.getReferenceClientRect, pt = q.moveTransition, dt = ie() ? fl(z).arrow : null, Wr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || W() } : r, wi = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Ir) {
      var Vr = Ir.state;
      if (ie()) {
        var kt = Pe(), Nt = kt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function($t) {
          $t === "placement" ? Nt.setAttribute("data-placement", Vr.placement) : Vr.attributes.popper["data-popper-" + $t] ? Nt.setAttribute("data-" + $t, "") : Nt.removeAttribute("data-" + $t);
        }), Vr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, wi];
    ie() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = sl(Wr, z, Object.assign({}, Q, { placement: oe, onFirstUpdate: O, modifiers: ft }));
  }
  __name(_t, "_t");
  u(_t, "createPopperInstance");
  function un() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  __name(un, "un");
  u(un, "destroyPopperInstance");
  function cr() {
    var q = E.props.appendTo, Q, oe = W();
    E.props.interactive && q === lp || q === "parent" ? Q = oe.parentNode : Q = up(q, [oe]), Q.contains(z) || Q.appendChild(z), E.state.isMounted = true, _t();
  }
  __name(cr, "cr");
  u(cr, "mount");
  function pr() {
    return za(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(pr, "pr");
  u(pr, "getNestedPopperTree");
  function cn(q) {
    E.clearDelayTimeouts(), q && fe("onTrigger", [E, q]), xt();
    var Q = We(true), oe = U(), ye = oe[0], he = oe[1];
    Tr.isTouch && ye === "hold" && he && (Q = he), Q ? i = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  __name(cn, "cn");
  u(cn, "scheduleShow");
  function ct(q) {
    if (E.clearDelayTimeouts(), fe("onUntrigger", [E, q]), !E.state.isVisible) {
      wt();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(q.type) >= 0 && d)) {
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
  function Ar() {
    E.state.isEnabled = true;
  }
  __name(Ar, "Ar");
  u(Ar, "enable");
  function zt() {
    E.hide(), E.state.isEnabled = false;
  }
  __name(zt, "zt");
  u(zt, "disable");
  function Fn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(Fn, "Fn");
  u(Fn, "clearDelayTimeouts");
  function Pr(q) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, q]), $n();
      var Q = E.props, oe = rp(r, Object.assign({}, Q, Jc(q), { ignoreAttributes: true }));
      E.props = oe, Rt(), Q.interactiveDebounce !== oe.interactiveDebounce && (Dt(), R = Zc(ln, oe.interactiveDebounce)), Q.triggerTarget && !oe.triggerTarget ? jn(Q.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : oe.triggerTarget && r.removeAttribute("aria-expanded"), rt(), Ge(), X && X(Q, oe), E.popperInstance && (_t(), pr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, q]);
    }
  }
  __name(Pr, "Pr");
  u(Pr, "setProps");
  function pn(q) {
    E.setProps({ content: q });
  }
  __name(pn, "pn");
  u(pn, "setContent");
  function bi() {
    var q = E.state.isVisible, Q = E.state.isDestroyed, oe = !E.state.isEnabled, ye = Tr.isTouch && !E.props.touch, he = ll(E.props.duration, 0, br.duration);
    if (!(q || Q || oe || ye) && !W().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, ie() && (z.style.visibility = "visible"), Ge(), xt(), E.state.isMounted || (z.style.transition = "none"), ie()) {
        var pt = Pe(), dt = pt.box, Wr = pt.content;
        ul([dt, Wr], 0);
      }
      O = u(function() {
        var ft;
        if (!(!E.state.isVisible || y)) {
          if (y = true, z.offsetHeight, z.style.transition = E.props.moveTransition, ie() && E.props.animation) {
            var Ei = Pe(), Ir = Ei.box, Vr = Ei.content;
            ul([Ir, Vr], he), Qc([Ir, Vr], "visible");
          }
          Qe(), rt(), Kc(pl, E), (ft = E.popperInstance) == null || ft.forceUpdate(), fe("onMount", [E]), E.props.animation && ie() && Ht(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), cr();
    }
  }
  __name(bi, "bi");
  u(bi, "show");
  function xo() {
    var q = !E.state.isVisible, Q = E.state.isDestroyed, oe = !E.state.isEnabled, ye = ll(E.props.duration, 1, br.duration);
    if (!(q || Q || oe) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d = false, ie() && (z.style.visibility = "hidden"), Dt(), wt(), Ge(true), ie()) {
        var he = Pe(), pt = he.box, dt = he.content;
        E.props.animation && (ul([pt, dt], ye), Qc([pt, dt], "hidden"));
      }
      Qe(), rt(), E.props.animation ? ie() && Mr(ye, E.unmount) : E.unmount();
    }
  }
  __name(xo, "xo");
  u(xo, "hide");
  function yi(q) {
    ue().addEventListener("mousemove", R), Kc(Ra, R), R(q);
  }
  __name(yi, "yi");
  u(yi, "hideWithInteractivity");
  function xi() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (un(), pr().forEach(function(q) {
      q._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), pl = pl.filter(function(q) {
      return q !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  __name(xi, "xi");
  u(xi, "unmount");
  function wo() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), $n(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  __name(wo, "wo");
  u(wo, "destroy");
}
__name(ev, "ev");
u(ev, "createTippy");
function hi(r, e) {
  e === void 0 && (e = {});
  var t = br.plugins.concat(e.plugins || []);
  Fh();
  var i = Object.assign({}, e, { plugins: t }), l = qh(r);
  if (false)
    var c, d;
  var v = l.reduce(function(b, y) {
    var w = y && ev(y, i);
    return w && b.push(w), b;
  }, []);
  return ka(r) ? v[0] : v;
}
__name(hi, "hi");
u(hi, "tippy");
hi.defaultProps = br;
hi.setDefaultProps = Zh;
hi.currentInput = Tr;
var tv = Object.assign({}, no, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var fp = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], d = [], v, b = t.overrides, y = [], w = false;
  function A() {
    d = l.map(function(E) {
      return jn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  __name(A, "A");
  u(A, "setTriggerTargets");
  function O() {
    c = l.map(function(E) {
      return E.reference;
    });
  }
  __name(O, "O");
  u(O, "setReferences");
  function M(E) {
    l.forEach(function(B) {
      E ? B.enable() : B.disable();
    });
  }
  __name(M, "M");
  u(M, "enableInstances");
  function R(E) {
    return l.map(function(B) {
      var z = B.setProps;
      return B.setProps = function(X) {
        z(X), B.reference === v && E.setProps(X);
      }, function() {
        B.setProps = z;
      };
    });
  }
  __name(R, "R");
  u(R, "interceptSetProps");
  function S(E, B) {
    var z = d.indexOf(B);
    if (B !== v) {
      v = B;
      var X = (b || []).concat("content").reduce(function(V, H) {
        return V[H] = l[z].props[H], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c[z]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  __name(S, "S");
  u(S, "prepareInstance"), M(false), O(), A();
  var _ = { fn: u(function() {
    return { onDestroy: u(function() {
      M(true);
    }, "onDestroy"), onHidden: u(function() {
      v = null;
    }, "onHidden"), onClickOutside: u(function(z) {
      z.props.showOnCreate && !w && (w = true, v = null);
    }, "onClickOutside"), onShow: u(function(z) {
      z.props.showOnCreate && !w && (w = true, S(z, c[0]));
    }, "onShow"), onTrigger: u(function(z, X) {
      S(z, X.currentTarget);
    }, "onTrigger") };
  }, "fn") }, P = hi(fi(), Object.assign({}, Dh(t, ["overrides"]), { plugins: [_].concat(t.plugins || []), triggerTarget: d, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [tv]) }) })), I = P.show;
  P.show = function(E) {
    if (I(), !v && E == null)
      return S(P, c[0]);
    if (!(v && E == null)) {
      if (typeof E == "number")
        return c[E] && S(P, c[E]);
      if (l.indexOf(E) >= 0) {
        var B = E.reference;
        return S(P, B);
      }
      if (c.indexOf(E) >= 0)
        return S(P, E);
    }
  }, P.showNext = function() {
    var E = c[0];
    if (!v)
      return P.show(0);
    var B = c.indexOf(v);
    P.show(c[B + 1] || E);
  }, P.showPrevious = function() {
    var E = c[c.length - 1];
    if (!v)
      return P.show(E);
    var B = c.indexOf(v), z = c[B - 1] || E;
    P.show(z);
  };
  var L = P.setProps;
  return P.setProps = function(E) {
    b = E.overrides || b, L(E);
  }, P.setInstances = function(E) {
    M(true), y.forEach(function(B) {
      return B();
    }), l = E, M(false), O(), A(), y = R(P), P.setProps({ triggerTarget: d });
  }, y = R(P), P;
}, "createSingleton");
hi.setDefaultProps({ render: dp });
var Pt = hi;
var vl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Me(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = Ye({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = Pt(this, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
    }
    initHelp() {
      this.helpableService = Fe(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${Ve(i.value)}`);
      }).start(), this.helpableService.send("INIT");
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
  return u(e, "HelpableMixinClass"), k([j], e.prototype, "help", 2), k([j], e.prototype, "helpId", 2), k([j], e.prototype, "debugHelpable", 2), e;
}
__name(Me, "Me");
u(Me, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverableMachine = Ye({ id: "hoverable", initial: "idle", states: { idle: { always: [{ target: "hoverable", cond: "isHoverable" }, { target: "unhoverable", cond: "isUnhoverable" }] }, hoverable: { entry: ["setHoverable"], on: { UNSET_HOVERABLE: { target: "unhoverable" } } }, unhoverable: { entry: ["unsetHoverable"], on: { SET_HOVERABLE: { target: "hoverable" } } } } }, { actions: { setHoverable: () => {
        this.setAttribute("data-hoverable", "");
      }, unsetHoverable: () => {
        this.removeAttribute("data-hoverable");
      } }, guards: { isHoverable: () => this.hoverable, isUnhoverable: () => !this.hoverable } });
    }
    get hoverable() {
      return this.hasAttribute("data-hoverable");
    }
    set hoverable(i) {
      this.maybeInitStateMachine(), i ? this.hoverableService.send({ type: "SET_HOVERABLE" }) : this.hoverableService.send({ type: "UNSET_HOVERABLE" });
    }
    get debugHoverable() {
      return this.hasAttribute("data-debug-hoverable");
    }
    maybeInitStateMachine() {
      this.hoverableService === void 0 && (this.hoverableService = Fe(this.hoverableMachine).onTransition((i) => {
        this.debugHoverable && console.log(`hoverable: ${Ve(i.value)}`);
      }).start());
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), e;
}
__name(we, "we");
u(we, "HoverableMixin");
function* Na(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Na, "Na");
u(Na, "parse");
var hp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "hp");
var nn = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "nn");
var Or;
var Ga;
var Br = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Or.set(this, void 0), Ga.set(this, ""), hp(this, Or, e, "f"), nn(this, Or, "f").updateParent("");
  }
  get attributeName() {
    return nn(this, Or, "f").attr.name;
  }
  get attributeNamespace() {
    return nn(this, Or, "f").attr.namespaceURI;
  }
  get value() {
    return nn(this, Ga, "f");
  }
  set value(e) {
    hp(this, Ga, e || "", "f"), nn(this, Or, "f").updateParent(e);
  }
  get element() {
    return nn(this, Or, "f").element;
  }
  get booleanValue() {
    return nn(this, Or, "f").booleanValue;
  }
  set booleanValue(e) {
    nn(this, Or, "f").booleanValue = e;
  }
}, "Br");
u(Br, "AttributeTemplatePart");
Or = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap();
var uo = /* @__PURE__ */ __name(class {
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
}, "uo");
u(uo, "AttributeValueSetter");
var vp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "vp");
var vi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "vi");
var Cr;
var Xt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Cr.set(this, void 0), vp(this, Cr, [e], "f"), e.textContent = "";
  }
  get value() {
    return vi(this, Cr, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return vi(this, Cr, "f")[0].previousSibling;
  }
  get nextSibling() {
    return vi(this, Cr, "f")[vi(this, Cr, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), vi(this, Cr, "f")[0].before(...t);
    for (let i of vi(this, Cr, "f"))
      i.remove();
    vp(this, Cr, t, "f");
  }
}, "Xt");
u(Xt, "NodeTemplatePart");
Cr = /* @__PURE__ */ new WeakMap();
function co(r) {
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
__name(co, "co");
u(co, "createProcessor");
function po(r, e) {
  r.value = String(e);
}
__name(po, "po");
u(po, "processPropertyIdentity");
function La(r, e) {
  return typeof e == "boolean" && r instanceof Br && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(La, "La");
u(La, "processBooleanAttribute");
var ml = co(po);
var rv = co((r, e) => {
  La(r, e) || po(r, e);
});
var mp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "mp");
var qa = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "qa");
var fo;
var ho;
function* nv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new uo(t, l);
          for (let d of Na(l.value))
            if (d.type === "string")
              c.append(d.value);
            else {
              let v = new Br(c, d.value);
              c.append(v), yield v;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Na(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Xt(t, i.value));
        break;
      }
}
__name(nv, "nv");
u(nv, "collectParts");
var on = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = ml) {
    var l, c;
    super();
    fo.set(this, void 0), ho.set(this, void 0), Object.getPrototypeOf(this) !== on.prototype && Object.setPrototypeOf(this, on.prototype), this.appendChild(e.content.cloneNode(true)), mp(this, ho, Array.from(nv(this)), "f"), mp(this, fo, i, "f"), (c = (l = qa(this, fo, "f")).createCallback) === null || c === void 0 || c.call(l, this, qa(this, ho, "f"), t);
  }
  update(e) {
    qa(this, fo, "f").processCallback(this, qa(this, ho, "f"), e);
  }
}, "on");
u(on, "TemplateInstance");
fo = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap();
var gp = /* @__PURE__ */ new WeakSet();
function bp(r) {
  return gp.has(r);
}
__name(bp, "bp");
u(bp, "isDirective");
function yp(r, e) {
  return bp(e) ? (e(r), true) : false;
}
__name(yp, "yp");
u(yp, "processDirective");
function vo(r) {
  return (...e) => {
    let t = r(...e);
    return gp.add(t), t;
  };
}
__name(vo, "vo");
u(vo, "directive");
var mo = /* @__PURE__ */ new WeakMap();
var go = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), mo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), mo.get(this.element).delete(this.type));
  }
  static for(e) {
    mo.has(e.element) || mo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = mo.get(e.element);
    return i.has(t) ? i.get(t) : new go(e.element, t);
  }
}, "go");
u(go, "EventHandler");
function xp(r, e) {
  return r instanceof Br && r.attributeName.startsWith("on") ? (go.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(xp, "xp");
u(xp, "processEvent");
function iv(r, e) {
  return e instanceof mi && r instanceof Xt ? (e.renderInto(r), true) : false;
}
__name(iv, "iv");
u(iv, "processSubTemplate");
function ov(r, e) {
  return e instanceof DocumentFragment && r instanceof Xt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(ov, "ov");
u(ov, "processDocumentFragment");
function av(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(av, "av");
u(av, "isIterable");
function sv(r, e) {
  if (!av(e))
    return false;
  if (r instanceof Xt) {
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
__name(sv, "sv");
u(sv, "processIterable");
function ja(r, e) {
  yp(r, e) || La(r, e) || xp(r, e) || iv(r, e) || ov(r, e) || sv(r, e) || po(r, e);
}
__name(ja, "ja");
u(ja, "processPart");
var gl = /* @__PURE__ */ new WeakMap();
var wp = /* @__PURE__ */ new WeakMap();
var Ep = /* @__PURE__ */ new WeakMap();
var mi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (gl.has(this.strings))
      return gl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), gl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (wp.get(e) !== t) {
      wp.set(e, t);
      let i = new on(t, this.values, this.processor);
      Ep.set(e, i), e instanceof Xt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Ep.get(e).update(this.values);
  }
}, "mi");
u(mi, "TemplateResult");
var lv = co(ja);
function K(r, ...e) {
  return new mi(r, e, lv);
}
__name(K, "K");
u(K, "html");
function te(r, e) {
  r.renderInto(e);
}
__name(te, "te");
u(te, "render");
var bl = /* @__PURE__ */ new WeakMap();
var uv = vo((...r) => (e) => {
  bl.has(e) || bl.set(e, { i: r.length });
  let t = bl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, ja(e, l));
    }) : i <= t.i && (t.i = i, ja(e, r[i]));
});
var cv = vo((r) => (e) => {
  if (!(e instanceof Xt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function ze(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.icon = "";
    }
    iconHtml(i) {
      return K`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      if (this.icon === "")
        return K([i]);
      let l = document.getElementById(this.icon);
      return l === null ? null : l.content.cloneNode(true);
    }
    get iconStyle() {
      return K`<style>
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
  return u(e, "IconableMixinClass"), k([j], e.prototype, "icon", 2), e;
}
__name(ze, "ze");
u(ze, "IconableMixin");
var Hr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function tt(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), k([j], e.prototype, "if", 2), e;
}
__name(tt, "tt");
u(tt, "IfableMixin");
var Sp = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ae(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = Pt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c, d, v;
        (l = this.ifTooltip) == null || l.hide(), (c = this.angleTooltip) == null || c.hide(), (d = this.flagTooltip) == null || d.hide(), (v = this.deleteTooltip) == null || v.hide();
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
      return te(K`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Hr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        ce.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Pt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (yn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        ce.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Pt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Pn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        ce.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Pt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      ce.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Pt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
var at = /* @__PURE__ */ __name(class extends Ae(Me(_e(Ce(we(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return ys;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (ce.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    Pt(this, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return te(K`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${this.forceSigned(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${this.forceSigned(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${this.forceSigned(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${this.forceSigned(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${this.forceSigned(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${this.forceSigned(this.z)}</span>
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
    let e = u((i) => K`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => K`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    te(K`<style>
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
    return `"${ys}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let t = this._tippy;
    t == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return ce.notNull(e), parseFloat(e);
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
    return ce.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return ce.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
  forceSigned(e, t = 4) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
}, "at");
u(at, "BlochDisplayElement"), k([je], at.prototype, "body", 2), k([je], at.prototype, "vectorLine", 2), k([je], at.prototype, "vectorEnd", 2), k([je], at.prototype, "vector", 2), k([fr], at.prototype, "vectorEndCircles", 2), k([j], at.prototype, "x", 2), k([j], at.prototype, "y", 2), k([j], at.prototype, "z", 2);
ne(at);
var Tp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var jt = /* @__PURE__ */ __name(class extends Ae(Me(_e(Be(ze(Ce(we(HTMLElement))))))) {
  get operationType() {
    return bs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Tp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${bs}"`;
  }
}, "jt");
u(jt, "ControlGateElement");
ne(jt);
var Op = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(_e(Be(ze(Ce(we(HTMLElement))))))))) {
  get operationType() {
    return Yo;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Op)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Yo}<${this.if}"` : `"${Yo}"`;
  }
}, "Yt");
u(Yt, "HGateElement");
ne(Yt);
var Cp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends Ae(Me(Ac(_e(ze(Ce(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">
        ${this.iconHtml(Cp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${oa}"` : `"${oa}>${this.flag}"`;
  }
}, "Zt");
u(Zt, "MeasurementGateElement"), k([j], Zt.prototype, "value", 2);
ne(Zt);
var _p = `<svg
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
var Kt = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(Qr(_e(Be(ze(Ce(we(HTMLElement)))))))))) {
  get operationType() {
    return Qo;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(_p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Qo}"` : `"${Qo}(${this.angle.replace("/", "_")})"`;
  }
}, "Kt");
u(Kt, "PhaseGateElement");
ne(Kt);
var Mp = `<svg
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
var Jt = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(_e(Be(ze(Ce(we(HTMLElement))))))))) {
  get operationType() {
    return ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Mp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ta}<${this.if}"` : `"${ta}"`;
  }
}, "Jt");
u(Jt, "RnotGateElement");
ne(Jt);
var Ap = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(Qr(_e(Be(ze(Ce(we(HTMLElement)))))))))) {
  get operationType() {
    return ra;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Ap)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ra}"` : `"${ra}(${this.angle.replace("/", "_")})"`;
  }
}, "Qt");
u(Qt, "RxGateElement");
ne(Qt);
var Pp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(Qr(_e(Be(ze(Ce(we(HTMLElement)))))))))) {
  get operationType() {
    return na;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Pp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${na}"` : `"${na}(${this.angle.replace("/", "_")})"`;
  }
}, "er");
u(er, "RyGateElement");
ne(er);
var Ip = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(Qr(_e(Be(ze(Ce(we(HTMLElement)))))))))) {
  get operationType() {
    return ia;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Ip)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ia}"` : `"${ia}(${this.angle.replace("/", "_")})"`;
  }
}, "tr");
u(tr, "RzGateElement");
ne(tr);
var Dp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ae(Me($e(_e(Be(ze(Ce(we(HTMLElement)))))))) {
  get operationType() {
    return gs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Dp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${gs}"`;
  }
}, "rr");
u(rr, "SwapGateElement");
ne(rr);
var Rp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(_e(Be(ze(Ce(we(HTMLElement))))))))) {
  get operationType() {
    return ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ea}<${this.if}"` : `"${ea}"`;
  }
}, "nr");
u(nr, "TGateElement");
ne(nr);
var zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Bt = /* @__PURE__ */ __name(class extends Ae(Me(_e(ze(Ce(we(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Nu;
      case "1":
        return Gu;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">
        ${this.iconHtml(zp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Bt");
u(Bt, "WriteGateElement"), k([j], Bt.prototype, "value", 2);
ne(Bt);
var kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(_e(Be(ze(Ce(we(HTMLElement))))))))) {
  get operationType() {
    return Zo;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Zo}<${this.if}"` : `"${Zo}"`;
  }
}, "ir");
u(ir, "XGateElement");
ne(ir);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(_e(Be(ze(Ce(we(HTMLElement))))))))) {
  get operationType() {
    return Ko;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ko}<${this.if}"` : `"${Ko}"`;
  }
}, "or");
u(or, "YGateElement");
ne(or);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ae(Me(tt($e(_e(Be(ze(Ce(we(HTMLElement))))))))) {
  get operationType() {
    return Jo;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(K`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Jo}<${this.if}"` : `"${Jo}"`;
  }
}, "ar");
u(ar, "ZGateElement");
ne(ar);
var Je = u((r) => r instanceof Yt || r instanceof ir || r instanceof or || r instanceof ar || r instanceof Kt || r instanceof nr || r instanceof Jt || r instanceof Qt || r instanceof er || r instanceof tr || r instanceof rr || r instanceof jt || r instanceof at || r instanceof Bt || r instanceof Zt, "isOperation");
var Lp = u((r) => r != null && r instanceof Yt, "isHGateElement");
var qp = u((r) => r != null && r instanceof ir, "isXGateElement");
var jp = u((r) => r != null && r instanceof or, "isYGateElement");
var Bp = u((r) => r != null && r instanceof ar, "isZGateElement");
var bo = u((r) => r != null && r instanceof Kt, "isPhaseGateElement");
var Hp = u((r) => r != null && r instanceof nr, "isTGateElement");
var $p = u((r) => r != null && r instanceof Jt, "isRnotGateElement");
var Ba = u((r) => r != null && r instanceof Qt, "isRxGateElement");
var Ha = u((r) => r != null && r instanceof er, "isRyGateElement");
var $a = u((r) => r != null && r instanceof tr, "isRzGateElement");
var Fp = u((r) => r != null && r instanceof rr, "isSwapGateElement");
var yl = u((r) => r != null && r instanceof jt, "isControlGateElement");
var Up = u((r) => r != null && r instanceof at, "isBlochDisplayElement");
var bT = u((r) => r != null && r instanceof Bt, "isWriteGateElement");
var Wp = u((r) => r != null && r instanceof Zt, "isMeasurementGateElement");
function Vp(r) {
  return /^-?\d+$/.test(r);
}
__name(Vp, "Vp");
u(Vp, "isNumeric");
var xl = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    te(K`<slot></slot>`, this.shadowRoot);
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
    return ce.notNull(e), e;
  }
  initPopup() {
    this.popup = Pt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !Je(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    ce.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return te(K`${t}`, i), i;
  }
}, "xl");
u(xl, "InspectorButtonElement");
ne(xl);
var yo = Xo(Ta(), 1);
var wl = u((r) => r !== null && r instanceof $r, "isAngleSliderElement");
var $r = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = Ye({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new kr("Bad denominator", this.denominator);
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
      let [i] = this.findSnapAngle(Iu(this.angle));
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
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.angleSliderService !== void 0 && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.angleSliderService = Fe(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Ve(e.value)}`);
    }).start(), this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, yo.default)(this).unset();
  }
  update() {
    te(K`<style>
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
    (0, yo.default)(this).draggable({ origin: "self", modifiers: [yo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = yo.default.getElementRect(e.target).width, i = e.pageX / t;
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
    return ce.notNull(i), ce.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "$r");
u($r, "AngleSliderElement"), k([j], $r.prototype, "angle", 2), k([j], $r.prototype, "radian", 2), k([j], $r.prototype, "denominator", 2), k([j], $r.prototype, "disabled", 2), k([j], $r.prototype, "debug", 2);
ne($r);
var Tt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return ku(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Hr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), yn(e)) {
      let t = qi(e.angle);
      bo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ba(e) || Ha(e) || $a(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Pn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    te(K`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!wl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!wl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    ce.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (zu(e)) {
      let t, i = qi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Du(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Ru(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    ce.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Vp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Tt");
u(Tt, "OperationInspectorElement"), k([je], Tt.prototype, "ifInput", 2), k([je], Tt.prototype, "angleInputLabel", 2), k([je], Tt.prototype, "angleInput", 2), k([je], Tt.prototype, "angleSlider", 2), k([je], Tt.prototype, "denominatorInput", 2), k([je], Tt.prototype, "denominatorVariableLabel", 2), k([je], Tt.prototype, "denominatorLabel", 2), k([je], Tt.prototype, "reduceAngleFractionCheckbox", 2), k([je], Tt.prototype, "flagInput", 2), k([j], Tt.prototype, "conditionalGatePaneDisabled", 2), k([j], Tt.prototype, "anglePaneDisabled", 2), k([j], Tt.prototype, "conditionalFlagPaneDisabled", 2);
ne(Tt);
var sr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "";
    this.magnitudes = "1.0";
    this.phases = "";
    this.multiQubits = false;
    this.showKets = false;
  }
  setAmplitudes(e) {
    let t = this.qubitCircles;
    for (let [i, l] of Object.entries(e)) {
      let c = t[parseInt(i)];
      ce.notNull(c);
      let d = xr.from(l);
      c.setAttribute("data-amplitude-real", d.real.toString()), c.setAttribute("data-amplitude-imag", d.imag.toString());
      let v = d.abs();
      if (this.setRoundedMagnitude(c, v), v === 0)
        continue;
      let b = d.phase() / Math.PI * 180;
      this.setRoundedPhase(c, b);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initQubitCirclePopup(this.qubitCircles), this.hasAttribute("data-multi-qubits") && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()));
  }
  dispatchLoadEvent() {
    this.dispatchEvent(new Event("circle-notation.load", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    this.shadowRoot !== null && t !== i && e === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let e = { root: this, threshold: [0, 0.2] }, t = u((l) => {
      for (let c of l) {
        let d = c.target;
        c.intersectionRatio >= 0.2 ? (d.setAttribute("data-targets", "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : c.intersectionRatio === 0 && d.setAttribute("data-targets", "circle-notation.qubitCircleGroups");
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
    te(K`<style>
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

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          :host([data-size='xs']) .qubit-circle {
            height: 17px !important;
            width: 17px !important;
          }

          :host([data-size='sm']) .qubit-circle {
            height: 25px !important;
            width: 25px !important;
          }

          :host([data-size='base']) .qubit-circle {
            height: 32px !important;
            width: 32px !important;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px !important;
            width: 48px !important;
          }

          :host([data-size='xl']) .qubit-circle {
            height: 64px !important;
            width: 64px !important;
          }

          :host([data-qubit-count='1']:not([data-multi-qubits])) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-count='1']) .qubit-circle,
          :host([data-qubit-count='2']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-count='3']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle {
              height: 64px;
              width: 64px;
            }
          }

          :host([data-qubit-count='4']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='4']) .qubit-circle {
              height: 48px;
              width: 48px;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle {
              height: 32px;
              width: 32px;
            }
          }

          :host([data-qubit-count='6']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle {
              height: 25px;
              width: 25px;
            }
          }

          :host([data-qubit-count='7']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='7']) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-qubit-count='8']) .qubit-circle,
          :host([data-qubit-count='9']) .qubit-circle,
          :host([data-qubit-count='10']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='8']) .qubit-circle,
            :host([data-qubit-count='9']) .qubit-circle,
            :host([data-qubit-count='10']) .qubit-circle {
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
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
            font-size: 0.75rem;
            color: var(--colors-wolf, #777777);
            margin-bottom: -18px;
            content: '|' attr(data-ket) '⟩';
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

          :host([data-size='xs']) .qubit-circle__magnitude,
          :host([data-size='sm']) .qubit-circle__magnitude {
            border-width: 1px;
          }
          :host([data-size='base']) .qubit-circle__magnitude,
          :host([data-size='lg']) .qubit-circle__magnitude,
          :host([data-size='xl']) .qubit-circle__magnitude {
            border-width: 2px;
          }

          :host([data-qubit-count='5']) .qubit-circle__magnitude,
          :host([data-qubit-count='6']) .qubit-circle__magnitude,
          :host([data-qubit-count='7']) .qubit-circle__magnitude,
          :host([data-qubit-count='8']) .qubit-circle__magnitude,
          :host([data-qubit-count='9']) .qubit-circle__magnitude,
          :host([data-qubit-count='10']) .qubit-circle__magnitude {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__magnitude {
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
            content: '';
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-fox, #ff9600);
          }

          .qubit-circle[data-rounded-magnitude='0.1'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude='0.2'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude='0.3'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude='0.4'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude='0.5'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude='0.6'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude='0.7'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude='0.8'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude='0.9'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude='1'] > .qubit-circle__magnitude::after {
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

          :host([data-size='xs']) .qubit-circle__phase,
          :host([data-size='sm']) .qubit-circle__phase {
            border-width: 1px;
          }
          :host([data-size='base']) .qubit-circle__phase,
          :host([data-size='lg']) .qubit-circle__phase,
          :host([data-size='xl']) .qubit-circle__phase {
            border-width: 2px;
          }

          :host([data-qubit-count='5']) .qubit-circle__phase,
          :host([data-qubit-count='6']) .qubit-circle__phase,
          :host([data-qubit-count='7']) .qubit-circle__phase,
          :host([data-qubit-count='8']) .qubit-circle__phase,
          :host([data-qubit-count='9']) .qubit-circle__phase,
          :host([data-qubit-count='10']) .qubit-circle__phase {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__phase {
              border-width: 2px;
            }
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] > .qubit-circle__phase {
            transform: rotate(-10deg);
          }

          .qubit-circle[data-rounded-phase='20'] > .qubit-circle__phase {
            transform: rotate(-20deg);
          }

          .qubit-circle[data-rounded-phase='30'] > .qubit-circle__phase {
            transform: rotate(-30deg);
          }

          .qubit-circle[data-rounded-phase='40'] > .qubit-circle__phase {
            transform: rotate(-40deg);
          }

          .qubit-circle[data-rounded-phase='50'] > .qubit-circle__phase {
            transform: rotate(-50deg);
          }

          .qubit-circle[data-rounded-phase='60'] > .qubit-circle__phase {
            transform: rotate(-60deg);
          }

          .qubit-circle[data-rounded-phase='70'] > .qubit-circle__phase {
            transform: rotate(-70deg);
          }

          .qubit-circle[data-rounded-phase='80'] > .qubit-circle__phase {
            transform: rotate(-80deg);
          }

          .qubit-circle[data-rounded-phase='90'] > .qubit-circle__phase {
            transform: rotate(-90deg);
          }

          .qubit-circle[data-rounded-phase='100'] > .qubit-circle__phase {
            transform: rotate(-100deg);
          }

          .qubit-circle[data-rounded-phase='110'] > .qubit-circle__phase {
            transform: rotate(-110deg);
          }

          .qubit-circle[data-rounded-phase='120'] > .qubit-circle__phase {
            transform: rotate(-120deg);
          }

          .qubit-circle[data-rounded-phase='130'] > .qubit-circle__phase {
            transform: rotate(-130deg);
          }

          .qubit-circle[data-rounded-phase='140'] > .qubit-circle__phase {
            transform: rotate(-140deg);
          }

          .qubit-circle[data-rounded-phase='150'] > .qubit-circle__phase {
            transform: rotate(-150deg);
          }

          .qubit-circle[data-rounded-phase='160'] > .qubit-circle__phase {
            transform: rotate(-160deg);
          }

          .qubit-circle[data-rounded-phase='170'] > .qubit-circle__phase {
            transform: rotate(-170deg);
          }

          .qubit-circle[data-rounded-phase='180'] > .qubit-circle__phase {
            transform: rotate(-180deg);
          }

          .qubit-circle[data-rounded-phase='190'] > .qubit-circle__phase {
            transform: rotate(-190deg);
          }

          .qubit-circle[data-rounded-phase='200'] > .qubit-circle__phase {
            transform: rotate(-200deg);
          }

          .qubit-circle[data-rounded-phase='210'] > .qubit-circle__phase {
            transform: rotate(-210deg);
          }

          .qubit-circle[data-rounded-phase='220'] > .qubit-circle__phase {
            transform: rotate(-220deg);
          }

          .qubit-circle[data-rounded-phase='230'] > .qubit-circle__phase {
            transform: rotate(-230deg);
          }

          .qubit-circle[data-rounded-phase='240'] > .qubit-circle__phase {
            transform: rotate(-240deg);
          }

          .qubit-circle[data-rounded-phase='250'] > .qubit-circle__phase {
            transform: rotate(-250deg);
          }

          .qubit-circle[data-rounded-phase='260'] > .qubit-circle__phase {
            transform: rotate(-260deg);
          }

          .qubit-circle[data-rounded-phase='270'] > .qubit-circle__phase {
            transform: rotate(-270deg);
          }

          .qubit-circle[data-rounded-phase='280'] > .qubit-circle__phase {
            transform: rotate(-280deg);
          }

          .qubit-circle[data-rounded-phase='290'] > .qubit-circle__phase {
            transform: rotate(-290deg);
          }

          .qubit-circle[data-rounded-phase='300'] > .qubit-circle__phase {
            transform: rotate(-300deg);
          }

          .qubit-circle[data-rounded-phase='310'] > .qubit-circle__phase {
            transform: rotate(-310deg);
          }

          .qubit-circle[data-rounded-phase='320'] > .qubit-circle__phase {
            transform: rotate(-320deg);
          }

          .qubit-circle[data-rounded-phase='330'] > .qubit-circle__phase {
            transform: rotate(-330deg);
          }

          .qubit-circle[data-rounded-phase='340'] > .qubit-circle__phase {
            transform: rotate(-340deg);
          }

          .qubit-circle[data-rounded-phase='350'] > .qubit-circle__phase {
            transform: rotate(-350deg);
          }

          .qubit-circle[data-rounded-phase='360'] > .qubit-circle__phase {
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
            content: '';
          }

          :host([data-qubit-count='5']) .qubit-circle__phase::after,
          :host([data-qubit-count='6']) .qubit-circle__phase::after,
          :host([data-qubit-count='7']) .qubit-circle__phase::after,
          :host([data-qubit-count='8']) .qubit-circle__phase::after,
          :host([data-qubit-count='9']) .qubit-circle__phase::after,
          :host([data-qubit-count='10']) .qubit-circle__phase::after {
            width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__phase::after {
              width: 2px;
            }
          }

          :host([data-size='xs']) .qubit-circle__phase::after,
          :host([data-size='sm']) .qubit-circle__phase::after {
            width: 1px;
          }
          :host([data-size='base']) .qubit-circle__phase::after,
          :host([data-size='lg']) .qubit-circle__phase::after,
          :host([data-size='xl']) .qubit-circle__phase::after {
            width: 2px;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`, this.shadowRoot);
    for (let [e, t] of (this.getAttribute("data-magnitudes") || "1.0").split(",").entries())
      this.setRoundedMagnitude(this.qubitCircles[e], parseFloat(t));
    for (let [e, t] of (this.getAttribute("data-phases") || "").split(",").entries()) {
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
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : K`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(e) {
    return K`<div
      class="qubit-circle"
      data-ket="${e}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(e) {
    let t = K``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (d) => this.qubitCircleGroup(d, (v) => this.qubitCircleGroup(v, (b) => this.qubitCircleGroup(b, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = K`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, d = 1) => c.reduce((v, b, y) => y % d ? v : [...v, c.slice(y, y + d)], []), "arrayChunk")(e, i).map((c) => {
      let d = K``;
      if (t)
        for (let v of t(c))
          d = K`${d} ${v}`;
      else
        for (let v of c)
          d = K`${d} ${this.qubitCircleHtml(v)}`;
      return i === 64 ? K`<div class="qubit-circle-group--size${i}" data-targets="circle-notation.qubitCircleGroups">
          ${d}
        </div>` : K`<div class="qubit-circle-group--size${i}">${d}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = Pt(e);
    fp(t, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), d = t.getAttribute("data-magnitude"), v = t.getAttribute("data-phase"), b;
    l === null || c === null ? b = xr.ZERO : b = new xr(parseFloat(l), parseFloat(c));
    let y;
    d && parseFloat(d) === 0 ? y = 0 : y = v ? parseFloat(v) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, b, d ? parseFloat(d) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, d, v) {
    t._tippy.setContent(this.popupContent(e, i, l, c, d, v));
  }
  popupContent(e, t, i, l, c, d) {
    let v = e.querySelector(".circle-notation-popup__ket-binary"), b = e.querySelector(".circle-notation-popup__ket-decimal"), y = e.querySelector(".circle-notation-popup__amplitude-real"), w = e.querySelector(".circle-notation-popup__amplitude-imag"), A = e.querySelector(".circle-notation-popup__probability"), O = e.querySelector(".circle-notation-popup__phase");
    v && (v.textContent = t.toString(2).padStart(d, "0")), b && (b.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), w && (w.textContent = `${this.forceSigned(i.imag, 5)}i`), A && (A.textContent = `${this.forceSigned(l * l * 100, 4)}%`), O && (O.textContent = `${this.forceSigned(c, 2)}\xB0`);
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
}, "sr");
u(sr, "CircleNotationElement"), k([j], sr.prototype, "qubitCount", 2), k([j], sr.prototype, "size", 2), k([j], sr.prototype, "magnitudes", 2), k([j], sr.prototype, "phases", 2), k([j], sr.prototype, "multiQubits", 2), k([j], sr.prototype, "showKets", 2), k([fr], sr.prototype, "qubitCircles", 2), k([fr], sr.prototype, "qubitCircleGroups", 2), k([fr], sr.prototype, "visibleQubitCircleGroups", 2);
ne(sr);
var Xp = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var Yp = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Bn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = Ye({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, d = this.getBoundingClientRect(), v = d.left + window.pageXOffset, b = d.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (v + c)}px`, i.style.top = `${t.clientY - (b + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService = Fe(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Ve(e.value)}`);
    }).start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    te(K`<style>
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
    return K([Xp]);
  }
  get tailSpinIcon() {
    return K([Yp]);
  }
}, "Bn");
u(Bn, "RunCircuitButtonElement"), k([j], Bn.prototype, "running", 2), k([j], Bn.prototype, "debug", 2), k([je], Bn.prototype, "body", 2), k([je], Bn.prototype, "ripple", 2);
ne(Bn);
var an = /* @__PURE__ */ __name(class extends HTMLElement {
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
    te(K`<style>
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
}, "an");
u(an, "CircuitBlockElement"), k([j], an.prototype, "comment", 2), k([j], an.prototype, "finalized", 2), an = k([ne], an);
var Kp = Xo(Ta(), 1);
var Zp = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var El = u((r) => r != null && r instanceof yt, "isCircuitDropzoneElement");
var yt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = Ye({ id: "circuit-dropzone", initial: "empty", states: { empty: { on: { INIT_OPERATION: { target: "occupied", actions: ["initOperation"] }, SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { snapOperation: () => {
      ce.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), t.operation.snapped = true);
    }, initOperation: (e, t) => {
      t.type === "INIT_OPERATION" && (t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(t.operation));
    }, dispatchOccupiedEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-occupy", { bubbles: true }));
    }, dispatchDeleteOperationEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-operation-delete", { bubbles: true }));
    } } });
  }
  get noConnections() {
    return !this.connectTop && !this.connectBottom;
  }
  get occupied() {
    return this.operationName !== "";
  }
  get operation() {
    let t = Array.from(this.children).filter((i) => Je(i));
    switch (t.length) {
      case 0:
        return null;
      case 1:
        return t[0];
      default:
        throw new Error("circuit-dropzone cannot hold multiple operations.");
    }
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
    this.circuitDropzoneService = Fe(this.circuitDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`circuit-dropzone: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.operation !== null && this.initOperation(this.operation), this.initDropzone(), this.addEventListener("operation-snap", this.snapOperation), this.addEventListener("operation-unsnap", this.unsnapOperation), this.addEventListener("operation-end-dragging", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    te(K`<style>
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
  initOperation(e) {
    this.circuitDropzoneService.send({ type: "INIT_OPERATION", operation: e });
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, Kp.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!Je(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  get wireSvg() {
    return K([Zp]);
  }
}, "yt");
u(yt, "CircuitDropzoneElement"), k([j], yt.prototype, "operationName", 2), k([j], yt.prototype, "inputWireQuantum", 2), k([j], yt.prototype, "outputWireQuantum", 2), k([j], yt.prototype, "connectTop", 2), k([j], yt.prototype, "connectBottom", 2), k([j], yt.prototype, "shadow", 2), k([j], yt.prototype, "debug", 2);
ne(yt);
var sn = u((r) => r != null && r instanceof It, "isCircuitStepElement");
var Ne = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let d = e(i, l, c), v = t.get(d);
  return v ? v.push(i) : t.set(d, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var It = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = Ye({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      ce.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
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
    this.circuitStepService = Fe(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Ve(e.value)}`);
    }).start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone-snap", this.snapDropzone), this.addEventListener("circuit-dropzone-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone-drop", this.unshadow), this.addEventListener("circuit-dropzone-occupy", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    te(K`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
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
        c.operation.enable(), c.connectTop = i.some((v) => this.bit(v) < this.bit(c)), c.connectBottom = i.some((v) => this.bit(v) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let d = Math.min(...l), v = Math.max(...l);
        d < this.bit(c) && this.bit(c) < v && (c.connectTop = true, c.connectBottom = true);
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
        if (!bo(d.operation))
          throw new Error(`${d.operation} isn't a phase-gate element.`);
        return l.angle === d.operation.angle;
      }).map((d) => this.bit(d));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((d) => d < this.bit(i)), i.connectBottom = c.some((d) => d > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((b) => b.connectTop || b.connectBottom).map((b) => this.bit(b)), d = Math.min(...c), v = Math.max(...c);
      d < this.bit(i) && this.bit(i) < v && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let d = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? d.disable() : (d.enable(), c.connectTop = i.some((v) => this.bit(c) > v), c.connectBottom = i.some((v) => this.bit(c) < v));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((w) => w.operationName))], c = this.numControlGateDropzones(e, l), d = i.map((w) => this.bit(w)), v = c === null ? d : d.slice(0, c), b = t.map((w) => this.bit(w)), y = v.concat(b);
    for (let [w, A] of Object.entries(i)) {
      let O = A.operation;
      A.connectBottom = y.some((M) => this.bit(A) < M), A.connectTop = y.some((M) => this.bit(A) > M), c === null || c !== null && parseInt(w) < c ? O.enable() : (A.connectTop = Math.max(...y) > this.bit(A), O.disable());
    }
    for (let w of t) {
      if (!xn(w.operation))
        throw new Error(`${w.operation} isn't controllable.`);
      w.operation.controls = this.controlBits(w, d, e), w.connectTop = y.some((A) => A < this.bit(w)), w.connectBottom = y.some((A) => A > this.bit(w));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((b) => yl(b.operation) && !b.operation.disabled).map((b) => this.bit(b)), l = t.map((b) => this.bit(b)), c = i.concat(l), d = Math.min(...c), v = Math.max(...c);
    for (let b of this.freeDropzones)
      d < this.bit(b) && this.bit(b) < v && (b.connectTop = true, b.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return ce.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return ce.notNull(t), t;
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
    let e = new yt();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new yt();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && yl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, d = 0, v = 0, b = 0, y = 0, w = 0, A = 0;
    return this.dropzones.filter((O) => O.occupied).filter((O) => xn(O.operation)).filter((O) => e === void 0 ? true : Lp(O.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : qp(O.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : jp(O.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Bp(O.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : bo(O.operation) ? (d += 1, e.maxCphaseTargetGates !== 0 && d > e.maxCphaseTargetGates ? false : !e.disableCphase) : Hp(O.operation) ? (v += 1, e.maxCtTargetGates !== 0 && v > e.maxCtTargetGates ? false : !e.disableCt) : $p(O.operation) ? (b += 1, e.maxCrnotTargetGates !== 0 && b > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ba(O.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : Ha(O.operation) ? (w += 1, e.maxCryTargetGates !== 0 && w > e.maxCryTargetGates ? false : !e.disableCry) : $a(O.operation) ? (A += 1, e.maxCrzTargetGates !== 0 && A > e.maxCrzTargetGates ? false : !e.disableCrz) : Fp(O.operation) ? !e.disableCswap : true);
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
    Je(e.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
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
    for (let [t, i] of Ne(this.operations, (l) => l.constructor))
      switch (t) {
        case Yt: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, A = b.map((M) => M.bit), O = { type: w, targets: A };
              c !== "" && (O.if = c), v !== "" && (O.controls = y.controls), e.push(O);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, A = b.map((M) => M.bit), O = { type: w, targets: A };
              c !== "" && (O.if = c), v !== "" && (O.controls = y.controls), e.push(O);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, A = b.map((M) => M.bit), O = { type: w, targets: A };
              c !== "" && (O.if = c), v !== "" && (O.controls = y.controls), e.push(O);
            }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, A = b.map((M) => M.bit), O = { type: w, targets: A };
              c !== "" && (O.if = c), v !== "" && (O.controls = y.controls), e.push(O);
            }
          break;
        }
        case Kt: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d, (y) => y.if))
              for (let [y, w] of Ne(b, (A) => A.controls.toString())) {
                let A = w[0], O = A.operationType, M = w.map((S) => S.bit), R = { type: O, targets: M };
                v !== "" && (R.if = v), c !== "" && (R.angle = c), y !== "" && (R.controls = A.controls), e.push(R);
              }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, A = b.map((M) => M.bit), O = { type: w, targets: A };
              c !== "" && (O.if = c), v !== "" && (O.controls = y.controls), e.push(O);
            }
          break;
        }
        case Jt: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, A = b.map((M) => M.bit), O = { type: w, targets: A };
              c !== "" && (O.if = c), v !== "" && (O.controls = y.controls), e.push(O);
            }
          break;
        }
        case Qt: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d, (y) => y.if))
              for (let [y, w] of Ne(b, (A) => A.controls.toString())) {
                let A = w[0], O = A.operationType, M = w.map((S) => S.bit), R = { type: O, targets: M };
                v !== "" && (R.if = v), c !== "" && (R.angle = c), y !== "" && (R.controls = A.controls), e.push(R);
              }
          break;
        }
        case er: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d, (y) => y.if))
              for (let [y, w] of Ne(b, (A) => A.controls.toString())) {
                let A = w[0], O = A.operationType, M = w.map((S) => S.bit), R = { type: O, targets: M };
                v !== "" && (R.if = v), c !== "" && (R.angle = c), y !== "" && (R.controls = A.controls), e.push(R);
              }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d, (y) => y.if))
              for (let [y, w] of Ne(b, (A) => A.controls.toString())) {
                let A = w[0], O = A.operationType, M = w.map((S) => S.bit), R = { type: O, targets: M };
                v !== "" && (R.if = v), c !== "" && (R.angle = c), y !== "" && (R.controls = A.controls), e.push(R);
              }
          break;
        }
        case rr: {
          let l = i.filter((b) => !b.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, d = l[0].controls, v = { type: c, targets: [l[0].bit, l[1].bit] };
          d !== void 0 && d.length > 0 && (v.controls = d), e.push(v);
          break;
        }
        case jt: {
          let l = i.filter((d) => !d.disabled);
          if (l.length < 2 || this.operations.some((d) => xn(d) && d.controls.length > 0))
            break;
          let c = l.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case at: {
          let l = i, c = i.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Bt: {
          let l = i;
          for (let [, c] of Ne(l, (d) => d.value)) {
            let d = c.map((v) => v.bit);
            e.push({ type: c[0].operationType, targets: d });
          }
          break;
        }
        case Zt: {
          let l = i;
          for (let [c, d] of Ne(l, (v) => v.flag)) {
            let v = d.map((w) => w.bit), y = { type: d[0].operationType, targets: v };
            c !== "" && (y.flag = c), e.push(y);
          }
          break;
        }
        default:
          throw new kr("Unrecognized operation", { klass: t });
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
}, "It");
u(It, "CircuitStepElement"), k([j], It.prototype, "active", 2), k([j], It.prototype, "breakpoint", 2), k([j], It.prototype, "shadow", 2), k([j], It.prototype, "keep", 2), k([j], It.prototype, "debug", 2);
ne(It);
var gi = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = Ye({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, UNGRAB_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
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
        ce.notNull(c);
        let d = this.circuit.addShadowStepAfter(c), v = d.dropzones[l.wireIndex];
        ce.notNull(v), v.append(i), v.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d.dropzones);
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
      Sp(i) && i.initMenu();
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
  }
  connectedCallback() {
    this.circuitEditorService = Fe(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Ve(e.value)}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-ungrab", this.ungrabOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", () => {
      this.circuit.hoverable = true;
      for (let e of this.circuit.operations)
        e.initMenu();
    });
  }
  update() {
    te(K`<slot></slot>`, this.shadowRoot);
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  maybeDeactivateOperation(e) {
    let t = e.target;
    !Je(t) && !this.inspectorButton.popup.popper.contains(t) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: t });
  }
  showOperationInspectorIf(e) {
    let t = e.target;
    if (!Hr(t))
      throw new Error(`${t} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: t });
  }
  showOperationInspectorAngle(e) {
    let t = e.target;
    if (!yn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!Pn(t))
      throw new Error(`${t} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: t });
  }
  setOperationIf(e) {
    let t = e.target, i = this.activeOperation;
    if (!Hr(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: t.if });
  }
  setOperationAngle(e) {
    let t = e.target, i = this.activeOperation;
    if (ce.notNull(i), !yn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!Pn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  ungrabOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "UNGRAB_OPERATION", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!Je(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, d = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: d });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "gi");
u(gi, "CircuitEditorElement"), k([j], gi.prototype, "debug", 2), k([je], gi.prototype, "circuit", 2), k([je], gi.prototype, "inspectorButton", 2);
ne(gi);
var Fa = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.paletteDropzoneMachine = Ye({ id: "palette-dropzone", initial: "idle", states: { idle: { on: { GRAB_OPERATION: { target: "idle", actions: ["newOperation"] }, DELETE_OPERATION: { target: "idle", actions: ["deleteOperation"] } } } } }, { actions: { newOperation: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation, l = i.cloneNode(false);
      if (!Je(l))
        throw new TypeError(`${l} isn't an operation.`);
      vl(i) && i.disableHelp(), this.prepend(l), this.initOperation(l);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && this.removeChild(t.operation);
    } } });
  }
  connectedCallback() {
    this.paletteDropzoneService = Fe(this.paletteDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`palette-dropzone: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    te(K`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, vl(e) && e.initHelp();
  }
  get operation() {
    let t = Array.from(this.children).filter((i) => Je(i));
    if (t.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (t.length === 1)
      return t[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  grabOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new TypeError(`${t} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "GRAB_OPERATION", operation: t });
  }
  deleteOperation(e) {
    let t = e.target;
    if (!Je(t))
      throw new TypeError(`${t} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
}, "Fa");
u(Fa, "PaletteDropzoneElement"), k([j], Fa.prototype, "debug", 2);
ne(Fa);
var ae = /* @__PURE__ */ __name(class extends we(HTMLElement) {
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
    this.quantumCircuitMachine = Ye({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
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
    return ce.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
      this.append(new It());
  }
  stepAt(e) {
    let t = this.steps[e];
    return ce.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new It();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      ce.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    if (this.quantumCircuitService = Fe(this.quantumCircuitMachine).onTransition((e) => {
      this.debug && console.log(`quantum-circuit: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.hasAttribute("data-update-url")) {
      let e = this.urlJson;
      this.loadFromJson(e);
    }
    if (this.hoverable)
      for (let e of this.operations)
        e.hoverable = true;
    this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-json" && i !== "" && (this.loadFromJson(i), this.hoverable)))
      for (let l of this.operations)
        l.hoverable = true;
  }
  update() {
    te(K`<slot></slot>`, this.shadowRoot);
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
      let l = new Yt();
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
      let l = new ir();
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
      let l = new or();
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
      let l = new ar();
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
      let d = new Kt();
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
      let l = new nr();
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
      let l = new Jt();
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
      let l = new Qt();
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
      let l = new er();
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
      let l = new tr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new rr(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  control(...e) {
    let t = this.applyOperationToTargets(() => new jt(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new at(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Bt();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Zt(), ...e), this.resize(), this;
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
    return this.controlledU(Yt, e, t), this;
  }
  cnot(e, t) {
    return this.controlledU(ir, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(or, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(Kt, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(Jt, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(Qt, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(er, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(tr, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(rr, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new jt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), d = l.concat(c), v = Math.max(...d) + 1, b = this.appendStepWithDropzones(v);
    for (let y of l)
      b.dropzoneAt(y).put(new jt());
    for (let y of c)
      b.dropzoneAt(y).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(b);
  }
  appendStep() {
    let e = new It(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new It();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new yt();
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
    for (let l of i.cols) {
      let c = this.appendStep();
      for (let d of l) {
        switch (true) {
          case /^\|0>$/.test(d): {
            let v = new Bt();
            v.value = "0", c.appendOperation(v);
            break;
          }
          case /^\|1>$/.test(d): {
            let v = new Bt();
            v.value = "1", c.appendOperation(v);
            break;
          }
          case /^H/.test(d): {
            let v = new Yt();
            v.if = this.ifVariable(d.slice(1)), c.appendOperation(v);
            break;
          }
          case (/^X$/.test(d) || /^X<(.+)$/.test(d)): {
            let v = new ir();
            v.if = d.slice(2).trim(), c.appendOperation(v);
            break;
          }
          case /^Y/.test(d): {
            let v = new or();
            v.if = this.ifVariable(d.slice(1)), c.appendOperation(v);
            break;
          }
          case /^Z/.test(d): {
            let v = new ar();
            v.if = this.ifVariable(d.slice(1)), c.appendOperation(v);
            break;
          }
          case /^P/.test(d): {
            let v = new Kt();
            v.angle = this.angleParameter(d.slice(1)), c.appendOperation(v);
            break;
          }
          case /^T/.test(d): {
            let v = new nr();
            v.if = this.ifVariable(d.slice(1)), c.appendOperation(v);
            break;
          }
          case /^X\^½/.test(d): {
            let v = new Jt();
            v.if = this.ifVariable(d.slice(3)), c.appendOperation(v);
            break;
          }
          case /^Rx/.test(d): {
            let v = new Qt();
            v.angle = this.angleParameter(d.slice(2)), c.appendOperation(v);
            break;
          }
          case /^Ry/.test(d): {
            let v = new er();
            v.angle = this.angleParameter(d.slice(2)), c.appendOperation(v);
            break;
          }
          case /^Rz/.test(d): {
            let v = new tr();
            v.angle = this.angleParameter(d.slice(2)), c.appendOperation(v);
            break;
          }
          case /^Swap$/.test(d): {
            let v = new rr();
            c.appendOperation(v);
            break;
          }
          case /^•$/.test(d): {
            let v = new jt();
            c.appendOperation(v);
            break;
          }
          case /^Bloch$/.test(d): {
            let v = new at();
            c.appendOperation(v);
            break;
          }
          case /^Measure/.test(d): {
            let v = new Zt(), b = ((/^>(.+)$/.exec(d.slice(7)) || [])[1] || "").trim();
            v.flag = b, c.appendOperation(v);
            break;
          }
          case /^[[{](.+)$/.test(d): {
            let v = d.slice(1);
            c.remove(), t = new an(), t.comment = v, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(d): {
            c.remove(), t.finalize();
            break;
          }
          default: {
            if (d === 1)
              c.dropzones.length === c.freeDropzones.length ? c.keep = true : c.keep = false;
            else
              throw new Error(`Unknown operation: ${d}`);
            c.appendDropzone();
          }
        }
        c.updateOperationAttributes();
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
          let d = c.map((w) => i.bit(w)), v = i.bit(l), b = d[0] === v ? d[1] : d[0], y = i.dropzoneAt(b);
          l.inputWireQuantum = t, l.outputWireQuantum = y.inputWireQuantum, t = y.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!El(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    ce.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
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
    El(l) && t.push(l);
    for (let [c, d] of Object.entries(this.dropzones)) {
      let v = d.snapTarget, b = this.isVertical ? v.y : v.x, y = this.isVertical ? v.x : v.y, w = parseInt(c) % this.wireCount, A = b - e.snapRange * 0.75, O = b + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: y, y: A }) : i.push({ x: A, y }), this.snapTargets[A] === void 0 && (this.snapTargets[A] = {}), this.snapTargets[A][y] === void 0 && (this.snapTargets[A][y] = { dropzone: null, stepIndex: -1, wireIndex: w })), this.isVertical ? i.push({ x: y, y: O }) : i.push({ x: O, y }), this.snapTargets[O] === void 0 && (this.snapTargets[O] = {}), this.snapTargets[O][y] === void 0 && (this.snapTargets[O][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: w }), (!d.occupied || d === l) && i.push(v), this.snapTargets[b] === void 0 && (this.snapTargets[b] = {}), this.snapTargets[b][y] === void 0 && (this.snapTargets[b][y] = { dropzone: d, stepIndex: null, wireIndex: w });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    ce.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let d in c) {
          let v = c[d];
          v.stepIndex !== null && (v.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let d = c.snapTarget, v = this.isVertical ? d.y : d.x, b = this.isVertical ? d.x : d.y;
      ce.notNull(this.snapTargets[v]), this.snapTargets[v][b] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
}, "ae");
u(ae, "QuantumCircuitElement"), k([j], ae.prototype, "minStepCount", 2), k([j], ae.prototype, "minWireCount", 2), k([j], ae.prototype, "maxWireCount", 2), k([j], ae.prototype, "editing", 2), k([j], ae.prototype, "updateUrl", 2), k([j], ae.prototype, "json", 2), k([j], ae.prototype, "circuitTitle", 2), k([j], ae.prototype, "debug", 2), k([j], ae.prototype, "chDisabled", 2), k([j], ae.prototype, "chMaxControlGates", 2), k([j], ae.prototype, "chMaxTargetGates", 2), k([j], ae.prototype, "cnotDisabled", 2), k([j], ae.prototype, "cnotMaxControlGates", 2), k([j], ae.prototype, "cnotMaxTargetGates", 2), k([j], ae.prototype, "cyDisabled", 2), k([j], ae.prototype, "cyMaxControlGates", 2), k([j], ae.prototype, "cyMaxTargetGates", 2), k([j], ae.prototype, "czDisabled", 2), k([j], ae.prototype, "czMaxControlGates", 2), k([j], ae.prototype, "czMaxTargetGates", 2), k([j], ae.prototype, "cphaseDisabled", 2), k([j], ae.prototype, "cphaseMaxControlGates", 2), k([j], ae.prototype, "cphaseMaxTargetGates", 2), k([j], ae.prototype, "ctDisabled", 2), k([j], ae.prototype, "ctMaxControlGates", 2), k([j], ae.prototype, "ctMaxTargetGates", 2), k([j], ae.prototype, "crnotDisabled", 2), k([j], ae.prototype, "crnotMaxControlGates", 2), k([j], ae.prototype, "crnotMaxTargetGates", 2), k([j], ae.prototype, "crxDisabled", 2), k([j], ae.prototype, "crxMaxControlGates", 2), k([j], ae.prototype, "crxMaxTargetGates", 2), k([j], ae.prototype, "cryDisabled", 2), k([j], ae.prototype, "cryMaxControlGates", 2), k([j], ae.prototype, "cryMaxTargetGates", 2), k([j], ae.prototype, "crzDisabled", 2), k([j], ae.prototype, "crzMaxControlGates", 2), k([j], ae.prototype, "crzMaxTargetGates", 2), k([j], ae.prototype, "cswapDisabled", 2), k([j], ae.prototype, "cswapMaxControlGates", 2), k([j], ae.prototype, "swapDisabled", 2), k([j], ae.prototype, "controlControlDisabled", 2), k([j], ae.prototype, "controlControlMaxTargetGates", 2), k([j], ae.prototype, "phasePhaseDisabled", 2), k([j], ae.prototype, "phasePhaseMaxTargetGates", 2), k([fr], ae.prototype, "blocks", 2);
ne(ae);
var Hn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.visibleQubitCircleKets = [], this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-visibility-change", this.updateVisibleQubitCircleKets), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    te(K`<slot></slot>`, this.shadowRoot);
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
          let v = parseInt(d), b = c.dropzoneAt(v).operation;
          if (Up(b)) {
            let y = t.blochVectors[v];
            b.x = y[0], b.y = y[1], b.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d = t.measuredBits;
          for (let v in d) {
            let b = parseInt(v), y = c.dropzoneAt(b).operation;
            Wp(y) && (y.value = d[b].toString());
          }
        }
        for (let d of c.dropzones) {
          let v = d.operation;
          !Hr(v) || v.if !== "" && (v.disabled = !t.flags[v.if]);
        }
        if (i === t.step) {
          let d = {};
          for (let v in t.amplitudes) {
            let b = t.amplitudes[v];
            d[v] = new xr(b[0], b[1]);
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
        throw new kr("Unknown service worker message", { data: t });
    }
  }
  run() {
    if (this.circleNotation === null)
      return;
    let e = this.activeStepIndex, t = this.circuit.serialize();
    ce.need(t.length > 0, "non-zero step length");
    let i = Math.max(...t.map((c) => Math.max(...c.map((d) => {
      let v = [];
      return xn(d) && (v = d.controls), Math.max(...d.targets.concat(v));
    })))), l = i >= 0 ? i + 1 : 1;
    this.circleNotation.qubitCount = l, this.worker.postMessage({ qubitCount: l, stepIndex: e, steps: t, targets: this.visibleQubitCircleKets });
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, t = this.circuit.breakpoint, i = e || t;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  updateVisibleQubitCircleKets(e) {
    let t = e.detail;
    ce.notNull(t), this.visibleQubitCircleKets = t;
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    ce.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "Hn");
u(Hn, "QuantumSimulatorElement"), k([j], Hn.prototype, "updateUrl", 2), k([je], Hn.prototype, "circuit", 2), k([je], Hn.prototype, "circleNotation", 2), k([fr], Hn.prototype, "runCircuitButtons", 2);
ne(Hn);

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
  xr as Complex
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
