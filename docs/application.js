var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var Mf = Object.create;
var Li = Object.defineProperty;
var ku = Object.getOwnPropertyDescriptor;
var Af = Object.getOwnPropertyNames;
var Pf = Object.getPrototypeOf;
var If = Object.prototype.hasOwnProperty;
var zf = /* @__PURE__ */ __name((r) => Li(r, "__esModule", { value: true }), "zf");
var u = /* @__PURE__ */ __name((r, e) => Li(r, "name", { value: e, configurable: true }), "u");
var Ru = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "Ru");
var Df = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of Af(e))
      !If.call(r, l) && (t || l !== "default") && Li(r, l, { get: () => e[l], enumerable: !(i = ku(e, l)) || i.enumerable });
  return r;
}, "Df");
var Ko = /* @__PURE__ */ __name((r, e) => Df(zf(Li(r != null ? Mf(Pf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Ko");
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
var Lu = Ru((xs, Gu) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(S) {
      function _() {
        var I = Error.apply(this, arguments);
        I.name = this.name = S, this.stack = I.stack, this.message = I.message;
      }
      u(_, "errorConstructor");
      function P() {
      }
      return u(P, "IntermediateInheritor"), P.prototype = Error.prototype, _.prototype = new P(), _;
    }
    u(i, "createError");
    var l = z.DivisionByZero = i("DivisionByZero"), c = z.InvalidParameter = i("InvalidParameter");
    function d(S, _) {
      return isNaN(S = parseInt(S, 10)) && v(), S * _;
    }
    u(d, "assign");
    function v() {
      throw new c();
    }
    u(v, "throwInvalidParam");
    function b(S) {
      for (var _ = {}, P = S, I = 2, q = 4; q <= P; ) {
        for (; P % I === 0; )
          P /= I, _[I] = (_[I] || 0) + 1;
        q += 1 + 2 * I++;
      }
      return P !== S ? P > 1 && (_[P] = (_[P] || 0) + 1) : _[S] = (_[S] || 0) + 1, _;
    }
    u(b, "factorize");
    var y = u(function(S, _) {
      var P = 0, I = 1, q = 1, E = 0, B = 0, R = 0, X = 1, V = 1, H = 0, W = 1, ie = 1, oe = 1, U = 1e7, ce;
      if (S != null)
        if (_ !== void 0)
          P = S, I = _, q = P * I;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (P = S.n, I = S.d, "s" in S && (P *= S.s)) : 0 in S ? (P = S[0], 1 in S && (I = S[1])) : v(), q = P * I;
              break;
            }
            case "number": {
              if (S < 0 && (q = S, S = -S), S % 1 === 0)
                P = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); W <= U && oe <= U; )
                  if (ce = (H + ie) / (W + oe), S === ce) {
                    W + oe <= U ? (P = H + ie, I = W + oe) : oe > W ? (P = ie, I = oe) : (P = H, I = W);
                    break;
                  } else
                    S > ce ? (H += ie, W += oe) : (ie += H, oe += W), W > U ? (P = ie, I = oe) : (P = H, I = W);
                P *= V;
              } else
                (isNaN(S) || isNaN(_)) && (I = P = NaN);
              break;
            }
            case "string":
              if (W = S.match(/\d+|./g), W === null && v(), W[H] === "-" ? (q = -1, H++) : W[H] === "+" && H++, W.length === H + 1 ? B = d(W[H++], q) : W[H + 1] === "." || W[H] === "." ? (W[H] !== "." && (E = d(W[H++], q)), H++, (H + 1 === W.length || W[H + 1] === "(" && W[H + 3] === ")" || W[H + 1] === "'" && W[H + 3] === "'") && (B = d(W[H], q), X = Math.pow(10, W[H].length), H++), (W[H] === "(" && W[H + 2] === ")" || W[H] === "'" && W[H + 2] === "'") && (R = d(W[H + 1], q), V = Math.pow(10, W[H + 1].length) - 1, H += 3)) : W[H + 1] === "/" || W[H + 1] === ":" ? (B = d(W[H], q), X = d(W[H + 2], 1), H += 3) : W[H + 3] === "/" && W[H + 1] === " " && (E = d(W[H], q), B = d(W[H + 2], q), X = d(W[H + 4], 1), H += 5), W.length <= H) {
                I = X * V, q = P = R + I * E + V * B;
                break;
              }
            default:
              v();
          }
      if (I === 0)
        throw new l();
      t.s = q < 0 ? -1 : 1, t.n = Math.abs(P), t.d = Math.abs(I);
    }, "parse");
    function w(S, _, P) {
      for (var I = 1; _ > 0; S = S * S % P, _ >>= 1)
        _ & 1 && (I = I * S % P);
      return I;
    }
    u(w, "modpow");
    function M(S, _) {
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
    u(M, "cycleLen");
    function C(S, _, P) {
      for (var I = 1, q = w(10, P, _), E = 0; E < 300; E++) {
        if (I === q)
          return E;
        I = I * 10 % _, q = q * 10 % _;
      }
      return 0;
    }
    u(C, "cycleStart");
    function A(S, _) {
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
    u(A, "gcd");
    function z(S, _) {
      if (!(this instanceof z))
        return new z(S, _);
      y(S, _), S = A(t.d, t.n), this.s = t.s, this.n = t.n / S, this.d = t.d / S;
    }
    u(z, "Fraction"), z.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new z(this.n, this.d);
    }, neg: function() {
      return new z(-this.s * this.n, this.d);
    }, add: function(S, _) {
      return y(S, _), new z(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(S, _) {
      return y(S, _), new z(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(S, _) {
      return y(S, _), new z(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(S, _) {
      return y(S, _), new z(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new z(this);
    }, mod: function(S, _) {
      return isNaN(this.n) || isNaN(this.d) ? new z(NaN) : S === void 0 ? new z(this.s * this.n % this.d, 1) : (y(S, _), t.n === 0 && this.d === 0 && z(0, 0), new z(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(S, _) {
      return y(S, _), new z(A(t.n, this.n) * A(t.d, this.d), t.d * this.d);
    }, lcm: function(S, _) {
      return y(S, _), t.n === 0 && this.n === 0 ? new z() : new z(t.n * this.n, A(t.n, this.n) * A(t.d, this.d));
    }, ceil: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new z(NaN) : new z(Math.ceil(S * this.s * this.n / this.d), S);
    }, floor: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new z(NaN) : new z(Math.floor(S * this.s * this.n / this.d), S);
    }, round: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new z(NaN) : new z(Math.round(S * this.s * this.n / this.d), S);
    }, inverse: function() {
      return new z(this.s * this.d, this.n);
    }, pow: function(S, _) {
      if (y(S, _), t.d === 1)
        return t.s < 0 ? new z(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new z(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var P = b(this.n), I = b(this.d), q = 1, E = 1;
      for (var B in P)
        if (B !== "1") {
          if (B === "0") {
            q = 0;
            break;
          }
          if (P[B] *= t.n, P[B] % t.d === 0)
            P[B] /= t.d;
          else
            return null;
          q *= Math.pow(B, P[B]);
        }
      for (var B in I)
        if (B !== "1") {
          if (I[B] *= t.n, I[B] % t.d === 0)
            I[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, I[B]);
        }
      return t.s < 0 ? new z(E, q) : new z(q, E);
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
        return E.length === 1 ? new z(E[0]) : P(E.slice(1)).inverse().add(E[0]);
      }
      u(P, "rec");
      for (var I = 0; I < _.length; I++) {
        var q = P(_.slice(0, I + 1));
        if (q.sub(this.abs()).abs().valueOf() < S)
          return q.mul(this.s);
      }
      return this;
    }, divisible: function(S, _) {
      return y(S, _), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var _, P = "", I = this.n, q = this.d;
      return this.s < 0 && (P += "-"), q === 1 ? P += I : (S && (_ = Math.floor(I / q)) > 0 && (P += _, P += " ", I %= q), P += I, P += "/", P += q), P;
    }, toLatex: function(S) {
      var _, P = "", I = this.n, q = this.d;
      return this.s < 0 && (P += "-"), q === 1 ? P += I : (S && (_ = Math.floor(I / q)) > 0 && (P += _, I %= q), P += "\\frac{", P += I, P += "}{", P += q, P += "}"), P;
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
      var q = M(P, I), E = C(P, I, q), B = this.s === -1 ? "-" : "";
      if (B += P / I | 0, P %= I, P *= 10, P && (B += "."), q) {
        for (var R = E; R--; )
          B += P / I | 0, P %= I, P *= 10;
        B += "(";
        for (var R = q; R--; )
          B += P / I | 0, P %= I, P *= 10;
        B += ")";
      } else
        for (var R = S; P && R--; )
          B += P / I | 0, P %= I, P *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return z;
    }) : typeof xs == "object" ? (Object.defineProperty(z, "__esModule", { value: true }), z.default = z, z.Fraction = z, Gu.exports = z) : r.Fraction = z;
  })(xs);
});
var Pa = Ru((kc, Ks) => {
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
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c = {};
    function d(n) {
      return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
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
    function M(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    u(M, "f");
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
    u(C, "d"), Object.defineProperty(w, "__esModule", { value: true }), w.default = void 0;
    var A = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = A.draggable, o.map.drag = A, o.methodDict.drag = "draggable", s.actions.drag = A.defaults;
    }, listeners: { "interactions:before-action-move": M, "interactions:action-resume": M, "interactions:action-move": C, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: M, move: C, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, z = A;
    w.default = z;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: true }), S.default = void 0;
    var _ = { init: function(n) {
      var o = n;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || P, _.SVGElement = o.SVGElement || P, _.SVGSVGElement = o.SVGSVGElement || P, _.SVGElementInstance = o.SVGElementInstance || P, _.Element = o.Element || P, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || P, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function P() {
    }
    u(P, "y");
    var I = _;
    S.default = I;
    var q = {};
    Object.defineProperty(q, "__esModule", { value: true }), q.default = void 0;
    var E = { init: function(n) {
      var o = S.default.Element, a = n.navigator || {};
      E.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && S.default.document instanceof n.DocumentTouch, E.supportsPointerEvent = a.pointerEnabled !== false && !!S.default.PointerEvent, E.isIOS = /iP(hone|od|ad)/.test(a.platform), E.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), E.isIe9 = /MSIE 9/.test(a.userAgent), E.isOperaMobile = a.appName === "Opera" && E.supportsTouch && /Presto/.test(a.userAgent), E.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", E.pEventTypes = E.supportsPointerEvent ? S.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, E.wheelEvent = S.default.document && "onmousewheel" in S.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = E;
    q.default = B;
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
    u(X, "P");
    function V(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[q.default.prefixedMatchesSelector](o);
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
        n = X(n);
      }
      return null;
    }, R.parentNode = X, R.matchesSelector = V, R.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], f = n[o];
        if (p && s !== o)
          if (f) {
            var m = H(p), h = H(f);
            if (m !== p.ownerDocument)
              if (h !== p.ownerDocument)
                if (m !== h) {
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
                  L = p, D = f, (parseInt(e.getWindow(L).getComputedStyle(L).zIndex, 10) || 0) >= (parseInt(e.getWindow(D).getComputedStyle(D).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var L, D;
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
      if (!q.default.isIOS7 && o) {
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
    u(W, "E");
    function ie(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    u(ie, "T");
    function oe(n) {
      var o = n instanceof S.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
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
      var p, f = n;
      return c.default.string(f) ? f = We(f, o, a) : c.default.func(f) && (f = f.apply(void 0, function(m) {
        if (Array.isArray(m))
          return Re(m);
      }(p = s) || function(m) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(m))
          return Array.from(m);
      }(p) || function(m, h) {
        if (m) {
          if (typeof m == "string")
            return Re(m, h);
          var g = Object.prototype.toString.call(m).slice(8, -1);
          return g === "Object" && m.constructor && (g = m.constructor.name), g === "Map" || g === "Set" ? Array.from(m) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Re(m, h) : void 0;
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
    var Le = {};
    Object.defineProperty(Le, "__esModule", { value: true }), Le.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, f = (0, ce.resolveRectLike)(p, n, o, [n && o]);
      return (0, ce.rectToXY)(f) || { x: 0, y: 0 };
    };
    var fe = {};
    function Ye(n) {
      return n.trim().split(/ +/);
    }
    u(Ye, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(function n(o, a, s) {
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
        for (var m in a) {
          var h = Ye(m).map(function(g) {
            return "".concat(o).concat(g);
          });
          n(h, a[m], s);
        }
      return s;
    }, "t");
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
    u(Mt, "X"), Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0, Mt.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Pr = Mt;
    kt.default = Pr;
    var K = {};
    function Et(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    u(Et, "W");
    function St(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    u(St, "L");
    function Ir(n, o) {
      return o = o || { x: 0, y: 0 }, q.default.isOperaMobile && Et(n) ? (St("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : St("page", n, o), o;
    }
    u(Ir, "U");
    function Wt(n, o) {
      return o = o || {}, q.default.isOperaMobile && Et(n) ? St("screen", n, o) : St("client", n, o), o;
    }
    u(Wt, "V");
    function fr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    u(fr, "N");
    function hr(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var f in o)
        o[f] /= n.length;
      return o;
    }
    u(hr, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, K.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.isNativePointer = Et, K.getXY = St, K.getPageXY = Ir, K.getClientXY = Wt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? hr(o) : o[0];
      Ir(s, n.page), Wt(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = fr, K.pointerAverage = hr, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = fr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), f = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: f, width: p - a, height: f - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = fr(n), f = p[0][a] - p[1][a], m = p[0][s] - p[1][s];
      return (0, Qe.default)(f, m);
    }, K.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = fr(n), f = p[1][a] - p[0][a], m = p[1][s] - p[0][s];
      return 180 * Math.atan2(m, f) / Math.PI;
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
    function Fn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Fn, "G");
    function At(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(At, "H"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.BaseEvent = void 0;
    var un = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), At(this, "type", void 0), At(this, "target", void 0), At(this, "currentTarget", void 0), At(this, "interactable", void 0), At(this, "_interaction", void 0), At(this, "timeStamp", void 0), At(this, "immediatePropagationStopped", false), At(this, "propagationStopped", false), this._interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Fn(o.prototype, a), n;
    }();
    Rt.BaseEvent = un, Object.defineProperty(un.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, xe.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Wr = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    xe.merge = Wr, xe.from = function(n) {
      return Wr([], n);
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
    var Pt = {};
    function cn(n) {
      return (cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(cn, "et");
    function vr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(vr, "nt");
    function mr(n, o) {
      return (mr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(mr, "rt");
    function pn(n, o) {
      return !o || cn(o) !== "object" && typeof o != "function" ? ct(n) : o;
    }
    u(pn, "ot");
    function ct(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(ct, "it");
    function zr(n) {
      return (zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(zr, "at");
    function Nt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Nt, "st"), Object.defineProperty(Pt, "__esModule", { value: true }), Pt.DropEvent = void 0;
    var Wn = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && mr(h, g);
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
        var h, g = zr(s);
        if (p) {
          var x = zr(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return pn(this, h);
      });
      function m(h, g, x) {
        var T;
        (function(D, $) {
          if (!(D instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, m), Nt(ct(T = f.call(this, g._interaction)), "target", void 0), Nt(ct(T), "dropzone", void 0), Nt(ct(T), "dragEvent", void 0), Nt(ct(T), "relatedTarget", void 0), Nt(ct(T), "draggable", void 0), Nt(ct(T), "timeStamp", void 0), Nt(ct(T), "propagationStopped", false), Nt(ct(T), "immediatePropagationStopped", false);
        var O = x === "dragleave" ? h.prev : h.cur, N = O.element, L = O.dropzone;
        return T.type = x, T.target = N, T.currentTarget = N, T.dropzone = L, T.dragEvent = g, T.relatedTarget = g.target, T.draggable = g.interactable, T.timeStamp = g.timeStamp, T;
      }
      return u(m, "a"), o = m, (a = [{ key: "reject", value: function() {
        var h = this, g = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && g.cur.dropzone === this.dropzone && g.cur.element === this.target)
          if (g.prev.dropzone = this.dropzone, g.prev.element = this.target, g.rejected = true, g.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var x = g.activeDrops, T = xe.findIndex(x, function(N) {
              var L = N.dropzone, D = N.element;
              return L === h.dropzone && D === h.target;
            });
            g.activeDrops.splice(T, 1);
            var O = new m(g, this.dragEvent, "dropdeactivate");
            O.dropzone = this.dropzone, O.target = this.target, this.dropzone.fire(O);
          } else
            this.dropzone.fire(new m(g, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && vr(o.prototype, a), m;
    }(Rt.BaseEvent);
    Pt.DropEvent = Wn;
    var Dr = {};
    function dn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, f = s.element;
        o.dropzone = p, o.target = f, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    u(dn, "ct");
    function yi(n, o) {
      for (var a = function(f, m) {
        for (var h = f.interactables, g = [], x = 0; x < h.list.length; x++) {
          var T = h.list[x];
          if (T.options.drop.enabled) {
            var O = T.options.drop.accept;
            if (!(c.default.element(O) && O !== m || c.default.string(O) && !R.matchesSelector(m, O) || c.default.func(O) && !O({ dropzone: T, draggableElement: m })))
              for (var N = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], L = 0; L < N.length; L++) {
                var D = N[L];
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
    u(yi, "ft");
    function To(n, o, a) {
      for (var s = n.dropState, p = n.interactable, f = n.element, m = [], h = 0; h < s.activeDrops.length; h++) {
        var g = s.activeDrops[h], x = g.dropzone, T = g.element, O = g.rect;
        m.push(x.dropCheck(o, a, p, f, T, O) ? T : null);
      }
      var N = R.indexOfDeepestElement(m);
      return s.activeDrops[N] || null;
    }
    u(To, "dt");
    function xi(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new Pt.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new Pt.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new Pt.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new Pt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new Pt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new Pt.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    u(xi, "pt");
    function wi(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, f = a.prev;
      o.leave && f.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && dn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    u(wi, "vt");
    function Co(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f = a.dropState;
        o.dynamicDrop && (f.activeDrops = yi(o, a.element));
        var m = s, h = To(a, m, p);
        f.rejected = f.rejected && !!h && h.dropzone === f.cur.dropzone && h.element === f.cur.element, f.cur.dropzone = h && h.dropzone, f.cur.element = h && h.element, f.events = xi(a, 0, m);
      }
    }
    u(Co, "ht"), Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(w.default), s.prototype.dropzone = function(f) {
        return function(m, h) {
          if (c.default.object(h)) {
            if (m.options.drop.enabled = h.enabled !== false, h.listeners) {
              var g = (0, fe.default)(h.listeners), x = Object.keys(g).reduce(function(T, O) {
                return T[/^(enter|leave)/.test(O) ? "drag".concat(O) : /^(activate|deactivate|move)/.test(O) ? "drop".concat(O) : O] = g[O], T;
              }, {});
              m.off(m.options.drop.listeners), m.on(x), m.options.drop.listeners = x;
            }
            return c.default.func(h.ondrop) && m.on("drop", h.ondrop), c.default.func(h.ondropactivate) && m.on("dropactivate", h.ondropactivate), c.default.func(h.ondropdeactivate) && m.on("dropdeactivate", h.ondropdeactivate), c.default.func(h.ondragenter) && m.on("dragenter", h.ondragenter), c.default.func(h.ondragleave) && m.on("dragleave", h.ondragleave), c.default.func(h.ondropmove) && m.on("dropmove", h.ondropmove), /^(pointer|center)$/.test(h.overlap) ? m.options.drop.overlap = h.overlap : c.default.number(h.overlap) && (m.options.drop.overlap = Math.max(Math.min(1, h.overlap), 0)), "accept" in h && (m.options.drop.accept = h.accept), "checker" in h && (m.options.drop.checker = h.checker), m;
          }
          return c.default.bool(h) ? (m.options.drop.enabled = h, m) : m.options.drop;
        }(this, f);
      }, s.prototype.dropCheck = function(f, m, h, g, x, T) {
        return function(O, N, L, D, $, J, F) {
          var re = false;
          if (!(F = F || O.getRect(J)))
            return !!O.options.drop.checker && O.options.drop.checker(N, L, re, O, J, D, $);
          var le = O.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, Le.default)(D, $, "drag"), Ee = K.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            re = je && be;
          }
          var Ie = D.getRect($);
          if (Ie && le === "center") {
            var Xt = Ie.left + Ie.width / 2, Gr = Ie.top + Ie.height / 2;
            re = Xt >= F.left && Xt <= F.right && Gr >= F.top && Gr <= F.bottom;
          }
          return Ie && c.default.number(le) && (re = Math.max(0, Math.min(F.right, Ie.right) - Math.max(F.left, Ie.left)) * Math.max(0, Math.min(F.bottom, Ie.bottom) - Math.max(F.top, Ie.top)) / (Ie.width * Ie.height) >= le), O.options.drop.checker && (re = O.options.drop.checker(N, L, re, O, J, D, $)), re;
        }(this, f, m, h, g, x, T);
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
        p.activeDrops = null, p.events = null, p.activeDrops = yi(o, a.element), p.events = xi(a, 0, s), p.events.activate && (dn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Co, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (wi(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Co(n, o), wi(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: yi, getDrop: To, getDropEvents: xi, fireDropEvents: wi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Q = j;
    Dr.default = Q;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(x) {
          return x.pointer;
        }), f = s === "start", m = s === "end", h = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], f)
          a.distance = K.touchDistance(p, h), a.box = K.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(p, h), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (m) {
          var g = o.prevEvent;
          a.distance = g.distance, a.box = g.box, a.scale = g.scale, a.ds = 0, a.angle = g.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(p, h), a.box = K.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(p, h), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
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
    function Vr(n, o, a, s, p, f, m) {
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
      return !!c.default.element(s) && (c.default.element(o) ? o === s : R.matchesUpTo(s, o, p));
    }
    u(Vr, "Pt");
    function Ei(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    u(Ei, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
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
          s._rects = { start: (0, U.default)({}, f), corrected: (0, U.default)({}, f), previous: (0, U.default)({}, f), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), Ei(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.interactable.options.resize.invert, m = f === "reposition" || f === "negate", h = s.rect, g = s._rects, x = g.start, T = g.corrected, O = g.delta, N = g.previous;
          if ((0, U.default)(N, T), m) {
            if ((0, U.default)(T, h), f === "reposition") {
              if (T.top > T.bottom) {
                var L = T.top;
                T.top = T.bottom, T.bottom = L;
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
      })(n), Ei(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, f = n.buttons;
      if (p) {
        var m = (0, U.default)({}, o.coords.cur.page), h = a.options.resize;
        if (h && h.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (f & h.mouseButtons) != 0)) {
          if (c.default.object(h.edges)) {
            var g = { left: false, right: false, top: false, bottom: false };
            for (var x in g)
              g[x] = Vr(x, h.edges[x], m, o._latestPointer.eventTarget, s, p, h.margin || ft.defaultMargin);
            g.left = g.left && !g.right, g.top = g.top && !g.bottom, (g.left || g.right || g.top || g.bottom) && (n.action = { name: "resize", edges: g });
          } else {
            var T = h.axis !== "y" && m.x > p.right - ft.defaultMargin, O = h.axis !== "x" && m.y > p.bottom - ft.defaultMargin;
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
        for (var m = "", h = ["top", "bottom", "left", "right"], g = 0; g < h.length; g++) {
          var x = h[g];
          o[x] && (m += x);
        }
        f = p[m];
      }
      return f;
    }, defaultMargin: null }, Si = ft;
    dt.default = Si;
    var kr = {};
    Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
    var Xr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(dt.default), n.usePlugin(w.default), n.usePlugin(Dr.default);
    } };
    kr.default = Xr;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0;
    var Lt, Ut, Pl = 0, sd = { request: function(n) {
      return Lt(n);
    }, cancel: function(n) {
      return Ut(n);
    }, init: function(n) {
      if (Lt = n.requestAnimationFrame, Ut = n.cancelAnimationFrame, !Lt)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Lt = n["".concat(s, "RequestAnimationFrame")], Ut = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Lt = Lt && Lt.bind(n), Ut = Ut && Ut.bind(n), Lt || (Lt = u(function(p) {
        var f = Date.now(), m = Math.max(0, 16 - (f - Pl)), h = n.setTimeout(function() {
          p(f + m);
        }, m);
        return Pl = f + m, h;
      }, "kt"), Ut = u(function(p) {
        return clearTimeout(p);
      }, "It"));
    } };
    Gt.default = sd;
    var Yr = {};
    Object.defineProperty(Yr, "__esModule", { value: true }), Yr.getContainer = Oo, Yr.getScroll = Ti, Yr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Yr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var f = Oo(p.container, a.interactable, s), m = Ti(f);
      o();
      var h = Ti(f);
      return { x: h.x - m.x, y: h.y - m.y };
    }, Yr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, Gt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = Gt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), Gt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, f = Oo(p.container, o, a), m = ue.now(), h = (m - ue.prevTime) / 1e3, g = p.speed * h;
      if (g >= 1) {
        var x = { x: ue.x * g, y: ue.y * g };
        if (x.x || x.y) {
          var T = Ti(f);
          c.default.window(f) ? f.scrollBy(x.x, x.y) : f && (f.scrollLeft += x.x, f.scrollTop += x.y);
          var O = Ti(f), N = { x: O.x - T.x, y: O.y - T.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: f });
        }
        ue.prevTime = m;
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
          var s, p, f, m, h = o.interactable, g = o.element, x = o.prepared.name, T = h.options[x].autoScroll, O = Oo(T.container, h, g);
          if (c.default.window(O))
            m = a.clientX < ue.margin, s = a.clientY < ue.margin, p = a.clientX > O.innerWidth - ue.margin, f = a.clientY > O.innerHeight - ue.margin;
          else {
            var N = R.getElementClientRect(O);
            m = a.clientX < N.left + ue.margin, s = a.clientY < N.top + ue.margin, p = a.clientX > N.right - ue.margin, f = a.clientY > N.bottom - ue.margin;
          }
          ue.x = p ? 1 : m ? -1 : 0, ue.y = f ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = T.margin, ue.speed = T.speed, ue.start(o));
        }
    } };
    function Oo(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    u(Oo, "Ct");
    function Ti(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    u(Ti, "Ft");
    var ld = { id: "auto-scroll", install: function(n) {
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
    Yr.default = ld;
    var qt = {};
    Object.defineProperty(qt, "__esModule", { value: true }), qt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, qt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, qt.sign = void 0, qt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var _o = {};
    function ud(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    u(ud, "Wt");
    function cd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    u(cd, "Lt"), Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var pd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, f) {
        var m = function(h, g, x, T, O) {
          var N = h.getRect(T), L = { action: null, interactable: h, interaction: x, element: T, rect: N, buttons: g.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[g.button] };
          return O.fire("auto-start:check", L), L.action;
        }(this, s, p, f, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, m, this, f, p) : m;
      }, o.prototype.ignoreFrom = (0, qt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, qt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = cd, o.prototype.styleCursor = ud;
    } };
    _o.default = pd;
    var Un = {};
    function Il(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Mo(o, a, n, p) ? n : null;
    }
    u(Il, "Nt");
    function dd(n, o, a, s, p, f, m) {
      for (var h = 0, g = s.length; h < g; h++) {
        var x = s[h], T = p[h], O = x.getAction(o, a, n, T);
        if (O) {
          var N = Il(O, x, T, f, m);
          if (N)
            return { action: N, interactable: x, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    u(dd, "qt");
    function zl(n, o, a, s, p) {
      var f = [], m = [], h = s;
      function g(T) {
        f.push(T), m.push(h);
      }
      for (u(g, "u"); c.default.element(h); ) {
        f = [], m = [], p.interactables.forEachMatch(h, g);
        var x = dd(n, o, a, f, m, s, p);
        if (x.action && !x.interactable.options[x.action.name].manualStart)
          return x;
        h = R.parentNode(h);
      }
      return { action: null, interactable: null, element: null };
    }
    u(zl, "$t");
    function Dl(n, o, a) {
      var s = o.action, p = o.interactable, f = o.element;
      s = s || { name: null }, n.interactable = p, n.element = f, (0, qt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(f) : null, Rl(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    u(Dl, "Gt");
    function Mo(n, o, a, s) {
      var p = n.options, f = p[a.name].max, m = p[a.name].maxPerElement, h = s.autoStart.maxInteractions, g = 0, x = 0, T = 0;
      if (!(f && m && h))
        return false;
      for (var O = 0; O < s.interactions.list.length; O++) {
        var N = s.interactions.list[O], L = N.prepared.name;
        if (N.interacting() && (++g >= h || N.interactable === n && ((x += L === a.name ? 1 : 0) >= f || N.element === o && (T++, L === a.name && T >= m))))
          return false;
      }
      return h > 0;
    }
    u(Mo, "Ht");
    function kl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    u(kl, "Kt");
    function Za(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    u(Za, "Zt");
    function Rl(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f = "";
        if (p.name) {
          var m = a.options[p.name].cursorChecker;
          f = c.default.func(m) ? m(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        Za(n.element, f || "", o);
      } else
        o.autoStart.cursorElement && Za(o.autoStart.cursorElement, "", o);
    }
    u(Rl, "Jt"), Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var fd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(_o.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return kl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Mo, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      a.interacting() || Dl(a, zl(a, s, p, f, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || Dl(p, zl(p, f, m, h, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f = p.interactable, m = p.prepared.name;
          m && f && (f.options[m].manualStart || !Mo(f, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, f, p.element), Rl(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && Za(a.element, "", o);
    } }, maxInteractions: kl, withinInteractionLimit: Mo, validateAction: Il };
    Un.default = fd;
    var Ao = {};
    Object.defineProperty(Ao, "__esModule", { value: true }), Ao.default = void 0;
    var hd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, f = n.dy;
      if (a.prepared.name === "drag") {
        var m = Math.abs(p), h = Math.abs(f), g = a.interactable.options.drag, x = g.startAxis, T = m > h ? "x" : m < h ? "y" : "xy";
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
                }(T, D) && Un.default.validateAction(J, D, O, s, o))
                  return D;
              }
            }
          }; c.default.element(O); ) {
            var L = o.interactables.forEachMatch(O, N);
            if (L) {
              a.prepared.name = "drag", a.interactable = L, a.element = O;
              break;
            }
            O = (0, R.parentNode)(O);
          }
        }
      }
    } } };
    Ao.default = hd;
    var Po = {};
    function Ja(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    u(Ja, "re"), Object.defineProperty(Po, "__esModule", { value: true }), Po.default = void 0;
    var vd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Un.default), o.perAction.hold = 0, o.perAction.delay = 0;
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
    Po.default = vd;
    var Io = {};
    Object.defineProperty(Io, "__esModule", { value: true }), Io.default = void 0;
    var md = { id: "auto-start", install: function(n) {
      n.usePlugin(Un.default), n.usePlugin(Po.default), n.usePlugin(Ao.default);
    } };
    Io.default = md;
    var Vn = {};
    function gd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    u(gd, "le");
    function bd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    u(bd, "ue");
    function Nl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = gd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, f) {
          var m = s.options.preventDefault;
          if (m !== "never")
            if (m !== "always") {
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
    u(Nl, "ce"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.install = Nl, Vn.default = void 0;
    var yd = { id: "core/interactablePreventDefault", install: Nl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = bd, n;
    }, {}) };
    Vn.default = yd;
    var Ka = {};
    Object.defineProperty(Ka, "__esModule", { value: true }), Ka.default = void 0, Ka.default = {};
    var Ci, Qa = {};
    Object.defineProperty(Qa, "__esModule", { value: true }), Qa.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ci || (Ci = {})), Ci.touchAction, Ci.boxSizing, Ci.noListeners;
    var xd = { id: "dev-tools", install: function() {
    } };
    Qa.default = xd;
    var fn = {};
    Object.defineProperty(fn, "__esModule", { value: true }), fn.default = u(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = xe.from(p) : a[s] = p;
      }
      return a;
    }, "t");
    var hn = {};
    function Gl(n, o) {
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
            return Ll(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Ll(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Gl, "me");
    function Ll(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Ll, "be");
    function wd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(wd, "xe");
    function vn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(vn, "we"), Object.defineProperty(hn, "__esModule", { value: true }), hn.getRectOffset = ql, hn.default = void 0;
    var Ed = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), vn(this, "states", []), vn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), vn(this, "startDelta", void 0), vn(this, "result", void 0), vn(this, "endResult", void 0), vn(this, "edges", void 0), vn(this, "interaction", void 0), this.interaction = s, this.result = zo();
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var f = s.phase, m = this.interaction, h = function(x) {
          var T = x.interactable.options[x.prepared.name], O = T.modifiers;
          return O && O.length ? O : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var L = T[N];
            return L && L.enabled && { options: L, methods: L._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(m);
        this.prepareStates(h), this.edges = (0, U.default)({}, m.edges), this.startOffset = ql(m.rect, p), this.startDelta = { x: 0, y: 0 };
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
        var p = s.phase, f = s.preEnd, m = s.skipModifiers, h = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, h);
        for (var g = m ? this.states.slice(m) : this.states, x = zo(s.coords, s.rect), T = 0; T < g.length; T++) {
          var O, N = g[T], L = N.options, D = (0, U.default)({}, s.coords), $ = null;
          (O = N.methods) != null && O.set && this.shouldDo(L, f, p) && (s.state = N, $ = N.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - D.x, y: s.coords.y - D.y })), x.eventProps.push($);
        }
        x.delta.x = s.coords.x - s.pageCoords.x, x.delta.y = s.coords.y - s.pageCoords.y, x.rectDelta.left = s.rect.left - h.left, x.rectDelta.right = s.rect.right - h.right, x.rectDelta.top = s.rect.top - h.top, x.rectDelta.bottom = s.rect.bottom - h.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var re = x.rect.left !== F.left || x.rect.right !== F.right || x.rect.top !== F.top || x.rect.bottom !== F.bottom;
          x.changed = re || J.x !== x.coords.x || J.y !== x.coords.y;
        }
        return x;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, f = s.phase, m = p.coords.cur, h = p.coords.start, g = this.result, x = this.startDelta, T = g.delta;
        f === "start" && (0, U.default)(this.startDelta, g.delta);
        for (var O = 0; O < [[h, x], [m, T]].length; O++) {
          var N = Gl([[h, x], [m, T]][O], 2), L = N[0], D = N[1];
          L.page.x += D.x, L.page.y += D.y, L.client.x += D.x, L.client.y += D.y;
        }
        var $ = this.result.rectDelta, J = s.rect || p.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
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
          for (var g = h.startDelta, x = h.result, T = x.delta, O = x.rectDelta, N = [[f.start, g], [f.cur, T]], L = 0; L < N.length; L++) {
            var D = Gl(N[L], 2), $ = D[0], J = D[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          m.left -= O.left, m.right -= O.right, m.top -= O.top, m.bottom -= O.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, f, m) {
        return !(!s || s.enabled === false || m && !s.endOnly || s.endOnly && !p || f === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, fn.default)(p);
        }), this.result = zo((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && wd(o.prototype, a), n;
    }();
    function zo(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    u(zo, "Pe");
    function ql(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    u(ql, "Oe"), hn.default = Ed;
    var ht = {};
    function Do(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    u(Do, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(n, o) {
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
    }, ht.addEventModifiers = Do, ht.default = void 0;
    var Sd = { id: "modifiers/base", before: ["actions"], install: function(n) {
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
    }, "interactions:action-start": Do, "interactions:action-move": Do, "interactions:action-end": Do, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ht.default = Sd;
    var Oi = {};
    Object.defineProperty(Oi, "__esModule", { value: true }), Oi.defaults = void 0, Oi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var _i = {};
    function jl(n) {
      return (jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(jl, "ke");
    function Td(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Td, "Ie");
    function Bl(n, o) {
      return (Bl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(Bl, "De");
    function Cd(n, o) {
      return !o || jl(o) !== "object" && typeof o != "function" ? Ce(n) : o;
    }
    u(Cd, "Ae");
    function Ce(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(Ce, "Re");
    function es(n) {
      return (es = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(es, "ze");
    function Pe(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Pe, "Ce"), Object.defineProperty(_i, "__esModule", { value: true }), _i.InteractEvent = void 0;
    var Hl = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && Bl(h, g);
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
        var h, g = es(s);
        if (p) {
          var x = es(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return Cd(this, h);
      });
      function m(h, g, x, T, O, N, L) {
        var D;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, m), Pe(Ce(D = f.call(this, h)), "target", void 0), Pe(Ce(D), "currentTarget", void 0), Pe(Ce(D), "relatedTarget", null), Pe(Ce(D), "screenX", void 0), Pe(Ce(D), "screenY", void 0), Pe(Ce(D), "button", void 0), Pe(Ce(D), "buttons", void 0), Pe(Ce(D), "ctrlKey", void 0), Pe(Ce(D), "shiftKey", void 0), Pe(Ce(D), "altKey", void 0), Pe(Ce(D), "metaKey", void 0), Pe(Ce(D), "page", void 0), Pe(Ce(D), "client", void 0), Pe(Ce(D), "delta", void 0), Pe(Ce(D), "rect", void 0), Pe(Ce(D), "x0", void 0), Pe(Ce(D), "y0", void 0), Pe(Ce(D), "t0", void 0), Pe(Ce(D), "dt", void 0), Pe(Ce(D), "duration", void 0), Pe(Ce(D), "clientX0", void 0), Pe(Ce(D), "clientY0", void 0), Pe(Ce(D), "velocity", void 0), Pe(Ce(D), "speed", void 0), Pe(Ce(D), "swipe", void 0), Pe(Ce(D), "timeStamp", void 0), Pe(Ce(D), "axes", void 0), Pe(Ce(D), "preEnd", void 0), O = O || h.element;
        var $ = h.interactable, J = ($ && $.options || Oi.defaults).deltaSource, F = (0, Le.default)($, O, x), re = T === "start", le = T === "end", pe = re ? Ce(D) : h.prevEvent, Ee = re ? h.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: h.coords.cur.timeStamp } : h.coords.cur;
        return D.page = (0, U.default)({}, Ee.page), D.client = (0, U.default)({}, Ee.client), D.rect = (0, U.default)({}, h.rect), D.timeStamp = Ee.timeStamp, le || (D.page.x -= F.x, D.page.y -= F.y, D.client.x -= F.x, D.client.y -= F.y), D.ctrlKey = g.ctrlKey, D.altKey = g.altKey, D.shiftKey = g.shiftKey, D.metaKey = g.metaKey, D.button = g.button, D.buttons = g.buttons, D.target = O, D.currentTarget = O, D.preEnd = N, D.type = L || x + (T || ""), D.interactable = $, D.t0 = re ? h.pointers[h.pointers.length - 1].downTime : pe.t0, D.x0 = h.coords.start.page.x - F.x, D.y0 = h.coords.start.page.y - F.y, D.clientX0 = h.coords.start.client.x - F.x, D.clientY0 = h.coords.start.client.y - F.y, D.delta = re || le ? { x: 0, y: 0 } : { x: D[J].x - pe[J].x, y: D[J].y - pe[J].y }, D.dt = h.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, U.default)({}, h.coords.velocity[J]), D.speed = (0, Qe.default)(D.velocity.x, D.velocity.y), D.swipe = le || T === "inertiastart" ? D.getSwipe() : null, D;
      }
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
      } }]) && Td(o.prototype, a), m;
    }(Rt.BaseEvent);
    _i.InteractEvent = Hl, Object.defineProperties(Hl.prototype, { pageX: { get: function() {
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
    var Mi = {};
    function Ai(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ai, "Ye"), Object.defineProperty(Mi, "__esModule", { value: true }), Mi.PointerInfo = void 0, Mi.PointerInfo = u(function n(o, a, s, p, f) {
      (function(m, h) {
        if (!(m instanceof h))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ai(this, "id", void 0), Ai(this, "pointer", void 0), Ai(this, "event", void 0), Ai(this, "downTime", void 0), Ai(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = f;
    }, "t");
    var ko, Ro, It = {};
    function Od(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Od, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(He, "Ve"), Object.defineProperty(It, "__esModule", { value: true }), Object.defineProperty(It, "PointerInfo", { enumerable: true, get: function() {
      return Mi.PointerInfo;
    } }), It.default = It.Interaction = It._ProxyMethods = It._ProxyValues = void 0, It._ProxyValues = ko, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(ko || (It._ProxyValues = ko = {})), It._ProxyMethods = Ro, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Ro || (It._ProxyMethods = Ro = {}));
    var _d = 0, $l = function() {
      function n(s) {
        var p = this, f = s.pointerType, m = s.scopeFire;
        (function(N, L) {
          if (!(N instanceof L))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, qt.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), He(this, "_id", _d++), this._scopeFire = m, this.pointerType = f;
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
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, f) {
        var m = this.updatePointer(s, p, f, true), h = this.pointers[m];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: f, pointerIndex: m, pointerInfo: h, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, f) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, qt.copyAction)(this.prepared, s), this.interactable = p, this.element = f, this.rect = p.getRect(f), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, f) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, f, false);
        var m, h, g = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (m = this.coords.cur.client.x - this.coords.start.client.x, h = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Qe.default)(m, h) > this.pointerMoveTolerance);
        var x = this.getPointerIndex(s), T = { pointer: s, pointerIndex: x, pointerInfo: this.pointers[x], event: p, type: "move", eventTarget: f, dx: m, dy: h, duplicate: g, interaction: this };
        g || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), g || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
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
        var p = K.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : xe.findIndex(this.pointers, function(f) {
          return f.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, f, m) {
        var h = K.getPointerId(s), g = this.getPointerIndex(s), x = this.pointers[g];
        return m = m !== false && (m || /(down|start)$/i.test(p.type)), x ? x.pointer = s : (x = new Mi.PointerInfo(h, s, p, null, null), g = this.pointers.length, this.pointers.push(x)), K.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), m && (this.pointerIsDown = true, x.downTime = this.coords.cur.timeStamp, x.downTarget = f, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, f), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: f, down: m, pointerInfo: x, pointerIndex: g, interaction: this }), g;
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
        return new _i.InteractEvent(this, s, this.prepared.name, p, this.element, f, m);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, f = s.phase, m = s.preEnd, h = s.type, g = this.rect;
        if (g && f === "move" && (ce.addEdges(this.edges, g, this.coords.delta[this.interactable.options.deltaSource]), g.width = g.right - g.left, g.height = g.bottom - g.top), this._scopeFire("interactions:before-action-".concat(f), s) === false)
          return false;
        var x = s.iEvent = this._createPreparedEvent(p, f, m, h);
        return this._scopeFire("interactions:action-".concat(f), s), f === "start" && (this.prevEvent = x), this._fireEvent(x), this._scopeFire("interactions:after-action-".concat(f), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Od(o.prototype, a), n;
    }();
    It.Interaction = $l;
    var Md = $l;
    It.default = Md;
    var mn = {};
    function Fl(n) {
      n.pointerIsDown && (rs(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    u(Fl, "He");
    function Wl(n) {
      ts(n.interaction);
    }
    u(Wl, "Ke");
    function ts(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return rs(n.coords.cur, o), rs(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    u(ts, "Ze");
    function Ad(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    u(Ad, "Je");
    function rs(n, o) {
      var a = n.page, s = n.client, p = o.x, f = o.y;
      a.x += p, a.y += f, s.x += p, s.y += f;
    }
    u(rs, "Qe"), Object.defineProperty(mn, "__esModule", { value: true }), mn.addTotal = Fl, mn.applyPending = ts, mn.default = void 0, It._ProxyMethods.offsetBy = "";
    var Pd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Ad;
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
    mn.default = Pd;
    var Xn = {};
    function Id(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Id, "nn");
    function ot(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(ot, "rn"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = Xn.InertiaState = void 0;
    var Ul = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ot(this, "active", false), ot(this, "isModified", false), ot(this, "smoothEnd", false), ot(this, "allowResume", false), ot(this, "modification", void 0), ot(this, "modifierCount", 0), ot(this, "modifierArg", void 0), ot(this, "startCoords", void 0), ot(this, "t0", 0), ot(this, "v0", 0), ot(this, "te", 0), ot(this, "targetOffset", void 0), ot(this, "modifiedOffset", void 0), ot(this, "currentOffset", void 0), ot(this, "lambda_v0", 0), ot(this, "one_ve_v0", 0), ot(this, "timeout", void 0), ot(this, "interaction", void 0), this.interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, f = No(p);
        if (!f || !f.enabled)
          return false;
        var m = p.coords.velocity.client, h = (0, Qe.default)(m.x, m.y), g = this.modification || (this.modification = new hn.default(p));
        if (g.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = f.allowResume, this.v0 = h, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = g.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && h > f.minSpeed && h > f.endSpeed)
          this.startInertia();
        else {
          if (g.result = g.setAll(this.modifierArg), !g.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, f = No(this.interaction), m = f.resistance, h = -Math.log(f.endSpeed / this.v0) / m;
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
        this.timeout = Gt.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, f, m, h, g = this, x = this.interaction, T = No(x).resistance, O = (x._now() - this.t0) / 1e3;
        if (O < this.te) {
          var N, L = 1 - (Math.exp(-T * O) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, f = this.modifiedOffset.x, m = this.modifiedOffset.y, N = { x: Vl(h = L, 0, s, f), y: Vl(h, 0, p, m) }) : N = { x: this.targetOffset.x * L, y: this.targetOffset.y * L };
          var D = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, x.offsetBy(D), x.move(), this.onNextFrame(function() {
            return g.inertiaTick();
          });
        } else
          x.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, f = p._now() - this.t0, m = No(p).smoothEndDuration;
        if (f < m) {
          var h = { x: Xl(f, 0, this.targetOffset.x, m), y: Xl(f, 0, this.targetOffset.y, m) }, g = { x: h.x - this.currentOffset.x, y: h.y - this.currentOffset.y };
          this.currentOffset.x += g.x, this.currentOffset.y += g.y, p.offsetBy(g), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, f = s.event, m = s.eventTarget, h = this.interaction;
        h.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), h.updatePointer(p, f, m, true), h._doPhase({ interaction: h, event: f, phase: "resume" }), (0, K.copyCoords)(h.coords.prev, h.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Gt.default.cancel(this.timeout);
      } }]) && Id(o.prototype, a), n;
    }();
    function No(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    u(No, "an");
    function Vl(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    u(Vl, "sn");
    function Xl(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    u(Xl, "ln"), Xn.InertiaState = Ul;
    var zd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(mn.default), n.usePlugin(ht.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
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
    Xn.default = zd;
    var Pi = {};
    function Dd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Dd, "fn");
    function Ii(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ii, "dn");
    function Yl(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    u(Yl, "pn"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.Eventable = void 0;
    var kd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ii(this, "options", void 0), Ii(this, "types", {}), Ii(this, "propagationStopped", false), Ii(this, "immediatePropagationStopped", false), Ii(this, "global", void 0), this.options = (0, U.default)({}, s || {});
      }
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
          var m = this.types[s];
          if (m && m.length)
            for (var h = 0; h < f[s].length; h++) {
              var g = f[s][h], x = m.indexOf(g);
              x !== -1 && m.splice(x, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Dd(o.prototype, a), n;
    }();
    Pi.Eventable = kd;
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), zi.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var ns = {};
    Object.defineProperty(ns, "__esModule", { value: true }), ns.createInteractStatic = function(n) {
      var o = u(function a(s, p) {
        var f = n.interactables.get(s, p);
        return f || ((f = n.interactables.new(s, p)).events.global = a.globalEvents), f;
      }, "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, qt.warnOnce)(function(a, s, p) {
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
        return (0, zi.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, qt.warnOnce)(function(a, s, p) {
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
        return (0, zi.default)(a, this.scope.actions) ? a in this.globalEvents && (g = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(g, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
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
    var Go = {};
    function Rd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Rd, "mn");
    function Rr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Rr, "bn"), Object.defineProperty(Go, "__esModule", { value: true }), Go.Interactable = void 0;
    var Nd = function() {
      function n(s, p, f, m) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Rr(this, "options", void 0), Rr(this, "_actions", void 0), Rr(this, "target", void 0), Rr(this, "events", new Pi.Eventable()), Rr(this, "_context", void 0), Rr(this, "_win", void 0), Rr(this, "_doc", void 0), Rr(this, "_scopeEvents", void 0), Rr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || f, this._win = (0, e.getWindow)((0, R.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = m, this.set(p);
      }
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
          h === "listeners" && this.updatePerActionListeners(s, g.listeners, x), c.default.array(x) ? g[h] = xe.from(x) : c.default.plainObject(x) ? (g[h] = (0, U.default)(g[h] || {}, (0, fn.default)(x)), c.default.object(f.perAction[h]) && "enabled" in f.perAction[h] && (g[h].enabled = x.enabled !== false)) : c.default.bool(x) && c.default.object(f.perAction[h]) ? g[h].enabled = x : g[h] = x;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, R.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(f) {
          var m = (0, U.default)({}, p._rectChecker(f));
          return "width" in m || (m.width = m.right - m.left, m.height = m.bottom - m.top), m;
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
      } }, { key: "_onOff", value: function(s, p, f, m) {
        c.default.object(p) && !c.default.array(p) && (m = f, f = null);
        var h = s === "on" ? "add" : "remove", g = (0, fe.default)(p, f);
        for (var x in g) {
          x === "wheel" && (x = q.default.wheelEvent);
          for (var T = 0; T < g[x].length; T++) {
            var O = g[x][T];
            (0, zi.default)(x, this._actions) ? this.events[s](x, O) : c.default.string(this.target) ? this._scopeEvents["".concat(h, "Delegate")](this.target, this._context, x, O, m) : this._scopeEvents[h](this.target, x, O, m);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, f) {
        return this._onOff("on", s, p, f);
      } }, { key: "off", value: function(s, p, f) {
        return this._onOff("off", s, p, f);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var f in c.default.object(s) || (s = {}), this.options = (0, fn.default)(p.base), this._actions.methodDict) {
          var m = f, h = this._actions.methodDict[m];
          this.options[m] = {}, this.setPerAction(m, (0, U.default)((0, U.default)({}, p.perAction), p.actions[m])), this[h](s[m]);
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
      } }]) && Rd(o.prototype, a), n;
    }();
    Go.Interactable = Nd;
    var Lo = {};
    function Gd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Gd, "_n");
    function is(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(is, "Pn"), Object.defineProperty(Lo, "__esModule", { value: true }), Lo.InteractableSet = void 0;
    var Ld = function() {
      function n(s) {
        var p = this;
        (function(f, m) {
          if (!(f instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), is(this, "list", []), is(this, "selectorMap", {}), is(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f) {
          var m = f.interactable, h = m.target, g = m._context, x = c.default.string(h) ? p.selectorMap[h] : h[p.scope.id], T = xe.findIndex(x, function(O) {
            return O.context === g;
          });
          x[T] && (x[T].context = null, x[T].interactable = null), x.splice(T, 1);
        } });
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, U.default)(p || {}, { actions: this.scope.actions });
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
          if ((c.default.string(m.target) ? c.default.element(s) && R.matchesSelector(s, m.target) : s === m.target) && m.inContext(s) && (h = p(m)), h !== void 0)
            return h;
        }
      } }]) && Gd(o.prototype, a), n;
    }();
    Lo.InteractableSet = Ld;
    var qo = {};
    function qd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(qd, "En");
    function os(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(os, "Tn");
    function as(n, o) {
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
            return Zl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Zl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(as, "Mn");
    function Zl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Zl, "jn"), Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0;
    var jd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), os(this, "currentTarget", void 0), os(this, "originalEvent", void 0), os(this, "type", void 0), this.originalEvent = s, (0, kt.default)(this, s);
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && qd(o.prototype, a), n;
    }();
    function Di(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    u(Di, "In");
    var Bd = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], f = { add: m, remove: h, addDelegate: function(T, O, N, L, D) {
        var $ = Di(D);
        if (!s[N]) {
          s[N] = [];
          for (var J = 0; J < p.length; J++) {
            var F = p[J];
            m(F, N, g), m(F, N, x, true);
          }
        }
        var re = s[N], le = xe.find(re, function(pe) {
          return pe.selector === T && pe.context === O;
        });
        le || (le = { selector: T, context: O, listeners: [] }, re.push(le)), le.listeners.push([L, $]);
      }, removeDelegate: function(T, O, N, L, D) {
        var $, J = Di(D), F = s[N], re = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === T && le.context === O) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = as(pe[Ee], 2), be = je[0], Ie = je[1], Xt = Ie.capture, Gr = Ie.passive;
                if (be === L && Xt === J.capture && Gr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), h(O, N, g), h(O, N, x, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: g, delegateUseCapture: x, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function m(T, O, N, L) {
        var D = Di(L), $ = xe.find(a, function(J) {
          return J.eventTarget === T;
        });
        $ || ($ = { eventTarget: T, events: {} }, a.push($)), $.events[O] || ($.events[O] = []), T.addEventListener && !xe.contains($.events[O], N) && (T.addEventListener(O, N, f.supportsOptions ? D : D.capture), $.events[O].push(N));
      }
      u(m, "s");
      function h(T, O, N, L) {
        var D = Di(L), $ = xe.findIndex(a, function(Ee) {
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
      u(h, "l");
      function g(T, O) {
        for (var N = Di(O), L = new jd(T), D = s[T.type], $ = as(K.getEventTargets(T), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < D.length; F++) {
            var re = D[F], le = re.selector, pe = re.context;
            if (R.matchesSelector(J, le) && R.nodeContains(pe, $) && R.nodeContains(pe, J)) {
              var Ee = re.listeners;
              L.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = as(Ee[je], 2), Ie = be[0], Xt = be[1], Gr = Xt.capture, ys = Xt.passive;
                Gr === N.capture && ys === N.passive && Ie(L);
              }
            }
          }
          J = R.parentNode(J);
        }
      }
      u(g, "u");
      function x(T) {
        return g(T, true);
      }
      return u(x, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return f.supportsOptions = true;
      }, get passive() {
        return f.supportsPassive = true;
      } }), n.events = f, f;
    } };
    qo.default = Bd;
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
        var m = p.interactions.list[f], h = s;
        if (m.simulation && m.simulation.allowResume && m.pointerType === o)
          for (; h; ) {
            if (h === m.element)
              return m;
            h = R.parentNode(h);
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
    u(Jl, "zn");
    var Hd = Bo;
    jo.default = Hd;
    var Ho = {};
    function Kl(n) {
      return (Kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Kl, "Xn");
    function Ql(n, o) {
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
            return eu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? eu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Ql, "Yn");
    function eu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(eu, "Bn");
    function $d(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u($d, "Wn");
    function Fd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Fd, "Ln");
    function tu(n, o) {
      return (tu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(tu, "Un");
    function Wd(n, o) {
      return !o || Kl(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    u(Wd, "Vn");
    function ss(n) {
      return (ss = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(ss, "Nn"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var ls = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function ru(n, o) {
      return function(a) {
        var s = o.interactions.list, p = K.getPointerType(a), f = Ql(K.getEventTargets(a), 2), m = f[0], h = f[1], g = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var x = 0; x < a.changedTouches.length; x++) {
            var T = a.changedTouches[x], O = { pointer: T, pointerId: K.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: m, curEventTarget: h, scope: o }, N = nu(O);
            g.push([O.pointer, O.eventTarget, O.curEventTarget, N]);
          }
        } else {
          var L = false;
          if (!q.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var D = 0; D < s.length && !L; D++)
              L = s[D].pointerType !== "mouse" && s[D].pointerIsDown;
            L = L || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!L) {
            var $ = { pointer: a, pointerId: K.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: h, eventTarget: m, scope: o }, J = nu($);
            g.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < g.length; F++) {
          var re = Ql(g[F], 4), le = re[0], pe = re[1], Ee = re[2];
          re[3][n](le, a, pe, Ee);
        }
      };
    }
    u(ru, "$n");
    function nu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: jo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    u(nu, "Gn");
    function us(n, o) {
      var a = n.doc, s = n.scope, p = n.options, f = s.interactions.docEvents, m = s.events, h = m[o];
      for (var g in s.browser.isIOS && !p.events && (p.events = { passive: false }), m.delegatedEvents)
        h(a, g, m.delegateListener), h(a, g, m.delegateUseCapture, true);
      for (var x = p && p.events, T = 0; T < f.length; T++) {
        var O = f[T];
        h(a, O.type, O.listener, x);
      }
    }
    u(us, "Hn");
    var Ud = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ls.length; a++) {
        var s = ls[a];
        o[s] = ru(s, n);
      }
      var p, f = q.default.pEventTypes;
      function m() {
        for (var h = 0; h < n.interactions.list.length; h++) {
          var g = n.interactions.list[h];
          if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting)
            for (var x = function() {
              var O = g.pointers[T];
              n.documents.some(function(N) {
                var L = N.doc;
                return (0, R.nodeContains)(L, O.downTarget);
              }) || g.removePointer(O.pointer, O.event);
            }, T = 0; T < g.pointers.length; T++)
              x();
        }
      }
      u(m, "a"), (p = S.default.PointerEvent ? [{ type: f.down, listener: m }, { type: f.down, listener: o.pointerDown }, { type: f.move, listener: o.pointerMove }, { type: f.up, listener: o.pointerUp }, { type: f.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: m }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(h) {
        for (var g = 0; g < n.interactions.list.length; g++)
          n.interactions.list[g].documentBlur(h);
      } }), n.prevTouchTime = 0, n.Interaction = function(h) {
        (function(D, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          D.prototype = Object.create($ && $.prototype, { constructor: { value: D, writable: true, configurable: true } }), $ && tu(D, $);
        })(L, h);
        var g, x, T, O, N = (T = L, O = function() {
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
          return Wd(this, D);
        });
        function L() {
          return $d(this, L), N.apply(this, arguments);
        }
        return u(L, "s"), g = L, (x = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(D) {
          n.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && Fd(g.prototype, x), L;
      }(It.default), n.interactions = { list: [], new: function(h) {
        h.scopeFire = function(x, T) {
          return n.fire(x, T);
        };
        var g = new n.Interaction(h);
        return n.interactions.list.push(g), g;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Vn.default);
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
    Ho.default = Ud;
    var ki = {};
    function iu(n) {
      return (iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(iu, "Jn");
    function cs(n, o, a) {
      return (cs = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p, f) {
        var m = function(g, x) {
          for (; !Object.prototype.hasOwnProperty.call(g, x) && (g = Yn(g)) !== null; )
            ;
          return g;
        }(s, p);
        if (m) {
          var h = Object.getOwnPropertyDescriptor(m, p);
          return h.get ? h.get.call(f) : h.value;
        }
      })(n, o, a || n);
    }
    u(cs, "Qn");
    function ou(n, o) {
      return (ou = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(ou, "tr");
    function Vd(n, o) {
      return !o || iu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    u(Vd, "er");
    function Yn(n) {
      return (Yn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Yn, "nr");
    function au(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(au, "rr");
    function su(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(su, "or");
    function lu(n, o, a) {
      return o && su(n.prototype, o), a && su(n, a), n;
    }
    u(lu, "ir");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(vt, "ar"), Object.defineProperty(ki, "__esModule", { value: true }), ki.initScope = uu, ki.Scope = void 0;
    var Xd = function() {
      function n() {
        var o = this;
        au(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", q.default), vt(this, "defaults", (0, fn.default)(Oi.defaults)), vt(this, "Eventable", Pi.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, ns.createInteractStatic)(this)), vt(this, "InteractEvent", _i.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new Lo.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(g, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function");
            g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), x && ou(g, x);
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
            var g, x = Yn(p);
            if (f) {
              var T = Yn(this).constructor;
              g = Reflect.construct(x, arguments, T);
            } else
              g = x.apply(this, arguments);
            return Vd(this, g);
          });
          function h() {
            return au(this, h), m.apply(this, arguments);
          }
          return u(h, "i"), lu(h, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(g) {
            return cs(Yn(h.prototype), "set", this).call(this, g), a.fire("interactable:set", { options: g, interactable: this }), this;
          } }, { key: "unset", value: function() {
            cs(Yn(h.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), h;
        }(Go.Interactable);
      }
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
            var m = this.listenerMaps[s].id;
            if (f[m] || f[cu(m)])
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
      return n.isInitialized = true, c.default.window(o) && e.init(o), S.default.init(o), q.default.init(o), Gt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Ho.default), n.usePlugin(qo.default), n;
    }
    u(uu, "lr");
    function cu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    u(cu, "ur"), ki.Scope = Xd;
    var yt = {};
    Object.defineProperty(yt, "__esModule", { value: true }), yt.default = void 0;
    var pu = new ki.Scope(), Yd = pu.interactStatic;
    yt.default = Yd;
    var Zd = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    pu.init(Zd);
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
            return fu(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? fu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(du, "yr");
    function fu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(fu, "mr"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0, Wo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = du(s, 2), f = p[0], m = p[1];
        return f in n || m in n;
      }), a = u(function(s, p) {
        for (var f = n.range, m = n.limits, h = m === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : m, g = n.offset, x = g === void 0 ? { x: 0, y: 0 } : g, T = { range: f, grid: n, x: null, y: null }, O = 0; O < o.length; O++) {
          var N = du(o[O], 2), L = N[0], D = N[1], $ = Math.round((s - x.x) / n[L]), J = Math.round((p - x.y) / n[D]);
          T[L] = Math.max(h.left, Math.min(h.right, $ * n[L] + x.x)), T[D] = Math.max(h.top, Math.min(h.bottom, J * n[D] + x.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Ri = {};
    Object.defineProperty(Ri, "__esModule", { value: true }), Object.defineProperty(Ri, "edgeTarget", { enumerable: true, get: function() {
      return $o.default;
    } }), Object.defineProperty(Ri, "elements", { enumerable: true, get: function() {
      return Fo.default;
    } }), Object.defineProperty(Ri, "grid", { enumerable: true, get: function() {
      return Wo.default;
    } });
    var Uo = {};
    Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var Jd = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, Ri), o.createSnapGrid = o.snappers.grid;
    } };
    Uo.default = Jd;
    var Zn = {};
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
    u(hu, "Pr");
    function ps(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? hu(Object(a), true).forEach(function(s) {
          Kd(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : hu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    u(ps, "Or");
    function Kd(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Kd, "Sr"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.aspectRatio = Zn.default = void 0;
    var vu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, f = o.options.ratio, m = o.options, h = m.equalDelta, g = m.modifiers;
      f === "preserve" && (f = a.width / a.height), o.startCoords = (0, U.default)({}, p), o.startRect = (0, U.default)({}, a), o.ratio = f, o.equalDelta = h;
      var x = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (x.left ? 1 : -1) * (x.top ? 1 : -1);
      else {
        var T = o.xIsPrimaryAxis ? x.top : x.left;
        o.edgeSign = T ? -1 : 1;
      }
      if ((0, U.default)(n.edges, x), g && g.length) {
        var O = new hn.default(n.interaction);
        O.copyFrom(n.interaction.modification), O.prepareStates(g), o.subModification = O, O.startAll(ps({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, U.default)({}, s), f = o.equalDelta ? Qd : ef;
      if (f(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var m = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, m, { x: s.x - p.x, y: s.y - p.y });
      var h = o.subModification.setAll(ps(ps({}, n), {}, { rect: m, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: m })), g = h.delta;
      return h.changed && (f(o, Math.abs(g.x) > Math.abs(g.y), h.coords, h.rect), (0, U.default)(s, h.coords)), h.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Qd(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p : a.x = s.x + (a.y - s.y) * p;
    }
    u(Qd, "Tr");
    function ef(n, o, a, s) {
      var p = n.startRect, f = n.startCoords, m = n.ratio, h = n.edgeSign;
      if (o) {
        var g = s.width / m;
        a.y = f.y + (g - p.height) * h;
      } else {
        var x = s.height * m;
        a.x = f.x + (x - p.width) * h;
      }
    }
    u(ef, "Mr"), Zn.aspectRatio = vu;
    var tf = (0, ht.makeModifier)(vu, "aspectRatio");
    Zn.default = tf;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = void 0;
    var mu = u(function() {
    }, "Ir");
    mu._defaults = {};
    var rf = mu;
    gn.default = rf;
    var ds = {};
    Object.defineProperty(ds, "__esModule", { value: true }), Object.defineProperty(ds, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Tt = {};
    function fs(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    u(fs, "zr"), Object.defineProperty(Tt, "__esModule", { value: true }), Tt.getRestrictionRect = fs, Tt.restrict = Tt.default = void 0;
    var gu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, f = n.pageCoords, m = s.options, h = m.elementRect, g = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, m.offset || {});
      if (o && h) {
        var x = fs(m.restriction, p, f);
        if (x) {
          var T = x.right - x.left - o.width, O = x.bottom - x.top - o.height;
          T < 0 && (g.left += T, g.right += T), O < 0 && (g.top += O, g.bottom += O);
        }
        g.left += a.left - o.width * h.left, g.top += a.top - o.height * h.top, g.right += a.right - o.width * (1 - h.right), g.bottom += a.bottom - o.height * (1 - h.bottom);
      }
      s.offset = g;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, f = s.offset, m = fs(p.restriction, a, o);
      if (m) {
        var h = ce.xywhToTlbr(m);
        o.x = Math.max(Math.min(h.right - f.right, o.x), h.left + f.left), o.y = Math.max(Math.min(h.bottom - f.bottom, o.y), h.top + f.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Tt.restrict = gu;
    var nf = (0, ht.makeModifier)(gu, "restrict");
    Tt.default = nf;
    var Sr = {};
    Object.defineProperty(Sr, "__esModule", { value: true }), Sr.restrictEdges = Sr.default = void 0;
    var bu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, yu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function xu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    u(xu, "Wr");
    var wu = { noInner: bu, noOuter: yu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, f = p.options;
      if (f) {
        var m = (0, Tt.getRestrictionRect)(f.offset, a, a.coords.start.page);
        o = ce.rectToXY(m);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, f = p.offset, m = p.options;
      if (a) {
        var h = (0, U.default)({}, o), g = (0, Tt.getRestrictionRect)(m.inner, s, h) || {}, x = (0, Tt.getRestrictionRect)(m.outer, s, h) || {};
        xu(g, bu), xu(x, yu), a.top ? o.y = Math.min(Math.max(x.top + f.top, h.y), g.top + f.top) : a.bottom && (o.y = Math.max(Math.min(x.bottom + f.bottom, h.y), g.bottom + f.bottom)), a.left ? o.x = Math.min(Math.max(x.left + f.left, h.x), g.left + f.left) : a.right && (o.x = Math.max(Math.min(x.right + f.right, h.x), g.right + f.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Sr.restrictEdges = wu;
    var of = (0, ht.makeModifier)(wu, "restrictEdges");
    Sr.default = of;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.restrictRect = Jn.default = void 0;
    var af = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Tt.restrict.defaults), Eu = { start: Tt.restrict.start, set: Tt.restrict.set, defaults: af };
    Jn.restrictRect = Eu;
    var sf = (0, ht.makeModifier)(Eu, "restrictRect");
    Jn.default = sf;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: true }), Kn.restrictSize = Kn.default = void 0;
    var lf = { width: -1 / 0, height: -1 / 0 }, uf = { width: 1 / 0, height: 1 / 0 }, Su = { start: function(n) {
      return Sr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, f = a.options;
      if (p) {
        var m = ce.tlbrToXywh((0, Tt.getRestrictionRect)(f.min, o, n.coords)) || lf, h = ce.tlbrToXywh((0, Tt.getRestrictionRect)(f.max, o, n.coords)) || uf;
        a.options = { endOnly: f.endOnly, inner: (0, U.default)({}, Sr.restrictEdges.noInner), outer: (0, U.default)({}, Sr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - m.height, a.options.outer.top = s.bottom - h.height) : p.bottom && (a.options.inner.bottom = s.top + m.height, a.options.outer.bottom = s.top + h.height), p.left ? (a.options.inner.left = s.right - m.width, a.options.outer.left = s.right - h.width) : p.right && (a.options.inner.right = s.left + m.width, a.options.outer.right = s.left + h.width), Sr.restrictEdges.set(n), a.options = f;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Kn.restrictSize = Su;
    var cf = (0, ht.makeModifier)(Su, "restrictSize");
    Kn.default = cf;
    var hs = {};
    Object.defineProperty(hs, "__esModule", { value: true }), Object.defineProperty(hs, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.snap = Zr.default = void 0;
    var Tu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, f = n.rect, m = n.state, h = n.startOffset, g = m.options, x = g.offsetWithOrigin ? function(N) {
        var L = N.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N.state.options.origin, null, null, [L])) || (0, Le.default)(N.interactable, L, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (g.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ce.resolveRectLike)(g.offset, s, p, [a]);
        (o = (0, ce.rectToXY)(T) || { x: 0, y: 0 }).x += x.x, o.y += x.y;
      }
      var O = g.relativePoints;
      m.offsets = f && O && O.length ? O.map(function(N, L) {
        return { index: L, relativePoint: N, x: h.left - f.width * N.x + o.x, y: h.top - f.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, f = s.offsets, m = (0, Le.default)(o.interactable, o.element, o.prepared.name), h = (0, U.default)({}, a), g = [];
      p.offsetWithOrigin || (h.x -= m.x, h.y -= m.y);
      for (var x = 0; x < f.length; x++)
        for (var T = f[x], O = h.x - T.x, N = h.y - T.y, L = 0, D = p.targets.length; L < D; L++) {
          var $, J = p.targets[L];
          ($ = c.default.func(J) ? J(O, N, o._proxy, T, L) : J) && g.push({ x: (c.default.number($.x) ? $.x : O) + T.x, y: (c.default.number($.y) ? $.y : N) + T.y, range: c.default.number($.range) ? $.range : p.range, source: J, index: L, offset: T });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < g.length; re++) {
        var le = g[re], pe = le.range, Ee = le.x - h.x, je = le.y - h.y, be = (0, Qe.default)(Ee, je), Ie = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (Ie = false), F.target && !(Ie ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = Ie, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Zr.snap = Tu;
    var pf = (0, ht.makeModifier)(Tu, "snap");
    Zr.default = pf;
    var Nr = {};
    function Cu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Cu, "oo"), Object.defineProperty(Nr, "__esModule", { value: true }), Nr.snapSize = Nr.default = void 0;
    var Ou = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Zr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, f = n.coords, m = p.options, h = p.offsets, g = { x: f.x - h[0].x, y: f.y - h[0].y };
      p.options = (0, U.default)({}, m), p.options.targets = [];
      for (var x = 0; x < (m.targets || []).length; x++) {
        var T = (m.targets || [])[x], O = void 0;
        if (O = c.default.func(T) ? T(g.x, g.y, s) : T) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var L = (o = p.targetFields[N], a = 2, function(F) {
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
            }()), D = L[0], $ = L[1];
            if (D in O || $ in O) {
              O.x = O[D], O.y = O[$];
              break;
            }
          }
          p.options.targets.push(O);
        }
      }
      var J = Zr.snap.set(n);
      return p.options = m, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Nr.snapSize = Ou;
    var df = (0, ht.makeModifier)(Ou, "snapSize");
    Nr.default = df;
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.snapEdges = Qn.default = void 0;
    var _u = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Nr.snapSize.start(n)) : null;
    }, set: Nr.snapSize.set, defaults: (0, U.default)((0, fn.default)(Nr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Qn.snapEdges = _u;
    var ff = (0, ht.makeModifier)(_u, "snapEdges");
    Qn.default = ff;
    var vs = {};
    Object.defineProperty(vs, "__esModule", { value: true }), Object.defineProperty(vs, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var ms = {};
    Object.defineProperty(ms, "__esModule", { value: true }), Object.defineProperty(ms, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.default = void 0;
    var hf = { aspectRatio: Zn.default, restrictEdges: Sr.default, restrict: Tt.default, restrictRect: Jn.default, restrictSize: Kn.default, snapEdges: Qn.default, snap: Zr.default, snapSize: Nr.default, spring: vs.default, avoid: ds.default, transform: ms.default, rubberband: hs.default };
    ei.default = hf;
    var Vo = {};
    Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var vf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ht.default), n.usePlugin(Uo.default), o.modifiers = ei.default, ei.default) {
        var s = ei.default[a], p = s._defaults, f = s._methods;
        p._methods = f, n.defaults.perAction[a] = p;
      }
    } };
    Vo.default = vf;
    var bn = {};
    function Mu(n) {
      return (Mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Mu, "mo");
    function mf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(mf, "bo");
    function Au(n, o) {
      return (Au = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(Au, "xo");
    function gf(n, o) {
      return !o || Mu(o) !== "object" && typeof o != "function" ? zt(n) : o;
    }
    u(gf, "wo");
    function zt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(zt, "_o");
    function gs(n) {
      return (gs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(gs, "Po");
    function gr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(gr, "Oo"), Object.defineProperty(bn, "__esModule", { value: true }), bn.PointerEvent = bn.default = void 0;
    var bf = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && Au(h, g);
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
        var h, g = gs(s);
        if (p) {
          var x = gs(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return gf(this, h);
      });
      function m(h, g, x, T, O, N) {
        var L;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, m), gr(zt(L = f.call(this, O)), "type", void 0), gr(zt(L), "originalEvent", void 0), gr(zt(L), "pointerId", void 0), gr(zt(L), "pointerType", void 0), gr(zt(L), "double", void 0), gr(zt(L), "pageX", void 0), gr(zt(L), "pageY", void 0), gr(zt(L), "clientX", void 0), gr(zt(L), "clientY", void 0), gr(zt(L), "dt", void 0), gr(zt(L), "eventable", void 0), K.pointerExtend(zt(L), x), x !== g && K.pointerExtend(zt(L), g), L.timeStamp = N, L.originalEvent = x, L.type = h, L.pointerId = K.getPointerId(g), L.pointerType = K.getPointerType(g), L.target = T, L.currentTarget = null, h === "tap") {
          var D = O.getPointerIndex(g);
          L.dt = L.timeStamp - O.pointers[D].downTime;
          var $ = L.timeStamp - O.tapTime;
          L.double = !!(O.prevTap && O.prevTap.type !== "doubletap" && O.prevTap.target === L.target && $ < 500);
        } else
          h === "doubletap" && (L.dt = g.timeStamp - O.tapTime);
        return L;
      }
      return u(m, "a"), o = m, (a = [{ key: "_subtractOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX -= g, this.pageY -= x, this.clientX -= g, this.clientY -= x, this;
      } }, { key: "_addOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX += g, this.pageY += x, this.clientX += g, this.clientY += x, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && mf(o.prototype, a), m;
    }(Rt.BaseEvent);
    bn.PointerEvent = bn.default = bf;
    var Ni = {};
    Object.defineProperty(Ni, "__esModule", { value: true }), Ni.default = void 0;
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
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && bs(n), Jr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget, g = a.pointerIndex, x = p.pointers[g].hold, T = R.getPath(h), O = { interaction: p, pointer: f, event: m, eventTarget: h, type: "hold", targets: [], path: T, node: null }, N = 0; N < T.length; N++) {
          var L = T[N];
          O.node = L, s.fire("pointerEvents:collect-targets", O);
        }
        if (O.targets.length) {
          for (var D = 1 / 0, $ = 0; $ < O.targets.length; $++) {
            var J = O.targets[$].eventable.options.holdDuration;
            J < D && (D = J);
          }
          x.duration = D, x.timeout = setTimeout(function() {
            Jr({ interaction: p, eventTarget: h, pointer: f, event: m, type: "hold" }, s);
          }, D);
        }
      })(n, o), Jr(n, o);
    }, "interactions:up": function(n, o) {
      bs(n), Jr(n, o), function(a, s) {
        var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget;
        p.pointerWasMoved || Jr({ interaction: p, eventTarget: h, pointer: f, event: m, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      bs(n), Jr(n, o);
    } }, PointerEvent: bn.PointerEvent, fire: Jr, collectEventTargets: Pu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Jr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, m = n.type, h = n.targets, g = h === void 0 ? Pu(n, o) : h, x = new bn.PointerEvent(m, s, p, f, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: x });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: f, targets: g, type: m, pointerEvent: x }, O = 0; O < g.length; O++) {
        var N = g[O];
        for (var L in N.props || {})
          x[L] = N.props[L];
        var D = (0, Le.default)(N.eventable, N.node);
        if (x._subtractOrigin(D), x.eventable = N.eventable, x.currentTarget = N.node, N.eventable.fire(x), x._addOrigin(D), x.immediatePropagationStopped || x.propagationStopped && O + 1 < g.length && g[O + 1].node !== x.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), m === "tap") {
        var $ = x.double ? Jr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "doubletap" }, o) : x;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return x;
    }
    u(Jr, "Mo");
    function Pu(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, m = n.type, h = a.getPointerIndex(s), g = a.pointers[h];
      if (m === "tap" && (a.pointerWasMoved || !g || g.downTarget !== f))
        return [];
      for (var x = R.getPath(f), T = { interaction: a, pointer: s, event: p, eventTarget: f, type: m, path: x, targets: [], node: null }, O = 0; O < x.length; O++) {
        var N = x[O];
        T.node = N, o.fire("pointerEvents:collect-targets", T);
      }
      return m === "hold" && (T.targets = T.targets.filter(function(L) {
        var D;
        return L.eventable.options.holdDuration === ((D = a.pointers[h]) == null ? void 0 : D.hold.duration);
      })), T.targets;
    }
    u(Pu, "jo");
    function bs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    u(bs, "ko");
    var yf = Xo;
    Ni.default = yf;
    var Yo = {};
    function xf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    u(xf, "Ao"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0;
    var wf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Ni.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = xf, n;
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
    Yo.default = wf;
    var Zo = {};
    function Ef(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    u(Ef, "Co"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var Sf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = Ef;
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
      (0, U.default)(a.events.options, o.pointerEvents.defaults), (0, U.default)(a.events.options, s.pointerEvents || {});
    } } };
    Zo.default = Sf;
    var Jo = {};
    Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var Tf = { id: "pointer-events", install: function(n) {
      n.usePlugin(Ni), n.usePlugin(Yo.default), n.usePlugin(Zo.default);
    } };
    Jo.default = Tf;
    var Gi = {};
    function Iu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, f) {
          for (var m = c.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], h = f.window.Promise, g = h ? [] : null, x = function() {
            var O = m[T], N = s.getRect(O);
            if (!N)
              return "break";
            var L = xe.find(f.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === O && re.prepared.name === p.name;
            }), D = void 0;
            if (L)
              L.move(), g && (D = L._reflowPromise || new h(function(re) {
                L._reflowResolve = re;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(N), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f.now() }, F = K.coordsToEvent(J);
              D = function(re, le, pe, Ee, je) {
                var be = re.interactions.new({ pointerType: "reflow" }), Ie = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), K.setZeroCoords(be.coords.delta), (0, qt.copyAction)(be.prepared, Ee), be._doPhase(Ie);
                var Xt = re.window.Promise, Gr = Xt ? new Xt(function(ys) {
                  be._reflowResolve = ys;
                }) : void 0;
                return be._reflowPromise = Gr, be.start(Ee, le, pe), be._interacting ? (be.move(Ie), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), Gr;
              }(f, s, O, p, F);
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
    u(Iu, "Wo"), Object.defineProperty(Gi, "__esModule", { value: true }), Gi.install = Iu, Gi.default = void 0;
    var Cf = { id: "reflow", install: Iu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o.interactions.list, a));
    } } };
    Gi.default = Cf;
    var Vt = { exports: {} };
    function zu(n) {
      return (zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(zu, "Vo"), Object.defineProperty(Vt.exports, "__esModule", { value: true }), Vt.exports.default = void 0, yt.default.use(Vn.default), yt.default.use(mn.default), yt.default.use(Jo.default), yt.default.use(Xn.default), yt.default.use(Vo.default), yt.default.use(Io.default), yt.default.use(kr.default), yt.default.use(Yr.default), yt.default.use(Gi.default);
    var Of = yt.default;
    if (Vt.exports.default = Of, zu(Vt) === "object" && Vt)
      try {
        Vt.exports = yt.default;
      } catch (n) {
      }
    yt.default.default = yt.default, Vt = Vt.exports;
    var yn = { exports: {} };
    function Du(n) {
      return (Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Du, "$o"), Object.defineProperty(yn.exports, "__esModule", { value: true }), yn.exports.default = void 0;
    var _f = Vt.default;
    if (yn.exports.default = _f, Du(yn) === "object" && yn)
      try {
        yn.exports = Vt.default;
      } catch (n) {
      }
    return Vt.default.default = Vt.default, yn.exports;
  });
});
var Kr = Ko(Lu());
function qu(r) {
  let e = Qr(r);
  return new Kr.default(e).valueOf() * Math.PI;
}
u(qu, "V");
function ji(r) {
  let e = Qr(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
u(ji, "X");
function ju(r, e) {
  return new Kr.default(Qr(r)).valueOf() < new Kr.default(Qr(e)).valueOf();
}
u(ju, "W");
function Bu(r, e) {
  return new Kr.default(Qr(r)).valueOf() > new Kr.default(Qr(e)).valueOf();
}
u(Bu, "H");
function Hu(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = Qr(r);
    return new Kr.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
u(Hu, "Q");
function Qr(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
u(Qr, "l");
function $u(r) {
  try {
    let e = Qr(r), t = new Kr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
u($u, "J");
var kf = Object.prototype.toString.call({});
var Rf = "!recursion-limit!";
var Nf = 10;
function et(r, e = Nf) {
  return Gf(r) || Lf(r, e) || qf(r, e);
}
u(et, "c");
function Gf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
u(Gf, "M");
function Lf(r, e) {
  if (e === 0)
    return Rf;
  if (r instanceof Map)
    return jf(r, e);
  if (r instanceof Set)
    return Bf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Hf(r, e);
}
u(Lf, "O");
function qf(r, e) {
  let t = String(r);
  return t !== kf ? t : $f(r, e);
}
u(qf, "F");
function jf(r, e) {
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
u(jf, "G");
function Bf(r, e) {
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
u(Bf, "R");
function Hf(r, e) {
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
u(Hf, "N");
function $f(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], d = et(l, e - 1), v = et(c, e - 1);
    t.push(`${d}: ${v}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
u($f, "q");
var ws = 0;
var Ct = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), ws++;
    try {
      this.details = ws === 1 ? et(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      ws--;
    }
  }
}, "d");
var Ff = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
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
    for (let e of Ff)
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
var qi = jt;
qi.CONSISTENT = new jt(false, 0, 2, ", "), qi.EXACT = new jt(true, 0, void 0, ", "), qi.MINIFIED = new jt(true, 0, void 0, ","), qi.SIMPLIFIED = new jt(true, 5e-4, 3, ", ");
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
    return r = r || qi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
function _s(r) {
  Cs.add(r), r.shadowRoot && Ms(r.shadowRoot), Ps(r), As(r.ownerDocument);
}
u(_s, "bind");
function Ms(r) {
  Ps(r), As(r);
}
u(Ms, "bindShadow");
var fa = /* @__PURE__ */ new WeakMap();
function As(r = document) {
  if (fa.has(r))
    return fa.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Os(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let d of c.addedNodes)
          d instanceof Element && Ps(d);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, fa.delete(r), t.disconnect();
  } };
  return fa.set(r, i), i;
}
u(As, "listenForBind");
function Ps(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Os(e);
  r instanceof Element && r.hasAttribute("data-action") && Os(r);
}
u(Ps, "bindElements");
function Wf(r) {
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
u(Wf, "handleEvent");
function* Uu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
u(Uu, "bindings");
function Os(r) {
  for (let e of Uu(r))
    r.addEventListener(e.type, Wf);
}
u(Os, "bindActions");
function Is(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
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
u(Ds, "findTargets");
function ze(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return zs(this, e);
  } });
}
u(ze, "target");
function Bt(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Ds(this, e);
  } });
}
u(Bt, "targets");
function ks(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
u(ks, "autoShadowRoot");
var ha = /* @__PURE__ */ new WeakMap();
function G(r, e) {
  ha.has(r) || ha.set(r, []), ha.get(r).push(e);
}
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
u(Vu, "getAttrNames");
function Xu(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
u(Xu, "attrToAttributeName");
function Ns(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...Vu(r.prototype)].map(Xu).concat(e);
  }, set(t) {
    e = t;
  } });
}
u(Ns, "defineObservedAttributes");
var Uf = /* @__PURE__ */ new WeakSet();
function Yu(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Uf.add(r), ks(r), Rs(r), _s(r), e && e.call(r), r.shadowRoot && Ms(r.shadowRoot);
}
u(Yu, "initializeInstance");
function Zu(r) {
  Ns(r), Is(r);
}
u(Zu, "initializeClass");
function ne(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    Yu(this, e);
  }, Zu(r);
}
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
  return u(e, "ActivateableMixinClass"), k([G], e.prototype, "active", 2), e;
}
u(Oe, "ActivateableMixin");
var xn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function en(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  return u(e, "AngleableMixinClass"), k([G], e.prototype, "angle", 2), k([G], e.prototype, "reducedAngle", 2), e;
}
u(en, "AngleableMixin");
var wn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
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
  return u(e, "DisableableMixinClass"), k([G], e.prototype, "disabled", 2), e;
}
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
function ti(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
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
u(me, "__read");
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
var tn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(tn || (tn = {}));
var Bi = Se.Start;
var ri = Se.Stop;
var ni = Se.Raise;
var En = Se.Send;
var va = Se.Cancel;
var Ju = Se.NullEvent;
var Gs = Se.Assign;
var gm = Se.After;
var bm = Se.DoneState;
var ma = Se.Log;
var Ku = Se.Init;
var Hi = Se.Invoke;
var ym = Se.ErrorExecution;
var Ls = Se.ErrorPlatform;
var qs = Se.ErrorCustom;
var $i = Se.Update;
var Qu = Se.Choose;
var ec = Se.Pure;
var ga = ".";
var js = {};
var ba = "xstate.guard";
var tc = "";
var qe = true;
var ya;
function Wi(r, e, t) {
  t === void 0 && (t = ga);
  var i = ii(r, t), l = ii(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Wi(i[c], l[c]) : false;
  });
}
u(Wi, "matchesState");
function xa(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
u(xa, "getEventType");
function wa(r, e) {
  try {
    return Lr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
u(wa, "toStatePath");
function Vf(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
u(Vf, "isStateLike");
function ii(r, e) {
  if (Vf(r))
    return r.value;
  if (Lr(r))
    return Fi(r);
  if (typeof r != "string")
    return r;
  var t = wa(r, e);
  return Fi(t);
}
u(ii, "toStateValue");
function Fi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
u(Fi, "pathToStateValue");
function oi(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
u(oi, "mapValues");
function Bs(r, e, t) {
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
u(Bs, "mapFilterValues");
var rc = u(function(r) {
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
function nc(r, e) {
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
u(nc, "nestedPath");
function Ui(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Ui(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
u(Ui, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, De([], me(r), false));
}
u(Ne, "flatten");
function ic(r) {
  return Lr(r) ? r : [r];
}
u(ic, "toArrayStrict");
function Ht(r) {
  return r === void 0 ? [] : ic(r);
}
u(Ht, "toArray");
function Sn(r, e, t) {
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
u(Sn, "mapContext");
function oc(r) {
  return /^(done|error)\./.test(r);
}
u(oc, "isBuiltInEvent");
function Hs(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
u(Hs, "isPromiseLike");
function ac(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
u(ac, "isBehavior");
function Ea(r, e) {
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
u(Ea, "partition");
function sc(r, e) {
  return oi(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: sc(t, l) };
    }
  });
}
u(sc, "updateHistoryStates");
function lc(r, e) {
  return { current: e, states: sc(r, e) };
}
u(lc, "updateHistoryValue");
function $s(r, e, t, i) {
  qe || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, d) {
    var v, b, y = d.assignment, w = { state: i, action: d, _event: e }, M = {};
    if (Te(y))
      M = y(c, e.data, w);
    else
      try {
        for (var C = ve(Object.keys(y)), A = C.next(); !A.done; A = C.next()) {
          var z = A.value, S = y[z];
          M[z] = Te(S) ? S(c, e.data, w) : S;
        }
      } catch (_) {
        v = { error: _ };
      } finally {
        try {
          A && !A.done && (b = C.return) && b.call(C);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, c, M);
  }, r);
  return l;
}
u($s, "updateContext");
var Ue = u(function() {
}, "warn");
qe || (Ue = u(function(r, e) {
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
function Sa(r, e) {
  if (!!r)
    return ge(r) ? { type: ba, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: ba, name: r.name, predicate: r } : r;
}
u(Sa, "toGuard");
function uc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
u(uc, "isObservable");
var Tr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Om = (ya = {}, ya[Tr] = function() {
  return this;
}, ya[Symbol.observable] = function() {
  return this;
}, ya);
function Cr(r) {
  return !!r && "__xstatenode" in r;
}
u(Cr, "isMachine");
function cc(r) {
  return !!r && typeof r.send == "function";
}
u(cc, "isActor");
function Vi(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
u(Vi, "toEventObject");
function tt(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Vi(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
u(tt, "toSCXMLEvent");
function Tn(r, e) {
  var t = ic(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Cr(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
u(Tn, "toTransitionConfigArray");
function pc(r) {
  if (!(r === void 0 || r === tc))
    return Ht(r);
}
u(pc, "normalizeTarget");
function dc(r, e, t) {
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
u(dc, "reportUnhandledExceptionOnInvocation");
function Ta(r, e, t, i, l) {
  var c = r.options.guards, d = { state: l, cond: e, _event: i };
  if (e.type === ba)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, d);
  var v = c == null ? void 0 : c[e.type];
  if (!v)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return v(t, i.data, d);
}
u(Ta, "evaluateGuard");
function Ca(r) {
  return typeof r == "string" ? { type: r } : r;
}
u(Ca, "toInvokeSource");
function Xi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
u(Xi, "toObserver");
function Yi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
u(Yi, "createInvokeId");
var Cn = tt({ type: Ku });
function Oa(r, e) {
  return e && e[r] || void 0;
}
u(Oa, "getActionFunction");
function ai(r, e) {
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
u(ai, "toActionObject");
var Zi = u(function(r, e) {
  if (!r)
    return [];
  var t = Lr(r) ? r : [r];
  return t.map(function(i) {
    return ai(i, e);
  });
}, "toActionObjects");
function Ma(r) {
  var e = ai(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
u(Ma, "toActivityDefinition");
function fc(r) {
  return ge(r) ? { type: ni, event: r } : Fs(r, { to: tn.Internal });
}
u(fc, "raise");
function Xf(r) {
  return { type: ni, _event: tt(r.event) };
}
u(Xf, "resolveRaise");
function Fs(r, e) {
  return { to: e ? e.to : void 0, type: En, event: Te(r) ? r : Vi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : xa(r) };
}
u(Fs, "send");
function Yf(r, e, t, i) {
  var l = { _event: t }, c = tt(Te(r.event) ? r.event(e, t.data, l) : r.event), d;
  if (ge(r.delay)) {
    var v = i && i[r.delay];
    d = Te(v) ? v(e, t.data, l) : v;
  } else
    d = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var b = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: b, _event: c, event: c.data, delay: d });
}
u(Yf, "resolveSend");
var Zf = u(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var hc = u(function(r) {
  return { type: va, sendId: r };
}, "cancel");
function vc(r) {
  var e = Ma(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
u(vc, "start");
function mc(r) {
  var e = Te(r) ? r : Ma(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
u(mc, "stop");
function Jf(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
u(Jf, "resolveStop");
function gc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
u(gc, "after");
function Ji(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(Ji, "done");
function si(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(si, "doneInvoke");
function On(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(On, "error");
function _a(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var d = me(c ? [[], l] : Ea(l, function(C) {
    return C.type === Gs;
  }), 2), v = d[0], b = d[1], y = v.length ? $s(t, i, v, e) : t, w = c ? [t] : void 0, M = Ne(b.map(function(C) {
    var A;
    switch (C.type) {
      case ni:
        return Xf(C);
      case En:
        var z = Yf(C, y, i, r.options.delays);
        return qe || Ue(!ge(C.delay) || typeof z.delay == "number", "No delay reference for delay expression '".concat(C.delay, "' was found on machine '").concat(r.id, "'")), z;
      case ma:
        return Zf(C, y, i);
      case Qu: {
        var S = C, _ = (A = S.conds.find(function(W) {
          var ie = Sa(W.cond, r.options.guards);
          return !ie || Ta(r, ie, y, i, e);
        })) === null || A === void 0 ? void 0 : A.actions;
        if (!_)
          return [];
        var P = me(_a(r, e, y, i, Zi(Ht(_), r.options.actions), c), 2), I = P[0], q = P[1];
        return y = q, w == null || w.push(y), I;
      }
      case ec: {
        var _ = C.get(y, i.data);
        if (!_)
          return [];
        var E = me(_a(r, e, y, i, Zi(Ht(_), r.options.actions), c), 2), B = E[0], R = E[1];
        return y = R, w == null || w.push(y), B;
      }
      case ri:
        return Jf(C, y, i);
      case Gs: {
        y = $s(y, i, [C], e), w == null || w.push(y);
        break;
      }
      default:
        var X = ai(C, r.options.actions), V = X.exec;
        if (V && w) {
          var H = w.length - 1;
          X = Y(Y({}, X), { exec: function(W) {
            for (var ie = [], oe = 1; oe < arguments.length; oe++)
              ie[oe - 1] = arguments[oe];
            V.apply(void 0, De([w[H]], me(ie), false));
          } });
        }
        return X;
    }
  }).filter(function(C) {
    return !!C;
  }));
  return [M, y];
}
u(_a, "resolveActions");
var bc = [];
var _n = u(function(r, e) {
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
  } }, e[Tr] = function() {
    return this;
  }, e;
}
u(yc, "createNullActor");
function xc(r, e, t, i) {
  var l, c = Ca(r.src), d = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], v = r.data ? Sn(r.data, t, i) : void 0, b = d ? wc(d, r.id, v) : yc(r.id);
  return b.meta = r, b;
}
u(xc, "createInvocableActor");
function wc(r, e, t) {
  var i = yc(e);
  if (i.deferred = true, Cr(r)) {
    var l = i.state = _n(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
u(wc, "createDeferredActor");
function Kf(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
u(Kf, "isActor");
function Ec(r) {
  return Kf(r) && "id" in r;
}
u(Ec, "isSpawnedActor");
function Sc(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Tr] = function() {
    return this;
  }, e), r);
}
u(Sc, "toActorRef");
var Ki = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function Mn(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
u(Mn, "getChildren");
function Us(r) {
  var e = [r];
  return Ki(r) ? e : e.concat(Ne(Mn(r).map(Us)));
}
u(Us, "getAllStateNodes");
function An(r, e) {
  var t, i, l, c, d, v, b, y, w = new Set(r), M = Ws(w), C = new Set(e);
  try {
    for (var A = ve(C), z = A.next(); !z.done; z = A.next())
      for (var S = z.value, _ = S.parent; _ && !C.has(_); )
        C.add(_), _ = _.parent;
  } catch (H) {
    t = { error: H };
  } finally {
    try {
      z && !z.done && (i = A.return) && i.call(A);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var P = Ws(C);
  try {
    for (var I = ve(C), q = I.next(); !q.done; q = I.next()) {
      var S = q.value;
      if (S.type === "compound" && (!P.get(S) || !P.get(S).length))
        M.get(S) ? M.get(S).forEach(function(W) {
          return C.add(W);
        }) : S.initialStateNodes.forEach(function(W) {
          return C.add(W);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d = void 0, ve(Mn(S))), B = E.next(); !B.done; B = E.next()) {
            var R = B.value;
            C.has(R) || (C.add(R), M.get(R) ? M.get(R).forEach(function(W) {
              return C.add(W);
            }) : R.initialStateNodes.forEach(function(W) {
              return C.add(W);
            }));
          }
        } catch (W) {
          d = { error: W };
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
      q && !q.done && (c = I.return) && c.call(I);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var X = ve(C), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, _ = S.parent; _ && !C.has(_); )
        C.add(_), _ = _.parent;
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
u(An, "getConfiguration");
function Tc(r, e) {
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
    l[c.key] = Tc(c, e);
  }), l;
}
u(Tc, "getValueFromAdj");
function Ws(r) {
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
u(Ws, "getAdjList");
function Cc(r, e) {
  var t = An([r], e);
  return Tc(r, Ws(t));
}
u(Cc, "getValue");
function Qi(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
u(Qi, "has");
function Oc(r) {
  return De([], me(new Set(Ne(De([], me(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
u(Oc, "nextEvents");
function Pn(r, e) {
  return e.type === "compound" ? Mn(e).some(function(t) {
    return t.type === "final" && Qi(r, t);
  }) : e.type === "parallel" ? Mn(e).every(function(t) {
    return Pn(r, t);
  }) : false;
}
u(Pn, "isInFinalState");
function _c(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
u(_c, "getMeta");
function Vs(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
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
u(Xs, "stateValuesEqual");
function Mc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
u(Mc, "isStateConfig");
function Ac(r, e) {
  var t = r.exec, i = Y(Y({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
u(Ac, "bindActionToState");
var br = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = js, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || js, this.meta = _c(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Oc(t.configuration);
    } });
  }
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = Cn;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = Cn;
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
    var i = ti(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Wi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    qe && Ue(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Qf = { deferEvents: false };
var Ys = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, Qf), e);
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
var Zs = /* @__PURE__ */ new Map();
var eh = 0;
var eo = { bookId: function() {
  return "x:".concat(eh++);
}, register: function(r, e) {
  return Zs.set(r, e), r;
}, get: function(r) {
  return Zs.get(r);
}, free: function(r) {
  Zs.delete(r);
} };
function Aa() {
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
u(Aa, "getGlobal");
function th() {
  var r = Aa();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
u(th, "getDevTools");
function Pc(r) {
  if (!!Aa()) {
    var e = th();
    e && e.register(r);
  }
}
u(Pc, "registerService");
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
  }, "flush"), v = Sc({ id: e.id, send: function(y) {
    l.push(y), d();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, w, M) {
    var C = Xi(y, w, M);
    return i.add(C), C.next(t), { unsubscribe: function() {
      i.delete(C);
    } };
  } }), b = { parent: e.parent, self: v, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(b) : t, v;
}
u(Ic, "spawnBehavior");
var rh = { sync: false, autoForward: false };
var mt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(mt || (mt = {}));
var zc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = mt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(w, M) {
      if (Lr(w))
        return i.batch(w), i.state;
      var C = tt(Vi(w, M));
      if (i.status === mt.Stopped)
        return qe || Ue(false, 'Event "'.concat(C.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(C.data))), i.state;
      if (i.status !== mt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(C.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(C.data)));
      return i.scheduler.schedule(function() {
        i.forward(C);
        var A = i.nextState(C);
        i.update(A, C);
      }), i._state;
    }, this.sendTo = function(w, M) {
      var C = i.parent && (M === tn.Parent || i.parent.id === M), A = C ? i.parent : ge(M) ? i.children.get(M) || eo.get(M) : cc(M) ? M : void 0;
      if (!A) {
        if (!C)
          throw new Error("Unable to send event to child '".concat(M, "' from service '").concat(i.id, "'."));
        qe || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(w.type));
        return;
      }
      "machine" in A ? A.send(Y(Y({}, w), { name: w.name === qs ? "".concat(On(i.id)) : w.name, origin: i.sessionId })) : A.send(w.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c = l.clock, d = l.logger, v = l.parent, b = l.id, y = b !== void 0 ? b : e.id;
    this.id = y, this.logger = d, this.clock = c, this.parent = v, this.options = l, this.scheduler = new Ys({ deferEvents: this.options.deferEvents }), this.sessionId = eo.bookId();
  }
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return qe || Ue(this.status !== mt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
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
    var i, l, c, d, v, b, y, w, M = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      M.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var C = ve(this.eventListeners), A = C.next(); !A.done; A = C.next()) {
          var z = A.value;
          z(e.event);
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
      for (var S = ve(this.listeners), _ = S.next(); !_.done; _ = S.next()) {
        var z = _.value;
        z(e, e.event);
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
        var q = I.value;
        q(this.state.context, this.state.history ? this.state.history.context : void 0);
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
    var E = Pn(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === M.machine;
      }), R = B && B.doneData ? Sn(B.doneData, e.context, t) : void 0;
      try {
        for (var X = ve(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var z = V.value;
          z(si(this.id, R));
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
    this.machine._init(), eo.register(this.sessionId, this), this.initialized = true, this.status = mt.Running;
    var i = e === void 0 ? this.initialState : _n(this, function() {
      return Mc(e) ? t.machine.resolveState(e) : t.machine.resolveState(br.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Cn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, d, v, b, y, w, M = this;
    try {
      for (var C = ve(this.listeners), A = C.next(); !A.done; A = C.next()) {
        var z = A.value;
        this.listeners.delete(z);
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
      for (var S = ve(this.stopListeners), _ = S.next(); !_.done; _ = S.next()) {
        var z = _.value;
        z(), this.stopListeners.delete(z);
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
        var z = I.value;
        this.contextListeners.delete(z);
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
      for (var q = ve(this.doneListeners), E = q.next(); !E.done; E = q.next()) {
        var z = E.value;
        this.doneListeners.delete(z);
      }
    } catch (V) {
      v = { error: V };
    } finally {
      try {
        E && !E.done && (b = q.return) && b.call(q);
      } finally {
        if (v)
          throw v.error;
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
          M.exec(U, M.state);
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
      for (var B = ve(Object.keys(this.delayedEventsMap)), R = B.next(); !R.done; R = B.next()) {
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
    return this.scheduler.clear(), this.scheduler = new Ys({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = mt.Stopped, this._initialState = void 0, eo.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === mt.NotStarted && this.options.deferEvents)
      qe || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== mt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, d = false, v = [], b = u(function(C) {
        var A = tt(C);
        t.forward(A), c = _n(t, function() {
          return t.machine.transition(c, A);
        }), v.push.apply(v, De([], me(c.actions.map(function(z) {
          return Ac(z, c);
        })), false)), d = d || !!c.changed;
      }, "_loop_1");
      try {
        for (var y = ve(e), w = y.next(); !w.done; w = y.next()) {
          var M = w.value;
          b(M);
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
      c.changed = d, c.actions = v, t.update(c, tt(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = tt(e);
    if (i.name.indexOf(Ls) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Ls) === 0;
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
    var l = t.context, c = t._event, d = e.exec || Oa(e.type, i), v = Te(d) ? d : d ? d.exec : e.exec;
    if (v)
      try {
        return v(l, c.data, { action: e, state: this.state, _event: c });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case En:
        var b = e;
        if (typeof b.delay == "number") {
          this.defer(b);
          return;
        } else
          b.to ? this.sendTo(b._event, b.to) : this.send(b._event);
        break;
      case va:
        this.cancel(e.sendId);
        break;
      case Bi: {
        if (this.status !== mt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Se.Invoke) {
          var w = Ca(y.src), M = this.machine.options.services ? this.machine.options.services[w.type] : void 0, C = y.id, A = y.data;
          qe || Ue(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var z = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!M) {
            qe || Ue(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = A ? Sn(A, l, c) : void 0;
          if (typeof M == "string")
            return;
          var _ = Te(M) ? M(l, c.data, { data: S, src: w, meta: y.meta }) : M;
          if (!_)
            return;
          var P = void 0;
          Cr(_) && (_ = S ? _.withContext(S) : _, P = { autoForward: z }), this.spawn(_, C, P);
        } else
          this.spawnActivity(y);
        break;
      }
      case ri: {
        this.stopChild(e.activity.id);
        break;
      }
      case ma:
        var I = e.label, q = e.value;
        I ? this.logger(I, q) : this.logger(q);
        break;
      default:
        qe || Ue(false, "No implementation found for action type '".concat(e.type, "'"));
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
    if (Cr(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (ac(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c = Y(Y({}, rh), t);
    c.sync && l.onTransition(function(v) {
      i.send($i, { state: v, id: l.id });
    });
    var d = l;
    return this.children.set(l.id, d), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(v) {
      i.removeChild(l.id), i.send(tt(v, { origin: l.id }));
    }).start(), d;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Ic(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, d;
    e.then(function(b) {
      c || (d = b, l.removeChild(t), l.send(tt(si(t, b), { origin: t })));
    }, function(b) {
      if (!c) {
        l.removeChild(t);
        var y = On(t, b);
        try {
          l.send(tt(y, { origin: t }));
        } catch (w) {
          dc(b, w, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      var M = Xi(b, y, w), C = false;
      return e.then(function(A) {
        C || (M.next(A), !C && M.complete());
      }, function(A) {
        C || M.error(A);
      }), { unsubscribe: function() {
        return C = true;
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
    return this.children.set(t, v), v;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, d = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), b, y = u(function(C) {
      b = C, v.forEach(function(A) {
        return A(C);
      }), !c && l.send(tt(C, { origin: t }));
    }, "receive"), w;
    try {
      w = e(y, function(C) {
        d.add(C);
      });
    } catch (C) {
      this.send(On(t, C));
    }
    if (Hs(w))
      return this.spawnPromise(w, t);
    var M = (i = { id: t, send: function(C) {
      return d.forEach(function(A) {
        return A(C);
      });
    }, subscribe: function(C) {
      var A = Xi(C);
      return v.add(A.next), { unsubscribe: function() {
        v.delete(A.next);
      } };
    }, stop: function() {
      c = true, Te(w) && w();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return b;
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, M), M;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, d = e.subscribe(function(b) {
      c = b, l.send(tt(b, { origin: t }));
    }, function(b) {
      l.removeChild(t), l.send(tt(On(t, b), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(tt(si(t), { origin: t }));
    }), v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      return e.subscribe(b, y, w);
    }, stop: function() {
      return d.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      qe || Ue(false, "No implementation found for activity '".concat(e.type, "'"));
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
    var e = Aa();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Pc(this);
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
  var t = new zc(r, e);
  return t;
}
u(at, "interpret");
function nh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
u(nh, "toInvokeSource");
function to(r) {
  return Y(Y({ type: Hi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ti(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: Hi, src: nh(r.src) });
  } });
}
u(to, "toInvokeDefinition");
var ci = "";
var Js = "#";
var ro = "*";
var li = {};
var ui = u(function(r) {
  return r[0] === Js;
}, "isStateId");
var ih = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var oh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Cr(c.target));
  }), l = e === ci ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Dc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(ih(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ga), this.id = this.config.id || De([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d = this.config.schema) !== null && d !== void 0 ? d : {}, this.description = this.config.description, qe || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? oi(this.config.states, function(y, w) {
      var M, C = new r(y, {}, void 0, { parent: c, key: w });
      return Object.assign(c.idMap, Y((M = {}, M[C.id] = C, M), C.idMap)), C;
    }) : li;
    var v = 0;
    function b(y) {
      var w, M;
      y.order = v++;
      try {
        for (var C = ve(Mn(y)), A = C.next(); !A.done; A = C.next()) {
          var z = A.value;
          b(z);
        }
      } catch (S) {
        w = { error: S };
      } finally {
        try {
          A && !A.done && (M = C.return) && M.call(C);
        } finally {
          if (w)
            throw w.error;
        }
      }
    }
    u(b, "dfs"), b(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var w = y.event;
      return w === ci;
    }) : ci in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ht(this.config.entry || this.config.onEntry).map(function(y) {
      return ai(y);
    }), this.onExit = Ht(this.config.exit || this.config.onExit).map(function(y) {
      return ai(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ht(this.config.invoke).map(function(y, w) {
      var M, C;
      if (Cr(y)) {
        var A = Yi(c.id, w);
        return c.machine.options.services = Y((M = {}, M[A] = y, M), c.machine.options.services), to({ src: A, id: A });
      } else if (ge(y.src)) {
        var A = y.id || Yi(c.id, w);
        return to(Y(Y({}, y), { id: A, src: y.src }));
      } else if (Cr(y.src) || Te(y.src)) {
        var A = y.id || Yi(c.id, w);
        return c.machine.options.services = Y((C = {}, C[A] = y.src, C), c.machine.options.services), to(Y(Y({ id: A }, y), { src: A }));
      } else {
        var z = y.src;
        return to(Y(Y({ id: Yi(c.id, w) }, y), { src: z }));
      }
    }), this.activities = Ht(this.config.activities).concat(this.invoke).map(function(y) {
      return Ma(y);
    }), this.transition = this.transition.bind(this), this.tags = Ht(this.config.tags);
  }
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Us(this).forEach(function(e) {
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
      return t ? c : c || l.eventType === ro;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, d) {
      var v = Te(c) ? "".concat(e.id, ":delay[").concat(d, "]") : c, b = gc(v, e.id);
      return e.onEntry.push(Fs(b, { delay: c })), e.onExit.push(hc(b)), b;
    }, "mutateEntryExit"), l = Lr(t) ? t.map(function(c, d) {
      var v = i(c.delay, d);
      return Y(Y({}, c), { event: v });
    }) : Ne(Object.keys(t).map(function(c, d) {
      var v = t[c], b = ge(v) ? { target: v } : v, y = isNaN(+c) ? c : +c, w = i(y, d);
      return Ht(b).map(function(M) {
        return Y(Y({}, M), { event: w, delay: y });
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
    var l = e instanceof br ? e.value : ii(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var d = Object.keys(l), v = [this];
    return v.push.apply(v, De([], me(Ne(d.map(function(b) {
      return i.getStateNode(b).getStateNodes(l[b]);
    }))), false)), v;
  }, r.prototype.handles = function(e) {
    var t = xa(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof br ? e : br.create(e), i = Array.from(An([], this.getStateNodes(t.value)));
    return new br(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: Pn(i, this), tags: Vs(i), machine: this.machine }));
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
          var M = this.getStateNode(y), C = M._transition(w, t, i);
          C && (d[y] = C);
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
    var A = Object.keys(d).map(function(I) {
      return d[I];
    }), z = Ne(A.map(function(I) {
      return I.transitions;
    })), S = A.some(function(I) {
      return I.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var _ = Ne(A.map(function(I) {
      return I.entrySet;
    })), P = Ne(Object.keys(d).map(function(I) {
      return d[I].configuration;
    }));
    return { transitions: z, entrySet: _, exitSet: Ne(A.map(function(I) {
      return I.exitSet;
    })), configuration: P, source: t, actions: Ne(Object.keys(d).map(function(I) {
      return d[I].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, tt(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, d = t.name, v = [], b = [], y;
    try {
      for (var w = ve(this.getCandidates(d)), M = w.next(); !M.done; M = w.next()) {
        var C = M.value, A = C.cond, z = C.in, S = e.context, _ = z ? ge(z) && ui(z) ? e.matches(ii(this.getStateNodeById(z).path, this.delimiter)) : Wi(ii(z, this.delimiter), rc(this.path.slice(0, -2))(e.value)) : true, P = false;
        try {
          P = !A || Ta(this.machine, A, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(A.name || A.type, "' in transition for event '").concat(d, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (P && _) {
          C.target !== void 0 && (b = C.target), v.push.apply(v, De([], me(C.actions), false)), y = C;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        M && !M.done && (l = w.return) && l.call(w);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!b.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: v };
      var I = Ne(b.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), q = !!y.internal, E = q ? [] : Ne(I.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: q ? [] : [this], configuration: I, source: e, actions: v };
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
    var c, d, v, b, y = An([], l ? this.getStateNodes(l.value) : [this]), w = e.configuration.length ? An(y, e.configuration) : y;
    try {
      for (var M = ve(w), C = M.next(); !C.done; C = M.next()) {
        var A = C.value;
        Qi(y, A) || e.entrySet.push(A);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        C && !C.done && (d = M.return) && d.call(M);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var z = ve(y), S = z.next(); !S.done; S = z.next()) {
        var A = S.value;
        (!Qi(w, A) || Qi(e.exitSet, A.parent)) && e.exitSet.push(A);
      }
    } catch (X) {
      v = { error: X };
    } finally {
      try {
        S && !S.done && (b = z.return) && b.call(z);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var _ = Ne(e.entrySet.map(function(X) {
      var V = [];
      if (X.type !== "final")
        return V;
      var H = X.parent;
      if (!H.parent)
        return V;
      V.push(Ji(X.id, X.doneData), Ji(H.id, X.doneData ? Sn(X.doneData, t, i) : void 0));
      var W = H.parent;
      return W.type === "parallel" && Mn(W).every(function(ie) {
        return Pn(e.configuration, ie);
      }) && V.push(Ji(W.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var P = new Set(e.entrySet), I = new Set(e.exitSet), q = me([Ne(Array.from(P).map(function(X) {
      return De(De([], me(X.activities.map(function(V) {
        return vc(V);
      })), false), me(X.onEntry), false);
    })).concat(_.map(fc)), Ne(Array.from(I).map(function(X) {
      return De(De([], me(X.onExit), false), me(X.activities.map(function(V) {
        return mc(V);
      })), false);
    }))], 2), E = q[0], B = q[1], R = Zi(B.concat(e.actions).concat(E), this.machine.options.actions);
    return R;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = tt(t), c;
    if (e instanceof br)
      c = i === void 0 ? e : this.resolveState(br.from(e, i));
    else {
      var d = ge(e) ? this.resolve(Fi(this.getResolvedPath(e))) : this.resolve(e), v = i != null ? i : this.machine.context;
      c = this.resolveState(br.from(d, v));
    }
    if (!qe && l.name === ro)
      throw new Error("An event cannot have the wildcard type ('".concat(ro, "')"));
    if (this.strict && !this.events.includes(l.name) && !oc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var b = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, y = An([], this.getStateNodes(c.value)), w = b.configuration.length ? An(y, b.configuration) : y;
    return b.configuration = De([], me(w), false), this.resolveTransition(b, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], me(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, d, v = this;
    l === void 0 && (l = Cn);
    var b = e.configuration, y = !t || e.transitions.length > 0, w = y ? Cc(this.machine, b) : void 0, M = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, C = this.getActions(e, i, l, t), A = t ? Y({}, t.activities) : {};
    try {
      for (var z = ve(C), S = z.next(); !S.done; S = z.next()) {
        var _ = S.value;
        _.type === Bi ? A[_.activity.id || _.activity.type] = _ : _.type === ri && (A[_.activity.id || _.activity.type] = false);
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
    var P = me(_a(this, t, i, l, C, this.machine.config.preserveActionOrder), 2), I = P[0], q = P[1], E = me(Ea(I, function(fe) {
      return fe.type === ni || fe.type === En && fe.to === tn.Internal;
    }), 2), B = E[0], R = E[1], X = I.filter(function(fe) {
      var Ye;
      return fe.type === Bi && ((Ye = fe.activity) === null || Ye === void 0 ? void 0 : Ye.type) === Hi;
    }), V = X.reduce(function(fe, Ye) {
      return fe[Ye.activity.id] = xc(Ye.activity, v.machine, q, l), fe;
    }, t ? Y({}, t.children) : {}), H = y ? e.configuration : t ? t.configuration : [], W = Pn(H, this), ie = new br({ value: w || t.value, context: q, _event: l, _sessionid: t ? t._sessionid : null, historyValue: w ? M ? lc(M, w) : void 0 : t ? t.historyValue : void 0, history: !w || e.source ? t : void 0, actions: w ? R : [], activities: w ? A : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: W, tags: Vs(H), machine: this }), oe = i !== q;
    ie.changed = l.name === $i || oe;
    var U = ie.history;
    U && delete U.history;
    var ce = !W && (this._transient || b.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ce || l.name === ci))
      return ie;
    var Re = ie;
    if (!W)
      for (ce && (Re = this.resolveRaisedTransition(Re, { type: Ju }, l)); B.length; ) {
        var We = B.shift();
        Re = this.resolveRaisedTransition(Re, We._event, l);
      }
    var Le = Re.changed || (U ? !!Re.actions.length || oe || typeof U.value != typeof Re.value || !Xs(Re.value, U.value) : void 0);
    return Re.changed = Le, Re.history = U, Re;
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
    var t = ui(e) ? e.slice(Js.length) : e;
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
      return this.initialStateValue || li;
    switch (this.type) {
      case "parallel":
        return oi(this.initialStateValue, function(c, d) {
          return c ? i.getStateNode(d).resolve(e[d] || c) : li;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? oi(e, function(c, d) {
          return c ? i.getStateNode(d).resolve(c) : li;
        }) : this.initialStateValue || {};
      default:
        return e || li;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (ui(e)) {
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
        return i.initialStateValue || li;
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
      ge(t.target) ? e = ui(t.target) ? Fi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (Ki(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return qe || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Ui(this.initialStateValue);
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
      return l ? Ne(Ui(l).map(function(d) {
        return i.getFromRelativePath(d);
      })) : i.initialStateNodes;
    }
    var c = nc(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Ui(c).map(function(d) {
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
        for (var v = ve(Object.keys(c)), b = v.next(); !b.done; b = v.next()) {
          var y = b.value, w = c[y];
          if (w.states)
            try {
              for (var M = (i = void 0, ve(w.events)), C = M.next(); !C.done; C = M.next()) {
                var A = C.value;
                d.add("".concat(A));
              }
            } catch (z) {
              i = { error: z };
            } finally {
              try {
                C && !C.done && (l = M.return) && l.call(M);
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
    var t = this, i = pc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(b) {
      return ge(b) && b[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, d = this.resolveTarget(i), v = Y(Y({}, e), { actions: Zi(Ht(e.actions)), cond: Sa(e.cond, c), target: d, source: this, internal: l, eventType: e.event, toJSON: function() {
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
      var c = this.config.on, d = ro, v = c[d], b = v === void 0 ? [] : v, y = ti(c, [typeof d == "symbol" ? d : d + ""]);
      l = Ne(Object.keys(y).map(function(I) {
        !qe && I === ci && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var q = Tn(I, y[I]);
        return qe || oh(i, I, q), q;
      }).concat(Tn(ro, b)));
    }
    var w = this.config.always ? Tn("", this.config.always) : [], M = this.config.onDone ? Tn(String(Ji(this.id)), this.config.onDone) : [];
    qe || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var C = Ne(this.invoke.map(function(I) {
      var q = [];
      return I.onDone && q.push.apply(q, De([], me(Tn(String(si(I.id)), I.onDone)), false)), I.onError && q.push.apply(q, De([], me(Tn(String(On(I.id)), I.onError)), false)), q;
    })), A = this.after, z = Ne(De(De(De(De([], me(M), false), me(C), false), me(l), false), me(w), false).map(function(I) {
      return Ht(I).map(function(q) {
        return i.formatTransition(q);
      });
    }));
    try {
      for (var S = ve(A), _ = S.next(); !_.done; _ = S.next()) {
        var P = _.value;
        z.push(P);
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
    return z;
  }, r;
}();
function gt(r, e) {
  return new Dc(r, e);
}
u(gt, "createMachine");
var no = Ko(Pa(), 1);
var Ia = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Qs = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
      this.draggableMachine = gt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, no.default)(this);
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
        (0, no.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Ia(this.dropzone), isOnPaletteDropzone: () => Qs(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Ia(this.dropzone), isTrashed: () => !this.snapped } });
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
      return ee.notNull(i), !Qs(i) && !Ia(i) ? null : i;
    }
    set snapTargets(i) {
      (0, no.default)(this).draggable({ modifiers: [no.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
  return u(e, "DraggableMixinClass"), k([G], e.prototype, "operationX", 2), k([G], e.prototype, "operationY", 2), k([G], e.prototype, "grabbed", 2), k([G], e.prototype, "dragging", 2), k([G], e.prototype, "snapped", 2), k([G], e.prototype, "bit", 2), k([G], e.prototype, "debugDraggable", 2), e;
}
u(_e, "DraggableMixin");
var In = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Rc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  return u(e, "FlaggableMixinClass"), k([G], e.prototype, "flag", 2), e;
}
u(Rc, "FlaggableMixin");
var Fe = "top";
var rt = "bottom";
var Ze = "right";
var Ve = "left";
var za = "auto";
var rn = [Fe, rt, Ze, Ve];
var qr = "start";
var zn = "end";
var Nc = "clippingParents";
var Da = "viewport";
var pi = "popper";
var Gc = "reference";
var el = rn.reduce(function(r, e) {
  return r.concat([e + "-" + qr, e + "-" + zn]);
}, []);
var ka = [].concat(rn, [za]).reduce(function(r, e) {
  return r.concat([e, e + "-" + qr, e + "-" + zn]);
}, []);
var ah = "beforeRead";
var sh = "read";
var lh = "afterRead";
var uh = "beforeMain";
var ch = "main";
var ph = "afterMain";
var dh = "beforeWrite";
var fh = "write";
var hh = "afterWrite";
var Lc = [ah, sh, lh, uh, ch, ph, dh, fh, hh];
function st(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
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
u(Xe, "getWindow");
function Or(r) {
  var e = Xe(r).Element;
  return r instanceof e || r instanceof Element;
}
u(Or, "isElement");
function nt(r) {
  var e = Xe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
u(nt, "isHTMLElement");
function Ra(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Xe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
u(Ra, "isShadowRoot");
function vh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !nt(c) || !st(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(d) {
      var v = l[d];
      v === false ? c.removeAttribute(d) : c.setAttribute(d, v === true ? "" : v);
    }));
  });
}
u(vh, "applyStyles");
function mh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), v = d.reduce(function(b, y) {
        return b[y] = "", b;
      }, {});
      !nt(l) || !st(l) || (Object.assign(l.style, v), Object.keys(c).forEach(function(b) {
        l.removeAttribute(b);
      }));
    });
  };
}
u(mh, "effect");
var io = { name: "applyStyles", enabled: true, phase: "write", fn: vh, effect: mh, requires: ["computeStyles"] };
function lt(r) {
  return r.split("-")[0];
}
u(lt, "getBasePlacement");
var yr = Math.max;
var Dn = Math.min;
var jr = Math.round;
function Zt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (nt(r) && e) {
    var c = r.offsetHeight, d = r.offsetWidth;
    d > 0 && (i = jr(t.width) / d || 1), c > 0 && (l = jr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
u(Zt, "getBoundingClientRect");
function kn(r) {
  var e = Zt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
u(kn, "getLayoutRect");
function oo(r, e) {
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
u(oo, "contains");
function Ot(r) {
  return Xe(r).getComputedStyle(r);
}
u(Ot, "getComputedStyle");
function tl(r) {
  return ["table", "td", "th"].indexOf(st(r)) >= 0;
}
u(tl, "isTableElement");
function bt(r) {
  return ((Or(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
u(bt, "getDocumentElement");
function Br(r) {
  return st(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ra(r) ? r.host : null) || bt(r);
}
u(Br, "getParentNode");
function qc(r) {
  return !nt(r) || Ot(r).position === "fixed" ? null : r.offsetParent;
}
u(qc, "getTrueOffsetParent");
function gh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && nt(r)) {
    var i = Ot(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Br(r); nt(l) && ["html", "body"].indexOf(st(l)) < 0; ) {
    var c = Ot(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
u(gh, "getContainingBlock");
function xr(r) {
  for (var e = Xe(r), t = qc(r); t && tl(t) && Ot(t).position === "static"; )
    t = qc(t);
  return t && (st(t) === "html" || st(t) === "body" && Ot(t).position === "static") ? e : t || gh(r) || e;
}
u(xr, "getOffsetParent");
function Rn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
u(Rn, "getMainAxisFromPlacement");
function Nn(r, e, t) {
  return yr(r, Dn(e, t));
}
u(Nn, "within");
function jc(r, e, t) {
  var i = Nn(r, e, t);
  return i > t ? t : i;
}
u(jc, "withinMaxClamp");
function ao() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
u(ao, "getFreshSideObject");
function so(r) {
  return Object.assign({}, ao(), r);
}
u(so, "mergePaddingObject");
function lo(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
u(lo, "expandToHashMap");
var bh = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, so(typeof e != "number" ? e : lo(e, rn));
}, "toPaddingObject");
function yh(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, v = lt(t.placement), b = Rn(v), y = [Ve, Ze].indexOf(v) >= 0, w = y ? "height" : "width";
  if (!(!c || !d)) {
    var M = bh(l.padding, t), C = kn(c), A = b === "y" ? Fe : Ve, z = b === "y" ? rt : Ze, S = t.rects.reference[w] + t.rects.reference[b] - d[b] - t.rects.popper[w], _ = d[b] - t.rects.reference[b], P = xr(c), I = P ? b === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, q = S / 2 - _ / 2, E = M[A], B = I - C[w] - M[z], R = I / 2 - C[w] / 2 + q, X = Nn(E, R, B), V = b;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - R, e);
  }
}
u(yh, "arrow");
function xh(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !oo(e.elements.popper, l) || (e.elements.arrow = l));
}
u(xh, "effect");
var Bc = { name: "arrow", enabled: true, phase: "main", fn: yh, effect: xh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jt(r) {
  return r.split("-")[1];
}
u(Jt, "getVariation");
var wh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Eh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: jr(e * l) / l || 0, y: jr(t * l) / l || 0 };
}
u(Eh, "roundOffsetsByDPR");
function Hc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, d = r.offsets, v = r.position, b = r.gpuAcceleration, y = r.adaptive, w = r.roundOffsets, M = r.isFixed, C = d.x, A = C === void 0 ? 0 : C, z = d.y, S = z === void 0 ? 0 : z, _ = typeof w == "function" ? w({ x: A, y: S }) : { x: A, y: S };
  A = _.x, S = _.y;
  var P = d.hasOwnProperty("x"), I = d.hasOwnProperty("y"), q = Ve, E = Fe, B = window;
  if (y) {
    var R = xr(t), X = "clientHeight", V = "clientWidth";
    if (R === Xe(t) && (R = bt(t), Ot(R).position !== "static" && v === "absolute" && (X = "scrollHeight", V = "scrollWidth")), R = R, l === Fe || (l === Ve || l === Ze) && c === zn) {
      E = rt;
      var H = M && B.visualViewport ? B.visualViewport.height : R[X];
      S -= H - i.height, S *= b ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === rt) && c === zn) {
      q = Ze;
      var W = M && B.visualViewport ? B.visualViewport.width : R[V];
      A -= W - i.width, A *= b ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: v }, y && wh), oe = w === true ? Eh({ x: A, y: S }) : { x: A, y: S };
  if (A = oe.x, S = oe.y, b) {
    var U;
    return Object.assign({}, ie, (U = {}, U[E] = I ? "0" : "", U[q] = P ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + A + "px, " + S + "px)" : "translate3d(" + A + "px, " + S + "px, 0)", U));
  }
  return Object.assign({}, ie, (e = {}, e[E] = I ? S + "px" : "", e[q] = P ? A + "px" : "", e.transform = "", e));
}
u(Hc, "mapToStyles");
function Sh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, d = c === void 0 ? true : c, v = t.roundOffsets, b = v === void 0 ? true : v;
  if (false)
    var y;
  var w = { placement: lt(e.placement), variation: Jt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Hc(Object.assign({}, w, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d, roundOffsets: b })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Hc(Object.assign({}, w, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: b })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
u(Sh, "computeStyles");
var $c = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Sh, data: {} };
var Na = { passive: true };
function Th(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, d = i.resize, v = d === void 0 ? true : d, b = Xe(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && y.forEach(function(w) {
    w.addEventListener("scroll", t.update, Na);
  }), v && b.addEventListener("resize", t.update, Na), function() {
    c && y.forEach(function(w) {
      w.removeEventListener("scroll", t.update, Na);
    }), v && b.removeEventListener("resize", t.update, Na);
  };
}
u(Th, "effect");
var Fc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Th, data: {} };
var Ch = { left: "right", right: "left", bottom: "top", top: "bottom" };
function di(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Ch[e];
  });
}
u(di, "getOppositePlacement");
var Oh = { start: "end", end: "start" };
function Ga(r) {
  return r.replace(/start|end/g, function(e) {
    return Oh[e];
  });
}
u(Ga, "getOppositeVariationPlacement");
function Gn(r) {
  var e = Xe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
u(Gn, "getWindowScroll");
function Ln(r) {
  return Zt(bt(r)).left + Gn(r).scrollLeft;
}
u(Ln, "getWindowScrollBarX");
function rl(r) {
  var e = Xe(r), t = bt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, d = 0, v = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = i.offsetLeft, v = i.offsetTop)), { width: l, height: c, x: d + Ln(r), y: v };
}
u(rl, "getViewportRect");
function nl(r) {
  var e, t = bt(r), i = Gn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = yr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = yr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), v = -i.scrollLeft + Ln(r), b = -i.scrollTop;
  return Ot(l || t).direction === "rtl" && (v += yr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: v, y: b };
}
u(nl, "getDocumentRect");
function qn(r) {
  var e = Ot(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
u(qn, "isScrollParent");
function La(r) {
  return ["html", "body", "#document"].indexOf(st(r)) >= 0 ? r.ownerDocument.body : nt(r) && qn(r) ? r : La(Br(r));
}
u(La, "getScrollParent");
function nn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = La(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Xe(i), d = l ? [c].concat(c.visualViewport || [], qn(i) ? i : []) : i, v = e.concat(d);
  return l ? v : v.concat(nn(Br(d)));
}
u(nn, "listScrollParents");
function fi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
u(fi, "rectToClientRect");
function _h(r) {
  var e = Zt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
u(_h, "getInnerBoundingClientRect");
function Wc(r, e) {
  return e === Da ? fi(rl(r)) : Or(e) ? _h(e) : fi(nl(bt(r)));
}
u(Wc, "getClientRectFromMixedType");
function Mh(r) {
  var e = nn(Br(r)), t = ["absolute", "fixed"].indexOf(Ot(r).position) >= 0, i = t && nt(r) ? xr(r) : r;
  return Or(i) ? e.filter(function(l) {
    return Or(l) && oo(l, i) && st(l) !== "body";
  }) : [];
}
u(Mh, "getClippingParents");
function il(r, e, t) {
  var i = e === "clippingParents" ? Mh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], d = l.reduce(function(v, b) {
    var y = Wc(r, b);
    return v.top = yr(y.top, v.top), v.right = Dn(y.right, v.right), v.bottom = Dn(y.bottom, v.bottom), v.left = yr(y.left, v.left), v;
  }, Wc(r, c));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
u(il, "getClippingRect");
function uo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? lt(i) : null, c = i ? Jt(i) : null, d = e.x + e.width / 2 - t.width / 2, v = e.y + e.height / 2 - t.height / 2, b;
  switch (l) {
    case Fe:
      b = { x: d, y: e.y - t.height };
      break;
    case rt:
      b = { x: d, y: e.y + e.height };
      break;
    case Ze:
      b = { x: e.x + e.width, y: v };
      break;
    case Ve:
      b = { x: e.x - t.width, y: v };
      break;
    default:
      b = { x: e.x, y: e.y };
  }
  var y = l ? Rn(l) : null;
  if (y != null) {
    var w = y === "y" ? "height" : "width";
    switch (c) {
      case qr:
        b[y] = b[y] - (e[w] / 2 - t[w] / 2);
        break;
      case zn:
        b[y] = b[y] + (e[w] / 2 - t[w] / 2);
        break;
      default:
    }
  }
  return b;
}
u(uo, "computeOffsets");
function wr(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, d = c === void 0 ? Nc : c, v = t.rootBoundary, b = v === void 0 ? Da : v, y = t.elementContext, w = y === void 0 ? pi : y, M = t.altBoundary, C = M === void 0 ? false : M, A = t.padding, z = A === void 0 ? 0 : A, S = so(typeof z != "number" ? z : lo(z, rn)), _ = w === pi ? Gc : pi, P = r.rects.popper, I = r.elements[C ? _ : w], q = il(Or(I) ? I : I.contextElement || bt(r.elements.popper), d, b), E = Zt(r.elements.reference), B = uo({ reference: E, element: P, strategy: "absolute", placement: l }), R = fi(Object.assign({}, P, B)), X = w === pi ? R : E, V = { top: q.top - X.top + S.top, bottom: X.bottom - q.bottom + S.bottom, left: q.left - X.left + S.left, right: X.right - q.right + S.right }, H = r.modifiersData.offset;
  if (w === pi && H) {
    var W = H[l];
    Object.keys(V).forEach(function(ie) {
      var oe = [Ze, rt].indexOf(ie) >= 0 ? 1 : -1, U = [Fe, rt].indexOf(ie) >= 0 ? "y" : "x";
      V[ie] += W[U] * oe;
    });
  }
  return V;
}
u(wr, "detectOverflow");
function ol(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, d = t.padding, v = t.flipVariations, b = t.allowedAutoPlacements, y = b === void 0 ? ka : b, w = Jt(i), M = w ? v ? el : el.filter(function(z) {
    return Jt(z) === w;
  }) : rn, C = M.filter(function(z) {
    return y.indexOf(z) >= 0;
  });
  C.length === 0 && (C = M);
  var A = C.reduce(function(z, S) {
    return z[S] = wr(r, { placement: S, boundary: l, rootBoundary: c, padding: d })[lt(S)], z;
  }, {});
  return Object.keys(A).sort(function(z, S) {
    return A[z] - A[S];
  });
}
u(ol, "computeAutoPlacement");
function Ah(r) {
  if (lt(r) === za)
    return [];
  var e = di(r);
  return [Ga(r), e, Ga(e)];
}
u(Ah, "getExpandedFallbackPlacements");
function Ph(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, v = d === void 0 ? true : d, b = t.fallbackPlacements, y = t.padding, w = t.boundary, M = t.rootBoundary, C = t.altBoundary, A = t.flipVariations, z = A === void 0 ? true : A, S = t.allowedAutoPlacements, _ = e.options.placement, P = lt(_), I = P === _, q = b || (I || !z ? [di(_)] : Ah(_)), E = [_].concat(q).reduce(function(K, Et) {
      return K.concat(lt(Et) === za ? ol(e, { placement: Et, boundary: w, rootBoundary: M, padding: y, flipVariations: z, allowedAutoPlacements: S }) : Et);
    }, []), B = e.rects.reference, R = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, H = E[0], W = 0; W < E.length; W++) {
      var ie = E[W], oe = lt(ie), U = Jt(ie) === qr, ce = [Fe, rt].indexOf(oe) >= 0, Re = ce ? "width" : "height", We = wr(e, { placement: ie, boundary: w, rootBoundary: M, altBoundary: C, padding: y }), Le = ce ? U ? Ze : Ve : U ? rt : Fe;
      B[Re] > R[Re] && (Le = di(Le));
      var fe = di(Le), Ye = [];
      if (c && Ye.push(We[oe] <= 0), v && Ye.push(We[Le] <= 0, We[fe] <= 0), Ye.every(function(K) {
        return K;
      })) {
        H = ie, V = false;
        break;
      }
      X.set(ie, Ye);
    }
    if (V)
      for (var Qe = z ? 3 : 1, kt = u(function(Et) {
        var St = E.find(function(Ir) {
          var Wt = X.get(Ir);
          if (Wt)
            return Wt.slice(0, Et).every(function(fr) {
              return fr;
            });
        });
        if (St)
          return H = St, "break";
      }, "_loop"), Mt = Qe; Mt > 0; Mt--) {
        var Pr = kt(Mt);
        if (Pr === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
u(Ph, "flip");
var Uc = { name: "flip", enabled: true, phase: "main", fn: Ph, requiresIfExists: ["offset"], data: { _skip: false } };
function Vc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
u(Vc, "getSideOffsets");
function Xc(r) {
  return [Fe, Ze, rt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
u(Xc, "isAnySideFullyClipped");
function Ih(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, d = wr(e, { elementContext: "reference" }), v = wr(e, { altBoundary: true }), b = Vc(d, i), y = Vc(v, l, c), w = Xc(b), M = Xc(y);
  e.modifiersData[t] = { referenceClippingOffsets: b, popperEscapeOffsets: y, isReferenceHidden: w, hasPopperEscaped: M }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": w, "data-popper-escaped": M });
}
u(Ih, "hide");
var Yc = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ih };
function zh(r, e, t) {
  var i = lt(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d = c[0], v = c[1];
  return d = d || 0, v = (v || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: v, y: d } : { x: d, y: v };
}
u(zh, "distanceAndSkiddingToXY");
function Dh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, d = ka.reduce(function(w, M) {
    return w[M] = zh(M, e.rects, c), w;
  }, {}), v = d[e.placement], b = v.x, y = v.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += b, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d;
}
u(Dh, "offset");
var Zc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Dh };
function kh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = uo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
u(kh, "popperOffsets");
var Jc = { name: "popperOffsets", enabled: true, phase: "read", fn: kh, data: {} };
function al(r) {
  return r === "x" ? "y" : "x";
}
u(al, "getAltAxis");
function Rh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, v = d === void 0 ? false : d, b = t.boundary, y = t.rootBoundary, w = t.altBoundary, M = t.padding, C = t.tether, A = C === void 0 ? true : C, z = t.tetherOffset, S = z === void 0 ? 0 : z, _ = wr(e, { boundary: b, rootBoundary: y, padding: M, altBoundary: w }), P = lt(e.placement), I = Jt(e.placement), q = !I, E = Rn(P), B = al(E), R = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, H = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, W = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ie = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!R) {
    if (c) {
      var U, ce = E === "y" ? Fe : Ve, Re = E === "y" ? rt : Ze, We = E === "y" ? "height" : "width", Le = R[E], fe = Le + _[ce], Ye = Le - _[Re], Qe = A ? -V[We] / 2 : 0, kt = I === qr ? X[We] : V[We], Mt = I === qr ? -V[We] : -X[We], Pr = e.elements.arrow, K = A && Pr ? kn(Pr) : { width: 0, height: 0 }, Et = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ao(), St = Et[ce], Ir = Et[Re], Wt = Nn(0, X[We], K[We]), fr = q ? X[We] / 2 - Qe - Wt - St - W.mainAxis : kt - Wt - St - W.mainAxis, hr = q ? -X[We] / 2 + Qe + Wt + Ir + W.mainAxis : Mt + Wt + Ir + W.mainAxis, Rt = e.elements.arrow && xr(e.elements.arrow), Fn = Rt ? E === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0 : 0, At = (U = ie == null ? void 0 : ie[E]) != null ? U : 0, un = Le + fr - At - Fn, xe = Le + hr - At, Wr = Nn(A ? Dn(fe, un) : fe, Le, A ? yr(Ye, xe) : Ye);
      R[E] = Wr, oe[E] = Wr - Le;
    }
    if (v) {
      var Ur, Pt = E === "x" ? Fe : Ve, cn = E === "x" ? rt : Ze, vr = R[B], mr = B === "y" ? "height" : "width", pn = vr + _[Pt], ct = vr - _[cn], zr = [Fe, Ve].indexOf(P) !== -1, Nt = (Ur = ie == null ? void 0 : ie[B]) != null ? Ur : 0, Wn = zr ? pn : vr - X[mr] - V[mr] - Nt + W.altAxis, Dr = zr ? vr + X[mr] + V[mr] - Nt - W.altAxis : ct, dn = A && zr ? jc(Wn, vr, Dr) : Nn(A ? Wn : pn, vr, A ? Dr : ct);
      R[B] = dn, oe[B] = dn - vr;
    }
    e.modifiersData[i] = oe;
  }
}
u(Rh, "preventOverflow");
var Kc = { name: "preventOverflow", enabled: true, phase: "main", fn: Rh, requiresIfExists: ["offset"] };
function sl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
u(sl, "getHTMLElementScroll");
function ll(r) {
  return r === Xe(r) || !nt(r) ? Gn(r) : sl(r);
}
u(ll, "getNodeScroll");
function Nh(r) {
  var e = r.getBoundingClientRect(), t = jr(e.width) / r.offsetWidth || 1, i = jr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
u(Nh, "isElementScaled");
function ul(r, e, t) {
  t === void 0 && (t = false);
  var i = nt(e), l = nt(e) && Nh(e), c = bt(e), d = Zt(r, l), v = { scrollLeft: 0, scrollTop: 0 }, b = { x: 0, y: 0 };
  return (i || !i && !t) && ((st(e) !== "body" || qn(c)) && (v = ll(e)), nt(e) ? (b = Zt(e, true), b.x += e.clientLeft, b.y += e.clientTop) : c && (b.x = Ln(c))), { x: d.left + v.scrollLeft - b.x, y: d.top + v.scrollTop - b.y, width: d.width, height: d.height };
}
u(ul, "getCompositeRect");
function Gh(r) {
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
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
u(Gh, "order");
function cl(r) {
  var e = Gh(r);
  return Lc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
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
u(dl, "mergeByName");
var Qc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ep() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
u(ep, "areValidElements");
function tp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? Qc : l;
  return u(function(v, b, y) {
    y === void 0 && (y = c);
    var w = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qc, c), modifiersData: {}, elements: { reference: v, popper: b }, attributes: {}, styles: {} }, M = [], C = false, A = { state: w, setOptions: u(function(P) {
      var I = typeof P == "function" ? P(w.options) : P;
      S(), w.options = Object.assign({}, c, w.options, I), w.scrollParents = { reference: Or(v) ? nn(v) : v.contextElement ? nn(v.contextElement) : [], popper: nn(b) };
      var q = cl(dl([].concat(i, w.options.modifiers)));
      if (w.orderedModifiers = q.filter(function(ie) {
        return ie.enabled;
      }), false) {
        var E;
        if (getBasePlacement(w.options.placement) === auto)
          var B;
        var R, X, V, H, W;
      }
      return z(), A.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!C) {
        var P = w.elements, I = P.reference, q = P.popper;
        if (!!ep(I, q)) {
          w.rects = { reference: ul(I, xr(q), w.options.strategy === "fixed"), popper: kn(q) }, w.reset = false, w.placement = w.options.placement, w.orderedModifiers.forEach(function(ie) {
            return w.modifiersData[ie.name] = Object.assign({}, ie.data);
          });
          for (var E = 0, B = 0; B < w.orderedModifiers.length; B++) {
            if (w.reset === true) {
              w.reset = false, B = -1;
              continue;
            }
            var R = w.orderedModifiers[B], X = R.fn, V = R.options, H = V === void 0 ? {} : V, W = R.name;
            typeof X == "function" && (w = X({ state: w, options: H, name: W, instance: A }) || w);
          }
        }
      }
    }, "forceUpdate"), update: pl(function() {
      return new Promise(function(_) {
        A.forceUpdate(), _(w);
      });
    }), destroy: u(function() {
      S(), C = true;
    }, "destroy") };
    if (!ep(v, b))
      return A;
    A.setOptions(y).then(function(_) {
      !C && y.onFirstUpdate && y.onFirstUpdate(_);
    });
    function z() {
      w.orderedModifiers.forEach(function(_) {
        var P = _.name, I = _.options, q = I === void 0 ? {} : I, E = _.effect;
        if (typeof E == "function") {
          var B = E({ state: w, name: P, instance: A, options: q }), R = u(function() {
          }, "noopFn");
          M.push(B || R);
        }
      });
    }
    u(z, "runModifierEffects");
    function S() {
      M.forEach(function(_) {
        return _();
      }), M = [];
    }
    return u(S, "cleanupModifierEffects"), A;
  }, "createPopper");
}
u(tp, "popperGenerator");
var Lh = [Fc, Jc, $c, io, Zc, Uc, Kc, Bc, Yc];
var fl = tp({ defaultModifiers: Lh });
var Kt = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var qh = "tippy-box";
var pp = "tippy-content";
var jh = "tippy-backdrop";
var dp = "tippy-arrow";
var fp = "tippy-svg-arrow";
var jn = { passive: true, capture: true };
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
u(hl, "getValueAtIndexOrReturn");
function xl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
u(xl, "isType");
function vp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
u(vp, "invokeWithArgsOrReturn");
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
u(rp, "debounce");
function Bh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
u(Bh, "removeProperties");
function Hh(r) {
  return r.split(/\s+/).filter(Boolean);
}
u(Hh, "splitBySpaces");
function Bn(r) {
  return [].concat(r);
}
u(Bn, "normalizeToArray");
function np(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
u(np, "pushIfUnique");
function $h(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
u($h, "unique");
function Fh(r) {
  return r.split("-")[0];
}
u(Fh, "getBasePlacement");
function ja(r) {
  return [].slice.call(r);
}
u(ja, "arrayFrom");
function ip(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
u(ip, "removeUndefinedProps");
function hi() {
  return document.createElement("div");
}
u(hi, "div");
function Ba(r) {
  return ["Element", "Fragment"].some(function(e) {
    return xl(r, e);
  });
}
u(Ba, "isElement");
function Wh(r) {
  return xl(r, "NodeList");
}
u(Wh, "isNodeList");
function Uh(r) {
  return xl(r, "MouseEvent");
}
u(Uh, "isMouseEvent");
function Vh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
u(Vh, "isReferenceElement");
function Xh(r) {
  return Ba(r) ? [r] : Wh(r) ? ja(r) : Array.isArray(r) ? r : ja(document.querySelectorAll(r));
}
u(Xh, "getArrayOfElements");
function vl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
u(vl, "setTransitionDuration");
function op(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
u(op, "setVisibilityState");
function Yh(r) {
  var e, t = Bn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
u(Yh, "getOwnerDocument");
function Zh(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, d = l.popperState, v = l.props, b = v.interactiveBorder, y = Fh(d.placement), w = d.modifiersData.offset;
    if (!w)
      return true;
    var M = y === "bottom" ? w.top.y : 0, C = y === "top" ? w.bottom.y : 0, A = y === "right" ? w.left.x : 0, z = y === "left" ? w.right.x : 0, S = c.top - i + M > b, _ = i - c.bottom - C > b, P = c.left - t + A > b, I = t - c.right - z > b;
    return S || _ || P || I;
  });
}
u(Zh, "isCursorOutsideInteractiveBorder");
function ml(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
u(ml, "updateTransitionEndListener");
function ap(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
u(ap, "actualContains");
var _r = { isTouch: false };
var sp = 0;
function Jh() {
  _r.isTouch || (_r.isTouch = true, window.performance && document.addEventListener("mousemove", mp));
}
u(Jh, "onDocumentTouchStart");
function mp() {
  var r = performance.now();
  r - sp < 20 && (_r.isTouch = false, document.removeEventListener("mousemove", mp)), sp = r;
}
u(mp, "onDocumentMouseMove");
function Kh() {
  var r = document.activeElement;
  if (Vh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
u(Kh, "onWindowBlur");
function Qh() {
  document.addEventListener("touchstart", Jh, jn), window.addEventListener("blur", Kh);
}
u(Qh, "bindGlobalEventListeners");
var ev = typeof window != "undefined" && typeof document != "undefined";
var tv = ev ? !!window.msCrypto : false;
var rv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var nv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Er = Object.assign({ appendTo: hp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, rv, nv);
var iv = Object.keys(Er);
var ov = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    Er[i] = e[i];
  });
}, "setDefaultProps");
function gp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, d = l.defaultValue;
    if (c) {
      var v;
      i[c] = r[c] !== void 0 ? r[c] : (v = Er[c]) != null ? v : d;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
u(gp, "getExtendedPassedProps");
function av(r, e) {
  var t = e ? Object.keys(gp(Object.assign({}, Er, { plugins: e }))) : iv, i = t.reduce(function(l, c) {
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
u(av, "getDataAttributeProps");
function lp(r, e) {
  var t = Object.assign({}, e, { content: vp(e.content, [r]) }, e.ignoreAttributes ? {} : av(r, e.plugins));
  return t.aria = Object.assign({}, Er.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
u(lp, "evaluateProps");
var sv = u(function() {
  return "innerHTML";
}, "innerHTML");
function bl(r, e) {
  r[sv()] = e;
}
u(bl, "dangerouslySetInnerHTML");
function up(r) {
  var e = hi();
  return r === true ? e.className = dp : (e.className = fp, Ba(r) ? e.appendChild(r) : bl(e, r)), e;
}
u(up, "createArrowElement");
function cp(r, e) {
  Ba(e.content) ? (bl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? bl(r, e.content) : r.textContent = e.content);
}
u(cp, "setContent");
function yl(r) {
  var e = r.firstElementChild, t = ja(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(pp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(dp) || i.classList.contains(fp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(jh);
  }) };
}
u(yl, "getChildren");
function bp(r) {
  var e = hi(), t = hi();
  t.className = qh, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = hi();
  i.className = pp, i.setAttribute("data-state", "hidden"), cp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, d) {
    var v = yl(e), b = v.box, y = v.content, w = v.arrow;
    d.theme ? b.setAttribute("data-theme", d.theme) : b.removeAttribute("data-theme"), typeof d.animation == "string" ? b.setAttribute("data-animation", d.animation) : b.removeAttribute("data-animation"), d.inertia ? b.setAttribute("data-inertia", "") : b.removeAttribute("data-inertia"), b.style.maxWidth = typeof d.maxWidth == "number" ? d.maxWidth + "px" : d.maxWidth, d.role ? b.setAttribute("role", d.role) : b.removeAttribute("role"), (c.content !== d.content || c.allowHTML !== d.allowHTML) && cp(y, r.props), d.arrow ? w ? c.arrow !== d.arrow && (b.removeChild(w), b.appendChild(up(d.arrow))) : b.appendChild(up(d.arrow)) : w && b.removeChild(w);
  }
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
u(bp, "render");
bp.$$tippy = true;
var lv = 1;
var qa = [];
var gl = [];
function uv(r, e) {
  var t = lp(r, Object.assign({}, Er, gp(ip(e)))), i, l, c, d = false, v = false, b = false, y = false, w, M, C, A = [], z = rp(un, t.interactiveDebounce), S, _ = lv++, P = null, I = $h(t.plugins), q = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: _, reference: r, popper: hi(), popperInstance: P, props: t, state: q, plugins: I, clearDelayTimeouts: Wn, setProps: Dr, setContent: dn, show: yi, hide: To, hideWithInteractivity: xi, enable: zr, disable: Nt, unmount: wi, destroy: Co };
  if (!t.render)
    return E;
  var B = t.render(E), R = B.popper, X = B.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + E.id, E.popper = R, r._tippy = E, R._tippy = E;
  var V = I.map(function(j) {
    return j.fn(E);
  }), H = r.hasAttribute("aria-expanded");
  return Rt(), Qe(), Le(), fe("onCreate", [E]), t.showOnCreate && pn(), R.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", z);
  }), E;
  function W() {
    var j = E.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  u(W, "getNormalizedTouchSettings");
  function ie() {
    return W()[0] === "hold";
  }
  u(ie, "getIsCustomTouchBehavior");
  function oe() {
    var j;
    return !!((j = E.props.render) != null && j.$$tippy);
  }
  u(oe, "getIsDefaultRenderFn");
  function U() {
    return S || r;
  }
  u(U, "getCurrentTarget");
  function ce() {
    var j = U().parentNode;
    return j ? Yh(j) : document;
  }
  u(ce, "getDocument");
  function Re() {
    return yl(R);
  }
  u(Re, "getDefaultTemplateChildren");
  function We(j) {
    return E.state.isMounted && !E.state.isVisible || _r.isTouch || w && w.type === "focus" ? 0 : hl(E.props.delay, j ? 0 : 1, Er.delay);
  }
  u(We, "getDelay");
  function Le(j) {
    j === void 0 && (j = false), R.style.pointerEvents = E.props.interactive && !j ? "" : "none", R.style.zIndex = "" + E.props.zIndex;
  }
  u(Le, "handleStyles");
  function fe(j, Q, ae) {
    if (ae === void 0 && (ae = true), V.forEach(function(he) {
      he[j] && he[j].apply(he, Q);
    }), ae) {
      var ye;
      (ye = E.props)[j].apply(ye, Q);
    }
  }
  u(fe, "invokeHook");
  function Ye() {
    var j = E.props.aria;
    if (!!j.content) {
      var Q = "aria-" + j.content, ae = R.id, ye = Bn(E.props.triggerTarget || r);
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
  u(Ye, "handleAriaContentAttribute");
  function Qe() {
    if (!(H || !E.props.aria.expanded)) {
      var j = Bn(E.props.triggerTarget || r);
      j.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === U() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  u(Qe, "handleAriaExpandedAttribute");
  function kt() {
    ce().removeEventListener("mousemove", z), qa = qa.filter(function(j) {
      return j !== z;
    });
  }
  u(kt, "cleanupInteractiveMouseListeners");
  function Mt(j) {
    if (!(_r.isTouch && (b || j.type === "mousedown"))) {
      var Q = j.composedPath && j.composedPath()[0] || j.target;
      if (!(E.props.interactive && ap(R, Q))) {
        if (Bn(E.props.triggerTarget || r).some(function(ae) {
          return ap(ae, Q);
        })) {
          if (_r.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [E, j]);
        E.props.hideOnClick === true && (E.clearDelayTimeouts(), E.hide(), v = true, setTimeout(function() {
          v = false;
        }), E.state.isMounted || St());
      }
    }
  }
  u(Mt, "onDocumentPress");
  function Pr() {
    b = true;
  }
  u(Pr, "onTouchMove");
  function K() {
    b = false;
  }
  u(K, "onTouchStart");
  function Et() {
    var j = ce();
    j.addEventListener("mousedown", Mt, true), j.addEventListener("touchend", Mt, jn), j.addEventListener("touchstart", K, jn), j.addEventListener("touchmove", Pr, jn);
  }
  u(Et, "addDocumentPress");
  function St() {
    var j = ce();
    j.removeEventListener("mousedown", Mt, true), j.removeEventListener("touchend", Mt, jn), j.removeEventListener("touchstart", K, jn), j.removeEventListener("touchmove", Pr, jn);
  }
  u(St, "removeDocumentPress");
  function Ir(j, Q) {
    fr(j, function() {
      !E.state.isVisible && R.parentNode && R.parentNode.contains(R) && Q();
    });
  }
  u(Ir, "onTransitionedOut");
  function Wt(j, Q) {
    fr(j, Q);
  }
  u(Wt, "onTransitionedIn");
  function fr(j, Q) {
    var ae = Re().box;
    function ye(he) {
      he.target === ae && (ml(ae, "remove", ye), Q());
    }
    if (u(ye, "listener"), j === 0)
      return Q();
    ml(ae, "remove", M), ml(ae, "add", ye), M = ye;
  }
  u(fr, "onTransitionEnd");
  function hr(j, Q, ae) {
    ae === void 0 && (ae = false);
    var ye = Bn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, Q, ae), A.push({ node: he, eventType: j, handler: Q, options: ae });
    });
  }
  u(hr, "on");
  function Rt() {
    ie() && (hr("touchstart", At, { passive: true }), hr("touchend", xe, { passive: true })), Hh(E.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (hr(j, At), j) {
          case "mouseenter":
            hr("mouseleave", xe);
            break;
          case "focus":
            hr(tv ? "focusout" : "blur", Wr);
            break;
          case "focusin":
            hr("focusout", Wr);
            break;
        }
    });
  }
  u(Rt, "addListeners");
  function Fn() {
    A.forEach(function(j) {
      var Q = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      Q.removeEventListener(ae, ye, he);
    }), A = [];
  }
  u(Fn, "removeListeners");
  function At(j) {
    var Q, ae = false;
    if (!(!E.state.isEnabled || Ur(j) || v)) {
      var ye = ((Q = w) == null ? void 0 : Q.type) === "focus";
      w = j, S = j.currentTarget, Qe(), !E.state.isVisible && Uh(j) && qa.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d) && E.props.hideOnClick !== false && E.state.isVisible ? ae = true : pn(j), j.type === "click" && (d = !ae), ae && !ye && ct(j);
    }
  }
  u(At, "onTrigger");
  function un(j) {
    var Q = j.target, ae = U().contains(Q) || R.contains(Q);
    if (!(j.type === "mousemove" && ae)) {
      var ye = mr().concat(R).map(function(he) {
        var pt, dt = he._tippy, Vr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Vr ? { popperRect: he.getBoundingClientRect(), popperState: Vr, props: t } : null;
      }).filter(Boolean);
      Zh(ye, j) && (kt(), ct(j));
    }
  }
  u(un, "onMouseMove");
  function xe(j) {
    var Q = Ur(j) || E.props.trigger.indexOf("click") >= 0 && d;
    if (!Q) {
      if (E.props.interactive) {
        E.hideWithInteractivity(j);
        return;
      }
      ct(j);
    }
  }
  u(xe, "onMouseLeave");
  function Wr(j) {
    E.props.trigger.indexOf("focusin") < 0 && j.target !== U() || E.props.interactive && j.relatedTarget && R.contains(j.relatedTarget) || ct(j);
  }
  u(Wr, "onBlurOrFocusOut");
  function Ur(j) {
    return _r.isTouch ? ie() !== j.type.indexOf("touch") >= 0 : false;
  }
  u(Ur, "isEventListenerStopped");
  function Pt() {
    cn();
    var j = E.props, Q = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, pt = j.moveTransition, dt = oe() ? yl(R).arrow : null, Vr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : r, Ei = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(kr) {
      var Xr = kr.state;
      if (oe()) {
        var Gt = Re(), Lt = Gt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ut) {
          Ut === "placement" ? Lt.setAttribute("data-placement", Xr.placement) : Xr.attributes.popper["data-popper-" + Ut] ? Lt.setAttribute("data-" + Ut, "") : Lt.removeAttribute("data-" + Ut);
        }), Xr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, Ei];
    oe() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = fl(Vr, R, Object.assign({}, Q, { placement: ae, onFirstUpdate: C, modifiers: ft }));
  }
  u(Pt, "createPopperInstance");
  function cn() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  u(cn, "destroyPopperInstance");
  function vr() {
    var j = E.props.appendTo, Q, ae = U();
    E.props.interactive && j === hp || j === "parent" ? Q = ae.parentNode : Q = vp(j, [ae]), Q.contains(R) || Q.appendChild(R), E.state.isMounted = true, Pt();
  }
  u(vr, "mount");
  function mr() {
    return ja(R.querySelectorAll("[data-tippy-root]"));
  }
  u(mr, "getNestedPopperTree");
  function pn(j) {
    E.clearDelayTimeouts(), j && fe("onTrigger", [E, j]), Et();
    var Q = We(true), ae = W(), ye = ae[0], he = ae[1];
    _r.isTouch && ye === "hold" && he && (Q = he), Q ? i = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  u(pn, "scheduleShow");
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
  u(ct, "scheduleHide");
  function zr() {
    E.state.isEnabled = true;
  }
  u(zr, "enable");
  function Nt() {
    E.hide(), E.state.isEnabled = false;
  }
  u(Nt, "disable");
  function Wn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  u(Wn, "clearDelayTimeouts");
  function Dr(j) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, j]), Fn();
      var Q = E.props, ae = lp(r, Object.assign({}, Q, ip(j), { ignoreAttributes: true }));
      E.props = ae, Rt(), Q.interactiveDebounce !== ae.interactiveDebounce && (kt(), z = rp(un, ae.interactiveDebounce)), Q.triggerTarget && !ae.triggerTarget ? Bn(Q.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Qe(), Le(), X && X(Q, ae), E.popperInstance && (Pt(), mr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, j]);
    }
  }
  u(Dr, "setProps");
  function dn(j) {
    E.setProps({ content: j });
  }
  u(dn, "setContent");
  function yi() {
    var j = E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = _r.isTouch && !E.props.touch, he = hl(E.props.duration, 0, Er.duration);
    if (!(j || Q || ae || ye) && !U().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, oe() && (R.style.visibility = "visible"), Le(), Et(), E.state.isMounted || (R.style.transition = "none"), oe()) {
        var pt = Re(), dt = pt.box, Vr = pt.content;
        vl([dt, Vr], 0);
      }
      C = u(function() {
        var ft;
        if (!(!E.state.isVisible || y)) {
          if (y = true, R.offsetHeight, R.style.transition = E.props.moveTransition, oe() && E.props.animation) {
            var Si = Re(), kr = Si.box, Xr = Si.content;
            vl([kr, Xr], he), op([kr, Xr], "visible");
          }
          Ye(), Qe(), np(gl, E), (ft = E.popperInstance) == null || ft.forceUpdate(), fe("onMount", [E]), E.props.animation && oe() && Wt(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), vr();
    }
  }
  u(yi, "show");
  function To() {
    var j = !E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = hl(E.props.duration, 1, Er.duration);
    if (!(j || Q || ae) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d = false, oe() && (R.style.visibility = "hidden"), kt(), St(), Le(true), oe()) {
        var he = Re(), pt = he.box, dt = he.content;
        E.props.animation && (vl([pt, dt], ye), op([pt, dt], "hidden"));
      }
      Ye(), Qe(), E.props.animation ? oe() && Ir(ye, E.unmount) : E.unmount();
    }
  }
  u(To, "hide");
  function xi(j) {
    ce().addEventListener("mousemove", z), np(qa, z), z(j);
  }
  u(xi, "hideWithInteractivity");
  function wi() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (cn(), mr().forEach(function(j) {
      j._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), gl = gl.filter(function(j) {
      return j !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  u(wi, "unmount");
  function Co() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), Fn(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  u(Co, "destroy");
}
u(uv, "createTippy");
function vi(r, e) {
  e === void 0 && (e = {});
  var t = Er.plugins.concat(e.plugins || []);
  Qh();
  var i = Object.assign({}, e, { plugins: t }), l = Xh(r);
  if (false)
    var c, d;
  var v = l.reduce(function(b, y) {
    var w = y && uv(y, i);
    return w && b.push(w), b;
  }, []);
  return Ba(r) ? v[0] : v;
}
u(vi, "tippy");
vi.defaultProps = Er;
vi.setDefaultProps = ov;
vi.currentInput = _r;
var cv = Object.assign({}, io, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var yp = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], d = [], v, b = t.overrides, y = [], w = false;
  function M() {
    d = l.map(function(E) {
      return Bn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  u(M, "setTriggerTargets");
  function C() {
    c = l.map(function(E) {
      return E.reference;
    });
  }
  u(C, "setReferences");
  function A(E) {
    l.forEach(function(B) {
      E ? B.enable() : B.disable();
    });
  }
  u(A, "enableInstances");
  function z(E) {
    return l.map(function(B) {
      var R = B.setProps;
      return B.setProps = function(X) {
        R(X), B.reference === v && E.setProps(X);
      }, function() {
        B.setProps = R;
      };
    });
  }
  u(z, "interceptSetProps");
  function S(E, B) {
    var R = d.indexOf(B);
    if (B !== v) {
      v = B;
      var X = (b || []).concat("content").reduce(function(V, H) {
        return V[H] = l[R].props[H], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c[R]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  u(S, "prepareInstance"), A(false), C(), M();
  var _ = { fn: u(function() {
    return { onDestroy: u(function() {
      A(true);
    }, "onDestroy"), onHidden: u(function() {
      v = null;
    }, "onHidden"), onClickOutside: u(function(R) {
      R.props.showOnCreate && !w && (w = true, v = null);
    }, "onClickOutside"), onShow: u(function(R) {
      R.props.showOnCreate && !w && (w = true, S(R, c[0]));
    }, "onShow"), onTrigger: u(function(R, X) {
      S(R, X.currentTarget);
    }, "onTrigger") };
  }, "fn") }, P = vi(hi(), Object.assign({}, Bh(t, ["overrides"]), { plugins: [_].concat(t.plugins || []), triggerTarget: d, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [cv]) }) })), I = P.show;
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
    var B = c.indexOf(v), R = c[B - 1] || E;
    P.show(R);
  };
  var q = P.setProps;
  return P.setProps = function(E) {
    b = E.overrides || b, q(E);
  }, P.setInstances = function(E) {
    A(true), y.forEach(function(B) {
      return B();
    }), l = E, A(false), C(), M(), y = z(P), P.setProps({ triggerTarget: d });
  }, y = z(P), P;
}, "createSingleton");
vi.setDefaultProps({ render: bp });
var xt = vi;
var wl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Me(r) {
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
  return u(e, "HelpableMixinClass"), k([G], e.prototype, "help", 2), k([G], e.prototype, "helpId", 2), k([G], e.prototype, "debugHelpable", 2), e;
}
u(Me, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  return u(e, "HoverableMixinClass"), k([G], e.prototype, "hoverable", 2), e;
}
u(we, "HoverableMixin");
function* Ha(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
u(Ha, "parse");
var xp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var on = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Mr;
var $a;
var Hr = class {
  constructor(e, t) {
    this.expression = t, Mr.set(this, void 0), $a.set(this, ""), xp(this, Mr, e, "f"), on(this, Mr, "f").updateParent("");
  }
  get attributeName() {
    return on(this, Mr, "f").attr.name;
  }
  get attributeNamespace() {
    return on(this, Mr, "f").attr.namespaceURI;
  }
  get value() {
    return on(this, $a, "f");
  }
  set value(e) {
    xp(this, $a, e || "", "f"), on(this, Mr, "f").updateParent(e);
  }
  get element() {
    return on(this, Mr, "f").element;
  }
  get booleanValue() {
    return on(this, Mr, "f").booleanValue;
  }
  set booleanValue(e) {
    on(this, Mr, "f").booleanValue = e;
  }
};
u(Hr, "AttributeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap();
var co = class {
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
u(co, "AttributeValueSetter");
var wp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var mi = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Ar;
var Qt = class {
  constructor(e, t) {
    this.expression = t, Ar.set(this, void 0), wp(this, Ar, [e], "f"), e.textContent = "";
  }
  get value() {
    return mi(this, Ar, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return mi(this, Ar, "f")[0].previousSibling;
  }
  get nextSibling() {
    return mi(this, Ar, "f")[mi(this, Ar, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), mi(this, Ar, "f")[0].before(...t);
    for (let i of mi(this, Ar, "f"))
      i.remove();
    wp(this, Ar, t, "f");
  }
};
u(Qt, "NodeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap();
function po(r) {
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
u(po, "createProcessor");
function fo(r, e) {
  r.value = String(e);
}
u(fo, "processPropertyIdentity");
function Fa(r, e) {
  return typeof e == "boolean" && r instanceof Hr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
u(Fa, "processBooleanAttribute");
var El = po(fo);
var pv = po((r, e) => {
  Fa(r, e) || fo(r, e);
});
var Ep = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var Wa = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var ho;
var vo;
function* dv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new co(t, l);
          for (let d of Ha(l.value))
            if (d.type === "string")
              c.append(d.value);
            else {
              let v = new Hr(c, d.value);
              c.append(v), yield v;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Ha(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Qt(t, i.value));
        break;
      }
}
u(dv, "collectParts");
var an = class extends DocumentFragment {
  constructor(e, t, i = El) {
    var l, c;
    super();
    ho.set(this, void 0), vo.set(this, void 0), Object.getPrototypeOf(this) !== an.prototype && Object.setPrototypeOf(this, an.prototype), this.appendChild(e.content.cloneNode(true)), Ep(this, vo, Array.from(dv(this)), "f"), Ep(this, ho, i, "f"), (c = (l = Wa(this, ho, "f")).createCallback) === null || c === void 0 || c.call(l, this, Wa(this, vo, "f"), t);
  }
  update(e) {
    Wa(this, ho, "f").processCallback(this, Wa(this, vo, "f"), e);
  }
};
u(an, "TemplateInstance");
ho = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap();
var Sp = /* @__PURE__ */ new WeakSet();
function Tp(r) {
  return Sp.has(r);
}
u(Tp, "isDirective");
function Cp(r, e) {
  return Tp(e) ? (e(r), true) : false;
}
u(Cp, "processDirective");
function mo(r) {
  return (...e) => {
    let t = r(...e);
    return Sp.add(t), t;
  };
}
u(mo, "directive");
var go = /* @__PURE__ */ new WeakMap();
var bo = class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), go.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), go.get(this.element).delete(this.type));
  }
  static for(e) {
    go.has(e.element) || go.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = go.get(e.element);
    return i.has(t) ? i.get(t) : new bo(e.element, t);
  }
};
u(bo, "EventHandler");
function Op(r, e) {
  return r instanceof Hr && r.attributeName.startsWith("on") ? (bo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
u(Op, "processEvent");
function fv(r, e) {
  return e instanceof gi && r instanceof Qt ? (e.renderInto(r), true) : false;
}
u(fv, "processSubTemplate");
function hv(r, e) {
  return e instanceof DocumentFragment && r instanceof Qt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
u(hv, "processDocumentFragment");
function vv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
u(vv, "isIterable");
function mv(r, e) {
  if (!vv(e))
    return false;
  if (r instanceof Qt) {
    let t = [];
    for (let i of e)
      if (i instanceof gi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
u(mv, "processIterable");
function Ua(r, e) {
  Cp(r, e) || Fa(r, e) || Op(r, e) || fv(r, e) || hv(r, e) || mv(r, e) || fo(r, e);
}
u(Ua, "processPart");
var Sl = /* @__PURE__ */ new WeakMap();
var _p = /* @__PURE__ */ new WeakMap();
var Mp = /* @__PURE__ */ new WeakMap();
var gi = class {
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
    if (_p.get(e) !== t) {
      _p.set(e, t);
      let i = new an(t, this.values, this.processor);
      Mp.set(e, i), e instanceof Qt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Mp.get(e).update(this.values);
  }
};
u(gi, "TemplateResult");
var gv = po(Ua);
function Z(r, ...e) {
  return new gi(r, e, gv);
}
u(Z, "html");
function te(r, e) {
  r.renderInto(e);
}
u(te, "render");
var Tl = /* @__PURE__ */ new WeakMap();
var bv = mo((...r) => (e) => {
  Tl.has(e) || Tl.set(e, { i: r.length });
  let t = Tl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Ua(e, l));
    }) : i <= t.i && (t.i = i, Ua(e, r[i]));
});
var yv = mo((r) => (e) => {
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
  return u(e, "IconableMixinClass"), e;
}
u(ke, "IconableMixin");
var $r = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Je(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  return u(e, "IfableMixinClass"), k([G], e.prototype, "if", 2), e;
}
u(Je, "IfableMixin");
var Ap = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ae(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = xt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      return te(Z`${l}`, c), c;
    }
    initMenuItems(i) {
      if ($r(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        ee.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = xt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (xn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        ee.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = xt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (In(i.reference)) {
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
  return u(e, "MenuableMixinClass"), e;
}
u(Ae, "MenuableMixin");
var it = class extends Ae(Me(_e(Oe(we(HTMLElement))))) {
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
  forceSigned(e, t = 4) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
};
u(it, "BlochDisplayElement"), k([ze], it.prototype, "body", 2), k([ze], it.prototype, "vectorLine", 2), k([ze], it.prototype, "vectorEnd", 2), k([ze], it.prototype, "vector", 2), k([Bt], it.prototype, "vectorEndCircles", 2), k([G], it.prototype, "x", 2), k([G], it.prototype, "y", 2), k([G], it.prototype, "z", 2);
ne(it);
var Pp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var $t = class extends Ae(Me(_e(Be(ke(Oe(we(HTMLElement))))))) {
  get operationType() {
    return Ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Pp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ss}"`;
  }
};
u($t, "ControlGateElement");
ne($t);
var Ip = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var er = class extends Ae(Me(Je($e(_e(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ra;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Ip)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ra}<${this.if}"` : `"${ra}"`;
  }
};
u(er, "HGateElement");
ne(er);
var zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var tr = class extends Ae(Me(Rc(_e(ke(Oe(we(HTMLElement))))))) {
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
        ${this.iconHtml(zp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${da}"` : `"${da}>${this.flag}"`;
  }
};
u(tr, "MeasurementGateElement"), k([G], tr.prototype, "value", 2);
ne(tr);
var Dp = `<svg
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
var rr = class extends Ae(Me(Je($e(en(_e(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return aa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Dp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${aa}"` : `"${aa}(${this.angle.replace("/", "_")})"`;
  }
};
u(rr, "PhaseGateElement");
ne(rr);
var kp = `<svg
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
var nr = class extends Ae(Me(Je($e(_e(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return la;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${la}<${this.if}"` : `"${la}"`;
  }
};
u(nr, "RnotGateElement");
ne(nr);
var Rp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ir = class extends Ae(Me(Je($e(en(_e(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ua}"` : `"${ua}(${this.angle.replace("/", "_")})"`;
  }
};
u(ir, "RxGateElement");
ne(ir);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var or = class extends Ae(Me(Je($e(en(_e(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ca}"` : `"${ca}(${this.angle.replace("/", "_")})"`;
  }
};
u(or, "RyGateElement");
ne(or);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = class extends Ae(Me(Je($e(en(_e(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${pa}"` : `"${pa}(${this.angle.replace("/", "_")})"`;
  }
};
u(ar, "RzGateElement");
ne(ar);
var Lp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var sr = class extends Ae(Me($e(_e(Be(ke(Oe(we(HTMLElement)))))))) {
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
};
u(sr, "SwapGateElement");
ne(sr);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var lr = class extends Ae(Me(Je($e(_e(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
};
u(lr, "TGateElement");
ne(lr);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ft = class extends Ae(Me(_e(ke(Oe(we(HTMLElement)))))) {
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
        ${this.iconHtml(jp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(Ft, "WriteGateElement"), k([G], Ft.prototype, "value", 2);
ne(Ft);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ur = class extends Ae(Me(Je($e(_e(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return na;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${na}<${this.if}"` : `"${na}"`;
  }
};
u(ur, "XGateElement");
ne(ur);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var cr = class extends Ae(Me(Je($e(_e(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ia;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ia}<${this.if}"` : `"${ia}"`;
  }
};
u(cr, "YGateElement");
ne(cr);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var pr = class extends Ae(Me(Je($e(_e(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(Z`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${oa}<${this.if}"` : `"${oa}"`;
  }
};
u(pr, "ZGateElement");
ne(pr);
var ut = u((r) => r instanceof er || r instanceof ur || r instanceof cr || r instanceof pr || r instanceof rr || r instanceof lr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof $t || r instanceof it || r instanceof Ft || r instanceof tr, "isOperation");
var Fp = u((r) => r != null && r instanceof er, "isHGateElement");
var Wp = u((r) => r != null && r instanceof ur, "isXGateElement");
var Up = u((r) => r != null && r instanceof cr, "isYGateElement");
var Vp = u((r) => r != null && r instanceof pr, "isZGateElement");
var yo = u((r) => r != null && r instanceof rr, "isPhaseGateElement");
var Xp = u((r) => r != null && r instanceof lr, "isTGateElement");
var Yp = u((r) => r != null && r instanceof nr, "isRnotGateElement");
var Va = u((r) => r != null && r instanceof ir, "isRxGateElement");
var Xa = u((r) => r != null && r instanceof or, "isRyGateElement");
var Ya = u((r) => r != null && r instanceof ar, "isRzGateElement");
var Zp = u((r) => r != null && r instanceof sr, "isSwapGateElement");
var Cl = u((r) => r != null && r instanceof $t, "isControlGateElement");
var Jp = u((r) => r != null && r instanceof it, "isBlochDisplayElement");
var ST = u((r) => r != null && r instanceof Ft, "isWriteGateElement");
var Kp = u((r) => r != null && r instanceof tr, "isMeasurementGateElement");
function Qp(r) {
  return /^-?\d+$/.test(r);
}
u(Qp, "isNumeric");
function xo(r, e) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
u(xo, "forceSigned");
var Ol = class extends HTMLElement {
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
};
u(Ol, "InspectorButtonElement");
ne(Ol);
var wo = Ko(Pa(), 1);
var _l = u((r) => r !== null && r instanceof Fr, "isAngleSliderElement");
var Fr = class extends HTMLElement {
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
      t.type === "SET_ANGLE" && (this.denominator = ji(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(qu(this.angle));
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
};
u(Fr, "AngleSliderElement"), k([G], Fr.prototype, "angle", 2), k([G], Fr.prototype, "radian", 2), k([G], Fr.prototype, "denominator", 2), k([G], Fr.prototype, "disabled", 2), k([G], Fr.prototype, "debug", 2);
ne(Fr);
var _t = class extends HTMLElement {
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
    if (this.clear(), this.disableAllPanes(), $r(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), xn(e)) {
      let t = ji(e.angle);
      yo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Va(e) || Xa(e) || Ya(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    In(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    if (!_l(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!_l(t))
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
      let t, i = ji(e);
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
    Qp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(_t, "OperationInspectorElement"), k([ze], _t.prototype, "ifInput", 2), k([ze], _t.prototype, "angleInputLabel", 2), k([ze], _t.prototype, "angleInput", 2), k([ze], _t.prototype, "angleSlider", 2), k([ze], _t.prototype, "denominatorInput", 2), k([ze], _t.prototype, "denominatorVariableLabel", 2), k([ze], _t.prototype, "denominatorLabel", 2), k([ze], _t.prototype, "reduceAngleFractionCheckbox", 2), k([ze], _t.prototype, "flagInput", 2), k([G], _t.prototype, "conditionalGatePaneDisabled", 2), k([G], _t.prototype, "anglePaneDisabled", 2), k([G], _t.prototype, "conditionalFlagPaneDisabled", 2);
ne(_t);
var dr = class extends HTMLElement {
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
      let v = d.abs();
      this.setRoundedMagnitude(c, v);
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
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude" part="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase" part="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(e) {
    let t = Z``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (d) => this.qubitCircleGroup(d, (v) => this.qubitCircleGroup(v, (b) => this.qubitCircleGroup(b, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = Z`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, d = 1) => c.reduce((v, b, y) => y % d ? v : [...v, c.slice(y, y + d)], []), "arrayChunk")(e, i).map((c) => {
      let d = Z``;
      if (t)
        for (let v of t(c))
          d = Z`${d} ${v}`;
      else
        for (let v of c)
          d = Z`${d} ${this.qubitCircleHtml(v)}`;
      return i === 64 ? Z`<div class="qubit-circle-group--size${i}" data-targets="circle-notation.qubitCircleGroups">
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
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), d = t.getAttribute("data-magnitude"), v = t.getAttribute("data-phase"), b;
    l === null || c === null ? b = Yt.ZERO : b = new Yt(parseFloat(l), parseFloat(c));
    let y;
    d && parseFloat(d) === 0 ? y = 0 : y = v ? parseFloat(v) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, b, d ? parseFloat(d) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, d, v) {
    t._tippy.setContent(this.popupContent(e, i, l, c, d, v));
  }
  popupContent(e, t, i, l, c, d) {
    let v = e.querySelector(".circle-notation-popup__ket-binary"), b = e.querySelector(".circle-notation-popup__ket-decimal"), y = e.querySelector(".circle-notation-popup__amplitude-real"), w = e.querySelector(".circle-notation-popup__amplitude-imag"), M = e.querySelector(".circle-notation-popup__probability"), C = e.querySelector(".circle-notation-popup__phase");
    v && (v.textContent = t.toString(2).padStart(d, "0")), b && (b.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), w && (w.textContent = `${this.forceSigned(i.imag, 5)}i`), M && (M.textContent = `${this.forceSigned(l * l * 100, 4)}%`), C && (C.textContent = `${this.forceSigned(c, 2)}\xB0`);
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
};
u(dr, "CircleNotationElement"), k([G], dr.prototype, "qubitCount", 2), k([G], dr.prototype, "size", 2), k([G], dr.prototype, "magnitudes", 2), k([G], dr.prototype, "phases", 2), k([G], dr.prototype, "multiQubits", 2), k([G], dr.prototype, "showKets", 2), k([Bt], dr.prototype, "qubitCircles", 2), k([Bt], dr.prototype, "qubitCircleGroups", 2), k([Bt], dr.prototype, "visibleQubitCircleGroups", 2);
ne(dr);
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
var Hn = class extends HTMLElement {
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
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, d = this.getBoundingClientRect(), v = d.left + window.pageXOffset, b = d.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (v + c)}px`, i.style.top = `${t.clientY - (b + c)}px`, this.body.appendChild(i);
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
};
u(Hn, "RunCircuitButtonElement"), k([G], Hn.prototype, "running", 2), k([G], Hn.prototype, "debug", 2), k([ze], Hn.prototype, "body", 2), k([ze], Hn.prototype, "ripple", 2);
ne(Hn);
var sn = class extends HTMLElement {
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
};
u(sn, "CircuitBlockElement"), k([G], sn.prototype, "comment", 2), k([G], sn.prototype, "finalized", 2), sn = k([ne], sn);
var nd = Ko(Pa(), 1);
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
var Ml = u((r) => r != null && r instanceof wt, "isCircuitDropzoneElement");
var Eo;
var wt = class extends HTMLElement {
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
};
u(wt, "CircuitDropzoneElement"), Eo = /* @__PURE__ */ new WeakMap(), k([G], wt.prototype, "operationName", 2), k([G], wt.prototype, "inputWireQuantum", 2), k([G], wt.prototype, "outputWireQuantum", 2), k([G], wt.prototype, "connectTop", 2), k([G], wt.prototype, "connectBottom", 2), k([G], wt.prototype, "shadow", 2), k([G], wt.prototype, "debug", 2);
ne(wt);
var ln = u((r) => r != null && r instanceof Dt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let d = e(i, l, c), v = t.get(d);
  return v ? v.push(i) : t.set(d, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Dt = class extends HTMLElement {
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
    te(Z`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      wn(l.operation) && (l.operation.controls = []);
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
        if (!yo(d.operation))
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
    for (let [w, M] of Object.entries(i)) {
      let C = M.operation;
      M.connectBottom = y.some((A) => this.bit(M) < A), M.connectTop = y.some((A) => this.bit(M) > A), c === null || c !== null && parseInt(w) < c ? C.enable() : (M.connectTop = Math.max(...y) > this.bit(M), C.disable());
    }
    for (let w of t) {
      if (!wn(w.operation))
        throw new Error(`${w.operation} isn't controllable.`);
      w.operation.controls = this.controlBits(w, d, e), w.connectTop = y.some((M) => M < this.bit(w)), w.connectBottom = y.some((M) => M > this.bit(w));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((b) => Cl(b.operation) && !b.operation.disabled).map((b) => this.bit(b)), l = t.map((b) => this.bit(b)), c = i.concat(l), d = Math.min(...c), v = Math.max(...c);
    for (let b of this.freeDropzones)
      d < this.bit(b) && this.bit(b) < v && (b.connectTop = true, b.connectBottom = true);
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
    let t = 0, i = 0, l = 0, c = 0, d = 0, v = 0, b = 0, y = 0, w = 0, M = 0;
    return this.dropzones.filter((C) => C.occupied).filter((C) => wn(C.operation)).filter((C) => e === void 0 ? true : Fp(C.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Wp(C.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : Up(C.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Vp(C.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : yo(C.operation) ? (d += 1, e.maxCphaseTargetGates !== 0 && d > e.maxCphaseTargetGates ? false : !e.disableCphase) : Xp(C.operation) ? (v += 1, e.maxCtTargetGates !== 0 && v > e.maxCtTargetGates ? false : !e.disableCt) : Yp(C.operation) ? (b += 1, e.maxCrnotTargetGates !== 0 && b > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Va(C.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : Xa(C.operation) ? (w += 1, e.maxCryTargetGates !== 0 && w > e.maxCryTargetGates ? false : !e.disableCry) : Ya(C.operation) ? (M += 1, e.maxCrzTargetGates !== 0 && M > e.maxCrzTargetGates ? false : !e.disableCrz) : Zp(C.operation) ? !e.disableCswap : true);
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
        case er: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, M = b.map((A) => A.bit), C = { type: w, targets: M };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, M = b.map((A) => A.bit), C = { type: w, targets: M };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, M = b.map((A) => A.bit), C = { type: w, targets: M };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, M = b.map((A) => A.bit), C = { type: w, targets: M };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (M) => M.controls.toString())) {
                let M = w[0], C = M.operationType, A = w.map((S) => S.bit), z = { type: C, targets: A };
                v !== "" && (z.if = v), c !== "" && (z.angle = c), y !== "" && (z.controls = M.controls), e.push(z);
              }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, M = b.map((A) => A.bit), C = { type: w, targets: M };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, M = b.map((A) => A.bit), C = { type: w, targets: M };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (M) => M.controls.toString())) {
                let M = w[0], C = M.operationType, A = w.map((S) => S.bit), z = { type: C, targets: A };
                v !== "" && (z.if = v), c !== "" && (z.angle = c), y !== "" && (z.controls = M.controls), e.push(z);
              }
          break;
        }
        case or: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (M) => M.controls.toString())) {
                let M = w[0], C = M.operationType, A = w.map((S) => S.bit), z = { type: C, targets: A };
                v !== "" && (z.if = v), c !== "" && (z.angle = c), y !== "" && (z.controls = M.controls), e.push(z);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (M) => M.controls.toString())) {
                let M = w[0], C = M.operationType, A = w.map((S) => S.bit), z = { type: C, targets: A };
                v !== "" && (z.if = v), c !== "" && (z.angle = c), y !== "" && (z.controls = M.controls), e.push(z);
              }
          break;
        }
        case sr: {
          let l = i.filter((b) => !b.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, d = l[0].controls, v = { type: c, targets: [l[0].bit, l[1].bit] };
          d !== void 0 && d.length > 0 && (v.controls = d), e.push(v);
          break;
        }
        case $t: {
          let l = i.filter((d) => !d.disabled);
          if (l.length < 2 || this.operations.some((d) => wn(d) && d.controls.length > 0))
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
            let d = c.map((v) => v.bit);
            e.push({ type: c[0].operationType, targets: d });
          }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.flag)) {
            let v = d.map((w) => w.bit), y = { type: d[0].operationType, targets: v };
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
};
u(Dt, "CircuitStepElement"), k([G], Dt.prototype, "active", 2), k([G], Dt.prototype, "breakpoint", 2), k([G], Dt.prototype, "shadow", 2), k([G], Dt.prototype, "keep", 2), k([G], Dt.prototype, "debug", 2);
ne(Dt);
var bi = class extends HTMLElement {
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
        let d = this.circuit.addShadowStepAfter(c), v = d.dropzones[l.wireIndex];
        ee.notNull(v), v.append(i), v.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d.dropzones);
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
      Ap(i) && i.initMenu();
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
    if (!$r(t))
      throw new Error(`${t} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: t });
  }
  showOperationInspectorAngle(e) {
    let t = e.target;
    if (!xn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!In(t))
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
    if (ee.notNull(i), !xn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!In(i))
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
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!ln(t))
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
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
};
u(bi, "CircuitEditorElement"), k([G], bi.prototype, "debug", 2), k([ze], bi.prototype, "circuit", 2), k([ze], bi.prototype, "inspectorButton", 2);
ne(bi);
var So;
var Al = class extends HTMLElement {
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
};
u(Al, "PaletteDropzoneElement"), So = /* @__PURE__ */ new WeakMap();
ne(Al);
var se = class extends we(HTMLElement) {
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
      let d = e[0];
      i = d.targets, l = d.disabled;
    }
    let c = this.applyOperationToTargets(() => {
      let d = new rr();
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
  swap(...e) {
    let t = this.applyOperationToTargets(() => new sr(), ...e);
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
    return this.applyOperationToTargets(() => new tr(), ...e), this.resize(), this;
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
      i.dropzoneAt(l).put(new $t());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), d = l.concat(c), v = Math.max(...d) + 1, b = this.appendStepWithDropzones(v);
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
      for (let v of c) {
        switch (true) {
          case /^\|0>$/.test(v): {
            let b = new Ft();
            b.value = "0", d.appendOperation(b);
            break;
          }
          case /^\|1>$/.test(v): {
            let b = new Ft();
            b.value = "1", d.appendOperation(b);
            break;
          }
          case /^H/.test(v): {
            let b = new er();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case (/^X$/.test(v) || /^X<(.+)$/.test(v)): {
            let b = new ur();
            b.if = v.slice(2).trim(), d.appendOperation(b);
            break;
          }
          case /^Y/.test(v): {
            let b = new cr();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^Z/.test(v): {
            let b = new pr();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^P/.test(v): {
            let b = new rr();
            b.angle = this.angleParameter(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^T/.test(v): {
            let b = new lr();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^X\^½/.test(v): {
            let b = new nr();
            b.if = this.ifVariable(v.slice(3)), d.appendOperation(b);
            break;
          }
          case /^Rx/.test(v): {
            let b = new ir();
            b.angle = this.angleParameter(v.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Ry/.test(v): {
            let b = new or();
            b.angle = this.angleParameter(v.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Rz/.test(v): {
            let b = new ar();
            b.angle = this.angleParameter(v.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Swap$/.test(v): {
            let b = new sr();
            d.appendOperation(b);
            break;
          }
          case /^•$/.test(v): {
            let b = new $t();
            d.appendOperation(b);
            break;
          }
          case /^Bloch$/.test(v): {
            let b = new it();
            d.appendOperation(b);
            break;
          }
          case /^Measure/.test(v): {
            let b = new tr(), y = ((/^>(.+)$/.exec(v.slice(7)) || [])[1] || "").trim();
            b.flag = y, d.appendOperation(b);
            break;
          }
          case /^[[{](.+)$/.test(v): {
            let b = v.slice(1);
            d.remove(), t = new sn(), t.comment = b, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(v): {
            d.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (v !== 1)
              throw new Error(`Unknown operation: ${v}`);
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
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Ml(i))
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
    Ml(l) && t.push(l);
    for (let [c, d] of Object.entries(this.dropzones)) {
      let v = d.snapTarget, b = this.isVertical ? v.y : v.x, y = this.isVertical ? v.x : v.y, w = parseInt(c) % this.wireCount, M = b - e.snapRange * 0.75, C = b + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: y, y: M }) : i.push({ x: M, y }), this.snapTargets[M] === void 0 && (this.snapTargets[M] = {}), this.snapTargets[M][y] === void 0 && (this.snapTargets[M][y] = { dropzone: null, stepIndex: -1, wireIndex: w })), this.isVertical ? i.push({ x: y, y: C }) : i.push({ x: C, y }), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][y] === void 0 && (this.snapTargets[C][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: w }), (!d.occupied || d === l) && i.push(v), this.snapTargets[b] === void 0 && (this.snapTargets[b] = {}), this.snapTargets[b][y] === void 0 && (this.snapTargets[b][y] = { dropzone: d, stepIndex: null, wireIndex: w });
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
          let v = c[d];
          v.stepIndex !== null && (v.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let d = c.snapTarget, v = this.isVertical ? d.y : d.x, b = this.isVertical ? d.x : d.y;
      ee.notNull(this.snapTargets[v]), this.snapTargets[v][b] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), k([G], se.prototype, "minStepCount", 2), k([G], se.prototype, "minWireCount", 2), k([G], se.prototype, "maxWireCount", 2), k([G], se.prototype, "editing", 2), k([G], se.prototype, "updateUrl", 2), k([G], se.prototype, "json", 2), k([G], se.prototype, "circuitTitle", 2), k([G], se.prototype, "debug", 2), k([G], se.prototype, "chDisabled", 2), k([G], se.prototype, "chMaxControlGates", 2), k([G], se.prototype, "chMaxTargetGates", 2), k([G], se.prototype, "cnotDisabled", 2), k([G], se.prototype, "cnotMaxControlGates", 2), k([G], se.prototype, "cnotMaxTargetGates", 2), k([G], se.prototype, "cyDisabled", 2), k([G], se.prototype, "cyMaxControlGates", 2), k([G], se.prototype, "cyMaxTargetGates", 2), k([G], se.prototype, "czDisabled", 2), k([G], se.prototype, "czMaxControlGates", 2), k([G], se.prototype, "czMaxTargetGates", 2), k([G], se.prototype, "cphaseDisabled", 2), k([G], se.prototype, "cphaseMaxControlGates", 2), k([G], se.prototype, "cphaseMaxTargetGates", 2), k([G], se.prototype, "ctDisabled", 2), k([G], se.prototype, "ctMaxControlGates", 2), k([G], se.prototype, "ctMaxTargetGates", 2), k([G], se.prototype, "crnotDisabled", 2), k([G], se.prototype, "crnotMaxControlGates", 2), k([G], se.prototype, "crnotMaxTargetGates", 2), k([G], se.prototype, "crxDisabled", 2), k([G], se.prototype, "crxMaxControlGates", 2), k([G], se.prototype, "crxMaxTargetGates", 2), k([G], se.prototype, "cryDisabled", 2), k([G], se.prototype, "cryMaxControlGates", 2), k([G], se.prototype, "cryMaxTargetGates", 2), k([G], se.prototype, "crzDisabled", 2), k([G], se.prototype, "crzMaxControlGates", 2), k([G], se.prototype, "crzMaxTargetGates", 2), k([G], se.prototype, "cswapDisabled", 2), k([G], se.prototype, "cswapMaxControlGates", 2), k([G], se.prototype, "swapDisabled", 2), k([G], se.prototype, "controlControlDisabled", 2), k([G], se.prototype, "controlControlMaxTargetGates", 2), k([G], se.prototype, "phasePhaseDisabled", 2), k([G], se.prototype, "phasePhaseMaxTargetGates", 2), k([Bt], se.prototype, "blocks", 2);
ne(se);
var $n = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-init", this.run), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0));
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
          let v = parseInt(d), b = c.dropzoneAt(v).operation;
          if (Jp(b)) {
            let y = t.blochVectors[v];
            b.x = y[0], b.y = y[1], b.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d = t.measuredBits;
          for (let v in d) {
            let b = parseInt(v), y = c.dropzoneAt(b).operation;
            Kp(y) && (y.value = d[b].toString());
          }
        }
        for (let d of c.dropzones) {
          let v = d.operation;
          !$r(v) || v.if !== "" && (v.disabled = !t.flags[v.if]);
        }
        if (i === t.step) {
          let d = {};
          for (let v in t.amplitudes) {
            let b = t.amplitudes[v];
            d[v] = new Yt(b[0], b[1]);
          }
          (l = this.virtualizedGrid) == null || l.setAmplitudes(d);
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
      let v = [];
      return wn(d) && (v = d.controls), Math.max(...d.targets.concat(v));
    })))), l = i >= 0 ? i + 1 : 1;
    this.virtualizedGrid.qubitCount = l, this.worker.postMessage({ qubitCount: l, stepIndex: e, steps: t, targets: this.virtualizedGrid.visibleQubitCircleKets });
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
u($n, "QuantumSimulatorElement"), k([G], $n.prototype, "updateUrl", 2), k([ze], $n.prototype, "circuit", 2), k([ze], $n.prototype, "virtualizedGrid", 2), k([Bt], $n.prototype, "runCircuitButtons", 2);
ne($n);
function id(r, e = 0, { start: t = true, middle: i = true, once: l = false } = {}) {
  let c = 0, d, v = false;
  function b(...y) {
    if (v)
      return;
    let w = Date.now() - c;
    c = Date.now(), t ? (t = false, r.apply(this, y), l && b.cancel()) : (i && w < e || !i) && (clearTimeout(d), d = setTimeout(() => {
      c = Date.now(), r.apply(this, y), l && b.cancel();
    }, i ? e - w : e));
  }
  return u(b, "fn"), b.cancel = () => {
    clearTimeout(d), v = true;
  }, b;
}
u(id, "throttle");
function od(r, e = 0, { start: t = false, middle: i = false, once: l = false } = {}) {
  return id(r, e, { start: t, middle: i, once: l });
}
u(od, "debounce");
function ad(r = 0, e = {}) {
  return (t, i, l) => {
    if (!l || typeof l.value != "function")
      throw new Error("debounce can only decorate functions");
    let c = l.value;
    l.value = od(c, r, e), Object.defineProperty(t, i, l);
  };
}
u(ad, "debounce");
var Ke = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "xl";
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
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-qubit-count" && (ee.notNull(i), this.updateSize(parseInt(i)), this.updateDimension(parseInt(i)), this.redrawWindowAndInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent());
  }
  updateSize(e) {
    switch (e) {
      case 1: {
        this.size = "xl";
        break;
      }
      case 2: {
        this.size = "xl";
        break;
      }
      case 3: {
        this.vertical ? this.size = "lg" : this.size = "xl";
        break;
      }
      case 4: {
        this.vertical ? this.size = "base" : this.size = "lg";
        break;
      }
      case 5: {
        this.vertical ? this.size = "sm" : this.size = "base";
        break;
      }
      case 6: {
        this.vertical ? this.size = "xs" : this.size = "base";
        break;
      }
      case 7: {
        this.size = "xs";
        break;
      }
      case 8: {
        this.size = "xs";
        break;
      }
      case 9: {
        this.size = "xs";
        break;
      }
      case 10: {
        this.size = "xs";
        break;
      }
      case 11: {
        this.size = "xs";
        break;
      }
      case 12: {
        this.size = "xs";
        break;
      }
      case 13: {
        this.size = "xs";
        break;
      }
      case 14: {
        this.size = "xs";
        break;
      }
      case 15: {
        this.size = "xs";
        break;
      }
      case 16: {
        this.size = "xs";
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
      let d = Math.floor(c.abs() * 1e5) / 1e5, v = t.children.item(0);
      ee.notNull(v), v.style.setProperty("--magnitude", d.toString());
      let b = c.phase() / Math.PI * 180, y = t.children.item(1);
      ee.notNull(y);
      let w = Math.trunc(b);
      w < 0 && (w = 360 + w), y.style.setProperty("--phase", `-${w.toString()}deg`);
    }
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.startResizeObserver(), this.updatePadding(), this.redrawWindowAndInnerContainer(), this.maybeRedrawQubitCircles(), this.dispatchEvent(new Event("circle-notation-init", { bubbles: true }));
  }
  startResizeObserver() {
    this.detectLayoutOrientation(), new ResizeObserver(this.detectLayoutOrientation.bind(this)).observe(document.body);
  }
  detectLayoutOrientation() {
    let e = false;
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768 ? (this.vertical || (e = true), this.vertical = true) : (this.vertical && (e = true), this.vertical = false), e && (this.updateSize(this.qubitCount), this.updatePadding(), this.updateDimension(this.qubitCount), this.redrawWindowAndInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent());
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

          .virtualized-grid__window {
            overflow: auto;
          }

          .virtualized-grid__inner-container {
            position: relative;
          }

          .qubit-circle {
            position: absolute;
          }

          :host([data-size='xl']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-size='base']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-size='sm']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          :host([data-size='xs']) .qubit-circle {
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

          :host([data-size='xl']) .qubit-circle__magnitude,
          :host([data-size='lg']) .qubit-circle__magnitude,
          :host([data-size='base']) .qubit-circle__magnitude {
            border-width: 2px;
          }
          :host([data-size='sm']) .qubit-circle__magnitude,
          :host([data-size='xs']) .qubit-circle__magnitude {
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

          :host([data-size='xl']) .qubit-circle__phase,
          :host([data-size='lg']) .qubit-circle__phase,
          :host([data-size='base']) .qubit-circle__phase {
            border-width: 2px;
          }
          :host([data-size='sm']) .qubit-circle__phase,
          :host([data-size='xs']) .qubit-circle__phase {
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

          :host([data-size='xl']) .qubit-circle__phase::after,
          :host([data-size='lg']) .qubit-circle__phase::after,
          :host([data-size='base']) .qubit-circle__phase::after {
            width: 0.125rem; /* 2px */
          }
          :host([data-size='sm']) .qubit-circle__phase::after,
          :host([data-size='xs']) .qubit-circle__phase::after {
            width: 1px;
          }
        </style>

        <div
          class="virtualized-grid__window"
          data-target="virtualized-grid.window"
          data-action="scroll:virtualized-grid#maybeRedrawQubitCircles"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px"
        >
          <div
            class="virtualized-grid__inner-container"
            data-target="virtualized-grid.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px"
          ></div>
        </div>`, this.shadowRoot);
  }
  get innerHeight() {
    return this.rows * this.qubitCircleSize + this.paddingY * 2;
  }
  get innerWidth() {
    return this.cols * this.qubitCircleSize + this.paddingX * 2;
  }
  clearInnerContainer() {
    this.innerContainer !== void 0 && (this.innerContainer.textContent = "");
  }
  get qubitCirclesAreaHeight() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSize;
      case 2:
        return this.qubitCircleSize;
      case 3:
        return this.vertical ? this.qubitCircleSize * 2 : this.qubitCircleSize;
      case 4:
        return this.qubitCircleSize * 2;
      case 5:
        return this.vertical ? this.qubitCircleSize * 4 : this.qubitCircleSize * 2;
      case 6:
        return this.qubitCircleSize * 4;
      case 7:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 4;
      case 8:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 9:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 10:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 11:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 12:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 13:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 14:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 15:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 16:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      default:
        throw new Ct("unsupported qubit count", this.qubitCount);
    }
  }
  get qubitCirclesAreaWidth() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSize * 2;
      case 2:
        return this.qubitCircleSize * 4;
      case 3:
        return this.vertical ? this.qubitCircleSize * 4 : this.qubitCircleSize * 8;
      case 4:
        return this.qubitCircleSize * 8;
      case 5:
        return this.vertical ? this.qubitCircleSize * 8 : this.qubitCircleSize * 16;
      case 6:
        return this.qubitCircleSize * 16;
      case 7:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 8:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 9:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 10:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 11:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 12:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 13:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 14:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 15:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 16:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
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
    return this.vertical && this.cols > 16 && e < this.parentElement.clientWidth ? this.parentElement.clientWidth : e;
  }
  redrawWindowAndInnerContainer() {
    this.window !== void 0 && (this.window.style.height = `${this.windowHeight}px`, this.window.style.width = `${this.windowWidth}px`, this.innerContainer.style.height = `${this.innerHeight}px`, this.innerContainer.style.width = `${this.innerWidth}px`);
  }
  get qubitCircleSize() {
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
    if (this.colStartIndex === e && this.colEndIndex === t && this.rowStartIndex === i && this.rowEndIndex === l)
      return;
    let c = [];
    for (let v = i; v <= l; v++)
      for (let b = e; b <= t; b++)
        (b < this.colStartIndex || this.colEndIndex < b || v < this.rowStartIndex || this.rowEndIndex < v) && c.push({ col: b, row: v });
    this.colStartIndex = e, this.colEndIndex = t, this.rowStartIndex = i, this.rowEndIndex = l;
    let d = document.createDocumentFragment();
    for (let v of this.allQubitCircleElements(c))
      d.appendChild(v);
    this.innerContainer.appendChild(d);
    for (let v of this.qubitCircles) {
      let b = v.getAttribute("data-col"), y = v.getAttribute("data-row");
      ee.notNull(b), ee.notNull(y);
      let w = parseInt(b), M = parseInt(y);
      if (w < e || t < w || M < i || l < M) {
        let C = v._tippy;
        C !== void 0 && C.destroy(), v.remove();
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
    let t = e.col + e.row * this.cols, i = this.qubitCircleSize * e.row + this.paddingY, l = this.qubitCircleSize * e.col + this.paddingX, c = document.createElement("div");
    c.className = "qubit-circle", c.setAttribute("data-col", e.col.toString()), c.setAttribute("data-row", e.row.toString()), c.setAttribute("data-ket", t.toString()), c.setAttribute("data-targets", "virtualized-grid.qubitCircles"), c.setAttribute("data-amplitude-real", "0"), c.setAttribute("data-amplitude-imag", "0"), c.setAttribute("data-action", "mouseenter:virtualized-grid#showPopup mouseleave:virtualized-grid#hidePopup"), c.style.setProperty("top", `${i}px`), c.style.setProperty("left", `${l}px`);
    let d = document.createElement("div");
    d.className = "qubit-circle__magnitude", d.style.setProperty("--magnitude", "0");
    let v = document.createElement("div");
    return v.className = "qubit-circle__phase", c.appendChild(d), c.appendChild(v), c;
  }
  get calculateColStartIndex() {
    let e = this.window.scrollLeft;
    return e < this.paddingX ? 0 : Math.floor((e - this.paddingX) / this.qubitCircleSize);
  }
  get calculateColEndIndex() {
    let e = this.window.scrollLeft;
    return e < this.paddingX ? Math.min(this.cols - 1, Math.floor((this.windowWidth - (this.paddingX - e)) / this.qubitCircleSize)) : Math.min(this.cols - 1, Math.floor((this.windowWidth + (e - this.paddingX)) / this.qubitCircleSize));
  }
  get calculateRowStartIndex() {
    let e = this.window.scrollTop;
    return e < this.paddingY ? 0 : Math.floor((e - this.paddingY) / this.qubitCircleSize);
  }
  get calculateRowEndIndex() {
    let e = this.window.scrollTop;
    return e < this.paddingY ? Math.min(this.rows - 1, Math.floor((this.windowHeight - (this.paddingY - e)) / this.qubitCircleSize)) : Math.min(this.rows - 1, Math.floor((this.windowHeight + (e - this.paddingY)) / this.qubitCircleSize));
  }
  showPopup(e) {
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
    let v = parseInt(l), b = parseFloat(c), y = parseFloat(d), w = new Yt(b, y), M = w.abs(), C = w.phase() / Math.PI * 180, A = this.qubitCirclePopupTemplate.content.querySelector(".qubit-circle-popup-template__ket-binary"), z = this.qubitCirclePopupTemplate.content.querySelector(".qubit-circle-popup-template__ket-decimal"), S = this.qubitCirclePopupTemplate.content.querySelector(".qubit-circle-popup-template__amplitude-real"), _ = this.qubitCirclePopupTemplate.content.querySelector(".qubit-circle-popup-template__amplitude-imag"), P = this.qubitCirclePopupTemplate.content.querySelector(".qubit-circle-popup-template__probability"), I = this.qubitCirclePopupTemplate.content.querySelector(".qubit-circle-popup-template__phase");
    A && (A.textContent = v.toString(2).padStart(this.qubitCount, "0")), z && (z.textContent = v.toString()), S && (S.textContent = xo(w.real, 5)), _ && (_.textContent = `${xo(w.imag, 5)}i`), P && (P.textContent = `${xo(M * M * 100, 4)}%`), I && (I.textContent = `${xo(C, 2)}\xB0`);
    let q = document.createElement("div");
    q.appendChild(this.qubitCirclePopupTemplate.content.cloneNode(true)), i.setContent(q.innerHTML), i.show();
  }
  hidePopup(e) {
    let t = e.target;
    ee.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    ee.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
};
u(Ke, "VirtualizedGridElement"), k([G], Ke.prototype, "qubitCount", 2), k([G], Ke.prototype, "size", 2), k([G], Ke.prototype, "cols", 2), k([G], Ke.prototype, "rows", 2), k([G], Ke.prototype, "paddingX", 2), k([G], Ke.prototype, "paddingY", 2), k([G], Ke.prototype, "colStartIndex", 2), k([G], Ke.prototype, "colEndIndex", 2), k([G], Ke.prototype, "rowStartIndex", 2), k([G], Ke.prototype, "rowEndIndex", 2), k([G], Ke.prototype, "vertical", 2), k([G], Ke.prototype, "qubitCirclePopupTemplateId", 2), k([ze], Ke.prototype, "window", 2), k([ze], Ke.prototype, "innerContainer", 2), k([Bt], Ke.prototype, "qubitCircles", 2), k([ad(10)], Ke.prototype, "maybeRedrawQubitCircles", 1), Ke = k([ne], Ke);

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
