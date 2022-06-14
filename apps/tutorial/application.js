var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var jf = Object.create;
var Fi = Object.defineProperty;
var Fu = Object.getOwnPropertyDescriptor;
var Bf = Object.getOwnPropertyNames;
var Hf = Object.getPrototypeOf;
var $f = Object.prototype.hasOwnProperty;
var Ff = /* @__PURE__ */ __name((r) => Fi(r, "__esModule", { value: true }), "Ff");
var u = /* @__PURE__ */ __name((r, t) => Fi(r, "name", { value: t, configurable: true }), "u");
var oa = /* @__PURE__ */ __name((r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports), "oa");
var Wf = /* @__PURE__ */ __name((r, t, e, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let l of Bf(t))
      !$f.call(r, l) && (e || l !== "default") && Fi(r, l, { get: () => t[l], enumerable: !(i = Fu(t, l)) || i.enumerable });
  return r;
}, "Wf");
var oi = /* @__PURE__ */ __name((r, t) => Wf(Ff(Fi(r != null ? jf(Hf(r)) : {}, "default", !t && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "oi");
var A = /* @__PURE__ */ __name((r, t, e, i) => {
  for (var l = i > 1 ? void 0 : i ? Fu(t, e) : t, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(t, e, l) : f(l)) || l);
  return i && l && Fi(t, e, l), l;
}, "A");
var Wu = /* @__PURE__ */ __name((r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
}, "Wu");
var aa = /* @__PURE__ */ __name((r, t, e) => (Wu(r, t, "read from private field"), e ? e.call(r) : t.get(r)), "aa");
var sa = /* @__PURE__ */ __name((r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, "sa");
var la = /* @__PURE__ */ __name((r, t, e, i) => (Wu(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e), "la");
var Vu = oa((Ps, Uu) => {
  (function(r) {
    "use strict";
    var t = 2e3, e = { s: 1, n: 0, d: 1 };
    function i(C) {
      function P() {
        var z = Error.apply(this, arguments);
        z.name = this.name = C, this.stack = z.stack, this.message = z.message;
      }
      __name(P, "P");
      u(P, "errorConstructor");
      function k() {
      }
      __name(k, "k");
      return u(k, "IntermediateInheritor"), k.prototype = Error.prototype, P.prototype = new k(), P;
    }
    __name(i, "i");
    u(i, "createError");
    var l = _.DivisionByZero = i("DivisionByZero"), c = _.InvalidParameter = i("InvalidParameter");
    function f(C, P) {
      return isNaN(C = parseInt(C, 10)) && b(), C * P;
    }
    __name(f, "f");
    u(f, "assign");
    function b() {
      throw new c();
    }
    __name(b, "b");
    u(b, "throwInvalidParam");
    function h(C) {
      for (var P = {}, k = C, z = 2, q = 4; q <= k; ) {
        for (; k % z === 0; )
          k /= z, P[z] = (P[z] || 0) + 1;
        q += 1 + 2 * z++;
      }
      return k !== C ? k > 1 && (P[k] = (P[k] || 0) + 1) : P[C] = (P[C] || 0) + 1, P;
    }
    __name(h, "h");
    u(h, "factorize");
    var p = u(function(C, P) {
      var k = 0, z = 1, q = 1, T = 0, B = 0, D = 0, U = 1, X = 1, H = 0, V = 1, it = 1, ot = 1, Y = 1e7, ct;
      if (C != null)
        if (P !== void 0)
          k = C, z = P, q = k * z;
        else
          switch (typeof C) {
            case "object": {
              "d" in C && "n" in C ? (k = C.n, z = C.d, "s" in C && (k *= C.s)) : 0 in C ? (k = C[0], 1 in C && (z = C[1])) : b(), q = k * z;
              break;
            }
            case "number": {
              if (C < 0 && (q = C, C = -C), C % 1 === 0)
                k = C;
              else if (C > 0) {
                for (C >= 1 && (X = Math.pow(10, Math.floor(1 + Math.log(C) / Math.LN10)), C /= X); V <= Y && ot <= Y; )
                  if (ct = (H + it) / (V + ot), C === ct) {
                    V + ot <= Y ? (k = H + it, z = V + ot) : ot > V ? (k = it, z = ot) : (k = H, z = V);
                    break;
                  } else
                    C > ct ? (H += it, V += ot) : (it += H, ot += V), V > Y ? (k = it, z = ot) : (k = H, z = V);
                k *= X;
              } else
                (isNaN(C) || isNaN(P)) && (z = k = NaN);
              break;
            }
            case "string":
              if (V = C.match(/\d+|./g), V === null && b(), V[H] === "-" ? (q = -1, H++) : V[H] === "+" && H++, V.length === H + 1 ? B = f(V[H++], q) : V[H + 1] === "." || V[H] === "." ? (V[H] !== "." && (T = f(V[H++], q)), H++, (H + 1 === V.length || V[H + 1] === "(" && V[H + 3] === ")" || V[H + 1] === "'" && V[H + 3] === "'") && (B = f(V[H], q), U = Math.pow(10, V[H].length), H++), (V[H] === "(" && V[H + 2] === ")" || V[H] === "'" && V[H + 2] === "'") && (D = f(V[H + 1], q), X = Math.pow(10, V[H + 1].length) - 1, H += 3)) : V[H + 1] === "/" || V[H + 1] === ":" ? (B = f(V[H], q), U = f(V[H + 2], 1), H += 3) : V[H + 3] === "/" && V[H + 1] === " " && (T = f(V[H], q), B = f(V[H + 2], q), U = f(V[H + 4], 1), H += 5), V.length <= H) {
                z = U * X, q = k = D + z * T + X * B;
                break;
              }
            default:
              b();
          }
      if (z === 0)
        throw new l();
      e.s = q < 0 ? -1 : 1, e.n = Math.abs(k), e.d = Math.abs(z);
    }, "parse");
    function m(C, P, k) {
      for (var z = 1; P > 0; C = C * C % k, P >>= 1)
        P & 1 && (z = z * C % k);
      return z;
    }
    __name(m, "m");
    u(m, "modpow");
    function x(C, P) {
      for (; P % 2 === 0; P /= 2)
        ;
      for (; P % 5 === 0; P /= 5)
        ;
      if (P === 1)
        return 0;
      for (var k = 10 % P, z = 1; k !== 1; z++)
        if (k = k * 10 % P, z > t)
          return 0;
      return z;
    }
    __name(x, "x");
    u(x, "cycleLen");
    function S(C, P, k) {
      for (var z = 1, q = m(10, k, P), T = 0; T < 300; T++) {
        if (z === q)
          return T;
        z = z * 10 % P, q = q * 10 % P;
      }
      return 0;
    }
    __name(S, "S");
    u(S, "cycleStart");
    function M(C, P) {
      if (!C)
        return P;
      if (!P)
        return C;
      for (; ; ) {
        if (C %= P, !C)
          return P;
        if (P %= C, !P)
          return C;
      }
    }
    __name(M, "M");
    u(M, "gcd");
    function _(C, P) {
      if (!(this instanceof _))
        return new _(C, P);
      p(C, P), C = M(e.d, e.n), this.s = e.s, this.n = e.n / C, this.d = e.d / C;
    }
    __name(_, "_");
    u(_, "Fraction"), _.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new _(this.n, this.d);
    }, neg: function() {
      return new _(-this.s * this.n, this.d);
    }, add: function(C, P) {
      return p(C, P), new _(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(C, P) {
      return p(C, P), new _(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(C, P) {
      return p(C, P), new _(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(C, P) {
      return p(C, P), new _(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return new _(this);
    }, mod: function(C, P) {
      return isNaN(this.n) || isNaN(this.d) ? new _(NaN) : C === void 0 ? new _(this.s * this.n % this.d, 1) : (p(C, P), e.n === 0 && this.d === 0 && _(0, 0), new _(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d));
    }, gcd: function(C, P) {
      return p(C, P), new _(M(e.n, this.n) * M(e.d, this.d), e.d * this.d);
    }, lcm: function(C, P) {
      return p(C, P), e.n === 0 && this.n === 0 ? new _() : new _(e.n * this.n, M(e.n, this.n) * M(e.d, this.d));
    }, ceil: function(C) {
      return C = Math.pow(10, C || 0), isNaN(this.n) || isNaN(this.d) ? new _(NaN) : new _(Math.ceil(C * this.s * this.n / this.d), C);
    }, floor: function(C) {
      return C = Math.pow(10, C || 0), isNaN(this.n) || isNaN(this.d) ? new _(NaN) : new _(Math.floor(C * this.s * this.n / this.d), C);
    }, round: function(C) {
      return C = Math.pow(10, C || 0), isNaN(this.n) || isNaN(this.d) ? new _(NaN) : new _(Math.round(C * this.s * this.n / this.d), C);
    }, inverse: function() {
      return new _(this.s * this.d, this.n);
    }, pow: function(C, P) {
      if (p(C, P), e.d === 1)
        return e.s < 0 ? new _(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : new _(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var k = h(this.n), z = h(this.d), q = 1, T = 1;
      for (var B in k)
        if (B !== "1") {
          if (B === "0") {
            q = 0;
            break;
          }
          if (k[B] *= e.n, k[B] % e.d === 0)
            k[B] /= e.d;
          else
            return null;
          q *= Math.pow(B, k[B]);
        }
      for (var B in z)
        if (B !== "1") {
          if (z[B] *= e.n, z[B] % e.d === 0)
            z[B] /= e.d;
          else
            return null;
          T *= Math.pow(B, z[B]);
        }
      return e.s < 0 ? new _(T, q) : new _(q, T);
    }, equals: function(C, P) {
      return p(C, P), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(C, P) {
      p(C, P);
      var k = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < k) - (k < 0);
    }, simplify: function(C) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var P = this.abs().toContinued();
      C = C || 1e-3;
      function k(T) {
        return T.length === 1 ? new _(T[0]) : k(T.slice(1)).inverse().add(T[0]);
      }
      __name(k, "k");
      u(k, "rec");
      for (var z = 0; z < P.length; z++) {
        var q = k(P.slice(0, z + 1));
        if (q.sub(this.abs()).abs().valueOf() < C)
          return q.mul(this.s);
      }
      return this;
    }, divisible: function(C, P) {
      return p(C, P), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(C) {
      var P, k = "", z = this.n, q = this.d;
      return this.s < 0 && (k += "-"), q === 1 ? k += z : (C && (P = Math.floor(z / q)) > 0 && (k += P, k += " ", z %= q), k += z, k += "/", k += q), k;
    }, toLatex: function(C) {
      var P, k = "", z = this.n, q = this.d;
      return this.s < 0 && (k += "-"), q === 1 ? k += z : (C && (P = Math.floor(z / q)) > 0 && (k += P, z %= q), k += "\\frac{", k += z, k += "}{", k += q, k += "}"), k;
    }, toContinued: function() {
      var C, P = this.n, k = this.d, z = [];
      if (isNaN(P) || isNaN(k))
        return z;
      do
        z.push(Math.floor(P / k)), C = P % k, P = k, k = C;
      while (P !== 1);
      return z;
    }, toString: function(C) {
      var P, k = this.n, z = this.d;
      if (isNaN(k) || isNaN(z))
        return "NaN";
      C = C || 15;
      var q = x(k, z), T = S(k, z, q), B = this.s === -1 ? "-" : "";
      if (B += k / z | 0, k %= z, k *= 10, k && (B += "."), q) {
        for (var D = T; D--; )
          B += k / z | 0, k %= z, k *= 10;
        B += "(";
        for (var D = q; D--; )
          B += k / z | 0, k %= z, k *= 10;
        B += ")";
      } else
        for (var D = C; k && D--; )
          B += k / z | 0, k %= z, k *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return _;
    }) : typeof Ps == "object" ? (Object.defineProperty(_, "__esModule", { value: true }), _.default = _, _.Fraction = _, Uu.exports = _) : r.Fraction = _;
  })(Ps);
});
var Ga = oa(($c, al) => {
  (function(r) {
    typeof $c == "object" && typeof al != "undefined" ? al.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
  })(function() {
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0, r.default = function(n) {
      return !(!n || !n.Window) && n instanceof n.Window;
    };
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.init = l, t.getWindow = function(n) {
      return (0, r.default)(n) ? n : (n.ownerDocument || n).defaultView || i.window;
    }, t.window = t.realWindow = void 0;
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
      return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(f, "f");
    u(f, "a"), Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
    var b = u(function(n) {
      return !!n && f(n) === "object";
    }, "s"), h = u(function(n) {
      return typeof n == "function";
    }, "l"), p = { window: function(n) {
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
      return /object|function/.test(f(o.Element)) ? n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return b(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return b(n) && n.length !== void 0 && h(n.splice);
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
    __name(x, "x");
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
    __name(S, "S");
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
    } }, _ = M;
    m.default = _;
    var C = {};
    Object.defineProperty(C, "__esModule", { value: true }), C.default = void 0;
    var P = { init: function(n) {
      var o = n;
      P.document = o.document, P.DocumentFragment = o.DocumentFragment || k, P.SVGElement = o.SVGElement || k, P.SVGSVGElement = o.SVGSVGElement || k, P.SVGElementInstance = o.SVGElementInstance || k, P.Element = o.Element || k, P.HTMLElement = o.HTMLElement || P.Element, P.Event = o.Event, P.Touch = o.Touch || k, P.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function k() {
    }
    __name(k, "k");
    u(k, "y");
    var z = P;
    C.default = z;
    var q = {};
    Object.defineProperty(q, "__esModule", { value: true }), q.default = void 0;
    var T = { init: function(n) {
      var o = C.default.Element, a = n.navigator || {};
      T.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && C.default.document instanceof n.DocumentTouch, T.supportsPointerEvent = a.pointerEnabled !== false && !!C.default.PointerEvent, T.isIOS = /iP(hone|od|ad)/.test(a.platform), T.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), T.isIe9 = /MSIE 9/.test(a.userAgent), T.isOperaMobile = a.appName === "Opera" && T.supportsTouch && /Presto/.test(a.userAgent), T.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", T.pEventTypes = T.supportsPointerEvent ? C.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, T.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = T;
    q.default = B;
    var D = {};
    function U(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(U, "U");
    u(U, "P");
    function X(n, o) {
      return t.window !== t.realWindow && (o = o.replace(/\/deep\//g, " ")), n[q.default.prefixedMatchesSelector](o);
    }
    __name(X, "X");
    u(X, "O"), Object.defineProperty(D, "__esModule", { value: true }), D.nodeContains = function(n, o) {
      if (n.contains)
        return n.contains(o);
      for (; o; ) {
        if (o === n)
          return true;
        o = o.parentNode;
      }
      return false;
    }, D.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (X(n, o))
          return n;
        n = U(n);
      }
      return null;
    }, D.parentNode = U, D.matchesSelector = X, D.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var d = n[s], v = n[o];
        if (d && s !== o)
          if (v) {
            var y = H(d), g = H(v);
            if (y !== d.ownerDocument)
              if (g !== d.ownerDocument)
                if (y !== g) {
                  a = a.length ? a : V(v);
                  var w = void 0;
                  if (v instanceof C.default.HTMLElement && d instanceof C.default.SVGElement && !(d instanceof C.default.SVGSVGElement)) {
                    if (d === g)
                      continue;
                    w = d.ownerSVGElement;
                  } else
                    w = d;
                  for (var E = V(w, v.ownerDocument), O = 0; E[O] && E[O] === a[O]; )
                    O++;
                  var I = [E[O - 1], E[O], a[O]];
                  if (I[0])
                    for (var G = I[0].lastChild; G; ) {
                      if (G === I[1]) {
                        o = s, a = E;
                        break;
                      }
                      if (G === I[2])
                        break;
                      G = G.previousSibling;
                    }
                } else
                  L = d, R = v, (parseInt(t.getWindow(L).getComputedStyle(L).zIndex, 10) || 0) >= (parseInt(t.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var L, R;
      return o;
    }, D.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (X(n, o))
          return true;
        if ((n = U(n)) === a)
          return X(n, o);
      }
      return false;
    }, D.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, D.getScrollXY = it, D.getElementClientRect = ot, D.getElementRect = function(n) {
      var o = ot(n);
      if (!q.default.isIOS7 && o) {
        var a = it(t.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, D.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = U(n);
      return o;
    }, D.trySelector = function(n) {
      return !!c.default.string(n) && (C.default.document.querySelector(n), true);
    };
    var H = u(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function V(n, o) {
      for (var a, s = [], d = n; (a = H(d)) && d !== o && a !== d.ownerDocument; )
        s.unshift(d), d = a;
      return s;
    }
    __name(V, "V");
    u(V, "E");
    function it(n) {
      return { x: (n = n || t.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(it, "it");
    u(it, "T");
    function ot(n) {
      var o = n instanceof C.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ot, "ot");
    u(ot, "M");
    var Y = {};
    Object.defineProperty(Y, "__esModule", { value: true }), Y.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ct = {};
    function Dt(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Dt, "Dt");
    u(Dt, "I");
    function Wt(n, o, a) {
      return n === "parent" ? (0, D.parentNode)(a) : n === "self" ? o.getRect(a) : (0, D.closest)(a, n);
    }
    __name(Wt, "Wt");
    u(Wt, "D"), Object.defineProperty(ct, "__esModule", { value: true }), ct.getStringOptionResult = Wt, ct.resolveRectLike = function(n, o, a, s) {
      var d, v = n;
      return c.default.string(v) ? v = Wt(v, o, a) : c.default.func(v) && (v = v.apply(void 0, function(y) {
        if (Array.isArray(y))
          return Dt(y);
      }(d = s) || function(y) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(y))
          return Array.from(y);
      }(d) || function(y, g) {
        if (y) {
          if (typeof y == "string")
            return Dt(y, g);
          var w = Object.prototype.toString.call(y).slice(8, -1);
          return w === "Object" && y.constructor && (w = y.constructor.name), w === "Map" || w === "Set" ? Array.from(y) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? Dt(y, g) : void 0;
        }
      }(d) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(v) && (v = (0, D.getElementRect)(v)), v;
    }, ct.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ct.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, Y.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    }, ct.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, Y.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ct.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    };
    var Lt = {};
    Object.defineProperty(Lt, "__esModule", { value: true }), Lt.default = function(n, o, a) {
      var s = n.options[a], d = s && s.origin || n.options.origin, v = (0, ct.resolveRectLike)(d, n, o, [n && o]);
      return (0, ct.rectToXY)(v) || { x: 0, y: 0 };
    };
    var ft = {};
    function Zt(n) {
      return n.trim().split(/ +/);
    }
    __name(Zt, "Zt");
    u(Zt, "z"), Object.defineProperty(ft, "__esModule", { value: true }), ft.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Zt(o)), c.default.array(o))
        return o.reduce(function(w, E) {
          return (0, Y.default)(w, n(E, a, s));
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
          var g = Zt(y).map(function(w) {
            return "".concat(o).concat(w);
          });
          n(g, a[y], s);
        }
      return s;
    }, "n"), "t");
    var Qt = {};
    Object.defineProperty(Qt, "__esModule", { value: true }), Qt.default = void 0, Qt.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var Ne = {};
    function Ae(n, o) {
      for (var a in o) {
        var s = Ae.prefixedPropREs, d = false;
        for (var v in s)
          if (a.indexOf(v) === 0 && s[v].test(a)) {
            d = true;
            break;
          }
        d || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    __name(Ae, "Ae");
    u(Ae, "X"), Object.defineProperty(Ne, "__esModule", { value: true }), Ne.default = void 0, Ae.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var _r = Ae;
    Ne.default = _r;
    var tt = {};
    function Te(n) {
      return n instanceof C.default.Event || n instanceof C.default.Touch;
    }
    __name(Te, "Te");
    u(Te, "W");
    function Oe(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Oe, "Oe");
    u(Oe, "L");
    function kr(n, o) {
      return o = o || { x: 0, y: 0 }, q.default.isOperaMobile && Te(n) ? (Oe("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Oe("page", n, o), o;
    }
    __name(kr, "kr");
    u(kr, "U");
    function Ve(n, o) {
      return o = o || {}, q.default.isOperaMobile && Te(n) ? Oe("screen", n, o) : Oe("client", n, o), o;
    }
    __name(Ve, "Ve");
    u(Ve, "V");
    function hr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(hr, "hr");
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
    __name(mr, "mr");
    u(mr, "q"), Object.defineProperty(tt, "__esModule", { value: true }), tt.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, tt.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, tt.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, tt.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, tt.isNativePointer = Te, tt.getXY = Oe, tt.getPageXY = kr, tt.getClientXY = Ve, tt.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, tt.setCoords = function(n, o, a) {
      var s = o.length > 1 ? mr(o) : o[0];
      kr(s, n.page), Ve(s, n.client), n.timeStamp = a;
    }, tt.getTouchPair = hr, tt.pointerAverage = mr, tt.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = hr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), d = Math.max(o[0].pageX, o[1].pageX), v = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: d, bottom: v, width: d - a, height: v - s };
    }, tt.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", d = hr(n), v = d[0][a] - d[1][a], y = d[0][s] - d[1][s];
      return (0, Qt.default)(v, y);
    }, tt.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", d = hr(n), v = d[1][a] - d[0][a], y = d[1][s] - d[0][s];
      return 180 * Math.atan2(y, v) / Math.PI;
    }, tt.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof C.default.Touch ? "touch" : "mouse";
    }, tt.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [D.getActualElement(o ? o[0] : n.target), D.getActualElement(n.currentTarget)];
    }, tt.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, tt.coordsToEvent = function(n) {
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
    }, Object.defineProperty(tt, "pointerExtend", { enumerable: true, get: function() {
      return Ne.default;
    } });
    var Ge = {};
    function Yn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Yn, "Yn");
    u(Yn, "G");
    function _e(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_e, "_e");
    u(_e, "H"), Object.defineProperty(Ge, "__esModule", { value: true }), Ge.BaseEvent = void 0;
    var fn = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _e(this, "type", void 0), _e(this, "target", void 0), _e(this, "currentTarget", void 0), _e(this, "interactable", void 0), _e(this, "_interaction", void 0), _e(this, "timeStamp", void 0), _e(this, "immediatePropagationStopped", false), _e(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Yn(o.prototype, a), n;
    }();
    Ge.BaseEvent = fn, Object.defineProperty(fn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var wt = {};
    Object.defineProperty(wt, "__esModule", { value: true }), wt.find = wt.findIndex = wt.from = wt.merge = wt.remove = wt.contains = void 0, wt.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, wt.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Yr = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    wt.merge = Yr, wt.from = function(n) {
      return Yr([], n);
    };
    var Xr = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    wt.findIndex = Xr, wt.find = function(n, o) {
      return n[Xr(n, o)];
    };
    var ke = {};
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
      return !o || hn(o) !== "object" && typeof o != "function" ? de(n) : o;
    }
    __name(mn, "mn");
    u(mn, "ot");
    function de(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(de, "de");
    u(de, "it");
    function zr(n) {
      return (zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(zr, "zr");
    u(zr, "at");
    function Le(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Le, "Le");
    u(Le, "st"), Object.defineProperty(ke, "__esModule", { value: true }), ke.DropEvent = void 0;
    var Xn = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), w && gr(g, w);
      })(y, n);
      var o, a, s, d, v = (s = y, d = function() {
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
        var g, w = zr(s);
        if (d) {
          var E = zr(this).constructor;
          g = Reflect.construct(w, arguments, E);
        } else
          g = w.apply(this, arguments);
        return mn(this, g);
      });
      function y(g, w, E) {
        var O;
        (function(R, $) {
          if (!(R instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, y), Le(de(O = v.call(this, w._interaction)), "target", void 0), Le(de(O), "dropzone", void 0), Le(de(O), "dragEvent", void 0), Le(de(O), "relatedTarget", void 0), Le(de(O), "draggable", void 0), Le(de(O), "timeStamp", void 0), Le(de(O), "propagationStopped", false), Le(de(O), "immediatePropagationStopped", false);
        var I = E === "dragleave" ? g.prev : g.cur, G = I.element, L = I.dropzone;
        return O.type = E, O.target = G, O.currentTarget = G, O.dropzone = L, O.dragEvent = w, O.relatedTarget = w.target, O.draggable = w.interactable, O.timeStamp = w.timeStamp, O;
      }
      __name(y, "y");
      return u(y, "a"), o = y, (a = [{ key: "reject", value: function() {
        var g = this, w = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && w.cur.dropzone === this.dropzone && w.cur.element === this.target)
          if (w.prev.dropzone = this.dropzone, w.prev.element = this.target, w.rejected = true, w.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var E = w.activeDrops, O = wt.findIndex(E, function(G) {
              var L = G.dropzone, R = G.element;
              return L === g.dropzone && R === g.target;
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
    }(Ge.BaseEvent);
    ke.DropEvent = Xn;
    var Rr = {};
    function vn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], d = s.dropzone, v = s.element;
        o.dropzone = d, o.target = v, d.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(vn, "vn");
    u(vn, "ct");
    function Ti(n, o) {
      for (var a = function(v, y) {
        for (var g = v.interactables, w = [], E = 0; E < g.list.length; E++) {
          var O = g.list[E];
          if (O.options.drop.enabled) {
            var I = O.options.drop.accept;
            if (!(c.default.element(I) && I !== y || c.default.string(I) && !D.matchesSelector(y, I) || c.default.func(I) && !I({ dropzone: O, draggableElement: y })))
              for (var G = c.default.string(O.target) ? O._context.querySelectorAll(O.target) : c.default.array(O.target) ? O.target : [O.target], L = 0; L < G.length; L++) {
                var R = G[L];
                R !== y && w.push({ dropzone: O, element: R, rect: O.getRect(R) });
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
    __name(Ti, "Ti");
    u(Ti, "ft");
    function _o(n, o, a) {
      for (var s = n.dropState, d = n.interactable, v = n.element, y = [], g = 0; g < s.activeDrops.length; g++) {
        var w = s.activeDrops[g], E = w.dropzone, O = w.element, I = w.rect;
        y.push(E.dropCheck(o, a, d, v, O, I) ? O : null);
      }
      var G = D.indexOfDeepestElement(y);
      return s.activeDrops[G] || null;
    }
    __name(_o, "_o");
    u(_o, "dt");
    function Oi(n, o, a) {
      var s = n.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (d.activate = new ke.DropEvent(s, a, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), a.type === "dragend" && (d.deactivate = new ke.DropEvent(s, a, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (d.leave = new ke.DropEvent(s, a, "dragleave"), a.dragLeave = d.leave.target = s.prev.element, a.prevDropzone = d.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (d.enter = new ke.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (d.drop = new ke.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (d.move = new ke.DropEvent(s, a, "dropmove"), d.move.dragmove = a, a.dropzone = s.cur.dropzone)), d;
    }
    __name(Oi, "Oi");
    u(Oi, "pt");
    function Mi(n, o) {
      var a = n.dropState, s = a.activeDrops, d = a.cur, v = a.prev;
      o.leave && v.dropzone.fire(o.leave), o.enter && d.dropzone.fire(o.enter), o.move && d.dropzone.fire(o.move), o.drop && d.dropzone.fire(o.drop), o.deactivate && vn(s, o.deactivate), a.prev.dropzone = d.dropzone, a.prev.element = d.element;
    }
    __name(Mi, "Mi");
    u(Mi, "vt");
    function ko(n, o) {
      var a = n.interaction, s = n.iEvent, d = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var v = a.dropState;
        o.dynamicDrop && (v.activeDrops = Ti(o, a.element));
        var y = s, g = _o(a, y, d);
        v.rejected = v.rejected && !!g && g.dropzone === v.cur.dropzone && g.element === v.cur.element, v.cur.dropzone = g && g.dropzone, v.cur.element = g && g.element, v.events = Oi(a, 0, y);
      }
    }
    __name(ko, "ko");
    u(ko, "ht"), Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, d = n.defaults;
      n.usePlugin(m.default), s.prototype.dropzone = function(v) {
        return function(y, g) {
          if (c.default.object(g)) {
            if (y.options.drop.enabled = g.enabled !== false, g.listeners) {
              var w = (0, ft.default)(g.listeners), E = Object.keys(w).reduce(function(O, I) {
                return O[/^(enter|leave)/.test(I) ? "drag".concat(I) : /^(activate|deactivate|move)/.test(I) ? "drop".concat(I) : I] = w[I], O;
              }, {});
              y.off(y.options.drop.listeners), y.on(E), y.options.drop.listeners = E;
            }
            return c.default.func(g.ondrop) && y.on("drop", g.ondrop), c.default.func(g.ondropactivate) && y.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && y.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && y.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && y.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && y.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? y.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (y.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (y.options.drop.accept = g.accept), "checker" in g && (y.options.drop.checker = g.checker), y;
          }
          return c.default.bool(g) ? (y.options.drop.enabled = g, y) : y.options.drop;
        }(this, v);
      }, s.prototype.dropCheck = function(v, y, g, w, E, O) {
        return function(I, G, L, R, $, J, F) {
          var nt = false;
          if (!(F = F || I.getRect(J)))
            return !!I.options.drop.checker && I.options.drop.checker(G, L, nt, I, J, R, $);
          var lt = I.options.drop.overlap;
          if (lt === "pointer") {
            var pt = (0, Lt.default)(R, $, "drag"), St = tt.getPageXY(G);
            St.x += pt.x, St.y += pt.y;
            var jt = St.x > F.left && St.x < F.right, bt = St.y > F.top && St.y < F.bottom;
            nt = jt && bt;
          }
          var kt = R.getRect($);
          if (kt && lt === "center") {
            var Ze = kt.left + kt.width / 2, Lr = kt.top + kt.height / 2;
            nt = Ze >= F.left && Ze <= F.right && Lr >= F.top && Lr <= F.bottom;
          }
          return kt && c.default.number(lt) && (nt = Math.max(0, Math.min(F.right, kt.right) - Math.max(F.left, kt.left)) * Math.max(0, Math.min(F.bottom, kt.bottom) - Math.max(F.top, kt.top)) / (kt.width * kt.height) >= lt), I.options.drop.checker && (nt = I.options.drop.checker(G, L, nt, I, J, R, $)), nt;
        }(this, v, y, g, w, E, O);
      }, a.dynamicDrop = function(v) {
        return c.default.bool(v) ? (n.dynamicDrop = v, a) : n.dynamicDrop;
      }, (0, Y.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, d.actions.drop = j.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var d = a.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = Ti(o, a.element), d.events = Oi(a, 0, s), d.events.activate && (vn(d.activeDrops, d.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": ko, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Mi(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        ko(n, o), Mi(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Ti, getDrop: _o, getDropEvents: Oi, fireDropEvents: Mi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, rt = j;
    Rr.default = rt;
    var at = {};
    function yt(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var d = o.pointers.map(function(E) {
          return E.pointer;
        }), v = s === "start", y = s === "end", g = o.interactable.options.deltaSource;
        if (a.touches = [d[0], d[1]], v)
          a.distance = tt.touchDistance(d, g), a.box = tt.touchBBox(d), a.scale = 1, a.ds = 0, a.angle = tt.touchAngle(d, g), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (y) {
          var w = o.prevEvent;
          a.distance = w.distance, a.box = w.box, a.scale = w.scale, a.ds = 0, a.angle = w.angle, a.da = 0;
        } else
          a.distance = tt.touchDistance(d, g), a.box = tt.touchBBox(d), a.scale = a.distance / o.gesture.startDistance, a.angle = tt.touchAngle(d, g), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(yt, "yt");
    u(yt, "bt"), Object.defineProperty(at, "__esModule", { value: true }), at.default = void 0;
    var ht = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(d) {
        return c.default.object(d) ? (this.options.gesture.enabled = d.enabled !== false, this.setPerAction("gesture", d), this.setOnEvents("gesture", d), this) : c.default.bool(d) ? (this.options.gesture.enabled = d, this) : this.options.gesture;
      }, o.map.gesture = ht, o.methodDict.gesture = "gesturable", s.actions.gesture = ht.defaults;
    }, listeners: { "interactions:action-start": yt, "interactions:action-move": yt, "interactions:action-end": yt, "interactions:new": function(n) {
      n.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(n) {
      if (!(n.interaction.pointers.length < 2)) {
        var o = n.interactable.options.gesture;
        if (o && o.enabled)
          return n.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, fe = ht;
    at.default = fe;
    var he = {};
    function Zr(n, o, a, s, d, v, y) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(v.width) ? v.width : v.right - v.left, w = c.default.number(v.height) ? v.height : v.bottom - v.top;
        if (y = Math.min(y, Math.abs((n === "left" || n === "right" ? g : w) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), w < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (g >= 0 ? v.left : v.right) + y;
        if (n === "top")
          return a.y < (w >= 0 ? v.top : v.bottom) + y;
        if (n === "right")
          return a.x > (g >= 0 ? v.right : v.left) - y;
        if (n === "bottom")
          return a.y > (w >= 0 ? v.bottom : v.top) - y;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : D.matchesUpTo(s, o, d));
    }
    __name(Zr, "Zr");
    u(Zr, "Pt");
    function Pi(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Pi, "Pi");
    u(Pi, "Ot"), Object.defineProperty(he, "__esModule", { value: true }), he.default = void 0;
    var me = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, d = n.defaults;
      me.cursors = function(v) {
        return v.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), me.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(v) {
        return function(y, g, w) {
          return c.default.object(g) ? (y.options.resize.enabled = g.enabled !== false, y.setPerAction("resize", g), y.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? y.options.resize.axis = g.axis : g.axis === null && (y.options.resize.axis = w.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? y.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (y.options.resize.square = g.square), y) : c.default.bool(g) ? (y.options.resize.enabled = g, y) : y.options.resize;
        }(this, v, n);
      }, o.map.resize = me, o.methodDict.resize = "resizable", d.actions.resize = me.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, v = s.rect;
          s._rects = { start: (0, Y.default)({}, v), corrected: (0, Y.default)({}, v), previous: (0, Y.default)({}, v), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = s.prepared.edges, d.rect = s._rects.corrected, d.deltaRect = s._rects.delta;
        }
      })(n), Pi(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, v = s.interactable.options.resize.invert, y = v === "reposition" || v === "negate", g = s.rect, w = s._rects, E = w.start, O = w.corrected, I = w.delta, G = w.previous;
          if ((0, Y.default)(G, O), y) {
            if ((0, Y.default)(O, g), v === "reposition") {
              if (O.top > O.bottom) {
                var L = O.top;
                O.top = O.bottom, O.bottom = L;
              }
              if (O.left > O.right) {
                var R = O.left;
                O.left = O.right, O.right = R;
              }
            }
          } else
            O.top = Math.min(g.top, E.bottom), O.bottom = Math.max(g.bottom, E.top), O.left = Math.min(g.left, E.right), O.right = Math.max(g.right, E.left);
          for (var $ in O.width = O.right - O.left, O.height = O.bottom - O.top, O)
            I[$] = O[$] - G[$];
          d.edges = s.prepared.edges, d.rect = O, d.deltaRect = I;
        }
      })(n), Pi(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, d = n.rect, v = n.buttons;
      if (d) {
        var y = (0, Y.default)({}, o.coords.cur.page), g = a.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (v & g.mouseButtons) != 0)) {
          if (c.default.object(g.edges)) {
            var w = { left: false, right: false, top: false, bottom: false };
            for (var E in w)
              w[E] = Zr(E, g.edges[E], y, o._latestPointer.eventTarget, s, d, g.margin || me.defaultMargin);
            w.left = w.left && !w.right, w.top = w.top && !w.bottom, (w.left || w.right || w.top || w.bottom) && (n.action = { name: "resize", edges: w });
          } else {
            var O = g.axis !== "y" && y.x > d.right - me.defaultMargin, I = g.axis !== "x" && y.y > d.bottom - me.defaultMargin;
            (O || I) && (n.action = { name: "resize", axes: (O ? "x" : "") + (I ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, d = me.cursors, v = null;
      if (a)
        v = d[s + a];
      else if (o) {
        for (var y = "", g = ["top", "bottom", "left", "right"], w = 0; w < g.length; w++) {
          var E = g[w];
          o[E] && (y += E);
        }
        v = d[y];
      }
      return v;
    }, defaultMargin: null }, Ii = me;
    he.default = Ii;
    var Dr = {};
    Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var Kr = { id: "actions", install: function(n) {
      n.usePlugin(at.default), n.usePlugin(he.default), n.usePlugin(m.default), n.usePlugin(Rr.default);
    } };
    Dr.default = Kr;
    var qe = {};
    Object.defineProperty(qe, "__esModule", { value: true }), qe.default = void 0;
    var je, Ye, jl = 0, yd = { request: function(n) {
      return je(n);
    }, cancel: function(n) {
      return Ye(n);
    }, init: function(n) {
      if (je = n.requestAnimationFrame, Ye = n.cancelAnimationFrame, !je)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          je = n["".concat(s, "RequestAnimationFrame")], Ye = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      je = je && je.bind(n), Ye = Ye && Ye.bind(n), je || (je = u(function(d) {
        var v = Date.now(), y = Math.max(0, 16 - (v - jl)), g = n.setTimeout(function() {
          d(v + y);
        }, y);
        return jl = v + y, g;
      }, "kt"), Ye = u(function(d) {
        return clearTimeout(d);
      }, "It"));
    } };
    qe.default = yd;
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.getContainer = zo, Jr.getScroll = Ai, Jr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Jr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, d = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return o(), { x: 0, y: 0 };
      var v = zo(d.container, a.interactable, s), y = Ai(v);
      o();
      var g = Ai(v);
      return { x: g.x - y.x, y: g.y - y.y };
    }, Jr.default = void 0;
    var ut = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ut.isScrolling = true, qe.default.cancel(ut.i), n.autoScroll = ut, ut.interaction = n, ut.prevTime = ut.now(), ut.i = qe.default.request(ut.scroll);
    }, stop: function() {
      ut.isScrolling = false, ut.interaction && (ut.interaction.autoScroll = null), qe.default.cancel(ut.i);
    }, scroll: function() {
      var n = ut.interaction, o = n.interactable, a = n.element, s = n.prepared.name, d = o.options[s].autoScroll, v = zo(d.container, o, a), y = ut.now(), g = (y - ut.prevTime) / 1e3, w = d.speed * g;
      if (w >= 1) {
        var E = { x: ut.x * w, y: ut.y * w };
        if (E.x || E.y) {
          var O = Ai(v);
          c.default.window(v) ? v.scrollBy(E.x, E.y) : v && (v.scrollLeft += E.x, v.scrollTop += E.y);
          var I = Ai(v), G = { x: I.x - O.x, y: I.y - O.y };
          (G.x || G.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: G, interaction: n, container: v });
        }
        ut.prevTime = y;
      }
      ut.isScrolling && (qe.default.cancel(ut.i), ut.i = qe.default.request(ut.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && ut.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ut.x = ut.y = 0;
        else {
          var s, d, v, y, g = o.interactable, w = o.element, E = o.prepared.name, O = g.options[E].autoScroll, I = zo(O.container, g, w);
          if (c.default.window(I))
            y = a.clientX < ut.margin, s = a.clientY < ut.margin, d = a.clientX > I.innerWidth - ut.margin, v = a.clientY > I.innerHeight - ut.margin;
          else {
            var G = D.getElementClientRect(I);
            y = a.clientX < G.left + ut.margin, s = a.clientY < G.top + ut.margin, d = a.clientX > G.right - ut.margin, v = a.clientY > G.bottom - ut.margin;
          }
          ut.x = d ? 1 : y ? -1 : 0, ut.y = v ? 1 : s ? -1 : 0, ut.isScrolling || (ut.margin = O.margin, ut.speed = O.speed, ut.start(o));
        }
    } };
    function zo(n, o, a) {
      return (c.default.string(n) ? (0, ct.getStringOptionResult)(n, o, a) : n) || (0, t.getWindow)(a);
    }
    __name(zo, "zo");
    u(zo, "Ct");
    function Ai(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Ai, "Ai");
    u(Ai, "Ft");
    var wd = { id: "auto-scroll", install: function(n) {
      var o = n.defaults, a = n.actions;
      n.autoScroll = ut, ut.now = function() {
        return n.now();
      }, a.phaselessTypes.autoscroll = true, o.perAction.autoScroll = ut.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoScroll = null;
    }, "interactions:destroy": function(n) {
      n.interaction.autoScroll = null, ut.stop(), ut.interaction && (ut.interaction = null);
    }, "interactions:stop": ut.stop, "interactions:action-move": function(n) {
      return ut.onInteractionMove(n);
    } } };
    Jr.default = wd;
    var Be = {};
    Object.defineProperty(Be, "__esModule", { value: true }), Be.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (t.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Be.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Be.sign = void 0, Be.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var Ro = {};
    function xd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(xd, "xd");
    u(xd, "Wt");
    function Ed(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Ed, "Ed");
    u(Ed, "Lt"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
    var Sd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, d, v) {
        var y = function(g, w, E, O, I) {
          var G = g.getRect(O), L = { action: null, interactable: g, interaction: E, element: O, rect: G, buttons: w.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[w.button] };
          return I.fire("auto-start:check", L), L.action;
        }(this, s, d, v, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, y, this, v, d) : y;
      }, o.prototype.ignoreFrom = (0, Be.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Be.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Ed, o.prototype.styleCursor = xd;
    } };
    Ro.default = Sd;
    var Zn = {};
    function Bl(n, o, a, s, d) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Do(o, a, n, d) ? n : null;
    }
    __name(Bl, "Bl");
    u(Bl, "Nt");
    function Cd(n, o, a, s, d, v, y) {
      for (var g = 0, w = s.length; g < w; g++) {
        var E = s[g], O = d[g], I = E.getAction(o, a, n, O);
        if (I) {
          var G = Bl(I, E, O, v, y);
          if (G)
            return { action: G, interactable: E, element: O };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Cd, "Cd");
    u(Cd, "qt");
    function Hl(n, o, a, s, d) {
      var v = [], y = [], g = s;
      function w(O) {
        v.push(O), y.push(g);
      }
      __name(w, "w");
      for (u(w, "u"); c.default.element(g); ) {
        v = [], y = [], d.interactables.forEachMatch(g, w);
        var E = Cd(n, o, a, v, y, s, d);
        if (E.action && !E.interactable.options[E.action.name].manualStart)
          return E;
        g = D.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Hl, "Hl");
    u(Hl, "$t");
    function $l(n, o, a) {
      var s = o.action, d = o.interactable, v = o.element;
      s = s || { name: null }, n.interactable = d, n.element = v, (0, Be.copyAction)(n.prepared, s), n.rect = d && s.name ? d.getRect(v) : null, Wl(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name($l, "$l");
    u($l, "Gt");
    function Do(n, o, a, s) {
      var d = n.options, v = d[a.name].max, y = d[a.name].maxPerElement, g = s.autoStart.maxInteractions, w = 0, E = 0, O = 0;
      if (!(v && y && g))
        return false;
      for (var I = 0; I < s.interactions.list.length; I++) {
        var G = s.interactions.list[I], L = G.prepared.name;
        if (G.interacting() && (++w >= g || G.interactable === n && ((E += L === a.name ? 1 : 0) >= v || G.element === o && (O++, L === a.name && O >= y))))
          return false;
      }
      return g > 0;
    }
    __name(Do, "Do");
    u(Do, "Ht");
    function Fl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(Fl, "Fl");
    u(Fl, "Kt");
    function is(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(is, "is");
    u(is, "Zt");
    function Wl(n, o) {
      var a = n.interactable, s = n.element, d = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var v = "";
        if (d.name) {
          var y = a.options[d.name].cursorChecker;
          v = c.default.func(y) ? y(d, a, s, n._interacting) : o.actions.map[d.name].getCursor(d);
        }
        is(n.element, v || "", o);
      } else
        o.autoStart.cursorElement && is(o.autoStart.cursorElement, "", o);
    }
    __name(Wl, "Wl");
    u(Wl, "Jt"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.default = void 0;
    var Td = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(Ro.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, Y.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return Fl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Do, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget;
      a.interacting() || $l(a, Hl(a, s, d, v, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var d = a.interaction, v = a.pointer, y = a.event, g = a.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || $l(d, Hl(d, v, y, g, s), s);
      })(n, o), function(a, s) {
        var d = a.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          s.fire("autoStart:before-start", a);
          var v = d.interactable, y = d.prepared.name;
          y && v && (v.options[y].manualStart || !Do(v, d.element, d.prepared, s) ? d.stop() : (d.start(d.prepared, v, d.element), Wl(d, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && is(a.element, "", o);
    } }, maxInteractions: Fl, withinInteractionLimit: Do, validateAction: Bl };
    Zn.default = Td;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Od = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, d = n.dx, v = n.dy;
      if (a.prepared.name === "drag") {
        var y = Math.abs(d), g = Math.abs(v), w = a.interactable.options.drag, E = w.startAxis, O = y > g ? "x" : y < g ? "y" : "xy";
        if (a.prepared.axis = w.lockAxis === "start" ? O[0] : w.lockAxis, O !== "xy" && E !== "xy" && E !== O) {
          a.prepared.name = null;
          for (var I = s, G = function(R) {
            if (R !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && R.testIgnoreAllow($, I, s)) {
                var J = R.getAction(a.downPointer, a.downEvent, a, I);
                if (J && J.name === "drag" && function(F, nt) {
                  if (!nt)
                    return false;
                  var lt = nt.options.drag.startAxis;
                  return F === "xy" || lt === "xy" || lt === F;
                }(O, R) && Zn.default.validateAction(J, R, I, s, o))
                  return R;
              }
            }
          }; c.default.element(I); ) {
            var L = o.interactables.forEachMatch(I, G);
            if (L) {
              a.prepared.name = "drag", a.interactable = L, a.element = I;
              break;
            }
            I = (0, D.parentNode)(I);
          }
        }
      }
    } } };
    No.default = Od;
    var Go = {};
    function os(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(os, "os");
    u(os, "re"), Object.defineProperty(Go, "__esModule", { value: true }), Go.default = void 0;
    var Md = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Zn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = os(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      os(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: os };
    Go.default = Md;
    var Lo = {};
    Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var Pd = { id: "auto-start", install: function(n) {
      n.usePlugin(Zn.default), n.usePlugin(Go.default), n.usePlugin(No.default);
    } };
    Lo.default = Pd;
    var Kn = {};
    function Id(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Id, "Id");
    u(Id, "le");
    function Ad(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Ad, "Ad");
    u(Ad, "ue");
    function Ul(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Id, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, d, v) {
          var y = s.options.preventDefault;
          if (y !== "never")
            if (y !== "always") {
              if (d.events.supportsPassive && /^touch(start|move)$/.test(v.type)) {
                var g = (0, t.getWindow)(v.target).document, w = d.getDocOptions(g);
                if (!w || !w.events || w.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(v.type) || c.default.element(v.target) && (0, D.matchesSelector)(v.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || v.preventDefault();
            } else
              v.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var d = n.interactions.list[s];
          if (d.element && (d.element === a.target || (0, D.nodeContains)(d.element, a.target)))
            return void d.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(Ul, "Ul");
    u(Ul, "ce"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.install = Ul, Kn.default = void 0;
    var _d = { id: "core/interactablePreventDefault", install: Ul, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Ad, n;
    }, {}) };
    Kn.default = _d;
    var as = {};
    Object.defineProperty(as, "__esModule", { value: true }), as.default = void 0, as.default = {};
    var _i, ss = {};
    Object.defineProperty(ss, "__esModule", { value: true }), ss.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(_i || (_i = {})), _i.touchAction, _i.boxSizing, _i.noListeners;
    var kd = { id: "dev-tools", install: function() {
    } };
    ss.default = kd;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var d = o[s];
        c.default.plainObject(d) ? a[s] = n(d) : c.default.array(d) ? a[s] = wt.from(d) : a[s] = d;
      }
      return a;
    }, "n"), "t");
    var bn = {};
    function Vl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw g;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Yl(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Yl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Vl, "Vl");
    u(Vl, "me");
    function Yl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Yl, "Yl");
    u(Yl, "be");
    function zd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(zd, "zd");
    u(zd, "xe");
    function yn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(yn, "yn");
    u(yn, "we"), Object.defineProperty(bn, "__esModule", { value: true }), bn.getRectOffset = Xl, bn.default = void 0;
    var Rd = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), yn(this, "states", []), yn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), yn(this, "startDelta", void 0), yn(this, "result", void 0), yn(this, "endResult", void 0), yn(this, "edges", void 0), yn(this, "interaction", void 0), this.interaction = s, this.result = qo();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, d) {
        var v = s.phase, y = this.interaction, g = function(E) {
          var O = E.interactable.options[E.prepared.name], I = O.modifiers;
          return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(G) {
            var L = O[G];
            return L && L.enabled && { options: L, methods: L._methods };
          }).filter(function(G) {
            return !!G;
          });
        }(y);
        this.prepareStates(g), this.edges = (0, Y.default)({}, y.edges), this.startOffset = Xl(y.rect, d), this.startDelta = { x: 0, y: 0 };
        var w = this.fillArg({ phase: v, pageCoords: d, preEnd: false });
        return this.result = qo(), this.startAll(w), this.result = this.setAll(w);
      } }, { key: "fillArg", value: function(s) {
        var d = this.interaction;
        return s.interaction = d, s.interactable = d.interactable, s.element = d.element, s.rect = s.rect || d.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var d = 0; d < this.states.length; d++) {
          var v = this.states[d];
          v.methods.start && (s.state = v, v.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var d = s.phase, v = s.preEnd, y = s.skipModifiers, g = s.rect;
        s.coords = (0, Y.default)({}, s.pageCoords), s.rect = (0, Y.default)({}, g);
        for (var w = y ? this.states.slice(y) : this.states, E = qo(s.coords, s.rect), O = 0; O < w.length; O++) {
          var I, G = w[O], L = G.options, R = (0, Y.default)({}, s.coords), $ = null;
          (I = G.methods) != null && I.set && this.shouldDo(L, v, d) && (s.state = G, $ = G.methods.set(s), ct.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - R.x, y: s.coords.y - R.y })), E.eventProps.push($);
        }
        E.delta.x = s.coords.x - s.pageCoords.x, E.delta.y = s.coords.y - s.pageCoords.y, E.rectDelta.left = s.rect.left - g.left, E.rectDelta.right = s.rect.right - g.right, E.rectDelta.top = s.rect.top - g.top, E.rectDelta.bottom = s.rect.bottom - g.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var nt = E.rect.left !== F.left || E.rect.right !== F.right || E.rect.top !== F.top || E.rect.bottom !== F.bottom;
          E.changed = nt || J.x !== E.coords.x || J.y !== E.coords.y;
        }
        return E;
      } }, { key: "applyToInteraction", value: function(s) {
        var d = this.interaction, v = s.phase, y = d.coords.cur, g = d.coords.start, w = this.result, E = this.startDelta, O = w.delta;
        v === "start" && (0, Y.default)(this.startDelta, w.delta);
        for (var I = 0; I < [[g, E], [y, O]].length; I++) {
          var G = Vl([[g, E], [y, O]][I], 2), L = G[0], R = G[1];
          L.page.x += R.x, L.page.y += R.y, L.client.x += R.x, L.client.y += R.y;
        }
        var $ = this.result.rectDelta, J = s.rect || d.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var d = this.interaction, v = s.phase, y = s.preEnd, g = s.skipModifiers, w = this.setAll(this.fillArg({ preEnd: y, phase: v, pageCoords: s.modifiedCoords || d.coords.cur.page }));
        if (this.result = w, !w.changed && (!g || g < this.states.length) && d.interacting())
          return false;
        if (s.modifiedCoords) {
          var E = d.coords.cur.page, O = { x: s.modifiedCoords.x - E.x, y: s.modifiedCoords.y - E.y };
          w.coords.x += O.x, w.coords.y += O.y, w.delta.x += O.x, w.delta.y += O.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var d = s.interaction, v = s.event, y = this.states;
        if (y && y.length) {
          for (var g = false, w = 0; w < y.length; w++) {
            var E = y[w];
            s.state = E;
            var O = E.options, I = E.methods, G = I.beforeEnd && I.beforeEnd(s);
            if (G)
              return this.endResult = G, false;
            g = g || !g && this.shouldDo(O, true, s.phase, true);
          }
          g && d.move({ event: v, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var d = s.interaction;
        if (this.states && this.states.length) {
          var v = (0, Y.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, s);
          this.fillArg(v);
          for (var y = 0; y < this.states.length; y++) {
            var g = this.states[y];
            v.state = g, g.methods.stop && g.methods.stop(v);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var d = 0; d < s.length; d++) {
          var v = s[d], y = v.options, g = v.methods, w = v.name;
          this.states.push({ options: y, methods: g, index: d, name: w });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var d = s.interaction, v = d.coords, y = d.rect, g = d.modification;
        if (g.result) {
          for (var w = g.startDelta, E = g.result, O = E.delta, I = E.rectDelta, G = [[v.start, w], [v.cur, O]], L = 0; L < G.length; L++) {
            var R = Vl(G[L], 2), $ = R[0], J = R[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          y.left -= I.left, y.right -= I.right, y.top -= I.top, y.bottom -= I.bottom;
        }
      } }, { key: "shouldDo", value: function(s, d, v, y) {
        return !(!s || s.enabled === false || y && !s.endOnly || s.endOnly && !d || v === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(d) {
          return (0, gn.default)(d);
        }), this.result = qo((0, Y.default)({}, s.result.coords), (0, Y.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && zd(o.prototype, a), n;
    }();
    function qo(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(qo, "qo");
    u(qo, "Pe");
    function Xl(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Xl, "Xl");
    u(Xl, "Oe"), bn.default = Rd;
    var ve = {};
    function jo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(jo, "jo");
    u(jo, "Ee"), Object.defineProperty(ve, "__esModule", { value: true }), ve.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, d = u(function(v) {
        var y = v || {};
        for (var g in y.enabled = y.enabled !== false, a)
          g in y || (y[g] = a[g]);
        var w = { options: y, methods: s, name: o, enable: function() {
          return y.enabled = true, w;
        }, disable: function() {
          return y.enabled = false, w;
        } };
        return w;
      }, "o");
      return o && typeof o == "string" && (d._defaults = a, d._methods = s), d;
    }, ve.addEventModifiers = jo, ve.default = void 0;
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
    }, "interactions:action-start": jo, "interactions:action-move": jo, "interactions:action-end": jo, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ve.default = Dd;
    var ki = {};
    Object.defineProperty(ki, "__esModule", { value: true }), ki.defaults = void 0, ki.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var zi = {};
    function Zl(n) {
      return (Zl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Zl, "Zl");
    u(Zl, "ke");
    function Nd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Nd, "Nd");
    u(Nd, "Ie");
    function Kl(n, o) {
      return (Kl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Kl, "Kl");
    u(Kl, "De");
    function Gd(n, o) {
      return !o || Zl(o) !== "object" && typeof o != "function" ? Ot(n) : o;
    }
    __name(Gd, "Gd");
    u(Gd, "Ae");
    function Ot(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Ot, "Ot");
    u(Ot, "Re");
    function ls(n) {
      return (ls = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ls, "ls");
    u(ls, "ze");
    function _t(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_t, "_t");
    u(_t, "Ce"), Object.defineProperty(zi, "__esModule", { value: true }), zi.InteractEvent = void 0;
    var Jl = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), w && Kl(g, w);
      })(y, n);
      var o, a, s, d, v = (s = y, d = function() {
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
        var g, w = ls(s);
        if (d) {
          var E = ls(this).constructor;
          g = Reflect.construct(w, arguments, E);
        } else
          g = w.apply(this, arguments);
        return Gd(this, g);
      });
      function y(g, w, E, O, I, G, L) {
        var R;
        (function(jt, bt) {
          if (!(jt instanceof bt))
            throw new TypeError("Cannot call a class as a function");
        })(this, y), _t(Ot(R = v.call(this, g)), "target", void 0), _t(Ot(R), "currentTarget", void 0), _t(Ot(R), "relatedTarget", null), _t(Ot(R), "screenX", void 0), _t(Ot(R), "screenY", void 0), _t(Ot(R), "button", void 0), _t(Ot(R), "buttons", void 0), _t(Ot(R), "ctrlKey", void 0), _t(Ot(R), "shiftKey", void 0), _t(Ot(R), "altKey", void 0), _t(Ot(R), "metaKey", void 0), _t(Ot(R), "page", void 0), _t(Ot(R), "client", void 0), _t(Ot(R), "delta", void 0), _t(Ot(R), "rect", void 0), _t(Ot(R), "x0", void 0), _t(Ot(R), "y0", void 0), _t(Ot(R), "t0", void 0), _t(Ot(R), "dt", void 0), _t(Ot(R), "duration", void 0), _t(Ot(R), "clientX0", void 0), _t(Ot(R), "clientY0", void 0), _t(Ot(R), "velocity", void 0), _t(Ot(R), "speed", void 0), _t(Ot(R), "swipe", void 0), _t(Ot(R), "timeStamp", void 0), _t(Ot(R), "axes", void 0), _t(Ot(R), "preEnd", void 0), I = I || g.element;
        var $ = g.interactable, J = ($ && $.options || ki.defaults).deltaSource, F = (0, Lt.default)($, I, E), nt = O === "start", lt = O === "end", pt = nt ? Ot(R) : g.prevEvent, St = nt ? g.coords.start : lt ? { page: pt.page, client: pt.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return R.page = (0, Y.default)({}, St.page), R.client = (0, Y.default)({}, St.client), R.rect = (0, Y.default)({}, g.rect), R.timeStamp = St.timeStamp, lt || (R.page.x -= F.x, R.page.y -= F.y, R.client.x -= F.x, R.client.y -= F.y), R.ctrlKey = w.ctrlKey, R.altKey = w.altKey, R.shiftKey = w.shiftKey, R.metaKey = w.metaKey, R.button = w.button, R.buttons = w.buttons, R.target = I, R.currentTarget = I, R.preEnd = G, R.type = L || E + (O || ""), R.interactable = $, R.t0 = nt ? g.pointers[g.pointers.length - 1].downTime : pt.t0, R.x0 = g.coords.start.page.x - F.x, R.y0 = g.coords.start.page.y - F.y, R.clientX0 = g.coords.start.client.x - F.x, R.clientY0 = g.coords.start.client.y - F.y, R.delta = nt || lt ? { x: 0, y: 0 } : { x: R[J].x - pt[J].x, y: R[J].y - pt[J].y }, R.dt = g.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, Y.default)({}, g.coords.velocity[J]), R.speed = (0, Qt.default)(R.velocity.x, R.velocity.y), R.swipe = lt || O === "inertiastart" ? R.getSwipe() : null, R;
      }
      __name(y, "y");
      return u(y, "a"), o = y, (a = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var w = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        w < 0 && (w += 360);
        var E = 112.5 <= w && w < 247.5, O = 202.5 <= w && w < 337.5;
        return { up: O, down: !O && 22.5 <= w && w < 157.5, left: E, right: !E && (292.5 <= w || w < 67.5), angle: w, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Nd(o.prototype, a), y;
    }(Ge.BaseEvent);
    zi.InteractEvent = Jl, Object.defineProperties(Jl.prototype, { pageX: { get: function() {
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
    var Ri = {};
    function Di(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Di, "Di");
    u(Di, "Ye"), Object.defineProperty(Ri, "__esModule", { value: true }), Ri.PointerInfo = void 0, Ri.PointerInfo = u(/* @__PURE__ */ __name(function n(o, a, s, d, v) {
      (function(y, g) {
        if (!(y instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Di(this, "id", void 0), Di(this, "pointer", void 0), Di(this, "event", void 0), Di(this, "downTime", void 0), Di(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = d, this.downTarget = v;
    }, "n"), "t");
    var Bo, Ho, ze = {};
    function Ld(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ld, "Ld");
    u(Ld, "Ue");
    function Ht(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ht, "Ht");
    u(Ht, "Ve"), Object.defineProperty(ze, "__esModule", { value: true }), Object.defineProperty(ze, "PointerInfo", { enumerable: true, get: function() {
      return Ri.PointerInfo;
    } }), ze.default = ze.Interaction = ze._ProxyMethods = ze._ProxyValues = void 0, ze._ProxyValues = Bo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Bo || (ze._ProxyValues = Bo = {})), ze._ProxyMethods = Ho, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Ho || (ze._ProxyMethods = Ho = {}));
    var qd = 0, Ql = function() {
      function n(s) {
        var d = this, v = s.pointerType, y = s.scopeFire;
        (function(G, L) {
          if (!(G instanceof L))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ht(this, "interactable", null), Ht(this, "element", null), Ht(this, "rect", void 0), Ht(this, "_rects", void 0), Ht(this, "edges", void 0), Ht(this, "_scopeFire", void 0), Ht(this, "prepared", { name: null, axis: null, edges: null }), Ht(this, "pointerType", void 0), Ht(this, "pointers", []), Ht(this, "downEvent", null), Ht(this, "downPointer", {}), Ht(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ht(this, "prevEvent", null), Ht(this, "pointerIsDown", false), Ht(this, "pointerWasMoved", false), Ht(this, "_interacting", false), Ht(this, "_ending", false), Ht(this, "_stopped", true), Ht(this, "_proxy", null), Ht(this, "simulation", null), Ht(this, "doMove", (0, Be.warnOnce)(function(G) {
          this.move(G);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ht(this, "coords", { start: tt.newCoords(), prev: tt.newCoords(), cur: tt.newCoords(), delta: tt.newCoords(), velocity: tt.newCoords() }), Ht(this, "_id", qd++), this._scopeFire = y, this.pointerType = v;
        var g = this;
        this._proxy = {};
        var w = u(function(G) {
          Object.defineProperty(d._proxy, G, { get: function() {
            return g[G];
          } });
        }, "a");
        for (var E in Bo)
          w(E);
        var O = u(function(G) {
          Object.defineProperty(d._proxy, G, { value: function() {
            return g[G].apply(g, arguments);
          } });
        }, "l");
        for (var I in Ho)
          O(I);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, d, v) {
        var y = this.updatePointer(s, d, v, true), g = this.pointers[y];
        this._scopeFire("interactions:down", { pointer: s, event: d, eventTarget: v, pointerIndex: y, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(s, d, v) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !d.options[s.name].enabled) && ((0, Be.copyAction)(this.prepared, s), this.interactable = d, this.element = v, this.rect = d.getRect(v), this.edges = this.prepared.edges ? (0, Y.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, d, v) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, d, v, false);
        var y, g, w = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (y = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Qt.default)(y, g) > this.pointerMoveTolerance);
        var E = this.getPointerIndex(s), O = { pointer: s, pointerIndex: E, pointerInfo: this.pointers[E], event: d, type: "move", eventTarget: v, dx: y, dy: g, duplicate: w, interaction: this };
        w || tt.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", O), w || this.simulation || (this.interacting() && (O.type = null, this.move(O)), this.pointerWasMoved && tt.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || tt.setZeroCoords(this.coords.delta), (s = (0, Y.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, d, v, y) {
        var g = this.getPointerIndex(s);
        g === -1 && (g = this.updatePointer(s, d, v, false));
        var w = /cancel$/i.test(d.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(w), { pointer: s, pointerIndex: g, pointerInfo: this.pointers[g], event: d, eventTarget: v, type: w, curEventTarget: y, interaction: this }), this.simulation || this.end(d), this.removePointer(s, d);
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
        var d = tt.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : wt.findIndex(this.pointers, function(v) {
          return v.id === d;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, d, v, y) {
        var g = tt.getPointerId(s), w = this.getPointerIndex(s), E = this.pointers[w];
        return y = y !== false && (y || /(down|start)$/i.test(d.type)), E ? E.pointer = s : (E = new Ri.PointerInfo(g, s, d, null, null), w = this.pointers.length, this.pointers.push(E)), tt.setCoords(this.coords.cur, this.pointers.map(function(O) {
          return O.pointer;
        }), this._now()), tt.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), y && (this.pointerIsDown = true, E.downTime = this.coords.cur.timeStamp, E.downTarget = v, tt.pointerExtend(this.downPointer, s), this.interacting() || (tt.copyCoords(this.coords.start, this.coords.cur), tt.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = d, this.pointerWasMoved = false)), this._updateLatestPointer(s, d, v), this._scopeFire("interactions:update-pointer", { pointer: s, event: d, eventTarget: v, down: y, pointerInfo: E, pointerIndex: w, interaction: this }), w;
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
        return new zi.InteractEvent(this, s, this.prepared.name, d, this.element, v, y);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var d = s.event, v = s.phase, y = s.preEnd, g = s.type, w = this.rect;
        if (w && v === "move" && (ct.addEdges(this.edges, w, this.coords.delta[this.interactable.options.deltaSource]), w.width = w.right - w.left, w.height = w.bottom - w.top), this._scopeFire("interactions:before-action-".concat(v), s) === false)
          return false;
        var E = s.iEvent = this._createPreparedEvent(d, v, y, g);
        return this._scopeFire("interactions:action-".concat(v), s), v === "start" && (this.prevEvent = E), this._fireEvent(E), this._scopeFire("interactions:after-action-".concat(v), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Ld(o.prototype, a), n;
    }();
    ze.Interaction = Ql;
    var jd = Ql;
    ze.default = jd;
    var wn = {};
    function tu(n) {
      n.pointerIsDown && (cs(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(tu, "tu");
    u(tu, "He");
    function eu(n) {
      us(n.interaction);
    }
    __name(eu, "eu");
    u(eu, "Ke");
    function us(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return cs(n.coords.cur, o), cs(n.coords.delta, o), ct.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(us, "us");
    u(us, "Ze");
    function Bd(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Bd, "Bd");
    u(Bd, "Je");
    function cs(n, o) {
      var a = n.page, s = n.client, d = o.x, v = o.y;
      a.x += d, a.y += v, s.x += d, s.y += v;
    }
    __name(cs, "cs");
    u(cs, "Qe"), Object.defineProperty(wn, "__esModule", { value: true }), wn.addTotal = tu, wn.applyPending = us, wn.default = void 0, ze._ProxyMethods.offsetBy = "";
    var Hd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Bd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return tu(n.interaction);
    }, "interactions:before-action-start": eu, "interactions:before-action-move": eu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (us(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    wn.default = Hd;
    var Jn = {};
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name($d, "$d");
    u($d, "nn");
    function ae(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ae, "ae");
    u(ae, "rn"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = Jn.InertiaState = void 0;
    var ru = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ae(this, "active", false), ae(this, "isModified", false), ae(this, "smoothEnd", false), ae(this, "allowResume", false), ae(this, "modification", void 0), ae(this, "modifierCount", 0), ae(this, "modifierArg", void 0), ae(this, "startCoords", void 0), ae(this, "t0", 0), ae(this, "v0", 0), ae(this, "te", 0), ae(this, "targetOffset", void 0), ae(this, "modifiedOffset", void 0), ae(this, "currentOffset", void 0), ae(this, "lambda_v0", 0), ae(this, "one_ve_v0", 0), ae(this, "timeout", void 0), ae(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var d = this.interaction, v = $o(d);
        if (!v || !v.enabled)
          return false;
        var y = d.coords.velocity.client, g = (0, Qt.default)(y.x, y.y), w = this.modification || (this.modification = new bn.default(d));
        if (w.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = v.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = w.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && g > v.minSpeed && g > v.endSpeed)
          this.startInertia();
        else {
          if (w.result = w.setAll(this.modifierArg), !w.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: s, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = true, d.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, d = this.interaction.coords.velocity.client, v = $o(this.interaction), y = v.resistance, g = -Math.log(v.endSpeed / this.v0) / y;
        this.targetOffset = { x: (d.x - g) / y, y: (d.y - g) / y }, this.te = g, this.lambda_v0 = y / this.v0, this.one_ve_v0 = 1 - v.endSpeed / this.v0;
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
        this.timeout = qe.default.request(function() {
          d.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, d, v, y, g, w = this, E = this.interaction, O = $o(E).resistance, I = (E._now() - this.t0) / 1e3;
        if (I < this.te) {
          var G, L = 1 - (Math.exp(-O * I) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, d = this.targetOffset.y, v = this.modifiedOffset.x, y = this.modifiedOffset.y, G = { x: nu(g = L, 0, s, v), y: nu(g, 0, d, y) }) : G = { x: this.targetOffset.x * L, y: this.targetOffset.y * L };
          var R = { x: G.x - this.currentOffset.x, y: G.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, E.offsetBy(R), E.move(), this.onNextFrame(function() {
            return w.inertiaTick();
          });
        } else
          E.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, d = this.interaction, v = d._now() - this.t0, y = $o(d).smoothEndDuration;
        if (v < y) {
          var g = { x: iu(v, 0, this.targetOffset.x, y), y: iu(v, 0, this.targetOffset.y, y) }, w = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, d.offsetBy(w), d.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          d.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var d = s.pointer, v = s.event, y = s.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(d, v, y, true), g._doPhase({ interaction: g, event: v, phase: "resume" }), (0, tt.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, qe.default.cancel(this.timeout);
      } }]) && $d(o.prototype, a), n;
    }();
    function $o(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name($o, "$o");
    u($o, "an");
    function nu(n, o, a, s) {
      var d = 1 - n;
      return d * d * o + 2 * d * n * a + n * n * s;
    }
    __name(nu, "nu");
    u(nu, "sn");
    function iu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(iu, "iu");
    u(iu, "ln"), Jn.InertiaState = ru;
    var Fd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(wn.default), n.usePlugin(ve.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new ru(o);
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
          d = D.parentNode(d);
        }
    }, "interactions:stop": function(n) {
      var o = n.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(n) {
      var o = n.interaction.modification;
      o.stop(n), o.start(n, n.interaction.coords.cur.page), o.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": ve.addEventModifiers, "interactions:action-inertiastart": ve.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Jn.default = Fd;
    var Ni = {};
    function Wd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Wd, "Wd");
    u(Wd, "fn");
    function Gi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Gi, "Gi");
    u(Gi, "dn");
    function ou(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(ou, "ou");
    u(ou, "pn"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.Eventable = void 0;
    var Ud = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Gi(this, "options", void 0), Gi(this, "types", {}), Gi(this, "propagationStopped", false), Gi(this, "immediatePropagationStopped", false), Gi(this, "global", void 0), this.options = (0, Y.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var d, v = this.global;
        (d = this.types[s.type]) && ou(s, d), !s.propagationStopped && v && (d = v[s.type]) && ou(s, d);
      } }, { key: "on", value: function(s, d) {
        var v = (0, ft.default)(s, d);
        for (s in v)
          this.types[s] = wt.merge(this.types[s] || [], v[s]);
      } }, { key: "off", value: function(s, d) {
        var v = (0, ft.default)(s, d);
        for (s in v) {
          var y = this.types[s];
          if (y && y.length)
            for (var g = 0; g < v[s].length; g++) {
              var w = v[s][g], E = y.indexOf(w);
              E !== -1 && y.splice(E, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Wd(o.prototype, a), n;
    }();
    Ni.Eventable = Ud;
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Li.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var ps = {};
    Object.defineProperty(ps, "__esModule", { value: true }), ps.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, d) {
        var v = n.interactables.get(s, d);
        return v || ((v = n.interactables.new(s, d)).events.global = a.globalEvents), v;
      }, "a"), "e");
      return o.getPointerAverage = tt.pointerAverage, o.getTouchBBox = tt.touchBBox, o.getTouchDistance = tt.touchDistance, o.getTouchAngle = tt.touchAngle, o.getElementRect = D.getElementRect, o.getElementClientRect = D.getElementClientRect, o.matchesSelector = D.matchesSelector, o.closest = D.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Be.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var v = 0; v < a.length; v++) {
            var y = a[v];
            this.on(y, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.on(g, a[g], s);
          return this;
        }
        return (0, Li.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: d }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Be.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var v = 0; v < a.length; v++) {
            var y = a[v];
            this.off(y, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.off(g, a[g], s);
          return this;
        }
        var w;
        return (0, Li.default)(a, this.scope.actions) ? a in this.globalEvents && (w = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(w, 1) : this.scope.events.remove(this.scope.document, a, s, d), this;
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
    var Fo = {};
    function Vd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Vd, "Vd");
    u(Vd, "mn");
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nr, "Nr");
    u(Nr, "bn"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.Interactable = void 0;
    var Yd = function() {
      function n(s, d, v, y) {
        (function(g, w) {
          if (!(g instanceof w))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new Ni.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = d.actions, this.target = s, this._context = d.context || v, this._win = (0, t.getWindow)((0, D.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = y, this.set(d);
      }
      __name(n, "n");
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
          var g = y, w = this.options[s], E = d[g];
          g === "listeners" && this.updatePerActionListeners(s, w.listeners, E), c.default.array(E) ? w[g] = wt.from(E) : c.default.plainObject(E) ? (w[g] = (0, Y.default)(w[g] || {}, (0, gn.default)(E)), c.default.object(v.perAction[g]) && "enabled" in v.perAction[g] && (w[g].enabled = E.enabled !== false)) : c.default.bool(E) && c.default.object(v.perAction[g]) ? w[g].enabled = E : w[g] = E;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, D.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var d = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(v) {
          var y = (0, Y.default)({}, d._rectChecker(v));
          return "width" in y || (y.width = y.right - y.left, y.height = y.bottom - y.top), y;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, d) {
        if ((0, D.trySelector)(d) || c.default.object(d)) {
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
        return this._context === s.ownerDocument || (0, D.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, d, v) {
        return !this.testIgnore(s.ignoreFrom, d, v) && this.testAllow(s.allowFrom, d, v);
      } }, { key: "testAllow", value: function(s, d, v) {
        return !s || !!c.default.element(v) && (c.default.string(s) ? (0, D.matchesUpTo)(v, s, d) : !!c.default.element(s) && (0, D.nodeContains)(s, v));
      } }, { key: "testIgnore", value: function(s, d, v) {
        return !(!s || !c.default.element(v)) && (c.default.string(s) ? (0, D.matchesUpTo)(v, s, d) : !!c.default.element(s) && (0, D.nodeContains)(s, v));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, d, v, y) {
        c.default.object(d) && !c.default.array(d) && (y = v, v = null);
        var g = s === "on" ? "add" : "remove", w = (0, ft.default)(d, v);
        for (var E in w) {
          E === "wheel" && (E = q.default.wheelEvent);
          for (var O = 0; O < w[E].length; O++) {
            var I = w[E][O];
            (0, Li.default)(E, this._actions) ? this.events[s](E, I) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, E, I, y) : this._scopeEvents[g](this.target, E, I, y);
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
          var y = v, g = this._actions.methodDict[y];
          this.options[y] = {}, this.setPerAction(y, (0, Y.default)((0, Y.default)({}, d.perAction), d.actions[y])), this[g](s[y]);
        }
        for (var w in s)
          c.default.func(this[w]) && this[w](s[w]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var d = this._scopeEvents.delegatedEvents[s], v = d.length - 1; v >= 0; v--) {
              var y = d[v], g = y.selector, w = y.context, E = y.listeners;
              g === this.target && w === this._context && d.splice(v, 1);
              for (var O = E.length - 1; O >= 0; O--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, E[O][0], E[O][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Vd(o.prototype, a), n;
    }();
    Fo.Interactable = Yd;
    var Wo = {};
    function Xd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Xd, "Xd");
    u(Xd, "_n");
    function ds(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ds, "ds");
    u(ds, "Pn"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.InteractableSet = void 0;
    var Zd = function() {
      function n(s) {
        var d = this;
        (function(v, y) {
          if (!(v instanceof y))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ds(this, "list", []), ds(this, "selectorMap", {}), ds(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(v) {
          var y = v.interactable, g = y.target, w = y._context, E = c.default.string(g) ? d.selectorMap[g] : g[d.scope.id], O = wt.findIndex(E, function(I) {
            return I.context === w;
          });
          E[O] && (E[O].context = null, E[O].interactable = null), E.splice(O, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, d) {
        d = (0, Y.default)(d || {}, { actions: this.scope.actions });
        var v = new this.scope.Interactable(s, d, this.scope.document, this.scope.events), y = { context: v._context, interactable: v };
        return this.scope.addDocument(v._doc), this.list.push(v), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(y)) : (v.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(y)), this.scope.fire("interactable:new", { target: s, options: d, interactable: v, win: this.scope._win }), v;
      } }, { key: "get", value: function(s, d) {
        var v = d && d.context || this.scope.document, y = c.default.string(s), g = y ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var w = wt.find(g, function(E) {
          return E.context === v && (y || E.interactable.inContext(s));
        });
        return w && w.interactable;
      } }, { key: "forEachMatch", value: function(s, d) {
        for (var v = 0; v < this.list.length; v++) {
          var y = this.list[v], g = void 0;
          if ((c.default.string(y.target) ? c.default.element(s) && D.matchesSelector(s, y.target) : s === y.target) && y.inContext(s) && (g = d(y)), g !== void 0)
            return g;
        }
      } }]) && Xd(o.prototype, a), n;
    }();
    Wo.InteractableSet = Zd;
    var Uo = {};
    function Kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Kd, "Kd");
    u(Kd, "En");
    function fs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(fs, "fs");
    u(fs, "Tn");
    function hs(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw g;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return au(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? au(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(hs, "hs");
    u(hs, "Mn");
    function au(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(au, "au");
    u(au, "jn"), Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var Jd = function() {
      function n(s) {
        (function(d, v) {
          if (!(d instanceof v))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), fs(this, "currentTarget", void 0), fs(this, "originalEvent", void 0), fs(this, "type", void 0), this.originalEvent = s, (0, Ne.default)(this, s);
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
      } }]) && Kd(o.prototype, a), n;
    }();
    function qi(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, Y.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(qi, "qi");
    u(qi, "In");
    var Qd = { id: "events", install: function(n) {
      var o, a = [], s = {}, d = [], v = { add: y, remove: g, addDelegate: function(O, I, G, L, R) {
        var $ = qi(R);
        if (!s[G]) {
          s[G] = [];
          for (var J = 0; J < d.length; J++) {
            var F = d[J];
            y(F, G, w), y(F, G, E, true);
          }
        }
        var nt = s[G], lt = wt.find(nt, function(pt) {
          return pt.selector === O && pt.context === I;
        });
        lt || (lt = { selector: O, context: I, listeners: [] }, nt.push(lt)), lt.listeners.push([L, $]);
      }, removeDelegate: function(O, I, G, L, R) {
        var $, J = qi(R), F = s[G], nt = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var lt = F[$];
            if (lt.selector === O && lt.context === I) {
              for (var pt = lt.listeners, St = pt.length - 1; St >= 0; St--) {
                var jt = hs(pt[St], 2), bt = jt[0], kt = jt[1], Ze = kt.capture, Lr = kt.passive;
                if (bt === L && Ze === J.capture && Lr === J.passive) {
                  pt.splice(St, 1), pt.length || (F.splice($, 1), g(I, G, w), g(I, G, E, true)), nt = true;
                  break;
                }
              }
              if (nt)
                break;
            }
          }
      }, delegateListener: w, delegateUseCapture: E, delegatedEvents: s, documents: d, targets: a, supportsOptions: false, supportsPassive: false };
      function y(O, I, G, L) {
        var R = qi(L), $ = wt.find(a, function(J) {
          return J.eventTarget === O;
        });
        $ || ($ = { eventTarget: O, events: {} }, a.push($)), $.events[I] || ($.events[I] = []), O.addEventListener && !wt.contains($.events[I], G) && (O.addEventListener(I, G, v.supportsOptions ? R : R.capture), $.events[I].push(G));
      }
      __name(y, "y");
      u(y, "s");
      function g(O, I, G, L) {
        var R = qi(L), $ = wt.findIndex(a, function(St) {
          return St.eventTarget === O;
        }), J = a[$];
        if (J && J.events)
          if (I !== "all") {
            var F = false, nt = J.events[I];
            if (nt) {
              if (G === "all") {
                for (var lt = nt.length - 1; lt >= 0; lt--)
                  g(O, I, nt[lt], R);
                return;
              }
              for (var pt = 0; pt < nt.length; pt++)
                if (nt[pt] === G) {
                  O.removeEventListener(I, G, v.supportsOptions ? R : R.capture), nt.splice(pt, 1), nt.length === 0 && (delete J.events[I], F = true);
                  break;
                }
            }
            F && !Object.keys(J.events).length && a.splice($, 1);
          } else
            for (I in J.events)
              J.events.hasOwnProperty(I) && g(O, I, "all");
      }
      __name(g, "g");
      u(g, "l");
      function w(O, I) {
        for (var G = qi(I), L = new Jd(O), R = s[O.type], $ = hs(tt.getEventTargets(O), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < R.length; F++) {
            var nt = R[F], lt = nt.selector, pt = nt.context;
            if (D.matchesSelector(J, lt) && D.nodeContains(pt, $) && D.nodeContains(pt, J)) {
              var St = nt.listeners;
              L.currentTarget = J;
              for (var jt = 0; jt < St.length; jt++) {
                var bt = hs(St[jt], 2), kt = bt[0], Ze = bt[1], Lr = Ze.capture, Ms = Ze.passive;
                Lr === G.capture && Ms === G.passive && kt(L);
              }
            }
          }
          J = D.parentNode(J);
        }
      }
      __name(w, "w");
      u(w, "u");
      function E(O) {
        return w(O, true);
      }
      __name(E, "E");
      return u(E, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return v.supportsOptions = true;
      }, get passive() {
        return v.supportsPassive = true;
      } }), n.events = v, v;
    } };
    Uo.default = Qd;
    var Vo = {};
    Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var Yo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Yo.methodOrder.length; o++) {
        var a;
        a = Yo.methodOrder[o];
        var s = Yo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, d = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var v = 0; v < d.interactions.list.length; v++) {
        var y = d.interactions.list[v], g = s;
        if (y.simulation && y.simulation.allowResume && y.pointerType === o)
          for (; g; ) {
            if (g === y.element)
              return y;
            g = D.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, d = n.eventType, v = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var y = 0; y < v.interactions.list.length; y++) {
        var g = v.interactions.list[y];
        if (g.pointerType === s) {
          if (g.simulation && !su(g, a))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
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
        if (su(d, o))
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
    function su(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(su, "su");
    u(su, "zn");
    var tf = Yo;
    Vo.default = tf;
    var Xo = {};
    function lu(n) {
      return (lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(lu, "lu");
    u(lu, "Xn");
    function uu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw g;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return cu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? cu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(uu, "uu");
    u(uu, "Yn");
    function cu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(cu, "cu");
    u(cu, "Bn");
    function ef(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(ef, "ef");
    u(ef, "Wn");
    function rf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(rf, "rf");
    u(rf, "Ln");
    function pu(n, o) {
      return (pu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(pu, "pu");
    u(pu, "Un");
    function nf(n, o) {
      return !o || lu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(nf, "nf");
    u(nf, "Vn");
    function ms(n) {
      return (ms = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(ms, "ms");
    u(ms, "Nn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var vs = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function du(n, o) {
      return function(a) {
        var s = o.interactions.list, d = tt.getPointerType(a), v = uu(tt.getEventTargets(a), 2), y = v[0], g = v[1], w = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var E = 0; E < a.changedTouches.length; E++) {
            var O = a.changedTouches[E], I = { pointer: O, pointerId: tt.getPointerId(O), pointerType: d, eventType: a.type, eventTarget: y, curEventTarget: g, scope: o }, G = fu(I);
            w.push([I.pointer, I.eventTarget, I.curEventTarget, G]);
          }
        } else {
          var L = false;
          if (!q.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var R = 0; R < s.length && !L; R++)
              L = s[R].pointerType !== "mouse" && s[R].pointerIsDown;
            L = L || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!L) {
            var $ = { pointer: a, pointerId: tt.getPointerId(a), pointerType: d, eventType: a.type, curEventTarget: g, eventTarget: y, scope: o }, J = fu($);
            w.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < w.length; F++) {
          var nt = uu(w[F], 4), lt = nt[0], pt = nt[1], St = nt[2];
          nt[3][n](lt, a, pt, St);
        }
      };
    }
    __name(du, "du");
    u(du, "$n");
    function fu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Vo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(fu, "fu");
    u(fu, "Gn");
    function gs(n, o) {
      var a = n.doc, s = n.scope, d = n.options, v = s.interactions.docEvents, y = s.events, g = y[o];
      for (var w in s.browser.isIOS && !d.events && (d.events = { passive: false }), y.delegatedEvents)
        g(a, w, y.delegateListener), g(a, w, y.delegateUseCapture, true);
      for (var E = d && d.events, O = 0; O < v.length; O++) {
        var I = v[O];
        g(a, I.type, I.listener, E);
      }
    }
    __name(gs, "gs");
    u(gs, "Hn");
    var of = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < vs.length; a++) {
        var s = vs[a];
        o[s] = du(s, n);
      }
      var d, v = q.default.pEventTypes;
      function y() {
        for (var g = 0; g < n.interactions.list.length; g++) {
          var w = n.interactions.list[g];
          if (w.pointerIsDown && w.pointerType === "touch" && !w._interacting)
            for (var E = function() {
              var I = w.pointers[O];
              n.documents.some(function(G) {
                var L = G.doc;
                return (0, D.nodeContains)(L, I.downTarget);
              }) || w.removePointer(I.pointer, I.event);
            }, O = 0; O < w.pointers.length; O++)
              E();
        }
      }
      __name(y, "y");
      u(y, "a"), (d = C.default.PointerEvent ? [{ type: v.down, listener: y }, { type: v.down, listener: o.pointerDown }, { type: v.move, listener: o.pointerMove }, { type: v.up, listener: o.pointerUp }, { type: v.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: y }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var w = 0; w < n.interactions.list.length; w++)
          n.interactions.list[w].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(R, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create($ && $.prototype, { constructor: { value: R, writable: true, configurable: true } }), $ && pu(R, $);
        })(L, g);
        var w, E, O, I, G = (O = L, I = function() {
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
          var R, $ = ms(O);
          if (I) {
            var J = ms(this).constructor;
            R = Reflect.construct($, arguments, J);
          } else
            R = $.apply(this, arguments);
          return nf(this, R);
        });
        function L() {
          return ef(this, L), G.apply(this, arguments);
        }
        __name(L, "L");
        return u(L, "s"), w = L, (E = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(R) {
          n.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && rf(w.prototype, E), L;
      }(ze.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(E, O) {
          return n.fire(E, O);
        };
        var w = new n.Interaction(g);
        return n.interactions.list.push(w), w;
      }, listeners: o, docEvents: d, pointerMoveTolerance: 1 }, n.usePlugin(Kn.default);
    }, listeners: { "scope:add-document": function(n) {
      return gs(n, "add");
    }, "scope:remove-document": function(n) {
      return gs(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var d = o.interactions.list[s];
        d.interactable === a && (d.stop(), o.fire("interactions:destroy", { interaction: d }), d.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: gs, doOnInteractions: du, methodNames: vs };
    Xo.default = of;
    var ji = {};
    function hu(n) {
      return (hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(hu, "hu");
    u(hu, "Jn");
    function bs(n, o, a) {
      return (bs = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, d, v) {
        var y = function(w, E) {
          for (; !Object.prototype.hasOwnProperty.call(w, E) && (w = Qn(w)) !== null; )
            ;
          return w;
        }(s, d);
        if (y) {
          var g = Object.getOwnPropertyDescriptor(y, d);
          return g.get ? g.get.call(v) : g.value;
        }
      })(n, o, a || n);
    }
    __name(bs, "bs");
    u(bs, "Qn");
    function mu(n, o) {
      return (mu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(mu, "mu");
    u(mu, "tr");
    function af(n, o) {
      return !o || hu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(af, "af");
    u(af, "er");
    function Qn(n) {
      return (Qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Qn, "Qn");
    u(Qn, "nr");
    function vu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(vu, "vu");
    u(vu, "rr");
    function gu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(gu, "gu");
    u(gu, "or");
    function bu(n, o, a) {
      return o && gu(n.prototype, o), a && gu(n, a), n;
    }
    __name(bu, "bu");
    u(bu, "ir");
    function ge(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ge, "ge");
    u(ge, "ar"), Object.defineProperty(ji, "__esModule", { value: true }), ji.initScope = yu, ji.Scope = void 0;
    var sf = function() {
      function n() {
        var o = this;
        vu(this, n), ge(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ge(this, "isInitialized", false), ge(this, "listenerMaps", []), ge(this, "browser", q.default), ge(this, "defaults", (0, gn.default)(ki.defaults)), ge(this, "Eventable", Ni.Eventable), ge(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), ge(this, "interactStatic", (0, ps.createInteractStatic)(this)), ge(this, "InteractEvent", zi.InteractEvent), ge(this, "Interactable", void 0), ge(this, "interactables", new Wo.InteractableSet(this)), ge(this, "_win", void 0), ge(this, "document", void 0), ge(this, "window", void 0), ge(this, "documents", []), ge(this, "_plugins", { list: [], map: {} }), ge(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(w, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function");
            w.prototype = Object.create(E && E.prototype, { constructor: { value: w, writable: true, configurable: true } }), E && mu(w, E);
          })(g, s);
          var d, v, y = (d = g, v = function() {
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
            var w, E = Qn(d);
            if (v) {
              var O = Qn(this).constructor;
              w = Reflect.construct(E, arguments, O);
            } else
              w = E.apply(this, arguments);
            return af(this, w);
          });
          function g() {
            return vu(this, g), y.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), bu(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(w) {
            return bs(Qn(g.prototype), "set", this).call(this, w), a.fire("interactable:set", { options: w, interactable: this }), this;
          } }, { key: "unset", value: function() {
            bs(Qn(g.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), g;
        }(Fo.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), bu(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var d = this.listenerMaps[s].map[o];
          if (d && d(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : yu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, d = this.listenerMaps.length, v = o.before.reduce(function(g, w) {
            return g[w] = true, g[wu(w)] = true, g;
          }, {}); s < d; s++) {
            var y = this.listenerMaps[s].id;
            if (v[y] || v[wu(y)])
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
        var a = this.getDocIndex(o), s = t.getWindow(o), d = this.documents[a].options;
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
    function yu(n, o) {
      return n.isInitialized = true, c.default.window(o) && t.init(o), C.default.init(o), q.default.init(o), qe.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Xo.default), n.usePlugin(Uo.default), n;
    }
    __name(yu, "yu");
    u(yu, "lr");
    function wu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(wu, "wu");
    u(wu, "ur"), ji.Scope = sf;
    var Ee = {};
    Object.defineProperty(Ee, "__esModule", { value: true }), Ee.default = void 0;
    var xu = new ji.Scope(), lf = xu.interactStatic;
    Ee.default = lf;
    var uf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    xu.init(uf);
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0, Zo.default = function() {
    };
    var Ko = {};
    Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0, Ko.default = function() {
    };
    var Jo = {};
    function Eu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], v = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(v = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); v = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              v || E.return == null || E.return();
            } finally {
              if (y)
                throw g;
            }
          }
          return d;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Su(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Su(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Eu, "Eu");
    u(Eu, "yr");
    function Su(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Su, "Su");
    u(Su, "mr"), Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0, Jo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var d = Eu(s, 2), v = d[0], y = d[1];
        return v in n || y in n;
      }), a = u(function(s, d) {
        for (var v = n.range, y = n.limits, g = y === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : y, w = n.offset, E = w === void 0 ? { x: 0, y: 0 } : w, O = { range: v, grid: n, x: null, y: null }, I = 0; I < o.length; I++) {
          var G = Eu(o[I], 2), L = G[0], R = G[1], $ = Math.round((s - E.x) / n[L]), J = Math.round((d - E.y) / n[R]);
          O[L] = Math.max(g.left, Math.min(g.right, $ * n[L] + E.x)), O[R] = Math.max(g.top, Math.min(g.bottom, J * n[R] + E.y));
        }
        return O;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Bi = {};
    Object.defineProperty(Bi, "__esModule", { value: true }), Object.defineProperty(Bi, "edgeTarget", { enumerable: true, get: function() {
      return Zo.default;
    } }), Object.defineProperty(Bi, "elements", { enumerable: true, get: function() {
      return Ko.default;
    } }), Object.defineProperty(Bi, "grid", { enumerable: true, get: function() {
      return Jo.default;
    } });
    var Qo = {};
    Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0;
    var cf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, Y.default)(o.snappers || {}, Bi), o.createSnapGrid = o.snappers.grid;
    } };
    Qo.default = cf;
    var ti = {};
    function Cu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(d) {
          return Object.getOwnPropertyDescriptor(n, d).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(Cu, "Cu");
    u(Cu, "Pr");
    function ys(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Cu(Object(a), true).forEach(function(s) {
          pf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Cu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(ys, "ys");
    u(ys, "Or");
    function pf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(pf, "pf");
    u(pf, "Sr"), Object.defineProperty(ti, "__esModule", { value: true }), ti.aspectRatio = ti.default = void 0;
    var Tu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, d = n.pageCoords, v = o.options.ratio, y = o.options, g = y.equalDelta, w = y.modifiers;
      v === "preserve" && (v = a.width / a.height), o.startCoords = (0, Y.default)({}, d), o.startRect = (0, Y.default)({}, a), o.ratio = v, o.equalDelta = g;
      var E = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (E.left ? 1 : -1) * (E.top ? 1 : -1);
      else {
        var O = o.xIsPrimaryAxis ? E.top : E.left;
        o.edgeSign = O ? -1 : 1;
      }
      if ((0, Y.default)(n.edges, E), w && w.length) {
        var I = new bn.default(n.interaction);
        I.copyFrom(n.interaction.modification), I.prepareStates(w), o.subModification = I, I.startAll(ys({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, d = (0, Y.default)({}, s), v = o.equalDelta ? df : ff;
      if (v(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var y = (0, Y.default)({}, a);
      (0, ct.addEdges)(o.linkedEdges, y, { x: s.x - d.x, y: s.y - d.y });
      var g = o.subModification.setAll(ys(ys({}, n), {}, { rect: y, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: y })), w = g.delta;
      return g.changed && (v(o, Math.abs(w.x) > Math.abs(w.y), g.coords, g.rect), (0, Y.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function df(n, o, a) {
      var s = n.startCoords, d = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * d : a.x = s.x + (a.y - s.y) * d;
    }
    __name(df, "df");
    u(df, "Tr");
    function ff(n, o, a, s) {
      var d = n.startRect, v = n.startCoords, y = n.ratio, g = n.edgeSign;
      if (o) {
        var w = s.width / y;
        a.y = v.y + (w - d.height) * g;
      } else {
        var E = s.height * y;
        a.x = v.x + (E - d.width) * g;
      }
    }
    __name(ff, "ff");
    u(ff, "Mr"), ti.aspectRatio = Tu;
    var hf = (0, ve.makeModifier)(Tu, "aspectRatio");
    ti.default = hf;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = void 0;
    var Ou = u(function() {
    }, "Ir");
    Ou._defaults = {};
    var mf = Ou;
    xn.default = mf;
    var ws = {};
    Object.defineProperty(ws, "__esModule", { value: true }), Object.defineProperty(ws, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Me = {};
    function xs(n, o, a) {
      return c.default.func(n) ? ct.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ct.resolveRectLike(n, o.interactable, o.element);
    }
    __name(xs, "xs");
    u(xs, "zr"), Object.defineProperty(Me, "__esModule", { value: true }), Me.getRestrictionRect = xs, Me.restrict = Me.default = void 0;
    var Mu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, d = n.interaction, v = n.pageCoords, y = s.options, g = y.elementRect, w = (0, Y.default)({ left: 0, top: 0, right: 0, bottom: 0 }, y.offset || {});
      if (o && g) {
        var E = xs(y.restriction, d, v);
        if (E) {
          var O = E.right - E.left - o.width, I = E.bottom - E.top - o.height;
          O < 0 && (w.left += O, w.right += O), I < 0 && (w.top += I, w.bottom += I);
        }
        w.left += a.left - o.width * g.left, w.top += a.top - o.height * g.top, w.right += a.right - o.width * (1 - g.right), w.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = w;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, d = s.options, v = s.offset, y = xs(d.restriction, a, o);
      if (y) {
        var g = ct.xywhToTlbr(y);
        o.x = Math.max(Math.min(g.right - v.right, o.x), g.left + v.left), o.y = Math.max(Math.min(g.bottom - v.bottom, o.y), g.top + v.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Me.restrict = Mu;
    var vf = (0, ve.makeModifier)(Mu, "restrict");
    Me.default = vf;
    var Cr = {};
    Object.defineProperty(Cr, "__esModule", { value: true }), Cr.restrictEdges = Cr.default = void 0;
    var Pu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Iu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Au(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var d = a[s];
        d in n || (n[d] = o[d]);
      }
      return n;
    }
    __name(Au, "Au");
    u(Au, "Wr");
    var _u = { noInner: Pu, noOuter: Iu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, d = n.state, v = d.options;
      if (v) {
        var y = (0, Me.getRestrictionRect)(v.offset, a, a.coords.start.page);
        o = ct.rectToXY(y);
      }
      o = o || { x: 0, y: 0 }, d.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, d = n.state, v = d.offset, y = d.options;
      if (a) {
        var g = (0, Y.default)({}, o), w = (0, Me.getRestrictionRect)(y.inner, s, g) || {}, E = (0, Me.getRestrictionRect)(y.outer, s, g) || {};
        Au(w, Pu), Au(E, Iu), a.top ? o.y = Math.min(Math.max(E.top + v.top, g.y), w.top + v.top) : a.bottom && (o.y = Math.max(Math.min(E.bottom + v.bottom, g.y), w.bottom + v.bottom)), a.left ? o.x = Math.min(Math.max(E.left + v.left, g.x), w.left + v.left) : a.right && (o.x = Math.max(Math.min(E.right + v.right, g.x), w.right + v.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Cr.restrictEdges = _u;
    var gf = (0, ve.makeModifier)(_u, "restrictEdges");
    Cr.default = gf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictRect = ei.default = void 0;
    var bf = (0, Y.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Me.restrict.defaults), ku = { start: Me.restrict.start, set: Me.restrict.set, defaults: bf };
    ei.restrictRect = ku;
    var yf = (0, ve.makeModifier)(ku, "restrictRect");
    ei.default = yf;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.restrictSize = ri.default = void 0;
    var wf = { width: -1 / 0, height: -1 / 0 }, xf = { width: 1 / 0, height: 1 / 0 }, zu = { start: function(n) {
      return Cr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, d = n.edges, v = a.options;
      if (d) {
        var y = ct.tlbrToXywh((0, Me.getRestrictionRect)(v.min, o, n.coords)) || wf, g = ct.tlbrToXywh((0, Me.getRestrictionRect)(v.max, o, n.coords)) || xf;
        a.options = { endOnly: v.endOnly, inner: (0, Y.default)({}, Cr.restrictEdges.noInner), outer: (0, Y.default)({}, Cr.restrictEdges.noOuter) }, d.top ? (a.options.inner.top = s.bottom - y.height, a.options.outer.top = s.bottom - g.height) : d.bottom && (a.options.inner.bottom = s.top + y.height, a.options.outer.bottom = s.top + g.height), d.left ? (a.options.inner.left = s.right - y.width, a.options.outer.left = s.right - g.width) : d.right && (a.options.inner.right = s.left + y.width, a.options.outer.right = s.left + g.width), Cr.restrictEdges.set(n), a.options = v;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ri.restrictSize = zu;
    var Ef = (0, ve.makeModifier)(zu, "restrictSize");
    ri.default = Ef;
    var Es = {};
    Object.defineProperty(Es, "__esModule", { value: true }), Object.defineProperty(Es, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Qr = {};
    Object.defineProperty(Qr, "__esModule", { value: true }), Qr.snap = Qr.default = void 0;
    var Ru = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, d = n.element, v = n.rect, y = n.state, g = n.startOffset, w = y.options, E = w.offsetWithOrigin ? function(G) {
        var L = G.interaction.element;
        return (0, ct.rectToXY)((0, ct.resolveRectLike)(G.state.options.origin, null, null, [L])) || (0, Lt.default)(G.interactable, L, G.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (w.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var O = (0, ct.resolveRectLike)(w.offset, s, d, [a]);
        (o = (0, ct.rectToXY)(O) || { x: 0, y: 0 }).x += E.x, o.y += E.y;
      }
      var I = w.relativePoints;
      y.offsets = v && I && I.length ? I.map(function(G, L) {
        return { index: L, relativePoint: G, x: g.left - v.width * G.x + o.x, y: g.top - v.height * G.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, d = s.options, v = s.offsets, y = (0, Lt.default)(o.interactable, o.element, o.prepared.name), g = (0, Y.default)({}, a), w = [];
      d.offsetWithOrigin || (g.x -= y.x, g.y -= y.y);
      for (var E = 0; E < v.length; E++)
        for (var O = v[E], I = g.x - O.x, G = g.y - O.y, L = 0, R = d.targets.length; L < R; L++) {
          var $, J = d.targets[L];
          ($ = c.default.func(J) ? J(I, G, o._proxy, O, L) : J) && w.push({ x: (c.default.number($.x) ? $.x : I) + O.x, y: (c.default.number($.y) ? $.y : G) + O.y, range: c.default.number($.range) ? $.range : d.range, source: J, index: L, offset: O });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, nt = 0; nt < w.length; nt++) {
        var lt = w[nt], pt = lt.range, St = lt.x - g.x, jt = lt.y - g.y, bt = (0, Qt.default)(St, jt), kt = bt <= pt;
        pt === 1 / 0 && F.inRange && F.range !== 1 / 0 && (kt = false), F.target && !(kt ? F.inRange && pt !== 1 / 0 ? bt / pt < F.distance / F.range : pt === 1 / 0 && F.range !== 1 / 0 || bt < F.distance : !F.inRange && bt < F.distance) || (F.target = lt, F.distance = bt, F.range = pt, F.inRange = kt, F.delta.x = St, F.delta.y = jt);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Qr.snap = Ru;
    var Sf = (0, ve.makeModifier)(Ru, "snap");
    Qr.default = Sf;
    var Gr = {};
    function Du(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Du, "Du");
    u(Du, "oo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var Nu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Qr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, d = n.state, v = n.coords, y = d.options, g = d.offsets, w = { x: v.x - g[0].x, y: v.y - g[0].y };
      d.options = (0, Y.default)({}, y), d.options.targets = [];
      for (var E = 0; E < (y.targets || []).length; E++) {
        var O = (y.targets || [])[E], I = void 0;
        if (I = c.default.func(O) ? O(w.x, w.y, s) : O) {
          for (var G = 0; G < d.targetFields.length; G++) {
            var L = (o = d.targetFields[G], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, nt) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var lt = [], pt = true, St = false, jt = void 0;
                try {
                  for (var bt, kt = F[Symbol.iterator](); !(pt = (bt = kt.next()).done) && (lt.push(bt.value), !nt || lt.length !== nt); pt = true)
                    ;
                } catch (Ze) {
                  St = true, jt = Ze;
                } finally {
                  try {
                    pt || kt.return == null || kt.return();
                  } finally {
                    if (St)
                      throw jt;
                  }
                }
                return lt;
              }
            }(o, a) || function(F, nt) {
              if (F) {
                if (typeof F == "string")
                  return Du(F, nt);
                var lt = Object.prototype.toString.call(F).slice(8, -1);
                return lt === "Object" && F.constructor && (lt = F.constructor.name), lt === "Map" || lt === "Set" ? Array.from(F) : lt === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(lt) ? Du(F, nt) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = L[0], $ = L[1];
            if (R in I || $ in I) {
              I.x = I[R], I.y = I[$];
              break;
            }
          }
          d.options.targets.push(I);
        }
      }
      var J = Qr.snap.set(n);
      return d.options = y, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = Nu;
    var Cf = (0, ve.makeModifier)(Nu, "snapSize");
    Gr.default = Cf;
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.snapEdges = ni.default = void 0;
    var Gu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, Y.default)((0, gn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ni.snapEdges = Gu;
    var Tf = (0, ve.makeModifier)(Gu, "snapEdges");
    ni.default = Tf;
    var Ss = {};
    Object.defineProperty(Ss, "__esModule", { value: true }), Object.defineProperty(Ss, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Cs = {};
    Object.defineProperty(Cs, "__esModule", { value: true }), Object.defineProperty(Cs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var ii = {};
    Object.defineProperty(ii, "__esModule", { value: true }), ii.default = void 0;
    var Of = { aspectRatio: ti.default, restrictEdges: Cr.default, restrict: Me.default, restrictRect: ei.default, restrictSize: ri.default, snapEdges: ni.default, snap: Qr.default, snapSize: Gr.default, spring: Ss.default, avoid: ws.default, transform: Cs.default, rubberband: Es.default };
    ii.default = Of;
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0;
    var Mf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ve.default), n.usePlugin(Qo.default), o.modifiers = ii.default, ii.default) {
        var s = ii.default[a], d = s._defaults, v = s._methods;
        d._methods = v, n.defaults.perAction[a] = d;
      }
    } };
    ta.default = Mf;
    var En = {};
    function Lu(n) {
      return (Lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Lu, "Lu");
    u(Lu, "mo");
    function Pf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Pf, "Pf");
    u(Pf, "bo");
    function qu(n, o) {
      return (qu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(qu, "qu");
    u(qu, "xo");
    function If(n, o) {
      return !o || Lu(o) !== "object" && typeof o != "function" ? Re(n) : o;
    }
    __name(If, "If");
    u(If, "wo");
    function Re(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Re, "Re");
    u(Re, "_o");
    function Ts(n) {
      return (Ts = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Ts, "Ts");
    u(Ts, "Po");
    function br(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(br, "br");
    u(br, "Oo"), Object.defineProperty(En, "__esModule", { value: true }), En.PointerEvent = En.default = void 0;
    var Af = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), w && qu(g, w);
      })(y, n);
      var o, a, s, d, v = (s = y, d = function() {
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
        var g, w = Ts(s);
        if (d) {
          var E = Ts(this).constructor;
          g = Reflect.construct(w, arguments, E);
        } else
          g = w.apply(this, arguments);
        return If(this, g);
      });
      function y(g, w, E, O, I, G) {
        var L;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, y), br(Re(L = v.call(this, I)), "type", void 0), br(Re(L), "originalEvent", void 0), br(Re(L), "pointerId", void 0), br(Re(L), "pointerType", void 0), br(Re(L), "double", void 0), br(Re(L), "pageX", void 0), br(Re(L), "pageY", void 0), br(Re(L), "clientX", void 0), br(Re(L), "clientY", void 0), br(Re(L), "dt", void 0), br(Re(L), "eventable", void 0), tt.pointerExtend(Re(L), E), E !== w && tt.pointerExtend(Re(L), w), L.timeStamp = G, L.originalEvent = E, L.type = g, L.pointerId = tt.getPointerId(w), L.pointerType = tt.getPointerType(w), L.target = O, L.currentTarget = null, g === "tap") {
          var R = I.getPointerIndex(w);
          L.dt = L.timeStamp - I.pointers[R].downTime;
          var $ = L.timeStamp - I.tapTime;
          L.double = !!(I.prevTap && I.prevTap.type !== "doubletap" && I.prevTap.target === L.target && $ < 500);
        } else
          g === "doubletap" && (L.dt = w.timeStamp - I.tapTime);
        return L;
      }
      __name(y, "y");
      return u(y, "a"), o = y, (a = [{ key: "_subtractOrigin", value: function(g) {
        var w = g.x, E = g.y;
        return this.pageX -= w, this.pageY -= E, this.clientX -= w, this.clientY -= E, this;
      } }, { key: "_addOrigin", value: function(g) {
        var w = g.x, E = g.y;
        return this.pageX += w, this.pageY += E, this.clientX += w, this.clientY += E, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Pf(o.prototype, a), y;
    }(Ge.BaseEvent);
    En.PointerEvent = En.default = Af;
    var Hi = {};
    Object.defineProperty(Hi, "__esModule", { value: true }), Hi.default = void 0;
    var ea = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = ea, n.defaults.actions.pointerEvents = ea.defaults, (0, Y.default)(n.actions.phaselessTypes, ea.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && Os(n), tn({ interaction: a, pointer: s, event: d, eventTarget: v, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var d = a.interaction, v = a.pointer, y = a.event, g = a.eventTarget, w = a.pointerIndex, E = d.pointers[w].hold, O = D.getPath(g), I = { interaction: d, pointer: v, event: y, eventTarget: g, type: "hold", targets: [], path: O, node: null }, G = 0; G < O.length; G++) {
          var L = O[G];
          I.node = L, s.fire("pointerEvents:collect-targets", I);
        }
        if (I.targets.length) {
          for (var R = 1 / 0, $ = 0; $ < I.targets.length; $++) {
            var J = I.targets[$].eventable.options.holdDuration;
            J < R && (R = J);
          }
          E.duration = R, E.timeout = setTimeout(function() {
            tn({ interaction: d, eventTarget: g, pointer: v, event: y, type: "hold" }, s);
          }, R);
        }
      })(n, o), tn(n, o);
    }, "interactions:up": function(n, o) {
      Os(n), tn(n, o), function(a, s) {
        var d = a.interaction, v = a.pointer, y = a.event, g = a.eventTarget;
        d.pointerWasMoved || tn({ interaction: d, eventTarget: g, pointer: v, event: y, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      Os(n), tn(n, o);
    } }, PointerEvent: En.PointerEvent, fire: tn, collectEventTargets: ju, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function tn(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget, y = n.type, g = n.targets, w = g === void 0 ? ju(n, o) : g, E = new En.PointerEvent(y, s, d, v, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: E });
      for (var O = { interaction: a, pointer: s, event: d, eventTarget: v, targets: w, type: y, pointerEvent: E }, I = 0; I < w.length; I++) {
        var G = w[I];
        for (var L in G.props || {})
          E[L] = G.props[L];
        var R = (0, Lt.default)(G.eventable, G.node);
        if (E._subtractOrigin(R), E.eventable = G.eventable, E.currentTarget = G.node, G.eventable.fire(E), E._addOrigin(R), E.immediatePropagationStopped || E.propagationStopped && I + 1 < w.length && w[I + 1].node !== E.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", O), y === "tap") {
        var $ = E.double ? tn({ interaction: a, pointer: s, event: d, eventTarget: v, type: "doubletap" }, o) : E;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return E;
    }
    __name(tn, "tn");
    u(tn, "Mo");
    function ju(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, v = n.eventTarget, y = n.type, g = a.getPointerIndex(s), w = a.pointers[g];
      if (y === "tap" && (a.pointerWasMoved || !w || w.downTarget !== v))
        return [];
      for (var E = D.getPath(v), O = { interaction: a, pointer: s, event: d, eventTarget: v, type: y, path: E, targets: [], node: null }, I = 0; I < E.length; I++) {
        var G = E[I];
        O.node = G, o.fire("pointerEvents:collect-targets", O);
      }
      return y === "hold" && (O.targets = O.targets.filter(function(L) {
        var R;
        return L.eventable.options.holdDuration === ((R = a.pointers[g]) == null ? void 0 : R.hold.duration);
      })), O.targets;
    }
    __name(ju, "ju");
    u(ju, "jo");
    function Os(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(Os, "Os");
    u(Os, "ko");
    var _f = ea;
    Hi.default = _f;
    var ra = {};
    function kf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(kf, "kf");
    u(kf, "Ao"), Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0;
    var zf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Hi.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = kf, n;
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
    ra.default = zf;
    var na = {};
    function Rf(n) {
      return (0, Y.default)(this.events.options, n), this;
    }
    __name(Rf, "Rf");
    u(Rf, "Co"), Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0;
    var Df = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = Rf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, d) {
        var v = a.call(this, s, d);
        return v === this && (this.events.options[s] = d), v;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, d = n.type, v = n.eventTarget;
      o.interactables.forEachMatch(s, function(y) {
        var g = y.events, w = g.options;
        g.types[d] && g.types[d].length && y.testIgnoreAllow(w, s, v) && a.push({ node: s, eventable: g, props: { interactable: y } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, Y.default)(a.events.options, o.pointerEvents.defaults), (0, Y.default)(a.events.options, s.pointerEvents || {});
    } } };
    na.default = Df;
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Nf = { id: "pointer-events", install: function(n) {
      n.usePlugin(Hi), n.usePlugin(ra.default), n.usePlugin(na.default);
    } };
    ia.default = Nf;
    var $i = {};
    function Bu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, d, v) {
          for (var y = c.default.string(s.target) ? wt.from(s._context.querySelectorAll(s.target)) : [s.target], g = v.window.Promise, w = g ? [] : null, E = function() {
            var I = y[O], G = s.getRect(I);
            if (!G)
              return "break";
            var L = wt.find(v.interactions.list, function(nt) {
              return nt.interacting() && nt.interactable === s && nt.element === I && nt.prepared.name === d.name;
            }), R = void 0;
            if (L)
              L.move(), w && (R = L._reflowPromise || new g(function(nt) {
                L._reflowResolve = nt;
              }));
            else {
              var $ = (0, ct.tlbrToXywh)(G), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: v.now() }, F = tt.coordsToEvent(J);
              R = function(nt, lt, pt, St, jt) {
                var bt = nt.interactions.new({ pointerType: "reflow" }), kt = { interaction: bt, event: jt, pointer: jt, eventTarget: pt, phase: "reflow" };
                bt.interactable = lt, bt.element = pt, bt.prevEvent = jt, bt.updatePointer(jt, jt, pt, true), tt.setZeroCoords(bt.coords.delta), (0, Be.copyAction)(bt.prepared, St), bt._doPhase(kt);
                var Ze = nt.window.Promise, Lr = Ze ? new Ze(function(Ms) {
                  bt._reflowResolve = Ms;
                }) : void 0;
                return bt._reflowPromise = Lr, bt.start(St, lt, pt), bt._interacting ? (bt.move(kt), bt.end(jt)) : (bt.stop(), bt._reflowResolve()), bt.removePointer(jt, jt), Lr;
              }(v, s, I, d, F);
            }
            w && w.push(R);
          }, O = 0; O < y.length && E() !== "break"; O++)
            ;
          return w && g.all(w).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Bu, "Bu");
    u(Bu, "Wo"), Object.defineProperty($i, "__esModule", { value: true }), $i.install = Bu, $i.default = void 0;
    var Gf = { id: "reflow", install: Bu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), wt.remove(o.interactions.list, a));
    } } };
    $i.default = Gf;
    var Xe = { exports: {} };
    function Hu(n) {
      return (Hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Hu, "Hu");
    u(Hu, "Vo"), Object.defineProperty(Xe.exports, "__esModule", { value: true }), Xe.exports.default = void 0, Ee.default.use(Kn.default), Ee.default.use(wn.default), Ee.default.use(ia.default), Ee.default.use(Jn.default), Ee.default.use(ta.default), Ee.default.use(Lo.default), Ee.default.use(Dr.default), Ee.default.use(Jr.default), Ee.default.use($i.default);
    var Lf = Ee.default;
    if (Xe.exports.default = Lf, Hu(Xe) === "object" && Xe)
      try {
        Xe.exports = Ee.default;
      } catch (n) {
      }
    Ee.default.default = Ee.default, Xe = Xe.exports;
    var Sn = { exports: {} };
    function $u(n) {
      return ($u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name($u, "$u");
    u($u, "$o"), Object.defineProperty(Sn.exports, "__esModule", { value: true }), Sn.exports.default = void 0;
    var qf = Xe.default;
    if (Sn.exports.default = qf, $u(Sn) === "object" && Sn)
      try {
        Sn.exports = Xe.default;
      } catch (n) {
      }
    return Xe.default.default = Xe.default, Sn.exports;
  });
});
var cd = oa((ud, Dl) => {
  (function(r) {
    "use strict";
    var t = /* @__PURE__ */ __name(function() {
    }, "t"), e = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(p) {
      return setTimeout(p, 16);
    };
    function i() {
      var p = this;
      p.reads = [], p.writes = [], p.raf = e.bind(r), t("initialized", p);
    }
    __name(i, "i");
    u(i, "FastDom"), i.prototype = { constructor: i, runTasks: function(p) {
      t("run tasks");
      for (var m; m = p.shift(); )
        m();
    }, measure: function(p, m) {
      t("measure");
      var x = m ? p.bind(m) : p;
      return this.reads.push(x), l(this), x;
    }, mutate: function(p, m) {
      t("mutate");
      var x = m ? p.bind(m) : p;
      return this.writes.push(x), l(this), x;
    }, clear: function(p) {
      return t("clear", p), f(this.reads, p) || f(this.writes, p);
    }, extend: function(p) {
      if (t("extend", p), typeof p != "object")
        throw new Error("expected object");
      var m = Object.create(this);
      return b(m, p), m.fastdom = this, m.initialize && m.initialize(), m;
    }, catch: null };
    function l(p) {
      p.scheduled || (p.scheduled = true, p.raf(c.bind(null, p)), t("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(p) {
      t("flush");
      var m = p.writes, x = p.reads, S;
      try {
        t("flushing reads", x.length), p.runTasks(x), t("flushing writes", m.length), p.runTasks(m);
      } catch (M) {
        S = M;
      }
      if (p.scheduled = false, (x.length || m.length) && l(p), S)
        if (t("task errored", S.message), p.catch)
          p.catch(S);
        else
          throw S;
    }
    __name(c, "c");
    u(c, "flush");
    function f(p, m) {
      var x = p.indexOf(m);
      return !!~x && !!p.splice(x, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function b(p, m) {
      for (var x in m)
        m.hasOwnProperty(x) && (p[x] = m[x]);
    }
    __name(b, "b");
    u(b, "mixin");
    var h = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return h;
    }) : typeof Dl == "object" && (Dl.exports = h);
  })(typeof window != "undefined" ? window : ud);
});
var hd = oa((Gl, fd) => {
  (function(r) {
    "use strict";
    var t = Math.cosh || function(p) {
      return Math.abs(p) < 1e-9 ? 1 - p : (Math.exp(p) + Math.exp(-p)) * 0.5;
    }, e = Math.sinh || function(p) {
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
    __name(f, "f");
    u(f, "logHypot");
    var b = u(function(p, m) {
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
            var S = p.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), M = 1, _ = 0;
            S === null && c();
            for (var C = 0; C < S.length; C++) {
              var P = S[C];
              P === " " || P === "	" || P === `
` || (P === "+" ? M++ : P === "-" ? _++ : P === "i" || P === "I" ? (M + _ === 0 && c(), S[C + 1] !== " " && !isNaN(S[C + 1]) ? (x.im += parseFloat((_ % 2 ? "-" : "") + S[C + 1]), C++) : x.im += parseFloat((_ % 2 ? "-" : "") + "1"), M = _ = 0) : ((M + _ === 0 || isNaN(P)) && c(), S[C + 1] === "i" || S[C + 1] === "I" ? (x.im += parseFloat((_ % 2 ? "-" : "") + P), C++) : x.re += parseFloat((_ % 2 ? "-" : "") + P), M = _ = 0));
            }
            M + _ > 0 && c();
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
      var x = b(p, m);
      this.re = x.re, this.im = x.im;
    }
    __name(h, "h");
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
      var S = x.re, M = x.im, _, C;
      return M === 0 ? new h(p / S, m / S) : Math.abs(S) < Math.abs(M) ? (C = S / M, _ = S * C + M, new h((p * C + m) / _, (m * C - p) / _)) : (C = M / S, _ = M * C + S, new h((p + m * C) / _, (m - p * C) / _));
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
      return new h(Math.sin(p) * t(m), Math.cos(p) * e(m));
    }, cos: function() {
      var p = this.re, m = this.im;
      return new h(Math.cos(p) * t(m), -Math.sin(p) * e(m));
    }, tan: function() {
      var p = 2 * this.re, m = 2 * this.im, x = Math.cos(p) + t(m);
      return new h(Math.sin(p) / x, e(m) / x);
    }, cot: function() {
      var p = 2 * this.re, m = 2 * this.im, x = Math.cos(p) - t(m);
      return new h(-Math.sin(p) / x, e(m) / x);
    }, sec: function() {
      var p = this.re, m = this.im, x = 0.5 * t(2 * m) + 0.5 * Math.cos(2 * p);
      return new h(Math.cos(p) * t(m) / x, Math.sin(p) * e(m) / x);
    }, csc: function() {
      var p = this.re, m = this.im, x = 0.5 * t(2 * m) - 0.5 * Math.cos(2 * p);
      return new h(Math.sin(p) * t(m) / x, -Math.cos(p) * e(m) / x);
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
      return new h(e(p) * Math.cos(m), t(p) * Math.sin(m));
    }, cosh: function() {
      var p = this.re, m = this.im;
      return new h(t(p) * Math.cos(m), e(p) * Math.sin(m));
    }, tanh: function() {
      var p = 2 * this.re, m = 2 * this.im, x = t(p) + Math.cos(m);
      return new h(e(p) / x, Math.sin(m) / x);
    }, coth: function() {
      var p = 2 * this.re, m = 2 * this.im, x = t(p) - Math.cos(m);
      return new h(e(p) / x, -Math.sin(m) / x);
    }, csch: function() {
      var p = this.re, m = this.im, x = Math.cos(2 * m) - t(2 * p);
      return new h(-2 * e(p) * Math.cos(m) / x, 2 * t(p) * Math.sin(m) / x);
    }, sech: function() {
      var p = this.re, m = this.im, x = Math.cos(2 * m) + t(2 * p);
      return new h(2 * t(p) * Math.cos(m) / x, -2 * e(p) * Math.sin(m) / x);
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
      var p = this.re, m = this.im, x = p > 1 && m === 0, S = 1 - p, M = 1 + p, _ = S * S + m * m, C = _ !== 0 ? new h((M * S - m * m) / _, (m * S + M * m) / _) : new h(p !== -1 ? p / 0 : 0, m !== 0 ? m / 0 : 0), P = C.re;
      return C.re = f(C.re, C.im) / 2, C.im = Math.atan2(C.im, P) / 2, x && (C.im = -C.im), C;
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
    }) : typeof Gl == "object" ? (Object.defineProperty(h, "__esModule", { value: true }), h.default = h, h.Complex = h, fd.exports = h) : r.Complex = h;
  })(Gl);
});
var en = oi(Vu());
function Yu(r) {
  let t = rn(r);
  return new en.default(t).valueOf() * Math.PI;
}
__name(Yu, "Yu");
u(Yu, "V");
function Ui(r) {
  let t = rn(r).split("/");
  if (t.length === 1)
    return 1;
  if (t.length === 2)
    return parseInt(t[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(Ui, "Ui");
u(Ui, "X");
function Xu(r, t) {
  return new en.default(rn(r)).valueOf() < new en.default(rn(t)).valueOf();
}
__name(Xu, "Xu");
u(Xu, "W");
function Zu(r, t) {
  return new en.default(rn(r)).valueOf() > new en.default(rn(t)).valueOf();
}
__name(Zu, "Zu");
u(Zu, "H");
function Ku(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let t = rn(r);
    return new en.default(t).valueOf(), true;
  } catch (t) {
    return false;
  }
}
__name(Ku, "Ku");
u(Ku, "Q");
function rn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(rn, "rn");
u(rn, "l");
function Ju(r) {
  try {
    let t = rn(r), e = new en.default(t).toFraction().split("/"), i;
    return e[0] === "0" ? i = "0" : e[0] === "1" ? i = "\u03C0" : e[0] === "-1" ? i = "-\u03C0" : i = `${e[0]}\u03C0`, e.length === 1 ? i : `${i}/${e[1]}`;
  } catch (t) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Ju, "Ju");
u(Ju, "J");
var Uf = Object.prototype.toString.call({});
var Vf = "!recursion-limit!";
var Yf = 10;
function te(r, t = Yf) {
  return Xf(r) || Zf(r, t) || Kf(r, t);
}
__name(te, "te");
u(te, "c");
function Xf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(Xf, "Xf");
u(Xf, "M");
function Zf(r, t) {
  if (t === 0)
    return Vf;
  if (r instanceof Map)
    return Jf(r, t);
  if (r instanceof Set)
    return Qf(r, t);
  if (((e) => e[Symbol.iterator] !== void 0)(r))
    return th(r, t);
}
__name(Zf, "Zf");
u(Zf, "O");
function Kf(r, t) {
  let e = String(r);
  return e !== Uf ? e : eh(r, t);
}
__name(Kf, "Kf");
u(Kf, "F");
function Jf(r, t) {
  let e = [];
  for (let [i, l] of r.entries()) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let c = te(i, t - 1), f = te(l, t - 1);
    e.push(`${c}: ${f}`);
  }
  return `Map{${e.join(", ")}}`;
}
__name(Jf, "Jf");
u(Jf, "G");
function Qf(r, t) {
  let e = [];
  for (let i of r) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(te(i, t - 1));
  }
  return `Set{${e.join(", ")}}`;
}
__name(Qf, "Qf");
u(Qf, "R");
function th(r, t) {
  let e = [];
  for (let i of r) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(te(i, t - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${e.join(", ")}]`;
}
__name(th, "th");
u(th, "N");
function eh(r, t) {
  let e = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let c = r[l], f = te(l, t - 1), b = te(c, t - 1);
    e.push(`${f}: ${b}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${e.join(", ")}}`;
}
__name(eh, "eh");
u(eh, "q");
var Is = 0;
var Se = u(class extends Error {
  constructor(r, t) {
    super(r);
    this.detailsObj = t, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Is++;
    try {
      this.details = Is === 1 ? te(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Is--;
    }
  }
}, "d");
var rh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var He = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -He.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(He.parseFloat(r.substr(1)));
    let t = He.matchUnicodeFraction((i) => i.character === r);
    if (t !== void 0)
      return t.value;
    let e = parseFloat(r);
    if (isNaN(e))
      throw new Error(`Not a number: '${r}'`);
    return e;
  }
  static simplifyByRounding(r, t) {
    if (r < 0)
      return -He.simplifyByRounding(-r, t);
    let e = r % 1;
    if (e <= t || 1 - e <= t)
      return Math.round(r);
    let i = He.matchUnicodeFraction((c) => Math.abs(c.value - r) <= t);
    if (i !== void 0)
      return i.value;
    let l = He.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= t);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let t of rh)
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
    let i = He.matchUnicodeFraction((c) => Math.abs(c.value - r) <= t);
    if (i !== void 0)
      return i.character;
    let l = He.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= t);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && e !== void 0 ? r.toFixed(e) : r.toString();
  }
}, "u");
var Wi = He;
Wi.CONSISTENT = new He(false, 0, 2, ", "), Wi.EXACT = new He(true, 0, void 0, ", "), Wi.MINIFIED = new He(true, 0, void 0, ","), Wi.SIMPLIFIED = new He(true, 5e-4, 3, ", ");
var Z = u(class {
  static need(r, t, e) {
    if (r !== true) {
      let i = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, l = `Precondition failed

Message: ${t === void 0 ? "(not provided)" : t}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    Z.need(r != null, "notNull");
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
    throw new Se("Unrecognized value type.", { v: r });
  }
  static polar(r, t) {
    let [e, i] = Z.snappedCosSin(t);
    return new dt(r * e, r * i);
  }
  static realPartOf(r) {
    if (r instanceof dt)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new Se("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof dt)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new Se("Unrecognized value type.", { v: r });
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
    return r = r || Wi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var Ke = dt;
Ke.ZERO = new dt(0, 0), Ke.ONE = new dt(1, 0), Ke.I = new dt(0, 1);
var ua = "H";
var ca = "X";
var pa = "Y";
var da = "Z";
var fa = "P";
var ha = "T";
var ma = "X^\xBD";
var va = "Rx";
var ga = "Ry";
var ba = "Rz";
var As = "Swap";
var _s = "\u2022";
var ks = "Bloch";
var Qu = "|0>";
var tc = "|1>";
var ya = "Measure";
var zs = /* @__PURE__ */ new WeakSet();
function Ds(r) {
  zs.add(r), r.shadowRoot && Ns(r.shadowRoot), Ls(r), Gs(r.ownerDocument);
}
__name(Ds, "Ds");
u(Ds, "bind");
function Ns(r) {
  Ls(r), Gs(r);
}
__name(Ns, "Ns");
u(Ns, "bindShadow");
var wa = /* @__PURE__ */ new WeakMap();
function Gs(r = document) {
  if (wa.has(r))
    return wa.get(r);
  let t = false, e = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Rs(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && Ls(f);
  });
  e.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return t;
  }, unsubscribe() {
    t = true, wa.delete(r), e.disconnect();
  } };
  return wa.set(r, i), i;
}
__name(Gs, "Gs");
u(Gs, "listenForBind");
function Ls(r) {
  for (let t of r.querySelectorAll("[data-action]"))
    Rs(t);
  r instanceof Element && r.hasAttribute("data-action") && Rs(r);
}
__name(Ls, "Ls");
u(Ls, "bindElements");
function nh(r) {
  let t = r.currentTarget;
  for (let e of ec(t))
    if (r.type === e.type) {
      let i = t.closest(e.tag);
      zs.has(i) && typeof i[e.method] == "function" && i[e.method](r);
      let l = t.getRootNode();
      if (l instanceof ShadowRoot && zs.has(l.host) && l.host.matches(e.tag)) {
        let c = l.host;
        typeof c[e.method] == "function" && c[e.method](r);
      }
    }
}
__name(nh, "nh");
u(nh, "handleEvent");
function* ec(r) {
  for (let t of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = t.lastIndexOf(":"), i = Math.max(0, t.lastIndexOf("#")) || t.length;
    yield { type: t.slice(0, e), tag: t.slice(e + 1, i), method: t.slice(i + 1) || "handleEvent" };
  }
}
__name(ec, "ec");
u(ec, "bindings");
function Rs(r) {
  for (let t of ec(r))
    r.addEventListener(t.type, nh);
}
__name(Rs, "Rs");
u(Rs, "bindActions");
function qs(r) {
  let t = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(t) || (window[r.name] = r, window.customElements.define(t, r));
}
__name(qs, "qs");
u(qs, "register");
function js(r, t) {
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
__name(js, "js");
u(js, "findTarget");
function Bs(r, t) {
  let e = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${e}.${t}"]`))
      l.closest(e) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${e}.${t}"]`))
    l.closest(e) === r && i.push(l);
  return i;
}
__name(Bs, "Bs");
u(Bs, "findTargets");
function xt(r, t) {
  return Object.defineProperty(r, t, { configurable: true, get() {
    return js(this, t);
  } });
}
__name(xt, "xt");
u(xt, "target");
function se(r, t) {
  return Object.defineProperty(r, t, { configurable: true, get() {
    return Bs(this, t);
  } });
}
__name(se, "se");
u(se, "targets");
function Hs(r) {
  for (let t of r.querySelectorAll("template[data-shadowroot]"))
    t.parentElement === r && r.attachShadow({ mode: t.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(t.content.cloneNode(true));
}
__name(Hs, "Hs");
u(Hs, "autoShadowRoot");
var xa = /* @__PURE__ */ new WeakMap();
function N(r, t) {
  xa.has(r) || xa.set(r, []), xa.get(r).push(t);
}
__name(N, "N");
u(N, "attr");
function $s(r, t) {
  t || (t = rc(Object.getPrototypeOf(r)));
  for (let e of t) {
    let i = r[e], l = nc(e), c = { configurable: true, get() {
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
__name($s, "$s");
u($s, "initializeAttrs");
function rc(r) {
  let t = /* @__PURE__ */ new Set(), e = r;
  for (; e && e !== HTMLElement; ) {
    let i = xa.get(e) || [];
    for (let l of i)
      t.add(l);
    e = Object.getPrototypeOf(e);
  }
  return t;
}
__name(rc, "rc");
u(rc, "getAttrNames");
function nc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(nc, "nc");
u(nc, "attrToAttributeName");
function Fs(r) {
  let t = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...rc(r.prototype)].map(nc).concat(t);
  }, set(e) {
    t = e;
  } });
}
__name(Fs, "Fs");
u(Fs, "defineObservedAttributes");
var ih = /* @__PURE__ */ new WeakSet();
function ic(r, t) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), ih.add(r), Hs(r), $s(r), Ds(r), t && t.call(r), r.shadowRoot && Ns(r.shadowRoot);
}
__name(ic, "ic");
u(ic, "initializeInstance");
function oc(r) {
  Fs(r), qs(r);
}
__name(oc, "oc");
u(oc, "initializeClass");
function et(r) {
  let t = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    ic(this, t);
  }, oc(r);
}
__name(et, "et");
u(et, "controller");
function Mt(r) {
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
  return u(t, "ActivateableMixinClass"), A([N], t.prototype, "active", 2), t;
}
__name(Mt, "Mt");
u(Mt, "ActivateableMixin");
var Cn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function nn(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(t, "t");
  return u(t, "AngleableMixinClass"), A([N], t.prototype, "angle", 2), A([N], t.prototype, "reducedAngle", 2), t;
}
__name(nn, "nn");
u(nn, "AngleableMixin");
var Tn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
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
  return u(t, "DisableableMixinClass"), A([N], t.prototype, "disabled", 2), t;
}
__name(Bt, "Bt");
u(Bt, "DisableableMixin");
var K = u(function() {
  return K = Object.assign || u(function(t) {
    for (var e, i = 1, l = arguments.length; i < l; i++) {
      e = arguments[i];
      for (var c in e)
        Object.prototype.hasOwnProperty.call(e, c) && (t[c] = e[c]);
    }
    return t;
  }, "__assign"), K.apply(this, arguments);
}, "__assign");
function ai(r, t) {
  var e = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (e[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      t.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (e[i[l]] = r[i[l]]);
  return e;
}
__name(ai, "ai");
u(ai, "__rest");
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
function vt(r, t) {
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
__name(vt, "vt");
u(vt, "__read");
function zt(r, t, e) {
  if (e || arguments.length === 2)
    for (var i = 0, l = t.length, c; i < l; i++)
      (c || !(i in t)) && (c || (c = Array.prototype.slice.call(t, 0, i)), c[i] = t[i]);
  return r.concat(c || Array.prototype.slice.call(t));
}
__name(zt, "zt");
u(zt, "__spreadArray");
var Ct;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Ct || (Ct = {}));
var on;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(on || (on = {}));
var Vi = Ct.Start;
var si = Ct.Stop;
var li = Ct.Raise;
var On = Ct.Send;
var Ea = Ct.Cancel;
var ac = Ct.NullEvent;
var Ws = Ct.Assign;
var _v = Ct.After;
var kv = Ct.DoneState;
var Sa = Ct.Log;
var sc = Ct.Init;
var Yi = Ct.Invoke;
var zv = Ct.ErrorExecution;
var Us = Ct.ErrorPlatform;
var Vs = Ct.ErrorCustom;
var Xi = Ct.Update;
var lc = Ct.Choose;
var uc = Ct.Pure;
var Ca = ".";
var Ys = {};
var Ta = "xstate.guard";
var cc = "";
var qt = true;
var Oa;
function Ki(r, t, e) {
  e === void 0 && (e = Ca);
  var i = ui(r, e), l = ui(t, e);
  return gt(l) ? gt(i) ? l === i : false : gt(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Ki(i[c], l[c]) : false;
  });
}
__name(Ki, "Ki");
u(Ki, "matchesState");
function Ma(r) {
  try {
    return gt(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (t) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ma, "Ma");
u(Ma, "getEventType");
function Pa(r, t) {
  try {
    return qr(r) ? r : r.toString().split(t);
  } catch (e) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Pa, "Pa");
u(Pa, "toStatePath");
function oh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(oh, "oh");
u(oh, "isStateLike");
function ui(r, t) {
  if (oh(r))
    return r.value;
  if (qr(r))
    return Zi(r);
  if (typeof r != "string")
    return r;
  var e = Pa(r, t);
  return Zi(e);
}
__name(ui, "ui");
u(ui, "toStateValue");
function Zi(r) {
  if (r.length === 1)
    return r[0];
  for (var t = {}, e = t, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? e[r[i]] = r[i + 1] : (e[r[i]] = {}, e = e[r[i]]);
  return t;
}
__name(Zi, "Zi");
u(Zi, "pathToStateValue");
function ci(r, t) {
  for (var e = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    e[c] = t(r[c], c, r, l);
  }
  return e;
}
__name(ci, "ci");
u(ci, "mapValues");
function Xs(r, t, e) {
  var i, l, c = {};
  try {
    for (var f = mt(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, p = r[h];
      !e(p) || (c[h] = t(p, h, r));
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
__name(Xs, "Xs");
u(Xs, "mapFilterValues");
var pc = u(function(r) {
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
function dc(r, t) {
  return function(e) {
    var i, l, c = e;
    try {
      for (var f = mt(r), b = f.next(); !b.done; b = f.next()) {
        var h = b.value;
        c = c[t][h];
      }
    } catch (p) {
      i = { error: p };
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
__name(dc, "dc");
u(dc, "nestedPath");
function Ji(r) {
  if (!r)
    return [[]];
  if (gt(r))
    return [[r]];
  var t = Nt(Object.keys(r).map(function(e) {
    var i = r[e];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[e]] : Ji(r[e]).map(function(l) {
      return [e].concat(l);
    });
  }));
  return t;
}
__name(Ji, "Ji");
u(Ji, "toStatePaths");
function Nt(r) {
  var t;
  return (t = []).concat.apply(t, zt([], vt(r), false));
}
__name(Nt, "Nt");
u(Nt, "flatten");
function fc(r) {
  return qr(r) ? r : [r];
}
__name(fc, "fc");
u(fc, "toArrayStrict");
function $e(r) {
  return r === void 0 ? [] : fc(r);
}
__name($e, "$e");
u($e, "toArray");
function Mn(r, t, e) {
  var i, l;
  if (Tt(r))
    return r(t, e.data);
  var c = {};
  try {
    for (var f = mt(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, p = r[h];
      Tt(p) ? c[h] = p(t, e.data) : c[h] = p;
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
__name(Mn, "Mn");
u(Mn, "mapContext");
function hc(r) {
  return /^(done|error)\./.test(r);
}
__name(hc, "hc");
u(hc, "isBuiltInEvent");
function Zs(r) {
  return !!(r instanceof Promise || r !== null && (Tt(r) || typeof r == "object") && Tt(r.then));
}
__name(Zs, "Zs");
u(Zs, "isPromiseLike");
function mc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(mc, "mc");
u(mc, "isBehavior");
function Ia(r, t) {
  var e, i, l = vt([[], []], 2), c = l[0], f = l[1];
  try {
    for (var b = mt(r), h = b.next(); !h.done; h = b.next()) {
      var p = h.value;
      t(p) ? c.push(p) : f.push(p);
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
__name(Ia, "Ia");
u(Ia, "partition");
function vc(r, t) {
  return ci(r.states, function(e, i) {
    if (!!e) {
      var l = (gt(t) ? void 0 : t[i]) || (e ? e.current : void 0);
      if (!!l)
        return { current: l, states: vc(e, l) };
    }
  });
}
__name(vc, "vc");
u(vc, "updateHistoryStates");
function gc(r, t) {
  return { current: t, states: vc(r, t) };
}
__name(gc, "gc");
u(gc, "updateHistoryValue");
function Ks(r, t, e, i) {
  qt || Ut(!!r, "Attempting to update undefined context");
  var l = r && e.reduce(function(c, f) {
    var b, h, p = f.assignment, m = { state: i, action: f, _event: t }, x = {};
    if (Tt(p))
      x = p(c, t.data, m);
    else
      try {
        for (var S = mt(Object.keys(p)), M = S.next(); !M.done; M = S.next()) {
          var _ = M.value, C = p[_];
          x[_] = Tt(C) ? C(c, t.data, m) : C;
        }
      } catch (P) {
        b = { error: P };
      } finally {
        try {
          M && !M.done && (h = S.return) && h.call(S);
        } finally {
          if (b)
            throw b.error;
        }
      }
    return Object.assign({}, c, x);
  }, r);
  return l;
}
__name(Ks, "Ks");
u(Ks, "updateContext");
var Ut = u(function() {
}, "warn");
qt || (Ut = u(function(r, t) {
  var e = r instanceof Error ? r : void 0;
  if (!(!e && r) && console !== void 0) {
    var i = ["Warning: ".concat(t)];
    e && i.push(e), console.warn.apply(console, i);
  }
}, "warn"));
function qr(r) {
  return Array.isArray(r);
}
__name(qr, "qr");
u(qr, "isArray");
function Tt(r) {
  return typeof r == "function";
}
__name(Tt, "Tt");
u(Tt, "isFunction");
function gt(r) {
  return typeof r == "string";
}
__name(gt, "gt");
u(gt, "isString");
function Aa(r, t) {
  if (!!r)
    return gt(r) ? { type: Ta, name: r, predicate: t ? t[r] : void 0 } : Tt(r) ? { type: Ta, name: r.name, predicate: r } : r;
}
__name(Aa, "Aa");
u(Aa, "toGuard");
function bc(r) {
  try {
    return "subscribe" in r && Tt(r.subscribe);
  } catch (t) {
    return false;
  }
}
__name(bc, "bc");
u(bc, "isObservable");
var Tr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var jv = (Oa = {}, Oa[Tr] = function() {
  return this;
}, Oa[Symbol.observable] = function() {
  return this;
}, Oa);
function Or(r) {
  return !!r && "__xstatenode" in r;
}
__name(Or, "Or");
u(Or, "isMachine");
function yc(r) {
  return !!r && typeof r.send == "function";
}
__name(yc, "yc");
u(yc, "isActor");
function Qi(r, t) {
  return gt(r) || typeof r == "number" ? K({ type: r }, t) : r;
}
__name(Qi, "Qi");
u(Qi, "toEventObject");
function ee(r, t) {
  if (!gt(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var e = Qi(r);
  return K({ name: e.type, data: e, $$type: "scxml", type: "external" }, t);
}
__name(ee, "ee");
u(ee, "toSCXMLEvent");
function Pn(r, t) {
  var e = fc(t).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Or(i) ? { target: i, event: r } : K(K({}, i), { event: r });
  });
  return e;
}
__name(Pn, "Pn");
u(Pn, "toTransitionConfigArray");
function wc(r) {
  if (!(r === void 0 || r === cc))
    return $e(r);
}
__name(wc, "wc");
u(wc, "normalizeTarget");
function xc(r, t, e) {
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
__name(xc, "xc");
u(xc, "reportUnhandledExceptionOnInvocation");
function _a(r, t, e, i, l) {
  var c = r.options.guards, f = { state: l, cond: t, _event: i };
  if (t.type === Ta)
    return ((c == null ? void 0 : c[t.name]) || t.predicate)(e, i.data, f);
  var b = c == null ? void 0 : c[t.type];
  if (!b)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(r.id, "'."));
  return b(e, i.data, f);
}
__name(_a, "_a");
u(_a, "evaluateGuard");
function ka(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(ka, "ka");
u(ka, "toInvokeSource");
function to(r, t, e) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: t || i, complete: e || i };
}
__name(to, "to");
u(to, "toObserver");
function eo(r, t) {
  return "".concat(r, ":invocation[").concat(t, "]");
}
__name(eo, "eo");
u(eo, "createInvokeId");
var In = ee({ type: sc });
function za(r, t) {
  return t && t[r] || void 0;
}
__name(za, "za");
u(za, "getActionFunction");
function pi(r, t) {
  var e;
  if (gt(r) || typeof r == "number") {
    var i = za(r, t);
    Tt(i) ? e = { type: r, exec: i } : i ? e = i : e = { type: r, exec: void 0 };
  } else if (Tt(r))
    e = { type: r.name || r.toString(), exec: r };
  else {
    var i = za(r.type, t);
    if (Tt(i))
      e = K(K({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      e = K(K(K({}, i), r), { type: l });
    } else
      e = r;
  }
  return e;
}
__name(pi, "pi");
u(pi, "toActionObject");
var ro = u(function(r, t) {
  if (!r)
    return [];
  var e = qr(r) ? r : [r];
  return e.map(function(i) {
    return pi(i, t);
  });
}, "toActionObjects");
function Da(r) {
  var t = pi(r);
  return K(K({ id: gt(r) ? r : t.id }, t), { type: t.type });
}
__name(Da, "Da");
u(Da, "toActivityDefinition");
function Ec(r) {
  return gt(r) ? { type: li, event: r } : Js(r, { to: on.Internal });
}
__name(Ec, "Ec");
u(Ec, "raise");
function ah(r) {
  return { type: li, _event: ee(r.event) };
}
__name(ah, "ah");
u(ah, "resolveRaise");
function Js(r, t) {
  return { to: t ? t.to : void 0, type: On, event: Tt(r) ? r : Qi(r), delay: t ? t.delay : void 0, id: t && t.id !== void 0 ? t.id : Tt(r) ? r.name : Ma(r) };
}
__name(Js, "Js");
u(Js, "send");
function sh(r, t, e, i) {
  var l = { _event: e }, c = ee(Tt(r.event) ? r.event(t, e.data, l) : r.event), f;
  if (gt(r.delay)) {
    var b = i && i[r.delay];
    f = Tt(b) ? b(t, e.data, l) : b;
  } else
    f = Tt(r.delay) ? r.delay(t, e.data, l) : r.delay;
  var h = Tt(r.to) ? r.to(t, e.data, l) : r.to;
  return K(K({}, r), { to: h, _event: c, event: c.data, delay: f });
}
__name(sh, "sh");
u(sh, "resolveSend");
var lh = u(function(r, t, e) {
  return K(K({}, r), { value: gt(r.expr) ? r.expr : r.expr(t, e.data, { _event: e }) });
}, "resolveLog");
var Sc = u(function(r) {
  return { type: Ea, sendId: r };
}, "cancel");
function Cc(r) {
  var t = Da(r);
  return { type: Ct.Start, activity: t, exec: void 0 };
}
__name(Cc, "Cc");
u(Cc, "start");
function Tc(r) {
  var t = Tt(r) ? r : Da(r);
  return { type: Ct.Stop, activity: t, exec: void 0 };
}
__name(Tc, "Tc");
u(Tc, "stop");
function uh(r, t, e) {
  var i = Tt(r.activity) ? r.activity(t, e.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Ct.Stop, activity: l };
  return c;
}
__name(uh, "uh");
u(uh, "resolveStop");
function Oc(r, t) {
  var e = t ? "#".concat(t) : "";
  return "".concat(Ct.After, "(").concat(r, ")").concat(e);
}
__name(Oc, "Oc");
u(Oc, "after");
function no(r, t) {
  var e = "".concat(Ct.DoneState, ".").concat(r), i = { type: e, data: t };
  return i.toString = function() {
    return e;
  }, i;
}
__name(no, "no");
u(no, "done");
function di(r, t) {
  var e = "".concat(Ct.DoneInvoke, ".").concat(r), i = { type: e, data: t };
  return i.toString = function() {
    return e;
  }, i;
}
__name(di, "di");
u(di, "doneInvoke");
function An(r, t) {
  var e = "".concat(Ct.ErrorPlatform, ".").concat(r), i = { type: e, data: t };
  return i.toString = function() {
    return e;
  }, i;
}
__name(An, "An");
u(An, "error");
function Ra(r, t, e, i, l, c) {
  c === void 0 && (c = false);
  var f = vt(c ? [[], l] : Ia(l, function(S) {
    return S.type === Ws;
  }), 2), b = f[0], h = f[1], p = b.length ? Ks(e, i, b, t) : e, m = c ? [e] : void 0, x = Nt(h.map(function(S) {
    var M;
    switch (S.type) {
      case li:
        return ah(S);
      case On:
        var _ = sh(S, p, i, r.options.delays);
        return qt || Ut(!gt(S.delay) || typeof _.delay == "number", "No delay reference for delay expression '".concat(S.delay, "' was found on machine '").concat(r.id, "'")), _;
      case Sa:
        return lh(S, p, i);
      case lc: {
        var C = S, P = (M = C.conds.find(function(V) {
          var it = Aa(V.cond, r.options.guards);
          return !it || _a(r, it, p, i, t);
        })) === null || M === void 0 ? void 0 : M.actions;
        if (!P)
          return [];
        var k = vt(Ra(r, t, p, i, ro($e(P), r.options.actions), c), 2), z = k[0], q = k[1];
        return p = q, m == null || m.push(p), z;
      }
      case uc: {
        var P = S.get(p, i.data);
        if (!P)
          return [];
        var T = vt(Ra(r, t, p, i, ro($e(P), r.options.actions), c), 2), B = T[0], D = T[1];
        return p = D, m == null || m.push(p), B;
      }
      case si:
        return uh(S, p, i);
      case Ws: {
        p = Ks(p, i, [S], t), m == null || m.push(p);
        break;
      }
      default:
        var U = pi(S, r.options.actions), X = U.exec;
        if (X && m) {
          var H = m.length - 1;
          U = K(K({}, U), { exec: function(V) {
            for (var it = [], ot = 1; ot < arguments.length; ot++)
              it[ot - 1] = arguments[ot];
            X.apply(void 0, zt([m[H]], vt(it), false));
          } });
        }
        return U;
    }
  }).filter(function(S) {
    return !!S;
  }));
  return [x, p];
}
__name(Ra, "Ra");
u(Ra, "resolveActions");
var Mc = [];
var _n = u(function(r, t) {
  Mc.push(r);
  var e = t(r);
  return Mc.pop(), e;
}, "provide");
function Pc(r) {
  var t;
  return t = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, t[Tr] = function() {
    return this;
  }, t;
}
__name(Pc, "Pc");
u(Pc, "createNullActor");
function Ic(r, t, e, i) {
  var l, c = ka(r.src), f = (l = t == null ? void 0 : t.options.services) === null || l === void 0 ? void 0 : l[c.type], b = r.data ? Mn(r.data, e, i) : void 0, h = f ? Ac(f, r.id, b) : Pc(r.id);
  return h.meta = r, h;
}
__name(Ic, "Ic");
u(Ic, "createInvocableActor");
function Ac(r, t, e) {
  var i = Pc(t);
  if (i.deferred = true, Or(r)) {
    var l = i.state = _n(void 0, function() {
      return (e ? r.withContext(e) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(Ac, "Ac");
u(Ac, "createDeferredActor");
function ch(r) {
  try {
    return typeof r.send == "function";
  } catch (t) {
    return false;
  }
}
__name(ch, "ch");
u(ch, "isActor");
function _c(r) {
  return ch(r) && "id" in r;
}
__name(_c, "_c");
u(_c, "isSpawnedActor");
function kc(r) {
  var t;
  return K((t = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, t[Tr] = function() {
    return this;
  }, t), r);
}
__name(kc, "kc");
u(kc, "toActorRef");
var io = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function kn(r) {
  return Object.keys(r.states).map(function(t) {
    return r.states[t];
  }).filter(function(t) {
    return t.type !== "history";
  });
}
__name(kn, "kn");
u(kn, "getChildren");
function tl(r) {
  var t = [r];
  return io(r) ? t : t.concat(Nt(kn(r).map(tl)));
}
__name(tl, "tl");
u(tl, "getAllStateNodes");
function zn(r, t) {
  var e, i, l, c, f, b, h, p, m = new Set(r), x = Qs(m), S = new Set(t);
  try {
    for (var M = mt(S), _ = M.next(); !_.done; _ = M.next())
      for (var C = _.value, P = C.parent; P && !S.has(P); )
        S.add(P), P = P.parent;
  } catch (H) {
    e = { error: H };
  } finally {
    try {
      _ && !_.done && (i = M.return) && i.call(M);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var k = Qs(S);
  try {
    for (var z = mt(S), q = z.next(); !q.done; q = z.next()) {
      var C = q.value;
      if (C.type === "compound" && (!k.get(C) || !k.get(C).length))
        x.get(C) ? x.get(C).forEach(function(V) {
          return S.add(V);
        }) : C.initialStateNodes.forEach(function(V) {
          return S.add(V);
        });
      else if (C.type === "parallel")
        try {
          for (var T = (f = void 0, mt(kn(C))), B = T.next(); !B.done; B = T.next()) {
            var D = B.value;
            S.has(D) || (S.add(D), x.get(D) ? x.get(D).forEach(function(V) {
              return S.add(V);
            }) : D.initialStateNodes.forEach(function(V) {
              return S.add(V);
            }));
          }
        } catch (V) {
          f = { error: V };
        } finally {
          try {
            B && !B.done && (b = T.return) && b.call(T);
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
      q && !q.done && (c = z.return) && c.call(z);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var U = mt(S), X = U.next(); !X.done; X = U.next())
      for (var C = X.value, P = C.parent; P && !S.has(P); )
        S.add(P), P = P.parent;
  } catch (H) {
    h = { error: H };
  } finally {
    try {
      X && !X.done && (p = U.return) && p.call(U);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return S;
}
__name(zn, "zn");
u(zn, "getConfiguration");
function zc(r, t) {
  var e = t.get(r);
  if (!e)
    return {};
  if (r.type === "compound") {
    var i = e[0];
    if (i) {
      if (io(i))
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
function Qs(r) {
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
__name(Qs, "Qs");
u(Qs, "getAdjList");
function Rc(r, t) {
  var e = zn([r], t);
  return zc(r, Qs(e));
}
__name(Rc, "Rc");
u(Rc, "getValue");
function oo(r, t) {
  return Array.isArray(r) ? r.some(function(e) {
    return e === t;
  }) : r instanceof Set ? r.has(t) : false;
}
__name(oo, "oo");
u(oo, "has");
function Dc(r) {
  return zt([], vt(new Set(Nt(zt([], vt(r.map(function(t) {
    return t.ownEvents;
  })), false)))), false);
}
__name(Dc, "Dc");
u(Dc, "nextEvents");
function Rn(r, t) {
  return t.type === "compound" ? kn(t).some(function(e) {
    return e.type === "final" && oo(r, e);
  }) : t.type === "parallel" ? kn(t).every(function(e) {
    return Rn(r, e);
  }) : false;
}
__name(Rn, "Rn");
u(Rn, "isInFinalState");
function Nc(r) {
  return r === void 0 && (r = []), r.reduce(function(t, e) {
    return e.meta !== void 0 && (t[e.id] = e.meta), t;
  }, {});
}
__name(Nc, "Nc");
u(Nc, "getMeta");
function el(r) {
  return new Set(Nt(r.map(function(t) {
    return t.tags;
  })));
}
__name(el, "el");
u(el, "getTagsFromConfiguration");
function rl(r, t) {
  if (r === t)
    return true;
  if (r === void 0 || t === void 0)
    return false;
  if (gt(r) || gt(t))
    return r === t;
  var e = Object.keys(r), i = Object.keys(t);
  return e.length === i.length && e.every(function(l) {
    return rl(r[l], t[l]);
  });
}
__name(rl, "rl");
u(rl, "stateValuesEqual");
function Gc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Gc, "Gc");
u(Gc, "isStateConfig");
function Lc(r, t) {
  var e = r.exec, i = K(K({}, r), { exec: e !== void 0 ? function() {
    return e(t.context, t.event, { action: r, state: t, _event: t._event });
  } : void 0 });
  return i;
}
__name(Lc, "Lc");
u(Lc, "bindActionToState");
var yr = function() {
  function r(t) {
    var e = this, i;
    this.actions = [], this.activities = Ys, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || Ys, this.meta = Nc(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (i = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Dc(e.configuration);
    } });
  }
  __name(r, "r");
  return u(r, "State"), r.from = function(t, e) {
    if (t instanceof r)
      return t.context !== e ? new r({ value: t.value, context: e, _event: t._event, _sessionid: null, historyValue: t.historyValue, history: t.history, actions: [], activities: t.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : t;
    var i = In;
    return new r({ value: t, context: e, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(t) {
    return new r(t);
  }, r.inert = function(t, e) {
    if (t instanceof r) {
      if (!t.actions.length)
        return t;
      var i = In;
      return new r({ value: t.value, context: e, _event: i, _sessionid: null, historyValue: t.historyValue, history: t.history, activities: t.activities, configuration: t.configuration, transitions: [], children: {} });
    }
    return r.from(t, e);
  }, r.prototype.toStrings = function(t, e) {
    var i = this;
    if (t === void 0 && (t = this.value), e === void 0 && (e = "."), gt(t))
      return [t];
    var l = Object.keys(t);
    return l.concat.apply(l, zt([], vt(l.map(function(c) {
      return i.toStrings(t[c], e).map(function(f) {
        return c + e + f;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var t = this;
    t.configuration, t.transitions;
    var e = t.tags;
    t.machine;
    var i = ai(t, ["configuration", "transitions", "tags", "machine"]);
    return K(K({}, i), { tags: Array.from(e) });
  }, r.prototype.matches = function(t) {
    return Ki(t, this.value);
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
var ph = { deferEvents: false };
var nl = function() {
  function r(t) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = K(K({}, ph), t);
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
var il = /* @__PURE__ */ new Map();
var dh = 0;
var ao = { bookId: function() {
  return "x:".concat(dh++);
}, register: function(r, t) {
  return il.set(r, t), r;
}, get: function(r) {
  return il.get(r);
}, free: function(r) {
  il.delete(r);
} };
function Na() {
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
__name(Na, "Na");
u(Na, "getGlobal");
function fh() {
  var r = Na();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(fh, "fh");
u(fh, "getDevTools");
function qc(r) {
  if (!!Na()) {
    var t = fh();
    t && t.register(r);
  }
}
__name(qc, "qc");
u(qc, "registerService");
function jc(r, t) {
  t === void 0 && (t = {});
  var e = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var p = l.shift();
        e = r.transition(e, p, h), i.forEach(function(m) {
          return m.next(e);
        });
      }
      c = false;
    }
  }, "flush"), b = kc({ id: t.id, send: function(p) {
    l.push(p), f();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(p, m, x) {
    var S = to(p, m, x);
    return i.add(S), S.next(e), { unsubscribe: function() {
      i.delete(S);
    } };
  } }), h = { parent: t.parent, self: b, id: t.id || "anonymous", observers: i };
  return e = r.start ? r.start(h) : e, b;
}
__name(jc, "jc");
u(jc, "spawnBehavior");
var hh = { sync: false, autoForward: false };
var be;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(be || (be = {}));
var Bc = function() {
  function r(t, e) {
    var i = this;
    e === void 0 && (e = r.defaultOptions), this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = be.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(m, x) {
      if (qr(m))
        return i.batch(m), i.state;
      var S = ee(Qi(m, x));
      if (i.status === be.Stopped)
        return qt || Ut(false, 'Event "'.concat(S.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(S.data))), i.state;
      if (i.status !== be.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(S.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(S.data)));
      return i.scheduler.schedule(function() {
        i.forward(S);
        var M = i.nextState(S);
        i.update(M, S);
      }), i._state;
    }, this.sendTo = function(m, x) {
      var S = i.parent && (x === on.Parent || i.parent.id === x), M = S ? i.parent : gt(x) ? i.children.get(x) || ao.get(x) : yc(x) ? x : void 0;
      if (!M) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(x, "' from service '").concat(i.id, "'."));
        qt || Ut(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(m.type));
        return;
      }
      "machine" in M ? M.send(K(K({}, m), { name: m.name === Vs ? "".concat(An(i.id)) : m.name, origin: i.sessionId })) : M.send(m.data);
    };
    var l = K(K({}, r.defaultOptions), e), c = l.clock, f = l.logger, b = l.parent, h = l.id, p = h !== void 0 ? h : t.id;
    this.id = p, this.logger = f, this.clock = c, this.parent = b, this.options = l, this.scheduler = new nl({ deferEvents: this.options.deferEvents }), this.sessionId = ao.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var t = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return t._initialState = t.machine.initialState, t._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return qt || Ut(this.status !== be.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
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
    var i, l, c, f, b, h, p, m, x = this;
    if (t._sessionid = this.sessionId, this._state = t, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      x.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(e.data, t), t.event)
      try {
        for (var S = mt(this.eventListeners), M = S.next(); !M.done; M = S.next()) {
          var _ = M.value;
          _(t.event);
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
      for (var C = mt(this.listeners), P = C.next(); !P.done; P = C.next()) {
        var _ = P.value;
        _(t, t.event);
      }
    } catch (H) {
      c = { error: H };
    } finally {
      try {
        P && !P.done && (f = C.return) && f.call(C);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var k = mt(this.contextListeners), z = k.next(); !z.done; z = k.next()) {
        var q = z.value;
        q(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      b = { error: H };
    } finally {
      try {
        z && !z.done && (h = k.return) && h.call(k);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var T = Rn(t.configuration || [], this.machine);
    if (this.state.configuration && T) {
      var B = t.configuration.find(function(H) {
        return H.type === "final" && H.parent === x.machine;
      }), D = B && B.doneData ? Mn(B.doneData, t.context, e) : void 0;
      try {
        for (var U = mt(this.doneListeners), X = U.next(); !X.done; X = U.next()) {
          var _ = X.value;
          _(di(this.id, D));
        }
      } catch (H) {
        p = { error: H };
      } finally {
        try {
          X && !X.done && (m = U.return) && m.call(U);
        } finally {
          if (p)
            throw p.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(t) {
    return this.listeners.add(t), this.status === be.Running && t(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(t, e, i) {
    var l = this;
    if (!t)
      return { unsubscribe: function() {
      } };
    var c, f = i;
    return typeof t == "function" ? c = t : (c = t.next.bind(t), f = t.complete.bind(t)), this.listeners.add(c), this.status !== be.NotStarted && c(this.state), f && (this.status === be.Stopped ? f() : this.onDone(f)), { unsubscribe: function() {
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
    if (this.status === be.Running)
      return this;
    this.machine._init(), ao.register(this.sessionId, this), this.initialized = true, this.status = be.Running;
    var i = t === void 0 ? this.initialState : _n(this, function() {
      return Gc(t) ? e.machine.resolveState(t) : e.machine.resolveState(yr.from(t, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(i, In);
    }), this;
  }, r.prototype.stop = function() {
    var t, e, i, l, c, f, b, h, p, m, x = this;
    try {
      for (var S = mt(this.listeners), M = S.next(); !M.done; M = S.next()) {
        var _ = M.value;
        this.listeners.delete(_);
      }
    } catch (X) {
      t = { error: X };
    } finally {
      try {
        M && !M.done && (e = S.return) && e.call(S);
      } finally {
        if (t)
          throw t.error;
      }
    }
    try {
      for (var C = mt(this.stopListeners), P = C.next(); !P.done; P = C.next()) {
        var _ = P.value;
        _(), this.stopListeners.delete(_);
      }
    } catch (X) {
      i = { error: X };
    } finally {
      try {
        P && !P.done && (l = C.return) && l.call(C);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var k = mt(this.contextListeners), z = k.next(); !z.done; z = k.next()) {
        var _ = z.value;
        this.contextListeners.delete(_);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        z && !z.done && (f = k.return) && f.call(k);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var q = mt(this.doneListeners), T = q.next(); !T.done; T = q.next()) {
        var _ = T.value;
        this.doneListeners.delete(_);
      }
    } catch (X) {
      b = { error: X };
    } finally {
      try {
        T && !T.done && (h = q.return) && h.call(q);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    zt([], vt(this.state.configuration), false).sort(function(X, H) {
      return H.order - X.order;
    }).forEach(function(X) {
      var H, V;
      try {
        for (var it = mt(X.definition.exit), ot = it.next(); !ot.done; ot = it.next()) {
          var Y = ot.value;
          x.exec(Y, x.state);
        }
      } catch (ct) {
        H = { error: ct };
      } finally {
        try {
          ot && !ot.done && (V = it.return) && V.call(it);
        } finally {
          if (H)
            throw H.error;
        }
      }
    }), this.children.forEach(function(X) {
      Tt(X.stop) && X.stop();
    }), this.children.clear();
    try {
      for (var B = mt(Object.keys(this.delayedEventsMap)), D = B.next(); !D.done; D = B.next()) {
        var U = D.value;
        this.clock.clearTimeout(this.delayedEventsMap[U]);
      }
    } catch (X) {
      p = { error: X };
    } finally {
      try {
        D && !D.done && (m = B.return) && m.call(B);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new nl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = be.Stopped, this._initialState = void 0, ao.free(this.sessionId), this;
  }, r.prototype.batch = function(t) {
    var e = this;
    if (this.status === be.NotStarted && this.options.deferEvents)
      qt || Ut(false, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== be.Running)
      throw new Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = e.state, f = false, b = [], h = u(function(S) {
        var M = ee(S);
        e.forward(M), c = _n(e, function() {
          return e.machine.transition(c, M);
        }), b.push.apply(b, zt([], vt(c.actions.map(function(_) {
          return Lc(_, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var p = mt(t), m = p.next(); !m.done; m = p.next()) {
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
      c.changed = f, c.actions = b, e.update(c, ee(t[t.length - 1]));
    });
  }, r.prototype.sender = function(t) {
    return this.send.bind(this, t);
  }, r.prototype.nextState = function(t) {
    var e = this, i = ee(t);
    if (i.name.indexOf(Us) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Us) === 0;
    }))
      throw i.data.data;
    var l = _n(this, function() {
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
      } catch (T) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: T }), T;
      }
    switch (t.type) {
      case On:
        var h = t;
        if (typeof h.delay == "number") {
          this.defer(h);
          return;
        } else
          h.to ? this.sendTo(h._event, h.to) : this.send(h._event);
        break;
      case Ea:
        this.cancel(t.sendId);
        break;
      case Vi: {
        if (this.status !== be.Running)
          return;
        var p = t.activity;
        if (!this.state.activities[p.id || p.type])
          break;
        if (p.type === Ct.Invoke) {
          var m = ka(p.src), x = this.machine.options.services ? this.machine.options.services[m.type] : void 0, S = p.id, M = p.data;
          qt || Ut(!("forward" in p), "`forward` property is deprecated (found in invocation of '".concat(p.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var _ = "autoForward" in p ? p.autoForward : !!p.forward;
          if (!x) {
            qt || Ut(false, "No service found for invocation '".concat(p.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var C = M ? Mn(M, l, c) : void 0;
          if (typeof x == "string")
            return;
          var P = Tt(x) ? x(l, c.data, { data: C, src: m, meta: p.meta }) : x;
          if (!P)
            return;
          var k = void 0;
          Or(P) && (P = C ? P.withContext(C) : P, k = { autoForward: _ }), this.spawn(P, S, k);
        } else
          this.spawnActivity(p);
        break;
      }
      case si: {
        this.stopChild(t.activity.id);
        break;
      }
      case Sa:
        var z = t.label, q = t.value;
        z ? this.logger(z, q) : this.logger(q);
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
    if (Zs(t))
      return this.spawnPromise(Promise.resolve(t), e);
    if (Tt(t))
      return this.spawnCallback(t, e);
    if (_c(t))
      return this.spawnActor(t, e);
    if (bc(t))
      return this.spawnObservable(t, e);
    if (Or(t))
      return this.spawnMachine(t, K(K({}, i), { id: e }));
    if (mc(t))
      return this.spawnBehavior(t, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'));
  }, r.prototype.spawnMachine = function(t, e) {
    var i = this;
    e === void 0 && (e = {});
    var l = new r(t, K(K({}, this.options), { parent: this, id: e.id || t.id })), c = K(K({}, hh), e);
    c.sync && l.onTransition(function(b) {
      i.send(Xi, { state: b, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(b) {
      i.removeChild(l.id), i.send(ee(b, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(t, e) {
    var i = jc(t, { id: e, parent: this });
    return this.children.set(e, i), i;
  }, r.prototype.spawnPromise = function(t, e) {
    var i, l = this, c = false, f;
    t.then(function(h) {
      c || (f = h, l.removeChild(e), l.send(ee(di(e, h), { origin: e })));
    }, function(h) {
      if (!c) {
        l.removeChild(e);
        var p = An(e, h);
        try {
          l.send(ee(p, { origin: e }));
        } catch (m) {
          xc(h, m, e), l.devTools && l.devTools.send(p, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var b = (i = { id: e, send: function() {
    }, subscribe: function(h, p, m) {
      var x = to(h, p, m), S = false;
      return t.then(function(M) {
        S || (x.next(M), !S && x.complete());
      }, function(M) {
        S || x.error(M);
      }), { unsubscribe: function() {
        return S = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return f;
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(e, b), b;
  }, r.prototype.spawnCallback = function(t, e) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), h, p = u(function(S) {
      h = S, b.forEach(function(M) {
        return M(S);
      }), !c && l.send(ee(S, { origin: e }));
    }, "receive"), m;
    try {
      m = t(p, function(S) {
        f.add(S);
      });
    } catch (S) {
      this.send(An(e, S));
    }
    if (Zs(m))
      return this.spawnPromise(m, e);
    var x = (i = { id: e, send: function(S) {
      return f.forEach(function(M) {
        return M(S);
      });
    }, subscribe: function(S) {
      var M = to(S);
      return b.add(M.next), { unsubscribe: function() {
        b.delete(M.next);
      } };
    }, stop: function() {
      c = true, Tt(m) && m();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return h;
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(e, x), x;
  }, r.prototype.spawnObservable = function(t, e) {
    var i, l = this, c, f = t.subscribe(function(h) {
      c = h, l.send(ee(h, { origin: e }));
    }, function(h) {
      l.removeChild(e), l.send(ee(An(e, h), { origin: e }));
    }, function() {
      l.removeChild(e), l.send(ee(di(e), { origin: e }));
    }), b = (i = { id: e, send: function() {
    }, subscribe: function(h, p, m) {
      return t.subscribe(h, p, m);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: e };
    } }, i[Tr] = function() {
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
    } }, i[Tr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var t = Na();
    if (this.options.devTools && t) {
      if (t.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(K(K({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, e), { features: K({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      qc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Tr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === be.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(t, e) {
    return setTimeout(t, e);
  }, clearTimeout: function(t) {
    return clearTimeout(t);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = le, r;
}();
function le(r, t) {
  var e = new Bc(r, t);
  return e;
}
__name(le, "le");
u(le, "interpret");
function mh(r) {
  if (typeof r == "string") {
    var t = { type: r };
    return t.toString = function() {
      return r;
    }, t;
  }
  return r;
}
__name(mh, "mh");
u(mh, "toInvokeSource");
function so(r) {
  return K(K({ type: Yi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var t = ai(r, ["onDone", "onError"]);
    return K(K({}, t), { type: Yi, src: mh(r.src) });
  } });
}
__name(so, "so");
u(so, "toInvokeDefinition");
var mi = "";
var ol = "#";
var lo = "*";
var fi = {};
var hi = u(function(r) {
  return r[0] === ol;
}, "isStateId");
var vh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var gh = u(function(r, t, e) {
  var i = e.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (gt(c.target) || Or(c.target));
  }), l = t === mi ? "the transient event" : "event '".concat(t, "'");
  Ut(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Hc = function() {
  function r(t, e, i, l) {
    var c = this;
    i === void 0 && (i = "context" in t ? t.context : void 0);
    var f;
    this.config = t, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(vh(), e), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ca), this.id = this.config.id || zt([this.machine.key], vt(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, qt || Ut(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ci(this.config.states, function(p, m) {
      var x, S = new r(p, {}, void 0, { parent: c, key: m });
      return Object.assign(c.idMap, K((x = {}, x[S.id] = S, x), S.idMap)), S;
    }) : fi;
    var b = 0;
    function h(p) {
      var m, x;
      p.order = b++;
      try {
        for (var S = mt(kn(p)), M = S.next(); !M.done; M = S.next()) {
          var _ = M.value;
          h(_);
        }
      } catch (C) {
        m = { error: C };
      } finally {
        try {
          M && !M.done && (x = S.return) && x.call(S);
        } finally {
          if (m)
            throw m.error;
        }
      }
    }
    __name(h, "h");
    u(h, "dfs"), h(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(p) {
      var m = p.event;
      return m === mi;
    }) : mi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = $e(this.config.entry || this.config.onEntry).map(function(p) {
      return pi(p);
    }), this.onExit = $e(this.config.exit || this.config.onExit).map(function(p) {
      return pi(p);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = $e(this.config.invoke).map(function(p, m) {
      var x, S;
      if (Or(p)) {
        var M = eo(c.id, m);
        return c.machine.options.services = K((x = {}, x[M] = p, x), c.machine.options.services), so({ src: M, id: M });
      } else if (gt(p.src)) {
        var M = p.id || eo(c.id, m);
        return so(K(K({}, p), { id: M, src: p.src }));
      } else if (Or(p.src) || Tt(p.src)) {
        var M = p.id || eo(c.id, m);
        return c.machine.options.services = K((S = {}, S[M] = p.src, S), c.machine.options.services), so(K(K({ id: M }, p), { src: M }));
      } else {
        var _ = p.src;
        return so(K(K({ id: eo(c.id, m) }, p), { src: _ }));
      }
    }), this.activities = $e(this.config.activities).concat(this.invoke).map(function(p) {
      return Da(p);
    }), this.transition = this.transition.bind(this), this.tags = $e(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || tl(this).forEach(function(t) {
      return t.on;
    });
  }, r.prototype.withConfig = function(t, e) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, b = i.services, h = i.delays;
    return new r(this.config, { actions: K(K({}, l), t.actions), activities: K(K({}, c), t.activities), guards: K(K({}, f), t.guards), services: K(K({}, b), t.services), delays: K(K({}, h), t.delays) }, e != null ? e : this.context);
  }, r.prototype.withContext = function(t) {
    return new r(this.config, this.options, t);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Tt(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ci(this.states, function(t) {
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
    var e = t === mi, i = this.transitions.filter(function(l) {
      var c = l.eventType === t;
      return e ? c : c || l.eventType === lo;
    });
    return this.__cache.candidates[t] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var t = this, e = this.config.after;
    if (!e)
      return [];
    var i = u(function(c, f) {
      var b = Tt(c) ? "".concat(t.id, ":delay[").concat(f, "]") : c, h = Oc(b, t.id);
      return t.onEntry.push(Js(h, { delay: c })), t.onExit.push(Sc(h)), h;
    }, "mutateEntryExit"), l = qr(e) ? e.map(function(c, f) {
      var b = i(c.delay, f);
      return K(K({}, c), { event: b });
    }) : Nt(Object.keys(e).map(function(c, f) {
      var b = e[c], h = gt(b) ? { target: b } : b, p = isNaN(+c) ? c : +c, m = i(p, f);
      return $e(h).map(function(x) {
        return K(K({}, x), { event: m, delay: p });
      });
    }));
    return l.map(function(c) {
      var f = c.delay;
      return K(K({}, t.formatTransition(c)), { delay: f });
    });
  }, r.prototype.getStateNodes = function(t) {
    var e, i = this;
    if (!t)
      return [];
    var l = t instanceof yr ? t.value : ui(t, this.delimiter);
    if (gt(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((e = {}, e[l] = c, e)) : [this, this.states[l]];
    }
    var f = Object.keys(l), b = [this];
    return b.push.apply(b, zt([], vt(Nt(f.map(function(h) {
      return i.getStateNode(h).getStateNodes(l[h]);
    }))), false)), b;
  }, r.prototype.handles = function(t) {
    var e = Ma(t);
    return this.events.includes(e);
  }, r.prototype.resolveState = function(t) {
    var e = t instanceof yr ? t : yr.create(t), i = Array.from(zn([], this.getStateNodes(e.value)));
    return new yr(K(K({}, e), { value: this.resolve(e.value), configuration: i, done: Rn(i, this), tags: el(i), machine: this.machine }));
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
        var p = h.value, m = t[p];
        if (!!m) {
          var x = this.getStateNode(p), S = x._transition(m, e, i);
          S && (f[p] = S);
        }
      }
    } catch (z) {
      l = { error: z };
    } finally {
      try {
        h && !h.done && (c = b.return) && c.call(b);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var M = Object.keys(f).map(function(z) {
      return f[z];
    }), _ = Nt(M.map(function(z) {
      return z.transitions;
    })), C = M.some(function(z) {
      return z.transitions.length > 0;
    });
    if (!C)
      return this.next(e, i);
    var P = Nt(M.map(function(z) {
      return z.entrySet;
    })), k = Nt(Object.keys(f).map(function(z) {
      return f[z].configuration;
    }));
    return { transitions: _, entrySet: P, exitSet: Nt(M.map(function(z) {
      return z.exitSet;
    })), configuration: k, source: e, actions: Nt(Object.keys(f).map(function(z) {
      return f[z].actions;
    })) };
  }, r.prototype._transition = function(t, e, i) {
    return gt(t) ? this.transitionLeafNode(t, e, i) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, e, i) : this.transitionParallelNode(t, e, i);
  }, r.prototype.getTransitionData = function(t, e) {
    return this._transition(t.value, t, ee(e));
  }, r.prototype.next = function(t, e) {
    var i, l, c = this, f = e.name, b = [], h = [], p;
    try {
      for (var m = mt(this.getCandidates(f)), x = m.next(); !x.done; x = m.next()) {
        var S = x.value, M = S.cond, _ = S.in, C = t.context, P = _ ? gt(_) && hi(_) ? t.matches(ui(this.getStateNodeById(_).path, this.delimiter)) : Ki(ui(_, this.delimiter), pc(this.path.slice(0, -2))(t.value)) : true, k = false;
        try {
          k = !M || _a(this.machine, M, C, e, t);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(M.name || M.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (k && P) {
          S.target !== void 0 && (h = S.target), b.push.apply(b, zt([], vt(S.actions), false)), p = S;
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
        return { transitions: [p], entrySet: [], exitSet: [], configuration: t.value ? [this] : [], source: t, actions: b };
      var z = Nt(h.map(function(B) {
        return c.getRelativeStateNodes(B, t.historyValue);
      })), q = !!p.internal, T = q ? [] : Nt(z.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [p], entrySet: T, exitSet: q ? [] : [this], configuration: z, source: t, actions: b };
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
    var c, f, b, h, p = zn([], l ? this.getStateNodes(l.value) : [this]), m = t.configuration.length ? zn(p, t.configuration) : p;
    try {
      for (var x = mt(m), S = x.next(); !S.done; S = x.next()) {
        var M = S.value;
        oo(p, M) || t.entrySet.push(M);
      }
    } catch (U) {
      c = { error: U };
    } finally {
      try {
        S && !S.done && (f = x.return) && f.call(x);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var _ = mt(p), C = _.next(); !C.done; C = _.next()) {
        var M = C.value;
        (!oo(m, M) || oo(t.exitSet, M.parent)) && t.exitSet.push(M);
      }
    } catch (U) {
      b = { error: U };
    } finally {
      try {
        C && !C.done && (h = _.return) && h.call(_);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var P = Nt(t.entrySet.map(function(U) {
      var X = [];
      if (U.type !== "final")
        return X;
      var H = U.parent;
      if (!H.parent)
        return X;
      X.push(no(U.id, U.doneData), no(H.id, U.doneData ? Mn(U.doneData, e, i) : void 0));
      var V = H.parent;
      return V.type === "parallel" && kn(V).every(function(it) {
        return Rn(t.configuration, it);
      }) && X.push(no(V.id)), X;
    }));
    t.exitSet.sort(function(U, X) {
      return X.order - U.order;
    }), t.entrySet.sort(function(U, X) {
      return U.order - X.order;
    });
    var k = new Set(t.entrySet), z = new Set(t.exitSet), q = vt([Nt(Array.from(k).map(function(U) {
      return zt(zt([], vt(U.activities.map(function(X) {
        return Cc(X);
      })), false), vt(U.onEntry), false);
    })).concat(P.map(Ec)), Nt(Array.from(z).map(function(U) {
      return zt(zt([], vt(U.onExit), false), vt(U.activities.map(function(X) {
        return Tc(X);
      })), false);
    }))], 2), T = q[0], B = q[1], D = ro(B.concat(t.actions).concat(T), this.machine.options.actions);
    return D;
  }, r.prototype.transition = function(t, e, i) {
    t === void 0 && (t = this.initialState);
    var l = ee(e), c;
    if (t instanceof yr)
      c = i === void 0 ? t : this.resolveState(yr.from(t, i));
    else {
      var f = gt(t) ? this.resolve(Zi(this.getResolvedPath(t))) : this.resolve(t), b = i != null ? i : this.machine.context;
      c = this.resolveState(yr.from(f, b));
    }
    if (!qt && l.name === lo)
      throw new Error("An event cannot have the wildcard type ('".concat(lo, "')"));
    if (this.strict && !this.events.includes(l.name) && !hc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var h = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, p = zn([], this.getStateNodes(c.value)), m = h.configuration.length ? zn(p, h.configuration) : p;
    return h.configuration = zt([], vt(m), false), this.resolveTransition(h, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(t, e, i) {
    var l, c = t.actions;
    return t = this.transition(t, e), t._event = i, t.event = i.data, (l = t.actions).unshift.apply(l, zt([], vt(c), false)), t;
  }, r.prototype.resolveTransition = function(t, e, i, l) {
    var c, f, b = this;
    l === void 0 && (l = In);
    var h = t.configuration, p = !e || t.transitions.length > 0, m = p ? Rc(this.machine, h) : void 0, x = e ? e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0 : void 0, S = this.getActions(t, i, l, e), M = e ? K({}, e.activities) : {};
    try {
      for (var _ = mt(S), C = _.next(); !C.done; C = _.next()) {
        var P = C.value;
        P.type === Vi ? M[P.activity.id || P.activity.type] = P : P.type === si && (M[P.activity.id || P.activity.type] = false);
      }
    } catch (ft) {
      c = { error: ft };
    } finally {
      try {
        C && !C.done && (f = _.return) && f.call(_);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var k = vt(Ra(this, e, i, l, S, this.machine.config.preserveActionOrder), 2), z = k[0], q = k[1], T = vt(Ia(z, function(ft) {
      return ft.type === li || ft.type === On && ft.to === on.Internal;
    }), 2), B = T[0], D = T[1], U = z.filter(function(ft) {
      var Zt;
      return ft.type === Vi && ((Zt = ft.activity) === null || Zt === void 0 ? void 0 : Zt.type) === Yi;
    }), X = U.reduce(function(ft, Zt) {
      return ft[Zt.activity.id] = Ic(Zt.activity, b.machine, q, l), ft;
    }, e ? K({}, e.children) : {}), H = p ? t.configuration : e ? e.configuration : [], V = Rn(H, this), it = new yr({ value: m || e.value, context: q, _event: l, _sessionid: e ? e._sessionid : null, historyValue: m ? x ? gc(x, m) : void 0 : e ? e.historyValue : void 0, history: !m || t.source ? e : void 0, actions: m ? D : [], activities: m ? M : e ? e.activities : {}, events: [], configuration: H, transitions: t.transitions, children: X, done: V, tags: el(H), machine: this }), ot = i !== q;
    it.changed = l.name === Xi || ot;
    var Y = it.history;
    Y && delete Y.history;
    var ct = !V && (this._transient || h.some(function(ft) {
      return ft._transient;
    }));
    if (!p && (!ct || l.name === mi))
      return it;
    var Dt = it;
    if (!V)
      for (ct && (Dt = this.resolveRaisedTransition(Dt, { type: ac }, l)); B.length; ) {
        var Wt = B.shift();
        Dt = this.resolveRaisedTransition(Dt, Wt._event, l);
      }
    var Lt = Dt.changed || (Y ? !!Dt.actions.length || ot || typeof Y.value != typeof Dt.value || !rl(Dt.value, Y.value) : void 0);
    return Dt.changed = Lt, Dt.history = Y, Dt;
  }, r.prototype.getStateNode = function(t) {
    if (hi(t))
      return this.machine.getStateNodeById(t);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[t];
    if (!e)
      throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, r.prototype.getStateNodeById = function(t) {
    var e = hi(t) ? t.slice(ol.length) : t;
    if (e === this.id)
      return this;
    var i = this.machine.idMap[e];
    if (!i)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(t) {
    if (typeof t == "string" && hi(t))
      try {
        return this.getStateNodeById(t.slice(1));
      } catch (c) {
      }
    for (var e = Pa(t, this.delimiter).slice(), i = this; e.length; ) {
      var l = e.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(t) {
    var e, i = this;
    if (!t)
      return this.initialStateValue || fi;
    switch (this.type) {
      case "parallel":
        return ci(this.initialStateValue, function(c, f) {
          return c ? i.getStateNode(f).resolve(t[f] || c) : fi;
        });
      case "compound":
        if (gt(t)) {
          var l = this.getStateNode(t);
          return l.type === "parallel" || l.type === "compound" ? (e = {}, e[t] = l.initialStateValue, e) : t;
        }
        return Object.keys(t).length ? ci(t, function(c, f) {
          return c ? i.getStateNode(f).resolve(c) : fi;
        }) : this.initialStateValue || {};
      default:
        return t || fi;
    }
  }, r.prototype.getResolvedPath = function(t) {
    if (hi(t)) {
      var e = this.machine.idMap[t.slice(ol.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(t, "'"));
      return e.path;
    }
    return Pa(t, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var t;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = Xs(this.states, function(i) {
        return i.initialStateValue || fi;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = io(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
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
      gt(e.target) ? t = hi(e.target) ? Zi(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : t = e.target;
    }
    return t;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(t, e, i) {
    return i === void 0 && (i = true), i ? t.type === "history" ? t.resolveHistory(e) : t.initialStateNodes : [t];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var t = this;
    if (io(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return qt || Ut(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = Ji(this.initialStateValue);
    return Nt(e.map(function(i) {
      return t.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(t) {
    if (!t.length)
      return [this];
    var e = vt(t), i = e[0], l = e.slice(1);
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
      return { current: t || this.initialStateValue, states: Xs(this.states, function(e, i) {
        if (!t)
          return e.historyValue();
        var l = gt(t) ? void 0 : t[i];
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
      return l ? Nt(Ji(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = dc(i.path, "states")(t).current;
    return gt(c) ? [i.getStateNode(c)] : Nt(Ji(c).map(function(f) {
      return e.history === "deep" ? i.getFromRelativePath(f) : [i.states[f[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var t = this, e = Nt(Object.keys(this.states).map(function(i) {
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
          var p = h.value, m = c[p];
          if (m.states)
            try {
              for (var x = (i = void 0, mt(m.events)), S = x.next(); !S.done; S = x.next()) {
                var M = S.value;
                f.add("".concat(M));
              }
            } catch (_) {
              i = { error: _ };
            } finally {
              try {
                S && !S.done && (l = x.return) && l.call(x);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (_) {
        t = { error: _ };
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
        if (!gt(i))
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
    var e = this, i = wc(t.target), l = "internal" in t ? t.internal : i ? i.some(function(h) {
      return gt(h) && h[0] === e.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), b = K(K({}, t), { actions: ro($e(t.actions)), cond: Aa(t.cond, c), target: f, source: this, internal: l, eventType: t.event, toJSON: function() {
      return K(K({}, b), { target: b.target ? b.target.map(function(h) {
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
      var c = this.config.on, f = lo, b = c[f], h = b === void 0 ? [] : b, p = ai(c, [typeof f == "symbol" ? f : f + ""]);
      l = Nt(Object.keys(p).map(function(z) {
        !qt && z === mi && Ut(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var q = Pn(z, p[z]);
        return qt || gh(i, z, q), q;
      }).concat(Pn(lo, h)));
    }
    var m = this.config.always ? Pn("", this.config.always) : [], x = this.config.onDone ? Pn(String(no(this.id)), this.config.onDone) : [];
    qt || Ut(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var S = Nt(this.invoke.map(function(z) {
      var q = [];
      return z.onDone && q.push.apply(q, zt([], vt(Pn(String(di(z.id)), z.onDone)), false)), z.onError && q.push.apply(q, zt([], vt(Pn(String(An(z.id)), z.onError)), false)), q;
    })), M = this.after, _ = Nt(zt(zt(zt(zt([], vt(x), false), vt(S), false), vt(l), false), vt(m), false).map(function(z) {
      return $e(z).map(function(q) {
        return i.formatTransition(q);
      });
    }));
    try {
      for (var C = mt(M), P = C.next(); !P.done; P = C.next()) {
        var k = P.value;
        _.push(k);
      }
    } catch (z) {
      t = { error: z };
    } finally {
      try {
        P && !P.done && (e = C.return) && e.call(C);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return _;
  }, r;
}();
function ye(r, t) {
  return new Hc(r, t);
}
__name(ye, "ye");
u(ye, "createMachine");
var uo = oi(Ga(), 1);
var La = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var sl = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Pt(r) {
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
      this.draggableMachine = ye({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, uo.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        La(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), sl(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("operation-xl")));
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
        (0, uo.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => La(this.dropzone), isOnPaletteDropzone: () => sl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && La(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = le(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${te(i.value)}`);
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
      return Z.notNull(i), !sl(i) && !La(i) ? null : i;
    }
    set snapTargets(i) {
      (0, uo.default)(this).draggable({ modifiers: [uo.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
  return u(t, "DraggableMixinClass"), A([N], t.prototype, "operationX", 2), A([N], t.prototype, "operationY", 2), A([N], t.prototype, "grabbed", 2), A([N], t.prototype, "dragging", 2), A([N], t.prototype, "snapped", 2), A([N], t.prototype, "bit", 2), A([N], t.prototype, "debugDraggable", 2), t;
}
__name(Pt, "Pt");
u(Pt, "DraggableMixin");
var Dn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Fc(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(t, "t");
  return u(t, "FlaggableMixinClass"), A([N], t.prototype, "flag", 2), t;
}
__name(Fc, "Fc");
u(Fc, "FlaggableMixin");
var Ft = "top";
var re = "bottom";
var Kt = "right";
var Vt = "left";
var qa = "auto";
var an = [Ft, re, Kt, Vt];
var jr = "start";
var Nn = "end";
var Wc = "clippingParents";
var ja = "viewport";
var vi = "popper";
var Uc = "reference";
var ll = an.reduce(function(r, t) {
  return r.concat([t + "-" + jr, t + "-" + Nn]);
}, []);
var Ba = [].concat(an, [qa]).reduce(function(r, t) {
  return r.concat([t, t + "-" + jr, t + "-" + Nn]);
}, []);
var bh = "beforeRead";
var yh = "read";
var wh = "afterRead";
var xh = "beforeMain";
var Eh = "main";
var Sh = "afterMain";
var Ch = "beforeWrite";
var Th = "write";
var Oh = "afterWrite";
var Vc = [bh, yh, wh, xh, Eh, Sh, Ch, Th, Oh];
function ue(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(ue, "ue");
u(ue, "getNodeName");
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
function Mr(r) {
  var t = Yt(r).Element;
  return r instanceof t || r instanceof Element;
}
__name(Mr, "Mr");
u(Mr, "isElement");
function ne(r) {
  var t = Yt(r).HTMLElement;
  return r instanceof t || r instanceof HTMLElement;
}
__name(ne, "ne");
u(ne, "isHTMLElement");
function Ha(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var t = Yt(r).ShadowRoot;
  return r instanceof t || r instanceof ShadowRoot;
}
__name(Ha, "Ha");
u(Ha, "isShadowRoot");
function Mh(r) {
  var t = r.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, l = t.attributes[e] || {}, c = t.elements[e];
    !ne(c) || !ue(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var b = l[f];
      b === false ? c.removeAttribute(f) : c.setAttribute(f, b === true ? "" : b);
    }));
  });
}
__name(Mh, "Mh");
u(Mh, "applyStyles");
function Ph(r) {
  var t = r.state, e = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var l = t.elements[i], c = t.attributes[i] || {}, f = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), b = f.reduce(function(h, p) {
        return h[p] = "", h;
      }, {});
      !ne(l) || !ue(l) || (Object.assign(l.style, b), Object.keys(c).forEach(function(h) {
        l.removeAttribute(h);
      }));
    });
  };
}
__name(Ph, "Ph");
u(Ph, "effect");
var co = { name: "applyStyles", enabled: true, phase: "write", fn: Mh, effect: Ph, requires: ["computeStyles"] };
function ce(r) {
  return r.split("-")[0];
}
__name(ce, "ce");
u(ce, "getBasePlacement");
var wr = Math.max;
var Gn = Math.min;
var Br = Math.round;
function Je(r, t) {
  t === void 0 && (t = false);
  var e = r.getBoundingClientRect(), i = 1, l = 1;
  if (ne(r) && t) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Br(e.width) / f || 1), c > 0 && (l = Br(e.height) / c || 1);
  }
  return { width: e.width / i, height: e.height / l, top: e.top / l, right: e.right / i, bottom: e.bottom / l, left: e.left / i, x: e.left / i, y: e.top / l };
}
__name(Je, "Je");
u(Je, "getBoundingClientRect");
function Ln(r) {
  var t = Je(r), e = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: r.offsetLeft, y: r.offsetTop, width: e, height: i };
}
__name(Ln, "Ln");
u(Ln, "getLayoutRect");
function po(r, t) {
  var e = t.getRootNode && t.getRootNode();
  if (r.contains(t))
    return true;
  if (e && Ha(e)) {
    var i = t;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(po, "po");
u(po, "contains");
function Pe(r) {
  return Yt(r).getComputedStyle(r);
}
__name(Pe, "Pe");
u(Pe, "getComputedStyle");
function ul(r) {
  return ["table", "td", "th"].indexOf(ue(r)) >= 0;
}
__name(ul, "ul");
u(ul, "isTableElement");
function we(r) {
  return ((Mr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(we, "we");
u(we, "getDocumentElement");
function Hr(r) {
  return ue(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ha(r) ? r.host : null) || we(r);
}
__name(Hr, "Hr");
u(Hr, "getParentNode");
function Yc(r) {
  return !ne(r) || Pe(r).position === "fixed" ? null : r.offsetParent;
}
__name(Yc, "Yc");
u(Yc, "getTrueOffsetParent");
function Ih(r) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && ne(r)) {
    var i = Pe(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Hr(r); ne(l) && ["html", "body"].indexOf(ue(l)) < 0; ) {
    var c = Pe(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || t && c.willChange === "filter" || t && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(Ih, "Ih");
u(Ih, "getContainingBlock");
function xr(r) {
  for (var t = Yt(r), e = Yc(r); e && ul(e) && Pe(e).position === "static"; )
    e = Yc(e);
  return e && (ue(e) === "html" || ue(e) === "body" && Pe(e).position === "static") ? t : e || Ih(r) || t;
}
__name(xr, "xr");
u(xr, "getOffsetParent");
function qn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(qn, "qn");
u(qn, "getMainAxisFromPlacement");
function jn(r, t, e) {
  return wr(r, Gn(t, e));
}
__name(jn, "jn");
u(jn, "within");
function Xc(r, t, e) {
  var i = jn(r, t, e);
  return i > e ? e : i;
}
__name(Xc, "Xc");
u(Xc, "withinMaxClamp");
function fo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(fo, "fo");
u(fo, "getFreshSideObject");
function ho(r) {
  return Object.assign({}, fo(), r);
}
__name(ho, "ho");
u(ho, "mergePaddingObject");
function mo(r, t) {
  return t.reduce(function(e, i) {
    return e[i] = r, e;
  }, {});
}
__name(mo, "mo");
u(mo, "expandToHashMap");
var Ah = u(function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, ho(typeof t != "number" ? t : mo(t, an));
}, "toPaddingObject");
function _h(r) {
  var t, e = r.state, i = r.name, l = r.options, c = e.elements.arrow, f = e.modifiersData.popperOffsets, b = ce(e.placement), h = qn(b), p = [Vt, Kt].indexOf(b) >= 0, m = p ? "height" : "width";
  if (!(!c || !f)) {
    var x = Ah(l.padding, e), S = Ln(c), M = h === "y" ? Ft : Vt, _ = h === "y" ? re : Kt, C = e.rects.reference[m] + e.rects.reference[h] - f[h] - e.rects.popper[m], P = f[h] - e.rects.reference[h], k = xr(c), z = k ? h === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, q = C / 2 - P / 2, T = x[M], B = z - S[m] - x[_], D = z / 2 - S[m] / 2 + q, U = jn(T, D, B), X = h;
    e.modifiersData[i] = (t = {}, t[X] = U, t.centerOffset = U - D, t);
  }
}
__name(_h, "_h");
u(_h, "arrow");
function kh(r) {
  var t = r.state, e = r.options, i = e.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || !po(t.elements.popper, l) || (t.elements.arrow = l));
}
__name(kh, "kh");
u(kh, "effect");
var Zc = { name: "arrow", enabled: true, phase: "main", fn: _h, effect: kh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qe(r) {
  return r.split("-")[1];
}
__name(Qe, "Qe");
u(Qe, "getVariation");
var zh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Rh(r) {
  var t = r.x, e = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Br(t * l) / l || 0, y: Br(e * l) / l || 0 };
}
__name(Rh, "Rh");
u(Rh, "roundOffsetsByDPR");
function Kc(r) {
  var t, e = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, b = r.position, h = r.gpuAcceleration, p = r.adaptive, m = r.roundOffsets, x = r.isFixed, S = f.x, M = S === void 0 ? 0 : S, _ = f.y, C = _ === void 0 ? 0 : _, P = typeof m == "function" ? m({ x: M, y: C }) : { x: M, y: C };
  M = P.x, C = P.y;
  var k = f.hasOwnProperty("x"), z = f.hasOwnProperty("y"), q = Vt, T = Ft, B = window;
  if (p) {
    var D = xr(e), U = "clientHeight", X = "clientWidth";
    if (D === Yt(e) && (D = we(e), Pe(D).position !== "static" && b === "absolute" && (U = "scrollHeight", X = "scrollWidth")), D = D, l === Ft || (l === Vt || l === Kt) && c === Nn) {
      T = re;
      var H = x && B.visualViewport ? B.visualViewport.height : D[U];
      C -= H - i.height, C *= h ? 1 : -1;
    }
    if (l === Vt || (l === Ft || l === re) && c === Nn) {
      q = Kt;
      var V = x && B.visualViewport ? B.visualViewport.width : D[X];
      M -= V - i.width, M *= h ? 1 : -1;
    }
  }
  var it = Object.assign({ position: b }, p && zh), ot = m === true ? Rh({ x: M, y: C }) : { x: M, y: C };
  if (M = ot.x, C = ot.y, h) {
    var Y;
    return Object.assign({}, it, (Y = {}, Y[T] = z ? "0" : "", Y[q] = k ? "0" : "", Y.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + M + "px, " + C + "px)" : "translate3d(" + M + "px, " + C + "px, 0)", Y));
  }
  return Object.assign({}, it, (t = {}, t[T] = z ? C + "px" : "", t[q] = k ? M + "px" : "", t.transform = "", t));
}
__name(Kc, "Kc");
u(Kc, "mapToStyles");
function Dh(r) {
  var t = r.state, e = r.options, i = e.gpuAcceleration, l = i === void 0 ? true : i, c = e.adaptive, f = c === void 0 ? true : c, b = e.roundOffsets, h = b === void 0 ? true : b;
  if (false)
    var p;
  var m = { placement: ce(t.placement), variation: Qe(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: l, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kc(Object.assign({}, m, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: f, roundOffsets: h })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kc(Object.assign({}, m, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: h })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
__name(Dh, "Dh");
u(Dh, "computeStyles");
var Jc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Dh, data: {} };
var $a = { passive: true };
function Nh(r) {
  var t = r.state, e = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, b = f === void 0 ? true : f, h = Yt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return c && p.forEach(function(m) {
    m.addEventListener("scroll", e.update, $a);
  }), b && h.addEventListener("resize", e.update, $a), function() {
    c && p.forEach(function(m) {
      m.removeEventListener("scroll", e.update, $a);
    }), b && h.removeEventListener("resize", e.update, $a);
  };
}
__name(Nh, "Nh");
u(Nh, "effect");
var Qc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Nh, data: {} };
var Gh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gi(r) {
  return r.replace(/left|right|bottom|top/g, function(t) {
    return Gh[t];
  });
}
__name(gi, "gi");
u(gi, "getOppositePlacement");
var Lh = { start: "end", end: "start" };
function Fa(r) {
  return r.replace(/start|end/g, function(t) {
    return Lh[t];
  });
}
__name(Fa, "Fa");
u(Fa, "getOppositeVariationPlacement");
function Bn(r) {
  var t = Yt(r), e = t.pageXOffset, i = t.pageYOffset;
  return { scrollLeft: e, scrollTop: i };
}
__name(Bn, "Bn");
u(Bn, "getWindowScroll");
function Hn(r) {
  return Je(we(r)).left + Bn(r).scrollLeft;
}
__name(Hn, "Hn");
u(Hn, "getWindowScrollBarX");
function cl(r) {
  var t = Yt(r), e = we(r), i = t.visualViewport, l = e.clientWidth, c = e.clientHeight, f = 0, b = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, b = i.offsetTop)), { width: l, height: c, x: f + Hn(r), y: b };
}
__name(cl, "cl");
u(cl, "getViewportRect");
function pl(r) {
  var t, e = we(r), i = Bn(r), l = (t = r.ownerDocument) == null ? void 0 : t.body, c = wr(e.scrollWidth, e.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = wr(e.scrollHeight, e.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), b = -i.scrollLeft + Hn(r), h = -i.scrollTop;
  return Pe(l || e).direction === "rtl" && (b += wr(e.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: b, y: h };
}
__name(pl, "pl");
u(pl, "getDocumentRect");
function $n(r) {
  var t = Pe(r), e = t.overflow, i = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + l + i);
}
__name($n, "$n");
u($n, "isScrollParent");
function Wa(r) {
  return ["html", "body", "#document"].indexOf(ue(r)) >= 0 ? r.ownerDocument.body : ne(r) && $n(r) ? r : Wa(Hr(r));
}
__name(Wa, "Wa");
u(Wa, "getScrollParent");
function sn(r, t) {
  var e;
  t === void 0 && (t = []);
  var i = Wa(r), l = i === ((e = r.ownerDocument) == null ? void 0 : e.body), c = Yt(i), f = l ? [c].concat(c.visualViewport || [], $n(i) ? i : []) : i, b = t.concat(f);
  return l ? b : b.concat(sn(Hr(f)));
}
__name(sn, "sn");
u(sn, "listScrollParents");
function bi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(bi, "bi");
u(bi, "rectToClientRect");
function qh(r) {
  var t = Je(r);
  return t.top = t.top + r.clientTop, t.left = t.left + r.clientLeft, t.bottom = t.top + r.clientHeight, t.right = t.left + r.clientWidth, t.width = r.clientWidth, t.height = r.clientHeight, t.x = t.left, t.y = t.top, t;
}
__name(qh, "qh");
u(qh, "getInnerBoundingClientRect");
function tp(r, t) {
  return t === ja ? bi(cl(r)) : Mr(t) ? qh(t) : bi(pl(we(r)));
}
__name(tp, "tp");
u(tp, "getClientRectFromMixedType");
function jh(r) {
  var t = sn(Hr(r)), e = ["absolute", "fixed"].indexOf(Pe(r).position) >= 0, i = e && ne(r) ? xr(r) : r;
  return Mr(i) ? t.filter(function(l) {
    return Mr(l) && po(l, i) && ue(l) !== "body";
  }) : [];
}
__name(jh, "jh");
u(jh, "getClippingParents");
function dl(r, t, e) {
  var i = t === "clippingParents" ? jh(r) : [].concat(t), l = [].concat(i, [e]), c = l[0], f = l.reduce(function(b, h) {
    var p = tp(r, h);
    return b.top = wr(p.top, b.top), b.right = Gn(p.right, b.right), b.bottom = Gn(p.bottom, b.bottom), b.left = wr(p.left, b.left), b;
  }, tp(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(dl, "dl");
u(dl, "getClippingRect");
function vo(r) {
  var t = r.reference, e = r.element, i = r.placement, l = i ? ce(i) : null, c = i ? Qe(i) : null, f = t.x + t.width / 2 - e.width / 2, b = t.y + t.height / 2 - e.height / 2, h;
  switch (l) {
    case Ft:
      h = { x: f, y: t.y - e.height };
      break;
    case re:
      h = { x: f, y: t.y + t.height };
      break;
    case Kt:
      h = { x: t.x + t.width, y: b };
      break;
    case Vt:
      h = { x: t.x - e.width, y: b };
      break;
    default:
      h = { x: t.x, y: t.y };
  }
  var p = l ? qn(l) : null;
  if (p != null) {
    var m = p === "y" ? "height" : "width";
    switch (c) {
      case jr:
        h[p] = h[p] - (t[m] / 2 - e[m] / 2);
        break;
      case Nn:
        h[p] = h[p] + (t[m] / 2 - e[m] / 2);
        break;
      default:
    }
  }
  return h;
}
__name(vo, "vo");
u(vo, "computeOffsets");
function Er(r, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, l = i === void 0 ? r.placement : i, c = e.boundary, f = c === void 0 ? Wc : c, b = e.rootBoundary, h = b === void 0 ? ja : b, p = e.elementContext, m = p === void 0 ? vi : p, x = e.altBoundary, S = x === void 0 ? false : x, M = e.padding, _ = M === void 0 ? 0 : M, C = ho(typeof _ != "number" ? _ : mo(_, an)), P = m === vi ? Uc : vi, k = r.rects.popper, z = r.elements[S ? P : m], q = dl(Mr(z) ? z : z.contextElement || we(r.elements.popper), f, h), T = Je(r.elements.reference), B = vo({ reference: T, element: k, strategy: "absolute", placement: l }), D = bi(Object.assign({}, k, B)), U = m === vi ? D : T, X = { top: q.top - U.top + C.top, bottom: U.bottom - q.bottom + C.bottom, left: q.left - U.left + C.left, right: U.right - q.right + C.right }, H = r.modifiersData.offset;
  if (m === vi && H) {
    var V = H[l];
    Object.keys(X).forEach(function(it) {
      var ot = [Kt, re].indexOf(it) >= 0 ? 1 : -1, Y = [Ft, re].indexOf(it) >= 0 ? "y" : "x";
      X[it] += V[Y] * ot;
    });
  }
  return X;
}
__name(Er, "Er");
u(Er, "detectOverflow");
function fl(r, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, l = e.boundary, c = e.rootBoundary, f = e.padding, b = e.flipVariations, h = e.allowedAutoPlacements, p = h === void 0 ? Ba : h, m = Qe(i), x = m ? b ? ll : ll.filter(function(_) {
    return Qe(_) === m;
  }) : an, S = x.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  S.length === 0 && (S = x);
  var M = S.reduce(function(_, C) {
    return _[C] = Er(r, { placement: C, boundary: l, rootBoundary: c, padding: f })[ce(C)], _;
  }, {});
  return Object.keys(M).sort(function(_, C) {
    return M[_] - M[C];
  });
}
__name(fl, "fl");
u(fl, "computeAutoPlacement");
function Bh(r) {
  if (ce(r) === qa)
    return [];
  var t = gi(r);
  return [Fa(r), t, Fa(t)];
}
__name(Bh, "Bh");
u(Bh, "getExpandedFallbackPlacements");
function Hh(r) {
  var t = r.state, e = r.options, i = r.name;
  if (!t.modifiersData[i]._skip) {
    for (var l = e.mainAxis, c = l === void 0 ? true : l, f = e.altAxis, b = f === void 0 ? true : f, h = e.fallbackPlacements, p = e.padding, m = e.boundary, x = e.rootBoundary, S = e.altBoundary, M = e.flipVariations, _ = M === void 0 ? true : M, C = e.allowedAutoPlacements, P = t.options.placement, k = ce(P), z = k === P, q = h || (z || !_ ? [gi(P)] : Bh(P)), T = [P].concat(q).reduce(function(tt, Te) {
      return tt.concat(ce(Te) === qa ? fl(t, { placement: Te, boundary: m, rootBoundary: x, padding: p, flipVariations: _, allowedAutoPlacements: C }) : Te);
    }, []), B = t.rects.reference, D = t.rects.popper, U = /* @__PURE__ */ new Map(), X = true, H = T[0], V = 0; V < T.length; V++) {
      var it = T[V], ot = ce(it), Y = Qe(it) === jr, ct = [Ft, re].indexOf(ot) >= 0, Dt = ct ? "width" : "height", Wt = Er(t, { placement: it, boundary: m, rootBoundary: x, altBoundary: S, padding: p }), Lt = ct ? Y ? Kt : Vt : Y ? re : Ft;
      B[Dt] > D[Dt] && (Lt = gi(Lt));
      var ft = gi(Lt), Zt = [];
      if (c && Zt.push(Wt[ot] <= 0), b && Zt.push(Wt[Lt] <= 0, Wt[ft] <= 0), Zt.every(function(tt) {
        return tt;
      })) {
        H = it, X = false;
        break;
      }
      U.set(it, Zt);
    }
    if (X)
      for (var Qt = _ ? 3 : 1, Ne = u(function(Te) {
        var Oe = T.find(function(kr) {
          var Ve = U.get(kr);
          if (Ve)
            return Ve.slice(0, Te).every(function(hr) {
              return hr;
            });
        });
        if (Oe)
          return H = Oe, "break";
      }, "_loop"), Ae = Qt; Ae > 0; Ae--) {
        var _r = Ne(Ae);
        if (_r === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[i]._skip = true, t.placement = H, t.reset = true);
  }
}
__name(Hh, "Hh");
u(Hh, "flip");
var ep = { name: "flip", enabled: true, phase: "main", fn: Hh, requiresIfExists: ["offset"], data: { _skip: false } };
function rp(r, t, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: r.top - t.height - e.y, right: r.right - t.width + e.x, bottom: r.bottom - t.height + e.y, left: r.left - t.width - e.x };
}
__name(rp, "rp");
u(rp, "getSideOffsets");
function np(r) {
  return [Ft, Kt, re, Vt].some(function(t) {
    return r[t] >= 0;
  });
}
__name(np, "np");
u(np, "isAnySideFullyClipped");
function $h(r) {
  var t = r.state, e = r.name, i = t.rects.reference, l = t.rects.popper, c = t.modifiersData.preventOverflow, f = Er(t, { elementContext: "reference" }), b = Er(t, { altBoundary: true }), h = rp(f, i), p = rp(b, l, c), m = np(h), x = np(p);
  t.modifiersData[e] = { referenceClippingOffsets: h, popperEscapeOffsets: p, isReferenceHidden: m, hasPopperEscaped: x }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": m, "data-popper-escaped": x });
}
__name($h, "$h");
u($h, "hide");
var ip = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: $h };
function Fh(r, t, e) {
  var i = ce(r), l = [Vt, Ft].indexOf(i) >= 0 ? -1 : 1, c = typeof e == "function" ? e(Object.assign({}, t, { placement: r })) : e, f = c[0], b = c[1];
  return f = f || 0, b = (b || 0) * l, [Vt, Kt].indexOf(i) >= 0 ? { x: b, y: f } : { x: f, y: b };
}
__name(Fh, "Fh");
u(Fh, "distanceAndSkiddingToXY");
function Wh(r) {
  var t = r.state, e = r.options, i = r.name, l = e.offset, c = l === void 0 ? [0, 0] : l, f = Ba.reduce(function(m, x) {
    return m[x] = Fh(x, t.rects, c), m;
  }, {}), b = f[t.placement], h = b.x, p = b.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += h, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = f;
}
__name(Wh, "Wh");
u(Wh, "offset");
var op = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Wh };
function Uh(r) {
  var t = r.state, e = r.name;
  t.modifiersData[e] = vo({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
__name(Uh, "Uh");
u(Uh, "popperOffsets");
var ap = { name: "popperOffsets", enabled: true, phase: "read", fn: Uh, data: {} };
function hl(r) {
  return r === "x" ? "y" : "x";
}
__name(hl, "hl");
u(hl, "getAltAxis");
function Vh(r) {
  var t = r.state, e = r.options, i = r.name, l = e.mainAxis, c = l === void 0 ? true : l, f = e.altAxis, b = f === void 0 ? false : f, h = e.boundary, p = e.rootBoundary, m = e.altBoundary, x = e.padding, S = e.tether, M = S === void 0 ? true : S, _ = e.tetherOffset, C = _ === void 0 ? 0 : _, P = Er(t, { boundary: h, rootBoundary: p, padding: x, altBoundary: m }), k = ce(t.placement), z = Qe(t.placement), q = !z, T = qn(k), B = hl(T), D = t.modifiersData.popperOffsets, U = t.rects.reference, X = t.rects.popper, H = typeof C == "function" ? C(Object.assign({}, t.rects, { placement: t.placement })) : C, V = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), it = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ot = { x: 0, y: 0 };
  if (!!D) {
    if (c) {
      var Y, ct = T === "y" ? Ft : Vt, Dt = T === "y" ? re : Kt, Wt = T === "y" ? "height" : "width", Lt = D[T], ft = Lt + P[ct], Zt = Lt - P[Dt], Qt = M ? -X[Wt] / 2 : 0, Ne = z === jr ? U[Wt] : X[Wt], Ae = z === jr ? -X[Wt] : -U[Wt], _r = t.elements.arrow, tt = M && _r ? Ln(_r) : { width: 0, height: 0 }, Te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fo(), Oe = Te[ct], kr = Te[Dt], Ve = jn(0, U[Wt], tt[Wt]), hr = q ? U[Wt] / 2 - Qt - Ve - Oe - V.mainAxis : Ne - Ve - Oe - V.mainAxis, mr = q ? -U[Wt] / 2 + Qt + Ve + kr + V.mainAxis : Ae + Ve + kr + V.mainAxis, Ge = t.elements.arrow && xr(t.elements.arrow), Yn = Ge ? T === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, _e = (Y = it == null ? void 0 : it[T]) != null ? Y : 0, fn = Lt + hr - _e - Yn, wt = Lt + mr - _e, Yr = jn(M ? Gn(ft, fn) : ft, Lt, M ? wr(Zt, wt) : Zt);
      D[T] = Yr, ot[T] = Yr - Lt;
    }
    if (b) {
      var Xr, ke = T === "x" ? Ft : Vt, hn = T === "x" ? re : Kt, vr = D[B], gr = B === "y" ? "height" : "width", mn = vr + P[ke], de = vr - P[hn], zr = [Ft, Vt].indexOf(k) !== -1, Le = (Xr = it == null ? void 0 : it[B]) != null ? Xr : 0, Xn = zr ? mn : vr - U[gr] - X[gr] - Le + V.altAxis, Rr = zr ? vr + U[gr] + X[gr] - Le - V.altAxis : de, vn = M && zr ? Xc(Xn, vr, Rr) : jn(M ? Xn : mn, vr, M ? Rr : de);
      D[B] = vn, ot[B] = vn - vr;
    }
    t.modifiersData[i] = ot;
  }
}
__name(Vh, "Vh");
u(Vh, "preventOverflow");
var sp = { name: "preventOverflow", enabled: true, phase: "main", fn: Vh, requiresIfExists: ["offset"] };
function ml(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(ml, "ml");
u(ml, "getHTMLElementScroll");
function vl(r) {
  return r === Yt(r) || !ne(r) ? Bn(r) : ml(r);
}
__name(vl, "vl");
u(vl, "getNodeScroll");
function Yh(r) {
  var t = r.getBoundingClientRect(), e = Br(t.width) / r.offsetWidth || 1, i = Br(t.height) / r.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
__name(Yh, "Yh");
u(Yh, "isElementScaled");
function gl(r, t, e) {
  e === void 0 && (e = false);
  var i = ne(t), l = ne(t) && Yh(t), c = we(t), f = Je(r, l), b = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 };
  return (i || !i && !e) && ((ue(t) !== "body" || $n(c)) && (b = vl(t)), ne(t) ? (h = Je(t, true), h.x += t.clientLeft, h.y += t.clientTop) : c && (h.x = Hn(c))), { x: f.left + b.scrollLeft - h.x, y: f.top + b.scrollTop - h.y, width: f.width, height: f.height };
}
__name(gl, "gl");
u(gl, "getCompositeRect");
function Xh(r) {
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
__name(Xh, "Xh");
u(Xh, "order");
function bl(r) {
  var t = Xh(r);
  return Vc.reduce(function(e, i) {
    return e.concat(t.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(bl, "bl");
u(bl, "orderModifiers");
function yl(r) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(r());
      });
    })), t;
  };
}
__name(yl, "yl");
u(yl, "debounce");
function wl(r) {
  var t = r.reduce(function(e, i) {
    var l = e[i.name];
    return e[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
__name(wl, "wl");
u(wl, "mergeByName");
var lp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function up() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(up, "up");
u(up, "areValidElements");
function cp(r) {
  r === void 0 && (r = {});
  var t = r, e = t.defaultModifiers, i = e === void 0 ? [] : e, l = t.defaultOptions, c = l === void 0 ? lp : l;
  return u(function(b, h, p) {
    p === void 0 && (p = c);
    var m = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, lp, c), modifiersData: {}, elements: { reference: b, popper: h }, attributes: {}, styles: {} }, x = [], S = false, M = { state: m, setOptions: u(function(k) {
      var z = typeof k == "function" ? k(m.options) : k;
      C(), m.options = Object.assign({}, c, m.options, z), m.scrollParents = { reference: Mr(b) ? sn(b) : b.contextElement ? sn(b.contextElement) : [], popper: sn(h) };
      var q = bl(wl([].concat(i, m.options.modifiers)));
      if (m.orderedModifiers = q.filter(function(it) {
        return it.enabled;
      }), false) {
        var T;
        if (getBasePlacement(m.options.placement) === auto)
          var B;
        var D, U, X, H, V;
      }
      return _(), M.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!S) {
        var k = m.elements, z = k.reference, q = k.popper;
        if (!!up(z, q)) {
          m.rects = { reference: gl(z, xr(q), m.options.strategy === "fixed"), popper: Ln(q) }, m.reset = false, m.placement = m.options.placement, m.orderedModifiers.forEach(function(it) {
            return m.modifiersData[it.name] = Object.assign({}, it.data);
          });
          for (var T = 0, B = 0; B < m.orderedModifiers.length; B++) {
            if (m.reset === true) {
              m.reset = false, B = -1;
              continue;
            }
            var D = m.orderedModifiers[B], U = D.fn, X = D.options, H = X === void 0 ? {} : X, V = D.name;
            typeof U == "function" && (m = U({ state: m, options: H, name: V, instance: M }) || m);
          }
        }
      }
    }, "forceUpdate"), update: yl(function() {
      return new Promise(function(P) {
        M.forceUpdate(), P(m);
      });
    }), destroy: u(function() {
      C(), S = true;
    }, "destroy") };
    if (!up(b, h))
      return M;
    M.setOptions(p).then(function(P) {
      !S && p.onFirstUpdate && p.onFirstUpdate(P);
    });
    function _() {
      m.orderedModifiers.forEach(function(P) {
        var k = P.name, z = P.options, q = z === void 0 ? {} : z, T = P.effect;
        if (typeof T == "function") {
          var B = T({ state: m, name: k, instance: M, options: q }), D = u(function() {
          }, "noopFn");
          x.push(B || D);
        }
      });
    }
    __name(_, "_");
    u(_, "runModifierEffects");
    function C() {
      x.forEach(function(P) {
        return P();
      }), x = [];
    }
    __name(C, "C");
    return u(C, "cleanupModifierEffects"), M;
  }, "createPopper");
}
__name(cp, "cp");
u(cp, "popperGenerator");
var Zh = [Qc, ap, Jc, co, op, ep, sp, Zc, ip];
var xl = cp({ defaultModifiers: Zh });
var $r = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Kh = "tippy-box";
var wp = "tippy-content";
var Jh = "tippy-backdrop";
var xp = "tippy-arrow";
var Ep = "tippy-svg-arrow";
var Fn = { passive: true, capture: true };
var Sp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function El(r, t, e) {
  if (Array.isArray(r)) {
    var i = r[t];
    return i == null ? Array.isArray(e) ? e[t] : e : i;
  }
  return r;
}
__name(El, "El");
u(El, "getValueAtIndexOrReturn");
function Pl(r, t) {
  var e = {}.toString.call(r);
  return e.indexOf("[object") === 0 && e.indexOf(t + "]") > -1;
}
__name(Pl, "Pl");
u(Pl, "isType");
function Cp(r, t) {
  return typeof r == "function" ? r.apply(void 0, t) : r;
}
__name(Cp, "Cp");
u(Cp, "invokeWithArgsOrReturn");
function pp(r, t) {
  if (t === 0)
    return r;
  var e;
  return function(i) {
    clearTimeout(e), e = setTimeout(function() {
      r(i);
    }, t);
  };
}
__name(pp, "pp");
u(pp, "debounce");
function Qh(r, t) {
  var e = Object.assign({}, r);
  return t.forEach(function(i) {
    delete e[i];
  }), e;
}
__name(Qh, "Qh");
u(Qh, "removeProperties");
function tm(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(tm, "tm");
u(tm, "splitBySpaces");
function Wn(r) {
  return [].concat(r);
}
__name(Wn, "Wn");
u(Wn, "normalizeToArray");
function dp(r, t) {
  r.indexOf(t) === -1 && r.push(t);
}
__name(dp, "dp");
u(dp, "pushIfUnique");
function em(r) {
  return r.filter(function(t, e) {
    return r.indexOf(t) === e;
  });
}
__name(em, "em");
u(em, "unique");
function rm(r) {
  return r.split("-")[0];
}
__name(rm, "rm");
u(rm, "getBasePlacement");
function Va(r) {
  return [].slice.call(r);
}
__name(Va, "Va");
u(Va, "arrayFrom");
function fp(r) {
  return Object.keys(r).reduce(function(t, e) {
    return r[e] !== void 0 && (t[e] = r[e]), t;
  }, {});
}
__name(fp, "fp");
u(fp, "removeUndefinedProps");
function yi() {
  return document.createElement("div");
}
__name(yi, "yi");
u(yi, "div");
function Ya(r) {
  return ["Element", "Fragment"].some(function(t) {
    return Pl(r, t);
  });
}
__name(Ya, "Ya");
u(Ya, "isElement");
function nm(r) {
  return Pl(r, "NodeList");
}
__name(nm, "nm");
u(nm, "isNodeList");
function im(r) {
  return Pl(r, "MouseEvent");
}
__name(im, "im");
u(im, "isMouseEvent");
function om(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(om, "om");
u(om, "isReferenceElement");
function am(r) {
  return Ya(r) ? [r] : nm(r) ? Va(r) : Array.isArray(r) ? r : Va(document.querySelectorAll(r));
}
__name(am, "am");
u(am, "getArrayOfElements");
function Sl(r, t) {
  r.forEach(function(e) {
    e && (e.style.transitionDuration = t + "ms");
  });
}
__name(Sl, "Sl");
u(Sl, "setTransitionDuration");
function hp(r, t) {
  r.forEach(function(e) {
    e && e.setAttribute("data-state", t);
  });
}
__name(hp, "hp");
u(hp, "setVisibilityState");
function sm(r) {
  var t, e = Wn(r), i = e[0];
  return i != null && (t = i.ownerDocument) != null && t.body ? i.ownerDocument : document;
}
__name(sm, "sm");
u(sm, "getOwnerDocument");
function lm(r, t) {
  var e = t.clientX, i = t.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, b = l.props, h = b.interactiveBorder, p = rm(f.placement), m = f.modifiersData.offset;
    if (!m)
      return true;
    var x = p === "bottom" ? m.top.y : 0, S = p === "top" ? m.bottom.y : 0, M = p === "right" ? m.left.x : 0, _ = p === "left" ? m.right.x : 0, C = c.top - i + x > h, P = i - c.bottom - S > h, k = c.left - e + M > h, z = e - c.right - _ > h;
    return C || P || k || z;
  });
}
__name(lm, "lm");
u(lm, "isCursorOutsideInteractiveBorder");
function Cl(r, t, e) {
  var i = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, e);
  });
}
__name(Cl, "Cl");
u(Cl, "updateTransitionEndListener");
function mp(r, t) {
  for (var e = t; e; ) {
    var i;
    if (r.contains(e))
      return true;
    e = e.getRootNode == null || (i = e.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(mp, "mp");
u(mp, "actualContains");
var Pr = { isTouch: false };
var vp = 0;
function um() {
  Pr.isTouch || (Pr.isTouch = true, window.performance && document.addEventListener("mousemove", Tp));
}
__name(um, "um");
u(um, "onDocumentTouchStart");
function Tp() {
  var r = performance.now();
  r - vp < 20 && (Pr.isTouch = false, document.removeEventListener("mousemove", Tp)), vp = r;
}
__name(Tp, "Tp");
u(Tp, "onDocumentMouseMove");
function cm() {
  var r = document.activeElement;
  if (om(r)) {
    var t = r._tippy;
    r.blur && !t.state.isVisible && r.blur();
  }
}
__name(cm, "cm");
u(cm, "onWindowBlur");
function pm() {
  document.addEventListener("touchstart", um, Fn), window.addEventListener("blur", cm);
}
__name(pm, "pm");
u(pm, "bindGlobalEventListeners");
var dm = typeof window != "undefined" && typeof document != "undefined";
var fm = dm ? !!window.msCrypto : false;
var hm = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var mm = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Sr = Object.assign({ appendTo: Sp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, hm, mm);
var vm = Object.keys(Sr);
var gm = u(function(t) {
  var e = Object.keys(t);
  e.forEach(function(i) {
    Sr[i] = t[i];
  });
}, "setDefaultProps");
function Op(r) {
  var t = r.plugins || [], e = t.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var b;
      i[c] = r[c] !== void 0 ? r[c] : (b = Sr[c]) != null ? b : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, e);
}
__name(Op, "Op");
u(Op, "getExtendedPassedProps");
function bm(r, t) {
  var e = t ? Object.keys(Op(Object.assign({}, Sr, { plugins: t }))) : vm, i = e.reduce(function(l, c) {
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
__name(bm, "bm");
u(bm, "getDataAttributeProps");
function gp(r, t) {
  var e = Object.assign({}, t, { content: Cp(t.content, [r]) }, t.ignoreAttributes ? {} : bm(r, t.plugins));
  return e.aria = Object.assign({}, Sr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? t.interactive : e.aria.expanded, content: e.aria.content === "auto" ? t.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(gp, "gp");
u(gp, "evaluateProps");
var ym = u(function() {
  return "innerHTML";
}, "innerHTML");
function Ol(r, t) {
  r[ym()] = t;
}
__name(Ol, "Ol");
u(Ol, "dangerouslySetInnerHTML");
function bp(r) {
  var t = yi();
  return r === true ? t.className = xp : (t.className = Ep, Ya(r) ? t.appendChild(r) : Ol(t, r)), t;
}
__name(bp, "bp");
u(bp, "createArrowElement");
function yp(r, t) {
  Ya(t.content) ? (Ol(r, ""), r.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Ol(r, t.content) : r.textContent = t.content);
}
__name(yp, "yp");
u(yp, "setContent");
function Ml(r) {
  var t = r.firstElementChild, e = Va(t.children);
  return { box: t, content: e.find(function(i) {
    return i.classList.contains(wp);
  }), arrow: e.find(function(i) {
    return i.classList.contains(xp) || i.classList.contains(Ep);
  }), backdrop: e.find(function(i) {
    return i.classList.contains(Jh);
  }) };
}
__name(Ml, "Ml");
u(Ml, "getChildren");
function Mp(r) {
  var t = yi(), e = yi();
  e.className = Kh, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var i = yi();
  i.className = wp, i.setAttribute("data-state", "hidden"), yp(i, r.props), t.appendChild(e), e.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var b = Ml(t), h = b.box, p = b.content, m = b.arrow;
    f.theme ? h.setAttribute("data-theme", f.theme) : h.removeAttribute("data-theme"), typeof f.animation == "string" ? h.setAttribute("data-animation", f.animation) : h.removeAttribute("data-animation"), f.inertia ? h.setAttribute("data-inertia", "") : h.removeAttribute("data-inertia"), h.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? h.setAttribute("role", f.role) : h.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && yp(p, r.props), f.arrow ? m ? c.arrow !== f.arrow && (h.removeChild(m), h.appendChild(bp(f.arrow))) : h.appendChild(bp(f.arrow)) : m && h.removeChild(m);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: t, onUpdate: l };
}
__name(Mp, "Mp");
u(Mp, "render");
Mp.$$tippy = true;
var wm = 1;
var Ua = [];
var Tl = [];
function xm(r, t) {
  var e = gp(r, Object.assign({}, Sr, Op(fp(t)))), i, l, c, f = false, b = false, h = false, p = false, m, x, S, M = [], _ = pp(fn, e.interactiveDebounce), C, P = wm++, k = null, z = em(e.plugins), q = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, T = { id: P, reference: r, popper: yi(), popperInstance: k, props: e, state: q, plugins: z, clearDelayTimeouts: Xn, setProps: Rr, setContent: vn, show: Ti, hide: _o, hideWithInteractivity: Oi, enable: zr, disable: Le, unmount: Mi, destroy: ko };
  if (!e.render)
    return T;
  var B = e.render(T), D = B.popper, U = B.onUpdate;
  D.setAttribute("data-tippy-root", ""), D.id = "tippy-" + T.id, T.popper = D, r._tippy = T, D._tippy = T;
  var X = z.map(function(j) {
    return j.fn(T);
  }), H = r.hasAttribute("aria-expanded");
  return Ge(), Qt(), Lt(), ft("onCreate", [T]), e.showOnCreate && mn(), D.addEventListener("mouseenter", function() {
    T.props.interactive && T.state.isVisible && T.clearDelayTimeouts();
  }), D.addEventListener("mouseleave", function() {
    T.props.interactive && T.props.trigger.indexOf("mouseenter") >= 0 && ct().addEventListener("mousemove", _);
  }), T;
  function V() {
    var j = T.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  __name(V, "V");
  u(V, "getNormalizedTouchSettings");
  function it() {
    return V()[0] === "hold";
  }
  __name(it, "it");
  u(it, "getIsCustomTouchBehavior");
  function ot() {
    var j;
    return !!((j = T.props.render) != null && j.$$tippy);
  }
  __name(ot, "ot");
  u(ot, "getIsDefaultRenderFn");
  function Y() {
    return C || r;
  }
  __name(Y, "Y");
  u(Y, "getCurrentTarget");
  function ct() {
    var j = Y().parentNode;
    return j ? sm(j) : document;
  }
  __name(ct, "ct");
  u(ct, "getDocument");
  function Dt() {
    return Ml(D);
  }
  __name(Dt, "Dt");
  u(Dt, "getDefaultTemplateChildren");
  function Wt(j) {
    return T.state.isMounted && !T.state.isVisible || Pr.isTouch || m && m.type === "focus" ? 0 : El(T.props.delay, j ? 0 : 1, Sr.delay);
  }
  __name(Wt, "Wt");
  u(Wt, "getDelay");
  function Lt(j) {
    j === void 0 && (j = false), D.style.pointerEvents = T.props.interactive && !j ? "" : "none", D.style.zIndex = "" + T.props.zIndex;
  }
  __name(Lt, "Lt");
  u(Lt, "handleStyles");
  function ft(j, rt, at) {
    if (at === void 0 && (at = true), X.forEach(function(ht) {
      ht[j] && ht[j].apply(ht, rt);
    }), at) {
      var yt;
      (yt = T.props)[j].apply(yt, rt);
    }
  }
  __name(ft, "ft");
  u(ft, "invokeHook");
  function Zt() {
    var j = T.props.aria;
    if (!!j.content) {
      var rt = "aria-" + j.content, at = D.id, yt = Wn(T.props.triggerTarget || r);
      yt.forEach(function(ht) {
        var fe = ht.getAttribute(rt);
        if (T.state.isVisible)
          ht.setAttribute(rt, fe ? fe + " " + at : at);
        else {
          var he = fe && fe.replace(at, "").trim();
          he ? ht.setAttribute(rt, he) : ht.removeAttribute(rt);
        }
      });
    }
  }
  __name(Zt, "Zt");
  u(Zt, "handleAriaContentAttribute");
  function Qt() {
    if (!(H || !T.props.aria.expanded)) {
      var j = Wn(T.props.triggerTarget || r);
      j.forEach(function(rt) {
        T.props.interactive ? rt.setAttribute("aria-expanded", T.state.isVisible && rt === Y() ? "true" : "false") : rt.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Qt, "Qt");
  u(Qt, "handleAriaExpandedAttribute");
  function Ne() {
    ct().removeEventListener("mousemove", _), Ua = Ua.filter(function(j) {
      return j !== _;
    });
  }
  __name(Ne, "Ne");
  u(Ne, "cleanupInteractiveMouseListeners");
  function Ae(j) {
    if (!(Pr.isTouch && (h || j.type === "mousedown"))) {
      var rt = j.composedPath && j.composedPath()[0] || j.target;
      if (!(T.props.interactive && mp(D, rt))) {
        if (Wn(T.props.triggerTarget || r).some(function(at) {
          return mp(at, rt);
        })) {
          if (Pr.isTouch || T.state.isVisible && T.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ft("onClickOutside", [T, j]);
        T.props.hideOnClick === true && (T.clearDelayTimeouts(), T.hide(), b = true, setTimeout(function() {
          b = false;
        }), T.state.isMounted || Oe());
      }
    }
  }
  __name(Ae, "Ae");
  u(Ae, "onDocumentPress");
  function _r() {
    h = true;
  }
  __name(_r, "_r");
  u(_r, "onTouchMove");
  function tt() {
    h = false;
  }
  __name(tt, "tt");
  u(tt, "onTouchStart");
  function Te() {
    var j = ct();
    j.addEventListener("mousedown", Ae, true), j.addEventListener("touchend", Ae, Fn), j.addEventListener("touchstart", tt, Fn), j.addEventListener("touchmove", _r, Fn);
  }
  __name(Te, "Te");
  u(Te, "addDocumentPress");
  function Oe() {
    var j = ct();
    j.removeEventListener("mousedown", Ae, true), j.removeEventListener("touchend", Ae, Fn), j.removeEventListener("touchstart", tt, Fn), j.removeEventListener("touchmove", _r, Fn);
  }
  __name(Oe, "Oe");
  u(Oe, "removeDocumentPress");
  function kr(j, rt) {
    hr(j, function() {
      !T.state.isVisible && D.parentNode && D.parentNode.contains(D) && rt();
    });
  }
  __name(kr, "kr");
  u(kr, "onTransitionedOut");
  function Ve(j, rt) {
    hr(j, rt);
  }
  __name(Ve, "Ve");
  u(Ve, "onTransitionedIn");
  function hr(j, rt) {
    var at = Dt().box;
    function yt(ht) {
      ht.target === at && (Cl(at, "remove", yt), rt());
    }
    __name(yt, "yt");
    if (u(yt, "listener"), j === 0)
      return rt();
    Cl(at, "remove", x), Cl(at, "add", yt), x = yt;
  }
  __name(hr, "hr");
  u(hr, "onTransitionEnd");
  function mr(j, rt, at) {
    at === void 0 && (at = false);
    var yt = Wn(T.props.triggerTarget || r);
    yt.forEach(function(ht) {
      ht.addEventListener(j, rt, at), M.push({ node: ht, eventType: j, handler: rt, options: at });
    });
  }
  __name(mr, "mr");
  u(mr, "on");
  function Ge() {
    it() && (mr("touchstart", _e, { passive: true }), mr("touchend", wt, { passive: true })), tm(T.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (mr(j, _e), j) {
          case "mouseenter":
            mr("mouseleave", wt);
            break;
          case "focus":
            mr(fm ? "focusout" : "blur", Yr);
            break;
          case "focusin":
            mr("focusout", Yr);
            break;
        }
    });
  }
  __name(Ge, "Ge");
  u(Ge, "addListeners");
  function Yn() {
    M.forEach(function(j) {
      var rt = j.node, at = j.eventType, yt = j.handler, ht = j.options;
      rt.removeEventListener(at, yt, ht);
    }), M = [];
  }
  __name(Yn, "Yn");
  u(Yn, "removeListeners");
  function _e(j) {
    var rt, at = false;
    if (!(!T.state.isEnabled || Xr(j) || b)) {
      var yt = ((rt = m) == null ? void 0 : rt.type) === "focus";
      m = j, C = j.currentTarget, Qt(), !T.state.isVisible && im(j) && Ua.forEach(function(ht) {
        return ht(j);
      }), j.type === "click" && (T.props.trigger.indexOf("mouseenter") < 0 || f) && T.props.hideOnClick !== false && T.state.isVisible ? at = true : mn(j), j.type === "click" && (f = !at), at && !yt && de(j);
    }
  }
  __name(_e, "_e");
  u(_e, "onTrigger");
  function fn(j) {
    var rt = j.target, at = Y().contains(rt) || D.contains(rt);
    if (!(j.type === "mousemove" && at)) {
      var yt = gr().concat(D).map(function(ht) {
        var fe, he = ht._tippy, Zr = (fe = he.popperInstance) == null ? void 0 : fe.state;
        return Zr ? { popperRect: ht.getBoundingClientRect(), popperState: Zr, props: e } : null;
      }).filter(Boolean);
      lm(yt, j) && (Ne(), de(j));
    }
  }
  __name(fn, "fn");
  u(fn, "onMouseMove");
  function wt(j) {
    var rt = Xr(j) || T.props.trigger.indexOf("click") >= 0 && f;
    if (!rt) {
      if (T.props.interactive) {
        T.hideWithInteractivity(j);
        return;
      }
      de(j);
    }
  }
  __name(wt, "wt");
  u(wt, "onMouseLeave");
  function Yr(j) {
    T.props.trigger.indexOf("focusin") < 0 && j.target !== Y() || T.props.interactive && j.relatedTarget && D.contains(j.relatedTarget) || de(j);
  }
  __name(Yr, "Yr");
  u(Yr, "onBlurOrFocusOut");
  function Xr(j) {
    return Pr.isTouch ? it() !== j.type.indexOf("touch") >= 0 : false;
  }
  __name(Xr, "Xr");
  u(Xr, "isEventListenerStopped");
  function ke() {
    hn();
    var j = T.props, rt = j.popperOptions, at = j.placement, yt = j.offset, ht = j.getReferenceClientRect, fe = j.moveTransition, he = ot() ? Ml(D).arrow : null, Zr = ht ? { getBoundingClientRect: ht, contextElement: ht.contextElement || Y() } : r, Pi = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Dr) {
      var Kr = Dr.state;
      if (ot()) {
        var qe = Dt(), je = qe.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ye) {
          Ye === "placement" ? je.setAttribute("data-placement", Kr.placement) : Kr.attributes.popper["data-popper-" + Ye] ? je.setAttribute("data-" + Ye, "") : je.removeAttribute("data-" + Ye);
        }), Kr.attributes.popper = {};
      }
    }, "fn") }, me = [{ name: "offset", options: { offset: yt } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !fe } }, Pi];
    ot() && he && me.push({ name: "arrow", options: { element: he, padding: 3 } }), me.push.apply(me, (rt == null ? void 0 : rt.modifiers) || []), T.popperInstance = xl(Zr, D, Object.assign({}, rt, { placement: at, onFirstUpdate: S, modifiers: me }));
  }
  __name(ke, "ke");
  u(ke, "createPopperInstance");
  function hn() {
    T.popperInstance && (T.popperInstance.destroy(), T.popperInstance = null);
  }
  __name(hn, "hn");
  u(hn, "destroyPopperInstance");
  function vr() {
    var j = T.props.appendTo, rt, at = Y();
    T.props.interactive && j === Sp || j === "parent" ? rt = at.parentNode : rt = Cp(j, [at]), rt.contains(D) || rt.appendChild(D), T.state.isMounted = true, ke();
  }
  __name(vr, "vr");
  u(vr, "mount");
  function gr() {
    return Va(D.querySelectorAll("[data-tippy-root]"));
  }
  __name(gr, "gr");
  u(gr, "getNestedPopperTree");
  function mn(j) {
    T.clearDelayTimeouts(), j && ft("onTrigger", [T, j]), Te();
    var rt = Wt(true), at = V(), yt = at[0], ht = at[1];
    Pr.isTouch && yt === "hold" && ht && (rt = ht), rt ? i = setTimeout(function() {
      T.show();
    }, rt) : T.show();
  }
  __name(mn, "mn");
  u(mn, "scheduleShow");
  function de(j) {
    if (T.clearDelayTimeouts(), ft("onUntrigger", [T, j]), !T.state.isVisible) {
      Oe();
      return;
    }
    if (!(T.props.trigger.indexOf("mouseenter") >= 0 && T.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && f)) {
      var rt = Wt(false);
      rt ? l = setTimeout(function() {
        T.state.isVisible && T.hide();
      }, rt) : c = requestAnimationFrame(function() {
        T.hide();
      });
    }
  }
  __name(de, "de");
  u(de, "scheduleHide");
  function zr() {
    T.state.isEnabled = true;
  }
  __name(zr, "zr");
  u(zr, "enable");
  function Le() {
    T.hide(), T.state.isEnabled = false;
  }
  __name(Le, "Le");
  u(Le, "disable");
  function Xn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(Xn, "Xn");
  u(Xn, "clearDelayTimeouts");
  function Rr(j) {
    if (!T.state.isDestroyed) {
      ft("onBeforeUpdate", [T, j]), Yn();
      var rt = T.props, at = gp(r, Object.assign({}, rt, fp(j), { ignoreAttributes: true }));
      T.props = at, Ge(), rt.interactiveDebounce !== at.interactiveDebounce && (Ne(), _ = pp(fn, at.interactiveDebounce)), rt.triggerTarget && !at.triggerTarget ? Wn(rt.triggerTarget).forEach(function(yt) {
        yt.removeAttribute("aria-expanded");
      }) : at.triggerTarget && r.removeAttribute("aria-expanded"), Qt(), Lt(), U && U(rt, at), T.popperInstance && (ke(), gr().forEach(function(yt) {
        requestAnimationFrame(yt._tippy.popperInstance.forceUpdate);
      })), ft("onAfterUpdate", [T, j]);
    }
  }
  __name(Rr, "Rr");
  u(Rr, "setProps");
  function vn(j) {
    T.setProps({ content: j });
  }
  __name(vn, "vn");
  u(vn, "setContent");
  function Ti() {
    var j = T.state.isVisible, rt = T.state.isDestroyed, at = !T.state.isEnabled, yt = Pr.isTouch && !T.props.touch, ht = El(T.props.duration, 0, Sr.duration);
    if (!(j || rt || at || yt) && !Y().hasAttribute("disabled") && (ft("onShow", [T], false), T.props.onShow(T) !== false)) {
      if (T.state.isVisible = true, ot() && (D.style.visibility = "visible"), Lt(), Te(), T.state.isMounted || (D.style.transition = "none"), ot()) {
        var fe = Dt(), he = fe.box, Zr = fe.content;
        Sl([he, Zr], 0);
      }
      S = u(function() {
        var me;
        if (!(!T.state.isVisible || p)) {
          if (p = true, D.offsetHeight, D.style.transition = T.props.moveTransition, ot() && T.props.animation) {
            var Ii = Dt(), Dr = Ii.box, Kr = Ii.content;
            Sl([Dr, Kr], ht), hp([Dr, Kr], "visible");
          }
          Zt(), Qt(), dp(Tl, T), (me = T.popperInstance) == null || me.forceUpdate(), ft("onMount", [T]), T.props.animation && ot() && Ve(ht, function() {
            T.state.isShown = true, ft("onShown", [T]);
          });
        }
      }, "onFirstUpdate"), vr();
    }
  }
  __name(Ti, "Ti");
  u(Ti, "show");
  function _o() {
    var j = !T.state.isVisible, rt = T.state.isDestroyed, at = !T.state.isEnabled, yt = El(T.props.duration, 1, Sr.duration);
    if (!(j || rt || at) && (ft("onHide", [T], false), T.props.onHide(T) !== false)) {
      if (T.state.isVisible = false, T.state.isShown = false, p = false, f = false, ot() && (D.style.visibility = "hidden"), Ne(), Oe(), Lt(true), ot()) {
        var ht = Dt(), fe = ht.box, he = ht.content;
        T.props.animation && (Sl([fe, he], yt), hp([fe, he], "hidden"));
      }
      Zt(), Qt(), T.props.animation ? ot() && kr(yt, T.unmount) : T.unmount();
    }
  }
  __name(_o, "_o");
  u(_o, "hide");
  function Oi(j) {
    ct().addEventListener("mousemove", _), dp(Ua, _), _(j);
  }
  __name(Oi, "Oi");
  u(Oi, "hideWithInteractivity");
  function Mi() {
    T.state.isVisible && T.hide(), !!T.state.isMounted && (hn(), gr().forEach(function(j) {
      j._tippy.unmount();
    }), D.parentNode && D.parentNode.removeChild(D), Tl = Tl.filter(function(j) {
      return j !== T;
    }), T.state.isMounted = false, ft("onHidden", [T]));
  }
  __name(Mi, "Mi");
  u(Mi, "unmount");
  function ko() {
    T.state.isDestroyed || (T.clearDelayTimeouts(), T.unmount(), Yn(), delete r._tippy, T.state.isDestroyed = true, ft("onDestroy", [T]));
  }
  __name(ko, "ko");
  u(ko, "destroy");
}
__name(xm, "xm");
u(xm, "createTippy");
function wi(r, t) {
  t === void 0 && (t = {});
  var e = Sr.plugins.concat(t.plugins || []);
  pm();
  var i = Object.assign({}, t, { plugins: e }), l = am(r);
  if (false)
    var c, f;
  var b = l.reduce(function(h, p) {
    var m = p && xm(p, i);
    return m && h.push(m), h;
  }, []);
  return Ya(r) ? b[0] : b;
}
__name(wi, "wi");
u(wi, "tippy");
wi.defaultProps = Sr;
wi.setDefaultProps = gm;
wi.currentInput = Pr;
var Em = Object.assign({}, co, { effect: u(function(t) {
  var e = t.state, i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow);
}, "effect") });
var Pp = u(function(t, e) {
  var i;
  e === void 0 && (e = {});
  var l = t, c = [], f = [], b, h = e.overrides, p = [], m = false;
  function x() {
    f = l.map(function(T) {
      return Wn(T.props.triggerTarget || T.reference);
    }).reduce(function(T, B) {
      return T.concat(B);
    }, []);
  }
  __name(x, "x");
  u(x, "setTriggerTargets");
  function S() {
    c = l.map(function(T) {
      return T.reference;
    });
  }
  __name(S, "S");
  u(S, "setReferences");
  function M(T) {
    l.forEach(function(B) {
      T ? B.enable() : B.disable();
    });
  }
  __name(M, "M");
  u(M, "enableInstances");
  function _(T) {
    return l.map(function(B) {
      var D = B.setProps;
      return B.setProps = function(U) {
        D(U), B.reference === b && T.setProps(U);
      }, function() {
        B.setProps = D;
      };
    });
  }
  __name(_, "_");
  u(_, "interceptSetProps");
  function C(T, B) {
    var D = f.indexOf(B);
    if (B !== b) {
      b = B;
      var U = (h || []).concat("content").reduce(function(X, H) {
        return X[H] = l[D].props[H], X;
      }, {});
      T.setProps(Object.assign({}, U, { getReferenceClientRect: typeof U.getReferenceClientRect == "function" ? U.getReferenceClientRect : function() {
        var X;
        return (X = c[D]) == null ? void 0 : X.getBoundingClientRect();
      } }));
    }
  }
  __name(C, "C");
  u(C, "prepareInstance"), M(false), S(), x();
  var P = { fn: u(function() {
    return { onDestroy: u(function() {
      M(true);
    }, "onDestroy"), onHidden: u(function() {
      b = null;
    }, "onHidden"), onClickOutside: u(function(D) {
      D.props.showOnCreate && !m && (m = true, b = null);
    }, "onClickOutside"), onShow: u(function(D) {
      D.props.showOnCreate && !m && (m = true, C(D, c[0]));
    }, "onShow"), onTrigger: u(function(D, U) {
      C(D, U.currentTarget);
    }, "onTrigger") };
  }, "fn") }, k = wi(yi(), Object.assign({}, Qh(e, ["overrides"]), { plugins: [P].concat(e.plugins || []), triggerTarget: f, popperOptions: Object.assign({}, e.popperOptions, { modifiers: [].concat(((i = e.popperOptions) == null ? void 0 : i.modifiers) || [], [Em]) }) })), z = k.show;
  k.show = function(T) {
    if (z(), !b && T == null)
      return C(k, c[0]);
    if (!(b && T == null)) {
      if (typeof T == "number")
        return c[T] && C(k, c[T]);
      if (l.indexOf(T) >= 0) {
        var B = T.reference;
        return C(k, B);
      }
      if (c.indexOf(T) >= 0)
        return C(k, T);
    }
  }, k.showNext = function() {
    var T = c[0];
    if (!b)
      return k.show(0);
    var B = c.indexOf(b);
    k.show(c[B + 1] || T);
  }, k.showPrevious = function() {
    var T = c[c.length - 1];
    if (!b)
      return k.show(T);
    var B = c.indexOf(b), D = c[B - 1] || T;
    k.show(D);
  };
  var q = k.setProps;
  return k.setProps = function(T) {
    h = T.overrides || h, q(T);
  }, k.setInstances = function(T) {
    M(true), p.forEach(function(B) {
      return B();
    }), l = T, M(false), S(), x(), p = _(k), k.setProps({ triggerTarget: f });
  }, p = _(k), k;
}, "createSingleton");
wi.setDefaultProps({ render: Mp });
var pe = wi;
var Il = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function It(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ye({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = pe(this, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
      this.helpableService = le(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${te(i.value)}`);
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
  return u(t, "HelpableMixinClass"), A([N], t.prototype, "help", 2), A([N], t.prototype, "helpId", 2), A([N], t.prototype, "debugHelpable", 2), t;
}
__name(It, "It");
u(It, "HelpableMixin");
function Et(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(t, "t");
  return u(t, "HoverableMixinClass"), A([N], t.prototype, "hoverable", 2), t;
}
__name(Et, "Et");
u(Et, "HoverableMixin");
function* Xa(r) {
  let t = "", e = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, t && (yield { type: "string", start: e, end: l, value: t }), t = "{{", e = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: e, end: l + 2, value: t.slice(2).trim() }, t = "", l += 2, e = l), t += r[l] || "";
  t && (yield { type: "string", start: e, end: r.length, value: t });
}
__name(Xa, "Xa");
u(Xa, "parse");
var Ip = /* @__PURE__ */ __name(function(r, t, e, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !l : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, e) : l ? l.value = e : t.set(r, e), e;
}, "Ip");
var ln = /* @__PURE__ */ __name(function(r, t, e, i) {
  if (e === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(r) : i ? i.value : t.get(r);
}, "ln");
var Ir;
var Za;
var Fr = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.expression = e, Ir.set(this, void 0), Za.set(this, ""), Ip(this, Ir, t, "f"), ln(this, Ir, "f").updateParent("");
  }
  get attributeName() {
    return ln(this, Ir, "f").attr.name;
  }
  get attributeNamespace() {
    return ln(this, Ir, "f").attr.namespaceURI;
  }
  get value() {
    return ln(this, Za, "f");
  }
  set value(t) {
    Ip(this, Za, t || "", "f"), ln(this, Ir, "f").updateParent(t);
  }
  get element() {
    return ln(this, Ir, "f").element;
  }
  get booleanValue() {
    return ln(this, Ir, "f").booleanValue;
  }
  set booleanValue(t) {
    ln(this, Ir, "f").booleanValue = t;
  }
}, "Fr");
u(Fr, "AttributeTemplatePart");
Ir = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap();
var go = /* @__PURE__ */ __name(class {
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
}, "go");
u(go, "AttributeValueSetter");
var Ap = /* @__PURE__ */ __name(function(r, t, e, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !l : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, e) : l ? l.value = e : t.set(r, e), e;
}, "Ap");
var xi = /* @__PURE__ */ __name(function(r, t, e, i) {
  if (e === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(r) : i ? i.value : t.get(r);
}, "xi");
var Ar;
var tr = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.expression = e, Ar.set(this, void 0), Ap(this, Ar, [t], "f"), t.textContent = "";
  }
  get value() {
    return xi(this, Ar, "f").map((t) => t.textContent).join("");
  }
  set value(t) {
    this.replace(t);
  }
  get previousSibling() {
    return xi(this, Ar, "f")[0].previousSibling;
  }
  get nextSibling() {
    return xi(this, Ar, "f")[xi(this, Ar, "f").length - 1].nextSibling;
  }
  replace(...t) {
    let e = t.map((i) => typeof i == "string" ? new Text(i) : i);
    e.length || e.push(new Text("")), xi(this, Ar, "f")[0].before(...e);
    for (let i of xi(this, Ar, "f"))
      i.remove();
    Ap(this, Ar, e, "f");
  }
}, "tr");
u(tr, "NodeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap();
function bo(r) {
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
__name(bo, "bo");
u(bo, "createProcessor");
function yo(r, t) {
  r.value = String(t);
}
__name(yo, "yo");
u(yo, "processPropertyIdentity");
function Ka(r, t) {
  return typeof t == "boolean" && r instanceof Fr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = t, true) : false;
}
__name(Ka, "Ka");
u(Ka, "processBooleanAttribute");
var Al = bo(yo);
var Sm = bo((r, t) => {
  Ka(r, t) || yo(r, t);
});
var _p = /* @__PURE__ */ __name(function(r, t, e, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !l : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, e) : l ? l.value = e : t.set(r, e), e;
}, "_p");
var Ja = /* @__PURE__ */ __name(function(r, t, e, i) {
  if (e === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(r) : i ? i.value : t.get(r);
}, "Ja");
var wo;
var xo;
function* Cm(r) {
  let t = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = t.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let i = 0; i < e.attributes.length; i += 1) {
        let l = e.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new go(e, l);
          for (let f of Xa(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let b = new Fr(c, f.value);
              c.append(b), yield b;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{"))
      for (let i of Xa(e.textContent)) {
        i.end < e.textContent.length && e.splitText(i.end), i.type === "part" && (yield new tr(e, i.value));
        break;
      }
}
__name(Cm, "Cm");
u(Cm, "collectParts");
var un = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(t, e, i = Al) {
    var l, c;
    super();
    wo.set(this, void 0), xo.set(this, void 0), Object.getPrototypeOf(this) !== un.prototype && Object.setPrototypeOf(this, un.prototype), this.appendChild(t.content.cloneNode(true)), _p(this, xo, Array.from(Cm(this)), "f"), _p(this, wo, i, "f"), (c = (l = Ja(this, wo, "f")).createCallback) === null || c === void 0 || c.call(l, this, Ja(this, xo, "f"), e);
  }
  update(t) {
    Ja(this, wo, "f").processCallback(this, Ja(this, xo, "f"), t);
  }
}, "un");
u(un, "TemplateInstance");
wo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap();
var kp = /* @__PURE__ */ new WeakSet();
function zp(r) {
  return kp.has(r);
}
__name(zp, "zp");
u(zp, "isDirective");
function Rp(r, t) {
  return zp(t) ? (t(r), true) : false;
}
__name(Rp, "Rp");
u(Rp, "processDirective");
function Eo(r) {
  return (...t) => {
    let e = r(...t);
    return kp.add(e), e;
  };
}
__name(Eo, "Eo");
u(Eo, "directive");
var So = /* @__PURE__ */ new WeakMap();
var Co = /* @__PURE__ */ __name(class {
  constructor(t, e) {
    this.element = t, this.type = e, this.element.addEventListener(this.type, this), So.get(this.element).set(this.type, this);
  }
  set(t) {
    typeof t == "function" ? this.handleEvent = t.bind(this.element) : typeof t == "object" && typeof t.handleEvent == "function" ? this.handleEvent = t.handleEvent.bind(t) : (this.element.removeEventListener(this.type, this), So.get(this.element).delete(this.type));
  }
  static for(t) {
    So.has(t.element) || So.set(t.element, /* @__PURE__ */ new Map());
    let e = t.attributeName.slice(2), i = So.get(t.element);
    return i.has(e) ? i.get(e) : new Co(t.element, e);
  }
}, "Co");
u(Co, "EventHandler");
function Dp(r, t) {
  return r instanceof Fr && r.attributeName.startsWith("on") ? (Co.for(r).set(t), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Dp, "Dp");
u(Dp, "processEvent");
function Tm(r, t) {
  return t instanceof Ei && r instanceof tr ? (t.renderInto(r), true) : false;
}
__name(Tm, "Tm");
u(Tm, "processSubTemplate");
function Om(r, t) {
  return t instanceof DocumentFragment && r instanceof tr ? (t.childNodes.length && r.replace(...t.childNodes), true) : false;
}
__name(Om, "Om");
u(Om, "processDocumentFragment");
function Mm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(Mm, "Mm");
u(Mm, "isIterable");
function Pm(r, t) {
  if (!Mm(t))
    return false;
  if (r instanceof tr) {
    let e = [];
    for (let i of t)
      if (i instanceof Ei) {
        let l = document.createDocumentFragment();
        i.renderInto(l), e.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? e.push(...i.childNodes) : e.push(String(i));
    return e.length && r.replace(...e), true;
  } else
    return r.value = Array.from(t).join(" "), true;
}
__name(Pm, "Pm");
u(Pm, "processIterable");
function Qa(r, t) {
  Rp(r, t) || Ka(r, t) || Dp(r, t) || Tm(r, t) || Om(r, t) || Pm(r, t) || yo(r, t);
}
__name(Qa, "Qa");
u(Qa, "processPart");
var _l = /* @__PURE__ */ new WeakMap();
var Np = /* @__PURE__ */ new WeakMap();
var Gp = /* @__PURE__ */ new WeakMap();
var Ei = /* @__PURE__ */ __name(class {
  constructor(t, e, i) {
    this.strings = t, this.values = e, this.processor = i;
  }
  get template() {
    if (_l.has(this.strings))
      return _l.get(this.strings);
    {
      let t = document.createElement("template"), e = this.strings.length - 1;
      return t.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < e ? `{{ ${c} }}` : ""), ""), _l.set(this.strings, t), t;
    }
  }
  renderInto(t) {
    let e = this.template;
    if (Np.get(t) !== e) {
      Np.set(t, e);
      let i = new un(e, this.values, this.processor);
      Gp.set(t, i), t instanceof tr ? t.replace(...i.children) : t.appendChild(i);
      return;
    }
    Gp.get(t).update(this.values);
  }
}, "Ei");
u(Ei, "TemplateResult");
var Im = bo(Qa);
function W(r, ...t) {
  return new Ei(r, t, Im);
}
__name(W, "W");
u(W, "html");
function Q(r, t) {
  r.renderInto(t);
}
__name(Q, "Q");
u(Q, "render");
var kl = /* @__PURE__ */ new WeakMap();
var Am = Eo((...r) => (t) => {
  kl.has(t) || kl.set(t, { i: r.length });
  let e = kl.get(t);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < e.i && (e.i = i, Qa(t, l));
    }) : i <= e.i && (e.i = i, Qa(t, r[i]));
});
var _m = Eo((r) => (t) => {
  if (!(t instanceof tr))
    return;
  let e = document.createElement("template");
  e.innerHTML = r;
  let i = document.importNode(e.content, true);
  t.replace(...i.childNodes);
});
function Rt(r) {
  class t extends r {
    iconHtml(i) {
      return W`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return W([i]);
    }
    get iconStyle() {
      return W`<style>
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
__name(Rt, "Rt");
u(Rt, "IconableMixin");
var Wr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Jt(r) {
  class t extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(t, "t");
  return u(t, "IfableMixinClass"), A([N], t.prototype, "if", 2), t;
}
__name(Jt, "Jt");
u(Jt, "IfableMixin");
var Lp = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function At(r) {
  class t extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = pe(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      return Q(W`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Wr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        Z.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = pe(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Cn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        Z.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = pe(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Dn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        Z.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = pe(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      Z.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = pe(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
__name(At, "At");
u(At, "MenuableMixin");
function qp(r) {
  return /^-?\d+$/.test(r);
}
__name(qp, "qp");
u(qp, "isNumeric");
function xe(r, t = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(t);
}
__name(xe, "xe");
u(xe, "forceSigned");
var ie = /* @__PURE__ */ __name(class extends At(It(Pt(Mt(Et(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return ks;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (Z.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let t = this._tippy;
    t && t.destroy();
    let e = this.blochInspectorPopupContent();
    pe(this, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(e);
    } }).show();
  }
  blochInspectorPopupContent() {
    let t = document.createDocumentFragment();
    return Q(W`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${xe(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${xe(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${xe(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${xe(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${xe(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${xe(this.z)}</span>
          </section>
        </div>
      `, t), t;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
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
    let t = u((i) => W`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), e = u((i, l) => W`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Q(W`<style>
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
    return `"${ks}"`;
  }
  updateBlochVector() {
    let t = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${t / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${t / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let e = this._tippy;
    e == null || e.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let t = this.getAttribute("data-d");
    return Z.notNull(t), parseFloat(t);
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
    return Z.notNull(t), parseFloat(t);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(t) {
    this.setAttribute("data-theta", t.toString());
  }
  get theta() {
    let t = this.getAttribute("data-theta");
    return Z.notNull(t), parseFloat(t);
  }
  thetaRadian() {
    let t = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * t / Math.PI;
  }
}, "ie");
u(ie, "BlochDisplayElement"), A([xt], ie.prototype, "body", 2), A([xt], ie.prototype, "vectorLine", 2), A([xt], ie.prototype, "vectorEnd", 2), A([xt], ie.prototype, "vector", 2), A([se], ie.prototype, "vectorEndCircles", 2), A([N], ie.prototype, "x", 2), A([N], ie.prototype, "y", 2), A([N], ie.prototype, "z", 2);
et(ie);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Fe = /* @__PURE__ */ __name(class extends At(It(Pt(Bt(Rt(Mt(Et(HTMLElement))))))) {
  get operationType() {
    return _s;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${_s}"`;
  }
}, "Fe");
u(Fe, "ControlGateElement");
et(Fe);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends At(It(Jt($t(Pt(Bt(Rt(Mt(Et(HTMLElement))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ua}<${this.if}"` : `"${ua}"`;
  }
}, "er");
u(er, "HGateElement");
et(er);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends At(It(Fc(Pt(Rt(Mt(Et(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">
        ${this.iconHtml(Hp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ya}"` : `"${ya}>${this.flag}"`;
  }
}, "rr");
u(rr, "MeasurementGateElement"), A([N], rr.prototype, "value", 2);
et(rr);
var $p = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
>
  <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends At(It(Jt($t(nn(Pt(Bt(Rt(Mt(Et(HTMLElement)))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${fa}"` : `"${fa}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "PhaseGateElement");
et(nr);
var Fp = `<svg
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
var ir = /* @__PURE__ */ __name(class extends At(It(Jt($t(Pt(Bt(Rt(Mt(Et(HTMLElement))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ma}<${this.if}"` : `"${ma}"`;
  }
}, "ir");
u(ir, "RnotGateElement");
et(ir);
var Wp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends At(It(Jt($t(nn(Pt(Bt(Rt(Mt(Et(HTMLElement)))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${va}"` : `"${va}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RxGateElement");
et(or);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends At(It(Jt($t(nn(Pt(Bt(Rt(Mt(Et(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Up)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ga}"` : `"${ga}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RyGateElement");
et(ar);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends At(It(Jt($t(nn(Pt(Bt(Rt(Mt(Et(HTMLElement)))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ba}"` : `"${ba}(${this.angle.replace("/", "_")})"`;
  }
}, "sr");
u(sr, "RzGateElement");
et(sr);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends At(It($t(Pt(Bt(Rt(Mt(Et(HTMLElement)))))))) {
  get operationType() {
    return As;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Yp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${As}"`;
  }
}, "lr");
u(lr, "SwapGateElement");
et(lr);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends At(It(Jt($t(Pt(Bt(Rt(Mt(Et(HTMLElement))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Xp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ha}<${this.if}"` : `"${ha}"`;
  }
}, "ur");
u(ur, "TGateElement");
et(ur);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var We = /* @__PURE__ */ __name(class extends At(It(Pt(Rt(Mt(Et(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Qu;
      case "1":
        return tc;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">
        ${this.iconHtml(Zp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "We");
u(We, "WriteGateElement"), A([N], We.prototype, "value", 2);
et(We);
var Kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends At(It(Jt($t(Pt(Bt(Rt(Mt(Et(HTMLElement))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ca}<${this.if}"` : `"${ca}"`;
  }
}, "cr");
u(cr, "XGateElement");
et(cr);
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends At(It(Jt($t(Pt(Bt(Rt(Mt(Et(HTMLElement))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${pa}<${this.if}"` : `"${pa}"`;
  }
}, "pr");
u(pr, "YGateElement");
et(pr);
var Qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends At(It(Jt($t(Pt(Bt(Rt(Mt(Et(HTMLElement))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    Q(W`<div part="body">${this.iconHtml(Qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${da}<${this.if}"` : `"${da}"`;
  }
}, "dr");
u(dr, "ZGateElement");
et(dr);
var Xt = u((r) => r instanceof er || r instanceof cr || r instanceof pr || r instanceof dr || r instanceof nr || r instanceof ur || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof Fe || r instanceof ie || r instanceof We || r instanceof rr, "isOperation");
var td = u((r) => r != null && r instanceof er, "isHGateElement");
var ed = u((r) => r != null && r instanceof cr, "isXGateElement");
var rd = u((r) => r != null && r instanceof pr, "isYGateElement");
var nd = u((r) => r != null && r instanceof dr, "isZGateElement");
var To = u((r) => r != null && r instanceof nr, "isPhaseGateElement");
var id = u((r) => r != null && r instanceof ur, "isTGateElement");
var od = u((r) => r != null && r instanceof ir, "isRnotGateElement");
var ts = u((r) => r != null && r instanceof or, "isRxGateElement");
var es = u((r) => r != null && r instanceof ar, "isRyGateElement");
var rs = u((r) => r != null && r instanceof sr, "isRzGateElement");
var ad = u((r) => r != null && r instanceof lr, "isSwapGateElement");
var zl = u((r) => r != null && r instanceof Fe, "isControlGateElement");
var sd = u((r) => r != null && r instanceof ie, "isBlochDisplayElement");
var qC = u((r) => r != null && r instanceof We, "isWriteGateElement");
var ld = u((r) => r != null && r instanceof rr, "isMeasurementGateElement");
var Oo = oi(Ga(), 1);
var Rl = u((r) => r !== null && r instanceof Ur, "isAngleSliderElement");
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = ye({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new Se("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (t, e) => {
      e.type === "SET_ANGLE" && (this.denominator = Ui(this.angle));
    }, setAngleInRadian: (t, e) => {
      if (e.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (t, e) => {
      if (e.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(Yu(this.angle));
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
    this.angleSliderService = le(this.angleSliderMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${te(t.value)}`);
    }).start();
  }
  attributeChangedCallback(t, e, i) {
    e !== i && i !== null && (t === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), t === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Oo.default)(this).unset();
  }
  update() {
    Q(W`<style>
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
  move(t) {
    let e = Oo.default.getElementRect(t.target).width, i = t.pageX / e;
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
    return Z.notNull(i), Z.notNull(l), [i, l];
  }
  proportionToRadian(t) {
    return (t - 0.5) * Math.PI * 4;
  }
  set left(t) {
    this.style.paddingLeft = `${t * 100}%`;
  }
}, "Ur");
u(Ur, "AngleSliderElement"), A([N], Ur.prototype, "angle", 2), A([N], Ur.prototype, "radian", 2), A([N], Ur.prototype, "denominator", 2), A([N], Ur.prototype, "disabled", 2), A([N], Ur.prototype, "debug", 2);
et(Ur);
var Mo = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Q(W`<slot></slot>`, this.shadowRoot);
  }
  activateButton(t) {
    let e = t.currentTarget;
    Z.notNull(e);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    e.setAttribute("data-active", "");
  }
}, "Mo");
u(Mo, "ButtonGroupElement"), A([se], Mo.prototype, "buttons", 2), Mo = A([et], Mo);
var Si = oi(cd(), 1);
var oe = /* @__PURE__ */ __name(class extends HTMLElement {
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
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.renderShadowRoot(), this.startViewSizeChangeEventListener(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles();
  }
  startViewSizeChangeEventListener() {
    let t = window.matchMedia("(max-width: 639px)");
    t.addEventListener("change", this.handleViewSizeChange.bind(this)), this.handleViewSizeChange(t);
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
    e !== i && (t === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (Z.notNull(i), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), t === "data-color-phase" && this.drawQubitCircles());
  }
  updateQubitCircleSize() {
    if (this.qubitCount !== 0)
      switch (this.qubitCount) {
        case 1: {
          this.qubitCircleSize = "xl";
          break;
        }
        case 2: {
          this.qubitCircleSize = "xl";
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
          throw new Se("unsupported qubit count", this.qubitCount);
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
          throw new Se("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((t) => {
      let e = t.getAttribute("data-ket");
      return Z.notNull(e), parseInt(e);
    }), Z.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(t) {
    Si.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let i = e.getAttribute("data-ket");
        Z.notNull(i);
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
    Q(W`<style>
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
        throw new Se("unsupported qubit count", this.qubitCount);
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
        throw new Se("unsupported qubit count", this.qubitCount);
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
        return 64;
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
        throw new Se("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    Z.notNull(this.window), Z.notNull(this.innerContainer), this.qubitCount !== 0 && Si.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (Si.default.measure(() => {
      this.qubitCirclePositions = [];
      let t = this.overscanColStartIndex, e = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === t && this.lastColEndIndex === e && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = t; f <= e; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = t, this.lastColEndIndex = e, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), Si.default.mutate(() => {
      let t = document.createDocumentFragment();
      for (let e of this.allQubitCircleElements(this.qubitCirclePositions))
        t.appendChild(e);
      this.innerContainer.appendChild(t), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    Si.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let e = t.getAttribute("data-col"), i = t.getAttribute("data-row");
        Z.notNull(e), Z.notNull(i);
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
        throw new Se("unsupported qubit count", this.qubitCount);
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
    Z.need(e.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = pe(e, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = e.getAttribute("data-ket");
    Z.notNull(l);
    let c = e.getAttribute("data-amplitude-real");
    Z.notNull(c);
    let f = e.getAttribute("data-amplitude-imag");
    Z.notNull(f);
    let b = parseInt(l), h = parseFloat(c), p = parseFloat(f), m = new Ke(h, p), x = m.abs(), S = m.phase() / Math.PI * 180, M = document.importNode(this.qubitCirclePopupTemplate.content, true), _ = M.getElementById("qubit-circle-popup--ket-binary-value"), C = M.getElementById("qubit-circle-popup--ket-decimal-value"), P = M.getElementById("qubit-circle-popup--amplitude"), k = M.getElementById("qubit-circle-popup--amplitude-real-value"), z = M.getElementById("qubit-circle-popup--amplitude-imag-value"), q = M.getElementById("qubit-circle-popup--probability"), T = M.getElementById("qubit-circle-popup--probability-value"), B = M.getElementById("qubit-circle-popup--phase"), D = M.getElementById("qubit-circle-popup--phase-value");
    Z.notNull(P), Z.notNull(k), Z.notNull(z), Z.notNull(q), Z.notNull(T), Z.notNull(B), Z.notNull(D), _ && (_.textContent = b.toString(2).padStart(this.qubitCount, "0")), C && (C.textContent = b.toString()), this.showQubitCirclePopupAmplitude ? (k.textContent = xe(m.real, 5), z.textContent = `${xe(m.imag, 5)}i`) : P.style.display = "none", this.showQubitCirclePopupProbability ? T.textContent = `${xe(x * x * 100, 4)}%` : q.style.display = "none", this.showQubitCirclePopupPhase ? D.textContent = `${xe(S, 2)}\xB0` : B.style.display = "none";
    let U = document.createElement("div");
    U.appendChild(M), i.setContent(U.innerHTML), i.show();
  }
  hideQubitCirclePopup(t) {
    let e = t.target;
    Z.need(e.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = e._tippy;
    Z.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "oe");
u(oe, "CircleNotationElement"), A([N], oe.prototype, "qubitCount", 2), A([N], oe.prototype, "qubitCircleSize", 2), A([N], oe.prototype, "colCount", 2), A([N], oe.prototype, "rowCount", 2), A([N], oe.prototype, "paddingX", 2), A([N], oe.prototype, "paddingY", 2), A([N], oe.prototype, "overscanCount", 2), A([N], oe.prototype, "colorPhase", 2), A([N], oe.prototype, "qubitCirclePopupTemplateId", 2), A([N], oe.prototype, "showQubitCirclePopupAmplitude", 2), A([N], oe.prototype, "showQubitCirclePopupProbability", 2), A([N], oe.prototype, "showQubitCirclePopupPhase", 2), A([xt], oe.prototype, "window", 2), A([xt], oe.prototype, "innerContainer", 2), A([se], oe.prototype, "qubitCircles", 2), oe = A([et], oe);
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
    Q(W`<slot></slot>`, this.shadowRoot);
  }
}, "Po");
u(Po, "CircleNotationPanelElement"), A([xt], Po.prototype, "circleNotation", 2), Po = A([et], Po);
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
  setAmplitudes(t) {
    let e = this.qubitCircles;
    for (let [i, l] of Object.entries(t)) {
      let c = e[parseInt(i)];
      Z.notNull(c);
      let f = Ke.from(l);
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
    if (Q(W`<style>
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
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : W`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(t) {
    return W`<div
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
    let e = W``, i = this.qubitCircleGroup([...Array(2 ** t).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (f) => this.qubitCircleGroup(f, (b) => this.qubitCircleGroup(b, (h) => this.qubitCircleGroup(h, (p) => this.qubitCircleGroup(p)))))), 256);
    for (let l of i)
      e = W`${e} ${l}`;
    return e;
  }
  qubitCircleGroup(t, e, i = t.length / 2) {
    return u((c, f = 1) => c.reduce((b, h, p) => p % f ? b : [...b, c.slice(p, p + f)], []), "arrayChunk")(t, i).map((c) => {
      let f = W``;
      if (e)
        for (let b of e(c))
          f = W`${f} ${b}`;
      else
        for (let b of c)
          f = W`${f} ${this.qubitCircleHtml(b)}`;
      return i === 64 ? W`<div class="qubit-circle-group--size${i}" data-targets="circle-notation-old.qubitCircleGroups">
          ${f}
        </div>` : W`<div class="qubit-circle-group--size${i}">${f}</div>`;
    });
  }
  initQubitCirclePopup(t) {
    let e = pe(t);
    Pp(e, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, theme: "qni" });
  }
  setPopupContent(t) {
    if (this.popupEl === null)
      return;
    let e = t.target, i = this.ketDecimal(e), l = e.getAttribute("data-amplitude-real"), c = e.getAttribute("data-amplitude-imag"), f = e.getAttribute("data-magnitude"), b = e.getAttribute("data-phase"), h;
    l === null || c === null ? h = Ke.ZERO : h = new Ke(parseFloat(l), parseFloat(c));
    let p;
    f && parseFloat(f) === 0 ? p = 0 : p = b ? parseFloat(b) : 0, this.setQubitCirclePopupContent(this.popupEl.content, e, i, h, f ? parseFloat(f) : 0, p, this.qubitCount);
  }
  setQubitCirclePopupContent(t, e, i, l, c, f, b) {
    e._tippy.setContent(this.popupContent(t, i, l, c, f, b));
  }
  popupContent(t, e, i, l, c, f) {
    let b = t.querySelector(".ket-binary"), h = t.querySelector(".ket-decimal"), p = t.querySelector(".amplitude-real"), m = t.querySelector(".amplitude-imag"), x = t.querySelector(".probability"), S = t.querySelector(".phase");
    b && (b.textContent = e.toString(2).padStart(f, "0")), h && (h.textContent = e.toString()), p && (p.textContent = this.forceSigned(i.real, 5)), m && (m.textContent = `${this.forceSigned(i.imag, 5)}i`), x && (x.textContent = `${this.forceSigned(l * l * 100, 4)}%`), S && (S.textContent = `${this.forceSigned(c, 2)}\xB0`);
    let M = document.createElement("div");
    return M.appendChild(t.cloneNode(true)), M.innerHTML;
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
}, "fr");
u(fr, "CircleNotationOldElement"), A([N], fr.prototype, "qubitCount", 2), A([N], fr.prototype, "size", 2), A([N], fr.prototype, "magnitudes", 2), A([N], fr.prototype, "phases", 2), A([N], fr.prototype, "multiQubits", 2), A([N], fr.prototype, "showKets", 2), A([se], fr.prototype, "qubitCircles", 2), A([se], fr.prototype, "qubitCircleGroups", 2), A([se], fr.prototype, "visibleQubitCircleGroups", 2);
et(fr);
var pd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var dd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var cn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    let t = this.attachShadow({ mode: "open" });
    new MutationObserver((i) => {
      for (let l of i)
        l.addedNodes && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots(), this.startPopinAnimation());
    }).observe(t, { childList: true }), this.update();
  }
  startPopinAnimation() {
    let t = 0, e = [];
    this.addEventListener("animationend", (i) => {
      var l;
      if (Xt(i.target) && t++, t === e.length) {
        for (let c of e)
          (l = c.parentElement) == null || l.removeChild(c);
        for (let c of this.gateSets)
          c.classList.remove("invisible");
        this.contentClipper.style.overflow = "visible";
      }
    }), this.contentClipper.style.overflow = "hidden";
    for (let i of this.gatesInActiveGateSet) {
      let l = i.cloneNode(false);
      l.style.position = "absolute", l.style.top = `${this.offsetHeight}px`, l.style.left = `${i.offsetLeft}px`, this.append(l), e.push(l);
    }
    for (let [i, l] of e.entries())
      l.classList.add(`animate-gate${i}`);
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((t) => {
      let e = t.children.item(0);
      return Z.need(Xt(e), `${e} must be an operation.`), e;
    });
  }
  get activeGateSet() {
    let t = this.gateSets[this.currentGateSetIndex];
    return Z.notNull(t), t;
  }
  validateCurrentGateSetIndex() {
    Z.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), Z.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
  }
  prevGateSet() {
    this.currentGateSetIndex--, this.currentGateSetIndex < 0 && (this.currentGateSetIndex = this.gateSets.length - 1), this.toggleGateSets(), this.toggleDots();
  }
  nextGateSet() {
    this.currentGateSetIndex++, this.currentGateSetIndex >= this.gateSets.length && (this.currentGateSetIndex = 0), this.toggleGateSets(), this.toggleDots();
  }
  toggleDots() {
    for (let [t, e] of this.dots.entries())
      t === this.currentGateSetIndex ? e.classList.add("dot--active") : e.classList.remove("dot--active");
  }
  toggleGateSets() {
    for (let [t, e] of this.gateSets.entries())
      t === this.currentGateSetIndex ? e.classList.remove("hidden") : e.classList.add("hidden");
  }
  update() {
    Q(W`
        <style>
          button {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 100%;
            padding: 0;
            border-width: 0px;
            color: rgb(24 24 27); /* zinc-900 */
            background-color: transparent;
            touch-action: manipulation;
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
            type="button"
            aria-label="prev gate set"
            data-action="click:gate-carousel#prevGateSet"
            style="left: 0"
          >
            ${this.iconHtml(pd)}
          </button>
          <button
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(dd)}
          </button>

          <div id="body">
            <slot></slot>

            <div id="dot-group">${this.dotsHtml()}</div>
          </div>
        </div>
      `, this.shadowRoot);
  }
  iconHtml(t) {
    return W([t]);
  }
  dotsHtml() {
    let t = W``;
    for (let e = 0; e < this.gateSets.length; e++)
      t = W`${t}
        <div class="dot" data-targets="gate-carousel.dots"></div>`;
    return t;
  }
}, "cn");
u(cn, "GateCarouselElement"), A([N], cn.prototype, "currentGateSetIndex", 2), A([xt], cn.prototype, "contentClipper", 2), A([se], cn.prototype, "gateSets", 2), A([se], cn.prototype, "dots", 2), cn = A([et], cn);
var Nl = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Q(W`<slot></slot>`, this.shadowRoot);
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
    return Z.notNull(t), t;
  }
  initPopup() {
    this.popup = pe(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(t) {
    let e = t.target;
    !this.popup.popper.contains(e) && !this.popup.reference.contains(e) && !Xt(e) && this.popup.hide();
  }
  get popupContent() {
    let t = document.querySelector("#operation-inspector-template");
    Z.notNull(t);
    let e = t.content.cloneNode(true), i = document.createDocumentFragment();
    return Q(W`${e}`, i), i;
  }
}, "Nl");
u(Nl, "InspectorButtonElement");
et(Nl);
var Ie = /* @__PURE__ */ __name(class extends HTMLElement {
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
    if (this.clear(), this.disableAllPanes(), Wr(t) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = t.if), Cn(t)) {
      let e = Ui(t.angle);
      To(t) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (ts(t) || es(t) || rs(t)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = t.angle, this.backupCurrentPhi(), this.angleSlider.angle = t.angle, this.denominatorInput.value = e.toString(), this.denominatorLabel.textContent = e.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = t.reducedAngle !== "";
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
    Q(W`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(t) {
    let e = t.target;
    if (!Rl(e))
      throw new Error(`${e} isn't an angle-slider`);
    this.angleInput.value = e.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(t) {
    let e = t.target;
    if (!Rl(e))
      throw new Error(`${e} isn't an angle-slider`);
    this.angleInput.value = e.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let t = this.angleInput.getAttribute("data-original-value");
    Z.notNull(t), this.angleInput.value = t;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let t = this.angleInput.value;
    if (Ku(t)) {
      let e, i = Ui(t);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Xu(t, "-2\u03C0") ? (e = `-${i * 2}\u03C0/${i}`, this.angleInput.value = e) : Zu(t, "2\u03C0") ? (e = `${i * 2}\u03C0/${i}`, this.angleInput.value = e) : e = t, this.backupCurrentPhi(), this.angleSlider.angle = e, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Z.notNull(t), this.denominatorInput.value = t, this.denominatorLabel.textContent = t;
  }
  changeDenominator() {
    let t = this.denominatorInput.value;
    qp(t) && parseInt(t) > 1 ? (this.denominatorLabel.textContent = t, this.angleSlider.denominator = parseInt(t), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Ie");
u(Ie, "OperationInspectorElement"), A([xt], Ie.prototype, "ifInput", 2), A([xt], Ie.prototype, "angleInputLabel", 2), A([xt], Ie.prototype, "angleInput", 2), A([xt], Ie.prototype, "angleSlider", 2), A([xt], Ie.prototype, "denominatorInput", 2), A([xt], Ie.prototype, "denominatorVariableLabel", 2), A([xt], Ie.prototype, "denominatorLabel", 2), A([xt], Ie.prototype, "reduceAngleFractionCheckbox", 2), A([xt], Ie.prototype, "flagInput", 2), A([N], Ie.prototype, "conditionalGatePaneDisabled", 2), A([N], Ie.prototype, "anglePaneDisabled", 2), A([N], Ie.prototype, "conditionalFlagPaneDisabled", 2);
et(Ie);
var ns = oi(hd(), 1);
var Ue = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Q(W`<style>
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
    let t = pe(this, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.popupTemplate === null)
      return;
    let e = document.importNode(this.popupTemplate.content, true), i = new ns.default(this.amplitude), l = e.getElementById("qubit-circle-popup--header"), c = e.getElementById("qubit-circle-popup--ket-binary-value"), f = e.getElementById("qubit-circle-popup--ket-decimal-value"), b = e.getElementById("qubit-circle-popup--amplitude"), h = e.getElementById("qubit-circle-popup--amplitude-real-value"), p = e.getElementById("qubit-circle-popup--amplitude-imag-value"), m = e.getElementById("qubit-circle-popup--probability"), x = e.getElementById("qubit-circle-popup--probability-value"), S = e.getElementById("qubit-circle-popup--phase"), M = e.getElementById("qubit-circle-popup--phase-value");
    Z.notNull(l), Z.notNull(c), Z.notNull(f), Z.notNull(b), Z.notNull(h), Z.notNull(p), Z.notNull(m), Z.notNull(x), Z.notNull(S), Z.notNull(M), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (h.textContent = xe(i.re, 5), p.textContent = `${xe(i.im, 5)}i`) : b.style.display = "none", this.showPopupProbability ? x.textContent = `${xe(this.magnitude * this.magnitude * 100, 4)}%` : m.style.display = "none", this.showPopupPhase ? M.textContent = `${xe(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let _ = document.createElement("div");
    _.appendChild(e), t.setContent(_.innerHTML), t.show();
  }
  get magnitude() {
    return new ns.default(this.amplitude).abs();
  }
  get phase() {
    return new ns.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let t = this._tippy;
    Z.notNull(t), t.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "Ue");
u(Ue, "QubitCircleElement"), A([N], Ue.prototype, "ket", 2), A([N], Ue.prototype, "qubitCount", 2), A([N], Ue.prototype, "amplitude", 2), A([N], Ue.prototype, "hidePhase", 2), A([N], Ue.prototype, "popupTemplateId", 2), A([N], Ue.prototype, "showPopupHeader", 2), A([N], Ue.prototype, "showPopupAmplitude", 2), A([N], Ue.prototype, "showPopupProbability", 2), A([N], Ue.prototype, "showPopupPhase", 2), Ue = A([et], Ue);
var md = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var vd = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
    this.runCircuitButtonMachine = ye({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
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
    this.runCircuitButtonService = le(this.runCircuitButtonMachine).onTransition((t) => {
      this.debug && console.log(`run-circuit-button: ${te(t.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(t, e, i) {
    e !== i && t === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Q(W`<style>
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
    return W([md]);
  }
  get tailSpinIcon() {
    return W([vd]);
  }
}, "Un");
u(Un, "RunCircuitButtonElement"), A([N], Un.prototype, "running", 2), A([N], Un.prototype, "debug", 2), A([xt], Un.prototype, "body", 2), A([xt], Un.prototype, "ripple", 2);
et(Un);
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
    this.startViewSizeChangeEventListener();
    let t = this.attachShadow({ mode: "open" });
    new MutationObserver((i) => {
      for (let l of i)
        if (l.addedNodes) {
          let c = window.getComputedStyle(this);
          this.marginTop = parseFloat(c.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(c.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
        }
    }).observe(t, { childList: true }), this.renderShadowRoot();
  }
  startViewSizeChangeEventListener() {
    let t = window.matchMedia("(max-width: 639px)");
    t.addEventListener("change", this.handleViewSizeChange.bind(this)), this.handleViewSizeChange(t);
  }
  handleViewSizeChange(t) {
    this.mobile = t.matches;
  }
  prepareAnimation() {
    this.mobile ? this.direction === "up" ? (this.style.bottom = "auto", this.style.top = `${window.innerHeight}px`) : this.direction === "down" && (this.style.top = `-${this.offsetHeight + this.marginTop}px`) : this.directionDesktop === "up" ? (this.style.bottom = "auto", this.style.top = `${window.innerHeight}px`) : this.directionDesktop === "down" && (this.style.top = `-${this.offsetHeight}px`);
  }
  startAnimation() {
    this.mobile ? this.direction === "up" ? this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)` }, { transform: `translateY(-${this.offsetHeight + this.marginBottom}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.direction === "down" && this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${this.offsetHeight + this.marginTop + 16}px)` }, { transform: `translateY(${this.offsetHeight + this.marginTop}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.directionDesktop === "up" ? this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)` }, { transform: `translateY(-${this.offsetHeight + this.marginBottom}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" }) : this.directionDesktop === "down" && this.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${this.offsetHeight + 16}px)` }, { transform: `translateY(${this.offsetHeight}px)` }], { duration: this.duration, fill: "forwards", easing: "ease-out" });
  }
  renderShadowRoot() {
    Q(W`<slot></slot>`, this.shadowRoot);
  }
}, "Vr");
u(Vr, "SlideInElement"), A([N], Vr.prototype, "direction", 2), A([N], Vr.prototype, "directionDesktop", 2), A([N], Vr.prototype, "duration", 2), A([N], Vr.prototype, "marginTop", 2), A([N], Vr.prototype, "marginBottom", 2), Vr = A([et], Vr);
var pn = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Q(W`<style>
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
}, "pn");
u(pn, "CircuitBlockElement"), A([N], pn.prototype, "comment", 2), A([N], pn.prototype, "finalized", 2), pn = A([et], pn);
var bd = oi(Ga(), 1);
var gd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Ll = u((r) => r != null && r instanceof Ce, "isCircuitDropzoneElement");
var Io;
var Ce = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    sa(this, Io, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = ye({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      Z.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      Z.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
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
    this.circuitDropzoneService = le(this.circuitDropzoneMachine).onTransition((t) => {
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
    let { signal: t } = la(this, Io, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: t }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: t }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: t }), this.addEventListener("operation-delete", this.deleteOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = aa(this, Io)) == null || t.abort();
  }
  update() {
    Q(W`<style>
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, bd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!Xt(e))
      throw new Error(`${e} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: e });
  }
  get wireSvg() {
    return W([gd]);
  }
}, "Ce");
u(Ce, "CircuitDropzoneElement"), Io = /* @__PURE__ */ new WeakMap(), A([N], Ce.prototype, "operationName", 2), A([N], Ce.prototype, "inputWireQuantum", 2), A([N], Ce.prototype, "outputWireQuantum", 2), A([N], Ce.prototype, "connectTop", 2), A([N], Ce.prototype, "connectBottom", 2), A([N], Ce.prototype, "shadow", 2), A([N], Ce.prototype, "debug", 2);
et(Ce);
var dn = u((r) => r != null && r instanceof De, "isCircuitStepElement");
var Gt = u((r, t) => Array.from(r.reduce((e, i, l, c) => {
  let f = t(i, l, c), b = e.get(f);
  return b ? b.push(i) : e.set(f, [i]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var De = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = ye({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (t, e) => {
      if (e.type !== "SNAP_DROPZONE" && e.type !== "OCCUPY_DROPZONE")
        return;
      let i = e.dropzone, l = this.bit(i);
      Z.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (t, e) => {
      e.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (t, e) => {
      e.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (t, e) => {
      e.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = le(this.circuitStepMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${te(t.value)}`);
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
    Q(W`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(t) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let e = this.controlGateDropzones, i = this.controllableDropzones(t);
    for (let l of i)
      Tn(l.operation) && (l.operation.controls = []);
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
        if (!To(f.operation))
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
    let e = this.controllableDropzones(t), i = this.controlGateDropzones, l = [...new Set(e.map((m) => m.operationName))], c = this.numControlGateDropzones(t, l), f = i.map((m) => this.bit(m)), b = c === null ? f : f.slice(0, c), h = e.map((m) => this.bit(m)), p = b.concat(h);
    for (let [m, x] of Object.entries(i)) {
      let S = x.operation;
      x.connectBottom = p.some((M) => this.bit(x) < M), x.connectTop = p.some((M) => this.bit(x) > M), c === null || c !== null && parseInt(m) < c ? S.enable() : (x.connectTop = Math.max(...p) > this.bit(x), S.disable());
    }
    for (let m of e) {
      if (!Tn(m.operation))
        throw new Error(`${m.operation} isn't controllable.`);
      m.operation.controls = this.controlBits(m, f, t), m.connectTop = p.some((x) => x < this.bit(m)), m.connectBottom = p.some((x) => x > this.bit(m));
    }
  }
  updateFreeDropzoneConnections(t) {
    let e = this.controllableDropzones(t), i = this.controlGateDropzones.filter((h) => zl(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), l = e.map((h) => this.bit(h)), c = i.concat(l), f = Math.min(...c), b = Math.max(...c);
    for (let h of this.freeDropzones)
      f < this.bit(h) && this.bit(h) < b && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(t, e, i) {
    let l = e;
    return i && (i.maxChControlGates > 0 && t.operationName === "h-gate" ? l = e.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && t.operationName === "x-gate" ? l = e.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && t.operationName === "y-gate" ? l = e.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && t.operationName === "z-gate" ? l = e.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && t.operationName === "phase-gate" ? l = e.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && t.operationName === "t-gate" ? l = e.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && t.operationName === "rnot-gate" ? l = e.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && t.operationName === "rx-gate" ? l = e.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && t.operationName === "ry-gate" ? l = e.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && t.operationName === "rz-gate" ? l = e.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && t.operationName === "swap-gate" && (l = e.slice(0, i.maxCswapControlGates))), l;
  }
  bit(t) {
    let e = this.dropzones.indexOf(t);
    return Z.need(e !== -1, "circuit-dropzone not found."), e;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((t) => !t.occupied);
  }
  dropzoneAt(t) {
    let e = this.dropzones[t];
    return Z.notNull(e), e;
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
    let t = new Ce();
    return t.shadow = this.shadow, this.append(t), t;
  }
  appendOperation(t) {
    let e = new Ce();
    this.append(e), e.put(t);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((t) => t.occupied).filter((t) => t.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((t) => t.occupied).filter((t) => t.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((t) => t.occupied && zl(t.operation));
  }
  numControlGateDropzones(t, e) {
    if (t === void 0)
      return null;
    let i = 0;
    return e.includes("h-gate") && !t.disableCh && t.maxChControlGates > i && (i = t.maxChControlGates), e.includes("x-gate") && !t.disableCnot && t.maxCnotControlGates > i && (i = t.maxCnotControlGates), e.includes("y-gate") && !t.disableCy && t.maxCyControlGates > i && (i = t.maxCyControlGates), e.includes("z-gate") && !t.disableCz && t.maxCzControlGates > i && (i = t.maxCzControlGates), e.includes("phase-gate") && !t.disableCphase && t.maxCphaseControlGates > i && (i = t.maxCphaseControlGates), e.includes("t-gate") && !t.disableCt && t.maxCtControlGates > i && (i = t.maxCtControlGates), e.includes("rnot-gate") && !t.disableCrnot && t.maxCrnotControlGates > i && (i = t.maxCrnotControlGates), e.includes("rx-gate") && !t.disableCrx && t.maxCrxControlGates > i && (i = t.maxCrxControlGates), e.includes("ry-gate") && !t.disableCry && t.maxCryControlGates > i && (i = t.maxCryControlGates), e.includes("rz-gate") && !t.disableCrz && t.maxCrzControlGates > i && (i = t.maxCrzControlGates), e.includes("swap-gate") && !t.disableCswap && t.maxCswapControlGates > i && (i = t.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(t) {
    let e = 0, i = 0, l = 0, c = 0, f = 0, b = 0, h = 0, p = 0, m = 0, x = 0;
    return this.dropzones.filter((S) => S.occupied).filter((S) => Tn(S.operation)).filter((S) => t === void 0 ? true : td(S.operation) ? (e += 1, t.maxChTargetGates !== 0 && e > t.maxChTargetGates ? false : !t.disableCh) : ed(S.operation) ? (i += 1, t.maxCnotTargetGates !== 0 && i > t.maxCnotTargetGates ? false : !t.disableCnot) : rd(S.operation) ? (l += 1, t.maxCyTargetGates !== 0 && l > t.maxCyTargetGates ? false : !t.disableCy) : nd(S.operation) ? (c += 1, t.maxCzTargetGates !== 0 && c > t.maxCzTargetGates ? false : !t.disableCz) : To(S.operation) ? (f += 1, t.maxCphaseTargetGates !== 0 && f > t.maxCphaseTargetGates ? false : !t.disableCphase) : id(S.operation) ? (b += 1, t.maxCtTargetGates !== 0 && b > t.maxCtTargetGates ? false : !t.disableCt) : od(S.operation) ? (h += 1, t.maxCrnotTargetGates !== 0 && h > t.maxCrnotTargetGates ? false : !t.disableCrnot) : ts(S.operation) ? (p += 1, t.maxCrxTargetGates !== 0 && p > t.maxCrxTargetGates ? false : !t.disableCrx) : es(S.operation) ? (m += 1, t.maxCryTargetGates !== 0 && m > t.maxCryTargetGates ? false : !t.disableCry) : rs(S.operation) ? (x += 1, t.maxCrzTargetGates !== 0 && x > t.maxCrzTargetGates ? false : !t.disableCrz) : ad(S.operation) ? !t.disableCswap : true);
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
    Xt(t.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
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
    for (let [e, i] of Gt(this.operations, (l) => l.constructor))
      switch (e) {
        case er: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.if))
            for (let [b, h] of Gt(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), t.push(S);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.if))
            for (let [b, h] of Gt(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), t.push(S);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.if))
            for (let [b, h] of Gt(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), t.push(S);
            }
          break;
        }
        case dr: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.if))
            for (let [b, h] of Gt(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), t.push(S);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.angle))
            for (let [b, h] of Gt(f, (p) => p.if))
              for (let [p, m] of Gt(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((C) => C.bit), _ = { type: S, targets: M };
                b !== "" && (_.if = b), c !== "" && (_.angle = c), p !== "" && (_.controls = x.controls), t.push(_);
              }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.if))
            for (let [b, h] of Gt(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), t.push(S);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.if))
            for (let [b, h] of Gt(f, (p) => p.controls.toString())) {
              let p = h[0], m = p.operationType, x = h.map((M) => M.bit), S = { type: m, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), t.push(S);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.angle))
            for (let [b, h] of Gt(f, (p) => p.if))
              for (let [p, m] of Gt(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((C) => C.bit), _ = { type: S, targets: M };
                b !== "" && (_.if = b), c !== "" && (_.angle = c), p !== "" && (_.controls = x.controls), t.push(_);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.angle))
            for (let [b, h] of Gt(f, (p) => p.if))
              for (let [p, m] of Gt(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((C) => C.bit), _ = { type: S, targets: M };
                b !== "" && (_.if = b), c !== "" && (_.angle = c), p !== "" && (_.controls = x.controls), t.push(_);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.angle))
            for (let [b, h] of Gt(f, (p) => p.if))
              for (let [p, m] of Gt(h, (x) => x.controls.toString())) {
                let x = m[0], S = x.operationType, M = m.map((C) => C.bit), _ = { type: S, targets: M };
                b !== "" && (_.if = b), c !== "" && (_.angle = c), p !== "" && (_.controls = x.controls), t.push(_);
              }
          break;
        }
        case lr: {
          let l = i.filter((h) => !h.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, b = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (b.controls = f), t.push(b);
          break;
        }
        case Fe: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => Tn(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          t.push({ type: l[0].operationType, targets: c });
          break;
        }
        case ie: {
          let l = i, c = i.map((f) => f.bit);
          t.push({ type: l[0].operationType, targets: c });
          break;
        }
        case We: {
          let l = i;
          for (let [, c] of Gt(l, (f) => f.value)) {
            let f = c.map((b) => b.bit);
            t.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of Gt(l, (b) => b.flag)) {
            let b = f.map((m) => m.bit), p = { type: f[0].operationType, targets: b };
            c !== "" && (p.flag = c), t.push(p);
          }
          break;
        }
        default:
          throw new Se("Unrecognized operation", { klass: e });
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
}, "De");
u(De, "CircuitStepElement"), A([N], De.prototype, "active", 2), A([N], De.prototype, "breakpoint", 2), A([N], De.prototype, "shadow", 2), A([N], De.prototype, "keep", 2), A([N], De.prototype, "debug", 2);
et(De);
var Ci = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ye({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
      this.circuit.draggable = true;
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
        Z.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), b = f.dropzones[l.wireIndex];
        Z.notNull(b), b.append(i), b.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
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
      Lp(i) && i.initMenu();
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
    this.circuitEditorService = le(this.circuitEditorMachine).onTransition((t) => {
      this.debug && console.log(`circuit-editor: ${te(t.value)}`);
    });
  }
  connectedCallback() {
    this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable);
  }
  update() {
    Q(W`<slot></slot>`, this.shadowRoot);
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
    !Xt(e) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(e)) && !this.inspectorButton.popup.reference.contains(e) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(t) {
    let e = t.target;
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: e });
  }
  showOperationMenu(t) {
    let e = t.target;
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: e });
  }
  showOperationInspectorIf(t) {
    let e = t.target;
    if (!Wr(e))
      throw new Error(`${e} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: e });
  }
  showOperationInspectorAngle(t) {
    let e = t.target;
    if (!Cn(e))
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
    if (!Wr(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: e.if });
  }
  setOperationAngle(t) {
    let e = t.target, i = this.activeOperation;
    if (Z.notNull(i), !Cn(i))
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
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: e });
  }
  releaseOperation(t) {
    let e = t.target;
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: e });
  }
  endDraggingOperation(t) {
    let e = t.target;
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: e });
  }
  dropOperation(t) {
    let e = t.target;
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: e });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(t) {
    let e = t.target;
    if (!dn(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: e });
  }
  snapStep(t) {
    let e = t.target;
    if (!dn(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: e });
  }
  unsnapStep(t) {
    let e = t.target;
    if (!dn(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: e });
  }
  operationInSnapRange(t) {
    let e = t.target;
    if (!Xt(e))
      throw new Error(`${e} must be an Operation.`);
    let l = t.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: e, x: c, y: f });
  }
  mouseEnterStep(t) {
    if (this.circuit.editing)
      return;
    let e = t.target;
    if (!dn(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: e });
  }
  mouseLeaveStep(t) {
    if (this.circuit.editing)
      return;
    let e = t.target;
    if (!dn(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: e });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "Ci");
u(Ci, "CircuitEditorElement"), A([N], Ci.prototype, "debug", 2), A([xt], Ci.prototype, "circuit", 2), A([xt], Ci.prototype, "inspectorButton", 2);
et(Ci);
var Ao;
var ql = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    sa(this, Ao, null);
  }
  connectedCallback() {
    let { signal: t } = la(this, Ao, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: t }), this.addEventListener("operation-delete", this.deleteOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = aa(this, Ao)) == null || t.abort();
  }
  update() {
    Q(W`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(t) {
    t.draggable = true, t.snapped = true, t.grabbed = false, Il(t) && t.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((t) => Xt(t));
  }
  newOperation(t) {
    let e = t.target;
    this.assertOperation(e);
    let i = e.cloneNode(false);
    this.assertOperation(i), Il(e) && e.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(t) {
    let e = t.target;
    this.assertOperation(e), this.removeChild(e);
  }
  assertOperation(t) {
    if (!Xt(t))
      throw new TypeError(`${t} isn't an operation.`);
  }
}, "ql");
u(ql, "PaletteDropzoneElement"), Ao = /* @__PURE__ */ new WeakMap();
et(ql);
var st = /* @__PURE__ */ __name(class extends Et(HTMLElement) {
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
    this.quantumCircuitMachine = ye({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = le(this.quantumCircuitMachine).onTransition((t) => {
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
    return Z.need(e !== -1, `circuit-step index of ${t} not found.`), e;
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
      this.append(new De());
  }
  stepAt(t) {
    let e = this.steps[t];
    return Z.notNull(e), e;
  }
  addShadowStepAfter(t) {
    let e = new De();
    e.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      e.appendDropzone();
    if (t === -1)
      this.prepend(e);
    else {
      let i = this.steps[t];
      Z.notNull(i.parentElement), i.parentElement.insertBefore(e, i.nextSibling);
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
    Q(W`<slot></slot>`, this.shadowRoot);
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
      let l = new er();
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
      let l = new cr();
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
      let l = new pr();
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
      let l = new dr();
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
      let f = new nr();
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
      let l = new ur();
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
      let l = new ir();
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
      let l = new or();
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
      let l = new ar();
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
      let l = new sr();
      return i && l.disable(), l;
    }, ...e), this;
  }
  swap(...t) {
    let e = this.applyOperationToTargets(() => new lr(), ...t);
    return this.updateStepOperationAttributes(e), this;
  }
  control(...t) {
    let e = this.applyOperationToTargets(() => new Fe(), ...t);
    return this.updateStepOperationAttributes(e), this;
  }
  bloch(...t) {
    return this.applyOperationToTargets(() => new ie(), ...t), this;
  }
  write(t, ...e) {
    return this.applyOperationToTargets(() => {
      let i = new We();
      return i.value = t, i;
    }, ...e), this.resize(), this;
  }
  measure(...t) {
    return this.applyOperationToTargets(() => new rr(), ...t), this.resize(), this;
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
    return this.controlledU(er, t, e), this;
  }
  cnot(t, e) {
    return this.controlledU(cr, t, e), this.resize(), this;
  }
  cy(t, e) {
    return this.controlledU(pr, t, e), this;
  }
  cz(t, e) {
    return this.controlledU(dr, t, e), this;
  }
  cphase(t, e) {
    return this.controlledU(nr, t, e), this;
  }
  ct(t, e) {
    return this.controlledU(ur, t, e), this;
  }
  crnot(t, e) {
    return this.controlledU(ir, t, e), this;
  }
  crx(t, e) {
    return this.controlledU(or, t, e), this;
  }
  cry(t, e) {
    return this.controlledU(ar, t, e), this;
  }
  crz(t, e) {
    return this.controlledU(sr, t, e), this;
  }
  cswap(t, e) {
    return this.controlledU(lr, t, e), this;
  }
  cc(...t) {
    let e = Math.max(...t) + 1, i = this.appendStepWithDropzones(e);
    for (let l of t)
      i.dropzoneAt(l).put(new Fe());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(t, e, i) {
    let l = [].concat(e), c = [].concat(i), f = l.concat(c), b = Math.max(...f) + 1, h = this.appendStepWithDropzones(b);
    for (let p of l)
      h.dropzoneAt(p).put(new Fe());
    for (let p of c)
      h.dropzoneAt(p).put(new t());
    this.appendMinimumWires(), this.updateStepOperationAttributes(h);
  }
  appendStep() {
    let t = new De(), e = this.blocks.slice(-1)[0] || null;
    return e === null || e.finalized ? this.append(t) : e.append(t), t;
  }
  appendStepWithDropzones(t) {
    let e = new De();
    this.append(e);
    for (let i = 0; i < t; i++) {
      let l = new Ce();
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
            let h = new We();
            h.value = "0", f.appendOperation(h);
            break;
          }
          case /^\|1>$/.test(b): {
            let h = new We();
            h.value = "1", f.appendOperation(h);
            break;
          }
          case /^H/.test(b): {
            let h = new er();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case (/^X$/.test(b) || /^X<(.+)$/.test(b)): {
            let h = new cr();
            h.if = b.slice(2).trim(), f.appendOperation(h);
            break;
          }
          case /^Y/.test(b): {
            let h = new pr();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^Z/.test(b): {
            let h = new dr();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^P/.test(b): {
            let h = new nr();
            h.angle = this.angleParameter(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^T/.test(b): {
            let h = new ur();
            h.if = this.ifVariable(b.slice(1)), f.appendOperation(h);
            break;
          }
          case /^X\^½/.test(b): {
            let h = new ir();
            h.if = this.ifVariable(b.slice(3)), f.appendOperation(h);
            break;
          }
          case /^Rx/.test(b): {
            let h = new or();
            h.angle = this.angleParameter(b.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Ry/.test(b): {
            let h = new ar();
            h.angle = this.angleParameter(b.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Rz/.test(b): {
            let h = new sr();
            h.angle = this.angleParameter(b.slice(2)), f.appendOperation(h);
            break;
          }
          case /^Swap$/.test(b): {
            let h = new lr();
            f.appendOperation(h);
            break;
          }
          case /^•$/.test(b): {
            let h = new Fe();
            f.appendOperation(h);
            break;
          }
          case /^Bloch$/.test(b): {
            let h = new ie();
            f.appendOperation(h);
            break;
          }
          case /^Measure/.test(b): {
            let h = new rr(), p = ((/^>(.+)$/.exec(b.slice(7)) || [])[1] || "").trim();
            h.flag = p, f.appendOperation(h);
            break;
          }
          case /^[[{](.+)$/.test(b): {
            let h = b.slice(1);
            f.remove(), e = new pn(), e.comment = h, e.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(e);
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
          let f = c.map((m) => i.bit(m)), b = i.bit(l), h = f[0] === b ? f[1] : f[0], p = i.dropzoneAt(h);
          l.inputWireQuantum = e, l.outputWireQuantum = p.inputWireQuantum, e = p.inputWireQuantum;
        } else
          l.inputWireQuantum = e, l.outputWireQuantum = e;
      } else
        l.inputWireQuantum = e, l.outputWireQuantum = e;
    }
  }
  updateChangedWire(t) {
    let e = t.target;
    if (!dn(e))
      throw new Error(`${e} isn't a circuit-step.`);
    let i = t.detail.dropzone;
    if (!Ll(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = e.dropzones.indexOf(i);
    Z.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  set draggable(t) {
    for (let e of this.operations)
      e.draggable = t;
  }
  snapTargetAt(t, e) {
    return this.isVertical ? this.snapTargets[e][t] : this.snapTargets[t][e];
  }
  setSnapTargets(t) {
    let e = this.dropzones.filter((c) => !c.occupied), i = [];
    this.snapTargets = {};
    let l = t.dropzone;
    Ll(l) && e.push(l);
    for (let [c, f] of Object.entries(this.dropzones)) {
      let b = f.snapTarget, h = this.isVertical ? b.y : b.x, p = this.isVertical ? b.x : b.y, m = parseInt(c) % this.wireCount, x = h - t.snapRange * 0.75, S = h + t.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: p, y: x }) : i.push({ x, y: p }), this.snapTargets[x] === void 0 && (this.snapTargets[x] = {}), this.snapTargets[x][p] === void 0 && (this.snapTargets[x][p] = { dropzone: null, stepIndex: -1, wireIndex: m })), this.isVertical ? i.push({ x: p, y: S }) : i.push({ x: S, y: p }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][p] === void 0 && (this.snapTargets[S][p] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: m }), (!f.occupied || f === l) && i.push(b), this.snapTargets[h] === void 0 && (this.snapTargets[h] = {}), this.snapTargets[h][p] === void 0 && (this.snapTargets[h][p] = { dropzone: f, stepIndex: null, wireIndex: m });
    }
    t.snapTargets = i;
  }
  updateSnapTargets(t) {
    let e = t[0];
    Z.notNull(e);
    let i = this.isVertical ? e.snapTarget.y : e.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let b = c[f];
          b.stepIndex !== null && (b.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(t)) {
      let f = c.snapTarget, b = this.isVertical ? f.y : f.x, h = this.isVertical ? f.x : f.y;
      Z.notNull(this.snapTargets[b]), this.snapTargets[b][h] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(st, "QuantumCircuitElement"), A([N], st.prototype, "minStepCount", 2), A([N], st.prototype, "minWireCount", 2), A([N], st.prototype, "maxWireCount", 2), A([N], st.prototype, "editing", 2), A([N], st.prototype, "updateUrl", 2), A([N], st.prototype, "json", 2), A([N], st.prototype, "circuitTitle", 2), A([N], st.prototype, "debug", 2), A([N], st.prototype, "chDisabled", 2), A([N], st.prototype, "chMaxControlGates", 2), A([N], st.prototype, "chMaxTargetGates", 2), A([N], st.prototype, "cnotDisabled", 2), A([N], st.prototype, "cnotMaxControlGates", 2), A([N], st.prototype, "cnotMaxTargetGates", 2), A([N], st.prototype, "cyDisabled", 2), A([N], st.prototype, "cyMaxControlGates", 2), A([N], st.prototype, "cyMaxTargetGates", 2), A([N], st.prototype, "czDisabled", 2), A([N], st.prototype, "czMaxControlGates", 2), A([N], st.prototype, "czMaxTargetGates", 2), A([N], st.prototype, "cphaseDisabled", 2), A([N], st.prototype, "cphaseMaxControlGates", 2), A([N], st.prototype, "cphaseMaxTargetGates", 2), A([N], st.prototype, "ctDisabled", 2), A([N], st.prototype, "ctMaxControlGates", 2), A([N], st.prototype, "ctMaxTargetGates", 2), A([N], st.prototype, "crnotDisabled", 2), A([N], st.prototype, "crnotMaxControlGates", 2), A([N], st.prototype, "crnotMaxTargetGates", 2), A([N], st.prototype, "crxDisabled", 2), A([N], st.prototype, "crxMaxControlGates", 2), A([N], st.prototype, "crxMaxTargetGates", 2), A([N], st.prototype, "cryDisabled", 2), A([N], st.prototype, "cryMaxControlGates", 2), A([N], st.prototype, "cryMaxTargetGates", 2), A([N], st.prototype, "crzDisabled", 2), A([N], st.prototype, "crzMaxControlGates", 2), A([N], st.prototype, "crzMaxTargetGates", 2), A([N], st.prototype, "cswapDisabled", 2), A([N], st.prototype, "cswapMaxControlGates", 2), A([N], st.prototype, "swapDisabled", 2), A([N], st.prototype, "controlControlDisabled", 2), A([N], st.prototype, "controlControlMaxTargetGates", 2), A([N], st.prototype, "phasePhaseDisabled", 2), A([N], st.prototype, "phasePhaseMaxTargetGates", 2), A([se], st.prototype, "blocks", 2);
et(st);
var Vn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.freshRun), this.addEventListener("circuit-step-unsnap", this.freshRun), this.addEventListener("circuit-step-update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Q(W`<slot></slot>`, this.shadowRoot);
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
          if (sd(h)) {
            let p = e.blochVectors[b];
            h.x = p[0], h.y = p[1], h.z = p[2];
          }
        }
        if (e.measuredBits) {
          let f = e.measuredBits;
          for (let b in f) {
            let h = parseInt(b), p = c.dropzoneAt(h).operation;
            ld(p) && (p.value = f[h].toString());
          }
        }
        for (let f of c.dropzones) {
          let b = f.operation;
          !Wr(b) || b.if !== "" && (b.disabled = !e.flags[b.if]);
        }
        if (i === e.step) {
          let f = {};
          for (let b in e.amplitudes) {
            let h = e.amplitudes[b];
            f[b] = new Ke(h[0], h[1]);
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
        throw new Se("Unknown service worker message", { data: e });
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
    Z.need(i.length > 0, "non-zero step length");
    let l = this.circuit.toJson(), c = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: c, stepIndex: e, circuitJson: l, invalidateCaches: t, steps: i, targets: this.circleNotation.visibleQubitCircleKets });
  }
  setCircleNotationQubitCount() {
    let t = this.circuit.serialize();
    Z.need(t.length > 0, "non-zero step length");
    let e = Math.max(...t.map((l) => Math.max(...l.map((c) => {
      let f = [];
      return Tn(c) && (f = c.controls), Math.max(...c.targets.concat(f));
    })))), i = e >= 0 ? e + 1 : 1;
    return this.circleNotation.qubitCount = i, i;
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let t = this.circuit.activeStep, e = this.circuit.breakpoint, i = t || e;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    Z.notNull(this.circuit);
    let t = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(t));
  }
}, "Vn");
u(Vn, "QuantumSimulatorElement"), A([N], Vn.prototype, "updateUrl", 2), A([xt], Vn.prototype, "circuit", 2), A([xt], Vn.prototype, "circleNotation", 2), A([se], Vn.prototype, "runCircuitButtons", 2);
et(Vn);

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
  Ke as Complex
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
