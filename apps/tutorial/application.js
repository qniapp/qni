var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var qf = Object.create;
var $i = Object.defineProperty;
var Hu = Object.getOwnPropertyDescriptor;
var Lf = Object.getOwnPropertyNames;
var jf = Object.getPrototypeOf;
var Bf = Object.prototype.hasOwnProperty;
var Hf = /* @__PURE__ */ __name((r) => $i(r, "__esModule", { value: true }), "Hf");
var u = /* @__PURE__ */ __name((r, e) => $i(r, "name", { value: e, configurable: true }), "u");
var na = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "na");
var $f = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of Lf(e))
      !Bf.call(r, l) && (t || l !== "default") && $i(r, l, { get: () => e[l], enumerable: !(i = Hu(e, l)) || i.enumerable });
  return r;
}, "$f");
var ii = /* @__PURE__ */ __name((r, e) => $f(Hf($i(r != null ? qf(jf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "ii");
var _ = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? Hu(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && $i(e, t, l), l;
}, "_");
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
    var l = A.DivisionByZero = i("DivisionByZero"), c = A.InvalidParameter = i("InvalidParameter");
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
      for (var P = {}, k = C, z = 2, L = 4; L <= k; ) {
        for (; k % z === 0; )
          k /= z, P[z] = (P[z] || 0) + 1;
        L += 1 + 2 * z++;
      }
      return k !== C ? k > 1 && (P[k] = (P[k] || 0) + 1) : P[C] = (P[C] || 0) + 1, P;
    }
    __name(h, "h");
    u(h, "factorize");
    var p = u(function(C, P) {
      var k = 0, z = 1, L = 1, T = 0, B = 0, D = 0, W = 1, Y = 1, H = 0, U = 1, ie = 1, oe = 1, V = 1e7, ce;
      if (C != null)
        if (P !== void 0)
          k = C, z = P, L = k * z;
        else
          switch (typeof C) {
            case "object": {
              "d" in C && "n" in C ? (k = C.n, z = C.d, "s" in C && (k *= C.s)) : 0 in C ? (k = C[0], 1 in C && (z = C[1])) : b(), L = k * z;
              break;
            }
            case "number": {
              if (C < 0 && (L = C, C = -C), C % 1 === 0)
                k = C;
              else if (C > 0) {
                for (C >= 1 && (Y = Math.pow(10, Math.floor(1 + Math.log(C) / Math.LN10)), C /= Y); U <= V && oe <= V; )
                  if (ce = (H + ie) / (U + oe), C === ce) {
                    U + oe <= V ? (k = H + ie, z = U + oe) : oe > U ? (k = ie, z = oe) : (k = H, z = U);
                    break;
                  } else
                    C > ce ? (H += ie, U += oe) : (ie += H, oe += U), U > V ? (k = ie, z = oe) : (k = H, z = U);
                k *= Y;
              } else
                (isNaN(C) || isNaN(P)) && (z = k = NaN);
              break;
            }
            case "string":
              if (U = C.match(/\d+|./g), U === null && b(), U[H] === "-" ? (L = -1, H++) : U[H] === "+" && H++, U.length === H + 1 ? B = f(U[H++], L) : U[H + 1] === "." || U[H] === "." ? (U[H] !== "." && (T = f(U[H++], L)), H++, (H + 1 === U.length || U[H + 1] === "(" && U[H + 3] === ")" || U[H + 1] === "'" && U[H + 3] === "'") && (B = f(U[H], L), W = Math.pow(10, U[H].length), H++), (U[H] === "(" && U[H + 2] === ")" || U[H] === "'" && U[H + 2] === "'") && (D = f(U[H + 1], L), Y = Math.pow(10, U[H + 1].length) - 1, H += 3)) : U[H + 1] === "/" || U[H + 1] === ":" ? (B = f(U[H], L), W = f(U[H + 2], 1), H += 3) : U[H + 3] === "/" && U[H + 1] === " " && (T = f(U[H], L), B = f(U[H + 2], L), W = f(U[H + 4], 1), H += 5), U.length <= H) {
                z = W * Y, L = k = D + z * T + Y * B;
                break;
              }
            default:
              b();
          }
      if (z === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(k), t.d = Math.abs(z);
    }, "parse");
    function v(C, P, k) {
      for (var z = 1; P > 0; C = C * C % k, P >>= 1)
        P & 1 && (z = z * C % k);
      return z;
    }
    __name(v, "v");
    u(v, "modpow");
    function x(C, P) {
      for (; P % 2 === 0; P /= 2)
        ;
      for (; P % 5 === 0; P /= 5)
        ;
      if (P === 1)
        return 0;
      for (var k = 10 % P, z = 1; k !== 1; z++)
        if (k = k * 10 % P, z > e)
          return 0;
      return z;
    }
    __name(x, "x");
    u(x, "cycleLen");
    function S(C, P, k) {
      for (var z = 1, L = v(10, k, P), T = 0; T < 300; T++) {
        if (z === L)
          return T;
        z = z * 10 % P, L = L * 10 % P;
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
    function A(C, P) {
      if (!(this instanceof A))
        return new A(C, P);
      p(C, P), C = M(t.d, t.n), this.s = t.s, this.n = t.n / C, this.d = t.d / C;
    }
    __name(A, "A");
    u(A, "Fraction"), A.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new A(this.n, this.d);
    }, neg: function() {
      return new A(-this.s * this.n, this.d);
    }, add: function(C, P) {
      return p(C, P), new A(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(C, P) {
      return p(C, P), new A(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(C, P) {
      return p(C, P), new A(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(C, P) {
      return p(C, P), new A(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new A(this);
    }, mod: function(C, P) {
      return isNaN(this.n) || isNaN(this.d) ? new A(NaN) : C === void 0 ? new A(this.s * this.n % this.d, 1) : (p(C, P), t.n === 0 && this.d === 0 && A(0, 0), new A(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(C, P) {
      return p(C, P), new A(M(t.n, this.n) * M(t.d, this.d), t.d * this.d);
    }, lcm: function(C, P) {
      return p(C, P), t.n === 0 && this.n === 0 ? new A() : new A(t.n * this.n, M(t.n, this.n) * M(t.d, this.d));
    }, ceil: function(C) {
      return C = Math.pow(10, C || 0), isNaN(this.n) || isNaN(this.d) ? new A(NaN) : new A(Math.ceil(C * this.s * this.n / this.d), C);
    }, floor: function(C) {
      return C = Math.pow(10, C || 0), isNaN(this.n) || isNaN(this.d) ? new A(NaN) : new A(Math.floor(C * this.s * this.n / this.d), C);
    }, round: function(C) {
      return C = Math.pow(10, C || 0), isNaN(this.n) || isNaN(this.d) ? new A(NaN) : new A(Math.round(C * this.s * this.n / this.d), C);
    }, inverse: function() {
      return new A(this.s * this.d, this.n);
    }, pow: function(C, P) {
      if (p(C, P), t.d === 1)
        return t.s < 0 ? new A(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new A(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var k = h(this.n), z = h(this.d), L = 1, T = 1;
      for (var B in k)
        if (B !== "1") {
          if (B === "0") {
            L = 0;
            break;
          }
          if (k[B] *= t.n, k[B] % t.d === 0)
            k[B] /= t.d;
          else
            return null;
          L *= Math.pow(B, k[B]);
        }
      for (var B in z)
        if (B !== "1") {
          if (z[B] *= t.n, z[B] % t.d === 0)
            z[B] /= t.d;
          else
            return null;
          T *= Math.pow(B, z[B]);
        }
      return t.s < 0 ? new A(T, L) : new A(L, T);
    }, equals: function(C, P) {
      return p(C, P), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(C, P) {
      p(C, P);
      var k = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < k) - (k < 0);
    }, simplify: function(C) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var P = this.abs().toContinued();
      C = C || 1e-3;
      function k(T) {
        return T.length === 1 ? new A(T[0]) : k(T.slice(1)).inverse().add(T[0]);
      }
      __name(k, "k");
      u(k, "rec");
      for (var z = 0; z < P.length; z++) {
        var L = k(P.slice(0, z + 1));
        if (L.sub(this.abs()).abs().valueOf() < C)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(C, P) {
      return p(C, P), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(C) {
      var P, k = "", z = this.n, L = this.d;
      return this.s < 0 && (k += "-"), L === 1 ? k += z : (C && (P = Math.floor(z / L)) > 0 && (k += P, k += " ", z %= L), k += z, k += "/", k += L), k;
    }, toLatex: function(C) {
      var P, k = "", z = this.n, L = this.d;
      return this.s < 0 && (k += "-"), L === 1 ? k += z : (C && (P = Math.floor(z / L)) > 0 && (k += P, z %= L), k += "\\frac{", k += z, k += "}{", k += L, k += "}"), k;
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
      var L = x(k, z), T = S(k, z, L), B = this.s === -1 ? "-" : "";
      if (B += k / z | 0, k %= z, k *= 10, k && (B += "."), L) {
        for (var D = T; D--; )
          B += k / z | 0, k %= z, k *= 10;
        B += "(";
        for (var D = L; D--; )
          B += k / z | 0, k %= z, k *= 10;
        B += ")";
      } else
        for (var D = C; k && D--; )
          B += k / z | 0, k %= z, k *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return A;
    }) : typeof Os == "object" ? (Object.defineProperty(A, "__esModule", { value: true }), A.default = A, A.Fraction = A, Fu.exports = A) : r.Fraction = A;
  })(Os);
});
var Da = na((Bc, il) => {
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
    __name(l, "l");
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
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
      return n === e.window || (0, r.default)(n);
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
      var o = e.getWindow(n) || e.window;
      return /object|function/.test(f(o.Element)) ? n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return b(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return b(n) && n.length !== void 0 && h(n.splice);
    } };
    c.default = p;
    var v = {};
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
    u(S, "d"), Object.defineProperty(v, "__esModule", { value: true }), v.default = void 0;
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
    v.default = A;
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
    var L = {};
    Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var T = { init: function(n) {
      var o = C.default.Element, a = n.navigator || {};
      T.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && C.default.document instanceof n.DocumentTouch, T.supportsPointerEvent = a.pointerEnabled !== false && !!C.default.PointerEvent, T.isIOS = /iP(hone|od|ad)/.test(a.platform), T.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), T.isIe9 = /MSIE 9/.test(a.userAgent), T.isOperaMobile = a.appName === "Opera" && T.supportsTouch && /Presto/.test(a.userAgent), T.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", T.pEventTypes = T.supportsPointerEvent ? C.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, T.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = T;
    L.default = B;
    var D = {};
    function W(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(W, "W");
    u(W, "P");
    function Y(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[L.default.prefixedMatchesSelector](o);
    }
    __name(Y, "Y");
    u(Y, "O"), Object.defineProperty(D, "__esModule", { value: true }), D.nodeContains = function(n, o) {
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
        if (Y(n, o))
          return n;
        n = W(n);
      }
      return null;
    }, D.parentNode = W, D.matchesSelector = Y, D.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var d = n[s], m = n[o];
        if (d && s !== o)
          if (m) {
            var y = H(d), g = H(m);
            if (y !== d.ownerDocument)
              if (g !== d.ownerDocument)
                if (y !== g) {
                  a = a.length ? a : U(m);
                  var w = void 0;
                  if (m instanceof C.default.HTMLElement && d instanceof C.default.SVGElement && !(d instanceof C.default.SVGSVGElement)) {
                    if (d === g)
                      continue;
                    w = d.ownerSVGElement;
                  } else
                    w = d;
                  for (var E = U(w, m.ownerDocument), O = 0; E[O] && E[O] === a[O]; )
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
                  q = d, R = m, (parseInt(e.getWindow(q).getComputedStyle(q).zIndex, 10) || 0) >= (parseInt(e.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var q, R;
      return o;
    }, D.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (Y(n, o))
          return true;
        if ((n = W(n)) === a)
          return Y(n, o);
      }
      return false;
    }, D.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, D.getScrollXY = ie, D.getElementClientRect = oe, D.getElementRect = function(n) {
      var o = oe(n);
      if (!L.default.isIOS7 && o) {
        var a = ie(e.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, D.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = W(n);
      return o;
    }, D.trySelector = function(n) {
      return !!c.default.string(n) && (C.default.document.querySelector(n), true);
    };
    var H = u(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function U(n, o) {
      for (var a, s = [], d = n; (a = H(d)) && d !== o && a !== d.ownerDocument; )
        s.unshift(d), d = a;
      return s;
    }
    __name(U, "U");
    u(U, "E");
    function ie(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(ie, "ie");
    u(ie, "T");
    function oe(n) {
      var o = n instanceof C.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(oe, "oe");
    u(oe, "M");
    var V = {};
    Object.defineProperty(V, "__esModule", { value: true }), V.default = function(n, o) {
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
    function We(n, o, a) {
      return n === "parent" ? (0, D.parentNode)(a) : n === "self" ? o.getRect(a) : (0, D.closest)(a, n);
    }
    __name(We, "We");
    u(We, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.getStringOptionResult = We, ce.resolveRectLike = function(n, o, a, s) {
      var d, m = n;
      return c.default.string(m) ? m = We(m, o, a) : c.default.func(m) && (m = m.apply(void 0, function(y) {
        if (Array.isArray(y))
          return De(y);
      }(d = s) || function(y) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(y))
          return Array.from(y);
      }(d) || function(y, g) {
        if (y) {
          if (typeof y == "string")
            return De(y, g);
          var w = Object.prototype.toString.call(y).slice(8, -1);
          return w === "Object" && y.constructor && (w = y.constructor.name), w === "Map" || w === "Set" ? Array.from(y) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? De(y, g) : void 0;
        }
      }(d) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(m) && (m = (0, D.getElementRect)(m)), m;
    }, ce.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, V.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    }, ce.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, V.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    };
    var qe = {};
    Object.defineProperty(qe, "__esModule", { value: true }), qe.default = function(n, o, a) {
      var s = n.options[a], d = s && s.origin || n.options.origin, m = (0, ce.resolveRectLike)(d, n, o, [n && o]);
      return (0, ce.rectToXY)(m) || { x: 0, y: 0 };
    };
    var fe = {};
    function Xe(n) {
      return n.trim().split(/ +/);
    }
    __name(Xe, "Xe");
    u(Xe, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Xe(o)), c.default.array(o))
        return o.reduce(function(w, E) {
          return (0, V.default)(w, n(E, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var d = 0; d < a.length; d++) {
          var m;
          m = a[d], n(o, m, s);
        }
      else if (c.default.object(a))
        for (var y in a) {
          var g = Xe(y).map(function(w) {
            return "".concat(o).concat(w);
          });
          n(g, a[y], s);
        }
      return s;
    }, "n"), "t");
    var Qe = {};
    Object.defineProperty(Qe, "__esModule", { value: true }), Qe.default = void 0, Qe.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var Nt = {};
    function At(n, o) {
      for (var a in o) {
        var s = At.prefixedPropREs, d = false;
        for (var m in s)
          if (a.indexOf(m) === 0 && s[m].test(a)) {
            d = true;
            break;
          }
        d || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    __name(At, "At");
    u(At, "X"), Object.defineProperty(Nt, "__esModule", { value: true }), Nt.default = void 0, At.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var _r = At;
    Nt.default = _r;
    var Q = {};
    function Tt(n) {
      return n instanceof C.default.Event || n instanceof C.default.Touch;
    }
    __name(Tt, "Tt");
    u(Tt, "W");
    function Ot(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(Ot, "Ot");
    u(Ot, "L");
    function kr(n, o) {
      return o = o || { x: 0, y: 0 }, L.default.isOperaMobile && Tt(n) ? (Ot("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Ot("page", n, o), o;
    }
    __name(kr, "kr");
    u(kr, "U");
    function Vt(n, o) {
      return o = o || {}, L.default.isOperaMobile && Tt(n) ? Ot("screen", n, o) : Ot("client", n, o), o;
    }
    __name(Vt, "Vt");
    u(Vt, "V");
    function hr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(hr, "hr");
    u(hr, "N");
    function vr(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var d in o)
          o[d] += s[d];
      }
      for (var m in o)
        o[m] /= n.length;
      return o;
    }
    __name(vr, "vr");
    u(vr, "q"), Object.defineProperty(Q, "__esModule", { value: true }), Q.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, Q.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, Q.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, Q.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, Q.isNativePointer = Tt, Q.getXY = Ot, Q.getPageXY = kr, Q.getClientXY = Vt, Q.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, Q.setCoords = function(n, o, a) {
      var s = o.length > 1 ? vr(o) : o[0];
      kr(s, n.page), Vt(s, n.client), n.timeStamp = a;
    }, Q.getTouchPair = hr, Q.pointerAverage = vr, Q.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = hr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), d = Math.max(o[0].pageX, o[1].pageX), m = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: d, bottom: m, width: d - a, height: m - s };
    }, Q.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", d = hr(n), m = d[0][a] - d[1][a], y = d[0][s] - d[1][s];
      return (0, Qe.default)(m, y);
    }, Q.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", d = hr(n), m = d[1][a] - d[0][a], y = d[1][s] - d[0][s];
      return 180 * Math.atan2(y, m) / Math.PI;
    }, Q.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof C.default.Touch ? "touch" : "mouse";
    }, Q.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [D.getActualElement(o ? o[0] : n.target), D.getActualElement(n.currentTarget)];
    }, Q.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, Q.coordsToEvent = function(n) {
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
    }, Object.defineProperty(Q, "pointerExtend", { enumerable: true, get: function() {
      return Nt.default;
    } });
    var Gt = {};
    function Vn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Vn, "Vn");
    u(Vn, "G");
    function _t(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(_t, "_t");
    u(_t, "H"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.BaseEvent = void 0;
    var pn = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
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
      } }]) && Vn(o.prototype, a), n;
    }();
    Gt.BaseEvent = pn, Object.defineProperty(pn.prototype, "interaction", { get: function() {
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
    var kt = {};
    function dn(n) {
      return (dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(dn, "dn");
    u(dn, "et");
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
    function fn(n, o) {
      return !o || dn(o) !== "object" && typeof o != "function" ? dt(n) : o;
    }
    __name(fn, "fn");
    u(fn, "ot");
    function dt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(dt, "dt");
    u(dt, "it");
    function zr(n) {
      return (zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(zr, "zr");
    u(zr, "at");
    function qt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(qt, "qt");
    u(qt, "st"), Object.defineProperty(kt, "__esModule", { value: true }), kt.DropEvent = void 0;
    var Yn = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), w && gr(g, w);
      })(y, n);
      var o, a, s, d, m = (s = y, d = function() {
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
        return fn(this, g);
      });
      function y(g, w, E) {
        var O;
        (function(R, $) {
          if (!(R instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, y), qt(dt(O = m.call(this, w._interaction)), "target", void 0), qt(dt(O), "dropzone", void 0), qt(dt(O), "dragEvent", void 0), qt(dt(O), "relatedTarget", void 0), qt(dt(O), "draggable", void 0), qt(dt(O), "timeStamp", void 0), qt(dt(O), "propagationStopped", false), qt(dt(O), "immediatePropagationStopped", false);
        var I = E === "dragleave" ? g.prev : g.cur, G = I.element, q = I.dropzone;
        return O.type = E, O.target = G, O.currentTarget = G, O.dropzone = q, O.dragEvent = w, O.relatedTarget = w.target, O.draggable = w.interactable, O.timeStamp = w.timeStamp, O;
      }
      __name(y, "y");
      return u(y, "a"), o = y, (a = [{ key: "reject", value: function() {
        var g = this, w = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && w.cur.dropzone === this.dropzone && w.cur.element === this.target)
          if (w.prev.dropzone = this.dropzone, w.prev.element = this.target, w.rejected = true, w.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var E = w.activeDrops, O = we.findIndex(E, function(G) {
              var q = G.dropzone, R = G.element;
              return q === g.dropzone && R === g.target;
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
      } }]) && mr(o.prototype, a), y;
    }(Gt.BaseEvent);
    kt.DropEvent = Yn;
    var Rr = {};
    function hn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], d = s.dropzone, m = s.element;
        o.dropzone = d, o.target = m, d.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(hn, "hn");
    u(hn, "ct");
    function Ci(n, o) {
      for (var a = function(m, y) {
        for (var g = m.interactables, w = [], E = 0; E < g.list.length; E++) {
          var O = g.list[E];
          if (O.options.drop.enabled) {
            var I = O.options.drop.accept;
            if (!(c.default.element(I) && I !== y || c.default.string(I) && !D.matchesSelector(y, I) || c.default.func(I) && !I({ dropzone: O, draggableElement: y })))
              for (var G = c.default.string(O.target) ? O._context.querySelectorAll(O.target) : c.default.array(O.target) ? O.target : [O.target], q = 0; q < G.length; q++) {
                var R = G[q];
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
    __name(Ci, "Ci");
    u(Ci, "ft");
    function Io(n, o, a) {
      for (var s = n.dropState, d = n.interactable, m = n.element, y = [], g = 0; g < s.activeDrops.length; g++) {
        var w = s.activeDrops[g], E = w.dropzone, O = w.element, I = w.rect;
        y.push(E.dropCheck(o, a, d, m, O, I) ? O : null);
      }
      var G = D.indexOfDeepestElement(y);
      return s.activeDrops[G] || null;
    }
    __name(Io, "Io");
    u(Io, "dt");
    function Ti(n, o, a) {
      var s = n.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (d.activate = new kt.DropEvent(s, a, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), a.type === "dragend" && (d.deactivate = new kt.DropEvent(s, a, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (d.leave = new kt.DropEvent(s, a, "dragleave"), a.dragLeave = d.leave.target = s.prev.element, a.prevDropzone = d.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (d.enter = new kt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (d.drop = new kt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (d.move = new kt.DropEvent(s, a, "dropmove"), d.move.dragmove = a, a.dropzone = s.cur.dropzone)), d;
    }
    __name(Ti, "Ti");
    u(Ti, "pt");
    function Oi(n, o) {
      var a = n.dropState, s = a.activeDrops, d = a.cur, m = a.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && d.dropzone.fire(o.enter), o.move && d.dropzone.fire(o.move), o.drop && d.dropzone.fire(o.drop), o.deactivate && hn(s, o.deactivate), a.prev.dropzone = d.dropzone, a.prev.element = d.element;
    }
    __name(Oi, "Oi");
    u(Oi, "vt");
    function Ao(n, o) {
      var a = n.interaction, s = n.iEvent, d = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var m = a.dropState;
        o.dynamicDrop && (m.activeDrops = Ci(o, a.element));
        var y = s, g = Io(a, y, d);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = Ti(a, 0, y);
      }
    }
    __name(Ao, "Ao");
    u(Ao, "ht"), Object.defineProperty(Rr, "__esModule", { value: true }), Rr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, d = n.defaults;
      n.usePlugin(v.default), s.prototype.dropzone = function(m) {
        return function(y, g) {
          if (c.default.object(g)) {
            if (y.options.drop.enabled = g.enabled !== false, g.listeners) {
              var w = (0, fe.default)(g.listeners), E = Object.keys(w).reduce(function(O, I) {
                return O[/^(enter|leave)/.test(I) ? "drag".concat(I) : /^(activate|deactivate|move)/.test(I) ? "drop".concat(I) : I] = w[I], O;
              }, {});
              y.off(y.options.drop.listeners), y.on(E), y.options.drop.listeners = E;
            }
            return c.default.func(g.ondrop) && y.on("drop", g.ondrop), c.default.func(g.ondropactivate) && y.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && y.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && y.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && y.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && y.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? y.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (y.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (y.options.drop.accept = g.accept), "checker" in g && (y.options.drop.checker = g.checker), y;
          }
          return c.default.bool(g) ? (y.options.drop.enabled = g, y) : y.options.drop;
        }(this, m);
      }, s.prototype.dropCheck = function(m, y, g, w, E, O) {
        return function(I, G, q, R, $, J, F) {
          var ne = false;
          if (!(F = F || I.getRect(J)))
            return !!I.options.drop.checker && I.options.drop.checker(G, q, ne, I, J, R, $);
          var le = I.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, qe.default)(R, $, "drag"), Ee = Q.getPageXY(G);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            ne = je && be;
          }
          var _e = R.getRect($);
          if (_e && le === "center") {
            var Zt = _e.left + _e.width / 2, qr = _e.top + _e.height / 2;
            ne = Zt >= F.left && Zt <= F.right && qr >= F.top && qr <= F.bottom;
          }
          return _e && c.default.number(le) && (ne = Math.max(0, Math.min(F.right, _e.right) - Math.max(F.left, _e.left)) * Math.max(0, Math.min(F.bottom, _e.bottom) - Math.max(F.top, _e.top)) / (_e.width * _e.height) >= le), I.options.drop.checker && (ne = I.options.drop.checker(G, q, ne, I, J, R, $)), ne;
        }(this, m, y, g, w, E, O);
      }, a.dynamicDrop = function(m) {
        return c.default.bool(m) ? (n.dynamicDrop = m, a) : n.dynamicDrop;
      }, (0, V.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, d.actions.drop = j.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var d = a.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = Ci(o, a.element), d.events = Ti(a, 0, s), d.events.activate && (hn(d.activeDrops, d.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Ao, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Oi(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Ao(n, o), Oi(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Ci, getDrop: Io, getDropEvents: Ti, fireDropEvents: Oi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, re = j;
    Rr.default = re;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var d = o.pointers.map(function(E) {
          return E.pointer;
        }), m = s === "start", y = s === "end", g = o.interactable.options.deltaSource;
        if (a.touches = [d[0], d[1]], m)
          a.distance = Q.touchDistance(d, g), a.box = Q.touchBBox(d), a.scale = 1, a.ds = 0, a.angle = Q.touchAngle(d, g), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (y) {
          var w = o.prevEvent;
          a.distance = w.distance, a.box = w.box, a.scale = w.scale, a.ds = 0, a.angle = w.angle, a.da = 0;
        } else
          a.distance = Q.touchDistance(d, g), a.box = Q.touchBBox(d), a.scale = a.distance / o.gesture.startDistance, a.angle = Q.touchAngle(d, g), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(ye, "ye");
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
    } }, ft = he;
    ae.default = ft;
    var ht = {};
    function Xr(n, o, a, s, d, m, y) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(m.width) ? m.width : m.right - m.left, w = c.default.number(m.height) ? m.height : m.bottom - m.top;
        if (y = Math.min(y, Math.abs((n === "left" || n === "right" ? g : w) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), w < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (g >= 0 ? m.left : m.right) + y;
        if (n === "top")
          return a.y < (w >= 0 ? m.top : m.bottom) + y;
        if (n === "right")
          return a.x > (g >= 0 ? m.right : m.left) - y;
        if (n === "bottom")
          return a.y > (w >= 0 ? m.bottom : m.top) - y;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : D.matchesUpTo(s, o, d));
    }
    __name(Xr, "Xr");
    u(Xr, "Pt");
    function Mi(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(Mi, "Mi");
    u(Mi, "Ot"), Object.defineProperty(ht, "__esModule", { value: true }), ht.default = void 0;
    var vt = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, d = n.defaults;
      vt.cursors = function(m) {
        return m.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), vt.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(m) {
        return function(y, g, w) {
          return c.default.object(g) ? (y.options.resize.enabled = g.enabled !== false, y.setPerAction("resize", g), y.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? y.options.resize.axis = g.axis : g.axis === null && (y.options.resize.axis = w.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? y.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (y.options.resize.square = g.square), y) : c.default.bool(g) ? (y.options.resize.enabled = g, y) : y.options.resize;
        }(this, m, n);
      }, o.map.resize = vt, o.methodDict.resize = "resizable", d.actions.resize = vt.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, m = s.rect;
          s._rects = { start: (0, V.default)({}, m), corrected: (0, V.default)({}, m), previous: (0, V.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = s.prepared.edges, d.rect = s._rects.corrected, d.deltaRect = s._rects.delta;
        }
      })(n), Mi(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, m = s.interactable.options.resize.invert, y = m === "reposition" || m === "negate", g = s.rect, w = s._rects, E = w.start, O = w.corrected, I = w.delta, G = w.previous;
          if ((0, V.default)(G, O), y) {
            if ((0, V.default)(O, g), m === "reposition") {
              if (O.top > O.bottom) {
                var q = O.top;
                O.top = O.bottom, O.bottom = q;
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
      })(n), Mi(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, d = n.rect, m = n.buttons;
      if (d) {
        var y = (0, V.default)({}, o.coords.cur.page), g = a.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (m & g.mouseButtons) != 0)) {
          if (c.default.object(g.edges)) {
            var w = { left: false, right: false, top: false, bottom: false };
            for (var E in w)
              w[E] = Xr(E, g.edges[E], y, o._latestPointer.eventTarget, s, d, g.margin || vt.defaultMargin);
            w.left = w.left && !w.right, w.top = w.top && !w.bottom, (w.left || w.right || w.top || w.bottom) && (n.action = { name: "resize", edges: w });
          } else {
            var O = g.axis !== "y" && y.x > d.right - vt.defaultMargin, I = g.axis !== "x" && y.y > d.bottom - vt.defaultMargin;
            (O || I) && (n.action = { name: "resize", axes: (O ? "x" : "") + (I ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, d = vt.cursors, m = null;
      if (a)
        m = d[s + a];
      else if (o) {
        for (var y = "", g = ["top", "bottom", "left", "right"], w = 0; w < g.length; w++) {
          var E = g[w];
          o[E] && (y += E);
        }
        m = d[y];
      }
      return m;
    }, defaultMargin: null }, Pi = vt;
    ht.default = Pi;
    var Dr = {};
    Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var Zr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(ht.default), n.usePlugin(v.default), n.usePlugin(Rr.default);
    } };
    Dr.default = Zr;
    var Lt = {};
    Object.defineProperty(Lt, "__esModule", { value: true }), Lt.default = void 0;
    var jt, Yt, ql = 0, gd = { request: function(n) {
      return jt(n);
    }, cancel: function(n) {
      return Yt(n);
    }, init: function(n) {
      if (jt = n.requestAnimationFrame, Yt = n.cancelAnimationFrame, !jt)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          jt = n["".concat(s, "RequestAnimationFrame")], Yt = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      jt = jt && jt.bind(n), Yt = Yt && Yt.bind(n), jt || (jt = u(function(d) {
        var m = Date.now(), y = Math.max(0, 16 - (m - ql)), g = n.setTimeout(function() {
          d(m + y);
        }, y);
        return ql = m + y, g;
      }, "kt"), Yt = u(function(d) {
        return clearTimeout(d);
      }, "It"));
    } };
    Lt.default = gd;
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: true }), Kr.getContainer = _o, Kr.getScroll = Ii, Kr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Kr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, d = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return o(), { x: 0, y: 0 };
      var m = _o(d.container, a.interactable, s), y = Ii(m);
      o();
      var g = Ii(m);
      return { x: g.x - y.x, y: g.y - y.y };
    }, Kr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, Lt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = Lt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), Lt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, d = o.options[s].autoScroll, m = _o(d.container, o, a), y = ue.now(), g = (y - ue.prevTime) / 1e3, w = d.speed * g;
      if (w >= 1) {
        var E = { x: ue.x * w, y: ue.y * w };
        if (E.x || E.y) {
          var O = Ii(m);
          c.default.window(m) ? m.scrollBy(E.x, E.y) : m && (m.scrollLeft += E.x, m.scrollTop += E.y);
          var I = Ii(m), G = { x: I.x - O.x, y: I.y - O.y };
          (G.x || G.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: G, interaction: n, container: m });
        }
        ue.prevTime = y;
      }
      ue.isScrolling && (Lt.default.cancel(ue.i), ue.i = Lt.default.request(ue.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && ue.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ue.x = ue.y = 0;
        else {
          var s, d, m, y, g = o.interactable, w = o.element, E = o.prepared.name, O = g.options[E].autoScroll, I = _o(O.container, g, w);
          if (c.default.window(I))
            y = a.clientX < ue.margin, s = a.clientY < ue.margin, d = a.clientX > I.innerWidth - ue.margin, m = a.clientY > I.innerHeight - ue.margin;
          else {
            var G = D.getElementClientRect(I);
            y = a.clientX < G.left + ue.margin, s = a.clientY < G.top + ue.margin, d = a.clientX > G.right - ue.margin, m = a.clientY > G.bottom - ue.margin;
          }
          ue.x = d ? 1 : y ? -1 : 0, ue.y = m ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = O.margin, ue.speed = O.speed, ue.start(o));
        }
    } };
    function _o(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(_o, "_o");
    u(_o, "Ct");
    function Ii(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Ii, "Ii");
    u(Ii, "Ft");
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
    Kr.default = bd;
    var Bt = {};
    Object.defineProperty(Bt, "__esModule", { value: true }), Bt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, Bt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, Bt.sign = void 0, Bt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var ko = {};
    function yd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(yd, "yd");
    u(yd, "Wt");
    function wd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(wd, "wd");
    u(wd, "Lt"), Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var xd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, d, m) {
        var y = function(g, w, E, O, I) {
          var G = g.getRect(O), q = { action: null, interactable: g, interaction: E, element: O, rect: G, buttons: w.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[w.button] };
          return I.fire("auto-start:check", q), q.action;
        }(this, s, d, m, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, y, this, m, d) : y;
      }, o.prototype.ignoreFrom = (0, Bt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, Bt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = wd, o.prototype.styleCursor = yd;
    } };
    ko.default = xd;
    var Xn = {};
    function Ll(n, o, a, s, d) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && zo(o, a, n, d) ? n : null;
    }
    __name(Ll, "Ll");
    u(Ll, "Nt");
    function Ed(n, o, a, s, d, m, y) {
      for (var g = 0, w = s.length; g < w; g++) {
        var E = s[g], O = d[g], I = E.getAction(o, a, n, O);
        if (I) {
          var G = Ll(I, E, O, m, y);
          if (G)
            return { action: G, interactable: E, element: O };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ed, "Ed");
    u(Ed, "qt");
    function jl(n, o, a, s, d) {
      var m = [], y = [], g = s;
      function w(O) {
        m.push(O), y.push(g);
      }
      __name(w, "w");
      for (u(w, "u"); c.default.element(g); ) {
        m = [], y = [], d.interactables.forEachMatch(g, w);
        var E = Ed(n, o, a, m, y, s, d);
        if (E.action && !E.interactable.options[E.action.name].manualStart)
          return E;
        g = D.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(jl, "jl");
    u(jl, "$t");
    function Bl(n, o, a) {
      var s = o.action, d = o.interactable, m = o.element;
      s = s || { name: null }, n.interactable = d, n.element = m, (0, Bt.copyAction)(n.prepared, s), n.rect = d && s.name ? d.getRect(m) : null, $l(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Bl, "Bl");
    u(Bl, "Gt");
    function zo(n, o, a, s) {
      var d = n.options, m = d[a.name].max, y = d[a.name].maxPerElement, g = s.autoStart.maxInteractions, w = 0, E = 0, O = 0;
      if (!(m && y && g))
        return false;
      for (var I = 0; I < s.interactions.list.length; I++) {
        var G = s.interactions.list[I], q = G.prepared.name;
        if (G.interacting() && (++w >= g || G.interactable === n && ((E += q === a.name ? 1 : 0) >= m || G.element === o && (O++, q === a.name && O >= y))))
          return false;
      }
      return g > 0;
    }
    __name(zo, "zo");
    u(zo, "Ht");
    function Hl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(Hl, "Hl");
    u(Hl, "Kt");
    function rs(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(rs, "rs");
    u(rs, "Zt");
    function $l(n, o) {
      var a = n.interactable, s = n.element, d = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var m = "";
        if (d.name) {
          var y = a.options[d.name].cursorChecker;
          m = c.default.func(y) ? y(d, a, s, n._interacting) : o.actions.map[d.name].getCursor(d);
        }
        rs(n.element, m || "", o);
      } else
        o.autoStart.cursorElement && rs(o.autoStart.cursorElement, "", o);
    }
    __name($l, "$l");
    u($l, "Jt"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = void 0;
    var Sd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(ko.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, V.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return Hl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: zo, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget;
      a.interacting() || Bl(a, jl(a, s, d, m, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var d = a.interaction, m = a.pointer, y = a.event, g = a.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || Bl(d, jl(d, m, y, g, s), s);
      })(n, o), function(a, s) {
        var d = a.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          s.fire("autoStart:before-start", a);
          var m = d.interactable, y = d.prepared.name;
          y && m && (m.options[y].manualStart || !zo(m, d.element, d.prepared, s) ? d.stop() : (d.start(d.prepared, m, d.element), $l(d, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && rs(a.element, "", o);
    } }, maxInteractions: Hl, withinInteractionLimit: zo, validateAction: Ll };
    Xn.default = Sd;
    var Ro = {};
    Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
    var Cd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, d = n.dx, m = n.dy;
      if (a.prepared.name === "drag") {
        var y = Math.abs(d), g = Math.abs(m), w = a.interactable.options.drag, E = w.startAxis, O = y > g ? "x" : y < g ? "y" : "xy";
        if (a.prepared.axis = w.lockAxis === "start" ? O[0] : w.lockAxis, O !== "xy" && E !== "xy" && E !== O) {
          a.prepared.name = null;
          for (var I = s, G = function(R) {
            if (R !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && R.testIgnoreAllow($, I, s)) {
                var J = R.getAction(a.downPointer, a.downEvent, a, I);
                if (J && J.name === "drag" && function(F, ne) {
                  if (!ne)
                    return false;
                  var le = ne.options.drag.startAxis;
                  return F === "xy" || le === "xy" || le === F;
                }(O, R) && Xn.default.validateAction(J, R, I, s, o))
                  return R;
              }
            }
          }; c.default.element(I); ) {
            var q = o.interactables.forEachMatch(I, G);
            if (q) {
              a.prepared.name = "drag", a.interactable = q, a.element = I;
              break;
            }
            I = (0, D.parentNode)(I);
          }
        }
      }
    } } };
    Ro.default = Cd;
    var Do = {};
    function ns(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(ns, "ns");
    u(ns, "re"), Object.defineProperty(Do, "__esModule", { value: true }), Do.default = void 0;
    var Td = { id: "auto-start/hold", install: function(n) {
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
    Do.default = Td;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Od = { id: "auto-start", install: function(n) {
      n.usePlugin(Xn.default), n.usePlugin(Do.default), n.usePlugin(Ro.default);
    } };
    No.default = Od;
    var Zn = {};
    function Md(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Md, "Md");
    u(Md, "le");
    function Pd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Pd, "Pd");
    u(Pd, "ue");
    function Fl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Md, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, d, m) {
          var y = s.options.preventDefault;
          if (y !== "never")
            if (y !== "always") {
              if (d.events.supportsPassive && /^touch(start|move)$/.test(m.type)) {
                var g = (0, e.getWindow)(m.target).document, w = d.getDocOptions(g);
                if (!w || !w.events || w.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(m.type) || c.default.element(m.target) && (0, D.matchesSelector)(m.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || m.preventDefault();
            } else
              m.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var d = n.interactions.list[s];
          if (d.element && (d.element === a.target || (0, D.nodeContains)(d.element, a.target)))
            return void d.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(Fl, "Fl");
    u(Fl, "ce"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.install = Fl, Zn.default = void 0;
    var Id = { id: "core/interactablePreventDefault", install: Fl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Pd, n;
    }, {}) };
    Zn.default = Id;
    var is = {};
    Object.defineProperty(is, "__esModule", { value: true }), is.default = void 0, is.default = {};
    var Ai, os = {};
    Object.defineProperty(os, "__esModule", { value: true }), os.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ai || (Ai = {})), Ai.touchAction, Ai.boxSizing, Ai.noListeners;
    var Ad = { id: "dev-tools", install: function() {
    } };
    os.default = Ad;
    var vn = {};
    Object.defineProperty(vn, "__esModule", { value: true }), vn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var d = o[s];
        c.default.plainObject(d) ? a[s] = n(d) : c.default.array(d) ? a[s] = we.from(d) : a[s] = d;
      }
      return a;
    }, "n"), "t");
    var mn = {};
    function Wl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], m = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(m = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); m = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              m || E.return == null || E.return();
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
            return Ul(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Ul(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Wl, "Wl");
    u(Wl, "me");
    function Ul(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Ul, "Ul");
    u(Ul, "be");
    function _d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(_d, "_d");
    u(_d, "xe");
    function gn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(gn, "gn");
    u(gn, "we"), Object.defineProperty(mn, "__esModule", { value: true }), mn.getRectOffset = Vl, mn.default = void 0;
    var kd = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), gn(this, "states", []), gn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), gn(this, "startDelta", void 0), gn(this, "result", void 0), gn(this, "endResult", void 0), gn(this, "edges", void 0), gn(this, "interaction", void 0), this.interaction = s, this.result = Go();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, d) {
        var m = s.phase, y = this.interaction, g = function(E) {
          var O = E.interactable.options[E.prepared.name], I = O.modifiers;
          return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(G) {
            var q = O[G];
            return q && q.enabled && { options: q, methods: q._methods };
          }).filter(function(G) {
            return !!G;
          });
        }(y);
        this.prepareStates(g), this.edges = (0, V.default)({}, y.edges), this.startOffset = Vl(y.rect, d), this.startDelta = { x: 0, y: 0 };
        var w = this.fillArg({ phase: m, pageCoords: d, preEnd: false });
        return this.result = Go(), this.startAll(w), this.result = this.setAll(w);
      } }, { key: "fillArg", value: function(s) {
        var d = this.interaction;
        return s.interaction = d, s.interactable = d.interactable, s.element = d.element, s.rect = s.rect || d.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var d = 0; d < this.states.length; d++) {
          var m = this.states[d];
          m.methods.start && (s.state = m, m.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var d = s.phase, m = s.preEnd, y = s.skipModifiers, g = s.rect;
        s.coords = (0, V.default)({}, s.pageCoords), s.rect = (0, V.default)({}, g);
        for (var w = y ? this.states.slice(y) : this.states, E = Go(s.coords, s.rect), O = 0; O < w.length; O++) {
          var I, G = w[O], q = G.options, R = (0, V.default)({}, s.coords), $ = null;
          (I = G.methods) != null && I.set && this.shouldDo(q, m, d) && (s.state = G, $ = G.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - R.x, y: s.coords.y - R.y })), E.eventProps.push($);
        }
        E.delta.x = s.coords.x - s.pageCoords.x, E.delta.y = s.coords.y - s.pageCoords.y, E.rectDelta.left = s.rect.left - g.left, E.rectDelta.right = s.rect.right - g.right, E.rectDelta.top = s.rect.top - g.top, E.rectDelta.bottom = s.rect.bottom - g.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var ne = E.rect.left !== F.left || E.rect.right !== F.right || E.rect.top !== F.top || E.rect.bottom !== F.bottom;
          E.changed = ne || J.x !== E.coords.x || J.y !== E.coords.y;
        }
        return E;
      } }, { key: "applyToInteraction", value: function(s) {
        var d = this.interaction, m = s.phase, y = d.coords.cur, g = d.coords.start, w = this.result, E = this.startDelta, O = w.delta;
        m === "start" && (0, V.default)(this.startDelta, w.delta);
        for (var I = 0; I < [[g, E], [y, O]].length; I++) {
          var G = Wl([[g, E], [y, O]][I], 2), q = G[0], R = G[1];
          q.page.x += R.x, q.page.y += R.y, q.client.x += R.x, q.client.y += R.y;
        }
        var $ = this.result.rectDelta, J = s.rect || d.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var d = this.interaction, m = s.phase, y = s.preEnd, g = s.skipModifiers, w = this.setAll(this.fillArg({ preEnd: y, phase: m, pageCoords: s.modifiedCoords || d.coords.cur.page }));
        if (this.result = w, !w.changed && (!g || g < this.states.length) && d.interacting())
          return false;
        if (s.modifiedCoords) {
          var E = d.coords.cur.page, O = { x: s.modifiedCoords.x - E.x, y: s.modifiedCoords.y - E.y };
          w.coords.x += O.x, w.coords.y += O.y, w.delta.x += O.x, w.delta.y += O.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var d = s.interaction, m = s.event, y = this.states;
        if (y && y.length) {
          for (var g = false, w = 0; w < y.length; w++) {
            var E = y[w];
            s.state = E;
            var O = E.options, I = E.methods, G = I.beforeEnd && I.beforeEnd(s);
            if (G)
              return this.endResult = G, false;
            g = g || !g && this.shouldDo(O, true, s.phase, true);
          }
          g && d.move({ event: m, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var d = s.interaction;
        if (this.states && this.states.length) {
          var m = (0, V.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, s);
          this.fillArg(m);
          for (var y = 0; y < this.states.length; y++) {
            var g = this.states[y];
            m.state = g, g.methods.stop && g.methods.stop(m);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var d = 0; d < s.length; d++) {
          var m = s[d], y = m.options, g = m.methods, w = m.name;
          this.states.push({ options: y, methods: g, index: d, name: w });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var d = s.interaction, m = d.coords, y = d.rect, g = d.modification;
        if (g.result) {
          for (var w = g.startDelta, E = g.result, O = E.delta, I = E.rectDelta, G = [[m.start, w], [m.cur, O]], q = 0; q < G.length; q++) {
            var R = Wl(G[q], 2), $ = R[0], J = R[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          y.left -= I.left, y.right -= I.right, y.top -= I.top, y.bottom -= I.bottom;
        }
      } }, { key: "shouldDo", value: function(s, d, m, y) {
        return !(!s || s.enabled === false || y && !s.endOnly || s.endOnly && !d || m === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(d) {
          return (0, vn.default)(d);
        }), this.result = Go((0, V.default)({}, s.result.coords), (0, V.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && _d(o.prototype, a), n;
    }();
    function Go(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Go, "Go");
    u(Go, "Pe");
    function Vl(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Vl, "Vl");
    u(Vl, "Oe"), mn.default = kd;
    var mt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(qo, "qo");
    u(qo, "Ee"), Object.defineProperty(mt, "__esModule", { value: true }), mt.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, d = u(function(m) {
        var y = m || {};
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
    }, mt.addEventModifiers = qo, mt.default = void 0;
    var zd = { id: "modifiers/base", before: ["actions"], install: function(n) {
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
    }, "interactions:action-start": qo, "interactions:action-move": qo, "interactions:action-end": qo, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    mt.default = zd;
    var _i = {};
    Object.defineProperty(_i, "__esModule", { value: true }), _i.defaults = void 0, _i.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var ki = {};
    function Yl(n) {
      return (Yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Yl, "Yl");
    u(Yl, "ke");
    function Rd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Rd, "Rd");
    u(Rd, "Ie");
    function Xl(n, o) {
      return (Xl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Xl, "Xl");
    u(Xl, "De");
    function Dd(n, o) {
      return !o || Yl(o) !== "object" && typeof o != "function" ? Te(n) : o;
    }
    __name(Dd, "Dd");
    u(Dd, "Ae");
    function Te(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Te, "Te");
    u(Te, "Re");
    function as(n) {
      return (as = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(as, "as");
    u(as, "ze");
    function Ae(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ae, "Ae");
    u(Ae, "Ce"), Object.defineProperty(ki, "__esModule", { value: true }), ki.InteractEvent = void 0;
    var Zl = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), w && Xl(g, w);
      })(y, n);
      var o, a, s, d, m = (s = y, d = function() {
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
        var g, w = as(s);
        if (d) {
          var E = as(this).constructor;
          g = Reflect.construct(w, arguments, E);
        } else
          g = w.apply(this, arguments);
        return Dd(this, g);
      });
      function y(g, w, E, O, I, G, q) {
        var R;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, y), Ae(Te(R = m.call(this, g)), "target", void 0), Ae(Te(R), "currentTarget", void 0), Ae(Te(R), "relatedTarget", null), Ae(Te(R), "screenX", void 0), Ae(Te(R), "screenY", void 0), Ae(Te(R), "button", void 0), Ae(Te(R), "buttons", void 0), Ae(Te(R), "ctrlKey", void 0), Ae(Te(R), "shiftKey", void 0), Ae(Te(R), "altKey", void 0), Ae(Te(R), "metaKey", void 0), Ae(Te(R), "page", void 0), Ae(Te(R), "client", void 0), Ae(Te(R), "delta", void 0), Ae(Te(R), "rect", void 0), Ae(Te(R), "x0", void 0), Ae(Te(R), "y0", void 0), Ae(Te(R), "t0", void 0), Ae(Te(R), "dt", void 0), Ae(Te(R), "duration", void 0), Ae(Te(R), "clientX0", void 0), Ae(Te(R), "clientY0", void 0), Ae(Te(R), "velocity", void 0), Ae(Te(R), "speed", void 0), Ae(Te(R), "swipe", void 0), Ae(Te(R), "timeStamp", void 0), Ae(Te(R), "axes", void 0), Ae(Te(R), "preEnd", void 0), I = I || g.element;
        var $ = g.interactable, J = ($ && $.options || _i.defaults).deltaSource, F = (0, qe.default)($, I, E), ne = O === "start", le = O === "end", pe = ne ? Te(R) : g.prevEvent, Ee = ne ? g.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return R.page = (0, V.default)({}, Ee.page), R.client = (0, V.default)({}, Ee.client), R.rect = (0, V.default)({}, g.rect), R.timeStamp = Ee.timeStamp, le || (R.page.x -= F.x, R.page.y -= F.y, R.client.x -= F.x, R.client.y -= F.y), R.ctrlKey = w.ctrlKey, R.altKey = w.altKey, R.shiftKey = w.shiftKey, R.metaKey = w.metaKey, R.button = w.button, R.buttons = w.buttons, R.target = I, R.currentTarget = I, R.preEnd = G, R.type = q || E + (O || ""), R.interactable = $, R.t0 = ne ? g.pointers[g.pointers.length - 1].downTime : pe.t0, R.x0 = g.coords.start.page.x - F.x, R.y0 = g.coords.start.page.y - F.y, R.clientX0 = g.coords.start.client.x - F.x, R.clientY0 = g.coords.start.client.y - F.y, R.delta = ne || le ? { x: 0, y: 0 } : { x: R[J].x - pe[J].x, y: R[J].y - pe[J].y }, R.dt = g.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, V.default)({}, g.coords.velocity[J]), R.speed = (0, Qe.default)(R.velocity.x, R.velocity.y), R.swipe = le || O === "inertiastart" ? R.getSwipe() : null, R;
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
      } }]) && Rd(o.prototype, a), y;
    }(Gt.BaseEvent);
    ki.InteractEvent = Zl, Object.defineProperties(Zl.prototype, { pageX: { get: function() {
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
    function Ri(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ri, "Ri");
    u(Ri, "Ye"), Object.defineProperty(zi, "__esModule", { value: true }), zi.PointerInfo = void 0, zi.PointerInfo = u(/* @__PURE__ */ __name(function n(o, a, s, d, m) {
      (function(y, g) {
        if (!(y instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ri(this, "id", void 0), Ri(this, "pointer", void 0), Ri(this, "event", void 0), Ri(this, "downTime", void 0), Ri(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = d, this.downTarget = m;
    }, "n"), "t");
    var Lo, jo, zt = {};
    function Nd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Nd, "Nd");
    u(Nd, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(He, "He");
    u(He, "Ve"), Object.defineProperty(zt, "__esModule", { value: true }), Object.defineProperty(zt, "PointerInfo", { enumerable: true, get: function() {
      return zi.PointerInfo;
    } }), zt.default = zt.Interaction = zt._ProxyMethods = zt._ProxyValues = void 0, zt._ProxyValues = Lo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Lo || (zt._ProxyValues = Lo = {})), zt._ProxyMethods = jo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(jo || (zt._ProxyMethods = jo = {}));
    var Gd = 0, Kl = function() {
      function n(s) {
        var d = this, m = s.pointerType, y = s.scopeFire;
        (function(G, q) {
          if (!(G instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Bt.warnOnce)(function(G) {
          this.move(G);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: Q.newCoords(), prev: Q.newCoords(), cur: Q.newCoords(), delta: Q.newCoords(), velocity: Q.newCoords() }), He(this, "_id", Gd++), this._scopeFire = y, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var w = u(function(G) {
          Object.defineProperty(d._proxy, G, { get: function() {
            return g[G];
          } });
        }, "a");
        for (var E in Lo)
          w(E);
        var O = u(function(G) {
          Object.defineProperty(d._proxy, G, { value: function() {
            return g[G].apply(g, arguments);
          } });
        }, "l");
        for (var I in jo)
          O(I);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, d, m) {
        var y = this.updatePointer(s, d, m, true), g = this.pointers[y];
        this._scopeFire("interactions:down", { pointer: s, event: d, eventTarget: m, pointerIndex: y, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(s, d, m) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !d.options[s.name].enabled) && ((0, Bt.copyAction)(this.prepared, s), this.interactable = d, this.element = m, this.rect = d.getRect(m), this.edges = this.prepared.edges ? (0, V.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, d, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, d, m, false);
        var y, g, w = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (y = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Qe.default)(y, g) > this.pointerMoveTolerance);
        var E = this.getPointerIndex(s), O = { pointer: s, pointerIndex: E, pointerInfo: this.pointers[E], event: d, type: "move", eventTarget: m, dx: y, dy: g, duplicate: w, interaction: this };
        w || Q.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", O), w || this.simulation || (this.interacting() && (O.type = null, this.move(O)), this.pointerWasMoved && Q.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || Q.setZeroCoords(this.coords.delta), (s = (0, V.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, d, m, y) {
        var g = this.getPointerIndex(s);
        g === -1 && (g = this.updatePointer(s, d, m, false));
        var w = /cancel$/i.test(d.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(w), { pointer: s, pointerIndex: g, pointerInfo: this.pointers[g], event: d, eventTarget: m, type: w, curEventTarget: y, interaction: this }), this.simulation || this.end(d), this.removePointer(s, d);
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
        var d = Q.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : we.findIndex(this.pointers, function(m) {
          return m.id === d;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, d, m, y) {
        var g = Q.getPointerId(s), w = this.getPointerIndex(s), E = this.pointers[w];
        return y = y !== false && (y || /(down|start)$/i.test(d.type)), E ? E.pointer = s : (E = new zi.PointerInfo(g, s, d, null, null), w = this.pointers.length, this.pointers.push(E)), Q.setCoords(this.coords.cur, this.pointers.map(function(O) {
          return O.pointer;
        }), this._now()), Q.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), y && (this.pointerIsDown = true, E.downTime = this.coords.cur.timeStamp, E.downTarget = m, Q.pointerExtend(this.downPointer, s), this.interacting() || (Q.copyCoords(this.coords.start, this.coords.cur), Q.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = d, this.pointerWasMoved = false)), this._updateLatestPointer(s, d, m), this._scopeFire("interactions:update-pointer", { pointer: s, event: d, eventTarget: m, down: y, pointerInfo: E, pointerIndex: w, interaction: this }), w;
      } }, { key: "removePointer", value: function(s, d) {
        var m = this.getPointerIndex(s);
        if (m !== -1) {
          var y = this.pointers[m];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: d, eventTarget: null, pointerIndex: m, pointerInfo: y, interaction: this }), this.pointers.splice(m, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, d, m) {
        this._latestPointer.pointer = s, this._latestPointer.event = d, this._latestPointer.eventTarget = m;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, d, m, y) {
        return new ki.InteractEvent(this, s, this.prepared.name, d, this.element, m, y);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var d = s.event, m = s.phase, y = s.preEnd, g = s.type, w = this.rect;
        if (w && m === "move" && (ce.addEdges(this.edges, w, this.coords.delta[this.interactable.options.deltaSource]), w.width = w.right - w.left, w.height = w.bottom - w.top), this._scopeFire("interactions:before-action-".concat(m), s) === false)
          return false;
        var E = s.iEvent = this._createPreparedEvent(d, m, y, g);
        return this._scopeFire("interactions:action-".concat(m), s), m === "start" && (this.prevEvent = E), this._fireEvent(E), this._scopeFire("interactions:after-action-".concat(m), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Nd(o.prototype, a), n;
    }();
    zt.Interaction = Kl;
    var qd = Kl;
    zt.default = qd;
    var bn = {};
    function Jl(n) {
      n.pointerIsDown && (ls(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(Jl, "Jl");
    u(Jl, "He");
    function Ql(n) {
      ss(n.interaction);
    }
    __name(Ql, "Ql");
    u(Ql, "Ke");
    function ss(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return ls(n.coords.cur, o), ls(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(ss, "ss");
    u(ss, "Ze");
    function Ld(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(Ld, "Ld");
    u(Ld, "Je");
    function ls(n, o) {
      var a = n.page, s = n.client, d = o.x, m = o.y;
      a.x += d, a.y += m, s.x += d, s.y += m;
    }
    __name(ls, "ls");
    u(ls, "Qe"), Object.defineProperty(bn, "__esModule", { value: true }), bn.addTotal = Jl, bn.applyPending = ss, bn.default = void 0, zt._ProxyMethods.offsetBy = "";
    var jd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = Ld;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Jl(n.interaction);
    }, "interactions:before-action-start": Ql, "interactions:before-action-move": Ql, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (ss(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    bn.default = jd;
    var Kn = {};
    function Bd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Bd, "Bd");
    u(Bd, "nn");
    function ot(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ot, "ot");
    u(ot, "rn"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = Kn.InertiaState = void 0;
    var eu = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ot(this, "active", false), ot(this, "isModified", false), ot(this, "smoothEnd", false), ot(this, "allowResume", false), ot(this, "modification", void 0), ot(this, "modifierCount", 0), ot(this, "modifierArg", void 0), ot(this, "startCoords", void 0), ot(this, "t0", 0), ot(this, "v0", 0), ot(this, "te", 0), ot(this, "targetOffset", void 0), ot(this, "modifiedOffset", void 0), ot(this, "currentOffset", void 0), ot(this, "lambda_v0", 0), ot(this, "one_ve_v0", 0), ot(this, "timeout", void 0), ot(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var d = this.interaction, m = Bo(d);
        if (!m || !m.enabled)
          return false;
        var y = d.coords.velocity.client, g = (0, Qe.default)(y.x, y.y), w = this.modification || (this.modification = new mn.default(d));
        if (w.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = w.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (w.result = w.setAll(this.modifierArg), !w.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: s, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = true, d.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, d = this.interaction.coords.velocity.client, m = Bo(this.interaction), y = m.resistance, g = -Math.log(m.endSpeed / this.v0) / y;
        this.targetOffset = { x: (d.x - g) / y, y: (d.y - g) / y }, this.te = g, this.lambda_v0 = y / this.v0, this.one_ve_v0 = 1 - m.endSpeed / this.v0;
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
        this.timeout = Lt.default.request(function() {
          d.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, d, m, y, g, w = this, E = this.interaction, O = Bo(E).resistance, I = (E._now() - this.t0) / 1e3;
        if (I < this.te) {
          var G, q = 1 - (Math.exp(-O * I) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, d = this.targetOffset.y, m = this.modifiedOffset.x, y = this.modifiedOffset.y, G = { x: tu(g = q, 0, s, m), y: tu(g, 0, d, y) }) : G = { x: this.targetOffset.x * q, y: this.targetOffset.y * q };
          var R = { x: G.x - this.currentOffset.x, y: G.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, E.offsetBy(R), E.move(), this.onNextFrame(function() {
            return w.inertiaTick();
          });
        } else
          E.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, d = this.interaction, m = d._now() - this.t0, y = Bo(d).smoothEndDuration;
        if (m < y) {
          var g = { x: ru(m, 0, this.targetOffset.x, y), y: ru(m, 0, this.targetOffset.y, y) }, w = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, d.offsetBy(w), d.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          d.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var d = s.pointer, m = s.event, y = s.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(d, m, y, true), g._doPhase({ interaction: g, event: m, phase: "resume" }), (0, Q.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Lt.default.cancel(this.timeout);
      } }]) && Bd(o.prototype, a), n;
    }();
    function Bo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Bo, "Bo");
    u(Bo, "an");
    function tu(n, o, a, s) {
      var d = 1 - n;
      return d * d * o + 2 * d * n * a + n * n * s;
    }
    __name(tu, "tu");
    u(tu, "sn");
    function ru(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(ru, "ru");
    u(ru, "ln"), Kn.InertiaState = eu;
    var Hd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(bn.default), n.usePlugin(mt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
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
    }, "interactions:action-resume": mt.addEventModifiers, "interactions:action-inertiastart": mt.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Kn.default = Hd;
    var Di = {};
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name($d, "$d");
    u($d, "fn");
    function Ni(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ni, "Ni");
    u(Ni, "dn");
    function nu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(nu, "nu");
    u(nu, "pn"), Object.defineProperty(Di, "__esModule", { value: true }), Di.Eventable = void 0;
    var Fd = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ni(this, "options", void 0), Ni(this, "types", {}), Ni(this, "propagationStopped", false), Ni(this, "immediatePropagationStopped", false), Ni(this, "global", void 0), this.options = (0, V.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var d, m = this.global;
        (d = this.types[s.type]) && nu(s, d), !s.propagationStopped && m && (d = m[s.type]) && nu(s, d);
      } }, { key: "on", value: function(s, d) {
        var m = (0, fe.default)(s, d);
        for (s in m)
          this.types[s] = we.merge(this.types[s] || [], m[s]);
      } }, { key: "off", value: function(s, d) {
        var m = (0, fe.default)(s, d);
        for (s in m) {
          var y = this.types[s];
          if (y && y.length)
            for (var g = 0; g < m[s].length; g++) {
              var w = m[s][g], E = y.indexOf(w);
              E !== -1 && y.splice(E, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && $d(o.prototype, a), n;
    }();
    Di.Eventable = Fd;
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: true }), Gi.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var us = {};
    Object.defineProperty(us, "__esModule", { value: true }), us.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, d) {
        var m = n.interactables.get(s, d);
        return m || ((m = n.interactables.new(s, d)).events.global = a.globalEvents), m;
      }, "a"), "e");
      return o.getPointerAverage = Q.pointerAverage, o.getTouchBBox = Q.touchBBox, o.getTouchDistance = Q.touchDistance, o.getTouchAngle = Q.touchAngle, o.getElementRect = D.getElementRect, o.getElementClientRect = D.getElementClientRect, o.matchesSelector = D.matchesSelector, o.closest = D.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, Bt.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var m = 0; m < a.length; m++) {
            var y = a[m];
            this.on(y, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.on(g, a[g], s);
          return this;
        }
        return (0, Gi.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: d }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, Bt.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var m = 0; m < a.length; m++) {
            var y = a[m];
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
        return (0, Gi.default)(a, this.scope.actions) ? a in this.globalEvents && (w = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(w, 1) : this.scope.events.remove(this.scope.document, a, s, d), this;
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
    __name(Wd, "Wd");
    u(Wd, "mn");
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nr, "Nr");
    u(Nr, "bn"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.Interactable = void 0;
    var Ud = function() {
      function n(s, d, m, y) {
        (function(g, w) {
          if (!(g instanceof w))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new Di.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = d.actions, this.target = s, this._context = d.context || m, this._win = (0, e.getWindow)((0, D.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = y, this.set(d);
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, d) {
        return c.default.func(d.onstart) && this.on("".concat(s, "start"), d.onstart), c.default.func(d.onmove) && this.on("".concat(s, "move"), d.onmove), c.default.func(d.onend) && this.on("".concat(s, "end"), d.onend), c.default.func(d.oninertiastart) && this.on("".concat(s, "inertiastart"), d.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, d, m) {
        (c.default.array(d) || c.default.object(d)) && this.off(s, d), (c.default.array(m) || c.default.object(m)) && this.on(s, m);
      } }, { key: "setPerAction", value: function(s, d) {
        var m = this._defaults;
        for (var y in d) {
          var g = y, w = this.options[s], E = d[g];
          g === "listeners" && this.updatePerActionListeners(s, w.listeners, E), c.default.array(E) ? w[g] = we.from(E) : c.default.plainObject(E) ? (w[g] = (0, V.default)(w[g] || {}, (0, vn.default)(E)), c.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (w[g].enabled = E.enabled !== false)) : c.default.bool(E) && c.default.object(m.perAction[g]) ? w[g].enabled = E : w[g] = E;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, D.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var d = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(m) {
          var y = (0, V.default)({}, d._rectChecker(m));
          return "width" in y || (y.width = y.right - y.left, y.height = y.bottom - y.top), y;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, d) {
        if ((0, D.trySelector)(d) || c.default.object(d)) {
          for (var m in this.options[s] = d, this._actions.map)
            this.options[m][s] = d;
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
      } }, { key: "testIgnoreAllow", value: function(s, d, m) {
        return !this.testIgnore(s.ignoreFrom, d, m) && this.testAllow(s.allowFrom, d, m);
      } }, { key: "testAllow", value: function(s, d, m) {
        return !s || !!c.default.element(m) && (c.default.string(s) ? (0, D.matchesUpTo)(m, s, d) : !!c.default.element(s) && (0, D.nodeContains)(s, m));
      } }, { key: "testIgnore", value: function(s, d, m) {
        return !(!s || !c.default.element(m)) && (c.default.string(s) ? (0, D.matchesUpTo)(m, s, d) : !!c.default.element(s) && (0, D.nodeContains)(s, m));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, d, m, y) {
        c.default.object(d) && !c.default.array(d) && (y = m, m = null);
        var g = s === "on" ? "add" : "remove", w = (0, fe.default)(d, m);
        for (var E in w) {
          E === "wheel" && (E = L.default.wheelEvent);
          for (var O = 0; O < w[E].length; O++) {
            var I = w[E][O];
            (0, Gi.default)(E, this._actions) ? this.events[s](E, I) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, E, I, y) : this._scopeEvents[g](this.target, E, I, y);
          }
        }
        return this;
      } }, { key: "on", value: function(s, d, m) {
        return this._onOff("on", s, d, m);
      } }, { key: "off", value: function(s, d, m) {
        return this._onOff("off", s, d, m);
      } }, { key: "set", value: function(s) {
        var d = this._defaults;
        for (var m in c.default.object(s) || (s = {}), this.options = (0, vn.default)(d.base), this._actions.methodDict) {
          var y = m, g = this._actions.methodDict[y];
          this.options[y] = {}, this.setPerAction(y, (0, V.default)((0, V.default)({}, d.perAction), d.actions[y])), this[g](s[y]);
        }
        for (var w in s)
          c.default.func(this[w]) && this[w](s[w]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var d = this._scopeEvents.delegatedEvents[s], m = d.length - 1; m >= 0; m--) {
              var y = d[m], g = y.selector, w = y.context, E = y.listeners;
              g === this.target && w === this._context && d.splice(m, 1);
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
    __name(Vd, "Vd");
    u(Vd, "_n");
    function cs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(cs, "cs");
    u(cs, "Pn"), Object.defineProperty($o, "__esModule", { value: true }), $o.InteractableSet = void 0;
    var Yd = function() {
      function n(s) {
        var d = this;
        (function(m, y) {
          if (!(m instanceof y))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), cs(this, "list", []), cs(this, "selectorMap", {}), cs(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(m) {
          var y = m.interactable, g = y.target, w = y._context, E = c.default.string(g) ? d.selectorMap[g] : g[d.scope.id], O = we.findIndex(E, function(I) {
            return I.context === w;
          });
          E[O] && (E[O].context = null, E[O].interactable = null), E.splice(O, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, d) {
        d = (0, V.default)(d || {}, { actions: this.scope.actions });
        var m = new this.scope.Interactable(s, d, this.scope.document, this.scope.events), y = { context: m._context, interactable: m };
        return this.scope.addDocument(m._doc), this.list.push(m), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(y)) : (m.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(y)), this.scope.fire("interactable:new", { target: s, options: d, interactable: m, win: this.scope._win }), m;
      } }, { key: "get", value: function(s, d) {
        var m = d && d.context || this.scope.document, y = c.default.string(s), g = y ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var w = we.find(g, function(E) {
          return E.context === m && (y || E.interactable.inContext(s));
        });
        return w && w.interactable;
      } }, { key: "forEachMatch", value: function(s, d) {
        for (var m = 0; m < this.list.length; m++) {
          var y = this.list[m], g = void 0;
          if ((c.default.string(y.target) ? c.default.element(s) && D.matchesSelector(s, y.target) : s === y.target) && y.inContext(s) && (g = d(y)), g !== void 0)
            return g;
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
    __name(Xd, "Xd");
    u(Xd, "En");
    function ps(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ps, "ps");
    u(ps, "Tn");
    function ds(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], m = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(m = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); m = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              m || E.return == null || E.return();
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
            return iu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? iu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ds, "ds");
    u(ds, "Mn");
    function iu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(iu, "iu");
    u(iu, "jn"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.default = void 0;
    var Zd = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ps(this, "currentTarget", void 0), ps(this, "originalEvent", void 0), ps(this, "type", void 0), this.originalEvent = s, (0, Nt.default)(this, s);
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
      } }]) && Xd(o.prototype, a), n;
    }();
    function qi(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, V.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(qi, "qi");
    u(qi, "In");
    var Kd = { id: "events", install: function(n) {
      var o, a = [], s = {}, d = [], m = { add: y, remove: g, addDelegate: function(O, I, G, q, R) {
        var $ = qi(R);
        if (!s[G]) {
          s[G] = [];
          for (var J = 0; J < d.length; J++) {
            var F = d[J];
            y(F, G, w), y(F, G, E, true);
          }
        }
        var ne = s[G], le = we.find(ne, function(pe) {
          return pe.selector === O && pe.context === I;
        });
        le || (le = { selector: O, context: I, listeners: [] }, ne.push(le)), le.listeners.push([q, $]);
      }, removeDelegate: function(O, I, G, q, R) {
        var $, J = qi(R), F = s[G], ne = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === O && le.context === I) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = ds(pe[Ee], 2), be = je[0], _e = je[1], Zt = _e.capture, qr = _e.passive;
                if (be === q && Zt === J.capture && qr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), g(I, G, w), g(I, G, E, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: w, delegateUseCapture: E, delegatedEvents: s, documents: d, targets: a, supportsOptions: false, supportsPassive: false };
      function y(O, I, G, q) {
        var R = qi(q), $ = we.find(a, function(J) {
          return J.eventTarget === O;
        });
        $ || ($ = { eventTarget: O, events: {} }, a.push($)), $.events[I] || ($.events[I] = []), O.addEventListener && !we.contains($.events[I], G) && (O.addEventListener(I, G, m.supportsOptions ? R : R.capture), $.events[I].push(G));
      }
      __name(y, "y");
      u(y, "s");
      function g(O, I, G, q) {
        var R = qi(q), $ = we.findIndex(a, function(Ee) {
          return Ee.eventTarget === O;
        }), J = a[$];
        if (J && J.events)
          if (I !== "all") {
            var F = false, ne = J.events[I];
            if (ne) {
              if (G === "all") {
                for (var le = ne.length - 1; le >= 0; le--)
                  g(O, I, ne[le], R);
                return;
              }
              for (var pe = 0; pe < ne.length; pe++)
                if (ne[pe] === G) {
                  O.removeEventListener(I, G, m.supportsOptions ? R : R.capture), ne.splice(pe, 1), ne.length === 0 && (delete J.events[I], F = true);
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
        for (var G = qi(I), q = new Zd(O), R = s[O.type], $ = ds(Q.getEventTargets(O), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < R.length; F++) {
            var ne = R[F], le = ne.selector, pe = ne.context;
            if (D.matchesSelector(J, le) && D.nodeContains(pe, $) && D.nodeContains(pe, J)) {
              var Ee = ne.listeners;
              q.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = ds(Ee[je], 2), _e = be[0], Zt = be[1], qr = Zt.capture, Ts = Zt.passive;
                qr === G.capture && Ts === G.passive && _e(q);
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
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), n.events = m, m;
    } };
    Fo.default = Kd;
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
      for (var m = 0; m < d.interactions.list.length; m++) {
        var y = d.interactions.list[m], g = s;
        if (y.simulation && y.simulation.allowResume && y.pointerType === o)
          for (; g; ) {
            if (g === y.element)
              return y;
            g = D.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, d = n.eventType, m = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var y = 0; y < m.interactions.list.length; y++) {
        var g = m.interactions.list[y];
        if (g.pointerType === s) {
          if (g.simulation && !ou(g, a))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
        }
      }
      if (o)
        return o;
      for (var w = 0; w < m.interactions.list.length; w++) {
        var E = m.interactions.list[w];
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
          var m = d.interactable;
          if (m && (!m.options.gesture || !m.options.gesture.enabled))
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
    __name(ou, "ou");
    u(ou, "zn");
    var Jd = Uo;
    Wo.default = Jd;
    var Vo = {};
    function au(n) {
      return (au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(au, "au");
    u(au, "Xn");
    function su(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var d = [], m = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(m = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); m = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              m || E.return == null || E.return();
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
            return lu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? lu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(su, "su");
    u(su, "Yn");
    function lu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(lu, "lu");
    u(lu, "Bn");
    function Qd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Qd, "Qd");
    u(Qd, "Wn");
    function ef(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(ef, "ef");
    u(ef, "Ln");
    function uu(n, o) {
      return (uu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(uu, "uu");
    u(uu, "Un");
    function tf(n, o) {
      return !o || au(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(tf, "tf");
    u(tf, "Vn");
    function fs(n) {
      return (fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(fs, "fs");
    u(fs, "Nn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var hs = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function cu(n, o) {
      return function(a) {
        var s = o.interactions.list, d = Q.getPointerType(a), m = su(Q.getEventTargets(a), 2), y = m[0], g = m[1], w = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var E = 0; E < a.changedTouches.length; E++) {
            var O = a.changedTouches[E], I = { pointer: O, pointerId: Q.getPointerId(O), pointerType: d, eventType: a.type, eventTarget: y, curEventTarget: g, scope: o }, G = pu(I);
            w.push([I.pointer, I.eventTarget, I.curEventTarget, G]);
          }
        } else {
          var q = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var R = 0; R < s.length && !q; R++)
              q = s[R].pointerType !== "mouse" && s[R].pointerIsDown;
            q = q || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!q) {
            var $ = { pointer: a, pointerId: Q.getPointerId(a), pointerType: d, eventType: a.type, curEventTarget: g, eventTarget: y, scope: o }, J = pu($);
            w.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < w.length; F++) {
          var ne = su(w[F], 4), le = ne[0], pe = ne[1], Ee = ne[2];
          ne[3][n](le, a, pe, Ee);
        }
      };
    }
    __name(cu, "cu");
    u(cu, "$n");
    function pu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Wo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(pu, "pu");
    u(pu, "Gn");
    function vs(n, o) {
      var a = n.doc, s = n.scope, d = n.options, m = s.interactions.docEvents, y = s.events, g = y[o];
      for (var w in s.browser.isIOS && !d.events && (d.events = { passive: false }), y.delegatedEvents)
        g(a, w, y.delegateListener), g(a, w, y.delegateUseCapture, true);
      for (var E = d && d.events, O = 0; O < m.length; O++) {
        var I = m[O];
        g(a, I.type, I.listener, E);
      }
    }
    __name(vs, "vs");
    u(vs, "Hn");
    var rf = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < hs.length; a++) {
        var s = hs[a];
        o[s] = cu(s, n);
      }
      var d, m = L.default.pEventTypes;
      function y() {
        for (var g = 0; g < n.interactions.list.length; g++) {
          var w = n.interactions.list[g];
          if (w.pointerIsDown && w.pointerType === "touch" && !w._interacting)
            for (var E = function() {
              var I = w.pointers[O];
              n.documents.some(function(G) {
                var q = G.doc;
                return (0, D.nodeContains)(q, I.downTarget);
              }) || w.removePointer(I.pointer, I.event);
            }, O = 0; O < w.pointers.length; O++)
              E();
        }
      }
      __name(y, "y");
      u(y, "a"), (d = C.default.PointerEvent ? [{ type: m.down, listener: y }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: y }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var w = 0; w < n.interactions.list.length; w++)
          n.interactions.list[w].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(R, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create($ && $.prototype, { constructor: { value: R, writable: true, configurable: true } }), $ && uu(R, $);
        })(q, g);
        var w, E, O, I, G = (O = q, I = function() {
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
          var R, $ = fs(O);
          if (I) {
            var J = fs(this).constructor;
            R = Reflect.construct($, arguments, J);
          } else
            R = $.apply(this, arguments);
          return tf(this, R);
        });
        function q() {
          return Qd(this, q), G.apply(this, arguments);
        }
        __name(q, "q");
        return u(q, "s"), w = q, (E = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(R) {
          n.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && ef(w.prototype, E), q;
      }(zt.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(E, O) {
          return n.fire(E, O);
        };
        var w = new n.Interaction(g);
        return n.interactions.list.push(w), w;
      }, listeners: o, docEvents: d, pointerMoveTolerance: 1 }, n.usePlugin(Zn.default);
    }, listeners: { "scope:add-document": function(n) {
      return vs(n, "add");
    }, "scope:remove-document": function(n) {
      return vs(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var d = o.interactions.list[s];
        d.interactable === a && (d.stop(), o.fire("interactions:destroy", { interaction: d }), d.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: vs, doOnInteractions: cu, methodNames: hs };
    Vo.default = rf;
    var Li = {};
    function du(n) {
      return (du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(du, "du");
    u(du, "Jn");
    function ms(n, o, a) {
      return (ms = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, d, m) {
        var y = function(w, E) {
          for (; !Object.prototype.hasOwnProperty.call(w, E) && (w = Jn(w)) !== null; )
            ;
          return w;
        }(s, d);
        if (y) {
          var g = Object.getOwnPropertyDescriptor(y, d);
          return g.get ? g.get.call(m) : g.value;
        }
      })(n, o, a || n);
    }
    __name(ms, "ms");
    u(ms, "Qn");
    function fu(n, o) {
      return (fu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(fu, "fu");
    u(fu, "tr");
    function nf(n, o) {
      return !o || du(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    __name(nf, "nf");
    u(nf, "er");
    function Jn(n) {
      return (Jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Jn, "Jn");
    u(Jn, "nr");
    function hu(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(hu, "hu");
    u(hu, "rr");
    function vu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(vu, "vu");
    u(vu, "or");
    function mu(n, o, a) {
      return o && vu(n.prototype, o), a && vu(n, a), n;
    }
    __name(mu, "mu");
    u(mu, "ir");
    function gt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(gt, "gt");
    u(gt, "ar"), Object.defineProperty(Li, "__esModule", { value: true }), Li.initScope = gu, Li.Scope = void 0;
    var of = function() {
      function n() {
        var o = this;
        hu(this, n), gt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), gt(this, "isInitialized", false), gt(this, "listenerMaps", []), gt(this, "browser", L.default), gt(this, "defaults", (0, vn.default)(_i.defaults)), gt(this, "Eventable", Di.Eventable), gt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), gt(this, "interactStatic", (0, us.createInteractStatic)(this)), gt(this, "InteractEvent", ki.InteractEvent), gt(this, "Interactable", void 0), gt(this, "interactables", new $o.InteractableSet(this)), gt(this, "_win", void 0), gt(this, "document", void 0), gt(this, "window", void 0), gt(this, "documents", []), gt(this, "_plugins", { list: [], map: {} }), gt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(w, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function");
            w.prototype = Object.create(E && E.prototype, { constructor: { value: w, writable: true, configurable: true } }), E && fu(w, E);
          })(g, s);
          var d, m, y = (d = g, m = function() {
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
            var w, E = Jn(d);
            if (m) {
              var O = Jn(this).constructor;
              w = Reflect.construct(E, arguments, O);
            } else
              w = E.apply(this, arguments);
            return nf(this, w);
          });
          function g() {
            return hu(this, g), y.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), mu(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(w) {
            return ms(Jn(g.prototype), "set", this).call(this, w), a.fire("interactable:set", { options: w, interactable: this }), this;
          } }, { key: "unset", value: function() {
            ms(Jn(g.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), g;
        }(Ho.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), mu(n, [{ key: "addListeners", value: function(o, a) {
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
          for (var s = 0, d = this.listenerMaps.length, m = o.before.reduce(function(g, w) {
            return g[w] = true, g[bu(w)] = true, g;
          }, {}); s < d; s++) {
            var y = this.listenerMaps[s].id;
            if (m[y] || m[bu(y)])
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
        a = a ? (0, V.default)({}, a) : {}, this.documents.push({ doc: o, options: a }), this.events.documents.push(o), o !== this.document && this.events.add(s, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: s, scope: this, options: a });
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
      return n.isInitialized = true, c.default.window(o) && e.init(o), C.default.init(o), L.default.init(o), Lt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Vo.default), n.usePlugin(Fo.default), n;
    }
    __name(gu, "gu");
    u(gu, "lr");
    function bu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(bu, "bu");
    u(bu, "ur"), Li.Scope = of;
    var Et = {};
    Object.defineProperty(Et, "__esModule", { value: true }), Et.default = void 0;
    var yu = new Li.Scope(), af = yu.interactStatic;
    Et.default = af;
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
          var d = [], m = true, y = false, g = void 0;
          try {
            for (var w, E = a[Symbol.iterator](); !(m = (w = E.next()).done) && (d.push(w.value), !s || d.length !== s); m = true)
              ;
          } catch (O) {
            y = true, g = O;
          } finally {
            try {
              m || E.return == null || E.return();
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
            return xu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? xu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(wu, "wu");
    u(wu, "yr");
    function xu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(xu, "xu");
    u(xu, "mr"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0, Zo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var d = wu(s, 2), m = d[0], y = d[1];
        return m in n || y in n;
      }), a = u(function(s, d) {
        for (var m = n.range, y = n.limits, g = y === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : y, w = n.offset, E = w === void 0 ? { x: 0, y: 0 } : w, O = { range: m, grid: n, x: null, y: null }, I = 0; I < o.length; I++) {
          var G = wu(o[I], 2), q = G[0], R = G[1], $ = Math.round((s - E.x) / n[q]), J = Math.round((d - E.y) / n[R]);
          O[q] = Math.max(g.left, Math.min(g.right, $ * n[q] + E.x)), O[R] = Math.max(g.top, Math.min(g.bottom, J * n[R] + E.y));
        }
        return O;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var ji = {};
    Object.defineProperty(ji, "__esModule", { value: true }), Object.defineProperty(ji, "edgeTarget", { enumerable: true, get: function() {
      return Yo.default;
    } }), Object.defineProperty(ji, "elements", { enumerable: true, get: function() {
      return Xo.default;
    } }), Object.defineProperty(ji, "grid", { enumerable: true, get: function() {
      return Zo.default;
    } });
    var Ko = {};
    Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var lf = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, V.default)(o.snappers || {}, ji), o.createSnapGrid = o.snappers.grid;
    } };
    Ko.default = lf;
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
    __name(Eu, "Eu");
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
    __name(gs, "gs");
    u(gs, "Or");
    function uf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(uf, "uf");
    u(uf, "Sr"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.aspectRatio = Qn.default = void 0;
    var Su = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, d = n.pageCoords, m = o.options.ratio, y = o.options, g = y.equalDelta, w = y.modifiers;
      m === "preserve" && (m = a.width / a.height), o.startCoords = (0, V.default)({}, d), o.startRect = (0, V.default)({}, a), o.ratio = m, o.equalDelta = g;
      var E = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (E.left ? 1 : -1) * (E.top ? 1 : -1);
      else {
        var O = o.xIsPrimaryAxis ? E.top : E.left;
        o.edgeSign = O ? -1 : 1;
      }
      if ((0, V.default)(n.edges, E), w && w.length) {
        var I = new mn.default(n.interaction);
        I.copyFrom(n.interaction.modification), I.prepareStates(w), o.subModification = I, I.startAll(gs({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, d = (0, V.default)({}, s), m = o.equalDelta ? cf : pf;
      if (m(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var y = (0, V.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, y, { x: s.x - d.x, y: s.y - d.y });
      var g = o.subModification.setAll(gs(gs({}, n), {}, { rect: y, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: y })), w = g.delta;
      return g.changed && (m(o, Math.abs(w.x) > Math.abs(w.y), g.coords, g.rect), (0, V.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function cf(n, o, a) {
      var s = n.startCoords, d = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * d : a.x = s.x + (a.y - s.y) * d;
    }
    __name(cf, "cf");
    u(cf, "Tr");
    function pf(n, o, a, s) {
      var d = n.startRect, m = n.startCoords, y = n.ratio, g = n.edgeSign;
      if (o) {
        var w = s.width / y;
        a.y = m.y + (w - d.height) * g;
      } else {
        var E = s.height * y;
        a.x = m.x + (E - d.width) * g;
      }
    }
    __name(pf, "pf");
    u(pf, "Mr"), Qn.aspectRatio = Su;
    var df = (0, mt.makeModifier)(Su, "aspectRatio");
    Qn.default = df;
    var yn = {};
    Object.defineProperty(yn, "__esModule", { value: true }), yn.default = void 0;
    var Cu = u(function() {
    }, "Ir");
    Cu._defaults = {};
    var ff = Cu;
    yn.default = ff;
    var bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), Object.defineProperty(bs, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var Mt = {};
    function ys(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    __name(ys, "ys");
    u(ys, "zr"), Object.defineProperty(Mt, "__esModule", { value: true }), Mt.getRestrictionRect = ys, Mt.restrict = Mt.default = void 0;
    var Tu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, d = n.interaction, m = n.pageCoords, y = s.options, g = y.elementRect, w = (0, V.default)({ left: 0, top: 0, right: 0, bottom: 0 }, y.offset || {});
      if (o && g) {
        var E = ys(y.restriction, d, m);
        if (E) {
          var O = E.right - E.left - o.width, I = E.bottom - E.top - o.height;
          O < 0 && (w.left += O, w.right += O), I < 0 && (w.top += I, w.bottom += I);
        }
        w.left += a.left - o.width * g.left, w.top += a.top - o.height * g.top, w.right += a.right - o.width * (1 - g.right), w.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = w;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, d = s.options, m = s.offset, y = ys(d.restriction, a, o);
      if (y) {
        var g = ce.xywhToTlbr(y);
        o.x = Math.max(Math.min(g.right - m.right, o.x), g.left + m.left), o.y = Math.max(Math.min(g.bottom - m.bottom, o.y), g.top + m.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Mt.restrict = Tu;
    var hf = (0, mt.makeModifier)(Tu, "restrict");
    Mt.default = hf;
    var Cr = {};
    Object.defineProperty(Cr, "__esModule", { value: true }), Cr.restrictEdges = Cr.default = void 0;
    var Ou = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Mu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Pu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var d = a[s];
        d in n || (n[d] = o[d]);
      }
      return n;
    }
    __name(Pu, "Pu");
    u(Pu, "Wr");
    var Iu = { noInner: Ou, noOuter: Mu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, d = n.state, m = d.options;
      if (m) {
        var y = (0, Mt.getRestrictionRect)(m.offset, a, a.coords.start.page);
        o = ce.rectToXY(y);
      }
      o = o || { x: 0, y: 0 }, d.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, d = n.state, m = d.offset, y = d.options;
      if (a) {
        var g = (0, V.default)({}, o), w = (0, Mt.getRestrictionRect)(y.inner, s, g) || {}, E = (0, Mt.getRestrictionRect)(y.outer, s, g) || {};
        Pu(w, Ou), Pu(E, Mu), a.top ? o.y = Math.min(Math.max(E.top + m.top, g.y), w.top + m.top) : a.bottom && (o.y = Math.max(Math.min(E.bottom + m.bottom, g.y), w.bottom + m.bottom)), a.left ? o.x = Math.min(Math.max(E.left + m.left, g.x), w.left + m.left) : a.right && (o.x = Math.max(Math.min(E.right + m.right, g.x), w.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Cr.restrictEdges = Iu;
    var vf = (0, mt.makeModifier)(Iu, "restrictEdges");
    Cr.default = vf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictRect = ei.default = void 0;
    var mf = (0, V.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Mt.restrict.defaults), Au = { start: Mt.restrict.start, set: Mt.restrict.set, defaults: mf };
    ei.restrictRect = Au;
    var gf = (0, mt.makeModifier)(Au, "restrictRect");
    ei.default = gf;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictSize = ti.default = void 0;
    var bf = { width: -1 / 0, height: -1 / 0 }, yf = { width: 1 / 0, height: 1 / 0 }, _u = { start: function(n) {
      return Cr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, d = n.edges, m = a.options;
      if (d) {
        var y = ce.tlbrToXywh((0, Mt.getRestrictionRect)(m.min, o, n.coords)) || bf, g = ce.tlbrToXywh((0, Mt.getRestrictionRect)(m.max, o, n.coords)) || yf;
        a.options = { endOnly: m.endOnly, inner: (0, V.default)({}, Cr.restrictEdges.noInner), outer: (0, V.default)({}, Cr.restrictEdges.noOuter) }, d.top ? (a.options.inner.top = s.bottom - y.height, a.options.outer.top = s.bottom - g.height) : d.bottom && (a.options.inner.bottom = s.top + y.height, a.options.outer.bottom = s.top + g.height), d.left ? (a.options.inner.left = s.right - y.width, a.options.outer.left = s.right - g.width) : d.right && (a.options.inner.right = s.left + y.width, a.options.outer.right = s.left + g.width), Cr.restrictEdges.set(n), a.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ti.restrictSize = _u;
    var wf = (0, mt.makeModifier)(_u, "restrictSize");
    ti.default = wf;
    var ws = {};
    Object.defineProperty(ws, "__esModule", { value: true }), Object.defineProperty(ws, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: true }), Jr.snap = Jr.default = void 0;
    var ku = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, d = n.element, m = n.rect, y = n.state, g = n.startOffset, w = y.options, E = w.offsetWithOrigin ? function(G) {
        var q = G.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(G.state.options.origin, null, null, [q])) || (0, qe.default)(G.interactable, q, G.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (w.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var O = (0, ce.resolveRectLike)(w.offset, s, d, [a]);
        (o = (0, ce.rectToXY)(O) || { x: 0, y: 0 }).x += E.x, o.y += E.y;
      }
      var I = w.relativePoints;
      y.offsets = m && I && I.length ? I.map(function(G, q) {
        return { index: q, relativePoint: G, x: g.left - m.width * G.x + o.x, y: g.top - m.height * G.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, d = s.options, m = s.offsets, y = (0, qe.default)(o.interactable, o.element, o.prepared.name), g = (0, V.default)({}, a), w = [];
      d.offsetWithOrigin || (g.x -= y.x, g.y -= y.y);
      for (var E = 0; E < m.length; E++)
        for (var O = m[E], I = g.x - O.x, G = g.y - O.y, q = 0, R = d.targets.length; q < R; q++) {
          var $, J = d.targets[q];
          ($ = c.default.func(J) ? J(I, G, o._proxy, O, q) : J) && w.push({ x: (c.default.number($.x) ? $.x : I) + O.x, y: (c.default.number($.y) ? $.y : G) + O.y, range: c.default.number($.range) ? $.range : d.range, source: J, index: q, offset: O });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < w.length; ne++) {
        var le = w[ne], pe = le.range, Ee = le.x - g.x, je = le.y - g.y, be = (0, Qe.default)(Ee, je), _e = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (_e = false), F.target && !(_e ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = _e, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Jr.snap = ku;
    var xf = (0, mt.makeModifier)(ku, "snap");
    Jr.default = xf;
    var Gr = {};
    function zu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(zu, "zu");
    u(zu, "oo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var Ru = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Jr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, d = n.state, m = n.coords, y = d.options, g = d.offsets, w = { x: m.x - g[0].x, y: m.y - g[0].y };
      d.options = (0, V.default)({}, y), d.options.targets = [];
      for (var E = 0; E < (y.targets || []).length; E++) {
        var O = (y.targets || [])[E], I = void 0;
        if (I = c.default.func(O) ? O(w.x, w.y, s) : O) {
          for (var G = 0; G < d.targetFields.length; G++) {
            var q = (o = d.targetFields[G], a = 2, function(F) {
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
                  return zu(F, ne);
                var le = Object.prototype.toString.call(F).slice(8, -1);
                return le === "Object" && F.constructor && (le = F.constructor.name), le === "Map" || le === "Set" ? Array.from(F) : le === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le) ? zu(F, ne) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = q[0], $ = q[1];
            if (R in I || $ in I) {
              I.x = I[R], I.y = I[$];
              break;
            }
          }
          d.options.targets.push(I);
        }
      }
      var J = Jr.snap.set(n);
      return d.options = y, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = Ru;
    var Ef = (0, mt.makeModifier)(Ru, "snapSize");
    Gr.default = Ef;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.snapEdges = ri.default = void 0;
    var Du = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, V.default)((0, vn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ri.snapEdges = Du;
    var Sf = (0, mt.makeModifier)(Du, "snapEdges");
    ri.default = Sf;
    var xs = {};
    Object.defineProperty(xs, "__esModule", { value: true }), Object.defineProperty(xs, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var Es = {};
    Object.defineProperty(Es, "__esModule", { value: true }), Object.defineProperty(Es, "default", { enumerable: true, get: function() {
      return yn.default;
    } });
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.default = void 0;
    var Cf = { aspectRatio: Qn.default, restrictEdges: Cr.default, restrict: Mt.default, restrictRect: ei.default, restrictSize: ti.default, snapEdges: ri.default, snap: Jr.default, snapSize: Gr.default, spring: xs.default, avoid: bs.default, transform: Es.default, rubberband: ws.default };
    ni.default = Cf;
    var Jo = {};
    Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var Tf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(mt.default), n.usePlugin(Ko.default), o.modifiers = ni.default, ni.default) {
        var s = ni.default[a], d = s._defaults, m = s._methods;
        d._methods = m, n.defaults.perAction[a] = d;
      }
    } };
    Jo.default = Tf;
    var wn = {};
    function Nu(n) {
      return (Nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Nu, "Nu");
    u(Nu, "mo");
    function Of(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Of, "Of");
    u(Of, "bo");
    function Gu(n, o) {
      return (Gu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    __name(Gu, "Gu");
    u(Gu, "xo");
    function Mf(n, o) {
      return !o || Nu(o) !== "object" && typeof o != "function" ? Rt(n) : o;
    }
    __name(Mf, "Mf");
    u(Mf, "wo");
    function Rt(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Rt, "Rt");
    u(Rt, "_o");
    function Ss(n) {
      return (Ss = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    __name(Ss, "Ss");
    u(Ss, "Po");
    function br(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(br, "br");
    u(br, "Oo"), Object.defineProperty(wn, "__esModule", { value: true }), wn.PointerEvent = wn.default = void 0;
    var Pf = function(n) {
      (function(g, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(w && w.prototype, { constructor: { value: g, writable: true, configurable: true } }), w && Gu(g, w);
      })(y, n);
      var o, a, s, d, m = (s = y, d = function() {
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
        var g, w = Ss(s);
        if (d) {
          var E = Ss(this).constructor;
          g = Reflect.construct(w, arguments, E);
        } else
          g = w.apply(this, arguments);
        return Mf(this, g);
      });
      function y(g, w, E, O, I, G) {
        var q;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, y), br(Rt(q = m.call(this, I)), "type", void 0), br(Rt(q), "originalEvent", void 0), br(Rt(q), "pointerId", void 0), br(Rt(q), "pointerType", void 0), br(Rt(q), "double", void 0), br(Rt(q), "pageX", void 0), br(Rt(q), "pageY", void 0), br(Rt(q), "clientX", void 0), br(Rt(q), "clientY", void 0), br(Rt(q), "dt", void 0), br(Rt(q), "eventable", void 0), Q.pointerExtend(Rt(q), E), E !== w && Q.pointerExtend(Rt(q), w), q.timeStamp = G, q.originalEvent = E, q.type = g, q.pointerId = Q.getPointerId(w), q.pointerType = Q.getPointerType(w), q.target = O, q.currentTarget = null, g === "tap") {
          var R = I.getPointerIndex(w);
          q.dt = q.timeStamp - I.pointers[R].downTime;
          var $ = q.timeStamp - I.tapTime;
          q.double = !!(I.prevTap && I.prevTap.type !== "doubletap" && I.prevTap.target === q.target && $ < 500);
        } else
          g === "doubletap" && (q.dt = w.timeStamp - I.tapTime);
        return q;
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
      } }]) && Of(o.prototype, a), y;
    }(Gt.BaseEvent);
    wn.PointerEvent = wn.default = Pf;
    var Bi = {};
    Object.defineProperty(Bi, "__esModule", { value: true }), Bi.default = void 0;
    var Qo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Qo, n.defaults.actions.pointerEvents = Qo.defaults, (0, V.default)(n.actions.phaselessTypes, Qo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && Cs(n), Qr({ interaction: a, pointer: s, event: d, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var d = a.interaction, m = a.pointer, y = a.event, g = a.eventTarget, w = a.pointerIndex, E = d.pointers[w].hold, O = D.getPath(g), I = { interaction: d, pointer: m, event: y, eventTarget: g, type: "hold", targets: [], path: O, node: null }, G = 0; G < O.length; G++) {
          var q = O[G];
          I.node = q, s.fire("pointerEvents:collect-targets", I);
        }
        if (I.targets.length) {
          for (var R = 1 / 0, $ = 0; $ < I.targets.length; $++) {
            var J = I.targets[$].eventable.options.holdDuration;
            J < R && (R = J);
          }
          E.duration = R, E.timeout = setTimeout(function() {
            Qr({ interaction: d, eventTarget: g, pointer: m, event: y, type: "hold" }, s);
          }, R);
        }
      })(n, o), Qr(n, o);
    }, "interactions:up": function(n, o) {
      Cs(n), Qr(n, o), function(a, s) {
        var d = a.interaction, m = a.pointer, y = a.event, g = a.eventTarget;
        d.pointerWasMoved || Qr({ interaction: d, eventTarget: g, pointer: m, event: y, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      Cs(n), Qr(n, o);
    } }, PointerEvent: wn.PointerEvent, fire: Qr, collectEventTargets: qu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Qr(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget, y = n.type, g = n.targets, w = g === void 0 ? qu(n, o) : g, E = new wn.PointerEvent(y, s, d, m, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: E });
      for (var O = { interaction: a, pointer: s, event: d, eventTarget: m, targets: w, type: y, pointerEvent: E }, I = 0; I < w.length; I++) {
        var G = w[I];
        for (var q in G.props || {})
          E[q] = G.props[q];
        var R = (0, qe.default)(G.eventable, G.node);
        if (E._subtractOrigin(R), E.eventable = G.eventable, E.currentTarget = G.node, G.eventable.fire(E), E._addOrigin(R), E.immediatePropagationStopped || E.propagationStopped && I + 1 < w.length && w[I + 1].node !== E.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", O), y === "tap") {
        var $ = E.double ? Qr({ interaction: a, pointer: s, event: d, eventTarget: m, type: "doubletap" }, o) : E;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return E;
    }
    __name(Qr, "Qr");
    u(Qr, "Mo");
    function qu(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget, y = n.type, g = a.getPointerIndex(s), w = a.pointers[g];
      if (y === "tap" && (a.pointerWasMoved || !w || w.downTarget !== m))
        return [];
      for (var E = D.getPath(m), O = { interaction: a, pointer: s, event: d, eventTarget: m, type: y, path: E, targets: [], node: null }, I = 0; I < E.length; I++) {
        var G = E[I];
        O.node = G, o.fire("pointerEvents:collect-targets", O);
      }
      return y === "hold" && (O.targets = O.targets.filter(function(q) {
        var R;
        return q.eventable.options.holdDuration === ((R = a.pointers[g]) == null ? void 0 : R.hold.duration);
      })), O.targets;
    }
    __name(qu, "qu");
    u(qu, "jo");
    function Cs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(Cs, "Cs");
    u(Cs, "ko");
    var If = Qo;
    Bi.default = If;
    var ea = {};
    function Af(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Af, "Af");
    u(Af, "Ao"), Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0;
    var _f = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Bi.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = Af, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, d = n.eventTarget, m = n.targets;
      if (s.type === "hold" && m.length) {
        var y = m[0].eventable.options.holdRepeatInterval;
        y <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: d, type: "hold", pointer: s, event: s }, o);
        }, y));
      }
    } }) };
    ea.default = _f;
    var ta = {};
    function kf(n) {
      return (0, V.default)(this.events.options, n), this;
    }
    __name(kf, "kf");
    u(kf, "Co"), Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0;
    var zf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = kf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, d) {
        var m = a.call(this, s, d);
        return m === this && (this.events.options[s] = d), m;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, d = n.type, m = n.eventTarget;
      o.interactables.forEachMatch(s, function(y) {
        var g = y.events, w = g.options;
        g.types[d] && g.types[d].length && y.testIgnoreAllow(w, s, m) && a.push({ node: s, eventable: g, props: { interactable: y } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, V.default)(a.events.options, o.pointerEvents.defaults), (0, V.default)(a.events.options, s.pointerEvents || {});
    } } };
    ta.default = zf;
    var ra = {};
    Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0;
    var Rf = { id: "pointer-events", install: function(n) {
      n.usePlugin(Bi), n.usePlugin(ea.default), n.usePlugin(ta.default);
    } };
    ra.default = Rf;
    var Hi = {};
    function Lu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, d, m) {
          for (var y = c.default.string(s.target) ? we.from(s._context.querySelectorAll(s.target)) : [s.target], g = m.window.Promise, w = g ? [] : null, E = function() {
            var I = y[O], G = s.getRect(I);
            if (!G)
              return "break";
            var q = we.find(m.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === s && ne.element === I && ne.prepared.name === d.name;
            }), R = void 0;
            if (q)
              q.move(), w && (R = q._reflowPromise || new g(function(ne) {
                q._reflowResolve = ne;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(G), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: m.now() }, F = Q.coordsToEvent(J);
              R = function(ne, le, pe, Ee, je) {
                var be = ne.interactions.new({ pointerType: "reflow" }), _e = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), Q.setZeroCoords(be.coords.delta), (0, Bt.copyAction)(be.prepared, Ee), be._doPhase(_e);
                var Zt = ne.window.Promise, qr = Zt ? new Zt(function(Ts) {
                  be._reflowResolve = Ts;
                }) : void 0;
                return be._reflowPromise = qr, be.start(Ee, le, pe), be._interacting ? (be.move(_e), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), qr;
              }(m, s, I, d, F);
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
    __name(Lu, "Lu");
    u(Lu, "Wo"), Object.defineProperty(Hi, "__esModule", { value: true }), Hi.install = Lu, Hi.default = void 0;
    var Df = { id: "reflow", install: Lu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), we.remove(o.interactions.list, a));
    } } };
    Hi.default = Df;
    var Xt = { exports: {} };
    function ju(n) {
      return (ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(ju, "ju");
    u(ju, "Vo"), Object.defineProperty(Xt.exports, "__esModule", { value: true }), Xt.exports.default = void 0, Et.default.use(Zn.default), Et.default.use(bn.default), Et.default.use(ra.default), Et.default.use(Kn.default), Et.default.use(Jo.default), Et.default.use(No.default), Et.default.use(Dr.default), Et.default.use(Kr.default), Et.default.use(Hi.default);
    var Nf = Et.default;
    if (Xt.exports.default = Nf, ju(Xt) === "object" && Xt)
      try {
        Xt.exports = Et.default;
      } catch (n) {
      }
    Et.default.default = Et.default, Xt = Xt.exports;
    var xn = { exports: {} };
    function Bu(n) {
      return (Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    __name(Bu, "Bu");
    u(Bu, "$o"), Object.defineProperty(xn.exports, "__esModule", { value: true }), xn.exports.default = void 0;
    var Gf = Xt.default;
    if (xn.exports.default = Gf, Bu(xn) === "object" && xn)
      try {
        xn.exports = Xt.default;
      } catch (n) {
      }
    return Xt.default.default = Xt.default, xn.exports;
  });
});
var ld = na((sd, zl) => {
  (function(r) {
    "use strict";
    var e = /* @__PURE__ */ __name(function() {
    }, "e"), t = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(p) {
      return setTimeout(p, 16);
    };
    function i() {
      var p = this;
      p.reads = [], p.writes = [], p.raf = t.bind(r), e("initialized", p);
    }
    __name(i, "i");
    u(i, "FastDom"), i.prototype = { constructor: i, runTasks: function(p) {
      e("run tasks");
      for (var v; v = p.shift(); )
        v();
    }, measure: function(p, v) {
      e("measure");
      var x = v ? p.bind(v) : p;
      return this.reads.push(x), l(this), x;
    }, mutate: function(p, v) {
      e("mutate");
      var x = v ? p.bind(v) : p;
      return this.writes.push(x), l(this), x;
    }, clear: function(p) {
      return e("clear", p), f(this.reads, p) || f(this.writes, p);
    }, extend: function(p) {
      if (e("extend", p), typeof p != "object")
        throw new Error("expected object");
      var v = Object.create(this);
      return b(v, p), v.fastdom = this, v.initialize && v.initialize(), v;
    }, catch: null };
    function l(p) {
      p.scheduled || (p.scheduled = true, p.raf(c.bind(null, p)), e("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(p) {
      e("flush");
      var v = p.writes, x = p.reads, S;
      try {
        e("flushing reads", x.length), p.runTasks(x), e("flushing writes", v.length), p.runTasks(v);
      } catch (M) {
        S = M;
      }
      if (p.scheduled = false, (x.length || v.length) && l(p), S)
        if (e("task errored", S.message), p.catch)
          p.catch(S);
        else
          throw S;
    }
    __name(c, "c");
    u(c, "flush");
    function f(p, v) {
      var x = p.indexOf(v);
      return !!~x && !!p.splice(x, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function b(p, v) {
      for (var x in v)
        v.hasOwnProperty(x) && (p[x] = v[x]);
    }
    __name(b, "b");
    u(b, "mixin");
    var h = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return h;
    }) : typeof zl == "object" && (zl.exports = h);
  })(typeof window != "undefined" ? window : sd);
});
var dd = na((Dl, pd) => {
  (function(r) {
    "use strict";
    var e = Math.cosh || function(p) {
      return Math.abs(p) < 1e-9 ? 1 - p : (Math.exp(p) + Math.exp(-p)) * 0.5;
    }, t = Math.sinh || function(p) {
      return Math.abs(p) < 1e-9 ? p : (Math.exp(p) - Math.exp(-p)) * 0.5;
    }, i = u(function(p) {
      var v = Math.PI / 4;
      if (-v > p || p > v)
        return Math.cos(p) - 1;
      var x = p * p;
      return x * (x * (x * (x * (x * (x * (x * (x / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(p, v) {
      var x = Math.abs(p), S = Math.abs(v);
      return x < 3e3 && S < 3e3 ? Math.sqrt(x * x + S * S) : (x < S ? (x = S, S = p / v) : S = v / p, x * Math.sqrt(1 + S * S));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(p, v) {
      var x = Math.abs(p), S = Math.abs(v);
      return p === 0 ? Math.log(S) : v === 0 ? Math.log(x) : x < 3e3 && S < 3e3 ? Math.log(p * p + v * v) * 0.5 : (p = p / 2, v = v / 2, 0.5 * Math.log(p * p + v * v) + Math.LN2);
    }
    __name(f, "f");
    u(f, "logHypot");
    var b = u(function(p, v) {
      var x = { re: 0, im: 0 };
      if (p == null)
        x.re = x.im = 0;
      else if (v !== void 0)
        x.re = p, x.im = v;
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
            for (var C = 0; C < S.length; C++) {
              var P = S[C];
              P === " " || P === "	" || P === `
` || (P === "+" ? M++ : P === "-" ? A++ : P === "i" || P === "I" ? (M + A === 0 && c(), S[C + 1] !== " " && !isNaN(S[C + 1]) ? (x.im += parseFloat((A % 2 ? "-" : "") + S[C + 1]), C++) : x.im += parseFloat((A % 2 ? "-" : "") + "1"), M = A = 0) : ((M + A === 0 || isNaN(P)) && c(), S[C + 1] === "i" || S[C + 1] === "I" ? (x.im += parseFloat((A % 2 ? "-" : "") + P), C++) : x.re += parseFloat((A % 2 ? "-" : "") + P), M = A = 0));
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
    function h(p, v) {
      if (!(this instanceof h))
        return new h(p, v);
      var x = b(p, v);
      this.re = x.re, this.im = x.im;
    }
    __name(h, "h");
    u(h, "Complex"), h.prototype = { re: 0, im: 0, sign: function() {
      var p = this.abs();
      return new h(this.re / p, this.im / p);
    }, add: function(p, v) {
      var x = new h(p, v);
      return this.isInfinite() && x.isInfinite() ? h.NAN : this.isInfinite() || x.isInfinite() ? h.INFINITY : new h(this.re + x.re, this.im + x.im);
    }, sub: function(p, v) {
      var x = new h(p, v);
      return this.isInfinite() && x.isInfinite() ? h.NAN : this.isInfinite() || x.isInfinite() ? h.INFINITY : new h(this.re - x.re, this.im - x.im);
    }, mul: function(p, v) {
      var x = new h(p, v);
      return this.isInfinite() && x.isZero() || this.isZero() && x.isInfinite() ? h.NAN : this.isInfinite() || x.isInfinite() ? h.INFINITY : x.im === 0 && this.im === 0 ? new h(this.re * x.re, 0) : new h(this.re * x.re - this.im * x.im, this.re * x.im + this.im * x.re);
    }, div: function(p, v) {
      var x = new h(p, v);
      if (this.isZero() && x.isZero() || this.isInfinite() && x.isInfinite())
        return h.NAN;
      if (this.isInfinite() || x.isZero())
        return h.INFINITY;
      if (this.isZero() || x.isInfinite())
        return h.ZERO;
      p = this.re, v = this.im;
      var S = x.re, M = x.im, A, C;
      return M === 0 ? new h(p / S, v / S) : Math.abs(S) < Math.abs(M) ? (C = S / M, A = S * C + M, new h((p * C + v) / A, (v * C - p) / A)) : (C = M / S, A = M * C + S, new h((p + v * C) / A, (v - p * C) / A));
    }, pow: function(p, v) {
      var x = new h(p, v);
      if (p = this.re, v = this.im, x.isZero())
        return h.ONE;
      if (x.im === 0) {
        if (v === 0 && p > 0)
          return new h(Math.pow(p, x.re), 0);
        if (p === 0)
          switch ((x.re % 4 + 4) % 4) {
            case 0:
              return new h(Math.pow(v, x.re), 0);
            case 1:
              return new h(0, Math.pow(v, x.re));
            case 2:
              return new h(-Math.pow(v, x.re), 0);
            case 3:
              return new h(0, -Math.pow(v, x.re));
          }
      }
      if (p === 0 && v === 0 && x.re > 0 && x.im >= 0)
        return h.ZERO;
      var S = Math.atan2(v, p), M = f(p, v);
      return p = Math.exp(x.re * M - x.im * S), v = x.im * M + x.re * S, new h(p * Math.cos(v), p * Math.sin(v));
    }, sqrt: function() {
      var p = this.re, v = this.im, x = this.abs(), S, M;
      if (p >= 0) {
        if (v === 0)
          return new h(Math.sqrt(p), 0);
        S = 0.5 * Math.sqrt(2 * (x + p));
      } else
        S = Math.abs(v) / Math.sqrt(2 * (x - p));
      return p <= 0 ? M = 0.5 * Math.sqrt(2 * (x - p)) : M = Math.abs(v) / Math.sqrt(2 * (x + p)), new h(S, v < 0 ? -M : M);
    }, exp: function() {
      var p = Math.exp(this.re);
      return this.im === 0, new h(p * Math.cos(this.im), p * Math.sin(this.im));
    }, expm1: function() {
      var p = this.re, v = this.im;
      return new h(Math.expm1(p) * Math.cos(v) + i(v), Math.exp(p) * Math.sin(v));
    }, log: function() {
      var p = this.re, v = this.im;
      return v === 0 && p > 0, new h(f(p, v), Math.atan2(v, p));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var p = this.re, v = this.im;
      return new h(Math.sin(p) * e(v), Math.cos(p) * t(v));
    }, cos: function() {
      var p = this.re, v = this.im;
      return new h(Math.cos(p) * e(v), -Math.sin(p) * t(v));
    }, tan: function() {
      var p = 2 * this.re, v = 2 * this.im, x = Math.cos(p) + e(v);
      return new h(Math.sin(p) / x, t(v) / x);
    }, cot: function() {
      var p = 2 * this.re, v = 2 * this.im, x = Math.cos(p) - e(v);
      return new h(-Math.sin(p) / x, t(v) / x);
    }, sec: function() {
      var p = this.re, v = this.im, x = 0.5 * e(2 * v) + 0.5 * Math.cos(2 * p);
      return new h(Math.cos(p) * e(v) / x, Math.sin(p) * t(v) / x);
    }, csc: function() {
      var p = this.re, v = this.im, x = 0.5 * e(2 * v) - 0.5 * Math.cos(2 * p);
      return new h(Math.sin(p) * e(v) / x, -Math.cos(p) * t(v) / x);
    }, asin: function() {
      var p = this.re, v = this.im, x = new h(v * v - p * p + 1, -2 * p * v).sqrt(), S = new h(x.re - v, x.im + p).log();
      return new h(S.im, -S.re);
    }, acos: function() {
      var p = this.re, v = this.im, x = new h(v * v - p * p + 1, -2 * p * v).sqrt(), S = new h(x.re - v, x.im + p).log();
      return new h(Math.PI / 2 - S.im, S.re);
    }, atan: function() {
      var p = this.re, v = this.im;
      if (p === 0) {
        if (v === 1)
          return new h(0, 1 / 0);
        if (v === -1)
          return new h(0, -1 / 0);
      }
      var x = p * p + (1 - v) * (1 - v), S = new h((1 - v * v - p * p) / x, -2 * p / x).log();
      return new h(-0.5 * S.im, 0.5 * S.re);
    }, acot: function() {
      var p = this.re, v = this.im;
      if (v === 0)
        return new h(Math.atan2(1, p), 0);
      var x = p * p + v * v;
      return x !== 0 ? new h(p / x, -v / x).atan() : new h(p !== 0 ? p / 0 : 0, v !== 0 ? -v / 0 : 0).atan();
    }, asec: function() {
      var p = this.re, v = this.im;
      if (p === 0 && v === 0)
        return new h(0, 1 / 0);
      var x = p * p + v * v;
      return x !== 0 ? new h(p / x, -v / x).acos() : new h(p !== 0 ? p / 0 : 0, v !== 0 ? -v / 0 : 0).acos();
    }, acsc: function() {
      var p = this.re, v = this.im;
      if (p === 0 && v === 0)
        return new h(Math.PI / 2, 1 / 0);
      var x = p * p + v * v;
      return x !== 0 ? new h(p / x, -v / x).asin() : new h(p !== 0 ? p / 0 : 0, v !== 0 ? -v / 0 : 0).asin();
    }, sinh: function() {
      var p = this.re, v = this.im;
      return new h(t(p) * Math.cos(v), e(p) * Math.sin(v));
    }, cosh: function() {
      var p = this.re, v = this.im;
      return new h(e(p) * Math.cos(v), t(p) * Math.sin(v));
    }, tanh: function() {
      var p = 2 * this.re, v = 2 * this.im, x = e(p) + Math.cos(v);
      return new h(t(p) / x, Math.sin(v) / x);
    }, coth: function() {
      var p = 2 * this.re, v = 2 * this.im, x = e(p) - Math.cos(v);
      return new h(t(p) / x, -Math.sin(v) / x);
    }, csch: function() {
      var p = this.re, v = this.im, x = Math.cos(2 * v) - e(2 * p);
      return new h(-2 * t(p) * Math.cos(v) / x, 2 * e(p) * Math.sin(v) / x);
    }, sech: function() {
      var p = this.re, v = this.im, x = Math.cos(2 * v) + e(2 * p);
      return new h(2 * e(p) * Math.cos(v) / x, -2 * t(p) * Math.sin(v) / x);
    }, asinh: function() {
      var p = this.im;
      this.im = -this.re, this.re = p;
      var v = this.asin();
      return this.re = -this.im, this.im = p, p = v.re, v.re = -v.im, v.im = p, v;
    }, acosh: function() {
      var p = this.acos();
      if (p.im <= 0) {
        var v = p.re;
        p.re = -p.im, p.im = v;
      } else {
        var v = p.im;
        p.im = -p.re, p.re = v;
      }
      return p;
    }, atanh: function() {
      var p = this.re, v = this.im, x = p > 1 && v === 0, S = 1 - p, M = 1 + p, A = S * S + v * v, C = A !== 0 ? new h((M * S - v * v) / A, (v * S + M * v) / A) : new h(p !== -1 ? p / 0 : 0, v !== 0 ? v / 0 : 0), P = C.re;
      return C.re = f(C.re, C.im) / 2, C.im = Math.atan2(C.im, P) / 2, x && (C.im = -C.im), C;
    }, acoth: function() {
      var p = this.re, v = this.im;
      if (p === 0 && v === 0)
        return new h(0, Math.PI / 2);
      var x = p * p + v * v;
      return x !== 0 ? new h(p / x, -v / x).atanh() : new h(p !== 0 ? p / 0 : 0, v !== 0 ? -v / 0 : 0).atanh();
    }, acsch: function() {
      var p = this.re, v = this.im;
      if (v === 0)
        return new h(p !== 0 ? Math.log(p + Math.sqrt(p * p + 1)) : 1 / 0, 0);
      var x = p * p + v * v;
      return x !== 0 ? new h(p / x, -v / x).asinh() : new h(p !== 0 ? p / 0 : 0, v !== 0 ? -v / 0 : 0).asinh();
    }, asech: function() {
      var p = this.re, v = this.im;
      if (this.isZero())
        return h.INFINITY;
      var x = p * p + v * v;
      return x !== 0 ? new h(p / x, -v / x).acosh() : new h(p !== 0 ? p / 0 : 0, v !== 0 ? -v / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return h.INFINITY;
      if (this.isInfinite())
        return h.ZERO;
      var p = this.re, v = this.im, x = p * p + v * v;
      return new h(p / x, -v / x);
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
    }, equals: function(p, v) {
      var x = new h(p, v);
      return Math.abs(x.re - this.re) <= h.EPSILON && Math.abs(x.im - this.im) <= h.EPSILON;
    }, clone: function() {
      return new h(this.re, this.im);
    }, toString: function() {
      var p = this.re, v = this.im, x = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(p) < h.EPSILON && (p = 0), Math.abs(v) < h.EPSILON && (v = 0), v === 0 ? x + p : (p !== 0 ? (x += p, x += " ", v < 0 ? (v = -v, x += "-") : x += "+", x += " ") : v < 0 && (v = -v, x += "-"), v !== 1 && (x += v), x + "i"));
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
    }) : typeof Dl == "object" ? (Object.defineProperty(h, "__esModule", { value: true }), h.default = h, h.Complex = h, pd.exports = h) : r.Complex = h;
  })(Dl);
});
var en = ii(Wu());
function Uu(r) {
  let e = tn(r);
  return new en.default(e).valueOf() * Math.PI;
}
__name(Uu, "Uu");
u(Uu, "V");
function Wi(r) {
  let e = tn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(Wi, "Wi");
u(Wi, "X");
function Vu(r, e) {
  return new en.default(tn(r)).valueOf() < new en.default(tn(e)).valueOf();
}
__name(Vu, "Vu");
u(Vu, "W");
function Yu(r, e) {
  return new en.default(tn(r)).valueOf() > new en.default(tn(e)).valueOf();
}
__name(Yu, "Yu");
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
__name(Xu, "Xu");
u(Xu, "Q");
function tn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(tn, "tn");
u(tn, "l");
function Zu(r) {
  try {
    let e = tn(r), t = new en.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Zu, "Zu");
u(Zu, "J");
var Ff = Object.prototype.toString.call({});
var Wf = "!recursion-limit!";
var Uf = 10;
function et(r, e = Uf) {
  return Vf(r) || Yf(r, e) || Xf(r, e);
}
__name(et, "et");
u(et, "c");
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
__name(Vf, "Vf");
u(Vf, "M");
function Yf(r, e) {
  if (e === 0)
    return Wf;
  if (r instanceof Map)
    return Zf(r, e);
  if (r instanceof Set)
    return Kf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Jf(r, e);
}
__name(Yf, "Yf");
u(Yf, "O");
function Xf(r, e) {
  let t = String(r);
  return t !== Ff ? t : Qf(r, e);
}
__name(Xf, "Xf");
u(Xf, "F");
function Zf(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = et(i, e - 1), f = et(l, e - 1);
    t.push(`${c}: ${f}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(Zf, "Zf");
u(Zf, "G");
function Kf(r, e) {
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
__name(Kf, "Kf");
u(Kf, "R");
function Jf(r, e) {
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
__name(Jf, "Jf");
u(Jf, "N");
function Qf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], f = et(l, e - 1), b = et(c, e - 1);
    t.push(`${f}: ${b}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(Qf, "Qf");
u(Qf, "q");
var Ms = 0;
var St = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Ms++;
    try {
      this.details = Ms === 1 ? et(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Ms--;
    }
  }
}, "d");
var eh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
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
    let i = Ht.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = Ht.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var Fi = Ht;
Fi.CONSISTENT = new Ht(false, 0, 2, ", "), Fi.EXACT = new Ht(true, 0, void 0, ", "), Fi.MINIFIED = new Ht(true, 0, void 0, ","), Fi.SIMPLIFIED = new Ht(true, 5e-4, 3, ", ");
var K = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    K.need(r != null, "notNull");
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
    throw new St("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = K.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new St("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new St("Unrecognized value type.", { v: r });
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
    return r = r || Fi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var Kt = de;
Kt.ZERO = new de(0, 0), Kt.ONE = new de(1, 0), Kt.I = new de(0, 1);
var sa = "H";
var la = "X";
var ua = "Y";
var ca = "Z";
var pa = "P";
var da = "T";
var fa = "X^\xBD";
var ha = "Rx";
var va = "Ry";
var ma = "Rz";
var Ps = "Swap";
var Is = "\u2022";
var As = "Bloch";
var Ku = "|0>";
var Ju = "|1>";
var ga = "Measure";
var _s = /* @__PURE__ */ new WeakSet();
function zs(r) {
  _s.add(r), r.shadowRoot && Rs(r.shadowRoot), Ns(r), Ds(r.ownerDocument);
}
__name(zs, "zs");
u(zs, "bind");
function Rs(r) {
  Ns(r), Ds(r);
}
__name(Rs, "Rs");
u(Rs, "bindShadow");
var ba = /* @__PURE__ */ new WeakMap();
function Ds(r = document) {
  if (ba.has(r))
    return ba.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        ks(c.target);
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
__name(Ds, "Ds");
u(Ds, "listenForBind");
function Ns(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    ks(e);
  r instanceof Element && r.hasAttribute("data-action") && ks(r);
}
__name(Ns, "Ns");
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
__name(th, "th");
u(th, "handleEvent");
function* Qu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(Qu, "Qu");
u(Qu, "bindings");
function ks(r) {
  for (let e of Qu(r))
    r.addEventListener(e.type, th);
}
__name(ks, "ks");
u(ks, "bindActions");
function Gs(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(Gs, "Gs");
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
__name(qs, "qs");
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
__name(Ls, "Ls");
u(Ls, "findTargets");
function ke(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return qs(this, e);
  } });
}
__name(ke, "ke");
u(ke, "target");
function at(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Ls(this, e);
  } });
}
__name(at, "at");
u(at, "targets");
function js(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(js, "js");
u(js, "autoShadowRoot");
var ya = /* @__PURE__ */ new WeakMap();
function N(r, e) {
  ya.has(r) || ya.set(r, []), ya.get(r).push(e);
}
__name(N, "N");
u(N, "attr");
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
__name(Bs, "Bs");
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
__name(ec, "ec");
u(ec, "getAttrNames");
function tc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(tc, "tc");
u(tc, "attrToAttributeName");
function Hs(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...ec(r.prototype)].map(tc).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Hs, "Hs");
u(Hs, "defineObservedAttributes");
var rh = /* @__PURE__ */ new WeakSet();
function rc(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), rh.add(r), js(r), Bs(r), zs(r), e && e.call(r), r.shadowRoot && Rs(r.shadowRoot);
}
__name(rc, "rc");
u(rc, "initializeInstance");
function nc(r) {
  Hs(r), Gs(r);
}
__name(nc, "nc");
u(nc, "initializeClass");
function te(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    rc(this, e);
  }, nc(r);
}
__name(te, "te");
u(te, "controller");
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
  return u(e, "ActivateableMixinClass"), _([N], e.prototype, "active", 2), e;
}
__name(Oe, "Oe");
u(Oe, "ActivateableMixin");
var En = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function rn(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u(e, "AngleableMixinClass"), _([N], e.prototype, "angle", 2), _([N], e.prototype, "reducedAngle", 2), e;
}
__name(rn, "rn");
u(rn, "AngleableMixin");
var Sn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
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
  return u(e, "DisableableMixinClass"), _([N], e.prototype, "disabled", 2), e;
}
__name(Be, "Be");
u(Be, "DisableableMixin");
var Z = u(function() {
  return Z = Object.assign || u(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, "__assign"), Z.apply(this, arguments);
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
__name(oi, "oi");
u(oi, "__rest");
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
__name(me, "me");
u(me, "__read");
function ze(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(ze, "ze");
u(ze, "__spreadArray");
var Se;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Se || (Se = {}));
var nn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(nn || (nn = {}));
var Ui = Se.Start;
var ai = Se.Stop;
var si = Se.Raise;
var Cn = Se.Send;
var wa = Se.Cancel;
var ic = Se.NullEvent;
var $s = Se.Assign;
var Im = Se.After;
var Am = Se.DoneState;
var xa = Se.Log;
var oc = Se.Init;
var Vi = Se.Invoke;
var _m = Se.ErrorExecution;
var Fs = Se.ErrorPlatform;
var Ws = Se.ErrorCustom;
var Yi = Se.Update;
var ac = Se.Choose;
var sc = Se.Pure;
var Ea = ".";
var Us = {};
var Sa = "xstate.guard";
var lc = "";
var Le = true;
var Ca;
function Zi(r, e, t) {
  t === void 0 && (t = Ea);
  var i = li(r, t), l = li(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Zi(i[c], l[c]) : false;
  });
}
__name(Zi, "Zi");
u(Zi, "matchesState");
function Ta(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ta, "Ta");
u(Ta, "getEventType");
function Oa(r, e) {
  try {
    return Lr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(Oa, "Oa");
u(Oa, "toStatePath");
function nh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(nh, "nh");
u(nh, "isStateLike");
function li(r, e) {
  if (nh(r))
    return r.value;
  if (Lr(r))
    return Xi(r);
  if (typeof r != "string")
    return r;
  var t = Oa(r, e);
  return Xi(t);
}
__name(li, "li");
u(li, "toStateValue");
function Xi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Xi, "Xi");
u(Xi, "pathToStateValue");
function ui(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(ui, "ui");
u(ui, "mapValues");
function Vs(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = ve(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, p = r[h];
      !t(p) || (c[h] = e(p, h, r));
    }
  } catch (v) {
    i = { error: v };
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
__name(Vs, "Vs");
u(Vs, "mapFilterValues");
var uc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ve(r), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        l = l[b];
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
      for (var f = ve(r), b = f.next(); !b.done; b = f.next()) {
        var h = b.value;
        c = c[e][h];
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
__name(cc, "cc");
u(cc, "nestedPath");
function Ki(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Ki(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Ki, "Ki");
u(Ki, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, ze([], me(r), false));
}
__name(Ne, "Ne");
u(Ne, "flatten");
function pc(r) {
  return Lr(r) ? r : [r];
}
__name(pc, "pc");
u(pc, "toArrayStrict");
function $t(r) {
  return r === void 0 ? [] : pc(r);
}
__name($t, "$t");
u($t, "toArray");
function Tn(r, e, t) {
  var i, l;
  if (Ce(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = ve(Object.keys(r)), b = f.next(); !b.done; b = f.next()) {
      var h = b.value, p = r[h];
      Ce(p) ? c[h] = p(e, t.data) : c[h] = p;
    }
  } catch (v) {
    i = { error: v };
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
function dc(r) {
  return /^(done|error)\./.test(r);
}
__name(dc, "dc");
u(dc, "isBuiltInEvent");
function Ys(r) {
  return !!(r instanceof Promise || r !== null && (Ce(r) || typeof r == "object") && Ce(r.then));
}
__name(Ys, "Ys");
u(Ys, "isPromiseLike");
function fc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(fc, "fc");
u(fc, "isBehavior");
function Ma(r, e) {
  var t, i, l = me([[], []], 2), c = l[0], f = l[1];
  try {
    for (var b = ve(r), h = b.next(); !h.done; h = b.next()) {
      var p = h.value;
      e(p) ? c.push(p) : f.push(p);
    }
  } catch (v) {
    t = { error: v };
  } finally {
    try {
      h && !h.done && (i = b.return) && i.call(b);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, f];
}
__name(Ma, "Ma");
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
__name(hc, "hc");
u(hc, "updateHistoryStates");
function vc(r, e) {
  return { current: e, states: hc(r, e) };
}
__name(vc, "vc");
u(vc, "updateHistoryValue");
function Xs(r, e, t, i) {
  Le || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var b, h, p = f.assignment, v = { state: i, action: f, _event: e }, x = {};
    if (Ce(p))
      x = p(c, e.data, v);
    else
      try {
        for (var S = ve(Object.keys(p)), M = S.next(); !M.done; M = S.next()) {
          var A = M.value, C = p[A];
          x[A] = Ce(C) ? C(c, e.data, v) : C;
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
function Pa(r, e) {
  if (!!r)
    return ge(r) ? { type: Sa, name: r, predicate: e ? e[r] : void 0 } : Ce(r) ? { type: Sa, name: r.name, predicate: r } : r;
}
__name(Pa, "Pa");
u(Pa, "toGuard");
function mc(r) {
  try {
    return "subscribe" in r && Ce(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(mc, "mc");
u(mc, "isObservable");
var Tr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var qm = (Ca = {}, Ca[Tr] = function() {
  return this;
}, Ca[Symbol.observable] = function() {
  return this;
}, Ca);
function Or(r) {
  return !!r && "__xstatenode" in r;
}
__name(Or, "Or");
u(Or, "isMachine");
function gc(r) {
  return !!r && typeof r.send == "function";
}
__name(gc, "gc");
u(gc, "isActor");
function Ji(r, e) {
  return ge(r) || typeof r == "number" ? Z({ type: r }, e) : r;
}
__name(Ji, "Ji");
u(Ji, "toEventObject");
function tt(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Ji(r);
  return Z({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(tt, "tt");
u(tt, "toSCXMLEvent");
function On(r, e) {
  var t = pc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Or(i) ? { target: i, event: r } : Z(Z({}, i), { event: r });
  });
  return t;
}
__name(On, "On");
u(On, "toTransitionConfigArray");
function bc(r) {
  if (!(r === void 0 || r === lc))
    return $t(r);
}
__name(bc, "bc");
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
__name(yc, "yc");
u(yc, "reportUnhandledExceptionOnInvocation");
function Ia(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === Sa)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var b = c == null ? void 0 : c[e.type];
  if (!b)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return b(t, i.data, f);
}
__name(Ia, "Ia");
u(Ia, "evaluateGuard");
function Aa(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(Aa, "Aa");
u(Aa, "toInvokeSource");
function Qi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Qi, "Qi");
u(Qi, "toObserver");
function eo(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(eo, "eo");
u(eo, "createInvokeId");
var Mn = tt({ type: oc });
function _a(r, e) {
  return e && e[r] || void 0;
}
__name(_a, "_a");
u(_a, "getActionFunction");
function ci(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = _a(r, e);
    Ce(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Ce(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = _a(r.type, e);
    if (Ce(i))
      t = Z(Z({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = Z(Z(Z({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(ci, "ci");
u(ci, "toActionObject");
var to = u(function(r, e) {
  if (!r)
    return [];
  var t = Lr(r) ? r : [r];
  return t.map(function(i) {
    return ci(i, e);
  });
}, "toActionObjects");
function za(r) {
  var e = ci(r);
  return Z(Z({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
__name(za, "za");
u(za, "toActivityDefinition");
function wc(r) {
  return ge(r) ? { type: si, event: r } : Zs(r, { to: nn.Internal });
}
__name(wc, "wc");
u(wc, "raise");
function ih(r) {
  return { type: si, _event: tt(r.event) };
}
__name(ih, "ih");
u(ih, "resolveRaise");
function Zs(r, e) {
  return { to: e ? e.to : void 0, type: Cn, event: Ce(r) ? r : Ji(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Ce(r) ? r.name : Ta(r) };
}
__name(Zs, "Zs");
u(Zs, "send");
function oh(r, e, t, i) {
  var l = { _event: t }, c = tt(Ce(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (ge(r.delay)) {
    var b = i && i[r.delay];
    f = Ce(b) ? b(e, t.data, l) : b;
  } else
    f = Ce(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var h = Ce(r.to) ? r.to(e, t.data, l) : r.to;
  return Z(Z({}, r), { to: h, _event: c, event: c.data, delay: f });
}
__name(oh, "oh");
u(oh, "resolveSend");
var ah = u(function(r, e, t) {
  return Z(Z({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var xc = u(function(r) {
  return { type: wa, sendId: r };
}, "cancel");
function Ec(r) {
  var e = za(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
__name(Ec, "Ec");
u(Ec, "start");
function Sc(r) {
  var e = Ce(r) ? r : za(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
__name(Sc, "Sc");
u(Sc, "stop");
function sh(r, e, t) {
  var i = Ce(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
__name(sh, "sh");
u(sh, "resolveStop");
function Cc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
__name(Cc, "Cc");
u(Cc, "after");
function ro(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(ro, "ro");
u(ro, "done");
function pi(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(pi, "pi");
u(pi, "doneInvoke");
function Pn(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(Pn, "Pn");
u(Pn, "error");
function ka(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = me(c ? [[], l] : Ma(l, function(S) {
    return S.type === $s;
  }), 2), b = f[0], h = f[1], p = b.length ? Xs(t, i, b, e) : t, v = c ? [t] : void 0, x = Ne(h.map(function(S) {
    var M;
    switch (S.type) {
      case si:
        return ih(S);
      case Cn:
        var A = oh(S, p, i, r.options.delays);
        return Le || Ue(!ge(S.delay) || typeof A.delay == "number", "No delay reference for delay expression '".concat(S.delay, "' was found on machine '").concat(r.id, "'")), A;
      case xa:
        return ah(S, p, i);
      case ac: {
        var C = S, P = (M = C.conds.find(function(U) {
          var ie = Pa(U.cond, r.options.guards);
          return !ie || Ia(r, ie, p, i, e);
        })) === null || M === void 0 ? void 0 : M.actions;
        if (!P)
          return [];
        var k = me(ka(r, e, p, i, to($t(P), r.options.actions), c), 2), z = k[0], L = k[1];
        return p = L, v == null || v.push(p), z;
      }
      case sc: {
        var P = S.get(p, i.data);
        if (!P)
          return [];
        var T = me(ka(r, e, p, i, to($t(P), r.options.actions), c), 2), B = T[0], D = T[1];
        return p = D, v == null || v.push(p), B;
      }
      case ai:
        return sh(S, p, i);
      case $s: {
        p = Xs(p, i, [S], e), v == null || v.push(p);
        break;
      }
      default:
        var W = ci(S, r.options.actions), Y = W.exec;
        if (Y && v) {
          var H = v.length - 1;
          W = Z(Z({}, W), { exec: function(U) {
            for (var ie = [], oe = 1; oe < arguments.length; oe++)
              ie[oe - 1] = arguments[oe];
            Y.apply(void 0, ze([v[H]], me(ie), false));
          } });
        }
        return W;
    }
  }).filter(function(S) {
    return !!S;
  }));
  return [x, p];
}
__name(ka, "ka");
u(ka, "resolveActions");
var Tc = [];
var In = u(function(r, e) {
  Tc.push(r);
  var t = e(r);
  return Tc.pop(), t;
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
  } }, e[Tr] = function() {
    return this;
  }, e;
}
__name(Oc, "Oc");
u(Oc, "createNullActor");
function Mc(r, e, t, i) {
  var l, c = Aa(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], b = r.data ? Tn(r.data, t, i) : void 0, h = f ? Pc(f, r.id, b) : Oc(r.id);
  return h.meta = r, h;
}
__name(Mc, "Mc");
u(Mc, "createInvocableActor");
function Pc(r, e, t) {
  var i = Oc(e);
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
__name(Pc, "Pc");
u(Pc, "createDeferredActor");
function lh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(lh, "lh");
u(lh, "isActor");
function Ic(r) {
  return lh(r) && "id" in r;
}
__name(Ic, "Ic");
u(Ic, "isSpawnedActor");
function Ac(r) {
  var e;
  return Z((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Tr] = function() {
    return this;
  }, e), r);
}
__name(Ac, "Ac");
u(Ac, "toActorRef");
var no = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function An(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(An, "An");
u(An, "getChildren");
function Js(r) {
  var e = [r];
  return no(r) ? e : e.concat(Ne(An(r).map(Js)));
}
__name(Js, "Js");
u(Js, "getAllStateNodes");
function _n(r, e) {
  var t, i, l, c, f, b, h, p, v = new Set(r), x = Ks(v), S = new Set(e);
  try {
    for (var M = ve(S), A = M.next(); !A.done; A = M.next())
      for (var C = A.value, P = C.parent; P && !S.has(P); )
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
  var k = Ks(S);
  try {
    for (var z = ve(S), L = z.next(); !L.done; L = z.next()) {
      var C = L.value;
      if (C.type === "compound" && (!k.get(C) || !k.get(C).length))
        x.get(C) ? x.get(C).forEach(function(U) {
          return S.add(U);
        }) : C.initialStateNodes.forEach(function(U) {
          return S.add(U);
        });
      else if (C.type === "parallel")
        try {
          for (var T = (f = void 0, ve(An(C))), B = T.next(); !B.done; B = T.next()) {
            var D = B.value;
            S.has(D) || (S.add(D), x.get(D) ? x.get(D).forEach(function(U) {
              return S.add(U);
            }) : D.initialStateNodes.forEach(function(U) {
              return S.add(U);
            }));
          }
        } catch (U) {
          f = { error: U };
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
      L && !L.done && (c = z.return) && c.call(z);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var W = ve(S), Y = W.next(); !Y.done; Y = W.next())
      for (var C = Y.value, P = C.parent; P && !S.has(P); )
        S.add(P), P = P.parent;
  } catch (H) {
    h = { error: H };
  } finally {
    try {
      Y && !Y.done && (p = W.return) && p.call(W);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return S;
}
__name(_n, "_n");
u(_n, "getConfiguration");
function _c(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (no(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = _c(c, e);
  }), l;
}
__name(_c, "_c");
u(_c, "getValueFromAdj");
function Ks(r) {
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
__name(Ks, "Ks");
u(Ks, "getAdjList");
function kc(r, e) {
  var t = _n([r], e);
  return _c(r, Ks(t));
}
__name(kc, "kc");
u(kc, "getValue");
function io(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(io, "io");
u(io, "has");
function zc(r) {
  return ze([], me(new Set(Ne(ze([], me(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(zc, "zc");
u(zc, "nextEvents");
function kn(r, e) {
  return e.type === "compound" ? An(e).some(function(t) {
    return t.type === "final" && io(r, t);
  }) : e.type === "parallel" ? An(e).every(function(t) {
    return kn(r, t);
  }) : false;
}
__name(kn, "kn");
u(kn, "isInFinalState");
function Rc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(Rc, "Rc");
u(Rc, "getMeta");
function Qs(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
__name(Qs, "Qs");
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
__name(el, "el");
u(el, "stateValuesEqual");
function Dc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Dc, "Dc");
u(Dc, "isStateConfig");
function Nc(r, e) {
  var t = r.exec, i = Z(Z({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(Nc, "Nc");
u(Nc, "bindActionToState");
var yr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = Us, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || Us, this.meta = Rc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return zc(t.configuration);
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
    return l.concat.apply(l, ze([], me(l.map(function(c) {
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
    return Z(Z({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Zi(e, this.value);
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
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Z(Z({}, uh), e);
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
var rl = /* @__PURE__ */ new Map();
var ch = 0;
var oo = { bookId: function() {
  return "x:".concat(ch++);
}, register: function(r, e) {
  return rl.set(r, e), r;
}, get: function(r) {
  return rl.get(r);
}, free: function(r) {
  rl.delete(r);
} };
function Ra() {
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
__name(Ra, "Ra");
u(Ra, "getGlobal");
function ph() {
  var r = Ra();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(ph, "ph");
u(ph, "getDevTools");
function Gc(r) {
  if (!!Ra()) {
    var e = ph();
    e && e.register(r);
  }
}
__name(Gc, "Gc");
u(Gc, "registerService");
function qc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var p = l.shift();
        t = r.transition(t, p, h), i.forEach(function(v) {
          return v.next(t);
        });
      }
      c = false;
    }
  }, "flush"), b = Ac({ id: e.id, send: function(p) {
    l.push(p), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(p, v, x) {
    var S = Qi(p, v, x);
    return i.add(S), S.next(t), { unsubscribe: function() {
      i.delete(S);
    } };
  } }), h = { parent: e.parent, self: b, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(h) : t, b;
}
__name(qc, "qc");
u(qc, "spawnBehavior");
var dh = { sync: false, autoForward: false };
var bt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(bt || (bt = {}));
var Lc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = bt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(v, x) {
      if (Lr(v))
        return i.batch(v), i.state;
      var S = tt(Ji(v, x));
      if (i.status === bt.Stopped)
        return Le || Ue(false, 'Event "'.concat(S.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(S.data))), i.state;
      if (i.status !== bt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(S.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(S.data)));
      return i.scheduler.schedule(function() {
        i.forward(S);
        var M = i.nextState(S);
        i.update(M, S);
      }), i._state;
    }, this.sendTo = function(v, x) {
      var S = i.parent && (x === nn.Parent || i.parent.id === x), M = S ? i.parent : ge(x) ? i.children.get(x) || oo.get(x) : gc(x) ? x : void 0;
      if (!M) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(x, "' from service '").concat(i.id, "'."));
        Le || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(v.type));
        return;
      }
      "machine" in M ? M.send(Z(Z({}, v), { name: v.name === Ws ? "".concat(Pn(i.id)) : v.name, origin: i.sessionId })) : M.send(v.data);
    };
    var l = Z(Z({}, r.defaultOptions), t), c = l.clock, f = l.logger, b = l.parent, h = l.id, p = h !== void 0 ? h : e.id;
    this.id = p, this.logger = f, this.clock = c, this.parent = b, this.options = l, this.scheduler = new tl({ deferEvents: this.options.deferEvents }), this.sessionId = oo.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : In(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || Ue(this.status !== bt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ve(e.actions), f = c.next(); !f.done; f = c.next()) {
        var b = f.value;
        this.exec(b, e, t);
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
    var i, l, c, f, b, h, p, v, x = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      x.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var S = ve(this.eventListeners), M = S.next(); !M.done; M = S.next()) {
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
      for (var C = ve(this.listeners), P = C.next(); !P.done; P = C.next()) {
        var A = P.value;
        A(e, e.event);
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
      for (var k = ve(this.contextListeners), z = k.next(); !z.done; z = k.next()) {
        var L = z.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
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
    var T = kn(e.configuration || [], this.machine);
    if (this.state.configuration && T) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === x.machine;
      }), D = B && B.doneData ? Tn(B.doneData, e.context, t) : void 0;
      try {
        for (var W = ve(this.doneListeners), Y = W.next(); !Y.done; Y = W.next()) {
          var A = Y.value;
          A(pi(this.id, D));
        }
      } catch (H) {
        p = { error: H };
      } finally {
        try {
          Y && !Y.done && (v = W.return) && v.call(W);
        } finally {
          if (p)
            throw p.error;
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
    var c, f = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), f = e.complete.bind(e)), this.listeners.add(c), this.status !== bt.NotStarted && c(this.state), f && (this.status === bt.Stopped ? f() : this.onDone(f)), { unsubscribe: function() {
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
    if (this.status === bt.Running)
      return this;
    this.machine._init(), oo.register(this.sessionId, this), this.initialized = true, this.status = bt.Running;
    var i = e === void 0 ? this.initialState : In(this, function() {
      return Dc(e) ? t.machine.resolveState(e) : t.machine.resolveState(yr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Mn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, b, h, p, v, x = this;
    try {
      for (var S = ve(this.listeners), M = S.next(); !M.done; M = S.next()) {
        var A = M.value;
        this.listeners.delete(A);
      }
    } catch (Y) {
      e = { error: Y };
    } finally {
      try {
        M && !M.done && (t = S.return) && t.call(S);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var C = ve(this.stopListeners), P = C.next(); !P.done; P = C.next()) {
        var A = P.value;
        A(), this.stopListeners.delete(A);
      }
    } catch (Y) {
      i = { error: Y };
    } finally {
      try {
        P && !P.done && (l = C.return) && l.call(C);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var k = ve(this.contextListeners), z = k.next(); !z.done; z = k.next()) {
        var A = z.value;
        this.contextListeners.delete(A);
      }
    } catch (Y) {
      c = { error: Y };
    } finally {
      try {
        z && !z.done && (f = k.return) && f.call(k);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var L = ve(this.doneListeners), T = L.next(); !T.done; T = L.next()) {
        var A = T.value;
        this.doneListeners.delete(A);
      }
    } catch (Y) {
      b = { error: Y };
    } finally {
      try {
        T && !T.done && (h = L.return) && h.call(L);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    ze([], me(this.state.configuration), false).sort(function(Y, H) {
      return H.order - Y.order;
    }).forEach(function(Y) {
      var H, U;
      try {
        for (var ie = ve(Y.definition.exit), oe = ie.next(); !oe.done; oe = ie.next()) {
          var V = oe.value;
          x.exec(V, x.state);
        }
      } catch (ce) {
        H = { error: ce };
      } finally {
        try {
          oe && !oe.done && (U = ie.return) && U.call(ie);
        } finally {
          if (H)
            throw H.error;
        }
      }
    }), this.children.forEach(function(Y) {
      Ce(Y.stop) && Y.stop();
    }), this.children.clear();
    try {
      for (var B = ve(Object.keys(this.delayedEventsMap)), D = B.next(); !D.done; D = B.next()) {
        var W = D.value;
        this.clock.clearTimeout(this.delayedEventsMap[W]);
      }
    } catch (Y) {
      p = { error: Y };
    } finally {
      try {
        D && !D.done && (v = B.return) && v.call(B);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new tl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = bt.Stopped, this._initialState = void 0, oo.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === bt.NotStarted && this.options.deferEvents)
      Le || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== bt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, b = [], h = u(function(S) {
        var M = tt(S);
        t.forward(M), c = In(t, function() {
          return t.machine.transition(c, M);
        }), b.push.apply(b, ze([], me(c.actions.map(function(A) {
          return Nc(A, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var p = ve(e), v = p.next(); !v.done; v = p.next()) {
          var x = v.value;
          h(x);
        }
      } catch (S) {
        i = { error: S };
      } finally {
        try {
          v && !v.done && (l = p.return) && l.call(p);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = f, c.actions = b, t.update(c, tt(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = tt(e);
    if (i.name.indexOf(Fs) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Fs) === 0;
    }))
      throw i.data.data;
    var l = In(this, function() {
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
    var l = t.context, c = t._event, f = e.exec || _a(e.type, i), b = Ce(f) ? f : f ? f.exec : e.exec;
    if (b)
      try {
        return b(l, c.data, { action: e, state: this.state, _event: c });
      } catch (T) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: T }), T;
      }
    switch (e.type) {
      case Cn:
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
      case Ui: {
        if (this.status !== bt.Running)
          return;
        var p = e.activity;
        if (!this.state.activities[p.id || p.type])
          break;
        if (p.type === Se.Invoke) {
          var v = Aa(p.src), x = this.machine.options.services ? this.machine.options.services[v.type] : void 0, S = p.id, M = p.data;
          Le || Ue(!("forward" in p), "`forward` property is deprecated (found in invocation of '".concat(p.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var A = "autoForward" in p ? p.autoForward : !!p.forward;
          if (!x) {
            Le || Ue(false, "No service found for invocation '".concat(p.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var C = M ? Tn(M, l, c) : void 0;
          if (typeof x == "string")
            return;
          var P = Ce(x) ? x(l, c.data, { data: C, src: v, meta: p.meta }) : x;
          if (!P)
            return;
          var k = void 0;
          Or(P) && (P = C ? P.withContext(C) : P, k = { autoForward: A }), this.spawn(P, S, k);
        } else
          this.spawnActivity(p);
        break;
      }
      case ai: {
        this.stopChild(e.activity.id);
        break;
      }
      case xa:
        var z = e.label, L = e.value;
        z ? this.logger(z, L) : this.logger(L);
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
    if (Ys(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Ce(e))
      return this.spawnCallback(e, t);
    if (Ic(e))
      return this.spawnActor(e, t);
    if (mc(e))
      return this.spawnObservable(e, t);
    if (Or(e))
      return this.spawnMachine(e, Z(Z({}, i), { id: t }));
    if (fc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Z(Z({}, this.options), { parent: this, id: t.id || e.id })), c = Z(Z({}, dh), t);
    c.sync && l.onTransition(function(b) {
      i.send(Yi, { state: b, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(b) {
      i.removeChild(l.id), i.send(tt(b, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = qc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(h) {
      c || (f = h, l.removeChild(t), l.send(tt(pi(t, h), { origin: t })));
    }, function(h) {
      if (!c) {
        l.removeChild(t);
        var p = Pn(t, h);
        try {
          l.send(tt(p, { origin: t }));
        } catch (v) {
          yc(h, v, t), l.devTools && l.devTools.send(p, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var b = (i = { id: t, send: function() {
    }, subscribe: function(h, p, v) {
      var x = Qi(h, p, v), S = false;
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
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), h, p = u(function(S) {
      h = S, b.forEach(function(M) {
        return M(S);
      }), !c && l.send(tt(S, { origin: t }));
    }, "receive"), v;
    try {
      v = e(p, function(S) {
        f.add(S);
      });
    } catch (S) {
      this.send(Pn(t, S));
    }
    if (Ys(v))
      return this.spawnPromise(v, t);
    var x = (i = { id: t, send: function(S) {
      return f.forEach(function(M) {
        return M(S);
      });
    }, subscribe: function(S) {
      var M = Qi(S);
      return b.add(M.next), { unsubscribe: function() {
        b.delete(M.next);
      } };
    }, stop: function() {
      c = true, Ce(v) && v();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return h;
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, x), x;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, f = e.subscribe(function(h) {
      c = h, l.send(tt(h, { origin: t }));
    }, function(h) {
      l.removeChild(t), l.send(tt(Pn(t, h), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(tt(pi(t), { origin: t }));
    }), b = (i = { id: t, send: function() {
    }, subscribe: function(h, p, v) {
      return e.subscribe(h, p, v);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Tr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
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
    var e = Ra();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Z(Z({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Z({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Gc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Tr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === bt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = st, r;
}();
function st(r, e) {
  var t = new Lc(r, e);
  return t;
}
__name(st, "st");
u(st, "interpret");
function fh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(fh, "fh");
u(fh, "toInvokeSource");
function ao(r) {
  return Z(Z({ type: Vi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = oi(r, ["onDone", "onError"]);
    return Z(Z({}, e), { type: Vi, src: fh(r.src) });
  } });
}
__name(ao, "ao");
u(ao, "toInvokeDefinition");
var hi = "";
var nl = "#";
var so = "*";
var di = {};
var fi = u(function(r) {
  return r[0] === nl;
}, "isStateId");
var hh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var vh = u(function(r, e, t) {
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
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(hh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ea), this.id = this.config.id || ze([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, Le || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ui(this.config.states, function(p, v) {
      var x, S = new r(p, {}, void 0, { parent: c, key: v });
      return Object.assign(c.idMap, Z((x = {}, x[S.id] = S, x), S.idMap)), S;
    }) : di;
    var b = 0;
    function h(p) {
      var v, x;
      p.order = b++;
      try {
        for (var S = ve(An(p)), M = S.next(); !M.done; M = S.next()) {
          var A = M.value;
          h(A);
        }
      } catch (C) {
        v = { error: C };
      } finally {
        try {
          M && !M.done && (x = S.return) && x.call(S);
        } finally {
          if (v)
            throw v.error;
        }
      }
    }
    __name(h, "h");
    u(h, "dfs"), h(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(p) {
      var v = p.event;
      return v === hi;
    }) : hi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = $t(this.config.entry || this.config.onEntry).map(function(p) {
      return ci(p);
    }), this.onExit = $t(this.config.exit || this.config.onExit).map(function(p) {
      return ci(p);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = $t(this.config.invoke).map(function(p, v) {
      var x, S;
      if (Or(p)) {
        var M = eo(c.id, v);
        return c.machine.options.services = Z((x = {}, x[M] = p, x), c.machine.options.services), ao({ src: M, id: M });
      } else if (ge(p.src)) {
        var M = p.id || eo(c.id, v);
        return ao(Z(Z({}, p), { id: M, src: p.src }));
      } else if (Or(p.src) || Ce(p.src)) {
        var M = p.id || eo(c.id, v);
        return c.machine.options.services = Z((S = {}, S[M] = p.src, S), c.machine.options.services), ao(Z(Z({ id: M }, p), { src: M }));
      } else {
        var A = p.src;
        return ao(Z(Z({ id: eo(c.id, v) }, p), { src: A }));
      }
    }), this.activities = $t(this.config.activities).concat(this.invoke).map(function(p) {
      return za(p);
    }), this.transition = this.transition.bind(this), this.tags = $t(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Js(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, b = i.services, h = i.delays;
    return new r(this.config, { actions: Z(Z({}, l), e.actions), activities: Z(Z({}, c), e.activities), guards: Z(Z({}, f), e.guards), services: Z(Z({}, b), e.services), delays: Z(Z({}, h), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Ce(this._context) ? this._context() : this._context;
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
      return t ? c : c || l.eventType === so;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, f) {
      var b = Ce(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, h = Cc(b, e.id);
      return e.onEntry.push(Zs(h, { delay: c })), e.onExit.push(xc(h)), h;
    }, "mutateEntryExit"), l = Lr(t) ? t.map(function(c, f) {
      var b = i(c.delay, f);
      return Z(Z({}, c), { event: b });
    }) : Ne(Object.keys(t).map(function(c, f) {
      var b = t[c], h = ge(b) ? { target: b } : b, p = isNaN(+c) ? c : +c, v = i(p, f);
      return $t(h).map(function(x) {
        return Z(Z({}, x), { event: v, delay: p });
      });
    }));
    return l.map(function(c) {
      var f = c.delay;
      return Z(Z({}, e.formatTransition(c)), { delay: f });
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
    var f = Object.keys(l), b = [this];
    return b.push.apply(b, ze([], me(Ne(f.map(function(h) {
      return i.getStateNode(h).getStateNodes(l[h]);
    }))), false)), b;
  }, r.prototype.handles = function(e) {
    var t = Ta(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof yr ? e : yr.create(e), i = Array.from(_n([], this.getStateNodes(t.value)));
    return new yr(Z(Z({}, t), { value: this.resolve(t.value), configuration: i, done: kn(i, this), tags: Qs(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var b = ve(Object.keys(e)), h = b.next(); !h.done; h = b.next()) {
        var p = h.value, v = e[p];
        if (!!v) {
          var x = this.getStateNode(p), S = x._transition(v, t, i);
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
    }), A = Ne(M.map(function(z) {
      return z.transitions;
    })), C = M.some(function(z) {
      return z.transitions.length > 0;
    });
    if (!C)
      return this.next(t, i);
    var P = Ne(M.map(function(z) {
      return z.entrySet;
    })), k = Ne(Object.keys(f).map(function(z) {
      return f[z].configuration;
    }));
    return { transitions: A, entrySet: P, exitSet: Ne(M.map(function(z) {
      return z.exitSet;
    })), configuration: k, source: t, actions: Ne(Object.keys(f).map(function(z) {
      return f[z].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, tt(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, b = [], h = [], p;
    try {
      for (var v = ve(this.getCandidates(f)), x = v.next(); !x.done; x = v.next()) {
        var S = x.value, M = S.cond, A = S.in, C = e.context, P = A ? ge(A) && fi(A) ? e.matches(li(this.getStateNodeById(A).path, this.delimiter)) : Zi(li(A, this.delimiter), uc(this.path.slice(0, -2))(e.value)) : true, k = false;
        try {
          k = !M || Ia(this.machine, M, C, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(M.name || M.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (k && P) {
          S.target !== void 0 && (h = S.target), b.push.apply(b, ze([], me(S.actions), false)), p = S;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        x && !x.done && (l = v.return) && l.call(v);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!p) {
      if (!h.length)
        return { transitions: [p], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: b };
      var z = Ne(h.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), L = !!p.internal, T = L ? [] : Ne(z.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [p], entrySet: T, exitSet: L ? [] : [this], configuration: z, source: e, actions: b };
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
    var c, f, b, h, p = _n([], l ? this.getStateNodes(l.value) : [this]), v = e.configuration.length ? _n(p, e.configuration) : p;
    try {
      for (var x = ve(v), S = x.next(); !S.done; S = x.next()) {
        var M = S.value;
        io(p, M) || e.entrySet.push(M);
      }
    } catch (W) {
      c = { error: W };
    } finally {
      try {
        S && !S.done && (f = x.return) && f.call(x);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var A = ve(p), C = A.next(); !C.done; C = A.next()) {
        var M = C.value;
        (!io(v, M) || io(e.exitSet, M.parent)) && e.exitSet.push(M);
      }
    } catch (W) {
      b = { error: W };
    } finally {
      try {
        C && !C.done && (h = A.return) && h.call(A);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var P = Ne(e.entrySet.map(function(W) {
      var Y = [];
      if (W.type !== "final")
        return Y;
      var H = W.parent;
      if (!H.parent)
        return Y;
      Y.push(ro(W.id, W.doneData), ro(H.id, W.doneData ? Tn(W.doneData, t, i) : void 0));
      var U = H.parent;
      return U.type === "parallel" && An(U).every(function(ie) {
        return kn(e.configuration, ie);
      }) && Y.push(ro(U.id)), Y;
    }));
    e.exitSet.sort(function(W, Y) {
      return Y.order - W.order;
    }), e.entrySet.sort(function(W, Y) {
      return W.order - Y.order;
    });
    var k = new Set(e.entrySet), z = new Set(e.exitSet), L = me([Ne(Array.from(k).map(function(W) {
      return ze(ze([], me(W.activities.map(function(Y) {
        return Ec(Y);
      })), false), me(W.onEntry), false);
    })).concat(P.map(wc)), Ne(Array.from(z).map(function(W) {
      return ze(ze([], me(W.onExit), false), me(W.activities.map(function(Y) {
        return Sc(Y);
      })), false);
    }))], 2), T = L[0], B = L[1], D = to(B.concat(e.actions).concat(T), this.machine.options.actions);
    return D;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = tt(t), c;
    if (e instanceof yr)
      c = i === void 0 ? e : this.resolveState(yr.from(e, i));
    else {
      var f = ge(e) ? this.resolve(Xi(this.getResolvedPath(e))) : this.resolve(e), b = i != null ? i : this.machine.context;
      c = this.resolveState(yr.from(f, b));
    }
    if (!Le && l.name === so)
      throw new Error("An event cannot have the wildcard type ('".concat(so, "')"));
    if (this.strict && !this.events.includes(l.name) && !dc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var h = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, p = _n([], this.getStateNodes(c.value)), v = h.configuration.length ? _n(p, h.configuration) : p;
    return h.configuration = ze([], me(v), false), this.resolveTransition(h, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, ze([], me(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, b = this;
    l === void 0 && (l = Mn);
    var h = e.configuration, p = !t || e.transitions.length > 0, v = p ? kc(this.machine, h) : void 0, x = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, S = this.getActions(e, i, l, t), M = t ? Z({}, t.activities) : {};
    try {
      for (var A = ve(S), C = A.next(); !C.done; C = A.next()) {
        var P = C.value;
        P.type === Ui ? M[P.activity.id || P.activity.type] = P : P.type === ai && (M[P.activity.id || P.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        C && !C.done && (f = A.return) && f.call(A);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var k = me(ka(this, t, i, l, S, this.machine.config.preserveActionOrder), 2), z = k[0], L = k[1], T = me(Ma(z, function(fe) {
      return fe.type === si || fe.type === Cn && fe.to === nn.Internal;
    }), 2), B = T[0], D = T[1], W = z.filter(function(fe) {
      var Xe;
      return fe.type === Ui && ((Xe = fe.activity) === null || Xe === void 0 ? void 0 : Xe.type) === Vi;
    }), Y = W.reduce(function(fe, Xe) {
      return fe[Xe.activity.id] = Mc(Xe.activity, b.machine, L, l), fe;
    }, t ? Z({}, t.children) : {}), H = p ? e.configuration : t ? t.configuration : [], U = kn(H, this), ie = new yr({ value: v || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: v ? x ? vc(x, v) : void 0 : t ? t.historyValue : void 0, history: !v || e.source ? t : void 0, actions: v ? D : [], activities: v ? M : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: Y, done: U, tags: Qs(H), machine: this }), oe = i !== L;
    ie.changed = l.name === Yi || oe;
    var V = ie.history;
    V && delete V.history;
    var ce = !U && (this._transient || h.some(function(fe) {
      return fe._transient;
    }));
    if (!p && (!ce || l.name === hi))
      return ie;
    var De = ie;
    if (!U)
      for (ce && (De = this.resolveRaisedTransition(De, { type: ic }, l)); B.length; ) {
        var We = B.shift();
        De = this.resolveRaisedTransition(De, We._event, l);
      }
    var qe = De.changed || (V ? !!De.actions.length || oe || typeof V.value != typeof De.value || !el(De.value, V.value) : void 0);
    return De.changed = qe, De.history = V, De;
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
      t = no(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
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
      ge(t.target) ? e = fi(t.target) ? Xi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (no(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Ki(this.initialStateValue);
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
      return l ? Ne(Ki(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = cc(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Ki(c).map(function(f) {
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
        for (var b = ve(Object.keys(c)), h = b.next(); !h.done; h = b.next()) {
          var p = h.value, v = c[p];
          if (v.states)
            try {
              for (var x = (i = void 0, ve(v.events)), S = x.next(); !S.done; S = x.next()) {
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
          h && !h.done && (t = b.return) && t.call(b);
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
          } catch (b) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(b.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = bc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(h) {
      return ge(h) && h[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), b = Z(Z({}, e), { actions: to($t(e.actions)), cond: Pa(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Z(Z({}, b), { target: b.target ? b.target.map(function(h) {
        return "#".concat(h.id);
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
      var c = this.config.on, f = so, b = c[f], h = b === void 0 ? [] : b, p = oi(c, [typeof f == "symbol" ? f : f + ""]);
      l = Ne(Object.keys(p).map(function(z) {
        !Le && z === hi && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = On(z, p[z]);
        return Le || vh(i, z, L), L;
      }).concat(On(so, h)));
    }
    var v = this.config.always ? On("", this.config.always) : [], x = this.config.onDone ? On(String(ro(this.id)), this.config.onDone) : [];
    Le || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var S = Ne(this.invoke.map(function(z) {
      var L = [];
      return z.onDone && L.push.apply(L, ze([], me(On(String(pi(z.id)), z.onDone)), false)), z.onError && L.push.apply(L, ze([], me(On(String(Pn(z.id)), z.onError)), false)), L;
    })), M = this.after, A = Ne(ze(ze(ze(ze([], me(x), false), me(S), false), me(l), false), me(v), false).map(function(z) {
      return $t(z).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var C = ve(M), P = C.next(); !P.done; P = C.next()) {
        var k = P.value;
        A.push(k);
      }
    } catch (z) {
      e = { error: z };
    } finally {
      try {
        P && !P.done && (t = C.return) && t.call(C);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return A;
  }, r;
}();
function yt(r, e) {
  return new jc(r, e);
}
__name(yt, "yt");
u(yt, "createMachine");
var lo = ii(Da(), 1);
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
      this.draggableMachine = yt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, lo.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Na(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), ol(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("operation-xl")));
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
        (0, lo.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Na(this.dropzone), isOnPaletteDropzone: () => ol(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Na(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = st(this.draggableMachine).onTransition((i) => {
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
      return K.notNull(i), !ol(i) && !Na(i) ? null : i;
    }
    set snapTargets(i) {
      (0, lo.default)(this).draggable({ modifiers: [lo.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
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
  __name(e, "e");
  return u(e, "DraggableMixinClass"), _([N], e.prototype, "operationX", 2), _([N], e.prototype, "operationY", 2), _([N], e.prototype, "grabbed", 2), _([N], e.prototype, "dragging", 2), _([N], e.prototype, "snapped", 2), _([N], e.prototype, "bit", 2), _([N], e.prototype, "debugDraggable", 2), e;
}
__name(Me, "Me");
u(Me, "DraggableMixin");
var zn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Hc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), _([N], e.prototype, "flag", 2), e;
}
__name(Hc, "Hc");
u(Hc, "FlaggableMixin");
var Fe = "top";
var rt = "bottom";
var Ze = "right";
var Ve = "left";
var Ga = "auto";
var on = [Fe, rt, Ze, Ve];
var jr = "start";
var Rn = "end";
var $c = "clippingParents";
var qa = "viewport";
var vi = "popper";
var Fc = "reference";
var al = on.reduce(function(r, e) {
  return r.concat([e + "-" + jr, e + "-" + Rn]);
}, []);
var La = [].concat(on, [Ga]).reduce(function(r, e) {
  return r.concat([e, e + "-" + jr, e + "-" + Rn]);
}, []);
var mh = "beforeRead";
var gh = "read";
var bh = "afterRead";
var yh = "beforeMain";
var wh = "main";
var xh = "afterMain";
var Eh = "beforeWrite";
var Sh = "write";
var Ch = "afterWrite";
var Wc = [mh, gh, bh, yh, wh, xh, Eh, Sh, Ch];
function lt(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(lt, "lt");
u(lt, "getNodeName");
function Ye(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Ye, "Ye");
u(Ye, "getWindow");
function Mr(r) {
  var e = Ye(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Mr, "Mr");
u(Mr, "isElement");
function nt(r) {
  var e = Ye(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(nt, "nt");
u(nt, "isHTMLElement");
function ja(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Ye(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(ja, "ja");
u(ja, "isShadowRoot");
function Th(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !nt(c) || !lt(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var b = l[f];
      b === false ? c.removeAttribute(f) : c.setAttribute(f, b === true ? "" : b);
    }));
  });
}
__name(Th, "Th");
u(Th, "applyStyles");
function Oh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, f = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), b = f.reduce(function(h, p) {
        return h[p] = "", h;
      }, {});
      !nt(l) || !lt(l) || (Object.assign(l.style, b), Object.keys(c).forEach(function(h) {
        l.removeAttribute(h);
      }));
    });
  };
}
__name(Oh, "Oh");
u(Oh, "effect");
var uo = { name: "applyStyles", enabled: true, phase: "write", fn: Th, effect: Oh, requires: ["computeStyles"] };
function ut(r) {
  return r.split("-")[0];
}
__name(ut, "ut");
u(ut, "getBasePlacement");
var wr = Math.max;
var Dn = Math.min;
var Br = Math.round;
function Jt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (nt(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Br(t.width) / f || 1), c > 0 && (l = Br(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Jt, "Jt");
u(Jt, "getBoundingClientRect");
function Nn(r) {
  var e = Jt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Nn, "Nn");
u(Nn, "getLayoutRect");
function co(r, e) {
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
__name(co, "co");
u(co, "contains");
function Pt(r) {
  return Ye(r).getComputedStyle(r);
}
__name(Pt, "Pt");
u(Pt, "getComputedStyle");
function sl(r) {
  return ["table", "td", "th"].indexOf(lt(r)) >= 0;
}
__name(sl, "sl");
u(sl, "isTableElement");
function wt(r) {
  return ((Mr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(wt, "wt");
u(wt, "getDocumentElement");
function Hr(r) {
  return lt(r) === "html" ? r : r.assignedSlot || r.parentNode || (ja(r) ? r.host : null) || wt(r);
}
__name(Hr, "Hr");
u(Hr, "getParentNode");
function Uc(r) {
  return !nt(r) || Pt(r).position === "fixed" ? null : r.offsetParent;
}
__name(Uc, "Uc");
u(Uc, "getTrueOffsetParent");
function Mh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && nt(r)) {
    var i = Pt(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = Hr(r); nt(l) && ["html", "body"].indexOf(lt(l)) < 0; ) {
    var c = Pt(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(Mh, "Mh");
u(Mh, "getContainingBlock");
function xr(r) {
  for (var e = Ye(r), t = Uc(r); t && sl(t) && Pt(t).position === "static"; )
    t = Uc(t);
  return t && (lt(t) === "html" || lt(t) === "body" && Pt(t).position === "static") ? e : t || Mh(r) || e;
}
__name(xr, "xr");
u(xr, "getOffsetParent");
function Gn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Gn, "Gn");
u(Gn, "getMainAxisFromPlacement");
function qn(r, e, t) {
  return wr(r, Dn(e, t));
}
__name(qn, "qn");
u(qn, "within");
function Vc(r, e, t) {
  var i = qn(r, e, t);
  return i > t ? t : i;
}
__name(Vc, "Vc");
u(Vc, "withinMaxClamp");
function po() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(po, "po");
u(po, "getFreshSideObject");
function fo(r) {
  return Object.assign({}, po(), r);
}
__name(fo, "fo");
u(fo, "mergePaddingObject");
function ho(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(ho, "ho");
u(ho, "expandToHashMap");
var Ph = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, fo(typeof e != "number" ? e : ho(e, on));
}, "toPaddingObject");
function Ih(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, b = ut(t.placement), h = Gn(b), p = [Ve, Ze].indexOf(b) >= 0, v = p ? "height" : "width";
  if (!(!c || !f)) {
    var x = Ph(l.padding, t), S = Nn(c), M = h === "y" ? Fe : Ve, A = h === "y" ? rt : Ze, C = t.rects.reference[v] + t.rects.reference[h] - f[h] - t.rects.popper[v], P = f[h] - t.rects.reference[h], k = xr(c), z = k ? h === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, L = C / 2 - P / 2, T = x[M], B = z - S[v] - x[A], D = z / 2 - S[v] / 2 + L, W = qn(T, D, B), Y = h;
    t.modifiersData[i] = (e = {}, e[Y] = W, e.centerOffset = W - D, e);
  }
}
__name(Ih, "Ih");
u(Ih, "arrow");
function Ah(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !co(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(Ah, "Ah");
u(Ah, "effect");
var Yc = { name: "arrow", enabled: true, phase: "main", fn: Ih, effect: Ah, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qt(r) {
  return r.split("-")[1];
}
__name(Qt, "Qt");
u(Qt, "getVariation");
var _h = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function kh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Br(e * l) / l || 0, y: Br(t * l) / l || 0 };
}
__name(kh, "kh");
u(kh, "roundOffsetsByDPR");
function Xc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, b = r.position, h = r.gpuAcceleration, p = r.adaptive, v = r.roundOffsets, x = r.isFixed, S = f.x, M = S === void 0 ? 0 : S, A = f.y, C = A === void 0 ? 0 : A, P = typeof v == "function" ? v({ x: M, y: C }) : { x: M, y: C };
  M = P.x, C = P.y;
  var k = f.hasOwnProperty("x"), z = f.hasOwnProperty("y"), L = Ve, T = Fe, B = window;
  if (p) {
    var D = xr(t), W = "clientHeight", Y = "clientWidth";
    if (D === Ye(t) && (D = wt(t), Pt(D).position !== "static" && b === "absolute" && (W = "scrollHeight", Y = "scrollWidth")), D = D, l === Fe || (l === Ve || l === Ze) && c === Rn) {
      T = rt;
      var H = x && B.visualViewport ? B.visualViewport.height : D[W];
      C -= H - i.height, C *= h ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === rt) && c === Rn) {
      L = Ze;
      var U = x && B.visualViewport ? B.visualViewport.width : D[Y];
      M -= U - i.width, M *= h ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: b }, p && _h), oe = v === true ? kh({ x: M, y: C }) : { x: M, y: C };
  if (M = oe.x, C = oe.y, h) {
    var V;
    return Object.assign({}, ie, (V = {}, V[T] = z ? "0" : "", V[L] = k ? "0" : "", V.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + M + "px, " + C + "px)" : "translate3d(" + M + "px, " + C + "px, 0)", V));
  }
  return Object.assign({}, ie, (e = {}, e[T] = z ? C + "px" : "", e[L] = k ? M + "px" : "", e.transform = "", e));
}
__name(Xc, "Xc");
u(Xc, "mapToStyles");
function zh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, b = t.roundOffsets, h = b === void 0 ? true : b;
  if (false)
    var p;
  var v = { placement: ut(e.placement), variation: Qt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Xc(Object.assign({}, v, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: h })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Xc(Object.assign({}, v, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: h })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(zh, "zh");
u(zh, "computeStyles");
var Zc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: zh, data: {} };
var Ba = { passive: true };
function Rh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, b = f === void 0 ? true : f, h = Ye(e.elements.popper), p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && p.forEach(function(v) {
    v.addEventListener("scroll", t.update, Ba);
  }), b && h.addEventListener("resize", t.update, Ba), function() {
    c && p.forEach(function(v) {
      v.removeEventListener("scroll", t.update, Ba);
    }), b && h.removeEventListener("resize", t.update, Ba);
  };
}
__name(Rh, "Rh");
u(Rh, "effect");
var Kc = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Rh, data: {} };
var Dh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Dh[e];
  });
}
__name(mi, "mi");
u(mi, "getOppositePlacement");
var Nh = { start: "end", end: "start" };
function Ha(r) {
  return r.replace(/start|end/g, function(e) {
    return Nh[e];
  });
}
__name(Ha, "Ha");
u(Ha, "getOppositeVariationPlacement");
function Ln(r) {
  var e = Ye(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(Ln, "Ln");
u(Ln, "getWindowScroll");
function jn(r) {
  return Jt(wt(r)).left + Ln(r).scrollLeft;
}
__name(jn, "jn");
u(jn, "getWindowScrollBarX");
function ll(r) {
  var e = Ye(r), t = wt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, b = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, b = i.offsetTop)), { width: l, height: c, x: f + jn(r), y: b };
}
__name(ll, "ll");
u(ll, "getViewportRect");
function ul(r) {
  var e, t = wt(r), i = Ln(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = wr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = wr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), b = -i.scrollLeft + jn(r), h = -i.scrollTop;
  return Pt(l || t).direction === "rtl" && (b += wr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: b, y: h };
}
__name(ul, "ul");
u(ul, "getDocumentRect");
function Bn(r) {
  var e = Pt(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(Bn, "Bn");
u(Bn, "isScrollParent");
function $a(r) {
  return ["html", "body", "#document"].indexOf(lt(r)) >= 0 ? r.ownerDocument.body : nt(r) && Bn(r) ? r : $a(Hr(r));
}
__name($a, "$a");
u($a, "getScrollParent");
function an(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = $a(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Ye(i), f = l ? [c].concat(c.visualViewport || [], Bn(i) ? i : []) : i, b = e.concat(f);
  return l ? b : b.concat(an(Hr(f)));
}
__name(an, "an");
u(an, "listScrollParents");
function gi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(gi, "gi");
u(gi, "rectToClientRect");
function Gh(r) {
  var e = Jt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(Gh, "Gh");
u(Gh, "getInnerBoundingClientRect");
function Jc(r, e) {
  return e === qa ? gi(ll(r)) : Mr(e) ? Gh(e) : gi(ul(wt(r)));
}
__name(Jc, "Jc");
u(Jc, "getClientRectFromMixedType");
function qh(r) {
  var e = an(Hr(r)), t = ["absolute", "fixed"].indexOf(Pt(r).position) >= 0, i = t && nt(r) ? xr(r) : r;
  return Mr(i) ? e.filter(function(l) {
    return Mr(l) && co(l, i) && lt(l) !== "body";
  }) : [];
}
__name(qh, "qh");
u(qh, "getClippingParents");
function cl(r, e, t) {
  var i = e === "clippingParents" ? qh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(b, h) {
    var p = Jc(r, h);
    return b.top = wr(p.top, b.top), b.right = Dn(p.right, b.right), b.bottom = Dn(p.bottom, b.bottom), b.left = wr(p.left, b.left), b;
  }, Jc(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(cl, "cl");
u(cl, "getClippingRect");
function vo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? ut(i) : null, c = i ? Qt(i) : null, f = e.x + e.width / 2 - t.width / 2, b = e.y + e.height / 2 - t.height / 2, h;
  switch (l) {
    case Fe:
      h = { x: f, y: e.y - t.height };
      break;
    case rt:
      h = { x: f, y: e.y + e.height };
      break;
    case Ze:
      h = { x: e.x + e.width, y: b };
      break;
    case Ve:
      h = { x: e.x - t.width, y: b };
      break;
    default:
      h = { x: e.x, y: e.y };
  }
  var p = l ? Gn(l) : null;
  if (p != null) {
    var v = p === "y" ? "height" : "width";
    switch (c) {
      case jr:
        h[p] = h[p] - (e[v] / 2 - t[v] / 2);
        break;
      case Rn:
        h[p] = h[p] + (e[v] / 2 - t[v] / 2);
        break;
      default:
    }
  }
  return h;
}
__name(vo, "vo");
u(vo, "computeOffsets");
function Er(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? $c : c, b = t.rootBoundary, h = b === void 0 ? qa : b, p = t.elementContext, v = p === void 0 ? vi : p, x = t.altBoundary, S = x === void 0 ? false : x, M = t.padding, A = M === void 0 ? 0 : M, C = fo(typeof A != "number" ? A : ho(A, on)), P = v === vi ? Fc : vi, k = r.rects.popper, z = r.elements[S ? P : v], L = cl(Mr(z) ? z : z.contextElement || wt(r.elements.popper), f, h), T = Jt(r.elements.reference), B = vo({ reference: T, element: k, strategy: "absolute", placement: l }), D = gi(Object.assign({}, k, B)), W = v === vi ? D : T, Y = { top: L.top - W.top + C.top, bottom: W.bottom - L.bottom + C.bottom, left: L.left - W.left + C.left, right: W.right - L.right + C.right }, H = r.modifiersData.offset;
  if (v === vi && H) {
    var U = H[l];
    Object.keys(Y).forEach(function(ie) {
      var oe = [Ze, rt].indexOf(ie) >= 0 ? 1 : -1, V = [Fe, rt].indexOf(ie) >= 0 ? "y" : "x";
      Y[ie] += U[V] * oe;
    });
  }
  return Y;
}
__name(Er, "Er");
u(Er, "detectOverflow");
function pl(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, b = t.flipVariations, h = t.allowedAutoPlacements, p = h === void 0 ? La : h, v = Qt(i), x = v ? b ? al : al.filter(function(A) {
    return Qt(A) === v;
  }) : on, S = x.filter(function(A) {
    return p.indexOf(A) >= 0;
  });
  S.length === 0 && (S = x);
  var M = S.reduce(function(A, C) {
    return A[C] = Er(r, { placement: C, boundary: l, rootBoundary: c, padding: f })[ut(C)], A;
  }, {});
  return Object.keys(M).sort(function(A, C) {
    return M[A] - M[C];
  });
}
__name(pl, "pl");
u(pl, "computeAutoPlacement");
function Lh(r) {
  if (ut(r) === Ga)
    return [];
  var e = mi(r);
  return [Ha(r), e, Ha(e)];
}
__name(Lh, "Lh");
u(Lh, "getExpandedFallbackPlacements");
function jh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? true : f, h = t.fallbackPlacements, p = t.padding, v = t.boundary, x = t.rootBoundary, S = t.altBoundary, M = t.flipVariations, A = M === void 0 ? true : M, C = t.allowedAutoPlacements, P = e.options.placement, k = ut(P), z = k === P, L = h || (z || !A ? [mi(P)] : Lh(P)), T = [P].concat(L).reduce(function(Q, Tt) {
      return Q.concat(ut(Tt) === Ga ? pl(e, { placement: Tt, boundary: v, rootBoundary: x, padding: p, flipVariations: A, allowedAutoPlacements: C }) : Tt);
    }, []), B = e.rects.reference, D = e.rects.popper, W = /* @__PURE__ */ new Map(), Y = true, H = T[0], U = 0; U < T.length; U++) {
      var ie = T[U], oe = ut(ie), V = Qt(ie) === jr, ce = [Fe, rt].indexOf(oe) >= 0, De = ce ? "width" : "height", We = Er(e, { placement: ie, boundary: v, rootBoundary: x, altBoundary: S, padding: p }), qe = ce ? V ? Ze : Ve : V ? rt : Fe;
      B[De] > D[De] && (qe = mi(qe));
      var fe = mi(qe), Xe = [];
      if (c && Xe.push(We[oe] <= 0), b && Xe.push(We[qe] <= 0, We[fe] <= 0), Xe.every(function(Q) {
        return Q;
      })) {
        H = ie, Y = false;
        break;
      }
      W.set(ie, Xe);
    }
    if (Y)
      for (var Qe = A ? 3 : 1, Nt = u(function(Tt) {
        var Ot = T.find(function(kr) {
          var Vt = W.get(kr);
          if (Vt)
            return Vt.slice(0, Tt).every(function(hr) {
              return hr;
            });
        });
        if (Ot)
          return H = Ot, "break";
      }, "_loop"), At = Qe; At > 0; At--) {
        var _r = Nt(At);
        if (_r === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
__name(jh, "jh");
u(jh, "flip");
var Qc = { name: "flip", enabled: true, phase: "main", fn: jh, requiresIfExists: ["offset"], data: { _skip: false } };
function ep(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(ep, "ep");
u(ep, "getSideOffsets");
function tp(r) {
  return [Fe, Ze, rt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
__name(tp, "tp");
u(tp, "isAnySideFullyClipped");
function Bh(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = Er(e, { elementContext: "reference" }), b = Er(e, { altBoundary: true }), h = ep(f, i), p = ep(b, l, c), v = tp(h), x = tp(p);
  e.modifiersData[t] = { referenceClippingOffsets: h, popperEscapeOffsets: p, isReferenceHidden: v, hasPopperEscaped: x }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": v, "data-popper-escaped": x });
}
__name(Bh, "Bh");
u(Bh, "hide");
var rp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Bh };
function Hh(r, e, t) {
  var i = ut(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], b = c[1];
  return f = f || 0, b = (b || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: b, y: f } : { x: f, y: b };
}
__name(Hh, "Hh");
u(Hh, "distanceAndSkiddingToXY");
function $h(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = La.reduce(function(v, x) {
    return v[x] = Hh(x, e.rects, c), v;
  }, {}), b = f[e.placement], h = b.x, p = b.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += h, e.modifiersData.popperOffsets.y += p), e.modifiersData[i] = f;
}
__name($h, "$h");
u($h, "offset");
var np = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: $h };
function Fh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = vo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(Fh, "Fh");
u(Fh, "popperOffsets");
var ip = { name: "popperOffsets", enabled: true, phase: "read", fn: Fh, data: {} };
function dl(r) {
  return r === "x" ? "y" : "x";
}
__name(dl, "dl");
u(dl, "getAltAxis");
function Wh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, b = f === void 0 ? false : f, h = t.boundary, p = t.rootBoundary, v = t.altBoundary, x = t.padding, S = t.tether, M = S === void 0 ? true : S, A = t.tetherOffset, C = A === void 0 ? 0 : A, P = Er(e, { boundary: h, rootBoundary: p, padding: x, altBoundary: v }), k = ut(e.placement), z = Qt(e.placement), L = !z, T = Gn(k), B = dl(T), D = e.modifiersData.popperOffsets, W = e.rects.reference, Y = e.rects.popper, H = typeof C == "function" ? C(Object.assign({}, e.rects, { placement: e.placement })) : C, U = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ie = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!D) {
    if (c) {
      var V, ce = T === "y" ? Fe : Ve, De = T === "y" ? rt : Ze, We = T === "y" ? "height" : "width", qe = D[T], fe = qe + P[ce], Xe = qe - P[De], Qe = M ? -Y[We] / 2 : 0, Nt = z === jr ? W[We] : Y[We], At = z === jr ? -Y[We] : -W[We], _r = e.elements.arrow, Q = M && _r ? Nn(_r) : { width: 0, height: 0 }, Tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : po(), Ot = Tt[ce], kr = Tt[De], Vt = qn(0, W[We], Q[We]), hr = L ? W[We] / 2 - Qe - Vt - Ot - U.mainAxis : Nt - Vt - Ot - U.mainAxis, vr = L ? -W[We] / 2 + Qe + Vt + kr + U.mainAxis : At + Vt + kr + U.mainAxis, Gt = e.elements.arrow && xr(e.elements.arrow), Vn = Gt ? T === "y" ? Gt.clientTop || 0 : Gt.clientLeft || 0 : 0, _t = (V = ie == null ? void 0 : ie[T]) != null ? V : 0, pn = qe + hr - _t - Vn, we = qe + vr - _t, Vr = qn(M ? Dn(fe, pn) : fe, qe, M ? wr(Xe, we) : Xe);
      D[T] = Vr, oe[T] = Vr - qe;
    }
    if (b) {
      var Yr, kt = T === "x" ? Fe : Ve, dn = T === "x" ? rt : Ze, mr = D[B], gr = B === "y" ? "height" : "width", fn = mr + P[kt], dt = mr - P[dn], zr = [Fe, Ve].indexOf(k) !== -1, qt = (Yr = ie == null ? void 0 : ie[B]) != null ? Yr : 0, Yn = zr ? fn : mr - W[gr] - Y[gr] - qt + U.altAxis, Rr = zr ? mr + W[gr] + Y[gr] - qt - U.altAxis : dt, hn = M && zr ? Vc(Yn, mr, Rr) : qn(M ? Yn : fn, mr, M ? Rr : dt);
      D[B] = hn, oe[B] = hn - mr;
    }
    e.modifiersData[i] = oe;
  }
}
__name(Wh, "Wh");
u(Wh, "preventOverflow");
var op = { name: "preventOverflow", enabled: true, phase: "main", fn: Wh, requiresIfExists: ["offset"] };
function fl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(fl, "fl");
u(fl, "getHTMLElementScroll");
function hl(r) {
  return r === Ye(r) || !nt(r) ? Ln(r) : fl(r);
}
__name(hl, "hl");
u(hl, "getNodeScroll");
function Uh(r) {
  var e = r.getBoundingClientRect(), t = Br(e.width) / r.offsetWidth || 1, i = Br(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(Uh, "Uh");
u(Uh, "isElementScaled");
function vl(r, e, t) {
  t === void 0 && (t = false);
  var i = nt(e), l = nt(e) && Uh(e), c = wt(e), f = Jt(r, l), b = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 };
  return (i || !i && !t) && ((lt(e) !== "body" || Bn(c)) && (b = hl(e)), nt(e) ? (h = Jt(e, true), h.x += e.clientLeft, h.y += e.clientTop) : c && (h.x = jn(c))), { x: f.left + b.scrollLeft - h.x, y: f.top + b.scrollTop - h.y, width: f.width, height: f.height };
}
__name(vl, "vl");
u(vl, "getCompositeRect");
function Vh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(b) {
      if (!t.has(b)) {
        var h = e.get(b);
        h && l(h);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(Vh, "Vh");
u(Vh, "order");
function ml(r) {
  var e = Vh(r);
  return Wc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(ml, "ml");
u(ml, "orderModifiers");
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
__name(gl, "gl");
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
__name(bl, "bl");
u(bl, "mergeByName");
var ap = { placement: "bottom", modifiers: [], strategy: "absolute" };
function sp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(sp, "sp");
u(sp, "areValidElements");
function lp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? ap : l;
  return u(function(b, h, p) {
    p === void 0 && (p = c);
    var v = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ap, c), modifiersData: {}, elements: { reference: b, popper: h }, attributes: {}, styles: {} }, x = [], S = false, M = { state: v, setOptions: u(function(k) {
      var z = typeof k == "function" ? k(v.options) : k;
      C(), v.options = Object.assign({}, c, v.options, z), v.scrollParents = { reference: Mr(b) ? an(b) : b.contextElement ? an(b.contextElement) : [], popper: an(h) };
      var L = ml(bl([].concat(i, v.options.modifiers)));
      if (v.orderedModifiers = L.filter(function(ie) {
        return ie.enabled;
      }), false) {
        var T;
        if (getBasePlacement(v.options.placement) === auto)
          var B;
        var D, W, Y, H, U;
      }
      return A(), M.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!S) {
        var k = v.elements, z = k.reference, L = k.popper;
        if (!!sp(z, L)) {
          v.rects = { reference: vl(z, xr(L), v.options.strategy === "fixed"), popper: Nn(L) }, v.reset = false, v.placement = v.options.placement, v.orderedModifiers.forEach(function(ie) {
            return v.modifiersData[ie.name] = Object.assign({}, ie.data);
          });
          for (var T = 0, B = 0; B < v.orderedModifiers.length; B++) {
            if (v.reset === true) {
              v.reset = false, B = -1;
              continue;
            }
            var D = v.orderedModifiers[B], W = D.fn, Y = D.options, H = Y === void 0 ? {} : Y, U = D.name;
            typeof W == "function" && (v = W({ state: v, options: H, name: U, instance: M }) || v);
          }
        }
      }
    }, "forceUpdate"), update: gl(function() {
      return new Promise(function(P) {
        M.forceUpdate(), P(v);
      });
    }), destroy: u(function() {
      C(), S = true;
    }, "destroy") };
    if (!sp(b, h))
      return M;
    M.setOptions(p).then(function(P) {
      !S && p.onFirstUpdate && p.onFirstUpdate(P);
    });
    function A() {
      v.orderedModifiers.forEach(function(P) {
        var k = P.name, z = P.options, L = z === void 0 ? {} : z, T = P.effect;
        if (typeof T == "function") {
          var B = T({ state: v, name: k, instance: M, options: L }), D = u(function() {
          }, "noopFn");
          x.push(B || D);
        }
      });
    }
    __name(A, "A");
    u(A, "runModifierEffects");
    function C() {
      x.forEach(function(P) {
        return P();
      }), x = [];
    }
    __name(C, "C");
    return u(C, "cleanupModifierEffects"), M;
  }, "createPopper");
}
__name(lp, "lp");
u(lp, "popperGenerator");
var Yh = [Kc, ip, Zc, uo, np, Qc, op, Yc, rp];
var yl = lp({ defaultModifiers: Yh });
var $r = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Xh = "tippy-box";
var bp = "tippy-content";
var Zh = "tippy-backdrop";
var yp = "tippy-arrow";
var wp = "tippy-svg-arrow";
var Hn = { passive: true, capture: true };
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
__name(wl, "wl");
u(wl, "getValueAtIndexOrReturn");
function Ol(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Ol, "Ol");
u(Ol, "isType");
function Ep(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(Ep, "Ep");
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
__name(up, "up");
u(up, "debounce");
function Kh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
__name(Kh, "Kh");
u(Kh, "removeProperties");
function Jh(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Jh, "Jh");
u(Jh, "splitBySpaces");
function $n(r) {
  return [].concat(r);
}
__name($n, "$n");
u($n, "normalizeToArray");
function cp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(cp, "cp");
u(cp, "pushIfUnique");
function Qh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(Qh, "Qh");
u(Qh, "unique");
function ev(r) {
  return r.split("-")[0];
}
__name(ev, "ev");
u(ev, "getBasePlacement");
function Wa(r) {
  return [].slice.call(r);
}
__name(Wa, "Wa");
u(Wa, "arrayFrom");
function pp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(pp, "pp");
u(pp, "removeUndefinedProps");
function bi() {
  return document.createElement("div");
}
__name(bi, "bi");
u(bi, "div");
function Ua(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Ol(r, e);
  });
}
__name(Ua, "Ua");
u(Ua, "isElement");
function tv(r) {
  return Ol(r, "NodeList");
}
__name(tv, "tv");
u(tv, "isNodeList");
function rv(r) {
  return Ol(r, "MouseEvent");
}
__name(rv, "rv");
u(rv, "isMouseEvent");
function nv(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(nv, "nv");
u(nv, "isReferenceElement");
function iv(r) {
  return Ua(r) ? [r] : tv(r) ? Wa(r) : Array.isArray(r) ? r : Wa(document.querySelectorAll(r));
}
__name(iv, "iv");
u(iv, "getArrayOfElements");
function xl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(xl, "xl");
u(xl, "setTransitionDuration");
function dp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(dp, "dp");
u(dp, "setVisibilityState");
function ov(r) {
  var e, t = $n(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(ov, "ov");
u(ov, "getOwnerDocument");
function av(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, b = l.props, h = b.interactiveBorder, p = ev(f.placement), v = f.modifiersData.offset;
    if (!v)
      return true;
    var x = p === "bottom" ? v.top.y : 0, S = p === "top" ? v.bottom.y : 0, M = p === "right" ? v.left.x : 0, A = p === "left" ? v.right.x : 0, C = c.top - i + x > h, P = i - c.bottom - S > h, k = c.left - t + M > h, z = t - c.right - A > h;
    return C || P || k || z;
  });
}
__name(av, "av");
u(av, "isCursorOutsideInteractiveBorder");
function El(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(El, "El");
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
__name(fp, "fp");
u(fp, "actualContains");
var Pr = { isTouch: false };
var hp = 0;
function sv() {
  Pr.isTouch || (Pr.isTouch = true, window.performance && document.addEventListener("mousemove", Sp));
}
__name(sv, "sv");
u(sv, "onDocumentTouchStart");
function Sp() {
  var r = performance.now();
  r - hp < 20 && (Pr.isTouch = false, document.removeEventListener("mousemove", Sp)), hp = r;
}
__name(Sp, "Sp");
u(Sp, "onDocumentMouseMove");
function lv() {
  var r = document.activeElement;
  if (nv(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(lv, "lv");
u(lv, "onWindowBlur");
function uv() {
  document.addEventListener("touchstart", sv, Hn), window.addEventListener("blur", lv);
}
__name(uv, "uv");
u(uv, "bindGlobalEventListeners");
var cv = typeof window != "undefined" && typeof document != "undefined";
var pv = cv ? !!window.msCrypto : false;
var dv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var fv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, dv, fv);
var hv = Object.keys(Sr);
var vv = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    Sr[i] = e[i];
  });
}, "setDefaultProps");
function Cp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var b;
      i[c] = r[c] !== void 0 ? r[c] : (b = Sr[c]) != null ? b : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(Cp, "Cp");
u(Cp, "getExtendedPassedProps");
function mv(r, e) {
  var t = e ? Object.keys(Cp(Object.assign({}, Sr, { plugins: e }))) : hv, i = t.reduce(function(l, c) {
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
__name(mv, "mv");
u(mv, "getDataAttributeProps");
function vp(r, e) {
  var t = Object.assign({}, e, { content: Ep(e.content, [r]) }, e.ignoreAttributes ? {} : mv(r, e.plugins));
  return t.aria = Object.assign({}, Sr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(vp, "vp");
u(vp, "evaluateProps");
var gv = u(function() {
  return "innerHTML";
}, "innerHTML");
function Cl(r, e) {
  r[gv()] = e;
}
__name(Cl, "Cl");
u(Cl, "dangerouslySetInnerHTML");
function mp(r) {
  var e = bi();
  return r === true ? e.className = yp : (e.className = wp, Ua(r) ? e.appendChild(r) : Cl(e, r)), e;
}
__name(mp, "mp");
u(mp, "createArrowElement");
function gp(r, e) {
  Ua(e.content) ? (Cl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Cl(r, e.content) : r.textContent = e.content);
}
__name(gp, "gp");
u(gp, "setContent");
function Tl(r) {
  var e = r.firstElementChild, t = Wa(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(bp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(yp) || i.classList.contains(wp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Zh);
  }) };
}
__name(Tl, "Tl");
u(Tl, "getChildren");
function Tp(r) {
  var e = bi(), t = bi();
  t.className = Xh, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = bi();
  i.className = bp, i.setAttribute("data-state", "hidden"), gp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var b = Tl(e), h = b.box, p = b.content, v = b.arrow;
    f.theme ? h.setAttribute("data-theme", f.theme) : h.removeAttribute("data-theme"), typeof f.animation == "string" ? h.setAttribute("data-animation", f.animation) : h.removeAttribute("data-animation"), f.inertia ? h.setAttribute("data-inertia", "") : h.removeAttribute("data-inertia"), h.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? h.setAttribute("role", f.role) : h.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && gp(p, r.props), f.arrow ? v ? c.arrow !== f.arrow && (h.removeChild(v), h.appendChild(mp(f.arrow))) : h.appendChild(mp(f.arrow)) : v && h.removeChild(v);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(Tp, "Tp");
u(Tp, "render");
Tp.$$tippy = true;
var bv = 1;
var Fa = [];
var Sl = [];
function yv(r, e) {
  var t = vp(r, Object.assign({}, Sr, Cp(pp(e)))), i, l, c, f = false, b = false, h = false, p = false, v, x, S, M = [], A = up(pn, t.interactiveDebounce), C, P = bv++, k = null, z = Qh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, T = { id: P, reference: r, popper: bi(), popperInstance: k, props: t, state: L, plugins: z, clearDelayTimeouts: Yn, setProps: Rr, setContent: hn, show: Ci, hide: Io, hideWithInteractivity: Ti, enable: zr, disable: qt, unmount: Oi, destroy: Ao };
  if (!t.render)
    return T;
  var B = t.render(T), D = B.popper, W = B.onUpdate;
  D.setAttribute("data-tippy-root", ""), D.id = "tippy-" + T.id, T.popper = D, r._tippy = T, D._tippy = T;
  var Y = z.map(function(j) {
    return j.fn(T);
  }), H = r.hasAttribute("aria-expanded");
  return Gt(), Qe(), qe(), fe("onCreate", [T]), t.showOnCreate && fn(), D.addEventListener("mouseenter", function() {
    T.props.interactive && T.state.isVisible && T.clearDelayTimeouts();
  }), D.addEventListener("mouseleave", function() {
    T.props.interactive && T.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", A);
  }), T;
  function U() {
    var j = T.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  __name(U, "U");
  u(U, "getNormalizedTouchSettings");
  function ie() {
    return U()[0] === "hold";
  }
  __name(ie, "ie");
  u(ie, "getIsCustomTouchBehavior");
  function oe() {
    var j;
    return !!((j = T.props.render) != null && j.$$tippy);
  }
  __name(oe, "oe");
  u(oe, "getIsDefaultRenderFn");
  function V() {
    return C || r;
  }
  __name(V, "V");
  u(V, "getCurrentTarget");
  function ce() {
    var j = V().parentNode;
    return j ? ov(j) : document;
  }
  __name(ce, "ce");
  u(ce, "getDocument");
  function De() {
    return Tl(D);
  }
  __name(De, "De");
  u(De, "getDefaultTemplateChildren");
  function We(j) {
    return T.state.isMounted && !T.state.isVisible || Pr.isTouch || v && v.type === "focus" ? 0 : wl(T.props.delay, j ? 0 : 1, Sr.delay);
  }
  __name(We, "We");
  u(We, "getDelay");
  function qe(j) {
    j === void 0 && (j = false), D.style.pointerEvents = T.props.interactive && !j ? "" : "none", D.style.zIndex = "" + T.props.zIndex;
  }
  __name(qe, "qe");
  u(qe, "handleStyles");
  function fe(j, re, ae) {
    if (ae === void 0 && (ae = true), Y.forEach(function(he) {
      he[j] && he[j].apply(he, re);
    }), ae) {
      var ye;
      (ye = T.props)[j].apply(ye, re);
    }
  }
  __name(fe, "fe");
  u(fe, "invokeHook");
  function Xe() {
    var j = T.props.aria;
    if (!!j.content) {
      var re = "aria-" + j.content, ae = D.id, ye = $n(T.props.triggerTarget || r);
      ye.forEach(function(he) {
        var ft = he.getAttribute(re);
        if (T.state.isVisible)
          he.setAttribute(re, ft ? ft + " " + ae : ae);
        else {
          var ht = ft && ft.replace(ae, "").trim();
          ht ? he.setAttribute(re, ht) : he.removeAttribute(re);
        }
      });
    }
  }
  __name(Xe, "Xe");
  u(Xe, "handleAriaContentAttribute");
  function Qe() {
    if (!(H || !T.props.aria.expanded)) {
      var j = $n(T.props.triggerTarget || r);
      j.forEach(function(re) {
        T.props.interactive ? re.setAttribute("aria-expanded", T.state.isVisible && re === V() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Qe, "Qe");
  u(Qe, "handleAriaExpandedAttribute");
  function Nt() {
    ce().removeEventListener("mousemove", A), Fa = Fa.filter(function(j) {
      return j !== A;
    });
  }
  __name(Nt, "Nt");
  u(Nt, "cleanupInteractiveMouseListeners");
  function At(j) {
    if (!(Pr.isTouch && (h || j.type === "mousedown"))) {
      var re = j.composedPath && j.composedPath()[0] || j.target;
      if (!(T.props.interactive && fp(D, re))) {
        if ($n(T.props.triggerTarget || r).some(function(ae) {
          return fp(ae, re);
        })) {
          if (Pr.isTouch || T.state.isVisible && T.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [T, j]);
        T.props.hideOnClick === true && (T.clearDelayTimeouts(), T.hide(), b = true, setTimeout(function() {
          b = false;
        }), T.state.isMounted || Ot());
      }
    }
  }
  __name(At, "At");
  u(At, "onDocumentPress");
  function _r() {
    h = true;
  }
  __name(_r, "_r");
  u(_r, "onTouchMove");
  function Q() {
    h = false;
  }
  __name(Q, "Q");
  u(Q, "onTouchStart");
  function Tt() {
    var j = ce();
    j.addEventListener("mousedown", At, true), j.addEventListener("touchend", At, Hn), j.addEventListener("touchstart", Q, Hn), j.addEventListener("touchmove", _r, Hn);
  }
  __name(Tt, "Tt");
  u(Tt, "addDocumentPress");
  function Ot() {
    var j = ce();
    j.removeEventListener("mousedown", At, true), j.removeEventListener("touchend", At, Hn), j.removeEventListener("touchstart", Q, Hn), j.removeEventListener("touchmove", _r, Hn);
  }
  __name(Ot, "Ot");
  u(Ot, "removeDocumentPress");
  function kr(j, re) {
    hr(j, function() {
      !T.state.isVisible && D.parentNode && D.parentNode.contains(D) && re();
    });
  }
  __name(kr, "kr");
  u(kr, "onTransitionedOut");
  function Vt(j, re) {
    hr(j, re);
  }
  __name(Vt, "Vt");
  u(Vt, "onTransitionedIn");
  function hr(j, re) {
    var ae = De().box;
    function ye(he) {
      he.target === ae && (El(ae, "remove", ye), re());
    }
    __name(ye, "ye");
    if (u(ye, "listener"), j === 0)
      return re();
    El(ae, "remove", x), El(ae, "add", ye), x = ye;
  }
  __name(hr, "hr");
  u(hr, "onTransitionEnd");
  function vr(j, re, ae) {
    ae === void 0 && (ae = false);
    var ye = $n(T.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, re, ae), M.push({ node: he, eventType: j, handler: re, options: ae });
    });
  }
  __name(vr, "vr");
  u(vr, "on");
  function Gt() {
    ie() && (vr("touchstart", _t, { passive: true }), vr("touchend", we, { passive: true })), Jh(T.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (vr(j, _t), j) {
          case "mouseenter":
            vr("mouseleave", we);
            break;
          case "focus":
            vr(pv ? "focusout" : "blur", Vr);
            break;
          case "focusin":
            vr("focusout", Vr);
            break;
        }
    });
  }
  __name(Gt, "Gt");
  u(Gt, "addListeners");
  function Vn() {
    M.forEach(function(j) {
      var re = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      re.removeEventListener(ae, ye, he);
    }), M = [];
  }
  __name(Vn, "Vn");
  u(Vn, "removeListeners");
  function _t(j) {
    var re, ae = false;
    if (!(!T.state.isEnabled || Yr(j) || b)) {
      var ye = ((re = v) == null ? void 0 : re.type) === "focus";
      v = j, C = j.currentTarget, Qe(), !T.state.isVisible && rv(j) && Fa.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (T.props.trigger.indexOf("mouseenter") < 0 || f) && T.props.hideOnClick !== false && T.state.isVisible ? ae = true : fn(j), j.type === "click" && (f = !ae), ae && !ye && dt(j);
    }
  }
  __name(_t, "_t");
  u(_t, "onTrigger");
  function pn(j) {
    var re = j.target, ae = V().contains(re) || D.contains(re);
    if (!(j.type === "mousemove" && ae)) {
      var ye = gr().concat(D).map(function(he) {
        var ft, ht = he._tippy, Xr = (ft = ht.popperInstance) == null ? void 0 : ft.state;
        return Xr ? { popperRect: he.getBoundingClientRect(), popperState: Xr, props: t } : null;
      }).filter(Boolean);
      av(ye, j) && (Nt(), dt(j));
    }
  }
  __name(pn, "pn");
  u(pn, "onMouseMove");
  function we(j) {
    var re = Yr(j) || T.props.trigger.indexOf("click") >= 0 && f;
    if (!re) {
      if (T.props.interactive) {
        T.hideWithInteractivity(j);
        return;
      }
      dt(j);
    }
  }
  __name(we, "we");
  u(we, "onMouseLeave");
  function Vr(j) {
    T.props.trigger.indexOf("focusin") < 0 && j.target !== V() || T.props.interactive && j.relatedTarget && D.contains(j.relatedTarget) || dt(j);
  }
  __name(Vr, "Vr");
  u(Vr, "onBlurOrFocusOut");
  function Yr(j) {
    return Pr.isTouch ? ie() !== j.type.indexOf("touch") >= 0 : false;
  }
  __name(Yr, "Yr");
  u(Yr, "isEventListenerStopped");
  function kt() {
    dn();
    var j = T.props, re = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, ft = j.moveTransition, ht = oe() ? Tl(D).arrow : null, Xr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || V() } : r, Mi = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Dr) {
      var Zr = Dr.state;
      if (oe()) {
        var Lt = De(), jt = Lt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Yt) {
          Yt === "placement" ? jt.setAttribute("data-placement", Zr.placement) : Zr.attributes.popper["data-popper-" + Yt] ? jt.setAttribute("data-" + Yt, "") : jt.removeAttribute("data-" + Yt);
        }), Zr.attributes.popper = {};
      }
    }, "fn") }, vt = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !ft } }, Mi];
    oe() && ht && vt.push({ name: "arrow", options: { element: ht, padding: 3 } }), vt.push.apply(vt, (re == null ? void 0 : re.modifiers) || []), T.popperInstance = yl(Xr, D, Object.assign({}, re, { placement: ae, onFirstUpdate: S, modifiers: vt }));
  }
  __name(kt, "kt");
  u(kt, "createPopperInstance");
  function dn() {
    T.popperInstance && (T.popperInstance.destroy(), T.popperInstance = null);
  }
  __name(dn, "dn");
  u(dn, "destroyPopperInstance");
  function mr() {
    var j = T.props.appendTo, re, ae = V();
    T.props.interactive && j === xp || j === "parent" ? re = ae.parentNode : re = Ep(j, [ae]), re.contains(D) || re.appendChild(D), T.state.isMounted = true, kt();
  }
  __name(mr, "mr");
  u(mr, "mount");
  function gr() {
    return Wa(D.querySelectorAll("[data-tippy-root]"));
  }
  __name(gr, "gr");
  u(gr, "getNestedPopperTree");
  function fn(j) {
    T.clearDelayTimeouts(), j && fe("onTrigger", [T, j]), Tt();
    var re = We(true), ae = U(), ye = ae[0], he = ae[1];
    Pr.isTouch && ye === "hold" && he && (re = he), re ? i = setTimeout(function() {
      T.show();
    }, re) : T.show();
  }
  __name(fn, "fn");
  u(fn, "scheduleShow");
  function dt(j) {
    if (T.clearDelayTimeouts(), fe("onUntrigger", [T, j]), !T.state.isVisible) {
      Ot();
      return;
    }
    if (!(T.props.trigger.indexOf("mouseenter") >= 0 && T.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && f)) {
      var re = We(false);
      re ? l = setTimeout(function() {
        T.state.isVisible && T.hide();
      }, re) : c = requestAnimationFrame(function() {
        T.hide();
      });
    }
  }
  __name(dt, "dt");
  u(dt, "scheduleHide");
  function zr() {
    T.state.isEnabled = true;
  }
  __name(zr, "zr");
  u(zr, "enable");
  function qt() {
    T.hide(), T.state.isEnabled = false;
  }
  __name(qt, "qt");
  u(qt, "disable");
  function Yn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(Yn, "Yn");
  u(Yn, "clearDelayTimeouts");
  function Rr(j) {
    if (!T.state.isDestroyed) {
      fe("onBeforeUpdate", [T, j]), Vn();
      var re = T.props, ae = vp(r, Object.assign({}, re, pp(j), { ignoreAttributes: true }));
      T.props = ae, Gt(), re.interactiveDebounce !== ae.interactiveDebounce && (Nt(), A = up(pn, ae.interactiveDebounce)), re.triggerTarget && !ae.triggerTarget ? $n(re.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Qe(), qe(), W && W(re, ae), T.popperInstance && (kt(), gr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [T, j]);
    }
  }
  __name(Rr, "Rr");
  u(Rr, "setProps");
  function hn(j) {
    T.setProps({ content: j });
  }
  __name(hn, "hn");
  u(hn, "setContent");
  function Ci() {
    var j = T.state.isVisible, re = T.state.isDestroyed, ae = !T.state.isEnabled, ye = Pr.isTouch && !T.props.touch, he = wl(T.props.duration, 0, Sr.duration);
    if (!(j || re || ae || ye) && !V().hasAttribute("disabled") && (fe("onShow", [T], false), T.props.onShow(T) !== false)) {
      if (T.state.isVisible = true, oe() && (D.style.visibility = "visible"), qe(), Tt(), T.state.isMounted || (D.style.transition = "none"), oe()) {
        var ft = De(), ht = ft.box, Xr = ft.content;
        xl([ht, Xr], 0);
      }
      S = u(function() {
        var vt;
        if (!(!T.state.isVisible || p)) {
          if (p = true, D.offsetHeight, D.style.transition = T.props.moveTransition, oe() && T.props.animation) {
            var Pi = De(), Dr = Pi.box, Zr = Pi.content;
            xl([Dr, Zr], he), dp([Dr, Zr], "visible");
          }
          Xe(), Qe(), cp(Sl, T), (vt = T.popperInstance) == null || vt.forceUpdate(), fe("onMount", [T]), T.props.animation && oe() && Vt(he, function() {
            T.state.isShown = true, fe("onShown", [T]);
          });
        }
      }, "onFirstUpdate"), mr();
    }
  }
  __name(Ci, "Ci");
  u(Ci, "show");
  function Io() {
    var j = !T.state.isVisible, re = T.state.isDestroyed, ae = !T.state.isEnabled, ye = wl(T.props.duration, 1, Sr.duration);
    if (!(j || re || ae) && (fe("onHide", [T], false), T.props.onHide(T) !== false)) {
      if (T.state.isVisible = false, T.state.isShown = false, p = false, f = false, oe() && (D.style.visibility = "hidden"), Nt(), Ot(), qe(true), oe()) {
        var he = De(), ft = he.box, ht = he.content;
        T.props.animation && (xl([ft, ht], ye), dp([ft, ht], "hidden"));
      }
      Xe(), Qe(), T.props.animation ? oe() && kr(ye, T.unmount) : T.unmount();
    }
  }
  __name(Io, "Io");
  u(Io, "hide");
  function Ti(j) {
    ce().addEventListener("mousemove", A), cp(Fa, A), A(j);
  }
  __name(Ti, "Ti");
  u(Ti, "hideWithInteractivity");
  function Oi() {
    T.state.isVisible && T.hide(), !!T.state.isMounted && (dn(), gr().forEach(function(j) {
      j._tippy.unmount();
    }), D.parentNode && D.parentNode.removeChild(D), Sl = Sl.filter(function(j) {
      return j !== T;
    }), T.state.isMounted = false, fe("onHidden", [T]));
  }
  __name(Oi, "Oi");
  u(Oi, "unmount");
  function Ao() {
    T.state.isDestroyed || (T.clearDelayTimeouts(), T.unmount(), Vn(), delete r._tippy, T.state.isDestroyed = true, fe("onDestroy", [T]));
  }
  __name(Ao, "Ao");
  u(Ao, "destroy");
}
__name(yv, "yv");
u(yv, "createTippy");
function yi(r, e) {
  e === void 0 && (e = {});
  var t = Sr.plugins.concat(e.plugins || []);
  uv();
  var i = Object.assign({}, e, { plugins: t }), l = iv(r);
  if (false)
    var c, f;
  var b = l.reduce(function(h, p) {
    var v = p && yv(p, i);
    return v && h.push(v), h;
  }, []);
  return Ua(r) ? b[0] : b;
}
__name(yi, "yi");
u(yi, "tippy");
yi.defaultProps = Sr;
yi.setDefaultProps = vv;
yi.currentInput = Pr;
var wv = Object.assign({}, uo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var Op = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], f = [], b, h = t.overrides, p = [], v = false;
  function x() {
    f = l.map(function(T) {
      return $n(T.props.triggerTarget || T.reference);
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
  function A(T) {
    return l.map(function(B) {
      var D = B.setProps;
      return B.setProps = function(W) {
        D(W), B.reference === b && T.setProps(W);
      }, function() {
        B.setProps = D;
      };
    });
  }
  __name(A, "A");
  u(A, "interceptSetProps");
  function C(T, B) {
    var D = f.indexOf(B);
    if (B !== b) {
      b = B;
      var W = (h || []).concat("content").reduce(function(Y, H) {
        return Y[H] = l[D].props[H], Y;
      }, {});
      T.setProps(Object.assign({}, W, { getReferenceClientRect: typeof W.getReferenceClientRect == "function" ? W.getReferenceClientRect : function() {
        var Y;
        return (Y = c[D]) == null ? void 0 : Y.getBoundingClientRect();
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
      D.props.showOnCreate && !v && (v = true, b = null);
    }, "onClickOutside"), onShow: u(function(D) {
      D.props.showOnCreate && !v && (v = true, C(D, c[0]));
    }, "onShow"), onTrigger: u(function(D, W) {
      C(D, W.currentTarget);
    }, "onTrigger") };
  }, "fn") }, k = yi(bi(), Object.assign({}, Kh(t, ["overrides"]), { plugins: [P].concat(t.plugins || []), triggerTarget: f, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [wv]) }) })), z = k.show;
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
  var L = k.setProps;
  return k.setProps = function(T) {
    h = T.overrides || h, L(T);
  }, k.setInstances = function(T) {
    M(true), p.forEach(function(B) {
      return B();
    }), l = T, M(false), S(), x(), p = A(k), k.setProps({ triggerTarget: f });
  }, p = A(k), k;
}, "createSingleton");
yi.setDefaultProps({ render: Tp });
var ct = yi;
var Ml = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Pe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = yt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = ct(this, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
      this.helpableService = st(this.helpableMachine).onTransition((i) => {
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
  return u(e, "HelpableMixinClass"), _([N], e.prototype, "help", 2), _([N], e.prototype, "helpId", 2), _([N], e.prototype, "debugHelpable", 2), e;
}
__name(Pe, "Pe");
u(Pe, "HelpableMixin");
function xe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), _([N], e.prototype, "hoverable", 2), e;
}
__name(xe, "xe");
u(xe, "HoverableMixin");
function* Va(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Va, "Va");
u(Va, "parse");
var Mp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Mp");
var sn = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "sn");
var Ir;
var Ya;
var Fr = /* @__PURE__ */ __name(class {
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
}, "Fr");
u(Fr, "AttributeTemplatePart");
Ir = /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ new WeakMap();
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
var Pp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Pp");
var wi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "wi");
var Ar;
var er = /* @__PURE__ */ __name(class {
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
}, "er");
u(er, "NodeTemplatePart");
Ar = /* @__PURE__ */ new WeakMap();
function go(r) {
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
__name(go, "go");
u(go, "createProcessor");
function bo(r, e) {
  r.value = String(e);
}
__name(bo, "bo");
u(bo, "processPropertyIdentity");
function Xa(r, e) {
  return typeof e == "boolean" && r instanceof Fr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(Xa, "Xa");
u(Xa, "processBooleanAttribute");
var Pl = go(bo);
var xv = go((r, e) => {
  Xa(r, e) || bo(r, e);
});
var Ip = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Ip");
var Za = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "Za");
var yo;
var wo;
function* Ev(r) {
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
              let b = new Fr(c, f.value);
              c.append(b), yield b;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Va(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new er(t, i.value));
        break;
      }
}
__name(Ev, "Ev");
u(Ev, "collectParts");
var ln = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = Pl) {
    var l, c;
    super();
    yo.set(this, void 0), wo.set(this, void 0), Object.getPrototypeOf(this) !== ln.prototype && Object.setPrototypeOf(this, ln.prototype), this.appendChild(e.content.cloneNode(true)), Ip(this, wo, Array.from(Ev(this)), "f"), Ip(this, yo, i, "f"), (c = (l = Za(this, yo, "f")).createCallback) === null || c === void 0 || c.call(l, this, Za(this, wo, "f"), t);
  }
  update(e) {
    Za(this, yo, "f").processCallback(this, Za(this, wo, "f"), e);
  }
}, "ln");
u(ln, "TemplateInstance");
yo = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap();
var Ap = /* @__PURE__ */ new WeakSet();
function _p(r) {
  return Ap.has(r);
}
__name(_p, "_p");
u(_p, "isDirective");
function kp(r, e) {
  return _p(e) ? (e(r), true) : false;
}
__name(kp, "kp");
u(kp, "processDirective");
function xo(r) {
  return (...e) => {
    let t = r(...e);
    return Ap.add(t), t;
  };
}
__name(xo, "xo");
u(xo, "directive");
var Eo = /* @__PURE__ */ new WeakMap();
var So = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), Eo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), Eo.get(this.element).delete(this.type));
  }
  static for(e) {
    Eo.has(e.element) || Eo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = Eo.get(e.element);
    return i.has(t) ? i.get(t) : new So(e.element, t);
  }
}, "So");
u(So, "EventHandler");
function zp(r, e) {
  return r instanceof Fr && r.attributeName.startsWith("on") ? (So.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(zp, "zp");
u(zp, "processEvent");
function Sv(r, e) {
  return e instanceof xi && r instanceof er ? (e.renderInto(r), true) : false;
}
__name(Sv, "Sv");
u(Sv, "processSubTemplate");
function Cv(r, e) {
  return e instanceof DocumentFragment && r instanceof er ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(Cv, "Cv");
u(Cv, "processDocumentFragment");
function Tv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(Tv, "Tv");
u(Tv, "isIterable");
function Ov(r, e) {
  if (!Tv(e))
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
__name(Ov, "Ov");
u(Ov, "processIterable");
function Ka(r, e) {
  kp(r, e) || Xa(r, e) || zp(r, e) || Sv(r, e) || Cv(r, e) || Ov(r, e) || bo(r, e);
}
__name(Ka, "Ka");
u(Ka, "processPart");
var Il = /* @__PURE__ */ new WeakMap();
var Rp = /* @__PURE__ */ new WeakMap();
var Dp = /* @__PURE__ */ new WeakMap();
var xi = /* @__PURE__ */ __name(class {
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
    if (Rp.get(e) !== t) {
      Rp.set(e, t);
      let i = new ln(t, this.values, this.processor);
      Dp.set(e, i), e instanceof er ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Dp.get(e).update(this.values);
  }
}, "xi");
u(xi, "TemplateResult");
var Mv = go(Ka);
function X(r, ...e) {
  return new xi(r, e, Mv);
}
__name(X, "X");
u(X, "html");
function ee(r, e) {
  r.renderInto(e);
}
__name(ee, "ee");
u(ee, "render");
var Al = /* @__PURE__ */ new WeakMap();
var Pv = xo((...r) => (e) => {
  Al.has(e) || Al.set(e, { i: r.length });
  let t = Al.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Ka(e, l));
    }) : i <= t.i && (t.i = i, Ka(e, r[i]));
});
var Iv = xo((r) => (e) => {
  if (!(e instanceof er))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function Re(r) {
  class e extends r {
    iconHtml(i) {
      return X`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return X([i]);
    }
    get iconStyle() {
      return X`<style>
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
__name(Re, "Re");
u(Re, "IconableMixin");
var Wr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Ke(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), _([N], e.prototype, "if", 2), e;
}
__name(Ke, "Ke");
u(Ke, "IfableMixin");
var Np = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ie(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = ct(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      return ee(X`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Wr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        K.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = ct(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (En(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        K.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = ct(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (zn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        K.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = ct(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      K.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = ct(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
__name(Ie, "Ie");
u(Ie, "MenuableMixin");
function Gp(r) {
  return /^-?\d+$/.test(r);
}
__name(Gp, "Gp");
u(Gp, "isNumeric");
function xt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(xt, "xt");
u(xt, "forceSigned");
var it = /* @__PURE__ */ __name(class extends Ie(Pe(Me(Oe(xe(HTMLElement))))) {
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
    if (K.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    ct(this, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return ee(X`
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
    let e = u((i) => X`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => X`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    ee(X`<style>
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
    return K.notNull(e), parseFloat(e);
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
    return K.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return K.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
}, "it");
u(it, "BlochDisplayElement"), _([ke], it.prototype, "body", 2), _([ke], it.prototype, "vectorLine", 2), _([ke], it.prototype, "vectorEnd", 2), _([ke], it.prototype, "vector", 2), _([at], it.prototype, "vectorEndCircles", 2), _([N], it.prototype, "x", 2), _([N], it.prototype, "y", 2), _([N], it.prototype, "z", 2);
te(it);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends Ie(Pe(Me(Be(Re(Oe(xe(HTMLElement))))))) {
  get operationType() {
    return Is;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(qp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Is}"`;
  }
}, "Ft");
u(Ft, "ControlGateElement");
te(Ft);
var Lp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(Me(Be(Re(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Lp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
}, "tr");
u(tr, "HGateElement");
te(tr);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ie(Pe(Hc(Me(Re(Oe(xe(HTMLElement))))))) {
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
    ee(X`<div part="body">
        ${this.iconHtml(jp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ga}"` : `"${ga}>${this.flag}"`;
  }
}, "rr");
u(rr, "MeasurementGateElement"), _([N], rr.prototype, "value", 2);
te(rr);
var Bp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  vector-effect="non-scaling-stroke"
>
  <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(rn(Me(Be(Re(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${pa}"` : `"${pa}(${this.angle.replace("/", "_")})"`;
  }
}, "nr");
u(nr, "PhaseGateElement");
te(nr);
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
  <path d="M10 24L13 24L14 36L17 36L18 12L38 12" vector-effect="non-scaling-stroke"/>
  <path d="M24 32L34 18M34 32L24 18" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(Me(Be(Re(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${fa}<${this.if}"` : `"${fa}"`;
  }
}, "ir");
u(ir, "RnotGateElement");
te(ir);
var $p = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(rn(Me(Be(Re(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml($p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ha}"` : `"${ha}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RxGateElement");
te(or);
var Fp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(rn(Me(Be(Re(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Fp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${va}"` : `"${va}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RyGateElement");
te(ar);
var Wp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(rn(Me(Be(Re(Oe(xe(HTMLElement)))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Wp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ma}"` : `"${ma}(${this.angle.replace("/", "_")})"`;
  }
}, "sr");
u(sr, "RzGateElement");
te(sr);
var Up = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends Ie(Pe($e(Me(Be(Re(Oe(xe(HTMLElement)))))))) {
  get operationType() {
    return Ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Up)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ps}"`;
  }
}, "lr");
u(lr, "SwapGateElement");
te(lr);
var Vp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(Me(Be(Re(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return da;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Vp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${da}<${this.if}"` : `"${da}"`;
  }
}, "ur");
u(ur, "TGateElement");
te(ur);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = /* @__PURE__ */ __name(class extends Ie(Pe(Me(Re(Oe(xe(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Ku;
      case "1":
        return Ju;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">
        ${this.iconHtml(Yp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Wt");
u(Wt, "WriteGateElement"), _([N], Wt.prototype, "value", 2);
te(Wt);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(Me(Be(Re(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return la;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Xp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${la}<${this.if}"` : `"${la}"`;
  }
}, "cr");
u(cr, "XGateElement");
te(cr);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(Me(Be(Re(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Zp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ua}<${this.if}"` : `"${ua}"`;
  }
}, "pr");
u(pr, "YGateElement");
te(pr);
var Kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends Ie(Pe(Ke($e(Me(Be(Re(Oe(xe(HTMLElement))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(X`<div part="body">${this.iconHtml(Kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ca}<${this.if}"` : `"${ca}"`;
  }
}, "dr");
u(dr, "ZGateElement");
te(dr);
var pt = u((r) => r instanceof tr || r instanceof cr || r instanceof pr || r instanceof dr || r instanceof nr || r instanceof ur || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof Ft || r instanceof it || r instanceof Wt || r instanceof rr, "isOperation");
var Jp = u((r) => r != null && r instanceof tr, "isHGateElement");
var Qp = u((r) => r != null && r instanceof cr, "isXGateElement");
var ed = u((r) => r != null && r instanceof pr, "isYGateElement");
var td = u((r) => r != null && r instanceof dr, "isZGateElement");
var Co = u((r) => r != null && r instanceof nr, "isPhaseGateElement");
var rd = u((r) => r != null && r instanceof ur, "isTGateElement");
var nd = u((r) => r != null && r instanceof ir, "isRnotGateElement");
var Ja = u((r) => r != null && r instanceof or, "isRxGateElement");
var Qa = u((r) => r != null && r instanceof ar, "isRyGateElement");
var es = u((r) => r != null && r instanceof sr, "isRzGateElement");
var id = u((r) => r != null && r instanceof lr, "isSwapGateElement");
var _l = u((r) => r != null && r instanceof Ft, "isControlGateElement");
var od = u((r) => r != null && r instanceof it, "isBlochDisplayElement");
var GC = u((r) => r != null && r instanceof Wt, "isWriteGateElement");
var ad = u((r) => r != null && r instanceof rr, "isMeasurementGateElement");
var To = ii(Da(), 1);
var kl = u((r) => r !== null && r instanceof Ur, "isAngleSliderElement");
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = yt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new St("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = Wi(this.angle));
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
    this.angleSliderService = st(this.angleSliderMachine).onTransition((e) => {
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
    (0, To.default)(this).unset();
  }
  update() {
    ee(X`<style>
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
    return K.notNull(i), K.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Ur");
u(Ur, "AngleSliderElement"), _([N], Ur.prototype, "angle", 2), _([N], Ur.prototype, "radian", 2), _([N], Ur.prototype, "denominator", 2), _([N], Ur.prototype, "disabled", 2), _([N], Ur.prototype, "debug", 2);
te(Ur);
var Oo = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    ee(X`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let t = e.currentTarget;
    K.notNull(t);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    t.setAttribute("data-active", "");
  }
}, "Oo");
u(Oo, "ButtonGroupElement"), _([at], Oo.prototype, "buttons", 2), Oo = _([te], Oo);
var Ei = ii(ld(), 1);
var Je = /* @__PURE__ */ __name(class extends HTMLElement {
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
    this.vertical = true;
    this.visibleQubitCircleKets = [];
    this.lastWindowScrollTop = null;
    this.lastWindowScrollLeft = null;
    this.lastColStartIndex = -1;
    this.lastColEndIndex = -1;
    this.lastRowStartIndex = -1;
    this.lastRowEndIndex = -1;
    this.qubitCirclePositions = [];
  }
  startBasicCircleNotationMode() {
    this.colorPhase = false;
  }
  startColorPhaseMode() {
    this.colorPhase = true;
  }
  attributeChangedCallback(e, t, i) {
    t !== i && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (K.notNull(i), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new St("unsupported qubit count", this.qubitCount);
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
          this.vertical ? (this.rowCount = 2, this.colCount = 4) : (this.rowCount = 1, this.colCount = 8);
          break;
        }
        case 4: {
          this.rowCount = 2, this.colCount = 8;
          break;
        }
        case 5: {
          this.vertical ? (this.rowCount = 4, this.colCount = 8) : (this.rowCount = 2, this.colCount = 16);
          break;
        }
        case 6: {
          this.rowCount = 4, this.colCount = 16;
          break;
        }
        case 7: {
          this.vertical ? (this.rowCount = 8, this.colCount = 16) : (this.rowCount = 4, this.colCount = 32);
          break;
        }
        case 8: {
          this.vertical ? (this.rowCount = 16, this.colCount = 16) : (this.rowCount = 8, this.colCount = 32);
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
          throw new St("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let t = e.getAttribute("data-ket");
      return K.notNull(t), parseInt(t);
    }), K.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    Ei.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        K.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, b = c.phase() / Math.PI * 180;
        t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? t.classList.add("magnitude-0") : (t.classList.remove("magnitude-0"), t.style.setProperty("--magnitude", f.toString()));
        let h = Math.trunc(b);
        h < 0 && (h = 360 + h), t.style.setProperty("--phase", `-${h.toString()}deg`);
      }
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.renderShadowRoot(), this.startLayoutOrientationChangeObserver(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles();
  }
  startLayoutOrientationChangeObserver() {
    this.vertical = this.isVertical(), new ResizeObserver(this.detectViewportOrientation.bind(this)).observe(document.body);
  }
  detectViewportOrientation() {
    let e = false;
    this.isVertical() ? (this.vertical || (e = true), this.vertical = true) : (this.vertical && (e = true), this.vertical = false), e && (this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.drawQubitCircles());
  }
  isVertical() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768;
  }
  renderShadowRoot() {
    ee(X`<style>
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
        throw new St("unsupported qubit count", this.qubitCount);
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
        throw new St("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.vertical) {
      let t = this.clientHeight;
      return this.rowCount > 4 && t < e ? t : e;
    } else
      return e;
  }
  get windowWidth() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.vertical) {
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
        throw new St("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    K.notNull(this.window), K.notNull(this.innerContainer), this.qubitCount !== 0 && Ei.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (Ei.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = e; f <= t; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), Ei.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let t of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(t);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    Ei.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let t = e.getAttribute("data-col"), i = e.getAttribute("data-row");
        K.notNull(t), K.notNull(i);
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
        throw new St("unsupported qubit count", this.qubitCount);
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
    K.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = ct(t, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    K.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    K.notNull(c);
    let f = t.getAttribute("data-amplitude-imag");
    K.notNull(f);
    let b = parseInt(l), h = parseFloat(c), p = parseFloat(f), v = new Kt(h, p), x = v.abs(), S = v.phase() / Math.PI * 180, M = document.importNode(this.qubitCirclePopupTemplate.content, true), A = M.getElementById("qubit-circle-popup--ket-binary-value"), C = M.getElementById("qubit-circle-popup--ket-decimal-value"), P = M.getElementById("qubit-circle-popup--amplitude"), k = M.getElementById("qubit-circle-popup--amplitude-real-value"), z = M.getElementById("qubit-circle-popup--amplitude-imag-value"), L = M.getElementById("qubit-circle-popup--probability"), T = M.getElementById("qubit-circle-popup--probability-value"), B = M.getElementById("qubit-circle-popup--phase"), D = M.getElementById("qubit-circle-popup--phase-value");
    K.notNull(P), K.notNull(k), K.notNull(z), K.notNull(L), K.notNull(T), K.notNull(B), K.notNull(D), A && (A.textContent = b.toString(2).padStart(this.qubitCount, "0")), C && (C.textContent = b.toString()), this.showQubitCirclePopupAmplitude ? (k.textContent = xt(v.real, 5), z.textContent = `${xt(v.imag, 5)}i`) : P.style.display = "none", this.showQubitCirclePopupProbability ? T.textContent = `${xt(x * x * 100, 4)}%` : L.style.display = "none", this.showQubitCirclePopupPhase ? D.textContent = `${xt(S, 2)}\xB0` : B.style.display = "none";
    let W = document.createElement("div");
    W.appendChild(M), i.setContent(W.innerHTML), i.show();
  }
  hideQubitCirclePopup(e) {
    let t = e.target;
    K.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    K.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "Je");
u(Je, "CircleNotationElement"), _([N], Je.prototype, "qubitCount", 2), _([N], Je.prototype, "qubitCircleSize", 2), _([N], Je.prototype, "colCount", 2), _([N], Je.prototype, "rowCount", 2), _([N], Je.prototype, "paddingX", 2), _([N], Je.prototype, "paddingY", 2), _([N], Je.prototype, "overscanCount", 2), _([N], Je.prototype, "colorPhase", 2), _([N], Je.prototype, "qubitCirclePopupTemplateId", 2), _([N], Je.prototype, "showQubitCirclePopupAmplitude", 2), _([N], Je.prototype, "showQubitCirclePopupProbability", 2), _([N], Je.prototype, "showQubitCirclePopupPhase", 2), _([N], Je.prototype, "vertical", 2), _([ke], Je.prototype, "window", 2), _([ke], Je.prototype, "innerContainer", 2), _([at], Je.prototype, "qubitCircles", 2), Je = _([te], Je);
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
      K.notNull(c);
      let f = Kt.from(l);
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
    if (ee(X`<style>
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
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : X`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(e) {
    return X`<div
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
    let t = X``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (f) => this.qubitCircleGroup(f, (b) => this.qubitCircleGroup(b, (h) => this.qubitCircleGroup(h, (p) => this.qubitCircleGroup(p)))))), 256);
    for (let l of i)
      t = X`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, f = 1) => c.reduce((b, h, p) => p % f ? b : [...b, c.slice(p, p + f)], []), "arrayChunk")(e, i).map((c) => {
      let f = X``;
      if (t)
        for (let b of t(c))
          f = X`${f} ${b}`;
      else
        for (let b of c)
          f = X`${f} ${this.qubitCircleHtml(b)}`;
      return i === 64 ? X`<div class="qubit-circle-group--size${i}" data-targets="circle-notation-old.qubitCircleGroups">
          ${f}
        </div>` : X`<div class="qubit-circle-group--size${i}">${f}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = ct(e);
    Op(t, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), f = t.getAttribute("data-magnitude"), b = t.getAttribute("data-phase"), h;
    l === null || c === null ? h = Kt.ZERO : h = new Kt(parseFloat(l), parseFloat(c));
    let p;
    f && parseFloat(f) === 0 ? p = 0 : p = b ? parseFloat(b) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, h, f ? parseFloat(f) : 0, p, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, f, b) {
    t._tippy.setContent(this.popupContent(e, i, l, c, f, b));
  }
  popupContent(e, t, i, l, c, f) {
    let b = e.querySelector(".ket-binary"), h = e.querySelector(".ket-decimal"), p = e.querySelector(".amplitude-real"), v = e.querySelector(".amplitude-imag"), x = e.querySelector(".probability"), S = e.querySelector(".phase");
    b && (b.textContent = t.toString(2).padStart(f, "0")), h && (h.textContent = t.toString()), p && (p.textContent = this.forceSigned(i.real, 5)), v && (v.textContent = `${this.forceSigned(i.imag, 5)}i`), x && (x.textContent = `${this.forceSigned(l * l * 100, 4)}%`), S && (S.textContent = `${this.forceSigned(c, 2)}\xB0`);
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
}, "fr");
u(fr, "CircleNotationOldElement"), _([N], fr.prototype, "qubitCount", 2), _([N], fr.prototype, "size", 2), _([N], fr.prototype, "magnitudes", 2), _([N], fr.prototype, "phases", 2), _([N], fr.prototype, "multiQubits", 2), _([N], fr.prototype, "showKets", 2), _([at], fr.prototype, "qubitCircles", 2), _([at], fr.prototype, "qubitCircleGroups", 2), _([at], fr.prototype, "visibleQubitCircleGroups", 2);
te(fr);
var ud = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var cd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Fn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.toggleGateSets(), this.toggleDots();
  }
  prevGateSet() {
    this.currentGateSetIndex--, this.currentGateSetIndex < 0 && (this.currentGateSetIndex = this.dots.length - 1), this.toggleGateSets(), this.toggleDots();
  }
  nextGateSet() {
    this.currentGateSetIndex++, this.currentGateSetIndex >= this.dots.length && (this.currentGateSetIndex = 0), this.toggleGateSets(), this.toggleDots();
  }
  toggleDots() {
    for (let [e, t] of this.dots.entries())
      e === this.currentGateSetIndex ? t.classList.add("dot--active") : t.classList.remove("dot--active");
  }
  toggleGateSets() {
    for (let [e, t] of this.gateSets.entries())
      e === this.currentGateSetIndex ? t.classList.remove("hidden") : t.classList.add("hidden");
  }
  update() {
    ee(X`
        <style>
          button {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            padding: 0;
            border-width: 0px;
            color: rgb(24 24 27);
            background-color: transparent;
          }

          .body {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1.5rem;
          }

          :host([data-targets='gate-carousel.gateSets']).hidden {
            display: none;
          }

          .dot-group {
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

        <button type="button" aria-label="prev gate set" data-action="click:gate-carousel#prevGateSet" style="left: 0">
          ${this.iconHtml(ud)}
        </button>
        <button type="button" aria-label="next gate set" data-action="click:gate-carousel#nextGateSet" style="right: 0">
          ${this.iconHtml(cd)}
        </button>

        <div class="body">
          <slot></slot>

          <div class="dot-group">${this.dotsHtml()}</div>
        </div>
      `, this.shadowRoot);
  }
  iconHtml(e) {
    return X`${this.iconSvg(e)}`;
  }
  iconSvg(e) {
    return X([e]);
  }
  dotsHtml() {
    let e = X``;
    for (let t = 0; t < this.gateSets.length; t++)
      e = X`${e}
        <div class="dot" data-targets="gate-carousel.dots"></div>`;
    return e;
  }
}, "Fn");
u(Fn, "GateCarouselElement"), _([N], Fn.prototype, "currentGateSetIndex", 2), _([at], Fn.prototype, "gateSets", 2), _([at], Fn.prototype, "dots", 2), Fn = _([te], Fn);
var Rl = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    ee(X`<slot></slot>`, this.shadowRoot);
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
    return K.notNull(e), e;
  }
  initPopup() {
    this.popup = ct(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !pt(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    K.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return ee(X`${t}`, i), i;
  }
}, "Rl");
u(Rl, "InspectorButtonElement");
te(Rl);
var It = /* @__PURE__ */ __name(class extends HTMLElement {
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
    if (this.clear(), this.disableAllPanes(), Wr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), En(e)) {
      let t = Wi(e.angle);
      Co(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ja(e) || Qa(e) || es(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
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
    ee(X`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!kl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!kl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    K.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Xu(e)) {
      let t, i = Wi(e);
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
    K.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Gp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "It");
u(It, "OperationInspectorElement"), _([ke], It.prototype, "ifInput", 2), _([ke], It.prototype, "angleInputLabel", 2), _([ke], It.prototype, "angleInput", 2), _([ke], It.prototype, "angleSlider", 2), _([ke], It.prototype, "denominatorInput", 2), _([ke], It.prototype, "denominatorVariableLabel", 2), _([ke], It.prototype, "denominatorLabel", 2), _([ke], It.prototype, "reduceAngleFractionCheckbox", 2), _([ke], It.prototype, "flagInput", 2), _([N], It.prototype, "conditionalGatePaneDisabled", 2), _([N], It.prototype, "anglePaneDisabled", 2), _([N], It.prototype, "conditionalFlagPaneDisabled", 2);
te(It);
var ts = ii(dd(), 1);
var Ut = /* @__PURE__ */ __name(class extends HTMLElement {
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
    ee(X`<style>
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
    let e = ct(this, { allowHTML: true, animation: false, delay: 0, theme: "qubit-circle" });
    if (this.popupTemplate === null)
      return;
    let t = document.importNode(this.popupTemplate.content, true), i = new ts.default(this.amplitude), l = t.getElementById("qubit-circle-popup--header"), c = t.getElementById("qubit-circle-popup--ket-binary-value"), f = t.getElementById("qubit-circle-popup--ket-decimal-value"), b = t.getElementById("qubit-circle-popup--amplitude"), h = t.getElementById("qubit-circle-popup--amplitude-real-value"), p = t.getElementById("qubit-circle-popup--amplitude-imag-value"), v = t.getElementById("qubit-circle-popup--probability"), x = t.getElementById("qubit-circle-popup--probability-value"), S = t.getElementById("qubit-circle-popup--phase"), M = t.getElementById("qubit-circle-popup--phase-value");
    K.notNull(l), K.notNull(c), K.notNull(f), K.notNull(b), K.notNull(h), K.notNull(p), K.notNull(v), K.notNull(x), K.notNull(S), K.notNull(M), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (h.textContent = xt(i.re, 5), p.textContent = `${xt(i.im, 5)}i`) : b.style.display = "none", this.showPopupProbability ? x.textContent = `${xt(this.magnitude * this.magnitude * 100, 4)}%` : v.style.display = "none", this.showPopupPhase ? M.textContent = `${xt(this.phase, 2)}\xB0` : S.style.display = "none";
    let A = document.createElement("div");
    A.appendChild(t), e.setContent(A.innerHTML), e.show();
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
    K.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "Ut");
u(Ut, "QubitCircleElement"), _([N], Ut.prototype, "ket", 2), _([N], Ut.prototype, "qubitCount", 2), _([N], Ut.prototype, "amplitude", 2), _([N], Ut.prototype, "hidePhase", 2), _([N], Ut.prototype, "popupTemplateId", 2), _([N], Ut.prototype, "showPopupHeader", 2), _([N], Ut.prototype, "showPopupAmplitude", 2), _([N], Ut.prototype, "showPopupProbability", 2), _([N], Ut.prototype, "showPopupPhase", 2), Ut = _([te], Ut);
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
var Wn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = yt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), b = f.left + window.pageXOffset, h = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (b + c)}px`, i.style.top = `${t.clientY - (h + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = st(this.runCircuitButtonMachine).onTransition((e) => {
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
    ee(X`<style>
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
    return X([fd]);
  }
  get tailSpinIcon() {
    return X([hd]);
  }
}, "Wn");
u(Wn, "RunCircuitButtonElement"), _([N], Wn.prototype, "running", 2), _([N], Wn.prototype, "debug", 2), _([ke], Wn.prototype, "body", 2), _([ke], Wn.prototype, "ripple", 2);
te(Wn);
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
    ee(X`<style>
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
u(un, "CircuitBlockElement"), _([N], un.prototype, "comment", 2), _([N], un.prototype, "finalized", 2), un = _([te], un);
var md = ii(Da(), 1);
var vd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Nl = u((r) => r != null && r instanceof Ct, "isCircuitDropzoneElement");
var Mo;
var Ct = /* @__PURE__ */ __name(class extends HTMLElement {
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
    this.circuitDropzoneMachine = yt({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      K.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      K.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
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
    this.circuitDropzoneService = st(this.circuitDropzoneMachine).onTransition((e) => {
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
    ee(X`<style>
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, md.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!pt(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  get wireSvg() {
    return X([vd]);
  }
}, "Ct");
u(Ct, "CircuitDropzoneElement"), Mo = /* @__PURE__ */ new WeakMap(), _([N], Ct.prototype, "operationName", 2), _([N], Ct.prototype, "inputWireQuantum", 2), _([N], Ct.prototype, "outputWireQuantum", 2), _([N], Ct.prototype, "connectTop", 2), _([N], Ct.prototype, "connectBottom", 2), _([N], Ct.prototype, "shadow", 2), _([N], Ct.prototype, "debug", 2);
te(Ct);
var cn = u((r) => r != null && r instanceof Dt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let f = e(i, l, c), b = t.get(f);
  return b ? b.push(i) : t.set(f, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Dt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = yt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      K.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = st(this.circuitStepMachine).onTransition((e) => {
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
    ee(X`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      Sn(l.operation) && (l.operation.controls = []);
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
      let c = this.phaseGateDropzones.filter((h) => h.connectTop || h.connectBottom).map((h) => this.bit(h)), f = Math.min(...c), b = Math.max(...c);
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
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((v) => v.operationName))], c = this.numControlGateDropzones(e, l), f = i.map((v) => this.bit(v)), b = c === null ? f : f.slice(0, c), h = t.map((v) => this.bit(v)), p = b.concat(h);
    for (let [v, x] of Object.entries(i)) {
      let S = x.operation;
      x.connectBottom = p.some((M) => this.bit(x) < M), x.connectTop = p.some((M) => this.bit(x) > M), c === null || c !== null && parseInt(v) < c ? S.enable() : (x.connectTop = Math.max(...p) > this.bit(x), S.disable());
    }
    for (let v of t) {
      if (!Sn(v.operation))
        throw new Error(`${v.operation} isn't controllable.`);
      v.operation.controls = this.controlBits(v, f, e), v.connectTop = p.some((x) => x < this.bit(v)), v.connectBottom = p.some((x) => x > this.bit(v));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((h) => _l(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), l = t.map((h) => this.bit(h)), c = i.concat(l), f = Math.min(...c), b = Math.max(...c);
    for (let h of this.freeDropzones)
      f < this.bit(h) && this.bit(h) < b && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return K.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return K.notNull(t), t;
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
    return this.dropzones.filter((e) => e.occupied && _l(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, b = 0, h = 0, p = 0, v = 0, x = 0;
    return this.dropzones.filter((S) => S.occupied).filter((S) => Sn(S.operation)).filter((S) => e === void 0 ? true : Jp(S.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Qp(S.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : ed(S.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : td(S.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : Co(S.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : rd(S.operation) ? (b += 1, e.maxCtTargetGates !== 0 && b > e.maxCtTargetGates ? false : !e.disableCt) : nd(S.operation) ? (h += 1, e.maxCrnotTargetGates !== 0 && h > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ja(S.operation) ? (p += 1, e.maxCrxTargetGates !== 0 && p > e.maxCrxTargetGates ? false : !e.disableCrx) : Qa(S.operation) ? (v += 1, e.maxCryTargetGates !== 0 && v > e.maxCryTargetGates ? false : !e.disableCry) : es(S.operation) ? (x += 1, e.maxCrzTargetGates !== 0 && x > e.maxCrzTargetGates ? false : !e.disableCrz) : id(S.operation) ? !e.disableCswap : true);
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
    pt(e.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
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
          for (let [c, f] of Ge(l, (b) => b.if))
            for (let [b, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], v = p.operationType, x = h.map((M) => M.bit), S = { type: v, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.if))
            for (let [b, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], v = p.operationType, x = h.map((M) => M.bit), S = { type: v, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.if))
            for (let [b, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], v = p.operationType, x = h.map((M) => M.bit), S = { type: v, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case dr: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.if))
            for (let [b, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], v = p.operationType, x = h.map((M) => M.bit), S = { type: v, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.angle))
            for (let [b, h] of Ge(f, (p) => p.if))
              for (let [p, v] of Ge(h, (x) => x.controls.toString())) {
                let x = v[0], S = x.operationType, M = v.map((C) => C.bit), A = { type: S, targets: M };
                b !== "" && (A.if = b), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.if))
            for (let [b, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], v = p.operationType, x = h.map((M) => M.bit), S = { type: v, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.if))
            for (let [b, h] of Ge(f, (p) => p.controls.toString())) {
              let p = h[0], v = p.operationType, x = h.map((M) => M.bit), S = { type: v, targets: x };
              c !== "" && (S.if = c), b !== "" && (S.controls = p.controls), e.push(S);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.angle))
            for (let [b, h] of Ge(f, (p) => p.if))
              for (let [p, v] of Ge(h, (x) => x.controls.toString())) {
                let x = v[0], S = x.operationType, M = v.map((C) => C.bit), A = { type: S, targets: M };
                b !== "" && (A.if = b), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.angle))
            for (let [b, h] of Ge(f, (p) => p.if))
              for (let [p, v] of Ge(h, (x) => x.controls.toString())) {
                let x = v[0], S = x.operationType, M = v.map((C) => C.bit), A = { type: S, targets: M };
                b !== "" && (A.if = b), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.angle))
            for (let [b, h] of Ge(f, (p) => p.if))
              for (let [p, v] of Ge(h, (x) => x.controls.toString())) {
                let x = v[0], S = x.operationType, M = v.map((C) => C.bit), A = { type: S, targets: M };
                b !== "" && (A.if = b), c !== "" && (A.angle = c), p !== "" && (A.controls = x.controls), e.push(A);
              }
          break;
        }
        case lr: {
          let l = i.filter((h) => !h.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, b = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (b.controls = f), e.push(b);
          break;
        }
        case Ft: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => Sn(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case it: {
          let l = i, c = i.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Wt: {
          let l = i;
          for (let [, c] of Ge(l, (f) => f.value)) {
            let f = c.map((b) => b.bit);
            e.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of Ge(l, (b) => b.flag)) {
            let b = f.map((v) => v.bit), p = { type: f[0].operationType, targets: b };
            c !== "" && (p.flag = c), e.push(p);
          }
          break;
        }
        default:
          throw new St("Unrecognized operation", { klass: t });
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
u(Dt, "CircuitStepElement"), _([N], Dt.prototype, "active", 2), _([N], Dt.prototype, "breakpoint", 2), _([N], Dt.prototype, "shadow", 2), _([N], Dt.prototype, "keep", 2), _([N], Dt.prototype, "debug", 2);
te(Dt);
var Si = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = yt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
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
        K.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), b = f.dropzones[l.wireIndex];
        K.notNull(b), b.append(i), b.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
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
    this.circuitEditorService = st(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${et(e.value)}`);
    });
  }
  connectedCallback() {
    this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable);
  }
  update() {
    ee(X`<slot></slot>`, this.shadowRoot);
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
    !pt(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!pt(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!pt(t))
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
    if (!En(t))
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
    if (!Wr(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: t.if });
  }
  setOperationAngle(e) {
    let t = e.target, i = this.activeOperation;
    if (K.notNull(i), !En(i))
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
    if (!pt(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!pt(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!pt(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!pt(t))
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
    if (!pt(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: f });
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
}, "Si");
u(Si, "CircuitEditorElement"), _([N], Si.prototype, "debug", 2), _([ke], Si.prototype, "circuit", 2), _([ke], Si.prototype, "inspectorButton", 2);
te(Si);
var Po;
var Gl = /* @__PURE__ */ __name(class extends HTMLElement {
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
    ee(X`<style>
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
    return Array.from(this.children).filter((e) => pt(e));
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
    if (!pt(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "Gl");
u(Gl, "PaletteDropzoneElement"), Po = /* @__PURE__ */ new WeakMap();
te(Gl);
var se = /* @__PURE__ */ __name(class extends xe(HTMLElement) {
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
    this.quantumCircuitMachine = yt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = st(this.quantumCircuitMachine).onTransition((e) => {
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
    return K.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
    return K.notNull(t), t;
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
      K.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && i !== null && this.makeOperationsHoverable(), e === "data-json" && i !== "" && i !== null && (this.loadFromJson(i), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    ee(X`<slot></slot>`, this.shadowRoot);
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
    let t = this.applyOperationToTargets(() => new Ft(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new it(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Wt();
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
      i.dropzoneAt(l).put(new Ft());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), b = Math.max(...f) + 1, h = this.appendStepWithDropzones(b);
    for (let p of l)
      h.dropzoneAt(p).put(new Ft());
    for (let p of c)
      h.dropzoneAt(p).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(h);
  }
  appendStep() {
    let e = new Dt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Dt();
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
      for (let b of c) {
        switch (true) {
          case /^\|0>$/.test(b): {
            let h = new Wt();
            h.value = "0", f.appendOperation(h);
            break;
          }
          case /^\|1>$/.test(b): {
            let h = new Wt();
            h.value = "1", f.appendOperation(h);
            break;
          }
          case /^H/.test(b): {
            let h = new tr();
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
            let h = new Ft();
            f.appendOperation(h);
            break;
          }
          case /^Bloch$/.test(b): {
            let h = new it();
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
            f.remove(), t = new un(), t.comment = h, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
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
          let f = c.map((v) => i.bit(v)), b = i.bit(l), h = f[0] === b ? f[1] : f[0], p = i.dropzoneAt(h);
          l.inputWireQuantum = t, l.outputWireQuantum = p.inputWireQuantum, t = p.inputWireQuantum;
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
    if (!Nl(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    K.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
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
      let b = f.snapTarget, h = this.isVertical ? b.y : b.x, p = this.isVertical ? b.x : b.y, v = parseInt(c) % this.wireCount, x = h - e.snapRange * 0.75, S = h + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: p, y: x }) : i.push({ x, y: p }), this.snapTargets[x] === void 0 && (this.snapTargets[x] = {}), this.snapTargets[x][p] === void 0 && (this.snapTargets[x][p] = { dropzone: null, stepIndex: -1, wireIndex: v })), this.isVertical ? i.push({ x: p, y: S }) : i.push({ x: S, y: p }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][p] === void 0 && (this.snapTargets[S][p] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: v }), (!f.occupied || f === l) && i.push(b), this.snapTargets[h] === void 0 && (this.snapTargets[h] = {}), this.snapTargets[h][p] === void 0 && (this.snapTargets[h][p] = { dropzone: f, stepIndex: null, wireIndex: v });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    K.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let b = c[f];
          b.stepIndex !== null && (b.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let f = c.snapTarget, b = this.isVertical ? f.y : f.x, h = this.isVertical ? f.x : f.y;
      K.notNull(this.snapTargets[b]), this.snapTargets[b][h] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), _([N], se.prototype, "minStepCount", 2), _([N], se.prototype, "minWireCount", 2), _([N], se.prototype, "maxWireCount", 2), _([N], se.prototype, "editing", 2), _([N], se.prototype, "updateUrl", 2), _([N], se.prototype, "json", 2), _([N], se.prototype, "circuitTitle", 2), _([N], se.prototype, "debug", 2), _([N], se.prototype, "chDisabled", 2), _([N], se.prototype, "chMaxControlGates", 2), _([N], se.prototype, "chMaxTargetGates", 2), _([N], se.prototype, "cnotDisabled", 2), _([N], se.prototype, "cnotMaxControlGates", 2), _([N], se.prototype, "cnotMaxTargetGates", 2), _([N], se.prototype, "cyDisabled", 2), _([N], se.prototype, "cyMaxControlGates", 2), _([N], se.prototype, "cyMaxTargetGates", 2), _([N], se.prototype, "czDisabled", 2), _([N], se.prototype, "czMaxControlGates", 2), _([N], se.prototype, "czMaxTargetGates", 2), _([N], se.prototype, "cphaseDisabled", 2), _([N], se.prototype, "cphaseMaxControlGates", 2), _([N], se.prototype, "cphaseMaxTargetGates", 2), _([N], se.prototype, "ctDisabled", 2), _([N], se.prototype, "ctMaxControlGates", 2), _([N], se.prototype, "ctMaxTargetGates", 2), _([N], se.prototype, "crnotDisabled", 2), _([N], se.prototype, "crnotMaxControlGates", 2), _([N], se.prototype, "crnotMaxTargetGates", 2), _([N], se.prototype, "crxDisabled", 2), _([N], se.prototype, "crxMaxControlGates", 2), _([N], se.prototype, "crxMaxTargetGates", 2), _([N], se.prototype, "cryDisabled", 2), _([N], se.prototype, "cryMaxControlGates", 2), _([N], se.prototype, "cryMaxTargetGates", 2), _([N], se.prototype, "crzDisabled", 2), _([N], se.prototype, "crzMaxControlGates", 2), _([N], se.prototype, "crzMaxTargetGates", 2), _([N], se.prototype, "cswapDisabled", 2), _([N], se.prototype, "cswapMaxControlGates", 2), _([N], se.prototype, "swapDisabled", 2), _([N], se.prototype, "controlControlDisabled", 2), _([N], se.prototype, "controlControlMaxTargetGates", 2), _([N], se.prototype, "phasePhaseDisabled", 2), _([N], se.prototype, "phasePhaseMaxTargetGates", 2), _([at], se.prototype, "blocks", 2);
te(se);
var Un = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.freshRun), this.addEventListener("circuit-step-unsnap", this.freshRun), this.addEventListener("circuit-step-update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    ee(X`<slot></slot>`, this.shadowRoot);
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
          let b = parseInt(f), h = c.dropzoneAt(b).operation;
          if (od(h)) {
            let p = t.blochVectors[b];
            h.x = p[0], h.y = p[1], h.z = p[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let b in f) {
            let h = parseInt(b), p = c.dropzoneAt(h).operation;
            ad(p) && (p.value = f[h].toString());
          }
        }
        for (let f of c.dropzones) {
          let b = f.operation;
          !Wr(b) || b.if !== "" && (b.disabled = !t.flags[b.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let b in t.amplitudes) {
            let h = t.amplitudes[b];
            f[b] = new Kt(h[0], h[1]);
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
        throw new St("Unknown service worker message", { data: t });
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
    K.need(i.length > 0, "non-zero step length");
    let l = this.circuit.toJson(), c = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: c, stepIndex: t, circuitJson: l, invalidateCaches: e, steps: i, targets: this.circleNotation.visibleQubitCircleKets });
  }
  setCircleNotationQubitCount() {
    let e = this.circuit.serialize();
    K.need(e.length > 0, "non-zero step length");
    let t = Math.max(...e.map((l) => Math.max(...l.map((c) => {
      let f = [];
      return Sn(c) && (f = c.controls), Math.max(...c.targets.concat(f));
    })))), i = t >= 0 ? t + 1 : 1;
    return this.circleNotation.qubitCount = i, i;
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
    K.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "Un");
u(Un, "QuantumSimulatorElement"), _([N], Un.prototype, "updateUrl", 2), _([ke], Un.prototype, "circuit", 2), _([ke], Un.prototype, "circleNotation", 2), _([at], Un.prototype, "runCircuitButtons", 2);
te(Un);

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
  Kt as Complex
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
